// Tests for the school bus job: the pay math must pay what the meter says,
// and the job state machine must start a route, board a kid only when
// the bus sits still at a pickup stop, run the seats full and swing
// to the school to drop off and bank, lose a kid who gets restless
// after RESTLESS_TIME aboard, lose a kid when a hard shunt scares one
// off the bus, pay double on the late-bell stop, and pay fares +
// completion + on-time on a finished route — never paying for a route
// that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  SCHOOL_PAY_PER_KID, SCHOOL_BELL_PAY, SCHOOL_SEATS, SCHOOL_STOPS_MIN, SCHOOL_STOPS_MAX,
  STOP_RADIUS, BOARD_TIME, DROPOFF_TIME, RESTLESS_TIME,
  ROUTE_BONUS, ON_TIME_BONUS, KIDS_MIN, KIDS_MAX,
  payPerKid, legParFor, ratingFor, isSchoolBusCar,
  stopPointNear, nextStopPoint, schoolPointNear, kidsFor,
  schoolBusRoutePickers, createSchoolBusJob,
} from '../js/schoolbus.js';

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
  job.setInSchoolBus(true);
  let ticks = 0;
  while(job.state !== 'route' && ticks++ < maxTicks) job.update(1, at(0, 0, 0, 100));
  return job.state === 'route';
}

// Drive a whole route to completion: sit still at each pickup stop
// until the kids finish boarding, stop at the school when the bus
// fills up. Returns the events.
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
// stops 200 m apart, the school 200 m off the first stop. Paired with a
// constant 0.99 rng this builds the longest route (9 stops, 4 kids
// each = 36 kids), so the seats must empty once at the school —
// deterministic, no luck. The 0.99 rng also picks the last stop as the
// late-bell stop.
function linePickers(){
  return {
    stopNear: () => ({ x: 200, z: 0 }),
    nextStop: prev => ({ x: prev.x + 200, z: 0 }),
    schoolNear: () => ({ x: 0, z: 200 }),
  };
}

describe('pay math', () => {
  it('one kid pays the flat rate, times the surge', () => {
    assert.equal(payPerKid(1), SCHOOL_PAY_PER_KID);
    assert.equal(payPerKid(1.5), Math.round(SCHOOL_PAY_PER_KID * 1.5));
    assert.equal(payPerKid(0), SCHOOL_PAY_PER_KID);   // bad surge reads as 1x
    assert.equal(payPerKid(-2), SCHOOL_PAY_PER_KID);
  });
  it('a late-bell kid pays double, on top of the surge', () => {
    assert.equal(payPerKid(1, true), SCHOOL_PAY_PER_KID * SCHOOL_BELL_PAY);
    assert.equal(payPerKid(1.5, true), Math.round(SCHOOL_PAY_PER_KID * 1.5 * SCHOOL_BELL_PAY));
    assert.equal(payPerKid(1, false), SCHOOL_PAY_PER_KID);
  });
  it('leg par time grows with leg length, and a late-bell leg runs tighter', () => {
    assert.ok(legParFor(400) > legParFor(150));
    assert.equal(legParFor(220), Math.round(220 / 11 + 12));
    assert.ok(legParFor(220, true) < legParFor(220), 'late-bell par is tighter');
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
  it('isSchoolBusCar reads the car extra', () => {
    assert.equal(isSchoolBusCar({ extra:'schoolbus' }), true);
    assert.equal(isSchoolBusCar({ extra:'icecream' }), false);
    assert.equal(isSchoolBusCar(null), false);
    assert.equal(isSchoolBusCar({}), false);
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
  it('school is a real drive from the first stop', () => {
    const p = schoolPointNear({ x:0, z:0 }, cyclingRng());
    assert.ok(Math.hypot(p.x, p.z) >= 150, 'school a real drive away');
  });
  it('kids per stop are 1 to 4', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const n = kidsFor(rng);
      assert.ok(n >= KIDS_MIN && n <= KIDS_MAX, 'kids ' + n);
    }
  });
  it('custom-map pickers use the map roads, and a roadless map gets no route', () => {
    // 30x30 tiles of road: plenty of streets to run a route on.
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    const pickers = schoolBusRoutePickers(map, { x: 0, z: 0 });
    const first = pickers.stopNear(0, 0, cyclingRng());
    assert.ok(first, 'a stop on the map');
    const next = pickers.nextStop(first, cyclingRng());
    assert.ok(next, 'a next stop on the map');
    const school = pickers.schoolNear(first, cyclingRng());
    assert.ok(school, 'a school on the map');
    // A map with no roads at all gets no route.
    const empty = { size: 10, tiles: '.'.repeat(10 * 10) };
    const noPickers = schoolBusRoutePickers(empty, { x: 0, z: 0 });
    assert.equal(noPickers.stopNear(0, 0, cyclingRng()), null);
    assert.equal(noPickers.nextStop(first, cyclingRng()), null);
    assert.equal(noPickers.schoolNear(first, cyclingRng()), null);
  });
});

describe('route state machine', () => {
  it('a route starts with an empty bus and the surge locked in', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    assert.equal(job.state, 'route');
    assert.equal(job.phase, 'pickup');
    assert.equal(job.aboard, 0);
    assert.equal(job.seatsCapacity, SCHOOL_SEATS);
    assert.ok(job.stopCount >= SCHOOL_STOPS_MIN && job.stopCount <= SCHOOL_STOPS_MAX);
    assert.ok(job.target, 'a pickup stop to drive to');
    assert.equal(job.surge, 1);
  });
  it('no route starts off the school bus', () => {
    const job = createSchoolBusJob(cyclingRng());
    for(let k = 0; k < 60; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'off');
    assert.equal(job.active, false);
  });
  it('exactly one stop per route is the late-bell stop', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // The routeStart event lists every stop with its bell flag.
    let started = null;
    const probe = createSchoolBusJob(cyclingRng());
    probe.setInSchoolBus(true);
    let ticks = 0;
    while(probe.state !== 'route' && ticks++ < 60){
      const evs = probe.update(1, at(0, 0, 0, 100));
      const s = evs.find(e => e.type === 'routeStart');
      if(s) started = s;
    }
    assert.ok(started, 'a route started');
    assert.equal(started.stops.filter(s => s.bell).length, 1, 'one late-bell stop');
    assert.equal(job.stopCount, started.stops.length);
  });
  it('sitting still at a pickup stop boards one kid per BOARD_TIME and pays', () => {
    // Deterministic 4-kid stops, so one board leaves exactly three kids waiting.
    const job = createSchoolBusJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    assert.ok(stop, 'a stop waiting');
    assert.equal(stop.kids, 4);
    assert.equal(job.nextBell, false, 'first stop is not the late-bell stop');
    const evs = [];
    for(let k = 0; k < 4; k++) evs.push(...job.update(0.5, at(stop.x, stop.z, 0, 100)));
    assert.ok(evs.some(e => e.type === 'kidBoarded'), 'a kid boarded');
    assert.equal(job.aboard, 1);
    assert.equal(job.loadValue, SCHOOL_PAY_PER_KID);
    assert.equal(job.kidsServed, 1);
    assert.equal(job.kidsLeft, 3);
  });
  it('rolling through a stop boards nothing: the kids need the bus stopped', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 10; k++) job.update(0.5, at(stop.x, stop.z, 5, 100));
    assert.equal(job.kidsServed, 0);
    assert.equal(job.aboard, 0);
    assert.equal(job.loadValue, 0);
  });
  it('sitting still away from the stop boards nothing', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    for(let k = 0; k < 10; k++) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.kidsServed, 0);
    assert.equal(job.aboard, 0);
  });
  it('a full route pays fares + completion + on-time, late-bell included, and the career keeps it', () => {
    // Longest route: 9 stops, 4 kids each, 36 kids — the last stop
    // is the late-bell stop, so its 4 kids pay double. The bus seats
    // 30, so one school drop-off happens mid-route. The whole route
    // runs in ~80 s of route time, inside one RESTLESS_TIME, so no kid
    // gets restless.
    const job = createSchoolBusJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    assert.equal(job.stopCount, 9);
    const events = driveRoute(job);
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed, got: ' + events.map(e => e.type).join(','));
    assert.equal(done.total, done.loadPay + ROUTE_BONUS + ON_TIME_BONUS * done.onTimeLegs);
    assert.equal(done.kids, 36);
    assert.equal(done.loadPay, 32 * SCHOOL_PAY_PER_KID + 4 * SCHOOL_PAY_PER_KID * SCHOOL_BELL_PAY);
    assert.equal(done.onTimeLegs, 9);   // teleported legs are always on time
    assert.equal(events.filter(e => e.type === 'droppedOff').length, 1, 'one school drop-off');
    assert.equal(events.filter(e => e.type === 'restless').length, 0, 'no kid got restless on a fast route');
    assert.equal(job.routes, 1);
    assert.equal(job.kids, 36);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.equal(job.ratingAvg, 5);
    assert.equal(job.state, 'cooldown');
  });
  it('the late-bell stop pays double per kid when the bus gets there', () => {
    const job = createSchoolBusJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // Drive to the last stop, the late-bell one, and watch the pay.
    let ticks = 0;
    while(!job.nextBell && job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
    }
    assert.equal(job.nextBell, true, 'reached the late-bell stop');
    assert.equal(job.phase, 'pickup');
    const before = job.loadValue;
    const stop = job.nextStop;
    const evs = [];
    for(let k = 0; k < 4; k++) evs.push(...job.update(0.5, at(stop.x, stop.z, 0, 100)));
    assert.ok(evs.some(e => e.type === 'kidBoarded' && e.bell === true), 'a late-bell kid boarded');
    assert.equal(job.loadValue - before, SCHOOL_PAY_PER_KID * SCHOOL_BELL_PAY);
  });
  it('the surge locks at route start: the sky changing mid-route never reprices it', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    // Route started at 1x; now the night surge arrives mid-route.
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100, 1.5));
    assert.equal(job.loadValue, SCHOOL_PAY_PER_KID);   // still the 1x rate
    assert.equal(job.surge, 1);
  });
  it('a night route pays the surged rate on every kid', () => {
    const job = createSchoolBusJob(cyclingRng());
    job.setInSchoolBus(true);
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 60) job.update(1, at(0, 0, 0, 100, 1.5));
    assert.equal(job.state, 'route');
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100, 1.5));
    assert.equal(job.loadValue, Math.round(SCHOOL_PAY_PER_KID * 1.5));
  });
  it('full seats swing the beacon to the school, and dropping off banks the fares', () => {
    const job = createSchoolBusJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const events = [];
    let ticks = 0, sawFull = false, sawDrop = false;
    while(job.state !== 'cooldown' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      events.push(...evs);
      if(evs.some(e => e.type === 'seatsFull')) sawFull = true;
      if(evs.some(e => e.type === 'droppedOff')) sawDrop = true;
      if(!job.active) break;
    }
    const done = events.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route completed');
    assert.ok(sawFull, 'seats filled up mid-route');
    assert.ok(sawDrop, 'school dropped the kids off');
    const drop = events.find(e => e.type === 'droppedOff');
    assert.equal(drop.dumped, 30 * SCHOOL_PAY_PER_KID, 'first busload invoiced at the school');
    assert.equal(drop.aboard, 0, 'bus empty again');
    assert.equal(done.loadPay, 32 * SCHOOL_PAY_PER_KID + 4 * SCHOOL_PAY_PER_KID * SCHOOL_BELL_PAY);
  });
  it('a kid gets restless after RESTLESS_TIME aboard, and the clock resets when the bus empties', () => {
    const job = createSchoolBusJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    // Board one kid, then sit nowhere near a stop: inside one
    // RESTLESS_TIME, nobody hops off.
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.aboard, 1);
    let evs = [];
    for(let k = 0; k < 230; k++) evs.push(...job.update(0.5, at(0, 0, 0, 100)));
    assert.equal(job.aboard, 1, 'nobody restless inside 115 s');
    assert.ok(!evs.some(e => e.type === 'restless'), 'no restless event yet');
    // 10 s more crosses RESTLESS_TIME: the kid hops off, fare lost.
    evs = [];
    for(let k = 0; k < 20; k++) evs.push(...job.update(0.5, at(0, 0, 0, 100)));
    assert.ok(evs.some(e => e.type === 'restless'), 'a kid got restless');
    assert.equal(job.aboard, 0);
    assert.equal(job.loadValue, 0);
    // Board another kid at the same stop: the fresh empty bus reset
    // the clock, so another 115 s on the road hops nobody off.
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.aboard, 1);
    evs = [];
    for(let k = 0; k < 230; k++) evs.push(...job.update(0.5, at(0, 0, 0, 100)));
    assert.equal(job.aboard, 1, 'fresh bus: nobody restless inside 115 s');
    assert.ok(!evs.some(e => e.type === 'restless'), 'restless clock reset when the bus emptied');
  });
  it('a hard shunt scares one kid off the bus, fare lost with them', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.kidsServed, 1);
    assert.equal(job.loadValue, SCHOOL_PAY_PER_KID);
    const evs = job.update(0.5, at(0, 0, 0, 80));   // 20 hp gone in one hit
    assert.ok(evs.some(e => e.type === 'scared'), 'a kid got scared off');
    assert.equal(job.aboard, 0);
    assert.equal(job.loadValue, 0, 'the scared kid takes their fare with them');
    // A second tick at the same hp scares nobody: one scare per hit.
    const evs2 = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs2.some(e => e.type === 'scared'), 'no double scare');
  });
  it('a hard shunt with an empty bus scares nobody', () => {
    const job = createSchoolBusJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    // Drive until the school drop-off empties the bus, then take a hit.
    let ticks = 0, dropped = false;
    while(job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      if(evs.some(e => e.type === 'droppedOff')){ dropped = true; break; }
    }
    assert.ok(dropped, 'a drop-off happened');
    assert.equal(job.aboard, 0);
    assert.equal(job.phase, 'pickup');
    const evs = job.update(0.5, at(0, 0, 0, 80));
    assert.ok(!evs.some(e => e.type === 'scared'), 'nobody to scare');
  });
  it('a wrecked school bus loses the unbanked fares and the route pays nothing', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.ok(job.loadValue > 0, 'someone aboard before the wreck');
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    assert.ok(evs.some(e => e.type === 'routeFailed' && e.reason === 'wrecked'));
    assert.equal(job.earned, 0);
    assert.equal(job.routes, 0);
    assert.equal(job.loadValue, 0);
  });
  it('a wreck after a drop-off keeps what the school already banked', () => {
    const job = createSchoolBusJob(() => 0.99, linePickers());
    assert.equal(startRoute(job), true);
    let ticks = 0, dropped = null;
    while(job.state === 'route' && ticks++ < 20000){
      const tgt = job.target;
      const evs = job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100));
      const r = evs.find(e => e.type === 'droppedOff');
      if(r){ dropped = r; break; }
    }
    assert.ok(dropped, 'a drop-off happened');
    assert.ok(dropped.banked > 0, 'fares banked at the school');
    // Board one more kid, then wreck: the banked amount survives.
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    const evs = job.update(0.5, at(stop.x, stop.z, 0, 0));
    const failed = evs.find(e => e.type === 'routeFailed');
    assert.ok(failed, 'route failed on the wreck');
    assert.equal(failed.banked, dropped.banked, 'banked fares kept');
    assert.ok(failed.loadLost > 0, 'unbanked fares lost');
  });
  it('leaving the school bus abandons a live route and pays nothing', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    for(let k = 0; k < 4; k++) job.update(0.5, at(stop.x, stop.z, 0, 100));
    assert.equal(job.setInSchoolBus(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.earned, 0);
    assert.equal(job.loadValue, 0);
  });
  it('abandon() ends a live route quietly and reports the lost load', () => {
    const job = createSchoolBusJob(cyclingRng());
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
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(startRoute(job), true);
    driveRoute(job);
    assert.equal(job.state, 'cooldown');
    let ticks = 0;
    while(job.state !== 'route' && ticks++ < 120) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'route', 'second route started');
    assert.equal(job.routes, 1);   // career kept across routes
  });
  it('isBoarding reads the bus: stopped at a stop, kids waiting, seats free', () => {
    const job = createSchoolBusJob(cyclingRng());
    assert.equal(job.isBoarding(at(0, 0, 0, 100)), false);   // no route yet
    assert.equal(startRoute(job), true);
    const stop = job.nextStop;
    assert.equal(job.isBoarding(at(stop.x, stop.z, 0, 100)), true);
    assert.equal(job.isBoarding(at(stop.x, stop.z, 5, 100)), false);   // rolling
    assert.equal(job.isBoarding(at(stop.x + 50, stop.z + 50, 0, 100)), false); // nowhere near the stop
  });
  it('career loads from a save and a bad save reads as zero', () => {
    const job = createSchoolBusJob(cyclingRng());
    job.loadCareer({ routes: 3, kids: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    assert.equal(job.routes, 3);
    assert.equal(job.kids, 40);
    assert.equal(job.earned, 900);
    assert.equal(job.ratingAvg, 14 / 3);
    assert.ok(Math.abs(job.onTimeRate - 10 / 12) < 1e-9);
    assert.deepEqual(job.career, { routes: 3, kids: 40, earned: 900, onTimeStops: 10, totalStops: 12, ratingSum: 14, ratingCount: 3 });
    const bad = createSchoolBusJob(cyclingRng());
    bad.loadCareer({ routes: 'three', kids: NaN, earned: -5 });
    assert.equal(bad.routes, 0);
    assert.equal(bad.kids, 0);
    assert.equal(bad.earned, 0);
    bad.loadCareer(null);
    assert.equal(bad.routes, 0);
  });
  it('setPickers(null) restores the main-city grid', () => {
    const job = createSchoolBusJob(cyclingRng());
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    job.setPickers(schoolBusRoutePickers(map, { x: 0, z: 0 }));
    job.setPickers(null);
    assert.equal(startRoute(job), true);
  });
});
