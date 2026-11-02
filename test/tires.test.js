// Tests for the tire-wear model: distance costs rubber, drifting and
// off-road cost more, worn tires lose grip, and a partial swap only
// charges for the rubber actually fitted.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  TireWear, wearFor, TIRE_SET_COST, WEAR_PER_M, WEAR_DRIFT_MULT,
  WEAR_OFFROAD_MULT, GRIP_LOSS_MAX, WORN_WARN, WORN_BAD,
} from '../js/tires.js';

describe('wear accumulation', () => {
  it('normal driving wears at the base per-metre rate', () => {
    assert.equal(wearFor(30000, {}), 30000 * WEAR_PER_M);
    assert.equal(wearFor(0, {}), 0);
    assert.equal(wearFor(-100, {}), 0);
  });
  it('drifting and off-road multiply, and stack', () => {
    assert.equal(wearFor(1000, { drifting: true }), 1000 * WEAR_PER_M * WEAR_DRIFT_MULT);
    assert.equal(wearFor(1000, { offroad: true }), 1000 * WEAR_PER_M * WEAR_OFFROAD_MULT);
    assert.equal(wearFor(1000, { drifting: true, offroad: true }),
      1000 * WEAR_PER_M * WEAR_DRIFT_MULT * WEAR_OFFROAD_MULT);
  });
  it('drive() caps at bald and reports only what was added', () => {
    const t = new TireWear();
    t.wear = 0.9;
    assert.ok(Math.abs(t.drive(30000, {}) - 0.1) < 1e-9, 'capped addition');
    assert.ok(Math.abs(t.wear - 1) < 1e-9, 'wear caps at 1');
    assert.equal(t.drive(30000, {}), 0);
  });
});

describe('grip loss', () => {
  it('fresh tires grip fully, bald tires keep 1 - GRIP_LOSS_MAX', () => {
    const t = new TireWear();
    assert.equal(t.gripFactor(), 1);
    t.wear = 0.5;
    assert.equal(t.gripFactor(), 1 - GRIP_LOSS_MAX * 0.5);
    t.wear = 1;
    assert.equal(t.gripFactor(), 1 - GRIP_LOSS_MAX);
  });
  it('worn/bald flags trip at their thresholds', () => {
    const t = new TireWear();
    assert.equal(t.worn, false);
    assert.equal(t.bald, false);
    t.wear = WORN_WARN;
    assert.equal(t.worn, true);
    assert.equal(t.bald, false);
    t.wear = WORN_BAD;
    assert.equal(t.bald, true);
  });
});

describe('replacement billing', () => {
  it('a full set costs TIRE_SET_COST, a half-worn set half that', () => {
    const t = new TireWear();
    t.wear = 0.5;
    assert.equal(t.replaceCost(), Math.ceil(0.5 * TIRE_SET_COST));
    t.wear = 0;
    assert.equal(t.replaceCost(), 0);
  });
  it('replacePartial caps at fresh and charges only for rubber fitted', () => {
    const t = new TireWear();
    t.wear = 0.3;
    const r = t.replacePartial(0.5);
    assert.equal(r.replaced, 0.3);
    assert.equal(r.cost, Math.ceil(0.3 * TIRE_SET_COST));
    assert.equal(t.wear, 0);
    const t2 = new TireWear();
    t2.wear = 0.8;
    const r2 = t2.replacePartial(0.25);
    assert.equal(r2.replaced, 0.25);
    assert.equal(r2.cost, Math.ceil(0.25 * TIRE_SET_COST));
    assert.equal(t2.wear, 0.55);
    assert.equal(t2.replacePartial(-1).replaced, 0);
  });
});
