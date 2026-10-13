// Tests for js/tuning.js — parts-based stats, boost, traction, off-road, timeslips.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CAR_DEFS, carDef } from '../js/cars.js';
import { buildStats, defaultBuild, normalizeBuild, maxTireSize, migrateLegacy, dynoCurve, timeslip,
  boostTarget, ENGINES, ADDERS, BASE } from '../js/tuning.js';

const sport = carDef('sport');
const stock = buildStats(sport, defaultBuild());

describe('tuning: stock builds', () => {
  it('a stock build keeps the car close to its base stats', () => {
    for(const def of CAR_DEFS){
      const s = buildStats(def, defaultBuild());
      assert.ok(Math.abs(s.accel - def.stats.accel) < 1e-9, def.id + ' accel');
      assert.ok(Math.abs(s.topSpeed - def.stats.topSpeed) < 1e-9, def.id + ' top');
      assert.equal(s.hp, BASE[def.id].hp);
    }
  });
});

describe('tuning: power', () => {
  it('engine swaps and bolt-ons add horsepower', () => {
    const v8 = buildStats(sport, { engine:'v8' });
    assert.equal(v8.hp, 480);
    assert.ok(v8.accel > stock.accel && v8.topSpeed > stock.topSpeed);
    const bolt = buildStats(sport, { ecu:3, intake:3, exhaust:3 });
    assert.ok(Math.abs(bolt.hp - 260 * 1.3) < 1e-6);
  });
  it('boost multiplies power; PSI is capped by the power adder', () => {
    const t = buildStats(sport, { adder:'turbo_s', psi:99 });
    assert.equal(t.psi, 18, 'small turbo maxes at 18 psi');
    assert.ok(t.hp > 260 * 1.8);
    assert.ok(t.boostGain > 0 && t.boostKind === 'turbo');
    assert.equal(buildStats(sport, { psi:20 }).psi, 0, 'no adder = no boost');
  });
  it('turbos spool late, blowers are instant', () => {
    assert.equal(boostTarget('turbo', 0.55, 0.3, 1), 0);
    assert.equal(boostTarget('turbo', 0.55, 0.9, 1), 1);
    assert.ok(boostTarget('roots', 0, 0.05, 1) > 0.65);
  });
  it('final drive trades top speed for acceleration', () => {
    const short = buildStats(sport, { fd:4.8 }), tall = buildStats(sport, { fd:2.6 });
    assert.ok(short.accel > stock.accel && short.topSpeed < stock.topSpeed);
    assert.ok(tall.accel < stock.accel && tall.topSpeed > stock.topSpeed);
  });
  it('weight reduction improves acceleration', () => {
    assert.ok(buildStats(sport, { weight:3 }).accel > stock.accel);
  });
});

describe('tuning: tires, traction, off-road', () => {
  it('slicks and 4x4 raise launch traction', () => {
    assert.ok(buildStats(sport, { tires:'slicks' }).traction > stock.traction * 1.5);
    assert.ok(buildStats(sport, { body:['awd'] }).traction > stock.traction);
  });
  it('lift + big mud tires + 4x4 make a real off-roader', () => {
    const rig = buildStats(carDef('truck'), { lift:'l6', tireSize:4, tires:'mud', body:['awd', 'skid'] });
    const street = buildStats(carDef('truck'), defaultBuild());
    assert.ok(rig.offroad > 1 && street.offroad < 0.5);
    assert.ok(rig.handling < street.handling, 'tall rigs corner worse on the road');
  });
  it('big tires need lift to clear (no 40s on a stock truck)', () => {
    assert.equal(maxTireSize('stock'), 1);
    assert.equal(maxTireSize('l6'), 4);
    assert.equal(normalizeBuild({ lift:'stock', tireSize:4 }).tireSize, 1);
    assert.equal(normalizeBuild({ lift:'low', tireSize:2 }).tireSize, 0);
  });
});

describe('tuning: saves, dyno, timeslips', () => {
  it('normalizes junk and migrates the old 0-5 upgrade levels', () => {
    const n = normalizeBuild({ engine:'rocket', ecu:9, fd:'x', body:['awd', 'awd', 'jetpack'] });
    assert.equal(n.engine, 'stock'); assert.equal(n.ecu, 3); assert.equal(n.fd, 3.5); assert.deepEqual(n.body, ['awd']);
    const m = migrateLegacy({ engine:5, turbo:3, tires:3, nitro:2 });
    assert.equal(m.adder, 'turbo_s'); assert.equal(m.psi, 12); assert.equal(m.tires, 'sport'); assert.equal(m.nitrous, 100);
  });
  it('dyno peaks near the build horsepower', () => {
    const s = buildStats(sport, { engine:'v8' });
    const peak = Math.max(...dynoCurve(s).map(p => p.hp));
    assert.ok(peak > s.hp * 0.9 && peak <= s.hp * 1.02, 'peak ' + peak);
  });
  it('a built car runs a faster quarter mile than stock', () => {
    const a = timeslip(stock);
    const built = buildStats(sport, { engine:'bb', adder:'roots', psi:15, tires:'slicks', trans:'drag', weight:2 });
    const b = timeslip(built);
    assert.ok(a.et > 0 && b.et > 0);
    assert.ok(b.et < a.et - 1, `stock ${a.et.toFixed(2)}s vs built ${b.et.toFixed(2)}s`);
    assert.ok(b.trap > a.trap);
  });
  it('without traction a monster engine on street tires spins and loses time', () => {
    const big = { engine:'promod', adder:'twin', psi:30, trans:'drag' };
    const street = timeslip(buildStats(sport, big)), slick = timeslip(buildStats(sport, { ...big, tires:'slicks', body:['wheelie'] }));
    assert.ok(slick.sixtyFt < street.sixtyFt, '60ft: slicks ' + slick.sixtyFt + ' vs street ' + street.sixtyFt);
  });
});
