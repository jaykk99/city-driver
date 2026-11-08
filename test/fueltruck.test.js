// Tests for the visible fuel truck: the old delivery was a toast and an
// instant +25 — no truck ever appeared. Now a tanker drives in along the
// stalled car's heading, parks beside it, fills it progressively, and
// drives off. Pure state machine, testable without a renderer.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { FuelTank, DELIVERY_UNITS, DELIVERY_PRICE } from '../js/fuel.js';
import {
  FuelTruckRun, truckStopFor, truckSpawnFor, truckDepartTarget,
  TRUCK_SPEED, TRUCK_APPROACH, TRUCK_SIDE, TRUCK_DELIVER_TIME,
  buildFuelTruckMeshes,
} from '../js/fueltruck.js';

// Minimal THREE stand-in: the builder only needs Group/Mesh/geometries/
// materials plus position.set and rotation fields.
function fakeTHREE(){
  class Vec { constructor(){ this.x = 0; this.y = 0; this.z = 0; } set(x, y, z){ this.x = x; this.y = y; this.z = z; } }
  class Group { constructor(){ this.children = []; this.position = new Vec(); this.rotation = new Vec(); } add(m){ this.children.push(m); } }
  class Mesh { constructor(geo, mat){ this.geometry = geo; this.material = mat; this.position = new Vec(); this.rotation = new Vec(); } }
  return {
    Group,
    Mesh,
    BoxGeometry: class { constructor(w, h, d){ this.w = w; this.h = h; this.d = d; } },
    CylinderGeometry: class { constructor(rt, rb, h){ this.h = h; } },
    MeshStandardMaterial: class { constructor(o){ this.o = o; } },
  };
}

describe('truckStopFor / truckSpawnFor / truckDepartTarget', () => {
  it('parks beside the car, not on top of it, and approaches from behind', () => {
    // Heading 0 faces -Z: the truck comes from +Z (behind), stops 4.5 m
    // to the car's side, and leaves toward -Z (ahead).
    const stop = truckStopFor(100, 50, 0);
    assert.equal(stop.x, 100 + TRUCK_SIDE);
    assert.equal(stop.z, 50);
    const spawn = truckSpawnFor(stop, 0);
    assert.equal(spawn.x, stop.x);
    assert.equal(spawn.z, stop.z + TRUCK_APPROACH);
    const depart = truckDepartTarget(stop, 0);
    assert.equal(depart.x, stop.x);
    assert.equal(depart.z, stop.z - TRUCK_APPROACH);
  });
  it('the approach line is the car heading line, offset to the side', () => {
    // Heading PI/2 faces -X: spawn, stop and depart share one line.
    const h = Math.PI / 2;
    const stop = truckStopFor(0, 0, h);
    const spawn = truckSpawnFor(stop, h);
    const depart = truckDepartTarget(stop, h);
    assert.ok(Math.hypot(spawn.x - stop.x, spawn.z - stop.z) - TRUCK_APPROACH < 1e-9);
    assert.ok(Math.hypot(depart.x - stop.x, depart.z - stop.z) - TRUCK_APPROACH < 1e-9);
    // Stop is off the car's own spot by exactly the side offset.
    assert.ok(Math.hypot(stop.x, stop.z) - TRUCK_SIDE < 1e-9);
  });
});

describe('FuelTruckRun', () => {
  function stalledRun(){
    const t = new FuelTank();
    t.level = 0;
    return { t, run: new FuelTruckRun(100, 50, 0) };
  }
  it('starts behind the car in phase inbound, not done', () => {
    const { run } = stalledRun();
    assert.equal(run.phase, 'inbound');
    assert.equal(run.done, false);
    assert.ok(Math.hypot(run.x - run.stop.x, run.z - run.stop.z) - TRUCK_APPROACH < 1e-9);
  });
  it('drives in at truck speed and reports arrival exactly once', () => {
    const { t, run } = stalledRun();
    let arrived = 0, steps = 0;
    while(run.phase === 'inbound' && steps++ < 1000){
      const r = run.update(0.5, t);
      if(r.arrived) arrived++;
    }
    assert.equal(run.phase, 'delivering');
    assert.equal(arrived, 1);
    assert.equal(run.x, run.stop.x);
    assert.equal(run.z, run.stop.z);
    // 40 m at 12 m/s takes ~3.3 s: neither instant nor a crawl.
    assert.ok(steps * 0.5 >= TRUCK_APPROACH / TRUCK_SPEED - 0.5);
    assert.ok(steps * 0.5 <= TRUCK_APPROACH / TRUCK_SPEED + 0.5);
    assert.equal(t.level, 0, 'no fuel before the truck parks');
  });
  it('fills progressively at the delivery price, then departs and finishes', () => {
    const { t, run } = stalledRun();
    while(run.phase === 'inbound') run.update(0.5, t);
    let added = 0, cost = 0, finished = 0;
    while(!run.done){
      const r = run.update(0.5, t);
      added += r.added; cost += r.cost;
      if(r.deliveryFinished) finished++;
    }
    assert.equal(finished, 1);
    assert.equal(added, DELIVERY_UNITS);
    assert.equal(t.level, DELIVERY_UNITS);
    // Cost is ceiled per tick like pump fills: 4 ticks of 6.25 units at
    // $5 = ceil(31.25) = $32 each, so $128 total, not a flat $125.
    assert.equal(cost, 128);
    assert.equal(run.phase, 'done');
    assert.ok(Math.hypot(run.x - run.depart.x, run.z - run.depart.z) < 1e-9);
  });
  it('a near-full tank caps the delivery and still drives off', () => {
    const t = new FuelTank();
    t.level = 90;
    const run = new FuelTruckRun(0, 0, 0);
    while(run.phase === 'inbound') run.update(0.5, t);
    let added = 0;
    while(!run.done){ added += run.update(0.5, t).added; }
    assert.equal(added, 10);
    assert.equal(t.level, 100);
  });
  it('update after done is a no-op', () => {
    const { t, run } = stalledRun();
    while(!run.done) run.update(0.5, t);
    assert.deepEqual(run.update(1, t), { added: 0, cost: 0, arrived: false, deliveryFinished: false });
  });
  it('delivery takes about the advertised dwell, not an instant jump', () => {
    const { t, run } = stalledRun();
    while(run.phase === 'inbound') run.update(0.1, t);
    let secs = 0;
    while(run.phase === 'delivering' && secs < 30){ run.update(0.1, t); secs += 0.1; }
    assert.ok(secs >= TRUCK_DELIVER_TIME - 0.15 && secs <= TRUCK_DELIVER_TIME + 0.15,
      `delivery took ${secs}s, expected ~${TRUCK_DELIVER_TIME}s`);
  });
});

describe('buildFuelTruckMeshes', () => {
  it('builds a cab, a tank and wheels facing -Z', () => {
    const Fake = fakeTHREE();
    const g = buildFuelTruckMeshes(Fake);
    assert.ok(g.children.length >= 8, `expected cab+tank+wheels, got ${g.children.length} meshes`);
    const tanks = g.children.filter(m => m.geometry instanceof Fake.CylinderGeometry);
    // Cylinder meshes exist (tank body + wheels); the long tank is the
    // tallest cylinder in the group.
    assert.ok(tanks.length >= 5, `expected tank + 4+ wheels, got ${tanks.length} cylinders`);
  });
});

describe('FuelTank.deliverPartial', () => {
  it('adds a partial amount at the delivery price, capped at full', () => {
    const t = new FuelTank();
    t.level = 40;
    assert.deepEqual(t.deliverPartial(10), { added: 10, cost: 10 * DELIVERY_PRICE });
    assert.equal(t.level, 50);
    assert.deepEqual(t.deliverPartial(100), { added: 50, cost: 50 * DELIVERY_PRICE });
    assert.equal(t.level, 100);
  });
  it('zero or negative partial deliveries are no-ops', () => {
    const t = new FuelTank();
    t.level = 50;
    assert.deepEqual(t.deliverPartial(0), { added: 0, cost: 0 });
    assert.deepEqual(t.deliverPartial(-5), { added: 0, cost: 0 });
    assert.equal(t.level, 50);
  });
});
