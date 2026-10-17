// CITY DRIVER — post-processing: SSAO + bloom + cinematic grade.
// (v4 renderer stack port: SSAO for contact depth, warm grade + film grain.)
// Imports three/addons (bundled by esbuild; no boot-time network deps).
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

// Warm cinematic grade + vignette + subtle animated film grain.
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uTime; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      // warm grade + gentle contrast
      c.rgb = mix(c.rgb, c.rgb * vec3(1.06, 1.0, 0.93), 0.5);
      c.rgb = (c.rgb - 0.5) * 1.05 + 0.5;
      // vignette
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(0.72, 1.0, v);
      // subtle animated film grain: photographic, not gamey
      float gr = fract(sin(dot(vUv * vec2(1234.0, 876.0) + fract(uTime * 13.7), vec2(12.9898, 78.233))) * 43758.5453);
      c.rgb += (gr - 0.5) * 0.012;
      gl_FragColor = c;
    }`,
};

export function createPostFX(renderer, scene, camera) {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  // SSAO: contact depth around buildings/cars. Off on lower quality (phone GPUs).
  let ssao = null;
  try {
    ssao = new SSAOPass(scene, camera, window.innerWidth, window.innerHeight);
    ssao.kernelRadius = 8;
    ssao.minDistance = 0.002;
    ssao.maxDistance = 0.15;
    composer.addPass(ssao);
  } catch (e) { console.warn('ssao off', e); ssao = null; }
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight), 0.35, 0.65, 0.82
  );
  composer.addPass(bloom);
  const grade = new ShaderPass(GradeShader);
  composer.addPass(grade);
  composer.addPass(new OutputPass());

  return {
    composer, bloom, grade,
    setBloomEnabled(on) { bloom.enabled = on; },
    setBloomStrength(s) { bloom.strength = s; },
    setSSAOEnabled(on) { if (ssao) ssao.enabled = !!on; },
    setSize(w, h) { composer.setSize(w, h); },
    setPixelRatio(pr) { composer.setPixelRatio(pr); },
    render() {
      grade.uniforms.uTime.value = (performance.now() / 1000) % 100;
      composer.render();
    },
  };
}
