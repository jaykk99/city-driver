// Tests for the street sweeper job: the pay math must pay what the meter says,
// and the job state machine must start a route, sweep a pile only when
// the sweeper drives through it at working speed, run the hopper full and
// swing to the depot to empty and bank, scatter a pile on hard shunts, and
// pay piles + completion + on-time on a finished route — never paying for a
// route that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  SWEEP_PAY_PER_PILE, SWEEP_HOPPER, SWEEP_STOPS_MIN, SWEEP_STOPS_MAX,
  CLEAR_RADIUS, SWEEP_MIN_SPEED, SWEEP_MAX_SPEED, STOP_RADIUS, EMPTY_TIME,
  ROUTE_BONUS, ON_TIME_BONUS, PILES_MIN, PILES_MAX,
  payPerPile, legParFor, ratingFor, isSweeperCar, inSweepWindow,
  stopPointNear, nextStopPoint, depotPointNear, pilesFor, pilePointsFor,
  sweeperRoutePickers, createStreetSweeperJob,
} from '../js/streetsweeper.js';

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
  job.setInSweeper(true);
  let ticks = 0;
  while(job.state !== 'route' && ticks++ < maxTicks) job.update(1, at(0, 0, 0, 100));
  return job.state === 'route';
}

// Drive a whole route to completion: sweep through each pile at working
// speed, stop at the depot when the hopper fills. Returns the events.
function driveRoute(job, maxTicks = 20000){
  const events = [];
  let ticks = 0;
  while(job.state !== 'cooldown' && ticks++ < maxTicks){
    const tgt = job.target;
    const speed = job.phase === 'depot' ? 0 : 5;   // 5 m/s is inside the sweep window
    const ctx = tgt ? at(tgt.x, tgt.z, speed, 100) : at(0, 0, 0, 100);
    events.push(...job.update(0.5, ctx));
    if(!job.active) break;
  }
  return events;
}

describe('pay math', () => {
  it('one pile pays the flat rate, times the surge', () => {
    assert.equal(payPerPile(1), SWEEP_PAY_PER_PILE);
    assert.equal(payPerPile(1.5), Math.round(SWEEP_PAY_PER_PILE * 1.5));
    assert.equal(payPerPile(0), SWEEP_PAY_PER_PILE);   // bad surge reads as 1x
    assert.equal(payPerPile(-2), SWEEP_PAY_PER_PILE);
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
  it('isSweeperCar reads the car extra', () => {
    assert.equal(isSweeperCar({ extra:'sweeper' }), true);
    assert.equal(isSweeperCar({ extra:'plow' }), false);
    assert.equal(isSweeperCar(null), false);
    assert.equal(isSweeperCar({}), false);
  });
  it('the sweep window is 1.5 to 10 m/s inclusive', () => {
    assert.equal(inSweepWindow(0), false);    // stopped: the brushes are not working
    assert.equal(inSweepWindow(1.4), false);
    assert.equal(inSweepWindow(1.5), true);
    assert.equal(inSweepWindow(5), true);
    assert.equal(inSweepWindow(10), true);
    assert.equal(inSweepWindow(10.1), false); // too fast: the brushes skip over the pile
    assert.equal(inSweepWindow(-5), true);    // reversing through at working speed still sweeps
  });
  it('piles per stop stay in their band', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const n = pilesFor(rng);
      assert.ok(n >= PILES_MIN && n <= PILES_MAX, 'piles ' + n);
    }
  });
  it('pile points scatter around the stop centre and start unswept', () => {
    const pts = pilePointsFor({ x:100, z:-50 }, 4, cyclingRng());
    assert.equal(pts.length, 4);
    for(const p of pts){
      assert.ok(Math.hypot(p.x - 100, p.z + 50) <= 9.01, 'pile near the stop');
      assert.equal(p.swept, false);
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
    const pickers = sweeperRoutePickers(map, { x: 0, z: 0 });
    const first = pickers.stopNear(0, 0, cyclingRng());
    assert.ok(first, 'a stop on the map');
    const next = pickers.nextStop(first, cyclingRng());
    assert.ok(next, 'a next stop on the map');
    const depot = pickers.depotNear(first, cyclingRng());
    assert.ok(depot, 'a depot on the map');
    // A map with no roads at all gets no route.
    const empty = { size: 10, tiles: '.'.repeat(10 * 10) };
    const noPickers = sweeperRoutePickers(empty, { x: 0, z: 0 });
    assert.equal(noPickers.stopNear(0, 0, cyclingRng()), null);
    assert.equal(noPickers.nextStop(first, cyclingRng()), null);
    assert.equal(noPickers.depotNear(first, cyclingRng()), null);
  });
});

describe('route state machine', () => {
  it('a route starts with an empty hopper and the surge locked in', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    assert.equal(job.state, 'route');
    assert.equal(job.phase, 'collect');
    assert.equal(job.hopper, 0);
    assert.equal(job.hopperCapacity, SWEEP_HOPPER);
    assert.ok(job.stopCount >= SWEEP_STOPS_MIN && job.stopCount <= SWEEP_STOPS_MAX);
    assert.ok(job.target, 'a pile to sweep');
    assert.equal(job.surge, 1);
  });
  it('no route starts off the sweeper', () => {
    const job = createStreetSweeperJob(cyclingRng());
    for(let k = 0; k < 60; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'off');
    assert.equal(job.active, false);
  });
  it('driving through a pile at working speed sweeps it and pays', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const p = job.nextPile;
    assert.ok(p, 'a pile waiting');
    const evs = job.update(0.5, at(p.x, p.z, 5, 100));
    assert.ok(evs.some(e => e.type === 'pileSwept'), 'pile swept');
    assert.equal(job.hopper, 1);
    assert.equal(job.loadValue, SWEEP_PAY_PER_PILE);
    assert.equal(job.pilesSwept, 1);
  });
  it('stopped on a pile sweeps nothing: the brushes have to be working', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const p = job.nextPile;
    job.update(0.5, at(p.x, p.z, 0, 100));
    assert.equal(job.pilesSwept, 0);
    assert.equal(job.hopper, 0);
    assert.equal(job.loadValue, 0);
  });
  it('blasting through a pile too fast sweeps nothing: the brushes skip over it', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const p = job.nextPile;
    job.update(0.5, at(p.x, p.z, 15, 100));
    assert.equal(job.pilesSwept, 0);
    assert.equal(job.hopper, 0);
  });
  it('a full route pays piles + completion + on-time, and the career keeps it', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stops = job.stopCount;
    const evs = driveRoute(job);
    const done = evs.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed, got: ' + evs.map(e => e.type).join(','));
    assert.equal(done.total, done.pilePay + ROUTE_BONUS + ON_TIME_BONUS * done.onTimeLegs);
    assert.equal(done.pilePay, done.piles * SWEEP_PAY_PER_PILE);
    assert.equal(done.onTimeLegs, stops);   // teleported legs are always on time
    assert.equal(job.routes, 1);
    assert.equal(job.piles, done.piles);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.equal(job.ratingAvg, 5);
    assert.equal(job.state, 'cooldown');
  });
  it('the surge locks at route start: the sky changing mid-route never reprices it', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // Route started at 1x; now the night surge arrives mid-route.
    const p = job.nextPile;
    job.update(0.5, at(p.x, p.z, 5, 100, 1.5));
    assert.equal(job.loadValue, SWEEP_PAY_PER_PILE);   // still the 1x rate
    assert.equal(job.surge, 1);
  });
  it('a night route pays the surged rate on every pile', () => {
    const job = createStreetSweeperJob(cyclingRng());
    job.setInSweeper(true);
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 60) job.update(1, at(0, 0, 0, 100, 1.5));
    assert.equal(job.state, 'route');
    const p = job.nextPile;
    job.update(0.5, at(p.x, p.z, 5, 100, 1.5));
    assert.equal(job.loadValue, Math.round(SWEEP_PAY_PER_PILE * 1.5));
  });
  it('a full hopper swings the beacon to the depot, and emptying banks the load', () => {
    // A long route sweeps more piles than one hopper holds, so the depot
    // run must happen — unless the route was short enough to fit in 20
    // piles, in which case the pay still adds up.
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const events = [];
    let ticks = 0, sawFull = false, sawEmpty = false;
    while(job.state !== 'cooldown' && ticks++ < 20000){
      const tgt = job.target;
      const speed = job.phase === 'depot' ? 0 : 5;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, speed, 100) : at(0, 0, 0, 100));
      events.push(...evs);
      if(evs.some(e => e.type === 'hopperFull')) sawFull = true;
      if(evs.some(e => e.type === 'emptied')) sawEmpty = true;
      if(!job.active) break;
    }
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed');
    if(done.piles > SWEEP_HOPPER){
      assert.ok(sawFull, 'hopper filled mid-route');
      assert.ok(sawEmpty, 'depot emptied the hopper');
    }
    assert.equal(done.pilePay, done.piles * SWEEP_PAY_PER_PILE);
  });
  it('a hard shunt scatters one pile off the load, and takes its pay with it', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const p = job.nextPile;
    job.update(0.5, at(p.x, p.z, 5, 100));
    assert.equal(job.hopper, 1);
    assert.equal(job.loadValue, SWEEP_PAY_PER_PILE);
    const evs = job.update(0.5, at(0, 0, 0, 80));   // 20 hp gone in one hit
    assert.ok(evs.some(e => e.type === 'scattered'), 'pile scattered');
    assert.equal(job.hopper, 0);
    assert.equal(job.loadValue, 0);
    // A second tick at the same hp scatters nothing: one scare per hit.
    const evs2 = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs2.some(e => e.type === 'scattered'), 'no double scatter');
  });
  it('a hard shunt with an empty hopper scatters nothing', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const evs = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs.some(e => e.type === 'scattered'), 'nothing to scatter');
    assert.equal(job.hopper, 0);
  });
  it('a wrecked sweeper loses the unbanked load and the route pays nothing', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const p = job.nextPile;
    job.update(0.5, at(p.x, p.z, 5, 100));
    assert.ok(job.loadValue > 0, 'something swept before the wreck');
    const evs = job.update(0.5, at(p.x, p.z, 0, 0));
    assert.ok(evs.some(e => e.type === 'routeFailed' && e.reason === 'wrecked'));
    assert.equal(job.earned, 0);
    assert.equal(job.routes, 0);
    assert.equal(job.loadValue, 0);
  });
  it('leaving the sweeper abandons a live route and pays nothing', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const p = job.nextPile;
    job.update(0.5, at(p.x, p.z, 5, 100));
    assert.equal(job.setInSweeper(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.earned, 0);
    assert.equal(job.loadValue, 0);
  });
  it('abandon() ends a live route quietly and reports the lost load', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const p = job.nextPile;
    job.update(0.5, at(p.x, p.z, 5, 100));
    const lost = job.loadValue;
    const r = job.abandon();
    assert.equal(r.abandoned, true);
    assert.equal(r.loadLost, lost);
    assert.equal(job.abandon(), false);   // nothing live left to abandon
  });
  it('after a route the next one starts after the cooldown', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(startRoute(job), true);
    driveRoute(job);
    assert.equal(job.state, 'cooldown');
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 120) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'route', 'second route started');
    assert.equal(job.routes, 1);   // career kept across routes
  });
  it('isSweeping reads the brushes: on a pile, in the window, on a live route', () => {
    const job = createStreetSweeperJob(cyclingRng());
    assert.equal(job.isSweeping(at(0, 0, 5, 100)), false);   // no route yet
    assert.equal(startRoute(job), true);
    const p = job.nextPile;
    assert.equal(job.isSweeping(at(p.x, p.z, 5, 100)), true);
    assert.equal(job.isSweeping(at(p.x, p.z, 0, 100)), false);   // stopped
    assert.equal(job.isSweeping(at(p.x, p.z, 15, 100)), false);  // too fast
    assert.equal(job.isSweeping(at(p.x + 50, p.z + 50, 5, 100)), false); // nowhere near a pile
  });
  it('career loads from a save and a bad save reads as zero', () => {
    const job = createStreetSweeperJob(cyclingRng());
    job.loadCareer({ routes: 3, piles: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    assert.equal(job.routes, 3);
    assert.equal(job.piles, 40);
    assert.equal(job.earned, 900);
    assert.equal(job.ratingAvg, 14 / 3);
    assert.ok(Math.abs(job.onTimeRate - 10 / 12) < 1e-9);
    assert.deepEqual(job.career, { routes: 3, piles: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    const bad = createStreetSweeperJob(cyclingRng());
    bad.loadCareer({ routes: 'three', piles: NaN, earned: -5 });
    assert.equal(bad.routes, 0);
    assert.equal(bad.piles, 0);
    assert.equal(bad.earned, 0);
    bad.loadCareer(null);
    assert.equal(bad.routes, 0);
  });
  it('setPickers(null) restores the main-city grid', () => {
    const job = createStreetSweeperJob(cyclingRng());
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    job.setPickers(sweeperRoutePickers(map, { x: 0, z: 0 }));
    job.setPickers(null);
    assert.equal(startRoute(job), true);
  });
});
