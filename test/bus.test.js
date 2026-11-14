// Tests for the city bus route job: the fare math must pay what the
// meter says, and the job state machine must start a route, board riders
// at every stop, pay the farebox plus bonuses on completion, scare riders
// off on hard shunts, and lose the farebox on a wreck — never paying for
// a route that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  BUS_FARE_PER_RIDER, BUS_CAPACITY, BUS_STOPS_MIN, BUS_STOPS_MAX,
  STOP_RADIUS, ROUTE_BONUS, ON_TIME_BONUS, LEG_MIN_DIST, LEG_MAX_DIST,
  WAITING_MIN, WAITING_MAX,
  farePerRider, legParFor, ratingFor, isBusCar,
  stopPointNear, nextStopPoint, waitingFor,
  busRoutePickers, createBusJob,
} from '../js/bus.js';
import { GRID_HALF } from '../js/world.js';

// Deterministic rng cycling through varied values, so retries in the
// point pickers actually explore instead of repeating one draw.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const at = (x, z, speed = 0, hp = 100, surge = 1) => ({ x, z, speed, hp, maxHp: 100, surge });

// Drive a whole route to completion: at each stop, stop the bus on the
// marker and tick until it boards. Returns the events the job emitted.
function driveRoute(job, maxTicks = 5000){
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

describe('fare math', () => {
  it('one rider pays the flat fare, surge scales it', () => {
    assert.equal(farePerRider(1), BUS_FARE_PER_RIDER);
    assert.equal(farePerRider(1.5), Math.round(BUS_FARE_PER_RIDER * 1.5));
    assert.equal(farePerRider(), BUS_FARE_PER_RIDER);
    assert.equal(farePerRider(0), BUS_FARE_PER_RIDER);   // junk surge reads as 1
    assert.equal(farePerRider(-2), BUS_FARE_PER_RIDER);
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
  it('only the bus counts as a bus', () => {
    assert.equal(isBusCar({ extra:'bus' }), true);
    assert.equal(isBusCar({ extra:'taxi' }), false);
    assert.equal(isBusCar({}), false);
    assert.equal(isBusCar(null), false);
  });
});

describe('stop pickers', () => {
  it('first stop is on the grid and near the bus', () => {
    const rng = cyclingRng();
    const p = stopPointNear(0, 0, rng);
    assert.ok(Math.abs(p.x) <= GRID_HALF && Math.abs(p.z) <= GRID_HALF);
    assert.ok(Math.hypot(p.x, p.z) <= 400);
  });
  it('next stops are a real leg away', () => {
    const rng = cyclingRng();
    const from = { x:0, z:0 };
    for(let k = 0; k < 10; k++){
      const p = nextStopPoint(from, rng);
      const d = Math.hypot(p.x - from.x, p.z - from.z);
      assert.ok(d >= 60, 'leg ' + d + 'm is too short to be worth driving');
      assert.ok(Math.abs(p.x) <= GRID_HALF && Math.abs(p.z) <= GRID_HALF);
    }
  });
  it('waiting riders are always a real crowd, never an empty stop', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const w = waitingFor(rng);
      assert.ok(w >= WAITING_MIN && w <= WAITING_MAX);
    }
  });
});

describe('route state machine', () => {
  it('off -> idle -> route -> cooldown, with a real chain of stops', () => {
    const job = createBusJob(cyclingRng());
    assert.equal(job.state, 'off');
    assert.equal(job.setInBus(true), null);
    assert.equal(job.state, 'idle');
    // Idle delay is 10-25s: tick it out and a route must start.
    let evs = [];
    for(let k = 0; k < 60 && job.state === 'idle'; k++) evs.push(...job.update(0.5, at(0, 0)));
    assert.equal(job.state, 'route');
    assert.equal(evs.filter(e => e.type === 'routeStart').length, 1);
    const stops = evs.find(e => e.type === 'routeStart').stops;
    assert.ok(stops.length >= BUS_STOPS_MIN && stops.length <= BUS_STOPS_MAX);
    assert.equal(job.stopCount, stops.length);
    assert.ok(job.target);
  });

  it('driving the whole route boards every stop and pays farebox + bonuses', () => {
    const job = createBusJob(cyclingRng());
    job.setInBus(true);
    for(let k = 0; k < 60 && job.state === 'idle'; k++) job.update(0.5, at(0, 0));
    const evs = driveRoute(job);
    const done = evs.find(e => e.type === 'routeComplete');
    assert.ok(done, 'route should complete; got ' + evs.map(e => e.type).join(','));
    const boards = evs.filter(e => e.type === 'board');
    assert.equal(boards.length, done.totalStops - 1);   // every stop boards except the last, which completes the route
    assert.equal(done.totalStops, boards.length + 1);
    assert.ok(done.passengers > 0);
    assert.equal(done.total, done.fares + done.completionBonus + done.onTimeBonus);
    assert.equal(done.completionBonus, ROUTE_BONUS);
    assert.equal(done.onTimeBonus, ON_TIME_BONUS * done.onTimeLegs);
    assert.ok(done.rating >= 1 && done.rating <= 5);
    assert.equal(job.routes, 1);
    assert.equal(job.passengers, done.passengers);
    assert.equal(job.earned, done.total);
    assert.equal(job.state, 'cooldown');
  });

  it('the bus only boards when stopped on the marker', () => {
    const job = createBusJob(cyclingRng());
    job.setInBus(true);
    for(let k = 0; k < 60 && job.state === 'idle'; k++) job.update(0.5, at(0, 0));
    const tgt = job.target;
    // Driving past at speed boards nobody.
    const evs = job.update(0.5, at(tgt.x, tgt.z, 12, 100));
    assert.equal(evs.filter(e => e.type === 'board').length, 0);
    assert.equal(job.onboard, 0);
    // Stopping on it boards the crowd.
    const evs2 = job.update(0.5, at(tgt.x, tgt.z, 0, 100));
    assert.equal(evs2.filter(e => e.type === 'board').length, 1);
    assert.ok(job.onboard > 0);
  });

  it('a full bus leaves the rest waiting', () => {
    const job = createBusJob(cyclingRng());
    job.setInBus(true);
    for(let k = 0; k < 60 && job.state === 'idle'; k++) job.update(0.5, at(0, 0));
    // Board stops until the bus is nearly full, then check the cap.
    let guard = 0;
    while(job.state === 'route' && job.onboard < BUS_CAPACITY - 2 && guard++ < 40){
      const tgt = job.target;
      job.update(0.5, at(tgt.x, tgt.z, 0, 100));
    }
    assert.ok(job.onboard <= BUS_CAPACITY);
    const tgt = job.target;
    if(tgt && job.state === 'route'){
      const before = job.onboard;
      const evs = job.update(0.5, at(tgt.x, tgt.z, 0, 100));
      const board = evs.find(e => e.type === 'board');
      if(board) assert.ok(job.onboard <= BUS_CAPACITY && board.boarded <= BUS_CAPACITY - before);
    }
  });

  it('a hard shunt scares a rider off, and a wreck loses the farebox', () => {
    const job = createBusJob(cyclingRng());
    job.setInBus(true);
    for(let k = 0; k < 60 && job.state === 'idle'; k++) job.update(0.5, at(0, 0));
    const tgt = job.target;
    job.update(0.5, at(tgt.x, tgt.z, 0, 100));   // board the first stop
    assert.ok(job.onboard > 0);
    const aboard = job.onboard;
    // A 20 hp shunt scares exactly one rider off.
    const evs = job.update(0.5, at(tgt.x, tgt.z, 0, 80));
    assert.equal(evs.filter(e => e.type === 'passengerLeft').length, 1);
    assert.equal(job.onboard, aboard - 1);
    // A small scrape scares nobody.
    const evs2 = job.update(0.5, at(tgt.x, tgt.z, 0, 75));
    assert.equal(evs2.filter(e => e.type === 'passengerLeft').length, 0);
    // Wrecking ends the route with the farebox lost, not paid.
    const evs3 = job.update(0.5, at(tgt.x, tgt.z, 0, 0));
    const failed = evs3.find(e => e.type === 'routeFailed');
    assert.ok(failed && failed.reason === 'wrecked');
    assert.ok(failed.fareboxLost > 0);
    assert.equal(job.earned, 0);
    assert.equal(job.routes, 0);
    assert.equal(job.state, 'cooldown');
  });

  it('leaving the bus abandons the route and loses the farebox', () => {
    const job = createBusJob(cyclingRng());
    job.setInBus(true);
    for(let k = 0; k < 60 && job.state === 'idle'; k++) job.update(0.5, at(0, 0));
    assert.equal(job.state, 'route');
    assert.equal(job.setInBus(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.farebox, 0);
    assert.equal(job.onboard, 0);
    assert.equal(job.earned, 0);
  });

  it('abandon() ends a live route, returns false when idle', () => {
    const job = createBusJob(cyclingRng());
    assert.equal(job.abandon(), false);
    job.setInBus(true);
    for(let k = 0; k < 60 && job.state === 'idle'; k++) job.update(0.5, at(0, 0));
    assert.equal(job.abandon(), true);
    assert.equal(job.state, 'cooldown');
  });

  it('late legs lose the on-time bonus but the route still pays', () => {
    const job = createBusJob(cyclingRng());
    job.setInBus(true);
    for(let k = 0; k < 60 && job.state === 'idle'; k++) job.update(0.5, at(0, 0));
    // Sit at the first stop for far longer than any leg par time.
    const tgt = job.target;
    job.update(120, at(tgt.x, tgt.z, 0, 100));
    const evs = driveRoute(job);
    const done = evs.find(e => e.type === 'routeComplete');
    assert.ok(done);
    assert.ok(done.onTimeLegs < done.totalStops, 'at least the first leg should be late');
    assert.ok(done.total > done.fares, 'completion bonus still pays on a late route');
  });
});

describe('career persistence', () => {
  it('loadCareer seeds totals, junk reads as 0, career round-trips', () => {
    const job = createBusJob(cyclingRng());
    job.loadCareer(null);
    job.loadCareer({ routes:'x', passengers:-5, earned:NaN });
    assert.equal(job.routes, 0);
    assert.equal(job.passengers, 0);
    job.loadCareer({ routes:3, passengers:42, earned:1200, onTimeStops:20, totalStops:24, ratingSum:14, ratingCount:3 });
    assert.equal(job.routes, 3);
    assert.equal(job.passengers, 42);
    assert.equal(job.earned, 1200);
    assert.equal(job.onTimeRate, 20 / 24);
    assert.ok(Math.abs(job.ratingAvg - 14 / 3) < 1e-9);
    assert.deepEqual(job.career, { routes:3, passengers:42, earned:1200, onTimeStops:20, totalStops:24, ratingSum:14, ratingCount:3 });
  });
});

describe('custom map pickers', () => {
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
  it('routes run on custom streets, and a roadless map gets none', () => {
    const pickers = busRoutePickers(crossMap(), { x:0, z:0 });
    const rng = cyclingRng();
    const first = pickers.stopNear(0, 0, rng);
    assert.ok(first, 'a stop should exist on the cross');
    const next = pickers.nextStop(first, rng);
    assert.ok(next, 'a next stop should exist a leg away');
    assert.ok(Math.hypot(next.x - first.x, next.z - first.z) >= 60);

    const empty = busRoutePickers({ size: 8, tiles: '.'.repeat(64) }, { x:0, z:0 });
    assert.equal(empty.stopNear(0, 0, rng), null);
    assert.equal(empty.nextStop({ x:0, z:0 }, rng), null);
  });
  it('a full route builds on a custom map', () => {
    const job = createBusJob(cyclingRng(), busRoutePickers(crossMap(), { x:0, z:0 }));
    job.setInBus(true);
    let evs = [];
    for(let k = 0; k < 60 && job.state === 'idle'; k++) evs.push(...job.update(0.5, at(0, 0)));
    assert.equal(job.state, 'route');
    assert.ok(job.stopCount >= BUS_STOPS_MIN);
    evs = driveRoute(job);
    assert.ok(evs.find(e => e.type === 'routeComplete'), 'custom-map route should complete');
  });
});
