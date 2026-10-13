// Tests for js/custommap.js — tiles, templates, share codes, surfaces.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { TILES, TEMPLATES, newMap, paint, getTile, tileAt, tileCenter, surfaceAtMap, spawnOf, encodeMap, decodeMap, normalizeMap, rle, unrle, TILE } from '../js/custommap.js';
import { surfaceGrip } from '../js/world.js';

describe('custom maps', () => {
  it('every template builds a valid map with one spawn', () => {
    for(const k in TEMPLATES) for(const size of [32, 48, 64]){
      const m = newMap(k, size, 'summer');
      assert.equal(m.tiles.length, size * size, k);
      assert.ok(normalizeMap(m), k + ' normalizes');
      assert.ok((m.tiles.match(/S/g) || []).length <= 1, k + ' one spawn');
    }
  });
  it('painting with a brush, and only one spawn survives', () => {
    const m = newMap('blank', 32);
    paint(m, 10, 10, 'm', 2);
    assert.equal(getTile(m, 9, 9), 'm'); assert.equal(getTile(m, 11, 11), 'm'); assert.equal(getTile(m, 12, 12), '.');
    paint(m, 3, 3, 'S'); paint(m, 20, 20, 'S');
    assert.equal((m.tiles.match(/S/g) || []).length, 1);
    assert.equal(getTile(m, 20, 20), 'S');
  });
  it('world position maps to tiles and spawn sits on a tile centre', () => {
    const m = newMap('blank', 32);
    paint(m, 5, 7, 'W');
    const c = tileCenter(m, 5, 7);
    assert.equal(tileAt(m, c.x, c.z), 'W');
    assert.equal(surfaceAtMap(m, c.x, c.z), 'deep');
    paint(m, 1, 1, 'S');
    const sp = spawnOf(m), sc = tileCenter(m, 1, 1);
    assert.deepEqual(sp, sc);
    assert.ok(Math.abs(sp.x + 16 * TILE - 1.5 * TILE) < 1e-9);
  });
  it('theme decides what plain ground drives like', () => {
    const d = newMap('blank', 32, 'desert'), w = newMap('blank', 32, 'winter');
    assert.equal(surfaceAtMap(d, -150, -150), 'sand');
    assert.equal(surfaceAtMap(w, -150, -150), 'snow');
    assert.ok(surfaceGrip('snow').grip < surfaceGrip('road').grip);
  });
  it('share codes round-trip and reject junk', () => {
    const m = newMap('island', 48, 'night');
    const back = decodeMap(encodeMap(m));
    assert.equal(back.tiles, m.tiles); assert.equal(back.theme, 'night'); assert.equal(back.size, 48);
    assert.ok(encodeMap(m).length < 2000, 'codes stay short');
    assert.equal(decodeMap('nope'), null);
    assert.equal(decodeMap('CDMAP1:' + Buffer.from('{"s":48,"d":"5."}').toString('base64')), null);
  });
  it('rle is lossless', () => {
    const s = '....###mmmmmmmmmmmmW.' + '.'.repeat(300);
    assert.equal(unrle(rle(s)), s);
  });
});
