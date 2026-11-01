// CITY DRIVER — visible drive-in repair shops.
//
// The damage system (cardamage.js) could only fix a car one way: wreck it
// completely and wait for the tow truck to bill you. A battered-but-running
// car had no repair path at all — you either drove a smoking car at half
// pace or finished it off on purpose. This module closes that gap: real
// repair shops with a canopy, two service bays with lift platforms, and a
// sign by the corner nearest the intersection — pull into a bay, sit still,
// and the HP climbs progressively at the tow-bill rate, so repairing early
// costs exactly what the tow would have charged for the same damage.
//
// Pure layout + a THREE mesh builder that takes THREE as a parameter, so
// the layout is unit-testable in node without a renderer or document.
// city.js reserves each shop lot (no building, tree, parked car or
// furniture spawns on it) and adds the colliders, so cars drive onto the
// pad into a bay but cannot drive through a lift, a column or the sign.
//
// Conventions (+X east, +Z south, as in world.js), same as fuelstations.js:
// - `axis` is the road the bay row runs parallel to: 'x' runs the bay row
//   east-west, 'z' runs it north-south.
// - `toward` is the unit step from the shop point toward its intersection
//   (the corner the sign stands on). Both shops sit 18 m from each road
//   centre line and roads are 14 m wide, so the sign's 9 m diagonal step
//   keeps it 2 m clear of either road edge.
import { REPAIR_PER_HP } from './cardamage.js';

export const REPAIR_RADIUS = 22;   // m: pull onto the shop lot to count
export const REPAIR_RATE = 25;     // hp/s while parked in a bay: a car at
                                   // 0 hp takes ~4 s, same feel as a fill-up
export const BAY_SPACING = 6;      // bays at +/- this along the row
export const BAY_REPAIR_DIST = 5;  // a car parked in a bay sits ~2-3 m from
                                   // its lift (lift half-width 0.8 m + car
                                   // half-width ~1 m); 5 m leaves room for
                                   // a sloppy park job but excludes the shop
                                   // midpoint (6 m from either bay)
export const SHOP_LEN = 20;        // m along the bay row
export const SHOP_WID = 11;        // m across the bay row
export const CANOPY_H = 5.0;       // canopy slab height
export const LIFT_LEN = 3.4;       // lift platform footprint, along the row
export const LIFT_WID = 1.6;       // lift platform footprint, across the row
export const LIFT_OFF = 2.8;       // lift offset across the row from its bay:
                                   // clear of the parked car, close enough
                                   // to read as that bay's lift
export const SIGN_STEP = 9;        // sign's diagonal step toward the intersection
export const LOT_HALF = 13;        // reserved lot half-extent each way
export const PAD_MARGIN = 0.5;     // pad apron past the canopy each way

// The two corners the gas stations do not already occupy, one block corner
// off their intersections, 18 m from each road centre line. Arlington &
// Portage: (-203, -55) is 18 m from Arlington St (x=-185) and Portage Ave
// (z=-37). Main & York: (203, 129) is 18 m from Main St (x=185) and York
// Ave (z=111).
export const REPAIR_SHOPS = [
  { name: 'Arlington & Portage', x: -203, z: -55, axis: 'z', toward: [1, 1] },
  { name: 'Main & York', x: 203, z: 129, axis: 'x', toward: [-1, -1] },
];

// Local frame: u runs along the bay row, v runs across it. World mapping:
// axis 'x' -> world (x + u, z + v); axis 'z' -> world (x + v, z - u), which
// matches a THREE group rotated PI/2 about Y (the mesh builder's frame).
function toWorld(shop, u, v){
  return shop.axis === 'x'
    ? { x: shop.x + u, z: shop.z + v }
    : { x: shop.x + v, z: shop.z - u };
}
function rect(cx, cz, hw, hd){
  return { minX: cx - hw, maxX: cx + hw, minZ: cz - hd, maxZ: cz + hd };
}

// Full shop layout for one shop: pad, canopy + columns, bays + lifts,
// sign, the reserved lot, and the colliders city.js must register.
export function shopLayout(shop){
  const { x, z } = shop;
  const [tx, tz] = shop.toward;
  // Pad follows the bay row: long side along the row axis. (A fixed rect
  // would bleed into the road on the north-south shop, 1 m past Portage.)
  const pad = shop.axis === 'x'
    ? rect(x, z, SHOP_LEN / 2 + PAD_MARGIN, SHOP_WID / 2 + PAD_MARGIN)
    : rect(x, z, SHOP_WID / 2 + PAD_MARGIN, SHOP_LEN / 2 + PAD_MARGIN);
  const canopyC = { x, z };
  const columns = [];
  for(const u of [-SHOP_LEN / 2 + 1, SHOP_LEN / 2 - 1])
    for(const v of [-SHOP_WID / 2 + 1, SHOP_WID / 2 - 1])
      columns.push(toWorld(shop, u, v));
  const bays = [-BAY_SPACING, BAY_SPACING].map(u => toWorld(shop, u, 0));
  const lifts = [-BAY_SPACING, BAY_SPACING].map(u => toWorld(shop, u, LIFT_OFF));
  const sign = { x: x + tx * SIGN_STEP, z: z + tz * SIGN_STEP };
  const colliders = [
    ...lifts.map(p => shop.axis === 'x'
      ? rect(p.x, p.z, LIFT_LEN / 2, LIFT_WID / 2)
      : rect(p.x, p.z, LIFT_WID / 2, LIFT_LEN / 2)),
    ...columns.map(c => rect(c.x, c.z, 0.3, 0.3)),
    rect(sign.x, sign.z, 0.3, 0.3),
  ];
  return {
    shop, axis: shop.axis,
    lot: rect(x, z, LOT_HALF, LOT_HALF),
    pad, canopy: { ...canopyC, len: SHOP_LEN, wid: SHOP_WID, h: CANOPY_H },
    columns, bays, lifts, sign, colliders,
  };
}

export function shopLayouts(){
  return REPAIR_SHOPS.map(shopLayout);
}

// Nearest shop to (x, z), with its distance. Never null: the list is fixed.
export function nearestRepairShop(x, z){
  let best = REPAIR_SHOPS[0], bestD = Infinity;
  for(const s of REPAIR_SHOPS){
    const d = Math.hypot(s.x - x, s.z - z);
    if(d < bestD){ best = s; bestD = d; }
  }
  return { shop: best, dist: bestD };
}

// Nearest service bay to (x, z), with its distance. Never null: the list
// is fixed, same as nearestPump.
export function nearestBay(x, z){
  let best = null, bestD = Infinity;
  for(const L of shopLayouts())
    for(const b of L.bays){
      const d = Math.hypot(b.x - x, b.z - z);
      if(d < bestD){ best = b; bestD = d; }
    }
  return { bay: best, dist: bestD };
}

// Meshes for one layout, in the layout's local frame (long axis = +X), on a
// group positioned at the shop point and rotated for the bay-row axis.
// opts.signTexture: optional canvas texture for the sign face.
export function buildRepairShopMeshes(THREE, layout, opts = {}){
  const g = new THREE.Group();
  const std = (color, o = {}) => new THREE.MeshStandardMaterial(
    Object.assign({ color, roughness: 0.8 }, o));
  const box = (w, h, d, mat, px, py, pz) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(px, py, pz); m.castShadow = true; m.receiveShadow = true;
    g.add(m); return m;
  };
  const concrete = std(0x9aa0a3, { roughness: 0.95 });
  const orange = std(0xe8730c, { roughness: 0.5 });
  const dark = std(0x2b2f36, { roughness: 0.6, metalness: 0.3 });
  const white = std(0xf2f3f5, { roughness: 0.7 });
  const yellow = std(0xffc21a, { roughness: 0.6 });
  // pad: just past the canopy each way, top just above the sidewalk
  box(SHOP_LEN + 2 * PAD_MARGIN, 0.2, SHOP_WID + 2 * PAD_MARGIN, concrete, 0, 0.1, 0);
  // canopy slab + white fascia under it
  box(SHOP_LEN, 0.5, SHOP_WID, orange, 0, CANOPY_H, 0);
  box(SHOP_LEN, 0.18, SHOP_WID, white, 0, CANOPY_H - 0.32, 0);
  // columns: 4 cylinders from the pad up to the canopy
  const colGeo = new THREE.CylinderGeometry(0.28, 0.28, CANOPY_H - 0.2, 10);
  for(const u of [-SHOP_LEN / 2 + 1, SHOP_LEN / 2 - 1])
    for(const v of [-SHOP_WID / 2 + 1, SHOP_WID / 2 - 1]){
      const c = new THREE.Mesh(colGeo, std(0xd7dade, { roughness: 0.6, metalness: 0.3 }));
      c.position.set(u, (CANOPY_H - 0.2) / 2 + 0.2, v); c.castShadow = true; g.add(c);
    }
  // service bays: a lift platform beside each bay + a yellow bay stripe
  // on the pad where the car parks
  for(const u of [-BAY_SPACING, BAY_SPACING]){
    box(LIFT_LEN, 0.35, LIFT_WID, dark, u, 0.38, LIFT_OFF);
    box(LIFT_LEN, 0.08, 0.3, yellow, u, 0.6, LIFT_OFF);
    box(3.2, 0.06, 2.2, yellow, u, 0.23, 0);
  }
  // sign, in the local corner toward the intersection
  const [tx, tz] = layout.shop.toward;
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
  g.position.set(layout.shop.x, 0, layout.shop.z);
  g.rotation.y = layout.axis === 'x' ? 0 : Math.PI / 2;
  return g;
}

// Sanity: every bay must sit inside the repair radius, or the visible bay
// would not be where the repair actually happens. Same check the fuel
// system runs for its pumps.
export function baysInRepairRadius(layout){
  return layout.bays.every(b =>
    Math.hypot(b.x - layout.shop.x, b.z - layout.shop.z) <= REPAIR_RADIUS);
}

// What a bay repair of `hp` points costs at the tow-bill rate, so the
// shop never undercuts or overcharges the tow for the same damage.
export function repairBill(hp){
  return Math.ceil(Math.max(0, hp) * REPAIR_PER_HP);
}
