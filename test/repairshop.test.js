// Tests for drive-in repair shops: the bay a player pulls into must be
// the place the damage system actually repairs from, clear of the roads,
// with nothing else spawned on top of it — and the meshes must land where
// the layout says they do (the rotated group frame is easy to get wrong).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { STATIONS, STATION_RADIUS } from '../js/fuel.js';
import { stationLayout } from '../js/fuelstations.js';
import { LINES, ROAD_W, GRID_HALF } from '../js/world.js';
import { STORE_LOTS } from '../js/stores.js';
import {
  REPAIR_SHOPS, REPAIR_RADIUS, shopLayout, shopLayouts, buildRepairShopMeshes,
  baysInRepairRadius, nearestBay, nearestRepairShop, repairBill,
} from '../js/repairshop.js';
import { repairsNear } from '../js/minimap.js';
import { REPAIR_PER_HP } from '../js/cardamage.js';

// True when (x, z) sits on a road strip (either a N-S or an E-W road).
function onRoad(x, z){
  if(Math.abs(x) > GRID_HALF || Math.abs(z) > GRID_HALF) return false;
  if(LINES.some(l => Math.abs(x - l) <= ROAD_W / 2)) return true;
  if(LINES.some(l => Math.abs(z - l) <= ROAD_W / 2)) return true;
  return false;
}
function inside(r, x, z){
  return x >= r.minX && x <= r.maxX && z >= r.minZ && z <= r.maxZ;
}
function overlaps(a, b){
  return a.minX < b.maxX && b.minX < a.maxX && a.minZ < b.maxZ && b.minZ < a.maxZ;
}

describe('shop data', () => {
  it('every shop names a bay-row axis and its intersection corner', () => {
    assert.equal(REPAIR_SHOPS.length, 2);
    for(const s of REPAIR_SHOPS){
      assert.ok(s.axis === 'x' || s.axis === 'z', `${s.name} needs axis x or z`);
      assert.equal(s.toward.length, 2);
      assert.ok(s.toward.every(v => v === 1 || v === -1));
    }
  });
  it('shops sit 18 m off both road centre lines at their corner', () => {
    for(const s of REPAIR_SHOPS){
      const nx = LINES.map(l => Math.abs(s.x - l)).sort((a, b) => a - b)[0];
      const nz = LINES.map(l => Math.abs(s.z - l)).sort((a, b) => a - b)[0];
      assert.equal(nx, 18, `${s.name} x offset`);
      assert.equal(nz, 18, `${s.name} z offset`);
    }
  });
});

describe('shop layout', () => {
  for(const s of REPAIR_SHOPS){
    it(`${s.name}: pad, bays, lifts, columns and sign sit inside the lot, off the roads`, () => {
      const L = shopLayout(s);
      assert.ok(inside(L.lot, L.pad.minX, L.pad.minZ) && inside(L.lot, L.pad.maxX, L.pad.maxZ), 'pad inside lot');
      assert.ok(!onRoad(L.pad.minX, L.pad.minZ) && !onRoad(L.pad.maxX, L.pad.maxZ), 'pad clear of roads');
      assert.ok(!onRoad(L.sign.x, L.sign.z), 'sign clear of roads');
      assert.ok(inside(L.lot, L.sign.x, L.sign.z), 'sign inside lot');
      assert.equal(L.bays.length, 2);
      assert.equal(L.lifts.length, 2);
      assert.equal(L.columns.length, 4);
      assert.ok(baysInRepairRadius(L), 'bays must be inside the repair radius');
      for(const b of L.bays) assert.ok(inside(L.lot, b.x, b.z), 'bay inside lot');
      for(const c of L.colliders)
        assert.ok(inside(L.lot, c.minX, c.minZ) && inside(L.lot, c.maxX, c.maxZ), 'collider inside lot');
      // colliders must not cover a bay point: a car parks ON it
      for(const c of L.colliders)
        for(const b of L.bays)
          assert.ok(!(b.x >= c.minX && b.x <= c.maxX && b.z >= c.minZ && b.z <= c.maxZ), 'no collider on a bay point');
      // each lift sits beside its own bay, not on top of it
      for(let i = 0; i < 2; i++){
        const d = Math.hypot(L.lifts[i].x - L.bays[i].x, L.lifts[i].z - L.bays[i].z);
        assert.ok(d > 1 && d < 6, `lift ${i} beside its bay, got ${d}`);
      }
    });
  }
  it('lots do not overlap each other, gas-station lots or store lots, and layout is deterministic', () => {
    const Ls = shopLayouts();
    assert.equal(Ls.length, REPAIR_SHOPS.length);
    const [a, b] = Ls;
    assert.ok(!overlaps(a.lot, b.lot), 'shop lots must not overlap');
    for(const L of Ls){
      for(const st of STATIONS)
        assert.ok(!overlaps(L.lot, stationLayout(st).lot), `${L.shop.name} lot overlaps a gas lot`);
      for(const lot of STORE_LOTS)
        assert.ok(!overlaps(L.lot, lot), `${L.shop.name} lot overlaps a store lot`);
    }
    assert.deepEqual(shopLayout(REPAIR_SHOPS[0]), shopLayout(REPAIR_SHOPS[0]));
  });
  it('nearest helpers pick the closest shop and bay', () => {
    const rs = nearestRepairShop(-203, -55);
    assert.equal(rs.shop.name, 'Arlington & Portage');
    assert.equal(rs.dist, 0);
    const nb = nearestBay(-203, -55 + 6);
    assert.ok(nb.dist <= 6, `bay near shop point, got ${nb.dist}`);
    // midpoint between the two bays is NOT a bay: parking there repairs nothing
    const mid = nearestBay(REPAIR_SHOPS[0].x, REPAIR_SHOPS[0].z);
    assert.ok(mid.dist >= 5, `shop midpoint must not count as a bay, got ${mid.dist}`);
  });
  it('repair radius matches the gas-station convention', () => {
    assert.equal(REPAIR_RADIUS, STATION_RADIUS);
  });
});

describe('repair billing', () => {
  it('charges the tow-bill rate, nothing for zero or negative hp', () => {
    assert.equal(repairBill(10), 10 * REPAIR_PER_HP);
    assert.equal(repairBill(0), 0);
    assert.equal(repairBill(-5), 0);
  });
});

describe('shop meshes', () => {
  it('group sits on the shop point, rotated for the bay-row axis', () => {
    for(const L of shopLayouts()){
      const g = buildRepairShopMeshes(THREE, L);
      assert.equal(g.position.x, L.shop.x);
      assert.equal(g.position.z, L.shop.z);
      assert.equal(g.rotation.y, L.axis === 'x' ? 0 : Math.PI / 2);
      assert.ok(g.children.length >= 10, `canopy + columns + lifts + sign, got ${g.children.length}`);
    }
  });
  it('sign face texture is honoured when given', () => {
    const tex = new THREE.Texture();
    const g = buildRepairShopMeshes(THREE, shopLayouts()[0], { signTexture: tex });
    const signMesh = g.children.find(m => m.geometry && m.geometry.type === 'BoxGeometry' && m.position.y === 7.2);
    assert.ok(signMesh, 'sign mesh present');
    assert.equal(signMesh.material.map, tex);
  });
});

describe('map markers', () => {
  it('repairsNear finds shops in range, nearest first, and skips far ones', () => {
    const near = repairsNear(-203, -55, 150);
    assert.equal(near.length, 1);
    assert.equal(near[0].name, 'Arlington & Portage');
    assert.equal(repairsNear(0, 0, 150).length, 0);
    const all = repairsNear(0, 0, 1000);
    assert.equal(all.length, 2);
    assert.ok(all[0].dist <= all[1].dist);
  });
});
