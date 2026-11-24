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
import { FootPhysics, dist2D, exitSpot, rayAABB, rayCircle } from './onfoot.js';
import { buildCharacter, setOutfit, setHeldWeapon, animateCharacter, kickRecoil, kickHit, startDeath, animateDeath, resetPose } from './character.js';
import { buildStores, STORE_LOTS } from './stores.js';
import { createWeapons } from './weapons.js';
import { createStoreUI } from './storeui.js';
import { createMinimap } from './minimap.js';
import { ensureSkins, carSkinFor, packLook, unpackLook, PALETTE, SKIN_TONES, HAIR_COLORS } from './skins.js';
import { createSkinEditor } from './skineditor.js';
import { createInteriors, styleFor, STYLE_NAMES } from './interiors.js';
import { createTutorial, TUTORIAL_REWARD } from './tutorial.js';
import { createMultiplayer } from './multiplayer.js';
import { createBlood } from './blood.js';
import { createPeople } from './npcs.js';
import { createTraffic } from './traffic.js';
import { createPolice, POLICE_STATION, WITNESS_RADIUS, WITNESS_LOUD_RADIUS } from './police.js';
import { HOSPITAL_SPAWN, GRID_HALF, ROAD_W, surfaceAt, surfaceGrip, WATER_DEPTH, isWet } from './world.js';
import { createWheelFX } from './fx.js';
import { buildCustomMap, OFFSET } from './mapbuilder.js';
import { createMapEditor } from './mapeditor.js';
import { THEMES as MAP_THEMES, spawnOf } from './custommap.js';
import { buildStats, normalizeBuild, migrateLegacy, timeslip } from './tuning.js';
import { createTuningUI } from './tuningui.js';
import { createMissionRunner, generateMission, TOTAL_MISSIONS, EMERALD_FORTUNE } from './missions.js';
import { CarDamage, CAR_MAX_HP } from './cardamage.js';
import { FuelTank, nearestStation, STATION_RADIUS, FUEL_FILL_RATE } from './fuel.js';
import { nearestPump, PUMP_REFUEL_DIST } from './fuelstations.js';
import { nearestBay, nearestRepairShop, REPAIR_RADIUS, REPAIR_RATE, BAY_REPAIR_DIST } from './repairshop.js';
import { TireWear, WORN_WARN, WORN_BAD } from './tires.js';
import { nearestTireBay, nearestTireShop, TIRE_RADIUS, TIRE_RATE, BAY_TIRE_DIST } from './tireshop.js';
import { FuelTruckRun, buildFuelTruckMeshes } from './fueltruck.js';
import { PaintTown, MILESTONES as PAINT_MILESTONES } from './painttown.js';
import { createPaintFX } from './paintfx.js';
import { createTaxiJob, isTaxiCar, customMapPickers, surgeMultiplierFor, surgeLabelFor, tipLabelFor } from './taxi.js';
import { createCourierJob } from './courier.js';
import { createBusJob, isBusCar, busRoutePickers } from './bus.js';
import { createAmbulanceJob, isAmbulanceCar, ambulancePickers } from './ambulance.js';
import { createFireJob, isFireCar, firePickers } from './fire.js';
import { createPoliceJob, isPoliceCar, policePickers } from './policejob.js';
import { createGarbageJob, isGarbageCar, garbageRoutePickers } from './garbage.js';
import { createTowJob, isTowCar, towPickers } from './towjob.js';
import { createSnowplowJob, isPlowCar, snowplowRoutePickers } from './snowplow.js';
import { createStreetSweeperJob, isSweeperCar, sweeperRoutePickers } from './streetsweeper.js';
import { createMixerJob, isMixerCar, mixerRoutePickers } from './mixer.js';
import { createMailJob, isMailCar, mailRoutePickers } from './mail.js';
import { createIceCreamJob, isIceCreamCar, iceCreamRoutePickers } from './icecream.js';
import { createSchoolBusJob, isSchoolBusCar, schoolBusRoutePickers } from './schoolbus.js';
import { createWeather, weatherSurgeFor, weatherSurgeLabelFor } from './weather.js';

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
let fuelTank=new FuelTank(), fuelLowWarned=false, fuelEmptyT=0, pumpHintShown=false, fillSessionCost=0;
let bayHintShown=false, repairSessionCost=0;   // drive-in repair shop state
let tireWear=new TireWear(), tireHintShown=false, tireSessionCost=0;   // drive-in tire shop state
let tireWarnedHalf=false, tireWarnedBald=false;   // worn-tire toasts, once per set
let tireBaseGrip=null, tireStatsObj=null;   // fresh-stats grip, recaptured per stats object
let fuelTruck=null, fuelTruckMesh=null, fuelTruckCost=0;   // visible delivery run, if one is out
let taxi=createTaxiJob(), taxiBeacon=null, taxiPed=null, taxiPedPhase=0;   // cab fares: beacon + hailer ped + state live here, logic in taxi.js
let courier=createCourierJob(), courierBeacon=null;   // courier shift: beacon + state live here, logic in courier.js
let bus=createBusJob(), busBeacon=null, busPeds=[];   // bus route: beacon + waiting peds + state live here, logic in bus.js
let amb=createAmbulanceJob(), ambBeacon=null, ambPed=null;   // EMS calls: beacon + patient ped + state live here, logic in ambulance.js
let fire=createFireJob(), fireBeacon=null, fireMesh=null, waterJet=null;   // fire calls: beacon + fire visual + water jet + state live here, logic in fire.js
let policeJob=createPoliceJob(), policeBeacon=null, suspectCar=null;   // police patrol: beacon + suspect car + state live here, logic in policejob.js
let garbage=createGarbageJob(), garbageBeacon=null, garbageBins=[];   // garbage route: beacon + curb bins + state live here, logic in garbage.js
let tow=createTowJob(), towBeacon=null, towedCar=null;   // tow calls: beacon + stranded car + state live here, logic in towjob.js
let plow=createSnowplowJob(), plowBeacon=null, plowDrifts=[];   // snow plow routes: beacon + snow drifts + state live here, logic in snowplow.js
let sweeper=createStreetSweeperJob(), sweeperBeacon=null, sweeperPiles=[];   // street sweeper routes: beacon + leaf piles + state live here, logic in streetsweeper.js
let mixer=createMixerJob(), mixerBeacon=null, mixerCones=[];   // cement mixer routes: beacon + pour cones + state live here, logic in mixer.js
let mail=createMailJob(), mailBeacon=null, mailBoxes=[];   // mail routes: beacon + parcel boxes + state live here, logic in mail.js
let icecream=createIceCreamJob(), icecreamBeacon=null, icecreamCones=[];   // ice cream routes: beacon + cone markers + state live here, logic in icecream.js
let schoolbus=createSchoolBusJob(), schoolbusBeacon=null, schoolbusKids=[];   // school bus routes: beacon + kid markers + state live here, logic in schoolbus.js
let weather=createWeather();   // the sky: clear/cloudy/rain/storm, logic in weather.js
let rainPts=null, lightningT=0, flashEl=null;   // rain streaks + storm flash, built in init()
const npcPlayer={x:0,z:0,alive:true,hidden:false,inCar:true,aiming:false,aimH:0};
let missions=null, boardOpen=false, lastGear=0;
let paintTown=null, paintFX=null, paintPay=0, paintPayT=0, paintSaveT=0, paintDirty=false, paintBuildToastT=0, paintBuildRun=0;   // Paint the Town Red
// engine character per car: cylinders, idle, redline
const ENGINES={ sport:{cyl:6,red:7200}, muscle:{cyl:8,red:6200,idle:750}, super:{cyl:10,red:8500}, suv:{cyl:6,red:6000},
  truck:{cyl:8,red:5600,idle:700}, track:{cyl:4,red:8800,idle:1100}, sedan:{cyl:4,red:6500}, taxi:{cyl:4,red:6200},
  van:{cyl:6,red:5500,idle:700}, police:{cyl:8,red:6600,idle:800}, hyper:{cyl:12,red:9000,idle:1000},
  bus:{cyl:6,red:5200,idle:650},
  fire:{cyl:6,red:5200,idle:650},
  garbage:{cyl:6,red:5200,idle:650},
  tow:{cyl:6,red:5200,idle:650},
  plow:{cyl:6,red:5200,idle:650},
  sweeper:{cyl:6,red:5200,idle:650},
  mixer:{cyl:6,red:5200,idle:650},
  mail:{cyl:6,red:5200,idle:650},
  icecream:{cyl:6,red:5200,idle:650},
  schoolbus:{cyl:6,red:5200,idle:650},
  brawler:{cyl:8,red:7000,idle:750,voice:'v8x'}, kaze:{cyl:6,red:7600,idle:850,voice:'i6'}, vanta:{cyl:10,red:8700,idle:1000,voice:'v10'}, rally:{cyl:4,red:7800,idle:950,voice:'i4r'}, baja:{cyl:8,red:6000,idle:700,voice:'v8'} };
function applyGearbox(){
  if(physics && physics.box) physics.box.mode = save.manual ? 'manual' : 'auto';
  const t=save.manual?'⚙️ GEARBOX: MANUAL':'⚙️ GEARBOX: AUTO';
  for(const id of ['m-trans','p-trans']){ const b=$(id); if(b) b.textContent=t; }
  const gb=$('gear-btns'); if(gb) gb.classList.toggle('hidden', !save.manual);
}
let stolenCar=null;
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
// free-look camera on foot: yaw (0 = looking down -Z, same as headings) and pitch (+ = looking up)
let camYaw=0, camPitch=0.1, lookIdle=0, lastStep=0;
const TOUCH_UI = typeof window!=='undefined' && ('ontouchstart' in window);
const _aimO=new THREE.Vector3(), _aimD=new THREE.Vector3(), _aimP=new THREE.Vector3();
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
  if(carDef.id!==lastDmgCarId){ carDamage=new CarDamage(); lastDmgCarId=carDef.id; prevDriveSpeed=null; syncCarHP();
    // a different car means a full tank too; tuning the car you own never refuels it
    fuelTank=new FuelTank(); fuelLowWarned=false; fuelEmptyT=0; pumpHintShown=false; fillSessionCost=0; bayHintShown=false; repairSessionCost=0; syncFuel();
    // a different car means a fresh set of tires too; tuning the car you
    // own never replaces its tires for free
    tireWear=new TireWear(); tireHintShown=false; tireSessionCost=0;
    tireWarnedHalf=false; tireWarnedBald=false; tireStatsObj=null;
    // a new car strands no truck: drop any delivery run aimed at the old one
    if(fuelTruckMesh) scene.remove(fuelTruckMesh);
    fuelTruck=null; fuelTruckMesh=null; fuelTruckCost=0; }
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
  // The fleeing suspect is solid: bounce the cruiser off them like a
  // traffic car, so a PIT is a real ram, not a drive-through. The job
  // itself counts the PIT from the contact; this only makes it physical.
  if(policeJob.active && !inside){
    const s = policeJob.suspect;
    if(s && physics){
      const dx = r.x - s.x, dz = r.z - s.z, d = Math.hypot(dx, dz), rr = 1.15 + 2.2;
      if(d < rr && d > 1e-6){
        const nx = dx / d, nz = dz / d;
        r.x = s.x + nx * rr; r.z = s.z + nz * rr;
        const vx = physics.vel.x, vz = physics.vel.z;
        const vn = vx * nx + vz * nz;
        if(vn < 0){
          const impact = Math.abs(vn);
          const tx = -nz, tz = nx, vt = (vx * tx + vz * tz) * 0.82;
          const rest = impact > 15 ? 0.45 : impact > 8 ? 0.3 : 0.15;
          physics.vel.x = nx * (-vn * rest) + tx * vt;
          physics.vel.z = nz * (-vn * rest) + tz * vt;
          if(impact > 6 && audio) audio.beep(90, 0.08);
          if(typeof spawnSparks === 'function' && impact > 10){
            try{ spawnSparks(r.x, r.z, Math.min(12, impact | 0)); }catch(e){}
          }
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
  camYaw=physics.heading; camPitch=0.1; lookIdle=0;
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
  const px=foot.pos.x, pz=foot.pos.z;
  const aiming=aimHold>0 && !!gear().equipped;
  const cp=Math.cos(camPitch), sp=Math.sin(camPitch);
  fwdV.set(-Math.sin(camYaw)*cp, sp, -Math.cos(camYaw)*cp);           // where the camera looks
  const rx=Math.cos(camYaw), rz=-Math.sin(camYaw);                       // camera right
  const dist=aiming?2.7:4.3, side=aiming?0.72:0.42, pivotY=aiming?1.62:1.55;
  camGoal.set(px-fwdV.x*dist+rx*side, Math.max(0.6, pivotY-fwdV.y*dist+0.25), pz-fwdV.z*dist+rz*side);
  if(inside){
    // keep the camera inside the room so walls never block the view
    const bd=inside.room.bounds, m=0.45;
    camGoal.x=Math.max(bd.minX+m, Math.min(bd.maxX-m, camGoal.x));
    camGoal.z=Math.max(bd.minZ+m, Math.min(bd.maxZ-m, camGoal.z));
    camGoal.y=Math.min(camGoal.y, 3.9);
  }
  const k=1-Math.exp(-dt*16);
  camPos.x+=(camGoal.x-camPos.x)*k;
  camPos.y+=(camGoal.y-camPos.y)*k;
  camPos.z+=(camGoal.z-camPos.z)*k;
  camera.position.copy(camPos);
  // look straight along the view direction, so the screen centre (crosshair) is exactly where you aim
  camera.lookAt(camPos.x+fwdV.x*20, camPos.y+fwdV.y*20, camPos.z+fwdV.z*20);
  const fov=aiming?48:60;
  if(Math.abs(fov-lastFov)>0.25){
    lastFov+=(fov-lastFov)*Math.min(1,dt*8);
    camera.fov=lastFov; camera.updateProjectionMatrix();
  }
}
// Free aim: cast the crosshair ray (screen centre) into the world — people, cars, players, buildings, ground —
// and return the point it lands on. No snapping: what's under the crosshair is what you shoot.
function aimPoint(range){
  camera.getWorldDirection(_aimD); _aimO.copy(camera.position);
  const hd=Math.hypot(_aimD.x,_aimD.z)||1e-6, dxn=_aimD.x/hd, dzn=_aimD.z/hd;
  let tBest=range+6, who=null;
  if(_aimD.y<-1e-3) tBest=Math.min(tBest, -_aimO.y/_aimD.y);
  const yAt=t=>_aimO.y+_aimD.y*t;
  if(weaponCtx.colliders) for(const c of weaponCtx.colliders){ const s=rayAABB(_aimO.x,_aimO.z,dxn,dzn,c,tBest*hd); if(s<tBest*hd) tBest=s/hd; }
  const lists=weaponCtx.hitables||[];
  for(const lst of lists) for(const t of lst){
    const s=rayCircle(_aimO.x,_aimO.z,dxn,dzn,t.x,t.z,t.r+0.05,tBest*hd);
    if(s>=tBest*hd) continue;
    // skip anything between the camera and you (over-the-shoulder camera)
    if(Math.hypot(t.x-foot.pos.x,t.z-foot.pos.z)<0.7) continue;
    const y=yAt(s/hd); if(y<0.05||y>1.95) continue;
    tBest=s/hd; who=t;
  }
  if(weaponCtx.targets) for(const t of weaponCtx.targets){ if(!t.up) continue; const s=rayCircle(_aimO.x,_aimO.z,dxn,dzn,t.x,t.z,t.r,tBest*hd); if(s<tBest*hd){ tBest=s/hd; who=t; } }
  _aimP.copy(_aimD).multiplyScalar(tBest).add(_aimO);
  return who;
}
// AIM: crosshair in the middle of the screen whenever a gun is out; the body turns to the camera and the
// gun points exactly at whatever is under the crosshair (heading + up/down pitch). No auto-aim.
function updateAim(dt){
  const ch=$('crosshair');
  const armed=!!gear().equipped && !dead && !storeOpen;
  if(!armed){ ch.classList.add('hidden'); weaponCtx.aimH=null; weaponCtx.aimPitch=0; person.userData.aimPitch=0; return; }
  ch.classList.remove('hidden');
  if(controls.input.aim) aimHold=Math.max(aimHold, 0.25);
  const w=weaponDef(gear().equipped), range=w?w.range:60;
  const who=aimPoint(range);
  ch.classList.toggle('lock', !!who && !!who.ref);
  ch.classList.toggle('dim', aimHold<=0);
  // muzzle (matches weapons.js) -> aim point
  const h=foot.heading, mx=foot.pos.x-Math.sin(h)*0.95+Math.cos(h)*0.3, mz=foot.pos.z-Math.cos(h)*0.95-Math.sin(h)*0.3;
  const dx=_aimP.x-mx, dz=_aimP.z-mz, hdist=Math.hypot(dx,dz);
  if(hdist>1.2){ weaponCtx.aimH=Math.atan2(-dx,-dz); weaponCtx.aimPitch=Math.atan2(_aimP.y-1.45, hdist); }
  else { weaponCtx.aimH=camYaw; weaponCtx.aimPitch=camPitch; }
  person.userData.aimPitch=Math.max(-0.9, Math.min(0.9, weaponCtx.aimPitch));
  npcPlayer.aiming=aimHold>0; npcPlayer.aimH=weaponCtx.aimH;
}
function updateFoot(dt){
  const fx0=foot.pos.x, fz0=foot.pos.z;
  // camera: drag (touch) / mouse swings it any way you like
  const lk=controls.consumeLook();
  const zoomK=aimHold>0 && gear().equipped ? 0.6 : 1;
  const sens=(TOUCH_UI ? 0.0058 : 0.0026)*zoomK*(save.lookSens||1);
  if(lk.dx||lk.dy){ camYaw-=lk.dx*sens; camPitch=Math.max(-0.75, Math.min(0.72, camPitch-lk.dy*sens*0.85)); lookIdle=0; }
  else lookIdle+=dt;
  // walk relative to the camera; aim/fire = face the camera and strafe
  const inp=controls.input, mxs=inp.moveX||0, mys=inp.moveY||0, mag=Math.min(1, Math.hypot(mxs, mys));
  const armedAim=(inp.aim||aimHold>0) && !!gear().equipped;
  const moveYaw=mag>0.01 ? camYaw-Math.atan2(mxs, mys) : foot.heading;
  const faceYaw=armedAim ? camYaw : moveYaw;
  foot.updateFree(moveYaw, mag, faceYaw, !armedAim && inp.run, dt, footCollide, armedAim ? 18 : 9);
  // gently swing the camera back behind you while walking and not touching it
  if(!armedAim && mag>0.3 && lookIdle>1.4 && !lk.active){
    const d=Math.atan2(Math.sin(foot.heading-camYaw), Math.cos(foot.heading-camYaw));
    camYaw+=d*Math.min(1, dt*0.9*mag);
    camPitch+=(0.1-camPitch)*Math.min(1, dt*0.6);
  }
  // wading: slow + sink to the waist/chest in water
  if(!inside){
    footSurf=surfAt(foot.pos.x, foot.pos.z);
    const k = footSurf==='deep' ? 0.4 : footSurf==='water' ? 0.62 : footSurf==='mud' ? 0.6 : 1;
    if(k<1){ foot.pos.x=fx0+(foot.pos.x-fx0)*k; foot.pos.z=fz0+(foot.pos.z-fz0)*k; }
    if((footSurf==='deep'||footSurf==='water') && Math.abs(foot.speed)>0.5 && Math.random()<dt*4) wheelFX.splash(foot.pos.x, foot.pos.z, 0.35);
  }else footSurf='road';
  person.position.x=foot.pos.x; person.position.z=foot.pos.z;
  person.rotation.y=foot.heading;
  { const st=Math.floor(foot.phase/Math.PI); if(st!==lastStep){ lastStep=st; if(foot.speed>0.6) audio.step(foot.speed>5, footSurf); } }
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
  animateCharacter(person, foot.phase, foot.animSpeed ?? foot.speed, aimHold>0 && !!gear().equipped, dt);
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
  camYaw=foot.heading; camPitch=0.1; lookIdle=0;
  const cp=Math.cos(camPitch);
  fwdV.set(-Math.sin(camYaw)*cp, Math.sin(camPitch), -Math.cos(camYaw)*cp);
  camPos.set(foot.pos.x-fwdV.x*4.3+Math.cos(camYaw)*0.42, 1.55-fwdV.y*4.3+0.25, foot.pos.z-fwdV.z*4.3-Math.sin(camYaw)*0.42);
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
  // A fare cannot follow you to another world: end it here, quietly.
  if(taxi.active){ taxi.abandon(); setTaxiBeacon(null); hideTaxiPed(); updateTaxiHud(); }
  if(courier.active){ courier.abandon(); setCourierBeacon(null); updateCourierHud(); }
  if(bus.active){ bus.abandon(); setBusBeacon(null); hideBusPeds(); updateBusHud(); }
  if(amb.active){ amb.abandon(); setAmbBeacon(null); hideAmbPed(); updateAmbHud(); }
  if(fire.active){ fire.abandon(); setFireBeacon(null); hideFireMesh(); updateFireHud(); }
  if(policeJob.active){ policeJob.abandon(); setPoliceBeacon(null); hideSuspectCar(); updatePoliceHud(); }
  if(garbage.active){ garbage.abandon(); setGarbageBeacon(null); hideGarbageBins(); updateGarbageHud(); }
  if(tow.active){ tow.abandon(); setTowBeacon(null); hideTowedCar(); updateTowHud(); }
  if(plow.active){ plow.abandon(); setPlowBeacon(null); hidePlowDrifts(); updatePlowHud(); }
  if(sweeper.active){ sweeper.abandon(); setSweeperBeacon(null); hideSweeperPiles(); updateSweeperHud(); }
  if(mixer.active){ mixer.abandon(); setMixerBeacon(null); hideMixerCones(); updateMixerHud(); }
  if(mail.active){ mail.abandon(); setMailBeacon(null); hideMailBoxes(); updateMailHud(); }
  if(icecream.active){ icecream.abandon(); setIceCreamBeacon(null); hideIceCreamCones(); updateIceCreamHud(); }
  if(schoolbus.active){ schoolbus.abandon(); setSchoolBusBeacon(null); hideSchoolBusKids(); updateSchoolBusHud(); }
  taxi.setPickers(customMapPickers(map, OFFSET));   // cab fares run on custom streets too
  courier.setPickers(customMapPickers(map, OFFSET));   // courier orders run on custom streets too
  bus.setPickers(busRoutePickers(map, OFFSET));   // bus routes run on custom streets too
  amb.setPickers(ambulancePickers(map, OFFSET));   // EMS calls run on custom streets too
  fire.setPickers(firePickers(map, OFFSET));   // fire calls run on custom streets too
  policeJob.setPickers(policePickers(map, OFFSET));   // patrol calls run on custom streets too
  garbage.setPickers(garbageRoutePickers(map, OFFSET));   // garbage routes run on custom streets too
  tow.setPickers(towPickers(map, OFFSET));   // tow calls run on custom streets too
  plow.setPickers(snowplowRoutePickers(map, OFFSET));   // plow routes run on custom streets too
  sweeper.setPickers(sweeperRoutePickers(map, OFFSET));   // sweeper routes run on custom streets too
  mixer.setPickers(mixerRoutePickers(map, OFFSET));   // mixer routes run on custom streets too
  mail.setPickers(mailRoutePickers(map, OFFSET));   // mail routes run on custom streets too
  icecream.setPickers(iceCreamRoutePickers(map, OFFSET));   // ice cream routes run on custom streets too
  schoolbus.setPickers(schoolBusRoutePickers(map, OFFSET));   // school bus routes run on custom streets too
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
  // Leaving the custom world ends a live fare, same as leaving the cab.
  if(taxi.active){ taxi.abandon(); setTaxiBeacon(null); hideTaxiPed(); updateTaxiHud(); }
  if(courier.active){ courier.abandon(); setCourierBeacon(null); updateCourierHud(); }
  if(bus.active){ bus.abandon(); setBusBeacon(null); hideBusPeds(); updateBusHud(); }
  if(amb.active){ amb.abandon(); setAmbBeacon(null); hideAmbPed(); updateAmbHud(); }
  if(fire.active){ fire.abandon(); setFireBeacon(null); hideFireMesh(); updateFireHud(); }
  if(policeJob.active){ policeJob.abandon(); setPoliceBeacon(null); hideSuspectCar(); updatePoliceHud(); }
  if(garbage.active){ garbage.abandon(); setGarbageBeacon(null); hideGarbageBins(); updateGarbageHud(); }
  if(tow.active){ tow.abandon(); setTowBeacon(null); hideTowedCar(); updateTowHud(); }
  if(plow.active){ plow.abandon(); setPlowBeacon(null); hidePlowDrifts(); updatePlowHud(); }
  if(sweeper.active){ sweeper.abandon(); setSweeperBeacon(null); hideSweeperPiles(); updateSweeperHud(); }
  if(mixer.active){ mixer.abandon(); setMixerBeacon(null); hideMixerCones(); updateMixerHud(); }
  if(mail.active){ mail.abandon(); setMailBeacon(null); hideMailBoxes(); updateMailHud(); }
  if(icecream.active){ icecream.abandon(); setIceCreamBeacon(null); hideIceCreamCones(); updateIceCreamHud(); }
  if(schoolbus.active){ schoolbus.abandon(); setSchoolBusBeacon(null); hideSchoolBusKids(); updateSchoolBusHud(); }
  taxi.setPickers(null);   // back to the main-city grid
  courier.setPickers(null);   // courier orders back to the main-city grid too
  bus.setPickers(null);   // bus routes back to the main-city grid too
  amb.setPickers(null);   // EMS calls back to the main-city grid too
  fire.setPickers(null);   // fire calls back to the main-city grid too
  policeJob.setPickers(null);   // patrol calls back to the main-city grid too
  garbage.setPickers(null);   // garbage routes back to the main-city grid too
  tow.setPickers(null);   // tow calls back to the main-city grid too
  plow.setPickers(null);   // plow routes back to the main-city grid too
  sweeper.setPickers(null);   // sweeper routes back to the main-city grid too
  mixer.setPickers(null);   // mixer routes back to the main-city grid too
  mail.setPickers(null);   // mail routes back to the main-city grid too
  icecream.setPickers(null);   // ice cream routes back to the main-city grid too
  schoolbus.setPickers(null);   // school bus routes back to the main-city grid too
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

// ---------------- taxi fares: beacon + HUD (logic lives in taxi.js) ----------------
// The beacon is yellow for a regular fare, blue for an airport run, gold
// for a VIP rush fare — the colour is the tell before the cab even arrives.
function setTaxiBeacon(p, vip, airport){
  if(!p){ if(taxiBeacon) taxiBeacon.visible = false; return; }
  if(!taxiBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xffc400, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xffc400, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    taxiBeacon = new THREE.Group();
    taxiBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    taxiBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(taxiBeacon);
  }
  const col = vip ? 0xffd700 : airport ? 0x38bdf8 : 0xffc400;
  taxiBeacon.children[0].material.color.set(col);
  taxiBeacon.children[1].material.color.set(col);
  taxiBeacon.children[1].material.opacity = vip ? 0.35 : airport ? 0.3 : 0.2;
  taxiBeacon.visible = true; taxiBeacon.position.set(p.x, 0, p.z);
}
// The hailer is a person, not just a marker: a waving ped standing on the
// sidewalk at the hail point, facing the cab, until the fare is picked up
// (then they are in the cab, so the ped hides) or the hail ends. The ped
// is never a bullet target — it is a scene prop, not in the hit lists —
// so it cannot be shot, run over for a crime, or counted as a witness.
function setTaxiPed(p, vip){
  if(!scene) return;
  const pick = arr => arr[(Math.random() * arr.length) | 0];
  // A VIP rush fare dresses the part: gold shirt, so the gold beacon
  // and the person waiting under it match.
  const outfit = { shirt:vip ? 0xffd700 : pick(PALETTE), pants:pick([0x2d3748, 0x1e3a8a, 0x111827, 0x6b7280, 0x8a5a1a, 0xcbd5e1]),
    skin:pick(SKIN_TONES), hair:pick(HAIR_COLORS.slice(0, 6)),
    hat:Math.random() < 0.25 ? pick(['cap', 'beanie', 'cowboy']) : 'none', hatColor:pick(PALETTE),
    hairLong:Math.random() < 0.4 };
  if(!taxiPed){ taxiPed = buildCharacter(outfit); scene.add(taxiPed); }
  else setOutfit(taxiPed, outfit);
  resetPose(taxiPed);
  taxiPed.position.set(p.x, 0, p.z);
  taxiPed.visible = true;
  taxiPedPhase = 0;
}
function hideTaxiPed(){ if(taxiPed) taxiPed.visible = false; }
// Every frame while a fare is hailing: the ped faces the cab and waves.
// Body faces -Z at rotation 0, so facing (dx, dz) is atan2(-dx, -dz).
function updateTaxiPed(dt){
  if(!taxiPed || !taxiPed.visible || taxi.state !== 'hail') return;
  const dx = physics.pos.x - taxiPed.position.x, dz = physics.pos.z - taxiPed.position.z;
  taxiPed.rotation.y = Math.atan2(-dx, -dz);
  taxiPedPhase += dt * 9;
  animateCharacter(taxiPed, taxiPedPhase, 0, false, dt, { wave:true });
}
// ---------------- weather: rain, storms, lightning (logic in weather.js) ----------------

// Rain streaks fall around the car (or the walker, on foot) while the
// sky is wet; drops that hit the ground or drift too far away respawn
// above the player, so the rain follows the drive instead of pooling
// where it started.
function updateRain(dt){
  if(!rainPts) return;
  const w = weather.intensity;
  rainPts.visible = w > 0.02;
  if(!rainPts.visible) return;
  rainPts.material.opacity = w * 0.55;
  const pos = rainPts.geometry.attributes.position.array;
  const px = onFoot ? foot.pos.x : physics.pos.x, pz = onFoot ? foot.pos.z : physics.pos.z;
  const fall = (weather.state === 'storm' ? 38 : 28) * dt;
  for(let i = 0; i < pos.length; i += 3){
    let y = pos[i+1] - fall * (0.7 + ((i * 7) % 10) / 25);
    if(y < 0 || Math.abs(pos[i] - px) > 40 || Math.abs(pos[i+2] - pz) > 40){
      pos[i] = px + (Math.random()-0.5)*70; pos[i+2] = pz + (Math.random()-0.5)*70; y = 30 + Math.random()*5;
    }
    pos[i+1] = y;
  }
  rainPts.geometry.attributes.position.needsUpdate = true;
}

// A lightning strike: a white fullscreen flash that double-blinks out
// over a third of a second. The div is built lazily, no index.html edit.
function stormFlash(){
  if(!flashEl){
    flashEl = document.createElement('div');
    flashEl.id = 'storm-flash';
    document.body.appendChild(flashEl);
  }
  lightningT = 0.35;
}

function weatherToast(ev){
  if(ev.to === 'storm') return '⛈️ Storm rolling in — grip down, fares pay +50%';
  if(ev.to === 'rain') return '🌧️ Rain rolling in — roads slick, fares pay +25%';
  if(ev.to === 'cloudy') return '☁️ Clouding over';
  return '☀️ Skies clearing';
}

// The weather chip on the HUD: the sky, and what it does to the drive.
// Hidden in clear skies — nothing to warn about.
function updateWeatherHud(){
  const el = $('weather-hud'); if(!el) return;
  const w = weather.state;
  const txt = w === 'storm' ? '⛈️ STORM · slick roads · fares ×1.5'
    : w === 'rain' ? '🌧️ RAIN · slick roads · fares ×1.25'
    : w === 'cloudy' ? '☁️ CLOUDY' : '';
  el.textContent = txt;
  el.classList.toggle('hidden', !txt);
}

// Surge label for a fare event: the time-of-day part and the weather
// part named separately, so a night storm reads as two surges, not one
// mystery multiplier.
function fareSurgeText(ev){
  const bits = [];
  if(ev.timeSurge > 1) bits.push(surgeLabelFor(ev.timeSurge) + ' ×' + ev.timeSurge);
  if(ev.weatherSurge > 1) bits.push(weatherSurgeLabelFor(ev.weather) + ' ×' + ev.weatherSurge);
  return bits.join(' · ');
}

function updateTaxiHud(){
  const el = $('taxi-hud'); if(!el) return;
  if(!taxi.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = taxi.target;
  $('tx-obj').textContent = taxi.state === 'hail'
    ? (taxi.airport ? 'Pick up the airport fare ✈️' : taxi.vip ? 'Pick up the VIP fare' : 'Pick up the fare')
    : (taxi.airport ? (taxi.airportDir === 'to' ? 'Drop off at the airport ✈️' : 'Drop off the airport pickup ✈️')
      : taxi.vip ? 'Drop off the VIP — hurry!' : 'Drop off the passenger');
  el.classList.toggle('vip', taxi.vip);
  el.classList.toggle('airport', taxi.airport);
  const tl = taxi.timeLeft;
  $('tx-time').textContent = taxi.state === 'hail' ? '⏱ ' + Math.ceil(tl) + 's'
    : (tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE');
  $('tx-time').classList.toggle('low', tl < 10);
  // Streak + lifetime rating, when there is anything to show: the streak
  // is this shift's, the rating is the career average from the save.
  const st = $('tx-streak');
  if(st){
    const bits = [];
    if(taxi.airport) bits.push('✈️ Airport run · +$120 flat');
    if(taxi.vip) bits.push('🌟 VIP ×2 — in a hurry');
    if(taxi.timeSurge > 1) bits.push((taxi.timeSurge >= 1.5 ? '🌙 ' : '🌇 ') + surgeLabelFor(taxi.timeSurge) + ' ×' + taxi.timeSurge);
    if(taxi.weatherSurge > 1) bits.push((taxi.weather === 'storm' ? '⛈️ ' : '🌧️ ') + weatherSurgeLabelFor(taxi.weather) + ' ×' + taxi.weatherSurge);
    if(taxi.streak > 1) bits.push('🔥 Streak x' + taxi.streak + ' (+' + Math.min(10 * (taxi.streak - 1), 50) + '%)');
    else if(taxi.streak === 1) bits.push('🔥 Streak x1');
    if(taxi.ratingCount > 0) bits.push('★ ' + taxi.ratingAvg.toFixed(1) + ' (' + taxi.ratingCount + ' rides)' + (taxi.tipMult !== 1 ? ' · ' + tipLabelFor(taxi.tipMult) : ''));
    st.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('tx-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('tx-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('tx-arrow').classList.add('hidden'); $('tx-dist').textContent = ''; }
}

// ---------------- courier deliveries: beacon + HUD (logic lives in courier.js) ----------------
// The beacon is orange for a delivery — restaurant while an order waits,
// the customer once it is aboard — so it never reads as a taxi fare.
function setCourierBeacon(p){
  if(!p){ if(courierBeacon) courierBeacon.visible = false; return; }
  if(!courierBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xfb923c, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xfb923c, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    courierBeacon = new THREE.Group();
    courierBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    courierBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(courierBeacon);
  }
  courierBeacon.visible = true; courierBeacon.position.set(p.x, 0, p.z);
}
function updateCourierHud(){
  const el = $('courier-hud'); if(!el) return;
  if(!courier.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = courier.target;
  const st = courier.state;
  $('cv-obj').textContent = st === 'offer' ? 'Pick up the order'
    : st === 'offer2' ? 'Second order waiting — pick it up or deliver first'
    : courier.carriedCount > 1 ? 'Deliver ' + courier.carriedCount + ' orders'
    : 'Deliver the order';
  const tl = courier.timeLeft;
  const timeEl = $('cv-time');
  if(st === 'offer' || st === 'offer2'){ timeEl.textContent = '⏱ ' + Math.ceil(tl) + 's'; timeEl.classList.toggle('low', tl < 10); }
  else{
    // Freshness time: the clock runs against par, so past par reads COLD.
    timeEl.textContent = tl >= 0 ? '🔥 ' + Math.ceil(tl) + 's' : '❄️ COLD';
    timeEl.classList.toggle('low', tl < 10);
  }
  const info = $('cv-info');
  if(info){
    const bits = [];
    if(courier.carriedCount){ bits.push(courier.carried.map(o => o.food + ' ' + Math.round(o.freshness * 100) + '%').join(' · ')); }
    if(courier.carriedCount > 1) bits.push('stacked pair · +$50 on the last drop');
    if(courier.deliveries > 0) bits.push(courier.deliveries + ' delivered · $' + courier.earned.toLocaleString());
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('cv-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('cv-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('cv-arrow').classList.add('hidden'); $('cv-dist').textContent = ''; }
}

// ---------------- bus routes: beacon + HUD + waiting peds (logic lives in bus.js) ----------------
// The beacon is teal for a bus stop — never a taxi fare or a delivery —
// so the three jobs never read as each other on the street.
function setBusBeacon(p){
  if(!p){ if(busBeacon) busBeacon.visible = false; return; }
  if(!busBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0x22d3ee, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0x22d3ee, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    busBeacon = new THREE.Group();
    busBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    busBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(busBeacon);
  }
  busBeacon.visible = true; busBeacon.position.set(p.x, 0, p.z);
}
// The riders waiting at the next stop are people, not just a marker: up
// to three peds standing by the stop, facing the bus until it pulls up
// (then they are aboard, so the peds hide). They are scene props, never
// bullet targets — same as the taxi hailer — so they cannot be shot, run
// over for a crime, or counted as witnesses.
function setBusPeds(p, count){
  if(!scene) return;
  const pick = arr => arr[(Math.random() * arr.length) | 0];
  const n = Math.min(3, Math.max(0, count | 0));
  for(let i = 0; i < 3; i++){
    if(i >= n){ if(busPeds[i]) busPeds[i].visible = false; continue; }
    const outfit = { shirt:pick(PALETTE), pants:pick([0x2d3748, 0x1e3a8a, 0x111827, 0x6b7280, 0x8a5a1a, 0xcbd5e1]),
      skin:pick(SKIN_TONES), hair:pick(HAIR_COLORS.slice(0, 6)),
      hat:Math.random() < 0.25 ? pick(['cap', 'beanie', 'cowboy']) : 'none', hatColor:pick(PALETTE),
      hairLong:Math.random() < 0.4 };
    if(!busPeds[i]){ busPeds[i] = buildCharacter(outfit); busPeds[i].userData.phase = 0; scene.add(busPeds[i]); }
    else setOutfit(busPeds[i], outfit);
    resetPose(busPeds[i]);
    // A little cluster by the stop, not a pile on one spot.
    const a = i * 2.1 + 0.6, r = 1.6;
    busPeds[i].position.set(p.x + Math.cos(a) * r, 0, p.z + Math.sin(a) * r);
    busPeds[i].visible = true;
  }
}
function hideBusPeds(){ for(const ped of busPeds) if(ped) ped.visible = false; }
// Every frame while a route is running: the waiting peds face the bus.
function updateBusPeds(dt){
  const stop = bus.nextStop;
  if(!stop || bus.state !== 'route') return;
  for(const ped of busPeds){
    if(!ped || !ped.visible) continue;
    const dx = physics.pos.x - ped.position.x, dz = physics.pos.z - ped.position.z;
    ped.rotation.y = Math.atan2(-dx, -dz);
    ped.userData.phase = (ped.userData.phase || 0) + dt * 2;
    animateCharacter(ped, ped.userData.phase, 0, false, dt, {});
  }
}
function updateBusHud(){
  const el = $('bus-hud'); if(!el) return;
  if(!bus.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = bus.target;
  const stop = bus.nextStop;
  $('bs-obj').textContent = 'Stop ' + (bus.stopIndex + 1) + '/' + bus.stopCount
    + (stop ? ' · ' + stop.waiting + ' waiting' : '')
    + (bus.onboard ? ' · ' + bus.onboard + ' aboard' : '');
  const tl = bus.timeLeft;
  $('bs-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
  $('bs-time').classList.toggle('low', tl < 10);
  const info = $('bs-info');
  if(info){
    const bits = [];
    if(bus.farebox > 0) bits.push('💵 $' + bus.farebox.toLocaleString() + ' in the farebox');
    if(bus.surge > 1) bits.push('Surge ×' + bus.surge);
    if(bus.routes > 0) bits.push(bus.routes + ' routes · ' + bus.passengers + ' riders · $' + bus.earned.toLocaleString());
    if(bus.ratingCount > 0) bits.push('★ ' + bus.ratingAvg.toFixed(1) + ' (' + bus.ratingCount + ' routes)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('bs-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('bs-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('bs-arrow').classList.add('hidden'); $('bs-dist').textContent = ''; }
}

// ---------------- ambulance calls: beacon + HUD + patient ped (logic lives in ambulance.js) ----------------
// The beacon is red for the patient — an emergency, not a fare — and
// green for the hospital, so the two legs of a call never read as each other.
function setAmbBeacon(p, phase){
  if(!p){ if(ambBeacon) ambBeacon.visible = false; return; }
  if(!ambBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xef4444, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xef4444, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    ambBeacon = new THREE.Group();
    ambBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    ambBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(ambBeacon);
  }
  const col = phase === 'transport' ? 0x22c55e : 0xef4444;
  ambBeacon.children[0].material.color.set(col);
  ambBeacon.children[1].material.color.set(col);
  ambBeacon.children[1].material.opacity = phase === 'transport' ? 0.3 : 0.2;
  ambBeacon.visible = true; ambBeacon.position.set(p.x, 0, p.z);
}
// The patient is a person, not just a marker: someone waiting on the
// sidewalk, facing the ambulance until it pulls up (then they are aboard,
// so the ped hides). A scene prop, never a bullet target — same as the
// taxi hailer — so they cannot be shot, run over for a crime, or counted
// as a witness.
function setAmbPed(p){
  if(!scene) return;
  const pick = arr => arr[(Math.random() * arr.length) | 0];
  const outfit = { shirt:pick(PALETTE), pants:pick([0x2d3748, 0x1e3a8a, 0x111827, 0x6b7280, 0x8a5a1a, 0xcbd5e1]),
    skin:pick(SKIN_TONES), hair:pick(HAIR_COLORS.slice(0, 6)),
    hat:Math.random() < 0.25 ? pick(['cap', 'beanie', 'cowboy']) : 'none', hatColor:pick(PALETTE),
    hairLong:Math.random() < 0.4 };
  if(!ambPed){ ambPed = buildCharacter(outfit); scene.add(ambPed); }
  else setOutfit(ambPed, outfit);
  resetPose(ambPed);
  ambPed.position.set(p.x, 0, p.z);
  ambPed.visible = true;
}
function hideAmbPed(){ if(ambPed) ambPed.visible = false; }
// Every frame while a call is coming in: the patient faces the ambulance.
function updateAmbPed(dt){
  if(!ambPed || !ambPed.visible || amb.state !== 'respond') return;
  const dx = physics.pos.x - ambPed.position.x, dz = physics.pos.z - ambPed.position.z;
  ambPed.rotation.y = Math.atan2(-dx, -dz);
  ambPed.userData.phase = (ambPed.userData.phase || 0) + dt * 2;
  animateCharacter(ambPed, ambPed.userData.phase, 0, false, dt, {});
}
function updateAmbHud(){
  const el = $('amb-hud'); if(!el) return;
  if(!amb.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = amb.target;
  $('am-obj').textContent = amb.state === 'respond'
    ? 'Pick up the patient · Condition ' + amb.condition + '%'
    : 'To the hospital · Condition ' + amb.condition + '%';
  const tl = amb.timeLeft;
  $('am-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
  $('am-time').classList.toggle('low', tl < 10);
  const info = $('am-info');
  if(info){
    const bits = [];
    if(amb.condition < 30) bits.push('🚨 CRITICAL');
    if(amb.surge > 1) bits.push('Surge ×' + amb.surge);
    if(amb.calls > 0) bits.push(amb.calls + ' calls · ' + amb.saved + ' saved · $' + amb.earned.toLocaleString());
    if(amb.ratingCount > 0) bits.push('★ ' + amb.ratingAvg.toFixed(1) + ' (' + amb.ratingCount + ' calls)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('am-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('am-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('am-arrow').classList.add('hidden'); $('am-dist').textContent = ''; }
}

// ---------------- fire calls: beacon + fire visual + water jet + HUD (logic lives in fire.js) ----------------
// The beacon is orange for a fire — an emergency, not a fare — and the
// fire itself is a real thing in the world: stacked flame cones over a
// flickering light that grows with the intensity, so you can see what
// you are spraying before the HUD ever tells you.
function setFireBeacon(p){
  if(!p){ if(fireBeacon) fireBeacon.visible = false; return; }
  if(!fireBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xff6a00, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xff6a00, transparent:true, opacity:0.25, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    fireBeacon = new THREE.Group();
    fireBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    fireBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(fireBeacon);
  }
  fireBeacon.visible = true; fireBeacon.position.set(p.x, 0, p.z);
}
// The fire: three nested flame cones (outer orange, mid amber, core
// yellow) over a point light. Built once, repositioned and rescaled per
// frame by updateFireMesh — the flames grow with the intensity and
// flicker, and vanish when the call ends.
function setFireMesh(p){
  if(!scene) return;
  if(!fireMesh){
    fireMesh = new THREE.Group();
    const cone = (r, h, col) => new THREE.Mesh(
      new THREE.ConeGeometry(r, h, 12),
      new THREE.MeshBasicMaterial({ color:col, transparent:true, opacity:0.9, depthWrite:false }));
    const outer = cone(2.2, 5.5, 0xff4500); outer.position.y = 2.75;
    const mid = cone(1.5, 4.2, 0xff8c00); mid.position.y = 2.1;
    const core = cone(0.8, 3.0, 0xffd21f); core.position.y = 1.5;
    fireMesh.add(outer, mid, core);
    const light = new THREE.PointLight(0xff6a00, 60, 30, 1.8);
    light.position.y = 3; fireMesh.add(light);
    fireMesh.userData.light = light;
    scene.add(fireMesh);
  }
  fireMesh.position.set(p.x, 0, p.z);
  fireMesh.visible = true;
}
function hideFireMesh(){
  if(fireMesh) fireMesh.visible = false;
  if(waterJet) waterJet.visible = false;
}
// Every frame while a call is live: the flames scale with the intensity
// and flicker, and the water jet runs from the truck to the fire while
// the hose is on. The jet is a stretched cylinder re-aimed each frame,
// so it tracks the truck as it parks up.
function updateFireMesh(dt){
  if(!fireMesh || !fireMesh.visible || !fire.active) return;
  const f = fire.fire;
  if(!f){ hideFireMesh(); return; }
  const t = performance.now() / 1000;
  const s = 0.4 + (fire.intensity / 100) * 0.9;
  const flick = 1 + Math.sin(t * 13) * 0.06 + Math.sin(t * 29) * 0.04;
  fireMesh.scale.set(s * flick, s, s * flick);
  fireMesh.userData.light.intensity = 20 + fire.intensity * 0.6;
  const spraying = fire.isSpraying({ x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed) });
  if(!spraying){ if(waterJet) waterJet.visible = false; return; }
  if(!waterJet){
    waterJet = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.28, 1, 8, 1, true),
      new THREE.MeshBasicMaterial({ color:0x7dd3fc, transparent:true, opacity:0.55, depthWrite:false, side:THREE.DoubleSide }));
    scene.add(waterJet);
  }
  const from = new THREE.Vector3(physics.pos.x, 2.2, physics.pos.z);
  const to = new THREE.Vector3(f.x, 1.5, f.z);
  const dir = to.clone().sub(from), len = dir.length();
  waterJet.position.copy(from).add(to).multiplyScalar(0.5);
  waterJet.scale.set(1, len, 1);
  waterJet.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  waterJet.visible = true;
}
function updateFireHud(){
  const el = $('fire-hud'); if(!el) return;
  if(!fire.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = fire.target;
  const spraying = fire.isSpraying({ x:px, z:pz, speed:Math.abs(tele.speed) });
  $('fr-obj').textContent = fire.state === 'respond'
    ? 'Race to the fire · Intensity ' + fire.intensity + '%'
    : spraying ? '💦 Spraying — keep the hose on it · ' + fire.intensity + '%'
    : 'Park close and stop to spray · Intensity ' + fire.intensity + '%';
  const tl = fire.timeLeft;
  $('fr-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
  $('fr-time').classList.toggle('low', tl < 10);
  const info = $('fr-info');
  if(info){
    const bits = [];
    if(fire.intensity >= 75) bits.push('🔥 ABOUT TO BE LOST');
    if(fire.surge > 1) bits.push('Surge ×' + fire.surge);
    if(fire.calls > 0) bits.push(fire.calls + ' calls · ' + fire.out + ' out · $' + fire.earned.toLocaleString());
    if(fire.ratingCount > 0) bits.push('★ ' + fire.ratingAvg.toFixed(1) + ' (' + fire.ratingCount + ' calls)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('fr-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('fr-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('fr-arrow').classList.add('hidden'); $('fr-dist').textContent = ''; }
}

// ---------------- police patrol: beacon + suspect car + HUD (logic lives in policejob.js) ----------------
// The beacon is blue for a pursuit — an emergency, not a fare — and it
// rides the suspect, so it moves with the chase. The suspect is a real
// car in the world (a cheap getaway ride in a dark colour, built by the
// same builder as every other car), and it flees along the roads until
// its nerve breaks or you PIT it to a stop.
function setPoliceBeacon(p){
  if(!p){ if(policeBeacon) policeBeacon.visible = false; return; }
  if(!policeBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0x3b82f6, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0x3b82f6, transparent:true, opacity:0.25, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    policeBeacon = new THREE.Group();
    policeBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    policeBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(policeBeacon);
  }
  policeBeacon.visible = true; policeBeacon.position.set(p.x, 0, p.z);
}
// The suspect car: built fresh per call from the ride dispatch picked,
// repositioned every frame by updateSuspectCar. The old one is dropped
// from the scene when the next call starts.
function setSuspectCar(p, car){
  if(!scene) return;
  if(suspectCar){ scene.remove(suspectCar); suspectCar = null; }
  suspectCar = buildCar(car.id, car.color);
  scene.add(suspectCar);
  suspectCar.position.set(p.x, 0, p.z);
  suspectCar.visible = true;
}
function hideSuspectCar(){
  if(suspectCar) suspectCar.visible = false;
  if(policeBeacon) policeBeacon.visible = false;
}
// Every frame while a call is live: the suspect car tracks the flee AI
// (position, heading, wheel spin), and the beacon rides along with it.
function updateSuspectCar(dt){
  if(!suspectCar) return;
  const s = policeJob.suspect;
  if(!s || !policeJob.active){ suspectCar.visible = false; if(policeBeacon) policeBeacon.visible = false; return; }
  suspectCar.visible = true;
  suspectCar.position.set(s.x, 0, s.z);
  suspectCar.rotation.y = s.heading;
  if(policeBeacon){ policeBeacon.visible = true; policeBeacon.position.set(s.x, 0, s.z); }
  const wheels = suspectCar.userData.wheels;
  if(wheels){ const spin = (s.speed || 0) * dt * 2.6; for(const w of wheels) w.rotation.x += spin; }
}
function updatePoliceHud(){
  const el = $('police-hud'); if(!el) return;
  if(!policeJob.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = policeJob.target;
  const pressuring = policeJob.isPressuring({ x:px, z:pz, speed:Math.abs(tele.speed) });
  $('pc-obj').textContent = policeJob.state === 'respond'
    ? 'Close on the suspect'
    : pressuring ? '🚔 On their tail — keep the pressure on · ' + policeJob.progress + '%'
    : 'Stay on them · ' + policeJob.progress + '% stopped';
  const tl = policeJob.timeLeft;
  $('pc-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
  $('pc-time').classList.toggle('low', tl < 10);
  const info = $('pc-info');
  if(info){
    const bits = [];
    if(tg && Math.hypot(tg.x - px, tg.z - pz) > 100) bits.push('🚔 LOSING THEM');
    if(policeJob.shunts > 0) bits.push(policeJob.shunts + (policeJob.shunts === 1 ? ' shunt' : ' shunts'));
    if(policeJob.surge > 1) bits.push('Surge ×' + policeJob.surge);
    if(policeJob.calls > 0) bits.push(policeJob.calls + ' calls · ' + policeJob.arrests + ' arrests · $' + policeJob.earned.toLocaleString());
    if(policeJob.ratingCount > 0) bits.push('★ ' + policeJob.ratingAvg.toFixed(1) + ' (' + policeJob.ratingCount + ' calls)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('pc-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('pc-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('pc-arrow').classList.add('hidden'); $('pc-dist').textContent = ''; }
}

// ---------------- garbage routes: beacon + HUD + curb bins (logic lives in garbage.js) ----------------
// The beacon is green for a bin stop — never a fare, a delivery or a
// pursuit — so the jobs never read as each other on the street. The bins
// waiting at the next stop are boxes on the curb, not just a marker: up
// to four of them, one per bin still waiting, shrinking as the crew loads
// them into the hopper. On a depot run the beacon swings to the transfer
// station and the bins hide.
function setGarbageBeacon(p){
  if(!p){ if(garbageBeacon) garbageBeacon.visible = false; return; }
  if(!garbageBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0x22c55e, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0x22c55e, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    garbageBeacon = new THREE.Group();
    garbageBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    garbageBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(garbageBeacon);
  }
  garbageBeacon.visible = true; garbageBeacon.position.set(p.x, 0, p.z);
}
function setGarbageBins(p, count){
  if(!scene || !p) return;
  const binMat = new THREE.MeshStandardMaterial({ color:0x1f3d2b, roughness:0.85 });
  const lidMat = new THREE.MeshStandardMaterial({ color:0x2d6a4f, roughness:0.7 });
  const n = Math.min(4, Math.max(0, count | 0));
  for(let i = 0; i < 4; i++){
    if(i >= n){ if(garbageBins[i]) garbageBins[i].visible = false; continue; }
    if(!garbageBins[i]){
      const g = new THREE.Group();
      const body = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.7), binMat);
      body.position.y = 0.45; body.castShadow = true;
      const lid = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.1, 0.74), lidMat);
      lid.position.y = 0.95;
      g.add(body); g.add(lid);
      garbageBins[i] = g; scene.add(g);
    }
    const a = i * 1.9 + 0.4, r = 1.8;
    garbageBins[i].position.set(p.x + Math.cos(a) * r, 0, p.z + Math.sin(a) * r);
    garbageBins[i].visible = true;
  }
}
function hideGarbageBins(){ for(const b of garbageBins) if(b) b.visible = false; }
function updateGarbageHud(){
  const el = $('garbage-hud'); if(!el) return;
  if(!garbage.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = garbage.target;
  const stop = garbage.nextStop;
  if(garbage.phase === 'depot'){
    $('gb-obj').textContent = 'To the depot — empty the hopper · ' + garbage.hopper + ' aboard';
  }else{
    $('gb-obj').textContent = 'Stop ' + (garbage.stopIndex + 1) + '/' + garbage.stopCount
      + (stop ? ' · ' + stop.bins + ' bins waiting' : '')
      + (garbage.hopper ? ' · ' + garbage.hopper + ' in the hopper' : '');
  }
  if(garbage.phase === 'depot'){
    $('gb-time').textContent = '⏱ PAUSED';
    $('gb-time').classList.remove('low');
  }else{
    const tl = garbage.timeLeft;
    $('gb-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
    $('gb-time').classList.toggle('low', tl < 10);
  }
  const info = $('gb-info');
  if(info){
    const bits = [];
    if(garbage.loadValue > 0) bits.push('💵 $' + garbage.loadValue.toLocaleString() + ' in the hopper');
    if(garbage.banked > 0) bits.push('🏦 $' + garbage.banked.toLocaleString() + ' banked');
    if(garbage.isLoading({ x:px, z:pz, speed:Math.abs(tele.speed) })) bits.push('🗑️ Loading…');
    if(garbage.surge > 1) bits.push('Surge ×' + garbage.surge);
    if(garbage.routes > 0) bits.push(garbage.routes + ' routes · ' + garbage.bins + ' bins · $' + garbage.earned.toLocaleString());
    if(garbage.ratingCount > 0) bits.push('★ ' + garbage.ratingAvg.toFixed(1) + ' (' + garbage.ratingCount + ' routes)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('gb-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('gb-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('gb-arrow').classList.add('hidden'); $('gb-dist').textContent = ''; }
}

// ---------------- tow calls: beacon + stranded car + HUD (logic lives in towjob.js) ----------------
// The beacon is amber for a breakdown — an emergency, not a fare — and it
// sits on the stranded car until the winch hooks it up, then swings to
// the repair shop. The stranded car is a real car in the world (a cheap
// ride in a plain colour, built by the same builder as every other car),
// sitting where it died until the truck hauls it away, then trailing
// behind the truck on the hook.
function setTowBeacon(p){
  if(!p){ if(towBeacon) towBeacon.visible = false; return; }
  if(!towBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xf59e0b, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xf59e0b, transparent:true, opacity:0.25, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    towBeacon = new THREE.Group();
    towBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    towBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(towBeacon);
  }
  towBeacon.visible = true; towBeacon.position.set(p.x, 0, p.z);
}
// The stranded car: built fresh per call from the ride dispatch picked,
// repositioned every frame by updateTowedCar. The old one is dropped
// from the scene when the next call starts.
function setTowedCar(p, car){
  if(!scene) return;
  if(towedCar){ scene.remove(towedCar); towedCar = null; }
  towedCar = buildCar(car.id, car.color);
  scene.add(towedCar);
  towedCar.position.set(p.x, 0, p.z);
  towedCar.visible = true;
}
function hideTowedCar(){
  if(towedCar) towedCar.visible = false;
  if(towBeacon) towBeacon.visible = false;
}
// Every frame while a call is live: the stranded car tracks the tow job
// (position, heading, wheel spin) — sitting where it died, then trailing
// the truck on the hook — and the beacon rides along with it.
function updateTowedCar(dt){
  if(!towedCar) return;
  const t = tow.towed;
  if(!t || !tow.active){ towedCar.visible = false; if(towBeacon) towBeacon.visible = false; return; }
  towedCar.visible = true;
  towedCar.position.set(t.x, 0, t.z);
  towedCar.rotation.y = t.heading;
  if(towBeacon){ towBeacon.visible = true; towBeacon.position.set(tow.target.x, 0, tow.target.z); }
  const wheels = towedCar.userData.wheels;
  if(wheels){ const spin = (t.speed || 0) * dt * 2.6; for(const w of wheels) w.rotation.x += spin; }
}
function updateTowHud(){
  const el = $('tow-hud'); if(!el) return;
  if(!tow.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = tow.target;
  if(tow.state === 'respond'){
    $('tw-obj').textContent = 'Race to the breakdown';
  }else if(tow.state === 'hook'){
    $('tw-obj').textContent = tow.hookFrac > 0 ? '🪝 Winching it on… ' + Math.round(tow.hookFrac * 100) + '%' : 'Hold still — winch the car on';
  }else{
    $('tw-obj').textContent = 'Haul it to the shop · ' + tow.condition + '%';
  }
  if(tow.state === 'hook'){
    $('tw-time').textContent = '⏱ WINCH';
    $('tw-time').classList.remove('low');
  }else{
    const tl = tow.timeLeft;
    $('tw-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
    $('tw-time').classList.toggle('low', tl < 10);
  }
  const info = $('tw-info');
  if(info){
    const bits = [];
    if(tow.state === 'tow' && tow.strain > 0) bits.push('🪝 Hitch strain ' + tow.strain + '%');
    if(tow.isHooking({ x:px, z:pz, speed:Math.abs(tele.speed) })) bits.push('🪝 Winching…');
    if(tow.surge > 1) bits.push('Surge ×' + tow.surge);
    if(tow.calls > 0) bits.push(tow.calls + ' calls · ' + tow.tows + ' tows · $' + tow.earned.toLocaleString());
    if(tow.ratingCount > 0) bits.push('★ ' + tow.ratingAvg.toFixed(1) + ' (' + tow.ratingCount + ' calls)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('tw-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('tw-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('tw-arrow').classList.add('hidden'); $('tw-dist').textContent = ''; }
}

// ---------------- snow plow routes: beacon + HUD + snow drifts (logic lives in snowplow.js) ----------------
// The beacon is ice blue for a snowed-in street — never a fare, a
// delivery or a pursuit — so the jobs never read as each other on the
// street. The drifts waiting at the next stop are white mounds on the
// road, not just a marker: up to four of them, one per drift still
// waiting, shrinking as the blade clears them. On a depot run the
// beacon swings to the salt shed and the drifts hide.
function setPlowBeacon(p){
  if(!p){ if(plowBeacon) plowBeacon.visible = false; return; }
  if(!plowBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0x7dd3fc, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0x7dd3fc, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    plowBeacon = new THREE.Group();
    plowBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    plowBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(plowBeacon);
  }
  plowBeacon.visible = true; plowBeacon.position.set(p.x, 0, p.z);
}
function setPlowDrifts(stop){
  if(!scene || !stop) return;
  const driftMat = new THREE.MeshStandardMaterial({ color:0xe8f1f8, roughness:0.95 });
  const n = Math.min(4, stop.drifts.length);
  for(let i = 0; i < 4; i++){
    if(i >= n){ if(plowDrifts[i]) plowDrifts[i].visible = false; continue; }
    if(!plowDrifts[i]){
      const m = new THREE.Mesh(new THREE.SphereGeometry(1.3, 12, 8), driftMat);
      m.scale.y = 0.35; m.castShadow = true;
      plowDrifts[i] = m; scene.add(m);
    }
    const d = stop.drifts[i];
    plowDrifts[i].position.set(d.x, 0.05, d.z);
    plowDrifts[i].visible = !d.cleared;
  }
}
function hidePlowDrifts(){ for(const d of plowDrifts) if(d) d.visible = false; }
function updatePlowHud(){
  const el = $('plow-hud'); if(!el) return;
  if(!plow.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = plow.target;
  const stop = plow.nextStop;
  if(plow.phase === 'depot'){
    $('pw-obj').textContent = 'To the depot — refill the salt · ' + plow.salt + ' left';
  }else{
    $('pw-obj').textContent = 'Stop ' + (plow.stopIndex + 1) + '/' + plow.stopCount
      + (stop ? ' · ' + plow.driftsLeft + ' drifts waiting' : '')
      + ' · 🧂 ' + plow.salt + '/' + plow.saltCapacity + ' salt';
  }
  if(plow.phase === 'depot'){
    $('pw-time').textContent = '⏱ PAUSED';
    $('pw-time').classList.remove('low');
  }else{
    const tl = plow.timeLeft;
    $('pw-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
    $('pw-time').classList.toggle('low', tl < 10);
  }
  const info = $('pw-info');
  if(info){
    const bits = [];
    if(plow.loadValue > 0) bits.push('💵 $' + plow.loadValue.toLocaleString() + ' unbanked');
    if(plow.banked > 0) bits.push('🏦 $' + plow.banked.toLocaleString() + ' banked');
    if(plow.isPlowing({ x:px, z:pz, speed:Math.abs(tele.speed) })) bits.push('❄️ Plowing…');
    else if(plow.phase === 'collect' && plow.nextDrift) bits.push('Plow through at 2–15 m/s');
    if(plow.surge > 1) bits.push('Surge ×' + plow.surge);
    if(plow.routes > 0) bits.push(plow.routes + ' routes · ' + plow.drifts + ' drifts · $' + plow.earned.toLocaleString());
    if(plow.ratingCount > 0) bits.push('★ ' + plow.ratingAvg.toFixed(1) + ' (' + plow.ratingCount + ' routes)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('pw-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('pw-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('pw-arrow').classList.add('hidden'); $('pw-dist').textContent = ''; }
}

// ---------------- street sweeper routes: beacon + HUD + leaf piles (logic lives in streetsweeper.js) ----------------
// The beacon is amber for a dirty street — never a fare, a
// delivery or a pursuit — so the jobs never read as each other on the
// street. The leaf piles waiting at the next stop are brown mounds on the
// road, not just a marker: up to four of them, one per pile still
// waiting, shrinking as the brushes sweep them. On a depot run the
// beacon swings to the yard and the piles hide.
function setSweeperBeacon(p){
  if(!p){ if(sweeperBeacon) sweeperBeacon.visible = false; return; }
  if(!sweeperBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xeab308, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xeab308, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    sweeperBeacon = new THREE.Group();
    sweeperBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    sweeperBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(sweeperBeacon);
  }
  sweeperBeacon.visible = true; sweeperBeacon.position.set(p.x, 0, p.z);
}
function setSweeperPiles(stop){
  if(!scene || !stop) return;
  const pileMat = new THREE.MeshStandardMaterial({ color:0x8a6d3b, roughness:1 });
  const n = Math.min(4, stop.piles.length);
  for(let i = 0; i < 4; i++){
    if(i >= n){ if(sweeperPiles[i]) sweeperPiles[i].visible = false; continue; }
    if(!sweeperPiles[i]){
      const m = new THREE.Mesh(new THREE.SphereGeometry(1.3, 12, 8), pileMat);
      m.scale.y = 0.35; m.castShadow = true;
      sweeperPiles[i] = m; scene.add(m);
    }
    const p = stop.piles[i];
    sweeperPiles[i].position.set(p.x, 0.05, p.z);
    sweeperPiles[i].visible = !p.swept;
  }
}
function hideSweeperPiles(){ for(const p of sweeperPiles) if(p) p.visible = false; }
function updateSweeperHud(){
  const el = $('sweeper-hud'); if(!el) return;
  if(!sweeper.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = sweeper.target;
  const stop = sweeper.nextStop;
  if(sweeper.phase === 'depot'){
    $('sw-obj').textContent = 'To the depot — empty the hopper · ' + sweeper.hopper + ' aboard';
  }else{
    $('sw-obj').textContent = 'Stop ' + (sweeper.stopIndex + 1) + '/' + sweeper.stopCount
      + (stop ? ' · ' + sweeper.pilesLeft + ' piles waiting' : '')
      + ' · 🧹 ' + sweeper.hopper + '/' + sweeper.hopperCapacity + ' hopper';
  }
  if(sweeper.phase === 'depot'){
    $('sw-time').textContent = '⏱ PAUSED';
    $('sw-time').classList.remove('low');
  }else{
    const tl = sweeper.timeLeft;
    $('sw-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
    $('sw-time').classList.toggle('low', tl < 10);
  }
  const info = $('sw-info');
  if(info){
    const bits = [];
    if(sweeper.loadValue > 0) bits.push('💵 $' + sweeper.loadValue.toLocaleString() + ' unbanked');
    if(sweeper.banked > 0) bits.push('🏦 $' + sweeper.banked.toLocaleString() + ' banked');
    if(sweeper.isSweeping({ x:px, z:pz, speed:Math.abs(tele.speed) })) bits.push('🧹 Sweeping…');
    else if(sweeper.phase === 'collect' && sweeper.nextPile) bits.push('Sweep through at 1.5–10 m/s');
    if(sweeper.surge > 1) bits.push('Surge ×' + sweeper.surge);
    if(sweeper.routes > 0) bits.push(sweeper.routes + ' routes · ' + sweeper.piles + ' piles · $' + sweeper.earned.toLocaleString());
    if(sweeper.ratingCount > 0) bits.push('★ ' + sweeper.ratingAvg.toFixed(1) + ' (' + sweeper.ratingCount + ' routes)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('sw-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('sw-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('sw-arrow').classList.add('hidden'); $('sw-dist').textContent = ''; }
}

// ---------------- cement mixer routes: beacon + HUD + pour cones (logic lives in mixer.js) ----------------
// The beacon is blue for a pour site — never a fare, a delivery or a
// pursuit — so the jobs never read as each other on the street. The
// pour site is marked by orange traffic cones on the road, one per load
// still waiting, disappearing as the chute pours them in. On a plant
// run the beacon swings to the batch plant and the cones hide.
function setMixerBeacon(p){
  if(!p){ if(mixerBeacon) mixerBeacon.visible = false; return; }
  if(!mixerBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0x60a5fa, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0x60a5fa, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    mixerBeacon = new THREE.Group();
    mixerBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    mixerBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(mixerBeacon);
  }
  mixerBeacon.visible = true; mixerBeacon.position.set(p.x, 0, p.z);
}
function setMixerCones(stop){
  if(!scene || !stop) return;
  const coneMat = new THREE.MeshStandardMaterial({ color:0xf97316, roughness:0.7 });
  const n = Math.min(2, stop.loads - stop.poured);
  for(let i = 0; i < 2; i++){
    if(i >= n){ if(mixerCones[i]) mixerCones[i].visible = false; continue; }
    if(!mixerCones[i]){
      const m = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.1, 10), coneMat);
      m.castShadow = true;
      mixerCones[i] = m; scene.add(m);
    }
    // Cones flank the pour point so the mixer pulls up between them.
    const off = i === 0 ? -3 : 3;
    mixerCones[i].position.set(stop.x + off, 0.55, stop.z);
    mixerCones[i].visible = true;
  }
}
function hideMixerCones(){ for(const c of mixerCones) if(c) c.visible = false; }
function updateMixerHud(){
  const el = $('mixer-hud'); if(!el) return;
  if(!mixer.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = mixer.target;
  const stop = mixer.nextStop;
  if(mixer.phase === 'plant'){
    $('mx-obj').textContent = 'To the batch plant — refill the drum · ' + mixer.drum + ' aboard';
  }else{
    $('mx-obj').textContent = 'Stop ' + (mixer.stopIndex + 1) + '/' + mixer.stopCount
      + (stop ? ' · ' + mixer.loadsLeft + ' loads waiting' : '')
      + ' · 🏗️ ' + mixer.drum + '/' + mixer.drumCapacity + ' drum';
  }
  if(mixer.phase === 'plant'){
    $('mx-time').textContent = '⏱ PAUSED';
    $('mx-time').classList.remove('low');
  }else{
    const tl = mixer.timeLeft;
    $('mx-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
    $('mx-time').classList.toggle('low', tl < 10);
  }
  const info = $('mx-info');
  if(info){
    const bits = [];
    if(mixer.loadValue > 0) bits.push('💵 $' + mixer.loadValue.toLocaleString() + ' unbanked');
    if(mixer.banked > 0) bits.push('🏦 $' + mixer.banked.toLocaleString() + ' banked');
    if(mixer.isPouring({ x:px, z:pz, speed:Math.abs(tele.speed) })) bits.push('🏗️ Pouring…');
    else if(mixer.phase === 'pour' && mixer.nextStop) bits.push('Stop at the site to pour');
    if(mixer.surge > 1) bits.push('Surge ×' + mixer.surge);
    if(mixer.routes > 0) bits.push(mixer.routes + ' routes · ' + mixer.loads + ' loads · $' + mixer.earned.toLocaleString());
    if(mixer.ratingCount > 0) bits.push('★ ' + mixer.ratingAvg.toFixed(1) + ' (' + mixer.ratingCount + ' routes)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('mx-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('mx-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('mx-arrow').classList.add('hidden'); $('mx-dist').textContent = ''; }
}

// ---------------- mail routes: beacon + HUD + parcel boxes (logic lives in mail.js) ----------------
// The beacon is red for a delivery stop — never a fare, a pour or a
// pursuit — so the jobs never read as each other on the street. The
// stop is marked by red parcel boxes on the road, one per parcel still
// waiting, disappearing as the carrier drops them in. On an office run
// the beacon swings to the post office and the boxes hide. A priority
// stop gets a gold box: registered mail, double pay.
function setMailBeacon(p){
  if(!p){ if(mailBeacon) mailBeacon.visible = false; return; }
  if(!mailBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xf87171, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xf87171, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    mailBeacon = new THREE.Group();
    mailBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    mailBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(mailBeacon);
  }
  mailBeacon.visible = true; mailBeacon.position.set(p.x, 0, p.z);
}
function setMailBoxes(stop){
  if(!scene || !stop) return;
  const boxMat = new THREE.MeshStandardMaterial({ color:0xdc2626, roughness:0.7 });
  const priMat = new THREE.MeshStandardMaterial({ color:0xf59e0b, roughness:0.5, metalness:0.3 });
  const n = Math.min(2, stop.parcels - stop.dropped);
  for(let i = 0; i < 2; i++){
    if(i >= n){ if(mailBoxes[i]) mailBoxes[i].visible = false; continue; }
    if(!mailBoxes[i]){
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.9), boxMat);
      m.castShadow = true;
      mailBoxes[i] = m; scene.add(m);
    }
    // Boxes flank the stop so the truck pulls up between them; a priority
    // stop gets a gold box instead of a red one.
    mailBoxes[i].material = stop.priority ? priMat : boxMat;
    const off = i === 0 ? -3 : 3;
    mailBoxes[i].position.set(stop.x + off, 0.35, stop.z);
    mailBoxes[i].visible = true;
  }
}
function hideMailBoxes(){ for(const b of mailBoxes) if(b) b.visible = false; }
function updateMailHud(){
  const el = $('mail-hud'); if(!el) return;
  if(!mail.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = mail.target;
  const stop = mail.nextStop;
  if(mail.phase === 'office'){
    $('ml-obj').textContent = 'To the post office — restock the satchel · ' + mail.satchel + ' aboard';
  }else{
    $('ml-obj').textContent = 'Stop ' + (mail.stopIndex + 1) + '/' + mail.stopCount
      + (stop ? ' · ' + mail.parcelsLeft + ' parcels waiting' : '')
      + (mail.nextPriority ? ' · ⭐ PRIORITY ×2' : '')
      + ' · 📬 ' + mail.satchel + '/' + mail.satchelCapacity + ' satchel';
  }
  if(mail.phase === 'office'){
    $('ml-time').textContent = '⏱ PAUSED';
    $('ml-time').classList.remove('low');
  }else{
    const tl = mail.timeLeft;
    $('ml-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
    $('ml-time').classList.toggle('low', tl < 10);
  }
  const info = $('ml-info');
  if(info){
    const bits = [];
    if(mail.loadValue > 0) bits.push('💵 $' + mail.loadValue.toLocaleString() + ' unbanked');
    if(mail.banked > 0) bits.push('🏦 $' + mail.banked.toLocaleString() + ' banked');
    if(mail.isDelivering({ x:px, z:pz, speed:Math.abs(tele.speed) })) bits.push('📬 Delivering…');
    else if(mail.phase === 'deliver' && mail.nextStop) bits.push('Stop at the address to deliver');
    if(mail.surge > 1) bits.push('Surge ×' + mail.surge);
    if(mail.routes > 0) bits.push(mail.routes + ' routes · ' + mail.parcels + ' parcels · $' + mail.earned.toLocaleString());
    if(mail.ratingCount > 0) bits.push('★ ' + mail.ratingAvg.toFixed(1) + ' (' + mail.ratingCount + ' routes)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('ml-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('ml-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('ml-arrow').classList.add('hidden'); $('ml-dist').textContent = ''; }
}

// ---------------- ice cream routes: beacon + HUD + cone markers (logic lives in icecream.js) ----------------
// The beacon is pink for a serving stop — never a fare, a pour or a
// delivery — so the jobs never read as each other on the street. The
// stop is marked by pink ice cream cones on the road, one per cone
// still waiting, disappearing as the server hands them over. On a
// depot run the beacon swings to the depot and the cones hide. A
// birthday party stop gets a gold cone: double pay.
function setIceCreamBeacon(p){
  if(!p){ if(icecreamBeacon) icecreamBeacon.visible = false; return; }
  if(!icecreamBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xf472b6, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xf472b6, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    icecreamBeacon = new THREE.Group();
    icecreamBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    icecreamBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(icecreamBeacon);
  }
  icecreamBeacon.visible = true; icecreamBeacon.position.set(p.x, 0, p.z);
}
function setIceCreamCones(stop){
  if(!scene || !stop) return;
  const coneMat = new THREE.MeshStandardMaterial({ color:0xf472b6, roughness:0.6 });
  const priMat = new THREE.MeshStandardMaterial({ color:0xf59e0b, roughness:0.5, metalness:0.3 });
  const n = Math.min(3, stop.cones - stop.served);
  for(let i = 0; i < 3; i++){
    if(i >= n){ if(icecreamCones[i]) icecreamCones[i].visible = false; continue; }
    if(!icecreamCones[i]){
      const m = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.1, 16), coneMat);
      m.castShadow = true;
      icecreamCones[i] = m; scene.add(m);
    }
    // Cones line up beside the stop so the truck pulls up alongside
    // them; a party stop gets gold cones instead of pink ones.
    icecreamCones[i].material = stop.party ? priMat : coneMat;
    const off = (i - 1) * 2.5;
    icecreamCones[i].position.set(stop.x + off, 0.55, stop.z);
    icecreamCones[i].visible = true;
  }
}
function hideIceCreamCones(){ for(const b of icecreamCones) if(b) b.visible = false; }
function updateIceCreamHud(){
  const el = $('icecream-hud'); if(!el) return;
  if(!icecream.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = icecream.target;
  const stop = icecream.nextStop;
  if(icecream.phase === 'depot'){
    $('ic-obj').textContent = 'To the depot — restock the freezer · ' + icecream.freezer + ' aboard';
  }else{
    $('ic-obj').textContent = 'Stop ' + (icecream.stopIndex + 1) + '/' + icecream.stopCount
      + (stop ? ' · ' + icecream.conesLeft + ' cones waiting' : '')
      + (icecream.nextParty ? ' · 🎂 PARTY ×2' : '')
      + ' · 🍦 ' + icecream.freezer + '/' + icecream.freezerCapacity + ' freezer';
  }
  if(icecream.phase === 'depot'){
    $('ic-time').textContent = '⏱ PAUSED';
    $('ic-time').classList.remove('low');
  }else{
    const tl = icecream.timeLeft;
    $('ic-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
    $('ic-time').classList.toggle('low', tl < 10);
  }
  const info = $('ic-info');
  if(info){
    const bits = [];
    if(icecream.loadValue > 0) bits.push('💵 $' + icecream.loadValue.toLocaleString() + ' unbanked');
    if(icecream.banked > 0) bits.push('🏦 $' + icecream.banked.toLocaleString() + ' banked');
    if(icecream.isServing({ x:px, z:pz, speed:Math.abs(tele.speed) })) bits.push('🍦 Serving…');
    else if(icecream.phase === 'serve' && icecream.nextStop) bits.push('Stop at the corner to serve');
    if(icecream.surge > 1) bits.push('Surge ×' + icecream.surge);
    if(icecream.routes > 0) bits.push(icecream.routes + ' routes · ' + icecream.cones + ' cones · $' + icecream.earned.toLocaleString());
    if(icecream.ratingCount > 0) bits.push('★ ' + icecream.ratingAvg.toFixed(1) + ' (' + icecream.ratingCount + ' routes)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('ic-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('ic-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('ic-arrow').classList.add('hidden'); $('ic-dist').textContent = ''; }
}

// ---------------- school bus routes: beacon + HUD + kid markers (logic lives in schoolbus.js) ----------------
// The beacon is yellow for a pickup stop — never a fare, a pour or a
// delivery — so the jobs never read as each other on the street. The
// stop is marked by kids waiting on the road, one per kid still
// waiting, disappearing as they climb aboard. On a school run the
// beacon swings to the school and the kids hide. A late-bell stop
// gets red-shirted kids: double pay, tighter par.
function setSchoolBusBeacon(p){
  if(!p){ if(schoolbusBeacon) schoolbusBeacon.visible = false; return; }
  if(!schoolbusBeacon){
    const ringMat = new THREE.MeshBasicMaterial({ color:0xfacc15, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
    const beamMat = new THREE.MeshBasicMaterial({ color:0xfacc15, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    schoolbusBeacon = new THREE.Group();
    schoolbusBeacon.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
    schoolbusBeacon.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
    scene.add(schoolbusBeacon);
  }
  schoolbusBeacon.visible = true; schoolbusBeacon.position.set(p.x, 0, p.z);
}
function makeKidMarker(shirtColor){
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.9, 12),
    new THREE.MeshStandardMaterial({ color:shirtColor, roughness:0.7 }));
  body.position.y = 0.45; body.castShadow = true;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10),
    new THREE.MeshStandardMaterial({ color:0xe8b98a, roughness:0.6 }));
  head.position.y = 1.15; head.castShadow = true;
  g.add(body); g.add(head);
  return g;
}
function setSchoolBusKids(stop){
  if(!scene || !stop) return;
  const n = Math.min(4, stop.kids - stop.boarded);
  for(let i = 0; i < 4; i++){
    if(i >= n){ if(schoolbusKids[i]) schoolbusKids[i].visible = false; continue; }
    if(!schoolbusKids[i]){
      schoolbusKids[i] = makeKidMarker(0xfacc15); scene.add(schoolbusKids[i]);
    }
    // Kids line up beside the stop so the bus pulls up alongside
    // them; a late-bell stop gets red-shirted kids instead of yellow ones.
    const shirt = stop.bell ? 0xef4444 : 0xfacc15;
    schoolbusKids[i].children[0].material = new THREE.MeshStandardMaterial({ color:shirt, roughness:0.7 });
    const off = (i - 1.5) * 2;
    schoolbusKids[i].position.set(stop.x + off, 0, stop.z);
    schoolbusKids[i].visible = true;
  }
}
function hideSchoolBusKids(){ for(const b of schoolbusKids) if(b) b.visible = false; }
function updateSchoolBusHud(){
  const el = $('schoolbus-hud'); if(!el) return;
  if(!schoolbus.active){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  const px = physics.pos.x, pz = physics.pos.z, h = physics.heading, tg = schoolbus.target;
  const stop = schoolbus.nextStop;
  if(schoolbus.phase === 'school'){
    $('sb-obj').textContent = 'To the school — drop the kids off · ' + schoolbus.aboard + ' aboard';
  }else{
    $('sb-obj').textContent = 'Stop ' + (schoolbus.stopIndex + 1) + '/' + schoolbus.stopCount
      + (stop ? ' · ' + schoolbus.kidsLeft + ' kids waiting' : '')
      + (schoolbus.nextBell ? ' · 🔔 LATE BELL ×2' : '')
      + ' · 🚌 ' + schoolbus.aboard + '/' + schoolbus.seatsCapacity + ' seats';
  }
  if(schoolbus.phase === 'school'){
    $('sb-time').textContent = '⏱ PAUSED';
    $('sb-time').classList.remove('low');
  }else{
    const tl = schoolbus.timeLeft;
    $('sb-time').textContent = tl >= 0 ? '⏱ ' + Math.ceil(tl) + 's' : '⏱ LATE';
    $('sb-time').classList.toggle('low', tl < 10);
  }
  const info = $('sb-info');
  if(info){
    const bits = [];
    if(schoolbus.loadValue > 0) bits.push('💵 $' + schoolbus.loadValue.toLocaleString() + ' unbanked');
    if(schoolbus.banked > 0) bits.push('🏦 $' + schoolbus.banked.toLocaleString() + ' banked');
    if(schoolbus.isBoarding({ x:px, z:pz, speed:Math.abs(tele.speed) })) bits.push('🚌 Boarding…');
    else if(schoolbus.phase === 'pickup' && schoolbus.nextStop) bits.push('Stop at the corner to pick up');
    if(schoolbus.surge > 1) bits.push('Surge ×' + schoolbus.surge);
    if(schoolbus.routes > 0) bits.push(schoolbus.routes + ' routes · ' + schoolbus.kids + ' kids · $' + schoolbus.earned.toLocaleString());
    if(schoolbus.ratingCount > 0) bits.push('★ ' + schoolbus.ratingAvg.toFixed(1) + ' (' + schoolbus.ratingCount + ' routes)');
    info.textContent = bits.join(' · ');
  }
  if(tg && !inside){
    const a = Math.atan2(-(tg.x - px), -(tg.z - pz));
    const rel = Math.atan2(Math.sin(a - h), Math.cos(a - h));
    const arrow = $('sb-arrow');
    arrow.style.transform = 'rotate(' + (-rel).toFixed(3) + 'rad)';
    arrow.classList.remove('hidden');
    $('sb-dist').textContent = Math.round(Math.hypot(tg.x - px, tg.z - pz)) + ' m';
  }else{ $('sb-arrow').classList.add('hidden'); $('sb-dist').textContent = ''; }
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
// ---------------- fuel ----------------
// Same shape as syncCarHP: the bar hides while on foot.
function syncFuel(){
  const f=$('fuel-fill'); if(!f) return;
  const l=fuelTank?fuelTank.level:100;
  f.style.width=Math.max(0,l)+'%';
  f.style.background = l>20 ? '#4ade80' : l>0 ? '#fbbf24' : '#ef4444';
  $('fuel-hud').classList.toggle('hidden', !!onFoot);
}
function damageCar(impact){
  if(!carDamage || onFoot || dead || state!=='freeroam') return 0;
  const before=carDamage.hp;
  const d=carDamage.hit(impact);
  if(d<=0) return 0;
  if(courier && courier.noteImpact()) toast('🛵 Food spoiled — drive smoother!', 1800);
  if(audio.crash) audio.crash(Math.min(1, 0.25 + d / 30));
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
  if(onFoot && person){ startDeath(person, Math.sin(foot.heading), Math.cos(foot.heading)); }
  if(blood){ const px=onFoot?foot.pos.x:physics.pos.x, pz=onFoot?foot.pos.z:physics.pos.z; blood.pool(px, pz, 2.6); }
  if(typeof onPlayerDied==='function') onPlayerDied();
}
function respawn(){
  dead=false; hp=100; syncHP();
  $('wasted').classList.add('hidden');
  if(person){ resetPose(person); }
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
// ---------------- Paint the Town Red ----------------
function syncPaintHud(){
  const on=!!(paintTown && paintTown.active), h=$('paint-hud'), b=$('paint-btn');
  if(b) b.classList.toggle('on', on);
  if(!h) return;
  h.classList.toggle('hidden', !on);
  if(on){
    // slide down out of the way of the mission / taxi cards (same top-centre slot)
    const mis=!$('mission-hud').classList.contains('hidden'), cab=!$('taxi-hud').classList.contains('hidden');
    h.style.marginTop=(cab?190:mis?100:0)+'px';
    const pct=paintTown.progress*100;
    $('paint-pct').textContent=(pct>=99.95?100:pct<10?pct.toFixed(1):Math.floor(pct))+'%';
    $('paint-fill').style.width=pct.toFixed(1)+'%';
    $('paint-bld').textContent=paintTown.buildingCount+'/'+paintTown.buildings.length;
  }
}
function togglePaint(){
  if(!paintTown) return;
  paintTown.active=!paintTown.active;
  save.paintTown=Object.assign(paintTown.serialize(), { on:paintTown.active }); saveSave(save);
  audio.beep(paintTown.active?880:440, 0.07);
  if(paintTown.active) toast(customMap ? '🖌️ Paint mode is for the city — head back to Winnipeg' : '🖌️ PAINT THE TOWN RED — your wheels lay red paint and every building you brush past turns red. Cash for all of it!', 3600);
  else toast('🖌️ Paint off — your work stays red', 1800);
  syncPaintHud();
}
function washTown(){
  if(!paintTown) return;
  paintFX.clear(); paintTown.reset();
  save.paintTown=Object.assign(paintTown.serialize(), { on:paintTown.active }); saveSave(save);
  syncPaintHud(); toast('🧽 Town washed clean', 1800);
}
function updatePaint(dt, x, z, heading, speed, inCar){
  if(!paintTown) return;
  const live=paintTown.active && !customMap && !inside && mode!=='tdm';
  const ev=live ? paintTown.update(x, z, !inCar) : null;
  paintFX.update(dt, x, z, heading, speed, inCar, ev, live);
  paintBuildToastT=Math.max(0, paintBuildToastT-dt);
  if(ev && (ev.cells || ev.buildings.length || ev.milestone)){
    paintDirty=true; paintPay+=ev.pay;
    if(ev.buildings.length){
      paintBuildRun+=ev.buildings.length;
      audio.beep(980+Math.random()*200, 0.05);
      if(!paintBuildToastT){ toast('🎨 '+(paintBuildRun>1?paintBuildRun+' buildings':'Building')+' painted red', 1200); paintBuildToastT=1.2; paintBuildRun=0; }
    }
    if(ev.milestone){ toast(ev.milestone.msg+' · +$'+ev.milestone.pay.toLocaleString(), 4200); audio.beep(1320,0.12); }
  }
  // batch the cash + save so painting doesn't hit localStorage every frame
  paintPayT+=dt; paintSaveT+=dt;
  if(paintPay>0 && paintPayT>0.75){ addCash(paintPay); paintPay=0; paintPayT=0; }
  if(paintDirty && paintSaveT>3){ save.paintTown=Object.assign(paintTown.serialize(), { on:paintTown.active }); saveSave(save); paintDirty=false; paintSaveT=0; }
  if((frameN&7)===0) syncPaintHud();
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
  updateWeatherHud();
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
  $('p-paint').textContent=paintTown&&paintTown.active?'🖌️ PAINT THE TOWN RED: ON':'🖌️ PAINT THE TOWN RED: OFF';
  $('p-wash').classList.toggle('hidden', !(paintTown && (paintTown.paintedB.size || paintTown.paintedC.size)));
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

  // rain: 700 streaks in a box around the car, falling and recycling —
  // invisible until the weather turns wet (opacity follows intensity)
  {
    const N = 700, pos = new Float32Array(N * 3);
    for(let i = 0; i < N; i++){ pos[i*3] = (Math.random()-0.5)*70; pos[i*3+1] = Math.random()*35; pos[i*3+2] = (Math.random()-0.5)*70; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    rainPts = new THREE.Points(g, new THREE.PointsMaterial({ color:0x9db8d6, size:0.35, transparent:true, opacity:0, depthWrite:false }));
    rainPts.frustumCulled = false; rainPts.visible = false;
    scene.add(rainPts);
  }

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
  const p=applySkyPreset(skyEnv, key, weather.dim);   // rain/storms dim the sun
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
  headlightBase = key==='day' ? (weather.wet ? 25 : 0) : key==='sunset' ? 30 : 70;   // headlights on in the rain, even by day
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

  // Weather rolls on its own clock while free-roaming (frozen on pause):
  // a new sky re-applies the time-of-day preset with the new dimming,
  // a storm strike flashes the sky, and the rain follows the player.
  if(state==='freeroam' && !paused){
    for(const ev of weather.update(dt)){
      if(ev.type==='weatherChanged'){ setTimeOfDay(undefined, true); updateWeatherHud(); toast(weatherToast(ev), 2600); }
      else if(ev.type==='lightning'){ stormFlash(); }
    }
    updateRain(dt);
  }
  if(lightningT > 0){
    lightningT -= dt;
    if(flashEl) flashEl.style.opacity = lightningT > 0.25 ? 0.5 : lightningT > 0.12 ? 0.12 : 0.35;
  }else if(flashEl && flashEl.style.opacity !== '0'){ flashEl.style.opacity = 0; }

  const playing = state==='freeroam' && !paused && !garageOpen && !storeOpen && !editorOpen && !pickOpen && !dead && !boardOpen;
  // a fare only lives while you are driving the cab in free roam: leaving
  // the cab, the garage, a shop or the world itself ends it (the map and
  // mission board pauses do not — a fare survives a quick look at the map).
  // Switching worlds is handled in playCustom/exitCustom, which end the
  // fare before the teleport; the cab keeps working on custom maps.
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && taxi.active){
    taxi.abandon(); setTaxiBeacon(null); hideTaxiPed(); updateTaxiHud(); toast('🚕 Fare abandoned — you left the cab', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && courier.active){
    courier.abandon(); setCourierBeacon(null); updateCourierHud(); toast('🛵 Delivery abandoned — order lost', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && bus.active){
    bus.abandon(); setBusBeacon(null); hideBusPeds(); updateBusHud(); toast('🚌 Route abandoned — farebox lost', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && garbage.active){
    garbage.abandon(); setGarbageBeacon(null); hideGarbageBins(); updateGarbageHud(); toast('🗑️ Route abandoned — hopper load lost', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && tow.active){
    tow.abandon(); setTowBeacon(null); hideTowedCar(); updateTowHud(); toast('🪝 Call abandoned — car left on the road', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && plow.active){
    plow.abandon(); setPlowBeacon(null); hidePlowDrifts(); updatePlowHud(); toast('❄️ Route abandoned — unbanked drifts lost', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && sweeper.active){
    sweeper.abandon(); setSweeperBeacon(null); hideSweeperPiles(); updateSweeperHud(); toast('🧹 Route abandoned — unbanked piles lost', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && mixer.active){
    mixer.abandon(); setMixerBeacon(null); hideMixerCones(); updateMixerHud(); toast('🏗️ Route abandoned — unbanked pours lost', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && mail.active){
    mail.abandon(); setMailBeacon(null); hideMailBoxes(); updateMailHud(); toast('📬 Route abandoned — unbanked parcels lost', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && icecream.active){
    icecream.abandon(); setIceCreamBeacon(null); hideIceCreamCones(); updateIceCreamHud(); toast('🍦 Route abandoned — unbanked cones lost', 2000);
  }
  if((state!=='freeroam' || onFoot || garageOpen || storeOpen || editorOpen || pickOpen || dead) && schoolbus.active){
    schoolbus.abandon(); setSchoolBusBeacon(null); hideSchoolBusKids(); updateSchoolBusHud(); toast('🚌 Route abandoned — unbanked fares lost', 2000);
  }
  if(editorOpen){
    updateEditorCamera(dt);
  }else if(playing && onFoot){
    updateFoot(dt);
    city.update(dt, foot.pos);
    updatePaint(dt, foot.pos.x, foot.pos.z, foot.heading, foot.speed||0, false);
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
    syncFuel();    // hides the fuel bar while on foot
  }else if(playing){
    physics.surf=surfaceGrip(surfAt(physics.pos.x, physics.pos.z), carStats.offroad, carStats.snorkel);
    physics.surf.grip*=weather.grip;   // rain and storms slick the roads
    // battered cars lose pace; a wrecked car stalls until the tow arrives;
    // an empty tank stalls just the same
    const dmgF=carDamage?carDamage.perfFactor():1;
    const fuelF=fuelTank&&fuelTank.empty?0:1;
    const driveInput=dmgF>=1 && fuelF>=1 ? controls.input
      : { ...controls.input, throttle: (dmgF<=0||fuelF<=0) ? 0 : (controls.input.throttle||0)*dmgF };
    // worn tires lose grip: capture the fresh stats grip once per stats
    // object (a rebuild makes a new one, so tuning never inherits a worn
    // value as its base), then scale it by tire wear each frame
    if(physics.stats!==tireStatsObj){ tireStatsObj=physics.stats; tireBaseGrip=physics.stats.grip; }
    physics.stats.grip=tireBaseGrip*tireWear.gripFactor();
    tele=physics.update(driveInput, dt, collide);
    // fuel: driving burns it; an empty tank stalls, stations refill cheap,
    // and the fuel truck rescues a stalled car at the delivery price
    if(fuelTank){
      fuelTank.consume(dt, Math.abs(tele.speed), !!(controls.input.nitro));
      syncFuel();
      if(fuelTank.low && !fuelLowWarned){ fuelLowWarned=true; toast('⛽ Low fuel — pull into a gas station', 2200); }
      else if(!fuelTank.low) fuelLowWarned=false;
      if(fuelTank.empty){
        fuelEmptyT+=dt;
        // The rescue is a real truck now, not an instant top-up: after 3 s
        // stalled it drives in along the car's heading, parks beside the
        // car and fills it progressively (fueltruck.js), then drives off.
        if(!fuelTruck && fuelEmptyT>3){
          fuelTruck=new FuelTruckRun(physics.pos.x, physics.pos.z, physics.heading);
          fuelTruckMesh=buildFuelTruckMeshes(THREE);
          fuelTruckMesh.position.set(fuelTruck.x, 0, fuelTruck.z);
          fuelTruckMesh.rotation.y=fuelTruck.heading;
          scene.add(fuelTruckMesh);
          fuelTruckCost=0; fuelEmptyT=0; fuelLowWarned=false;
        }
      }else fuelEmptyT=0;
      if(fuelTruck){
        const r=fuelTruck.update(dt, fuelTank);
        if(r.arrived) toast('⛽ Fuel truck arrived — filling up', 2200);
        if(r.added>0){
          const paid=Math.min(save.cash, r.cost);
          if(paid>0) addCash(-paid);
          fuelTruckCost+=paid; syncFuel();
        }
        if(r.deliveryFinished){
          toast(fuelTruckCost>0 ? '⛽ Fuel truck +'+Math.round(fuelTruck.delivered)+' — $'+fuelTruckCost.toLocaleString() : '⛽ Fuel truck +'+Math.round(fuelTruck.delivered), 2400);
          fuelTruckCost=0;
        }
        fuelTruckMesh.position.set(fuelTruck.x, 0, fuelTruck.z);
        fuelTruckMesh.rotation.y=fuelTruck.heading;
        if(fuelTruck.done){ scene.remove(fuelTruckMesh); fuelTruck=null; fuelTruckMesh=null; }
      }
      const st=nearestStation(physics.pos.x, physics.pos.z);
      // Pump-side refuelling: sitting still on the forecourt is not enough
      // — pull up alongside a pump island and the gauge climbs at the fill
      // rate; driving off mid-fill keeps the fuel (and the charge) so far.
      if(st.dist<=STATION_RADIUS && Math.abs(tele.speed)<1 && !fuelTank.full){
        const np=nearestPump(physics.pos.x, physics.pos.z);
        if(np.dist<=PUMP_REFUEL_DIST){
          const f=fuelTank.add(FUEL_FILL_RATE*dt);
          const paid=Math.min(save.cash, f.cost);
          if(paid>0) addCash(-paid);
          fillSessionCost+=paid;
          if(fuelTank.full){
            toast(fillSessionCost>0 ? '⛽ Filled up — $'+fillSessionCost.toLocaleString() : '⛽ Filled up', 2200);
            fillSessionCost=0; fuelLowWarned=false; pumpHintShown=false;
          }
          syncFuel();
        }else{
          fillSessionCost=0;
          if(!pumpHintShown){ pumpHintShown=true; toast('⛽ Pull up to a pump to refuel', 2200); }
        }
      }else{ pumpHintShown=false; fillSessionCost=0; }
    }
    // tire wear: every metre driven scrubs rubber, drifting and off-road
    // driving much faster — so the drift economy now has a running cost
    if(tireWear){
      const offroad=physics.surf && physics.surf.name!=='road';
      tireWear.drive(Math.abs(tele.speed)*dt, { drifting: !!tele.drifting, offroad });
      if(tireWear.wear>=WORN_BAD && !tireWarnedBald){ tireWarnedBald=true; toast('🛞 Tires nearly bald — grip is gone, find a tire shop', 2600); }
      else if(tireWear.wear>=WORN_WARN && !tireWarnedHalf){ tireWarnedHalf=true; toast('🛞 Tires half-worn — grip is slipping', 2200); }
    }
    // Bay-side repair: sitting still on the shop lot is not enough — pull
    // into a service bay and HP climbs at the tow-bill rate; driving off
    // mid-repair keeps the HP (and the charge) so far. Wrecked cars skip
    // this: the tow truck still handles those.
    if(carDamage && !carDamage.wrecked && carDamage.hp < CAR_MAX_HP){
      const rs = nearestRepairShop(physics.pos.x, physics.pos.z);
      if(rs.dist <= REPAIR_RADIUS && Math.abs(tele.speed) < 1){
        const nb = nearestBay(physics.pos.x, physics.pos.z);
        if(nb.dist <= BAY_REPAIR_DIST){
          const r = carDamage.repairPartial(REPAIR_RATE * dt);
          const paid = Math.min(save.cash, r.cost);
          if(paid > 0) addCash(-paid);
          repairSessionCost += paid;
          if(carDamage.hp >= CAR_MAX_HP){
            toast(repairSessionCost > 0 ? '🔧 Repaired — $' + repairSessionCost.toLocaleString() : '🔧 Repaired', 2200);
            repairSessionCost = 0; bayHintShown = false;
          }
          syncCarHP();
        }else{
          repairSessionCost = 0;
          if(!bayHintShown){ bayHintShown = true; toast('🔧 Pull into a service bay to repair', 2200); }
        }
      }else{ bayHintShown = false; repairSessionCost = 0; }
    }else{ bayHintShown = false; repairSessionCost = 0; }
    // Bay-side tire swap: sitting still on the shop lot is not enough —
    // pull into a tire bay and a fresh set goes on progressively at the
    // flat per-set price; driving off mid-swap keeps the rubber (and the
    // charge) so far. Wrecked cars skip this: the tow truck still handles
    // those.
    if(tireWear && tireWear.wear > 0 && !(carDamage && carDamage.wrecked)){
      const ts = nearestTireShop(physics.pos.x, physics.pos.z);
      if(ts.dist <= TIRE_RADIUS && Math.abs(tele.speed) < 1){
        const nb = nearestTireBay(physics.pos.x, physics.pos.z);
        if(nb.dist <= BAY_TIRE_DIST){
          const r = tireWear.replacePartial(TIRE_RATE * dt);
          const paid = Math.min(save.cash, r.cost);
          if(paid > 0) addCash(-paid);
          tireSessionCost += paid;
          if(tireWear.wear <= 0){
            toast(tireSessionCost > 0 ? '🛞 New tires — $' + tireSessionCost.toLocaleString() : '🛞 New tires', 2200);
            tireSessionCost = 0; tireHintShown = false;
            tireWarnedHalf = false; tireWarnedBald = false;
          }
        }else{
          tireSessionCost = 0;
          if(!tireHintShown){ tireHintShown = true; toast('🛞 Pull into a tire bay for new tires', 2200); }
        }
      }else{ tireHintShown = false; tireSessionCost = 0; }
    }else{ tireHintShown = false; tireSessionCost = 0; }
    // Taxi fares: driving the Peg City Cab turns free roam into a shift —
    // fares hail nearby, pay base + distance, tip for a quick clean ride,
    // and earn a streak bonus (+10% per consecutive fare, cap +50%) plus a
    // passenger star rating that follows the driver across sessions — and
    // the rating sets the tip: 4.5+ stars earns +25%, 4.0+ earns +10%,
    // under 3.0 the tip is halved, once 3 rides are rated.
    // Fares surge with the time of day (sunset +25%, night +50%), locked
    // in at pickup — the meter follows the sky, not the clock mid-ride —
    // and with the weather on top (rain +25%, storm +50%): a night storm
    // pays 2.25x the meter. The two parts are passed separately so the
    // toasts and HUD can name each one.
    // One hail in seven is a VIP rush fare (gold beacon, double pay,
    // tighter clock); one hail in eight is an airport run (blue beacon,
    // city -> terminal or terminal -> city, flat $120 on the meter); any
    // passenger bails if the ride drags far past par.
    // The pickers follow the world: main-city grid at home, custom streets
    // on a custom map (swapped in playCustom/exitCustom).
    if(taxi.setInCab(isTaxiCar(carDef)) === 'abandoned'){ hideTaxiPed(); toast('🚕 Fare abandoned — you switched cars', 2000); }
    if(isTaxiCar(carDef) && courier.active){ courier.abandon(); setCourierBeacon(null); updateCourierHud(); toast('🛵 Delivery abandoned — you switched to the cab', 2000); }
    courier.setDriving(true);   // the courier shift runs in any car but the cab
    const timeSurge = surgeMultiplierFor(PRESET_ORDER[todIdx]);
    const wSurge = weatherSurgeFor(weather.state);
    for(const ev of taxi.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge, timeSurge, weatherSurge:wSurge, weather:weather.state })){
      const st = fareSurgeText(ev);   // 'Night surge ×1.5 · Storm surge ×1.5', or ''
      if(ev.type === 'hail'){ setTaxiBeacon(ev.point, ev.vip, ev.airport); setTaxiPed(ev.point, ev.vip);
        toast(ev.airport ? '✈️ Airport run hailing — ' + (ev.airportDir === 'to' ? 'needs a ride to the terminal' : 'waiting at arrivals') + (ev.vip ? ' · VIP ×2' : '') + (st ? ' · ' + st : '')
          : ev.vip ? '🌟 VIP fare hailing — in a hurry, pays double' + (st ? ' · ' + st : '')
          : (st ? '🚕 Fare hailing nearby — ' + st : '🚕 Fare hailing nearby — drive to the yellow marker'), 2600); }
      else if(ev.type === 'hailExpired'){ setTaxiBeacon(null); hideTaxiPed(); toast('🚕 Fare gave up waiting', 2000); }
      else if(ev.type === 'pickup'){ setTaxiBeacon(ev.dest, ev.vip, ev.airport); hideTaxiPed(); audio.beep(880, 0.08);
        toast((ev.airport ? '✈️ Airport run aboard — $' : ev.vip ? '🌟 VIP aboard — $' : '🚕 Passenger aboard — $') + ev.fareEstimate.toLocaleString() + ' on the meter' + (ev.airport ? ' · +$120 airport fee' : '') + (ev.vip ? ' · pays double' : '') + (st ? ' (' + st + ')' : ''), 2600); }
      else if(ev.type === 'dropoff'){ addCash(ev.total); setTaxiBeacon(null); hideTaxiPed();
        save.taxi = taxi.career; saveSave(save);   // career (rides, best streak, rating, wet fares) persists
        const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
        let msg = (ev.airport ? '✈️ Airport run paid — $' : ev.vip ? '🌟 VIP paid — $' : '🚕 Fare paid — $') + ev.fare.toLocaleString();
        if(ev.airport) msg += ' · +$120 airport fee';
        if(ev.tip > 0) msg += ' + $' + ev.tip.toLocaleString() + ' tip';
        if(ev.tipMult && ev.tipMult !== 1) msg += ' (' + tipLabelFor(ev.tipMult) + ')';
        if(ev.streakBonus > 0) msg += ' + $' + ev.streakBonus.toLocaleString() + ' streak x' + ev.streak;
        if(st) msg += ' · ' + st;
        if(ev.weather === 'storm') msg += ' · ⛈️ storm fare';
        else if(ev.weather === 'rain') msg += ' · 🌧️ rain fare';
        msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
        toast(msg, 3200); }
      else if(ev.type === 'rideFailed'){ setTaxiBeacon(null); hideTaxiPed(); toast(ev.reason === 'impatient' ? (ev.airport ? '✈️ Airport passenger bailed — took too long' : '🚕 Passenger bailed — took too long') : (ev.airport ? '✈️ Airport passenger bailed — wrecked cab' : '🚕 Passenger bailed — wrecked cab'), 2400); }
    }
    // Courier shift: food delivery in any car but the cab — orders appear
    // at restaurants nearby, pay base + distance scaled by freshness, spoil
    // on hard impacts (damageCar feeds noteImpact), and stack two at a time
    // for a $50 batch bonus. The cab runs fares instead, so the courier
    // waits while the taxi shift is live and never fights it for a beacon.
    if(!isTaxiCar(carDef)){
      for(const ev of courier.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100 })){
        if(ev.type === 'offer'){ setCourierBeacon(ev.order.restPoint);
          toast((ev.stacked ? '🛵 Second order — ' : '🛵 New order — ') + ev.order.food + ' from ' + ev.order.restaurant + ' — ~$' + ev.payEstimate.toLocaleString() + ' if hot' + (ev.stacked ? ' · stack it for +$50' : ''), 2800); }
        else if(ev.type === 'offerExpired'){ setCourierBeacon(ev.stacked ? courier.target : null); toast(ev.stacked ? '🛵 Second order cancelled — first order still rides' : '🛵 Order cancelled — restaurant gave up waiting', 2000); }
        else if(ev.type === 'pickup'){ setCourierBeacon(ev.order.dest); audio.beep(990, 0.08);
          toast('🛵 ' + ev.order.food + ' collected — deliver hot for ~$' + ev.payEstimate.toLocaleString() + (ev.stacked ? ' · two orders aboard!' : ''), 2600); }
        else if(ev.type === 'delivered'){ addCash(ev.total); setCourierBeacon(courier.target);
          save.courier = courier.career; saveSave(save);   // career (deliveries, best stack, fresh drops) persists
          const fresh = ev.order.freshness;
          let msg = '🛵 Delivered — $' + ev.pay.toLocaleString() + (fresh >= 0.8 ? ' · still hot 🔥' : fresh > 0 ? ' · lukewarm' : ' · cold ❄️');
          if(ev.batchBonus > 0) msg += ' + $' + ev.batchBonus.toLocaleString() + ' batch bonus';
          if(ev.ordersLeft > 0) msg += ' · ' + ev.ordersLeft + ' order' + (ev.ordersLeft > 1 ? 's' : '') + ' still aboard';
          else msg += ' · ' + ev.deliveries + ' deliveries · $' + ev.earned.toLocaleString() + ' earned';
          toast(msg, 3200); }
        else if(ev.type === 'ordersLost'){ setCourierBeacon(null); toast('🛵 Orders lost — the food went down with the car', 2400); }
      }
    }
    updateTaxiPed(dt);
    // Bus route: the Winnipeg Transit loop — a chain of stops, riders
    // boarding at each one, the farebox paying out only when the route
    // finishes. The bus runs its own shift, so it never fights the cab
    // or the courier for a beacon; switching out of the bus ends it.
    if(bus.setInBus(isBusCar(carDef)) === 'abandoned'){ hideBusPeds(); toast('🚌 Route abandoned — you switched cars', 2000); }
    if(isBusCar(carDef)){
      for(const ev of bus.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'routeStart'){ setBusBeacon(ev.stops[0]); setBusPeds(ev.stops[0], ev.stops[0].waiting);
          toast('🚌 Route started — ' + ev.stops.length + ' stops' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'board'){ const next = bus.target; setBusBeacon(next); setBusPeds(next, next.waiting);
          audio.beep(990, 0.08);
          toast('🚌 ' + ev.boarded + ' aboard' + (ev.leftWaiting ? ' · ' + ev.leftWaiting + ' left waiting' : '')
            + ' · +$' + ev.fare.toLocaleString() + ' in the farebox' + (ev.onTime ? '' : ' · late for this leg'), 2200); }
        else if(ev.type === 'passengerLeft'){ toast('😠 A rider got off early — drive smoother!', 2000); }
        else if(ev.type === 'routeComplete'){ addCash(ev.total); setBusBeacon(null); hideBusPeds();
          save.bus = bus.career; saveSave(save);   // career (routes, riders, on-time record) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🚌 Route complete — $' + ev.fares.toLocaleString() + ' fares + $' + ev.completionBonus.toLocaleString() + ' bonus';
          if(ev.onTimeBonus > 0) msg += ' + $' + ev.onTimeBonus.toLocaleString() + ' on time (' + ev.onTimeLegs + '/' + ev.totalStops + ' legs)';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'routeFailed'){ setBusBeacon(null); hideBusPeds();
          toast('🚌 Bus wrecked — route lost, $' + ev.fareboxLost.toLocaleString() + ' in the farebox gone', 2400); }
      }
    }
    updateBusPeds(dt);
    // Ambulance: the Winnipeg EMS loop — a call comes in, race to the
    // patient, load them aboard, then race them to the hospital before
    // their condition runs out. The ambulance runs its own shift, so it
    // never fights the cab, the courier or the bus for a beacon; switching
    // out of the rig ends the call.
    if(amb.setInAmbulance(isAmbulanceCar(carDef)) === 'abandoned'){ hideAmbPed(); toast('🚑 Call abandoned — you switched cars', 2000); }
    if(isAmbulanceCar(carDef)){
      for(const ev of amb.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'callStart'){ setAmbBeacon(ev.patient, 'respond'); setAmbPed(ev.patient);
          toast('🚨 EMS call — patient waiting' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'loaded'){ setAmbBeacon(ev.hospital, 'transport'); hideAmbPed(); audio.beep(990, 0.08);
          toast('🚑 Patient aboard — get them to the hospital! Condition ' + ev.condition + '%', 2600); }
        else if(ev.type === 'jostled'){ toast('😖 The patient took a hit — drive smoother! Condition ' + ev.condition + '%', 2000); }
        else if(ev.type === 'critical'){ toast('🚨 Patient critical — ' + ev.condition + '% — hurry!', 2400); }
        else if(ev.type === 'delivered'){ addCash(ev.total); setAmbBeacon(null); hideAmbPed();
          save.amb = amb.career; saveSave(save);   // career (calls, lives saved, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🚑 Patient delivered — $' + ev.base.toLocaleString() + ' base';
          if(ev.speedBonus > 0) msg += ' + $' + ev.speedBonus.toLocaleString() + ' speed';
          if(ev.careBonus > 0) msg += ' + $' + ev.careBonus.toLocaleString() + ' care';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'callFailed'){ setAmbBeacon(null); hideAmbPed();
          toast(ev.reason === 'patientLost' ? (ev.patientAboard ? '🚑 Patient died in the back — call lost' : '🚑 Patient died before you got there — call lost') : '🚑 Ambulance wrecked — call lost', 2400); }
      }
    }
    updateAmbPed(dt);
    // Fire truck: the Winnipeg Fire Paramedic Service loop — a call
    // comes in, race to the fire, park close and spray until it is out
    // before it fully engulfs. The truck runs its own shift, so it never
    // fights the cab, the courier, the bus, the ambulance or the garbage truck for a beacon;
    // switching out of the rig ends the call.
    if(fire.setInFireTruck(isFireCar(carDef)) === 'abandoned'){ hideFireMesh(); toast('🔥 Call abandoned — you switched cars', 2000); }
    if(isFireCar(carDef)){
      for(const ev of fire.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'callStart'){ setFireBeacon(ev.fire); setFireMesh(ev.fire);
          toast('🔥 Fire call — building burning' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'onScene'){ audio.beep(990, 0.08);
          toast('🔥 On scene — spray the fire! Intensity ' + ev.intensity + '%', 2600); }
        else if(ev.type === 'danger'){ toast('🔥 Fire nearly lost — ' + ev.intensity + '% — spray it now!', 2400); }
        else if(ev.type === 'extinguished'){ addCash(ev.total); setFireBeacon(null); hideFireMesh();
          save.fire = fire.career; saveSave(save);   // career (calls, fires out, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🔥 Fire out — $' + ev.base.toLocaleString() + ' base';
          if(ev.speedBonus > 0) msg += ' + $' + ev.speedBonus.toLocaleString() + ' speed';
          if(ev.savedBonus > 0) msg += ' + $' + ev.savedBonus.toLocaleString() + ' saved';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'callFailed'){ setFireBeacon(null); hideFireMesh();
          toast(ev.reason === 'engulfed' ? '🔥 Building fully engulfed — call lost' : '🔥 Fire truck wrecked — call lost', 2400); }
      }
    }
    updateFireMesh(dt);
    // Police patrol: the Interceptor answers dispatch — a suspect is
    // fleeing, and the chase is on. The cruiser runs its own shift, so
    // it never fights the cab, the courier, the bus, the ambulance, the
    // fire truck or the garbage truck for a beacon; switching out of the cruiser ends it.
    if(policeJob.setInPoliceCar(isPoliceCar(carDef)) === 'abandoned'){ hideSuspectCar(); toast('🚔 Call abandoned — you switched cars', 2000); }
    if(isPoliceCar(carDef)){
      for(const ev of policeJob.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'callStart'){ setPoliceBeacon(ev.suspect); setSuspectCar(ev.suspect, ev.car);
          if(audio.dispatch) audio.dispatch();
          toast('🚔 Dispatch — suspect fleeing' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'inPursuit'){ audio.beep(990, 0.08);
          toast('🚔 In pursuit — stay on them!', 2200); }
        else if(ev.type === 'pit'){ audio.beep(180, 0.1);
          toast('🚔 PIT! They are losing it — ' + ev.progress + '% stopped', 2000); }
        else if(ev.type === 'shunt'){ toast('🚔 Rough driving — clean bonus shrinking', 1800); }
        else if(ev.type === 'losing'){ toast('🚔 Losing them — close the gap!', 2400); }
        else if(ev.type === 'arrested'){ addCash(ev.total); setPoliceBeacon(null); hideSuspectCar();
          save.police = policeJob.career; saveSave(save);   // career (calls, arrests, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🚔 Suspect arrested — $' + ev.base.toLocaleString() + ' base';
          if(ev.speedBonus > 0) msg += ' + $' + ev.speedBonus.toLocaleString() + ' speed';
          if(ev.cleanBonus > 0) msg += ' + $' + ev.cleanBonus.toLocaleString() + ' clean';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'callFailed'){ setPoliceBeacon(null); hideSuspectCar();
          toast(ev.reason === 'escaped' ? '🚔 Suspect got away — call lost' : '🚔 Cruiser wrecked — call lost', 2400); }
      }
    }
    updateSuspectCar(dt);
    // Garbage route: the sanitation loop — a chain of bin stops, bins
    // loading one at a time, the hopper emptying at the depot when it
    // fills, and the route paying only when the last stop clears. The
    // truck runs its own shift, so it never fights the cab, the courier,
    // the bus, the ambulance, the fire truck or the cruiser for a beacon;
    // switching out of the truck ends it.
    if(garbage.setInTruck(isGarbageCar(carDef)) === 'abandoned'){ hideGarbageBins(); toast('🗑️ Route abandoned — you switched cars', 2000); }
    if(isGarbageCar(carDef)){
      for(const ev of garbage.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'routeStart'){ setGarbageBeacon(ev.stops[0]); setGarbageBins(ev.stops[0], ev.stops[0].bins);
          toast('🗑️ Route started — ' + ev.stops.length + ' stops' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'binLoaded'){ const next = garbage.nextStop; if(next) setGarbageBins(next, ev.binsLeft); }
        else if(ev.type === 'stopCleared'){ const next = garbage.target; setGarbageBeacon(next); if(next && garbage.phase === 'collect') setGarbageBins(next, next.bins);
          audio.beep(990, 0.08);
          toast('🗑️ Stop cleared — ' + ev.hopper + ' in the hopper · $' + ev.loadValue.toLocaleString() + ' aboard' + (ev.onTime ? '' : ' · late for this leg'), 2200); }
        else if(ev.type === 'hopperFull'){ setGarbageBeacon(garbage.depot); hideGarbageBins();
          toast('🗑️ Hopper full — to the depot to empty it!', 2400); }
        else if(ev.type === 'emptied'){ const next = garbage.target; setGarbageBeacon(next); if(next) setGarbageBins(next, next.bins);
          audio.beep(990, 0.08);
          toast('🗑️ Emptied — $' + ev.dumped.toLocaleString() + ' banked · $' + ev.banked.toLocaleString() + ' safe', 2200); }
        else if(ev.type === 'spilled'){ toast('🗑️ A bin spilled off the back — drive smoother!', 2000); }
        else if(ev.type === 'routeComplete'){ addCash(ev.total); setGarbageBeacon(null); hideGarbageBins();
          save.garbage = garbage.career; saveSave(save);   // career (routes, bins, on-time record) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🗑️ Route complete — $' + ev.binPay.toLocaleString() + ' bins + $' + ev.completionBonus.toLocaleString() + ' bonus';
          if(ev.onTimeBonus > 0) msg += ' + $' + ev.onTimeBonus.toLocaleString() + ' on time (' + ev.onTimeLegs + '/' + ev.totalStops + ' legs)';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'routeFailed'){ setGarbageBeacon(null); hideGarbageBins();
          if(ev.banked > 0) addCash(ev.banked); // already banked at the depot survives the wreck
          let msg = '🗑️ Truck wrecked — route lost, $' + ev.loadLost.toLocaleString() + ' in the hopper gone';
          if(ev.banked > 0) msg += ' · $' + ev.banked.toLocaleString() + ' already banked is safe';
          toast(msg, 2400); }
      }
    }
    // Tow calls: the roadside-assistance loop — a stranded car on a
    // street somewhere, a winch hook-up that needs the truck stopped
    // beside it, then a haul to the nearest repair shop with the car
    // trailing on the hook. The truck runs its own shift, so it never
    // fights the cab, the courier, the bus, the ambulance, the fire
    // truck, the cruiser or the garbage truck for a beacon; switching
    // out of the truck ends it.
    if(tow.setInTow(isTowCar(carDef)) === 'abandoned'){ hideTowedCar(); toast('🪝 Call abandoned — you switched cars', 2000); }
    if(isTowCar(carDef)){
      for(const ev of tow.update(dt, { x:physics.pos.x, z:physics.pos.z, heading:physics.heading, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'callStart'){ setTowBeacon(ev.breakdown); setTowedCar(ev.breakdown, ev.car);
          if(audio.dispatch) audio.dispatch();
          toast('🪝 Dispatch — car down, ' + ev.condition + '% · ' + ev.shop.name + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'onSite'){ audio.beep(990, 0.08);
          toast('🪝 On site — hold still, winching it on…', 2200); }
        else if(ev.type === 'hooked'){ setTowBeacon(ev.shop); audio.beep(990, 0.08);
          toast('🪝 Hooked — haul it to ' + (tow.shop ? tow.shop.name : 'the shop'), 2200); }
        else if(ev.type === 'straining'){ toast('🪝 Hitch straining — slow down or it drops!', 2000); }
        else if(ev.type === 'unhooked'){ setTowBeacon(tow.breakdown);
          toast('🪝 Car dropped off the hook — go back and hook it again', 2400); }
        else if(ev.type === 'jostled'){ toast('🪝 Rough — the car took a knock, ' + ev.condition + '% left', 2000); }
        else if(ev.type === 'delivered'){ addCash(ev.total); setTowBeacon(null); hideTowedCar();
          save.tow = tow.career; saveSave(save);   // career (calls, tows, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🪝 Car delivered — $' + ev.base.toLocaleString() + ' base';
          if(ev.speedBonus > 0) msg += ' + $' + ev.speedBonus.toLocaleString() + ' speed';
          if(ev.careBonus > 0) msg += ' + $' + ev.careBonus.toLocaleString() + ' care';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'callFailed'){ setTowBeacon(null); hideTowedCar();
          toast(ev.reason === 'totalled' ? '🪝 The car fell apart on the hook — call lost' : '🪝 Truck wrecked — call lost', 2400); }
      }
    }
    // plow routes: drive the snow plow in free roam and a route starts.
    // Switching out of the plow ends it.
    if(plow.setInPlow(isPlowCar(carDef)) === 'abandoned'){ hidePlowDrifts(); toast('❄️ Route abandoned — you switched cars', 2000); }
    if(isPlowCar(carDef)){
      for(const ev of plow.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'routeStart'){ setPlowBeacon(plow.target); setPlowDrifts(plow.nextStop);
          if(audio.dispatch) audio.dispatch();
          toast('❄️ Plow route — ' + plow.stopCount + ' stops' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'driftCleared'){ setPlowDrifts(plow.nextStop); }
        else if(ev.type === 'stopCleared'){ const next = plow.target; setPlowBeacon(next); if(next && plow.phase === 'collect') setPlowDrifts(plow.nextStop);
          if(ev.onTime) toast('❄️ Stop cleared — on schedule', 1800); }
        else if(ev.type === 'saltEmpty'){ setPlowBeacon(plow.depot); hidePlowDrifts();
          toast('🧂 Salt dry — to the depot to refill', 2400); }
        else if(ev.type === 'refilled'){ const next = plow.target; setPlowBeacon(next); if(next) setPlowDrifts(plow.nextStop);
          toast('🧂 Salt refilled — $' + ev.dumped.toLocaleString() + ' banked', 2200); }
        else if(ev.type === 'spilled'){ toast('🧂 Rough — salt spilled, ' + ev.salt + ' left', 2000); }
        else if(ev.type === 'routeComplete'){ addCash(ev.total); setPlowBeacon(null); hidePlowDrifts();
          save.plow = plow.career; saveSave(save);   // career (routes, drifts, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '❄️ Route cleared — $' + ev.driftPay.toLocaleString() + ' drifts';
          if(ev.completionBonus > 0) msg += ' + $' + ev.completionBonus.toLocaleString() + ' route';
          if(ev.onTimeBonus > 0) msg += ' + $' + ev.onTimeBonus.toLocaleString() + ' on time';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'routeFailed'){ setPlowBeacon(null); hidePlowDrifts();
          if(ev.banked > 0) addCash(ev.banked); // already banked at the depot survives the wreck
          toast('❄️ Plow wrecked — route lost' + (ev.banked > 0 ? ', $' + ev.banked.toLocaleString() + ' banked kept' : ''), 2400); }
      }
    }
    // sweeper routes: drive the street sweeper in free roam and a route starts.
    // Switching out of the sweeper ends it.
    if(sweeper.setInSweeper(isSweeperCar(carDef)) === 'abandoned'){ hideSweeperPiles(); toast('🧹 Route abandoned — you switched cars', 2000); }
    if(isSweeperCar(carDef)){
      for(const ev of sweeper.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'routeStart'){ setSweeperBeacon(sweeper.target); setSweeperPiles(sweeper.nextStop);
          if(audio.dispatch) audio.dispatch();
          toast('🧹 Sweep route — ' + sweeper.stopCount + ' stops' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'pileSwept'){ setSweeperPiles(sweeper.nextStop); }
        else if(ev.type === 'stopCleared'){ const next = sweeper.target; setSweeperBeacon(next); if(next && sweeper.phase === 'collect') setSweeperPiles(sweeper.nextStop);
          if(ev.onTime) toast('🧹 Stop cleared — on schedule', 1800); }
        else if(ev.type === 'hopperFull'){ setSweeperBeacon(sweeper.depot); hideSweeperPiles();
          toast('🧹 Hopper full — to the depot to empty it', 2400); }
        else if(ev.type === 'emptied'){ const next = sweeper.target; setSweeperBeacon(next); if(next) setSweeperPiles(sweeper.nextStop);
          toast('🧹 Hopper emptied — $' + ev.dumped.toLocaleString() + ' banked', 2200); }
        else if(ev.type === 'scattered'){ toast('🧹 Rough — a pile scattered off the load, ' + ev.hopper + ' left', 2000); }
        else if(ev.type === 'routeComplete'){ addCash(ev.total); setSweeperBeacon(null); hideSweeperPiles();
          save.sweeper = sweeper.career; saveSave(save);   // career (routes, piles, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🧹 Route swept — $' + ev.pilePay.toLocaleString() + ' piles';
          if(ev.completionBonus > 0) msg += ' + $' + ev.completionBonus.toLocaleString() + ' route';
          if(ev.onTimeBonus > 0) msg += ' + $' + ev.onTimeBonus.toLocaleString() + ' on time';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'routeFailed'){ setSweeperBeacon(null); hideSweeperPiles();
          if(ev.banked > 0) addCash(ev.banked); // already banked at the depot survives the wreck
          toast('🧹 Sweeper wrecked — route lost' + (ev.banked > 0 ? ', $' + ev.banked.toLocaleString() + ' banked kept' : ''), 2400); }
      }
    }
    // mixer routes: drive the cement mixer in free roam and a route starts.
    // Switching out of the mixer ends it.
    if(mixer.setInMixer(isMixerCar(carDef)) === 'abandoned'){ hideMixerCones(); toast('🏗️ Route abandoned — you switched cars', 2000); }
    if(isMixerCar(carDef)){
      for(const ev of mixer.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'routeStart'){ setMixerBeacon(mixer.target); setMixerCones(mixer.nextStop);
          if(audio.dispatch) audio.dispatch();
          toast('🏗️ Pour route — ' + mixer.stopCount + ' sites' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'loadPoured'){ setMixerCones(mixer.nextStop); }
        else if(ev.type === 'stopCleared'){ const next = mixer.target; setMixerBeacon(next); if(next && mixer.phase === 'pour') setMixerCones(mixer.nextStop);
          if(ev.onTime) toast('🏗️ Site poured — on schedule', 1800); }
        else if(ev.type === 'drumEmpty'){ setMixerBeacon(mixer.plant); hideMixerCones();
          toast('🏗️ Drum dry — to the batch plant to refill it', 2400); }
        else if(ev.type === 'refilled'){ const next = mixer.target; setMixerBeacon(next); if(next) setMixerCones(mixer.nextStop);
          toast('🏗️ Drum refilled — $' + ev.dumped.toLocaleString() + ' banked', 2200); }
        else if(ev.type === 'loadSet'){ toast('🏗️ A load set in the drum — ' + ev.drum + ' left', 2000); }
        else if(ev.type === 'spilled'){ toast('🏗️ Rough — a load slopped out of the drum, ' + ev.drum + ' left', 2000); }
        else if(ev.type === 'routeComplete'){ addCash(ev.total); setMixerBeacon(null); hideMixerCones();
          save.mixer = mixer.career; saveSave(save);   // career (routes, loads, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🏗️ Route poured — $' + ev.loadPay.toLocaleString() + ' loads';
          if(ev.completionBonus > 0) msg += ' + $' + ev.completionBonus.toLocaleString() + ' route';
          if(ev.onTimeBonus > 0) msg += ' + $' + ev.onTimeBonus.toLocaleString() + ' on time';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'routeFailed'){ setMixerBeacon(null); hideMixerCones();
          if(ev.banked > 0) addCash(ev.banked); // already banked at the depot survives the wreck
          toast('🏗️ Mixer wrecked — route lost' + (ev.banked > 0 ? ', $' + ev.banked.toLocaleString() + ' banked kept' : ''), 2400); }
      }
    }
    // mail routes: drive the mail truck in free roam and a route starts.
    // Switching out of the mail truck ends it.
    if(mail.setInMail(isMailCar(carDef)) === 'abandoned'){ hideMailBoxes(); toast('📬 Route abandoned — you switched cars', 2000); }
    if(isMailCar(carDef)){
      for(const ev of mail.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'routeStart'){ setMailBeacon(mail.target); setMailBoxes(mail.nextStop);
          if(audio.dispatch) audio.dispatch();
          toast('📬 Mail route — ' + mail.stopCount + ' stops' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'parcelDelivered'){ setMailBoxes(mail.nextStop); }
        else if(ev.type === 'stopCleared'){ const next = mail.target; setMailBeacon(next); if(next && mail.phase === 'deliver') setMailBoxes(mail.nextStop);
          if(ev.onTime) toast('📬 Stop delivered — on schedule' + (ev.priority ? ' · ⭐ priority' : ''), 1800); }
        else if(ev.type === 'satchelEmpty'){ setMailBeacon(mail.office); hideMailBoxes();
          toast('📬 Satchel empty — to the post office to restock it', 2400); }
        else if(ev.type === 'restocked'){ const next = mail.target; setMailBeacon(next); if(next) setMailBoxes(mail.nextStop);
          toast('📬 Satchel restocked — $' + ev.dumped.toLocaleString() + ' banked', 2200); }
        else if(ev.type === 'damaged'){ toast('📬 Rough — a parcel broke in the satchel, ' + ev.satchel + ' left', 2000); }
        else if(ev.type === 'routeComplete'){ addCash(ev.total); setMailBeacon(null); hideMailBoxes();
          save.mail = mail.career; saveSave(save);   // career (routes, parcels, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '📬 Route delivered — $' + ev.loadPay.toLocaleString() + ' parcels';
          if(ev.completionBonus > 0) msg += ' + $' + ev.completionBonus.toLocaleString() + ' route';
          if(ev.onTimeBonus > 0) msg += ' + $' + ev.onTimeBonus.toLocaleString() + ' on time';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'routeFailed'){ setMailBeacon(null); hideMailBoxes();
          if(ev.banked > 0) addCash(ev.banked); // already banked at the post office survives the wreck
          toast('📬 Mail truck wrecked — route lost' + (ev.banked > 0 ? ', $' + ev.banked.toLocaleString() + ' banked kept' : ''), 2400); }
      }
    }
    // ice cream routes: drive the ice cream truck in free roam and a route starts.
    // Switching out of the ice cream truck ends it.
    if(icecream.setInIceCream(isIceCreamCar(carDef)) === 'abandoned'){ hideIceCreamCones(); toast('🍦 Route abandoned — you switched cars', 2000); }
    if(isIceCreamCar(carDef)){
      for(const ev of icecream.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'routeStart'){ setIceCreamBeacon(icecream.target); setIceCreamCones(icecream.nextStop);
          if(audio.dispatch) audio.dispatch();
          toast('🍦 Ice cream route — ' + icecream.stopCount + ' stops' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'coneServed'){ setIceCreamCones(icecream.nextStop); }
        else if(ev.type === 'stopCleared'){ const next = icecream.target; setIceCreamBeacon(next); if(next && icecream.phase === 'serve') setIceCreamCones(icecream.nextStop);
          if(ev.onTime) toast('🍦 Stop served — on schedule' + (ev.party ? ' · 🎂 party' : ''), 1800); }
        else if(ev.type === 'freezerEmpty'){ setIceCreamBeacon(icecream.depot); hideIceCreamCones();
          toast('🍦 Freezer empty — to the depot to restock it', 2400); }
        else if(ev.type === 'restocked'){ const next = icecream.target; setIceCreamBeacon(next); if(next) setIceCreamCones(icecream.nextStop);
          toast('🍦 Freezer restocked — $' + ev.dumped.toLocaleString() + ' banked', 2200); }
        else if(ev.type === 'melted'){ toast('🍦 A cone melted in the freezer, ' + ev.freezer + ' left', 2000); }
        else if(ev.type === 'damaged'){ toast('🍦 Rough — a cone dropped, ' + ev.freezer + ' left', 2000); }
        else if(ev.type === 'routeComplete'){ addCash(ev.total); setIceCreamBeacon(null); hideIceCreamCones();
          save.icecream = icecream.career; saveSave(save);   // career (routes, cones, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🍦 Route served — $' + ev.loadPay.toLocaleString() + ' cones';
          if(ev.completionBonus > 0) msg += ' + $' + ev.completionBonus.toLocaleString() + ' route';
          if(ev.onTimeBonus > 0) msg += ' + $' + ev.onTimeBonus.toLocaleString() + ' on time';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'routeFailed'){ setIceCreamBeacon(null); hideIceCreamCones();
          if(ev.banked > 0) addCash(ev.banked); // already banked at the depot survives the wreck
          toast('🍦 Ice cream truck wrecked — route lost' + (ev.banked > 0 ? ', $' + ev.banked.toLocaleString() + ' banked kept' : ''), 2400); }
      }
    }
    // school bus routes: drive the school bus in free roam and a route starts.
    // Switching out of the school bus ends it.
    if(schoolbus.setInSchoolBus(isSchoolBusCar(carDef)) === 'abandoned'){ hideSchoolBusKids(); toast('🚌 Route abandoned — you switched cars', 2000); }
    if(isSchoolBusCar(carDef)){
      for(const ev of schoolbus.update(dt, { x:physics.pos.x, z:physics.pos.z, speed:Math.abs(tele.speed), hp:carDamage ? carDamage.hp : 100, surge:timeSurge*wSurge })){
        if(ev.type === 'routeStart'){ setSchoolBusBeacon(schoolbus.target); setSchoolBusKids(schoolbus.nextStop);
          if(audio.dispatch) audio.dispatch();
          toast('🚌 School bus route — ' + schoolbus.stopCount + ' stops' + (ev.surge > 1 ? ' · surge ×' + ev.surge : ''), 2600); }
        else if(ev.type === 'kidBoarded'){ setSchoolBusKids(schoolbus.nextStop); }
        else if(ev.type === 'stopCleared'){ const next = schoolbus.target; setSchoolBusBeacon(next); if(next && schoolbus.phase === 'pickup') setSchoolBusKids(schoolbus.nextStop);
          if(ev.onTime) toast('🚌 Stop picked up — on schedule' + (ev.bell ? ' · 🔔 late bell' : ''), 1800); }
        else if(ev.type === 'seatsFull'){ setSchoolBusBeacon(schoolbus.school); hideSchoolBusKids();
          toast('🚌 Bus full — to the school to drop them off', 2400); }
        else if(ev.type === 'droppedOff'){ const next = schoolbus.target; setSchoolBusBeacon(next); if(next) setSchoolBusKids(schoolbus.nextStop);
          toast('🚌 Kids dropped off — $' + ev.dumped.toLocaleString() + ' banked', 2200); }
        else if(ev.type === 'restless'){ toast('🚌 A kid got restless and hopped off, ' + ev.aboard + ' aboard', 2000); }
        else if(ev.type === 'scared'){ toast('🚌 Rough — a kid got scared off, ' + ev.aboard + ' aboard', 2000); }
        else if(ev.type === 'routeComplete'){ addCash(ev.total); setSchoolBusBeacon(null); hideSchoolBusKids();
          save.schoolbus = schoolbus.career; saveSave(save);   // career (routes, kids, rating) persists
          const stars = '★'.repeat(ev.rating) + '☆'.repeat(5 - ev.rating);
          let msg = '🚌 Route done — $' + ev.loadPay.toLocaleString() + ' fares';
          if(ev.completionBonus > 0) msg += ' + $' + ev.completionBonus.toLocaleString() + ' route';
          if(ev.onTimeBonus > 0) msg += ' + $' + ev.onTimeBonus.toLocaleString() + ' on time';
          if(ev.surge > 1) msg += ' · surge ×' + ev.surge;
          msg += ' · ' + stars + ' (' + ev.ratingAvg.toFixed(1) + '★ avg)';
          toast(msg, 3200); }
        else if(ev.type === 'routeFailed'){ setSchoolBusBeacon(null); hideSchoolBusKids();
          if(ev.banked > 0) addCash(ev.banked); // already banked at the school survives the wreck
          toast('🚌 School bus wrecked — route lost' + (ev.banked > 0 ? ', $' + ev.banked.toLocaleString() + ' banked kept' : ''), 2400); }
      }
    }
    updateTowedCar(dt);
    if(frameN % 3 === 0){ updateTaxiHud(); updateCourierHud(); updateBusHud(); updateAmbHud(); updateFireHud(); updatePoliceHud(); updateGarbageHud(); updateTowHud(); updatePlowHud(); updateSweeperHud(); updateMixerHud(); updateMailHud(); updateIceCreamHud(); updateSchoolBusHud(); }
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
    updatePaint(dt, physics.pos.x, physics.pos.z, physics.heading, tele.speed, true);
    syncCarTransform(dt);
    updateCamera(dt);
    updateHUD();
    updateEffects(dt);
    shops.update(dt);
    weapons.update(dt, weaponCtx, false, false);   // let bullets finish flying
    minimap.draw(physics.pos.x, physics.pos.z, physics.heading, null, mp, copBlips(), taxi.target || courier.target || bus.target || policeJob.target || garbage.target || tow.target || plow.target);
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
    if(audio.listener){ audio.listener(npcPlayer.x, npcPlayer.z); audio.ambience(inside ? 0.12 : onFoot ? 0.7 : 0.35, PRESET_ORDER[todIdx]==='day'); }
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
    // The cruiser's siren wails while a patrol call is live — over the
    // wanted system's level, which retakes it when the call ends.
    if(policeJob.siren && audio.siren) audio.siren(0.45);
    // bust pressure: the hurt vignette pulses as the arrest closes in
    if(hurtFlash>0) hurtFlash-=dt;
    {
      const bv = policeRes && policeRes.bustFrac > 0.02 ? policeRes.bustFrac * 0.5 : 0;
      $('hurt').style.opacity=String(Math.max(bv, Math.max(0,hurtFlash/0.35)*0.75));
    }
    if(dead){ deadT+=dt; if(onFoot && person) animateDeath(person, deadT); if(deadT>3.2) respawn(); }
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
  $('paint-btn').onclick=()=>togglePaint();
  $('p-paint').onclick=()=>{ togglePaint(); $('p-paint').textContent=paintTown&&paintTown.active?'🖌️ PAINT THE TOWN RED: ON':'🖌️ PAINT THE TOWN RED: OFF'; };
  $('p-wash').onclick=()=>{ audio.beep(500,0.05); washTown(); };
  window.addEventListener('keydown', e=>{ if((e.key==='p'||e.key==='P') && state==='freeroam' && !paused) togglePaint(); });
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
    taxi.loadCareer(save.taxi);   // cab career (rides, earnings, rating) survives sessions
    courier.loadCareer(save.courier);   // courier career (deliveries, earnings, best stack) survives sessions
    bus.loadCareer(save.bus);   // bus career (routes, riders, earnings, on-time record) survives sessions
    amb.loadCareer(save.amb);   // EMS career (calls, lives saved, earnings, rating) survives sessions
    fire.loadCareer(save.fire);   // fire career (calls, fires out, earnings, rating) survives sessions
    policeJob.loadCareer(save.police);   // patrol career (calls, arrests, earnings, rating) survives sessions
    garbage.loadCareer(save.garbage);   // garbage career (routes, bins, earnings, on-time record) survives sessions
    tow.loadCareer(save.tow);   // tow career (calls, tows, earnings, rating) survives sessions
    plow.loadCareer(save.plow);   // plow career (routes, drifts, earnings, on-time record) survives sessions
    sweeper.loadCareer(save.sweeper);   // sweeper career (routes, piles, earnings, on-time record) survives sessions
    mixer.loadCareer(save.mixer);   // mixer career (routes, loads, earnings, on-time record) survives sessions
    mail.loadCareer(save.mail);   // mail career (routes, parcels, earnings, on-time record) survives sessions
    icecream.loadCareer(save.icecream);   // ice cream career (routes, cones, earnings, on-time record) survives sessions
    schoolbus.loadCareer(save.schoolbus);   // school bus career (routes, kids, earnings, on-time record) survives sessions
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
      onShot:shots=>{ if(mp) mp.sendShots(shots); if(shots.length){ commitCrime('gunshot', weaponCtx.pos.x, weaponCtx.pos.z, WITNESS_LOUD_RADIUS); if(traffic) traffic.panicAt(weaponCtx.pos.x, weaponCtx.pos.z); if(people) people.scare(weaponCtx.pos.x, weaponCtx.pos.z, 45); } } });
    interiors=createInteriors(scene);
    blood=createBlood(scene);
    people=createPeople({ scene, blood, audio, count:14,
      collide:(x,z,r)=>collideR(x,z,r),
      shoot:(a,b,c,d)=>weapons.remoteShot(a,b,c,d),
      onPlayerHit:(d)=>hurtPlayer(d) });
    traffic=createTraffic({ scene, lines:city.roadLines, buildCar, applyCarSkin, CAR_DEFS });
    trafficHits=traffic.hitList();
    paintTown=new PaintTown(city.buildings, city.roadLines, ROAD_W, GRID_HALF);
    paintFX=createPaintFX(scene, city, paintTown);
    if(save.paintTown){ paintTown.load(save.paintTown); paintTown.active=!!save.paintTown.on; paintFX.relay(); }
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
      buildCharacter, animateCharacter, animateDeath, startDeath, kickHit,
    });
    missions=createMissionRunner({ scene, people, toast, beep:(f,d)=>audio.beep(f,d) });
    weaponCtx.hitables=[people.hitList, trafficHits, remoteHits, police.copHitList()];
    weaponCtx.onPersonHit=(ref, dmg, dx, dz, head)=>{
      if(head && audio.impact) audio.impact('head');
      else if(audio.impact) audio.impact('flesh');
      if(ref.kind==='ped' || ref.kind==='enemy'){
        const killed=people.damage(ref, dmg, dx, dz);
        if(killed && head) toast('🎯 HEADSHOT', 900);
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
    if(/[?&]debug\b/.test(location.search)) window.__cd={ frames:()=>frameN, buildMap:m=>{ const t=performance.now(); const c=buildCustomMap(scene,m); const dt=performance.now()-t; c.dispose(); return dt; }, playCustom:m=>{ const t=performance.now(); playCustom(m); return performance.now()-t; }, tp:(x,z,h)=>{ if(onFoot){ foot.reset(x,z,h||0); snapFootCamera(); } else { physics.pos.x=x; physics.pos.z=z; physics.heading=h||0; syncCarTransform(0); snapCamera(); } }, save:()=>save, paint:()=>paintTown, stores:()=>shops.stores,
      buildings:()=>city.buildings, inside:()=>inside&&{id:inside.b.id, style:inside.room.style}, enter:b=>enterBuilding(b), exit:()=>exitBuilding(),
      getOut:()=>getOut(), tut:()=>tutorial&&{active:tutorial.active, step:tutorial.step}, finishTut:()=>finishTutorial(), pick:id=>pickCar(id),
      mp:()=>mp&&{status:mp.status,count:mp.count}, state:()=>({state,onFoot,editorOpen,pickOpen,cash:save.cash}),
      steal:()=>{ const c=traffic.cars[0]; foot.reset(c.x+2,c.z,0); stealCar(c); return carDef.name; }, physics:()=>physics, missions:()=>missions, setDone:n=>{save.missionsDone=n;}, people:()=>people, traffic:()=>traffic, hp:()=>hp, hurt:d=>hurtPlayer(d),
      police:()=>police, wanted:n=>{ if(police) police.debugWanted(n); return police&&police.stars; },
      car:()=>({vis:carGroup.visible, inScene:!!carGroup.parent, pos:carGroup.position.toArray().map(v=>+v.toFixed(1)), id:carDef.id, phys:[+physics.pos.x.toFixed(1),+physics.pos.z.toFixed(1)], cam:camera.position.toArray().map(v=>+v.toFixed(1))}),
      look:(y,p)=>{ camYaw=y; camPitch=p; }, lowgfx:()=>{ if(qm) qm.setMode('low'); }, aimInfo:()=>({camYaw,camPitch,aimH:weaponCtx.aimH,aimPitch:weaponCtx.aimPitch,heading:foot.heading,aimHold}), arm:id=>{ const g=gear(); if(!g.weapons.includes(id)) g.weapons.push(id); g.ammo[id]=999; g.equipped=id; syncPersonGear(); },
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
      scene, CAR_DEFS, buildCar, applyCarSkin, buildCharacter, setOutfit, setHeldWeapon, animateCharacter, animateDeath, startDeath, resetPose, unpackLook,
      remoteShot:(a,b,c,d)=>{ weapons.remoteShot(a,b,c,d); if(audio.shot) audio.shot('rifle', a, b); },
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
