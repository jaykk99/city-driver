// Tests for js/garage.js — upgrade pricing, constants, save normalize/load.
import { describe, it, before } from 'node:test';
import assert from 'node:assert/strict';

let upgradeCost, loadSave, saveSave, PAINT_COST, WHEEL_COST, MAX_UPGRADE, PAINTS, WHEEL_STYLES;
before(async () => {
  // garage.js reads localStorage at load/save time only, so a stub is enough.
  const store = new Map();
  globalThis.localStorage = {
    getItem: k => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: k => store.delete(k),
    _clear: () => store.clear(),
    _raw: k => store.get(k),
  };
  const garage = await import('../js/garage.js');
  ({ upgradeCost, loadSave, saveSave, PAINT_COST, WHEEL_COST, MAX_UPGRADE, PAINTS, WHEEL_STYLES } = garage);
});

describe('economy constants', () => {
  it('has the expected price points and caps', () => {
    assert.equal(PAINT_COST, 250);
    assert.equal(WHEEL_COST, 350);
    assert.equal(MAX_UPGRADE, 5);
  });

  it('offers 8 unique paints and 3 wheel styles', () => {
    assert.equal(PAINTS.length, 8);
    assert.equal(new Set(PAINTS).size, 8, 'duplicate paint hexes');
    assert.deepEqual(WHEEL_STYLES, ['Sport', 'Chrome', 'Stealth']);
  });
});

describe('upgradeCost', () => {
  const sport = { price: 0 };
  const track = { price: 35000 };

  it('charges 400 for the first upgrade on the free car', () => {
    assert.equal(upgradeCost(sport, 'engine', 0), 400);
  });

  it('follows 400*(level+1)^1.7*(1+price/20000)', () => {
    assert.equal(upgradeCost(sport, 'engine', 1), 1300); // 400 * 2^1.7 = 1299.6
    assert.equal(upgradeCost(track, 'engine', 0), 1100); // 400 * (1 + 1.75)
    assert.equal(
      upgradeCost(track, 'turbo', 2),
      Math.round(400 * Math.pow(3, 1.7) * (1 + 35000 / 20000))
    );
  });

  it('rises with level and with car price', () => {
    for (let l = 0; l < 4; l++) {
      assert.ok(upgradeCost(sport, 'engine', l + 1) > upgradeCost(sport, 'engine', l),
        `cost must rise from level ${l}`);
    }
    for (let l = 0; l < 5; l++) {
      assert.ok(upgradeCost(track, 'engine', l) > upgradeCost(sport, 'engine', l),
        `pricier car must cost more at level ${l}`);
    }
  });
});

describe('loadSave / saveSave', () => {
  it('returns a valid default save when nothing is stored', () => {
    localStorage._clear();
    const s = loadSave();
    assert.equal(s.cash, 5000);
    assert.equal(s.currentCar, 'sport', 'starter car must exist in CAR_DEFS');
    assert.deepEqual(s.owned, ['sport']);
    assert.deepEqual(Object.keys(s.upgrades.sport).sort(),
      ['engine', 'nitro', 'suspension', 'tires', 'turbo'],
      'blank upgrades for the starter car');
  });

  it('falls back to defaults on corrupt JSON', () => {
    localStorage.setItem('citydriver_save_v1', '{not json');
    const s = loadSave();
    assert.equal(s.currentCar, 'sport');
    assert.equal(s.cash, 5000);
  });

  it('clamps upgrade levels to MAX_UPGRADE and cash to >= 0', () => {
    localStorage.setItem('citydriver_save_v1', JSON.stringify({
      cash: -50, currentCar: 'sport', owned: ['sport'],
      upgrades: { sport: { engine: 9, turbo: 0, tires: 0, suspension: 0, nitro: 0 } },
      paint: { sport: 0xd7263d }, wheels: { sport: 0 },
    }));
    const s = loadSave();
    assert.equal(s.cash, 0);
    assert.equal(s.upgrades.sport.engine, MAX_UPGRADE);
  });

  it('drops stale car ids (legacy falcon) and recovers the starter', () => {
    localStorage.setItem('citydriver_save_v1', JSON.stringify({
      cash: 5000, currentCar: 'falcon', owned: ['falcon'],
      upgrades: { falcon: { engine: 1, turbo: 0, tires: 0, suspension: 0, nitro: 0 } },
      paint: { falcon: 0xd7263d }, wheels: { falcon: 0 },
    }));
    const s = loadSave();
    assert.deepEqual(s.owned, ['sport'], 'stale ids must be filtered');
    assert.equal(s.currentCar, 'sport');
    assert.ok(s.upgrades.sport, 'starter upgrades must exist after migration');
  });

  it('round-trips a save through saveSave', () => {
    localStorage._clear();
    const s = loadSave();
    s.cash = 12345;
    s.owned.push('super');
    saveSave(s);
    const back = loadSave();
    assert.equal(back.cash, 12345);
    assert.ok(back.owned.includes('super'));
  });
});
