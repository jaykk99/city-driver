// CITY DRIVER — north-up radar: roads, rivers, landmarks, stores, your car, other players.
import { BLOCKS, PITCH, ROAD_W, GRID_HALF, LINES, blockCenter, RED_RIVER, ASSINIBOINE, BRIDGE_Z, STRIP_X, STRIP_HALF, SPECIAL } from './world.js';

const SPECIAL_COL = { parking:'#3b3f46', arena:'#4b5bd6', legislature:'#c9b98f', forks:'#b98a5a', museum:'#7fb3d5', mansion:'#0f9d58', hospital:'#e2e8f0', park:'#3f8a3a' };

export function createMinimap(canvas, stores){
  const g = canvas.getContext('2d');
  const S = canvas.width, R = 140;
  const k = (S / 2) / R;
  let frame = 0;

  function draw(px, pz, heading, car, mp){
    if((frame++ & 3) !== 0) return;
    const W = x => S / 2 + (x - px) * k;
    const H = z => S / 2 + (z - pz) * k;
    g.clearRect(0, 0, S, S);
    g.save();
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, Math.PI * 2); g.clip();
    g.fillStyle = 'rgba(38,62,40,0.88)'; g.fillRect(0, 0, S, S);
    // rivers
    g.fillStyle = '#2f6f86';
    g.fillRect(W(RED_RIVER.minX), H(-1400), (RED_RIVER.maxX - RED_RIVER.minX) * k, (1400 + ASSINIBOINE.maxZ) * k);
    g.fillRect(W(-1400), H(ASSINIBOINE.minZ), (1400 + RED_RIVER.minX) * k, (ASSINIBOINE.maxZ - ASSINIBOINE.minZ) * k);
    // blocks
    for(let i = 0; i < BLOCKS; i++) for(let j = 0; j < BLOCKS; j++){
      const cx = blockCenter(i), cz = blockCenter(j);
      let col = 'rgba(128,136,150,0.6)';
      for(const key in SPECIAL){ const [x, z] = SPECIAL[key]; if(x === cx && z === cz) col = SPECIAL_COL[key]; }
      g.fillStyle = col;
      g.fillRect(W(cx - 30), H(cz - 30), 60 * k, 60 * k);
    }
    // roads, bridge, strip
    g.strokeStyle = '#25292f'; g.lineWidth = ROAD_W * k;
    g.beginPath();
    for(const c of LINES){
      g.moveTo(W(c), H(-GRID_HALF)); g.lineTo(W(c), H(GRID_HALF));
      g.moveTo(W(-GRID_HALF), H(c)); g.lineTo(W(GRID_HALF), H(c));
    }
    g.moveTo(W(GRID_HALF), H(BRIDGE_Z)); g.lineTo(W(STRIP_X), H(BRIDGE_Z));
    g.stroke();
    g.strokeStyle = '#3b3f46'; g.lineWidth = 9 * k;
    g.beginPath(); g.moveTo(W(STRIP_X), H(-STRIP_HALF)); g.lineTo(W(STRIP_X), H(STRIP_HALF)); g.stroke();
    // stores
    for(const s of stores){
      g.fillStyle = s.color;
      g.beginPath(); g.arc(W(s.door.x), H(s.door.z), 4.5, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#0b0f1a'; g.lineWidth = 1.5; g.stroke();
    }
    if(car){ g.fillStyle = '#ffffff'; g.fillRect(W(car.x) - 3, H(car.z) - 3, 6, 6); }
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
  return { draw };
}
