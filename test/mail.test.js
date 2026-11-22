// Tests for the mail truck job: the pay math must pay what the meter says,
// and the job state machine must start a route, drop a parcel only when
// the truck sits still at a delivery stop, run the satchel dry and swing
// to the post office to restock and bank, lose a parcel when a hard shunt
// breaks one in the satchel, pay double on the priority stop, and pay
// parcels + completion + on-time on a finished route — never paying for a
// route that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  MAIL_PAY_PER_PARCEL, MAIL_PRIORITY_PAY, MAIL_SATCHEL, MAIL_STOPS_MIN, MAIL_STOPS_MAX,
  STOP_RADIUS, DROP_TIME, RESTOCK_TIME,
  ROUTE_BONUS, ON_TIME_BONUS, PARCELS_MIN, PARCELS_MAX,
  payPerParcel, legParFor, ratingFor, isMailCar,
  stopPointNear, nextStopPoint, postOfficePointNear, parcelsFor,
  mailRoutePickers, createMailJob,
} from '../js/mail.js';

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
  job.setInMail(true);
  let ticks = 0;
  while(job.state !== 'route' && ticks++ < maxTicks) job.update(1, at(0, 0, 0, 100));
  return job.state === 'route';
}

// Drive a whole route to completion: sit still at each delivery stop
// until the carrier finishes, stop at the post office when the satchel
// runs dry. Returns the events.
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
// stops 200 m apart, the post office 200 m off the first stop. Paired
// with a constant 0.99 rng this builds the longest route (9 stops, 2
// parcels each = 18 parcels), so the satchel must restock once —
// deterministic, no luck. The 0.99 rng also picks the last stop as the
// priority stop.
function linePickers(){
  return {
    stopNear: () => ({ x: 200, z: 0 }),
    nextStop: prev => ({ x: prev.x + 200, z: 0 }),
    officeNear: () => ({ x: 0, z: 200 }),
  };
}

describe('pay math', () => {
  it('one parcel pays the flat rate, times the surge', () => {
    assert.equal(payPerParcel(1), MAIL_PAY_PER_PARCEL);
    assert.equal(payPerParcel(1.5), Math.round(MAIL_PAY_PER_PARCEL * 1.5));
    assert.equal(payPerParcel(0), MAIL_PAY_PER_PARCEL);   // bad surge reads as 1x
    assert.equal(payPerParcel(-2), MAIL_PAY_PER_PARCEL);
  });
  it('a priority parcel pays double, on top of the surge', () => {
    assert.equal(payPerParcel(1, true), MAIL_PAY_PER_PARCEL * MAIL_PRIORITY_PAY);
    assert.equal(payPerParcel(1.5, true), Math.round(MAIL_PAY_PER_PARCEL * 1.5 * MAIL_PRIORITY_PAY));
    assert.equal(payPerParcel(1, false), MAIL_PAY_PER_PARCEL);
  });
  it('leg par time grows with leg length, and a priority leg runs tighter', () => {
    assert.ok(legParFor(400) > legParFor(150));
    assert.equal(legParFor(220), Math.round(220 / 11 + 12));
    assert.ok(legParFor(220, true) < legParFor(220), 'priority par is tighter');
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
  it('isMailCar reads the car extra', () => {
    assert.equal(isMailCar({ extra:'mail' }), true);
    assert.equal(isMailCar({ extra:'plow' }), false);
    assert.equal(isMailCar(null), false);
    assert.equal(isMailCar({}), false);
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
  it('post office is a real drive from the first stop', () => {
    const p = postOfficePointNear({ x:0, z:0 }, cyclingRng());
    assert.ok(Math.hypot(p.x, p.z) >= 150, 'office a real drive away');
  });
  it('parcels per stop are 1 or 2', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const n = parcelsFor(rng);
      assert.ok(n >= PARCELS_MIN && n <= PARCELS_MAX, 'parcels ' + n);
    }
  });
  it('custom-map pickers use the map roads, and a roadless map gets no route', () => {
    // 30x30 tiles of road: plenty of streets to run a route on.
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    const pickers = mailRoutePickers(map, { x: 0, z: 0 });
    const first = pickers.stopNear(0, 0, cyclingRng());
    assert.ok(first, 'a stop on the map');
    const next = pickers.nextStop(first, cyclingRng());
    assert.ok(next, 'a next stop on the map');
    const office = pickers.officeNear(first, cyclingRng());
    assert.ok(office, 'an office on the map');
    // A map with no roads at all gets no route.
    const empty = { size: 10, tiles: '.'.repeat(10 * 10) };
    const noPickers = mailRoutePickers(empty, { x: 0, z: 0 });
    assert.equal(noPickers.stopNear(0, 0, cyclingRng()), null);
    assert.equal(noPickers.nextStop(first, cyclingRng()), null);
    assert.equal(noPickers.officeNear(first, cyclingRng()), null);
  });
});

describe('route state machine', () => {
  it('a route starts with a full satchel and the surge locked in', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    assert.equal(job.state, 'route');
    assert.equal(job.phase, 'deliver');
    assert.equal(job.satchel, MAIL_SATCHEL);
    assert.equal(job.satchelCapacity, MAIL_SATCHEL);
    assert.ok(job.stopCount >= MAIL_STOPS_MIN && job.stopCount <= MAIL_STOPS_MAX);
    assert.ok(job.target, 'a delivery stop to drive to');
    assert.equal(job.surge, 1);
  });
  it('no route starts off the mail truck', () => {
    const job = createMailJob(cyclingRng());
    for(let k = 0; k < 60; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'off');
    assert.equal(job.active, false);
  });
  it('exactly one stop per route is the priority stop', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // The routeStart event lists every stop with its priority flag.
    let started = null;
    const probe = createMailJob(cyclingRng());
    probe.setInMail(true);
    let ticks = 0;
    while(probe.state !== 'route' && ticks++ < 60){
      const evs = probe.update(1, at(0, 0, 0, 100));
      const s = evs.find(e => e.type === 'routeStart');
      if(s) started = s;
    }
    assert.ok(started, 'a route started');
    assert.equal(started.stops.filter(s => s.priority).length, 1, 'one priority stop');
    assert.equal(job.stopCount, started.stops.length);
  });
  it('sitting still at a delivery stop drops one parcel per DROP_TIME and pays', () => {
    // Deterministic 2-parcel stops, so one drop leaves exactly one parcel owed.
    const job = createMailJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    assert.ok(stop, 'a stop waiting');
    assert.equal(stop.parcels, 2);
    assert.equal(job.nextPriority, false, 'first stop is not the priority stop');
    const evs = [];
    for(let k = 0; k < 4; k++) evs.push(...job.update(0.5, at(stop.x, stop.z, 0, 100)));
    assert.ok(evs.some(e => e.type === 'parcelDelivered'), 'a parcel dropped');
    assert.equal(job.satchel, MAIL_SATCHEL - 1);
    assert.equal(job.loadValue, MAIL_PAY_PER_PARCEL);
    assert.equal(job.parcelsDelivered, 1);
    assert.equal(job.parcelsLeft, 1);
  });
  it('rolling through a stop drops nothing: the carrier needs the truck stopped', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 10; k++) job.update(0.5, at(stop.x, stop.z, 5, 100));
    assert.equal(job.parcelsDelivered, 0);
    assert.equal(job.satchel, MAIL_SATCHEL);
    assert.equal(job.loadValue, 0);
  });
  it('sitting still away from the stop drops nothing', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    for(let k = 0; k < 10; k++) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.parcelsDelivered, 0);
    assert.equal(job.satchel, MAIL_SATCHEL);
  });
  it('a full route pays parcels + completion + on-time, priority included, and the career keeps it', () => {
    // Longest route: 9 stops, 2 parcels each, 18 parcels — the last stop
    // is the priority stop, so its 2 parcels pay double.
    const job = createMailJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    assert.equal(job.stopCount, 9);
    const events = driveRoute(job);
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed, got: ' + events.map(e => e.type).join(','));
    assert.equal(done.total, done.loadPay + ROUTE_BONUS + ON_TIME_BONUS * done.onTimeLegs);
    assert.equal(done.parcels, 18);
    assert.equal(done.loadPay, 16 * MAIL_PAY_PER_PARCEL + 2 * MAIL_PAY_PER_PARCEL * MAIL_PRIORITY_PAY);
    assert.equal(done.onTimeLegs, 9);   // teleported legs are always on time
    assert.equal(events.filter(e => e.type === 'restocked').length, 1, 'one office restock');
    assert.equal(job.routes, 1);
    assert.equal(job.parcels, 18);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.equal(job.ratingAvg, 5);
    assert.equal(job.state, 'cooldown');
  });
  it('the priority stop pays double per parcel when the carrier gets there', () => {
    const job = createMailJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // Drive to the last stop, the priority one, and watch the pay.
    let ticks = 0;
    while(!job.nextPriority && job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
    }
    assert.equal(job.nextPriority, true, 'reached the priority stop');
    assert.equal(job.phase, 'deliver');
    const before = job.loadValue;
    const stop = job.nextStop;
    const evs = [];
    for(let k = 0; k < 4; k++) evs.push(...job.update(0.5, at(stop.x, stop.z, 0, 100)));
    assert.ok(evs.some(e => e.type === 'parcelDelivered' && e.priority === true), 'a priority parcel dropped');
    assert.equal(job.loadValue - before, MAIL_PAY_PER_PARCEL * MAIL_PRIORITY_PAY);
  });
  it('the surge locks at route start: the sky changing mid-route never reprices it', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // Route started at 1x; now the night surge arrives mid-route.
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100, 1.5));
    assert.equal(job.loadValue, MAIL_PAY_PER_PARCEL);   // still the 1x rate
    assert.equal(job.surge, 1);
  });
  it('a night route pays the surged rate on every parcel', () => {
    const job = createMailJob(cyclingRng());
    job.setInMail(true);
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 60) job.update(1, at(0, 0, 0, 100, 1.5));
    assert.equal(job.state, 'route');
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100, 1.5));
    assert.equal(job.loadValue, Math.round(MAIL_PAY_PER_PARCEL * 1.5));
  });
  it('an empty satchel swings the beacon to the post office, and restocking banks the parcels', () => {
    const job = createMailJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const events = [];
    let ticks = 0, sawEmpty = false, sawRestock = false;
    while(job.state !== 'cooldown' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      events.push(...evs);
      if(evs.some(e => e.type === 'satchelEmpty')) sawEmpty = true;
      if(evs.some(e => e.type === 'restocked')) sawRestock = true;
      if(!job.active) break;
    }
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed');
    assert.ok(sawEmpty, 'satchel ran dry mid-route');
    assert.ok(sawRestock, 'post office restocked the satchel');
    const restock = events.find(e => e.type === 'restocked');
    assert.equal(restock.dumped, 12 * MAIL_PAY_PER_PARCEL, 'first satchel invoiced at the office');
    assert.equal(restock.satchel, MAIL_SATCHEL, 'satchel full again');
    assert.equal(done.loadPay, 16 * MAIL_PAY_PER_PARCEL + 2 * MAIL_PAY_PER_PARCEL * MAIL_PRIORITY_PAY);
  });
  it('a hard shunt breaks one parcel in the satchel, and takes no pay with it', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.parcelsDelivered, 1);
    assert.equal(job.loadValue, MAIL_PAY_PER_PARCEL);
    const satchelBefore = job.satchel;
    const evs = job.update(0.5, at(0, 0, 0, 80));   // 20 hp gone in one hit
    assert.ok(evs.some(e => e.type === 'damaged'), 'a parcel broke');
    assert.equal(job.satchel, satchelBefore - 1);
    assert.equal(job.loadValue, MAIL_PAY_PER_PARCEL, 'delivered parcels keep their pay');
    // A second tick at the same hp breaks nothing: one scare per hit.
    const evs2 = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs2.some(e => e.type === 'damaged'), 'no double break');
  });
  it('a hard shunt with an empty satchel breaks nothing', () => {
    const job = createMailJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // Drop the whole satchel at the first stops, then take a hit.
    // The office switch lands on the tick after the satchel runs dry, when
    // the next stop still owes parcels.
    let ticks = 0;
    while(job.phase !== 'office' && ticks++ < 500){
      const tgt = job.target;
      job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
    }
    assert.equal(job.satchel, 0);
    assert.equal(job.phase, 'office');
    const evs = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs.some(e => e.type === 'damaged'), 'nothing to break');
  });
  it('a wrecked mail truck loses the unbanked parcels and the route pays nothing', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.ok(job.loadValue > 0, 'something delivered before the wreck');
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    assert.ok(evs.some(e => e.type === 'routeFailed' && e.reason === 'wrecked'));
    assert.equal(job.earned, 0);
    assert.equal(job.routes, 0);
    assert.equal(job.loadValue, 0);
  });
  it('a wreck after a restock keeps what the post office already invoiced', () => {
    const job = createMailJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    let ticks = 0, restocked = null;
    while(job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      const r = evs.find(e => e.type === 'restocked');
      if(r){ restocked = r; break; }
    }
    assert.ok(restocked, 'a restock happened');
    assert.ok(restocked.banked > 0, 'parcels invoiced at the office');
    // Deliver one more parcel, then wreck: the banked amount survives.
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    const failed = evs.find(e => e.type === 'routeFailed');
    assert.ok(failed, 'route failed on the wreck');
    assert.equal(failed.banked, restocked.banked, 'invoiced parcels kept');
    assert.ok(failed.loadLost > 0, 'unbanked parcels lost');
  });
  it('leaving the mail truck abandons a live route and pays nothing', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.setInMail(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.earned, 0);
    assert.equal(job.loadValue, 0);
  });
  it('abandon() ends a live route quietly and reports the lost load', () => {
    const job = createMailJob(cyclingRng());
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
    const job = createMailJob(cyclingRng());
    assert.equal(startRoute(job), true);
    driveRoute(job);
    assert.equal(job.state, 'cooldown');
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 120) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'route', 'second route started');
    assert.equal(job.routes, 1);   // career kept across routes
  });
  it('isDelivering reads the carrier: stopped at a stop, parcels owed, satchel full enough', () => {
    const job = createMailJob(cyclingRng());
    assert.equal(job.isDelivering(at(0, 0, 0, 100)), false);   // no route yet
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    assert.equal(job.isDelivering(at(stop.x, stop.z, 0, 100)), true);
    assert.equal(job.isDelivering(at(stop.x, stop.z, 5, 100)), false);   // rolling
    assert.equal(job.isDelivering(at(stop.x + 50, stop.z + 50, 0, 100)), false); // nowhere near the stop
  });
  it('career loads from a save and a bad save reads as zero', () => {
    const job = createMailJob(cyclingRng());
    job.loadCareer({ routes: 3, parcels: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    assert.equal(job.routes, 3);
    assert.equal(job.parcels, 40);
    assert.equal(job.earned, 900);
    assert.equal(job.ratingAvg, 14 / 3);
    assert.ok(Math.abs(job.onTimeRate - 10 / 12) < 1e-9);
    assert.deepEqual(job.career, { routes: 3, parcels: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    const bad = createMailJob(cyclingRng());
    bad.loadCareer({ routes: 'three', parcels: NaN, earned: -5 });
    assert.equal(bad.routes, 0);
    assert.equal(bad.parcels, 0);
    assert.equal(bad.earned, 0);
    bad.loadCareer(null);
    assert.equal(bad.routes, 0);
  });
  it('setPickers(null) restores the main-city grid', () => {
    const job = createMailJob(cyclingRng());
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    job.setPickers(mailRoutePickers(map, { x: 0, z: 0 }));
    job.setPickers(null);
    assert.equal(startRoute(job), true);
  });
});
