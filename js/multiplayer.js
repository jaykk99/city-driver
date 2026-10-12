// CITY DRIVER — live multiplayer. Everyone who opens the game joins one shared
// city over Supabase Realtime (see net.js). Each client broadcasts a small
// state packet a few times a second; other players appear as their car (with
// their skin) or on foot as their driver (with their outfit, name tag and gun).
// Shots are broadcast too, so you see other players' bullets fly.
import * as THREE from 'three';
import { createRealtime } from './net.js';
import { MP_URL, MP_KEY, MP_TOPIC } from './config.js';

const SEND_MOVING_MS = 160;   // ~6 Hz while moving
const SEND_IDLE_MS = 1000;    // 1 Hz when standing still
const LOOK_EVERY_MS = 2500;   // re-send skin so late joiners see it
const TIMEOUT_MS = 7000;      // drop players we stop hearing from
const MAX_REMOTES = 16;
const LERP = 10;

const angleDiff = (a, b) => { let d = (b - a) % (Math.PI * 2); if(d > Math.PI) d -= Math.PI * 2; if(d < -Math.PI) d += Math.PI * 2; return d; };

function nameTag(name, team){
  const text = String(name || 'Driver').slice(0, 16);
  const font = '700 28px system-ui, -apple-system, sans-serif';
  const meas = document.createElement('canvas').getContext('2d'); meas.font = font;
  const w = Math.max(70, Math.ceil(meas.measureText(text).width) + 30), h = 44;
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(8,12,22,0.72)';
  g.beginPath(); g.roundRect ? g.roundRect(1, 1, w - 2, h - 2, 14) : g.rect(1, 1, w - 2, h - 2); g.fill();
  g.fillStyle = team === 'red' ? '#ff3b4e' : team === 'blue' ? '#3b8bff' : '#4ade80';
  g.beginPath(); g.arc(16, h / 2, 5, 0, Math.PI * 2); g.fill();
  g.font = font; g.fillStyle = '#fff'; g.textBaseline = 'middle'; g.fillText(text, 26, h / 2 + 1);
  const tex = new THREE.CanvasTexture(c);
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map:tex, transparent:true, depthTest:false }));
  spr.scale.set(w / 90, h / 90, 1);
  spr.renderOrder = 999;
  return spr;
}

// deps = { scene, CAR_DEFS, buildCar, applyCarSkin, buildCharacter, setOutfit, setHeldWeapon,
//          animateCharacter, unpackLook, remoteShot(x0,z0,x1,z1), onCount(n), onStatus(s) }
export function createMultiplayer(deps){
  const myId = Math.random().toString(36).slice(2, 10);
  const remotes = new Map();
  let rt = null, lastSend = 0, lastLook = 0, lastSig = '', lastLookSig = '';

  function count(){ return remotes.size + 1; }
  function notify(){ if(deps.onCount) deps.onCount(count()); }

  function removeRemote(id){
    const r = remotes.get(id); if(!r) return;
    if(r.car) deps.scene.remove(r.car);
    if(r.person) deps.scene.remove(r.person);
    if(r.tag) r.tag.parent && r.tag.parent.remove(r.tag);
    remotes.delete(id);
    notify();
  }

  function ensureCar(r){
    const sig = r.carId + '|' + r.lookSig;
    if(r.car && r.carSig === sig) return;
    if(r.car) deps.scene.remove(r.car);
    const def = deps.CAR_DEFS.find(d => d.id === r.carId) || deps.CAR_DEFS[0];
    const car = deps.buildCar(def);
    if(r.look) deps.applyCarSkin(car, r.look.paint, r.look.carSkin);
    car.position.set(r.cx, 0, r.cz); car.rotation.y = r.ch;
    deps.scene.add(car);
    r.car = car; r.carSig = sig;
  }
  function ensurePerson(r){
    if(!r.person){
      r.person = deps.buildCharacter(r.look ? r.look.outfit : { shirt:0x2b6cb0, hat:'none' });
      r.person.position.set(r.x, 0, r.z);
      deps.scene.add(r.person);
      r.outfitSig = '';
    }
    const os = r.look ? JSON.stringify(r.look.outfit) : '';
    if(r.look && os !== r.outfitSig){ deps.setOutfit(r.person, r.look.outfit); r.outfitSig = os; }
    deps.setHeldWeapon(r.person, r.weapon || null);
  }

  function onState(p){
    if(!p || !p.id || p.id === myId) return;
    let r = remotes.get(p.id);
    if(!r){
      if(remotes.size >= MAX_REMOTES) return;
      r = { id:p.id, name:'', x:+p.x || 0, z:+p.z || 0, h:+p.h || 0, cx:0, cz:0, ch:0,
        tx:0, tz:0, th:0, mode:'car', carId:'sport', look:null, lookSig:'', car:null, person:null,
        tag:null, tagName:'', phase:0, speed:0, b:-1, weapon:null, seen:0 };
      remotes.set(p.id, r);
      notify();
    }
    r.seen = performance.now();
    r.mode = p.m === 'foot' ? 'foot' : 'car';
    r.tx = +p.x || 0; r.tz = +p.z || 0; r.th = +p.h || 0;
    r.carId = String(p.c || 'sport');
    r.b = Number.isInteger(p.b) ? p.b : -1;
    r.weapon = p.w || null;
    const team = p.tm || null;
    if(team !== r.team){ r.team = team; r.tagName = ''; }
    r.dead = p.hp === 0;
    r.firing = !!p.f;
    if(r.mode === 'foot' && Number.isFinite(p.px)){ r.cx = +p.px; r.cz = +p.pz; r.ch = +p.ph || 0; }
    if(p.L){ const sig = JSON.stringify(p.L); if(sig !== r.lookSig){ r.lookSig = sig; r.look = deps.unpackLook(p.L); } }
    if(p.n && (p.n !== r.tagName || !r.tag)){
      if(r.tag && r.tag.parent) r.tag.parent.remove(r.tag);
      r.tag = nameTag(p.n, r.team); r.tagName = p.n; r.name = p.n;
    }
    if(!r.placed){ r.x = r.tx; r.z = r.tz; r.h = r.th; if(r.mode === 'car'){ r.cx = r.tx; r.cz = r.tz; r.ch = r.th; } r.placed = true; }
  }

  function onShot(p){
    if(!p || p.id === myId || !Array.isArray(p.s)) return;
    const r = remotes.get(p.id);
    if(r){ r.recoil = 0.35; }
    if(r && deps.localBuilding !== undefined && r.b !== deps.localBuilding()) return;
    for(const s of p.s.slice(0, 3)) if(Array.isArray(s) && s.length === 4) deps.remoteShot(+s[0], +s[1], +s[2], +s[3]);
  }

  let topic = null;
  function clearRemotes(){ for(const id of [...remotes.keys()]) removeRemote(id); }
  // join a channel (game mode). connect(null) = go offline (single player).
  function connect(t){
    if(t === undefined) t = MP_TOPIC;
    if(t === topic && rt) return;
    disconnect();
    topic = t;
    if(!t || !MP_URL || !MP_KEY){ if(deps.onStatus) deps.onStatus('off', 1); return; }
    rt = createRealtime({ url:MP_URL, key:MP_KEY, topic:t, onStatus:s => { if(deps.onStatus) deps.onStatus(s, count()); } });
    rt.on('st', onState);
    rt.on('sh', onShot);
    rt.on('bye', p => { if(p && p.id) removeRemote(p.id); });
    rt.on('hit', p => { if(p && p.t === myId && deps.onHit) deps.onHit(p, remotes.get(p.id)); });
    rt.on('kill', p => { if(p && deps.onKill) deps.onKill(p); });
    rt.connect();
  }
  function disconnect(){
    if(rt){ try{ rt.send('bye', { id:myId }); }catch(_){ } rt.close(); rt = null; }
    clearRemotes();
    lastSig = ''; lastLookSig = '';
  }
  window.addEventListener('pagehide', () => { try{ rt && rt.send('bye', { id:myId }); }catch(_){ } });

  // local = { name, mode, x, z, h, speed, car, look, px, pz, ph, b, w, firing }
  function update(dt, local, now){
    now = now || performance.now();
    // send
    if(rt && rt.status === 'on' && local){
      const sig = local.mode + (local.x | 0) + ',' + (local.z | 0) + ',' + (local.h * 10 | 0) + local.b + (local.w || '');
      const moving = sig !== lastSig || Math.abs(local.speed) > 0.3;
      if(now - lastSend >= (moving ? SEND_MOVING_MS : SEND_IDLE_MS)){
        lastSend = now; lastSig = sig;
        const msg = { id:myId, n:local.name, m:local.mode, x:+local.x.toFixed(2), z:+local.z.toFixed(2), h:+local.h.toFixed(3),
          c:local.car, b:local.b, w:local.w || null, tm:local.team || null, hp:local.dead ? 0 : 1 };
        if(local.mode === 'foot'){ msg.px = +local.px.toFixed(2); msg.pz = +local.pz.toFixed(2); msg.ph = +local.ph.toFixed(3); }
        const lookSig = JSON.stringify(local.look);
        if(lookSig !== lastLookSig || now - lastLook > LOOK_EVERY_MS){ msg.L = local.look; lastLook = now; lastLookSig = lookSig; }
        rt.send('st', msg);
      }
    }
    // remotes
    const k = Math.min(1, dt * LERP);
    const myB = local ? local.b : -1;
    for(const [id, r] of remotes){
      if(now - r.seen > TIMEOUT_MS){ removeRemote(id); continue; }
      const px = r.x, pz = r.z;
      r.x += (r.tx - r.x) * k; r.z += (r.tz - r.z) * k; r.h += angleDiff(r.h, r.th) * k;
      r.speed = dt > 0 ? Math.hypot(r.x - px, r.z - pz) / dt : 0;
      if(r.mode === 'car'){ r.cx = r.x; r.cz = r.z; r.ch = r.h; }
      ensureCar(r);
      r.car.position.set(r.cx, 0, r.cz); r.car.rotation.y = r.ch;
      r.car.visible = myB === -1;                      // cars live outdoors
      if(r.mode === 'foot'){
        ensurePerson(r);
        r.person.visible = r.b === myB;
        r.person.position.x = r.x; r.person.position.z = r.z; r.person.rotation.y = r.h;
        r.phase += r.speed * dt * 2.1;
        r.recoil = Math.max(0, (r.recoil || 0) - dt);
        if(r.dead){ r.person.rotation.x = -Math.PI / 2 + 0.05; r.person.position.y = 0.12; }
        else { r.person.rotation.x = 0; deps.animateCharacter(r.person, r.phase, r.speed, !!r.weapon && r.recoil > 0, dt); }
      }else if(r.person){ r.person.visible = false; }
      // name tag rides on whatever represents them
      if(r.tag){
        const host = r.mode === 'foot' ? r.person : r.car;
        if(host && r.tag.parent !== host){ if(r.tag.parent) r.tag.parent.remove(r.tag); host.add(r.tag); r.tag.position.set(0, r.mode === 'foot' ? 2.35 : 2.3, 0); }
      }
    }
  }

  function sendShots(shots){
    if(!rt || rt.status !== 'on' || !shots || !shots.length) return;
    rt.send('sh', { id:myId, s:shots.map(s => s.map(v => +v.toFixed(2))) });
  }

  // nearby remote players (for the minimap)
  function each(fn){ for(const r of remotes.values()) fn(r); }

  function send(ev, payload){ if(rt && rt.status === 'on') rt.send(ev, Object.assign({ id:myId }, payload)); }
  return { connect, disconnect, update, sendShots, send, each, myId,
    get topic(){ return topic; }, get count(){ return count(); }, get status(){ return rt ? rt.status : 'off'; } };
}
