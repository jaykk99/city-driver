// Tests for the firefighter job: the pay math must pay what the meter
// says, and the job state machine must take a call, race to the fire,
// spray it out for base + speed + saved pay, and lose the call — never
// paying — when the fire fully engulfs, the rig wrecks, or the driver
// switches cars mid-call.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  FIRE_BASE_PAY, FIRE_SPEED_BONUS_MAX, FIRE_SAVED_BONUS_MAX,
  FIRE_RADIUS, SPRAY_SPEED_MAX,
  INTENSITY_MIN, INTENSITY_MAX, INTENSITY_FULL, INTENSITY_DANGER,
  INTENSITY_GROW, INTENSITY_SPRAY,
  legParFor, extinguishParFor, speedBonusFor, savedBonusFor, ratingFor,
  isFireCar, firePointNear, intensityFor,
  firePickers, createFireJob,
} from '../js/fire.js';
import { GRID_HALF } from '../js/world.js';

// Deterministic rng cycling through varied values, so retries in the
// point pickers actually explore instead of repeating one draw.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const at = (x, z, speed = 0, hp = 100, surge = 1) => ({ x, z, speed, hp, maxHp: 100, surge });

// Drive a whole call to its end: race to the fire, park on it and spray
// until it is out. Returns the events the job emitted.
function driveCall(job, maxTicks = 8000){
  const events = [];
  let ticks = 0;
  while(job.state !== 'cooldown' && job.state !== 'off' && ticks++ < maxTicks){
    const tgt = job.target;
    const ctx = tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100);
    events.push(...job.update(0.5, ctx));
    if((job.state === 'respond' || job.state === 'extinguish') && !job.target) break;
  }
  return events;
}

// Start a job in a fire truck and wait until a call comes in.
function startCall(job, maxTicks = 400){
  job.setInFireTruck(true);
  const events = [];
  let ticks = 0;
  while(job.state !== 'respond' && ticks++ < maxTicks) events.push(...job.update(0.5, at(0, 0, 0, 100)));
  return events;
}

describe('pay math', () => {
  it('legParFor gives city pace plus grace', () => {
    assert.equal(legParFor(110), 22);   // 110/11 + 12
    assert.equal(legParFor(0), 12);
  });
  it('extinguishParFor is spray time plus grace', () => {
    assert.equal(extinguishParFor(45), 13);  // 45/9 + 8
    assert.equal(extinguishParFor(0), 8);
  });
  it('speedBonusFor is full at par, nothing at twice par', () => {
    assert.equal(speedBonusFor(20, 20), FIRE_SPEED_BONUS_MAX);
    assert.equal(speedBonusFor(40, 20), 0);
    assert.equal(speedBonusFor(30, 20), Math.round(FIRE_SPEED_BONUS_MAX / 2));
    assert.equal(speedBonusFor(10, 0), 0);
  });
  it('savedBonusFor pays for a building saved mostly intact', () => {
    assert.equal(savedBonusFor(0), FIRE_SAVED_BONUS_MAX);
    assert.equal(savedBonusFor(50), Math.round(FIRE_SAVED_BONUS_MAX / 2));
    assert.equal(savedBonusFor(100), 0);
    assert.equal(savedBonusFor(120), 0);
  });
  it('ratingFor is 5 for a fast clean save, 1 at worst', () => {
    assert.equal(ratingFor(30, true), 5);
    assert.equal(ratingFor(30, false), 4);
    assert.equal(ratingFor(70, true), 4);
    assert.equal(ratingFor(90, true), 3);
    assert.equal(ratingFor(90, false), 2);
  });
});

describe('car + point pickers', () => {
  it('isFireCar only matches the fire truck extra', () => {
    assert.equal(isFireCar({ extra:'fire' }), true);
    assert.equal(isFireCar({ extra:'ambulance' }), false);
    assert.equal(isFireCar({}), false);
    assert.equal(isFireCar(null), false);
  });
  it('firePointNear lands on a road 60-400 m away, inside the grid', () => {
    const p = firePointNear(0, 0, cyclingRng());
    const d = Math.hypot(p.x, p.z);
    assert.ok(d >= 60 && d <= 400, 'distance ' + d);
    assert.ok(Math.abs(p.x) <= GRID_HALF && Math.abs(p.z) <= GRID_HALF);
  });
  it('intensityFor stays in the call range', () => {
    for(let k = 0; k < 20; k++){
      const v = intensityFor(cyclingRng());
      assert.ok(v >= INTENSITY_MIN && v <= INTENSITY_MAX, 'intensity ' + v);
    }
  });
  it('firePickers finds a road tile on a custom map, null without roads', () => {
    // A cross of roads (40x40 tiles, 12 m each): long enough for real legs.
    function crossMap(){
      const size = 40, rows = [];
      for(let j = 0; j < size; j++){
        let row = '';
        for(let i = 0; i < size; i++) row += (j === 20 || i === 20) ? '#' : '.';
        rows.push(row);
      }
      return { size, tiles: rows.join('') };
    }
    const { callNear } = firePickers(crossMap(), { x: 100, z: 200 });
    const p = callNear(100, 200, cyclingRng());
    assert.ok(p, 'a fire point exists on the cross');
    assert.ok(Number.isFinite(p.x) && Number.isFinite(p.z));
    const empty = { size: 4, tiles: '.'.repeat(16) };
    assert.equal(firePickers(empty).callNear(0, 0, cyclingRng()), null);
  });
});

describe('state machine', () => {
  it('starts off, arms idle in the truck, and a call comes in', () => {
    const job = createFireJob(cyclingRng());
    assert.equal(job.state, 'off');
    assert.equal(job.setInFireTruck(true), null);
    assert.equal(job.state, 'idle');
    const evs = startCall(job);
    assert.equal(job.state, 'respond');
    assert.ok(job.fire);
    assert.ok(job.intensity >= INTENSITY_MIN && job.intensity <= INTENSITY_MAX + 1);
    const start = evs.find(e => e.type === 'callStart');
    assert.ok(start, 'callStart emitted');
    assert.equal(start.surge, 1);
    assert.ok(start.par > 0);
  });
  it('a driven call pays base + speed + saved, surged, and banks career', () => {
    const job = createFireJob(() => 0);   // intensity always 30
    startCall(job);
    const evs = driveCall(job);
    const done = evs.find(e => e.type === 'extinguished');
    assert.ok(done, 'extinguished emitted, got ' + evs.map(e => e.type).join(','));
    assert.equal(done.base, FIRE_BASE_PAY);
    assert.equal(done.speedBonus, speedBonusFor(done.seconds, done.par));
    assert.equal(done.savedBonus, savedBonusFor(done.peak));
    assert.equal(done.subtotal, FIRE_BASE_PAY + done.speedBonus + done.savedBonus);
    assert.equal(done.total, Math.round(done.subtotal * done.surge));
    assert.equal(done.rating, ratingFor(done.peak, done.onTime));
    assert.equal(job.calls, 1);
    assert.equal(job.out, 1);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.equal(job.state, 'cooldown');
    // Career snapshot round-trips through a fresh job.
    const job2 = createFireJob();
    job2.loadCareer(job.career);
    assert.equal(job2.calls, 1);
    assert.equal(job2.out, 1);
    assert.equal(job2.earned, done.total);
  });
  it('the surge is locked in when the call starts', () => {
    const job = createFireJob(() => 0);
    job.setInFireTruck(true);
    let evs = [];
    let ticks = 0;
    while(job.state !== 'respond' && ticks++ < 400) evs.push(...job.update(0.5, at(0, 0, 0, 100, 2)));
    assert.equal(job.surge, 2);
    // Sky changes mid-call: the pay stays at x2.
    const done = [];
    ticks = 0;
    while(job.state !== 'cooldown' && job.state !== 'off' && ticks++ < 8000){
      const tgt = job.target;
      const ctx = tgt ? at(tgt.x, tgt.z, 0, 100, 1) : at(0, 0, 0, 100, 1);
      done.push(...job.update(0.5, ctx));
    }
    const ext = done.find(e => e.type === 'extinguished');
    assert.ok(ext);
    assert.equal(ext.surge, 2);
    assert.equal(ext.total, Math.round(ext.subtotal * 2));
  });
  it('a fire left alone fully engulfs and pays nothing', () => {
    const job = createFireJob(() => 0.99);   // intensity starts at 55
    startCall(job);
    const evs = [];
    let ticks = 0;
    while(job.state !== 'cooldown' && job.state !== 'off' && ticks++ < 8000){
      evs.push(...job.update(0.5, at(0, 0, 0, 100)));   // never drive to it
    }
    const fail = evs.find(e => e.type === 'callFailed');
    assert.ok(fail, 'callFailed emitted');
    assert.equal(fail.reason, 'engulfed');
    assert.equal(fail.onScene, false);
    assert.equal(job.calls, 0);
    assert.equal(job.earned, 0);
    assert.equal(job.state, 'cooldown');
  });
  it('the danger warning fires once as the fire nears engulfment', () => {
    const job = createFireJob(() => 0.99);
    startCall(job);
    const evs = [];
    let ticks = 0;
    while(job.state !== 'cooldown' && ticks++ < 8000){
      evs.push(...job.update(0.5, at(0, 0, 0, 100)));
      if(evs.filter(e => e.type === 'danger').length >= 1 && job.state === 'cooldown') break;
    }
    assert.equal(evs.filter(e => e.type === 'danger').length, 1);
    assert.ok(evs.find(e => e.type === 'danger').intensity >= INTENSITY_DANGER);
  });
  it('wrecking the rig loses the call with nothing', () => {
    const job = createFireJob(cyclingRng());
    startCall(job);
    const evs = job.update(0.5, at(job.fire.x, job.fire.z, 0, 0));
    const fail = evs.find(e => e.type === 'callFailed');
    assert.ok(fail);
    assert.equal(fail.reason, 'wrecked');
    assert.equal(job.earned, 0);
  });
  it('switching cars mid-call abandons it and pays nothing', () => {
    const job = createFireJob(cyclingRng());
    startCall(job);
    assert.equal(job.setInFireTruck(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.earned, 0);
    assert.equal(job.abandon(), false);
  });
  it('abandon() ends a live call quietly', () => {
    const job = createFireJob(cyclingRng());
    startCall(job);
    assert.equal(job.abandon(), true);
    assert.equal(job.state, 'cooldown');
    assert.equal(job.earned, 0);
  });
  it('spraying knocks the fire down, leaving it lets it regrow', () => {
    const job = createFireJob(() => 0);
    startCall(job);
    // Drive to the fire and park on it: onScene fires.
    let evs = job.update(0.5, at(job.fire.x, job.fire.z, 0, 100));
    assert.ok(evs.find(e => e.type === 'onScene'), 'onScene emitted');
    assert.equal(job.state, 'extinguish');
    const atScene = job.intensity;
    // Spray for 2 s: intensity must fall.
    for(let k = 0; k < 4; k++) job.update(0.5, at(job.fire.x, job.fire.z, 0, 100));
    assert.ok(job.intensity < atScene, 'spraying lowers intensity: ' + atScene + ' -> ' + job.intensity);
    // Drive off and sit still away from the fire: it regrows.
    const regrowStart = job.intensity;
    for(let k = 0; k < 4; k++) job.update(0.5, at(job.fire.x + 100, job.fire.z + 100, 0, 100));
    assert.ok(job.intensity > regrowStart, 'idle fire regrows: ' + regrowStart + ' -> ' + job.intensity);
    // Moving too fast at the fire does not spray either.
    const fastStart = job.intensity;
    for(let k = 0; k < 2; k++) job.update(0.5, at(job.fire.x, job.fire.z, 5, 100));
    assert.ok(job.intensity > fastStart, 'a drive-by does not spray');
  });
  it('isSpraying matches the parked-close rule', () => {
    const job = createFireJob(() => 0);
    startCall(job);
    job.update(0.5, at(job.fire.x, job.fire.z, 0, 100));
    assert.equal(job.state, 'extinguish');
    assert.equal(job.isSpraying({ x: job.fire.x, z: job.fire.z, speed: 0 }), true);
    assert.equal(job.isSpraying({ x: job.fire.x, z: job.fire.z, speed: 5 }), false);
    assert.equal(job.isSpraying({ x: job.fire.x + FIRE_RADIUS + 5, z: job.fire.z, speed: 0 }), false);
  });
  it('cooldown re-arms idle, and the next call comes in', () => {
    const job = createFireJob(() => 0);
    startCall(job);
    driveCall(job);
    assert.equal(job.state, 'cooldown');
    let ticks = 0;
    while(job.state !== 'respond' && ticks++ < 400) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.state, 'respond');
  });
  it('loadCareer ignores missing or corrupt saves', () => {
    const job = createFireJob();
    job.loadCareer(null);
    job.loadCareer('nope');
    job.loadCareer({ calls: 'x', out: -5, earned: NaN, ratingSum: Infinity });
    assert.deepEqual(job.career, { calls: 0, out: 0, earned: 0, ratingSum: 0, ratingCount: 0 });
  });
  it('setPickers(null) restores the main-city grid', () => {
    const job = createFireJob(cyclingRng());
    job.setPickers(null);
    job.setInFireTruck(true);
    startCall(job);
    assert.equal(job.state, 'respond');
    assert.ok(job.fire);
  });
});
