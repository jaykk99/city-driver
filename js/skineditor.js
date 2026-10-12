// CITY DRIVER — skin editor overlay. Everything here is free.
// The 3D preview is the live game scene: main.js orbits the camera around
// your car (CAR tab) or your driver (DRIVER tab) while this panel is open.
import { PALETTE, SKIN_TONES, HAIR_COLORS, STRIPES, TINTS, HATS, HAT_NAMES,
  carSkinFor, cleanName, hexStr } from './skins.js';

const STRIPE_NAMES = { none:'None', center:'Center', dual:'Dual', side:'Side' };
const TINT_NAMES = { clear:'Clear', dark:'Dark', limo:'Limo' };

// api = { save, persist(), cars:CAR_DEFS, onCar(), onOutfit(), onName(), onTab(tab), beep(f,d) }
export function createSkinEditor(api){
  const $ = id => document.getElementById(id);
  const root = $('skin-editor'), body = $('se-body');
  const s = api.save;
  let tab = 'car', open = false;

  function swatches(key, list, current, opts = {}){
    let h = `<div class="swatch-row se-row" data-key="${key}">`;
    if(opts.off) h += `<button class="swatch off${current == null ? ' sel' : ''}" data-v="off" aria-label="off">OFF</button>`;
    for(const c of list) h += `<button class="swatch${c === current ? ' sel' : ''}" data-v="${c}" style="background:${hexStr(c)}" aria-label="color"></button>`;
    const custom = current != null && !list.includes(current);
    h += `<label class="swatch custom${custom ? ' sel' : ''}" style="${custom ? 'background:' + hexStr(current) : ''}" title="Any color">` +
         `<input type="color" data-key="${key}" value="${hexStr(current == null ? 0xffffff : current)}">🎨</label>`;
    return h + '</div>';
  }
  function choices(key, list, names, current){
    return `<div class="swatch-row se-row" data-key="${key}">` + list.map(v =>
      `<button class="wheel-opt${v === current ? ' sel' : ''}" data-v="${v}"><b>${names[v]}</b></button>`).join('') + '</div>';
  }
  const sec = (title, inner) => `<div class="style-sec"><b>${title}</b>${inner}</div>`;

  function renderCar(){
    const id = s.currentCar, k = carSkinFor(s, id);
    const owned = api.cars.filter(d => s.owned.includes(d.id));
    const carRow = `<div class="swatch-row se-row" data-key="car">` + owned.map(d =>
      `<button class="wheel-opt${d.id === id ? ' sel' : ''}" data-v="${d.id}"><b>${d.name}</b></button>`).join('') + '</div>';
    body.innerHTML =
      sec('Car', carRow) +
      sec('Body paint', swatches('paint', PALETTE, s.paint[id])) +
      sec('Rims', swatches('rims', [0xb9bec6, 0x17181c, 0xc9962e, 0x22e6ff, 0xd7263d, 0xf8fafc, 0x4ade80, 0xa855f7], k.rims)) +
      sec('Racing stripes', choices('stripes', STRIPES, STRIPE_NAMES, k.stripes)) +
      (k.stripes !== 'none' ? sec('Stripe color', swatches('stripe', PALETTE, k.stripe)) : '') +
      sec('Underglow', swatches('glow', [0x22e6ff, 0xff2e63, 0x4ade80, 0xa855f7, 0xffd23f, 0xf8fafc], k.glow, { off:true })) +
      sec('Window tint', choices('tint', TINTS, TINT_NAMES, k.tint));
  }

  function renderDriver(){
    const o = s.outfit;
    body.innerHTML =
      sec('Name (shown online)', `<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g, '')}" autocomplete="off" spellcheck="false">`) +
      sec('Shirt', swatches('shirt', PALETTE, o.shirt)) +
      sec('Pants', swatches('pants', [0x2d3748, 0x1e3a8a, 0x111827, 0x6b7280, 0x8a5a1a, 0xf8fafc, 0x7a1010, 0x16a34a], o.pants)) +
      sec('Skin tone', swatches('skin', SKIN_TONES, o.skin)) +
      sec('Hair', swatches('hair', HAIR_COLORS, o.hair)) +
      sec('Hat', choices('hat', HATS, HAT_NAMES, o.hat)) +
      (o.hat !== 'none' ? sec('Hat color', swatches('hatColor', PALETTE, o.hatColor)) : '');
    const n = $('se-name');
    n.addEventListener('input', () => {
      const v = cleanName(n.value);
      if(v){ s.name = v; api.persist(); api.onName(); }
    });
    n.addEventListener('keydown', e => e.stopPropagation());
  }

  function render(){
    for(const t of root.querySelectorAll('.setab')) t.classList.toggle('active', t.dataset.tab === tab);
    if(tab === 'car') renderCar(); else renderDriver();
  }

  function setValue(key, raw){
    const id = s.currentCar, k = carSkinFor(s, id), o = s.outfit;
    const num = raw === 'off' ? null : (typeof raw === 'string' && raw[0] === '#') ? parseInt(raw.slice(1), 16) : (isNaN(+raw) ? raw : +raw);
    let car = false, out = false;
    switch(key){
      case 'car': if(s.owned.includes(raw)){ s.currentCar = raw; car = true; } break;
      case 'paint': s.paint[id] = num; car = true; break;
      case 'rims': k.rims = num; car = true; break;
      case 'stripes': k.stripes = raw; car = true; break;
      case 'stripe': k.stripe = num; car = true; break;
      case 'glow': k.glow = num; car = true; break;
      case 'tint': k.tint = raw; car = true; break;
      case 'shirt': case 'pants': case 'skin': case 'hair': case 'hatColor': o[key] = num; out = true; break;
      case 'hat': o.hat = raw; out = true; break;
    }
    api.persist();
    if(car) api.onCar(key === 'car');
    if(out) api.onOutfit();
    api.beep(760, 0.03);
  }

  body.addEventListener('click', e => {
    const b = e.target.closest('button[data-v]');
    if(!b) return;
    const row = b.closest('[data-key]');
    setValue(row.dataset.key, b.dataset.v);
    render();
  });
  body.addEventListener('input', e => {
    const inp = e.target.closest('input[type=color]');
    if(!inp) return;
    setValue(inp.dataset.key, inp.value);
    const lab = inp.closest('label');
    if(lab){ lab.style.background = inp.value; }
  });
  body.addEventListener('change', e => { if(e.target.closest('input[type=color]')) render(); });
  for(const t of root.querySelectorAll('.setab')) t.addEventListener('click', () => {
    tab = t.dataset.tab; api.onTab(tab); render();
  });

  return {
    open(t){ tab = t || 'car'; open = true; root.classList.remove('hidden'); api.onTab(tab); render(); },
    close(){ open = false; root.classList.add('hidden'); },
    get isOpen(){ return open; },
    get tab(){ return tab; },
    refresh: render,
  };
}
