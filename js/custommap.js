// CITY DRIVER — custom maps: tile data, templates, share codes, surfaces.
// Pure (no three.js / DOM) so it's unit-testable. A map is an N x N grid of
// one-character tiles, each TILE metres square.

export const TILE = 12;
export const SIZES = [32, 48, 64];
export const THEMES = {
  summer:{ name:'Summer', ground:'grass', sky:'day' },
  desert:{ name:'Desert', ground:'sand', sky:'sunset' },
  winter:{ name:'Winter', ground:'snow', sky:'day' },
  night: { name:'Night',  ground:'grass', sky:'night' },
};
// char -> tile info. surface = how it drives (see world.js surfaceGrip), solid = blocks you
export const TILES = {
  '.': { id:'.', name:'Ground',     surface:null,    color:'#4f8a3c' },   // theme ground (grass / sand / snow)
  '#': { id:'#', name:'Road',       surface:'road',  color:'#33363b' },
  'd': { id:'d', name:'Dirt',       surface:'dirt',  color:'#7a5b3c' },
  'm': { id:'m', name:'Mud',        surface:'mud',   color:'#3b2817' },
  's': { id:'s', name:'Sand',       surface:'sand',  color:'#d6c08e' },
  'n': { id:'n', name:'Snow / ice', surface:'snow',  color:'#e8eef4' },
  'w': { id:'w', name:'Water',      surface:'water', color:'#4f8a8c' },
  'W': { id:'W', name:'Deep water', surface:'deep',  color:'#2a5868' },
  'h': { id:'h', name:'House',      surface:'road',  color:'#c9a98a', solid:true, height:6 },
  'b': { id:'b', name:'Shop',       surface:'road',  color:'#8fa3b8', solid:true, height:11 },
  'T': { id:'T', name:'Tower',      surface:'road',  color:'#5d7184', solid:true, height:46 },
  'r': { id:'r', name:'Rock',       surface:'dirt',  color:'#8a857c', solid:true },
  't': { id:'t', name:'Tree',       surface:null,    color:'#2f6b2a', solid:true },
  '$': { id:'$', name:'Cash',       surface:null,    color:'#4ade80' },
  'S': { id:'S', name:'Spawn',      surface:'road',  color:'#ff5e3a' },
};
export const PALETTE_ORDER = ['.', '#', 'd', 'm', 's', 'n', 'w', 'W', 'h', 'b', 'T', 'r', 't', '$', 'S'];
const GROUND_SURF = { grass:'grass', sand:'sand', snow:'snow' };

export function emptyTiles(n, ch = '.'){ return ch.repeat(n * n); }
export const idx = (n, i, j) => j * n + i;
export function getTile(map, i, j){ return (i < 0 || j < 0 || i >= map.size || j >= map.size) ? null : map.tiles[idx(map.size, i, j)]; }
export function setTile(map, i, j, ch){
  if(i < 0 || j < 0 || i >= map.size || j >= map.size || !TILES[ch]) return map;
  if(ch === 'S') map.tiles = map.tiles.replace(/S/g, '#');        // only one spawn
  const k = idx(map.size, i, j);
  map.tiles = map.tiles.slice(0, k) + ch + map.tiles.slice(k + 1);
  return map;
}
// paint a square brush
export function paint(map, i, j, ch, brush = 1){
  const r = brush - 1;
  for(let a = -r; a <= r; a++) for(let b = -r; b <= r; b++) setTile(map, i + a, j + b, ch === 'S' && (a || b) ? '#' : ch);
  if(ch === 'S') setTile(map, i, j, 'S');
  return map;
}

// world <-> tile (map is centred on its own origin; the game adds an offset)
export const halfSize = map => map.size * TILE / 2;
export function tileAt(map, x, z){ const h = halfSize(map); return getTile(map, Math.floor((x + h) / TILE), Math.floor((z + h) / TILE)); }
export function tileCenter(map, i, j){ const h = halfSize(map); return { x:-h + (i + 0.5) * TILE, z:-h + (j + 0.5) * TILE }; }
export function surfaceOf(map, ch){
  const t = TILES[ch];
  if(!t) return 'grass';
  if(t.surface) return t.surface;
  return GROUND_SURF[(THEMES[map.theme] || THEMES.summer).ground] || 'grass';
}
export function surfaceAtMap(map, x, z){
  const ch = tileAt(map, x, z);
  if(ch == null) return 'grass';
  return surfaceOf(map, ch);
}
export function spawnOf(map){
  const k = map.tiles.indexOf('S');
  if(k >= 0) return tileCenter(map, k % map.size, Math.floor(k / map.size));
  const r = map.tiles.indexOf('#');
  if(r >= 0) return tileCenter(map, r % map.size, Math.floor(r / map.size));
  return { x:0, z:0 };
}

// ---------- templates ----------
function blank(size, theme = 'summer', name = 'My Map'){
  return { id:'m' + Date.now().toString(36) + Math.floor(Math.random() * 1e4).toString(36), name, size, theme, tiles:emptyTiles(size) };
}
function rect(map, i0, j0, i1, j1, ch){ for(let i = i0; i <= i1; i++) for(let j = j0; j <= j1; j++) setTile(map, i, j, ch); }
function disc(map, ci, cj, r, ch){ for(let i = ci - r; i <= ci + r; i++) for(let j = cj - r; j <= cj + r; j++) if((i - ci) ** 2 + (j - cj) ** 2 <= r * r) setTile(map, i, j, ch); }
function ring(map, i0, j0, i1, j1, ch, w = 1){ rect(map, i0, j0, i1, j0 + w - 1, ch); rect(map, i0, j1 - w + 1, i1, j1, ch); rect(map, i0, j0, i0 + w - 1, j1, ch); rect(map, i1 - w + 1, j0, i1, j1, ch); }
function rnd(seed){ let a = seed >>> 0; return () => { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; }; }

export const TEMPLATES = {
  blank:  { name:'Blank field', make:(size, theme) => { const m = blank(size, theme, 'My Map'); setTile(m, size >> 1, size >> 1, 'S'); return m; } },
  mudbog: { name:'Mud Bog', make:(size, theme) => {
    const m = blank(size, theme, 'Mud Bog'), R = rnd(7), n = size;
    rect(m, 2, 2, n - 3, n - 3, 'd');
    for(let k = 0; k < n / 3; k++) disc(m, 4 + Math.floor(R() * (n - 8)), 4 + Math.floor(R() * (n - 8)), 1 + Math.floor(R() * 3), 'm');
    disc(m, n >> 1, n >> 1, 4, 'w'); disc(m, n >> 1, n >> 1, 2, 'W');
    for(let k = 0; k < n / 2; k++) setTile(m, 3 + Math.floor(R() * (n - 6)), 3 + Math.floor(R() * (n - 6)), 'r');
    ring(m, 0, 0, n - 1, n - 1, 't');
    for(let k = 0; k < 6; k++) setTile(m, 4 + Math.floor(R() * (n - 8)), 4 + Math.floor(R() * (n - 8)), '$');
    setTile(m, 4, n >> 1, 'S');
    return m;
  } },
  island: { name:'Island', make:(size, theme) => {
    const m = blank(size, theme, 'Island'), n = size, c = n >> 1, R = rnd(11);
    m.tiles = emptyTiles(n, 'W');
    disc(m, c, c, Math.floor(n * 0.38), 'w');
    disc(m, c, c, Math.floor(n * 0.32), 's');
    disc(m, c, c, Math.floor(n * 0.27), '.');
    ring(m, c - 8, c - 8, c + 8, c + 8, '#');
    rect(m, c, c - 8, c, c + 8, '#'); rect(m, c - 8, c, c + 8, c, '#');
    for(const [a, b] of [[-5, -5], [5, -5], [-5, 5], [5, 5]]) rect(m, c + a - 1, c + b - 1, c + a + 1, c + b + 1, R() < 0.5 ? 'h' : 'b');
    for(let k = 0; k < n; k++){ const a = R() * 6.28, r = n * (0.2 + R() * 0.08); setTile(m, Math.round(c + Math.cos(a) * r), Math.round(c + Math.sin(a) * r), 't'); }
    for(const [a, b] of [[-8, 0], [8, 0], [0, -8], [0, 8]]) setTile(m, c + a, c + b + (b ? 0 : 1), '$');
    setTile(m, c - 8, c - 4, 'S');
    return m;
  } },
  circuit:{ name:'Street Circuit', make:(size, theme) => {
    const m = blank(size, theme, 'Street Circuit'), n = size, R = rnd(3);
    ring(m, 3, 3, n - 4, n - 4, '#', 2);
    rect(m, 3, n >> 1, n - 4, (n >> 1) + 1, '#');
    rect(m, n >> 1, 3, (n >> 1) + 1, n >> 1, '#');
    for(let i = 6; i < n - 6; i += 3) for(let j = 6; j < n - 6; j += 3){
      if(getTile(m, i, j) !== '.') continue;
      const v = R(); setTile(m, i, j, v < 0.15 ? 'T' : v < 0.5 ? 'b' : v < 0.8 ? 'h' : 't');
    }
    setTile(m, 4, 8, 'S');
    return m;
  } },
  drag:   { name:'Drag Strip', make:(size, theme) => {
    const m = blank(size, theme, 'Drag Strip'), n = size;
    rect(m, (n >> 1) - 1, 1, (n >> 1) + 1, n - 2, '#');
    for(let j = 2; j < n - 2; j += 2){ setTile(m, (n >> 1) - 3, j, 't'); setTile(m, (n >> 1) + 3, j, 't'); }
    setTile(m, n >> 1, n - 3, 'S');
    return m;
  } },
};
export function newMap(template = 'blank', size = 48, theme = 'summer'){
  const t = TEMPLATES[template] || TEMPLATES.blank;
  const m = t.make(SIZES.includes(size) ? size : 48, THEMES[theme] ? theme : 'summer');
  m.theme = THEMES[theme] ? theme : 'summer';
  return m;
}

// ---------- save / share ----------
export function normalizeMap(m){
  if(!m || typeof m !== 'object') return null;
  const size = SIZES.includes(m.size) ? m.size : null;
  if(!size || typeof m.tiles !== 'string' || m.tiles.length !== size * size) return null;
  const tiles = [...m.tiles].map(c => TILES[c] ? c : '.').join('');
  return { id:String(m.id || ('m' + Date.now().toString(36))).slice(0, 24), name:String(m.name || 'Map').replace(/[<>]/g, '').slice(0, 24) || 'Map',
    size, theme:THEMES[m.theme] ? m.theme : 'summer', tiles };
}
// run-length encode: "12.#3m" style (count then char, count omitted when 1)
export function rle(s){
  let out = '', i = 0;
  while(i < s.length){ let j = i; while(j < s.length && s[j] === s[i] && j - i < 9999) j++; const n = j - i; out += (n > 1 ? n : '') + s[i]; i = j; }
  return out;
}
export function unrle(s){
  let out = '', num = '';
  for(const c of s){ if(c >= '0' && c <= '9') num += c; else { out += c.repeat(num ? +num : 1); num = ''; } }
  return out;
}
const b64e = str => (typeof btoa === 'function' ? btoa(unescape(encodeURIComponent(str))) : Buffer.from(str, 'utf8').toString('base64'));
const b64d = str => (typeof atob === 'function' ? decodeURIComponent(escape(atob(str))) : Buffer.from(str, 'base64').toString('utf8'));
export function encodeMap(m){
  return 'CDMAP1:' + b64e(JSON.stringify({ n:m.name, s:m.size, t:m.theme, d:rle(m.tiles) }));
}
export function decodeMap(code){
  try{
    const raw = String(code || '').trim().replace(/^CDMAP1:/, '');
    const o = JSON.parse(b64d(raw));
    return normalizeMap({ id:'m' + Date.now().toString(36), name:o.n, size:o.s, theme:o.t, tiles:unrle(o.d) });
  }catch(e){ return null; }
}
