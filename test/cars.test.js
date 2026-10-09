// Tests for js/cars.js — car definitions and upgrade stat math.
// (cars.js imports three.js; only the pure data/math exports are tested here.)
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CAR_DEFS, carDef, effectiveStats } from '../js/cars.js';

const STAT_KEYS = ['topSpeed', 'accel', 'handling', 'grip', 'nitroTime', 'nitroPower'];

describe('CAR_DEFS', () => {
  it('has 6 cars with unique ids', () => {
    assert.equal(CAR_DEFS.length, 6);
    const ids = CAR_DEFS.map(c => c.id);
    assert.equal(new Set(ids).size, ids.length, 'duplicate car ids');
  });

  it('every car has positive stats and a sane price', () => {
    for (const c of CAR_DEFS) {
      for (const k of STAT_KEYS) assert.ok(c.stats[k] > 0, `${c.id}.${k} must be positive`);
      assert.ok(Array.isArray(c.colors) && c.colors.length > 0, `${c.id} needs colors`);
      assert.ok(Number.isInteger(c.price) && c.price >= 0, `${c.id} price`);
    }
  });

  it('exactly one free starter car (sport)', () => {
    const free = CAR_DEFS.filter(c => c.price === 0);
    assert.equal(free.length, 1, 'exactly one free car expected');
    assert.equal(free[0].id, 'sport');
  });

  it('faster cars cost more (rough price sanity)', () => {
    const byPrice = [...CAR_DEFS].sort((a, b) => a.price - b.price);
    assert.equal(byPrice[0].id, 'sport');
    assert.equal(byPrice[byPrice.length - 1].id, 'track');
  });
});

describe('carDef', () => {
  it('finds a car by id', () => {
    assert.equal(carDef('super').name, 'Falcon X');
    assert.equal(carDef('track').stats.topSpeed, 68);
  });

  it('falls back to the first car for unknown ids', () => {
    assert.equal(carDef('nope'), CAR_DEFS[0]);
    assert.equal(carDef('falcon'), CAR_DEFS[0], 'legacy falcon id must not resolve to a ghost car');
  });
});

describe('effectiveStats', () => {
  const base = carDef('sport').stats;

  it('returns base stats with no upgrades', () => {
    assert.deepEqual(effectiveStats('sport'), base);
    assert.deepEqual(effectiveStats('sport', {}), base);
  });

  it('engine upgrades raise top speed and accel', () => {
    const s = effectiveStats('sport', { engine: 5 });
    assert.equal(s.topSpeed, base.topSpeed * 1.275);   // 1 + 0.055*5
    assert.equal(s.accel, base.accel * (1 + 0.09 * 5)); // 1.45x
  });

  it('turbo stacks with engine on accel', () => {
    const s = effectiveStats('sport', { engine: 2, turbo: 3 });
    assert.equal(s.accel, base.accel * (1 + 0.09 * 2 + 0.12 * 3));
    assert.equal(s.topSpeed, base.topSpeed * (1 + 0.055 * 2), 'turbo must not touch top speed');
  });

  it('tires and suspension scale grip and handling', () => {
    const s = effectiveStats('sport', { tires: 3, suspension: 1 });
    assert.equal(s.grip, base.grip * 1.21);       // 1 + 0.07*3
    assert.equal(s.handling, base.handling * 1.06); // 1 + 0.06*1
  });

  it('nitro upgrades extend duration and power', () => {
    const s = effectiveStats('sport', { nitro: 4 });
    assert.equal(s.nitroTime, base.nitroTime + 2.0);      // +0.5/lvl
    assert.equal(s.nitroPower, base.nitroPower * 1.32);  // 1 + 0.08*4
  });

  it('ignores unknown upgrade keys', () => {
    assert.deepEqual(effectiveStats('sport', { wings: 5 }), base);
  });

  it('upgrades never reduce a stat below base', () => {
    const s = effectiveStats('track', { engine: 5, turbo: 5, tires: 5, suspension: 5, nitro: 5 });
    for (const k of STAT_KEYS) assert.ok(s[k] >= carDef('track').stats[k], `${k} regressed`);
  });

  it('accepts a def object as well as an id', () => {
    const s = effectiveStats(carDef('muscle'), { engine: 1 });
    assert.equal(s.topSpeed, carDef('muscle').stats.topSpeed * 1.055);
  });
});
