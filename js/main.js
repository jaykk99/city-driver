// CITY DRIVER — game bootstrap: scene, states, chase camera, HUD, main loop.
// States: menu -> freeroam <-> garage overlay, menu -> drag -> freeroam.
import * as THREE from 'three';
import * as Cars from './cars.js';
import { buildCity, updateWindTime } from './city.js';
import { CarPhysics } from './physics.js';
import { createControls } from './controls.js';
import { createDragMode } from './drag.js';
import { createAudio } from './audio.js';
import { loadSave, saveSave, createGarage, cashLabel, applyCashCode } from './garage.js';
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
import { createPolice, POLICE_STATION, WITNESS_RADIUS, WITNESS_LOUD_RADIUS } from './police.js';
import { HOSPITAL_SPAWN, GRID_HALF, surfaceAt, surfaceGrip, WATER_DEPTH, isWet } from './world.js';
import { createWheelFX } from './fx.js';
import { buildCustomMap } from './mapbuilder.js';
import { createMapEditor } from './mapeditor.js';
import { THEMES as MAP_THEMES, spawnOf } from './custommap.js';
import { buildStats, normalizeBuild, migrateLegacy, timeslip } from './tuning.js';
import { createTuningUI } from './tuningui.js';
import { createMissionRunner, generateMission, TOTAL_MISSIONS, EMERALD_FORTUNE } from './missions.js';
import { CarDamage } from './cardamage.js';

const { CAR_DEFS, buildCar, effectiveStats, applyCarSkin, applyBuildVisual } = Cars;

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
let tutorial=null, pickOpen=false, tuningUI=null, skyMesh=null;
// --- water + mud ---
let wheelFX=null, carSink=0, carDirt=0, lastSurf='road', footSurf='road', splashCool=0;
const wheelPos=[{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0},{x:0,y:0,z:0}];
const _wv=new THREE.Vector3(), _dirtCol=new THREE.Color(), MUD_COL=new THREE.Color(0x4a3420);
// mud builds up on the paint + rims; water washes it off
function applyDirt(){
  const u=carGroup && carGroup.userData; if(!u || !u.paint) return;
  _dirtCol.setHex(u.bodyColor).lerp(MUD_COL, carDirt*0.72);
  u.paint.color.copy(_dirtCol);
  u.paint.clearcoat = 1 - carDirt*0.85; u.paint.roughness = 0.32 + carDirt*0.55;
  if(u.rim){ if(u.rimBase===undefined) u.rimBase=u.rim.color.getHex(); _dirtCol.setHex(u.rimBase).lerp(MUD_COL, carDirt*0.8); u.rim.color.copy(_dirtCol); }
}
function updateWater(dt){
  const surf=tele.surface||'road', sp=Math.abs(tele.speed);
  // sink into deep water (smoothly), bob a little
  const want=(WATER_DEPTH[surf]||0);
  carSink += (want-carSink)*Math.min(1, dt*(want>carSink?3:5));
  // big splash when you hit water fast
  splashCool=Math.max(0, splashCool-dt);
  if((surf==='deep'||surf==='water') && !(lastSurf==='deep'||lastSurf==='water') && sp>4 && splashCool<=0){
    wheelFX.splash(physics.pos.x, physics.pos.z, Math.min(2.2, 0.6+sp/12)); if(audio.splash) audio.splash(Math.min(1, sp/20)); splashCool=0.8;
  }else if(surf==='puddle' && lastSurf!=='puddle' && sp>6 && audio.splash){ audio.splash(0.25); }
  lastSurf=surf;
  // wheel spray / mud / dust
  carGroup.updateMatrixWorld();
  for(let i=0;i<4 && i<allWheels.length;i++){ allWheels[i].getWorldPosition(_wv); wheelPos[i].x=_wv.x; wheelPos[i].y=Math.max(0.2,_wv.y); wheelPos[i].z=_wv.z; }
  wheelFX.emitWheels(dt, wheelPos, tele.speed, physics.heading, surf, carSink);
  // dirt level
  const before=carDirt;
  if((surf==='mud' && sp>1) || ((surf==='dirt'||surf==='crop') && sp>8)) carDirt=Math.min(1, carDirt+dt*(surf==='mud'?0.12+sp*0.006:0.02));
  else if(surf==='deep'||surf==='water') carDirt=Math.max(0, carDirt-dt*(sp>2?0.35:0.12));
  if(Math.abs(carDirt-before)>0.0001 && frameN%6===0) applyDirt();
}
// --- world life: pedestrians, traffic, blood; player health ---
let blood=null, people=null, traffic=null, trafficHits=null;
let hp=100, dead=false, deadT=0, hurtFlash=0;
let carDamage=new CarDamage(), lastDmgCarId=null, prevDriveSpeed=null, crashCool=0, wreckT=0;
const npcPlayer={x:0,z:0,alive:true,hidden:false,inCar:true};
let missions=null, boardOpen=false, lastGear=0;
// engine character per car: cylinders, idle, redline
const ENGINES={ sport:{cyl:6,red:7200}, muscle:{cyl:8,red:6200,idle:750}, super:{cyl:10,red:8500}, suv:{cyl:6,red:6000},
  truck:{cyl:8,red:5600,idle:700}, track:{cyl:4,red:8800,idle:1100}, sedan:{cyl:4,red:6500}, taxi:{cyl:4,red:6200},
  van:{cyl:6,red:5500,idle:700}, police:{cyl:8,red:6600,idle:800}, hyper:{cyl:12,red:9000,idle:1000} };
function applyGearbox(){
  if(physics && physics.box) physics.box.mode = save.manual ? 'manual' : 'auto';
  const t=save.manual?'⚙️ GEARBOX: MANUAL':'⚙️ GEARBOX: AUTO';
  for(const id of ['m-trans','p-trans']){ const b=$(id); if(b) b.textContent=t; }
  const gb=$('gear-btns'); if(gb) gb.classList.toggle('hidden', !save.manual);
}
let stolenCar=null, lockTarget=null;
const lootedAt=new Map();     // building id -> time it was emptied (loot comes back after 8 min)
const _proj=new THREE.Vector3();
// --- stunt rewards (free-roam cash loop) ---
let stunts=newStuntState();
// --- AAA graphics state ---
let postfx=null, qm=null, skyEnv=null, todIdx=0;
let smoke=null, exhaust=null, skids=null, headlight=null, headlightTarget=null, headlightBase=0;
let particleScale=1;
// --- on foot / stores / guns ---
let orient=null, onFoot=false, foot=null, person=null, weapons=null, shops=null, storeUI=null, minimap=null;
let police=null, bustedOpen=false, policeRes=null;
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
  applyCashCode(save);
  const v=cashLabel(save);
  $('cash-val').textContent=v;
  $('garage-cash').textContent=v;
}
function addCash(n){
  save.cash=Math.max(0, save.cash+Math.round(n));
  saveSave(save); syncCash();
}

// ---------------- car lifecycle ----------------
function rebuildCar(){
  carDef = stolenCar ? stolenCar.def : (CAR_DEFS.find(d=>d.id===save.currentCar)||CAR_DEFS[0]);
  if(carGroup) scene.remove(carGroup);
  carGroup=buildCar(carDef);
  if(stolenCar) applyCarSkin(carGroup, stolenCar.color, null);
  else applyCarSkin(carGroup, save.paint[carDef.id], carSkinFor(save, carDef.id));
  scene.add(carGroup);
  lookCache=null;
  const bld = stolenCar ? normalizeBuild({}) : buildFor(carDef.id);
  carStats=buildStats(carDef, bld);
  // a different car means fresh bodywork; tuning the car you own never
  // repairs it (refreshSceneKeep rebuilds the same car id)
  if(carDef.id!==lastDmgCarId){ carDamage=new CarDamage(); lastDmgCarId=carDef.id; prevDriveSpeed=null; syncCarHP(); }
  applyBuildVisual(carGroup, { rideHeight:carStats.rideHeight, tireScale:carStats.tireScale, offset:carStats.offset,
    slicks:bld.tires==='slicks', adder:bld.adder, body:bld.body });
  etCache=null;
  if(carDirt>0) applyDirt();
  if(audio && audio.setEngine) audio.setEngine(carStats.engine || ENGINES[carDef.id] || {cyl:6});
  allWheels=(carGroup.userData.wheels||[]).slice();
  frontWheels=allWheels.filter(w=>w.position.z<0);
  brakeMats=carGroup.userData.brakeMats||[];
  $('menu-car-name').textContent=carDef.name;
}

// per-car parts build (migrates the old 0-5 upgrade levels the first time)
function buildFor(id){
  if(!save.build) save.build={};
  if(!save.parts) save.parts={};
  if(!save.build[id]) save.build[id]=migrateLegacy(save.upgrades && save.upgrades[id]);
  save.build[id]=normalizeBuild(save.build[id]);
  return save.build[id];
}
let etCache=null;
function predictET(){ if(etCache==null){ const t=timeslip(carStats); etCache=t.et||14; } return etCache; }
// live tune (slider drags): new stats without rebuilding the whole car each tick
function refreshStatsOnly(){
  const bld=buildFor(carDef.id);
  carStats=buildStats(carDef, bld);
  physics.stats=carStats; physics.box.shiftTime=carStats.shiftTime||0.2;
  applyBuildVisual(carGroup, { rideHeight:carStats.rideHeight, tireScale:carStats.tireScale, offset:carStats.offset,
    slicks:bld.tires==='slicks', adder:bld.adder, body:bld.body });
  etCache=null;
}

function snapCamera(){
  const h=physics.heading;
  fwdV.set(-Math.sin(h),0,-Math.cos(h));
  camPos.set(physics.pos.x-fwdV.x*9, 4, physics.pos.z-fwdV.z*9);
  camera.position.copy(camPos);
}

function placeAtSpawn(){
  const s=customMap ? Object.assign({ heading:0 }, customMap.toWorld(spawnOf(customMap.map))) : city.spawn;
  physics.pos.x=s.x; physics.pos.z=s.z; physics.heading=s.heading||0;
  prevDriveSpeed=null;   // fresh run: no stale speed for the crash detector
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
  carGroup.position.set(physics.pos.x, -carSink + (carSink>0.3 ? Math.sin(performance.now()/420)*0.03 : 0), physics.pos.z);
  carGroup.rotation.y=physics.heading;
  const fl=carGroup.userData.flashers;
  if(fl){ const on=((performance.now()/170)|0)%2; fl[0].emissiveIntensity=on?4:0.25; fl[1].emissiveIntensity=on?0.25:4; }
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
  if((tele.drifting || tele.spinning || (tele.surface==='mud' && Math.abs(tele.speed)>3)) && particleScale>0.3){
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
  // damage smoke pours from the hood: light at 60 hp, heavy at 30
  const sl=carDamage?carDamage.smokeLevel():0;
  if(sl>0 && particleScale>0.3){
    const h=physics.heading;
    _hw.set(-Math.sin(h),0,-Math.cos(h));
    const hx=physics.pos.x+_hw.x*1.6, hz=physics.pos.z+_hw.z*1.6;
    if(Math.random()<(sl===2?0.9:0.4)*particleScale)
      smoke.emit(hx+(Math.random()-0.5)*0.5, 1.0, hz+(Math.random()-0.5)*0.5,
        { vx:(Math.random()-0.5)*0.6, vy:1.4+Math.random(), vz:(Math.random()-0.5)*0.6, life:0.8+Math.random()*0.5, size:sl===2?1.4:0.9, grow:3.0 });
  }
  smoke.update(dt); exhaust.update(dt);
}

// ---------------- crime witnesses: heat sticks when someone saw it ------------
let lastWitnessToast = 0;
// true when a living ped or an occupied traffic car is close enough to the
// crime scene to see (or hear) it.
function sawCrime(x, z, r){
  if(!people || !traffic) return true;   // systems not up yet: old behavior
  return people.witnesses(x, z, r) + traffic.witnesses(x, z, r) > 0;
}
// Report a crime at (x,z). Witnessed crimes add full heat; unwitnessed ones
// add a little (cities talk) via the wanted model. Shows a witness callout
// (throttled) only when the heat actually rose.
function commitCrime(kind, x, z, r = WITNESS_RADIUS){
  if(!police) return 0;
  const seen = sawCrime(x, z, r);
  const gained = police.crime(kind, x, z, seen) || 0;
  if(seen && gained > 0){
    const nowS = performance.now() / 1000;
    if(nowS - lastWitnessToast > 5){ lastWitnessToast = nowS; toast('📞 A witness called the cops!', 1800); }
  }
  return gained;
}
// ---------------- collision: circle (car) vs AABB (city colliders) ----------------
let _carHitCooldown = 0;
function collide(x, z){
  const r=collideR(x, z, 1.15);
  if(_carHitCooldown > 0) _carHitCooldown -= 1;
  if(traffic && !inside){
    const hit=traffic.collide(r, 1.15);
    if(hit && physics && _carHitCooldown <= 0){
      _carHitCooldown = 12; // ~200ms at 60fps: one bounce per impact, no multi-frame drain
      // collision normal: from traffic car center to player
      let nx = r.x - hit.x, nz = r.z - hit.z;
      const nl = Math.hypot(nx, nz) || 1;
      nx /= nl; nz /= nl;
      // split velocity into normal + tangential components
      const vx = physics.vel.x, vz = physics.vel.z;
      const vn = vx * nx + vz * nz;           // into the other car (negative when approaching)
      const tx = -nz, tz = nx;               // tangent
      const vt = vx * tx + vz * tz;
      const impact = Math.abs(vn);
      if(vn < 0){
        if(impact > 12) commitCrime('ramTraffic', r.x, r.z, 40);
        // restitution: harder hits bounce more, soft taps just nudge
        const rest = impact > 15 ? 0.45 : impact > 8 ? 0.3 : 0.15;
        const newVn = -vn * rest;
        // friction on the tangential slide
        const newVt = vt * 0.82;
        physics.vel.x = nx * newVn + tx * newVt;
        physics.vel.z = nz * newVn + tz * newVt;
        // shove the traffic car too (momentum transfer)
        const push = impact * 0.35;
        hit.x += nx * push * 0.06;
        hit.z += nz * push * 0.06;
        if(hit.speed !== undefined) hit.speed = Math.max(0, hit.speed - impact * 0.15);
        // spin kick: hitting off-center rotates you a bit
        if(physics.angVel !== undefined){
          const side = (vx * nz - vz * nx) / (nl || 1);
          physics.angVel += side * 0.02;
        }
        if(impact > 6 && audio) audio.beep(90, 0.08);
        // spark/damage feedback
        if(typeof spawnSparks === 'function' && impact > 10){
          try{ spawnSparks(r.x, r.z, Math.min(12, impact | 0)); }catch(e){}
        }
      }
    }
  }
  return r;
}
// spatial hash over colliders (the big map has thousands): 40 m cells, rebuilt when the list grows
const COL_CELL=40;
const colGrids=new WeakMap();
function gridFor(cols){
  let g=colGrids.get(cols);
  if(g && g.n===cols.length) return g;
  g={ n:cols.length, cells:new Map() };
  for(const c of cols){
    const x0=Math.floor(c.minX/COL_CELL), x1=Math.floor(c.maxX/COL_CELL), z0=Math.floor(c.minZ/COL_CELL), z1=Math.floor(c.maxZ/COL_CELL);
    for(let i=x0;i<=x1;i++) for(let j=z0;j<=z1;j++){ const k=i*100003+j; let a=g.cells.get(k); if(!a) g.cells.set(k, a=[]); a.push(c); }
  }
  colGrids.set(cols, g);
  return g;
}
const _near=[]; let _stamp=0;
function nearColliders(cols, x, z, R){
  _near.length=0;
  if(cols.length<64){ for(const c of cols) _near.push(c); return _near; }
  const g=gridFor(cols); _stamp++;
  const x0=Math.floor((x-R)/COL_CELL), x1=Math.floor((x+R)/COL_CELL), z0=Math.floor((z-R)/COL_CELL), z1=Math.floor((z+R)/COL_CELL);
  for(let i=x0;i<=x1;i++) for(let j=z0;j<=z1;j++){
    const a=g.cells.get(i*100003+j); if(!a) continue;
    for(const c of a){ if(c._st!==_stamp){ c._st=_stamp; _near.push(c); } }
  }
  return _near;
}
function collideR(x, z, R){
  let cx=x, cz=z, hitX=false, hitZ=false;
  const cols=nearColliders(curColliders||(customMap?customMap.colliders:city.colliders), x, z, R+2);
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
  setOutfit(person, currentOutfit());
  setHeldWeapon(person, gear().equipped);
  const w=gear().equipped && weaponDef(gear().equipped);
  $('weapon-name').textContent = w ? w.name.toUpperCase() : 'UNARMED';
  const a=$('weapon-ammo');
  a.textContent = w ? String(gear().ammo[w.id]|0) : (gear().weapons.length ? 'tap 🔫 to draw' : 'guns at LOCK & LOAD');
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
// AIM: lock onto the best target in front of you (gunmen, players, drivers, people)
function updateAim(dt){
  const ch=$('crosshair');
  const aiming=controls.input.aim && !!gear().equipped && !dead;
  if(!aiming){ lockTarget=null; weaponCtx.lock=null; ch.classList.add('hidden'); return; }
  const w=weaponDef(gear().equipped), range=w?w.range:60;
  let best=null, bs=Infinity;
  const consider=(t, bonus)=>{
    const dx=t.x-foot.pos.x, dz=t.z-foot.pos.z, d=Math.hypot(dx,dz);
    if(d>range || d<0.8) return;
    const a=Math.atan2(-dx,-dz), diff=Math.abs(Math.atan2(Math.sin(a-foot.heading), Math.cos(a-foot.heading)));
    if(diff>0.75) return;
    const score=diff*2+d/80-bonus;
    if(score<bs){ bs=score; best=t; }
  };
  for(const t of people.hitList) consider(t, t.ref.kind==='enemy'?0.6:0);
  for(const t of remoteHits) consider(t, 0.5);
  if(!inside) for(const t of trafficHits){ if(!t.ref.car.empty) consider(t, -0.1); }
  lockTarget=best;
  ch.classList.remove('hidden');
  if(best){
    const a=Math.atan2(-(best.x-foot.pos.x), -(best.z-foot.pos.z));
    foot.heading+=Math.atan2(Math.sin(a-foot.heading), Math.cos(a-foot.heading))*Math.min(1, dt*12);
    weaponCtx.lock={x:best.x, z:best.z};
    _proj.set(best.x, 1.3, best.z).project(camera);
    ch.style.left=((_proj.x+1)/2*100).toFixed(2)+'%';
    ch.style.top=((1-_proj.y)/2*100).toFixed(2)+'%';
    ch.classList.add('lock');
  }else{
    weaponCtx.lock=null;
    ch.style.left='50%'; ch.style.top='45%';
    ch.classList.remove('lock');
  }
  aimHold=Math.max(aimHold, 0.25);
}
function updateFoot(dt){
  const fx0=foot.pos.x, fz0=foot.pos.z;
  foot.update(controls.input, dt, footCollide);
  // wading: slow + sink to the waist/chest in water
  if(!inside){
    footSurf=surfAt(foot.pos.x, foot.pos.z);
    const k = footSurf==='deep' ? 0.4 : footSurf==='water' ? 0.62 : footSurf==='mud' ? 0.6 : 1;
    if(k<1){ foot.pos.x=fx0+(foot.pos.x-fx0)*k; foot.pos.z=fz0+(foot.pos.z-fz0)*k; }
    if((footSurf==='deep'||footSurf==='water') && Math.abs(foot.speed)>0.5 && Math.random()<dt*4) wheelFX.splash(foot.pos.x, foot.pos.z, 0.35);
  }else footSurf='road';
  person.position.x=foot.pos.x; person.position.z=foot.pos.z;
  person.rotation.y=foot.heading;
  if(controls.consumeCycle()){
    const id=cycleWeapon(gear());
    saveSave(save); syncPersonGear();
    if(gear().weapons.length) toast(id ? weaponDef(id).name : 'Holstered', 1200);
    else toast('No guns yet — visit LOCK & LOAD', 1600);
  }
  updateAim(dt);
  weaponCtx.pos.x=foot.pos.x; weaponCtx.pos.z=foot.pos.z; weaponCtx.heading=foot.heading;
  const edge=controls.consumeFireEdge();
  if(edge && !gear().equipped && gear().weapons.length){ cycleWeapon(gear()); syncPersonGear(); }
  const res=weapons.update(dt, weaponCtx, controls.input.fire, edge);
  if(res.fired){
    if(people && !inside) people.scare(foot.pos.x, foot.pos.z, 45);
    kickRecoil(person); aimHold=0.9; ammoDirty++;
    $('weapon-ammo').textContent=String(gear().ammo[gear().equipped]|0);
  }
  if(controls.input.fire && gear().equipped) aimHold=Math.max(aimHold,0.3);
  aimHold=Math.max(0, aimHold-dt);
  animateCharacter(person, foot.phase, foot.speed, aimHold>0 && !!gear().equipped, dt);
  person.position.y -= footSurf==='deep' ? 0.95 : footSurf==='water' ? 0.45 : footSurf==='mud' ? 0.12 : 0;   // wading
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
function stealCar(tc){
  const info=traffic.remove(tc);
  if(!info) return;
  if(info.alive){ people.eject(info.x-Math.cos(info.h)*1.8, info.z+Math.sin(info.h)*1.8, foot.pos.x, foot.pos.z); people.scare(info.x, info.z, 25); commitCrime('stolenCar', info.x, info.z, 40); }
  stolenCar={ def:info.def, color:info.color };
  rebuildCar();
  physics.reset(carStats);
  physics.pos.x=info.x; physics.pos.z=info.z; physics.heading=info.h;
  syncCarTransform(0);
  lookCache=null;
  getIn();
  snapCamera();
  audio.beep(300,0.08);
  toast('🚗 Stolen: '+info.def.name+(info.alive?' — the driver ran off':''), 2400);
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
  // cash hidden around the room (unless you already cleaned this building out recently)
  const last=lootedAt.get(b.id);
  if(last===undefined || performance.now()-last > 8*60*1000){
    const n=1+Math.floor(Math.random()*3), spots=interiors.lootSpots(room, n+1);
    const items=spots.slice(0,n).map(p=>({ x:p.x, z:p.z, kind:'cash', amount:50+Math.floor(Math.random()*450) }));
    if(Math.random()<0.12 && spots[n]) items.push({ x:spots[n].x, z:spots[n].z, kind:'safe', amount:2000+Math.floor(Math.random()*3000) });
    interiors.spawnLoot(room, items);
  }else interiors.clearLoot();
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
  if(inside) lootedAt.set(inside.b.id, performance.now());
  interiors.clearLoot();
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
      const got=interiors.grab(foot.pos.x, foot.pos.z);
      if(got){ addCash(got.amount); audio.beep(1300,0.06); toast((got.kind==='safe'?'🔓 Cracked a safe! +$':'💵 Found cash +$')+got.amount.toLocaleString(), 1800); }
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
    const tc=traffic && traffic.nearestCar(foot.pos.x, foot.pos.z, 3.6);
    if(tc) return setAction('steal', tc, '🚗 STEAL CAR');
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
  else if(actionKind==='steal' && actionTarget) stealCar(actionTarget);
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

// ---------------- game modes ----------------
// single = offline city · online = shared free roam · tdm = team deathmatch
let mode='single';
const TDM_TOPIC='city-driver-tdm', TDM_TARGET=25;
const TEAM_COLORS={ red:0xd7263d, blue:0x1f6feb };
const tdm={ team:null, score:{red:0,blue:0}, over:0, lastAttacker:null, kills:0, deaths:0 };
const tdmLoadout={ weapons:['ak','glock','shotgun','sniper'], ammo:{ak:9999,glock:9999,shotgun:9999,sniper:9999}, equipped:'ak' };
const remoteHits=[];
function gear(){ return weaponCtx.save || save; }
function currentOutfit(){ return mode==='tdm' && tdm.team ? Object.assign({}, save.outfit, { shirt:TEAM_COLORS[tdm.team] }) : save.outfit; }
// ---------------- custom maps ----------------
let customMap=null, lastCustom=null, mapEditor=null;
function surfAt(x, z){ return customMap ? customMap.surfaceAt(x, z) : surfaceAt(x, z); }
function playCustom(map){
  exitCustom();
  if(missions && missions.active){ missions.stop(); $('mission-hud').classList.add('hidden'); $('boss-hud').classList.add('hidden'); }
  if(tutorial && tutorial.active){ tutorial.stop(); $('objective').classList.add('hidden'); }
  mode='custom'; mp.connect(null);
  people.clearEnemies(); people.setCount(0); traffic.setCount(0);
  weaponCtx.save=save; $('tdm-hud').classList.add('hidden');
  customMap=buildCustomMap(scene, map); lastCustom=map;
  weaponCtx.colliders=customMap.colliders; weaponCtx.targets=[];
  minimap.setCustom(customMap.painter); minimap.setWaypoint(null);
  setTimeOfDay((MAP_THEMES[map.theme]||MAP_THEMES.summer).sky, true);
  carDirt=0; applyDirt();
  startFreeroam(true);
  $('p-editmap').classList.remove('hidden');
  const n=customMap.cash.length;
  toast('🗺️ '+map.name+(n?' — find all '+n+' 💵':''), 2800);
}
function exitCustom(){
  if(!customMap) return;
  customMap.dispose(); customMap=null;
  weaponCtx.colliders=city.colliders; weaponCtx.targets=shops.targets;
  minimap.setCustom(null);
  people.setCount(14); traffic.setCount(12);
  $('p-editmap').classList.add('hidden');
  setTimeOfDay('day', true);
}

function startMode(m){
  exitCustom();
  mode=m;
  mp.connect(m==='single' ? null : m==='tdm' ? TDM_TOPIC : undefined);
  people.clearEnemies();
  people.setCount(m==='tdm' ? 0 : 14);
  weaponCtx.save = m==='tdm' ? tdmLoadout : save;
  $('tdm-hud').classList.toggle('hidden', m!=='tdm');
  startFreeroam();
  if(m==='tdm'){
    if(tutorial.active){ tutorial.stop(); $('objective').classList.add('hidden'); }
    tdm.score.red=tdm.score.blue=0; tdm.kills=tdm.deaths=0; tdm.over=0;
    // join the smaller team once we've heard the roster
    tdm.team=null;
    setTimeout(()=>{ if(mode==='tdm'){ pickTeam(); tdmSpawn(); } }, 1600);
    toast('⚔️ TEAM DEATHMATCH — first team to '+TDM_TARGET+' kills wins', 3000);
  }else{
    person && setOutfit(person, save.outfit);
    toast(m==='single' ? '🧍 Single player — the city is all yours' : '🌐 Online free roam — '+mp.count+' in the city', 2600);
  }
}
function pickTeam(){
  let r=0, b=0;
  mp.each(p=>{ if(p.team==='red') r++; else if(p.team==='blue') b++; });
  tdm.team = r<b ? 'red' : b<r ? 'blue' : (Math.random()<0.5?'red':'blue');
  setOutfit(person, currentOutfit());
  lookCache=null;
  updateTdmHud();
  toast('You are on '+tdm.team.toUpperCase()+' team', 2200);
}
function tdmBase(team){ return team==='red' ? { x:-176, z:3, heading:-Math.PI/2 } : { x:176, z:-3, heading:Math.PI/2 }; }
function tdmSpawn(){
  leaveFootMode();
  const b=tdmBase(tdm.team||'red');
  physics.pos.x=b.x+(Math.random()-0.5)*6; physics.pos.z=b.z+(Math.random()-0.5)*20; physics.heading=b.heading;
  physics.vel.x=physics.vel.z=0; tele.speed=0;
  syncCarTransform(0); snapCamera();
  getOut();
  tdmLoadout.equipped='ak'; syncPersonGear();
}
function updateTdmHud(){
  $('tdm-red').textContent=tdm.score.red;
  $('tdm-blue').textContent=tdm.score.blue;
  const y=$('tdm-you');
  y.textContent = tdm.team ? 'YOU: '+tdm.team.toUpperCase()+' · '+tdm.kills+'K / '+tdm.deaths+'D' : 'joining…';
  y.className = tdm.team || '';
}
function addKill(p){
  if(!p || !p.kt || !(p.kt in tdm.score)) return;
  tdm.score[p.kt]++;
  if(p.k===mp.myId){ tdm.kills++; addCash(150); }
  const kf=$('killfeed');
  const row=document.createElement('div');
  row.innerHTML=`<b class="${p.kt}">${esc(p.kn||'?')}</b> ☠ <b class="${p.kt==='red'?'blue':'red'}">${esc(p.vn||'?')}</b>`;
  kf.prepend(row); while(kf.children.length>4) kf.lastChild.remove();
  setTimeout(()=>row.remove(), 6000);
  updateTdmHud();
  if(!tdm.over && (tdm.score.red>=TDM_TARGET || tdm.score.blue>=TDM_TARGET)){
    const w=tdm.score.red>=TDM_TARGET?'red':'blue';
    tdm.over=8;
    $('tdm-win').textContent=(w===tdm.team?'🏆 ':'')+w.toUpperCase()+' TEAM WINS!';
    $('tdm-win').className=w;
    if(w===tdm.team){ addCash(2500); toast('+$2,500 for the win!', 2500); }
  }
}
const esc=t=>String(t).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function onRemotePlayerHit(ref, dmg, dx, dz){
  if(mode!=='tdm' || !tdm.team) return;
  mp.send('hit', { t:ref.id, d:dmg, tm:tdm.team, n:save.name });
  blood.hit(ref.x, 1.25, ref.z, dx, dz, 1);
}
function onPlayerDied(){
  if(missions && missions.active) missionFailed('you got wasted');
  if(mode!=='tdm') return;
  tdm.deaths++;
  const a=tdm.lastAttacker;
  const p={ k:a?a.id:null, kn:a?a.name:'the street', kt:a?a.team:null, v:mp.myId, vn:save.name };
  if(a){ mp.send('kill', p); addKill(p); }
  updateTdmHud();
}
function respawnPoint(){
  if(mode==='tdm') return tdmBase(tdm.team||'red');
  if(customMap) return Object.assign({ heading:0 }, customMap.toWorld(spawnOf(customMap.map)));
  return { x:HOSPITAL_SPAWN.x, z:HOSPITAL_SPAWN.z, heading:HOSPITAL_SPAWN.heading };
}
function updateRemoteHits(){
  remoteHits.length=0;
  if(mode!=='tdm' || !tdm.team) return;
  const myB=inside?inside.b.id:-1;
  mp.each(r=>{
    if(r.team===tdm.team || r.dead || r.b!==myB || !r.placed) return;
    const ref={ kind:'player', id:r.id, name:r.name, team:r.team, x:r.x, z:r.z };
    remoteHits.push({ x:r.x, z:r.z, r:r.mode==='car'?1.5:0.5, ref });
  });
}

// ---------------- missions (500, Emerald is #500) ----------------
function nextMissionN(){ return Math.min(TOTAL_MISSIONS, (save.missionsDone|0)+1); }
function openBoard(){
  if(mode==='tdm'){ toast('Missions are in Single Player / Online Free Roam'); return; }
  boardOpen=true; setAction(null,null,'');
  const done=save.missionsDone|0;
  const active=missions.active;
  const m=active ? missions.mission : generateMission(nextMissionN());
  $('mb-num').textContent = done>=TOTAL_MISSIONS ? 'ALL 500 COMPLETE' : 'MISSION '+m.n+' / '+TOTAL_MISSIONS;
  $('mb-title').textContent = m.type==='boss' ? '👑 FINAL BOSS: EMERALD' : m.title;
  $('mb-desc').textContent = done>=TOTAL_MISSIONS ? 'You beat Emerald and took her millions. Replay any time — missions keep paying.' : m.desc;
  $('mb-reward').textContent = '$'+m.reward.toLocaleString()+(m.timeLimit?' · ⏱ '+m.timeLimit+'s':'');
  $('mb-progress').style.width=(done/TOTAL_MISSIONS*100).toFixed(1)+'%';
  $('mb-left').textContent = done>=TOTAL_MISSIONS ? 'Emerald defeated 💀' : (TOTAL_MISSIONS-1-Math.min(done,TOTAL_MISSIONS-1))+' missions until Emerald';
  $('mb-start').textContent = active ? '✖ ABANDON MISSION' : '▶ START';
  $('mission-board').classList.remove('hidden');
}
function closeBoard(){ boardOpen=false; $('mission-board').classList.add('hidden'); }
function startMission(){
  if(missions.active){ missions.stop(); $('mission-hud').classList.add('hidden'); $('boss-hud').classList.add('hidden'); closeBoard(); toast('Mission abandoned'); return; }
  if(tutorial && tutorial.active){ tutorial.stop(); $('objective').classList.add('hidden'); }
  const n = (save.missionsDone|0)>=TOTAL_MISSIONS ? 1+Math.floor(Math.random()*(TOTAL_MISSIONS-1)) : nextMissionN();
  const m=missions.start(n);
  closeBoard();
  $('mission-hud').classList.remove('hidden');
  $('mh-title').textContent='#'+m.n+' '+(m.type==='boss'?'EMERALD':m.title.toUpperCase());
  audio.beep(700,0.08);
  toast('📱 '+m.title+' — '+m.desc, 3500);
}
function missionPassed(){
  const m=missions.mission;
  missions.stop();
  $('mission-hud').classList.add('hidden'); $('boss-hud').classList.add('hidden');
  if(m.n>(save.missionsDone|0)) save.missionsDone=m.n;
  addCash(m.reward);
  saveSave(save);
  audio.beep(880,0.1); setTimeout(()=>audio.beep(1320,0.15),130);
  if(m.type==='boss'){
    $('victory').classList.remove('hidden');
    $('victory-cash').textContent='+$'+EMERALD_FORTUNE.toLocaleString();
  }else toast('✅ MISSION PASSED  +$'+m.reward.toLocaleString(), 3000);
}
function missionFailed(why){
  missions.stop();
  $('mission-hud').classList.add('hidden'); $('boss-hud').classList.add('hidden');
  audio.beep(200,0.2);
  toast('❌ MISSION FAILED — '+why+'. Try again from 📱', 3200);
}
function updateMissionHud(){
  const px=onFoot?foot.pos.x:physics.pos.x, pz=onFoot?foot.pos.z:physics.pos.z, h=onFoot?foot.heading:physics.heading;
  $('mh-obj').textContent=missions.objective();
  const tl=missions.timeLeft;
  $('mh-time').textContent = tl!=null ? '⏱ '+Math.ceil(tl)+'s' : '';
  $('mh-time').classList.toggle('low', tl!=null && tl<10);
  const tg=missions.target({x:px,z:pz});
  const arrow=$('mh-arrow');
  if(tg && !inside){
    const a=Math.atan2(-(tg.x-px), -(tg.z-pz));
    const rel=Math.atan2(Math.sin(a-h), Math.cos(a-h));
    arrow.style.transform='rotate('+(-rel).toFixed(3)+'rad)';
    arrow.classList.remove('hidden');
    $('mh-dist').textContent=Math.round(Math.hypot(tg.x-px, tg.z-pz))+' m';
  }else{ arrow.classList.add('hidden'); $('mh-dist').textContent=''; }
  const b=missions.boss;
  if(b && b.state!=='dead'){ $('boss-hud').classList.remove('hidden'); $('boss-fill').style.width=Math.max(0,b.hp/b.maxHp*100)+'%'; }
  else $('boss-hud').classList.add('hidden');
}

// ---------------- full map + GPS waypoint ----------------
let bigMapOpen=false;
function playerXZ(){ return onFoot ? { x:inside?inside.back.x:foot.pos.x, z:inside?inside.back.z:foot.pos.z, h:foot.heading } : { x:physics.pos.x, z:physics.pos.z, h:physics.heading }; }
function openBigMap(){
  if(state!=='freeroam' || garageOpen || storeOpen || editorOpen || pickOpen) return;
  bigMapOpen=true; paused=true;
  $('bigmap-ov').classList.remove('hidden');
  redrawBigMap();
}
function redrawBigMap(){
  const p=playerXZ();
  minimap.drawBig(p.x, p.z, p.h);
  const wp=minimap.waypoint;
  $('bigmap-wp').textContent = wp ? '📍 Waypoint set — '+Math.round(Math.hypot(wp.x-p.x, wp.z-p.z))+' m away' : '';
}
function closeBigMap(){ bigMapOpen=false; paused=false; $('bigmap-ov').classList.add('hidden'); }
function updateWaypointHud(){
  const wp=minimap.waypoint, el=$('wp-hud');
  if(!wp){ el.classList.add('hidden'); return; }
  const p=playerXZ(), d=Math.hypot(wp.x-p.x, wp.z-p.z);
  if(d<15){ minimap.setWaypoint(null); toast('📍 You have arrived', 1500); el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  el.textContent='📍 '+(d>999?(d/1000).toFixed(1)+' km':Math.round(d)+' m');
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
// ---------------- car damage ----------------
// `impact` is m/s of closing speed (crash detector, cop rams). Toasts only
// on smoke-level crossings so a long scrape doesn't spam the screen.
function syncCarHP(){
  const f=$('car-fill'); if(!f) return;
  const h=carDamage?carDamage.hp:100;
  f.style.width=Math.max(0,h)+'%';
  f.style.background = h>60 ? '#4ade80' : h>30 ? '#fbbf24' : '#ef4444';
  $('car-hud').classList.toggle('hidden', !!onFoot);
}
function damageCar(impact){
  if(!carDamage || onFoot || dead || state!=='freeroam') return 0;
  const before=carDamage.hp;
  const d=carDamage.hit(impact);
  if(d<=0) return 0;
  syncCarHP();
  if(carDamage.wrecked) toast('🚛 WRECKED — tow truck incoming…', 2600);
  else if(before>60 && carDamage.hp<=60) toast('🔧 Car damaged — smoking', 1800);
  else if(before>30 && carDamage.hp<=30) toast('🔧 Car heavily damaged — losing power', 2000);
  return d;
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
  const fee=mode==='tdm' ? 0 : Math.min(500, Math.round(save.cash*0.05));
  if(fee>0){ save.cash-=fee; saveSave(save); syncCash(); }
  leaveFootMode();
  if(typeof respawnPoint==='function'){ const sp=respawnPoint(); physics.pos.x=sp.x; physics.pos.z=sp.z; physics.heading=sp.heading; physics.vel.x=physics.vel.z=0; snapCamera(); syncCarTransform(0); }
  else placeAtSpawn();
  if(mode==='tdm'){ tdm.lastAttacker=null; tdmSpawn(); return; }
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
  $('gear-hud').textContent=(tele.reverse?'R':mph<1&&!save.manual?'N':String(tele.gear||1))+(save.manual?' M':'');
  const tf=$('tach-fill');
  if(tf){ tf.style.width=(Math.min(1,tele.rpm||0)*100).toFixed(1)+'%'; tf.classList.toggle('red', (tele.rpm||0)>0.9); }
  $('nitro-fill').style.width=(Math.max(0,Math.min(1,tele.nitroFrac))*100).toFixed(1)+'%';
  const bh=$('boost-hud');
  if(bh){
    const on=!!carStats.boostKind;
    bh.classList.toggle('hidden', !on);
    if(on){ $('boost-val').textContent=(tele.psi||0).toFixed(1); $('boost-fill').style.width=(Math.min(1,tele.boost||0)*100).toFixed(0)+'%'; }
  }
  const sh=$('surface-hud');
  if(sh){
    const sf=tele.surface||'road';
    const L={ mud:'🟤 MUD', dirt:'🟫 DIRT', gravel:'🪨 GRAVEL', grass:'🟩 GRASS', crop:'🌾 FIELD', puddle:'💧 PUDDLE', water:'🌊 WATER', deep:'🌊 DEEP WATER' };
    const txt=(L[sf]||'')+(tele.spinning?(L[sf]?' · ':'')+'💨 WHEELSPIN':'')+(carDirt>0.5?' · 🟤 MUDDY':'');
    sh.textContent=txt; sh.classList.toggle('hidden', !txt);
  }
}

// ---------------- wanted level ----------------
let lastWantedStars=-1;
function copBlips(){ return police && police.units.length ? police.units : null; }
function updateWantedHUD(stars){
  if(stars===lastWantedStars) return;
  lastWantedStars=stars;
  const el=$('wanted-hud');
  if(!el) return;
  el.classList.toggle('hidden', stars<=0);
  el.innerHTML='';
  for(let i=0;i<6;i++){
    const s=document.createElement('span');
    s.textContent='★';
    s.className=i<stars?'lit':'';
    el.appendChild(s);
  }
  if(stars>0){ el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
}

// BUSTED: fine scaled by stars, heat wiped, dropped at the station.
function busted(stars){
  if(bustedOpen) return;
  bustedOpen=true;
  const fine=Math.min(save.cash, 100 + stars*150);
  save.cash-=fine; saveSave(save); syncCash();
  if(audio && audio.bustedSting) audio.bustedSting();
  const b=$('busted');
  $('busted-fine').textContent='-$'+fine.toLocaleString();
  $('busted-sub').textContent='The LSPD thanks you for your donation.';
  b.classList.remove('hidden');
  const go=()=>{
    b.classList.add('hidden');
    bustedOpen=false;
    // walk out of the station
    if(onFoot){ foot.reset(POLICE_STATION.x, POLICE_STATION.z, POLICE_STATION.heading); snapFootCamera(); }
    else{
      physics.pos.x=POLICE_STATION.x; physics.pos.z=POLICE_STATION.z; physics.heading=POLICE_STATION.heading;
      physics.vel.x=0; physics.vel.z=0; physics.speed=0; syncCarTransform(0); snapCamera();
    }
    toast('Released — stay out of trouble', 2200);
    b.removeEventListener('click', go);
  };
  b.addEventListener('click', go);
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
  exitCustom();
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
  if(missions && missions.active){ missions.stop(); }
  $('mission-hud').classList.add('hidden'); $('boss-hud').classList.add('hidden'); closeBoard();
  $('m-tutorial').classList.toggle('hidden', !!save.tutorialDone);
  if(mp && mode!=='online'){ mode='online'; mp.connect(undefined); }
  weaponCtx.save=save; $('tdm-hud').classList.add('hidden'); $('tdm-win').classList.add('hidden'); tdm.over=0;
  if(person) setOutfit(person, save.outfit); lookCache=null;
  audio.engine(0,0); audio.skid(false);
}

function startFreeroam(custom){
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
  if(custom || customMap) return;
  if(!save.tutorialDone && !save.tutorialSkipped) startTutorial();
  else toast('Free roam — drift for cash, walk into any building!');
}

function startDrag(){
  exitCustom();
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
  garage.refresh(); if(tuningUI) tuningUI.refresh(); syncCash();
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
  if(stolenCar){ stolenCar=null; refreshSceneKeep(); }
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
  stolenCar=null;
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
  if(!lookCache){
    lookCache=packLook(save, carDef.id);
    if(mode==='tdm' && tdm.team) lookCache.o[0]=TEAM_COLORS[tdm.team];
  }
  mpLocal.team = mode==='tdm' ? tdm.team : null;
  mpLocal.dead = dead;
  mpLocal.look=lookCache;
  mpLocal.b=inside ? inside.b.id : -1;
  if(onFoot){
    mpLocal.mode='foot'; mpLocal.x=foot.pos.x; mpLocal.z=foot.pos.z; mpLocal.h=foot.heading; mpLocal.speed=foot.speed;
    mpLocal.px=physics.pos.x; mpLocal.pz=physics.pos.z; mpLocal.ph=physics.heading;
    mpLocal.w=gear().equipped||null;
  }else{
    mpLocal.mode='car'; mpLocal.x=physics.pos.x; mpLocal.z=physics.pos.z; mpLocal.h=physics.heading; mpLocal.speed=tele.speed;
    mpLocal.w=null;
  }
  return mpLocal;
}

// ---------------- scene ----------------
// v4 IBL: bake the actual sky + ground into PMREM — outdoor-appropriate
// reflections for paint/glass/chrome instead of a neutral studio room.
// Re-baked on time-of-day change (user-initiated, ~50ms).
let envRT = null;
function bakeEnvironment(topHex, horizonHex) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new THREE.Scene();
  const skyGeo = new THREE.SphereGeometry(100, 16, 12);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      uTop: { value: new THREE.Color(topHex) },
      uHorizon: { value: new THREE.Color(horizonHex) },
    },
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform vec3 uTop; uniform vec3 uHorizon; varying vec3 vP;
      void main(){
        vec3 d = normalize(vP);
        vec3 col = mix(uHorizon, uTop, pow(clamp(d.y, 0.0, 1.0), 0.6));
        col = mix(col, uHorizon * 0.6, smoothstep(0.0, -0.2, d.y));
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  envScene.add(new THREE.Mesh(skyGeo, skyMat));
  const gnd = new THREE.Mesh(
    new THREE.CircleGeometry(60, 24),
    new THREE.MeshBasicMaterial({ color: new THREE.Color('#3d4149') }) // urban asphalt bounce
  );
  gnd.rotation.x = -Math.PI / 2;
  gnd.position.y = -1;
  envScene.add(gnd);
  const rt = pmrem.fromScene(envScene, 0.04);
  pmrem.dispose();
  skyGeo.dispose(); skyMat.dispose();
  return rt;
}
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
  camera=new THREE.PerspectiveCamera(62, orient.view.w/orient.view.h, 0.1, 1300);   // fog ends at 950 m; nothing past this is visible

  city=buildCity(scene, STORE_LOTS);   // creates sun + hemi + fog + world (store lots kept clear)
  shops=buildStores(scene, city);       // gun store + range, clothing, auto shop

  // v4 image-based lighting: PMREM baked from the sky preset + asphalt ground
  // bounce, so paint/glass/chrome get outdoor-appropriate reflections.
  try {
    envRT = bakeEnvironment(SKY_PRESETS.day.top, SKY_PRESETS.day.horizon);
    scene.environment = envRT.texture;
  } catch (e) { console.warn('env map off', e); }

  // gradient sky dome + sun rig
  const dome=createSkyDome();
  scene.add(dome.mesh);
  skyMesh=dome.mesh;
  skyMesh.scale.setScalar(1150/1500);    // dome rides along with the camera; keep it inside the 1300 m far plane
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
  wheelFX=createWheelFX(scene);
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
  if(postfx){ postfx.setPixelRatio(Math.min(pr,1)); postfx.setSize(orient.view.w, orient.view.h); postfx.setBloomEnabled(s.bloom); postfx.setSSAOEnabled(s.ssao); }
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
  // v4: re-bake IBL for the new sky so reflections match the time of day
  try{
    const old=envRT;
    envRT=bakeEnvironment(p.top, p.horizon);
    scene.environment=envRT.texture;
    if(old) old.dispose();
  }catch(e){ console.warn('env rebake off', e); }
  if(postfx) postfx.setBloomStrength(p.bloom);
  headlightBase = key==='day' ? 0 : key==='sunset' ? 30 : 70;
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
  updateWindTime(now/1000);               // v4: tree canopy sway

  const playing = state==='freeroam' && !paused && !garageOpen && !storeOpen && !editorOpen && !pickOpen && !dead && !boardOpen;
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
    const cb=copBlips();
    if(inside) minimap.draw(inside.back.x, inside.back.z, foot.heading, parkedCar, mp, cb);
    else minimap.draw(foot.pos.x, foot.pos.z, foot.heading, parkedCar, mp, cb);
    updateAction();
    if(controls.consumeAction()) doAction();
    syncCarHP();   // hides the car bar while on foot
  }else if(playing){
    physics.surf=surfaceGrip(surfAt(physics.pos.x, physics.pos.z), carStats.offroad, carStats.snorkel);
    // battered cars lose pace; a wrecked car stalls until the tow arrives
    const dmgF=carDamage?carDamage.perfFactor():1;
    const driveInput=dmgF>=1 ? controls.input
      : { ...controls.input, throttle: dmgF<=0 ? 0 : (controls.input.throttle||0)*dmgF };
    tele=physics.update(driveInput, dt, collide);
    // crash detector: a one-frame speed collapse only comes from a shunt
    // (braking and drag bleed speed slowly). tele.speed lags collisions by
    // a frame, so this catches walls and traffic alike.
    if(crashCool>0) crashCool-=dt;
    if(prevDriveSpeed!==null){
      const drop=prevDriveSpeed-Math.abs(tele.speed);
      if(drop>8 && crashCool<=0){ crashCool=0.3; damageCar(drop); }
    }
    prevDriveSpeed=Math.abs(tele.speed);
    if(carDamage && carDamage.wrecked){
      wreckT+=dt;
      if(wreckT>2.5){ // tow truck: bill the repair, hand back a fresh car
        const cost=carDamage.repair();
        const paid=Math.min(save.cash, cost);
        if(paid>0) addCash(-paid);
        syncCarHP();
        toast(paid>0 ? '🚛 Towed + repaired — $'+paid.toLocaleString() : '🚛 Towed + repaired', 2400);
        wreckT=0;
      }
    }else wreckT=0;
    updateWater(dt);
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
    minimap.draw(physics.pos.x, physics.pos.z, physics.heading, null, mp, copBlips());
    updateAction();
    if(controls.consumeAction()) doAction();
    if(qm) qm.update(dt);
    const rpm=Math.min(1, Math.abs(tele.speed)/(carStats.topSpeed*1.15));
    audio.engine(tele.rpm, Math.max(0, controls.input.throttle||0), tele.shifting);
    if(audio.turbo) audio.turbo(tele.boost||0, carStats.boostKind, (controls.input.throttle||0)<0.1);
    if(tele.gear!==lastGear){ if(lastGear) audio.shiftBlip(tele.gear>lastGear); lastGear=tele.gear; }
    if(save.manual){
      if(controls.consumeGearUp()) physics.box.shift(1);
      if(controls.consumeGearDown()) physics.box.shift(-1);
    }else{ controls.consumeGearUp(); controls.consumeGearDown(); }
    audio.skid(tele.drifting || tele.spinning || (tele.surface==='mud' && Math.abs(tele.speed)>3));
  }else if(state==='drag' && !paused && !garageOpen && !editorOpen){
    if(dragMode.active) dragMode.update(dt);
  }else{
    audio.engine(0,0); audio.skid(false);
    if(audio.turbo && !garageOpen) audio.turbo(0, null);
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
        if(n){ audio.beep(70,0.12); physics.vel.x*=0.85; physics.vel.z*=0.85; commitCrime('pedKill', physics.pos.x, physics.pos.z); }
      }
    }
    blood.update(dt);
    policeRes = police ? police.update(dt, now/1000) : null;
    if(police) police.copHitList();   // refresh bullet blockers after cops move
    // bust pressure: the hurt vignette pulses as the arrest closes in
    if(hurtFlash>0) hurtFlash-=dt;
    {
      const bv = policeRes && policeRes.bustFrac > 0.02 ? policeRes.bustFrac * 0.5 : 0;
      $('hurt').style.opacity=String(Math.max(bv, Math.max(0,hurtFlash/0.35)*0.75));
    }
    if(dead){ deadT+=dt; if(deadT>3.2) respawn(); }
  }
  // missions
  if(playing && missions && missions.active){
    const r=missions.update(dt, { pos:onFoot?foot.pos:physics.pos, cam:camera.position });
    if(r==='pass') missionPassed();
    else if(r==='fail') missionFailed('out of time');
    if(missions.active && frameN%3===0) updateMissionHud();
  }
  // tutorial mission
  if(playing && tutorial && tutorial.active){
    const r=tutorial.update(dt, { pos:onFoot?foot.pos:physics.pos, drifting:!onFoot&&tele.drifting,
      speed:onFoot?0:tele.speed, onFoot, inside:inside?inside.b.id:-1 });
    if(r==='next'){ audio.beep(880,0.08); toast('✅ Nice! Next: '+tutorial.text, 2200); }
    else if(r==='done') finishTutorial();
    if(frameN%3===0) updateObjective();
  }
  updateRemoteHits();
  if(tdm.over>0){
    tdm.over-=dt;
    $('tdm-win').classList.remove('hidden');
    if(tdm.over<=0){ $('tdm-win').classList.add('hidden'); tdm.score.red=tdm.score.blue=0; updateTdmHud(); if(mode==='tdm' && !dead) tdmSpawn(); }
  }
  // multiplayer: always interpolate others; only broadcast while playing free roam
  if(mp){
    mp.update(dt, state==='freeroam' ? buildLocalPacket() : null, now);
  }
  if(smoke && (state!=='freeroam'||paused||garageOpen||storeOpen)){ smoke.update(dt); exhaust.update(dt); }
  if(skyMesh) skyMesh.position.set(camera.position.x, 0, camera.position.z);
  if(wheelFX) wheelFX.update(dt);
  if(customMap && state==='freeroam'){
    customMap.update(dt);
    if(!paused){
      const p=onFoot?foot.pos:physics.pos, got=customMap.collect(p.x, p.z);
      if(got){ addCash(250*got); audio.beep(1250,0.06); const left=customMap.cash.filter(c=>!c.got).length; toast('💵 +$'+(250*got)+(left?' — '+left+' left':' — you found them all!'), 1600); }
    }
  }
  if(state==='freeroam' && frameN%10===0) updateWaypointHud();   // sky follows you across the big map
  if(postfx) postfx.render();
  else renderer.render(scene, camera);
}

// ---------------- UI wiring ----------------
function wireUI(){
  $('m-freeroam').onclick=()=>{ audio.unlock(); orient.goLandscape(); audio.beep(600,0.06); startMode('single'); };
  $('m-online').onclick=()=>{ audio.unlock(); orient.goLandscape(); audio.beep(600,0.06); startMode('online'); };
  $('m-tdm').onclick=()=>{ audio.unlock(); orient.goLandscape(); audio.beep(600,0.06); startMode('tdm'); };
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
  $('m-maps').onclick=()=>{ audio.unlock(); audio.beep(600,0.05); $('main-menu').classList.add('hidden'); mapEditor.open(); };
  $('p-editmap').onclick=()=>{ const m=lastCustom; audio.beep(600,0.05); showMenu(); $('main-menu').classList.add('hidden'); if(m) mapEditor.edit(m); else mapEditor.open(); };
  $('minimap').addEventListener('pointerdown', e=>{ e.preventDefault(); e.stopPropagation(); openBigMap(); });
  $('bigmap-close').onclick=()=>closeBigMap();
  $('bigmap').addEventListener('pointerdown', e=>{
    const cv=$('bigmap'), r=cv.getBoundingClientRect();
    // the page may be CSS-rotated into landscape: map the tap back into canvas space
    let u=(e.clientX-r.left)/r.width, v=(e.clientY-r.top)/r.height;
    if(orient.rotated){ const t=u; u=v; v=1-t; }
    const w=minimap.bigToWorld(u*cv.width, v*cv.height), cur=minimap.waypoint;
    if(cur && Math.hypot(cur.x-w.x, cur.z-w.z)<40) minimap.setWaypoint(null); else minimap.setWaypoint(w);
    audio.beep(760,0.04); redrawBigMap();
  });
  window.addEventListener('keydown', e=>{ if(e.key==='m'||e.key==='M'){ if(bigMapOpen) closeBigMap(); else openBigMap(); } });
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
  const toggleTrans=()=>{ save.manual=!save.manual; saveSave(save); applyGearbox(); audio.beep(600,0.05);
    toast(save.manual?'Manual: shift with ▲/▼ GEAR (G / B keys). Watch the rev bar!':'Automatic gearbox', 2600); };
  $('m-trans').onclick=toggleTrans; $('p-trans').onclick=toggleTrans;
  $('mission-btn').onclick=()=>{ audio.beep(650,0.05); openBoard(); };
  $('mb-start').onclick=()=>startMission();
  $('mb-close').onclick=()=>{ audio.beep(500,0.05); closeBoard(); };
  $('victory-ok').onclick=()=>{ $('victory').classList.add('hidden'); };
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
      onShot:shots=>{ if(mp) mp.sendShots(shots); if(shots.length){ commitCrime('gunshot', weaponCtx.pos.x, weaponCtx.pos.z, WITNESS_LOUD_RADIUS); if(traffic) traffic.panicAt(weaponCtx.pos.x, weaponCtx.pos.z); } } });
    interiors=createInteriors(scene);
    blood=createBlood(scene);
    people=createPeople({ scene, blood, audio, count:14,
      collide:(x,z,r)=>collideR(x,z,r),
      shoot:(a,b,c,d)=>weapons.remoteShot(a,b,c,d),
      onPlayerHit:(d)=>hurtPlayer(d) });
    traffic=createTraffic({ scene, lines:city.roadLines, buildCar, applyCarSkin, CAR_DEFS });
    trafficHits=traffic.hitList();
    police=createPolice({
      scene, buildCar,
      collide:(x,z,r)=>{ const res=collideR(x,z,r); if(traffic) traffic.collide(res, r); return res; },
      getPlayer:()=>({
        x:onFoot?foot.pos.x:physics.pos.x, z:onFoot?foot.pos.z:physics.pos.z,
        heading:onFoot?foot.heading:physics.heading,
        speed:onFoot?Math.abs(foot.speed||0):Math.abs((typeof tele!=='undefined'&&tele.speed)||0),
        vx:onFoot?0:physics.vel.x, vz:onFoot?0:physics.vel.z,
        onFoot, alive:!dead && state==='freeroam' && !bustedOpen,
      }),
      audio, highQuality:()=>!!(qm && qm.level>=2),
      damagePlayer:(n)=>hurtPlayer(n),
      damageCar:(impact)=>damageCar(impact),
      onBusted:(stars)=>busted(stars),
      onEvaded:()=>toast('😮‍💨 EVADED — heat\'s off', 2200),
      setStars:(n)=>updateWantedHUD(n),
      toast,
      spark:(x,z)=>{ if(smoke) smoke.emit(x, 1.1, z, { vx:(Math.random()-0.5)*5, vy:2.5, vz:(Math.random()-0.5)*5, life:0.5, size:0.6 }); },
      blood:(x,y,z,dx,dz,amt)=>{ blood.hit(x, y, z, dx, dz, amt); },
      buildCharacter, animateCharacter,
    });
    missions=createMissionRunner({ scene, people, toast, beep:(f,d)=>audio.beep(f,d) });
    weaponCtx.hitables=[people.hitList, trafficHits, remoteHits, police.copHitList()];
    weaponCtx.onPersonHit=(ref, dmg, dx, dz)=>{
      if(ref.kind==='ped' || ref.kind==='enemy'){
        const killed=people.damage(ref, dmg, dx, dz);
        if(killed && ref.kind==='ped') commitCrime('pedKill', ref.x, ref.z);
      }
      else if(ref.kind==='footcop'){
        const r=police.damageFootCop(ref.cop, dmg);
        if(r==='killed'){ people.scare(ref.cop.x, ref.cop.z, 30); toast('🚨 Cop down', 1400); }
      }
      else if(ref.kind==='copcar'){
        police.damageCopCar(ref.cop, dmg);
      }
      else if(ref.kind==='car'){
        const r=traffic.hitCar(ref.car, dmg, dx, dz);
        if(r){ blood.hit(r.x, r.y, r.z, dx, dz, r.kind==='killed'?1.6:0.7); if(r.kind==='killed'){ blood.pool(r.x+dx, r.z+dz, 1.4); people.scare(r.x, r.z, 30); } }
      }
      else if(typeof onRemotePlayerHit==='function' && ref.kind==='player') onRemotePlayerHit(ref, dmg, dx, dz);
    };
    tutorial=createTutorial(scene, city);
    storeUI=createStoreUI({ save, persist:()=>saveSave(save), toast:m=>toast(m,1600),
      beep:(f,d)=>audio.beep(f,d), onChange:()=>{ syncCash(); syncPersonGear(); } });
    minimap=createMinimap($('minimap'), shops.stores, $('bigmap'));
    mapEditor=createMapEditor({ save, persist:()=>saveSave(save), toast:m=>toast(m,2200), beep:(f,d)=>audio.beep(f,d),
      isRotated:()=>orient.rotated, onClose:()=>showMenu(),
      play:(m)=>{ audio.unlock(); orient.goLandscape(); playCustom(m); } });
    syncPersonGear(); updateModeHUD();
    // test hook: ?debug exposes a teleport for automated smoke tests
    if(/[?&]debug\b/.test(location.search)) window.__cd={ frames:()=>frameN, buildMap:m=>{ const t=performance.now(); const c=buildCustomMap(scene,m); const dt=performance.now()-t; c.dispose(); return dt; }, playCustom:m=>{ const t=performance.now(); playCustom(m); return performance.now()-t; }, tp:(x,z,h)=>{ if(onFoot){ foot.reset(x,z,h||0); snapFootCamera(); } else { physics.pos.x=x; physics.pos.z=z; physics.heading=h||0; syncCarTransform(0); snapCamera(); } }, save:()=>save, stores:()=>shops.stores,
      buildings:()=>city.buildings, inside:()=>inside&&{id:inside.b.id, style:inside.room.style}, enter:b=>enterBuilding(b), exit:()=>exitBuilding(),
      getOut:()=>getOut(), tut:()=>tutorial&&{active:tutorial.active, step:tutorial.step}, finishTut:()=>finishTutorial(), pick:id=>pickCar(id),
      mp:()=>mp&&{status:mp.status,count:mp.count}, state:()=>({state,onFoot,editorOpen,pickOpen,cash:save.cash}),
      steal:()=>{ const c=traffic.cars[0]; foot.reset(c.x+2,c.z,0); stealCar(c); return carDef.name; }, physics:()=>physics, missions:()=>missions, setDone:n=>{save.missionsDone=n;}, people:()=>people, traffic:()=>traffic, hp:()=>hp, hurt:d=>hurtPlayer(d),
      police:()=>police, wanted:n=>{ if(police) police.debugWanted(n); return police&&police.stars; },
      car:()=>({vis:carGroup.visible, inScene:!!carGroup.parent, pos:carGroup.position.toArray().map(v=>+v.toFixed(1)), id:carDef.id, phys:[+physics.pos.x.toFixed(1),+physics.pos.z.toFixed(1)], cam:camera.position.toArray().map(v=>+v.toFixed(1))}),
      cam:()=>({c:camera.position.toArray().map(v=>+v.toFixed(2)), p:person.position.toArray().map(v=>+v.toFixed(2)), pv:person.visible, f:[foot.pos.x,foot.pos.z,foot.heading]}) };
    rebuildCar();
    physics=new CarPhysics(carStats);
    applyGearbox();
    placeAtSpawn();
    garage=createGarage({
      save,
      getDef:id=>CAR_DEFS.find(d=>d.id===id),
      onSelectCar:()=>{ stolenCar=null; refreshSceneKeep(); if(tuningUI) tuningUI.refresh(); },
      onPaint:()=>refreshSceneKeep(),
      onWheels:()=>refreshSceneKeep(),
      refreshScene:()=>refreshSceneKeep(),
      openEditor:()=>openEditor('garage','car'),
      onTab:t=>tuningUI && tuningUI.onTab(t),
    });
    tuningUI=createTuningUI({ save, getDef:id=>CAR_DEFS.find(d=>d.id===id), persist:()=>saveSave(save),
      onBuild:(live)=>{ if(live) refreshStatsOnly(); else { refreshSceneKeep(); garage.refresh(); } },
      toast:m=>toast(m,1800), beep:(f,d)=>audio.beep(f,d), syncCash, audio });
    editor=createSkinEditor({
      save, cars:CAR_DEFS, persist:()=>saveSave(save), beep:(f,d)=>audio.beep(f,d),
      onCar:(swapped)=>{
        if(swapped) refreshSceneKeep();
        else applyCarSkin(carGroup, save.paint[carDef.id], carSkinFor(save, carDef.id));
        lookCache=null;
      },
      onOutfit:()=>{ setOutfit(person, save.outfit); lookCache=null; },
      onName:()=>{ lookCache=null; syncCash(); },
      onTab:t=>editorTab(t),
    });
    mp=createMultiplayer({
      scene, CAR_DEFS, buildCar, applyCarSkin, buildCharacter, setOutfit, setHeldWeapon, animateCharacter, unpackLook,
      remoteShot:(a,b,c,d)=>weapons.remoteShot(a,b,c,d),
      localBuilding:()=>inside?inside.b.id:-1,
      onHit:(p)=>{
        if(mode!=='tdm' || !tdm.team || p.tm===tdm.team || dead) return;
        tdm.lastAttacker={ id:p.id, name:p.n, team:p.tm };
        hurtPlayer(+p.d||10);
      },
      onKill:(p)=>{ if(mode==='tdm') addKill(p); },
      onStatus:(s,n)=>setMp(s==='on'?'on':s==='connecting'?'connecting':'off', n),
      onCount:n=>{ if(mp && mp.status==='on') setMp('on', n); },
    });
    mp.connect();
    dragMode=createDragMode({
      scene, camera, buildCar, CAR_DEFS, effectiveStats,
      getPlayer:()=>{ playerInfo.def=carDef; playerInfo.stats=carStats; playerInfo.group=carGroup; return playerInfo; },
      predictET,
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
