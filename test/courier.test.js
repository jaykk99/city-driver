// Tests for the courier shift: food delivery in any car — freshness pay,
// spoil-on-impact, stacking with a batch bonus, offer expiry, wrecked
// orders lost, and the career totals that persist in the save.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  COURIER_BASE_PAY, COURIER_PER_METRE, COURIER_COLD_FLOOR, COURIER_BATCH_BONUS,
  PICKUP_RADIUS, DROPOFF_RADIUS, OFFER_PATIENCE, SPOIL_PER_HIT, MAX_STACK,
  payFor, freshnessFor, parTimeFor, createCourierJob, customMapPickers,
} from '../js/courier.js';
import { newMap } from '../js/custommap.js';

// Deterministic rng that cycles, so retries explore instead of repeating.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
// Fixed pickers: the restaurant is always 100 m east of the driver, the
// customer 300 m north of the restaurant — a 300 m trip, par ~42 s.
const PICKERS = {
  hailNear: (x, z) => ({ x: x + 100, z }),
  destFar: (p) => ({ x: p.x, z: p.z - 300 }),
};
const at = (x, z, speed = 0, hp = 100) => ({ x, z, speed, hp, maxHp: 100 });
const REST = { x: 100, z: 0 };
const DEST = { x: 100, z: -300 };

// Drive a job to its first offer, then to the restaurant, and return the events.
function toOffer(job){
  let evs = [];
  for(let k = 0; k < 60 && job.state !== 'offer'; k++) evs.push(...job.update(1, at(0, 0)));
  assert.equal(job.state, 'offer', 'an offer appears while driving');
  return evs;
}
function pickup(job){
  let evs = [];
  for(let k = 0; k < 10 && job.state === 'offer'; k++) evs.push(...job.update(0.5, at(REST.x, REST.z)));
  assert.equal(job.state, 'carrying', 'stopping at the restaurant collects the order');
  return evs;
}
// Drive to the beacon target each tick: stacked orders have different
// customers, so the destination moves after each drop.
function deliver(job, seconds){
  let evs = [];
  for(let k = 0; k < 10 && (job.state === 'carrying' || job.state === 'carrying2'); k++){
    const t = job.target || DEST;
    evs.push(...job.update(seconds === undefined ? 0.5 : seconds, at(t.x, t.z)));
  }
  return evs;
}

describe('payFor / freshnessFor / parTimeFor', () => {
  it('hot food pays the full meter, cold food pays half', () => {
    const trip = 300, meter = COURIER_BASE_PAY + Math.round(COURIER_PER_METRE * trip);
    assert.equal(payFor(trip, 1), meter);
    assert.equal(payFor(trip, 0), Math.round(meter * COURIER_COLD_FLOOR));
    assert.equal(payFor(trip, 0.5), Math.round(meter * 0.75));
  });
  it('freshness slides from 1 to 0 across par time, then floors', () => {
    const par = parTimeFor(300);
    assert.ok(par > 30 && par < 60, 'par time is a real drive, not a sprint');
    assert.equal(freshnessFor(0, par), 1);
    assert.ok(Math.abs(freshnessFor(par / 2, par) - 0.5) < 1e-9);
    assert.equal(freshnessFor(par, par), 0);
    assert.equal(freshnessFor(par * 3, par), 0, 'three times par is still just cold');
  });
  it('each hard impact spoils 15% of freshness', () => {
    const par = parTimeFor(300);
    assert.ok(Math.abs(freshnessFor(0, par, 1) - (1 - SPOIL_PER_HIT)) < 1e-9);
    assert.equal(freshnessFor(0, par, 7), 0, 'seven hits spoil the order completely');
    assert.equal(freshnessFor(0, 0), 0, 'no par time means no freshness');
  });
  it('junk inputs pay the cold floor, never NaN', () => {
    assert.equal(payFor(300, NaN), payFor(300, 0));
    assert.equal(payFor(300, -1), payFor(300, 0));
    assert.equal(payFor(300, 2), payFor(300, 1));
  });
});

describe('offer -> pickup -> delivery', () => {
  it('a hot delivery pays full meter and records the career', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    const offerEvs = toOffer(job);
    assert.equal(offerEvs.at(-1).type, 'offer');
    assert.ok(offerEvs.at(-1).order.food, 'the ticket names the food');
    assert.ok(offerEvs.at(-1).order.restaurant, 'the ticket names the restaurant');
    const pickEvs = pickup(job);
    assert.equal(pickEvs.at(-1).type, 'pickup');
    const trip = 300, meter = COURIER_BASE_PAY + Math.round(COURIER_PER_METRE * trip);
    const delEvs = deliver(job, 0);
    const done = delEvs.find(e => e.type === 'delivered');
    assert.ok(done, 'stopping at the customer delivers');
    assert.equal(done.pay, meter, 'an instant delivery is still hot, so it pays full');
    assert.equal(done.batchBonus, 0, 'a lone order earns no batch bonus');
    assert.equal(done.ordersLeft, 0);
    assert.equal(job.deliveries, 1);
    assert.equal(job.earned, meter);
    assert.equal(job.career.freshCount, 1, 'a hot delivery counts as fresh');
    assert.equal(job.state, 'cooldown');
  });
  it('a late delivery still pays, just cold', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    toOffer(job); pickup(job);
    // Sit at the restaurant for three par times: the food goes cold.
    const par = parTimeFor(300);
    job.update(par * 3, at(REST.x, REST.z));
    const delEvs = deliver(job, 1);
    const done = delEvs.find(e => e.type === 'delivered');
    assert.ok(done);
    assert.equal(done.pay, payFor(300, 0), 'cold food pays the floor, not zero');
    assert.equal(job.career.freshCount, 0, 'a cold delivery is not a fresh one');
  });
  it('impacts while carrying spoil the food and cut the pay', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    toOffer(job); pickup(job);
    assert.equal(job.noteImpact(), 1, 'one order aboard gets spoiled');
    assert.equal(job.noteImpact(), 1, 'a second shunt spoils it again');
    const delEvs = deliver(job, 0);
    const done = delEvs.find(e => e.type === 'delivered');
    const fresh = 1 - 2 * SPOIL_PER_HIT;
    assert.ok(Math.abs(done.order.freshness - fresh) < 1e-9);
    assert.equal(done.pay, payFor(300, fresh));
  });
  it('noteImpact spoils nothing when nothing is aboard', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    assert.equal(job.noteImpact(), 0);
  });
  it('an ignored offer expires and the job cools down', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    toOffer(job);
    const evs = job.update(OFFER_PATIENCE + 1, at(0, 0));
    assert.ok(evs.some(e => e.type === 'offerExpired'));
    assert.equal(job.state, 'cooldown');
    assert.equal(job.deliveries, 0);
  });
  it('a wrecked car loses the orders, with no pay', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    toOffer(job); pickup(job);
    const evs = job.update(1, at(REST.x, REST.z, 0, 0));
    const lost = evs.find(e => e.type === 'ordersLost');
    assert.ok(lost, 'wrecking the car loses the food');
    assert.equal(lost.lost, 1);
    assert.equal(job.deliveries, 0);
    assert.equal(job.earned, 0);
    assert.equal(job.state, 'cooldown');
  });
});

describe('stacking', () => {
  it('a second offer stacks, and finishing the pair pays the batch bonus', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 1 });
    job.setDriving(true);
    toOffer(job); pickup(job);
    // Wait out the second-offer window; the second ticket appears.
    let evs = [];
    for(let k = 0; k < 40 && job.state !== 'offer2'; k++) evs.push(...job.update(1, at(REST.x, REST.z)));
    assert.equal(job.state, 'offer2', 'a second order appears while carrying');
    assert.ok(evs.some(e => e.type === 'offer' && e.stacked), 'the second offer is flagged stacked');
    // Collect the second order at its restaurant: the beacon points at it.
    const rp = job.target;
    assert.ok(rp, 'the beacon points at the second restaurant');
    for(let k = 0; k < 10 && job.state === 'offer2'; k++) evs.push(...job.update(0.5, at(rp.x, rp.z)));
    assert.equal(job.state, 'carrying2');
    assert.equal(job.carriedCount, 2, 'two orders aboard');
    assert.equal(job.bestStack, 2, 'the career remembers the stack');
    // Deliver both (same destination here): the last drop pays the bonus.
    // One deliver() run drops both, one tick apart, so collect both events.
    const drops = deliver(job, 1).filter(e => e.type === 'delivered');
    assert.equal(drops.length, 2, 'both orders deliver');
    const [first, second] = drops;
    assert.equal(first.batchBonus, 0, 'the first drop of a pair earns no bonus');
    assert.equal(first.ordersLeft, 1);
    assert.equal(second.batchBonus, COURIER_BATCH_BONUS, 'finishing the pair pays $50');
    assert.equal(second.ordersLeft, 0);
    assert.equal(job.deliveries, 2);
    assert.equal(job.state, 'cooldown');
  });
  it('a second offer that expires leaves the first order riding', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 1 });
    job.setDriving(true);
    toOffer(job); pickup(job);
    let evs = [];
    for(let k = 0; k < 40 && job.state !== 'offer2'; k++) evs.push(...job.update(1, at(REST.x, REST.z)));
    assert.equal(job.state, 'offer2');
    // Ignore the second restaurant until its patience runs out — wait at
    // the first restaurant, far from the customer, so nothing delivers.
    evs = job.update(OFFER_PATIENCE + 1, at(REST.x, REST.z));
    assert.ok(evs.some(e => e.type === 'offerExpired' && e.stacked));
    assert.equal(job.state, 'carrying', 'the first order still rides');
    assert.equal(job.carriedCount, 1);
    const d = deliver(job, 1);
    assert.ok(d.some(e => e.type === 'delivered' && e.batchBonus === 0), 'no batch bonus on a lone finish');
  });
  it('delivering the first order while a second offer waits keeps the offer live', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 1 });
    job.setDriving(true);
    toOffer(job); pickup(job);
    for(let k = 0; k < 40 && job.state !== 'offer2'; k++) job.update(1, at(REST.x, REST.z));
    assert.equal(job.state, 'offer2');
    // Deliver the first order first: the second offer must survive.
    const d = job.update(1, at(DEST.x, DEST.z));
    assert.ok(d.some(e => e.type === 'delivered'));
    assert.equal(job.state, 'offer', 'the waiting order is still live after the drop');
    assert.equal(job.carriedCount, 0);
  });
  it('never more than two orders aboard', () => {
    assert.equal(MAX_STACK, 2);
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 1 });
    job.setDriving(true);
    toOffer(job); pickup(job);
    for(let k = 0; k < 40 && job.state !== 'offer2'; k++) job.update(1, at(REST.x, REST.z));
    const rp2 = job.target;
    for(let k = 0; k < 10 && job.state === 'offer2'; k++) job.update(0.5, at(rp2.x, rp2.z));
    assert.equal(job.carriedCount, 2);
    // No third offer draws while two are aboard.
    for(let k = 0; k < 60; k++) job.update(1, at(REST.x, REST.z));
    assert.ok(job.carriedCount <= 2);
  });
});

describe('targets, HUD values and lifecycle', () => {
  it('target points at the restaurant, then the customer', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    assert.equal(job.target, null, 'idle: nothing to point at');
    toOffer(job);
    assert.deepEqual(job.target, REST, 'offer: the beacon points at the restaurant');
    pickup(job);
    assert.deepEqual(job.target, DEST, 'carrying: the beacon points at the customer');
  });
  it('timeLeft counts offer patience, then freshness time', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    toOffer(job);
    assert.ok(job.timeLeft <= OFFER_PATIENCE && job.timeLeft > 0);
    pickup(job);
    const par = parTimeFor(300);
    assert.ok(job.timeLeft <= par && job.timeLeft > par - 5, 'freshness time starts at par');
    job.update(par, at(REST.x, REST.z));
    assert.ok(job.timeLeft <= 0, 'past par the food is cold');
  });
  it('abandon ends a live order, and stopping driving ends the run', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.setDriving(true);
    toOffer(job);
    assert.equal(job.abandon(), true);
    assert.equal(job.state, 'cooldown');
    assert.equal(job.abandon(), false, 'abandoning twice is a no-op');
    toOffer(job); pickup(job);
    assert.equal(job.setDriving(false), 'abandoned', 'getting out mid-delivery loses the order');
    assert.equal(job.state, 'off');
    assert.equal(job.carriedCount, 0);
  });
  it('setDriving(true) twice is a no-op, and the job idles off-duty', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    assert.equal(job.setDriving(true), null);
    assert.equal(job.setDriving(true), null);
    assert.equal(job.state, 'idle');
    assert.equal(job.update(1, at(0, 0)).length, 0, 'idle ticks emit nothing until an offer rolls');
  });
  it('career totals load from a save, and junk reads as zero', () => {
    const job = createCourierJob(cyclingRng(), PICKERS, { secondChance: 0 });
    job.loadCareer({ deliveries: 12, earned: 3450, bestStack: 2, freshCount: 9 });
    assert.deepEqual(job.career, { deliveries: 12, earned: 3450, bestStack: 2, freshCount: 9 });
    job.loadCareer({ deliveries: 'many', earned: NaN, bestStack: -1 });
    assert.deepEqual(job.career, { deliveries: 0, earned: 0, bestStack: 0, freshCount: 0 });
    job.loadCareer(null);
    assert.deepEqual(job.career, { deliveries: 0, earned: 0, bestStack: 0, freshCount: 0 });
  });
  it('custom maps get courier orders on real streets, none on a blank field', () => {
    const OFFSET = { x: 20000, z: 0 };
    const circuit = newMap('circuit', 48);
    const pickers = customMapPickers(circuit, OFFSET);
    const job = createCourierJob(cyclingRng(), pickers, { secondChance: 0 });
    job.setDriving(true);
    let evs = [];
    for(let k = 0; k < 120 && job.state !== 'offer'; k++)
      evs.push(...job.update(1, at(OFFSET.x, OFFSET.z)));
    assert.equal(job.state, 'offer', 'a street circuit carries courier orders');
    const blank = newMap('blank', 32);
    const job2 = createCourierJob(cyclingRng(), customMapPickers(blank, OFFSET), { secondChance: 0 });
    job2.setDriving(true);
    for(let k = 0; k < 120; k++) job2.update(1, at(OFFSET.x, OFFSET.z));
    assert.equal(job2.state, 'idle', 'a blank field never offers a delivery');
    assert.equal(job2.deliveries, 0);
  });
});
