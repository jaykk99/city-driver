// CITY DRIVER — fire: the Winnipeg Fire Paramedic Service firefighter job.
//
// The ambulance answers medical calls, but nobody in the city answers a
// fire. This closes that gap with the classic firefighter loop, on the
// same pattern as the ambulance calls: drive the fire truck in free roam
// and a call comes in — a building fire on a street somewhere in the
// city. Race to it, park close, and spray water until the fire is out.
// The fire is not a timer you watch — it is a blaze you fight: it grows
// every second you are not spraying it, and if it hits full engulfment
// the building is lost and the call pays nothing. Get there fast and the
// building is still mostly standing, which is what the saved bonus pays
// for: base fee plus a speed bonus for beating par and a saved bonus for
// how little of the building burned. Wreck the rig mid-call and the call
// is lost with nothing to show for it. Fares surge with the time of day
// and the weather, locked in when the call starts, the same as a cab
// fare. Career totals (calls, fires out, earnings, rating) persist in
// the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the fire
// visual, the water jet, the HUD, the toasts and the cash; this module
// only decides what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const FIRE_BASE_PAY = 250;        // $ for putting a fire out
export const FIRE_SPEED_BONUS_MAX = 150; // $ for beating par, before surge
export const FIRE_SAVED_BONUS_MAX = 100; // $ for a building saved mostly intact, before surge
export const FIRE_RADIUS = 14;           // m: park this close to spray the fire
export const SPRAY_SPEED_MAX = 1;        // m/s: must be near-stopped to spray
export const CALL_DELAY_MIN = 10;        // s between calls (short end)
export const CALL_DELAY_MAX = 25;        // s between calls (long end)
export const FIRE_COOLDOWN = 6;          // s after a call ends before the next one
export const FIRE_RETRY = 5;             // s: wait before retrying when no call fits
export const INTENSITY_MIN = 30;         // fire intensity at the call (smallest)
export const INTENSITY_MAX = 55;         // fire intensity at the call (biggest)
export const INTENSITY_FULL = 100;       // intensity at full engulfment: the call is lost
export const INTENSITY_DANGER = 75;      // above this the fire is about to be lost
export const INTENSITY_GROW = 1.5;       // intensity /s while nobody is spraying it
export const INTENSITY_SPRAY = 9;        // intensity /s knocked down while spraying
export const EXTINGUISH_GRACE = 8;       // s of slack on the extinguish leg's par

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Par time for the respond leg: city pace ~11 m/s (the deliver missions'
// base pace) plus a grace window for lights, traffic and the stop.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Par time for the extinguish leg: the time the spray needs to knock the
// fire down from the intensity it had when the truck arrived, plus grace
// for parking up and getting the hose on it.
export function extinguishParFor(intensity){
  return Math.round(intensity / INTENSITY_SPRAY + EXTINGUISH_GRACE);
}

// Speed bonus: the full $150 at par or better, sliding to nothing at
// twice par — a slow drive still pays the base, it just earns no bonus.
export function speedBonusFor(totalSeconds, totalPar){
  if(totalPar <= 0) return 0;
  const frac = clamp(1 - (totalSeconds - totalPar) / totalPar, 0, 1);
  return Math.round(FIRE_SPEED_BONUS_MAX * frac);
}

// Saved bonus: a building that barely burned pays the full $100; one
// that was nearly gone when the water finally hit pays almost nothing.
// The peak is the worst the fire ever got, so dawdling on the way there
// costs real money even if the spray itself was quick.
export function savedBonusFor(peakIntensity){
  return Math.round(FIRE_SAVED_BONUS_MAX * clamp(1 - peakIntensity / INTENSITY_FULL, 0, 1));
}

// Call rating, 1-5 stars: a fast save of a mostly-intact building is 5.
// Running late costs 1, a badly burned building costs 1 (peak 60+) or 2
// (peak 85+). A late, nearly-lost building drops to 2, never below.
export function ratingFor(peakIntensity, onTime){
  let stars = 5;
  if(!onTime) stars -= 1;
  if(peakIntensity >= 85) stars -= 2;
  else if(peakIntensity >= 60) stars -= 1;
  return clamp(stars, 1, 5);
}

export function isFireCar(carDef){
  return !!carDef && carDef.extra === 'fire';
}

// A road point near the fire truck: where the fire is burning. Same
// retry shape as the taxi hailers — 8 tries on the grid lines, then the
// last point.
export function firePointNear(px, pz, rng){
  const EDGE = GRID_HALF - 12;
  let p = { x:clamp(px, -EDGE, EDGE), z:clamp(pz, -EDGE, EDGE) };
  for(let k = 0; k < 8; k++){
    const axisZ = rng() < 0.5, line = LINES[(rng() * LINES.length) | 0];
    const s = -EDGE + rng() * EDGE * 2, side = rng() < 0.5 ? 1 : -1;
    p = axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
    const d = dist({ x:px, z:pz }, p);
    if(d >= 60 && d <= 400) break;
  }
  return p;
}

// Fire intensity at the call: never a wisp (30+) and never half-gone
// (55) — every call is a real fire with real time pressure.
export function intensityFor(rng){
  return INTENSITY_MIN + ((rng() * (INTENSITY_MAX - INTENSITY_MIN + 1)) | 0);
}

// ---------- custom maps ----------

// Call picker for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets calls when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no calls.
export function firePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The fire: a road tile near the truck, or the nearest road at all
  // when the truck is off the streets; null when the map has no roads.
  function callNear(px, pz, rng){
    if(!roads.length) return null;
    const p = toLocal({ x:px, z:pz });
    let best = null, bestD = Infinity;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - p.x, t.z - p.z);
      if(d < bestD){ best = t; bestD = d; }
      if(d >= 60 && d <= 400) break;
    }
    return best ? toWorld(best) : null;
  }
  return { callNear };
}

// States: off (not in a fire truck) -> idle (in one, waiting for a call)
// -> respond (racing to the fire) -> extinguish (parked close, spraying)
// -> cooldown -> idle. Events are returned from update() for main.js to
// toast/pay on.
const MAIN_CITY_PICKERS = {
  callNear: firePointNear,
};
export function createFireJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inFire = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next call; cooldown: until idle
  let fire = null;               // where the fire is burning
  let intensity = 0;             // fire intensity, 0-100
  let peak = 0;                  // worst intensity this call ever reached
  let dangerWarned = false;      // the 'danger' event fires once per call
  let respondPar = 0, respondSeconds = 0;
  let extinguishPar = 0, extinguishSeconds = 0;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current call started — the pay is fixed at the first ring, so
  // the sky changing mid-call never reprices a call already running.
  let curSurge = 1, callSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let calls = 0, out = 0, earned = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return CALL_DELAY_MIN + rng() * (CALL_DELAY_MAX - CALL_DELAY_MIN); }

  // Start a call near the truck: a fire on a road nearby. Null when the
  // world cannot carry a call (custom map with no roads).
  function buildCall(ctx){
    const p = activePickers.callNear(ctx.x, ctx.z, rng);
    if(!p) return null;
    return { fire:p };
  }

  // End a live call without pay. Returns true when a call was live.
  // The cooldown only applies when the fire truck is still the car
  // (setInFireTruck(true) re-arms idle).
  function endCall(){
    const wasLive = state === 'respond' || state === 'extinguish';
    state = inFire ? 'cooldown' : 'off'; timer = FIRE_COOLDOWN;
    fire = null; intensity = 0; peak = 0;
    return wasLive;
  }

  // Close enough and slow enough to spray: the hose only works parked
  // at the fire, not from a drive-by.
  function spraying(ctx){
    return state === 'extinguish' && fire
      && dist(ctx, fire) < FIRE_RADIUS && Math.abs(ctx.speed) < SPRAY_SPEED_MAX;
  }

  return {
    get state(){ return state; },
    get inFireTruck(){ return inFire; },
    get active(){ return state === 'respond' || state === 'extinguish'; },
    // Where the beacon + radar dot point: the fire, both legs.
    get target(){ return (state === 'respond' || state === 'extinguish') ? fire : null; },
    get fire(){ return (state === 'respond' || state === 'extinguish') ? fire : null; },
    // Fire intensity right now (0 when no call is live).
    get intensity(){ return (state === 'respond' || state === 'extinguish') ? Math.max(0, Math.round(intensity)) : 0; },
    // Worst intensity this call ever reached — what the saved bonus pays on.
    get peak(){ return (state === 'respond' || state === 'extinguish') ? Math.max(0, Math.round(peak)) : 0; },
    // Seconds left on this leg's schedule (negative = running late).
    get timeLeft(){
      if(state === 'respond') return respondPar - respondSeconds;
      if(state === 'extinguish') return extinguishPar - extinguishSeconds;
      return 0;
    },
    // The siren is on while a call is live — the HUD and the beacon read this.
    get siren(){ return state === 'respond' || state === 'extinguish'; },
    get calls(){ return calls; },
    get out(){ return out; },
    get earned(){ return earned; },
    get ratingCount(){ return ratingCount; },
    // Lifetime call rating, 1-5; 0 until the first fire put out.
    get ratingAvg(){ return ratingCount ? ratingSum / ratingCount : 0; },
    // Surge in effect: the locked-in rate during a call, the live rate
    // otherwise (1 in the day, 1.5 at night). The HUD reads this.
    get surge(){ return (state === 'respond' || state === 'extinguish') ? callSurge : curSurge; },
    // Career snapshot for the save file (plain numbers, no state).
    get career(){ return { calls, out, earned, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      calls = n(c.calls); out = n(c.out); earned = n(c.earned);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live call
    // before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the fire truck killed a live call.
    // Leaving the truck ends the shift, so a fire left burning is lost either way.
    setInFireTruck(v){
      if(v === inFire) return null;
      inFire = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      if(state === 'respond' || state === 'extinguish'){
        endCall();
        state = 'off'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the truck, the garage, the menu: a live call ends,
    // quietly, and an unfinished call never pays. Returns true when a
    // call was actually live.
    abandon(){
      if(state !== 'respond' && state !== 'extinguish') return false;
      endCall();
      return true;
    },

    // ctx = { x, z, speed, hp, maxHp?, surge? }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      const s = ctx && ctx.surge;
      curSurge = (typeof s === 'number' && isFinite(s) && s > 0) ? s : 1;
      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          const call = buildCall(ctx);
          if(!call){ timer = FIRE_RETRY; }
          else{
            fire = call.fire;
            intensity = intensityFor(rng);
            peak = intensity;
            dangerWarned = intensity >= INTENSITY_DANGER;
            respondPar = legParFor(dist(ctx, fire)); respondSeconds = 0;
            extinguishPar = 0; extinguishSeconds = 0;
            callSurge = curSurge;   // the pay is fixed when the call comes in
            state = 'respond';
            events.push({ type:'callStart', fire:{ ...fire },
              intensity: Math.round(intensity), surge: callSurge, par: respondPar });
          }
        }
      }else if(state === 'respond'){
        respondSeconds += dt;
        intensity += INTENSITY_GROW * dt;
        peak = Math.max(peak, intensity);
        if(intensity >= INTENSITY_FULL){
          // Too slow: the building is fully engulfed before the truck got there.
          intensity = INTENSITY_FULL;
          endCall();
          events.push({ type:'callFailed', reason:'engulfed', onScene:false,
            seconds: respondSeconds });
          return events;
        }
        if(intensity >= INTENSITY_DANGER && !dangerWarned){
          dangerWarned = true;
          events.push({ type:'danger', intensity: Math.round(intensity) });
        }
        if(ctx.hp <= 0){
          // Wrecked on the way: the call is lost, nobody was saved.
          endCall();
          events.push({ type:'callFailed', reason:'wrecked', onScene:false });
        }else if(dist(ctx, fire) < FIRE_RADIUS && Math.abs(ctx.speed) < SPRAY_SPEED_MAX){
          // On scene: the clock switches to the extinguish leg — its par
          // is set from the fire as it stands now, not from the call start.
          extinguishPar = extinguishParFor(intensity); extinguishSeconds = 0;
          state = 'extinguish';
          events.push({ type:'onScene', fire:{ ...fire }, intensity: Math.round(intensity),
            par: extinguishPar, timeLeft: extinguishPar });
        }
      }else if(state === 'extinguish'){
        extinguishSeconds += dt;
        if(spraying(ctx)){
          intensity -= INTENSITY_SPRAY * dt;
        }else{
          // Not spraying — parked too far, still moving, or drove off:
          // the fire keeps growing while the hose is off it.
          intensity += INTENSITY_GROW * dt;
        }
        peak = Math.max(peak, intensity);
        if(intensity >= INTENSITY_FULL){
          // Left it burning too long: the building is gone.
          intensity = INTENSITY_FULL;
          endCall();
          events.push({ type:'callFailed', reason:'engulfed', onScene:true,
            seconds: respondSeconds + extinguishSeconds });
          return events;
        }
        if(intensity >= INTENSITY_DANGER && !dangerWarned){
          dangerWarned = true;
          events.push({ type:'danger', intensity: Math.round(intensity) });
        }
        if(ctx.hp <= 0){
          // Wrecked at the scene: the call is lost.
          endCall();
          events.push({ type:'callFailed', reason:'wrecked', onScene:true });
        }else if(intensity <= 0){
          // Fire out: base + speed bonus + saved bonus, all times the
          // surge locked in when the call came in.
          const totalSeconds = respondSeconds + extinguishSeconds;
          const totalPar = respondPar + extinguishPar;
          const onTime = totalSeconds <= totalPar;
          const speedBonus = speedBonusFor(totalSeconds, totalPar);
          const savedBonus = savedBonusFor(peak);
          const subtotal = FIRE_BASE_PAY + speedBonus + savedBonus;
          const total = Math.round(subtotal * callSurge);
          const rating = ratingFor(peak, onTime);
          ratingSum += rating; ratingCount++; calls++; out++; earned += total;
          const pk = Math.round(peak);
          endCall();
          state = 'cooldown'; timer = FIRE_COOLDOWN;
          events.push({ type:'extinguished', base: FIRE_BASE_PAY, speedBonus, savedBonus,
            subtotal, total, rating, ratingAvg: ratingCount ? ratingSum / ratingCount : 0,
            peak: pk, onTime, calls, out, earned, surge: callSurge,
            seconds: totalSeconds, par: totalPar });
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inFire ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },

    // Is the truck spraying right now, for this frame's position? main.js
    // reads this every frame to show the water jet; the state machine
    // itself only needs it inside update().
    isSpraying(ctx){
      return spraying(ctx || { x:0, z:0, speed:Infinity });
    },
  };
}
