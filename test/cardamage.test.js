import test from 'node:test';
import assert from 'node:assert/strict';
import { CarDamage, impactDamage, CAR_MAX_HP } from '../js/cardamage.js';

test('impactDamage: taps are free, shunts scale, one hit is capped', () => {
  assert.equal(impactDamage(0), 0);
  assert.equal(impactDamage(4), 0);
  assert.equal(impactDamage(5), 1);
  assert.equal(impactDamage(14), 10);
  assert.equal(impactDamage(200), 35);
  assert.equal(impactDamage(-3), 0);
});

test('CarDamage.hit accumulates and never goes below zero', () => {
  const c = new CarDamage();
  assert.equal(c.hit(14), 10);
  assert.equal(c.hp, 90);
  assert.equal(c.hit(200), 35);
  assert.equal(c.hp, 55);
  c.damage(999);
  assert.equal(c.hp, 0);
  assert.equal(c.wrecked, true);
});

test('smokeLevel steps at 60 and 30', () => {
  const c = new CarDamage();
  assert.equal(c.smokeLevel(), 0);
  c.damage(40); assert.equal(c.smokeLevel(), 1);   // hp 60
  c.damage(1);  assert.equal(c.smokeLevel(), 1);   // hp 59
  c.damage(29); assert.equal(c.smokeLevel(), 2);   // hp 30
  c.damage(30); assert.equal(c.smokeLevel(), 2);   // wrecked still smokes
});

test('perfFactor: full pace at 70+, slides to 0.55, zero when wrecked', () => {
  const c = new CarDamage();
  assert.equal(c.perfFactor(), 1);
  c.damage(30); assert.equal(c.perfFactor(), 1);   // hp 70
  c.damage(1);
  const mid = c.perfFactor();
  assert.ok(mid < 1 && mid > 0.55);                // hp 69
  c.damage(68);                                    // hp 1
  assert.ok(Math.abs(c.perfFactor() - 0.55) < 1e-9);
  c.damage(1);
  assert.equal(c.perfFactor(), 0);
});

test('repair bills per missing hp and restores full health', () => {
  const c = new CarDamage();
  assert.equal(c.repairCost(), 0);
  c.damage(25);
  assert.equal(c.repairCost(), 250);
  assert.equal(c.repair(), 250);
  assert.equal(c.hp, CAR_MAX_HP);
  assert.equal(c.wrecked, false);
  assert.equal(c.repairCost(), 0);
});
