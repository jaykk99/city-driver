// Tests for the tow job: the pay math must pay what the meter says,
// and the job state machine must start a call, winch the car on only
// when stopped beside it, trail it to the nearest repair shop, strain
// the hitch when towed too fast and drop the car when the strain maxes
// out, jolt the car on hard shunts, and pay base + speed + care on
// delivery — never paying for a call that never finished.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  TOW_BASE_PAY, TOW_SPEED_BONUS_MAX, TOW_CARE_BONUS_MAX,
  HOOK_RADIUS, SHOP_RADIUS, HOOK_TIME,
  CONDITION_MIN, CONDITION_MAX,
  TOW_DIST, TOW_SPEED_LIMIT, STRAIN_MAX,
  legParFor, speedBonusFor, careBonusFor, ratingFor, isTowCar,
  breakdownPointNear, conditionFor, strandedCarFor, stepTowed,
  nearestShop, towPickers, createTowJob,
} from '../js/towjob.js';
import { REPAIR_SHOPS } from '../js/repairshop.js';

// Deterministic rng cycling through varied values, so retries in the
// point pickers actually explore instead of repeating one draw.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const at = (x, z, speed = 0, hp = 100, surge = 1, heading = 0) => ({ x, z, heading, speed, hp, maxHp: 100, surge });

// Start a job and tick until a call is running (or give up).
function startCall(job, maxTicks = 60){
  job.setInTow(true);
  let ticks = 0;
  while(job.state !== 'respond' && ticks++ < maxTicks) job.update(1, at(0, 0, 0, 100));
  return job.state === 'respond';
}

// Drive a whole call to delivery: stop at the breakdown until the
// winch hooks the car on, then stop at the shop. Returns the events.
function driveCall(job, maxTicks = 20000){
  const events = [];
  let ticks = 0;
  while(job.state !== 'cooldown' && ticks++ < maxTicks){
    const tgt = job.target;
    const ctx = tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100);
    events.push(...job.update(0.5, ctx));
    if(!job.active) break;
  }
  return events;
}

describe('pay math', () => {
  it('speed bonus is full at par, slides to nothing at twice par', () => {
    assert.equal(speedBonusFor(40, 40), TOW_SPEED_BONUS_MAX);
    assert.equal(speedBonusFor(30, 40), TOW_SPEED_BONUS_MAX);   // beating par still pays full
    assert.equal(speedBonusFor(60, 40), Math.round(TOW_SPEED_BONUS_MAX * 0.5));
    assert.equal(speedBonusFor(80, 40), 0);
    assert.equal(speedBonusFor(120, 40), 0);
    assert.equal(speedBonusFor(10, 0), 0);                      // no par, no bonus
  });
  it('care bonus scales with the condition at delivery', () => {
    assert.equal(careBonusFor(100), TOW_CARE_BONUS_MAX);
    assert.equal(careBonusFor(50), Math.round(TOW_CARE_BONUS_MAX * 0.5));
    assert.equal(careBonusFor(0), 0);
  });
  it('leg par time grows with leg length', () => {
    assert.ok(legParFor(400) > legParFor(150));
    assert.equal(legParFor(220), Math.round(220 / 11 + 12));
  });
  it('rating: fast and healthy is 5, late and rough costs stars, never below 1', () => {
    assert.equal(ratingFor(90, true), 5);
    assert.equal(ratingFor(90, false), 4);    // late
    assert.equal(ratingFor(50, true), 4);     // rough arrival
    assert.equal(ratingFor(30, true), 3);     // battered
    assert.equal(ratingFor(30, false), 2);    // late and battered
    assert.equal(ratingFor(0, false), 2);     // late and battered: 5-1-2
  });
  it('isTowCar reads the car extra', () => {
    assert.equal(isTowCar({ extra:'tow' }), true);
    assert.equal(isTowCar({ extra:'bus' }), false);
    assert.equal(isTowCar(null), false);
    assert.equal(isTowCar({}), false);
  });
  it('condition stays in its band', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const c = conditionFor(rng);
      assert.ok(c >= CONDITION_MIN && c <= CONDITION_MAX, 'condition ' + c);
    }
  });
  it('strandedCarFor picks a car id and a colour', () => {
    const car = strandedCarFor(cyclingRng());
    assert.ok(typeof car.id === 'string' && car.id.length > 0);
    assert.ok(typeof car.color === 'number');
  });
});

describe('point pickers', () => {
  it('breakdown sits on a road a real drive away', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 10; k++){
      const p = breakdownPointNear(0, 0, rng);
      const d = Math.hypot(p.x, p.z);
      assert.ok(d >= 60 && d <= 400, 'breakdown ' + d + 'm away');
    }
  });
  it('nearestShop picks the closer repair shop', () => {
    const s1 = nearestShop({ x:-203, z:-55 });
    assert.equal(s1.name, REPAIR_SHOPS[0].name);
    const s2 = nearestShop({ x:203, z:129 });
    assert.equal(s2.name, REPAIR_SHOPS[1].name);
    const mid = nearestShop({ x:0, z:0 });
    assert.ok(REPAIR_SHOPS.some(s => s.name === mid.name), 'a real shop');
  });
  it('custom-map pickers use the map roads, and a roadless map gets no call', () => {
    // 30x30 tiles of road: plenty of streets to run a call on.
    const map = { size: 30, tiles: '#'.repeat(30 * 30) };
    const pickers = towPickers(map, { x: 0, z: 0 });
    const b = pickers.breakdownNear(0, 0, cyclingRng());
    assert.ok(b, 'a breakdown on the map');
    const shop = pickers.shopFor(b, cyclingRng());
    assert.ok(shop, 'a shop on the map');
    assert.ok(Math.hypot(shop.x - b.x, shop.z - b.z) >= 60, 'a shop a drive away');
    const empty = towPickers({ size: 5, tiles: '.'.repeat(25) }, { x: 0, z: 0 });
    assert.equal(empty.breakdownNear(0, 0, cyclingRng()), null);
    assert.equal(empty.shopFor({ x:0, z:0 }, cyclingRng()), null);
  });
  it('a custom map with no roads never starts a call', () => {
    const job = createTowJob(cyclingRng(),
      towPickers({ size: 5, tiles: '.'.repeat(25) }, { x: 0, z: 0 }));
    job.setInTow(true);
    for(let k = 0; k < 40; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'idle');
    assert.equal(job.active, false);
  });
  it('a full call builds and completes on a custom map', () => {
    const size = 40, rows = [];
    for(let j = 0; j < size; j++){
      let row = '';
      for(let i = 0; i < size; i++) row += (j === 20 || i === 20) ? '#' : '.';
      rows.push(row);
    }
    const job = createTowJob(cyclingRng(),
      towPickers({ size, tiles: rows.join('') }, { x: 0, z: 0 }));
    assert.ok(startCall(job));
    const evs = driveCall(job);
    assert.ok(evs.find(e => e.type === 'delivered'), 'custom-map call should deliver');
  });
});

describe('towed car trailing', () => {
  it('stepTowed parks the car behind the truck, facing the same way', () => {
    const t = { x:0, z:0, heading:0, speed:0 };
    for(let k = 0; k < 40; k++) stepTowed(t, 100, 100, 0, 0.1);
    // truck faces -Z (heading 0): the car trails at +Z behind it
    assert.ok(Math.abs(t.x - 100) < 0.5, 'x ' + t.x);
    assert.ok(Math.abs(t.z - (100 + TOW_DIST)) < 0.5, 'z ' + t.z);
    assert.ok(Math.abs(t.heading) < 0.1, 'heading ' + t.heading);
  });
  it('stepTowed swings the heading after a turning truck', () => {
    const t = { x:0, z:7.5, heading:0, speed:0 };
    for(let k = 0; k < 40; k++) stepTowed(t, 0, 0, Math.PI / 2, 0.1);
    assert.ok(Math.abs(t.heading - Math.PI / 2) < 0.2, 'heading ' + t.heading);
  });
});

describe('call state machine', () => {
  it('starts off, goes idle in the truck, then a call starts nearby', () => {
    const job = createTowJob(cyclingRng());
    assert.equal(job.state, 'off');
    job.setInTow(true);
    assert.equal(job.state, 'idle');
    assert.ok(startCall(job));
    assert.equal(job.state, 'respond');
    assert.ok(job.target, 'a beacon target');
    assert.ok(job.breakdown, 'a breakdown');
    assert.ok(job.strandedCar, 'a stranded car');
    assert.ok(job.towed, 'the car waiting on the road');
    assert.ok(job.condition >= CONDITION_MIN && job.condition <= CONDITION_MAX);
    assert.equal(job.shop, null, 'no shop until the car is hooked');
    assert.ok(job.timeLeft > 0, 'par time on the clock');
  });

  it('driving to the breakdown starts the winch, and hooking takes the full hold', () => {
    const job = createTowJob(cyclingRng());
    assert.ok(startCall(job));
    const b = job.breakdown;
    // Moving past it does not hook: the truck has to stop.
    job.update(0.5, at(b.x, b.z, 5, 100));
    assert.equal(job.state, 'respond');
    // Stopped beside it: on site, then the winch runs.
    const evs = job.update(0.5, at(b.x, b.z, 0, 100));
    assert.equal(job.state, 'hook');
    assert.ok(evs.find(e => e.type === 'onSite'));
    assert.ok(job.isHooking(at(b.x, b.z, 0, 100)));
    assert.ok(!job.isHooking(at(b.x, b.z, 5, 100)), 'moving is not hooking');
    job.update(1, at(b.x, b.z, 0, 100));
    assert.ok(job.hookFrac > 0 && job.hookFrac < 1, 'winch partway');
    // Driving off mid-winch resets the hook-up.
    job.update(0.5, at(b.x + 50, b.z, 5, 100));
    assert.equal(job.state, 'hook');
    assert.equal(job.hookFrac, 0);
    // Back and holding still finishes the hook-up.
    let hooked = null;
    for(let k = 0; k < 10 && !hooked; k++){
      hooked = job.update(0.5, at(b.x, b.z, 0, 100)).find(e => e.type === 'hooked');
    }
    assert.ok(hooked, 'hooked after holding still');
    assert.equal(job.state, 'tow');
    assert.ok(job.shop, 'a shop to haul to');
    assert.ok(job.timeLeft > 0, 'tow par on the clock');
  });

  it('a full call delivers and pays base + speed + care, surged', () => {
    const job = createTowJob(cyclingRng());
    assert.ok(startCall(job));
    const evs = driveCall(job);
    const done = evs.find(e => e.type === 'delivered');
    assert.ok(done, 'delivered, got: ' + evs.map(e => e.type).join(','));
    assert.equal(done.base, TOW_BASE_PAY);
    assert.equal(done.speedBonus, TOW_SPEED_BONUS_MAX, 'teleport drive beats par');
    assert.ok(done.careBonus > 0 && done.careBonus <= TOW_CARE_BONUS_MAX);
    assert.equal(done.subtotal, done.base + done.speedBonus + done.careBonus);
    assert.equal(done.total, done.subtotal, 'surge 1 pays the subtotal');
    assert.equal(done.rating, 5, 'fast and healthy is 5 stars');
    assert.equal(job.calls, 1);
    assert.equal(job.tows, 1);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingAvg, 5);
    assert.equal(job.state, 'cooldown');
  });

  it('night surge scales the whole payout', () => {
    const job = createTowJob(cyclingRng());
    job.setInTow(true);
    // Tick idle with a 1.5 surge so the call locks it in.
    let ticks = 0;
    while(job.state !== 'respond' && ticks++ < 60) job.update(1, at(0, 0, 0, 100, 1.5));
    assert.equal(job.state, 'respond');
    assert.equal(job.surge, 1.5);
    const evs = driveCall(job);
    const done = evs.find(e => e.type === 'delivered');
    assert.ok(done);
    assert.equal(done.total, Math.round(done.subtotal * 1.5));
    assert.equal(job.earned, done.total);
  });

  it('towing over the speed limit strains the hitch until the car drops off, then it re-hooks and delivers', () => {
    const job = createTowJob(cyclingRng());
    assert.ok(startCall(job));
    // Get the car on the hook first.
    let ticks = 0;
    while(job.state !== 'hook' && ticks++ < 20) job.update(0.5, at(job.target.x, job.target.z, 0, 100));
    while(job.state !== 'tow' && ticks++ < 20) job.update(0.5, at(job.breakdown.x, job.breakdown.z, 0, 100));
    assert.equal(job.state, 'tow');
    assert.equal(job.strain, 0);
    // Flat out at 30 m/s: strain climbs, warns, then the car drops.
    // The truck sits where the car was hooked, far from the shop.
    const hx = job.towed.x, hz = job.towed.z;
    const evs = [];
    for(let k = 0; k < 30 && job.state === 'tow'; k++){
      evs.push(...job.update(0.5, at(hx, hz, 30, 100)));
    }
    assert.ok(evs.find(e => e.type === 'straining'), 'warned before the drop');
    assert.ok(evs.find(e => e.type === 'unhooked'), 'car dropped off the hook');
    assert.equal(job.state, 'hook');
    assert.ok(job.breakdown, 'the dropped car waits where it fell');
    assert.equal(job.strain, 0, 'a fresh hook starts clean');
    // Hook it again and finish the call.
    const rest = driveCall(job);
    assert.ok(rest.find(e => e.type === 'delivered'), 're-hooked call still delivers');
    assert.equal(job.tows, 1);
  });

  it('a hard shunt while towing jolts the car and costs care', () => {
    const job = createTowJob(cyclingRng());
    assert.ok(startCall(job));
    let ticks = 0;
    while(job.state !== 'tow' && ticks++ < 40) job.update(0.5, at(job.target.x, job.target.z, 0, 100));
    assert.equal(job.state, 'tow');
    const before = job.condition;
    const hx = job.towed.x, hz = job.towed.z;
    const evs = job.update(0.5, at(hx, hz, 0, 84));
    assert.ok(evs.find(e => e.type === 'jostled'), 'one shunt, one jolt');
    assert.ok(job.condition < before, 'condition dropped');
    // The same hp level again is not a second jolt.
    const evs2 = job.update(0.5, at(hx, hz, 0, 84));
    assert.ok(!evs2.find(e => e.type === 'jostled'), 'no double jolt');
  });

  it('a car left rattling on the hook too long falls apart and the call is lost', () => {
    const job = createTowJob(cyclingRng());
    assert.ok(startCall(job));
    let ticks = 0;
    while(job.state !== 'tow' && ticks++ < 40) job.update(0.5, at(job.target.x, job.target.z, 0, 100));
    assert.equal(job.state, 'tow');
    // Sit far from the shop, slow enough to spare the hitch, until the
    // condition rattles away to nothing.
    const hx = job.towed.x, hz = job.towed.z;
    const evs = [];
    for(let k = 0; k < 2000 && job.state === 'tow'; k++){
      evs.push(...job.update(0.5, at(hx, hz, 0, 100)));
    }
    const failed = evs.find(e => e.type === 'callFailed');
    assert.ok(failed, 'the call failed');
    assert.equal(failed.reason, 'totalled');
    assert.equal(failed.carAboard, true);
    assert.equal(job.calls, 0, 'an unfinished call never pays');
    assert.equal(job.earned, 0);
  });

  it('wrecking the truck loses the call, aboard or not', () => {
    const job = createTowJob(cyclingRng());
    assert.ok(startCall(job));
    const evs = job.update(0.5, at(0, 0, 0, 0));
    const failed = evs.find(e => e.type === 'callFailed');
    assert.ok(failed);
    assert.equal(failed.reason, 'wrecked');
    assert.equal(failed.carAboard, false);
    assert.equal(job.state, 'cooldown');
    assert.equal(job.earned, 0);
  });

  it('switching cars or abandoning ends the call with no pay', () => {
    const job = createTowJob(cyclingRng());
    assert.ok(startCall(job));
    assert.equal(job.setInTow(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.active, false);
    assert.equal(job.earned, 0);
    const job2 = createTowJob(cyclingRng());
    assert.ok(startCall(job2));
    assert.equal(job2.abandon(), true);
    assert.equal(job2.active, false);
    assert.equal(job2.abandon(), false, 'abandoning twice is a no-op');
  });

  it('cooldown ends and the next call comes in', () => {
    const job = createTowJob(cyclingRng());
    assert.ok(startCall(job));
    driveCall(job);
    assert.equal(job.state, 'cooldown');
    for(let k = 0; k < 40 && job.state !== 'respond'; k++) job.update(1, at(0, 0, 0, 100));
    assert.equal(job.state, 'respond', 'a second call starts after cooldown');
    assert.equal(job.calls, 1, 'the first call still counts');
  });

  it('career survives a save round-trip, junk reads as zero', () => {
    const job = createTowJob(cyclingRng());
    job.loadCareer({ calls: 3, tows: 2, earned: 500, ratingSum: 12, ratingCount: 3 });
    assert.equal(job.calls, 3);
    assert.equal(job.tows, 2);
    assert.equal(job.earned, 500);
    assert.equal(job.ratingAvg, 4);
    assert.deepEqual(job.career, { calls: 3, tows: 2, earned: 500, ratingSum: 12, ratingCount: 3 });
    job.loadCareer(null);
    assert.equal(job.calls, 3, 'a null save changes nothing');
    job.loadCareer({ calls: 'three', tows: -1, earned: NaN });
    assert.equal(job.calls, 0, 'junk fields read as zero, like the other jobs');
  });
});
