// Tests for taxi fares on custom maps: the cab shift must work on player
// streets, not just the main-city grid — hailers wait on real roads near
// the cab, destinations are a real trip away, and maps with no streets
// worth driving get no fares at all instead of a broken one.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  MIN_TRIP, CUSTOM_MIN_TRIP, HAIL_SEARCH, TAXI_BASE_FARE,
  roadTilesOf, customMapPickers, createTaxiJob,
} from '../js/taxi.js';
import { newMap, paint, getTile, tileAt, tileCenter, spawnOf } from '../js/custommap.js';
import { GRID_HALF } from '../js/world.js';

// Same deterministic rng shape as taxi.test.js, so retries explore.
function cyclingRng(){
  const seq = [0.1, 0.9, 0.3, 0.7, 0.55, 0.2, 0.8, 0.45, 0.65, 0.05, 0.95, 0.35];
  let i = 0;
  return () => seq[(i++) % seq.length];
}
const OFFSET = { x:20000, z:0 };
const at = (x, z, speed = 0, hp = 100) => ({ x, z, speed, hp, maxHp: 100 });
const toLocal = p => ({ x:p.x - OFFSET.x, z:p.z - OFFSET.z });

describe('roadTilesOf', () => {
  it('finds the streets, and only the streets', () => {
    const circuit = newMap('circuit', 48);
    const roads = roadTilesOf(circuit);
    assert.ok(roads.length > 100, 'a street circuit has many road tiles');
    for(const t of roads) assert.ok(getTile(circuit, t.i, t.j) === '#' || getTile(circuit, t.i, t.j) === 'S');
    assert.ok(roads.every(t => Math.abs(t.x - tileCenter(circuit, t.i, t.j).x) < 1e-9));
  });
  it('a mud bog has only its spawn tile, a blank field too', () => {
    assert.equal(roadTilesOf(newMap('mudbog', 48)).length, 1, 'mudbog: spawn only');
    assert.equal(roadTilesOf(newMap('blank', 32)).length, 1, 'blank: spawn only');
  });
  it('junk in, empty out', () => {
    assert.deepEqual(roadTilesOf(null), []);
    assert.deepEqual(roadTilesOf({}), []);
    assert.deepEqual(roadTilesOf({ size:32, tiles:12 }), []);
  });
});

describe('custom pickers', () => {
  it('hailers wait on a road near the cab, in world coords', () => {
    const map = newMap('circuit', 48);
    const pickers = customMapPickers(map, OFFSET);
    const spawn = spawnOf(map), cab = { x:spawn.x + OFFSET.x, z:spawn.z + OFFSET.z };
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const p = pickers.hailNear(cab.x, cab.z, rng);
      assert.ok(p, 'a hail exists on a roaded map');
      assert.ok(Math.abs(p.x - OFFSET.x) < 400 && Math.abs(p.z - OFFSET.z) < 400, 'world coords, on the custom map');
      assert.ok(Math.hypot(p.x - cab.x, p.z - cab.z) <= HAIL_SEARCH + 12, 'near the cab');
      // Standing at a road edge: the tile under the hailer is still road.
      const ch = tileAt(map, p.x - OFFSET.x, p.z - OFFSET.z);
      assert.ok(ch === '#' || ch === 'S', 'hailer stands on road, got ' + ch);
    }
  });
  it('destinations are a real trip away on a big map', () => {
    const map = newMap('circuit', 48);
    const pickers = customMapPickers(map, OFFSET);
    const rng = cyclingRng();
    for(let k = 0; k < 20; k++){
      const from = { x:(rng() - 0.5) * 400 + OFFSET.x, z:(rng() - 0.5) * 400 + OFFSET.z };
      const d = pickers.destFar(from, rng);
      assert.ok(d, 'a destination exists');
      assert.ok(Math.hypot(d.x - from.x, d.z - from.z) >= MIN_TRIP, 'a real trip away');
      assert.ok(tileAt(map, d.x - OFFSET.x, d.z - OFFSET.z) === '#' || tileAt(map, d.x - OFFSET.x, d.z - OFFSET.z) === 'S', 'destination is on a road');
    }
  });
  it('no hailers off the streets, and none on a roadless map', () => {
    // A map with streets only in one corner: the cab in the far corner is
    // 300+ m from the nearest road, so nobody hails from a field.
    const far = newMap('blank', 48);
    for(let i = 4; i <= 8; i++) paint(far, i, 4, '#');
    const cabFar = tileCenter(far, 40, 40);
    assert.equal(customMapPickers(far, OFFSET).hailNear(cabFar.x + OFFSET.x, cabFar.z + OFFSET.z, cyclingRng()), null, 'no hail from a field');
    assert.equal(customMapPickers(newMap('mudbog', 48), OFFSET).hailNear(OFFSET.x, OFFSET.z, cyclingRng()), null, 'mud bog has no streets');
    assert.equal(customMapPickers(newMap('blank', 32), OFFSET).hailNear(OFFSET.x, OFFSET.z, cyclingRng()), null, 'a lone spawn is no trip');
  });
  it('a short street still carries a short fare, but not a pointless one', () => {
    // A hand-built map: one 300 m street across the middle.
    const map = newMap('blank', 32);
    for(let i = 4; i <= 28; i++) paint(map, i, 16, '#');
    const pickers = customMapPickers(map, OFFSET);
    const mid = tileCenter(map, 16, 16);
    const d = pickers.destFar({ x:mid.x + OFFSET.x, z:mid.z + OFFSET.z }, cyclingRng());
    // The street is 300 m end to end, so from the middle the farthest
    // road is 144 m: short of a full MIN_TRIP fare, still a real trip.
    assert.ok(d, 'a destination exists on the short street');
    const trip = Math.hypot(d.x - mid.x - OFFSET.x, d.z - mid.z - OFFSET.z);
    assert.ok(trip >= CUSTOM_MIN_TRIP && trip <= 150, 'short but real trip, got ' + trip);
    // And a street too short for any real trip: two tiles flanking the
    // spawn, 12 m each way — every road on the map is within 24 m.
    const tiny = newMap('blank', 32);
    paint(tiny, 15, 16, '#'); paint(tiny, 17, 16, '#');
    const sp = spawnOf(tiny);
    assert.equal(customMapPickers(tiny, OFFSET).destFar({ x:sp.x + OFFSET.x, z:sp.z + OFFSET.z }, cyclingRng()), null, '24 m is not a fare');
    assert.equal(customMapPickers(tiny, OFFSET).hailNear(sp.x + OFFSET.x, sp.z + OFFSET.z, cyclingRng()), null, 'no hail when no trip exists');
  });
});

describe('job on a custom map', () => {
  // Drive a full fare on the street circuit, in world coords.
  function driveCustomFare(){
    const map = newMap('circuit', 48);
    const job = createTaxiJob(cyclingRng(), customMapPickers(map, OFFSET));
    const spawn = spawnOf(map), cab = at(spawn.x + OFFSET.x, spawn.z + OFFSET.z);
    assert.deepEqual(job.update(30, cab), [], 'no hail before the cab');
    job.setInCab(true);
    let evs = [];
    for(let k = 0; k < 30 && !evs.some(e => e.type === 'hail'); k++) evs = job.update(5, cab);
    const hail = evs.find(e => e.type === 'hail');
    assert.ok(hail, 'a hail arrives on the custom map');
    assert.equal(job.state, 'hail');
    assert.deepEqual(job.target, hail.point);
    const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0));
    assert.equal(pickup.length, 1);
    assert.equal(pickup[0].type, 'pickup');
    assert.equal(job.state, 'ride');
    assert.ok(Math.hypot(pickup[0].dest.x - hail.point.x, pickup[0].dest.z - hail.point.z) >= MIN_TRIP);
    const d = pickup[0].dest;
    const drop = job.update(0.1, at(d.x, d.z, 0));
    assert.equal(drop.length, 1);
    assert.equal(drop[0].type, 'dropoff');
    assert.equal(drop[0].fare, pickup[0].fareEstimate, 'payout fare is the meter fare');
    assert.equal(drop[0].total, drop[0].fare + drop[0].tip);
    assert.equal(job.state, 'cooldown');
    return { job, map, hail, pickup, drop };
  }

  it('a full fare pays base + distance + on-time tip on custom streets', () => {
    const { drop } = driveCustomFare();
    assert.ok(drop[0].fare > TAXI_BASE_FARE);
    assert.ok(drop[0].tip > 0, 'a quick clean ride earns the tip');
  });
  it('the destination is on a road, the hailer never on a building', () => {
    const { map, hail, pickup } = driveCustomFare();
    assert.ok(tileAt(map, toLocal(pickup[0].dest).x, toLocal(pickup[0].dest).z) === '#' || tileAt(map, toLocal(pickup[0].dest).x, toLocal(pickup[0].dest).z) === 'S', 'dropoff on a road');
    assert.ok(tileAt(map, toLocal(hail.point).x, toLocal(hail.point).z) === '#' || tileAt(map, toLocal(hail.point).x, toLocal(hail.point).z) === 'S', 'hailer on a road');
  });
  it('no fares ever hail on a roadless map — the job just waits', () => {
    const map = newMap('mudbog', 48);
    const job = createTaxiJob(cyclingRng(), customMapPickers(map, OFFSET));
    job.setInCab(true);
    let hailed = false;
    for(let k = 0; k < 60; k++){
      const evs = job.update(5, at(OFFSET.x, OFFSET.z));
      if(evs.some(e => e.type === 'hail')) hailed = true;
    }
    assert.equal(hailed, false, 'no hail without streets');
    assert.equal(job.state, 'idle', 'still waiting, not wedged');
  });
  it('setPickers swaps worlds and back', () => {
    const map = newMap('circuit', 48);
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    // Main city first: hail points inside the city grid, no offset.
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail && Math.abs(hail.point.x) <= GRID_HALF, 'main-city hail');
    job.abandon();
    // Swap to the custom map: hails land on its streets, at the offset.
    job.setPickers(customMapPickers(map, OFFSET));
    const spawn = spawnOf(map);
    hail = null;
    for(let k = 0; k < 60 && !hail; k++){ const evs = job.update(5, at(spawn.x + OFFSET.x, spawn.z + OFFSET.z)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail, 'custom-map hail after the swap');
    assert.ok(Math.abs(hail.point.x - OFFSET.x) < 400, 'hail is on the custom map');
    job.abandon();
    // And back: null restores the main-city grid.
    job.setPickers(null);
    hail = null;
    for(let k = 0; k < 60 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail && Math.abs(hail.point.x) <= GRID_HALF, 'back on the main-city grid');
  });
  it('a fare survives the world swap only if it was already over', () => {
    // setPickers is a picker swap, not a fare killer: main.js abandons
    // live fares before swapping. The job itself must not invent a fare
    // from a stale point — after abandon + swap, the next hail is custom.
    const map = newMap('circuit', 48);
    const job = createTaxiJob(cyclingRng());
    job.setInCab(true);
    let hail = null;
    for(let k = 0; k < 30 && !hail; k++){ const evs = job.update(5, at(0, 0)); hail = evs.find(e => e.type === 'hail'); }
    assert.ok(hail);
    assert.equal(job.abandon(), true);
    job.setPickers(customMapPickers(map, OFFSET));
    assert.equal(job.state, 'cooldown');
    assert.equal(job.target, null, 'no stale target survives the swap');
  });
});
