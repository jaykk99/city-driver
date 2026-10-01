// CITY DRIVER — procedural WebAudio: engine, skid, UI beeps. No audio assets.
// All nodes are created once in unlock(); per-frame calls only set values (no allocs).
export function createAudio(){
  let ctx=null, master=null;
  let engOsc=null, engOsc2=null, engFilter=null, engGain=null;
  let skidGain=null;
  let started=false, gestured=false; // never create AudioContext before a user gesture (autoplay policy)

  function ensure(){
    if(ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if(!AC) return false;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.5;
    master.connect(ctx.destination);

    // engine: detuned saw + sub square -> lowpass -> gain
    engOsc = ctx.createOscillator(); engOsc.type='sawtooth'; engOsc.frequency.value=70;
    engOsc2 = ctx.createOscillator(); engOsc2.type='square'; engOsc2.frequency.value=38;
    engFilter = ctx.createBiquadFilter(); engFilter.type='lowpass';
    engFilter.frequency.value=400; engFilter.Q.value=2;
    engGain = ctx.createGain(); engGain.gain.value=0;
    engOsc.connect(engFilter); engOsc2.connect(engFilter);
    engFilter.connect(engGain); engGain.connect(master);
    engOsc.start(); engOsc2.start();

    // skid: looped noise buffer -> bandpass -> gain
    const len = ctx.sampleRate;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for(let i=0;i<len;i++) d[i]=Math.random()*2-1;
    const src = ctx.createBufferSource(); src.buffer=buf; src.loop=true;
    const bp = ctx.createBiquadFilter(); bp.type='bandpass';
    bp.frequency.value=900; bp.Q.value=1.1;
    skidGain = ctx.createGain(); skidGain.gain.value=0;
    src.connect(bp); bp.connect(skidGain); skidGain.connect(master);
    src.start();
    return true;
  }

  return {
    // call on first user gesture (autoplay policy); safe to call repeatedly
    unlock(){
      gestured=true;
      if(!ensure()) return;
      if(ctx.state==='suspended') ctx.resume();
      started=true;
    },
    // rpm01: 0..1 engine revs, load01: 0..1 throttle — call every frame while driving
    engine(rpm01, load01){
      if(!ctx || !started) return;
      const rpm = Math.max(0, Math.min(1, rpm01));
      const load = Math.max(0, Math.min(1, load01));
      const t = ctx.currentTime;
      const f = 60 + rpm*220;
      engOsc.frequency.setTargetAtTime(f, t, 0.03);
      engOsc2.frequency.setTargetAtTime(f*0.5+3, t, 0.03);
      engFilter.frequency.setTargetAtTime(300 + rpm*900, t, 0.05);
      engGain.gain.setTargetAtTime(load*0.11 + rpm*0.04, t, 0.06);
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
    shutdown(){
      if(ctx){ try{ ctx.close(); }catch(e){} }
      ctx=null; master=null; started=false;
      engOsc=engOsc2=engFilter=engGain=skidGain=null;
    }
  };
}
