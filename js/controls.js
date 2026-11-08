// Touch + keyboard input for CITY DRIVER. Single shared `input` object —
// the game loop reads it every frame; no per-frame allocations here.

// opts.isRotated(): true when the page is CSS-rotated into landscape, so
// joystick deltas can be mapped from screen space back into game space.
export function createControls(opts = {}){
  const isRotated = opts.isRotated || (() => false);
  const input = { throttle:0, steer:0, handbrake:false, nitro:false, moveX:0, moveY:0, run:false, fire:false, aim:false };
  const held = { left:false, right:false, gas:false, brake:false, nitro:false, handbrake:false, fire:false, run:false, aim:false };
  let aimToggle = false;             // touch AIM button toggles; keyboard/mouse is hold
  const joy = { x:0, y:0, id:null };
  // free-look: accumulated pixel deltas since the last consumeLook() (touch drag, mouse drag, pointer lock)
  const look = { dx:0, dy:0, id:null, lx:0, ly:0, active:false };
  let mode = 'drive';          // drive | drag | foot
  let shiftQueued = false, actionQueued = false, cycleQueued = false, fireEdge = false, gearUpQ = false, gearDownQ = false;
  let attached = false;
  const unbind = [];

  const $ = id => document.getElementById(id);

  function sync(){
    input.steer = (held.right ? 1 : 0) - (held.left ? 1 : 0);
    input.throttle = held.gas ? 1 : (held.brake ? -1 : 0);
    input.nitro = held.nitro;
    input.handbrake = held.handbrake;
    // on foot: joystick wins, keyboard fills in
    const kx = (held.right ? 1 : 0) - (held.left ? 1 : 0);
    const ky = (held.gas ? 1 : 0) - (held.brake ? 1 : 0);
    input.moveX = joy.id !== null ? joy.x : kx;
    input.moveY = joy.id !== null ? joy.y : ky;
    input.run = held.run || held.nitro || (joy.id !== null && Math.hypot(joy.x, joy.y) > 0.92);
    input.fire = held.fire;
    input.aim = held.aim || aimToggle || held.fire;
  }

  // virtual joystick (foot mode). Knob travel radius in px.
  function bindJoystick(base, knob){
    if(!base) return;
    const RAD = 44;
    const move = e => {
      if(e.pointerId !== joy.id) return;
      const r = base.getBoundingClientRect();
      let sx = e.clientX - (r.left + r.width / 2), sy = e.clientY - (r.top + r.height / 2);
      // screen -> game space when the whole page is rotated 90deg clockwise
      let dx = sx, dy = sy;
      if(isRotated()){ dx = sy; dy = -sx; }
      const len = Math.hypot(dx, dy), cl = Math.min(len, RAD);
      if(len > 0){ dx = dx / len * cl; dy = dy / len * cl; }
      knob.style.transform = `translate(${dx}px, ${dy}px)`;
      const dead = 0.12;
      let nx = dx / RAD, ny = -dy / RAD;
      if(Math.hypot(nx, ny) < dead){ nx = 0; ny = 0; }
      joy.x = nx; joy.y = ny; sync();
    };
    const down = e => {
      e.preventDefault();
      if(joy.id !== null) return;
      joy.id = e.pointerId;
      try{ base.setPointerCapture(e.pointerId); }catch(_){}
      move(e);
    };
    const up = e => {
      if(e.pointerId !== joy.id) return;
      joy.id = null; joy.x = 0; joy.y = 0;
      knob.style.transform = 'translate(0px, 0px)';
      sync();
    };
    base.addEventListener('pointerdown', down);
    base.addEventListener('pointermove', move);
    base.addEventListener('pointerup', up);
    base.addEventListener('pointercancel', up);
    unbind.push(() => {
      base.removeEventListener('pointerdown', down);
      base.removeEventListener('pointermove', move);
      base.removeEventListener('pointerup', up);
      base.removeEventListener('pointercancel', up);
    });
  }

  // drag anywhere that isn't a button to swing the camera (foot mode). Multi-touch safe: one look finger.
  function bindLook(el){
    if(!el) return;
    const toGame = (sx, sy) => isRotated() ? [sy, -sx] : [sx, sy];
    const down = e => {
      if(look.id !== null) return;
      e.preventDefault();
      look.id = e.pointerId; look.lx = e.clientX; look.ly = e.clientY; look.active = true;
      try{ el.setPointerCapture(e.pointerId); }catch(_){}
    };
    const move = e => {
      if(e.pointerId !== look.id) return;
      const [dx, dy] = toGame(e.clientX - look.lx, e.clientY - look.ly);
      look.lx = e.clientX; look.ly = e.clientY;
      look.dx += dx; look.dy += dy;
    };
    const up = e => { if(e.pointerId !== look.id) return; look.id = null; look.active = false; };
    el.addEventListener('pointerdown', down); el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    unbind.push(() => { el.removeEventListener('pointerdown', down); el.removeEventListener('pointermove', move); el.removeEventListener('pointerup', up); el.removeEventListener('pointercancel', up); });
  }

  function bindTap(el, fn){
    if(!el) return;
    const on = e => { e.preventDefault(); e.stopPropagation(); fn(); el.classList.add('pressed'); };
    const off = () => el.classList.remove('pressed');
    el.addEventListener('pointerdown', on);
    el.addEventListener('pointerup', off);
    el.addEventListener('pointerleave', off);
    unbind.push(() => {
      el.removeEventListener('pointerdown', on);
      el.removeEventListener('pointerup', off);
      el.removeEventListener('pointerleave', off);
    });
  }

  // press-and-hold binding; multi-touch safe via press counter
  function bindHold(el, key){
    if(!el) return;
    let presses = 0;
    const on = e => {
      e.preventDefault();
      presses++;
      if(key === 'fire' && !held.fire) fireEdge = true;
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
      else if(mode === 'foot'){ if(!held.fire) fireEdge = true; held.fire = true; sync(); }
      else { held.handbrake = true; sync(); }
      return;
    }
    if(k === 'e' || k === 'E' || k === 'Enter'){ if(!e.repeat) actionQueued = true; return; }
    if(k === 'q' || k === 'Q'){ if(!e.repeat) cycleQueued = true; return; }
    if(k === 'Shift' || k === 'f' || k === 'F'){ held.nitro = true; sync(); }
    if(k === 'r' || k === 'R'){ held.aim = true; sync(); }
    if(k === 'g' || k === 'G'){ if(!e.repeat) gearUpQ = true; return; }
    if(k === 'b' || k === 'B'){ if(!e.repeat) gearDownQ = true; return; }
  }
  function onKeyUp(e){
    const k = e.key;
    const mapped = KEYMAP[k];
    if(mapped){ held[mapped] = false; sync(); return; }
    if(k === ' '){ held.handbrake = false; held.fire = false; sync(); return; }
    if(k === 'Shift' || k === 'f' || k === 'F'){ held.nitro = false; sync(); }
    if(k === 'r' || k === 'R'){ held.aim = false; sync(); }
  }
  // desktop on foot: click the game to grab the mouse (pointer lock) — then the mouse swings the camera,
  // left button fires, right button aims. Esc gives the mouse back. Without the lock, drag to look.
  const locked = () => typeof document !== 'undefined' && !!document.pointerLockElement;
  const gameCanvas = () => document.querySelector('#game-container canvas');
  let dragLook = false;
  function onMouseDown(e){
    if(e.button === 2){ held.aim = true; sync(); return; }
    if(mode !== 'foot' || e.button !== 0) return;
    const c = gameCanvas();
    if(locked()){ if(!held.fire) fireEdge = true; held.fire = true; sync(); return; }
    if(c && e.target === c){
      dragLook = true; look.lx = e.clientX; look.ly = e.clientY;
      if(c.requestPointerLock && !('ontouchstart' in window)){ try{ const r = c.requestPointerLock(); if(r && r.catch) r.catch(() => {}); }catch(_){} }
    }
  }
  function onMouseUp(e){
    if(e.button === 2){ held.aim = false; sync(); }
    if(e.button === 0){ dragLook = false; if(held.fire && mode === 'foot'){ held.fire = false; sync(); } }
  }
  function onMouseMove(e){
    if(mode !== 'foot') return;
    if(locked()){ look.dx += e.movementX || 0; look.dy += e.movementY || 0; }
    else if(dragLook){ look.dx += e.clientX - look.lx; look.dy += e.clientY - look.ly; look.lx = e.clientX; look.ly = e.clientY; }
  }

  function setMode(m){
    mode = (m === 'drag' || m === 'foot') ? m : 'drive';
    const show = (id, on) => { const el = $(id); if(el) el.style.display = on ? '' : 'none'; };
    show('steer-zone', mode === 'drive');
    show('pedal-zone', mode !== 'foot');
    show('btn-shift', mode === 'drag');
    show('joystick', mode === 'foot');
    show('foot-zone', mode === 'foot');
    show('look-zone', mode === 'foot');
    look.id = null; look.active = false; look.dx = look.dy = 0;
    if(mode !== 'foot' && typeof document !== 'undefined' && document.pointerLockElement && document.exitPointerLock) document.exitPointerLock();
    for(const k in held) held[k] = false;
    aimToggle = false; { const b = $('btn-aim'); if(b) b.classList.remove('on'); }
    joy.id = null; joy.x = 0; joy.y = 0;
    const knob = $('joy-knob'); if(knob) knob.style.transform = 'translate(0px, 0px)';
    for(const b of document.querySelectorAll('#touch-controls .pressed')) b.classList.remove('pressed');
    sync();
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
    bindHold($('btn-fire'), 'fire');
    bindHold($('btn-run'), 'run');
    bindJoystick($('joystick'), $('joy-knob'));
    bindTap($('btn-action'), () => { actionQueued = true; });
    bindTap($('btn-weapon'), () => { cycleQueued = true; });
    bindTap($('btn-aim'), () => { aimToggle = !aimToggle; const b = $('btn-aim'); if(b) b.classList.toggle('on', aimToggle); sync(); });
    bindTap($('btn-gear-up'), () => { gearUpQ = true; });
    bindTap($('btn-gear-down'), () => { gearDownQ = true; });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    unbind.push(() => { window.removeEventListener('mousedown', onMouseDown); window.removeEventListener('mouseup', onMouseUp); window.removeEventListener('mousemove', onMouseMove); });
    bindLook($('look-zone'));
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
    shiftQueued = actionQueued = cycleQueued = fireEdge = false;
    joy.id = null; joy.x = joy.y = 0;
    sync();
    attached = false;
  }

  function consumeShift(){
    const q = shiftQueued;
    shiftQueued = false;
    return q;
  }

  const take = name => () => { let v; switch(name){
    case 'action': v = actionQueued; actionQueued = false; return v;
    case 'cycle':  v = cycleQueued;  cycleQueued = false;  return v;
    case 'fire':   v = fireEdge;     fireEdge = false;     return v;
    case 'gup':    v = gearUpQ;      gearUpQ = false;      return v;
    case 'gdown':  v = gearDownQ;    gearDownQ = false;    return v;
  } };

  // pixel deltas of camera drag since last call (game space, +x = right, +y = down)
  function consumeLook(){ const r = { dx:look.dx, dy:look.dy, active:look.active || locked() || dragLook }; look.dx = look.dy = 0; return r; }

  return { input, consumeShift, consumeLook, consumeAction:take('action'), consumeCycle:take('cycle'),
    consumeFireEdge:take('fire'), consumeGearUp:take('gup'), consumeGearDown:take('gdown'), setMode, attach, detach, get mode(){ return mode; } };
}
