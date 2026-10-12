// Tests for the gearbox in js/physics.js.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CarPhysics, Gearbox } from '../js/physics.js';

const stats = { topSpeed:52, accel:16, handling:1, grip:1, nitroTime:3, nitroPower:1.35 };
const run = (car, secs, input) => { let t; for(let i = 0; i < secs * 60; i++) t = car.update(input, 1 / 60, null); return t; };

describe('gearbox', () => {
  it('automatic shifts up through the gears under full throttle', () => {
    const car = new CarPhysics(stats);
    const t = run(car, 12, { throttle:1, steer:0 });
    assert.ok(t.gear >= 5, `reached gear ${t.gear}`);
    assert.ok(t.speed > stats.topSpeed * 0.85, `speed ${t.speed}`);
  });
  it('manual stays in 1st and bounces off the limiter', () => {
    const car = new CarPhysics(stats);
    car.box.mode = 'manual';
    const t = run(car, 6, { throttle:1, steer:0 });
    assert.equal(t.gear, 1);
    assert.ok(t.speed <= new Gearbox().gearTop(stats.topSpeed, 1) * 1.05, `capped at ${t.speed}`);
    assert.ok(t.rpm > 0.95, 'at the redline');
  });
  it('manual upshift lets the car go faster', () => {
    const car = new CarPhysics(stats);
    car.box.mode = 'manual';
    run(car, 3, { throttle:1, steer:0 });
    const s1 = car.speed;
    car.box.shift(1); car.box.shift(1);
    run(car, 4, { throttle:1, steer:0 });
    assert.ok(car.speed > s1 * 1.5, `${s1} -> ${car.speed}`);
  });
});
