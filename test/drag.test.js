// Tests for js/drag.js — christmas-tree drag race math.
// Covers the exported pure functions: shift windows, launch accel,
// shift outcomes, AI pacing curve, winner decision, and payouts.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  QUARTER_M, GEAR_TOP_FRAC, GEAR_MULT, SHIFT_LO, SHIFT_HI,
  LIMITER_T, RACE_TIMEOUT, MPH,
  aiTargetET, _newPlayerSim, _playerAccel, shiftOutcome, applyShift,
  _newAiSim, _aiUpdate, decideWinner, payoutForRace, resultTitle,
} from '../js/drag.js';

const STATS = { topSpeed: 52, accel: 16, handling: 1, grip: 1, nitroTime: 3.2, nitroPower: 1.35 };

describe('tuning constants', () => {
  it('quarter mile and gear layout are sane', () => {
    assert.equal(QUARTER_M, 402);
    assert.equal(GEAR_TOP_FRAC.length, 5);
    assert.equal(GEAR_MULT.length, 5);
    for (let i = 1; i < GEAR_TOP_FRAC.length; i++) {
      assert.ok(GEAR_TOP_FRAC[i] > GEAR_TOP_FRAC[i - 1], 'gear tops must ascend');
    }
    assert.equal(GEAR_TOP_FRAC[4], 1.0, 'top gear must reach full topSpeed');
  });

  it('perfect-shift window sits inside the rpm range', () => {
    assert.equal(SHIFT_LO, 0.80);
    assert.equal(SHIFT_HI, 0.97);
    assert.ok(SHIFT_LO < SHIFT_HI && SHIFT_HI <= 1);
    assert.equal(LIMITER_T, 0.8);
    assert.equal(RACE_TIMEOUT, 45);
    assert.equal(MPH, 2.2);
  });
});

describe('shiftOutcome', () => {
  it('classifies rpm against the window edges', () => {
    assert.equal(shiftOutcome(0.79), 'early');
    assert.equal(shiftOutcome(0.80), 'perfect');
    assert.equal(shiftOutcome(0.90), 'perfect');
    assert.equal(shiftOutcome(0.97), 'perfect');
    assert.equal(shiftOutcome(0.98), 'late');
    assert.equal(shiftOutcome(1.05), 'late');
  });
});

describe('applyShift', () => {
  const mk = (rpm, gear = 0, speed = 20) =>
    ({ ..._newPlayerSim(STATS), rpm, gear, speed, bogMul: 1, limiterT: 0.5 });

  it('perfect shift: gear up, small speed boost, limiter reset', () => {
    const s = mk(0.85);
    assert.equal(applyShift(s), 'perfect');
    assert.equal(s.gear, 1);
    assert.ok(Math.abs(s.speed - 20 * 1.015) < 1e-9, `speed ${s.speed}`);
    assert.equal(s.limiterT, 0);
  });

  it('early shift: bogged — speed cut and bog multiplier', () => {
    const s = mk(0.5);
    assert.equal(applyShift(s), 'early');
    assert.equal(s.gear, 1);
    assert.ok(Math.abs(s.speed - 20 * 0.93) < 1e-9, `speed ${s.speed}`);
    assert.equal(s.bogMul, 0.75);
  });

  it('late shift: bogged the same way', () => {
    const s = mk(1.0);
    assert.equal(applyShift(s), 'late');
    assert.ok(Math.abs(s.speed - 20 * 0.93) < 1e-9);
  });

  it('does nothing at top gear', () => {
    const s = mk(0.85, 4, 40);
    assert.equal(applyShift(s), null);
    assert.equal(s.gear, 4);
    assert.equal(s.speed, 40);
  });
});

describe('_playerAccel', () => {
  it('accelerates off the line and reports rpm', () => {
    const s = _newPlayerSim(STATS);
    for (let i = 0; i < 60; i++) _playerAccel(s, 1, 1 / 60);
    assert.ok(s.speed > 5, `should be moving, speed=${s.speed}`);
    assert.ok(s.dist > 2, `should cover ground, dist=${s.dist}`);
    const gearTop = GEAR_TOP_FRAC[s.gear] * STATS.topSpeed;
    assert.ok(Math.abs(s.rpm - Math.min(1.06, s.speed / gearTop)) < 1e-9, `rpm ${s.rpm}`);
  });

  it('never goes backwards under its own throttle logic', () => {
    const s = _newPlayerSim(STATS);
    _playerAccel(s, 0, 1 / 60);
    assert.ok(s.speed >= 0);
  });

  it('bog multiplier recovers toward 1', () => {
    const s = _newPlayerSim(STATS);
    s.bogMul = 0.75;
    for (let i = 0; i < 180; i++) _playerAccel(s, 1, 1 / 60);
    assert.ok(s.bogMul > 0.99, `bogMul should recover, got ${s.bogMul}`);
  });

  it('higher gears pull weaker off the line (gear multipliers matter)', () => {
    const g1 = { ..._newPlayerSim(STATS), gear: 0 };
    const g3 = { ..._newPlayerSim(STATS), gear: 2 };
    _playerAccel(g1, 1, 1 / 60);
    _playerAccel(g3, 1, 1 / 60);
    assert.ok(g1.speed > g3.speed, `1st (${g1.speed}) should beat 3rd (${g3.speed}) off the line`);
  });
});

describe('AI sim', () => {
  it('aiTargetET stays in the clamped 8.5–17s band', () => {
    for (let i = 0; i < 25; i++) {
      const et = aiTargetET(STATS);
      assert.ok(et >= 8.5 * 0.85 - 1e-9 && et <= 17 * 1.15 + 1e-9, `et ${et}`);
    }
  });

  it('extreme stats hit the clamps', () => {
    const rocket = aiTargetET({ topSpeed: 200, accel: 200 });
    assert.ok(rocket >= 7.2 && rocket <= 9.8, `rocket et ${rocket}`);
    const slug = aiTargetET({ topSpeed: 1, accel: 1 });
    assert.ok(slug >= 14.4 && slug <= 19.6, `slug et ${slug}`);
  });

  it('faster cars target lower ETs on average', () => {
    const avg = (stats, n = 30) => {
      let t = 0;
      for (let i = 0; i < n; i++) t += aiTargetET(stats);
      return t / n;
    };
    const sport = avg({ topSpeed: 52, accel: 16 });
    const track = avg({ topSpeed: 68, accel: 23 });
    assert.ok(track < sport, `track ${track} should beat sport ${sport}`);
  });

  it('_aiUpdate: parked until launch, then follows the pace curve', () => {
    const s = _newAiSim(STATS);
    _aiUpdate(s, 5, 1 / 60);
    assert.equal(s.dist, 0, 'no launch yet');
    assert.ok(s.reactDelay >= 0.15 && s.reactDelay <= 0.5, `reactDelay ${s.reactDelay}`);
    s.launched = true;
    s.launchT = 0;
    _aiUpdate(s, 1, 1 / 60);
    const expected = s.top * (1 - Math.exp(-s.k * 1));
    assert.ok(Math.abs(s.speed - expected) < 1e-9, `pace curve speed ${s.speed}`);
    assert.ok(s.dist > 0);
    const v1 = s.speed;
    _aiUpdate(s, 2, 1 / 60);
    assert.ok(s.speed > v1, 'AI speed should rise along the curve');
  });
});

describe('decideWinner', () => {
  it('false start always loses', () => {
    assert.equal(decideWinner({ falseStart: true, pET: 9, aET: 12, pDist: 402, aDist: 402 }), false);
  });

  it('first across the line wins; ties go to the player', () => {
    assert.equal(decideWinner({ pET: 10.5, aET: 11.0, pDist: 402, aDist: 402 }), true);
    assert.equal(decideWinner({ pET: 11.0, aET: 10.5, pDist: 402, aDist: 402 }), false);
    assert.equal(decideWinner({ pET: 10.5, aET: 10.5, pDist: 402, aDist: 402 }), true);
  });

  it('sole finisher wins', () => {
    assert.equal(decideWinner({ pET: 12.0, aET: null, pDist: 402, aDist: 300 }), true);
    assert.equal(decideWinner({ pET: null, aET: 12.0, pDist: 300, aDist: 402 }), false);
  });

  it('double DNF goes to whoever is further along', () => {
    assert.equal(decideWinner({ pET: null, aET: null, pDist: 300, aDist: 200 }), true);
    assert.equal(decideWinner({ pET: null, aET: null, pDist: 150, aDist: 200 }), false);
  });
});

describe('payoutForRace', () => {
  it('pays 100 consolation on a loss', () => {
    assert.equal(payoutForRace(false, 12, 10), 100);
    assert.equal(payoutForRace(false, null, 10), 100);
  });

  it('pays 400 base on a win with no margin', () => {
    assert.equal(payoutForRace(true, 10.5, 10.5), 400);
  });

  it('adds 150 per tenth of winning margin', () => {
    assert.equal(payoutForRace(true, 10.2, 10.5), 850);   // 0.3s margin -> 3 tenths
    assert.equal(payoutForRace(true, 9.45, 10.5), 2050);  // 1.05s margin -> round(10.5)=11
  });
});

describe('resultTitle', () => {
  it('labels wins, losses, and disqualifications', () => {
    assert.equal(resultTitle(true, false), '🏆 WIN!');
    assert.equal(resultTitle(false, false), '😞 LOSE');
    assert.equal(resultTitle(false, true), '🚫 DISQUALIFIED');
  });
});
