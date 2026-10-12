(()=>{var M0=Object.defineProperty;var Nn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var _c=(n,e)=>{for(var t in e)M0(n,t,{get:e[t],enumerable:!0})};function Pi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function sn(n,e,t){return Math.max(e,Math.min(t,n))}function gg(n,e){return(n%e+e)%e}function Ac(n,e,t){return(1-t)*n+t*e}function Xd(n){return(n&n-1)===0&&n!==0}function ch(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function np(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xg(){let n=za("canvas");return n.style.display="block",n}function fo(n){n in qd||(qd[n]=!0,console.warn(n))}function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Pc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Ic(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){_s.fromArray(n,r);let a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),h=i.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function kc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Lg(n,e,t,i,s,r,o,a){let l;if(e.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qi,a),l===null)return null;pa.copy(a),pa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(pa);return c<t.near||c>t.far?null:{distance:c,point:pa.clone(),object:n}}function ma(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,sr),n.getVertexPosition(l,rr),n.getVertexPosition(c,or);let h=Lg(n,e,t,i,sr,rr,or,fa);if(h){s&&(ha.fromBufferAttribute(s,a),ua.fromBufferAttribute(s,l),da.fromBufferAttribute(s,c),h.uv=bs.getInterpolation(fa,sr,rr,or,ha,ua,da,new ae)),r&&(ha.fromBufferAttribute(r,a),ua.fromBufferAttribute(r,l),da.fromBufferAttribute(r,c),h.uv1=bs.getInterpolation(fa,sr,rr,or,ha,ua,da,new ae),h.uv2=h.uv1),o&&(of.fromBufferAttribute(o,a),af.fromBufferAttribute(o,l),lf.fromBufferAttribute(o,c),h.normal=bs.getInterpolation(fa,sr,rr,or,of,af,lf,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};bs.getNormal(sr,rr,or,d.normal),h.face=d}return h}function Er(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Mn(n){let e={};for(let t=0;t<n.length;t++){let i=Er(n[t]);for(let s in i)e[s]=i[s]}return e}function Ig(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sp(n){return n.getRenderTarget()===null?n.outputColorSpace:mt.workingColorSpace}function rp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,p=c.usage,m=d.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,d,p),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let p=h.array,m=h._updateRange,x=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&x.length===0&&n.bufferSubData(d,0,p),x.length!==0){for(let g=0,f=x.length;g<f;g++){let u=x[g];t?n.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):n.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}function xv(n,e,t,i,s,r,o){let a=new Pe(0),l=r===!0?0:1,c,h,d=null,p=0,m=null;function x(f,u){let S=!1,M=u.isScene===!0?u.background:null;M&&M.isTexture&&(M=(u.backgroundBlurriness>0?t:e).get(M)),M===null?g(a,l):M&&M.isColor&&(g(M,1),S=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===fl)?(h===void 0&&(h=new te(new De(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Er(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=mt.getTransfer(M.colorSpace)!==vt,(d!==M||p!==M.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=M,p=M.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new te(new st(2,2),new Jt({name:"BackgroundMaterial",uniforms:Er(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=mt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||p!==M.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,p=M.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,u){f.getRGB(xa,sp(n)),i.buffers.color.setClear(xa.r,xa.g,xa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(a,l)},render:x}}function _v(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null),c=l,h=!1;function d(L,A,U,H,N){let k=!1;if(o){let X=g(H,U,A);c!==X&&(c=X,m(c.object)),k=u(L,H,U,N),k&&S(L,H,U,N)}else{let X=A.wireframe===!0;(c.geometry!==H.id||c.program!==U.id||c.wireframe!==X)&&(c.geometry=H.id,c.program=U.id,c.wireframe=X,k=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,T(L,A,U,H),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,A,U){let H=U.wireframe===!0,N=a[L.id];N===void 0&&(N={},a[L.id]=N);let k=N[A.id];k===void 0&&(k={},N[A.id]=k);let X=k[H];return X===void 0&&(X=f(p()),k[H]=X),X}function f(L){let A=[],U=[],H=[];for(let N=0;N<s;N++)A[N]=0,U[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:U,attributeDivisors:H,object:L,attributes:{},index:null}}function u(L,A,U,H){let N=c.attributes,k=A.attributes,X=0,q=U.getAttributes();for(let ie in q)if(q[ie].location>=0){let K=N[ie],me=k[ie];if(me===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(me=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(me=L.instanceColor)),K===void 0||K.attribute!==me||me&&K.data!==me.data)return!0;X++}return c.attributesNum!==X||c.index!==H}function S(L,A,U,H){let N={},k=A.attributes,X=0,q=U.getAttributes();for(let ie in q)if(q[ie].location>=0){let K=k[ie];K===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let me={};me.attribute=K,K&&K.data&&(me.data=K.data),N[ie]=me,X++}c.attributes=N,c.attributesNum=X,c.index=H}function M(){let L=c.newAttributes;for(let A=0,U=L.length;A<U;A++)L[A]=0}function _(L){R(L,0)}function R(L,A){let U=c.newAttributes,H=c.enabledAttributes,N=c.attributeDivisors;U[L]=1,H[L]===0&&(n.enableVertexAttribArray(L),H[L]=1),N[L]!==A&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,A),N[L]=A)}function b(){let L=c.newAttributes,A=c.enabledAttributes;for(let U=0,H=A.length;U<H;U++)A[U]!==L[U]&&(n.disableVertexAttribArray(U),A[U]=0)}function y(L,A,U,H,N,k,X){X===!0?n.vertexAttribIPointer(L,A,U,N,k):n.vertexAttribPointer(L,A,U,H,N,k)}function T(L,A,U,H){if(i.isWebGL2===!1&&(L.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();let N=H.attributes,k=U.getAttributes(),X=A.defaultAttributeValues;for(let q in k){let ie=k[q];if(ie.location>=0){let G=N[q];if(G===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){let K=G.normalized,me=G.itemSize,ye=t.get(G);if(ye===void 0)continue;let pe=ye.buffer,Ue=ye.type,Fe=ye.bytesPerElement,Te=i.isWebGL2===!0&&(Ue===n.INT||Ue===n.UNSIGNED_INT||G.gpuType===qf);if(G.isInterleavedBufferAttribute){let He=G.data,B=He.stride,ge=G.offset;if(He.isInstancedInterleavedBuffer){for(let ee=0;ee<ie.locationSize;ee++)R(ie.location+ee,He.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let ee=0;ee<ie.locationSize;ee++)_(ie.location+ee);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ee=0;ee<ie.locationSize;ee++)y(ie.location+ee,me/ie.locationSize,Ue,K,B*Fe,(ge+me/ie.locationSize*ee)*Fe,Te)}else{if(G.isInstancedBufferAttribute){for(let He=0;He<ie.locationSize;He++)R(ie.location+He,G.meshPerAttribute);L.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let He=0;He<ie.locationSize;He++)_(ie.location+He);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let He=0;He<ie.locationSize;He++)y(ie.location+He,me/ie.locationSize,Ue,K,me*Fe,me/ie.locationSize*He*Fe,Te)}}else if(X!==void 0){let K=X[q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(ie.location,K);break;case 3:n.vertexAttrib3fv(ie.location,K);break;case 4:n.vertexAttrib4fv(ie.location,K);break;default:n.vertexAttrib1fv(ie.location,K)}}}}b()}function E(){z();for(let L in a){let A=a[L];for(let U in A){let H=A[U];for(let N in H)x(H[N].object),delete H[N];delete A[U]}delete a[L]}}function v(L){if(a[L.id]===void 0)return;let A=a[L.id];for(let U in A){let H=A[U];for(let N in H)x(H[N].object),delete H[N];delete A[U]}delete a[L.id]}function D(L){for(let A in a){let U=a[A];if(U[L.id]===void 0)continue;let H=U[L.id];for(let N in H)x(H[N].object),delete H[N];delete U[L.id]}}function z(){I(),h=!0,c!==l&&(c=l,m(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:z,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:v,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:_,disableUnusedAttributes:b}}function vv(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,p){if(p===0)return;let m,x;if(s)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,d,p),t.update(d,r,p)}function c(h,d,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<p;x++)this.render(h[x],d[x]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,p);let x=0;for(let g=0;g<p;g++)x+=d[g];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function yv(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let y=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=p>0,_=o||e.has("OES_texture_float"),R=M&&_,b=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:_,floatVertexTextures:R,maxSamples:b}}function Mv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Ai,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||i!==0||s;return s=p,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,m){let x=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,u=n.get(d);if(!s||x===null||x.length===0||r&&!f)r?h(null):c();else{let S=r?0:i,M=S*4,_=u.clippingState||null;l.value=_,_=h(x,p,M,m);for(let R=0;R!==M;++R)_[R]=t[R];u.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,m,x){let g=d!==null?d.length:0,f=null;if(g!==0){if(f=l.value,x!==!0||f===null){let u=m+g*4,S=p.matrixWorldInverse;a.getNormalMatrix(S),(f===null||f.length<u)&&(f=new Float32Array(u));for(let M=0,_=m;M!==g;++M,_+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(f,_),f[_+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function Sv(n){let e=new WeakMap;function t(o,a){return a===sh?o.mapping=yr:a===rh&&(o.mapping=Mr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===sh||a===rh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function Ev(n){let e=[],t=[],i=[],s=n,r=n-mr+1+cf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-mr?l=cf[o-n+mr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,g=3,f=2,u=1,S=new Float32Array(g*x*m),M=new Float32Array(f*x*m),_=new Float32Array(u*x*m);for(let b=0;b<m;b++){let y=b%3*2/3-1,T=b>2?0:-1,E=[y,T,0,y+2/3,T,0,y+2/3,T+1,0,y,T,0,y+2/3,T+1,0,y,T+1,0];S.set(E,g*x*b),M.set(p,f*x*b);let v=[b,b,b,b,b,b];_.set(v,u*x*b)}let R=new $t;R.setAttribute("position",new mn(S,g)),R.setAttribute("uv",new mn(M,f)),R.setAttribute("faceIndex",new mn(_,u)),e.push(R),s>mr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function df(n,e,t){let i=new En(n,e,t);return i.texture.mapping=fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function bv(n,e,t){let i=new Float32Array(Es),s=new F(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nu(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ff(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function pf(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}function wv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===sh||l===rh,h=l===yr||l===Mr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new wr(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new wr(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Tv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Av(n,e,t,i){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let g=p.morphAttributes[x];for(let f=0,u=g.length;f<u;f++)e.remove(g[f])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let x in p)e.update(p[x],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let x in m){let g=m[x];for(let f=0,u=g.length;f<u;f++)e.update(g[f],n.ARRAY_BUFFER)}}function c(d){let p=[],m=d.index,x=d.attributes.position,g=0;if(m!==null){let S=m.array;g=m.version;for(let M=0,_=S.length;M<_;M+=3){let R=S[M+0],b=S[M+1],y=S[M+2];p.push(R,b,b,y,y,R)}}else if(x!==void 0){let S=x.array;g=x.version;for(let M=0,_=S.length/3-1;M<_;M+=3){let R=M+0,b=M+1,y=M+2;p.push(R,b,b,y,y,R)}}else return;let f=new(np(p)?Xa:Wa)(p,1);f.version=g;let u=r.get(d);u&&e.remove(u),r.set(d,f)}function h(d){let p=r.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Rv(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,x){n.drawElements(r,x,a,m*l),t.update(x,r,1)}function d(m,x,g){if(g===0)return;let f,u;if(s)f=n,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](r,x,a,m*l,g),t.update(x,r,g)}function p(m,x,g){if(g===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<g;u++)this.render(m[u]/l,x[u]);else{f.multiDrawElementsWEBGL(r,x,0,a,m,0,g);let u=0;for(let S=0;S<g;S++)u+=x[S];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function Cv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Pv(n,e){return n[0]-e[0]}function Lv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Iv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Pt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==x){let L=function(){z.dispose(),r.delete(h),h.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();let S=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],y=h.morphAttributes.color||[],T=0;S===!0&&(T=1),M===!0&&(T=2),_===!0&&(T=3);let E=h.attributes.position.count*T,v=1;E>e.maxTextureSize&&(v=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let D=new Float32Array(E*v*4*x),z=new Ha(D,E,v,x);z.type=Zi,z.needsUpdate=!0;let I=T*4;for(let A=0;A<x;A++){let U=R[A],H=b[A],N=y[A],k=E*v*4*A;for(let X=0;X<U.count;X++){let q=X*I;S===!0&&(o.fromBufferAttribute(U,X),D[k+q+0]=o.x,D[k+q+1]=o.y,D[k+q+2]=o.z,D[k+q+3]=0),M===!0&&(o.fromBufferAttribute(H,X),D[k+q+4]=o.x,D[k+q+5]=o.y,D[k+q+6]=o.z,D[k+q+7]=0),_===!0&&(o.fromBufferAttribute(N,X),D[k+q+8]=o.x,D[k+q+9]=o.y,D[k+q+10]=o.z,D[k+q+11]=N.itemSize===4?o.w:1)}}g={count:x,texture:z,size:new ae(E,v)},r.set(h,g),h.addEventListener("dispose",L)}let f=0;for(let S=0;S<p.length;S++)f+=p[S];let u=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let m=p===void 0?0:p.length,x=i[h.id];if(x===void 0||x.length!==m){x=[];for(let M=0;M<m;M++)x[M]=[M,0];i[h.id]=x}for(let M=0;M<m;M++){let _=x[M];_[0]=M,_[1]=p[M]}x.sort(Lv);for(let M=0;M<8;M++)M<m&&x[M][1]?(a[M][0]=x[M][0],a[M][1]=x[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(Pv);let g=h.morphAttributes.position,f=h.morphAttributes.normal,u=0;for(let M=0;M<8;M++){let _=a[M],R=_[0],b=_[1];R!==Number.MAX_SAFE_INTEGER&&b?(g&&h.getAttribute("morphTarget"+M)!==g[R]&&h.setAttribute("morphTarget"+M,g[R]),f&&h.getAttribute("morphNormal"+M)!==f[R]&&h.setAttribute("morphNormal"+M,f[R]),s[M]=b,u+=b):(g&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),s[M]=0)}let S=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Dv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Ir(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=mf[s];if(r===void 0&&(r=new Float32Array(s),mf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ml(n,e){let t=gf[e];t===void 0&&(t=new Int32Array(e),gf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Uv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function Ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function Fv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;vf.set(i),n.uniformMatrix2fv(this.addr,!1,vf),en(t,i)}}function Bv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;_f.set(i),n.uniformMatrix3fv(this.addr,!1,_f),en(t,i)}}function Hv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(jt(t,i))return;xf.set(i),n.uniformMatrix4fv(this.addr,!1,xf),en(t,i)}}function kv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function Vv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function Wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function Xv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function Yv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function Zv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function $v(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?ap:op;t.setTexture2D(e||r,s)}function Jv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cp,s)}function Kv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hp,s)}function Qv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lp,s)}function jv(n){switch(n){case 5126:return Uv;case 35664:return Nv;case 35665:return Ov;case 35666:return zv;case 35674:return Fv;case 35675:return Bv;case 35676:return Hv;case 5124:case 35670:return kv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return qv;case 36295:return Yv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Qv}}function ey(n,e){n.uniform1fv(this.addr,e)}function ty(n,e){let t=Ir(e,this.size,2);n.uniform2fv(this.addr,t)}function ny(n,e){let t=Ir(e,this.size,3);n.uniform3fv(this.addr,t)}function iy(n,e){let t=Ir(e,this.size,4);n.uniform4fv(this.addr,t)}function sy(n,e){let t=Ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ry(n,e){let t=Ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function oy(n,e){let t=Ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ay(n,e){n.uniform1iv(this.addr,e)}function ly(n,e){n.uniform2iv(this.addr,e)}function cy(n,e){n.uniform3iv(this.addr,e)}function hy(n,e){n.uniform4iv(this.addr,e)}function uy(n,e){n.uniform1uiv(this.addr,e)}function dy(n,e){n.uniform2uiv(this.addr,e)}function fy(n,e){n.uniform3uiv(this.addr,e)}function py(n,e){n.uniform4uiv(this.addr,e)}function my(n,e,t){let i=this.cache,s=e.length,r=ml(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||op,r[o])}function gy(n,e,t){let i=this.cache,s=e.length,r=ml(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||cp,r[o])}function xy(n,e,t){let i=this.cache,s=e.length,r=ml(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hp,r[o])}function _y(n,e,t){let i=this.cache,s=e.length,r=ml(t,s);jt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||lp,r[o])}function vy(n){switch(n){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return sy;case 35675:return ry;case 35676:return oy;case 5124:case 35670:return ay;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return hy;case 5125:return uy;case 36294:return dy;case 36295:return fy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return _y}}function yf(n,e){n.seq.push(e),n.map[e.id]=e}function yy(n,e,t){let i=n.name,s=i.length;for($c.lastIndex=0;;){let r=$c.exec(i),o=$c.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yf(t,c===void 0?new ph(a,n,e):new mh(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new gh(a),yf(t,d)),t=d}}}function Mf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Ey(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function by(n){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n),i;switch(e===t?i="":e===Ua&&t===Da?i="LinearDisplayP3ToLinearSRGB":e===Da&&t===Ua&&(i="LinearSRGBToLinearDisplayP3"),n){case Ii:case pl:return[i,"LinearTransferOETF"];case gt:case tu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Sf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Ey(n.getShaderSource(e),o)}else return s}function wy(n,e){let t=by(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Ty(n,e){let t;switch(e){case Jh:t="Linear";break;case Kh:t="Reinhard";break;case Qh:t="OptimizedCineon";break;case Co:t="ACESFilmic";break;case jh:t="AgX";break;case J0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ay(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function Ry(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(gr).join(`
`)}function Cy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Py(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gr(n){return n!==""}function Ef(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function xh(n){return n.replace(Ly,Dy)}function Dy(n,e){let t=je[e];if(t===void 0){let i=Iy.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xh(t)}function wf(n){return n.replace(Uy,Ny)}function Ny(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Oy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===b0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function zy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case Mr:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fy(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Mr&&(e="ENVMAP_MODE_REFRACTION"),e}function By(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wf:e="ENVMAP_BLENDING_MULTIPLY";break;case Z0:e="ENVMAP_BLENDING_MIX";break;case $0:e="ENVMAP_BLENDING_ADD";break}return e}function Hy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ky(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Oy(t),c=zy(t),h=Fy(t),d=By(t),p=Hy(t),m=t.isWebGL2?"":Ay(t),x=Ry(t),g=Cy(r),f=s.createProgram(),u,S,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),u.length>0&&(u+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),S.length>0&&(S+=`
`)):(u=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),S=[m,Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?je.tonemapping_pars_fragment:"",t.toneMapping!==Ji?Ty("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,wy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=xh(o),o=Ef(o,t),o=bf(o,t),a=xh(a),a=Ef(a,t),a=bf(a,t),o=wf(o),a=wf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let _=M+u+o,R=M+S+a,b=Mf(s,s.VERTEX_SHADER,_),y=Mf(s,s.FRAGMENT_SHADER,R);s.attachShader(f,b),s.attachShader(f,y),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function T(z){if(n.debug.checkShaderErrors){let I=s.getProgramInfoLog(f).trim(),L=s.getShaderInfoLog(b).trim(),A=s.getShaderInfoLog(y).trim(),U=!0,H=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,b,y);else{let N=Sf(s,b,"vertex"),k=Sf(s,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+I+`
`+N+`
`+k)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(L===""||A==="")&&(H=!1);H&&(z.diagnostics={runnable:U,programLog:I,vertexShader:{log:L,prefix:u},fragmentShader:{log:A,prefix:S}})}s.deleteShader(b),s.deleteShader(y),E=new vr(s,f),v=Py(s,f)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(f,My)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=b,this.fragmentShader=y,this}function Vy(n,e,t,i,s,r,o){let a=new Va,l=new _h,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function f(E,v,D,z,I){let L=z.fog,A=I.geometry,U=E.isMeshStandardMaterial?z.environment:null,H=(E.isMeshStandardMaterial?t:e).get(E.envMap||U),N=H&&H.mapping===fl?H.image.height:null,k=x[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let X=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,q=X!==void 0?X.length:0,ie=0;A.morphAttributes.position!==void 0&&(ie=1),A.morphAttributes.normal!==void 0&&(ie=2),A.morphAttributes.color!==void 0&&(ie=3);let G,K,me,ye;if(k){let Ft=ci[k];G=Ft.vertexShader,K=Ft.fragmentShader}else G=E.vertexShader,K=E.fragmentShader,l.update(E),me=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);let pe=n.getRenderTarget(),Ue=I.isInstancedMesh===!0,Fe=I.isBatchedMesh===!0,Te=!!E.map,He=!!E.matcap,B=!!H,ge=!!E.aoMap,ee=!!E.lightMap,fe=!!E.bumpMap,j=!!E.normalMap,Ne=!!E.displacementMap,Se=!!E.emissiveMap,C=!!E.metalnessMap,w=!!E.roughnessMap,V=E.anisotropy>0,ce=E.clearcoat>0,oe=E.iridescence>0,re=E.sheen>0,Ie=E.transmission>0,xe=V&&!!E.anisotropyMap,be=ce&&!!E.clearcoatMap,Be=ce&&!!E.clearcoatNormalMap,Xe=ce&&!!E.clearcoatRoughnessMap,he=oe&&!!E.iridescenceMap,Ke=oe&&!!E.iridescenceThicknessMap,Qe=re&&!!E.sheenColorMap,ke=re&&!!E.sheenRoughnessMap,ze=!!E.specularMap,Re=!!E.specularColorMap,Ze=!!E.specularIntensityMap,ht=Ie&&!!E.transmissionMap,le=Ie&&!!E.thicknessMap,ue=!!E.gradientMap,$=!!E.alphaMap,O=E.alphaTest>0,ne=!!E.alphaHash,se=!!E.extensions,Me=!!A.attributes.uv1,Ee=!!A.attributes.uv2,qe=!!A.attributes.uv3,rt=Ji;return E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(rt=n.toneMapping),{isWebGL2:h,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:K,defines:E.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Fe,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ii,map:Te,matcap:He,envMap:B,envMapMode:B&&H.mapping,envMapCubeUVHeight:N,aoMap:ge,lightMap:ee,bumpMap:fe,normalMap:j,displacementMap:p&&Ne,emissiveMap:Se,normalMapObjectSpace:j&&E.normalMapType===lg,normalMapTangentSpace:j&&E.normalMapType===ep,metalnessMap:C,roughnessMap:w,anisotropy:V,anisotropyMap:xe,clearcoat:ce,clearcoatMap:be,clearcoatNormalMap:Be,clearcoatRoughnessMap:Xe,iridescence:oe,iridescenceMap:he,iridescenceThicknessMap:Ke,sheen:re,sheenColorMap:Qe,sheenRoughnessMap:ke,specularMap:ze,specularColorMap:Re,specularIntensityMap:Ze,transmission:Ie,transmissionMap:ht,thicknessMap:le,gradientMap:ue,opaque:E.transparent===!1&&E.blending===$i,alphaMap:$,alphaTest:O,alphaHash:ne,combine:E.combine,mapUv:Te&&g(E.map.channel),aoMapUv:ge&&g(E.aoMap.channel),lightMapUv:ee&&g(E.lightMap.channel),bumpMapUv:fe&&g(E.bumpMap.channel),normalMapUv:j&&g(E.normalMap.channel),displacementMapUv:Ne&&g(E.displacementMap.channel),emissiveMapUv:Se&&g(E.emissiveMap.channel),metalnessMapUv:C&&g(E.metalnessMap.channel),roughnessMapUv:w&&g(E.roughnessMap.channel),anisotropyMapUv:xe&&g(E.anisotropyMap.channel),clearcoatMapUv:be&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(E.sheenRoughnessMap.channel),specularMapUv:ze&&g(E.specularMap.channel),specularColorMapUv:Re&&g(E.specularColorMap.channel),specularIntensityMapUv:Ze&&g(E.specularIntensityMap.channel),transmissionMapUv:ht&&g(E.transmissionMap.channel),thicknessMapUv:le&&g(E.thicknessMap.channel),alphaMapUv:$&&g(E.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(j||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:Ee,vertexUv3s:qe,pointsUvs:I.isPoints===!0&&!!A.attributes.uv&&(Te||$),fog:!!L,useFog:E.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:rt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&mt.getTransfer(E.map.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bt,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:se&&E.extensions.derivatives===!0,extensionFragDepth:se&&E.extensions.fragDepth===!0,extensionDrawBuffers:se&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){let v=[];if(E.shaderID?v.push(E.shaderID):(v.push(E.customVertexShaderID),v.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)v.push(D),v.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(S(v,E),M(v,E),v.push(n.outputColorSpace)),v.push(E.customProgramCacheKey),v.join()}function S(E,v){E.push(v.precision),E.push(v.outputColorSpace),E.push(v.envMapMode),E.push(v.envMapCubeUVHeight),E.push(v.mapUv),E.push(v.alphaMapUv),E.push(v.lightMapUv),E.push(v.aoMapUv),E.push(v.bumpMapUv),E.push(v.normalMapUv),E.push(v.displacementMapUv),E.push(v.emissiveMapUv),E.push(v.metalnessMapUv),E.push(v.roughnessMapUv),E.push(v.anisotropyMapUv),E.push(v.clearcoatMapUv),E.push(v.clearcoatNormalMapUv),E.push(v.clearcoatRoughnessMapUv),E.push(v.iridescenceMapUv),E.push(v.iridescenceThicknessMapUv),E.push(v.sheenColorMapUv),E.push(v.sheenRoughnessMapUv),E.push(v.specularMapUv),E.push(v.specularColorMapUv),E.push(v.specularIntensityMapUv),E.push(v.transmissionMapUv),E.push(v.thicknessMapUv),E.push(v.combine),E.push(v.fogExp2),E.push(v.sizeAttenuation),E.push(v.morphTargetsCount),E.push(v.morphAttributeCount),E.push(v.numDirLights),E.push(v.numPointLights),E.push(v.numSpotLights),E.push(v.numSpotLightMaps),E.push(v.numHemiLights),E.push(v.numRectAreaLights),E.push(v.numDirLightShadows),E.push(v.numPointLightShadows),E.push(v.numSpotLightShadows),E.push(v.numSpotLightShadowsWithMaps),E.push(v.numLightProbes),E.push(v.shadowMapType),E.push(v.toneMapping),E.push(v.numClippingPlanes),E.push(v.numClipIntersection),E.push(v.depthPacking)}function M(E,v){a.disableAll(),v.isWebGL2&&a.enable(0),v.supportsVertexTextures&&a.enable(1),v.instancing&&a.enable(2),v.instancingColor&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),E.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function _(E){let v=x[E.type],D;if(v){let z=ci[v];D=ns.clone(z.uniforms)}else D=E.uniforms;return D}function R(E,v){let D;for(let z=0,I=c.length;z<I;z++){let L=c[z];if(L.cacheKey===v){D=L,++D.usedTimes;break}}return D===void 0&&(D=new ky(n,v,E,r),c.push(D)),D}function b(E){if(--E.usedTimes===0){let v=c.indexOf(E);c[v]=c[c.length-1],c.pop(),E.destroy()}}function y(E){l.remove(E)}function T(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:_,acquireProgram:R,releaseProgram:b,releaseShaderCache:y,programs:c,dispose:T}}function Wy(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Xy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,p,m,x,g,f){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:m,groupOrder:x,renderOrder:d.renderOrder,z:g,group:f},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=m,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=g,u.group=f),e++,u}function a(d,p,m,x,g,f){let u=o(d,p,m,x,g,f);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,p,m,x,g,f){let u=o(d,p,m,x,g,f);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||Xy),i.length>1&&i.sort(p||Af),s.length>1&&s.sort(p||Af)}function h(){for(let d=e,p=n.length;d<p;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function qy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Rf,n.set(i,[o])):s>=r.length?(o=new Rf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Yy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Pe};break;case"SpotLight":t={position:new F,direction:new F,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Zy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Jy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ky(n,e){let t=new Yy,i=Zy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new ut,a=new ut;function l(h,d){let p=0,m=0,x=0;for(let z=0;z<9;z++)s.probe[z].set(0,0,0);let g=0,f=0,u=0,S=0,M=0,_=0,R=0,b=0,y=0,T=0,E=0;h.sort(Jy);let v=d===!0?Math.PI:1;for(let z=0,I=h.length;z<I;z++){let L=h[z],A=L.color,U=L.intensity,H=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=A.r*U*v,m+=A.g*U*v,x+=A.b*U*v;else if(L.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(L.sh.coefficients[k],U);E++}else if(L.isDirectionalLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*v),L.castShadow){let X=L.shadow,q=i.get(L);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,s.directionalShadow[g]=q,s.directionalShadowMap[g]=N,s.directionalShadowMatrix[g]=L.shadow.matrix,_++}s.directional[g]=k,g++}else if(L.isSpotLight){let k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(A).multiplyScalar(U*v),k.distance=H,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,s.spot[u]=k;let X=L.shadow;if(L.map&&(s.spotLightMap[y]=L.map,y++,X.updateMatrices(L),L.castShadow&&T++),s.spotLightMatrix[u]=X.matrix,L.castShadow){let q=i.get(L);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,s.spotShadow[u]=q,s.spotShadowMap[u]=N,b++}u++}else if(L.isRectAreaLight){let k=t.get(L);k.color.copy(A).multiplyScalar(U),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),s.rectArea[S]=k,S++}else if(L.isPointLight){let k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity*v),k.distance=L.distance,k.decay=L.decay,L.castShadow){let X=L.shadow,q=i.get(L);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,s.pointShadow[f]=q,s.pointShadowMap[f]=N,s.pointShadowMatrix[f]=L.shadow.matrix,R++}s.point[f]=k,f++}else if(L.isHemisphereLight){let k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(U*v),k.groundColor.copy(L.groundColor).multiplyScalar(U*v),s.hemi[M]=k,M++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=x;let D=s.hash;(D.directionalLength!==g||D.pointLength!==f||D.spotLength!==u||D.rectAreaLength!==S||D.hemiLength!==M||D.numDirectionalShadows!==_||D.numPointShadows!==R||D.numSpotShadows!==b||D.numSpotMaps!==y||D.numLightProbes!==E)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=S,s.point.length=f,s.hemi.length=M,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=b+y-T,s.spotLightMap.length=y,s.numSpotLightShadowsWithMaps=T,s.numLightProbes=E,D.directionalLength=g,D.pointLength=f,D.spotLength=u,D.rectAreaLength=S,D.hemiLength=M,D.numDirectionalShadows=_,D.numPointShadows=R,D.numSpotShadows=b,D.numSpotMaps=y,D.numLightProbes=E,s.version=$y++)}function c(h,d){let p=0,m=0,x=0,g=0,f=0,u=d.matrixWorldInverse;for(let S=0,M=h.length;S<M;S++){let _=h[S];if(_.isDirectionalLight){let R=s.directional[p];R.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),p++}else if(_.isSpotLight){let R=s.spot[x];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),x++}else if(_.isRectAreaLight){let R=s.rectArea[g];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(_.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(_.width*.5,0,0),R.halfHeight.set(0,_.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let R=s.point[m];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),m++}else if(_.isHemisphereLight){let R=s.hemi[f];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:s}}function Cf(n,e){let t=new Ky(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Qy(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Cf(n,e),t.set(r,[l])):o>=a.length?(l=new Cf(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function tM(n,e,t){let i=new vo,s=new ae,r=new ae,o=new Pt,a=new yh({depthPacking:ag}),l=new Mh,c={},h=t.maxTextureSize,d={[Qi]:rn,[rn]:Qi,[bt]:bt},p=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:jy,fragmentShader:eM}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new $t;x.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new te(x,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let u=this.type;this.render=function(b,y,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;let E=n.getRenderTarget(),v=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(hi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let I=u!==Ti&&this.type===Ti,L=u===Ti&&this.type!==Ti;for(let A=0,U=b.length;A<U;A++){let H=b[A],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let k=N.getFrameExtents();if(s.multiply(k),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,N.mapSize.y=r.y)),N.map===null||I===!0||L===!0){let q=this.type!==Ti?{minFilter:Sn,magFilter:Sn}:{};N.map!==null&&N.map.dispose(),N.map=new En(s.x,s.y,q),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();let X=N.getViewportCount();for(let q=0;q<X;q++){let ie=N.getViewport(q);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),z.viewport(o),N.updateMatrices(H,q),i=N.getFrustum(),_(y,T,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===Ti&&S(N,T),N.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(E,v,D)};function S(b,y){let T=e.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new En(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(y,null,T,p,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(y,null,T,m,g,null)}function M(b,y,T,E){let v=null,D=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)v=D;else if(v=T.isPointLight===!0?l:a,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){let z=v.uuid,I=y.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let A=L[I];A===void 0&&(A=v.clone(),L[I]=A,y.addEventListener("dispose",R)),v=A}if(v.visible=y.visible,v.wireframe=y.wireframe,E===Ti?v.side=y.shadowSide!==null?y.shadowSide:y.side:v.side=y.shadowSide!==null?y.shadowSide:d[y.side],v.alphaMap=y.alphaMap,v.alphaTest=y.alphaTest,v.map=y.map,v.clipShadows=y.clipShadows,v.clippingPlanes=y.clippingPlanes,v.clipIntersection=y.clipIntersection,v.displacementMap=y.displacementMap,v.displacementScale=y.displacementScale,v.displacementBias=y.displacementBias,v.wireframeLinewidth=y.wireframeLinewidth,v.linewidth=y.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let z=n.properties.get(v);z.light=T}return v}function _(b,y,T,E,v){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===Ti)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);let I=e.update(b),L=b.material;if(Array.isArray(L)){let A=I.groups;for(let U=0,H=A.length;U<H;U++){let N=A[U],k=L[N.materialIndex];if(k&&k.visible){let X=M(b,k,E,v);b.onBeforeShadow(n,b,y,T,I,X,N),n.renderBufferDirect(T,null,I,X,b,N),b.onAfterShadow(n,b,y,T,I,X,N)}}}else if(L.visible){let A=M(b,L,E,v);b.onBeforeShadow(n,b,y,T,I,A,null),n.renderBufferDirect(T,null,I,A,b,null),b.onAfterShadow(n,b,y,T,I,A,null)}}let z=b.children;for(let I=0,L=z.length;I<L;I++)_(z[I],y,T,E,v)}function R(b){b.target.removeEventListener("dispose",R);for(let T in c){let E=c[T],v=b.target.uuid;v in E&&(E[v].dispose(),delete E[v])}}}function nM(n,e,t){let i=t.isWebGL2;function s(){let O=!1,ne=new Pt,se=null,Me=new Pt(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!O&&(n.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,qe,rt,xt,Ft){Ft===!0&&(Ee*=xt,qe*=xt,rt*=xt),ne.set(Ee,qe,rt,xt),Me.equals(ne)===!1&&(n.clearColor(Ee,qe,rt,xt),Me.copy(ne))},reset:function(){O=!1,se=null,Me.set(-1,0,0,0)}}}function r(){let O=!1,ne=null,se=null,Me=null;return{setTest:function(Ee){Ee?Fe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Ee){ne!==Ee&&!O&&(n.depthMask(Ee),ne=Ee)},setFunc:function(Ee){if(se!==Ee){switch(Ee){case k0:n.depthFunc(n.NEVER);break;case G0:n.depthFunc(n.ALWAYS);break;case V0:n.depthFunc(n.LESS);break;case Ca:n.depthFunc(n.LEQUAL);break;case W0:n.depthFunc(n.EQUAL);break;case X0:n.depthFunc(n.GEQUAL);break;case q0:n.depthFunc(n.GREATER);break;case Y0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){Me!==Ee&&(n.clearDepth(Ee),Me=Ee)},reset:function(){O=!1,ne=null,se=null,Me=null}}}function o(){let O=!1,ne=null,se=null,Me=null,Ee=null,qe=null,rt=null,xt=null,Ft=null;return{setTest:function(Ye){O||(Ye?Fe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Ye){ne!==Ye&&!O&&(n.stencilMask(Ye),ne=Ye)},setFunc:function(Ye,pt,vn){(se!==Ye||Me!==pt||Ee!==vn)&&(n.stencilFunc(Ye,pt,vn),se=Ye,Me=pt,Ee=vn)},setOp:function(Ye,pt,vn){(qe!==Ye||rt!==pt||xt!==vn)&&(n.stencilOp(Ye,pt,vn),qe=Ye,rt=pt,xt=vn)},setLocked:function(Ye){O=Ye},setClear:function(Ye){Ft!==Ye&&(n.clearStencil(Ye),Ft=Ye)},reset:function(){O=!1,ne=null,se=null,Me=null,Ee=null,qe=null,rt=null,xt=null,Ft=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,p={},m={},x=new WeakMap,g=[],f=null,u=!1,S=null,M=null,_=null,R=null,b=null,y=null,T=null,E=new Pe(0,0,0),v=0,D=!1,z=null,I=null,L=null,A=null,U=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,k=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=k>=2);let q=null,ie={},G=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),me=new Pt().fromArray(G),ye=new Pt().fromArray(K);function pe(O,ne,se,Me){let Ee=new Uint8Array(4),qe=n.createTexture();n.bindTexture(O,qe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let rt=0;rt<se;rt++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(ne,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(ne+rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return qe}let Ue={};Ue[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc(Ca),Se(!1),C(cd),Fe(n.CULL_FACE),j(hi);function Fe(O){p[O]!==!0&&(n.enable(O),p[O]=!0)}function Te(O){p[O]!==!1&&(n.disable(O),p[O]=!1)}function He(O,ne){return m[O]!==ne?(n.bindFramebuffer(O,ne),m[O]=ne,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ne),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ne)),!0):!1}function B(O,ne){let se=g,Me=!1;if(O)if(se=x.get(ne),se===void 0&&(se=[],x.set(ne,se)),O.isWebGLMultipleRenderTargets){let Ee=O.texture;if(se.length!==Ee.length||se[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,rt=Ee.length;qe<rt;qe++)se[qe]=n.COLOR_ATTACHMENT0+qe;se.length=Ee.length,Me=!0}}else se[0]!==n.COLOR_ATTACHMENT0&&(se[0]=n.COLOR_ATTACHMENT0,Me=!0);else se[0]!==n.BACK&&(se[0]=n.BACK,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function ge(O){return f!==O?(n.useProgram(O),f=O,!0):!1}let ee={[Ss]:n.FUNC_ADD,[T0]:n.FUNC_SUBTRACT,[A0]:n.FUNC_REVERSE_SUBTRACT};if(i)ee[dd]=n.MIN,ee[fd]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(ee[dd]=O.MIN_EXT,ee[fd]=O.MAX_EXT)}let fe={[R0]:n.ZERO,[C0]:n.ONE,[P0]:n.SRC_COLOR,[nh]:n.SRC_ALPHA,[O0]:n.SRC_ALPHA_SATURATE,[U0]:n.DST_COLOR,[I0]:n.DST_ALPHA,[L0]:n.ONE_MINUS_SRC_COLOR,[ih]:n.ONE_MINUS_SRC_ALPHA,[N0]:n.ONE_MINUS_DST_COLOR,[D0]:n.ONE_MINUS_DST_ALPHA,[z0]:n.CONSTANT_COLOR,[F0]:n.ONE_MINUS_CONSTANT_COLOR,[B0]:n.CONSTANT_ALPHA,[H0]:n.ONE_MINUS_CONSTANT_ALPHA};function j(O,ne,se,Me,Ee,qe,rt,xt,Ft,Ye){if(O===hi){u===!0&&(Te(n.BLEND),u=!1);return}if(u===!1&&(Fe(n.BLEND),u=!0),O!==w0){if(O!==S||Ye!==D){if((M!==Ss||b!==Ss)&&(n.blendEquation(n.FUNC_ADD),M=Ss,b=Ss),Ye)switch(O){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zt:n.blendFunc(n.ONE,n.ONE);break;case hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ud:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,R=null,y=null,T=null,E.set(0,0,0),v=0,S=O,D=Ye}return}Ee=Ee||ne,qe=qe||se,rt=rt||Me,(ne!==M||Ee!==b)&&(n.blendEquationSeparate(ee[ne],ee[Ee]),M=ne,b=Ee),(se!==_||Me!==R||qe!==y||rt!==T)&&(n.blendFuncSeparate(fe[se],fe[Me],fe[qe],fe[rt]),_=se,R=Me,y=qe,T=rt),(xt.equals(E)===!1||Ft!==v)&&(n.blendColor(xt.r,xt.g,xt.b,Ft),E.copy(xt),v=Ft),S=O,D=!1}function Ne(O,ne){O.side===bt?Te(n.CULL_FACE):Fe(n.CULL_FACE);let se=O.side===rn;ne&&(se=!se),Se(se),O.blending===$i&&O.transparent===!1?j(hi):j(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);let Me=O.stencilWrite;c.setTest(Me),Me&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),V(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(O){z!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),z=O)}function C(O){O!==S0?(Fe(n.CULL_FACE),O!==I&&(O===cd?n.cullFace(n.BACK):O===E0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),I=O}function w(O){O!==L&&(N&&n.lineWidth(O),L=O)}function V(O,ne,se){O?(Fe(n.POLYGON_OFFSET_FILL),(A!==ne||U!==se)&&(n.polygonOffset(ne,se),A=ne,U=se)):Te(n.POLYGON_OFFSET_FILL)}function ce(O){O?Fe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function oe(O){O===void 0&&(O=n.TEXTURE0+H-1),q!==O&&(n.activeTexture(O),q=O)}function re(O,ne,se){se===void 0&&(q===null?se=n.TEXTURE0+H-1:se=q);let Me=ie[se];Me===void 0&&(Me={type:void 0,texture:void 0},ie[se]=Me),(Me.type!==O||Me.texture!==ne)&&(q!==se&&(n.activeTexture(se),q=se),n.bindTexture(O,ne||Ue[O]),Me.type=O,Me.texture=ne)}function Ie(){let O=ie[q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ze(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(O){me.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),me.copy(O))}function ht(O){ye.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ye.copy(O))}function le(O,ne){let se=d.get(ne);se===void 0&&(se=new WeakMap,d.set(ne,se));let Me=se.get(O);Me===void 0&&(Me=n.getUniformBlockIndex(ne,O.name),se.set(O,Me))}function ue(O,ne){let Me=d.get(ne).get(O);h.get(ne)!==Me&&(n.uniformBlockBinding(ne,Me,O.__bindingPointIndex),h.set(ne,Me))}function $(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},q=null,ie={},m={},x=new WeakMap,g=[],f=null,u=!1,S=null,M=null,_=null,R=null,b=null,y=null,T=null,E=new Pe(0,0,0),v=0,D=!1,z=null,I=null,L=null,A=null,U=null,me.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Te,bindFramebuffer:He,drawBuffers:B,useProgram:ge,setBlending:j,setMaterial:Ne,setFlipSided:Se,setCullFace:C,setLineWidth:w,setPolygonOffset:V,setScissorTest:ce,activeTexture:oe,bindTexture:re,unbindTexture:Ie,compressedTexImage2D:xe,compressedTexImage3D:be,texImage2D:ze,texImage3D:Re,updateUBOMapping:le,uniformBlockBinding:ue,texStorage2D:Qe,texStorage3D:ke,texSubImage2D:Be,texSubImage3D:Xe,compressedTexSubImage2D:he,compressedTexSubImage3D:Ke,scissor:Ze,viewport:ht,reset:$}}function iM(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,w){return m?new OffscreenCanvas(C,w):za("canvas")}function g(C,w,V,ce){let oe=1;if((C.width>ce||C.height>ce)&&(oe=ce/Math.max(C.width,C.height)),oe<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let re=w?ch:Math.floor,Ie=re(oe*C.width),xe=re(oe*C.height);d===void 0&&(d=x(Ie,xe));let be=V?x(Ie,xe):d;return be.width=Ie,be.height=xe,be.getContext("2d").drawImage(C,0,0,Ie,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Ie+"x"+xe+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function f(C){return Xd(C.width)&&Xd(C.height)}function u(C){return a?!1:C.wrapS!==ei||C.wrapT!==ei||C.minFilter!==Sn&&C.minFilter!==Vn}function S(C,w){return C.generateMipmaps&&w&&C.minFilter!==Sn&&C.minFilter!==Vn}function M(C){n.generateMipmap(C)}function _(C,w,V,ce,oe=!1){if(a===!1)return w;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let re=w;if(w===n.RED&&(V===n.FLOAT&&(re=n.R32F),V===n.HALF_FLOAT&&(re=n.R16F),V===n.UNSIGNED_BYTE&&(re=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(re=n.R8UI),V===n.UNSIGNED_SHORT&&(re=n.R16UI),V===n.UNSIGNED_INT&&(re=n.R32UI),V===n.BYTE&&(re=n.R8I),V===n.SHORT&&(re=n.R16I),V===n.INT&&(re=n.R32I)),w===n.RG&&(V===n.FLOAT&&(re=n.RG32F),V===n.HALF_FLOAT&&(re=n.RG16F),V===n.UNSIGNED_BYTE&&(re=n.RG8)),w===n.RGBA){let Ie=oe?Ia:mt.getTransfer(ce);V===n.FLOAT&&(re=n.RGBA32F),V===n.HALF_FLOAT&&(re=n.RGBA16F),V===n.UNSIGNED_BYTE&&(re=Ie===vt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(C,w,V){return S(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Sn&&C.minFilter!==Vn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){return C===Sn||C===pd||C===vc?n.NEAREST:n.LINEAR}function y(C){let w=C.target;w.removeEventListener("dispose",y),E(w),w.isVideoTexture&&h.delete(w)}function T(C){let w=C.target;w.removeEventListener("dispose",T),D(w)}function E(C){let w=i.get(C);if(w.__webglInit===void 0)return;let V=C.source,ce=p.get(V);if(ce){let oe=ce[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&v(C),Object.keys(ce).length===0&&p.delete(V)}i.remove(C)}function v(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let V=C.source,ce=p.get(V);delete ce[w.__cacheKey],o.memory.textures--}function D(C){let w=C.texture,V=i.get(C),ce=i.get(w);if(ce.__webglTexture!==void 0&&(n.deleteTexture(ce.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(V.__webglFramebuffer[oe]))for(let re=0;re<V.__webglFramebuffer[oe].length;re++)n.deleteFramebuffer(V.__webglFramebuffer[oe][re]);else n.deleteFramebuffer(V.__webglFramebuffer[oe]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[oe])}else{if(Array.isArray(V.__webglFramebuffer))for(let oe=0;oe<V.__webglFramebuffer.length;oe++)n.deleteFramebuffer(V.__webglFramebuffer[oe]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let oe=0;oe<V.__webglColorRenderbuffer.length;oe++)V.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[oe]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let oe=0,re=w.length;oe<re;oe++){let Ie=i.get(w[oe]);Ie.__webglTexture&&(n.deleteTexture(Ie.__webglTexture),o.memory.textures--),i.remove(w[oe])}i.remove(w),i.remove(C)}let z=0;function I(){z=0}function L(){let C=z;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function A(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function U(C,w){let V=i.get(C);if(C.isVideoTexture&&Ne(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let ce=C.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,C,w);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function H(C,w){let V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function N(C,w){let V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function k(C,w){let V=i.get(C);if(C.version>0&&V.__version!==C.version){ye(V,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}let X={[Li]:n.REPEAT,[ei]:n.CLAMP_TO_EDGE,[oh]:n.MIRRORED_REPEAT},q={[Sn]:n.NEAREST,[pd]:n.NEAREST_MIPMAP_NEAREST,[vc]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[K0]:n.LINEAR_MIPMAP_NEAREST,[_o]:n.LINEAR_MIPMAP_LINEAR},ie={[cg]:n.NEVER,[mg]:n.ALWAYS,[hg]:n.LESS,[tp]:n.LEQUAL,[ug]:n.EQUAL,[pg]:n.GEQUAL,[dg]:n.GREATER,[fg]:n.NOTEQUAL};function G(C,w,V){if(V?(n.texParameteri(C,n.TEXTURE_WRAP_S,X[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,X[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,X[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,q[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,q[w.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==ei||w.wrapT!==ei)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,b(w.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==Sn&&w.minFilter!==Vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ce=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Sn||w.minFilter!==vc&&w.minFilter!==_o||w.type===Zi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ni&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(C,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function K(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",y));let ce=w.source,oe=p.get(ce);oe===void 0&&(oe={},p.set(ce,oe));let re=A(w);if(re!==C.__cacheKey){oe[re]===void 0&&(oe[re]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),oe[re].usedTimes++;let Ie=oe[C.__cacheKey];Ie!==void 0&&(oe[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&v(w)),C.__cacheKey=re,C.__webglTexture=oe[re].texture}return V}function me(C,w,V){let ce=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ce=n.TEXTURE_3D);let oe=K(C,w),re=w.source;t.bindTexture(ce,C.__webglTexture,n.TEXTURE0+V);let Ie=i.get(re);if(re.version!==Ie.__version||oe===!0){t.activeTexture(n.TEXTURE0+V);let xe=mt.getPrimaries(mt.workingColorSpace),be=w.colorSpace===Wn?null:mt.getPrimaries(w.colorSpace),Be=w.colorSpace===Wn||xe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Xe=u(w)&&f(w.image)===!1,he=g(w.image,Xe,!1,s.maxTextureSize);he=Se(w,he);let Ke=f(he)||a,Qe=r.convert(w.format,w.colorSpace),ke=r.convert(w.type),ze=_(w.internalFormat,Qe,ke,w.colorSpace,w.isVideoTexture);G(ce,w,Ke);let Re,Ze=w.mipmaps,ht=a&&w.isVideoTexture!==!0&&ze!==Qf,le=Ie.__version===void 0||oe===!0,ue=R(w,he,Ke);if(w.isDepthTexture)ze=n.DEPTH_COMPONENT,a?w.type===Zi?ze=n.DEPTH_COMPONENT32F:w.type===Yi?ze=n.DEPTH_COMPONENT24:w.type===ws?ze=n.DEPTH24_STENCIL8:ze=n.DEPTH_COMPONENT16:w.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ts&&ze===n.DEPTH_COMPONENT&&w.type!==eu&&w.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Yi,ke=r.convert(w.type)),w.format===Sr&&ze===n.DEPTH_COMPONENT&&(ze=n.DEPTH_STENCIL,w.type!==ws&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ws,ke=r.convert(w.type))),le&&(ht?t.texStorage2D(n.TEXTURE_2D,1,ze,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ze,he.width,he.height,0,Qe,ke,null));else if(w.isDataTexture)if(Ze.length>0&&Ke){ht&&le&&t.texStorage2D(n.TEXTURE_2D,ue,ze,Ze[0].width,Ze[0].height);for(let $=0,O=Ze.length;$<O;$++)Re=Ze[$],ht?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,Qe,ke,Re.data):t.texImage2D(n.TEXTURE_2D,$,ze,Re.width,Re.height,0,Qe,ke,Re.data);w.generateMipmaps=!1}else ht?(le&&t.texStorage2D(n.TEXTURE_2D,ue,ze,he.width,he.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Qe,ke,he.data)):t.texImage2D(n.TEXTURE_2D,0,ze,he.width,he.height,0,Qe,ke,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ht&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ze,Ze[0].width,Ze[0].height,he.depth);for(let $=0,O=Ze.length;$<O;$++)Re=Ze[$],w.format!==ti?Qe!==null?ht?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,he.depth,Qe,Re.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,ze,Re.width,Re.height,he.depth,0,Re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Re.width,Re.height,he.depth,Qe,ke,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,ze,Re.width,Re.height,he.depth,0,Qe,ke,Re.data)}else{ht&&le&&t.texStorage2D(n.TEXTURE_2D,ue,ze,Ze[0].width,Ze[0].height);for(let $=0,O=Ze.length;$<O;$++)Re=Ze[$],w.format!==ti?Qe!==null?ht?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,Qe,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,$,ze,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Re.width,Re.height,Qe,ke,Re.data):t.texImage2D(n.TEXTURE_2D,$,ze,Re.width,Re.height,0,Qe,ke,Re.data)}else if(w.isDataArrayTexture)ht?(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ue,ze,he.width,he.height,he.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Qe,ke,he.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,he.width,he.height,he.depth,0,Qe,ke,he.data);else if(w.isData3DTexture)ht?(le&&t.texStorage3D(n.TEXTURE_3D,ue,ze,he.width,he.height,he.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Qe,ke,he.data)):t.texImage3D(n.TEXTURE_3D,0,ze,he.width,he.height,he.depth,0,Qe,ke,he.data);else if(w.isFramebufferTexture){if(le)if(ht)t.texStorage2D(n.TEXTURE_2D,ue,ze,he.width,he.height);else{let $=he.width,O=he.height;for(let ne=0;ne<ue;ne++)t.texImage2D(n.TEXTURE_2D,ne,ze,$,O,0,Qe,ke,null),$>>=1,O>>=1}}else if(Ze.length>0&&Ke){ht&&le&&t.texStorage2D(n.TEXTURE_2D,ue,ze,Ze[0].width,Ze[0].height);for(let $=0,O=Ze.length;$<O;$++)Re=Ze[$],ht?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Qe,ke,Re):t.texImage2D(n.TEXTURE_2D,$,ze,Qe,ke,Re);w.generateMipmaps=!1}else ht?(le&&t.texStorage2D(n.TEXTURE_2D,ue,ze,he.width,he.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,ke,he)):t.texImage2D(n.TEXTURE_2D,0,ze,Qe,ke,he);S(w,Ke)&&M(ce),Ie.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ye(C,w,V){if(w.image.length!==6)return;let ce=K(C,w),oe=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);let re=i.get(oe);if(oe.version!==re.__version||ce===!0){t.activeTexture(n.TEXTURE0+V);let Ie=mt.getPrimaries(mt.workingColorSpace),xe=w.colorSpace===Wn?null:mt.getPrimaries(w.colorSpace),be=w.colorSpace===Wn||Ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Be=w.isCompressedTexture||w.image[0].isCompressedTexture,Xe=w.image[0]&&w.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Be&&!Xe?he[$]=g(w.image[$],!1,!0,s.maxCubemapSize):he[$]=Xe?w.image[$].image:w.image[$],he[$]=Se(w,he[$]);let Ke=he[0],Qe=f(Ke)||a,ke=r.convert(w.format,w.colorSpace),ze=r.convert(w.type),Re=_(w.internalFormat,ke,ze,w.colorSpace),Ze=a&&w.isVideoTexture!==!0,ht=re.__version===void 0||ce===!0,le=R(w,Ke,Qe);G(n.TEXTURE_CUBE_MAP,w,Qe);let ue;if(Be){Ze&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Re,Ke.width,Ke.height);for(let $=0;$<6;$++){ue=he[$].mipmaps;for(let O=0;O<ue.length;O++){let ne=ue[O];w.format!==ti?ke!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O,0,0,ne.width,ne.height,ke,ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O,Re,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O,0,0,ne.width,ne.height,ke,ze,ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O,Re,ne.width,ne.height,0,ke,ze,ne.data)}}}else{ue=w.mipmaps,Ze&&ht&&(ue.length>0&&le++,t.texStorage2D(n.TEXTURE_CUBE_MAP,le,Re,he[0].width,he[0].height));for(let $=0;$<6;$++)if(Xe){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,ke,ze,he[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Re,he[$].width,he[$].height,0,ke,ze,he[$].data);for(let O=0;O<ue.length;O++){let se=ue[O].image[$].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O+1,0,0,se.width,se.height,ke,ze,se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O+1,Re,se.width,se.height,0,ke,ze,se.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ke,ze,he[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Re,ke,ze,he[$]);for(let O=0;O<ue.length;O++){let ne=ue[O];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O+1,0,0,ke,ze,ne.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O+1,Re,ke,ze,ne.image[$])}}}S(w,Qe)&&M(n.TEXTURE_CUBE_MAP),re.__version=oe.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function pe(C,w,V,ce,oe,re){let Ie=r.convert(V.format,V.colorSpace),xe=r.convert(V.type),be=_(V.internalFormat,Ie,xe,V.colorSpace);if(!i.get(w).__hasExternalTextures){let Xe=Math.max(1,w.width>>re),he=Math.max(1,w.height>>re);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,re,be,Xe,he,w.depth,0,Ie,xe,null):t.texImage2D(oe,re,be,Xe,he,0,Ie,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),j(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,oe,i.get(V).__webglTexture,0,fe(w)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,oe,i.get(V).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let ce=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||j(w)){let oe=w.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Zi?ce=n.DEPTH_COMPONENT32F:oe.type===Yi&&(ce=n.DEPTH_COMPONENT24));let re=fe(w);j(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,ce,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,ce,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ce,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let ce=fe(w);V&&j(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,w.width,w.height):j(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let ce=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let oe=0;oe<ce.length;oe++){let re=ce[oe],Ie=r.convert(re.format,re.colorSpace),xe=r.convert(re.type),be=_(re.internalFormat,Ie,xe,re.colorSpace),Be=fe(w);V&&j(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,be,w.width,w.height):j(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,be,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,be,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);let ce=i.get(w.depthTexture).__webglTexture,oe=fe(w);if(w.depthTexture.format===Ts)j(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ce,0);else if(w.depthTexture.format===Sr)j(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Te(C){let w=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Fe(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ce]),w.__webglDepthbuffer[ce]=n.createRenderbuffer(),Ue(w.__webglDepthbuffer[ce],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Ue(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,w,V){let ce=i.get(C);w!==void 0&&pe(ce.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Te(C)}function B(C){let w=C.texture,V=i.get(C),ce=i.get(w);C.addEventListener("dispose",T),C.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=w.version,o.memory.textures++);let oe=C.isWebGLCubeRenderTarget===!0,re=C.isWebGLMultipleRenderTargets===!0,Ie=f(C)||a;if(oe){V.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[xe]=[];for(let be=0;be<w.mipmaps.length;be++)V.__webglFramebuffer[xe][be]=n.createFramebuffer()}else V.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)V.__webglFramebuffer[xe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(re)if(s.drawBuffers){let xe=C.texture;for(let be=0,Be=xe.length;be<Be;be++){let Xe=i.get(xe[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&j(C)===!1){let xe=re?w:[w];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){let Be=xe[be];V.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[be]);let Xe=r.convert(Be.format,Be.colorSpace),he=r.convert(Be.type),Ke=_(Be.internalFormat,Xe,he,Be.colorSpace,C.isXRRenderTarget===!0),Qe=fe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Ke,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,V.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),G(n.TEXTURE_CUBE_MAP,w,Ie);for(let xe=0;xe<6;xe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)pe(V.__webglFramebuffer[xe][be],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else pe(V.__webglFramebuffer[xe],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);S(w,Ie)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){let xe=C.texture;for(let be=0,Be=xe.length;be<Be;be++){let Xe=xe[be],he=i.get(Xe);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),G(n.TEXTURE_2D,Xe,Ie),pe(V.__webglFramebuffer,C,Xe,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),S(Xe,Ie)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,ce.__webglTexture),G(xe,w,Ie),a&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)pe(V.__webglFramebuffer[be],C,w,n.COLOR_ATTACHMENT0,xe,be);else pe(V.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,xe,0);S(w,Ie)&&M(xe),t.unbindTexture()}C.depthBuffer&&Te(C)}function ge(C){let w=f(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ce=0,oe=V.length;ce<oe;ce++){let re=V[ce];if(S(re,w)){let Ie=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(re).__webglTexture;t.bindTexture(Ie,xe),M(Ie),t.unbindTexture()}}}function ee(C){if(a&&C.samples>0&&j(C)===!1){let w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,ce=C.height,oe=n.COLOR_BUFFER_BIT,re=[],Ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),be=C.isWebGLMultipleRenderTargets===!0;if(be)for(let Be=0;Be<w.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){re.push(n.COLOR_ATTACHMENT0+Be),C.depthBuffer&&re.push(Ie);let Xe=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Xe===!1&&(C.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Be]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ie]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ie])),be){let he=i.get(w[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,V,ce,0,0,V,ce,oe,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Be=0;Be<w.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Be]);let Xe=i.get(w[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function fe(C){return Math.min(s.maxSamples,C.samples)}function j(C){let w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ne(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Se(C,w){let V=C.colorSpace,ce=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===lh||V!==Ii&&V!==Wn&&(mt.getTransfer(V)===vt?a===!1?e.has("EXT_sRGB")===!0&&ce===ti?(C.format=lh,C.minFilter=Vn,C.generateMipmaps=!1):w=Fa.sRGBToLinear(w):(ce!==ti||oe!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=L,this.resetTextureUnits=I,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=N,this.setTextureCube=k,this.rebindTextures=He,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=j}function sM(n,e,t){let i=t.isWebGL2;function s(r,o=Wn){let a,l=mt.getTransfer(o);if(r===Ki)return n.UNSIGNED_BYTE;if(r===Yf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Zf)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Q0)return n.BYTE;if(r===j0)return n.SHORT;if(r===eu)return n.UNSIGNED_SHORT;if(r===qf)return n.INT;if(r===Yi)return n.UNSIGNED_INT;if(r===Zi)return n.FLOAT;if(r===ni)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===eg)return n.ALPHA;if(r===ti)return n.RGBA;if(r===tg)return n.LUMINANCE;if(r===ng)return n.LUMINANCE_ALPHA;if(r===Ts)return n.DEPTH_COMPONENT;if(r===Sr)return n.DEPTH_STENCIL;if(r===lh)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ig)return n.RED;if(r===$f)return n.RED_INTEGER;if(r===sg)return n.RG;if(r===Jf)return n.RG_INTEGER;if(r===Kf)return n.RGBA_INTEGER;if(r===yc||r===Mc||r===Sc||r===Ec)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===yc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===yc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===md||r===gd||r===xd||r===_d)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===md)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===xd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===_d)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===vd||r===yd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===vd)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===yd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Md||r===Sd||r===Ed||r===bd||r===wd||r===Td||r===Ad||r===Rd||r===Cd||r===Pd||r===Ld||r===Id||r===Dd||r===Ud)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Md)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Sd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ed)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Td)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ad)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Rd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Cd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Pd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ld)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Id)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ud)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bc||r===Nd||r===Od)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===bc)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Od)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rg||r===zd||r===Fd||r===Bd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===bc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===zd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Fd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ws?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function oM(n,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,sp(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,S,M,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),d(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u)):u.isMeshStandardMaterial?(r(f,u),p(f,u),u.isMeshPhysicalMaterial&&m(f,u,_)):u.isMeshMatcapMaterial?(r(f,u),x(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),g(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,S,M):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===rn&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===rn&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);let S=e.get(u).envMap;if(S&&(f.envMap.value=S,f.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;let M=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*M,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,S,M){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*S,f.scale.value=M*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function d(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,S){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,u){u.matcap&&(f.matcap.value=u.matcap)}function g(f,u){let S=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aM(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,M){let _=M.program;i.uniformBlockBinding(S,_)}function c(S,M){let _=s[S.id];_===void 0&&(x(S),_=h(S),s[S.id]=_,S.addEventListener("dispose",f));let R=M.program;i.updateUBOMapping(S,R);let b=e.render.frame;r[S.id]!==b&&(p(S),r[S.id]=b)}function h(S){let M=d();S.__bindingPointIndex=M;let _=n.createBuffer(),R=S.__size,b=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,_),_}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){let M=s[S.id],_=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let b=0,y=_.length;b<y;b++){let T=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,v=T.length;E<v;E++){let D=T[E];if(m(D,b,E,R)===!0){let z=D.__offset,I=Array.isArray(D.value)?D.value:[D.value],L=0;for(let A=0;A<I.length;A++){let U=I[A],H=g(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,z+L,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,M,_,R){let b=S.value,y=M+"_"+_;if(R[y]===void 0)return typeof b=="number"||typeof b=="boolean"?R[y]=b:R[y]=b.clone(),!0;{let T=R[y];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return R[y]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function x(S){let M=S.uniforms,_=0,R=16;for(let y=0,T=M.length;y<T;y++){let E=Array.isArray(M[y])?M[y]:[M[y]];for(let v=0,D=E.length;v<D;v++){let z=E[v],I=Array.isArray(z.value)?z.value:[z.value];for(let L=0,A=I.length;L<A;L++){let U=I[L],H=g(U),N=_%R;N!==0&&R-N<H.boundary&&(_+=R-N),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=H.storage}}}let b=_%R;return b>0&&(_+=R-b),S.__size=_,S.__cache={},this}function g(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function f(S){let M=S.target;M.removeEventListener("dispose",f);let _=o.indexOf(M.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function u(){for(let S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function Ma(n,e,t,i,s,r){fr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ao.x=r*fr.x-s*fr.y,ao.y=s*fr.x+r*fr.y):ao.copy(fr),n.copy(e),n.x+=ao.x,n.y+=ao.y,n.applyMatrix4(up)}function Nf(n,e,t,i,s,r,o){let a=Th.distanceSqToPoint(n);if(a<t){let l=new F;Th.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function iu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Of(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function cM(n,e){let t=1-n;return t*t*e}function hM(n,e){return 2*(1-n)*n*e}function uM(n,e){return n*n*e}function mo(n,e,t,i){return cM(n,e)+hM(n,t)+uM(n,i)}function dM(n,e){let t=1-n;return t*t*t*e}function fM(n,e){let t=1-n;return 3*t*t*n*e}function pM(n,e){return 3*(1-n)*n*n*e}function mM(n,e){return n*n*n*e}function go(n,e,t,i,s){return dM(n,e)+fM(n,t)+pM(n,i)+mM(n,s)}function dp(n,e,t,i,s){let r,o;if(s===IM(n,e,t,i)>0)for(r=e;r<t;r+=i)o=zf(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=zf(r,n[r],n[r+1],o);return o&&gl(o,o.next)&&(To(o),o=o.next),o}function Ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(gl(t,t.next)||Nt(t.prev,t,t.next)===0)){if(To(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function bo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&TM(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?_M(n,i,s,r):xM(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),To(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=vM(Ps(n),e,t),bo(n,e,t,i,s,r,2)):o===2&&yM(n,e,t,i,s,r):bo(Ps(n),e,t,i,s,r,1);break}}}function xM(n){let e=n.prev,t=n,i=n.next;if(Nt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=d&&x.y<=m&&xr(s,a,r,l,o,c,x.x,x.y)&&Nt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function _M(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,x=h<d?h<p?h:p:d<p?d:p,g=a>l?a>c?a:c:l>c?l:c,f=h>d?h>p?h:p:d>p?d:p,u=Nh(m,x,e,t,i),S=Nh(g,f,e,t,i),M=n.prevZ,_=n.nextZ;for(;M&&M.z>=u&&_&&_.z<=S;){if(M.x>=m&&M.x<=g&&M.y>=x&&M.y<=f&&M!==s&&M!==o&&xr(a,h,l,d,c,p,M.x,M.y)&&Nt(M.prev,M,M.next)>=0||(M=M.prevZ,_.x>=m&&_.x<=g&&_.y>=x&&_.y<=f&&_!==s&&_!==o&&xr(a,h,l,d,c,p,_.x,_.y)&&Nt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;M&&M.z>=u;){if(M.x>=m&&M.x<=g&&M.y>=x&&M.y<=f&&M!==s&&M!==o&&xr(a,h,l,d,c,p,M.x,M.y)&&Nt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;_&&_.z<=S;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=f&&_!==s&&_!==o&&xr(a,h,l,d,c,p,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function vM(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!gl(s,r)&&fp(s,i,i.next,r)&&wo(s,r)&&wo(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),To(i),To(i.next),i=n=r),i=i.next}while(i!==n);return Ps(i)}function yM(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&CM(o,a)){let l=pp(o,a);o=Ps(o,o.next),l=Ps(l,l.next),bo(o,e,t,i,s,r,0),bo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function MM(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=dp(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(RM(c));for(s.sort(SM),r=0;r<s.length;r++)t=EM(s[r],t);return t}function SM(n,e){return n.x-e.x}function EM(n,e){let t=bM(n,e);if(!t)return e;let i=pp(t,n);return Ps(i,i.next),Ps(t,t.next)}function bM(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&xr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),wo(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&wM(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function wM(n,e){return Nt(n.prev,n,e.prev)<0&&Nt(e.next,n,n.next)<0}function TM(n,e,t,i){let s=n;do s.z===0&&(s.z=Nh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,AM(s)}function AM(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Nh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function RM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function xr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function CM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!PM(n,e)&&(wo(n,e)&&wo(e,n)&&LM(n,e)&&(Nt(n.prev,n,e.prev)||Nt(n,e.prev,e))||gl(n,e)&&Nt(n.prev,n,n.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function gl(n,e){return n.x===e.x&&n.y===e.y}function fp(n,e,t,i){let s=Aa(Nt(n,e,t)),r=Aa(Nt(n,e,i)),o=Aa(Nt(t,i,n)),a=Aa(Nt(t,i,e));return!!(s!==r&&o!==a||s===0&&Ta(n,t,e)||r===0&&Ta(n,i,e)||o===0&&Ta(t,n,i)||a===0&&Ta(t,e,i))}function Ta(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Aa(n){return n>0?1:n<0?-1:0}function PM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function wo(n,e){return Nt(n.prev,n,n.next)<0?Nt(n,e,n.next)>=0&&Nt(n,n.prev,e)>=0:Nt(n,e,n.prev)<0||Nt(n,n.next,e)<0}function LM(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pp(n,e){let t=new Oh(n.i,n.x,n.y),i=new Oh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function zf(n,e,t,i){let s=new Oh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function To(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Oh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function IM(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function Ff(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function UM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Ra(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function NM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vf(){return(typeof performance>"u"?Date:performance).now()}var S0,cd,E0,dl,b0,Ti,Qi,rn,bt,hi,$i,Zt,hd,ud,w0,Ss,T0,A0,dd,fd,R0,C0,P0,L0,nh,ih,I0,D0,U0,N0,O0,z0,F0,B0,H0,k0,G0,V0,Ca,W0,X0,q0,Y0,Wf,Z0,$0,Ji,Jh,Kh,Qh,Co,J0,jh,Xf,yr,Mr,sh,rh,fl,Li,ei,oh,Sn,pd,vc,Vn,K0,_o,Ki,Q0,j0,eu,qf,Yi,Zi,ni,Yf,Zf,ws,eg,ti,tg,ng,Ts,Sr,ig,$f,sg,Jf,Kf,yc,Mc,Sc,Ec,md,gd,xd,_d,Qf,vd,yd,Md,Sd,Ed,bd,wd,Td,Ad,Rd,Cd,Pd,Ld,Id,Dd,Ud,bc,Nd,Od,rg,zd,Fd,Bd,Pa,La,wc,Hd,kd,Gd,jf,As,og,ag,ep,lg,Wn,gt,Ii,tu,pl,Ia,vt,Da,Ua,Zs,Vd,cg,hg,ug,tp,dg,fg,pg,mg,ah,Wd,lh,Ci,Na,ji,fn,Tc,Oa,ae,it,Rc,qd,Yd,Zd,Ko,_g,mt,$s,Fa,vg,Ba,yg,Xn,Pt,hh,En,Ha,uh,Pn,F,Lc,$d,Di,Mi,Kn,Qo,Js,Ks,Qs,Gi,Vi,xs,no,jo,ea,_s,Mg,io,Dc,es,Si,Uc,ta,Wi,Nc,na,Oc,ka,ut,js,Qn,Sg,Eg,Xi,ia,On,Jd,Kd,Ga,Va,bg,Qd,er,Ei,sa,so,wg,Tg,jd,ef,tf,Ag,Rg,Wt,jn,bi,zc,wi,tr,nr,nf,Fc,Bc,Hc,ra,bs,ip,qi,oa,Pe,pn,Cg,Ui,ot,Yt,aa,mn,Wa,Xa,dt,Pg,Gn,Gc,ir,zn,ro,nn,$t,sf,vs,la,rf,sr,rr,or,Vc,ca,ha,ua,da,of,af,lf,fa,pa,te,De,ns,Dg,Ug,Jt,qa,on,ar,lr,dh,Ya,fh,Wc,Ng,Og,Ai,ys,ga,vo,st,Fg,Bg,Hg,kg,Gg,Vg,Wg,Xg,qg,Yg,Zg,$g,Jg,Kg,Qg,jg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,_x,vx,yx,Mx,Sx,Ex,bx,wx,Tx,Ax,Rx,Cx,Px,Lx,Ix,Dx,Ux,Nx,Ox,zx,Fx,Bx,Hx,kx,Gx,Vx,Wx,Xx,qx,Yx,Zx,$x,Jx,Kx,Qx,jx,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,x_,__,v_,y_,M_,S_,E_,b_,w_,T_,A_,R_,C_,P_,L_,I_,D_,U_,N_,O_,z_,F_,B_,H_,k_,G_,V_,W_,X_,q_,Y_,Z_,$_,J_,K_,Q_,j_,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,dv,fv,pv,mv,gv,je,ve,ci,xa,br,mr,cf,Es,Xc,hf,qc,Yc,Zc,Ms,cr,uf,wr,Za,op,ap,lp,cp,hp,mf,gf,xf,_f,vf,ph,mh,gh,$c,vr,My,Sy,Ly,Iy,Uy,Gy,_h,vh,$y,yh,Mh,jy,eM,Sh,lt,rM,po,Eh,yo,bh,$a,Tr,wh,yn,Ja,Rs,hr,oo,ur,dr,fr,ao,up,va,lo,ya,Pf,Jc,Lf,Ar,Ka,pr,If,Sa,Df,lM,co,ho,Lt,Mo,Uf,Th,Ea,ba,Qa,an,qn,So,Ah,wa,Kc,Qc,jc,Rh,ja,Ch,el,Ph,tl,Lh,nl,Ih,Dh,Cs,Uh,il,Rr,Mt,Cr,Eo,gM,xo,sl,DM,ui,Kt,rl,ol,_e,ts,Pr,zh,Fh,Bh,ii,Ls,Hh,kh,Gh,Ao,Is,Vh,Wh,OM,Xh,Lr,al,eh,Hf,kf,Ro,qh,ll,Gf,uo,th,Yh,cl,Zh,hl,ul,su,zM,ru,FM,BM,HM,kM,GM,VM,WM,$h,Ct,lb,It=Nn(()=>{S0=0,cd=1,E0=2,dl=1,b0=2,Ti=3,Qi=0,rn=1,bt=2,hi=0,$i=1,Zt=2,hd=3,ud=4,w0=5,Ss=100,T0=101,A0=102,dd=103,fd=104,R0=200,C0=201,P0=202,L0=203,nh=204,ih=205,I0=206,D0=207,U0=208,N0=209,O0=210,z0=211,F0=212,B0=213,H0=214,k0=0,G0=1,V0=2,Ca=3,W0=4,X0=5,q0=6,Y0=7,Wf=0,Z0=1,$0=2,Ji=0,Jh=1,Kh=2,Qh=3,Co=4,J0=5,jh=6,Xf=300,yr=301,Mr=302,sh=303,rh=304,fl=306,Li=1e3,ei=1001,oh=1002,Sn=1003,pd=1004,vc=1005,Vn=1006,K0=1007,_o=1008,Ki=1009,Q0=1010,j0=1011,eu=1012,qf=1013,Yi=1014,Zi=1015,ni=1016,Yf=1017,Zf=1018,ws=1020,eg=1021,ti=1023,tg=1024,ng=1025,Ts=1026,Sr=1027,ig=1028,$f=1029,sg=1030,Jf=1031,Kf=1033,yc=33776,Mc=33777,Sc=33778,Ec=33779,md=35840,gd=35841,xd=35842,_d=35843,Qf=36196,vd=37492,yd=37496,Md=37808,Sd=37809,Ed=37810,bd=37811,wd=37812,Td=37813,Ad=37814,Rd=37815,Cd=37816,Pd=37817,Ld=37818,Id=37819,Dd=37820,Ud=37821,bc=36492,Nd=36494,Od=36495,rg=36283,zd=36284,Fd=36285,Bd=36286,Pa=2300,La=2301,wc=2302,Hd=2400,kd=2401,Gd=2402,jf=3e3,As=3001,og=3200,ag=3201,ep=0,lg=1,Wn="",gt="srgb",Ii="srgb-linear",tu="display-p3",pl="display-p3-linear",Ia="linear",vt="srgb",Da="rec709",Ua="p3",Zs=7680,Vd=519,cg=512,hg=513,ug=514,tp=515,dg=516,fg=517,pg=518,mg=519,ah=35044,Wd="300 es",lh=1035,Ci=2e3,Na=2001,ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,Oa=180/Math.PI;ae=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],m=i[5],x=i[8],g=s[0],f=s[3],u=s[6],S=s[1],M=s[4],_=s[7],R=s[2],b=s[5],y=s[8];return r[0]=o*g+a*S+l*R,r[3]=o*f+a*M+l*b,r[6]=o*u+a*_+l*y,r[1]=c*g+h*S+d*R,r[4]=c*f+h*M+d*b,r[7]=c*u+h*_+d*y,r[2]=p*g+m*S+x*R,r[5]=p*f+m*M+x*b,r[8]=p*u+m*_+x*y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,p=a*l-h*r,m=c*r-o*l,x=t*d+i*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=d*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=p*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Rc.makeScale(e,t)),this}rotate(e){return this.premultiply(Rc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Rc=new it;qd={};Yd=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zd=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ko={[Ii]:{transfer:Ia,primaries:Da,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:vt,primaries:Da,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pl]:{transfer:Ia,primaries:Ua,toReference:n=>n.applyMatrix3(Zd),fromReference:n=>n.applyMatrix3(Yd)},[tu]:{transfer:vt,primaries:Ua,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Zd),fromReference:n=>n.applyMatrix3(Yd).convertLinearToSRGB()}},_g=new Set([Ii,pl]),mt={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!_g.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Ko[e].toReference,s=Ko[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ko[n].primaries},getTransfer:function(n){return n===Wn?Ia:Ko[n].transfer}};Fa=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$s===void 0&&($s=za("canvas")),$s.width=e.width,$s.height=e.height;let i=$s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=$s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=za("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_r(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_r(t[i]/255)*255):t[i]=_r(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vg=0,Ba=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pc(s[o].image)):r.push(Pc(s[o]))}else r=Pc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};yg=0,Xn=class n extends ji{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ei,s=ei,r=Vn,o=_o,a=ti,l=Ki,c=n.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Pi(),this.name="",this.source=new Ba(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===As?gt:Wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case oh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case oh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?As:jf}set encoding(e){fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===As?gt:Wn}};Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Xf;Xn.DEFAULT_ANISOTROPY=1;Pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],x=l[9],g=l[2],f=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-g)<.01&&Math.abs(x-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(x+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,_=(m+1)/2,R=(u+1)/2,b=(h+p)/4,y=(d+g)/4,T=(x+f)/4;return M>_&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=b/i,r=y/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=T/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=y/r,s=T/r),this.set(i,s,r,t),this}let S=Math.sqrt((f-x)*(f-x)+(d-g)*(d-g)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(f-x)/S,this.y=(d-g)/S,this.z=(p-h)/S,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},hh=class extends ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===As?gt:Wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ba(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends hh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ha=class extends Xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},uh=class extends Xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],p=r[o+0],m=r[o+1],x=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==p||c!==m||h!==x){let f=1-a,u=l*p+c*m+h*x+d*g,S=u>=0?1:-1,M=1-u*u;if(M>Number.EPSILON){let R=Math.sqrt(M),b=Math.atan2(R,u*S);f=Math.sin(f*b)/R,a=Math.sin(a*b)/R}let _=a*S;if(l=l*f+p*_,c=c*f+m*_,h=h*f+x*_,d=d*f+g*_,f===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=R,c*=R,h*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+h*d+l*m-c*p,e[t+1]=l*x+h*p+c*d-a*m,e[t+2]=c*x+h*m+a*p-l*d,e[t+3]=h*x-a*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),p=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*d+c*m*x,this._y=c*m*d-p*h*x,this._z=c*h*x+p*m*d,this._w=c*h*d-p*m*x;break;case"YXZ":this._x=p*h*d+c*m*x,this._y=c*m*d-p*h*x,this._z=c*h*x-p*m*d,this._w=c*h*d+p*m*x;break;case"ZXY":this._x=p*h*d-c*m*x,this._y=c*m*d+p*h*x,this._z=c*h*x+p*m*d,this._w=c*h*d-p*m*x;break;case"ZYX":this._x=p*h*d-c*m*x,this._y=c*m*d+p*h*x,this._z=c*h*x-p*m*d,this._w=c*h*d+p*m*x;break;case"YZX":this._x=p*h*d+c*m*x,this._y=c*m*d+p*h*x,this._z=c*h*x-p*m*d,this._w=c*h*d-p*m*x;break;case"XZY":this._x=p*h*d-c*m*x,this._y=c*m*d-p*h*x,this._z=c*h*x+p*m*d,this._w=c*h*d+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=i+a+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(sn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($d.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lc.copy(this).projectOnVector(e),this.sub(Lc)}reflect(e){return this.sub(Lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(sn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lc=new F,$d=new Pn,Di=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),jo.subVectors(this.max,no),Js.subVectors(e.a,no),Ks.subVectors(e.b,no),Qs.subVectors(e.c,no),Gi.subVectors(Ks,Js),Vi.subVectors(Qs,Ks),xs.subVectors(Js,Qs);let t=[0,-Gi.z,Gi.y,0,-Vi.z,Vi.y,0,-xs.z,xs.y,Gi.z,0,-Gi.x,Vi.z,0,-Vi.x,xs.z,0,-xs.x,-Gi.y,Gi.x,0,-Vi.y,Vi.x,0,-xs.y,xs.x,0];return!Ic(t,Js,Ks,Qs,jo)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,Js,Ks,Qs,jo))?!1:(ea.crossVectors(Gi,Vi),t=[ea.x,ea.y,ea.z],Ic(t,Js,Ks,Qs,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Mi=[new F,new F,new F,new F,new F,new F,new F,new F],Kn=new F,Qo=new Di,Js=new F,Ks=new F,Qs=new F,Gi=new F,Vi=new F,xs=new F,no=new F,jo=new F,ea=new F,_s=new F;Mg=new Di,io=new F,Dc=new F,es=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Mg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);let t=io.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(io,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(Dc)),this.expandByPoint(io.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Si=new F,Uc=new F,ta=new F,Wi=new F,Nc=new F,na=new F,Oc=new F,ka=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Uc.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),Wi.copy(this.origin).sub(Uc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ta),a=Wi.dot(this.direction),l=-Wi.dot(ta),c=Wi.lengthSq(),h=Math.abs(1-o*o),d,p,m,x;if(h>0)if(d=o*l-a,p=o*a-l,x=r*h,d>=0)if(p>=-x)if(p<=x){let g=1/h;d*=g,p*=g,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Uc).addScaledVector(ta,p),m}intersectSphere(e,t){Si.subVectors(e.center,this.origin);let i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){Nc.subVectors(t,e),na.subVectors(i,e),Oc.crossVectors(Nc,na);let o=this.direction.dot(Oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wi.subVectors(this.origin,e);let l=a*this.direction.dot(na.crossVectors(Wi,na));if(l<0)return null;let c=a*this.direction.dot(Nc.cross(Wi));if(c<0||l+c>o)return null;let h=-a*Wi.dot(Oc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ut=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,p,m,x,g,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,p,m,x,g,f)}set(e,t,i,s,r,o,a,l,c,h,d,p,m,x,g,f){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=m,u[7]=x,u[11]=g,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/js.setFromMatrixColumn(e,0).length(),r=1/js.setFromMatrixColumn(e,1).length(),o=1/js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*d,x=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*d,x=c*h,g=c*d;t[0]=p+g*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*d,x=c*h,g=c*d;t[0]=p-g*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*d,x=a*h,g=a*d;t[0]=l*h,t[4]=x*c-m,t[8]=p*c+g,t[1]=l*d,t[5]=g*c+p,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-p*d,t[8]=x*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+x,t[10]=p-g*d}else if(e.order==="XZY"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+g,t[5]=o*h,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*h,t[10]=g*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sg,e,Eg)}lookAt(e,t,i){let s=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),Xi.crossVectors(i,On),Xi.lengthSq()===0&&(Math.abs(i.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),Xi.crossVectors(i,On)),Xi.normalize(),ia.crossVectors(On,Xi),s[0]=Xi.x,s[4]=ia.x,s[8]=On.x,s[1]=Xi.y,s[5]=ia.y,s[9]=On.y,s[2]=Xi.z,s[6]=ia.z,s[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],m=i[13],x=i[2],g=i[6],f=i[10],u=i[14],S=i[3],M=i[7],_=i[11],R=i[15],b=s[0],y=s[4],T=s[8],E=s[12],v=s[1],D=s[5],z=s[9],I=s[13],L=s[2],A=s[6],U=s[10],H=s[14],N=s[3],k=s[7],X=s[11],q=s[15];return r[0]=o*b+a*v+l*L+c*N,r[4]=o*y+a*D+l*A+c*k,r[8]=o*T+a*z+l*U+c*X,r[12]=o*E+a*I+l*H+c*q,r[1]=h*b+d*v+p*L+m*N,r[5]=h*y+d*D+p*A+m*k,r[9]=h*T+d*z+p*U+m*X,r[13]=h*E+d*I+p*H+m*q,r[2]=x*b+g*v+f*L+u*N,r[6]=x*y+g*D+f*A+u*k,r[10]=x*T+g*z+f*U+u*X,r[14]=x*E+g*I+f*H+u*q,r[3]=S*b+M*v+_*L+R*N,r[7]=S*y+M*D+_*A+R*k,r[11]=S*T+M*z+_*U+R*X,r[15]=S*E+M*I+_*H+R*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],m=e[14],x=e[3],g=e[7],f=e[11],u=e[15];return x*(+r*l*d-s*c*d-r*a*p+i*c*p+s*a*m-i*l*m)+g*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+f*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-t*l*d+t*a*p+s*o*d-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],m=e[11],x=e[12],g=e[13],f=e[14],u=e[15],S=d*f*c-g*p*c+g*l*m-a*f*m-d*l*u+a*p*u,M=x*p*c-h*f*c-x*l*m+o*f*m+h*l*u-o*p*u,_=h*g*c-x*d*c+x*a*m-o*g*m-h*a*u+o*d*u,R=x*d*l-h*g*l-x*a*p+o*g*p+h*a*f-o*d*f,b=t*S+i*M+s*_+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/b;return e[0]=S*y,e[1]=(g*p*r-d*f*r-g*s*m+i*f*m+d*s*u-i*p*u)*y,e[2]=(a*f*r-g*l*r+g*s*c-i*f*c-a*s*u+i*l*u)*y,e[3]=(d*l*r-a*p*r-d*s*c+i*p*c+a*s*m-i*l*m)*y,e[4]=M*y,e[5]=(h*f*r-x*p*r+x*s*m-t*f*m-h*s*u+t*p*u)*y,e[6]=(x*l*r-o*f*r-x*s*c+t*f*c+o*s*u-t*l*u)*y,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*y,e[8]=_*y,e[9]=(x*d*r-h*g*r-x*i*m+t*g*m+h*i*u-t*d*u)*y,e[10]=(o*g*r-x*a*r+x*i*c-t*g*c-o*i*u+t*a*u)*y,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*m-t*a*m)*y,e[12]=R*y,e[13]=(h*g*s-x*d*s+x*i*p-t*g*p-h*i*f+t*d*f)*y,e[14]=(x*a*s-o*g*s-x*i*l+t*g*l+o*i*f-t*a*f)*y,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*p+t*a*p)*y,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,p=r*c,m=r*h,x=r*d,g=o*h,f=o*d,u=a*d,S=l*c,M=l*h,_=l*d,R=i.x,b=i.y,y=i.z;return s[0]=(1-(g+u))*R,s[1]=(m+_)*R,s[2]=(x-M)*R,s[3]=0,s[4]=(m-_)*b,s[5]=(1-(p+u))*b,s[6]=(f+S)*b,s[7]=0,s[8]=(x+M)*y,s[9]=(f-S)*y,s[10]=(1-(p+g))*y,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=js.set(s[0],s[1],s[2]).length(),o=js.set(s[4],s[5],s[6]).length(),a=js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Qn.copy(this);let c=1/r,h=1/o,d=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ci){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),m,x;if(a===Ci)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Na)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ci){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),p=(t+e)*c,m=(i+s)*h,x,g;if(a===Ci)x=(o+r)*d,g=-2*d;else if(a===Na)x=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},js=new F,Qn=new ut,Sg=new F(0,0,0),Eg=new F(1,1,1),Xi=new F,ia=new F,On=new F,Jd=new ut,Kd=new Pn,Ga=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(sn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ga.DEFAULT_ORDER="XYZ";Va=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bg=0,Qd=new F,er=new Pn,Ei=new ut,sa=new F,so=new F,wg=new F,Tg=new Pn,jd=new F(1,0,0),ef=new F(0,1,0),tf=new F(0,0,1),Ag={type:"added"},Rg={type:"removed"},Wt=class n extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new F,t=new Ga,i=new Pn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new it}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(jd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return Qd.copy(e).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sa.copy(e):sa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(so,sa,this.up):Ei.lookAt(sa,so,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),er.setFromRotationMatrix(Ei),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ag)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new F(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;jn=new F,bi=new F,zc=new F,wi=new F,tr=new F,nr=new F,nf=new F,Fc=new F,Bc=new F,Hc=new F,ra=!1,bs=class n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),bi.subVectors(i,t),zc.subVectors(e,t);let o=jn.dot(jn),a=jn.dot(bi),l=jn.dot(zc),c=bi.dot(bi),h=bi.dot(zc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getUV(e,t,i,s,r,o,a,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),bi.subVectors(e,t),jn.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),jn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;tr.subVectors(s,i),nr.subVectors(r,i),Fc.subVectors(e,i);let l=tr.dot(Fc),c=nr.dot(Fc);if(l<=0&&c<=0)return t.copy(i);Bc.subVectors(e,s);let h=tr.dot(Bc),d=nr.dot(Bc);if(h>=0&&d<=h)return t.copy(s);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(tr,o);Hc.subVectors(e,r);let m=tr.dot(Hc),x=nr.dot(Hc);if(x>=0&&m<=x)return t.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(nr,a);let f=h*x-m*d;if(f<=0&&d-h>=0&&m-x>=0)return nf.subVectors(r,s),a=(d-h)/(d-h+(m-x)),t.copy(s).addScaledVector(nf,a);let u=1/(f+g+p);return o=g*u,a=p*u,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},oa={h:0,s:0,l:0};Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=gg(e,1),t=sn(t,0,1),i=sn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=kc(o,r,e+1/3),this.g=kc(o,r,e),this.b=kc(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=ip[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return mt.fromWorkingColorSpace(pn.copy(this),e),Math.round(sn(pn.r*255,0,255))*65536+Math.round(sn(pn.g*255,0,255))*256+Math.round(sn(pn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=gt){mt.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(oa);let i=Ac(qi.h,oa.h,t),s=Ac(qi.s,oa.s,t),r=Ac(qi.l,oa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Pe;Pe.NAMES=ip;Cg=0,Ui=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=$i,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nh&&(i.blendSrc=this.blendSrc),this.blendDst!==ih&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ot=class extends Ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Yt=new F,aa=new ae,mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ah&&(e.usage=this.usage),e}},Wa=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Xa=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},dt=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Pg=0,Gn=new ut,Gc=new Wt,ir=new F,zn=new Di,ro=new Di,nn=new F,$t=class n extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?Xa:Wa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,i){return Gn.makeTranslation(e,t,i),this.applyMatrix4(Gn),this}scale(e,t,i){return Gn.makeScale(e,t,i),this.applyMatrix4(Gn),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];zn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ro.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(zn.min,ro.min),zn.expandByPoint(nn),nn.addVectors(zn.max,ro.max),zn.expandByPoint(nn)):(zn.expandByPoint(ro.min),zn.expandByPoint(ro.max))}zn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),nn.add(ir)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let v=0;v<a;v++)c[v]=new F,h[v]=new F;let d=new F,p=new F,m=new F,x=new ae,g=new ae,f=new ae,u=new F,S=new F;function M(v,D,z){d.fromArray(s,v*3),p.fromArray(s,D*3),m.fromArray(s,z*3),x.fromArray(o,v*2),g.fromArray(o,D*2),f.fromArray(o,z*2),p.sub(d),m.sub(d),g.sub(x),f.sub(x);let I=1/(g.x*f.y-f.x*g.y);isFinite(I)&&(u.copy(p).multiplyScalar(f.y).addScaledVector(m,-g.y).multiplyScalar(I),S.copy(m).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(I),c[v].add(u),c[D].add(u),c[z].add(u),h[v].add(S),h[D].add(S),h[z].add(S))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let v=0,D=_.length;v<D;++v){let z=_[v],I=z.start,L=z.count;for(let A=I,U=I+L;A<U;A+=3)M(i[A+0],i[A+1],i[A+2])}let R=new F,b=new F,y=new F,T=new F;function E(v){y.fromArray(r,v*3),T.copy(y);let D=c[v];R.copy(D),R.sub(y.multiplyScalar(y.dot(D))).normalize(),b.crossVectors(T,D);let I=b.dot(h[v])<0?-1:1;l[v*4]=R.x,l[v*4+1]=R.y,l[v*4+2]=R.z,l[v*4+3]=I}for(let v=0,D=_.length;v<D;++v){let z=_[v],I=z.start,L=z.count;for(let A=I,U=I+L;A<U;A+=3)E(i[A+0]),E(i[A+1]),E(i[A+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let p=0,m=e.count;p<m;p+=3){let x=e.getX(p+0),g=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h),m=0,x=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let u=0;u<h;u++)p[x++]=c[m++]}return new mn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sf=new ut,vs=new ka,la=new es,rf=new F,sr=new F,rr=new F,or=new F,Vc=new F,ca=new F,ha=new ae,ua=new ae,da=new ae,of=new F,af=new F,lf=new F,fa=new F,pa=new F,te=class extends Wt{constructor(e=new $t,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Vc.fromBufferAttribute(d,e),o?ca.addScaledVector(Vc,h):ca.addScaledVector(Vc.sub(t),h))}t.add(ca)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(la.containsPoint(vs.origin)===!1&&(vs.intersectSphere(la,rf)===null||vs.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(sf.copy(r).invert(),vs.copy(e.ray).applyMatrix4(sf),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let f=p[x],u=o[f.materialIndex],S=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let _=S,R=M;_<R;_+=3){let b=a.getX(_),y=a.getX(_+1),T=a.getX(_+2);s=ma(this,u,e,i,c,h,d,b,y,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=x,u=g;f<u;f+=3){let S=a.getX(f),M=a.getX(f+1),_=a.getX(f+2);s=ma(this,o,e,i,c,h,d,S,M,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let f=p[x],u=o[f.materialIndex],S=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let _=S,R=M;_<R;_+=3){let b=_,y=_+1,T=_+2;s=ma(this,u,e,i,c,h,d,b,y,T),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=x,u=g;f<u;f+=3){let S=f,M=f+1,_=f+2;s=ma(this,o,e,i,c,h,d,S,M,_),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};De=class n extends $t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],p=0,m=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(d,2));function x(g,f,u,S,M,_,R,b,y,T,E){let v=_/y,D=R/T,z=_/2,I=R/2,L=b/2,A=y+1,U=T+1,H=0,N=0,k=new F;for(let X=0;X<U;X++){let q=X*D-I;for(let ie=0;ie<A;ie++){let G=ie*v-z;k[g]=G*S,k[f]=q*M,k[u]=L,c.push(k.x,k.y,k.z),k[g]=0,k[f]=0,k[u]=b>0?1:-1,h.push(k.x,k.y,k.z),d.push(ie/y),d.push(1-X/T),H+=1}}for(let X=0;X<T;X++)for(let q=0;q<y;q++){let ie=p+q+A*X,G=p+q+A*(X+1),K=p+(q+1)+A*(X+1),me=p+(q+1)+A*X;l.push(ie,G,me),l.push(G,K,me),N+=6}a.addGroup(m,N,E),m+=N,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ns={clone:Er,merge:Mn},Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jt=class extends Ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qa=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},on=class extends qa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oa*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ar=-90,lr=1,dh=class extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(ar,lr,e,t);s.layers=this.layers,this.add(s);let r=new on(ar,lr,e,t);r.layers=this.layers,this.add(r);let o=new on(ar,lr,e,t);o.layers=this.layers,this.add(o);let a=new on(ar,lr,e,t);a.layers=this.layers,this.add(a);let l=new on(ar,lr,e,t);l.layers=this.layers,this.add(l);let c=new on(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ya=class extends Xn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fh=class extends En{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===As?gt:Wn),this.texture=new Ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new De(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:hi});r.uniforms.tEquirect.value=t;let o=new te(s,r),a=t.minFilter;return t.minFilter===_o&&(t.minFilter=Vn),new dh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Wc=new F,Ng=new F,Og=new it,Ai=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Wc.subVectors(i,t).cross(Ng.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Wc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Og.getNormalMatrix(e),s=this.coplanarPoint(Wc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new es,ga=new F,vo=class{constructor(e=new Ai,t=new Ai,i=new Ai,s=new Ai,r=new Ai,o=new Ai){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],m=s[8],x=s[9],g=s[10],f=s[11],u=s[12],S=s[13],M=s[14],_=s[15];if(i[0].setComponents(l-r,p-c,f-m,_-u).normalize(),i[1].setComponents(l+r,p+c,f+m,_+u).normalize(),i[2].setComponents(l+o,p+h,f+x,_+S).normalize(),i[3].setComponents(l-o,p-h,f-x,_-S).normalize(),i[4].setComponents(l-a,p-d,f-g,_-M).normalize(),t===Ci)i[5].setComponents(l+a,p+d,f+g,_+M).normalize();else if(t===Na)i[5].setComponents(a,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ga.x=s.normal.x>0?e.max.x:e.min.x,ga.y=s.normal.y>0?e.max.y:e.min.y,ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};st=class n extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,p=t/l,m=[],x=[],g=[],f=[];for(let u=0;u<h;u++){let S=u*p-o;for(let M=0;M<c;M++){let _=M*d-r;x.push(_,-S,0),g.push(0,0,1),f.push(M/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<a;S++){let M=S+c*u,_=S+c*(u+1),R=S+1+c*(u+1),b=S+1+c*u;m.push(M,_,b),m.push(_,R,b)}this.setIndex(m),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(g,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bg=`#ifdef USE_ALPHAHASH
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
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wg=`#ifdef USE_AOMAP
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
#endif`,Xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
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
#endif`,Yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$g=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kg=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,jg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ax=`#define PI 3.141592653589793
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
} // validated`,lx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cx=`vec3 transformedNormal = objectNormal;
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
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`
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
}`,gx=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wx=`#ifdef USE_GRADIENTMAP
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
}`,Tx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
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
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ux=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ox=`PhysicalMaterial material;
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
#endif`,zx=`struct PhysicalMaterial {
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
}`,Fx=`
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
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zx=`#if defined( USE_POINTS_UV )
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
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qx=`#ifdef USE_MORPHNORMALS
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
#endif`,jx=`#ifdef USE_MORPHTARGETS
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
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,a_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
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
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,A_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L_=`#ifdef USE_TRANSMISSION
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
#endif`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F_=`uniform sampler2D t2D;
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`#include <common>
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
}`,W_=`#if DEPTH_PACKING == 3200
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
}`,X_=`#define DISTANCE
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
}`,q_=`#define DISTANCE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`uniform float scale;
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
}`,J_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,Q_=`uniform vec3 diffuse;
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
}`,j_=`#define LAMBERT
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
}`,ev=`#define LAMBERT
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
}`,tv=`#define MATCAP
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
}`,nv=`#define MATCAP
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
}`,iv=`#define NORMAL
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
}`,sv=`#define NORMAL
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
}`,rv=`#define PHONG
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
}`,ov=`#define PHONG
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
}`,av=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,cv=`#define TOON
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
}`,hv=`#define TOON
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
}`,uv=`uniform float size;
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
}`,dv=`uniform vec3 diffuse;
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
}`,fv=`#include <common>
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
}`,pv=`uniform vec3 color;
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
}`,mv=`uniform float rotation;
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
}`,gv=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Fg,alphahash_pars_fragment:Bg,alphamap_fragment:Hg,alphamap_pars_fragment:kg,alphatest_fragment:Gg,alphatest_pars_fragment:Vg,aomap_fragment:Wg,aomap_pars_fragment:Xg,batching_pars_vertex:qg,batching_vertex:Yg,begin_vertex:Zg,beginnormal_vertex:$g,bsdfs:Jg,iridescence_fragment:Kg,bumpmap_pars_fragment:Qg,clipping_planes_fragment:jg,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:sx,color_pars_vertex:rx,color_vertex:ox,common:ax,cube_uv_reflection_fragment:lx,defaultnormal_vertex:cx,displacementmap_pars_vertex:hx,displacementmap_vertex:ux,emissivemap_fragment:dx,emissivemap_pars_fragment:fx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:gx,envmap_common_pars_fragment:xx,envmap_pars_fragment:_x,envmap_pars_vertex:vx,envmap_physical_pars_fragment:Lx,envmap_vertex:yx,fog_vertex:Mx,fog_pars_vertex:Sx,fog_fragment:Ex,fog_pars_fragment:bx,gradientmap_pars_fragment:wx,lightmap_fragment:Tx,lightmap_pars_fragment:Ax,lights_lambert_fragment:Rx,lights_lambert_pars_fragment:Cx,lights_pars_begin:Px,lights_toon_fragment:Ix,lights_toon_pars_fragment:Dx,lights_phong_fragment:Ux,lights_phong_pars_fragment:Nx,lights_physical_fragment:Ox,lights_physical_pars_fragment:zx,lights_fragment_begin:Fx,lights_fragment_maps:Bx,lights_fragment_end:Hx,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Wx,map_fragment:Xx,map_pars_fragment:qx,map_particle_fragment:Yx,map_particle_pars_fragment:Zx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Jx,morphcolor_vertex:Kx,morphnormal_vertex:Qx,morphtarget_pars_vertex:jx,morphtarget_vertex:e_,normal_fragment_begin:t_,normal_fragment_maps:n_,normal_pars_fragment:i_,normal_pars_vertex:s_,normal_vertex:r_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:a_,clearcoat_normal_fragment_maps:l_,clearcoat_pars_fragment:c_,iridescence_pars_fragment:h_,opaque_fragment:u_,packing:d_,premultiplied_alpha_fragment:f_,project_vertex:p_,dithering_fragment:m_,dithering_pars_fragment:g_,roughnessmap_fragment:x_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:E_,skinning_pars_vertex:b_,skinning_vertex:w_,skinnormal_vertex:T_,specularmap_fragment:A_,specularmap_pars_fragment:R_,tonemapping_fragment:C_,tonemapping_pars_fragment:P_,transmission_fragment:L_,transmission_pars_fragment:I_,uv_pars_fragment:D_,uv_pars_vertex:U_,uv_vertex:N_,worldpos_vertex:O_,background_vert:z_,background_frag:F_,backgroundCube_vert:B_,backgroundCube_frag:H_,cube_vert:k_,cube_frag:G_,depth_vert:V_,depth_frag:W_,distanceRGBA_vert:X_,distanceRGBA_frag:q_,equirect_vert:Y_,equirect_frag:Z_,linedashed_vert:$_,linedashed_frag:J_,meshbasic_vert:K_,meshbasic_frag:Q_,meshlambert_vert:j_,meshlambert_frag:ev,meshmatcap_vert:tv,meshmatcap_frag:nv,meshnormal_vert:iv,meshnormal_frag:sv,meshphong_vert:rv,meshphong_frag:ov,meshphysical_vert:av,meshphysical_frag:lv,meshtoon_vert:cv,meshtoon_frag:hv,points_vert:uv,points_frag:dv,shadow_vert:fv,shadow_frag:pv,sprite_vert:mv,sprite_frag:gv},ve={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},ci={basic:{uniforms:Mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Mn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Mn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Mn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Mn([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Mn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Mn([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Mn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Mn([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Mn([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Mn([ve.lights,ve.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ci.physical={uniforms:Mn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};xa={r:0,b:0,g:0};br=class extends qa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mr=4,cf=[.125,.215,.35,.446,.526,.582],Es=20,Xc=new br,hf=new Pe,qc=null,Yc=0,Zc=0,Ms=(1+Math.sqrt(5))/2,cr=1/Ms,uf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ms,cr),new F(0,Ms,-cr),new F(cr,0,Ms),new F(-cr,0,Ms),new F(Ms,cr,0),new F(-Ms,cr,0)],wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,Yc,Zc),e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===Mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),Yc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ni,format:ti,colorSpace:Ii,depthBuffer:!1},s=df(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ev(r)),this._blurMaterial=bv(r,e,t)}return s}_compileMaterial(e){let t=new te(this._lodPlanes[0],e);this._renderer.compile(t,Xc)}_sceneToCubeUV(e,t,i,s){let a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(hf),h.toneMapping=Ji,h.autoClear=!1;let m=new ot({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),x=new te(new De,m),g=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,g=!0):(m.color.copy(hf),g=!0);for(let u=0;u<6;u++){let S=u%3;S===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):S===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let M=this._cubeSize;_a(s,S*M,u>2?M:0,M,M),h.setRenderTarget(s),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===yr||e.mapping===Mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;_a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=uf[(s-1)%uf.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new te(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Es-1),g=r/x,f=isFinite(r)?1+Math.floor(h*g):Es;f>Es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Es}`);let u=[],S=0;for(let y=0;y<Es;++y){let T=y/g,E=Math.exp(-T*T/2);u.push(E),y===0?S+=E:y<f&&(S+=2*E)}for(let y=0;y<u.length;y++)u[y]=u[y]/S;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=x,p.mipInt.value=M-i;let _=this._sizeLods[s],R=3*_*(s>M-mr?s-M+mr:0),b=4*(this._cubeSize-_);_a(t,R,b,3*_,2*_),l.setRenderTarget(t),l.render(d,Xc)}};Za=class extends Xn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Ts,h!==Ts&&h!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ts&&(i=Yi),i===void 0&&h===Sr&&(i=ws),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},op=new Xn,ap=new Za(1,1);ap.compareFunction=tp;lp=new Ha,cp=new uh,hp=new Ya,mf=[],gf=[],xf=new Float32Array(16),_f=new Float32Array(9),vf=new Float32Array(4);ph=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=jv(t.type)}},mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vy(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},$c=/(\w+)(\])?(\[|\.)?/g;vr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);yy(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};My=37297,Sy=0;Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;Iy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Gy=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new vh(e),t.set(e,i)),i}},vh=class{constructor(e){this.id=Gy++,this.code=e,this.usedTimes=0}};$y=0;yh=class extends Ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=og,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Mh=class extends Ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},jy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eM=`uniform sampler2D shadow_pass;
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
}`;Sh=class extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},rM={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let f=t.getJointPose(g,i),u=this._getHandJoint(c,g);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Eh=class extends ji{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,m=null,x=null,g=t.getContextAttributes(),f=null,u=null,S=[],M=[],_=new ae,R=null,b=new on;b.layers.enable(1),b.viewport=new Pt;let y=new on;y.layers.enable(2),y.viewport=new Pt;let T=[b,y],E=new Sh;E.layers.enable(1),E.layers.enable(2);let v=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=S[G];return K===void 0&&(K=new po,S[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=S[G];return K===void 0&&(K=new po,S[G]=K),K.getGripSpace()},this.getHand=function(G){let K=S[G];return K===void 0&&(K=new po,S[G]=K),K.getHandSpace()};function z(G){let K=M.indexOf(G.inputSource);if(K===-1)return;let me=S[K];me!==void 0&&(me.update(G.inputSource,G.frame,c||o),me.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",L);for(let G=0;G<S.length;G++){let K=M[G];K!==null&&(M[G]=null,S[G].disconnect(K))}v=null,D=null,e.setRenderTarget(f),m=null,p=null,d=null,s=null,u=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",I),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(_),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new En(m.framebufferWidth,m.framebufferHeight,{format:ti,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,me=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?Sr:Ts,me=g.stencil?ws:Yi);let pe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(pe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new En(p.textureWidth,p.textureHeight,{format:ti,type:Ki,depthTexture:new Za(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let Ue=e.properties.get(u);Ue.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(G){for(let K=0;K<G.removed.length;K++){let me=G.removed[K],ye=M.indexOf(me);ye>=0&&(M[ye]=null,S[ye].disconnect(me))}for(let K=0;K<G.added.length;K++){let me=G.added[K],ye=M.indexOf(me);if(ye===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=M.length){M.push(me),ye=Ue;break}else if(M[Ue]===null){M[Ue]=me,ye=Ue;break}if(ye===-1)break}let pe=S[ye];pe&&pe.connect(me)}}let A=new F,U=new F;function H(G,K,me){A.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(me.matrixWorld);let ye=A.distanceTo(U),pe=K.projectionMatrix.elements,Ue=me.projectionMatrix.elements,Fe=pe[14]/(pe[10]-1),Te=pe[14]/(pe[10]+1),He=(pe[9]+1)/pe[5],B=(pe[9]-1)/pe[5],ge=(pe[8]-1)/pe[0],ee=(Ue[8]+1)/Ue[0],fe=Fe*ge,j=Fe*ee,Ne=ye/(-ge+ee),Se=Ne*-ge;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Se),G.translateZ(Ne),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let C=Fe+Ne,w=Te+Ne,V=fe-Se,ce=j+(ye-Se),oe=He*Te/w*C,re=B*Te/w*C;G.projectionMatrix.makePerspective(V,ce,oe,re,C,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function N(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;E.near=y.near=b.near=G.near,E.far=y.far=b.far=G.far,(v!==E.near||D!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),v=E.near,D=E.far);let K=G.parent,me=E.cameras;N(E,K);for(let ye=0;ye<me.length;ye++)N(me[ye],K);me.length===2?H(E,b,y):E.projectionMatrix.copy(b.projectionMatrix),k(G,E,K)};function k(G,K,me){me===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(me.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Oa*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let X=null;function q(G,K){if(h=K.getViewerPose(c||o),x=K,h!==null){let me=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ye=!1;me.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let pe=0;pe<me.length;pe++){let Ue=me[pe],Fe=null;if(m!==null)Fe=m.getViewport(Ue);else{let He=d.getViewSubImage(p,Ue);Fe=He.viewport,pe===0&&(e.setRenderTargetTextures(u,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(u))}let Te=T[pe];Te===void 0&&(Te=new on,Te.layers.enable(pe),Te.viewport=new Pt,T[pe]=Te),Te.matrix.fromArray(Ue.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ue.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),pe===0&&(E.matrix.copy(Te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(Te)}}for(let me=0;me<S.length;me++){let ye=M[me],pe=S[me];ye!==null&&pe!==void 0&&pe.update(ye,K,c||o)}X&&X(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}let ie=new rp;ie.setAnimationLoop(q),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}};yo=class{constructor(e={}){let{canvas:t=xg(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,u=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Ji,this.toneMappingExposure=1;let M=this,_=!1,R=0,b=0,y=null,T=-1,E=null,v=new Pt,D=new Pt,z=null,I=new Pe(0),L=0,A=t.width,U=t.height,H=1,N=null,k=null,X=new Pt(0,0,A,U),q=new Pt(0,0,A,U),ie=!1,G=new vo,K=!1,me=!1,ye=null,pe=new ut,Ue=new ae,Fe=new F,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return y===null?H:1}let B=i;function ge(P,W){for(let Z=0;Z<P.length;Z++){let J=P[Z],Y=t.getContext(J,W);if(Y!==null)return Y}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ne,!1),B===null){let W=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&W.shift(),B=ge(W,P),B===null)throw ge(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ee,fe,j,Ne,Se,C,w,V,ce,oe,re,Ie,xe,be,Be,Xe,he,Ke,Qe,ke,ze,Re,Ze,ht;function le(){ee=new Tv(B),fe=new yv(B,ee,e),ee.init(fe),Re=new sM(B,ee,fe),j=new nM(B,ee,fe),Ne=new Cv(B),Se=new Wy,C=new iM(B,ee,j,Se,fe,Re,Ne),w=new Sv(M),V=new wv(M),ce=new zg(B,fe),Ze=new _v(B,ee,ce,fe),oe=new Av(B,ce,Ne,Ze),re=new Dv(B,oe,ce,Ne),Qe=new Iv(B,fe,C),Xe=new Mv(Se),Ie=new Vy(M,w,V,ee,fe,Ze,Xe),xe=new oM(M,Se),be=new qy,Be=new Qy(ee,fe),Ke=new xv(M,w,V,j,re,p,l),he=new tM(M,re,fe),ht=new aM(B,Ne,fe,j),ke=new vv(B,ee,Ne,fe),ze=new Rv(B,ee,Ne,fe),Ne.programs=Ie.programs,M.capabilities=fe,M.extensions=ee,M.properties=Se,M.renderLists=be,M.shadowMap=he,M.state=j,M.info=Ne}le();let ue=new Eh(M,B);this.xr=ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let P=ee.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ee.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(A,U,!1))},this.getSize=function(P){return P.set(A,U)},this.setSize=function(P,W,Z=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=P,U=W,t.width=Math.floor(P*H),t.height=Math.floor(W*H),Z===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(A*H,U*H).floor()},this.setDrawingBufferSize=function(P,W,Z){A=P,U=W,H=Z,t.width=Math.floor(P*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(v)},this.getViewport=function(P){return P.copy(X)},this.setViewport=function(P,W,Z,J){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,W,Z,J),j.viewport(v.copy(X).multiplyScalar(H).floor())},this.getScissor=function(P){return P.copy(q)},this.setScissor=function(P,W,Z,J){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,W,Z,J),j.scissor(D.copy(q).multiplyScalar(H).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(P){j.setScissorTest(ie=P)},this.setOpaqueSort=function(P){N=P},this.setTransparentSort=function(P){k=P},this.getClearColor=function(P){return P.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(P=!0,W=!0,Z=!0){let J=0;if(P){let Y=!1;if(y!==null){let we=y.texture.format;Y=we===Kf||we===Jf||we===$f}if(Y){let we=y.texture.type,Oe=we===Ki||we===Yi||we===eu||we===ws||we===Yf||we===Zf,Ge=Ke.getClearColor(),We=Ke.getClearAlpha(),tt=Ge.r,$e=Ge.g,Je=Ge.b;Oe?(m[0]=tt,m[1]=$e,m[2]=Je,m[3]=We,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=tt,x[1]=$e,x[2]=Je,x[3]=We,B.clearBufferiv(B.COLOR,0,x))}else J|=B.COLOR_BUFFER_BIT}W&&(J|=B.DEPTH_BUFFER_BIT),Z&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),be.dispose(),Be.dispose(),Se.dispose(),w.dispose(),V.dispose(),re.dispose(),Ze.dispose(),ht.dispose(),Ie.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Ft),ue.removeEventListener("sessionend",Ye),ye&&(ye.dispose(),ye=null),pt.stop()};function $(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let P=Ne.autoReset,W=he.enabled,Z=he.autoUpdate,J=he.needsUpdate,Y=he.type;le(),Ne.autoReset=P,he.enabled=W,he.autoUpdate=Z,he.needsUpdate=J,he.type=Y}function ne(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function se(P){let W=P.target;W.removeEventListener("dispose",se),Me(W)}function Me(P){Ee(P),Se.remove(P)}function Ee(P){let W=Se.get(P).programs;W!==void 0&&(W.forEach(function(Z){Ie.releaseProgram(Z)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Z,J,Y,we){W===null&&(W=Te);let Oe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ge=Jo(P,W,Z,J,Y);j.setMaterial(J,Oe);let We=Z.index,tt=1;if(J.wireframe===!0){if(We=oe.getWireframeAttribute(Z),We===void 0)return;tt=2}let $e=Z.drawRange,Je=Z.attributes.position,Vt=$e.start*tt,Un=($e.start+$e.count)*tt;we!==null&&(Vt=Math.max(Vt,we.start*tt),Un=Math.min(Un,(we.start+we.count)*tt)),We!==null?(Vt=Math.max(Vt,0),Un=Math.min(Un,We.count)):Je!=null&&(Vt=Math.max(Vt,0),Un=Math.min(Un,Je.count));let tn=Un-Vt;if(tn<0||tn===1/0)return;Ze.setup(Y,J,Ge,Z,We);let yi,Ut=ke;if(We!==null&&(yi=ce.get(We),Ut=ze,Ut.setIndex(yi)),Y.isMesh)J.wireframe===!0?(j.setLineWidth(J.wireframeLinewidth*He()),Ut.setMode(B.LINES)):Ut.setMode(B.TRIANGLES);else if(Y.isLine){let nt=J.linewidth;nt===void 0&&(nt=1),j.setLineWidth(nt*He()),Y.isLineSegments?Ut.setMode(B.LINES):Y.isLineLoop?Ut.setMode(B.LINE_LOOP):Ut.setMode(B.LINE_STRIP)}else Y.isPoints?Ut.setMode(B.POINTS):Y.isSprite&&Ut.setMode(B.TRIANGLES);if(Y.isBatchedMesh)Ut.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Ut.renderInstances(Vt,tn,Y.count);else if(Z.isInstancedBufferGeometry){let nt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,pc=Math.min(Z.instanceCount,nt);Ut.renderInstances(Vt,tn,pc)}else Ut.render(Vt,tn)};function qe(P,W,Z){P.transparent===!0&&P.side===bt&&P.forceSinglePass===!1?(P.side=rn,P.needsUpdate=!0,qt(P,W,Z),P.side=Qi,P.needsUpdate=!0,qt(P,W,Z),P.side=bt):qt(P,W,Z)}this.compile=function(P,W,Z=null){Z===null&&(Z=P),f=Be.get(Z),f.init(),S.push(f),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),P!==Z&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(f.pushLight(Y),Y.castShadow&&f.pushShadow(Y))}),f.setupLights(M._useLegacyLights);let J=new Set;return P.traverse(function(Y){let we=Y.material;if(we)if(Array.isArray(we))for(let Oe=0;Oe<we.length;Oe++){let Ge=we[Oe];qe(Ge,Z,Y),J.add(Ge)}else qe(we,Z,Y),J.add(we)}),S.pop(),f=null,J},this.compileAsync=function(P,W,Z=null){let J=this.compile(P,W,Z);return new Promise(Y=>{function we(){if(J.forEach(function(Oe){Se.get(Oe).currentProgram.isReady()&&J.delete(Oe)}),J.size===0){Y(P);return}setTimeout(we,10)}ee.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let rt=null;function xt(P){rt&&rt(P)}function Ft(){pt.stop()}function Ye(){pt.start()}let pt=new rp;pt.setAnimationLoop(xt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(P){rt=P,ue.setAnimationLoop(P),P===null?pt.stop():pt.start()},ue.addEventListener("sessionstart",Ft),ue.addEventListener("sessionend",Ye),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(W),W=ue.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,W,y),f=Be.get(P,S.length),f.init(),S.push(f),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(pe),me=this.localClippingEnabled,K=Xe.init(this.clippingPlanes,me),g=be.get(P,u.length),g.init(),u.push(g),vn(P,W,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(N,k),this.info.render.frame++,K===!0&&Xe.beginShadows();let Z=f.state.shadowsArray;if(he.render(Z,P,W),K===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(g,P),f.setupLights(M._useLegacyLights),W.isArrayCamera){let J=W.cameras;for(let Y=0,we=J.length;Y<we;Y++){let Oe=J[Y];Hi(g,P,Oe,Oe.viewport)}}else Hi(g,P,W);y!==null&&(C.updateMultisampleRenderTarget(y),C.updateRenderTargetMipmap(y)),P.isScene===!0&&P.onAfterRender(M,P,W),Ze.resetDefaultState(),T=-1,E=null,S.pop(),S.length>0?f=S[S.length-1]:f=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function vn(P,W,Z,J){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)f.pushLight(P),P.castShadow&&f.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){J&&Fe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(pe);let Oe=re.update(P),Ge=P.material;Ge.visible&&g.push(P,Oe,Ge,Z,Fe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||G.intersectsObject(P))){let Oe=re.update(P),Ge=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Fe.copy(P.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Fe.copy(Oe.boundingSphere.center)),Fe.applyMatrix4(P.matrixWorld).applyMatrix4(pe)),Array.isArray(Ge)){let We=Oe.groups;for(let tt=0,$e=We.length;tt<$e;tt++){let Je=We[tt],Vt=Ge[Je.materialIndex];Vt&&Vt.visible&&g.push(P,Oe,Vt,Z,Fe.z,Je)}}else Ge.visible&&g.push(P,Oe,Ge,Z,Fe.z,null)}}let we=P.children;for(let Oe=0,Ge=we.length;Oe<Ge;Oe++)vn(we[Oe],W,Z,J)}function Hi(P,W,Z,J){let Y=P.opaque,we=P.transmissive,Oe=P.transparent;f.setupLightsView(Z),K===!0&&Xe.setGlobalState(M.clippingPlanes,Z),we.length>0&&ki(Y,we,W,Z),J&&j.viewport(v.copy(J)),Y.length>0&&_t(Y,W,Z),we.length>0&&_t(we,W,Z),Oe.length>0&&_t(Oe,W,Z),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ki(P,W,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let we=fe.isWebGL2;ye===null&&(ye=new En(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")?ni:Ki,minFilter:_o,samples:we?4:0})),M.getDrawingBufferSize(Ue),we?ye.setSize(Ue.x,Ue.y):ye.setSize(ch(Ue.x),ch(Ue.y));let Oe=M.getRenderTarget();M.setRenderTarget(ye),M.getClearColor(I),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();let Ge=M.toneMapping;M.toneMapping=Ji,_t(P,Z,J),C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye);let We=!1;for(let tt=0,$e=W.length;tt<$e;tt++){let Je=W[tt],Vt=Je.object,Un=Je.geometry,tn=Je.material,yi=Je.group;if(tn.side===bt&&Vt.layers.test(J.layers)){let Ut=tn.side;tn.side=rn,tn.needsUpdate=!0,Rt(Vt,Z,J,Un,tn,yi),tn.side=Ut,tn.needsUpdate=!0,We=!0}}We===!0&&(C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye)),M.setRenderTarget(Oe),M.setClearColor(I,L),M.toneMapping=Ge}function _t(P,W,Z){let J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,we=P.length;Y<we;Y++){let Oe=P[Y],Ge=Oe.object,We=Oe.geometry,tt=J===null?Oe.material:J,$e=Oe.group;Ge.layers.test(Z.layers)&&Rt(Ge,W,Z,We,tt,$e)}}function Rt(P,W,Z,J,Y,we){P.onBeforeRender(M,W,Z,J,Y,we),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(M,W,Z,J,P,we),Y.transparent===!0&&Y.side===bt&&Y.forceSinglePass===!1?(Y.side=rn,Y.needsUpdate=!0,M.renderBufferDirect(Z,W,J,Y,P,we),Y.side=Qi,Y.needsUpdate=!0,M.renderBufferDirect(Z,W,J,Y,P,we),Y.side=bt):M.renderBufferDirect(Z,W,J,Y,P,we),P.onAfterRender(M,W,Z,J,Y,we)}function qt(P,W,Z){W.isScene!==!0&&(W=Te);let J=Se.get(P),Y=f.state.lights,we=f.state.shadowsArray,Oe=Y.state.version,Ge=Ie.getParameters(P,Y.state,we,W,Z),We=Ie.getProgramCacheKey(Ge),tt=J.programs;J.environment=P.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(P.isMeshStandardMaterial?V:w).get(P.envMap||J.environment),tt===void 0&&(P.addEventListener("dispose",se),tt=new Map,J.programs=tt);let $e=tt.get(We);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===Oe)return Qr(P,Ge),$e}else Ge.uniforms=Ie.getUniforms(P),P.onBuild(Z,Ge,M),P.onBeforeCompile(Ge,M),$e=Ie.acquireProgram(Ge,We),tt.set(We,$e),J.uniforms=Ge.uniforms;let Je=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Je.clippingPlanes=Xe.uniform),Qr(P,Ge),J.needsLights=eo(P),J.lightsStateVersion=Oe,J.needsLights&&(Je.ambientLightColor.value=Y.state.ambient,Je.lightProbe.value=Y.state.probe,Je.directionalLights.value=Y.state.directional,Je.directionalLightShadows.value=Y.state.directionalShadow,Je.spotLights.value=Y.state.spot,Je.spotLightShadows.value=Y.state.spotShadow,Je.rectAreaLights.value=Y.state.rectArea,Je.ltc_1.value=Y.state.rectAreaLTC1,Je.ltc_2.value=Y.state.rectAreaLTC2,Je.pointLights.value=Y.state.point,Je.pointLightShadows.value=Y.state.pointShadow,Je.hemisphereLights.value=Y.state.hemi,Je.directionalShadowMap.value=Y.state.directionalShadowMap,Je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Je.spotShadowMap.value=Y.state.spotShadowMap,Je.spotLightMatrix.value=Y.state.spotLightMatrix,Je.spotLightMap.value=Y.state.spotLightMap,Je.pointShadowMap.value=Y.state.pointShadowMap,Je.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=$e,J.uniformsList=null,$e}function Ys(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=vr.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Qr(P,W){let Z=Se.get(P);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Jo(P,W,Z,J,Y){W.isScene!==!0&&(W=Te),C.resetTextureUnits();let we=W.fog,Oe=J.isMeshStandardMaterial?W.environment:null,Ge=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ii,We=(J.isMeshStandardMaterial?V:w).get(J.envMap||Oe),tt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!Z.morphAttributes.position,Vt=!!Z.morphAttributes.normal,Un=!!Z.morphAttributes.color,tn=Ji;J.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(tn=M.toneMapping);let yi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ut=yi!==void 0?yi.length:0,nt=Se.get(J),pc=f.state.lights;if(K===!0&&(me===!0||P!==E)){let kn=P===E&&J.id===T;Xe.setState(J,P,kn)}let Bt=!1;J.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==pc.state.version||nt.outputColorSpace!==Ge||Y.isBatchedMesh&&nt.batching===!1||!Y.isBatchedMesh&&nt.batching===!0||Y.isInstancedMesh&&nt.instancing===!1||!Y.isInstancedMesh&&nt.instancing===!0||Y.isSkinnedMesh&&nt.skinning===!1||!Y.isSkinnedMesh&&nt.skinning===!0||Y.isInstancedMesh&&nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&nt.instancingColor===!1&&Y.instanceColor!==null||nt.envMap!==We||J.fog===!0&&nt.fog!==we||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Xe.numPlanes||nt.numIntersection!==Xe.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==$e||nt.morphTargets!==Je||nt.morphNormals!==Vt||nt.morphColors!==Un||nt.toneMapping!==tn||fe.isWebGL2===!0&&nt.morphTargetsCount!==Ut)&&(Bt=!0):(Bt=!0,nt.__version=J.version);let ms=nt.currentProgram;Bt===!0&&(ms=qt(J,W,Y));let ad=!1,to=!1,mc=!1,dn=ms.getUniforms(),gs=nt.uniforms;if(j.useProgram(ms.program)&&(ad=!0,to=!0,mc=!0),J.id!==T&&(T=J.id,to=!0),ad||E!==P){dn.setValue(B,"projectionMatrix",P.projectionMatrix),dn.setValue(B,"viewMatrix",P.matrixWorldInverse);let kn=dn.map.cameraPosition;kn!==void 0&&kn.setValue(B,Fe.setFromMatrixPosition(P.matrixWorld)),fe.logarithmicDepthBuffer&&dn.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&dn.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,to=!0,mc=!0)}if(Y.isSkinnedMesh){dn.setOptional(B,Y,"bindMatrix"),dn.setOptional(B,Y,"bindMatrixInverse");let kn=Y.skeleton;kn&&(fe.floatVertexTextures?(kn.boneTexture===null&&kn.computeBoneTexture(),dn.setValue(B,"boneTexture",kn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(dn.setOptional(B,Y,"batchingTexture"),dn.setValue(B,"batchingTexture",Y._matricesTexture,C));let gc=Z.morphAttributes;if((gc.position!==void 0||gc.normal!==void 0||gc.color!==void 0&&fe.isWebGL2===!0)&&Qe.update(Y,Z,ms),(to||nt.receiveShadow!==Y.receiveShadow)&&(nt.receiveShadow=Y.receiveShadow,dn.setValue(B,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(gs.envMap.value=We,gs.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),to&&(dn.setValue(B,"toneMappingExposure",M.toneMappingExposure),nt.needsLights&&jr(gs,mc),we&&J.fog===!0&&xe.refreshFogUniforms(gs,we),xe.refreshMaterialUniforms(gs,J,H,U,ye),vr.upload(B,Ys(nt),gs,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(vr.upload(B,Ys(nt),gs,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&dn.setValue(B,"center",Y.center),dn.setValue(B,"modelViewMatrix",Y.modelViewMatrix),dn.setValue(B,"normalMatrix",Y.normalMatrix),dn.setValue(B,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let kn=J.uniformsGroups;for(let xc=0,y0=kn.length;xc<y0;xc++)if(fe.isWebGL2){let ld=kn[xc];ht.update(ld,ms),ht.bind(ld,ms)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ms}function jr(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function eo(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(P,W,Z){Se.get(P.texture).__webglTexture=W,Se.get(P.depthTexture).__webglTexture=Z;let J=Se.get(P);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){let Z=Se.get(P);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Z=0){y=P,R=W,b=Z;let J=!0,Y=null,we=!1,Oe=!1;if(P){let We=Se.get(P);We.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(B.FRAMEBUFFER,null),J=!1):We.__webglFramebuffer===void 0?C.setupRenderTarget(P):We.__hasExternalTextures&&C.rebindTextures(P,Se.get(P.texture).__webglTexture,Se.get(P.depthTexture).__webglTexture);let tt=P.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Oe=!0);let $e=Se.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($e[W])?Y=$e[W][Z]:Y=$e[W],we=!0):fe.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?Y=Se.get(P).__webglMultisampledFramebuffer:Array.isArray($e)?Y=$e[Z]:Y=$e,v.copy(P.viewport),D.copy(P.scissor),z=P.scissorTest}else v.copy(X).multiplyScalar(H).floor(),D.copy(q).multiplyScalar(H).floor(),z=ie;if(j.bindFramebuffer(B.FRAMEBUFFER,Y)&&fe.drawBuffers&&J&&j.drawBuffers(P,Y),j.viewport(v),j.scissor(D),j.setScissorTest(z),we){let We=Se.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,We.__webglTexture,Z)}else if(Oe){let We=Se.get(P.texture),tt=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,Z||0,tt)}T=-1},this.readRenderTargetPixels=function(P,W,Z,J,Y,we,Oe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){j.bindFramebuffer(B.FRAMEBUFFER,Ge);try{let We=P.texture,tt=We.format,$e=We.type;if(tt!==ti&&Re.convert(tt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=$e===ni&&(ee.has("EXT_color_buffer_half_float")||fe.isWebGL2&&ee.has("EXT_color_buffer_float"));if($e!==Ki&&Re.convert($e)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Zi&&(fe.isWebGL2||ee.has("OES_texture_float")||ee.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-J&&Z>=0&&Z<=P.height-Y&&B.readPixels(W,Z,J,Y,Re.convert(tt),Re.convert($e),we)}finally{let We=y!==null?Se.get(y).__webglFramebuffer:null;j.bindFramebuffer(B.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(P,W,Z=0){let J=Math.pow(2,-Z),Y=Math.floor(W.image.width*J),we=Math.floor(W.image.height*J);C.setTexture2D(W,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,P.x,P.y,Y,we),j.unbindTexture()},this.copyTextureToTexture=function(P,W,Z,J=0){let Y=W.image.width,we=W.image.height,Oe=Re.convert(Z.format),Ge=Re.convert(Z.type);C.setTexture2D(Z,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,J,P.x,P.y,Y,we,Oe,Ge,W.image.data):W.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,J,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Oe,W.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,J,P.x,P.y,Oe,Ge,W.image),J===0&&Z.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Z,J,Y=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=P.max.x-P.min.x+1,Oe=P.max.y-P.min.y+1,Ge=P.max.z-P.min.z+1,We=Re.convert(J.format),tt=Re.convert(J.type),$e;if(J.isData3DTexture)C.setTexture3D(J,0),$e=B.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)C.setTexture2DArray(J,0),$e=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);let Je=B.getParameter(B.UNPACK_ROW_LENGTH),Vt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Un=B.getParameter(B.UNPACK_SKIP_PIXELS),tn=B.getParameter(B.UNPACK_SKIP_ROWS),yi=B.getParameter(B.UNPACK_SKIP_IMAGES),Ut=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,P.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,P.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,P.min.z),Z.isDataTexture||Z.isData3DTexture?B.texSubImage3D($e,Y,W.x,W.y,W.z,we,Oe,Ge,We,tt,Ut.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D($e,Y,W.x,W.y,W.z,we,Oe,Ge,We,Ut.data)):B.texSubImage3D($e,Y,W.x,W.y,W.z,we,Oe,Ge,We,tt,Ut),B.pixelStorei(B.UNPACK_ROW_LENGTH,Je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Un),B.pixelStorei(B.UNPACK_SKIP_ROWS,tn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,yi),Y===0&&J.generateMipmaps&&B.generateMipmap($e),j.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),j.unbindTexture()},this.resetState=function(){R=0,b=0,y=null,j.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===tu?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===pl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?As:jf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===As?gt:Ii}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},bh=class extends yo{};bh.prototype.isWebGL1Renderer=!0;$a=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Tr=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},wh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ah,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},yn=new F,Ja=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rs=class extends Ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},oo=new F,ur=new F,dr=new F,fr=new ae,ao=new ae,up=new ut,va=new F,lo=new F,ya=new F,Pf=new ae,Jc=new ae,Lf=new ae,Ar=class extends Wt{constructor(e=new Rs){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new $t;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wh(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Ja(i,3,0,!1)),hr.setAttribute("uv",new Ja(i,2,3,!1))}this.geometry=hr,this.material=e,this.center=new ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Ma(va.set(-.5,-.5,0),dr,o,ur,s,r),Ma(lo.set(.5,-.5,0),dr,o,ur,s,r),Ma(ya.set(.5,.5,0),dr,o,ur,s,r),Pf.set(0,0),Jc.set(1,0),Lf.set(1,1);let a=e.ray.intersectTriangle(va,lo,ya,!1,oo);if(a===null&&(Ma(lo.set(-.5,.5,0),dr,o,ur,s,r),Jc.set(0,1),a=e.ray.intersectTriangle(va,ya,lo,!1,oo),a===null))return;let l=e.ray.origin.distanceTo(oo);l<e.near||l>e.far||t.push({distance:l,point:oo.clone(),uv:bs.getInterpolation(oo,va,lo,ya,Pf,Jc,Lf,new ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ka=class extends mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},pr=new ut,If=new ut,Sa=[],Df=new Di,lM=new ut,co=new te,ho=new es,Lt=class extends te{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ka(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,lM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),Df.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(Df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,pr),ho.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(co.geometry=this.geometry,co.material=this.material,co.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(i),e.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),If.multiplyMatrices(i,pr),co.matrixWorld=If,co.raycast(e,Sa);for(let o=0,a=Sa.length;o<a;o++){let l=Sa[o];l.instanceId=r,l.object=this,t.push(l)}Sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ka(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Mo=class extends Ui{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uf=new ut,Th=new ka,Ea=new es,ba=new F,Qa=class extends Wt{constructor(e=new $t,t=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Uf.copy(s).invert(),Th.copy(e.ray).applyMatrix4(Uf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=p,g=m;x<g;x++){let f=c.getX(x);ba.fromBufferAttribute(d,f),Nf(ba,f,l,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=p,g=m;x<g;x++)ba.fromBufferAttribute(d,x),Nf(ba,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};an=class extends Xn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ae:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new F,s=[],r=[],o=[],a=new F,l=new ut;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(sn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(sn(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},So=class extends qn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new ae,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*d+this.aX,c=p*d+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ah=class extends So{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};wa=new F,Kc=new iu,Qc=new iu,jc=new iu,Rh=class extends qn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new F){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(wa.subVectors(s[0],s[1]).add(s[0]),c=wa);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(wa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(h),m);g<1e-4&&(g=1),x<1e-4&&(x=g),f<1e-4&&(f=g),Kc.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,x,g,f),Qc.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,x,g,f),jc.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,x,g,f)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Qc.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),jc.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return i.set(Kc.calc(l),Qc.calc(l),jc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ja=class extends qn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(go(e,s.x,r.x,o.x,a.x),go(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ch=class extends qn{constructor(e=new F,t=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(go(e,s.x,r.x,o.x,a.x),go(e,s.y,r.y,o.y,a.y),go(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends qn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ph=class extends qn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends qn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mo(e,s.x,r.x,o.x),mo(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lh=class extends qn{constructor(e=new F,t=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new F){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(mo(e,s.x,r.x,o.x),mo(e,s.y,r.y,o.y),mo(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Of(a,l.x,c.x,h.x,d.x),Of(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Ih=Object.freeze({__proto__:null,ArcCurve:Ah,CatmullRomCurve3:Rh,CubicBezierCurve:ja,CubicBezierCurve3:Ch,EllipseCurve:So,LineCurve:el,LineCurve3:Ph,QuadraticBezierCurve:tl,QuadraticBezierCurve3:Lh,SplineCurve:nl}),Dh=class extends qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ih[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Ih[s.type]().fromJSON(s))}return this}},Cs=class extends Dh{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new el(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new tl(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new ja(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new nl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new So(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Uh=class n extends $t{constructor(e=[new ae(0,-.5),new ae(.5,0),new ae(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=sn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new F,p=new ae,m=new F,x=new F,g=new F,f=0,u=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:f=e[S+1].x-e[S].x,u=e[S+1].y-e[S].y,m.x=u*1,m.y=-f,m.z=u*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:f=e[S+1].x-e[S].x,u=e[S+1].y-e[S].y,m.x=u*1,m.y=-f,m.z=u*0,x.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(x)}for(let S=0;S<=t;S++){let M=i+S*h*s,_=Math.sin(M),R=Math.cos(M);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*_,d.y=e[b].y,d.z=e[b].x*R,o.push(d.x,d.y,d.z),p.x=S/t,p.y=b/(e.length-1),a.push(p.x,p.y);let y=l[3*b+0]*_,T=l[3*b+1],E=l[3*b+0]*R;c.push(y,T,E)}}for(let S=0;S<t;S++)for(let M=0;M<e.length-1;M++){let _=M+S*e.length,R=_,b=_+e.length,y=_+e.length+1,T=_+1;r.push(R,b,T),r.push(y,T,b)}this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("uv",new dt(a,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},il=class n extends Uh{constructor(e=1,t=1,i=4,s=8){let r=new Cs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Rr=class n extends $t{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,h=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let m=i+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(a,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mt=class n extends $t{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],m=[],x=0,g=[],f=i/2,u=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(m,2));function S(){let _=new F,R=new F,b=0,y=(t-e)/i;for(let T=0;T<=r;T++){let E=[],v=T/r,D=v*(t-e)+e;for(let z=0;z<=s;z++){let I=z/s,L=I*l+a,A=Math.sin(L),U=Math.cos(L);R.x=D*A,R.y=-v*i+f,R.z=D*U,d.push(R.x,R.y,R.z),_.set(A,y,U).normalize(),p.push(_.x,_.y,_.z),m.push(I,1-v),E.push(x++)}g.push(E)}for(let T=0;T<s;T++)for(let E=0;E<r;E++){let v=g[E][T],D=g[E+1][T],z=g[E+1][T+1],I=g[E][T+1];h.push(v,D,I),h.push(D,z,I),b+=6}c.addGroup(u,b,0),u+=b}function M(_){let R=x,b=new ae,y=new F,T=0,E=_===!0?e:t,v=_===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,f*v,0),p.push(0,v,0),m.push(.5,.5),x++;let D=x;for(let z=0;z<=s;z++){let L=z/s*l+a,A=Math.cos(L),U=Math.sin(L);y.x=E*U,y.y=f*v,y.z=E*A,d.push(y.x,y.y,y.z),p.push(0,v,0),b.x=A*.5+.5,b.y=U*.5*v+.5,m.push(b.x,b.y),x++}for(let z=0;z<s;z++){let I=R+z,L=D+z;_===!0?h.push(L,L+1,I):h.push(L+1,L,I),T+=3}c.addGroup(u,T,_===!0?1:2),u+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cr=class n extends Mt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Eo=class extends Cs{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Cs().fromJSON(s))}return this}},gM={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=dp(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,p,m;if(i&&(r=MM(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let x=t;x<s;x+=t)d=n[x],p=n[x+1],d<a&&(a=d),p<l&&(l=p),d>c&&(c=d),p>h&&(h=p);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return bo(r,o,t,a,l,m,0),o}};xo=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ff(e),Bf(i,e);let o=e.length;t.forEach(Ff);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bf(i,t[l]);let a=gM.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};sl=class n extends $t{constructor(e=new Eo([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:DM,M,_=!1,R,b,y,T;u&&(M=u.getSpacedPoints(h),_=!0,p=!1,R=u.computeFrenetFrames(h,!1),b=new F,y=new F,T=new F),p||(f=0,m=0,x=0,g=0);let E=a.extractPoints(c),v=E.shape,D=E.holes;if(!xo.isClockWise(v)){v=v.reverse();for(let B=0,ge=D.length;B<ge;B++){let ee=D[B];xo.isClockWise(ee)&&(D[B]=ee.reverse())}}let I=xo.triangulateShape(v,D),L=v;for(let B=0,ge=D.length;B<ge;B++){let ee=D[B];v=v.concat(ee)}function A(B,ge,ee){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(ge,ee)}let U=v.length,H=I.length;function N(B,ge,ee){let fe,j,Ne,Se=B.x-ge.x,C=B.y-ge.y,w=ee.x-B.x,V=ee.y-B.y,ce=Se*Se+C*C,oe=Se*V-C*w;if(Math.abs(oe)>Number.EPSILON){let re=Math.sqrt(ce),Ie=Math.sqrt(w*w+V*V),xe=ge.x-C/re,be=ge.y+Se/re,Be=ee.x-V/Ie,Xe=ee.y+w/Ie,he=((Be-xe)*V-(Xe-be)*w)/(Se*V-C*w);fe=xe+Se*he-B.x,j=be+C*he-B.y;let Ke=fe*fe+j*j;if(Ke<=2)return new ae(fe,j);Ne=Math.sqrt(Ke/2)}else{let re=!1;Se>Number.EPSILON?w>Number.EPSILON&&(re=!0):Se<-Number.EPSILON?w<-Number.EPSILON&&(re=!0):Math.sign(C)===Math.sign(V)&&(re=!0),re?(fe=-C,j=Se,Ne=Math.sqrt(ce)):(fe=Se,j=C,Ne=Math.sqrt(ce/2))}return new ae(fe/Ne,j/Ne)}let k=[];for(let B=0,ge=L.length,ee=ge-1,fe=B+1;B<ge;B++,ee++,fe++)ee===ge&&(ee=0),fe===ge&&(fe=0),k[B]=N(L[B],L[ee],L[fe]);let X=[],q,ie=k.concat();for(let B=0,ge=D.length;B<ge;B++){let ee=D[B];q=[];for(let fe=0,j=ee.length,Ne=j-1,Se=fe+1;fe<j;fe++,Ne++,Se++)Ne===j&&(Ne=0),Se===j&&(Se=0),q[fe]=N(ee[fe],ee[Ne],ee[Se]);X.push(q),ie=ie.concat(q)}for(let B=0;B<f;B++){let ge=B/f,ee=m*Math.cos(ge*Math.PI/2),fe=x*Math.sin(ge*Math.PI/2)+g;for(let j=0,Ne=L.length;j<Ne;j++){let Se=A(L[j],k[j],fe);pe(Se.x,Se.y,-ee)}for(let j=0,Ne=D.length;j<Ne;j++){let Se=D[j];q=X[j];for(let C=0,w=Se.length;C<w;C++){let V=A(Se[C],q[C],fe);pe(V.x,V.y,-ee)}}}let G=x+g;for(let B=0;B<U;B++){let ge=p?A(v[B],ie[B],G):v[B];_?(y.copy(R.normals[0]).multiplyScalar(ge.x),b.copy(R.binormals[0]).multiplyScalar(ge.y),T.copy(M[0]).add(y).add(b),pe(T.x,T.y,T.z)):pe(ge.x,ge.y,0)}for(let B=1;B<=h;B++)for(let ge=0;ge<U;ge++){let ee=p?A(v[ge],ie[ge],G):v[ge];_?(y.copy(R.normals[B]).multiplyScalar(ee.x),b.copy(R.binormals[B]).multiplyScalar(ee.y),T.copy(M[B]).add(y).add(b),pe(T.x,T.y,T.z)):pe(ee.x,ee.y,d/h*B)}for(let B=f-1;B>=0;B--){let ge=B/f,ee=m*Math.cos(ge*Math.PI/2),fe=x*Math.sin(ge*Math.PI/2)+g;for(let j=0,Ne=L.length;j<Ne;j++){let Se=A(L[j],k[j],fe);pe(Se.x,Se.y,d+ee)}for(let j=0,Ne=D.length;j<Ne;j++){let Se=D[j];q=X[j];for(let C=0,w=Se.length;C<w;C++){let V=A(Se[C],q[C],fe);_?pe(V.x,V.y+M[h-1].y,M[h-1].x+ee):pe(V.x,V.y,d+ee)}}}K(),me();function K(){let B=s.length/3;if(p){let ge=0,ee=U*ge;for(let fe=0;fe<H;fe++){let j=I[fe];Ue(j[2]+ee,j[1]+ee,j[0]+ee)}ge=h+f*2,ee=U*ge;for(let fe=0;fe<H;fe++){let j=I[fe];Ue(j[0]+ee,j[1]+ee,j[2]+ee)}}else{for(let ge=0;ge<H;ge++){let ee=I[ge];Ue(ee[2],ee[1],ee[0])}for(let ge=0;ge<H;ge++){let ee=I[ge];Ue(ee[0]+U*h,ee[1]+U*h,ee[2]+U*h)}}i.addGroup(B,s.length/3-B,0)}function me(){let B=s.length/3,ge=0;ye(L,ge),ge+=L.length;for(let ee=0,fe=D.length;ee<fe;ee++){let j=D[ee];ye(j,ge),ge+=j.length}i.addGroup(B,s.length/3-B,1)}function ye(B,ge){let ee=B.length;for(;--ee>=0;){let fe=ee,j=ee-1;j<0&&(j=B.length-1);for(let Ne=0,Se=h+f*2;Ne<Se;Ne++){let C=U*Ne,w=U*(Ne+1),V=ge+fe+C,ce=ge+j+C,oe=ge+j+w,re=ge+fe+w;Fe(V,ce,oe,re)}}}function pe(B,ge,ee){l.push(B),l.push(ge),l.push(ee)}function Ue(B,ge,ee){Te(B),Te(ge),Te(ee);let fe=s.length/3,j=S.generateTopUV(i,s,fe-3,fe-2,fe-1);He(j[0]),He(j[1]),He(j[2])}function Fe(B,ge,ee,fe){Te(B),Te(ge),Te(fe),Te(ge),Te(ee),Te(fe);let j=s.length/3,Ne=S.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);He(Ne[0]),He(Ne[1]),He(Ne[3]),He(Ne[1]),He(Ne[2]),He(Ne[3])}function Te(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function He(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return UM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ih[s.type]().fromJSON(s)),new n(i,e.options)}},DM={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,o),new ae(a,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2],g=e[r*3],f=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ae(o,1-l),new ae(c,1-d),new ae(p,1-x),new ae(g,1-u)]:[new ae(a,1-l),new ae(h,1-d),new ae(m,1-x),new ae(f,1-u)]}};ui=class n extends $t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,p=(t-e)/s,m=new F,x=new ae;for(let g=0;g<=s;g++){for(let f=0;f<=i;f++){let u=r+f/i*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}d+=p}for(let g=0;g<s;g++){let f=g*(i+1);for(let u=0;u<i;u++){let S=u+f,M=S,_=S+i+1,R=S+i+2,b=S+1;a.push(M,_,b),a.push(_,R,b)}}this.setIndex(a),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Kt=class n extends $t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new F,p=new F,m=[],x=[],g=[],f=[];for(let u=0;u<=i;u++){let S=[],M=u/i,_=0;u===0&&o===0?_=.5/t:u===i&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let b=R/t;d.x=-e*Math.cos(s+b*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+b*r)*Math.sin(o+M*a),x.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),f.push(b+_,1-M),S.push(c++)}h.push(S)}for(let u=0;u<i;u++)for(let S=0;S<t;S++){let M=h[u][S+1],_=h[u][S],R=h[u+1][S],b=h[u+1][S+1];(u!==0||o>0)&&m.push(M,_,b),(u!==i-1||l<Math.PI)&&m.push(_,R,b)}this.setIndex(m),this.setAttribute("position",new dt(x,3)),this.setAttribute("normal",new dt(g,3)),this.setAttribute("uv",new dt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},rl=class n extends $t{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,d=new F,p=new F;for(let m=0;m<=i;m++)for(let x=0;x<=s;x++){let g=x/s*r,f=m/i*Math.PI*2;d.x=(e+t*Math.cos(f))*Math.cos(g),d.y=(e+t*Math.cos(f))*Math.sin(g),d.z=t*Math.sin(f),a.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=s;x++){let g=(s+1)*m+x-1,f=(s+1)*(m-1)+x-1,u=(s+1)*(m-1)+x,S=(s+1)*m+x;o.push(g,f,S),o.push(f,u,S)}this.setIndex(o),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ol=class extends Jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},_e=class extends Ui{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ep,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ts=class extends _e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Pr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends Pr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hd,endingEnd:Hd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case kd:r=e,a=2*t-i;break;case Gd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case kd:o=e,l=2*i-t;break;case Gd:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),g=x*x,f=g*x,u=-p*f+2*p*g-p*x,S=(1+p)*f+(-1.5-2*p)*g+(-.5+p)*x+1,M=(-1-m)*f+(1.5+m)*g+.5*x,_=m*f-m*g;for(let R=0;R!==a;++R)r[R]=u*o[h+R]+S*o[c+R]+M*o[l+R]+_*o[d+R];return r}},Fh=class extends Pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*h;return r}},Bh=class extends Pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ii=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Bh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pa:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&NM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===wc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,p=d-i,m=d+i;for(let x=0;x!==i;++x){let g=t[d+x];if(g!==t[p+x]||g!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=La;Ls=class extends ii{};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Pa;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;Hh=class extends ii{};Hh.prototype.ValueTypeName="color";kh=class extends ii{};kh.prototype.ValueTypeName="number";Gh=class extends Pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Pn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ao=class extends ii{InterpolantFactoryMethodLinear(e){return new Gh(this.times,this.values,this.getValueSize(),e)}};Ao.prototype.ValueTypeName="quaternion";Ao.prototype.DefaultInterpolation=La;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;Is=class extends ii{};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Pa;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;Vh=class extends ii{};Vh.prototype.ValueTypeName="vector";Wh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},OM=new Wh,Xh=class{constructor(e){this.manager=e!==void 0?e:OM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xh.DEFAULT_MATERIAL_NAME="__DEFAULT";Lr=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},al=class extends Lr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},eh=new ut,Hf=new F,kf=new F,Ro=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qh=class extends Ro{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Oa*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ll=class extends Lr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Gf=new ut,uo=new F,th=new F,Yh=class extends Ro{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ae(4,2),this._viewportCount=6,this._viewports=[new Pt(2,1,1,1),new Pt(0,1,1,1),new Pt(3,1,1,1),new Pt(1,1,1,1),new Pt(3,0,1,1),new Pt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),uo.setFromMatrixPosition(e.matrixWorld),i.position.copy(uo),th.copy(i.position),th.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(th),i.updateMatrixWorld(),s.makeTranslation(-uo.x,-uo.y,-uo.z),Gf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gf)}},cl=class extends Lr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Zh=class extends Ro{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hl=class extends Lr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Zh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ul=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Vf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};su="\\[\\]\\.:\\/",zM=new RegExp("["+su+"]","g"),ru="[^"+su+"]",FM="[^"+su.replace("\\.","")+"]",BM=/((?:WC+[\/:])*)/.source.replace("WC",ru),HM=/(WCOD+)?/.source.replace("WCOD",FM),kM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),GM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),VM=new RegExp("^"+BM+HM+kM+GM+"$"),WM=["material","materials","bones","map"],$h=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zM,"")}static parseTrackName(e){let t=VM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);WM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=$h;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];lb=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Cm={};_c(Cm,{RoomEnvironment:()=>Uu});function Hr(n){let e=new ot;return e.color.setScalar(n),e}var Uu,Pm=Nn(()=>{It();Uu=class extends Tr{constructor(e=null){super();let t=new De;t.deleteAttribute("uv");let i=new _e({side:rn}),s=new _e,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new cl(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new te(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new te(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new te(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new te(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new te(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let p=new te(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let m=new te(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let x=new te(t,Hr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let g=new te(t,Hr(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);let f=new te(t,Hr(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let u=new te(t,Hr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let S=new te(t,Hr(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);let M=new te(t,Hr(100));M.position.set(0,20,0),M.scale.set(1,.1,1),this.add(M)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var Gl,Nu=Nn(()=>{Gl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var Fn,EE,Ou,bE,ls,kr=Nn(()=>{It();Fn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},EE=new br(-1,1,1,-1,0,1),Ou=class extends $t{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},bE=new Ou,ls=class{constructor(e){this._mesh=new te(bE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,EE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Gr,zu=Nn(()=>{It();kr();Gr=class extends Fn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ns.clone(e.uniforms),this.material=new Jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ls(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var ko,Vl,Fu=Nn(()=>{kr();ko=class extends Fn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Vl=class extends Fn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Wl,Lm=Nn(()=>{It();Nu();zu();Fu();Fu();Wl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ae);this._width=i.width,this._height=i.height,t=new En(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ni}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gr(Gl),this.copyPass.material.blending=hi,this.clock=new ul}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ko!==void 0&&(o instanceof ko?i=!0:o instanceof Vl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Xl,Im=Nn(()=>{It();kr();Xl=class extends Fn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var Dm,Um=Nn(()=>{It();Dm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var Vr,Nm=Nn(()=>{It();kr();Nu();Um();Vr=class n extends Fn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ae(e.x,e.y):new ae(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new En(r,o,{type:ni}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new En(r,o,{type:ni});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new En(r,o,{type:ni});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=Dm;this.highPassUniforms=ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Jt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Gl;this.copyUniforms=ns.clone(h.uniforms),this.blendMaterial=new Jt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Zt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new ot,this.fsQuad=new ls(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ae(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Jt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ae(.5,.5)},direction:{value:new ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Vr.BlurDirectionX=new ae(1,0);Vr.BlurDirectionY=new ae(0,1)});var Om,zm=Nn(()=>{Om={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var ql,Fm=Nn(()=>{It();kr();zm();ql=class extends Fn{constructor(){super();let e=Om;this.uniforms=ns.clone(e.uniforms),this.material=new ol({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ls(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Co?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Bm={};_c(Bm,{createPostFX:()=>TE});function TE(n,e,t){let i=new Wl(n);i.addPass(new Xl(e,t));let s=new Vr(new ae(window.innerWidth,window.innerHeight),.35,.65,.82);i.addPass(s);let r=new Gr(wE);return i.addPass(r),i.addPass(new ql),{composer:i,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){i.setSize(o,a)},setPixelRatio(o){i.setPixelRatio(o)},render(){i.render()}}}var wE,Hm=Nn(()=>{It();Lm();Im();Nm();zu();Fm();wE={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});It();var lu={};_c(lu,{CAR_DEFS:()=>Ni,applyCarSkin:()=>sS,buildCar:()=>eS,carDef:()=>au,effectiveStats:()=>iS,extrudeProfile:()=>Po,glassMat:()=>_p,paintCar:()=>tS,paintMat:()=>xp,setWheelStyle:()=>nS});It();var Ni=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}},{id:"sedan",name:"Prairie Sedan",desc:"Comfy daily driver. Easy to handle.",price:6e3,colors:[7041664,1718891,15921906,7999504,1316380],stats:{topSpeed:48,accel:14,handling:1,grip:1,nitroTime:3,nitroPower:1.3}},{id:"taxi",name:"Peg City Cab",desc:"Yellow cab with a roof sign. Nimble.",price:7500,colors:[16761856,16761856,15921906],stats:{topSpeed:49,accel:15,handling:1.05,grip:1,nitroTime:3,nitroPower:1.3},extra:"taxi"},{id:"van",name:"Delivery Van",desc:"Big box on wheels. Slow, heavy, tough.",price:9e3,colors:[15921906,2060267,2976335,12589080],stats:{topSpeed:42,accel:12,handling:.8,grip:1,nitroTime:4,nitroPower:1.3}},{id:"police",name:"Interceptor",desc:"Police-spec V8 with a light bar.",price:28e3,colors:[1316380,15921906,1718891],stats:{topSpeed:60,accel:19,handling:1.1,grip:1.15,nitroTime:3.4,nitroPower:1.4},extra:"police"},{id:"hyper",name:"Aurora Hyper",desc:"The fastest thing in the city. Wings and all.",price:9e4,colors:[16735802,11032055,1622208,15921906,1316380],stats:{topSpeed:76,accel:27,handling:1.3,grip:1.4,nitroTime:3.2,nitroPower:1.55}}],au=n=>Ni.find(e=>e.id===n)||Ni[0],xp=n=>new ts({color:n,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),_p=()=>new ts({color:922652,metalness:.9,roughness:.08,envMapIntensity:1.6}),vp=()=>new _e({color:14672872,metalness:1,roughness:.22}),XM=()=>new _e({color:1316378,metalness:.4,roughness:.6}),qM=()=>new _e({color:789775,roughness:.95}),YM=()=>new _e({color:12172998,metalness:1,roughness:.3}),ZM=()=>new _e({color:5922404,metalness:.9,roughness:.45}),$M=()=>new _e({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),JM=()=>new _e({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),KM=()=>new _e({color:15263976,roughness:.5}),mp=(n,e,t)=>({x:n,y:e,r:t}),QM={taxi:"sedan",police:"sedan"},ou={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},sedan:{W:1.84,wb:1.4,wheelR:.33,track:1.58,body:[[2.3,.3],[2.34,.5],[2.15,.68],[1.25,.78],[.6,.82],[-1.5,.84],[-2.1,.8],[-2.3,.62],[-2.3,.36],[-2,.22],[2,.22]],glass:[[.62,.8],[.25,1.28],[-1.05,1.3],[-1.5,.84]],roof:[[.28,1.24],[-1.08,1.26],[-1.12,1.2],[.24,1.18]],splitter:!1},van:{W:2,wb:1.6,wheelR:.36,track:1.68,body:[[2.45,.3],[2.5,.6],[2.35,.95],[1.6,1.1],[.95,1.1],[.95,2],[-2.45,2],[-2.5,1.85],[-2.5,.35],[-2.2,.24],[2.2,.24]],glass:[[1.62,1.1],[1.05,1.95],[.9,1.95],[.9,1.1]],roof:null,splitter:!1},hyper:{W:2.04,wb:1.4,wheelR:.34,track:1.72,body:[[2.4,.2],[2.45,.38],[2.2,.5],[1.2,.6],[.5,.68],[-1.3,.74],[-2,.72],[-2.35,.6],[-2.4,.38],[-2.3,.2],[-2,.14],[2,.14]],glass:[[.6,.66],[0,1],[-.9,1.02],[-1.4,.74]],roof:[[.04,.97],[-.92,.99],[-.95,.93],[0,.92]],wing:!0,splitter:!0,canards:!0},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function Po(n,e,t,i,s=.045){let r=new Eo;r.moveTo(n[0][0],n[0][1]);for(let l=1;l<n.length;l++)r.lineTo(n[l][0],n[l][1]);r.closePath();for(let l of i||[]){let c=new Cs;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new sl(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new te(o,t);return a.castShadow=!0,a}function jM(n,e,t){let i=new lt,s=new te(new Mt(e,e,.26,22),qM());s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);let r=new te(new Mt(e*.52,e*.52,.27,18),ZM());r.rotation.z=Math.PI/2,i.add(r);let o=new te(new rl(e*.62,e*.1,8,22),t);o.rotation.y=Math.PI/2,i.add(o);let a=new lt;for(let h=0;h<5;h++){let d=new te(new De(.05,e*.6,e*.16),t);d.position.y=e*.3;let p=new lt;p.rotation.x=h/5*Math.PI*2,p.add(d),a.add(p)}let l=a.clone();l.rotation.y=Math.PI,i.add(a),i.add(l);let c=new te(new Mt(e*.14,e*.14,.3,12),vp());return c.rotation.z=Math.PI/2,i.add(c),n==="blackout"?t.color.setHex(1513500):n==="gold"?t.color.setHex(13211182):n==="neon"&&t.color.setHex(2287359),i}function eS(n,e,t="stock"){let i=typeof n=="string"?au(n):n||Ni[0],s=i.id||"sport";typeof e!="number"&&(e=typeof i.color=="number"?i.color:i.colors[0]);let r=ou[s]||ou[QM[s]]||ou.sport,o=new lt,a=xp(e),l=_p(),c=vp(),h=XM(),d=[mp(r.wb,r.wheelR,r.wheelR+.13),mp(-r.wb,r.wheelR,r.wheelR+.13)];o.add(Po(r.body,r.W,a,d)),o.add(Po(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(Po(r.roof,r.W-.2,a,null,.02));let p=Math.max(...r.body.map(v=>v[0])),m=Math.min(...r.body.map(v=>v[0])),x=-p,g=-m,f=r.W/2,u=[],S=YM();for(let v of[-1,1])for(let D of[-r.wb,r.wb]){let z=jM(t,r.wheelR,S);z.position.set(v*r.track/2,r.wheelR,D),o.add(z),u.push(z)}let M=$M();for(let v of[-1,1]){let D=new te(new De(.34,.16,.1),h);D.position.set(v*(f-.42),.6,x+.02),o.add(D);let z=new te(new Kt(.085,12,10),M);z.scale.set(1.6,.75,.7),z.position.set(v*(f-.42),.6,x-.03),o.add(z)}let _=new te(new De(f*1.1,.16,.08),h);if(_.position.set(0,.4,x+.01),o.add(_),r.splitter){let v=new te(new De(r.W*.92,.05,.3),h);v.position.set(0,.16,x+.1),o.add(v)}if(r.hoodScoop){let v=new te(new De(.5,.09,.7),h);v.position.set(0,.86,-(r.wb*.55)),o.add(v)}if(r.canards)for(let v of[-1,1]){let D=new te(new De(.22,.03,.3),h);D.position.set(v*(f-.1),.3,x+.12),D.rotation.z=v*.25,o.add(D)}let R=JM(),b=new te(new De(r.W*.78,.1,.06),R);b.position.set(0,.66,g-.02),o.add(b);for(let v of[-1,1]){let D=new te(new De(.12,.06,.065),new _e({color:14540253,emissive:16777215,emissiveIntensity:.6}));D.position.set(v*.28,.66,g-.02),o.add(D)}let y=new te(new De(r.W*.8,.14,.18),h);y.position.set(0,.24,g-.06),o.add(y);for(let v of[-1,1]){let D=new te(new Mt(.05,.055,.22,12),c);D.rotation.x=Math.PI/2,D.position.set(v*.32,.26,g+.06),o.add(D)}let T=new te(new De(.34,.09,.02),KM());T.position.set(0,.5,g+.005),o.add(T);for(let v of[-1,1]){let D=new te(new De(.1,.03,.05),h);D.position.set(v*(f+.03),1,-(r.wb*.42)),o.add(D);let z=new te(new De(.1,.1,.16),a);z.position.set(v*(f+.09),1.04,-(r.wb*.42)),z.castShadow=!0,o.add(z)}if(r.rails)for(let v of[-1,1]){let D=new te(new De(.06,.05,1.9),h);D.position.set(v*(f-.35),1.72,.1),o.add(D)}if(r.bed){let v=new te(new De(r.W-.5,.06,2),h);v.position.set(0,1.02,m*.55),o.add(v)}if(r.spoiler||r.wing){let v=!!r.wing;for(let z of[-1,1]){let I=new te(new De(.07,v?.3:.16,.24),v?h:a);I.position.set(z*(f-.45),.86+(v?.1:.04),g+.28),o.add(I)}let D=new te(new De(r.W*(v?.92:.8),.045,v?.42:.3),v?h:a);D.position.set(0,v?1.06:.98,g+.28),D.rotation.x=v?-.12:0,D.castShadow=!0,o.add(D)}let E=null;if(i.extra==="taxi"||i.extra==="police"){let v=Math.max(...(r.roof||r.glass).map(z=>z[1]))+.02,D=(r.roof||r.glass).reduce((z,I)=>z+I[0],0)/(r.roof||r.glass).length;if(i.extra==="taxi"){let z=document.createElement("canvas");z.width=128,z.height=32;let I=z.getContext("2d");I.fillStyle="#ffd23f",I.fillRect(0,0,128,32),I.fillStyle="#111",I.font="bold 22px sans-serif",I.textAlign="center",I.fillText("TAXI",64,24);let L=new an(z);L.colorSpace=gt;let A=new te(new De(.62,.2,.26),new _e({map:L,emissive:16777215,emissiveMap:L,emissiveIntensity:.6}));A.position.set(0,v+.1,-D),A.rotation.y=Math.PI/2,o.add(A)}else{let z=new te(new De(1.1,.1,.28),h);z.position.set(0,v+.05,-D),o.add(z);let I=new _e({color:5570560,emissive:16718362,emissiveIntensity:2.5}),L=new _e({color:85,emissive:1723903,emissiveIntensity:2.5}),A=new te(new De(.48,.12,.24),I);A.position.set(-.27,v+.14,-D);let U=new te(new De(.48,.12,.24),L);U.position.set(.27,v+.14,-D),o.add(A,U),E=[I,L]}}return o.userData={flashers:E,defId:s,bodyColor:e,wheels:u,frontWheels:u.filter(v=>v.position.z<0),rim:S,glass:l,paint:a,setBrake:v=>{},profile:r,frontZ:x,rearZ:g},o}function tS(n,e){let t=new Pe(e);n.traverse(i=>{i.isMesh&&i.material&&i.material.isMeshPhysicalMaterial&&i.material.color&&Math.abs(i.material.color.getHex()-n.userData.bodyColor)<2&&!i.material.emissiveIntensity&&i.material.color.copy(t)}),n.userData.bodyColor=e}function nS(n,e){let t=n.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function iS(n,e){let i=(typeof n=="string"?au(n):n||Ni[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:i.topSpeed*(1+.055*r("engine")),accel:i.accel*(1+.09*r("engine")+.12*r("turbo")),handling:i.handling*(1+.06*r("suspension")),grip:i.grip*(1+.07*r("tires")),nitroTime:i.nitroTime+.5*r("nitro"),nitroPower:i.nitroPower*(1+.08*r("nitro"))}}var gp={clear:4873070,dark:922652,limo:131844};function sS(n,e,t){let i=n.userData;if(typeof e=="number"&&i.paint&&(i.paint.color.setHex(e),i.bodyColor=e),!t)return n;i.rim&&i.rim.color.setHex(t.rims),i.glass&&i.glass.color.setHex(gp[t.tint]??gp.dark),i.skinParts&&(n.remove(i.skinParts),i.skinParts.traverse(o=>{o.isMesh&&o.geometry.dispose()}));let s=new lt;i.skinParts=s,n.add(s);let r=i.profile;if(r&&t.stripes!=="none"){let o=new ts({color:t.stripe,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.1});if(t.stripes==="side"){let a=(i.rearZ-i.frontZ)*.86,l=(i.rearZ+i.frontZ)/2,c=r.wheelR+.22;for(let h of[-1,1]){let d=new te(new De(.02,.09,a),o);d.position.set(h*(r.W/2+.05),c,l),s.add(d)}}else{let a=t.stripes==="dual"?[-.22,.22]:[0],l=t.stripes==="dual"?.16:.34;for(let c of a)for(let h of[r.body,r.roof]){if(!h)continue;let d=Po(h,l,o,null,.045);d.castShadow=!1,d.scale.set(1,1.012,1.004),d.position.set(c,.006,0),s.add(d)}}}if(t.glow!=null&&r){let o=new ot({color:t.glow,transparent:!0,opacity:.75,blending:Zt,depthWrite:!1,map:rS()}),a=i.rearZ-i.frontZ+1.2,l=new te(new st(r.W+1.4,a).rotateX(-Math.PI/2),o);l.position.set(0,.07,(i.rearZ+i.frontZ)/2),l.renderOrder=2,s.add(l)}return n}var xl=null;function rS(){if(xl)return xl;let n=document.createElement("canvas");n.width=64,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(32,64,4,32,64,62);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,1),e.fillStyle=t,e.fillRect(0,0,64,128),e.restore(),xl=new an(n),xl}It();var oS=1337,cu=null,Qt=5,di=60,ri=14,si=di+ri,hu=(Qt*si+ri)/2,Ds=232,Lo=225,uu=9;function aS(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Us(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new an(i);return s.colorSpace=gt,s.anisotropy=4,s}function yp(){return Us(128,128,(n,e,t)=>{n.fillStyle="#33363b",n.fillRect(0,0,e,t),n.fillStyle="#3a3d42";for(let i=0;i<160;i++)n.fillRect(i*37%e,i*53%t,2,2);n.fillStyle="#cfd3d8",n.fillRect(4,0,4,t),n.fillRect(e-8,0,4,t),n.fillStyle="#e8c33a";for(let i=0;i<t;i+=32)n.fillRect(e/2-3,i,6,16)})}function lS(){return Us(128,256,(n,e,t)=>{n.fillStyle="#8d97a3",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++){let c=(a*7+l*13)%17===0;n.fillStyle=c?"#ffe08a":"#3b4656",n.fillRect(l*r+3,a*o+4,r-6,o-8),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(l*r+3,a*o+4,r-6,3)}})}function cS(){return Us(128,256,(n,e,t)=>{n.fillStyle="#000000",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++)(a*7+l*13)%5===0&&(n.fillStyle=(a+l)%3===0?"#ffd9a0":"#fff3d0",n.fillRect(l*r+3,a*o+4,r-6,o-8))})}var Ln={p:null,q:null,s:null,m:null};function wn(n,e,t,i,s,r,o,a,l){Ln.p.set(t,i,s),Ln.q.setFromAxisAngle(Ln.up,r),Ln.s.set(o,a,l),Ln.m.compose(Ln.p,Ln.q,Ln.s),n.setMatrixAt(e,Ln.m)}function Mp(n,e,t,i,s){for(let r of n)if(t>r.minX&&e<r.maxX&&s>r.minZ&&i<r.maxZ)return!0;return!1}function Sp(n,e=[]){let t=aS(oS);Ln.p=new F,Ln.q=new Pn,Ln.s=new F,Ln.m=new ut,Ln.up=new F(0,1,0);let i=[];n.fog=new $a(13623538,200,750);let s=new al(12572927,6978138,.9);n.add(s);let r=new hl(16774368,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=10,r.shadow.camera.far=400;let o=110;r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.bias=-8e-4,n.add(r),n.add(r.target);let a=70,l=120,c=45,h=16,d=new st(1400,1400);d.rotateX(-Math.PI/2);let p=new te(d,new _e({color:6130250,roughness:.95,metalness:0,envMapIntensity:.25}));p.receiveShadow=!0,n.add(p);let m=[];for(let le=0;le<=Qt;le++)m.push((le-Qt/2)*si);let x=Qt*si+ri,g=yp();g.wrapS=g.wrapT=Li,g.repeat.set(1,x/ri);let f=new st(1,1);f.rotateX(-Math.PI/2);let u=new _e({map:g,roughness:.9,metalness:.05,envMapIntensity:.35}),S=new Lt(f,u,m.length*2);S.receiveShadow=!0;let M=0;for(let le of m)wn(S,M++,le,.05,0,0,ri,1,x),wn(S,M++,0,.05,le,Math.PI/2,ri,1,x);S.instanceMatrix.needsUpdate=!0,n.add(S);let _=new st(1,1);_.rotateX(-Math.PI/2);let R=new Lt(_,new _e({color:10132898,roughness:.9,metalness:.05,envMapIntensity:.3}),Qt*Qt);R.receiveShadow=!0;let b=0;for(let le=0;le<Qt;le++)for(let ue=0;ue<Qt;ue++){let $=(le-(Qt-1)/2)*si,O=(ue-(Qt-1)/2)*si;wn(R,b++,$,.03,O,0,di,1,di)}R.instanceMatrix.needsUpdate=!0,n.add(R);let y=lS(),T=new De(1,1,1);T.translate(0,.5,0);let E=new _e({map:y,emissiveMap:cS(),emissive:16762995,emissiveIntensity:0,roughness:.85,metalness:.1,envMapIntensity:.4}),v=110,D=new Lt(T,E,v);D.castShadow=!0,D.receiveShadow=!0;let z=new Pe,I=[],L=[],A=0,U=4,H=0,N=0;for(let le=0;le<Qt;le++)for(let ue=0;ue<Qt;ue++){let $=(le-(Qt-1)/2)*si,O=(ue-(Qt-1)/2)*si,ne=le===H&&ue===N,se=Math.abs(le-2)<=1&&Math.abs(ue-2)<=1,Me=t()<.75?4:9,Ee=Math.sqrt(Me),qe=(di-U*2)/Ee;for(let rt=0;rt<Me&&A<v;rt++){if(ne||t()<.28)continue;let xt=rt%Ee,Ft=Math.floor(rt/Ee),Ye=qe*(.55+t()*.3),pt=qe*(.55+t()*.3),vn=se?60:28,Hi=se?18:10,ki=Hi+t()*(vn-Hi),_t=$-(di-U*2)/2+qe*(xt+.5)+(t()-.5)*2,Rt=O-(di-U*2)/2+qe*(Ft+.5)+(t()-.5)*2,qt=.82+t()*.32,Ys=t();if(!Mp(e,_t-Ye/2,_t+Ye/2,Rt-pt/2,Rt+pt/2)){wn(D,A,_t,.03,Rt,0,Ye,ki,pt),Ys<.45?z.setRGB(qt,qt*.97,qt*.95):Ys<.65?z.setRGB(qt,qt*.9,qt*.82):Ys<.82?z.setRGB(qt*.88,qt*.95,qt):z.setRGB(qt,qt*.82,qt*.74),D.setColorAt(A,z),I.push({x:_t,h:ki,w:Ye,d:pt,z:Rt});{let Qr=_t-$,Jo=Rt-O,jr=0,eo=0;Math.abs(Qr)>Math.abs(Jo)?jr=Qr>=0?1:-1:eo=Jo>=0?1:-1;let P={x:_t+jr*(Ye/2),z:Rt+eo*(pt/2),nx:jr,nz:eo};L.push({id:L.length,minX:_t-Ye/2,maxX:_t+Ye/2,minZ:Rt-pt/2,maxZ:Rt+pt/2,h:ki,door:P})}i.push({minX:_t-Ye/2,maxX:_t+Ye/2,minZ:Rt-pt/2,maxZ:Rt+pt/2}),A++}}}D.count=A,D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0),n.add(D);{let le=Us(64,96,(ne,se,Me)=>{ne.fillStyle="#20262f",ne.fillRect(0,0,se,Me),ne.fillStyle="#ffd98a",ne.fillRect(0,0,se,6),ne.fillRect(0,0,5,Me),ne.fillRect(se-5,0,5,Me),ne.fillStyle="#6fa8d8",ne.fillRect(9,12,se/2-12,Me-20),ne.fillRect(se/2+3,12,se/2-12,Me-20),ne.fillStyle="#cfd3d8",ne.fillRect(se/2-6,Me/2,3,10),ne.fillRect(se/2+3,Me/2,3,10)}),ue=new st(2.2,3);ue.translate(0,1.5,0);let $=new _e({map:le,emissive:16762995,emissiveMap:le,emissiveIntensity:.25,roughness:.4,metalness:.3}),O=new Lt(ue,$,Math.max(1,L.length));L.forEach((ne,se)=>{let Me=ne.door.nx?ne.door.nx>0?Math.PI/2:-Math.PI/2:ne.door.nz>0?0:Math.PI;wn(O,se,ne.door.x+ne.door.nx*.03,.04,ne.door.z+ne.door.nz*.03,Me,1,1,1)}),O.count=L.length,O.instanceMatrix.needsUpdate=!0,n.add(O),cu=$}{let le=new De(1.6,1.1,1.6);le.translate(0,.55,0);let ue=new _e({color:9146518,roughness:.7,metalness:.4,envMapIntensity:.4}),$=[];for(let ne of I){let se=1+Math.floor(t()*2);for(let Me=0;Me<se;Me++)$.push([ne.x+(t()-.5)*ne.w*.5,ne.h+.03,ne.z+(t()-.5)*ne.d*.5,.7+t()*.7])}let O=new Lt(le,ue,Math.max(1,$.length));$.forEach(([ne,se,Me,Ee],qe)=>wn(O,qe,ne,se,Me,t()*3.14,Ee,1,Ee)),O.count=$.length,O.instanceMatrix.needsUpdate=!0,n.add(O)}{let le=(H-(Qt-1)/2)*si,ue=(N-(Qt-1)/2)*si,$=new te(new st(di,di).rotateX(-Math.PI/2),new _e({color:3356219,roughness:.95,metalness:.02,envMapIntensity:.25}));$.position.set(le,.045,ue),$.receiveShadow=!0,n.add($);let O=new De(.14,.02,5.6);O.translate(0,.01,0);let ne=new _e({color:15264492,roughness:.7}),se=3,Me=[-7.5,7.5],Ee=12,qe=le-Ee*se/2,rt=Me.length*(Ee+1),xt=new Lt(O,ne,rt),Ft=new De(1.8,.14,.16);Ft.translate(0,.07,0);let Ye=new _e({color:10132898,roughness:.9}),pt=new Lt(Ft,Ye,Me.length*Ee),vn=0,Hi=0;for(let _t of Me){for(let Rt=0;Rt<=Ee;Rt++)wn(xt,vn++,qe+Rt*se,.055,ue+_t,0,1,1,1);for(let Rt=0;Rt<Ee;Rt++)wn(pt,Hi++,qe+Rt*se+se/2,.055,ue+_t+(_t<0?1.9:-1.9),0,1,1,1)}xt.count=vn,xt.instanceMatrix.needsUpdate=!0,pt.count=Hi,pt.instanceMatrix.needsUpdate=!0,n.add(xt,pt);let ki=new te(new st(20,5).rotateX(-Math.PI/2),new _e({map:Us(256,64,(_t,Rt,qt)=>{_t.fillStyle="#33363b",_t.fillRect(0,0,Rt,qt),_t.fillStyle="#e8c33a",_t.font="bold 40px sans-serif",_t.textAlign="center",_t.textBaseline="middle",_t.fillText("PARKING",Rt/2,qt/2)}),roughness:.9,transparent:!1}));ki.position.set(le,.055,ue),n.add(ki)}{let le=new De(.7,.02,3.2);le.translate(0,.01,0);let ue=new _e({color:14672614,roughness:.75}),$=[];for(let ne of[2,3])for(let se of[2,3]){let Me=m[ne],Ee=m[se],qe=ri/2+2.6;for(let[rt,xt,Ft]of[[Me,Ee-qe,0],[Me,Ee+qe,0],[Me-qe,Ee,1],[Me+qe,Ee,1]])for(let Ye=-2;Ye<=2;Ye++)$.push(Ft===0?[rt+Ye*2.2,.06,xt,0]:[rt,.06,xt+Ye*2.2,Math.PI/2])}let O=new Lt(le,ue,$.length);$.forEach(([ne,se,Me,Ee],qe)=>wn(O,qe,ne,se,Me,Ee,1,1,1)),O.instanceMatrix.needsUpdate=!0,O.receiveShadow=!0,n.add(O)}let k=new Mt(.12,.16,9,6);k.translate(0,4.5,0);let X=new _e({color:3948872,roughness:.6,metalness:.6,envMapIntensity:.6}),q=new De(1.6,.25,.5);q.translate(.6,9,0);let ie=new _e({color:16773828,emissive:16766842,emissiveIntensity:.35,roughness:.4,metalness:.2}),G=[];for(let le of m)for(let ue=-x/2+25;ue<x/2-10;ue+=46){let $=Math.round(ue/46)%2===0?1:-1;G.push([le+$*(ri/2+1.5),ue,0]),G.push([ue,le+$*(ri/2+1.5),1])}let K=new Lt(k,X,G.length),me=new Lt(q,ie,G.length);G.forEach(([le,ue,$],O)=>{wn(K,O,le,0,ue,0,1,1,1),wn(me,O,le,0,ue,$?Math.PI/2:0,1,1,1)}),K.instanceMatrix.needsUpdate=!0,me.instanceMatrix.needsUpdate=!0,n.add(K,me);let ye=[];for(let le=0;le<Qt;le++)for(let ue=0;ue<Qt;ue++){if(le===H&&ue===N)continue;let $=(le-(Qt-1)/2)*si,O=(ue-(Qt-1)/2)*si,ne=2+Math.floor(t()*3);for(let se=0;se<ne;se++)ye.push([$+(t()-.5)*(di-8),O+(t()-.5)*(di-8),.8+t()*.5])}let pe=new Mt(.18,.28,2.6,6);pe.translate(0,1.3,0);let Ue=new Cr(1.9,4.6,7);Ue.translate(0,4.4,0);let Fe=new Lt(pe,new _e({color:7031342,roughness:.9,envMapIntensity:.2}),ye.length),Te=new Lt(Ue,new _e({color:4094516,roughness:.85,envMapIntensity:.3}),ye.length);Te.castShadow=!0;for(let le=ye.length-1;le>=0;le--){let[ue,$]=ye[le];Mp(e,ue-2,ue+2,$-2,$+2)&&ye.splice(le,1)}ye.forEach(([le,ue,$],O)=>{wn(Fe,O,le,.03,ue,t()*6.28,$,$,$),wn(Te,O,le,.03,ue,t()*6.28,$,$*(.9+t()*.3),$)}),Fe.instanceMatrix.needsUpdate=!0,Te.instanceMatrix.needsUpdate=!0,n.add(Fe,Te);let He=Us(64,64,(le,ue,$)=>{let O=le.createRadialGradient(32,32,2,32,32,30);O.addColorStop(0,"rgba(255,220,150,1)"),O.addColorStop(.4,"rgba(255,200,120,0.45)"),O.addColorStop(1,"rgba(255,190,110,0)"),le.fillStyle=O,le.fillRect(0,0,ue,$)}),B=new $t,ge=new Float32Array(G.length*3);G.forEach(([le,ue],$)=>{ge[$*3]=le,ge[$*3+1]=8.9,ge[$*3+2]=ue}),B.setAttribute("position",new mn(ge,3));let ee=new Mo({map:He,size:14,transparent:!0,opacity:0,blending:Zt,depthWrite:!1,sizeAttenuation:!0}),fe=new Qa(B,ee);fe.frustumCulled=!1,n.add(fe);let j=new De(1,1,1);j.translate(0,.5,0);let Ne=new ot({color:2767445}),Se=46,C=new Lt(j,Ne,Se);for(let le=0;le<Se;le++){let ue=le/Se*Math.PI*2+t()*.1,$=760+t()*220,O=40+t()*60,ne=60+t()*130,se=40+t()*60;wn(C,le,Math.cos(ue)*$,0,Math.sin(ue)*$,t()*.6,O,ne,se)}C.instanceMatrix.needsUpdate=!0,n.add(C);let w=Lo*2,V=Us(128,128,(le,ue,$)=>{le.fillStyle="#2e3136",le.fillRect(0,0,ue,$),le.fillStyle="#cfd3d8",le.fillRect(2,0,5,$),le.fillRect(ue-7,0,5,$),le.fillStyle="#e8c33a";for(let O=0;O<$;O+=32)le.fillRect(ue/2-3,O,6,16)});V.wrapS=V.wrapT=Li,V.repeat.set(1,w/14);let ce=new st(1,1);ce.rotateX(-Math.PI/2);let oe=new te(ce,new _e({map:V,roughness:.9,metalness:.05,envMapIntensity:.35}));oe.scale.set(uu,1,w),oe.position.set(Ds,.05,0),oe.receiveShadow=!0,n.add(oe);let re=yp();re.wrapS=re.wrapT=Li,re.repeat.set(1,(Ds-hu)/ri+2);let Ie=Ds-hu+20,xe=new te(ce,new _e({map:re,roughness:.9,metalness:.05,envMapIntensity:.35}));xe.scale.set(Ie,1,ri),xe.rotation.y=Math.PI/2,xe.position.set((hu+Ds)/2,.05,0),xe.receiveShadow=!0,n.add(xe);let be=new te(new st(uu,1.6).rotateX(-Math.PI/2),new _e({color:15922422,roughness:.7}));be.position.set(Ds,.07,Lo-8),n.add(be);let Be=new De(4,1.1,.7);Be.translate(0,.55,0);let Xe=new _e({color:16777215,roughness:.6,metalness:.1,envMapIntensity:.4}),he=Math.floor(w/9)*2,Ke=new Lt(Be,Xe,he);Ke.castShadow=!0;let Qe=new Pe,ke=0;for(let le=-Lo+4;le<=Lo-4&&ke<he;le+=9)for(let ue of[-1,1])wn(Ke,ke,Ds+ue*(uu/2+1.6),.05,le,0,1,1,1),Qe.setHex(ke%2===0?15229982:15922422),Ke.setColorAt(ke,Qe),ke++;Ke.count=ke,Ke.instanceMatrix.needsUpdate=!0,Ke.instanceColor&&(Ke.instanceColor.needsUpdate=!0),n.add(Ke);let ze={x:m[3],z:120,heading:0},Re={startX:Ds,startZ:Lo-8,dirX:0,dirZ:-1,length:w};function Ze(le){E.emissiveIntensity=le*1.4,cu&&(cu.emissiveIntensity=.25+le*1.2),ie.emissiveIntensity=.35+le*3,ee.opacity=le*.85,Ne.color.setHex(le>.5?923174:2767445)}function ht(le,ue){let $=Math.round(ue.x/h)*h,O=Math.round(ue.z/h)*h;r.target.position.set($,0,O),r.position.set($+a,l,O+c),r.target.updateMatrixWorld()}return ht(0,ze),{colliders:i,buildings:L,spawn:ze,dragStrip:Re,update:ht,setGlow:Ze,sun:r,hemi:s,roadLines:m}}var _l=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0}update(e,t,i){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,d=0,p=h?.25:1;e.throttle>0?d=e.throttle*s.accel*c*p*(1-Math.max(0,l)/(s.topSpeed*c)*.72):e.throttle<0&&(d=l>1?e.throttle*s.accel*1.6:e.throttle*s.accel*.5),d-=l*(.028+(h?.06:0))+Math.sign(l)*.6,l+=d*t;let m=s.topSpeed*c,x=-s.topSpeed*.35;l=Math.max(x,Math.min(m,l)),Math.abs(l)<.15&&!e.throttle&&(l=0);let g=Math.abs(l),f=Math.min(1,g/8),u=this.steer*.55*s.handling*f*(1-Math.min(1,g/(s.topSpeed*1.4))*.45);g>.5&&(this.heading-=u*(l/g)*t*(g>1?Math.min(2.2,g*.12+.8):1)*2.2);let S=-Math.sin(this.heading),M=-Math.cos(this.heading),_=this.vel.x*S+this.vel.z*M,R=this.vel.x-S*_,b=this.vel.z-M*_;this.drifting=!!(e.handbrake&&g>6);let y=this.drifting?.983:Math.min(.995,.9+s.grip*.06),T=Math.pow(y,t*60);R*=T,b*=T;let E=_+(l-_)*Math.min(1,t*60);this.vel.x=S*E+R,this.vel.z=M*E+b;let v=this.pos.x+this.vel.x*t,D=this.pos.z+this.vel.z*t;if(i){let z=i(v,D,this.pos.x,this.pos.z);v=z.x,D=z.z,z.hitX&&(this.vel.x*=-.25),z.hitZ&&(this.vel.z*=-.25)}return this.pos.x=v,this.pos.z=D,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer}}};function Ep(n={}){let e=n.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1},i={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1},s={x:0,y:0,id:null},r="drive",o=!1,a=!1,l=!1,c=!1,h=!1,d=[],p=v=>document.getElementById(v);function m(){t.steer=(i.right?1:0)-(i.left?1:0),t.throttle=i.gas?1:i.brake?-1:0,t.nitro=i.nitro,t.handbrake=i.handbrake;let v=(i.right?1:0)-(i.left?1:0),D=(i.gas?1:0)-(i.brake?1:0);t.moveX=s.id!==null?s.x:v,t.moveY=s.id!==null?s.y:D,t.run=i.run||i.nitro||s.id!==null&&Math.hypot(s.x,s.y)>.92,t.fire=i.fire}function x(v,D){if(!v)return;let z=44,I=U=>{if(U.pointerId!==s.id)return;let H=v.getBoundingClientRect(),N=U.clientX-(H.left+H.width/2),k=U.clientY-(H.top+H.height/2),X=N,q=k;e()&&(X=k,q=-N);let ie=Math.hypot(X,q),G=Math.min(ie,z);ie>0&&(X=X/ie*G,q=q/ie*G),D.style.transform=`translate(${X}px, ${q}px)`;let K=.12,me=X/z,ye=-q/z;Math.hypot(me,ye)<K&&(me=0,ye=0),s.x=me,s.y=ye,m()},L=U=>{if(U.preventDefault(),s.id===null){s.id=U.pointerId;try{v.setPointerCapture(U.pointerId)}catch{}I(U)}},A=U=>{U.pointerId===s.id&&(s.id=null,s.x=0,s.y=0,D.style.transform="translate(0px, 0px)",m())};v.addEventListener("pointerdown",L),v.addEventListener("pointermove",I),v.addEventListener("pointerup",A),v.addEventListener("pointercancel",A),d.push(()=>{v.removeEventListener("pointerdown",L),v.removeEventListener("pointermove",I),v.removeEventListener("pointerup",A),v.removeEventListener("pointercancel",A)})}function g(v,D){if(!v)return;let z=L=>{L.preventDefault(),L.stopPropagation(),D(),v.classList.add("pressed")},I=()=>v.classList.remove("pressed");v.addEventListener("pointerdown",z),v.addEventListener("pointerup",I),v.addEventListener("pointerleave",I),d.push(()=>{v.removeEventListener("pointerdown",z),v.removeEventListener("pointerup",I),v.removeEventListener("pointerleave",I)})}function f(v,D){if(!v)return;let z=0,I=U=>{U.preventDefault(),z++,D==="fire"&&!i.fire&&(c=!0),i[D]=!0,m(),v.classList.add("pressed")},L=()=>{z=Math.max(0,z-1),z===0&&(i[D]=!1,m(),v.classList.remove("pressed"))},A=U=>U.preventDefault();v.addEventListener("pointerdown",I),v.addEventListener("pointerup",L),v.addEventListener("pointercancel",L),v.addEventListener("pointerleave",L),v.addEventListener("contextmenu",A),d.push(()=>{v.removeEventListener("pointerdown",I),v.removeEventListener("pointerup",L),v.removeEventListener("pointercancel",L),v.removeEventListener("pointerleave",L),v.removeEventListener("contextmenu",A)})}function u(v){if(!v)return;let D=I=>{I.preventDefault(),o=!0,v.classList.add("pressed")},z=()=>v.classList.remove("pressed");v.addEventListener("pointerdown",D),v.addEventListener("pointerup",z),v.addEventListener("pointercancel",z),v.addEventListener("pointerleave",z),d.push(()=>{v.removeEventListener("pointerdown",D),v.removeEventListener("pointerup",z),v.removeEventListener("pointercancel",z),v.removeEventListener("pointerleave",z)})}let S={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function M(v){let D=v.target;if(D&&(D.tagName==="INPUT"||D.tagName==="TEXTAREA"))return;let z=v.key,I=S[z];if(I){i[I]=!0,m(),v.preventDefault();return}if(z===" "){if(v.preventDefault(),v.repeat)return;r==="drag"?o=!0:r==="foot"?(i.fire||(c=!0),i.fire=!0,m()):(i.handbrake=!0,m());return}if(z==="e"||z==="E"||z==="Enter"){v.repeat||(a=!0);return}if(z==="q"||z==="Q"){v.repeat||(l=!0);return}(z==="Shift"||z==="f"||z==="F")&&(i.nitro=!0,m())}function _(v){let D=v.key,z=S[D];if(z){i[z]=!1,m();return}if(D===" "){i.handbrake=!1,i.fire=!1,m();return}(D==="Shift"||D==="f"||D==="F")&&(i.nitro=!1,m())}function R(v){r=v==="drag"||v==="foot"?v:"drive";let D=(I,L)=>{let A=p(I);A&&(A.style.display=L?"":"none")};D("steer-zone",r==="drive"),D("pedal-zone",r!=="foot"),D("btn-shift",r==="drag"),D("joystick",r==="foot"),D("foot-zone",r==="foot");for(let I in i)i[I]=!1;s.id=null,s.x=0,s.y=0;let z=p("joy-knob");z&&(z.style.transform="translate(0px, 0px)");for(let I of document.querySelectorAll("#touch-controls .pressed"))I.classList.remove("pressed");m()}function b(){if(h)return;h=!0,f(p("btn-left"),"left"),f(p("btn-right"),"right"),f(p("btn-gas"),"gas"),f(p("btn-brake"),"brake"),f(p("btn-nitro"),"nitro"),f(p("btn-handbrake"),"handbrake"),u(p("btn-shift")),f(p("btn-fire"),"fire"),f(p("btn-run"),"run"),x(p("joystick"),p("joy-knob")),g(p("btn-action"),()=>{a=!0}),g(p("btn-weapon"),()=>{l=!0}),window.addEventListener("keydown",M),window.addEventListener("keyup",_),d.push(()=>{window.removeEventListener("keydown",M),window.removeEventListener("keyup",_)});let v=p("touch-controls");v&&(v.style.display="ontouchstart"in window?"":"none"),R(r)}function y(){for(let v of d)v();d.length=0;for(let v in i)i[v]=!1;o=a=l=c=!1,s.id=null,s.x=s.y=0,m(),h=!1}function T(){let v=o;return o=!1,v}let E=v=>()=>{let D;switch(v){case"action":return D=a,a=!1,D;case"cycle":return D=l,l=!1,D;case"fire":return D=c,c=!1,D}};return{input:t,consumeShift:T,consumeAction:E("action"),consumeCycle:E("cycle"),consumeFireEdge:E("fire"),setMode:R,attach:b,detach:y,get mode(){return r}}}var hS=[.3,.47,.64,.81,1],uS=[1.9,1.45,1.15,.95,.8],vl=.8,wp=.97,dS=.8,fS=45,pS=2.2,mS=[16765286,448160,10182117,15817653,48121,16704576,15681391],gn=n=>document.getElementById(n);function Tp(n,e){return n+Math.random()*(e-n)}function bp(n){return n[Math.random()*n.length|0]}function gS(n){let e=402/(.42*n.topSpeed+.35*n.accel);return Math.min(17,Math.max(8.5,e))*Tp(.85,1.15)}function xS(n){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,stats:n}}function _S(n,e,t){let i=n.stats.topSpeed,s=hS[n.gear]*i,r=1-Math.min(1,n.speed/(s*1.02)),o=e*n.stats.accel*uS[n.gear]*Math.max(0,r);o*=n.bogMul,o-=n.speed*.028+Math.sign(n.speed)*.6,n.speed=Math.max(0,n.speed+o*t),n.dist+=n.speed*t,n.rpm=Math.min(1.06,n.speed/s),n.bogMul+=(1-n.bogMul)*Math.min(1,t*2.5)}function vS(n){return n>=vl&&n<=wp?"perfect":n<vl?"early":"late"}function yS(n){if(n.gear>=4)return null;let e=vS(n.rpm);return n.gear++,e==="perfect"?n.speed*=1.015:(n.speed*=.93,n.bogMul=.75),n.limiterT=0,e}function MS(n){let e=gS(n),t=1.1,i=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/i,reactDelay:Tp(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:n}}function SS(n,e,t){if(!n.launched)return;let i=e-n.launchT;i<0||(n.speed=n.top*(1-Math.exp(-n.k*i)),n.dist+=n.speed*t)}function ES({falseStart:n,pET:e,aET:t,pDist:i,aDist:s}){return n?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:i>=s}function bS(n,e,t){if(!n)return 100;let i=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(i*10))}function wS(n,e){return n?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function Ap(n){let e=gn("drag-ui"),t=gn("drag-msg"),i=gn("drag-result"),s=gn("rpm-bar"),r=gn("rpm-shiftzone"),o=gn("btn-shift"),a={s1:gn("bulb-s1"),s2:gn("bulb-s2"),a1:gn("bulb-a1"),a2:gn("bulb-a2"),a3:gn("bulb-a3"),g:gn("bulb-g"),r:gn("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let I in a)a[I].classList.remove("lit")}function h(I){a[I].classList.add("lit")}function d(I,L){t.textContent=I,l.msgTimer=L||0}function p(I,L){try{n.audio.beep(I,L)}catch{}}function m(){let I=n.getPlayer();return I&&I.stats?I.stats:n.effectiveStats(I.def,I.upgrades)}function x(I,L){let A=n.city.dragStrip;I.position.set(A.startX+l.perpX*L,0,A.startZ+l.perpZ*L),I.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function g(I,L){let A=n.city.dragStrip;I.position.set(A.startX+l.dirX*L.dist+l.perpX*L.lateral,0,A.startZ+l.dirZ*L.dist+l.perpZ*L.lateral)}function f(I,L,A){let U=I.userData.wheels;if(U)for(let H of U){let N=H.userData.spin||[];for(let k of N)k.rotation.x+=L*A*2.2}}function u(I){return xS(I)}function S(I,L,A){_S(I,L,A)}function M(I){let L=yS(I);L&&(L==="perfect"?(d("PERFECT SHIFT!",1),p(1200,.08)):(d(L==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),p(220,.15)))}function _(I){return MS(I)}function R(I,L){SS(I,l.greenT,L)}function b(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),i.classList.add("hidden"),i.innerHTML="",d("STAGE!"),s.style.width="15%",r.style.left=vl*100+"%",r.style.width=(wp-vl)*100+"%",o&&o.classList.remove("hidden")}function y(){l.phase="green",l.t=0,l.greenT=0,h("g"),d("GO!"),p(880,.4),l.phase="racing"}function T(){l.phase="red",c(),h("r"),d("FALSE START!"),p(180,.6),E("FALSE START \u2014 you jumped the green.")}function E(I){l.phase="done",l.finished=!0;let L=l.player,A=l.ai,U=!!(I&&I.indexOf("FALSE START")===0),H=ES({falseStart:U,pET:L.et,aET:A.finishET,pDist:L.dist,aDist:A.dist}),N=L.et,k=A.finishET,X=L.reaction!=null?L.reaction.toFixed(3)+"s":"\u2014",q=(L.trap*pS).toFixed(1),ie=bS(H,N,k),G=wS(H,U);n.addCash(ie),i.innerHTML="<h2>"+G+"</h2>"+(I?"<p>"+I+"</p>":"")+"<p>ET: "+(N==null?"DNF":N.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(k==null?"DNF":k.toFixed(3)+"s")+"</p><p>Trap speed: "+q+" MPH &nbsp;\xB7&nbsp; Reaction: "+X+"</p><p>+$"+ie+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',i.classList.remove("hidden"),gn("drag-rematch").onclick=()=>{v()},gn("drag-back").onclick=()=>{D()};try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}}function v(){l.active&&D();let L=n.getPlayer().group;l.origPos=L.position.clone(),l.origRotY=L.rotation.y;let A=n.city.dragStrip,U=Math.hypot(A.dirX,A.dirZ)||1;l.dirX=A.dirX/U,l.dirZ=A.dirZ/U,l.perpX=-l.dirZ,l.perpZ=l.dirX,x(L,2),L.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=u(m());let H=bp(n.CAR_DEFS),N=n.buildCar(Object.assign({},H,{color:bp(mS)}));n.scene.add(N),x(N,-2),l.aiGroup=N,l.ai=_(n.effectiveStats(H)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),n.controls.setMode("drag");let k=n.camera;k.position.set(A.startX-l.dirX*12+l.perpX*12,5,A.startZ-l.dirZ*12+l.perpZ*12),k.lookAt(A.startX+l.dirX*8,1,A.startZ+l.dirZ*8),b()}function D(){l.aiGroup&&(n.scene.remove(l.aiGroup),l.aiGroup=null);let I=n.getPlayer();I&&I.group&&l.origPos&&(I.group.position.copy(l.origPos),I.group.rotation.y=l.origRotY),e.classList.add("hidden"),i.classList.add("hidden"),o&&o.classList.add("hidden");try{n.controls.setMode("drive")}catch{}try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function z(I){if(!l.active)return;I=Math.min(I,.05);let L=n.controls.input||{},A=Math.max(0,Math.min(1,L.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&A>.5){T();return}if(l.msgTimer>0&&(l.msgTimer-=I,l.msgTimer<=0&&l.phase==="racing"&&d("GO!")),l.phase==="stage")l.t+=I,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,d("READY\u2026"));else if(l.phase==="tree"){l.t+=I;let H=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<H;)l.ambersLit++,h("a"+l.ambersLit),p(440,.15);l.t>=1.5&&y()}else if(l.phase==="racing"){l.greenT+=I;let H=l.player,N=l.ai;!H.reacted&&A>.5&&(H.reacted=!0,H.reaction=l.greenT),!N.launched&&l.greenT>=N.reactDelay&&(N.launched=!0,N.launchT=l.greenT),S(H,A,I),n.controls.consumeShift&&n.controls.consumeShift()&&M(H),H.rpm>=1&&A>.3?(H.limiterT+=I,H.limiterT>=dS&&(H.speed*=.9,H.limiterT=0,d("LIMITER!",.8),p(160,.2))):H.limiterT=Math.max(0,H.limiterT-I*2),R(N,I),H.et==null&&H.dist>=402&&(H.et=l.greenT,H.trap=H.speed),N.finishET==null&&N.dist>=402&&(N.finishET=l.greenT,N.trap=N.speed);let k=l.greenT>=fS;if(H.et!=null&&N.finishET!=null||k||H.et!=null&&l.greenT>H.et+8||N.finishET!=null&&l.greenT>N.finishET+8){E(k&&H.et==null&&N.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,H.rpm)*100+"%";try{n.audio.engine(H.rpm,A),n.audio.skid(A>.8&&H.speed<8&&H.gear===0)}catch{}}let U=n.getPlayer().group;if(g(U,l.player),l.aiGroup&&g(l.aiGroup,l.ai),f(U,l.player.speed,I),l.aiGroup&&f(l.aiGroup,l.ai.speed,I),l.phase==="racing"||l.phase==="done"){let H=n.camera,N=U.position.x,k=U.position.z,X=N-l.dirX*11+l.perpX*7,q=k-l.dirZ*11+l.perpZ*7;H.position.x+=(X-H.position.x)*Math.min(1,I*4),H.position.y+=(4.5-H.position.y)*Math.min(1,I*4),H.position.z+=(q-H.position.z)*Math.min(1,I*4),H.lookAt(N+l.dirX*12,1.2,k+l.dirZ*12)}}return gn("drag-exit").onclick=()=>D(),{enter:v,exit:D,update:z,get active(){return l.active}}}function Rp(){let n=null,e=null,t=null,i=null,s=null,r=null,o=null,a=null,l=!1,c=!1;function h(){if(n)return!0;let d=window.AudioContext||window.webkitAudioContext;if(!d)return!1;n=new d,e=n.createGain(),e.gain.value=.5,e.connect(n.destination),t=n.createOscillator(),t.type="sawtooth",t.frequency.value=70,i=n.createOscillator(),i.type="square",i.frequency.value=38,s=n.createBiquadFilter(),s.type="lowpass",s.frequency.value=400,s.Q.value=2,r=n.createGain(),r.gain.value=0,t.connect(s),i.connect(s),s.connect(r),r.connect(e),t.start(),i.start();let p=n.sampleRate,m=n.createBuffer(1,p,n.sampleRate),x=m.getChannelData(0);for(let u=0;u<p;u++)x[u]=Math.random()*2-1;a=m;let g=n.createBufferSource();g.buffer=m,g.loop=!0;let f=n.createBiquadFilter();return f.type="bandpass",f.frequency.value=900,f.Q.value=1.1,o=n.createGain(),o.gain.value=0,g.connect(f),f.connect(o),o.connect(e),g.start(),!0}return{unlock(){c=!0,h()&&(n.state==="suspended"&&n.resume(),l=!0)},engine(d,p){if(!n||!l)return;let m=Math.max(0,Math.min(1,d)),x=Math.max(0,Math.min(1,p)),g=n.currentTime,f=60+m*220;t.frequency.setTargetAtTime(f,g,.03),i.frequency.setTargetAtTime(f*.5+3,g,.03),s.frequency.setTargetAtTime(300+m*900,g,.05),r.gain.setTargetAtTime(x*.11+m*.04,g,.06)},skid(d){!n||!l||o.gain.setTargetAtTime(d?.12:0,n.currentTime,d?.05:.12)},beep(d=660,p=.08){if(!c||!h())return;n.state==="suspended"&&n.resume();let m=n.currentTime,x=n.createOscillator();x.type="sine",x.frequency.value=d;let g=n.createGain();g.gain.setValueAtTime(1e-4,m),g.gain.exponentialRampToValueAtTime(.25,m+.012),g.gain.exponentialRampToValueAtTime(1e-4,m+p),x.connect(g),g.connect(e),x.start(m),x.stop(m+p+.03)},shot(d="pistol"){if(!c||!h())return;let p=n.currentTime,m={pistol:[2600,.16,.5],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],rifle:[2200,.2,.55]}[d]||[2600,.16,.5],x=n.createBufferSource();x.buffer=a;let g=n.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(m[0],p),g.frequency.exponentialRampToValueAtTime(300,p+m[1]);let f=n.createGain();f.gain.setValueAtTime(m[2],p),f.gain.exponentialRampToValueAtTime(1e-4,p+m[1]),x.connect(g),g.connect(f),f.connect(e),x.start(p,Math.random()*.5),x.stop(p+m[1]+.02);let u=n.createOscillator();u.type="sine",u.frequency.setValueAtTime(140,p),u.frequency.exponentialRampToValueAtTime(40,p+.12);let S=n.createGain();S.gain.setValueAtTime(m[2]*.8,p),S.gain.exponentialRampToValueAtTime(1e-4,p+.14),u.connect(S),S.connect(e),u.start(p),u.stop(p+.16)},click(){this.beep(1800,.03)},shutdown(){if(n)try{n.close()}catch{}n=null,e=null,l=!1,t=i=s=r=o=a=null}}}var Pp="citydriver_save_v1";var yl=5,TS=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295];var Lp=["engine","turbo","tires","suspension","nitro"],AS={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},RS={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},Io=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function du(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:Io()},paint:{sport:14100029},wheels:{sport:0}}}function CS(n){let e=Object.assign(du(),n||{}),t=new Set(Ni.map(i=>i.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(i=>t.has(i)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let i of e.owned){if(!e.upgrades[i]||typeof e.upgrades[i]!="object")e.upgrades[i]=Io();else for(let s of Lp)e.upgrades[i][s]=Math.max(0,Math.min(yl,e.upgrades[i][s]|0));typeof e.paint[i]!="number"&&(e.paint[i]=14100029),e.wheels[i]=Math.max(0,e.wheels[i]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function Ip(){try{let n=localStorage.getItem(Pp);return n?CS(JSON.parse(n)):du()}catch{return du()}}function ln(n){try{localStorage.setItem(Pp,JSON.stringify(n))}catch{}}function Cp(n,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+n.price/2e4))}var PS=n=>"#"+n.toString(16).padStart(6,"0");function Dp(n){let e=n.save,t=g=>document.getElementById(g),i=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let g of Ni)for(let f in o)o[f]=Math.max(o[f],g[f]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(g,f,u)=>{let S=Math.max(5,Math.round(f/u*100));return`<div class="stat-row"><span>${g}</span><div class="sbar"><i style="width:${S}%"></i></div></div>`};function c(){i.innerHTML=Ni.map(g=>{let f=e.owned.includes(g.id),u=e.currentCar===g.id,S;return u?S='<button class="buy-btn" disabled>SELECTED</button>':f?S=`<button class="buy-btn" data-act="select" data-id="${g.id}">SELECT</button>`:S=`<button class="buy-btn" data-act="buy" data-id="${g.id}"${e.cash<g.price?" disabled":""}>$${g.price.toLocaleString()}</button>`,`<div class="car-card${u?" selected":""}"><div class="cinfo"><b>${g.name}</b><small>${g.desc}</small><div class="stat-bars">${l("SPD",g.topSpeed,o.topSpeed)}${l("ACC",g.accel,o.accel)}${l("HDL",g.handling,o.handling)}${l("GRP",g.grip,o.grip)}</div></div>${S}</div>`}).join("")}function h(){let g=n.getDef(e.currentCar);if(!g){s.innerHTML="";return}let f=e.upgrades[g.id]||(e.upgrades[g.id]=Io());s.innerHTML=`<div class="upg-car-name">${g.name} \u2014 performance</div>`+Lp.map(u=>{let S=f[u]||0,M=S>=yl,_=M?0:Cp(g,u,S),R="";for(let y=0;y<yl;y++)R+=`<div class="pip${y<S?" on":""}"></div>`;let b=M?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${u}"${e.cash<_?" disabled":""}>$${_.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${AS[u]}</b><small>${RS[u]}</small><div class="pips">${R}</div></div>${b}</div>`}).join("")}function d(){let g=e.currentCar,f=e.paint[g],u=TS.map(S=>`<button class="swatch${S===f?" sel":""}" data-hex="${S}" style="background:${PS(S)}" aria-label="paint"></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Quick paint \u2014 FREE</b><div class="swatch-row">${u}</div></div><button class="mbtn primary" data-act="editor" style="width:100%">\u{1F3A8} OPEN SKIN EDITOR \u2014 all free</button><p class="store-tip">Any color, rims, stripes, underglow, window tint, and your driver's look.</p>`}function p(){a(),c(),h(),d()}i.addEventListener("click",g=>{let f=g.target.closest("button[data-act]");if(!f||f.disabled)return;let u=n.getDef(f.dataset.id);if(u)if(f.dataset.act==="buy"){if(e.owned.includes(u.id)||e.cash<u.price)return;e.cash-=u.price,e.owned.push(u.id),e.upgrades[u.id]||(e.upgrades[u.id]=Io()),typeof e.paint[u.id]!="number"&&(e.paint[u.id]=u.color),e.wheels[u.id]===void 0&&(e.wheels[u.id]=0),e.currentCar=u.id,ln(e),n.onSelectCar(u.id),p()}else{if(e.currentCar===u.id)return;e.currentCar=u.id,ln(e),n.onSelectCar(u.id),p()}}),s.addEventListener("click",g=>{let f=g.target.closest("button[data-key]");if(!f||f.disabled)return;let u=n.getDef(e.currentCar);if(!u)return;let S=f.dataset.key,M=e.upgrades[u.id]||(e.upgrades[u.id]=Io()),_=M[S]||0,R=Cp(u,S,_);_>=yl||e.cash<R||(e.cash-=R,M[S]=_+1,ln(e),n.refreshScene(),p())}),r.addEventListener("click",g=>{let f=e.currentCar;if(g.target.closest('button[data-act="editor"]')){n.openEditor&&n.openEditor();return}let u=g.target.closest("button.swatch");if(u){let S=parseInt(u.dataset.hex,10);e.paint[f]!==S&&(e.paint[f]=S,ln(e),n.onPaint(S),p())}});let m=[...document.querySelectorAll("#garage .gtab")],x={cars:i,upgrades:s,style:r};return m.forEach(g=>g.addEventListener("click",()=>{m.forEach(f=>f.classList.toggle("active",f===g));for(let f in x)x[f].classList.toggle("hidden",f!==g.dataset.tab)})),p(),{refresh:p}}var Up=["low","medium","high"];function fu(n){switch(n){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var Ml=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,fu(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};It();var Sl={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.65,stars:1}},pu=["day","sunset","night"],LS=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`,IS=`
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
}`;function Np(){let n=new Kt(1500,24,16),e={uTop:{value:new Pe(3108822)},uHorizon:{value:new Pe(13625079)},uSunDir:{value:new F(0,1,0)},uSunColor:{value:new Pe(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new Jt({vertexShader:LS,fragmentShader:IS,uniforms:e,side:rn,depthWrite:!1,fog:!1}),i=new te(n,t);return i.frustumCulled=!1,i.renderOrder=-10,{mesh:i,uniforms:e}}function DS(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new F(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}function Op(n,e){let t=Sl[e]||Sl.day,{uniforms:i,sun:s,hemi:r,scene:o,renderer:a}=n;i.uTop.value.setHex(t.top),i.uHorizon.value.setHex(t.horizon),i.uSunColor.value.setHex(t.sunColor),i.uSunI.value=t.sunI,i.uStars.value=t.stars;let l=DS(t.elev,t.azim);return i.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),n.sunElev=t.elev,n.sunAzim=t.azim,n.sunDir=l,t}It();function US(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new an(n);return i.colorSpace=gt,i}var mu=null;function NS(){return mu||(mu=US()),mu}var Yn=class{constructor(e,t,{color:i=12303291,opacity:s=.5,blending:r=$i,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new st(1,1),this.mat=new Rs({map:NS(),color:i,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new Ar(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new F}emit(e,t,i,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,i);let d=h.userData;d.life=a,d.maxLife=a,d.vx=s,d.vy=r,d.vz=o,d.grow=c,d.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let i of this.items){if(!i.visible)continue;let s=i.userData;if(s.life-=e,s.life<=0){i.visible=!1;continue}i.position.x+=s.vx*e,i.position.y+=s.vy*e,i.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;i.scale.set(o,o,1),i.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},El=class{constructor(e,t=400){this.max=t,this.i=0;let i=new st(.32,1.4);i.rotateX(-Math.PI/2),this.mesh=new Lt(i,new ot({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new ut;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new ut,this._q=new Pn,this._p=new F,this._s=new F(1,1,1),this._up=new F(0,1,0)}add(e,t,i){this._q.setFromAxisAngle(this._up,i),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function Do(){return{driftT:0,driftAcc:0}}function zp(n,e,t,i){if(e&&Math.abs(t)>=8)return n.driftT+=i,n.driftAcc+=i*15,0;let s=0;return n.driftT>=1&&(s=Math.round(n.driftAcc)),n.driftT=0,n.driftAcc=0,s}var Fp=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function Bp(n){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;e=Fp()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),n&&n(t.w,t.h)}async function s(){if(!Fp())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:t,goLandscape:s,refresh:i,get rotated(){return e}}}var is=[14100029,16735802,16747546,16757504,16765503,13038642,4906624,1483594,1013358,1622208,3718648,2060267,1981066,8141549,11032055,15557798,16723555,7999504,9067034,13211182,16317180,13358561,7041664,1120295],bl=[16109749,15250575,13011554,11037509,8014380,4860954],wl=[1118481,2759184,5913118,10119738,14266986,15263976,14100029,3718648],Uo=["none","center","dual","side"],No=["clear","dark","limo"],ss=["none","cap","beanie","cowboy","crown","helmet"],Tl={none:"No hat",cap:"Snapback",beanie:"Beanie",cowboy:"Stetson",crown:"Crown",helmet:"Helmet"},Oi=n=>Number.isInteger(n)&&n>=0&&n<=16777215,gu=(n,e,t)=>e.includes(n)?n:t;function Hp(){return{rims:12172998,stripes:"none",stripe:16317180,glow:null,tint:"dark"}}function OS(){return{shirt:2845872,pants:2963272,skin:13011554,hair:2759184,hat:"none",hatColor:2237739}}function kp(n){let e=Hp(),t=n&&typeof n=="object"?n:{};return{rims:Oi(t.rims)?t.rims:e.rims,stripes:gu(t.stripes,Uo,e.stripes),stripe:Oi(t.stripe)?t.stripe:e.stripe,glow:Oi(t.glow)?t.glow:null,tint:gu(t.tint,No,e.tint)}}function Al(n){let e=OS(),t=n&&typeof n=="object"?n:{};return{shirt:Oi(t.shirt)?t.shirt:e.shirt,pants:Oi(t.pants)?t.pants:e.pants,skin:Oi(t.skin)?t.skin:e.skin,hair:Oi(t.hair)?t.hair:e.hair,hat:gu(t.hat,ss,e.hat),hatColor:Oi(t.hatColor)?t.hatColor:e.hatColor}}function xu(n){return String(n??"").replace(/[^\w .\-'!?]/g,"").trim().slice(0,16)}function Gp(n){(!n.carSkin||typeof n.carSkin!="object")&&(n.carSkin={});for(let t of Object.keys(n.carSkin))n.carSkin[t]=kp(n.carSkin[t]);n.outfit=Al(n.outfit),n.hats=ss.slice();let e=xu(n.name);return n.name=e||"Driver"+Math.floor(1e3+Math.random()*9e3),n}function Ns(n,e){return n.carSkin[e]||(n.carSkin[e]=Hp()),n.carSkin[e]}function Vp(n,e){let t=Ns(n,e),i=n.outfit;return{p:n.paint[e]|0,r:t.rims,s:Uo.indexOf(t.stripes),sc:t.stripe,g:t.glow==null?-1:t.glow,t:No.indexOf(t.tint),o:[i.shirt,i.pants,i.skin,i.hair,ss.indexOf(i.hat),i.hatColor]}}function Wp(n){n=n||{};let e=Array.isArray(n.o)?n.o:[];return{paint:Oi(n.p)?n.p:null,carSkin:kp({rims:n.r,stripes:Uo[n.s],stripe:n.sc,glow:n.g,tint:No[n.t]}),outfit:Al({shirt:e[0],pants:e[1],skin:e[2],hair:e[3],hat:ss[e[4]],hatColor:e[5]})}}var Rl=n=>"#"+(n|0).toString(16).padStart(6,"0");var Cl=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,dmg:22,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"glock",name:"Glock 19",price:1800,rate:.16,auto:!1,pellets:1,spread:.014,range:85,dmg:20,ammoBox:34,ammoPrice:70,start:34,desc:"Fast-firing 9mm. Tap tap tap."},{id:"deagle",name:"Desert Eagle",price:4200,rate:.55,auto:!1,pellets:1,spread:.01,range:110,dmg:55,ammoBox:14,ammoPrice:110,start:14,desc:"Hand cannon. Huge damage."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,dmg:14,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,dmg:12,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"ak",name:"AK-47",price:7500,rate:.11,auto:!0,pellets:1,spread:.022,range:120,dmg:26,ammoBox:60,ammoPrice:180,start:60,desc:"Hard-hitting full auto."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,dmg:24,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."},{id:"sniper",name:"Longshot .50",price:15e3,rate:1.3,auto:!1,pellets:1,spread:.001,range:260,dmg:120,ammoBox:10,ammoPrice:250,start:10,desc:"One shot, one drop. Huge range."},{id:"minigun",name:"Shredder Minigun",price:4e4,rate:.04,auto:!0,pellets:1,spread:.05,range:100,dmg:14,ammoBox:400,ammoPrice:600,start:400,desc:"Melts everything. Eats ammo."}],Xp=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],Oo=0,Pl=ss.map(n=>({id:n,name:Tl[n],price:0})),_u=15,rs=n=>Cl.find(e=>e.id===n)||null;function qp(n){let e=new Set(Cl.map(t=>t.id));Array.isArray(n.weapons)||(n.weapons=[]),n.weapons=n.weapons.filter((t,i,s)=>e.has(t)&&s.indexOf(t)===i),(!n.ammo||typeof n.ammo!="object")&&(n.ammo={});for(let t of Object.keys(n.ammo))e.has(t)||delete n.ammo[t];for(let t of n.weapons)n.ammo[t]=Math.max(0,n.ammo[t]|0);return n.weapons.includes(n.equipped)||(n.equipped=n.weapons[0]||null),n.outfit=Al(n.outfit),n.hats=Pl.map(t=>t.id),n}var Zn=n=>({ok:!1,msg:n}),Os=n=>({ok:!0,msg:n});function Yp(n,e){let t=rs(e);return t?n.weapons.includes(e)?Zn("Already owned"):n.cash<t.price?Zn("Not enough cash"):(n.cash-=t.price,n.weapons.push(e),n.ammo[e]=(n.ammo[e]|0)+t.start,n.equipped=e,Os(t.name+" bought")):Zn("Unknown weapon")}function Zp(n,e){let t=rs(e);return t?n.weapons.includes(e)?n.cash<t.ammoPrice?Zn("Not enough cash"):(n.cash-=t.ammoPrice,n.ammo[e]=(n.ammo[e]|0)+t.ammoBox,Os("+"+t.ammoBox+" rounds")):Zn("Buy the gun first"):Zn("Unknown weapon")}function $p(n,e){return e===null?(n.equipped=null,Os("Holstered")):n.weapons.includes(e)?(n.equipped=e,Os(rs(e).name+" equipped")):Zn("Not owned")}function vu(n){let e=[...n.weapons,null];if(e.length===1)return null;let t=e.indexOf(n.equipped);return n.equipped=e[(t+1)%e.length],n.equipped}function Jp(n,e){return!Number.isInteger(e)||e<0||e>16777215?Zn("Unknown color"):n.outfit.shirt===e?Zn("Already wearing it"):n.cash<Oo?Zn("Not enough cash"):(n.cash-=Oo,n.outfit.shirt=e,Os("New shirt"))}function Kp(n,e){let t=Pl.find(i=>i.id===e);return t?n.hats.includes(e)?(n.outfit.hat=e,Os(t.name+" on")):n.cash<t.price?Zn("Not enough cash"):(n.cash-=t.price,n.hats.push(e),n.outfit.hat=e,Os(t.name+" bought")):Zn("Unknown hat")}var Ll=class{constructor(){this.reset(0,0,0)}reset(e,t,i){this.pos={x:e,z:t},this.heading=i,this.speed=0,this.phase=0}update(e,t,i){t=Math.min(t,.05);let s=Qp(e.moveX||0),r=Qp(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,d=this.pos.z+c*this.speed*t;if(i){let p=i(h,d,.45);h=p.x,d=p.z}return this.pos.x=h,this.pos.z=d,this.phase+=this.speed*t*2.1,this}};function Qp(n){return n<-1?-1:n>1?1:n}function Dr(n,e,t,i){let s=n-t,r=e-i;return Math.sqrt(s*s+r*r)}function yu(n,e,t){let i=Math.cos(t),s=-Math.sin(t);return{x:n-i*1.9,z:e-s*1.9,heading:t}}function jp(n,e,t,i,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(n<s.minX||n>s.maxX)return 1/0}else{let l=(s.minX-n)/t,c=(s.maxX-n)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(i)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/i,c=(s.maxZ-e)/i;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function Mu(n,e,t,i,s,r,o,a){let l=n-s,c=e-r,h=l*t+c*i,d=l*l+c*c-o*o,p=h*h-d;if(p<0)return 1/0;let m=Math.sqrt(p),x=-h-m;return x<0&&(x=-h+m),x>=0&&x<=a?x:1/0}It();var zS=()=>new _e({color:13011554,roughness:.75}),FS=()=>new _e({color:2963272,roughness:.85}),BS=()=>new _e({color:1118481,roughness:.6}),HS=()=>new _e({color:2759184,roughness:.9}),kS=()=>new _e({color:1908515,metalness:.7,roughness:.35});function ft(n,e,t,i,s=0){let r=new De(n,e,t);r.translate(0,s,0);let o=new te(r,i);return o.castShadow=!0,o}function GS(n){let e=new lt,t=kS(),i=new _e({color:7031342,roughness:.8});if(n==="pistol")e.add(ft(.06,.08,.24,t,.05).translateZ(-.08)),e.add(ft(.05,.12,.06,t,-.02));else if(n==="shotgun")e.add(ft(.07,.07,.75,t,.05).translateZ(-.28)),e.add(ft(.08,.09,.22,i,0).translateZ(-.38)),e.add(ft(.07,.12,.3,i,0).translateZ(.18));else if(n==="smg")e.add(ft(.07,.11,.42,t,.05).translateZ(-.12)),e.add(ft(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(ft(.04,.04,.12,t,.07).translateZ(-.38));else if(n==="glock"||n==="deagle"){let s=n==="deagle";e.add(ft(s?.07:.06,s?.09:.075,s?.3:.22,t,.05).translateZ(-.08)),e.add(ft(.05,.13,.065,n==="deagle"?i:t,-.03))}else if(n==="sniper")e.add(ft(.06,.1,.95,t,.05).translateZ(-.3)),e.add(ft(.045,.045,.32,t,.14).translateZ(-.12)),e.add(ft(.06,.13,.3,i,0).translateZ(.3));else if(n==="minigun"){for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.add(ft(.03,.03,.8,t,.05+Math.sin(r)*.06).translateX(Math.cos(r)*.06).translateZ(-.35))}e.add(ft(.2,.2,.3,t,.05).translateZ(.05))}else if(n==="ak"){e.add(ft(.07,.11,.72,t,.05).translateZ(-.22));let s=ft(.06,.2,.08,t,-.1).translateZ(-.18);s.rotation.x=.35,e.add(s),e.add(ft(.06,.12,.28,i,.02).translateZ(.26)),e.add(ft(.07,.06,.24,i,0).translateZ(-.38))}else e.add(ft(.07,.11,.7,t,.05).translateZ(-.22)),e.add(ft(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(ft(.06,.13,.26,t,.02).translateZ(.24)),e.add(ft(.05,.05,.2,t,.14).translateZ(-.15));return e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function VS(n,e){if(n==="crown"){let t=new lt,i=new _e({color:16765503,metalness:1,roughness:.25,emissive:3811840}),s=new te(new Mt(.16,.16,.09,16,1,!0),i);s.material.side=bt,s.position.y=.02,t.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new te(new Cr(.035,.09,4),i);a.position.set(Math.cos(o)*.155,.1,Math.sin(o)*.155),t.add(a);let l=new te(new Kt(.018,6,6),new _e({color:e,emissive:e,emissiveIntensity:.6}));l.position.set(Math.cos(o+.5)*.162,.02,Math.sin(o+.5)*.162),t.add(l)}return t}if(n==="helmet"){let t=new lt,i=new ts({color:e,metalness:.4,roughness:.25,clearcoat:1}),s=new te(new Kt(.2,16,12,0,Math.PI*2,0,Math.PI/1.7),i);s.position.y=-.06,t.add(s);let r=new te(new Kt(.205,16,8,Math.PI*1.2,Math.PI*.6,Math.PI*.35,Math.PI*.25),new _e({color:724762,metalness:.9,roughness:.1}));return r.position.y=-.06,t.add(r),t}if(n==="cap"){let t=new lt,i=new _e({color:e,roughness:.7}),s=new te(new Kt(.155,14,8,0,Math.PI*2,0,Math.PI/2),i);t.add(s);let r=ft(.24,.02,.14,i);return r.position.set(0,.01,-.15),t.add(r),t}if(n==="beanie"){let t=new _e({color:e,roughness:.95});return new te(new Kt(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(n==="cowboy"){let t=new lt,i=new _e({color:e,roughness:.85}),s=new te(new Mt(.3,.3,.02,20),i),r=new te(new Mt(.12,.15,.17,14),i);return r.position.y=.09,t.add(s,r),t}return null}function Ur(n){let e=new lt,t=zS(),i=FS(),s=BS(),r=HS(),o=new _e({color:n.shirt,roughness:.8}),a=[],l=[];for(let _ of[-1,1]){let R=new lt;R.position.set(_*.12,.92,0),R.add(ft(.17,.84,.2,i,-.42));let b=ft(.17,.09,.3,s,-.88);b.position.z=-.04,R.add(b),e.add(R),a.push(R);let y=new lt;y.position.set(_*.33,1.5,0),y.add(ft(.13,.36,.15,o,-.17)),y.add(ft(.11,.3,.12,t,-.5));let T=ft(.1,.1,.1,t,-.69);y.add(T),e.add(y),l.push(y)}let c=ft(.52,.62,.27,o,1.23);e.add(c);let h=ft(.53,.06,.28,s,.93);e.add(h);let d=ft(.12,.08,.12,t,1.57);e.add(d);let p=new te(new Kt(.15,16,12),t);p.position.y=1.74,p.scale.set(1,1.12,1),p.castShadow=!0,e.add(p);let m=new te(new Kt(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),r);m.position.y=1.76,e.add(m);let x=new lt,g=new te(new De(.3,.62,.1).translate(0,-.31,0),r);g.position.set(0,1.84,.13),g.rotation.x=.12,g.castShadow=!0;let f=new te(new De(.05,.36,.14).translate(0,-.18,0),r);f.position.set(-.15,1.82,.02);let u=f.clone();u.position.x=.15,x.add(g,f,u),x.visible=!1,e.add(x);let S=new lt;S.position.y=1.8,e.add(S);let M=new lt;return M.position.y=-.69,l[1].add(M),e.userData={legs:a,arms:l,shirt:o,skin:t,pants:i,hair:r,longHair:x,hatSlot:S,gunSlot:M,gunId:null,hatId:null,hatColor:null,recoil:0},oi(e,n),e}function oi(n,e){let t=n.userData;t.shirt.color.setHex(e.shirt),e.pants!=null&&t.pants.color.setHex(e.pants),e.skin!=null&&t.skin.color.setHex(e.skin),e.hair!=null&&t.hair.color.setHex(e.hair);let i=e.hatColor!=null?e.hatColor:e.shirt;if(t.hatId!==e.hat||t.hatColor!==i){t.hatSlot.clear();let s=VS(e.hat,i);s&&t.hatSlot.add(s),t.hatId=e.hat,t.hatColor=i}t.hair.visible=e.hat!=="helmet",t.longHair.visible=!!e.hairLong&&e.hat!=="helmet"}function zo(n,e){let t=n.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let i=GS(e);i.rotation.x=-Math.PI/2,t.gunSlot.add(i)}t.gunId=e}}function zs(n,e,t,i,s){let r=n.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),i?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),n.position.y=Math.abs(Math.cos(e))*o*.05}function Il(n){n.userData.recoil=1}It();var em=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],WS=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function tm(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new an(i);return s.colorSpace=gt,s.anisotropy=4,s}function XS(n,e,t){return tm(512,128,(i,s,r)=>{i.fillStyle="#0b0f1a",i.fillRect(0,0,s,r),i.strokeStyle=t,i.lineWidth=8,i.strokeRect(6,6,s-12,r-12),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.font="bold 58px sans-serif",i.fillText(n,s/2,52),i.fillStyle="#e2e8f0",i.font="bold 22px sans-serif",i.fillText(e,s/2,100)})}function qS(){return tm(128,128,(n,e,t)=>{let i=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{n.beginPath(),n.arc(i,s,62-a*10,0,Math.PI*2),n.fillStyle=o,n.fill()})})}function nm(n,e){let t=[],i=[],s=new _e({color:14078925,roughness:.85,envMapIntensity:.4}),r=new _e({color:2961720,roughness:.8}),o=new _e({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of WS){let[d,p]=h.bx,[m,x]=h.bz,g=(d+p)/2,f=(m+x)/2,u=p-d,S=x-m,M=new te(new De(u,h.h,S).translate(0,h.h/2,0),s);M.position.set(g,.03,f),M.castShadow=M.receiveShadow=!0,n.add(M);let _=new te(new De(u+.6,.5,S+.6),r);_.position.set(g,h.h+.25,f),n.add(_);let R=h.face==="-x"?-1:1,b=R<0?d:p,y=new te(new De(1.6,.2,S*.9),new _e({color:h.color,roughness:.6}));y.position.set(b+R*.8,3.3,f),y.rotation.z=R*.18,n.add(y);let T=new te(new st(S*.75,2.4),o);T.position.set(b+R*.02,1.5,f),T.rotation.y=R*Math.PI/2,n.add(T);let E=new _e({map:XS(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});E.emissiveMap=E.map,E.emissiveIntensity=.55;let v=new te(new st(S*.85,S*.85/4),E);v.position.set(b+R*.05,h.h-1.4,f),v.rotation.y=R*Math.PI/2,n.add(v),e.colliders.push({minX:d,maxX:p,minZ:m,maxZ:x});let D={x:b+R*1.6,z:f},z=new ot({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:bt}),I=new te(new ui(.9,1.25,32).rotateX(-Math.PI/2),z);I.position.set(D.x,.09,D.z),n.add(I);let L=new ot({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:bt,blending:Zt}),A=new te(new Mt(1.05,1.05,3.2,24,1,!0),L);A.position.set(D.x,1.6,D.z),n.add(A),i.push({ring:I,ringMat:z,beamMat:L}),t.push({id:h.id,type:h.type,name:h.name,door:D,color:h.accent})}let a=YS(n,e),l=0;function c(h){l+=h;let d=.55+Math.sin(l*3)*.25;for(let p of i)p.ringMat.opacity=d+.2,p.beamMat.opacity=d*.3,p.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function YS(n,e){let o=new te(new st(54,16).rotateX(-Math.PI/2),new _e({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,n.add(o);let a=new _e({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let f of l){let u=new te(new De(f.maxX-f.minX,f.h,f.maxZ-f.minZ).translate(0,f.h/2,0),a);u.position.set((f.minX+f.maxX)/2,.03,(f.minZ+f.maxZ)/2),u.castShadow=u.receiveShadow=!0,n.add(u),e.colliders.push({minX:f.minX,maxX:f.maxX,minZ:f.minZ,maxZ:f.maxZ})}let c=new te(new st(.3,15).rotateX(-Math.PI/2),new ot({color:16765503}));c.position.set(51,.06,156/2),n.add(c);let h=qS(),d=new _e({map:h,roughness:.6,side:bt}),p=new _e({color:4144966,roughness:.7}),x=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([f,u])=>{let S=new lt;S.position.set(f,.04,u);let M=new te(new De(.08,1.1,.08).translate(0,.55,0),p),_=new te(new Rr(.55,24),d);return _.position.y=1.5,_.rotation.y=-Math.PI/2,_.castShadow=!0,S.add(M,_),n.add(S),{x:f,z:u,r:.6,up:!0,timer:0,fall:0,pivot:S}});function g(f){for(let u of x)u.up?u.fall>0&&(u.fall=Math.max(0,u.fall-f*4)):(u.fall=Math.min(1,u.fall+f*6),u.timer-=f,u.timer<=0&&(u.up=!0)),u.pivot.rotation.z=u.fall*(Math.PI/2-.05),u.pivot.rotation.z*=-1}return{targets:x,update:g,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function im(n){return n.up?(n.up=!1,n.timer=3,!0):!1}It();var ZS=.22,Fs=1.45,$S=85,Su=4.5;function sm(n){let e=[],t=new il(.07,.5,2,8).rotateX(Math.PI/2),i=new Mt(.008,.05,1,6,1,!0).rotateX(Math.PI/2).translate(0,0,.5);for(let f=0;f<48;f++){let u=new te(t,new ot({color:16774856,transparent:!0,opacity:1,blending:Zt,depthWrite:!1}));u.visible=!1,u.frustumCulled=!1;let S=new te(new Kt(.22,8,6),new ot({color:16751150,transparent:!0,opacity:.45,blending:Zt,depthWrite:!1}));u.add(S);let M=new te(i,new ot({color:16757575,transparent:!0,opacity:.75,blending:Zt,depthWrite:!1,side:bt}));M.visible=!1,M.frustumCulled=!1,n.add(u,M),e.push({slug:u,trail:M,live:!1,x0:0,z0:0,dx:0,dz:0,dist:0,travel:0,hitT:null,onHit:null,wall:!1})}let s=0,r=new Yn(n,8,{color:16762976,opacity:.95,blending:Zt}),o=new Yn(n,30,{color:16757575,opacity:.9,blending:Zt}),a=new Yn(n,20,{color:12103840,opacity:.5}),l=0;function c(f,u,S,M,_,R,b,y,T){let E=e[s];s=(s+1)%e.length,Object.assign(E,{live:!0,x0:f,z0:u,dx:S,dz:M,dist:Math.max(.5,_),travel:0,hitT:R,wall:b,onHit:y,onArrive:T||null}),E.slug.visible=!0,E.trail.visible=!0,E.slug.rotation.y=Math.atan2(S,M),h(E)}function h(f){let u=Math.min(f.travel,f.dist),S=f.x0+f.dx*u,M=f.z0+f.dz*u;f.slug.position.set(S,Fs,M),d(f,S,M,Math.min(Su,u))}function d(f,u,S,M){f.trail.position.set(u,Fs,S),f.trail.rotation.y=Math.atan2(-f.dx,-f.dz),f.trail.scale.set(1,1,Math.max(.01,M))}function p(f){let u=f.x0+f.dx*f.dist,S=f.z0+f.dz*f.dist;if(f.onArrive){let M=f.onArrive;f.onArrive=null,M();return}if(f.hitT){im(f.hitT)&&f.onHit&&f.onHit(f.hitT);for(let M=0;M<5;M++)o.emit(u,Fs,S,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else f.wall&&(o.emit(u-f.dx*.1,Fs,S-f.dz*.1,{vx:-f.dx*2,vy:1.5,vz:-f.dz*2,life:.18,size:.3,grow:.2}),a.emit(u-f.dx*.2,Fs,S-f.dz*.2,{vx:-f.dx,vy:.6,vz:-f.dz,life:.5,size:.4,grow:1.2}))}function m(f){for(let u of e)if(u.live){if(u.travel+=$S*f,u.travel>=u.dist){if(u.slug.visible&&(p(u),u.slug.visible=!1),u.travel-u.dist>=Su){u.live=!1,u.trail.visible=!1;continue}let S=u.x0+u.dx*u.dist,M=u.z0+u.dz*u.dist,_=Su-(u.travel-u.dist);d(u,S,M,Math.min(_,u.dist));continue}h(u)}}function x(f,u,S,M){let _=S-f,R=M-u,b=Math.hypot(_,R);b>.1&&(r.emit(f,Fs,u,{vx:_/b*2,vy:0,vz:R/b*2,life:.06,size:.7,grow:.6}),c(f,u,_/b,R/b,b,null,!0,null))}function g(f,u,S,M){l=Math.max(0,l-f),m(f),r.update(f),o.update(f),a.update(f);let _=u.save.equipped,R=_&&rs(_);if(S=S||M,!R||!S||l>0)return{fired:!1};if(!R.auto&&!M)return{fired:!1};if((u.save.ammo[_]|0)<=0)return M&&(u.audio.click&&u.audio.click(),u.toast&&u.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),l=.3,{fired:!1,empty:!0};u.save.ammo[_]--,l=R.rate;let b=u.heading,y=ZS;for(let U of u.targets){if(!U.up)continue;let H=U.x-u.pos.x,N=U.z-u.pos.z,k=Math.hypot(H,N);if(k>R.range||k<.5)continue;let X=Math.atan2(-H,-N),q=Math.atan2(Math.sin(X-u.heading),Math.cos(X-u.heading));Math.abs(q)<y&&(y=Math.abs(q),b=X)}if(u.hitables)for(let U of u.hitables)for(let H of U){if(H.ref&&H.ref.kind==="ped")continue;let N=H.x-u.pos.x,k=H.z-u.pos.z,X=Math.hypot(N,k);if(X>R.range||X<.5)continue;let q=Math.atan2(-N,-k),ie=Math.abs(Math.atan2(Math.sin(q-u.heading),Math.cos(q-u.heading)));ie<y&&(y=ie,b=q)}let T=-Math.sin(u.heading),E=-Math.cos(u.heading),v=Math.cos(u.heading),D=-Math.sin(u.heading),z=u.pos.x+T*.95+v*.3,I=u.pos.z+E*.95+D*.3;r.emit(z,Fs,I,{vx:T*2,vy:0,vz:E*2,life:.06,size:R.id==="shotgun"?1.1:.7,grow:.6});let L=0,A=[];for(let U=0;U<R.pellets;U++){let H=b+(Math.random()-.5)*2*R.spread,N=-Math.sin(H),k=-Math.cos(H),X=R.range,q=null;for(let G of u.colliders){let K=jp(z,I,N,k,G,X);K<X&&(X=K,q=null)}for(let G of u.targets){if(!G.up)continue;let K=Mu(z,I,N,k,G.x,G.z,G.r,X);K<X&&(X=K,q=G)}let ie=null;if(u.hitables)for(let G of u.hitables)for(let K of G){let me=Mu(z,I,N,k,K.x,K.z,K.r,X);me<X&&(X=me,ie=K.ref,q=null)}if((q||ie)&&L++,ie){let G=R.dmg||20,K=N,me=k;c(z,I,N,k,X,null,!1,null,()=>u.onPersonHit&&u.onPersonHit(ie,G,K,me))}else c(z,I,N,k,X,q,X<R.range,u.onTargetHit);U<3&&A.push([z,I,z+N*X,I+k*X])}return u.onShot&&u.onShot(A),u.audio.shot&&u.audio.shot(R.id),{fired:!0,hits:L}}return{update:g,remoteShot:x}}var JS=n=>"#"+n.toString(16).padStart(6,"0"),Fo=n=>"$"+n.toLocaleString();function rm(n){let e=c=>document.getElementById(c),t=e("store"),i=e("store-list"),s=null;function r(c){n.toast(c.msg),n.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(n.persist(),n.onChange()),l()}function o(){let c=n.save;i.innerHTML="";for(let d of Cl){let p=c.weapons.includes(d.id),m=document.createElement("div");m.className="upg-row store-row"+(c.equipped===d.id?" sel":""),m.innerHTML=`<div class="uinfo"><b>${d.name}</b><small>${d.desc}</small>
        <small class="ammo-line">${p?"Ammo: "+(c.ammo[d.id]|0):Fo(d.price)}</small></div>
        <div class="store-btns"></div>`;let x=m.querySelector(".store-btns");if(p){let g=document.createElement("button");g.className="upg-btn",g.textContent="+"+d.ammoBox+" AMMO "+Fo(d.ammoPrice),g.disabled=c.cash<d.ammoPrice,g.onclick=()=>r(Zp(c,d.id)),x.appendChild(g);let f=document.createElement("button");f.className="buy-btn eq",f.textContent=c.equipped===d.id?"EQUIPPED":"EQUIP",f.disabled=c.equipped===d.id,f.onclick=()=>r($p(c,d.id)),x.appendChild(f)}else{let g=document.createElement("button");g.className="buy-btn",g.textContent="BUY "+Fo(d.price),g.disabled=c.cash<d.price,g.onclick=()=>r(Yp(c,d.id)),x.appendChild(g)}i.appendChild(m)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",i.appendChild(h)}function a(){let c=n.save;i.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${Oo?Fo(Oo):"FREE"}</b><div class="swatch-row"></div>`;let d=h.querySelector(".swatch-row");for(let g of Xp){let f=document.createElement("div");f.className="swatch"+(c.outfit.shirt===g?" sel":""),f.style.background=JS(g),f.onclick=()=>r(Jp(c,g)),d.appendChild(f)}i.appendChild(h);let p=document.createElement("div");p.className="style-sec",p.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let m=p.querySelector(".swatch-row");for(let g of Pl){let f=document.createElement("button"),u=c.hats.includes(g.id);f.className="wheel-opt"+(c.outfit.hat===g.id?" sel":""),f.innerHTML=`${g.name}<small>${c.outfit.hat===g.id?"wearing":u||!g.price?"free":Fo(g.price)}</small>`,f.onclick=()=>r(Kp(c,g.id)),m.appendChild(f)}i.appendChild(p);let x=document.createElement("p");x.className="store-tip",x.textContent="Everything here is free. More colors, pants, skin tone & hair in \u{1F3A8} SKIN EDITOR (pause menu).",i.appendChild(x)}function l(){e("store-cash").textContent=n.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var om=[];for(let n=0;n<=5;n++)om.push((n-5/2)*74);var Bo=384/2;function am(n,e){let t=n.getContext("2d"),i=n.width,r=i/2/130,o=0;function a(l,c,h,d,p){if((o++&3)!==0)return;let m=g=>i/2+(g-l)*r,x=g=>i/2+(g-c)*r;t.clearRect(0,0,i,i),t.save(),t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,40,28,0.82)",t.fillRect(0,0,i,i),t.fillStyle="rgba(120,130,145,0.55)";for(let g=0;g<5;g++)for(let f=0;f<5;f++){let u=(g-2)*74,S=(f-4/2)*74;t.fillRect(m(u-30),x(S-30),60*r,60*r)}t.strokeStyle="#2b2f36",t.lineWidth=14*r,t.beginPath();for(let g of om)t.moveTo(m(g),x(-Bo)),t.lineTo(m(g),x(Bo)),t.moveTo(m(-Bo),x(g)),t.lineTo(m(Bo),x(g));t.moveTo(m(Bo),x(0)),t.lineTo(m(232),x(0)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(m(232),x(-225)),t.lineTo(m(232),x(225)),t.stroke();for(let g of e)t.fillStyle=g.color,t.beginPath(),t.arc(m(g.door.x),x(g.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();d&&(t.fillStyle="#ffffff",t.fillRect(m(d.x)-3,x(d.z)-3,6,6)),p&&p.each(g=>{g.b>=0||(t.fillStyle="#4ade80",t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.beginPath(),t.arc(m(g.x),x(g.z),4,0,Math.PI*2),t.fill(),t.stroke())}),t.restore(),t.save(),t.translate(i/2,i/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",i/2,11)}return{draw:a}}var KS={none:"None",center:"Center",dual:"Dual",side:"Side"},QS={clear:"Clear",dark:"Dark",limo:"Limo"};function lm(n){let e=x=>document.getElementById(x),t=e("skin-editor"),i=e("se-body"),s=n.save,r="car",o=!1;function a(x,g,f,u={}){let S=`<div class="swatch-row se-row" data-key="${x}">`;u.off&&(S+=`<button class="swatch off${f==null?" sel":""}" data-v="off" aria-label="off">OFF</button>`);for(let _ of g)S+=`<button class="swatch${_===f?" sel":""}" data-v="${_}" style="background:${Rl(_)}" aria-label="color"></button>`;let M=f!=null&&!g.includes(f);return S+=`<label class="swatch custom${M?" sel":""}" style="${M?"background:"+Rl(f):""}" title="Any color"><input type="color" data-key="${x}" value="${Rl(f??16777215)}">\u{1F3A8}</label>`,S+"</div>"}function l(x,g,f,u){return`<div class="swatch-row se-row" data-key="${x}">`+g.map(S=>`<button class="wheel-opt${S===u?" sel":""}" data-v="${S}"><b>${f[S]}</b></button>`).join("")+"</div>"}let c=(x,g)=>`<div class="style-sec"><b>${x}</b>${g}</div>`;function h(){let x=s.currentCar,g=Ns(s,x),u='<div class="swatch-row se-row" data-key="car">'+n.cars.filter(S=>s.owned.includes(S.id)).map(S=>`<button class="wheel-opt${S.id===x?" sel":""}" data-v="${S.id}"><b>${S.name}</b></button>`).join("")+"</div>";i.innerHTML=c("Car",u)+c("Body paint",a("paint",is,s.paint[x]))+c("Rims",a("rims",[12172998,1513500,13211182,2287359,14100029,16317180,4906624,11032055],g.rims))+c("Racing stripes",l("stripes",Uo,KS,g.stripes))+(g.stripes!=="none"?c("Stripe color",a("stripe",is,g.stripe)):"")+c("Underglow",a("glow",[2287359,16723555,4906624,11032055,16765503,16317180],g.glow,{off:!0}))+c("Window tint",l("tint",No,QS,g.tint))}function d(){let x=s.outfit;i.innerHTML=c("Name (shown online)",`<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g,"")}" autocomplete="off" spellcheck="false">`)+c("Shirt",a("shirt",is,x.shirt))+c("Pants",a("pants",[2963272,1981066,1120295,7041664,9067034,16317180,7999504,1483594],x.pants))+c("Skin tone",a("skin",bl,x.skin))+c("Hair",a("hair",wl,x.hair))+c("Hat",l("hat",ss,Tl,x.hat))+(x.hat!=="none"?c("Hat color",a("hatColor",is,x.hatColor)):"");let g=e("se-name");g.addEventListener("input",()=>{let f=xu(g.value);f&&(s.name=f,n.persist(),n.onName())}),g.addEventListener("keydown",f=>f.stopPropagation())}function p(){for(let x of t.querySelectorAll(".setab"))x.classList.toggle("active",x.dataset.tab===r);r==="car"?h():d()}function m(x,g){let f=s.currentCar,u=Ns(s,f),S=s.outfit,M=g==="off"?null:typeof g=="string"&&g[0]==="#"?parseInt(g.slice(1),16):isNaN(+g)?g:+g,_=!1,R=!1;switch(x){case"car":s.owned.includes(g)&&(s.currentCar=g,_=!0);break;case"paint":s.paint[f]=M,_=!0;break;case"rims":u.rims=M,_=!0;break;case"stripes":u.stripes=g,_=!0;break;case"stripe":u.stripe=M,_=!0;break;case"glow":u.glow=M,_=!0;break;case"tint":u.tint=g,_=!0;break;case"shirt":case"pants":case"skin":case"hair":case"hatColor":S[x]=M,R=!0;break;case"hat":S.hat=g,R=!0;break}n.persist(),_&&n.onCar(x==="car"),R&&n.onOutfit(),n.beep(760,.03)}i.addEventListener("click",x=>{let g=x.target.closest("button[data-v]");if(!g)return;let f=g.closest("[data-key]");m(f.dataset.key,g.dataset.v),p()}),i.addEventListener("input",x=>{let g=x.target.closest("input[type=color]");if(!g)return;m(g.dataset.key,g.value);let f=g.closest("label");f&&(f.style.background=g.value)}),i.addEventListener("change",x=>{x.target.closest("input[type=color]")&&p()});for(let x of t.querySelectorAll(".setab"))x.addEventListener("click",()=>{r=x.dataset.tab,n.onTab(r),p()});return{open(x){r=x||"car",o=!0,t.classList.remove("hidden"),n.onTab(r),p()},close(){o=!1,t.classList.add("hidden")},get isOpen(){return o},get tab(){return r},refresh:p}}It();var bu=["lobby","apartment","office","diner"],cm={lobby:"LOBBY",apartment:"APARTMENT",office:"OFFICE",diner:"DINER"},Nr=22,Or=16,Dl=4.6,fi=.3,jS=-1180,hm=n=>bu[(n*2654435761>>>0)%bu.length];function eE(n){return{x:(bu.indexOf(n)-1.5)*90,z:jS}}function Eu(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new an(s);return r.colorSpace=gt,i&&(r.wrapS=r.wrapT=Li,r.repeat.set(i[0],i[1])),r}var Ul=(n,e={})=>new _e(Object.assign({color:n,roughness:.8,metalness:.05,emissive:n,emissiveIntensity:.18},e)),tE={lobby:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#e9e4da":"#b9b2a5",n.fillRect(t*16,e*16,16,16)},apartment:n=>{for(let e=0;e<8;e++)n.fillStyle=e%2?"#9a6a3e":"#a8754a",n.fillRect(0,e*16,128,16),n.fillStyle="#7a5230",n.fillRect(e*37%128,e*16,2,16)},office:n=>{n.fillStyle="#5b6472",n.fillRect(0,0,128,128),n.fillStyle="#525a67";for(let e=0;e<128;e+=32)n.fillRect(e,0,1,128),n.fillRect(0,e,128,1)},diner:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#f2f2f2":"#1a1a1a",n.fillRect(t*16,e*16,16,16)}},nE={lobby:14209732,apartment:13227715,office:14673388,diner:15909813};function um(n){let e=new Map;function t(r){if(e.has(r))return e.get(r);let o=eE(r),a=new lt;a.position.set(o.x,0,o.z);let l=[],c=Nr/2,h=Or/2,d=(y,T,E,v)=>l.push({minX:o.x+y,maxX:o.x+T,minZ:o.z+E,maxZ:o.z+v}),p=(y,T,E,v,D,z=0,I=!0)=>{let L=new te(y,T);return L.position.set(E,v,D),L.rotation.y=z,L.castShadow=I,L.receiveShadow=!0,a.add(L),L},m=(y,T,E,v,D,z,I=0,L=!0)=>{p(new De(y,T,E).translate(0,T/2,0),v,D,I,z),L&&d(D-y/2,D+y/2,z-E/2,z+E/2)},x=Eu(128,128,tE[r],[Nr/4,Or/4]);p(new st(Nr,Or).rotateX(-Math.PI/2),Ul(16777215,{map:x,emissiveMap:x,emissiveIntensity:.2}),0,.02,0,0,!1),p(new st(Nr,Or).rotateX(Math.PI/2),Ul(16053488,{emissiveIntensity:.5}),0,Dl,0,0,!1);let g=Ul(nE[r],{side:bt}),f=(y,T,E,v)=>{p(new De(y,Dl,T).translate(0,Dl/2,0),g,E,0,v,0,!1),d(E-y/2,E+y/2,v-T/2,v+T/2)};f(Nr+fi*2,fi,0,-h-fi/2),f(Nr+fi*2,fi,0,h+fi/2),f(fi,Or,-c-fi/2,0),f(fi,Or,c+fi/2,0);let u=new _e({color:16777215,emissive:16774364,emissiveIntensity:2.2});for(let y of[-6,0,6])for(let T of[-4,4])p(new st(2.4,.9).rotateX(Math.PI/2),u,y,Dl-.02,T,0,!1);let S=Eu(256,64,(y,T,E)=>{let v=y.createLinearGradient(0,0,0,E);v.addColorStop(0,"#7fb2ee"),v.addColorStop(1,"#cfe6f7"),y.fillStyle=v,y.fillRect(0,0,T,E),y.fillStyle="#3b4656";for(let D=0;D<T;D+=64)y.fillRect(D,0,4,E);y.fillRect(0,0,T,4),y.fillRect(0,E-4,T,4)});p(new st(14,1.6),new ot({map:S}),0,2.6,-h+.01,0,!1);let M=Eu(64,96,(y,T,E)=>{y.fillStyle="#20262f",y.fillRect(0,0,T,E),y.fillStyle="#4ade80",y.fillRect(0,0,T,6),y.fillRect(0,0,5,E),y.fillRect(T-5,0,5,E),y.fillStyle="#9fd4ff",y.fillRect(9,12,T-18,E-20),y.fillStyle="#16a34a",y.font="bold 14px sans-serif",y.textAlign="center",y.fillText("EXIT",T/2,40)});p(new st(2.2,3).translate(0,1.5,0),new _e({map:M,emissive:16777215,emissiveMap:M,emissiveIntensity:.6}),0,0,h-.02,Math.PI,!1);let _=new ot({color:4906624,transparent:!0,opacity:.7,depthWrite:!1,side:bt}),R=p(new ui(.75,1.05,32).rotateX(-Math.PI/2),_,0,.05,h-1.6,0,!1);iE(r,{add:p,boxAt:m,mat:Ul,W2:c,D2:h,group:a,solid:d}),n.add(a);let b={style:r,group:a,colliders:l,pad:R,padMat:_,spawn:{x:o.x,z:o.z+h-3.2,heading:0},exit:{x:o.x,z:o.z+h-1.6},bounds:{minX:o.x-c,maxX:o.x+c,minZ:o.z-h,maxZ:o.z+h}};return e.set(r,b),b}let i=0;function s(r,o){i+=r,o&&(o.padMat.opacity=.5+Math.sin(i*4)*.25,o.pad.rotation.y+=r)}return{get:t,update:s}}function iE(n,e){let{add:t,boxAt:i,mat:s,W2:r,D2:o}=e,a=s(8016432),l=s(2237739),c=s(15921906),h=s(10134445,{metalness:.7,roughness:.35}),d=(x,g)=>{i(.6,.6,.6,s(9067066),x,g),t(new Kt(.6,10,8),s(4094516),x,1.15,g)},p=(x,g,f,u)=>{let S=s(u),M=new lt,_=new te(new De(2.6,.45,1).translate(0,.22,0),S),R=new te(new De(2.6,.6,.25).translate(0,.75,.38),S),b=new te(new De(.25,.65,1).translate(-1.3,.32,0),S),y=new te(new De(.25,.65,1).translate(1.3,.32,0),S);return M.add(_,R,b,y),M.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),M.position.set(x,0,g),M.rotation.y=f,e.group.add(M),Math.abs(Math.sin(f))>.5?[x-.6,x+.6,g-1.4,g+1.4]:[x-1.4,x+1.4,g-.6,g+.6]},m=x=>e.solid(x[0],x[1],x[2],x[3]);if(n==="lobby"){i(5,1.1,1.2,a,0,-2.5),i(5.2,.08,1.4,c,0,-2.5,1.1,!1);let x=s(12107462,{metalness:.85,roughness:.25,emissiveIntensity:.1});for(let g of[-6,-2,2,6])t(new st(2,3).translate(0,1.5,0),x,g,0,-o+.02,0,!1),t(new st(.4,.2),new ot({color:16747546}),g,3.3,-o+.03,0,!1);m(p(-7,2,Math.PI/2,1981066)),m(p(7,2,-Math.PI/2,1981066)),i(1.4,.4,.8,a,-5,2),i(1.4,.4,.8,a,5,2),d(-r+1,o-1),d(r-1,o-1),d(-r+1,-o+1.5),d(r-1,-o+1.5)}else if(n==="apartment"){m(p(-3,1.5,Math.PI,8141549)),i(1.8,.4,.9,a,-3,-.5),i(3,.5,.4,l,-3,-o+.4),t(new st(2.6,1.5),new _e({color:1118481,emissive:2781142,emissiveIntensity:.9}),-3,1.6,-o+.45,0,!1),i(6,.95,.8,c,6,-o+.5),i(.9,2,.8,h,r-.6,-o+.5),i(2.2,.75,1.1,a,5,-2);for(let x of[4.2,5.8])for(let g of[-3.1,-.9])i(.45,.5,.45,l,x,g);i(2.2,.55,3,s(15921906),r-1.4,3.5),i(2.2,.25,2.2,s(3718648),r-1.4,3.9,.55,!1),i(2.2,1,.2,a,r-1.4,o-3,0,!1),d(-r+1,o-1)}else if(n==="office"){let x=new _e({color:725536,emissive:3718648,emissiveIntensity:.9});for(let g of[-7,-2.5,2.5,7])for(let f of[-4.5,.5])i(3,.75,1.3,c,g,f),t(new De(.9,.55,.06).translate(0,.28,0),x,g,.8,f-.3),i(.55,.5,.55,l,g,f+1.1);i(6,.75,1.6,a,0,4.6),t(new st(5,2.2),new _e({color:16777215,emissive:16777215,emissiveIntensity:.3}),-r+.02,2,2,Math.PI/2,!1),d(r-1,o-1),d(-r+1,o-1)}else{i(10,1.05,1,s(14100029),2,-o+3),i(10.2,.08,1.2,c,2,-o+3,1.05,!1);for(let g=0;g<6;g++)t(new Mt(.28,.28,.12,12).translate(0,.75,0),s(14100029),-2+g*1.7,0,-o+4.3),i(.12,.7,.12,h,-2+g*1.7,-o+4.3,0,!1);for(let g of[-1,3])i(2.4,.75,1.1,c,-6.5,g),i(2.4,1.1,.5,s(14100029),-6.5,g-1.1),i(2.4,1.1,.5,s(14100029),-6.5,g+1.1);let x=new _e({color:16723555,emissive:16723555,emissiveIntensity:2.5});t(new De(8,.12,.06),x,2,3.4,-o+.05,0,!1),t(new De(8,.12,.06),new _e({color:2287359,emissive:2287359,emissiveIntensity:2.5}),2,3.1,-o+.05,0,!1),i(1,1.8,.7,s(2060267),r-.8,2),d(r-1,o-1)}}It();var Nl=1e5,Bs=[{id:"drive",text:"Drive to the green marker",needsTarget:!0},{id:"drift",text:"DRIFT! Hold HB (Space) while steering",needsTarget:!1},{id:"park",text:"Drive to the next marker and stop",needsTarget:!0},{id:"out",text:"Tap GET OUT (E) to leave your car",needsTarget:!1},{id:"enter",text:"Walk to the glowing door and tap ENTER",needsTarget:!0},{id:"exit",text:"Look around, then step on the green EXIT pad",needsTarget:!1}];function sE(n,e){switch(n){case"drive":return!!e.reached;case"drift":return e.driftTime>=1.5;case"park":return!!e.reached&&Math.abs(e.speed||0)<4;case"out":return!!e.onFoot;case"enter":return e.inside>=0;case"exit":return e.inside<0&&!!e.wasInside}return!1}function dm(n,e){let t={x:37,z:-37},i=null,s=1/0;for(let S of e.buildings){let M=Math.hypot(S.door.x-(t.x+30),S.door.z-t.z);M<s&&(s=M,i=S)}let r={drive:{x:37,z:-30,r:8},park:i?{x:i.door.x+i.door.nx*7,z:i.door.z+i.door.nz*7,r:9}:{x:90,z:-37,r:9},enter:i?{x:i.door.x+i.door.nx*.8,z:i.door.z+i.door.nz*.8,r:1.6}:null},o=new ot({color:4906624,transparent:!0,opacity:.85,depthWrite:!1,side:bt}),a=new ot({color:4906624,transparent:!0,opacity:.22,depthWrite:!1,side:bt,blending:Zt}),l=new lt,c=new te(new ui(.85,1,40).rotateX(-Math.PI/2),o);c.position.y=.1;let h=new te(new Mt(1,1,30,24,1,!0).translate(0,15,0),a);l.add(c,h),l.visible=!1,n.add(l);let d=!1,p=0,m=0,x=!1,g=0;function f(){let S=Bs[p];return S&&S.needsTarget?r[S.id]:null}function u(){let S=f();l.visible=!!(d&&S),S&&(l.position.set(S.x,0,S.z),l.scale.set(S.r,1,S.r))}return{building:i,start(){d=!0,p=0,m=0,x=!1,u()},stop(){d=!1,l.visible=!1},get active(){return d},get step(){return p},get total(){return Bs.length},get text(){return Bs[p]?Bs[p].text:""},target:f,update(S,M){if(!d)return null;g+=S,o.opacity=.6+Math.sin(g*4)*.25,l.rotation.y+=S*.6;let _=f(),R=_?Math.hypot(M.pos.x-_.x,M.pos.z-_.z)<_.r:!1;return Bs[p].id==="drift"&&M.drifting&&(m+=S),M.inside>=0&&(x=!0),sE(Bs[p].id,{reached:R,driftTime:m,onFoot:M.onFoot,inside:M.inside,wasInside:x,speed:M.speed})?(p++,p>=Bs.length?(d=!1,l.visible=!1,"done"):(u(),"next")):null},get driftProgress(){return Math.min(1,m/1.5)}}}It();function fm({url:n,key:e,topic:t,onStatus:i}){let s=new Map,r=null,o="off",a=0,l=null,c=null,h=0,d=!1,p=null,m="realtime:"+t;function x(S){if(o!==S&&(o=S,i))try{i(S)}catch{}}function g(S){if(r&&r.readyState===1)try{return r.send(JSON.stringify(S)),!0}catch{}return!1}function f(){if(d)return;clearTimeout(p),x("connecting");let S=n.replace(/^http/,"ws").replace(/\/$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(e)+"&vsn=1.0.0";try{r=new WebSocket(S)}catch{return u()}r.onopen=()=>{l=String(++a),g({topic:m,event:"phx_join",ref:l,join_ref:l,payload:{config:{broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},access_token:e}}),clearInterval(c),c=setInterval(()=>g({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++a)}),25e3)},r.onmessage=M=>{let _;try{_=JSON.parse(M.data)}catch{return}if(_.topic===m){if(_.event==="phx_reply"&&_.ref===l){if(_.payload&&_.payload.status==="ok")h=0,x("on");else{x("error");try{r.close()}catch{}}return}if(_.event==="phx_error"||_.event==="phx_close"){try{r.close()}catch{}return}if(_.event==="broadcast"&&_.payload){let R=s.get(_.payload.event);if(R)try{R(_.payload.payload||{})}catch(b){console.warn("mp handler",b)}}}},r.onclose=()=>{clearInterval(c),c=null,r=null,d||u()},r.onerror=()=>{}}function u(){x("connecting");let S=Math.min(15e3,1e3*Math.pow(1.7,h++));p=setTimeout(f,S)}return{connect(){d=!1,r||f()},close(){if(d=!0,clearTimeout(p),clearInterval(c),r){g({topic:m,event:"phx_leave",payload:{},ref:String(++a),join_ref:l});try{r.close()}catch{}}r=null,x("off")},on(S,M){s.set(S,M)},send(S,M){return o!=="on"?!1:g({topic:m,event:"broadcast",ref:String(++a),join_ref:l,payload:{type:"broadcast",event:S,payload:M}})},get status(){return o}}}var wu="https://fhbqxujlnqlmzvulrdxt.supabase.co",Tu="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w",pm="city-driver-v2";var rE=160,oE=1e3,aE=2500,lE=7e3,cE=16,hE=10,uE=(n,e)=>{let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t};function dE(n,e){let t=String(n||"Driver").slice(0,16),i="700 28px system-ui, -apple-system, sans-serif",s=document.createElement("canvas").getContext("2d");s.font=i;let r=Math.max(70,Math.ceil(s.measureText(t).width)+30),o=44,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d");l.fillStyle="rgba(8,12,22,0.72)",l.beginPath(),l.roundRect?l.roundRect(1,1,r-2,o-2,14):l.rect(1,1,r-2,o-2),l.fill(),l.fillStyle=e==="red"?"#ff3b4e":e==="blue"?"#3b8bff":"#4ade80",l.beginPath(),l.arc(16,o/2,5,0,Math.PI*2),l.fill(),l.font=i,l.fillStyle="#fff",l.textBaseline="middle",l.fillText(t,26,o/2+1);let c=new an(a),h=new Ar(new Rs({map:c,transparent:!0,depthTest:!1}));return h.scale.set(r/90,o/90,1),h.renderOrder=999,h}function mm(n){let e=Math.random().toString(36).slice(2,10),t=new Map,i=null,s=0,r=0,o="",a="";function l(){return t.size+1}function c(){n.onCount&&n.onCount(l())}function h(y){let T=t.get(y);T&&(T.car&&n.scene.remove(T.car),T.person&&n.scene.remove(T.person),T.tag&&T.tag.parent&&T.tag.parent.remove(T.tag),t.delete(y),c())}function d(y){let T=y.carId+"|"+y.lookSig;if(y.car&&y.carSig===T)return;y.car&&n.scene.remove(y.car);let E=n.CAR_DEFS.find(D=>D.id===y.carId)||n.CAR_DEFS[0],v=n.buildCar(E);y.look&&n.applyCarSkin(v,y.look.paint,y.look.carSkin),v.position.set(y.cx,0,y.cz),v.rotation.y=y.ch,n.scene.add(v),y.car=v,y.carSig=T}function p(y){y.person||(y.person=n.buildCharacter(y.look?y.look.outfit:{shirt:2845872,hat:"none"}),y.person.position.set(y.x,0,y.z),n.scene.add(y.person),y.outfitSig="");let T=y.look?JSON.stringify(y.look.outfit):"";y.look&&T!==y.outfitSig&&(n.setOutfit(y.person,y.look.outfit),y.outfitSig=T),n.setHeldWeapon(y.person,y.weapon||null)}function m(y){if(!y||!y.id||y.id===e)return;let T=t.get(y.id);if(!T){if(t.size>=cE)return;T={id:y.id,name:"",x:+y.x||0,z:+y.z||0,h:+y.h||0,cx:0,cz:0,ch:0,tx:0,tz:0,th:0,mode:"car",carId:"sport",look:null,lookSig:"",car:null,person:null,tag:null,tagName:"",phase:0,speed:0,b:-1,weapon:null,seen:0},t.set(y.id,T),c()}T.seen=performance.now(),T.mode=y.m==="foot"?"foot":"car",T.tx=+y.x||0,T.tz=+y.z||0,T.th=+y.h||0,T.carId=String(y.c||"sport"),T.b=Number.isInteger(y.b)?y.b:-1,T.weapon=y.w||null;let E=y.tm||null;if(E!==T.team&&(T.team=E,T.tagName=""),T.dead=y.hp===0,T.firing=!!y.f,T.mode==="foot"&&Number.isFinite(y.px)&&(T.cx=+y.px,T.cz=+y.pz,T.ch=+y.ph||0),y.L){let v=JSON.stringify(y.L);v!==T.lookSig&&(T.lookSig=v,T.look=n.unpackLook(y.L))}y.n&&(y.n!==T.tagName||!T.tag)&&(T.tag&&T.tag.parent&&T.tag.parent.remove(T.tag),T.tag=dE(y.n,T.team),T.tagName=y.n,T.name=y.n),T.placed||(T.x=T.tx,T.z=T.tz,T.h=T.th,T.mode==="car"&&(T.cx=T.tx,T.cz=T.tz,T.ch=T.th),T.placed=!0)}function x(y){if(!y||y.id===e||!Array.isArray(y.s))return;let T=t.get(y.id);if(T&&(T.recoil=.35),!(T&&n.localBuilding!==void 0&&T.b!==n.localBuilding()))for(let E of y.s.slice(0,3))Array.isArray(E)&&E.length===4&&n.remoteShot(+E[0],+E[1],+E[2],+E[3])}let g=null;function f(){for(let y of[...t.keys()])h(y)}function u(y){if(y===void 0&&(y=pm),!(y===g&&i)){if(S(),g=y,!y||!wu||!Tu){n.onStatus&&n.onStatus("off",1);return}i=fm({url:wu,key:Tu,topic:y,onStatus:T=>{n.onStatus&&n.onStatus(T,l())}}),i.on("st",m),i.on("sh",x),i.on("bye",T=>{T&&T.id&&h(T.id)}),i.on("hit",T=>{T&&T.t===e&&n.onHit&&n.onHit(T,t.get(T.id))}),i.on("kill",T=>{T&&n.onKill&&n.onKill(T)}),i.connect()}}function S(){if(i){try{i.send("bye",{id:e})}catch{}i.close(),i=null}f(),o="",a=""}window.addEventListener("pagehide",()=>{try{i&&i.send("bye",{id:e})}catch{}});function M(y,T,E){if(E=E||performance.now(),i&&i.status==="on"&&T){let z=T.mode+(T.x|0)+","+(T.z|0)+","+(T.h*10|0)+T.b+(T.w||""),I=z!==o||Math.abs(T.speed)>.3;if(E-s>=(I?rE:oE)){s=E,o=z;let L={id:e,n:T.name,m:T.mode,x:+T.x.toFixed(2),z:+T.z.toFixed(2),h:+T.h.toFixed(3),c:T.car,b:T.b,w:T.w||null,tm:T.team||null,hp:T.dead?0:1};T.mode==="foot"&&(L.px=+T.px.toFixed(2),L.pz=+T.pz.toFixed(2),L.ph=+T.ph.toFixed(3));let A=JSON.stringify(T.look);(A!==a||E-r>aE)&&(L.L=T.look,r=E,a=A),i.send("st",L)}}let v=Math.min(1,y*hE),D=T?T.b:-1;for(let[z,I]of t){if(E-I.seen>lE){h(z);continue}let L=I.x,A=I.z;if(I.x+=(I.tx-I.x)*v,I.z+=(I.tz-I.z)*v,I.h+=uE(I.h,I.th)*v,I.speed=y>0?Math.hypot(I.x-L,I.z-A)/y:0,I.mode==="car"&&(I.cx=I.x,I.cz=I.z,I.ch=I.h),d(I),I.car.position.set(I.cx,0,I.cz),I.car.rotation.y=I.ch,I.car.visible=D===-1,I.mode==="foot"?(p(I),I.person.visible=I.b===D,I.person.position.x=I.x,I.person.position.z=I.z,I.person.rotation.y=I.h,I.phase+=I.speed*y*2.1,I.recoil=Math.max(0,(I.recoil||0)-y),I.dead?(I.person.rotation.x=-Math.PI/2+.05,I.person.position.y=.12):(I.person.rotation.x=0,n.animateCharacter(I.person,I.phase,I.speed,!!I.weapon&&I.recoil>0,y))):I.person&&(I.person.visible=!1),I.tag){let U=I.mode==="foot"?I.person:I.car;U&&I.tag.parent!==U&&(I.tag.parent&&I.tag.parent.remove(I.tag),U.add(I.tag),I.tag.position.set(0,I.mode==="foot"?2.35:2.3,0))}}}function _(y){!i||i.status!=="on"||!y||!y.length||i.send("sh",{id:e,s:y.map(T=>T.map(E=>+E.toFixed(2)))})}function R(y){for(let T of t.values())y(T)}function b(y,T){i&&i.status==="on"&&i.send(y,Object.assign({id:e},T))}return{connect:u,disconnect:S,update:M,sendShots:_,send:b,each:R,myId:e,get topic(){return g},get count(){return l()},get status(){return i?i.status:"off"}}}It();function fE(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgba(110,0,0,1)";let t=(s,r)=>s+Math.random()*(r-s);e.beginPath(),e.arc(64,64,40,0,Math.PI*2),e.fill();for(let s=0;s<14;s++){let r=t(0,Math.PI*2),o=t(20,50),a=t(6,18);e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,Math.PI*2),e.fill()}let i=new an(n);return i.colorSpace=gt,i}function gm(n){let e=new Yn(n,60,{color:10158080,opacity:.95,size:.35}),t=new Yn(n,24,{color:6946816,opacity:.55,size:.8}),i=fE(),s=[];for(let c=0;c<24;c++){let h=new te(new st(1,1).rotateX(-Math.PI/2),new _e({map:i,transparent:!0,opacity:.92,roughness:.15,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));h.visible=!1,h.renderOrder=3,n.add(h),s.push({m:h,size:0,max:0,life:0})}let r=0;function o(c,h,d,p=0,m=0,x=1){let g=Math.round(6*x);for(let f=0;f<g;f++)e.emit(c+(Math.random()-.5)*.2,h+(Math.random()-.5)*.3,d+(Math.random()-.5)*.2,{vx:p*(1.5+Math.random()*3)+(Math.random()-.5)*2,vy:Math.random()*2.5-.5,vz:m*(1.5+Math.random()*3)+(Math.random()-.5)*2,life:.35+Math.random()*.3,size:.18,grow:.25});t.emit(c,h,d,{vx:p*1.2,vy:.3,vz:m*1.2,life:.4,size:.5,grow:.9})}function a(c,h,d=2.2){let p=s[r];r=(r+1)%s.length,p.m.position.set(c,.07+r*5e-4,h),p.m.rotation.y=Math.random()*Math.PI*2,p.size=.2,p.max=d,p.life=45,p.m.scale.set(.2,1,.2),p.m.material.opacity=.92,p.m.visible=!0}function l(c){e.update(c),t.update(c);for(let h of s)h.m.visible&&(h.life-=c,h.size<h.max&&(h.size=Math.min(h.max,h.size+c*.5),h.m.scale.set(h.size,1,h.size)),h.life<5&&(h.m.material.opacity=.92*Math.max(0,h.life/5)),h.life<=0&&(h.m.visible=!1))}return{hit:o,pool:a,update:l}}var xm=74,Ol=5,os=28,Fl=os*8,pE=1.5,mE=5.2,zr=(n,e)=>n+Math.random()*(e-n),Hs=n=>n[Math.random()*n.length|0];function zl(){return{shirt:Hs(is),pants:Hs([2963272,1981066,1120295,7041664,9067034,13358561]),skin:Hs(bl),hair:Hs(wl.slice(0,6)),hat:Math.random()<.25?Hs(["cap","beanie","cowboy"]):"none",hatColor:Hs(is),hairLong:Math.random()<.4}}function Au(n,e,t,i){t=(t%Fl+Fl)%Fl;let s=Math.floor(t/(os*2)),r=t-s*os*2-os;return s===0?(i.x=n+r,i.z=e-os,i.h=-Math.PI/2):s===1?(i.x=n+os,i.z=e+r,i.h=Math.PI):s===2?(i.x=n-r,i.z=e+os,i.h=Math.PI/2):(i.x=n-os,i.z=e-r,i.h=0),i}function _m(n){let e=[],t=[],i=[],s={x:0,z:0,h:0},r=n.count||16;function o(_,R){let b=[];for(let y=0;y<Ol;y++)for(let T=0;T<Ol;T++){let E=(y-(Ol-1)/2)*xm,v=(T-(Ol-1)/2)*xm;Math.hypot(E-_,v-R)<170&&!(y===0&&T===0)&&b.push({cx:E,cz:v})}return b}function a(_,R,b){let y=o(R,b),T=y.length?Hs(y):{cx:0,cz:0};_.cx=T.cx,_.cz=T.cz,_.p=zr(0,Fl),_.dir=Math.random()<.5?1:-1,_.state="walk",_.hp=40,_.flee=0,_.phase=zr(0,6),_.deadT=0,oi(_.person,zl()),_.person.rotation.set(0,0,0),_.person.visible=!0,Au(_.cx,_.cz,_.p,s),_.x=s.x,_.z=s.z,_.h=s.h}function l(){let _=Ur(zl());n.scene.add(_);let R={person:_,x:0,z:0,h:0,cx:0,cz:0,p:0,dir:1,state:"walk",hp:40,flee:0,phase:0,deadT:0,kind:"ped"};return e.push(R),R}function c(_,R=0,b=0,y="shot"){if(_.state==="dead")return;_.state="dead",_.deadT=0,_.hp=0;let T=Math.atan2(R,b);_.person.rotation.set(0,T+Math.PI,0),_.fallDir={x:R,z:b},n.blood.hit(_.x,1,_.z,R,b,y==="car"?2.5:1.5),n.blood.pool(_.x+R*.9,_.z+b*.9,zr(1.8,2.8)),_.kind==="enemy"&&_.onDeath&&_.onDeath(_),d(_.x,_.z,35)}function h(_,R,b,y){return _.state==="dead"?!1:(_.hp-=R,n.blood.hit(_.x,1.25,_.z,b,y,.8),_.hp<=0?(c(_,b,y),!0):(_.kind==="ped"&&(_.state="flee",_.flee=7),_.kind==="enemy"&&(_.aggro=!0),!1))}function d(_,R,b){for(let y of e){if(y.state==="dead")continue;let T=Math.hypot(y.x-_,y.z-R);if(T<b){y.state="flee",y.flee=6+Math.random()*3,Au(y.cx,y.cz,y.p+1,s);let E=Math.hypot(s.x-_,s.z-R);y.dir=E>T?1:-1}}}function p(_){let R=Ur(_.outfit||zl());oi(R,_.outfit||zl()),zo(R,_.weapon||"pistol"),n.scene.add(R);let b=Object.assign({kind:"enemy",person:R,x:_.x,z:_.z,h:0,hp:_.hp||60,maxHp:_.hp||60,state:"idle",aggro:!1,cool:zr(.5,1.5),phase:0,deadT:0,strafe:Math.random()<.5?1:-1,accuracy:.45,dmg:8,rate:.9,range:45},_);return b.person.position.set(b.x,0,b.z),t.push(b),b}function m(){for(let _ of t)n.scene.remove(_.person);t.length=0}function x(_,R,b){if(_.state==="dead"){_.deadT+=R,g(_,R);return}let y=b.x-_.x,T=b.z-_.z,E=Math.hypot(y,T);(E<_.range||_.aggro)&&(_.aggro=!0);let v=0;if(_.aggro&&b.alive&&!b.hidden){_.h=Math.atan2(-y,-T);let D=_.boss?9:13,z=0,I=0;E>D+3?(z=y/E,I=T/E):E<D-3&&(z=-y/E,I=-T/E),z+=-T/E*_.strafe*.6,I+=y/E*_.strafe*.6;let L=Math.hypot(z,I)||1;v=_.boss?4.2:3;let A=n.collide(_.x+z/L*v*R,_.z+I/L*v*R,.45);if(Math.abs(A.x-_.x)<1e-4&&Math.abs(A.z-_.z)<1e-4&&(_.strafe*=-1),_.x=A.x,_.z=A.z,Math.random()<R*.4&&(_.strafe*=-1),_.cool-=R,_.cool<=0&&E<_.range*1.2){_.cool=_.rate*zr(.8,1.3);let U=Math.max(.08,_.accuracy*(1-E/(_.range*1.6))*(b.inCar?.7:1)),H=Math.random()<U,N=_.x-Math.sin(_.h)*.9,k=_.z-Math.cos(_.h)*.9,X=H?0:zr(1.2,3)*(Math.random()<.5?-1:1),q=b.x+-T/E*X,ie=b.z+y/E*X;n.shoot(N,k,q+(q-N)/E*(H?0:12),ie+(ie-k)/E*(H?0:12)),Il(_.person),n.audio&&n.audio.shot&&n.audio.shot(_.weapon==="glock"?"pistol":_.weapon),H&&n.onPlayerHit(_.dmg,_)}}_.phase+=v*R*2.1,_.person.position.set(_.x,0,_.z),_.person.rotation.y=_.h,zs(_.person,_.phase,v,_.aggro,R)}function g(_,R){let b=Math.min(1,_.deadT/.35);if(_.person.rotation.x=-b*(Math.PI/2-.05),_.person.position.y=.12*b,_.deadT>.4){let y=_.person.userData;y.legs[0].rotation.x=.1,y.legs[1].rotation.x=-.15,y.arms[0].rotation.z=.9,y.arms[1].rotation.z=-.9}}function f(_,R){for(;e.length<r;)a(l(),R.x,R.z);for(let b of e){let y=Math.hypot(b.x-R.x,b.z-R.z)>190;if(b.state==="dead"){b.deadT+=_,g(b,_),(b.deadT>30||y&&b.deadT>3)&&a(b,R.x,R.z);continue}if(y){a(b,R.x,R.z);continue}let T=pE;b.state==="flee"&&(b.flee-=_,T=mE,b.flee<=0&&(b.state="walk")),b.p+=b.dir*T*_,Au(b.cx,b.cz,b.p,s),b.x=s.x,b.z=s.z,b.h=s.h+(b.dir<0?Math.PI:0),b.phase+=T*_*2.1,b.person.position.set(b.x,0,b.z),b.person.rotation.y=b.h,zs(b.person,b.phase,T,!1,_)}for(let b of t)x(b,_,R);i.length=0;for(let b of e)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.42,ref:b});for(let b of t)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.45,ref:b})}function u(_,R,b,y){if(Math.abs(y)<5)return 0;let T=-Math.sin(b),E=-Math.cos(b),v=0;for(let D of[e,t])for(let z of D)if(z.state!=="dead"&&(Math.hypot(z.x-_-T*1.2,z.z-R-E*1.2)<1.6||Math.hypot(z.x-_,z.z-R)<1.3)){let I=Math.sign(y);z.kind==="enemy"&&(z.hp=0),c(z,T*I,E*I,"car"),v++}return v}function S(_){for(r=_;e.length>_;){let R=e.pop();n.scene.remove(R.person)}}function M(_){for(let R of e)R.person.visible=_;for(let R of t)R.person.visible=_}return{update:f,damage:h,scare:d,spawnEnemy:p,clearEnemies:m,carHits:u,setCount:S,setVisible:M,get hitList(){return i},get enemies(){return t},get peds(){return e}}}It();var gE=14,Gs=3.5,Bl=gE/2+2.2,Ru=16;function xE(n,e){let t=(e%Ru+Ru)%Ru;return n==="z"?t<6?"green":t<8?"yellow":"red":t<8?"red":t<14?"green":"yellow"}var _E=(n,e)=>(n+e)%2*4;function Cu(n,e,t,i){return n==="z"?{x:e+(t<0?Gs:-Gs),z:i,h:t<0?0:Math.PI}:{x:i,z:e+(t>0?Gs:-Gs),h:t>0?-Math.PI/2:Math.PI/2}}var ks=new ut,Ho=new Pn,Fr=new F,Pu=new F(1,1,1),vm=new F(0,1,0),Hl=new Pe(1710618),vE=new Pe(16722458),yE=new Pe(16756768),ME=new Pe(2883434);function ym(n){let e=n.lines.slice().sort((A,U)=>A-U),t=e.length,i=0,s=[];for(let A=0;A<t;A++)for(let U=0;U<t;U++){let H=e[A],N=e[U],k=Bl-.6;s.push({ix:A,iz:U,axis:"z",x:H+k,z:N+k,rot:0}),s.push({ix:A,iz:U,axis:"z",x:H-k,z:N-k,rot:Math.PI}),s.push({ix:A,iz:U,axis:"x",x:H-k,z:N+k,rot:-Math.PI/2}),s.push({ix:A,iz:U,axis:"x",x:H+k,z:N-k,rot:Math.PI/2})}let r=s.length,o=new Mt(.09,.11,4.2,6).translate(0,2.1,0),a=new _e({color:3093563,metalness:.6,roughness:.5}),l=new De(.45,1.25,.32).translate(0,4.6,0),c=new _e({color:1909030,roughness:.6,metalness:.3}),h=new Rr(.15,12),d=new Lt(o,a,r),p=new Lt(l,c,r),m=new ot({color:16777215,toneMapped:!1}),x=[0,1,2].map(()=>new Lt(h,m,r));p.castShadow=!0,s.forEach((A,U)=>{Ho.setFromAxisAngle(vm,A.rot),Fr.set(A.x,0,A.z),ks.compose(Fr,Ho,Pu),d.setMatrixAt(U,ks),p.setMatrixAt(U,ks);let H=Math.sin(A.rot),N=Math.cos(A.rot);for(let k=0;k<3;k++)Fr.set(A.x+H*.17,5-k*.38,A.z+N*.17),ks.compose(Fr,Ho,Pu),x[k].setMatrixAt(U,ks),x[k].setColorAt(U,Hl)});for(let A of[d,p,...x])A.instanceMatrix.needsUpdate=!0,n.scene.add(A);{let A=new st(Gs*2-.6,.45).rotateX(-Math.PI/2),U=new Lt(A,new _e({color:15922422,roughness:.7}),r);s.forEach((H,N)=>{let k=e[H.ix],X=e[H.iz],q,ie,G;if(H.axis==="z"){let K=H.rot===0?1:-1;q=k+K*Gs,ie=X+K*Bl,G=0}else{let K=H.rot<0?-1:1;q=k+K*Bl,ie=X-K*Gs,G=Math.PI/2}Ho.setFromAxisAngle(vm,G),Fr.set(q,.065,ie),ks.compose(Fr,Ho,Pu),U.setMatrixAt(N,ks)}),U.instanceMatrix.needsUpdate=!0,n.scene.add(U)}let g=new Array(r).fill("");function f(A,U,H){return xE(H,i+_E(A,U))}function u(){let A=!1;for(let U=0;U<r;U++){let H=s[U],N=f(H.ix,H.iz,H.axis);N!==g[U]&&(g[U]=N,A=!0,x[0].setColorAt(U,N==="red"?vE:Hl),x[1].setColorAt(U,N==="yellow"?yE:Hl),x[2].setColorAt(U,N==="green"?ME:Hl))}if(A)for(let U of x)U.instanceColor.needsUpdate=!0}let S=[],M=12,_=A=>{let U=0,H=1/0;for(let N=0;N<t;N++){let k=Math.abs(e[N]-A);k<H&&(H=k,U=N)}return U};function R(){let A=n.CAR_DEFS,U=A[Math.random()*A.length|0],H=n.buildCar(U),N=U.colors[Math.random()*U.colors.length|0];return n.applyCarSkin(H,N,null),n.scene.add(H),{group:H,def:U,axis:"z",li:0,dir:1,s:0,speed:0,cruise:0,x:0,z:0,h:0,honk:0,wait:0}}function b(A,U,H,N){for(let X=0;X<20;X++){A.axis=Math.random()<.5?"z":"x",A.li=Math.random()*t|0,A.dir=Math.random()<.5?1:-1,A.s=e[0]+Math.random()*(e[t-1]-e[0]);let q=Cu(A.axis,e[A.li],A.dir,A.s),ie=Math.hypot(q.x-U,q.z-H);if(N?ie<150:ie>70&&ie<170){A.x=q.x,A.z=q.z,A.h=q.h;break}}let k=Cu(A.axis,e[A.li],A.dir,A.s);A.x=k.x,A.z=k.z,A.h=k.h,A.cruise=9+Math.random()*5,A.speed=A.cruise*.6,A.group.position.set(A.x,0,A.z),A.group.rotation.y=A.h}function y(A){if(A.dir>0){for(let U=0;U<t;U++)if(e[U]>A.s+.3)return U}else for(let U=t-1;U>=0;U--)if(e[U]<A.s-.3)return U;return-1}function T(A,U){let H=Math.random(),N=A.dir>0&&U===t-1||A.dir<0&&U===0,k=H<.55&&!N?"straight":H<.82?"right":"left",X,q;if(k==="straight")return;A.axis==="z"?(X="x",q=A.dir<0==(k==="right")?1:-1):(X="z",q=A.dir>0==(k==="right")?1:-1);let ie=e[A.li],G=U;(q>0&&ie>=e[t-1]-1||q<0&&ie<=e[0]+1)&&(q=-q),A.axis=X,A.li=G,A.dir=q,A.s=ie}function E(A,U,H){for(i+=A,u();S.length<M;){let N=R();b(N,U.x,U.z,S.length<4),S.push(N)}for(let N of S){if(Math.hypot(N.x-U.x,N.z-U.z)>230){b(N,U.x,U.z,!1);continue}let k=N.cruise,X=y(N);if(X>=0){let pe=e[X],Ue=(pe-N.s)*N.dir,Fe=Ue-Bl,Te=N.axis==="z"?N.li:X,He=N.axis==="z"?X:N.li,B=f(Te,He,N.axis);Fe>-.5&&(B==="red"||B==="yellow"&&Fe>5)&&(k=Math.min(k,Math.max(0,Fe-.3)*1.1)),Ue<=.05&&(N.s=pe,T(N,X))}else N.dir=-N.dir;for(let pe of S){if(pe===N||pe.axis!==N.axis||pe.li!==N.li||pe.dir!==N.dir)continue;let Ue=(pe.s-N.s)*N.dir;Ue>0&&Ue<14&&(k=Math.min(k,Math.max(0,(Ue-6.5)*1.3)))}if(H){let pe=-Math.sin(N.h),Ue=-Math.cos(N.h),Fe=H.x-N.x,Te=H.z-N.z,He=Fe*pe+Te*Ue,B=Math.abs(Fe*Ue-Te*pe);He>0&&He<13&&B<2.6?(k=Math.min(k,Math.max(0,(He-5.5)*1.3)),N.wait+=A):N.wait=0}let q=k>N.speed?4:9;N.speed+=Math.sign(k-N.speed)*Math.min(Math.abs(k-N.speed),q*A),N.s+=N.dir*N.speed*A;let ie=Cu(N.axis,e[N.li],N.dir,N.s),G=Math.min(1,A*6);N.x+=(ie.x-N.x)*G,N.z+=(ie.z-N.z)*G;let K=ie.h-N.h;K=Math.atan2(Math.sin(K),Math.cos(K)),N.h+=K*Math.min(1,A*5),N.group.position.set(N.x,0,N.z),N.group.rotation.y=N.h;let me=N.speed*A*2.6;for(let pe of N.group.userData.wheels)pe.rotation.x+=me;let ye=N.group.userData.flashers;if(ye){let pe=(i*6|0)%2;ye[0].emissiveIntensity=pe?4:.25,ye[1].emissiveIntensity=pe?.25:4}}}function v(A,U){let H=null;for(let N of S){let k=-Math.sin(N.h),X=-Math.cos(N.h);for(let q of[-1.3,0,1.3]){let ie=N.x+k*q,G=N.z+X*q,K=1+U,me=A.x-ie,ye=A.z-G,pe=Math.hypot(me,ye);pe<K&&pe>1e-6&&(A.x=ie+me/pe*K,A.z=G+ye/pe*K,H=N)}}return H&&(H.speed*=.3),H}let D=[];function z(){D.length=0;for(let A of S){let U=-Math.sin(A.h),H=-Math.cos(A.h);D.push({x:A.x+U*.9,z:A.z+H*.9,r:1,ref:{kind:"car",car:A}}),D.push({x:A.x-U*.9,z:A.z-H*.9,r:1,ref:{kind:"car",car:A}})}return D}function I(A){for(M=A;S.length>A;){let U=S.pop();n.scene.remove(U.group)}}function L(A){for(let U of S)U.group.visible=A}return{update:E,collide:v,hitList:z,setCount:I,setVisible:L,stateAt:f,get cars(){return S}}}It();var Tn=500,Iu=5e6,Mm=74,Sm=5,Em=3.5,bm=[-185,-111,-37,37,111,185],kl={name:"EMERALD",outfit:{shirt:1023320,pants:1120295,skin:9263675,hair:1839885,hairLong:!0,hat:"none",hatColor:1023320},weapon:"glock",hp:900};function SE(n){let e=n*2654435761>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Br(n){let e=n()<.5,t=bm[n()*bm.length|0],i=-175+n()*350,s=n()<.5?1:-1;return e?{x:t+s*Em,z:i}:{x:i,z:t+s*Em}}function wm(n){let e=n()*Sm|0,t=n()*Sm|0,i=(e-2)*Mm,s=(t-2)*Mm,r=-24+n()*48,o=n()*4|0,a=28;return o===0?{x:i+r,z:s-a}:o===1?{x:i+a,z:s+r}:o===2?{x:i-r,z:s+a}:{x:i-a,z:s-r}}var as=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),Tm=["Main St Kings","Exchange Crew","River Rats","Portage Posse","North End Wolves","Osborne Outlaws","St. Boniface Snakes","Pembina Pirates"],Am=["a mystery briefcase","hot pizzas","a stolen painting","a box of cash","a burner phone","VIP documents","a suspicious duffel bag","concert tickets"];function Du(n){if(n=Math.max(1,Math.min(Tn,n|0)),n===Tn)return{n,type:"boss",title:"EMERALD",reward:Iu,desc:"Emerald runs the whole city and she's sitting on millions. Fight through her guards at the compound and take her down. Everything she has is yours.",points:[{x:-148,z:-148}],guards:10,timeLimit:0};let e=SE(n*7919+13),t=n/Tn,s=["deliver","race","collect","hit"][(n+(e()*4|0))%4];n%50===0&&(s="hit");let r=Tm[e()*Tm.length|0];if(s==="deliver"){let l=Br(e),c=Br(e);for(let d=0;d<6&&as(l,c)<150;d++)c=Br(e);let h=as(l,c);return{n,type:s,title:"Special Delivery",reward:600+n*30,desc:`Pick up ${Am[e()*Am.length|0]} and get it across town before the clock runs out.`,points:[l,c],timeLimit:Math.round(25+h/(11+t*6))}}if(s==="race"){let l=[],c=Br(e);l.push(c);let h=4+Math.min(4,n/80|0),d=0;for(;l.length<h;){let p=Br(e);for(let m=0;m<6&&as(p,c)<90;m++)p=Br(e);d+=as(p,c),l.push(p),c=p}return{n,type:s,title:"Checkpoint Race",reward:800+n*35,desc:`Hit all ${h} checkpoints in order before time runs out.`,points:l,timeLimit:Math.round(20+d/(13+t*8))}}if(s==="collect"){let l=wm(e),c=[],h=3+Math.min(5,n/70|0);for(let d=0;d<h;d++){let p=e()*Math.PI*2,m=20+e()*60;c.push({x:Math.max(-180,Math.min(180,l.x+Math.cos(p)*m)),z:Math.max(-180,Math.min(180,l.z+Math.sin(p)*m))})}return{n,type:s,title:"Cash Grab",reward:500+n*30,desc:`The ${r} dropped ${h} bags of cash around town. Grab them all before they come back.`,points:c,timeLimit:Math.round(60+h*18-t*30)}}let o=n%50===0,a=Math.min(9,1+(n/45|0)+(o?2:0));return{n,type:"hit",title:o?"Take Down the Boss":"Gang Hit",reward:(o?5e3:1e3)+n*45,desc:o?`The leader of the ${r} is holed up with his crew. End it.`:`${a} members of the ${r} are causing trouble. Take them out.`,points:[wm(e)],enemies:a,leader:o,timeLimit:0,tier:t}}function Lu(n,e){let t=n/Tn;return{hp:Math.round((45+n*.35)*(e?4:1)),accuracy:Math.min(.62,.22+t*.4),dmg:Math.round(6+t*10),rate:Math.max(.35,1-t*.5),weapon:e?"deagle":["pistol","glock","smg","shotgun","ak"][Math.min(4,n/100|0)]}}function Rm(n){let e=new ot({color:16765503,transparent:!0,opacity:.85,depthWrite:!1,side:bt}),t=new ot({color:16765503,transparent:!0,opacity:.2,depthWrite:!1,side:bt,blending:Zt}),i=new lt;i.add(new te(new ui(.85,1,40).rotateX(-Math.PI/2).translate(0,.1,0),e)),i.add(new te(new Mt(1,1,30,24,1,!0).translate(0,15,0),t)),i.visible=!1,n.scene.add(i);let s=new _e({color:4156202,roughness:.8,emissive:2772250,emissiveIntensity:.4}),r=[],o=null,a=0,l=0,c=0,h=[],d=null,p=!1,m=0,x=0;function g(){for(let y of r)n.scene.remove(y);r.length=0}function f(y,T){if(!y){i.visible=!1;return}i.visible=!0,i.position.set(y.x,0,y.z),i.scale.set(T,1,T)}function u(y){if(S(),o=Du(y),a=0,l=0,c=o.timeLimit,p=!1,m=0,h=[],d=null,o.type==="deliver"||o.type==="race")f(o.points[0],o.type==="race"?7:6);else if(o.type==="collect"){f(null);for(let T of o.points){let E=new lt;E.add(new te(new Kt(.45,10,8).scale(1,.8,1).translate(0,.4,0),s));let v=new te(new st(.5,.5),new ot({color:4906624,transparent:!0,opacity:.9}));v.position.y=1.3,E.add(v),E.position.set(T.x,0,T.z),E.userData={p:T,got:!1,sign:v},n.scene.add(E),r.push(E)}}else f(o.points[0],o.type==="boss"?12:9);return o}function S(){o=null,f(null),g(),n.people.clearEnemies(),h=[],d=null}function M(){p=!0;let y=o.points[0];if(o.type==="boss"){let E=Lu(480,!1);for(let v=0;v<o.guards;v++){let D=v/o.guards*Math.PI*2;h.push(n.people.spawnEnemy(Object.assign({},E,{x:y.x+Math.cos(D)*14,z:y.z+Math.sin(D)*14,weapon:v%2?"ak":"smg",hp:160})))}d=n.people.spawnEnemy({x:y.x,z:y.z,outfit:kl.outfit,weapon:kl.weapon,hp:kl.hp,accuracy:.55,dmg:11,rate:.32,range:60,boss:!0,name:kl.name}),h.push(d),n.toast('\u{1F451} EMERALD: "You came all this way to die?"',3500);return}let T=Lu(o.n,!1);for(let E=0;E<o.enemies;E++){let v=E/o.enemies*Math.PI*2,D=o.leader&&E===0,z=D?Lu(o.n,!0):T;h.push(n.people.spawnEnemy(Object.assign({},z,{x:y.x+Math.cos(v)*6,z:y.z+Math.sin(v)*6,boss:D})))}}function _(y,T){if(!o)return null;x+=y,l+=y,e.opacity=.6+Math.sin(x*4)*.25,i.rotation.y+=y*.6;for(let v of r)v.rotation.y+=y*1.5,v.userData.sign.lookAt(T.cam||i.position);if(o.timeLimit&&(c=o.timeLimit-l,c<=0))return"fail";let E=T.pos;if(o.type==="deliver"){let v=o.points[a];if(as(E,v)<6.5)return a++,n.beep(880,.08),a>=o.points.length?"pass":(f(o.points[a],6),"next")}else if(o.type==="race"){let v=o.points[a];if(as(E,v)<7.5)return a++,n.beep(990,.06),a>=o.points.length?"pass":(f(o.points[a],7),"next")}else if(o.type==="collect"){for(let v of r)if(!v.userData.got&&as(E,v.userData.p)<2.6)return v.userData.got=!0,v.visible=!1,m++,n.beep(1200,.05),m>=r.length?"pass":"next"}else if(!p&&as(E,o.points[0])<75&&M(),p){if(f(null),o.type==="boss"){if(d&&d.state==="dead")return"pass"}else if(h.every(v=>v.state==="dead"))return"pass"}return null}function R(){if(!o)return"";if(o.type==="deliver")return a===0?"Pick up the package":"Deliver the package";if(o.type==="race")return`Checkpoint ${a+1}/${o.points.length}`;if(o.type==="collect")return`Cash bags ${m}/${r.length}`;if(!p)return o.type==="boss"?"Go to Emerald's compound":"Go to the gang hangout";let y=h.filter(T=>T.state!=="dead").length;return o.type==="boss"?d.state==="dead"?"Emerald is down":`Kill Emerald (${y-(d.state==="dead"?0:1)} guards left)`:`Enemies left: ${y}`}function b(y){if(y=y||{x:0,z:0},!o)return null;if(o.type==="deliver"||o.type==="race")return o.points[a]||null;if(o.type==="collect"){let E=null,v=1/0;for(let D of r){if(D.userData.got)continue;let z=Math.hypot(D.position.x-y.x,D.position.z-y.z);z<v&&(v=z,E=D.userData.p)}return E}if(!p)return o.points[0];let T=h.find(E=>E.state!=="dead"&&(o.type!=="boss"||E===d))||h.find(E=>E.state!=="dead");return T?{x:T.x,z:T.z}:null}return{start:u,stop:S,update:_,objective:R,target:b,get mission(){return o},get active(){return!!o},get timeLeft(){return o&&o.timeLimit?Math.max(0,c):null},get boss(){return d}}}var{CAR_DEFS:pi,buildCar:$l,effectiveStats:t0,applyCarSkin:Jl}=lu,Q=n=>document.getElementById(n),cn,wt,Gt,St,Rn=null,$n=null,qo=null,de=null,At=null,Le=null,Jn=null,n0=null,Dt=null,Ce=null,Xt="boot",_n=!1,Bn=!1,sc="menu",Ot={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},$u=null,ct=null,Ju=null,lc=null,us=!1,Kl="menu",Go=.6,Tt=null,Jr=!1,Kr=null,ai=null,zi=null,km=null,ds=100,mi=!1,Gu=0,Ql=0,cs={x:0,z:0,alive:!0,hidden:!1,inCar:!0},zt=null,Ku=!1,cc=Do(),Hn=null,xi=null,i0=null,Yr=0,Vs=null,Yo=null,rc=null,li=null,jl=null,Vu=0,Wu=1,Dn=null,at=!1,Ae=null,et=null,Zr=null,fs=null,Qu=null,ec=null,Ws=!1,hs=0,Xo=0,Wr=null,Xr=null,Gm="",Cn={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},Yl={x:0,z:0},kt=new F,In=new F,xn=new F,$r={x:0,z:0},Vo={x:0,z:0,hitX:!1,hitZ:!1},Ht={name:"",mode:"car",x:0,z:0,h:0,speed:0,car:"sport",look:null,px:0,pz:0,ph:0,b:-1,w:null},_i=null,Zl={def:null,stats:null,group:null},Xs=[],Xu=[],qu=[],vi=62,tc=0,Vm=0;function Et(n,e=2200){let t=Q("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(Vm),Vm=setTimeout(()=>t.classList.add("hidden"),e)}function Fi(){let n=Ce.cash.toLocaleString();Q("cash-val").textContent=n,Q("garage-cash").textContent=n}function qs(n){Ce.cash=Math.max(0,Ce.cash+Math.round(n)),ln(Ce),Fi()}function s0(){$n=pi.find(n=>n.id===Ce.currentCar)||pi[0],Rn&&wt.remove(Rn),Rn=$l($n),Jl(Rn,Ce.paint[$n.id],Ns(Ce,$n.id)),wt.add(Rn),_i=null,qo=t0($n,Ce.upgrades[$n.id]||{}),Xs=(Rn.userData.wheels||[]).slice(),Xu=Xs.filter(n=>n.position.z<0),qu=Rn.userData.brakeMats||[],Q("menu-car-name").textContent=$n.name}function hc(){let n=de.heading;xn.set(-Math.sin(n),0,-Math.cos(n)),kt.set(de.pos.x-xn.x*9,4,de.pos.z-xn.z*9),Gt.position.copy(kt)}function ju(){let n=St.spawn;de.pos.x=n.x,de.pos.z=n.z,de.heading=n.heading||0,cc=Do(),hc(),Zo(0)}function qr(){let n=de.pos.x,e=de.pos.z,t=de.heading;s0(),de.reset(qo),de.pos.x=n,de.pos.z=e,de.heading=t,Zo(0)}var gi=new F;function Zo(n){Rn.position.set(de.pos.x,0,de.pos.z),Rn.rotation.y=de.heading;let e=Rn.userData.flashers;if(e){let s=(performance.now()/170|0)%2;e[0].emissiveIntensity=s?4:.25,e[1].emissiveIntensity=s?.25:4}let t=Ot.speed*n*2.4;for(let s=0;s<Xs.length;s++)Xs[s].rotation.x+=t;for(let s=0;s<Xu.length;s++)Xu[s].rotation.y=Ot.steer*.45;let i=At&&At.input.throttle<0;if(Rn.userData.setBrake)Rn.userData.setBrake(i);else for(let s=0;s<qu.length;s++)qu[s].emissiveIntensity=i?4.5:1.8;if(li){let s=de.heading;gi.set(-Math.sin(s),0,-Math.cos(s)),li.position.set(de.pos.x+gi.x*1.8,1.1,de.pos.z+gi.z*1.8),jl.position.set(de.pos.x+gi.x*22,.4,de.pos.z+gi.z*22)}}var Wo=new F;function AE(n,e){let t=Xs[n];return e.setFromMatrixPosition(t.matrixWorld),e}var Bu=0;function RE(n){if(!Vs||Xt!=="freeroam"||_n||Bn)return;Rn.updateMatrixWorld();let e=Xs.length;if(Ot.drifting&&Wu>.3)for(let i=0;i<e;i++)Xs[i].position.z<0||(AE(i,Wo),Math.random()<.85*Wu&&Vs.emit(Wo.x+(Math.random()-.5)*.4,.35,Wo.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&rc.add(Wo.x,Wo.z,de.heading));if(Bu+=n,(At&&At.input.throttle||0)>.4&&Bu>.09){Bu=0;let i=de.heading;gi.set(-Math.sin(i),0,-Math.cos(i));let s=Math.cos(i),r=-Math.sin(i);for(let o of[-.45,.45]){let a=de.pos.x-gi.x*2.2+s*o,l=de.pos.z-gi.z*2.2+r*o;Yo.emit(a,.32,l,{vx:-gi.x*2,vy:.8,vz:-gi.z*2,life:.5,size:.55,grow:1.6})}}Vs.update(n),Yo.update(n)}function CE(n,e){let t=ed(n,e,1.15);if(zi&&!ct&&zi.collide(t,1.15)&&de){let s=Math.hypot(de.vel.x,de.vel.z);de.vel.x*=.55,de.vel.z*=.55,s>8&&Le&&Le.beep(90,.08)}return t}function ed(n,e,t){let i=n,s=e,r=!1,o=!1,a=Ju||St.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(i+t<c.minX||i-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(i,c.maxX)),d=Math.max(c.minZ,Math.min(s,c.maxZ)),p=i-h,m=s-d,x=p*p+m*m;if(!(x>=t*t))if(x>1e-8){let g=Math.sqrt(x),f=(t-g)/g,u=p*f,S=m*f;i+=u,s+=S,Math.abs(u)>Math.abs(S)?r=!0:o=!0}else{let g=i-c.minX,f=c.maxX-i,u=s-c.minZ,S=c.maxZ-s,M=Math.min(g,f,u,S);M===g?(i=c.minX-t,r=!0):M===f?(i=c.maxX+t,r=!0):M===u?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return Vo.x=i,Vo.z=s,Vo.hitX=r,Vo.hitZ=o,Vo}function td(n,e,t){let i=ed(n,e,t);if(ct)return i;zi&&zi.collide(i,t);let s=de.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=de.pos.x+r*a,c=de.pos.z+o*a,h=1+t,d=i.x-l,p=i.z-c,m=Math.hypot(d,p);m<h&&m>1e-6&&(i.x=l+d/m*h,i.z=c+p/m*h)}return i}function Bi(){if(!et)return;oi(et,h0()),zo(et,An().equipped);let n=An().equipped&&rs(An().equipped);Q("weapon-name").textContent=n?n.name.toUpperCase():"UNARMED";let e=Q("weapon-ammo");e.textContent=n?String(An().ammo[n.id]|0):An().weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!n)}function nd(){for(let n of["speedo","gear-hud","nitro-bar"])Q(n).classList.toggle("hidden",at);Q("weapon-hud").classList.toggle("hidden",!at)}function id(){if(Math.abs(Ot.speed)>4){Et("Slow down to get out");return}let n=yu(de.pos.x,de.pos.z,de.heading),e=td(n.x,n.z,.45);Ae.reset(e.x,e.z,de.heading),de.vel.x=0,de.vel.z=0,de.speed=0,Ot.speed=0,Ot.drifting=!1,Ot.nitro=!1,Ot.steer=0,cc=Do(),at=!0,et.visible=!0,et.position.set(Ae.pos.x,0,Ae.pos.z),Bi(),At.setMode("foot"),nd(),Le.engine(0,0),Le.skid(!1),Le.beep(420,.06)}function r0(){at&&(at=!1,et.visible=!1,hs=0,At&&At.setMode("drive"),nd(),cc=Do(),Le&&Le.beep(520,.06),Xo&&(ln(Ce),Xo=0))}function PE(n){let e=Ae.heading,t=Ae.pos.x,i=Ae.pos.z;xn.set(-Math.sin(e),0,-Math.cos(e));let s=hs>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;if(In.set(t-xn.x*r+a*c,o,i-xn.z*r+l*c),ct){let d=ct.room.bounds,p=.45;In.x=Math.max(d.minX+p,Math.min(d.maxX-p,In.x)),In.z=Math.max(d.minZ+p,Math.min(d.maxZ-p,In.z)),In.y=Math.min(In.y,3.9)}let h=1-Math.exp(-n*7);kt.x+=(In.x-kt.x)*h,kt.y+=(In.y-kt.y)*h,kt.z+=(In.z-kt.z)*h,Gt.position.copy(kt),Gt.lookAt(t+xn.x*5+a*c,1.45,i+xn.z*5+l*c),Math.abs(60-vi)>.25&&(vi+=(60-vi)*Math.min(1,n*4),Gt.fov=vi,Gt.updateProjectionMatrix())}function LE(n){if(Ae.update(At.input,n,td),et.position.x=Ae.pos.x,et.position.z=Ae.pos.z,et.rotation.y=Ae.heading,At.consumeCycle()){let i=vu(An());ln(Ce),Bi(),An().weapons.length?Et(i?rs(i).name:"Holstered",1200):Et("No guns yet \u2014 visit LOCK & LOAD",1600)}Cn.pos.x=Ae.pos.x,Cn.pos.z=Ae.pos.z,Cn.heading=Ae.heading;let e=At.consumeFireEdge();e&&!An().equipped&&An().weapons.length&&(vu(An()),Bi()),Zr.update(n,Cn,At.input.fire,e).fired&&(ai&&!ct&&ai.scare(Ae.pos.x,Ae.pos.z,45),Il(et),hs=.9,Xo++,Q("weapon-ammo").textContent=String(An().ammo[An().equipped]|0)),At.input.fire&&An().equipped&&(hs=Math.max(hs,.3)),hs=Math.max(0,hs-n),zs(et,Ae.phase,Ae.speed,hs>0&&!!An().equipped,n),PE(n),Xo&&tc%120===0&&(ln(Ce),Xo=0)}function hn(n,e,t){if(Wr=n,Xr=e,t!==Gm){Gm=t;let i=Q("btn-action");i.textContent=t||"",i.classList.toggle("hidden",!t)}}function IE(n,e){let t=null,i=1.5;for(let s of St.buildings){if(Dr(n,e,s.door.x+s.door.nx*.5,s.door.z+s.door.nz*.5)<2.2)return s;let o=Math.max(s.minX,Math.min(n,s.maxX)),a=Math.max(s.minZ,Math.min(e,s.maxZ)),l=Math.hypot(n-o,e-a);l<i&&(i=l,t=s)}return t}function sd(){let n=Ae.heading;if(xn.set(-Math.sin(n),0,-Math.cos(n)),kt.set(Ae.pos.x-xn.x*4.6,2.6,Ae.pos.z-xn.z*4.6),ct){let e=ct.room.bounds,t=.45;kt.x=Math.max(e.minX+t,Math.min(e.maxX-t,kt.x)),kt.z=Math.max(e.minZ+t,Math.min(e.maxZ-t,kt.z))}Gt.position.copy(kt)}function o0(n){let e=$u.get(hm(n.id)),t=Dr(Ae.pos.x,Ae.pos.z,n.door.x,n.door.z)<2.6,i,s,r,o;if(t)r=n.door.nx,o=n.door.nz,i=n.door.x+r*1.4,s=n.door.z+o*1.4;else{let a=Math.max(n.minX,Math.min(Ae.pos.x,n.maxX)),l=Math.max(n.minZ,Math.min(Ae.pos.z,n.maxZ)),c=Ae.pos.x-a,h=Ae.pos.z-l,d=Math.hypot(c,h)||1;r=c/d,o=h/d,i=a+r*1.4,s=l+o*1.4}ct={b:n,room:e,back:{x:i,z:s,heading:Math.atan2(-r,-o)}},Ju=e.colliders,Cn.colliders=e.colliders,Cn.targets=[],Ae.reset(e.spawn.x,e.spawn.z,e.spawn.heading),et.position.set(Ae.pos.x,0,Ae.pos.z),sd(),hn(null,null,""),Le.beep(640,.07),Et("\u{1F3E2} Inside: "+cm[e.style]+" \u2014 EXIT pad is behind you",2200)}function uc(){if(!ct)return;let n=ct.back;ct=null,Ju=null,Cn.colliders=St.colliders,Cn.targets=fs.targets;let e=td(n.x,n.z,.45);Ae.reset(e.x,e.z,n.heading),et.position.set(Ae.pos.x,0,Ae.pos.z),sd(),hn(null,null,""),Le.beep(520,.07)}function Wm(){if(at){if(ct){let i=Dr(Ae.pos.x,Ae.pos.z,ct.room.exit.x,ct.room.exit.z);if(i<.8){uc();return}return i<2.4?hn("exit",null,"\u{1F6AA} EXIT BUILDING"):hn(null,null,"")}let n=null,e=2.4;for(let i of fs.stores){let s=Dr(Ae.pos.x,Ae.pos.z,i.door.x,i.door.z);s<e&&(e=s,n=i)}if(n)return hn("shop",n,(n.type==="garage"?"\u{1F527} ":n.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+n.name);if(Dr(Ae.pos.x,Ae.pos.z,de.pos.x,de.pos.z)<4.2)return hn("in",null,"\u{1F697} GET IN");let t=IE(Ae.pos.x,Ae.pos.z);return t?hn("enter",t,"\u{1F3E2} ENTER BUILDING"):hn(null,null,"")}if(Math.abs(Ot.speed)<4)return hn("out",null,"\u{1F6AA} GET OUT");hn(null,null,"")}function Xm(){Wr==="out"?id():Wr==="in"?r0():Wr==="enter"&&Xr?o0(Xr):Wr==="exit"?uc():Wr==="shop"&&Xr&&(Xr.type==="garage"?ac("play"):DE(Xr))}function DE(n){Ws=!0,hn(null,null,""),Le.beep(700,.06),Qu.open(n)}function a0(){Ws=!1,Qu.close(),Bi(),Fi()}var un="single",UE="city-driver-tdm",nc=25,l0={red:14100029,blue:2060267},Ve={team:null,score:{red:0,blue:0},over:0,lastAttacker:null,kills:0,deaths:0},c0={weapons:["ak","glock","shotgun","sniper"],ammo:{ak:9999,glock:9999,shotgun:9999,sniper:9999},equipped:"ak"},Yu=[];function An(){return Cn.save||Ce}function h0(){return un==="tdm"&&Ve.team?Object.assign({},Ce.outfit,{shirt:l0[Ve.team]}):Ce.outfit}function Hu(n){un=n,Dt.connect(n==="single"?null:n==="tdm"?UE:void 0),ai.clearEnemies(),ai.setCount(n==="tdm"?0:14),Cn.save=n==="tdm"?c0:Ce,Q("tdm-hud").classList.toggle("hidden",n!=="tdm"),ic(),n==="tdm"?(Tt.active&&(Tt.stop(),Q("objective").classList.add("hidden")),Ve.score.red=Ve.score.blue=0,Ve.kills=Ve.deaths=0,Ve.over=0,Ve.team=null,setTimeout(()=>{un==="tdm"&&(NE(),rd())},1600),Et("\u2694\uFE0F TEAM DEATHMATCH \u2014 first team to "+nc+" kills wins",3e3)):(et&&oi(et,Ce.outfit),Et(n==="single"?"\u{1F9CD} Single player \u2014 the city is all yours":"\u{1F310} Online free roam \u2014 "+Dt.count+" in the city",2600))}function NE(){let n=0,e=0;Dt.each(t=>{t.team==="red"?n++:t.team==="blue"&&e++}),Ve.team=n<e?"red":e<n?"blue":Math.random()<.5?"red":"blue",oi(et,h0()),_i=null,dc(),Et("You are on "+Ve.team.toUpperCase()+" team",2200)}function u0(n){return n==="red"?{x:-176,z:3,heading:-Math.PI/2}:{x:176,z:-3,heading:Math.PI/2}}function rd(){$o();let n=u0(Ve.team||"red");de.pos.x=n.x+(Math.random()-.5)*6,de.pos.z=n.z+(Math.random()-.5)*20,de.heading=n.heading,de.vel.x=de.vel.z=0,Ot.speed=0,Zo(0),hc(),id(),c0.equipped="ak",Bi()}function dc(){Q("tdm-red").textContent=Ve.score.red,Q("tdm-blue").textContent=Ve.score.blue;let n=Q("tdm-you");n.textContent=Ve.team?"YOU: "+Ve.team.toUpperCase()+" \xB7 "+Ve.kills+"K / "+Ve.deaths+"D":"joining\u2026",n.className=Ve.team||""}function d0(n){if(!n||!n.kt||!(n.kt in Ve.score))return;Ve.score[n.kt]++,n.k===Dt.myId&&(Ve.kills++,qs(150));let e=Q("killfeed"),t=document.createElement("div");for(t.innerHTML=`<b class="${n.kt}">${qm(n.kn||"?")}</b> \u2620 <b class="${n.kt==="red"?"blue":"red"}">${qm(n.vn||"?")}</b>`,e.prepend(t);e.children.length>4;)e.lastChild.remove();if(setTimeout(()=>t.remove(),6e3),dc(),!Ve.over&&(Ve.score.red>=nc||Ve.score.blue>=nc)){let i=Ve.score.red>=nc?"red":"blue";Ve.over=8,Q("tdm-win").textContent=(i===Ve.team?"\u{1F3C6} ":"")+i.toUpperCase()+" TEAM WINS!",Q("tdm-win").className=i,i===Ve.team&&(qs(2500),Et("+$2,500 for the win!",2500))}}var qm=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Ym(n,e,t,i){un!=="tdm"||!Ve.team||(Dt.send("hit",{t:n.id,d:e,tm:Ve.team,n:Ce.name}),Kr.hit(n.x,1.25,n.z,t,i,1))}function Zm(){if(zt&&zt.active&&p0("you got wasted"),un!=="tdm")return;Ve.deaths++;let n=Ve.lastAttacker,e={k:n?n.id:null,kn:n?n.name:"the street",kt:n?n.team:null,v:Dt.myId,vn:Ce.name};n&&(Dt.send("kill",e),d0(e)),dc()}function $m(){return un==="tdm"?u0(Ve.team||"red"):{x:St.spawn.x,z:St.spawn.z,heading:St.spawn.heading||0}}function OE(){if(Yu.length=0,un!=="tdm"||!Ve.team)return;let n=ct?ct.b.id:-1;Dt.each(e=>{if(e.team===Ve.team||e.dead||e.b!==n||!e.placed)return;let t={kind:"player",id:e.id,name:e.name,team:e.team,x:e.x,z:e.z};Yu.push({x:e.x,z:e.z,r:e.mode==="car"?1.5:.5,ref:t})})}function f0(){return Math.min(Tn,(Ce.missionsDone|0)+1)}function zE(){if(un==="tdm"){Et("Missions are in Single Player / Online Free Roam");return}Ku=!0,hn(null,null,"");let n=Ce.missionsDone|0,e=zt.active,t=e?zt.mission:Du(f0());Q("mb-num").textContent=n>=Tn?"ALL 500 COMPLETE":"MISSION "+t.n+" / "+Tn,Q("mb-title").textContent=t.type==="boss"?"\u{1F451} FINAL BOSS: EMERALD":t.title,Q("mb-desc").textContent=n>=Tn?"You beat Emerald and took her millions. Replay any time \u2014 missions keep paying.":t.desc,Q("mb-reward").textContent="$"+t.reward.toLocaleString()+(t.timeLimit?" \xB7 \u23F1 "+t.timeLimit+"s":""),Q("mb-progress").style.width=(n/Tn*100).toFixed(1)+"%",Q("mb-left").textContent=n>=Tn?"Emerald defeated \u{1F480}":Tn-1-Math.min(n,Tn-1)+" missions until Emerald",Q("mb-start").textContent=e?"\u2716 ABANDON MISSION":"\u25B6 START",Q("mission-board").classList.remove("hidden")}function oc(){Ku=!1,Q("mission-board").classList.add("hidden")}function FE(){if(zt.active){zt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),oc(),Et("Mission abandoned");return}Tt&&Tt.active&&(Tt.stop(),Q("objective").classList.add("hidden"));let n=(Ce.missionsDone|0)>=Tn?1+Math.floor(Math.random()*(Tn-1)):f0(),e=zt.start(n);oc(),Q("mission-hud").classList.remove("hidden"),Q("mh-title").textContent="#"+e.n+" "+(e.type==="boss"?"EMERALD":e.title.toUpperCase()),Le.beep(700,.08),Et("\u{1F4F1} "+e.title+" \u2014 "+e.desc,3500)}function BE(){let n=zt.mission;zt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),n.n>(Ce.missionsDone|0)&&(Ce.missionsDone=n.n),qs(n.reward),ln(Ce),Le.beep(880,.1),setTimeout(()=>Le.beep(1320,.15),130),n.type==="boss"?(Q("victory").classList.remove("hidden"),Q("victory-cash").textContent="+$"+Iu.toLocaleString()):Et("\u2705 MISSION PASSED  +$"+n.reward.toLocaleString(),3e3)}function p0(n){zt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),Le.beep(200,.2),Et("\u274C MISSION FAILED \u2014 "+n+". Try again from \u{1F4F1}",3200)}function HE(){let n=at?Ae.pos.x:de.pos.x,e=at?Ae.pos.z:de.pos.z,t=at?Ae.heading:de.heading;Q("mh-obj").textContent=zt.objective();let i=zt.timeLeft;Q("mh-time").textContent=i!=null?"\u23F1 "+Math.ceil(i)+"s":"",Q("mh-time").classList.toggle("low",i!=null&&i<10);let s=zt.target({x:n,z:e}),r=Q("mh-arrow");if(s&&!ct){let a=Math.atan2(-(s.x-n),-(s.z-e)),l=Math.atan2(Math.sin(a-t),Math.cos(a-t));r.style.transform="rotate("+(-l).toFixed(3)+"rad)",r.classList.remove("hidden"),Q("mh-dist").textContent=Math.round(Math.hypot(s.x-n,s.z-e))+" m"}else r.classList.add("hidden"),Q("mh-dist").textContent="";let o=zt.boss;o&&o.state!=="dead"?(Q("boss-hud").classList.remove("hidden"),Q("boss-fill").style.width=Math.max(0,o.hp/o.maxHp*100)+"%"):Q("boss-hud").classList.add("hidden")}function od(){let n=Q("hp-fill");n&&(n.style.width=Math.max(0,ds)+"%",n.style.background=ds>50?"#4ade80":ds>25?"#fbbf24":"#ef4444")}function ku(n){mi||Xt!=="freeroam"||(ds-=at?n:n*.5,Ql=.35,od(),Le&&Le.beep(160,.05),ds<=0&&kE())}function kE(){if(mi=!0,Gu=0,ds=0,od(),hn(null,null,""),Q("wasted").classList.remove("hidden"),at&&et&&(et.rotation.x=-Math.PI/2+.05,et.position.y=.12),Kr){let n=at?Ae.pos.x:de.pos.x,e=at?Ae.pos.z:de.pos.z;Kr.pool(n,e,2.6)}typeof Zm=="function"&&Zm()}function GE(){mi=!1,ds=100,od(),Q("wasted").classList.add("hidden"),et&&(et.rotation.x=0,et.position.y=0);let n=un==="tdm"?0:Math.min(500,Math.round(Ce.cash*.05));if(n>0&&(Ce.cash-=n,ln(Ce),Fi()),$o(),typeof $m=="function"){let e=$m();de.pos.x=e.x,de.pos.z=e.z,de.heading=e.heading,de.vel.x=de.vel.z=0,hc(),Zo(0)}else ju();if(un==="tdm"){Ve.lastAttacker=null,rd();return}Et(n>0?"\u{1F3E5} Hospital bill: -$"+n:"\u{1F3E5} Back on your feet",2200)}function VE(n){let e=de.heading,t=de.pos.x,i=de.pos.z;xn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(Ot.speed),r=8.5+s*.045,o=3.6+s*.014;In.set(t-xn.x*r,o,i-xn.z*r);let a=1-Math.exp(-n*5.5);kt.x+=(In.x-kt.x)*a,kt.y+=(In.y-kt.y)*a,kt.z+=(In.z-kt.z)*a,Gt.position.copy(kt),Gt.lookAt(t+xn.x*5,1.7,i+xn.z*5);let l=62+Math.min(14,s*.22)+(Ot.nitro?6:0);Math.abs(l-vi)>.25&&(vi+=(l-vi)*Math.min(1,n*4),Gt.fov=vi,Gt.updateProjectionMatrix())}function WE(n){return n<2?"N":n<20?"1":n<40?"2":n<65?"3":n<95?"4":n<125?"5":"6"}function XE(){let n=Math.abs(Ot.speed)*2.2;Q("speed-val").textContent=Math.round(n),Q("gear-hud").textContent=WE(n),Q("nitro-fill").style.width=(Math.max(0,Math.min(1,Ot.nitroFrac))*100).toFixed(1)+"%"}function ps(){for(let n of["main-menu","pause-menu","garage"])Q(n).classList.add("hidden")}function qE(){return us||Jr}function $o(){Ws&&a0(),ct&&uc(),at&&r0(),hn(null,null,"")}function fc(){Xt="menu",_n=!1,Bn=!1,Jn&&Jn.active&&Jn.exit(),$o(),At&&(At.setMode("drive"),At.detach()),ps(),Q("main-menu").classList.remove("hidden"),Q("hud").classList.add("hidden"),Q("touch-controls").classList.add("hidden"),Q("drag-ui").classList.add("hidden"),Tt&&Tt.active&&Tt.stop(),Q("objective").classList.add("hidden"),zt&&zt.active&&zt.stop(),Q("mission-hud").classList.add("hidden"),Q("boss-hud").classList.add("hidden"),oc(),Q("m-tutorial").classList.toggle("hidden",!!Ce.tutorialDone),Dt&&un!=="online"&&(un="online",Dt.connect(void 0)),Cn.save=Ce,Q("tdm-hud").classList.add("hidden"),Q("tdm-win").classList.add("hidden"),Ve.over=0,et&&oi(et,Ce.outfit),_i=null,Le.engine(0,0),Le.skid(!1)}function ic(){Jn&&Jn.active&&Jn.exit(),$o(),li&&(li.intensity=Vu),Q("drag-ui").classList.add("hidden"),Xt="freeroam",_n=!1,Bn=!1,ps(),Q("hud").classList.remove("hidden"),Q("touch-controls").classList.remove("hidden"),At.attach(),At.setMode("drive"),ju(),Fi(),!Ce.tutorialDone&&!Ce.tutorialSkipped?jE():Et("Free roam \u2014 drift for cash, walk into any building!")}function Jm(){$o(),Xt="drag",_n=!1,Bn=!1,li&&(li.intensity=0),ps(),Q("hud").classList.add("hidden"),Q("touch-controls").classList.remove("hidden"),At.attach(),At.setMode("drag"),Q("drag-ui").classList.remove("hidden"),Jn.enter()}function Km(){Xt!=="freeroam"&&Xt!=="drag"||Bn||Ws||qE()||(_n=!0,hn(null,null,""),ps(),Q("pause-menu").classList.remove("hidden"))}function YE(){_n=!1,ps()}function ac(n){sc=n,Bn=!0,n0.refresh(),Fi(),ps(),Q("garage").classList.remove("hidden")}function ZE(){Bn=!1,ps(),Q("hud").classList.toggle("hidden",Xt!=="freeroam"),et&&Bi(),sc==="menu"?fc():sc==="pause"?(_n=!0,Q("pause-menu").classList.remove("hidden")):_n=!1,Fi()}var $E=!1;function Zu(n,e){Kl=n,Bn&&(Bn=!1),Xt==="freeroam"&&(_n=!0),us=!0,ps(),Q("hud").classList.add("hidden"),Q("touch-controls").classList.add("hidden"),hn(null,null,""),$E=et.visible,lc.open(e||"car")}function JE(n){if(!at)if(n==="driver"){let e=yu(de.pos.x,de.pos.z,de.heading);et.position.set(e.x,0,e.z),et.rotation.y=de.heading,zs(et,0,0,!1,0),et.visible=!0}else et.visible=!1}function KE(){if(us=!1,lc.close(),et.visible=at,Bi(),Kl==="menu"){fc();return}if(Kl==="garage"){ac(sc);return}(Xt==="freeroam"||Xt==="drag")&&(Q("hud").classList.toggle("hidden",Xt!=="freeroam"),Q("touch-controls").classList.remove("hidden"),Kl==="pause"?(_n=!0,Q("pause-menu").classList.remove("hidden")):_n=!1,at?sd():hc())}function QE(n){Go+=n*.35;let e=lc.tab==="driver",t=e?et.position.x:de.pos.x,i=e?et.position.z:de.pos.z,s=e?3.4:7.2,r=e?1.7:2.6,o=e?1.05:.75;Gt.position.set(t+Math.sin(Go)*s,r,i+Math.cos(Go)*s);let a=Math.cos(Go),l=-Math.sin(Go),c=e?.9:2.2;Gt.lookAt(t+a*c,o,i+l*c),Math.abs(55-vi)>.25&&(vi=55,Gt.fov=55,Gt.updateProjectionMatrix()),$r.x=t,$r.z=i,St.update(n,$r)}function jE(){Tt&&(Tt.start(),Q("objective").classList.remove("hidden"),m0(),Et("\u{1F393} TUTORIAL \u2014 finish it for $"+Nl.toLocaleString()+" + a free car!",3200))}function m0(){if(!Tt.active){Q("objective").classList.add("hidden");return}Q("obj-step").textContent="STEP "+(Tt.step+1)+"/"+Tt.total,Q("obj-text").textContent=Tt.text;let n=Tt.target(),e=at?Ae.pos.x:de.pos.x,t=at?Ae.pos.z:de.pos.z,i=at?Ae.heading:de.heading,s=Q("obj-arrow"),r=Q("obj-dist");if(n&&!ct){let o=Math.atan2(-(n.x-e),-(n.z-t)),a=Math.atan2(Math.sin(o-i),Math.cos(o-i));s.style.transform="rotate("+(-a).toFixed(3)+"rad)",s.classList.remove("hidden"),r.textContent=Math.round(Math.hypot(n.x-e,n.z-t))+" m"}else s.classList.add("hidden"),r.textContent=Tt.text.startsWith("DRIFT")?Math.round(Tt.driftProgress*100)+"%":""}function g0(){Ce.tutorialDone=!0,qs(Nl),ln(Ce),Q("objective").classList.add("hidden"),Le.beep(880,.1),setTimeout(()=>Le.beep(1175,.14),120),eb()}function eb(){Jr=!0,hn(null,null,"");let n={topSpeed:1,accel:1,handling:1,grip:1};for(let t of pi)for(let i in n)n[i]=Math.max(n[i],t.stats[i]);let e=(t,i,s)=>`<div class="stat-row"><span>${t}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(i/s*100))}%"></i></div></div>`;Q("pick-list").innerHTML=pi.map(t=>`<div class="car-card"><div class="cinfo"><b>${t.name}</b><small>${t.desc} \xB7 worth $${t.price.toLocaleString()}</small><div class="stat-bars">${e("SPD",t.stats.topSpeed,n.topSpeed)}${e("ACC",t.stats.accel,n.accel)}${e("HDL",t.stats.handling,n.handling)}${e("GRP",t.stats.grip,n.grip)}</div></div><button class="buy-btn" data-id="${t.id}">PICK FREE</button></div>`).join(""),Q("car-pick").classList.remove("hidden")}function x0(n){let e=pi.find(t=>t.id===n);e&&(Ce.owned.includes(n)||Ce.owned.push(n),Ce.upgrades[n]||(Ce.upgrades[n]={engine:0,turbo:0,tires:0,suspension:0,nitro:0}),typeof Ce.paint[n]!="number"&&(Ce.paint[n]=e.colors[0]),Ce.currentCar=n,ln(Ce),qr(),Q("car-pick").classList.add("hidden"),Jr=!1,Fi(),Et("\u{1F3C6} "+e.name+" is yours! +$"+Nl.toLocaleString()+" in the bank",3200),Le.beep(990,.1))}function Qm(n,e){let t=Q("mp-status");t.classList.remove("hidden"),t.className="mp-status "+n,t.textContent=n==="on"?"\u25CF online \xB7 "+e+(e===1?" player":" players"):n==="connecting"?"\u25CF connecting\u2026":"\u25CF offline";let i=Q("online-hud");i.textContent=n==="on"?"\u{1F310} "+e+" online":"\u{1F310} \u2026",i.classList.toggle("dim",n!=="on")}function tb(){return Ht.name=Ce.name,Ht.car=$n.id,_i||(_i=Vp(Ce,$n.id),un==="tdm"&&Ve.team&&(_i.o[0]=l0[Ve.team])),Ht.team=un==="tdm"?Ve.team:null,Ht.dead=mi,Ht.look=_i,Ht.b=ct?ct.b.id:-1,at?(Ht.mode="foot",Ht.x=Ae.pos.x,Ht.z=Ae.pos.z,Ht.h=Ae.heading,Ht.speed=Ae.speed,Ht.px=de.pos.x,Ht.pz=de.pos.z,Ht.ph=de.heading,Ht.w=An().equipped||null):(Ht.mode="car",Ht.x=de.pos.x,Ht.z=de.pos.z,Ht.h=de.heading,Ht.speed=Ot.speed,Ht.w=null),Ht}async function nb(){cn=new yo({antialias:!1,powerPreference:"high-performance"}),cn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),cn.setSize(Dn.view.w,Dn.view.h),cn.toneMapping=Co,cn.toneMappingExposure=1,cn.shadowMap.enabled=!0,cn.shadowMap.type=dl,Q("game-container").appendChild(cn.domElement),wt=new Tr,Gt=new on(62,Dn.view.w/Dn.view.h,.1,3e3),St=Sp(wt,em),fs=nm(wt,St);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(Pm(),Cm)),t=new wr(cn);wt.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let n=Np();wt.add(n.mesh),i0={uniforms:n.uniforms,sun:St.sun,hemi:St.hemi,scene:wt,renderer:cn},_0("day",!0);try{Hn=(await Promise.resolve().then(()=>(Hm(),Bm))).createPostFX(cn,wt,Gt),Hn.setBloomStrength(Sl.day.bloom)}catch(e){console.warn("postfx off",e),Hn=null}xi=new Ml("auto"),xi.onChange(jm),jm(xi.level,fu(xi.level)),Vs=new Yn(wt,70,{color:14211288,opacity:.42}),Yo=new Yn(wt,40,{color:7829367,opacity:.3,size:.9}),rc=new El(wt,500),li=new ll(13624575,0,60,.5,.45,1.2),jl=new Wt,wt.add(jl),li.target=jl,wt.add(li)}function jm(n,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);cn.setPixelRatio(t),Hn&&(Hn.setPixelRatio(Math.min(t,1)),Hn.setSize(Dn.view.w,Dn.view.h),Hn.setBloomEnabled(e.bloom));let i=e.shadows;(cn.shadowMap.enabled!==i||St&&St.sun.castShadow!==i)&&(cn.shadowMap.enabled=i,St&&(St.sun.castShadow=i),wt.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),St&&St.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),Wu=e.particles,rc&&rc.setVisible(e.particles>.3)}function _0(n,e){let t=pu;typeof n=="string"&&(Yr=t.indexOf(n)),Yr<0&&(Yr=0);let i=t[Yr],s=Op(i0,i),r=i==="day"?0:i==="sunset"?.45:1;St&&St.setGlow(r),Hn&&Hn.setBloomStrength(s.bloom),Vu=i==="day"?0:i==="sunset"?60:160,li&&Xt!=="drag"&&(li.intensity=Vu);let o=Q("tod-btn");o&&(o.textContent=i==="day"?"\u2600\uFE0F":i==="sunset"?"\u{1F307}":"\u{1F319}"),e||Et(s.label+" mode")}function ib(){Yr=(Yr+1)%pu.length,_0()}var e0=performance.now();function v0(n){requestAnimationFrame(v0);let e=(n-e0)/1e3;e0=n,e>0||(e=.016),e>.1&&(e=.1),tc++;let t=Xt==="freeroam"&&!_n&&!Bn&&!Ws&&!us&&!Jr&&!mi&&!Ku;if(us)QE(e);else if(t&&at)LE(e),St.update(e,Ae.pos),fs.update(e),$u.update(e,ct&&ct.room),Vs.update(e),Yo.update(e),xi&&xi.update(e),Le.engine(0,0),Le.skid(!1),Yl.x=de.pos.x,Yl.z=de.pos.z,ct?ec.draw(ct.back.x,ct.back.z,Ae.heading,Yl,Dt):ec.draw(Ae.pos.x,Ae.pos.z,Ae.heading,Yl,Dt),Wm(),At.consumeAction()&&Xm();else if(t){Ot=de.update(At.input,e,CE);let i=zp(cc,Ot.drifting,Ot.speed,e);i>0&&(qs(i),Et("DRIFT +$"+i.toLocaleString())),$r.x=de.pos.x,$r.z=de.pos.z,St.update(e,$r),Zo(e),VE(e),XE(),RE(e),fs.update(e),Zr.update(e,Cn,!1,!1),ec.draw(de.pos.x,de.pos.z,de.heading,null,Dt),Wm(),At.consumeAction()&&Xm(),xi&&xi.update(e);let s=Math.min(1,Math.abs(Ot.speed)/(qo.topSpeed*1.15));Le.engine(s,Math.abs(At.input.throttle||0)),Le.skid(Ot.drifting)}else Xt==="drag"&&!_n&&!Bn&&!us?Jn.active&&Jn.update(e):(Le.engine(0,0),Le.skid(!1));if(Xt==="freeroam"&&!_n&&!Bn&&!us&&(cs.x=at?Ae.pos.x:de.pos.x,cs.z=at?Ae.pos.z:de.pos.z,cs.alive=!mi,cs.hidden=!!ct,cs.inCar=!at,!Ws&&!Jr&&(ai.update(e,cs),zi.update(e,cs,at?null:cs),zi.hitList(),!at&&!mi&&ai.carHits(de.pos.x,de.pos.z,de.heading,Ot.speed)&&(Le.beep(70,.12),de.vel.x*=.85,de.vel.z*=.85)),Kr.update(e),Ql>0&&(Ql-=e,Q("hurt").style.opacity=String(Math.max(0,Ql/.35)*.75)),mi&&(Gu+=e,Gu>3.2&&GE())),t&&zt&&zt.active){let i=zt.update(e,{pos:at?Ae.pos:de.pos,cam:Gt.position});i==="pass"?BE():i==="fail"&&p0("out of time"),zt.active&&tc%3===0&&HE()}if(t&&Tt&&Tt.active){let i=Tt.update(e,{pos:at?Ae.pos:de.pos,drifting:!at&&Ot.drifting,speed:at?0:Ot.speed,onFoot:at,inside:ct?ct.b.id:-1});i==="next"?(Le.beep(880,.08),Et("\u2705 Nice! Next: "+Tt.text,2200)):i==="done"&&g0(),tc%3===0&&m0()}OE(),Ve.over>0&&(Ve.over-=e,Q("tdm-win").classList.remove("hidden"),Ve.over<=0&&(Q("tdm-win").classList.add("hidden"),Ve.score.red=Ve.score.blue=0,dc(),un==="tdm"&&!mi&&rd())),Dt&&Dt.update(e,Xt==="freeroam"?tb():null,n),Vs&&(Xt!=="freeroam"||_n||Bn||Ws)&&(Vs.update(e),Yo.update(e)),Hn?Hn.render():cn.render(wt,Gt)}function sb(){Q("m-freeroam").onclick=()=>{Le.unlock(),Dn.goLandscape(),Le.beep(600,.06),Hu("single")},Q("m-online").onclick=()=>{Le.unlock(),Dn.goLandscape(),Le.beep(600,.06),Hu("online")},Q("m-tdm").onclick=()=>{Le.unlock(),Dn.goLandscape(),Le.beep(600,.06),Hu("tdm")},Q("m-drag").onclick=()=>{Le.unlock(),Dn.goLandscape(),Le.beep(600,.06),Jm()},Q("store-close").onclick=()=>{Le.beep(500,.05),a0()},Q("m-garage").onclick=()=>{Le.unlock(),ac("menu")},Q("p-resume").onclick=()=>{Le.beep(600,.05),Dn.goLandscape(),YE()},Q("p-freeroam").onclick=()=>{Le.beep(600,.05),ic()},Q("p-drag").onclick=()=>{Le.beep(600,.05),Jm()},Q("p-garage").onclick=()=>ac("pause"),Q("p-quit").onclick=()=>fc(),Q("menu-btn").onclick=Km,Q("garage-close").onclick=ZE,Q("drag-exit").onclick=()=>{Jn.active&&Jn.exit(),ic()},Q("m-editor").onclick=()=>{Le.unlock(),Le.beep(600,.05),Zu("menu","car")},Q("p-editor").onclick=()=>{Le.beep(600,.05),Zu("pause",at?"driver":"car")},Q("se-done").onclick=()=>{Le.beep(500,.05),KE()},Q("m-tutorial").onclick=()=>{Le.unlock(),Dn.goLandscape(),Le.beep(600,.06),Ce.tutorialSkipped=!1,ln(Ce),ic()},Q("obj-skip").onclick=()=>{Tt.stop(),Ce.tutorialSkipped=!0,ln(Ce),Q("objective").classList.add("hidden"),Et("Tutorial skipped \u2014 replay it from the main menu for $100K",2600)},Q("mission-btn").onclick=()=>{Le.beep(650,.05),zE()},Q("mb-start").onclick=()=>FE(),Q("mb-close").onclick=()=>{Le.beep(500,.05),oc()},Q("victory-ok").onclick=()=>{Q("victory").classList.add("hidden")},Q("pick-list").addEventListener("click",n=>{let e=n.target.closest("button[data-id]");e&&x0(e.dataset.id)}),Q("tod-btn")&&(Q("tod-btn").onclick=()=>{Le.beep(600,.05),ib()}),Q("gfx-btn")&&(Q("gfx-btn").onclick=()=>{Le.beep(600,.05);let n=xi.cycleMode();Q("gfx-btn").textContent=n==="auto"?"\u2728":n==="high"?"\u2728+":"\u2728\u2212",Et("Graphics: "+n.toUpperCase()+" ("+Up[xi.level]+")")}),window.addEventListener("pointerdown",()=>Le.unlock()),window.addEventListener("keydown",()=>Le.unlock()),document.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("gesturestart",n=>n.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(Xt==="freeroam"||Xt==="drag")&&!_n&&Km()})}function rb(n,e){cn&&(Gt.aspect=n/e,Gt.updateProjectionMatrix(),cn.setSize(n,e),Hn&&Hn.setSize(n,e))}async function ob(){try{Ce=Gp(qp(Ip())),Le=Rp(),Dn=Bp(rb),await nb(),At=Ep({isRotated:()=>Dn.rotated}),Ae=new Ll,et=Ur(Ce.outfit),et.visible=!1,wt.add(et),Zr=sm(wt),Object.assign(Cn,{save:Ce,colliders:St.colliders,targets:fs.targets,audio:Le,toast:Et,onTargetHit:()=>{qs(_u),Et("TARGET +$"+_u,900)},onShot:n=>{Dt&&Dt.sendShots(n)}}),$u=um(wt),Kr=gm(wt),ai=_m({scene:wt,blood:Kr,audio:Le,count:14,collide:(n,e,t)=>ed(n,e,t),shoot:(n,e,t,i)=>Zr.remoteShot(n,e,t,i),onPlayerHit:n=>ku(n)}),zi=ym({scene:wt,lines:St.roadLines,buildCar:$l,applyCarSkin:Jl,CAR_DEFS:pi}),km=zi.hitList(),zt=Rm({scene:wt,people:ai,toast:Et,beep:(n,e)=>Le.beep(n,e)}),Cn.hitables=[ai.hitList,km,Yu],Cn.onPersonHit=(n,e,t,i)=>{n.kind==="ped"||n.kind==="enemy"?ai.damage(n,e,t,i):typeof Ym=="function"&&n.kind==="player"&&Ym(n,e,t,i)},Tt=dm(wt,St),Qu=rm({save:Ce,persist:()=>ln(Ce),toast:n=>Et(n,1600),beep:(n,e)=>Le.beep(n,e),onChange:()=>{Fi(),Bi()}}),ec=am(Q("minimap"),fs.stores),Bi(),nd(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(n,e,t)=>{at?Ae.reset(n,e,t||0):(de.pos.x=n,de.pos.z=e,de.heading=t||0)},save:()=>Ce,stores:()=>fs.stores,buildings:()=>St.buildings,inside:()=>ct&&{id:ct.b.id,style:ct.room.style},enter:n=>o0(n),exit:()=>uc(),getOut:()=>id(),tut:()=>Tt&&{active:Tt.active,step:Tt.step},finishTut:()=>g0(),pick:n=>x0(n),mp:()=>Dt&&{status:Dt.status,count:Dt.count},state:()=>({state:Xt,onFoot:at,editorOpen:us,pickOpen:Jr,cash:Ce.cash}),shot:(n,e,t,i)=>Zr.remoteShot(n,e,t,i),missions:()=>zt,setDone:n=>{Ce.missionsDone=n},people:()=>ai,traffic:()=>zi,hp:()=>ds,hurt:n=>ku(n),cam:()=>({c:Gt.position.toArray().map(n=>+n.toFixed(2)),p:et.position.toArray().map(n=>+n.toFixed(2)),pv:et.visible,f:[Ae.pos.x,Ae.pos.z,Ae.heading]})}),s0(),de=new _l(qo),ju(),n0=Dp({save:Ce,getDef:n=>pi.find(e=>e.id===n),onSelectCar:()=>qr(),onPaint:()=>qr(),onWheels:()=>qr(),refreshScene:()=>qr(),openEditor:()=>Zu("garage","car")}),lc=lm({save:Ce,cars:pi,persist:()=>ln(Ce),beep:(n,e)=>Le.beep(n,e),onCar:n=>{n?qr():Jl(Rn,Ce.paint[$n.id],Ns(Ce,$n.id)),_i=null},onOutfit:()=>{oi(et,Ce.outfit),_i=null},onName:()=>{_i=null},onTab:n=>JE(n)}),Dt=mm({scene:wt,CAR_DEFS:pi,buildCar:$l,applyCarSkin:Jl,buildCharacter:Ur,setOutfit:oi,setHeldWeapon:zo,animateCharacter:zs,unpackLook:Wp,remoteShot:(n,e,t,i)=>Zr.remoteShot(n,e,t,i),localBuilding:()=>ct?ct.b.id:-1,onHit:n=>{un!=="tdm"||!Ve.team||n.tm===Ve.team||mi||(Ve.lastAttacker={id:n.id,name:n.n,team:n.tm},ku(+n.d||10))},onKill:n=>{un==="tdm"&&d0(n)},onStatus:(n,e)=>Qm(n==="on"?"on":n==="connecting"?"connecting":"off",e),onCount:n=>{Dt&&Dt.status==="on"&&Qm("on",n)}}),Dt.connect(),Jn=Ap({scene:wt,camera:Gt,buildCar:$l,CAR_DEFS:pi,effectiveStats:t0,getPlayer:()=>(Zl.def=$n,Zl.stats=qo,Zl.group=Rn,Zl),controls:At,audio:Le,addCash:qs,toast:Et,city:St}),sb(),Fi(),Q("loading").classList.add("hidden"),fc(),requestAnimationFrame(v0)}catch(n){console.error(n),Q("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(n&&n.message||n)+"</p>"}}ob();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
