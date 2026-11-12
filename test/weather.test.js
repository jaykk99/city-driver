// Tests for the weather loop: the sky must roll through its states on a
// sane clock, rain must cost grip and pay a surge, storms must throw
// lightning and nothing else may, and the rain must ramp in and out
// instead of snapping on.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  WEATHER_STATES, WEATHER_RAMP, WEATHER_DURATIONS,
  GRIP_FLOOR, WEATHER_SURGE, DIM_FLOOR,
  weatherLabelFor, weatherSurgeLabelFor, isWet,
  gripFor, weatherSurgeFor, dimFor, durationFor, nextState,
  createWeather,
} from '../js/weather.js';

// Deterministic rng cycling through varied values, so transitions and
// durations actually explore instead of repeating one draw.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const fixedRng = v => () => v;

describe('weather math', () => {
  it('labels and surge labels name each sky, dry skies pay the meter', () => {
    assert.equal(weatherLabelFor('clear'), 'Clear');
    assert.equal(weatherLabelFor('cloudy'), 'Cloudy');
    assert.equal(weatherLabelFor('rain'), 'Rain');
    assert.equal(weatherLabelFor('storm'), 'Storm');
    assert.equal(weatherSurgeLabelFor('clear'), '');
    assert.equal(weatherSurgeLabelFor('cloudy'), '');
    assert.equal(weatherSurgeLabelFor('rain'), 'Rain surge');
    assert.equal(weatherSurgeLabelFor('storm'), 'Storm surge');
    assert.equal(weatherSurgeFor('clear'), 1);
    assert.equal(weatherSurgeFor('cloudy'), 1);
    assert.equal(weatherSurgeFor('rain'), WEATHER_SURGE.rain);
    assert.equal(weatherSurgeFor('storm'), WEATHER_SURGE.storm);
    assert.equal(weatherSurgeFor('bogus'), 1);   // unknown skies pay the meter
  });
  it('rain pays +25%, storm +50%', () => {
    assert.equal(WEATHER_SURGE.rain, 1.25);
    assert.equal(WEATHER_SURGE.storm, 1.5);
  });
  it('only rain and storm are wet', () => {
    assert.equal(isWet('rain'), true);
    assert.equal(isWet('storm'), true);
    assert.equal(isWet('clear'), false);
    assert.equal(isWet('cloudy'), false);
  });
  it('grip: dry is 1, rain costs grip, storm costs more, ramp scales it', () => {
    assert.equal(gripFor('clear'), 1);
    assert.equal(gripFor('cloudy'), 1);
    assert.equal(gripFor('rain', 1), GRIP_FLOOR.rain);
    assert.equal(gripFor('storm', 1), GRIP_FLOOR.storm);
    assert.ok(gripFor('storm', 1) < gripFor('rain', 1));
    assert.equal(gripFor('rain', 0), 1);          // no rain yet: full grip
    assert.ok(gripFor('rain', 0.5) > gripFor('rain', 1) && gripFor('rain', 0.5) < 1);
    assert.equal(gripFor('bogus'), 1);            // unknown skies grip fine
    assert.equal(gripFor('rain', NaN), GRIP_FLOOR.rain);
    assert.equal(gripFor('rain', 5), GRIP_FLOOR.rain);   // intensity clamps
  });
  it('dim: dry is full sun, storm leaves about a third, ramp scales it', () => {
    assert.equal(dimFor('clear'), 1);
    assert.ok(Math.abs(dimFor('cloudy', 1) - DIM_FLOOR.cloudy) < 1e-9);
    assert.ok(Math.abs(dimFor('rain', 1) - DIM_FLOOR.rain) < 1e-9);
    assert.ok(Math.abs(dimFor('storm', 1) - DIM_FLOOR.storm) < 1e-9);
    assert.ok(dimFor('storm', 1) < dimFor('rain', 1));
    assert.equal(dimFor('storm', 0), 1);
    assert.equal(dimFor('bogus'), 1);
  });
  it('durations land inside their ranges', () => {
    for(const s of WEATHER_STATES){
      const [lo, hi] = WEATHER_DURATIONS[s];
      for(let k = 0; k < 20; k++){
        const d = durationFor(s, cyclingRng());
        assert.ok(d >= lo && d <= hi, `${s} duration ${d} outside [${lo}, ${hi}]`);
      }
    }
    assert.equal(durationFor('clear', fixedRng(0)), WEATHER_DURATIONS.clear[0]);
    assert.equal(durationFor('clear', fixedRng(1)), WEATHER_DURATIONS.clear[1]);
  });
  it('transitions never jump clear straight to storm, or storm to clear', () => {
    // Exhaustive-ish: every roll value in 0.05 steps from every state.
    for(const s of WEATHER_STATES){
      for(let v = 0; v <= 1; v += 0.05){
        const n = nextState(s, fixedRng(v));
        assert.ok(WEATHER_STATES.includes(n), `${s} -> ${n} is not a sky`);
        if(s === 'clear') assert.notEqual(n, 'storm', 'clear must not jump to storm');
        if(s === 'storm') assert.notEqual(n, 'clear', 'storm must break down, not clear');
        if(s === 'cloudy') assert.notEqual(n, 'storm', 'cloud must rain before it storms');
      }
    }
  });
});

describe('weather cycle', () => {
  it('starts clear, dry, full grip, no surge', () => {
    const w = createWeather(cyclingRng());
    assert.equal(w.state, 'clear');
    assert.equal(w.wet, false);
    assert.equal(w.intensity, 0);
    assert.equal(w.grip, 1);
    assert.equal(w.surge, 1);
    assert.equal(w.dim, 1);
    assert.equal(w.label, 'Clear');
    assert.ok(w.timeLeft > 0);
  });
  it('rolls to a new sky when its timer runs out, with a weatherChanged event', () => {
    const w = createWeather(fixedRng(0.5));
    const first = w.timeLeft;
    const evs = w.update(first + 0.1);
    const changed = evs.filter(e => e.type === 'weatherChanged');
    assert.equal(changed.length, 1);
    assert.equal(changed[0].from, 'clear');
    assert.equal(changed[0].to, w.state);
    assert.ok(w.timeLeft > 0, 'the new sky gets a fresh duration');
  });
  it('no change before the timer runs out', () => {
    const w = createWeather(fixedRng(0.5));
    const evs = w.update(1);
    assert.deepEqual(evs, []);
    assert.equal(w.state, 'clear');
  });
  it('visits every sky over a long shift, never gets stuck', () => {
    // A seeded LCG, not the cycling rng: the cycling sequence aliases
    // with the two-draws-per-transition pattern and never rolls a storm.
    let seed = 123456789;
    const lcg = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const w = createWeather(lcg);
    const seen = new Set(['clear']);
    for(let t = 0; t < 60 * 60; t += 5){   // an hour of driving, 5s steps
      for(const e of w.update(5)) if(e.type === 'weatherChanged') seen.add(e.to);
    }
    assert.deepEqual([...seen].sort(), [...WEATHER_STATES].sort());
  });
  it('rain ramps in over the ramp time, and fades out when it clears', () => {
    const w = createWeather(cyclingRng());
    w.setState('rain');
    assert.equal(w.intensity, 0, 'rain starts dry and builds');
    w.update(WEATHER_RAMP / 2);
    assert.ok(w.intensity > 0.3 && w.intensity < 0.7, `half ramp: ${w.intensity}`);
    w.update(WEATHER_RAMP);
    assert.equal(w.intensity, 1);
    assert.equal(w.grip, GRIP_FLOOR.rain);
    w.setState('clear');
    w.update(WEATHER_RAMP / 2);
    assert.ok(w.intensity > 0.3 && w.intensity < 0.7, `half fade: ${w.intensity}`);
    w.update(WEATHER_RAMP);
    assert.equal(w.intensity, 0);
    assert.equal(w.grip, 1);
  });
  it('a storm throws lightning, the dry never does', () => {
    const dry = createWeather(cyclingRng());
    let strikes = 0;
    for(let t = 0; t < 600; t += 1) for(const e of dry.update(1)) if(e.type === 'lightning') strikes++;
    assert.equal(strikes, 0, 'no lightning outside a storm');
    const storm = createWeather(cyclingRng(), { start:'storm' });
    assert.equal(storm.state, 'storm');
    assert.equal(storm.surge, 1.5);
    assert.equal(storm.label, 'Storm');
    let stormStrikes = 0;
    for(let t = 0; t < 300 && storm.state === 'storm'; t += 1){
      for(const e of storm.update(1)) if(e.type === 'lightning') stormStrikes++;
    }
    assert.ok(stormStrikes >= 3, `a 5-minute storm should flash several times, got ${stormStrikes}`);
  });
  it('setState rejects unknown skies and restarts the clock on a real change', () => {
    const w = createWeather(cyclingRng());
    assert.equal(w.setState('bogus'), false);
    assert.equal(w.state, 'clear');
    assert.equal(w.setState('clear'), false);   // same sky: no change
    assert.equal(w.setState('storm'), true);
    assert.equal(w.state, 'storm');
    assert.ok(w.timeLeft >= WEATHER_DURATIONS.storm[0]);
    assert.equal(w.intensity, 0, 'storm rain still ramps in from dry');
  });
  it('opts.start forces the opening sky', () => {
    const w = createWeather(cyclingRng(), { start:'rain' });
    assert.equal(w.state, 'rain');
    assert.equal(w.wet, true);
    assert.equal(w.intensity, 1);
    assert.equal(w.surge, 1.25);
  });
  it('bad dt never breaks the cycle', () => {
    const w = createWeather(cyclingRng());
    assert.deepEqual(w.update(0), []);
    assert.deepEqual(w.update(-5), []);
    assert.deepEqual(w.update(NaN), []);
    assert.equal(w.state, 'clear');
  });
});
