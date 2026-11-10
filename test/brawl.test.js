// Tests for the Paint the Town Red bar-brawl mode (js/brawl/*): weapon table,
// scenario layouts and hit-location maths.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { WEAPONS, WEAPON_IDS, wdef, resolveHit, wear, throwDmg } from '../js/brawl/weapons.js';
import { SCENARIOS, getScenario, spawnPoints, blocked, groundAt, outfitFor, pickWeighted } from '../js/brawl/maps.js';
import { partFromHit } from '../js/brawl/sim.js';

let seed = 7; const rng = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

describe('brawl weapons', () => {
  it('has a big arsenal', () => assert.ok(WEAPON_IDS.length >= 35, 'only ' + WEAPON_IDS.length));
  it('every weapon is well formed', () => {
    for(const [id, w] of Object.entries(WEAPONS)){
      assert.ok(['melee', 'gun', 'throw'].includes(w.kind), id);
      assert.ok(w.name, id);
      if(w.kind === 'melee'){ assert.ok(w.dmg > 0 && w.reach > 1 && w.rate > 0, id); assert.ok(w.sever >= 0 && w.sever <= 1, id); }
      if(w.kind === 'gun') assert.ok(w.ammo > 0 && w.pellets >= 1 && w.range > 0, id);
      if(w.kind === 'throw') assert.ok(w.tdmg > 0 && w.count >= 1, id);
      if(w.breaksInto) assert.ok(WEAPONS[w.breaksInto], id + ' breaks into unknown ' + w.breaksInto);
      if(id !== 'fists') assert.ok(w.model && w.model.head.length === 3, id + ' model');
    }
  });
  it('unknown ids fall back to fists', () => assert.equal(wdef('nope'), WEAPONS.fists));
  it('blades sever, fists never do', () => {
    let sev = 0; for(let i = 0; i < 200; i++) if(resolveHit(WEAPONS.katana, 999, rng).sever) sev++;
    assert.ok(sev > 120);
    for(let i = 0; i < 50; i++) assert.equal(resolveHit(WEAPONS.fists, 999, rng).sever, false);
  });
  it('a killing blow takes the limb; sledges pulp it', () => {
    const r = resolveHit(WEAPONS.sledge, 10, () => 0.99);
    assert.ok(r.sever && r.crush && r.gibs > 30);
  });
  it('bottles break into broken bottles, broken things run out', () => {
    const st = {};
    assert.equal(wear('bottle', st), 'brokenbottle');
    const s2 = {}; let id = 'brokencue';
    for(let i = 0; i < 9; i++) assert.equal(wear(id, s2), 'brokencue');
    assert.equal(wear(id, s2), null);
    assert.equal(wear('katana', {}), 'katana');
  });
  it('thrown heavy things hit harder than thrown light things', () => {
    assert.ok(throwDmg(WEAPONS.stool) > throwDmg(WEAPONS.knife) * 0.9);
    assert.equal(throwDmg(WEAPONS.dynamite), WEAPONS.dynamite.tdmg);
  });
});

describe('brawl scenarios', () => {
  const all = SCENARIOS.map(f => f());
  it('has the classic scenarios + arena', () => {
    assert.deepEqual(all.map(L => L.id), ['biker', 'disco', 'prison', 'saloon', 'pirate', 'arena']);
    assert.equal(getScenario('pirate').name, 'Pirate Cove');
    assert.equal(getScenario('zzz').id, 'biker');
  });
  for(const L of all){
    it(L.id + ': player, pickups and spawns are in the room and clear of furniture', () => {
      assert.ok(!blocked(L, L.player[0], L.player[1], 0.34), 'player spawn blocked');
      for(const p of L.pickups){
        assert.ok(WEAPONS[p.w], 'unknown pickup ' + p.w);
        assert.ok(Math.abs(p.x) < L.w / 2 && Math.abs(p.z) < L.d / 2, p.w + ' outside room');
        // either on the floor clear of solids, or resting on top of one
        const top = groundAt(L, p.x, p.z, (p.y || 0) + 0.1);
        assert.ok(Math.abs(top - (p.y || 0)) < 0.12, `${L.id} ${p.w} at ${p.x},${p.z} y=${p.y} floats/sinks (top ${top})`);
      }
      const sp = spawnPoints(L, 16);
      assert.ok(sp.length >= 8, 'only ' + sp.length + ' spawn points');
      for(const [x, z] of sp) assert.ok(!blocked(L, x, z, 0.5));
      for(const id in L.enemies.weapons) assert.ok(WEAPONS[id], 'enemy weapon ' + id);
      assert.ok(WEAPONS[L.boss.weapon]);
    });
  }
  it('every outfit kind dresses a full person', () => {
    for(const k of ['biker', 'bikerBoss', 'disco', 'discoBoss', 'prison', 'warden', 'cowboy', 'sheriff', 'pirate', 'captain', 'champion', 'mixed']){
      for(let i = 0; i < 10; i++){ const o = outfitFor(k, rng); for(const f of ['skin', 'pants', 'shoe']) assert.equal(typeof o[f], 'number', k + '.' + f); }
    }
  });
  it('weighted pick respects weights', () => {
    let a = 0; for(let i = 0; i < 1000; i++) if(pickWeighted({ a:9, b:1 }, rng) === 'a') a++;
    assert.ok(a > 820 && a < 970, String(a));
  });
});

describe('brawl hit location', () => {
  it('maps height and side to body parts', () => {
    assert.equal(partFromHit(1.7, 0), 'head');
    assert.equal(partFromHit(1.1, 0), 'torso');
    assert.equal(partFromHit(1.1, -0.4), 'armL');
    assert.equal(partFromHit(1.1, 0.4), 'armR');
    assert.equal(partFromHit(0.4, -0.1), 'legL');
    assert.equal(partFromHit(0.4, 0.1), 'legR');
  });
  it('scales with big bosses', () => assert.equal(partFromHit(1.7, 0, 1.35), 'torso'));
  it('a missing part redirects to the torso', () => assert.equal(partFromHit(1.7, 0, 1, { head:true }), 'torso'));
});
