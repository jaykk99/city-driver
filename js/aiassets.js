// City Driver — AI asset loader (Forge Asset Pipeline).
//
// READY BUT NOT WIRED IN: this module is complete and import-safe, but
// nothing in the game imports it yet. See INTEGRATION below.
//
// What it does:
//  - Loads AI-generated GLBs + their ready-to-use JS modules from OUR OWN
//    Supabase Storage bucket `forge-assets` (no third-party host).
//  - spawnSportsCar() is the worked example: hero player car replacement.
//  - spawnAIAsset() covers the other 7 queued assets generically.
//  - loadAITextures() fetches tex/manifest.json (albedo/roughness/normal).
//
// SETUP (after the notebook workers finish the 8 jobs):
//  1. Set FORGE_BASE to your Supabase project URL (one line, below).
//  2. Paste each finished job's id into ASSETS[name].jobId.
//     (Find ids in the forge_asset_jobs table, or the worker's printout.)
//  3. Uncomment the INTEGRATION snippet at the bottom inside main.js.

import * as THREE from 'three';

// ---- one-line config -------------------------------------------------
const FORGE_BASE = 'https://YOUR_PROJECT.supabase.co'; // <-- set me
const BUCKET = 'forge-assets';
const modUrl = (jobId) =>
  `${FORGE_BASE}/storage/v1/object/public/${BUCKET}/${jobId}.js`;
const glbUrl = (jobId) =>
  `${FORGE_BASE}/storage/v1/object/public/${BUCKET}/${jobId}.glb`;

// ---- asset registry: paste finished job ids here --------------------
export const ASSETS = {
  sportsCar:      { jobId: '<PASTE_JOB_ID>', scale: 1.0,  yOffset: 0 },
  muscleCar:      { jobId: '<PASTE_JOB_ID>', scale: 1.0,  yOffset: 0 },
  suv:            { jobId: '<PASTE_JOB_ID>', scale: 1.05, yOffset: 0 },
  officeBuilding: { jobId: '<PASTE_JOB_ID>', scale: 1.0,  yOffset: 0 },
  brickBuilding:  { jobId: '<PASTE_JOB_ID>', scale: 1.0,  yOffset: 0 },
  oakTree:        { jobId: '<PASTE_JOB_ID>', scale: 1.2,  yOffset: 0 },
  lampPost:       { jobId: '<PASTE_JOB_ID>', scale: 1.0,  yOffset: 0 },
  hydrant:        { jobId: '<PASTE_JOB_ID>', scale: 1.0,  yOffset: 0 },
};

function checkConfigured(name) {
  const a = ASSETS[name];
  if (!a || !a.jobId || a.jobId.includes('PASTE_JOB_ID')) {
    throw new Error(`[aiassets] ${name}: paste the finished job id into ASSETS first`);
  }
  return a;
}

// ---- worked example: hero sports car --------------------------------
// The worker's generated module exports createForgeAsset(scene, x, z, opts)
// which handles GLB load, shadows, collider box, LOD and disposal.
// We wrap it with car-appropriate defaults.
export async function spawnSportsCar(scene, x, z, opts = {}) {
  const a = checkConfigured('sportsCar');
  const mod = await import(/* @vite-ignore */ modUrl(a.jobId));
  const handle = await mod.createForgeAsset(scene, x, z, {
    colliders: opts.colliders || null,
    scale: opts.scale ?? a.scale,
    yOffset: opts.yOffset ?? a.yOffset,
    rotationY: opts.rotationY ?? 0,
    castShadow: true,
    receiveShadow: true,
    lodDistance: opts.lodDistance ?? 200, // hero car: keep visible far
    name: 'ai-sports-car',
  });
  // City Driver's physics drives carGroup.position each frame; the caller
  // keeps handle.root and moves it like the procedural car.
  return handle;
}

// ---- generic spawner for the other 7 assets --------------------------
export async function spawnAIAsset(name, scene, x, z, opts = {}) {
  const a = checkConfigured(name);
  const mod = await import(/* @vite-ignore */ modUrl(a.jobId));
  return mod.createForgeAsset(scene, x, z, {
    colliders: opts.colliders || null,
    scale: opts.scale ?? a.scale,
    yOffset: opts.yOffset ?? a.yOffset,
    rotationY: opts.rotationY ?? 0,
    castShadow: opts.castShadow ?? true,
    receiveShadow: opts.receiveShadow ?? true,
    lodDistance: opts.lodDistance ?? 150,
    name: `ai-${name}`,
  });
}

// ---- textures ---------------------------------------------------------
// Texture Forge uploads tex/manifest.json:
//   { "facade-glass": { albedo, roughness, normal }, ... }
export async function loadAITextures() {
  const url = `${FORGE_BASE}/storage/v1/object/public/${BUCKET}/tex/manifest.json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`[aiassets] manifest fetch failed: ${res.status}`);
  return res.json();
}

export function applyPBRMaps(material, texSet, loader = new THREE.TextureLoader()) {
  // texSet = { albedo, roughness, normal } urls from the manifest
  if (texSet.albedo) {
    const t = loader.load(texSet.albedo);
    t.colorSpace = THREE.SRGBColorSpace;
    material.map = t;
  }
  if (texSet.roughness) material.roughnessMap = loader.load(texSet.roughness);
  if (texSet.normal) material.normalMap = loader.load(texSet.normal);
  material.needsUpdate = true;
  return material;
}

// ---- per-frame helper: call for every spawned AI handle --------------
//   const aiHandles = [];
//   aiHandles.push(await spawnSportsCar(scene, x, z, { colliders: city.colliders }));
//   // in the frame loop: for (const h of aiHandles) h.update(camera);
export function updateAIHandles(handles, camera) {
  for (const h of handles) {
    try { h.update(camera); } catch (e) { /* already disposed */ }
  }
}

/* ----------------------------------------------------------------------
INTEGRATION (do NOT uncomment until job ids are pasted above):

// A) Replace the hero player car with the AI sports car.
//    In js/main.js, inside rebuildCar(), after the procedural build:
//      import { spawnSportsCar } from './aiassets.js';
//      const ai = await spawnSportsCar(scene, 0, 0, { colliders: city.colliders });
//      scene.remove(carGroup); carGroup = ai.root;

// B) Scatter AI oak trees + lamp posts through the city.
//    In js/main.js after buildCity(scene):
//      import { spawnAIAsset, updateAIHandles } from './aiassets.js';
//      const aiHandles = [];
//      for (const [x, z] of treeSpots)
//        aiHandles.push(await spawnAIAsset('oakTree', scene, x, z));
//      // per frame: updateAIHandles(aiHandles, camera);

// C) Reskin building facades with AI textures.
//      import { loadAITextures, applyPBRMaps } from './aiassets.js';
//      const tex = await loadAITextures();
//      applyPBRMaps(buildingMaterial, tex['facade-glass']);
---------------------------------------------------------------------- */
