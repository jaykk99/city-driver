// Material library: physically based presets used by every builder.
import * as THREE from 'three';
import { proceduralTexture, camoTexture } from './textures.js';

export const Q = { level: 'high' }; // set by pipeline: low | balanced | high | ultra
const cache = new Map();
const key = (...a) => a.join('|');

export function hq() { return Q.level === 'high' || Q.level === 'ultra'; }

function cached(k, make) { if (!cache.has(k)) cache.set(k, make()); return cache.get(k); }

// Generic preset by name. Options: color, rough, metal, repeat, emissive
export function preset(name, o = {}) {
  const color = o.color ?? null; const rep = o.repeat ?? 1;
  const k = key('p', name, color, o.rough, o.metal, rep, o.emissive, o.opacity, Q.level, o.side);
  return cached(k, () => {
    const C = c => new THREE.Color(color || c);
    let m;
    const texed = (kind, base) => { const t = proceduralTexture(kind, rep); return { ...base, map: t.map, normalMap: hq() ? t.normalMap : null, roughnessMap: t.roughnessMap }; };
    switch (name) {
      case 'metal': m = new THREE.MeshStandardMaterial({ color: C('#9aa0a6'), metalness: o.metal ?? 1, roughness: o.rough ?? 0.35 }); break;
      case 'chrome': m = new THREE.MeshStandardMaterial({ color: C('#f2f4f7'), metalness: 1, roughness: o.rough ?? 0.04 }); break;
      case 'gold': m = new THREE.MeshStandardMaterial({ color: C('#e4b44a'), metalness: 1, roughness: o.rough ?? 0.18 }); break;
      case 'copper': m = new THREE.MeshStandardMaterial({ color: C('#d0805a'), metalness: 1, roughness: o.rough ?? 0.28 }); break;
      case 'brushed': m = new THREE.MeshStandardMaterial({ ...texed('brushed', {}), color: C('#d4d8dc'), metalness: 1, roughness: o.rough ?? 0.4 }); break;
      case 'mirror': m = new THREE.MeshStandardMaterial({ color: C('#ffffff'), metalness: 1, roughness: 0 }); break;
      case 'glass': m = glass({ tint: o.tint ?? 0.1, color: color || '#9fb4c4' }); break;
      case 'rubber': m = new THREE.MeshStandardMaterial({ color: C('#1c1c1e'), roughness: o.rough ?? 0.92, metalness: 0 }); break;
      case 'plastic': m = new THREE.MeshPhysicalMaterial({ color: C('#d0d0d0'), roughness: o.rough ?? 0.42, metalness: 0, clearcoat: 0.15, clearcoatRoughness: 0.4 }); break;
      case 'wood': m = new THREE.MeshStandardMaterial({ ...texed('wood', {}), color: C('#ffffff'), roughness: 0.65 }); break;
      case 'concrete': m = new THREE.MeshStandardMaterial({ ...texed('concrete', {}), color: C('#ffffff'), roughness: 0.9 }); break;
      case 'brick': m = new THREE.MeshStandardMaterial({ ...texed('brick', {}), color: C('#ffffff'), roughness: 0.9 }); break;
      case 'asphalt': m = new THREE.MeshStandardMaterial({ ...texed('asphalt', {}), color: C('#ffffff'), roughness: 0.92 }); break;
      case 'grass': m = new THREE.MeshStandardMaterial({ ...texed('grass', {}), color: C('#ffffff'), roughness: 0.95 }); break;
      case 'dirt': m = new THREE.MeshStandardMaterial({ ...texed('dirt', {}), color: C('#ffffff'), roughness: 0.95 }); break;
      case 'mud': m = new THREE.MeshStandardMaterial({ ...texed('mud', {}), color: C('#ffffff'), roughness: 0.6 }); break;
      case 'rock': m = new THREE.MeshStandardMaterial({ ...texed('rock', {}), color: C('#ffffff'), roughness: 0.9 }); break;
      case 'sand': m = new THREE.MeshStandardMaterial({ ...texed('sand', {}), color: C('#ffffff'), roughness: 0.95 }); break;
      case 'snow': m = new THREE.MeshStandardMaterial({ ...texed('snow', {}), color: C('#ffffff'), roughness: 0.7 }); break;
      case 'marble': m = new THREE.MeshPhysicalMaterial({ ...texed('marble', {}), color: C('#ffffff'), roughness: 0.15, clearcoat: 0.6 }); break;
      case 'fabric': m = new THREE.MeshPhysicalMaterial({ ...texed('fabric', {}), color: C('#7a7a7a'), roughness: 0.95, sheen: 0.6, sheenRoughness: 0.8, sheenColor: new THREE.Color('#ffffff') }); break;
      case 'leather': m = new THREE.MeshPhysicalMaterial({ ...texed('leather', {}), color: C('#3a2a20'), roughness: 0.55, clearcoat: 0.2 }); break;
      case 'carbon': m = new THREE.MeshPhysicalMaterial({ ...texed('carbon', {}), color: C('#ffffff'), roughness: 0.35, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.05 }); break;
      case 'plaster': m = new THREE.MeshStandardMaterial({ ...texed('plaster', {}), color: C('#ffffff'), roughness: 0.95 }); break;
      case 'ice': m = new THREE.MeshPhysicalMaterial({ ...texed('ice', {}), color: C('#ffffff'), roughness: 0.08, transmission: hq() ? 0.6 : 0, thickness: 1, transparent: !hq(), opacity: hq() ? 1 : 0.85 }); break;
      case 'lava': { const t = proceduralTexture('lava', rep); m = new THREE.MeshStandardMaterial({ map: t.map, normalMap: t.normalMap, roughnessMap: t.roughnessMap, emissiveMap: t.map, emissive: new THREE.Color('#ff5a10'), emissiveIntensity: 2.2 }); break; }
      case 'carpaint': m = carPaint({ color: color || '#b5121b', finish: 'metallic', flake: 0.5 }); break;
      case 'skin': m = skin(color || '#c68a64'); break;
      case 'neon': case 'emissive': m = new THREE.MeshStandardMaterial({ color: C('#21d4ff'), emissive: C('#21d4ff'), emissiveIntensity: name === 'neon' ? 4 : 2, roughness: 0.4 }); break;
      case 'black': m = new THREE.MeshStandardMaterial({ color: C('#0d0d0f'), roughness: o.rough ?? 0.5 }); break;
      default: m = new THREE.MeshStandardMaterial({ color: C('#c9c4bb'), roughness: o.rough ?? 0.6, metalness: o.metal ?? 0.05 });
    }
    if (o.side) m.side = o.side;
    if (o.opacity != null && o.opacity < 1) { m.transparent = true; m.opacity = o.opacity; }
    return m;
  });
}

export function glass({ tint = 0.3, color = '#8aa0b0', thin = true } = {}) {
  return cached(key('glass', tint, color, Q.level), () => {
    const c = new THREE.Color(color).lerp(new THREE.Color('#05070a'), tint * 0.85);
    // Transmission is expensive (extra scene pass); use reflective transparent glass instead — reads as real car glass.
    return new THREE.MeshPhysicalMaterial({
      color: c, metalness: 0.0, roughness: 0.02, transparent: true, opacity: 0.25 + tint * 0.6,
      clearcoat: 1, clearcoatRoughness: 0, envMapIntensity: 1.6, side: THREE.DoubleSide, depthWrite: false, ior: 1.5, specularIntensity: 1,
    });
  });
}

// Car paint: base + clearcoat, optional metallic flake / pearl iridescence / matte / chrome / candy / carbon
export function carPaint({ color = '#b5121b', finish = 'metallic', flake = 0.5 } = {}) {
  return cached(key('paint', color, finish, flake, Q.level), () => {
    const c = new THREE.Color(color);
    const p = { color: c, metalness: 0.0, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.03, side: THREE.DoubleSide, envMapIntensity: 1.15 };
    if (finish === 'metallic') Object.assign(p, { metalness: 0.55 + flake * 0.3, roughness: 0.28 + flake * 0.12 });
    if (finish === 'pearl') Object.assign(p, { metalness: 0.35, roughness: 0.25, iridescence: 1, iridescenceIOR: 1.6, iridescenceThicknessRange: [250, 700], sheen: 0.4, sheenColor: c.clone().offsetHSL(0.08, 0, 0.2) });
    if (finish === 'matte') Object.assign(p, { metalness: 0.15, roughness: 0.62, clearcoat: 0 });
    if (finish === 'satin') Object.assign(p, { metalness: 0.4, roughness: 0.42, clearcoat: 0.35, clearcoatRoughness: 0.35 });
    if (finish === 'chrome') Object.assign(p, { metalness: 1, roughness: 0.03, clearcoat: 0 });
    if (finish === 'candy') Object.assign(p, { metalness: 0.85, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0, sheen: 0.6, sheenColor: c.clone().multiplyScalar(1.4), envMapIntensity: 1.4 });
    if (finish === 'gloss') Object.assign(p, { metalness: 0.05, roughness: 0.2 });
    if (finish === 'carbon') { const t = proceduralTexture('carbon', 6); Object.assign(p, { map: t.map, normalMap: t.normalMap, color: new THREE.Color('#ffffff'), metalness: 0.25, roughness: 0.32 }); }
    const m = new THREE.MeshPhysicalMaterial(p);
    if (hq() && flake > 0 && (finish === 'metallic' || finish === 'candy' || finish === 'pearl')) {
      const f = proceduralTexture('flake', 24); m.normalMap = f.normalMap; m.normalScale = new THREE.Vector2(0.12 * flake, 0.12 * flake);
      m.clearcoatNormalMap = null;
    }
    return m;
  });
}

export function skin(color = '#c68a64', shine = 0.45) {
  return cached(key('skin', color, shine, Q.level), () => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color), roughness: 0.62 - shine * 0.3, metalness: 0, sheen: 0.35, sheenRoughness: 0.5,
    sheenColor: new THREE.Color(color).lerp(new THREE.Color('#ff7060'), 0.5), clearcoat: shine * 0.25, clearcoatRoughness: 0.6,
    specularIntensity: 0.6,
  }));
}

export function cloth(color = '#2f5d8a', kind = 'cotton') {
  return cached(key('cloth', color, kind, Q.level), () => {
    const t = proceduralTexture('fabric', 8);
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(color), map: t.map, normalMap: hq() ? t.normalMap : null, normalScale: new THREE.Vector2(0.5, 0.5),
      roughness: kind === 'leather' ? 0.5 : 0.9, sheen: kind === 'leather' ? 0 : 0.7, sheenRoughness: 0.7, sheenColor: new THREE.Color(color).offsetHSL(0, 0, 0.25),
      clearcoat: kind === 'leather' ? 0.3 : 0,
    });
  });
}

export function emissive(color, intensity = 3) {
  return cached(key('emi', color, intensity), () => new THREE.MeshStandardMaterial({ color: new THREE.Color(color).multiplyScalar(0.6), emissive: new THREE.Color(color), emissiveIntensity: intensity, roughness: 0.25 }));
}

export function lens(color = '#ffffff', glow = 0) {
  return cached(key('lens', color, glow, Q.level), () => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color), emissive: new THREE.Color(color), emissiveIntensity: glow, roughness: 0.05, metalness: 0,
    transparent: true, opacity: 0.92, clearcoat: 1, clearcoatRoughness: 0, ior: 1.5,
  }));
}

export function tint(finish) { // weapon finishes
  const map = {
    black: { color: '#1b1c1f', metal: 0.4, rough: 0.45 }, olive: { color: '#4a5236', metal: 0.2, rough: 0.6 }, tan: { color: '#a8916a', metal: 0.15, rough: 0.6 },
    gold: { color: '#e2b04a', metal: 1, rough: 0.16 }, platinum: { color: '#d8dade', metal: 1, rough: 0.12 }, pink: { color: '#e86aa8', metal: 0.25, rough: 0.4 },
    orange: { color: '#e86a1c', metal: 0.2, rough: 0.45 }, navy: { color: '#203458', metal: 0.3, rough: 0.45 }, chrome: { color: '#eef0f3', metal: 1, rough: 0.05 },
  };
  if (['woodland', 'digital', 'tiger', 'desert'].includes(finish)) {
    return cached(key('camo', finish, Q.level), () => new THREE.MeshStandardMaterial({ map: camoTexture(finish), roughness: 0.65, metalness: 0.1 }));
  }
  const f = map[finish] || map.black;
  return cached(key('tint', finish, Q.level), () => new THREE.MeshPhysicalMaterial({ color: new THREE.Color(f.color), metalness: f.metal, roughness: f.rough, clearcoat: f.metal > 0.9 ? 0 : 0.2, clearcoatRoughness: 0.5 }));
}

// Apply a top-level object material name to a primitive (o.material + o.color)
export function objectMaterial(o) {
  const name = o.material || 'default';
  if (name === 'default' || name === 'plastic') {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(o.color || '#c9c4bb'), metalness: o.metalness ?? 0.05, roughness: o.roughness ?? 0.55,
      transparent: (o.opacity ?? 1) < 1, opacity: o.opacity ?? 1, wireframe: !!o.wireframe, flatShading: !!o.flatShading,
      emissive: new THREE.Color(o.emissive || '#000000'), emissiveIntensity: o.emissive && o.emissive !== '#000000' ? 2 : 1,
      clearcoat: name === 'plastic' ? 0.3 : 0,
    });
  }
  if (name === 'carpaint') return carPaint({ color: o.color || '#b5121b', finish: 'metallic', flake: 0.5 });
  const m = preset(name, { color: o.color && !['wood', 'concrete', 'brick', 'asphalt', 'grass', 'dirt', 'rock', 'sand', 'snow', 'marble', 'carbon', 'lava', 'mud', 'plaster', 'ice'].includes(name) ? o.color : null, repeat: o.texRepeat || 1 }).clone();
  if (o.wireframe) m.wireframe = true;
  return m;
}

// Poly Haven PBR texture set onto a material (async, CC0 photo-scanned)
const phCache = new Map();
export async function polyhavenMaterial(id, res = '1k', repeat = 1) {
  const k = id + res + repeat; if (phCache.has(k)) return phCache.get(k);
  const p = (async () => {
    const files = await (await fetch(`https://api.polyhaven.com/files/${encodeURIComponent(id)}`)).json();
    const pick = (name) => files[name]?.[res]?.jpg?.url || files[name]?.['1k']?.jpg?.url;
    const loader = new THREE.TextureLoader(); loader.setCrossOrigin('anonymous');
    const load = (url, srgb) => url ? loader.loadAsync(url).then(t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.anisotropy = 8; return t; }) : null;
    const [map, normalMap, armMap] = await Promise.all([load(pick('Diffuse'), true), load(pick('nor_gl')), load(pick('arm'))]);
    const m = new THREE.MeshStandardMaterial({ map, normalMap, roughnessMap: armMap, metalnessMap: armMap, aoMap: armMap, roughness: 1, metalness: armMap ? 1 : 0 });
    if (!armMap) { m.metalness = 0; m.roughness = 0.8; }
    return m;
  })();
  phCache.set(k, p); return p;
}

// Breaks up visible texture tiling on huge surfaces (ground, terrain-sized planes): blends a
// rotated second sample of the same map and adds low-frequency colour/brightness variation.
export function antiTile(base) {
  const m = base.clone();
  m.onBeforeCompile = sh => {
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
float atHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float atNoise(vec2 p) { vec2 i = floor(p), f = fract(p); vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(atHash(i), atHash(i + vec2(1, 0)), u.x), mix(atHash(i + vec2(0, 1)), atHash(i + vec2(1, 1)), u.x), u.y); }
float atFbm(vec2 p) { return atNoise(p) * 0.55 + atNoise(p * 2.13 + 7.1) * 0.3 + atNoise(p * 4.37 + 3.3) * 0.15; }`).replace('#include <map_fragment>', `
#ifdef USE_MAP
  vec4 s1 = texture2D( map, vMapUv );
  vec2 uv2 = mat2( 0.8, -0.6, 0.6, 0.8 ) * vMapUv * 0.43 + vec2( 0.37, 0.11 );
  vec4 s2 = texture2D( map, uv2 );
  float k = smoothstep( 0.35, 0.65, atFbm( vMapUv * 0.09 ) );
  vec4 sampledDiffuseColor = mix( s1, s2, k );
  // far away the repeating detail turns into a grid: fade it to the texture's average colour
  vec4 avgC = textureLod( map, vec2( 0.5 ), 12.0 );
  float far = smoothstep( 35.0, 220.0, length( vViewPosition ) );
  sampledDiffuseColor = mix( sampledDiffuseColor, avgC * mix( 0.85, 1.15, atFbm( vMapUv * 0.04 ) ), far );
  float macro = atFbm( vMapUv * 0.013 + 3.7 );
  sampledDiffuseColor.rgb *= mix( 0.8, 1.15, macro ) * vec3( 1.0 + ( macro - 0.5 ) * 0.1, 1.0, 1.0 - ( macro - 0.5 ) * 0.12 );
  diffuseColor *= sampledDiffuseColor;
#endif`);
  };
  m.customProgramCacheKey = () => 'antiTile3';
  return m;
}

// PBR material from texture URLs made by the GPU worker (AI textures): {map, normal, rough, repeat}
const texLoader = new THREE.TextureLoader(); texLoader.setCrossOrigin('anonymous');
export function mapsMaterial(tm, repeat = 1) {
  const load = (url, srgb) => { if (!url) return null; const t = texLoader.load(url); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat); t.anisotropy = 8; if (srgb) t.colorSpace = THREE.SRGBColorSpace; return t; };
  return new THREE.MeshStandardMaterial({ map: load(tm.map, true), normalMap: load(tm.normal), roughnessMap: load(tm.rough), roughness: 1, metalness: 0 });
}
