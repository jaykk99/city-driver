// CITY DRIVER — on-foot people: sculpted, jointed bodies (hips/spine/neck/head, shoulders/elbows,
// hips/knees) with eased locomotion, aiming with up/down pitch, reaction poses (cower, hands up, flinch,
// panic, hurt), hit flinches and a buckle-and-topple death. Plus held weapons and hats.
// Faces -Z like the cars. Origin at the feet.
import * as THREE from 'three';
import { RoundedBoxGeometry as RoundedBox } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const gunMat   = () => new THREE.MeshStandardMaterial({ color:0x1d1f23, metalness:0.7, roughness:0.35 });

function box(w, h, d, mat, y=0){
  const g = new RoundedBox(w, h, d, 1, Math.min(w, h, d) * 0.18);
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
  }else if(id === 'glock' || id === 'deagle'){
    const big = id === 'deagle';
    g.add(box(big ? 0.07 : 0.06, big ? 0.09 : 0.075, big ? 0.3 : 0.22, m, 0.05).translateZ(-0.08));
    g.add(box(0.05, 0.13, 0.065, id === 'deagle' ? accent : m, -0.03));
  }else if(id === 'sniper'){
    g.add(box(0.06, 0.1, 0.95, m, 0.05).translateZ(-0.3));
    g.add(box(0.045, 0.045, 0.32, m, 0.14).translateZ(-0.12));          // scope
    g.add(box(0.06, 0.13, 0.3, accent, 0.0).translateZ(0.3));
  }else if(id === 'minigun'){
    for(let i = 0; i < 6; i++){
      const a = i / 6 * Math.PI * 2;
      g.add(box(0.03, 0.03, 0.8, m, 0.05 + Math.sin(a) * 0.06).translateX(Math.cos(a) * 0.06).translateZ(-0.35));
    }
    g.add(box(0.2, 0.2, 0.3, m, 0.05).translateZ(0.05));
  }else if(id === 'ak'){
    g.add(box(0.07, 0.11, 0.72, m, 0.05).translateZ(-0.22));
    const mag = box(0.06, 0.2, 0.08, m, -0.1).translateZ(-0.18); mag.rotation.x = 0.35; g.add(mag);   // curved mag
    g.add(box(0.06, 0.12, 0.28, accent, 0.02).translateZ(0.26));
    g.add(box(0.07, 0.06, 0.24, accent, 0.0).translateZ(-0.38));
  }else{ // rifle
    g.add(box(0.07, 0.11, 0.7, m, 0.05).translateZ(-0.22));
    g.add(box(0.05, 0.18, 0.07, m, -0.07).translateZ(-0.12));
    g.add(box(0.06, 0.13, 0.26, m, 0.02).translateZ(0.24));
    g.add(box(0.05, 0.05, 0.2, m, 0.14).translateZ(-0.15));
  }
  g.traverse(o => { if(o.isMesh) o.castShadow = true; });
  return g;
}

function buildHat(id, hatHex){
  if(id === 'crown'){
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color:0xffd23f, metalness:1, roughness:0.25, emissive:0x3a2a00 });
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.09, 16, 1, true), mat);
    band.material.side = THREE.DoubleSide; band.position.y = 0.02; g.add(band);
    for(let i = 0; i < 6; i++){
      const a = i / 6 * Math.PI * 2;
      const sp = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.09, 4), mat);
      sp.position.set(Math.cos(a) * 0.155, 0.1, Math.sin(a) * 0.155); g.add(sp);
      const gem = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 6), new THREE.MeshStandardMaterial({ color:hatHex, emissive:hatHex, emissiveIntensity:0.6 }));
      gem.position.set(Math.cos(a + 0.5) * 0.162, 0.02, Math.sin(a + 0.5) * 0.162); g.add(gem);
    }
    return g;
  }
  if(id === 'helmet'){
    const g = new THREE.Group();
    const mat = new THREE.MeshPhysicalMaterial({ color:hatHex, metalness:0.4, roughness:0.25, clearcoat:1 });
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12, 0, Math.PI*2, 0, Math.PI/1.7), mat);
    shell.position.y = -0.06; g.add(shell);
    const visor = new THREE.Mesh(new THREE.SphereGeometry(0.205, 16, 8, Math.PI*1.2, Math.PI*0.6, Math.PI*0.35, Math.PI*0.25),
      new THREE.MeshStandardMaterial({ color:0x0b0f1a, metalness:0.9, roughness:0.1 }));
    visor.position.y = -0.06; g.add(visor);
    return g;
  }
  if(id === 'cap'){
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color:hatHex, roughness:0.7 });
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.155, 14, 8, 0, Math.PI*2, 0, Math.PI/2), mat);
    g.add(dome);
    const brim = box(0.24, 0.02, 0.14, mat); brim.position.set(0, 0.01, -0.15); g.add(brim);
    return g;
  }
  if(id === 'beanie'){
    const mat = new THREE.MeshStandardMaterial({ color:hatHex, roughness:0.95 });
    return new THREE.Mesh(new THREE.SphereGeometry(0.158, 14, 8, 0, Math.PI*2, 0, Math.PI/1.8), mat);
  }
  if(id === 'cowboy'){
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color:hatHex, roughness:0.85 });
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.02, 20), mat);
    const crown = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.15, 0.17, 14), mat);
    crown.position.y = 0.09;
    g.add(brim, crown);
    return g;
  }
  return null;
}

// ---------------------------------------------------------------- body geometry (shared by every person)
// Sculpted, jointed human: lathed torso and tapered limbs, a head with jaw, nose, ears, eyes and brows,
// hands with thumbs, shaped sneakers. Hips -> spine -> neck -> head, shoulders -> elbows, hips -> knees.
// Geometry is built once and shared; each person only owns its (recolorable) materials.
const V2 = THREE.Vector2;
function lathe(points, seg = 14){ return new THREE.LatheGeometry(points.map(([r, y]) => new V2(Math.max(0, r), y)), seg); }
// tapered capsule hanging down from the joint: radius r0 at the joint, r1 at the far end, length len
function limb(r0, r1, len, seg = 12, sx = 1, sz = 1){
  const pts = [];
  for(let k = 0; k <= 4; k++){ const a = (k / 4) * Math.PI / 2; pts.push([Math.sin(a) * r0, Math.cos(a) * r0 * 0.8]); }
  for(let k = 1; k <= 5; k++){ const t = k / 5; const bulge = Math.sin(t * Math.PI) * (r0 - r1) * 0.25; pts.push([r0 + (r1 - r0) * t + bulge, -len * t]); }
  for(let k = 1; k <= 4; k++){ const a = (k / 4) * Math.PI / 2; pts.push([Math.cos(a) * r1, -len - Math.sin(a) * r1 * 0.8]); }
  const g = lathe(pts.reverse().map(([r, y]) => [r, y]), seg).scale(sx, 1, sz);
  return g;
}
function ell(rx, ry, rz, ws = 16, hs = 12){ return new THREE.SphereGeometry(1, ws, hs).scale(rx, ry, rz); }
const T = (g, x, y, z) => g.translate(x, y, z);
const merge = list => mergeGeometries(list.map(g => { g = g.index ? g.toNonIndexed() : g; for(const k of Object.keys(g.attributes)) if(k !== 'position' && k !== 'normal') g.deleteAttribute(k); return g; }), false);

let GEO = null;
function bodyGeo(){
  if(GEO) return GEO;
  // torso (shirt): waist -> chest -> shoulders, a bit flatter front-to-back
  const torso = lathe([[0, -0.02], [0.13, 0.0], [0.136, 0.07], [0.148, 0.17], [0.168, 0.27], [0.18, 0.34], [0.176, 0.39], [0.15, 0.43], [0.09, 0.46], [0.0, 0.47]], 18).scale(1.1, 1, 0.64);
  const collar = new THREE.TorusGeometry(0.062, 0.016, 6, 16).rotateX(Math.PI / 2).translate(0, 0.455, 0.0);
  const chest = ell(0.16, 0.1, 0.08).translate(0, 0.32, -0.035);           // pecs / bust volume
  const shirt = merge([torso, collar, chest]);
  // pelvis (pants) + belt line
  const pelvis = merge([ell(0.16, 0.11, 0.105).translate(0, -0.02, 0.0), lathe([[0.14, -0.03], [0.142, 0.06], [0.133, 0.1]], 18).scale(1.08, 1, 0.68)]);
  const belt = new THREE.TorusGeometry(0.136, 0.014, 5, 22).rotateX(Math.PI / 2).scale(1.08, 1, 0.68).translate(0, 0.085, 0);
  // head: cranium + jaw + nose + ears + neck (skin)
  const head = merge([
    ell(0.098, 0.118, 0.108).translate(0, 0.0, 0.005),
    ell(0.078, 0.07, 0.085).translate(0, -0.05, -0.022),                      // jaw / chin
    new THREE.ConeGeometry(0.018, 0.05, 6).rotateX(-Math.PI / 2 - 0.35).translate(0, -0.012, -0.112), // nose
    ell(0.016, 0.03, 0.022).translate(-0.098, -0.005, 0.01), ell(0.016, 0.03, 0.022).translate(0.098, -0.005, 0.01), // ears
    new THREE.CylinderGeometry(0.048, 0.056, 0.11, 12).translate(0, -0.12, 0.01),                                // neck
  ]);
  const eyes = merge([ell(0.0105, 0.0105, 0.008).translate(-0.034, 0.012, -0.101), ell(0.0105, 0.0105, 0.008).translate(0.034, 0.012, -0.101),
    ell(0.022, 0.0035, 0.006).translate(0, -0.06, -0.094)]);        // pupils + mouth line
  const brows = merge([new THREE.BoxGeometry(0.032, 0.006, 0.008).rotateZ(0.1).translate(-0.035, 0.036, -0.102), new THREE.BoxGeometry(0.032, 0.006, 0.008).rotateZ(-0.1).translate(0.035, 0.036, -0.102)]);
  const hairShort = merge([new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55).scale(0.104, 0.124, 0.114).translate(0, 0.008, 0.012), brows.clone()]);
  const hairLong = merge([new THREE.SphereGeometry(1, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.55).scale(0.108, 0.128, 0.118).translate(0, 0.008, 0.014),
    lathe([[0.1, 0], [0.105, -0.12], [0.09, -0.26], [0.0, -0.3]], 12).scale(1, 1, 0.55).translate(0, 0.0, 0.05), brows.clone()]);
  // arms: sleeve (shirt), upper arm (skin), forearm + hand (skin)
  const sleeve = limb(0.062, 0.054, 0.13, 12);
  const upper = limb(0.046, 0.04, 0.27, 10);
  const hand = merge([new RoundedBox(0.062, 0.085, 0.03, 2, 0.012).translate(0, -0.3, 0), ell(0.014, 0.034, 0.014).rotateZ(-0.5).translate(0.03, -0.27, -0.012)]);
  const fore = merge([limb(0.04, 0.032, 0.24, 10), hand]);
  // legs (pants) + sneakers
  const thigh = limb(0.078, 0.058, 0.42, 12);
  const shin = limb(0.056, 0.044, 0.41, 10);
  const shoe = merge([new RoundedBox(0.098, 0.07, 0.245, 2, 0.032).translate(0, -0.462, -0.05), new RoundedBox(0.104, 0.022, 0.255, 1, 0.01).translate(0, -0.497, -0.05)]);
  GEO = { shirt, pelvis, belt, head, eyes, hairShort, hairLong, sleeve, upper, fore, thigh, shin, shoe };
  return GEO;
}
const EYE_MAT = new THREE.MeshStandardMaterial({ color:0x18120f, roughness:0.3 });
const BELT_MAT = new THREE.MeshStandardMaterial({ color:0x17171a, roughness:0.5, metalness:0.3 });

function mesh(g, m){ const o = new THREE.Mesh(g, m); o.castShadow = true; return o; }
function joint(parent, x, y, z, name){ const j = new THREE.Group(); j.position.set(x, y, z); j.name = name; parent.add(j); return j; }

const HIP_Y = 0.97;
export function buildCharacter(outfit){
  const G = bodyGeo();
  const root = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color:0xc68a62, roughness:0.6 });
  const shirt = new THREE.MeshStandardMaterial({ color:outfit.shirt, roughness:0.85 });
  const pants = new THREE.MeshStandardMaterial({ color:0x2d3748, roughness:0.88 });
  const shoes = new THREE.MeshStandardMaterial({ color:0x15151a, roughness:0.55 });
  const hairM = new THREE.MeshStandardMaterial({ color:0x2a1a10, roughness:0.8 });

  const hips = joint(root, 0, HIP_Y, 0, 'hips');
  hips.add(mesh(G.pelvis, pants), mesh(G.belt, BELT_MAT));
  const spine = joint(hips, 0, 0.06, 0, 'spine');
  spine.add(mesh(G.shirt, shirt));
  const neck = joint(spine, 0, 0.47, 0.005, 'neck');
  const head = joint(neck, 0, 0.13, 0, 'head');
  head.add(mesh(G.head, skin), mesh(G.eyes, EYE_MAT));
  const hair = mesh(G.hairShort, hairM); head.add(hair);
  const longHair = mesh(G.hairLong, hairM); longHair.visible = false; head.add(longHair);
  const hatSlot = joint(head, 0, 0.055, 0.005, 'hat'); hatSlot.scale.setScalar(0.74);

  const arms = [], elbows = [], legs = [], knees = [];
  for(const s of [-1, 1]){                         // s = -1 left (−X), +1 right (+X)
    const sh = joint(spine, s * 0.205, 0.39, 0.01, s < 0 ? 'shoulderL' : 'shoulderR');
    sh.add(mesh(G.sleeve, shirt), mesh(G.upper, skin));
    const el = joint(sh, 0, -0.28, 0, 'elbow');
    el.add(mesh(G.fore, skin));
    arms.push(sh); elbows.push(el);
    const hp = joint(hips, s * 0.092, -0.02, 0, s < 0 ? 'hipL' : 'hipR');
    hp.add(mesh(G.thigh, pants));
    const kn = joint(hp, 0, -0.44, 0, 'knee');
    kn.add(mesh(G.shin, pants), mesh(G.shoe, shoes));
    legs.push(hp); knees.push(kn);
  }
  const gunSlot = joint(elbows[1], 0, -0.3, -0.005, 'gun');

  root.userData = { legs, arms, knees, elbows, hips, spine, neck, head, shirt, skin, pants, shoes, hair:hairM, hairMesh:hair, longHair, hatSlot, gunSlot,
    gunId:null, hatId:null, hatColor:null, recoil:0, hit:0, hitX:0, hitZ:0, aimPitch:0, pose:null, poseW:0, J:null };
  setOutfit(root, outfit);
  return root;
}

export function setOutfit(root, outfit){
  const u = root.userData;
  u.shirt.color.setHex(outfit.shirt);
  if(outfit.pants != null) u.pants.color.setHex(outfit.pants);
  if(outfit.skin != null) u.skin.color.setHex(outfit.skin);
  if(outfit.hair != null) u.hair.color.setHex(outfit.hair);
  if(outfit.shoes != null) u.shoes.color.setHex(outfit.shoes);
  const hc = outfit.hatColor != null ? outfit.hatColor : outfit.shirt;
  if(u.hatId !== outfit.hat || u.hatColor !== hc){
    u.hatSlot.clear();
    const hat = buildHat(outfit.hat, hc);
    if(hat){ hat.traverse(o => { if(o.isMesh) o.castShadow = true; }); u.hatSlot.add(hat); }
    u.hatId = outfit.hat; u.hatColor = hc;
  }
  const helmet = outfit.hat === 'helmet';
  u.longHair.visible = !!outfit.hairLong && !helmet;
  u.hairMesh.visible = !u.longHair.visible && !helmet;
}

export function setHeldWeapon(root, id){
  const u = root.userData;
  if(u.gunId === id) return;
  u.gunSlot.clear();
  if(id){
    const gun = buildGun(id);
    gun.rotation.x = -Math.PI/2;     // barrel along the forearm, so it points forward when the arm is raised
    u.gunSlot.add(gun);
  }
  u.gunId = id;
}

// ---------------------------------------------------------------- animation
// Every frame a target pose is computed (locomotion + aim + reaction overlays) and the joints ease to it.
const J0 = () => ({ hipY:0, hipX:0, spX:0, spY:0, spZ:0, nkX:0, nkY:0, lsX:0, lsZ:0, leX:0, leZ:0, rsX:0, rsZ:0, reX:0, reZ:0, ltX:0, ltZ:0, lkX:0, rtX:0, rtZ:0, rkX:0, bob:0 });
const POSES = {
  // crouched, head tucked, arms wrapped over the head
  cower:   { hipY:-0.36, hipX:0.0, spX:-0.8, nkX:-0.4, lsX:2.05, lsZ:0.45, leX:2.45, rsX:2.05, rsZ:-0.45, reX:2.45, ltX:1.75, lkX:-2.3, rtX:1.6, rkX:-2.2 },
  // surrender: upper arms out and up, forearms vertical
  handsup: { spX:0.05, nkX:0.1, lsZ:-2.25, lsX:0.15, leZ:-1.3, rsZ:2.25, rsX:0.15, reZ:1.3, lkX:-0.05, rkX:-0.05 },
  // flinch: recoil away, forearms up in front of the face, knees give
  flinch:  { hipY:-0.06, spX:0.35, nkX:0.3, lsX:1.3, lsZ:0.25, leX:1.9, rsX:1.3, rsZ:-0.25, reX:1.9, ltX:0.25, lkX:-0.5, rtX:0.1, rkX:-0.35 },
  // running in a panic: hands over the head
  panic:   { spX:-0.25, nkX:-0.15, lsX:2.3, lsZ:0.45, leX:2.3, rsX:2.3, rsZ:-0.45, reX:2.3 },
  // hurt: hunched, a hand clamped on the side
  hurt:    { spX:-0.3, spZ:0.12, nkX:-0.15, lsX:0.35, lsZ:0.55, leX:1.9, rsX:0.1 },
};
const POSE_KEYS = Object.keys(J0());

// speed: signed m/s, phase: walk cycle, aiming: arm(s) raised
// opts.pose: 'cower' | 'handsup' | 'flinch' | 'panic' | 'hurt' (blended in), opts.pitch: aim up/down (rad)
export function animateCharacter(root, phase, speed, aiming, dt, opts){
  const u = root.userData;
  if(!u.J){ u.J = J0(); }
  dt = Math.min(dt || 0, 0.1);
  const t = J0();
  const sp = Math.abs(speed), amp = Math.min(1, sp / 4), run = Math.min(1, Math.max(0, (sp - 3.5) / 3));
  const dir = speed < 0 ? -1 : 1;
  const s1 = Math.sin(phase), s2 = Math.sin(phase + Math.PI);
  const c1 = Math.cos(phase), c2 = Math.cos(phase + Math.PI);
  // legs: thigh swing + knee bend on the forward swing (knee folds as the foot passes under)
  const swing = (0.55 + run * 0.35) * amp;
  t.ltX = s1 * swing * dir; t.rtX = s2 * swing * dir;
  t.lkX = -(Math.max(0, c1) * (0.7 + run * 0.9) * amp + 0.06); t.rkX = -(Math.max(0, c2) * (0.7 + run * 0.9) * amp + 0.06);
  // arms counter-swing, elbows bend more when running
  t.lsX = -s1 * (0.45 + run * 0.4) * amp; t.rsX = -s2 * (0.45 + run * 0.4) * amp;
  t.lsZ = -0.07; t.rsZ = 0.07;
  t.leX = 0.18 + amp * 0.25 + run * 0.95; t.reX = t.leX;
  t.spX = -0.06 * amp - 0.2 * run; t.nkX = 0.05 * amp + 0.15 * run; t.spY = s1 * 0.06 * amp;
  t.bob = Math.abs(c1) * (0.03 + run * 0.04) * amp;
  if(sp < 0.05){ t.lkX = -0.04; t.rkX = -0.04; t.leX = 0.12; t.reX = 0.12; t.spX = 0; }

  // recoil / aim
  u.recoil = Math.max(0, u.recoil - dt * 8);
  const pitch = opts && opts.pitch != null ? opts.pitch : u.aimPitch || 0;
  if(aiming){
    const two = u.gunId && u.gunId !== 'pistol' && u.gunId !== 'glock' && u.gunId !== 'deagle';
    t.rsX = Math.PI / 2 + pitch + u.recoil * 0.3; t.rsZ = two ? -0.12 : -0.05; t.reX = two ? 0.05 : 0; t.reZ = 0;
    if(two){ t.lsX = Math.PI / 2 - 0.1 + pitch; t.lsZ = 0.62; t.leX = 0.5; t.leZ = 0.0; t.spY = 0.3; }
    else { t.lsX = Math.PI / 2 - 0.1 + pitch; t.lsZ = 0.42; t.leX = 0.25; t.spY = 0.1; }   // two-hand pistol grip
    t.nkX = -pitch * 0.5; t.spX += -pitch * 0.25;
  }

  // reaction poses (blend weight eases in/out)
  const want = opts && opts.pose && POSES[opts.pose] ? opts.pose : null;
  if(want && u.pose !== want){ if(u.poseW < 0.05 || !u.pose) u.pose = want; }
  const tw = want && u.pose === want ? 1 : 0;
  u.poseW += (tw - u.poseW) * (1 - Math.exp(-dt * (tw ? 9 : 6)));
  if(u.pose && u.poseW > 0.002){
    const P = POSES[u.pose], w = u.poseW;
    const legsToo = u.pose === 'cower' || u.pose === 'flinch';
    for(const k in P){
      if(!legsToo && (k[0] === 'l' || k[0] === 'r') && (k[1] === 't' || k[1] === 'k')) continue;   // keep walking/running legs
      t[k] = t[k] * (1 - w) + P[k] * w + (k.endsWith('kX') && legsToo ? 0 : 0);
    }
    if(u.pose === 'cower') t.bob *= 1 - w;
  }
  // hit flinch overlay (decays fast): thrown back from the hit direction
  if(u.hit > 0){
    u.hit = Math.max(0, u.hit - dt * 3.2);
    const k = Math.sin(u.hit * Math.PI) * 0.9;
    // hit direction in the body frame (body faces -Z, heading = root.rotation.y)
    const h = root.rotation.y, bx = u.hitX * Math.cos(h) - u.hitZ * Math.sin(h), bz = u.hitX * Math.sin(h) + u.hitZ * Math.cos(h);
    t.spX += bz * 0.5 * k; t.spZ += -bx * 0.45 * k; t.nkX += bz * 0.4 * k;
    t.lsX += 0.6 * k; t.rsX += 0.6 * k; t.lkX -= 0.4 * k; t.rkX -= 0.3 * k; t.hipY -= 0.05 * k;
  }

  // ease joints to the target
  const J = u.J, e = 1 - Math.exp(-dt * 20);
  for(const k of POSE_KEYS) J[k] += (t[k] - J[k]) * (dt ? e : 1);
  u.hips.position.y = HIP_Y + J.hipY + J.bob; u.hips.rotation.x = J.hipX;
  u.spine.rotation.set(J.spX, J.spY, J.spZ);
  u.neck.rotation.set(J.nkX, J.nkY, 0);
  u.arms[0].rotation.set(J.lsX, 0, J.lsZ); u.elbows[0].rotation.set(J.leX, 0, J.leZ);
  u.arms[1].rotation.set(J.rsX, 0, J.rsZ); u.elbows[1].rotation.set(J.reX, 0, J.reZ);
  u.legs[0].rotation.set(J.ltX, 0, J.ltZ); u.knees[0].rotation.x = J.lkX;
  u.legs[1].rotation.set(J.rtX, 0, J.rtZ); u.knees[1].rotation.x = J.rkX;
  root.position.y = 0;
}

export function kickRecoil(root){ root.userData.recoil = 1; }
// a bullet hit (dx,dz = direction the bullet was travelling)
export function kickHit(root, dx, dz){ const u = root.userData; u.hit = 1; const l = Math.hypot(dx, dz) || 1; u.hitX = dx / l; u.hitZ = dz / l; }

// ---------------------------------------------------------------- death
// Knees buckle, the body folds and topples the way the hit pushed it, limbs go slack.
// Call startDeath once, then animateDeath(root, secondsSinceDeath) every frame.
export function startDeath(root, dx = 0, dz = 1){
  const u = root.userData;
  u.deathYaw = Math.atan2(dx, dz);                // fall direction (world)
  u.deathSide = Math.random() < 0.5 ? 1 : -1;
  u.deathFromYaw = root.rotation.y;
}
export function animateDeath(root, t){
  const u = root.userData;
  if(u.deathYaw == null) startDeath(root, 0, 1);
  const k1 = Math.min(1, t / 0.28), k2 = Math.min(1, Math.max(0, (t - 0.18) / 0.45)), e2 = k2 * k2 * (3 - 2 * k2);
  // turn so the body falls along the hit direction (feet stay put, body rotates down around them)
  root.rotation.set(0, u.deathYaw + Math.PI, 0);
  root.rotation.x = -e2 * (Math.PI / 2 - 0.08);
  root.position.y = 0.1 * e2;
  u.hips.position.y = HIP_Y - 0.25 * k1 * (1 - e2);
  u.spine.rotation.set(-0.4 * k1 * (1 - e2) + 0.15 * e2, 0.25 * u.deathSide * e2, 0.1 * u.deathSide * e2);
  u.neck.rotation.set(0.35 * e2, 0.6 * u.deathSide * e2, 0);
  u.legs[0].rotation.set(0.6 * k1 * (1 - e2) + 0.15 * e2, 0, -0.18 * e2); u.knees[0].rotation.x = -1.1 * k1 * (1 - e2) - 0.25 * e2;
  u.legs[1].rotation.set(0.3 * k1 * (1 - e2) - 0.1 * e2, 0, 0.22 * e2); u.knees[1].rotation.x = -0.8 * k1 * (1 - e2) - 0.5 * e2;
  u.arms[0].rotation.set(0.9 * k1 * (1 - e2) + 2.6 * e2, 0, -0.7 * e2); u.elbows[0].rotation.set(0.4 * e2, 0, 0);
  u.arms[1].rotation.set(0.6 * k1 * (1 - e2) + 2.9 * e2, 0, 1.0 * e2); u.elbows[1].rotation.set(0.9 * e2, 0, 0);
  if(u.J){ /* next time it's revived, ease back from here */ }
}
// stand back up (respawn / revive): clears the death pose instantly
export function resetPose(root){
  const u = root.userData;
  u.deathYaw = null; u.pose = null; u.poseW = 0; u.hit = 0; u.J = null;
  root.rotation.x = 0; root.rotation.z = 0; root.position.y = 0;
  animateCharacter(root, 0, 0, false, 0);
}
