// CITY DRIVER — store overlay (gun store + clothing store).
import { cashLabel } from './garage.js';
import { WEAPONS, SHIRTS, SHIRT_COST, HATS, buyWeapon, buyAmmo, equipWeapon, buyShirt, buyHat } from './shop.js';

const hex = h => '#' + h.toString(16).padStart(6, '0');
const money = n => '$' + n.toLocaleString();

// api = { save, persist(), toast(msg), beep(f), onChange() }
export function createStoreUI(api){
  const $ = id => document.getElementById(id);
  const el = $('store'), list = $('store-list');
  let type = null;

  function result(r){
    api.toast(r.msg);
    api.beep(r.ok ? 880 : 220, r.ok ? 0.08 : 0.12);
    if(r.ok){ api.persist(); api.onChange(); }
    render();
  }

  function renderGuns(){
    const s = api.save;
    list.innerHTML = '';
    for(const w of WEAPONS){
      const owned = s.weapons.includes(w.id);
      const row = document.createElement('div');
      row.className = 'upg-row store-row' + (s.equipped === w.id ? ' sel' : '');
      row.innerHTML = `<div class="uinfo"><b>${w.name}</b><small>${w.desc}</small>
        <small class="ammo-line">${owned ? 'Ammo: ' + (s.ammo[w.id] | 0) : money(w.price)}</small></div>
        <div class="store-btns"></div>`;
      const btns = row.querySelector('.store-btns');
      if(!owned){
        const b = document.createElement('button');
        b.className = 'buy-btn'; b.textContent = 'BUY ' + money(w.price);
        b.disabled = s.cash < w.price;
        b.onclick = () => result(buyWeapon(s, w.id));
        btns.appendChild(b);
      }else{
        const a = document.createElement('button');
        a.className = 'upg-btn'; a.textContent = '+' + w.ammoBox + ' AMMO ' + money(w.ammoPrice);
        a.disabled = s.cash < w.ammoPrice;
        a.onclick = () => result(buyAmmo(s, w.id));
        btns.appendChild(a);
        const e = document.createElement('button');
        e.className = 'buy-btn eq'; e.textContent = s.equipped === w.id ? 'EQUIPPED' : 'EQUIP';
        e.disabled = s.equipped === w.id;
        e.onclick = () => result(equipWeapon(s, w.id));
        btns.appendChild(e);
      }
      list.appendChild(row);
    }
    const tip = document.createElement('p');
    tip.className = 'store-tip';
    tip.textContent = 'Shooting range out back: knock down targets for cash.';
    list.appendChild(tip);
  }

  function renderClothes(){
    const s = api.save;
    list.innerHTML = '';
    const shirtSec = document.createElement('div');
    shirtSec.className = 'style-sec';
    shirtSec.innerHTML = `<b>SHIRT · ${SHIRT_COST ? money(SHIRT_COST) : 'FREE'}</b><div class="swatch-row"></div>`;
    const row = shirtSec.querySelector('.swatch-row');
    for(const c of SHIRTS){
      const sw = document.createElement('div');
      sw.className = 'swatch' + (s.outfit.shirt === c ? ' sel' : '');
      sw.style.background = hex(c);
      sw.onclick = () => result(buyShirt(s, c));
      row.appendChild(sw);
    }
    list.appendChild(shirtSec);
    const hatSec = document.createElement('div');
    hatSec.className = 'style-sec';
    hatSec.innerHTML = '<b>HATS</b><div class="swatch-row"></div>';
    const hr = hatSec.querySelector('.swatch-row');
    for(const h of HATS){
      const b = document.createElement('button');
      const owned = s.hats.includes(h.id);
      b.className = 'wheel-opt' + (s.outfit.hat === h.id ? ' sel' : '');
      b.innerHTML = `${h.name}<small>${s.outfit.hat === h.id ? 'wearing' : (owned || !h.price) ? 'free' : money(h.price)}</small>`;
      b.onclick = () => result(buyHat(s, h.id));
      hr.appendChild(b);
    }
    list.appendChild(hatSec);
    const tip = document.createElement('p');
    tip.className = 'store-tip';
    tip.textContent = 'Everything here is free. More colors, pants, skin tone & hair in 🎨 SKIN EDITOR (pause menu).';
    list.appendChild(tip);
  }

  function render(){
    $('store-cash').textContent = cashLabel(api.save);
    if(type === 'guns') renderGuns(); else renderClothes();
  }

  return {
    open(store){
      type = store.type;
      $('store-title').textContent = store.name;
      el.classList.remove('hidden');
      render();
    },
    close(){ el.classList.add('hidden'); type = null; },
    get isOpen(){ return type !== null; },
  };
}
