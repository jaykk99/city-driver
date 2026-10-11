// Tests for js/stunts.js — free-roam drift reward math.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { DRIFT_RATE, DRIFT_MIN_T, DRIFT_MIN_SPEED, newStuntState, stuntUpdate } from '../js/stunts.js';

const DT = 1 / 60;

function driftFor(st, seconds, speed = 20){
  let award = 0;
  const frames = Math.round(seconds / DT);
  for (let i = 0; i < frames; i++) award += stuntUpdate(st, true, speed, DT);
  return award;
}

describe('stunts', () => {
  it('pays $15/sec of drift when a qualifying drift ends', () => {
    const st = newStuntState();
    driftFor(st, 2.0);                       // 2s drift, still drifting -> no payout yet
    const award = stuntUpdate(st, false, 0, DT); // drift ends
    assert.equal(award, Math.round(2.0 * DRIFT_RATE));
  });

  it('pays nothing for drifts under the minimum time', () => {
    const st = newStuntState();
    driftFor(st, DRIFT_MIN_T - 0.2);
    assert.equal(stuntUpdate(st, false, 0, DT), 0);
  });

  it('pays nothing when drifting too slowly', () => {
    const st = newStuntState();
    driftFor(st, 2.0, DRIFT_MIN_SPEED - 1);   // slow "drift" does not accumulate
    assert.equal(stuntUpdate(st, false, 0, DT), 0);
  });

  it('resets cleanly so back-to-back drifts each pay', () => {
    const st = newStuntState();
    driftFor(st, 1.5);
    const a1 = stuntUpdate(st, false, 0, DT);
    driftFor(st, 1.5);
    const a2 = stuntUpdate(st, false, 0, DT);
    assert.ok(a1 > 0 && a2 > 0, `expected two payouts, got ${a1}, ${a2}`);
    assert.equal(a1, a2);
  });

  it('never pays while the drift is still going', () => {
    const st = newStuntState();
    const mid = driftFor(st, 3.0);
    assert.equal(mid, 0, 'payout must wait until the drift ends');
  });
});
