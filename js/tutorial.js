// CITY DRIVER — tutorial mission. Finishing it pays $100,000 (once) and lets
// you pick any car for free.
import * as THREE from 'three';

export const TUTORIAL_REWARD = 100000;

// Pure step machine (testable): returns the next step index for a context.
// ctx = { reached:bool, driftTime:number, onFoot:bool, inside:int(-1=outside), wasInside:bool }
export const STEPS = [
  { id:'drive', text:'Drive to the green marker', needsTarget:true },
  { id:'drift', text:'DRIFT! Hold HB (Space) while steering', needsTarget:false },
  { id:'park',  text:'Drive to the next marker and stop', needsTarget:true },
  { id:'out',   text:'Tap GET OUT (E) to leave your car', needsTarget:false },
  { id:'enter', text:'Walk to the glowing door and tap ENTER', needsTarget:true },
  { id:'exit',  text:'Look around, then step on the green EXIT pad', needsTarget:false },
];
export function stepDone(id, ctx){
  switch(id){
    case 'drive': return !!ctx.reached;
    case 'drift': return ctx.driftTime >= 1.5;
    case 'park':  return !!ctx.reached && Math.abs(ctx.speed || 0) < 4;
    case 'out':   return !!ctx.onFoot;
    case 'enter': return ctx.inside >= 0;
    case 'exit':  return ctx.inside < 0 && !!ctx.wasInside;
  }
  return false;
}

// city = { buildings:[{id, door:{x,z,nx,nz}}] }
export function createTutorial(scene, city){
  // pick the building whose door is nearest the second stop
  const hub = { x:37, z:-37 };
  let bld = null, bd = Infinity;
  for(const b of city.buildings){
    const d = Math.hypot(b.door.x - (hub.x + 30), b.door.z - hub.z);
    if(d < bd){ bd = d; bld = b; }
  }
  const targets = {
    drive: { x:37, z:-30, r:8 },
    park:  bld ? { x:bld.door.x + bld.door.nx * 7, z:bld.door.z + bld.door.nz * 7, r:9 } : { x:90, z:-37, r:9 },
    enter: bld ? { x:bld.door.x + bld.door.nx * 0.8, z:bld.door.z + bld.door.nz * 0.8, r:1.6 } : null,
  };

  // marker: ring + soft beam
  const ringMat = new THREE.MeshBasicMaterial({ color:0x4ade80, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
  const beamMat = new THREE.MeshBasicMaterial({ color:0x4ade80, transparent:true, opacity:0.22, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
  const marker = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2), ringMat);
  ring.position.y = 0.1;
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat);
  marker.add(ring, beam);
  marker.visible = false;
  scene.add(marker);

  let active = false, idx = 0, driftTime = 0, wasInside = false, t = 0;

  function target(){ const s = STEPS[idx]; return s && s.needsTarget ? targets[s.id] : null; }
  function showMarker(){
    const tg = target();
    marker.visible = !!(active && tg);
    if(tg){ marker.position.set(tg.x, 0, tg.z); marker.scale.set(tg.r, 1, tg.r); }
  }

  return {
    building: bld,
    start(){ active = true; idx = 0; driftTime = 0; wasInside = false; showMarker(); },
    stop(){ active = false; marker.visible = false; },
    get active(){ return active; },
    get step(){ return idx; },
    get total(){ return STEPS.length; },
    get text(){ return STEPS[idx] ? STEPS[idx].text : ''; },
    target,
    // ctx = { pos:{x,z}, drifting, speed, onFoot, inside }
    // returns 'next' when a step completes, 'done' when the mission is complete
    update(dt, ctx){
      if(!active) return null;
      t += dt;
      ringMat.opacity = 0.6 + Math.sin(t * 4) * 0.25;
      marker.rotation.y += dt * 0.6;
      const tg = target();
      const reached = tg ? Math.hypot(ctx.pos.x - tg.x, ctx.pos.z - tg.z) < tg.r : false;
      if(STEPS[idx].id === 'drift' && ctx.drifting) driftTime += dt;
      if(ctx.inside >= 0) wasInside = true;
      if(stepDone(STEPS[idx].id, { reached, driftTime, onFoot:ctx.onFoot, inside:ctx.inside, wasInside, speed:ctx.speed })){
        idx++;
        if(idx >= STEPS.length){ active = false; marker.visible = false; return 'done'; }
        showMarker();
        return 'next';
      }
      return null;
    },
    get driftProgress(){ return Math.min(1, driftTime / 1.5); },
  };
}
