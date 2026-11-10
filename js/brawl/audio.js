// BAR BRAWL — procedural sound (WebAudio, no files): punches, slashes,
// shattering glass, gunshots, dynamite and a murmuring crowd.
export function createBrawlAudio(){
  let ctx = null, master = null, noiseBuf = null, crowd = null;
  function unlock(){
    if(ctx){ if(ctx.state === 'suspended') ctx.resume(); return; }
    try{ ctx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ return; }
    master = ctx.createGain(); master.gain.value = 0.55; master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0); for(let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  function noise(dur, type, freq, q, vol, t0 = 0, sweep){
    if(!ctx) return;
    const t = ctx.currentTime + t0;
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.playbackRate.value = 0.7 + Math.random() * 0.6;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.setValueAtTime(freq, t); f.Q.value = q;
    if(sweep) f.frequency.exponentialRampToValueAtTime(sweep, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(master); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.02);
  }
  function tone(freq, dur, type, vol, t0 = 0, to){
    if(!ctx) return;
    const t = ctx.currentTime + t0;
    const o = ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(freq, t);
    if(to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
  }
  return {
    unlock,
    thud(v = 1){ noise(0.12, 'lowpass', 500 + Math.random() * 300, 1, 0.9 * v); tone(110 + Math.random() * 40, 0.12, 'sine', 0.6 * v, 0, 50); },
    squish(){ noise(0.18, 'bandpass', 900, 2, 0.6, 0, 300); noise(0.12, 'lowpass', 300, 1, 0.5, 0.05); },
    slash(){ noise(0.14, 'highpass', 2500, 1, 0.5, 0, 6000); noise(0.16, 'bandpass', 700, 2, 0.5, 0.03, 250); },
    whoosh(){ noise(0.18, 'bandpass', 600, 1.5, 0.25, 0, 2000); },
    glass(){ noise(0.25, 'highpass', 4000, 1, 0.6); for(let k = 0; k < 4; k++) tone(2500 + Math.random() * 3000, 0.12, 'triangle', 0.08, k * 0.03); },
    clang(){ tone(900, 0.25, 'square', 0.12); tone(1340, 0.2, 'triangle', 0.12); noise(0.06, 'highpass', 3000, 1, 0.3); },
    shot(big){ noise(big ? 0.45 : 0.3, 'lowpass', big ? 1200 : 2200, 1, 1.1, 0, 200); tone(big ? 70 : 120, 0.2, 'sine', 0.7, 0, 40); },
    click(){ tone(1800, 0.03, 'square', 0.1); },
    boom(){ noise(1.1, 'lowpass', 900, 0.7, 1.4, 0, 60); tone(55, 0.9, 'sine', 1, 0, 25); },
    crunch(){ noise(0.3, 'lowpass', 1400, 1, 0.9, 0, 200); noise(0.2, 'bandpass', 400, 3, 0.7, 0.04); tone(70, 0.25, 'sine', 0.8, 0, 35); },
    hurt(){ tone(220, 0.15, 'sawtooth', 0.15, 0, 120); },
    rage(){ tone(80, 1.2, 'sawtooth', 0.35, 0, 160); noise(0.8, 'bandpass', 300, 1, 0.5, 0, 1200); },
    bell(){ for(let k = 0; k < 3; k++) tone(660, 0.6, 'triangle', 0.25, k * 0.25); },
    crowd(on){
      if(!ctx) return;
      if(on && !crowd){
        const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 420; f.Q.value = 0.8;
        const g = ctx.createGain(); g.gain.value = 0.06;
        const lfo = ctx.createOscillator(); lfo.frequency.value = 0.3; const lg = ctx.createGain(); lg.gain.value = 0.03; lfo.connect(lg); lg.connect(g.gain); lfo.start();
        s.connect(f); f.connect(g); g.connect(master); s.start(); crowd = { s, lfo };
      } else if(!on && crowd){ crowd.s.stop(); crowd.lfo.stop(); crowd = null; }
    },
  };
}
