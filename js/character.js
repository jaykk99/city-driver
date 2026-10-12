// CITY DRIVER — procedural on-foot character + held weapons.
// Faces -Z like the cars. Origin at the feet.
import * as THREE from 'three';

const skinMat  = () => new THREE.MeshStandardMaterial({ color:0xc68a62, roughness:0.75 });
const pantsMat = () => new THREE.MeshStandardMaterial({ color:0x2d3748, roughness:0.85 });
const shoeMat  = () => new THREE.MeshStandardMaterial({ color:0x111111, roughness:0.6 });
const hairMat  = () => new THREE.MeshStandardMaterial({ color:0x2a1a10, roughness:0.9 });
const gunMat   = () => new THREE.MeshStandardMaterial({ color:0x1d1f23, metalness:0.7, roughness:0.35 });

function box(w, h, d, mat, y=0){
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(0, y, 0);
  const m = new THREE.Mesh(g, mat);
  m.castShadow = true;
  return m;
}

// weapon meshes, built along -Z (barrel forward), grip at origin
function buildGun(id){
  const g = new THREE.Group();
  const m = gunMat();
  const accent = new THREE.MeshStandardMaterial({ color:0x6b4a2e, roughness:0.8 });
  if(id === 'pistol'){
    g.add(box(0.06, 0.08, 0.24, m, 0.05).translateZ(-0.08));
    g.add(box(0.05, 0.12, 0.06, m, -0.02));
  }else if(id === 'shotgun'){
    g.add(box(0.07, 0.07, 0.75, m, 0.05).translateZ(-0.28));
    g.add(box(0.08, 0.09, 0.22, accent, 0.0).translateZ(-0.38));
    g.add(box(0.07, 0.12, 0.3, accent, 0.0).translateZ(0.18));
  }else if(id === 'smg'){
    g.add(box(0.07, 0.11, 0.42, m, 0.05).translateZ(-0.12));
    g.add(box(0.05, 0.2, 0.06, m, -0.08).translateZ(-0.06));
    g.add(box(0.04, 0.04, 0.12, m, 0.07).translateZ(-0.38));
  }else{ // rifle
    g.add(box(0.07, 0.11, 0.7, m, 0.05).translateZ(-0.22));
    g.add(box(0.05, 0.18, 0.07, m, -0.07).translateZ(-0.12));
    g.add(box(0.06, 0.13, 0.26, m, 0.02).translateZ(0.24));
    g.add(box(0.05, 0.05, 0.2, m, 0.14).translateZ(-0.15));
  }
  g.traverse(o => { if(o.isMesh) o.castShadow = true; });
  return g;
}

function buildHat(id, shirtHex){
  if(id === 'cap'){
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color:shirtHex, roughness:0.7 });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 8, 0, Math.PI*2, 0, Math.PI/2), mat);
    g.add(dome);
    const brim = box(0.24, 0.02, 0.14, mat); brim.position.set(0, 0.01, -0.15); g.add(brim);
    return g;
  }
  if(id === 'beanie'){
    const mat = new THREE.MeshStandardMaterial({ color:0x22252b, roughness:0.95 });
    return new THREE.Mesh(new THREE.SphereGeometry(0.158, 14, 8, 0, Math.PI*2, 0, Math.PI/1.8), mat);
  }
  if(id === 'cowboy'){
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color:0x8b5a2b, roughness:0.85 });
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 20), mat);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.17, 14), mat);
    crown.position.y = 0.09;
    g.add(brim, crown);
    return g;
  }
  return null;
}

export function buildCharacter(outfit){
  const root = new THREE.Group();
  const skin = skinMat(), pants = pantsMat(), shoes = shoeMat();
  const shirt = new THREE.MeshStandardMaterial({ color:outfit.shirt, roughness:0.8 });

  const legs = [], arms = [];
  for(const s of [-1, 1]){
    const hip = new THREE.Group();
    hip.position.set(s*0.12, 0.92, 0);
    hip.add(box(0.17, 0.84, 0.2, pants, -0.42));
    const shoe = box(0.17, 0.09, 0.3, shoes, -0.88); shoe.position.z = -0.04; hip.add(shoe);
    root.add(hip); legs.push(hip);

    const sh = new THREE.Group();
    sh.position.set(s*0.33, 1.5, 0);
    sh.add(box(0.13, 0.36, 0.15, shirt, -0.17));          // sleeve
    sh.add(box(0.11, 0.3, 0.12, skin, -0.5));             // forearm
    const hand = box(0.1, 0.1, 0.1, skin, -0.69); sh.add(hand);
    root.add(sh); arms.push(sh);
  }
  const torso = box(0.52, 0.62, 0.27, shirt, 1.23);
  root.add(torso);
  const belt = box(0.53, 0.06, 0.28, shoes, 0.93); root.add(belt);
  const neck = box(0.12, 0.08, 0.12, skin, 1.57); root.add(neck);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 12), skin);
  head.position.y = 1.74; head.scale.set(1, 1.12, 1); head.castShadow = true;
  root.add(head);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 8, 0, Math.PI*2, 0, Math.PI/2.2), hairMat());
  hair.position.y = 1.76; root.add(hair);

  const hatSlot = new THREE.Group(); hatSlot.position.y = 1.8; root.add(hatSlot);
  const gunSlot = new THREE.Group(); gunSlot.position.y = -0.69; arms[1].add(gunSlot);  // right hand

  root.userData = { legs, arms, shirt, hatSlot, gunSlot, gunId:null, hatId:null, recoil:0 };
  setOutfit(root, outfit);
  return root;
}

export function setOutfit(root, outfit){
  const u = root.userData;
  u.shirt.color.setHex(outfit.shirt);
  if(u.hatId !== outfit.hat){
    u.hatSlot.clear();
    const hat = buildHat(outfit.hat, outfit.shirt);
    if(hat) u.hatSlot.add(hat);
    u.hatId = outfit.hat;
  }
}

export function setHeldWeapon(root, id){
  const u = root.userData;
  if(u.gunId === id) return;
  u.gunSlot.clear();
  if(id){
    const gun = buildGun(id);
    gun.rotation.x = -Math.PI/2;     // barrel along the arm, so it points forward when the arm is raised
    u.gunSlot.add(gun);
  }
  u.gunId = id;
}

// speed: signed m/s, phase: walk cycle, aiming: arm raised
export function animateCharacter(root, phase, speed, aiming, dt){
  const u = root.userData;
  const amp = Math.min(1, Math.abs(speed) / 4) * 0.75;
  const s = Math.sin(phase);
  u.legs[0].rotation.x =  s * amp;
  u.legs[1].rotation.x = -s * amp;
  u.arms[0].rotation.x = -s * amp * 0.8;
  u.recoil = Math.max(0, u.recoil - dt * 8);
  if(aiming){
    u.arms[1].rotation.x = Math.PI/2 - 0.05 + u.recoil * 0.35;   // arm pointing forward
    u.arms[1].rotation.z = 0.12;
    if(u.gunId !== 'pistol'){ u.arms[0].rotation.x = Math.PI/2 - 0.35; u.arms[0].rotation.z = -0.5; }
    else u.arms[0].rotation.z = 0;
  }else{
    u.arms[1].rotation.x = s * amp * 0.8;
    u.arms[1].rotation.z = 0;
    u.arms[0].rotation.z = 0;
  }
  // little bob while moving
  root.position.y = Math.abs(Math.cos(phase)) * amp * 0.05;
}

export function kickRecoil(root){ root.userData.recoil = 1; }
