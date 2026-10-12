// CITY DRIVER — small north-up radar: roads, stores, your parked car, you.
const PITCH = 74, BLOCKS = 5, ROAD_W = 14;
const ROAD_LINES = []; for(let i = 0; i <= BLOCKS; i++) ROAD_LINES.push((i - BLOCKS / 2) * PITCH);
const HALF = (BLOCKS * PITCH + ROAD_W) / 2;

export function createMinimap(canvas, stores){
  const g = canvas.getContext('2d');
  const S = canvas.width, R = 130;          // R = world meters from center to edge
  const k = (S / 2) / R;
  let frame = 0;

  function draw(px, pz, heading, car){
    if((frame++ & 3) !== 0) return;        // every 4th frame is plenty
    const W = (x) => S / 2 + (x - px) * k;
    const H = (z) => S / 2 + (z - pz) * k;
    g.clearRect(0, 0, S, S);
    g.save();
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, Math.PI * 2); g.clip();
    g.fillStyle = 'rgba(20,40,28,0.82)'; g.fillRect(0, 0, S, S);
    // blocks
    g.fillStyle = 'rgba(120,130,145,0.55)';
    for(let i = 0; i < BLOCKS; i++) for(let j = 0; j < BLOCKS; j++){
      const cx = (i - (BLOCKS - 1) / 2) * PITCH, cz = (j - (BLOCKS - 1) / 2) * PITCH;
      g.fillRect(W(cx - 30), H(cz - 30), 60 * k, 60 * k);
    }
    // roads
    g.strokeStyle = '#2b2f36'; g.lineWidth = ROAD_W * k;
    g.beginPath();
    for(const c of ROAD_LINES){
      g.moveTo(W(c), H(-HALF)); g.lineTo(W(c), H(HALF));
      g.moveTo(W(-HALF), H(c)); g.lineTo(W(HALF), H(c));
    }
    g.moveTo(W(HALF), H(0)); g.lineTo(W(232), H(0));                // link road
    g.stroke();
    g.strokeStyle = '#3b3f46'; g.lineWidth = 9 * k;                 // drag strip
    g.beginPath(); g.moveTo(W(232), H(-225)); g.lineTo(W(232), H(225)); g.stroke();
    // stores
    for(const s of stores){
      g.fillStyle = s.color;
      g.beginPath(); g.arc(W(s.door.x), H(s.door.z), 4.5, 0, Math.PI * 2); g.fill();
      g.strokeStyle = '#0b0f1a'; g.lineWidth = 1.5; g.stroke();
    }
    // parked car (only when on foot)
    if(car){
      g.fillStyle = '#ffffff';
      g.fillRect(W(car.x) - 3, H(car.z) - 3, 6, 6);
    }
    g.restore();
    // player arrow (always centered)
    g.save();
    g.translate(S / 2, S / 2);
    g.rotate(-heading);
    g.fillStyle = '#ff5e3a'; g.strokeStyle = '#fff'; g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(0, -8); g.lineTo(5.5, 6); g.lineTo(0, 3); g.lineTo(-5.5, 6); g.closePath();
    g.fill(); g.stroke();
    g.restore();
    g.strokeStyle = 'rgba(255,255,255,0.35)'; g.lineWidth = 2;
    g.beginPath(); g.arc(S / 2, S / 2, S / 2 - 1, 0, Math.PI * 2); g.stroke();
    g.fillStyle = '#e2e8f0'; g.font = 'bold 10px sans-serif'; g.textAlign = 'center';
    g.fillText('N', S / 2, 11);
  }
  return { draw };
}
