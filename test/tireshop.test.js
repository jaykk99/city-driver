// Tests for drive-in tire shops: the bay a player pulls into must be
// the place the new tires actually go on, clear of the roads, with
// nothing else spawned on top of it — and the meshes must land where
// the layout says they do (the rotated group frame is easy to get wrong).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { STATIONS, STATION_RADIUS } from '../js/fuel.js';
import { stationLayout } from '../js/fuelstations.js';
import { REPAIR_SHOPS } from '../js/repairshop.js';
import { shopLayout } from '../js/repairshop.js';
import { LINES, ROAD_W, GRID_HALF } from '../js/world.js';
import { STORE_LOTS } from '../js/stores.js';
import {
  TIRE_SHOPS, TIRE_RADIUS, tireShopLayout, tireShopLayouts, buildTireShopMeshes,
  baysInTireRadius, nearestTireBay, nearestTireShop, tireBill,
} from '../js/tireshop.js';
import { tiresNear } from '../js/minimap.js';
import { TIRE_SET_COST } from '../js/tires.js';

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
    assert.equal(TIRE_SHOPS.length, 2);
    for(const s of TIRE_SHOPS){
      assert.ok(s.axis === 'x' || s.axis === 'z', `${s.name} needs axis x or z`);
      assert.equal(s.toward.length, 2);
      assert.ok(s.toward.every(v => v === 1 || v === -1));
    }
  });
  it('shops sit 18 m off both road centre lines at their corner', () => {
    for(const s of TIRE_SHOPS){
      const nx = LINES.map(l => Math.abs(s.x - l)).sort((a, b) => a - b)[0];
      const nz = LINES.map(l => Math.abs(s.z - l)).sort((a, b) => a - b)[0];
      assert.equal(nx, 18, `${s.name} x offset`);
      assert.equal(nz, 18, `${s.name} z offset`);
    }
  });
});

describe('shop layout', () => {
  for(const s of TIRE_SHOPS){
    it(`${s.name}: pad, bays, stacks, columns and sign sit inside the lot, off the roads`, () => {
      const L = tireShopLayout(s);
      assert.ok(inside(L.lot, L.pad.minX, L.pad.minZ) && inside(L.lot, L.pad.maxX, L.pad.maxZ), 'pad inside lot');
      assert.ok(!onRoad(L.pad.minX, L.pad.minZ) && !onRoad(L.pad.maxX, L.pad.maxZ), 'pad clear of roads');
      assert.ok(!onRoad(L.sign.x, L.sign.z), 'sign clear of roads');
      assert.ok(inside(L.lot, L.sign.x, L.sign.z), 'sign inside lot');
      assert.equal(L.bays.length, 2);
      assert.equal(L.stacks.length, 2);
      assert.equal(L.columns.length, 4);
      assert.ok(baysInTireRadius(L), 'bays must be inside the tire radius');
      for(const b of L.bays) assert.ok(inside(L.lot, b.x, b.z), 'bay inside lot');
      for(const c of L.colliders)
        assert.ok(inside(L.lot, c.minX, c.minZ) && inside(L.lot, c.maxX, c.maxZ), 'collider inside lot');
      // colliders must not cover a bay point: a car parks ON it
      for(const c of L.colliders)
        for(const b of L.bays)
          assert.ok(!(b.x >= c.minX && b.x <= c.maxX && b.z >= c.minZ && b.z <= c.maxZ), 'no collider on a bay point');
      // each stack sits beside its own bay, not on top of it
      for(let i = 0; i < 2; i++){
        const d = Math.hypot(L.stacks[i].x - L.bays[i].x, L.stacks[i].z - L.bays[i].z);
        assert.ok(d > 1 && d < 6, `stack ${i} beside its bay, got ${d}`);
      }
    });
  }
  it('lots do not overlap each other, gas lots, repair lots or store lots, and layout is deterministic', () => {
    const Ls = tireShopLayouts();
    assert.equal(Ls.length, TIRE_SHOPS.length);
    const [a, b] = Ls;
    assert.ok(!overlaps(a.lot, b.lot), 'shop lots must not overlap');
    for(const L of Ls){
      for(const st of STATIONS)
        assert.ok(!overlaps(L.lot, stationLayout(st).lot), `${L.shop.name} lot overlaps a gas lot`);
      for(const rs of REPAIR_SHOPS)
        assert.ok(!overlaps(L.lot, shopLayout(rs).lot), `${L.shop.name} lot overlaps a repair lot`);
      for(const lot of STORE_LOTS)
        assert.ok(!overlaps(L.lot, lot), `${L.shop.name} lot overlaps a store lot`);
    }
    assert.deepEqual(tireShopLayout(TIRE_SHOPS[0]), tireShopLayout(TIRE_SHOPS[0]));
  });
  it('nearest helpers pick the closest shop and bay', () => {
    const ts = nearestTireShop(-167, -55);
    assert.equal(ts.shop.name, 'Arlington & Portage');
    assert.equal(ts.dist, 0);
    const nb = nearestTireBay(-167, -55 + 6);
    assert.ok(nb.dist <= 6, `bay near shop point, got ${nb.dist}`);
    // midpoint between the two bays is NOT a bay: parking there fits nothing
    const mid = nearestTireBay(TIRE_SHOPS[0].x, TIRE_SHOPS[0].z);
    assert.ok(mid.dist >= 5, `shop midpoint must not count as a bay, got ${mid.dist}`);
  });
  it('tire radius matches the gas-station convention', () => {
    assert.equal(TIRE_RADIUS, STATION_RADIUS);
  });
});

describe('tire billing', () => {
  it('charges the flat per-set price, nothing for zero or negative wear', () => {
    assert.equal(tireBill(1), TIRE_SET_COST);
    assert.equal(tireBill(0.5), Math.ceil(0.5 * TIRE_SET_COST));
    assert.equal(tireBill(0), 0);
    assert.equal(tireBill(-0.5), 0);
    assert.equal(tireBill(2), TIRE_SET_COST);
  });
});

describe('shop meshes', () => {
  it('group sits on the shop point, rotated for the bay-row axis', () => {
    for(const L of tireShopLayouts()){
      const g = buildTireShopMeshes(THREE, L);
      assert.equal(g.position.x, L.shop.x);
      assert.equal(g.position.z, L.shop.z);
      assert.equal(g.rotation.y, L.axis === 'x' ? 0 : Math.PI / 2);
      assert.ok(g.children.length >= 10, `canopy + columns + stacks + sign, got ${g.children.length}`);
    }
  });
  it('sign face texture is honoured when given', () => {
    const tex = new THREE.Texture();
    const g = buildTireShopMeshes(THREE, tireShopLayouts()[0], { signTexture: tex });
    const signMesh = g.children.find(m => m.geometry && m.geometry.type === 'BoxGeometry' && m.position.y === 7.2);
    assert.ok(signMesh, 'sign mesh present');
    assert.equal(signMesh.material.map, tex);
  });
});

describe('map markers', () => {
  it('tiresNear finds shops in range, nearest first, and skips far ones', () => {
    const near = tiresNear(-167, -55, 150);
    assert.equal(near.length, 1);
    assert.equal(near[0].name, 'Arlington & Portage');
    assert.equal(tiresNear(0, 0, 150).length, 0);
    const all = tiresNear(0, 0, 1000);
    assert.equal(all.length, 2);
    assert.ok(all[0].dist <= all[1].dist);
  });
});
