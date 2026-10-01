// CITY DRIVER — sky dome, sun/moon rig, time-of-day presets.
// Pure three.js (no addons) so it stays headless-testable.
import * as THREE from 'three';

// Presets: top color, horizon color, ground haze, fog color, sun color/intensity,
// sun elevation/azimuth, hemi sky/ground/intensity, exposure, streetlights on?
export const SKY_PRESETS = {
  day: {
    label: 'DAY',
    top: 0x2f6fd6, horizon: 0xcfe6f7, fog: 0xcfe0f2,
    sunColor: 0xfff4e0, sunI: 2.2, elev: 62, azim: 35,
    hemiSky: 0xbfd8ff, hemiGround: 0x6a7a5a, hemiI: 0.85,
    exposure: 1.0, lightsOn: false, windowsGlow: 0.0, bloom: 0.25,
    stars: 0.0,
  },
  sunset: {
    label: 'SUNSET',
    top: 0x2b2a6e, horizon: 0xff9a56, fog: 0xe8a06a,
    sunColor: 0xffb066, sunI: 2.6, elev: 9, azim: 68,
    hemiSky: 0x8a6fb0, hemiGround: 0x4a3a30, hemiI: 0.6,
    exposure: 1.1, lightsOn: true, windowsGlow: 0.9, bloom: 0.45,
    stars: 0.15,
  },
  night: {
    label: 'NIGHT',
    top: 0x050914, horizon: 0x1a2b4a, fog: 0x0d1626,
    sunColor: 0x9db8e8, sunI: 0.55, elev: 38, azim: 210, // moon
    hemiSky: 0x24365a, hemiGround: 0x0c0f14, hemiI: 0.35,
    exposure: 0.95, lightsOn: true, windowsGlow: 1.6, bloom: 0.65,
    stars: 1.0,
  },
};
export const PRESET_ORDER = ['day', 'sunset', 'night'];

const skyVert = `
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`;
const skyFrag = `
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSunDir;
uniform vec3 uSunColor; uniform float uSunI; uniform float uStars;
varying vec3 vDir;
// hash for stars
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164))) * 43758.5453); }
void main(){
  float h = clamp(vDir.y, -0.12, 1.0);
  float t = pow(clamp(1.0 - max(h, 0.0), 0.0, 1.0), 1.6);
  vec3 col = mix(uTop, uHorizon, t);
  // sun disc + halo
  float s = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
  col += uSunColor * (pow(s, 900.0) * 1.4 * uSunI + pow(s, 18.0) * 0.28 * uSunI);
  // stars (only above horizon, twinkle-free)
  if (uStars > 0.001 && vDir.y > 0.02) {
    vec3 sp = floor(vDir * 220.0);
    float st = step(0.9985, hash(sp));
    col += vec3(0.9, 0.95, 1.0) * st * uStars * smoothstep(0.02, 0.25, vDir.y);
  }
  // below-horizon: fade to fog-ish dark
  col = mix(col, uHorizon * 0.55, smoothstep(0.0, -0.12, vDir.y));
  gl_FragColor = vec4(col, 1.0);
}`;

export function createSkyDome() {
  const geo = new THREE.SphereGeometry(1500, 24, 16);
  const uniforms = {
    uTop: { value: new THREE.Color(0x2f6fd6) },
    uHorizon: { value: new THREE.Color(0xcfe6f7) },
    uSunDir: { value: new THREE.Vector3(0, 1, 0) },
    uSunColor: { value: new THREE.Color(0xfff4e0) },
    uSunI: { value: 2.2 },
    uStars: { value: 0 },
  };
  const mat = new THREE.ShaderMaterial({
    vertexShader: skyVert, fragmentShader: skyFrag,
    uniforms, side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return { mesh, uniforms };
}

function sunDirFrom(elevDeg, azimDeg) {
  const e = elevDeg * Math.PI / 180, a = azimDeg * Math.PI / 180;
  return new THREE.Vector3(
    Math.cos(e) * Math.sin(a), Math.sin(e), Math.cos(e) * Math.cos(a)
  );
}

// Applies a preset to sky uniforms, lights, fog, renderer. Returns the preset.
export function applySkyPreset(env, name) {
  const p = SKY_PRESETS[name] || SKY_PRESETS.day;
  const { uniforms, sun, hemi, scene, renderer } = env;
  uniforms.uTop.value.setHex(p.top);
  uniforms.uHorizon.value.setHex(p.horizon);
  uniforms.uSunColor.value.setHex(p.sunColor);
  uniforms.uSunI.value = p.sunI;
  uniforms.uStars.value = p.stars;
  const dir = sunDirFrom(p.elev, p.azim);
  uniforms.uSunDir.value.copy(dir);
  sun.color.setHex(p.sunColor);
  sun.intensity = p.sunI;
  hemi.color.setHex(p.hemiSky);
  hemi.groundColor.setHex(p.hemiGround);
  hemi.intensity = p.hemiI;
  scene.fog.color.setHex(p.fog);
  if (renderer.toneMappingExposure !== undefined) renderer.toneMappingExposure = p.exposure;
  // shadow-casting sun follows preset elevation (offset scaled by elevation)
  env.sunElev = p.elev; env.sunAzim = p.azim; env.sunDir = dir;
  return p;
}
