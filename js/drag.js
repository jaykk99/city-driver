// CITY DRIVER — drag race mode (quarter mile).
// Plain JS module. No external assets. Owns the christmas-tree sequence,
// 5-gear manual shifting, AI opponent, finish/payout, and drag camera.

const QUARTER_M = 402;                 // quarter mile in meters
const GEAR_TOP_FRAC = [0.30, 0.47, 0.64, 0.81, 1.0]; // gearTop = frac * topSpeed
const GEAR_MULT     = [1.90, 1.45, 1.15, 0.95, 0.80]; // per-gear accel multiplier
const SHIFT_LO = 0.80, SHIFT_HI = 0.97;               // perfect-shift rpm window
const LIMITER_T = 0.8;                 // seconds at redline before limiter cut
const RACE_TIMEOUT = 45;               // seconds after green before auto-decide
const MPH = 2.2;                       // m/s -> displayed MPH (matches physics.js)

const AI_COLORS = [0xffd166, 0x06d6a0, 0x9b5de5, 0xf15bb5, 0x00bbf9, 0xfee440, 0xef476f];
const $ = id => document.getElementById(id);

function rand(a, b){ return a + Math.random() * (b - a); }
function pick(arr){ return arr[(Math.random() * arr.length) | 0]; }

export function createDragMode(deps){
  const ui = $('drag-ui'), msgEl = $('drag-msg'), resultEl = $('drag-result');
  const rpmBar = $('rpm-bar'), shiftZone = $('rpm-shiftzone'), shiftBtn = $('btn-shift');
  const bulbs = {
    s1: $('bulb-s1'), s2: $('bulb-s2'),
    a1: $('bulb-a1'), a2: $('bulb-a2'), a3: $('bulb-a3'),
    g: $('bulb-g'), r: $('bulb-r'),
  };

  const S = {
    active: false,
    phase: 'idle',        // idle | stage | tree | green | racing | red | done
    t: 0,                 // phase clock
    greenT: 0,            // race clock (from green)
    ambersLit: 0,
    player: null,         // sim state
    ai: null,             // sim state
    aiGroup: null,
    origPos: null, origRotY: 0,
    dirX: 0, dirZ: -1, perpX: 1, perpZ: 0,
    msgTimer: 0,
    finished: false,
  };

  // ---- helpers -----------------------------------------------------------
  function clearBulbs(){ for (const k in bulbs) bulbs[k].classList.remove('lit'); }
  function lit(name){ bulbs[name].classList.add('lit'); }
  function setMsg(text, revertAfter){
    msgEl.textContent = text;
    S.msgTimer = revertAfter || 0;
  }
  function beep(freq, dur){ try { deps.audio.beep(freq, dur); } catch(e){} }

  function statsOf(){
    const p = deps.getPlayer();
    return (p && p.stats) ? p.stats : deps.effectiveStats(p.def, p.upgrades);
  }

  // AI target ET from its stats, scaled by random driver skill 0.85–1.15
  function aiTargetET(aiStats){
    const base = 402 / (0.42 * aiStats.topSpeed + 0.35 * aiStats.accel);
    return Math.min(17, Math.max(8.5, base)) * rand(0.85, 1.15);
  }

  function placeOnStrip(group, lateral){
    const st = deps.city.dragStrip;
    group.position.set(st.startX + S.perpX * lateral, 0, st.startZ + S.perpZ * lateral);
    group.rotation.set(0, Math.atan2(-S.dirX, -S.dirZ), 0); // face +dir (heading 0 = -Z)
  }

  function moveAlong(group, sim){
    const st = deps.city.dragStrip;
    group.position.set(
      st.startX + S.dirX * sim.dist + S.perpX * sim.lateral,
      0,
      st.startZ + S.dirZ * sim.dist + S.perpZ * sim.lateral
    );
  }

  function spinWheels(group, speed, dt){
    const ws = group.userData.wheels;
    if (!ws) return;
    for (const w of ws){
      const spinners = w.userData.spin || [];
      for (const m of spinners) m.rotation.x += speed * dt * 2.2;
    }
  }

  // ---- player launch sim -------------------------------------------------
  function newPlayerSim(stats){
    return {
      dist: 0, speed: 0, lateral: 2,
      gear: 0,            // index into GEAR_TOP_FRAC (gears 1..5)
      rpm: 0.15,
      limiterT: 0,
      bogMul: 1,          // decays back to 1 after a bad shift
      reacted: false, reaction: null,
      et: null, trap: 0,
      stats,
    };
  }

  function playerAccel(sim, throttle, dt){
    const top = sim.stats.topSpeed;
    const gearTop = GEAR_TOP_FRAC[sim.gear] * top;
    const grip = 1 - Math.min(1, sim.speed / (gearTop * 1.02));
    let a = throttle * sim.stats.accel * GEAR_MULT[sim.gear] * Math.max(0, grip);
    a *= sim.bogMul;
    a -= sim.speed * 0.028 + Math.sign(sim.speed) * 0.6; // drag + rolling resistance
    sim.speed = Math.max(0, sim.speed + a * dt);
    sim.dist += sim.speed * dt;
    sim.rpm = Math.min(1.06, sim.speed / gearTop);
    sim.bogMul += (1 - sim.bogMul) * Math.min(1, dt * 2.5);
  }

  function doShift(sim){
    if (sim.gear >= 4) return; // already top gear
    const rpm = sim.rpm;
    sim.gear++;
    if (rpm >= SHIFT_LO && rpm <= SHIFT_HI){
      sim.speed *= 1.015;                       // perfect shift: small boost
      setMsg('PERFECT SHIFT!', 1.0);
      beep(1200, 0.08);
    } else {
      sim.speed *= 0.93;                        // early/late: bog
      sim.bogMul = 0.75;
      setMsg(rpm < SHIFT_LO ? 'TOO EARLY — BOGGED' : 'TOO LATE — BOGGED', 1.0);
      beep(220, 0.15);
    }
    sim.limiterT = 0;
  }

  // ---- AI sim (same shape, scripted shifts) -------------------------------
  function newAiSim(stats){
    const et = aiTargetET(stats);
    const k = 1.1; // accel curve rate
    const denom = et - (1 - Math.exp(-k * et)) / k;
    return {
      dist: 0, speed: 0, lateral: -2,
      et, k, top: 402 / denom,
      reactDelay: rand(0.15, 0.5),
      launched: false, launchT: 0,
      finishET: null, trap: 0,
      stats,
    };
  }

  function aiUpdate(sim, dt){
    if (!sim.launched) return;
    const t = S.greenT - sim.launchT;
    if (t < 0) return;
    sim.speed = sim.top * (1 - Math.exp(-sim.k * t));
    sim.dist += sim.speed * dt;
  }

  // ---- race flow ----------------------------------------------------------
  function startRace(){
    S.phase = 'stage'; S.t = 0;
    clearBulbs(); lit('s1'); lit('s2');
    resultEl.classList.add('hidden'); resultEl.innerHTML = '';
    setMsg('STAGE!');
    rpmBar.style.width = '15%';
    shiftZone.style.left = (SHIFT_LO * 100) + '%';
    shiftZone.style.width = ((SHIFT_HI - SHIFT_LO) * 100) + '%';
    if (shiftBtn) shiftBtn.classList.remove('hidden');
  }

  function goGreen(){
    S.phase = 'green'; S.t = 0; S.greenT = 0;
    lit('g');
    setMsg('GO!');
    beep(880, 0.4);
    S.phase = 'racing';
  }

  function redLight(){
    S.phase = 'red';
    clearBulbs(); lit('r');
    setMsg('FALSE START!');
    beep(180, 0.6);
    finishRace('FALSE START — you jumped the green.');
  }

  function finishRace(note){
    S.phase = 'done'; S.finished = true;
    const p = S.player, a = S.ai;
    // who won: false start always loses; otherwise first across the line;
    // on timeout with no finisher, whoever is further wins
    let won;
    if (note && note.indexOf('FALSE START') === 0) won = false;
    else if (p.et != null && a.finishET != null) won = p.et <= a.finishET;
    else if (p.et != null) won = true;
    else if (a.finishET != null) won = false;
    else won = p.dist >= a.dist;
    const pET = p.et, aET = a.finishET;
    const reaction = p.reaction != null ? p.reaction.toFixed(3) + 's' : '—';
    const trap = (p.trap * MPH).toFixed(1);
    let cash, title;
    if (won){
      const diff = Math.max(0, (aET == null ? pET : aET) - (pET == null ? aET : pET));
      cash = Math.max(400, 400 + 150 * Math.round(diff * 10)); // 400 + 150 per tenth
      title = '🏆 WIN!';
    } else {
      cash = 100; // consolation
      title = (note && note.indexOf('FALSE START') === 0) ? '🚫 DISQUALIFIED' : '😞 LOSE';
    }
    deps.addCash(cash);
    resultEl.innerHTML =
      '<h2>' + title + '</h2>' +
      (note ? '<p>' + note + '</p>' : '') +
      '<p>ET: ' + (pET == null ? 'DNF' : pET.toFixed(3) + 's') +
      ' &nbsp;·&nbsp; AI ET: ' + (aET == null ? 'DNF' : aET.toFixed(3) + 's') + '</p>' +
      '<p>Trap speed: ' + trap + ' MPH &nbsp;·&nbsp; Reaction: ' + reaction + '</p>' +
      '<p>+$' + cash + ' cash</p>' +
      '<button id="drag-rematch" class="mbtn primary">REMATCH</button>' +
      '<button id="drag-back" class="mbtn">EXIT</button>';
    resultEl.classList.remove('hidden');
    $('drag-rematch').onclick = () => { enter(); };
    $('drag-back').onclick = () => { exit(); };
    try { deps.audio.engine(0, 0); deps.audio.skid(false); } catch(e){}
  }

  // ---- public API ----------------------------------------------------------
  function enter(){
    if (S.active) exit();
    const p = deps.getPlayer();
    const group = p.group;
    S.origPos = group.position.clone();
    S.origRotY = group.rotation.y;

    const st = deps.city.dragStrip;
    const len = Math.hypot(st.dirX, st.dirZ) || 1;
    S.dirX = st.dirX / len; S.dirZ = st.dirZ / len;
    S.perpX = -S.dirZ; S.perpZ = S.dirX;

    // player on the line
    placeOnStrip(group, 2);
    group.rotation.set(0, Math.atan2(-S.dirX, -S.dirZ), 0);
    S.player = newPlayerSim(statsOf());

    // AI opponent: random car, random paint, adjacent lane
    const aiDef = pick(deps.CAR_DEFS);
    const aiGroup = deps.buildCar(Object.assign({}, aiDef, { color: pick(AI_COLORS) }));
    deps.scene.add(aiGroup);
    placeOnStrip(aiGroup, -2);
    S.aiGroup = aiGroup;
    S.ai = newAiSim(deps.effectiveStats(aiDef));

    S.active = true; S.finished = false; S.t = 0; S.ambersLit = 0;
    S.greenT = 0; S.msgTimer = 0;

    ui.classList.remove('hidden');
    deps.controls.setMode('drag');

    // cinematic side/behind view of the start line
    const cam = deps.camera;
    cam.position.set(
      st.startX - S.dirX * 12 + S.perpX * 12,
      5,
      st.startZ - S.dirZ * 12 + S.perpZ * 12
    );
    cam.lookAt(st.startX + S.dirX * 8, 1, st.startZ + S.dirZ * 8);

    startRace();
  }

  function exit(){
    if (S.aiGroup){ deps.scene.remove(S.aiGroup); S.aiGroup = null; }
    const p = deps.getPlayer();
    if (p && p.group && S.origPos){
      p.group.position.copy(S.origPos);
      p.group.rotation.y = S.origRotY;
    }
    ui.classList.add('hidden');
    resultEl.classList.add('hidden');
    if (shiftBtn) shiftBtn.classList.add('hidden');
    try { deps.controls.setMode('drive'); } catch(e){}
    try { deps.audio.engine(0, 0); deps.audio.skid(false); } catch(e){}
    S.active = false; S.phase = 'idle'; S.finished = false;
    clearBulbs();
  }

  function update(dt){
    if (!S.active) return;
    dt = Math.min(dt, 0.05);
    const input = deps.controls.input || {};
    const throttle = Math.max(0, Math.min(1, input.throttle || 0));

    // false start: throttle before green
    if ((S.phase === 'stage' || S.phase === 'tree') && throttle > 0.5){
      redLight();
      return;
    }

    if (S.msgTimer > 0){
      S.msgTimer -= dt;
      if (S.msgTimer <= 0 && S.phase === 'racing') setMsg('GO!');
    }

    if (S.phase === 'stage'){
      S.t += dt;
      if (S.t >= 1.0){ S.phase = 'tree'; S.t = 0; S.ambersLit = 0; setMsg('READY…'); }
    } else if (S.phase === 'tree'){
      S.t += dt;
      const want = Math.min(3, Math.floor(S.t / 0.5) + 1);
      while (S.ambersLit < want){
        S.ambersLit++;
        lit('a' + S.ambersLit);
        beep(440, 0.15);
      }
      if (S.t >= 1.5) goGreen();
    } else if (S.phase === 'racing'){
      S.greenT += dt;
      const p = S.player, a = S.ai;

      // reaction time: first throttle stab after green
      if (!p.reacted && throttle > 0.5){
        p.reacted = true;
        p.reaction = S.greenT;
      }

      // AI launches after its reaction delay
      if (!a.launched && S.greenT >= a.reactDelay){ a.launched = true; a.launchT = S.greenT; }

      // player physics + shifting
      playerAccel(p, throttle, dt);
      if (deps.controls.consumeShift && deps.controls.consumeShift()) doShift(p);

      // limiter: pinned at redline too long -> cut
      if (p.rpm >= 1.0 && throttle > 0.3){
        p.limiterT += dt;
        if (p.limiterT >= LIMITER_T){
          p.speed *= 0.90; p.limiterT = 0;
          setMsg('LIMITER!', 0.8);
          beep(160, 0.2);
        }
      } else {
        p.limiterT = Math.max(0, p.limiterT - dt * 2);
      }

      aiUpdate(a, dt);

      // finish detection
      if (p.et == null && p.dist >= QUARTER_M){ p.et = S.greenT; p.trap = p.speed; }
      if (a.finishET == null && a.dist >= QUARTER_M){ a.finishET = S.greenT; a.trap = a.speed; }

      const timedOut = S.greenT >= RACE_TIMEOUT;
      if ((p.et != null && a.finishET != null) || timedOut ||
          (p.et != null && S.greenT > p.et + 8) || (a.finishET != null && S.greenT > a.finishET + 8)){
        finishRace(timedOut && p.et == null && a.finishET == null ? 'TIMEOUT — nobody finished.' : null);
        return;
      }

      // HUD: rpm bar + engine audio
      rpmBar.style.width = (Math.min(1, p.rpm) * 100) + '%';
      try {
        deps.audio.engine(p.rpm, throttle);
        deps.audio.skid(throttle > 0.8 && p.speed < 8 && p.gear === 0);
      } catch(e){}
    }

    // move cars + wheels every frame while active (staged cars sit still)
    const pg = deps.getPlayer().group;
    moveAlong(pg, S.player);
    if (S.aiGroup) moveAlong(S.aiGroup, S.ai);
    spinWheels(pg, S.player.speed, dt);
    if (S.aiGroup) spinWheels(S.aiGroup, S.ai.speed, dt);

    // chase camera: side/behind cinematic follow
    if (S.phase === 'racing' || S.phase === 'done'){
      const cam = deps.camera;
      const px = pg.position.x, pz = pg.position.z;
      const cx = px - S.dirX * 11 + S.perpX * 7;
      const cz = pz - S.dirZ * 11 + S.perpZ * 7;
      cam.position.x += (cx - cam.position.x) * Math.min(1, dt * 4);
      cam.position.y += (4.5 - cam.position.y) * Math.min(1, dt * 4);
      cam.position.z += (cz - cam.position.z) * Math.min(1, dt * 4);
      cam.lookAt(px + S.dirX * 12, 1.2, pz + S.dirZ * 12);
    }
  }

  // wire exit button once
  $('drag-exit').onclick = () => exit();

  return {
    enter, exit, update,
    get active(){ return S.active; },
  };
}
