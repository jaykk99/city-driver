// CITY DRIVER — walk-in stores + the shooting range behind the gun store.
// Stores sit on lots that city.js keeps clear (STORE_LOTS). Each store has a
// glowing door ring on the sidewalk: walk into it and tap SHOP.
import * as THREE from 'three';

// Lots city.js must keep free of random buildings/trees (world AABBs).
export const STORE_LOTS = [
  { minX:44, maxX:104, minZ:48,  maxZ:90  },   // gun store + shooting range (block 3,3)
  { minX:8,  maxX:30,  minZ:124, maxZ:146 },   // clothing store (block 2,4)
  { minX:44, maxX:66,  minZ:146, maxZ:170 },   // auto shop (block 3,4)
];

const SITES = [
  { id:'guns',    type:'guns',    name:'LOCK & LOAD', sub:'GUNS · AMMO',  color:0xb91c1c, accent:'#ffd23f',
    bx:[47,59], bz:[52,66], h:7,   face:'-x' },
  { id:'clothes', type:'clothes', name:'THREADZ',     sub:'CLOTHING',     color:0x6b46c1, accent:'#f9a8d4',
    bx:[14,27], bz:[128,142], h:6, face:'+x' },
  { id:'garage',  type:'garage',  name:'AUTO SHOP',   sub:'CARS · TUNING',color:0x1e40af, accent:'#7dd3fc',
    bx:[47,61], bz:[150,166], h:8, face:'-x' },
];

function canvasTex(w, h, draw){
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function signTexture(name, sub, accent){
  return canvasTex(512, 128, (g, w, h) => {
    g.fillStyle = '#0b0f1a'; g.fillRect(0, 0, w, h);
    g.strokeStyle = accent; g.lineWidth = 8; g.strokeRect(6, 6, w - 12, h - 12);
    g.fillStyle = accent; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = 'bold 58px sans-serif'; g.fillText(name, w / 2, 52);
    g.fillStyle = '#e2e8f0'; g.font = 'bold 22px sans-serif'; g.fillText(sub, w / 2, 100);
  });
}

function targetTexture(){
  return canvasTex(128, 128, (g, w, h) => {
    const cx = w / 2, cy = h / 2;
    const rings = ['#f8fafc', '#dc2626', '#f8fafc', '#dc2626', '#f8fafc', '#dc2626'];
    rings.forEach((col, i) => {
      g.beginPath(); g.arc(cx, cy, 62 - i * 10, 0, Math.PI * 2);
      g.fillStyle = col; g.fill();
    });
  });
}

export function buildStores(scene, city){
  const stores = [];
  const markers = [];
  const wallMat = new THREE.MeshStandardMaterial({ color:0xd6d3cd, roughness:0.85, envMapIntensity:0.4 });
  const roofMat = new THREE.MeshStandardMaterial({ color:0x2d3138, roughness:0.8 });
  const glassMat = new THREE.MeshStandardMaterial({ color:0x9fd4ff, emissive:0x2a5a80, emissiveIntensity:0.5, roughness:0.15, metalness:0.6 });

  for(const s of SITES){
    const [x0, x1] = s.bx, [z0, z1] = s.bz;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, w = x1 - x0, d = z1 - z0;
    // body
    const body = new THREE.Mesh(new THREE.BoxGeometry(w, s.h, d).translate(0, s.h / 2, 0), wallMat);
    body.position.set(cx, 0.03, cz); body.castShadow = body.receiveShadow = true;
    scene.add(body);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(w + 0.6, 0.5, d + 0.6), roofMat);
    roof.position.set(cx, s.h + 0.25, cz); scene.add(roof);
    // which side faces the road
    const sx = s.face === '-x' ? -1 : 1;
    const frontX = sx < 0 ? x0 : x1;
    // colored awning + storefront glass + sign
    const awn = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.2, d * 0.9),
      new THREE.MeshStandardMaterial({ color:s.color, roughness:0.6 }));
    awn.position.set(frontX + sx * 0.8, 3.3, cz); awn.rotation.z = sx * 0.18; scene.add(awn);
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(d * 0.75, 2.4), glassMat);
    glass.position.set(frontX + sx * 0.02, 1.5, cz); glass.rotation.y = sx * Math.PI / 2; scene.add(glass);
    const signMat = new THREE.MeshStandardMaterial({ map:signTexture(s.name, s.sub, s.accent),
      emissive:0xffffff, emissiveMap:null, emissiveIntensity:0.0, roughness:0.5 });
    signMat.emissiveMap = signMat.map; signMat.emissiveIntensity = 0.55;
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(d * 0.85, d * 0.85 / 4), signMat);
    sign.position.set(frontX + sx * 0.05, s.h - 1.4, cz); sign.rotation.y = sx * Math.PI / 2; scene.add(sign);
    city.colliders.push({ minX:x0, maxX:x1, minZ:z0, maxZ:z1 });

    // door ring on the sidewalk
    const door = { x: frontX + sx * 1.6, z: cz };
    const ringMat = new THREE.MeshBasicMaterial({ color:s.accent, transparent:true, opacity:0.8, depthWrite:false, side:THREE.DoubleSide });
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.9, 1.25, 32).rotateX(-Math.PI / 2), ringMat);
    ring.position.set(door.x, 0.09, door.z); scene.add(ring);
    const beamMat = new THREE.MeshBasicMaterial({ color:s.accent, transparent:true, opacity:0.18, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.05, 1.05, 3.2, 24, 1, true), beamMat);
    beam.position.set(door.x, 1.6, door.z); scene.add(beam);
    markers.push({ ring, ringMat, beamMat });
    stores.push({ id:s.id, type:s.type, name:s.name, door, color:s.accent });
  }

  // ---------- shooting range (south of the gun store) ----------
  const range = buildRange(scene, city);

  let t = 0;
  function update(dt){
    t += dt;
    const p = 0.55 + Math.sin(t * 3) * 0.25;
    for(const m of markers){ m.ringMat.opacity = p + 0.2; m.beamMat.opacity = p * 0.3; m.ring.rotation.y += dt * 0.8; }
    range.update(dt);
  }

  return { stores, targets: range.targets, update, rangeArea: range.area };
}

function buildRange(scene, city){
  const X0 = 47, X1 = 101, Z0 = 70, Z1 = 86;
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(X1 - X0, Z1 - Z0).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color:0x8a7a62, roughness:0.95 }));
  floor.position.set((X0 + X1) / 2, 0.04, (Z0 + Z1) / 2); floor.receiveShadow = true; scene.add(floor);
  const wallMat = new THREE.MeshStandardMaterial({ color:0x6b7280, roughness:0.9 });
  const walls = [
    { minX:X0, maxX:X1, minZ:Z0 - 0.5, maxZ:Z0, h:2.2 },          // north side
    { minX:X0, maxX:X1, minZ:Z1, maxZ:Z1 + 0.5, h:2.2 },          // south side
    { minX:X1, maxX:X1 + 1.5, minZ:Z0 - 0.5, maxZ:Z1 + 0.5, h:5 },  // backstop
  ];
  for(const w of walls){
    const m = new THREE.Mesh(new THREE.BoxGeometry(w.maxX - w.minX, w.h, w.maxZ - w.minZ).translate(0, w.h / 2, 0), wallMat);
    m.position.set((w.minX + w.maxX) / 2, 0.03, (w.minZ + w.maxZ) / 2);
    m.castShadow = m.receiveShadow = true; scene.add(m);
    city.colliders.push({ minX:w.minX, maxX:w.maxX, minZ:w.minZ, maxZ:w.maxZ });
  }
  // firing-line stripe
  const line = new THREE.Mesh(new THREE.PlaneGeometry(0.3, Z1 - Z0 - 1).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ color:0xffd23f }));
  line.position.set(X0 + 4, 0.06, (Z0 + Z1) / 2); scene.add(line);

  const tex = targetTexture();
  const boardMat = new THREE.MeshStandardMaterial({ map:tex, roughness:0.6, side:THREE.DoubleSide });
  const postMat = new THREE.MeshStandardMaterial({ color:0x3f3f46, roughness:0.7 });
  const spots = [[66, 74], [74, 82], [83, 76.5], [92, 81], [97, 73.5]];
  const targets = spots.map(([x, z]) => {
    const pivot = new THREE.Group();
    pivot.position.set(x, 0.04, z);
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.1, 0.08).translate(0, 0.55, 0), postMat);
    const board = new THREE.Mesh(new THREE.CircleGeometry(0.55, 24), boardMat);
    board.position.y = 1.5; board.rotation.y = -Math.PI / 2;   // faces the firing line (-X)
    board.castShadow = true;
    pivot.add(post, board);
    scene.add(pivot);
    return { x, z, r:0.6, up:true, timer:0, fall:0, pivot };
  });

  function update(dt){
    for(const t of targets){
      if(!t.up){
        t.fall = Math.min(1, t.fall + dt * 6);
        t.timer -= dt;
        if(t.timer <= 0){ t.up = true; }
      }else if(t.fall > 0){
        t.fall = Math.max(0, t.fall - dt * 4);
      }
      t.pivot.rotation.z = t.fall * (Math.PI / 2 - 0.05);   // tips over backwards (+X)
      t.pivot.rotation.z *= -1;
    }
  }
  return { targets, update, area:{ minX:X0, maxX:X1, minZ:Z0, maxZ:Z1 } };
}

// knock a target down; it pops back up after a few seconds
export function hitTarget(t){
  if(!t.up) return false;
  t.up = false; t.timer = 3.0;
  return true;
}
