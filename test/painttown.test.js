// Tests for js/painttown.js — Paint the Town Red logic.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { PaintTown, PAY_BUILDING, PAY_CELL, CAR_REACH, ROAD_CELL, MILESTONES } from '../js/painttown.js';
import { LINES, ROAD_W, GRID_HALF } from '../js/world.js';

const bld = [
  { id:0, minX:20, maxX:40, minZ:20, maxZ:40, paintable:true },
  { id:1, minX:100, maxX:120, minZ:100, maxZ:120, paintable:true },
  { id:2, minX:200, maxX:220, minZ:200, maxZ:220, paintable:false },   // landmark
];
const mk = () => { const p = new PaintTown(bld, LINES, ROAD_W, GRID_HALF); p.active = true; return p; };

describe('painttown', () => {
  it('does nothing while off', () => {
    const p = mk(); p.active = false;
    const ev = p.update(LINES[0], 0);
    assert.equal(ev.cells, 0); assert.equal(p.progress, 0);
  });
  it('skips unpaintable buildings', () => {
    assert.equal(mk().buildings.length, 2);
  });
  it('paints road cells under the car, once each', () => {
    const p = mk();
    const a = p.update(LINES[0], 1);
    assert.equal(a.cells, 1); assert.equal(a.pay, PAY_CELL);
    assert.equal(p.update(LINES[0], 2).cells, 0);
    assert.equal(p.update(LINES[0], 1 + ROAD_CELL).cells, 1);
  });
  it('an intersection paints both roads', () => {
    assert.equal(mk().update(LINES[2], LINES[3]).cells, 2);
  });
  it('off-road paints no street', () => {
    assert.equal(mk().update(LINES[0] + ROAD_W, LINES[0] + ROAD_W).cells, 0);
  });
  it('paints buildings within reach, not beyond', () => {
    const p = mk();
    assert.deepEqual(p.update(20 - CAR_REACH - 1, 30).buildings, []);
    const ev = p.update(20 - CAR_REACH + 0.5, 30);
    assert.deepEqual(ev.buildings, [0]);
    assert.ok(ev.pay >= PAY_BUILDING);
    assert.deepEqual(p.update(19, 30).buildings, []);
  });
  it('on foot needs to be closer and lays no street paint', () => {
    const p = mk();
    assert.deepEqual(p.update(14, 30, true).buildings, []);
    assert.deepEqual(p.update(18, 30, true).buildings, [0]);
    assert.equal(p.update(LINES[0], 0, true).cells, 0);
  });
  it('hits every milestone and reaches 100%', () => {
    const p = mk();
    let ms = 0;
    for(const b of p.buildings){ const ev = p.update((b.minX + b.maxX) / 2, (b.minZ + b.maxZ) / 2); if(ev.milestone) ms++; }
    for(const c of LINES) for(let t = -GRID_HALF; t <= GRID_HALF; t += 2){
      for(const ev of [p.update(c, t), p.update(t, c)]) if(ev.milestone) ms++;
    }
    assert.equal(p.paintedC.size, p.totalCells);
    assert.ok(Math.abs(p.progress - 1) < 1e-9);
    assert.equal(p.milestoneIdx, MILESTONES.length);
    assert.ok(ms >= 1);
  });
  it('cellCenter maps back onto the same cell', () => {
    const p = mk();
    for(const key of [0, 5, p.perLine + 3, p.totalCells - 1]){
      const c = p.cellCenter(key);
      assert.ok(p.cellsAt(c.x, c.z).includes(key), 'key ' + key);
    }
  });
  it('serializes and reloads', () => {
    const p = mk();
    p.update(LINES[0], 1); p.update(25, 25);
    const q = mk(); q.load(JSON.parse(JSON.stringify(p.serialize())));
    assert.equal(q.paintedC.size, 1); assert.ok(q.paintedB.has(0));
    assert.equal(q.progress, p.progress);
    q.reset(); assert.equal(q.progress, 0);
  });
});
