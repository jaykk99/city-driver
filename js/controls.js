// Touch + keyboard input for CITY DRIVER. Single shared `input` object —
// the game loop reads it every frame; no per-frame allocations here.

export function createControls(){
  const input = { throttle:0, steer:0, handbrake:false, nitro:false };
  const held = { left:false, right:false, gas:false, brake:false, nitro:false, handbrake:false };
  let mode = 'drive';
  let shiftQueued = false;
  let attached = false;
  const unbind = [];

  const $ = id => document.getElementById(id);

  function sync(){
    input.steer = (held.right ? 1 : 0) - (held.left ? 1 : 0);
    input.throttle = held.gas ? 1 : (held.brake ? -1 : 0);
    input.nitro = held.nitro;
    input.handbrake = held.handbrake;
  }

  // press-and-hold binding; multi-touch safe via press counter
  function bindHold(el, key){
    if(!el) return;
    let presses = 0;
    const on = e => {
      e.preventDefault();
      presses++;
      held[key] = true; sync();
      el.classList.add('pressed');
    };
    const off = () => {
      presses = Math.max(0, presses - 1);
      if(presses === 0){ held[key] = false; sync(); el.classList.remove('pressed'); }
    };
    const ctx = e => e.preventDefault();
    el.addEventListener('pointerdown', on);
    el.addEventListener('pointerup', off);
    el.addEventListener('pointercancel', off);
    el.addEventListener('pointerleave', off);
    el.addEventListener('contextmenu', ctx);
    unbind.push(() => {
      el.removeEventListener('pointerdown', on);
      el.removeEventListener('pointerup', off);
      el.removeEventListener('pointercancel', off);
      el.removeEventListener('pointerleave', off);
      el.removeEventListener('contextmenu', ctx);
    });
  }

  function bindShiftButton(el){
    if(!el) return;
    const on = e => { e.preventDefault(); shiftQueued = true; el.classList.add('pressed'); };
    const off = () => el.classList.remove('pressed');
    el.addEventListener('pointerdown', on);
    el.addEventListener('pointerup', off);
    el.addEventListener('pointercancel', off);
    el.addEventListener('pointerleave', off);
    unbind.push(() => {
      el.removeEventListener('pointerdown', on);
      el.removeEventListener('pointerup', off);
      el.removeEventListener('pointercancel', off);
      el.removeEventListener('pointerleave', off);
    });
  }

  const KEYMAP = {
    ArrowLeft:'left', a:'left', A:'left',
    ArrowRight:'right', d:'right', D:'right',
    ArrowUp:'gas', w:'gas', W:'gas',
    ArrowDown:'brake', s:'brake', S:'brake',
  };

  function onKeyDown(e){
    const t = e.target;
    if(t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    const k = e.key;
    const mapped = KEYMAP[k];
    if(mapped){ held[mapped] = true; sync(); e.preventDefault(); return; }
    if(k === ' '){
      e.preventDefault();
      if(e.repeat) return;
      if(mode === 'drag') shiftQueued = true;   // edge-triggered via consumeShift()
      else { held.handbrake = true; sync(); }
      return;
    }
    if(k === 'Shift' || k === 'f' || k === 'F'){ held.nitro = true; sync(); }
  }
  function onKeyUp(e){
    const k = e.key;
    const mapped = KEYMAP[k];
    if(mapped){ held[mapped] = false; sync(); return; }
    if(k === ' '){ held.handbrake = false; sync(); return; }
    if(k === 'Shift' || k === 'f' || k === 'F'){ held.nitro = false; sync(); }
  }

  function setMode(m){
    mode = (m === 'drag') ? 'drag' : 'drive';
    const steerZone = $('steer-zone');
    const shiftBtn = $('btn-shift');
    if(steerZone) steerZone.style.display = mode === 'drag' ? 'none' : '';
    if(shiftBtn) shiftBtn.style.display = mode === 'drag' ? '' : 'none';
    if(mode !== 'drag'){ held.left = held.right = false; sync(); }
  }

  function attach(){
    if(attached) return;
    attached = true;
    bindHold($('btn-left'), 'left');
    bindHold($('btn-right'), 'right');
    bindHold($('btn-gas'), 'gas');
    bindHold($('btn-brake'), 'brake');
    bindHold($('btn-nitro'), 'nitro');
    bindHold($('btn-handbrake'), 'handbrake');
    bindShiftButton($('btn-shift'));
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    unbind.push(() => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    });
    // touch UI only on touch devices
    const tc = $('touch-controls');
    if(tc) tc.style.display = ('ontouchstart' in window) ? '' : 'none';
    setMode(mode);
  }

  function detach(){
    for(const fn of unbind) fn();
    unbind.length = 0;
    for(const k in held) held[k] = false;
    shiftQueued = false;
    sync();
    attached = false;
  }

  function consumeShift(){
    const q = shiftQueued;
    shiftQueued = false;
    return q;
  }

  return { input, consumeShift, setMode, attach, detach };
}
