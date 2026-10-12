// CITY DRIVER — game bootstrap: scene, states, chase camera, HUD, main loop.
// States: menu -> freeroam <-> garage overlay, menu -> drag -> freeroam.
import * as THREE from 'three';
import * as Cars from './cars.js';
import { buildCity } from './city.js';
import { CarPhysics } from './physics.js';
import { createControls } from './controls.js';
import { createDragMode } from './drag.js';
import { createAudio } from './audio.js';
import { loadSave, saveSave, createGarage } from './garage.js';
import { QualityManager, qualitySettings, QUALITY_LEVELS } from './quality.js';
import { createSkyDome, applySkyPreset, PRESET_ORDER, SKY_PRESETS } from './sky.js';
import { PuffPool, SkidMarks } from './particles.js';
import { newStuntState, stuntUpdate } from './stunts.js';
import { initOrientation } from './orientation.js';
import { ensureArsenal, cycleWeapon, weaponDef, TARGET_PAY } from './shop.js';
import { FootPhysics, dist2D, exitSpot } from './onfoot.js';
import { buildCharacter, setOutfit, setHeldWeapon, animateCharacter, kickRecoil } from './character.js';
import { buildStores, STORE_LOTS } from './stores.js';
import { createWeapons } from './weapons.js';
import { createStoreUI } from './storeui.js';
import { createMinimap } from './minimap.js';

const { CAR_DEFS, buildCar, effectiveStats, paintCar } = Cars;
// added by the cars track; may not exist yet in this worktree — guard it
const setWheelStyle = typeof Cars.setWheelStyle==='function' ? Cars.setWheelStyle : null;

const $ = id => document.getElementById(id);

// ---------------- state ----------------
let renderer, scene, camera, city;
let carGroup=null, carDef=null, carStats=null;
let physics=null, controls=null, audio=null, dragMode=null, garage=null, mp=null;
let save=null;
let state='boot';              // menu | freeroam | drag
let paused=false, garageOpen=false, garageReturn='menu';
let tele={speed:0,drifting:false,nitro:false,nitroFrac:1,steer:0};
let mpTried=false;
// --- stunt rewards (free-roam cash loop) ---
let stunts=newStuntState();
// --- AAA graphics state ---
let postfx=null, qm=null, skyEnv=null, todIdx=0;
let smoke=null, exhaust=null, skids=null, headlight=null, headlightTarget=null, headlightBase=0;
let particleScale=1;
// --- on foot / stores / guns ---
let orient=null, onFoot=false, foot=null, person=null, weapons=null, shops=null, storeUI=null, minimap=null;
let storeOpen=false, aimHold=0, ammoDirty=0, actionKind=null, actionTarget=null, actionText='';
const weaponCtx={ save:null, pos:{x:0,z:0}, heading:0, colliders:null, targets:null, audio:null, toast:null, onTargetHit:null };
const parkedCar={x:0,z:0};

// ---------------- reused per-frame objects (no allocs in loop) ----------------
const camPos=new THREE.Vector3(), camGoal=new THREE.Vector3(), fwdV=new THREE.Vector3();
const cityPos={x:0,z:0};
const collideRes={x:0,z:0,hitX:false,hitZ:false};
const mpLocal={x:0,z:0,heading:0,speed:0,car:'falcon'};
const playerInfo={def:null,stats:null,group:null};
let allWheels=[], frontWheels=[], brakeMats=[];
let lastFov=62, frameN=0;

// ---------------- toast ----------------
let toastTimer=0;
function toast(msg, ms=2200){
  const t=$('toast');
  t.textContent=msg;
  t.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.add('hidden'), ms);
}

// ---------------- cash ----------------
function syncCash(){
  const v=save.cash.toLocaleString();
  $('cash-val').textContent=v;
  $('garage-cash').textContent=v;
}
function addCash(n){
  save.cash=Math.max(0, save.cash+Math.round(n));
  saveSave(save); syncCash();
}

// ---------------- car lifecycle ----------------
function rebuildCar(){
  carDef=CAR_DEFS.find(d=>d.id===save.currentCar)||CAR_DEFS[0];
  if(carGroup) scene.remove(carGroup);
  carGroup=buildCar(carDef);
  const p=save.paint[carDef.id];
  if(typeof p==='number' && p!==(carDef.colors&&carDef.colors[0])) paintCar(carGroup, p);
  if(setWheelStyle) setWheelStyle(carGroup, save.wheels[carDef.id]||0);
  scene.add(carGroup);
  carStats=effectiveStats(carDef, save.upgrades[carDef.id]||{});
  allWheels=(carGroup.userData.wheels||[]).slice();
  frontWheels=allWheels.filter(w=>w.position.z<0);
  brakeMats=carGroup.userData.brakeMats||[];
  $('menu-car-name').textContent=carDef.name;
}

function snapCamera(){
  const h=physics.heading;
  fwdV.set(-Math.sin(h),0,-Math.cos(h));
  camPos.set(physics.pos.x-fwdV.x*9, 4, physics.pos.z-fwdV.z*9);
  camera.position.copy(camPos);
}

function placeAtSpawn(){
  const s=city.spawn;
  physics.pos.x=s.x; physics.pos.z=s.z; physics.heading=s.heading||0;
  stunts=newStuntState();   // fresh stunt tracking per run
  snapCamera();
  syncCarTransform(0);
}

// rebuild visuals/stats in place (garage purchases) — keeps world position
function refreshSceneKeep(){
  const px=physics.pos.x, pz=physics.pos.z, h=physics.heading;
  rebuildCar();
  physics.reset(carStats);
  physics.pos.x=px; physics.pos.z=pz; physics.heading=h;
  syncCarTransform(0);
}

const _hw=new THREE.Vector3();
function syncCarTransform(dt){
  carGroup.position.set(physics.pos.x, 0, physics.pos.z);
  carGroup.rotation.y=physics.heading;
  const spin=tele.speed*dt*2.4;
  for(let i=0;i<allWheels.length;i++) allWheels[i].rotation.x+=spin;
  for(let i=0;i<frontWheels.length;i++) frontWheels[i].rotation.y=tele.steer*0.45;
  const braking=controls && controls.input.throttle<0;
  if(carGroup.userData.setBrake) carGroup.userData.setBrake(braking);
  else for(let i=0;i<brakeMats.length;i++) brakeMats[i].emissiveIntensity=braking?4.5:1.8;
  // headlight follows the car nose
  if(headlight){
    const h=physics.heading;
    _hw.set(-Math.sin(h),0,-Math.cos(h));
    headlight.position.set(physics.pos.x+_hw.x*1.8, 1.1, physics.pos.z+_hw.z*1.8);
    headlightTarget.position.set(physics.pos.x+_hw.x*22, 0.4, physics.pos.z+_hw.z*22);
  }
}

// rear-wheel world positions for smoke/skids/exhaust (reuses temps)
const _rw=new THREE.Vector3();
function rearWheelWorld(i, out){
  const w=allWheels[i];
  out.setFromMatrixPosition(w.matrixWorld);
  return out;
}
let _emitAcc=0;
function updateEffects(dt){
  if(!smoke || state!=='freeroam' || paused || garageOpen) return;
  carGroup.updateMatrixWorld();
  const n=allWheels.length;
  if(tele.drifting && particleScale>0.3){
    for(let i=0;i<n;i++){
      const w=allWheels[i];
      if(w.position.z<0) continue;               // rear wheels only
      rearWheelWorld(i,_rw);
      if(Math.random()<0.85*particleScale)
        smoke.emit(_rw.x+(Math.random()-0.5)*0.4, 0.35, _rw.z+(Math.random()-0.5)*0.4,
          { vx:(Math.random()-0.5)*1.5, vy:1.0+Math.random(), vz:(Math.random()-0.5)*1.5, life:0.6+Math.random()*0.4, size:0.9, grow:2.6 });
      if(Math.random()<0.6) skids.add(_rw.x, _rw.z, physics.heading);
    }
  }
  // exhaust puffs under throttle
  _emitAcc+=dt;
  const thr=controls&&controls.input.throttle||0;
  if(thr>0.4 && _emitAcc>0.09){
    _emitAcc=0;
    const h=physics.heading;
    _hw.set(-Math.sin(h),0,-Math.cos(h));
    const rx=Math.cos(h), rz=-Math.sin(h);   // right vector
    for(const s of [-0.45,0.45]){
      const px=physics.pos.x-_hw.x*2.2+rx*s;
      const pz=physics.pos.z-_hw.z*2.2+rz*s;
      exhaust.emit(px, 0.32, pz, { vx:-_hw.x*2, vy:0.8, vz:-_hw.z*2, life:0.5, size:0.55, grow:1.6 });
    }
  }
  smoke.update(dt); exhaust.update(dt);
}

// ---------------- collision: circle (car) vs AABB (city colliders) ----------------
function collide(x, z){ return collideR(x, z, 1.15); }
function collideR(x, z, R){
  let cx=x, cz=z, hitX=false, hitZ=false;
  const cols=city.colliders;
  for(let i=0;i<cols.length;i++){
    const c=cols[i];
    if(cx+R<c.minX||cx-R>c.maxX||cz+R<c.minZ||cz-R>c.maxZ) continue;
    const qx=Math.max(c.minX,Math.min(cx,c.maxX));
    const qz=Math.max(c.minZ,Math.min(cz,c.maxZ));
    const dx=cx-qx, dz=cz-qz;
    const d2=dx*dx+dz*dz;
    if(d2>=R*R) continue;
    if(d2>1e-8){
      const d=Math.sqrt(d2), push=(R-d)/d;
      const ox=dx*push, oz=dz*push;
      cx+=ox; cz+=oz;
      if(Math.abs(ox)>Math.abs(oz)) hitX=true; else hitZ=true;
    }else{
      // center inside the box: push along min-penetration axis
      const pl=cx-c.minX, pr=c.maxX-cx, pt=cz-c.minZ, pb=c.maxZ-cz;
      const m=Math.min(pl,pr,pt,pb);
      if(m===pl){ cx=c.minX-R; hitX=true; }
      else if(m===pr){ cx=c.maxX+R; hitX=true; }
      else if(m===pt){ cz=c.minZ-R; hitZ=true; }
      else { cz=c.maxZ+R; hitZ=true; }
    }
  }
  collideRes.x=cx; collideRes.z=cz; collideRes.hitX=hitX; collideRes.hitZ=hitZ;
  return collideRes;
}

// on-foot collision: buildings + the parked car (two circles along its length)
function footCollide(x, z, r){
  const res=collideR(x, z, r);
  const h=physics.heading, fx=-Math.sin(h), fz=-Math.cos(h);
  for(const o of [-1.25, 0, 1.25]){
    const cx=physics.pos.x+fx*o, cz=physics.pos.z+fz*o, rr=1.0+r;
    const dx=res.x-cx, dz=res.z-cz, d=Math.hypot(dx,dz);
    if(d<rr && d>1e-6){ res.x=cx+dx/d*rr; res.z=cz+dz/d*rr; }
  }
  return res;
}

// ---------------- on foot ----------------
function syncPersonGear(){
  if(!person) return;
  setOutfit(person, save.outfit);
  setHeldWeapon(person, save.equipped);
  const w=save.equipped && weaponDef(save.equipped);
  $('weapon-name').textContent = w ? w.name.toUpperCase() : 'UNARMED';
  const a=$('weapon-ammo');
  a.textContent = w ? String(save.ammo[w.id]|0) : (save.weapons.length ? 'tap 🔫 to draw' : 'guns at LOCK & LOAD');
  a.classList.toggle('tip', !w);
}
function updateModeHUD(){
  for(const id of ['speedo','gear-hud','nitro-bar']) $(id).classList.toggle('hidden', onFoot);
  $('weapon-hud').classList.toggle('hidden', !onFoot);
}
function getOut(){
  if(Math.abs(tele.speed)>4){ toast('Slow down to get out'); return; }
  const sp=exitSpot(physics.pos.x, physics.pos.z, physics.heading);
  const r=footCollide(sp.x, sp.z, 0.45);
  foot.reset(r.x, r.z, physics.heading);
  physics.vel.x=0; physics.vel.z=0; physics.speed=0;
  tele.speed=0; tele.drifting=false; tele.nitro=false; tele.steer=0;
  stunts=newStuntState();
  onFoot=true;
  person.visible=true;
  person.position.set(foot.pos.x, 0, foot.pos.z);
  syncPersonGear();
  controls.setMode('foot');
  updateModeHUD();
  audio.engine(0,0); audio.skid(false); audio.beep(420,0.06);
}
function getIn(){
  if(!onFoot) return;
  onFoot=false;
  person.visible=false;
  aimHold=0;
  if(controls) controls.setMode('drive');
  updateModeHUD();
  stunts=newStuntState();
  if(audio) audio.beep(520,0.06);
  if(ammoDirty){ saveSave(save); ammoDirty=0; }
}
function updateFootCamera(dt){
  const h=foot.heading, px=foot.pos.x, pz=foot.pos.z;
  fwdV.set(-Math.sin(h),0,-Math.cos(h));
  const aiming=aimHold>0;
  const dist=aiming?3.6:4.6, height=aiming?2.2:2.6;
  const rx=Math.cos(h), rz=-Math.sin(h), side=aiming?0.7:0.35;   // over-the-shoulder
  camGoal.set(px-fwdV.x*dist+rx*side, height, pz-fwdV.z*dist+rz*side);
  const k=1-Math.exp(-dt*7);
  camPos.x+=(camGoal.x-camPos.x)*k;
  camPos.y+=(camGoal.y-camPos.y)*k;
  camPos.z+=(camGoal.z-camPos.z)*k;
  camera.position.copy(camPos);
  camera.lookAt(px+fwdV.x*5+rx*side, 1.45, pz+fwdV.z*5+rz*side);
  if(Math.abs(60-lastFov)>0.25){
    lastFov+=(60-lastFov)*Math.min(1,dt*4);
    camera.fov=lastFov; camera.updateProjectionMatrix();
  }
}
function updateFoot(dt){
  foot.update(controls.input, dt, footCollide);
  person.position.x=foot.pos.x; person.position.z=foot.pos.z;
  person.rotation.y=foot.heading;
  if(controls.consumeCycle()){
    const id=cycleWeapon(save);
    saveSave(save); syncPersonGear();
    if(save.weapons.length) toast(id ? weaponDef(id).name : 'Holstered', 1200);
    else toast('No guns yet — visit LOCK & LOAD', 1600);
  }
  weaponCtx.pos.x=foot.pos.x; weaponCtx.pos.z=foot.pos.z; weaponCtx.heading=foot.heading;
  const edge=controls.consumeFireEdge();
  if(edge && !save.equipped && save.weapons.length){ cycleWeapon(save); syncPersonGear(); }
  const res=weapons.update(dt, weaponCtx, controls.input.fire, edge);
  if(res.fired){
    kickRecoil(person); aimHold=0.9; ammoDirty++;
    $('weapon-ammo').textContent=String(save.ammo[save.equipped]|0);
  }
  if(controls.input.fire && save.equipped) aimHold=Math.max(aimHold,0.3);
  aimHold=Math.max(0, aimHold-dt);
  animateCharacter(person, foot.phase, foot.speed, aimHold>0 && !!save.equipped, dt);
  updateFootCamera(dt);
  if(ammoDirty && frameN%120===0){ saveSave(save); ammoDirty=0; }
}

// ---------------- context action button (get in/out, shop) ----------------
function setAction(kind, target, text){
  actionKind=kind; actionTarget=target;
  if(text!==actionText){
    actionText=text;
    const b=$('btn-action');
    b.textContent=text||'';
    b.classList.toggle('hidden', !text);
  }
}
function updateAction(){
  if(onFoot){
    let best=null, bd=2.4;
    for(const s of shops.stores){
      const d=dist2D(foot.pos.x, foot.pos.z, s.door.x, s.door.z);
      if(d<bd){ bd=d; best=s; }
    }
    if(best) return setAction('shop', best, (best.type==='garage'?'🔧 ':best.type==='guns'?'🔫 ':'👕 ')+'ENTER '+best.name);
    if(dist2D(foot.pos.x, foot.pos.z, physics.pos.x, physics.pos.z)<4.2) return setAction('in', null, '🚗 GET IN');
    return setAction(null, null, '');
  }
  if(Math.abs(tele.speed)<4) return setAction('out', null, '🚪 GET OUT');
  setAction(null, null, '');
}
function doAction(){
  if(actionKind==='out') getOut();
  else if(actionKind==='in') getIn();
  else if(actionKind==='shop' && actionTarget){
    if(actionTarget.type==='garage') openGarage('play');
    else openStore(actionTarget);
  }
}
function openStore(store){
  storeOpen=true;
  setAction(null,null,'');
  audio.beep(700,0.06);
  storeUI.open(store);
}
function closeStore(){
  storeOpen=false;
  storeUI.close();
  syncPersonGear(); syncCash();
}

// ---------------- chase camera ----------------
function updateCamera(dt){
  const h=physics.heading, px=physics.pos.x, pz=physics.pos.z;
  fwdV.set(-Math.sin(h),0,-Math.cos(h));
  const spd=Math.abs(tele.speed);
  const dist=8.5+spd*0.045, height=3.6+spd*0.014;
  camGoal.set(px-fwdV.x*dist, height, pz-fwdV.z*dist);
  const k=1-Math.exp(-dt*5.5);
  camPos.x+=(camGoal.x-camPos.x)*k;
  camPos.y+=(camGoal.y-camPos.y)*k;
  camPos.z+=(camGoal.z-camPos.z)*k;
  camera.position.copy(camPos);
  camera.lookAt(px+fwdV.x*5, 1.7, pz+fwdV.z*5);
  const wantFov=62+Math.min(14,spd*0.22)+(tele.nitro?6:0);
  if(Math.abs(wantFov-lastFov)>0.25){
    lastFov+=(wantFov-lastFov)*Math.min(1,dt*4);
    camera.fov=lastFov;
    camera.updateProjectionMatrix();
  }
}

// ---------------- HUD ----------------
function gearFor(mph){
  if(mph<2) return 'N';
  if(mph<20) return '1';
  if(mph<40) return '2';
  if(mph<65) return '3';
  if(mph<95) return '4';
  if(mph<125) return '5';
  return '6';
}
function updateHUD(){
  const mph=Math.abs(tele.speed)*2.2;
  $('speed-val').textContent=Math.round(mph);
  $('gear-hud').textContent=gearFor(mph);
  $('nitro-fill').style.width=(Math.max(0,Math.min(1,tele.nitroFrac))*100).toFixed(1)+'%';
}

// ---------------- state transitions ----------------
function hideOverlays(){ for(const o of ['main-menu','pause-menu','garage']) $(o).classList.add('hidden'); }
function leaveFootMode(){
  if(storeOpen) closeStore();
  if(onFoot) getIn();
  setAction(null,null,'');
}

function showMenu(){
  state='menu'; paused=false; garageOpen=false;
  if(dragMode && dragMode.active) dragMode.exit();
  leaveFootMode();
  if(controls){ controls.setMode('drive'); controls.detach(); }
  hideOverlays();
  $('main-menu').classList.remove('hidden');
  $('hud').classList.add('hidden');
  $('touch-controls').classList.add('hidden');
  $('drag-ui').classList.add('hidden');
  audio.engine(0,0); audio.skid(false);
}

function startFreeroam(){
  if(dragMode && dragMode.active) dragMode.exit();
  leaveFootMode();
  if(headlight) headlight.intensity=headlightBase;
  $('drag-ui').classList.add('hidden');
  state='freeroam'; paused=false; garageOpen=false;
  hideOverlays();
  $('hud').classList.remove('hidden');
  $('touch-controls').classList.remove('hidden');
  controls.attach(); controls.setMode('drive');
  placeAtSpawn();
  syncCash();
  connectMP();
  toast('Free roam — drift to earn cash, find the drag strip!');
}

function startDrag(){
  leaveFootMode();
  state='drag'; paused=false; garageOpen=false;
  if(headlight) headlight.intensity=0;
  hideOverlays();
  $('hud').classList.add('hidden');
  $('touch-controls').classList.remove('hidden');
  controls.attach(); controls.setMode('drag');
  $('drag-ui').classList.remove('hidden');
  dragMode.enter();
}

function openPause(){
  if(state!=='freeroam' && state!=='drag') return;
  if(garageOpen || storeOpen) return;
  paused=true;
  setAction(null,null,'');
  hideOverlays();
  $('pause-menu').classList.remove('hidden');
}
function closePause(){ paused=false; hideOverlays(); }

function openGarage(ret){
  garageReturn=ret; garageOpen=true;
  garage.refresh(); syncCash();
  hideOverlays();
  $('garage').classList.remove('hidden');
}
function closeGarage(){
  garageOpen=false;
  hideOverlays();
  $('hud').classList.toggle('hidden', state!=='freeroam');
  if(person) syncPersonGear();
  if(garageReturn==='menu') showMenu();
  else if(garageReturn==='pause'){ paused=true; $('pause-menu').classList.remove('hidden'); }
  else paused=false;
  syncCash();
}

// ---------------- multiplayer ----------------
function setMp(cls, txt){
  const e=$('mp-status');
  e.className='mp-status '+cls;
  e.textContent='● '+txt;
}
async function connectMP(){
  if(mp || mpTried) return;
  mpTried=true;
  // Multiplayer is only attempted when a relay URL is configured.
  // With MP_SERVER_URL == '' the menu's online indicator stays hidden —
  // the game is fully solo and never advertises a dead feature.
  let mod=null, url='';
  try{ mod=await import('./multiplayer.js'); }
  catch(e){ return; }
  try{ const cfg=await import('./config.js'); url=cfg.MP_SERVER_URL||''; }
  catch(e){ /* no config */ }
  if(!url) return;
  $('mp-status').classList.remove('hidden');
  setMp('connecting','connecting…');
  try{
    mp=mod.createMultiplayer(buildCar, CAR_DEFS);
    mp.connect(scene);
    setMp('on', mp.status||'online');
  }catch(e){ setMp('off','error'); }
}

// ---------------- scene ----------------
async function initScene(){
  renderer=new THREE.WebGLRenderer({antialias:false, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
  renderer.setSize(orient.view.w, orient.view.h);
  // AAA: filmic tone mapping for that Unreal look
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.0;
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFShadowMap;
  $('game-container').appendChild(renderer.domElement);

  scene=new THREE.Scene();
  // fog set by city.js; sky dome replaces flat background
  camera=new THREE.PerspectiveCamera(62, orient.view.w/orient.view.h, 0.1, 3000);

  city=buildCity(scene, STORE_LOTS);   // creates sun + hemi + fog + world (store lots kept clear)
  shops=buildStores(scene, city);       // gun store + range, clothing, auto shop

  // image-based lighting: PMREM from a neutral room so paint/glass/chrome reflect
  try{
    const { RoomEnvironment } = await import('three/addons/environments/RoomEnvironment.js');
    const pmrem=new THREE.PMREMGenerator(renderer);
    scene.environment=pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
  }catch(e){ console.warn('env map off', e); }

  // gradient sky dome + sun rig
  const dome=createSkyDome();
  scene.add(dome.mesh);
  skyEnv={ uniforms:dome.uniforms, sun:city.sun, hemi:city.hemi, scene, renderer };
  setTimeOfDay('day', true);

  // post-processing: bloom + vignette (graceful fallback if addons fail)
  try{
    const mod=await import('./postfx.js');
    postfx=mod.createPostFX(renderer, scene, camera);
    postfx.setBloomStrength(SKY_PRESETS.day.bloom);
  }catch(e){ console.warn('postfx off', e); postfx=null; }

  // adaptive quality
  qm=new QualityManager('auto');
  qm.onChange(applyQuality);
  applyQuality(qm.level, qualitySettings(qm.level));

  // particles
  smoke=new PuffPool(scene, 70, { color:0xd8d8d8, opacity:0.42 });
  exhaust=new PuffPool(scene, 40, { color:0x777777, opacity:0.30, size:0.9 });
  skids=new SkidMarks(scene, 500);

  // player headlight (single shadowless spot, dusk/night only)
  headlight=new THREE.SpotLight(0xcfe4ff, 0, 60, 0.5, 0.45, 1.2);
  headlightTarget=new THREE.Object3D();
  scene.add(headlightTarget);
  headlight.target=headlightTarget;
  scene.add(headlight);
}

function applyQuality(level, s){
  const pr=Math.min(window.devicePixelRatio||1, s.pixelRatioCap);
  renderer.setPixelRatio(pr);
  if(postfx){ postfx.setPixelRatio(Math.min(pr,1)); postfx.setSize(orient.view.w, orient.view.h); postfx.setBloomEnabled(s.bloom); }
  const wantShadows=s.shadows;
  if(renderer.shadowMap.enabled!==wantShadows || (city&&city.sun.castShadow!==wantShadows)){
    renderer.shadowMap.enabled=wantShadows;
    if(city) city.sun.castShadow=wantShadows;
    scene.traverse(o=>{ if(o.material) o.material.needsUpdate=true; });
  }
  if(city) city.sun.shadow.mapSize.set(s.shadowSize, s.shadowSize);
  particleScale=s.particles;
  if(skids) skids.setVisible(s.particles>0.3);
}

function setTimeOfDay(name, silent){
  const order=PRESET_ORDER;
  if(typeof name==='string') todIdx=order.indexOf(name);
  if(todIdx<0) todIdx=0;
  const key=order[todIdx];
  const p=applySkyPreset(skyEnv, key);
  const glowF = key==='day'?0 : key==='sunset'?0.45 : 1;
  if(city) city.setGlow(glowF);
  if(postfx) postfx.setBloomStrength(p.bloom);
  headlightBase = key==='day' ? 0 : key==='sunset' ? 60 : 160;
  if(headlight && state!=='drag') headlight.intensity=headlightBase;
  const btn=$('tod-btn');
  if(btn) btn.textContent = key==='day' ? '☀️' : key==='sunset' ? '🌇' : '🌙';
  if(!silent) toast(p.label+' mode');
}
function cycleTimeOfDay(){ todIdx=(todIdx+1)%PRESET_ORDER.length; setTimeOfDay(); }

// ---------------- main loop ----------------
let last=performance.now();
function frame(now){
  requestAnimationFrame(frame);
  let dt=(now-last)/1000; last=now;
  if(!(dt>0)) dt=0.016;
  if(dt>0.1) dt=0.1;                       // clamp
  frameN++;

  if(state==='freeroam' && !paused && !garageOpen && !storeOpen && onFoot){
    updateFoot(dt);
    city.update(dt, foot.pos);
    shops.update(dt);
    smoke.update(dt); exhaust.update(dt);
    if(qm) qm.update(dt);
    audio.engine(0,0); audio.skid(false);
    parkedCar.x=physics.pos.x; parkedCar.z=physics.pos.z;
    minimap.draw(foot.pos.x, foot.pos.z, foot.heading, parkedCar);
    updateAction();
    if(controls.consumeAction()) doAction();
  }else if(state==='freeroam' && !paused && !garageOpen && !storeOpen){
    tele=physics.update(controls.input, dt, collide);
    // stunt rewards: drifting pays cash, so free roam has its own economy
    const award=stuntUpdate(stunts, tele.drifting, tele.speed, dt);
    if(award>0){ addCash(award); toast('DRIFT +$'+award.toLocaleString()); }
    cityPos.x=physics.pos.x; cityPos.z=physics.pos.z;
    city.update(dt, cityPos);
    syncCarTransform(dt);
    updateCamera(dt);
    updateHUD();
    updateEffects(dt);
    shops.update(dt);
    weapons.update(dt, weaponCtx, false, false);   // let tracers fade
    minimap.draw(physics.pos.x, physics.pos.z, physics.heading, null);
    updateAction();
    if(controls.consumeAction()) doAction();
    if(qm) qm.update(dt);
    const rpm=Math.min(1, Math.abs(tele.speed)/(carStats.topSpeed*1.15));
    audio.engine(rpm, Math.abs(controls.input.throttle||0));
    audio.skid(tele.drifting);
    if(mp){
      mpLocal.x=physics.pos.x; mpLocal.z=physics.pos.z;
      mpLocal.heading=physics.heading; mpLocal.speed=tele.speed; mpLocal.car=carDef.id;
      mp.update(dt, mpLocal);
      if(frameN%120===0 && mp.status) setMp('on', mp.status);
    }
  }else if(state==='drag' && !paused && !garageOpen){
    if(dragMode.active) dragMode.update(dt);
  }else{
    audio.engine(0,0); audio.skid(false);
  }
  if(smoke && (state!=='freeroam'||paused||garageOpen||storeOpen)){ smoke.update(dt); exhaust.update(dt); }
  if(postfx) postfx.render();
  else renderer.render(scene, camera);
}

// ---------------- UI wiring ----------------
function wireUI(){
  $('m-freeroam').onclick=()=>{ audio.unlock(); orient.goLandscape(); audio.beep(600,0.06); startFreeroam(); };
  $('m-drag').onclick=()=>{ audio.unlock(); orient.goLandscape(); audio.beep(600,0.06); startDrag(); };
  $('store-close').onclick=()=>{ audio.beep(500,0.05); closeStore(); };
  $('m-garage').onclick=()=>{ audio.unlock(); openGarage('menu'); };
  $('p-resume').onclick=()=>{ audio.beep(600,0.05); orient.goLandscape(); closePause(); };
  $('p-freeroam').onclick=()=>{ audio.beep(600,0.05); startFreeroam(); };
  $('p-drag').onclick=()=>{ audio.beep(600,0.05); startDrag(); };
  $('p-garage').onclick=()=>openGarage('pause');
  $('p-quit').onclick=()=>showMenu();
  $('menu-btn').onclick=openPause;
  $('garage-close').onclick=closeGarage;
  $('drag-exit').onclick=()=>{ if(dragMode.active) dragMode.exit(); startFreeroam(); };
  // AAA: time-of-day + quality buttons
  if($('tod-btn')) $('tod-btn').onclick=()=>{ audio.beep(600,0.05); cycleTimeOfDay(); };
  if($('gfx-btn')) $('gfx-btn').onclick=()=>{
    audio.beep(600,0.05);
    const m=qm.cycleMode();
    $('gfx-btn').textContent = m==='auto' ? '✨' : m==='high' ? '✨+' : '✨−';
    toast('Graphics: '+m.toUpperCase()+' ('+QUALITY_LEVELS[qm.level]+')');
  };

  // autoplay policy: unlock WebAudio on first gesture
  window.addEventListener('pointerdown', ()=>audio.unlock());
  window.addEventListener('keydown', ()=>audio.unlock());

  // mobile: no context menu / pinch zoom / scroll
  document.addEventListener('contextmenu', e=>e.preventDefault());
  document.addEventListener('gesturestart', e=>e.preventDefault());

  // resizing / rotation is handled by onViewResize (orientation.js callback)
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden && (state==='freeroam'||state==='drag') && !paused) openPause();
  });
}

function onViewResize(w, h){
  if(!renderer) return;
  camera.aspect=w/h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  if(postfx) postfx.setSize(w, h);
}

// ---------------- boot ----------------
async function boot(){
  try{
    save=ensureArsenal(loadSave());
    audio=createAudio();
    orient=initOrientation(onViewResize);
    await initScene();
    controls=createControls({ isRotated:()=>orient.rotated });
    foot=new FootPhysics();
    person=buildCharacter(save.outfit);
    person.visible=false;
    scene.add(person);
    weapons=createWeapons(scene);
    Object.assign(weaponCtx, { save, colliders:city.colliders, targets:shops.targets, audio, toast,
      onTargetHit:()=>{ addCash(TARGET_PAY); toast('TARGET +$'+TARGET_PAY, 900); } });
    storeUI=createStoreUI({ save, persist:()=>saveSave(save), toast:m=>toast(m,1600),
      beep:(f,d)=>audio.beep(f,d), onChange:()=>{ syncCash(); syncPersonGear(); } });
    minimap=createMinimap($('minimap'), shops.stores);
    syncPersonGear(); updateModeHUD();
    // test hook: ?debug exposes a teleport for automated smoke tests
    if(/[?&]debug\b/.test(location.search)) window.__cd={ tp:(x,z,h)=>{ if(onFoot){ foot.reset(x,z,h||0); } else { physics.pos.x=x; physics.pos.z=z; physics.heading=h||0; } }, save:()=>save, stores:()=>shops.stores };
    rebuildCar();
    physics=new CarPhysics(carStats);
    placeAtSpawn();
    garage=createGarage({
      save,
      getDef:id=>CAR_DEFS.find(d=>d.id===id),
      onSelectCar:()=>refreshSceneKeep(),
      onPaint:()=>refreshSceneKeep(),
      onWheels:()=>refreshSceneKeep(),
      refreshScene:()=>refreshSceneKeep(),
    });
    dragMode=createDragMode({
      scene, camera, buildCar, CAR_DEFS, effectiveStats,
      getPlayer:()=>{ playerInfo.def=carDef; playerInfo.stats=carStats; playerInfo.group=carGroup; return playerInfo; },
      controls, audio, addCash, toast, city,
    });
    wireUI();
    syncCash();
    $('loading').classList.add('hidden');
    showMenu();
    requestAnimationFrame(frame);
  }catch(err){
    console.error(err);
    $('loading').innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(err&&err.message||err)+'</p>';
  }
}
boot();
