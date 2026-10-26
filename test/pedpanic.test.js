// Tests for pedestrians fleeing gunfire: a shot that hits nothing used to
// leave every nearby sidewalk ped strolling calmly through the shootout
// (only drivers panicked, via traffic.panicAt, and peds only fled once
// someone was actually hit). Gunfire now scares them too, via people.scare.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { createPeople } from '../js/npcs.js';

function makePeople(){
  return createPeople({
    scene:{ add(){}, remove(){} }, blood:{}, audio:{}, count:0,
    collide:(x, z) => ({ x, z }), shoot(){}, onPlayerHit(){},
  });
}
// scare only reads x/z/state and writes state/flee/dir, so plain peds with
// loop fields are enough — same style as the people.witnesses tests.
const ped = (x, z, state = 'walk') => ({ state, x, z, cx:0, cz:0, p:0, dir:1, flee:0 });

describe('pedestrians flee gunfire', () => {
  it('scares nearby peds, leaves distant ones walking, ignores the dead', () => {
    const people = makePeople();
    const near = ped(5, 0), far = ped(100, 0), dead = ped(2, 0, 'dead');
    people.peds.push(near, far, dead);
    people.scare(0, 0, 45);
    assert.equal(near.state, 'flee');
    assert.ok(near.flee > 0, 'fleeing ped needs a running timer');
    assert.equal(far.state, 'walk');
    assert.equal(dead.state, 'dead');
  });
  it('radius edge is exclusive: a ped exactly at the radius keeps walking', () => {
    const people = makePeople();
    const edge = ped(45, 0), inside = ped(44, 0);
    people.peds.push(edge, inside);
    people.scare(0, 0, 45);
    assert.equal(edge.state, 'walk');
    assert.equal(inside.state, 'flee');
  });
  it('fresh gunfire refreshes the flee timer, so a shootout keeps peds running', () => {
    const people = makePeople();
    const p = ped(5, 0);
    people.peds.push(p);
    people.scare(0, 0, 45);
    p.flee = 1;                       // almost calmed down
    people.scare(0, 0, 45);           // another shot rings out
    assert.ok(p.flee > 1, `timer should refresh, got ${p.flee}`);
    assert.equal(p.state, 'flee');
  });
});
