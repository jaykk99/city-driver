// Tests for the taxi hailer ped's wave: the animator's wave option must
// raise the right arm well above a standing idle pose, and the arm must
// actually oscillate with the phase — a raised-but-frozen arm is not a
// wave, and a wave that never rises is not a hail.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildCharacter, animateCharacter, resetPose } from '../js/character.js';

const OUTFIT = { shirt:0xffc400, pants:0x2d3748, skin:0xc68a62, hair:0x2a1a10, hat:'none', hairLong:false };

// Drive the joint easing to convergence at one phase and read the right
// shoulder's sideways angle (arms[1] is the right shoulder, rotation.z is
// the sideways raise: ~0.07 standing idle, ~2.25 waving).
function waveZAt(root, phase){
  resetPose(root);
  for(let k = 0; k < 6; k++) animateCharacter(root, phase, 0, false, 0.1, { wave:true });
  return root.userData.arms[1].rotation.z;
}

describe('hailer wave', () => {
  it('raises the right arm far above the idle pose', () => {
    const root = buildCharacter(OUTFIT);
    resetPose(root);
    for(let k = 0; k < 6; k++) animateCharacter(root, 0, 0, false, 0.1, {});
    const idleZ = root.userData.arms[1].rotation.z;
    assert.ok(Math.abs(idleZ) < 0.3, 'idle arm hangs down, got ' + idleZ);
    assert.ok(waveZAt(root, 0) > 1.5, 'waving arm must be raised');
  });

  it('oscillates with the phase instead of freezing raised', () => {
    const root = buildCharacter(OUTFIT);
    const up = waveZAt(root, Math.PI / 2);    // sin = +1: arm at its highest
    const down = waveZAt(root, -Math.PI / 2); // sin = -1: arm at its lowest
    assert.ok(up > down + 0.5, 'wave must swing, got high ' + up + ' low ' + down);
    assert.ok(down > 1.0, 'even the low point of the wave stays raised');
  });

  it('leaves the legs standing still, not walking', () => {
    const root = buildCharacter(OUTFIT);
    waveZAt(root, 0);
    const u = root.userData;
    assert.ok(Math.abs(u.legs[0].rotation.x) < 0.1, 'waving ped stands, left leg ' + u.legs[0].rotation.x);
    assert.ok(Math.abs(u.legs[1].rotation.x) < 0.1, 'waving ped stands, right leg ' + u.legs[1].rotation.x);
  });
});
