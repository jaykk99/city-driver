// Tests for js/forgecars.js — every game car has a Forge 3D design that fits the game's footprint.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CAR_DEFS } from '../js/cars.js';
import { FORGE_DESIGNS, forgeParamsFor } from '../js/forgecars.js';
import { tireSize } from '../js/forge/builders/vehiclesim.js';
import { designDims } from '../js/forge/builders/cargen.js';

describe('Forge car designs', () => {
  it('cover every car in the game', () => {
    for (const c of CAR_DEFS) assert.ok(FORGE_DESIGNS[c.id], `no Forge design for ${c.id}`);
  });

  it('tires match the game wheel radius (within 3 cm)', () => {
    for (const c of CAR_DEFS) {
      const P = forgeParamsFor(c.id, c.colors[0]);
      const R = tireSize(P, false).R;
      assert.ok(Math.abs(R - FORGE_DESIGNS[c.id].R) < 0.03, `${c.id}: tire R ${R.toFixed(3)} vs ${FORGE_DESIGNS[c.id].R}`);
    }
  });

  it('keep the game footprint (length, width, wheelbase)', () => {
    for (const c of CAR_DEFS) {
      const s = FORGE_DESIGNS[c.id];
      const d = designDims(forgeParamsFor(c.id, 0xffffff));
      assert.equal(d.L, s.len, `${c.id} length`);
      assert.equal(d.W, s.W, `${c.id} width`);
      assert.ok(Math.abs(d.wb - s.wb) < 0.01, `${c.id} wheelbase ${d.wb} vs ${s.wb}`);
    }
  });

  it('paint comes from the requested color and is deterministic', () => {
    const a = forgeParamsFor('muscle', 0x123456), b = forgeParamsFor('muscle', 0x123456);
    assert.equal(a.paint, '#123456');
    assert.deepEqual(a, b);
  });
});
