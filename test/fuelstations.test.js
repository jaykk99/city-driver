// Tests for visible gas stations: the forecourt a player pulls into must be
// the place the fuel system actually fills from, clear of the roads, with
// nothing else spawned on top of it — and the meshes must land where the
// layout says they do (the rotated group frame is easy to get wrong).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { STATIONS, STATION_RADIUS } from '../js/fuel.js';
import { LINES, ROAD_W, GRID_HALF } from '../js/world.js';
import {
  stationLayout, stationLayouts, buildFuelStationMeshes, pumpsInRefuelRadius,
} from '../js/fuelstations.js';

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

describe('station data', () => {
  it('every station names a pump-row axis and its intersection corner', () => {
    assert.equal(STATIONS.length, 2);
    for(const s of STATIONS){
      assert.ok(s.axis === 'x' || s.axis === 'z', `${s.name} needs axis x or z`);
      assert.equal(s.toward.length, 2);
      assert.ok(s.toward.every(v => v === 1 || v === -1));
    }
  });
});

describe('station layout', () => {
  for(const s of STATIONS){
    it(`${s.name}: pad, pumps, columns and sign sit inside the lot, off the roads`, () => {
      const L = stationLayout(s);
      assert.ok(inside(L.lot, L.pad.minX, L.pad.minZ) && inside(L.lot, L.pad.maxX, L.pad.maxZ), 'pad inside lot');
      assert.ok(!onRoad(L.pad.minX, L.pad.minZ) && !onRoad(L.pad.maxX, L.pad.maxZ), 'pad clear of roads');
      assert.ok(!onRoad(L.sign.x, L.sign.z), 'sign clear of roads');
      assert.ok(inside(L.lot, L.sign.x, L.sign.z), 'sign inside lot');
      assert.equal(L.pumps.length, 2);
      assert.equal(L.columns.length, 4);
      assert.ok(pumpsInRefuelRadius(L), 'pumps must be inside the refuel radius');
      for(const c of L.colliders)
        assert.ok(inside(L.lot, c.minX, c.minZ) && inside(L.lot, c.maxX, c.maxZ), 'collider inside lot');
      // colliders must not cover the station point itself: a car parks ON it
      for(const c of L.colliders)
        assert.ok(!(s.x >= c.minX && s.x <= c.maxX && s.z >= c.minZ && s.z <= c.maxZ), 'no collider on the station point');
    });
  }
  it('lots do not overlap each other and layout is deterministic', () => {
    const Ls = stationLayouts();
    assert.equal(Ls.length, STATIONS.length);
    const [a, b] = Ls;
    assert.ok(a.lot.maxX < b.lot.minX || b.lot.maxX < a.lot.minX ||
      a.lot.maxZ < b.lot.minZ || b.lot.maxZ < a.lot.minZ, 'lots must not overlap');
    assert.deepEqual(stationLayout(STATIONS[0]), stationLayout(STATIONS[0]));
  });
});

describe('station meshes', () => {
  for(const s of STATIONS){
    it(`${s.name}: group lands on the station point with sign and columns where the layout says`, () => {
      const L = stationLayout(s);
      const g = buildFuelStationMeshes(THREE, L);
      assert.equal(g.children.length, 15, 'pad + canopy x2 + columns x4 + pumps x6 + pole + sign');
      assert.deepEqual([g.position.x, g.position.z], [s.x, s.z]);
      assert.equal(g.rotation.y, s.axis === 'x' ? 0 : Math.PI / 2);
      g.updateMatrixWorld(true);
      const wp = new THREE.Vector3();
      // children: 0 pad, 1-2 canopy, 3-6 columns, 7-12 pumps, 13 pole, 14 sign
      g.children[14].getWorldPosition(wp);
      assert.ok(Math.abs(wp.x - L.sign.x) < 0.01 && Math.abs(wp.z - L.sign.z) < 0.01,
        `sign mesh at (${wp.x}, ${wp.z}), layout says (${L.sign.x}, ${L.sign.z})`);
      for(let i = 0; i < 4; i++){
        g.children[3 + i].getWorldPosition(wp);
        assert.ok(Math.abs(wp.x - L.columns[i].x) < 0.01 && Math.abs(wp.z - L.columns[i].z) < 0.01,
          `column ${i} mesh at (${wp.x}, ${wp.z}), layout says (${L.columns[i].x}, ${L.columns[i].z})`);
      }
    });
  }
});
