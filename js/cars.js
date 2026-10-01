// Procedural low-poly cars. All geometry built in code — no external assets.
// Each car: { name, desc, stats, build(): THREE.Group, wheels[] }

export const CAR_DEFS = [
  { id:'falcon',  name:'Falcon S',    desc:'Balanced sports coupe',   topSpeed:52, accel:14, handling:0.95, grip:1.0,  price:0,     color:0xd7263d, body:'sport'   },
  { id:'vortex',  name:'Vortex GT',    desc:'Supercar — pure speed',   topSpeed:68, accel:19, handling:0.85, grip:0.95, price:12000, color:0xffb300, body:'super'   },
  { id:'brute',   name:'Brute 500',    desc:'Muscle — raw power',      topSpeed:55, accel:17, handling:0.70, grip:0.90, price:8000,  color:0x1f6feb, body:'muscle'  },
  { id:'ranger',  name:'Ranger XLT',   desc:'Pickup truck',            topSpeed:46, accel:11, handling:0.75, grip:1.05, price:6000,  color:0x2d6a4f, body:'truck'   },
  { id:'titan',   name:'Titan SUV',    desc:'Heavy SUV — stable',      topSpeed:44, accel:10, handling:0.72, grip:1.10, price:5500,  color:0x6b7280, body:'suv'     },
  { id:'ghost',   name:'Ghost R',      desc:'Track weapon — grip',     topSpeed:60, accel:16, handling:1.05, grip:1.15, price:15000, color:0x111827, body:'track'   },
];

function mat(color, rough=0.35, metal=0.6){
  return new THREE.MeshStandardMaterial({ color, roughness:rough, metalness:metal });
}
function box(w,h,d,color,x=0,y=0,z=0,rough=0.35,metal=0.6){
  const m = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat(color,rough,metal));
  m.position.set(x,y,z); m.castShadow = true; return m;
}
// tapered box via scaled top vertices — cheap "designed" look
function wedge(w,h,d,color){
  const g = new THREE.BoxGeometry(w,h,d,1,1,2);
  const p = g.attributes.position;
  for(let i=0;i<p.count;i++){
    if(p.getY(i)>0){ p.setX(i, p.getX(i)*0.82); }
  }
  g.computeVertexNormals();
  const m = new THREE.Mesh(g, mat(color,0.3,0.65)); m.castShadow=true; return m;
}
// ---- wheel styles: 0 classic silver, 1 stealth dark + lip, 2 sport orange 5-spoke ----
const WHEEL_STYLES = [
  { hub:0xc0c8d8, rough:0.30 },
  { hub:0x23262e, rough:0.50 },
  { hub:0xff6a00, rough:0.35 },
];
function buildHub(r, w, idx){
  const st = WHEEL_STYLES[Math.max(0, Math.min(2, idx|0))];
  const g = new THREE.Group();
  if(idx===2){
    const cG = new THREE.CylinderGeometry(r*0.20,r*0.20,w+0.04,10); cG.rotateZ(Math.PI/2);
    g.add(new THREE.Mesh(cG, mat(st.hub,0.35,0.8)));
    for(let i=0;i<5;i++){
      const sp = new THREE.Mesh(new THREE.BoxGeometry(w+0.02, r*1.5, r*0.22), mat(st.hub,0.35,0.8));
      sp.rotation.x = i * Math.PI*2/5;
      g.add(sp);
    }
  } else {
    const hr = idx===1 ? r*0.45 : r*0.55;
    const hG = new THREE.CylinderGeometry(hr,hr,w+0.02, idx===1?10:8); hG.rotateZ(Math.PI/2);
    g.add(new THREE.Mesh(hG, mat(st.hub, st.rough, 0.9)));
    if(idx===1){
      const lip = new THREE.TorusGeometry(r*0.62, r*0.08, 8, 20); lip.rotateY(Math.PI/2);
      g.add(new THREE.Mesh(lip, mat(0x9aa2b5,0.3,0.9)));
    }
  }
  return g;
}
function disposeHub(hub){
  hub.traverse(o=>{ if(o.isMesh){ o.geometry.dispose(); o.material.dispose(); } });
}
function wheel(r,w,style=0){
  const g = new THREE.CylinderGeometry(r,r,w,14);
  g.rotateZ(Math.PI/2);
  const grp = new THREE.Group();
  const tire = new THREE.Mesh(g, mat(0x151515,0.9,0.1)); tire.castShadow=true;
  const hub = buildHub(r,w,style);
  grp.add(tire,hub);
  grp.userData.r=r; grp.userData.w=w; grp.userData.style=style;
  grp.userData.tire=tire; grp.userData.hub=hub; grp.userData.spin=[tire,hub];
  return grp;
}
// paint-shop wheel swap: rebuilds hubs only, keeps tires
export function setWheelStyle(group, idx){
  idx = Math.max(0, Math.min(2, idx|0));
  for(const w of (group.userData.wheels||[])){
    if(w.userData.style===idx) continue;
    const old = w.userData.hub;
    w.remove(old); disposeHub(old);
    const hub = buildHub(w.userData.r, w.userData.w, idx);
    w.add(hub);
    w.userData.hub = hub; w.userData.style = idx; w.userData.spin = [w.userData.tire, hub];
  }
  group.userData.wheelStyle = idx;
}

const BUILDERS = {
  sport(c){ // low sleek coupe
    const g=new THREE.Group();
    const body=wedge(1.9,0.55,4.2,c.color); body.position.y=0.62; g.add(body);
    const nose=box(1.7,0.35,0.9,c.color,0,0.55,2.3); g.add(nose);
    const cab=box(1.5,0.5,1.9,0x101418,0,1.05,0.2,0.15,0.9); g.add(cab); // glass
    const spoiler=box(1.8,0.08,0.35,c.color,0,1.05,-2.0); g.add(spoiler);
    g.add(box(0.08,0.35,0.3,c.color,-0.85,0.85,-2.0), box(0.08,0.35,0.3,c.color,0.85,0.85,-2.0));
    addWheels(g,0.36,[-1.35,1.35],[-0.95,0.95]);
    addLights(g,2.0);
    return g;
  },
  super(c){ // wide low supercar
    const g=new THREE.Group();
    const body=wedge(2.1,0.48,4.4,c.color); body.position.y=0.55; g.add(body);
    const cab=box(1.3,0.42,1.6,0x0d1117,0,0.95,0.3,0.12,0.9); g.add(cab);
    const wing=box(2.0,0.07,0.45,0x0d1117,0,1.0,-2.05); g.add(wing);
    g.add(box(0.08,0.4,0.35,0x0d1117,-0.95,0.8,-2.05), box(0.08,0.4,0.35,0x0d1117,0.95,0.8,-2.05));
    const skirt=box(2.15,0.15,4.0,0x0d1117,0,0.28,0,0.5,0.4); g.add(skirt);
    addWheels(g,0.38,[-1.45,1.45],[-1.05,1.05]);
    addLights(g,2.1);
    return g;
  },
  muscle(c){ // long hood, fastback
    const g=new THREE.Group();
    g.add(box(1.95,0.6,4.6,c.color,0,0.65,0));
    const hood=box(1.8,0.18,1.6,0x0d1117,0,0.98,1.3,0.4,0.5); g.add(hood); // scoop
    const cab=box(1.6,0.55,1.7,0x101418,0,1.1,-0.7,0.15,0.9); g.add(cab);
    const stripe=box(0.4,0.02,4.62,0xf8fafc,0,0.96,0,0.4,0.3); g.add(stripe);
    addWheels(g,0.4,[-1.5,1.5],[-0.98,0.98]);
    addLights(g,1.95);
    return g;
  },
  truck(c){ // pickup
    const g=new THREE.Group();
    g.add(box(2.0,0.7,1.9,c.color,0,0.85,1.5));            // cab front
    g.add(box(1.8,0.6,1.6,0x101418,0,1.35,1.1,0.15,0.9));   // windshield box
    const bed=box(2.0,0.65,2.6,c.color,0,0.8,-1.3); g.add(bed);
    g.add(box(1.85,0.12,2.5,0x0d1117,0,1.15,-1.3,0.6,0.3)); // bed liner
    const bar=box(1.9,0.12,0.12,0x39414f,0,1.7,0.1); g.add(bar); // roll bar
    g.add(box(0.12,0.6,0.12,0x39414f,-0.85,1.4,0.1), box(0.12,0.6,0.12,0x39414f,0.85,1.4,0.1));
    addWheels(g,0.46,[-1.6,1.6],[-1.0,1.0]);
    addLights(g,2.2);
    return g;
  },
  suv(c){
    const g=new THREE.Group();
    g.add(box(2.0,1.15,4.4,c.color,0,1.0,0));
    g.add(box(1.85,0.55,2.6,0x101418,0,1.55,-0.2,0.15,0.9)); // glass band
    g.add(box(2.02,0.12,4.42,0x0d1117,0,1.62,0,0.5,0.4));   // roof
    const bull=box(2.05,0.35,0.15,0x39414f,0,0.75,2.25); g.add(bull);
    addWheels(g,0.44,[-1.5,1.5],[-1.0,1.0]);
    addLights(g,2.25);
    return g;
  },
  track(c){ // widebody track car, big wing
    const g=new THREE.Group();
    const body=wedge(2.05,0.52,4.3,c.color); body.position.y=0.58; g.add(body);
    g.add(box(2.2,0.3,1.2,0x0d1117,0,0.5,1.5,0.4,0.5));  // splitter
    g.add(box(2.2,0.3,1.0,0x0d1117,0,0.5,-1.6,0.4,0.5)); // diffuser
    const cab=box(1.4,0.45,1.7,0x0d1117,0,0.98,0.1,0.12,0.9); g.add(cab);
    const wing=box(2.1,0.08,0.5,c.color,0,1.25,-2.0); g.add(wing);
    g.add(box(0.1,0.55,0.4,c.color,-1.0,0.95,-2.0), box(0.1,0.55,0.4,c.color,1.0,0.95,-2.0));
    addWheels(g,0.37,[-1.4,1.4],[-1.05,1.05]);
    addLights(g,2.15);
    return g;
  },
};

function addWheels(g,r,zs,xs){
  g.userData.wheels=[];
  for(const z of zs) for(const x of xs){
    const w=wheel(r,0.32); w.position.set(x,r,z); g.add(w); g.userData.wheels.push(w);
  }
}
function addLights(g,frontZ){
  const hg=new THREE.SphereGeometry(0.11,8,8);
  const hm=mat(0xfff6c9,0.2,0.2); hm.emissive=new THREE.Color(0xffedb0); hm.emissiveIntensity=0.9;
  for(const x of [-0.6,0.6]){ const h=new THREE.Mesh(hg,hm); h.position.set(x,0.62,frontZ-0.15); g.add(h); }
  const tm=mat(0xff2222,0.3,0.2); tm.emissive=new THREE.Color(0xff2222); tm.emissiveIntensity=0.7;
  const tg=new THREE.BoxGeometry(0.35,0.12,0.06);
  for(const x of [-0.6,0.6]){ const t=new THREE.Mesh(tg,tm); t.position.set(x,0.68,-(frontZ-0.25)); g.add(t); }
  // brake light refs for physics flash
  g.userData.brakeMats=[tm];
  g.userData.setBrake = on => { for(const m of g.userData.brakeMats) m.emissiveIntensity = on ? 2.4 : 0.7; };
}

// cheap blob shadow so cars read well on mobile without shadow maps
const SHADOW_DIMS = { sport:[2.0,4.4], super:[2.2,4.6], muscle:[2.05,4.8], truck:[2.1,5.2], suv:[2.1,4.6], track:[2.15,4.5] };
function addBlobShadow(g, body){
  const d = SHADOW_DIMS[body] || [2.0,4.4];
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(d[0], d[1]),
    new THREE.MeshBasicMaterial({ color:0x000000, transparent:true, opacity:0.32, depthWrite:false })
  );
  m.rotation.x = -Math.PI/2; m.position.y = 0.02; m.renderOrder = 1;
  g.add(m);
}

// Apply upgrade-affected stats; returns effective stats
export function effectiveStats(def, upgrades){
  const u = upgrades || {};
  const lv = k => u[k]||0;
  return {
    topSpeed: def.topSpeed * (1 + 0.06*lv('engine') + 0.03*lv('turbo')),
    accel:    def.accel    * (1 + 0.10*lv('engine') + 0.14*lv('turbo')),
    handling: def.handling * (1 + 0.05*lv('suspension')),
    grip:     def.grip     * (1 + 0.07*lv('tires')),
    nitroPower: 1.35 + 0.15*lv('nitro'),
    nitroTime:  2.2 + 0.6*lv('nitro'),
  };
}

export function buildCar(def){
  const g = BUILDERS[def.body](def);
  g.userData.defId = def.id;
  g.userData.bodyColor = def.color;
  g.userData.wheelStyle = 0;
  addBlobShadow(g, def.body);
  return g;
}

// recolor body (paint shop) — recolors meshes that used the original body color
export function paintCar(group, colorHex){
  const orig = group.userData.bodyColor;
  group.traverse(o=>{
    if(o.isMesh && o.material && o.material.color && o.material.color.getHex()===orig){
      o.material = o.material.clone();
      o.material.color.setHex(colorHex);
    }
  });
  group.userData.bodyColor = colorHex;
}
