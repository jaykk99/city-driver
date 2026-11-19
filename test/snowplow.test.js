// Tests for the snow plow job: the pay math must pay what the meter says,
// and the job state machine must start a route, clear a drift only when
// the plow drives through it at working speed, run the salt dry and swing
// to the depot to refill and bank, spill salt on hard shunts, and pay
// drifts + completion + on-time on a finished route — never paying for a
// route that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  PLOW_PAY_PER_DRIFT, PLOW_SALT_CAPACITY, PLOW_STOPS_MIN, PLOW_STOPS_MAX,
  CLEAR_RADIUS, PLOW_MIN_SPEED, PLOW_MAX_SPEED, STOP_RADIUS, REFILL_TIME,
  ROUTE_BONUS, ON_TIME_BONUS, DRIFTS_MIN, DRIFTS_MAX,
  payPerDrift, legParFor, ratingFor, isPlowCar, inPlowWindow,
  stopPointNear, nextStopPoint, depotPointNear, driftsFor, driftPointsFor,
  snowplowRoutePickers, createSnowplowJob,
} from '../js/snowplow.js';

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
  job.setInPlow(true);
  let ticks = 0;
  while(job.state !== 'route' && ticks++ < maxTicks) job.update(1, at(0, 0, 0, 100));
  return job.state === 'route';
}

// Drive a whole route to completion: plow through each drift at working
// speed, stop at the depot when the salt runs dry. Returns the events.
function driveRoute(job, maxTicks = 20000){
  const events = [];
  let ticks = 0;
  while(job.state !== 'cooldown' && ticks++ < maxTicks){
    const tgt = job.target;
    const speed = job.phase === 'depot' ? 0 : 8;   // 8 m/s is inside the plow window
    const ctx = tgt ? at(tgt.x, tgt.z, speed, 100) : at(0, 0, 0, 100);
    events.push(...job.update(0.5, ctx));
    if(!job.active) break;
  }
  return events;
}

describe('pay math', () => {
  it('one drift pays the flat rate, times the surge', () => {
    assert.equal(payPerDrift(1), PLOW_PAY_PER_DRIFT);
    assert.equal(payPerDrift(1.5), Math.round(PLOW_PAY_PER_DRIFT * 1.5));
    assert.equal(payPerDrift(0), PLOW_PAY_PER_DRIFT);   // bad surge reads as 1x
    assert.equal(payPerDrift(-2), PLOW_PAY_PER_DRIFT);
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
  it('isPlowCar reads the car extra', () => {
    assert.equal(isPlowCar({ extra:'plow' }), true);
    assert.equal(isPlowCar({ extra:'bus' }), false);
    assert.equal(isPlowCar(null), false);
    assert.equal(isPlowCar({}), false);
  });
  it('the plow window is 2 to 15 m/s inclusive', () => {
    assert.equal(inPlowWindow(0), false);    // stopped: the blade is not working
    assert.equal(inPlowWindow(1.9), false);
    assert.equal(inPlowWindow(2), true);
    assert.equal(inPlowWindow(8), true);
    assert.equal(inPlowWindow(15), true);
    assert.equal(inPlowWindow(15.1), false); // too fast: the blade skips over the drift
    assert.equal(inPlowWindow(-8), true);    // reversing through at working speed still plows
  });
  it('drifts per stop stay in their band', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const n = driftsFor(rng);
      assert.ok(n >= DRIFTS_MIN && n <= DRIFTS_MAX, 'drifts ' + n);
    }
  });
  it('drift points scatter around the stop centre and start uncleared', () => {
    const pts = driftPointsFor({ x:100, z:-50 }, 4, cyclingRng());
    assert.equal(pts.length, 4);
    for(const p of pts){
      assert.ok(Math.hypot(p.x - 100, p.z + 50) <= 9.01, 'drift near the stop');
      assert.equal(p.cleared, false);
    }
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
  it('depot is a real drive from the first stop', () => {
    const p = depotPointNear({ x:0, z:0 }, cyclingRng());
    assert.ok(Math.hypot(p.x, p.z) >= 150, 'depot a real drive away');
  });
  it('custom-map pickers use the map roads, and a roadless map gets no route', () => {
    // 30x30 tiles of road: plenty of streets to run a route on.
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    const pickers = snowplowRoutePickers(map, { x: 0, z: 0 });
    const first = pickers.stopNear(0, 0, cyclingRng());
    assert.ok(first, 'a stop on the map');
    const next = pickers.nextStop(first, cyclingRng());
    assert.ok(next, 'a next stop on the map');
    const depot = pickers.depotNear(first, cyclingRng());
    assert.ok(depot, 'a depot on the map');
    // A map with no roads at all gets no route.
    const empty = { size: 10, tiles: '.'.repeat(10 * 10) };
    const noPickers = snowplowRoutePickers(empty, { x: 0, z: 0 });
    assert.equal(noPickers.stopNear(0, 0, cyclingRng()), null);
    assert.equal(noPickers.nextStop(first, cyclingRng()), null);
    assert.equal(noPickers.depotNear(first, cyclingRng()), null);
  });
});

describe('route state machine', () => {
  it('a route starts with a full salt hopper and the surge locked in', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    assert.equal(job.state, 'route');
    assert.equal(job.phase, 'collect');
    assert.equal(job.salt, PLOW_SALT_CAPACITY);
    assert.ok(job.stopCount >= PLOW_STOPS_MIN && job.stopCount <= PLOW_STOPS_MAX);
    assert.ok(job.target, 'a drift to plow');
    assert.equal(job.surge, 1);
  });
  it('no route starts off the plow', () => {
    const job = createSnowplowJob(cyclingRng());
    for(let k = 0; k < 60; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'off');
    assert.equal(job.active, false);
  });
  it('driving through a drift at working speed clears it and pays', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const d = job.nextDrift;
    assert.ok(d, 'a drift waiting');
    const evs = job.update(0.5, at(d.x, d.z, 8, 100));
    assert.ok(evs.some(e => e.type === 'driftCleared'), 'drift cleared');
    assert.equal(job.salt, PLOW_SALT_CAPACITY - 1);
    assert.equal(job.loadValue, PLOW_PAY_PER_DRIFT);
    assert.equal(job.driftsCleared, 1);
  });
  it('stopped on a drift clears nothing: the blade has to be working', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const d = job.nextDrift;
    job.update(0.5, at(d.x, d.z, 0, 100));
    assert.equal(job.driftsCleared, 0);
    assert.equal(job.salt, PLOW_SALT_CAPACITY);
    assert.equal(job.loadValue, 0);
  });
  it('blasting through a drift too fast clears nothing: the blade skips over it', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const d = job.nextDrift;
    job.update(0.5, at(d.x, d.z, 20, 100));
    assert.equal(job.driftsCleared, 0);
    assert.equal(job.salt, PLOW_SALT_CAPACITY);
  });
  it('a full route pays drifts + completion + on-time, and the career keeps it', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stops = job.stopCount;
    const evs = driveRoute(job);
    const done = evs.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed, got: ' + evs.map(e => e.type).join(','));
    assert.equal(done.total, done.driftPay + ROUTE_BONUS + ON_TIME_BONUS * done.onTimeLegs);
    assert.equal(done.driftPay, done.drifts * PLOW_PAY_PER_DRIFT);
    assert.equal(done.onTimeLegs, stops);   // teleported legs are always on time
    assert.equal(job.routes, 1);
    assert.equal(job.drifts, done.drifts);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.equal(job.ratingAvg, 5);
    assert.equal(job.state, 'cooldown');
  });
  it('the surge locks at route start: the sky changing mid-route never reprices it', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // Route started at 1x; now the night surge arrives mid-route.
    const d = job.nextDrift;
    job.update(0.5, at(d.x, d.z, 8, 100, 1.5));
    assert.equal(job.loadValue, PLOW_PAY_PER_DRIFT);   // still the 1x rate
    assert.equal(job.surge, 1);
  });
  it('a night route pays the surged rate on every drift', () => {
    const job = createSnowplowJob(cyclingRng());
    job.setInPlow(true);
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 60) job.update(1, at(0, 0, 0, 100, 1.5));
    assert.equal(job.state, 'route');
    const d = job.nextDrift;
    job.update(0.5, at(d.x, d.z, 8, 100, 1.5));
    assert.equal(job.loadValue, Math.round(PLOW_PAY_PER_DRIFT * 1.5));
  });
  it('salt running dry swings the beacon to the depot, and refilling banks the load', () => {
    // Tiny salt load via a custom rng is hard to force, so run a long
    // route until the hopper empties on its own: 20 drifts max per load.
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const events = [];
    let ticks = 0, sawEmpty = false, sawRefill = false;
    while(job.state !== 'cooldown' && ticks++ < 20000){
      const tgt = job.target;
      const speed = job.phase === 'depot' ? 0 : 8;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, speed, 100) : at(0, 0, 0, 100));
      events.push(...evs);
      if(evs.some(e => e.type === 'saltEmpty')) sawEmpty = true;
      if(evs.some(e => e.type === 'refilled')) sawRefill = true;
      if(!job.active) break;
    }
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed');
    // A full route clears more drifts than one salt load holds, so the
    // depot run must have happened — unless the route was short enough
    // to fit in 20 drifts, in which case the pay still adds up.
    if(done.drifts > PLOW_SALT_CAPACITY){
      assert.ok(sawEmpty, 'salt ran dry mid-route');
      assert.ok(sawRefill, 'depot refilled the salt');
    }
    assert.equal(done.driftPay, done.drifts * PLOW_PAY_PER_DRIFT);
  });
  it('a hard shunt spills one unit of salt', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const evs = job.update(0.5, at(0, 0, 0, 80));   // 20 hp gone in one hit
    assert.ok(evs.some(e => e.type === 'spilled'), 'salt spilled');
    assert.equal(job.salt, PLOW_SALT_CAPACITY - 1);
    // A second tick at the same hp spills nothing: one scare per hit.
    const evs2 = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs2.some(e => e.type === 'spilled'), 'no double spill');
  });
  it('a wrecked plow loses the unbanked load and the route pays nothing', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const d = job.nextDrift;
    job.update(0.5, at(d.x, d.z, 8, 100));
    assert.ok(job.loadValue > 0, 'something cleared before the wreck');
    const evs = job.update(0.5, at(d.x, d.z, 0, 0));
    assert.ok(evs.some(e => e.type === 'routeFailed' && e.reason === 'wrecked'));
    assert.equal(job.earned, 0);
    assert.equal(job.routes, 0);
    assert.equal(job.loadValue, 0);
  });
  it('leaving the plow abandons a live route and pays nothing', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const d = job.nextDrift;
    job.update(0.5, at(d.x, d.z, 8, 100));
    assert.equal(job.setInPlow(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.earned, 0);
    assert.equal(job.loadValue, 0);
  });
  it('abandon() ends a live route quietly and reports the lost load', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const d = job.nextDrift;
    job.update(0.5, at(d.x, d.z, 8, 100));
    const lost = job.loadValue;
    const r = job.abandon();
    assert.equal(r.abandoned, true);
    assert.equal(r.loadLost, lost);
    assert.equal(job.abandon(), false);   // nothing live left to abandon
  });
  it('after a route the next one starts after the cooldown', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(startRoute(job), true);
    driveRoute(job);
    assert.equal(job.state, 'cooldown');
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 120) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'route', 'second route started');
    assert.equal(job.routes, 1);   // career kept across routes
  });
  it('isPlowing reads the blade: on a drift, in the window, on a live route', () => {
    const job = createSnowplowJob(cyclingRng());
    assert.equal(job.isPlowing(at(0, 0, 8, 100)), false);   // no route yet
    assert.equal(startRoute(job), true);
    const d = job.nextDrift;
    assert.equal(job.isPlowing(at(d.x, d.z, 8, 100)), true);
    assert.equal(job.isPlowing(at(d.x, d.z, 0, 100)), false);   // stopped
    assert.equal(job.isPlowing(at(d.x, d.z, 20, 100)), false);  // too fast
    assert.equal(job.isPlowing(at(d.x + 50, d.z + 50, 8, 100)), false); // nowhere near a drift
  });
  it('career loads from a save and a bad save reads as zero', () => {
    const job = createSnowplowJob(cyclingRng());
    job.loadCareer({ routes: 3, drifts: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    assert.equal(job.routes, 3);
    assert.equal(job.drifts, 40);
    assert.equal(job.earned, 900);
    assert.equal(job.ratingAvg, 14 / 3);
    assert.ok(Math.abs(job.onTimeRate - 10 / 12) < 1e-9);
    assert.deepEqual(job.career, { routes: 3, drifts: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    const bad = createSnowplowJob(cyclingRng());
    bad.loadCareer({ routes: 'three', drifts: NaN, earned: -5 });
    assert.equal(bad.routes, 0);
    assert.equal(bad.drifts, 0);
    assert.equal(bad.earned, 0);
    bad.loadCareer(null);
    assert.equal(bad.routes, 0);
  });
  it('setPickers(null) restores the main-city grid', () => {
    const job = createSnowplowJob(cyclingRng());
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    job.setPickers(snowplowRoutePickers(map, { x: 0, z: 0 }));
    job.setPickers(null);
    assert.equal(startRoute(job), true);
  });
});
