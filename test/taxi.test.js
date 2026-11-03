// Tests for taxi fares: the fare math must pay what the meter says, and
// the job state machine must hail, board, pay, expire and bail exactly
// when the driving says so — never paying for a ride that never happened.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  TAXI_BASE_FARE, TAXI_PER_METRE, TAXI_TIP_RATE, PICKUP_RADIUS, DROPOFF_RADIUS,
  HAIL_PATIENCE, MIN_TRIP, fareFor, parTimeFor, tipFor, isTaxiCar,
  hailPointNear, destinationFar, createTaxiJob,
} from '../js/taxi.js';
import { GRID_HALF } from '../js/world.js';

// Deterministic rng cycling through varied values, so retries in the
// point pickers actually explore instead of repeating one draw.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const at = (x, z, speed = 0, hp = 100) => ({ x, z, speed, hp, maxHp: 100 });

describe('fare math', () => {
  it('base fare with no distance, distance on top of it', () => {
    assert.equal(fareFor(0), TAXI_BASE_FARE);
    assert.equal(fareFor(600), TAXI_BASE_FARE + Math.round(TAXI_PER_METRE * 600));
    assert.ok(fareFor(600) > fareFor(100));
  });
  it('par time grows with trip length', () => {
    assert.ok(parTimeFor(1000) > parTimeFor(200));
    assert.equal(parTimeFor(220), Math.round(220 / 11 + 15));
  });
  it('tip is half the fare on time, nothing late, damage eats it', () => {
    const fare = 200, par = 60;
    assert.equal(tipFor(fare, 30, par, 0), Math.round(fare * TAXI_TIP_RATE));
    assert.equal(tipFor(fare, 61, par, 0), 0);
    assert.equal(tipFor(fare, 30, par, 0.5), Math.round(fare * TAXI_TIP_RATE * 0.5));
    assert.equal(tipFor(fare, 30, par, 1), 0);
    assert.equal(tipFor(fare, 30, par, 2), 0);   // over-damage clamps, never negative
  });
  it('isTaxiCar only matches the cab', () => {
    assert.equal(isTaxiCar({ extra:'taxi' }), true);
    assert.equal(isTaxiCar({ extra:'police' }), false);
    assert.equal(isTaxiCar({}), false);
    assert.equal(isTaxiCar(null), false);
  });
});

describe('pickers', () => {
  it('hail points sit on a nearby sidewalk, inside the city', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const p = hailPointNear(40, -80, rng);
      assert.ok(Math.abs(p.x) <= GRID_HALF && Math.abs(p.z) <= GRID_HALF);
      assert.ok(Math.hypot(p.x - 40, p.z + 80) < 200, 'hailer must be near the cab');
    }
  });
  it('destinations are a real trip away', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const from = { x:(rng() - 0.5) * 400, z:(rng() - 0.5) * 400 };
      const d = destinationFar(from, rng);
      assert.ok(Math.hypot(d.x - from.x, d.z - from.z) >= MIN_TRIP);
      assert.ok(Math.abs(d.x) <= GRID_HALF && Math.abs(d.z) <= GRID_HALF);
    }
  });
});

describe('job state machine', () => {
  // Drive a full fare: wait for the hail, stop at the hailer, stop at the
  // destination, and check the payout matches the meter exactly.
  function driveFullFare(){
    const job = createTaxiJob(cyclingRng());
    assert.deepEqual(job.update(30, at(0, 0)), [], 'no hail before the cab');
    job.setInCab(true);
    let evs = [];
    for(let k = 0; k < 30 && !evs.some(e => e.type === 'hail'); k++) evs = job.update(5, at(0, 0));
    const hail = evs.find(e => e.type === 'hail');
    assert.ok(hail, 'a hail arrives while driving the cab');
    assert.equal(job.state, 'hail');
    assert.deepEqual(job.target, hail.point);
    const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0));
    assert.equal(pickup.length, 1);
    assert.equal(pickup[0].type, 'pickup');
    assert.equal(job.state, 'ride');
    assert.deepEqual(job.target, pickup[0].dest);
    assert.ok(Math.hypot(pickup[0].dest.x - hail.point.x, pickup[0].dest.z - hail.point.z) >= MIN_TRIP);
    const d = pickup[0].dest;
    const drop = job.update(0.1, at(d.x, d.z, 0));
    assert.equal(drop.length, 1);
    assert.equal(drop[0].type, 'dropoff');
    assert.equal(drop[0].fare, pickup[0].fareEstimate, 'payout fare is the meter fare');
    assert.equal(drop[0].total, drop[0].fare + drop[0].tip);
    assert.equal(job.state, 'cooldown');
    return { job, hail, pickup, drop };
  }

  it('a full fare pays base + distance + on-time tip', () => {
    const { drop } = driveFullFare();
    assert.ok(drop[0].fare > TAXI_BASE_FARE);
    assert.ok(drop[0].tip > 0, 'a quick clean ride earns the tip');
  });

  it('no pickup while moving: stopping is what boards the passenger', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail);
    assert.deepEqual(job.update(0.1, at(hail.point.x, hail.point.z, 25)), [], 'blowing past at speed boards nobody');
    assert.equal(job.state, 'hail');
    const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0.5));
    assert.equal(pickup[0].type, 'pickup');
  });

  it('a hailer who waits too long walks off, and fares resume after', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail);
    const expired = job.update(HAIL_PATIENCE + 1, at(0, 0));
    assert.equal(expired[0].type, 'hailExpired');
    assert.equal(job.state, 'cooldown');
    assert.equal(job.target, null);
    let next = null;
    for(let k = 0; k < 60 && !next; k++){ const evs = job.update(5, at(0, 0)); next = evs.find(e => e.type === 'hail'); }
    assert.ok(next, 'a new fare hails after the cooldown');
  });

  it('a wrecked cab loses the passenger with no payout', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    job.update(0.1, at(hail.point.x, hail.point.z, 0));
    assert.equal(job.state, 'ride');
    const failed = job.update(0.1, at(50, 50, 0, 0));
    assert.equal(failed[0].type, 'rideFailed');
    assert.equal(failed[0].reason, 'wrecked');
    assert.equal(job.target, null);
  });

  it('leaving the cab abandons a live fare and pays nothing', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    assert.equal(job.setInCab(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.deepEqual(job.update(30, at(0, 0)), []);
    assert.equal(job.setInCab(true), null, 'getting back in re-arms the shift');
    assert.equal(job.state, 'idle');
  });

  it('dropoff radius: stopping just outside it does not pay', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0));
    const d = pickup[0].dest;
    const outside = { x:d.x + DROPOFF_RADIUS + 2, z:d.z };
    assert.deepEqual(job.update(0.1, at(outside.x, outside.z, 0)), []);
    assert.equal(job.state, 'ride');
    const drop = job.update(0.1, at(d.x, d.z, 0));
    assert.equal(drop[0].type, 'dropoff');
  });

  it('pickup radius: stopping just outside it does not board', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    const outside = { x:hail.point.x + PICKUP_RADIUS + 2, z:hail.point.z };
    assert.deepEqual(job.update(0.1, at(outside.x, outside.z, 0)), []);
    assert.equal(job.state, 'hail');
  });
});
