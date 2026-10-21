// CITY DRIVER — procedural WebAudio: engine, skid, UI beeps. No audio assets.
// All nodes are created once in unlock(); per-frame calls only set values (no allocs).
export function createAudio(){
  let ctx=null, master=null;
  let engOsc=null, engOsc2=null, engOsc3=null, engFilter=null, engGain=null, engWhine=null;
  let pulseWave=null, lfo=null, lfoGain=null, shaper=null, drive=null, intakeBP=null, intakeGain=null;
  let lastLoad=0, lastRpm=0, popCool=0, cyl=8, idleRpm=850, redRpm=7000;
  let skidGain=null, noiseBuf=null;
  let turboOsc=null, turboOsc2=null, turboGain=null, turboBP=null, lastBoost=0;
  let sirenOsc=null, sirenOsc2=null, sirenLFO=null, sirenLFOGain=null, sirenGain=null, sirenLevel=0;
  let started=false, gestured=false; // never create AudioContext before a user gesture (autoplay policy)

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
    const g2 = ctx.createGain(); g2.gain.value = 0.35;
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
    return true;
  }

  function crackle(t){
    if(!noiseBuf) return;
    const src = ctx.createBufferSource(); src.buffer = noiseBuf;
    const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 600 + Math.random() * 900; f.Q.value = 2;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t, Math.random() * 0.8); src.stop(t + 0.07);
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
    setEngine(o){ cyl = o.cyl || 8; idleRpm = o.idle || 850; redRpm = o.red || 7000; },
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
      lfoGain.gain.setTargetAtTime((cyl >= 8 ? 0.22 : 0.1) * (1 - r * 0.7), t, 0.05);
      drive.gain.setTargetAtTime(0.8 + load * 2.2 + r * 0.6, t, 0.05);
      engFilter.frequency.setTargetAtTime(380 + r * 2600 * (0.45 + load * 0.55), t, 0.04);
      engWhine.gain.setTargetAtTime(0.03 + r * r * 0.12, t, 0.05);
      const vol = (0.07 + load * 0.08 + r * 0.06) * (shifting ? 0.45 : 1);
      engGain.gain.setTargetAtTime(vol, t, shifting ? 0.015 : 0.05);
      intakeBP.frequency.setTargetAtTime(500 + r * 2400, t, 0.05);
      intakeGain.gain.setTargetAtTime(load * (0.015 + r * 0.05), t, 0.06);
      // exhaust crackles when you lift off at high revs
      popCool -= 1 / 60;
      if(lastLoad > 0.6 && load < 0.1 && r > 0.45) popCool = Math.min(popCool, -0.6);
      if(popCool < -0.01 && load < 0.15 && r > 0.3 && Math.random() < 0.18){ crackle(t); }
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
    // gunshot: noise burst through a lowpass, plus a low thump
    shot(kind='pistol'){
      if(!gestured || !ensure()) return;
      const t=ctx.currentTime;
      const P = { pistol:[2600,0.16,0.5], glock:[2900,0.14,0.48], deagle:[1800,0.3,0.8], shotgun:[1400,0.32,0.75], smg:[3000,0.09,0.35],
        ak:[2000,0.22,0.62], rifle:[2200,0.2,0.55], sniper:[1500,0.45,0.9], minigun:[3200,0.06,0.3] }[kind] || [2600,0.16,0.5];
      const src=ctx.createBufferSource(); src.buffer=noiseBuf;
      const f=ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.setValueAtTime(P[0],t); f.frequency.exponentialRampToValueAtTime(300,t+P[1]);
      const g=ctx.createGain(); g.gain.setValueAtTime(P[2],t); g.gain.exponentialRampToValueAtTime(0.0001,t+P[1]);
      src.connect(f); f.connect(g); g.connect(master);
      src.start(t, Math.random()*0.5); src.stop(t+P[1]+0.02);
      const o=ctx.createOscillator(); o.type='sine'; o.frequency.setValueAtTime(140,t); o.frequency.exponentialRampToValueAtTime(40,t+0.12);
      const og=ctx.createGain(); og.gain.setValueAtTime(P[2]*0.8,t); og.gain.exponentialRampToValueAtTime(0.0001,t+0.14);
      o.connect(og); og.connect(master); o.start(t); o.stop(t+0.16);
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
    }
  };
}
