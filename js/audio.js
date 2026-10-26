// CITY DRIVER — procedural WebAudio: engines, skids, guns, people, city. No audio assets.
// Engine "voices" give each car its own sound (crossplane V8 lope, smooth turbo straight-six,
// screaming V10, anti-lag rally four...). Gunshots get a crack, a thump and a street echo (reverb bus).
// People scream (formant synthesis), feet hit the ground, the city hums in the background.
// All engine nodes are created once in unlock(); per-frame calls only set values (no allocs).

// voice table: harmonic shape + character. h = [odd weight, even weight, bump center, bump amount],
// lope = cam wobble, bright = filter opening, whine = upper harmonic, grit = drive, pops = crackle rate,
// turbo = built-in turbo whistle + blow-off, sub = crank rumble level
const VOICES = {
  v8x: { h:[1, 0.5, 4, 0.9], lope:0.34, bright:0.75, whine:0.6, grit:1.25, pops:0.35, turbo:0, sub:0.5 },   // crossplane muscle V8
  v8:  { h:[1, 0.62, 5, 0.7], lope:0.24, bright:0.85, whine:0.8, grit:1.1, pops:0.22, turbo:0, sub:0.42 },
  bb:  { h:[1, 0.45, 3.5, 1.0], lope:0.42, bright:0.65, whine:0.5, grit:1.4, pops:0.4, turbo:0, sub:0.6 },     // big block
  i6:  { h:[0.8, 0.9, 6, 0.5], lope:0.04, bright:1.15, whine:1.3, grit:0.85, pops:0.12, turbo:1, sub:0.25 },     // smooth turbo straight-six
  v10: { h:[1, 0.35, 9, 0.8], lope:0.03, bright:1.5, whine:2.0, grit:1.0, pops:0.18, turbo:0, sub:0.2 },         // high-revving scream
  v12: { h:[0.9, 0.7, 10, 0.6], lope:0.02, bright:1.4, whine:1.8, grit:0.8, pops:0.1, turbo:0, sub:0.2 },
  v6:  { h:[1, 0.7, 6, 0.55], lope:0.08, bright:1.0, whine:1.0, grit:0.95, pops:0.12, turbo:0, sub:0.3 },
  i4:  { h:[1, 0.85, 7, 0.4], lope:0.06, bright:1.05, whine:1.1, grit:0.9, pops:0.08, turbo:0, sub:0.22 },
  i4t: { h:[1, 0.8, 7, 0.5], lope:0.05, bright:1.1, whine:1.2, grit:1.0, pops:0.25, turbo:1, sub:0.22 },
  i4r: { h:[1, 0.6, 8, 0.7], lope:0.1, bright:1.25, whine:1.3, grit:1.35, pops:0.7, turbo:1, sub:0.25 },        // rally: raspy + anti-lag bangs
};
const voiceFor = o => VOICES[o.voice] || (o.cyl >= 12 ? VOICES.v12 : o.cyl >= 10 ? VOICES.v10 : o.cyl >= 8 ? VOICES.v8 : o.cyl >= 6 ? VOICES.v6 : VOICES.i4);
export function createAudio(){
  let ctx=null, master=null;
  let engOsc=null, engOsc2=null, engOsc3=null, engFilter=null, engGain=null, engWhine=null;
  let pulseWave=null, lfo=null, lfoGain=null, shaper=null, drive=null, intakeBP=null, intakeGain=null;
  let lastLoad=0, lastRpm=0, popCool=0, cyl=8, idleRpm=850, redRpm=7000;
  let skidGain=null, noiseBuf=null;
  let turboOsc=null, turboOsc2=null, turboGain=null, turboBP=null, lastBoost=0;
  let sirenOsc=null, sirenOsc2=null, sirenLFO=null, sirenLFOGain=null, sirenGain=null, sirenLevel=0;
  let started=false, gestured=false; // never create AudioContext before a user gesture (autoplay policy)
  let voice=VOICES.v8, g2Gain=null, reverb=null, reverbIn=null, ambGain=null, ambBird=0, lx=0, lz=0, stepAlt=0, bovBoost=0, popScale=1;

  function ensure(){
    if(ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.5;
    master.connect(ctx.destination);

    // engine: combustion-pulse oscillator (custom harmonics) + crank rumble +
    // intake noise, through soft-clip "grit" and a load-dependent lowpass.
    const real = new Float32Array(32), imag = new Float32Array(32);
    for(let n = 1; n < 32; n++){
      // strong low harmonics, odd/even mix, a resonant bump around 5-8 (exhaust note)
      const bump = Math.exp(-Math.pow((n - 6) / 2.5, 2)) * 0.6;
      imag[n] = (1 / Math.pow(n, 0.9)) * (n % 2 ? 1 : 0.65) + bump / n;
    }
    pulseWave = ctx.createPeriodicWave(real, imag);
    engOsc = ctx.createOscillator(); engOsc.setPeriodicWave(pulseWave); engOsc.frequency.value = 50;
    engOsc2 = ctx.createOscillator(); engOsc2.type = 'sawtooth'; engOsc2.frequency.value = 25;    // crank / half-order rumble
    engOsc3 = ctx.createOscillator(); engOsc3.type = 'triangle'; engOsc3.frequency.value = 100;  // upper whine
    const g1 = ctx.createGain(); g1.gain.value = 0.55;
    const g2 = ctx.createGain(); g2.gain.value = 0.35; g2Gain = g2;
    engWhine = ctx.createGain(); engWhine.gain.value = 0.05;
    // lope: amplitude wobble at half the firing rate (cam feel)
    lfo = ctx.createOscillator(); lfo.frequency.value = 12;
    lfoGain = ctx.createGain(); lfoGain.gain.value = 0.18;
    const am = ctx.createGain(); am.gain.value = 0.82;
    lfo.connect(lfoGain); lfoGain.connect(am.gain);
    engOsc.connect(g1); engOsc2.connect(g2); engOsc3.connect(engWhine);
    g1.connect(am); g2.connect(am); engWhine.connect(am);
    // grit
    shaper = ctx.createWaveShaper();
    const curve = new Float32Array(1024);
    for(let i = 0; i < 1024; i++){ const x = i / 512 - 1; curve[i] = Math.tanh(x * 2.4); }
    shaper.curve = curve; shaper.oversample = '2x';
    drive = ctx.createGain(); drive.gain.value = 1;
    am.connect(drive); drive.connect(shaper);
    engFilter = ctx.createBiquadFilter(); engFilter.type = 'lowpass'; engFilter.frequency.value = 600; engFilter.Q.value = 1.2;
    const body = ctx.createBiquadFilter(); body.type = 'peaking'; body.frequency.value = 160; body.gain.value = 6; body.Q.value = 0.9;
    engGain = ctx.createGain(); engGain.gain.value = 0;
    shaper.connect(engFilter); engFilter.connect(body); body.connect(engGain); engGain.connect(master);
    engOsc.start(); engOsc2.start(); engOsc3.start(); lfo.start();

    // skid: looped noise buffer -> bandpass -> gain
    const len = ctx.sampleRate;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
    noiseBuf = buf;
    const src = ctx.createBufferSource(); src.buffer=buf; src.loop=true;
    const bp = ctx.createBiquadFilter(); bp.type='bandpass';
    bp.frequency.value=900; bp.Q.value=1.1;
    skidGain = ctx.createGain(); skidGain.gain.value=0;
    src.connect(bp); bp.connect(skidGain); skidGain.connect(master);
    src.start();
    // intake / induction roar: noise -> bandpass that tracks rpm
    const isrc = ctx.createBufferSource(); isrc.buffer = buf; isrc.loop = true;
    intakeBP = ctx.createBiquadFilter(); intakeBP.type = 'bandpass'; intakeBP.frequency.value = 700; intakeBP.Q.value = 0.8;
    intakeGain = ctx.createGain(); intakeGain.gain.value = 0;
    isrc.connect(intakeBP); intakeBP.connect(intakeGain); intakeGain.connect(master);
    isrc.start(0, 0.37);

    // street reverb bus: a synthesized impulse (early slap off buildings + a long diffuse tail)
    reverb = ctx.createConvolver();
    const irLen = Math.floor(ctx.sampleRate * 1.6), ir = ctx.createBuffer(2, irLen, ctx.sampleRate);
    for(let c = 0; c < 2; c++){
      const d2 = ir.getChannelData(c);
      for(let i = 0; i < irLen; i++){
        const t = i / ctx.sampleRate;
        let v = (Math.random() * 2 - 1) * Math.pow(1 - i / irLen, 3.2) * 0.5;
        for(const [at, amp] of [[0.09, 0.9], [0.17 + c * 0.02, 0.6], [0.31 - c * 0.03, 0.4], [0.46, 0.25]]) if(Math.abs(t - at) < 0.012) v += (Math.random() * 2 - 1) * amp * (1 - Math.abs(t - at) / 0.012);
        d2[i] = v;
      }
    }
    reverb.buffer = ir;
    reverbIn = ctx.createGain(); reverbIn.gain.value = 0.55;
    const rlp = ctx.createBiquadFilter(); rlp.type = 'lowpass'; rlp.frequency.value = 3200;
    reverbIn.connect(rlp); rlp.connect(reverb); reverb.connect(master);

    // city ambience: distant traffic rumble (brown-ish noise) + a soft wind band
    const brown = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), bd = brown.getChannelData(0);
    let last = 0; for(let i = 0; i < bd.length; i++){ last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; bd[i] = last * 3.5; }
    const asrc = ctx.createBufferSource(); asrc.buffer = brown; asrc.loop = true;
    const alp = ctx.createBiquadFilter(); alp.type = 'lowpass'; alp.frequency.value = 380;
    ambGain = ctx.createGain(); ambGain.gain.value = 0;
    asrc.connect(alp); alp.connect(ambGain); ambGain.connect(master); asrc.start();
    applyVoice();
    return true;
  }
  const near = (x, z, full = 8, gone = 70) => { const d = Math.hypot(x - lx, z - lz); return d <= full ? 1 : d >= gone ? 0 : 1 - (d - full) / (gone - full); };
  function wet(node, amt){ if(reverbIn){ const g = ctx.createGain(); g.gain.value = amt; node.connect(g); g.connect(reverbIn); } }

  function crackle(t){
    if(!noiseBuf) return;
    const src = ctx.createBufferSource(); src.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 600 + Math.random() * 900; f.Q.value = 2;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t, Math.random() * 0.8); src.stop(t + 0.07);
  }

  // rebuild the engine waveform for the current voice (safe before the context exists)
  function applyVoice(){
    if(!ctx || !engOsc) return;
    const [odd, even, bc, ba] = voice.h;
    const real = new Float32Array(40), imag = new Float32Array(40);
    for(let n = 1; n < 40; n++){
      const bump = Math.exp(-Math.pow((n - bc) / 2.4, 2)) * ba;
      imag[n] = (1 / Math.pow(n, 0.85)) * (n % 2 ? odd : even) + bump / Math.sqrt(n);
    }
    engOsc.setPeriodicWave(ctx.createPeriodicWave(real, imag));
    if(g2Gain) g2Gain.gain.value = voice.sub;
  }
  // anti-lag / backfire: a low boom with a sharp edge
  function bang(t){
    if(!noiseBuf) return;
    const src = ctx.createBufferSource(); src.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(1800, t); f.frequency.exponentialRampToValueAtTime(200, t + 0.12);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5, t + 0.003); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    src.connect(f); f.connect(g); g.connect(master); wet(g, 0.3);
    src.start(t, Math.random() * 0.8); src.stop(t + 0.18);
  }
  // one formant voice: glottal saw through vowel bandpasses
  function vocal(t, f0, dur, vowel, vol, glide){
    const F = { ah:[800, 1150, 2900], ee:[300, 2300, 3000], oh:[500, 900, 2600], uh:[640, 1190, 2390] }[vowel] || [800, 1150, 2900];
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    o.frequency.setValueAtTime(f0 * 0.85, t); o.frequency.linearRampToValueAtTime(f0 * (glide || 1.15), t + dur * 0.25); o.frequency.linearRampToValueAtTime(f0 * 0.7, t + dur);
    const vib = ctx.createOscillator(); vib.frequency.value = 5.5 + Math.random() * 2; const vg = ctx.createGain(); vg.gain.value = f0 * 0.04; vib.connect(vg); vg.connect(o.frequency);
    const out = ctx.createGain(); out.gain.setValueAtTime(0.0001, t); out.gain.exponentialRampToValueAtTime(vol, t + 0.04); out.gain.setValueAtTime(vol, t + dur * 0.6); out.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    F.forEach((fq, i) => { const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = fq * (0.95 + Math.random() * 0.1); bp.Q.value = 6 + i * 3; const gg = ctx.createGain(); gg.gain.value = [1, 0.6, 0.25][i]; o.connect(bp); bp.connect(gg); gg.connect(out); });
    out.connect(master); wet(out, 0.25);
    o.start(t); vib.start(t); o.stop(t + dur + 0.05); vib.stop(t + dur + 0.05);
  }

  return {
    // call on first user gesture (autoplay policy); safe to call repeatedly
    unlock(){
      gestured=true;
      if(!ensure()) return;
      if(ctx.state==='suspended') ctx.resume();
      started=true;
    },
    // engine character for the current car: cylinders, idle and redline rpm
    setEngine(o){
      cyl = o.cyl || 8; idleRpm = o.idle || 850; redRpm = o.red || 7000;
      voice = voiceFor(o);
      popScale = o.exhaust ? 1 + o.exhaust * 0.35 : 1;
      applyVoice();
    },
    // rpm01: 0..1 between idle and redline, load01: 0..1 throttle — call every frame while driving
    engine(rpm01, load01, shifting){
      if(!ctx || !started) return;
      const r = Math.max(0, Math.min(1.04, rpm01));
      const load = Math.max(0, Math.min(1, load01));
      const t = ctx.currentTime;
      if(r < 0.001 && load < 0.001){ engGain.gain.setTargetAtTime(0, t, 0.08); intakeGain.gain.setTargetAtTime(0, t, 0.08); lastRpm = 0; return; }
      const rpm = idleRpm + (redRpm - idleRpm) * r;
      const fire = rpm / 60 * cyl / 2;                     // firing frequency (Hz)
      engOsc.frequency.setTargetAtTime(fire, t, 0.025);
      engOsc2.frequency.setTargetAtTime(fire / 2, t, 0.025);
      engOsc3.frequency.setTargetAtTime(fire * 3.01, t, 0.025);
      lfo.frequency.setTargetAtTime(Math.max(4, fire / (cyl >= 8 ? 4 : 2)), t, 0.05);
      lfoGain.gain.setTargetAtTime(voice.lope * (1 - r * 0.75), t, 0.05);
      drive.gain.setTargetAtTime((0.8 + load * 2.2 + r * 0.6) * voice.grit, t, 0.05);
      engFilter.frequency.setTargetAtTime((380 + r * 2600 * (0.45 + load * 0.55)) * voice.bright, t, 0.04);
      engWhine.gain.setTargetAtTime((0.03 + r * r * 0.12) * voice.whine, t, 0.05);
      if(voice.turbo){                                         // factory turbo: whistle builds with load * rpm
        const b = Math.max(0, Math.min(1, (r - 0.25) * 1.6)) * load;
        this.turbo(b, 'turbo', load < 0.15);
      }
      const vol = (0.07 + load * 0.08 + r * 0.06) * (shifting ? 0.45 : 1);
      engGain.gain.setTargetAtTime(vol, t, shifting ? 0.015 : 0.05);
      intakeBP.frequency.setTargetAtTime(500 + r * 2400, t, 0.05);
      intakeGain.gain.setTargetAtTime(load * (0.015 + r * 0.05), t, 0.06);
      // exhaust crackles when you lift off at high revs
      popCool -= 1 / 60;
      if(lastLoad > 0.6 && load < 0.1 && r > 0.45) popCool = Math.min(popCool, -0.6);
      if(popCool < -0.01 && load < 0.15 && r > 0.3 && Math.random() < 0.5 * voice.pops * popScale){ crackle(t); if(voice.pops > 0.5 && Math.random() < 0.3) bang(t); }
      if(popCool < -0.01) popCool += 1 / 60 * 0.5; else popCool = Math.max(popCool, 0);
      lastLoad = load; lastRpm = r;
    },
    // sharp gear-change "blip"
    shiftBlip(up){
      if(!ctx || !started) return;
      const t = ctx.currentTime;
      engGain.gain.cancelScheduledValues(t);
      engGain.gain.setValueAtTime(engGain.gain.value, t);
      engGain.gain.linearRampToValueAtTime(engGain.gain.value * 0.35, t + 0.04);
      if(up) crackle(t + 0.05);
    },
    skid(on){
      if(!ctx || !started) return;
      skidGain.gain.setTargetAtTime(on?0.12:0, ctx.currentTime, on?0.05:0.12);
    },
    beep(freq=660, dur=0.08){
      if(!gestured) return; // no context before first gesture
      if(!ensure()) return;
      if(ctx.state==='suspended') ctx.resume();
      const t=ctx.currentTime;
      const o=ctx.createOscillator(); o.type='sine'; o.frequency.value=freq;
      const g=ctx.createGain();
      g.gain.setValueAtTime(0.0001,t);
      g.gain.exponentialRampToValueAtTime(0.25,t+0.012);
      g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
      o.connect(g); g.connect(master);
      o.start(t); o.stop(t+dur+0.03);
    },
    // gunshot: supersonic crack + noise body through a lowpass + a low thump, sent into the street reverb
    shot(kind='pistol', x, z){
      if(!gestured || !ensure()) return;
      const t=ctx.currentTime;
      const P = { pistol:[2600,0.16,0.5], glock:[2900,0.14,0.48], deagle:[1800,0.3,0.8], shotgun:[1400,0.32,0.75], smg:[3000,0.09,0.35],
        ak:[2000,0.22,0.62], rifle:[2200,0.2,0.55], sniper:[1500,0.45,0.9], minigun:[3200,0.06,0.3] }[kind] || [2600,0.16,0.5];
      const k = x == null ? 1 : Math.max(0.12, near(x, z, 6, 120));
      const out = ctx.createGain(); out.gain.value = k; out.connect(master); wet(out, 0.9 - k * 0.45);   // far shots are mostly echo
      // crack
      const cs=ctx.createBufferSource(); cs.buffer=noiseBuf;
      const hp=ctx.createBiquadFilter(); hp.type='highpass'; hp.frequency.value=2500;
      const cg=ctx.createGain(); cg.gain.setValueAtTime(P[2]*0.9,t); cg.gain.exponentialRampToValueAtTime(0.0001,t+0.025);
      cs.connect(hp); hp.connect(cg); cg.connect(out); cs.start(t, Math.random()*0.5); cs.stop(t+0.03);
      // body
      const src=ctx.createBufferSource(); src.buffer=noiseBuf;
      const f=ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.setValueAtTime(P[0],t); f.frequency.exponentialRampToValueAtTime(300,t+P[1]);
      const g=ctx.createGain(); g.gain.setValueAtTime(P[2],t); g.gain.exponentialRampToValueAtTime(0.0001,t+P[1]);
      src.connect(f); f.connect(g); g.connect(out);
      src.start(t, Math.random()*0.5); src.stop(t+P[1]+0.02);
      // thump
      const o=ctx.createOscillator(); o.type='sine'; o.frequency.setValueAtTime(140,t); o.frequency.exponentialRampToValueAtTime(40,t+0.12);
      const og=ctx.createGain(); og.gain.setValueAtTime(P[2]*0.8,t); og.gain.exponentialRampToValueAtTime(0.0001,t+0.14);
      o.connect(og); og.connect(out); o.start(t); o.stop(t+0.16);
      // shell casing tink (your own gun only)
      if(x == null && kind !== 'shotgun' && Math.random() < 0.7){
        const tt = t + 0.35 + Math.random() * 0.2, c = ctx.createOscillator(); c.type = 'triangle'; c.frequency.value = 3800 + Math.random() * 1500;
        const cg2 = ctx.createGain(); cg2.gain.setValueAtTime(0.0001, tt); cg2.gain.exponentialRampToValueAtTime(0.025, tt + 0.003); cg2.gain.exponentialRampToValueAtTime(0.0001, tt + 0.12);
        c.connect(cg2); cg2.connect(master); c.start(tt); c.stop(tt + 0.14);
      }
    },
    // bullet impact: 'flesh' | 'head' | 'metal' | 'wall'
    impact(kind = 'wall'){
      if(!ctx || !started) return;
      const t = ctx.currentTime;
      if(kind === 'metal'){
        const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.setValueAtTime(2400 + Math.random() * 800, t); o.frequency.exponentialRampToValueAtTime(1600, t + 0.2);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.06, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.24); return;
      }
      const src = ctx.createBufferSource(); src.buffer = noiseBuf;
      const f = ctx.createBiquadFilter(); f.type = kind === 'wall' ? 'bandpass' : 'lowpass'; f.frequency.value = kind === 'head' ? 1400 : kind === 'flesh' ? 600 : 1800; f.Q.value = 1;
      const g = ctx.createGain(); g.gain.setValueAtTime(kind === 'head' ? 0.22 : 0.16, t); g.gain.exponentialRampToValueAtTime(0.0001, t + (kind === 'wall' ? 0.05 : 0.09));
      src.connect(f); f.connect(g); g.connect(master); src.start(t, Math.random() * 0.5); src.stop(t + 0.1);
    },
    // a person screams near (x,z): 'scared' | 'hurt' | 'death'
    scream(x, z, kind = 'scared'){
      if(!ctx || !started) return;
      const k = near(x, z, 6, 60); if(k <= 0.02) return;
      const t = ctx.currentTime + Math.random() * 0.08;
      const fem = Math.random() < 0.5, f0 = (fem ? 330 : 190) * (0.9 + Math.random() * 0.25);
      if(kind === 'death') vocal(t, f0 * 0.85, 0.35, 'uh', 0.09 * k, 0.9);
      else if(kind === 'hurt') vocal(t, f0 * 1.1, 0.42, 'oh', 0.11 * k, 1.3);
      else vocal(t, f0 * 1.35, 0.6 + Math.random() * 0.5, Math.random() < 0.6 ? 'ah' : 'ee', 0.1 * k, 1.25);
    },
    // footstep on foot: run = louder/faster, surface: road | grass | dirt | mud | water
    step(run, surface = 'road'){
      if(!ctx || !started) return;
      const t = ctx.currentTime;
      const src = ctx.createBufferSource(); src.buffer = noiseBuf;
      const f = ctx.createBiquadFilter();
      const wetS = surface === 'water' || surface === 'deep' || surface === 'mud';
      f.type = 'bandpass'; f.frequency.value = wetS ? 900 : surface === 'grass' || surface === 'dirt' ? 1400 : (stepAlt ? 2100 : 1800); f.Q.value = wetS ? 0.8 : 1.6;
      const g = ctx.createGain(); const v = (run ? 0.07 : 0.045) * (wetS ? 1.4 : 1);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + (wetS ? 0.16 : 0.07));
      src.connect(f); f.connect(g); g.connect(master); src.start(t, Math.random() * 0.8); src.stop(t + 0.2);
      stepAlt ^= 1;
    },
    // where you are (for distance-based people/gunfire sounds)
    listener(x, z){ lx = x; lz = z; },
    // city bed: 0..1 (call each frame; it smooths). Birds now and then in daylight.
    ambience(level, day = true){
      if(!ctx || !started || !ambGain) return;
      const t = ctx.currentTime;
      ambGain.gain.setTargetAtTime(Math.max(0, Math.min(1, level)) * 0.05, t, 0.6);
      ambBird -= 1 / 60;
      if(day && level > 0.2 && ambBird <= 0){
        ambBird = 3 + Math.random() * 7;
        const n = 2 + (Math.random() * 4 | 0), base = 2600 + Math.random() * 1800;
        for(let i = 0; i < n; i++){
          const tt = t + i * (0.09 + Math.random() * 0.05), o = ctx.createOscillator(); o.type = 'sine';
          o.frequency.setValueAtTime(base, tt); o.frequency.exponentialRampToValueAtTime(base * (1.2 + Math.random() * 0.3), tt + 0.06);
          const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, tt); g.gain.exponentialRampToValueAtTime(0.012 * level, tt + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, tt + 0.08);
          o.connect(g); g.connect(master); o.start(tt); o.stop(tt + 0.1);
        }
      }
    },
    // collision: power 0..1 — crunch of metal + glass tinkle on big hits
    crash(power = 0.5){
      if(!ctx || !started) return;
      const t = ctx.currentTime, p = Math.max(0.1, Math.min(1, power));
      const src = ctx.createBufferSource(); src.buffer = noiseBuf;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(3000, t); f.frequency.exponentialRampToValueAtTime(250, t + 0.35);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5 * p, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25 + p * 0.3);
      src.connect(f); f.connect(g); g.connect(master); wet(g, 0.3); src.start(t, Math.random() * 0.5); src.stop(t + 0.7);
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(90, t); o.frequency.exponentialRampToValueAtTime(35, t + 0.25);
      const og = ctx.createGain(); og.gain.setValueAtTime(0.45 * p, t); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      o.connect(og); og.connect(master); o.start(t); o.stop(t + 0.32);
      if(p > 0.55) for(let i = 0; i < 6; i++){
        const tt = t + 0.04 + Math.random() * 0.25, c = ctx.createOscillator(); c.type = 'triangle'; c.frequency.value = 3000 + Math.random() * 4000;
        const cg = ctx.createGain(); cg.gain.setValueAtTime(0.0001, tt); cg.gain.exponentialRampToValueAtTime(0.03, tt + 0.002); cg.gain.exponentialRampToValueAtTime(0.0001, tt + 0.07);
        c.connect(cg); cg.connect(master); c.start(tt); c.stop(tt + 0.08);
      }
    },
    horn(on){
      if(!ctx || !started) return;
      if(!this._horn){ const a = ctx.createOscillator(), b = ctx.createOscillator(); a.type = b.type = 'square'; a.frequency.value = 415; b.frequency.value = 523;
        const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1600; const g = ctx.createGain(); g.gain.value = 0;
        a.connect(f); b.connect(f); f.connect(g); g.connect(master); a.start(); b.start(); this._horn = g; }
      this._horn.gain.setTargetAtTime(on ? 0.06 : 0, ctx.currentTime, 0.02);
    },
    click(){ this.beep(1800, 0.03); },
    // water splash: a filtered noise "whoosh" + low thump, scaled by how hard you hit
    splash(power = 0.5){
      if(!ctx || !started || !noiseBuf) return;
      const t = ctx.currentTime, p = Math.max(0.1, Math.min(1, power));
      const src = ctx.createBufferSource(); src.buffer = noiseBuf;
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(2600, t); lp.frequency.exponentialRampToValueAtTime(500, t + 0.7);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.32 * p, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4 + p * 0.6);
      src.connect(lp); lp.connect(g); g.connect(master); src.start(t, Math.random() * 0.4); src.stop(t + 1.1);
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.25);
      const og = ctx.createGain(); og.gain.setValueAtTime(0.25 * p, t); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
      o.connect(og); og.connect(master); o.start(t); o.stop(t + 0.32);
    },
    // forced induction: turbo whistle / blower whine rises with boost; blow-off "pssh" when you lift
    turbo(boost01, kind, lifted){
      if(!ctx || !started) return;
      const t = ctx.currentTime;
      if(!turboOsc){
        turboOsc = ctx.createOscillator(); turboOsc.type = 'sine';
        turboOsc2 = ctx.createOscillator(); turboOsc2.type = 'sawtooth';
        const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = 6; f.frequency.value = 2400;
        turboGain = ctx.createGain(); turboGain.gain.value = 0;
        turboOsc.connect(turboGain); turboOsc2.connect(f); f.connect(turboGain); turboGain.connect(master);
        turboOsc.start(); turboOsc2.start(); turboBP = f;
      }
      const b = Math.max(0, Math.min(1, boost01 || 0));
      if(kind === 'roots' || kind === 'centri'){
        turboOsc.frequency.setTargetAtTime(900 + b * 1600, t, 0.05);
        turboOsc2.frequency.setTargetAtTime(450 + b * 900, t, 0.05);
        turboBP.frequency.setTargetAtTime(1200 + b * 1800, t, 0.05);
        turboGain.gain.setTargetAtTime(kind ? 0.012 + b * 0.05 : 0, t, 0.06);
      }else{
        turboOsc.frequency.setTargetAtTime(2200 + b * 4200, t, 0.08);
        turboOsc2.frequency.setTargetAtTime(1100 + b * 2100, t, 0.08);
        turboBP.frequency.setTargetAtTime(3000 + b * 3000, t, 0.08);
        turboGain.gain.setTargetAtTime(kind ? b * b * 0.045 : 0, t, 0.08);
      }
      // blow-off valve: boost was high and the throttle snapped shut
      if(kind === 'turbo' && lifted && lastBoost > 0.55){
        const src = ctx.createBufferSource(); src.buffer = noiseBuf;
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.2;
        bp.frequency.setValueAtTime(3200, t); bp.frequency.exponentialRampToValueAtTime(900, t + 0.45);
        const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16 * lastBoost, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
        src.connect(bp); bp.connect(g); g.connect(master); src.start(t, Math.random() * 0.5); src.stop(t + 0.55);
        lastBoost = 0;
      }
      if(!lifted) lastBoost = b;
    },
    // police siren: classic wail — two detuned triangles swept 650..1350 Hz
    // by a slow LFO. level 0..1 sets loudness; call every frame, it smooths.
    siren(level){
      level = Math.max(0, Math.min(1, level || 0));
      if(!ctx || !started){
        if(level <= 0 || !gestured || !ensure()) { sirenLevel = 0; return; }
      }
      const t = ctx.currentTime;
      if(!sirenOsc){
        sirenOsc = ctx.createOscillator(); sirenOsc.type = 'triangle'; sirenOsc.frequency.value = 900;
        sirenOsc2 = ctx.createOscillator(); sirenOsc2.type = 'triangle'; sirenOsc2.frequency.value = 906;
        sirenLFO = ctx.createOscillator(); sirenLFO.type = 'sine'; sirenLFO.frequency.value = 0.55;
        sirenLFOGain = ctx.createGain(); sirenLFOGain.gain.value = 340;
        sirenLFO.connect(sirenLFOGain);
        sirenLFOGain.connect(sirenOsc.frequency); sirenLFOGain.connect(sirenOsc2.frequency);
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 2.2; bp.frequency.value = 1000;
        sirenGain = ctx.createGain(); sirenGain.gain.value = 0;
        sirenOsc.connect(bp); sirenOsc2.connect(bp); bp.connect(sirenGain); sirenGain.connect(master);
        sirenOsc.start(); sirenOsc2.start(); sirenLFO.start();
      }
      sirenLevel += (level - sirenLevel) * 0.08;
      sirenGain.gain.setTargetAtTime(sirenLevel * 0.11, t, 0.1);
    },
    // BUSTED sting: three descending brass-ish hits
    bustedSting(){
      if(!gestured || !ensure()) return;
      if(ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;
      [392, 311, 233].forEach((f, i) => {
        const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = f;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400;
        const g = ctx.createGain(); const s = t + i * 0.22;
        g.gain.setValueAtTime(0.0001, s);
        g.gain.exponentialRampToValueAtTime(0.22, s + 0.03);
        g.gain.exponentialRampToValueAtTime(0.0001, s + 0.3);
        o.connect(lp); lp.connect(g); g.connect(master);
        o.start(s); o.stop(s + 0.34);
      });
    },
    // police dispatch: radio squelch + two-tone attention blip
    dispatch(){
      if(!gestured || !ensure()) return;
      if(ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;
      // squelch burst: short noise click
      const src = ctx.createBufferSource(); src.buffer = noiseBuf;
      const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 1800;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.14, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
      src.connect(hp); hp.connect(g); g.connect(master);
      src.start(t, Math.random() * 0.5); src.stop(t + 0.1);
      // two-tone blip
      [880, 660].forEach((f, i) => {
        const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f;
        const og = ctx.createGain(); const s = t + 0.1 + i * 0.16;
        og.gain.setValueAtTime(0.0001, s);
        og.gain.exponentialRampToValueAtTime(0.07, s + 0.015);
        og.gain.exponentialRampToValueAtTime(0.0001, s + 0.13);
        o.connect(og); og.connect(master); o.start(s); o.stop(s + 0.15);
      });
    },
    shutdown(){
      if(ctx){ try{ ctx.close(); }catch(e){} }
      ctx=null; master=null; started=false;
      engOsc=engOsc2=engOsc3=engFilter=engGain=skidGain=noiseBuf=null;
      turboOsc=turboOsc2=turboGain=turboBP=null;
      sirenOsc=sirenOsc2=sirenLFO=sirenLFOGain=sirenGain=null; sirenLevel=0;
      reverb=reverbIn=ambGain=g2Gain=null; this._horn=null;
    }
  };
}
