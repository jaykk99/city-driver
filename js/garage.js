// CITY DRIVER — garage: save persistence + shop UI (cars / upgrades / style).
// Save format (localStorage 'citydriver_save_v1'):
// { cash, currentCar, owned:[ids], upgrades:{id:{engine,turbo,tires,suspension,nitro}},
//   paint:{id:hex}, wheels:{id:idx} }
import { CAR_DEFS } from './cars.js';

const SAVE_KEY = 'citydriver_save_v1';
export const PAINT_COST = 250;
export const WHEEL_COST = 350;
export const MAX_UPGRADE = 5;
export const PAINTS = [0xd7263d,0x1f6feb,0xffb300,0x2d6a4f,0x6b7280,0xf8fafc,0x7c3aed,0x111827];
export const WHEEL_STYLES = ['Sport','Chrome','Stealth'];

const UPG_KEYS = ['engine','turbo','tires','suspension','nitro'];
const UPG_LABEL = { engine:'Engine', turbo:'Turbo', tires:'Tires', suspension:'Suspension', nitro:'Nitro' };
const UPG_DESC = {
  engine:'+6% top speed · +10% accel / lvl',
  turbo:'+3% top speed · +14% accel / lvl',
  tires:'+7% grip / lvl',
  suspension:'+5% handling / lvl',
  nitro:'+25% power · +0.6s duration / lvl',
};

const blankUpgrades = () => ({engine:0,turbo:0,tires:0,suspension:0,nitro:0});

function defaultSave(){
  return {
    cash:5000, currentCar:'falcon', owned:['falcon'],
    upgrades:{ falcon:blankUpgrades() },
    paint:{ falcon:0xd7263d },
    wheels:{ falcon:0 },
  };
}

function normalize(s){
  const out = Object.assign(defaultSave(), s||{});
  if(!Array.isArray(out.owned) || !out.owned.length) out.owned=['falcon'];
  if(!out.owned.includes(out.currentCar)) out.currentCar=out.owned[0];
  out.upgrades = Object.assign({}, out.upgrades);
  out.paint = Object.assign({}, out.paint);
  out.wheels = Object.assign({}, out.wheels);
  for(const id of out.owned){
    if(!out.upgrades[id] || typeof out.upgrades[id]!=='object') out.upgrades[id]=blankUpgrades();
    else for(const k of UPG_KEYS) out.upgrades[id][k]=Math.max(0,Math.min(MAX_UPGRADE, out.upgrades[id][k]|0));
    if(typeof out.paint[id]!=='number') out.paint[id]=0xd7263d;
    out.wheels[id]=Math.max(0, out.wheels[id]|0);
  }
  out.cash = Math.max(0, Math.floor(+out.cash||0));
  return out;
}

export function loadSave(){
  try{
    const raw = localStorage.getItem(SAVE_KEY);
    if(!raw) return defaultSave();
    return normalize(JSON.parse(raw));
  }catch(e){ return defaultSave(); }
}

export function saveSave(s){
  try{ localStorage.setItem(SAVE_KEY, JSON.stringify(s)); }catch(e){}
}

// cost to go from `level` -> `level+1` for an upgrade on this car
export function upgradeCost(carDef, key, level){
  return Math.round(400*Math.pow(level+1,1.7)*(1+carDef.price/20000));
}

const hex = h => '#'+h.toString(16).padStart(6,'0');

// api = { save, getDef(id), onSelectCar(id), onPaint(hex), onWheels(idx), refreshScene() }
// save is mutated in place; every purchase persists via saveSave and notifies via api.
export function createGarage(api){
  const save = api.save;
  const $ = id => document.getElementById(id);
  const carsEl=$('garage-cars'), upgEl=$('garage-upgrades'), styleEl=$('garage-style');

  const maxStat={topSpeed:1,accel:1,handling:1,grip:1};
  for(const d of CAR_DEFS) for(const k in maxStat) maxStat[k]=Math.max(maxStat[k], d[k]);

  function syncCash(){ $('garage-cash').textContent = save.cash.toLocaleString(); }

  const bar=(label,val,max)=>{
    const p=Math.max(5,Math.round(val/max*100));
    return `<div class="stat-row"><span>${label}</span><div class="sbar"><i style="width:${p}%"></i></div></div>`;
  };

  function renderCars(){
    carsEl.innerHTML = CAR_DEFS.map(d=>{
      const owned=save.owned.includes(d.id), cur=save.currentCar===d.id;
      let btn;
      if(cur) btn=`<button class="buy-btn" disabled>SELECTED</button>`;
      else if(owned) btn=`<button class="buy-btn" data-act="select" data-id="${d.id}">SELECT</button>`;
      else btn=`<button class="buy-btn" data-act="buy" data-id="${d.id}"${save.cash<d.price?' disabled':''}>$${d.price.toLocaleString()}</button>`;
      return `<div class="car-card${cur?' selected':''}">`+
        `<div class="cinfo"><b>${d.name}</b><small>${d.desc}</small>`+
        `<div class="stat-bars">${bar('SPD',d.topSpeed,maxStat.topSpeed)}${bar('ACC',d.accel,maxStat.accel)}`+
        `${bar('HDL',d.handling,maxStat.handling)}${bar('GRP',d.grip,maxStat.grip)}</div></div>${btn}</div>`;
    }).join('');
  }

  function renderUpgrades(){
    const def=api.getDef(save.currentCar);
    if(!def){ upgEl.innerHTML=''; return; }
    const u=save.upgrades[def.id]||(save.upgrades[def.id]=blankUpgrades());
    upgEl.innerHTML = `<div class="upg-car-name">${def.name} — performance</div>` + UPG_KEYS.map(key=>{
      const lvl=u[key]||0, maxed=lvl>=MAX_UPGRADE;
      const cost=maxed?0:upgradeCost(def,key,lvl);
      let pips='';
      for(let i=0;i<MAX_UPGRADE;i++) pips+=`<div class="pip${i<lvl?' on':''}"></div>`;
      const btn=maxed
        ? `<button class="upg-btn" disabled>MAX</button>`
        : `<button class="upg-btn" data-key="${key}"${save.cash<cost?' disabled':''}>$${cost.toLocaleString()}</button>`;
      return `<div class="upg-row"><div class="uinfo"><b>${UPG_LABEL[key]}</b><small>${UPG_DESC[key]}</small>`+
        `<div class="pips">${pips}</div></div>${btn}</div>`;
    }).join('');
  }

  function renderStyle(){
    const id=save.currentCar;
    const curPaint=save.paint[id], curWheels=save.wheels[id];
    const swatches=PAINTS.map(h=>
      `<button class="swatch${h===curPaint?' sel':''}" data-hex="${h}" style="background:${hex(h)}" aria-label="paint"></button>`
    ).join('');
    const wheels=WHEEL_STYLES.map((n,i)=>
      `<button class="wheel-opt${i===curWheels?' sel':''}" data-idx="${i}"><b>${n}</b><small>$${WHEEL_COST}</small></button>`
    ).join('');
    styleEl.innerHTML =
      `<div class="style-sec"><b>Paint — $${PAINT_COST} each</b><div class="swatch-row">${swatches}</div></div>`+
      `<div class="style-sec"><b>Wheels — $${WHEEL_COST} each</b><div class="swatch-row">${wheels}</div></div>`;
  }

  function refresh(){ syncCash(); renderCars(); renderUpgrades(); renderStyle(); }

  carsEl.addEventListener('click', e=>{
    const b=e.target.closest('button[data-act]'); if(!b||b.disabled) return;
    const def=api.getDef(b.dataset.id); if(!def) return;
    if(b.dataset.act==='buy'){
      if(save.owned.includes(def.id)||save.cash<def.price) return;
      save.cash-=def.price; save.owned.push(def.id);
      if(!save.upgrades[def.id]) save.upgrades[def.id]=blankUpgrades();
      if(typeof save.paint[def.id]!=='number') save.paint[def.id]=def.color;
      if(save.wheels[def.id]===undefined) save.wheels[def.id]=0;
      save.currentCar=def.id;
      saveSave(save); api.onSelectCar(def.id); refresh();
    }else{
      if(save.currentCar===def.id) return;
      save.currentCar=def.id;
      saveSave(save); api.onSelectCar(def.id); refresh();
    }
  });

  upgEl.addEventListener('click', e=>{
    const b=e.target.closest('button[data-key]'); if(!b||b.disabled) return;
    const def=api.getDef(save.currentCar); if(!def) return;
    const key=b.dataset.key;
    const u=save.upgrades[def.id]||(save.upgrades[def.id]=blankUpgrades());
    const lvl=u[key]||0, cost=upgradeCost(def,key,lvl);
    if(lvl>=MAX_UPGRADE||save.cash<cost) return;
    save.cash-=cost; u[key]=lvl+1;
    saveSave(save); api.refreshScene(); refresh();
  });

  styleEl.addEventListener('click', e=>{
    const id=save.currentCar;
    const sw=e.target.closest('button.swatch');
    if(sw){
      const h=parseInt(sw.dataset.hex,10);
      if(save.paint[id]!==h&&save.cash>=PAINT_COST){
        save.cash-=PAINT_COST; save.paint[id]=h;
        saveSave(save); api.onPaint(h); refresh();
      }
      return;
    }
    const w=e.target.closest('button.wheel-opt');
    if(w){
      const idx=parseInt(w.dataset.idx,10);
      if(save.wheels[id]!==idx&&save.cash>=WHEEL_COST){
        save.cash-=WHEEL_COST; save.wheels[id]=idx;
        saveSave(save); api.onWheels(idx); refresh();
      }
    }
  });

  // tabs
  const tabs=[...document.querySelectorAll('.gtab')];
  const panels={cars:carsEl, upgrades:upgEl, style:styleEl};
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.toggle('active',x===t));
    for(const k in panels) panels[k].classList.toggle('hidden', k!==t.dataset.tab);
  }));

  refresh();
  return { refresh };
}
