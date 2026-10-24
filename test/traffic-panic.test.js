// Tests for traffic panic: gunfire nearby panics drivers, and a panicked
// driver runs red lights instead of stopping at them like a calm one.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createTraffic, PANIC_RADIUS, PANIC_TIME } from '../js/traffic.js';

function mkGroup(){
  return { userData:{ wheels:[], flashers:null }, position:{ set(){} }, rotation:{}, add(){} };
}
function makeTraffic(lines){
  return createTraffic({
    scene:{ add(){}, remove(){} }, lines,
    buildCar:() => mkGroup(),
    applyCarSkin(){}, CAR_DEFS:[{ id:'sedan', colors:[0xff0000] }],
  });
}

describe('traffic.panicAt', () => {
  it('panics occupied cars within radius, skips empty cars and far cars, returns the count', () => {
    const t = makeTraffic([0]);
    t.cars.push(
      { x:5, z:0, empty:false, panic:0 },    // in range
      { x:200, z:0, empty:false, panic:0 },  // too far
      { x:3, z:0, empty:true, panic:0 },     // nobody inside to scare
      { x:0, z:PANIC_RADIUS, empty:false, panic:0 },  // edge inclusive
    );
    assert.equal(t.panicAt(0, 0), 2);
    assert.equal(t.cars[0].panic, PANIC_TIME);
    assert.equal(t.cars[1].panic, 0);
    assert.equal(t.cars[2].panic, 0);
    assert.equal(t.cars[3].panic, PANIC_TIME);
  });
  it('never shortens a panic already running, and honours a custom radius', () => {
    const t = makeTraffic([0]);
    t.cars.push({ x:5, z:0, empty:false, panic:30 });
    assert.equal(t.panicAt(0, 0, 10), 1);
    assert.equal(t.cars[0].panic, 30);
    assert.equal(t.panicAt(0, 0, 4), 0);
  });
  it('a street with no traffic panics nobody', () => {
    assert.equal(makeTraffic([0]).panicAt(0, 0), 0);
  });
});

describe('panicked drivers run red lights', () => {
  // One car on road line -40 heading toward the crossing at 40, stopped
  // just short of the stop line while the light is red. Drive it for 1s
  // and compare: calm car crawls to a stop, panicked car blows through.
  function setup(panic){
    const t = makeTraffic([-40, 40]);
    const player = { x:0, z:200 };
    t.update(5, player, null);   // advance the clock into a red phase, spawn cars
    t.setCount(1);               // keep exactly one car from now on
    const c = t.cars[0];
    Object.assign(c, { axis:'z', li:0, dir:1, s:28.8, x:-43.5, z:28.8, h:Math.PI,
      cruise:10, speed:10, panic, wait:0 });
    t.update(1.0, player, null);
    return c;
  }
  it('a calm driver stops at the red light', () => {
    const c = setup(0);
    assert.ok(c.speed < 3, `calm car should stop, speed=${c.speed}`);
    assert.ok(c.s < 34, `calm car should hold short of the crossing, s=${c.s}`);
  });
  it('a panicked driver keeps speed through the red light', () => {
    const c = setup(PANIC_TIME);
    assert.ok(c.speed > 12, `panicked car should floor it, speed=${c.speed}`);
    assert.ok(c.s > 38, `panicked car should blow past the stop line, s=${c.s}`);
  });
});
