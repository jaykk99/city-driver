// Tests for the ice cream truck job: the pay math must pay what the meter says,
// and the job state machine must start a route, serve a cone only when
// the truck sits still at a serving stop, run the freezer dry and swing
// to the depot to restock and bank, melt a cone after MELT_TIME on the
// road, lose a cone when a hard shunt drops one from the freezer, pay
// double on the birthday party stop, and pay cones + completion +
// on-time on a finished route — never paying for a route that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  ICE_PAY_PER_CONE, ICE_PARTY_PAY, ICE_FREEZER, ICE_STOPS_MIN, ICE_STOPS_MAX,
  STOP_RADIUS, SERVE_TIME, RESTOCK_TIME, MELT_TIME,
  ROUTE_BONUS, ON_TIME_BONUS, CONES_MIN, CONES_MAX,
  payPerCone, legParFor, ratingFor, isIceCreamCar,
  stopPointNear, nextStopPoint, depotPointNear, conesFor,
  iceCreamRoutePickers, createIceCreamJob,
} from '../js/icecream.js';

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
  job.setInIceCream(true);
  let ticks = 0;
  while(job.state !== 'route' && ticks++ < maxTicks) job.update(1, at(0, 0, 0, 100));
  return job.state === 'route';
}

// Drive a whole route to completion: sit still at each serving stop
// until the server finishes, stop at the depot when the freezer runs
// dry. Returns the events.
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
// stops 200 m apart, the depot 200 m off the first stop. Paired with a
// constant 0.99 rng this builds the longest route (9 stops, 3 cones
// each = 27 cones), so the freezer must restock once — deterministic,
// no luck. The 0.99 rng also picks the last stop as the party stop.
function linePickers(){
  return {
    stopNear: () => ({ x: 200, z: 0 }),
    nextStop: prev => ({ x: prev.x + 200, z: 0 }),
    depotNear: () => ({ x: 0, z: 200 }),
  };
}

describe('pay math', () => {
  it('one cone pays the flat rate, times the surge', () => {
    assert.equal(payPerCone(1), ICE_PAY_PER_CONE);
    assert.equal(payPerCone(1.5), Math.round(ICE_PAY_PER_CONE * 1.5));
    assert.equal(payPerCone(0), ICE_PAY_PER_CONE);   // bad surge reads as 1x
    assert.equal(payPerCone(-2), ICE_PAY_PER_CONE);
  });
  it('a party cone pays double, on top of the surge', () => {
    assert.equal(payPerCone(1, true), ICE_PAY_PER_CONE * ICE_PARTY_PAY);
    assert.equal(payPerCone(1.5, true), Math.round(ICE_PAY_PER_CONE * 1.5 * ICE_PARTY_PAY));
    assert.equal(payPerCone(1, false), ICE_PAY_PER_CONE);
  });
  it('leg par time grows with leg length, and a party leg runs tighter', () => {
    assert.ok(legParFor(400) > legParFor(150));
    assert.equal(legParFor(220), Math.round(220 / 11 + 12));
    assert.ok(legParFor(220, true) < legParFor(220), 'party par is tighter');
    assert.equal(legParFor(220, true), Math.max(5, Math.round(Math.round(220 / 11 + 12) * 0.8)));
  });
  it('rating: smooth and on time is 5, late and battered costs stars, never below 1', () => {
    assert.equal(ratingFor(6, 6, 0), 5);
    assert.equal(ratingFor(5, 6, 0), 4);    // one late leg
    assert.equal(ratingFor(2, 6, 0), 3);    // most legs late
    assert.equal(ratingFor(6, 6, 0.3), 4);  // light damage
    assert.equal(ratingFor(6, 6, 0.6), 3);  // heavy damage
    assert.equal(ratingFor(0, 6, 0.6), 1);  // late and battered bottoms out at 1
  });
  it('isIceCreamCar reads the car extra', () => {
    assert.equal(isIceCreamCar({ extra:'icecream' }), true);
    assert.equal(isIceCreamCar({ extra:'mail' }), false);
    assert.equal(isIceCreamCar(null), false);
    assert.equal(isIceCreamCar({}), false);
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
  it('cones per stop are 1 to 3', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const n = conesFor(rng);
      assert.ok(n >= CONES_MIN && n <= CONES_MAX, 'cones ' + n);
    }
  });
  it('custom-map pickers use the map roads, and a roadless map gets no route', () => {
    // 30x30 tiles of road: plenty of streets to run a route on.
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    const pickers = iceCreamRoutePickers(map, { x: 0, z: 0 });
    const first = pickers.stopNear(0, 0, cyclingRng());
    assert.ok(first, 'a stop on the map');
    const next = pickers.nextStop(first, cyclingRng());
    assert.ok(next, 'a next stop on the map');
    const depot = pickers.depotNear(first, cyclingRng());
    assert.ok(depot, 'a depot on the map');
    // A map with no roads at all gets no route.
    const empty = { size: 10, tiles: '.'.repeat(10 * 10) };
    const noPickers = iceCreamRoutePickers(empty, { x: 0, z: 0 });
    assert.equal(noPickers.stopNear(0, 0, cyclingRng()), null);
    assert.equal(noPickers.nextStop(first, cyclingRng()), null);
    assert.equal(noPickers.depotNear(first, cyclingRng()), null);
  });
});

describe('route state machine', () => {
  it('a route starts with a full freezer and the surge locked in', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    assert.equal(job.state, 'route');
    assert.equal(job.phase, 'serve');
    assert.equal(job.freezer, ICE_FREEZER);
    assert.equal(job.freezerCapacity, ICE_FREEZER);
    assert.ok(job.stopCount >= ICE_STOPS_MIN && job.stopCount <= ICE_STOPS_MAX);
    assert.ok(job.target, 'a serving stop to drive to');
    assert.equal(job.surge, 1);
  });
  it('no route starts off the ice cream truck', () => {
    const job = createIceCreamJob(cyclingRng());
    for(let k = 0; k < 60; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'off');
    assert.equal(job.active, false);
  });
  it('exactly one stop per route is the birthday party stop', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // The routeStart event lists every stop with its party flag.
    let started = null;
    const probe = createIceCreamJob(cyclingRng());
    probe.setInIceCream(true);
    let ticks = 0;
    while(probe.state !== 'route' && ticks++ < 60){
      const evs = probe.update(1, at(0, 0, 0, 100));
      const s = evs.find(e => e.type === 'routeStart');
      if(s) started = s;
    }
    assert.ok(started, 'a route started');
    assert.equal(started.stops.filter(s => s.party).length, 1, 'one party stop');
    assert.equal(job.stopCount, started.stops.length);
  });
  it('sitting still at a serving stop serves one cone per SERVE_TIME and pays', () => {
    // Deterministic 3-cone stops, so one serve leaves exactly two cones owed.
    const job = createIceCreamJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    assert.ok(stop, 'a stop waiting');
    assert.equal(stop.cones, 3);
    assert.equal(job.nextParty, false, 'first stop is not the party stop');
    const evs = [];
    for(let k = 0; k < 4; k++) evs.push(...job.update(0.5, at(stop.x, stop.z, 0, 100)));
    assert.ok(evs.some(e => e.type === 'coneServed'), 'a cone served');
    assert.equal(job.freezer, ICE_FREEZER - 1);
    assert.equal(job.loadValue, ICE_PAY_PER_CONE);
    assert.equal(job.conesServed, 1);
    assert.equal(job.conesLeft, 2);
  });
  it('rolling through a stop serves nothing: the server needs the truck stopped', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 10; k++) job.update(0.5, at(stop.x, stop.z, 5, 100));
    assert.equal(job.conesServed, 0);
    assert.equal(job.freezer, ICE_FREEZER);
    assert.equal(job.loadValue, 0);
  });
  it('sitting still away from the stop serves nothing', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    for(let k = 0; k < 10; k++) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.conesServed, 0);
    assert.equal(job.freezer, ICE_FREEZER);
  });
  it('a full route pays cones + completion + on-time, party included, and the career keeps it', () => {
    // Longest route: 9 stops, 3 cones each, 27 cones — the last stop
    // is the party stop, so its 3 cones pay double. The whole route
    // runs in ~62 s of route time, inside one MELT_TIME, so nothing melts.
    const job = createIceCreamJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    assert.equal(job.stopCount, 9);
    const events = driveRoute(job);
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed, got: ' + events.map(e => e.type).join(','));
    assert.equal(done.total, done.loadPay + ROUTE_BONUS + ON_TIME_BONUS * done.onTimeLegs);
    assert.equal(done.cones, 27);
    assert.equal(done.loadPay, 24 * ICE_PAY_PER_CONE + 3 * ICE_PAY_PER_CONE * ICE_PARTY_PAY);
    assert.equal(done.onTimeLegs, 9);   // teleported legs are always on time
    assert.equal(events.filter(e => e.type === 'restocked').length, 1, 'one depot restock');
    assert.equal(events.filter(e => e.type === 'melted').length, 0, 'nothing melted on a fast route');
    assert.equal(job.routes, 1);
    assert.equal(job.cones, 27);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.equal(job.ratingAvg, 5);
    assert.equal(job.state, 'cooldown');
  });
  it('the party stop pays double per cone when the server gets there', () => {
    const job = createIceCreamJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // Drive to the last stop, the party one, and watch the pay.
    let ticks = 0;
    while(!job.nextParty && job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
    }
    assert.equal(job.nextParty, true, 'reached the party stop');
    assert.equal(job.phase, 'serve');
    const before = job.loadValue;
    const stop = job.nextStop;
    const evs = [];
    for(let k = 0; k < 4; k++) evs.push(...job.update(0.5, at(stop.x, stop.z, 0, 100)));
    assert.ok(evs.some(e => e.type === 'coneServed' && e.party === true), 'a party cone served');
    assert.equal(job.loadValue - before, ICE_PAY_PER_CONE * ICE_PARTY_PAY);
  });
  it('the surge locks at route start: the sky changing mid-route never reprices it', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // Route started at 1x; now the night surge arrives mid-route.
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100, 1.5));
    assert.equal(job.loadValue, ICE_PAY_PER_CONE);   // still the 1x rate
    assert.equal(job.surge, 1);
  });
  it('a night route pays the surged rate on every cone', () => {
    const job = createIceCreamJob(cyclingRng());
    job.setInIceCream(true);
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 60) job.update(1, at(0, 0, 0, 100, 1.5));
    assert.equal(job.state, 'route');
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100, 1.5));
    assert.equal(job.loadValue, Math.round(ICE_PAY_PER_CONE * 1.5));
  });
  it('an empty freezer swings the beacon to the depot, and restocking banks the cones', () => {
    const job = createIceCreamJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const events = [];
    let ticks = 0, sawEmpty = false, sawRestock = false;
    while(job.state !== 'cooldown' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      events.push(...evs);
      if(evs.some(e => e.type === 'freezerEmpty')) sawEmpty = true;
      if(evs.some(e => e.type === 'restocked')) sawRestock = true;
      if(!job.active) break;
    }
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed');
    assert.ok(sawEmpty, 'freezer ran dry mid-route');
    assert.ok(sawRestock, 'depot restocked the freezer');
    const restock = events.find(e => e.type === 'restocked');
    assert.equal(restock.dumped, 15 * ICE_PAY_PER_CONE, 'first freezer invoiced at the depot');
    assert.equal(restock.freezer, ICE_FREEZER, 'freezer full again');
    assert.equal(done.loadPay, 24 * ICE_PAY_PER_CONE + 3 * ICE_PAY_PER_CONE * ICE_PARTY_PAY);
  });
  it('a cone melts after MELT_TIME on the road, and the melt clock resets at the depot', () => {
    const job = createIceCreamJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // 70 s parked nowhere near a stop: inside one MELT_TIME, nothing melts.
    let evs = [];
    for(let k = 0; k < 140; k++) evs.push(...job.update(0.5, at(0, 0, 0, 100)));
    assert.equal(job.freezer, ICE_FREEZER, 'nothing melted inside 70 s');
    assert.ok(!evs.some(e => e.type === 'melted'), 'no melt event yet');
    // 10 s more crosses MELT_TIME: one cone melts.
    evs = [];
    for(let k = 0; k < 20; k++) evs.push(...job.update(0.5, at(0, 0, 0, 100)));
    assert.ok(evs.some(e => e.type === 'melted'), 'a cone melted');
    assert.equal(job.freezer, ICE_FREEZER - 1);
    // Drive the route to the depot restock: the fresh batch resets the clock,
    // so another 70 s on the road melts nothing.
    let ticks = 0, restocked = false;
    while(job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      const es = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      if(es.some(e => e.type === 'restocked')){ restocked = true; break; }
    }
    assert.ok(restocked, 'a restock happened');
    assert.equal(job.freezer, ICE_FREEZER, 'freezer full again');
    evs = [];
    for(let k = 0; k < 140; k++) evs.push(...job.update(0.5, at(0, 0, 0, 100)));
    assert.equal(job.freezer, ICE_FREEZER, 'fresh batch: nothing melted inside 70 s');
    assert.ok(!evs.some(e => e.type === 'melted'), 'melt clock reset at the depot');
  });
  it('a hard shunt drops one cone from the freezer, and takes no pay with it', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.conesServed, 1);
    assert.equal(job.loadValue, ICE_PAY_PER_CONE);
    const freezerBefore = job.freezer;
    const evs = job.update(0.5, at(0, 0, 0, 80));   // 20 hp gone in one hit
    assert.ok(evs.some(e => e.type === 'damaged'), 'a cone dropped');
    assert.equal(job.freezer, freezerBefore - 1);
    assert.equal(job.loadValue, ICE_PAY_PER_CONE, 'served cones keep their pay');
    // A second tick at the same hp drops nothing: one scare per hit.
    const evs2 = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs2.some(e => e.type === 'damaged'), 'no double drop');
  });
  it('a hard shunt with an empty freezer drops nothing', () => {
    const job = createIceCreamJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // Serve the whole freezer at the first stops, then take a hit.
    // The depot switch lands on the tick after the freezer runs dry, when
    // the next stop still owes cones.
    let ticks = 0;
    while(job.phase !== 'depot' && ticks++ < 500){
      const tgt = job.target;
      job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
    }
    assert.equal(job.freezer, 0);
    assert.equal(job.phase, 'depot');
    const evs = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs.some(e => e.type === 'damaged'), 'nothing to drop');
  });
  it('a wrecked ice cream truck loses the unbanked cones and the route pays nothing', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.ok(job.loadValue > 0, 'something served before the wreck');
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    assert.ok(evs.some(e => e.type === 'routeFailed' && e.reason === 'wrecked'));
    assert.equal(job.earned, 0);
    assert.equal(job.routes, 0);
    assert.equal(job.loadValue, 0);
  });
  it('a wreck after a restock keeps what the depot already invoiced', () => {
    const job = createIceCreamJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    let ticks = 0, restocked = null;
    while(job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      const r = evs.find(e => e.type === 'restocked');
      if(r){ restocked = r; break; }
    }
    assert.ok(restocked, 'a restock happened');
    assert.ok(restocked.banked > 0, 'cones invoiced at the depot');
    // Serve one more cone, then wreck: the banked amount survives.
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    const failed = evs.find(e => e.type === 'routeFailed');
    assert.ok(failed, 'route failed on the wreck');
    assert.equal(failed.banked, restocked.banked, 'invoiced cones kept');
    assert.ok(failed.loadLost > 0, 'unbanked cones lost');
  });
  it('leaving the ice cream truck abandons a live route and pays nothing', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.setInIceCream(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.earned, 0);
    assert.equal(job.loadValue, 0);
  });
  it('abandon() ends a live route quietly and reports the lost load', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    const lost = job.loadValue;
    const r = job.abandon();
    assert.equal(r.abandoned, true);
    assert.equal(r.loadLost, lost);
    assert.equal(job.abandon(), false);   // nothing live left to abandon
  });
  it('after a route the next one starts after the cooldown', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(startRoute(job), true);
    driveRoute(job);
    assert.equal(job.state, 'cooldown');
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 120) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'route', 'second route started');
    assert.equal(job.routes, 1);   // career kept across routes
  });
  it('isServing reads the server: stopped at a stop, cones owed, freezer full enough', () => {
    const job = createIceCreamJob(cyclingRng());
    assert.equal(job.isServing(at(0, 0, 0, 100)), false);   // no route yet
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    assert.equal(job.isServing(at(stop.x, stop.z, 0, 100)), true);
    assert.equal(job.isServing(at(stop.x, stop.z, 5, 100)), false);   // rolling
    assert.equal(job.isServing(at(stop.x + 50, stop.z + 50, 0, 100)), false); // nowhere near the stop
  });
  it('career loads from a save and a bad save reads as zero', () => {
    const job = createIceCreamJob(cyclingRng());
    job.loadCareer({ routes: 3, cones: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    assert.equal(job.routes, 3);
    assert.equal(job.cones, 40);
    assert.equal(job.earned, 900);
    assert.equal(job.ratingAvg, 14 / 3);
    assert.ok(Math.abs(job.onTimeRate - 10 / 12) < 1e-9);
    assert.deepEqual(job.career, { routes: 3, cones: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    const bad = createIceCreamJob(cyclingRng());
    bad.loadCareer({ routes: 'three', cones: NaN, earned: -5 });
    assert.equal(bad.routes, 0);
    assert.equal(bad.cones, 0);
    assert.equal(bad.earned, 0);
    bad.loadCareer(null);
    assert.equal(bad.routes, 0);
  });
  it('setPickers(null) restores the main-city grid', () => {
    const job = createIceCreamJob(cyclingRng());
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    job.setPickers(iceCreamRoutePickers(map, { x: 0, z: 0 }));
    job.setPickers(null);
    assert.equal(startRoute(job), true);
  });
});
