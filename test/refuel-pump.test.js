// Tests for pump-side refuelling: refuelling used to trigger from anywhere
// inside the 22 m station radius after sitting still for 2 s — parked on
// the road shoulder, or in the middle of the forecourt, with an instant
// jump to full. Now the car must sit beside a pump island, the gauge
// climbs progressively, and driving off mid-fill keeps the partial fill.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { FuelTank, FUEL_MAX, STATION_PRICE, FUEL_FILL_RATE } from '../js/fuel.js';
import {
  stationLayout, nearestPump, PUMP_REFUEL_DIST,
} from '../js/fuelstations.js';
import { STATIONS } from '../js/fuel.js';

function onCollider(L, x, z){
  return L.colliders.some(c => x >= c.minX && x <= c.maxX && z >= c.minZ && z <= c.maxZ);
}

describe('nearestPump', () => {
  it('finds a pump at zero distance when parked on one', () => {
    const L = stationLayout(STATIONS[0]);
    const np = nearestPump(L.pumps[0].x, L.pumps[0].z);
    assert.equal(np.dist, 0);
    assert.deepEqual(np.pump, L.pumps[0]);
  });
  it('the station midpoint is NOT at a pump: 6 m from either island', () => {
    const s = STATIONS[0];
    const np = nearestPump(s.x, s.z);
    assert.ok(np.dist > PUMP_REFUEL_DIST,
      `midpoint ${np.dist} m from a pump must exceed refuel range ${PUMP_REFUEL_DIST}`);
  });
  it('a car parked alongside an island is in range and off every collider', () => {
    for(const s of STATIONS){
      const L = stationLayout(s);
      // Step across the row from the first pump: island half-width 0.8 m +
      // car half-width ~1 m, so 2.5 m out is a realistic park job.
      const p = L.pumps[0];
      const across = s.axis === 'x' ? { x: p.x, z: p.z + 2.5 } : { x: p.x + 2.5, z: p.z };
      const np = nearestPump(across.x, across.z);
      assert.ok(np.dist <= PUMP_REFUEL_DIST, `${s.name}: alongside-island park must be in range`);
      assert.ok(!onCollider(L, across.x, across.z), `${s.name}: park spot must not sit on a collider`);
    }
  });
  it('the road shoulder inside the station radius is out of pump range', () => {
    // Portage & Main forecourt sits 18 m off both roads; a car stopped on
    // Main St beside the station is inside STATION_RADIUS but nowhere near
    // a pump — the old behaviour would have filled it up there.
    const np = nearestPump(185, -55);
    assert.ok(np.dist > PUMP_REFUEL_DIST, `road shoulder ${np.dist} m must be out of range`);
  });
});

describe('FuelTank.add (progressive pump fill)', () => {
  it('adds a partial amount at the station price, capped at full', () => {
    const t = new FuelTank();
    t.level = 40;
    const a = t.add(10);
    assert.deepEqual(a, { added: 10, cost: 10 * STATION_PRICE });
    assert.equal(t.level, 50);
    const capped = t.add(100);
    assert.equal(capped.added, 50);
    assert.equal(t.level, FUEL_MAX);
  });
  it('adding to a full tank adds nothing and charges nothing', () => {
    assert.deepEqual(new FuelTank().add(25), { added: 0, cost: 0 });
  });
  it('negative or zero adds are no-ops', () => {
    const t = new FuelTank();
    t.level = 50;
    assert.deepEqual(t.add(0), { added: 0, cost: 0 });
    assert.deepEqual(t.add(-5), { added: 0, cost: 0 });
    assert.equal(t.level, 50);
  });
  it('the fill rate fills an empty tank in about 4 seconds', () => {
    const t = new FuelTank();
    t.level = 0;
    let secs = 0;
    while(!t.full && secs < 30){ t.add(FUEL_FILL_RATE * 0.5); secs += 0.5; }
    assert.ok(secs >= 3.5 && secs <= 4.5, `empty-to-full took ${secs}s, expected ~4s`);
  });
  it('driving off mid-fill keeps the partial fuel: no all-or-nothing fill', () => {
    const t = new FuelTank();
    t.level = 20;
    t.add(FUEL_FILL_RATE * 1); // 1 s at the pump, then drive off
    assert.equal(t.level, 45, '1 s at the pump must bank 25 units, not reset or jump to full');
  });
});
