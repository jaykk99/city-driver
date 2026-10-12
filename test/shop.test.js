// Tests for js/shop.js (gun store / clothing) and js/onfoot.js (walking + rays).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { WEAPONS, SHIRTS, SHIRT_COST, ensureArsenal, buyWeapon, buyAmmo, equipWeapon,
  cycleWeapon, useAmmo, buyShirt, buyHat } from '../js/shop.js';
import { FootPhysics, WALK_SPEED, RUN_SPEED, exitSpot, rayAABB, rayCircle } from '../js/onfoot.js';

const fresh = (cash = 20000) => ensureArsenal({ cash });

describe('ensureArsenal', () => {
  it('adds empty arsenal + default outfit to an old save', () => {
    const s = fresh();
    assert.deepEqual(s.weapons, []);
    assert.equal(s.equipped, null);
    assert.equal(s.outfit.shirt, SHIRTS[0]);
    assert.equal(s.outfit.hat, 'none');
    assert.deepEqual(s.hats, ['none']);
  });
  it('drops unknown weapons and repairs a bad equipped id', () => {
    const s = ensureArsenal({ cash: 0, weapons: ['pistol', 'laser', 'pistol'], ammo: { pistol: -4, laser: 9 }, equipped: 'laser' });
    assert.deepEqual(s.weapons, ['pistol']);
    assert.equal(s.ammo.pistol, 0);
    assert.equal(s.ammo.laser, undefined);
    assert.equal(s.equipped, 'pistol');
  });
});

describe('gun store', () => {
  it('buys a gun with starter ammo and equips it', () => {
    const s = fresh(2000);
    const r = buyWeapon(s, 'pistol');
    assert.ok(r.ok);
    assert.equal(s.cash, 2000 - WEAPONS[0].price);
    assert.equal(s.ammo.pistol, WEAPONS[0].start);
    assert.equal(s.equipped, 'pistol');
  });
  it('refuses when broke or already owned', () => {
    const s = fresh(100);
    assert.equal(buyWeapon(s, 'rifle').ok, false);
    assert.equal(s.cash, 100);
    s.cash = 5000; buyWeapon(s, 'pistol');
    assert.equal(buyWeapon(s, 'pistol').ok, false);
  });
  it('sells ammo only for owned guns', () => {
    const s = fresh();
    assert.equal(buyAmmo(s, 'smg').ok, false);
    buyWeapon(s, 'smg');
    const before = s.ammo.smg;
    assert.ok(buyAmmo(s, 'smg').ok);
    assert.equal(s.ammo.smg, before + 90);
  });
  it('cycles guns then unarmed, and spends ammo', () => {
    const s = fresh();
    buyWeapon(s, 'pistol'); buyWeapon(s, 'shotgun');
    assert.equal(s.equipped, 'shotgun');
    assert.equal(cycleWeapon(s), null);
    assert.equal(cycleWeapon(s), 'pistol');
    assert.equal(cycleWeapon(s), 'shotgun');
    s.ammo.shotgun = 1;
    assert.equal(useAmmo(s, 'shotgun'), true);
    assert.equal(useAmmo(s, 'shotgun'), false);
    assert.equal(equipWeapon(s, 'rifle').ok, false);
  });
});

describe('clothing store', () => {
  it('charges for shirts and hats; owned hats are free to swap', () => {
    const s = fresh(1000);
    assert.ok(buyShirt(s, SHIRTS[3]).ok);
    assert.equal(s.cash, 1000 - SHIRT_COST);
    assert.equal(buyShirt(s, SHIRTS[3]).ok, false);
    assert.ok(buyHat(s, 'cap').ok);
    const c = s.cash;
    buyHat(s, 'none'); buyHat(s, 'cap');
    assert.equal(s.cash, c);
    assert.equal(s.outfit.hat, 'cap');
  });
});

describe('on foot', () => {
  it('walks forward along -Z at heading 0 and runs faster', () => {
    const f = new FootPhysics();
    for (let i = 0; i < 120; i++) f.update({ moveY: 1 }, 1 / 60);
    assert.ok(f.pos.z < -2.5, 'moved north');
    assert.ok(Math.abs(f.speed - WALK_SPEED) < 0.1);
    for (let i = 0; i < 120; i++) f.update({ moveY: 1, run: true }, 1 / 60);
    assert.ok(Math.abs(f.speed - RUN_SPEED) < 0.1);
  });
  it('stops when the stick is released and respects collisions', () => {
    const f = new FootPhysics();
    const wall = (x, z) => ({ x, z: Math.max(z, -1) });
    for (let i = 0; i < 200; i++) f.update({ moveY: 1 }, 1 / 60, wall);
    assert.equal(f.pos.z, -1);
    for (let i = 0; i < 60; i++) f.update({}, 1 / 60, wall);
    assert.equal(f.speed, 0);
  });
  it('drops you on the driver side of the car', () => {
    const s = exitSpot(0, 0, 0);   // car faces -Z, driver side is -X
    assert.ok(s.x < -1.5 && Math.abs(s.z) < 1e-9);
  });
  it('ray tests hit boxes and circles at the right distance', () => {
    const box = { minX: 5, maxX: 6, minZ: -1, maxZ: 1 };
    assert.equal(rayAABB(0, 0, 1, 0, box, 100), 5);
    assert.equal(rayAABB(0, 0, -1, 0, box, 100), Infinity);
    assert.ok(Math.abs(rayCircle(0, 0, 0, -1, 0, -10, 1, 100) - 9) < 1e-9);
    assert.equal(rayCircle(0, 0, 0, -1, 0, -10, 1, 5), Infinity);
  });
});
