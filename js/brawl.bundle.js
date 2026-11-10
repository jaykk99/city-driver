(()=>{var fo="160";var Lh=0,Ho=1,Ih=2;var Pr=1,Dh=2,Mn=3,Hn=0,Ve=1,ln=2;var zn=0,Ii=1,Vo=2,Go=3,Wo=4,Uh=5,ni=100,Nh=101,Oh=102,Xo=103,qo=104,Fh=200,zh=201,kh=202,Bh=203,Ca=204,Pa=205,Hh=206,Vh=207,Gh=208,Wh=209,Xh=210,qh=211,Yh=212,Zh=213,Jh=214,$h=0,Kh=1,Qh=2,js=3,jh=4,tu=5,eu=6,nu=7,po=0,iu=1,su=2,kn=0,ru=1,au=2,ou=3,lu=4,cu=5,hu=6;var xc=300,Ni=301,Oi=302,La=303,Ia=304,Lr=306,hs=1e3,cn=1001,Da=1002,Me=1003,Yo=1004;var Jr=1005;var Ke=1006,uu=1007;var us=1008;var Bn=1009,du=1010,fu=1011,mo=1012,_c=1013,On=1014,Fn=1015,ds=1016,vc=1017,yc=1018,si=1020,pu=1021,hn=1023,mu=1024,gu=1025,ri=1026,Fi=1027,xu=1028,Mc=1029,_u=1030,bc=1031,Sc=1033,$r=33776,Kr=33777,Qr=33778,jr=33779,Zo=35840,Jo=35841,$o=35842,Ko=35843,wc=36196,Qo=37492,jo=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,al=37814,ol=37815,ll=37816,cl=37817,hl=37818,ul=37819,dl=37820,fl=37821,ta=36492,pl=36494,ml=36495,vu=36283,gl=36284,xl=36285,_l=36286;var tr=2300,er=2301,ea=2302,vl=2400,yl=2401,Ml=2402;var Ec=3e3,ai=3001,yu=3200,Mu=3201,Tc=0,bu=1,Qe="",xe="srgb",wn="srgb-linear",go="display-p3",Ir="display-p3-linear",nr="linear",ae="srgb",ir="rec709",sr="p3";var di=7680;var bl=519,Su=512,wu=513,Eu=514,Ac=515,Tu=516,Au=517,Ru=518,Cu=519,Sl=35044,Rc=35048;var wl="300 es",Ua=1035,Sn=2e3,rr=2001,Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var na=Math.PI/180,ar=180/Math.PI;function _s(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]).toLowerCase()}function He(n,t,e){return Math.max(t,Math.min(e,n))}function Pu(n,t){return(n%t+t)%t}function ia(n,t,e){return(1-e)*n+e*t}function El(n){return(n&n-1)===0&&n!==0}function Na(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ts(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Jt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],x=i[8],g=s[0],m=s[3],f=s[6],S=s[1],_=s[4],T=s[7],C=s[2],E=s[5],A=s[8];return r[0]=o*g+a*S+l*C,r[3]=o*m+a*_+l*E,r[6]=o*f+a*T+l*A,r[1]=c*g+h*S+d*C,r[4]=c*m+h*_+d*E,r[7]=c*f+h*T+d*A,r[2]=u*g+p*S+x*C,r[5]=u*m+p*_+x*E,r[8]=u*f+p*T+x*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,x=e*d+i*u+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=d*g,t[1]=(s*c-h*i)*g,t[2]=(a*i-s*o)*g,t[3]=u*g,t[4]=(h*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},sa=new Yt;function Cc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lu(){let n=or("canvas");return n.style.display="block",n}var Tl={};function ls(n){n in Tl||(Tl[n]=!0,console.warn(n))}var Al=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rl=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[wn]:{transfer:nr,primaries:ir,toReference:n=>n,fromReference:n=>n},[xe]:{transfer:ae,primaries:ir,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ir]:{transfer:nr,primaries:sr,toReference:n=>n.applyMatrix3(Rl),fromReference:n=>n.applyMatrix3(Al)},[go]:{transfer:ae,primaries:sr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Rl),fromReference:n=>n.applyMatrix3(Al).convertLinearToSRGB()}},Iu=new Set([wn,Ir]),te={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Iu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Rs[t].toReference,s=Rs[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Rs[n].primaries},getTransfer:function(n){return n===Qe?nr:Rs[n].transfer}};function Di(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ra(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fi,lr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=or("canvas")),fi.width=t.width,fi.height=t.height;let i=fi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=or("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Di(e[i]/255)*255):e[i]=Di(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Du=0,cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=_s(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(aa(s[o].image)):r.push(aa(s[o]))}else r=aa(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function aa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Uu=0,je=class n extends Vn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=cn,s=cn,r=Ke,o=us,a=hn,l=Bn,c=n.DEFAULT_ANISOTROPY,h=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=_s(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Jt(0,0),this.repeat=new Jt(1,1),this.center=new Jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ai?xe:Qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hs:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case Da:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hs:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case Da:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xe?ai:Ec}set encoding(t){ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ai?xe:Qe}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=xc;je.DEFAULT_ANISOTROPY=1;var he=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],x=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,T=(p+1)/2,C=(f+1)/2,E=(h+u)/4,A=(d+g)/4,N=(x+m)/4;return _>T&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=A/i):T>C?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=E/s,r=N/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=A/r,s=N/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-x)*(m-x)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(d-g)/S,this.z=(u-h)/S,this.w=Math.acos((c+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Oa=class extends Vn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ai?xe:Qe),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new cr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Oa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},hr=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fa=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],p=r[o+1],x=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=x,t[e+3]=g;return}if(d!==g||l!==u||c!==p||h!==x){let m=1-a,f=l*u+c*p+h*x+d*g,S=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let C=Math.sqrt(_),E=Math.atan2(C,f*S);m=Math.sin(m*E)/C,a=Math.sin(a*E)/C}let T=a*S;if(l=l*m+u*T,c=c*m+p*T,h=h*m+x*T,d=d*m+g*T,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+h*d+l*p-c*u,t[e+1]=l*x+h*u+c*d-a*p,t[e+2]=c*x+h*p+a*u-l*d,t[e+3]=h*x-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d-u*p*x;break;case"YXZ":this._x=u*h*d+c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d+u*p*x;break;case"ZXY":this._x=u*h*d-c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d-u*p*x;break;case"ZYX":this._x=u*h*d-c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d+u*p*x;break;case"YZX":this._x=u*h*d+c*p*x,this._y=c*p*d+u*h*x,this._z=c*h*x-u*p*d,this._w=c*h*d-u*p*x;break;case"XZY":this._x=u*h*d-c*p*x,this._y=c*p*d-u*h*x,this._z=c*h*x+u*p*d,this._w=c*h*d+u*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(He(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},oa=new P,Cl=new tn,Tn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(t.matrixWorld),this.expandByPoint(rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Cs.copy(i.boundingBox)),Cs.applyMatrix4(t.matrixWorld),this.union(Cs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,rn),rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Ps.subVectors(this.max,es),pi.subVectors(t.a,es),mi.subVectors(t.b,es),gi.subVectors(t.c,es),Ln.subVectors(mi,pi),In.subVectors(gi,mi),Kn.subVectors(pi,gi);let e=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!la(e,pi,mi,gi,Ps)||(e=[1,0,0,0,1,0,0,0,1],!la(e,pi,mi,gi,Ps))?!1:(Ls.crossVectors(Ln,In),e=[Ls.x,Ls.y,Ls.z],la(e,pi,mi,gi,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},gn=[new P,new P,new P,new P,new P,new P,new P,new P],rn=new P,Cs=new Tn,pi=new P,mi=new P,gi=new P,Ln=new P,In=new P,Kn=new P,es=new P,Ps=new P,Ls=new P,Qn=new P;function la(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qn.fromArray(n,r);let a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=i.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Nu=new Tn,ns=new P,ca=new P,Gn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Nu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ns,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(ca)),this.expandByPoint(ns.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},xn=new P,ha=new P,Is=new P,Dn=new P,ua=new P,Ds=new P,da=new P,ur=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ha.copy(t).add(e).multiplyScalar(.5),Is.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(ha);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Is),a=Dn.dot(this.direction),l=-Dn.dot(Is),c=Dn.lengthSq(),h=Math.abs(1-o*o),d,u,p,x;if(h>0)if(d=o*l-a,u=o*a-l,x=r*h,d>=0)if(u>=-x)if(u<=x){let g=1/h;d*=g,u*=g,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=x?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ha).addScaledVector(Is,u),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);let i=xn.dot(this.direction),s=xn.dot(xn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,i,s,r){ua.subVectors(e,t),Ds.subVectors(i,t),da.crossVectors(ua,Ds);let o=this.direction.dot(da),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);let l=a*this.direction.dot(Ds.crossVectors(Dn,Ds));if(l<0)return null;let c=a*this.direction.dot(ua.cross(Dn));if(c<0||l+c>o)return null;let h=-a*Dn.dot(da);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,u,p,x,g,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,u,p,x,g,m)}set(t,e,i,s,r,o,a,l,c,h,d,u,p,x,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=x,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),o=1/xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*d,x=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+x*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,x=c*h,g=c*d;e[0]=u+g*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-x,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,x=c*h,g=c*d;e[0]=u-g*a,e[4]=-o*d,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*d,x=a*h,g=a*d;e[0]=l*h,e[4]=x*c-p,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,x=a*l,g=a*c;e[0]=l*h,e[4]=g-u*d,e[8]=x*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+x,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*l,p=o*c,x=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=o*h,e[9]=p*d-x,e[2]=x*d-p,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ou,t,Fu)}lookAt(t,e,i){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Un.crossVectors(i,Xe),Un.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Un.crossVectors(i,Xe)),Un.normalize(),Us.crossVectors(Xe,Un),s[0]=Un.x,s[4]=Us.x,s[8]=Xe.x,s[1]=Un.y,s[5]=Us.y,s[9]=Xe.y,s[2]=Un.z,s[6]=Us.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],x=i[2],g=i[6],m=i[10],f=i[14],S=i[3],_=i[7],T=i[11],C=i[15],E=s[0],A=s[4],N=s[8],y=s[12],w=s[1],k=s[5],G=s[9],tt=s[13],I=s[2],z=s[6],X=s[10],$=s[14],Y=s[3],Z=s[7],K=s[11],st=s[15];return r[0]=o*E+a*w+l*I+c*Y,r[4]=o*A+a*k+l*z+c*Z,r[8]=o*N+a*G+l*X+c*K,r[12]=o*y+a*tt+l*$+c*st,r[1]=h*E+d*w+u*I+p*Y,r[5]=h*A+d*k+u*z+p*Z,r[9]=h*N+d*G+u*X+p*K,r[13]=h*y+d*tt+u*$+p*st,r[2]=x*E+g*w+m*I+f*Y,r[6]=x*A+g*k+m*z+f*Z,r[10]=x*N+g*G+m*X+f*K,r[14]=x*y+g*tt+m*$+f*st,r[3]=S*E+_*w+T*I+C*Y,r[7]=S*A+_*k+T*z+C*Z,r[11]=S*N+_*G+T*X+C*K,r[15]=S*y+_*tt+T*$+C*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],x=t[3],g=t[7],m=t[11],f=t[15];return x*(+r*l*d-s*c*d-r*a*u+i*c*u+s*a*p-i*l*p)+g*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-e*l*d+e*a*u+s*o*d-i*o*u+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],x=t[12],g=t[13],m=t[14],f=t[15],S=d*m*c-g*u*c+g*l*p-a*m*p-d*l*f+a*u*f,_=x*u*c-h*m*c-x*l*p+o*m*p+h*l*f-o*u*f,T=h*g*c-x*d*c+x*a*p-o*g*p-h*a*f+o*d*f,C=x*d*l-h*g*l-x*a*u+o*g*u+h*a*m-o*d*m,E=e*S+i*_+s*T+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return t[0]=S*A,t[1]=(g*u*r-d*m*r-g*s*p+i*m*p+d*s*f-i*u*f)*A,t[2]=(a*m*r-g*l*r+g*s*c-i*m*c-a*s*f+i*l*f)*A,t[3]=(d*l*r-a*u*r-d*s*c+i*u*c+a*s*p-i*l*p)*A,t[4]=_*A,t[5]=(h*m*r-x*u*r+x*s*p-e*m*p-h*s*f+e*u*f)*A,t[6]=(x*l*r-o*m*r-x*s*c+e*m*c+o*s*f-e*l*f)*A,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*A,t[8]=T*A,t[9]=(x*d*r-h*g*r-x*i*p+e*g*p+h*i*f-e*d*f)*A,t[10]=(o*g*r-x*a*r+x*i*c-e*g*c-o*i*f+e*a*f)*A,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*p-e*a*p)*A,t[12]=C*A,t[13]=(h*g*s-x*d*s+x*i*u-e*g*u-h*i*m+e*d*m)*A,t[14]=(x*a*s-o*g*s-x*i*l+e*g*l+o*i*m-e*a*m)*A,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*u+e*a*u)*A,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,x=r*d,g=o*h,m=o*d,f=a*d,S=l*c,_=l*h,T=l*d,C=i.x,E=i.y,A=i.z;return s[0]=(1-(g+f))*C,s[1]=(p+T)*C,s[2]=(x-_)*C,s[3]=0,s[4]=(p-T)*E,s[5]=(1-(u+f))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(x+_)*A,s[9]=(m-S)*A,s[10]=(1-(u+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);let c=1/r,h=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Sn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),p,x;if(a===Sn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===rr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Sn){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),u=(e+t)*c,p=(i+s)*h,x,g;if(a===Sn)x=(o+r)*d,g=-2*d;else if(a===rr)x=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},xi=new P,an=new ne,Ou=new P(0,0,0),Fu=new P(1,1,1),Un=new P,Us=new P,Xe=new P,Pl=new ne,Ll=new tn,zi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-He(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var dr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zu=0,Il=new P,_i=new tn,_n=new ne,Ns=new P,is=new P,ku=new P,Bu=new tn,Dl=new P(1,0,0),Ul=new P(0,1,0),Nl=new P(0,0,1),Hu={type:"added"},Vu={type:"removed"},Ce=class n extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,e=new zi,i=new tn,s=new P(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Yt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(Dl,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Il.copy(t).applyQuaternion(this.quaternion),this.position.add(Il.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dl,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ns.copy(t):Ns.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(is,Ns,this.up):_n.lookAt(Ns,is,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(_n),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_n.multiply(t.parent.matrixWorld)),t.applyMatrix4(_n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,ku),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Bu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ce.DEFAULT_UP=new P(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new P,vn=new P,fa=new P,yn=new P,vi=new P,yi=new P,Ol=new P,pa=new P,ma=new P,ga=new P,Os=!1,Ci=class n{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),on.subVectors(t,e),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){on.subVectors(s,e),vn.subVectors(i,e),fa.subVectors(t,e);let o=on.dot(on),a=on.dot(vn),l=on.dot(fa),c=vn.dot(vn),h=vn.dot(fa),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,p=(c*l-a*h)*u,x=(o*h-a*l)*u;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(t,e,i,s,r,o,a,l){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l)}static isFrontFacing(t,e,i,s){return on.subVectors(i,e),vn.subVectors(t,e),on.cross(vn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),on.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;vi.subVectors(s,i),yi.subVectors(r,i),pa.subVectors(t,i);let l=vi.dot(pa),c=yi.dot(pa);if(l<=0&&c<=0)return e.copy(i);ma.subVectors(t,s);let h=vi.dot(ma),d=yi.dot(ma);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(vi,o);ga.subVectors(t,r);let p=vi.dot(ga),x=yi.dot(ga);if(x>=0&&p<=x)return e.copy(r);let g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(yi,a);let m=h*x-p*d;if(m<=0&&d-h>=0&&p-x>=0)return Ol.subVectors(r,s),a=(d-h)/(d-h+(p-x)),e.copy(s).addScaledVector(Ol,a);let f=1/(m+g+u);return o=g*f,a=u*f,e.copy(i).addScaledVector(vi,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function xa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=Pu(t,1),e=He(e,0,1),i=He(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=xa(o,r,t+1/3),this.g=xa(o,r,t),this.b=xa(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let i=Pc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}copyLinearToSRGB(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return te.fromWorkingColorSpace(Ue.copy(this),t),Math.round(He(Ue.r*255,0,255))*65536+Math.round(He(Ue.g*255,0,255))*256+Math.round(He(Ue.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ue.copy(this),e);let i=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=xe){te.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,i=Ue.g,s=Ue.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Fs);let i=ia(Nn.h,Fs.h,e),s=ia(Nn.s,Fs.s,e),r=ia(Nn.l,Fs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Pt;Pt.NAMES=Pc;var Gu=0,Wn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Ii,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ca,this.blendDst=Pa,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(i.blending=this.blending),this.side!==Hn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ca&&(i.blendSrc=this.blendSrc),this.blendDst!==Pa&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(i.stencilFail=this.stencilFail),this.stencilZFail!==di&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fr=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new P,zs=new Jt,Ye=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ts(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),i=Be(i,this.array),s=Be(s,this.array),r=Be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sl&&(t.usage=this.usage),t}};var pr=class extends Ye{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var mr=class extends Ye{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var be=class extends Ye{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Wu=0,$e=new ne,_a=new Ce,Mi=new P,qe=new Tn,ss=new Tn,Re=new P,Ge=class n extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cc(t)?mr:pr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,i){return $e.makeTranslation(t,e,i),this.applyMatrix4($e),this}scale(t,e,i){return $e.makeScale(t,e,i),this.applyMatrix4($e),this}lookAt(t){return _a.lookAt(t),_a.updateMatrix(),this.applyMatrix4(_a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(qe.min,ss.min),qe.expandByPoint(Re),Re.addVectors(qe.max,ss.max),qe.expandByPoint(Re)):(qe.expandByPoint(ss.min),qe.expandByPoint(ss.max))}qe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(t,c),Re.add(Mi)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<a;w++)c[w]=new P,h[w]=new P;let d=new P,u=new P,p=new P,x=new Jt,g=new Jt,m=new Jt,f=new P,S=new P;function _(w,k,G){d.fromArray(s,w*3),u.fromArray(s,k*3),p.fromArray(s,G*3),x.fromArray(o,w*2),g.fromArray(o,k*2),m.fromArray(o,G*2),u.sub(d),p.sub(d),g.sub(x),m.sub(x);let tt=1/(g.x*m.y-m.x*g.y);isFinite(tt)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(tt),S.copy(p).multiplyScalar(g.x).addScaledVector(u,-m.x).multiplyScalar(tt),c[w].add(f),c[k].add(f),c[G].add(f),h[w].add(S),h[k].add(S),h[G].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let w=0,k=T.length;w<k;++w){let G=T[w],tt=G.start,I=G.count;for(let z=tt,X=tt+I;z<X;z+=3)_(i[z+0],i[z+1],i[z+2])}let C=new P,E=new P,A=new P,N=new P;function y(w){A.fromArray(r,w*3),N.copy(A);let k=c[w];C.copy(k),C.sub(A.multiplyScalar(A.dot(k))).normalize(),E.crossVectors(N,k);let tt=E.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=tt}for(let w=0,k=T.length;w<k;++w){let G=T[w],tt=G.start,I=G.count;for(let z=tt,X=tt+I;z<X;z+=3)y(i[z+0]),y(i[z+1]),y(i[z+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(t)for(let u=0,p=t.count;u<p;u+=3){let x=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)u[x++]=c[p++]}return new Ye(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fl=new ne,jn=new ur,ks=new Gn,zl=new P,bi=new P,Si=new P,wi=new P,va=new P,Bs=new P,Hs=new Jt,Vs=new Jt,Gs=new Jt,kl=new P,Bl=new P,Hl=new P,Ws=new P,Xs=new P,$t=class extends Ce{constructor(t=new Ge,e=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(va.fromBufferAttribute(d,t),o?Bs.addScaledVector(va,h):Bs.addScaledVector(va.sub(e),h))}e.add(Bs)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(ks.containsPoint(jn.origin)===!1&&(jn.intersectSphere(ks,zl)===null||jn.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Fl.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let m=u[x],f=o[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,C=_;T<C;T+=3){let E=a.getX(T),A=a.getX(T+1),N=a.getX(T+2);s=qs(this,f,t,i,c,h,d,E,A,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let S=a.getX(m),_=a.getX(m+1),T=a.getX(m+2);s=qs(this,o,t,i,c,h,d,S,_,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=u.length;x<g;x++){let m=u[x],f=o[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,C=_;T<C;T+=3){let E=T,A=T+1,N=T+2;s=qs(this,f,t,i,c,h,d,E,A,N),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,f=g;m<f;m+=3){let S=m,_=m+1,T=m+2;s=qs(this,o,t,i,c,h,d,S,_,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Xu(n,t,e,i,s,r,o,a){let l;if(t.side===Ve?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Hn,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Xs);return c<e.near||c>e.far?null:{distance:c,point:Xs.clone(),object:n}}function qs(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,bi),n.getVertexPosition(l,Si),n.getVertexPosition(c,wi);let h=Xu(n,t,e,i,bi,Si,wi,Ws);if(h){s&&(Hs.fromBufferAttribute(s,a),Vs.fromBufferAttribute(s,l),Gs.fromBufferAttribute(s,c),h.uv=Ci.getInterpolation(Ws,bi,Si,wi,Hs,Vs,Gs,new Jt)),r&&(Hs.fromBufferAttribute(r,a),Vs.fromBufferAttribute(r,l),Gs.fromBufferAttribute(r,c),h.uv1=Ci.getInterpolation(Ws,bi,Si,wi,Hs,Vs,Gs,new Jt),h.uv2=h.uv1),o&&(kl.fromBufferAttribute(o,a),Bl.fromBufferAttribute(o,l),Hl.fromBufferAttribute(o,c),h.normal=Ci.getInterpolation(Ws,bi,Si,wi,kl,Bl,Hl,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};Ci.getNormal(bi,Si,wi,d.normal),h.face=d}return h}var _e=class n extends Ge{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,p=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(d,2));function x(g,m,f,S,_,T,C,E,A,N,y){let w=T/A,k=C/N,G=T/2,tt=C/2,I=E/2,z=A+1,X=N+1,$=0,Y=0,Z=new P;for(let K=0;K<X;K++){let st=K*k-tt;for(let pt=0;pt<z;pt++){let W=pt*w-G;Z[g]=W*S,Z[m]=st*_,Z[f]=I,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[m]=0,Z[f]=E>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(pt/A),d.push(1-K/N),$+=1}}for(let K=0;K<N;K++)for(let st=0;st<A;st++){let pt=u+st+z*K,W=u+st+z*(K+1),Q=u+(st+1)+z*(K+1),ft=u+(st+1)+z*K;l.push(pt,W,ft),l.push(W,Q,ft),Y+=6}a.addGroup(p,Y,y),p+=Y,u+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ki(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Fe(n){let t={};for(let e=0;e<n.length;e++){let i=ki(n[e]);for(let s in i)t[s]=i[s]}return t}function qu(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lc(n){return n.getRenderTarget()===null?n.outputColorSpace:te.workingColorSpace}var Yu={clone:ki,merge:Fe},Zu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,An=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zu,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=qu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},gr=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Sn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Le=class extends gr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(na*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ei=-90,Ti=1,za=class extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Le(Ei,Ti,t,e);s.layers=this.layers,this.add(s);let r=new Le(Ei,Ti,t,e);r.layers=this.layers,this.add(r);let o=new Le(Ei,Ti,t,e);o.layers=this.layers,this.add(o);let a=new Le(Ei,Ti,t,e);a.layers=this.layers,this.add(a);let l=new Le(Ei,Ti,t,e);l.layers=this.layers,this.add(l);let c=new Le(Ei,Ti,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Sn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},xr=class extends je{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ka=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ai?xe:Qe),this.texture=new xr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new _e(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:ki(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:zn});r.uniforms.tEquirect.value=e;let o=new $t(s,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=Ke),new za(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},ya=new P,$u=new P,Ku=new Yt,bn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ya.subVectors(i,e).cross($u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ya),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Ku.getNormalMatrix(t),s=this.coplanarPoint(ya).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ti=new Gn,Ys=new P,fs=class{constructor(t=new bn,e=new bn,i=new bn,s=new bn,r=new bn,o=new bn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Sn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],p=s[8],x=s[9],g=s[10],m=s[11],f=s[12],S=s[13],_=s[14],T=s[15];if(i[0].setComponents(l-r,u-c,m-p,T-f).normalize(),i[1].setComponents(l+r,u+c,m+p,T+f).normalize(),i[2].setComponents(l+o,u+h,m+x,T+S).normalize(),i[3].setComponents(l-o,u-h,m-x,T-S).normalize(),i[4].setComponents(l-a,u-d,m-g,T-_).normalize(),e===Sn)i[5].setComponents(l+a,u+d,m+g,T+_).normalize();else if(e===rr)i[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(t){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Ys.x=s.normal.x>0?t.max.x:t.min.x,Ys.y=s.normal.y>0?t.max.y:t.min.y,Ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ic(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Qu(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,u=c.usage,p=d.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,d){let u=h.array,p=h._updateRange,x=h.updateRanges;if(n.bindBuffer(d,c),p.count===-1&&x.length===0&&n.bufferSubData(d,0,u),x.length!==0){for(let g=0,m=x.length;g<m;g++){let f=x[g];e?n.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):n.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):n.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let u=i.get(c);(!u||u.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Xn=class n extends Ge{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,p=[],x=[],g=[],m=[];for(let f=0;f<h;f++){let S=f*u-o;for(let _=0;_<c;_++){let T=_*d-r;x.push(T,-S,0),g.push(0,0,1),m.push(_/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let _=S+c*f,T=S+c*(f+1),C=S+1+c*(f+1),E=S+1+c*f;p.push(_,T,E),p.push(T,C,E)}this.setIndex(p),this.setAttribute("position",new be(x,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,td=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ed=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,id=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ad=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ud=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Yd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ef=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,df=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Af=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,If=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:ju,alphahash_pars_fragment:td,alphamap_fragment:ed,alphamap_pars_fragment:nd,alphatest_fragment:id,alphatest_pars_fragment:sd,aomap_fragment:rd,aomap_pars_fragment:ad,batching_pars_vertex:od,batching_vertex:ld,begin_vertex:cd,beginnormal_vertex:hd,bsdfs:ud,iridescence_fragment:dd,bumpmap_pars_fragment:fd,clipping_planes_fragment:pd,clipping_planes_pars_fragment:md,clipping_planes_pars_vertex:gd,clipping_planes_vertex:xd,color_fragment:_d,color_pars_fragment:vd,color_pars_vertex:yd,color_vertex:Md,common:bd,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:wd,displacementmap_pars_vertex:Ed,displacementmap_vertex:Td,emissivemap_fragment:Ad,emissivemap_pars_fragment:Rd,colorspace_fragment:Cd,colorspace_pars_fragment:Pd,envmap_fragment:Ld,envmap_common_pars_fragment:Id,envmap_pars_fragment:Dd,envmap_pars_vertex:Ud,envmap_physical_pars_fragment:qd,envmap_vertex:Nd,fog_vertex:Od,fog_pars_vertex:Fd,fog_fragment:zd,fog_pars_fragment:kd,gradientmap_pars_fragment:Bd,lightmap_fragment:Hd,lightmap_pars_fragment:Vd,lights_lambert_fragment:Gd,lights_lambert_pars_fragment:Wd,lights_pars_begin:Xd,lights_toon_fragment:Yd,lights_toon_pars_fragment:Zd,lights_phong_fragment:Jd,lights_phong_pars_fragment:$d,lights_physical_fragment:Kd,lights_physical_pars_fragment:Qd,lights_fragment_begin:jd,lights_fragment_maps:tf,lights_fragment_end:ef,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:sf,logdepthbuf_pars_vertex:rf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:hf,metalnessmap_fragment:uf,metalnessmap_pars_fragment:df,morphcolor_vertex:ff,morphnormal_vertex:pf,morphtarget_pars_vertex:mf,morphtarget_vertex:gf,normal_fragment_begin:xf,normal_fragment_maps:_f,normal_pars_fragment:vf,normal_pars_vertex:yf,normal_vertex:Mf,normalmap_pars_fragment:bf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:wf,clearcoat_pars_fragment:Ef,iridescence_pars_fragment:Tf,opaque_fragment:Af,packing:Rf,premultiplied_alpha_fragment:Cf,project_vertex:Pf,dithering_fragment:Lf,dithering_pars_fragment:If,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Nf,shadowmap_pars_vertex:Of,shadowmap_vertex:Ff,shadowmask_pars_fragment:zf,skinbase_vertex:kf,skinning_pars_vertex:Bf,skinning_vertex:Hf,skinnormal_vertex:Vf,specularmap_fragment:Gf,specularmap_pars_fragment:Wf,tonemapping_fragment:Xf,tonemapping_pars_fragment:qf,transmission_fragment:Yf,transmission_pars_fragment:Zf,uv_pars_fragment:Jf,uv_pars_vertex:$f,uv_vertex:Kf,worldpos_vertex:Qf,background_vert:jf,background_frag:tp,backgroundCube_vert:ep,backgroundCube_frag:np,cube_vert:ip,cube_frag:sp,depth_vert:rp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:hp,linedashed_vert:up,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:xp,meshmatcap_frag:_p,meshnormal_vert:vp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:bp,meshphysical_vert:Sp,meshphysical_frag:wp,meshtoon_vert:Ep,meshtoon_frag:Tp,points_vert:Ap,points_frag:Rp,shadow_vert:Cp,shadow_frag:Pp,sprite_vert:Lp,sprite_frag:Ip},ot={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new Jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},pn={basic:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Fe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Fe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Fe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Fe([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Fe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Fe([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Fe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Fe([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Fe([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Fe([ot.lights,ot.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};pn.physical={uniforms:Fe([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Zs={r:0,b:0,g:0};function Dp(n,t,e,i,s,r,o){let a=new Pt(0),l=r===!0?0:1,c,h,d=null,u=0,p=null;function x(m,f){let S=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),S=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Lr)?(h===void 0&&(h=new $t(new _e(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ki(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=te.getTransfer(_.colorSpace)!==ae,(d!==_||u!==_.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new $t(new Xn(2,2),new An({name:"BackgroundMaterial",uniforms:ki(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=te.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,f){m.getRGB(Zs,Lc(n)),i.buffers.color.setClear(Zs.r,Zs.g,Zs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:x}}function Up(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(I,z,X,$,Y){let Z=!1;if(o){let K=g($,X,z);c!==K&&(c=K,p(c.object)),Z=f(I,$,X,Y),Z&&S(I,$,X,Y)}else{let K=z.wireframe===!0;(c.geometry!==$.id||c.program!==X.id||c.wireframe!==K)&&(c.geometry=$.id,c.program=X.id,c.wireframe=K,Z=!0)}Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,N(I,z,X,$),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function u(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,z,X){let $=X.wireframe===!0,Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let Z=Y[z.id];Z===void 0&&(Z={},Y[z.id]=Z);let K=Z[$];return K===void 0&&(K=m(u()),Z[$]=K),K}function m(I){let z=[],X=[],$=[];for(let Y=0;Y<s;Y++)z[Y]=0,X[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:$,object:I,attributes:{},index:null}}function f(I,z,X,$){let Y=c.attributes,Z=z.attributes,K=0,st=X.getAttributes();for(let pt in st)if(st[pt].location>=0){let Q=Y[pt],ft=Z[pt];if(ft===void 0&&(pt==="instanceMatrix"&&I.instanceMatrix&&(ft=I.instanceMatrix),pt==="instanceColor"&&I.instanceColor&&(ft=I.instanceColor)),Q===void 0||Q.attribute!==ft||ft&&Q.data!==ft.data)return!0;K++}return c.attributesNum!==K||c.index!==$}function S(I,z,X,$){let Y={},Z=z.attributes,K=0,st=X.getAttributes();for(let pt in st)if(st[pt].location>=0){let Q=Z[pt];Q===void 0&&(pt==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),pt==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let ft={};ft.attribute=Q,Q&&Q.data&&(ft.data=Q.data),Y[pt]=ft,K++}c.attributes=Y,c.attributesNum=K,c.index=$}function _(){let I=c.newAttributes;for(let z=0,X=I.length;z<X;z++)I[z]=0}function T(I){C(I,0)}function C(I,z){let X=c.newAttributes,$=c.enabledAttributes,Y=c.attributeDivisors;X[I]=1,$[I]===0&&(n.enableVertexAttribArray(I),$[I]=1),Y[I]!==z&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),Y[I]=z)}function E(){let I=c.newAttributes,z=c.enabledAttributes;for(let X=0,$=z.length;X<$;X++)z[X]!==I[X]&&(n.disableVertexAttribArray(X),z[X]=0)}function A(I,z,X,$,Y,Z,K){K===!0?n.vertexAttribIPointer(I,z,X,Y,Z):n.vertexAttribPointer(I,z,X,$,Y,Z)}function N(I,z,X,$){if(i.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let Y=$.attributes,Z=X.getAttributes(),K=z.defaultAttributeValues;for(let st in Z){let pt=Z[st];if(pt.location>=0){let W=Y[st];if(W===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(W=I.instanceColor)),W!==void 0){let Q=W.normalized,ft=W.itemSize,vt=e.get(W);if(vt===void 0)continue;let _t=vt.buffer,Dt=vt.type,Nt=vt.bytesPerElement,it=i.isWebGL2===!0&&(Dt===n.INT||Dt===n.UNSIGNED_INT||W.gpuType===_c);if(W.isInterleavedBufferAttribute){let yt=W.data,D=yt.stride,F=W.offset;if(yt.isInstancedInterleavedBuffer){for(let J=0;J<pt.locationSize;J++)C(pt.location+J,yt.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let J=0;J<pt.locationSize;J++)T(pt.location+J);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let J=0;J<pt.locationSize;J++)A(pt.location+J,ft/pt.locationSize,Dt,Q,D*Nt,(F+ft/pt.locationSize*J)*Nt,it)}else{if(W.isInstancedBufferAttribute){for(let yt=0;yt<pt.locationSize;yt++)C(pt.location+yt,W.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let yt=0;yt<pt.locationSize;yt++)T(pt.location+yt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let yt=0;yt<pt.locationSize;yt++)A(pt.location+yt,ft/pt.locationSize,Dt,Q,ft*Nt,ft/pt.locationSize*yt*Nt,it)}}else if(K!==void 0){let Q=K[st];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(pt.location,Q);break;case 3:n.vertexAttrib3fv(pt.location,Q);break;case 4:n.vertexAttrib4fv(pt.location,Q);break;default:n.vertexAttrib1fv(pt.location,Q)}}}}E()}function y(){G();for(let I in a){let z=a[I];for(let X in z){let $=z[X];for(let Y in $)x($[Y].object),delete $[Y];delete z[X]}delete a[I]}}function w(I){if(a[I.id]===void 0)return;let z=a[I.id];for(let X in z){let $=z[X];for(let Y in $)x($[Y].object),delete $[Y];delete z[X]}delete a[I.id]}function k(I){for(let z in a){let X=a[z];if(X[I.id]===void 0)continue;let $=X[I.id];for(let Y in $)x($[Y].object),delete $[Y];delete X[I.id]}}function G(){tt(),h=!0,c!==l&&(c=l,p(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:tt,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:T,disableUnusedAttributes:E}}function Np(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,u){if(u===0)return;let p,x;if(s)p=n,x="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](r,h,d,u),e.update(d,r,u)}function c(h,d,u){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u;x++)this.render(h[x],d[x]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=d[g];e.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Op(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=u>0,T=o||t.has("OES_texture_float"),C=_&&T,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:E}}function Fp(n){let t=this,e=null,i=0,s=!1,r=!1,o=new bn,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){let x=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,_=S*4,T=f.clippingState||null;l.value=T,T=h(x,u,_,p);for(let C=0;C!==_;++C)T[C]=e[C];f.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,x){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,x!==!0||m===null){let f=p+g*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,T=p;_!==g;++_,T+=4)o.copy(d[_]).applyMatrix4(S,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function zp(n){let t=new WeakMap;function e(o,a){return a===La?o.mapping=Ni:a===Ia&&(o.mapping=Oi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===La||a===Ia)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ka(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var _r=class extends gr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pi=4,Vl=[.125,.215,.35,.446,.526,.582],ii=20,Ma=new _r,Gl=new Pt,ba=null,Sa=0,wa=0,ei=(1+Math.sqrt(5))/2,Ai=1/ei,Wl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ei,Ai),new P(0,ei,-Ai),new P(Ai,0,ei),new P(-Ai,0,ei),new P(ei,Ai,0),new P(-ei,Ai,0)],vr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ba=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ba,Sa,wa),t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Oi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ba=this._renderer.getRenderTarget(),Sa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:ds,format:hn,colorSpace:wn,depthBuffer:!1},s=Xl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(r)),this._blurMaterial=Bp(r,t,e)}return s}_compileMaterial(t){let e=new $t(this._lodPlanes[0],t);this._renderer.compile(e,Ma)}_sceneToCubeUV(t,e,i,s){let a=new Le(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Gl),h.toneMapping=kn,h.autoClear=!1;let p=new fr({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),x=new $t(new _e,p),g=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Gl),g=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;Js(s,S*_,f>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ni||t.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ql());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Js(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ma)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wl[(s-1)%Wl.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new $t(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ii-1),g=r/x,m=isFinite(r)?1+Math.floor(h*g):ii;m>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);let f=[],S=0;for(let A=0;A<ii;++A){let N=A/g,y=Math.exp(-N*N/2);f.push(y),A===0?S+=y:A<m&&(S+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:_}=this;u.dTheta.value=x,u.mipInt.value=_-i;let T=this._sizeLods[s],C=3*T*(s>_-Pi?s-_+Pi:0),E=4*(this._cubeSize-T);Js(e,C,E,3*T,2*T),l.setRenderTarget(e),l.render(d,Ma)}};function kp(n){let t=[],e=[],i=[],s=n,r=n-Pi+1+Vl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Pi?l=Vl[o-n+Pi-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,x=6,g=3,m=2,f=1,S=new Float32Array(g*x*p),_=new Float32Array(m*x*p),T=new Float32Array(f*x*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,N=E>2?0:-1,y=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];S.set(y,g*x*E),_.set(u,m*x*E);let w=[E,E,E,E,E,E];T.set(w,f*x*E)}let C=new Ge;C.setAttribute("position",new Ye(S,g)),C.setAttribute("uv",new Ye(_,m)),C.setAttribute("faceIndex",new Ye(T,f)),t.push(C),s>Pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Xl(n,t,e){let i=new En(n,t,e);return i.texture.mapping=Lr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Bp(n,t,e){let i=new Float32Array(ii),s=new P(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function ql(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Yl(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===La||l===Ia,h=l===Ni||l===Oi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new vr(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new vr(n));let u=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,u),a.addEventListener("dispose",r),u.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Vp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Gp(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);for(let x in u.morphAttributes){let g=u.morphAttributes[x];for(let m=0,f=g.length;m<f;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let x in u)t.update(u[x],n.ARRAY_BUFFER);let p=d.morphAttributes;for(let x in p){let g=p[x];for(let m=0,f=g.length;m<f;m++)t.update(g[m],n.ARRAY_BUFFER)}}function c(d){let u=[],p=d.index,x=d.attributes.position,g=0;if(p!==null){let S=p.array;g=p.version;for(let _=0,T=S.length;_<T;_+=3){let C=S[_+0],E=S[_+1],A=S[_+2];u.push(C,E,E,A,A,C)}}else if(x!==void 0){let S=x.array;g=x.version;for(let _=0,T=S.length/3-1;_<T;_+=3){let C=_+0,E=_+1,A=_+2;u.push(C,E,E,A,A,C)}}else return;let m=new(Cc(u)?mr:pr)(u,1);m.version=g;let f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){let u=r.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Wp(n,t,e,i){let s=i.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,x){n.drawElements(r,x,a,p*l),e.update(x,r,1)}function d(p,x,g){if(g===0)return;let m,f;if(s)m=n,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,x,a,p*l,g),e.update(x,r,g)}function u(p,x,g){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<g;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(r,x,0,a,p,0,g);let f=0;for(let S=0;S<g;S++)f+=x[S];e.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Xp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function qp(n,t){return n[0]-t[0]}function Yp(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Zp(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new he,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let u=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0,g=r.get(h);if(g===void 0||g.count!==x){let I=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();let S=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],N=0;S===!0&&(N=1),_===!0&&(N=2),T===!0&&(N=3);let y=h.attributes.position.count*N,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let k=new Float32Array(y*w*4*x),G=new hr(k,y,w,x);G.type=Fn,G.needsUpdate=!0;let tt=N*4;for(let z=0;z<x;z++){let X=C[z],$=E[z],Y=A[z],Z=y*w*4*z;for(let K=0;K<X.count;K++){let st=K*tt;S===!0&&(o.fromBufferAttribute(X,K),k[Z+st+0]=o.x,k[Z+st+1]=o.y,k[Z+st+2]=o.z,k[Z+st+3]=0),_===!0&&(o.fromBufferAttribute($,K),k[Z+st+4]=o.x,k[Z+st+5]=o.y,k[Z+st+6]=o.z,k[Z+st+7]=0),T===!0&&(o.fromBufferAttribute(Y,K),k[Z+st+8]=o.x,k[Z+st+9]=o.y,k[Z+st+10]=o.z,k[Z+st+11]=Y.itemSize===4?o.w:1)}}g={count:x,texture:G,size:new Jt(y,w)},r.set(h,g),h.addEventListener("dispose",I)}let m=0;for(let S=0;S<u.length;S++)m+=u[S];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",f),d.getUniforms().setValue(n,"morphTargetInfluences",u),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let p=u===void 0?0:u.length,x=i[h.id];if(x===void 0||x.length!==p){x=[];for(let _=0;_<p;_++)x[_]=[_,0];i[h.id]=x}for(let _=0;_<p;_++){let T=x[_];T[0]=_,T[1]=u[_]}x.sort(Yp);for(let _=0;_<8;_++)_<p&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(qp);let g=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let T=a[_],C=T[0],E=T[1];C!==Number.MAX_SAFE_INTEGER&&E?(g&&h.getAttribute("morphTarget"+_)!==g[C]&&h.setAttribute("morphTarget"+_,g[C]),m&&h.getAttribute("morphNormal"+_)!==m[C]&&h.setAttribute("morphNormal"+_,m[C]),s[_]=E,f+=E):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let S=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Jp(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var yr=class extends je{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:ri,h!==ri&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ri&&(i=On),i===void 0&&h===Fi&&(i=si),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Dc=new je,Uc=new yr(1,1);Uc.compareFunction=Ac;var Nc=new hr,Oc=new Fa,Fc=new xr,Zl=[],Jl=[],$l=new Float32Array(16),Kl=new Float32Array(9),Ql=new Float32Array(4);function Wi(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zl[s];if(r===void 0&&(r=new Float32Array(s),Zl[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dr(n,t){let e=Jl[t];e===void 0&&(e=new Int32Array(t),Jl[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $p(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Kp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function Qp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function jp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function tm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Ql.set(i),n.uniformMatrix2fv(this.addr,!1,Ql),we(e,i)}}function em(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;Kl.set(i),n.uniformMatrix3fv(this.addr,!1,Kl),we(e,i)}}function nm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Se(e,i))return;$l.set(i),n.uniformMatrix4fv(this.addr,!1,$l),we(e,i)}}function im(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function sm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function om(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function cm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function um(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Uc:Dc;e.setTexture2D(t||r,s)}function dm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Oc,s)}function fm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Fc,s)}function pm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Nc,s)}function mm(n){switch(n){case 5126:return $p;case 35664:return Kp;case 35665:return Qp;case 35666:return jp;case 35674:return tm;case 35675:return em;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return sm;case 35668:case 35672:return rm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(n,t){n.uniform1fv(this.addr,t)}function xm(n,t){let e=Wi(t,this.size,2);n.uniform2fv(this.addr,e)}function _m(n,t){let e=Wi(t,this.size,3);n.uniform3fv(this.addr,e)}function vm(n,t){let e=Wi(t,this.size,4);n.uniform4fv(this.addr,e)}function ym(n,t){let e=Wi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Mm(n,t){let e=Wi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bm(n,t){let e=Wi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Sm(n,t){n.uniform1iv(this.addr,t)}function wm(n,t){n.uniform2iv(this.addr,t)}function Em(n,t){n.uniform3iv(this.addr,t)}function Tm(n,t){n.uniform4iv(this.addr,t)}function Am(n,t){n.uniform1uiv(this.addr,t)}function Rm(n,t){n.uniform2uiv(this.addr,t)}function Cm(n,t){n.uniform3uiv(this.addr,t)}function Pm(n,t){n.uniform4uiv(this.addr,t)}function Lm(n,t,e){let i=this.cache,s=t.length,r=Dr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Dc,r[o])}function Im(n,t,e){let i=this.cache,s=t.length,r=Dr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Oc,r[o])}function Dm(n,t,e){let i=this.cache,s=t.length,r=Dr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fc,r[o])}function Um(n,t,e){let i=this.cache,s=t.length,r=Dr(e,s);Se(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nc,r[o])}function Nm(n){switch(n){case 5126:return gm;case 35664:return xm;case 35665:return _m;case 35666:return vm;case 35674:return ym;case 35675:return Mm;case 35676:return bm;case 5124:case 35670:return Sm;case 35667:case 35671:return wm;case 35668:case 35672:return Em;case 35669:case 35673:return Tm;case 5125:return Am;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Um}}var Ba=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mm(e.type)}},Ha=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Nm(e.type)}},Va=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ea=/(\w+)(\])?(\[|\.)?/g;function jl(n,t){n.seq.push(t),n.map[t.id]=t}function Om(n,t,e){let i=n.name,s=i.length;for(Ea.lastIndex=0;;){let r=Ea.exec(i),o=Ea.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jl(e,c===void 0?new Ba(a,n,t):new Ha(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new Va(a),jl(e,d)),e=d}}}var Ui=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Om(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function tc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Fm=37297,zm=0;function km(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Bm(n){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(n),i;switch(t===e?i="":t===sr&&e===ir?i="LinearDisplayP3ToLinearSRGB":t===ir&&e===sr&&(i="LinearSRGBToLinearDisplayP3"),n){case wn:case Ir:return[i,"LinearTransferOETF"];case xe:case go:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ec(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+km(n.getShaderSource(t),o)}else return s}function Hm(n,t){let e=Bm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Vm(n,t){let e;switch(t){case ru:e="Linear";break;case au:e="Reinhard";break;case ou:e="OptimizedCineon";break;case lu:e="ACESFilmic";break;case hu:e="AgX";break;case cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Gm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function Wm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Li).join(`
`)}function Xm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qm(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Li(n){return n!==""}function nc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ic(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(n){return n.replace(Ym,Jm)}var Zm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jm(n,t){let e=Bt[t];if(e===void 0){let i=Zm.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ga(e)}var $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(n){return n.replace($m,Km)}function Km(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qm(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pr?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function jm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ni:case Oi:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Oi:t="ENVMAP_MODE_REFRACTION";break}return t}function e0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case po:t="ENVMAP_BLENDING_MULTIPLY";break;case iu:t="ENVMAP_BLENDING_MIX";break;case su:t="ENVMAP_BLENDING_ADD";break}return t}function n0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function i0(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Qm(e),c=jm(e),h=t0(e),d=e0(e),u=n0(e),p=e.isWebGL2?"":Gm(e),x=Wm(e),g=Xm(r),m=s.createProgram(),f,S,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Li).join(`
`),f.length>0&&(f+=`
`),S=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Li).join(`
`),S.length>0&&(S+=`
`)):(f=[rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),S=[p,rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==kn?Vm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Hm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Li).join(`
`)),o=Ga(o),o=nc(o,e),o=ic(o,e),a=Ga(a),a=nc(a,e),a=ic(a,e),o=sc(o),a=sc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let T=_+f+o,C=_+S+a,E=tc(s,s.VERTEX_SHADER,T),A=tc(s,s.FRAGMENT_SHADER,C);s.attachShader(m,E),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function N(G){if(n.debug.checkShaderErrors){let tt=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(E).trim(),z=s.getShaderInfoLog(A).trim(),X=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,E,A);else{let Y=ec(s,E,"vertex"),Z=ec(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+Y+`
`+Z)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(I===""||z==="")&&($=!1);$&&(G.diagnostics={runnable:X,programLog:tt,vertexShader:{log:I,prefix:f},fragmentShader:{log:z,prefix:S}})}s.deleteShader(E),s.deleteShader(A),y=new Ui(s,m),w=qm(s,m)}let y;this.getUniforms=function(){return y===void 0&&N(this),y};let w;this.getAttributes=function(){return w===void 0&&N(this),w};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(m,Fm)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=A,this}var s0=0,Wa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xa(t),e.set(t,i)),i}},Xa=class{constructor(t){this.id=s0++,this.code=t,this.usedTimes=0}};function r0(n,t,e,i,s,r,o){let a=new dr,l=new Wa,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,u=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function m(y,w,k,G,tt){let I=G.fog,z=tt.geometry,X=y.isMeshStandardMaterial?G.environment:null,$=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),Y=$&&$.mapping===Lr?$.image.height:null,Z=x[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=K!==void 0?K.length:0,pt=0;z.morphAttributes.position!==void 0&&(pt=1),z.morphAttributes.normal!==void 0&&(pt=2),z.morphAttributes.color!==void 0&&(pt=3);let W,Q,ft,vt;if(Z){let Ne=pn[Z];W=Ne.vertexShader,Q=Ne.fragmentShader}else W=y.vertexShader,Q=y.fragmentShader,l.update(y),ft=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);let _t=n.getRenderTarget(),Dt=tt.isInstancedMesh===!0,Nt=tt.isBatchedMesh===!0,it=!!y.map,yt=!!y.matcap,D=!!$,F=!!y.aoMap,J=!!y.lightMap,ct=!!y.bumpMap,lt=!!y.normalMap,Wt=!!y.displacementMap,St=!!y.emissiveMap,M=!!y.metalnessMap,v=!!y.roughnessMap,O=y.anisotropy>0,nt=y.clearcoat>0,et=y.iridescence>0,rt=y.sheen>0,Mt=y.transmission>0,dt=O&&!!y.anisotropyMap,gt=nt&&!!y.clearcoatMap,Rt=nt&&!!y.clearcoatNormalMap,Vt=nt&&!!y.clearcoatRoughnessMap,j=et&&!!y.iridescenceMap,jt=et&&!!y.iridescenceThicknessMap,Zt=rt&&!!y.sheenColorMap,Ut=rt&&!!y.sheenRoughnessMap,Et=!!y.specularMap,xt=!!y.specularColorMap,kt=!!y.specularIntensityMap,Qt=Mt&&!!y.transmissionMap,fe=Mt&&!!y.thicknessMap,Xt=!!y.gradientMap,at=!!y.alphaMap,L=y.alphaTest>0,ht=!!y.alphaHash,ut=!!y.extensions,Ct=!!z.attributes.uv1,Tt=!!z.attributes.uv2,ie=!!z.attributes.uv3,se=kn;return y.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(se=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:Q,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Nt,instancing:Dt,instancingColor:Dt&&tt.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:wn,map:it,matcap:yt,envMap:D,envMapMode:D&&$.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:J,bumpMap:ct,normalMap:lt,displacementMap:u&&Wt,emissiveMap:St,normalMapObjectSpace:lt&&y.normalMapType===bu,normalMapTangentSpace:lt&&y.normalMapType===Tc,metalnessMap:M,roughnessMap:v,anisotropy:O,anisotropyMap:dt,clearcoat:nt,clearcoatMap:gt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Vt,iridescence:et,iridescenceMap:j,iridescenceThicknessMap:jt,sheen:rt,sheenColorMap:Zt,sheenRoughnessMap:Ut,specularMap:Et,specularColorMap:xt,specularIntensityMap:kt,transmission:Mt,transmissionMap:Qt,thicknessMap:fe,gradientMap:Xt,opaque:y.transparent===!1&&y.blending===Ii,alphaMap:at,alphaTest:L,alphaHash:ht,combine:y.combine,mapUv:it&&g(y.map.channel),aoMapUv:F&&g(y.aoMap.channel),lightMapUv:J&&g(y.lightMap.channel),bumpMapUv:ct&&g(y.bumpMap.channel),normalMapUv:lt&&g(y.normalMap.channel),displacementMapUv:Wt&&g(y.displacementMap.channel),emissiveMapUv:St&&g(y.emissiveMap.channel),metalnessMapUv:M&&g(y.metalnessMap.channel),roughnessMapUv:v&&g(y.roughnessMap.channel),anisotropyMapUv:dt&&g(y.anisotropyMap.channel),clearcoatMapUv:gt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Vt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Zt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&g(y.sheenRoughnessMap.channel),specularMapUv:Et&&g(y.specularMap.channel),specularColorMapUv:xt&&g(y.specularColorMap.channel),specularIntensityMapUv:kt&&g(y.specularIntensityMap.channel),transmissionMapUv:Qt&&g(y.transmissionMap.channel),thicknessMapUv:fe&&g(y.thicknessMap.channel),alphaMapUv:at&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(lt||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Tt,vertexUv3s:ie,pointsUvs:tt.isPoints===!0&&!!z.attributes.uv&&(it||at),fog:!!I,useFog:y.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:tt.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:pt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,useLegacyLights:n._useLegacyLights,decodeVideoTexture:it&&y.map.isVideoTexture===!0&&te.getTransfer(y.map.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ln,flipSided:y.side===Ve,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ut&&y.extensions.derivatives===!0,extensionFragDepth:ut&&y.extensions.fragDepth===!0,extensionDrawBuffers:ut&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let k in y.defines)w.push(k),w.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(S(w,y),_(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function S(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function T(y){let w=x[y.type],k;if(w){let G=pn[w];k=Yu.clone(G.uniforms)}else k=y.uniforms;return k}function C(y,w){let k;for(let G=0,tt=c.length;G<tt;G++){let I=c[G];if(I.cacheKey===w){k=I,++k.usedTimes;break}}return k===void 0&&(k=new i0(n,w,y,r),c.push(k)),k}function E(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),y.destroy()}}function A(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:T,acquireProgram:C,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:N}}function a0(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function o0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ac(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function oc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,u,p,x,g,m){let f=n[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:x,renderOrder:d.renderOrder,z:g,group:m},n[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=g,f.group=m),t++,f}function a(d,u,p,x,g,m){let f=o(d,u,p,x,g,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(d,u,p,x,g,m){let f=o(d,u,p,x,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||o0),i.length>1&&i.sort(u||ac),s.length>1&&s.sort(u||ac)}function h(){for(let d=t,u=n.length;d<u;d++){let p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function l0(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new oc,n.set(i,[o])):s>=r.length?(o=new oc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function c0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Pt};break;case"SpotLight":e={position:new P,direction:new P,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function h0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var u0=0;function d0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function f0(n,t){let e=new c0,i=h0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new ne,a=new ne;function l(h,d){let u=0,p=0,x=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let g=0,m=0,f=0,S=0,_=0,T=0,C=0,E=0,A=0,N=0,y=0;h.sort(d0);let w=d===!0?Math.PI:1;for(let G=0,tt=h.length;G<tt;G++){let I=h[G],z=I.color,X=I.intensity,$=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=z.r*X*w,p+=z.g*X*w,x+=z.b*X*w;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(I.sh.coefficients[Z],X);y++}else if(I.isDirectionalLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let K=I.shadow,st=i.get(I);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,s.directionalShadow[g]=st,s.directionalShadowMap[g]=Y,s.directionalShadowMatrix[g]=I.shadow.matrix,T++}s.directional[g]=Z,g++}else if(I.isSpotLight){let Z=e.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(z).multiplyScalar(X*w),Z.distance=$,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,s.spot[f]=Z;let K=I.shadow;if(I.map&&(s.spotLightMap[A]=I.map,A++,K.updateMatrices(I),I.castShadow&&N++),s.spotLightMatrix[f]=K.matrix,I.castShadow){let st=i.get(I);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,s.spotShadow[f]=st,s.spotShadowMap[f]=Y,E++}f++}else if(I.isRectAreaLight){let Z=e.get(I);Z.color.copy(z).multiplyScalar(X),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=Z,S++}else if(I.isPointLight){let Z=e.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity*w),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let K=I.shadow,st=i.get(I);st.shadowBias=K.bias,st.shadowNormalBias=K.normalBias,st.shadowRadius=K.radius,st.shadowMapSize=K.mapSize,st.shadowCameraNear=K.camera.near,st.shadowCameraFar=K.camera.far,s.pointShadow[m]=st,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=I.shadow.matrix,C++}s.point[m]=Z,m++}else if(I.isHemisphereLight){let Z=e.get(I);Z.skyColor.copy(I.color).multiplyScalar(X*w),Z.groundColor.copy(I.groundColor).multiplyScalar(X*w),s.hemi[_]=Z,_++}}S>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_FLOAT_1,s.rectAreaLTC2=ot.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ot.LTC_HALF_1,s.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=u,s.ambient[1]=p,s.ambient[2]=x;let k=s.hash;(k.directionalLength!==g||k.pointLength!==m||k.spotLength!==f||k.rectAreaLength!==S||k.hemiLength!==_||k.numDirectionalShadows!==T||k.numPointShadows!==C||k.numSpotShadows!==E||k.numSpotMaps!==A||k.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=f,s.rectArea.length=S,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=E+A-N,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=y,k.directionalLength=g,k.pointLength=m,k.spotLength=f,k.rectAreaLength=S,k.hemiLength=_,k.numDirectionalShadows=T,k.numPointShadows=C,k.numSpotShadows=E,k.numSpotMaps=A,k.numLightProbes=y,s.version=u0++)}function c(h,d){let u=0,p=0,x=0,g=0,m=0,f=d.matrixWorldInverse;for(let S=0,_=h.length;S<_;S++){let T=h[S];if(T.isDirectionalLight){let C=s.directional[u];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),u++}else if(T.isSpotLight){let C=s.spot[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),x++}else if(T.isRectAreaLight){let C=s.rectArea[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(T.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){let C=s.point[p];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),p++}else if(T.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function lc(n,t){let e=new f0(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){e.setup(i,d)}function c(d){e.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function p0(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),l;return a===void 0?(l=new lc(n,t),e.set(r,[l])):o>=a.length?(l=new lc(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var qa=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function x0(n,t,e){let i=new fs,s=new Jt,r=new Jt,o=new he,a=new qa({depthPacking:Mu}),l=new Ya,c={},h=e.maxTextureSize,d={[Hn]:Ve,[Ve]:Hn,[ln]:ln},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Jt},radius:{value:4}},vertexShader:m0,fragmentShader:g0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ge;x.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new $t(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let f=this.type;this.render=function(E,A,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let y=n.getRenderTarget(),w=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),G=n.state;G.setBlending(zn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let tt=f!==Mn&&this.type===Mn,I=f===Mn&&this.type!==Mn;for(let z=0,X=E.length;z<X;z++){let $=E[z],Y=$.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let Z=Y.getFrameExtents();if(s.multiply(Z),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,Y.mapSize.y=r.y)),Y.map===null||tt===!0||I===!0){let st=this.type!==Mn?{minFilter:Me,magFilter:Me}:{};Y.map!==null&&Y.map.dispose(),Y.map=new En(s.x,s.y,st),Y.map.texture.name=$.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();let K=Y.getViewportCount();for(let st=0;st<K;st++){let pt=Y.getViewport(st);o.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),G.viewport(o),Y.updateMatrices($,st),i=Y.getFrustum(),T(A,N,Y.camera,$,this.type)}Y.isPointLightShadow!==!0&&this.type===Mn&&S(Y,N),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(y,w,k)};function S(E,A){let N=t.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new En(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,N,u,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,N,p,g,null)}function _(E,A,N,y){let w=null,k=N.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(k!==void 0)w=k;else if(w=N.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let G=w.uuid,tt=A.uuid,I=c[G];I===void 0&&(I={},c[G]=I);let z=I[tt];z===void 0&&(z=w.clone(),I[tt]=z,A.addEventListener("dispose",C)),w=z}if(w.visible=A.visible,w.wireframe=A.wireframe,y===Mn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,N.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let G=n.properties.get(w);G.light=N}return w}function T(E,A,N,y,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Mn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,E.matrixWorld);let tt=t.update(E),I=E.material;if(Array.isArray(I)){let z=tt.groups;for(let X=0,$=z.length;X<$;X++){let Y=z[X],Z=I[Y.materialIndex];if(Z&&Z.visible){let K=_(E,Z,y,w);E.onBeforeShadow(n,E,A,N,tt,K,Y),n.renderBufferDirect(N,null,tt,K,E,Y),E.onAfterShadow(n,E,A,N,tt,K,Y)}}}else if(I.visible){let z=_(E,I,y,w);E.onBeforeShadow(n,E,A,N,tt,z,null),n.renderBufferDirect(N,null,tt,z,E,null),E.onAfterShadow(n,E,A,N,tt,z,null)}}let G=E.children;for(let tt=0,I=G.length;tt<I;tt++)T(G[tt],A,N,y,w)}function C(E){E.target.removeEventListener("dispose",C);for(let N in c){let y=c[N],w=E.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function _0(n,t,e){let i=e.isWebGL2;function s(){let L=!1,ht=new he,ut=null,Ct=new he(0,0,0,0);return{setMask:function(Tt){ut!==Tt&&!L&&(n.colorMask(Tt,Tt,Tt,Tt),ut=Tt)},setLocked:function(Tt){L=Tt},setClear:function(Tt,ie,se,Te,Ne){Ne===!0&&(Tt*=Te,ie*=Te,se*=Te),ht.set(Tt,ie,se,Te),Ct.equals(ht)===!1&&(n.clearColor(Tt,ie,se,Te),Ct.copy(ht))},reset:function(){L=!1,ut=null,Ct.set(-1,0,0,0)}}}function r(){let L=!1,ht=null,ut=null,Ct=null;return{setTest:function(Tt){Tt?Nt(n.DEPTH_TEST):it(n.DEPTH_TEST)},setMask:function(Tt){ht!==Tt&&!L&&(n.depthMask(Tt),ht=Tt)},setFunc:function(Tt){if(ut!==Tt){switch(Tt){case $h:n.depthFunc(n.NEVER);break;case Kh:n.depthFunc(n.ALWAYS);break;case Qh:n.depthFunc(n.LESS);break;case js:n.depthFunc(n.LEQUAL);break;case jh:n.depthFunc(n.EQUAL);break;case tu:n.depthFunc(n.GEQUAL);break;case eu:n.depthFunc(n.GREATER);break;case nu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=Tt}},setLocked:function(Tt){L=Tt},setClear:function(Tt){Ct!==Tt&&(n.clearDepth(Tt),Ct=Tt)},reset:function(){L=!1,ht=null,ut=null,Ct=null}}}function o(){let L=!1,ht=null,ut=null,Ct=null,Tt=null,ie=null,se=null,Te=null,Ne=null;return{setTest:function(re){L||(re?Nt(n.STENCIL_TEST):it(n.STENCIL_TEST))},setMask:function(re){ht!==re&&!L&&(n.stencilMask(re),ht=re)},setFunc:function(re,Oe,fn){(ut!==re||Ct!==Oe||Tt!==fn)&&(n.stencilFunc(re,Oe,fn),ut=re,Ct=Oe,Tt=fn)},setOp:function(re,Oe,fn){(ie!==re||se!==Oe||Te!==fn)&&(n.stencilOp(re,Oe,fn),ie=re,se=Oe,Te=fn)},setLocked:function(re){L=re},setClear:function(re){Ne!==re&&(n.clearStencil(re),Ne=re)},reset:function(){L=!1,ht=null,ut=null,Ct=null,Tt=null,ie=null,se=null,Te=null,Ne=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,u={},p={},x=new WeakMap,g=[],m=null,f=!1,S=null,_=null,T=null,C=null,E=null,A=null,N=null,y=new Pt(0,0,0),w=0,k=!1,G=null,tt=null,I=null,z=null,X=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,Z=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=Z>=1):K.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=Z>=2);let st=null,pt={},W=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),ft=new he().fromArray(W),vt=new he().fromArray(Q);function _t(L,ht,ut,Ct){let Tt=new Uint8Array(4),ie=n.createTexture();n.bindTexture(L,ie),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let se=0;se<ut;se++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,Ct,0,n.RGBA,n.UNSIGNED_BYTE,Tt):n.texImage2D(ht+se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Tt);return ie}let Dt={};Dt[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Dt[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Nt(n.DEPTH_TEST),l.setFunc(js),St(!1),M(Ho),Nt(n.CULL_FACE),lt(zn);function Nt(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function it(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function yt(L,ht){return p[L]!==ht?(n.bindFramebuffer(L,ht),p[L]=ht,i&&(L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ht),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function D(L,ht){let ut=g,Ct=!1;if(L)if(ut=x.get(ht),ut===void 0&&(ut=[],x.set(ht,ut)),L.isWebGLMultipleRenderTargets){let Tt=L.texture;if(ut.length!==Tt.length||ut[0]!==n.COLOR_ATTACHMENT0){for(let ie=0,se=Tt.length;ie<se;ie++)ut[ie]=n.COLOR_ATTACHMENT0+ie;ut.length=Tt.length,Ct=!0}}else ut[0]!==n.COLOR_ATTACHMENT0&&(ut[0]=n.COLOR_ATTACHMENT0,Ct=!0);else ut[0]!==n.BACK&&(ut[0]=n.BACK,Ct=!0);Ct&&(e.isWebGL2?n.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function F(L){return m!==L?(n.useProgram(L),m=L,!0):!1}let J={[ni]:n.FUNC_ADD,[Nh]:n.FUNC_SUBTRACT,[Oh]:n.FUNC_REVERSE_SUBTRACT};if(i)J[Xo]=n.MIN,J[qo]=n.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(J[Xo]=L.MIN_EXT,J[qo]=L.MAX_EXT)}let ct={[Fh]:n.ZERO,[zh]:n.ONE,[kh]:n.SRC_COLOR,[Ca]:n.SRC_ALPHA,[Xh]:n.SRC_ALPHA_SATURATE,[Gh]:n.DST_COLOR,[Hh]:n.DST_ALPHA,[Bh]:n.ONE_MINUS_SRC_COLOR,[Pa]:n.ONE_MINUS_SRC_ALPHA,[Wh]:n.ONE_MINUS_DST_COLOR,[Vh]:n.ONE_MINUS_DST_ALPHA,[qh]:n.CONSTANT_COLOR,[Yh]:n.ONE_MINUS_CONSTANT_COLOR,[Zh]:n.CONSTANT_ALPHA,[Jh]:n.ONE_MINUS_CONSTANT_ALPHA};function lt(L,ht,ut,Ct,Tt,ie,se,Te,Ne,re){if(L===zn){f===!0&&(it(n.BLEND),f=!1);return}if(f===!1&&(Nt(n.BLEND),f=!0),L!==Uh){if(L!==S||re!==k){if((_!==ni||E!==ni)&&(n.blendEquation(n.FUNC_ADD),_=ni,E=ni),re)switch(L){case Ii:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vo:n.blendFunc(n.ONE,n.ONE);break;case Go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ii:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,C=null,A=null,N=null,y.set(0,0,0),w=0,S=L,k=re}return}Tt=Tt||ht,ie=ie||ut,se=se||Ct,(ht!==_||Tt!==E)&&(n.blendEquationSeparate(J[ht],J[Tt]),_=ht,E=Tt),(ut!==T||Ct!==C||ie!==A||se!==N)&&(n.blendFuncSeparate(ct[ut],ct[Ct],ct[ie],ct[se]),T=ut,C=Ct,A=ie,N=se),(Te.equals(y)===!1||Ne!==w)&&(n.blendColor(Te.r,Te.g,Te.b,Ne),y.copy(Te),w=Ne),S=L,k=!1}function Wt(L,ht){L.side===ln?it(n.CULL_FACE):Nt(n.CULL_FACE);let ut=L.side===Ve;ht&&(ut=!ut),St(ut),L.blending===Ii&&L.transparent===!1?lt(zn):lt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);let Ct=L.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Nt(n.SAMPLE_ALPHA_TO_COVERAGE):it(n.SAMPLE_ALPHA_TO_COVERAGE)}function St(L){G!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),G=L)}function M(L){L!==Lh?(Nt(n.CULL_FACE),L!==tt&&(L===Ho?n.cullFace(n.BACK):L===Ih?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):it(n.CULL_FACE),tt=L}function v(L){L!==I&&(Y&&n.lineWidth(L),I=L)}function O(L,ht,ut){L?(Nt(n.POLYGON_OFFSET_FILL),(z!==ht||X!==ut)&&(n.polygonOffset(ht,ut),z=ht,X=ut)):it(n.POLYGON_OFFSET_FILL)}function nt(L){L?Nt(n.SCISSOR_TEST):it(n.SCISSOR_TEST)}function et(L){L===void 0&&(L=n.TEXTURE0+$-1),st!==L&&(n.activeTexture(L),st=L)}function rt(L,ht,ut){ut===void 0&&(st===null?ut=n.TEXTURE0+$-1:ut=st);let Ct=pt[ut];Ct===void 0&&(Ct={type:void 0,texture:void 0},pt[ut]=Ct),(Ct.type!==L||Ct.texture!==ht)&&(st!==ut&&(n.activeTexture(ut),st=ut),n.bindTexture(L,ht||Dt[L]),Ct.type=L,Ct.texture=ht)}function Mt(){let L=pt[st];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function dt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Vt(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function kt(L){ft.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ft.copy(L))}function Qt(L){vt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),vt.copy(L))}function fe(L,ht){let ut=d.get(ht);ut===void 0&&(ut=new WeakMap,d.set(ht,ut));let Ct=ut.get(L);Ct===void 0&&(Ct=n.getUniformBlockIndex(ht,L.name),ut.set(L,Ct))}function Xt(L,ht){let Ct=d.get(ht).get(L);h.get(ht)!==Ct&&(n.uniformBlockBinding(ht,Ct,L.__bindingPointIndex),h.set(ht,Ct))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},st=null,pt={},p={},x=new WeakMap,g=[],m=null,f=!1,S=null,_=null,T=null,C=null,E=null,A=null,N=null,y=new Pt(0,0,0),w=0,k=!1,G=null,tt=null,I=null,z=null,X=null,ft.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Nt,disable:it,bindFramebuffer:yt,drawBuffers:D,useProgram:F,setBlending:lt,setMaterial:Wt,setFlipSided:St,setCullFace:M,setLineWidth:v,setPolygonOffset:O,setScissorTest:nt,activeTexture:et,bindTexture:rt,unbindTexture:Mt,compressedTexImage2D:dt,compressedTexImage3D:gt,texImage2D:Et,texImage3D:xt,updateUBOMapping:fe,uniformBlockBinding:Xt,texStorage2D:Zt,texStorage3D:Ut,texSubImage2D:Rt,texSubImage3D:Vt,compressedTexSubImage2D:j,compressedTexSubImage3D:jt,scissor:kt,viewport:Qt,reset:at}}function v0(n,t,e,i,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,v){return p?new OffscreenCanvas(M,v):or("canvas")}function g(M,v,O,nt){let et=1;if((M.width>nt||M.height>nt)&&(et=nt/Math.max(M.width,M.height)),et<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let rt=v?Na:Math.floor,Mt=rt(et*M.width),dt=rt(et*M.height);d===void 0&&(d=x(Mt,dt));let gt=O?x(Mt,dt):d;return gt.width=Mt,gt.height=dt,gt.getContext("2d").drawImage(M,0,0,Mt,dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Mt+"x"+dt+")."),gt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function m(M){return El(M.width)&&El(M.height)}function f(M){return a?!1:M.wrapS!==cn||M.wrapT!==cn||M.minFilter!==Me&&M.minFilter!==Ke}function S(M,v){return M.generateMipmaps&&v&&M.minFilter!==Me&&M.minFilter!==Ke}function _(M){n.generateMipmap(M)}function T(M,v,O,nt,et=!1){if(a===!1)return v;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let rt=v;if(v===n.RED&&(O===n.FLOAT&&(rt=n.R32F),O===n.HALF_FLOAT&&(rt=n.R16F),O===n.UNSIGNED_BYTE&&(rt=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(rt=n.R8UI),O===n.UNSIGNED_SHORT&&(rt=n.R16UI),O===n.UNSIGNED_INT&&(rt=n.R32UI),O===n.BYTE&&(rt=n.R8I),O===n.SHORT&&(rt=n.R16I),O===n.INT&&(rt=n.R32I)),v===n.RG&&(O===n.FLOAT&&(rt=n.RG32F),O===n.HALF_FLOAT&&(rt=n.RG16F),O===n.UNSIGNED_BYTE&&(rt=n.RG8)),v===n.RGBA){let Mt=et?nr:te.getTransfer(nt);O===n.FLOAT&&(rt=n.RGBA32F),O===n.HALF_FLOAT&&(rt=n.RGBA16F),O===n.UNSIGNED_BYTE&&(rt=Mt===ae?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(rt=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(rt=n.RGB5_A1)}return(rt===n.R16F||rt===n.R32F||rt===n.RG16F||rt===n.RG32F||rt===n.RGBA16F||rt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function C(M,v,O){return S(M,O)===!0||M.isFramebufferTexture&&M.minFilter!==Me&&M.minFilter!==Ke?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function E(M){return M===Me||M===Yo||M===Jr?n.NEAREST:n.LINEAR}function A(M){let v=M.target;v.removeEventListener("dispose",A),y(v),v.isVideoTexture&&h.delete(v)}function N(M){let v=M.target;v.removeEventListener("dispose",N),k(v)}function y(M){let v=i.get(M);if(v.__webglInit===void 0)return;let O=M.source,nt=u.get(O);if(nt){let et=nt[v.__cacheKey];et.usedTimes--,et.usedTimes===0&&w(M),Object.keys(nt).length===0&&u.delete(O)}i.remove(M)}function w(M){let v=i.get(M);n.deleteTexture(v.__webglTexture);let O=M.source,nt=u.get(O);delete nt[v.__cacheKey],o.memory.textures--}function k(M){let v=M.texture,O=i.get(M),nt=i.get(v);if(nt.__webglTexture!==void 0&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(O.__webglFramebuffer[et]))for(let rt=0;rt<O.__webglFramebuffer[et].length;rt++)n.deleteFramebuffer(O.__webglFramebuffer[et][rt]);else n.deleteFramebuffer(O.__webglFramebuffer[et]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[et])}else{if(Array.isArray(O.__webglFramebuffer))for(let et=0;et<O.__webglFramebuffer.length;et++)n.deleteFramebuffer(O.__webglFramebuffer[et]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let et=0;et<O.__webglColorRenderbuffer.length;et++)O.__webglColorRenderbuffer[et]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[et]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let et=0,rt=v.length;et<rt;et++){let Mt=i.get(v[et]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(v[et])}i.remove(v),i.remove(M)}let G=0;function tt(){G=0}function I(){let M=G;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),G+=1,M}function z(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function X(M,v){let O=i.get(M);if(M.isVideoTexture&&Wt(M),M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){let nt=M.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(O,M,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function $(M,v){let O=i.get(M);if(M.version>0&&O.__version!==M.version){ft(O,M,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function Y(M,v){let O=i.get(M);if(M.version>0&&O.__version!==M.version){ft(O,M,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function Z(M,v){let O=i.get(M);if(M.version>0&&O.__version!==M.version){vt(O,M,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}let K={[hs]:n.REPEAT,[cn]:n.CLAMP_TO_EDGE,[Da]:n.MIRRORED_REPEAT},st={[Me]:n.NEAREST,[Yo]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Ke]:n.LINEAR,[uu]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},pt={[Su]:n.NEVER,[Cu]:n.ALWAYS,[wu]:n.LESS,[Ac]:n.LEQUAL,[Eu]:n.EQUAL,[Ru]:n.GEQUAL,[Tu]:n.GREATER,[Au]:n.NOTEQUAL};function W(M,v,O){if(O?(n.texParameteri(M,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,K[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,st[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,st[v.minFilter])):(n.texParameteri(M,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(M,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==cn||v.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,n.TEXTURE_MAG_FILTER,E(v.magFilter)),n.texParameteri(M,n.TEXTURE_MIN_FILTER,E(v.minFilter)),v.minFilter!==Me&&v.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,pt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let nt=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===Me||v.minFilter!==Jr&&v.minFilter!==us||v.type===Fn&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===ds&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(M,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Q(M,v){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",A));let nt=v.source,et=u.get(nt);et===void 0&&(et={},u.set(nt,et));let rt=z(v);if(rt!==M.__cacheKey){et[rt]===void 0&&(et[rt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),et[rt].usedTimes++;let Mt=et[M.__cacheKey];Mt!==void 0&&(et[M.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(v)),M.__cacheKey=rt,M.__webglTexture=et[rt].texture}return O}function ft(M,v,O){let nt=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(nt=n.TEXTURE_3D);let et=Q(M,v),rt=v.source;e.bindTexture(nt,M.__webglTexture,n.TEXTURE0+O);let Mt=i.get(rt);if(rt.version!==Mt.__version||et===!0){e.activeTexture(n.TEXTURE0+O);let dt=te.getPrimaries(te.workingColorSpace),gt=v.colorSpace===Qe?null:te.getPrimaries(v.colorSpace),Rt=v.colorSpace===Qe||dt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Vt=f(v)&&m(v.image)===!1,j=g(v.image,Vt,!1,s.maxTextureSize);j=St(v,j);let jt=m(j)||a,Zt=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type),Et=T(v.internalFormat,Zt,Ut,v.colorSpace,v.isVideoTexture);W(nt,v,jt);let xt,kt=v.mipmaps,Qt=a&&v.isVideoTexture!==!0&&Et!==wc,fe=Mt.__version===void 0||et===!0,Xt=C(v,j,jt);if(v.isDepthTexture)Et=n.DEPTH_COMPONENT,a?v.type===Fn?Et=n.DEPTH_COMPONENT32F:v.type===On?Et=n.DEPTH_COMPONENT24:v.type===si?Et=n.DEPTH24_STENCIL8:Et=n.DEPTH_COMPONENT16:v.type===Fn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ri&&Et===n.DEPTH_COMPONENT&&v.type!==mo&&v.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=On,Ut=r.convert(v.type)),v.format===Fi&&Et===n.DEPTH_COMPONENT&&(Et=n.DEPTH_STENCIL,v.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=si,Ut=r.convert(v.type))),fe&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,Et,j.width,j.height):e.texImage2D(n.TEXTURE_2D,0,Et,j.width,j.height,0,Zt,Ut,null));else if(v.isDataTexture)if(kt.length>0&&jt){Qt&&fe&&e.texStorage2D(n.TEXTURE_2D,Xt,Et,kt[0].width,kt[0].height);for(let at=0,L=kt.length;at<L;at++)xt=kt[at],Qt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,xt.width,xt.height,Zt,Ut,xt.data):e.texImage2D(n.TEXTURE_2D,at,Et,xt.width,xt.height,0,Zt,Ut,xt.data);v.generateMipmaps=!1}else Qt?(fe&&e.texStorage2D(n.TEXTURE_2D,Xt,Et,j.width,j.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,j.width,j.height,Zt,Ut,j.data)):e.texImage2D(n.TEXTURE_2D,0,Et,j.width,j.height,0,Zt,Ut,j.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Qt&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,Et,kt[0].width,kt[0].height,j.depth);for(let at=0,L=kt.length;at<L;at++)xt=kt[at],v.format!==hn?Zt!==null?Qt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,j.depth,Zt,xt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,at,Et,xt.width,xt.height,j.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,at,0,0,0,xt.width,xt.height,j.depth,Zt,Ut,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,at,Et,xt.width,xt.height,j.depth,0,Zt,Ut,xt.data)}else{Qt&&fe&&e.texStorage2D(n.TEXTURE_2D,Xt,Et,kt[0].width,kt[0].height);for(let at=0,L=kt.length;at<L;at++)xt=kt[at],v.format!==hn?Zt!==null?Qt?e.compressedTexSubImage2D(n.TEXTURE_2D,at,0,0,xt.width,xt.height,Zt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,at,Et,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,xt.width,xt.height,Zt,Ut,xt.data):e.texImage2D(n.TEXTURE_2D,at,Et,xt.width,xt.height,0,Zt,Ut,xt.data)}else if(v.isDataArrayTexture)Qt?(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,Et,j.width,j.height,j.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Zt,Ut,j.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Et,j.width,j.height,j.depth,0,Zt,Ut,j.data);else if(v.isData3DTexture)Qt?(fe&&e.texStorage3D(n.TEXTURE_3D,Xt,Et,j.width,j.height,j.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Zt,Ut,j.data)):e.texImage3D(n.TEXTURE_3D,0,Et,j.width,j.height,j.depth,0,Zt,Ut,j.data);else if(v.isFramebufferTexture){if(fe)if(Qt)e.texStorage2D(n.TEXTURE_2D,Xt,Et,j.width,j.height);else{let at=j.width,L=j.height;for(let ht=0;ht<Xt;ht++)e.texImage2D(n.TEXTURE_2D,ht,Et,at,L,0,Zt,Ut,null),at>>=1,L>>=1}}else if(kt.length>0&&jt){Qt&&fe&&e.texStorage2D(n.TEXTURE_2D,Xt,Et,kt[0].width,kt[0].height);for(let at=0,L=kt.length;at<L;at++)xt=kt[at],Qt?e.texSubImage2D(n.TEXTURE_2D,at,0,0,Zt,Ut,xt):e.texImage2D(n.TEXTURE_2D,at,Et,Zt,Ut,xt);v.generateMipmaps=!1}else Qt?(fe&&e.texStorage2D(n.TEXTURE_2D,Xt,Et,j.width,j.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Zt,Ut,j)):e.texImage2D(n.TEXTURE_2D,0,Et,Zt,Ut,j);S(v,jt)&&_(nt),Mt.__version=rt.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function vt(M,v,O){if(v.image.length!==6)return;let nt=Q(M,v),et=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+O);let rt=i.get(et);if(et.version!==rt.__version||nt===!0){e.activeTexture(n.TEXTURE0+O);let Mt=te.getPrimaries(te.workingColorSpace),dt=v.colorSpace===Qe?null:te.getPrimaries(v.colorSpace),gt=v.colorSpace===Qe||Mt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Rt=v.isCompressedTexture||v.image[0].isCompressedTexture,Vt=v.image[0]&&v.image[0].isDataTexture,j=[];for(let at=0;at<6;at++)!Rt&&!Vt?j[at]=g(v.image[at],!1,!0,s.maxCubemapSize):j[at]=Vt?v.image[at].image:v.image[at],j[at]=St(v,j[at]);let jt=j[0],Zt=m(jt)||a,Ut=r.convert(v.format,v.colorSpace),Et=r.convert(v.type),xt=T(v.internalFormat,Ut,Et,v.colorSpace),kt=a&&v.isVideoTexture!==!0,Qt=rt.__version===void 0||nt===!0,fe=C(v,jt,Zt);W(n.TEXTURE_CUBE_MAP,v,Zt);let Xt;if(Rt){kt&&Qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,fe,xt,jt.width,jt.height);for(let at=0;at<6;at++){Xt=j[at].mipmaps;for(let L=0;L<Xt.length;L++){let ht=Xt[L];v.format!==hn?Ut!==null?kt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,0,0,ht.width,ht.height,Ut,ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,xt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,0,0,ht.width,ht.height,Ut,Et,ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,L,xt,ht.width,ht.height,0,Ut,Et,ht.data)}}}else{Xt=v.mipmaps,kt&&Qt&&(Xt.length>0&&fe++,e.texStorage2D(n.TEXTURE_CUBE_MAP,fe,xt,j[0].width,j[0].height));for(let at=0;at<6;at++)if(Vt){kt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,j[at].width,j[at].height,Ut,Et,j[at].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,xt,j[at].width,j[at].height,0,Ut,Et,j[at].data);for(let L=0;L<Xt.length;L++){let ut=Xt[L].image[at].image;kt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,0,0,ut.width,ut.height,Ut,Et,ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,xt,ut.width,ut.height,0,Ut,Et,ut.data)}}else{kt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ut,Et,j[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,xt,Ut,Et,j[at]);for(let L=0;L<Xt.length;L++){let ht=Xt[L];kt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,0,0,Ut,Et,ht.image[at]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+at,L+1,xt,Ut,Et,ht.image[at])}}}S(v,Zt)&&_(n.TEXTURE_CUBE_MAP),rt.__version=et.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function _t(M,v,O,nt,et,rt){let Mt=r.convert(O.format,O.colorSpace),dt=r.convert(O.type),gt=T(O.internalFormat,Mt,dt,O.colorSpace);if(!i.get(v).__hasExternalTextures){let Vt=Math.max(1,v.width>>rt),j=Math.max(1,v.height>>rt);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,rt,gt,Vt,j,v.depth,0,Mt,dt,null):e.texImage2D(et,rt,gt,Vt,j,0,Mt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,M),lt(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,et,i.get(O).__webglTexture,0,ct(v)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,et,i.get(O).__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(M,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer&&!v.stencilBuffer){let nt=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||lt(v)){let et=v.depthTexture;et&&et.isDepthTexture&&(et.type===Fn?nt=n.DEPTH_COMPONENT32F:et.type===On&&(nt=n.DEPTH_COMPONENT24));let rt=ct(v);lt(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,rt,nt,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,rt,nt,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,nt,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,M)}else if(v.depthBuffer&&v.stencilBuffer){let nt=ct(v);O&&lt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,n.DEPTH24_STENCIL8,v.width,v.height):lt(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,M)}else{let nt=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let et=0;et<nt.length;et++){let rt=nt[et],Mt=r.convert(rt.format,rt.colorSpace),dt=r.convert(rt.type),gt=T(rt.internalFormat,Mt,dt,rt.colorSpace),Rt=ct(v);O&&lt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,gt,v.width,v.height):lt(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,gt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,gt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let nt=i.get(v.depthTexture).__webglTexture,et=ct(v);if(v.depthTexture.format===ri)lt(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(v.depthTexture.format===Fi)lt(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,et):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function it(M){let v=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Nt(v.__webglFramebuffer,M)}else if(O){v.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[nt]),v.__webglDepthbuffer[nt]=n.createRenderbuffer(),Dt(v.__webglDepthbuffer[nt],M,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Dt(v.__webglDepthbuffer,M,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(M,v,O){let nt=i.get(M);v!==void 0&&_t(nt.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&it(M)}function D(M){let v=M.texture,O=i.get(M),nt=i.get(v);M.addEventListener("dispose",N),M.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=v.version,o.memory.textures++);let et=M.isWebGLCubeRenderTarget===!0,rt=M.isWebGLMultipleRenderTargets===!0,Mt=m(M)||a;if(et){O.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[dt]=[];for(let gt=0;gt<v.mipmaps.length;gt++)O.__webglFramebuffer[dt][gt]=n.createFramebuffer()}else O.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let dt=0;dt<v.mipmaps.length;dt++)O.__webglFramebuffer[dt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(rt)if(s.drawBuffers){let dt=M.texture;for(let gt=0,Rt=dt.length;gt<Rt;gt++){let Vt=i.get(dt[gt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&lt(M)===!1){let dt=rt?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let gt=0;gt<dt.length;gt++){let Rt=dt[gt];O.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[gt]);let Vt=r.convert(Rt.format,Rt.colorSpace),j=r.convert(Rt.type),jt=T(Rt.internalFormat,Vt,j,Rt.colorSpace,M.isXRRenderTarget===!0),Zt=ct(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,jt,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,O.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Dt(O.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),W(n.TEXTURE_CUBE_MAP,v,Mt);for(let dt=0;dt<6;dt++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)_t(O.__webglFramebuffer[dt][gt],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,gt);else _t(O.__webglFramebuffer[dt],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);S(v,Mt)&&_(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){let dt=M.texture;for(let gt=0,Rt=dt.length;gt<Rt;gt++){let Vt=dt[gt],j=i.get(Vt);e.bindTexture(n.TEXTURE_2D,j.__webglTexture),W(n.TEXTURE_2D,Vt,Mt),_t(O.__webglFramebuffer,M,Vt,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,0),S(Vt,Mt)&&_(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?dt=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(dt,nt.__webglTexture),W(dt,v,Mt),a&&v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)_t(O.__webglFramebuffer[gt],M,v,n.COLOR_ATTACHMENT0,dt,gt);else _t(O.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,dt,0);S(v,Mt)&&_(dt),e.unbindTexture()}M.depthBuffer&&it(M)}function F(M){let v=m(M)||a,O=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let nt=0,et=O.length;nt<et;nt++){let rt=O[nt];if(S(rt,v)){let Mt=M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,dt=i.get(rt).__webglTexture;e.bindTexture(Mt,dt),_(Mt),e.unbindTexture()}}}function J(M){if(a&&M.samples>0&&lt(M)===!1){let v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],O=M.width,nt=M.height,et=n.COLOR_BUFFER_BIT,rt=[],Mt=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=i.get(M),gt=M.isWebGLMultipleRenderTargets===!0;if(gt)for(let Rt=0;Rt<v.length;Rt++)e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let Rt=0;Rt<v.length;Rt++){rt.push(n.COLOR_ATTACHMENT0+Rt),M.depthBuffer&&rt.push(Mt);let Vt=dt.__ignoreDepthValues!==void 0?dt.__ignoreDepthValues:!1;if(Vt===!1&&(M.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),gt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Rt]),Vt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Mt])),gt){let j=i.get(v[Rt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,j,0)}n.blitFramebuffer(0,0,O,nt,0,0,O,nt,et,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let Rt=0;Rt<v.length;Rt++){e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,dt.__webglColorRenderbuffer[Rt]);let Vt=i.get(v[Rt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,dt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,Vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}}function ct(M){return Math.min(s.maxSamples,M.samples)}function lt(M){let v=i.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Wt(M){let v=o.render.frame;h.get(M)!==v&&(h.set(M,v),M.update())}function St(M,v){let O=M.colorSpace,nt=M.format,et=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Ua||O!==wn&&O!==Qe&&(te.getTransfer(O)===ae?a===!1?t.has("EXT_sRGB")===!0&&nt===hn?(M.format=Ua,M.minFilter=Ke,M.generateMipmaps=!1):v=lr.sRGBToLinear(v):(nt!==hn||et!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=I,this.resetTextureUnits=tt,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=yt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=lt}function y0(n,t,e){let i=e.isWebGL2;function s(r,o=Qe){let a,l=te.getTransfer(o);if(r===Bn)return n.UNSIGNED_BYTE;if(r===vc)return n.UNSIGNED_SHORT_4_4_4_4;if(r===yc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===du)return n.BYTE;if(r===fu)return n.SHORT;if(r===mo)return n.UNSIGNED_SHORT;if(r===_c)return n.INT;if(r===On)return n.UNSIGNED_INT;if(r===Fn)return n.FLOAT;if(r===ds)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===pu)return n.ALPHA;if(r===hn)return n.RGBA;if(r===mu)return n.LUMINANCE;if(r===gu)return n.LUMINANCE_ALPHA;if(r===ri)return n.DEPTH_COMPONENT;if(r===Fi)return n.DEPTH_STENCIL;if(r===Ua)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===xu)return n.RED;if(r===Mc)return n.RED_INTEGER;if(r===_u)return n.RG;if(r===bc)return n.RG_INTEGER;if(r===Sc)return n.RGBA_INTEGER;if(r===$r||r===Kr||r===Qr||r===jr)if(l===ae)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===$r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===$r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zo||r===Jo||r===$o||r===Ko)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Zo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$o)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qo||r===jo)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qo)return l===ae?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===jo)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===tl||r===el||r===nl||r===il||r===sl||r===rl||r===al||r===ol||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===tl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===el)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===il)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===al)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ol)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ll)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ul)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fl)return l===ae?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ta||r===pl||r===ml)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ta)return l===ae?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ml)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vu||r===gl||r===xl||r===_l)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ta)return a.COMPRESSED_RED_RGTC1_EXT;if(r===gl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===si?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Za=class extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ze=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},M0={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,i),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ze;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ja=class extends Vn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,x=null,g=e.getContextAttributes(),m=null,f=null,S=[],_=[],T=new Jt,C=null,E=new Le;E.layers.enable(1),E.viewport=new he;let A=new Le;A.layers.enable(2),A.viewport=new he;let N=[E,A],y=new Za;y.layers.enable(1),y.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=S[W];return Q===void 0&&(Q=new cs,S[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=S[W];return Q===void 0&&(Q=new cs,S[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=S[W];return Q===void 0&&(Q=new cs,S[W]=Q),Q.getHandSpace()};function G(W){let Q=_.indexOf(W.inputSource);if(Q===-1)return;let ft=S[Q];ft!==void 0&&(ft.update(W.inputSource,W.frame,c||o),ft.dispatchEvent({type:W.type,data:W.inputSource}))}function tt(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",I);for(let W=0;W<S.length;W++){let Q=_[W];Q!==null&&(_[W]=null,S[W].disconnect(Q))}w=null,k=null,t.setRenderTarget(m),p=null,u=null,d=null,s=null,f=null,pt.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new En(p.framebufferWidth,p.framebufferHeight,{format:hn,type:Bn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,ft=null,vt=null;g.depth&&(vt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?Fi:ri,ft=g.stencil?si:On);let _t={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(_t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),f=new En(u.textureWidth,u.textureHeight,{format:hn,type:Bn,depthTexture:new yr(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let Dt=t.properties.get(f);Dt.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),pt.setContext(s),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(W){for(let Q=0;Q<W.removed.length;Q++){let ft=W.removed[Q],vt=_.indexOf(ft);vt>=0&&(_[vt]=null,S[vt].disconnect(ft))}for(let Q=0;Q<W.added.length;Q++){let ft=W.added[Q],vt=_.indexOf(ft);if(vt===-1){for(let Dt=0;Dt<S.length;Dt++)if(Dt>=_.length){_.push(ft),vt=Dt;break}else if(_[Dt]===null){_[Dt]=ft,vt=Dt;break}if(vt===-1)break}let _t=S[vt];_t&&_t.connect(ft)}}let z=new P,X=new P;function $(W,Q,ft){z.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ft.matrixWorld);let vt=z.distanceTo(X),_t=Q.projectionMatrix.elements,Dt=ft.projectionMatrix.elements,Nt=_t[14]/(_t[10]-1),it=_t[14]/(_t[10]+1),yt=(_t[9]+1)/_t[5],D=(_t[9]-1)/_t[5],F=(_t[8]-1)/_t[0],J=(Dt[8]+1)/Dt[0],ct=Nt*F,lt=Nt*J,Wt=vt/(-F+J),St=Wt*-F;Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(St),W.translateZ(Wt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let M=Nt+Wt,v=it+Wt,O=ct-St,nt=lt+(vt-St),et=yt*it/v*M,rt=D*it/v*M;W.projectionMatrix.makePerspective(O,nt,et,rt,M,v),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;y.near=A.near=E.near=W.near,y.far=A.far=E.far=W.far,(w!==y.near||k!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,k=y.far);let Q=W.parent,ft=y.cameras;Y(y,Q);for(let vt=0;vt<ft.length;vt++)Y(ft[vt],Q);ft.length===2?$(y,E,A):y.projectionMatrix.copy(E.projectionMatrix),Z(W,y,Q)};function Z(W,Q,ft){ft===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(ft.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ar*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let K=null;function st(W,Q){if(h=Q.getViewerPose(c||o),x=Q,h!==null){let ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let vt=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,vt=!0);for(let _t=0;_t<ft.length;_t++){let Dt=ft[_t],Nt=null;if(p!==null)Nt=p.getViewport(Dt);else{let yt=d.getViewSubImage(u,Dt);Nt=yt.viewport,_t===0&&(t.setRenderTargetTextures(f,yt.colorTexture,u.ignoreDepthValues?void 0:yt.depthStencilTexture),t.setRenderTarget(f))}let it=N[_t];it===void 0&&(it=new Le,it.layers.enable(_t),it.viewport=new he,N[_t]=it),it.matrix.fromArray(Dt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Dt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),_t===0&&(y.matrix.copy(it.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),vt===!0&&y.cameras.push(it)}}for(let ft=0;ft<S.length;ft++){let vt=_[ft],_t=S[ft];vt!==null&&_t!==void 0&&_t.update(vt,Q,c||o)}K&&K(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),x=null}let pt=new Ic;pt.setAnimationLoop(st),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}};function b0(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Lc(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,_,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,T)):f.isMeshMatcapMaterial?(r(m,f),x(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,_):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ve&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function S0(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){let T=_.program;i.uniformBlockBinding(S,T)}function c(S,_){let T=s[S.id];T===void 0&&(x(S),T=h(S),s[S.id]=T,S.addEventListener("dispose",m));let C=_.program;i.updateUBOMapping(S,C);let E=t.render.frame;r[S.id]!==E&&(u(S),r[S.id]=E)}function h(S){let _=d();S.__bindingPointIndex=_;let T=n.createBuffer(),C=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,T),T}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let _=s[S.id],T=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,A=T.length;E<A;E++){let N=Array.isArray(T[E])?T[E]:[T[E]];for(let y=0,w=N.length;y<w;y++){let k=N[y];if(p(k,E,y,C)===!0){let G=k.__offset,tt=Array.isArray(k.value)?k.value:[k.value],I=0;for(let z=0;z<tt.length;z++){let X=tt[z],$=g(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,G+I,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,_,T,C){let E=S.value,A=_+"_"+T;if(C[A]===void 0)return typeof E=="number"||typeof E=="boolean"?C[A]=E:C[A]=E.clone(),!0;{let N=C[A];if(typeof E=="number"||typeof E=="boolean"){if(N!==E)return C[A]=E,!0}else if(N.equals(E)===!1)return N.copy(E),!0}return!1}function x(S){let _=S.uniforms,T=0,C=16;for(let A=0,N=_.length;A<N;A++){let y=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,k=y.length;w<k;w++){let G=y[w],tt=Array.isArray(G.value)?G.value:[G.value];for(let I=0,z=tt.length;I<z;I++){let X=tt[I],$=g(X),Y=T%C;Y!==0&&C-Y<$.boundary&&(T+=C-Y),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=$.storage}}}let E=T%C;return E>0&&(T+=C-E),S.__size=T,S.__cache={},this}function g(S){let _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){let _=S.target;_.removeEventListener("dispose",m);let T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var ps=class{constructor(t={}){let{canvas:e=Lu(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;i!==null?u=i.getContextAttributes().alpha:u=o;let p=new Uint32Array(4),x=new Int32Array(4),g=null,m=null,f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;let _=this,T=!1,C=0,E=0,A=null,N=-1,y=null,w=new he,k=new he,G=null,tt=new Pt(0),I=0,z=e.width,X=e.height,$=1,Y=null,Z=null,K=new he(0,0,z,X),st=new he(0,0,z,X),pt=!1,W=new fs,Q=!1,ft=!1,vt=null,_t=new ne,Dt=new Jt,Nt=new P,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function yt(){return A===null?$:1}let D=i;function F(b,U){for(let H=0;H<b.length;H++){let V=b[H],B=e.getContext(V,U);if(B!==null)return B}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fo}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ht,!1),D===null){let U=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&U.shift(),D=F(U,b),D===null)throw F(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,ct,lt,Wt,St,M,v,O,nt,et,rt,Mt,dt,gt,Rt,Vt,j,jt,Zt,Ut,Et,xt,kt,Qt;function fe(){J=new Vp(D),ct=new Op(D,J,t),J.init(ct),xt=new y0(D,J,ct),lt=new _0(D,J,ct),Wt=new Xp(D),St=new a0,M=new v0(D,J,lt,St,ct,xt,Wt),v=new zp(_),O=new Hp(_),nt=new Qu(D,ct),kt=new Up(D,J,nt,ct),et=new Gp(D,nt,Wt,kt),rt=new Jp(D,et,nt,Wt),Zt=new Zp(D,ct,M),Vt=new Fp(St),Mt=new r0(_,v,O,J,ct,kt,Vt),dt=new b0(_,St),gt=new l0,Rt=new p0(J,ct),jt=new Dp(_,v,O,lt,rt,u,l),j=new x0(_,rt,ct),Qt=new S0(D,Wt,ct,lt),Ut=new Np(D,J,Wt,ct),Et=new Wp(D,J,Wt,ct),Wt.programs=Mt.programs,_.capabilities=ct,_.extensions=J,_.properties=St,_.renderLists=gt,_.shadowMap=j,_.state=lt,_.info=Wt}fe();let Xt=new Ja(_,D);this.xr=Xt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(z,X,!1))},this.getSize=function(b){return b.set(z,X)},this.setSize=function(b,U,H=!0){if(Xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=b,X=U,e.width=Math.floor(b*$),e.height=Math.floor(U*$),H===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(z*$,X*$).floor()},this.setDrawingBufferSize=function(b,U,H){z=b,X=U,$=H,e.width=Math.floor(b*H),e.height=Math.floor(U*H),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(w)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,U,H,V){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,U,H,V),lt.viewport(w.copy(K).multiplyScalar($).floor())},this.getScissor=function(b){return b.copy(st)},this.setScissor=function(b,U,H,V){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,U,H,V),lt.scissor(k.copy(st).multiplyScalar($).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(b){lt.setScissorTest(pt=b)},this.setOpaqueSort=function(b){Y=b},this.setTransparentSort=function(b){Z=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(b=!0,U=!0,H=!0){let V=0;if(b){let B=!1;if(A!==null){let mt=A.texture.format;B=mt===Sc||mt===bc||mt===Mc}if(B){let mt=A.texture.type,bt=mt===Bn||mt===On||mt===mo||mt===si||mt===vc||mt===yc,At=jt.getClearColor(),It=jt.getClearAlpha(),Gt=At.r,Ot=At.g,Ft=At.b;bt?(p[0]=Gt,p[1]=Ot,p[2]=Ft,p[3]=It,D.clearBufferuiv(D.COLOR,0,p)):(x[0]=Gt,x[1]=Ot,x[2]=Ft,x[3]=It,D.clearBufferiv(D.COLOR,0,x))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),H&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),gt.dispose(),Rt.dispose(),St.dispose(),v.dispose(),O.dispose(),rt.dispose(),kt.dispose(),Qt.dispose(),Mt.dispose(),Xt.dispose(),Xt.removeEventListener("sessionstart",Ne),Xt.removeEventListener("sessionend",re),vt&&(vt.dispose(),vt=null),Oe.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=Wt.autoReset,U=j.enabled,H=j.autoUpdate,V=j.needsUpdate,B=j.type;fe(),Wt.autoReset=b,j.enabled=U,j.autoUpdate=H,j.needsUpdate=V,j.type=B}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ut(b){let U=b.target;U.removeEventListener("dispose",ut),Ct(U)}function Ct(b){Tt(b),St.remove(b)}function Tt(b){let U=St.get(b).programs;U!==void 0&&(U.forEach(function(H){Mt.releaseProgram(H)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,H,V,B,mt){U===null&&(U=it);let bt=B.isMesh&&B.matrixWorld.determinant()<0,At=Ah(b,U,H,V,B);lt.setMaterial(V,bt);let It=H.index,Gt=1;if(V.wireframe===!0){if(It=et.getWireframeAttribute(H),It===void 0)return;Gt=2}let Ot=H.drawRange,Ft=H.attributes.position,ge=Ot.start*Gt,We=(Ot.start+Ot.count)*Gt;mt!==null&&(ge=Math.max(ge,mt.start*Gt),We=Math.min(We,(mt.start+mt.count)*Gt)),It!==null?(ge=Math.max(ge,0),We=Math.min(We,It.count)):Ft!=null&&(ge=Math.max(ge,0),We=Math.min(We,Ft.count));let Ae=We-ge;if(Ae<0||Ae===1/0)return;kt.setup(B,V,At,H,It);let mn,de=Ut;if(It!==null&&(mn=nt.get(It),de=Et,de.setIndex(mn)),B.isMesh)V.wireframe===!0?(lt.setLineWidth(V.wireframeLinewidth*yt()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(B.isLine){let qt=V.linewidth;qt===void 0&&(qt=1),lt.setLineWidth(qt*yt()),B.isLineSegments?de.setMode(D.LINES):B.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else B.isPoints?de.setMode(D.POINTS):B.isSprite&&de.setMode(D.TRIANGLES);if(B.isBatchedMesh)de.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)de.renderInstances(ge,Ae,B.count);else if(H.isInstancedBufferGeometry){let qt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xr=Math.min(H.instanceCount,qt);de.renderInstances(ge,Ae,Xr)}else de.render(ge,Ae)};function ie(b,U,H){b.transparent===!0&&b.side===ln&&b.forceSinglePass===!1?(b.side=Ve,b.needsUpdate=!0,As(b,U,H),b.side=Hn,b.needsUpdate=!0,As(b,U,H),b.side=ln):As(b,U,H)}this.compile=function(b,U,H=null){H===null&&(H=b),m=Rt.get(H),m.init(),S.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==H&&b.traverseVisible(function(B){B.isLight&&B.layers.test(U.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights(_._useLegacyLights);let V=new Set;return b.traverse(function(B){let mt=B.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){let At=mt[bt];ie(At,H,B),V.add(At)}else ie(mt,H,B),V.add(mt)}),S.pop(),m=null,V},this.compileAsync=function(b,U,H=null){let V=this.compile(b,U,H);return new Promise(B=>{function mt(){if(V.forEach(function(bt){St.get(bt).currentProgram.isReady()&&V.delete(bt)}),V.size===0){B(b);return}setTimeout(mt,10)}J.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let se=null;function Te(b){se&&se(b)}function Ne(){Oe.stop()}function re(){Oe.start()}let Oe=new Ic;Oe.setAnimationLoop(Te),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(b){se=b,Xt.setAnimationLoop(b),b===null?Oe.stop():Oe.start()},Xt.addEventListener("sessionstart",Ne),Xt.addEventListener("sessionend",re),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Xt.enabled===!0&&Xt.isPresenting===!0&&(Xt.cameraAutoUpdate===!0&&Xt.updateCamera(U),U=Xt.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,U,A),m=Rt.get(b,S.length),m.init(),S.push(m),_t.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(_t),ft=this.localClippingEnabled,Q=Vt.init(this.clippingPlanes,ft),g=gt.get(b,f.length),g.init(),f.push(g),fn(b,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Y,Z),this.info.render.frame++,Q===!0&&Vt.beginShadows();let H=m.state.shadowsArray;if(j.render(H,b,U),Q===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(g,b),m.setupLights(_._useLegacyLights),U.isArrayCamera){let V=U.cameras;for(let B=0,mt=V.length;B<mt;B++){let bt=V[B];No(g,b,bt,bt.viewport)}}else No(g,b,U);A!==null&&(M.updateMultisampleRenderTarget(A),M.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,U),kt.resetDefaultState(),N=-1,y=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function fn(b,U,H,V){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){V&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_t);let bt=rt.update(b),At=b.material;At.visible&&g.push(b,bt,At,H,Nt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){let bt=rt.update(b),At=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Nt.copy(bt.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(_t)),Array.isArray(At)){let It=bt.groups;for(let Gt=0,Ot=It.length;Gt<Ot;Gt++){let Ft=It[Gt],ge=At[Ft.materialIndex];ge&&ge.visible&&g.push(b,bt,ge,H,Nt.z,Ft)}}else At.visible&&g.push(b,bt,At,H,Nt.z,null)}}let mt=b.children;for(let bt=0,At=mt.length;bt<At;bt++)fn(mt[bt],U,H,V)}function No(b,U,H,V){let B=b.opaque,mt=b.transmissive,bt=b.transparent;m.setupLightsView(H),Q===!0&&Vt.setGlobalState(_.clippingPlanes,H),mt.length>0&&Th(B,mt,U,H),V&&lt.viewport(w.copy(V)),B.length>0&&Ts(B,U,H),mt.length>0&&Ts(mt,U,H),bt.length>0&&Ts(bt,U,H),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Th(b,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let mt=ct.isWebGL2;vt===null&&(vt=new En(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?ds:Bn,minFilter:us,samples:mt?4:0})),_.getDrawingBufferSize(Dt),mt?vt.setSize(Dt.x,Dt.y):vt.setSize(Na(Dt.x),Na(Dt.y));let bt=_.getRenderTarget();_.setRenderTarget(vt),_.getClearColor(tt),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let At=_.toneMapping;_.toneMapping=kn,Ts(b,H,V),M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt);let It=!1;for(let Gt=0,Ot=U.length;Gt<Ot;Gt++){let Ft=U[Gt],ge=Ft.object,We=Ft.geometry,Ae=Ft.material,mn=Ft.group;if(Ae.side===ln&&ge.layers.test(V.layers)){let de=Ae.side;Ae.side=Ve,Ae.needsUpdate=!0,Oo(ge,H,V,We,Ae,mn),Ae.side=de,Ae.needsUpdate=!0,It=!0}}It===!0&&(M.updateMultisampleRenderTarget(vt),M.updateRenderTargetMipmap(vt)),_.setRenderTarget(bt),_.setClearColor(tt,I),_.toneMapping=At}function Ts(b,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let B=0,mt=b.length;B<mt;B++){let bt=b[B],At=bt.object,It=bt.geometry,Gt=V===null?bt.material:V,Ot=bt.group;At.layers.test(H.layers)&&Oo(At,U,H,It,Gt,Ot)}}function Oo(b,U,H,V,B,mt){b.onBeforeRender(_,U,H,V,B,mt),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(_,U,H,V,b,mt),B.transparent===!0&&B.side===ln&&B.forceSinglePass===!1?(B.side=Ve,B.needsUpdate=!0,_.renderBufferDirect(H,U,V,B,b,mt),B.side=Hn,B.needsUpdate=!0,_.renderBufferDirect(H,U,V,B,b,mt),B.side=ln):_.renderBufferDirect(H,U,V,B,b,mt),b.onAfterRender(_,U,H,V,B,mt)}function As(b,U,H){U.isScene!==!0&&(U=it);let V=St.get(b),B=m.state.lights,mt=m.state.shadowsArray,bt=B.state.version,At=Mt.getParameters(b,B.state,mt,U,H),It=Mt.getProgramCacheKey(At),Gt=V.programs;V.environment=b.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(b.isMeshStandardMaterial?O:v).get(b.envMap||V.environment),Gt===void 0&&(b.addEventListener("dispose",ut),Gt=new Map,V.programs=Gt);let Ot=Gt.get(It);if(Ot!==void 0){if(V.currentProgram===Ot&&V.lightsStateVersion===bt)return zo(b,At),Ot}else At.uniforms=Mt.getUniforms(b),b.onBuild(H,At,_),b.onBeforeCompile(At,_),Ot=Mt.acquireProgram(At,It),Gt.set(It,Ot),V.uniforms=At.uniforms;let Ft=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ft.clippingPlanes=Vt.uniform),zo(b,At),V.needsLights=Ch(b),V.lightsStateVersion=bt,V.needsLights&&(Ft.ambientLightColor.value=B.state.ambient,Ft.lightProbe.value=B.state.probe,Ft.directionalLights.value=B.state.directional,Ft.directionalLightShadows.value=B.state.directionalShadow,Ft.spotLights.value=B.state.spot,Ft.spotLightShadows.value=B.state.spotShadow,Ft.rectAreaLights.value=B.state.rectArea,Ft.ltc_1.value=B.state.rectAreaLTC1,Ft.ltc_2.value=B.state.rectAreaLTC2,Ft.pointLights.value=B.state.point,Ft.pointLightShadows.value=B.state.pointShadow,Ft.hemisphereLights.value=B.state.hemi,Ft.directionalShadowMap.value=B.state.directionalShadowMap,Ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ft.spotShadowMap.value=B.state.spotShadowMap,Ft.spotLightMatrix.value=B.state.spotLightMatrix,Ft.spotLightMap.value=B.state.spotLightMap,Ft.pointShadowMap.value=B.state.pointShadowMap,Ft.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Ot,V.uniformsList=null,Ot}function Fo(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Ui.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function zo(b,U){let H=St.get(b);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Ah(b,U,H,V,B){U.isScene!==!0&&(U=it),M.resetTextureUnits();let mt=U.fog,bt=V.isMeshStandardMaterial?U.environment:null,At=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:wn,It=(V.isMeshStandardMaterial?O:v).get(V.envMap||bt),Gt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ft=!!H.morphAttributes.position,ge=!!H.morphAttributes.normal,We=!!H.morphAttributes.color,Ae=kn;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ae=_.toneMapping);let mn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=mn!==void 0?mn.length:0,qt=St.get(V),Xr=m.state.lights;if(Q===!0&&(ft===!0||b!==y)){let Je=b===y&&V.id===N;Vt.setState(V,b,Je)}let pe=!1;V.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==Xr.state.version||qt.outputColorSpace!==At||B.isBatchedMesh&&qt.batching===!1||!B.isBatchedMesh&&qt.batching===!0||B.isInstancedMesh&&qt.instancing===!1||!B.isInstancedMesh&&qt.instancing===!0||B.isSkinnedMesh&&qt.skinning===!1||!B.isSkinnedMesh&&qt.skinning===!0||B.isInstancedMesh&&qt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&qt.instancingColor===!1&&B.instanceColor!==null||qt.envMap!==It||V.fog===!0&&qt.fog!==mt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Vt.numPlanes||qt.numIntersection!==Vt.numIntersection)||qt.vertexAlphas!==Gt||qt.vertexTangents!==Ot||qt.morphTargets!==Ft||qt.morphNormals!==ge||qt.morphColors!==We||qt.toneMapping!==Ae||ct.isWebGL2===!0&&qt.morphTargetsCount!==de)&&(pe=!0):(pe=!0,qt.__version=V.version);let Jn=qt.currentProgram;pe===!0&&(Jn=As(V,U,B));let ko=!1,ji=!1,qr=!1,Ie=Jn.getUniforms(),$n=qt.uniforms;if(lt.useProgram(Jn.program)&&(ko=!0,ji=!0,qr=!0),V.id!==N&&(N=V.id,ji=!0),ko||y!==b){Ie.setValue(D,"projectionMatrix",b.projectionMatrix),Ie.setValue(D,"viewMatrix",b.matrixWorldInverse);let Je=Ie.map.cameraPosition;Je!==void 0&&Je.setValue(D,Nt.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&Ie.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ie.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,ji=!0,qr=!0)}if(B.isSkinnedMesh){Ie.setOptional(D,B,"bindMatrix"),Ie.setOptional(D,B,"bindMatrixInverse");let Je=B.skeleton;Je&&(ct.floatVertexTextures?(Je.boneTexture===null&&Je.computeBoneTexture(),Ie.setValue(D,"boneTexture",Je.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ie.setOptional(D,B,"batchingTexture"),Ie.setValue(D,"batchingTexture",B._matricesTexture,M));let Yr=H.morphAttributes;if((Yr.position!==void 0||Yr.normal!==void 0||Yr.color!==void 0&&ct.isWebGL2===!0)&&Zt.update(B,H,Jn),(ji||qt.receiveShadow!==B.receiveShadow)&&(qt.receiveShadow=B.receiveShadow,Ie.setValue(D,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&($n.envMap.value=It,$n.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ji&&(Ie.setValue(D,"toneMappingExposure",_.toneMappingExposure),qt.needsLights&&Rh($n,qr),mt&&V.fog===!0&&dt.refreshFogUniforms($n,mt),dt.refreshMaterialUniforms($n,V,$,X,vt),Ui.upload(D,Fo(qt),$n,M)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ui.upload(D,Fo(qt),$n,M),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ie.setValue(D,"center",B.center),Ie.setValue(D,"modelViewMatrix",B.modelViewMatrix),Ie.setValue(D,"normalMatrix",B.normalMatrix),Ie.setValue(D,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Je=V.uniformsGroups;for(let Zr=0,Ph=Je.length;Zr<Ph;Zr++)if(ct.isWebGL2){let Bo=Je[Zr];Qt.update(Bo,Jn),Qt.bind(Bo,Jn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Jn}function Rh(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Ch(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,U,H){St.get(b.texture).__webglTexture=U,St.get(b.depthTexture).__webglTexture=H;let V=St.get(b);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,U){let H=St.get(b);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,H=0){A=b,C=U,E=H;let V=!0,B=null,mt=!1,bt=!1;if(b){let It=St.get(b);It.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1):It.__webglFramebuffer===void 0?M.setupRenderTarget(b):It.__hasExternalTextures&&M.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);let Gt=b.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(bt=!0);let Ot=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?B=Ot[U][H]:B=Ot[U],mt=!0):ct.isWebGL2&&b.samples>0&&M.useMultisampledRTT(b)===!1?B=St.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[H]:B=Ot,w.copy(b.viewport),k.copy(b.scissor),G=b.scissorTest}else w.copy(K).multiplyScalar($).floor(),k.copy(st).multiplyScalar($).floor(),G=pt;if(lt.bindFramebuffer(D.FRAMEBUFFER,B)&&ct.drawBuffers&&V&&lt.drawBuffers(b,B),lt.viewport(w),lt.scissor(k),lt.setScissorTest(G),mt){let It=St.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,It.__webglTexture,H)}else if(bt){let It=St.get(b.texture),Gt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,It.__webglTexture,H||0,Gt)}N=-1},this.readRenderTargetPixels=function(b,U,H,V,B,mt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(At=At[bt]),At){lt.bindFramebuffer(D.FRAMEBUFFER,At);try{let It=b.texture,Gt=It.format,Ot=It.type;if(Gt!==hn&&xt.convert(Gt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ft=Ot===ds&&(J.has("EXT_color_buffer_half_float")||ct.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ot!==Bn&&xt.convert(Ot)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Fn&&(ct.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-V&&H>=0&&H<=b.height-B&&D.readPixels(U,H,V,B,xt.convert(Gt),xt.convert(Ot),mt)}finally{let It=A!==null?St.get(A).__webglFramebuffer:null;lt.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(b,U,H=0){let V=Math.pow(2,-H),B=Math.floor(U.image.width*V),mt=Math.floor(U.image.height*V);M.setTexture2D(U,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,b.x,b.y,B,mt),lt.unbindTexture()},this.copyTextureToTexture=function(b,U,H,V=0){let B=U.image.width,mt=U.image.height,bt=xt.convert(H.format),At=xt.convert(H.type);M.setTexture2D(H,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment),U.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,V,b.x,b.y,B,mt,bt,At,U.image.data):U.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,V,b.x,b.y,U.mipmaps[0].width,U.mipmaps[0].height,bt,U.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,V,b.x,b.y,bt,At,U.image),V===0&&H.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),lt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,H,V,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=b.max.x-b.min.x+1,bt=b.max.y-b.min.y+1,At=b.max.z-b.min.z+1,It=xt.convert(V.format),Gt=xt.convert(V.type),Ot;if(V.isData3DTexture)M.setTexture3D(V,0),Ot=D.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)M.setTexture2DArray(V,0),Ot=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);let Ft=D.getParameter(D.UNPACK_ROW_LENGTH),ge=D.getParameter(D.UNPACK_IMAGE_HEIGHT),We=D.getParameter(D.UNPACK_SKIP_PIXELS),Ae=D.getParameter(D.UNPACK_SKIP_ROWS),mn=D.getParameter(D.UNPACK_SKIP_IMAGES),de=H.isCompressedTexture?H.mipmaps[B]:H.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,de.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,b.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,b.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,b.min.z),H.isDataTexture||H.isData3DTexture?D.texSubImage3D(Ot,B,U.x,U.y,U.z,mt,bt,At,It,Gt,de.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ot,B,U.x,U.y,U.z,mt,bt,At,It,de.data)):D.texSubImage3D(Ot,B,U.x,U.y,U.z,mt,bt,At,It,Gt,de),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ge),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,mn),B===0&&V.generateMipmaps&&D.generateMipmap(Ot),lt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),lt.unbindTexture()},this.resetState=function(){C=0,E=0,A=null,lt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===go?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Ir?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xe?ai:Ec}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ai?xe:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},$a=class extends ps{};$a.prototype.isWebGL1Renderer=!0;var Mr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},br=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Sr=class extends Ye{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ri=new ne,cc=new ne,$s=[],hc=new Tn,w0=new ne,rs=new $t,as=new Gn,oi=class extends $t{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,w0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ri),hc.copy(t.boundingBox).applyMatrix4(Ri),this.boundingBox.union(hc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ri),as.copy(t.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(i),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ri),cc.multiplyMatrices(i,Ri),rs.matrixWorld=cc,rs.raycast(t,$s);for(let o=0,a=$s.length;o<a;o++){let l=$s[o];l.instanceId=r,l.object=this,e.push(l)}$s.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var ms=class extends Wn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},uc=new P,dc=new P,fc=new ne,Ta=new ur,Ks=new Gn,wr=class extends Ce{constructor(t=new Ge,e=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)uc.fromBufferAttribute(e,s-1),dc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=uc.distanceTo(dc);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,t.ray.intersectsSphere(Ks)===!1)return;fc.copy(s).invert(),Ta.copy(t.ray).applyMatrix4(fc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new P,h=new P,d=new P,u=new P,p=this.isLineSegments?2:1,x=i.index,m=i.attributes.position;if(x!==null){let f=Math.max(0,o.start),S=Math.min(x.count,o.start+o.count);for(let _=f,T=S-1;_<T;_+=p){let C=x.getX(_),E=x.getX(_+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,E),Ta.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let N=t.ray.origin.distanceTo(u);N<t.near||N>t.far||e.push({distance:N,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let _=f,T=S-1;_<T;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Ta.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);let E=t.ray.origin.distanceTo(u);E<t.near||E>t.far||e.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};var Bi=class extends je{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ka=class n extends Ge{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],p=[],x=0,g=[],m=i/2,f=0;S(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(p,2));function S(){let T=new P,C=new P,E=0,A=(e-t)/i;for(let N=0;N<=r;N++){let y=[],w=N/r,k=w*(e-t)+t;for(let G=0;G<=s;G++){let tt=G/s,I=tt*l+a,z=Math.sin(I),X=Math.cos(I);C.x=k*z,C.y=-w*i+m,C.z=k*X,d.push(C.x,C.y,C.z),T.set(z,A,X).normalize(),u.push(T.x,T.y,T.z),p.push(tt,1-w),y.push(x++)}g.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){let w=g[y][N],k=g[y+1][N],G=g[y+1][N+1],tt=g[y][N+1];h.push(w,k,tt),h.push(k,G,tt),E+=6}c.addGroup(f,E,0),f+=E}function _(T){let C=x,E=new Jt,A=new P,N=0,y=T===!0?t:e,w=T===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*w,0),u.push(0,w,0),p.push(.5,.5),x++;let k=x;for(let G=0;G<=s;G++){let I=G/s*l+a,z=Math.cos(I),X=Math.sin(I);A.x=y*X,A.y=m*w,A.z=y*z,d.push(A.x,A.y,A.z),u.push(0,w,0),E.x=z*.5+.5,E.y=X*.5*w+.5,p.push(E.x,E.y),x++}for(let G=0;G<s;G++){let tt=C+G,I=k+G;T===!0?h.push(I,I+1,tt):h.push(I+1,I,tt),N+=3}c.addGroup(f,N,T===!0?1:2),f+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Er=class n extends Ka{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qa=class n extends Ge{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new be(r,3)),this.setAttribute("normal",new be(r.slice(),3)),this.setAttribute("uv",new be(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){let _=new P,T=new P,C=new P;for(let E=0;E<e.length;E+=3)p(e[E+0],_),p(e[E+1],T),p(e[E+2],C),l(_,T,C,S)}function l(S,_,T,C){let E=C+1,A=[];for(let N=0;N<=E;N++){A[N]=[];let y=S.clone().lerp(T,N/E),w=_.clone().lerp(T,N/E),k=E-N;for(let G=0;G<=k;G++)G===0&&N===E?A[N][G]=y:A[N][G]=y.clone().lerp(w,G/k)}for(let N=0;N<E;N++)for(let y=0;y<2*(E-N)-1;y++){let w=Math.floor(y/2);y%2===0?(u(A[N][w+1]),u(A[N+1][w]),u(A[N][w])):(u(A[N][w+1]),u(A[N+1][w+1]),u(A[N+1][w]))}}function c(S){let _=new P;for(let T=0;T<r.length;T+=3)_.x=r[T+0],_.y=r[T+1],_.z=r[T+2],_.normalize().multiplyScalar(S),r[T+0]=_.x,r[T+1]=_.y,r[T+2]=_.z}function h(){let S=new P;for(let _=0;_<r.length;_+=3){S.x=r[_+0],S.y=r[_+1],S.z=r[_+2];let T=m(S)/2/Math.PI+.5,C=f(S)/Math.PI+.5;o.push(T,1-C)}x(),d()}function d(){for(let S=0;S<o.length;S+=6){let _=o[S+0],T=o[S+2],C=o[S+4],E=Math.max(_,T,C),A=Math.min(_,T,C);E>.9&&A<.1&&(_<.2&&(o[S+0]+=1),T<.2&&(o[S+2]+=1),C<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function p(S,_){let T=S*3;_.x=t[T+0],_.y=t[T+1],_.z=t[T+2]}function x(){let S=new P,_=new P,T=new P,C=new P,E=new Jt,A=new Jt,N=new Jt;for(let y=0,w=0;y<r.length;y+=9,w+=6){S.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),T.set(r[y+6],r[y+7],r[y+8]),E.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),N.set(o[w+4],o[w+5]),C.copy(S).add(_).add(T).divideScalar(3);let k=m(C);g(E,w+0,S,k),g(A,w+2,_,k),g(N,w+4,T,k)}}function g(S,_,T,C){C<0&&S.x===1&&(o[_]=S.x-1),T.x===0&&T.z===0&&(o[_]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var Hi=class n extends Qa{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Ee=class extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Qs(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function E0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Vi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ja=class extends Vi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vl,endingEnd:vl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yl:r=t,a=2*e-i;break;case Ml:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yl:o=t,l=2*i-e;break;case Ml:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,x=(i-e)/(s-e),g=x*x,m=g*x,f=-u*m+2*u*g-u*x,S=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*x+1,_=(-1-p)*m+(1.5+p)*g+.5*x,T=p*m-p*g;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+S*o[c+C]+_*o[l+C]+T*o[d+C];return r}},to=class extends Vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},eo=class extends Vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},un=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qs(e,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qs(t.times,Array),values:Qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ja(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case er:e=this.InterpolantFactoryMethodLinear;break;case ea:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&E0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,p=d+i;for(let x=0;x!==i;++x){let g=e[d+x];if(g!==e[u+x]||g!==e[p+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let p=0;p!==i;++p)e[u+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=er;var li=class extends un{};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=tr;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends un{};no.prototype.ValueTypeName="color";var io=class extends un{};io.prototype.ValueTypeName="number";var so=class extends Vi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)tn.slerpFlat(r,0,o,c-a,o,c,l);return r}},gs=class extends un{InterpolantFactoryMethodLinear(t){return new so(this.times,this.values,this.getValueSize(),t)}};gs.prototype.ValueTypeName="quaternion";gs.prototype.DefaultInterpolation=er;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends un{};ci.prototype.ValueTypeName="string";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=tr;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends un{};ro.prototype.ValueTypeName="vector";var ao=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],x=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},T0=new ao,oo=class{constructor(t){this.manager=t!==void 0?t:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};oo.DEFAULT_MATERIAL_NAME="__DEFAULT";var hi=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Tr=class extends hi{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Aa=new ne,pc=new P,mc=new P,xs=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fs,this._frameExtents=new Jt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),Aa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Aa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},lo=class extends xs{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,i=ar*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ar=class extends hi{constructor(t,e,i=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lo}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},gc=new ne,os=new P,Ra=new P,co=class extends xs{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Jt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),os.setFromMatrixPosition(t.matrixWorld),i.position.copy(os),Ra.copy(i.position),Ra.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Ra),i.updateMatrixWorld(),s.makeTranslation(-os.x,-os.y,-os.z),gc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc)}},Gi=class extends hi{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new co}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},ho=class extends xs{constructor(){super(new _r(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rr=class extends hi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new ho}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Cr=class extends hi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _o="\\[\\]\\.:\\/",A0=new RegExp("["+_o+"]","g"),vo="[^"+_o+"]",R0="[^"+_o.replace("\\.","")+"]",C0=/((?:WC+[\/:])*)/.source.replace("WC",vo),P0=/(WCOD+)?/.source.replace("WCOD",R0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vo),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vo),D0=new RegExp("^"+C0+P0+L0+I0+"$"),U0=["material","materials","bones","map"],uo=class{constructor(t,e,i){let s=i||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ce=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A0,"")}static parseTrackName(t){let e=D0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);U0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=uo;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);var zc=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function kc(n){let t=!1,e={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;t=zc()&&o>r,e.w=t?o:r,e.h=t?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",t),a.classList.toggle("compact",e.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",e.w+"px"),l.setProperty("--app-h",e.h+"px"),n&&n(e.w,e.h)}async function s(){if(!zc())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:e,goLandscape:s,refresh:i,get rotated(){return t}}}var le=(n,t,e,i,s,r,o=0,a)=>Object.assign({x:n,z:t,w:e,d:i,h:s,c:r,y:o},a||{});function ui(){return{solids:[],deco:[],pickups:[]}}function oe(n,t){return n.solids.push(...t.solids),n.deco.push(...t.deco),n.pickups.push(...t.pickups),n}function Nr(n,t,e,i,s=5911840,r=3809296){let o=ui(),a=i?e:.9,l=i?.9:e;o.solids.push(le(n,t,a,l,1.05,s)),o.deco.push(le(n,t,a+.1,l+.1,.06,r,1.05));let c=Math.floor(e/.9);for(let h=0;h<c;h++){let d=-e/2+.45+h*.9,u=i?n+d:n,p=i?t:t+d;o.pickups.push({w:h%3===1?"mug":"bottle",x:u,z:p,y:1.11})}return o}function Hc(n,t,e,i){let s=ui(),r=i?e:.4,o=i?.4:e;s.solids.push(le(n,t,r,o,2.4,3810324));for(let c of[.9,1.5,2.1])s.deco.push(le(n,t,r+.04,o+.04,.04,2758668,c));let a=Math.floor(e/.22),l=[3107626,9062930,6953498,13214266,2767466,14540253];for(let c of[.94,1.54,2.14])for(let h=0;h<a;h++){let d=-e/2+.11+h*.22;s.deco.push(le(i?n+d:n,i?t:t+d,.09,.09,.28,l[(h*7+c*10)%l.length|0],c))}return s}function Xi(n,t,e=!1,i=7029795){let s=ui();return s.solids.push(le(n,t,e?1:1.3,e?1:.9,.78,i)),s.pickups.push({w:"bottle",x:n+.2,z:t,y:.84}),s.pickups.push({w:"chair",x:n-(e?.95:1.1),z:t,y:0}),s.pickups.push({w:"chair",x:n+(e?.95:1.1),z:t+.1,y:0}),s}function Bc(n,t){let e=ui();return e.solids.push(le(n,t,2.5,1.4,.85,3809296)),e.deco.push(le(n,t,2.2,1.1,.04,2059061,.85)),e.pickups.push({w:"cue",x:n,z:t+1,y:0},{w:"cue",x:n+.4,z:t-1,y:0}),e}function Or(n,t,e,i,s=.9){let r=ui();for(let o=0;o<e;o++){let a=-((e-1)*s)/2+o*s;r.pickups.push({w:"stool",x:i?n+a:n,z:i?t:t+a,y:0})}return r}function Vc(n,t,e=1,i=9136954){let s=ui();return s.solids.push(le(n,t,e,e,e,i)),s}function ys(n,t,e=7029795){let i=ui();return i.solids.push(le(n,t,.8,.8,1.1,e,0,{barrel:!0})),i}var N0=[15843965,14724201,13010498,9262372,16767916,6044193];function O0(){let n={id:"biker",name:"Biker Bar",blurb:"Leather, beer and broken bottles. The Hellhounds want you out.",w:24,d:18,h:4.2,floor:{c1:4861984,c2:4073498,kind:"planks"},wall:5909022,trim:2757128,ceil:1708556,light:16756832,ambient:5914672,fog:1708042,lamps:[[-6,-3],[0,0],[6,3],[-6,5],[6,-5]],player:[0,7,0],solids:[],deco:[],pickups:[],enemies:{count:18,maxActive:9,outfits:"biker",weapons:{fists:4,bottle:3,chain:2,knuckles:2,bat:1,knife:1,wrench:1}},boss:{name:"BIG MIKE",outfit:"bikerBoss",weapon:"sledge",scale:1.35,hp:3.2}};return oe(n,Nr(-4,-6,9,!0)),oe(n,Hc(-4,-8.4,9,!0)),oe(n,Or(-4,-5,8,!0,1.05)),oe(n,Bc(5,-4)),oe(n,Bc(5,2)),oe(n,Xi(-6,1)),oe(n,Xi(-2,3,!0)),oe(n,Xi(-7,5,!0)),n.solids.push(le(10.6,7.6,1.2,1.2,1.9,11542560,0,{glow:16732208})),n.pickups.push({w:"bat",x:9.5,z:-8,y:0},{w:"crowbar",x:-10.5,z:7,y:0},{w:"pan",x:-1,z:-6,y:1.11},{w:"knife",x:-7,z:-6,y:1.11},{w:"axe",x:11,z:-1,y:0},{w:"spikedbat",x:-11,z:-2,y:0},{w:"shotgun",x:-8.1,z:-6,y:1.11},{w:"dynamite",x:2,z:8,y:0}),n}function F0(){let n={id:"disco",name:"Disco",blurb:"Saturday night fever. Everyone on the floor wants a piece of you.",w:22,d:22,h:5,floor:{c1:16722554,c2:2788095,c3:16765503,c4:3203184,kind:"disco"},wall:2756672,trim:6955168,ceil:656408,light:16736464,ambient:4202592,fog:656408,lamps:[[-5,-5],[5,-5],[-5,5],[5,5]],discoBall:!0,player:[0,8,0],solids:[],deco:[],pickups:[],enemies:{count:20,maxActive:10,outfits:"disco",weapons:{fists:5,bottle:2,mug:1,micstand:1,knife:1,guitar:1}},boss:{name:"DISCO KING",outfit:"discoBoss",weapon:"katana",scale:1.25,hp:3}};n.solids.push(le(0,-9.6,8,2,.6,1710634)),n.solids.push(le(0,-9.6,2.4,1,1.4,3355460,.6,{glow:4259839})),n.pickups.push({w:"guitar",x:-3,z:-9.6,y:.6},{w:"micstand",x:2.5,z:-9.6,y:.6},{w:"micstand",x:-1.5,z:-9.2,y:.6}),oe(n,Nr(9.6,0,10,!1,3153994,8405184)),oe(n,Or(8.6,0,8,!1,1.15));for(let[t,e]of[[-8,-4],[-8,1],[-8,6]])oe(n,Xi(t,e,!0,4202602));return n.pickups.push({w:"bat",x:-10,z:-9,y:0},{w:"knuckles",x:9.6,z:4,y:1.11},{w:"pan",x:9.6,z:-4,y:1.11},{w:"tommy",x:-10,z:9,y:0},{w:"tknives",x:10,z:9.5,y:0}),n}function z0(){let n={id:"prison",name:"Prison",blurb:"Riot in cell block C. Inmates and guards \u2014 nobody is on your side.",w:26,d:20,h:5,floor:{c1:9079428,c2:8289912,kind:"concrete"},wall:10133658,trim:5922906,ceil:4869706,light:15266047,ambient:5265504,fog:2106408,bright:.55,lamps:[[-8,0],[0,0],[8,0],[0,-6],[0,6]],player:[0,0,0],solids:[],deco:[],pickups:[],enemies:{count:22,maxActive:10,outfits:"prison",weapons:{fists:4,shiv:3,baton:2,weight:1,dumbbell:1,knife:1,pan:1}},boss:{name:"THE WARDEN",outfit:"warden",weapon:"shotgun",scale:1.3,hp:3}};for(let t of[-1,1])for(let e=0;e<5;e++){let i=-10+e*5,s=t*8.2;n.solids.push(le(i-2.4,s,.25,3.6,3,10133658)),n.deco.push(le(i,s-t*1.8,4.6,.06,.06,3355443,2.9));for(let r=-2;r<=2;r++)r!==0&&n.deco.push(le(i+r*.9,s-t*1.8,.06,.06,2.9,3355443));n.solids.push(le(i+1.2,s+t*.9,1.8,.8,.6,6974058)),n.pickups.push({w:e%2?"shiv":"dumbbell",x:i-1,z:s+t*.6,y:0})}for(let t of[-7,7])n.solids.push(le(t,0,1.6,.6,.5,3355443)),n.pickups.push({w:"weight",x:t-1.3,z:.6,y:0},{w:"weight",x:t+1.3,z:-.6,y:0},{w:"dumbbell",x:t,z:1.1,y:0});return n.solids.push(le(0,-3,4,1,.78,7829367)),n.solids.push(le(0,3,4,1,.78,7829367)),n.pickups.push({w:"pan",x:-1,z:-3,y:.84},{w:"mug",x:1,z:3,y:.84},{w:"knife",x:1.2,z:-3,y:.84},{w:"baton",x:12,z:0,y:0},{w:"shovel",x:-12,z:.5,y:0},{w:"revolver",x:.4,z:3,y:.84}),n}function k0(){let n={id:"saloon",name:"Western Saloon",blurb:"This town ain't big enough. Draw, partner.",w:24,d:20,h:4.6,floor:{c1:10119738,c2:9067568,kind:"planks"},wall:8014374,trim:4860434,ceil:3810322,light:16760944,ambient:6965802,fog:2759182,lamps:[[-6,-4],[6,-4],[0,2],[-6,6],[6,6]],player:[0,8,0],solids:[],deco:[],pickups:[],enemies:{count:18,maxActive:9,outfits:"cowboy",weapons:{fists:4,bottle:3,revolver:2,knife:1,pitchfork:1,shovel:1,rifle:1}},boss:{name:"THE SHERIFF",outfit:"sheriff",weapon:"rifle",scale:1.25,hp:3}};oe(n,Nr(-9.6,-1,12,!1,6961690,4858896)),oe(n,Hc(-11.6,-1,12,!1)),oe(n,Or(-8.5,-1,9,!1,1.2));for(let[t,e]of[[-2,-5],[3,-5],[-2,2],[3,2],[8,-2]])oe(n,Xi(t,e,!0,5913114));return n.solids.push(le(9.6,7.6,2.4,1,1.4,2759182)),n.deco.push(le(9.6,7,2.2,.3,.06,15790304,.9)),oe(n,ys(-10.8,8.6)),oe(n,ys(-9.8,8.8)),oe(n,Vc(11,-8.6)),n.pickups.push({w:"revolver",x:-9.6,z:-6,y:1.11},{w:"shotgun",x:11,z:-8.6,y:1},{w:"pitchfork",x:-11,z:6,y:0},{w:"shovel",x:11,z:3,y:0},{w:"dynamite",x:-10,z:7.6,y:0},{w:"tknives",x:0,z:-9,y:0},{w:"axe",x:8,z:9,y:0}),n}function B0(){let n={id:"pirate",name:"Pirate Cove",blurb:"A tavern built into a shipwreck. Yo ho, here come the cutlasses.",w:24,d:22,h:5.5,floor:{c1:9071172,c2:8019e3,kind:"deck"},wall:4864038,trim:2760210,ceil:2760212,light:16752720,ambient:3820122,fog:924196,lamps:[[-6,-5],[6,-5],[0,0],[-6,6],[6,6]],player:[0,9,0],solids:[],deco:[],pickups:[],enemies:{count:20,maxActive:10,outfits:"pirate",weapons:{fists:3,cutlass:3,bottle:2,flintlock:2,knife:1,mug:1,spear:1}},boss:{name:"CAPTAIN REDBEARD",outfit:"captain",weapon:"anchor",scale:1.4,hp:3.5}};n.solids.push(le(0,0,.7,.7,5.5,5913118)),oe(n,Nr(8,-8.6,8,!0,5913118,3810320)),oe(n,Or(8,-7.5,6,!0,1.2));for(let[t,e]of[[-6,-4],[-6,3],[5,3],[-1,6]])oe(n,Xi(t,e,!1,6965802));for(let t of[-6,0,6])n.solids.push(le(-11,t,1.6,.9,.9,2236962)),n.pickups.push({w:"cannonball",x:-10,z:t+1.2,y:0});return oe(n,ys(10.8,9.6)),oe(n,ys(9.8,9.8)),oe(n,ys(10.8,8.6)),oe(n,Vc(-10.5,9.8,1.2)),n.pickups.push({w:"cutlass",x:10,z:-8.6,y:1.11},{w:"flintlock",x:6,z:-8.6,y:1.11},{w:"spear",x:11,z:0,y:0},{w:"axe",x:-9,z:-9.5,y:0},{w:"knife",x:.4,z:-1,y:0}),n}function H0(){let n={id:"arena",name:"Arena",blurb:"Endless waves. Every weapon in the game on the rack. How long can you last?",w:30,d:30,h:7,floor:{c1:13150312,c2:12360796,kind:"sand"},wall:9075296,trim:5917236,ceil:null,light:16773328,ambient:8425632,fog:3818576,bright:.8,lamps:[[0,0],[-9,-9],[9,-9],[-9,9],[9,9]],player:[0,0,0],solids:[],deco:[],pickups:[],waves:!0,enemies:{count:1/0,maxActive:6,outfits:"mixed",weapons:{fists:3,bottle:2,bat:2,knife:2,machete:1,cutlass:1,axe:1,spear:1,revolver:1}},boss:{name:"THE CHAMPION",outfit:"champion",weapon:"axe",scale:1.4,hp:4}};for(let[e,i]of[[-8,-8],[8,-8],[-8,8],[8,8]])n.solids.push(le(e,i,1.4,1.4,3,11049080));let t=["katana","axe","sledge","machete","spear","spikedbat","cleaver","cutlass","pitchfork","crowbar","bat","shovel","knuckles","wrench","chain","anchor"];return t.forEach((e,i)=>{let s=i/t.length*Math.PI*2;n.pickups.push({w:e,x:Math.cos(s)*12.5,z:Math.sin(s)*12.5,y:0})}),n.pickups.push({w:"shotgun",x:2,z:2,y:0},{w:"revolver",x:-2,z:2,y:0},{w:"dynamite",x:0,z:-2.5,y:0},{w:"tknives",x:2,z:-2,y:0}),n}var Ur=[O0,F0,z0,k0,B0,H0];function Gc(n){return(Ur.find(e=>e().id===n)||Ur[0])()}function Wc(n,t=16){let e=[];for(let s=0;s<t*6&&e.length<t;s++){let r=s/(t*6)*Math.PI*2*3.7,o=Math.cos(r)*(n.w/2-1.2-s%3),a=Math.sin(r)*(n.d/2-1.2-s%2*1.5);V0(n,o,a,.5)||Math.hypot(o-n.player[0],a-n.player[1])<5||e.push([o,a])}return e}function V0(n,t,e,i){if(Math.abs(t)>n.w/2-i||Math.abs(e)>n.d/2-i)return!0;for(let s of n.solids)if(t+i>s.x-s.w/2&&t-i<s.x+s.w/2&&e+i>s.z-s.d/2&&e-i<s.z+s.d/2&&s.y<1.6)return!0;return!1}function Ze(n,t,e,i=99){let s=0;for(let r of n.solids){let o=r.y+r.h;o<=i+.05&&o>s&&Math.abs(t-r.x)<=r.w/2&&Math.abs(e-r.z)<=r.d/2&&(s=o)}return s}function Fr(n,t){let e=s=>s[t()*s.length|0],i=e(N0);switch(n){case"biker":return{skin:i,shirt:e([2236962,4473924,6974058,11546672,16777215]),vest:1710618,pants:e([2767450,1714756,2236962]),hair:e([null,2236962,5913114,8947848]),beard:e([null,2236962,6965802,10066329]),hat:e([null,null,"bandana"]),hatC:e([11542560,2105440,2236962]),shoe:1710618};case"bikerBoss":return{skin:14724201,shirt:1118481,vest:657930,pants:1714756,hair:null,beard:7829367,hat:"bandana",hatC:11542560,shoe:1118481};case"disco":return{skin:i,shirt:e([16722554,2818e3,16765503,10502399,16742954,16777215]),pants:e([16777215,2236962,9054858,13672512]),hair:e([2236962,4860432,13672512,11546656]),afro:t()<.4,beard:e([null,null,2236962]),shoe:e([16777215,2236962])};case"discoBoss":return{skin:9262372,shirt:16766720,pants:16777215,hair:1118481,afro:!0,beard:1118481,shoe:16777215,shades:!0};case"prison":return t()<.22?{skin:i,shirt:2767466,pants:1714762,hair:e([2236962,5913114]),hat:"cap",hatC:1714762,shoe:1118481,guard:!0}:{skin:i,shirt:16742938,pants:16742938,hair:e([null,2236962,5913114,11184810]),beard:e([null,2236962,5913114]),shoe:14540253};case"warden":return{skin:16767916,shirt:1714762,pants:1120810,hair:8947848,beard:8947848,hat:"cap",hatC:1120810,shoe:1118481};case"cowboy":return{skin:i,shirt:e([12623984,9062954,6974090,13684928,9054762]),vest:e([null,4860434,2236962]),pants:e([4864554,2767450,6969920]),hair:e([4860432,2236962,12619856]),beard:e([null,4860432,2236962,8947848]),hat:"cowboy",hatC:e([5913114,2236962,12623984]),shoe:3809296};case"sheriff":return{skin:14724201,shirt:13680800,vest:3809296,pants:2763322,hair:8947848,beard:8947848,hat:"cowboy",hatC:15788240,shoe:3809296,badge:!0};case"pirate":return{skin:i,shirt:e([16777215,13684928]),stripes:e([11542560,2105440,2236962]),pants:e([3811866,2763322,6969920]),hair:e([2236962,5913114,11550752]),beard:e([null,2236962,11550752]),hat:e(["bandana","bandana","tricorn"]),hatC:e([11542560,2105440,2236962]),shoe:2759182,eyepatch:t()<.3};case"captain":return{skin:16767916,shirt:9050650,vest:13214266,pants:2236962,hair:11546640,beard:11546640,hat:"tricorn",hatC:1118481,shoe:1118481,eyepatch:!0};case"champion":return{skin:13010498,shirt:null,pants:9050650,hair:2236962,beard:2236962,hat:"helmet",hatC:13214266,shoe:7029795};default:return Fr(e(["biker","disco","prison","cowboy","pirate"]),t)}}function Xc(n,t){let e=0;for(let s in n)e+=n[s];let i=t()*e;for(let s in n)if(i-=n[s],i<0)return s;return Object.keys(n)[0]}var Ht=(n,t,e,i,s,r)=>Object.assign({len:n,w:t,hc:e,head:i,headC:s},r||{}),yo={fists:{name:"Fists",kind:"melee",dmg:9,reach:1.5,rate:.38,knock:2.5,sever:0,sharp:!1,dur:1/0},knuckles:{name:"Brass Knuckles",kind:"melee",dmg:17,reach:1.5,rate:.36,knock:3.5,sever:0,sharp:!1,dur:1/0,model:Ht(.02,.1,13214266,[.12,.05,.04],14201930)},bottle:{name:"Beer Bottle",kind:"melee",dmg:16,reach:1.7,rate:.5,knock:3,sever:0,sharp:!1,dur:1,breaksInto:"brokenbottle",shatter:!0,model:Ht(.22,.05,3107626,[.08,.1,.08],3107626,{glass:!0})},brokenbottle:{name:"Broken Bottle",kind:"melee",dmg:20,reach:1.6,rate:.34,knock:1.5,sever:.12,sharp:!0,dur:8,model:Ht(.14,.05,3107626,[.08,.06,.08],8372087,{glass:!0})},mug:{name:"Beer Mug",kind:"melee",dmg:18,reach:1.6,rate:.5,knock:4,sever:0,sharp:!1,dur:3,shatter:!0,model:Ht(.04,.06,14270576,[.14,.18,.14],15784080,{glass:!0})},cue:{name:"Pool Cue",kind:"melee",dmg:20,reach:2.4,rate:.6,knock:4,sever:0,sharp:!1,dur:4,breaksInto:"brokencue",model:Ht(1.3,.035,13146970,[.04,.06,.04],2829099)},brokencue:{name:"Broken Cue",kind:"melee",dmg:19,reach:1.8,rate:.42,knock:2,sever:.08,sharp:!0,dur:10,model:Ht(.7,.035,13146970,[.03,.08,.03],14729354)},stool:{name:"Bar Stool",kind:"melee",dmg:30,reach:2,rate:.95,knock:8,sever:.05,sharp:!1,dur:3,breaksInto:"stoolleg",heavy:!0,model:Ht(.6,.05,7029795,[.38,.08,.38],9116186)},stoolleg:{name:"Stool Leg",kind:"melee",dmg:16,reach:1.8,rate:.45,knock:3,sever:0,sharp:!1,dur:8,model:Ht(.6,.05,7029795,[.06,.06,.06],7029795)},chair:{name:"Chair",kind:"melee",dmg:32,reach:2,rate:1,knock:9,sever:.05,sharp:!1,dur:3,breaksInto:"stoolleg",heavy:!0,model:Ht(.5,.05,8016432,[.45,.45,.08],8016432)},bat:{name:"Baseball Bat",kind:"melee",dmg:28,reach:2,rate:.6,knock:7,sever:.08,sharp:!1,dur:30,model:Ht(.55,.05,14268810,[.09,.4,.09],13213808)},spikedbat:{name:"Spiked Bat",kind:"melee",dmg:36,reach:2,rate:.65,knock:7,sever:.25,sharp:!1,dur:25,model:Ht(.55,.05,9136970,[.1,.4,.1],10132122)},pan:{name:"Frying Pan",kind:"melee",dmg:26,reach:1.8,rate:.55,knock:8,sever:0,sharp:!1,dur:1/0,model:Ht(.3,.04,2236962,[.32,.03,.32],3355443)},knife:{name:"Knife",kind:"melee",dmg:24,reach:1.5,rate:.28,knock:1,sever:.3,sharp:!0,dur:1/0,model:Ht(.12,.035,3811866,[.03,.22,.015],14606046)},shiv:{name:"Shiv",kind:"melee",dmg:22,reach:1.4,rate:.25,knock:1,sever:.2,sharp:!0,dur:12,model:Ht(.1,.035,7829367,[.025,.16,.015],13619151)},cleaver:{name:"Meat Cleaver",kind:"melee",dmg:34,reach:1.6,rate:.5,knock:3,sever:.6,sharp:!0,dur:1/0,model:Ht(.14,.04,2759184,[.02,.16,.14],13684944)},machete:{name:"Machete",kind:"melee",dmg:38,reach:1.9,rate:.48,knock:3,sever:.6,sharp:!0,dur:1/0,model:Ht(.14,.04,2759184,[.02,.55,.07],13158600)},axe:{name:"Fire Axe",kind:"melee",dmg:50,reach:2.1,rate:.85,knock:6,sever:.8,sharp:!0,heavy:!0,dur:1/0,model:Ht(.8,.045,11540504,[.05,.18,.22],13619151)},sledge:{name:"Sledgehammer",kind:"melee",dmg:65,reach:2.1,rate:1.15,knock:14,sever:.35,sharp:!1,heavy:!0,crush:!0,dur:1/0,model:Ht(.9,.045,9136970,[.16,.16,.3],5592405)},crowbar:{name:"Crowbar",kind:"melee",dmg:27,reach:1.9,rate:.55,knock:5,sever:.05,sharp:!1,dur:1/0,model:Ht(.7,.03,11542560,[.03,.03,.12],11542560)},wrench:{name:"Pipe Wrench",kind:"melee",dmg:29,reach:1.8,rate:.6,knock:6,sever:0,sharp:!1,dur:1/0,model:Ht(.45,.04,11542560,[.12,.1,.06],7829367)},chain:{name:"Bike Chain",kind:"melee",dmg:24,reach:2.3,rate:.5,knock:4,sever:.05,sharp:!1,dur:1/0,model:Ht(.7,.03,8947848,[.05,.05,.05],10066329)},guitar:{name:"Guitar",kind:"melee",dmg:30,reach:2.1,rate:.85,knock:9,sever:0,sharp:!1,heavy:!0,dur:2,breaksInto:"stoolleg",model:Ht(.55,.05,5913114,[.34,.42,.1],12599338)},micstand:{name:"Mic Stand",kind:"melee",dmg:22,reach:2.3,rate:.6,knock:5,sever:0,sharp:!1,dur:1/0,model:Ht(1.1,.025,2236962,[.06,.1,.06],4473924)},katana:{name:"Katana",kind:"melee",dmg:46,reach:2.2,rate:.42,knock:3,sever:.85,sharp:!0,dur:1/0,model:Ht(.22,.035,1710618,[.02,.75,.04],15263976)},cutlass:{name:"Cutlass",kind:"melee",dmg:40,reach:2,rate:.45,knock:3,sever:.65,sharp:!0,dur:1/0,model:Ht(.14,.04,13214266,[.02,.6,.06],14211288)},spear:{name:"Spear",kind:"melee",dmg:35,reach:2.8,rate:.6,knock:5,sever:.3,sharp:!0,dur:1/0,model:Ht(1.5,.035,9136970,[.05,.22,.02],12566463)},pitchfork:{name:"Pitchfork",kind:"melee",dmg:33,reach:2.6,rate:.65,knock:6,sever:.25,sharp:!0,dur:1/0,model:Ht(1.3,.035,9136970,[.22,.22,.02],9079434)},shovel:{name:"Shovel",kind:"melee",dmg:31,reach:2.1,rate:.7,knock:8,sever:.3,sharp:!1,dur:1/0,model:Ht(.9,.04,9136970,[.22,.26,.02],6974058)},weight:{name:"Weight Plate",kind:"melee",dmg:34,reach:1.6,rate:.8,knock:9,sever:0,sharp:!1,heavy:!0,dur:1/0,model:Ht(.02,.04,2236962,[.32,.32,.05],2500134)},dumbbell:{name:"Dumbbell",kind:"melee",dmg:30,reach:1.6,rate:.7,knock:7,sever:0,sharp:!1,heavy:!0,dur:1/0,model:Ht(.3,.04,5592405,[.14,.14,.14],2236962)},baton:{name:"Guard Baton",kind:"melee",dmg:22,reach:1.8,rate:.42,knock:5,sever:0,sharp:!1,dur:1/0,model:Ht(.55,.04,1118481,[.05,.05,.05],1118481)},anchor:{name:"Anchor",kind:"melee",dmg:80,reach:2.2,rate:1.5,knock:18,sever:.5,sharp:!1,heavy:!0,crush:!0,dur:1/0,model:Ht(.9,.06,3815994,[.6,.2,.08],3815994)},revolver:{name:"Revolver",kind:"gun",dmg:55,rate:.45,knock:6,sever:.4,ammo:6,pellets:1,spread:.01,range:60,model:Ht(.12,.04,4860436,[.04,.06,.26],8026746)},shotgun:{name:"Double Barrel",kind:"gun",dmg:16,rate:.9,knock:4,sever:.35,ammo:2,pellets:9,spread:.12,range:25,model:Ht(.3,.05,7029795,[.07,.06,.7],4473924)},flintlock:{name:"Flintlock Pistol",kind:"gun",dmg:70,rate:1.4,knock:9,sever:.5,ammo:1,pellets:1,spread:.03,range:40,model:Ht(.14,.05,7029795,[.04,.05,.34],9075280)},rifle:{name:"Lever Rifle",kind:"gun",dmg:60,rate:.75,knock:7,sever:.45,ammo:8,pellets:1,spread:.005,range:80,model:Ht(.35,.05,7029795,[.04,.05,.8],5592405)},tommy:{name:"Tommy Gun",kind:"gun",dmg:20,rate:.09,knock:2,sever:.15,ammo:40,pellets:1,spread:.05,range:45,model:Ht(.3,.06,5913114,[.08,.12,.6],3355443)},dynamite:{name:"Dynamite",kind:"throw",dmg:0,rate:.8,knock:0,sever:0,tdmg:90,explode:4.5,fuse:1.6,count:3,model:Ht(.02,.04,11542560,[.05,.2,.05],13642282)},tknives:{name:"Throwing Knives",kind:"throw",dmg:0,rate:.35,knock:0,sever:0,tdmg:34,tsever:.4,count:6,model:Ht(.08,.03,2236962,[.02,.16,.015],14606046)},cannonball:{name:"Cannonball",kind:"throw",dmg:0,rate:1,knock:0,sever:0,tdmg:70,tknock:16,count:1,model:Ht(.01,.01,2236962,[.22,.22,.22],1710618)}},mg=Object.keys(yo),Pe=n=>yo[n]||yo.fists;function Mo(n){return n.kind==="throw"?n.tdmg:Math.round(n.dmg*(n.heavy?1.2:.8)+(n.shatter?6:0))}function qc(n,t,e,i=1){let s=Math.round((n.kind==="throw"?Mo(n):n.dmg)*i),r=n.kind==="throw"?n.tsever||0:n.sever,o=s>=t,a=o||r>0&&e()<r,l=!!n.crush&&o,c=Math.min(40,Math.round(s/3)+(a?18:0)+(l?30:0));return{dmg:s,sever:a,crush:l,gibs:c}}function zr(n,t){let e=Pe(n);return!isFinite(e.dur)||(t.used=(t.used||0)+1,t.used<e.dur)?n:(t.used=0,e.breaksInto||null)}function G0(n){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),i=o=>"#"+o.toString(16).padStart(6,"0"),s=(o,a)=>{let l=(o>>16&255)*a,c=(o>>8&255)*a,h=(o&255)*a;return`rgb(${l|0},${c|0},${h|0})`};switch(n.kind){case"planks":case"deck":for(let o=0;o<8;o++){e.fillStyle=i(o%2?n.c1:n.c2),e.fillRect(0,o*16,128,16),e.fillStyle="rgba(0,0,0,.35)",e.fillRect(0,o*16,128,1);let a=o*37%128;e.fillRect(a,o*16,1,16),n.kind==="deck"&&(e.fillStyle="rgba(0,0,0,.5)",e.fillRect((a+20)%128,o*16+7,2,2),e.fillRect((a+84)%128,o*16+7,2,2))}break;case"disco":{let o=[n.c1,n.c2,n.c3,n.c4];for(let a=0;a<4;a++)for(let l=0;l<4;l++)e.fillStyle=i(o[(a+l*3)%4]),e.fillRect(a*32+1,l*32+1,30,30);break}case"concrete":e.fillStyle=i(n.c1),e.fillRect(0,0,128,128);for(let o=0;o<400;o++)e.fillStyle=s(n.c2,.8+Math.random()*.4),e.fillRect(Math.random()*128,Math.random()*128,2,2);e.fillStyle="rgba(0,0,0,.25)",e.fillRect(0,0,128,1),e.fillRect(0,0,1,128);break;case"sand":e.fillStyle=i(n.c1),e.fillRect(0,0,128,128);for(let o=0;o<700;o++)e.fillStyle=s(n.c2,.85+Math.random()*.3),e.fillRect(Math.random()*128,Math.random()*128,2,2);break}let r=new Bi(t);return r.wrapS=r.wrapT=hs,r.magFilter=Me,r.colorSpace=xe,r}function Yc(n,t,e=1){let i=new ze;n.add(i),n.background=new Pt(t.fog),n.fog=new Mr(t.fog,14,Math.max(t.w,t.d)*1.6);let s=C=>new Ee({color:C}),r=G0(t.floor);r.repeat.set(t.w/(t.floor.kind==="disco"?4:3),t.d/(t.floor.kind==="disco"?4:3));let o=new Ee({map:r});t.floor.kind==="disco"&&(o.emissive=new Pt(16777215),o.emissiveMap=r,o.emissiveIntensity=.35);let a=new $t(new Xn(t.w,t.d).rotateX(-Math.PI/2),o);a.receiveShadow=!0,i.add(a);let l=s(t.wall),c=s(t.trim),h=t.h;for(let[C,E,A,N]of[[0,-t.d/2,t.w,.2],[0,t.d/2,t.w,.2],[-t.w/2,0,.2,t.d],[t.w/2,0,.2,t.d]]){let y=new $t(new _e(A+.2,h,N+.2),l);y.position.set(C+Math.sign(C)*.1,h/2,E+Math.sign(E)*.1),y.receiveShadow=!0,i.add(y);let w=new $t(new _e(A+.25,1,N+.25),c);w.position.set(C+Math.sign(C)*.1,.5,E+Math.sign(E)*.1),i.add(w)}if(t.ceil!=null){let C=new $t(new Xn(t.w,t.d).rotateX(Math.PI/2),s(t.ceil));C.position.y=h,i.add(C);for(let E=-t.w/2+2;E<t.w/2;E+=4){let A=new $t(new _e(.3,.3,t.d),c);A.position.set(E,h-.15,0),i.add(A)}}else{let C=new oi(new _e(.5,.8,.5),new Ee,400),E=new Pt,A=new ne,N=0;for(let y=0;y<400;y++){let w=y%4,k=(y>>2)/100*2-1,G=(y>>2)%3,tt=w<2?k*t.w/2:(w===2?-1:1)*(t.w/2+1+G),I=w<2?(w===0?-1:1)*(t.d/2+1+G):k*t.d/2;A.makeTranslation(tt,h+.4+G*.7,I),C.setMatrixAt(N,A),C.setColorAt(N++,E.setHSL(Math.random(),.5,.45))}C.count=N,i.add(C),i.userData.crowd=C}let d=new _e(1,1,1).translate(0,.5,0),u=new Map,p=(C,E)=>{let A=C+":"+(E||0),N=u.get(A);return N||(N=s(C),E&&(N.emissive=new Pt(E),N.emissiveIntensity=.6),u.set(A,N)),N};for(let C of t.solids.concat(t.deco)){let E=new $t(d,p(C.c,C.glow));E.position.set(C.x,C.y,C.z),E.scale.set(C.w,C.h,C.d),E.castShadow=C.h>.3,E.receiveShadow=!0,i.add(E)}let x=t.bright??1;i.add(new Tr(16774376,t.ambient,1.6*x)),i.add(new Cr(16777215,.35*x));let g=new Rr(t.light,1.1);g.position.set(6,12,4),g.castShadow=e>0,g.shadow.mapSize.set(1024,1024),Object.assign(g.shadow.camera,{left:-t.w/2,right:t.w/2,top:t.d/2,bottom:-t.d/2,near:1,far:40}),i.add(g,g.target);let m=e>0?4:2,f=[];t.lamps.forEach(([C,E],A)=>{let N=new $t(new Er(.35,.3,4,1,!0),new Ee({color:2236962,emissive:t.light,emissiveIntensity:.5,side:ln}));N.position.set(C,h-(t.ceil==null?-1:.9),E),i.add(N);let y=new $t(new _e(.02,.9,.02),s(1118481));if(y.position.set(C,h-.45,E),t.ceil!=null&&i.add(y),A<m){let w=new Gi(t.light,30,16,1.2);w.position.set(C,h-1.2,E),i.add(w),f.push(w)}});let S=null,_=[];if(t.discoBall){S=new $t(new Hi(.6,1),new Ee({color:14540253,emissive:7829367,flatShading:!0})),S.position.set(0,h-1,0),i.add(S);for(let C of[16722554,2818e3,16765503]){let E=new Ar(C,40,22,.45,.4,1);E.position.set(0,h-1.1,0),i.add(E,E.target),_.push(E)}}let T=0;return{root:i,update(C){if(T+=C,S&&(S.rotation.y+=C*.8,_.forEach((E,A)=>{let N=T*(.7+A*.25)+A*2.1;E.target.position.set(Math.cos(N)*6,0,Math.sin(N*1.3)*6)}),o.emissiveIntensity=.25+.2*Math.max(0,Math.sin(T*8))),i.userData.crowd&&(T*10|0)%2===0){let E=i.userData.crowd;E.position.y=Math.abs(Math.sin(T*6))*.06}f.forEach((E,A)=>{E.intensity=30+Math.sin(T*3+A)*1.2})},dispose(){n.remove(i)}}}var ee=.075;function Ms(n,t=0,e=0,i=0,s=ee){let r=[],o=[],a=[],l=new Pt,c=[[1,0,0,[[1,0,0],[1,1,0],[1,1,1],[1,0,1]]],[-1,0,0,[[0,0,1],[0,1,1],[0,1,0],[0,0,0]]],[0,1,0,[[0,1,1],[1,1,1],[1,1,0],[0,1,0]]],[0,-1,0,[[0,0,0],[1,0,0],[1,0,1],[0,0,1]]],[0,0,1,[[1,0,1],[1,1,1],[0,1,1],[0,0,1]]],[0,0,-1,[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]]];for(let[d,u]of n){let[p,x,g]=d.split(",").map(Number);l.setHex(u);let m=.92+((p*73856093^x*19349663^g*83492791)&15)/100;for(let[f,S,_,T]of c){if(n.has(p+f+","+(x+S)+","+(g+_)))continue;let C=T.map(([E,A,N])=>[(p+E+t)*s,(x+A+e)*s,(g+N+i)*s]);for(let E of[0,1,2,0,2,3])r.push(...C[E]),a.push(f,S,_),o.push(l.r*m,l.g*m,l.b*m)}}let h=new Ge;return h.setAttribute("position",new be(r,3)),h.setAttribute("normal",new be(a,3)),h.setAttribute("color",new be(o,3)),h.computeBoundingSphere(),h}var me=(n,t,e)=>n+","+t+","+e;function ue(n,t,e,i,s,r,o,a){for(let l=t;l<t+s;l++)for(let c=e;c<e+r;c++)for(let h=i;h<i+o;h++){let d=typeof a=="function"?a(l-t,c-e,h-i):a;d!=null&&n.set(me(l,c,h),d)}}var qi=1708048,Zc=16053492,bo=6953498;function W0(n){let t=new Map;if(ue(t,0,0,0,6,6,6,n.skin),n.shades)for(let e=1;e<=4;e++)t.set(me(e,3,5),qi);else t.set(me(1,3,5),Zc),t.set(me(4,3,5),Zc),t.set(me(1,3,5),qi),t.set(me(4,3,5),qi),t.set(me(2,3,5),n.skin);if(n.eyepatch){t.set(me(4,3,5),qi),t.set(me(4,4,5),qi);for(let e=0;e<6;e++)t.set(me(e,4,5),e===4?qi:t.get(me(e,4,5)))}if(t.set(me(2,1,5),bo),t.set(me(3,1,5),bo),n.hair!=null){ue(t,0,5,0,6,1,6,n.hair),ue(t,0,2,0,6,3,1,n.hair);for(let e of[0,5])ue(t,e,4,1,1,1,3,n.hair)}if(n.afro&&ue(t,-1,5,-1,8,3,7,n.hair||2236962),n.beard!=null){ue(t,0,0,5,6,2,1,(e,i)=>i===1&&(e===2||e===3)?bo:n.beard);for(let e of[0,5])ue(t,e,0,3,1,3,2,n.beard);ue(t,1,-1,4,4,1,2,n.beard)}switch(n.hat){case"bandana":ue(t,0,5,0,6,1,6,n.hatC),ue(t,0,4,0,6,1,6,(e,i,s)=>s===5||s===0||e===0||e===5?n.hatC:null),t.set(me(2,4,-1),n.hatC),t.set(me(3,3,-1),n.hatC);break;case"cap":ue(t,0,6,0,6,1,6,n.hatC),ue(t,1,5,6,4,1,2,n.hatC);break;case"cowboy":ue(t,-2,6,-2,10,1,10,n.hatC),ue(t,0,7,0,6,2,6,n.hatC),ue(t,0,7,0,6,1,6,(e,i,s)=>e===0||e===5||s===0||s===5?2759182:n.hatC);break;case"tricorn":ue(t,-1,6,-1,8,1,8,n.hatC),ue(t,0,7,0,6,2,6,n.hatC),t.set(me(2,8,6),15790320),t.set(me(3,8,6),15790320);break;case"helmet":ue(t,-1,3,-1,8,4,8,(e,i,s)=>s===7&&i<3&&e>0&&e<7?null:n.hatC),ue(t,3,7,-1,2,2,7,11542560);break}return t}function X0(n){let t=new Map,e=n.shirt==null?n.skin:n.shirt;return ue(t,0,0,0,8,9,4,(i,s,r)=>s===0?2759184:n.stripes&&s%2===0?n.stripes:n.vest!=null&&(r===0||i<=1||i>=6)&&s>=1?n.vest:n.shirt==null&&s>=1?((i===3||i===4)&&s>4,n.skin):e),n.badge&&t.set(me(5,6,3),16765503),n.guard&&t.set(me(2,7,3),16765503),t}function q0(n){let t=new Map,e=n.shirt==null?n.skin:n.vest!=null&&n.vest===n.shirt?n.vest:n.shirt;return ue(t,0,0,0,3,9,3,(i,s)=>s>=6?n.stripes&&s===7?n.stripes:e:n.skin),t}function Y0(n){let t=new Map;return ue(t,0,0,0,4,10,4,(e,i,s)=>i<2?n.shoe:n.pants),t.set(me(1,0,4),n.shoe),t.set(me(2,0,4),n.shoe),t}var Jc=new Map;function kr(n,t){let e=Jc.get(n);return e||(e=t(),Jc.set(n,e)),e}var $c=new Ee({vertexColors:!0});function Kc(n){let t=JSON.stringify(n),e={head:kr(t+"h",()=>Ms(W0(n),-3,0,-3)),torso:kr(t+"t",()=>Ms(X0(n),-4,0,-2)),arm:kr(t+"a",()=>Ms(q0(n),-1.5,-9,-1.5)),leg:kr(t+"l",()=>Ms(Y0(n),-2,-10,-2))},i=new ze,s=(a,l,c,h)=>{let d=new ze;d.position.set(l*ee,c*ee,h*ee);let u=new $t(a,$c);return u.castShadow=!0,d.add(u),i.add(d),d},r={legL:s(e.leg,-2,10,0),legR:s(e.leg,2,10,0),torso:s(e.torso,0,10,0),head:s(e.head,0,19,0),armL:s(e.arm,-5.5,18.6,0),armR:s(e.arm,5.5,18.6,0)},o={head:[n.skin,n.skin,n.hair??n.skin,n.beard??n.skin],torso:[n.shirt??n.skin,n.vest??n.shirt??n.skin,n.stripes??n.shirt??n.skin],armL:[n.skin,n.shirt??n.skin],armR:[n.skin,n.shirt??n.skin],legL:[n.pants,n.pants,n.shoe],legR:[n.pants,n.pants,n.shoe]};return{group:i,pivots:r,palette:o}}function So(n=15843965,t=2763306){let e=new Map;ue(e,0,0,0,4,4,5,n);for(let i=0;i<4;i++)e.set(me(i,3,4),n);return ue(e,0,0,-6,4,4,6,t),new $t(Ms(e,-2,-2,-2.5,.05),$c)}var Br=new Map,Qc=n=>{let t=Br.get(n);return t||(t=new Ee({color:n}),Br.set(n,t)),t},Z0=n=>{let t="g"+n,e=Br.get(t);return e||(e=new Ee({color:n,transparent:!0,opacity:.75}),Br.set(t,e)),e};function ve(n,t,e,i,s,r,o,a,l){let c=new $t(new _e(t,e,i),l?Z0(s):Qc(s));return c.position.set(r,o,a),c.castShadow=!0,n.add(c),c}function bs(n,t){let e=new ze,i=t.model;if(!i)return e;switch(n){case"stool":ve(e,.4,.08,.4,9116186,0,.62,0);for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])ve(e,.05,.6,.05,7029795,s*.15,.3,r*.15);e.userData.upright=!0;break;case"chair":ve(e,.45,.06,.45,8016432,0,.46,0),ve(e,.45,.5,.06,8016432,0,.74,-.2);for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])ve(e,.05,.46,.05,5913120,s*.19,.23,r*.19);e.userData.upright=!0;break;case"bottle":case"brokenbottle":if(ve(e,.08,n==="bottle"?.2:.12,.08,3107626,0,.1,0,!0),n==="bottle")ve(e,.035,.1,.035,3107626,0,-.05,0,!0);else for(let s of[-1,1])ve(e,.02,.07,.02,8372087,s*.025,.19,0,!0);break;case"mug":ve(e,.13,.17,.13,15784080,0,.08,0,!0),ve(e,.1,.03,.1,16777215,0,.17,0),ve(e,.03,.1,.06,15784080,.08,.08,0,!0);break;case"guitar":ve(e,.06,.55,.04,5913114,0,.27,0),ve(e,.34,.4,.09,12599338,0,.7,0),ve(e,.1,.1,.1,2236962,0,.7,.03);break;case"dynamite":for(let s of[-1,0,1])ve(e,.05,.2,.05,13642282,s*.05,.1,0);ve(e,.01,.08,.01,14540253,0,.24,0);break;case"cannonball":{let s=new $t(new Hi(.12,0),Qc(1710618));s.position.y=.12,e.add(s);break}case"shotgun":case"revolver":case"flintlock":case"rifle":case"tommy":ve(e,i.w,i.len*.6,i.w*1.4,i.hc,0,i.len*.3-.05,.03),ve(e,i.head[0],i.head[1],i.head[2],i.headC,0,i.len*.55,-i.head[2]/2+.06),n==="tommy"&&ve(e,.09,.09,.09,2236962,0,i.len*.35,-.12),e.userData.gun=!0;break;default:ve(e,i.w,i.len,i.w,i.hc,0,i.len/2-.06,0,i.glass),ve(e,i.head[0],i.head[1],i.head[2],i.headC,0,i.len+i.head[1]/2-.06,i.head[2]>.1&&n!=="pan"&&n!=="weight"?i.head[2]/3:0,i.glass)}return e}var jc=18;function th(n,t){let i=new oi(new _e(ee,ee,ee),new Ee,2600);i.instanceMatrix.setUsage(Rc),i.count=0,i.frustumCulled=!1,i.castShadow=!1,i.setColorAt(0,new Pt(1,1,1)),n.add(i);let s=new Float32Array(2600),r=new Float32Array(2600),o=new Float32Array(2600),a=new Float32Array(2600),l=new Float32Array(2600),c=new Float32Array(2600),h=new Float32Array(2600),d=new Float32Array(2600),u=new Uint8Array(2600),p=new Uint8Array(2600),x=0,g=0,m=new ne,f=new tn,S=new zi,_=new P,T=new P,C=new Pt;function E(it,yt,D,F,J,ct,lt,Wt,St=1){let M=x;x=(x+1)%2600,g=Math.max(g,x===0?2600:x),s[M]=it,r[M]=yt,o[M]=D,a[M]=F,l[M]=J,c[M]=ct,h[M]=Math.random()*6.28,d[M]=St*(Wt?.7+Math.random()*.5:.9+Math.random()*.3),u[M]=1,p[M]=Wt?1:0,i.setColorAt(M,C.setHex(lt)),i.instanceColor.needsUpdate=!0,i.count=g}let A=[10095114,11538448,7996934,13113368];function N(it,yt,D,F,J,ct=0,lt=0,Wt=1){for(let St=0;St<F;St++){let M=St%2===0||!J,v=M?A[St&3]:J[Math.random()*J.length|0],O=(1.5+Math.random()*3.5)*Wt;E(it+(Math.random()-.5)*.2,yt+(Math.random()-.5)*.2,D+(Math.random()-.5)*.2,ct*O*.8+(Math.random()-.5)*O,1.5+Math.random()*3*Wt,lt*O*.8+(Math.random()-.5)*O,v,M)}}function y(it,yt,D,F=8372087,J=14){for(let ct=0;ct<J;ct++)E(it,yt,D,(Math.random()-.5)*5,1+Math.random()*3,(Math.random()-.5)*5,ct%4?F:14745568,!1,.5)}let w=2400,k=(()=>{let it=document.createElement("canvas");it.width=it.height=64;let yt=it.getContext("2d");yt.fillStyle="#fff";for(let F=0;F<26;F++){let J=Math.random()*6.28,ct=Math.random()*22,lt=3+Math.random()*7;yt.fillRect(32+Math.cos(J)*ct-lt/2,32+Math.sin(J)*ct-lt/2,lt,lt)}yt.fillRect(20,20,24,24);let D=new Bi(it);return D.magFilter=Me,D.minFilter=Me,D})(),G=new oi(new Xn(1,1),new Ee({alphaMap:k,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),w);G.count=0,G.frustumCulled=!1,G.setColorAt(0,C.setHex(9437184)),n.add(G);let tt=0,I=0,z=0,X=new P,$=new P(0,0,1);function Y(it,yt,D,F,J,ct,lt){X.set(F,J,ct),f.setFromUnitVectors($,X),S.set(0,0,Math.random()*6.28);let Wt=new tn().setFromEuler(S);f.multiply(Wt),_.set(it+F*.01,yt+J*.012,D+ct*.01),T.set(lt,lt,1),m.compose(_,f,T),G.setMatrixAt(tt,m),G.setColorAt(tt,C.setHex(A[Math.random()*4|0])),tt=(tt+1)%w,I=Math.max(I,tt===0?w:tt),G.count=I,G.instanceMatrix.needsUpdate=!0,G.instanceColor.needsUpdate=!0,z++}function Z(it,yt,D){Y(it,Ze(t,it,yt,2),yt,0,1,0,D)}let K=[],st=46;function pt(it,yt,D,F=.15,J=!0,ct=null){it.updateMatrixWorld(!0);let lt=new P,Wt=new tn,St=new P;it.matrixWorld.decompose(lt,Wt,St),it.parent&&it.parent.remove(it),it.position.copy(lt),it.quaternion.copy(Wt),it.scale.copy(St);let M=it.children[0];if(M&&M.geometry){M.geometry.boundingSphere||M.geometry.computeBoundingSphere();let O=M.geometry.boundingSphere.center.clone();for(let nt of it.children)nt.position.sub(O);it.position.add(O.multiply(St).applyQuaternion(Wt))}n.add(it);let v={obj:it,vel:yt.clone(),ang:D.clone(),half:F,bleed:J?3:0,palette:ct,rest:0,kick:null};if(K.push(v),K.length>st){let O=K.shift();n.remove(O.obj)}return v}let W=[],Q=new ms({color:16769162,transparent:!0});function ft(it,yt){let D=new Ge().setFromPoints([it.clone(),yt.clone()]),F=new wr(D,Q.clone());n.add(F),W.push({l:F,t:.08})}let vt=t.w/2,_t=t.d/2;function Dt(it){let yt=!1,D=F=>{u[F]===0?T.set(0,0,0):T.set(d[F],d[F],d[F]),S.set(h[F],h[F]*.7,0),f.setFromEuler(S),_.set(s[F],r[F],o[F]),m.compose(_,f,T),i.setMatrixAt(F,m),yt=!0};for(let F=0;F<g;F++){if(u[F]!==1)continue;if(l[F]-=jc*it,s[F]+=a[F]*it,r[F]+=l[F]*it,o[F]+=c[F]*it,Math.abs(s[F])>vt-.04){let ct=Math.sign(s[F]);if(s[F]=ct*(vt-.04),p[F]&&Math.random()<.35&&r[F]<t.h){Y(s[F],r[F],o[F],-ct,0,0,.18+Math.random()*.25),u[F]=0,D(F);continue}a[F]*=-.35}if(Math.abs(o[F])>_t-.04){let ct=Math.sign(o[F]);if(o[F]=ct*(_t-.04),p[F]&&Math.random()<.35&&r[F]<t.h){Y(s[F],r[F],o[F],0,0,-ct,.18+Math.random()*.25),u[F]=0,D(F);continue}c[F]*=-.35}t.h&&r[F]>t.h-.05&&(r[F]=t.h-.05,l[F]=-Math.abs(l[F])*.3);let J=Ze(t,s[F],o[F],r[F]+.2)+ee*.5*d[F];r[F]<=J&&(r[F]=J,p[F]?(Math.random()<.5&&Y(s[F],J-ee*.5*d[F],o[F],0,1,0,.16+Math.random()*.3),u[F]=0):Math.abs(l[F])>1.2?(l[F]*=-.3,a[F]*=.55,c[F]*=.55):(l[F]=0,a[F]*=.82,c[F]*=.82,a[F]*a[F]+c[F]*c[F]<.02&&(u[F]=2))),D(F)}yt&&(i.instanceMatrix.needsUpdate=!0);for(let F of K){if(F.rest>1.5)continue;let J=F.obj;F.vel.y-=jc*it,J.position.addScaledVector(F.vel,it);let ct=F.ang.length();ct>.01&&(f.setFromAxisAngle(_.copy(F.ang).divideScalar(ct),ct*it),J.quaternion.premultiply(f)),Math.abs(J.position.x)>vt-F.half&&(J.position.x=Math.sign(J.position.x)*(vt-F.half),F.vel.x*=-.4,F.bleed&&Y(J.position.x+Math.sign(J.position.x)*F.half,J.position.y,J.position.z,-Math.sign(J.position.x),0,0,.5)),Math.abs(J.position.z)>_t-F.half&&(J.position.z=Math.sign(J.position.z)*(_t-F.half),F.vel.z*=-.4,F.bleed&&Y(J.position.x,J.position.y,J.position.z+Math.sign(J.position.z)*F.half,0,0,-Math.sign(J.position.z),.5));let lt=Ze(t,J.position.x,J.position.z,J.position.y+.3)+F.half;J.position.y<lt?(J.position.y=lt,F.vel.y<-2.5&&F.bleed&&(Z(J.position.x,J.position.z,.4+Math.random()*.4),F.bleed--),F.vel.y=Math.abs(F.vel.y)>2?-F.vel.y*.3:0,F.vel.x*=.7,F.vel.z*=.7,F.ang.multiplyScalar(.7),F.vel.lengthSq()<.05&&(F.rest+=it,F.ang.lengthSq()<.5&&F.ang.set(0,0,0))):F.bleed&&Math.random()<.3&&E(J.position.x,J.position.y,J.position.z,F.vel.x*.3,0,F.vel.z*.3,A[Math.random()*4|0],!0)}for(let F=W.length-1;F>=0;F--){let J=W[F];J.t-=it,J.l.material.opacity=Math.max(0,J.t/.08),J.t<=0&&(n.remove(J.l),J.l.geometry.dispose(),W.splice(F,1))}}function Nt(it,yt,D,F,J){for(let ct of K){let lt=ct.obj,Wt=lt.position.x-it,St=lt.position.z-yt;Wt*Wt+St*St<D*D&&(ct.vel.x+=F,ct.vel.z+=J,ct.vel.y+=1.5,ct.ang.set(Math.random()*6-3,0,Math.random()*6-3),ct.rest=0)}}return{gib:E,burst:N,glass:y,splat:Y,pool:Z,addDebris:pt,tracer:ft,update:Dt,nudge:Nt,get splats(){return z}}}var wo=18,eh={head:40,armL:45,armR:45,legL:50,legR:50},nh=["armL","armR","legL","legR"],Eo=new P,ih=new P;function Hr(n,t,e=1,i={}){let s=n/e,r=t/e,o;return s>1.43?o="head":s<.76?o=r<0?"legL":"legR":Math.abs(r)>.3?o=r<0?"armL":"armR":o="torso",i[o]&&(o=i.torso?"head":"torso"),o}var qn=class{constructor(t,e,i,s,r,o={}){this.W=t,this.id=e,this.w=Pe(e),this.mesh=bs(e,this.w),this.pos=new P(i,s,r),this.vel=new P,this.spin=new P,this.thrown=!1,this.owner=null,this.held=!1,this.alive=!0,this.state={used:o.used||0,ammo:o.ammo??this.w.ammo,count:o.count??this.w.count},this.fuse=o.fuse??null,this.mesh.userData.upright||this.mesh.rotation.set(Math.PI/2,Math.random()*6,0,"YXZ"),this.mesh.rotation.y=Math.random()*6,this.mesh.position.copy(this.pos),t.scene.add(this.mesh)}get resting(){return!this.thrown&&this.vel.lengthSq()<.5}remove(){this.alive=!1,this.W.scene.remove(this.mesh)}update(t){let e=this.W,i=e.L;if(this.fuse!=null&&(this.fuse-=t,Math.random()<.6&&e.fx.gib(this.pos.x,this.pos.y+.25,this.pos.z,Math.random()-.5,1.5,Math.random()-.5,16764992,!1,.4),this.fuse<=0)){e.explode(this.pos,this.w.explode,this.w.tdmg,this.owner),this.remove();return}let s=Ze(i,this.pos.x,this.pos.z,this.pos.y+.1);if(this.thrown||this.pos.y>s+.01||this.vel.lengthSq()>.01){this.vel.y-=wo*t,this.pos.addScaledVector(this.vel,t),this.mesh.rotation.x+=this.spin.x*t,this.mesh.rotation.z+=this.spin.z*t;let r=i.w/2-.15,o=i.d/2-.15,a=!1;Math.abs(this.pos.x)>r&&(this.pos.x=Math.sign(this.pos.x)*r,this.vel.x*=-.35,a=!0),Math.abs(this.pos.z)>o&&(this.pos.z=Math.sign(this.pos.z)*o,this.vel.z*=-.35,a=!0);for(let c of i.solids)if(!(this.pos.y>c.y+c.h-.02||this.pos.y<c.y)&&Math.abs(this.pos.x-c.x)<c.w/2&&Math.abs(this.pos.z-c.z)<c.d/2){let h=c.w/2-Math.abs(this.pos.x-c.x),d=c.d/2-Math.abs(this.pos.z-c.z);h<d?(this.pos.x+=Math.sign(this.pos.x-c.x)*h,this.vel.x*=-.35):(this.pos.z+=Math.sign(this.pos.z-c.z)*d,this.vel.z*=-.35),a=!0}if(this.thrown){for(let c of e.targets()){if(c===this.owner||!c.alive&&!c.corpse)continue;let h=this.pos.x-c.pos.x,d=this.pos.z-c.pos.z,u=c.radius+.25,p=this.pos.y-c.pos.y;if(h*h+d*d<u*u&&p>-.2&&p<c.height+.1){let x=Eo.copy(this.vel).setY(0).normalize(),g=c.lateralOf?c.lateralOf(this.pos):0;if(c.isPlayer?e.hurtPlayer(Mo(this.w)*.6,x,3,this.owner):e.hit(c,Hr(p,g,c.scale,c.missing),this.w,x,this.owner,{thrown:!0,knock:this.w.tknock||(this.w.heavy?7:4)}),this.thrown=!1,this.vel.multiplyScalar(-.2),this.w.shatter||this.w.kind==="throw"&&this.id!=="dynamite"&&this.id!=="cannonball"){this.w.shatter&&(e.fx.glass(this.pos.x,this.pos.y,this.pos.z),e.audio.glass()),this.remove();return}break}}if(a&&this.w.shatter){e.fx.glass(this.pos.x,this.pos.y,this.pos.z),e.audio.glass(),this.remove();return}}let l=Ze(i,this.pos.x,this.pos.z,this.pos.y+.1);if(this.pos.y<=l){if(this.pos.y=l,this.thrown&&this.w.shatter&&this.vel.y<-3){e.fx.glass(this.pos.x,this.pos.y+.05,this.pos.z),e.audio.glass(),this.remove();return}this.thrown=!1,this.vel.y<-2?this.vel.y*=-.25:this.vel.y=0,this.vel.x*=.6,this.vel.z*=.6,this.spin.multiplyScalar(.5),this.vel.lengthSq()<.05&&(this.vel.set(0,0,0),this.mesh.userData.upright?(this.mesh.rotation.x=0,this.mesh.rotation.z=0):(this.mesh.rotation.x=Math.PI/2,this.mesh.rotation.z=0))}this.mesh.position.copy(this.pos)}}},J0=0,Ss=class{constructor(t,e,i,s,r,o={}){this.W=t,this.id=++J0,this.scale=o.scale||1,this.boss=!!o.boss,this.name=o.name||null;let a=o.hp||1,l=Kc(e);this.group=l.group,this.pivots=l.pivots,this.palette=l.palette,this.outfit=e,this.group.scale.setScalar(this.scale),t.scene.add(this.group),this.pos=new P(s,0,r),this.vel=new P,this.yaw=Math.random()*6,this.radius=.36*this.scale,this.height=1.88*this.scale,this.maxHp=100*a,this.hp=this.maxHp,this.partHp={};for(let c in eh)this.partHp[c]=eh[c]*a*(this.boss?1.4:1);this.missing={},this.alive=!0,this.corpse=!1,this.state="idle",this.t=0,this.cool=.5+Math.random(),this.think=0,this.target=null,this.goal=null,this.down=0,this.tilt=0,this.spinY=0,this.walk=Math.random()*6,this.stun=0,this.lastHitBy=null,this.weapon=null,this.wstate={used:0},this.heldMesh=null,this.aggro=o.aggro??.65+Math.random()*.3,this.speed=(2.6+Math.random()*1)*(this.boss?.85:1),this.giveWeapon(i),this.wounds=0,this.sync()}get isPlayer(){return!1}giveWeapon(t,e){this.heldMesh&&(this.heldMesh.parent&&this.heldMesh.parent.remove(this.heldMesh),this.heldMesh=null),this.weapon=t&&t!=="fists"&&!this.missing.armR?t:null;let i=Pe(this.weapon);if(this.wstate=e||{used:0,ammo:i.ammo,count:i.count},this.weapon){let s=bs(this.weapon,i);s.position.set(0,-8.5*ee,.5*ee),s.rotation.x=s.userData.gun?-Math.PI/2:-Math.PI/2*0+Math.PI/2,s.userData.upright&&(s.rotation.set(Math.PI,0,0),s.position.y=-8*ee),this.pivots.armR.add(s),this.heldMesh=s}}dropWeapon(t){if(!this.weapon)return;let e=new qn(this.W,this.weapon,this.pos.x+Math.sin(this.yaw)*.4,1*this.scale,this.pos.z+Math.cos(this.yaw)*.4,this.wstate);t&&(e.vel.set((Math.random()-.5)*4,2.5,(Math.random()-.5)*4),e.spin.set(8,0,6)),this.W.items.push(e),this.giveWeapon(null)}get w(){return Pe(this.weapon)}lateralOf(t){let e=t.x-this.pos.x,i=t.z-this.pos.z;return e*Math.cos(this.yaw)-i*Math.sin(this.yaw)}partWorld(t,e){return this.pivots[t].getWorldPosition(e),t==="head"?e.y+=.2*this.scale:t!=="torso"?e.y-=.35*this.scale:e.y+=.35*this.scale,e}get crawling(){return this.missing.legL&&this.missing.legR}takeHit(t,e,i,s,r,o){let a=this.W;this.lastHitBy=r||this.lastHitBy,r&&!r.isPlayer&&r!==this&&Math.random()<.7?this.target=r:r&&r.isPlayer&&(this.target=r);let l=this.partWorld(this.missing[t]?"torso":t,ih),c=this.palette[t]||this.palette.torso;a.fx.burst(l.x,l.y,l.z,Math.max(4,e.gibs>>(e.sever?0:1)),c,i.x,i.z,1),Math.random()<.6&&a.fx.pool(this.pos.x+i.x*.6,this.pos.z+i.z*.6,.3+e.dmg/80),this.wound(t);let h=t==="head"?1.7:t==="torso"?1:.45;if(this.hp-=e.dmg*h,t!=="torso"&&(this.partHp[t]-=e.dmg,(this.partHp[t]<=0||e.sever)&&this.sever(t,i,e.crush)),!this.alive&&this.corpse){e.crush||a.rage&&e.dmg>20||t==="torso"&&e.dmg>45&&Math.random()<.5?this.obliterate(i):(this.vel.x+=i.x*s*.5,this.vel.z+=i.z*s*.5);return}this.alive&&this.hp<=0?this.die(i,e.crush||o&&o.crush||a.rage,r):this.alive&&(s>6.5||o&&o.heavy&&Math.random()<.6?this.knockDown(i,s):(this.state="stagger",this.t=.28+s*.03,this.vel.x+=i.x*s,this.vel.z+=i.z*s),this.weapon&&Math.random()<.12*(s/4)&&this.dropWeapon(!0))}wound(t){if(this.wounds>40||this.missing[t])return;this.wounds++;let e=this.pivots[t],i=e.children[0],s=new $t(this.W.woundGeo,this.W.woundMat),r=t==="head"?[6,6,6,-3,0,-3]:t==="torso"?[8,9,4,-4,0,-2]:t.startsWith("arm")?[3,9,3,-1.5,-9,-1.5]:[4,10,4,-2,-10,-2],o=Math.random()*3|0,a=[r[3]+Math.random()*r[0],r[4]+Math.random()*r[1],r[5]+Math.random()*r[2]];o===0?a[2]=r[5]+r[2]-.4:o===1?a[0]=Math.random()<.5?r[3]+.4:r[3]+r[0]-.4:a[2]=r[5]+.4,s.position.set(a[0]*ee,a[1]*ee,a[2]*ee),s.scale.setScalar(.8+Math.random()*1.2),i.add(s)}sever(t,e,i){if(this.missing[t])return;let s=this.W;this.missing[t]=!0,s.stats.limbs++;let r=this.pivots[t],o=this.partWorld(t,new P);if(t==="armR"&&this.weapon&&this.dropWeapon(!0),i)r.visible=!1,s.fx.burst(o.x,o.y,o.z,40,this.palette[t],e.x,e.z,1.4);else{let c=new P(e.x*4+(Math.random()-.5)*3,3+Math.random()*3,e.z*4+(Math.random()-.5)*3),h=new P((Math.random()-.5)*16,(Math.random()-.5)*8,(Math.random()-.5)*16);s.fx.addDebris(r,c,h,t==="head"?.22*this.scale:.14*this.scale,!0,this.palette[t]),s.fx.burst(o.x,o.y,o.z,26,this.palette[t],e.x,e.z,1.2)}let a=new $t(s.stumpGeo,s.woundMat),l={head:[0,19,0],armL:[-5.5,18.6,0],armR:[5.5,18.6,0],legL:[-2,10,0],legR:[2,10,0]}[t];if(a.position.set(l[0]*ee,l[1]*ee,l[2]*ee),this.group.add(a),s.fx.pool(this.pos.x,this.pos.z,.6),t==="head"){s.stats.heads++,s.announce(this.alive?i?"HEAD POPPED":"DECAPITATED":""),this.alive&&(this.hp=0,this.die(e,!1,this.lastHitBy));for(let c=0;c<30;c++)s.fx.gib(o.x,o.y-.1,o.z,(Math.random()-.5)*2,3+Math.random()*4,(Math.random()-.5)*2,11538448,!0)}}knockDown(t,e){this.state="down",this.down=1.4+Math.random()*.8,this.t=0,this.vel.set(t.x*e,2.5+e*.25,t.z*e),this.flying=e,this.spinY=(Math.random()-.5)*6,this.weapon&&Math.random()<.5&&this.dropWeapon(!0)}obliterate(t){this.gone||(this.alive=!0,this.noCredit=!0,this.die(t,!0,null))}die(t,e,i){let s=this.W;if(this.alive){if(this.alive=!1,this.state="dead",this.noCredit||s.onKill(this,i,e),this.weapon&&this.dropWeapon(!0),e){for(let r of["head","torso",...nh]){if(this.missing[r])continue;this.missing[r]=!0;let o=this.pivots[r],a=this.partWorld(r,new P),l=new P(t.x*6+(Math.random()-.5)*7,3+Math.random()*5,t.z*6+(Math.random()-.5)*7);s.fx.addDebris(o,l,new P((Math.random()-.5)*20,(Math.random()-.5)*10,(Math.random()-.5)*20),(r==="torso"?.25:.15)*this.scale,!0,this.palette[r]),s.fx.burst(a.x,a.y,a.z,22,this.palette[r],t.x,t.z,1.8)}for(let r=0;r<6;r++)s.fx.pool(this.pos.x+(Math.random()-.5)*2.5,this.pos.z+(Math.random()-.5)*2.5,.6+Math.random()*.8);s.scene.remove(this.group),this.corpse=!1,this.gone=!0;return}this.corpse=!0,this.vel.x+=t.x*4,this.vel.z+=t.z*4,this.vel.y=Math.max(this.vel.y,1.5),this.fallDir=Math.random()<.5?1:-1,this.spinY=(Math.random()-.5)*4,s.fx.pool(this.pos.x,this.pos.z,1+Math.random()*.6)}}pickTarget(){let t=this.W,e=this,i=t.fighters.filter(o=>o!==e&&o.alive);if(t.player.alive&&(Math.random()<this.aggro||!i.length||this.boss))return t.player;let s=null,r=1e9;for(let o of i){let a=o.pos.distanceToSquared(this.pos);a<r&&(r=a,s=o)}return s||(t.player.alive?t.player:null)}update(t){let e=this.W;if(this.gone)return;this.cool-=t,this.t-=t,this.think-=t;let i=this.pos.y<=Ze(e.L,this.pos.x,this.pos.z,this.pos.y+.3)+.01,s=0,r=0;if(this.alive)if(this.state==="down")this.down-=t,this.tilt=Math.min(1,this.tilt+t*5),this.down<=0&&i&&(this.state="idle");else{if(this.tilt=Math.max(0,this.tilt-t*3),this.think<=0&&(this.think=.35+Math.random()*.4,(!this.target||!this.target.alive||Math.random()<.08)&&(this.target=this.pickTarget()),this.goal=null,!this.weapon&&!this.missing.armR&&Math.random()<.6)){let h=null,d=25;for(let u of e.items){if(!u.alive||u.held||!u.resting||u.fuse!=null)continue;let p=u.pos.distanceToSquared(this.pos);p<d&&u.pos.y<1.3&&(d=p,h=u)}this.goal=h}if(this.state==="stagger")this.t<=0&&(this.state="idle");else if(this.state==="windup")this.faceTarget(t,10),this.t<=0&&this.strike();else if(this.state==="recover")this.t<=0&&(this.state="idle");else{let h=this.goal&&this.goal.alive&&!this.goal.held?this.goal:this.target;if(h){let d=h.pos.x-this.pos.x,u=h.pos.z-this.pos.z,p=Math.hypot(d,u)||1,x=this.w,g=this.weapon&&!this.missing.armR;if(h===this.goal)p<.8?(this.giveWeapon(h.id,h.state),h.held=!0,h.remove(),this.goal=null):(s=d/p,r=u/p);else if(g&&x.kind==="gun")p>11?(s=d/p,r=u/p):p<4?(s=-d/p,r=-u/p):(s=-u/p*.5,r=d/p*.5),this.cool<=0&&p<x.range&&(this.state="windup",this.t=.55+Math.random()*.4);else if(g&&(x.shatter||x.kind==="throw")&&p>3.5&&p<10&&this.cool<=0&&Math.random()<.02)this.state="windup",this.t=.45,this.throwing=!0;else{let m=(g?x.reach:1.4)+h.radius+.1;p>m*.85&&(s=d/p,r=u/p),p<m&&this.cool<=0&&(this.state="windup",this.t=(g?Math.min(.75,x.rate*.8):.42)+Math.random()*.2,this.throwing=!1)}this.faceTarget(t,6,h)}}}let o=this.crawling?.6:this.missing.legL||this.missing.legR?1.1:this.speed;if(this.alive&&this.state!=="down"&&i){let h=1-Math.exp(-10*t);this.vel.x+=(s*o-this.vel.x)*h,this.vel.z+=(r*o-this.vel.z)*h}else if(i){let h=Math.exp(-(this.corpse?5:3)*t);this.vel.x*=h,this.vel.z*=h}this.vel.y-=wo*t;let a=Math.hypot(this.vel.x,this.vel.z);this.pos.addScaledVector(this.vel,t);let l=this.collideWorld();if(l&&a>6&&(this.state==="down"||this.corpse)){if(e.fx.splat(l.x,this.pos.y+1+Math.random()*.6,l.z,l.nx,0,l.nz,.5+a*.06),e.audio.thud(.8),this.alive){let h={dmg:Math.round(a*2.2),sever:!1,crush:!1,gibs:8};this.takeHit("torso",h,Eo.set(-l.nx,0,-l.nz),0,this.lastHitBy,null)}this.vel.x*=.3,this.vel.z*=.3}let c=Ze(e.L,this.pos.x,this.pos.z,this.pos.y+.3);this.pos.y<c&&(this.pos.y=c,this.vel.y<-6&&this.flying&&e.fx.pool(this.pos.x,this.pos.z,.6),this.vel.y=0,this.flying=0),this.state==="down"&&this.flying&&(this.yaw+=this.spinY*t),this.corpse&&(this.yaw+=this.spinY*t,this.spinY*=Math.exp(-3*t),this.tilt=Math.min(1,this.tilt+t*3.5)),this.animate(t,Math.hypot(this.vel.x,this.vel.z)),this.sync()}faceTarget(t,e,i=this.target){if(!i)return;let r=Math.atan2(i.pos.x-this.pos.x,i.pos.z-this.pos.z)-this.yaw;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;this.yaw+=r*Math.min(1,e*t)}strike(){let t=this.W,e=this.target,i=this.w,s=this.weapon&&!this.missing.armR;if(this.state="recover",this.t=.25,this.cool=(s?i.rate:.6)+.35+Math.random()*.5,this.swing=.25,!e||!e.alive)return;let r=Math.sin(this.yaw),o=Math.cos(this.yaw);if(s&&this.throwing){this.throwing=!1;let g=new qn(t,this.weapon,this.pos.x+r*.5,1.6*this.scale,this.pos.z+o*.5,this.wstate),m=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z),f=m/14;g.vel.set((e.pos.x-this.pos.x)/f,.5*wo*f*.9,(e.pos.z-this.pos.z)/f),g.spin.set(12,0,4),g.thrown=!0,g.owner=this,this.weapon==="dynamite"&&(g.fuse=1.4),t.items.push(g),this.giveWeapon(null);return}if(s&&i.kind==="gun"){let g=new P(this.pos.x+r*.4,1.45*this.scale,this.pos.z+o*.4),f=new P(e.pos.x,e.pos.y+(e.isPlayer?1.3:1.2*e.scale),e.pos.z).sub(g).normalize();t.shoot(g,f,i,this,.07),this.wstate.ammo--,this.wstate.ammo<=0&&this.dropWeapon(!0);return}let a=e.pos.x-this.pos.x,l=e.pos.z-this.pos.z,c=Math.hypot(a,l),h=(s?i.reach:1.4)+e.radius+.25,d=Math.abs(Math.atan2(r*l-o*a,r*a+o*l));if(c>h||d>.9){t.audio.whoosh();return}let u=Eo.set(a/c,0,l/c),p=s?i:this.missing.armR&&this.missing.armL?{dmg:6,knock:3,sever:0,kind:"melee"}:Pe("fists"),x=p.dmg*(this.boss?1.4:.75);if(e.isPlayer)t.hurtPlayer(x,u,(p.knock||2)*(this.boss?1.5:1),this);else{let g=Math.random(),m=g<.2?"head":g<.6?"torso":nh[Math.random()*4|0];t.hit(e,e.missing[m]?"torso":m,p,u,this,{})}if(s){let g=zr(this.weapon,this.wstate);if(g!==this.weapon){if(i.shatter){let m=this.partWorld("armR",ih);t.fx.glass(m.x,m.y,m.z),t.audio.glass()}this.giveWeapon(g)}}}collideWorld(){let t=this.W.L,e=this.radius,i=null,s=t.w/2-e,r=t.d/2-e;this.pos.x>s&&(this.pos.x=s,i={x:t.w/2,z:this.pos.z,nx:-1,nz:0},this.vel.x=Math.min(0,this.vel.x)*-.3),this.pos.x<-s&&(this.pos.x=-s,i={x:-t.w/2,z:this.pos.z,nx:1,nz:0},this.vel.x=Math.max(0,this.vel.x)*-.3),this.pos.z>r&&(this.pos.z=r,i={x:this.pos.x,z:t.d/2,nx:0,nz:-1},this.vel.z=Math.min(0,this.vel.z)*-.3),this.pos.z<-r&&(this.pos.z=-r,i={x:this.pos.x,z:-t.d/2,nx:0,nz:1},this.vel.z=Math.max(0,this.vel.z)*-.3);for(let o of t.solids){if(o.y>this.pos.y+1.2||o.y+o.h<=this.pos.y+.35)continue;let a=Math.max(o.x-o.w/2,Math.min(this.pos.x,o.x+o.w/2)),l=Math.max(o.z-o.d/2,Math.min(this.pos.z,o.z+o.d/2)),c=this.pos.x-a,h=this.pos.z-l,d=c*c+h*h;if(d<e*e){let u=Math.sqrt(d)||.001,p=d?c/u:1,x=d?h/u:0;this.pos.x=a+p*e,this.pos.z=l+x*e;let g=this.vel.x*p+this.vel.z*x;g<0&&(this.vel.x-=g*p*1.3,this.vel.z-=g*x*1.3),i||(i={x:a,z:l,nx:p,nz:x})}}return i}animate(t,e){let i=this.pivots;this.walk+=e*t*3.2;let s=this.alive&&this.state!=="down"?Math.sin(this.walk)*Math.min(1,e/2.5)*.7:0;this.missing.legL||(i.legL.rotation.x=s),this.missing.legR||(i.legR.rotation.x=-s),this.missing.armL||(i.armL.rotation.x=-s*.8+(this.state==="stagger"?-1:0));let r=s*.8;this.state==="windup"&&(r=this.w.kind==="gun"?-1.5:-2.6),this.swing>0&&(this.swing-=t,r=-2.6+(1-this.swing/.25)*3.3),this.alive&&this.w.kind==="gun"&&this.state!=="down"&&(r=Math.min(r,-1.4)),this.missing.armR||(i.armR.rotation.x=r),i.torso.rotation.x=this.state==="stagger"?-.3:this.state==="windup"?-.15:0,i.head.rotation.x=i.torso.rotation.x;let o=this.crawling?-.7:0;for(let a of["torso","head","armL","armR"])i[a].position.y=(a==="torso"?10:a==="head"?19:18.6)*ee+o;this.crawling&&(i.torso.rotation.x=1.2)}sync(){if(this.gone)return;let t=this.group;if(t.position.copy(this.pos),t.rotation.set(0,this.yaw,0),this.tilt>0){let e=this.tilt*Math.PI/2;t.rotateX(this.corpse?-e*.98*(this.fallDir||1):-e),t.position.y+=Math.sin(e)*.18*this.scale}}};function sh(){let n=null,t=null,e=null,i=null;function s(){if(n){n.state==="suspended"&&n.resume();return}try{n=new(window.AudioContext||window.webkitAudioContext)}catch{return}t=n.createGain(),t.gain.value=.55,t.connect(n.destination),e=n.createBuffer(1,n.sampleRate,n.sampleRate);let a=e.getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1}function r(a,l,c,h,d,u=0,p){if(!n)return;let x=n.currentTime+u,g=n.createBufferSource();g.buffer=e,g.playbackRate.value=.7+Math.random()*.6;let m=n.createBiquadFilter();m.type=l,m.frequency.setValueAtTime(c,x),m.Q.value=h,p&&m.frequency.exponentialRampToValueAtTime(p,x+a);let f=n.createGain();f.gain.setValueAtTime(d,x),f.gain.exponentialRampToValueAtTime(.001,x+a),g.connect(m),m.connect(f),f.connect(t),g.start(x,Math.random()*.5),g.stop(x+a+.02)}function o(a,l,c,h,d=0,u){if(!n)return;let p=n.currentTime+d,x=n.createOscillator();x.type=c,x.frequency.setValueAtTime(a,p),u&&x.frequency.exponentialRampToValueAtTime(u,p+l);let g=n.createGain();g.gain.setValueAtTime(h,p),g.gain.exponentialRampToValueAtTime(.001,p+l),x.connect(g),g.connect(t),x.start(p),x.stop(p+l+.02)}return{unlock:s,thud(a=1){r(.12,"lowpass",500+Math.random()*300,1,.9*a),o(110+Math.random()*40,.12,"sine",.6*a,0,50)},squish(){r(.18,"bandpass",900,2,.6,0,300),r(.12,"lowpass",300,1,.5,.05)},slash(){r(.14,"highpass",2500,1,.5,0,6e3),r(.16,"bandpass",700,2,.5,.03,250)},whoosh(){r(.18,"bandpass",600,1.5,.25,0,2e3)},glass(){r(.25,"highpass",4e3,1,.6);for(let a=0;a<4;a++)o(2500+Math.random()*3e3,.12,"triangle",.08,a*.03)},clang(){o(900,.25,"square",.12),o(1340,.2,"triangle",.12),r(.06,"highpass",3e3,1,.3)},shot(a){r(a?.45:.3,"lowpass",a?1200:2200,1,1.1,0,200),o(a?70:120,.2,"sine",.7,0,40)},click(){o(1800,.03,"square",.1)},boom(){r(1.1,"lowpass",900,.7,1.4,0,60),o(55,.9,"sine",1,0,25)},crunch(){r(.3,"lowpass",1400,1,.9,0,200),r(.2,"bandpass",400,3,.7,.04),o(70,.25,"sine",.8,0,35)},hurt(){o(220,.15,"sawtooth",.15,0,120)},rage(){o(80,1.2,"sawtooth",.35,0,160),r(.8,"bandpass",300,1,.5,0,1200)},bell(){for(let a=0;a<3;a++)o(660,.6,"triangle",.25,a*.25)},crowd(a){if(n)if(a&&!i){let l=n.createBufferSource();l.buffer=e,l.loop=!0;let c=n.createBiquadFilter();c.type="bandpass",c.frequency.value=420,c.Q.value=.8;let h=n.createGain();h.gain.value=.06;let d=n.createOscillator();d.frequency.value=.3;let u=n.createGain();u.gain.value=.03,d.connect(u),u.connect(h.gain),d.start(),l.connect(c),c.connect(h),h.connect(t),l.start(),i={s:l,lfo:d}}else!a&&i&&(i.s.stop(),i.lfo.stop(),i=null)}}}var zt=n=>document.getElementById(n),en="ontouchstart"in window||(navigator.maxTouchPoints||0)>0;en&&document.body.classList.add("touch");var rh="citydriver_save_v1",uh="citydriver_brawl_best",dh=1.62,Ao=.34,nn=new ps({antialias:!en,powerPreference:"high-performance"});nn.setPixelRatio(Math.min(window.devicePixelRatio||1,en?1.25:1.75));nn.shadowMap.enabled=!0;nn.shadowMap.type=Pr;nn.outputColorSpace=xe;zt("game").appendChild(nn.domElement);var ke=new Le(78,16/9,.05,120),Yn=null,Ro=kc((n,t)=>{nn.setSize(n,t,!1),nn.domElement.style.width=n+"px",nn.domElement.style.height=t+"px",ke.aspect=n/t,ke.updateProjectionMatrix()});Ro.refresh();var Kt=sh(),q=null,Co=null,sn=!1,Cn=!1,Po="biker",R={isPlayer:!0,pos:new P,vel:new P,yaw:0,pitch:0,hp:100,alive:!0,radius:Ao,height:1.8,scale:1,missing:{},weapon:null,wstate:{used:0},cool:0,kickCool:0,block:!1,rage:0,raging:0,punchSide:0,onGround:!0,pending:null},Lt={mx:0,my:0,attack:!1,attackHeld:!1,block:!1,kick:!1,grab:!1,throw:!1,jump:!1,rage:!1,sprint:!1};function fh(n){let t=Gc(n);Yn=new br,Co=Yc(Yn,t,en?0:1),Yn.add(ke);let e=th(Yn,t);q={L:t,scene:Yn,fx:e,audio:Kt,player:R,fighters:[],items:[],rage:!1,stats:{kills:0,limbs:0,heads:0,exploded:0,t:0,wave:0,spawned:0},woundGeo:new _e(ee*1.05,ee*1.05,ee*1.05),stumpGeo:new _e(ee*3.2,ee*1.2,ee*3.2),woundMat:new Ee({color:10094600}),spawnPts:Wc(t,18),spawnT:1.2,bossSpawned:!1,boss:null,done:!1,hitstop:0,shake:0,targets(){return this.fighters.concat([R])},hit:$i,hurtPlayer:Lo,shoot:gh,explode:xh,onKill:tg,announce:Zn};for(let s of t.pickups){let r=new qn(q,s.w,s.x,s.y||0,s.z);q.items.push(r)}R.pos.set(t.player[0],0,t.player[1]),R.vel.set(0,0,0),R.yaw=t.player[2],R.pitch=0,R.hp=100,R.alive=!0,R.weapon=null,R.wstate={used:0},R.rage=0,R.raging=0,R.cool=0,R.pending=null,Ki(null),t.waves&&(q.stats.wave=0,ph()),q.remaining=t.waves?0:t.enemies.count;let i=Math.min(t.waves?0:4,q.remaining);for(let s=0;s<i;s++)Wr(!0)}var To=Math.random;function Wr(n){let t=q.L,e=null;for(let o=0;o<10;o++){let a=q.spawnPts[Math.random()*q.spawnPts.length|0];if(Math.hypot(a[0]-R.pos.x,a[1]-R.pos.z)>(n?5:6)){e=a;break}}e||(e=q.spawnPts[0]);let i=Fr(t.enemies.outfits,To),s=Xc(t.enemies.weapons,To),r=new Ss(q,i,s==="fists"?null:s,e[0],e[1],{hp:t.waves?1+q.stats.wave*.06:1});return r.yaw=Math.atan2(R.pos.x-r.pos.x,R.pos.z-r.pos.z),q.fighters.push(r),q.stats.spawned++,t.waves||q.remaining--,r}function ah(){let n=q.L,t=n.boss,e=q.spawnPts.reduce((s,r)=>Math.hypot(r[0]-R.pos.x,r[1]-R.pos.z)>Math.hypot(s[0]-R.pos.x,s[1]-R.pos.z)?r:s),i=new Ss(q,Fr(t.outfit,To),t.weapon,e[0],e[1],{scale:t.scale,hp:t.hp,boss:!0,name:t.name,aggro:1});q.fighters.push(i),q.boss=i,q.bossSpawned=!0,Zn(t.name+"!",1.8),Kt.bell()}function ph(){q.stats.wave++,q.waveLeft=3+q.stats.wave*2,q.L.enemies.maxActive=Math.min(11,4+q.stats.wave),q.bossWave=q.stats.wave%5===0,q.bossSpawned=!1,Zn("WAVE "+q.stats.wave,1.4),Kt.bell()}var $0=new P,mh=new P,Yi=new P;function $i(n,t,e,i,s,r={}){let o=s===R,a=(o&&R.raging?2.5:1)*(r.mult||1),l=qc(e,n.partHp[t]??n.hp,Math.random,a);o&&R.raging&&t!=="torso"&&(l.sever=!0);let c=(r.knock??e.knock??3)*(o&&R.raging?2:1);q.rage=o&&R.raging>0;let h=n.alive;n.takeHit(t,l,i,c,s,e),q.rage=!1,e.sharp||e.kind==="gun"?Kt.slash():Kt.thud(e.heavy?1.2:.8),(l.sever||l.crush)&&Kt.squish(),o&&(q.hitstop=e.heavy||l.sever?.07:.035,q.shake=Math.max(q.shake,e.heavy?.25:.12),zt("crosshair").classList.add("hot"),setTimeout(()=>zt("crosshair").classList.remove("hot"),90),l.sever&&t!=="head"&&h&&Pn("\u2702 "+{armL:"LEFT ARM",armR:"RIGHT ARM",legL:"LEFT LEG",legR:"RIGHT LEG"}[t]+" OFF"),R.rage=Math.min(1,R.rage+(l.sever?.06:.015)))}function Lo(n,t,e,i){if(!R.alive||q.done)return;let s=Math.sin(R.yaw+Math.PI),r=Math.cos(R.yaw+Math.PI),o=-(t.x*s+t.z*r)>.2;R.block&&o?(n*=.18,e*=.35,Kt.clang(),q.shake=.1):(Kt.thud(.7),Kt.hurt(),q.shake=.22,ag(.5+n/60)),R.raging&&(n*=.5),R.hp-=n,R.vel.x+=t.x*e*.7,R.vel.z+=t.z*e*.7,R.hp<=0&&(R.hp=0,sg(i))}function oh(n,t,e,i){let s=e.corpse?.75*e.scale:e.radius+.06,r=e.pos.y,o=e.pos.y+(e.corpse?.45:e.height)*(e.crawling?.5:1),a=t.x,l=t.z,c=a*a+l*l;if(c<1e-6)return null;let h=((e.pos.x-n.x)*a+(e.pos.z-n.z)*l)/c;if(h<0||h>i)return null;let d=n.x+a*h-e.pos.x,u=n.z+l*h-e.pos.z;if(d*d+u*u>s*s)return null;let p=Math.sqrt(Math.max(0,s*s-d*d-u*u)/c),x=Math.max(0,h-p),g=n.y+t.y*x;return g<r-.05||g>o+.05?null:x}function K0(n,t,e){let i=0,s=1e9;for(let[r,o,a,l]of[[n.x,t.x,e.x-e.w/2,e.x+e.w/2],[n.y,t.y,e.y,e.y+e.h],[n.z,t.z,e.z-e.d/2,e.z+e.d/2]]){if(Math.abs(o)<1e-8){if(r<a||r>l)return null;continue}let c=(a-r)/o,h=(l-r)/o;if(c>h){let d=c;c=h,h=d}if(i=Math.max(i,c),s=Math.min(s,h),i>s)return null}return i}function Q0(n,t,e){let i=q.L,s=e;for(let r of i.solids){let o=K0(n,t,r);o!=null&&o<s&&(s=o)}for(let[r,o]of[["x",i.w/2],["z",i.d/2]])if(Math.abs(t[r])>1e-6){let a=(Math.sign(t[r])*o-n[r])/t[r];a>0&&a<s&&(s=a)}if(t.y<0){let r=-n.y/t.y;r<s&&(s=r)}if(i.ceil!=null&&t.y>0){let r=(i.h-n.y)/t.y;r<s&&(s=r)}return s}function gh(n,t,e,i,s=0){Kt.shot(e.pellets>1||e.dmg>60);for(let r=0;r<(e.pellets||1);r++){let o=(e.spread||0)+s,a=$0.copy(t).add(Yi.set((Math.random()-.5)*o*2,(Math.random()-.5)*o*2,(Math.random()-.5)*o*2)).normalize(),c=Q0(n,a,e.range||50),h=null;for(let u of q.targets()){if(u===i||u.gone||!u.alive&&!u.corpse)continue;if(u.isPlayer){if(!R.alive)continue;let x=oh(n,a,{pos:R.pos,radius:Ao,height:1.8,scale:1},c);x!=null&&x<c&&(c=x,h=u);continue}let p=oh(n,a,u,c);p!=null&&p<c&&(c=p,h=u)}let d=mh.copy(n).addScaledVector(a,c);if(r<3&&q.fx.tracer(new P(n.x,n.y-(i===R?.15:0),n.z),d),h===R)Lo(e.dmg*.55,new P(a.x,0,a.z).normalize(),e.knock*.5,i);else if(h){let u=d.y-h.pos.y,p=h.lateralOf(d),x=h.corpse?["armL","armR","legL","legR","head","torso"].find(g=>!h.missing[g])||"torso":Hr(u,p,h.scale,h.missing);$i(h,x,e,new P(a.x,0,a.z).normalize(),i,{knock:e.knock})}else for(let u=0;u<4;u++)q.fx.gib(d.x-a.x*.05,d.y-a.y*.05,d.z-a.z*.05,-a.x*2+(Math.random()-.5)*2,1+Math.random()*2,-a.z*2+(Math.random()-.5)*2,7829350,!1,.5)}}function xh(n,t,e,i){Kt.boom(),q.shake=.7;let s=q.fx;for(let a=0;a<70;a++){let l=Math.random()*6.28,c=3+Math.random()*7;s.gib(n.x,n.y+.3,n.z,Math.cos(l)*c,2+Math.random()*6,Math.sin(l)*c,[16747034,16764992,3355443,2236962][a&3],!1,1.2)}for(let a=0;a<5;a++)s.splat(n.x+(Math.random()-.5)*2,Ze(q.L,n.x,n.z,n.y+.5),n.z+(Math.random()-.5)*2,0,1,0,1+Math.random());let r=new Gi(16752704,60,16,1.5);r.position.copy(n).setY(n.y+1),q.scene.add(r),setTimeout(()=>q.scene.remove(r),140);for(let a of q.fighters){if(a.gone||!a.alive&&!a.corpse)continue;let l=a.pos.x-n.x,c=a.pos.z-n.z,h=Math.hypot(l,c);if(h>t)continue;let d=1-h/t,u=new P(l/(h||1),0,c/(h||1)),p=e*d;p>a.hp*.6||!a.alive?(a.alive&&(a.hp=0),a.lastHitBy=i,a.alive?a.die(u,!0,i):j0(a,u)):$i(a,"torso",{dmg:p,knock:12*d+4,sever:.5,kind:"throw",tdmg:p,heavy:!0},u,i,{knock:12*d+4})}let o=Math.hypot(R.pos.x-n.x,R.pos.z-n.z);o<t&&Lo(e*.6*(1-o/t),new P(R.pos.x-n.x,0,R.pos.z-n.z).normalize(),10*(1-o/t),i);for(let a of q.items){let l=a.pos.x-n.x,c=a.pos.z-n.z,h=Math.hypot(l,c);h<t&&a.alive&&(a.vel.set(l/(h||1)*8,5,c/(h||1)*8),a.spin.set(10,0,10))}s.nudge(n.x,n.z,t,0,0)}function j0(n,t){n.obliterate(t)}function tg(n,t,e){t===R?(q.stats.kills++,R.rage=Math.min(1,R.rage+(n.boss?.5:.18)),e?(q.stats.exploded++,Pn("\u{1F4A5} OBLITERATED")):Pn("\u2620 "+(n.name||"KO"))):t&&Pn("\u{1F37A} brawler down"),n.boss&&(Zn(n.name+" IS DOWN",1.6),Kt.bell())}var Rn=new P;function Io(n){return n.set(-Math.sin(R.yaw)*Math.cos(R.pitch),Math.sin(R.pitch),-Math.cos(R.yaw)*Math.cos(R.pitch))}function _h(n){let t=null,e=1e9,i=-Math.sin(R.yaw),s=-Math.cos(R.yaw);for(let r of q.fighters){if(r.gone||!r.alive&&!r.corpse)continue;let o=r.pos.x-R.pos.x,a=r.pos.z-R.pos.z,l=Math.hypot(o,a);if(l>n+r.radius+(r.corpse?.6:0))continue;let c=Math.acos(Math.max(-1,Math.min(1,(o*i+a*s)/(l||1))));if(c>(l<1?1.1:.62))continue;let h=c*2+l*.3+(r.corpse?1.5:0);h<e&&(e=h,t={f:r,d:l})}return t}function eg(){let n=Pe(R.weapon),t=_h(n.reach);if(!t){Kt.whoosh();return}let e=t.f,i=t.d,s=R.pos.y+dh,r=Math.max(.1,s+Math.tan(R.pitch)*i-e.pos.y),o=Yi.set(R.pos.x-Math.sin(R.yaw)*i,0,R.pos.z-Math.cos(R.yaw)*i),a=e.corpse?["head","armL","armR","legL","legR","torso"].sort(()=>Math.random()-.5).find(c=>!e.missing[c])||"torso":Hr(r,e.lateralOf(o),e.scale,e.missing),l=new P(e.pos.x-R.pos.x,0,e.pos.z-R.pos.z).normalize();if($i(e,a,n,l,R,{}),R.weapon){let c=zr(R.weapon,R.wstate);if(c!==R.weapon){if(n.shatter){let h=ke.localToWorld(new P(.3,-.2,-.6));q.fx.glass(h.x,h.y,h.z),Kt.glass()}else Kt.crunch();Pn("\u{1F494} "+n.name+" broke"),Ki(c),R.wstate={used:0,ammo:Pe(c).ammo}}}}function vh(){if(R.cool>0||R.block||!R.alive)return;let n=Pe(R.weapon);if(n.kind==="gun"){if((R.wstate.ammo??0)<=0){Kt.click(),R.cool=.3,og("Out of ammo \u2014 throw it (Q)");return}R.cool=n.rate,R.wstate.ammo--;let t=ke.getWorldPosition(new P);Io(Rn),gh(t,Rn,n,R,R.vel.lengthSq()>2?.03:0),wt.recoil=1,q.shake=Math.max(q.shake,.15);return}if(n.kind==="throw"){Mh();return}R.cool=n.rate*(R.raging?.7:1),wt.swing=1,wt.swingDur=Math.max(.22,n.rate*.8),wt.side=R.weapon?1:R.punchSide^=1,R.pending={t:Math.min(.14,n.rate*.35),fn:eg}}function yh(){R.kickCool>0||!R.alive||(R.kickCool=.75,wt.kick=1,R.pending={t:.12,fn:()=>{let n=_h(1.7);q.fx.nudge(R.pos.x-Math.sin(R.yaw)*1.2,R.pos.z-Math.cos(R.yaw)*1.2,1.2,-Math.sin(R.yaw)*6,-Math.cos(R.yaw)*6);for(let e of q.items){let i=e.pos.x-R.pos.x,s=e.pos.z-R.pos.z;e.alive&&i*i+s*s<2.2&&e.pos.y<1&&(e.vel.set(-Math.sin(R.yaw)*7,3,-Math.cos(R.yaw)*7),e.spin.set(10,0,8))}if(!n){Kt.whoosh();return}let t=new P(n.f.pos.x-R.pos.x,0,n.f.pos.z-R.pos.z).normalize();$i(n.f,"torso",{dmg:11,knock:11.5,sever:0,kind:"melee",heavy:!1},t,R,{knock:11.5})}})}function Mh(){if(!R.weapon||!R.alive)return;let n=Pe(R.weapon),t=ke.getWorldPosition(new P);Io(Rn);let e=new qn(q,R.weapon,t.x+Rn.x*.6,t.y-.1+Rn.y*.6,t.z+Rn.z*.6,R.wstate),i=n.kind==="throw"?17:n.heavy?12:16;if(e.vel.copy(Rn).multiplyScalar(i).add(R.vel.clone().setY(0)),e.vel.y+=2.2,e.spin.set(n.kind==="throw"&&R.weapon==="tknives"?20:10,0,6),e.thrown=!0,e.owner=R,R.weapon==="dynamite"&&(e.fuse=n.fuse),q.items.push(e),Kt.whoosh(),wt.swing=1,wt.swingDur=.3,wt.side=1,R.cool=n.kind==="throw"?n.rate:.35,n.kind==="throw"&&(R.wstate.count||1)>1){let s={count:R.wstate.count-1};e.state={count:1},R.wstate=s}else Ki(null)}function bh(){let n=ke.getWorldPosition(mh);Io(Rn);let t=null,e=.42;for(let i of q.items){if(!i.alive||i.held||i.thrown||i.fuse!=null)continue;Yi.copy(i.pos).y+=.12,Yi.sub(n);let s=Yi.length();if(s>2.7)continue;let r=Math.acos(Math.max(-1,Math.min(1,Yi.dot(Rn)/s)));r<e&&(e=r,t=i)}return t}function ng(){let n=bh();n&&(R.weapon&&ig(),Ki(n.id),R.wstate=n.state,n.held=!0,n.remove(),Kt.click(),Pn("\u270B "+Pe(n.id).name))}function ig(){let n=new qn(q,R.weapon,R.pos.x-Math.sin(R.yaw)*.5,1,R.pos.z-Math.cos(R.yaw)*.5,R.wstate);q.items.push(n),Ki(null)}function sg(n){R.alive=!1,Zn("YOU GOT PAINTED",2.5),setTimeout(()=>Eh(!1),2200)}var wt={root:new ze,hR:null,hL:null,leg:null,held:null,swing:0,swingDur:.3,side:1,kick:0,recoil:0,bob:0};ke.add(wt.root);wt.hR=So(15251594,3815994);wt.hL=So(15251594,3815994);wt.hR.scale.setScalar(.55);wt.hL.scale.setScalar(.55);wt.root.add(wt.hR,wt.hL);{let n=new ze,t=new $t(new _e(.22,.7,.22),new Ee({color:2767450}));t.position.y=.35;let e=new $t(new _e(.26,.18,.36),new Ee({color:1710618}));e.position.set(0,.75,-.05),n.add(t,e),n.visible=!1,wt.leg=n,wt.root.add(n)}function Ki(n){if(R.weapon=n||null,wt.held&&(wt.hR.remove(wt.held),wt.held=null),R.weapon){let t=Pe(R.weapon),e=bs(R.weapon,t);e.userData.gun?(e.position.set(0,.02,-.04),e.rotation.set(0,0,0)):e.userData.upright?(e.position.set(0,-.05,-.15),e.rotation.set(-1.9,0,.3),e.scale.setScalar(.9)):(e.position.set(0,0,-.02),e.rotation.set(-.7,0,0)),e.traverse(i=>{i.isMesh&&(i.castShadow=!1)}),wt.hR.add(e),wt.held=e,t.kind==="gun"&&R.wstate.ammo==null&&(R.wstate.ammo=t.ammo)}}function rg(n,t){wt.bob+=n*(t?9:2);let e=Math.sin(wt.bob)*(t?.02:.005),i=Math.abs(Math.cos(wt.bob))*(t?.02:.004),s=Pe(R.weapon),r=s.kind==="gun",o=.26+e,a=-.27+i,l=-.5,c=0,h=0,d=-.28+e,u=-.3+i,p=-.52,x=0;if(r&&(o=.2+e,a=-.25+i,l=-.5,d=-.4,u=-.6),R.block&&(o=.14,a=-.12,l=-.38,d=-.14,u=-.12,p=-.38,h=.5,x=.3),wt.swing>0){wt.swing=Math.max(0,wt.swing-n/wt.swingDur);let g=1-wt.swing;if(R.weapon&&!r){let m=g<.3?g/.3:1-(g-.3)/.7,f=g<.3?0:(g-.3)/.7;o=.38-f*.55,a=-.1+m*.18-f*.25,l=-.5-f*.2,c=.9*m-f*1.6,h=-.6+f*1.3}else if(!r){let m=Math.sin(Math.min(1,g*1.6)*Math.PI);wt.side?(l-=m*.45,o-=m*.15,a+=m*.12):(p-=m*.45,d+=m*.15,u+=m*.12)}}if(wt.recoil>0&&(wt.recoil=Math.max(0,wt.recoil-n*6),l+=wt.recoil*.08,c+=wt.recoil*.35),wt.hR.position.set(o,a,l),wt.hR.rotation.set(c,0,h),wt.hL.position.set(d,u,p),wt.hL.rotation.set(x,0,0),wt.hL.visible=!R.weapon||R.block||!s.heavy,wt.kick>0){wt.kick=Math.max(0,wt.kick-n*3.2);let g=Math.sin((1-wt.kick)*Math.PI);wt.leg.visible=!0,wt.leg.position.set(.05,-1.25+g*.55,-.35-g*.55),wt.leg.rotation.set(-1.1*g-.3,0,0)}else wt.leg.visible=!1}var Gr=0;function Zn(n,t=1.1){if(!n)return;let e=zt("announce");e.textContent=n,e.classList.add("on"),Gr=t}function Pn(n){let t=zt("feed"),e=document.createElement("div");for(e.textContent=n,t.prepend(e);t.children.length>5;)t.lastChild.remove();setTimeout(()=>e.remove(),2600)}var ws=0;function ag(n){ws=Math.min(1,ws+n)}var lh=new Set;function og(n){lh.has(n)||(lh.add(n),Pn(n))}function lg(){zt("hp-fill").style.width=R.hp+"%",zt("rage-fill").style.width=(R.raging>0?R.raging/7:R.rage)*100+"%",document.querySelector(".bar.rage").classList.toggle("full",R.rage>=1&&!R.raging),zt("b-rage").classList.toggle("hidden",!(R.rage>=1&&!R.raging)),document.body.classList.toggle("raging",R.raging>0);let n=Pe(R.weapon);zt("weapon-name").textContent=n.name.toUpperCase();let t="";n.kind==="gun"?t=(R.wstate.ammo??0)+" / "+n.ammo+" rounds":n.kind==="throw"?t="\xD7"+(R.wstate.count||1)+" \xB7 tap attack to throw":isFinite(n.dur)&&(t=Math.max(0,n.dur-(R.wstate.used||0))+" hits left"),zt("weapon-info").textContent=t;let e=q.L,i=q.fighters.filter(o=>o.alive).length;zt("count").textContent=e.waves?`WAVE ${q.stats.wave} \xB7 \u2620 ${q.stats.kills}`:`\u2620 ${q.stats.kills}   \u{1F44A} ${i+q.remaining+(q.bossSpawned?0:1)} LEFT`;let s=R.alive?bh():null,r=zt("hint");s?(r.textContent=(en?"\u270B ":"[E] ")+Pe(s.id).name,r.classList.remove("hidden")):r.classList.add("hidden")}var ch=performance.now();function Sh(n){requestAnimationFrame(Sh);let t=Math.min(.05,(n-ch)/1e3||.016);if(ch=n,!sn||!q)return;if(Cn){nn.render(Yn,ke);return}q.hitstop>0&&(q.hitstop-=t,t*=.15),q.stats.t+=t,cg(t);let e=q.L;q.spawnT-=t;let i=q.fighters.filter(o=>o.alive).length;!q.done&&q.spawnT<=0&&(q.spawnT=.7+Math.random()*.8,e.waves?q.waveLeft>0&&i<e.enemies.maxActive?(Wr(),q.waveLeft--):q.waveLeft<=0&&q.bossWave&&!q.bossSpawned?ah():q.waveLeft<=0&&i===0&&(ph(),q.spawnT=2.5,R.hp=Math.min(100,R.hp+25)):q.remaining>0&&i<e.enemies.maxActive?Wr():q.remaining<=0&&i===0&&!q.bossSpawned?ah():q.bossSpawned&&!q.boss.alive&&i===0&&(q.done=!0,Zn("TOWN PAINTED RED",2.5),Kt.bell(),setTimeout(()=>Eh(!0),2600)));for(let o of q.fighters)o.update(t);hg();for(let o of q.items)o.alive&&o.update(t);(q.items.length>120||(q.stats.t|0)%5===0)&&(q.items=q.items.filter(o=>o.alive));let s=q.fighters.filter(o=>o.corpse);if(s.length>16){let o=s[0];q.scene.remove(o.group),o.gone=!0,o.corpse=!1}q.fighters=q.fighters.filter(o=>!o.gone||o.alive),q.fx.update(t),Co.update(t),q.shake=Math.max(0,q.shake-t*1.8);let r=q.shake*q.shake*.25;ke.position.set(R.pos.x+(Math.random()-.5)*r,R.pos.y+(R.alive?dh:.35),R.pos.z+(Math.random()-.5)*r),ke.rotation.set(R.pitch+(Math.random()-.5)*r,R.yaw,R.alive?0:.9,"YXZ"),rg(t,Math.hypot(R.vel.x,R.vel.z)>.5),wt.root.visible=R.alive,ws=Math.max(0,ws-t*1.5),zt("flash").style.opacity=ws.toFixed(2),Gr>0&&(Gr-=t,Gr<=0&&zt("announce").classList.remove("on")),(q.stats.t*20|0)%2===0&&lg(),nn.render(Yn,ke)}function cg(n){let t=q.L;if(R.cool-=n,R.kickCool-=n,R.pending&&(R.pending.t-=n,R.pending.t<=0)){let f=R.pending.fn;R.pending=null,f()}if(R.raging>0&&(R.raging-=n,R.raging<=0&&(R.raging=0,Pn("\u{1F525} rage over"))),!R.alive){R.vel.multiplyScalar(.9);return}let e=en?.0055:.0024;R.yaw-=Lt.mx*e,R.pitch-=Lt.my*e,Lt.mx=Lt.my=0,R.pitch=Math.max(-1.35,Math.min(1.35,R.pitch)),R.block=Lt.block,(Lt.attack||Lt.attackHeld)&&vh(),Lt.attack=!1,Lt.kick&&(Lt.kick=!1,yh()),Lt.grab&&(Lt.grab=!1,ng()),Lt.throw&&(Lt.throw=!1,Mh()),Lt.rage&&(Lt.rage=!1,R.rage>=1&&!R.raging&&(R.raging=7,R.rage=0,Zn("RAGE",1.2),Kt.rage()));let i=0,s=0;(dn.KeyW||dn.ArrowUp)&&(s-=1),(dn.KeyS||dn.ArrowDown)&&(s+=1),(dn.KeyA||dn.ArrowLeft)&&(i-=1),(dn.KeyD||dn.ArrowRight)&&(i+=1),i+=Zi.x,s+=Zi.y;let r=Math.hypot(i,s);r>1&&(i/=r,s/=r);let o=(Lt.sprint||dn.ShiftLeft?6.2:4.4)*(R.block?.5:1)*(R.raging?1.3:1),a=Math.sin(R.yaw),l=Math.cos(R.yaw),c=(i*l+s*a)*o,h=(-i*a+s*l)*o,d=Ze(t,R.pos.x,R.pos.z,R.pos.y+.45);R.onGround=R.pos.y<=d+.02;let u=1-Math.exp(-(R.onGround?12:2)*n);R.vel.x+=(c-R.vel.x)*u,R.vel.z+=(h-R.vel.z)*u,Lt.jump&&(Lt.jump=!1,R.onGround&&(R.vel.y=6.2)),R.vel.y-=18*n,R.pos.addScaledVector(R.vel,n);let p=Ao,x=t.w/2-p,g=t.d/2-p;R.pos.x=Math.max(-x,Math.min(x,R.pos.x)),R.pos.z=Math.max(-g,Math.min(g,R.pos.z));for(let f of t.solids){if(f.y>R.pos.y+1.7||f.y+f.h<=R.pos.y+.45)continue;let S=Math.max(f.x-f.w/2,Math.min(R.pos.x,f.x+f.w/2)),_=Math.max(f.z-f.d/2,Math.min(R.pos.z,f.z+f.d/2)),T=R.pos.x-S,C=R.pos.z-_,E=T*T+C*C;if(E<p*p){let A=Math.sqrt(E)||.001;R.pos.x=S+T/A*p,R.pos.z=_+C/A*p}}let m=Ze(t,R.pos.x,R.pos.z,R.pos.y+.45);R.pos.y<m&&(R.pos.y=m,R.vel.y=Math.max(0,R.vel.y)),Math.hypot(R.vel.x,R.vel.z)>1&&q.fx.nudge(R.pos.x,R.pos.z,.45,R.vel.x*.5,R.vel.z*.5)}function hg(){let n=q.fighters.filter(t=>t.alive&&!t.gone);n.push(R);for(let t=0;t<n.length;t++)for(let e=t+1;e<n.length;e++){let i=n[t],s=n[e],r=s.pos.x-i.pos.x,o=s.pos.z-i.pos.z,a=i.radius+s.radius,l=r*r+o*o;if(l>=a*a||l<1e-6)continue;let c=Math.sqrt(l),h=(a-c)/2,d=r/c,u=o/c;i.pos.x-=d*h,i.pos.z-=u*h,s.pos.x+=d*h,s.pos.z+=u*h;for(let[p,x,g]of[[i,s,1],[s,i,-1]]){if(p.isPlayer||!p.flying||x.isPlayer)continue;let m=Math.hypot(p.vel.x,p.vel.z);m>5&&x.state!=="down"&&(x.knockDown({x:d*g,z:u*g},m*.7),q.audio.thud(1),p.vel.multiplyScalar(.5))}}}var dn={},Zi={x:0,y:0};window.addEventListener("keydown",n=>{dn[n.code]=!0,Kt.unlock(),sn&&(n.code==="Space"&&(Lt.jump=!0,n.preventDefault()),n.code==="KeyF"&&(Lt.kick=!0),n.code==="KeyE"&&(Lt.grab=!0),(n.code==="KeyQ"||n.code==="KeyG")&&(Lt.throw=!0),n.code==="KeyR"&&(Lt.rage=!0),(n.code==="Escape"||n.code==="KeyP")&&Qi())});window.addEventListener("keyup",n=>{dn[n.code]=!1});var Ji=nn.domElement;Ji.addEventListener("mousedown",n=>{if(Kt.unlock(),!(!sn||Cn||en)){if(document.pointerLockElement!==Ji){Do();return}n.button===0&&(Lt.attack=!0,Lt.attackHeld=!0),n.button===2&&(Lt.block=!0)}});window.addEventListener("mouseup",n=>{n.button===0&&(Lt.attackHeld=!1),n.button===2&&(Lt.block=!1)});window.addEventListener("mousemove",n=>{document.pointerLockElement===Ji&&(Lt.mx+=n.movementX,Lt.my+=n.movementY)});function Do(){try{let n=Ji.requestPointerLock&&Ji.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}document.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("pointerlockchange",()=>{sn&&!Cn&&!en&&document.pointerLockElement!==Ji&&R.alive&&!q.done&&Qi(!0)});var Vr=(n,t)=>Ro.rotated?{x:t,y:window.innerWidth-n}:{x:n,y:t};function ug(){let n=zt("look-zone"),t=zt("stick-zone"),e=zt("stick-knob"),i=zt("stick-base"),s=null,r=null,o=null,a=null;n.addEventListener("pointerdown",u=>{Kt.unlock(),s=u.pointerId,r=Vr(u.clientX,u.clientY),n.setPointerCapture(u.pointerId)}),n.addEventListener("pointermove",u=>{if(u.pointerId!==s)return;let p=Vr(u.clientX,u.clientY);Lt.mx+=p.x-r.x,Lt.my+=p.y-r.y,r=p});let l=u=>{u.pointerId===s&&(s=null)};n.addEventListener("pointerup",l),n.addEventListener("pointercancel",l),t.addEventListener("pointerdown",u=>{Kt.unlock(),o=u.pointerId,t.setPointerCapture(u.pointerId);let p=i.getBoundingClientRect();a=Vr(p.left+p.width/2,p.top+p.height/2),c(u)});let c=u=>{if(u.pointerId!==o)return;let p=Vr(u.clientX,u.clientY),x=p.x-a.x,g=p.y-a.y,m=Math.hypot(x,g),f=55;m>f&&(x*=f/m,g*=f/m),Zi.x=x/f,Zi.y=g/f,e.style.transform=`translate(${x}px,${g}px)`,Lt.sprint=m>f*1.4};t.addEventListener("pointermove",c);let h=u=>{u.pointerId===o&&(o=null,Zi.x=Zi.y=0,e.style.transform="",Lt.sprint=!1)};t.addEventListener("pointerup",h),t.addEventListener("pointercancel",h);let d=(u,p,x)=>{let g=zt(u);g.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),Kt.unlock(),g.classList.add("on"),p()});let m=f=>{g.classList.remove("on"),x&&x()};g.addEventListener("pointerup",m),g.addEventListener("pointercancel",m),g.addEventListener("pointerleave",m)};d("b-attack",()=>{Lt.attack=!0,Lt.attackHeld=!0},()=>{Lt.attackHeld=!1}),d("b-block",()=>{Lt.block=!0},()=>{Lt.block=!1}),d("b-kick",()=>{Lt.kick=!0}),d("b-grab",()=>{Lt.grab=!0}),d("b-throw",()=>{Lt.throw=!0}),d("b-jump",()=>{Lt.jump=!0}),d("b-rage",()=>{Lt.rage=!0})}ug();function wh(){try{return JSON.parse(localStorage.getItem(uh))||{}}catch{return{}}}function Uo(){let n=zt("scen-list");n.innerHTML="";let t=wh();for(let e of Ur){let i=e(),s=document.createElement("button");s.className="scen";let r=t[i.id];s.innerHTML=`<b>${i.name.toUpperCase()}</b><small>${i.blurb}</small><i>${r?i.waves?"BEST: WAVE "+r.wave:"\u2714 CLEARED \xB7 "+r.time+"s":i.waves?"SURVIVE THE WAVES":i.enemies.count+" BRAWLERS + "+i.boss.name}</i>`,s.onclick=()=>Es(i.id),n.appendChild(s)}}function Es(n){Kt.unlock(),Ro.goLandscape(),Po=n,fh(n),["menu","pause","result"].forEach(t=>zt(t).classList.add("hidden")),zt("hud").classList.remove("hidden"),zt("touch").classList.toggle("hidden",!en),sn=!0,Cn=!1,Zn(q.L.name.toUpperCase(),1.6),Pn(en?"\u270B grab anything \xB7 \u{1F3AF} throw it \xB7 \u{1F9B5} kick":"E grab \xB7 Q throw \xB7 F kick \xB7 RMB block"),Kt.crowd(!0),en||Do()}function Qi(n){sn&&(Cn=n===!0?!0:!Cn,zt("pause").classList.toggle("hidden",!Cn),!Cn&&!en&&Do())}function Eh(n){if(!sn)return;sn=!1,Kt.crowd(!1),document.exitPointerLock&&document.exitPointerLock();let t=q.stats,e=q.L,i=t.kills*120+t.limbs*30+t.heads*60+t.exploded*80+(n?2500:0)+(e.waves?t.wave*400:0);try{let a=localStorage.getItem(rh);if(a){let l=JSON.parse(a);l.cash=Math.max(0,Math.floor((+l.cash||0)+i)),localStorage.setItem(rh,JSON.stringify(l))}}catch{}let s=wh(),r=Math.round(t.t);e.waves?(!s[e.id]||t.wave>s[e.id].wave)&&(s[e.id]={wave:t.wave}):n&&(!s[e.id]||r<s[e.id].time)&&(s[e.id]={time:r});try{localStorage.setItem(uh,JSON.stringify(s))}catch{}zt("r-title").textContent=e.waves?"SURVIVED "+(t.wave-1)+" WAVES":n?"TOWN PAINTED RED":"YOU GOT PAINTED";let o=[["Kills",t.kills],["Limbs removed",t.limbs],["Heads taken",t.heads],["Obliterated",t.exploded],["Blood splats",q.fx.splats],["Time",r+"s"],["City Driver cash","+$"+i.toLocaleString()]];zt("r-stats").innerHTML=o.map(([a,l])=>`<span>${a}</span><span>${l}</span>`).join(""),zt("result").classList.remove("hidden"),zt("hud").classList.add("hidden"),zt("touch").classList.add("hidden")}zt("p-resume").onclick=()=>Qi();zt("p-restart").onclick=()=>{Qi(),Es(Po)};zt("p-menu").onclick=()=>{sn=!1,Kt.crowd(!1),zt("pause").classList.add("hidden"),zt("hud").classList.add("hidden"),zt("touch").classList.add("hidden"),Uo(),zt("menu").classList.remove("hidden")};zt("pause-btn").addEventListener("pointerdown",n=>{n.stopPropagation(),Qi()});zt("r-again").onclick=()=>Es(Po);zt("r-menu").onclick=()=>{zt("result").classList.add("hidden"),Uo(),zt("menu").classList.remove("hidden")};document.addEventListener("visibilitychange",()=>{document.hidden&&sn&&!Cn&&Qi(!0)});requestAnimationFrame(Sh);Uo();var hh=new URLSearchParams(location.search).get("map");hh?Es(hh):(fh("biker"),sn=!1,function n(){if(!sn){requestAnimationFrame(n),ke.position.set(Math.sin(performance.now()/6e3)*6,2.2,Math.cos(performance.now()/6e3)*6),ke.lookAt(0,1.2,0);for(let t of q.fighters)t.animate(.016,0),t.sync();q.fx.update(.016),Co.update(.016),nn.render(Yn,ke)}}());new URLSearchParams(location.search).has("debug")&&(window.__brawl={W:()=>q,player:R,start:Es,hit:$i,spawnEnemy:Wr,explode:xh,input:Lt,attack:vh,kick:yh,wdef:Pe,give:n=>{Ki(n);let t=Pe(n);R.wstate={used:0,ammo:t.ammo,count:t.count}}});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
