// CITY DRIVER — "Paint the Town Red": pure game logic (no three.js), so it
// can be unit-tested. Turn it on and everything you drive past turns red:
// the streets under your wheels and every building you brush past.
//
//   const pt = new PaintTown(city.buildings, LINES, ROAD_W, GRID_HALF);
//   const ev = pt.update(x, z, onFoot);   // -> { buildings:[ids], cells:n, milestone, pay }
//   pt.progress                           // 0..1 of the whole town
//
// Progress is weighted 60% buildings, 40% streets. Streets are measured in
// ROAD_CELL-long slices of every road in the grid.

export const ROAD_CELL = 8;                 // metres of road per paint cell
export const CAR_REACH = 14;                // the spray reaches a facade 14 m from the car (curb lane to the sidewalk shops)
export const FOOT_REACH = 4;               // on foot you have to walk right up to it
export const PAY_BUILDING = 250;            // cash per building painted
export const PAY_CELL = 5;                  // cash per new slice of street
export const MILESTONES = [
  { at:0.10, pay:5000,   msg:'🎨 10% red — the town is starting to blush' },
  { at:0.25, pay:15000,  msg:'🎨 25% red — people are noticing' },
  { at:0.50, pay:40000,  msg:'🎨 HALF THE TOWN IS RED' },
  { at:0.75, pay:75000,  msg:'🎨 75% red — almost there' },
  { at:1.00, pay:250000, msg:'🔴 YOU PAINTED THE TOWN RED' },
];
const W_BUILD = 0.6, W_ROAD = 0.4;

export class PaintTown {
  constructor(buildings, lines, roadW, roadHalf){
    this.buildings = buildings.filter(b => b.paintable !== false);
    this.lines = lines; this.roadW = roadW; this.roadHalf = roadHalf;
    this.perLine = Math.ceil((roadHalf * 2) / ROAD_CELL);
    this.totalCells = lines.length * 2 * this.perLine;
    this.paintedB = new Set();
    this.paintedC = new Set();
    this.milestoneIdx = 0;
    this.active = false;
  }
  get progress(){
    const b = this.buildings.length ? this.paintedB.size / this.buildings.length : 1;
    const r = this.totalCells ? this.paintedC.size / this.totalCells : 1;
    return Math.min(1, b * W_BUILD + r * W_ROAD);
  }
  get buildingCount(){ return this.paintedB.size; }

  // road cells the point (x, z) is standing on (0, 1 or 2 at an intersection)
  cellsAt(x, z){
    const out = [], hw = this.roadW / 2, H = this.roadHalf;
    if(Math.abs(x) > H || Math.abs(z) > H) return out;
    for(let i = 0; i < this.lines.length; i++){
      const c = this.lines[i];
      if(Math.abs(x - c) <= hw) out.push(i * 2 * this.perLine + Math.min(this.perLine - 1, Math.floor((z + H) / ROAD_CELL)));
      if(Math.abs(z - c) <= hw) out.push((i * 2 + 1) * this.perLine + Math.min(this.perLine - 1, Math.floor((x + H) / ROAD_CELL)));
    }
    return out;
  }
  // centre point of a cell (used to re-lay paint after a reload)
  cellCenter(key){
    const half = this.roadHalf, li = Math.floor(key / this.perLine), k = key % this.perLine;
    const c = this.lines[li >> 1], along = -half + (k + 0.5) * ROAD_CELL;
    return (li & 1) ? { x:along, z:c, axis:'x' } : { x:c, z:along, axis:'z' };
  }

  update(x, z, onFoot = false){
    const ev = { buildings:[], cells:0, milestone:null, pay:0 };
    if(!this.active) return ev;
    if(!onFoot){
      for(const k of this.cellsAt(x, z)) if(!this.paintedC.has(k)){ this.paintedC.add(k); ev.cells++; }
    }
    const r = onFoot ? FOOT_REACH : CAR_REACH;
    for(const b of this.buildings){
      if(this.paintedB.has(b.id)) continue;
      const dx = Math.max(b.minX - x, 0, x - b.maxX), dz = Math.max(b.minZ - z, 0, z - b.maxZ);
      if(dx * dx + dz * dz <= r * r){ this.paintedB.add(b.id); ev.buildings.push(b.id); }
    }
    ev.pay = ev.buildings.length * PAY_BUILDING + ev.cells * PAY_CELL;
    const p = this.progress;
    // a float sum can land a hair under 1.0 with everything painted
    const full = this.paintedB.size === this.buildings.length && this.paintedC.size === this.totalCells;
    while(this.milestoneIdx < MILESTONES.length && (p >= MILESTONES[this.milestoneIdx].at - 1e-9 || full)){
      ev.milestone = MILESTONES[this.milestoneIdx++];
      ev.pay += ev.milestone.pay;
    }
    return ev;
  }

  reset(){ this.paintedB.clear(); this.paintedC.clear(); this.milestoneIdx = 0; }

  serialize(){ return { b:[...this.paintedB], c:[...this.paintedC], m:this.milestoneIdx }; }
  load(d){
    this.reset();
    if(!d) return;
    const ids = new Set(this.buildings.map(b => b.id));
    for(const id of d.b || []) if(ids.has(id)) this.paintedB.add(id);
    for(const k of d.c || []) if(k >= 0 && k < this.totalCells) this.paintedC.add(k);
    this.milestoneIdx = Math.max(0, Math.min(MILESTONES.length, d.m | 0));
  }
}
