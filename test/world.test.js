// Tests for js/world.js — the big map layout and surfaces.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { WORLD_HALF, GRID_HALF, ROADS, LAKES, FIELDS, OFFROAD, PUDDLES, surfaceAt, surfaceGrip, roadAt, WATER_DEPTH } from '../js/world.js';

describe('big map', () => {
  it('is 5x as wide as downtown', () => {
    assert.ok(WORLD_HALF >= GRID_HALF * 5);
  });
  it('has the Perimeter ring and highways out of town', () => {
    assert.equal(ROADS.filter(r => r.name === 'Perimeter Hwy').length, 4);
    assert.ok(ROADS.some(r => r.name === 'Portage Ave' && r.to >= WORLD_HALF));
  });
  it('classifies surfaces', () => {
    assert.equal(surfaceAt(0, 0), 'road');
    assert.equal(surfaceAt(380, -600), 'deep', 'Red River');
    assert.equal(surfaceAt(380, -555), 'road', 'bridge over the Red');
    assert.equal(surfaceAt(LAKES[0][0], LAKES[0][1]), 'deep');
    assert.equal(surfaceAt(LAKES[0][0] + LAKES[0][2] * 0.85, LAKES[0][1]), 'water');
    assert.equal(surfaceAt((OFFROAD.minX + OFFROAD.maxX) / 2, OFFROAD.minZ + 2), 'dirt');
    assert.equal(surfaceAt(1500, 1200), 'gravel');
  });
  it('fields never cover the off-road park or a lake', () => {
    for(const [x0, x1, z0, z1] of FIELDS){
      assert.ok(!(x1 > OFFROAD.minX && x0 < OFFROAD.maxX && z1 > OFFROAD.minZ && z0 < OFFROAD.maxZ));
      for(const [lx, lz, r] of LAKES) assert.ok(!(lx + r > x0 && lx - r < x1 && lz + r > z0 && lz - r < z1));
    }
  });
  it('water slows you down, a snorkel helps, puddles barely do', () => {
    const deep = surfaceGrip('deep', 0.5), snork = surfaceGrip('deep', 0.5, true), road = surfaceGrip('road');
    assert.ok(deep.speed < 0.4 && snork.speed > deep.speed && road.speed === 1);
    assert.ok(surfaceGrip('puddle').speed > 0.9);
    assert.ok(WATER_DEPTH.deep > WATER_DEPTH.water && WATER_DEPTH.water > WATER_DEPTH.puddle);
  });
  it('puddles sit on roads', () => {
    let onRoad = 0; for(const [x, z] of PUDDLES) if(roadAt(x, z) || (Math.abs(x) <= GRID_HALF && Math.abs(z) <= GRID_HALF)) onRoad++;
    assert.ok(onRoad / PUDDLES.length > 0.8);
  });
});
