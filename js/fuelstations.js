// CITY DRIVER — visible gas stations.
//
// The fuel system (fuel.js) refuelled at invisible forecourt points: a car
// parked beside a bare sidewalk filled up, with nothing to show for it.
// This module gives each station a real forecourt: a concrete pad, a canopy
// on four columns, two pump islands, and a price sign by the corner nearest
// the intersection — so a player can SEE where to pull in.
//
// Pure layout + a THREE mesh builder that takes THREE as a parameter, so the
// layout is unit-testable in node without a renderer or document. city.js
// reserves each station lot (no building, tree, parked car or furniture
// spawns on it) and adds the colliders, so cars drive onto the pad between
// the islands but cannot drive through a pump, a column or the sign.
//
// Conventions (+X east, +Z south, as in world.js):
// - `axis` is the road the canopy runs parallel to: 'x' runs the pump row
//   east-west, 'z' runs it north-south.
// - `toward` is the unit step from the station point toward its intersection
//   (the corner the sign stands on). Both forecourts sit 18 m from each road
//   centre line and roads are 14 m wide, so the sign's 9 m diagonal step
//   keeps it 2 m clear of either road edge.
import { STATIONS, STATION_RADIUS } from './fuel.js';

export const CANOPY_LEN = 20;     // m along the pump row
export const CANOPY_WID = 11;     // m across the pump row
export const CANOPY_H = 5.0;      // canopy slab height
export const PUMP_SPACING = 6;    // pumps at +/- this along the row
export const ISLAND_LEN = 3.4;    // pump island footprint, along the row
export const ISLAND_WID = 1.6;    // pump island footprint, across the row
export const SIGN_STEP = 9;       // sign's diagonal step toward the intersection
export const LOT_HALF = 12;       // reserved lot half-extent each way
export const PAD_MARGIN = 0.5;    // pad apron past the canopy each way: the
                                  // forecourts sit 18 m from each road centre
                                  // line, so a wider pad would bleed onto a road

// Local frame: u runs along the pump row, v runs across it. World mapping:
// axis 'x' -> world (x + u, z + v); axis 'z' -> world (x + v, z - u), which
// matches a THREE group rotated PI/2 about Y (the mesh builder's frame).
function toWorld(station, u, v){
  return station.axis === 'x'
    ? { x: station.x + u, z: station.z + v }
    : { x: station.x + v, z: station.z - u };
}
function rect(cx, cz, hw, hd){
  return { minX: cx - hw, maxX: cx + hw, minZ: cz - hd, maxZ: cz + hd };
}

// Full forecourt layout for one station: pad, canopy + columns, pumps,
// sign, the reserved lot, and the colliders city.js must register.
export function stationLayout(station){
  const { x, z } = station;
  const [tx, tz] = station.toward;
  // Pad follows the pump row: long side along the row axis. (A fixed rect
  // would bleed into the road on the north-south station, 1 m past Main St.)
  const pad = station.axis === 'x'
    ? rect(x, z, CANOPY_LEN / 2 + PAD_MARGIN, CANOPY_WID / 2 + PAD_MARGIN)
    : rect(x, z, CANOPY_WID / 2 + PAD_MARGIN, CANOPY_LEN / 2 + PAD_MARGIN);
  const canopyC = { x, z };
  const columns = [];
  for(const u of [-CANOPY_LEN / 2 + 1, CANOPY_LEN / 2 - 1])
    for(const v of [-CANOPY_WID / 2 + 1, CANOPY_WID / 2 - 1])
      columns.push(toWorld(station, u, v));
  const pumps = [-PUMP_SPACING, PUMP_SPACING].map(u => toWorld(station, u, 0));
  const sign = { x: x + tx * SIGN_STEP, z: z + tz * SIGN_STEP };
  const colliders = [
    ...pumps.map(p => station.axis === 'x'
      ? rect(p.x, p.z, ISLAND_LEN / 2, ISLAND_WID / 2)
      : rect(p.x, p.z, ISLAND_WID / 2, ISLAND_LEN / 2)),
    ...columns.map(c => rect(c.x, c.z, 0.3, 0.3)),
    rect(sign.x, sign.z, 0.3, 0.3),
  ];
  return {
    station, axis: station.axis,
    lot: rect(x, z, LOT_HALF, LOT_HALF),
    pad, canopy: { ...canopyC, len: CANOPY_LEN, wid: CANOPY_WID, h: CANOPY_H },
    columns, pumps, sign, colliders,
  };
}

export function stationLayouts(){
  return STATIONS.map(stationLayout);
}

// A car parked alongside a pump island sits ~2-3 m from the pump (island
// half-width 0.8 m + car half-width ~1 m); 5 m leaves room for a sloppy
// park job but excludes the station midpoint (6 m from either pump) and
// the road shoulder — refuelling means pulling up to a pump, not just
// stopping somewhere on the forecourt.
export const PUMP_REFUEL_DIST = 5;

// Nearest pump island to (x, z), with its distance. Never null: the list
// is fixed, same as nearestStation.
export function nearestPump(x, z){
  let best = null, bestD = Infinity;
  for(const L of stationLayouts())
    for(const p of L.pumps){
      const d = Math.hypot(p.x - x, p.z - z);
      if(d < bestD){ best = p; bestD = d; }
    }
  return { pump: best, dist: bestD };
}

// Meshes for one layout, in the layout's local frame (long axis = +X), on a
// group positioned at the station point and rotated for the row axis.
// opts.signTexture: optional canvas texture for the price sign face.
export function buildFuelStationMeshes(THREE, layout, opts = {}){
  const g = new THREE.Group();
  const std = (color, o = {}) => new THREE.MeshStandardMaterial(
    Object.assign({ color, roughness: 0.8 }, o));
  const box = (w, h, d, mat, px, py, pz) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(px, py, pz); m.castShadow = true; m.receiveShadow = true;
    g.add(m); return m;
  };
  const concrete = std(0x9aa0a3, { roughness: 0.95 });
  const red = std(0xc8102e, { roughness: 0.5 });
  const dark = std(0x2b2f36, { roughness: 0.6, metalness: 0.3 });
  const white = std(0xf2f3f5, { roughness: 0.7 });
  const yellow = std(0xffc21a, { roughness: 0.6 });
  // pad: just past the canopy each way, top just above the sidewalk
  box(CANOPY_LEN + 2 * PAD_MARGIN, 0.2, CANOPY_WID + 2 * PAD_MARGIN, concrete, 0, 0.1, 0);
  // canopy slab + white fascia under it
  box(CANOPY_LEN, 0.5, CANOPY_WID, red, 0, CANOPY_H, 0);
  box(CANOPY_LEN, 0.18, CANOPY_WID, white, 0, CANOPY_H - 0.32, 0);
  // columns: 4 cylinders from the pad up to the canopy
  const colGeo = new THREE.CylinderGeometry(0.28, 0.28, CANOPY_H - 0.2, 10);
  for(const u of [-CANOPY_LEN / 2 + 1, CANOPY_LEN / 2 - 1])
    for(const v of [-CANOPY_WID / 2 + 1, CANOPY_WID / 2 - 1]){
      const c = new THREE.Mesh(colGeo, std(0xd7dade, { roughness: 0.6, metalness: 0.3 }));
      c.position.set(u, (CANOPY_H - 0.2) / 2 + 0.2, v); c.castShadow = true; g.add(c);
    }
  // pump islands + pump bodies: a car pulls up alongside each island
  for(const u of [-PUMP_SPACING, PUMP_SPACING]){
    box(ISLAND_LEN, 0.25, ISLAND_WID, concrete, u, 0.32, 0);
    box(0.9, 1.5, 0.7, dark, u, 1.2, 0);
    box(0.95, 0.25, 0.75, red, u, 2.05, 0);
  }
  // price sign, in the local corner toward the intersection
  const [tx, tz] = layout.station.toward;
  const su = layout.axis === 'x' ? tx * SIGN_STEP : -tz * SIGN_STEP;
  const sv = layout.axis === 'x' ? tz * SIGN_STEP : tx * SIGN_STEP;
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.18, 6.5, 8), dark);
  pole.position.set(su, 3.45, sv); pole.castShadow = true; g.add(pole);
  const signMat = opts.signTexture
    ? new THREE.MeshStandardMaterial({ map: opts.signTexture, emissive: 0xffffff, emissiveMap: opts.signTexture, emissiveIntensity: 0.35, roughness: 0.6 })
    : yellow;
  const sign = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.8, 0.3), signMat);
  sign.position.set(su, 7.2, sv); sign.castShadow = true; g.add(sign);
  g.position.set(layout.station.x, 0, layout.station.z);
  g.rotation.y = layout.axis === 'x' ? 0 : Math.PI / 2;
  return g;
}

// Sanity: every pump must sit inside the refuel radius, or the visible pump
// would not be where the fill actually happens.
export function pumpsInRefuelRadius(layout){
  return layout.pumps.every(p =>
    Math.hypot(p.x - layout.station.x, p.z - layout.station.z) <= STATION_RADIUS);
}
