// Multiplayer client for CITY DRIVER — fully optional.
// Socket.io comes from a CDN <script> (global `io`); THREE via the app importmap.
// Usage (from main.js):
//   import { createMultiplayer } from './multiplayer.js';
//   import { buildCar, CAR_DEFS } from './cars.js';
//   const mp = createMultiplayer(buildCar, CAR_DEFS);
//   mp.connect(scene);                       // no-op when MP_SERVER_URL is ''
//   // per frame:
//   mp.update(dt, { x, z, heading, speed, carId, colorHex });
//   mp.disconnect();                         // on quit
import * as THREE from 'three';
import { MP_SERVER_URL, MP_NAME } from './config.js';

const EMIT_MS = 100;      // 10 Hz position updates
const MAX_REMOTES = 12;   // cap rendered remote cars (nearest ones win)
const LERP_SPEED = 9;     // remote-car follow responsiveness

function shortestAngle(a, b){
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return d;
}

function roundedRect(c, x, y, w, h, r){
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

// Small floating name tag above a remote car.
function makeNameLabel(name){
  const text = String(name || 'Driver').slice(0, 24);
  const font = '600 26px system-ui, -apple-system, sans-serif';
  const pad = 14, h = 42;
  const meas = document.createElement('canvas').getContext('2d');
  meas.font = font;
  const w = Math.max(60, Math.ceil(meas.measureText(text).width) + pad * 2);
  const canvas = document.createElement('canvas');
  canvas.width = w; canvas.height = h;
  const c = canvas.getContext('2d');
  c.fillStyle = 'rgba(8,12,22,0.68)';
  c.beginPath();
  roundedRect(c, 1, 1, w - 2, h - 2, 12);
  c.fill();
  c.font = font; c.fillStyle = '#ffffff'; c.textBaseline = 'middle';
  c.fillText(text, pad, h / 2 + 1);
  const tex = new THREE.CanvasTexture(canvas);
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
  spr.scale.set(w / 95, h / 95, 1);
  spr.position.y = 2.15;
  spr.renderOrder = 999;
  return spr;
}

// Repaint a freshly built remote car to its owner's color.
// Mirrors paintCar() logic: only meshes that used the def's original body color.
function paintRemote(group, fromHex, toHex){
  if (fromHex === toHex) return;
  group.traverse(o => {
    if (o.isMesh && o.material && o.material.color && o.material.color.getHex() === fromHex){
      o.material = o.material.clone();
      o.material.color.setHex(toHex);
    }
  });
  group.userData.bodyColor = toHex;
}

function setMenuStatus(status, count){
  try {
    const el = document.getElementById('mp-status');
    if (!el) return;
    const labels = { off: '● offline', connecting: '● connecting…', on: `● online · ${count}` };
    el.textContent = labels[status] || '● offline';
    el.className = 'mp-status ' + status;
  } catch (_) { /* menu not present — ignore */ }
}

export function createMultiplayer(buildCar, CAR_DEFS){
  let status = 'off';           // 'off' | 'connecting' | 'on'
  let socket = null;
  let scene = null;
  let myId = null;
  let helloSent = false;
  let lastEmit = 0;
  let lastLocal = null;
  const remotes = new Map();    // playerId -> { group, tx, tz, theading }
  let roster = [];              // latest known [{id, carId, color, name}]

  function refreshMenu(){ setMenuStatus(status, remotes.size + (status === 'on' ? 1 : 0)); }

  function removeRemote(pid){
    const r = remotes.get(pid);
    if (!r) return;
    remotes.delete(pid);
    if (scene && r.group) scene.remove(r.group);
  }

  function spawnRemote(p){
    try {
      const def = (CAR_DEFS || []).find(d => d.id === p.carId) || CAR_DEFS[0];
      const group = buildCar(def);
      if (Number.isFinite(p.color) && p.color !== def.color) paintRemote(group, def.color, p.color);
      group.add(makeNameLabel(p.name));
      group.position.set(0, 0, 0);
      group.rotation.y = 0;
      if (scene) scene.add(group);
      remotes.set(p.id, { group, tx: 0, tz: 0, theading: 0 });
      refreshMenu();
    } catch (_) { /* never break solo play */ }
  }

  // Keep at most the 12 nearest roster entries rendered.
  function reconcile(){
    const hx = lastLocal ? lastLocal.x : 0;
    const hz = lastLocal ? lastLocal.z : 0;
    const others = roster.filter(p => p.id && p.id !== myId);
    for (const pid of [...remotes.keys()]){
      if (!others.some(p => p.id === pid)) removeRemote(pid);
    }
    const ranked = others
      .map(p => {
        const r = remotes.get(p.id);
        const d = r ? (r.tx - hx) * (r.tx - hx) + (r.tz - hz) * (r.tz - hz) : Infinity;
        return { p, d };
      })
      .sort((a, b) => a.d - b.d)
      .slice(0, MAX_REMOTES);
    const keep = new Set(ranked.map(e => e.p.id));
    for (const pid of [...remotes.keys()]){
      if (!keep.has(pid)) removeRemote(pid);
    }
    for (const { p } of ranked){
      if (!remotes.has(p.id)) spawnRemote(p);
    }
  }

  function fail(){
    status = 'off';
    refreshMenu();
    if (socket){ try { socket.close(); } catch (_) {} socket = null; }
  }

  function connect(sc){
    if (!MP_SERVER_URL) return;                    // disabled: stays 'off'
    if (status !== 'off') return;
    if (typeof io === 'undefined') return;         // CDN blocked: stays 'off'
    scene = sc;
    status = 'connecting';
    refreshMenu();
    let s;
    try {
      s = io(MP_SERVER_URL, { transports: ['websocket', 'polling'], reconnectionAttempts: 8, timeout: 9000 });
    } catch (_) { fail(); return; }
    socket = s;

    s.on('connect', () => { helloSent = false; }); // (re)send hello on first update
    s.on('welcome', d => {
      myId = d && d.id;
      status = 'on';
      refreshMenu();
    });
    s.on('players', list => {
      if (Array.isArray(list)){ roster = list; reconcile(); }
    });
    s.on('join', p => {
      if (p && p.id && p.id !== myId){
        if (!roster.some(q => q.id === p.id)) roster.push(p);
        reconcile();
      }
    });
    s.on('pos', d => {
      if (!d || !d.id || d.id === myId) return;
      const r = remotes.get(d.id);
      if (!r) return;
      r.tx = +d.x || 0; r.tz = +d.z || 0; r.theading = +d.heading || 0;
    });
    s.on('left', d => {
      if (!d || !d.id) return;
      roster = roster.filter(q => q.id !== d.id);
      removeRemote(d.id);
      refreshMenu();
    });
    s.on('full', () => fail());                    // room at capacity
    s.on('reconnect_failed', () => { if (!myId) fail(); });
    s.on('connect_error', () => { if (!myId && status === 'connecting'){ /* retries continue */ } });
  }

  function disconnect(){
    for (const pid of [...remotes.keys()]) removeRemote(pid);
    roster = [];
    myId = null; helloSent = false;
    if (socket){ try { socket.disconnect(); } catch (_) {} socket = null; }
    scene = null;
    status = 'off';
    refreshMenu();
  }

  function update(dt, local){
    if (local) lastLocal = local;
    // Smooth remote cars toward their latest targets.
    const k = Math.min(1, Math.max(0, dt) * LERP_SPEED);
    for (const [, r] of remotes){
      r.group.position.x += (r.tx - r.group.position.x) * k;
      r.group.position.z += (r.tz - r.group.position.z) * k;
      r.group.rotation.y += shortestAngle(r.group.rotation.y, r.theading) * k;
    }
    // Throttled local-state broadcast.
    if (socket && status === 'on' && local && myId){
      const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
      if (now - lastEmit >= EMIT_MS){
        lastEmit = now;
        try {
          if (!helloSent){
            socket.emit('hello', {
              carId: local.carId || 'falcon',
              color: Number.isFinite(local.colorHex) ? local.colorHex : null,
              name: MP_NAME,
            });
            helloSent = true;
          } else {
            socket.volatile.emit('pos', {
              x: +(+local.x || 0).toFixed(2),
              z: (+local.z || 0).toFixed(2),
              heading: (+local.heading || 0).toFixed(3),
              speed: (+local.speed || 0).toFixed(1),
            });
          }
        } catch (_) { /* transient — next tick retries */ }
      }
    }
  }

  return {
    get status(){ return status; },
    connect,
    disconnect,
    update,
  };
}
