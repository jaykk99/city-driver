// BAR BRAWL — "Paint the Town Red" mode for City Driver.
// First-person voxel brawler: pick a scenario (Biker Bar, Disco, Prison,
// Western Saloon, Pirate Cove, Arena), grab anything that isn't nailed down
// and take the whole room apart — limbs, heads and all.
import * as THREE from 'three';
import { initOrientation } from '../orientation.js';
import { SCENARIOS, getScenario, spawnPoints, groundAt, outfitFor, pickWeighted } from './maps.js';
import { wdef, resolveHit, wear } from './weapons.js';
import { buildRoom } from './room.js';
import { createFX } from './fx.js';
import { Fighter, Item, partFromHit } from './sim.js';
import { buildFist, buildWeaponModel, V } from './voxel.js';
import { createBrawlAudio } from './audio.js';

const $ = id => document.getElementById(id);
const TOUCH = ('ontouchstart' in window) || (navigator.maxTouchPoints || 0) > 0;
if(TOUCH) document.body.classList.add('touch');
const SAVE_KEY = 'citydriver_save_v1', BEST_KEY = 'citydriver_brawl_best';
const EYE = 1.62, P_RADIUS = 0.34;

// ---------------- renderer ----------------
const renderer = new THREE.WebGLRenderer({ antialias:!TOUCH, powerPreference:'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, TOUCH ? 1.25 : 1.75));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
$('game').appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(78, 16 / 9, 0.05, 120);
let scene = null;
const orient = initOrientation((w, h) => { renderer.setSize(w, h, false); renderer.domElement.style.width = w + 'px'; renderer.domElement.style.height = h + 'px'; camera.aspect = w / h; camera.updateProjectionMatrix(); });
orient.refresh();
const audio = createBrawlAudio();

// ---------------- world state ----------------
let W = null, room = null, running = false, paused = false, scenId = 'biker';
const player = {
  isPlayer:true, pos:new THREE.Vector3(), vel:new THREE.Vector3(), yaw:0, pitch:0, hp:100, alive:true,
  radius:P_RADIUS, height:1.8, scale:1, missing:{}, weapon:null, wstate:{ used:0 }, cool:0, kickCool:0, block:false,
  rage:0, raging:0, punchSide:0, onGround:true, pending:null,
};
const input = { mx:0, my:0, attack:false, attackHeld:false, block:false, kick:false, grab:false, throw:false, jump:false, rage:false, sprint:false };

function newWorld(id){
  const L = getScenario(id);
  scene = new THREE.Scene();
  room = buildRoom(scene, L, TOUCH ? 0 : 1);
  scene.add(camera);
  const fx = createFX(scene, L);
  W = {
    L, scene, fx, audio, player, fighters:[], items:[], rage:false,
    stats:{ kills:0, limbs:0, heads:0, exploded:0, t:0, wave:0, spawned:0 },
    woundGeo:new THREE.BoxGeometry(V * 1.05, V * 1.05, V * 1.05), stumpGeo:new THREE.BoxGeometry(V * 3.2, V * 1.2, V * 3.2),
    woundMat:new THREE.MeshLambertMaterial({ color:0x9a0808 }),
    spawnPts:spawnPoints(L, 18), spawnT:1.2, bossSpawned:false, boss:null, done:false, hitstop:0, shake:0,
    targets(){ return this.fighters.concat([player]); },
    hit, hurtPlayer, shoot, explode, onKill, announce,
  };
  for(const p of L.pickups){ const it = new Item(W, p.w, p.x, p.y || 0, p.z); W.items.push(it); }
  player.pos.set(L.player[0], 0, L.player[1]); player.vel.set(0, 0, 0);
  player.yaw = L.player[2]; player.pitch = 0; player.hp = 100; player.alive = true;
  player.weapon = null; player.wstate = { used:0 }; player.rage = 0; player.raging = 0; player.cool = 0; player.pending = null;
  setHeld(null);
  if(L.waves){ W.stats.wave = 0; nextWave(); }
  W.remaining = L.waves ? 0 : L.enemies.count;
  // a few start the fight already in the room
  const startN = Math.min(L.waves ? 0 : 4, W.remaining);
  for(let i = 0; i < startN; i++) spawnEnemy(true);
}

const rng = Math.random;
function spawnEnemy(inside){
  const L = W.L;
  let pt = null;
  for(let k = 0; k < 10; k++){
    const p = W.spawnPts[(Math.random() * W.spawnPts.length) | 0];
    if(Math.hypot(p[0] - player.pos.x, p[1] - player.pos.z) > (inside ? 5 : 6)){ pt = p; break; }
  }
  if(!pt) pt = W.spawnPts[0];
  const o = outfitFor(L.enemies.outfits, rng);
  const wpn = pickWeighted(L.enemies.weapons, rng);
  const f = new Fighter(W, o, wpn === 'fists' ? null : wpn, pt[0], pt[1], { hp:L.waves ? 1 + W.stats.wave * 0.06 : 1 });
  f.yaw = Math.atan2(player.pos.x - f.pos.x, player.pos.z - f.pos.z);
  W.fighters.push(f); W.stats.spawned++;
  if(!L.waves) W.remaining--;
  return f;
}
function spawnBoss(){
  const L = W.L, b = L.boss;
  const p = W.spawnPts.reduce((a, c) => Math.hypot(c[0] - player.pos.x, c[1] - player.pos.z) > Math.hypot(a[0] - player.pos.x, a[1] - player.pos.z) ? c : a);
  const f = new Fighter(W, outfitFor(b.outfit, rng), b.weapon, p[0], p[1], { scale:b.scale, hp:b.hp, boss:true, name:b.name, aggro:1 });
  W.fighters.push(f); W.boss = f; W.bossSpawned = true;
  announce(b.name + '!', 1.8); audio.bell();
}
function nextWave(){
  W.stats.wave++;
  W.waveLeft = 3 + W.stats.wave * 2;
  W.L.enemies.maxActive = Math.min(11, 4 + W.stats.wave);
  W.bossWave = W.stats.wave % 5 === 0; W.bossSpawned = false;
  announce('WAVE ' + W.stats.wave, 1.4); audio.bell();
}

// ---------------- combat ----------------
const _d = new THREE.Vector3(), _o = new THREE.Vector3(), _t = new THREE.Vector3();
function hit(f, part, w, dir, attacker, opts = {}){
  const mine = attacker === player;
  const mult = (mine && player.raging ? 2.5 : 1) * (opts.mult || 1);
  const res = resolveHit(w, f.partHp[part] ?? f.hp, Math.random, mult);
  if(mine && player.raging && part !== 'torso') res.sever = true;
  const knock = (opts.knock ?? w.knock ?? 3) * (mine && player.raging ? 2 : 1);
  W.rage = mine && player.raging > 0;
  const wasAlive = f.alive;
  f.takeHit(part, res, dir, knock, attacker, w);
  W.rage = false;
  if(w.sharp || w.kind === 'gun') audio.slash(); else audio.thud(w.heavy ? 1.2 : 0.8);
  if(res.sever || res.crush) audio.squish();
  if(mine){
    W.hitstop = w.heavy || res.sever ? 0.07 : 0.035; W.shake = Math.max(W.shake, w.heavy ? 0.25 : 0.12);
    $('crosshair').classList.add('hot'); setTimeout(() => $('crosshair').classList.remove('hot'), 90);
    if(res.sever && part !== 'head' && wasAlive) feed('✂ ' + ({ armL:'LEFT ARM', armR:'RIGHT ARM', legL:'LEFT LEG', legR:'RIGHT LEG' })[part] + ' OFF');
    player.rage = Math.min(1, player.rage + (res.sever ? 0.06 : 0.015));
  }
}
function hurtPlayer(dmg, dir, knock, attacker){
  if(!player.alive || W.done) return;
  const fwdx = Math.sin(player.yaw + Math.PI), fwdz = Math.cos(player.yaw + Math.PI);
  const facing = -(dir.x * fwdx + dir.z * fwdz) > 0.2;
  if(player.block && facing){ dmg *= 0.18; knock *= 0.35; audio.clang(); W.shake = 0.1; }
  else { audio.thud(0.7); audio.hurt(); W.shake = 0.22; flash(0.5 + dmg / 60); }
  if(player.raging) dmg *= 0.5;
  player.hp -= dmg;
  player.vel.x += dir.x * knock * 0.7; player.vel.z += dir.z * knock * 0.7;
  if(player.hp <= 0){ player.hp = 0; playerDie(attacker); }
}
function rayCapsule(o, d, f, maxT){
  // vertical capsule (corpses: a low wide disc)
  const r = f.corpse ? 0.75 * f.scale : f.radius + 0.06, y0 = f.pos.y, y1 = f.pos.y + (f.corpse ? 0.45 : f.height) * (f.crawling ? 0.5 : 1);
  const hx = d.x, hz = d.z, hh = hx * hx + hz * hz;
  if(hh < 1e-6) return null;
  const t = ((f.pos.x - o.x) * hx + (f.pos.z - o.z) * hz) / hh;
  if(t < 0 || t > maxT) return null;
  const cx = o.x + hx * t - f.pos.x, cz = o.z + hz * t - f.pos.z;
  if(cx * cx + cz * cz > r * r) return null;
  const back = Math.sqrt(Math.max(0, r * r - cx * cx - cz * cz) / hh);
  const tt = Math.max(0, t - back), y = o.y + d.y * tt;
  if(y < y0 - 0.05 || y > y1 + 0.05) return null;
  return tt;
}
function rayBox(o, d, s){
  let t0 = 0, t1 = 1e9;
  for(const [oo, dd, lo, hi] of [[o.x, d.x, s.x - s.w / 2, s.x + s.w / 2], [o.y, d.y, s.y, s.y + s.h], [o.z, d.z, s.z - s.d / 2, s.z + s.d / 2]]){
    if(Math.abs(dd) < 1e-8){ if(oo < lo || oo > hi) return null; continue; }
    let a = (lo - oo) / dd, b = (hi - oo) / dd; if(a > b){ const k = a; a = b; b = k; }
    t0 = Math.max(t0, a); t1 = Math.min(t1, b); if(t0 > t1) return null;
  }
  return t0;
}
function rayWorld(o, d, maxT){
  const L = W.L; let best = maxT;
  for(const s of L.solids){ const t = rayBox(o, d, s); if(t != null && t < best) best = t; }
  for(const [axis, lim] of [['x', L.w / 2], ['z', L.d / 2]]) if(Math.abs(d[axis]) > 1e-6){ const t = (Math.sign(d[axis]) * lim - o[axis]) / d[axis]; if(t > 0 && t < best) best = t; }
  if(d.y < 0){ const t = -o.y / d.y; if(t < best) best = t; }
  if(L.ceil != null && d.y > 0){ const t = (L.h - o.y) / d.y; if(t < best) best = t; }
  return best;
}
function shoot(o, dir, w, shooter, extra = 0){
  audio.shot(w.pellets > 1 || w.dmg > 60);
  for(let p = 0; p < (w.pellets || 1); p++){
    const sp = (w.spread || 0) + extra;
    const d = _d.copy(dir).add(_t.set((Math.random() - 0.5) * sp * 2, (Math.random() - 0.5) * sp * 2, (Math.random() - 0.5) * sp * 2)).normalize();
    const wallT = rayWorld(o, d, w.range || 50);
    let best = wallT, who = null;
    for(const f of W.targets()){
      if(f === shooter || f.gone || (!f.alive && !f.corpse)) continue;
      if(f.isPlayer){ if(!player.alive) continue; const t = rayCapsule(o, d, { pos:player.pos, radius:P_RADIUS, height:1.8, scale:1 }, best); if(t != null && t < best){ best = t; who = f; } continue; }
      const t = rayCapsule(o, d, f, best); if(t != null && t < best){ best = t; who = f; }
    }
    const end = _o.copy(o).addScaledVector(d, best);
    if(p < 3) W.fx.tracer(new THREE.Vector3(o.x, o.y - (shooter === player ? 0.15 : 0), o.z), end);
    if(who === player) hurtPlayer(w.dmg * 0.55, new THREE.Vector3(d.x, 0, d.z).normalize(), w.knock * 0.5, shooter);
    else if(who){
      const hy = end.y - who.pos.y, lat = who.lateralOf(end);
      const part = who.corpse ? ['armL', 'armR', 'legL', 'legR', 'head', 'torso'].find(k => !who.missing[k]) || 'torso' : partFromHit(hy, lat, who.scale, who.missing);
      hit(who, part, w, new THREE.Vector3(d.x, 0, d.z).normalize(), shooter, { knock:w.knock });
    } else {
      for(let k = 0; k < 4; k++) W.fx.gib(end.x - d.x * 0.05, end.y - d.y * 0.05, end.z - d.z * 0.05, -d.x * 2 + (Math.random() - 0.5) * 2, 1 + Math.random() * 2, -d.z * 2 + (Math.random() - 0.5) * 2, 0x777766, false, 0.5);
    }
  }
}
function explode(pos, R, dmg, owner){
  audio.boom(); W.shake = 0.7;
  const fx = W.fx;
  for(let k = 0; k < 70; k++){ const a = Math.random() * 6.28, s = 3 + Math.random() * 7; fx.gib(pos.x, pos.y + 0.3, pos.z, Math.cos(a) * s, 2 + Math.random() * 6, Math.sin(a) * s, [0xff8a1a, 0xffd040, 0x333333, 0x222222][k & 3], false, 1.2); }
  for(let k = 0; k < 5; k++) fx.splat(pos.x + (Math.random() - 0.5) * 2, groundAt(W.L, pos.x, pos.z, pos.y + 0.5), pos.z + (Math.random() - 0.5) * 2, 0, 1, 0, 1 + Math.random());
  const light = new THREE.PointLight(0xffa040, 60, 16, 1.5); light.position.copy(pos).setY(pos.y + 1); W.scene.add(light); setTimeout(() => W.scene.remove(light), 140);
  for(const f of W.fighters){
    if(f.gone || (!f.alive && !f.corpse)) continue;
    const dx = f.pos.x - pos.x, dz = f.pos.z - pos.z, d = Math.hypot(dx, dz);
    if(d > R) continue;
    const fall = 1 - d / R, dir = new THREE.Vector3(dx / (d || 1), 0, dz / (d || 1));
    const amount = dmg * fall;
    if(amount > f.hp * 0.6 || !f.alive){ if(f.alive){ f.hp = 0; } f.lastHitBy = owner; f.alive ? f.die(dir, true, owner) : explodeCorpse(f, dir); }
    else { hit(f, 'torso', { dmg:amount, knock:12 * fall + 4, sever:0.5, kind:'throw', tdmg:amount, heavy:true }, dir, owner, { knock:12 * fall + 4 }); }
  }
  const pd = Math.hypot(player.pos.x - pos.x, player.pos.z - pos.z);
  if(pd < R) hurtPlayer(dmg * 0.6 * (1 - pd / R), new THREE.Vector3(player.pos.x - pos.x, 0, player.pos.z - pos.z).normalize(), 10 * (1 - pd / R), owner);
  for(const it of W.items){ const dx = it.pos.x - pos.x, dz = it.pos.z - pos.z, d = Math.hypot(dx, dz); if(d < R && it.alive){ it.vel.set(dx / (d || 1) * 8, 5, dz / (d || 1) * 8); it.spin.set(10, 0, 10); } }
  fx.nudge(pos.x, pos.z, R, 0, 0);
}
function explodeCorpse(f, dir){ f.obliterate(dir); }
function onKill(f, killer, exploded){
  if(killer === player){
    W.stats.kills++;
    player.rage = Math.min(1, player.rage + (f.boss ? 0.5 : 0.18));
    if(exploded){ W.stats.exploded++; feed('💥 OBLITERATED'); }
    else feed('☠ ' + (f.name || 'KO'));
  } else if(killer) feed('🍺 brawler down');
  if(f.boss){ announce(f.name + ' IS DOWN', 1.6); audio.bell(); }
}

// ---------------- player actions ----------------
const fwd = new THREE.Vector3();
function camForward(out){ return out.set(-Math.sin(player.yaw) * Math.cos(player.pitch), Math.sin(player.pitch), -Math.cos(player.yaw) * Math.cos(player.pitch)); }
function meleeTarget(reach){
  let best = null, bs = 1e9;
  const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw);
  for(const f of W.fighters){
    if(f.gone || (!f.alive && !f.corpse)) continue;
    const dx = f.pos.x - player.pos.x, dz = f.pos.z - player.pos.z, d = Math.hypot(dx, dz);
    if(d > reach + f.radius + (f.corpse ? 0.6 : 0)) continue;
    const ang = Math.acos(Math.max(-1, Math.min(1, (dx * fx + dz * fz) / (d || 1))));
    if(ang > (d < 1 ? 1.1 : 0.62)) continue;
    const s = ang * 2 + d * 0.3 + (f.corpse ? 1.5 : 0);
    if(s < bs){ bs = s; best = { f, d }; }
  }
  return best;
}
function doMelee(){
  const w = wdef(player.weapon);
  const tg = meleeTarget(w.reach);
  if(!tg){ audio.whoosh(); return; }
  const f = tg.f, d = tg.d;
  const eyeY = player.pos.y + EYE;
  const hy = Math.max(0.1, eyeY + Math.tan(player.pitch) * d - f.pos.y);
  const pt = _t.set(player.pos.x - Math.sin(player.yaw) * d, 0, player.pos.z - Math.cos(player.yaw) * d);
  let part = f.corpse ? ['head', 'armL', 'armR', 'legL', 'legR', 'torso'].sort(() => Math.random() - 0.5).find(k => !f.missing[k]) || 'torso' : partFromHit(hy, f.lateralOf(pt), f.scale, f.missing);
  const dir = new THREE.Vector3(f.pos.x - player.pos.x, 0, f.pos.z - player.pos.z).normalize();
  hit(f, part, w, dir, player, {});
  if(player.weapon){
    const nw = wear(player.weapon, player.wstate);
    if(nw !== player.weapon){
      if(w.shatter){ const p = camera.localToWorld(new THREE.Vector3(0.3, -0.2, -0.6)); W.fx.glass(p.x, p.y, p.z); audio.glass(); }
      else audio.crunch();
      feed('💔 ' + w.name + ' broke'); setHeld(nw); player.wstate = { used:0, ammo:wdef(nw).ammo };
    }
  }
}
function attack(){
  if(player.cool > 0 || player.block || !player.alive) return;
  const w = wdef(player.weapon);
  if(w.kind === 'gun'){
    if((player.wstate.ammo ?? 0) <= 0){ audio.click(); player.cool = 0.3; hintOnce('Out of ammo — throw it (Q)'); return; }
    player.cool = w.rate; player.wstate.ammo--;
    const o = camera.getWorldPosition(new THREE.Vector3()); camForward(fwd);
    shoot(o, fwd, w, player, player.vel.lengthSq() > 2 ? 0.03 : 0);
    vm.recoil = 1; W.shake = Math.max(W.shake, 0.15);
    return;
  }
  if(w.kind === 'throw'){ throwHeld(); return; }
  player.cool = w.rate * (player.raging ? 0.7 : 1);
  vm.swing = 1; vm.swingDur = Math.max(0.22, w.rate * 0.8); vm.side = player.weapon ? 1 : (player.punchSide ^= 1);
  player.pending = { t:Math.min(0.14, w.rate * 0.35), fn:doMelee };
}
function kick(){
  if(player.kickCool > 0 || !player.alive) return;
  player.kickCool = 0.75; vm.kick = 1;
  player.pending = { t:0.12, fn:() => {
    const tg = meleeTarget(1.7);
    W.fx.nudge(player.pos.x - Math.sin(player.yaw) * 1.2, player.pos.z - Math.cos(player.yaw) * 1.2, 1.2, -Math.sin(player.yaw) * 6, -Math.cos(player.yaw) * 6);
    for(const it of W.items){ const dx = it.pos.x - player.pos.x, dz = it.pos.z - player.pos.z; if(it.alive && dx * dx + dz * dz < 2.2 && it.pos.y < 1){ it.vel.set(-Math.sin(player.yaw) * 7, 3, -Math.cos(player.yaw) * 7); it.spin.set(10, 0, 8); } }
    if(!tg){ audio.whoosh(); return; }
    const dir = new THREE.Vector3(tg.f.pos.x - player.pos.x, 0, tg.f.pos.z - player.pos.z).normalize();
    hit(tg.f, 'torso', { dmg:11, knock:11.5, sever:0, kind:'melee', heavy:false }, dir, player, { knock:11.5 });
  } };
}
function throwHeld(){
  if(!player.weapon || !player.alive) return;
  const w = wdef(player.weapon);
  const o = camera.getWorldPosition(new THREE.Vector3()); camForward(fwd);
  const it = new Item(W, player.weapon, o.x + fwd.x * 0.6, o.y - 0.1 + fwd.y * 0.6, o.z + fwd.z * 0.6, player.wstate);
  const sp = w.kind === 'throw' ? 17 : (w.heavy ? 12 : 16);
  it.vel.copy(fwd).multiplyScalar(sp).add(player.vel.clone().setY(0)); it.vel.y += 2.2;
  it.spin.set(w.kind === 'throw' && player.weapon === 'tknives' ? 20 : 10, 0, 6); it.thrown = true; it.owner = player;
  if(player.weapon === 'dynamite') it.fuse = w.fuse;
  W.items.push(it);
  audio.whoosh(); vm.swing = 1; vm.swingDur = 0.3; vm.side = 1;
  player.cool = w.kind === 'throw' ? w.rate : 0.35;
  if(w.kind === 'throw' && (player.wstate.count || 1) > 1){ const s = { count:player.wstate.count - 1 }; it.state = { count:1 }; player.wstate = s; }
  else setHeld(null);
}
function aimedItem(){
  const o = camera.getWorldPosition(_o); camForward(fwd);
  let best = null, ba = 0.42;
  for(const it of W.items){
    if(!it.alive || it.held || it.thrown || it.fuse != null) continue;
    _t.copy(it.pos).y += 0.12; _t.sub(o);
    const d = _t.length(); if(d > 2.7) continue;
    const a = Math.acos(Math.max(-1, Math.min(1, _t.dot(fwd) / d)));
    if(a < ba){ ba = a; best = it; }
  }
  return best;
}
function grab(){
  const it = aimedItem(); if(!it) return;
  if(player.weapon) dropHeld();
  setHeld(it.id); player.wstate = it.state; it.held = true; it.remove();
  audio.click(); feed('✋ ' + wdef(it.id).name);
}
function dropHeld(){
  const it = new Item(W, player.weapon, player.pos.x - Math.sin(player.yaw) * 0.5, 1, player.pos.z - Math.cos(player.yaw) * 0.5, player.wstate);
  W.items.push(it); setHeld(null);
}
function playerDie(killer){
  player.alive = false; announce('YOU GOT PAINTED', 2.5);
  setTimeout(() => endRun(false), 2200);
}

// ---------------- first-person viewmodel ----------------
const vm = { root:new THREE.Group(), hR:null, hL:null, leg:null, held:null, swing:0, swingDur:0.3, side:1, kick:0, recoil:0, bob:0 };
camera.add(vm.root);
vm.hR = buildFist(0xe8b88a, 0x3a3a3a); vm.hL = buildFist(0xe8b88a, 0x3a3a3a);
vm.hR.scale.setScalar(0.55); vm.hL.scale.setScalar(0.55);
vm.root.add(vm.hR, vm.hL);
{
  const legG = new THREE.Group();
  const shin = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.7, 0.22), new THREE.MeshLambertMaterial({ color:0x2a3a5a })); shin.position.y = 0.35;
  const boot = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.18, 0.36), new THREE.MeshLambertMaterial({ color:0x1a1a1a })); boot.position.set(0, 0.75, -0.05);
  legG.add(shin, boot); legG.visible = false; vm.leg = legG; vm.root.add(legG);
}
function setHeld(id){
  player.weapon = id || null;
  if(vm.held){ vm.hR.remove(vm.held); vm.held = null; }
  if(player.weapon){
    const w = wdef(player.weapon);
    const m = buildWeaponModel(player.weapon, w);
    if(m.userData.gun){ m.position.set(0, 0.02, -0.04); m.rotation.set(0, 0, 0); }
    else if(m.userData.upright){ m.position.set(0, -0.05, -0.15); m.rotation.set(-1.9, 0, 0.3); m.scale.setScalar(0.9); }
    else { m.position.set(0, 0, -0.02); m.rotation.set(-0.7, 0, 0); }
    m.traverse(o => { if(o.isMesh){ o.castShadow = false; } });
    vm.hR.add(m); vm.held = m;
    if(w.kind === 'gun' && player.wstate.ammo == null) player.wstate.ammo = w.ammo;
  }
}
function updateViewmodel(dt, moving){
  vm.bob += dt * (moving ? 9 : 2);
  const bx = Math.sin(vm.bob) * (moving ? 0.02 : 0.005), by = Math.abs(Math.cos(vm.bob)) * (moving ? 0.02 : 0.004);
  const w = wdef(player.weapon), gun = w.kind === 'gun';
  // rest poses
  let rx = 0.26 + bx, ry = -0.27 + by, rz = -0.5, rrx = 0, rrz = 0;
  let lx = -0.28 + bx, ly = -0.3 + by, lz = -0.52, lrx = 0;
  if(gun){ rx = 0.2 + bx; ry = -0.25 + by; rz = -0.5; lx = -0.4; ly = -0.6; }
  if(player.block){ rx = 0.14; ry = -0.12; rz = -0.38; lx = -0.14; ly = -0.12; lz = -0.38; rrz = 0.5; lrx = 0.3; }
  if(vm.swing > 0){
    vm.swing = Math.max(0, vm.swing - dt / vm.swingDur);
    const k = 1 - vm.swing;                         // 0 -> 1 through the swing
    if(player.weapon && !gun){
      // wind up high right, chop across and down
      const a = k < 0.3 ? k / 0.3 : 1 - (k - 0.3) / 0.7;
      const s = k < 0.3 ? 0 : (k - 0.3) / 0.7;
      rx = 0.38 - s * 0.55; ry = -0.1 + a * 0.18 - s * 0.25; rz = -0.5 - s * 0.2; rrx = 0.9 * a - s * 1.6; rrz = -0.6 + s * 1.3;
    } else if(!gun){
      const p = Math.sin(Math.min(1, k * 1.6) * Math.PI);
      if(vm.side){ rz -= p * 0.45; rx -= p * 0.15; ry += p * 0.12; } else { lz -= p * 0.45; lx += p * 0.15; ly += p * 0.12; }
    }
  }
  if(vm.recoil > 0){ vm.recoil = Math.max(0, vm.recoil - dt * 6); rz += vm.recoil * 0.08; rrx += vm.recoil * 0.35; }
  vm.hR.position.set(rx, ry, rz); vm.hR.rotation.set(rrx, 0, rrz);
  vm.hL.position.set(lx, ly, lz); vm.hL.rotation.set(lrx, 0, 0);
  vm.hL.visible = !player.weapon || player.block || !(w.heavy);
  if(vm.kick > 0){
    vm.kick = Math.max(0, vm.kick - dt * 3.2);
    const p = Math.sin((1 - vm.kick) * Math.PI);
    vm.leg.visible = true; vm.leg.position.set(0.05, -1.25 + p * 0.55, -0.35 - p * 0.55); vm.leg.rotation.set(-1.1 * p - 0.3, 0, 0);
  } else vm.leg.visible = false;
}

// ---------------- HUD ----------------
let annT = 0;
function announce(txt, dur = 1.1){ if(!txt) return; const a = $('announce'); a.textContent = txt; a.classList.add('on'); annT = dur; }
function feed(txt){ const f = $('feed'); const d = document.createElement('div'); d.textContent = txt; f.prepend(d); while(f.children.length > 5) f.lastChild.remove(); setTimeout(() => d.remove(), 2600); }
let flashV = 0; function flash(v){ flashV = Math.min(1, flashV + v); }
const hinted = new Set(); function hintOnce(t){ if(hinted.has(t)) return; hinted.add(t); feed(t); }
function updateHUD(){
  $('hp-fill').style.width = player.hp + '%';
  $('rage-fill').style.width = (player.raging > 0 ? player.raging / 7 : player.rage) * 100 + '%';
  document.querySelector('.bar.rage').classList.toggle('full', player.rage >= 1 && !player.raging);
  $('b-rage').classList.toggle('hidden', !(player.rage >= 1 && !player.raging));
  document.body.classList.toggle('raging', player.raging > 0);
  const w = wdef(player.weapon);
  $('weapon-name').textContent = w.name.toUpperCase();
  let info = '';
  if(w.kind === 'gun') info = (player.wstate.ammo ?? 0) + ' / ' + w.ammo + ' rounds';
  else if(w.kind === 'throw') info = '×' + (player.wstate.count || 1) + ' · tap attack to throw';
  else if(isFinite(w.dur)) info = Math.max(0, w.dur - (player.wstate.used || 0)) + ' hits left';
  $('weapon-info').textContent = info;
  const L = W.L;
  const alive = W.fighters.filter(f => f.alive).length;
  $('count').textContent = L.waves ? `WAVE ${W.stats.wave} · ☠ ${W.stats.kills}` : `☠ ${W.stats.kills}   👊 ${alive + W.remaining + (W.bossSpawned ? 0 : 1)} LEFT`;
  const it = player.alive ? aimedItem() : null;
  const h = $('hint');
  if(it){ h.textContent = (TOUCH ? '✋ ' : '[E] ') + wdef(it.id).name; h.classList.remove('hidden'); } else h.classList.add('hidden');
}

// ---------------- loop ----------------
let last = performance.now();
function frame(now){
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
  if(!running || !W){ return; }
  if(paused){ renderer.render(scene, camera); return; }
  if(W.hitstop > 0){ W.hitstop -= dt; dt *= 0.15; }
  W.stats.t += dt;
  stepPlayer(dt);
  // spawning
  const L = W.L;
  W.spawnT -= dt;
  const alive = W.fighters.filter(f => f.alive).length;
  if(!W.done && W.spawnT <= 0){
    W.spawnT = 0.7 + Math.random() * 0.8;
    if(L.waves){
      if(W.waveLeft > 0 && alive < L.enemies.maxActive){ spawnEnemy(); W.waveLeft--; }
      else if(W.waveLeft <= 0 && W.bossWave && !W.bossSpawned){ spawnBoss(); }
      else if(W.waveLeft <= 0 && alive === 0){ nextWave(); W.spawnT = 2.5; player.hp = Math.min(100, player.hp + 25); }
    } else {
      if(W.remaining > 0 && alive < L.enemies.maxActive) spawnEnemy();
      else if(W.remaining <= 0 && alive === 0 && !W.bossSpawned) spawnBoss();
      else if(W.bossSpawned && !W.boss.alive && alive === 0){ W.done = true; announce('TOWN PAINTED RED', 2.5); audio.bell(); setTimeout(() => endRun(true), 2600); }
    }
  }
  for(const f of W.fighters) f.update(dt);
  separate();
  for(const it of W.items) if(it.alive) it.update(dt);
  if(W.items.length > 120 || (W.stats.t | 0) % 5 === 0) W.items = W.items.filter(i => i.alive);
  // corpse cap
  const corpses = W.fighters.filter(f => f.corpse);
  if(corpses.length > 16){ const c = corpses[0]; W.scene.remove(c.group); c.gone = true; c.corpse = false; }
  W.fighters = W.fighters.filter(f => !f.gone || f.alive);
  W.fx.update(dt);
  room.update(dt);
  // camera
  W.shake = Math.max(0, W.shake - dt * 1.8);
  const sh = W.shake * W.shake * 0.25;
  camera.position.set(player.pos.x + (Math.random() - 0.5) * sh, player.pos.y + (player.alive ? EYE : 0.35), player.pos.z + (Math.random() - 0.5) * sh);
  camera.rotation.set(player.pitch + (Math.random() - 0.5) * sh, player.yaw, player.alive ? 0 : 0.9, 'YXZ');
  updateViewmodel(dt, Math.hypot(player.vel.x, player.vel.z) > 0.5);
  vm.root.visible = player.alive;
  flashV = Math.max(0, flashV - dt * 1.5); $('flash').style.opacity = flashV.toFixed(2);
  if(annT > 0){ annT -= dt; if(annT <= 0) $('announce').classList.remove('on'); }
  if(((W.stats.t * 20) | 0) % 2 === 0) updateHUD();
  renderer.render(scene, camera);
}
function stepPlayer(dt){
  const L = W.L;
  player.cool -= dt; player.kickCool -= dt;
  if(player.pending){ player.pending.t -= dt; if(player.pending.t <= 0){ const f = player.pending.fn; player.pending = null; f(); } }
  if(player.raging > 0){ player.raging -= dt; if(player.raging <= 0){ player.raging = 0; feed('🔥 rage over'); } }
  if(!player.alive){ player.vel.multiplyScalar(0.9); return; }
  // look
  const sens = TOUCH ? 0.0055 : 0.0024;
  player.yaw -= input.mx * sens; player.pitch -= input.my * sens; input.mx = input.my = 0;
  player.pitch = Math.max(-1.35, Math.min(1.35, player.pitch));
  player.block = input.block;
  // actions
  // tap to swing; hold to keep swinging / firing
  if(input.attack || input.attackHeld) attack();
  input.attack = false;
  if(input.kick){ input.kick = false; kick(); }
  if(input.grab){ input.grab = false; grab(); }
  if(input.throw){ input.throw = false; throwHeld(); }
  if(input.rage){ input.rage = false; if(player.rage >= 1 && !player.raging){ player.raging = 7; player.rage = 0; announce('RAGE', 1.2); audio.rage(); } }
  // move
  let mx = 0, mz = 0;
  if(keys.KeyW || keys.ArrowUp) mz -= 1; if(keys.KeyS || keys.ArrowDown) mz += 1;
  if(keys.KeyA || keys.ArrowLeft) mx -= 1; if(keys.KeyD || keys.ArrowRight) mx += 1;
  mx += stick.x; mz += stick.y;
  const ml = Math.hypot(mx, mz); if(ml > 1){ mx /= ml; mz /= ml; }
  const spd = (input.sprint || keys.ShiftLeft ? 6.2 : 4.4) * (player.block ? 0.5 : 1) * (player.raging ? 1.3 : 1);
  const sy = Math.sin(player.yaw), cy = Math.cos(player.yaw);
  const wx = (mx * cy + mz * sy) * spd, wz = (-mx * sy + mz * cy) * spd;
  const g = groundAt(L, player.pos.x, player.pos.z, player.pos.y + 0.45);
  player.onGround = player.pos.y <= g + 0.02;
  const k = 1 - Math.exp(-(player.onGround ? 12 : 2) * dt);
  player.vel.x += (wx - player.vel.x) * k; player.vel.z += (wz - player.vel.z) * k;
  if(input.jump){ input.jump = false; if(player.onGround){ player.vel.y = 6.2; } }
  player.vel.y -= 18 * dt;
  player.pos.addScaledVector(player.vel, dt);
  // collide
  const r = P_RADIUS, hw = L.w / 2 - r, hd = L.d / 2 - r;
  player.pos.x = Math.max(-hw, Math.min(hw, player.pos.x)); player.pos.z = Math.max(-hd, Math.min(hd, player.pos.z));
  for(const s of L.solids){
    if(s.y > player.pos.y + 1.7 || s.y + s.h <= player.pos.y + 0.45) continue;   // step onto low stuff (≤45 cm), duck under nothing
    const cx = Math.max(s.x - s.w / 2, Math.min(player.pos.x, s.x + s.w / 2)), cz = Math.max(s.z - s.d / 2, Math.min(player.pos.z, s.z + s.d / 2));
    const dx = player.pos.x - cx, dz = player.pos.z - cz, d2 = dx * dx + dz * dz;
    if(d2 < r * r){ const d = Math.sqrt(d2) || 0.001; player.pos.x = cx + dx / d * r; player.pos.z = cz + dz / d * r; }
  }
  const g2 = groundAt(L, player.pos.x, player.pos.z, player.pos.y + 0.45);
  if(player.pos.y < g2){ player.pos.y = g2; player.vel.y = Math.max(0, player.vel.y); }
  // walking into severed heads and limbs knocks them around
  if(Math.hypot(player.vel.x, player.vel.z) > 1) W.fx.nudge(player.pos.x, player.pos.z, 0.45, player.vel.x * 0.5, player.vel.z * 0.5);
}
function separate(){
  const all = W.fighters.filter(f => f.alive && !f.gone);
  all.push(player);
  for(let i = 0; i < all.length; i++) for(let j = i + 1; j < all.length; j++){
    const a = all[i], b = all[j];
    const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z, r = a.radius + b.radius, d2 = dx * dx + dz * dz;
    if(d2 >= r * r || d2 < 1e-6) continue;
    const d = Math.sqrt(d2), push = (r - d) / 2, nx = dx / d, nz = dz / d;
    a.pos.x -= nx * push; a.pos.z -= nz * push; b.pos.x += nx * push; b.pos.z += nz * push;
    // a body flying across the room bowls people over
    for(const [m, o, s] of [[a, b, 1], [b, a, -1]]){
      if(m.isPlayer || !m.flying || o.isPlayer) continue;
      const sp = Math.hypot(m.vel.x, m.vel.z);
      if(sp > 5 && o.state !== 'down'){ o.knockDown({ x:nx * s, z:nz * s }, sp * 0.7); W.audio.thud(1); m.vel.multiplyScalar(0.5); }
    }
  }
}

// ---------------- input ----------------
const keys = {};
const stick = { x:0, y:0 };
window.addEventListener('keydown', e => {
  keys[e.code] = true; audio.unlock();
  if(!running) return;
  if(e.code === 'Space'){ input.jump = true; e.preventDefault(); }
  if(e.code === 'KeyF') input.kick = true;
  if(e.code === 'KeyE') input.grab = true;
  if(e.code === 'KeyQ' || e.code === 'KeyG') input.throw = true;
  if(e.code === 'KeyR') input.rage = true;
  if(e.code === 'Escape' || e.code === 'KeyP') togglePause();
});
window.addEventListener('keyup', e => { keys[e.code] = false; });
const canvas = renderer.domElement;
canvas.addEventListener('mousedown', e => {
  audio.unlock();
  if(!running || paused || TOUCH) return;
  if(document.pointerLockElement !== canvas){ lockMouse(); return; }
  if(e.button === 0){ input.attack = true; input.attackHeld = true; }
  if(e.button === 2) input.block = true;
});
window.addEventListener('mouseup', e => { if(e.button === 0) input.attackHeld = false; if(e.button === 2) input.block = false; });
window.addEventListener('mousemove', e => { if(document.pointerLockElement === canvas){ input.mx += e.movementX; input.my += e.movementY; } });
function lockMouse(){ try{ const r = canvas.requestPointerLock && canvas.requestPointerLock(); if(r && r.catch) r.catch(() => {}); }catch(e){} }
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('pointerlockchange', () => { if(running && !paused && !TOUCH && document.pointerLockElement !== canvas && player.alive && !W.done) togglePause(true); });

// touch: map screen coords into the (possibly CSS-rotated) landscape frame
const toApp = (x, y) => orient.rotated ? { x:y, y:window.innerWidth - x } : { x, y };
function bindTouch(){
  const look = $('look-zone'), sz = $('stick-zone'), knob = $('stick-knob'), base = $('stick-base');
  let lookId = null, lookLast = null, stickId = null, stickC = null;
  look.addEventListener('pointerdown', e => { audio.unlock(); lookId = e.pointerId; lookLast = toApp(e.clientX, e.clientY); look.setPointerCapture(e.pointerId); });
  look.addEventListener('pointermove', e => { if(e.pointerId !== lookId) return; const p = toApp(e.clientX, e.clientY); input.mx += p.x - lookLast.x; input.my += p.y - lookLast.y; lookLast = p; });
  const lookEnd = e => { if(e.pointerId === lookId) lookId = null; };
  look.addEventListener('pointerup', lookEnd); look.addEventListener('pointercancel', lookEnd);
  sz.addEventListener('pointerdown', e => { audio.unlock(); stickId = e.pointerId; sz.setPointerCapture(e.pointerId); const r = base.getBoundingClientRect(); stickC = toApp(r.left + r.width / 2, r.top + r.height / 2); moveStick(e); });
  const moveStick = e => { if(e.pointerId !== stickId) return; const p = toApp(e.clientX, e.clientY); let dx = p.x - stickC.x, dy = p.y - stickC.y; const d = Math.hypot(dx, dy), R = 55; if(d > R){ dx *= R / d; dy *= R / d; } stick.x = dx / R; stick.y = dy / R; knob.style.transform = `translate(${dx}px,${dy}px)`; input.sprint = d > R * 1.4; };
  sz.addEventListener('pointermove', moveStick);
  const stickEnd = e => { if(e.pointerId !== stickId) return; stickId = null; stick.x = stick.y = 0; knob.style.transform = ''; input.sprint = false; };
  sz.addEventListener('pointerup', stickEnd); sz.addEventListener('pointercancel', stickEnd);
  const btn = (id, down, up) => { const b = $(id); b.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); audio.unlock(); b.classList.add('on'); down(); }); const u = e => { b.classList.remove('on'); if(up) up(); }; b.addEventListener('pointerup', u); b.addEventListener('pointercancel', u); b.addEventListener('pointerleave', u); };
  btn('b-attack', () => { input.attack = true; input.attackHeld = true; }, () => { input.attackHeld = false; });
  btn('b-block', () => { input.block = true; }, () => { input.block = false; });
  btn('b-kick', () => { input.kick = true; });
  btn('b-grab', () => { input.grab = true; });
  btn('b-throw', () => { input.throw = true; });
  btn('b-jump', () => { input.jump = true; });
  btn('b-rage', () => { input.rage = true; });
}
bindTouch();

// ---------------- menus ----------------
function best(){ try{ return JSON.parse(localStorage.getItem(BEST_KEY)) || {}; }catch(e){ return {}; } }
function buildMenu(){
  const list = $('scen-list'); list.innerHTML = '';
  const b = best();
  for(const f of SCENARIOS){
    const L = f();
    const el = document.createElement('button'); el.className = 'scen';
    const rec = b[L.id];
    el.innerHTML = `<b>${L.name.toUpperCase()}</b><small>${L.blurb}</small><i>${rec ? (L.waves ? 'BEST: WAVE ' + rec.wave : '✔ CLEARED · ' + rec.time + 's') : (L.waves ? 'SURVIVE THE WAVES' : L.enemies.count + ' BRAWLERS + ' + L.boss.name)}</i>`;
    el.onclick = () => start(L.id);
    list.appendChild(el);
  }
}
function start(id){
  audio.unlock(); orient.goLandscape();
  scenId = id;
  newWorld(id);
  ['menu', 'pause', 'result'].forEach(o => $(o).classList.add('hidden'));
  $('hud').classList.remove('hidden');
  $('touch').classList.toggle('hidden', !TOUCH);
  running = true; paused = false;
  announce(W.L.name.toUpperCase(), 1.6);
  feed(TOUCH ? '✋ grab anything · 🎯 throw it · 🦵 kick' : 'E grab · Q throw · F kick · RMB block');
  audio.crowd(true);
  if(!TOUCH) lockMouse();
}
function togglePause(force){
  if(!running) return;
  paused = force === true ? true : !paused;
  $('pause').classList.toggle('hidden', !paused);
  if(!paused && !TOUCH) lockMouse();
}
function endRun(win){
  if(!running) return;
  running = false;
  audio.crowd(false);
  if(document.exitPointerLock) document.exitPointerLock();
  const s = W.stats, L = W.L;
  const cash = s.kills * 120 + s.limbs * 30 + s.heads * 60 + s.exploded * 80 + (win ? 2500 : 0) + (L.waves ? s.wave * 400 : 0);
  try{ const raw = localStorage.getItem(SAVE_KEY); if(raw){ const sv = JSON.parse(raw); sv.cash = Math.max(0, Math.floor((+sv.cash || 0) + cash)); localStorage.setItem(SAVE_KEY, JSON.stringify(sv)); } }catch(e){}
  const b = best(), t = Math.round(s.t);
  if(L.waves){ if(!b[L.id] || s.wave > b[L.id].wave) b[L.id] = { wave:s.wave }; }
  else if(win && (!b[L.id] || t < b[L.id].time)) b[L.id] = { time:t };
  try{ localStorage.setItem(BEST_KEY, JSON.stringify(b)); }catch(e){}
  $('r-title').textContent = L.waves ? 'SURVIVED ' + (s.wave - 1) + ' WAVES' : win ? 'TOWN PAINTED RED' : 'YOU GOT PAINTED';
  const rows = [['Kills', s.kills], ['Limbs removed', s.limbs], ['Heads taken', s.heads], ['Obliterated', s.exploded], ['Blood splats', W.fx.splats], ['Time', t + 's'], ['City Driver cash', '+$' + cash.toLocaleString()]];
  $('r-stats').innerHTML = rows.map(([a, v]) => `<span>${a}</span><span>${v}</span>`).join('');
  $('result').classList.remove('hidden'); $('hud').classList.add('hidden'); $('touch').classList.add('hidden');
}
$('p-resume').onclick = () => togglePause();
$('p-restart').onclick = () => { togglePause(); start(scenId); };
$('p-menu').onclick = () => { running = false; audio.crowd(false); $('pause').classList.add('hidden'); $('hud').classList.add('hidden'); $('touch').classList.add('hidden'); buildMenu(); $('menu').classList.remove('hidden'); };
$('pause-btn').addEventListener('pointerdown', e => { e.stopPropagation(); togglePause(); });
$('r-again').onclick = () => start(scenId);
$('r-menu').onclick = () => { $('result').classList.add('hidden'); buildMenu(); $('menu').classList.remove('hidden'); };
document.addEventListener('visibilitychange', () => { if(document.hidden && running && !paused) togglePause(true); });

requestAnimationFrame(frame);
buildMenu();
const q = new URLSearchParams(location.search).get('map');
if(q) start(q);
// idle menu backdrop: a slowly turning biker bar
else { newWorld('biker'); running = false; (function spin(){ if(running) return; requestAnimationFrame(spin); camera.position.set(Math.sin(performance.now() / 6000) * 6, 2.2, Math.cos(performance.now() / 6000) * 6); camera.lookAt(0, 1.2, 0); for(const f of W.fighters) f.animate(0.016, 0), f.sync(); W.fx.update(0.016); room.update(0.016); renderer.render(scene, camera); })(); }
if(new URLSearchParams(location.search).has('debug')) window.__brawl = { W:() => W, player, start, hit, spawnEnemy, explode, input, attack, kick, wdef, give:id => { setHeld(id); const w = wdef(id); player.wstate = { used:0, ammo:w.ammo, count:w.count }; } };
