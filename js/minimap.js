// CITY DRIVER — north-up radar + full-screen map (tap the radar / press M).
// One painter draws the whole world: rivers, lakes, fields, roads, landmarks.
import { BLOCKS, ROAD_W, GRID_HALF, LINES, blockCenter, RED_RIVER, ASSINIBOINE, BRIDGE_Z, STRIP_X, STRIP_HALF, SPECIAL,
  WORLD_HALF, ROADS, LAKES, FIELDS, OFFROAD, AIRPORT, MUD_PATCHES, MUD_PITS } from './world.js';

const SPECIAL_COL = { parking:'#3b3f46', arena:'#4b5bd6', legislature:'#c9b98f', forks:'#b98a5a', museum:'#7fb3d5', mansion:'#0f9d58', hospital:'#e2e8f0', park:'#3f8a3a' };
const CROP_COL = { canola:'#c9ad2a', wheat:'#b8975a', plowed:'#5a4128', hay:'#8e9c52' };
const ROAD_COL = { street:'#25292f', arterial:'#30343b', highway:'#3d424a', gravel:'#8a7a62' };

// paint the static world. W(x)/H(z) map world -> canvas, k = px per metre, view = {x0,x1,z0,z1} to skip off-screen bits
function paintWorld(g, W, H, k, view, custom){
  const vis = (x0, x1, z0, z1) => x1 >= view.x0 && x0 <= view.x1 && z1 >= view.z0 && z0 <= view.z1;
  if(custom){ custom.paint(g, W, H, k, vis); return; }
  g.fillStyle = '#2e4a30'; g.fillRect(W(-WORLD_HALF), H(-WORLD_HALF), WORLD_HALF * 2 * k, WORLD_HALF * 2 * k);
  for(const [x0, x1, z0, z1, c] of FIELDS) if(vis(x0, x1, z0, z1)){ g.fillStyle = CROP_COL[c]; g.fillRect(W(x0), H(z0), (x1 - x0) * k, (z1 - z0) * k); }
  if(vis(OFFROAD.minX, OFFROAD.maxX, OFFROAD.minZ, OFFROAD.maxZ)){ g.fillStyle = '#6e5235'; g.fillRect(W(OFFROAD.minX), H(OFFROAD.minZ), (OFFROAD.maxX - OFFROAD.minX) * k, (OFFROAD.maxZ - OFFROAD.minZ) * k); }
  g.fillStyle = '#3b2817';
  for(const [x, z, r] of MUD_PITS.concat(MUD_PATCHES)) if(vis(x - r, x + r, z - r, z + r)){ g.beginPath(); g.arc(W(x), H(z), Math.max(1, r * k), 0, Math.PI * 2); g.fill(); }
  // water
  g.fillStyle = '#2f6f86';
  g.fillRect(W(RED_RIVER.minX), H(-WORLD_HALF), (RED_RIVER.maxX - RED_RIVER.minX) * k, WORLD_HALF * 2 * k);
  g.fillRect(W(-WORLD_HALF), H(ASSINIBOINE.minZ), (WORLD_HALF + RED_RIVER.minX) * k, (ASSINIBOINE.maxZ - ASSINIBOINE.minZ) * k);
  for(const [x, z, r] of LAKES) if(vis(x - r, x + r, z - r, z + r)){ g.beginPath(); g.arc(W(x), H(z), r * k, 0, Math.PI * 2); g.fill(); }
  // downtown blocks
  for(let i = 0; i < BLOCKS; i++) for(let j = 0; j < BLOCKS; j++){
    const cx = blockCenter(i), cz = blockCenter(j);
    if(!vis(cx - 30, cx + 30, cz - 30, cz + 30)) continue;
    let col = 'rgba(128,136,150,0.6)';
    for(const key in SPECIAL){ const [x, z] = SPECIAL[key]; if(x === cx && z === cz) col = SPECIAL_COL[key]; }
    g.fillStyle = col; g.fillRect(W(cx - 30), H(cz - 30), 60 * k, 60 * k);
  }
  // roads
  g.lineCap = 'butt';
  for(const r of ROADS){
    const a = r.axis === 'ns' ? [r.at, r.from, r.at, r.to] : [r.from, r.at, r.to, r.at];
    if(!vis(Math.min(a[0], a[2]) - r.w, Math.max(a[0], a[2]) + r.w, Math.min(a[1], a[3]) - r.w, Math.max(a[1], a[3]) + r.w)) continue;
    g.strokeStyle = ROAD_COL[r.kind] || '#25292f'; g.lineWidth = Math.max(1.2, r.w * k);
    g.beginPath(); g.moveTo(W(a[0]), H(a[1])); g.lineTo(W(a[2]), H(a[3])); g.stroke();
  }
  g.strokeStyle = '#25292f'; g.lineWidth = Math.max(1.2, ROAD_W * k);
  g.beginPath();
  for(const c of LINES){ g.moveTo(W(c), H(-GRID_HALF)); g.lineTo(W(c), H(GRID_HALF)); g.moveTo(W(-GRID_HALF), H(c)); g.lineTo(W(GRID_HALF), H(c)); }
  g.moveTo(W(GRID_HALF), H(BRIDGE_Z)); g.lineTo(W(STRIP_X), H(BRIDGE_Z));
  g.stroke();
  g.strokeStyle = '#3b3f46'; g.lineWidth = Math.max(1, 9 * k);
  g.beginPath(); g.moveTo(W(STRIP_X), H(-STRIP_HALF)); g.lineTo(W(STRIP_X), H(STRIP_HALF)); g.stroke();
  g.fillStyle = '#4a4f57'; g.fillRect(W(AIRPORT.minX), H(AIRPORT.minZ), (AIRPORT.maxX - AIRPORT.minX) * k, (AIRPORT.maxZ - AIRPORT.minZ) * k);
}

export function createMinimap(canvas, stores, bigCanvas){
  const g = canvas.getContext('2d');
  const S = canvas.width, R = 150;
  const k = (S / 2) / R;
  let frame = 0, custom = null, wp = null;

  function draw(px, pz, heading, car, mp){
    if((frame++ & 3) !== 0) return;
    const W = x => S / 2 + (x - px) * k;
    const H = z => S / 2 + (z - pz) * k;
    g.clearRect(0, 0, S, S);
    g.save();
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, Math.PI * 2); g.clip();
    g.fillStyle = '#1d2a20'; g.fillRect(0, 0, S, S);
    paintWorld(g, W, H, k, { x0:px - R, x1:px + R, z0:pz - R, z1:pz + R }, custom);
    if(!custom) for(const s of stores){
      g.fillStyle = s.color;
      g.beginPath(); g.arc(W(s.door.x), H(s.door.z), 4.5, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#0b0f1a'; g.lineWidth = 1.5; g.stroke();
    }
    if(car){ g.fillStyle = '#ffffff'; g.fillRect(W(car.x) - 3, H(car.z) - 3, 6, 6); }
    if(wp){
      // waypoint: on the radar if close, else a marker pinned to the rim pointing at it
      let wx = W(wp.x), wz = H(wp.z);
      const dx = wx - S / 2, dz = wz - S / 2, d = Math.hypot(dx, dz), rim = S / 2 - 8;
      if(d > rim){ wx = S / 2 + dx / d * rim; wz = S / 2 + dz / d * rim; }
      g.fillStyle = '#ffd23f'; g.strokeStyle = '#0b0f1a'; g.lineWidth = 2;
      g.beginPath(); g.arc(wx, wz, 5, 0, Math.PI * 2); g.fill(); g.stroke();
    }
    if(mp) mp.each(r => {
      if(r.b >= 0) return;
      g.fillStyle = r.team === 'red' ? '#ff3b4e' : r.team === 'blue' ? '#3b8bff' : '#4ade80';
      g.strokeStyle = '#0b0f1a'; g.lineWidth = 1.5;
      g.beginPath(); g.arc(W(r.x), H(r.z), 4, 0, Math.PI * 2); g.fill(); g.stroke();
    });
    g.restore();
    g.save();
    g.translate(S / 2, S / 2); g.rotate(-heading);
    g.fillStyle = '#ff5e3a'; g.strokeStyle = '#fff'; g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(0, -8); g.lineTo(5.5, 6); g.lineTo(0, 3); g.lineTo(-5.5, 6); g.closePath(); g.fill(); g.stroke();
    g.restore();
    g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 2;
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, Math.PI * 2); g.stroke();
    g.fillStyle = '#e2e8f0'; g.font = 'bold 10px sans-serif'; g.textAlign = 'center';
    g.fillText('N', S / 2, 11);
  }

  // full map: whole world (or the custom map), you + labels
  function drawBig(px, pz, heading, extra){
    if(!bigCanvas) return;
    const bg = bigCanvas.getContext('2d'), BW = bigCanvas.width, BH = bigCanvas.height;
    const half = custom ? custom.half : WORLD_HALF;
    const bk = Math.min(BW, BH) / (half * 2 + 40);
    const W = x => BW / 2 + x * bk, H = z => BH / 2 + z * bk;
    bg.fillStyle = '#0b1122'; bg.fillRect(0, 0, BW, BH);
    paintWorld(bg, W, H, bk, { x0:-1e9, x1:1e9, z0:-1e9, z1:1e9 }, custom);
    bg.font = 'bold 12px sans-serif'; bg.textAlign = 'center'; bg.fillStyle = '#e2e8f0';
    if(!custom){
      const label = (t, x, z) => { bg.fillStyle = 'rgba(10,14,30,.7)'; const w = bg.measureText(t).width + 8; bg.fillRect(W(x) - w / 2, H(z) - 9, w, 14); bg.fillStyle = '#e2e8f0'; bg.fillText(t, W(x), H(z) + 2); };
      label('DOWNTOWN', 0, 0); label('PERIMETER HWY', 0, -1268); label('AIRPORT', -1120, -540); label('OFF-ROAD PARK', (OFFROAD.minX + OFFROAD.maxX) / 2, (OFFROAD.minZ + OFFROAD.maxZ) / 2);
      label('RED RIVER', 380, -900); label('ASSINIBOINE', -700, 375); label('DRAG STRIP', STRIP_X, -240);
      for(const s of stores){ bg.fillStyle = s.color; bg.beginPath(); bg.arc(W(s.door.x), H(s.door.z), 3, 0, Math.PI * 2); bg.fill(); }
    }
    if(extra) extra(bg, W, H);
    if(wp){ bg.fillStyle = '#ffd23f'; bg.strokeStyle = '#0b0f1a'; bg.lineWidth = 2; bg.beginPath(); bg.arc(W(wp.x), H(wp.z), 7, 0, Math.PI * 2); bg.fill(); bg.stroke(); }
    bg.save(); bg.translate(W(px), H(pz)); bg.rotate(-heading);
    bg.fillStyle = '#ff5e3a'; bg.strokeStyle = '#fff'; bg.lineWidth = 2;
    bg.beginPath(); bg.moveTo(0, -11); bg.lineTo(8, 8); bg.lineTo(0, 4); bg.lineTo(-8, 8); bg.closePath(); bg.fill(); bg.stroke();
    bg.restore();
  }

  // big-map pixel -> world (for tap-to-set waypoint)
  function bigToWorld(cx, cy){
    const BW = bigCanvas.width, BH = bigCanvas.height, half = custom ? custom.half : WORLD_HALF;
    const bk = Math.min(BW, BH) / (half * 2 + 40);
    return { x:(cx - BW / 2) / bk, z:(cy - BH / 2) / bk };
  }
  return { draw, drawBig, bigToWorld, setCustom(c){ custom = c; }, setWaypoint(p){ wp = p; }, get waypoint(){ return wp; } };
}
