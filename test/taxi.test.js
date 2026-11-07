// Tests for taxi fares: the fare math must pay what the meter says, and
// the job state machine must hail, board, pay, expire and bail exactly
// when the driving says so — never paying for a ride that never happened.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  TAXI_BASE_FARE, TAXI_PER_METRE, TAXI_TIP_RATE, PICKUP_RADIUS, DROPOFF_RADIUS,
  HAIL_PATIENCE, MIN_TRIP, STREAK_BONUS_RATE, STREAK_BONUS_CAP,
  SURGE_RATES, fareFor, parTimeFor, tipFor, isTaxiCar, streakBonusFor, ratingFor,
  surgeMultiplierFor, surgeLabelFor,
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
const at = (x, z, speed = 0, hp = 100, surge = 1) => ({ x, z, speed, hp, maxHp: 100, surge });

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

describe('surge pricing', () => {
  it('the meter follows the time of day: day 1x, sunset 1.25x, night 1.5x', () => {
    assert.equal(surgeMultiplierFor('day'), 1);
    assert.equal(surgeMultiplierFor('sunset'), 1.25);
    assert.equal(surgeMultiplierFor('night'), 1.5);
    assert.deepEqual(SURGE_RATES, { day: 1, sunset: 1.25, night: 1.5 });
    assert.equal(surgeMultiplierFor('dawn'), 1, 'unknown preset pays the plain meter');
    assert.equal(surgeMultiplierFor(null), 1);
    assert.equal(surgeMultiplierFor(undefined), 1);
  });

  it('labels name the surge, and there is none in the day', () => {
    assert.equal(surgeLabelFor(1.5), 'Night surge');
    assert.equal(surgeLabelFor(1.25), 'Sunset surge');
    assert.equal(surgeLabelFor(1), '');
    assert.equal(surgeLabelFor(0.5), '');
  });

  it('fareFor scales the whole meter by the surge, default 1x', () => {
    const plain = TAXI_BASE_FARE + Math.round(TAXI_PER_METRE * 600);
    assert.equal(fareFor(600), plain);
    assert.equal(fareFor(600, 1), plain);
    assert.equal(fareFor(600, 1.5), Math.round(plain * 1.5));
    assert.equal(fareFor(600, 1.25), Math.round(plain * 1.25));
    assert.equal(fareFor(600, 0), plain, 'a garbage surge never zeroes a fare');
    assert.equal(fareFor(600, -2), plain);
    assert.equal(fareFor(600, NaN), plain);
  });

  // Drive one full fare at a fixed surge and return the hail, pickup + dropoff.
  function driveSurgeFare(surge){
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0, 0, 100, surge)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail, 'a hail arrives');
    assert.equal(hail.surge, surge, 'the hail carries the live surge');
    const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0, 100, surge));
    assert.equal(pickup[0].type, 'pickup');
    assert.equal(pickup[0].surge, surge);
    assert.equal(job.surge, surge, 'the HUD reads the locked-in surge mid-ride');
    const d = pickup[0].dest;
    const drop = job.update(0.1, at(d.x, d.z, 0, 100, surge));
    assert.equal(drop[0].type, 'dropoff');
    return { job, hail, pickup: pickup[0], drop: drop[0] };
  }
  const tripOf = (hail, pickup) => Math.hypot(pickup.dest.x - hail.point.x, pickup.dest.z - hail.point.z);

  it('a night fare pays 1.5x end to end: fare, tip and total', () => {
    const { hail, pickup, drop } = driveSurgeFare(1.5);
    const trip = tripOf(hail, pickup);
    assert.equal(drop.fare, fareFor(trip, 1.5), 'payout fare is the surged meter fare');
    assert.equal(pickup.fareEstimate, fareFor(trip, 1.5), 'the meter quote matches the payout');
    assert.ok(drop.fare > fareFor(trip, 1), 'the same trip at night pays more than in the day');
    assert.equal(drop.surge, 1.5);
    assert.equal(drop.tip, tipFor(drop.fare, 0.1, pickup.parSeconds, 0), 'tip scales off the surged fare');
    assert.equal(drop.total, drop.fare + drop.tip + drop.streakBonus);
  });

  it('a sunset fare pays 1.25x, a day fare pays the plain meter', () => {
    const sunset = driveSurgeFare(1.25);
    assert.equal(sunset.drop.surge, 1.25);
    assert.equal(sunset.drop.fare, fareFor(tripOf(sunset.hail, sunset.pickup), 1.25));
    const day = driveSurgeFare(1);
    assert.equal(day.drop.surge, 1);
    assert.equal(day.drop.fare, fareFor(tripOf(day.hail, day.pickup), 1));
  });

  it('the surge locks at pickup: the sky changing mid-ride never reprices the fare', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0, 0, 100, 1.5)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail);
    const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0, 100, 1.5));
    assert.equal(pickup[0].fareEstimate, fareFor(Math.hypot(pickup[0].dest.x - hail.point.x, pickup[0].dest.z - hail.point.z), 1.5));
    // Dawn breaks mid-ride: the meter stays at the night rate.
    const d = pickup[0].dest;
    const drop = job.update(0.1, at(d.x, d.z, 0, 100, 1));
    assert.equal(drop[0].type, 'dropoff');
    assert.equal(drop[0].surge, 1.5, 'dropoff still pays the pickup surge');
    assert.equal(drop[0].fare, pickup[0].fareEstimate);
    assert.equal(job.surge, 1, 'after dropoff the HUD reads the live day rate again');
  });

  it('a night streak bonus is computed off the surged fare + tip', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    const first = driveSurgeFareOn(job, 1.5);
    assert.equal(first.streakBonus, 0);
    const second = driveSurgeFareOn(job, 1.5);
    assert.equal(second.streak, 2);
    assert.equal(second.surge, 1.5);
    assert.equal(second.streakBonus, streakBonusFor(2, second.fare, second.tip));
    assert.ok(second.streakBonus > 0, 'the night streak bonus pays on the surged fare + tip');
    assert.equal(second.total, second.fare + second.tip + second.streakBonus);
  });

  // Drive one fare on an already-shifted job at `surge`, return dropoff.
  function driveSurgeFareOn(job, surge){
    let hail = null;
    for(let k = 0; k < 60 && !hail; k++){ const evs = job.update(5, at(0, 0, 0, 100, surge)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail, 'a hail arrives');
    const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0, 100, surge));
    assert.equal(pickup[0].type, 'pickup');
    const d = pickup[0].dest;
    const drop = job.update(0.1, at(d.x, d.z, 0, 100, surge));
    assert.equal(drop[0].type, 'dropoff');
    return drop[0];
  }
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

describe('streak bonus + passenger rating', () => {
  it('streak bonus is 0 on the first fare, +10% per fare after, capped at +50%', () => {
    assert.equal(streakBonusFor(1, 200, 100), 0);
    assert.equal(streakBonusFor(2, 200, 100), Math.round(300 * STREAK_BONUS_RATE));
    assert.equal(streakBonusFor(3, 200, 100), Math.round(300 * STREAK_BONUS_RATE * 2));
    assert.equal(streakBonusFor(6, 200, 100), Math.round(300 * STREAK_BONUS_CAP));
    assert.equal(streakBonusFor(20, 200, 100), Math.round(300 * STREAK_BONUS_CAP), 'cap holds past streak 6');
    assert.equal(streakBonusFor(0, 200, 100), 0);
  });

  it('rating is 5 for a quick clean ride, less for late or battered ones', () => {
    const par = 60;
    assert.equal(ratingFor(30, par, 0), 5);
    assert.equal(ratingFor(61, par, 0), 3, 'late costs 2 stars');
    assert.equal(ratingFor(30, par, 0.3), 4, 'light damage costs 1 star');
    assert.equal(ratingFor(30, par, 0.6), 3, 'heavy damage costs 2 stars');
    assert.equal(ratingFor(61, par, 0.6), 1, 'late and wrecked-adjacent bottoms out at 1, never 0');
  });

  // Drive one full fare on an already-shifted job and return the dropoff.
  function driveFare(job){
    let hail = null;
    for(let k = 0; k < 60 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail, 'a hail arrives');
    const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0));
    assert.equal(pickup[0].type, 'pickup');
    const d = pickup[0].dest;
    const drop = job.update(0.1, at(d.x, d.z, 0));
    assert.equal(drop[0].type, 'dropoff');
    return drop[0];
  }

  it('consecutive fares build the streak and pay the bonus', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    const first = driveFare(job);
    assert.equal(job.streak, 1);
    assert.equal(first.streakBonus, 0, 'first fare of a streak earns no bonus');
    assert.equal(first.total, first.fare + first.tip);
    assert.equal(first.rating, 5, 'quick clean ride is 5 stars');
    assert.equal(job.ratingAvg, 5);
    assert.equal(job.rides, 1);
    const second = driveFare(job);
    assert.equal(job.streak, 2);
    assert.equal(second.streak, 2);
    assert.ok(second.streakBonus > 0, 'second consecutive fare pays a streak bonus');
    assert.equal(second.streakBonus, streakBonusFor(2, second.fare, second.tip));
    assert.equal(second.total, second.fare + second.tip + second.streakBonus);
    assert.equal(job.bestStreak, 2);
    assert.equal(job.earned, first.total + second.total);
    assert.equal(job.ratingCount, 2);
  });

  it('a wrecked cab ends the streak with no payout', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    driveFare(job);
    assert.equal(job.streak, 1);
    let hail = null;
    for(let k = 0; k < 60 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    job.update(0.1, at(hail.point.x, hail.point.z, 0));
    assert.equal(job.state, 'ride');
    job.update(0.1, at(50, 50, 0, 0));
    assert.equal(job.streak, 0);
    assert.equal(job.bestStreak, 1, 'best streak survives the wreck');
  });

  it('leaving the cab ends the shift and the streak', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    driveFare(job);
    assert.equal(job.streak, 1);
    job.setInCab(false);
    assert.equal(job.streak, 0);
    job.setInCab(true);
    const next = driveFare(job);
    assert.equal(next.streak, 1, 'new shift starts a new streak');
    assert.equal(next.streakBonus, 0);
  });

  it('an expired hail does not break the streak', () => {
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    driveFare(job);
    assert.equal(job.streak, 1);
    let hail = null;
    for(let k = 0; k < 60 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail);
    const expired = job.update(HAIL_PATIENCE + 1, at(0, 0));
    assert.equal(expired[0].type, 'hailExpired');
    assert.equal(job.streak, 1, 'missing a hail is not losing a passenger');
    const next = driveFare(job);
    assert.equal(next.streak, 2);
    assert.ok(next.streakBonus > 0);
  });

  it('career loads from a save and the streak never carries over', () => {
    const job = createTaxiJob(cyclingRng());
    job.loadCareer({ rides: 10, earned: 5000, bestStreak: 4, ratingSum: 45, ratingCount: 10 });
    assert.equal(job.rides, 10);
    assert.equal(job.earned, 5000);
    assert.equal(job.bestStreak, 4);
    assert.equal(job.ratingAvg, 4.5);
    assert.equal(job.streak, 0, 'a new session starts a new shift');
    assert.deepEqual(job.career, { rides: 10, earned: 5000, bestStreak: 4, ratingSum: 45, ratingCount: 10 });
    const bad = createTaxiJob(cyclingRng());
    bad.loadCareer({ rides: 'many', earned: -5, ratingSum: NaN });
    assert.equal(bad.rides, 0);
    assert.equal(bad.earned, 0);
    assert.equal(bad.ratingAvg, 0);
    const none = createTaxiJob(cyclingRng());
    none.loadCareer(null);
    assert.equal(none.ratingCount, 0);
  });
});
