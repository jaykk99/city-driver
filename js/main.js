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
import { ensureSkins, carSkinFor, packLook, unpackLook } from './skins.js';
import { createSkinEditor } from './skineditor.js';
import { createInteriors, styleFor, STYLE_NAMES } from './interiors.js';
import { createTutorial, TUTORIAL_REWARD } from './tutorial.js';
import { createMultiplayer } from './multiplayer.js';
import { createBlood } from './blood.js';
import { createPeople } from './npcs.js';
import { createTraffic } from './traffic.js';

const { CAR_DEFS, buildCar, effectiveStats, applyCarSkin } = Cars;

const $ = id => document.getElementById(id);

// ---------------- state ----------------
let renderer, scene, camera, city;
let carGroup=null, carDef=null, carStats=null;
let physics=null, controls=null, audio=null, dragMode=null, garage=null, mp=null;
let save=null;
let state='boot';              // menu | freeroam | drag
let paused=false, garageOpen=false, garageReturn='menu';
let tele={speed:0,drifting:false,nitro:false,nitroFrac:1,steer:0};
// --- buildings / editor / tutorial / car pick ---
let interiors=null, inside=null, curColliders=null;
let editor=null, editorOpen=false, editorReturn='menu', editorAngle=0.6;
let tutorial=null, pickOpen=false;
// --- world life: pedestrians, traffic, blood; player health ---
let blood=null, people=null, traffic=null, trafficHits=null;
let hp=100, dead=false, deadT=0, hurtFlash=0;
const npcPlayer={x:0,z:0,alive:true,hidden:false,inCar:true};
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
const mpLocal={name:'',mode:'car',x:0,z:0,h:0,speed:0,car:'sport',look:null,px:0,pz:0,ph:0,b:-1,w:null};
let lookCache=null;
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
  applyCarSkin(carGroup, save.paint[carDef.id], carSkinFor(save, carDef.id));
  scene.add(carGroup);
  lookCache=null;
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
function collide(x, z){
  const r=collideR(x, z, 1.15);
  if(traffic && !inside){
    const hit=traffic.collide(r, 1.15);
    if(hit && physics){
      const sp=Math.hypot(physics.vel.x, physics.vel.z);
      physics.vel.x*=0.55; physics.vel.z*=0.55;
      if(sp>8 && audio) audio.beep(90, 0.08);
    }
  }
  return r;
}
function collideR(x, z, R){
  let cx=x, cz=z, hitX=false, hitZ=false;
  const cols=curColliders||city.colliders;
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
  if(inside) return res;
  if(traffic) traffic.collide(res, r);
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
  if(inside){
    // keep the camera inside the room so walls never block the view
    const bd=inside.room.bounds, m=0.45;
    camGoal.x=Math.max(bd.minX+m, Math.min(bd.maxX-m, camGoal.x));
    camGoal.z=Math.max(bd.minZ+m, Math.min(bd.maxZ-m, camGoal.z));
    camGoal.y=Math.min(camGoal.y, 3.9);
  }
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
    if(people && !inside) people.scare(foot.pos.x, foot.pos.z, 45);
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
// nearest city building whose wall you're standing against (or its front door)
function nearBuilding(x, z){
  let best=null, bd=1.5;
  for(const b of city.buildings){
    const dd=dist2D(x, z, b.door.x+b.door.nx*0.5, b.door.z+b.door.nz*0.5);
    if(dd<2.2) return b;                        // front door wins
    const qx=Math.max(b.minX, Math.min(x, b.maxX)), qz=Math.max(b.minZ, Math.min(z, b.maxZ));
    const d=Math.hypot(x-qx, z-qz);
    if(d<bd){ bd=d; best=b; }
  }
  return best;
}
function snapFootCamera(){
  const h=foot.heading;
  fwdV.set(-Math.sin(h),0,-Math.cos(h));
  camPos.set(foot.pos.x-fwdV.x*4.6, 2.6, foot.pos.z-fwdV.z*4.6);
  if(inside){
    const bd=inside.room.bounds, m=0.45;
    camPos.x=Math.max(bd.minX+m, Math.min(bd.maxX-m, camPos.x));
    camPos.z=Math.max(bd.minZ+m, Math.min(bd.maxZ-m, camPos.z));
  }
  camera.position.copy(camPos);
}
function enterBuilding(b){
  const room=interiors.get(styleFor(b.id));
  // where to come back out: at the door if you used it, else where you stood
  const atDoor=dist2D(foot.pos.x, foot.pos.z, b.door.x, b.door.z)<2.6;
  let bx, bz, nx, nz;
  if(atDoor){ nx=b.door.nx; nz=b.door.nz; bx=b.door.x+nx*1.4; bz=b.door.z+nz*1.4; }
  else{
    const qx=Math.max(b.minX, Math.min(foot.pos.x, b.maxX)), qz=Math.max(b.minZ, Math.min(foot.pos.z, b.maxZ));
    const dx=foot.pos.x-qx, dz=foot.pos.z-qz, d=Math.hypot(dx,dz)||1;
    nx=dx/d; nz=dz/d; bx=qx+nx*1.4; bz=qz+nz*1.4;
  }
  inside={ b, room, back:{ x:bx, z:bz, heading:Math.atan2(-nx, -nz) } };
  curColliders=room.colliders;
  weaponCtx.colliders=room.colliders; weaponCtx.targets=[];
  foot.reset(room.spawn.x, room.spawn.z, room.spawn.heading);
  person.position.set(foot.pos.x, 0, foot.pos.z);
  snapFootCamera();
  setAction(null,null,'');
  audio.beep(640,0.07);
  toast('🏢 Inside: '+STYLE_NAMES[room.style]+' — EXIT pad is behind you', 2200);
}
function exitBuilding(){
  if(!inside) return;
  const bk=inside.back;
  inside=null; curColliders=null;
  weaponCtx.colliders=city.colliders; weaponCtx.targets=shops.targets;
  const r=footCollide(bk.x, bk.z, 0.45);
  foot.reset(r.x, r.z, bk.heading);
  person.position.set(foot.pos.x, 0, foot.pos.z);
  snapFootCamera();
  setAction(null,null,'');
  audio.beep(520,0.07);
}
function updateAction(){
  if(onFoot){
    if(inside){
      const d=dist2D(foot.pos.x, foot.pos.z, inside.room.exit.x, inside.room.exit.z);
      if(d<0.8){ exitBuilding(); return; }      // step on the pad
      if(d<2.4) return setAction('exit', null, '🚪 EXIT BUILDING');
      return setAction(null, null, '');
    }
    let best=null, bd=2.4;
    for(const s of shops.stores){
      const d=dist2D(foot.pos.x, foot.pos.z, s.door.x, s.door.z);
      if(d<bd){ bd=d; best=s; }
    }
    if(best) return setAction('shop', best, (best.type==='garage'?'🔧 ':best.type==='guns'?'🔫 ':'👕 ')+'ENTER '+best.name);
    if(dist2D(foot.pos.x, foot.pos.z, physics.pos.x, physics.pos.z)<4.2) return setAction('in', null, '🚗 GET IN');
    const b=nearBuilding(foot.pos.x, foot.pos.z);
    if(b) return setAction('enter', b, '🏢 ENTER BUILDING');
    return setAction(null, null, '');
  }
  if(Math.abs(tele.speed)<4) return setAction('out', null, '🚪 GET OUT');
  setAction(null, null, '');
}
function doAction(){
  if(actionKind==='out') getOut();
  else if(actionKind==='in') getIn();
  else if(actionKind==='enter' && actionTarget) enterBuilding(actionTarget);
  else if(actionKind==='exit') exitBuilding();
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

// ---------------- health / wasted ----------------
function syncHP(){
  const f=$('hp-fill'); if(!f) return;
  f.style.width=Math.max(0,hp)+'%';
  f.style.background = hp>50 ? '#4ade80' : hp>25 ? '#fbbf24' : '#ef4444';
}
function hurtPlayer(dmg){
  if(dead || state!=='freeroam') return;
  hp-=onFoot ? dmg : dmg*0.5;           // the car soaks up half
  hurtFlash=0.35;
  syncHP();
  if(audio) audio.beep(160, 0.05);
  if(hp<=0) die();
}
function die(){
  dead=true; deadT=0; hp=0; syncHP();
  setAction(null,null,'');
  $('wasted').classList.remove('hidden');
  if(onFoot && person){ person.rotation.x=-Math.PI/2+0.05; person.position.y=0.12; }
  if(blood){ const px=onFoot?foot.pos.x:physics.pos.x, pz=onFoot?foot.pos.z:physics.pos.z; blood.pool(px, pz, 2.6); }
  if(typeof onPlayerDied==='function') onPlayerDied();
}
function respawn(){
  dead=false; hp=100; syncHP();
  $('wasted').classList.add('hidden');
  if(person){ person.rotation.x=0; person.position.y=0; }
  const fee=Math.min(500, Math.round(save.cash*0.05));
  if(fee>0){ save.cash-=fee; saveSave(save); syncCash(); }
  leaveFootMode();
  if(typeof respawnPoint==='function'){ const sp=respawnPoint(); physics.pos.x=sp.x; physics.pos.z=sp.z; physics.heading=sp.heading; physics.vel.x=physics.vel.z=0; snapCamera(); syncCarTransform(0); }
  else placeAtSpawn();
  toast(fee>0 ? '🏥 Hospital bill: -$'+fee : '🏥 Back on your feet', 2200);
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
// ESC / pause shouldn't fight the editor or car picker
function overlayBusy(){ return editorOpen || pickOpen; }
function leaveFootMode(){
  if(storeOpen) closeStore();
  if(inside) exitBuilding();
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
  if(tutorial && tutorial.active) tutorial.stop();
  $('objective').classList.add('hidden');
  $('m-tutorial').classList.toggle('hidden', !!save.tutorialDone);
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
  if(!save.tutorialDone && !save.tutorialSkipped) startTutorial();
  else toast('Free roam — drift for cash, walk into any building!');
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
  if(garageOpen || storeOpen || overlayBusy()) return;
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

// ---------------- skin editor (free) ----------------
// The preview is the live scene: the camera orbits your car or your driver.
let editorPersonWasVisible=false;
function openEditor(ret, tab){
  editorReturn=ret;
  if(garageOpen){ garageOpen=false; }
  if(state==='freeroam') paused=true;
  editorOpen=true;
  hideOverlays();
  $('hud').classList.add('hidden');
  $('touch-controls').classList.add('hidden');
  setAction(null,null,'');
  editorPersonWasVisible=person.visible;
  editor.open(tab||'car');
}
function editorTab(tab){
  // driver tab: stand the driver beside the car if they're not already out
  if(!onFoot){
    if(tab==='driver'){
      const sp=exitSpot(physics.pos.x, physics.pos.z, physics.heading);
      person.position.set(sp.x, 0, sp.z); person.rotation.y=physics.heading;
      animateCharacter(person, 0, 0, false, 0);
      person.visible=true;
    }else person.visible=false;
  }
}
function closeEditor(){
  editorOpen=false;
  editor.close();
  person.visible=onFoot;
  syncPersonGear();
  if(editorReturn==='menu'){ showMenu(); return; }
  if(editorReturn==='garage'){ openGarage(garageReturn); return; }
  if(state==='freeroam'||state==='drag'){
    $('hud').classList.toggle('hidden', state!=='freeroam');
    $('touch-controls').classList.remove('hidden');
    if(editorReturn==='pause'){ paused=true; $('pause-menu').classList.remove('hidden'); }
    else paused=false;
    if(onFoot) snapFootCamera(); else snapCamera();
  }
}
function updateEditorCamera(dt){
  editorAngle+=dt*0.35;
  const drv=editor.tab==='driver';
  const tx=drv?person.position.x:physics.pos.x, tz=drv?person.position.z:physics.pos.z;
  const R=drv?3.4:7.2, H=drv?1.7:2.6, Y=drv?1.05:0.75;
  camera.position.set(tx+Math.sin(editorAngle)*R, H, tz+Math.cos(editorAngle)*R);
  // look a bit to the right of the subject so it sits left of the panel
  const rx=Math.cos(editorAngle), rz=-Math.sin(editorAngle);
  const off=drv?0.9:2.2;
  camera.lookAt(tx+rx*off, Y, tz+rz*off);
  if(Math.abs(55-lastFov)>0.25){ lastFov=55; camera.fov=55; camera.updateProjectionMatrix(); }
  cityPos.x=tx; cityPos.z=tz; city.update(dt, cityPos);
}

// ---------------- tutorial mission ($100K + free car) ----------------
function startTutorial(){
  if(!tutorial) return;
  tutorial.start();
  $('objective').classList.remove('hidden');
  updateObjective();
  toast('🎓 TUTORIAL — finish it for $'+TUTORIAL_REWARD.toLocaleString()+' + a free car!', 3200);
}
function updateObjective(){
  if(!tutorial.active){ $('objective').classList.add('hidden'); return; }
  $('obj-step').textContent='STEP '+(tutorial.step+1)+'/'+tutorial.total;
  $('obj-text').textContent=tutorial.text;
  const tg=tutorial.target();
  const px=onFoot?foot.pos.x:physics.pos.x, pz=onFoot?foot.pos.z:physics.pos.z, h=onFoot?foot.heading:physics.heading;
  const arrow=$('obj-arrow'), dist=$('obj-dist');
  if(tg && !inside){
    const a=Math.atan2(-(tg.x-px), -(tg.z-pz));
    const rel=Math.atan2(Math.sin(a-h), Math.cos(a-h));
    arrow.style.transform='rotate('+(-rel).toFixed(3)+'rad)';
    arrow.classList.remove('hidden');
    dist.textContent=Math.round(Math.hypot(tg.x-px, tg.z-pz))+' m';
  }else{
    arrow.classList.add('hidden');
    dist.textContent=tutorial.text.startsWith('DRIFT') ? Math.round(tutorial.driftProgress*100)+'%' : '';
  }
}
function finishTutorial(){
  save.tutorialDone=true;
  addCash(TUTORIAL_REWARD);
  saveSave(save);
  $('objective').classList.add('hidden');
  audio.beep(880,0.1); setTimeout(()=>audio.beep(1175,0.14),120);
  openCarPick();
}
function openCarPick(){
  pickOpen=true;
  setAction(null,null,'');
  const maxStat={topSpeed:1,accel:1,handling:1,grip:1};
  for(const d of CAR_DEFS) for(const k in maxStat) maxStat[k]=Math.max(maxStat[k], d.stats[k]);
  const bar=(l,v,m)=>`<div class="stat-row"><span>${l}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(v/m*100))}%"></i></div></div>`;
  $('pick-list').innerHTML=CAR_DEFS.map(d=>`<div class="car-card"><div class="cinfo"><b>${d.name}</b><small>${d.desc} · worth $${d.price.toLocaleString()}</small>`+
    `<div class="stat-bars">${bar('SPD',d.stats.topSpeed,maxStat.topSpeed)}${bar('ACC',d.stats.accel,maxStat.accel)}${bar('HDL',d.stats.handling,maxStat.handling)}${bar('GRP',d.stats.grip,maxStat.grip)}</div></div>`+
    `<button class="buy-btn" data-id="${d.id}">PICK FREE</button></div>`).join('');
  $('car-pick').classList.remove('hidden');
}
function pickCar(id){
  const def=CAR_DEFS.find(d=>d.id===id); if(!def) return;
  if(!save.owned.includes(id)) save.owned.push(id);
  if(!save.upgrades[id]) save.upgrades[id]={engine:0,turbo:0,tires:0,suspension:0,nitro:0};
  if(typeof save.paint[id]!=='number') save.paint[id]=def.colors[0];
  save.currentCar=id;
  saveSave(save);
  refreshSceneKeep();
  $('car-pick').classList.add('hidden');
  pickOpen=false;
  syncCash();
  toast('🏆 '+def.name+' is yours! +$'+TUTORIAL_REWARD.toLocaleString()+' in the bank', 3200);
  audio.beep(990,0.1);
}

// ---------------- multiplayer ----------------
function setMp(cls, n){
  const e=$('mp-status');
  e.classList.remove('hidden');
  e.className='mp-status '+cls;
  e.textContent = cls==='on' ? '● online · '+n+(n===1?' player':' players') : cls==='connecting' ? '● connecting…' : '● offline';
  const o=$('online-hud');
  o.textContent = cls==='on' ? '🌐 '+n+' online' : '🌐 …';
  o.classList.toggle('dim', cls!=='on');
}
function buildLocalPacket(){
  mpLocal.name=save.name;
  mpLocal.car=carDef.id;
  if(!lookCache) lookCache=packLook(save, carDef.id);
  mpLocal.look=lookCache;
  mpLocal.b=inside ? inside.b.id : -1;
  if(onFoot){
    mpLocal.mode='foot'; mpLocal.x=foot.pos.x; mpLocal.z=foot.pos.z; mpLocal.h=foot.heading; mpLocal.speed=foot.speed;
    mpLocal.px=physics.pos.x; mpLocal.pz=physics.pos.z; mpLocal.ph=physics.heading;
    mpLocal.w=save.equipped||null;
  }else{
    mpLocal.mode='car'; mpLocal.x=physics.pos.x; mpLocal.z=physics.pos.z; mpLocal.h=physics.heading; mpLocal.speed=tele.speed;
    mpLocal.w=null;
  }
  return mpLocal;
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

  const playing = state==='freeroam' && !paused && !garageOpen && !storeOpen && !editorOpen && !pickOpen && !dead;
  if(editorOpen){
    updateEditorCamera(dt);
  }else if(playing && onFoot){
    updateFoot(dt);
    city.update(dt, foot.pos);
    shops.update(dt);
    interiors.update(dt, inside && inside.room);
    smoke.update(dt); exhaust.update(dt);
    if(qm) qm.update(dt);
    audio.engine(0,0); audio.skid(false);
    parkedCar.x=physics.pos.x; parkedCar.z=physics.pos.z;
    if(inside) minimap.draw(inside.back.x, inside.back.z, foot.heading, parkedCar, mp);
    else minimap.draw(foot.pos.x, foot.pos.z, foot.heading, parkedCar, mp);
    updateAction();
    if(controls.consumeAction()) doAction();
  }else if(playing){
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
    weapons.update(dt, weaponCtx, false, false);   // let bullets finish flying
    minimap.draw(physics.pos.x, physics.pos.z, physics.heading, null, mp);
    updateAction();
    if(controls.consumeAction()) doAction();
    if(qm) qm.update(dt);
    const rpm=Math.min(1, Math.abs(tele.speed)/(carStats.topSpeed*1.15));
    audio.engine(rpm, Math.abs(controls.input.throttle||0));
    audio.skid(tele.drifting);
  }else if(state==='drag' && !paused && !garageOpen && !editorOpen){
    if(dragMode.active) dragMode.update(dt);
  }else{
    audio.engine(0,0); audio.skid(false);
  }
  // world life: pedestrians, gunmen, traffic, blood
  if(state==='freeroam' && !paused && !garageOpen && !editorOpen){
    npcPlayer.x=onFoot?foot.pos.x:physics.pos.x; npcPlayer.z=onFoot?foot.pos.z:physics.pos.z;
    npcPlayer.alive=!dead; npcPlayer.hidden=!!inside; npcPlayer.inCar=!onFoot;
    if(!storeOpen && !pickOpen){
      people.update(dt, npcPlayer);
      traffic.update(dt, npcPlayer, onFoot?null:npcPlayer);
      traffic.hitList();
      if(!onFoot && !dead){
        const n=people.carHits(physics.pos.x, physics.pos.z, physics.heading, tele.speed);
        if(n){ audio.beep(70,0.12); physics.vel.x*=0.85; physics.vel.z*=0.85; }
      }
    }
    blood.update(dt);
    if(hurtFlash>0){ hurtFlash-=dt; $('hurt').style.opacity=String(Math.max(0,hurtFlash/0.35)*0.75); }
    if(dead){ deadT+=dt; if(deadT>3.2) respawn(); }
  }
  // tutorial mission
  if(playing && tutorial && tutorial.active){
    const r=tutorial.update(dt, { pos:onFoot?foot.pos:physics.pos, drifting:!onFoot&&tele.drifting,
      speed:onFoot?0:tele.speed, onFoot, inside:inside?inside.b.id:-1 });
    if(r==='next'){ audio.beep(880,0.08); toast('✅ Nice! Next: '+tutorial.text, 2200); }
    else if(r==='done') finishTutorial();
    if(frameN%3===0) updateObjective();
  }
  // multiplayer: always interpolate others; only broadcast while playing free roam
  if(mp){
    mp.update(dt, state==='freeroam' ? buildLocalPacket() : null, now);
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
  // skin editor / tutorial / car pick
  $('m-editor').onclick=()=>{ audio.unlock(); audio.beep(600,0.05); openEditor('menu','car'); };
  $('p-editor').onclick=()=>{ audio.beep(600,0.05); openEditor('pause', onFoot?'driver':'car'); };
  $('se-done').onclick=()=>{ audio.beep(500,0.05); closeEditor(); };
  $('m-tutorial').onclick=()=>{ audio.unlock(); orient.goLandscape(); audio.beep(600,0.06); save.tutorialSkipped=false; saveSave(save); startFreeroam(); };
  $('obj-skip').onclick=()=>{
    tutorial.stop(); save.tutorialSkipped=true; saveSave(save);
    $('objective').classList.add('hidden');
    toast('Tutorial skipped — replay it from the main menu for $100K', 2600);
  };
  $('pick-list').addEventListener('click', e=>{ const b=e.target.closest('button[data-id]'); if(b) pickCar(b.dataset.id); });
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
    save=ensureSkins(ensureArsenal(loadSave()));
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
      onTargetHit:()=>{ addCash(TARGET_PAY); toast('TARGET +$'+TARGET_PAY, 900); },
      onShot:shots=>{ if(mp) mp.sendShots(shots); } });
    interiors=createInteriors(scene);
    blood=createBlood(scene);
    people=createPeople({ scene, blood, audio, count:14,
      collide:(x,z,r)=>collideR(x,z,r),
      shoot:(a,b,c,d)=>weapons.remoteShot(a,b,c,d),
      onPlayerHit:(d)=>hurtPlayer(d) });
    traffic=createTraffic({ scene, lines:city.roadLines, buildCar, applyCarSkin, CAR_DEFS });
    trafficHits=traffic.hitList();
    weaponCtx.hitables=[people.hitList, trafficHits];
    weaponCtx.onPersonHit=(ref, dmg, dx, dz)=>{
      if(ref.kind==='ped' || ref.kind==='enemy') people.damage(ref, dmg, dx, dz);
      else if(typeof onRemotePlayerHit==='function' && ref.kind==='player') onRemotePlayerHit(ref, dmg, dx, dz);
    };
    tutorial=createTutorial(scene, city);
    storeUI=createStoreUI({ save, persist:()=>saveSave(save), toast:m=>toast(m,1600),
      beep:(f,d)=>audio.beep(f,d), onChange:()=>{ syncCash(); syncPersonGear(); } });
    minimap=createMinimap($('minimap'), shops.stores);
    syncPersonGear(); updateModeHUD();
    // test hook: ?debug exposes a teleport for automated smoke tests
    if(/[?&]debug\b/.test(location.search)) window.__cd={ tp:(x,z,h)=>{ if(onFoot){ foot.reset(x,z,h||0); } else { physics.pos.x=x; physics.pos.z=z; physics.heading=h||0; } }, save:()=>save, stores:()=>shops.stores,
      buildings:()=>city.buildings, inside:()=>inside&&{id:inside.b.id, style:inside.room.style}, enter:b=>enterBuilding(b), exit:()=>exitBuilding(),
      getOut:()=>getOut(), tut:()=>tutorial&&{active:tutorial.active, step:tutorial.step}, finishTut:()=>finishTutorial(), pick:id=>pickCar(id),
      mp:()=>mp&&{status:mp.status,count:mp.count}, state:()=>({state,onFoot,editorOpen,pickOpen,cash:save.cash}),
      shot:(a,b,c,d)=>weapons.remoteShot(a,b,c,d), people:()=>people, traffic:()=>traffic, hp:()=>hp, hurt:d=>hurtPlayer(d),
      cam:()=>({c:camera.position.toArray().map(v=>+v.toFixed(2)), p:person.position.toArray().map(v=>+v.toFixed(2)), pv:person.visible, f:[foot.pos.x,foot.pos.z,foot.heading]}) };
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
      openEditor:()=>openEditor('garage','car'),
    });
    editor=createSkinEditor({
      save, cars:CAR_DEFS, persist:()=>saveSave(save), beep:(f,d)=>audio.beep(f,d),
      onCar:(swapped)=>{
        if(swapped) refreshSceneKeep();
        else applyCarSkin(carGroup, save.paint[carDef.id], carSkinFor(save, carDef.id));
        lookCache=null;
      },
      onOutfit:()=>{ setOutfit(person, save.outfit); lookCache=null; },
      onName:()=>{ lookCache=null; },
      onTab:t=>editorTab(t),
    });
    mp=createMultiplayer({
      scene, CAR_DEFS, buildCar, applyCarSkin, buildCharacter, setOutfit, setHeldWeapon, animateCharacter, unpackLook,
      remoteShot:(a,b,c,d)=>weapons.remoteShot(a,b,c,d),
      localBuilding:()=>inside?inside.b.id:-1,
      onStatus:(s,n)=>setMp(s==='on'?'on':s==='connecting'?'connecting':'off', n),
      onCount:n=>{ if(mp && mp.status==='on') setMp('on', n); },
    });
    mp.connect();
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
