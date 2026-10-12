// Tests for js/traffic.js pure helpers: light cycle + lane placement.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { lightState, laneXZ, CYCLE } from '../js/traffic.js';

describe('traffic lights', () => {
  it('never shows green both ways at once', () => {
    for(let t = 0; t < CYCLE * 2; t += 0.25){
      const ns = lightState('z', t), ew = lightState('x', t);
      assert.ok(!(ns !== 'red' && ew !== 'red'), `both open at t=${t}: ${ns}/${ew}`);
    }
  });
  it('cycles green -> yellow -> red for each direction', () => {
    assert.equal(lightState('z', 1), 'green');
    assert.equal(lightState('z', 7), 'yellow');
    assert.equal(lightState('z', 10), 'red');
    assert.equal(lightState('x', 10), 'green');
    assert.equal(lightState('x', 15), 'yellow');
  });
});

describe('lanes (right-hand traffic)', () => {
  it('northbound drives on the east side, eastbound on the south side', () => {
    const n = laneXZ('z', 37, -1, 0);
    assert.ok(n.x > 37 && n.h === 0);
    const e = laneXZ('x', -37, 1, 0);
    assert.ok(e.z > -37 && Math.abs(e.h + Math.PI / 2) < 1e-9);
  });
});
