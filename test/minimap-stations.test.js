// Tests for gas stations on the map: a driver running low must be able to
// FIND a station, not just fill up once stumbled onto one. The radar only
// shows what is in range, the full map shows both — so the range filter
// behind both markers is what gets pinned down here (the canvas painting
// itself needs a browser and is not unit-tested).
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { STATIONS } from '../js/fuel.js';
import { stationsNear } from '../js/minimap.js';

describe('stationsNear', () => {
  it('finds the station you are standing on, and only it, at radar range', () => {
    const found = stationsNear(203, -55, 150);
    assert.equal(found.length, 1);
    assert.equal(found[0].name, 'Portage & Main');
    assert.equal(found[0].dist, 0);
  });

  it('finds nothing in the middle of downtown at radar range', () => {
    assert.deepEqual(stationsNear(0, 0, 150), []);
  });

  it('is inclusive at exactly the range boundary', () => {
    // Arlington & York sits ~241 m from downtown; at 241 both are in.
    const d = Math.hypot(-203 - 0, 129 - 0);
    const found = stationsNear(0, 0, d);
    assert.equal(found.length, STATIONS.length);
    assert.ok(found.every(s => s.dist <= d));
  });

  it('returns stations nearest first', () => {
    const found = stationsNear(0, 0, 10000);
    assert.equal(found.length, STATIONS.length);
    for(let i = 1; i < found.length; i++)
      assert.ok(found[i].dist >= found[i - 1].dist, 'not sorted by distance');
  });

  it('never mutates the shared station list', () => {
    const before = STATIONS.map(s => s.name).join(',');
    stationsNear(0, 0, 10000);
    assert.equal(STATIONS.map(s => s.name).join(','), before);
    assert.ok(STATIONS.every(s => !('dist' in s)), 'dist leaked onto STATIONS');
  });
});
