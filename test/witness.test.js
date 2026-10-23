// Tests for the crime-witness system: the pure counter in js/police.js,
// the crowd pools in js/npcs.js + js/traffic.js, and crime() returning the
// heat gained so callers can react only when heat actually rose.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  countWitnesses, WITNESS_RADIUS, WITNESS_LOUD_RADIUS,
  CRIME_HEAT, createPolice,
} from '../js/police.js';
import { createPeople } from '../js/npcs.js';
import { createTraffic } from '../js/traffic.js';

describe('countWitnesses (pure)', () => {
  it('counts units inside the radius, edge inclusive', () => {
    const units = [{ x:0, z:0 }, { x:3, z:4 }, { x:10, z:0 }];
    assert.equal(countWitnesses(units, 0, 0, 5), 2);     // 5.0 counts, 10 does not
    assert.equal(countWitnesses(units, 0, 0, 4.9), 1);
    assert.equal(countWitnesses(units, 0, 0, 0), 1);      // only the exact spot
  });
  it('an empty crowd sees nothing', () => {
    assert.equal(countWitnesses([], 0, 0, 50), 0);
  });
  it('loud crimes carry further than quiet ones', () => {
    assert.ok(WITNESS_LOUD_RADIUS > WITNESS_RADIUS,
      `loud=${WITNESS_LOUD_RADIUS} should exceed quiet=${WITNESS_RADIUS}`);
  });
});

describe('people.witnesses', () => {
  function makePeople(){
    return createPeople({
      scene:{ add(){}, remove(){} }, blood:{}, audio:{}, count:0,
      collide:(x, z) => ({ x, z }), shoot(){}, onPlayerHit(){},
    });
  }
  it('counts living peds near the scene and ignores the dead', () => {
    const people = makePeople();
    people.peds.push(
      { state:'walk', x:5, z:0 },     // in range
      { state:'flee', x:100, z:0 },   // too far
      { state:'dead', x:2, z:0 },     // dead tell no tales
    );
    assert.equal(people.witnesses(0, 0, 45), 1);
    assert.equal(people.witnesses(0, 0, 150), 2);
  });
  it('an empty street has no witnesses', () => {
    assert.equal(makePeople().witnesses(0, 0, 45), 0);
  });
});

describe('traffic.witnesses', () => {
  function makeTraffic(){
    return createTraffic({
      scene:{ add(){} }, lines:[0],
      buildCar(){ const g = { userData:{} }; return g; },
      applyCarSkin(){}, CAR_DEFS:[{ id:'sedan', colors:[0xff0000] }],
    });
  }
  it('counts occupied cars near the scene, not empty ones', () => {
    const t = makeTraffic();
    t.cars.push(
      { x:5, z:0, empty:false },    // driver sees it
      { x:200, z:0, empty:false },  // too far
      { x:3, z:0, empty:true },     // nobody inside to witness
    );
    assert.equal(t.witnesses(0, 0, 45), 1);
  });
  it('a street with no traffic has no witnesses', () => {
    assert.equal(makeTraffic().witnesses(0, 0, 45), 0);
  });
});

describe('police.crime returns heat gained', () => {
  function makePolice(){
    const player = { x:0, z:0, heading:0, speed:0, vx:0, vz:0, onFoot:true, alive:true };
    const scene = { add(){}, remove(){} };
    const mkGroup = () => ({ position:{ set(){} }, rotation:{ y:0 }, userData:{}, traverse(){}, add(){} });
    return createPolice({
      scene,
      buildCar: () => mkGroup(),
      buildCharacter: () => ({ position:{ set(){}, x:0, y:0, z:0 }, rotation:{ y:0, x:0 } }),
      getPlayer: () => player,
      setStars(){}, toast(){}, spark(){}, blood(){},
      audio: {}, highQuality: () => false,
    });
  }
  it('returns the full gain for a witnessed crime', () => {
    const police = makePolice();
    const gained = police.crime('gunshot', 0, 0, true);
    assert.ok(Math.abs(gained - CRIME_HEAT.gunshot) < 1e-9, `gained=${gained}`);
  });
  it('returns the scaled-down gain for an unwitnessed crime', () => {
    const police = makePolice();
    const gained = police.crime('gunshot', 0, 0, false);
    assert.ok(gained > 0 && gained < CRIME_HEAT.gunshot, `gained=${gained}`);
  });
  it('returns 0 on cooldown, for unknown kinds, and when the player is out', () => {
    const police = makePolice();
    police.crime('gunshot', 0, 0, true);
    assert.equal(police.crime('gunshot', 0, 0, true), 0, 'cooldown: no gain');
    assert.equal(police.crime('jaywalking', 0, 0, true), 0, 'unknown kind: no gain');
  });
});
