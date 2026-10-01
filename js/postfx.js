// CITY DRIVER — post-processing: bloom + vignette via EffectComposer.
// Imports three/addons (browser importmap). node --check only in headless CI.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';

const VignetteShader = {
  uniforms: { tDiffuse: { value: null }, uAmount: { value: 0.28 } },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`,
};

export function createPostFX(renderer, scene, camera) {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight), 0.35, 0.65, 0.82
  );
  composer.addPass(bloom);
  const vignette = new ShaderPass(VignetteShader);
  composer.addPass(vignette);
  composer.addPass(new OutputPass());

  return {
    composer, bloom, vignette,
    setBloomEnabled(on) { bloom.enabled = on; },
    setBloomStrength(s) { bloom.strength = s; },
    setSize(w, h) { composer.setSize(w, h); },
    setPixelRatio(pr) { composer.setPixelRatio(pr); },
    render() { composer.render(); },
  };
}
