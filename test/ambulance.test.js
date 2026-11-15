// Tests for the ambulance paramedic job: the pay math must pay what the
// meter says, and the job state machine must take a call, load the patient,
// deliver them to the hospital alive for base + speed + care pay, and lose
// the call — never paying — when the patient dies, the rig wrecks, or the
// driver switches cars mid-call.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  AMB_BASE_PAY, AMB_SPEED_BONUS_MAX, AMB_CARE_BONUS_MAX,
  CALL_RADIUS, HOSPITAL_RADIUS, CONDITION_MIN, CONDITION_MAX,
  CONDITION_CRITICAL, DAMAGE_JOLT_CONDITION,
  HOSPITAL_POINT, legParFor, speedBonusFor, careBonusFor, ratingFor,
  isAmbulanceCar, patientPointNear, conditionFor,
  ambulancePickers, createAmbulanceJob,
} from '../js/ambulance.js';
import { GRID_HALF } from '../js/world.js';

// Deterministic rng cycling through varied values, so retries in the
// point pickers actually explore instead of repeating one draw.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const at = (x, z, speed = 0, hp = 100, surge = 1) => ({ x, z, speed, hp, maxHp: 100, surge });

// Drive a whole call to its end: stop on the patient, then stop at the
// hospital. Returns the events the job emitted.
function driveCall(job, maxTicks = 8000){
  const events = [];
  let ticks = 0;
  while(job.state !== 'cooldown' && job.state !== 'off' && ticks++ < maxTicks){
    const tgt = job.target;
    const ctx = tgt ? at(tgt.x, tgt.z, 0, 100) : at(0, 0, 0, 100);
    events.push(...job.update(0.5, ctx));
    if((job.state === 'respond' || job.state === 'transport') && !job.target) break;
  }
  return events;
}

// Start a job in an ambulance and tick until the first call comes in.
function startCall(job, maxTicks = 200){
  job.setInAmbulance(true);
  const events = [];
  let ticks = 0;
  while(job.state !== 'respond' && ticks++ < maxTicks) events.push(...job.update(0.5, at(0, 0, 0, 100)));
  assert.equal(job.state, 'respond', 'a call should come in while idling in the ambulance');
  return events;
}

describe('pay math', () => {
  it('speed bonus is full at par and nothing at twice par', () => {
    assert.equal(speedBonusFor(30, 30), AMB_SPEED_BONUS_MAX);
    assert.equal(speedBonusFor(20, 30), AMB_SPEED_BONUS_MAX);   // faster than par still pays full
    assert.equal(speedBonusFor(45, 30), Math.round(AMB_SPEED_BONUS_MAX * 0.5));
    assert.equal(speedBonusFor(60, 30), 0);
    assert.equal(speedBonusFor(90, 30), 0);
    assert.equal(speedBonusFor(30, 0), 0);
  });
  it('care bonus scales with condition at arrival', () => {
    assert.equal(careBonusFor(100), AMB_CARE_BONUS_MAX);
    assert.equal(careBonusFor(50), Math.round(AMB_CARE_BONUS_MAX * 0.5));
    assert.equal(careBonusFor(0), 0);
    assert.equal(careBonusFor(-10), 0);
  });
  it('leg par time grows with leg length', () => {
    assert.ok(legParFor(400) > legParFor(150));
    assert.equal(legParFor(220), Math.round(220 / 11 + 12));
  });
  it('rating: fast and healthy is 5, late or rough costs stars, never below 1', () => {
    assert.equal(ratingFor(90, true), 5);
    assert.equal(ratingFor(90, false), 4);    // late
    assert.equal(ratingFor(50, true), 4);     // rough arrival
    assert.equal(ratingFor(30, true), 3);     // very rough arrival
    assert.equal(ratingFor(30, false), 2);    // late and very rough
    assert.equal(ratingFor(0, false), 2);     // floor is 1 only via clamp on worse combos
    assert.ok(ratingFor(0, false) >= 1);
  });
  it('isAmbulanceCar only matches the ambulance extra', () => {
    assert.equal(isAmbulanceCar({ extra:'ambulance' }), true);
    assert.equal(isAmbulanceCar({ extra:'bus' }), false);
    assert.equal(isAmbulanceCar({}), false);
    assert.equal(isAmbulanceCar(null), false);
  });
});

describe('call points', () => {
  it('patient point is on a road near the ambulance, inside the city', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const p = patientPointNear(0, 0, rng);
      assert.ok(Math.abs(p.x) <= GRID_HALF && Math.abs(p.z) <= GRID_HALF, 'inside the city');
      assert.ok(Math.hypot(p.x, p.z) >= 60, 'a real drive away');
    }
  });
  it('the hospital is the fixed Health Sciences Centre road point', () => {
    assert.ok(Number.isFinite(HOSPITAL_POINT.x) && Number.isFinite(HOSPITAL_POINT.z));
    assert.ok(Math.abs(HOSPITAL_POINT.x) <= GRID_HALF && Math.abs(HOSPITAL_POINT.z) <= GRID_HALF);
  });
  it('condition starts as a real emergency, never trivial or perfect', () => {
    const rng = cyclingRng();
    for(let k = 0; k < 50; k++){
      const c = conditionFor(rng);
      assert.ok(c >= CONDITION_MIN && c <= CONDITION_MAX, `condition ${c} in range`);
    }
  });
});

describe('call lifecycle', () => {
  it('no call comes in when not in the ambulance', () => {
    const job = createAmbulanceJob(cyclingRng());
    const evs = job.update(60, at(0, 0));
    assert.equal(job.state, 'off');
    assert.deepEqual(evs, []);
  });
  it('a full call pays base + speed + care and records the save', () => {
    const job = createAmbulanceJob(cyclingRng());
    const startEvs = startCall(job);
    const evs = [...startEvs, ...driveCall(job)];
    const done = evs.find(e => e.type === 'delivered');
    assert.ok(done, 'call should deliver, got: ' + evs.map(e => e.type).join(','));
    assert.ok(evs.some(e => e.type === 'callStart'), 'callStart fires');
    assert.ok(evs.some(e => e.type === 'loaded'), 'loaded fires');
    assert.equal(done.base, AMB_BASE_PAY);
    assert.ok(done.speedBonus >= 0 && done.speedBonus <= AMB_SPEED_BONUS_MAX);
    assert.ok(done.careBonus > 0, 'a healthy arrival earns a care bonus');
    assert.equal(done.total, Math.round((done.base + done.speedBonus + done.careBonus) * done.surge));
    assert.ok(done.rating >= 1 && done.rating <= 5);
    assert.equal(done.calls, 1);
    assert.equal(done.saved, 1);
    assert.equal(job.calls, 1);
    assert.equal(job.saved, 1);
    assert.equal(job.earned, done.total);
    assert.equal(job.ratingCount, 1);
    assert.equal(job.state, 'cooldown');
    // Career snapshot is what the save file stores.
    assert.deepEqual(job.career, { calls:1, saved:1, earned:done.total, ratingSum:done.rating, ratingCount:1 });
  });
  it('surge locks in at the call and multiplies the whole payout', () => {
    const job = createAmbulanceJob(cyclingRng());
    job.setInAmbulance(true);
    let ticks = 0;
    // Call comes in at surge 1.5, then the sky clears mid-call — the pay stays 1.5x.
    while(job.state !== 'respond' && ticks++ < 200) job.update(0.5, at(0, 0, 0, 100, 1.5));
    assert.equal(job.surge, 1.5);
    const evs = [];
    while(job.state !== 'cooldown' && ticks++ < 8000){
      const tgt = job.target;
      evs.push(...job.update(0.5, tgt ? at(tgt.x, tgt.z, 0, 100, 1) : at(0, 0, 0, 100, 1)));
    }
    const done = evs.find(e => e.type === 'delivered');
    assert.ok(done, 'call should deliver');
    assert.equal(done.surge, 1.5);
    assert.equal(done.total, Math.round(done.subtotal * 1.5));
  });
  it('a slow delivery loses the speed bonus but still pays base + care', () => {
    // Rigged short legs: patient 60 m out, hospital 60 m past them, so
    // par is 34 s total — dawdling 70 s at the scene is way past par
    // while the patient (condition 91 on this rng) survives it.
    const shortLegs = {
      callNear: () => ({ x:60, z:0 }),
      hospitalFor: () => ({ x:120, z:0 }),
    };
    const job = createAmbulanceJob(cyclingRng(), shortLegs);
    job.setInAmbulance(true);
    let ticks = 0;
    while(job.state !== 'respond' && ticks++ < 200) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.state, 'respond');
    // Dawdle at the scene, 60 m from the patient: the clock runs, the
    // patient waits, nobody loads.
    const evs = [];
    for(let k = 0; k < 70; k++) evs.push(...job.update(1, at(0, 0, 0, 100)));
    assert.equal(job.state, 'respond', 'patient must still be alive after the dawdle');
    // Now load and deliver for real.
    evs.push(...job.update(0.5, at(60, 0, 0, 100)));
    assert.equal(job.state, 'transport');
    evs.push(...job.update(0.5, at(120, 0, 0, 100)));
    const done = evs.find(e => e.type === 'delivered');
    assert.ok(done, 'call should still deliver');
    assert.equal(done.speedBonus, 0, 'way past par pays no speed bonus');
    assert.equal(done.onTime, false);
    assert.ok(done.total >= AMB_BASE_PAY, 'base pay survives a slow run');
  });
  it('the patient dies if the ambulance dawdles — no pay, call lost', () => {
    const job = createAmbulanceJob(cyclingRng());
    startCall(job);
    const evs = [];
    let ticks = 0;
    // Never go to the patient: condition bleeds out on the respond clock.
    while(job.state === 'respond' && ticks++ < 2000) evs.push(...job.update(1, at(0, 0, 0, 100)));
    const failed = evs.find(e => e.type === 'callFailed');
    assert.ok(failed, 'call should fail, got: ' + evs.map(e => e.type).join(','));
    assert.equal(failed.reason, 'patientLost');
    assert.equal(failed.patientAboard, false);
    assert.equal(job.calls, 0, 'a lost patient is not a completed call');
    assert.equal(job.earned, 0, 'a lost call never pays');
  });
  it('the patient dies in the back if the transport drags — no pay', () => {
    const job = createAmbulanceJob(cyclingRng());
    startCall(job);
    const evs = [];
    let ticks = 0;
    // Load the patient, then sit far from the hospital until they die.
    while(job.state === 'respond' && ticks++ < 200) evs.push(...job.update(0.5, at(job.target.x, job.target.z, 0, 100)));
    assert.equal(job.state, 'transport', 'patient should be aboard');
    while(job.state === 'transport' && ticks++ < 4000) evs.push(...job.update(1, at(0, 0, 0, 100)));
    const failed = evs.find(e => e.type === 'callFailed');
    assert.ok(failed, 'call should fail in transport');
    assert.equal(failed.reason, 'patientLost');
    assert.equal(failed.patientAboard, true);
    assert.equal(job.earned, 0);
  });
  it('a hard shunt jolts the patient and can kill them', () => {
    const job = createAmbulanceJob(cyclingRng());
    startCall(job);
    const evs = [];
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200) evs.push(...job.update(0.5, at(job.target.x, job.target.z, 0, 100)));
    assert.equal(job.state, 'transport');
    const before = job.condition;
    // One hard shunt: hp 100 -> 80 in a single tick.
    evs.push(...job.update(0.5, at(job.hospital.x, job.hospital.z, 5, 80)));
    const jolt = evs.find(e => e.type === 'jostled');
    assert.ok(jolt, 'a hard shunt should jolt the patient');
    assert.ok(jolt.condition <= before - DAMAGE_JOLT_CONDITION + 1, 'condition drops by the jolt');
    // Small bumps do not jolt: hp 80 -> 78 is a scratch, not a shunt.
    const n = evs.length;
    evs.push(...job.update(0.5, at(job.hospital.x, job.hospital.z, 5, 78)));
    assert.equal(evs.length, n, 'a scratch must not jolt the patient');
  });
  it('wrecking the rig loses the call, patient aboard or not', () => {
    const job = createAmbulanceJob(cyclingRng());
    startCall(job);
    // Wreck on the way to the patient.
    const evs = job.update(0.5, at(0, 0, 0, 0));
    const failed = evs.find(e => e.type === 'callFailed');
    assert.ok(failed);
    assert.equal(failed.reason, 'wrecked');
    assert.equal(failed.patientAboard, false);
    assert.equal(job.earned, 0);
    // Next call: wreck with the patient aboard.
    const job2 = createAmbulanceJob(cyclingRng());
    startCall(job2);
    let ticks = 0;
    while(job2.state === 'respond' && ticks++ < 200) job2.update(0.5, at(job2.target.x, job2.target.z, 0, 100));
    assert.equal(job2.state, 'transport');
    const evs2 = job2.update(0.5, at(0, 0, 0, 0));
    const failed2 = evs2.find(e => e.type === 'callFailed');
    assert.ok(failed2);
    assert.equal(failed2.reason, 'wrecked');
    assert.equal(failed2.patientAboard, true);
  });
  it('critical warning fires once when the patient turns critical', () => {
    const job = createAmbulanceJob(cyclingRng());
    startCall(job);
    const evs = [];
    let ticks = 0;
    // Sit still until condition drops under 30 — slow enough that the
    // warning fires before the patient dies.
    while(job.state === 'respond' && ticks++ < 2000){
      evs.push(...job.update(1, at(0, 0, 0, 100)));
      if(evs.some(e => e.type === 'critical')) break;
    }
    const crits = evs.filter(e => e.type === 'critical');
    assert.equal(crits.length, 1, 'exactly one critical warning per call');
    assert.ok(crits[0].condition <= CONDITION_CRITICAL, 'warning fires at or under 30 (rounded)');
  });
  it('switching cars mid-call abandons it and pays nothing', () => {
    const job = createAmbulanceJob(cyclingRng());
    startCall(job);
    assert.equal(job.setInAmbulance(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.earned, 0);
    assert.equal(job.abandon(), false, 'nothing live left to abandon');
  });
  it('abandon() ends a live call and cools down while still in the ambulance', () => {
    const job = createAmbulanceJob(cyclingRng());
    startCall(job);
    assert.equal(job.abandon(), true);
    assert.equal(job.state, 'cooldown');
    assert.equal(job.active, false);
    assert.equal(job.target, null);
  });
  it('the next call comes after the cooldown', () => {
    const job = createAmbulanceJob(cyclingRng());
    startCall(job);
    driveCall(job);
    assert.equal(job.state, 'cooldown');
    let ticks = 0;
    while(job.state !== 'respond' && ticks++ < 200) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.state, 'respond', 'a second call should come in after cooldown');
    assert.equal(job.calls, 1, 'first call already banked');
  });
  it('siren is on only while a call is live', () => {
    const job = createAmbulanceJob(cyclingRng());
    assert.equal(job.siren, false);
    job.setInAmbulance(true);
    assert.equal(job.siren, false, 'idle in the ambulance, no siren');
    startCall(job);
    assert.equal(job.siren, true);
    driveCall(job);
    assert.equal(job.siren, false, 'cooldown, siren off');
  });
  it('loadCareer seeds totals and ignores junk', () => {
    const job = createAmbulanceJob(cyclingRng());
    job.loadCareer({ calls:3, saved:2, earned:1500, ratingSum:13, ratingCount:3 });
    assert.equal(job.calls, 3);
    assert.equal(job.saved, 2);
    assert.equal(job.earned, 1500);
    assert.ok(Math.abs(job.ratingAvg - 13 / 3) < 1e-9);
    job.loadCareer({ calls:'x', saved:-5, earned:NaN });
    assert.equal(job.calls, 0, 'junk career reads as 0');
    job.loadCareer(null);
    assert.equal(job.calls, 0);
  });
  it('a call only starts when the patient is reachable — no call on a roadless map', () => {
    const empty = { size: 8, tiles: '.'.repeat(64) };
    const pickers = ambulancePickers(empty);
    const job = createAmbulanceJob(cyclingRng(), pickers);
    job.setInAmbulance(true);
    for(let k = 0; k < 100; k++) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.state, 'idle', 'no roads means no calls, and no crash');
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
  it('patient and hospital both land on the custom map roads, a real drive apart', () => {
    const pickers = ambulancePickers(crossMap());
    const rng = cyclingRng();
    const p = pickers.callNear(0, 0, rng);
    assert.ok(p, 'a patient point exists on the cross');
    const h = pickers.hospitalFor(p, rng);
    assert.ok(h, 'a hospital point exists on the cross');
    assert.ok(Math.hypot(h.x - p.x, h.z - p.z) >= 60, 'hospital is a real drive from the patient');
  });
  it('a full call runs on the custom map', () => {
    const pickers = ambulancePickers(crossMap());
    const job = createAmbulanceJob(cyclingRng(), pickers);
    job.setInAmbulance(true);
    let ticks = 0;
    while(job.state !== 'respond' && ticks++ < 200) job.update(0.5, at(0, 0, 0, 100));
    assert.equal(job.state, 'respond');
    const evs = driveCall(job);
    assert.ok(evs.some(e => e.type === 'delivered'), 'custom-map call delivers');
  });
});
