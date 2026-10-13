// CITY DRIVER — tuning shop UI: PERFORMANCE / OFF-ROAD / TUNE / DYNO tabs.
// Parts are bought per car; once you own a part you can swap it back in free.
import { ENGINES, ADDERS, NITROUS, NITROUS_PRICE, BOTTLES, LEVEL_PRICE, TRANS, TIRES, LIFTS, TIRE_SIZES, BODY,
  FD_MIN, FD_MAX, OFFSET_MIN, OFFSET_MAX, findPart, normalizeBuild, maxTireSize, buildStats, dynoCurve, timeslip, BASE } from './tuning.js';

const money = n => n ? '$' + n.toLocaleString() : 'FREE';
const MPH = 2.2;

// api = { save, getDef(id), persist(), onBuild(), toast(msg), beep(f,d), syncCash(), audio }
export function createTuningUI(api){
  const $ = id => document.getElementById(id);
  const perfEl = $('garage-perf'), offEl = $('garage-offroad'), tuneEl = $('garage-tune'), dynoEl = $('garage-dyno');
  const save = api.save;
  let dynoAnim = 0;

  const carId = () => save.currentCar;
  const def = () => api.getDef(carId());
  const build = () => (save.build[carId()] = normalizeBuild(save.build[carId()]));
  const owned = () => (save.parts[carId()] = save.parts[carId()] || []);
  const owns = key => owned().includes(key);

  // buy (if needed) + install. returns true on success
  function acquire(key, price, apply){
    if(!owns(key) && price > 0){
      if(save.cash < price){ api.toast('Not enough cash — need ' + money(price)); api.beep(220, 0.12); return false; }
      save.cash -= price;
      owned().push(key);
      api.beep(880, 0.08);
    }else if(!owns(key)) owned().push(key);
    apply(build());
    save.build[carId()] = normalizeBuild(save.build[carId()]);
    api.persist(); api.onBuild(); api.syncCash();
    renderAll();
    return true;
  }

  // ---------- small renderers ----------
  const sec = (title, inner, sub = '') => `<div class="tsec"><div class="tsec-h"><b>${title}</b>${sub ? '<small>' + sub + '</small>' : ''}</div>${inner}</div>`;
  function optRow(cat, list, cur, label, priceOf, extra = () => '', lockedOf = () => null){
    return `<div class="topts">` + list.map(p => {
      const key = cat + ':' + p.id, isCur = String(p.id) === String(cur), have = owns(key) || !priceOf(p);
      const lock = lockedOf(p);
      const tag = isCur ? 'INSTALLED' : lock ? '🔒 ' + lock : have ? 'OWNED' : money(priceOf(p));
      return `<button class="topt${isCur ? ' cur' : ''}${lock ? ' locked' : ''}" data-cat="${cat}" data-id="${p.id}" ${lock ? 'disabled' : ''}>
        <b>${label(p)}</b>${extra(p) ? '<i>' + extra(p) + '</i>' : ''}<small class="${!isCur && !have && !lock && save.cash < priceOf(p) ? 'poor' : ''}">${tag}</small></button>`;
    }).join('') + `</div>`;
  }
  function levelRow(cat, cur, names){
    let h = `<div class="topts">`;
    for(let l = 0; l <= 3; l++){
      const key = cat + ':' + l, price = LEVEL_PRICE[cat][l];
      const have = l === 0 || owns(key) || owned().some(k => k.startsWith(cat + ':') && +k.split(':')[1] >= l);
      const isCur = l === cur;
      h += `<button class="topt sm${isCur ? ' cur' : ''}" data-cat="${cat}" data-id="${l}"><b>${names[l]}</b><small class="${!isCur && !have && save.cash < price ? 'poor' : ''}">${isCur ? 'INSTALLED' : have ? 'OWNED' : money(price)}</small></button>`;
    }
    return h + `</div>`;
  }
  function statLine(st){
    const slip = timeslip(st);
    return `<div class="tstat"><span><b>${Math.round(st.hp)}</b> hp</span><span><b>${Math.round(st.kg)}</b> kg</span>
      <span><b>${slip.zero60 ? slip.zero60.toFixed(2) : '—'}</b>s 0-60</span><span><b>${slip.et ? slip.et.toFixed(2) : '—'}</b>s ¼ mi</span>
      <span><b>${Math.round(st.topSpeed * MPH)}</b> mph</span><span>off-road <b>${Math.round(st.offroad * 100)}</b></span></div>`;
  }

  // ---------- PERFORMANCE ----------
  function renderPerf(){
    const b = build(), d = def(), bs = BASE[d.id] || BASE.sport;
    perfEl.innerHTML = statLine(buildStats(d, b)) +
      sec('Engine swap', optRow('engine', ENGINES, b.engine, p => p.name, p => p.price, p => (p.id === 'stock' ? bs.hp : p.hp) + ' hp')) +
      sec('Power adder', optRow('adder', ADDERS, b.adder, p => p.name, p => p.price, p => p.maxPsi ? 'up to ' + p.maxPsi + ' psi' + (p.kind === 'turbo' ? ' · lag' : ' · instant') : '')) +
      sec('Nitrous', optRow('nitrous', NITROUS.map((v, i) => ({ id:v, i })), b.nitrous, p => p.id ? p.id + ' shot' : 'Stock kit', p => NITROUS_PRICE[p.i]) +
        optRow('bottle', BOTTLES, b.bottle, p => p.name + ' bottle', p => p.price, p => p.time ? '+' + p.time + 's' : ''), 'hold N₂O to spray') +
      sec('ECU tune', levelRow('ecu', b.ecu, ['Stock', 'Stage 1', 'Stage 2', 'Stage 3']), '+4% hp & higher redline per stage') +
      sec('Intake', levelRow('intake', b.intake, ['Stock', 'Cold air', 'Ported', 'Race'])) +
      sec('Exhaust', levelRow('exhaust', b.exhaust, ['Stock', 'Cat-back', 'Headers', 'Straight pipe'])) +
      sec('Weight reduction', levelRow('weight', b.weight, ['None', 'Stage 1', 'Stage 2', 'Gutted']), '-5% weight per stage') +
      sec('Transmission', optRow('trans', TRANS, b.trans, p => p.name, p => p.price, p => (p.shift * 1000 | 0) + ' ms shifts')) +
      sec('Tires', optRow('tires', TIRES, b.tires, p => p.name, p => p.price, p => 'launch ×' + p.launch.toFixed(2))) +
      sec('Brakes', levelRow('brakes', b.brakes, ['Stock', 'Sport', 'Big brake kit', 'Carbon ceramic']));
  }

  // ---------- OFF-ROAD ----------
  function renderOff(){
    const b = build(), d = def();
    const maxTs = maxTireSize(b.lift);
    offEl.innerHTML = statLine(buildStats(d, b)) +
      sec('Suspension', optRow('lift', LIFTS, b.lift, p => p.name, p => p.price), 'more lift = bigger tires fit') +
      sec('Tire size', optRow('tireSize', TIRE_SIZES, b.tireSize, p => p.name, p => p.price, () => '',
        p => p.id > maxTs ? 'needs ' + (['2"', '4"', '6"'][Math.min(2, p.id - 2)] || 'more') + ' lift' : null)) +
      sec('Tires', optRow('tires', TIRES, b.tires, p => p.name, p => p.price, p => 'off-road ' + Math.round(p.off * 100))) +
      sec('Parts', `<div class="topts">` + BODY.map(p => {
        const on = b.body.includes(p.id), have = owns('body:' + p.id);
        return `<button class="topt${on ? ' cur' : ''}" data-cat="body" data-id="${p.id}"><b>${p.name}</b>${p.note ? '<i>' + p.note + '</i>' : ''}<small class="${!on && !have && save.cash < p.price ? 'poor' : ''}">${on ? 'ON — tap to remove' : have ? 'OWNED' : money(p.price)}</small></button>`;
      }).join('') + `</div>`);
  }

  // ---------- TUNE (sliders) ----------
  function renderTune(){
    const b = build(), d = def(), add = findPart(ADDERS, b.adder);
    const st = buildStats(d, b);
    tuneEl.innerHTML = statLine(st) +
      sec('Boost', add.maxPsi
        ? `<div class="tslider"><input type="range" id="tn-psi" min="0" max="${add.maxPsi}" step="1" value="${b.psi}"><span id="tn-psi-v">${b.psi} psi</span></div>`
        : `<p class="store-tip">Install a turbo or supercharger in PERFORMANCE to tune boost.</p>`, add.maxPsi ? add.name : '') +
      sec('Final drive', `<div class="tslider"><span>accel</span><input type="range" id="tn-fd" min="${FD_MIN}" max="${FD_MAX}" step="0.05" value="${b.fd}" style="direction:rtl"><span>top speed</span><span id="tn-fd-v">${b.fd.toFixed(2)}</span></div>`,
        'short gears launch harder, tall gears go faster') +
      sec('Wheel offset', `<div class="tslider"><input type="range" id="tn-off" min="${OFFSET_MIN}" max="${OFFSET_MAX}" step="0.01" value="${b.offset}"><span id="tn-off-v">${Math.round(b.offset * 100)} cm</span></div>`, 'wider stance = more stable') +
      `<button class="mbtn" id="tn-reset" style="width:100%">RESET TUNE</button>`;
    const bind = (id, key, fmt) => {
      const el = $(id); if(!el) return;
      el.addEventListener('input', () => {
        const v = +el.value; build()[key] = v; $(id + '-v').textContent = fmt(v);
        save.build[carId()] = normalizeBuild(build()); api.onBuild(true);
        tuneEl.querySelector('.tstat').outerHTML = statLine(buildStats(d, build()));
      });
      el.addEventListener('change', () => { api.persist(); api.onBuild(); });
    };
    bind('tn-psi', 'psi', v => v + ' psi');
    bind('tn-fd', 'fd', v => v.toFixed(2));
    bind('tn-off', 'offset', v => Math.round(v * 100) + ' cm');
    $('tn-reset').onclick = () => { const x = build(); x.psi = Math.round(findPart(ADDERS, x.adder).maxPsi * 0.6); x.fd = 3.5; x.offset = 0; api.persist(); api.onBuild(); renderTune(); };
  }

  // ---------- DYNO ----------
  function renderDyno(){
    const d = def(), st = buildStats(d, build()), slip = timeslip(st);
    const curve = dynoCurve(st, 40);
    const peakHp = curve.reduce((a, p) => p.hp > a.hp ? p : a), peakTq = curve.reduce((a, p) => p.tq > a.tq ? p : a);
    dynoEl.innerHTML = `<div class="dyno-wrap"><canvas id="dyno-cv" width="560" height="230"></canvas>
      <div class="dyno-legend"><span class="hpc">■ HP</span><span class="tqc">■ TORQUE</span></div></div>
      <div class="dyno-cards">
        <div><small>PEAK POWER</small><b>${peakHp.hp}</b><i>hp @ ${peakHp.rpm} rpm</i></div>
        <div><small>PEAK TORQUE</small><b>${peakTq.tq}</b><i>lb-ft @ ${peakTq.rpm} rpm</i></div>
        <div><small>WEIGHT</small><b>${Math.round(st.kg)}</b><i>kg · ${(st.hp / st.kg * 1000).toFixed(0)} hp/t</i></div>
        <div><small>0-60</small><b>${slip.zero60 ? slip.zero60.toFixed(2) : '—'}</b><i>sec</i></div>
        <div><small>60 FT</small><b>${slip.sixtyFt ? slip.sixtyFt.toFixed(3) : '—'}</b><i>sec ${st.traction < 34 && st.hp > 700 ? '· needs grip!' : ''}</i></div>
        <div><small>¼ MILE</small><b>${slip.et ? slip.et.toFixed(2) : '—'}</b><i>sec @ ${Math.round(slip.trap)} mph</i></div>
        <div><small>TOP SPEED</small><b>${Math.round(st.topSpeed * MPH)}</b><i>mph</i></div>
        <div><small>BOOST</small><b>${st.maxPsi ? st.psi : 0}</b><i>psi${st.boostKind ? ' · ' + (st.boostKind === 'turbo' ? 'turbo' : 'blower') : ''}</i></div>
      </div>
      <button class="mbtn primary" id="dyno-run" style="width:100%">▶ RUN DYNO PULL</button>`;
    drawDyno(curve, 1);
    $('dyno-run').onclick = () => runPull(curve, st);
  }
  function drawDyno(curve, frac){
    const cv = $('dyno-cv'); if(!cv) return;
    const g = cv.getContext('2d'), W = cv.width, H = cv.height, pad = 34;
    g.clearRect(0, 0, W, H);
    g.fillStyle = '#0b1122'; g.fillRect(0, 0, W, H);
    const maxV = Math.max(...curve.map(p => Math.max(p.hp, p.tq))) * 1.12;
    const rpm0 = curve[0].rpm, rpm1 = curve[curve.length - 1].rpm;
    const X = r => pad + (r - rpm0) / (rpm1 - rpm0) * (W - pad - 10), Y = v => H - pad + 6 - v / maxV * (H - pad - 10);
    g.strokeStyle = 'rgba(255,255,255,.08)'; g.lineWidth = 1; g.fillStyle = '#5b6b8c'; g.font = '10px sans-serif';
    for(let i = 0; i <= 4; i++){ const v = maxV * i / 4; g.beginPath(); g.moveTo(pad, Y(v)); g.lineTo(W - 10, Y(v)); g.stroke(); g.fillText(Math.round(v), 2, Y(v) + 3); }
    for(let r = Math.ceil(rpm0 / 1000) * 1000; r <= rpm1; r += 1000){ g.fillText((r / 1000) + 'k', X(r) - 6, H - 8); }
    const n = Math.max(2, Math.round(curve.length * frac));
    for(const [key, col] of [['tq', '#38bdf8'], ['hp', '#ff5e3a']]){
      g.strokeStyle = col; g.lineWidth = 3; g.beginPath();
      for(let i = 0; i < n; i++){ const p = curve[i]; i ? g.lineTo(X(p.rpm), Y(p[key])) : g.moveTo(X(p.rpm), Y(p[key])); }
      g.stroke();
    }
  }
  function runPull(curve, st){
    cancelAnimationFrame(dynoAnim);
    const t0 = performance.now(), dur = 3000;
    if(api.audio && api.audio.setEngine) api.audio.setEngine(st.engine);
    const step = now => {
      const f = Math.min(1, (now - t0) / dur);
      drawDyno(curve, f);
      if(api.audio){ api.audio.engine(0.05 + f * 0.97, 1, false); if(api.audio.turbo) api.audio.turbo(st.boostKind ? Math.min(1, f * 1.3) : 0, st.boostKind); }
      if(f < 1) dynoAnim = requestAnimationFrame(step);
      else if(api.audio){ api.audio.engine(0, 0); if(api.audio.turbo) api.audio.turbo(0, st.boostKind, true); }
    };
    dynoAnim = requestAnimationFrame(step);
  }

  // ---------- clicks ----------
  function onClick(e){
    const btn = e.target.closest('button[data-cat]'); if(!btn || btn.disabled) return;
    const cat = btn.dataset.cat, raw = btn.dataset.id;
    const b = build();
    switch(cat){
      case 'engine': { const p = findPart(ENGINES, raw); acquire('engine:' + p.id, p.price, x => x.engine = p.id); break; }
      case 'adder': { const p = findPart(ADDERS, raw); acquire('adder:' + p.id, p.price, x => { x.adder = p.id; x.psi = Math.round(p.maxPsi * 0.6); }); break; }
      case 'nitrous': { const v = +raw, i = NITROUS.indexOf(v); acquire('nitrous:' + v, NITROUS_PRICE[i], x => x.nitrous = v); break; }
      case 'bottle': { const p = findPart(BOTTLES, raw); acquire('bottle:' + p.id, p.price, x => x.bottle = p.id); break; }
      case 'ecu': case 'intake': case 'exhaust': case 'weight': case 'brakes': {
        const l = +raw, have = l === 0 || owned().some(k => k.startsWith(cat + ':') && +k.split(':')[1] >= l);
        acquire(cat + ':' + l, have ? 0 : LEVEL_PRICE[cat][l], x => x[cat] = l); break;
      }
      case 'trans': { const p = findPart(TRANS, raw); acquire('trans:' + p.id, p.price, x => x.trans = p.id); break; }
      case 'tires': { const p = findPart(TIRES, raw); acquire('tires:' + p.id, p.price, x => x.tires = p.id); break; }
      case 'lift': { const p = findPart(LIFTS, raw); acquire('lift:' + p.id, p.price, x => { x.lift = p.id; x.tireSize = Math.min(x.tireSize, maxTireSize(p.id)); }); break; }
      case 'tireSize': { const p = TIRE_SIZES[+raw]; acquire('tireSize:' + p.id, p.price, x => x.tireSize = p.id); break; }
      case 'body': {
        const p = BODY.find(q => q.id === raw);
        if(b.body.includes(raw)){ b.body = b.body.filter(x => x !== raw); api.persist(); api.onBuild(); renderAll(); }
        else acquire('body:' + raw, p.price, x => x.body.push(raw));
        break;
      }
    }
  }
  for(const el of [perfEl, offEl]) el.addEventListener('click', onClick);

  function renderAll(){ renderPerf(); renderOff(); if(!tuneEl.classList.contains('hidden')) renderTune(); if(!dynoEl.classList.contains('hidden')) renderDyno(); }
  return { refresh(){ renderPerf(); renderOff(); renderTune(); renderDyno(); }, onTab(t){ if(t === 'tune') renderTune(); if(t === 'dyno') renderDyno(); } };
}
