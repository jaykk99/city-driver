// CITY DRIVER — "Paint the Town Red": the visible side. Red paint splats
// on the ground behind the car (one InstancedMesh ring buffer, 1 draw call)
// and buildings that flood red from their old facade colour when painted.
// Logic lives in painttown.js.
import * as THREE from 'three';
import { ROAD_CELL } from './painttown.js';

const MAX_SPLATS = 6000;
const STAMP_EVERY = 1.1;          // metres of travel between paint stamps
const FILL_TIME = 0.7;            // seconds for a building to flood red

function splatTexture(){
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  // irregular blob: a core plus overlapping droplets
  g.beginPath(); g.arc(64, 64, 38, 0, Math.PI * 2); g.fill();
  for(let k = 0; k < 22; k++){
    const a = Math.random() * Math.PI * 2, d = 26 + Math.random() * 30, r = 4 + Math.random() * 12;
    g.beginPath(); g.arc(64 + Math.cos(a) * d, 64 + Math.sin(a) * d, r * (1 - d / 90), 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

export function createPaintFX(scene, city, pt){
  const mat = new THREE.MeshStandardMaterial({
    color:0xa8000f, roughness:0.6, metalness:0, envMapIntensity:0.25, alphaMap:splatTexture(), transparent:true,
    depthWrite:false, polygonOffset:true, polygonOffsetFactor:-4, polygonOffsetUnits:-4,
  });
  const geo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  const splats = new THREE.InstancedMesh(geo, mat, MAX_SPLATS);
  splats.count = 0; splats.frustumCulled = false; splats.receiveShadow = true;
  splats.renderOrder = 1;
  scene.add(splats);

  const _m = new THREE.Matrix4(), _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
  let ring = 0, travel = 0, lastX = null, lastZ = null;
  function stamp(x, z, rot, sx, sz){
    _p.set(x, 0.09, z); _q.setFromAxisAngle(UP, rot); _s.set(sx, 1, sz);
    _m.compose(_p, _q, _s);
    splats.setMatrixAt(ring, _m);
    ring = (ring + 1) % MAX_SPLATS;
    splats.count = Math.max(splats.count, ring === 0 ? MAX_SPLATS : ring);
    splats.instanceMatrix.needsUpdate = true;
  }

  // building flood animation
  const RED = new THREE.Color(), _c = new THREE.Color(), _base = new THREE.Color();
  const fills = [];
  const redFor = id => RED.setRGB(0.62 + ((id * 37) % 23) / 100, 0.02 + ((id * 13) % 5) / 100, 0.04 + ((id * 7) % 5) / 100);
  function paintBuilding(id, instant){
    if(instant){ city.setBuildingColor(id, redFor(id)); return; }
    fills.push({ id, t:0 });
  }

  return {
    // x, z, heading of the car (or player on foot); ev = PaintTown.update result; lay = put paint down this frame
    update(dt, x, z, heading, speed, inCar, ev, lay){
      if(ev) for(const id of ev.buildings) paintBuilding(id, false);
      for(let i = fills.length - 1; i >= 0; i--){
        const f = fills[i]; f.t = Math.min(1, f.t + dt / FILL_TIME);
        const k = f.t * f.t * (3 - 2 * f.t);
        city.buildingColor(f.id, _base);
        _c.copy(_base).lerp(redFor(f.id), k);
        city.setBuildingColor(f.id, _c);
        if(f.t >= 1) fills.splice(i, 1);
      }
      if(lastX === null){ lastX = x; lastZ = z; }
      const px = lastX, pz = lastZ, d = Math.hypot(x - px, z - pz); lastX = x; lastZ = z;
      if(!lay || d > 30) return;        // teleports don't drag paint across the map
      const every = inCar ? STAMP_EVERY : 0.9;
      // lay stamps evenly along this frame's path, so a low frame rate still paints a solid line
      let along = every - travel;
      travel += d;
      while(travel >= every){
        travel -= every;
        const f = d > 0 ? Math.min(1, along / d) : 1; along += every;
        const sx0 = px + (x - px) * f, sz0 = pz + (z - pz) * f;
        const w = inCar ? 2.4 + Math.min(1.4, Math.abs(speed) * 0.03) : 0.9;
        const jx = (Math.random() - 0.5) * 0.5, jz = (Math.random() - 0.5) * 0.5;
        stamp(sx0 + jx, sz0 + jz, heading + (Math.random() - 0.5) * 0.6, w * (0.85 + Math.random() * 0.3), w * (1.1 + Math.random() * 0.5));
        // flung droplets at speed
        if(inCar && Math.abs(speed) > 12 && Math.random() < 0.5){
          const a = heading + (Math.random() < 0.5 ? 1 : -1) * (1.2 + Math.random() * 0.6), r = 2 + Math.random() * 2.5, s = 0.4 + Math.random() * 0.6;
          stamp(sx0 + Math.sin(a) * r, sz0 + Math.cos(a) * r, Math.random() * 6.28, s, s);
        }
      }
    },
    // repaint everything already in the save (no animation)
    relay(){
      for(const id of pt.paintedB) paintBuilding(id, true);
      for(const key of pt.paintedC){
        const c = pt.cellCenter(key);
        for(let k = -1; k <= 1; k++){
          const off = k * ROAD_CELL / 3;
          const x = c.axis === 'z' ? c.x + (Math.random() - 0.5) * 3 : c.x + off;
          const z = c.axis === 'z' ? c.z + off : c.z + (Math.random() - 0.5) * 3;
          stamp(x, z, Math.random() * 6.28, 2.6 + Math.random(), 3 + Math.random() * 1.5);
        }
      }
    },
    clear(){
      for(const id of pt.paintedB) city.setBuildingColor(id, null);
      for(const f of fills) city.setBuildingColor(f.id, null);
      fills.length = 0; splats.count = 0; ring = 0; travel = 0;
    },
    setVisible(v){ splats.visible = v; },
  };
}
