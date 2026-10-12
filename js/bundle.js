(()=>{var P0=Object.defineProperty;var Bn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var wc=(n,e)=>{for(var t in e)P0(n,t,{get:e[t],enumerable:!0})};function Ni(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function rn(n,e,t){return Math.max(e,Math.min(t,n))}function wg(n,e){return(n%e+e)%e}function Uc(n,e,t){return(1-t)*n+t*e}function ef(n){return(n&n-1)===0&&n!==0}function gh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Di(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function up(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tg(){let n=Wa("canvas");return n.style.display="block",n}function _o(n){n in tf||(tf[n]=!0,console.warn(n))}function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Oc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Bc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ws.fromArray(n,r);let a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=i.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Zc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Hg(n,e,t,i,s,r,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===is,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ma);return c<t.near||c>t.far?null:{distance:c,point:Ma.clone(),object:n}}function Sa(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,ur),n.getVertexPosition(l,dr),n.getVertexPosition(c,fr);let h=Hg(n,e,t,i,ur,dr,fr,ya);if(h){s&&(xa.fromBufferAttribute(s,a),_a.fromBufferAttribute(s,l),va.fromBufferAttribute(s,c),h.uv=Ls.getInterpolation(ya,ur,dr,fr,xa,_a,va,new he)),r&&(xa.fromBufferAttribute(r,a),_a.fromBufferAttribute(r,l),va.fromBufferAttribute(r,c),h.uv1=Ls.getInterpolation(ya,ur,dr,fr,xa,_a,va,new he),h.uv2=h.uv1),o&&(mf.fromBufferAttribute(o,a),gf.fromBufferAttribute(o,l),xf.fromBufferAttribute(o,c),h.normal=Ls.getInterpolation(ya,ur,dr,fr,mf,gf,xf,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};Ls.getNormal(ur,dr,fr,f.normal),h.face=f}return h}function Pr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function wn(n){let e={};for(let t=0;t<n.length;t++){let i=Pr(n[t]);for(let s in i)e[s]=i[s]}return e}function kg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fp(n){return n.getRenderTarget()===null?n.outputColorSpace:gt.workingColorSpace}function pp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function qg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let f=c.array,p=c.usage,g=f.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,f,p),c.onUploadCallback();let m;if(f instanceof Float32Array)m=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)m=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=n.SHORT;else if(f instanceof Uint32Array)m=n.UNSIGNED_INT;else if(f instanceof Int32Array)m=n.INT;else if(f instanceof Int8Array)m=n.BYTE;else if(f instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,f){let p=h.array,g=h._updateRange,x=h.updateRanges;if(n.bindBuffer(f,c),g.count===-1&&x.length===0&&n.bufferSubData(f,0,p),x.length!==0){for(let m=0,d=x.length;m<d;m++){let u=x[m];t?n.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):n.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}g.count!==-1&&(t?n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):n.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);if(f===void 0)i.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}function Tv(n,e,t,i,s,r,o){let a=new Ne(0),l=r===!0?0:1,c,h,f=null,p=0,g=null;function x(d,u){let v=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_)),_===null?m(a,l):_&&_.isColor&&(m(_,1),v=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===yl)?(h===void 0&&(h=new ie(new Ie(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Pr(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,M,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=gt.getTransfer(_.colorSpace)!==Et,(f!==_||p!==_.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,f=_,p=_.version,g=n.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ie(new st(2,2),new Qt({name:"BackgroundMaterial",uniforms:Pr(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:is,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=gt.getTransfer(_.colorSpace)!==Et,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||p!==_.version||g!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,p=_.version,g=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function m(d,u){d.getRGB(ba,fp(n)),i.buffers.color.setClear(ba.r,ba.g,ba.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(d,u=1){a.set(d),l=u,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,m(a,l)},render:x}}function Av(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null),c=l,h=!1;function f(R,A,z,O,V){let W=!1;if(o){let L=m(O,z,A);c!==L&&(c=L,g(c.object)),W=u(R,O,z,V),W&&v(R,O,z,V)}else{let L=A.wireframe===!0;(c.geometry!==O.id||c.program!==z.id||c.wireframe!==L)&&(c.geometry=O.id,c.program=z.id,c.wireframe=L,W=!0)}V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,b(R,A,z,O),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function g(R){return i.isWebGL2?n.bindVertexArray(R):r.bindVertexArrayOES(R)}function x(R){return i.isWebGL2?n.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function m(R,A,z){let O=z.wireframe===!0,V=a[R.id];V===void 0&&(V={},a[R.id]=V);let W=V[A.id];W===void 0&&(W={},V[A.id]=W);let L=W[O];return L===void 0&&(L=d(p()),W[O]=L),L}function d(R){let A=[],z=[],O=[];for(let V=0;V<s;V++)A[V]=0,z[V]=0,O[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:O,object:R,attributes:{},index:null}}function u(R,A,z,O){let V=c.attributes,W=A.attributes,L=0,G=z.getAttributes();for(let Z in G)if(G[Z].location>=0){let X=V[Z],K=W[Z];if(K===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),X===void 0||X.attribute!==K||K&&X.data!==K.data)return!0;L++}return c.attributesNum!==L||c.index!==O}function v(R,A,z,O){let V={},W=A.attributes,L=0,G=z.getAttributes();for(let Z in G)if(G[Z].location>=0){let X=W[Z];X===void 0&&(Z==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),Z==="instanceColor"&&R.instanceColor&&(X=R.instanceColor));let K={};K.attribute=X,X&&X.data&&(K.data=X.data),V[Z]=K,L++}c.attributes=V,c.attributesNum=L,c.index=O}function _(){let R=c.newAttributes;for(let A=0,z=R.length;A<z;A++)R[A]=0}function w(R){U(R,0)}function U(R,A){let z=c.newAttributes,O=c.enabledAttributes,V=c.attributeDivisors;z[R]=1,O[R]===0&&(n.enableVertexAttribArray(R),O[R]=1),V[R]!==A&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,A),V[R]=A)}function M(){let R=c.newAttributes,A=c.enabledAttributes;for(let z=0,O=A.length;z<O;z++)A[z]!==R[z]&&(n.disableVertexAttribArray(z),A[z]=0)}function y(R,A,z,O,V,W,L){L===!0?n.vertexAttribIPointer(R,A,z,V,W):n.vertexAttribPointer(R,A,z,O,V,W)}function b(R,A,z,O){if(i.isWebGL2===!1&&(R.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let V=O.attributes,W=z.getAttributes(),L=A.defaultAttributeValues;for(let G in W){let Z=W[G];if(Z.location>=0){let I=V[G];if(I===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),I!==void 0){let X=I.normalized,K=I.itemSize,le=t.get(I);if(le===void 0)continue;let xe=le.buffer,we=le.type,Ae=le.bytesPerElement,Ee=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||I.gpuType===tp);if(I.isInterleavedBufferAttribute){let Oe=I.data,B=Oe.stride,me=I.offset;if(Oe.isInstancedInterleavedBuffer){for(let te=0;te<Z.locationSize;te++)U(Z.location+te,Oe.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let te=0;te<Z.locationSize;te++)w(Z.location+te);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let te=0;te<Z.locationSize;te++)y(Z.location+te,K/Z.locationSize,we,X,B*Ae,(me+K/Z.locationSize*te)*Ae,Ee)}else{if(I.isInstancedBufferAttribute){for(let Oe=0;Oe<Z.locationSize;Oe++)U(Z.location+Oe,I.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Oe=0;Oe<Z.locationSize;Oe++)w(Z.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Oe=0;Oe<Z.locationSize;Oe++)y(Z.location+Oe,K/Z.locationSize,we,X,K*Ae,K/Z.locationSize*Oe*Ae,Ee)}}else if(L!==void 0){let X=L[G];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(Z.location,X);break;case 3:n.vertexAttrib3fv(Z.location,X);break;case 4:n.vertexAttrib4fv(Z.location,X);break;default:n.vertexAttrib1fv(Z.location,X)}}}}M()}function S(){k();for(let R in a){let A=a[R];for(let z in A){let O=A[z];for(let V in O)x(O[V].object),delete O[V];delete A[z]}delete a[R]}}function E(R){if(a[R.id]===void 0)return;let A=a[R.id];for(let z in A){let O=A[z];for(let V in O)x(O[V].object),delete O[V];delete A[z]}delete a[R.id]}function N(R){for(let A in a){let z=a[A];if(z[R.id]===void 0)continue;let O=z[R.id];for(let V in O)x(O[V].object),delete O[V];delete z[R.id]}}function k(){P(),h=!0,c!==l&&(c=l,g(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:P,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:w,disableUnusedAttributes:M}}function Rv(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,f){n.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,p){if(p===0)return;let g,x;if(s)g=n,x="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](r,h,f,p),t.update(f,r,p)}function c(h,f,p){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<p;x++)this.render(h[x],f[x]);else{g.multiDrawArraysWEBGL(r,h,0,f,0,p);let x=0;for(let m=0;m<p;m++)x+=f[m];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Cv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,w=o||e.has("OES_texture_float"),U=_&&w,M=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:w,floatVertexTextures:U,maxSamples:M}}function Pv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ii,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let g=f.length!==0||p||i!==0||s;return s=p,i=f.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,g){let x=f.clippingPlanes,m=f.clipIntersection,d=f.clipShadows,u=n.get(f);if(!s||x===null||x.length===0||r&&!d)r?h(null):c();else{let v=r?0:i,_=v*4,w=u.clippingState||null;l.value=w,w=h(x,p,_,g);for(let U=0;U!==_;++U)w[U]=t[U];u.clippingState=w,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,g,x){let m=f!==null?f.length:0,d=null;if(m!==0){if(d=l.value,x!==!0||d===null){let u=g+m*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<u)&&(d=new Float32Array(u));for(let _=0,w=g;_!==m;++_,w+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(d,w),d[w+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,d}}function Lv(n){let e=new WeakMap;function t(o,a){return a===uh?o.mapping=Ar:a===dh&&(o.mapping=Rr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===uh||a===dh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function Iv(n){let e=[],t=[],i=[],s=n,r=n-Sr+1+_f.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Sr?l=_f[o-n+Sr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,x=6,m=3,d=2,u=1,v=new Float32Array(m*x*g),_=new Float32Array(d*x*g),w=new Float32Array(u*x*g);for(let M=0;M<g;M++){let y=M%3*2/3-1,b=M>2?0:-1,S=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];v.set(S,m*x*M),_.set(p,d*x*M);let E=[M,M,M,M,M,M];w.set(E,u*x*M)}let U=new Kt;U.setAttribute("position",new _n(v,m)),U.setAttribute("uv",new _n(_,d)),U.setAttribute("faceIndex",new _n(w,u)),e.push(U),s>Sr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mf(n,e,t){let i=new An(n,e,t);return i.texture.mapping=yl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Dv(n,e,t){let i=new Float32Array(Ps),s=new H(0,1,0);return new Qt({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cu(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Sf(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ef(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function Uv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===uh||l===dh,h=l===Ar||l===Rr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ir(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Ir(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Nv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zv(n,e,t,i){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let m=p.morphAttributes[x];for(let d=0,u=m.length;d<u;d++)e.remove(m[d])}p.removeEventListener("dispose",o),delete s[p.id];let g=r.get(p);g&&(e.remove(g),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let x in p)e.update(p[x],n.ARRAY_BUFFER);let g=f.morphAttributes;for(let x in g){let m=g[x];for(let d=0,u=m.length;d<u;d++)e.update(m[d],n.ARRAY_BUFFER)}}function c(f){let p=[],g=f.index,x=f.attributes.position,m=0;if(g!==null){let v=g.array;m=g.version;for(let _=0,w=v.length;_<w;_+=3){let U=v[_+0],M=v[_+1],y=v[_+2];p.push(U,M,M,y,y,U)}}else if(x!==void 0){let v=x.array;m=x.version;for(let _=0,w=v.length/3-1;_<w;_+=3){let U=_+0,M=_+1,y=_+2;p.push(U,M,M,y,y,U)}}else return;let d=new(up(p)?Qa:Ka)(p,1);d.version=m;let u=r.get(f);u&&e.remove(u),r.set(f,d)}function h(f){let p=r.get(f);if(p){let g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Ov(n,e,t,i){let s=i.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,x){n.drawElements(r,x,a,g*l),t.update(x,r,1)}function f(g,x,m){if(m===0)return;let d,u;if(s)d=n,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](r,x,a,g*l,m),t.update(x,r,m)}function p(g,x,m){if(m===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<m;u++)this.render(g[u]/l,x[u]);else{d.multiDrawElementsWEBGL(r,x,0,a,g,0,m);let u=0;for(let v=0;v<m;v++)u+=x[v];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function Fv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Bv(n,e){return n[0]-e[0]}function Hv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function kv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Lt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0,m=r.get(h);if(m===void 0||m.count!==x){let R=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",R)};m!==void 0&&m.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,U=h.morphAttributes.position||[],M=h.morphAttributes.normal||[],y=h.morphAttributes.color||[],b=0;v===!0&&(b=1),_===!0&&(b=2),w===!0&&(b=3);let S=h.attributes.position.count*b,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let N=new Float32Array(S*E*4*x),k=new Ya(N,S,E,x);k.type=ji,k.needsUpdate=!0;let P=b*4;for(let A=0;A<x;A++){let z=U[A],O=M[A],V=y[A],W=S*E*4*A;for(let L=0;L<z.count;L++){let G=L*P;v===!0&&(o.fromBufferAttribute(z,L),N[W+G+0]=o.x,N[W+G+1]=o.y,N[W+G+2]=o.z,N[W+G+3]=0),_===!0&&(o.fromBufferAttribute(O,L),N[W+G+4]=o.x,N[W+G+5]=o.y,N[W+G+6]=o.z,N[W+G+7]=0),w===!0&&(o.fromBufferAttribute(V,L),N[W+G+8]=o.x,N[W+G+9]=o.y,N[W+G+10]=o.z,N[W+G+11]=V.itemSize===4?o.w:1)}}m={count:x,texture:k,size:new he(S,E)},r.set(h,m),h.addEventListener("dispose",R)}let d=0;for(let v=0;v<p.length;v++)d+=p[v];let u=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",u),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{let g=p===void 0?0:p.length,x=i[h.id];if(x===void 0||x.length!==g){x=[];for(let _=0;_<g;_++)x[_]=[_,0];i[h.id]=x}for(let _=0;_<g;_++){let w=x[_];w[0]=_,w[1]=p[_]}x.sort(Hv);for(let _=0;_<8;_++)_<g&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(Bv);let m=h.morphAttributes.position,d=h.morphAttributes.normal,u=0;for(let _=0;_<8;_++){let w=a[_],U=w[0],M=w[1];U!==Number.MAX_SAFE_INTEGER&&M?(m&&h.getAttribute("morphTarget"+_)!==m[U]&&h.setAttribute("morphTarget"+_,m[U]),d&&h.getAttribute("morphNormal"+_)!==d[U]&&h.setAttribute("morphNormal"+_,d[U]),s[_]=M,u+=M):(m&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),d&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Gv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Br(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function en(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function tn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sl(n,e){let t=wf[e];t===void 0&&(t=new Int32Array(e),wf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2fv(this.addr,e),tn(t,e)}}function Xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;n.uniform3fv(this.addr,e),tn(t,e)}}function qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4fv(this.addr,e),tn(t,e)}}function Yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Rf.set(i),n.uniformMatrix2fv(this.addr,!1,Rf),tn(t,i)}}function Zv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Af.set(i),n.uniformMatrix3fv(this.addr,!1,Af),tn(t,i)}}function $v(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(en(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,i))return;Tf.set(i),n.uniformMatrix4fv(this.addr,!1,Tf),tn(t,i)}}function Jv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Kv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2iv(this.addr,e),tn(t,e)}}function Qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3iv(this.addr,e),tn(t,e)}}function jv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4iv(this.addr,e),tn(t,e)}}function ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;n.uniform2uiv(this.addr,e),tn(t,e)}}function ny(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;n.uniform3uiv(this.addr,e),tn(t,e)}}function iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;n.uniform4uiv(this.addr,e),tn(t,e)}}function sy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?gp:mp;t.setTexture2D(e||r,s)}function ry(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_p,s)}function oy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||vp,s)}function ay(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xp,s)}function ly(n){switch(n){case 5126:return Vv;case 35664:return Wv;case 35665:return Xv;case 35666:return qv;case 35674:return Yv;case 35675:return Zv;case 35676:return $v;case 5124:case 35670:return Jv;case 35667:case 35671:return Kv;case 35668:case 35672:return Qv;case 35669:case 35673:return jv;case 5125:return ey;case 36294:return ty;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ry;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ay}}function cy(n,e){n.uniform1fv(this.addr,e)}function hy(n,e){let t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function uy(n,e){let t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function dy(n,e){let t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function fy(n,e){let t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function py(n,e){let t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function my(n,e){let t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gy(n,e){n.uniform1iv(this.addr,e)}function xy(n,e){n.uniform2iv(this.addr,e)}function _y(n,e){n.uniform3iv(this.addr,e)}function vy(n,e){n.uniform4iv(this.addr,e)}function yy(n,e){n.uniform1uiv(this.addr,e)}function My(n,e){n.uniform2uiv(this.addr,e)}function Sy(n,e){n.uniform3uiv(this.addr,e)}function Ey(n,e){n.uniform4uiv(this.addr,e)}function by(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mp,r[o])}function wy(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_p,r[o])}function Ty(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||vp,r[o])}function Ay(n,e,t){let i=this.cache,s=e.length,r=Sl(t,s);en(i,r)||(n.uniform1iv(this.addr,r),tn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xp,r[o])}function Ry(n){switch(n){case 5126:return cy;case 35664:return hy;case 35665:return uy;case 35666:return dy;case 35674:return fy;case 35675:return py;case 35676:return my;case 5124:case 35670:return gy;case 35667:case 35671:return xy;case 35668:case 35672:return _y;case 35669:case 35673:return vy;case 5125:return yy;case 36294:return My;case 36295:return Sy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ay}}function Cf(n,e){n.seq.push(e),n.map[e.id]=e}function Cy(n,e,t){let i=n.name,s=i.length;for(nh.lastIndex=0;;){let r=nh.exec(i),o=nh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Cf(t,c===void 0?new Mh(a,n,e):new Sh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Eh(a),Cf(t,f)),t=f}}}function Pf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Iy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Dy(n){let e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n),i;switch(e===t?i="":e===ka&&t===Ha?i="LinearDisplayP3ToLinearSRGB":e===Ha&&t===ka&&(i="LinearSRGBToLinearDisplayP3"),n){case Oi:case Ml:return[i,"LinearTransferOETF"];case vt:case lu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Lf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Iy(n.getShaderSource(e),o)}else return s}function Uy(n,e){let t=Dy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ny(n,e){let t;switch(e){case iu:t="Linear";break;case su:t="Reinhard";break;case ru:t="OptimizedCineon";break;case Uo:t="ACESFilmic";break;case ou:t="AgX";break;case rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function Oy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Er).join(`
`)}function Fy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function By(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Er(n){return n!==""}function If(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function bh(n){return n.replace(Hy,Gy)}function Gy(n,e){let t=je[e];if(t===void 0){let i=ky.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bh(t)}function Uf(n){return n.replace(Vy,Wy)}function Wy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function qy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ar:case Rr:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Rr&&(e="ENVMAP_MODE_REFRACTION"),e}function Zy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case jf:e="ENVMAP_BLENDING_MULTIPLY";break;case ig:e="ENVMAP_BLENDING_MIX";break;case sg:e="ENVMAP_BLENDING_ADD";break}return e}function $y(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Jy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Xy(t),c=qy(t),h=Yy(t),f=Zy(t),p=$y(t),g=t.isWebGL2?"":zy(t),x=Oy(t),m=Fy(r),d=s.createProgram(),u,v,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Er).join(`
`),u.length>0&&(u+=`
`),v=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Er).join(`
`),v.length>0&&(v+=`
`)):(u=[Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),v=[g,Nf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?je.tonemapping_pars_fragment:"",t.toneMapping!==ts?Ny("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Uy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=bh(o),o=If(o,t),o=Df(o,t),a=bh(a),a=If(a,t),a=Df(a,t),o=Uf(o),a=Uf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=_+u+o,U=_+v+a,M=Pf(s,s.VERTEX_SHADER,w),y=Pf(s,s.FRAGMENT_SHADER,U);s.attachShader(d,M),s.attachShader(d,y),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function b(k){if(n.debug.checkShaderErrors){let P=s.getProgramInfoLog(d).trim(),R=s.getShaderInfoLog(M).trim(),A=s.getShaderInfoLog(y).trim(),z=!0,O=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,M,y);else{let V=Lf(s,M,"vertex"),W=Lf(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+V+`
`+W)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(R===""||A==="")&&(O=!1);O&&(k.diagnostics={runnable:z,programLog:P,vertexShader:{log:R,prefix:u},fragmentShader:{log:A,prefix:v}})}s.deleteShader(M),s.deleteShader(y),S=new Tr(s,d),E=By(s,d)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(d,Py)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=M,this.fragmentShader=y,this}function Qy(n,e,t,i,s,r,o){let a=new Ja,l=new wh,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return S===0?"uv":`uv${S}`}function d(S,E,N,k,P){let R=k.fog,A=P.geometry,z=S.isMeshStandardMaterial?k.environment:null,O=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),V=O&&O.mapping===yl?O.image.height:null,W=x[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let L=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,G=L!==void 0?L.length:0,Z=0;A.morphAttributes.position!==void 0&&(Z=1),A.morphAttributes.normal!==void 0&&(Z=2),A.morphAttributes.color!==void 0&&(Z=3);let I,X,K,le;if(W){let Ht=pi[W];I=Ht.vertexShader,X=Ht.fragmentShader}else I=S.vertexShader,X=S.fragmentShader,l.update(S),K=l.getVertexShaderID(S),le=l.getFragmentShaderID(S);let xe=n.getRenderTarget(),we=P.isInstancedMesh===!0,Ae=P.isBatchedMesh===!0,Ee=!!S.map,Oe=!!S.matcap,B=!!O,me=!!S.aoMap,te=!!S.lightMap,ge=!!S.bumpMap,ne=!!S.normalMap,Ue=!!S.displacementMap,be=!!S.emissiveMap,C=!!S.metalnessMap,T=!!S.roughnessMap,q=S.anisotropy>0,de=S.clearcoat>0,ce=S.iridescence>0,ae=S.sheen>0,ze=S.transmission>0,ye=q&&!!S.anisotropyMap,Pe=de&&!!S.clearcoatMap,He=de&&!!S.clearcoatNormalMap,Xe=de&&!!S.clearcoatRoughnessMap,fe=ce&&!!S.iridescenceMap,Ke=ce&&!!S.iridescenceThicknessMap,Qe=ae&&!!S.sheenColorMap,ke=ae&&!!S.sheenRoughnessMap,Be=!!S.specularMap,De=!!S.specularColorMap,Ze=!!S.specularIntensityMap,ht=ze&&!!S.transmissionMap,ue=ze&&!!S.thicknessMap,pe=!!S.gradientMap,j=!!S.alphaMap,F=S.alphaTest>0,se=!!S.alphaHash,oe=!!S.extensions,Se=!!A.attributes.uv1,Re=!!A.attributes.uv2,qe=!!A.attributes.uv3,at=ts;return S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(at=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:I,fragmentShader:X,defines:S.defines,customVertexShaderID:K,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Ae,instancing:we,instancingColor:we&&P.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Oi,map:Ee,matcap:Oe,envMap:B,envMapMode:B&&O.mapping,envMapCubeUVHeight:V,aoMap:me,lightMap:te,bumpMap:ge,normalMap:ne,displacementMap:p&&Ue,emissiveMap:be,normalMapObjectSpace:ne&&S.normalMapType===xg,normalMapTangentSpace:ne&&S.normalMapType===cp,metalnessMap:C,roughnessMap:T,anisotropy:q,anisotropyMap:ye,clearcoat:de,clearcoatMap:Pe,clearcoatNormalMap:He,clearcoatRoughnessMap:Xe,iridescence:ce,iridescenceMap:fe,iridescenceThicknessMap:Ke,sheen:ae,sheenColorMap:Qe,sheenRoughnessMap:ke,specularMap:Be,specularColorMap:De,specularIntensityMap:Ze,transmission:ze,transmissionMap:ht,thicknessMap:ue,gradientMap:pe,opaque:S.transparent===!1&&S.blending===es,alphaMap:j,alphaTest:F,alphaHash:se,combine:S.combine,mapUv:Ee&&m(S.map.channel),aoMapUv:me&&m(S.aoMap.channel),lightMapUv:te&&m(S.lightMap.channel),bumpMapUv:ge&&m(S.bumpMap.channel),normalMapUv:ne&&m(S.normalMap.channel),displacementMapUv:Ue&&m(S.displacementMap.channel),emissiveMapUv:be&&m(S.emissiveMap.channel),metalnessMapUv:C&&m(S.metalnessMap.channel),roughnessMapUv:T&&m(S.roughnessMap.channel),anisotropyMapUv:ye&&m(S.anisotropyMap.channel),clearcoatMapUv:Pe&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:He&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(S.sheenRoughnessMap.channel),specularMapUv:Be&&m(S.specularMap.channel),specularColorMapUv:De&&m(S.specularColorMap.channel),specularIntensityMapUv:Ze&&m(S.specularIntensityMap.channel),transmissionMapUv:ht&&m(S.transmissionMap.channel),thicknessMapUv:ue&&m(S.thicknessMap.channel),alphaMapUv:j&&m(S.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(ne||q),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:Se,vertexUv2s:Re,vertexUv3s:qe,pointsUvs:P.isPoints===!0&&!!A.attributes.uv&&(Ee||j),fog:!!R,useFog:S.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:P.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ee&&S.map.isVideoTexture===!0&&gt.getTransfer(S.map.colorSpace)===Et,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wt,flipSided:S.side===on,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:oe&&S.extensions.derivatives===!0,extensionFragDepth:oe&&S.extensions.fragDepth===!0,extensionDrawBuffers:oe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:oe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:oe&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(v(E,S),_(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function _(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function w(S){let E=x[S.type],N;if(E){let k=pi[E];N=as.clone(k.uniforms)}else N=S.uniforms;return N}function U(S,E){let N;for(let k=0,P=c.length;k<P;k++){let R=c[k];if(R.cacheKey===E){N=R,++N.usedTimes;break}}return N===void 0&&(N=new Jy(n,E,S,r),c.push(N)),N}function M(S){if(--S.usedTimes===0){let E=c.indexOf(S);c[E]=c[c.length-1],c.pop(),S.destroy()}}function y(S){l.remove(S)}function b(){l.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:w,acquireProgram:U,releaseProgram:M,releaseShaderCache:y,programs:c,dispose:b}}function jy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function eM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Of(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,p,g,x,m,d){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:g,groupOrder:x,renderOrder:f.renderOrder,z:m,group:d},n[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=g,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=m,u.group=d),e++,u}function a(f,p,g,x,m,d){let u=o(f,p,g,x,m,d);g.transmission>0?i.push(u):g.transparent===!0?s.push(u):t.push(u)}function l(f,p,g,x,m,d){let u=o(f,p,g,x,m,d);g.transmission>0?i.unshift(u):g.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,p){t.length>1&&t.sort(f||eM),i.length>1&&i.sort(p||zf),s.length>1&&s.sort(p||zf)}function h(){for(let f=e,p=n.length;f<p;f++){let g=n[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function tM(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Of,n.set(i,[o])):s>=r.length?(o=new Of,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function nM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Ne};break;case"SpotLight":t={position:new H,direction:new H,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function iM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function rM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function oM(n,e){let t=new nM,i=iM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new H);let r=new H,o=new ut,a=new ut;function l(h,f){let p=0,g=0,x=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let m=0,d=0,u=0,v=0,_=0,w=0,U=0,M=0,y=0,b=0,S=0;h.sort(rM);let E=f===!0?Math.PI:1;for(let k=0,P=h.length;k<P;k++){let R=h[k],A=R.color,z=R.intensity,O=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=A.r*z*E,g+=A.g*z*E,x+=A.b*z*E;else if(R.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(R.sh.coefficients[W],z);S++}else if(R.isDirectionalLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*E),R.castShadow){let L=R.shadow,G=i.get(R);G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,s.directionalShadow[m]=G,s.directionalShadowMap[m]=V,s.directionalShadowMatrix[m]=R.shadow.matrix,w++}s.directional[m]=W,m++}else if(R.isSpotLight){let W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(A).multiplyScalar(z*E),W.distance=O,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,s.spot[u]=W;let L=R.shadow;if(R.map&&(s.spotLightMap[y]=R.map,y++,L.updateMatrices(R),R.castShadow&&b++),s.spotLightMatrix[u]=L.matrix,R.castShadow){let G=i.get(R);G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,s.spotShadow[u]=G,s.spotShadowMap[u]=V,M++}u++}else if(R.isRectAreaLight){let W=t.get(R);W.color.copy(A).multiplyScalar(z),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),s.rectArea[v]=W,v++}else if(R.isPointLight){let W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*E),W.distance=R.distance,W.decay=R.decay,R.castShadow){let L=R.shadow,G=i.get(R);G.shadowBias=L.bias,G.shadowNormalBias=L.normalBias,G.shadowRadius=L.radius,G.shadowMapSize=L.mapSize,G.shadowCameraNear=L.camera.near,G.shadowCameraFar=L.camera.far,s.pointShadow[d]=G,s.pointShadowMap[d]=V,s.pointShadowMatrix[d]=R.shadow.matrix,U++}s.point[d]=W,d++}else if(R.isHemisphereLight){let W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(z*E),W.groundColor.copy(R.groundColor).multiplyScalar(z*E),s.hemi[_]=W,_++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_FLOAT_1,s.rectAreaLTC2=Me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Me.LTC_HALF_1,s.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=g,s.ambient[2]=x;let N=s.hash;(N.directionalLength!==m||N.pointLength!==d||N.spotLength!==u||N.rectAreaLength!==v||N.hemiLength!==_||N.numDirectionalShadows!==w||N.numPointShadows!==U||N.numSpotShadows!==M||N.numSpotMaps!==y||N.numLightProbes!==S)&&(s.directional.length=m,s.spot.length=u,s.rectArea.length=v,s.point.length=d,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=M,s.spotShadowMap.length=M,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=M+y-b,s.spotLightMap.length=y,s.numSpotLightShadowsWithMaps=b,s.numLightProbes=S,N.directionalLength=m,N.pointLength=d,N.spotLength=u,N.rectAreaLength=v,N.hemiLength=_,N.numDirectionalShadows=w,N.numPointShadows=U,N.numSpotShadows=M,N.numSpotMaps=y,N.numLightProbes=S,s.version=sM++)}function c(h,f){let p=0,g=0,x=0,m=0,d=0,u=f.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let w=h[v];if(w.isDirectionalLight){let U=s.directional[p];U.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(u),p++}else if(w.isSpotLight){let U=s.spot[x];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(u),U.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(u),x++}else if(w.isRectAreaLight){let U=s.rectArea[m];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(a),U.halfHeight.applyMatrix4(a),m++}else if(w.isPointLight){let U=s.point[g];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(u),g++}else if(w.isHemisphereLight){let U=s.hemi[d];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(u),d++}}}return{setup:l,setupView:c,state:s}}function Ff(n,e){let t=new oM(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aM(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Ff(n,e),t.set(r,[l])):o>=a.length?(l=new Ff(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function hM(n,e,t){let i=new bo,s=new he,r=new he,o=new Lt,a=new Ah({depthPacking:gg}),l=new Rh,c={},h=t.maxTextureSize,f={[is]:on,[on]:is,[wt]:wt},p=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:lM,fragmentShader:cM}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let x=new Kt;x.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new ie(x,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let u=this.type;this.render=function(M,y,b){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||M.length===0)return;let S=n.getRenderTarget(),E=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),k=n.state;k.setBlending(mi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let P=u!==Li&&this.type===Li,R=u===Li&&this.type!==Li;for(let A=0,z=M.length;A<z;A++){let O=M[A],V=O.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let W=V.getFrameExtents();if(s.multiply(W),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,V.mapSize.y=r.y)),V.map===null||P===!0||R===!0){let G=this.type!==Li?{minFilter:Tn,magFilter:Tn}:{};V.map!==null&&V.map.dispose(),V.map=new An(s.x,s.y,G),V.map.texture.name=O.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let L=V.getViewportCount();for(let G=0;G<L;G++){let Z=V.getViewport(G);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),k.viewport(o),V.updateMatrices(O,G),i=V.getFrustum(),w(y,b,V.camera,O,this.type)}V.isPointLightShadow!==!0&&this.type===Li&&v(V,b),V.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(S,E,N)};function v(M,y){let b=e.update(m);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,g.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new An(s.x,s.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(y,null,b,p,m,null),g.uniforms.shadow_pass.value=M.mapPass.texture,g.uniforms.resolution.value=M.mapSize,g.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(y,null,b,g,m,null)}function _(M,y,b,S){let E=null,N=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)E=N;else if(E=b.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let k=E.uuid,P=y.uuid,R=c[k];R===void 0&&(R={},c[k]=R);let A=R[P];A===void 0&&(A=E.clone(),R[P]=A,y.addEventListener("dispose",U)),E=A}if(E.visible=y.visible,E.wireframe=y.wireframe,S===Li?E.side=y.shadowSide!==null?y.shadowSide:y.side:E.side=y.shadowSide!==null?y.shadowSide:f[y.side],E.alphaMap=y.alphaMap,E.alphaTest=y.alphaTest,E.map=y.map,E.clipShadows=y.clipShadows,E.clippingPlanes=y.clippingPlanes,E.clipIntersection=y.clipIntersection,E.displacementMap=y.displacementMap,E.displacementScale=y.displacementScale,E.displacementBias=y.displacementBias,E.wireframeLinewidth=y.wireframeLinewidth,E.linewidth=y.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let k=n.properties.get(E);k.light=b}return E}function w(M,y,b,S,E){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&E===Li)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let P=e.update(M),R=M.material;if(Array.isArray(R)){let A=P.groups;for(let z=0,O=A.length;z<O;z++){let V=A[z],W=R[V.materialIndex];if(W&&W.visible){let L=_(M,W,S,E);M.onBeforeShadow(n,M,y,b,P,L,V),n.renderBufferDirect(b,null,P,L,M,V),M.onAfterShadow(n,M,y,b,P,L,V)}}}else if(R.visible){let A=_(M,R,S,E);M.onBeforeShadow(n,M,y,b,P,A,null),n.renderBufferDirect(b,null,P,A,M,null),M.onAfterShadow(n,M,y,b,P,A,null)}}let k=M.children;for(let P=0,R=k.length;P<R;P++)w(k[P],y,b,S,E)}function U(M){M.target.removeEventListener("dispose",U);for(let b in c){let S=c[b],E=M.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function uM(n,e,t){let i=t.isWebGL2;function s(){let F=!1,se=new Lt,oe=null,Se=new Lt(0,0,0,0);return{setMask:function(Re){oe!==Re&&!F&&(n.colorMask(Re,Re,Re,Re),oe=Re)},setLocked:function(Re){F=Re},setClear:function(Re,qe,at,yt,Ht){Ht===!0&&(Re*=yt,qe*=yt,at*=yt),se.set(Re,qe,at,yt),Se.equals(se)===!1&&(n.clearColor(Re,qe,at,yt),Se.copy(se))},reset:function(){F=!1,oe=null,Se.set(-1,0,0,0)}}}function r(){let F=!1,se=null,oe=null,Se=null;return{setTest:function(Re){Re?Ae(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Re){se!==Re&&!F&&(n.depthMask(Re),se=Re)},setFunc:function(Re){if(oe!==Re){switch(Re){case J0:n.depthFunc(n.NEVER);break;case K0:n.depthFunc(n.ALWAYS);break;case Q0:n.depthFunc(n.LESS);break;case za:n.depthFunc(n.LEQUAL);break;case j0:n.depthFunc(n.EQUAL);break;case eg:n.depthFunc(n.GEQUAL);break;case tg:n.depthFunc(n.GREATER);break;case ng:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=Re}},setLocked:function(Re){F=Re},setClear:function(Re){Se!==Re&&(n.clearDepth(Re),Se=Re)},reset:function(){F=!1,se=null,oe=null,Se=null}}}function o(){let F=!1,se=null,oe=null,Se=null,Re=null,qe=null,at=null,yt=null,Ht=null;return{setTest:function(Ye){F||(Ye?Ae(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!F&&(n.stencilMask(Ye),se=Ye)},setFunc:function(Ye,mt,En){(oe!==Ye||Se!==mt||Re!==En)&&(n.stencilFunc(Ye,mt,En),oe=Ye,Se=mt,Re=En)},setOp:function(Ye,mt,En){(qe!==Ye||at!==mt||yt!==En)&&(n.stencilOp(Ye,mt,En),qe=Ye,at=mt,yt=En)},setLocked:function(Ye){F=Ye},setClear:function(Ye){Ht!==Ye&&(n.clearStencil(Ye),Ht=Ye)},reset:function(){F=!1,se=null,oe=null,Se=null,Re=null,qe=null,at=null,yt=null,Ht=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,p={},g={},x=new WeakMap,m=[],d=null,u=!1,v=null,_=null,w=null,U=null,M=null,y=null,b=null,S=new Ne(0,0,0),E=0,N=!1,k=null,P=null,R=null,A=null,z=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,W=0,L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),V=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),V=W>=2);let G=null,Z={},I=n.getParameter(n.SCISSOR_BOX),X=n.getParameter(n.VIEWPORT),K=new Lt().fromArray(I),le=new Lt().fromArray(X);function xe(F,se,oe,Se){let Re=new Uint8Array(4),qe=n.createTexture();n.bindTexture(F,qe),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<oe;at++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,Re):n.texImage2D(se+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Re);return qe}let we={};we[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(n.DEPTH_TEST),l.setFunc(za),be(!1),C(_d),Ae(n.CULL_FACE),ne(mi);function Ae(F){p[F]!==!0&&(n.enable(F),p[F]=!0)}function Ee(F){p[F]!==!1&&(n.disable(F),p[F]=!1)}function Oe(F,se){return g[F]!==se?(n.bindFramebuffer(F,se),g[F]=se,i&&(F===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=se),F===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function B(F,se){let oe=m,Se=!1;if(F)if(oe=x.get(se),oe===void 0&&(oe=[],x.set(se,oe)),F.isWebGLMultipleRenderTargets){let Re=F.texture;if(oe.length!==Re.length||oe[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,at=Re.length;qe<at;qe++)oe[qe]=n.COLOR_ATTACHMENT0+qe;oe.length=Re.length,Se=!0}}else oe[0]!==n.COLOR_ATTACHMENT0&&(oe[0]=n.COLOR_ATTACHMENT0,Se=!0);else oe[0]!==n.BACK&&(oe[0]=n.BACK,Se=!0);Se&&(t.isWebGL2?n.drawBuffers(oe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(oe))}function me(F){return d!==F?(n.useProgram(F),d=F,!0):!1}let te={[Cs]:n.FUNC_ADD,[N0]:n.FUNC_SUBTRACT,[z0]:n.FUNC_REVERSE_SUBTRACT};if(i)te[Md]=n.MIN,te[Sd]=n.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(te[Md]=F.MIN_EXT,te[Sd]=F.MAX_EXT)}let ge={[O0]:n.ZERO,[F0]:n.ONE,[B0]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[X0]:n.SRC_ALPHA_SATURATE,[V0]:n.DST_COLOR,[k0]:n.DST_ALPHA,[H0]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[W0]:n.ONE_MINUS_DST_COLOR,[G0]:n.ONE_MINUS_DST_ALPHA,[q0]:n.CONSTANT_COLOR,[Y0]:n.ONE_MINUS_CONSTANT_COLOR,[Z0]:n.CONSTANT_ALPHA,[$0]:n.ONE_MINUS_CONSTANT_ALPHA};function ne(F,se,oe,Se,Re,qe,at,yt,Ht,Ye){if(F===mi){u===!0&&(Ee(n.BLEND),u=!1);return}if(u===!1&&(Ae(n.BLEND),u=!0),F!==U0){if(F!==v||Ye!==N){if((_!==Cs||M!==Cs)&&(n.blendEquation(n.FUNC_ADD),_=Cs,M=Cs),Ye)switch(F){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gt:n.blendFunc(n.ONE,n.ONE);break;case vd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,U=null,y=null,b=null,S.set(0,0,0),E=0,v=F,N=Ye}return}Re=Re||se,qe=qe||oe,at=at||Se,(se!==_||Re!==M)&&(n.blendEquationSeparate(te[se],te[Re]),_=se,M=Re),(oe!==w||Se!==U||qe!==y||at!==b)&&(n.blendFuncSeparate(ge[oe],ge[Se],ge[qe],ge[at]),w=oe,U=Se,y=qe,b=at),(yt.equals(S)===!1||Ht!==E)&&(n.blendColor(yt.r,yt.g,yt.b,Ht),S.copy(yt),E=Ht),v=F,N=!1}function Ue(F,se){F.side===wt?Ee(n.CULL_FACE):Ae(n.CULL_FACE);let oe=F.side===on;se&&(oe=!oe),be(oe),F.blending===es&&F.transparent===!1?ne(mi):ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let Se=F.stencilWrite;c.setTest(Se),Se&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),q(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ae(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(F){k!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),k=F)}function C(F){F!==L0?(Ae(n.CULL_FACE),F!==P&&(F===_d?n.cullFace(n.BACK):F===I0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),P=F}function T(F){F!==R&&(V&&n.lineWidth(F),R=F)}function q(F,se,oe){F?(Ae(n.POLYGON_OFFSET_FILL),(A!==se||z!==oe)&&(n.polygonOffset(se,oe),A=se,z=oe)):Ee(n.POLYGON_OFFSET_FILL)}function de(F){F?Ae(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function ce(F){F===void 0&&(F=n.TEXTURE0+O-1),G!==F&&(n.activeTexture(F),G=F)}function ae(F,se,oe){oe===void 0&&(G===null?oe=n.TEXTURE0+O-1:oe=G);let Se=Z[oe];Se===void 0&&(Se={type:void 0,texture:void 0},Z[oe]=Se),(Se.type!==F||Se.texture!==se)&&(G!==oe&&(n.activeTexture(oe),G=oe),n.bindTexture(F,se||we[F]),Se.type=F,Se.texture=se)}function ze(){let F=Z[G];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ye(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ze(F){K.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),K.copy(F))}function ht(F){le.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),le.copy(F))}function ue(F,se){let oe=f.get(se);oe===void 0&&(oe=new WeakMap,f.set(se,oe));let Se=oe.get(F);Se===void 0&&(Se=n.getUniformBlockIndex(se,F.name),oe.set(F,Se))}function pe(F,se){let Se=f.get(se).get(F);h.get(se)!==Se&&(n.uniformBlockBinding(se,Se,F.__bindingPointIndex),h.set(se,Se))}function j(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},G=null,Z={},g={},x=new WeakMap,m=[],d=null,u=!1,v=null,_=null,w=null,U=null,M=null,y=null,b=null,S=new Ne(0,0,0),E=0,N=!1,k=null,P=null,R=null,A=null,z=null,K.set(0,0,n.canvas.width,n.canvas.height),le.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ae,disable:Ee,bindFramebuffer:Oe,drawBuffers:B,useProgram:me,setBlending:ne,setMaterial:Ue,setFlipSided:be,setCullFace:C,setLineWidth:T,setPolygonOffset:q,setScissorTest:de,activeTexture:ce,bindTexture:ae,unbindTexture:ze,compressedTexImage2D:ye,compressedTexImage3D:Pe,texImage2D:Be,texImage3D:De,updateUBOMapping:ue,uniformBlockBinding:pe,texStorage2D:Qe,texStorage3D:ke,texSubImage2D:He,texSubImage3D:Xe,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ke,scissor:Ze,viewport:ht,reset:j}}function dM(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,T){return g?new OffscreenCanvas(C,T):Wa("canvas")}function m(C,T,q,de){let ce=1;if((C.width>de||C.height>de)&&(ce=de/Math.max(C.width,C.height)),ce<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let ae=T?gh:Math.floor,ze=ae(ce*C.width),ye=ae(ce*C.height);f===void 0&&(f=x(ze,ye));let Pe=q?x(ze,ye):f;return Pe.width=ze,Pe.height=ye,Pe.getContext("2d").drawImage(C,0,0,ze,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ze+"x"+ye+")."),Pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function d(C){return ef(C.width)&&ef(C.height)}function u(C){return a?!1:C.wrapS!==ii||C.wrapT!==ii||C.minFilter!==Tn&&C.minFilter!==Yn}function v(C,T){return C.generateMipmaps&&T&&C.minFilter!==Tn&&C.minFilter!==Yn}function _(C){n.generateMipmap(C)}function w(C,T,q,de,ce=!1){if(a===!1)return T;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=T;if(T===n.RED&&(q===n.FLOAT&&(ae=n.R32F),q===n.HALF_FLOAT&&(ae=n.R16F),q===n.UNSIGNED_BYTE&&(ae=n.R8)),T===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ae=n.R8UI),q===n.UNSIGNED_SHORT&&(ae=n.R16UI),q===n.UNSIGNED_INT&&(ae=n.R32UI),q===n.BYTE&&(ae=n.R8I),q===n.SHORT&&(ae=n.R16I),q===n.INT&&(ae=n.R32I)),T===n.RG&&(q===n.FLOAT&&(ae=n.RG32F),q===n.HALF_FLOAT&&(ae=n.RG16F),q===n.UNSIGNED_BYTE&&(ae=n.RG8)),T===n.RGBA){let ze=ce?Ba:gt.getTransfer(de);q===n.FLOAT&&(ae=n.RGBA32F),q===n.HALF_FLOAT&&(ae=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ae=ze===Et?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function U(C,T,q){return v(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==Tn&&C.minFilter!==Yn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function M(C){return C===Tn||C===Ed||C===Tc?n.NEAREST:n.LINEAR}function y(C){let T=C.target;T.removeEventListener("dispose",y),S(T),T.isVideoTexture&&h.delete(T)}function b(C){let T=C.target;T.removeEventListener("dispose",b),N(T)}function S(C){let T=i.get(C);if(T.__webglInit===void 0)return;let q=C.source,de=p.get(q);if(de){let ce=de[T.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&E(C),Object.keys(de).length===0&&p.delete(q)}i.remove(C)}function E(C){let T=i.get(C);n.deleteTexture(T.__webglTexture);let q=C.source,de=p.get(q);delete de[T.__cacheKey],o.memory.textures--}function N(C){let T=C.texture,q=i.get(C),de=i.get(T);if(de.__webglTexture!==void 0&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(q.__webglFramebuffer[ce]))for(let ae=0;ae<q.__webglFramebuffer[ce].length;ae++)n.deleteFramebuffer(q.__webglFramebuffer[ce][ae]);else n.deleteFramebuffer(q.__webglFramebuffer[ce]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[ce])}else{if(Array.isArray(q.__webglFramebuffer))for(let ce=0;ce<q.__webglFramebuffer.length;ce++)n.deleteFramebuffer(q.__webglFramebuffer[ce]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ce=0;ce<q.__webglColorRenderbuffer.length;ce++)q.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[ce]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ce=0,ae=T.length;ce<ae;ce++){let ze=i.get(T[ce]);ze.__webglTexture&&(n.deleteTexture(ze.__webglTexture),o.memory.textures--),i.remove(T[ce])}i.remove(T),i.remove(C)}let k=0;function P(){k=0}function R(){let C=k;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),k+=1,C}function A(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function z(C,T){let q=i.get(C);if(C.isVideoTexture&&Ue(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let de=C.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(q,C,T);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+T)}function O(C,T){let q=i.get(C);if(C.version>0&&q.__version!==C.version){K(q,C,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+T)}function V(C,T){let q=i.get(C);if(C.version>0&&q.__version!==C.version){K(q,C,T);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+T)}function W(C,T){let q=i.get(C);if(C.version>0&&q.__version!==C.version){le(q,C,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+T)}let L={[zi]:n.REPEAT,[ii]:n.CLAMP_TO_EDGE,[fh]:n.MIRRORED_REPEAT},G={[Tn]:n.NEAREST,[Ed]:n.NEAREST_MIPMAP_NEAREST,[Tc]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[og]:n.LINEAR_MIPMAP_NEAREST,[Eo]:n.LINEAR_MIPMAP_LINEAR},Z={[_g]:n.NEVER,[bg]:n.ALWAYS,[vg]:n.LESS,[hp]:n.LEQUAL,[yg]:n.EQUAL,[Eg]:n.GEQUAL,[Mg]:n.GREATER,[Sg]:n.NOTEQUAL};function I(C,T,q){if(q?(n.texParameteri(C,n.TEXTURE_WRAP_S,L[T.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,L[T.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,L[T.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,G[T.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,G[T.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==ii||T.wrapT!==ii)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,M(T.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,M(T.minFilter)),T.minFilter!==Tn&&T.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let de=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Tn||T.minFilter!==Tc&&T.minFilter!==Eo||T.type===ji&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(C,de.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function X(C,T){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",y));let de=T.source,ce=p.get(de);ce===void 0&&(ce={},p.set(de,ce));let ae=A(T);if(ae!==C.__cacheKey){ce[ae]===void 0&&(ce[ae]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ce[ae].usedTimes++;let ze=ce[C.__cacheKey];ze!==void 0&&(ce[C.__cacheKey].usedTimes--,ze.usedTimes===0&&E(T)),C.__cacheKey=ae,C.__webglTexture=ce[ae].texture}return q}function K(C,T,q){let de=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(de=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(de=n.TEXTURE_3D);let ce=X(C,T),ae=T.source;t.bindTexture(de,C.__webglTexture,n.TEXTURE0+q);let ze=i.get(ae);if(ae.version!==ze.__version||ce===!0){t.activeTexture(n.TEXTURE0+q);let ye=gt.getPrimaries(gt.workingColorSpace),Pe=T.colorSpace===Zn?null:gt.getPrimaries(T.colorSpace),He=T.colorSpace===Zn||ye===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Xe=u(T)&&d(T.image)===!1,fe=m(T.image,Xe,!1,s.maxTextureSize);fe=be(T,fe);let Ke=d(fe)||a,Qe=r.convert(T.format,T.colorSpace),ke=r.convert(T.type),Be=w(T.internalFormat,Qe,ke,T.colorSpace,T.isVideoTexture);I(de,T,Ke);let De,Ze=T.mipmaps,ht=a&&T.isVideoTexture!==!0&&Be!==ap,ue=ze.__version===void 0||ce===!0,pe=U(T,fe,Ke);if(T.isDepthTexture)Be=n.DEPTH_COMPONENT,a?T.type===ji?Be=n.DEPTH_COMPONENT32F:T.type===Qi?Be=n.DEPTH_COMPONENT24:T.type===Is?Be=n.DEPTH24_STENCIL8:Be=n.DEPTH_COMPONENT16:T.type===ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Ds&&Be===n.DEPTH_COMPONENT&&T.type!==au&&T.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Qi,ke=r.convert(T.type)),T.format===Cr&&Be===n.DEPTH_COMPONENT&&(Be=n.DEPTH_STENCIL,T.type!==Is&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Is,ke=r.convert(T.type))),ue&&(ht?t.texStorage2D(n.TEXTURE_2D,1,Be,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Be,fe.width,fe.height,0,Qe,ke,null));else if(T.isDataTexture)if(Ze.length>0&&Ke){ht&&ue&&t.texStorage2D(n.TEXTURE_2D,pe,Be,Ze[0].width,Ze[0].height);for(let j=0,F=Ze.length;j<F;j++)De=Ze[j],ht?t.texSubImage2D(n.TEXTURE_2D,j,0,0,De.width,De.height,Qe,ke,De.data):t.texImage2D(n.TEXTURE_2D,j,Be,De.width,De.height,0,Qe,ke,De.data);T.generateMipmaps=!1}else ht?(ue&&t.texStorage2D(n.TEXTURE_2D,pe,Be,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,Qe,ke,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Be,fe.width,fe.height,0,Qe,ke,fe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Be,Ze[0].width,Ze[0].height,fe.depth);for(let j=0,F=Ze.length;j<F;j++)De=Ze[j],T.format!==si?Qe!==null?ht?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,De.width,De.height,fe.depth,Qe,De.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Be,De.width,De.height,fe.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,De.width,De.height,fe.depth,Qe,ke,De.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Be,De.width,De.height,fe.depth,0,Qe,ke,De.data)}else{ht&&ue&&t.texStorage2D(n.TEXTURE_2D,pe,Be,Ze[0].width,Ze[0].height);for(let j=0,F=Ze.length;j<F;j++)De=Ze[j],T.format!==si?Qe!==null?ht?t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,De.width,De.height,Qe,De.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Be,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(n.TEXTURE_2D,j,0,0,De.width,De.height,Qe,ke,De.data):t.texImage2D(n.TEXTURE_2D,j,Be,De.width,De.height,0,Qe,ke,De.data)}else if(T.isDataArrayTexture)ht?(ue&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,Be,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Qe,ke,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,fe.width,fe.height,fe.depth,0,Qe,ke,fe.data);else if(T.isData3DTexture)ht?(ue&&t.texStorage3D(n.TEXTURE_3D,pe,Be,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Qe,ke,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,fe.width,fe.height,fe.depth,0,Qe,ke,fe.data);else if(T.isFramebufferTexture){if(ue)if(ht)t.texStorage2D(n.TEXTURE_2D,pe,Be,fe.width,fe.height);else{let j=fe.width,F=fe.height;for(let se=0;se<pe;se++)t.texImage2D(n.TEXTURE_2D,se,Be,j,F,0,Qe,ke,null),j>>=1,F>>=1}}else if(Ze.length>0&&Ke){ht&&ue&&t.texStorage2D(n.TEXTURE_2D,pe,Be,Ze[0].width,Ze[0].height);for(let j=0,F=Ze.length;j<F;j++)De=Ze[j],ht?t.texSubImage2D(n.TEXTURE_2D,j,0,0,Qe,ke,De):t.texImage2D(n.TEXTURE_2D,j,Be,Qe,ke,De);T.generateMipmaps=!1}else ht?(ue&&t.texStorage2D(n.TEXTURE_2D,pe,Be,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,ke,fe)):t.texImage2D(n.TEXTURE_2D,0,Be,Qe,ke,fe);v(T,Ke)&&_(de),ze.__version=ae.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function le(C,T,q){if(T.image.length!==6)return;let de=X(C,T),ce=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+q);let ae=i.get(ce);if(ce.version!==ae.__version||de===!0){t.activeTexture(n.TEXTURE0+q);let ze=gt.getPrimaries(gt.workingColorSpace),ye=T.colorSpace===Zn?null:gt.getPrimaries(T.colorSpace),Pe=T.colorSpace===Zn||ze===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let He=T.isCompressedTexture||T.image[0].isCompressedTexture,Xe=T.image[0]&&T.image[0].isDataTexture,fe=[];for(let j=0;j<6;j++)!He&&!Xe?fe[j]=m(T.image[j],!1,!0,s.maxCubemapSize):fe[j]=Xe?T.image[j].image:T.image[j],fe[j]=be(T,fe[j]);let Ke=fe[0],Qe=d(Ke)||a,ke=r.convert(T.format,T.colorSpace),Be=r.convert(T.type),De=w(T.internalFormat,ke,Be,T.colorSpace),Ze=a&&T.isVideoTexture!==!0,ht=ae.__version===void 0||de===!0,ue=U(T,Ke,Qe);I(n.TEXTURE_CUBE_MAP,T,Qe);let pe;if(He){Ze&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,De,Ke.width,Ke.height);for(let j=0;j<6;j++){pe=fe[j].mipmaps;for(let F=0;F<pe.length;F++){let se=pe[F];T.format!==si?ke!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,F,0,0,se.width,se.height,ke,se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,F,De,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,F,0,0,se.width,se.height,ke,Be,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,F,De,se.width,se.height,0,ke,Be,se.data)}}}else{pe=T.mipmaps,Ze&&ht&&(pe.length>0&&ue++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,De,fe[0].width,fe[0].height));for(let j=0;j<6;j++)if(Xe){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,fe[j].width,fe[j].height,ke,Be,fe[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,fe[j].width,fe[j].height,0,ke,Be,fe[j].data);for(let F=0;F<pe.length;F++){let oe=pe[F].image[j].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,F+1,0,0,oe.width,oe.height,ke,Be,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,F+1,De,oe.width,oe.height,0,ke,Be,oe.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ke,Be,fe[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,De,ke,Be,fe[j]);for(let F=0;F<pe.length;F++){let se=pe[F];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,F+1,0,0,ke,Be,se.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,F+1,De,ke,Be,se.image[j])}}}v(T,Qe)&&_(n.TEXTURE_CUBE_MAP),ae.__version=ce.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function xe(C,T,q,de,ce,ae){let ze=r.convert(q.format,q.colorSpace),ye=r.convert(q.type),Pe=w(q.internalFormat,ze,ye,q.colorSpace);if(!i.get(T).__hasExternalTextures){let Xe=Math.max(1,T.width>>ae),fe=Math.max(1,T.height>>ae);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,ae,Pe,Xe,fe,T.depth,0,ze,ye,null):t.texImage2D(ce,ae,Pe,Xe,fe,0,ze,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ne(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,ce,i.get(q).__webglTexture,0,ge(T)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,de,ce,i.get(q).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(C,T,q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let de=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||ne(T)){let ce=T.depthTexture;ce&&ce.isDepthTexture&&(ce.type===ji?de=n.DEPTH_COMPONENT32F:ce.type===Qi&&(de=n.DEPTH_COMPONENT24));let ae=ge(T);ne(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,de,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,de,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,de,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){let de=ge(T);q&&ne(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,T.width,T.height):ne(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let de=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ce=0;ce<de.length;ce++){let ae=de[ce],ze=r.convert(ae.format,ae.colorSpace),ye=r.convert(ae.type),Pe=w(ae.internalFormat,ze,ye,ae.colorSpace),He=ge(T);q&&ne(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Pe,T.width,T.height):ne(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,Pe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),z(T.depthTexture,0);let de=i.get(T.depthTexture).__webglTexture,ce=ge(T);if(T.depthTexture.format===Ds)ne(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,de,0);else if(T.depthTexture.format===Cr)ne(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,de,0);else throw new Error("Unknown depthTexture format")}function Ee(C){let T=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,C)}else if(q){T.__webglDepthbuffer=[];for(let de=0;de<6;de++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[de]),T.__webglDepthbuffer[de]=n.createRenderbuffer(),we(T.__webglDepthbuffer[de],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),we(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(C,T,q){let de=i.get(C);T!==void 0&&xe(de.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ee(C)}function B(C){let T=C.texture,q=i.get(C),de=i.get(T);C.addEventListener("dispose",b),C.isWebGLMultipleRenderTargets!==!0&&(de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture()),de.__version=T.version,o.memory.textures++);let ce=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,ze=d(C)||a;if(ce){q.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(a&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[ye]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)q.__webglFramebuffer[ye][Pe]=n.createFramebuffer()}else q.__webglFramebuffer[ye]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let ye=0;ye<T.mipmaps.length;ye++)q.__webglFramebuffer[ye]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(ae)if(s.drawBuffers){let ye=C.texture;for(let Pe=0,He=ye.length;Pe<He;Pe++){let Xe=i.get(ye[Pe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ne(C)===!1){let ye=ae?T:[T];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ye.length;Pe++){let He=ye[Pe];q.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Pe]);let Xe=r.convert(He.format,He.colorSpace),fe=r.convert(He.type),Ke=w(He.internalFormat,Xe,fe,He.colorSpace,C.isXRRenderTarget===!0),Qe=ge(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Ke,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,q.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),we(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,de.__webglTexture),I(n.TEXTURE_CUBE_MAP,T,ze);for(let ye=0;ye<6;ye++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)xe(q.__webglFramebuffer[ye][Pe],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe);else xe(q.__webglFramebuffer[ye],C,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);v(T,ze)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){let ye=C.texture;for(let Pe=0,He=ye.length;Pe<He;Pe++){let Xe=ye[Pe],fe=i.get(Xe);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),I(n.TEXTURE_2D,Xe,ze),xe(q.__webglFramebuffer,C,Xe,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),v(Xe,ze)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let ye=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ye=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,de.__webglTexture),I(ye,T,ze),a&&T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)xe(q.__webglFramebuffer[Pe],C,T,n.COLOR_ATTACHMENT0,ye,Pe);else xe(q.__webglFramebuffer,C,T,n.COLOR_ATTACHMENT0,ye,0);v(T,ze)&&_(ye),t.unbindTexture()}C.depthBuffer&&Ee(C)}function me(C){let T=d(C)||a,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let de=0,ce=q.length;de<ce;de++){let ae=q[de];if(v(ae,T)){let ze=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(ae).__webglTexture;t.bindTexture(ze,ye),_(ze),t.unbindTexture()}}}function te(C){if(a&&C.samples>0&&ne(C)===!1){let T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,de=C.height,ce=n.COLOR_BUFFER_BIT,ae=[],ze=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(C),Pe=C.isWebGLMultipleRenderTargets===!0;if(Pe)for(let He=0;He<T.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let He=0;He<T.length;He++){ae.push(n.COLOR_ATTACHMENT0+He),C.depthBuffer&&ae.push(ze);let Xe=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Xe===!1&&(C.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[He]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ze]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ze])),Pe){let fe=i.get(T[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,q,de,0,0,q,de,ce,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let He=0;He<T.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,ye.__webglColorRenderbuffer[He]);let Xe=i.get(T[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function ge(C){return Math.min(s.maxSamples,C.samples)}function ne(C){let T=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ue(C){let T=o.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function be(C,T){let q=C.colorSpace,de=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===mh||q!==Oi&&q!==Zn&&(gt.getTransfer(q)===Et?a===!1?e.has("EXT_sRGB")===!0&&de===si?(C.format=mh,C.minFilter=Yn,C.generateMipmaps=!1):T=Xa.sRGBToLinear(T):(de!==si||ce!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}this.allocateTextureUnit=R,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=Oe,this.setupRenderTarget=B,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ne}function fM(n,e,t){let i=t.isWebGL2;function s(r,o=Zn){let a,l=gt.getTransfer(o);if(r===ns)return n.UNSIGNED_BYTE;if(r===np)return n.UNSIGNED_SHORT_4_4_4_4;if(r===ip)return n.UNSIGNED_SHORT_5_5_5_1;if(r===ag)return n.BYTE;if(r===lg)return n.SHORT;if(r===au)return n.UNSIGNED_SHORT;if(r===tp)return n.INT;if(r===Qi)return n.UNSIGNED_INT;if(r===ji)return n.FLOAT;if(r===ri)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===cg)return n.ALPHA;if(r===si)return n.RGBA;if(r===hg)return n.LUMINANCE;if(r===ug)return n.LUMINANCE_ALPHA;if(r===Ds)return n.DEPTH_COMPONENT;if(r===Cr)return n.DEPTH_STENCIL;if(r===mh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===dg)return n.RED;if(r===sp)return n.RED_INTEGER;if(r===fg)return n.RG;if(r===rp)return n.RG_INTEGER;if(r===op)return n.RGBA_INTEGER;if(r===Ac||r===Rc||r===Cc||r===Pc)if(l===Et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Rc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bd||r===wd||r===Td||r===Ad)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===bd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Td)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ad)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ap)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Rd||r===Cd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Rd)return l===Et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Cd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Pd||r===Ld||r===Id||r===Dd||r===Ud||r===Nd||r===zd||r===Od||r===Fd||r===Bd||r===Hd||r===kd||r===Gd||r===Vd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Pd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ld)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Id)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Dd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ud)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===zd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Od)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Gd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Vd)return l===Et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lc||r===Wd||r===Xd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Lc)return l===Et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pg||r===qd||r===Yd||r===Zd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Lc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===qd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Is?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function mM(n,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,fp(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,v,_,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&g(d,u,w)):u.isMeshMatcapMaterial?(r(d,u),x(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),m(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?l(d,u,v,_):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===on&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===on&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let v=e.get(u).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*_,t(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,v,_){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*v,d.scale.value=_*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),e.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function g(d,u,v){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,u){u.matcap&&(d.matcap.value=u.matcap)}function m(d,u){let v=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,_){let w=_.program;i.uniformBlockBinding(v,w)}function c(v,_){let w=s[v.id];w===void 0&&(x(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",d));let U=_.program;i.updateUBOMapping(v,U);let M=e.render.frame;r[v.id]!==M&&(p(v),r[v.id]=M)}function h(v){let _=f();v.__bindingPointIndex=_;let w=n.createBuffer(),U=v.__size,M=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,U,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,w),w}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let _=s[v.id],w=v.uniforms,U=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let M=0,y=w.length;M<y;M++){let b=Array.isArray(w[M])?w[M]:[w[M]];for(let S=0,E=b.length;S<E;S++){let N=b[S];if(g(N,M,S,U)===!0){let k=N.__offset,P=Array.isArray(N.value)?N.value:[N.value],R=0;for(let A=0;A<P.length;A++){let z=P[A],O=m(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,k+R,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,R),R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function g(v,_,w,U){let M=v.value,y=_+"_"+w;if(U[y]===void 0)return typeof M=="number"||typeof M=="boolean"?U[y]=M:U[y]=M.clone(),!0;{let b=U[y];if(typeof M=="number"||typeof M=="boolean"){if(b!==M)return U[y]=M,!0}else if(b.equals(M)===!1)return b.copy(M),!0}return!1}function x(v){let _=v.uniforms,w=0,U=16;for(let y=0,b=_.length;y<b;y++){let S=Array.isArray(_[y])?_[y]:[_[y]];for(let E=0,N=S.length;E<N;E++){let k=S[E],P=Array.isArray(k.value)?k.value:[k.value];for(let R=0,A=P.length;R<A;R++){let z=P[R],O=m(z),V=w%U;V!==0&&U-V<O.boundary&&(w+=U-V),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=O.storage}}}let M=w%U;return M>0&&(w+=U-M),v.__size=w,v.__cache={},this}function m(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function d(v){let _=v.target;_.removeEventListener("dispose",d);let w=o.indexOf(_.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function Ra(n,e,t,i,s,r){yr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(fo.x=r*yr.x-s*yr.y,fo.y=s*yr.x+r*yr.y):fo.copy(yr),n.copy(e),n.x+=fo.x,n.y+=fo.y,n.applyMatrix4(yp)}function Wf(n,e,t,i,s,r,o){let a=Dh.distanceSqToPoint(n);if(a<t){let l=new H;Dh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function hu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,g*=h,s(o,a,p,g)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Xf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function _M(n,e){let t=1-n;return t*t*e}function vM(n,e){return 2*(1-n)*n*e}function yM(n,e){return n*n*e}function yo(n,e,t,i){return _M(n,e)+vM(n,t)+yM(n,i)}function MM(n,e){let t=1-n;return t*t*t*e}function SM(n,e){let t=1-n;return 3*t*t*n*e}function EM(n,e){return 3*(1-n)*n*n*e}function bM(n,e){return n*n*n*e}function Mo(n,e,t,i,s){return MM(n,e)+SM(n,t)+EM(n,i)+bM(n,s)}function Mp(n,e,t,i,s){let r,o;if(s===kM(n,e,t,i)>0)for(r=e;r<t;r+=i)o=qf(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=qf(r,n[r],n[r+1],o);return o&&El(o,o.next)&&(Lo(o),o=o.next),o}function Os(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(El(t,t.next)||zt(t.prev,t,t.next)===0)){if(Lo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Co(n,e,t,i,s,r,o){if(!n)return;!o&&r&&NM(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?AM(n,i,s,r):TM(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Lo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=RM(Os(n),e,t),Co(n,e,t,i,s,r,2)):o===2&&CM(n,e,t,i,s,r):Co(Os(n),e,t,i,s,r,1);break}}}function TM(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,g=a>l?a>c?a:c:l>c?l:c,x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=f&&x.y<=g&&br(s,a,r,l,o,c,x.x,x.y)&&zt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function AM(n,e,t,i){let s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,p=o.y,g=a<l?a<c?a:c:l<c?l:c,x=h<f?h<p?h:p:f<p?f:p,m=a>l?a>c?a:c:l>c?l:c,d=h>f?h>p?h:p:f>p?f:p,u=Gh(g,x,e,t,i),v=Gh(m,d,e,t,i),_=n.prevZ,w=n.nextZ;for(;_&&_.z>=u&&w&&w.z<=v;){if(_.x>=g&&_.x<=m&&_.y>=x&&_.y<=d&&_!==s&&_!==o&&br(a,h,l,f,c,p,_.x,_.y)&&zt(_.prev,_,_.next)>=0||(_=_.prevZ,w.x>=g&&w.x<=m&&w.y>=x&&w.y<=d&&w!==s&&w!==o&&br(a,h,l,f,c,p,w.x,w.y)&&zt(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;_&&_.z>=u;){if(_.x>=g&&_.x<=m&&_.y>=x&&_.y<=d&&_!==s&&_!==o&&br(a,h,l,f,c,p,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;w&&w.z<=v;){if(w.x>=g&&w.x<=m&&w.y>=x&&w.y<=d&&w!==s&&w!==o&&br(a,h,l,f,c,p,w.x,w.y)&&zt(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function RM(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!El(s,r)&&Sp(s,i,i.next,r)&&Po(s,r)&&Po(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Lo(i),Lo(i.next),i=n=r),i=i.next}while(i!==n);return Os(i)}function CM(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&FM(o,a)){let l=Ep(o,a);o=Os(o,o.next),l=Os(l,l.next),Co(o,e,t,i,s,r,0),Co(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function PM(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Mp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(OM(c));for(s.sort(LM),r=0;r<s.length;r++)t=IM(s[r],t);return t}function LM(n,e){return n.x-e.x}function IM(n,e){let t=DM(n,e);if(!t)return e;let i=Ep(t,n);return Os(i,i.next),Os(t,t.next)}function DM(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&br(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Po(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&UM(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function UM(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function NM(n,e,t,i){let s=n;do s.z===0&&(s.z=Gh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,zM(s)}function zM(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Gh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function OM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function br(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function FM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!BM(n,e)&&(Po(n,e)&&Po(e,n)&&HM(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||El(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function El(n,e){return n.x===e.x&&n.y===e.y}function Sp(n,e,t,i){let s=Ua(zt(n,e,t)),r=Ua(zt(n,e,i)),o=Ua(zt(t,i,n)),a=Ua(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&Da(n,t,e)||r===0&&Da(n,i,e)||o===0&&Da(t,n,i)||a===0&&Da(t,e,i))}function Da(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ua(n){return n>0?1:n<0?-1:0}function BM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Sp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Po(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function HM(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ep(n,e){let t=new Vh(n.i,n.x,n.y),i=new Vh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function qf(n,e,t,i){let s=new Vh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function kM(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function Yf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function VM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Na(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function WM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Qf(){return(typeof performance>"u"?Date:performance).now()}var L0,_d,I0,vl,D0,Li,is,on,wt,mi,es,Gt,vd,yd,U0,Cs,N0,z0,Md,Sd,O0,F0,B0,H0,ch,hh,k0,G0,V0,W0,X0,q0,Y0,Z0,$0,J0,K0,Q0,za,j0,eg,tg,ng,jf,ig,sg,ts,iu,su,ru,Uo,rg,ou,ep,Ar,Rr,uh,dh,yl,zi,ii,fh,Tn,Ed,Tc,Yn,og,Eo,ns,ag,lg,au,tp,Qi,ji,ri,np,ip,Is,cg,si,hg,ug,Ds,Cr,dg,sp,fg,rp,op,Ac,Rc,Cc,Pc,bd,wd,Td,Ad,ap,Rd,Cd,Pd,Ld,Id,Dd,Ud,Nd,zd,Od,Fd,Bd,Hd,kd,Gd,Vd,Lc,Wd,Xd,pg,qd,Yd,Zd,Oa,Fa,Ic,$d,Jd,Kd,lp,Us,mg,gg,cp,xg,Zn,vt,Oi,lu,Ml,Ba,Et,Ha,ka,tr,Qd,_g,vg,yg,hp,Mg,Sg,Eg,bg,ph,jd,mh,Ui,Ga,ss,gn,Dc,Va,he,it,Nc,tf,nf,sf,sa,Ag,gt,nr,Xa,Rg,qa,Cg,$n,Lt,xh,An,Ya,_h,In,H,Fc,rf,Fi,Ti,ei,ra,ir,sr,rr,Yi,Zi,bs,ao,oa,aa,ws,Pg,lo,Hc,rs,Ai,kc,la,$i,Gc,ca,Vc,Za,ut,or,ti,Lg,Ig,Ji,ha,Hn,of,af,$a,Ja,Dg,lf,ar,Ri,ua,co,Ug,Ng,cf,hf,uf,zg,Og,Yt,ni,Ci,Wc,Pi,lr,cr,df,Xc,qc,Yc,da,Ls,dp,Ki,fa,Ne,xn,Fg,Bi,lt,Jt,pa,_n,Ka,Qa,dt,Bg,qn,$c,hr,kn,ho,sn,Kt,ff,Ts,ma,pf,ur,dr,fr,Jc,ga,xa,_a,va,mf,gf,xf,ya,Ma,ie,Ie,as,Gg,Vg,Qt,ja,hn,pr,mr,vh,el,yh,Kc,Wg,Xg,Ii,As,Ea,bo,st,Yg,Zg,$g,Jg,Kg,Qg,jg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,_x,vx,yx,Mx,Sx,Ex,bx,wx,Tx,Ax,Rx,Cx,Px,Lx,Ix,Dx,Ux,Nx,zx,Ox,Fx,Bx,Hx,kx,Gx,Vx,Wx,Xx,qx,Yx,Zx,$x,Jx,Kx,Qx,jx,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,x_,__,v_,y_,M_,S_,E_,b_,w_,T_,A_,R_,C_,P_,L_,I_,D_,U_,N_,z_,O_,F_,B_,H_,k_,G_,V_,W_,X_,q_,Y_,Z_,$_,J_,K_,Q_,j_,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,dv,fv,pv,mv,gv,xv,_v,vv,yv,Mv,Sv,Ev,bv,wv,je,Me,pi,ba,Lr,Sr,_f,Ps,Qc,vf,jc,eh,th,Rs,gr,yf,Ir,tl,mp,gp,xp,_p,vp,bf,wf,Tf,Af,Rf,Mh,Sh,Eh,nh,Tr,Py,Ly,Hy,ky,Vy,Ky,wh,Th,sM,Ah,Rh,lM,cM,Ch,rt,pM,vo,Ph,wo,Lh,nl,Dr,Ih,bn,il,Ns,xr,uo,_r,vr,yr,fo,yp,Ta,po,Aa,Bf,ih,Hf,Ur,sl,Mr,kf,Ca,Gf,xM,mo,go,It,To,Vf,Dh,Pa,La,rl,un,Jn,Ao,Uh,Ia,sh,rh,oh,Nh,ol,zh,al,Oh,ll,Fh,cl,Bh,Hh,zs,kh,hl,Nr,Mt,zr,Ro,wM,So,ul,GM,oi,Vt,dl,fl,_e,os,Or,Wh,Xh,qh,ai,Fs,Yh,Zh,$h,Io,Bs,Jh,Kh,XM,Qh,Fr,pl,ah,$f,Jf,Do,jh,ml,Kf,xo,lh,eu,gl,tu,xl,_l,uu,qM,du,YM,ZM,$M,JM,KM,QM,jM,nu,Pt,_1,Dt=Bn(()=>{L0=0,_d=1,I0=2,vl=1,D0=2,Li=3,is=0,on=1,wt=2,mi=0,es=1,Gt=2,vd=3,yd=4,U0=5,Cs=100,N0=101,z0=102,Md=103,Sd=104,O0=200,F0=201,B0=202,H0=203,ch=204,hh=205,k0=206,G0=207,V0=208,W0=209,X0=210,q0=211,Y0=212,Z0=213,$0=214,J0=0,K0=1,Q0=2,za=3,j0=4,eg=5,tg=6,ng=7,jf=0,ig=1,sg=2,ts=0,iu=1,su=2,ru=3,Uo=4,rg=5,ou=6,ep=300,Ar=301,Rr=302,uh=303,dh=304,yl=306,zi=1e3,ii=1001,fh=1002,Tn=1003,Ed=1004,Tc=1005,Yn=1006,og=1007,Eo=1008,ns=1009,ag=1010,lg=1011,au=1012,tp=1013,Qi=1014,ji=1015,ri=1016,np=1017,ip=1018,Is=1020,cg=1021,si=1023,hg=1024,ug=1025,Ds=1026,Cr=1027,dg=1028,sp=1029,fg=1030,rp=1031,op=1033,Ac=33776,Rc=33777,Cc=33778,Pc=33779,bd=35840,wd=35841,Td=35842,Ad=35843,ap=36196,Rd=37492,Cd=37496,Pd=37808,Ld=37809,Id=37810,Dd=37811,Ud=37812,Nd=37813,zd=37814,Od=37815,Fd=37816,Bd=37817,Hd=37818,kd=37819,Gd=37820,Vd=37821,Lc=36492,Wd=36494,Xd=36495,pg=36283,qd=36284,Yd=36285,Zd=36286,Oa=2300,Fa=2301,Ic=2302,$d=2400,Jd=2401,Kd=2402,lp=3e3,Us=3001,mg=3200,gg=3201,cp=0,xg=1,Zn="",vt="srgb",Oi="srgb-linear",lu="display-p3",Ml="display-p3-linear",Ba="linear",Et="srgb",Ha="rec709",ka="p3",tr=7680,Qd=519,_g=512,vg=513,yg=514,hp=515,Mg=516,Sg=517,Eg=518,bg=519,ph=35044,jd="300 es",mh=1035,Ui=2e3,Ga=2001,ss=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,Va=180/Math.PI;he=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],g=i[5],x=i[8],m=s[0],d=s[3],u=s[6],v=s[1],_=s[4],w=s[7],U=s[2],M=s[5],y=s[8];return r[0]=o*m+a*v+l*U,r[3]=o*d+a*_+l*M,r[6]=o*u+a*w+l*y,r[1]=c*m+h*v+f*U,r[4]=c*d+h*_+f*M,r[7]=c*u+h*w+f*y,r[2]=p*m+g*v+x*U,r[5]=p*d+g*_+x*M,r[8]=p*u+g*w+x*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,p=a*l-h*r,g=c*r-o*l,x=t*f+i*p+s*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/x;return e[0]=f*m,e[1]=(s*c-h*i)*m,e[2]=(a*i-s*o)*m,e[3]=p*m,e[4]=(h*t-s*l)*m,e[5]=(s*r-a*t)*m,e[6]=g*m,e[7]=(i*l-c*t)*m,e[8]=(o*t-i*r)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nc.makeScale(e,t)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Nc=new it;tf={};nf=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sf=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sa={[Oi]:{transfer:Ba,primaries:Ha,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:Et,primaries:Ha,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ml]:{transfer:Ba,primaries:ka,toReference:n=>n.applyMatrix3(sf),fromReference:n=>n.applyMatrix3(nf)},[lu]:{transfer:Et,primaries:ka,toReference:n=>n.convertSRGBToLinear().applyMatrix3(sf),fromReference:n=>n.applyMatrix3(nf).convertLinearToSRGB()}},Ag=new Set([Oi,Ml]),gt={enabled:!0,_workingColorSpace:Oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ag.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=sa[e].toReference,s=sa[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return sa[n].primaries},getTransfer:function(n){return n===Zn?Ba:sa[n].transfer}};Xa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=Wa("canvas")),nr.width=e.width,nr.height=e.height;let i=nr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rg=0,qa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=Ni(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Oc(s[o].image)):r.push(Oc(s[o]))}else r=Oc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Cg=0,$n=class n extends ss{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ii,s=ii,r=Yn,o=Eo,a=si,l=ns,c=n.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Ni(),this.name="",this.source=new qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Us?vt:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ep)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Us:lp}set encoding(e){_o("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Us?vt:Zn}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=ep;$n.DEFAULT_ANISOTROPY=1;Lt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],g=l[5],x=l[9],m=l[2],d=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-m)<.01&&Math.abs(x-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+m)<.1&&Math.abs(x+d)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,w=(g+1)/2,U=(u+1)/2,M=(h+p)/4,y=(f+m)/4,b=(x+d)/4;return _>w&&_>U?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=M/i,r=y/i):w>U?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=M/s,r=b/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=y/r,s=b/r),this.set(i,s,r,t),this}let v=Math.sqrt((d-x)*(d-x)+(f-m)*(f-m)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(d-x)/v,this.y=(f-m)/v,this.z=(p-h)/v,this.w=Math.acos((c+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xh=class extends ss{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(_o("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Us?vt:Zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends xh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ya=class extends $n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_h=class extends $n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},In=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],p=r[o+0],g=r[o+1],x=r[o+2],m=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=x,e[t+3]=m;return}if(f!==m||l!==p||c!==g||h!==x){let d=1-a,u=l*p+c*g+h*x+f*m,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let U=Math.sqrt(_),M=Math.atan2(U,u*v);d=Math.sin(d*M)/U,a=Math.sin(a*M)/U}let w=a*v;if(l=l*d+p*w,c=c*d+g*w,h=h*d+x*w,f=f*d+m*w,d===1-a){let U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],p=r[o+1],g=r[o+2],x=r[o+3];return e[t]=a*x+h*f+l*g-c*p,e[t+1]=l*x+h*p+c*f-a*g,e[t+2]=c*x+h*g+a*p-l*f,e[t+3]=h*x-a*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),p=l(i/2),g=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f-p*g*x;break;case"YXZ":this._x=p*h*f+c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f+p*g*x;break;case"ZXY":this._x=p*h*f-c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f-p*g*x;break;case"ZYX":this._x=p*h*f-c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f+p*g*x;break;case"YZX":this._x=p*h*f+c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f-p*g*x;break;case"XZY":this._x=p*h*f-c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=i+a+f;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(i>a&&i>f){let g=2*Math.sqrt(1+i-a-f);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>f){let g=2*Math.sqrt(1+a-i-f);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+f-i-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*i+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Fc=new H,rf=new In,Fi=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ra.copy(i.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),oa.subVectors(this.max,ao),ir.subVectors(e.a,ao),sr.subVectors(e.b,ao),rr.subVectors(e.c,ao),Yi.subVectors(sr,ir),Zi.subVectors(rr,sr),bs.subVectors(ir,rr);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-bs.z,bs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,bs.z,0,-bs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-bs.y,bs.x,0];return!Bc(t,ir,sr,rr,oa)||(t=[1,0,0,0,1,0,0,0,1],!Bc(t,ir,sr,rr,oa))?!1:(aa.crossVectors(Yi,Zi),t=[aa.x,aa.y,aa.z],Bc(t,ir,sr,rr,oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ti=[new H,new H,new H,new H,new H,new H,new H,new H],ei=new H,ra=new Fi,ir=new H,sr=new H,rr=new H,Yi=new H,Zi=new H,bs=new H,ao=new H,oa=new H,aa=new H,ws=new H;Pg=new Fi,lo=new H,Hc=new H,rs=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Pg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);let t=lo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Hc)),this.expandByPoint(lo.copy(e.center).sub(Hc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ai=new H,kc=new H,la=new H,$i=new H,Gc=new H,ca=new H,Vc=new H,Za=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){kc.copy(e).add(t).multiplyScalar(.5),la.copy(t).sub(e).normalize(),$i.copy(this.origin).sub(kc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(la),a=$i.dot(this.direction),l=-$i.dot(la),c=$i.lengthSq(),h=Math.abs(1-o*o),f,p,g,x;if(h>0)if(f=o*l-a,p=o*a-l,x=r*h,f>=0)if(p>=-x)if(p<=x){let m=1/h;f*=m,p*=m,g=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),g=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),g=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),g=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(kc).addScaledVector(la,p),g}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,r){Gc.subVectors(t,e),ca.subVectors(i,e),Vc.crossVectors(Gc,ca);let o=this.direction.dot(Vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$i.subVectors(this.origin,e);let l=a*this.direction.dot(ca.crossVectors($i,ca));if(l<0)return null;let c=a*this.direction.dot(Gc.cross($i));if(c<0||l+c>o)return null;let h=-a*$i.dot(Vc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class n{constructor(e,t,i,s,r,o,a,l,c,h,f,p,g,x,m,d){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,p,g,x,m,d)}set(e,t,i,s,r,o,a,l,c,h,f,p,g,x,m,d){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=g,u[7]=x,u[11]=m,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/or.setFromMatrixColumn(e,0).length(),r=1/or.setFromMatrixColumn(e,1).length(),o=1/or.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,g=o*f,x=a*h,m=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=g+x*c,t[5]=p-m*c,t[9]=-a*l,t[2]=m-p*c,t[6]=x+g*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,g=l*f,x=c*h,m=c*f;t[0]=p+m*a,t[4]=x*a-g,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=g*a-x,t[6]=m+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,g=l*f,x=c*h,m=c*f;t[0]=p-m*a,t[4]=-o*f,t[8]=x+g*a,t[1]=g+x*a,t[5]=o*h,t[9]=m-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,g=o*f,x=a*h,m=a*f;t[0]=l*h,t[4]=x*c-g,t[8]=p*c+m,t[1]=l*f,t[5]=m*c+p,t[9]=g*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,g=o*c,x=a*l,m=a*c;t[0]=l*h,t[4]=m-p*f,t[8]=x*f+g,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*f+x,t[10]=p-m*f}else if(e.order==="XZY"){let p=o*l,g=o*c,x=a*l,m=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+m,t[5]=o*h,t[9]=g*f-x,t[2]=x*f-g,t[6]=a*h,t[10]=m*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lg,e,Ig)}lookAt(e,t,i){let s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Ji.crossVectors(i,Hn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Ji.crossVectors(i,Hn)),Ji.normalize(),ha.crossVectors(Hn,Ji),s[0]=Ji.x,s[4]=ha.x,s[8]=Hn.x,s[1]=Ji.y,s[5]=ha.y,s[9]=Hn.y,s[2]=Ji.z,s[6]=ha.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],g=i[13],x=i[2],m=i[6],d=i[10],u=i[14],v=i[3],_=i[7],w=i[11],U=i[15],M=s[0],y=s[4],b=s[8],S=s[12],E=s[1],N=s[5],k=s[9],P=s[13],R=s[2],A=s[6],z=s[10],O=s[14],V=s[3],W=s[7],L=s[11],G=s[15];return r[0]=o*M+a*E+l*R+c*V,r[4]=o*y+a*N+l*A+c*W,r[8]=o*b+a*k+l*z+c*L,r[12]=o*S+a*P+l*O+c*G,r[1]=h*M+f*E+p*R+g*V,r[5]=h*y+f*N+p*A+g*W,r[9]=h*b+f*k+p*z+g*L,r[13]=h*S+f*P+p*O+g*G,r[2]=x*M+m*E+d*R+u*V,r[6]=x*y+m*N+d*A+u*W,r[10]=x*b+m*k+d*z+u*L,r[14]=x*S+m*P+d*O+u*G,r[3]=v*M+_*E+w*R+U*V,r[7]=v*y+_*N+w*A+U*W,r[11]=v*b+_*k+w*z+U*L,r[15]=v*S+_*P+w*O+U*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],g=e[14],x=e[3],m=e[7],d=e[11],u=e[15];return x*(+r*l*f-s*c*f-r*a*p+i*c*p+s*a*g-i*l*g)+m*(+t*l*g-t*c*p+r*o*p-s*o*g+s*c*h-r*l*h)+d*(+t*c*f-t*a*g-r*o*f+i*o*g+r*a*h-i*c*h)+u*(-s*a*h-t*l*f+t*a*p+s*o*f-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],g=e[11],x=e[12],m=e[13],d=e[14],u=e[15],v=f*d*c-m*p*c+m*l*g-a*d*g-f*l*u+a*p*u,_=x*p*c-h*d*c-x*l*g+o*d*g+h*l*u-o*p*u,w=h*m*c-x*f*c+x*a*g-o*m*g-h*a*u+o*f*u,U=x*f*l-h*m*l-x*a*p+o*m*p+h*a*d-o*f*d,M=t*v+i*_+s*w+r*U;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/M;return e[0]=v*y,e[1]=(m*p*r-f*d*r-m*s*g+i*d*g+f*s*u-i*p*u)*y,e[2]=(a*d*r-m*l*r+m*s*c-i*d*c-a*s*u+i*l*u)*y,e[3]=(f*l*r-a*p*r-f*s*c+i*p*c+a*s*g-i*l*g)*y,e[4]=_*y,e[5]=(h*d*r-x*p*r+x*s*g-t*d*g-h*s*u+t*p*u)*y,e[6]=(x*l*r-o*d*r-x*s*c+t*d*c+o*s*u-t*l*u)*y,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*g+t*l*g)*y,e[8]=w*y,e[9]=(x*f*r-h*m*r-x*i*g+t*m*g+h*i*u-t*f*u)*y,e[10]=(o*m*r-x*a*r+x*i*c-t*m*c-o*i*u+t*a*u)*y,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*g-t*a*g)*y,e[12]=U*y,e[13]=(h*m*s-x*f*s+x*i*p-t*m*p-h*i*d+t*f*d)*y,e[14]=(x*a*s-o*m*s-x*i*l+t*m*l+o*i*d-t*a*d)*y,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*p+t*a*p)*y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,p=r*c,g=r*h,x=r*f,m=o*h,d=o*f,u=a*f,v=l*c,_=l*h,w=l*f,U=i.x,M=i.y,y=i.z;return s[0]=(1-(m+u))*U,s[1]=(g+w)*U,s[2]=(x-_)*U,s[3]=0,s[4]=(g-w)*M,s[5]=(1-(p+u))*M,s[6]=(d+v)*M,s[7]=0,s[8]=(x+_)*y,s[9]=(d-v)*y,s[10]=(1-(p+m))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=or.set(s[0],s[1],s[2]).length(),o=or.set(s[4],s[5],s[6]).length(),a=or.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ti.copy(this);let c=1/r,h=1/o,f=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=h,ti.elements[5]*=h,ti.elements[6]*=h,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,t.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ui){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s),g,x;if(a===Ui)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ga)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ui){let l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),p=(t+e)*c,g=(i+s)*h,x,m;if(a===Ui)x=(o+r)*f,m=-2*f;else if(a===Ga)x=r*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=m,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},or=new H,ti=new ut,Lg=new H(0,0,0),Ig=new H(1,1,1),Ji=new H,ha=new H,Hn=new H,of=new ut,af=new In,$a=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(of,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return af.setFromEuler(this),this.setFromQuaternion(af,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$a.DEFAULT_ORDER="XYZ";Ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dg=0,lf=new H,ar=new In,Ri=new ut,ua=new H,co=new H,Ug=new H,Ng=new In,cf=new H(1,0,0),hf=new H(0,1,0),uf=new H(0,0,1),zg={type:"added"},Og={type:"removed"},Yt=class n extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new $a,i=new In,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new it}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.multiply(ar),this}rotateOnWorldAxis(e,t){return ar.setFromAxisAngle(e,t),this.quaternion.premultiply(ar),this}rotateX(e){return this.rotateOnAxis(cf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(uf,e)}translateOnAxis(e,t){return lf.copy(e).applyQuaternion(this.quaternion),this.position.add(lf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(uf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ua.copy(e):ua.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(co,ua,this.up):Ri.lookAt(ua,co,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),ar.setFromRotationMatrix(Ri),this.quaternion.premultiply(ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Og)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,e,Ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(co,Ng,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new H(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ni=new H,Ci=new H,Wc=new H,Pi=new H,lr=new H,cr=new H,df=new H,Xc=new H,qc=new H,Yc=new H,da=!1,Ls=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ni.subVectors(e,t),s.cross(ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ni.subVectors(s,t),Ci.subVectors(i,t),Wc.subVectors(e,t);let o=ni.dot(ni),a=ni.dot(Ci),l=ni.dot(Wc),c=Ci.dot(Ci),h=Ci.dot(Wc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,g=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-g-x,x,g)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getUV(e,t,i,s,r,o,a,l){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static isFrontFacing(e,t,i,s){return ni.subVectors(i,t),Ci.subVectors(e,t),ni.cross(Ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return da===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),da=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;lr.subVectors(s,i),cr.subVectors(r,i),Xc.subVectors(e,i);let l=lr.dot(Xc),c=cr.dot(Xc);if(l<=0&&c<=0)return t.copy(i);qc.subVectors(e,s);let h=lr.dot(qc),f=cr.dot(qc);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(lr,o);Yc.subVectors(e,r);let g=lr.dot(Yc),x=cr.dot(Yc);if(x>=0&&g<=x)return t.copy(r);let m=g*c-l*x;if(m<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(cr,a);let d=h*x-g*f;if(d<=0&&f-h>=0&&g-x>=0)return df.subVectors(r,s),a=(f-h)/(f-h+(g-x)),t.copy(s).addScaledVector(df,a);let u=1/(d+m+p);return o=m*u,a=p*u,t.copy(i).addScaledVector(lr,o).addScaledVector(cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},fa={h:0,s:0,l:0};Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=gt.workingColorSpace){if(e=wg(e,1),t=rn(t,0,1),i=rn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Zc(o,r,e+1/3),this.g=Zc(o,r,e),this.b=Zc(o,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=dp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=zc(e.r),this.g=zc(e.g),this.b=zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return gt.fromWorkingColorSpace(xn.copy(this),e),Math.round(rn(xn.r*255,0,255))*65536+Math.round(rn(xn.g*255,0,255))*256+Math.round(rn(xn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(xn.copy(this),t);let i=xn.r,s=xn.g,r=xn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=vt){gt.fromWorkingColorSpace(xn.copy(this),e);let t=xn.r,i=xn.g,s=xn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(fa);let i=Uc(Ki.h,fa.h,t),s=Uc(Ki.s,fa.s,t),r=Uc(Ki.l,fa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new Ne;Ne.NAMES=dp;Fg=0,Bi=class extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=es,this.side=is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==Cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},lt=class extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jt=new H,pa=new he,_n=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pa.fromBufferAttribute(this,t),pa.applyMatrix3(e),this.setXY(t,pa.x,pa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Di(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=bt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Di(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Di(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Di(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ph&&(e.usage=this.usage),e}},Ka=class extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Qa=class extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}},dt=class extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bg=0,qn=new ut,$c=new Yt,hr=new H,kn=new Fi,ho=new Fi,sn=new H,Kt=class n extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(up(e)?Qa:Ka)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,i){return qn.makeTranslation(e,t,i),this.applyMatrix4(qn),this}scale(e,t,i){return qn.makeScale(e,t,i),this.applyMatrix4(qn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ho.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(kn.min,ho.min),kn.expandByPoint(sn),sn.addVectors(kn.max,ho.max),kn.expandByPoint(sn)):(kn.expandByPoint(ho.min),kn.expandByPoint(ho.max))}kn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)sn.fromBufferAttribute(a,c),l&&(hr.fromBufferAttribute(e,c),sn.add(hr)),s=Math.max(s,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new H,h[E]=new H;let f=new H,p=new H,g=new H,x=new he,m=new he,d=new he,u=new H,v=new H;function _(E,N,k){f.fromArray(s,E*3),p.fromArray(s,N*3),g.fromArray(s,k*3),x.fromArray(o,E*2),m.fromArray(o,N*2),d.fromArray(o,k*2),p.sub(f),g.sub(f),m.sub(x),d.sub(x);let P=1/(m.x*d.y-d.x*m.y);isFinite(P)&&(u.copy(p).multiplyScalar(d.y).addScaledVector(g,-m.y).multiplyScalar(P),v.copy(g).multiplyScalar(m.x).addScaledVector(p,-d.x).multiplyScalar(P),c[E].add(u),c[N].add(u),c[k].add(u),h[E].add(v),h[N].add(v),h[k].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let E=0,N=w.length;E<N;++E){let k=w[E],P=k.start,R=k.count;for(let A=P,z=P+R;A<z;A+=3)_(i[A+0],i[A+1],i[A+2])}let U=new H,M=new H,y=new H,b=new H;function S(E){y.fromArray(r,E*3),b.copy(y);let N=c[E];U.copy(N),U.sub(y.multiplyScalar(y.dot(N))).normalize(),M.crossVectors(b,N);let P=M.dot(h[E])<0?-1:1;l[E*4]=U.x,l[E*4+1]=U.y,l[E*4+2]=U.z,l[E*4+3]=P}for(let E=0,N=w.length;E<N;++E){let k=w[E],P=k.start,R=k.count;for(let A=P,z=P+R;A<z;A+=3)S(i[A+0]),S(i[A+1]),S(i[A+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);let s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,f=new H;if(e)for(let p=0,g=e.count;p<g;p+=3){let x=e.getX(p+0),m=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),o.fromBufferAttribute(t,d),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),g=0,x=0;for(let m=0,d=l.length;m<d;m++){a.isInterleavedBufferAttribute?g=l[m]*a.data.stride+a.offset:g=l[m]*h;for(let u=0;u<h;u++)p[x++]=c[g++]}return new _n(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],g=e(p,i);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ff=new ut,Ts=new Za,ma=new rs,pf=new H,ur=new H,dr=new H,fr=new H,Jc=new H,ga=new H,xa=new he,_a=new he,va=new he,mf=new H,gf=new H,xf=new H,ya=new H,Ma=new H,ie=class extends Yt{constructor(e=new Kt,t=new lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Jc.fromBufferAttribute(f,e),o?ga.addScaledVector(Jc,h):ga.addScaledVector(Jc.sub(t),h))}t.add(ga)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(ma.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(ma,pf)===null||Ts.origin.distanceToSquared(pf)>(e.far-e.near)**2))&&(ff.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(ff),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=p.length;x<m;x++){let d=p[x],u=o[d.materialIndex],v=Math.max(d.start,g.start),_=Math.min(a.count,Math.min(d.start+d.count,g.start+g.count));for(let w=v,U=_;w<U;w+=3){let M=a.getX(w),y=a.getX(w+1),b=a.getX(w+2);s=Sa(this,u,e,i,c,h,f,M,y,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let d=x,u=m;d<u;d+=3){let v=a.getX(d),_=a.getX(d+1),w=a.getX(d+2);s=Sa(this,o,e,i,c,h,f,v,_,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,m=p.length;x<m;x++){let d=p[x],u=o[d.materialIndex],v=Math.max(d.start,g.start),_=Math.min(l.count,Math.min(d.start+d.count,g.start+g.count));for(let w=v,U=_;w<U;w+=3){let M=w,y=w+1,b=w+2;s=Sa(this,u,e,i,c,h,f,M,y,b),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let d=x,u=m;d<u;d+=3){let v=d,_=d+1,w=d+2;s=Sa(this,o,e,i,c,h,f,v,_,w),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};Ie=class n extends Kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,g=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(f,2));function x(m,d,u,v,_,w,U,M,y,b,S){let E=w/y,N=U/b,k=w/2,P=U/2,R=M/2,A=y+1,z=b+1,O=0,V=0,W=new H;for(let L=0;L<z;L++){let G=L*N-P;for(let Z=0;Z<A;Z++){let I=Z*E-k;W[m]=I*v,W[d]=G*_,W[u]=R,c.push(W.x,W.y,W.z),W[m]=0,W[d]=0,W[u]=M>0?1:-1,h.push(W.x,W.y,W.z),f.push(Z/y),f.push(1-L/b),O+=1}}for(let L=0;L<b;L++)for(let G=0;G<y;G++){let Z=p+G+A*L,I=p+G+A*(L+1),X=p+(G+1)+A*(L+1),K=p+(G+1)+A*L;l.push(Z,I,K),l.push(I,X,K),V+=6}a.addGroup(g,V,S),g+=V,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};as={clone:Pr,merge:wn},Gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pr(e.uniforms),this.uniformsGroups=kg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ja=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hn=class extends ja{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Dc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pr=-90,mr=1,vh=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(pr,mr,e,t);s.layers=this.layers,this.add(s);let r=new hn(pr,mr,e,t);r.layers=this.layers,this.add(r);let o=new hn(pr,mr,e,t);o.layers=this.layers,this.add(o);let a=new hn(pr,mr,e,t);a.layers=this.layers,this.add(a);let l=new hn(pr,mr,e,t);l.layers=this.layers,this.add(l);let c=new hn(pr,mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,p,g),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},el=class extends $n{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yh=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(_o("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Us?vt:Zn),this.texture=new el(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ie(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:Pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:mi});r.uniforms.tEquirect.value=t;let o=new ie(s,r),a=t.minFilter;return t.minFilter===Eo&&(t.minFilter=Yn),new vh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Kc=new H,Wg=new H,Xg=new it,Ii=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Kc.subVectors(i,t).cross(Wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Kc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Xg.getNormalMatrix(e),s=this.coplanarPoint(Kc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},As=new rs,Ea=new H,bo=class{constructor(e=new Ii,t=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],d=s[11],u=s[12],v=s[13],_=s[14],w=s[15];if(i[0].setComponents(l-r,p-c,d-g,w-u).normalize(),i[1].setComponents(l+r,p+c,d+g,w+u).normalize(),i[2].setComponents(l+o,p+h,d+x,w+v).normalize(),i[3].setComponents(l-o,p-h,d-x,w-v).normalize(),i[4].setComponents(l-a,p-f,d-m,w-_).normalize(),t===Ui)i[5].setComponents(l+a,p+f,d+m,w+_).normalize();else if(t===Ga)i[5].setComponents(a,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ea.x=s.normal.x>0?e.max.x:e.min.x,Ea.y=s.normal.y>0?e.max.y:e.min.y,Ea.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ea)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};st=class n extends Kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,p=t/l,g=[],x=[],m=[],d=[];for(let u=0;u<h;u++){let v=u*p-o;for(let _=0;_<c;_++){let w=_*f-r;x.push(w,-v,0),m.push(0,0,1),d.push(_/a),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){let _=v+c*u,w=v+c*(u+1),U=v+1+c*(u+1),M=v+1+c*u;g.push(_,w,M),g.push(w,U,M)}this.setIndex(g),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
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
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jg=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,ax=`#ifdef USE_BUMPMAP
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gx=`#define PI 3.141592653589793
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
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_x=`vec3 transformedNormal = objectNormal;
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
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",bx=`
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
}`,wx=`#ifdef USE_ENVMAP
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
#endif`,Tx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
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
}`,Nx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
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
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
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
#endif`,qx=`struct PhysicalMaterial {
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
}`,Yx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,e_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i_=`#if defined( USE_POINTS_UV )
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
#endif`,s_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a_=`#ifdef USE_MORPHNORMALS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
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
#endif`,c_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,__=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L_=`float getShadowMask() {
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
}`,I_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D_=`#ifdef USE_SKINNING
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
#endif`,U_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,Z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q_=`#include <common>
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
}`,j_=`#if DEPTH_PACKING == 3200
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
}`,ev=`#define DISTANCE
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
}`,tv=`#define DISTANCE
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
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`uniform float scale;
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
}`,rv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 diffuse;
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
}`,lv=`#define LAMBERT
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
}`,cv=`#define LAMBERT
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
}`,hv=`#define MATCAP
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
}`,uv=`#define MATCAP
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
}`,dv=`#define NORMAL
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
}`,fv=`#define NORMAL
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
}`,pv=`#define PHONG
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
}`,mv=`#define PHONG
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
}`,gv=`#define STANDARD
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
}`,xv=`#define STANDARD
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
}`,_v=`#define TOON
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
}`,vv=`#define TOON
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
}`,yv=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#include <common>
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
}`,Ev=`uniform vec3 color;
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
}`,bv=`uniform float rotation;
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
}`,wv=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Yg,alphahash_pars_fragment:Zg,alphamap_fragment:$g,alphamap_pars_fragment:Jg,alphatest_fragment:Kg,alphatest_pars_fragment:Qg,aomap_fragment:jg,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:sx,bsdfs:rx,iridescence_fragment:ox,bumpmap_pars_fragment:ax,clipping_planes_fragment:lx,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:hx,clipping_planes_vertex:ux,color_fragment:dx,color_pars_fragment:fx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:xx,defaultnormal_vertex:_x,displacementmap_pars_vertex:vx,displacementmap_vertex:yx,emissivemap_fragment:Mx,emissivemap_pars_fragment:Sx,colorspace_fragment:Ex,colorspace_pars_fragment:bx,envmap_fragment:wx,envmap_common_pars_fragment:Tx,envmap_pars_fragment:Ax,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:Hx,envmap_vertex:Cx,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Ix,fog_pars_fragment:Dx,gradientmap_pars_fragment:Ux,lightmap_fragment:Nx,lightmap_pars_fragment:zx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Fx,lights_pars_begin:Bx,lights_toon_fragment:kx,lights_toon_pars_fragment:Gx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:qx,lights_fragment_begin:Yx,lights_fragment_maps:Zx,lights_fragment_end:$x,logdepthbuf_fragment:Jx,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:jx,map_fragment:e_,map_pars_fragment:t_,map_particle_fragment:n_,map_particle_pars_fragment:i_,metalnessmap_fragment:s_,metalnessmap_pars_fragment:r_,morphcolor_vertex:o_,morphnormal_vertex:a_,morphtarget_pars_vertex:l_,morphtarget_vertex:c_,normal_fragment_begin:h_,normal_fragment_maps:u_,normal_pars_fragment:d_,normal_pars_vertex:f_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:x_,clearcoat_pars_fragment:__,iridescence_pars_fragment:v_,opaque_fragment:y_,packing:M_,premultiplied_alpha_fragment:S_,project_vertex:E_,dithering_fragment:b_,dithering_pars_fragment:w_,roughnessmap_fragment:T_,roughnessmap_pars_fragment:A_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:P_,shadowmask_pars_fragment:L_,skinbase_vertex:I_,skinning_pars_vertex:D_,skinning_vertex:U_,skinnormal_vertex:N_,specularmap_fragment:z_,specularmap_pars_fragment:O_,tonemapping_fragment:F_,tonemapping_pars_fragment:B_,transmission_fragment:H_,transmission_pars_fragment:k_,uv_pars_fragment:G_,uv_pars_vertex:V_,uv_vertex:W_,worldpos_vertex:X_,background_vert:q_,background_frag:Y_,backgroundCube_vert:Z_,backgroundCube_frag:$_,cube_vert:J_,cube_frag:K_,depth_vert:Q_,depth_frag:j_,distanceRGBA_vert:ev,distanceRGBA_frag:tv,equirect_vert:nv,equirect_frag:iv,linedashed_vert:sv,linedashed_frag:rv,meshbasic_vert:ov,meshbasic_frag:av,meshlambert_vert:lv,meshlambert_frag:cv,meshmatcap_vert:hv,meshmatcap_frag:uv,meshnormal_vert:dv,meshnormal_frag:fv,meshphong_vert:pv,meshphong_frag:mv,meshphysical_vert:gv,meshphysical_frag:xv,meshtoon_vert:_v,meshtoon_frag:vv,points_vert:yv,points_frag:Mv,shadow_vert:Sv,shadow_frag:Ev,sprite_vert:bv,sprite_frag:wv},Me={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},pi={basic:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:wn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:wn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:wn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ne(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:wn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:wn([Me.points,Me.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:wn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:wn([Me.common,Me.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:wn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:wn([Me.sprite,Me.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:wn([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:wn([Me.lights,Me.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};pi.physical={uniforms:wn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};ba={r:0,b:0,g:0};Lr=class extends ja{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sr=4,_f=[.125,.215,.35,.446,.526,.582],Ps=20,Qc=new Lr,vf=new Ne,jc=null,eh=0,th=0,Rs=(1+Math.sqrt(5))/2,gr=1/Rs,yf=[new H(1,1,1),new H(-1,1,1),new H(1,1,-1),new H(-1,1,-1),new H(0,Rs,gr),new H(0,Rs,-gr),new H(gr,0,Rs),new H(-gr,0,Rs),new H(Rs,gr,0),new H(-Rs,gr,0)],Ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){jc=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jc,eh,th),e.scissorTest=!1,wa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jc=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:ri,format:si,colorSpace:Oi,depthBuffer:!1},s=Mf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iv(r)),this._blurMaterial=Dv(r,e,t)}return s}_compileMaterial(e){let t=new ie(this._lodPlanes[0],e);this._renderer.compile(t,Qc)}_sceneToCubeUV(e,t,i,s){let a=new hn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(vf),h.toneMapping=ts,h.autoClear=!1;let g=new lt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new ie(new Ie,g),m=!1,d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,m=!0):(g.color.copy(vf),m=!0);for(let u=0;u<6;u++){let v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let _=this._cubeSize;wa(s,v*_,u>2?_:0,_,_),h.setRenderTarget(s),m&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Ar||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;wa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Qc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yf[(s-1)%yf.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ie(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ps-1),m=r/x,d=isFinite(r)?1+Math.floor(h*m):Ps;d>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Ps}`);let u=[],v=0;for(let y=0;y<Ps;++y){let b=y/m,S=Math.exp(-b*b/2);u.push(S),y===0?v+=S:y<d&&(v+=2*S)}for(let y=0;y<u.length;y++)u[y]=u[y]/v;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;let w=this._sizeLods[s],U=3*w*(s>_-Sr?s-_+Sr:0),M=4*(this._cubeSize-w);wa(t,U,M,3*w,2*w),l.setRenderTarget(t),l.render(f,Qc)}};tl=class extends $n{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ds,h!==Ds&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ds&&(i=Qi),i===void 0&&h===Cr&&(i=Is),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Tn,this.minFilter=l!==void 0?l:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mp=new $n,gp=new tl(1,1);gp.compareFunction=hp;xp=new Ya,_p=new _h,vp=new el,bf=[],wf=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);Mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ly(t.type)}},Sh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ry(t.type)}},Eh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},nh=/(\w+)(\])?(\[|\.)?/g;Tr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Cy(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};Py=37297,Ly=0;Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;ky=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ky=0,wh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Th(e),t.set(e,i)),i}},Th=class{constructor(e){this.id=Ky++,this.code=e,this.usedTimes=0}};sM=0;Ah=class extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rh=class extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cM=`uniform sampler2D shadow_pass;
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
}`;Ch=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},rt=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},pM={type:"move"},vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let m of e.hand.values()){let d=t.getJointPose(m,i),u=this._getHandJoint(c,m);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new rt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ph=class extends ss{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,g=null,x=null,m=t.getContextAttributes(),d=null,u=null,v=[],_=[],w=new he,U=null,M=new hn;M.layers.enable(1),M.viewport=new Lt;let y=new hn;y.layers.enable(2),y.viewport=new Lt;let b=[M,y],S=new Ch;S.layers.enable(1),S.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let X=v[I];return X===void 0&&(X=new vo,v[I]=X),X.getTargetRaySpace()},this.getControllerGrip=function(I){let X=v[I];return X===void 0&&(X=new vo,v[I]=X),X.getGripSpace()},this.getHand=function(I){let X=v[I];return X===void 0&&(X=new vo,v[I]=X),X.getHandSpace()};function k(I){let X=_.indexOf(I.inputSource);if(X===-1)return;let K=v[X];K!==void 0&&(K.update(I.inputSource,I.frame,c||o),K.dispatchEvent({type:I.type,data:I.inputSource}))}function P(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",R);for(let I=0;I<v.length;I++){let X=_[I];X!==null&&(_[I]=null,v[I].disconnect(X))}E=null,N=null,e.setRenderTarget(d),g=null,p=null,f=null,s=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(U),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",P),s.addEventListener("inputsourceschange",R),m.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(w),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let X={antialias:s.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),u=new An(g.framebufferWidth,g.framebufferHeight,{format:si,type:ns,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,K=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?Cr:Ds,K=m.stencil?Is:Qi);let xe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(xe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new An(p.textureWidth,p.textureHeight,{format:si,type:ns,depthTexture:new tl(p.textureWidth,p.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});let we=e.properties.get(u);we.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(I){for(let X=0;X<I.removed.length;X++){let K=I.removed[X],le=_.indexOf(K);le>=0&&(_[le]=null,v[le].disconnect(K))}for(let X=0;X<I.added.length;X++){let K=I.added[X],le=_.indexOf(K);if(le===-1){for(let we=0;we<v.length;we++)if(we>=_.length){_.push(K),le=we;break}else if(_[we]===null){_[we]=K,le=we;break}if(le===-1)break}let xe=v[le];xe&&xe.connect(K)}}let A=new H,z=new H;function O(I,X,K){A.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(K.matrixWorld);let le=A.distanceTo(z),xe=X.projectionMatrix.elements,we=K.projectionMatrix.elements,Ae=xe[14]/(xe[10]-1),Ee=xe[14]/(xe[10]+1),Oe=(xe[9]+1)/xe[5],B=(xe[9]-1)/xe[5],me=(xe[8]-1)/xe[0],te=(we[8]+1)/we[0],ge=Ae*me,ne=Ae*te,Ue=le/(-me+te),be=Ue*-me;X.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(be),I.translateZ(Ue),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();let C=Ae+Ue,T=Ee+Ue,q=ge-be,de=ne+(le-be),ce=Oe*Ee/T*C,ae=B*Ee/T*C;I.projectionMatrix.makePerspective(q,de,ce,ae,C,T),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function V(I,X){X===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(X.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;S.near=y.near=M.near=I.near,S.far=y.far=M.far=I.far,(E!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,N=S.far);let X=I.parent,K=S.cameras;V(S,X);for(let le=0;le<K.length;le++)V(K[le],X);K.length===2?O(S,M,y):S.projectionMatrix.copy(M.projectionMatrix),W(I,S,X)};function W(I,X,K){K===null?I.matrix.copy(X.matrixWorld):(I.matrix.copy(K.matrixWorld),I.matrix.invert(),I.matrix.multiply(X.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(X.projectionMatrix),I.projectionMatrixInverse.copy(X.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Va*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(I){l=I,p!==null&&(p.fixedFoveation=I),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=I)};let L=null;function G(I,X){if(h=X.getViewerPose(c||o),x=X,h!==null){let K=h.views;g!==null&&(e.setRenderTargetFramebuffer(u,g.framebuffer),e.setRenderTarget(u));let le=!1;K.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let xe=0;xe<K.length;xe++){let we=K[xe],Ae=null;if(g!==null)Ae=g.getViewport(we);else{let Oe=f.getViewSubImage(p,we);Ae=Oe.viewport,xe===0&&(e.setRenderTargetTextures(u,Oe.colorTexture,p.ignoreDepthValues?void 0:Oe.depthStencilTexture),e.setRenderTarget(u))}let Ee=b[xe];Ee===void 0&&(Ee=new hn,Ee.layers.enable(xe),Ee.viewport=new Lt,b[xe]=Ee),Ee.matrix.fromArray(we.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(we.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),xe===0&&(S.matrix.copy(Ee.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Ee)}}for(let K=0;K<v.length;K++){let le=_[K],xe=v[K];le!==null&&xe!==void 0&&xe.update(le,X,c||o)}L&&L(I,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),x=null}let Z=new pp;Z.setAnimationLoop(G),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}};wo=class{constructor(e={}){let{canvas:t=Tg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,u=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=ts,this.toneMappingExposure=1;let _=this,w=!1,U=0,M=0,y=null,b=-1,S=null,E=new Lt,N=new Lt,k=null,P=new Ne(0),R=0,A=t.width,z=t.height,O=1,V=null,W=null,L=new Lt(0,0,A,z),G=new Lt(0,0,A,z),Z=!1,I=new bo,X=!1,K=!1,le=null,xe=new ut,we=new he,Ae=new H,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return y===null?O:1}let B=i;function me(D,Y){for(let J=0;J<D.length;J++){let ee=D[J],$=t.getContext(ee,Y);if($!==null)return $}return null}try{let D={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",se,!1),B===null){let Y=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Y.shift(),B=me(Y,D),B===null)throw me(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let te,ge,ne,Ue,be,C,T,q,de,ce,ae,ze,ye,Pe,He,Xe,fe,Ke,Qe,ke,Be,De,Ze,ht;function ue(){te=new Nv(B),ge=new Cv(B,te,e),te.init(ge),De=new fM(B,te,ge),ne=new uM(B,te,ge),Ue=new Fv(B),be=new jy,C=new dM(B,te,ne,be,ge,De,Ue),T=new Lv(_),q=new Uv(_),de=new qg(B,ge),Ze=new Av(B,te,de,ge),ce=new zv(B,de,Ue,Ze),ae=new Gv(B,ce,de,Ue),Qe=new kv(B,ge,C),Xe=new Pv(be),ze=new Qy(_,T,q,te,ge,Ze,Xe),ye=new mM(_,be),Pe=new tM,He=new aM(te,ge),Ke=new Tv(_,T,q,ne,ae,p,l),fe=new hM(_,ae,ge),ht=new gM(B,Ue,ge,ne),ke=new Rv(B,te,Ue,ge),Be=new Ov(B,te,Ue,ge),Ue.programs=ze.programs,_.capabilities=ge,_.extensions=te,_.properties=be,_.renderLists=Pe,_.shadowMap=fe,_.state=ne,_.info=Ue}ue();let pe=new Ph(_,B);this.xr=pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let D=te.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=te.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(D){D!==void 0&&(O=D,this.setSize(A,z,!1))},this.getSize=function(D){return D.set(A,z)},this.setSize=function(D,Y,J=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=D,z=Y,t.width=Math.floor(D*O),t.height=Math.floor(Y*O),J===!0&&(t.style.width=D+"px",t.style.height=Y+"px"),this.setViewport(0,0,D,Y)},this.getDrawingBufferSize=function(D){return D.set(A*O,z*O).floor()},this.setDrawingBufferSize=function(D,Y,J){A=D,z=Y,O=J,t.width=Math.floor(D*J),t.height=Math.floor(Y*J),this.setViewport(0,0,D,Y)},this.getCurrentViewport=function(D){return D.copy(E)},this.getViewport=function(D){return D.copy(L)},this.setViewport=function(D,Y,J,ee){D.isVector4?L.set(D.x,D.y,D.z,D.w):L.set(D,Y,J,ee),ne.viewport(E.copy(L).multiplyScalar(O).floor())},this.getScissor=function(D){return D.copy(G)},this.setScissor=function(D,Y,J,ee){D.isVector4?G.set(D.x,D.y,D.z,D.w):G.set(D,Y,J,ee),ne.scissor(N.copy(G).multiplyScalar(O).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(D){ne.setScissorTest(Z=D)},this.setOpaqueSort=function(D){V=D},this.setTransparentSort=function(D){W=D},this.getClearColor=function(D){return D.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(D=!0,Y=!0,J=!0){let ee=0;if(D){let $=!1;if(y!==null){let Le=y.texture.format;$=Le===op||Le===rp||Le===sp}if($){let Le=y.texture.type,Fe=Le===ns||Le===Qi||Le===au||Le===Is||Le===np||Le===ip,Ge=Ke.getClearColor(),We=Ke.getClearAlpha(),tt=Ge.r,$e=Ge.g,Je=Ge.b;Fe?(g[0]=tt,g[1]=$e,g[2]=Je,g[3]=We,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=tt,x[1]=$e,x[2]=Je,x[3]=We,B.clearBufferiv(B.COLOR,0,x))}else ee|=B.COLOR_BUFFER_BIT}Y&&(ee|=B.DEPTH_BUFFER_BIT),J&&(ee|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Pe.dispose(),He.dispose(),be.dispose(),T.dispose(),q.dispose(),ae.dispose(),Ze.dispose(),ht.dispose(),ze.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ht),pe.removeEventListener("sessionend",Ye),le&&(le.dispose(),le=null),mt.stop()};function j(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let D=Ue.autoReset,Y=fe.enabled,J=fe.autoUpdate,ee=fe.needsUpdate,$=fe.type;ue(),Ue.autoReset=D,fe.enabled=Y,fe.autoUpdate=J,fe.needsUpdate=ee,fe.type=$}function se(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function oe(D){let Y=D.target;Y.removeEventListener("dispose",oe),Se(Y)}function Se(D){Re(D),be.remove(D)}function Re(D){let Y=be.get(D).programs;Y!==void 0&&(Y.forEach(function(J){ze.releaseProgram(J)}),D.isShaderMaterial&&ze.releaseShaderCache(D))}this.renderBufferDirect=function(D,Y,J,ee,$,Le){Y===null&&(Y=Ee);let Fe=$.isMesh&&$.matrixWorld.determinant()<0,Ge=ia(D,Y,J,ee,$);ne.setMaterial(ee,Fe);let We=J.index,tt=1;if(ee.wireframe===!0){if(We=ce.getWireframeAttribute(J),We===void 0)return;tt=2}let $e=J.drawRange,Je=J.attributes.position,qt=$e.start*tt,Fn=($e.start+$e.count)*tt;Le!==null&&(qt=Math.max(qt,Le.start*tt),Fn=Math.min(Fn,(Le.start+Le.count)*tt)),We!==null?(qt=Math.max(qt,0),Fn=Math.min(Fn,We.count)):Je!=null&&(qt=Math.max(qt,0),Fn=Math.min(Fn,Je.count));let nn=Fn-qt;if(nn<0||nn===1/0)return;Ze.setup($,ee,Ge,J,We);let wi,Nt=ke;if(We!==null&&(wi=de.get(We),Nt=Be,Nt.setIndex(wi)),$.isMesh)ee.wireframe===!0?(ne.setLineWidth(ee.wireframeLinewidth*Oe()),Nt.setMode(B.LINES)):Nt.setMode(B.TRIANGLES);else if($.isLine){let nt=ee.linewidth;nt===void 0&&(nt=1),ne.setLineWidth(nt*Oe()),$.isLineSegments?Nt.setMode(B.LINES):$.isLineLoop?Nt.setMode(B.LINE_LOOP):Nt.setMode(B.LINE_STRIP)}else $.isPoints?Nt.setMode(B.POINTS):$.isSprite&&Nt.setMode(B.TRIANGLES);if($.isBatchedMesh)Nt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)Nt.renderInstances(qt,nn,$.count);else if(J.isInstancedBufferGeometry){let nt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mc=Math.min(J.instanceCount,nt);Nt.renderInstances(qt,nn,Mc)}else Nt.render(qt,nn)};function qe(D,Y,J){D.transparent===!0&&D.side===wt&&D.forceSinglePass===!1?(D.side=on,D.needsUpdate=!0,$t(D,Y,J),D.side=is,D.needsUpdate=!0,$t(D,Y,J),D.side=wt):$t(D,Y,J)}this.compile=function(D,Y,J=null){J===null&&(J=D),d=He.get(J),d.init(),v.push(d),J.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),D!==J&&D.traverseVisible(function($){$.isLight&&$.layers.test(Y.layers)&&(d.pushLight($),$.castShadow&&d.pushShadow($))}),d.setupLights(_._useLegacyLights);let ee=new Set;return D.traverse(function($){let Le=$.material;if(Le)if(Array.isArray(Le))for(let Fe=0;Fe<Le.length;Fe++){let Ge=Le[Fe];qe(Ge,J,$),ee.add(Ge)}else qe(Le,J,$),ee.add(Le)}),v.pop(),d=null,ee},this.compileAsync=function(D,Y,J=null){let ee=this.compile(D,Y,J);return new Promise($=>{function Le(){if(ee.forEach(function(Fe){be.get(Fe).currentProgram.isReady()&&ee.delete(Fe)}),ee.size===0){$(D);return}setTimeout(Le,10)}te.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let at=null;function yt(D){at&&at(D)}function Ht(){mt.stop()}function Ye(){mt.start()}let mt=new pp;mt.setAnimationLoop(yt),typeof self<"u"&&mt.setContext(self),this.setAnimationLoop=function(D){at=D,pe.setAnimationLoop(D),D===null?mt.stop():mt.start()},pe.addEventListener("sessionstart",Ht),pe.addEventListener("sessionend",Ye),this.render=function(D,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(Y),Y=pe.getCamera()),D.isScene===!0&&D.onBeforeRender(_,D,Y,y),d=He.get(D,v.length),d.init(),v.push(d),xe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I.setFromProjectionMatrix(xe),K=this.localClippingEnabled,X=Xe.init(this.clippingPlanes,K),m=Pe.get(D,u.length),m.init(),u.push(m),En(D,Y,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(V,W),this.info.render.frame++,X===!0&&Xe.beginShadows();let J=d.state.shadowsArray;if(fe.render(J,D,Y),X===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(m,D),d.setupLights(_._useLegacyLights),Y.isArrayCamera){let ee=Y.cameras;for(let $=0,Le=ee.length;$<Le;$++){let Fe=ee[$];Xi(m,D,Fe,Fe.viewport)}}else Xi(m,D,Y);y!==null&&(C.updateMultisampleRenderTarget(y),C.updateRenderTargetMipmap(y)),D.isScene===!0&&D.onAfterRender(_,D,Y),Ze.resetDefaultState(),b=-1,S=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,u.pop(),u.length>0?m=u[u.length-1]:m=null};function En(D,Y,J,ee){if(D.visible===!1)return;if(D.layers.test(Y.layers)){if(D.isGroup)J=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(Y);else if(D.isLight)d.pushLight(D),D.castShadow&&d.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||I.intersectsSprite(D)){ee&&Ae.setFromMatrixPosition(D.matrixWorld).applyMatrix4(xe);let Fe=ae.update(D),Ge=D.material;Ge.visible&&m.push(D,Fe,Ge,J,Ae.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||I.intersectsObject(D))){let Fe=ae.update(D),Ge=D.material;if(ee&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ae.copy(D.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ae.copy(Fe.boundingSphere.center)),Ae.applyMatrix4(D.matrixWorld).applyMatrix4(xe)),Array.isArray(Ge)){let We=Fe.groups;for(let tt=0,$e=We.length;tt<$e;tt++){let Je=We[tt],qt=Ge[Je.materialIndex];qt&&qt.visible&&m.push(D,Fe,qt,J,Ae.z,Je)}}else Ge.visible&&m.push(D,Fe,Ge,J,Ae.z,null)}}let Le=D.children;for(let Fe=0,Ge=Le.length;Fe<Ge;Fe++)En(Le[Fe],Y,J,ee)}function Xi(D,Y,J,ee){let $=D.opaque,Le=D.transmissive,Fe=D.transparent;d.setupLightsView(J),X===!0&&Xe.setGlobalState(_.clippingPlanes,J),Le.length>0&&qi($,Le,Y,J),ee&&ne.viewport(E.copy(ee)),$.length>0&&St($,Y,J),Le.length>0&&St(Le,Y,J),Fe.length>0&&St(Fe,Y,J),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function qi(D,Y,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;let Le=ge.isWebGL2;le===null&&(le=new An(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?ri:ns,minFilter:Eo,samples:Le?4:0})),_.getDrawingBufferSize(we),Le?le.setSize(we.x,we.y):le.setSize(gh(we.x),gh(we.y));let Fe=_.getRenderTarget();_.setRenderTarget(le),_.getClearColor(P),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear();let Ge=_.toneMapping;_.toneMapping=ts,St(D,J,ee),C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le);let We=!1;for(let tt=0,$e=Y.length;tt<$e;tt++){let Je=Y[tt],qt=Je.object,Fn=Je.geometry,nn=Je.material,wi=Je.group;if(nn.side===wt&&qt.layers.test(ee.layers)){let Nt=nn.side;nn.side=on,nn.needsUpdate=!0,Ct(qt,J,ee,Fn,nn,wi),nn.side=Nt,nn.needsUpdate=!0,We=!0}}We===!0&&(C.updateMultisampleRenderTarget(le),C.updateRenderTargetMipmap(le)),_.setRenderTarget(Fe),_.setClearColor(P,R),_.toneMapping=Ge}function St(D,Y,J){let ee=Y.isScene===!0?Y.overrideMaterial:null;for(let $=0,Le=D.length;$<Le;$++){let Fe=D[$],Ge=Fe.object,We=Fe.geometry,tt=ee===null?Fe.material:ee,$e=Fe.group;Ge.layers.test(J.layers)&&Ct(Ge,Y,J,We,tt,$e)}}function Ct(D,Y,J,ee,$,Le){D.onBeforeRender(_,Y,J,ee,$,Le),D.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(_,Y,J,ee,D,Le),$.transparent===!0&&$.side===wt&&$.forceSinglePass===!1?($.side=on,$.needsUpdate=!0,_.renderBufferDirect(J,Y,ee,$,D,Le),$.side=is,$.needsUpdate=!0,_.renderBufferDirect(J,Y,ee,$,D,Le),$.side=wt):_.renderBufferDirect(J,Y,ee,$,D,Le),D.onAfterRender(_,Y,J,ee,$,Le)}function $t(D,Y,J){Y.isScene!==!0&&(Y=Ee);let ee=be.get(D),$=d.state.lights,Le=d.state.shadowsArray,Fe=$.state.version,Ge=ze.getParameters(D,$.state,Le,Y,J),We=ze.getProgramCacheKey(Ge),tt=ee.programs;ee.environment=D.isMeshStandardMaterial?Y.environment:null,ee.fog=Y.fog,ee.envMap=(D.isMeshStandardMaterial?q:T).get(D.envMap||ee.environment),tt===void 0&&(D.addEventListener("dispose",oe),tt=new Map,ee.programs=tt);let $e=tt.get(We);if($e!==void 0){if(ee.currentProgram===$e&&ee.lightsStateVersion===Fe)return io(D,Ge),$e}else Ge.uniforms=ze.getUniforms(D),D.onBuild(J,Ge,_),D.onBeforeCompile(Ge,_),$e=ze.acquireProgram(Ge,We),tt.set(We,$e),ee.uniforms=Ge.uniforms;let Je=ee.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Je.clippingPlanes=Xe.uniform),io(D,Ge),ee.needsLights=ro(D),ee.lightsStateVersion=Fe,ee.needsLights&&(Je.ambientLightColor.value=$.state.ambient,Je.lightProbe.value=$.state.probe,Je.directionalLights.value=$.state.directional,Je.directionalLightShadows.value=$.state.directionalShadow,Je.spotLights.value=$.state.spot,Je.spotLightShadows.value=$.state.spotShadow,Je.rectAreaLights.value=$.state.rectArea,Je.ltc_1.value=$.state.rectAreaLTC1,Je.ltc_2.value=$.state.rectAreaLTC2,Je.pointLights.value=$.state.point,Je.pointLightShadows.value=$.state.pointShadow,Je.hemisphereLights.value=$.state.hemi,Je.directionalShadowMap.value=$.state.directionalShadowMap,Je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Je.spotShadowMap.value=$.state.spotShadowMap,Je.spotLightMatrix.value=$.state.spotLightMatrix,Je.spotLightMap.value=$.state.spotLightMap,Je.pointShadowMap.value=$.state.pointShadowMap,Je.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=$e,ee.uniformsList=null,$e}function er(D){if(D.uniformsList===null){let Y=D.currentProgram.getUniforms();D.uniformsList=Tr.seqWithValue(Y.seq,D.uniforms)}return D.uniformsList}function io(D,Y){let J=be.get(D);J.outputColorSpace=Y.outputColorSpace,J.batching=Y.batching,J.instancing=Y.instancing,J.instancingColor=Y.instancingColor,J.skinning=Y.skinning,J.morphTargets=Y.morphTargets,J.morphNormals=Y.morphNormals,J.morphColors=Y.morphColors,J.morphTargetsCount=Y.morphTargetsCount,J.numClippingPlanes=Y.numClippingPlanes,J.numIntersection=Y.numClipIntersection,J.vertexAlphas=Y.vertexAlphas,J.vertexTangents=Y.vertexTangents,J.toneMapping=Y.toneMapping}function ia(D,Y,J,ee,$){Y.isScene!==!0&&(Y=Ee),C.resetTextureUnits();let Le=Y.fog,Fe=ee.isMeshStandardMaterial?Y.environment:null,Ge=y===null?_.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Oi,We=(ee.isMeshStandardMaterial?q:T).get(ee.envMap||Fe),tt=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$e=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Je=!!J.morphAttributes.position,qt=!!J.morphAttributes.normal,Fn=!!J.morphAttributes.color,nn=ts;ee.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(nn=_.toneMapping);let wi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Nt=wi!==void 0?wi.length:0,nt=be.get(ee),Mc=d.state.lights;if(X===!0&&(K===!0||D!==S)){let Xn=D===S&&ee.id===b;Xe.setState(ee,D,Xn)}let kt=!1;ee.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Mc.state.version||nt.outputColorSpace!==Ge||$.isBatchedMesh&&nt.batching===!1||!$.isBatchedMesh&&nt.batching===!0||$.isInstancedMesh&&nt.instancing===!1||!$.isInstancedMesh&&nt.instancing===!0||$.isSkinnedMesh&&nt.skinning===!1||!$.isSkinnedMesh&&nt.skinning===!0||$.isInstancedMesh&&nt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&nt.instancingColor===!1&&$.instanceColor!==null||nt.envMap!==We||ee.fog===!0&&nt.fog!==Le||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Xe.numPlanes||nt.numIntersection!==Xe.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==$e||nt.morphTargets!==Je||nt.morphNormals!==qt||nt.morphColors!==Fn||nt.toneMapping!==nn||ge.isWebGL2===!0&&nt.morphTargetsCount!==Nt)&&(kt=!0):(kt=!0,nt.__version=ee.version);let Ss=nt.currentProgram;kt===!0&&(Ss=$t(ee,Y,$));let gd=!1,oo=!1,Sc=!1,mn=Ss.getUniforms(),Es=nt.uniforms;if(ne.useProgram(Ss.program)&&(gd=!0,oo=!0,Sc=!0),ee.id!==b&&(b=ee.id,oo=!0),gd||S!==D){mn.setValue(B,"projectionMatrix",D.projectionMatrix),mn.setValue(B,"viewMatrix",D.matrixWorldInverse);let Xn=mn.map.cameraPosition;Xn!==void 0&&Xn.setValue(B,Ae.setFromMatrixPosition(D.matrixWorld)),ge.logarithmicDepthBuffer&&mn.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&mn.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),S!==D&&(S=D,oo=!0,Sc=!0)}if($.isSkinnedMesh){mn.setOptional(B,$,"bindMatrix"),mn.setOptional(B,$,"bindMatrixInverse");let Xn=$.skeleton;Xn&&(ge.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),mn.setValue(B,"boneTexture",Xn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(mn.setOptional(B,$,"batchingTexture"),mn.setValue(B,"batchingTexture",$._matricesTexture,C));let Ec=J.morphAttributes;if((Ec.position!==void 0||Ec.normal!==void 0||Ec.color!==void 0&&ge.isWebGL2===!0)&&Qe.update($,J,Ss),(oo||nt.receiveShadow!==$.receiveShadow)&&(nt.receiveShadow=$.receiveShadow,mn.setValue(B,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Es.envMap.value=We,Es.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),oo&&(mn.setValue(B,"toneMappingExposure",_.toneMappingExposure),nt.needsLights&&so(Es,Sc),Le&&ee.fog===!0&&ye.refreshFogUniforms(Es,Le),ye.refreshMaterialUniforms(Es,ee,O,z,le),Tr.upload(B,er(nt),Es,C)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Tr.upload(B,er(nt),Es,C),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&mn.setValue(B,"center",$.center),mn.setValue(B,"modelViewMatrix",$.modelViewMatrix),mn.setValue(B,"normalMatrix",$.normalMatrix),mn.setValue(B,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let Xn=ee.uniformsGroups;for(let bc=0,C0=Xn.length;bc<C0;bc++)if(ge.isWebGL2){let xd=Xn[bc];ht.update(xd,Ss),ht.bind(xd,Ss)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ss}function so(D,Y){D.ambientLightColor.needsUpdate=Y,D.lightProbe.needsUpdate=Y,D.directionalLights.needsUpdate=Y,D.directionalLightShadows.needsUpdate=Y,D.pointLights.needsUpdate=Y,D.pointLightShadows.needsUpdate=Y,D.spotLights.needsUpdate=Y,D.spotLightShadows.needsUpdate=Y,D.rectAreaLights.needsUpdate=Y,D.hemisphereLights.needsUpdate=Y}function ro(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(D,Y,J){be.get(D.texture).__webglTexture=Y,be.get(D.depthTexture).__webglTexture=J;let ee=be.get(D);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,Y){let J=be.get(D);J.__webglFramebuffer=Y,J.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(D,Y=0,J=0){y=D,U=Y,M=J;let ee=!0,$=null,Le=!1,Fe=!1;if(D){let We=be.get(D);We.__useDefaultFramebuffer!==void 0?(ne.bindFramebuffer(B.FRAMEBUFFER,null),ee=!1):We.__webglFramebuffer===void 0?C.setupRenderTarget(D):We.__hasExternalTextures&&C.rebindTextures(D,be.get(D.texture).__webglTexture,be.get(D.depthTexture).__webglTexture);let tt=D.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Fe=!0);let $e=be.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($e[Y])?$=$e[Y][J]:$=$e[Y],Le=!0):ge.isWebGL2&&D.samples>0&&C.useMultisampledRTT(D)===!1?$=be.get(D).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[J]:$=$e,E.copy(D.viewport),N.copy(D.scissor),k=D.scissorTest}else E.copy(L).multiplyScalar(O).floor(),N.copy(G).multiplyScalar(O).floor(),k=Z;if(ne.bindFramebuffer(B.FRAMEBUFFER,$)&&ge.drawBuffers&&ee&&ne.drawBuffers(D,$),ne.viewport(E),ne.scissor(N),ne.setScissorTest(k),Le){let We=be.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,We.__webglTexture,J)}else if(Fe){let We=be.get(D.texture),tt=Y||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,J||0,tt)}b=-1},this.readRenderTargetPixels=function(D,Y,J,ee,$,Le,Fe){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=be.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){ne.bindFramebuffer(B.FRAMEBUFFER,Ge);try{let We=D.texture,tt=We.format,$e=We.type;if(tt!==si&&De.convert(tt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=$e===ri&&(te.has("EXT_color_buffer_half_float")||ge.isWebGL2&&te.has("EXT_color_buffer_float"));if($e!==ns&&De.convert($e)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===ji&&(ge.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=D.width-ee&&J>=0&&J<=D.height-$&&B.readPixels(Y,J,ee,$,De.convert(tt),De.convert($e),Le)}finally{let We=y!==null?be.get(y).__webglFramebuffer:null;ne.bindFramebuffer(B.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(D,Y,J=0){let ee=Math.pow(2,-J),$=Math.floor(Y.image.width*ee),Le=Math.floor(Y.image.height*ee);C.setTexture2D(Y,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,D.x,D.y,$,Le),ne.unbindTexture()},this.copyTextureToTexture=function(D,Y,J,ee=0){let $=Y.image.width,Le=Y.image.height,Fe=De.convert(J.format),Ge=De.convert(J.type);C.setTexture2D(J,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment),Y.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ee,D.x,D.y,$,Le,Fe,Ge,Y.image.data):Y.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ee,D.x,D.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Fe,Y.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,ee,D.x,D.y,Fe,Ge,Y.image),ee===0&&J.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(D,Y,J,ee,$=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=D.max.x-D.min.x+1,Fe=D.max.y-D.min.y+1,Ge=D.max.z-D.min.z+1,We=De.convert(ee.format),tt=De.convert(ee.type),$e;if(ee.isData3DTexture)C.setTexture3D(ee,0),$e=B.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)C.setTexture2DArray(ee,0),$e=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,ee.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,ee.unpackAlignment);let Je=B.getParameter(B.UNPACK_ROW_LENGTH),qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Fn=B.getParameter(B.UNPACK_SKIP_PIXELS),nn=B.getParameter(B.UNPACK_SKIP_ROWS),wi=B.getParameter(B.UNPACK_SKIP_IMAGES),Nt=J.isCompressedTexture?J.mipmaps[$]:J.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Nt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Nt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,D.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,D.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,D.min.z),J.isDataTexture||J.isData3DTexture?B.texSubImage3D($e,$,Y.x,Y.y,Y.z,Le,Fe,Ge,We,tt,Nt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D($e,$,Y.x,Y.y,Y.z,Le,Fe,Ge,We,Nt.data)):B.texSubImage3D($e,$,Y.x,Y.y,Y.z,Le,Fe,Ge,We,tt,Nt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Fn),B.pixelStorei(B.UNPACK_SKIP_ROWS,nn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,wi),$===0&&ee.generateMipmaps&&B.generateMipmap($e),ne.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?C.setTextureCube(D,0):D.isData3DTexture?C.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?C.setTexture2DArray(D,0):C.setTexture2D(D,0),ne.unbindTexture()},this.resetState=function(){U=0,M=0,y=null,ne.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===lu?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===Ml?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Us:lp}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Us?vt:Oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Lh=class extends wo{};Lh.prototype.isWebGL1Renderer=!0;nl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ih=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ph,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},bn=new H,il=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyMatrix4(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.applyNormalMatrix(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bn.fromBufferAttribute(this,t),bn.transformDirection(e),this.setXYZ(t,bn.x,bn.y,bn.z);return this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Di(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),i=bt(i,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ns=class extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},uo=new H,_r=new H,vr=new H,yr=new he,fo=new he,yp=new ut,Ta=new H,po=new H,Aa=new H,Bf=new he,ih=new he,Hf=new he,Ur=class extends Yt{constructor(e=new Ns){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ih(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new il(i,3,0,!1)),xr.setAttribute("uv",new il(i,2,3,!1))}this.geometry=xr,this.material=e,this.center=new he(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),yp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-vr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ra(Ta.set(-.5,-.5,0),vr,o,_r,s,r),Ra(po.set(.5,-.5,0),vr,o,_r,s,r),Ra(Aa.set(.5,.5,0),vr,o,_r,s,r),Bf.set(0,0),ih.set(1,0),Hf.set(1,1);let a=e.ray.intersectTriangle(Ta,po,Aa,!1,uo);if(a===null&&(Ra(po.set(-.5,.5,0),vr,o,_r,s,r),ih.set(0,1),a=e.ray.intersectTriangle(Ta,Aa,po,!1,uo),a===null))return;let l=e.ray.origin.distanceTo(uo);l<e.near||l>e.far||t.push({distance:l,point:uo.clone(),uv:Ls.getInterpolation(uo,Ta,po,Aa,Bf,ih,Hf,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};sl=class extends _n{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Mr=new ut,kf=new ut,Ca=[],Gf=new Fi,xM=new ut,mo=new ie,go=new rs,It=class extends ie{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sl(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,xM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mr),Gf.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(Gf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Mr),go.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(mo.geometry=this.geometry,mo.material=this.material,mo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),go.copy(this.boundingSphere),go.applyMatrix4(i),e.ray.intersectsSphere(go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),kf.multiplyMatrices(i,Mr),mo.matrixWorld=kf,mo.raycast(e,Ca);for(let o=0,a=Ca.length;o<a;o++){let l=Ca[o];l.instanceId=r,l.object=this,t.push(l)}Ca.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},To=class extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vf=new ut,Dh=new Za,Pa=new rs,La=new H,rl=class extends Yt{constructor(e=new Kt,t=new To){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pa.copy(i.boundingSphere),Pa.applyMatrix4(s),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;Vf.copy(s).invert(),Dh.copy(e.ray).applyMatrix4(Vf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let x=p,m=g;x<m;x++){let d=c.getX(x);La.fromBufferAttribute(f,d),Wf(La,d,l,s,e,t,this)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=p,m=g;x<m;x++)La.fromBufferAttribute(f,x),Wf(La,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};un=class extends $n{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,g=(o-h)/p;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new H);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new H,s=[],r=[],o=[],a=new H,l=new ut;for(let g=0;g<=e;g++){let x=g/e;s[g]=this.getTangentAt(x,new H)}r[0]=new H,o[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(rn(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,x))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(rn(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],g*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ao=class extends Jn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new he,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,g=c-this.aY;l=p*h-g*f+this.aX,c=p*f+g*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uh=class extends Ao{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Ia=new H,sh=new hu,rh=new hu,oh=new hu,Nh=class extends Jn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ia.subVectors(s[0],s[1]).add(s[0]),c=Ia);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ia.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ia),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(p),g),d=Math.pow(p.distanceToSquared(h),g);m<1e-4&&(m=1),x<1e-4&&(x=m),d<1e-4&&(d=m),sh.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,x,m,d),rh.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,x,m,d),oh.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,x,m,d)}else this.curveType==="catmullrom"&&(sh.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),rh.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),oh.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return i.set(sh.calc(l),rh.calc(l),oh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ol=class extends Jn{constructor(e=new he,t=new he,i=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zh=class extends Jn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Mo(e,s.x,r.x,o.x,a.x),Mo(e,s.y,r.y,o.y,a.y),Mo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends Jn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oh=class extends Jn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends Jn{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fh=class extends Jn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yo(e,s.x,r.x,o.x),yo(e,s.y,r.y,o.y),yo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Xf(a,l.x,c.x,h.x,f.x),Xf(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},Bh=Object.freeze({__proto__:null,ArcCurve:Uh,CatmullRomCurve3:Nh,CubicBezierCurve:ol,CubicBezierCurve3:zh,EllipseCurve:Ao,LineCurve:al,LineCurve3:Oh,QuadraticBezierCurve:ll,QuadraticBezierCurve3:Fh,SplineCurve:cl}),Hh=class extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Bh[s.type]().fromJSON(s))}return this}},zs=class extends Hh{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new al(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ll(this.currentPoint.clone(),new he(e,t),new he(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ol(this.currentPoint.clone(),new he(e,t),new he(i,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new cl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Ao(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},kh=class n extends Kt{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=rn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new H,p=new he,g=new H,x=new H,m=new H,d=0,u=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:d=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,g.x=u*1,g.y=-d,g.z=u*0,m.copy(g),g.normalize(),l.push(g.x,g.y,g.z);break;case e.length-1:l.push(m.x,m.y,m.z);break;default:d=e[v+1].x-e[v].x,u=e[v+1].y-e[v].y,g.x=u*1,g.y=-d,g.z=u*0,x.copy(g),g.x+=m.x,g.y+=m.y,g.z+=m.z,g.normalize(),l.push(g.x,g.y,g.z),m.copy(x)}for(let v=0;v<=t;v++){let _=i+v*h*s,w=Math.sin(_),U=Math.cos(_);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*w,f.y=e[M].y,f.z=e[M].x*U,o.push(f.x,f.y,f.z),p.x=v/t,p.y=M/(e.length-1),a.push(p.x,p.y);let y=l[3*M+0]*w,b=l[3*M+1],S=l[3*M+0]*U;c.push(y,b,S)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let w=_+v*e.length,U=w,M=w+e.length,y=w+e.length+1,b=w+1;r.push(U,M,b),r.push(y,b,M)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},hl=class n extends kh{constructor(e=1,t=1,i=4,s=8){let r=new zs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Nr=class n extends Kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new H,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let g=i+f/t*s;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mt=class n extends Kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],g=[],x=0,m=[],d=i/2,u=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new dt(f,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(g,2));function v(){let w=new H,U=new H,M=0,y=(t-e)/i;for(let b=0;b<=r;b++){let S=[],E=b/r,N=E*(t-e)+e;for(let k=0;k<=s;k++){let P=k/s,R=P*l+a,A=Math.sin(R),z=Math.cos(R);U.x=N*A,U.y=-E*i+d,U.z=N*z,f.push(U.x,U.y,U.z),w.set(A,y,z).normalize(),p.push(w.x,w.y,w.z),g.push(P,1-E),S.push(x++)}m.push(S)}for(let b=0;b<s;b++)for(let S=0;S<r;S++){let E=m[S][b],N=m[S+1][b],k=m[S+1][b+1],P=m[S][b+1];h.push(E,N,P),h.push(N,k,P),M+=6}c.addGroup(u,M,0),u+=M}function _(w){let U=x,M=new he,y=new H,b=0,S=w===!0?e:t,E=w===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,d*E,0),p.push(0,E,0),g.push(.5,.5),x++;let N=x;for(let k=0;k<=s;k++){let R=k/s*l+a,A=Math.cos(R),z=Math.sin(R);y.x=S*z,y.y=d*E,y.z=S*A,f.push(y.x,y.y,y.z),p.push(0,E,0),M.x=A*.5+.5,M.y=z*.5*E+.5,g.push(M.x,M.y),x++}for(let k=0;k<s;k++){let P=U+k,R=N+k;w===!0?h.push(R,R+1,P):h.push(R+1,R,P),b+=3}c.addGroup(u,b,w===!0?1:2),u+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zr=class n extends Mt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ro=class extends zs{constructor(e){super(e),this.uuid=Ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new zs().fromJSON(s))}return this}},wM={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Mp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,p,g;if(i&&(r=PM(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let x=t;x<s;x+=t)f=n[x],p=n[x+1],f<a&&(a=f),p<l&&(l=p),f>c&&(c=f),p>h&&(h=p);g=Math.max(c-a,h-l),g=g!==0?32767/g:0}return Co(r,o,t,a,l,g,0),o}};So=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Yf(e),Zf(i,e);let o=e.length;t.forEach(Yf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Zf(i,t[l]);let a=wM.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};ul=class n extends Kt{constructor(e=new Ro([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:g-.1,m=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:GM,_,w=!1,U,M,y,b;u&&(_=u.getSpacedPoints(h),w=!0,p=!1,U=u.computeFrenetFrames(h,!1),M=new H,y=new H,b=new H),p||(d=0,g=0,x=0,m=0);let S=a.extractPoints(c),E=S.shape,N=S.holes;if(!So.isClockWise(E)){E=E.reverse();for(let B=0,me=N.length;B<me;B++){let te=N[B];So.isClockWise(te)&&(N[B]=te.reverse())}}let P=So.triangulateShape(E,N),R=E;for(let B=0,me=N.length;B<me;B++){let te=N[B];E=E.concat(te)}function A(B,me,te){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(me,te)}let z=E.length,O=P.length;function V(B,me,te){let ge,ne,Ue,be=B.x-me.x,C=B.y-me.y,T=te.x-B.x,q=te.y-B.y,de=be*be+C*C,ce=be*q-C*T;if(Math.abs(ce)>Number.EPSILON){let ae=Math.sqrt(de),ze=Math.sqrt(T*T+q*q),ye=me.x-C/ae,Pe=me.y+be/ae,He=te.x-q/ze,Xe=te.y+T/ze,fe=((He-ye)*q-(Xe-Pe)*T)/(be*q-C*T);ge=ye+be*fe-B.x,ne=Pe+C*fe-B.y;let Ke=ge*ge+ne*ne;if(Ke<=2)return new he(ge,ne);Ue=Math.sqrt(Ke/2)}else{let ae=!1;be>Number.EPSILON?T>Number.EPSILON&&(ae=!0):be<-Number.EPSILON?T<-Number.EPSILON&&(ae=!0):Math.sign(C)===Math.sign(q)&&(ae=!0),ae?(ge=-C,ne=be,Ue=Math.sqrt(de)):(ge=be,ne=C,Ue=Math.sqrt(de/2))}return new he(ge/Ue,ne/Ue)}let W=[];for(let B=0,me=R.length,te=me-1,ge=B+1;B<me;B++,te++,ge++)te===me&&(te=0),ge===me&&(ge=0),W[B]=V(R[B],R[te],R[ge]);let L=[],G,Z=W.concat();for(let B=0,me=N.length;B<me;B++){let te=N[B];G=[];for(let ge=0,ne=te.length,Ue=ne-1,be=ge+1;ge<ne;ge++,Ue++,be++)Ue===ne&&(Ue=0),be===ne&&(be=0),G[ge]=V(te[ge],te[Ue],te[be]);L.push(G),Z=Z.concat(G)}for(let B=0;B<d;B++){let me=B/d,te=g*Math.cos(me*Math.PI/2),ge=x*Math.sin(me*Math.PI/2)+m;for(let ne=0,Ue=R.length;ne<Ue;ne++){let be=A(R[ne],W[ne],ge);xe(be.x,be.y,-te)}for(let ne=0,Ue=N.length;ne<Ue;ne++){let be=N[ne];G=L[ne];for(let C=0,T=be.length;C<T;C++){let q=A(be[C],G[C],ge);xe(q.x,q.y,-te)}}}let I=x+m;for(let B=0;B<z;B++){let me=p?A(E[B],Z[B],I):E[B];w?(y.copy(U.normals[0]).multiplyScalar(me.x),M.copy(U.binormals[0]).multiplyScalar(me.y),b.copy(_[0]).add(y).add(M),xe(b.x,b.y,b.z)):xe(me.x,me.y,0)}for(let B=1;B<=h;B++)for(let me=0;me<z;me++){let te=p?A(E[me],Z[me],I):E[me];w?(y.copy(U.normals[B]).multiplyScalar(te.x),M.copy(U.binormals[B]).multiplyScalar(te.y),b.copy(_[B]).add(y).add(M),xe(b.x,b.y,b.z)):xe(te.x,te.y,f/h*B)}for(let B=d-1;B>=0;B--){let me=B/d,te=g*Math.cos(me*Math.PI/2),ge=x*Math.sin(me*Math.PI/2)+m;for(let ne=0,Ue=R.length;ne<Ue;ne++){let be=A(R[ne],W[ne],ge);xe(be.x,be.y,f+te)}for(let ne=0,Ue=N.length;ne<Ue;ne++){let be=N[ne];G=L[ne];for(let C=0,T=be.length;C<T;C++){let q=A(be[C],G[C],ge);w?xe(q.x,q.y+_[h-1].y,_[h-1].x+te):xe(q.x,q.y,f+te)}}}X(),K();function X(){let B=s.length/3;if(p){let me=0,te=z*me;for(let ge=0;ge<O;ge++){let ne=P[ge];we(ne[2]+te,ne[1]+te,ne[0]+te)}me=h+d*2,te=z*me;for(let ge=0;ge<O;ge++){let ne=P[ge];we(ne[0]+te,ne[1]+te,ne[2]+te)}}else{for(let me=0;me<O;me++){let te=P[me];we(te[2],te[1],te[0])}for(let me=0;me<O;me++){let te=P[me];we(te[0]+z*h,te[1]+z*h,te[2]+z*h)}}i.addGroup(B,s.length/3-B,0)}function K(){let B=s.length/3,me=0;le(R,me),me+=R.length;for(let te=0,ge=N.length;te<ge;te++){let ne=N[te];le(ne,me),me+=ne.length}i.addGroup(B,s.length/3-B,1)}function le(B,me){let te=B.length;for(;--te>=0;){let ge=te,ne=te-1;ne<0&&(ne=B.length-1);for(let Ue=0,be=h+d*2;Ue<be;Ue++){let C=z*Ue,T=z*(Ue+1),q=me+ge+C,de=me+ne+C,ce=me+ne+T,ae=me+ge+T;Ae(q,de,ce,ae)}}}function xe(B,me,te){l.push(B),l.push(me),l.push(te)}function we(B,me,te){Ee(B),Ee(me),Ee(te);let ge=s.length/3,ne=v.generateTopUV(i,s,ge-3,ge-2,ge-1);Oe(ne[0]),Oe(ne[1]),Oe(ne[2])}function Ae(B,me,te,ge){Ee(B),Ee(me),Ee(ge),Ee(me),Ee(te),Ee(ge);let ne=s.length/3,Ue=v.generateSideWallUV(i,s,ne-6,ne-3,ne-2,ne-1);Oe(Ue[0]),Oe(Ue[1]),Oe(Ue[3]),Oe(Ue[1]),Oe(Ue[2]),Oe(Ue[3])}function Ee(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function Oe(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return VM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Bh[s.type]().fromJSON(s)),new n(i,e.options)}},GM={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],p=e[s*3],g=e[s*3+1],x=e[s*3+2],m=e[r*3],d=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-f),new he(p,1-x),new he(m,1-u)]:[new he(a,1-l),new he(h,1-f),new he(g,1-x),new he(d,1-u)]}};oi=class n extends Kt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,p=(t-e)/s,g=new H,x=new he;for(let m=0;m<=s;m++){for(let d=0;d<=i;d++){let u=r+d/i*o;g.x=f*Math.cos(u),g.y=f*Math.sin(u),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,h.push(x.x,x.y)}f+=p}for(let m=0;m<s;m++){let d=m*(i+1);for(let u=0;u<i;u++){let v=u+d,_=v,w=v+i+1,U=v+i+2,M=v+1;a.push(_,w,M),a.push(w,U,M)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Vt=class n extends Kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new H,p=new H,g=[],x=[],m=[],d=[];for(let u=0;u<=i;u++){let v=[],_=u/i,w=0;u===0&&o===0?w=.5/t:u===i&&l===Math.PI&&(w=-.5/t);for(let U=0;U<=t;U++){let M=U/t;f.x=-e*Math.cos(s+M*r)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(s+M*r)*Math.sin(o+_*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),m.push(p.x,p.y,p.z),d.push(M+w,1-_),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<t;v++){let _=h[u][v+1],w=h[u][v],U=h[u+1][v],M=h[u+1][v+1];(u!==0||o>0)&&g.push(_,w,M),(u!==i-1||l<Math.PI)&&g.push(w,U,M)}this.setIndex(g),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(m,3)),this.setAttribute("uv",new dt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},dl=class n extends Kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new H,f=new H,p=new H;for(let g=0;g<=i;g++)for(let x=0;x<=s;x++){let m=x/s*r,d=g/i*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(m),f.y=(e+t*Math.cos(d))*Math.sin(m),f.z=t*Math.sin(d),a.push(f.x,f.y,f.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(g/i)}for(let g=1;g<=i;g++)for(let x=1;x<=s;x++){let m=(s+1)*g+x-1,d=(s+1)*(g-1)+x-1,u=(s+1)*(g-1)+x,v=(s+1)*g+x;o.push(m,d,v),o.push(d,u,v)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},fl=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_e=class extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cp,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},os=class extends _e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Or=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wh=class extends Or{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$d,endingEnd:$d}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Jd:r=e,a=2*t-i;break;case Kd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Jd:o=e,l=2*i-t;break;case Kd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,g=this._weightNext,x=(i-t)/(s-t),m=x*x,d=m*x,u=-p*d+2*p*m-p*x,v=(1+p)*d+(-1.5-2*p)*m+(-.5+p)*x+1,_=(-1-g)*d+(1.5+g)*m+.5*x,w=g*d-g*m;for(let U=0;U!==a;++U)r[U]=u*o[h+U]+v*o[c+U]+_*o[l+U]+w*o[f+U];return r}},Xh=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},qh=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ai=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Na(t,this.TimeBufferType),this.values=Na(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Na(e.times,Array),values:Na(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new qh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Oa:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case Ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Oa;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&WM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ic,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,p=f-i,g=f+i;for(let x=0;x!==i;++x){let m=t[f+x];if(m!==t[p+x]||m!==t[g+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,p=o*i;for(let g=0;g!==i;++g)t[p+g]=t[f+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Fa;Fs=class extends ai{};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Oa;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;Yh=class extends ai{};Yh.prototype.ValueTypeName="color";Zh=class extends ai{};Zh.prototype.ValueTypeName="number";$h=class extends Or{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}},Io=class extends ai{InterpolantFactoryMethodLinear(e){return new $h(this.times,this.values,this.getValueSize(),e)}};Io.prototype.ValueTypeName="quaternion";Io.prototype.DefaultInterpolation=Fa;Io.prototype.InterpolantFactoryMethodSmooth=void 0;Bs=class extends ai{};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Oa;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;Jh=class extends ai{};Jh.prototype.ValueTypeName="vector";Kh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let g=c[f],x=c[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null}}},XM=new Kh,Qh=class{constructor(e){this.manager=e!==void 0?e:XM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Qh.DEFAULT_MATERIAL_NAME="__DEFAULT";Fr=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},pl=class extends Fr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ah=new ut,$f=new H,Jf=new H,Do=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;$f.setFromMatrixPosition(e.matrixWorld),t.position.copy($f),Jf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jf),t.updateMatrixWorld(),ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},jh=class extends Do{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Va*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ml=class extends Fr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Kf=new ut,xo=new H,lh=new H,eu=class extends Do{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),xo.setFromMatrixPosition(e.matrixWorld),i.position.copy(xo),lh.copy(i.position),lh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(lh),i.updateMatrixWorld(),s.makeTranslation(-xo.x,-xo.y,-xo.z),Kf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf)}},gl=class extends Fr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},tu=class extends Do{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xl=class extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new tu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},_l=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Qf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};uu="\\[\\]\\.:\\/",qM=new RegExp("["+uu+"]","g"),du="[^"+uu+"]",YM="[^"+uu.replace("\\.","")+"]",ZM=/((?:WC+[\/:])*)/.source.replace("WC",du),$M=/(WCOD+)?/.source.replace("WCOD",YM),JM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),KM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),QM=new RegExp("^"+ZM+$M+JM+KM+"$"),jM=["material","materials","bones","map"],nu=class{constructor(e,t,i){let s=i||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qM,"")}static parseTrackName(e){let t=QM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);jM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=nu;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];_1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Om={};wc(Om,{RoomEnvironment:()=>ku});function Zr(n){let e=new lt;return e.color.setScalar(n),e}var ku,Fm=Bn(()=>{Dt();ku=class extends Dr{constructor(e=null){super();let t=new Ie;t.deleteAttribute("uv");let i=new _e({side:on}),s=new _e,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new gl(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ie(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new ie(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ie(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new ie(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let f=new ie(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new ie(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let g=new ie(t,s);g.position.set(-2.193,-.369,-5.547),g.rotation.set(0,.516,0),g.scale.set(3.875,3.487,2.986),this.add(g);let x=new ie(t,Zr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let m=new ie(t,Zr(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);let d=new ie(t,Zr(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new ie(t,Zr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let v=new ie(t,Zr(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let _=new ie(t,Zr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var $l,Gu=Bn(()=>{$l={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}});var Gn,IE,Vu,DE,ds,$r=Bn(()=>{Dt();Gn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},IE=new Lr(-1,1,1,-1,0,1),Vu=class extends Kt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},DE=new Vu,ds=class{constructor(e){this._mesh=new ie(DE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,IE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Jr,Wu=Bn(()=>{Dt();$r();Jr=class extends Gn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=as.clone(e.uniforms),this.material=new Qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ds(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Yo,Jl,Xu=Bn(()=>{$r();Yo=class extends Gn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Jl=class extends Gn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Kl,Bm=Bn(()=>{Dt();Gu();Wu();Xu();Xu();Kl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new he);this._width=i.width,this._height=i.height,t=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jr($l),this.copyPass.material.blending=mi,this.clock=new _l}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yo!==void 0&&(o instanceof Yo?i=!0:o instanceof Jl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Ql,Hm=Bn(()=>{Dt();$r();Ql=class extends Gn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var km,Gm=Bn(()=>{Dt();km={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`}});var Kr,Vm=Bn(()=>{Dt();$r();Gu();Gm();Kr=class n extends Gn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new Ne(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,o,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new An(r,o,{type:ri});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let g=new An(r,o,{type:ri});g.texture.name="UnrealBloomPass.v"+f,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),r=Math.round(r/2),o=Math.round(o/2)}let a=km;this.highPassUniforms=as.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new he(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=$l;this.copyUniforms=as.clone(h.uniforms),this.blendMaterial=new Qt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Gt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ne,this.oldClearAlpha=1,this.basic=new lt,this.fsQuad=new ds(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new he(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Qt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Qt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Kr.BlurDirectionX=new he(1,0);Kr.BlurDirectionY=new he(0,1)});var Wm,Xm=Bn(()=>{Wm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`}});var jl,qm=Bn(()=>{Dt();$r();Xm();jl=class extends Gn{constructor(){super();let e=Wm;this.uniforms=as.clone(e.uniforms),this.material=new fl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===iu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===su?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ru?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ou&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Ym={};wc(Ym,{createPostFX:()=>NE});function NE(n,e,t){let i=new Kl(n);i.addPass(new Ql(e,t));let s=new Kr(new he(window.innerWidth,window.innerHeight),.35,.65,.82);i.addPass(s);let r=new Jr(UE);return i.addPass(r),i.addPass(new jl),{composer:i,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){i.setSize(o,a)},setPixelRatio(o){i.setPixelRatio(o)},render(){i.render()}}}var UE,Zm=Bn(()=>{Dt();Bm();Hm();Vm();Wu();qm();UE={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});Dt();var mu={};wc(mu,{CAR_DEFS:()=>Hi,applyCarSkin:()=>fS,buildCar:()=>cS,carDef:()=>pu,effectiveStats:()=>dS,extrudeProfile:()=>No,glassMat:()=>Ap,paintCar:()=>hS,paintMat:()=>Tp,setWheelStyle:()=>uS});Dt();var Hi=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}},{id:"sedan",name:"Prairie Sedan",desc:"Comfy daily driver. Easy to handle.",price:6e3,colors:[7041664,1718891,15921906,7999504,1316380],stats:{topSpeed:48,accel:14,handling:1,grip:1,nitroTime:3,nitroPower:1.3}},{id:"taxi",name:"Peg City Cab",desc:"Yellow cab with a roof sign. Nimble.",price:7500,colors:[16761856,16761856,15921906],stats:{topSpeed:49,accel:15,handling:1.05,grip:1,nitroTime:3,nitroPower:1.3},extra:"taxi"},{id:"van",name:"Delivery Van",desc:"Big box on wheels. Slow, heavy, tough.",price:9e3,colors:[15921906,2060267,2976335,12589080],stats:{topSpeed:42,accel:12,handling:.8,grip:1,nitroTime:4,nitroPower:1.3}},{id:"police",name:"Interceptor",desc:"Police-spec V8 with a light bar.",price:28e3,colors:[1316380,15921906,1718891],stats:{topSpeed:60,accel:19,handling:1.1,grip:1.15,nitroTime:3.4,nitroPower:1.4},extra:"police"},{id:"hyper",name:"Aurora Hyper",desc:"The fastest thing in the city. Wings and all.",price:9e4,colors:[16735802,11032055,1622208,15921906,1316380],stats:{topSpeed:76,accel:27,handling:1.3,grip:1.4,nitroTime:3.2,nitroPower:1.55}}],pu=n=>Hi.find(e=>e.id===n)||Hi[0],Tp=n=>new os({color:n,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),Ap=()=>new os({color:922652,metalness:.9,roughness:.08,envMapIntensity:1.6}),Rp=()=>new _e({color:14672872,metalness:1,roughness:.22}),eS=()=>new _e({color:1316378,metalness:.4,roughness:.6}),tS=()=>new _e({color:789775,roughness:.95}),nS=()=>new _e({color:12172998,metalness:1,roughness:.3}),iS=()=>new _e({color:5922404,metalness:.9,roughness:.45}),sS=()=>new _e({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),rS=()=>new _e({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),oS=()=>new _e({color:15263976,roughness:.5}),bp=(n,e,t)=>({x:n,y:e,r:t}),aS={taxi:"sedan",police:"sedan"},fu={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},sedan:{W:1.84,wb:1.4,wheelR:.33,track:1.58,body:[[2.3,.3],[2.34,.5],[2.15,.68],[1.25,.78],[.6,.82],[-1.5,.84],[-2.1,.8],[-2.3,.62],[-2.3,.36],[-2,.22],[2,.22]],glass:[[.62,.8],[.25,1.28],[-1.05,1.3],[-1.5,.84]],roof:[[.28,1.24],[-1.08,1.26],[-1.12,1.2],[.24,1.18]],splitter:!1},van:{W:2,wb:1.6,wheelR:.36,track:1.68,body:[[2.45,.3],[2.5,.6],[2.35,.95],[1.6,1.1],[.95,1.1],[.95,2],[-2.45,2],[-2.5,1.85],[-2.5,.35],[-2.2,.24],[2.2,.24]],glass:[[1.62,1.1],[1.05,1.95],[.9,1.95],[.9,1.1]],roof:null,splitter:!1},hyper:{W:2.04,wb:1.4,wheelR:.34,track:1.72,body:[[2.4,.2],[2.45,.38],[2.2,.5],[1.2,.6],[.5,.68],[-1.3,.74],[-2,.72],[-2.35,.6],[-2.4,.38],[-2.3,.2],[-2,.14],[2,.14]],glass:[[.6,.66],[0,1],[-.9,1.02],[-1.4,.74]],roof:[[.04,.97],[-.92,.99],[-.95,.93],[0,.92]],wing:!0,splitter:!0,canards:!0},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function No(n,e,t,i,s=.045){let r=new Ro;r.moveTo(n[0][0],n[0][1]);for(let l=1;l<n.length;l++)r.lineTo(n[l][0],n[l][1]);r.closePath();for(let l of i||[]){let c=new zs;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new ul(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new ie(o,t);return a.castShadow=!0,a}function lS(n,e,t){let i=new rt,s=new ie(new Mt(e,e,.26,22),tS());s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);let r=new ie(new Mt(e*.52,e*.52,.27,18),iS());r.rotation.z=Math.PI/2,i.add(r);let o=new ie(new dl(e*.62,e*.1,8,22),t);o.rotation.y=Math.PI/2,i.add(o);let a=new rt;for(let h=0;h<5;h++){let f=new ie(new Ie(.05,e*.6,e*.16),t);f.position.y=e*.3;let p=new rt;p.rotation.x=h/5*Math.PI*2,p.add(f),a.add(p)}let l=a.clone();l.rotation.y=Math.PI,i.add(a),i.add(l);let c=new ie(new Mt(e*.14,e*.14,.3,12),Rp());return c.rotation.z=Math.PI/2,i.add(c),n==="blackout"?t.color.setHex(1513500):n==="gold"?t.color.setHex(13211182):n==="neon"&&t.color.setHex(2287359),i}function cS(n,e,t="stock"){let i=typeof n=="string"?pu(n):n||Hi[0],s=i.id||"sport";typeof e!="number"&&(e=typeof i.color=="number"?i.color:i.colors[0]);let r=fu[s]||fu[aS[s]]||fu.sport,o=new rt,a=Tp(e),l=Ap(),c=Rp(),h=eS(),f=[bp(r.wb,r.wheelR,r.wheelR+.13),bp(-r.wb,r.wheelR,r.wheelR+.13)];o.add(No(r.body,r.W,a,f)),o.add(No(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(No(r.roof,r.W-.2,a,null,.02));let p=Math.max(...r.body.map(E=>E[0])),g=Math.min(...r.body.map(E=>E[0])),x=-p,m=-g,d=r.W/2,u=[],v=nS();for(let E of[-1,1])for(let N of[-r.wb,r.wb]){let k=lS(t,r.wheelR,v);k.position.set(E*r.track/2,r.wheelR,N),o.add(k),u.push(k)}let _=sS();for(let E of[-1,1]){let N=new ie(new Ie(.34,.16,.1),h);N.position.set(E*(d-.42),.6,x+.02),o.add(N);let k=new ie(new Vt(.085,12,10),_);k.scale.set(1.6,.75,.7),k.position.set(E*(d-.42),.6,x-.03),o.add(k)}let w=new ie(new Ie(d*1.1,.16,.08),h);if(w.position.set(0,.4,x+.01),o.add(w),r.splitter){let E=new ie(new Ie(r.W*.92,.05,.3),h);E.position.set(0,.16,x+.1),o.add(E)}if(r.hoodScoop){let E=new ie(new Ie(.5,.09,.7),h);E.position.set(0,.86,-(r.wb*.55)),o.add(E)}if(r.canards)for(let E of[-1,1]){let N=new ie(new Ie(.22,.03,.3),h);N.position.set(E*(d-.1),.3,x+.12),N.rotation.z=E*.25,o.add(N)}let U=rS(),M=new ie(new Ie(r.W*.78,.1,.06),U);M.position.set(0,.66,m-.02),o.add(M);for(let E of[-1,1]){let N=new ie(new Ie(.12,.06,.065),new _e({color:14540253,emissive:16777215,emissiveIntensity:.6}));N.position.set(E*.28,.66,m-.02),o.add(N)}let y=new ie(new Ie(r.W*.8,.14,.18),h);y.position.set(0,.24,m-.06),o.add(y);for(let E of[-1,1]){let N=new ie(new Mt(.05,.055,.22,12),c);N.rotation.x=Math.PI/2,N.position.set(E*.32,.26,m+.06),o.add(N)}let b=new ie(new Ie(.34,.09,.02),oS());b.position.set(0,.5,m+.005),o.add(b);for(let E of[-1,1]){let N=new ie(new Ie(.1,.03,.05),h);N.position.set(E*(d+.03),1,-(r.wb*.42)),o.add(N);let k=new ie(new Ie(.1,.1,.16),a);k.position.set(E*(d+.09),1.04,-(r.wb*.42)),k.castShadow=!0,o.add(k)}if(r.rails)for(let E of[-1,1]){let N=new ie(new Ie(.06,.05,1.9),h);N.position.set(E*(d-.35),1.72,.1),o.add(N)}if(r.bed){let E=new ie(new Ie(r.W-.5,.06,2),h);E.position.set(0,1.02,g*.55),o.add(E)}if(r.spoiler||r.wing){let E=!!r.wing;for(let k of[-1,1]){let P=new ie(new Ie(.07,E?.3:.16,.24),E?h:a);P.position.set(k*(d-.45),.86+(E?.1:.04),m+.28),o.add(P)}let N=new ie(new Ie(r.W*(E?.92:.8),.045,E?.42:.3),E?h:a);N.position.set(0,E?1.06:.98,m+.28),N.rotation.x=E?-.12:0,N.castShadow=!0,o.add(N)}let S=null;if(i.extra==="taxi"||i.extra==="police"){let E=Math.max(...(r.roof||r.glass).map(k=>k[1]))+.02,N=(r.roof||r.glass).reduce((k,P)=>k+P[0],0)/(r.roof||r.glass).length;if(i.extra==="taxi"){let k=document.createElement("canvas");k.width=128,k.height=32;let P=k.getContext("2d");P.fillStyle="#ffd23f",P.fillRect(0,0,128,32),P.fillStyle="#111",P.font="bold 22px sans-serif",P.textAlign="center",P.fillText("TAXI",64,24);let R=new un(k);R.colorSpace=vt;let A=new ie(new Ie(.62,.2,.26),new _e({map:R,emissive:16777215,emissiveMap:R,emissiveIntensity:.6}));A.position.set(0,E+.1,-N),A.rotation.y=Math.PI/2,o.add(A)}else{let k=new ie(new Ie(1.1,.1,.28),h);k.position.set(0,E+.05,-N),o.add(k);let P=new _e({color:5570560,emissive:16718362,emissiveIntensity:2.5}),R=new _e({color:85,emissive:1723903,emissiveIntensity:2.5}),A=new ie(new Ie(.48,.12,.24),P);A.position.set(-.27,E+.14,-N);let z=new ie(new Ie(.48,.12,.24),R);z.position.set(.27,E+.14,-N),o.add(A,z),S=[P,R]}}return o.userData={flashers:S,defId:s,bodyColor:e,wheels:u,frontWheels:u.filter(E=>E.position.z<0),rim:v,glass:l,paint:a,setBrake:E=>{},profile:r,frontZ:x,rearZ:m},o}function hS(n,e){let t=new Ne(e);n.traverse(i=>{i.isMesh&&i.material&&i.material.isMeshPhysicalMaterial&&i.material.color&&Math.abs(i.material.color.getHex()-n.userData.bodyColor)<2&&!i.material.emissiveIntensity&&i.material.color.copy(t)}),n.userData.bodyColor=e}function uS(n,e){let t=n.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function dS(n,e){let i=(typeof n=="string"?pu(n):n||Hi[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:i.topSpeed*(1+.055*r("engine")),accel:i.accel*(1+.09*r("engine")+.12*r("turbo")),handling:i.handling*(1+.06*r("suspension")),grip:i.grip*(1+.07*r("tires")),nitroTime:i.nitroTime+.5*r("nitro"),nitroPower:i.nitroPower*(1+.08*r("nitro"))}}var wp={clear:4873070,dark:922652,limo:131844};function fS(n,e,t){let i=n.userData;if(typeof e=="number"&&i.paint&&(i.paint.color.setHex(e),i.bodyColor=e),!t)return n;i.rim&&i.rim.color.setHex(t.rims),i.glass&&i.glass.color.setHex(wp[t.tint]??wp.dark),i.skinParts&&(n.remove(i.skinParts),i.skinParts.traverse(o=>{o.isMesh&&o.geometry.dispose()}));let s=new rt;i.skinParts=s,n.add(s);let r=i.profile;if(r&&t.stripes!=="none"){let o=new os({color:t.stripe,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.1});if(t.stripes==="side"){let a=(i.rearZ-i.frontZ)*.86,l=(i.rearZ+i.frontZ)/2,c=r.wheelR+.22;for(let h of[-1,1]){let f=new ie(new Ie(.02,.09,a),o);f.position.set(h*(r.W/2+.05),c,l),s.add(f)}}else{let a=t.stripes==="dual"?[-.22,.22]:[0],l=t.stripes==="dual"?.16:.34;for(let c of a)for(let h of[r.body,r.roof]){if(!h)continue;let f=No(h,l,o,null,.045);f.castShadow=!1,f.scale.set(1,1.012,1.004),f.position.set(c,.006,0),s.add(f)}}}if(t.glow!=null&&r){let o=new lt({color:t.glow,transparent:!0,opacity:.75,blending:Gt,depthWrite:!1,map:pS()}),a=i.rearZ-i.frontZ+1.2,l=new ie(new st(r.W+1.4,a).rotateX(-Math.PI/2),o);l.position.set(0,.07,(i.rearZ+i.frontZ)/2),l.renderOrder=2,s.add(l)}return n}var bl=null;function pS(){if(bl)return bl;let n=document.createElement("canvas");n.width=64,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(32,64,4,32,64,62);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,1),e.fillStyle=t,e.fillRect(0,0,64,128),e.restore(),bl=new un(n),bl}Dt();var mS=1337,gu=null,jt=5,gi=60,ci=14,li=gi+ci,xu=(jt*li+ci)/2,Hs=232,zo=225,_u=9;function gS(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ks(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new un(i);return s.colorSpace=vt,s.anisotropy=4,s}function Cp(){return ks(128,128,(n,e,t)=>{n.fillStyle="#33363b",n.fillRect(0,0,e,t),n.fillStyle="#3a3d42";for(let i=0;i<160;i++)n.fillRect(i*37%e,i*53%t,2,2);n.fillStyle="#cfd3d8",n.fillRect(4,0,4,t),n.fillRect(e-8,0,4,t),n.fillStyle="#e8c33a";for(let i=0;i<t;i+=32)n.fillRect(e/2-3,i,6,16)})}function xS(){return ks(128,256,(n,e,t)=>{n.fillStyle="#8d97a3",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++){let c=(a*7+l*13)%17===0;n.fillStyle=c?"#ffe08a":"#3b4656",n.fillRect(l*r+3,a*o+4,r-6,o-8),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(l*r+3,a*o+4,r-6,3)}})}function _S(){return ks(128,256,(n,e,t)=>{n.fillStyle="#000000",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++)(a*7+l*13)%5===0&&(n.fillStyle=(a+l)%3===0?"#ffd9a0":"#fff3d0",n.fillRect(l*r+3,a*o+4,r-6,o-8))})}var Dn={p:null,q:null,s:null,m:null};function Cn(n,e,t,i,s,r,o,a,l){Dn.p.set(t,i,s),Dn.q.setFromAxisAngle(Dn.up,r),Dn.s.set(o,a,l),Dn.m.compose(Dn.p,Dn.q,Dn.s),n.setMatrixAt(e,Dn.m)}function Pp(n,e,t,i,s){for(let r of n)if(t>r.minX&&e<r.maxX&&s>r.minZ&&i<r.maxZ)return!0;return!1}function Lp(n,e=[]){let t=gS(mS);Dn.p=new H,Dn.q=new In,Dn.s=new H,Dn.m=new ut,Dn.up=new H(0,1,0);let i=[];n.fog=new nl(13623538,200,750);let s=new pl(12572927,6978138,.9);n.add(s);let r=new xl(16774368,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=10,r.shadow.camera.far=400;let o=110;r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.bias=-8e-4,n.add(r),n.add(r.target);let a=70,l=120,c=45,h=16,f=new st(1400,1400);f.rotateX(-Math.PI/2);let p=new ie(f,new _e({color:6130250,roughness:.95,metalness:0,envMapIntensity:.25}));p.receiveShadow=!0,n.add(p);let g=[];for(let ue=0;ue<=jt;ue++)g.push((ue-jt/2)*li);let x=jt*li+ci,m=Cp();m.wrapS=m.wrapT=zi,m.repeat.set(1,x/ci);let d=new st(1,1);d.rotateX(-Math.PI/2);let u=new _e({map:m,roughness:.9,metalness:.05,envMapIntensity:.35}),v=new It(d,u,g.length*2);v.receiveShadow=!0;let _=0;for(let ue of g)Cn(v,_++,ue,.05,0,0,ci,1,x),Cn(v,_++,0,.05,ue,Math.PI/2,ci,1,x);v.instanceMatrix.needsUpdate=!0,n.add(v);let w=new st(1,1);w.rotateX(-Math.PI/2);let U=new It(w,new _e({color:10132898,roughness:.9,metalness:.05,envMapIntensity:.3}),jt*jt);U.receiveShadow=!0;let M=0;for(let ue=0;ue<jt;ue++)for(let pe=0;pe<jt;pe++){let j=(ue-(jt-1)/2)*li,F=(pe-(jt-1)/2)*li;Cn(U,M++,j,.03,F,0,gi,1,gi)}U.instanceMatrix.needsUpdate=!0,n.add(U);let y=xS(),b=new Ie(1,1,1);b.translate(0,.5,0);let S=new _e({map:y,emissiveMap:_S(),emissive:16762995,emissiveIntensity:0,roughness:.85,metalness:.1,envMapIntensity:.4}),E=110,N=new It(b,S,E);N.castShadow=!0,N.receiveShadow=!0;let k=new Ne,P=[],R=[],A=0,z=4,O=0,V=0;for(let ue=0;ue<jt;ue++)for(let pe=0;pe<jt;pe++){let j=(ue-(jt-1)/2)*li,F=(pe-(jt-1)/2)*li,se=ue===O&&pe===V,oe=Math.abs(ue-2)<=1&&Math.abs(pe-2)<=1,Se=t()<.75?4:9,Re=Math.sqrt(Se),qe=(gi-z*2)/Re;for(let at=0;at<Se&&A<E;at++){if(se||t()<.28)continue;let yt=at%Re,Ht=Math.floor(at/Re),Ye=qe*(.55+t()*.3),mt=qe*(.55+t()*.3),En=oe?60:28,Xi=oe?18:10,qi=Xi+t()*(En-Xi),St=j-(gi-z*2)/2+qe*(yt+.5)+(t()-.5)*2,Ct=F-(gi-z*2)/2+qe*(Ht+.5)+(t()-.5)*2,$t=.82+t()*.32,er=t();if(!Pp(e,St-Ye/2,St+Ye/2,Ct-mt/2,Ct+mt/2)){Cn(N,A,St,.03,Ct,0,Ye,qi,mt),er<.45?k.setRGB($t,$t*.97,$t*.95):er<.65?k.setRGB($t,$t*.9,$t*.82):er<.82?k.setRGB($t*.88,$t*.95,$t):k.setRGB($t,$t*.82,$t*.74),N.setColorAt(A,k),P.push({x:St,h:qi,w:Ye,d:mt,z:Ct});{let io=St-j,ia=Ct-F,so=0,ro=0;Math.abs(io)>Math.abs(ia)?so=io>=0?1:-1:ro=ia>=0?1:-1;let D={x:St+so*(Ye/2),z:Ct+ro*(mt/2),nx:so,nz:ro};R.push({id:R.length,minX:St-Ye/2,maxX:St+Ye/2,minZ:Ct-mt/2,maxZ:Ct+mt/2,h:qi,door:D})}i.push({minX:St-Ye/2,maxX:St+Ye/2,minZ:Ct-mt/2,maxZ:Ct+mt/2}),A++}}}N.count=A,N.instanceMatrix.needsUpdate=!0,N.instanceColor&&(N.instanceColor.needsUpdate=!0),n.add(N);{let ue=ks(64,96,(se,oe,Se)=>{se.fillStyle="#20262f",se.fillRect(0,0,oe,Se),se.fillStyle="#ffd98a",se.fillRect(0,0,oe,6),se.fillRect(0,0,5,Se),se.fillRect(oe-5,0,5,Se),se.fillStyle="#6fa8d8",se.fillRect(9,12,oe/2-12,Se-20),se.fillRect(oe/2+3,12,oe/2-12,Se-20),se.fillStyle="#cfd3d8",se.fillRect(oe/2-6,Se/2,3,10),se.fillRect(oe/2+3,Se/2,3,10)}),pe=new st(2.2,3);pe.translate(0,1.5,0);let j=new _e({map:ue,emissive:16762995,emissiveMap:ue,emissiveIntensity:.25,roughness:.4,metalness:.3}),F=new It(pe,j,Math.max(1,R.length));R.forEach((se,oe)=>{let Se=se.door.nx?se.door.nx>0?Math.PI/2:-Math.PI/2:se.door.nz>0?0:Math.PI;Cn(F,oe,se.door.x+se.door.nx*.03,.04,se.door.z+se.door.nz*.03,Se,1,1,1)}),F.count=R.length,F.instanceMatrix.needsUpdate=!0,n.add(F),gu=j}{let ue=new Ie(1.6,1.1,1.6);ue.translate(0,.55,0);let pe=new _e({color:9146518,roughness:.7,metalness:.4,envMapIntensity:.4}),j=[];for(let se of P){let oe=1+Math.floor(t()*2);for(let Se=0;Se<oe;Se++)j.push([se.x+(t()-.5)*se.w*.5,se.h+.03,se.z+(t()-.5)*se.d*.5,.7+t()*.7])}let F=new It(ue,pe,Math.max(1,j.length));j.forEach(([se,oe,Se,Re],qe)=>Cn(F,qe,se,oe,Se,t()*3.14,Re,1,Re)),F.count=j.length,F.instanceMatrix.needsUpdate=!0,n.add(F)}{let ue=(O-(jt-1)/2)*li,pe=(V-(jt-1)/2)*li,j=new ie(new st(gi,gi).rotateX(-Math.PI/2),new _e({color:3356219,roughness:.95,metalness:.02,envMapIntensity:.25}));j.position.set(ue,.045,pe),j.receiveShadow=!0,n.add(j);let F=new Ie(.14,.02,5.6);F.translate(0,.01,0);let se=new _e({color:15264492,roughness:.7}),oe=3,Se=[-7.5,7.5],Re=12,qe=ue-Re*oe/2,at=Se.length*(Re+1),yt=new It(F,se,at),Ht=new Ie(1.8,.14,.16);Ht.translate(0,.07,0);let Ye=new _e({color:10132898,roughness:.9}),mt=new It(Ht,Ye,Se.length*Re),En=0,Xi=0;for(let St of Se){for(let Ct=0;Ct<=Re;Ct++)Cn(yt,En++,qe+Ct*oe,.055,pe+St,0,1,1,1);for(let Ct=0;Ct<Re;Ct++)Cn(mt,Xi++,qe+Ct*oe+oe/2,.055,pe+St+(St<0?1.9:-1.9),0,1,1,1)}yt.count=En,yt.instanceMatrix.needsUpdate=!0,mt.count=Xi,mt.instanceMatrix.needsUpdate=!0,n.add(yt,mt);let qi=new ie(new st(20,5).rotateX(-Math.PI/2),new _e({map:ks(256,64,(St,Ct,$t)=>{St.fillStyle="#33363b",St.fillRect(0,0,Ct,$t),St.fillStyle="#e8c33a",St.font="bold 40px sans-serif",St.textAlign="center",St.textBaseline="middle",St.fillText("PARKING",Ct/2,$t/2)}),roughness:.9,transparent:!1}));qi.position.set(ue,.055,pe),n.add(qi)}{let ue=new Ie(.7,.02,3.2);ue.translate(0,.01,0);let pe=new _e({color:14672614,roughness:.75}),j=[];for(let se of[2,3])for(let oe of[2,3]){let Se=g[se],Re=g[oe],qe=ci/2+2.6;for(let[at,yt,Ht]of[[Se,Re-qe,0],[Se,Re+qe,0],[Se-qe,Re,1],[Se+qe,Re,1]])for(let Ye=-2;Ye<=2;Ye++)j.push(Ht===0?[at+Ye*2.2,.06,yt,0]:[at,.06,yt+Ye*2.2,Math.PI/2])}let F=new It(ue,pe,j.length);j.forEach(([se,oe,Se,Re],qe)=>Cn(F,qe,se,oe,Se,Re,1,1,1)),F.instanceMatrix.needsUpdate=!0,F.receiveShadow=!0,n.add(F)}let W=new Mt(.12,.16,9,6);W.translate(0,4.5,0);let L=new _e({color:3948872,roughness:.6,metalness:.6,envMapIntensity:.6}),G=new Ie(1.6,.25,.5);G.translate(.6,9,0);let Z=new _e({color:16773828,emissive:16766842,emissiveIntensity:.35,roughness:.4,metalness:.2}),I=[];for(let ue of g)for(let pe=-x/2+25;pe<x/2-10;pe+=46){let j=Math.round(pe/46)%2===0?1:-1;I.push([ue+j*(ci/2+1.5),pe,0]),I.push([pe,ue+j*(ci/2+1.5),1])}let X=new It(W,L,I.length),K=new It(G,Z,I.length);I.forEach(([ue,pe,j],F)=>{Cn(X,F,ue,0,pe,0,1,1,1),Cn(K,F,ue,0,pe,j?Math.PI/2:0,1,1,1)}),X.instanceMatrix.needsUpdate=!0,K.instanceMatrix.needsUpdate=!0,n.add(X,K);let le=[];for(let ue=0;ue<jt;ue++)for(let pe=0;pe<jt;pe++){if(ue===O&&pe===V)continue;let j=(ue-(jt-1)/2)*li,F=(pe-(jt-1)/2)*li,se=2+Math.floor(t()*3);for(let oe=0;oe<se;oe++)le.push([j+(t()-.5)*(gi-8),F+(t()-.5)*(gi-8),.8+t()*.5])}let xe=new Mt(.18,.28,2.6,6);xe.translate(0,1.3,0);let we=new zr(1.9,4.6,7);we.translate(0,4.4,0);let Ae=new It(xe,new _e({color:7031342,roughness:.9,envMapIntensity:.2}),le.length),Ee=new It(we,new _e({color:4094516,roughness:.85,envMapIntensity:.3}),le.length);Ee.castShadow=!0;for(let ue=le.length-1;ue>=0;ue--){let[pe,j]=le[ue];Pp(e,pe-2,pe+2,j-2,j+2)&&le.splice(ue,1)}le.forEach(([ue,pe,j],F)=>{Cn(Ae,F,ue,.03,pe,t()*6.28,j,j,j),Cn(Ee,F,ue,.03,pe,t()*6.28,j,j*(.9+t()*.3),j)}),Ae.instanceMatrix.needsUpdate=!0,Ee.instanceMatrix.needsUpdate=!0,n.add(Ae,Ee);let Oe=ks(64,64,(ue,pe,j)=>{let F=ue.createRadialGradient(32,32,2,32,32,30);F.addColorStop(0,"rgba(255,220,150,1)"),F.addColorStop(.4,"rgba(255,200,120,0.45)"),F.addColorStop(1,"rgba(255,190,110,0)"),ue.fillStyle=F,ue.fillRect(0,0,pe,j)}),B=new Kt,me=new Float32Array(I.length*3);I.forEach(([ue,pe],j)=>{me[j*3]=ue,me[j*3+1]=8.9,me[j*3+2]=pe}),B.setAttribute("position",new _n(me,3));let te=new To({map:Oe,size:14,transparent:!0,opacity:0,blending:Gt,depthWrite:!1,sizeAttenuation:!0}),ge=new rl(B,te);ge.frustumCulled=!1,n.add(ge);let ne=new Ie(1,1,1);ne.translate(0,.5,0);let Ue=new lt({color:2767445}),be=46,C=new It(ne,Ue,be);for(let ue=0;ue<be;ue++){let pe=ue/be*Math.PI*2+t()*.1,j=760+t()*220,F=40+t()*60,se=60+t()*130,oe=40+t()*60;Cn(C,ue,Math.cos(pe)*j,0,Math.sin(pe)*j,t()*.6,F,se,oe)}C.instanceMatrix.needsUpdate=!0,n.add(C);let T=zo*2,q=ks(128,128,(ue,pe,j)=>{ue.fillStyle="#2e3136",ue.fillRect(0,0,pe,j),ue.fillStyle="#cfd3d8",ue.fillRect(2,0,5,j),ue.fillRect(pe-7,0,5,j),ue.fillStyle="#e8c33a";for(let F=0;F<j;F+=32)ue.fillRect(pe/2-3,F,6,16)});q.wrapS=q.wrapT=zi,q.repeat.set(1,T/14);let de=new st(1,1);de.rotateX(-Math.PI/2);let ce=new ie(de,new _e({map:q,roughness:.9,metalness:.05,envMapIntensity:.35}));ce.scale.set(_u,1,T),ce.position.set(Hs,.05,0),ce.receiveShadow=!0,n.add(ce);let ae=Cp();ae.wrapS=ae.wrapT=zi,ae.repeat.set(1,(Hs-xu)/ci+2);let ze=Hs-xu+20,ye=new ie(de,new _e({map:ae,roughness:.9,metalness:.05,envMapIntensity:.35}));ye.scale.set(ze,1,ci),ye.rotation.y=Math.PI/2,ye.position.set((xu+Hs)/2,.05,0),ye.receiveShadow=!0,n.add(ye);let Pe=new ie(new st(_u,1.6).rotateX(-Math.PI/2),new _e({color:15922422,roughness:.7}));Pe.position.set(Hs,.07,zo-8),n.add(Pe);let He=new Ie(4,1.1,.7);He.translate(0,.55,0);let Xe=new _e({color:16777215,roughness:.6,metalness:.1,envMapIntensity:.4}),fe=Math.floor(T/9)*2,Ke=new It(He,Xe,fe);Ke.castShadow=!0;let Qe=new Ne,ke=0;for(let ue=-zo+4;ue<=zo-4&&ke<fe;ue+=9)for(let pe of[-1,1])Cn(Ke,ke,Hs+pe*(_u/2+1.6),.05,ue,0,1,1,1),Qe.setHex(ke%2===0?15229982:15922422),Ke.setColorAt(ke,Qe),ke++;Ke.count=ke,Ke.instanceMatrix.needsUpdate=!0,Ke.instanceColor&&(Ke.instanceColor.needsUpdate=!0),n.add(Ke);let Be={x:g[3],z:120,heading:0},De={startX:Hs,startZ:zo-8,dirX:0,dirZ:-1,length:T};function Ze(ue){S.emissiveIntensity=ue*1.4,gu&&(gu.emissiveIntensity=.25+ue*1.2),Z.emissiveIntensity=.35+ue*3,te.opacity=ue*.85,Ue.color.setHex(ue>.5?923174:2767445)}function ht(ue,pe){let j=Math.round(pe.x/h)*h,F=Math.round(pe.z/h)*h;r.target.position.set(j,0,F),r.position.set(j+a,l,F+c),r.target.updateMatrixWorld()}return ht(0,Be),{colliders:i,buildings:R,spawn:Be,dragStrip:De,update:ht,setGlow:Ze,sun:r,hemi:s,roadLines:g}}var vS=[0,.24,.4,.55,.7,.85,1],vu=class{constructor(){this.mode="auto",this.reset()}reset(){this.gear=1,this.rpm=0,this.shiftT=0,this.limiter=!1,this.reverse=!1,this.lastShift=0}gearTop(e,t=this.gear){return e*vS[t]}rpmFor(e,t,i,s){let r=Math.abs(e),o=this.gearTop(t,i),a=i>1?this.gearTop(t,i-1):0,l=(r-a*.35)/(o-a*.35);i===1&&(l=r/o);let c=Math.max(0,.32*s*(1-r/Math.max(1,o*.5)));return Math.max(0,Math.min(1.04,Math.max(l,c)))}shift(e){let t=Math.max(1,Math.min(6,this.gear+e));return t===this.gear?!1:(this.gear=t,this.shiftT=.2,this.lastShift=e,!0)}update(e,t,i,s){this.shiftT=Math.max(0,this.shiftT-s),this.reverse=e<-.5,this.reverse&&(this.gear=1);let r=this.rpmFor(e,i,this.gear,Math.max(0,t));return this.mode==="auto"&&!this.reverse&&this.shiftT<=0&&(r>.93&&this.gear<6&&t>.1?this.shift(1):this.gear>1&&this.rpmFor(e,i,this.gear-1,0)<.72&&(r<.4||t<0)&&this.shift(-1),r=this.rpmFor(e,i,this.gear,Math.max(0,t))),this.limiter=r>=1&&t>0,this.rpm+=(r-this.rpm)*Math.min(1,s*(this.shiftT>0?25:14)),this.shiftT>0?.15:this.limiter?0:(.62+.5*Math.sin(Math.PI*Math.min(1,.18+r*.82)))*(1.22-(this.gear-1)*.07)}},wl=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0,this.box||(this.box=new vu),this.box.reset()}update(e,t,i){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,f=0,p=h?.25:1,g=this.box.update(l,e.throttle||0,s.topSpeed*c,t);e.throttle>0?f=e.throttle*s.accel*c*p*g*(1-Math.max(0,l)/(s.topSpeed*c)*.55):e.throttle<0&&(f=l>1?e.throttle*s.accel*1.6:e.throttle*s.accel*.5),f-=l*(.028+(h?.06:0))+Math.sign(l)*.6,l+=f*t;let x=this.box.mode==="manual"?this.box.gearTop(s.topSpeed*c)*1.02:1/0,m=s.topSpeed*c,d=-s.topSpeed*.35;l>x&&(l-=(l-x)*Math.min(1,t*1.8)),l=Math.max(d,Math.min(m,l)),Math.abs(l)<.15&&!e.throttle&&(l=0);let u=Math.abs(l),v=Math.min(1,u/8),_=this.steer*.55*s.handling*v*(1-Math.min(1,u/(s.topSpeed*1.4))*.45);u>.5&&(this.heading-=_*(l/u)*t*(u>1?Math.min(2.2,u*.12+.8):1)*2.2);let w=-Math.sin(this.heading),U=-Math.cos(this.heading),M=this.vel.x*w+this.vel.z*U,y=this.vel.x-w*M,b=this.vel.z-U*M;this.drifting=!!(e.handbrake&&u>6);let S=this.drifting?.983:Math.min(.995,.9+s.grip*.06),E=Math.pow(S,t*60);y*=E,b*=E;let N=M+(l-M)*Math.min(1,t*60);this.vel.x=w*N+y,this.vel.z=U*N+b;let k=this.pos.x+this.vel.x*t,P=this.pos.z+this.vel.z*t;if(i){let R=i(k,P,this.pos.x,this.pos.z);k=R.x,P=R.z,R.hitX&&(this.vel.x*=-.25),R.hitZ&&(this.vel.z*=-.25)}return this.pos.x=k,this.pos.z=P,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer,gear:this.box.gear,rpm:this.box.rpm,shifting:this.box.shiftT>0,limiter:this.box.limiter,reverse:this.box.reverse}}};function Ip(n={}){let e=n.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1,aim:!1},i={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1,aim:!1},s=!1,r={x:0,y:0,id:null},o="drive",a=!1,l=!1,c=!1,h=!1,f=!1,p=!1,g=!1,x=[],m=A=>document.getElementById(A);function d(){t.steer=(i.right?1:0)-(i.left?1:0),t.throttle=i.gas?1:i.brake?-1:0,t.nitro=i.nitro,t.handbrake=i.handbrake;let A=(i.right?1:0)-(i.left?1:0),z=(i.gas?1:0)-(i.brake?1:0);t.moveX=r.id!==null?r.x:A,t.moveY=r.id!==null?r.y:z,t.run=i.run||i.nitro||r.id!==null&&Math.hypot(r.x,r.y)>.92,t.fire=i.fire,t.aim=i.aim||s||i.fire}function u(A,z){if(!A)return;let O=44,V=G=>{if(G.pointerId!==r.id)return;let Z=A.getBoundingClientRect(),I=G.clientX-(Z.left+Z.width/2),X=G.clientY-(Z.top+Z.height/2),K=I,le=X;e()&&(K=X,le=-I);let xe=Math.hypot(K,le),we=Math.min(xe,O);xe>0&&(K=K/xe*we,le=le/xe*we),z.style.transform=`translate(${K}px, ${le}px)`;let Ae=.12,Ee=K/O,Oe=-le/O;Math.hypot(Ee,Oe)<Ae&&(Ee=0,Oe=0),r.x=Ee,r.y=Oe,d()},W=G=>{if(G.preventDefault(),r.id===null){r.id=G.pointerId;try{A.setPointerCapture(G.pointerId)}catch{}V(G)}},L=G=>{G.pointerId===r.id&&(r.id=null,r.x=0,r.y=0,z.style.transform="translate(0px, 0px)",d())};A.addEventListener("pointerdown",W),A.addEventListener("pointermove",V),A.addEventListener("pointerup",L),A.addEventListener("pointercancel",L),x.push(()=>{A.removeEventListener("pointerdown",W),A.removeEventListener("pointermove",V),A.removeEventListener("pointerup",L),A.removeEventListener("pointercancel",L)})}function v(A,z){if(!A)return;let O=W=>{W.preventDefault(),W.stopPropagation(),z(),A.classList.add("pressed")},V=()=>A.classList.remove("pressed");A.addEventListener("pointerdown",O),A.addEventListener("pointerup",V),A.addEventListener("pointerleave",V),x.push(()=>{A.removeEventListener("pointerdown",O),A.removeEventListener("pointerup",V),A.removeEventListener("pointerleave",V)})}function _(A,z){if(!A)return;let O=0,V=G=>{G.preventDefault(),O++,z==="fire"&&!i.fire&&(h=!0),i[z]=!0,d(),A.classList.add("pressed")},W=()=>{O=Math.max(0,O-1),O===0&&(i[z]=!1,d(),A.classList.remove("pressed"))},L=G=>G.preventDefault();A.addEventListener("pointerdown",V),A.addEventListener("pointerup",W),A.addEventListener("pointercancel",W),A.addEventListener("pointerleave",W),A.addEventListener("contextmenu",L),x.push(()=>{A.removeEventListener("pointerdown",V),A.removeEventListener("pointerup",W),A.removeEventListener("pointercancel",W),A.removeEventListener("pointerleave",W),A.removeEventListener("contextmenu",L)})}function w(A){if(!A)return;let z=V=>{V.preventDefault(),a=!0,A.classList.add("pressed")},O=()=>A.classList.remove("pressed");A.addEventListener("pointerdown",z),A.addEventListener("pointerup",O),A.addEventListener("pointercancel",O),A.addEventListener("pointerleave",O),x.push(()=>{A.removeEventListener("pointerdown",z),A.removeEventListener("pointerup",O),A.removeEventListener("pointercancel",O),A.removeEventListener("pointerleave",O)})}let U={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function M(A){let z=A.target;if(z&&(z.tagName==="INPUT"||z.tagName==="TEXTAREA"))return;let O=A.key,V=U[O];if(V){i[V]=!0,d(),A.preventDefault();return}if(O===" "){if(A.preventDefault(),A.repeat)return;o==="drag"?a=!0:o==="foot"?(i.fire||(h=!0),i.fire=!0,d()):(i.handbrake=!0,d());return}if(O==="e"||O==="E"||O==="Enter"){A.repeat||(l=!0);return}if(O==="q"||O==="Q"){A.repeat||(c=!0);return}if((O==="Shift"||O==="f"||O==="F")&&(i.nitro=!0,d()),(O==="r"||O==="R")&&(i.aim=!0,d()),O==="g"||O==="G"){A.repeat||(f=!0);return}if(O==="b"||O==="B"){A.repeat||(p=!0);return}}function y(A){let z=A.key,O=U[z];if(O){i[O]=!1,d();return}if(z===" "){i.handbrake=!1,i.fire=!1,d();return}(z==="Shift"||z==="f"||z==="F")&&(i.nitro=!1,d()),(z==="r"||z==="R")&&(i.aim=!1,d())}function b(A){A.button===2&&(i.aim=!0,d())}function S(A){A.button===2&&(i.aim=!1,d())}function E(A){o=A==="drag"||A==="foot"?A:"drive";let z=(V,W)=>{let L=m(V);L&&(L.style.display=W?"":"none")};z("steer-zone",o==="drive"),z("pedal-zone",o!=="foot"),z("btn-shift",o==="drag"),z("joystick",o==="foot"),z("foot-zone",o==="foot");for(let V in i)i[V]=!1;s=!1;{let V=m("btn-aim");V&&V.classList.remove("on")}r.id=null,r.x=0,r.y=0;let O=m("joy-knob");O&&(O.style.transform="translate(0px, 0px)");for(let V of document.querySelectorAll("#touch-controls .pressed"))V.classList.remove("pressed");d()}function N(){if(g)return;g=!0,_(m("btn-left"),"left"),_(m("btn-right"),"right"),_(m("btn-gas"),"gas"),_(m("btn-brake"),"brake"),_(m("btn-nitro"),"nitro"),_(m("btn-handbrake"),"handbrake"),w(m("btn-shift")),_(m("btn-fire"),"fire"),_(m("btn-run"),"run"),u(m("joystick"),m("joy-knob")),v(m("btn-action"),()=>{l=!0}),v(m("btn-weapon"),()=>{c=!0}),v(m("btn-aim"),()=>{s=!s;let z=m("btn-aim");z&&z.classList.toggle("on",s),d()}),v(m("btn-gear-up"),()=>{f=!0}),v(m("btn-gear-down"),()=>{p=!0}),window.addEventListener("mousedown",b),window.addEventListener("mouseup",S),x.push(()=>{window.removeEventListener("mousedown",b),window.removeEventListener("mouseup",S)}),window.addEventListener("keydown",M),window.addEventListener("keyup",y),x.push(()=>{window.removeEventListener("keydown",M),window.removeEventListener("keyup",y)});let A=m("touch-controls");A&&(A.style.display="ontouchstart"in window?"":"none"),E(o)}function k(){for(let A of x)A();x.length=0;for(let A in i)i[A]=!1;a=l=c=h=!1,r.id=null,r.x=r.y=0,d(),g=!1}function P(){let A=a;return a=!1,A}let R=A=>()=>{let z;switch(A){case"action":return z=l,l=!1,z;case"cycle":return z=c,c=!1,z;case"fire":return z=h,h=!1,z;case"gup":return z=f,f=!1,z;case"gdown":return z=p,p=!1,z}};return{input:t,consumeShift:P,consumeAction:R("action"),consumeCycle:R("cycle"),consumeFireEdge:R("fire"),consumeGearUp:R("gup"),consumeGearDown:R("gdown"),setMode:E,attach:N,detach:k,get mode(){return o}}}var yS=[.3,.47,.64,.81,1],MS=[1.9,1.45,1.15,.95,.8],Tl=.8,Up=.97,SS=.8,ES=45,bS=2.2,wS=[16765286,448160,10182117,15817653,48121,16704576,15681391],vn=n=>document.getElementById(n);function Np(n,e){return n+Math.random()*(e-n)}function Dp(n){return n[Math.random()*n.length|0]}function TS(n){let e=402/(.42*n.topSpeed+.35*n.accel);return Math.min(17,Math.max(8.5,e))*Np(.85,1.15)}function AS(n){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,stats:n}}function RS(n,e,t){let i=n.stats.topSpeed,s=yS[n.gear]*i,r=1-Math.min(1,n.speed/(s*1.02)),o=e*n.stats.accel*MS[n.gear]*Math.max(0,r);o*=n.bogMul,o-=n.speed*.028+Math.sign(n.speed)*.6,n.speed=Math.max(0,n.speed+o*t),n.dist+=n.speed*t,n.rpm=Math.min(1.06,n.speed/s),n.bogMul+=(1-n.bogMul)*Math.min(1,t*2.5)}function CS(n){return n>=Tl&&n<=Up?"perfect":n<Tl?"early":"late"}function PS(n){if(n.gear>=4)return null;let e=CS(n.rpm);return n.gear++,e==="perfect"?n.speed*=1.015:(n.speed*=.93,n.bogMul=.75),n.limiterT=0,e}function LS(n){let e=TS(n),t=1.1,i=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/i,reactDelay:Np(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:n}}function IS(n,e,t){if(!n.launched)return;let i=e-n.launchT;i<0||(n.speed=n.top*(1-Math.exp(-n.k*i)),n.dist+=n.speed*t)}function DS({falseStart:n,pET:e,aET:t,pDist:i,aDist:s}){return n?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:i>=s}function US(n,e,t){if(!n)return 100;let i=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(i*10))}function NS(n,e){return n?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function zp(n){let e=vn("drag-ui"),t=vn("drag-msg"),i=vn("drag-result"),s=vn("rpm-bar"),r=vn("rpm-shiftzone"),o=vn("btn-shift"),a={s1:vn("bulb-s1"),s2:vn("bulb-s2"),a1:vn("bulb-a1"),a2:vn("bulb-a2"),a3:vn("bulb-a3"),g:vn("bulb-g"),r:vn("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let P in a)a[P].classList.remove("lit")}function h(P){a[P].classList.add("lit")}function f(P,R){t.textContent=P,l.msgTimer=R||0}function p(P,R){try{n.audio.beep(P,R)}catch{}}function g(){let P=n.getPlayer();return P&&P.stats?P.stats:n.effectiveStats(P.def,P.upgrades)}function x(P,R){let A=n.city.dragStrip;P.position.set(A.startX+l.perpX*R,0,A.startZ+l.perpZ*R),P.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function m(P,R){let A=n.city.dragStrip;P.position.set(A.startX+l.dirX*R.dist+l.perpX*R.lateral,0,A.startZ+l.dirZ*R.dist+l.perpZ*R.lateral)}function d(P,R,A){let z=P.userData.wheels;if(z)for(let O of z){let V=O.userData.spin||[];for(let W of V)W.rotation.x+=R*A*2.2}}function u(P){return AS(P)}function v(P,R,A){RS(P,R,A)}function _(P){let R=PS(P);R&&(R==="perfect"?(f("PERFECT SHIFT!",1),p(1200,.08)):(f(R==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),p(220,.15)))}function w(P){return LS(P)}function U(P,R){IS(P,l.greenT,R)}function M(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),i.classList.add("hidden"),i.innerHTML="",f("STAGE!"),s.style.width="15%",r.style.left=Tl*100+"%",r.style.width=(Up-Tl)*100+"%",o&&o.classList.remove("hidden")}function y(){l.phase="green",l.t=0,l.greenT=0,h("g"),f("GO!"),p(880,.4),l.phase="racing"}function b(){l.phase="red",c(),h("r"),f("FALSE START!"),p(180,.6),S("FALSE START \u2014 you jumped the green.")}function S(P){l.phase="done",l.finished=!0;let R=l.player,A=l.ai,z=!!(P&&P.indexOf("FALSE START")===0),O=DS({falseStart:z,pET:R.et,aET:A.finishET,pDist:R.dist,aDist:A.dist}),V=R.et,W=A.finishET,L=R.reaction!=null?R.reaction.toFixed(3)+"s":"\u2014",G=(R.trap*bS).toFixed(1),Z=US(O,V,W),I=NS(O,z);n.addCash(Z),i.innerHTML="<h2>"+I+"</h2>"+(P?"<p>"+P+"</p>":"")+"<p>ET: "+(V==null?"DNF":V.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(W==null?"DNF":W.toFixed(3)+"s")+"</p><p>Trap speed: "+G+" MPH &nbsp;\xB7&nbsp; Reaction: "+L+"</p><p>+$"+Z+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',i.classList.remove("hidden"),vn("drag-rematch").onclick=()=>{E()},vn("drag-back").onclick=()=>{N()};try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}}function E(){l.active&&N();let R=n.getPlayer().group;l.origPos=R.position.clone(),l.origRotY=R.rotation.y;let A=n.city.dragStrip,z=Math.hypot(A.dirX,A.dirZ)||1;l.dirX=A.dirX/z,l.dirZ=A.dirZ/z,l.perpX=-l.dirZ,l.perpZ=l.dirX,x(R,2),R.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=u(g());let O=Dp(n.CAR_DEFS),V=n.buildCar(Object.assign({},O,{color:Dp(wS)}));n.scene.add(V),x(V,-2),l.aiGroup=V,l.ai=w(n.effectiveStats(O)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),n.controls.setMode("drag");let W=n.camera;W.position.set(A.startX-l.dirX*12+l.perpX*12,5,A.startZ-l.dirZ*12+l.perpZ*12),W.lookAt(A.startX+l.dirX*8,1,A.startZ+l.dirZ*8),M()}function N(){l.aiGroup&&(n.scene.remove(l.aiGroup),l.aiGroup=null);let P=n.getPlayer();P&&P.group&&l.origPos&&(P.group.position.copy(l.origPos),P.group.rotation.y=l.origRotY),e.classList.add("hidden"),i.classList.add("hidden"),o&&o.classList.add("hidden");try{n.controls.setMode("drive")}catch{}try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function k(P){if(!l.active)return;P=Math.min(P,.05);let R=n.controls.input||{},A=Math.max(0,Math.min(1,R.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&A>.5){b();return}if(l.msgTimer>0&&(l.msgTimer-=P,l.msgTimer<=0&&l.phase==="racing"&&f("GO!")),l.phase==="stage")l.t+=P,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,f("READY\u2026"));else if(l.phase==="tree"){l.t+=P;let O=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<O;)l.ambersLit++,h("a"+l.ambersLit),p(440,.15);l.t>=1.5&&y()}else if(l.phase==="racing"){l.greenT+=P;let O=l.player,V=l.ai;!O.reacted&&A>.5&&(O.reacted=!0,O.reaction=l.greenT),!V.launched&&l.greenT>=V.reactDelay&&(V.launched=!0,V.launchT=l.greenT),v(O,A,P),n.controls.consumeShift&&n.controls.consumeShift()&&_(O),O.rpm>=1&&A>.3?(O.limiterT+=P,O.limiterT>=SS&&(O.speed*=.9,O.limiterT=0,f("LIMITER!",.8),p(160,.2))):O.limiterT=Math.max(0,O.limiterT-P*2),U(V,P),O.et==null&&O.dist>=402&&(O.et=l.greenT,O.trap=O.speed),V.finishET==null&&V.dist>=402&&(V.finishET=l.greenT,V.trap=V.speed);let W=l.greenT>=ES;if(O.et!=null&&V.finishET!=null||W||O.et!=null&&l.greenT>O.et+8||V.finishET!=null&&l.greenT>V.finishET+8){S(W&&O.et==null&&V.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,O.rpm)*100+"%";try{n.audio.engine(O.rpm,A),n.audio.skid(A>.8&&O.speed<8&&O.gear===0)}catch{}}let z=n.getPlayer().group;if(m(z,l.player),l.aiGroup&&m(l.aiGroup,l.ai),d(z,l.player.speed,P),l.aiGroup&&d(l.aiGroup,l.ai.speed,P),l.phase==="racing"||l.phase==="done"){let O=n.camera,V=z.position.x,W=z.position.z,L=V-l.dirX*11+l.perpX*7,G=W-l.dirZ*11+l.perpZ*7;O.position.x+=(L-O.position.x)*Math.min(1,P*4),O.position.y+=(4.5-O.position.y)*Math.min(1,P*4),O.position.z+=(G-O.position.z)*Math.min(1,P*4),O.lookAt(V+l.dirX*12,1.2,W+l.dirZ*12)}}return vn("drag-exit").onclick=()=>N(),{enter:E,exit:N,update:k,get active(){return l.active}}}function Op(){let n=null,e=null,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=null,h=null,f=null,p=null,g=null,x=null,m=0,d=0,u=0,v=8,_=850,w=7e3,U=null,M=null,y=!1,b=!1;function S(){if(n)return!0;let N=window.AudioContext||window.webkitAudioContext;if(!N)return!1;n=new N,e=n.createGain(),e.gain.value=.5,e.connect(n.destination);let k=new Float32Array(32),P=new Float32Array(32);for(let K=1;K<32;K++){let le=Math.exp(-Math.pow((K-6)/2.5,2))*.6;P[K]=1/Math.pow(K,.9)*(K%2?1:.65)+le/K}l=n.createPeriodicWave(k,P),t=n.createOscillator(),t.setPeriodicWave(l),t.frequency.value=50,i=n.createOscillator(),i.type="sawtooth",i.frequency.value=25,s=n.createOscillator(),s.type="triangle",s.frequency.value=100;let R=n.createGain();R.gain.value=.55;let A=n.createGain();A.gain.value=.35,a=n.createGain(),a.gain.value=.05,c=n.createOscillator(),c.frequency.value=12,h=n.createGain(),h.gain.value=.18;let z=n.createGain();z.gain.value=.82,c.connect(h),h.connect(z.gain),t.connect(R),i.connect(A),s.connect(a),R.connect(z),A.connect(z),a.connect(z),f=n.createWaveShaper();let O=new Float32Array(1024);for(let K=0;K<1024;K++){let le=K/512-1;O[K]=Math.tanh(le*2.4)}f.curve=O,f.oversample="2x",p=n.createGain(),p.gain.value=1,z.connect(p),p.connect(f),r=n.createBiquadFilter(),r.type="lowpass",r.frequency.value=600,r.Q.value=1.2;let V=n.createBiquadFilter();V.type="peaking",V.frequency.value=160,V.gain.value=6,V.Q.value=.9,o=n.createGain(),o.gain.value=0,f.connect(r),r.connect(V),V.connect(o),o.connect(e),t.start(),i.start(),s.start(),c.start();let W=n.sampleRate,L=n.createBuffer(1,W,n.sampleRate),G=L.getChannelData(0);for(let K=0;K<W;K++)G[K]=Math.random()*2-1;M=L;let Z=n.createBufferSource();Z.buffer=L,Z.loop=!0;let I=n.createBiquadFilter();I.type="bandpass",I.frequency.value=900,I.Q.value=1.1,U=n.createGain(),U.gain.value=0,Z.connect(I),I.connect(U),U.connect(e),Z.start();let X=n.createBufferSource();return X.buffer=L,X.loop=!0,g=n.createBiquadFilter(),g.type="bandpass",g.frequency.value=700,g.Q.value=.8,x=n.createGain(),x.gain.value=0,X.connect(g),g.connect(x),x.connect(e),X.start(0,.37),!0}function E(N){if(!M)return;let k=n.createBufferSource();k.buffer=M;let P=n.createBiquadFilter();P.type="bandpass",P.frequency.value=600+Math.random()*900,P.Q.value=2;let R=n.createGain();R.gain.setValueAtTime(1e-4,N),R.gain.exponentialRampToValueAtTime(.35,N+.004),R.gain.exponentialRampToValueAtTime(1e-4,N+.05),k.connect(P),P.connect(R),R.connect(e),k.start(N,Math.random()*.8),k.stop(N+.07)}return{unlock(){b=!0,S()&&(n.state==="suspended"&&n.resume(),y=!0)},setEngine(N){v=N.cyl||8,_=N.idle||850,w=N.red||7e3},engine(N,k,P){if(!n||!y)return;let R=Math.max(0,Math.min(1.04,N)),A=Math.max(0,Math.min(1,k)),z=n.currentTime;if(R<.001&&A<.001){o.gain.setTargetAtTime(0,z,.08),x.gain.setTargetAtTime(0,z,.08),d=0;return}let V=(_+(w-_)*R)/60*v/2;t.frequency.setTargetAtTime(V,z,.025),i.frequency.setTargetAtTime(V/2,z,.025),s.frequency.setTargetAtTime(V*3.01,z,.025),c.frequency.setTargetAtTime(Math.max(4,V/(v>=8?4:2)),z,.05),h.gain.setTargetAtTime((v>=8?.22:.1)*(1-R*.7),z,.05),p.gain.setTargetAtTime(.8+A*2.2+R*.6,z,.05),r.frequency.setTargetAtTime(380+R*2600*(.45+A*.55),z,.04),a.gain.setTargetAtTime(.03+R*R*.12,z,.05);let W=(.07+A*.08+R*.06)*(P?.45:1);o.gain.setTargetAtTime(W,z,P?.015:.05),g.frequency.setTargetAtTime(500+R*2400,z,.05),x.gain.setTargetAtTime(A*(.015+R*.05),z,.06),u-=1/60,m>.6&&A<.1&&R>.45&&(u=Math.min(u,-.6)),u<-.01&&A<.15&&R>.3&&Math.random()<.18&&E(z),u<-.01?u+=1/60*.5:u=Math.max(u,0),m=A,d=R},shiftBlip(N){if(!n||!y)return;let k=n.currentTime;o.gain.cancelScheduledValues(k),o.gain.setValueAtTime(o.gain.value,k),o.gain.linearRampToValueAtTime(o.gain.value*.35,k+.04),N&&E(k+.05)},skid(N){!n||!y||U.gain.setTargetAtTime(N?.12:0,n.currentTime,N?.05:.12)},beep(N=660,k=.08){if(!b||!S())return;n.state==="suspended"&&n.resume();let P=n.currentTime,R=n.createOscillator();R.type="sine",R.frequency.value=N;let A=n.createGain();A.gain.setValueAtTime(1e-4,P),A.gain.exponentialRampToValueAtTime(.25,P+.012),A.gain.exponentialRampToValueAtTime(1e-4,P+k),R.connect(A),A.connect(e),R.start(P),R.stop(P+k+.03)},shot(N="pistol"){if(!b||!S())return;let k=n.currentTime,P={pistol:[2600,.16,.5],glock:[2900,.14,.48],deagle:[1800,.3,.8],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],ak:[2e3,.22,.62],rifle:[2200,.2,.55],sniper:[1500,.45,.9],minigun:[3200,.06,.3]}[N]||[2600,.16,.5],R=n.createBufferSource();R.buffer=M;let A=n.createBiquadFilter();A.type="lowpass",A.frequency.setValueAtTime(P[0],k),A.frequency.exponentialRampToValueAtTime(300,k+P[1]);let z=n.createGain();z.gain.setValueAtTime(P[2],k),z.gain.exponentialRampToValueAtTime(1e-4,k+P[1]),R.connect(A),A.connect(z),z.connect(e),R.start(k,Math.random()*.5),R.stop(k+P[1]+.02);let O=n.createOscillator();O.type="sine",O.frequency.setValueAtTime(140,k),O.frequency.exponentialRampToValueAtTime(40,k+.12);let V=n.createGain();V.gain.setValueAtTime(P[2]*.8,k),V.gain.exponentialRampToValueAtTime(1e-4,k+.14),O.connect(V),V.connect(e),O.start(k),O.stop(k+.16)},click(){this.beep(1800,.03)},shutdown(){if(n)try{n.close()}catch{}n=null,e=null,y=!1,t=i=s=r=o=U=M=null}}}var Bp="citydriver_save_v1";var Al=5,zS=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295];var Hp=["engine","turbo","tires","suspension","nitro"],OS={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},FS={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},Oo=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function yu(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:Oo()},paint:{sport:14100029},wheels:{sport:0}}}function BS(n){let e=Object.assign(yu(),n||{}),t=new Set(Hi.map(i=>i.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(i=>t.has(i)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let i of e.owned){if(!e.upgrades[i]||typeof e.upgrades[i]!="object")e.upgrades[i]=Oo();else for(let s of Hp)e.upgrades[i][s]=Math.max(0,Math.min(Al,e.upgrades[i][s]|0));typeof e.paint[i]!="number"&&(e.paint[i]=14100029),e.wheels[i]=Math.max(0,e.wheels[i]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function kp(){try{let n=localStorage.getItem(Bp);return n?BS(JSON.parse(n)):yu()}catch{return yu()}}function an(n){try{localStorage.setItem(Bp,JSON.stringify(n))}catch{}}function Fp(n,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+n.price/2e4))}var HS=n=>"#"+n.toString(16).padStart(6,"0");function Gp(n){let e=n.save,t=m=>document.getElementById(m),i=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let m of Hi)for(let d in o)o[d]=Math.max(o[d],m[d]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(m,d,u)=>{let v=Math.max(5,Math.round(d/u*100));return`<div class="stat-row"><span>${m}</span><div class="sbar"><i style="width:${v}%"></i></div></div>`};function c(){i.innerHTML=Hi.map(m=>{let d=e.owned.includes(m.id),u=e.currentCar===m.id,v;return u?v='<button class="buy-btn" disabled>SELECTED</button>':d?v=`<button class="buy-btn" data-act="select" data-id="${m.id}">SELECT</button>`:v=`<button class="buy-btn" data-act="buy" data-id="${m.id}"${e.cash<m.price?" disabled":""}>$${m.price.toLocaleString()}</button>`,`<div class="car-card${u?" selected":""}"><div class="cinfo"><b>${m.name}</b><small>${m.desc}</small><div class="stat-bars">${l("SPD",m.topSpeed,o.topSpeed)}${l("ACC",m.accel,o.accel)}${l("HDL",m.handling,o.handling)}${l("GRP",m.grip,o.grip)}</div></div>${v}</div>`}).join("")}function h(){let m=n.getDef(e.currentCar);if(!m){s.innerHTML="";return}let d=e.upgrades[m.id]||(e.upgrades[m.id]=Oo());s.innerHTML=`<div class="upg-car-name">${m.name} \u2014 performance</div>`+Hp.map(u=>{let v=d[u]||0,_=v>=Al,w=_?0:Fp(m,u,v),U="";for(let y=0;y<Al;y++)U+=`<div class="pip${y<v?" on":""}"></div>`;let M=_?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${u}"${e.cash<w?" disabled":""}>$${w.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${OS[u]}</b><small>${FS[u]}</small><div class="pips">${U}</div></div>${M}</div>`}).join("")}function f(){let m=e.currentCar,d=e.paint[m],u=zS.map(v=>`<button class="swatch${v===d?" sel":""}" data-hex="${v}" style="background:${HS(v)}" aria-label="paint"></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Quick paint \u2014 FREE</b><div class="swatch-row">${u}</div></div><button class="mbtn primary" data-act="editor" style="width:100%">\u{1F3A8} OPEN SKIN EDITOR \u2014 all free</button><p class="store-tip">Any color, rims, stripes, underglow, window tint, and your driver's look.</p>`}function p(){a(),c(),h(),f()}i.addEventListener("click",m=>{let d=m.target.closest("button[data-act]");if(!d||d.disabled)return;let u=n.getDef(d.dataset.id);if(u)if(d.dataset.act==="buy"){if(e.owned.includes(u.id)||e.cash<u.price)return;e.cash-=u.price,e.owned.push(u.id),e.upgrades[u.id]||(e.upgrades[u.id]=Oo()),typeof e.paint[u.id]!="number"&&(e.paint[u.id]=u.color),e.wheels[u.id]===void 0&&(e.wheels[u.id]=0),e.currentCar=u.id,an(e),n.onSelectCar(u.id),p()}else{if(e.currentCar===u.id)return;e.currentCar=u.id,an(e),n.onSelectCar(u.id),p()}}),s.addEventListener("click",m=>{let d=m.target.closest("button[data-key]");if(!d||d.disabled)return;let u=n.getDef(e.currentCar);if(!u)return;let v=d.dataset.key,_=e.upgrades[u.id]||(e.upgrades[u.id]=Oo()),w=_[v]||0,U=Fp(u,v,w);w>=Al||e.cash<U||(e.cash-=U,_[v]=w+1,an(e),n.refreshScene(),p())}),r.addEventListener("click",m=>{let d=e.currentCar;if(m.target.closest('button[data-act="editor"]')){n.openEditor&&n.openEditor();return}let u=m.target.closest("button.swatch");if(u){let v=parseInt(u.dataset.hex,10);e.paint[d]!==v&&(e.paint[d]=v,an(e),n.onPaint(v),p())}});let g=[...document.querySelectorAll("#garage .gtab")],x={cars:i,upgrades:s,style:r};return g.forEach(m=>m.addEventListener("click",()=>{g.forEach(d=>d.classList.toggle("active",d===m));for(let d in x)x[d].classList.toggle("hidden",d!==m.dataset.tab)})),p(),{refresh:p}}var Vp=["low","medium","high"];function Mu(n){switch(n){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var Rl=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,Mu(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};Dt();var Cl={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.65,stars:1}},Su=["day","sunset","night"],kS=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`,GS=`
uniform vec3 uTop; uniform vec3 uHorizon; uniform vec3 uSunDir;
uniform vec3 uSunColor; uniform float uSunI; uniform float uStars;
varying vec3 vDir;
// hash for stars
float hash(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164))) * 43758.5453); }
void main(){
  float h = clamp(vDir.y, -0.12, 1.0);
  float t = pow(clamp(1.0 - max(h, 0.0), 0.0, 1.0), 1.6);
  vec3 col = mix(uTop, uHorizon, t);
  // sun disc + halo
  float s = max(dot(normalize(vDir), normalize(uSunDir)), 0.0);
  col += uSunColor * (pow(s, 900.0) * 1.4 * uSunI + pow(s, 18.0) * 0.28 * uSunI);
  // stars (only above horizon, twinkle-free)
  if (uStars > 0.001 && vDir.y > 0.02) {
    vec3 sp = floor(vDir * 220.0);
    float st = step(0.9985, hash(sp));
    col += vec3(0.9, 0.95, 1.0) * st * uStars * smoothstep(0.02, 0.25, vDir.y);
  }
  // below-horizon: fade to fog-ish dark
  col = mix(col, uHorizon * 0.55, smoothstep(0.0, -0.12, vDir.y));
  gl_FragColor = vec4(col, 1.0);
}`;function Wp(){let n=new Vt(1500,24,16),e={uTop:{value:new Ne(3108822)},uHorizon:{value:new Ne(13625079)},uSunDir:{value:new H(0,1,0)},uSunColor:{value:new Ne(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new Qt({vertexShader:kS,fragmentShader:GS,uniforms:e,side:on,depthWrite:!1,fog:!1}),i=new ie(n,t);return i.frustumCulled=!1,i.renderOrder=-10,{mesh:i,uniforms:e}}function VS(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new H(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}function Xp(n,e){let t=Cl[e]||Cl.day,{uniforms:i,sun:s,hemi:r,scene:o,renderer:a}=n;i.uTop.value.setHex(t.top),i.uHorizon.value.setHex(t.horizon),i.uSunColor.value.setHex(t.sunColor),i.uSunI.value=t.sunI,i.uStars.value=t.stars;let l=VS(t.elev,t.azim);return i.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),n.sunElev=t.elev,n.sunAzim=t.azim,n.sunDir=l,t}Dt();function WS(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new un(n);return i.colorSpace=vt,i}var Eu=null;function XS(){return Eu||(Eu=WS()),Eu}var Kn=class{constructor(e,t,{color:i=12303291,opacity:s=.5,blending:r=es,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new st(1,1),this.mat=new Ns({map:XS(),color:i,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new Ur(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new H}emit(e,t,i,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,i);let f=h.userData;f.life=a,f.maxLife=a,f.vx=s,f.vy=r,f.vz=o,f.grow=c,f.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let i of this.items){if(!i.visible)continue;let s=i.userData;if(s.life-=e,s.life<=0){i.visible=!1;continue}i.position.x+=s.vx*e,i.position.y+=s.vy*e,i.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;i.scale.set(o,o,1),i.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},Pl=class{constructor(e,t=400){this.max=t,this.i=0;let i=new st(.32,1.4);i.rotateX(-Math.PI/2),this.mesh=new It(i,new lt({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new ut;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new ut,this._q=new In,this._p=new H,this._s=new H(1,1,1),this._up=new H(0,1,0)}add(e,t,i){this._q.setFromAxisAngle(this._up,i),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function Fo(){return{driftT:0,driftAcc:0}}function qp(n,e,t,i){if(e&&Math.abs(t)>=8)return n.driftT+=i,n.driftAcc+=i*15,0;let s=0;return n.driftT>=1&&(s=Math.round(n.driftAcc)),n.driftT=0,n.driftAcc=0,s}var Yp=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function Zp(n){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;e=Yp()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),n&&n(t.w,t.h)}async function s(){if(!Yp())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:t,goLandscape:s,refresh:i,get rotated(){return e}}}var ls=[14100029,16735802,16747546,16757504,16765503,13038642,4906624,1483594,1013358,1622208,3718648,2060267,1981066,8141549,11032055,15557798,16723555,7999504,9067034,13211182,16317180,13358561,7041664,1120295],Ll=[16109749,15250575,13011554,11037509,8014380,4860954],Il=[1118481,2759184,5913118,10119738,14266986,15263976,14100029,3718648],Bo=["none","center","dual","side"],Ho=["clear","dark","limo"],cs=["none","cap","beanie","cowboy","crown","helmet"],Dl={none:"No hat",cap:"Snapback",beanie:"Beanie",cowboy:"Stetson",crown:"Crown",helmet:"Helmet"},ki=n=>Number.isInteger(n)&&n>=0&&n<=16777215,bu=(n,e,t)=>e.includes(n)?n:t;function $p(){return{rims:12172998,stripes:"none",stripe:16317180,glow:null,tint:"dark"}}function qS(){return{shirt:2845872,pants:2963272,skin:13011554,hair:2759184,hat:"none",hatColor:2237739}}function Jp(n){let e=$p(),t=n&&typeof n=="object"?n:{};return{rims:ki(t.rims)?t.rims:e.rims,stripes:bu(t.stripes,Bo,e.stripes),stripe:ki(t.stripe)?t.stripe:e.stripe,glow:ki(t.glow)?t.glow:null,tint:bu(t.tint,Ho,e.tint)}}function Ul(n){let e=qS(),t=n&&typeof n=="object"?n:{};return{shirt:ki(t.shirt)?t.shirt:e.shirt,pants:ki(t.pants)?t.pants:e.pants,skin:ki(t.skin)?t.skin:e.skin,hair:ki(t.hair)?t.hair:e.hair,hat:bu(t.hat,cs,e.hat),hatColor:ki(t.hatColor)?t.hatColor:e.hatColor}}function wu(n){return String(n??"").replace(/[^\w .\-'!?]/g,"").trim().slice(0,16)}function Kp(n){(!n.carSkin||typeof n.carSkin!="object")&&(n.carSkin={});for(let t of Object.keys(n.carSkin))n.carSkin[t]=Jp(n.carSkin[t]);n.outfit=Ul(n.outfit),n.hats=cs.slice();let e=wu(n.name);return n.name=e||"Driver"+Math.floor(1e3+Math.random()*9e3),n}function Gs(n,e){return n.carSkin[e]||(n.carSkin[e]=$p()),n.carSkin[e]}function Qp(n,e){let t=Gs(n,e),i=n.outfit;return{p:n.paint[e]|0,r:t.rims,s:Bo.indexOf(t.stripes),sc:t.stripe,g:t.glow==null?-1:t.glow,t:Ho.indexOf(t.tint),o:[i.shirt,i.pants,i.skin,i.hair,cs.indexOf(i.hat),i.hatColor]}}function jp(n){n=n||{};let e=Array.isArray(n.o)?n.o:[];return{paint:ki(n.p)?n.p:null,carSkin:Jp({rims:n.r,stripes:Bo[n.s],stripe:n.sc,glow:n.g,tint:Ho[n.t]}),outfit:Ul({shirt:e[0],pants:e[1],skin:e[2],hair:e[3],hat:cs[e[4]],hatColor:e[5]})}}var Nl=n=>"#"+(n|0).toString(16).padStart(6,"0");var zl=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,dmg:22,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"glock",name:"Glock 19",price:1800,rate:.16,auto:!1,pellets:1,spread:.014,range:85,dmg:20,ammoBox:34,ammoPrice:70,start:34,desc:"Fast-firing 9mm. Tap tap tap."},{id:"deagle",name:"Desert Eagle",price:4200,rate:.55,auto:!1,pellets:1,spread:.01,range:110,dmg:55,ammoBox:14,ammoPrice:110,start:14,desc:"Hand cannon. Huge damage."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,dmg:14,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,dmg:12,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"ak",name:"AK-47",price:7500,rate:.11,auto:!0,pellets:1,spread:.022,range:120,dmg:26,ammoBox:60,ammoPrice:180,start:60,desc:"Hard-hitting full auto."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,dmg:24,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."},{id:"sniper",name:"Longshot .50",price:15e3,rate:1.3,auto:!1,pellets:1,spread:.001,range:260,dmg:120,ammoBox:10,ammoPrice:250,start:10,desc:"One shot, one drop. Huge range."},{id:"minigun",name:"Shredder Minigun",price:4e4,rate:.04,auto:!0,pellets:1,spread:.05,range:100,dmg:14,ammoBox:400,ammoPrice:600,start:400,desc:"Melts everything. Eats ammo."}],em=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],ko=0,Ol=cs.map(n=>({id:n,name:Dl[n],price:0})),Tu=15,Gi=n=>zl.find(e=>e.id===n)||null;function tm(n){let e=new Set(zl.map(t=>t.id));Array.isArray(n.weapons)||(n.weapons=[]),n.weapons=n.weapons.filter((t,i,s)=>e.has(t)&&s.indexOf(t)===i),(!n.ammo||typeof n.ammo!="object")&&(n.ammo={});for(let t of Object.keys(n.ammo))e.has(t)||delete n.ammo[t];for(let t of n.weapons)n.ammo[t]=Math.max(0,n.ammo[t]|0);return n.weapons.includes(n.equipped)||(n.equipped=n.weapons[0]||null),n.outfit=Ul(n.outfit),n.hats=Ol.map(t=>t.id),n}var Qn=n=>({ok:!1,msg:n}),Vs=n=>({ok:!0,msg:n});function nm(n,e){let t=Gi(e);return t?n.weapons.includes(e)?Qn("Already owned"):n.cash<t.price?Qn("Not enough cash"):(n.cash-=t.price,n.weapons.push(e),n.ammo[e]=(n.ammo[e]|0)+t.start,n.equipped=e,Vs(t.name+" bought")):Qn("Unknown weapon")}function im(n,e){let t=Gi(e);return t?n.weapons.includes(e)?n.cash<t.ammoPrice?Qn("Not enough cash"):(n.cash-=t.ammoPrice,n.ammo[e]=(n.ammo[e]|0)+t.ammoBox,Vs("+"+t.ammoBox+" rounds")):Qn("Buy the gun first"):Qn("Unknown weapon")}function sm(n,e){return e===null?(n.equipped=null,Vs("Holstered")):n.weapons.includes(e)?(n.equipped=e,Vs(Gi(e).name+" equipped")):Qn("Not owned")}function Au(n){let e=[...n.weapons,null];if(e.length===1)return null;let t=e.indexOf(n.equipped);return n.equipped=e[(t+1)%e.length],n.equipped}function rm(n,e){return!Number.isInteger(e)||e<0||e>16777215?Qn("Unknown color"):n.outfit.shirt===e?Qn("Already wearing it"):n.cash<ko?Qn("Not enough cash"):(n.cash-=ko,n.outfit.shirt=e,Vs("New shirt"))}function om(n,e){let t=Ol.find(i=>i.id===e);return t?n.hats.includes(e)?(n.outfit.hat=e,Vs(t.name+" on")):n.cash<t.price?Qn("Not enough cash"):(n.cash-=t.price,n.hats.push(e),n.outfit.hat=e,Vs(t.name+" bought")):Qn("Unknown hat")}var Fl=class{constructor(){this.reset(0,0,0)}reset(e,t,i){this.pos={x:e,z:t},this.heading=i,this.speed=0,this.phase=0}update(e,t,i){t=Math.min(t,.05);let s=am(e.moveX||0),r=am(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,f=this.pos.z+c*this.speed*t;if(i){let p=i(h,f,.45);h=p.x,f=p.z}return this.pos.x=h,this.pos.z=f,this.phase+=this.speed*t*2.1,this}};function am(n){return n<-1?-1:n>1?1:n}function Hr(n,e,t,i){let s=n-t,r=e-i;return Math.sqrt(s*s+r*r)}function Ru(n,e,t){let i=Math.cos(t),s=-Math.sin(t);return{x:n-i*1.9,z:e-s*1.9,heading:t}}function lm(n,e,t,i,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(n<s.minX||n>s.maxX)return 1/0}else{let l=(s.minX-n)/t,c=(s.maxX-n)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(i)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/i,c=(s.maxZ-e)/i;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function Cu(n,e,t,i,s,r,o,a){let l=n-s,c=e-r,h=l*t+c*i,f=l*l+c*c-o*o,p=h*h-f;if(p<0)return 1/0;let g=Math.sqrt(p),x=-h-g;return x<0&&(x=-h+g),x>=0&&x<=a?x:1/0}Dt();var YS=()=>new _e({color:13011554,roughness:.75}),ZS=()=>new _e({color:2963272,roughness:.85}),$S=()=>new _e({color:1118481,roughness:.6}),JS=()=>new _e({color:2759184,roughness:.9}),KS=()=>new _e({color:1908515,metalness:.7,roughness:.35});function ft(n,e,t,i,s=0){let r=new Ie(n,e,t);r.translate(0,s,0);let o=new ie(r,i);return o.castShadow=!0,o}function QS(n){let e=new rt,t=KS(),i=new _e({color:7031342,roughness:.8});if(n==="pistol")e.add(ft(.06,.08,.24,t,.05).translateZ(-.08)),e.add(ft(.05,.12,.06,t,-.02));else if(n==="shotgun")e.add(ft(.07,.07,.75,t,.05).translateZ(-.28)),e.add(ft(.08,.09,.22,i,0).translateZ(-.38)),e.add(ft(.07,.12,.3,i,0).translateZ(.18));else if(n==="smg")e.add(ft(.07,.11,.42,t,.05).translateZ(-.12)),e.add(ft(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(ft(.04,.04,.12,t,.07).translateZ(-.38));else if(n==="glock"||n==="deagle"){let s=n==="deagle";e.add(ft(s?.07:.06,s?.09:.075,s?.3:.22,t,.05).translateZ(-.08)),e.add(ft(.05,.13,.065,n==="deagle"?i:t,-.03))}else if(n==="sniper")e.add(ft(.06,.1,.95,t,.05).translateZ(-.3)),e.add(ft(.045,.045,.32,t,.14).translateZ(-.12)),e.add(ft(.06,.13,.3,i,0).translateZ(.3));else if(n==="minigun"){for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.add(ft(.03,.03,.8,t,.05+Math.sin(r)*.06).translateX(Math.cos(r)*.06).translateZ(-.35))}e.add(ft(.2,.2,.3,t,.05).translateZ(.05))}else if(n==="ak"){e.add(ft(.07,.11,.72,t,.05).translateZ(-.22));let s=ft(.06,.2,.08,t,-.1).translateZ(-.18);s.rotation.x=.35,e.add(s),e.add(ft(.06,.12,.28,i,.02).translateZ(.26)),e.add(ft(.07,.06,.24,i,0).translateZ(-.38))}else e.add(ft(.07,.11,.7,t,.05).translateZ(-.22)),e.add(ft(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(ft(.06,.13,.26,t,.02).translateZ(.24)),e.add(ft(.05,.05,.2,t,.14).translateZ(-.15));return e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function jS(n,e){if(n==="crown"){let t=new rt,i=new _e({color:16765503,metalness:1,roughness:.25,emissive:3811840}),s=new ie(new Mt(.16,.16,.09,16,1,!0),i);s.material.side=wt,s.position.y=.02,t.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new ie(new zr(.035,.09,4),i);a.position.set(Math.cos(o)*.155,.1,Math.sin(o)*.155),t.add(a);let l=new ie(new Vt(.018,6,6),new _e({color:e,emissive:e,emissiveIntensity:.6}));l.position.set(Math.cos(o+.5)*.162,.02,Math.sin(o+.5)*.162),t.add(l)}return t}if(n==="helmet"){let t=new rt,i=new os({color:e,metalness:.4,roughness:.25,clearcoat:1}),s=new ie(new Vt(.2,16,12,0,Math.PI*2,0,Math.PI/1.7),i);s.position.y=-.06,t.add(s);let r=new ie(new Vt(.205,16,8,Math.PI*1.2,Math.PI*.6,Math.PI*.35,Math.PI*.25),new _e({color:724762,metalness:.9,roughness:.1}));return r.position.y=-.06,t.add(r),t}if(n==="cap"){let t=new rt,i=new _e({color:e,roughness:.7}),s=new ie(new Vt(.155,14,8,0,Math.PI*2,0,Math.PI/2),i);t.add(s);let r=ft(.24,.02,.14,i);return r.position.set(0,.01,-.15),t.add(r),t}if(n==="beanie"){let t=new _e({color:e,roughness:.95});return new ie(new Vt(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(n==="cowboy"){let t=new rt,i=new _e({color:e,roughness:.85}),s=new ie(new Mt(.3,.3,.02,20),i),r=new ie(new Mt(.12,.15,.17,14),i);return r.position.y=.09,t.add(s,r),t}return null}function kr(n){let e=new rt,t=YS(),i=ZS(),s=$S(),r=JS(),o=new _e({color:n.shirt,roughness:.8}),a=[],l=[];for(let w of[-1,1]){let U=new rt;U.position.set(w*.12,.92,0),U.add(ft(.17,.84,.2,i,-.42));let M=ft(.17,.09,.3,s,-.88);M.position.z=-.04,U.add(M),e.add(U),a.push(U);let y=new rt;y.position.set(w*.33,1.5,0),y.add(ft(.13,.36,.15,o,-.17)),y.add(ft(.11,.3,.12,t,-.5));let b=ft(.1,.1,.1,t,-.69);y.add(b),e.add(y),l.push(y)}let c=ft(.52,.62,.27,o,1.23);e.add(c);let h=ft(.53,.06,.28,s,.93);e.add(h);let f=ft(.12,.08,.12,t,1.57);e.add(f);let p=new ie(new Vt(.15,16,12),t);p.position.y=1.74,p.scale.set(1,1.12,1),p.castShadow=!0,e.add(p);let g=new ie(new Vt(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),r);g.position.y=1.76,e.add(g);let x=new rt,m=new ie(new Ie(.3,.62,.1).translate(0,-.31,0),r);m.position.set(0,1.84,.13),m.rotation.x=.12,m.castShadow=!0;let d=new ie(new Ie(.05,.36,.14).translate(0,-.18,0),r);d.position.set(-.15,1.82,.02);let u=d.clone();u.position.x=.15,x.add(m,d,u),x.visible=!1,e.add(x);let v=new rt;v.position.y=1.8,e.add(v);let _=new rt;return _.position.y=-.69,l[1].add(_),e.userData={legs:a,arms:l,shirt:o,skin:t,pants:i,hair:r,longHair:x,hatSlot:v,gunSlot:_,gunId:null,hatId:null,hatColor:null,recoil:0},hi(e,n),e}function hi(n,e){let t=n.userData;t.shirt.color.setHex(e.shirt),e.pants!=null&&t.pants.color.setHex(e.pants),e.skin!=null&&t.skin.color.setHex(e.skin),e.hair!=null&&t.hair.color.setHex(e.hair);let i=e.hatColor!=null?e.hatColor:e.shirt;if(t.hatId!==e.hat||t.hatColor!==i){t.hatSlot.clear();let s=jS(e.hat,i);s&&t.hatSlot.add(s),t.hatId=e.hat,t.hatColor=i}t.hair.visible=e.hat!=="helmet",t.longHair.visible=!!e.hairLong&&e.hat!=="helmet"}function Go(n,e){let t=n.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let i=QS(e);i.rotation.x=-Math.PI/2,t.gunSlot.add(i)}t.gunId=e}}function hs(n,e,t,i,s){let r=n.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),i?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),n.position.y=Math.abs(Math.cos(e))*o*.05}function Bl(n){n.userData.recoil=1}Dt();var cm=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],eE=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function hm(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new un(i);return s.colorSpace=vt,s.anisotropy=4,s}function tE(n,e,t){return hm(512,128,(i,s,r)=>{i.fillStyle="#0b0f1a",i.fillRect(0,0,s,r),i.strokeStyle=t,i.lineWidth=8,i.strokeRect(6,6,s-12,r-12),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.font="bold 58px sans-serif",i.fillText(n,s/2,52),i.fillStyle="#e2e8f0",i.font="bold 22px sans-serif",i.fillText(e,s/2,100)})}function nE(){return hm(128,128,(n,e,t)=>{let i=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{n.beginPath(),n.arc(i,s,62-a*10,0,Math.PI*2),n.fillStyle=o,n.fill()})})}function um(n,e){let t=[],i=[],s=new _e({color:14078925,roughness:.85,envMapIntensity:.4}),r=new _e({color:2961720,roughness:.8}),o=new _e({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of eE){let[f,p]=h.bx,[g,x]=h.bz,m=(f+p)/2,d=(g+x)/2,u=p-f,v=x-g,_=new ie(new Ie(u,h.h,v).translate(0,h.h/2,0),s);_.position.set(m,.03,d),_.castShadow=_.receiveShadow=!0,n.add(_);let w=new ie(new Ie(u+.6,.5,v+.6),r);w.position.set(m,h.h+.25,d),n.add(w);let U=h.face==="-x"?-1:1,M=U<0?f:p,y=new ie(new Ie(1.6,.2,v*.9),new _e({color:h.color,roughness:.6}));y.position.set(M+U*.8,3.3,d),y.rotation.z=U*.18,n.add(y);let b=new ie(new st(v*.75,2.4),o);b.position.set(M+U*.02,1.5,d),b.rotation.y=U*Math.PI/2,n.add(b);let S=new _e({map:tE(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});S.emissiveMap=S.map,S.emissiveIntensity=.55;let E=new ie(new st(v*.85,v*.85/4),S);E.position.set(M+U*.05,h.h-1.4,d),E.rotation.y=U*Math.PI/2,n.add(E),e.colliders.push({minX:f,maxX:p,minZ:g,maxZ:x});let N={x:M+U*1.6,z:d},k=new lt({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:wt}),P=new ie(new oi(.9,1.25,32).rotateX(-Math.PI/2),k);P.position.set(N.x,.09,N.z),n.add(P);let R=new lt({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:wt,blending:Gt}),A=new ie(new Mt(1.05,1.05,3.2,24,1,!0),R);A.position.set(N.x,1.6,N.z),n.add(A),i.push({ring:P,ringMat:k,beamMat:R}),t.push({id:h.id,type:h.type,name:h.name,door:N,color:h.accent})}let a=iE(n,e),l=0;function c(h){l+=h;let f=.55+Math.sin(l*3)*.25;for(let p of i)p.ringMat.opacity=f+.2,p.beamMat.opacity=f*.3,p.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function iE(n,e){let o=new ie(new st(54,16).rotateX(-Math.PI/2),new _e({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,n.add(o);let a=new _e({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let d of l){let u=new ie(new Ie(d.maxX-d.minX,d.h,d.maxZ-d.minZ).translate(0,d.h/2,0),a);u.position.set((d.minX+d.maxX)/2,.03,(d.minZ+d.maxZ)/2),u.castShadow=u.receiveShadow=!0,n.add(u),e.colliders.push({minX:d.minX,maxX:d.maxX,minZ:d.minZ,maxZ:d.maxZ})}let c=new ie(new st(.3,15).rotateX(-Math.PI/2),new lt({color:16765503}));c.position.set(51,.06,156/2),n.add(c);let h=nE(),f=new _e({map:h,roughness:.6,side:wt}),p=new _e({color:4144966,roughness:.7}),x=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([d,u])=>{let v=new rt;v.position.set(d,.04,u);let _=new ie(new Ie(.08,1.1,.08).translate(0,.55,0),p),w=new ie(new Nr(.55,24),f);return w.position.y=1.5,w.rotation.y=-Math.PI/2,w.castShadow=!0,v.add(_,w),n.add(v),{x:d,z:u,r:.6,up:!0,timer:0,fall:0,pivot:v}});function m(d){for(let u of x)u.up?u.fall>0&&(u.fall=Math.max(0,u.fall-d*4)):(u.fall=Math.min(1,u.fall+d*6),u.timer-=d,u.timer<=0&&(u.up=!0)),u.pivot.rotation.z=u.fall*(Math.PI/2-.05),u.pivot.rotation.z*=-1}return{targets:x,update:m,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function dm(n){return n.up?(n.up=!1,n.timer=3,!0):!1}Dt();var sE=.22,Ws=1.45,rE=85,Pu=4.5;function fm(n){let e=[],t=new hl(.07,.5,2,8).rotateX(Math.PI/2),i=new Mt(.008,.05,1,6,1,!0).rotateX(Math.PI/2).translate(0,0,.5);for(let d=0;d<48;d++){let u=new ie(t,new lt({color:16774856,transparent:!0,opacity:1,blending:Gt,depthWrite:!1}));u.visible=!1,u.frustumCulled=!1;let v=new ie(new Vt(.22,8,6),new lt({color:16751150,transparent:!0,opacity:.45,blending:Gt,depthWrite:!1}));u.add(v);let _=new ie(i,new lt({color:16757575,transparent:!0,opacity:.75,blending:Gt,depthWrite:!1,side:wt}));_.visible=!1,_.frustumCulled=!1,n.add(u,_),e.push({slug:u,trail:_,live:!1,x0:0,z0:0,dx:0,dz:0,dist:0,travel:0,hitT:null,onHit:null,wall:!1})}let s=0,r=new Kn(n,8,{color:16762976,opacity:.95,blending:Gt}),o=new Kn(n,30,{color:16757575,opacity:.9,blending:Gt}),a=new Kn(n,20,{color:12103840,opacity:.5}),l=0;function c(d,u,v,_,w,U,M,y,b){let S=e[s];s=(s+1)%e.length,Object.assign(S,{live:!0,x0:d,z0:u,dx:v,dz:_,dist:Math.max(.5,w),travel:0,hitT:U,wall:M,onHit:y,onArrive:b||null}),S.slug.visible=!0,S.trail.visible=!0,S.slug.rotation.y=Math.atan2(v,_),h(S)}function h(d){let u=Math.min(d.travel,d.dist),v=d.x0+d.dx*u,_=d.z0+d.dz*u;d.slug.position.set(v,Ws,_),f(d,v,_,Math.min(Pu,u))}function f(d,u,v,_){d.trail.position.set(u,Ws,v),d.trail.rotation.y=Math.atan2(-d.dx,-d.dz),d.trail.scale.set(1,1,Math.max(.01,_))}function p(d){let u=d.x0+d.dx*d.dist,v=d.z0+d.dz*d.dist;if(d.onArrive){let _=d.onArrive;d.onArrive=null,_();return}if(d.hitT){dm(d.hitT)&&d.onHit&&d.onHit(d.hitT);for(let _=0;_<5;_++)o.emit(u,Ws,v,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else d.wall&&(o.emit(u-d.dx*.1,Ws,v-d.dz*.1,{vx:-d.dx*2,vy:1.5,vz:-d.dz*2,life:.18,size:.3,grow:.2}),a.emit(u-d.dx*.2,Ws,v-d.dz*.2,{vx:-d.dx,vy:.6,vz:-d.dz,life:.5,size:.4,grow:1.2}))}function g(d){for(let u of e)if(u.live){if(u.travel+=rE*d,u.travel>=u.dist){if(u.slug.visible&&(p(u),u.slug.visible=!1),u.travel-u.dist>=Pu){u.live=!1,u.trail.visible=!1;continue}let v=u.x0+u.dx*u.dist,_=u.z0+u.dz*u.dist,w=Pu-(u.travel-u.dist);f(u,v,_,Math.min(w,u.dist));continue}h(u)}}function x(d,u,v,_){let w=v-d,U=_-u,M=Math.hypot(w,U);M>.1&&(r.emit(d,Ws,u,{vx:w/M*2,vy:0,vz:U/M*2,life:.06,size:.7,grow:.6}),c(d,u,w/M,U/M,M,null,!0,null))}function m(d,u,v,_){l=Math.max(0,l-d),g(d),r.update(d),o.update(d),a.update(d);let w=u.save.equipped,U=w&&Gi(w);if(v=v||_,!U||!v||l>0)return{fired:!1};if(!U.auto&&!_)return{fired:!1};if((u.save.ammo[w]|0)<=0)return _&&(u.audio.click&&u.audio.click(),u.toast&&u.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),l=.3,{fired:!1,empty:!0};u.save.ammo[w]--,l=U.rate;let M=u.heading,y=sE;for(let z of u.targets){if(!z.up)continue;let O=z.x-u.pos.x,V=z.z-u.pos.z,W=Math.hypot(O,V);if(W>U.range||W<.5)continue;let L=Math.atan2(-O,-V),G=Math.atan2(Math.sin(L-u.heading),Math.cos(L-u.heading));Math.abs(G)<y&&(y=Math.abs(G),M=L)}if(u.hitables)for(let z of u.hitables)for(let O of z){if(O.ref&&O.ref.kind==="ped")continue;let V=O.x-u.pos.x,W=O.z-u.pos.z,L=Math.hypot(V,W);if(L>U.range||L<.5)continue;let G=Math.atan2(-V,-W),Z=Math.abs(Math.atan2(Math.sin(G-u.heading),Math.cos(G-u.heading)));Z<y&&(y=Z,M=G)}u.lock&&(M=Math.atan2(-(u.lock.x-u.pos.x),-(u.lock.z-u.pos.z)));let b=-Math.sin(u.heading),S=-Math.cos(u.heading),E=Math.cos(u.heading),N=-Math.sin(u.heading),k=u.pos.x+b*.95+E*.3,P=u.pos.z+S*.95+N*.3;r.emit(k,Ws,P,{vx:b*2,vy:0,vz:S*2,life:.06,size:U.id==="shotgun"?1.1:.7,grow:.6});let R=0,A=[];for(let z=0;z<U.pellets;z++){let O=M+(Math.random()-.5)*2*U.spread,V=-Math.sin(O),W=-Math.cos(O),L=U.range,G=null;for(let I of u.colliders){let X=lm(k,P,V,W,I,L);X<L&&(L=X,G=null)}for(let I of u.targets){if(!I.up)continue;let X=Cu(k,P,V,W,I.x,I.z,I.r,L);X<L&&(L=X,G=I)}let Z=null;if(u.hitables)for(let I of u.hitables)for(let X of I){let K=Cu(k,P,V,W,X.x,X.z,X.r,L);K<L&&(L=K,Z=X.ref,G=null)}if((G||Z)&&R++,Z){let I=U.dmg||20,X=V,K=W;c(k,P,V,W,L,null,!1,null,()=>u.onPersonHit&&u.onPersonHit(Z,I,X,K))}else c(k,P,V,W,L,G,L<U.range,u.onTargetHit);z<3&&A.push([k,P,k+V*L,P+W*L])}return u.onShot&&u.onShot(A),u.audio.shot&&u.audio.shot(U.id),{fired:!0,hits:R}}return{update:m,remoteShot:x}}var oE=n=>"#"+n.toString(16).padStart(6,"0"),Vo=n=>"$"+n.toLocaleString();function pm(n){let e=c=>document.getElementById(c),t=e("store"),i=e("store-list"),s=null;function r(c){n.toast(c.msg),n.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(n.persist(),n.onChange()),l()}function o(){let c=n.save;i.innerHTML="";for(let f of zl){let p=c.weapons.includes(f.id),g=document.createElement("div");g.className="upg-row store-row"+(c.equipped===f.id?" sel":""),g.innerHTML=`<div class="uinfo"><b>${f.name}</b><small>${f.desc}</small>
        <small class="ammo-line">${p?"Ammo: "+(c.ammo[f.id]|0):Vo(f.price)}</small></div>
        <div class="store-btns"></div>`;let x=g.querySelector(".store-btns");if(p){let m=document.createElement("button");m.className="upg-btn",m.textContent="+"+f.ammoBox+" AMMO "+Vo(f.ammoPrice),m.disabled=c.cash<f.ammoPrice,m.onclick=()=>r(im(c,f.id)),x.appendChild(m);let d=document.createElement("button");d.className="buy-btn eq",d.textContent=c.equipped===f.id?"EQUIPPED":"EQUIP",d.disabled=c.equipped===f.id,d.onclick=()=>r(sm(c,f.id)),x.appendChild(d)}else{let m=document.createElement("button");m.className="buy-btn",m.textContent="BUY "+Vo(f.price),m.disabled=c.cash<f.price,m.onclick=()=>r(nm(c,f.id)),x.appendChild(m)}i.appendChild(g)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",i.appendChild(h)}function a(){let c=n.save;i.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${ko?Vo(ko):"FREE"}</b><div class="swatch-row"></div>`;let f=h.querySelector(".swatch-row");for(let m of em){let d=document.createElement("div");d.className="swatch"+(c.outfit.shirt===m?" sel":""),d.style.background=oE(m),d.onclick=()=>r(rm(c,m)),f.appendChild(d)}i.appendChild(h);let p=document.createElement("div");p.className="style-sec",p.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let g=p.querySelector(".swatch-row");for(let m of Ol){let d=document.createElement("button"),u=c.hats.includes(m.id);d.className="wheel-opt"+(c.outfit.hat===m.id?" sel":""),d.innerHTML=`${m.name}<small>${c.outfit.hat===m.id?"wearing":u||!m.price?"free":Vo(m.price)}</small>`,d.onclick=()=>r(om(c,m.id)),g.appendChild(d)}i.appendChild(p);let x=document.createElement("p");x.className="store-tip",x.textContent="Everything here is free. More colors, pants, skin tone & hair in \u{1F3A8} SKIN EDITOR (pause menu).",i.appendChild(x)}function l(){e("store-cash").textContent=n.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var mm=[];for(let n=0;n<=5;n++)mm.push((n-5/2)*74);var Wo=384/2;function gm(n,e){let t=n.getContext("2d"),i=n.width,r=i/2/130,o=0;function a(l,c,h,f,p){if((o++&3)!==0)return;let g=m=>i/2+(m-l)*r,x=m=>i/2+(m-c)*r;t.clearRect(0,0,i,i),t.save(),t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,40,28,0.82)",t.fillRect(0,0,i,i),t.fillStyle="rgba(120,130,145,0.55)";for(let m=0;m<5;m++)for(let d=0;d<5;d++){let u=(m-2)*74,v=(d-4/2)*74;t.fillRect(g(u-30),x(v-30),60*r,60*r)}t.strokeStyle="#2b2f36",t.lineWidth=14*r,t.beginPath();for(let m of mm)t.moveTo(g(m),x(-Wo)),t.lineTo(g(m),x(Wo)),t.moveTo(g(-Wo),x(m)),t.lineTo(g(Wo),x(m));t.moveTo(g(Wo),x(0)),t.lineTo(g(232),x(0)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(g(232),x(-225)),t.lineTo(g(232),x(225)),t.stroke();for(let m of e)t.fillStyle=m.color,t.beginPath(),t.arc(g(m.door.x),x(m.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();f&&(t.fillStyle="#ffffff",t.fillRect(g(f.x)-3,x(f.z)-3,6,6)),p&&p.each(m=>{m.b>=0||(t.fillStyle="#4ade80",t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.beginPath(),t.arc(g(m.x),x(m.z),4,0,Math.PI*2),t.fill(),t.stroke())}),t.restore(),t.save(),t.translate(i/2,i/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",i/2,11)}return{draw:a}}var aE={none:"None",center:"Center",dual:"Dual",side:"Side"},lE={clear:"Clear",dark:"Dark",limo:"Limo"};function xm(n){let e=x=>document.getElementById(x),t=e("skin-editor"),i=e("se-body"),s=n.save,r="car",o=!1;function a(x,m,d,u={}){let v=`<div class="swatch-row se-row" data-key="${x}">`;u.off&&(v+=`<button class="swatch off${d==null?" sel":""}" data-v="off" aria-label="off">OFF</button>`);for(let w of m)v+=`<button class="swatch${w===d?" sel":""}" data-v="${w}" style="background:${Nl(w)}" aria-label="color"></button>`;let _=d!=null&&!m.includes(d);return v+=`<label class="swatch custom${_?" sel":""}" style="${_?"background:"+Nl(d):""}" title="Any color"><input type="color" data-key="${x}" value="${Nl(d??16777215)}">\u{1F3A8}</label>`,v+"</div>"}function l(x,m,d,u){return`<div class="swatch-row se-row" data-key="${x}">`+m.map(v=>`<button class="wheel-opt${v===u?" sel":""}" data-v="${v}"><b>${d[v]}</b></button>`).join("")+"</div>"}let c=(x,m)=>`<div class="style-sec"><b>${x}</b>${m}</div>`;function h(){let x=s.currentCar,m=Gs(s,x),u='<div class="swatch-row se-row" data-key="car">'+n.cars.filter(v=>s.owned.includes(v.id)).map(v=>`<button class="wheel-opt${v.id===x?" sel":""}" data-v="${v.id}"><b>${v.name}</b></button>`).join("")+"</div>";i.innerHTML=c("Car",u)+c("Body paint",a("paint",ls,s.paint[x]))+c("Rims",a("rims",[12172998,1513500,13211182,2287359,14100029,16317180,4906624,11032055],m.rims))+c("Racing stripes",l("stripes",Bo,aE,m.stripes))+(m.stripes!=="none"?c("Stripe color",a("stripe",ls,m.stripe)):"")+c("Underglow",a("glow",[2287359,16723555,4906624,11032055,16765503,16317180],m.glow,{off:!0}))+c("Window tint",l("tint",Ho,lE,m.tint))}function f(){let x=s.outfit;i.innerHTML=c("Name (shown online)",`<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g,"")}" autocomplete="off" spellcheck="false">`)+c("Shirt",a("shirt",ls,x.shirt))+c("Pants",a("pants",[2963272,1981066,1120295,7041664,9067034,16317180,7999504,1483594],x.pants))+c("Skin tone",a("skin",Ll,x.skin))+c("Hair",a("hair",Il,x.hair))+c("Hat",l("hat",cs,Dl,x.hat))+(x.hat!=="none"?c("Hat color",a("hatColor",ls,x.hatColor)):"");let m=e("se-name");m.addEventListener("input",()=>{let d=wu(m.value);d&&(s.name=d,n.persist(),n.onName())}),m.addEventListener("keydown",d=>d.stopPropagation())}function p(){for(let x of t.querySelectorAll(".setab"))x.classList.toggle("active",x.dataset.tab===r);r==="car"?h():f()}function g(x,m){let d=s.currentCar,u=Gs(s,d),v=s.outfit,_=m==="off"?null:typeof m=="string"&&m[0]==="#"?parseInt(m.slice(1),16):isNaN(+m)?m:+m,w=!1,U=!1;switch(x){case"car":s.owned.includes(m)&&(s.currentCar=m,w=!0);break;case"paint":s.paint[d]=_,w=!0;break;case"rims":u.rims=_,w=!0;break;case"stripes":u.stripes=m,w=!0;break;case"stripe":u.stripe=_,w=!0;break;case"glow":u.glow=_,w=!0;break;case"tint":u.tint=m,w=!0;break;case"shirt":case"pants":case"skin":case"hair":case"hatColor":v[x]=_,U=!0;break;case"hat":v.hat=m,U=!0;break}n.persist(),w&&n.onCar(x==="car"),U&&n.onOutfit(),n.beep(760,.03)}i.addEventListener("click",x=>{let m=x.target.closest("button[data-v]");if(!m)return;let d=m.closest("[data-key]");g(d.dataset.key,m.dataset.v),p()}),i.addEventListener("input",x=>{let m=x.target.closest("input[type=color]");if(!m)return;g(m.dataset.key,m.value);let d=m.closest("label");d&&(d.style.background=m.value)}),i.addEventListener("change",x=>{x.target.closest("input[type=color]")&&p()});for(let x of t.querySelectorAll(".setab"))x.addEventListener("click",()=>{r=x.dataset.tab,n.onTab(r),p()});return{open(x){r=x||"car",o=!0,t.classList.remove("hidden"),n.onTab(r),p()},close(){o=!1,t.classList.add("hidden")},get isOpen(){return o},get tab(){return r},refresh:p}}Dt();var Iu=["lobby","apartment","office","diner"],_m={lobby:"LOBBY",apartment:"APARTMENT",office:"OFFICE",diner:"DINER"},Gr=22,Vr=16,Hl=4.6,xi=.3,cE=-1180,vm=n=>Iu[(n*2654435761>>>0)%Iu.length];function hE(n){return{x:(Iu.indexOf(n)-1.5)*90,z:cE}}function Lu(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new un(s);return r.colorSpace=vt,i&&(r.wrapS=r.wrapT=zi,r.repeat.set(i[0],i[1])),r}var kl=(n,e={})=>new _e(Object.assign({color:n,roughness:.8,metalness:.05,emissive:n,emissiveIntensity:.18},e)),uE={lobby:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#e9e4da":"#b9b2a5",n.fillRect(t*16,e*16,16,16)},apartment:n=>{for(let e=0;e<8;e++)n.fillStyle=e%2?"#9a6a3e":"#a8754a",n.fillRect(0,e*16,128,16),n.fillStyle="#7a5230",n.fillRect(e*37%128,e*16,2,16)},office:n=>{n.fillStyle="#5b6472",n.fillRect(0,0,128,128),n.fillStyle="#525a67";for(let e=0;e<128;e+=32)n.fillRect(e,0,1,128),n.fillRect(0,e,128,1)},diner:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#f2f2f2":"#1a1a1a",n.fillRect(t*16,e*16,16,16)}},dE={lobby:14209732,apartment:13227715,office:14673388,diner:15909813};function ym(n){let e=new Map;function t(x){if(e.has(x))return e.get(x);let m=hE(x),d=new rt;d.position.set(m.x,0,m.z);let u=[],v=Gr/2,_=Vr/2,w=(z,O,V,W)=>u.push({minX:m.x+z,maxX:m.x+O,minZ:m.z+V,maxZ:m.z+W}),U=(z,O,V,W,L,G=0,Z=!0)=>{let I=new ie(z,O);return I.position.set(V,W,L),I.rotation.y=G,I.castShadow=Z,I.receiveShadow=!0,d.add(I),I},M=(z,O,V,W,L,G,Z=0,I=!0)=>{U(new Ie(z,O,V).translate(0,O/2,0),W,L,Z,G),I&&w(L-z/2,L+z/2,G-V/2,G+V/2)},y=Lu(128,128,uE[x],[Gr/4,Vr/4]);U(new st(Gr,Vr).rotateX(-Math.PI/2),kl(16777215,{map:y,emissiveMap:y,emissiveIntensity:.2}),0,.02,0,0,!1),U(new st(Gr,Vr).rotateX(Math.PI/2),kl(16053488,{emissiveIntensity:.5}),0,Hl,0,0,!1);let b=kl(dE[x],{side:wt}),S=(z,O,V,W)=>{U(new Ie(z,Hl,O).translate(0,Hl/2,0),b,V,0,W,0,!1),w(V-z/2,V+z/2,W-O/2,W+O/2)};S(Gr+xi*2,xi,0,-_-xi/2),S(Gr+xi*2,xi,0,_+xi/2),S(xi,Vr,-v-xi/2,0),S(xi,Vr,v+xi/2,0);let E=new _e({color:16777215,emissive:16774364,emissiveIntensity:2.2});for(let z of[-6,0,6])for(let O of[-4,4])U(new st(2.4,.9).rotateX(Math.PI/2),E,z,Hl-.02,O,0,!1);let N=Lu(256,64,(z,O,V)=>{let W=z.createLinearGradient(0,0,0,V);W.addColorStop(0,"#7fb2ee"),W.addColorStop(1,"#cfe6f7"),z.fillStyle=W,z.fillRect(0,0,O,V),z.fillStyle="#3b4656";for(let L=0;L<O;L+=64)z.fillRect(L,0,4,V);z.fillRect(0,0,O,4),z.fillRect(0,V-4,O,4)});U(new st(14,1.6),new lt({map:N}),0,2.6,-_+.01,0,!1);let k=Lu(64,96,(z,O,V)=>{z.fillStyle="#20262f",z.fillRect(0,0,O,V),z.fillStyle="#4ade80",z.fillRect(0,0,O,6),z.fillRect(0,0,5,V),z.fillRect(O-5,0,5,V),z.fillStyle="#9fd4ff",z.fillRect(9,12,O-18,V-20),z.fillStyle="#16a34a",z.font="bold 14px sans-serif",z.textAlign="center",z.fillText("EXIT",O/2,40)});U(new st(2.2,3).translate(0,1.5,0),new _e({map:k,emissive:16777215,emissiveMap:k,emissiveIntensity:.6}),0,0,_-.02,Math.PI,!1);let P=new lt({color:4906624,transparent:!0,opacity:.7,depthWrite:!1,side:wt}),R=U(new oi(.75,1.05,32).rotateX(-Math.PI/2),P,0,.05,_-1.6,0,!1);fE(x,{add:U,boxAt:M,mat:kl,W2:v,D2:_,group:d,solid:w}),n.add(d);let A={style:x,group:d,colliders:u,pad:R,padMat:P,spawn:{x:m.x,z:m.z+_-3.2,heading:0},exit:{x:m.x,z:m.z+_-1.6},bounds:{minX:m.x-v,maxX:m.x+v,minZ:m.z-_,maxZ:m.z+_}};return e.set(x,A),A}let i=new _e({color:4165434,roughness:.6,emissive:2054682,emissiveIntensity:.6}),s=new _e({color:15919044,roughness:.6}),r=new _e({color:4937059,metalness:.7,roughness:.35}),o=new lt({color:4906624,transparent:!0,opacity:.5,depthWrite:!1,side:wt,blending:Gt}),a=[];function l(){for(let x of a)n.remove(x.mesh);a.length=0}function c(x,m){l();for(let d of m){let u=new rt;if(d.kind==="safe"){u.add(new ie(new Ie(.75,.8,.65).translate(0,.4,0),r));let _=new ie(new Mt(.1,.1,.04,14).rotateX(Math.PI/2),new _e({color:13948120,metalness:1,roughness:.2}));_.position.set(0,.45,.34),u.add(_)}else for(let _=0;_<3;_++){let w=new ie(new Ie(.34,.09,.17),i);w.position.set((_-1)*.12,.05+_%2*.09,_%2*.05),w.rotation.y=_*.3,u.add(w);let U=new ie(new Ie(.05,.095,.175),s);U.position.copy(w.position),U.rotation.y=w.rotation.y,u.add(U)}let v=new ie(new oi(.5,.62,24).rotateX(-Math.PI/2),o);v.position.y=.04,u.add(v),u.position.set(d.x,.02,d.z),n.add(u),a.push({mesh:u,x:d.x,z:d.z,amount:d.amount,kind:d.kind,got:!1})}}function h(x,m){let d=[],u=x.bounds;for(let v=0;v<200&&d.length<m;v++){let _=u.minX+1.2+Math.random()*(u.maxX-u.minX-2.4),w=u.minZ+1.2+Math.random()*(u.maxZ-u.minZ-2.4);if(Math.hypot(_-x.spawn.x,w-x.spawn.z)<2.5)continue;let U=!0;for(let M of x.colliders)if(_>M.minX-.7&&_<M.maxX+.7&&w>M.minZ-.7&&w<M.maxZ+.7){U=!1;break}for(let M of d)Math.hypot(M.x-_,M.z-w)<2&&(U=!1);U&&d.push({x:_,z:w})}return d}let f=0;function p(x,m){f+=x,m&&(m.padMat.opacity=.5+Math.sin(f*4)*.25,m.pad.rotation.y+=x),o.opacity=.35+Math.sin(f*5)*.2;for(let d of a)!d.got&&d.kind!=="safe"&&(d.mesh.rotation.y+=x*1.2)}function g(x,m){for(let d of a)if(!d.got&&Math.hypot(d.x-x,d.z-m)<(d.kind==="safe"?1.4:1))return d.got=!0,n.remove(d.mesh),d;return null}return{get:t,update:p,spawnLoot:c,clearLoot:l,lootSpots:h,grab:g}}function fE(n,e){let{add:t,boxAt:i,mat:s,W2:r,D2:o}=e,a=s(8016432),l=s(2237739),c=s(15921906),h=s(10134445,{metalness:.7,roughness:.35}),f=(x,m)=>{i(.6,.6,.6,s(9067066),x,m),t(new Vt(.6,10,8),s(4094516),x,1.15,m)},p=(x,m,d,u)=>{let v=s(u),_=new rt,w=new ie(new Ie(2.6,.45,1).translate(0,.22,0),v),U=new ie(new Ie(2.6,.6,.25).translate(0,.75,.38),v),M=new ie(new Ie(.25,.65,1).translate(-1.3,.32,0),v),y=new ie(new Ie(.25,.65,1).translate(1.3,.32,0),v);return _.add(w,U,M,y),_.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),_.position.set(x,0,m),_.rotation.y=d,e.group.add(_),Math.abs(Math.sin(d))>.5?[x-.6,x+.6,m-1.4,m+1.4]:[x-1.4,x+1.4,m-.6,m+.6]},g=x=>e.solid(x[0],x[1],x[2],x[3]);if(n==="lobby"){i(5,1.1,1.2,a,0,-2.5),i(5.2,.08,1.4,c,0,-2.5,1.1,!1);let x=s(12107462,{metalness:.85,roughness:.25,emissiveIntensity:.1});for(let m of[-6,-2,2,6])t(new st(2,3).translate(0,1.5,0),x,m,0,-o+.02,0,!1),t(new st(.4,.2),new lt({color:16747546}),m,3.3,-o+.03,0,!1);g(p(-7,2,Math.PI/2,1981066)),g(p(7,2,-Math.PI/2,1981066)),i(1.4,.4,.8,a,-5,2),i(1.4,.4,.8,a,5,2),f(-r+1,o-1),f(r-1,o-1),f(-r+1,-o+1.5),f(r-1,-o+1.5)}else if(n==="apartment"){g(p(-3,1.5,Math.PI,8141549)),i(1.8,.4,.9,a,-3,-.5),i(3,.5,.4,l,-3,-o+.4),t(new st(2.6,1.5),new _e({color:1118481,emissive:2781142,emissiveIntensity:.9}),-3,1.6,-o+.45,0,!1),i(6,.95,.8,c,6,-o+.5),i(.9,2,.8,h,r-.6,-o+.5),i(2.2,.75,1.1,a,5,-2);for(let x of[4.2,5.8])for(let m of[-3.1,-.9])i(.45,.5,.45,l,x,m);i(2.2,.55,3,s(15921906),r-1.4,3.5),i(2.2,.25,2.2,s(3718648),r-1.4,3.9,.55,!1),i(2.2,1,.2,a,r-1.4,o-3,0,!1),f(-r+1,o-1)}else if(n==="office"){let x=new _e({color:725536,emissive:3718648,emissiveIntensity:.9});for(let m of[-7,-2.5,2.5,7])for(let d of[-4.5,.5])i(3,.75,1.3,c,m,d),t(new Ie(.9,.55,.06).translate(0,.28,0),x,m,.8,d-.3),i(.55,.5,.55,l,m,d+1.1);i(6,.75,1.6,a,0,4.6),t(new st(5,2.2),new _e({color:16777215,emissive:16777215,emissiveIntensity:.3}),-r+.02,2,2,Math.PI/2,!1),f(r-1,o-1),f(-r+1,o-1)}else{i(10,1.05,1,s(14100029),2,-o+3),i(10.2,.08,1.2,c,2,-o+3,1.05,!1);for(let m=0;m<6;m++)t(new Mt(.28,.28,.12,12).translate(0,.75,0),s(14100029),-2+m*1.7,0,-o+4.3),i(.12,.7,.12,h,-2+m*1.7,-o+4.3,0,!1);for(let m of[-1,3])i(2.4,.75,1.1,c,-6.5,m),i(2.4,1.1,.5,s(14100029),-6.5,m-1.1),i(2.4,1.1,.5,s(14100029),-6.5,m+1.1);let x=new _e({color:16723555,emissive:16723555,emissiveIntensity:2.5});t(new Ie(8,.12,.06),x,2,3.4,-o+.05,0,!1),t(new Ie(8,.12,.06),new _e({color:2287359,emissive:2287359,emissiveIntensity:2.5}),2,3.1,-o+.05,0,!1),i(1,1.8,.7,s(2060267),r-.8,2),f(r-1,o-1)}}Dt();var Gl=1e5,Xs=[{id:"drive",text:"Drive to the green marker",needsTarget:!0},{id:"drift",text:"DRIFT! Hold HB (Space) while steering",needsTarget:!1},{id:"park",text:"Drive to the next marker and stop",needsTarget:!0},{id:"out",text:"Tap GET OUT (E) to leave your car",needsTarget:!1},{id:"enter",text:"Walk to the glowing door and tap ENTER",needsTarget:!0},{id:"exit",text:"Look around, then step on the green EXIT pad",needsTarget:!1}];function pE(n,e){switch(n){case"drive":return!!e.reached;case"drift":return e.driftTime>=1.5;case"park":return!!e.reached&&Math.abs(e.speed||0)<4;case"out":return!!e.onFoot;case"enter":return e.inside>=0;case"exit":return e.inside<0&&!!e.wasInside}return!1}function Mm(n,e){let t={x:37,z:-37},i=null,s=1/0;for(let v of e.buildings){let _=Math.hypot(v.door.x-(t.x+30),v.door.z-t.z);_<s&&(s=_,i=v)}let r={drive:{x:37,z:-30,r:8},park:i?{x:i.door.x+i.door.nx*7,z:i.door.z+i.door.nz*7,r:9}:{x:90,z:-37,r:9},enter:i?{x:i.door.x+i.door.nx*.8,z:i.door.z+i.door.nz*.8,r:1.6}:null},o=new lt({color:4906624,transparent:!0,opacity:.85,depthWrite:!1,side:wt}),a=new lt({color:4906624,transparent:!0,opacity:.22,depthWrite:!1,side:wt,blending:Gt}),l=new rt,c=new ie(new oi(.85,1,40).rotateX(-Math.PI/2),o);c.position.y=.1;let h=new ie(new Mt(1,1,30,24,1,!0).translate(0,15,0),a);l.add(c,h),l.visible=!1,n.add(l);let f=!1,p=0,g=0,x=!1,m=0;function d(){let v=Xs[p];return v&&v.needsTarget?r[v.id]:null}function u(){let v=d();l.visible=!!(f&&v),v&&(l.position.set(v.x,0,v.z),l.scale.set(v.r,1,v.r))}return{building:i,start(){f=!0,p=0,g=0,x=!1,u()},stop(){f=!1,l.visible=!1},get active(){return f},get step(){return p},get total(){return Xs.length},get text(){return Xs[p]?Xs[p].text:""},target:d,update(v,_){if(!f)return null;m+=v,o.opacity=.6+Math.sin(m*4)*.25,l.rotation.y+=v*.6;let w=d(),U=w?Math.hypot(_.pos.x-w.x,_.pos.z-w.z)<w.r:!1;return Xs[p].id==="drift"&&_.drifting&&(g+=v),_.inside>=0&&(x=!0),pE(Xs[p].id,{reached:U,driftTime:g,onFoot:_.onFoot,inside:_.inside,wasInside:x,speed:_.speed})?(p++,p>=Xs.length?(f=!1,l.visible=!1,"done"):(u(),"next")):null},get driftProgress(){return Math.min(1,g/1.5)}}}Dt();function Sm({url:n,key:e,topic:t,onStatus:i}){let s=new Map,r=null,o="off",a=0,l=null,c=null,h=0,f=!1,p=null,g="realtime:"+t;function x(v){if(o!==v&&(o=v,i))try{i(v)}catch{}}function m(v){if(r&&r.readyState===1)try{return r.send(JSON.stringify(v)),!0}catch{}return!1}function d(){if(f)return;clearTimeout(p),x("connecting");let v=n.replace(/^http/,"ws").replace(/\/$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(e)+"&vsn=1.0.0";try{r=new WebSocket(v)}catch{return u()}r.onopen=()=>{l=String(++a),m({topic:g,event:"phx_join",ref:l,join_ref:l,payload:{config:{broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},access_token:e}}),clearInterval(c),c=setInterval(()=>m({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++a)}),25e3)},r.onmessage=_=>{let w;try{w=JSON.parse(_.data)}catch{return}if(w.topic===g){if(w.event==="phx_reply"&&w.ref===l){if(w.payload&&w.payload.status==="ok")h=0,x("on");else{x("error");try{r.close()}catch{}}return}if(w.event==="phx_error"||w.event==="phx_close"){try{r.close()}catch{}return}if(w.event==="broadcast"&&w.payload){let U=s.get(w.payload.event);if(U)try{U(w.payload.payload||{})}catch(M){console.warn("mp handler",M)}}}},r.onclose=()=>{clearInterval(c),c=null,r=null,f||u()},r.onerror=()=>{}}function u(){x("connecting");let v=Math.min(15e3,1e3*Math.pow(1.7,h++));p=setTimeout(d,v)}return{connect(){f=!1,r||d()},close(){if(f=!0,clearTimeout(p),clearInterval(c),r){m({topic:g,event:"phx_leave",payload:{},ref:String(++a),join_ref:l});try{r.close()}catch{}}r=null,x("off")},on(v,_){s.set(v,_)},send(v,_){return o!=="on"?!1:m({topic:g,event:"broadcast",ref:String(++a),join_ref:l,payload:{type:"broadcast",event:v,payload:_}})},get status(){return o}}}var Du="https://fhbqxujlnqlmzvulrdxt.supabase.co",Uu="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w",Em="city-driver-v2";var mE=160,gE=1e3,xE=2500,_E=7e3,vE=16,yE=10,ME=(n,e)=>{let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t};function SE(n,e){let t=String(n||"Driver").slice(0,16),i="700 28px system-ui, -apple-system, sans-serif",s=document.createElement("canvas").getContext("2d");s.font=i;let r=Math.max(70,Math.ceil(s.measureText(t).width)+30),o=44,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d");l.fillStyle="rgba(8,12,22,0.72)",l.beginPath(),l.roundRect?l.roundRect(1,1,r-2,o-2,14):l.rect(1,1,r-2,o-2),l.fill(),l.fillStyle=e==="red"?"#ff3b4e":e==="blue"?"#3b8bff":"#4ade80",l.beginPath(),l.arc(16,o/2,5,0,Math.PI*2),l.fill(),l.font=i,l.fillStyle="#fff",l.textBaseline="middle",l.fillText(t,26,o/2+1);let c=new un(a),h=new Ur(new Ns({map:c,transparent:!0,depthTest:!1}));return h.scale.set(r/90,o/90,1),h.renderOrder=999,h}function bm(n){let e=Math.random().toString(36).slice(2,10),t=new Map,i=null,s=0,r=0,o="",a="";function l(){return t.size+1}function c(){n.onCount&&n.onCount(l())}function h(y){let b=t.get(y);b&&(b.car&&n.scene.remove(b.car),b.person&&n.scene.remove(b.person),b.tag&&b.tag.parent&&b.tag.parent.remove(b.tag),t.delete(y),c())}function f(y){let b=y.carId+"|"+y.lookSig;if(y.car&&y.carSig===b)return;y.car&&n.scene.remove(y.car);let S=n.CAR_DEFS.find(N=>N.id===y.carId)||n.CAR_DEFS[0],E=n.buildCar(S);y.look&&n.applyCarSkin(E,y.look.paint,y.look.carSkin),E.position.set(y.cx,0,y.cz),E.rotation.y=y.ch,n.scene.add(E),y.car=E,y.carSig=b}function p(y){y.person||(y.person=n.buildCharacter(y.look?y.look.outfit:{shirt:2845872,hat:"none"}),y.person.position.set(y.x,0,y.z),n.scene.add(y.person),y.outfitSig="");let b=y.look?JSON.stringify(y.look.outfit):"";y.look&&b!==y.outfitSig&&(n.setOutfit(y.person,y.look.outfit),y.outfitSig=b),n.setHeldWeapon(y.person,y.weapon||null)}function g(y){if(!y||!y.id||y.id===e)return;let b=t.get(y.id);if(!b){if(t.size>=vE)return;b={id:y.id,name:"",x:+y.x||0,z:+y.z||0,h:+y.h||0,cx:0,cz:0,ch:0,tx:0,tz:0,th:0,mode:"car",carId:"sport",look:null,lookSig:"",car:null,person:null,tag:null,tagName:"",phase:0,speed:0,b:-1,weapon:null,seen:0},t.set(y.id,b),c()}b.seen=performance.now(),b.mode=y.m==="foot"?"foot":"car",b.tx=+y.x||0,b.tz=+y.z||0,b.th=+y.h||0,b.carId=String(y.c||"sport"),b.b=Number.isInteger(y.b)?y.b:-1,b.weapon=y.w||null;let S=y.tm||null;if(S!==b.team&&(b.team=S,b.tagName=""),b.dead=y.hp===0,b.firing=!!y.f,b.mode==="foot"&&Number.isFinite(y.px)&&(b.cx=+y.px,b.cz=+y.pz,b.ch=+y.ph||0),y.L){let E=JSON.stringify(y.L);E!==b.lookSig&&(b.lookSig=E,b.look=n.unpackLook(y.L))}y.n&&(y.n!==b.tagName||!b.tag)&&(b.tag&&b.tag.parent&&b.tag.parent.remove(b.tag),b.tag=SE(y.n,b.team),b.tagName=y.n,b.name=y.n),b.placed||(b.x=b.tx,b.z=b.tz,b.h=b.th,b.mode==="car"&&(b.cx=b.tx,b.cz=b.tz,b.ch=b.th),b.placed=!0)}function x(y){if(!y||y.id===e||!Array.isArray(y.s))return;let b=t.get(y.id);if(b&&(b.recoil=.35),!(b&&n.localBuilding!==void 0&&b.b!==n.localBuilding()))for(let S of y.s.slice(0,3))Array.isArray(S)&&S.length===4&&n.remoteShot(+S[0],+S[1],+S[2],+S[3])}let m=null;function d(){for(let y of[...t.keys()])h(y)}function u(y){if(y===void 0&&(y=Em),!(y===m&&i)){if(v(),m=y,!y||!Du||!Uu){n.onStatus&&n.onStatus("off",1);return}i=Sm({url:Du,key:Uu,topic:y,onStatus:b=>{n.onStatus&&n.onStatus(b,l())}}),i.on("st",g),i.on("sh",x),i.on("bye",b=>{b&&b.id&&h(b.id)}),i.on("hit",b=>{b&&b.t===e&&n.onHit&&n.onHit(b,t.get(b.id))}),i.on("kill",b=>{b&&n.onKill&&n.onKill(b)}),i.connect()}}function v(){if(i){try{i.send("bye",{id:e})}catch{}i.close(),i=null}d(),o="",a=""}window.addEventListener("pagehide",()=>{try{i&&i.send("bye",{id:e})}catch{}});function _(y,b,S){if(S=S||performance.now(),i&&i.status==="on"&&b){let k=b.mode+(b.x|0)+","+(b.z|0)+","+(b.h*10|0)+b.b+(b.w||""),P=k!==o||Math.abs(b.speed)>.3;if(S-s>=(P?mE:gE)){s=S,o=k;let R={id:e,n:b.name,m:b.mode,x:+b.x.toFixed(2),z:+b.z.toFixed(2),h:+b.h.toFixed(3),c:b.car,b:b.b,w:b.w||null,tm:b.team||null,hp:b.dead?0:1};b.mode==="foot"&&(R.px=+b.px.toFixed(2),R.pz=+b.pz.toFixed(2),R.ph=+b.ph.toFixed(3));let A=JSON.stringify(b.look);(A!==a||S-r>xE)&&(R.L=b.look,r=S,a=A),i.send("st",R)}}let E=Math.min(1,y*yE),N=b?b.b:-1;for(let[k,P]of t){if(S-P.seen>_E){h(k);continue}let R=P.x,A=P.z;if(P.x+=(P.tx-P.x)*E,P.z+=(P.tz-P.z)*E,P.h+=ME(P.h,P.th)*E,P.speed=y>0?Math.hypot(P.x-R,P.z-A)/y:0,P.mode==="car"&&(P.cx=P.x,P.cz=P.z,P.ch=P.h),f(P),P.car.position.set(P.cx,0,P.cz),P.car.rotation.y=P.ch,P.car.visible=N===-1,P.mode==="foot"?(p(P),P.person.visible=P.b===N,P.person.position.x=P.x,P.person.position.z=P.z,P.person.rotation.y=P.h,P.phase+=P.speed*y*2.1,P.recoil=Math.max(0,(P.recoil||0)-y),P.dead?(P.person.rotation.x=-Math.PI/2+.05,P.person.position.y=.12):(P.person.rotation.x=0,n.animateCharacter(P.person,P.phase,P.speed,!!P.weapon&&P.recoil>0,y))):P.person&&(P.person.visible=!1),P.tag){let z=P.mode==="foot"?P.person:P.car;z&&P.tag.parent!==z&&(P.tag.parent&&P.tag.parent.remove(P.tag),z.add(P.tag),P.tag.position.set(0,P.mode==="foot"?2.35:2.3,0))}}}function w(y){!i||i.status!=="on"||!y||!y.length||i.send("sh",{id:e,s:y.map(b=>b.map(S=>+S.toFixed(2)))})}function U(y){for(let b of t.values())y(b)}function M(y,b){i&&i.status==="on"&&i.send(y,Object.assign({id:e},b))}return{connect:u,disconnect:v,update:_,sendShots:w,send:M,each:U,myId:e,get topic(){return m},get count(){return l()},get status(){return i?i.status:"off"}}}Dt();function EE(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgba(110,0,0,1)";let t=(s,r)=>s+Math.random()*(r-s);e.beginPath(),e.arc(64,64,40,0,Math.PI*2),e.fill();for(let s=0;s<14;s++){let r=t(0,Math.PI*2),o=t(20,50),a=t(6,18);e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,Math.PI*2),e.fill()}let i=new un(n);return i.colorSpace=vt,i}function wm(n){let e=new Kn(n,60,{color:10158080,opacity:.95,size:.35}),t=new Kn(n,24,{color:6946816,opacity:.55,size:.8}),i=EE(),s=[];for(let c=0;c<24;c++){let h=new ie(new st(1,1).rotateX(-Math.PI/2),new _e({map:i,transparent:!0,opacity:.92,roughness:.15,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));h.visible=!1,h.renderOrder=3,n.add(h),s.push({m:h,size:0,max:0,life:0})}let r=0;function o(c,h,f,p=0,g=0,x=1){let m=Math.round(6*x);for(let d=0;d<m;d++)e.emit(c+(Math.random()-.5)*.2,h+(Math.random()-.5)*.3,f+(Math.random()-.5)*.2,{vx:p*(1.5+Math.random()*3)+(Math.random()-.5)*2,vy:Math.random()*2.5-.5,vz:g*(1.5+Math.random()*3)+(Math.random()-.5)*2,life:.35+Math.random()*.3,size:.18,grow:.25});t.emit(c,h,f,{vx:p*1.2,vy:.3,vz:g*1.2,life:.4,size:.5,grow:.9})}function a(c,h,f=2.2){let p=s[r];r=(r+1)%s.length,p.m.position.set(c,.07+r*5e-4,h),p.m.rotation.y=Math.random()*Math.PI*2,p.size=.2,p.max=f,p.life=45,p.m.scale.set(.2,1,.2),p.m.material.opacity=.92,p.m.visible=!0}function l(c){e.update(c),t.update(c);for(let h of s)h.m.visible&&(h.life-=c,h.size<h.max&&(h.size=Math.min(h.max,h.size+c*.5),h.m.scale.set(h.size,1,h.size)),h.life<5&&(h.m.material.opacity=.92*Math.max(0,h.life/5)),h.life<=0&&(h.m.visible=!1))}return{hit:o,pool:a,update:l}}var Wr=74,_i=5,Ot=28,Wl=Ot*8,bE=1.5,Xo=5.2,Xr=(n,e)=>n+Math.random()*(e-n),qs=n=>n[Math.random()*n.length|0];function Vl(){return{shirt:qs(ls),pants:qs([2963272,1981066,1120295,7041664,9067034,13358561]),skin:qs(Ll),hair:qs(Il.slice(0,6)),hat:Math.random()<.25?qs(["cap","beanie","cowboy"]):"none",hatColor:qs(ls),hairLong:Math.random()<.4}}function Nu(n,e,t,i){t=(t%Wl+Wl)%Wl;let s=Math.floor(t/(Ot*2)),r=t-s*Ot*2-Ot;return s===0?(i.x=n+r,i.z=e-Ot,i.h=-Math.PI/2):s===1?(i.x=n+Ot,i.z=e+r,i.h=Math.PI):s===2?(i.x=n-r,i.z=e+Ot,i.h=Math.PI/2):(i.x=n-Ot,i.z=e-r,i.h=0),i}function Tm(n){let e=[],t=[],i=[],s={x:0,z:0,h:0},r=n.count||16;function o(M,y){let b=[];for(let S=0;S<_i;S++)for(let E=0;E<_i;E++){let N=(S-(_i-1)/2)*Wr,k=(E-(_i-1)/2)*Wr;Math.hypot(N-M,k-y)<170&&!(S===0&&E===0)&&b.push({cx:N,cz:k})}return b}function a(M,y,b){let S=o(y,b),E=S.length?qs(S):{cx:0,cz:0};M.cx=E.cx,M.cz=E.cz,M.p=Xr(0,Wl),M.dir=Math.random()<.5?1:-1,M.state="walk",M.hp=40,M.flee=0,M.phase=Xr(0,6),M.deadT=0,hi(M.person,Vl()),M.person.rotation.set(0,0,0),M.person.visible=!0,Nu(M.cx,M.cz,M.p,s),M.x=s.x,M.z=s.z,M.h=s.h}function l(){let M=kr(Vl());n.scene.add(M);let y={person:M,x:0,z:0,h:0,cx:0,cz:0,p:0,dir:1,state:"walk",hp:40,flee:0,phase:0,deadT:0,kind:"ped"};return e.push(y),y}function c(M,y=0,b=0,S="shot"){if(M.state==="dead")return;M.state="dead",M.deadT=0,M.hp=0;let E=Math.atan2(y,b);M.person.rotation.set(0,E+Math.PI,0),M.fallDir={x:y,z:b},n.blood.hit(M.x,1,M.z,y,b,S==="car"?2.5:1.5),n.blood.pool(M.x+y*.9,M.z+b*.9,Xr(1.8,2.8)),M.kind==="enemy"&&M.onDeath&&M.onDeath(M),f(M.x,M.z,35)}function h(M,y,b,S){return M.state==="dead"?!1:(M.hp-=y,n.blood.hit(M.x,1.25,M.z,b,S,.8),M.hp<=0?(c(M,b,S),!0):(M.kind==="ped"&&(M.state="flee",M.flee=7),M.kind==="enemy"&&(M.aggro=!0),!1))}function f(M,y,b){for(let S of e){if(S.state==="dead")continue;let E=Math.hypot(S.x-M,S.z-y);if(E<b){S.state="flee",S.flee=6+Math.random()*3,Nu(S.cx,S.cz,S.p+1,s);let N=Math.hypot(s.x-M,s.z-y);S.dir=N>E?1:-1}}}function p(M){let y=kr(M.outfit||Vl());hi(y,M.outfit||Vl()),Go(y,M.weapon||"pistol"),n.scene.add(y);let b=Object.assign({kind:"enemy",person:y,x:M.x,z:M.z,h:0,hp:M.hp||60,maxHp:M.hp||60,state:"idle",aggro:!1,cool:Xr(.5,1.5),phase:0,deadT:0,strafe:Math.random()<.5?1:-1,accuracy:.45,dmg:8,rate:.9,range:45},M);return b.person.position.set(b.x,0,b.z),t.push(b),b}function g(){for(let M of t)n.scene.remove(M.person);t.length=0}function x(M,y,b){if(M.state==="dead"){M.deadT+=y,m(M,y);return}let S=b.x-M.x,E=b.z-M.z,N=Math.hypot(S,E);(N<M.range||M.aggro)&&(M.aggro=!0);let k=0;if(M.aggro&&b.alive&&!b.hidden){M.h=Math.atan2(-S,-E);let P=M.boss?9:13,R=0,A=0;N>P+3?(R=S/N,A=E/N):N<P-3&&(R=-S/N,A=-E/N),R+=-E/N*M.strafe*.6,A+=S/N*M.strafe*.6;let z=Math.hypot(R,A)||1;k=M.boss?4.2:3;let O=n.collide(M.x+R/z*k*y,M.z+A/z*k*y,.45);if(Math.abs(O.x-M.x)<1e-4&&Math.abs(O.z-M.z)<1e-4&&(M.strafe*=-1),M.x=O.x,M.z=O.z,Math.random()<y*.4&&(M.strafe*=-1),M.cool-=y,M.cool<=0&&N<M.range*1.2){M.cool=M.rate*Xr(.8,1.3);let V=Math.max(.08,M.accuracy*(1-N/(M.range*1.6))*(b.inCar?.7:1)),W=Math.random()<V,L=M.x-Math.sin(M.h)*.9,G=M.z-Math.cos(M.h)*.9,Z=W?0:Xr(1.2,3)*(Math.random()<.5?-1:1),I=b.x+-E/N*Z,X=b.z+S/N*Z;n.shoot(L,G,I+(I-L)/N*(W?0:12),X+(X-G)/N*(W?0:12)),Bl(M.person),n.audio&&n.audio.shot&&n.audio.shot(M.weapon==="glock"?"pistol":M.weapon),W&&n.onPlayerHit(M.dmg,M)}}M.phase+=k*y*2.1,M.person.position.set(M.x,0,M.z),M.person.rotation.y=M.h,hs(M.person,M.phase,k,M.aggro,y)}function m(M,y){let b=Math.min(1,M.deadT/.35);if(M.person.rotation.x=-b*(Math.PI/2-.05),M.person.position.y=.12*b,M.deadT>.4){let S=M.person.userData;S.legs[0].rotation.x=.1,S.legs[1].rotation.x=-.15,S.arms[0].rotation.z=.9,S.arms[1].rotation.z=-.9}}function d(M,y){for(;e.length<r;)a(l(),y.x,y.z);for(let b of e){let S=Math.hypot(b.x-y.x,b.z-y.z)>190;if(b.state==="dead"){b.deadT+=M,m(b,M),(b.deadT>30||S&&b.deadT>3)&&a(b,y.x,y.z);continue}if(S){a(b,y.x,y.z);continue}if(b.state==="escape"){b.flee-=M;let N=n.collide(b.x+b.ex*Xo*M,b.z+b.ez*Xo*M,.4);b.x=N.x,b.z=N.z,b.phase+=Xo*M*2.1,b.person.position.set(b.x,0,b.z),hs(b.person,b.phase,Xo,!1,M),b.flee<=0&&_(b);continue}let E=bE;b.state==="flee"&&(b.flee-=M,E=Xo,b.flee<=0&&(b.state="walk")),b.p+=b.dir*E*M,Nu(b.cx,b.cz,b.p,s),b.x=s.x,b.z=s.z,b.h=s.h+(b.dir<0?Math.PI:0),b.phase+=E*M*2.1,b.person.position.set(b.x,0,b.z),b.person.rotation.y=b.h,hs(b.person,b.phase,E,!1,M)}for(let b of t)x(b,M,y);i.length=0;for(let b of e)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.42,ref:b});for(let b of t)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.45,ref:b})}function u(M,y,b,S){if(Math.abs(S)<5)return 0;let E=-Math.sin(b),N=-Math.cos(b),k=0;for(let P of[e,t])for(let R of P)if(R.state!=="dead"&&(Math.hypot(R.x-M-E*1.2,R.z-y-N*1.2)<1.6||Math.hypot(R.x-M,R.z-y)<1.3)){let A=Math.sign(S);R.kind==="enemy"&&(R.hp=0),c(R,E*A,N*A,"car"),k++}return k}function v(M,y,b,S){let E=null,N=-1;for(let A of e){let z=Math.hypot(A.x-b,A.z-S);A.state!=="dead"&&z>N&&(N=z,E=A)}if(!E)return;let k=M-b,P=y-S,R=Math.hypot(k,P)||1;Object.assign(E,{state:"escape",x:M,z:y,ex:k/R,ez:P/R,flee:3.5,hp:40}),E.person.rotation.set(0,Math.atan2(-k,-P),0),E.person.position.set(M,0,y)}function _(M){let y=Math.max(0,Math.min(_i-1,Math.round(M.x/Wr+(_i-1)/2))),b=Math.max(0,Math.min(_i-1,Math.round(M.z/Wr+(_i-1)/2)));M.cx=(y-(_i-1)/2)*Wr,M.cz=(b-(_i-1)/2)*Wr;let S=Math.max(-Ot,Math.min(Ot,M.x-M.cx)),E=Math.max(-Ot,Math.min(Ot,M.z-M.cz)),N=Math.abs(E+Ot),k=Math.abs(S-Ot),P=Math.abs(E-Ot),R=Math.abs(S+Ot),A=Math.min(N,k,P,R);M.p=A===N?S+Ot:A===k?Ot*2+E+Ot:A===P?Ot*4+(Ot-S):Ot*6+(Ot-E),M.state="flee",M.flee=4}function w(M){for(r=M;e.length>M;){let y=e.pop();n.scene.remove(y.person)}}function U(M){for(let y of e)y.person.visible=M;for(let y of t)y.person.visible=M}return{update:d,damage:h,scare:f,spawnEnemy:p,clearEnemies:g,carHits:u,setCount:w,setVisible:U,eject:v,get hitList(){return i},get enemies(){return t},get peds(){return e}}}Dt();var wE=14,Zs=3.5,Xl=wE/2+2.2,zu=16;function TE(n,e){let t=(e%zu+zu)%zu;return n==="z"?t<6?"green":t<8?"yellow":"red":t<8?"red":t<14?"green":"yellow"}var AE=(n,e)=>(n+e)%2*4;function ql(n,e,t,i){return n==="z"?{x:e+(t<0?Zs:-Zs),z:i,h:t<0?0:Math.PI}:{x:i,z:e+(t>0?Zs:-Zs),h:t>0?-Math.PI/2:Math.PI/2}}var Ys=new ut,qo=new In,qr=new H,Ou=new H(1,1,1),Am=new H(0,1,0),Yl=new Ne(1710618),RE=new Ne(16722458),CE=new Ne(16756768),PE=new Ne(2883434);function Rm(n){let e=n.lines.slice().sort((L,G)=>L-G),t=e.length,i=0,s=[];for(let L=0;L<t;L++)for(let G=0;G<t;G++){let Z=e[L],I=e[G],X=Xl-.6;s.push({ix:L,iz:G,axis:"z",x:Z+X,z:I+X,rot:0}),s.push({ix:L,iz:G,axis:"z",x:Z-X,z:I-X,rot:Math.PI}),s.push({ix:L,iz:G,axis:"x",x:Z-X,z:I+X,rot:-Math.PI/2}),s.push({ix:L,iz:G,axis:"x",x:Z+X,z:I-X,rot:Math.PI/2})}let r=s.length,o=new Mt(.09,.11,4.2,6).translate(0,2.1,0),a=new _e({color:3093563,metalness:.6,roughness:.5}),l=new Ie(.45,1.25,.32).translate(0,4.6,0),c=new _e({color:1909030,roughness:.6,metalness:.3}),h=new Nr(.15,12),f=new It(o,a,r),p=new It(l,c,r),g=new lt({color:16777215,toneMapped:!1}),x=[0,1,2].map(()=>new It(h,g,r));p.castShadow=!0,s.forEach((L,G)=>{qo.setFromAxisAngle(Am,L.rot),qr.set(L.x,0,L.z),Ys.compose(qr,qo,Ou),f.setMatrixAt(G,Ys),p.setMatrixAt(G,Ys);let Z=Math.sin(L.rot),I=Math.cos(L.rot);for(let X=0;X<3;X++)qr.set(L.x+Z*.17,5-X*.38,L.z+I*.17),Ys.compose(qr,qo,Ou),x[X].setMatrixAt(G,Ys),x[X].setColorAt(G,Yl)});for(let L of[f,p,...x])L.instanceMatrix.needsUpdate=!0,n.scene.add(L);{let L=new st(Zs*2-.6,.45).rotateX(-Math.PI/2),G=new It(L,new _e({color:15922422,roughness:.7}),r);s.forEach((Z,I)=>{let X=e[Z.ix],K=e[Z.iz],le,xe,we;if(Z.axis==="z"){let Ae=Z.rot===0?1:-1;le=X+Ae*Zs,xe=K+Ae*Xl,we=0}else{let Ae=Z.rot<0?-1:1;le=X+Ae*Xl,xe=K-Ae*Zs,we=Math.PI/2}qo.setFromAxisAngle(Am,we),qr.set(le,.065,xe),Ys.compose(qr,qo,Ou),G.setMatrixAt(I,Ys)}),G.instanceMatrix.needsUpdate=!0,n.scene.add(G)}let m=new Array(r).fill("");function d(L,G,Z){return TE(Z,i+AE(L,G))}function u(){let L=!1;for(let G=0;G<r;G++){let Z=s[G],I=d(Z.ix,Z.iz,Z.axis);I!==m[G]&&(m[G]=I,L=!0,x[0].setColorAt(G,I==="red"?RE:Yl),x[1].setColorAt(G,I==="yellow"?CE:Yl),x[2].setColorAt(G,I==="green"?PE:Yl))}if(L)for(let G of x)G.instanceColor.needsUpdate=!0}let v=[],_=12,w=L=>{let G=0,Z=1/0;for(let I=0;I<t;I++){let X=Math.abs(e[I]-L);X<Z&&(Z=X,G=I)}return G},U=[16109749,15250575,13011554,11037509,8014380];function M(L){let G=L.userData.profile,Z=new rt,I=new _e({color:Math.random()*16777215|0,roughness:.8}),X=new _e({color:U[Math.random()*U.length|0],roughness:.7}),K=new ie(new Ie(.42,.5,.28),I);K.position.y=.25;let le=new ie(new Vt(.13,10,8),X);le.position.y=.62,Z.add(K,le);let xe=G?G.glass:[[.5,.8]],we=Math.min(...xe.map(Ee=>Ee[1]))-.15,Ae=xe.reduce((Ee,Oe)=>Ee+Oe[0],0)/xe.length;Z.position.set(-.38,we,-Ae+.25),L.add(Z),L.userData.driver=Z,L.userData.driverHead=le}function y(){let L=n.CAR_DEFS.filter(X=>X.id!=="hyper"||Math.random()<.3),G=L[Math.random()*L.length|0],Z=n.buildCar(G),I=G.colors[Math.random()*G.colors.length|0];return n.applyCarSkin(Z,I,null),M(Z),n.scene.add(Z),{group:Z,def:G,color:I,axis:"z",li:0,dir:1,s:0,speed:0,cruise:0,x:0,z:0,h:0,honk:0,wait:0,driverHp:30,panic:0,empty:!1}}function b(L,G,Z,I){for(let xe=0;xe<20;xe++){L.axis=Math.random()<.5?"z":"x",L.li=Math.random()*t|0,L.dir=Math.random()<.5?1:-1,L.s=e[0]+Math.random()*(e[t-1]-e[0]);let we=ql(L.axis,e[L.li],L.dir,L.s),Ae=Math.hypot(we.x-G,we.z-Z);if(I?Ae<150:Ae>70&&Ae<170){L.x=we.x,L.z=we.z,L.h=we.h;break}}let X=ql(L.axis,e[L.li],L.dir,L.s);L.x=X.x,L.z=X.z,L.h=X.h,L.cruise=9+Math.random()*5,L.speed=L.cruise*.6,L.driverHp=30,L.panic=0,L.empty=!1;let K=L.group.userData.driver;K&&(K.visible=!0,K.rotation.set(0,0,0));let le=L.group.userData.driverHead;le&&le.material.color.setHex(U[Math.random()*U.length|0]),L.group.position.set(L.x,0,L.z),L.group.rotation.y=L.h}function S(L){if(L.dir>0){for(let G=0;G<t;G++)if(e[G]>L.s+.3)return G}else for(let G=t-1;G>=0;G--)if(e[G]<L.s-.3)return G;return-1}function E(L,G){let Z=Math.random(),I=L.dir>0&&G===t-1||L.dir<0&&G===0,X=Z<.55&&!I?"straight":Z<.82?"right":"left",K,le;if(X==="straight")return;L.axis==="z"?(K="x",le=L.dir<0==(X==="right")?1:-1):(K="z",le=L.dir>0==(X==="right")?1:-1);let xe=e[L.li],we=G;(le>0&&xe>=e[t-1]-1||le<0&&xe<=e[0]+1)&&(le=-le),L.axis=K,L.li=we,L.dir=le,L.s=xe}function N(L,G,Z){for(i+=L,u();v.length<_;){let I=y();b(I,G.x,G.z,v.length<4),v.push(I)}for(let I of v){if(Math.hypot(I.x-G.x,I.z-G.z)>230){b(I,G.x,G.z,!1);continue}if(I.empty&&I.respawnT!==void 0&&(I.respawnT-=L,I.respawnT<=0)){delete I.respawnT,b(I,G.x,G.z,!1);continue}if(I.empty){I.speed=Math.max(0,I.speed-6*L),I.s+=I.dir*I.speed*L;let B=ql(I.axis,e[I.li],I.dir,I.s);I.x+=(B.x-I.x)*Math.min(1,L*6),I.z+=(B.z-I.z)*Math.min(1,L*6),I.group.position.set(I.x,0,I.z);continue}I.panic>0&&(I.panic-=L);let X=I.panic>0?I.cruise*1.8:I.cruise,K=S(I);if(K>=0){let B=e[K],me=(B-I.s)*I.dir,te=me-Xl,ge=I.axis==="z"?I.li:K,ne=I.axis==="z"?K:I.li,Ue=d(ge,ne,I.axis);te>-.5&&(Ue==="red"||Ue==="yellow"&&te>5)&&(X=Math.min(X,Math.max(0,te-.3)*1.1)),me<=.05&&(I.s=B,E(I,K))}else I.dir=-I.dir;for(let B of v){if(B===I||B.axis!==I.axis||B.li!==I.li||B.dir!==I.dir)continue;let me=(B.s-I.s)*I.dir;me>0&&me<14&&(X=Math.min(X,Math.max(0,(me-6.5)*1.3)))}if(Z){let B=-Math.sin(I.h),me=-Math.cos(I.h),te=Z.x-I.x,ge=Z.z-I.z,ne=te*B+ge*me,Ue=Math.abs(te*me-ge*B);ne>0&&ne<13&&Ue<2.6?(X=Math.min(X,Math.max(0,(ne-5.5)*1.3)),I.wait+=L):I.wait=0}let le=X>I.speed?4:9;I.speed+=Math.sign(X-I.speed)*Math.min(Math.abs(X-I.speed),le*L),I.s+=I.dir*I.speed*L;let xe=ql(I.axis,e[I.li],I.dir,I.s),we=Math.min(1,L*6);I.x+=(xe.x-I.x)*we,I.z+=(xe.z-I.z)*we;let Ae=xe.h-I.h;Ae=Math.atan2(Math.sin(Ae),Math.cos(Ae)),I.h+=Ae*Math.min(1,L*5),I.group.position.set(I.x,0,I.z),I.group.rotation.y=I.h;let Ee=I.speed*L*2.6;for(let B of I.group.userData.wheels)B.rotation.x+=Ee;let Oe=I.group.userData.flashers;if(Oe){let B=(i*6|0)%2;Oe[0].emissiveIntensity=B?4:.25,Oe[1].emissiveIntensity=B?.25:4}}}function k(L,G){let Z=null;for(let I of v){let X=-Math.sin(I.h),K=-Math.cos(I.h);for(let le of[-1.3,0,1.3]){let xe=I.x+X*le,we=I.z+K*le,Ae=1+G,Ee=L.x-xe,Oe=L.z-we,B=Math.hypot(Ee,Oe);B<Ae&&B>1e-6&&(L.x=xe+Ee/B*Ae,L.z=we+Oe/B*Ae,Z=I)}}return Z&&(Z.speed*=.3),Z}let P=[];function R(){P.length=0;for(let L of v){let G=-Math.sin(L.h),Z=-Math.cos(L.h);P.push({x:L.x+G*.9,z:L.z+Z*.9,r:1,ref:{kind:"car",car:L}}),P.push({x:L.x-G*.9,z:L.z-Z*.9,r:1,ref:{kind:"car",car:L}})}return P}function A(L,G,Z,I){if(L.empty)return null;L.panic=6,L.driverHp-=G;let X=L.group.userData.driver,K=new H;return X&&X.getWorldPosition(K),L.driverHp<=0?(L.empty=!0,L.respawnT=40,X&&(X.rotation.z=.9,X.rotation.x=.3),L.group.userData.driverHead&&L.group.userData.driverHead.material.color.setHex(7995392),{kind:"killed",x:K.x,y:K.y+.6,z:K.z}):{kind:"hit",x:K.x,y:K.y+.6,z:K.z}}function z(L,G,Z){let I=null,X=Z;for(let K of v){let le=Math.hypot(K.x-L,K.z-G);le<X&&(X=le,I=K)}return I}function O(L){let G=v.indexOf(L);return G<0?null:(v.splice(G,1),n.scene.remove(L.group),{alive:!L.empty,x:L.x,z:L.z,h:L.h,def:L.def,color:L.color})}function V(L){for(_=L;v.length>L;){let G=v.pop();n.scene.remove(G.group)}}function W(L){for(let G of v)G.group.visible=L}return{update:N,collide:k,hitList:R,setCount:V,setVisible:W,stateAt:d,hitCar:A,nearestCar:z,remove:O,get cars(){return v}}}Dt();var Pn=500,Bu=5e6,Cm=74,Pm=5,Lm=3.5,Im=[-185,-111,-37,37,111,185],Zl={name:"EMERALD",outfit:{shirt:1023320,pants:1120295,skin:9263675,hair:1839885,hairLong:!0,hat:"none",hatColor:1023320},weapon:"glock",hp:900};function LE(n){let e=n*2654435761>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Yr(n){let e=n()<.5,t=Im[n()*Im.length|0],i=-175+n()*350,s=n()<.5?1:-1;return e?{x:t+s*Lm,z:i}:{x:i,z:t+s*Lm}}function Dm(n){let e=n()*Pm|0,t=n()*Pm|0,i=(e-2)*Cm,s=(t-2)*Cm,r=-24+n()*48,o=n()*4|0,a=28;return o===0?{x:i+r,z:s-a}:o===1?{x:i+a,z:s+r}:o===2?{x:i-r,z:s+a}:{x:i-a,z:s-r}}var us=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),Um=["Main St Kings","Exchange Crew","River Rats","Portage Posse","North End Wolves","Osborne Outlaws","St. Boniface Snakes","Pembina Pirates"],Nm=["a mystery briefcase","hot pizzas","a stolen painting","a box of cash","a burner phone","VIP documents","a suspicious duffel bag","concert tickets"];function Hu(n){if(n=Math.max(1,Math.min(Pn,n|0)),n===Pn)return{n,type:"boss",title:"EMERALD",reward:Bu,desc:"Emerald runs the whole city and she's sitting on millions. Fight through her guards at the compound and take her down. Everything she has is yours.",points:[{x:-148,z:-148}],guards:10,timeLimit:0};let e=LE(n*7919+13),t=n/Pn,s=["deliver","race","collect","hit"][(n+(e()*4|0))%4];n%50===0&&(s="hit");let r=Um[e()*Um.length|0];if(s==="deliver"){let l=Yr(e),c=Yr(e);for(let f=0;f<6&&us(l,c)<150;f++)c=Yr(e);let h=us(l,c);return{n,type:s,title:"Special Delivery",reward:600+n*30,desc:`Pick up ${Nm[e()*Nm.length|0]} and get it across town before the clock runs out.`,points:[l,c],timeLimit:Math.round(25+h/(11+t*6))}}if(s==="race"){let l=[],c=Yr(e);l.push(c);let h=4+Math.min(4,n/80|0),f=0;for(;l.length<h;){let p=Yr(e);for(let g=0;g<6&&us(p,c)<90;g++)p=Yr(e);f+=us(p,c),l.push(p),c=p}return{n,type:s,title:"Checkpoint Race",reward:800+n*35,desc:`Hit all ${h} checkpoints in order before time runs out.`,points:l,timeLimit:Math.round(20+f/(13+t*8))}}if(s==="collect"){let l=Dm(e),c=[],h=3+Math.min(5,n/70|0);for(let f=0;f<h;f++){let p=e()*Math.PI*2,g=20+e()*60;c.push({x:Math.max(-180,Math.min(180,l.x+Math.cos(p)*g)),z:Math.max(-180,Math.min(180,l.z+Math.sin(p)*g))})}return{n,type:s,title:"Cash Grab",reward:500+n*30,desc:`The ${r} dropped ${h} bags of cash around town. Grab them all before they come back.`,points:c,timeLimit:Math.round(60+h*18-t*30)}}let o=n%50===0,a=Math.min(9,1+(n/45|0)+(o?2:0));return{n,type:"hit",title:o?"Take Down the Boss":"Gang Hit",reward:(o?5e3:1e3)+n*45,desc:o?`The leader of the ${r} is holed up with his crew. End it.`:`${a} members of the ${r} are causing trouble. Take them out.`,points:[Dm(e)],enemies:a,leader:o,timeLimit:0,tier:t}}function Fu(n,e){let t=n/Pn;return{hp:Math.round((45+n*.35)*(e?4:1)),accuracy:Math.min(.62,.22+t*.4),dmg:Math.round(6+t*10),rate:Math.max(.35,1-t*.5),weapon:e?"deagle":["pistol","glock","smg","shotgun","ak"][Math.min(4,n/100|0)]}}function zm(n){let e=new lt({color:16765503,transparent:!0,opacity:.85,depthWrite:!1,side:wt}),t=new lt({color:16765503,transparent:!0,opacity:.2,depthWrite:!1,side:wt,blending:Gt}),i=new rt;i.add(new ie(new oi(.85,1,40).rotateX(-Math.PI/2).translate(0,.1,0),e)),i.add(new ie(new Mt(1,1,30,24,1,!0).translate(0,15,0),t)),i.visible=!1,n.scene.add(i);let s=new _e({color:4156202,roughness:.8,emissive:2772250,emissiveIntensity:.4}),r=[],o=null,a=0,l=0,c=0,h=[],f=null,p=!1,g=0,x=0;function m(){for(let y of r)n.scene.remove(y);r.length=0}function d(y,b){if(!y){i.visible=!1;return}i.visible=!0,i.position.set(y.x,0,y.z),i.scale.set(b,1,b)}function u(y){if(v(),o=Hu(y),a=0,l=0,c=o.timeLimit,p=!1,g=0,h=[],f=null,o.type==="deliver"||o.type==="race")d(o.points[0],o.type==="race"?7:6);else if(o.type==="collect"){d(null);for(let b of o.points){let S=new rt;S.add(new ie(new Vt(.45,10,8).scale(1,.8,1).translate(0,.4,0),s));let E=new ie(new st(.5,.5),new lt({color:4906624,transparent:!0,opacity:.9}));E.position.y=1.3,S.add(E),S.position.set(b.x,0,b.z),S.userData={p:b,got:!1,sign:E},n.scene.add(S),r.push(S)}}else d(o.points[0],o.type==="boss"?12:9);return o}function v(){o=null,d(null),m(),n.people.clearEnemies(),h=[],f=null}function _(){p=!0;let y=o.points[0];if(o.type==="boss"){let S=Fu(480,!1);for(let E=0;E<o.guards;E++){let N=E/o.guards*Math.PI*2;h.push(n.people.spawnEnemy(Object.assign({},S,{x:y.x+Math.cos(N)*14,z:y.z+Math.sin(N)*14,weapon:E%2?"ak":"smg",hp:160})))}f=n.people.spawnEnemy({x:y.x,z:y.z,outfit:Zl.outfit,weapon:Zl.weapon,hp:Zl.hp,accuracy:.55,dmg:11,rate:.32,range:60,boss:!0,name:Zl.name}),h.push(f),n.toast('\u{1F451} EMERALD: "You came all this way to die?"',3500);return}let b=Fu(o.n,!1);for(let S=0;S<o.enemies;S++){let E=S/o.enemies*Math.PI*2,N=o.leader&&S===0,k=N?Fu(o.n,!0):b;h.push(n.people.spawnEnemy(Object.assign({},k,{x:y.x+Math.cos(E)*6,z:y.z+Math.sin(E)*6,boss:N})))}}function w(y,b){if(!o)return null;x+=y,l+=y,e.opacity=.6+Math.sin(x*4)*.25,i.rotation.y+=y*.6;for(let E of r)E.rotation.y+=y*1.5,E.userData.sign.lookAt(b.cam||i.position);if(o.timeLimit&&(c=o.timeLimit-l,c<=0))return"fail";let S=b.pos;if(o.type==="deliver"){let E=o.points[a];if(us(S,E)<6.5)return a++,n.beep(880,.08),a>=o.points.length?"pass":(d(o.points[a],6),"next")}else if(o.type==="race"){let E=o.points[a];if(us(S,E)<7.5)return a++,n.beep(990,.06),a>=o.points.length?"pass":(d(o.points[a],7),"next")}else if(o.type==="collect"){for(let E of r)if(!E.userData.got&&us(S,E.userData.p)<2.6)return E.userData.got=!0,E.visible=!1,g++,n.beep(1200,.05),g>=r.length?"pass":"next"}else if(!p&&us(S,o.points[0])<75&&_(),p){if(d(null),o.type==="boss"){if(f&&f.state==="dead")return"pass"}else if(h.every(E=>E.state==="dead"))return"pass"}return null}function U(){if(!o)return"";if(o.type==="deliver")return a===0?"Pick up the package":"Deliver the package";if(o.type==="race")return`Checkpoint ${a+1}/${o.points.length}`;if(o.type==="collect")return`Cash bags ${g}/${r.length}`;if(!p)return o.type==="boss"?"Go to Emerald's compound":"Go to the gang hangout";let y=h.filter(b=>b.state!=="dead").length;return o.type==="boss"?f.state==="dead"?"Emerald is down":`Kill Emerald (${y-(f.state==="dead"?0:1)} guards left)`:`Enemies left: ${y}`}function M(y){if(y=y||{x:0,z:0},!o)return null;if(o.type==="deliver"||o.type==="race")return o.points[a]||null;if(o.type==="collect"){let S=null,E=1/0;for(let N of r){if(N.userData.got)continue;let k=Math.hypot(N.position.x-y.x,N.position.z-y.z);k<E&&(E=k,S=N.userData.p)}return S}if(!p)return o.points[0];let b=h.find(S=>S.state!=="dead"&&(o.type!=="boss"||S===f))||h.find(S=>S.state!=="dead");return b?{x:b.x,z:b.z}:null}return{start:u,stop:v,update:w,objective:U,target:M,get mission(){return o},get active(){return!!o},get timeLeft(){return o&&o.timeLimit?Math.max(0,c):null},get boss(){return f}}}var{CAR_DEFS:yi,buildCar:ic,effectiveStats:c0,applyCarSkin:Ko}=mu,Q=n=>document.getElementById(n),dn,At,Ft,Tt,yn=null,Nn=null,eo=null,re=null,xt=null,Ce=null,jn=null,h0=null,Ut=null,Te=null,Zt="boot",Sn=!1,Vn=!1,uc="menu",pt={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},ms=null,ot=null,id=null,gc=null,gs=!1,sc="menu",Zo=.6,Rt=null,to=!1,xs=null,Ln=null,On=null,Ju=null,_s=100,ui=!1,Ku=0,rc=0,fs={x:0,z:0,alive:!0,hidden:!1,inCar:!0},Bt=null,sd=!1,ec=0,zE={sport:{cyl:6,red:7200},muscle:{cyl:8,red:6200,idle:750},super:{cyl:10,red:8500},suv:{cyl:6,red:6e3},truck:{cyl:8,red:5600,idle:700},track:{cyl:4,red:8800,idle:1100},sedan:{cyl:4,red:6500},taxi:{cyl:4,red:6200},van:{cyl:6,red:5500,idle:700},police:{cyl:8,red:6600,idle:800},hyper:{cyl:12,red:9e3,idle:1e3}};function u0(){re&&re.box&&(re.box.mode=Te.manual?"manual":"auto");let n=Te.manual?"\u2699\uFE0F GEARBOX: MANUAL":"\u2699\uFE0F GEARBOX: AUTO";for(let t of["m-trans","p-trans"]){let i=Q(t);i&&(i.textContent=n)}let e=Q("gear-btns");e&&e.classList.toggle("hidden",!Te.manual)}var Mi=null,$m=null,d0=new Map,qu=new H,xc=Fo(),Wn=null,Ei=null,f0=null,Qr=0,Ks=null,ea=null,dc=null,fi=null,oc=null,Qu=0,ju=1,zn=null,ct=!1,ve=null,et=null,Qo=null,vs=null,rd=null,ac=null,Qs=!1,vi=0,jo=0,$s=null,ps=null,Jm="",cn={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},tc={x:0,z:0},Xt=new H,Un=new H,Mn=new H,jr={x:0,z:0},$o={x:0,z:0,hitX:!1,hitZ:!1},Wt={name:"",mode:"car",x:0,z:0,h:0,speed:0,car:"sport",look:null,px:0,pz:0,ph:0,b:-1,w:null},di=null,nc={def:null,stats:null,group:null},js=[],ed=[],td=[],bi=62,lc=0,Km=0;function _t(n,e=2200){let t=Q("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(Km),Km=setTimeout(()=>t.classList.add("hidden"),e)}function Vi(){let n=Te.cash.toLocaleString();Q("cash-val").textContent=n,Q("garage-cash").textContent=n}function ys(n){Te.cash=Math.max(0,Te.cash+Math.round(n)),an(Te),Vi()}function od(){Nn=Mi?Mi.def:yi.find(n=>n.id===Te.currentCar)||yi[0],yn&&At.remove(yn),yn=ic(Nn),Mi?Ko(yn,Mi.color,null):Ko(yn,Te.paint[Nn.id],Gs(Te,Nn.id)),At.add(yn),di=null,eo=c0(Nn,Mi?{}:Te.upgrades[Nn.id]||{}),Ce&&Ce.setEngine&&Ce.setEngine(zE[Nn.id]||{cyl:6}),js=(yn.userData.wheels||[]).slice(),ed=js.filter(n=>n.position.z<0),td=yn.userData.brakeMats||[],Q("menu-car-name").textContent=Nn.name}function ta(){let n=re.heading;Mn.set(-Math.sin(n),0,-Math.cos(n)),Xt.set(re.pos.x-Mn.x*9,4,re.pos.z-Mn.z*9),Ft.position.copy(Xt)}function ad(){let n=Tt.spawn;re.pos.x=n.x,re.pos.z=n.z,re.heading=n.heading||0,xc=Fo(),ta(),no(0)}function Js(){let n=re.pos.x,e=re.pos.z,t=re.heading;od(),re.reset(eo),re.pos.x=n,re.pos.z=e,re.heading=t,no(0)}var Si=new H;function no(n){yn.position.set(re.pos.x,0,re.pos.z),yn.rotation.y=re.heading;let e=yn.userData.flashers;if(e){let s=(performance.now()/170|0)%2;e[0].emissiveIntensity=s?4:.25,e[1].emissiveIntensity=s?.25:4}let t=pt.speed*n*2.4;for(let s=0;s<js.length;s++)js[s].rotation.x+=t;for(let s=0;s<ed.length;s++)ed[s].rotation.y=pt.steer*.45;let i=xt&&xt.input.throttle<0;if(yn.userData.setBrake)yn.userData.setBrake(i);else for(let s=0;s<td.length;s++)td[s].emissiveIntensity=i?4.5:1.8;if(fi){let s=re.heading;Si.set(-Math.sin(s),0,-Math.cos(s)),fi.position.set(re.pos.x+Si.x*1.8,1.1,re.pos.z+Si.z*1.8),oc.position.set(re.pos.x+Si.x*22,.4,re.pos.z+Si.z*22)}}var Jo=new H;function OE(n,e){let t=js[n];return e.setFromMatrixPosition(t.matrixWorld),e}var Yu=0;function FE(n){if(!Ks||Zt!=="freeroam"||Sn||Vn)return;yn.updateMatrixWorld();let e=js.length;if(pt.drifting&&ju>.3)for(let i=0;i<e;i++)js[i].position.z<0||(OE(i,Jo),Math.random()<.85*ju&&Ks.emit(Jo.x+(Math.random()-.5)*.4,.35,Jo.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&dc.add(Jo.x,Jo.z,re.heading));if(Yu+=n,(xt&&xt.input.throttle||0)>.4&&Yu>.09){Yu=0;let i=re.heading;Si.set(-Math.sin(i),0,-Math.cos(i));let s=Math.cos(i),r=-Math.sin(i);for(let o of[-.45,.45]){let a=re.pos.x-Si.x*2.2+s*o,l=re.pos.z-Si.z*2.2+r*o;ea.emit(a,.32,l,{vx:-Si.x*2,vy:.8,vz:-Si.z*2,life:.5,size:.55,grow:1.6})}}Ks.update(n),ea.update(n)}function BE(n,e){let t=ld(n,e,1.15);if(On&&!ot&&On.collide(t,1.15)&&re){let s=Math.hypot(re.vel.x,re.vel.z);re.vel.x*=.55,re.vel.z*=.55,s>8&&Ce&&Ce.beep(90,.08)}return t}function ld(n,e,t){let i=n,s=e,r=!1,o=!1,a=id||Tt.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(i+t<c.minX||i-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(i,c.maxX)),f=Math.max(c.minZ,Math.min(s,c.maxZ)),p=i-h,g=s-f,x=p*p+g*g;if(!(x>=t*t))if(x>1e-8){let m=Math.sqrt(x),d=(t-m)/m,u=p*d,v=g*d;i+=u,s+=v,Math.abs(u)>Math.abs(v)?r=!0:o=!0}else{let m=i-c.minX,d=c.maxX-i,u=s-c.minZ,v=c.maxZ-s,_=Math.min(m,d,u,v);_===m?(i=c.minX-t,r=!0):_===d?(i=c.maxX+t,r=!0):_===u?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return $o.x=i,$o.z=s,$o.hitX=r,$o.hitZ=o,$o}function cd(n,e,t){let i=ld(n,e,t);if(ot)return i;On&&On.collide(i,t);let s=re.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=re.pos.x+r*a,c=re.pos.z+o*a,h=1+t,f=i.x-l,p=i.z-c,g=Math.hypot(f,p);g<h&&g>1e-6&&(i.x=l+f/g*h,i.z=c+p/g*h)}return i}function Wi(){if(!et)return;hi(et,v0()),Go(et,fn().equipped);let n=fn().equipped&&Gi(fn().equipped);Q("weapon-name").textContent=n?n.name.toUpperCase():"UNARMED";let e=Q("weapon-ammo");e.textContent=n?String(fn().ammo[n.id]|0):fn().weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!n)}function hd(){for(let n of["speedo","gear-hud","nitro-bar"])Q(n).classList.toggle("hidden",ct);Q("weapon-hud").classList.toggle("hidden",!ct)}function ud(){if(Math.abs(pt.speed)>4){_t("Slow down to get out");return}let n=Ru(re.pos.x,re.pos.z,re.heading),e=cd(n.x,n.z,.45);ve.reset(e.x,e.z,re.heading),re.vel.x=0,re.vel.z=0,re.speed=0,pt.speed=0,pt.drifting=!1,pt.nitro=!1,pt.steer=0,xc=Fo(),ct=!0,et.visible=!0,et.position.set(ve.pos.x,0,ve.pos.z),Wi(),xt.setMode("foot"),hd(),Ce.engine(0,0),Ce.skid(!1),Ce.beep(420,.06)}function dd(){ct&&(ct=!1,et.visible=!1,vi=0,xt&&xt.setMode("drive"),hd(),xc=Fo(),Ce&&Ce.beep(520,.06),jo&&(an(Te),jo=0))}function HE(n){let e=ve.heading,t=ve.pos.x,i=ve.pos.z;Mn.set(-Math.sin(e),0,-Math.cos(e));let s=vi>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;if(Un.set(t-Mn.x*r+a*c,o,i-Mn.z*r+l*c),ot){let f=ot.room.bounds,p=.45;Un.x=Math.max(f.minX+p,Math.min(f.maxX-p,Un.x)),Un.z=Math.max(f.minZ+p,Math.min(f.maxZ-p,Un.z)),Un.y=Math.min(Un.y,3.9)}let h=1-Math.exp(-n*7);Xt.x+=(Un.x-Xt.x)*h,Xt.y+=(Un.y-Xt.y)*h,Xt.z+=(Un.z-Xt.z)*h,Ft.position.copy(Xt),Ft.lookAt(t+Mn.x*5+a*c,1.45,i+Mn.z*5+l*c),Math.abs(60-bi)>.25&&(bi+=(60-bi)*Math.min(1,n*4),Ft.fov=bi,Ft.updateProjectionMatrix())}function kE(n){let e=Q("crosshair");if(!(xt.input.aim&&!!fn().equipped&&!ui)){$m=null,cn.lock=null,e.classList.add("hidden");return}let i=Gi(fn().equipped),s=i?i.range:60,r=null,o=1/0,a=(l,c)=>{let h=l.x-ve.pos.x,f=l.z-ve.pos.z,p=Math.hypot(h,f);if(p>s||p<.8)return;let g=Math.atan2(-h,-f),x=Math.abs(Math.atan2(Math.sin(g-ve.heading),Math.cos(g-ve.heading)));if(x>.75)return;let m=x*2+p/80-c;m<o&&(o=m,r=l)};for(let l of Ln.hitList)a(l,l.ref.kind==="enemy"?.6:0);for(let l of fc)a(l,.5);if(!ot)for(let l of Ju)l.ref.car.empty||a(l,-.1);if($m=r,e.classList.remove("hidden"),r){let l=Math.atan2(-(r.x-ve.pos.x),-(r.z-ve.pos.z));ve.heading+=Math.atan2(Math.sin(l-ve.heading),Math.cos(l-ve.heading))*Math.min(1,n*12),cn.lock={x:r.x,z:r.z},qu.set(r.x,1.3,r.z).project(Ft),e.style.left=((qu.x+1)/2*100).toFixed(2)+"%",e.style.top=((1-qu.y)/2*100).toFixed(2)+"%",e.classList.add("lock")}else cn.lock=null,e.style.left="50%",e.style.top="45%",e.classList.remove("lock");vi=Math.max(vi,.25)}function GE(n){if(ve.update(xt.input,n,cd),et.position.x=ve.pos.x,et.position.z=ve.pos.z,et.rotation.y=ve.heading,xt.consumeCycle()){let i=Au(fn());an(Te),Wi(),fn().weapons.length?_t(i?Gi(i).name:"Holstered",1200):_t("No guns yet \u2014 visit LOCK & LOAD",1600)}kE(n),cn.pos.x=ve.pos.x,cn.pos.z=ve.pos.z,cn.heading=ve.heading;let e=xt.consumeFireEdge();e&&!fn().equipped&&fn().weapons.length&&(Au(fn()),Wi()),Qo.update(n,cn,xt.input.fire,e).fired&&(Ln&&!ot&&Ln.scare(ve.pos.x,ve.pos.z,45),Bl(et),vi=.9,jo++,Q("weapon-ammo").textContent=String(fn().ammo[fn().equipped]|0)),xt.input.fire&&fn().equipped&&(vi=Math.max(vi,.3)),vi=Math.max(0,vi-n),hs(et,ve.phase,ve.speed,vi>0&&!!fn().equipped,n),HE(n),jo&&lc%120===0&&(an(Te),jo=0)}function ln(n,e,t){if($s=n,ps=e,t!==Jm){Jm=t;let i=Q("btn-action");i.textContent=t||"",i.classList.toggle("hidden",!t)}}function VE(n,e){let t=null,i=1.5;for(let s of Tt.buildings){if(Hr(n,e,s.door.x+s.door.nx*.5,s.door.z+s.door.nz*.5)<2.2)return s;let o=Math.max(s.minX,Math.min(n,s.maxX)),a=Math.max(s.minZ,Math.min(e,s.maxZ)),l=Math.hypot(n-o,e-a);l<i&&(i=l,t=s)}return t}function fd(){let n=ve.heading;if(Mn.set(-Math.sin(n),0,-Math.cos(n)),Xt.set(ve.pos.x-Mn.x*4.6,2.6,ve.pos.z-Mn.z*4.6),ot){let e=ot.room.bounds,t=.45;Xt.x=Math.max(e.minX+t,Math.min(e.maxX-t,Xt.x)),Xt.z=Math.max(e.minZ+t,Math.min(e.maxZ-t,Xt.z))}Ft.position.copy(Xt)}function p0(n){let e=On.remove(n);e&&(e.alive&&(Ln.eject(e.x-Math.cos(e.h)*1.8,e.z+Math.sin(e.h)*1.8,ve.pos.x,ve.pos.z),Ln.scare(e.x,e.z,25)),Mi={def:e.def,color:e.color},od(),re.reset(eo),re.pos.x=e.x,re.pos.z=e.z,re.heading=e.h,no(0),di=null,dd(),ta(),Ce.beep(300,.08),_t("\u{1F697} Stolen: "+e.def.name+(e.alive?" \u2014 the driver ran off":""),2400))}function m0(n){let e=ms.get(vm(n.id)),t=Hr(ve.pos.x,ve.pos.z,n.door.x,n.door.z)<2.6,i,s,r,o;if(t)r=n.door.nx,o=n.door.nz,i=n.door.x+r*1.4,s=n.door.z+o*1.4;else{let l=Math.max(n.minX,Math.min(ve.pos.x,n.maxX)),c=Math.max(n.minZ,Math.min(ve.pos.z,n.maxZ)),h=ve.pos.x-l,f=ve.pos.z-c,p=Math.hypot(h,f)||1;r=h/p,o=f/p,i=l+r*1.4,s=c+o*1.4}ot={b:n,room:e,back:{x:i,z:s,heading:Math.atan2(-r,-o)}};let a=d0.get(n.id);if(a===void 0||performance.now()-a>480*1e3){let l=1+Math.floor(Math.random()*3),c=ms.lootSpots(e,l+1),h=c.slice(0,l).map(f=>({x:f.x,z:f.z,kind:"cash",amount:50+Math.floor(Math.random()*450)}));Math.random()<.12&&c[l]&&h.push({x:c[l].x,z:c[l].z,kind:"safe",amount:2e3+Math.floor(Math.random()*3e3)}),ms.spawnLoot(e,h)}else ms.clearLoot();id=e.colliders,cn.colliders=e.colliders,cn.targets=[],ve.reset(e.spawn.x,e.spawn.z,e.spawn.heading),et.position.set(ve.pos.x,0,ve.pos.z),fd(),ln(null,null,""),Ce.beep(640,.07),_t("\u{1F3E2} Inside: "+_m[e.style]+" \u2014 EXIT pad is behind you",2200)}function _c(){if(!ot)return;let n=ot.back;ot&&d0.set(ot.b.id,performance.now()),ms.clearLoot(),ot=null,id=null,cn.colliders=Tt.colliders,cn.targets=vs.targets;let e=cd(n.x,n.z,.45);ve.reset(e.x,e.z,n.heading),et.position.set(ve.pos.x,0,ve.pos.z),fd(),ln(null,null,""),Ce.beep(520,.07)}function Qm(){if(ct){if(ot){let s=ms.grab(ve.pos.x,ve.pos.z);s&&(ys(s.amount),Ce.beep(1300,.06),_t((s.kind==="safe"?"\u{1F513} Cracked a safe! +$":"\u{1F4B5} Found cash +$")+s.amount.toLocaleString(),1800));let r=Hr(ve.pos.x,ve.pos.z,ot.room.exit.x,ot.room.exit.z);if(r<.8){_c();return}return r<2.4?ln("exit",null,"\u{1F6AA} EXIT BUILDING"):ln(null,null,"")}let n=null,e=2.4;for(let s of vs.stores){let r=Hr(ve.pos.x,ve.pos.z,s.door.x,s.door.z);r<e&&(e=r,n=s)}if(n)return ln("shop",n,(n.type==="garage"?"\u{1F527} ":n.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+n.name);if(Hr(ve.pos.x,ve.pos.z,re.pos.x,re.pos.z)<4.2)return ln("in",null,"\u{1F697} GET IN");let t=On&&On.nearestCar(ve.pos.x,ve.pos.z,3.6);if(t)return ln("steal",t,"\u{1F697} STEAL CAR");let i=VE(ve.pos.x,ve.pos.z);return i?ln("enter",i,"\u{1F3E2} ENTER BUILDING"):ln(null,null,"")}if(Math.abs(pt.speed)<4)return ln("out",null,"\u{1F6AA} GET OUT");ln(null,null,"")}function jm(){$s==="out"?ud():$s==="in"?dd():$s==="enter"&&ps?m0(ps):$s==="steal"&&ps?p0(ps):$s==="exit"?_c():$s==="shop"&&ps&&(ps.type==="garage"?mc("play"):WE(ps))}function WE(n){Qs=!0,ln(null,null,""),Ce.beep(700,.06),rd.open(n)}function g0(){Qs=!1,rd.close(),Wi(),Vi()}var pn="single",XE="city-driver-tdm",cc=25,x0={red:14100029,blue:2060267},Ve={team:null,score:{red:0,blue:0},over:0,lastAttacker:null,kills:0,deaths:0},_0={weapons:["ak","glock","shotgun","sniper"],ammo:{ak:9999,glock:9999,shotgun:9999,sniper:9999},equipped:"ak"},fc=[];function fn(){return cn.save||Te}function v0(){return pn==="tdm"&&Ve.team?Object.assign({},Te.outfit,{shirt:x0[Ve.team]}):Te.outfit}function Zu(n){pn=n,Ut.connect(n==="single"?null:n==="tdm"?XE:void 0),Ln.clearEnemies(),Ln.setCount(n==="tdm"?0:14),cn.save=n==="tdm"?_0:Te,Q("tdm-hud").classList.toggle("hidden",n!=="tdm"),hc(),n==="tdm"?(Rt.active&&(Rt.stop(),Q("objective").classList.add("hidden")),Ve.score.red=Ve.score.blue=0,Ve.kills=Ve.deaths=0,Ve.over=0,Ve.team=null,setTimeout(()=>{pn==="tdm"&&(qE(),pd())},1600),_t("\u2694\uFE0F TEAM DEATHMATCH \u2014 first team to "+cc+" kills wins",3e3)):(et&&hi(et,Te.outfit),_t(n==="single"?"\u{1F9CD} Single player \u2014 the city is all yours":"\u{1F310} Online free roam \u2014 "+Ut.count+" in the city",2600))}function qE(){let n=0,e=0;Ut.each(t=>{t.team==="red"?n++:t.team==="blue"&&e++}),Ve.team=n<e?"red":e<n?"blue":Math.random()<.5?"red":"blue",hi(et,v0()),di=null,vc(),_t("You are on "+Ve.team.toUpperCase()+" team",2200)}function y0(n){return n==="red"?{x:-176,z:3,heading:-Math.PI/2}:{x:176,z:-3,heading:Math.PI/2}}function pd(){na();let n=y0(Ve.team||"red");re.pos.x=n.x+(Math.random()-.5)*6,re.pos.z=n.z+(Math.random()-.5)*20,re.heading=n.heading,re.vel.x=re.vel.z=0,pt.speed=0,no(0),ta(),ud(),_0.equipped="ak",Wi()}function vc(){Q("tdm-red").textContent=Ve.score.red,Q("tdm-blue").textContent=Ve.score.blue;let n=Q("tdm-you");n.textContent=Ve.team?"YOU: "+Ve.team.toUpperCase()+" \xB7 "+Ve.kills+"K / "+Ve.deaths+"D":"joining\u2026",n.className=Ve.team||""}function M0(n){if(!n||!n.kt||!(n.kt in Ve.score))return;Ve.score[n.kt]++,n.k===Ut.myId&&(Ve.kills++,ys(150));let e=Q("killfeed"),t=document.createElement("div");for(t.innerHTML=`<b class="${n.kt}">${e0(n.kn||"?")}</b> \u2620 <b class="${n.kt==="red"?"blue":"red"}">${e0(n.vn||"?")}</b>`,e.prepend(t);e.children.length>4;)e.lastChild.remove();if(setTimeout(()=>t.remove(),6e3),vc(),!Ve.over&&(Ve.score.red>=cc||Ve.score.blue>=cc)){let i=Ve.score.red>=cc?"red":"blue";Ve.over=8,Q("tdm-win").textContent=(i===Ve.team?"\u{1F3C6} ":"")+i.toUpperCase()+" TEAM WINS!",Q("tdm-win").className=i,i===Ve.team&&(ys(2500),_t("+$2,500 for the win!",2500))}}var e0=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function t0(n,e,t,i){pn!=="tdm"||!Ve.team||(Ut.send("hit",{t:n.id,d:e,tm:Ve.team,n:Te.name}),xs.hit(n.x,1.25,n.z,t,i,1))}function n0(){if(Bt&&Bt.active&&E0("you got wasted"),pn!=="tdm")return;Ve.deaths++;let n=Ve.lastAttacker,e={k:n?n.id:null,kn:n?n.name:"the street",kt:n?n.team:null,v:Ut.myId,vn:Te.name};n&&(Ut.send("kill",e),M0(e)),vc()}function i0(){return pn==="tdm"?y0(Ve.team||"red"):{x:Tt.spawn.x,z:Tt.spawn.z,heading:Tt.spawn.heading||0}}function YE(){if(fc.length=0,pn!=="tdm"||!Ve.team)return;let n=ot?ot.b.id:-1;Ut.each(e=>{if(e.team===Ve.team||e.dead||e.b!==n||!e.placed)return;let t={kind:"player",id:e.id,name:e.name,team:e.team,x:e.x,z:e.z};fc.push({x:e.x,z:e.z,r:e.mode==="car"?1.5:.5,ref:t})})}function S0(){return Math.min(Pn,(Te.missionsDone|0)+1)}function ZE(){if(pn==="tdm"){_t("Missions are in Single Player / Online Free Roam");return}sd=!0,ln(null,null,"");let n=Te.missionsDone|0,e=Bt.active,t=e?Bt.mission:Hu(S0());Q("mb-num").textContent=n>=Pn?"ALL 500 COMPLETE":"MISSION "+t.n+" / "+Pn,Q("mb-title").textContent=t.type==="boss"?"\u{1F451} FINAL BOSS: EMERALD":t.title,Q("mb-desc").textContent=n>=Pn?"You beat Emerald and took her millions. Replay any time \u2014 missions keep paying.":t.desc,Q("mb-reward").textContent="$"+t.reward.toLocaleString()+(t.timeLimit?" \xB7 \u23F1 "+t.timeLimit+"s":""),Q("mb-progress").style.width=(n/Pn*100).toFixed(1)+"%",Q("mb-left").textContent=n>=Pn?"Emerald defeated \u{1F480}":Pn-1-Math.min(n,Pn-1)+" missions until Emerald",Q("mb-start").textContent=e?"\u2716 ABANDON MISSION":"\u25B6 START",Q("mission-board").classList.remove("hidden")}function pc(){sd=!1,Q("mission-board").classList.add("hidden")}function $E(){if(Bt.active){Bt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),pc(),_t("Mission abandoned");return}Rt&&Rt.active&&(Rt.stop(),Q("objective").classList.add("hidden"));let n=(Te.missionsDone|0)>=Pn?1+Math.floor(Math.random()*(Pn-1)):S0(),e=Bt.start(n);pc(),Q("mission-hud").classList.remove("hidden"),Q("mh-title").textContent="#"+e.n+" "+(e.type==="boss"?"EMERALD":e.title.toUpperCase()),Ce.beep(700,.08),_t("\u{1F4F1} "+e.title+" \u2014 "+e.desc,3500)}function JE(){let n=Bt.mission;Bt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),n.n>(Te.missionsDone|0)&&(Te.missionsDone=n.n),ys(n.reward),an(Te),Ce.beep(880,.1),setTimeout(()=>Ce.beep(1320,.15),130),n.type==="boss"?(Q("victory").classList.remove("hidden"),Q("victory-cash").textContent="+$"+Bu.toLocaleString()):_t("\u2705 MISSION PASSED  +$"+n.reward.toLocaleString(),3e3)}function E0(n){Bt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),Ce.beep(200,.2),_t("\u274C MISSION FAILED \u2014 "+n+". Try again from \u{1F4F1}",3200)}function KE(){let n=ct?ve.pos.x:re.pos.x,e=ct?ve.pos.z:re.pos.z,t=ct?ve.heading:re.heading;Q("mh-obj").textContent=Bt.objective();let i=Bt.timeLeft;Q("mh-time").textContent=i!=null?"\u23F1 "+Math.ceil(i)+"s":"",Q("mh-time").classList.toggle("low",i!=null&&i<10);let s=Bt.target({x:n,z:e}),r=Q("mh-arrow");if(s&&!ot){let a=Math.atan2(-(s.x-n),-(s.z-e)),l=Math.atan2(Math.sin(a-t),Math.cos(a-t));r.style.transform="rotate("+(-l).toFixed(3)+"rad)",r.classList.remove("hidden"),Q("mh-dist").textContent=Math.round(Math.hypot(s.x-n,s.z-e))+" m"}else r.classList.add("hidden"),Q("mh-dist").textContent="";let o=Bt.boss;o&&o.state!=="dead"?(Q("boss-hud").classList.remove("hidden"),Q("boss-fill").style.width=Math.max(0,o.hp/o.maxHp*100)+"%"):Q("boss-hud").classList.add("hidden")}function md(){let n=Q("hp-fill");n&&(n.style.width=Math.max(0,_s)+"%",n.style.background=_s>50?"#4ade80":_s>25?"#fbbf24":"#ef4444")}function $u(n){ui||Zt!=="freeroam"||(_s-=ct?n:n*.5,rc=.35,md(),Ce&&Ce.beep(160,.05),_s<=0&&QE())}function QE(){if(ui=!0,Ku=0,_s=0,md(),ln(null,null,""),Q("wasted").classList.remove("hidden"),ct&&et&&(et.rotation.x=-Math.PI/2+.05,et.position.y=.12),xs){let n=ct?ve.pos.x:re.pos.x,e=ct?ve.pos.z:re.pos.z;xs.pool(n,e,2.6)}typeof n0=="function"&&n0()}function jE(){ui=!1,_s=100,md(),Q("wasted").classList.add("hidden"),et&&(et.rotation.x=0,et.position.y=0);let n=pn==="tdm"?0:Math.min(500,Math.round(Te.cash*.05));if(n>0&&(Te.cash-=n,an(Te),Vi()),na(),typeof i0=="function"){let e=i0();re.pos.x=e.x,re.pos.z=e.z,re.heading=e.heading,re.vel.x=re.vel.z=0,ta(),no(0)}else ad();if(pn==="tdm"){Ve.lastAttacker=null,pd();return}_t(n>0?"\u{1F3E5} Hospital bill: -$"+n:"\u{1F3E5} Back on your feet",2200)}function e1(n){let e=re.heading,t=re.pos.x,i=re.pos.z;Mn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(pt.speed),r=8.5+s*.045,o=3.6+s*.014;Un.set(t-Mn.x*r,o,i-Mn.z*r);let a=1-Math.exp(-n*5.5);Xt.x+=(Un.x-Xt.x)*a,Xt.y+=(Un.y-Xt.y)*a,Xt.z+=(Un.z-Xt.z)*a,Ft.position.copy(Xt),Ft.lookAt(t+Mn.x*5,1.7,i+Mn.z*5);let l=62+Math.min(14,s*.22)+(pt.nitro?6:0);Math.abs(l-bi)>.25&&(bi+=(l-bi)*Math.min(1,n*4),Ft.fov=bi,Ft.updateProjectionMatrix())}function t1(){let n=Math.abs(pt.speed)*2.2;Q("speed-val").textContent=Math.round(n),Q("gear-hud").textContent=(pt.reverse?"R":n<1&&!Te.manual?"N":String(pt.gear||1))+(Te.manual?" M":"");let e=Q("tach-fill");e&&(e.style.width=(Math.min(1,pt.rpm||0)*100).toFixed(1)+"%",e.classList.toggle("red",(pt.rpm||0)>.9)),Q("nitro-fill").style.width=(Math.max(0,Math.min(1,pt.nitroFrac))*100).toFixed(1)+"%"}function Ms(){for(let n of["main-menu","pause-menu","garage"])Q(n).classList.add("hidden")}function n1(){return gs||to}function na(){Qs&&g0(),ot&&_c(),ct&&dd(),ln(null,null,"")}function yc(){Zt="menu",Sn=!1,Vn=!1,jn&&jn.active&&jn.exit(),na(),xt&&(xt.setMode("drive"),xt.detach()),Ms(),Q("main-menu").classList.remove("hidden"),Q("hud").classList.add("hidden"),Q("touch-controls").classList.add("hidden"),Q("drag-ui").classList.add("hidden"),Rt&&Rt.active&&Rt.stop(),Q("objective").classList.add("hidden"),Bt&&Bt.active&&Bt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),pc(),Q("m-tutorial").classList.toggle("hidden",!!Te.tutorialDone),Ut&&pn!=="online"&&(pn="online",Ut.connect(void 0)),cn.save=Te,Q("tdm-hud").classList.add("hidden"),Q("tdm-win").classList.add("hidden"),Ve.over=0,et&&hi(et,Te.outfit),di=null,Ce.engine(0,0),Ce.skid(!1)}function hc(){jn&&jn.active&&jn.exit(),na(),fi&&(fi.intensity=Qu),Q("drag-ui").classList.add("hidden"),Zt="freeroam",Sn=!1,Vn=!1,Ms(),Q("hud").classList.remove("hidden"),Q("touch-controls").classList.remove("hidden"),xt.attach(),xt.setMode("drive"),ad(),Vi(),!Te.tutorialDone&&!Te.tutorialSkipped?c1():_t("Free roam \u2014 drift for cash, walk into any building!")}function s0(){na(),Zt="drag",Sn=!1,Vn=!1,fi&&(fi.intensity=0),Ms(),Q("hud").classList.add("hidden"),Q("touch-controls").classList.remove("hidden"),xt.attach(),xt.setMode("drag"),Q("drag-ui").classList.remove("hidden"),jn.enter()}function r0(){Zt!=="freeroam"&&Zt!=="drag"||Vn||Qs||n1()||(Sn=!0,ln(null,null,""),Ms(),Q("pause-menu").classList.remove("hidden"))}function i1(){Sn=!1,Ms()}function mc(n){uc=n,Vn=!0,h0.refresh(),Vi(),Ms(),Q("garage").classList.remove("hidden")}function s1(){Vn=!1,Ms(),Q("hud").classList.toggle("hidden",Zt!=="freeroam"),et&&Wi(),uc==="menu"?yc():uc==="pause"?(Sn=!0,Q("pause-menu").classList.remove("hidden")):Sn=!1,Vi()}var r1=!1;function nd(n,e){sc=n,Vn&&(Vn=!1),Zt==="freeroam"&&(Sn=!0),gs=!0,Ms(),Q("hud").classList.add("hidden"),Q("touch-controls").classList.add("hidden"),ln(null,null,""),r1=et.visible,Mi&&(Mi=null,Js()),gc.open(e||"car")}function o1(n){if(!ct)if(n==="driver"){let e=Ru(re.pos.x,re.pos.z,re.heading);et.position.set(e.x,0,e.z),et.rotation.y=re.heading,hs(et,0,0,!1,0),et.visible=!0}else et.visible=!1}function a1(){if(gs=!1,gc.close(),et.visible=ct,Wi(),sc==="menu"){yc();return}if(sc==="garage"){mc(uc);return}(Zt==="freeroam"||Zt==="drag")&&(Q("hud").classList.toggle("hidden",Zt!=="freeroam"),Q("touch-controls").classList.remove("hidden"),sc==="pause"?(Sn=!0,Q("pause-menu").classList.remove("hidden")):Sn=!1,ct?fd():ta())}function l1(n){Zo+=n*.35;let e=gc.tab==="driver",t=e?et.position.x:re.pos.x,i=e?et.position.z:re.pos.z,s=e?3.4:7.2,r=e?1.7:2.6,o=e?1.05:.75;Ft.position.set(t+Math.sin(Zo)*s,r,i+Math.cos(Zo)*s);let a=Math.cos(Zo),l=-Math.sin(Zo),c=e?.9:2.2;Ft.lookAt(t+a*c,o,i+l*c),Math.abs(55-bi)>.25&&(bi=55,Ft.fov=55,Ft.updateProjectionMatrix()),jr.x=t,jr.z=i,Tt.update(n,jr)}function c1(){Rt&&(Rt.start(),Q("objective").classList.remove("hidden"),b0(),_t("\u{1F393} TUTORIAL \u2014 finish it for $"+Gl.toLocaleString()+" + a free car!",3200))}function b0(){if(!Rt.active){Q("objective").classList.add("hidden");return}Q("obj-step").textContent="STEP "+(Rt.step+1)+"/"+Rt.total,Q("obj-text").textContent=Rt.text;let n=Rt.target(),e=ct?ve.pos.x:re.pos.x,t=ct?ve.pos.z:re.pos.z,i=ct?ve.heading:re.heading,s=Q("obj-arrow"),r=Q("obj-dist");if(n&&!ot){let o=Math.atan2(-(n.x-e),-(n.z-t)),a=Math.atan2(Math.sin(o-i),Math.cos(o-i));s.style.transform="rotate("+(-a).toFixed(3)+"rad)",s.classList.remove("hidden"),r.textContent=Math.round(Math.hypot(n.x-e,n.z-t))+" m"}else s.classList.add("hidden"),r.textContent=Rt.text.startsWith("DRIFT")?Math.round(Rt.driftProgress*100)+"%":""}function w0(){Te.tutorialDone=!0,ys(Gl),an(Te),Q("objective").classList.add("hidden"),Ce.beep(880,.1),setTimeout(()=>Ce.beep(1175,.14),120),h1()}function h1(){to=!0,ln(null,null,"");let n={topSpeed:1,accel:1,handling:1,grip:1};for(let t of yi)for(let i in n)n[i]=Math.max(n[i],t.stats[i]);let e=(t,i,s)=>`<div class="stat-row"><span>${t}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(i/s*100))}%"></i></div></div>`;Q("pick-list").innerHTML=yi.map(t=>`<div class="car-card"><div class="cinfo"><b>${t.name}</b><small>${t.desc} \xB7 worth $${t.price.toLocaleString()}</small><div class="stat-bars">${e("SPD",t.stats.topSpeed,n.topSpeed)}${e("ACC",t.stats.accel,n.accel)}${e("HDL",t.stats.handling,n.handling)}${e("GRP",t.stats.grip,n.grip)}</div></div><button class="buy-btn" data-id="${t.id}">PICK FREE</button></div>`).join(""),Q("car-pick").classList.remove("hidden")}function T0(n){Mi=null;let e=yi.find(t=>t.id===n);e&&(Te.owned.includes(n)||Te.owned.push(n),Te.upgrades[n]||(Te.upgrades[n]={engine:0,turbo:0,tires:0,suspension:0,nitro:0}),typeof Te.paint[n]!="number"&&(Te.paint[n]=e.colors[0]),Te.currentCar=n,an(Te),Js(),Q("car-pick").classList.add("hidden"),to=!1,Vi(),_t("\u{1F3C6} "+e.name+" is yours! +$"+Gl.toLocaleString()+" in the bank",3200),Ce.beep(990,.1))}function o0(n,e){let t=Q("mp-status");t.classList.remove("hidden"),t.className="mp-status "+n,t.textContent=n==="on"?"\u25CF online \xB7 "+e+(e===1?" player":" players"):n==="connecting"?"\u25CF connecting\u2026":"\u25CF offline";let i=Q("online-hud");i.textContent=n==="on"?"\u{1F310} "+e+" online":"\u{1F310} \u2026",i.classList.toggle("dim",n!=="on")}function u1(){return Wt.name=Te.name,Wt.car=Nn.id,di||(di=Qp(Te,Nn.id),pn==="tdm"&&Ve.team&&(di.o[0]=x0[Ve.team])),Wt.team=pn==="tdm"?Ve.team:null,Wt.dead=ui,Wt.look=di,Wt.b=ot?ot.b.id:-1,ct?(Wt.mode="foot",Wt.x=ve.pos.x,Wt.z=ve.pos.z,Wt.h=ve.heading,Wt.speed=ve.speed,Wt.px=re.pos.x,Wt.pz=re.pos.z,Wt.ph=re.heading,Wt.w=fn().equipped||null):(Wt.mode="car",Wt.x=re.pos.x,Wt.z=re.pos.z,Wt.h=re.heading,Wt.speed=pt.speed,Wt.w=null),Wt}async function d1(){dn=new wo({antialias:!1,powerPreference:"high-performance"}),dn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),dn.setSize(zn.view.w,zn.view.h),dn.toneMapping=Uo,dn.toneMappingExposure=1,dn.shadowMap.enabled=!0,dn.shadowMap.type=vl,Q("game-container").appendChild(dn.domElement),At=new Dr,Ft=new hn(62,zn.view.w/zn.view.h,.1,3e3),Tt=Lp(At,cm),vs=um(At,Tt);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(Fm(),Om)),t=new Ir(dn);At.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let n=Wp();At.add(n.mesh),f0={uniforms:n.uniforms,sun:Tt.sun,hemi:Tt.hemi,scene:At,renderer:dn},A0("day",!0);try{Wn=(await Promise.resolve().then(()=>(Zm(),Ym))).createPostFX(dn,At,Ft),Wn.setBloomStrength(Cl.day.bloom)}catch(e){console.warn("postfx off",e),Wn=null}Ei=new Rl("auto"),Ei.onChange(a0),a0(Ei.level,Mu(Ei.level)),Ks=new Kn(At,70,{color:14211288,opacity:.42}),ea=new Kn(At,40,{color:7829367,opacity:.3,size:.9}),dc=new Pl(At,500),fi=new ml(13624575,0,60,.5,.45,1.2),oc=new Yt,At.add(oc),fi.target=oc,At.add(fi)}function a0(n,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);dn.setPixelRatio(t),Wn&&(Wn.setPixelRatio(Math.min(t,1)),Wn.setSize(zn.view.w,zn.view.h),Wn.setBloomEnabled(e.bloom));let i=e.shadows;(dn.shadowMap.enabled!==i||Tt&&Tt.sun.castShadow!==i)&&(dn.shadowMap.enabled=i,Tt&&(Tt.sun.castShadow=i),At.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),Tt&&Tt.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),ju=e.particles,dc&&dc.setVisible(e.particles>.3)}function A0(n,e){let t=Su;typeof n=="string"&&(Qr=t.indexOf(n)),Qr<0&&(Qr=0);let i=t[Qr],s=Xp(f0,i),r=i==="day"?0:i==="sunset"?.45:1;Tt&&Tt.setGlow(r),Wn&&Wn.setBloomStrength(s.bloom),Qu=i==="day"?0:i==="sunset"?60:160,fi&&Zt!=="drag"&&(fi.intensity=Qu);let o=Q("tod-btn");o&&(o.textContent=i==="day"?"\u2600\uFE0F":i==="sunset"?"\u{1F307}":"\u{1F319}"),e||_t(s.label+" mode")}function f1(){Qr=(Qr+1)%Su.length,A0()}var l0=performance.now();function R0(n){requestAnimationFrame(R0);let e=(n-l0)/1e3;l0=n,e>0||(e=.016),e>.1&&(e=.1),lc++;let t=Zt==="freeroam"&&!Sn&&!Vn&&!Qs&&!gs&&!to&&!ui&&!sd;if(gs)l1(e);else if(t&&ct)GE(e),Tt.update(e,ve.pos),vs.update(e),ms.update(e,ot&&ot.room),Ks.update(e),ea.update(e),Ei&&Ei.update(e),Ce.engine(0,0),Ce.skid(!1),tc.x=re.pos.x,tc.z=re.pos.z,ot?ac.draw(ot.back.x,ot.back.z,ve.heading,tc,Ut):ac.draw(ve.pos.x,ve.pos.z,ve.heading,tc,Ut),Qm(),xt.consumeAction()&&jm();else if(t){pt=re.update(xt.input,e,BE);let i=qp(xc,pt.drifting,pt.speed,e);i>0&&(ys(i),_t("DRIFT +$"+i.toLocaleString())),jr.x=re.pos.x,jr.z=re.pos.z,Tt.update(e,jr),no(e),e1(e),t1(),FE(e),vs.update(e),Qo.update(e,cn,!1,!1),ac.draw(re.pos.x,re.pos.z,re.heading,null,Ut),Qm(),xt.consumeAction()&&jm(),Ei&&Ei.update(e);let s=Math.min(1,Math.abs(pt.speed)/(eo.topSpeed*1.15));Ce.engine(pt.rpm,Math.max(0,xt.input.throttle||0),pt.shifting),pt.gear!==ec&&(ec&&Ce.shiftBlip(pt.gear>ec),ec=pt.gear),Te.manual?(xt.consumeGearUp()&&re.box.shift(1),xt.consumeGearDown()&&re.box.shift(-1)):(xt.consumeGearUp(),xt.consumeGearDown()),Ce.skid(pt.drifting)}else Zt==="drag"&&!Sn&&!Vn&&!gs?jn.active&&jn.update(e):(Ce.engine(0,0),Ce.skid(!1));if(Zt==="freeroam"&&!Sn&&!Vn&&!gs&&(fs.x=ct?ve.pos.x:re.pos.x,fs.z=ct?ve.pos.z:re.pos.z,fs.alive=!ui,fs.hidden=!!ot,fs.inCar=!ct,!Qs&&!to&&(Ln.update(e,fs),On.update(e,fs,ct?null:fs),On.hitList(),!ct&&!ui&&Ln.carHits(re.pos.x,re.pos.z,re.heading,pt.speed)&&(Ce.beep(70,.12),re.vel.x*=.85,re.vel.z*=.85)),xs.update(e),rc>0&&(rc-=e,Q("hurt").style.opacity=String(Math.max(0,rc/.35)*.75)),ui&&(Ku+=e,Ku>3.2&&jE())),t&&Bt&&Bt.active){let i=Bt.update(e,{pos:ct?ve.pos:re.pos,cam:Ft.position});i==="pass"?JE():i==="fail"&&E0("out of time"),Bt.active&&lc%3===0&&KE()}if(t&&Rt&&Rt.active){let i=Rt.update(e,{pos:ct?ve.pos:re.pos,drifting:!ct&&pt.drifting,speed:ct?0:pt.speed,onFoot:ct,inside:ot?ot.b.id:-1});i==="next"?(Ce.beep(880,.08),_t("\u2705 Nice! Next: "+Rt.text,2200)):i==="done"&&w0(),lc%3===0&&b0()}YE(),Ve.over>0&&(Ve.over-=e,Q("tdm-win").classList.remove("hidden"),Ve.over<=0&&(Q("tdm-win").classList.add("hidden"),Ve.score.red=Ve.score.blue=0,vc(),pn==="tdm"&&!ui&&pd())),Ut&&Ut.update(e,Zt==="freeroam"?u1():null,n),Ks&&(Zt!=="freeroam"||Sn||Vn||Qs)&&(Ks.update(e),ea.update(e)),Wn?Wn.render():dn.render(At,Ft)}function p1(){Q("m-freeroam").onclick=()=>{Ce.unlock(),zn.goLandscape(),Ce.beep(600,.06),Zu("single")},Q("m-online").onclick=()=>{Ce.unlock(),zn.goLandscape(),Ce.beep(600,.06),Zu("online")},Q("m-tdm").onclick=()=>{Ce.unlock(),zn.goLandscape(),Ce.beep(600,.06),Zu("tdm")},Q("m-drag").onclick=()=>{Ce.unlock(),zn.goLandscape(),Ce.beep(600,.06),s0()},Q("store-close").onclick=()=>{Ce.beep(500,.05),g0()},Q("m-garage").onclick=()=>{Ce.unlock(),mc("menu")},Q("p-resume").onclick=()=>{Ce.beep(600,.05),zn.goLandscape(),i1()},Q("p-freeroam").onclick=()=>{Ce.beep(600,.05),hc()},Q("p-drag").onclick=()=>{Ce.beep(600,.05),s0()},Q("p-garage").onclick=()=>mc("pause"),Q("p-quit").onclick=()=>yc(),Q("menu-btn").onclick=r0,Q("garage-close").onclick=s1,Q("drag-exit").onclick=()=>{jn.active&&jn.exit(),hc()},Q("m-editor").onclick=()=>{Ce.unlock(),Ce.beep(600,.05),nd("menu","car")},Q("p-editor").onclick=()=>{Ce.beep(600,.05),nd("pause",ct?"driver":"car")},Q("se-done").onclick=()=>{Ce.beep(500,.05),a1()},Q("m-tutorial").onclick=()=>{Ce.unlock(),zn.goLandscape(),Ce.beep(600,.06),Te.tutorialSkipped=!1,an(Te),hc()},Q("obj-skip").onclick=()=>{Rt.stop(),Te.tutorialSkipped=!0,an(Te),Q("objective").classList.add("hidden"),_t("Tutorial skipped \u2014 replay it from the main menu for $100K",2600)};let n=()=>{Te.manual=!Te.manual,an(Te),u0(),Ce.beep(600,.05),_t(Te.manual?"Manual: shift with \u25B2/\u25BC GEAR (G / B keys). Watch the rev bar!":"Automatic gearbox",2600)};Q("m-trans").onclick=n,Q("p-trans").onclick=n,Q("mission-btn").onclick=()=>{Ce.beep(650,.05),ZE()},Q("mb-start").onclick=()=>$E(),Q("mb-close").onclick=()=>{Ce.beep(500,.05),pc()},Q("victory-ok").onclick=()=>{Q("victory").classList.add("hidden")},Q("pick-list").addEventListener("click",e=>{let t=e.target.closest("button[data-id]");t&&T0(t.dataset.id)}),Q("tod-btn")&&(Q("tod-btn").onclick=()=>{Ce.beep(600,.05),f1()}),Q("gfx-btn")&&(Q("gfx-btn").onclick=()=>{Ce.beep(600,.05);let e=Ei.cycleMode();Q("gfx-btn").textContent=e==="auto"?"\u2728":e==="high"?"\u2728+":"\u2728\u2212",_t("Graphics: "+e.toUpperCase()+" ("+Vp[Ei.level]+")")}),window.addEventListener("pointerdown",()=>Ce.unlock()),window.addEventListener("keydown",()=>Ce.unlock()),document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("gesturestart",e=>e.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(Zt==="freeroam"||Zt==="drag")&&!Sn&&r0()})}function m1(n,e){dn&&(Ft.aspect=n/e,Ft.updateProjectionMatrix(),dn.setSize(n,e),Wn&&Wn.setSize(n,e))}async function g1(){try{Te=Kp(tm(kp())),Ce=Op(),zn=Zp(m1),await d1(),xt=Ip({isRotated:()=>zn.rotated}),ve=new Fl,et=kr(Te.outfit),et.visible=!1,At.add(et),Qo=fm(At),Object.assign(cn,{save:Te,colliders:Tt.colliders,targets:vs.targets,audio:Ce,toast:_t,onTargetHit:()=>{ys(Tu),_t("TARGET +$"+Tu,900)},onShot:n=>{Ut&&Ut.sendShots(n)}}),ms=ym(At),xs=wm(At),Ln=Tm({scene:At,blood:xs,audio:Ce,count:14,collide:(n,e,t)=>ld(n,e,t),shoot:(n,e,t,i)=>Qo.remoteShot(n,e,t,i),onPlayerHit:n=>$u(n)}),On=Rm({scene:At,lines:Tt.roadLines,buildCar:ic,applyCarSkin:Ko,CAR_DEFS:yi}),Ju=On.hitList(),Bt=zm({scene:At,people:Ln,toast:_t,beep:(n,e)=>Ce.beep(n,e)}),cn.hitables=[Ln.hitList,Ju,fc],cn.onPersonHit=(n,e,t,i)=>{if(n.kind==="ped"||n.kind==="enemy")Ln.damage(n,e,t,i);else if(n.kind==="car"){let s=On.hitCar(n.car,e,t,i);s&&(xs.hit(s.x,s.y,s.z,t,i,s.kind==="killed"?1.6:.7),s.kind==="killed"&&(xs.pool(s.x+t,s.z+i,1.4),Ln.scare(s.x,s.z,30)))}else typeof t0=="function"&&n.kind==="player"&&t0(n,e,t,i)},Rt=Mm(At,Tt),rd=pm({save:Te,persist:()=>an(Te),toast:n=>_t(n,1600),beep:(n,e)=>Ce.beep(n,e),onChange:()=>{Vi(),Wi()}}),ac=gm(Q("minimap"),vs.stores),Wi(),hd(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(n,e,t)=>{ct?ve.reset(n,e,t||0):(re.pos.x=n,re.pos.z=e,re.heading=t||0)},save:()=>Te,stores:()=>vs.stores,buildings:()=>Tt.buildings,inside:()=>ot&&{id:ot.b.id,style:ot.room.style},enter:n=>m0(n),exit:()=>_c(),getOut:()=>ud(),tut:()=>Rt&&{active:Rt.active,step:Rt.step},finishTut:()=>w0(),pick:n=>T0(n),mp:()=>Ut&&{status:Ut.status,count:Ut.count},state:()=>({state:Zt,onFoot:ct,editorOpen:gs,pickOpen:to,cash:Te.cash}),steal:()=>{let n=On.cars[0];return ve.reset(n.x+2,n.z,0),p0(n),Nn.name},physics:()=>re,missions:()=>Bt,setDone:n=>{Te.missionsDone=n},people:()=>Ln,traffic:()=>On,hp:()=>_s,hurt:n=>$u(n),cam:()=>({c:Ft.position.toArray().map(n=>+n.toFixed(2)),p:et.position.toArray().map(n=>+n.toFixed(2)),pv:et.visible,f:[ve.pos.x,ve.pos.z,ve.heading]})}),od(),re=new wl(eo),u0(),ad(),h0=Gp({save:Te,getDef:n=>yi.find(e=>e.id===n),onSelectCar:()=>{Mi=null,Js()},onPaint:()=>Js(),onWheels:()=>Js(),refreshScene:()=>Js(),openEditor:()=>nd("garage","car")}),gc=xm({save:Te,cars:yi,persist:()=>an(Te),beep:(n,e)=>Ce.beep(n,e),onCar:n=>{n?Js():Ko(yn,Te.paint[Nn.id],Gs(Te,Nn.id)),di=null},onOutfit:()=>{hi(et,Te.outfit),di=null},onName:()=>{di=null},onTab:n=>o1(n)}),Ut=bm({scene:At,CAR_DEFS:yi,buildCar:ic,applyCarSkin:Ko,buildCharacter:kr,setOutfit:hi,setHeldWeapon:Go,animateCharacter:hs,unpackLook:jp,remoteShot:(n,e,t,i)=>Qo.remoteShot(n,e,t,i),localBuilding:()=>ot?ot.b.id:-1,onHit:n=>{pn!=="tdm"||!Ve.team||n.tm===Ve.team||ui||(Ve.lastAttacker={id:n.id,name:n.n,team:n.tm},$u(+n.d||10))},onKill:n=>{pn==="tdm"&&M0(n)},onStatus:(n,e)=>o0(n==="on"?"on":n==="connecting"?"connecting":"off",e),onCount:n=>{Ut&&Ut.status==="on"&&o0("on",n)}}),Ut.connect(),jn=zp({scene:At,camera:Ft,buildCar:ic,CAR_DEFS:yi,effectiveStats:c0,getPlayer:()=>(nc.def=Nn,nc.stats=eo,nc.group=yn,nc),controls:xt,audio:Ce,addCash:ys,toast:_t,city:Tt}),p1(),Vi(),Q("loading").classList.add("hidden"),yc(),requestAnimationFrame(R0)}catch(n){console.error(n),Q("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(n&&n.message||n)+"</p>"}}g1();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
