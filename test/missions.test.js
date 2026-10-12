// Tests for js/missions.js generator.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generateMission, enemyStats, TOTAL_MISSIONS, EMERALD, EMERALD_FORTUNE } from '../js/missions.js';

describe('missions', () => {
  it('has 500 missions; #500 is Emerald with her fortune', () => {
    assert.equal(TOTAL_MISSIONS, 500);
    const m = generateMission(500);
    assert.equal(m.type, 'boss');
    assert.equal(m.reward, EMERALD_FORTUNE);
    assert.ok(EMERALD_FORTUNE >= 1000000, 'she is a millionaire');
    assert.equal(EMERALD.weapon, 'glock');
    assert.ok(EMERALD.outfit.hairLong);
  });
  it('is deterministic and every mission 1..499 is valid', () => {
    assert.deepEqual(generateMission(123), generateMission(123));
    const kinds = new Set();
    for(let n = 1; n < TOTAL_MISSIONS; n++){
      const m = generateMission(n);
      kinds.add(m.type);
      assert.ok(m.reward > 0 && m.points.length > 0, `mission ${n}`);
      for(const p of m.points) assert.ok(Math.abs(p.x) <= 190 && Math.abs(p.z) <= 190, `mission ${n} point in city`);
      if(m.type !== 'hit') assert.ok(m.timeLimit > 15, `mission ${n} has a fair timer`);
    }
    assert.deepEqual([...kinds].sort(), ['collect', 'deliver', 'hit', 'race']);
  });
  it('gets harder later', () => {
    assert.ok(enemyStats(400).hp > enemyStats(10).hp);
    assert.ok(enemyStats(400).accuracy > enemyStats(10).accuracy);
    assert.equal(generateMission(50).leader, true);
  });
});
