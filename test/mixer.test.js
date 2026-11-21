// Tests for the cement mixer job: the pay math must pay what the meter says,
// and the job state machine must start a route, pour a load only when the
// mixer sits still at a pour site, run the drum dry and swing to the batch
// plant to refill and bank, lose a load when the concrete sets or a hard
// shunt slops the drum, and pay loads + completion + on-time on a finished
// route — never paying for a route that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  MIX_PAY_PER_LOAD, MIX_DRUM, MIX_STOPS_MIN, MIX_STOPS_MAX,
  STOP_RADIUS, POUR_TIME, REFILL_TIME,
  ROUTE_BONUS, ON_TIME_BONUS, LOADS_MIN, LOADS_MAX, SET_TIME,
  payPerLoad, legParFor, ratingFor, isMixerCar,
  stopPointNear, nextStopPoint, plantPointNear, loadsFor,
  mixerRoutePickers, createMixerJob,
} from '../js/mixer.js';

// Deterministic rng cycling through varied values, so retries in the
// point pickers actually explore instead of repeating one draw.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const at = (x, z, speed = 0, hp = 100, surge = 1) => ({ x, z, speed, hp, maxHp: 100, surge });

// Start a job and tick until a route is running (or give up).
function startRoute(job, maxTicks = 60){
  job.setInMixer(true);
  let ticks = 0;
  while(job.state !== 'route' && ticks++ < maxTicks) job.update(1, at(0, 0, 0, 100));
  return job.state === 'route';
}

// Drive a whole route to completion: sit still at each pour site until
// the chute finishes, stop at the plant when the drum runs dry. Returns
// the events.
function driveRoute(job, maxTicks = 20000){
  const events = [];
  let ticks = 0;
  while(job.state !== 'cooldown' && ticks++ < maxTicks){
    const tgt = job.target;
    const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
    events.push(...evs);
    if(!job.active) break;
  }
  return events;
}

// Pickers that ignore the rng and lay the route out on a straight line:
// stops 200 m apart, the plant 200 m off the first stop. Paired with a
// constant 0.99 rng this builds the longest route (9 stops, 2 loads each
// = 18 loads), so the drum must refill twice — deterministic, no luck.
function linePickers(){
  return {
    stopNear: () => ({ x: 200, z: 0 }),
    nextStop: prev => ({ x: prev.x + 200, z: 0 }),
    plantNear: () => ({ x: 0, z: 200 }),
  };
}

describe('pay math', () => {
  it('one load pays the flat rate, times the surge', () => {
    assert.equal(payPerLoad(1), MIX_PAY_PER_LOAD);
    assert.equal(payPerLoad(1.5), Math.round(MIX_PAY_PER_LOAD * 1.5));
    assert.equal(payPerLoad(0), MIX_PAY_PER_LOAD);   // bad surge reads as 1x
    assert.equal(payPerLoad(-2), MIX_PAY_PER_LOAD);
  });
  it('leg par time grows with leg length', () => {
    assert.ok(legParFor(400) > legParFor(150));
    assert.equal(legParFor(220), Math.round(220 / 11 + 12));
  });
  it('rating: smooth and on time is 5, late and battered costs stars, never below 1', () => {
    assert.equal(ratingFor(6, 6, 0), 5);
    assert.equal(ratingFor(5, 6, 0), 4);    // one late leg
    assert.equal(ratingFor(2, 6, 0), 3);    // most legs late
    assert.equal(ratingFor(6, 6, 0.3), 4);  // light damage
    assert.equal(ratingFor(6, 6, 0.6), 3);  // heavy damage
    assert.equal(ratingFor(0, 6, 0.6), 1);  // late and battered bottoms out at 1
  });
  it('isMixerCar reads the car extra', () => {
    assert.equal(isMixerCar({ extra:'mixer' }), true);
    assert.equal(isMixerCar({ extra:'plow' }), false);
    assert.equal(isMixerCar(null), false);
    assert.equal(isMixerCar({}), false);
  });
});

describe('point pickers', () => {
  it('first stop sits on a road a real drive away', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 10; k++){
      const p = stopPointNear(0, 0, rng);
      const d = Math.hypot(p.x, p.z);
      assert.ok(d >= 60 && d <= 400, 'stop ' + d + 'm away');
    }
  });
  it('next stop is a real leg away from the last one', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 10; k++){
      const p = nextStopPoint({ x:0, z:0 }, rng);
      const d = Math.hypot(p.x, p.z);
      assert.ok(d >= 150 && d <= 420, 'leg ' + d + 'm');
    }
  });
  it('batch plant is a real drive from the first stop', () => {
    const p = plantPointNear({ x:0, z:0 }, cyclingRng());
    assert.ok(Math.hypot(p.x, p.z) >= 150, 'plant a real drive away');
  });
  it('loads per stop are 1 or 2', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const n = loadsFor(rng);
      assert.ok(n >= LOADS_MIN && n <= LOADS_MAX, 'loads ' + n);
    }
  });
  it('custom-map pickers use the map roads, and a roadless map gets no route', () => {
    // 30x30 tiles of road: plenty of streets to run a route on.
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    const pickers = mixerRoutePickers(map, { x: 0, z: 0 });
    const first = pickers.stopNear(0, 0, cyclingRng());
    assert.ok(first, 'a stop on the map');
    const next = pickers.nextStop(first, cyclingRng());
    assert.ok(next, 'a next stop on the map');
    const plant = pickers.plantNear(first, cyclingRng());
    assert.ok(plant, 'a plant on the map');
    // A map with no roads at all gets no route.
    const empty = { size: 10, tiles: '.'.repeat(10 * 10) };
    const noPickers = mixerRoutePickers(empty, { x: 0, z: 0 });
    assert.equal(noPickers.stopNear(0, 0, cyclingRng()), null);
    assert.equal(noPickers.nextStop(first, cyclingRng()), null);
    assert.equal(noPickers.plantNear(first, cyclingRng()), null);
  });
});

describe('route state machine', () => {
  it('a route starts with a full drum and the surge locked in', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    assert.equal(job.state, 'route');
    assert.equal(job.phase, 'pour');
    assert.equal(job.drum, MIX_DRUM);
    assert.equal(job.drumCapacity, MIX_DRUM);
    assert.ok(job.stopCount >= MIX_STOPS_MIN && job.stopCount <= MIX_STOPS_MAX);
    assert.ok(job.target, 'a pour site to drive to');
    assert.equal(job.surge, 1);
  });
  it('no route starts off the mixer', () => {
    const job = createMixerJob(cyclingRng());
    for(let k = 0; k < 60; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'off');
    assert.equal(job.active, false);
  });
  it('sitting still at a pour site pours one load per POUR_TIME and pays', () => {
    // Deterministic 2-load stops, so one pour leaves exactly one load owed.
    const job = createMixerJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    assert.ok(stop, 'a stop waiting');
    assert.equal(stop.loads, 2);
    const evs = [];
    for(let k = 0; k < 5; k++) evs.push(...job.update(0.5, at(stop.x, stop.z, 0, 100)));
    assert.ok(evs.some(e => e.type === 'loadPoured'), 'a load poured');
    assert.equal(job.drum, MIX_DRUM - 1);
    assert.equal(job.loadValue, MIX_PAY_PER_LOAD);
    assert.equal(job.loadsPoured, 1);
    assert.equal(job.loadsLeft, 1);
  });
  it('rolling through a site pours nothing: the chute needs the truck stopped', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 10; k++) job.update(0.5, at(stop.x, stop.z, 5, 100));
    assert.equal(job.loadsPoured, 0);
    assert.equal(job.drum, MIX_DRUM);
    assert.equal(job.loadValue, 0);
  });
  it('sitting still away from the site pours nothing', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    for(let k = 0; k < 10; k++) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.loadsPoured, 0);
    assert.equal(job.drum, MIX_DRUM);
  });
  it('a full route pays loads + completion + on-time, and the career keeps it', () => {
    // Longest route: 9 stops, 2 loads each, 18 loads — the drum refills twice.
    const job = createMixerJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    assert.equal(job.stopCount, 9);
    const events = driveRoute(job);
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed, got: ' + events.map(e => e.type).join(','));
    assert.equal(done.total, done.loadPay + ROUTE_BONUS + ON_TIME_BONUS * done.onTimeLegs);
    assert.equal(done.loads, 18);
    assert.equal(done.loadPay, 18 * MIX_PAY_PER_LOAD);
    assert.equal(done.onTimeLegs, 9);   // teleported legs are always on time
    assert.equal(events.filter(e => e.type === 'refilled').length, 2, 'two plant refills');
    assert.equal(job.routes, 1);
    assert.equal(job.loads, 18);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.equal(job.ratingAvg, 5);
    assert.equal(job.state, 'cooldown');
  });
  it('the surge locks at route start: the sky changing mid-route never reprices it', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // Route started at 1x; now the night surge arrives mid-route.
    const stop = job.nextStop;
    for(let k = 0; k < 5; k++) job.update(0.5, at(stop.x, stop.z, 0, 100, 1.5));
    assert.equal(job.loadValue, MIX_PAY_PER_LOAD);   // still the 1x rate
    assert.equal(job.surge, 1);
  });
  it('a night route pays the surged rate on every load', () => {
    const job = createMixerJob(cyclingRng());
    job.setInMixer(true);
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 60) job.update(1, at(0, 0, 0, 100, 1.5));
    assert.equal(job.state, 'route');
    const stop = job.nextStop;
    for(let k = 0; k < 5; k++) job.update(0.5, at(stop.x, stop.z, 0, 100, 1.5));
    assert.equal(job.loadValue, Math.round(MIX_PAY_PER_LOAD * 1.5));
  });
  it('a dry drum swings the beacon to the plant, and refilling banks the pours', () => {
    const job = createMixerJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const events = [];
    let ticks = 0, sawEmpty = false, sawRefill = false;
    while(job.state !== 'cooldown' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      events.push(...evs);
      if(evs.some(e => e.type === 'drumEmpty')) sawEmpty = true;
      if(evs.some(e => e.type === 'refilled')) sawRefill = true;
      if(!job.active) break;
    }
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed');
    assert.ok(sawEmpty, 'drum ran dry mid-route');
    assert.ok(sawRefill, 'plant refilled the drum');
    const refill = events.find(e => e.type === 'refilled');
    assert.equal(refill.dumped, 8 * MIX_PAY_PER_LOAD, 'first drum invoiced at the plant');
    assert.equal(refill.drum, MIX_DRUM, 'drum full again');
    assert.equal(done.loadPay, 18 * MIX_PAY_PER_LOAD);
  });
  it('concrete sets in the drum: dawdling loses a load, but never the pay', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    assert.equal(job.drum, MIX_DRUM);
    // Idle the clock far from any pour site: 5 s a tick, past SET_TIME.
    const events = [];
    const ticks = Math.ceil(SET_TIME / 5) + 1;
    for(let k = 0; k < ticks; k++) events.push(...job.update(5, at(0, 0, 0, 100)));
    assert.ok(events.some(e => e.type === 'loadSet'), 'a load set in the drum');
    assert.equal(job.drum, MIX_DRUM - 1);
    assert.equal(job.loadValue, 0, 'a set load was never poured, so no pay is lost');
    assert.equal(job.loadsPoured, 0);
  });
  it('a fresh batch from the plant resets the set clock', () => {
    const job = createMixerJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // Burn most of the set clock, then drive the route to the first refill.
    for(let k = 0; k < Math.ceil((SET_TIME - 5) / 5); k++) job.update(5, at(0, 0, 0, 100));
    assert.equal(job.drum, MIX_DRUM, 'nothing set yet');
    const events = driveRoute(job);
    assert.ok(events.some(e => e.type === 'refilled'), 'plant refilled the drum');
    // Right after the refill the drum is full: the clock reset with it.
    const refillIdx = events.findIndex(e => e.type === 'refilled');
    const after = events.slice(refillIdx);
    assert.ok(!after.some(e => e.type === 'loadSet'), 'no load sets on a fresh batch');
  });
  it('a hard shunt slops one load out of the drum, and takes no pay with it', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 5; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.loadsPoured, 1);
    assert.equal(job.loadValue, MIX_PAY_PER_LOAD);
    const drumBefore = job.drum;
    const evs = job.update(0.5, at(0, 0, 0, 80));   // 20 hp gone in one hit
    assert.ok(evs.some(e => e.type === 'spilled'), 'a load slopped out');
    assert.equal(job.drum, drumBefore - 1);
    assert.equal(job.loadValue, MIX_PAY_PER_LOAD, 'poured loads keep their pay');
    // A second tick at the same hp spills nothing: one scare per hit.
    const evs2 = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs2.some(e => e.type === 'spilled'), 'no double spill');
  });
  it('a hard shunt with an empty drum spills nothing', () => {
    const job = createMixerJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // Pour the whole drum out at the first stops, then take a hit.
    // The plant switch lands on the tick after the drum runs dry, when
    // the next stop still owes loads.
    let ticks = 0;
    while(job.phase !== 'plant' && ticks++ < 500){
      const tgt = job.target;
      job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
    }
    assert.equal(job.drum, 0);
    assert.equal(job.phase, 'plant');
    const evs = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs.some(e => e.type === 'spilled'), 'nothing to spill');
  });
  it('a wrecked mixer loses the unbanked pours and the route pays nothing', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 5; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.ok(job.loadValue > 0, 'something poured before the wreck');
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    assert.ok(evs.some(e => e.type === 'routeFailed' && e.reason === 'wrecked'));
    assert.equal(job.earned, 0);
    assert.equal(job.routes, 0);
    assert.equal(job.loadValue, 0);
  });
  it('a wreck after a refill keeps what the plant already invoiced', () => {
    const job = createMixerJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    let ticks = 0, refilled = null;
    while(job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      const r = evs.find(e => e.type === 'refilled');
      if(r){ refilled = r; break; }
    }
    assert.ok(refilled, 'a refill happened');
    assert.ok(refilled.banked > 0, 'loads invoiced at the plant');
    // Pour one more load, then wreck: the banked amount survives.
    const stop = job.nextStop;
    for(let k = 0; k < 5; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    const failed = evs.find(e => e.type === 'routeFailed');
    assert.ok(failed, 'route failed on the wreck');
    assert.equal(failed.banked, refilled.banked, 'invoiced loads kept');
    assert.ok(failed.loadLost > 0, 'unbanked pours lost');
  });
  it('leaving the mixer abandons a live route and pays nothing', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 5; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.setInMixer(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.earned, 0);
    assert.equal(job.loadValue, 0);
  });
  it('abandon() ends a live route quietly and reports the lost load', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 5; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    const lost = job.loadValue;
    const r = job.abandon();
    assert.equal(r.abandoned, true);
    assert.equal(r.loadLost, lost);
    assert.equal(job.abandon(), false);   // nothing live left to abandon
  });
  it('after a route the next one starts after the cooldown', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(startRoute(job), true);
    driveRoute(job);
    assert.equal(job.state, 'cooldown');
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 120) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'route', 'second route started');
    assert.equal(job.routes, 1);   // career kept across routes
  });
  it('isPouring reads the chute: stopped at a site, loads owed, drum full enough', () => {
    const job = createMixerJob(cyclingRng());
    assert.equal(job.isPouring(at(0, 0, 0, 100)), false);   // no route yet
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    assert.equal(job.isPouring(at(stop.x, stop.z, 0, 100)), true);
    assert.equal(job.isPouring(at(stop.x, stop.z, 5, 100)), false);   // rolling
    assert.equal(job.isPouring(at(stop.x + 50, stop.z + 50, 0, 100)), false); // nowhere near the site
  });
  it('career loads from a save and a bad save reads as zero', () => {
    const job = createMixerJob(cyclingRng());
    job.loadCareer({ routes: 3, loads: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    assert.equal(job.routes, 3);
    assert.equal(job.loads, 40);
    assert.equal(job.earned, 900);
    assert.equal(job.ratingAvg, 14 / 3);
    assert.ok(Math.abs(job.onTimeRate - 10 / 12) < 1e-9);
    assert.deepEqual(job.career, { routes: 3, loads: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    const bad = createMixerJob(cyclingRng());
    bad.loadCareer({ routes: 'three', loads: NaN, earned: -5 });
    assert.equal(bad.routes, 0);
    assert.equal(bad.loads, 0);
    assert.equal(bad.earned, 0);
    bad.loadCareer(null);
    assert.equal(bad.routes, 0);
  });
  it('setPickers(null) restores the main-city grid', () => {
    const job = createMixerJob(cyclingRng());
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    job.setPickers(mixerRoutePickers(map, { x: 0, z: 0 }));
    job.setPickers(null);
    assert.equal(startRoute(job), true);
  });
});
