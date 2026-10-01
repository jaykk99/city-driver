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
// --- AAA graphics state ---
let postfx=null, qm=null, skyEnv=null, todIdx=0;
let smoke=null, exhaust=null, skids=null, headlight=null, headlightTarget=null, headlightBase=0;
let particleScale=1;

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
  toast('Free roam — find the drag strip!');
}

function startDrag(){
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
async function initScene(){
  renderer=new THREE.WebGLRenderer({antialias:false, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  // AAA: filmic tone mapping for that Unreal look
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1.0;
  renderer.shadowMap.enabled=true;
  renderer.shadowMap.type=THREE.PCFShadowMap;
  $('game-container').appendChild(renderer.domElement);

  scene=new THREE.Scene();
  // fog set by city.js; sky dome replaces flat background
  camera=new THREE.PerspectiveCamera(62, window.innerWidth/window.innerHeight, 0.1, 3000);

  city=buildCity(scene);   // creates sun + hemi + fog + world

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
  if(postfx){ postfx.setPixelRatio(Math.min(pr,1)); postfx.setSize(window.innerWidth, window.innerHeight); postfx.setBloomEnabled(s.bloom); }
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

  if(state==='freeroam' && !paused && !garageOpen){
    tele=physics.update(controls.input, dt, collide);
    cityPos.x=physics.pos.x; cityPos.z=physics.pos.z;
    city.update(dt, cityPos);
    syncCarTransform(dt);
    updateCamera(dt);
    updateHUD();
    updateEffects(dt);
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
  if(smoke && (state!=='freeroam'||paused||garageOpen)){ smoke.update(dt); exhaust.update(dt); }
  if(postfx) postfx.render();
  else renderer.render(scene, camera);
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

  window.addEventListener('resize', ()=>{
    camera.aspect=window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if(postfx) postfx.setSize(window.innerWidth, window.innerHeight);
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
    await initScene();
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
