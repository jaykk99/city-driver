// CITY DRIVER — custom maps screen + tile-painting map editor.
import { TILES, PALETTE_ORDER, THEMES, TEMPLATES, SIZES, newMap, paint, getTile, normalizeMap, encodeMap, decodeMap } from './custommap.js';

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));

// api = { save, persist(), play(map), toast(msg), beep(f,d), isRotated(), onClose() }
export function createMapEditor(api){
  const $ = id => document.getElementById(id);
  const listOv = $('maps-ov'), edOv = $('mapedit-ov'), cv = $('mapedit-cv'), g = cv.getContext('2d');
  const save = api.save;
  if(!Array.isArray(save.maps)) save.maps = [];
  save.maps = save.maps.map(normalizeMap).filter(Boolean);
  let cur = null, tool = '#', brush = 1, undo = [], painting = false, dirty = false;
  let newOpts = { template:'mudbog', size:48, theme:'summer' };

  // ---------- list ----------
  function renderList(){
    const rows = save.maps.map(m => `<div class="map-row">
      <div class="map-thumb" data-id="${m.id}"><canvas width="64" height="64"></canvas></div>
      <div class="map-info"><b>${esc(m.name)}</b><small>${m.size}×${m.size} · ${THEMES[m.theme].name}</small></div>
      <div class="map-btns">
        <button class="buy-btn" data-act="play" data-id="${m.id}">▶ PLAY</button>
        <button class="upg-btn" data-act="edit" data-id="${m.id}">✏️ EDIT</button>
        <button class="upg-btn" data-act="share" data-id="${m.id}">🔗</button>
        <button class="upg-btn del" data-act="del" data-id="${m.id}">🗑</button>
      </div></div>`).join('');
    $('maps-list').innerHTML = rows || '<p class="store-tip">No maps yet — make one below, or import a friend\'s map code.</p>';
    for(const m of save.maps){ const c = $('maps-list').querySelector(`.map-thumb[data-id="${m.id}"] canvas`); if(c) drawMini(c, m); }
    const pick = (k, list, label) => `<div class="topts">` + list.map(v => `<button class="topt sm${newOpts[k] === v ? ' cur' : ''}" data-new="${k}" data-v="${v}"><b>${label(v)}</b></button>`).join('') + `</div>`;
    $('maps-new').innerHTML =
      `<div class="tsec"><div class="tsec-h"><b>Start from</b></div>${pick('template', Object.keys(TEMPLATES), v => TEMPLATES[v].name)}</div>
       <div class="tsec"><div class="tsec-h"><b>Size</b><small>${newOpts.size * 12} m across</small></div>${pick('size', SIZES, v => v + '×' + v)}</div>
       <div class="tsec"><div class="tsec-h"><b>Theme</b></div>${pick('theme', Object.keys(THEMES), v => THEMES[v].name)}</div>
       <button class="mbtn primary" id="maps-create" style="width:100%">＋ CREATE &amp; EDIT</button>`;
    $('maps-create').onclick = () => { const m = newMap(newOpts.template, +newOpts.size, newOpts.theme); save.maps.unshift(m); api.persist(); openEditor(m); };
  }
  function drawMini(c, m){
    const x = c.getContext('2d'), s = c.width / m.size;
    for(let j = 0; j < m.size; j++) for(let i = 0; i < m.size; i++){
      const ch = getTile(m, i, j);
      x.fillStyle = ch === '.' ? groundCol(m) : TILES[ch].color; x.fillRect(i * s, j * s, s + 0.5, s + 0.5);
    }
  }
  const groundCol = m => ({ grass:'#4f8a3c', sand:'#d6c08e', snow:'#e8eef4' })[THEMES[m.theme].ground];

  $('maps-list').addEventListener('click', e => {
    const b = e.target.closest('button[data-act]'); if(!b) return;
    const m = save.maps.find(x => x.id === b.dataset.id); if(!m) return;
    api.beep(700, 0.04);
    if(b.dataset.act === 'play'){ close(); api.play(m); }
    else if(b.dataset.act === 'edit') openEditor(m);
    else if(b.dataset.act === 'share') showShare(m);
    else if(b.dataset.act === 'del'){
      if(b.dataset.armed){ save.maps = save.maps.filter(x => x !== m); api.persist(); renderList(); }
      else { b.dataset.armed = '1'; b.textContent = 'SURE?'; setTimeout(() => { if(b.isConnected){ delete b.dataset.armed; b.textContent = '🗑'; } }, 2500); }
    }
  });
  $('maps-new').addEventListener('click', e => {
    const b = e.target.closest('button[data-new]'); if(!b) return;
    newOpts[b.dataset.new] = b.dataset.new === 'size' ? +b.dataset.v : b.dataset.v; renderList();
  });
  function showShare(m){
    const code = encodeMap(m);
    $('maps-share').classList.remove('hidden');
    $('maps-share-title').textContent = 'Share “' + m.name + '”';
    $('maps-code').value = code;
    $('maps-code').readOnly = true;
    $('maps-share-go').textContent = '📋 COPY CODE';
    $('maps-share-go').onclick = async () => {
      try{ await navigator.clipboard.writeText(code); api.toast('Map code copied — paste it to a friend'); }
      catch(_){ $('maps-code').select(); api.toast('Select the code and copy it'); }
    };
  }
  $('maps-import').onclick = () => {
    $('maps-share').classList.remove('hidden');
    $('maps-share-title').textContent = 'Import a map code';
    $('maps-code').value = ''; $('maps-code').readOnly = false; $('maps-code').focus();
    $('maps-share-go').textContent = '📥 IMPORT';
    $('maps-share-go').onclick = () => {
      const m = decodeMap($('maps-code').value);
      if(!m){ api.toast('That code didn’t work — check you copied all of it'); api.beep(220, 0.1); return; }
      save.maps.unshift(m); api.persist(); $('maps-share').classList.add('hidden'); renderList(); api.toast('Imported “' + m.name + '”');
    };
  };
  $('maps-code').addEventListener('keydown', e => e.stopPropagation());
  $('maps-share-close').onclick = () => $('maps-share').classList.add('hidden');
  $('maps-back').onclick = () => { close(); api.onClose(); };

  // ---------- editor ----------
  function openEditor(m){
    cur = m; undo = []; dirty = false;
    listOv.classList.add('hidden'); edOv.classList.remove('hidden');
    $('me-name').value = m.name;
    renderPalette(); drawEditor();
  }
  function renderPalette(){
    $('me-tiles').innerHTML = PALETTE_ORDER.map(ch => {
      const t = TILES[ch], col = ch === '.' ? groundCol(cur) : t.color;
      return `<button class="me-tile${tool === ch ? ' cur' : ''}" data-ch="${ch}" title="${t.name}"><i style="background:${col}"></i><span>${ch === '.' ? 'Ground' : t.name}</span></button>`;
    }).join('');
    $('me-brush').innerHTML = '<div class="topts">' + [1, 2, 3].map(b => `<button class="topt sm${brush === b ? ' cur' : ''}" data-b="${b}"><b>${b === 1 ? 'Small' : b === 2 ? 'Medium' : 'Large'}</b></button>`).join('') + '</div>';
    $('me-theme').innerHTML = '<div class="topts">' + Object.keys(THEMES).map(k => `<button class="topt sm${cur.theme === k ? ' cur' : ''}" data-th="${k}"><b>${THEMES[k].name}</b></button>`).join('') + '</div>';
  }
  function drawEditor(){
    const n = cur.size, s = cv.width / n;
    for(let j = 0; j < n; j++) for(let i = 0; i < n; i++){
      const ch = getTile(cur, i, j);
      g.fillStyle = ch === '.' ? groundCol(cur) : TILES[ch].color;
      g.fillRect(i * s, j * s, s, s);
      if(ch === 'h' || ch === 'b' || ch === 'T'){ g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(i * s + s * 0.2, j * s + s * 0.2, s * 0.6, s * 0.6); }
      if(ch === 't'){ g.fillStyle = '#1e4a1b'; g.beginPath(); g.arc(i * s + s / 2, j * s + s / 2, s * 0.38, 0, 6.3); g.fill(); }
      if(ch === 'r'){ g.fillStyle = '#6b665e'; g.beginPath(); g.arc(i * s + s / 2, j * s + s / 2, s * 0.4, 0, 6.3); g.fill(); }
      if(ch === '$'){ g.fillStyle = '#0b3d1c'; g.font = `bold ${Math.floor(s * 0.8)}px sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('$', i * s + s / 2, j * s + s / 2 + 1); }
      if(ch === 'S'){ g.fillStyle = '#fff'; g.beginPath(); g.moveTo(i * s + s / 2, j * s + 2); g.lineTo(i * s + s - 2, j * s + s - 2); g.lineTo(i * s + 2, j * s + s - 2); g.closePath(); g.fill(); }
    }
    g.strokeStyle = 'rgba(0,0,0,.12)'; g.lineWidth = 1; g.beginPath();
    for(let k = 0; k <= n; k += 4){ g.moveTo(k * s, 0); g.lineTo(k * s, cv.height); g.moveTo(0, k * s); g.lineTo(cv.width, k * s); }
    g.stroke();
    $('me-status').textContent = dirty ? 'Unsaved changes' : 'Saved';
  }
  function tileFromEvent(e){
    const r = cv.getBoundingClientRect();
    let u = (e.clientX - r.left) / r.width, v = (e.clientY - r.top) / r.height;
    if(api.isRotated()){ const t = u; u = v; v = 1 - t; }
    return [Math.floor(u * cur.size), Math.floor(v * cur.size)];
  }
  let last = null;
  function stroke(e){
    const [i, j] = tileFromEvent(e);
    if(last && last[0] === i && last[1] === j) return;
    // fill the gap between pointer events so fast drags draw solid lines
    if(last && tool !== 'S'){
      const steps = Math.max(Math.abs(i - last[0]), Math.abs(j - last[1]));
      for(let k = 1; k < steps; k++) paint(cur, Math.round(last[0] + (i - last[0]) * k / steps), Math.round(last[1] + (j - last[1]) * k / steps), tool, brush);
    }
    paint(cur, i, j, tool, tool === 'S' ? 1 : brush);
    last = [i, j]; dirty = true; drawEditor();
  }
  cv.addEventListener('pointerdown', e => { e.preventDefault(); undo.push(cur.tiles); if(undo.length > 40) undo.shift(); painting = true; last = null; try{ cv.setPointerCapture(e.pointerId); }catch(_){} stroke(e); });
  cv.addEventListener('pointermove', e => { if(painting) stroke(e); });
  const stop = () => { painting = false; last = null; };
  cv.addEventListener('pointerup', stop); cv.addEventListener('pointercancel', stop);
  $('me-tiles').addEventListener('click', e => { const b = e.target.closest('button[data-ch]'); if(b){ tool = b.dataset.ch; renderPalette(); api.beep(800, 0.02); } });
  $('me-brush').addEventListener('click', e => { const b = e.target.closest('button[data-b]'); if(b){ brush = +b.dataset.b; renderPalette(); } });
  $('me-theme').addEventListener('click', e => { const b = e.target.closest('button[data-th]'); if(b){ cur.theme = b.dataset.th; dirty = true; renderPalette(); drawEditor(); } });
  $('me-name').addEventListener('input', () => { cur.name = $('me-name').value.replace(/[<>]/g, '').slice(0, 24) || 'Map'; dirty = true; drawEditor(); });
  $('me-name').addEventListener('keydown', e => e.stopPropagation());
  $('me-undo').onclick = () => { if(undo.length){ cur.tiles = undo.pop(); dirty = true; drawEditor(); } };
  $('me-save').onclick = () => { saveCur(); api.toast('Map saved'); api.beep(880, 0.06); };
  $('me-play').onclick = () => { saveCur(); close(); api.play(cur, true); };
  $('me-back').onclick = () => { saveCur(); edOv.classList.add('hidden'); openList(); };
  function saveCur(){
    const k = save.maps.findIndex(x => x.id === cur.id);
    if(k >= 0) save.maps[k] = cur; else save.maps.unshift(cur);
    api.persist(); dirty = false; drawEditor();
  }

  function openList(){ listOv.classList.remove('hidden'); edOv.classList.add('hidden'); $('maps-share').classList.add('hidden'); renderList(); }
  function close(){ listOv.classList.add('hidden'); edOv.classList.add('hidden'); }
  return { open:openList, edit:m => { listOv.classList.add('hidden'); openEditor(m); }, close, get current(){ return cur; } };
}
