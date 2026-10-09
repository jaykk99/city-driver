// Tests for js/physics.js — arcade car physics (pure JS, no THREE).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CarPhysics } from '../js/physics.js';

const SPORT = { topSpeed: 52, accel: 16, handling: 1.0, grip: 1.0, nitroTime: 3.2, nitroPower: 1.35 };
const DT = 1 / 60;

function drive(frames, input, stats = SPORT, collide = null) {
  const p = new CarPhysics(stats);
  for (let i = 0; i < frames; i++) p.update(input, DT, collide);
  return p;
}

describe('CarPhysics', () => {
  it('accelerates from standstill and clamps at topSpeed', () => {
    const p = drive(600, { throttle: 1, steer: 0 });
    assert.ok(p.speed > 40, `expected real speed, got ${p.speed}`);
    assert.ok(p.speed <= SPORT.topSpeed + 1e-9, `exceeded topSpeed: ${p.speed}`);
  });

  it('asymptotes to topSpeed but never exceeds it', () => {
    const p = drive(3600, { throttle: 1, steer: 0 }); // 60s
    assert.ok(Math.abs(p.speed - SPORT.topSpeed) < 0.6, `expected ~${SPORT.topSpeed}, got ${p.speed}`);
    assert.ok(p.speed <= SPORT.topSpeed + 1e-9);
  });

  it('nitro activates only above walking speed and drains the bottle', () => {
    const p = new CarPhysics(SPORT);
    p.update({ throttle: 1, steer: 0, nitro: true }, DT, null);
    assert.equal(p.nitroActive, false, 'nitro should not fire from standstill');
    const q = drive(300, { throttle: 1, steer: 0 });
    const before = q.nitroLeft;
    const t = q.update({ throttle: 1, steer: 0, nitro: true }, DT, null);
    assert.equal(t.nitro, true, 'nitro should fire at speed');
    assert.ok(q.nitroLeft < before, 'bottle should drain');
  });

  it('nitro pushes speed past the base topSpeed and recharges when off', () => {
    const p = drive(600, { throttle: 1, steer: 0 });
    for (let i = 0; i < 180; i++) p.update({ throttle: 1, steer: 0, nitro: true }, DT, null);
    assert.ok(p.speed > SPORT.topSpeed, `nitro should break ${SPORT.topSpeed}, got ${p.speed}`);
    assert.ok(p.speed <= SPORT.topSpeed * SPORT.nitroPower + 1e-9, 'nitro top speed clamp');
    const drained = p.nitroLeft;
    for (let i = 0; i < 600; i++) p.update({ throttle: 1, steer: 0 }, DT, null);
    assert.ok(p.nitroLeft > drained, 'bottle should recharge when nitro off');
    assert.ok(p.nitroLeft <= SPORT.nitroTime + 1e-9, 'bottle should not overfill');
  });

  it('brakes hard at speed, reverses gently from a stop', () => {
    const fast = drive(300, { throttle: 1, steer: 0 });
    const v0 = fast.speed;
    fast.update({ throttle: -1, steer: 0 }, DT, null);
    const braking = v0 - fast.speed;
    assert.ok(braking > 0.2, `braking should scrub speed fast, scrubbed ${braking}`);

    const still = new CarPhysics(SPORT);
    still.update({ throttle: -1, steer: 0 }, DT, null);
    assert.ok(still.speed < 0, 'should roll backwards');
    assert.ok(Math.abs(still.speed) < braking, 'reverse launch gentler than braking');
  });

  it('smooths steering toward the target', () => {
    const p = new CarPhysics(SPORT);
    p.update({ throttle: 0, steer: 1 }, DT, null);
    assert.ok(p.steer > 0 && p.steer < 1, `steer should ease in, got ${p.steer}`);
    for (let i = 0; i < 120; i++) p.update({ throttle: 0, steer: 1 }, DT, null);
    assert.ok(Math.abs(p.steer - 1) < 0.01, `steer should converge to 1, got ${p.steer}`);
  });

  it('turns the heading only when moving', () => {
    const still = new CarPhysics(SPORT);
    still.update({ throttle: 0, steer: 1 }, DT, null);
    assert.equal(still.heading, 0, 'no turn at standstill');
    const moving = drive(120, { throttle: 1, steer: 1 });
    assert.notEqual(moving.heading, 0, 'should turn while moving');
  });

  it('flags drifting only with handbrake at speed', () => {
    const fast = drive(300, { throttle: 1, steer: 0 });
    fast.update({ throttle: 0, steer: 0, handbrake: true }, DT, null);
    assert.equal(fast.drifting, true, 'handbrake at speed should drift');
    const slow = new CarPhysics(SPORT);
    slow.update({ throttle: 0, steer: 0, handbrake: true }, DT, null);
    assert.equal(slow.drifting, false, 'handbrake at standstill should not drift');
  });

  it('bounces off walls: position clamped, velocity reflected at -0.25', () => {
    const p = new CarPhysics(SPORT);
    p.heading = Math.PI / 2; // face -X so vel.x is strongly negative
    for (let i = 0; i < 60; i++) p.update({ throttle: 1, steer: 0 }, DT, null);
    assert.ok(p.vel.x < -1, `setup: expected -x velocity, got ${p.vel.x}`);
    const before = p.vel.x;
    p.update({ throttle: 0, steer: 0 }, DT, (nx, nz, px, pz) => ({ x: px, z: pz, hitX: true, hitZ: false }));
    assert.ok(p.vel.x > 0, 'x velocity should reflect');
    const ratio = p.vel.x / (-0.25 * before);
    assert.ok(Math.abs(ratio - 1) < 0.05, `reflection should be -0.25x, ratio ${ratio}`);
  });

  it('integrates position along the heading', () => {
    const p = drive(60, { throttle: 1, steer: 0 });
    assert.ok(p.pos.z < -1, `heading 0 = -Z, expected -z travel, got z=${p.pos.z}`);
    assert.ok(Math.abs(p.pos.x) < 0.01, `no lateral drift expected, x=${p.pos.x}`);
  });

  it('clamps dt to 0.05 (tab-switch safety)', () => {
    const a = new CarPhysics(SPORT);
    a.update({ throttle: 1, steer: 0 }, 10, null); // huge dt
    const b = new CarPhysics(SPORT);
    b.update({ throttle: 1, steer: 0 }, 0.05, null);
    assert.equal(a.speed, b.speed, 'dt>0.05 must behave like dt=0.05');
    const c = new CarPhysics(SPORT);
    c.update({ throttle: 1, steer: 0 }, 0.05, null);
    c.update({ throttle: 1, steer: 0 }, 0.05, null);
    assert.ok(a.speed < c.speed, 'clamped single step must advance less than two real steps');
  });

  it('telemetry reports speed, drift, nitro fraction', () => {
    const p = drive(120, { throttle: 1, steer: 0 });
    const t = p.update({ throttle: 1, steer: 0 }, DT, null);
    assert.equal(t.speed, p.speed);
    assert.equal(t.drifting, p.drifting);
    assert.ok(t.nitroFrac >= 0 && t.nitroFrac <= 1, `nitroFrac ${t.nitroFrac}`);
  });
});
