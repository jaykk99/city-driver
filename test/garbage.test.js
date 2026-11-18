// Tests for the garbage route job: the pay math must pay what the meter
// says, and the job state machine must start a route, load bins one at a
// time at every stop, detour to the depot when the hopper fills and bank
// the load there, pay the banked load plus bonuses on completion, spill
// bins on hard shunts, and lose only the unbanked load on a wreck —
// never paying for a route that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  GARBAGE_PAY_PER_BIN, GARBAGE_HOPPER, GARBAGE_STOPS_MIN, GARBAGE_STOPS_MAX,
  STOP_RADIUS, LOAD_TIME, EMPTY_TIME,
  ROUTE_BONUS, ON_TIME_BONUS, LEG_MIN_DIST, LEG_MAX_DIST,
  DEPOT_MIN_DIST, BINS_MIN, BINS_MAX,
  payPerBin, legParFor, ratingFor, isGarbageCar,
  stopPointNear, nextStopPoint, depotPointNear, binsFor,
  garbageRoutePickers, createGarbageJob,
} from '../js/garbage.js';
import { GRID_HALF } from '../js/world.js';

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
  job.setInTruck(true);
  let ticks = 0;
  while(job.state !== 'route' && ticks++ < maxTicks) job.update(1, at(0, 0, 0, 100));
  return job.state === 'route';
}

// Drive a whole route to completion: at each stop, stop the truck on the
// marker and tick until it clears; when the hopper is full, drive to the
// depot and empty it. Returns the events the job emitted.
function driveRoute(job, maxTicks = 20000){
  const events = [];
  let ticks = 0;
  while(job.state !== 'cooldown' && ticks++ < maxTicks){
    const tgt = job.target;
    const ctx = tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100);
    events.push(...job.update(0.5, ctx));
    if(job.state === 'route' && !job.target) break;
  }
  return events;
}

describe('pay math', () => {
  it('one bin pays the flat rate, surge scales it', () => {
    assert.equal(payPerBin(1), GARBAGE_PAY_PER_BIN);
    assert.equal(payPerBin(1.5), Math.round(GARBAGE_PAY_PER_BIN * 1.5));
    assert.equal(payPerBin(), GARBAGE_PAY_PER_BIN);
    assert.equal(payPerBin(0), GARBAGE_PAY_PER_BIN);   // junk surge reads as 1
    assert.equal(payPerBin(-2), GARBAGE_PAY_PER_BIN);
  });
  it('leg par time grows with leg length', () => {
    assert.ok(legParFor(400) > legParFor(150));
    assert.equal(legParFor(220), Math.round(220 / 11 + 12));
  });
  it('rating: on time and clean is 5, late legs and damage cost stars, never below 1', () => {
    assert.equal(ratingFor(6, 6, 0), 5);
    assert.equal(ratingFor(5, 6, 0), 4);      // one late leg
    assert.equal(ratingFor(2, 6, 0), 3);      // more than half late
    assert.equal(ratingFor(6, 6, 0.3), 4);    // light damage
    assert.equal(ratingFor(6, 6, 0.6), 3);    // heavy damage
    assert.equal(ratingFor(0, 6, 0.9), 1);    // late and wrecked, floors at 1
  });
  it('isGarbageCar reads the car extra', () => {
    assert.equal(isGarbageCar({ extra:'garbage' }), true);
    assert.equal(isGarbageCar({ extra:'bus' }), false);
    assert.equal(isGarbageCar(null), false);
    assert.equal(isGarbageCar({}), false);
  });
});

describe('point pickers', () => {
  it('first stop is on a road 60-400 m from the truck', () => {
    const p = stopPointNear(0, 0, cyclingRng());
    const d = Math.hypot(p.x, p.z);
    assert.ok(d >= 60 && d <= 400, 'stop ' + d + ' m away');
    assert.ok(Math.abs(p.x) <= GRID_HALF && Math.abs(p.z) <= GRID_HALF);
  });
  it('next stop is a real leg away', () => {
    const p = nextStopPoint({ x:0, z:0 }, cyclingRng());
    const d = Math.hypot(p.x, p.z);
    assert.ok(d >= LEG_MIN_DIST && d <= LEG_MAX_DIST, 'leg ' + d + ' m');
  });
  it('the depot is a real drive from the first stop', () => {
    const p = depotPointNear({ x:0, z:0 }, cyclingRng());
    const d = Math.hypot(p.x, p.z);
    assert.ok(d >= DEPOT_MIN_DIST, 'depot ' + d + ' m away');
    assert.ok(Math.abs(p.x) <= GRID_HALF && Math.abs(p.z) <= GRID_HALF);
  });
  it('bins per stop stay in range and never empty', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const b = binsFor(rng);
      assert.ok(b >= BINS_MIN && b <= BINS_MAX, 'bins ' + b);
    }
  });
  it('custom-map pickers use the map roads, and a roadless map gets no route', () => {
    // 30x30 tiles of road: plenty of streets to run a route on.
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    const pickers = garbageRoutePickers(map, { x: 0, z: 0 });
    const first = pickers.stopNear(0, 0, cyclingRng());
    assert.ok(first, 'a stop on the map');
    const next = pickers.nextStop(first, cyclingRng());
    assert.ok(next, 'a next stop on the map');
    assert.ok(Math.hypot(next.x - first.x, next.z - first.z) >= 60, 'a real leg');
    const depot = pickers.depotNear(first, cyclingRng());
    assert.ok(depot, 'a depot on the map');
    assert.ok(Math.hypot(depot.x - first.x, depot.z - first.z) >= 60, 'a depot a drive away');
    const empty = garbageRoutePickers({ size: 5, tiles: '.'.repeat(25) }, { x: 0, z: 0 });
    assert.equal(empty.stopNear(0, 0, cyclingRng()), null);
    assert.equal(empty.nextStop({ x:0, z:0 }, cyclingRng()), null);
    assert.equal(empty.depotNear({ x:0, z:0 }, cyclingRng()), null);
  });
  it('a custom map with no roads never starts a route', () => {
    const job = createGarbageJob(cyclingRng(),
      garbageRoutePickers({ size: 5, tiles: '.'.repeat(25) }, { x: 0, z: 0 }));
    job.setInTruck(true);
    for(let k = 0; k < 40; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'idle');
    assert.equal(job.active, false);
  });
  it('a full route builds and completes on a custom map', () => {
    const size = 40, rows = [];
    for(let j = 0; j < size; j++){
      let row = '';
      for(let i = 0; i < size; i++) row += (j === 20 || i === 20) ? '#' : '.';
      rows.push(row);
    }
    const job = createGarbageJob(cyclingRng(),
      garbageRoutePickers({ size, tiles: rows.join('') }, { x: 0, z: 0 }));
    assert.ok(startRoute(job));
    const evs = driveRoute(job);
    assert.ok(evs.find(e => e.type === 'routeComplete'), 'custom-map route should complete');
  });
});

describe('route state machine', () => {
  it('starts off, goes idle in the truck, then a route starts nearby', () => {
    const job = createGarbageJob(cyclingRng());
    assert.equal(job.state, 'off');
    job.setInTruck(true);
    assert.equal(job.state, 'idle');
    assert.ok(startRoute(job));
    assert.equal(job.state, 'route');
    assert.equal(job.phase, 'collect');
    assert.ok(job.target, 'a beacon target');
    assert.ok(job.nextStop, 'a first stop');
    assert.ok(job.depot, 'a depot');
    assert.ok(job.stopCount >= GARBAGE_STOPS_MIN && job.stopCount <= GARBAGE_STOPS_MAX);
    assert.equal(job.hopper, 0);
    assert.equal(job.loadValue, 0);
    assert.equal(job.banked, 0);
  });
  it('drives a whole route to completion and pays bins + bonus + on-time', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const events = driveRoute(job);
    assert.equal(job.state, 'cooldown');
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'a routeComplete event');
    assert.equal(done.binPay, done.bins * GARBAGE_PAY_PER_BIN);
    assert.equal(done.completionBonus, ROUTE_BONUS);
    assert.equal(done.onTimeBonus, ON_TIME_BONUS * done.onTimeLegs);
    assert.equal(done.total, done.binPay + done.completionBonus + done.onTimeBonus);
    assert.equal(done.totalStops, job.career.totalStops);
    assert.equal(job.routes, 1);
    assert.equal(job.bins, done.bins);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.ok(job.ratingAvg >= 1 && job.ratingAvg <= 5);
    assert.ok(events.some(e => e.type === 'stopCleared'), 'stops cleared along the way');
    assert.ok(events.some(e => e.type === 'binLoaded'), 'bins loaded along the way');
  });
  it('bins load one at a time, never instantly', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const stop = job.nextStop;
    assert.ok(stop.bins >= 1);
    // One short tick at the curb: the crew has only just started.
    const evs = job.update(0.1, at(stop.x, stop.z, 0, 100));
    assert.equal(job.hopper, 0);
    assert.ok(!evs.some(e => e.type === 'binLoaded'));
    // Sit there long enough and the first bin comes aboard.
    let loaded = false;
    for(let k = 0; k < 10 && !loaded; k++){
      loaded = job.update(0.5, at(stop.x, stop.z, 0, 100)).some(e => e.type === 'binLoaded');
    }
    assert.ok(loaded, 'a bin loads after sitting at the curb');
    assert.equal(job.hopper, 1);
    assert.equal(job.loadValue, GARBAGE_PAY_PER_BIN);
    assert.equal(job.binsLoaded, 1);
  });
  it('driving off mid-stop resets the loader but keeps loaded bins', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const stop = job.nextStop;
    // Load one bin, then drive off for a while, then come back: the next
    // bin still takes the full load time, it does not resume half-loaded.
    let loaded = false;
    for(let k = 0; k < 10 && !loaded; k++){
      loaded = job.update(0.5, at(stop.x, stop.z, 0, 100)).some(e => e.type === 'binLoaded');
    }
    assert.ok(loaded);
    assert.equal(job.hopper, 1);
    job.update(LOAD_TIME * 0.9, at(stop.x + 100, stop.z, 0, 100)); // off the curb
    const evs = job.update(0.1, at(stop.x, stop.z, 0, 100));       // back, barely stopped
    assert.ok(!evs.some(e => e.type === 'binLoaded'), 'no instant bin after driving off');
    assert.equal(job.hopper, 1);
  });
  it('loading only happens stopped inside the radius', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const stop = job.nextStop;
    // Rolling through the marker at speed loads nothing.
    for(let k = 0; k < 10; k++) job.update(0.5, at(stop.x, stop.z, 5, 100));
    assert.equal(job.hopper, 0);
    // Stopped just outside the radius loads nothing either.
    for(let k = 0; k < 10; k++) job.update(0.5, at(stop.x + STOP_RADIUS + 2, stop.z, 0, 100));
    assert.equal(job.hopper, 0);
  });
  it('isLoading reports the crew at work for the HUD', () => {
    const job = createGarbageJob(cyclingRng());
    assert.equal(job.isLoading(at(0, 0, 0, 100)), false); // no route
    assert.ok(startRoute(job));
    const stop = job.nextStop;
    assert.equal(job.isLoading(at(stop.x, stop.z, 0, 100)), true);
    assert.equal(job.isLoading(at(stop.x, stop.z, 5, 100)), false); // rolling
    assert.equal(job.isLoading(at(stop.x + 50, stop.z, 0, 100)), false); // elsewhere
  });
  it('a full hopper detours to the depot, banks the load, and the route resumes', () => {
    // Fixed streets and a 0.99 rng: 9 stops x 4 bins = 36 bins, so a
    // 20-bin hopper must fill mid-route — no luck of the draw involved.
    const fixedPickers = {
      stopNear: () => ({ x: 0, z: 0 }),
      nextStop: from => ({ x: from.x + 200, z: from.z }),
      depotNear: () => ({ x: -500, z: 0 }),
    };
    const job = createGarbageJob(() => 0.99, fixedPickers);
    assert.ok(startRoute(job));
    assert.equal(job.stopCount, 9);
    const events = driveRoute(job);
    const full = events.find(e => e.type === 'hopperFull');
    assert.ok(full, 'the hopper fills on a full route');
    assert.equal(full.hopper, GARBAGE_HOPPER);
    const emptied = events.find(e => e.type === 'emptied');
    assert.ok(emptied, 'a mid-route empty happens');
    assert.equal(emptied.dumped, GARBAGE_HOPPER * GARBAGE_PAY_PER_BIN);
    assert.equal(emptied.banked, GARBAGE_HOPPER * GARBAGE_PAY_PER_BIN);
    assert.ok(events.find(e => e.type === 'routeComplete'), 'the route still completes');
    const done = events.find(e => e.type === 'routeComplete');
    assert.equal(done.bins, 36);
    assert.equal(done.binPay, 36 * GARBAGE_PAY_PER_BIN);
    // The depot detour is on the house: every leg still ran on schedule.
    assert.equal(done.onTimeLegs, done.totalStops);
    assert.equal(done.onTimeBonus, ON_TIME_BONUS * done.totalStops);
    assert.equal(done.total, done.binPay + ROUTE_BONUS + done.onTimeBonus);
  });
  it('emptying takes time — a drive-by never banks the load', () => {
    const fixedPickers = {
      stopNear: () => ({ x: 0, z: 0 }),
      nextStop: from => ({ x: from.x + 200, z: from.z }),
      depotNear: () => ({ x: -500, z: 0 }),
    };
    const job = createGarbageJob(() => 0.99, fixedPickers);
    assert.ok(startRoute(job));
    // Run until the hopper fills and the beacon swings to the depot.
    let ticks = 0, full = false;
    while(job.state === 'route' && ticks++ < 20000 && !full){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      full = evs.some(e => e.type === 'hopperFull');
    }
    assert.ok(full);
    assert.equal(job.phase, 'depot');
    // A flying visit to the depot banks nothing.
    const evs = job.update(0.1, at(job.depot.x, job.depot.z, 0, 100));
    assert.ok(!evs.some(e => e.type === 'emptied'));
    assert.equal(job.banked, 0);
    // Sit there and the hopper empties into the bank.
    let emptied = false;
    for(let k = 0; k < 10 && !emptied; k++){
      emptied = job.update(0.5, at(job.depot.x, job.depot.z, 0, 100)).some(e => e.type === 'emptied');
    }
    assert.ok(emptied);
    assert.equal(job.hopper, 0);
    assert.equal(job.phase, 'collect');
  });
  it('a hard shunt spills a bin off the load', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const stop = job.nextStop;
    let loaded = false;
    for(let k = 0; k < 10 && !loaded; k++){
      loaded = job.update(0.5, at(stop.x, stop.z, 0, 100)).some(e => e.type === 'binLoaded');
    }
    assert.ok(loaded);
    const before = job.hopper, beforeValue = job.loadValue;
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 80)); // 20 hp in one hit
    assert.ok(evs.some(e => e.type === 'spilled'), 'a spill event');
    assert.equal(job.hopper, before - 1);
    assert.equal(job.loadValue, beforeValue - GARBAGE_PAY_PER_BIN);
    // A small scrape spills nothing.
    const evs2 = job.update(0.5, at(stop.x, stop.z, 0, 75));
    assert.ok(!evs2.some(e => e.type === 'spilled'));
  });
  it('wrecking the truck loses the hopper load and pays nothing', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const stop = job.nextStop;
    for(let k = 0; k < 10; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.ok(job.hopper > 0, 'bins aboard before the wreck');
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    const failed = evs.find(e => e.type === 'routeFailed');
    assert.ok(failed);
    assert.equal(failed.reason, 'wrecked');
    assert.ok(failed.loadLost > 0);
    assert.equal(failed.banked, 0);
    assert.equal(job.state, 'cooldown');
    assert.equal(job.routes, 0);
    assert.equal(job.earned, 0);
  });
  it('what you already dumped stays banked when the truck wrecks', () => {
    const fixedPickers = {
      stopNear: () => ({ x: 0, z: 0 }),
      nextStop: from => ({ x: from.x + 200, z: from.z }),
      depotNear: () => ({ x: -500, z: 0 }),
    };
    const job = createGarbageJob(() => 0.99, fixedPickers);
    assert.ok(startRoute(job));
    // Run until the first load is banked at the depot, then wreck it.
    let ticks = 0, emptied = false, failed = null;
    while(job.state === 'route' && ticks++ < 20000 && !failed){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      if(evs.some(e => e.type === 'emptied')) emptied = true;
      if(emptied && job.phase === 'collect'){
        // Back on the route with a banked load: wreck it now.
        failed = job.update(0.5, at(job.target.x, job.target.z, 0, 0)).find(e => e.type === 'routeFailed');
      }
    }
    assert.ok(emptied, 'a load was banked first');
    assert.ok(failed, 'the wreck ended the route');
    assert.equal(failed.banked, GARBAGE_HOPPER * GARBAGE_PAY_PER_BIN);
    assert.ok(failed.loadLost >= 0);
  });
  it('surge is locked at route start, not repriced mid-route', () => {
    const job = createGarbageJob(cyclingRng());
    job.setInTruck(true);
    // Idle at surge 1.5, so the route locks 1.5 in.
    for(let k = 0; k < 40 && job.state !== 'route'; k++) job.update(1, at(0, 0, 0, 100, 1.5));
    assert.ok(job.state === 'route');
    assert.equal(job.surge, 1.5);
    // The sky changes to 1.0 mid-route: the locked rate still pays.
    const stop = job.nextStop;
    let loaded = false;
    for(let k = 0; k < 10 && !loaded; k++){
      loaded = job.update(0.5, at(stop.x, stop.z, 0, 100, 1)).some(e => e.type === 'binLoaded');
    }
    assert.ok(loaded);
    assert.equal(job.loadValue, Math.round(GARBAGE_PAY_PER_BIN * 1.5));
  });
  it('leaving the truck abandons the route and the load', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const stop = job.nextStop;
    for(let k = 0; k < 10; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.ok(job.hopper > 0);
    assert.equal(job.setInTruck(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.hopper, 0);
    assert.equal(job.loadValue, 0);
    assert.equal(job.routes, 0);
  });
  it('abandon() ends a live route quietly and pays nothing', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const res = job.abandon();
    assert.equal(res.abandoned, true);
    assert.equal(res.loadLost, 0);
    assert.equal(job.state, 'cooldown');
    assert.equal(job.hopper, 0);
    assert.equal(job.abandon(), false); // nothing live to abandon
  });
  it('setInTruck twice is a no-op, and idle survives a route ending', () => {
    const job = createGarbageJob(cyclingRng());
    assert.equal(job.setInTruck(true), null);
    assert.equal(job.setInTruck(true), null);
    assert.ok(startRoute(job));
    driveRoute(job);
    assert.equal(job.state, 'cooldown');
    // Cooldown ticks back to idle while still in the truck.
    for(let k = 0; k < 30 && job.state !== 'idle'; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'idle');
  });
  it('career loads from a save and junk fields read as 0', () => {
    const job = createGarbageJob(cyclingRng());
    job.loadCareer({ routes: 3, bins: 40, earned: 500, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    assert.equal(job.routes, 3);
    assert.equal(job.bins, 40);
    assert.equal(job.earned, 500);
    assert.equal(job.ratingCount, 3);
    assert.equal(job.career.routes, 3);
    assert.equal(job.career.bins, 40);
    const junk = createGarbageJob(cyclingRng());
    junk.loadCareer({ routes: 'x', bins: -5, earned: NaN, ratingSum: null });
    assert.equal(junk.routes, 0);
    assert.equal(junk.bins, 0);
    assert.equal(junk.earned, 0);
    junk.loadCareer(null);
    assert.equal(junk.routes, 0);
  });
  it('a finished route counts toward the on-time rate', () => {
    const job = createGarbageJob(cyclingRng());
    assert.ok(startRoute(job));
    const events = driveRoute(job);
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done);
    assert.equal(job.onTimeRate, done.onTimeLegs / done.totalStops);
  });
  it('EMPTY_TIME is longer than a tick, so a depot stop is a real stop', () => {
    assert.ok(EMPTY_TIME > 0.5);
    assert.ok(LOAD_TIME > 0.5);
  });
});
