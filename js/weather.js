// CITY DRIVER — weather: the sky over the city is not a backdrop, it is a
// shift. Clear skies give way to cloud, rain and full storms on a slow
// cycle; rain and storms make the roads slick (less grip), dim the sun,
// and pay cab drivers a weather surge on top of the time-of-day surge —
// rain +25%, storm +50% — locked in at pickup like every other surge.
// Storms throw lightning: a flash event main.js turns into a sky flash.
// A storm is also the only time the city is at its most dangerous and its
// most lucrative at once, which is the point.
//
// Pure state machine + weather math, no THREE and no document, so the
// whole loop is unit-testable in node. main.js owns the rain particles,
// the sky dimming, the lightning flash, the HUD chip and the cash; this
// module only decides what the weather is and what it does to the drive.

export const WEATHER_STATES = ['clear', 'cloudy', 'rain', 'storm'];
export const WEATHER_RAMP = 8;          // s: rain fades in/out over this long
export const LIGHTNING_MIN = 5;         // s between lightning strikes, short end
export const LIGHTNING_MAX = 16;        // s between lightning strikes, long end
// How long each kind of sky lasts before the weather rolls again.
export const WEATHER_DURATIONS = {
  clear: [150, 300],
  cloudy: [60, 150],
  rain: [90, 200],
  storm: [45, 120],
};
// Grip on wet roads: rain costs ~15% of the tyre's grip, a storm ~28%.
// The numbers are the floor at full intensity; the ramp scales them in.
export const GRIP_FLOOR = { clear: 1, cloudy: 1, rain: 0.85, storm: 0.72 };
// Weather surge on cab fares, on top of the time-of-day surge: rain
// pays +25%, a storm +50%. Locked in at pickup, like every other surge.
export const WEATHER_SURGE = { clear: 1, cloudy: 1, rain: 1.25, storm: 1.5 };
// How much of the sun is left under each sky (1 = full sun). The ramp
// scales the dimming in as the rain builds.
export const DIM_FLOOR = { clear: 1, cloudy: 0.92, rain: 0.55, storm: 0.32 };

// Human label for a sky, for the HUD chip and toasts.
export function weatherLabelFor(state){
  if(state === 'rain') return 'Rain';
  if(state === 'storm') return 'Storm';
  if(state === 'cloudy') return 'Cloudy';
  return 'Clear';
}
// Human label for a weather surge, for toasts and the HUD; '' at no surge.
export function weatherSurgeLabelFor(state){
  if(state === 'storm') return 'Storm surge';
  if(state === 'rain') return 'Rain surge';
  return '';
}
// True while it is actually raining (rain or storm): rain particles on,
// headlights on, roads slick.
export function isWet(state){
  return state === 'rain' || state === 'storm';
}

// Grip multiplier for a sky at a given rain intensity (0..1): at full
// intensity a storm leaves 72% of the grip, at half intensity halfway
// there, in the dry it is always 1. Bad values read as dry, never as ice.
export function gripFor(state, intensity = 1){
  const floor = GRIP_FLOOR[state];
  if(typeof floor !== 'number') return 1;
  const i = (typeof intensity === 'number' && isFinite(intensity)) ? Math.max(0, Math.min(1, intensity)) : 1;
  return 1 - (1 - floor) * i;
}

// Weather surge multiplier for a sky: rain 1.25, storm 1.5, dry 1.
// Unknown skies pay the meter, never more.
export function weatherSurgeFor(state){
  const s = WEATHER_SURGE[state];
  return (typeof s === 'number' && isFinite(s) && s > 0) ? s : 1;
}

// Sun left under a sky at a given rain intensity (0..1): a storm at full
// strength leaves about a third of the sun. Dry skies stay full.
export function dimFor(state, intensity = 1){
  const floor = DIM_FLOOR[state];
  if(typeof floor !== 'number') return 1;
  const i = (typeof intensity === 'number' && isFinite(intensity)) ? Math.max(0, Math.min(1, intensity)) : 1;
  return 1 - (1 - floor) * i;
}

// How long a sky lasts: a draw inside its range, so no two shifts feel
// the same length. A bad range reads as the clear default.
export function durationFor(state, rng){
  const r = WEATHER_DURATIONS[state] || WEATHER_DURATIONS.clear;
  return r[0] + rng() * (r[1] - r[0]);
}

// The next sky after this one: clear mostly clouds over, cloud mostly
// rains or clears, rain sometimes turns into a storm and sometimes
// breaks, a storm always breaks back into rain or cloud — so the weather
// rolls forward instead of flipping straight from sun to lightning.
export function nextState(state, rng){
  const roll = rng();
  if(state === 'clear') return roll < 0.7 ? 'cloudy' : 'clear';
  if(state === 'cloudy') return roll < 0.6 ? 'rain' : 'clear';
  if(state === 'rain'){
    if(roll < 0.25) return 'storm';
    if(roll < 0.7) return 'cloudy';
    return 'clear';
  }
  if(state === 'storm') return roll < 0.7 ? 'rain' : 'cloudy';
  return 'clear';
}

// A weather cycle: starts clear, rolls to a new sky when its timer runs
// out, ramps the rain in/out over WEATHER_RAMP seconds, and throws a
// lightning strike every few seconds while a storm is on. Events are
// returned from update() for main.js to flash, dim and toast on.
// `opts.start` forces the opening sky (tests start in a storm);
// production always starts clear.
export function createWeather(rng = Math.random, opts = {}){
  let state = (opts && WEATHER_STATES.includes(opts.start)) ? opts.start : 'clear';
  let timer = durationFor(state, rng);
  let intensity = isWet(state) ? 1 : 0;   // 0..1: rain strength right now
  let lightningTimer = LIGHTNING_MIN + rng() * (LIGHTNING_MAX - LIGHTNING_MIN);

  return {
    get state(){ return state; },
    // Rain strength right now: 0 in the dry, ramping to 1 as the rain
    // builds, fading back out as it clears. The HUD and the grip read this.
    get intensity(){ return intensity; },
    get wet(){ return isWet(state); },
    get grip(){ return gripFor(state, intensity); },
    get surge(){ return weatherSurgeFor(state); },
    get dim(){ return dimFor(state, intensity); },
    get label(){ return weatherLabelFor(state); },
    // Seconds until the sky rolls again (0 the moment it just changed).
    get timeLeft(){ return timer; },

    // Jump the cycle (tests, and a debug hook): the new sky gets a full
    // fresh duration, the rain ramps from where it is, and the lightning
    // clock restarts so a forced storm flashes promptly.
    setState(s){
      if(!WEATHER_STATES.includes(s)) return false;
      const from = state;
      state = s; timer = durationFor(state, rng);
      lightningTimer = LIGHTNING_MIN + rng() * (LIGHTNING_MAX - LIGHTNING_MIN);
      return from !== state;
    },

    // dt seconds. Returns events for main.js.
    update(dt){
      const events = [];
      const d = (typeof dt === 'number' && isFinite(dt) && dt > 0) ? dt : 0;
      // Rain ramps toward its target: full strength in the wet, dry
      // otherwise, over WEATHER_RAMP seconds either way.
      const target = isWet(state) ? 1 : 0;
      if(intensity !== target){
        const step = d / WEATHER_RAMP;
        intensity = target > intensity
          ? Math.min(target, intensity + step)
          : Math.max(target, intensity - step);
      }
      // Lightning only lives in a storm: a strike every few seconds,
      // each one a flash main.js draws. The timer never fires in the dry.
      if(state === 'storm'){
        lightningTimer -= d;
        if(lightningTimer <= 0){
          lightningTimer = LIGHTNING_MIN + rng() * (LIGHTNING_MAX - LIGHTNING_MIN);
          events.push({ type:'lightning' });
        }
      }
      timer -= d;
      if(timer <= 0){
        const from = state;
        state = nextState(state, rng);
        timer = durationFor(state, rng);
        events.push({ type:'weatherChanged', from, to: state });
      }
      return events;
    },
  };
}
