// Tests for js/skins.js (free skin editor data) and js/tutorial.js step logic.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { ensureSkins, normalizeCarSkin, normalizeOutfit, packLook, unpackLook, cleanName, carSkinFor } from '../js/skins.js';
import { stepDone, STEPS, TUTORIAL_REWARD } from '../js/tutorial.js';

describe('skins', () => {
  it('repairs bad skin data to safe defaults', () => {
    const k = normalizeCarSkin({ rims:'red', stripes:'zigzag', glow:-5, tint:'mirror' });
    assert.equal(k.stripes, 'none'); assert.equal(k.glow, null); assert.equal(k.tint, 'dark');
    const o = normalizeOutfit({ shirt:0x123456, hat:'tophat' });
    assert.equal(o.shirt, 0x123456); assert.equal(o.hat, 'none');
  });
  it('gives every save a name and keeps a chosen one', () => {
    assert.match(ensureSkins({ paint:{} }).name, /^Driver\d{4}$/);
    assert.equal(ensureSkins({ paint:{}, name:'Jay' }).name, 'Jay');
    assert.equal(cleanName('<b>Jay</b>!!'), 'bJayb!!');
    assert.ok(!/[<>]/.test(cleanName('<script>')));
  });
  it('round-trips a look through the multiplayer wire format', () => {
    const s = ensureSkins({ paint:{ sport:0xff0000 }, name:'Jay' });
    Object.assign(carSkinFor(s, 'sport'), { stripes:'dual', stripe:0xffffff, glow:0x22e6ff, tint:'limo', rims:0xc9962e });
    s.outfit.hat = 'crown';
    const L = unpackLook(JSON.parse(JSON.stringify(packLook(s, 'sport'))));
    assert.equal(L.paint, 0xff0000);
    assert.deepEqual(L.carSkin, s.carSkin.sport);
    assert.deepEqual(L.outfit, s.outfit);
  });
});

describe('tutorial', () => {
  it('pays $100,000 and has 6 steps ending with leaving a building', () => {
    assert.equal(TUTORIAL_REWARD, 100000);
    assert.equal(STEPS.length, 6);
    assert.equal(STEPS.at(-1).id, 'exit');
  });
  it('step conditions', () => {
    assert.ok(stepDone('drive', { reached:true }));
    assert.ok(!stepDone('drift', { driftTime:1 }));
    assert.ok(stepDone('drift', { driftTime:1.6 }));
    assert.ok(!stepDone('park', { reached:true, speed:20 }));
    assert.ok(stepDone('park', { reached:true, speed:1 }));
    assert.ok(stepDone('enter', { inside:3 }));
    assert.ok(!stepDone('exit', { inside:-1, wasInside:false }));
    assert.ok(stepDone('exit', { inside:-1, wasInside:true }));
  });
});
