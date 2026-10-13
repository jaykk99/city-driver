// CITY DRIVER — building interiors. Every city building can be entered.
// Interiors are real rooms built (lazily, once per style) out past the city
// edge, so they never overlap the street. Walking into the glowing EXIT pad
// puts you back on the sidewalk outside the door you came in.
import * as THREE from 'three';

export const STYLES = ['lobby', 'apartment', 'office', 'diner'];
export const STYLE_NAMES = { lobby:'LOBBY', apartment:'APARTMENT', office:'OFFICE', diner:'DINER' };
const ROOM_W = 22, ROOM_D = 16, ROOM_H = 4.6, WALL = 0.3;
const BASE_Z = -1750;     // far past the skyline ring, out of sight

export const styleFor = (buildingId) => STYLES[((buildingId * 2654435761) >>> 0) % STYLES.length];
export function roomOrigin(style){ return { x: (STYLES.indexOf(style) - 1.5) * 90, z: BASE_Z }; }

function canvasTex(w, h, draw, rep){
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if(rep){ t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
  return t;
}
// matte materials with a little self-light so rooms stay readable at night
const mat = (color, extra = {}) => new THREE.MeshStandardMaterial(Object.assign(
  { color, roughness:0.8, metalness:0.05, emissive:color, emissiveIntensity:0.18 }, extra));

const FLOORS = {
  lobby:     g => { for(let y=0;y<8;y++) for(let x=0;x<8;x++){ g.fillStyle=(x+y)%2?'#e9e4da':'#b9b2a5'; g.fillRect(x*16,y*16,16,16);} },
  apartment: g => { for(let i=0;i<8;i++){ g.fillStyle=i%2?'#9a6a3e':'#a8754a'; g.fillRect(0,i*16,128,16); g.fillStyle='#7a5230'; g.fillRect((i*37)%128,i*16,2,16);} },
  office:    g => { g.fillStyle='#5b6472'; g.fillRect(0,0,128,128); g.fillStyle='#525a67'; for(let i=0;i<128;i+=32){ g.fillRect(i,0,1,128); g.fillRect(0,i,128,1);} },
  diner:     g => { for(let y=0;y<8;y++) for(let x=0;x<8;x++){ g.fillStyle=(x+y)%2?'#f2f2f2':'#1a1a1a'; g.fillRect(x*16,y*16,16,16);} },
};
const WALLS = { lobby:0xd8d2c4, apartment:0xc9d6c3, office:0xdfe5ec, diner:0xf2c3b5 };

export function createInteriors(scene){
  const built = new Map();

  function build(style){
    if(built.has(style)) return built.get(style);
    const O = roomOrigin(style);
    const group = new THREE.Group();
    group.position.set(O.x, 0, O.z);
    const colliders = [];
    const W2 = ROOM_W / 2, D2 = ROOM_D / 2;
    // local AABB -> world collider
    const solid = (minX, maxX, minZ, maxZ) => colliders.push({ minX:O.x+minX, maxX:O.x+maxX, minZ:O.z+minZ, maxZ:O.z+maxZ });
    const add = (geo, m, x, y, z, ry = 0, cast = true) => {
      const mesh = new THREE.Mesh(geo, m);
      mesh.position.set(x, y, z); mesh.rotation.y = ry;
      mesh.castShadow = cast; mesh.receiveShadow = true;
      group.add(mesh); return mesh;
    };
    const boxAt = (w, h, d, m, x, z, y = 0, isSolid = true) => {
      add(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0), m, x, y, z);
      if(isSolid) solid(x - w / 2, x + w / 2, z - d / 2, z + d / 2);
    };

    // shell: floor, ceiling, 4 walls (thin boxes so bullets/feet stop on them)
    const floorTex = canvasTex(128, 128, FLOORS[style], [ROOM_W / 4, ROOM_D / 4]);
    add(new THREE.PlaneGeometry(ROOM_W, ROOM_D).rotateX(-Math.PI / 2), mat(0xffffff, { map:floorTex, emissiveMap:floorTex, emissiveIntensity:0.2 }), 0, 0.02, 0, 0, false);
    add(new THREE.PlaneGeometry(ROOM_W, ROOM_D).rotateX(Math.PI / 2), mat(0xf4f4f0, { emissiveIntensity:0.5 }), 0, ROOM_H, 0, 0, false);
    const wm = mat(WALLS[style], { side:THREE.DoubleSide });
    const wall = (w, d, x, z) => { add(new THREE.BoxGeometry(w, ROOM_H, d).translate(0, ROOM_H / 2, 0), wm, x, 0, z, 0, false); solid(x - w / 2, x + w / 2, z - d / 2, z + d / 2); };
    wall(ROOM_W + WALL * 2, WALL, 0, -D2 - WALL / 2);
    wall(ROOM_W + WALL * 2, WALL, 0, D2 + WALL / 2);
    wall(WALL, ROOM_D, -W2 - WALL / 2, 0);
    wall(WALL, ROOM_D, W2 + WALL / 2, 0);
    // ceiling light panels (bright emissive — bloom makes them glow)
    const lightM = new THREE.MeshStandardMaterial({ color:0xffffff, emissive:0xfff4dc, emissiveIntensity:2.2 });
    for(const lx of [-6, 0, 6]) for(const lz of [-4, 4]) add(new THREE.PlaneGeometry(2.4, 0.9).rotateX(Math.PI / 2), lightM, lx, ROOM_H - 0.02, lz, 0, false);
    // skirting + a window strip on the back wall
    const winTex = canvasTex(256, 64, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#7fb2ee'); gr.addColorStop(1, '#cfe6f7');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
      g.fillStyle = '#3b4656'; for(let x = 0; x < w; x += 64) g.fillRect(x, 0, 4, h); g.fillRect(0, 0, w, 4); g.fillRect(0, h - 4, w, 4);
    });
    add(new THREE.PlaneGeometry(14, 1.6), new THREE.MeshBasicMaterial({ map:winTex }), 0, 2.6, -D2 + 0.01, 0, false);

    // exit door on the front wall (+z) with a glowing pad
    const doorTex = canvasTex(64, 96, (g, w, h) => {
      g.fillStyle = '#20262f'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#4ade80'; g.fillRect(0, 0, w, 6); g.fillRect(0, 0, 5, h); g.fillRect(w - 5, 0, 5, h);
      g.fillStyle = '#9fd4ff'; g.fillRect(9, 12, w - 18, h - 20);
      g.fillStyle = '#16a34a'; g.font = 'bold 14px sans-serif'; g.textAlign = 'center'; g.fillText('EXIT', w / 2, 40);
    });
    add(new THREE.PlaneGeometry(2.2, 3).translate(0, 1.5, 0), new THREE.MeshStandardMaterial({ map:doorTex, emissive:0xffffff, emissiveMap:doorTex, emissiveIntensity:0.6 }), 0, 0, D2 - 0.02, Math.PI, false);
    const padMat = new THREE.MeshBasicMaterial({ color:0x4ade80, transparent:true, opacity:0.7, depthWrite:false, side:THREE.DoubleSide });
    const pad = add(new THREE.RingGeometry(0.75, 1.05, 32).rotateX(-Math.PI / 2), padMat, 0, 0.05, D2 - 1.6, 0, false);

    furnish(style, { add, boxAt, mat, W2, D2, group, solid });

    scene.add(group);
    const room = {
      style, group, colliders, pad, padMat,
      spawn: { x:O.x, z:O.z + D2 - 3.2, heading:0 },           // facing into the room (-Z)
      exit: { x:O.x, z:O.z + D2 - 1.6 },
      bounds: { minX:O.x - W2, maxX:O.x + W2, minZ:O.z - D2, maxZ:O.z + D2 },
    };
    built.set(style, room);
    return room;
  }

  // ---------- loot: cash stacks (and the odd safe) hidden around the room ----------
  const cashMat = new THREE.MeshStandardMaterial({ color:0x3f8f3a, roughness:0.6, emissive:0x1f5a1a, emissiveIntensity:0.6 });
  const bandMat = new THREE.MeshStandardMaterial({ color:0xf2e7c4, roughness:0.6 });
  const safeMat = new THREE.MeshStandardMaterial({ color:0x4b5563, metalness:0.7, roughness:0.35 });
  const glowMat = new THREE.MeshBasicMaterial({ color:0x4ade80, transparent:true, opacity:0.5, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
  const loot = [];
  function clearLoot(){ for(const l of loot) scene.remove(l.mesh); loot.length = 0; }
  function spawnLoot(room, items){
    clearLoot();
    for(const it of items){
      const g = new THREE.Group();
      if(it.kind === 'safe'){
        g.add(new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.8, 0.65).translate(0, 0.4, 0), safeMat));
        const dial = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.04, 14).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color:0xd4d4d8, metalness:1, roughness:0.2 }));
        dial.position.set(0, 0.45, 0.34); g.add(dial);
      }else{
        for(let k = 0; k < 3; k++){
          const st = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.09, 0.17), cashMat);
          st.position.set((k - 1) * 0.12, 0.05 + (k % 2) * 0.09, (k % 2) * 0.05); st.rotation.y = k * 0.3; g.add(st);
          const band = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.095, 0.175), bandMat); band.position.copy(st.position); band.rotation.y = st.rotation.y; g.add(band);
        }
      }
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.62, 24).rotateX(-Math.PI / 2), glowMat); ring.position.y = 0.04; g.add(ring);
      g.position.set(it.x, 0.02, it.z);
      scene.add(g);
      loot.push({ mesh:g, x:it.x, z:it.z, amount:it.amount, kind:it.kind, got:false });
    }
  }
  // pick random free floor spots in a room
  function lootSpots(room, count){
    const out = [], bd = room.bounds;
    for(let tries = 0; tries < 200 && out.length < count; tries++){
      const x = bd.minX + 1.2 + Math.random() * (bd.maxX - bd.minX - 2.4), z = bd.minZ + 1.2 + Math.random() * (bd.maxZ - bd.minZ - 2.4);
      if(Math.hypot(x - room.spawn.x, z - room.spawn.z) < 2.5) continue;
      let ok = true;
      for(const c of room.colliders){ if(x > c.minX - 0.7 && x < c.maxX + 0.7 && z > c.minZ - 0.7 && z < c.maxZ + 0.7){ ok = false; break; } }
      for(const o of out) if(Math.hypot(o.x - x, o.z - z) < 2) ok = false;
      if(ok) out.push({ x, z });
    }
    return out;
  }

  let t = 0;
  function update(dt, room){
    t += dt;
    if(room){ room.padMat.opacity = 0.5 + Math.sin(t * 4) * 0.25; room.pad.rotation.y += dt; }
    glowMat.opacity = 0.35 + Math.sin(t * 5) * 0.2;
    for(const l of loot) if(!l.got && l.kind !== 'safe') l.mesh.rotation.y += dt * 1.2;
  }
  // returns the loot item picked up at (x,z), or null
  function grab(x, z){
    for(const l of loot){
      if(l.got) continue;
      if(Math.hypot(l.x - x, l.z - z) < (l.kind === 'safe' ? 1.4 : 1.0)){ l.got = true; scene.remove(l.mesh); return l; }
    }
    return null;
  }
  return { get:build, update, spawnLoot, clearLoot, lootSpots, grab };
}

// ---------- furniture per style ----------
function furnish(style, k){
  const { add, boxAt, mat, W2, D2 } = k;
  const wood = mat(0x7a5230), dark = mat(0x22252b), white = mat(0xf2f2f2), metal = mat(0x9aa3ad, { metalness:0.7, roughness:0.35 });
  const plant = (x, z) => {
    boxAt(0.6, 0.6, 0.6, mat(0x8a5a3a), x, z);
    add(new THREE.SphereGeometry(0.6, 10, 8), mat(0x3e7a34), x, 1.15, z);
  };
  // sofa group added straight to the room; returns its footprint [minX,maxX,minZ,maxZ]
  const sofa = (x, z, ry, color) => {
    const m = mat(color);
    const g = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.45, 1).translate(0, 0.22, 0), m);
    const back = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.6, 0.25).translate(0, 0.75, 0.38), m);
    const armL = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.65, 1).translate(-1.3, 0.32, 0), m);
    const armR = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.65, 1).translate(1.3, 0.32, 0), m);
    g.add(seat, back, armL, armR);
    g.traverse(o => { if(o.isMesh){ o.castShadow = true; o.receiveShadow = true; } });
    g.position.set(x, 0, z); g.rotation.y = ry;
    k.group.add(g);
    const sw = Math.abs(Math.sin(ry)) > 0.5;
    return sw ? [x - 0.6, x + 0.6, z - 1.4, z + 1.4] : [x - 1.4, x + 1.4, z - 0.6, z + 0.6];
  };
  const solidBox = (b) => k.solid(b[0], b[1], b[2], b[3]);

  if(style === 'lobby'){
    // reception desk, couches, elevators, plants
    boxAt(5, 1.1, 1.2, wood, 0, -2.5);
    boxAt(5.2, 0.08, 1.4, white, 0, -2.5, 1.1, false);
    const elevM = mat(0xb8bec6, { metalness:0.85, roughness:0.25, emissiveIntensity:0.1 });
    for(const ex of [-6, -2, 2, 6]){
      add(new THREE.PlaneGeometry(2, 3).translate(0, 1.5, 0), elevM, ex, 0, -D2 + 0.02, 0, false);
      add(new THREE.PlaneGeometry(0.4, 0.2), new THREE.MeshBasicMaterial({ color:0xff8c1a }), ex, 3.3, -D2 + 0.03, 0, false);
    }
    solidBox(sofa(-7, 2, Math.PI / 2, 0x1e3a8a));
    solidBox(sofa(7, 2, -Math.PI / 2, 0x1e3a8a));
    boxAt(1.4, 0.4, 0.8, wood, -5, 2);
    boxAt(1.4, 0.4, 0.8, wood, 5, 2);
    plant(-W2 + 1, D2 - 1); plant(W2 - 1, D2 - 1); plant(-W2 + 1, -D2 + 1.5); plant(W2 - 1, -D2 + 1.5);
  }else if(style === 'apartment'){
    // living room + kitchen + bed
    solidBox(sofa(-3, 1.5, Math.PI, 0x7c3aed));
    boxAt(1.8, 0.4, 0.9, wood, -3, -0.5);
    boxAt(3, 0.5, 0.4, dark, -3, -D2 + 0.4);                                 // tv stand
    add(new THREE.PlaneGeometry(2.6, 1.5), new THREE.MeshStandardMaterial({ color:0x111111, emissive:0x2a6fd6, emissiveIntensity:0.9 }), -3, 1.6, -D2 + 0.45, 0, false);
    boxAt(6, 0.95, 0.8, white, 6, -D2 + 0.5);                                // kitchen counter
    boxAt(0.9, 2, 0.8, metal, W2 - 0.6, -D2 + 0.5);                          // fridge
    boxAt(2.2, 0.75, 1.1, wood, 5, -2);                                      // dining table
    for(const cx of [4.2, 5.8]) for(const cz of [-3.1, -0.9]) boxAt(0.45, 0.5, 0.45, dark, cx, cz);
    boxAt(2.2, 0.55, 3, mat(0xf2f2f2), W2 - 1.4, 3.5);                        // bed
    boxAt(2.2, 0.25, 2.2, mat(0x38bdf8), W2 - 1.4, 3.9, 0.55, false);
    boxAt(2.2, 1, 0.2, wood, W2 - 1.4, D2 - 3, 0, false);
    plant(-W2 + 1, D2 - 1);
  }else if(style === 'office'){
    // rows of desks with glowing monitors
    const screenM = new THREE.MeshStandardMaterial({ color:0x0b1220, emissive:0x38bdf8, emissiveIntensity:0.9 });
    for(const dx of [-7, -2.5, 2.5, 7]) for(const dz of [-4.5, 0.5]){
      boxAt(3, 0.75, 1.3, white, dx, dz);
      add(new THREE.BoxGeometry(0.9, 0.55, 0.06).translate(0, 0.28, 0), screenM, dx, 0.8, dz - 0.3);
      boxAt(0.55, 0.5, 0.55, dark, dx, dz + 1.1);
    }
    boxAt(6, 0.75, 1.6, wood, 0, 4.6);                                        // meeting table
    add(new THREE.PlaneGeometry(5, 2.2), new THREE.MeshStandardMaterial({ color:0xffffff, emissive:0xffffff, emissiveIntensity:0.3 }), -W2 + 0.02, 2, 2, Math.PI / 2, false);
    plant(W2 - 1, D2 - 1); plant(-W2 + 1, D2 - 1);
  }else{
    // diner: counter with stools, booths, neon
    boxAt(10, 1.05, 1, mat(0xd7263d), 2, -D2 + 3);
    boxAt(10.2, 0.08, 1.2, white, 2, -D2 + 3, 1.05, false);
    for(let i = 0; i < 6; i++){
      add(new THREE.CylinderGeometry(0.28, 0.28, 0.12, 12).translate(0, 0.75, 0), mat(0xd7263d), -2 + i * 1.7, 0, -D2 + 4.3);
      boxAt(0.12, 0.7, 0.12, metal, -2 + i * 1.7, -D2 + 4.3, 0, false);
    }
    for(const bz of [-1, 3]){
      boxAt(2.4, 0.75, 1.1, white, -6.5, bz);
      boxAt(2.4, 1.1, 0.5, mat(0xd7263d), -6.5, bz - 1.1);
      boxAt(2.4, 1.1, 0.5, mat(0xd7263d), -6.5, bz + 1.1);
    }
    const neon = new THREE.MeshStandardMaterial({ color:0xff2e63, emissive:0xff2e63, emissiveIntensity:2.5 });
    add(new THREE.BoxGeometry(8, 0.12, 0.06), neon, 2, 3.4, -D2 + 0.05, 0, false);
    add(new THREE.BoxGeometry(8, 0.12, 0.06), new THREE.MeshStandardMaterial({ color:0x22e6ff, emissive:0x22e6ff, emissiveIntensity:2.5 }), 2, 3.1, -D2 + 0.05, 0, false);
    boxAt(1, 1.8, 0.7, mat(0x1f6feb), W2 - 0.8, 2);                            // jukebox
    plant(W2 - 1, D2 - 1);
  }
}
