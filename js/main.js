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
  if(typeof p==='number' && p!==carDef.color) paintCar(carGroup, p);
  if(setWheelStyle) setWheelStyle(carGroup, save.wheels[carDef.id]||0);
  scene.add(carGroup);
  carStats=effectiveStats(carDef, save.upgrades[carDef.id]||{});
  allWheels=(carGroup.userData.wheels||[]).slice();
  frontWheels=allWheels.filter(w=>w.position.z>0);
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

function syncCarTransform(dt){
  carGroup.position.set(physics.pos.x, 0, physics.pos.z);
  carGroup.rotation.y=physics.heading;
  const spin=tele.speed*dt*2.4;
  for(let i=0;i<allWheels.length;i++) allWheels[i].rotation.x+=spin;
  for(let i=0;i<frontWheels.length;i++) frontWheels[i].rotation.y=tele.steer*0.45;
  const braking=controls && controls.input.throttle<0;
  for(let i=0;i<brakeMats.length;i++) brakeMats[i].emissiveIntensity=braking?2.4:0.7;
}

// ---------------- collision: circle (car) vs AABB (city colliders) ----------------
function collide(x, z, px, pz){
  const R=1.15;
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

function showMenu(){
  state='menu'; paused=false; garageOpen=false;
  if(dragMode && dragMode.active) dragMode.exit();
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
  $('drag-ui').classList.add('hidden');
  state='freeroam'; paused=false; garageOpen=false;
  hideOverlays();
  $('hud').classList.remove('hidden');
  $('touch-controls').classList.remove('hidden');
  controls.attach(); controls.setMode('drive');
  placeAtSpawn();
  syncCash();
  connectMP();
  toast('Free roam — find the drag strip!');
}

function startDrag(){
  state='drag'; paused=false; garageOpen=false;
  hideOverlays();
  $('hud').classList.add('hidden');
  $('touch-controls').classList.remove('hidden');
  controls.attach(); controls.setMode('drag');
  $('drag-ui').classList.remove('hidden');
  dragMode.enter();
}

function openPause(){
  if(state!=='freeroam' && state!=='drag') return;
  paused=true;
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
  let mod=null, url='';
  try{ mod=await import('./multiplayer.js'); }
  catch(e){ setMp('off','mp unavailable'); return; }
  try{ const cfg=await import('./config.js'); url=cfg.MP_SERVER_URL||''; }
  catch(e){ /* no config */ }
  if(!url){ setMp('off','offline'); return; }
  try{
    mp=mod.createMultiplayer(buildCar, CAR_DEFS);
    mp.connect(scene);
    setMp('on', mp.status||'online');
  }catch(e){ setMp('off','error'); }
}

// ---------------- scene ----------------
function initScene(){
  renderer=new THREE.WebGLRenderer({antialias:false, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFShadowMap;
  $('game-container').appendChild(renderer.domElement);

  scene=new THREE.Scene();
  scene.background=new THREE.Color(0x87b9e8);          // day sky
  scene.fog=new THREE.Fog(0xa9cbe8, 70, 420);

  camera=new THREE.PerspectiveCamera(62, window.innerWidth/window.innerHeight, 0.1, 900);

  const hemi=new THREE.HemisphereLight(0xcfe8ff, 0x3d5a3d, 0.95);
  scene.add(hemi);
  const sun=new THREE.DirectionalLight(0xfff1d6, 1.7);
  sun.position.set(80,120,40);
  sun.castShadow=true;
  sun.shadow.mapSize.set(1024,1024);
  sun.shadow.camera.left=-90; sun.shadow.camera.right=90;
  sun.shadow.camera.top=90; sun.shadow.camera.bottom=-90;
  sun.shadow.camera.near=20; sun.shadow.camera.far=320;
  scene.add(sun);

  city=buildCity(scene);
}

// ---------------- main loop ----------------
let last=performance.now();
function frame(now){
  requestAnimationFrame(frame);
  let dt=(now-last)/1000; last=now;
  if(!(dt>0)) dt=0.016;
  if(dt>0.1) dt=0.1;                       // clamp
  frameN++;

  if(state==='freeroam' && !paused && !garageOpen){
    tele=physics.update(controls.input, dt, collide);
    cityPos.x=physics.pos.x; cityPos.z=physics.pos.z;
    city.update(dt, cityPos);
    syncCarTransform(dt);
    updateCamera(dt);
    updateHUD();
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
  renderer.render(scene, camera);
}

// ---------------- UI wiring ----------------
function wireUI(){
  $('m-freeroam').onclick=()=>{ audio.unlock(); audio.beep(600,0.06); startFreeroam(); };
  $('m-drag').onclick=()=>{ audio.unlock(); audio.beep(600,0.06); startDrag(); };
  $('m-garage').onclick=()=>{ audio.unlock(); openGarage('menu'); };
  $('p-resume').onclick=()=>{ audio.beep(600,0.05); closePause(); };
  $('p-freeroam').onclick=()=>{ audio.beep(600,0.05); startFreeroam(); };
  $('p-drag').onclick=()=>{ audio.beep(600,0.05); startDrag(); };
  $('p-garage').onclick=()=>openGarage('pause');
  $('p-quit').onclick=()=>showMenu();
  $('menu-btn').onclick=openPause;
  $('garage-close').onclick=closeGarage;
  $('drag-exit').onclick=()=>{ if(dragMode.active) dragMode.exit(); startFreeroam(); };

  // autoplay policy: unlock WebAudio on first gesture
  window.addEventListener('pointerdown', ()=>audio.unlock());
  window.addEventListener('keydown', ()=>audio.unlock());

  // mobile: no context menu / pinch zoom / scroll
  document.addEventListener('contextmenu', e=>e.preventDefault());
  document.addEventListener('gesturestart', e=>e.preventDefault());

  window.addEventListener('resize', ()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  document.addEventListener('visibilitychange', ()=>{
    if(document.hidden && (state==='freeroam'||state==='drag') && !paused) openPause();
  });
}

// ---------------- boot ----------------
async function boot(){
  try{
    save=loadSave();
    audio=createAudio();
    initScene();
    controls=createControls();
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
