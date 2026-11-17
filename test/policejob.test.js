// Tests for the police patrol job: the pay math must pay what the meter
// says, the suspect must flee along real roads away from the cruiser,
// and the job state machine must take a call, chase the suspect down,
// PIT or tail them to a stop for base + speed + clean pay, and lose the
// call — never paying — when they escape, the cruiser wrecks, or the
// driver switches cars mid-call.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  POLICE_BASE_PAY, POLICE_SPEED_BONUS_MAX, POLICE_CLEAN_BONUS_MAX,
  CLEAN_BONUS_PER_SHUNT,
  PURSUE_RADIUS, STOP_RADIUS, PIT_RADIUS, PIT_SPEED_MIN, PIT_PROGRESS,
  SUSPECT_SPEED, ESCAPE_RADIUS, ESCAPE_TIME, RESPOND_LIMIT,
  SUSPECT_DEFS, SUSPECT_COLORS,
  legParFor, speedBonusFor, cleanBonusFor, ratingFor,
  isPoliceCar, suspectCarFor, suspectPointNear, laneStateFor,
  policePickers, createPoliceJob,
} from '../js/policejob.js';
import { GRID_HALF, LINES } from '../js/world.js';

// Deterministic rng cycling through varied values, so retries in the
// point pickers actually explore instead of repeating one draw.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const at = (x, z, speed = 0, hp = 100, surge = 1) => ({ x, z, speed, hp, maxHp: 100, surge });

// Start a job in a cruiser and wait until dispatch calls.
function startCall(job, maxTicks = 400){
  job.setInPoliceCar(true);
  const events = [];
  let ticks = 0;
  while(job.state !== 'respond' && ticks++ < maxTicks) events.push(...job.update(0.5, at(0, 0, 0, 100)));
  return events;
}

// Chase a whole call to its end: teleport onto the suspect every tick
// (a perfect intercept) and tail them until they give up.
function chaseCall(job, maxTicks = 8000){
  const events = [];
  let ticks = 0;
  while(job.state !== 'cooldown' && job.state !== 'off' && ticks++ < maxTicks){
    const s = job.suspect;
    const ctx = s ? at(s.x, s.z, 0, 100) : at(0, 0, 0, 100);
    events.push(...job.update(0.5, ctx));
    if((job.state === 'respond' || job.state === 'pursue') && !job.suspect) break;
  }
  return events;
}

describe('pay math', () => {
  it('legParFor gives city pace plus grace', () => {
    assert.equal(legParFor(110), 22);   // 110/11 + 12
    assert.equal(legParFor(0), 12);
  });
  it('speedBonusFor is full at par, nothing at twice par', () => {
    assert.equal(speedBonusFor(20, 20), POLICE_SPEED_BONUS_MAX);
    assert.equal(speedBonusFor(40, 20), 0);
    assert.equal(speedBonusFor(30, 20), Math.round(POLICE_SPEED_BONUS_MAX / 2));
    assert.equal(speedBonusFor(10, 0), 0);
  });
  it('cleanBonusFor is full with no shunts, zero at four', () => {
    assert.equal(cleanBonusFor(0), POLICE_CLEAN_BONUS_MAX);
    assert.equal(cleanBonusFor(1), POLICE_CLEAN_BONUS_MAX - CLEAN_BONUS_PER_SHUNT);
    assert.equal(cleanBonusFor(4), 0);
    assert.equal(cleanBonusFor(9), 0);
  });
  it('ratingFor is 5 for a fast clean arrest, drops for late and rough', () => {
    assert.equal(ratingFor(true, 0), 5);
    assert.equal(ratingFor(false, 0), 4);
    assert.equal(ratingFor(true, 2), 4);
    assert.equal(ratingFor(true, 3), 3);
    assert.equal(ratingFor(false, 5), 2);
    assert.equal(ratingFor(false, 99), 2);
  });
});

describe('car + suspect picks', () => {
  it('isPoliceCar matches only the Interceptor', () => {
    assert.equal(isPoliceCar({ extra:'police' }), true);
    assert.equal(isPoliceCar({ extra:'fire' }), false);
    assert.equal(isPoliceCar({}), false);
    assert.equal(isPoliceCar(null), false);
  });
  it('suspectCarFor picks a cheap car in a dark colour', () => {
    for(let k = 0; k < 20; k++){
      const car = suspectCarFor(cyclingRng());
      assert.ok(SUSPECT_DEFS.includes(car.id), 'suspect def ' + car.id);
      assert.ok(SUSPECT_COLORS.includes(car.color), 'suspect colour ' + car.color);
    }
  });
  it('suspectPointNear lands 60-400 m away on a road line', () => {
    for(let k = 0; k < 20; k++){
      const p = suspectPointNear(0, 0, cyclingRng());
      const d = Math.hypot(p.x, p.z);
      assert.ok(d >= 60 && d <= 400, 'dist ' + d);
      const onLine = LINES.some(l => Math.abs(p.x - l) <= 3.6 || Math.abs(p.z - l) <= 3.6);
      assert.ok(onLine, 'point on a road line');
    }
  });
  it('laneStateFor heads away from the cruiser', () => {
    const lane = laneStateFor({ x: LINES[3], z: 0 }, 0, 0);
    assert.ok(LINES.includes(LINES[lane.li]));
    assert.ok(lane.axis === 'x' || lane.axis === 'z');
    assert.ok(lane.dir === 1 || lane.dir === -1);
  });
});

describe('job state machine', () => {
  it('dispatch calls, pursuit starts close in, tailing arrests them', () => {
    const job = createPoliceJob(cyclingRng());
    assert.equal(job.state, 'off');
    const start = startCall(job);
    assert.equal(job.state, 'respond');
    assert.equal(start.filter(e => e.type === 'callStart').length, 1);
    assert.ok(job.suspect, 'a suspect is fleeing');
    assert.ok(job.suspectCar, 'the suspect has a ride');
    assert.ok(job.target, 'the beacon has a target');
    const events = chaseCall(job);
    const arrested = events.find(e => e.type === 'arrested');
    assert.ok(arrested, 'tailing to 100 progress arrests them');
    assert.equal(arrested.base, POLICE_BASE_PAY);
    assert.ok(arrested.speedBonus >= 0 && arrested.speedBonus <= POLICE_SPEED_BONUS_MAX);
    assert.equal(arrested.cleanBonus, POLICE_CLEAN_BONUS_MAX, 'no shunts, full clean bonus');
    assert.equal(arrested.total, arrested.base + arrested.speedBonus + arrested.cleanBonus);
    assert.equal(arrested.rating, 5, 'fast clean arrest is 5 stars');
    assert.equal(job.calls, 1);
    assert.equal(job.arrests, 1);
    assert.equal(job.earned, arrested.total);
    assert.equal(job.state, 'cooldown');
  });
  it('inPursuit fires once when the cruiser closes in', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    const events = [];
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200){
      const s = job.suspect;
      events.push(...job.update(0.5, at(s.x, s.z, 0, 100)));
    }
    assert.equal(job.state, 'pursue');
    assert.equal(events.filter(e => e.type === 'inPursuit').length, 1);
  });
  it('a PIT adds stop progress and costs a shunt', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    // Close in first.
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200){
      const s = job.suspect;
      job.update(0.5, at(s.x, s.z, 0, 100));
    }
    assert.equal(job.state, 'pursue');
    const before = job.progress;
    // Ram them at speed, right on their bumper.
    const s = job.suspect;
    const events = job.update(0.5, at(s.x, s.z, PIT_SPEED_MIN + 5, 100));
    const pit = events.find(e => e.type === 'pit');
    assert.ok(pit, 'a fast close ram is a PIT');
    assert.equal(pit.progress, Math.round(before + PIT_PROGRESS), 'one PIT adds its progress');
    assert.ok(job.progress > before, 'PIT builds stop progress');
    assert.equal(job.shunts, 1, 'a PIT is a shunt');
  });
  it('a slow bump is not a PIT', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200){
      const s = job.suspect;
      job.update(0.5, at(s.x, s.z, 0, 100));
    }
    const s = job.suspect;
    const events = job.update(0.5, at(s.x, s.z, 2, 100));
    assert.equal(events.filter(e => e.type === 'pit').length, 0, 'too slow to PIT');
    assert.equal(job.shunts, 0);
  });
  it('a hard shunt from an hp drop costs clean bonus', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200){
      const s = job.suspect;
      job.update(0.5, at(s.x, s.z, 0, 100));
    }
    // Wallop a wall: hp drops 20 in one frame.
    const s = job.suspect;
    const events = job.update(0.5, at(s.x, s.z, 0, 80));
    assert.equal(events.filter(e => e.type === 'shunt').length, 1);
    assert.equal(job.shunts, 1);
    // The same hp level again is not another shunt.
    const again = job.update(0.5, at(job.suspect.x, job.suspect.z, 0, 80));
    assert.equal(again.filter(e => e.type === 'shunt').length, 0);
  });
  it('losing them for too long lets them escape, unpaid', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    // Get into pursuit, then sit still while they run.
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200){
      const s = job.suspect;
      job.update(0.5, at(s.x, s.z, 0, 100));
    }
    assert.equal(job.state, 'pursue');
    const events = [];
    ticks = 0;
    while(job.state === 'pursue' && ticks++ < 800) events.push(...job.update(0.5, at(0, 0, 0, 100)));
    const failed = events.find(e => e.type === 'callFailed');
    assert.ok(failed, 'they escape when lost');
    assert.equal(failed.reason, 'escaped');
    assert.equal(job.earned, 0, 'an escape pays nothing');
    assert.equal(job.calls, 0);
  });
  it('never reaching them cancels the call at the respond limit', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    const events = [];
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < (RESPOND_LIMIT / 0.5 + 10)) events.push(...job.update(0.5, at(0, 0, 0, 100)));
    const failed = events.find(e => e.type === 'callFailed');
    assert.ok(failed, 'dispatch cancels a call nobody reaches');
    assert.equal(failed.reason, 'escaped');
    assert.equal(job.earned, 0);
  });
  it('wrecking the cruiser loses the call, unpaid', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200){
      const s = job.suspect;
      job.update(0.5, at(s.x, s.z, 0, 100));
    }
    const s = job.suspect;
    const events = job.update(0.5, at(s.x, s.z, 0, 0));
    const failed = events.find(e => e.type === 'callFailed');
    assert.ok(failed);
    assert.equal(failed.reason, 'wrecked');
    assert.equal(job.earned, 0);
  });
  it('switching cars mid-call abandons it, unpaid', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    assert.equal(job.setInPoliceCar(false), 'abandoned');
    assert.equal(job.state, 'off');
    assert.equal(job.suspect, null);
    assert.equal(job.earned, 0);
  });
  it('abandon ends a live call quietly', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    assert.equal(job.abandon(), true);
    assert.equal(job.state, 'cooldown');
    assert.equal(job.abandon(), false, 'nothing live to abandon');
  });
  it('surge locks in at the call and pays on the arrest', () => {
    const job = createPoliceJob(cyclingRng());
    job.setInPoliceCar(true);
    const events = [];
    let ticks = 0;
    while(job.state !== 'respond' && ticks++ < 400) events.push(...job.update(0.5, at(0, 0, 0, 100, 1.5)));
    assert.equal(events.find(e => e.type === 'callStart').surge, 1.5);
    // The sky clears mid-chase; the pay stays at the locked rate.
    let ticks2 = 0;
    while(job.state !== 'cooldown' && job.state !== 'off' && ticks2++ < 8000){
      const s = job.suspect;
      const ctx = s ? at(s.x, s.z, 0, 100, 1) : at(0, 0, 0, 100, 1);
      events.push(...job.update(0.5, ctx));
    }
    const arrested = events.find(e => e.type === 'arrested');
    assert.ok(arrested);
    assert.equal(arrested.surge, 1.5);
    assert.equal(arrested.total, Math.round(arrested.subtotal * 1.5));
  });
  it('career totals persist through loadCareer', () => {
    const job = createPoliceJob(cyclingRng());
    job.loadCareer({ calls: 7, arrests: 5, earned: 1234, ratingSum: 22, ratingCount: 5 });
    assert.equal(job.calls, 7);
    assert.equal(job.arrests, 5);
    assert.equal(job.earned, 1234);
    assert.equal(job.ratingAvg, 22 / 5);
    job.loadCareer(null);
    assert.equal(job.calls, 7, 'a bad save does not wipe the career');
    job.loadCareer({ calls: 'x', arrests: -3, earned: NaN });
    assert.equal(job.calls, 0, 'corrupt fields read as 0');
  });
});

describe('suspect flee AI', () => {
  it('the suspect keeps moving away on real roads', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    const s0 = job.suspect;
    assert.ok(s0);
    const d0 = Math.hypot(s0.x, s0.z);
    // Let them run untouched for 10 s.
    for(let k = 0; k < 20; k++) job.update(0.5, at(0, 0, 0, 100));
    const s1 = job.suspect;
    assert.ok(s1, 'still fleeing');
    // They moved, stayed on the grid, and are still on a road line.
    const moved = Math.hypot(s1.x - s0.x, s1.z - s0.z);
    assert.ok(moved > 50, 'moved ' + moved + ' m in 10 s');
    assert.ok(Math.abs(s1.x) <= GRID_HALF && Math.abs(s1.z) <= GRID_HALF, 'stayed on the grid');
    const onLine = LINES.some(l => Math.abs(s1.x - l) <= 3.6 || Math.abs(s1.z - l) <= 3.6);
    assert.ok(onLine, 'still on a road line');
    assert.ok(Math.hypot(s1.x, s1.z) > d0, 'farther from the cruiser than at the call');
  });
  it('the suspect slows to a crawl after a PIT', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200){
      const s = job.suspect;
      job.update(0.5, at(s.x, s.z, 0, 100));
    }
    const s = job.suspect;
    job.update(0.5, at(s.x, s.z, PIT_SPEED_MIN + 5, 100));
    // Park on them and watch: they barely move while spun out.
    const p0 = job.suspect;
    for(let k = 0; k < 4; k++) job.update(0.5, at(job.suspect.x, job.suspect.z, 0, 100));
    const p1 = job.suspect;
    const moved = Math.hypot(p1.x - p0.x, p1.z - p0.z);
    assert.ok(moved < SUSPECT_SPEED * 2, 'spun out, moved only ' + moved + ' m in 2 s');
  });
  it('pressure builds only while tailing close', () => {
    const job = createPoliceJob(cyclingRng());
    startCall(job);
    let ticks = 0;
    while(job.state === 'respond' && ticks++ < 200){
      const s = job.suspect;
      job.update(0.5, at(s.x, s.z, 0, 100));
    }
    const p0 = job.progress;
    // Sit 100 m away: no pressure.
    const far = job.suspect;
    job.update(1, at(far.x + 100, far.z, 0, 100));
    assert.equal(job.progress, p0, 'no progress from far away');
    // Tail them for a second: pressure builds.
    job.update(1, at(job.suspect.x, job.suspect.z, 0, 100));
    assert.ok(job.progress > p0, 'tailing builds stop progress');
  });
});

describe('custom maps', () => {
  it('policePickers finds a road tile on a custom map, null without roads', () => {
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
    const pickers = policePickers(crossMap(), { x: 100, z: 200 });
    const p = pickers.suspectNear(100, 200, cyclingRng());
    assert.ok(p, 'a suspect point exists on the cross');
    assert.ok(Number.isFinite(p.x) && Number.isFinite(p.z));
    assert.ok(pickers.bounds, 'road bounds exist for the flee');
    const empty = { size: 4, tiles: '.'.repeat(16) };
    assert.equal(policePickers(empty).suspectNear(0, 0, cyclingRng()), null);
  });
  it('a call on a custom map flees in a straight line and bounces', () => {
    function crossMap(){
      const size = 40, rows = [];
      for(let j = 0; j < size; j++){
        let row = '';
        for(let i = 0; i < size; i++) row += (j === 20 || i === 20) ? '#' : '.';
        rows.push(row);
      }
      return { size, tiles: rows.join('') };
    }
    const job = createPoliceJob(cyclingRng(), policePickers(crossMap(), { x: 0, z: 0 }));
    job.setInPoliceCar(true);
    const events = [];
    let ticks = 0;
    while(job.state !== 'respond' && ticks++ < 400) events.push(...job.update(0.5, at(0, 0, 0, 100)));
    assert.equal(job.state, 'respond', 'dispatch calls on a custom map too');
    const s0 = job.suspect;
    // Total path run, not displacement: the suspect bounces off the road
    // bounds, so a straight out-and-back still counts as fleeing.
    let path = 0, prev = s0;
    for(let k = 0; k < 20; k++){
      job.update(0.5, at(0, 0, 0, 100));
      const s = job.suspect;
      path += Math.hypot(s.x - prev.x, s.z - prev.z);
      prev = s;
    }
    const s1 = job.suspect;
    assert.ok(s1, 'still fleeing');
    assert.ok(path > 100, 'fled ' + Math.round(path) + ' m in 10 s');
    const b = policePickers(crossMap(), { x: 0, z: 0 }).bounds;
    assert.ok(s1.x >= b.minX - 1 && s1.x <= b.maxX + 1, 'stayed inside the road bounds');
    assert.ok(s1.z >= b.minZ - 1 && s1.z <= b.maxZ + 1, 'stayed inside the road bounds');
  });
});
