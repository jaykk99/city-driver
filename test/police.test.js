// Tests for js/police.js — wanted heat model, pursuit steering, busted meter.
// Pure logic only (no WebGL); the three.js manager is wired in main.js.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  MAX_STARS, HEAT_MAX, CRIME_HEAT,
  HEAT_DECAY_UNSEEN, HEAT_DECAY_SEEN, BUST_TIME, COP_SIGHT,
  SPAWN_RING_MIN, SPAWN_RING_MAX,
  starsFor, WantedHeat, interceptPoint, pursuitSteer, pickSpawnRing, stepKin,
  BustMeter, POLICE_STATION,
  FOOT_COP_SPEED, FOOT_GRAB_DIST, FOOT_GRAB_TIME, footCopSteer,
  chaseLaneOffset, FOOT_COP_HP, COP_CAR_HP, COP_DISABLED_SMOKE,
  createPolice,
} from '../js/police.js';

const DT = 1 / 60;

describe('starsFor', () => {
  it('maps heat to 0..6 stars', () => {
    assert.equal(starsFor(0), 0);
    assert.equal(starsFor(0.01), 0);
    assert.equal(starsFor(0.5), 1);
    assert.equal(starsFor(1.0), 1);
    assert.equal(starsFor(1.01), 2);
    assert.equal(starsFor(5.9), 6);
    assert.equal(starsFor(HEAT_MAX), MAX_STARS);
    assert.equal(starsFor(99), MAX_STARS);
  });
});

describe('WantedHeat', () => {
  it('starts clean', () => {
    const w = new WantedHeat();
    assert.equal(w.heat, 0);
    assert.equal(w.stars, 0);
  });
  it('adds heat per crime kind', () => {
    const w = new WantedHeat();
    w.crime('gunshot', true, 0);
    assert.ok(Math.abs(w.heat - CRIME_HEAT.gunshot) < 1e-9, `heat=${w.heat}`);
    assert.equal(w.stars, 1);
  });
  it('rejects unknown crime kinds', () => {
    const w = new WantedHeat();
    assert.equal(w.crime('jaywalking', true, 0), 0);
    assert.equal(w.heat, 0);
  });
  it('cools down repeat crimes of the same kind', () => {
    const w = new WantedHeat();
    w.crime('gunshot', true, 0);
    const h1 = w.heat;
    w.crime('gunshot', true, 0.5);   // inside cooldown: no gain
    assert.equal(w.heat, h1);
    w.crime('gunshot', true, 5);     // outside cooldown: gains again
    assert.ok(w.heat > h1);
  });
  it('scales down unwitnessed crimes but still adds heat', () => {
    const a = new WantedHeat(), b = new WantedHeat();
    a.crime('pedKill', true, 0);
    b.crime('pedKill', false, 0);
    assert.ok(b.heat > 0 && b.heat < a.heat, `seen=${a.heat} unseen=${b.heat}`);
  });
  it('climbs to 6 stars on a rampage and caps at HEAT_MAX', () => {
    const w = new WantedHeat();
    let t = 0;
    for(const k of ['pedKill', 'copKill', 'gunshot', 'pedHit', 'ramTraffic', 'stolenCar']){
      t += 2; w.crime(k, true, t);
    }
    assert.equal(w.stars, MAX_STARS);
    assert.ok(w.heat <= HEAT_MAX + 1e-9);
  });
  it('decays fast when unseen, barely while seen', () => {
    const a = new WantedHeat(), b = new WantedHeat();
    a.crime('pedKill', true, 0); b.crime('pedKill', true, 0);
    for(let i = 0; i < 600; i++){ a.update(DT, false); b.update(DT, true); }
    assert.ok(a.heat < b.heat, `unseen=${a.heat} seen=${b.heat}`);
    assert.ok(a.heat < 0.6, `unseen should mostly clear in 10s, got ${a.heat}`);
    assert.ok(b.heat > 1.0, `seen should barely decay, got ${b.heat}`);
  });
  it('heat reaching zero clears the stars', () => {
    const w = new WantedHeat();
    w.crime('gunshot', true, 0);
    for(let i = 0; i < 3600 && w.heat > 0; i++) w.update(DT, false);
    assert.equal(w.heat, 0);
    assert.equal(w.stars, 0);
  });
  it('clear() wipes heat immediately (busted)', () => {
    const w = new WantedHeat();
    w.crime('copKill', true, 0);
    w.clear();
    assert.equal(w.heat, 0);
    assert.equal(w.stars, 0);
  });
});

describe('interceptPoint', () => {
  it('returns the player position when the cop is on top of them', () => {
    const p = interceptPoint(10, 20, 5, 0, 10.5, 20, 26);
    assert.ok(Math.abs(p.x - 10) < 3 && Math.abs(p.z - 20) < 3);
  });
  it('leads a moving player', () => {
    // player running +x at 10 m/s, cop 60m behind at -x
    const p = interceptPoint(0, 0, 10, 0, -60, 0, 26);
    assert.ok(p.x > 0, `should aim ahead of the player, got x=${p.x}`);
    assert.ok(p.t > 0);
  });
  it('handles a stationary cop gracefully', () => {
    const p = interceptPoint(30, 40, 0, 0, 0, 0, 0);
    assert.equal(p.x, 30); assert.equal(p.z, 40);
  });
});

describe('pursuitSteer', () => {
  const cop = (o = {}) => ({ x:0, z:0, heading:0, speed:10, ...o });
  it('steers toward a target on its left', () => {
    // heading 0 = facing -Z; target at -x is to the... compute: wantH for (-30, -40)
    const s = pursuitSteer(cop(), -30, -40, DT);
    assert.ok(Math.abs(s.steer) <= 1);
    // target bearing: atan2(30, 40) ≈ 0.64 rad left of forward → steer negative (heading -= steer*rate)
    assert.ok(s.steer < 0, `expected left steer, got ${s.steer}`);
    assert.ok(s.throttle > 0, 'should accelerate toward target');
  });
  it('steers toward a target on its right', () => {
    const s = pursuitSteer(cop(), 30, -40, DT);
    assert.ok(s.steer > 0, `expected right steer, got ${s.steer}`);
  });
  it('backs up when the target is right behind the bumper', () => {
    const s = pursuitSteer(cop({ speed:0.5 }), 0, 6, DT); // behind: +z while facing -z
    assert.ok(s.throttle < 0, `expected reverse, got throttle=${s.throttle}`);
  });
  it('eases off when sitting on the target', () => {
    const s = pursuitSteer(cop({ speed:12 }), 0, -3, DT);
    assert.ok(s.throttle <= 0.05, `should not floor it at point blank, got ${s.throttle}`);
  });
  it('never exceeds steer/throttle bounds', () => {
    for(let i = 0; i < 50; i++){
      const s = pursuitSteer(cop({ speed:Math.random() * 30 - 5 }), (Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200, DT);
      assert.ok(s.steer >= -1 && s.steer <= 1);
      assert.ok(s.throttle >= -1 && s.throttle <= 1);
      assert.ok(Number.isFinite(s.dist) && Number.isFinite(s.diff));
    }
  });
  it('drives a simulated cop to a stationary target', () => {
    const c = cop({ speed:0 });
    const tx = 80, tz = -60;
    for(let i = 0; i < 1800; i++){
      const s = pursuitSteer(c, tx, tz, DT, { topSpeed:26 });
      stepKin(c, s.steer, s.throttle, DT, null);
    }
    const d = Math.hypot(c.x - tx, c.z - tz);
    assert.ok(d < 8, `cop should reach the target, ${d}m away`);
  });
  it('a cop chases down a fleeing player', () => {
    const c = cop({ speed:0 });
    const p = { x:60, z:0, vx:14, vz:0 };   // player fleeing +x at 14 m/s
    for(let i = 0; i < 2400; i++){
      p.x += p.vx * DT; p.z += p.vz * DT;
      const ip = interceptPoint(p.x, p.z, p.vx, p.vz, c.x, c.z, 27);
      const s = pursuitSteer(c, ip.x, ip.z, DT, { topSpeed:27 });
      stepKin(c, s.steer, s.throttle, DT, null);
    }
    const d = Math.hypot(c.x - p.x, c.z - p.z);
    assert.ok(d < 15, `cop should run down the player, ${d}m away`);
  });
});

describe('pickSpawnRing', () => {
  it('returns the requested count inside the ring band', () => {
    const spots = pickSpawnRing(0, 0, 4, (() => { let s = 0.3; return () => (s = (s * 16807) % 2147483647 / 2147483647); })());
    assert.equal(spots.length, 4);
    for(const sp of spots){
      const r = Math.hypot(sp.x, sp.z);
      assert.ok(r >= SPAWN_RING_MIN - 1 && r <= SPAWN_RING_MAX + 1, `radius ${r} outside band`);
      assert.ok(Number.isFinite(sp.heading));
    }
  });
  it('surrounds the player, not stacked on one side', () => {
    let s = 12345;
    const rng = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const spots = pickSpawnRing(100, -50, 12, rng);
    const cx = spots.reduce((a, sp) => a + sp.x, 0) / spots.length;
    const cz = spots.reduce((a, sp) => a + sp.z, 0) / spots.length;
    assert.ok(Math.hypot(cx - 100, cz + 50) < 40, 'spawn centroid should stay near the player');
  });
});

describe('BustMeter', () => {
  it('fills while pinned by a close cop and reports busted', () => {
    const b = new BustMeter();
    let res = null;
    for(let i = 0; i < 600 && !res; i++) res = b.update(DT, 4, true);
    assert.equal(res, 'busted');
  });
  it('fills faster when the cop is right on the bumper', () => {
    const near = new BustMeter(), far = new BustMeter();
    let rn = null, rf = null, i = 0;
    for(i = 0; i < 600 && (!rn || !rf); i++){
      if(!rn) rn = near.update(DT, 2, true);
      if(!rf) rf = far.update(DT, 6.5, true);
    }
    assert.equal(rn, 'busted');
    // far meter needs strictly more frames (same loop count => check frac instead)
    void rf; void i;
    const b2 = new BustMeter();
    for(let k = 0; k < 60; k++) b2.update(DT, 2, true);
    const fNear = b2.frac;
    const b3 = new BustMeter();
    for(let k = 0; k < 60; k++) b3.update(DT, 6.5, true);
    assert.ok(fNear > b3.frac, `close cop should fill faster: ${fNear} vs ${b3.frac}`);
  });
  it('does not fill when the player is speeding away', () => {
    const b = new BustMeter();
    for(let i = 0; i < 600; i++) assert.equal(b.update(DT, 4, false), null);
    assert.equal(b.frac, 0);
  });
  it('does not fill with no cops around', () => {
    const b = new BustMeter();
    for(let i = 0; i < 600; i++) assert.equal(b.update(DT, Infinity, true), null);
  });
  it('drains when the pressure lets up', () => {
    const b = new BustMeter();
    for(let i = 0; i < 60; i++) b.update(DT, 4, true);
    const mid = b.frac;
    assert.ok(mid > 0);
    for(let i = 0; i < 300; i++) b.update(DT, 50, true);
    assert.ok(b.frac < mid, `meter should drain, ${mid} -> ${b.frac}`);
  });
  it('takes about BUST_TIME seconds of pinning', () => {
    const b = new BustMeter();
    let frames = 0, res = null;
    while(!res && frames < 3600){ res = b.update(DT, 5, true); frames++; }
    const secs = frames * DT;
    assert.ok(Math.abs(secs - BUST_TIME) < 0.6, `busted after ${secs}s, expected ~${BUST_TIME}s`);
  });
});

describe('POLICE_STATION', () => {
  it('is a sane curbside point', () => {
    assert.ok(Number.isFinite(POLICE_STATION.x) && Number.isFinite(POLICE_STATION.z));
    assert.ok(Number.isFinite(POLICE_STATION.heading));
    assert.ok(Math.abs(POLICE_STATION.x) < 2000 && Math.abs(POLICE_STATION.z) < 2000);
  });
});

describe('chaseLaneOffset', () => {
  it('fans followers out to alternating flanks', () => {
    assert.deepEqual([0, 1, 2, 3, 4, 5].map(chaseLaneOffset), [0, 7, -7, 14, -14, 21]);
  });
  it('never assigns two followers the same lane', () => {
    const lanes = [];
    for(let i = 1; i < 6; i++) lanes.push(chaseLaneOffset(i));
    assert.equal(new Set(lanes).size, lanes.length);
  });
});

describe('footCopSteer', () => {
  const mk = (o = {}) => ({ x:0, z:0, heading:0, speed:0, phase:0, ...o });
  it('turns toward the target and runs', () => {
    const f = mk();
    const d0 = footCopSteer(f, 20, -20, DT);
    assert.ok(d0 > 0);
    assert.ok(f.speed > 0, 'should start running');
    assert.ok(f.phase > 0, 'walk phase should advance');
  });
  it('runs a foot cop down to a standing player', () => {
    const f = mk({ x:-30, z:25 });
    for(let i = 0; i < 1200; i++) footCopSteer(f, 0, 0, DT);
    const d = Math.hypot(f.x, f.z);
    assert.ok(d < FOOT_GRAB_DIST + 0.5, `cop should reach the player, ${d}m away`);
  });
  it('never exceeds foot speed', () => {
    const f = mk();
    for(let i = 0; i < 600; i++) footCopSteer(f, 500, -500, DT);
    assert.ok(f.speed <= FOOT_COP_SPEED + 1e-9, `speed ${f.speed} exceeds max`);
  });
  it('stops when on top of the player', () => {
    const f = mk({ x:0.5, z:0.5, speed:FOOT_COP_SPEED });
    for(let i = 0; i < 300; i++) footCopSteer(f, 0, 0, DT);
    assert.ok(f.speed < 0.5, `should stop on the player, speed=${f.speed}`);
  });
  it('grab constants are sane', () => {
    assert.ok(FOOT_GRAB_DIST > 1 && FOOT_GRAB_DIST < 3);
    assert.ok(FOOT_GRAB_TIME >= 0.8 && FOOT_GRAB_TIME <= 2);
    assert.ok(FOOT_COP_SPEED > 4 && FOOT_COP_SPEED < 8);
  });
});

describe('cop combat (createPolice, mocked three.js deps)', () => {
  function makePolice(){
    const player = { x:0, z:0, heading:0, speed:0, vx:0, vz:0, onFoot:true, alive:true };
    const scene = { add(){}, remove(){} };
    const mkGroup = () => ({ position:{ set(){} }, rotation:{ y:0 }, userData:{}, traverse(){}, add(){} });
    const police = createPolice({
      scene,
      buildCar: () => mkGroup(),
      buildCharacter: () => ({ position:{ set(){}, x:0, y:0, z:0 }, rotation:{ y:0, x:0 } }),
      getPlayer: () => player,
      setStars(){}, toast(){}, spark(){}, blood(){},
      audio: {},
      highQuality: () => false,
    });
    return { police, player };
  }
  // heat up and tick long enough to spawn the roster
  function hot(police, stars = 1){
    police.debugWanted(stars);
    for(let t = 0; t <= 8; t++) police.update(DT, t);
  }
  function blockerOf(police, kind){
    return police.copHitList().find(t => t.ref.kind === kind);
  }

  it('foot cops and cop cars are bullet blockers once spawned', () => {
    const { police } = makePolice();
    hot(police);
    assert.ok(blockerOf(police, 'footcop'), 'expected a foot cop blocker');
    assert.ok(blockerOf(police, 'copcar'), 'expected a cop car blocker');
  });

  it('shooting a foot cop adds copShot heat; killing adds copKill and removes it from blockers', () => {
    const { police } = makePolice();
    hot(police);
    const f = blockerOf(police, 'footcop').ref.cop;
    const heat0 = police.heat;
    assert.equal(police.damageFootCop(f, 1), 'hit');
    assert.ok(Math.abs(police.heat - (heat0 + CRIME_HEAT.copShot)) < 1e-9,
      `heat ${police.heat} should be heat0 + copShot`);
    police.update(DT, 10);   // advance past the per-kind cooldown
    const heat1 = police.heat;
    assert.equal(police.damageFootCop(f, FOOT_COP_HP), 'killed');
    assert.ok(f.dead, 'foot cop should be dead');
    assert.ok(police.heat >= heat1 + CRIME_HEAT.copKill - 0.02,
      `heat ${police.heat} should include copKill on top of ${heat1}`);
    assert.equal(police.damageFootCop(f, 1), null, 'dead cops take no more damage');
    assert.ok(!police.copHitList().some(t => t.ref.kind === 'footcop' && t.ref.cop === f),
      'dead cop must leave the blocker list');
  });

  it('shooting a foot cop interrupts an active grab', () => {
    const { police } = makePolice();
    hot(police);
    const f = blockerOf(police, 'footcop').ref.cop;
    f.grabT = 0.9;
    police.damageFootCop(f, 1);
    assert.equal(f.grabT, 0, 'grab progress should reset when the cop is shot');
  });

  it('shooting a cop car to zero disables it: it smokes, then despawns', () => {
    const { police, player } = makePolice();
    hot(police);
    const c = blockerOf(police, 'copcar').ref.cop;
    assert.equal(c.hp, COP_CAR_HP);
    assert.equal(police.damageCopCar(c, COP_CAR_HP - 1), 'hit');
    assert.ok(!c.disabled, 'one hit left: still rolling');
    police.update(DT, 10);
    const heat1 = police.heat;
    assert.equal(police.damageCopCar(c, 1), 'disabled');
    assert.ok(c.disabled);
    assert.ok(police.heat >= heat1 + CRIME_HEAT.copKill - 0.02,
      `heat ${police.heat} should include copKill on top of ${heat1}`);
    assert.equal(police.damageCopCar(c, 1), null, 'disabled cars take no more damage');
    assert.ok(!police.copHitList().some(t => t.ref.kind === 'copcar' && t.ref.cop === c),
      'disabled car must leave the blocker list');
    // a disabled unit does not chase anymore
    const x0 = c.x, z0 = c.z;
    police.update(DT, 11);
    assert.equal(c.x, x0); assert.equal(c.z, z0);
    // after the smoke-out it is gone from the roster (player "dead" so no
    // foot cop grabs and busts the player out from under the test)
    player.alive = false;
    for(let i = 0; i < COP_DISABLED_SMOKE * 60 + 60; i++) police.update(DT, 12 + i * DT);
    assert.ok(!police.units.includes(c), 'burned-out cop car should despawn');
  });
});
