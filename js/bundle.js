(()=>{var t0=Object.defineProperty;var Dn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var uc=(n,e)=>{for(var t in e)t0(n,t,{get:e[t],enumerable:!0})};function Ai(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function J0(n,e){return(n%e+e)%e}function yc(n,e,t){return(1-t)*n+t*e}function Nd(n){return(n&n-1)===0&&n!==0}function nh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function qf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function K0(){let n=Da("canvas");return n.style.display="block",n}function lo(n){n in Od||(Od[n]=!0,console.warn(n))}function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Sc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Ec(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ua.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function wc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ms.fromArray(n,r);let a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=i.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Uc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ug(n,e,t,i,s,r,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$i,a),l===null)return null;ha.copy(a),ha.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ha);return c<t.near||c>t.far?null:{distance:c,point:ha.clone(),object:n}}function ua(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,er),n.getVertexPosition(l,tr),n.getVertexPosition(c,nr);let h=ug(n,e,t,i,er,tr,nr,ca);if(h){s&&(oa.fromBufferAttribute(s,a),aa.fromBufferAttribute(s,l),la.fromBufferAttribute(s,c),h.uv=Ms.getInterpolation(ca,er,tr,nr,oa,aa,la,new oe)),r&&(oa.fromBufferAttribute(r,a),aa.fromBufferAttribute(r,l),la.fromBufferAttribute(r,c),h.uv1=Ms.getInterpolation(ca,er,tr,nr,oa,aa,la,new oe),h.uv2=h.uv1),o&&($d.fromBufferAttribute(o,a),Jd.fromBufferAttribute(o,l),Kd.fromBufferAttribute(o,c),h.normal=Ms.getInterpolation(ca,er,tr,nr,$d,Jd,Kd,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};Ms.getNormal(er,tr,nr,f.normal),h.face=f}return h}function vr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function yn(n){let e={};for(let t=0;t<n.length;t++){let i=vr(n[t]);for(let s in i)e[s]=i[s]}return e}function dg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zf(n){return n.getRenderTarget()===null?n.outputColorSpace:mt.workingColorSpace}function $f(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let f=c.array,p=c.usage,m=f.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,f,p),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,f){let p=h.array,m=h._updateRange,x=h.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&x.length===0&&n.bufferSubData(f,0,p),x.length!==0){for(let g=0,d=x.length;g<d;g++){let u=x[g];t?n.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):n.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);if(f===void 0)i.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}function K_(n,e,t,i,s,r,o){let a=new Ce(0),l=r===!0?0:1,c,h,f=null,p=0,m=null;function x(d,u){let M=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===cl)?(h===void 0&&(h=new ne(new Ie(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:vr(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=mt.getTransfer(v.colorSpace)!==vt,(f!==v||p!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,m=n.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ne(new rt(2,2),new Zt({name:"BackgroundMaterial",uniforms:vr(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=mt.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,u){d.getRGB(fa,Zf(n)),i.buffers.color.setClear(fa.r,fa.g,fa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(d,u=1){a.set(d),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(a,l)},render:x}}function Q_(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null),c=l,h=!1;function f(I,T,U,H,N){let k=!1;if(o){let X=g(H,U,T);c!==X&&(c=X,m(c.object)),k=u(I,H,U,N),k&&M(I,H,U,N)}else{let X=T.wireframe===!0;(c.geometry!==H.id||c.program!==U.id||c.wireframe!==X)&&(c.geometry=H.id,c.program=U.id,c.wireframe=X,k=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,A(I,T,U,H),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function x(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function g(I,T,U){let H=U.wireframe===!0,N=a[I.id];N===void 0&&(N={},a[I.id]=N);let k=N[T.id];k===void 0&&(k={},N[T.id]=k);let X=k[H];return X===void 0&&(X=d(p()),k[H]=X),X}function d(I){let T=[],U=[],H=[];for(let N=0;N<s;N++)T[N]=0,U[N]=0,H[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:H,object:I,attributes:{},index:null}}function u(I,T,U,H){let N=c.attributes,k=T.attributes,X=0,q=U.getAttributes();for(let te in q)if(q[te].location>=0){let K=N[te],me=k[te];if(me===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(me=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(me=I.instanceColor)),K===void 0||K.attribute!==me||me&&K.data!==me.data)return!0;X++}return c.attributesNum!==X||c.index!==H}function M(I,T,U,H){let N={},k=T.attributes,X=0,q=U.getAttributes();for(let te in q)if(q[te].location>=0){let K=k[te];K===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let me={};me.attribute=K,K&&K.data&&(me.data=K.data),N[te]=me,X++}c.attributes=N,c.attributesNum=X,c.index=H}function v(){let I=c.newAttributes;for(let T=0,U=I.length;T<U;T++)I[T]=0}function _(I){R(I,0)}function R(I,T){let U=c.newAttributes,H=c.enabledAttributes,N=c.attributeDivisors;U[I]=1,H[I]===0&&(n.enableVertexAttribArray(I),H[I]=1),N[I]!==T&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,T),N[I]=T)}function b(){let I=c.newAttributes,T=c.enabledAttributes;for(let U=0,H=T.length;U<H;U++)T[U]!==I[U]&&(n.disableVertexAttribArray(U),T[U]=0)}function S(I,T,U,H,N,k,X){X===!0?n.vertexAttribIPointer(I,T,U,N,k):n.vertexAttribPointer(I,T,U,H,N,k)}function A(I,T,U,H){if(i.isWebGL2===!1&&(I.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let N=H.attributes,k=U.getAttributes(),X=T.defaultAttributeValues;for(let q in k){let te=k[q];if(te.location>=0){let G=N[q];if(G===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let K=G.normalized,me=G.itemSize,ye=t.get(G);if(ye===void 0)continue;let pe=ye.buffer,Le=ye.type,Fe=ye.bytesPerElement,Te=i.isWebGL2===!0&&(Le===n.INT||Le===n.UNSIGNED_INT||G.gpuType===Of);if(G.isInterleavedBufferAttribute){let He=G.data,B=He.stride,ge=G.offset;if(He.isInstancedInterleavedBuffer){for(let j=0;j<te.locationSize;j++)R(te.location+j,He.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=He.meshPerAttribute*He.count)}else for(let j=0;j<te.locationSize;j++)_(te.location+j);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let j=0;j<te.locationSize;j++)S(te.location+j,me/te.locationSize,Le,K,B*Fe,(ge+me/te.locationSize*j)*Fe,Te)}else{if(G.isInstancedBufferAttribute){for(let He=0;He<te.locationSize;He++)R(te.location+He,G.meshPerAttribute);I.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let He=0;He<te.locationSize;He++)_(te.location+He);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let He=0;He<te.locationSize;He++)S(te.location+He,me/te.locationSize,Le,K,me*Fe,me/te.locationSize*He*Fe,Te)}}else if(X!==void 0){let K=X[q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(te.location,K);break;case 3:n.vertexAttrib3fv(te.location,K);break;case 4:n.vertexAttrib4fv(te.location,K);break;default:n.vertexAttrib1fv(te.location,K)}}}}b()}function E(){F();for(let I in a){let T=a[I];for(let U in T){let H=T[U];for(let N in H)x(H[N].object),delete H[N];delete T[U]}delete a[I]}}function y(I){if(a[I.id]===void 0)return;let T=a[I.id];for(let U in T){let H=T[U];for(let N in H)x(H[N].object),delete H[N];delete T[U]}delete a[I.id]}function D(I){for(let T in a){let U=a[T];if(U[I.id]===void 0)continue;let H=U[I.id];for(let N in H)x(H[N].object),delete H[N];delete U[I.id]}}function F(){L(),h=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:F,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:y,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:_,disableUnusedAttributes:b}}function j_(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,f){n.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,p){if(p===0)return;let m,x;if(s)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,f,p),t.update(f,r,p)}function c(h,f,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<p;x++)this.render(h[x],f[x]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,p);let x=0;for(let g=0;g<p;g++)x+=f[g];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function ev(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,_=o||e.has("OES_texture_float"),R=v&&_,b=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:R,maxSamples:b}}function tv(n){let e=this,t=null,i=0,s=!1,r=!1,o=new bi,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){let x=f.clippingPlanes,g=f.clipIntersection,d=f.clipShadows,u=n.get(f);if(!s||x===null||x.length===0||r&&!d)r?h(null):c();else{let M=r?0:i,v=M*4,_=u.clippingState||null;l.value=_,_=h(x,p,v,m);for(let R=0;R!==v;++R)_[R]=t[R];u.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,m,x){let g=f!==null?f.length:0,d=null;if(g!==0){if(d=l.value,x!==!0||d===null){let u=m+g*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<u)&&(d=new Float32Array(u));for(let v=0,_=m;v!==g;++v,_+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function nv(n){let e=new WeakMap;function t(o,a){return a===Kc?o.mapping=gr:a===Qc&&(o.mapping=xr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Kc||a===Qc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new oh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function iv(n){let e=[],t=[],i=[],s=n,r=n-ur+1+Qd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ur?l=Qd[o-n+ur-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,g=3,d=2,u=1,M=new Float32Array(g*x*m),v=new Float32Array(d*x*m),_=new Float32Array(u*x*m);for(let b=0;b<m;b++){let S=b%3*2/3-1,A=b>2?0:-1,E=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];M.set(E,g*x*b),v.set(p,d*x*b);let y=[b,b,b,b,b,b];_.set(y,u*x*b)}let R=new Yt;R.setAttribute("position",new un(M,g)),R.setAttribute("uv",new un(v,d)),R.setAttribute("faceIndex",new un(_,u)),e.push(R),s>ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tf(n,e,t){let i=new Sn(n,e,t);return i.texture.mapping=cl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function pa(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function sv(n,e,t){let i=new Float32Array(ys),s=new z(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$h(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function nf(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function sf(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function $h(){return`

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
	`}function rv(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Kc||l===Qc,h=l===gr||l===xr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Mr(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new Mr(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ov(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function av(n,e,t,i){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let g=p.morphAttributes[x];for(let d=0,u=g.length;d<u;d++)e.remove(g[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let x in p)e.update(p[x],n.ARRAY_BUFFER);let m=f.morphAttributes;for(let x in m){let g=m[x];for(let d=0,u=g.length;d<u;d++)e.update(g[d],n.ARRAY_BUFFER)}}function c(f){let p=[],m=f.index,x=f.attributes.position,g=0;if(m!==null){let M=m.array;g=m.version;for(let v=0,_=M.length;v<_;v+=3){let R=M[v+0],b=M[v+1],S=M[v+2];p.push(R,b,b,S,S,R)}}else if(x!==void 0){let M=x.array;g=x.version;for(let v=0,_=M.length/3-1;v<_;v+=3){let R=v+0,b=v+1,S=v+2;p.push(R,b,b,S,S,R)}}else return;let d=new(qf(p)?ka:Ha)(p,1);d.version=g;let u=r.get(f);u&&e.remove(u),r.set(f,d)}function h(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function lv(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,x){n.drawElements(r,x,a,m*l),t.update(x,r,1)}function f(m,x,g){if(g===0)return;let d,u;if(s)d=n,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](r,x,a,m*l,g),t.update(x,r,g)}function p(m,x,g){if(g===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<g;u++)this.render(m[u]/l,x[u]);else{d.multiDrawElementsWEBGL(r,x,0,a,m,0,g);let u=0;for(let M=0;M<g;M++)u+=x[M];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function cv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hv(n,e){return n[0]-e[0]}function uv(n,e){return Math.abs(e[1])-Math.abs(n[1])}function dv(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new At,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==x){let I=function(){F.dispose(),r.delete(h),h.removeEventListener("dispose",I)};g!==void 0&&g.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],S=h.morphAttributes.color||[],A=0;M===!0&&(A=1),v===!0&&(A=2),_===!0&&(A=3);let E=h.attributes.position.count*A,y=1;E>e.maxTextureSize&&(y=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let D=new Float32Array(E*y*4*x),F=new Oa(D,E,y,x);F.type=Xi,F.needsUpdate=!0;let L=A*4;for(let T=0;T<x;T++){let U=R[T],H=b[T],N=S[T],k=E*y*4*T;for(let X=0;X<U.count;X++){let q=X*L;M===!0&&(o.fromBufferAttribute(U,X),D[k+q+0]=o.x,D[k+q+1]=o.y,D[k+q+2]=o.z,D[k+q+3]=0),v===!0&&(o.fromBufferAttribute(H,X),D[k+q+4]=o.x,D[k+q+5]=o.y,D[k+q+6]=o.z,D[k+q+7]=0),_===!0&&(o.fromBufferAttribute(N,X),D[k+q+8]=o.x,D[k+q+9]=o.y,D[k+q+10]=o.z,D[k+q+11]=N.itemSize===4?o.w:1)}}g={count:x,texture:F,size:new oe(E,y)},r.set(h,g),h.addEventListener("dispose",I)}let d=0;for(let M=0;M<p.length;M++)d+=p[M];let u=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",u),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let m=p===void 0?0:p.length,x=i[h.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];i[h.id]=x}for(let v=0;v<m;v++){let _=x[v];_[0]=v,_[1]=p[v]}x.sort(uv);for(let v=0;v<8;v++)v<m&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(hv);let g=h.morphAttributes.position,d=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let _=a[v],R=_[0],b=_[1];R!==Number.MAX_SAFE_INTEGER&&b?(g&&h.getAttribute("morphTarget"+v)!==g[R]&&h.setAttribute("morphTarget"+v,g[R]),d&&h.getAttribute("morphNormal"+v)!==d[R]&&h.setAttribute("morphNormal"+v,d[R]),s[v]=b,u+=b):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function fv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Rr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ul(n,e){let t=of[e];t===void 0&&(t=new Int32Array(e),of[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function pv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function gv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function _v(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),Kt(t,i)}}function vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;lf.set(i),n.uniformMatrix3fv(this.addr,!1,lf),Kt(t,i)}}function yv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Kt(t,i)}}function Mv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function wv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function Cv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Kf:Jf;t.setTexture2D(e||r,s)}function Pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jf,s)}function Iv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ep,s)}function Lv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qf,s)}function Dv(n){switch(n){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return xv;case 35674:return _v;case 35675:return vv;case 35676:return yv;case 5124:case 35670:return Mv;case 35667:case 35671:return Sv;case 35668:case 35672:return Ev;case 35669:case 35673:return bv;case 5125:return wv;case 36294:return Tv;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Uv(n,e){n.uniform1fv(this.addr,e)}function Nv(n,e){let t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ov(n,e){let t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function zv(n,e){let t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Fv(n,e){let t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bv(n,e){let t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hv(n,e){let t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function kv(n,e){n.uniform1iv(this.addr,e)}function Gv(n,e){n.uniform2iv(this.addr,e)}function Vv(n,e){n.uniform3iv(this.addr,e)}function Wv(n,e){n.uniform4iv(this.addr,e)}function Xv(n,e){n.uniform1uiv(this.addr,e)}function qv(n,e){n.uniform2uiv(this.addr,e)}function Yv(n,e){n.uniform3uiv(this.addr,e)}function Zv(n,e){n.uniform4uiv(this.addr,e)}function $v(n,e,t){let i=this.cache,s=e.length,r=ul(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Jf,r[o])}function Jv(n,e,t){let i=this.cache,s=e.length,r=ul(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||jf,r[o])}function Kv(n,e,t){let i=this.cache,s=e.length,r=ul(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ep,r[o])}function Qv(n,e,t){let i=this.cache,s=e.length,r=ul(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Qf,r[o])}function jv(n){switch(n){case 5126:return Uv;case 35664:return Nv;case 35665:return Ov;case 35666:return zv;case 35674:return Fv;case 35675:return Bv;case 35676:return Hv;case 5124:case 35670:return kv;case 35667:case 35671:return Gv;case 35668:case 35672:return Vv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return qv;case 36295:return Yv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return $v;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Qv}}function hf(n,e){n.seq.push(e),n.map[e.id]=e}function ey(n,e,t){let i=n.name,s=i.length;for(Gc.lastIndex=0;;){let r=Gc.exec(i),o=Gc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){hf(t,c===void 0?new ah(a,n,e):new lh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ch(a),hf(t,f)),t=f}}}function uf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function iy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function sy(n){let e=mt.getPrimaries(mt.workingColorSpace),t=mt.getPrimaries(n),i;switch(e===t?i="":e===Pa&&t===Ca?i="LinearDisplayP3ToLinearSRGB":e===Ca&&t===Pa&&(i="LinearSRGBToLinearDisplayP3"),n){case Ci:case hl:return[i,"LinearTransferOETF"];case gt:case Zh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function df(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+iy(n.getShaderSource(e),o)}else return s}function ry(n,e){let t=sy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function oy(n,e){let t;switch(e){case Vh:t="Linear";break;case Wh:t="Reinhard";break;case Xh:t="OptimizedCineon";break;case wo:t="ACESFilmic";break;case qh:t="AgX";break;case P0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ay(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function ly(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(dr).join(`
`)}function cy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dr(n){return n!==""}function ff(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function hh(n){return n.replace(uy,fy)}function fy(n,e){let t=je[e];if(t===void 0){let i=dy.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hh(t)}function mf(n){return n.replace(py,my)}function my(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ll?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===s0?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ei&&(e="SHADOWMAP_TYPE_VSM"),e}function xy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case gr:case xr:e="ENVMAP_TYPE_CUBE";break;case cl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===xr&&(e="ENVMAP_MODE_REFRACTION"),e}function vy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Uf:e="ENVMAP_BLENDING_MULTIPLY";break;case R0:e="ENVMAP_BLENDING_MIX";break;case C0:e="ENVMAP_BLENDING_ADD";break}return e}function yy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function My(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gy(t),c=xy(t),h=_y(t),f=vy(t),p=yy(t),m=t.isWebGL2?"":ay(t),x=ly(t),g=cy(r),d=s.createProgram(),u,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dr).join(`
`),M.length>0&&(M+=`
`)):(u=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),M=[m,gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?je.tonemapping_pars_fragment:"",t.toneMapping!==Yi?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=hh(o),o=ff(o,t),o=pf(o,t),a=hh(a),a=ff(a,t),a=pf(a,t),o=mf(o),a=mf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let _=v+u+o,R=v+M+a,b=uf(s,s.VERTEX_SHADER,_),S=uf(s,s.FRAGMENT_SHADER,R);s.attachShader(d,b),s.attachShader(d,S),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function A(F){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(d).trim(),I=s.getShaderInfoLog(b).trim(),T=s.getShaderInfoLog(S).trim(),U=!0,H=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,b,S);else{let N=df(s,b,"vertex"),k=df(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+L+`
`+N+`
`+k)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||T==="")&&(H=!1);H&&(F.diagnostics={runnable:U,programLog:L,vertexShader:{log:I,prefix:u},fragmentShader:{log:T,prefix:M}})}s.deleteShader(b),s.deleteShader(S),E=new mr(s,d),y=hy(s,d)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(d,ty)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=b,this.fragmentShader=S,this}function Ey(n,e,t,i,s,r,o){let a=new Ba,l=new uh,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return E===0?"uv":`uv${E}`}function d(E,y,D,F,L){let I=F.fog,T=L.geometry,U=E.isMeshStandardMaterial?F.environment:null,H=(E.isMeshStandardMaterial?t:e).get(E.envMap||U),N=H&&H.mapping===cl?H.image.height:null,k=x[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));let X=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,q=X!==void 0?X.length:0,te=0;T.morphAttributes.position!==void 0&&(te=1),T.morphAttributes.normal!==void 0&&(te=2),T.morphAttributes.color!==void 0&&(te=3);let G,K,me,ye;if(k){let Ot=oi[k];G=Ot.vertexShader,K=Ot.fragmentShader}else G=E.vertexShader,K=E.fragmentShader,l.update(E),me=l.getVertexShaderID(E),ye=l.getFragmentShaderID(E);let pe=n.getRenderTarget(),Le=L.isInstancedMesh===!0,Fe=L.isBatchedMesh===!0,Te=!!E.map,He=!!E.matcap,B=!!H,ge=!!E.aoMap,j=!!E.lightMap,fe=!!E.bumpMap,Q=!!E.normalMap,De=!!E.displacementMap,Se=!!E.emissiveMap,C=!!E.metalnessMap,w=!!E.roughnessMap,V=E.anisotropy>0,le=E.clearcoat>0,re=E.iridescence>0,se=E.sheen>0,Pe=E.transmission>0,xe=V&&!!E.anisotropyMap,be=le&&!!E.clearcoatMap,Be=le&&!!E.clearcoatNormalMap,Xe=le&&!!E.clearcoatRoughnessMap,ce=re&&!!E.iridescenceMap,Ke=re&&!!E.iridescenceThicknessMap,Qe=se&&!!E.sheenColorMap,ke=se&&!!E.sheenRoughnessMap,Oe=!!E.specularMap,Ae=!!E.specularColorMap,Ze=!!E.specularIntensityMap,at=Pe&&!!E.transmissionMap,ae=Pe&&!!E.thicknessMap,he=!!E.gradientMap,$=!!E.alphaMap,O=E.alphaTest>0,ee=!!E.alphaHash,ie=!!E.extensions,Me=!!T.attributes.uv1,Ee=!!T.attributes.uv2,qe=!!T.attributes.uv3,st=Yi;return E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(st=n.toneMapping),{isWebGL2:h,shaderID:k,shaderType:E.type,shaderName:E.name,vertexShader:G,fragmentShader:K,defines:E.defines,customVertexShaderID:me,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Fe,instancing:Le,instancingColor:Le&&L.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ci,map:Te,matcap:He,envMap:B,envMapMode:B&&H.mapping,envMapCubeUVHeight:N,aoMap:ge,lightMap:j,bumpMap:fe,normalMap:Q,displacementMap:p&&De,emissiveMap:Se,normalMapObjectSpace:Q&&E.normalMapType===G0,normalMapTangentSpace:Q&&E.normalMapType===Wf,metalnessMap:C,roughnessMap:w,anisotropy:V,anisotropyMap:xe,clearcoat:le,clearcoatMap:be,clearcoatNormalMap:Be,clearcoatRoughnessMap:Xe,iridescence:re,iridescenceMap:ce,iridescenceThicknessMap:Ke,sheen:se,sheenColorMap:Qe,sheenRoughnessMap:ke,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:Ze,transmission:Pe,transmissionMap:at,thicknessMap:ae,gradientMap:he,opaque:E.transparent===!1&&E.blending===qi,alphaMap:$,alphaTest:O,alphaHash:ee,combine:E.combine,mapUv:Te&&g(E.map.channel),aoMapUv:ge&&g(E.aoMap.channel),lightMapUv:j&&g(E.lightMap.channel),bumpMapUv:fe&&g(E.bumpMap.channel),normalMapUv:Q&&g(E.normalMap.channel),displacementMapUv:De&&g(E.displacementMap.channel),emissiveMapUv:Se&&g(E.emissiveMap.channel),metalnessMapUv:C&&g(E.metalnessMap.channel),roughnessMapUv:w&&g(E.roughnessMap.channel),anisotropyMapUv:xe&&g(E.anisotropyMap.channel),clearcoatMapUv:be&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Be&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:ke&&g(E.sheenRoughnessMap.channel),specularMapUv:Oe&&g(E.specularMap.channel),specularColorMapUv:Ae&&g(E.specularColorMap.channel),specularIntensityMapUv:Ze&&g(E.specularIntensityMap.channel),transmissionMapUv:at&&g(E.transmissionMap.channel),thicknessMapUv:ae&&g(E.thicknessMap.channel),alphaMapUv:$&&g(E.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(Q||V),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:Ee,vertexUv3s:qe,pointsUvs:L.isPoints===!0&&!!T.attributes.uv&&(Te||$),fog:!!I,useFog:E.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:te,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&mt.getTransfer(E.map.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===It,flipSided:E.side===tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ie&&E.extensions.derivatives===!0,extensionFragDepth:ie&&E.extensions.fragDepth===!0,extensionDrawBuffers:ie&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ie&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let D in E.defines)y.push(D),y.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(M(y,E),v(y,E),y.push(n.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function v(E,y){a.disableAll(),y.isWebGL2&&a.enable(0),y.supportsVertexTextures&&a.enable(1),y.instancing&&a.enable(2),y.instancingColor&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function _(E){let y=x[E.type],D;if(y){let F=oi[y];D=es.clone(F.uniforms)}else D=E.uniforms;return D}function R(E,y){let D;for(let F=0,L=c.length;F<L;F++){let I=c[F];if(I.cacheKey===y){D=I,++D.usedTimes;break}}return D===void 0&&(D=new My(n,y,E,r),c.push(D)),D}function b(E){if(--E.usedTimes===0){let y=c.indexOf(E);c[y]=c[c.length-1],c.pop(),E.destroy()}}function S(E){l.remove(E)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:_,acquireProgram:R,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:A}}function by(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function wy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function xf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function _f(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,p,m,x,g,d){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:x,renderOrder:f.renderOrder,z:g,group:d},n[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=g,u.group=d),e++,u}function a(f,p,m,x,g,d){let u=o(f,p,m,x,g,d);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(f,p,m,x,g,d){let u=o(f,p,m,x,g,d);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,p){t.length>1&&t.sort(f||wy),i.length>1&&i.sort(p||xf),s.length>1&&s.sort(p||xf)}function h(){for(let f=e,p=n.length;f<p;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ty(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new _f,n.set(i,[o])):s>=r.length?(o=new _f,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ay(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ce};break;case"SpotLight":t={position:new z,direction:new z,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Ry(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Py(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Iy(n,e){let t=new Ay,i=Ry(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new z);let r=new z,o=new lt,a=new lt;function l(h,f){let p=0,m=0,x=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let g=0,d=0,u=0,M=0,v=0,_=0,R=0,b=0,S=0,A=0,E=0;h.sort(Py);let y=f===!0?Math.PI:1;for(let F=0,L=h.length;F<L;F++){let I=h[F],T=I.color,U=I.intensity,H=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=T.r*U*y,m+=T.g*U*y,x+=T.b*U*y;else if(I.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(I.sh.coefficients[k],U);E++}else if(I.isDirectionalLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){let X=I.shadow,q=i.get(I);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,s.directionalShadow[g]=q,s.directionalShadowMap[g]=N,s.directionalShadowMatrix[g]=I.shadow.matrix,_++}s.directional[g]=k,g++}else if(I.isSpotLight){let k=t.get(I);k.position.setFromMatrixPosition(I.matrixWorld),k.color.copy(T).multiplyScalar(U*y),k.distance=H,k.coneCos=Math.cos(I.angle),k.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),k.decay=I.decay,s.spot[u]=k;let X=I.shadow;if(I.map&&(s.spotLightMap[S]=I.map,S++,X.updateMatrices(I),I.castShadow&&A++),s.spotLightMatrix[u]=X.matrix,I.castShadow){let q=i.get(I);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,s.spotShadow[u]=q,s.spotShadowMap[u]=N,b++}u++}else if(I.isRectAreaLight){let k=t.get(I);k.color.copy(T).multiplyScalar(U),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=k,M++}else if(I.isPointLight){let k=t.get(I);if(k.color.copy(I.color).multiplyScalar(I.intensity*y),k.distance=I.distance,k.decay=I.decay,I.castShadow){let X=I.shadow,q=i.get(I);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,s.pointShadow[d]=q,s.pointShadowMap[d]=N,s.pointShadowMatrix[d]=I.shadow.matrix,R++}s.point[d]=k,d++}else if(I.isHemisphereLight){let k=t.get(I);k.skyColor.copy(I.color).multiplyScalar(U*y),k.groundColor.copy(I.groundColor).multiplyScalar(U*y),s.hemi[v]=k,v++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_FLOAT_1,s.rectAreaLTC2=_e.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=_e.LTC_HALF_1,s.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=x;let D=s.hash;(D.directionalLength!==g||D.pointLength!==d||D.spotLength!==u||D.rectAreaLength!==M||D.hemiLength!==v||D.numDirectionalShadows!==_||D.numPointShadows!==R||D.numSpotShadows!==b||D.numSpotMaps!==S||D.numLightProbes!==E)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=M,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=b+S-A,s.spotLightMap.length=S,s.numSpotLightShadowsWithMaps=A,s.numLightProbes=E,D.directionalLength=g,D.pointLength=d,D.spotLength=u,D.rectAreaLength=M,D.hemiLength=v,D.numDirectionalShadows=_,D.numPointShadows=R,D.numSpotShadows=b,D.numSpotMaps=S,D.numLightProbes=E,s.version=Cy++)}function c(h,f){let p=0,m=0,x=0,g=0,d=0,u=f.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let _=h[M];if(_.isDirectionalLight){let R=s.directional[p];R.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),p++}else if(_.isSpotLight){let R=s.spot[x];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),x++}else if(_.isRectAreaLight){let R=s.rectArea[g];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(_.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(_.width*.5,0,0),R.halfHeight.set(0,_.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let R=s.point[m];R.position.setFromMatrixPosition(_.matrixWorld),R.position.applyMatrix4(u),m++}else if(_.isHemisphereLight){let R=s.hemi[d];R.direction.setFromMatrixPosition(_.matrixWorld),R.direction.transformDirection(u),d++}}}return{setup:l,setupView:c,state:s}}function vf(n,e){let t=new Iy(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Ly(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new vf(n,e),t.set(r,[l])):o>=a.length?(l=new vf(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function Ny(n,e,t){let i=new mo,s=new oe,r=new oe,o=new At,a=new fh({depthPacking:k0}),l=new ph,c={},h=t.maxTextureSize,f={[$i]:tn,[tn]:$i,[It]:It},p=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Dy,fragmentShader:Uy}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new Yt;x.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ne(x,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let u=this.type;this.render=function(b,S,A){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||b.length===0)return;let E=n.getRenderTarget(),y=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ai),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let L=u!==Ei&&this.type===Ei,I=u===Ei&&this.type!==Ei;for(let T=0,U=b.length;T<U;T++){let H=b[T],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let k=N.getFrameExtents();if(s.multiply(k),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,N.mapSize.y=r.y)),N.map===null||L===!0||I===!0){let q=this.type!==Ei?{minFilter:Mn,magFilter:Mn}:{};N.map!==null&&N.map.dispose(),N.map=new Sn(s.x,s.y,q),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();let X=N.getViewportCount();for(let q=0;q<X;q++){let te=N.getViewport(q);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),F.viewport(o),N.updateMatrices(H,q),i=N.getFrustum(),_(S,A,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===Ei&&M(N,A),N.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(E,y,D)};function M(b,S){let A=e.update(g);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Sn(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(S,null,A,p,g,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(S,null,A,m,g,null)}function v(b,S,A,E){let y=null,D=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)y=D;else if(y=A.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let F=y.uuid,L=S.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let T=I[L];T===void 0&&(T=y.clone(),I[L]=T,S.addEventListener("dispose",R)),y=T}if(y.visible=S.visible,y.wireframe=S.wireframe,E===Ei?y.side=S.shadowSide!==null?S.shadowSide:S.side:y.side=S.shadowSide!==null?S.shadowSide:f[S.side],y.alphaMap=S.alphaMap,y.alphaTest=S.alphaTest,y.map=S.map,y.clipShadows=S.clipShadows,y.clippingPlanes=S.clippingPlanes,y.clipIntersection=S.clipIntersection,y.displacementMap=S.displacementMap,y.displacementScale=S.displacementScale,y.displacementBias=S.displacementBias,y.wireframeLinewidth=S.wireframeLinewidth,y.linewidth=S.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=n.properties.get(y);F.light=A}return y}function _(b,S,A,E,y){if(b.visible===!1)return;if(b.layers.test(S.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Ei)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let L=e.update(b),I=b.material;if(Array.isArray(I)){let T=L.groups;for(let U=0,H=T.length;U<H;U++){let N=T[U],k=I[N.materialIndex];if(k&&k.visible){let X=v(b,k,E,y);b.onBeforeShadow(n,b,S,A,L,X,N),n.renderBufferDirect(A,null,L,X,b,N),b.onAfterShadow(n,b,S,A,L,X,N)}}}else if(I.visible){let T=v(b,I,E,y);b.onBeforeShadow(n,b,S,A,L,T,null),n.renderBufferDirect(A,null,L,T,b,null),b.onAfterShadow(n,b,S,A,L,T,null)}}let F=b.children;for(let L=0,I=F.length;L<I;L++)_(F[L],S,A,E,y)}function R(b){b.target.removeEventListener("dispose",R);for(let A in c){let E=c[A],y=b.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}function Oy(n,e,t){let i=t.isWebGL2;function s(){let O=!1,ee=new At,ie=null,Me=new At(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!O&&(n.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,qe,st,xt,Ot){Ot===!0&&(Ee*=xt,qe*=xt,st*=xt),ee.set(Ee,qe,st,xt),Me.equals(ee)===!1&&(n.clearColor(Ee,qe,st,xt),Me.copy(ee))},reset:function(){O=!1,ie=null,Me.set(-1,0,0,0)}}}function r(){let O=!1,ee=null,ie=null,Me=null;return{setTest:function(Ee){Ee?Fe(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!O&&(n.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(ie!==Ee){switch(Ee){case M0:n.depthFunc(n.NEVER);break;case S0:n.depthFunc(n.ALWAYS);break;case E0:n.depthFunc(n.LESS);break;case wa:n.depthFunc(n.LEQUAL);break;case b0:n.depthFunc(n.EQUAL);break;case w0:n.depthFunc(n.GEQUAL);break;case T0:n.depthFunc(n.GREATER);break;case A0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){Me!==Ee&&(n.clearDepth(Ee),Me=Ee)},reset:function(){O=!1,ee=null,ie=null,Me=null}}}function o(){let O=!1,ee=null,ie=null,Me=null,Ee=null,qe=null,st=null,xt=null,Ot=null;return{setTest:function(Ye){O||(Ye?Fe(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(Ye){ee!==Ye&&!O&&(n.stencilMask(Ye),ee=Ye)},setFunc:function(Ye,pt,_n){(ie!==Ye||Me!==pt||Ee!==_n)&&(n.stencilFunc(Ye,pt,_n),ie=Ye,Me=pt,Ee=_n)},setOp:function(Ye,pt,_n){(qe!==Ye||st!==pt||xt!==_n)&&(n.stencilOp(Ye,pt,_n),qe=Ye,st=pt,xt=_n)},setLocked:function(Ye){O=Ye},setClear:function(Ye){Ot!==Ye&&(n.clearStencil(Ye),Ot=Ye)},reset:function(){O=!1,ee=null,ie=null,Me=null,Ee=null,qe=null,st=null,xt=null,Ot=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,p={},m={},x=new WeakMap,g=[],d=null,u=!1,M=null,v=null,_=null,R=null,b=null,S=null,A=null,E=new Ce(0,0,0),y=0,D=!1,F=null,L=null,I=null,T=null,U=null,H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,k=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=k>=2);let q=null,te={},G=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),me=new At().fromArray(G),ye=new At().fromArray(K);function pe(O,ee,ie,Me){let Ee=new Uint8Array(4),qe=n.createTexture();n.bindTexture(O,qe),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<ie;st++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(ee,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(ee+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return qe}let Le={};Le[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Le[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Le[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Le[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(n.DEPTH_TEST),l.setFunc(wa),Se(!1),C(ju),Fe(n.CULL_FACE),Q(ai);function Fe(O){p[O]!==!0&&(n.enable(O),p[O]=!0)}function Te(O){p[O]!==!1&&(n.disable(O),p[O]=!1)}function He(O,ee){return m[O]!==ee?(n.bindFramebuffer(O,ee),m[O]=ee,i&&(O===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ee),O===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ee)),!0):!1}function B(O,ee){let ie=g,Me=!1;if(O)if(ie=x.get(ee),ie===void 0&&(ie=[],x.set(ee,ie)),O.isWebGLMultipleRenderTargets){let Ee=O.texture;if(ie.length!==Ee.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,st=Ee.length;qe<st;qe++)ie[qe]=n.COLOR_ATTACHMENT0+qe;ie.length=Ee.length,Me=!0}}else ie[0]!==n.COLOR_ATTACHMENT0&&(ie[0]=n.COLOR_ATTACHMENT0,Me=!0);else ie[0]!==n.BACK&&(ie[0]=n.BACK,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ge(O){return d!==O?(n.useProgram(O),d=O,!0):!1}let j={[vs]:n.FUNC_ADD,[o0]:n.FUNC_SUBTRACT,[a0]:n.FUNC_REVERSE_SUBTRACT};if(i)j[nd]=n.MIN,j[id]=n.MAX;else{let O=e.get("EXT_blend_minmax");O!==null&&(j[nd]=O.MIN_EXT,j[id]=O.MAX_EXT)}let fe={[l0]:n.ZERO,[c0]:n.ONE,[h0]:n.SRC_COLOR,[$c]:n.SRC_ALPHA,[g0]:n.SRC_ALPHA_SATURATE,[p0]:n.DST_COLOR,[d0]:n.DST_ALPHA,[u0]:n.ONE_MINUS_SRC_COLOR,[Jc]:n.ONE_MINUS_SRC_ALPHA,[m0]:n.ONE_MINUS_DST_COLOR,[f0]:n.ONE_MINUS_DST_ALPHA,[x0]:n.CONSTANT_COLOR,[_0]:n.ONE_MINUS_CONSTANT_COLOR,[v0]:n.CONSTANT_ALPHA,[y0]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(O,ee,ie,Me,Ee,qe,st,xt,Ot,Ye){if(O===ai){u===!0&&(Te(n.BLEND),u=!1);return}if(u===!1&&(Fe(n.BLEND),u=!0),O!==r0){if(O!==M||Ye!==D){if((v!==vs||b!==vs)&&(n.blendEquation(n.FUNC_ADD),v=vs,b=vs),Ye)switch(O){case qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nn:n.blendFunc(n.ONE,n.ONE);break;case ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case td:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nn:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ed:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case td:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}_=null,R=null,S=null,A=null,E.set(0,0,0),y=0,M=O,D=Ye}return}Ee=Ee||ee,qe=qe||ie,st=st||Me,(ee!==v||Ee!==b)&&(n.blendEquationSeparate(j[ee],j[Ee]),v=ee,b=Ee),(ie!==_||Me!==R||qe!==S||st!==A)&&(n.blendFuncSeparate(fe[ie],fe[Me],fe[qe],fe[st]),_=ie,R=Me,S=qe,A=st),(xt.equals(E)===!1||Ot!==y)&&(n.blendColor(xt.r,xt.g,xt.b,Ot),E.copy(xt),y=Ot),M=O,D=!1}function De(O,ee){O.side===It?Te(n.CULL_FACE):Fe(n.CULL_FACE);let ie=O.side===tn;ee&&(ie=!ie),Se(ie),O.blending===qi&&O.transparent===!1?Q(ai):Q(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);let Me=O.stencilWrite;c.setTest(Me),Me&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),V(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Fe(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(O){F!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),F=O)}function C(O){O!==n0?(Fe(n.CULL_FACE),O!==L&&(O===ju?n.cullFace(n.BACK):O===i0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),L=O}function w(O){O!==I&&(N&&n.lineWidth(O),I=O)}function V(O,ee,ie){O?(Fe(n.POLYGON_OFFSET_FILL),(T!==ee||U!==ie)&&(n.polygonOffset(ee,ie),T=ee,U=ie)):Te(n.POLYGON_OFFSET_FILL)}function le(O){O?Fe(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function re(O){O===void 0&&(O=n.TEXTURE0+H-1),q!==O&&(n.activeTexture(O),q=O)}function se(O,ee,ie){ie===void 0&&(q===null?ie=n.TEXTURE0+H-1:ie=q);let Me=te[ie];Me===void 0&&(Me={type:void 0,texture:void 0},te[ie]=Me),(Me.type!==O||Me.texture!==ee)&&(q!==ie&&(n.activeTexture(ie),q=ie),n.bindTexture(O,ee||Le[O]),Me.type=O,Me.texture=ee)}function Pe(){let O=te[q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(O){me.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),me.copy(O))}function at(O){ye.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ye.copy(O))}function ae(O,ee){let ie=f.get(ee);ie===void 0&&(ie=new WeakMap,f.set(ee,ie));let Me=ie.get(O);Me===void 0&&(Me=n.getUniformBlockIndex(ee,O.name),ie.set(O,Me))}function he(O,ee){let Me=f.get(ee).get(O);h.get(ee)!==Me&&(n.uniformBlockBinding(ee,Me,O.__bindingPointIndex),h.set(ee,Me))}function $(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},q=null,te={},m={},x=new WeakMap,g=[],d=null,u=!1,M=null,v=null,_=null,R=null,b=null,S=null,A=null,E=new Ce(0,0,0),y=0,D=!1,F=null,L=null,I=null,T=null,U=null,me.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Te,bindFramebuffer:He,drawBuffers:B,useProgram:ge,setBlending:Q,setMaterial:De,setFlipSided:Se,setCullFace:C,setLineWidth:w,setPolygonOffset:V,setScissorTest:le,activeTexture:re,bindTexture:se,unbindTexture:Pe,compressedTexImage2D:xe,compressedTexImage3D:be,texImage2D:Oe,texImage3D:Ae,updateUBOMapping:ae,uniformBlockBinding:he,texStorage2D:Qe,texStorage3D:ke,texSubImage2D:Be,texSubImage3D:Xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ke,scissor:Ze,viewport:at,reset:$}}function zy(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,w){return m?new OffscreenCanvas(C,w):Da("canvas")}function g(C,w,V,le){let re=1;if((C.width>le||C.height>le)&&(re=le/Math.max(C.width,C.height)),re<1||w===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let se=w?nh:Math.floor,Pe=se(re*C.width),xe=se(re*C.height);f===void 0&&(f=x(Pe,xe));let be=V?x(Pe,xe):f;return be.width=Pe,be.height=xe,be.getContext("2d").drawImage(C,0,0,Pe,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Pe+"x"+xe+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function d(C){return Nd(C.width)&&Nd(C.height)}function u(C){return a?!1:C.wrapS!==Qn||C.wrapT!==Qn||C.minFilter!==Mn&&C.minFilter!==kn}function M(C,w){return C.generateMipmaps&&w&&C.minFilter!==Mn&&C.minFilter!==kn}function v(C){n.generateMipmap(C)}function _(C,w,V,le,re=!1){if(a===!1)return w;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=w;if(w===n.RED&&(V===n.FLOAT&&(se=n.R32F),V===n.HALF_FLOAT&&(se=n.R16F),V===n.UNSIGNED_BYTE&&(se=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.R8UI),V===n.UNSIGNED_SHORT&&(se=n.R16UI),V===n.UNSIGNED_INT&&(se=n.R32UI),V===n.BYTE&&(se=n.R8I),V===n.SHORT&&(se=n.R16I),V===n.INT&&(se=n.R32I)),w===n.RG&&(V===n.FLOAT&&(se=n.RG32F),V===n.HALF_FLOAT&&(se=n.RG16F),V===n.UNSIGNED_BYTE&&(se=n.RG8)),w===n.RGBA){let Pe=re?Ra:mt.getTransfer(le);V===n.FLOAT&&(se=n.RGBA32F),V===n.HALF_FLOAT&&(se=n.RGBA16F),V===n.UNSIGNED_BYTE&&(se=Pe===vt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function R(C,w,V){return M(C,V)===!0||C.isFramebufferTexture&&C.minFilter!==Mn&&C.minFilter!==kn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function b(C){return C===Mn||C===sd||C===dc?n.NEAREST:n.LINEAR}function S(C){let w=C.target;w.removeEventListener("dispose",S),E(w),w.isVideoTexture&&h.delete(w)}function A(C){let w=C.target;w.removeEventListener("dispose",A),D(w)}function E(C){let w=i.get(C);if(w.__webglInit===void 0)return;let V=C.source,le=p.get(V);if(le){let re=le[w.__cacheKey];re.usedTimes--,re.usedTimes===0&&y(C),Object.keys(le).length===0&&p.delete(V)}i.remove(C)}function y(C){let w=i.get(C);n.deleteTexture(w.__webglTexture);let V=C.source,le=p.get(V);delete le[w.__cacheKey],o.memory.textures--}function D(C){let w=C.texture,V=i.get(C),le=i.get(w);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(V.__webglFramebuffer[re]))for(let se=0;se<V.__webglFramebuffer[re].length;se++)n.deleteFramebuffer(V.__webglFramebuffer[re][se]);else n.deleteFramebuffer(V.__webglFramebuffer[re]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[re])}else{if(Array.isArray(V.__webglFramebuffer))for(let re=0;re<V.__webglFramebuffer.length;re++)n.deleteFramebuffer(V.__webglFramebuffer[re]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let re=0;re<V.__webglColorRenderbuffer.length;re++)V.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[re]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let re=0,se=w.length;re<se;re++){let Pe=i.get(w[re]);Pe.__webglTexture&&(n.deleteTexture(Pe.__webglTexture),o.memory.textures--),i.remove(w[re])}i.remove(w),i.remove(C)}let F=0;function L(){F=0}function I(){let C=F;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),F+=1,C}function T(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function U(C,w){let V=i.get(C);if(C.isVideoTexture&&De(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let le=C.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,C,w);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function H(C,w){let V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function N(C,w){let V=i.get(C);if(C.version>0&&V.__version!==C.version){me(V,C,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function k(C,w){let V=i.get(C);if(C.version>0&&V.__version!==C.version){ye(V,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}let X={[Ri]:n.REPEAT,[Qn]:n.CLAMP_TO_EDGE,[jc]:n.MIRRORED_REPEAT},q={[Mn]:n.NEAREST,[sd]:n.NEAREST_MIPMAP_NEAREST,[dc]:n.NEAREST_MIPMAP_LINEAR,[kn]:n.LINEAR,[I0]:n.LINEAR_MIPMAP_NEAREST,[po]:n.LINEAR_MIPMAP_LINEAR},te={[V0]:n.NEVER,[$0]:n.ALWAYS,[W0]:n.LESS,[Xf]:n.LEQUAL,[X0]:n.EQUAL,[Z0]:n.GEQUAL,[q0]:n.GREATER,[Y0]:n.NOTEQUAL};function G(C,w,V){if(V?(n.texParameteri(C,n.TEXTURE_WRAP_S,X[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,X[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,X[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,q[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,q[w.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==Qn||w.wrapT!==Qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,b(w.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==Mn&&w.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Mn||w.minFilter!==dc&&w.minFilter!==po||w.type===Xi&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ei&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(C,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function K(C,w){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",S));let le=w.source,re=p.get(le);re===void 0&&(re={},p.set(le,re));let se=T(w);if(se!==C.__cacheKey){re[se]===void 0&&(re[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[se].usedTimes++;let Pe=re[C.__cacheKey];Pe!==void 0&&(re[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&y(w)),C.__cacheKey=se,C.__webglTexture=re[se].texture}return V}function me(C,w,V){let le=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=n.TEXTURE_3D);let re=K(C,w),se=w.source;t.bindTexture(le,C.__webglTexture,n.TEXTURE0+V);let Pe=i.get(se);if(se.version!==Pe.__version||re===!0){t.activeTexture(n.TEXTURE0+V);let xe=mt.getPrimaries(mt.workingColorSpace),be=w.colorSpace===Gn?null:mt.getPrimaries(w.colorSpace),Be=w.colorSpace===Gn||xe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Xe=u(w)&&d(w.image)===!1,ce=g(w.image,Xe,!1,s.maxTextureSize);ce=Se(w,ce);let Ke=d(ce)||a,Qe=r.convert(w.format,w.colorSpace),ke=r.convert(w.type),Oe=_(w.internalFormat,Qe,ke,w.colorSpace,w.isVideoTexture);G(le,w,Ke);let Ae,Ze=w.mipmaps,at=a&&w.isVideoTexture!==!0&&Oe!==Gf,ae=Pe.__version===void 0||re===!0,he=R(w,ce,Ke);if(w.isDepthTexture)Oe=n.DEPTH_COMPONENT,a?w.type===Xi?Oe=n.DEPTH_COMPONENT32F:w.type===Wi?Oe=n.DEPTH_COMPONENT24:w.type===Ss?Oe=n.DEPTH24_STENCIL8:Oe=n.DEPTH_COMPONENT16:w.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Es&&Oe===n.DEPTH_COMPONENT&&w.type!==Yh&&w.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Wi,ke=r.convert(w.type)),w.format===_r&&Oe===n.DEPTH_COMPONENT&&(Oe=n.DEPTH_STENCIL,w.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ss,ke=r.convert(w.type))),ae&&(at?t.texStorage2D(n.TEXTURE_2D,1,Oe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ce.width,ce.height,0,Qe,ke,null));else if(w.isDataTexture)if(Ze.length>0&&Ke){at&&ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,Ze[0].width,Ze[0].height);for(let $=0,O=Ze.length;$<O;$++)Ae=Ze[$],at?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Qe,ke,Ae.data):t.texImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Qe,ke,Ae.data);w.generateMipmaps=!1}else at?(ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Qe,ke,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,ce.width,ce.height,0,Qe,ke,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Oe,Ze[0].width,Ze[0].height,ce.depth);for(let $=0,O=Ze.length;$<O;$++)Ae=Ze[$],w.format!==jn?Qe!==null?at?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ae.width,Ae.height,ce.depth,Qe,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Oe,Ae.width,Ae.height,ce.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ae.width,Ae.height,ce.depth,Qe,ke,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Oe,Ae.width,Ae.height,ce.depth,0,Qe,ke,Ae.data)}else{at&&ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,Ze[0].width,Ze[0].height);for(let $=0,O=Ze.length;$<O;$++)Ae=Ze[$],w.format!==jn?Qe!==null?at?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Qe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Qe,ke,Ae.data):t.texImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Qe,ke,Ae.data)}else if(w.isDataArrayTexture)at?(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Oe,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Qe,ke,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ce.width,ce.height,ce.depth,0,Qe,ke,ce.data);else if(w.isData3DTexture)at?(ae&&t.texStorage3D(n.TEXTURE_3D,he,Oe,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Qe,ke,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ce.width,ce.height,ce.depth,0,Qe,ke,ce.data);else if(w.isFramebufferTexture){if(ae)if(at)t.texStorage2D(n.TEXTURE_2D,he,Oe,ce.width,ce.height);else{let $=ce.width,O=ce.height;for(let ee=0;ee<he;ee++)t.texImage2D(n.TEXTURE_2D,ee,Oe,$,O,0,Qe,ke,null),$>>=1,O>>=1}}else if(Ze.length>0&&Ke){at&&ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,Ze[0].width,Ze[0].height);for(let $=0,O=Ze.length;$<O;$++)Ae=Ze[$],at?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Qe,ke,Ae):t.texImage2D(n.TEXTURE_2D,$,Oe,Qe,ke,Ae);w.generateMipmaps=!1}else at?(ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Qe,ke,ce)):t.texImage2D(n.TEXTURE_2D,0,Oe,Qe,ke,ce);M(w,Ke)&&v(le),Pe.__version=se.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ye(C,w,V){if(w.image.length!==6)return;let le=K(C,w),re=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);let se=i.get(re);if(re.version!==se.__version||le===!0){t.activeTexture(n.TEXTURE0+V);let Pe=mt.getPrimaries(mt.workingColorSpace),xe=w.colorSpace===Gn?null:mt.getPrimaries(w.colorSpace),be=w.colorSpace===Gn||Pe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Be=w.isCompressedTexture||w.image[0].isCompressedTexture,Xe=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!Be&&!Xe?ce[$]=g(w.image[$],!1,!0,s.maxCubemapSize):ce[$]=Xe?w.image[$].image:w.image[$],ce[$]=Se(w,ce[$]);let Ke=ce[0],Qe=d(Ke)||a,ke=r.convert(w.format,w.colorSpace),Oe=r.convert(w.type),Ae=_(w.internalFormat,ke,Oe,w.colorSpace),Ze=a&&w.isVideoTexture!==!0,at=se.__version===void 0||le===!0,ae=R(w,Ke,Qe);G(n.TEXTURE_CUBE_MAP,w,Qe);let he;if(Be){Ze&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ae,Ke.width,Ke.height);for(let $=0;$<6;$++){he=ce[$].mipmaps;for(let O=0;O<he.length;O++){let ee=he[O];w.format!==jn?ke!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O,0,0,ee.width,ee.height,ke,ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O,Ae,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O,0,0,ee.width,ee.height,ke,Oe,ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O,Ae,ee.width,ee.height,0,ke,Oe,ee.data)}}}else{he=w.mipmaps,Ze&&at&&(he.length>0&&ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ae,ce[0].width,ce[0].height));for(let $=0;$<6;$++)if(Xe){Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,ke,Oe,ce[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ae,ce[$].width,ce[$].height,0,ke,Oe,ce[$].data);for(let O=0;O<he.length;O++){let ie=he[O].image[$].image;Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O+1,0,0,ie.width,ie.height,ke,Oe,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O+1,Ae,ie.width,ie.height,0,ke,Oe,ie.data)}}else{Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ke,Oe,ce[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ae,ke,Oe,ce[$]);for(let O=0;O<he.length;O++){let ee=he[O];Ze?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O+1,0,0,ke,Oe,ee.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,O+1,Ae,ke,Oe,ee.image[$])}}}M(w,Qe)&&v(n.TEXTURE_CUBE_MAP),se.__version=re.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function pe(C,w,V,le,re,se){let Pe=r.convert(V.format,V.colorSpace),xe=r.convert(V.type),be=_(V.internalFormat,Pe,xe,V.colorSpace);if(!i.get(w).__hasExternalTextures){let Xe=Math.max(1,w.width>>se),ce=Math.max(1,w.height>>se);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,se,be,Xe,ce,w.depth,0,Pe,xe,null):t.texImage2D(re,se,be,Xe,ce,0,Pe,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Q(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,re,i.get(V).__webglTexture,0,fe(w)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,re,i.get(V).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(C,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer&&!w.stencilBuffer){let le=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||Q(w)){let re=w.depthTexture;re&&re.isDepthTexture&&(re.type===Xi?le=n.DEPTH_COMPONENT32F:re.type===Wi&&(le=n.DEPTH_COMPONENT24));let se=fe(w);Q(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,le,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,le,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(w.depthBuffer&&w.stencilBuffer){let le=fe(w);V&&Q(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,w.width,w.height):Q(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let le=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let re=0;re<le.length;re++){let se=le[re],Pe=r.convert(se.format,se.colorSpace),xe=r.convert(se.type),be=_(se.internalFormat,Pe,xe,se.colorSpace),Be=fe(w);V&&Q(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,be,w.width,w.height):Q(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,be,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,be,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U(w.depthTexture,0);let le=i.get(w.depthTexture).__webglTexture,re=fe(w);if(w.depthTexture.format===Es)Q(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(w.depthTexture.format===_r)Q(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Te(C){let w=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Fe(w.__webglFramebuffer,C)}else if(V){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]=n.createRenderbuffer(),Le(w.__webglDepthbuffer[le],C,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Le(w.__webglDepthbuffer,C,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,w,V){let le=i.get(C);w!==void 0&&pe(le.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Te(C)}function B(C){let w=C.texture,V=i.get(C),le=i.get(w);C.addEventListener("dispose",A),C.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=w.version,o.memory.textures++);let re=C.isWebGLCubeRenderTarget===!0,se=C.isWebGLMultipleRenderTargets===!0,Pe=d(C)||a;if(re){V.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[xe]=[];for(let be=0;be<w.mipmaps.length;be++)V.__webglFramebuffer[xe][be]=n.createFramebuffer()}else V.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)V.__webglFramebuffer[xe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(se)if(s.drawBuffers){let xe=C.texture;for(let be=0,Be=xe.length;be<Be;be++){let Xe=i.get(xe[be]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Q(C)===!1){let xe=se?w:[w];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let be=0;be<xe.length;be++){let Be=xe[be];V.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[be]);let Xe=r.convert(Be.format,Be.colorSpace),ce=r.convert(Be.type),Ke=_(Be.internalFormat,Xe,ce,Be.colorSpace,C.isXRRenderTarget===!0),Qe=fe(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,Ke,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,V.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),G(n.TEXTURE_CUBE_MAP,w,Pe);for(let xe=0;xe<6;xe++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)pe(V.__webglFramebuffer[xe][be],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,be);else pe(V.__webglFramebuffer[xe],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);M(w,Pe)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){let xe=C.texture;for(let be=0,Be=xe.length;be<Be;be++){let Xe=xe[be],ce=i.get(Xe);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),G(n.TEXTURE_2D,Xe,Pe),pe(V.__webglFramebuffer,C,Xe,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),M(Xe,Pe)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,le.__webglTexture),G(xe,w,Pe),a&&w.mipmaps&&w.mipmaps.length>0)for(let be=0;be<w.mipmaps.length;be++)pe(V.__webglFramebuffer[be],C,w,n.COLOR_ATTACHMENT0,xe,be);else pe(V.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,xe,0);M(w,Pe)&&v(xe),t.unbindTexture()}C.depthBuffer&&Te(C)}function ge(C){let w=d(C)||a,V=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let le=0,re=V.length;le<re;le++){let se=V[le];if(M(se,w)){let Pe=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(se).__webglTexture;t.bindTexture(Pe,xe),v(Pe),t.unbindTexture()}}}function j(C){if(a&&C.samples>0&&Q(C)===!1){let w=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],V=C.width,le=C.height,re=n.COLOR_BUFFER_BIT,se=[],Pe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(C),be=C.isWebGLMultipleRenderTargets===!0;if(be)for(let Be=0;Be<w.length;Be++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){se.push(n.COLOR_ATTACHMENT0+Be),C.depthBuffer&&se.push(Pe);let Xe=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(Xe===!1&&(C.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Be]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Pe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Pe])),be){let ce=i.get(w[Be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,V,le,0,0,V,le,re,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Be=0;Be<w.length;Be++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Be]);let Xe=i.get(w[Be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Be,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function fe(C){return Math.min(s.maxSamples,C.samples)}function Q(C){let w=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(C){let w=o.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function Se(C,w){let V=C.colorSpace,le=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===th||V!==Ci&&V!==Gn&&(mt.getTransfer(V)===vt?a===!1?e.has("EXT_sRGB")===!0&&le===jn?(C.format=th,C.minFilter=kn,C.generateMipmaps=!1):w=Ua.sRGBToLinear(w):(le!==jn||re!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=N,this.setTextureCube=k,this.rebindTextures=He,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Q}function Fy(n,e,t){let i=t.isWebGL2;function s(r,o=Gn){let a,l=mt.getTransfer(o);if(r===Zi)return n.UNSIGNED_BYTE;if(r===zf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ff)return n.UNSIGNED_SHORT_5_5_5_1;if(r===L0)return n.BYTE;if(r===D0)return n.SHORT;if(r===Yh)return n.UNSIGNED_SHORT;if(r===Of)return n.INT;if(r===Wi)return n.UNSIGNED_INT;if(r===Xi)return n.FLOAT;if(r===ei)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===U0)return n.ALPHA;if(r===jn)return n.RGBA;if(r===N0)return n.LUMINANCE;if(r===O0)return n.LUMINANCE_ALPHA;if(r===Es)return n.DEPTH_COMPONENT;if(r===_r)return n.DEPTH_STENCIL;if(r===th)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===z0)return n.RED;if(r===Bf)return n.RED_INTEGER;if(r===F0)return n.RG;if(r===Hf)return n.RG_INTEGER;if(r===kf)return n.RGBA_INTEGER;if(r===fc||r===pc||r===mc||r===gc)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===fc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===fc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rd||r===od||r===ad||r===ld)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===rd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===od)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ad)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ld)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===cd||r===hd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===cd)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===hd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ud||r===dd||r===fd||r===pd||r===md||r===gd||r===xd||r===_d||r===vd||r===yd||r===Md||r===Sd||r===Ed||r===bd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ud)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===md)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_d)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Md)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ed)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bd)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xc||r===wd||r===Td)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===xc)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Td)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===B0||r===Ad||r===Rd||r===Cd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===xc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ad)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Cd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function Hy(n,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,Zf(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,M,v,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,_)):u.isMeshMatcapMaterial?(r(d,u),x(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),g(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?l(d,u,M,v):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===tn&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===tn&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let M=e.get(u).envMap;if(M&&(d.envMap.value=M,d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,M,v){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*M,d.scale.value=v*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),e.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,M){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===tn&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,u){u.matcap&&(d.matcap.value=u.matcap)}function g(d,u){let M=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ky(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let _=v.program;i.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(x(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",d));let R=v.program;i.updateUBOMapping(M,R);let b=e.render.frame;r[M.id]!==b&&(p(M),r[M.id]=b)}function h(M){let v=f();M.__bindingPointIndex=v;let _=n.createBuffer(),R=M.__size,b=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let v=s[M.id],_=M.uniforms,R=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,S=_.length;b<S;b++){let A=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,y=A.length;E<y;E++){let D=A[E];if(m(D,b,E,R)===!0){let F=D.__offset,L=Array.isArray(D.value)?D.value:[D.value],I=0;for(let T=0;T<L.length;T++){let U=L[T],H=g(U);typeof U=="number"||typeof U=="boolean"?(D.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,F+I,D.__data)):U.isMatrix3?(D.__data[0]=U.elements[0],D.__data[1]=U.elements[1],D.__data[2]=U.elements[2],D.__data[3]=0,D.__data[4]=U.elements[3],D.__data[5]=U.elements[4],D.__data[6]=U.elements[5],D.__data[7]=0,D.__data[8]=U.elements[6],D.__data[9]=U.elements[7],D.__data[10]=U.elements[8],D.__data[11]=0):(U.toArray(D.__data,I),I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,v,_,R){let b=M.value,S=v+"_"+_;if(R[S]===void 0)return typeof b=="number"||typeof b=="boolean"?R[S]=b:R[S]=b.clone(),!0;{let A=R[S];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return R[S]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function x(M){let v=M.uniforms,_=0,R=16;for(let S=0,A=v.length;S<A;S++){let E=Array.isArray(v[S])?v[S]:[v[S]];for(let y=0,D=E.length;y<D;y++){let F=E[y],L=Array.isArray(F.value)?F.value:[F.value];for(let I=0,T=L.length;I<T;I++){let U=L[I],H=g(U),N=_%R;N!==0&&R-N<H.boundary&&(_+=R-N),F.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=H.storage}}}let b=_%R;return b>0&&(_+=R-b),M.__size=_,M.__cache={},this}function g(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function d(M){let v=M.target;v.removeEventListener("dispose",d);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function xa(n,e,t,i,s,r){cr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(io.x=r*cr.x-s*cr.y,io.y=s*cr.x+r*cr.y):io.copy(cr),n.copy(e),n.x+=io.x,n.y+=io.y,n.applyMatrix4(tp)}function wf(n,e,t,i,s,r,o){let a=vh.distanceSqToPoint(n);if(a<t){let l=new z;vh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function Jh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Tf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Vy(n,e){let t=1-n;return t*t*e}function Wy(n,e){return 2*(1-n)*n*e}function Xy(n,e){return n*n*e}function ho(n,e,t,i){return Vy(n,e)+Wy(n,t)+Xy(n,i)}function qy(n,e){let t=1-n;return t*t*t*e}function Yy(n,e){let t=1-n;return 3*t*t*n*e}function Zy(n,e){return 3*(1-n)*n*n*e}function $y(n,e){return n*n*n*e}function uo(n,e,t,i,s){return qy(n,e)+Yy(n,t)+Zy(n,i)+$y(n,s)}function np(n,e,t,i,s){let r,o;if(s===dM(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Af(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Af(r,n[r],n[r+1],o);return o&&dl(o,o.next)&&(So(o),o=o.next),o}function As(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(dl(t,t.next)||Lt(t.prev,t,t.next)===0)){if(So(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function yo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&oM(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Qy(n,i,s,r):Ky(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),So(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=jy(As(n),e,t),yo(n,e,t,i,s,r,2)):o===2&&eM(n,e,t,i,s,r):yo(As(n),e,t,i,s,r,1);break}}}function Ky(n){let e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=f&&x.y<=m&&fr(s,a,r,l,o,c,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Qy(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Lt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,x=h<f?h<p?h:p:f<p?f:p,g=a>l?a>c?a:c:l>c?l:c,d=h>f?h>p?h:p:f>p?f:p,u=Rh(m,x,e,t,i),M=Rh(g,d,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=u&&_&&_.z<=M;){if(v.x>=m&&v.x<=g&&v.y>=x&&v.y<=d&&v!==s&&v!==o&&fr(a,h,l,f,c,p,v.x,v.y)&&Lt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=m&&_.x<=g&&_.y>=x&&_.y<=d&&_!==s&&_!==o&&fr(a,h,l,f,c,p,_.x,_.y)&&Lt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=u;){if(v.x>=m&&v.x<=g&&v.y>=x&&v.y<=d&&v!==s&&v!==o&&fr(a,h,l,f,c,p,v.x,v.y)&&Lt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=d&&_!==s&&_!==o&&fr(a,h,l,f,c,p,_.x,_.y)&&Lt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function jy(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!dl(s,r)&&ip(s,i,i.next,r)&&Mo(s,r)&&Mo(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),So(i),So(i.next),i=n=r),i=i.next}while(i!==n);return As(i)}function eM(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cM(o,a)){let l=sp(o,a);o=As(o,o.next),l=As(l,l.next),yo(o,e,t,i,s,r,0),yo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function tM(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=np(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(lM(c));for(s.sort(nM),r=0;r<s.length;r++)t=iM(s[r],t);return t}function nM(n,e){return n.x-e.x}function iM(n,e){let t=sM(n,e);if(!t)return e;let i=sp(t,n);return As(i,i.next),As(t,t.next)}function sM(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&fr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Mo(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&rM(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function rM(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function oM(n,e,t,i){let s=n;do s.z===0&&(s.z=Rh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,aM(s)}function aM(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Rh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function lM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function fr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function cM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!hM(n,e)&&(Mo(n,e)&&Mo(e,n)&&uM(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||dl(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function dl(n,e){return n.x===e.x&&n.y===e.y}function ip(n,e,t,i){let s=Ea(Lt(n,e,t)),r=Ea(Lt(n,e,i)),o=Ea(Lt(t,i,n)),a=Ea(Lt(t,i,e));return!!(s!==r&&o!==a||s===0&&Sa(n,t,e)||r===0&&Sa(n,i,e)||o===0&&Sa(t,n,i)||a===0&&Sa(t,e,i))}function Sa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ea(n){return n>0?1:n<0?-1:0}function hM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ip(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Mo(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function uM(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function sp(n,e){let t=new Ch(n.i,n.x,n.y),i=new Ch(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Af(n,e,t,i){let s=new Ch(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function So(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ch(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function dM(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function Rf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Cf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function pM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function ba(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function mM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Df(){return(typeof performance>"u"?Date:performance).now()}var n0,ju,i0,ll,s0,Ei,$i,tn,It,ai,qi,nn,ed,td,r0,vs,o0,a0,nd,id,l0,c0,h0,u0,$c,Jc,d0,f0,p0,m0,g0,x0,_0,v0,y0,M0,S0,E0,wa,b0,w0,T0,A0,Uf,R0,C0,Yi,Vh,Wh,Xh,wo,P0,qh,Nf,gr,xr,Kc,Qc,cl,Ri,Qn,jc,Mn,sd,dc,kn,I0,po,Zi,L0,D0,Yh,Of,Wi,Xi,ei,zf,Ff,Ss,U0,jn,N0,O0,Es,_r,z0,Bf,F0,Hf,kf,fc,pc,mc,gc,rd,od,ad,ld,Gf,cd,hd,ud,dd,fd,pd,md,gd,xd,_d,vd,yd,Md,Sd,Ed,bd,xc,wd,Td,B0,Ad,Rd,Cd,Ta,Aa,_c,Pd,Id,Ld,Vf,bs,H0,k0,Wf,G0,Gn,gt,Ci,Zh,hl,Ra,vt,Ca,Pa,Ws,Dd,V0,W0,X0,Xf,q0,Y0,Z0,$0,eh,Ud,th,Ti,Ia,Ji,cn,vc,La,oe,it,Mc,Od,zd,Fd,Yo,Q0,mt,Xs,Ua,j0,Na,eg,Vn,At,ih,Sn,Oa,sh,An,z,bc,Bd,Pi,_i,$n,Zo,qs,Ys,Zs,Bi,Hi,ps,Qr,$o,Jo,ms,tg,jr,Tc,Ki,vi,Ac,Ko,ki,Rc,Qo,Cc,za,lt,$s,Jn,ng,ig,Gi,jo,Un,Hd,kd,Fa,Ba,sg,Gd,Js,yi,ea,eo,rg,og,Vd,Wd,Xd,ag,lg,kt,Kn,Mi,Pc,Si,Ks,Qs,qd,Ic,Lc,Dc,ta,Ms,Yf,Vi,na,Ce,hn,cg,Ii,dt,qt,ia,un,Ha,ka,ct,hg,Hn,Nc,js,Nn,to,jt,Yt,Yd,gs,sa,Zd,er,tr,nr,Oc,ra,oa,aa,la,$d,Jd,Kd,ca,ha,ne,Ie,es,fg,pg,Zt,Ga,rn,ir,sr,rh,Va,oh,zc,mg,gg,bi,xs,da,mo,rt,_g,vg,yg,Mg,Sg,Eg,bg,wg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Og,zg,Fg,Bg,Hg,kg,Gg,Vg,Wg,Xg,qg,Yg,Zg,$g,Jg,Kg,Qg,jg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,_x,vx,yx,Mx,Sx,Ex,bx,wx,Tx,Ax,Rx,Cx,Px,Ix,Lx,Dx,Ux,Nx,Ox,zx,Fx,Bx,Hx,kx,Gx,Vx,Wx,Xx,qx,Yx,Zx,$x,Jx,Kx,Qx,jx,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,x_,__,v_,y_,M_,S_,E_,b_,w_,T_,A_,R_,C_,P_,I_,L_,D_,U_,N_,O_,z_,F_,B_,H_,k_,G_,V_,W_,X_,q_,Y_,Z_,$_,J_,je,_e,oi,fa,yr,ur,Qd,ys,Fc,jd,Bc,Hc,kc,_s,rr,ef,Mr,Wa,Jf,Kf,Qf,jf,ep,rf,of,af,lf,cf,ah,lh,ch,Gc,mr,ty,ny,uy,dy,py,Sy,uh,dh,Cy,fh,ph,Dy,Uy,mh,ut,By,co,gh,go,xh,Xa,Sr,_h,vn,qa,ws,or,no,ar,lr,cr,io,tp,ma,so,ga,yf,Vc,Mf,Er,Ya,hr,Sf,_a,Ef,Gy,ro,oo,Rt,xo,bf,vh,va,ya,Za,on,Wn,_o,yh,Ma,Wc,Xc,qc,Mh,$a,Sh,Ja,Eh,Ka,bh,Qa,wh,Th,Ts,Ah,ja,br,St,wr,vo,Jy,fo,el,fM,Qi,sn,tl,nl,ve,ji,Tr,Ph,Ih,Lh,ti,Rs,Dh,Uh,Nh,Eo,Cs,Oh,zh,gM,Fh,Ar,il,Yc,Pf,If,bo,Bh,sl,Lf,ao,Zc,Hh,rl,kh,ol,al,Kh,xM,Qh,_M,vM,yM,MM,SM,EM,bM,Gh,Tt,zE,Dt=Dn(()=>{n0=0,ju=1,i0=2,ll=1,s0=2,Ei=3,$i=0,tn=1,It=2,ai=0,qi=1,nn=2,ed=3,td=4,r0=5,vs=100,o0=101,a0=102,nd=103,id=104,l0=200,c0=201,h0=202,u0=203,$c=204,Jc=205,d0=206,f0=207,p0=208,m0=209,g0=210,x0=211,_0=212,v0=213,y0=214,M0=0,S0=1,E0=2,wa=3,b0=4,w0=5,T0=6,A0=7,Uf=0,R0=1,C0=2,Yi=0,Vh=1,Wh=2,Xh=3,wo=4,P0=5,qh=6,Nf=300,gr=301,xr=302,Kc=303,Qc=304,cl=306,Ri=1e3,Qn=1001,jc=1002,Mn=1003,sd=1004,dc=1005,kn=1006,I0=1007,po=1008,Zi=1009,L0=1010,D0=1011,Yh=1012,Of=1013,Wi=1014,Xi=1015,ei=1016,zf=1017,Ff=1018,Ss=1020,U0=1021,jn=1023,N0=1024,O0=1025,Es=1026,_r=1027,z0=1028,Bf=1029,F0=1030,Hf=1031,kf=1033,fc=33776,pc=33777,mc=33778,gc=33779,rd=35840,od=35841,ad=35842,ld=35843,Gf=36196,cd=37492,hd=37496,ud=37808,dd=37809,fd=37810,pd=37811,md=37812,gd=37813,xd=37814,_d=37815,vd=37816,yd=37817,Md=37818,Sd=37819,Ed=37820,bd=37821,xc=36492,wd=36494,Td=36495,B0=36283,Ad=36284,Rd=36285,Cd=36286,Ta=2300,Aa=2301,_c=2302,Pd=2400,Id=2401,Ld=2402,Vf=3e3,bs=3001,H0=3200,k0=3201,Wf=0,G0=1,Gn="",gt="srgb",Ci="srgb-linear",Zh="display-p3",hl="display-p3-linear",Ra="linear",vt="srgb",Ca="rec709",Pa="p3",Ws=7680,Dd=519,V0=512,W0=513,X0=514,Xf=515,q0=516,Y0=517,Z0=518,$0=519,eh=35044,Ud="300 es",th=1035,Ti=2e3,Ia=2001,Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,La=180/Math.PI;oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},it=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],m=i[5],x=i[8],g=s[0],d=s[3],u=s[6],M=s[1],v=s[4],_=s[7],R=s[2],b=s[5],S=s[8];return r[0]=o*g+a*M+l*R,r[3]=o*d+a*v+l*b,r[6]=o*u+a*_+l*S,r[1]=c*g+h*M+f*R,r[4]=c*d+h*v+f*b,r[7]=c*u+h*_+f*S,r[2]=p*g+m*M+x*R,r[5]=p*d+m*v+x*b,r[8]=p*u+m*_+x*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,p=a*l-h*r,m=c*r-o*l,x=t*f+i*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=f*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=p*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mc.makeScale(e,t)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mc=new it;Od={};zd=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fd=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yo={[Ci]:{transfer:Ra,primaries:Ca,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:vt,primaries:Ca,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[hl]:{transfer:Ra,primaries:Pa,toReference:n=>n.applyMatrix3(Fd),fromReference:n=>n.applyMatrix3(zd)},[Zh]:{transfer:vt,primaries:Pa,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Fd),fromReference:n=>n.applyMatrix3(zd).convertLinearToSRGB()}},Q0=new Set([Ci,hl]),mt={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Q0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Yo[e].toReference,s=Yo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Yo[n].primaries},getTransfer:function(n){return n===Gn?Ra:Yo[n].transfer}};Ua=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=Da("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Da("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},j0=0,Na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=Ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ec(s[o].image)):r.push(Ec(s[o]))}else r=Ec(s);i.url=r}return t||(e.images[this.uuid]=i),i}};eg=0,Vn=class n extends Ji{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Qn,s=Qn,r=kn,o=po,a=jn,l=Zi,c=n.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Ai(),this.name="",this.source=new Na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bs?gt:Gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?bs:Vf}set encoding(e){lo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bs?gt:Gn}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Nf;Vn.DEFAULT_ANISOTROPY=1;At=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],x=l[9],g=l[2],d=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-g)<.01&&Math.abs(x-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+g)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(m+1)/2,R=(u+1)/2,b=(h+p)/4,S=(f+g)/4,A=(x+d)/4;return v>_&&v>R?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=b/i,r=S/i):_>R?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=A/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=S/r,s=A/r),this.set(i,s,r,t),this}let M=Math.sqrt((d-x)*(d-x)+(f-g)*(f-g)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(d-x)/M,this.y=(f-g)/M,this.z=(p-h)/M,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ih=class extends Ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(lo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===bs?gt:Gn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Vn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends ih{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Oa=class extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sh=class extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},An=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],p=r[o+0],m=r[o+1],x=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(f!==g||l!==p||c!==m||h!==x){let d=1-a,u=l*p+c*m+h*x+f*g,M=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let R=Math.sqrt(v),b=Math.atan2(R,u*M);d=Math.sin(d*b)/R,a=Math.sin(a*b)/R}let _=a*M;if(l=l*d+p*_,c=c*d+m*_,h=h*d+x*_,f=f*d+g*_,d===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+h*f+l*m-c*p,e[t+1]=l*x+h*p+c*f-a*m,e[t+2]=c*x+h*m+a*p-l*f,e[t+3]=h*x-a*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),p=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f-p*m*x;break;case"YXZ":this._x=p*h*f+c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f+p*m*x;break;case"ZXY":this._x=p*h*f-c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f-p*m*x;break;case"ZYX":this._x=p*h*f-c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f+p*m*x;break;case"YZX":this._x=p*h*f+c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f-p*m*x;break;case"XZY":this._x=p*h*f-c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=i+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bc.copy(this).projectOnVector(e),this.sub(bc)}reflect(e){return this.sub(bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bc=new z,Bd=new An,Pi=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$n):$n.fromBufferAttribute(r,o),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zo.copy(i.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),$o.subVectors(this.max,Qr),qs.subVectors(e.a,Qr),Ys.subVectors(e.b,Qr),Zs.subVectors(e.c,Qr),Bi.subVectors(Ys,qs),Hi.subVectors(Zs,Ys),ps.subVectors(qs,Zs);let t=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-ps.z,ps.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,ps.z,0,-ps.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-ps.y,ps.x,0];return!wc(t,qs,Ys,Zs,$o)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,qs,Ys,Zs,$o))?!1:(Jo.crossVectors(Bi,Hi),t=[Jo.x,Jo.y,Jo.z],wc(t,qs,Ys,Zs,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},_i=[new z,new z,new z,new z,new z,new z,new z,new z],$n=new z,Zo=new Pi,qs=new z,Ys=new z,Zs=new z,Bi=new z,Hi=new z,ps=new z,Qr=new z,$o=new z,Jo=new z,ms=new z;tg=new Pi,jr=new z,Tc=new z,Ki=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(jr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Tc)),this.expandByPoint(jr.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vi=new z,Ac=new z,Ko=new z,ki=new z,Rc=new z,Qo=new z,Cc=new z,za=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ac.copy(e).add(t).multiplyScalar(.5),Ko.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Ac);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ko),a=ki.dot(this.direction),l=-ki.dot(Ko),c=ki.lengthSq(),h=Math.abs(1-o*o),f,p,m,x;if(h>0)if(f=o*l-a,p=o*a-l,x=r*h,f>=0)if(p>=-x)if(p<=x){let g=1/h;f*=g,p*=g,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ac).addScaledVector(Ko,p),m}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,s,r){Rc.subVectors(t,e),Qo.subVectors(i,e),Cc.crossVectors(Rc,Qo);let o=this.direction.dot(Cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);let l=a*this.direction.dot(Qo.crossVectors(ki,Qo));if(l<0)return null;let c=a*this.direction.dot(Rc.cross(ki));if(c<0||l+c>o)return null;let h=-a*ki.dot(Cc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class n{constructor(e,t,i,s,r,o,a,l,c,h,f,p,m,x,g,d){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,p,m,x,g,d)}set(e,t,i,s,r,o,a,l,c,h,f,p,m,x,g,d){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=x,u[11]=g,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),r=1/$s.setFromMatrixColumn(e,1).length(),o=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*f,x=a*h,g=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*f,x=c*h,g=c*f;t[0]=p+g*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*f,x=c*h,g=c*f;t[0]=p-g*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*f,x=a*h,g=a*f;t[0]=l*h,t[4]=x*c-m,t[8]=p*c+g,t[1]=l*f,t[5]=g*c+p,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-p*f,t[8]=x*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+x,t[10]=p-g*f}else if(e.order==="XZY"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+g,t[5]=o*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*h,t[10]=g*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,i){let s=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Gi.crossVectors(i,Un),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Gi.crossVectors(i,Un)),Gi.normalize(),jo.crossVectors(Un,Gi),s[0]=Gi.x,s[4]=jo.x,s[8]=Un.x,s[1]=Gi.y,s[5]=jo.y,s[9]=Un.y,s[2]=Gi.z,s[6]=jo.z,s[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],m=i[13],x=i[2],g=i[6],d=i[10],u=i[14],M=i[3],v=i[7],_=i[11],R=i[15],b=s[0],S=s[4],A=s[8],E=s[12],y=s[1],D=s[5],F=s[9],L=s[13],I=s[2],T=s[6],U=s[10],H=s[14],N=s[3],k=s[7],X=s[11],q=s[15];return r[0]=o*b+a*y+l*I+c*N,r[4]=o*S+a*D+l*T+c*k,r[8]=o*A+a*F+l*U+c*X,r[12]=o*E+a*L+l*H+c*q,r[1]=h*b+f*y+p*I+m*N,r[5]=h*S+f*D+p*T+m*k,r[9]=h*A+f*F+p*U+m*X,r[13]=h*E+f*L+p*H+m*q,r[2]=x*b+g*y+d*I+u*N,r[6]=x*S+g*D+d*T+u*k,r[10]=x*A+g*F+d*U+u*X,r[14]=x*E+g*L+d*H+u*q,r[3]=M*b+v*y+_*I+R*N,r[7]=M*S+v*D+_*T+R*k,r[11]=M*A+v*F+_*U+R*X,r[15]=M*E+v*L+_*H+R*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],m=e[14],x=e[3],g=e[7],d=e[11],u=e[15];return x*(+r*l*f-s*c*f-r*a*p+i*c*p+s*a*m-i*l*m)+g*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+d*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-t*l*f+t*a*p+s*o*f-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],m=e[11],x=e[12],g=e[13],d=e[14],u=e[15],M=f*d*c-g*p*c+g*l*m-a*d*m-f*l*u+a*p*u,v=x*p*c-h*d*c-x*l*m+o*d*m+h*l*u-o*p*u,_=h*g*c-x*f*c+x*a*m-o*g*m-h*a*u+o*f*u,R=x*f*l-h*g*l-x*a*p+o*g*p+h*a*d-o*f*d,b=t*M+i*v+s*_+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/b;return e[0]=M*S,e[1]=(g*p*r-f*d*r-g*s*m+i*d*m+f*s*u-i*p*u)*S,e[2]=(a*d*r-g*l*r+g*s*c-i*d*c-a*s*u+i*l*u)*S,e[3]=(f*l*r-a*p*r-f*s*c+i*p*c+a*s*m-i*l*m)*S,e[4]=v*S,e[5]=(h*d*r-x*p*r+x*s*m-t*d*m-h*s*u+t*p*u)*S,e[6]=(x*l*r-o*d*r-x*s*c+t*d*c+o*s*u-t*l*u)*S,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*S,e[8]=_*S,e[9]=(x*f*r-h*g*r-x*i*m+t*g*m+h*i*u-t*f*u)*S,e[10]=(o*g*r-x*a*r+x*i*c-t*g*c-o*i*u+t*a*u)*S,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*m-t*a*m)*S,e[12]=R*S,e[13]=(h*g*s-x*f*s+x*i*p-t*g*p-h*i*d+t*f*d)*S,e[14]=(x*a*s-o*g*s-x*i*l+t*g*l+o*i*d-t*a*d)*S,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*p+t*a*p)*S,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,p=r*c,m=r*h,x=r*f,g=o*h,d=o*f,u=a*f,M=l*c,v=l*h,_=l*f,R=i.x,b=i.y,S=i.z;return s[0]=(1-(g+u))*R,s[1]=(m+_)*R,s[2]=(x-v)*R,s[3]=0,s[4]=(m-_)*b,s[5]=(1-(p+u))*b,s[6]=(d+M)*b,s[7]=0,s[8]=(x+v)*S,s[9]=(d-M)*S,s[10]=(1-(p+g))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=$s.set(s[0],s[1],s[2]).length(),o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);let c=1/r,h=1/o,f=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,t.setFromRotationMatrix(Jn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ti){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s),m,x;if(a===Ti)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ia)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ti){let l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),p=(t+e)*c,m=(i+s)*h,x,g;if(a===Ti)x=(o+r)*f,g=-2*f;else if(a===Ia)x=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},$s=new z,Jn=new lt,ng=new z(0,0,0),ig=new z(1,1,1),Gi=new z,jo=new z,Un=new z,Hd=new lt,kd=new An,Fa=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fa.DEFAULT_ORDER="XYZ";Ba=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sg=0,Gd=new z,Js=new An,yi=new lt,ea=new z,eo=new z,rg=new z,og=new An,Vd=new z(1,0,0),Wd=new z(0,1,0),Xd=new z(0,0,1),ag={type:"added"},lg={type:"removed"},kt=class n extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new Fa,i=new An,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new it}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ea.copy(e):ea.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(eo,ea,this.up):yi.lookAt(ea,eo,this.up),this.quaternion.setFromRotationMatrix(yi),s&&(yi.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(yi),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ag)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lg)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};kt.DEFAULT_UP=new z(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Kn=new z,Mi=new z,Pc=new z,Si=new z,Ks=new z,Qs=new z,qd=new z,Ic=new z,Lc=new z,Dc=new z,ta=!1,Ms=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),Mi.subVectors(i,t),Pc.subVectors(e,t);let o=Kn.dot(Kn),a=Kn.dot(Mi),l=Kn.dot(Pc),c=Mi.dot(Mi),h=Mi.dot(Pc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,t,i,s,r,o,a,l){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),Mi.subVectors(e,t),Kn.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Kn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return ta===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ta=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ks.subVectors(s,i),Qs.subVectors(r,i),Ic.subVectors(e,i);let l=Ks.dot(Ic),c=Qs.dot(Ic);if(l<=0&&c<=0)return t.copy(i);Lc.subVectors(e,s);let h=Ks.dot(Lc),f=Qs.dot(Lc);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ks,o);Dc.subVectors(e,r);let m=Ks.dot(Dc),x=Qs.dot(Dc);if(x>=0&&m<=x)return t.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Qs,a);let d=h*x-m*f;if(d<=0&&f-h>=0&&m-x>=0)return qd.subVectors(r,s),a=(f-h)/(f-h+(m-x)),t.copy(s).addScaledVector(qd,a);let u=1/(d+g+p);return o=g*u,a=p*u,t.copy(i).addScaledVector(Ks,o).addScaledVector(Qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},na={h:0,s:0,l:0};Ce=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=mt.workingColorSpace){if(e=J0(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Uc(o,r,e+1/3),this.g=Uc(o,r,e),this.b=Uc(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=gt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let i=Yf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Sc(e.r),this.g=Sc(e.g),this.b=Sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return mt.fromWorkingColorSpace(hn.copy(this),e),Math.round(en(hn.r*255,0,255))*65536+Math.round(en(hn.g*255,0,255))*256+Math.round(en(hn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(hn.copy(this),t);let i=hn.r,s=hn.g,r=hn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(hn.copy(this),t),e.r=hn.r,e.g=hn.g,e.b=hn.b,e}getStyle(e=gt){mt.fromWorkingColorSpace(hn.copy(this),e);let t=hn.r,i=hn.g,s=hn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(na);let i=yc(Vi.h,na.h,t),s=yc(Vi.s,na.s,t),r=yc(Vi.l,na.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hn=new Ce;Ce.NAMES=Yf;cg=0,Ii=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=qi,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Jc,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$c&&(i.blendSrc=this.blendSrc),this.blendDst!==Jc&&(i.blendDst=this.blendDst),this.blendEquation!==vs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},dt=class extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Uf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},qt=new z,ia=new oe,un=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eh&&(e.usage=this.usage),e}},Ha=class extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ka=class extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}},ct=class extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}},hg=0,Hn=new lt,Nc=new kt,js=new z,Nn=new Pi,to=new Pi,jt=new z,Yt=class n extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qf(e)?ka:Ha)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new it().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];to.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Nn.min,to.min),Nn.expandByPoint(jt),jt.addVectors(Nn.max,to.max),Nn.expandByPoint(jt)):(Nn.expandByPoint(to.min),Nn.expandByPoint(to.max))}Nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)jt.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(e,c),jt.add(js)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<a;y++)c[y]=new z,h[y]=new z;let f=new z,p=new z,m=new z,x=new oe,g=new oe,d=new oe,u=new z,M=new z;function v(y,D,F){f.fromArray(s,y*3),p.fromArray(s,D*3),m.fromArray(s,F*3),x.fromArray(o,y*2),g.fromArray(o,D*2),d.fromArray(o,F*2),p.sub(f),m.sub(f),g.sub(x),d.sub(x);let L=1/(g.x*d.y-d.x*g.y);isFinite(L)&&(u.copy(p).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(L),M.copy(m).multiplyScalar(g.x).addScaledVector(p,-d.x).multiplyScalar(L),c[y].add(u),c[D].add(u),c[F].add(u),h[y].add(M),h[D].add(M),h[F].add(M))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let y=0,D=_.length;y<D;++y){let F=_[y],L=F.start,I=F.count;for(let T=L,U=L+I;T<U;T+=3)v(i[T+0],i[T+1],i[T+2])}let R=new z,b=new z,S=new z,A=new z;function E(y){S.fromArray(r,y*3),A.copy(S);let D=c[y];R.copy(D),R.sub(S.multiplyScalar(S.dot(D))).normalize(),b.crossVectors(A,D);let L=b.dot(h[y])<0?-1:1;l[y*4]=R.x,l[y*4+1]=R.y,l[y*4+2]=R.z,l[y*4+3]=L}for(let y=0,D=_.length;y<D;++y){let F=_[y],L=F.start,I=F.count;for(let T=L,U=L+I;T<U;T+=3)E(i[T+0]),E(i[T+1]),E(i[T+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,f=new z;if(e)for(let p=0,m=e.count;p<m;p+=3){let x=e.getX(p+0),g=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,d),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),m=0,x=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let u=0;u<h;u++)p[x++]=c[m++]}return new un(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yd=new lt,gs=new za,sa=new Ki,Zd=new z,er=new z,tr=new z,nr=new z,Oc=new z,ra=new z,oa=new oe,aa=new oe,la=new oe,$d=new z,Jd=new z,Kd=new z,ca=new z,ha=new z,ne=class extends kt{constructor(e=new Yt,t=new dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ra.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Oc.fromBufferAttribute(f,e),o?ra.addScaledVector(Oc,h):ra.addScaledVector(Oc.sub(t),h))}t.add(ra)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sa.copy(i.boundingSphere),sa.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(sa.containsPoint(gs.origin)===!1&&(gs.intersectSphere(sa,Zd)===null||gs.origin.distanceToSquared(Zd)>(e.far-e.near)**2))&&(Yd.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let d=p[x],u=o[d.materialIndex],M=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let _=M,R=v;_<R;_+=3){let b=a.getX(_),S=a.getX(_+1),A=a.getX(_+2);s=ua(this,u,e,i,c,h,f,b,S,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let d=x,u=g;d<u;d+=3){let M=a.getX(d),v=a.getX(d+1),_=a.getX(d+2);s=ua(this,o,e,i,c,h,f,M,v,_),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let d=p[x],u=o[d.materialIndex],M=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let _=M,R=v;_<R;_+=3){let b=_,S=_+1,A=_+2;s=ua(this,u,e,i,c,h,f,b,S,A),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=x,u=g;d<u;d+=3){let M=d,v=d+1,_=d+2;s=ua(this,o,e,i,c,h,f,M,v,_),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};Ie=class n extends Yt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,m=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function x(g,d,u,M,v,_,R,b,S,A,E){let y=_/S,D=R/A,F=_/2,L=R/2,I=b/2,T=S+1,U=A+1,H=0,N=0,k=new z;for(let X=0;X<U;X++){let q=X*D-L;for(let te=0;te<T;te++){let G=te*y-F;k[g]=G*M,k[d]=q*v,k[u]=I,c.push(k.x,k.y,k.z),k[g]=0,k[d]=0,k[u]=b>0?1:-1,h.push(k.x,k.y,k.z),f.push(te/S),f.push(1-X/A),H+=1}}for(let X=0;X<A;X++)for(let q=0;q<S;q++){let te=p+q+T*X,G=p+q+T*(X+1),K=p+(q+1)+T*(X+1),me=p+(q+1)+T*X;l.push(te,G,me),l.push(G,K,me),N+=6}a.addGroup(m,N,E),m+=N,p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};es={clone:vr,merge:yn},fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zt=class extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fg,this.fragmentShader=pg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ga=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rn=class extends Ga{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(vc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,rh=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new rn(ir,sr,e,t);r.layers=this.layers,this.add(r);let o=new rn(ir,sr,e,t);o.layers=this.layers,this.add(o);let a=new rn(ir,sr,e,t);a.layers=this.layers,this.add(a);let l=new rn(ir,sr,e,t);l.layers=this.layers,this.add(l);let c=new rn(ir,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Va=class extends Vn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:gr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oh=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(lo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bs?gt:Gn),this.texture=new Va(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ie(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:vr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:ai});r.uniforms.tEquirect.value=t;let o=new ne(s,r),a=t.minFilter;return t.minFilter===po&&(t.minFilter=kn),new rh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},zc=new z,mg=new z,gg=new it,bi=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=zc.subVectors(i,t).cross(mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(zc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||gg.getNormalMatrix(e),s=this.coplanarPoint(zc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new Ki,da=new z,mo=class{constructor(e=new bi,t=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],m=s[8],x=s[9],g=s[10],d=s[11],u=s[12],M=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-r,p-c,d-m,_-u).normalize(),i[1].setComponents(l+r,p+c,d+m,_+u).normalize(),i[2].setComponents(l+o,p+h,d+x,_+M).normalize(),i[3].setComponents(l-o,p-h,d-x,_-M).normalize(),i[4].setComponents(l-a,p-f,d-g,_-v).normalize(),t===Ti)i[5].setComponents(l+a,p+f,d+g,_+v).normalize();else if(t===Ia)i[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(da.x=s.normal.x>0?e.max.x:e.min.x,da.y=s.normal.y>0?e.max.y:e.min.y,da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};rt=class n extends Yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,p=t/l,m=[],x=[],g=[],d=[];for(let u=0;u<h;u++){let M=u*p-o;for(let v=0;v<c;v++){let _=v*f-r;x.push(_,-M,0),g.push(0,0,1),d.push(v/a),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){let v=M+c*u,_=M+c*(u+1),R=M+1+c*(u+1),b=M+1+c*u;m.push(v,_,b),m.push(_,R,b)}this.setIndex(m),this.setAttribute("position",new ct(x,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},_g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
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
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
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
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kg=`#define PI 3.141592653589793
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
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`
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
}`,Jg=`#ifdef USE_ENVMAP
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
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rx=`#ifdef USE_GRADIENTMAP
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
}`,ox=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
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
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gx=`PhysicalMaterial material;
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
#endif`,xx=`struct PhysicalMaterial {
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
}`,_x=`
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
#endif`,vx=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
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
#endif`,Dx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ux=`#ifdef USE_MORPHTARGETS
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
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hx=`#ifdef USE_NORMALMAP
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
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n_=`float getShadowMask() {
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
}`,i_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s_=`#ifdef USE_SKINNING
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
#endif`,r_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,__=`uniform sampler2D t2D;
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
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
}`,b_=`#if DEPTH_PACKING == 3200
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
}`,w_=`#define DISTANCE
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
}`,T_=`#define DISTANCE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,U_=`#define LAMBERT
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
}`,N_=`#define MATCAP
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
}`,O_=`#define MATCAP
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
}`,z_=`#define NORMAL
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
}`,F_=`#define NORMAL
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
}`,B_=`#define PHONG
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
}`,H_=`#define PHONG
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
}`,k_=`#define STANDARD
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
}`,G_=`#define STANDARD
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
}`,V_=`#define TOON
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
}`,W_=`#define TOON
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
}`,X_=`uniform float size;
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
}`,q_=`uniform vec3 diffuse;
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
}`,Y_=`#include <common>
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
}`,Z_=`uniform vec3 color;
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
}`,$_=`uniform float rotation;
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
}`,J_=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:_g,alphahash_pars_fragment:vg,alphamap_fragment:yg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:Eg,aomap_fragment:bg,aomap_pars_fragment:wg,batching_pars_vertex:Tg,batching_vertex:Ag,begin_vertex:Rg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:Ig,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ug,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Og,color_fragment:zg,color_pars_fragment:Fg,color_pars_vertex:Bg,color_vertex:Hg,common:kg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Vg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:Zg,colorspace_pars_fragment:$g,envmap_fragment:Jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:Qg,envmap_pars_vertex:jg,envmap_physical_pars_fragment:ux,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:sx,gradientmap_pars_fragment:rx,lightmap_fragment:ox,lightmap_pars_fragment:ax,lights_lambert_fragment:lx,lights_lambert_pars_fragment:cx,lights_pars_begin:hx,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:px,lights_phong_pars_fragment:mx,lights_physical_fragment:gx,lights_physical_pars_fragment:xx,lights_fragment_begin:_x,lights_fragment_maps:vx,lights_fragment_end:yx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:bx,map_fragment:wx,map_pars_fragment:Tx,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Px,morphcolor_vertex:Ix,morphnormal_vertex:Lx,morphtarget_pars_vertex:Dx,morphtarget_vertex:Ux,normal_fragment_begin:Nx,normal_fragment_maps:Ox,normal_pars_fragment:zx,normal_pars_vertex:Fx,normal_vertex:Bx,normalmap_pars_fragment:Hx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Wx,opaque_fragment:Xx,packing:qx,premultiplied_alpha_fragment:Yx,project_vertex:Zx,dithering_fragment:$x,dithering_pars_fragment:Jx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:e_,shadowmap_vertex:t_,shadowmask_pars_fragment:n_,skinbase_vertex:i_,skinning_pars_vertex:s_,skinning_vertex:r_,skinnormal_vertex:o_,specularmap_fragment:a_,specularmap_pars_fragment:l_,tonemapping_fragment:c_,tonemapping_pars_fragment:h_,transmission_fragment:u_,transmission_pars_fragment:d_,uv_pars_fragment:f_,uv_pars_vertex:p_,uv_vertex:m_,worldpos_vertex:g_,background_vert:x_,background_frag:__,backgroundCube_vert:v_,backgroundCube_frag:y_,cube_vert:M_,cube_frag:S_,depth_vert:E_,depth_frag:b_,distanceRGBA_vert:w_,distanceRGBA_frag:T_,equirect_vert:A_,equirect_frag:R_,linedashed_vert:C_,linedashed_frag:P_,meshbasic_vert:I_,meshbasic_frag:L_,meshlambert_vert:D_,meshlambert_frag:U_,meshmatcap_vert:N_,meshmatcap_frag:O_,meshnormal_vert:z_,meshnormal_frag:F_,meshphong_vert:B_,meshphong_frag:H_,meshphysical_vert:k_,meshphysical_frag:G_,meshtoon_vert:V_,meshtoon_frag:W_,points_vert:X_,points_frag:q_,shadow_vert:Y_,shadow_frag:Z_,sprite_vert:$_,sprite_frag:J_},_e={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},oi={basic:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:yn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:yn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:yn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:yn([_e.points,_e.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:yn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:yn([_e.common,_e.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:yn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:yn([_e.sprite,_e.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:yn([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:yn([_e.lights,_e.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};oi.physical={uniforms:yn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};fa={r:0,b:0,g:0};yr=class extends Ga{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ur=4,Qd=[.125,.215,.35,.446,.526,.582],ys=20,Fc=new yr,jd=new Ce,Bc=null,Hc=0,kc=0,_s=(1+Math.sqrt(5))/2,rr=1/_s,ef=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,_s,rr),new z(0,_s,-rr),new z(rr,0,_s),new z(-rr,0,_s),new z(_s,rr,0),new z(-_s,rr,0)],Mr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Bc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bc,Hc,kc),e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bc=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ei,format:jn,colorSpace:Ci,depthBuffer:!1},s=tf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(r)),this._blurMaterial=sv(r,e,t)}return s}_compileMaterial(e){let t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Fc)}_sceneToCubeUV(e,t,i,s){let a=new rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(jd),h.toneMapping=Yi,h.autoClear=!1;let m=new dt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new ne(new Ie,m),g=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,g=!0):(m.color.copy(jd),g=!0);for(let u=0;u<6;u++){let M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;pa(s,M*v,u>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===gr||e.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;pa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Fc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ef[(s-1)%ef.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ne(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ys-1),g=r/x,d=isFinite(r)?1+Math.floor(h*g):ys;d>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ys}`);let u=[],M=0;for(let S=0;S<ys;++S){let A=S/g,E=Math.exp(-A*A/2);u.push(E),S===0?M+=E:S<d&&(M+=2*E)}for(let S=0;S<u.length;S++)u[S]=u[S]/M;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-i;let _=this._sizeLods[s],R=3*_*(s>v-ur?s-v+ur:0),b=4*(this._cubeSize-_);pa(t,R,b,3*_,2*_),l.setRenderTarget(t),l.render(f,Fc)}};Wa=class extends Vn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:Es,h!==Es&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Es&&(i=Wi),i===void 0&&h===_r&&(i=Ss),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jf=new Vn,Kf=new Wa(1,1);Kf.compareFunction=Xf;Qf=new Oa,jf=new sh,ep=new Va,rf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);ah=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dv(t.type)}},lh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jv(t.type)}},ch=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Gc=/(\w+)(\])?(\[|\.)?/g;mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ey(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};ty=37297,ny=0;uy=/^[ \t]*#include +<([\w\d./]+)>/gm;dy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Sy=0,uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new dh(e),t.set(e,i)),i}},dh=class{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}};Cy=0;fh=class extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ph=class extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Dy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
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
}`;mh=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ut=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},By={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let d=t.getJointPose(g,i),u=this._getHandJoint(c,g);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},gh=class extends Ji{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,x=null,g=t.getContextAttributes(),d=null,u=null,M=[],v=[],_=new oe,R=null,b=new rn;b.layers.enable(1),b.viewport=new At;let S=new rn;S.layers.enable(2),S.viewport=new At;let A=[b,S],E=new mh;E.layers.enable(1),E.layers.enable(2);let y=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=M[G];return K===void 0&&(K=new co,M[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=M[G];return K===void 0&&(K=new co,M[G]=K),K.getGripSpace()},this.getHand=function(G){let K=M[G];return K===void 0&&(K=new co,M[G]=K),K.getHandSpace()};function F(G){let K=v.indexOf(G.inputSource);if(K===-1)return;let me=M[K];me!==void 0&&(me.update(G.inputSource,G.frame,c||o),me.dispatchEvent({type:G.type,data:G.inputSource}))}function L(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",I);for(let G=0;G<M.length;G++){let K=v[G];K!==null&&(v[G]=null,M[G].disconnect(K))}y=null,D=null,e.setRenderTarget(d),m=null,p=null,f=null,s=null,u=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",L),s.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(_),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Sn(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,me=null,ye=null;g.depth&&(ye=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?_r:Es,me=g.stencil?Ss:Wi);let pe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(pe),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new Sn(p.textureWidth,p.textureHeight,{format:jn,type:Zi,depthTexture:new Wa(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let Le=e.properties.get(u);Le.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(G){for(let K=0;K<G.removed.length;K++){let me=G.removed[K],ye=v.indexOf(me);ye>=0&&(v[ye]=null,M[ye].disconnect(me))}for(let K=0;K<G.added.length;K++){let me=G.added[K],ye=v.indexOf(me);if(ye===-1){for(let Le=0;Le<M.length;Le++)if(Le>=v.length){v.push(me),ye=Le;break}else if(v[Le]===null){v[Le]=me,ye=Le;break}if(ye===-1)break}let pe=M[ye];pe&&pe.connect(me)}}let T=new z,U=new z;function H(G,K,me){T.setFromMatrixPosition(K.matrixWorld),U.setFromMatrixPosition(me.matrixWorld);let ye=T.distanceTo(U),pe=K.projectionMatrix.elements,Le=me.projectionMatrix.elements,Fe=pe[14]/(pe[10]-1),Te=pe[14]/(pe[10]+1),He=(pe[9]+1)/pe[5],B=(pe[9]-1)/pe[5],ge=(pe[8]-1)/pe[0],j=(Le[8]+1)/Le[0],fe=Fe*ge,Q=Fe*j,De=ye/(-ge+j),Se=De*-ge;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Se),G.translateZ(De),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let C=Fe+De,w=Te+De,V=fe-Se,le=Q+(ye-Se),re=He*Te/w*C,se=B*Te/w*C;G.projectionMatrix.makePerspective(V,le,re,se,C,w),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function N(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;E.near=S.near=b.near=G.near,E.far=S.far=b.far=G.far,(y!==E.near||D!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),y=E.near,D=E.far);let K=G.parent,me=E.cameras;N(E,K);for(let ye=0;ye<me.length;ye++)N(me[ye],K);me.length===2?H(E,b,S):E.projectionMatrix.copy(b.projectionMatrix),k(G,E,K)};function k(G,K,me){me===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(me.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=La*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let X=null;function q(G,K){if(h=K.getViewerPose(c||o),x=K,h!==null){let me=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ye=!1;me.length!==E.cameras.length&&(E.cameras.length=0,ye=!0);for(let pe=0;pe<me.length;pe++){let Le=me[pe],Fe=null;if(m!==null)Fe=m.getViewport(Le);else{let He=f.getViewSubImage(p,Le);Fe=He.viewport,pe===0&&(e.setRenderTargetTextures(u,He.colorTexture,p.ignoreDepthValues?void 0:He.depthStencilTexture),e.setRenderTarget(u))}let Te=A[pe];Te===void 0&&(Te=new rn,Te.layers.enable(pe),Te.viewport=new At,A[pe]=Te),Te.matrix.fromArray(Le.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Le.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),pe===0&&(E.matrix.copy(Te.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ye===!0&&E.cameras.push(Te)}}for(let me=0;me<M.length;me++){let ye=v[me],pe=M[me];ye!==null&&pe!==void 0&&pe.update(ye,K,c||o)}X&&X(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}let te=new $f;te.setAnimationLoop(q),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}};go=class{constructor(e={}){let{canvas:t=K0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,d=null,u=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Yi,this.toneMappingExposure=1;let v=this,_=!1,R=0,b=0,S=null,A=-1,E=null,y=new At,D=new At,F=null,L=new Ce(0),I=0,T=t.width,U=t.height,H=1,N=null,k=null,X=new At(0,0,T,U),q=new At(0,0,T,U),te=!1,G=new mo,K=!1,me=!1,ye=null,pe=new lt,Le=new oe,Fe=new z,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return S===null?H:1}let B=i;function ge(P,W){for(let Z=0;Z<P.length;Z++){let J=P[Z],Y=t.getContext(J,W);if(Y!==null)return Y}return null}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",ee,!1),B===null){let W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),B=ge(W,P),B===null)throw ge(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let j,fe,Q,De,Se,C,w,V,le,re,se,Pe,xe,be,Be,Xe,ce,Ke,Qe,ke,Oe,Ae,Ze,at;function ae(){j=new ov(B),fe=new ev(B,j,e),j.init(fe),Ae=new Fy(B,j,fe),Q=new Oy(B,j,fe),De=new cv(B),Se=new by,C=new zy(B,j,Q,Se,fe,Ae,De),w=new nv(v),V=new rv(v),le=new xg(B,fe),Ze=new Q_(B,j,le,fe),re=new av(B,le,De,Ze),se=new fv(B,re,le,De),Qe=new dv(B,fe,C),Xe=new tv(Se),Pe=new Ey(v,w,V,j,fe,Ze,Xe),xe=new Hy(v,Se),be=new Ty,Be=new Ly(j,fe),Ke=new K_(v,w,V,Q,se,p,l),ce=new Ny(v,se,fe),at=new ky(B,De,fe,Q),ke=new j_(B,j,De,fe),Oe=new lv(B,j,De,fe),De.programs=Pe.programs,v.capabilities=fe,v.extensions=j,v.properties=Se,v.renderLists=be,v.shadowMap=ce,v.state=Q,v.info=De}ae();let he=new gh(v,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let P=j.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=j.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(T,U,!1))},this.getSize=function(P){return P.set(T,U)},this.setSize=function(P,W,Z=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=P,U=W,t.width=Math.floor(P*H),t.height=Math.floor(W*H),Z===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(T*H,U*H).floor()},this.setDrawingBufferSize=function(P,W,Z){T=P,U=W,H=Z,t.width=Math.floor(P*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(y)},this.getViewport=function(P){return P.copy(X)},this.setViewport=function(P,W,Z,J){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,W,Z,J),Q.viewport(y.copy(X).multiplyScalar(H).floor())},this.getScissor=function(P){return P.copy(q)},this.setScissor=function(P,W,Z,J){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,W,Z,J),Q.scissor(D.copy(q).multiplyScalar(H).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(P){Q.setScissorTest(te=P)},this.setOpaqueSort=function(P){N=P},this.setTransparentSort=function(P){k=P},this.getClearColor=function(P){return P.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(P=!0,W=!0,Z=!0){let J=0;if(P){let Y=!1;if(S!==null){let we=S.texture.format;Y=we===kf||we===Hf||we===Bf}if(Y){let we=S.texture.type,Ue=we===Zi||we===Wi||we===Yh||we===Ss||we===zf||we===Ff,Ge=Ke.getClearColor(),We=Ke.getClearAlpha(),tt=Ge.r,$e=Ge.g,Je=Ge.b;Ue?(m[0]=tt,m[1]=$e,m[2]=Je,m[3]=We,B.clearBufferuiv(B.COLOR,0,m)):(x[0]=tt,x[1]=$e,x[2]=Je,x[3]=We,B.clearBufferiv(B.COLOR,0,x))}else J|=B.COLOR_BUFFER_BIT}W&&(J|=B.DEPTH_BUFFER_BIT),Z&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),be.dispose(),Be.dispose(),Se.dispose(),w.dispose(),V.dispose(),se.dispose(),Ze.dispose(),at.dispose(),Pe.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ot),he.removeEventListener("sessionend",Ye),ye&&(ye.dispose(),ye=null),pt.stop()};function $(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let P=De.autoReset,W=ce.enabled,Z=ce.autoUpdate,J=ce.needsUpdate,Y=ce.type;ae(),De.autoReset=P,ce.enabled=W,ce.autoUpdate=Z,ce.needsUpdate=J,ce.type=Y}function ee(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ie(P){let W=P.target;W.removeEventListener("dispose",ie),Me(W)}function Me(P){Ee(P),Se.remove(P)}function Ee(P){let W=Se.get(P).programs;W!==void 0&&(W.forEach(function(Z){Pe.releaseProgram(Z)}),P.isShaderMaterial&&Pe.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Z,J,Y,we){W===null&&(W=Te);let Ue=Y.isMesh&&Y.matrixWorld.determinant()<0,Ge=qo(P,W,Z,J,Y);Q.setMaterial(J,Ue);let We=Z.index,tt=1;if(J.wireframe===!0){if(We=re.getWireframeAttribute(Z),We===void 0)return;tt=2}let $e=Z.drawRange,Je=Z.attributes.position,Ht=$e.start*tt,Ln=($e.start+$e.count)*tt;we!==null&&(Ht=Math.max(Ht,we.start*tt),Ln=Math.min(Ln,(we.start+we.count)*tt)),We!==null?(Ht=Math.max(Ht,0),Ln=Math.min(Ln,We.count)):Je!=null&&(Ht=Math.max(Ht,0),Ln=Math.min(Ln,Je.count));let Qt=Ln-Ht;if(Qt<0||Qt===1/0)return;Ze.setup(Y,J,Ge,Z,We);let xi,Pt=ke;if(We!==null&&(xi=le.get(We),Pt=Oe,Pt.setIndex(xi)),Y.isMesh)J.wireframe===!0?(Q.setLineWidth(J.wireframeLinewidth*He()),Pt.setMode(B.LINES)):Pt.setMode(B.TRIANGLES);else if(Y.isLine){let nt=J.linewidth;nt===void 0&&(nt=1),Q.setLineWidth(nt*He()),Y.isLineSegments?Pt.setMode(B.LINES):Y.isLineLoop?Pt.setMode(B.LINE_LOOP):Pt.setMode(B.LINE_STRIP)}else Y.isPoints?Pt.setMode(B.POINTS):Y.isSprite&&Pt.setMode(B.TRIANGLES);if(Y.isBatchedMesh)Pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Pt.renderInstances(Ht,Qt,Y.count);else if(Z.isInstancedBufferGeometry){let nt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ac=Math.min(Z.instanceCount,nt);Pt.renderInstances(Ht,Qt,ac)}else Pt.render(Ht,Qt)};function qe(P,W,Z){P.transparent===!0&&P.side===It&&P.forceSinglePass===!1?(P.side=tn,P.needsUpdate=!0,Xt(P,W,Z),P.side=$i,P.needsUpdate=!0,Xt(P,W,Z),P.side=It):Xt(P,W,Z)}this.compile=function(P,W,Z=null){Z===null&&(Z=P),d=Be.get(Z),d.init(),M.push(d),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),P!==Z&&P.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights(v._useLegacyLights);let J=new Set;return P.traverse(function(Y){let we=Y.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){let Ge=we[Ue];qe(Ge,Z,Y),J.add(Ge)}else qe(we,Z,Y),J.add(we)}),M.pop(),d=null,J},this.compileAsync=function(P,W,Z=null){let J=this.compile(P,W,Z);return new Promise(Y=>{function we(){if(J.forEach(function(Ue){Se.get(Ue).currentProgram.isReady()&&J.delete(Ue)}),J.size===0){Y(P);return}setTimeout(we,10)}j.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let st=null;function xt(P){st&&st(P)}function Ot(){pt.stop()}function Ye(){pt.start()}let pt=new $f;pt.setAnimationLoop(xt),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(P){st=P,he.setAnimationLoop(P),P===null?pt.stop():pt.start()},he.addEventListener("sessionstart",Ot),he.addEventListener("sessionend",Ye),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(W),W=he.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,W,S),d=Be.get(P,M.length),d.init(),M.push(d),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(pe),me=this.localClippingEnabled,K=Xe.init(this.clippingPlanes,me),g=be.get(P,u.length),g.init(),u.push(g),_n(P,W,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(N,k),this.info.render.frame++,K===!0&&Xe.beginShadows();let Z=d.state.shadowsArray;if(ce.render(Z,P,W),K===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(g,P),d.setupLights(v._useLegacyLights),W.isArrayCamera){let J=W.cameras;for(let Y=0,we=J.length;Y<we;Y++){let Ue=J[Y];zi(g,P,Ue,Ue.viewport)}}else zi(g,P,W);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),P.isScene===!0&&P.onAfterRender(v,P,W),Ze.resetDefaultState(),A=-1,E=null,M.pop(),M.length>0?d=M[M.length-1]:d=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function _n(P,W,Z,J){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)d.pushLight(P),P.castShadow&&d.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||G.intersectsSprite(P)){J&&Fe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(pe);let Ue=se.update(P),Ge=P.material;Ge.visible&&g.push(P,Ue,Ge,Z,Fe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||G.intersectsObject(P))){let Ue=se.update(P),Ge=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Fe.copy(P.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Fe.copy(Ue.boundingSphere.center)),Fe.applyMatrix4(P.matrixWorld).applyMatrix4(pe)),Array.isArray(Ge)){let We=Ue.groups;for(let tt=0,$e=We.length;tt<$e;tt++){let Je=We[tt],Ht=Ge[Je.materialIndex];Ht&&Ht.visible&&g.push(P,Ue,Ht,Z,Fe.z,Je)}}else Ge.visible&&g.push(P,Ue,Ge,Z,Fe.z,null)}}let we=P.children;for(let Ue=0,Ge=we.length;Ue<Ge;Ue++)_n(we[Ue],W,Z,J)}function zi(P,W,Z,J){let Y=P.opaque,we=P.transmissive,Ue=P.transparent;d.setupLightsView(Z),K===!0&&Xe.setGlobalState(v.clippingPlanes,Z),we.length>0&&Fi(Y,we,W,Z),J&&Q.viewport(y.copy(J)),Y.length>0&&_t(Y,W,Z),we.length>0&&_t(we,W,Z),Ue.length>0&&_t(Ue,W,Z),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Fi(P,W,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let we=fe.isWebGL2;ye===null&&(ye=new Sn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?ei:Zi,minFilter:po,samples:we?4:0})),v.getDrawingBufferSize(Le),we?ye.setSize(Le.x,Le.y):ye.setSize(nh(Le.x),nh(Le.y));let Ue=v.getRenderTarget();v.setRenderTarget(ye),v.getClearColor(L),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();let Ge=v.toneMapping;v.toneMapping=Yi,_t(P,Z,J),C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye);let We=!1;for(let tt=0,$e=W.length;tt<$e;tt++){let Je=W[tt],Ht=Je.object,Ln=Je.geometry,Qt=Je.material,xi=Je.group;if(Qt.side===It&&Ht.layers.test(J.layers)){let Pt=Qt.side;Qt.side=tn,Qt.needsUpdate=!0,wt(Ht,Z,J,Ln,Qt,xi),Qt.side=Pt,Qt.needsUpdate=!0,We=!0}}We===!0&&(C.updateMultisampleRenderTarget(ye),C.updateRenderTargetMipmap(ye)),v.setRenderTarget(Ue),v.setClearColor(L,I),v.toneMapping=Ge}function _t(P,W,Z){let J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,we=P.length;Y<we;Y++){let Ue=P[Y],Ge=Ue.object,We=Ue.geometry,tt=J===null?Ue.material:J,$e=Ue.group;Ge.layers.test(Z.layers)&&wt(Ge,W,Z,We,tt,$e)}}function wt(P,W,Z,J,Y,we){P.onBeforeRender(v,W,Z,J,Y,we),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Y.onBeforeRender(v,W,Z,J,P,we),Y.transparent===!0&&Y.side===It&&Y.forceSinglePass===!1?(Y.side=tn,Y.needsUpdate=!0,v.renderBufferDirect(Z,W,J,Y,P,we),Y.side=$i,Y.needsUpdate=!0,v.renderBufferDirect(Z,W,J,Y,P,we),Y.side=It):v.renderBufferDirect(Z,W,J,Y,P,we),P.onAfterRender(v,W,Z,J,Y,we)}function Xt(P,W,Z){W.isScene!==!0&&(W=Te);let J=Se.get(P),Y=d.state.lights,we=d.state.shadowsArray,Ue=Y.state.version,Ge=Pe.getParameters(P,Y.state,we,W,Z),We=Pe.getProgramCacheKey(Ge),tt=J.programs;J.environment=P.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(P.isMeshStandardMaterial?V:w).get(P.envMap||J.environment),tt===void 0&&(P.addEventListener("dispose",ie),tt=new Map,J.programs=tt);let $e=tt.get(We);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===Ue)return Zr(P,Ge),$e}else Ge.uniforms=Pe.getUniforms(P),P.onBuild(Z,Ge,v),P.onBeforeCompile(Ge,v),$e=Pe.acquireProgram(Ge,We),tt.set(We,$e),J.uniforms=Ge.uniforms;let Je=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Je.clippingPlanes=Xe.uniform),Zr(P,Ge),J.needsLights=Jr(P),J.lightsStateVersion=Ue,J.needsLights&&(Je.ambientLightColor.value=Y.state.ambient,Je.lightProbe.value=Y.state.probe,Je.directionalLights.value=Y.state.directional,Je.directionalLightShadows.value=Y.state.directionalShadow,Je.spotLights.value=Y.state.spot,Je.spotLightShadows.value=Y.state.spotShadow,Je.rectAreaLights.value=Y.state.rectArea,Je.ltc_1.value=Y.state.rectAreaLTC1,Je.ltc_2.value=Y.state.rectAreaLTC2,Je.pointLights.value=Y.state.point,Je.pointLightShadows.value=Y.state.pointShadow,Je.hemisphereLights.value=Y.state.hemi,Je.directionalShadowMap.value=Y.state.directionalShadowMap,Je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Je.spotShadowMap.value=Y.state.spotShadowMap,Je.spotLightMatrix.value=Y.state.spotLightMatrix,Je.spotLightMap.value=Y.state.spotLightMap,Je.pointShadowMap.value=Y.state.pointShadowMap,Je.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=$e,J.uniformsList=null,$e}function Vs(P){if(P.uniformsList===null){let W=P.currentProgram.getUniforms();P.uniformsList=mr.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Zr(P,W){let Z=Se.get(P);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function qo(P,W,Z,J,Y){W.isScene!==!0&&(W=Te),C.resetTextureUnits();let we=W.fog,Ue=J.isMeshStandardMaterial?W.environment:null,Ge=S===null?v.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ci,We=(J.isMeshStandardMaterial?V:w).get(J.envMap||Ue),tt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$e=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Je=!!Z.morphAttributes.position,Ht=!!Z.morphAttributes.normal,Ln=!!Z.morphAttributes.color,Qt=Yi;J.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Qt=v.toneMapping);let xi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pt=xi!==void 0?xi.length:0,nt=Se.get(J),ac=d.state.lights;if(K===!0&&(me===!0||P!==E)){let Bn=P===E&&J.id===A;Xe.setState(J,P,Bn)}let zt=!1;J.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==ac.state.version||nt.outputColorSpace!==Ge||Y.isBatchedMesh&&nt.batching===!1||!Y.isBatchedMesh&&nt.batching===!0||Y.isInstancedMesh&&nt.instancing===!1||!Y.isInstancedMesh&&nt.instancing===!0||Y.isSkinnedMesh&&nt.skinning===!1||!Y.isSkinnedMesh&&nt.skinning===!0||Y.isInstancedMesh&&nt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&nt.instancingColor===!1&&Y.instanceColor!==null||nt.envMap!==We||J.fog===!0&&nt.fog!==we||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Xe.numPlanes||nt.numIntersection!==Xe.numIntersection)||nt.vertexAlphas!==tt||nt.vertexTangents!==$e||nt.morphTargets!==Je||nt.morphNormals!==Ht||nt.morphColors!==Ln||nt.toneMapping!==Qt||fe.isWebGL2===!0&&nt.morphTargetsCount!==Pt)&&(zt=!0):(zt=!0,nt.__version=J.version);let ds=nt.currentProgram;zt===!0&&(ds=Xt(J,W,Y));let Ku=!1,Kr=!1,lc=!1,ln=ds.getUniforms(),fs=nt.uniforms;if(Q.useProgram(ds.program)&&(Ku=!0,Kr=!0,lc=!0),J.id!==A&&(A=J.id,Kr=!0),Ku||E!==P){ln.setValue(B,"projectionMatrix",P.projectionMatrix),ln.setValue(B,"viewMatrix",P.matrixWorldInverse);let Bn=ln.map.cameraPosition;Bn!==void 0&&Bn.setValue(B,Fe.setFromMatrixPosition(P.matrixWorld)),fe.logarithmicDepthBuffer&&ln.setValue(B,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ln.setValue(B,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,Kr=!0,lc=!0)}if(Y.isSkinnedMesh){ln.setOptional(B,Y,"bindMatrix"),ln.setOptional(B,Y,"bindMatrixInverse");let Bn=Y.skeleton;Bn&&(fe.floatVertexTextures?(Bn.boneTexture===null&&Bn.computeBoneTexture(),ln.setValue(B,"boneTexture",Bn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(ln.setOptional(B,Y,"batchingTexture"),ln.setValue(B,"batchingTexture",Y._matricesTexture,C));let cc=Z.morphAttributes;if((cc.position!==void 0||cc.normal!==void 0||cc.color!==void 0&&fe.isWebGL2===!0)&&Qe.update(Y,Z,ds),(Kr||nt.receiveShadow!==Y.receiveShadow)&&(nt.receiveShadow=Y.receiveShadow,ln.setValue(B,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(fs.envMap.value=We,fs.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),Kr&&(ln.setValue(B,"toneMappingExposure",v.toneMappingExposure),nt.needsLights&&$r(fs,lc),we&&J.fog===!0&&xe.refreshFogUniforms(fs,we),xe.refreshMaterialUniforms(fs,J,H,U,ye),mr.upload(B,Vs(nt),fs,C)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(mr.upload(B,Vs(nt),fs,C),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ln.setValue(B,"center",Y.center),ln.setValue(B,"modelViewMatrix",Y.modelViewMatrix),ln.setValue(B,"normalMatrix",Y.normalMatrix),ln.setValue(B,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Bn=J.uniformsGroups;for(let hc=0,e0=Bn.length;hc<e0;hc++)if(fe.isWebGL2){let Qu=Bn[hc];at.update(Qu,ds),at.bind(Qu,ds)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ds}function $r(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Jr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(P,W,Z){Se.get(P.texture).__webglTexture=W,Se.get(P.depthTexture).__webglTexture=Z;let J=Se.get(P);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){let Z=Se.get(P);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Z=0){S=P,R=W,b=Z;let J=!0,Y=null,we=!1,Ue=!1;if(P){let We=Se.get(P);We.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(B.FRAMEBUFFER,null),J=!1):We.__webglFramebuffer===void 0?C.setupRenderTarget(P):We.__hasExternalTextures&&C.rebindTextures(P,Se.get(P.texture).__webglTexture,Se.get(P.depthTexture).__webglTexture);let tt=P.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ue=!0);let $e=Se.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray($e[W])?Y=$e[W][Z]:Y=$e[W],we=!0):fe.isWebGL2&&P.samples>0&&C.useMultisampledRTT(P)===!1?Y=Se.get(P).__webglMultisampledFramebuffer:Array.isArray($e)?Y=$e[Z]:Y=$e,y.copy(P.viewport),D.copy(P.scissor),F=P.scissorTest}else y.copy(X).multiplyScalar(H).floor(),D.copy(q).multiplyScalar(H).floor(),F=te;if(Q.bindFramebuffer(B.FRAMEBUFFER,Y)&&fe.drawBuffers&&J&&Q.drawBuffers(P,Y),Q.viewport(y),Q.scissor(D),Q.setScissorTest(F),we){let We=Se.get(P.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,We.__webglTexture,Z)}else if(Ue){let We=Se.get(P.texture),tt=W||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.__webglTexture,Z||0,tt)}A=-1},this.readRenderTargetPixels=function(P,W,Z,J,Y,we,Ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ge=Ge[Ue]),Ge){Q.bindFramebuffer(B.FRAMEBUFFER,Ge);try{let We=P.texture,tt=We.format,$e=We.type;if(tt!==jn&&Ae.convert(tt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Je=$e===ei&&(j.has("EXT_color_buffer_half_float")||fe.isWebGL2&&j.has("EXT_color_buffer_float"));if($e!==Zi&&Ae.convert($e)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!($e===Xi&&(fe.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!Je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-J&&Z>=0&&Z<=P.height-Y&&B.readPixels(W,Z,J,Y,Ae.convert(tt),Ae.convert($e),we)}finally{let We=S!==null?Se.get(S).__webglFramebuffer:null;Q.bindFramebuffer(B.FRAMEBUFFER,We)}}},this.copyFramebufferToTexture=function(P,W,Z=0){let J=Math.pow(2,-Z),Y=Math.floor(W.image.width*J),we=Math.floor(W.image.height*J);C.setTexture2D(W,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,P.x,P.y,Y,we),Q.unbindTexture()},this.copyTextureToTexture=function(P,W,Z,J=0){let Y=W.image.width,we=W.image.height,Ue=Ae.convert(Z.format),Ge=Ae.convert(Z.type);C.setTexture2D(Z,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,J,P.x,P.y,Y,we,Ue,Ge,W.image.data):W.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,J,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Ue,W.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,J,P.x,P.y,Ue,Ge,W.image),J===0&&Z.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Z,J,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let we=P.max.x-P.min.x+1,Ue=P.max.y-P.min.y+1,Ge=P.max.z-P.min.z+1,We=Ae.convert(J.format),tt=Ae.convert(J.type),$e;if(J.isData3DTexture)C.setTexture3D(J,0),$e=B.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)C.setTexture2DArray(J,0),$e=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);let Je=B.getParameter(B.UNPACK_ROW_LENGTH),Ht=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ln=B.getParameter(B.UNPACK_SKIP_PIXELS),Qt=B.getParameter(B.UNPACK_SKIP_ROWS),xi=B.getParameter(B.UNPACK_SKIP_IMAGES),Pt=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Pt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,P.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,P.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,P.min.z),Z.isDataTexture||Z.isData3DTexture?B.texSubImage3D($e,Y,W.x,W.y,W.z,we,Ue,Ge,We,tt,Pt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D($e,Y,W.x,W.y,W.z,we,Ue,Ge,We,Pt.data)):B.texSubImage3D($e,Y,W.x,W.y,W.z,we,Ue,Ge,We,tt,Pt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ln),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,xi),Y===0&&J.generateMipmaps&&B.generateMipmap($e),Q.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),Q.unbindTexture()},this.resetState=function(){R=0,b=0,S=null,Q.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Zh?"display-p3":"srgb",t.unpackColorSpace=mt.workingColorSpace===hl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?bs:Vf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bs?gt:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},xh=class extends go{};xh.prototype.isWebGL1Renderer=!0;Xa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Sr=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},_h=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new z,qa=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),i=yt(i,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new un(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ws=class extends Ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},no=new z,ar=new z,lr=new z,cr=new oe,io=new oe,tp=new lt,ma=new z,so=new z,ga=new z,yf=new oe,Vc=new oe,Mf=new oe,Er=class extends kt{constructor(e=new ws){if(super(),this.isSprite=!0,this.type="Sprite",or===void 0){or=new Yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _h(t,5);or.setIndex([0,1,2,0,2,3]),or.setAttribute("position",new qa(i,3,0,!1)),or.setAttribute("uv",new qa(i,2,3,!1))}this.geometry=or,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),tp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-lr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;xa(ma.set(-.5,-.5,0),lr,o,ar,s,r),xa(so.set(.5,-.5,0),lr,o,ar,s,r),xa(ga.set(.5,.5,0),lr,o,ar,s,r),yf.set(0,0),Vc.set(1,0),Mf.set(1,1);let a=e.ray.intersectTriangle(ma,so,ga,!1,no);if(a===null&&(xa(so.set(-.5,.5,0),lr,o,ar,s,r),Vc.set(0,1),a=e.ray.intersectTriangle(ma,ga,so,!1,no),a===null))return;let l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||t.push({distance:l,point:no.clone(),uv:Ms.getInterpolation(no,ma,so,ga,yf,Vc,Mf,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ya=class extends un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new lt,Sf=new lt,_a=[],Ef=new Pi,Gy=new lt,ro=new ne,oo=new Ki,Rt=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ya(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Gy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),Ef.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(Ef)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),oo.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(oo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ro.geometry=this.geometry,ro.material=this.material,ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oo.copy(this.boundingSphere),oo.applyMatrix4(i),e.ray.intersectsSphere(oo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hr),Sf.multiplyMatrices(i,hr),ro.matrixWorld=Sf,ro.raycast(e,_a);for(let o=0,a=_a.length;o<a;o++){let l=_a[o];l.instanceId=r,l.object=this,t.push(l)}_a.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ya(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},xo=class extends Ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bf=new lt,vh=new za,va=new Ki,ya=new z,Za=class extends kt{constructor(e=new Yt,t=new xo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;bf.copy(s).invert(),vh.copy(e.ray).applyMatrix4(bf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=p,g=m;x<g;x++){let d=c.getX(x);ya.fromBufferAttribute(f,d),wf(ya,d,l,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m;x<g;x++)ya.fromBufferAttribute(f,x),wf(ya,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};on=class extends Vn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new z,s=[],r=[],o=[],a=new z,l=new lt;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(en(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(en(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},_o=class extends Wn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new oe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*f+this.aX,c=p*f+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},yh=class extends _o{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Ma=new z,Wc=new Jh,Xc=new Jh,qc=new Jh,Mh=class extends Wn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new z){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Ma.subVectors(s[0],s[1]).add(s[0]),c=Ma);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);g<1e-4&&(g=1),x<1e-4&&(x=g),d<1e-4&&(d=g),Wc.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,x,g,d),Xc.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,x,g,d),qc.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,x,g,d)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),Xc.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),qc.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return i.set(Wc.calc(l),Xc.calc(l),qc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};$a=class extends Wn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(uo(e,s.x,r.x,o.x,a.x),uo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sh=class extends Wn{constructor(e=new z,t=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new z){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(uo(e,s.x,r.x,o.x,a.x),uo(e,s.y,r.y,o.y,a.y),uo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends Wn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Eh=class extends Wn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Wn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ho(e,s.x,r.x,o.x),ho(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends Wn{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ho(e,s.x,r.x,o.x),ho(e,s.y,r.y,o.y),ho(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Tf(a,l.x,c.x,h.x,f.x),Tf(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},wh=Object.freeze({__proto__:null,ArcCurve:yh,CatmullRomCurve3:Mh,CubicBezierCurve:$a,CubicBezierCurve3:Sh,EllipseCurve:_o,LineCurve:Ja,LineCurve3:Eh,QuadraticBezierCurve:Ka,QuadraticBezierCurve3:bh,SplineCurve:Qa}),Th=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wh[s.type]().fromJSON(s))}return this}},Ts=class extends Th{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ja(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ka(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new $a(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Qa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new _o(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ah=class n extends Yt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=en(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new z,p=new oe,m=new z,x=new z,g=new z,d=0,u=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:d=e[M+1].x-e[M].x,u=e[M+1].y-e[M].y,m.x=u*1,m.y=-d,m.z=u*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:d=e[M+1].x-e[M].x,u=e[M+1].y-e[M].y,m.x=u*1,m.y=-d,m.z=u*0,x.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(x)}for(let M=0;M<=t;M++){let v=i+M*h*s,_=Math.sin(v),R=Math.cos(v);for(let b=0;b<=e.length-1;b++){f.x=e[b].x*_,f.y=e[b].y,f.z=e[b].x*R,o.push(f.x,f.y,f.z),p.x=M/t,p.y=b/(e.length-1),a.push(p.x,p.y);let S=l[3*b+0]*_,A=l[3*b+1],E=l[3*b+0]*R;c.push(S,A,E)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){let _=v+M*e.length,R=_,b=_+e.length,S=_+e.length+1,A=_+1;r.push(R,b,A),r.push(S,A,b)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},ja=class n extends Ah{constructor(e=1,t=1,i=4,s=8){let r=new Ts;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},br=class n extends Yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new z,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let m=i+f/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},St=class n extends Yt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],m=[],x=0,g=[],d=i/2,u=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(p,3)),this.setAttribute("uv",new ct(m,2));function M(){let _=new z,R=new z,b=0,S=(t-e)/i;for(let A=0;A<=r;A++){let E=[],y=A/r,D=y*(t-e)+e;for(let F=0;F<=s;F++){let L=F/s,I=L*l+a,T=Math.sin(I),U=Math.cos(I);R.x=D*T,R.y=-y*i+d,R.z=D*U,f.push(R.x,R.y,R.z),_.set(T,S,U).normalize(),p.push(_.x,_.y,_.z),m.push(L,1-y),E.push(x++)}g.push(E)}for(let A=0;A<s;A++)for(let E=0;E<r;E++){let y=g[E][A],D=g[E+1][A],F=g[E+1][A+1],L=g[E][A+1];h.push(y,D,L),h.push(D,F,L),b+=6}c.addGroup(u,b,0),u+=b}function v(_){let R=x,b=new oe,S=new z,A=0,E=_===!0?e:t,y=_===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,d*y,0),p.push(0,y,0),m.push(.5,.5),x++;let D=x;for(let F=0;F<=s;F++){let I=F/s*l+a,T=Math.cos(I),U=Math.sin(I);S.x=E*U,S.y=d*y,S.z=E*T,f.push(S.x,S.y,S.z),p.push(0,y,0),b.x=T*.5+.5,b.y=U*.5*y+.5,m.push(b.x,b.y),x++}for(let F=0;F<s;F++){let L=R+F,I=D+F;_===!0?h.push(I,I+1,L):h.push(I+1,I,L),A+=3}c.addGroup(u,A,_===!0?1:2),u+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wr=class n extends St{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},vo=class extends Ts{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ts().fromJSON(s))}return this}},Jy={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=np(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,p,m;if(i&&(r=tM(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let x=t;x<s;x+=t)f=n[x],p=n[x+1],f<a&&(a=f),p<l&&(l=p),f>c&&(c=f),p>h&&(h=p);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return yo(r,o,t,a,l,m,0),o}};fo=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Rf(e),Cf(i,e);let o=e.length;t.forEach(Rf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Cf(i,t[l]);let a=Jy.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};el=class n extends Yt{constructor(e=new vo([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:fM,v,_=!1,R,b,S,A;u&&(v=u.getSpacedPoints(h),_=!0,p=!1,R=u.computeFrenetFrames(h,!1),b=new z,S=new z,A=new z),p||(d=0,m=0,x=0,g=0);let E=a.extractPoints(c),y=E.shape,D=E.holes;if(!fo.isClockWise(y)){y=y.reverse();for(let B=0,ge=D.length;B<ge;B++){let j=D[B];fo.isClockWise(j)&&(D[B]=j.reverse())}}let L=fo.triangulateShape(y,D),I=y;for(let B=0,ge=D.length;B<ge;B++){let j=D[B];y=y.concat(j)}function T(B,ge,j){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),B.clone().addScaledVector(ge,j)}let U=y.length,H=L.length;function N(B,ge,j){let fe,Q,De,Se=B.x-ge.x,C=B.y-ge.y,w=j.x-B.x,V=j.y-B.y,le=Se*Se+C*C,re=Se*V-C*w;if(Math.abs(re)>Number.EPSILON){let se=Math.sqrt(le),Pe=Math.sqrt(w*w+V*V),xe=ge.x-C/se,be=ge.y+Se/se,Be=j.x-V/Pe,Xe=j.y+w/Pe,ce=((Be-xe)*V-(Xe-be)*w)/(Se*V-C*w);fe=xe+Se*ce-B.x,Q=be+C*ce-B.y;let Ke=fe*fe+Q*Q;if(Ke<=2)return new oe(fe,Q);De=Math.sqrt(Ke/2)}else{let se=!1;Se>Number.EPSILON?w>Number.EPSILON&&(se=!0):Se<-Number.EPSILON?w<-Number.EPSILON&&(se=!0):Math.sign(C)===Math.sign(V)&&(se=!0),se?(fe=-C,Q=Se,De=Math.sqrt(le)):(fe=Se,Q=C,De=Math.sqrt(le/2))}return new oe(fe/De,Q/De)}let k=[];for(let B=0,ge=I.length,j=ge-1,fe=B+1;B<ge;B++,j++,fe++)j===ge&&(j=0),fe===ge&&(fe=0),k[B]=N(I[B],I[j],I[fe]);let X=[],q,te=k.concat();for(let B=0,ge=D.length;B<ge;B++){let j=D[B];q=[];for(let fe=0,Q=j.length,De=Q-1,Se=fe+1;fe<Q;fe++,De++,Se++)De===Q&&(De=0),Se===Q&&(Se=0),q[fe]=N(j[fe],j[De],j[Se]);X.push(q),te=te.concat(q)}for(let B=0;B<d;B++){let ge=B/d,j=m*Math.cos(ge*Math.PI/2),fe=x*Math.sin(ge*Math.PI/2)+g;for(let Q=0,De=I.length;Q<De;Q++){let Se=T(I[Q],k[Q],fe);pe(Se.x,Se.y,-j)}for(let Q=0,De=D.length;Q<De;Q++){let Se=D[Q];q=X[Q];for(let C=0,w=Se.length;C<w;C++){let V=T(Se[C],q[C],fe);pe(V.x,V.y,-j)}}}let G=x+g;for(let B=0;B<U;B++){let ge=p?T(y[B],te[B],G):y[B];_?(S.copy(R.normals[0]).multiplyScalar(ge.x),b.copy(R.binormals[0]).multiplyScalar(ge.y),A.copy(v[0]).add(S).add(b),pe(A.x,A.y,A.z)):pe(ge.x,ge.y,0)}for(let B=1;B<=h;B++)for(let ge=0;ge<U;ge++){let j=p?T(y[ge],te[ge],G):y[ge];_?(S.copy(R.normals[B]).multiplyScalar(j.x),b.copy(R.binormals[B]).multiplyScalar(j.y),A.copy(v[B]).add(S).add(b),pe(A.x,A.y,A.z)):pe(j.x,j.y,f/h*B)}for(let B=d-1;B>=0;B--){let ge=B/d,j=m*Math.cos(ge*Math.PI/2),fe=x*Math.sin(ge*Math.PI/2)+g;for(let Q=0,De=I.length;Q<De;Q++){let Se=T(I[Q],k[Q],fe);pe(Se.x,Se.y,f+j)}for(let Q=0,De=D.length;Q<De;Q++){let Se=D[Q];q=X[Q];for(let C=0,w=Se.length;C<w;C++){let V=T(Se[C],q[C],fe);_?pe(V.x,V.y+v[h-1].y,v[h-1].x+j):pe(V.x,V.y,f+j)}}}K(),me();function K(){let B=s.length/3;if(p){let ge=0,j=U*ge;for(let fe=0;fe<H;fe++){let Q=L[fe];Le(Q[2]+j,Q[1]+j,Q[0]+j)}ge=h+d*2,j=U*ge;for(let fe=0;fe<H;fe++){let Q=L[fe];Le(Q[0]+j,Q[1]+j,Q[2]+j)}}else{for(let ge=0;ge<H;ge++){let j=L[ge];Le(j[2],j[1],j[0])}for(let ge=0;ge<H;ge++){let j=L[ge];Le(j[0]+U*h,j[1]+U*h,j[2]+U*h)}}i.addGroup(B,s.length/3-B,0)}function me(){let B=s.length/3,ge=0;ye(I,ge),ge+=I.length;for(let j=0,fe=D.length;j<fe;j++){let Q=D[j];ye(Q,ge),ge+=Q.length}i.addGroup(B,s.length/3-B,1)}function ye(B,ge){let j=B.length;for(;--j>=0;){let fe=j,Q=j-1;Q<0&&(Q=B.length-1);for(let De=0,Se=h+d*2;De<Se;De++){let C=U*De,w=U*(De+1),V=ge+fe+C,le=ge+Q+C,re=ge+Q+w,se=ge+fe+w;Fe(V,le,re,se)}}}function pe(B,ge,j){l.push(B),l.push(ge),l.push(j)}function Le(B,ge,j){Te(B),Te(ge),Te(j);let fe=s.length/3,Q=M.generateTopUV(i,s,fe-3,fe-2,fe-1);He(Q[0]),He(Q[1]),He(Q[2])}function Fe(B,ge,j,fe){Te(B),Te(ge),Te(fe),Te(ge),Te(j),Te(fe);let Q=s.length/3,De=M.generateSideWallUV(i,s,Q-6,Q-3,Q-2,Q-1);He(De[0]),He(De[1]),He(De[3]),He(De[1]),He(De[2]),He(De[3])}function Te(B){s.push(l[B*3+0]),s.push(l[B*3+1]),s.push(l[B*3+2])}function He(B){r.push(B.x),r.push(B.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return pM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wh[s.type]().fromJSON(s)),new n(i,e.options)}},fM={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2],g=e[r*3],d=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-f),new oe(p,1-x),new oe(g,1-u)]:[new oe(a,1-l),new oe(h,1-f),new oe(m,1-x),new oe(d,1-u)]}};Qi=class n extends Yt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,p=(t-e)/s,m=new z,x=new oe;for(let g=0;g<=s;g++){for(let d=0;d<=i;d++){let u=r+d/i*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}f+=p}for(let g=0;g<s;g++){let d=g*(i+1);for(let u=0;u<i;u++){let M=u+d,v=M,_=M+i+1,R=M+i+2,b=M+1;a.push(v,_,b),a.push(_,R,b)}}this.setIndex(a),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},sn=class n extends Yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new z,p=new z,m=[],x=[],g=[],d=[];for(let u=0;u<=i;u++){let M=[],v=u/i,_=0;u===0&&o===0?_=.5/t:u===i&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let b=R/t;f.x=-e*Math.cos(s+b*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+b*r)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),d.push(b+_,1-v),M.push(c++)}h.push(M)}for(let u=0;u<i;u++)for(let M=0;M<t;M++){let v=h[u][M+1],_=h[u][M],R=h[u+1][M],b=h[u+1][M+1];(u!==0||o>0)&&m.push(v,_,b),(u!==i-1||l<Math.PI)&&m.push(_,R,b)}this.setIndex(m),this.setAttribute("position",new ct(x,3)),this.setAttribute("normal",new ct(g,3)),this.setAttribute("uv",new ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},tl=class n extends Yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new z,f=new z,p=new z;for(let m=0;m<=i;m++)for(let x=0;x<=s;x++){let g=x/s*r,d=m/i*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(g),f.y=(e+t*Math.cos(d))*Math.sin(g),f.z=t*Math.sin(d),a.push(f.x,f.y,f.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=s;x++){let g=(s+1)*m+x-1,d=(s+1)*(m-1)+x-1,u=(s+1)*(m-1)+x,M=(s+1)*m+x;o.push(g,d,M),o.push(d,u,M)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},nl=class extends Zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ve=class extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wf,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ji=class extends ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Tr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ph=class extends Tr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pd,endingEnd:Pd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Id:r=e,a=2*t-i;break;case Ld:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Id:o=e,l=2*i-t;break;case Ld:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),g=x*x,d=g*x,u=-p*d+2*p*g-p*x,M=(1+p)*d+(-1.5-2*p)*g+(-.5+p)*x+1,v=(-1-m)*d+(1.5+m)*g+.5*x,_=m*d-m*g;for(let R=0;R!==a;++R)r[R]=u*o[h+R]+M*o[c+R]+v*o[l+R]+_*o[f+R];return r}},Ih=class extends Tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},Lh=class extends Tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ti=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ph(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ta:t=this.InterpolantFactoryMethodDiscrete;break;case Aa:t=this.InterpolantFactoryMethodLinear;break;case _c:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ta;case this.InterpolantFactoryMethodLinear:return Aa;case this.InterpolantFactoryMethodSmooth:return _c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&mM(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===_c,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,p=f-i,m=f+i;for(let x=0;x!==i;++x){let g=t[f+x];if(g!==t[p+x]||g!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ti.prototype.TimeBufferType=Float32Array;ti.prototype.ValueBufferType=Float32Array;ti.prototype.DefaultInterpolation=Aa;Rs=class extends ti{};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ta;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;Dh=class extends ti{};Dh.prototype.ValueTypeName="color";Uh=class extends ti{};Uh.prototype.ValueTypeName="number";Nh=class extends Tr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)An.slerpFlat(r,0,o,c-a,o,c,l);return r}},Eo=class extends ti{InterpolantFactoryMethodLinear(e){return new Nh(this.times,this.values,this.getValueSize(),e)}};Eo.prototype.ValueTypeName="quaternion";Eo.prototype.DefaultInterpolation=Aa;Eo.prototype.InterpolantFactoryMethodSmooth=void 0;Cs=class extends ti{};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Ta;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;Oh=class extends ti{};Oh.prototype.ValueTypeName="vector";zh=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},gM=new zh,Fh=class{constructor(e){this.manager=e!==void 0?e:gM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Fh.DEFAULT_MATERIAL_NAME="__DEFAULT";Ar=class extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},il=class extends Ar{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Yc=new lt,Pf=new z,If=new z,bo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mo,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pf),If.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(If),t.updateMatrixWorld(),Yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Bh=class extends bo{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=La*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},sl=class extends Ar{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Bh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Lf=new lt,ao=new z,Zc=new z,Hh=class extends bo{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ao.setFromMatrixPosition(e.matrixWorld),i.position.copy(ao),Zc.copy(i.position),Zc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Zc),i.updateMatrixWorld(),s.makeTranslation(-ao.x,-ao.y,-ao.z),Lf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf)}},rl=class extends Ar{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Hh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},kh=class extends bo{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ol=class extends Ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new kh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},al=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Df(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Df();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Kh="\\[\\]\\.:\\/",xM=new RegExp("["+Kh+"]","g"),Qh="[^"+Kh+"]",_M="[^"+Kh.replace("\\.","")+"]",vM=/((?:WC+[\/:])*)/.source.replace("WC",Qh),yM=/(WCOD+)?/.source.replace("WCOD",_M),MM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),SM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),EM=new RegExp("^"+vM+yM+MM+SM+"$"),bM=["material","materials","bones","map"],Gh=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xM,"")}static parseTrackName(e){let t=EM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);bM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Gh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];zE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var um={};uc(um,{RoomEnvironment:()=>bu});function Nr(n){let e=new dt;return e.color.setScalar(n),e}var bu,dm=Dn(()=>{Dt();bu=class extends Sr{constructor(e=null){super();let t=new Ie;t.deleteAttribute("uv");let i=new ve({side:tn}),s=new ve,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new rl(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ne(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new ne(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ne(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new ne(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let f=new ne(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new ne(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let m=new ne(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let x=new ne(t,Nr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let g=new ne(t,Nr(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);let d=new ne(t,Nr(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new ne(t,Nr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let M=new ne(t,Nr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new ne(t,Nr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var zl,wu=Dn(()=>{zl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var On,nE,Tu,iE,rs,Or=Dn(()=>{Dt();On=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},nE=new yr(-1,1,1,-1,0,1),Tu=class extends Yt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},iE=new Tu,rs=class{constructor(e){this._mesh=new ne(iE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var zr,Au=Dn(()=>{Dt();Or();zr=class extends On{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=es.clone(e.uniforms),this.material=new Zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var zo,Fl,Ru=Dn(()=>{Or();zo=class extends On{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Fl=class extends On{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Bl,fm=Dn(()=>{Dt();wu();Au();Ru();Ru();Bl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new oe);this._width=i.width,this._height=i.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zr(zl),this.copyPass.material.blending=ai,this.clock=new al}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zo!==void 0&&(o instanceof zo?i=!0:o instanceof Fl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Hl,pm=Dn(()=>{Dt();Or();Hl=class extends On{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var mm,gm=Dn(()=>{Dt();mm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var Fr,xm=Dn(()=>{Dt();Or();wu();gm();Fr=class n extends On{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Ce(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(r,o,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new Sn(r,o,{type:ei});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Sn(r,o,{type:ei});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=mm;this.highPassUniforms=es.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Zt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=zl;this.copyUniforms=es.clone(h.uniforms),this.blendMaterial=new Zt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:nn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ce,this.oldClearAlpha=1,this.basic=new dt,this.fsQuad=new rs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Fr.BlurDirectionX=new oe(1,0);Fr.BlurDirectionY=new oe(0,1)});var _m,vm=Dn(()=>{_m={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var kl,ym=Dn(()=>{Dt();Or();vm();kl=class extends On{constructor(){super();let e=_m;this.uniforms=es.clone(e.uniforms),this.material=new nl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new rs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Mm={};uc(Mm,{createPostFX:()=>rE});function rE(n,e,t){let i=new Bl(n);i.addPass(new Hl(e,t));let s=new Fr(new oe(window.innerWidth,window.innerHeight),.35,.65,.82);i.addPass(s);let r=new zr(sE);return i.addPass(r),i.addPass(new kl),{composer:i,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){i.setSize(o,a)},setPixelRatio(o){i.setPixelRatio(o)},render(){i.render()}}}var sE,Sm=Dn(()=>{Dt();fm();pm();xm();Au();ym();sE={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});Dt();var tu={};uc(tu,{CAR_DEFS:()=>Li,applyCarSkin:()=>FM,buildCar:()=>UM,carDef:()=>eu,effectiveStats:()=>zM,extrudeProfile:()=>To,glassMat:()=>lp,paintCar:()=>NM,paintMat:()=>ap,setWheelStyle:()=>OM});Dt();var Li=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}},{id:"sedan",name:"Prairie Sedan",desc:"Comfy daily driver. Easy to handle.",price:6e3,colors:[7041664,1718891,15921906,7999504,1316380],stats:{topSpeed:48,accel:14,handling:1,grip:1,nitroTime:3,nitroPower:1.3}},{id:"taxi",name:"Peg City Cab",desc:"Yellow cab with a roof sign. Nimble.",price:7500,colors:[16761856,16761856,15921906],stats:{topSpeed:49,accel:15,handling:1.05,grip:1,nitroTime:3,nitroPower:1.3},extra:"taxi"},{id:"van",name:"Delivery Van",desc:"Big box on wheels. Slow, heavy, tough.",price:9e3,colors:[15921906,2060267,2976335,12589080],stats:{topSpeed:42,accel:12,handling:.8,grip:1,nitroTime:4,nitroPower:1.3}},{id:"police",name:"Interceptor",desc:"Police-spec V8 with a light bar.",price:28e3,colors:[1316380,15921906,1718891],stats:{topSpeed:60,accel:19,handling:1.1,grip:1.15,nitroTime:3.4,nitroPower:1.4},extra:"police"},{id:"hyper",name:"Aurora Hyper",desc:"The fastest thing in the city. Wings and all.",price:9e4,colors:[16735802,11032055,1622208,15921906,1316380],stats:{topSpeed:76,accel:27,handling:1.3,grip:1.4,nitroTime:3.2,nitroPower:1.55}}],eu=n=>Li.find(e=>e.id===n)||Li[0],ap=n=>new ji({color:n,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),lp=()=>new ji({color:922652,metalness:.9,roughness:.08,envMapIntensity:1.6}),cp=()=>new ve({color:14672872,metalness:1,roughness:.22}),wM=()=>new ve({color:1316378,metalness:.4,roughness:.6}),TM=()=>new ve({color:789775,roughness:.95}),AM=()=>new ve({color:12172998,metalness:1,roughness:.3}),RM=()=>new ve({color:5922404,metalness:.9,roughness:.45}),CM=()=>new ve({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),PM=()=>new ve({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),IM=()=>new ve({color:15263976,roughness:.5}),rp=(n,e,t)=>({x:n,y:e,r:t}),LM={taxi:"sedan",police:"sedan"},jh={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},sedan:{W:1.84,wb:1.4,wheelR:.33,track:1.58,body:[[2.3,.3],[2.34,.5],[2.15,.68],[1.25,.78],[.6,.82],[-1.5,.84],[-2.1,.8],[-2.3,.62],[-2.3,.36],[-2,.22],[2,.22]],glass:[[.62,.8],[.25,1.28],[-1.05,1.3],[-1.5,.84]],roof:[[.28,1.24],[-1.08,1.26],[-1.12,1.2],[.24,1.18]],splitter:!1},van:{W:2,wb:1.6,wheelR:.36,track:1.68,body:[[2.45,.3],[2.5,.6],[2.35,.95],[1.6,1.1],[.95,1.1],[.95,2],[-2.45,2],[-2.5,1.85],[-2.5,.35],[-2.2,.24],[2.2,.24]],glass:[[1.62,1.1],[1.05,1.95],[.9,1.95],[.9,1.1]],roof:null,splitter:!1},hyper:{W:2.04,wb:1.4,wheelR:.34,track:1.72,body:[[2.4,.2],[2.45,.38],[2.2,.5],[1.2,.6],[.5,.68],[-1.3,.74],[-2,.72],[-2.35,.6],[-2.4,.38],[-2.3,.2],[-2,.14],[2,.14]],glass:[[.6,.66],[0,1],[-.9,1.02],[-1.4,.74]],roof:[[.04,.97],[-.92,.99],[-.95,.93],[0,.92]],wing:!0,splitter:!0,canards:!0},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function To(n,e,t,i,s=.045){let r=new vo;r.moveTo(n[0][0],n[0][1]);for(let l=1;l<n.length;l++)r.lineTo(n[l][0],n[l][1]);r.closePath();for(let l of i||[]){let c=new Ts;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new el(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new ne(o,t);return a.castShadow=!0,a}function DM(n,e,t){let i=new ut,s=new ne(new St(e,e,.26,22),TM());s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);let r=new ne(new St(e*.52,e*.52,.27,18),RM());r.rotation.z=Math.PI/2,i.add(r);let o=new ne(new tl(e*.62,e*.1,8,22),t);o.rotation.y=Math.PI/2,i.add(o);let a=new ut;for(let h=0;h<5;h++){let f=new ne(new Ie(.05,e*.6,e*.16),t);f.position.y=e*.3;let p=new ut;p.rotation.x=h/5*Math.PI*2,p.add(f),a.add(p)}let l=a.clone();l.rotation.y=Math.PI,i.add(a),i.add(l);let c=new ne(new St(e*.14,e*.14,.3,12),cp());return c.rotation.z=Math.PI/2,i.add(c),n==="blackout"?t.color.setHex(1513500):n==="gold"?t.color.setHex(13211182):n==="neon"&&t.color.setHex(2287359),i}function UM(n,e,t="stock"){let i=typeof n=="string"?eu(n):n||Li[0],s=i.id||"sport";typeof e!="number"&&(e=typeof i.color=="number"?i.color:i.colors[0]);let r=jh[s]||jh[LM[s]]||jh.sport,o=new ut,a=ap(e),l=lp(),c=cp(),h=wM(),f=[rp(r.wb,r.wheelR,r.wheelR+.13),rp(-r.wb,r.wheelR,r.wheelR+.13)];o.add(To(r.body,r.W,a,f)),o.add(To(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(To(r.roof,r.W-.2,a,null,.02));let p=Math.max(...r.body.map(y=>y[0])),m=Math.min(...r.body.map(y=>y[0])),x=-p,g=-m,d=r.W/2,u=[],M=AM();for(let y of[-1,1])for(let D of[-r.wb,r.wb]){let F=DM(t,r.wheelR,M);F.position.set(y*r.track/2,r.wheelR,D),o.add(F),u.push(F)}let v=CM();for(let y of[-1,1]){let D=new ne(new Ie(.34,.16,.1),h);D.position.set(y*(d-.42),.6,x+.02),o.add(D);let F=new ne(new sn(.085,12,10),v);F.scale.set(1.6,.75,.7),F.position.set(y*(d-.42),.6,x-.03),o.add(F)}let _=new ne(new Ie(d*1.1,.16,.08),h);if(_.position.set(0,.4,x+.01),o.add(_),r.splitter){let y=new ne(new Ie(r.W*.92,.05,.3),h);y.position.set(0,.16,x+.1),o.add(y)}if(r.hoodScoop){let y=new ne(new Ie(.5,.09,.7),h);y.position.set(0,.86,-(r.wb*.55)),o.add(y)}if(r.canards)for(let y of[-1,1]){let D=new ne(new Ie(.22,.03,.3),h);D.position.set(y*(d-.1),.3,x+.12),D.rotation.z=y*.25,o.add(D)}let R=PM(),b=new ne(new Ie(r.W*.78,.1,.06),R);b.position.set(0,.66,g-.02),o.add(b);for(let y of[-1,1]){let D=new ne(new Ie(.12,.06,.065),new ve({color:14540253,emissive:16777215,emissiveIntensity:.6}));D.position.set(y*.28,.66,g-.02),o.add(D)}let S=new ne(new Ie(r.W*.8,.14,.18),h);S.position.set(0,.24,g-.06),o.add(S);for(let y of[-1,1]){let D=new ne(new St(.05,.055,.22,12),c);D.rotation.x=Math.PI/2,D.position.set(y*.32,.26,g+.06),o.add(D)}let A=new ne(new Ie(.34,.09,.02),IM());A.position.set(0,.5,g+.005),o.add(A);for(let y of[-1,1]){let D=new ne(new Ie(.1,.03,.05),h);D.position.set(y*(d+.03),1,-(r.wb*.42)),o.add(D);let F=new ne(new Ie(.1,.1,.16),a);F.position.set(y*(d+.09),1.04,-(r.wb*.42)),F.castShadow=!0,o.add(F)}if(r.rails)for(let y of[-1,1]){let D=new ne(new Ie(.06,.05,1.9),h);D.position.set(y*(d-.35),1.72,.1),o.add(D)}if(r.bed){let y=new ne(new Ie(r.W-.5,.06,2),h);y.position.set(0,1.02,m*.55),o.add(y)}if(r.spoiler||r.wing){let y=!!r.wing;for(let F of[-1,1]){let L=new ne(new Ie(.07,y?.3:.16,.24),y?h:a);L.position.set(F*(d-.45),.86+(y?.1:.04),g+.28),o.add(L)}let D=new ne(new Ie(r.W*(y?.92:.8),.045,y?.42:.3),y?h:a);D.position.set(0,y?1.06:.98,g+.28),D.rotation.x=y?-.12:0,D.castShadow=!0,o.add(D)}let E=null;if(i.extra==="taxi"||i.extra==="police"){let y=Math.max(...(r.roof||r.glass).map(F=>F[1]))+.02,D=(r.roof||r.glass).reduce((F,L)=>F+L[0],0)/(r.roof||r.glass).length;if(i.extra==="taxi"){let F=document.createElement("canvas");F.width=128,F.height=32;let L=F.getContext("2d");L.fillStyle="#ffd23f",L.fillRect(0,0,128,32),L.fillStyle="#111",L.font="bold 22px sans-serif",L.textAlign="center",L.fillText("TAXI",64,24);let I=new on(F);I.colorSpace=gt;let T=new ne(new Ie(.62,.2,.26),new ve({map:I,emissive:16777215,emissiveMap:I,emissiveIntensity:.6}));T.position.set(0,y+.1,-D),T.rotation.y=Math.PI/2,o.add(T)}else{let F=new ne(new Ie(1.1,.1,.28),h);F.position.set(0,y+.05,-D),o.add(F);let L=new ve({color:5570560,emissive:16718362,emissiveIntensity:2.5}),I=new ve({color:85,emissive:1723903,emissiveIntensity:2.5}),T=new ne(new Ie(.48,.12,.24),L);T.position.set(-.27,y+.14,-D);let U=new ne(new Ie(.48,.12,.24),I);U.position.set(.27,y+.14,-D),o.add(T,U),E=[L,I]}}return o.userData={flashers:E,defId:s,bodyColor:e,wheels:u,frontWheels:u.filter(y=>y.position.z<0),rim:M,glass:l,paint:a,setBrake:y=>{},profile:r,frontZ:x,rearZ:g},o}function NM(n,e){let t=new Ce(e);n.traverse(i=>{i.isMesh&&i.material&&i.material.isMeshPhysicalMaterial&&i.material.color&&Math.abs(i.material.color.getHex()-n.userData.bodyColor)<2&&!i.material.emissiveIntensity&&i.material.color.copy(t)}),n.userData.bodyColor=e}function OM(n,e){let t=n.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function zM(n,e){let i=(typeof n=="string"?eu(n):n||Li[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:i.topSpeed*(1+.055*r("engine")),accel:i.accel*(1+.09*r("engine")+.12*r("turbo")),handling:i.handling*(1+.06*r("suspension")),grip:i.grip*(1+.07*r("tires")),nitroTime:i.nitroTime+.5*r("nitro"),nitroPower:i.nitroPower*(1+.08*r("nitro"))}}var op={clear:4873070,dark:922652,limo:131844};function FM(n,e,t){let i=n.userData;if(typeof e=="number"&&i.paint&&(i.paint.color.setHex(e),i.bodyColor=e),!t)return n;i.rim&&i.rim.color.setHex(t.rims),i.glass&&i.glass.color.setHex(op[t.tint]??op.dark),i.skinParts&&(n.remove(i.skinParts),i.skinParts.traverse(o=>{o.isMesh&&o.geometry.dispose()}));let s=new ut;i.skinParts=s,n.add(s);let r=i.profile;if(r&&t.stripes!=="none"){let o=new ji({color:t.stripe,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.1});if(t.stripes==="side"){let a=(i.rearZ-i.frontZ)*.86,l=(i.rearZ+i.frontZ)/2,c=r.wheelR+.22;for(let h of[-1,1]){let f=new ne(new Ie(.02,.09,a),o);f.position.set(h*(r.W/2+.05),c,l),s.add(f)}}else{let a=t.stripes==="dual"?[-.22,.22]:[0],l=t.stripes==="dual"?.16:.34;for(let c of a)for(let h of[r.body,r.roof]){if(!h)continue;let f=To(h,l,o,null,.045);f.castShadow=!1,f.scale.set(1,1.012,1.004),f.position.set(c,.006,0),s.add(f)}}}if(t.glow!=null&&r){let o=new dt({color:t.glow,transparent:!0,opacity:.75,blending:nn,depthWrite:!1,map:BM()}),a=i.rearZ-i.frontZ+1.2,l=new ne(new rt(r.W+1.4,a).rotateX(-Math.PI/2),o);l.position.set(0,.07,(i.rearZ+i.frontZ)/2),l.renderOrder=2,s.add(l)}return n}var fl=null;function BM(){if(fl)return fl;let n=document.createElement("canvas");n.width=64,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(32,64,4,32,64,62);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,1),e.fillStyle=t,e.fillRect(0,0,64,128),e.restore(),fl=new on(n),fl}Dt();var HM=1337,nu=null,$t=5,li=60,ii=14,ni=li+ii,iu=($t*ni+ii)/2,Ps=232,Ao=225,su=9;function kM(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Is(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new on(i);return s.colorSpace=gt,s.anisotropy=4,s}function hp(){return Is(128,128,(n,e,t)=>{n.fillStyle="#33363b",n.fillRect(0,0,e,t),n.fillStyle="#3a3d42";for(let i=0;i<160;i++)n.fillRect(i*37%e,i*53%t,2,2);n.fillStyle="#cfd3d8",n.fillRect(4,0,4,t),n.fillRect(e-8,0,4,t),n.fillStyle="#e8c33a";for(let i=0;i<t;i+=32)n.fillRect(e/2-3,i,6,16)})}function GM(){return Is(128,256,(n,e,t)=>{n.fillStyle="#8d97a3",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++){let c=(a*7+l*13)%17===0;n.fillStyle=c?"#ffe08a":"#3b4656",n.fillRect(l*r+3,a*o+4,r-6,o-8),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(l*r+3,a*o+4,r-6,3)}})}function VM(){return Is(128,256,(n,e,t)=>{n.fillStyle="#000000",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++)(a*7+l*13)%5===0&&(n.fillStyle=(a+l)%3===0?"#ffd9a0":"#fff3d0",n.fillRect(l*r+3,a*o+4,r-6,o-8))})}var Cn={p:null,q:null,s:null,m:null};function En(n,e,t,i,s,r,o,a,l){Cn.p.set(t,i,s),Cn.q.setFromAxisAngle(Cn.up,r),Cn.s.set(o,a,l),Cn.m.compose(Cn.p,Cn.q,Cn.s),n.setMatrixAt(e,Cn.m)}function up(n,e,t,i,s){for(let r of n)if(t>r.minX&&e<r.maxX&&s>r.minZ&&i<r.maxZ)return!0;return!1}function dp(n,e=[]){let t=kM(HM);Cn.p=new z,Cn.q=new An,Cn.s=new z,Cn.m=new lt,Cn.up=new z(0,1,0);let i=[];n.fog=new Xa(13623538,200,750);let s=new il(12572927,6978138,.9);n.add(s);let r=new ol(16774368,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=10,r.shadow.camera.far=400;let o=110;r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.bias=-8e-4,n.add(r),n.add(r.target);let a=70,l=120,c=45,h=16,f=new rt(1400,1400);f.rotateX(-Math.PI/2);let p=new ne(f,new ve({color:6130250,roughness:.95,metalness:0,envMapIntensity:.25}));p.receiveShadow=!0,n.add(p);let m=[];for(let ae=0;ae<=$t;ae++)m.push((ae-$t/2)*ni);let x=$t*ni+ii,g=hp();g.wrapS=g.wrapT=Ri,g.repeat.set(1,x/ii);let d=new rt(1,1);d.rotateX(-Math.PI/2);let u=new ve({map:g,roughness:.9,metalness:.05,envMapIntensity:.35}),M=new Rt(d,u,m.length*2);M.receiveShadow=!0;let v=0;for(let ae of m)En(M,v++,ae,.05,0,0,ii,1,x),En(M,v++,0,.05,ae,Math.PI/2,ii,1,x);M.instanceMatrix.needsUpdate=!0,n.add(M);let _=new rt(1,1);_.rotateX(-Math.PI/2);let R=new Rt(_,new ve({color:10132898,roughness:.9,metalness:.05,envMapIntensity:.3}),$t*$t);R.receiveShadow=!0;let b=0;for(let ae=0;ae<$t;ae++)for(let he=0;he<$t;he++){let $=(ae-($t-1)/2)*ni,O=(he-($t-1)/2)*ni;En(R,b++,$,.03,O,0,li,1,li)}R.instanceMatrix.needsUpdate=!0,n.add(R);let S=GM(),A=new Ie(1,1,1);A.translate(0,.5,0);let E=new ve({map:S,emissiveMap:VM(),emissive:16762995,emissiveIntensity:0,roughness:.85,metalness:.1,envMapIntensity:.4}),y=110,D=new Rt(A,E,y);D.castShadow=!0,D.receiveShadow=!0;let F=new Ce,L=[],I=[],T=0,U=4,H=0,N=0;for(let ae=0;ae<$t;ae++)for(let he=0;he<$t;he++){let $=(ae-($t-1)/2)*ni,O=(he-($t-1)/2)*ni,ee=ae===H&&he===N,ie=Math.abs(ae-2)<=1&&Math.abs(he-2)<=1,Me=t()<.75?4:9,Ee=Math.sqrt(Me),qe=(li-U*2)/Ee;for(let st=0;st<Me&&T<y;st++){if(ee||t()<.28)continue;let xt=st%Ee,Ot=Math.floor(st/Ee),Ye=qe*(.55+t()*.3),pt=qe*(.55+t()*.3),_n=ie?60:28,zi=ie?18:10,Fi=zi+t()*(_n-zi),_t=$-(li-U*2)/2+qe*(xt+.5)+(t()-.5)*2,wt=O-(li-U*2)/2+qe*(Ot+.5)+(t()-.5)*2,Xt=.82+t()*.32,Vs=t();if(!up(e,_t-Ye/2,_t+Ye/2,wt-pt/2,wt+pt/2)){En(D,T,_t,.03,wt,0,Ye,Fi,pt),Vs<.45?F.setRGB(Xt,Xt*.97,Xt*.95):Vs<.65?F.setRGB(Xt,Xt*.9,Xt*.82):Vs<.82?F.setRGB(Xt*.88,Xt*.95,Xt):F.setRGB(Xt,Xt*.82,Xt*.74),D.setColorAt(T,F),L.push({x:_t,h:Fi,w:Ye,d:pt,z:wt});{let Zr=_t-$,qo=wt-O,$r=0,Jr=0;Math.abs(Zr)>Math.abs(qo)?$r=Zr>=0?1:-1:Jr=qo>=0?1:-1;let P={x:_t+$r*(Ye/2),z:wt+Jr*(pt/2),nx:$r,nz:Jr};I.push({id:I.length,minX:_t-Ye/2,maxX:_t+Ye/2,minZ:wt-pt/2,maxZ:wt+pt/2,h:Fi,door:P})}i.push({minX:_t-Ye/2,maxX:_t+Ye/2,minZ:wt-pt/2,maxZ:wt+pt/2}),T++}}}D.count=T,D.instanceMatrix.needsUpdate=!0,D.instanceColor&&(D.instanceColor.needsUpdate=!0),n.add(D);{let ae=Is(64,96,(ee,ie,Me)=>{ee.fillStyle="#20262f",ee.fillRect(0,0,ie,Me),ee.fillStyle="#ffd98a",ee.fillRect(0,0,ie,6),ee.fillRect(0,0,5,Me),ee.fillRect(ie-5,0,5,Me),ee.fillStyle="#6fa8d8",ee.fillRect(9,12,ie/2-12,Me-20),ee.fillRect(ie/2+3,12,ie/2-12,Me-20),ee.fillStyle="#cfd3d8",ee.fillRect(ie/2-6,Me/2,3,10),ee.fillRect(ie/2+3,Me/2,3,10)}),he=new rt(2.2,3);he.translate(0,1.5,0);let $=new ve({map:ae,emissive:16762995,emissiveMap:ae,emissiveIntensity:.25,roughness:.4,metalness:.3}),O=new Rt(he,$,Math.max(1,I.length));I.forEach((ee,ie)=>{let Me=ee.door.nx?ee.door.nx>0?Math.PI/2:-Math.PI/2:ee.door.nz>0?0:Math.PI;En(O,ie,ee.door.x+ee.door.nx*.03,.04,ee.door.z+ee.door.nz*.03,Me,1,1,1)}),O.count=I.length,O.instanceMatrix.needsUpdate=!0,n.add(O),nu=$}{let ae=new Ie(1.6,1.1,1.6);ae.translate(0,.55,0);let he=new ve({color:9146518,roughness:.7,metalness:.4,envMapIntensity:.4}),$=[];for(let ee of L){let ie=1+Math.floor(t()*2);for(let Me=0;Me<ie;Me++)$.push([ee.x+(t()-.5)*ee.w*.5,ee.h+.03,ee.z+(t()-.5)*ee.d*.5,.7+t()*.7])}let O=new Rt(ae,he,Math.max(1,$.length));$.forEach(([ee,ie,Me,Ee],qe)=>En(O,qe,ee,ie,Me,t()*3.14,Ee,1,Ee)),O.count=$.length,O.instanceMatrix.needsUpdate=!0,n.add(O)}{let ae=(H-($t-1)/2)*ni,he=(N-($t-1)/2)*ni,$=new ne(new rt(li,li).rotateX(-Math.PI/2),new ve({color:3356219,roughness:.95,metalness:.02,envMapIntensity:.25}));$.position.set(ae,.045,he),$.receiveShadow=!0,n.add($);let O=new Ie(.14,.02,5.6);O.translate(0,.01,0);let ee=new ve({color:15264492,roughness:.7}),ie=3,Me=[-7.5,7.5],Ee=12,qe=ae-Ee*ie/2,st=Me.length*(Ee+1),xt=new Rt(O,ee,st),Ot=new Ie(1.8,.14,.16);Ot.translate(0,.07,0);let Ye=new ve({color:10132898,roughness:.9}),pt=new Rt(Ot,Ye,Me.length*Ee),_n=0,zi=0;for(let _t of Me){for(let wt=0;wt<=Ee;wt++)En(xt,_n++,qe+wt*ie,.055,he+_t,0,1,1,1);for(let wt=0;wt<Ee;wt++)En(pt,zi++,qe+wt*ie+ie/2,.055,he+_t+(_t<0?1.9:-1.9),0,1,1,1)}xt.count=_n,xt.instanceMatrix.needsUpdate=!0,pt.count=zi,pt.instanceMatrix.needsUpdate=!0,n.add(xt,pt);let Fi=new ne(new rt(20,5).rotateX(-Math.PI/2),new ve({map:Is(256,64,(_t,wt,Xt)=>{_t.fillStyle="#33363b",_t.fillRect(0,0,wt,Xt),_t.fillStyle="#e8c33a",_t.font="bold 40px sans-serif",_t.textAlign="center",_t.textBaseline="middle",_t.fillText("PARKING",wt/2,Xt/2)}),roughness:.9,transparent:!1}));Fi.position.set(ae,.055,he),n.add(Fi)}{let ae=new Ie(.7,.02,3.2);ae.translate(0,.01,0);let he=new ve({color:14672614,roughness:.75}),$=[];for(let ee of[2,3])for(let ie of[2,3]){let Me=m[ee],Ee=m[ie],qe=ii/2+2.6;for(let[st,xt,Ot]of[[Me,Ee-qe,0],[Me,Ee+qe,0],[Me-qe,Ee,1],[Me+qe,Ee,1]])for(let Ye=-2;Ye<=2;Ye++)$.push(Ot===0?[st+Ye*2.2,.06,xt,0]:[st,.06,xt+Ye*2.2,Math.PI/2])}let O=new Rt(ae,he,$.length);$.forEach(([ee,ie,Me,Ee],qe)=>En(O,qe,ee,ie,Me,Ee,1,1,1)),O.instanceMatrix.needsUpdate=!0,O.receiveShadow=!0,n.add(O)}let k=new St(.12,.16,9,6);k.translate(0,4.5,0);let X=new ve({color:3948872,roughness:.6,metalness:.6,envMapIntensity:.6}),q=new Ie(1.6,.25,.5);q.translate(.6,9,0);let te=new ve({color:16773828,emissive:16766842,emissiveIntensity:.35,roughness:.4,metalness:.2}),G=[];for(let ae of m)for(let he=-x/2+25;he<x/2-10;he+=46){let $=Math.round(he/46)%2===0?1:-1;G.push([ae+$*(ii/2+1.5),he,0]),G.push([he,ae+$*(ii/2+1.5),1])}let K=new Rt(k,X,G.length),me=new Rt(q,te,G.length);G.forEach(([ae,he,$],O)=>{En(K,O,ae,0,he,0,1,1,1),En(me,O,ae,0,he,$?Math.PI/2:0,1,1,1)}),K.instanceMatrix.needsUpdate=!0,me.instanceMatrix.needsUpdate=!0,n.add(K,me);let ye=[];for(let ae=0;ae<$t;ae++)for(let he=0;he<$t;he++){if(ae===H&&he===N)continue;let $=(ae-($t-1)/2)*ni,O=(he-($t-1)/2)*ni,ee=2+Math.floor(t()*3);for(let ie=0;ie<ee;ie++)ye.push([$+(t()-.5)*(li-8),O+(t()-.5)*(li-8),.8+t()*.5])}let pe=new St(.18,.28,2.6,6);pe.translate(0,1.3,0);let Le=new wr(1.9,4.6,7);Le.translate(0,4.4,0);let Fe=new Rt(pe,new ve({color:7031342,roughness:.9,envMapIntensity:.2}),ye.length),Te=new Rt(Le,new ve({color:4094516,roughness:.85,envMapIntensity:.3}),ye.length);Te.castShadow=!0;for(let ae=ye.length-1;ae>=0;ae--){let[he,$]=ye[ae];up(e,he-2,he+2,$-2,$+2)&&ye.splice(ae,1)}ye.forEach(([ae,he,$],O)=>{En(Fe,O,ae,.03,he,t()*6.28,$,$,$),En(Te,O,ae,.03,he,t()*6.28,$,$*(.9+t()*.3),$)}),Fe.instanceMatrix.needsUpdate=!0,Te.instanceMatrix.needsUpdate=!0,n.add(Fe,Te);let He=Is(64,64,(ae,he,$)=>{let O=ae.createRadialGradient(32,32,2,32,32,30);O.addColorStop(0,"rgba(255,220,150,1)"),O.addColorStop(.4,"rgba(255,200,120,0.45)"),O.addColorStop(1,"rgba(255,190,110,0)"),ae.fillStyle=O,ae.fillRect(0,0,he,$)}),B=new Yt,ge=new Float32Array(G.length*3);G.forEach(([ae,he],$)=>{ge[$*3]=ae,ge[$*3+1]=8.9,ge[$*3+2]=he}),B.setAttribute("position",new un(ge,3));let j=new xo({map:He,size:14,transparent:!0,opacity:0,blending:nn,depthWrite:!1,sizeAttenuation:!0}),fe=new Za(B,j);fe.frustumCulled=!1,n.add(fe);let Q=new Ie(1,1,1);Q.translate(0,.5,0);let De=new dt({color:2767445}),Se=46,C=new Rt(Q,De,Se);for(let ae=0;ae<Se;ae++){let he=ae/Se*Math.PI*2+t()*.1,$=760+t()*220,O=40+t()*60,ee=60+t()*130,ie=40+t()*60;En(C,ae,Math.cos(he)*$,0,Math.sin(he)*$,t()*.6,O,ee,ie)}C.instanceMatrix.needsUpdate=!0,n.add(C);let w=Ao*2,V=Is(128,128,(ae,he,$)=>{ae.fillStyle="#2e3136",ae.fillRect(0,0,he,$),ae.fillStyle="#cfd3d8",ae.fillRect(2,0,5,$),ae.fillRect(he-7,0,5,$),ae.fillStyle="#e8c33a";for(let O=0;O<$;O+=32)ae.fillRect(he/2-3,O,6,16)});V.wrapS=V.wrapT=Ri,V.repeat.set(1,w/14);let le=new rt(1,1);le.rotateX(-Math.PI/2);let re=new ne(le,new ve({map:V,roughness:.9,metalness:.05,envMapIntensity:.35}));re.scale.set(su,1,w),re.position.set(Ps,.05,0),re.receiveShadow=!0,n.add(re);let se=hp();se.wrapS=se.wrapT=Ri,se.repeat.set(1,(Ps-iu)/ii+2);let Pe=Ps-iu+20,xe=new ne(le,new ve({map:se,roughness:.9,metalness:.05,envMapIntensity:.35}));xe.scale.set(Pe,1,ii),xe.rotation.y=Math.PI/2,xe.position.set((iu+Ps)/2,.05,0),xe.receiveShadow=!0,n.add(xe);let be=new ne(new rt(su,1.6).rotateX(-Math.PI/2),new ve({color:15922422,roughness:.7}));be.position.set(Ps,.07,Ao-8),n.add(be);let Be=new Ie(4,1.1,.7);Be.translate(0,.55,0);let Xe=new ve({color:16777215,roughness:.6,metalness:.1,envMapIntensity:.4}),ce=Math.floor(w/9)*2,Ke=new Rt(Be,Xe,ce);Ke.castShadow=!0;let Qe=new Ce,ke=0;for(let ae=-Ao+4;ae<=Ao-4&&ke<ce;ae+=9)for(let he of[-1,1])En(Ke,ke,Ps+he*(su/2+1.6),.05,ae,0,1,1,1),Qe.setHex(ke%2===0?15229982:15922422),Ke.setColorAt(ke,Qe),ke++;Ke.count=ke,Ke.instanceMatrix.needsUpdate=!0,Ke.instanceColor&&(Ke.instanceColor.needsUpdate=!0),n.add(Ke);let Oe={x:m[3],z:120,heading:0},Ae={startX:Ps,startZ:Ao-8,dirX:0,dirZ:-1,length:w};function Ze(ae){E.emissiveIntensity=ae*1.4,nu&&(nu.emissiveIntensity=.25+ae*1.2),te.emissiveIntensity=.35+ae*3,j.opacity=ae*.85,De.color.setHex(ae>.5?923174:2767445)}function at(ae,he){let $=Math.round(he.x/h)*h,O=Math.round(he.z/h)*h;r.target.position.set($,0,O),r.position.set($+a,l,O+c),r.target.updateMatrixWorld()}return at(0,Oe),{colliders:i,buildings:I,spawn:Oe,dragStrip:Ae,update:at,setGlow:Ze,sun:r,hemi:s,roadLines:m}}var pl=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0}update(e,t,i){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,f=0,p=h?.25:1;e.throttle>0?f=e.throttle*s.accel*c*p*(1-Math.max(0,l)/(s.topSpeed*c)*.72):e.throttle<0&&(f=l>1?e.throttle*s.accel*1.6:e.throttle*s.accel*.5),f-=l*(.028+(h?.06:0))+Math.sign(l)*.6,l+=f*t;let m=s.topSpeed*c,x=-s.topSpeed*.35;l=Math.max(x,Math.min(m,l)),Math.abs(l)<.15&&!e.throttle&&(l=0);let g=Math.abs(l),d=Math.min(1,g/8),u=this.steer*.55*s.handling*d*(1-Math.min(1,g/(s.topSpeed*1.4))*.45);g>.5&&(this.heading-=u*(l/g)*t*(g>1?Math.min(2.2,g*.12+.8):1)*2.2);let M=-Math.sin(this.heading),v=-Math.cos(this.heading),_=this.vel.x*M+this.vel.z*v,R=this.vel.x-M*_,b=this.vel.z-v*_;this.drifting=!!(e.handbrake&&g>6);let S=this.drifting?.983:Math.min(.995,.9+s.grip*.06),A=Math.pow(S,t*60);R*=A,b*=A;let E=_+(l-_)*Math.min(1,t*60);this.vel.x=M*E+R,this.vel.z=v*E+b;let y=this.pos.x+this.vel.x*t,D=this.pos.z+this.vel.z*t;if(i){let F=i(y,D,this.pos.x,this.pos.z);y=F.x,D=F.z,F.hitX&&(this.vel.x*=-.25),F.hitZ&&(this.vel.z*=-.25)}return this.pos.x=y,this.pos.z=D,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer}}};function fp(n={}){let e=n.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1},i={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1},s={x:0,y:0,id:null},r="drive",o=!1,a=!1,l=!1,c=!1,h=!1,f=[],p=y=>document.getElementById(y);function m(){t.steer=(i.right?1:0)-(i.left?1:0),t.throttle=i.gas?1:i.brake?-1:0,t.nitro=i.nitro,t.handbrake=i.handbrake;let y=(i.right?1:0)-(i.left?1:0),D=(i.gas?1:0)-(i.brake?1:0);t.moveX=s.id!==null?s.x:y,t.moveY=s.id!==null?s.y:D,t.run=i.run||i.nitro||s.id!==null&&Math.hypot(s.x,s.y)>.92,t.fire=i.fire}function x(y,D){if(!y)return;let F=44,L=U=>{if(U.pointerId!==s.id)return;let H=y.getBoundingClientRect(),N=U.clientX-(H.left+H.width/2),k=U.clientY-(H.top+H.height/2),X=N,q=k;e()&&(X=k,q=-N);let te=Math.hypot(X,q),G=Math.min(te,F);te>0&&(X=X/te*G,q=q/te*G),D.style.transform=`translate(${X}px, ${q}px)`;let K=.12,me=X/F,ye=-q/F;Math.hypot(me,ye)<K&&(me=0,ye=0),s.x=me,s.y=ye,m()},I=U=>{if(U.preventDefault(),s.id===null){s.id=U.pointerId;try{y.setPointerCapture(U.pointerId)}catch{}L(U)}},T=U=>{U.pointerId===s.id&&(s.id=null,s.x=0,s.y=0,D.style.transform="translate(0px, 0px)",m())};y.addEventListener("pointerdown",I),y.addEventListener("pointermove",L),y.addEventListener("pointerup",T),y.addEventListener("pointercancel",T),f.push(()=>{y.removeEventListener("pointerdown",I),y.removeEventListener("pointermove",L),y.removeEventListener("pointerup",T),y.removeEventListener("pointercancel",T)})}function g(y,D){if(!y)return;let F=I=>{I.preventDefault(),I.stopPropagation(),D(),y.classList.add("pressed")},L=()=>y.classList.remove("pressed");y.addEventListener("pointerdown",F),y.addEventListener("pointerup",L),y.addEventListener("pointerleave",L),f.push(()=>{y.removeEventListener("pointerdown",F),y.removeEventListener("pointerup",L),y.removeEventListener("pointerleave",L)})}function d(y,D){if(!y)return;let F=0,L=U=>{U.preventDefault(),F++,D==="fire"&&!i.fire&&(c=!0),i[D]=!0,m(),y.classList.add("pressed")},I=()=>{F=Math.max(0,F-1),F===0&&(i[D]=!1,m(),y.classList.remove("pressed"))},T=U=>U.preventDefault();y.addEventListener("pointerdown",L),y.addEventListener("pointerup",I),y.addEventListener("pointercancel",I),y.addEventListener("pointerleave",I),y.addEventListener("contextmenu",T),f.push(()=>{y.removeEventListener("pointerdown",L),y.removeEventListener("pointerup",I),y.removeEventListener("pointercancel",I),y.removeEventListener("pointerleave",I),y.removeEventListener("contextmenu",T)})}function u(y){if(!y)return;let D=L=>{L.preventDefault(),o=!0,y.classList.add("pressed")},F=()=>y.classList.remove("pressed");y.addEventListener("pointerdown",D),y.addEventListener("pointerup",F),y.addEventListener("pointercancel",F),y.addEventListener("pointerleave",F),f.push(()=>{y.removeEventListener("pointerdown",D),y.removeEventListener("pointerup",F),y.removeEventListener("pointercancel",F),y.removeEventListener("pointerleave",F)})}let M={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function v(y){let D=y.target;if(D&&(D.tagName==="INPUT"||D.tagName==="TEXTAREA"))return;let F=y.key,L=M[F];if(L){i[L]=!0,m(),y.preventDefault();return}if(F===" "){if(y.preventDefault(),y.repeat)return;r==="drag"?o=!0:r==="foot"?(i.fire||(c=!0),i.fire=!0,m()):(i.handbrake=!0,m());return}if(F==="e"||F==="E"||F==="Enter"){y.repeat||(a=!0);return}if(F==="q"||F==="Q"){y.repeat||(l=!0);return}(F==="Shift"||F==="f"||F==="F")&&(i.nitro=!0,m())}function _(y){let D=y.key,F=M[D];if(F){i[F]=!1,m();return}if(D===" "){i.handbrake=!1,i.fire=!1,m();return}(D==="Shift"||D==="f"||D==="F")&&(i.nitro=!1,m())}function R(y){r=y==="drag"||y==="foot"?y:"drive";let D=(L,I)=>{let T=p(L);T&&(T.style.display=I?"":"none")};D("steer-zone",r==="drive"),D("pedal-zone",r!=="foot"),D("btn-shift",r==="drag"),D("joystick",r==="foot"),D("foot-zone",r==="foot");for(let L in i)i[L]=!1;s.id=null,s.x=0,s.y=0;let F=p("joy-knob");F&&(F.style.transform="translate(0px, 0px)");for(let L of document.querySelectorAll("#touch-controls .pressed"))L.classList.remove("pressed");m()}function b(){if(h)return;h=!0,d(p("btn-left"),"left"),d(p("btn-right"),"right"),d(p("btn-gas"),"gas"),d(p("btn-brake"),"brake"),d(p("btn-nitro"),"nitro"),d(p("btn-handbrake"),"handbrake"),u(p("btn-shift")),d(p("btn-fire"),"fire"),d(p("btn-run"),"run"),x(p("joystick"),p("joy-knob")),g(p("btn-action"),()=>{a=!0}),g(p("btn-weapon"),()=>{l=!0}),window.addEventListener("keydown",v),window.addEventListener("keyup",_),f.push(()=>{window.removeEventListener("keydown",v),window.removeEventListener("keyup",_)});let y=p("touch-controls");y&&(y.style.display="ontouchstart"in window?"":"none"),R(r)}function S(){for(let y of f)y();f.length=0;for(let y in i)i[y]=!1;o=a=l=c=!1,s.id=null,s.x=s.y=0,m(),h=!1}function A(){let y=o;return o=!1,y}let E=y=>()=>{let D;switch(y){case"action":return D=a,a=!1,D;case"cycle":return D=l,l=!1,D;case"fire":return D=c,c=!1,D}};return{input:t,consumeShift:A,consumeAction:E("action"),consumeCycle:E("cycle"),consumeFireEdge:E("fire"),setMode:R,attach:b,detach:S,get mode(){return r}}}var WM=[.3,.47,.64,.81,1],XM=[1.9,1.45,1.15,.95,.8],ml=.8,mp=.97,qM=.8,YM=45,ZM=2.2,$M=[16765286,448160,10182117,15817653,48121,16704576,15681391],dn=n=>document.getElementById(n);function gp(n,e){return n+Math.random()*(e-n)}function pp(n){return n[Math.random()*n.length|0]}function JM(n){let e=402/(.42*n.topSpeed+.35*n.accel);return Math.min(17,Math.max(8.5,e))*gp(.85,1.15)}function KM(n){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,stats:n}}function QM(n,e,t){let i=n.stats.topSpeed,s=WM[n.gear]*i,r=1-Math.min(1,n.speed/(s*1.02)),o=e*n.stats.accel*XM[n.gear]*Math.max(0,r);o*=n.bogMul,o-=n.speed*.028+Math.sign(n.speed)*.6,n.speed=Math.max(0,n.speed+o*t),n.dist+=n.speed*t,n.rpm=Math.min(1.06,n.speed/s),n.bogMul+=(1-n.bogMul)*Math.min(1,t*2.5)}function jM(n){return n>=ml&&n<=mp?"perfect":n<ml?"early":"late"}function eS(n){if(n.gear>=4)return null;let e=jM(n.rpm);return n.gear++,e==="perfect"?n.speed*=1.015:(n.speed*=.93,n.bogMul=.75),n.limiterT=0,e}function tS(n){let e=JM(n),t=1.1,i=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/i,reactDelay:gp(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:n}}function nS(n,e,t){if(!n.launched)return;let i=e-n.launchT;i<0||(n.speed=n.top*(1-Math.exp(-n.k*i)),n.dist+=n.speed*t)}function iS({falseStart:n,pET:e,aET:t,pDist:i,aDist:s}){return n?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:i>=s}function sS(n,e,t){if(!n)return 100;let i=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(i*10))}function rS(n,e){return n?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function xp(n){let e=dn("drag-ui"),t=dn("drag-msg"),i=dn("drag-result"),s=dn("rpm-bar"),r=dn("rpm-shiftzone"),o=dn("btn-shift"),a={s1:dn("bulb-s1"),s2:dn("bulb-s2"),a1:dn("bulb-a1"),a2:dn("bulb-a2"),a3:dn("bulb-a3"),g:dn("bulb-g"),r:dn("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let L in a)a[L].classList.remove("lit")}function h(L){a[L].classList.add("lit")}function f(L,I){t.textContent=L,l.msgTimer=I||0}function p(L,I){try{n.audio.beep(L,I)}catch{}}function m(){let L=n.getPlayer();return L&&L.stats?L.stats:n.effectiveStats(L.def,L.upgrades)}function x(L,I){let T=n.city.dragStrip;L.position.set(T.startX+l.perpX*I,0,T.startZ+l.perpZ*I),L.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function g(L,I){let T=n.city.dragStrip;L.position.set(T.startX+l.dirX*I.dist+l.perpX*I.lateral,0,T.startZ+l.dirZ*I.dist+l.perpZ*I.lateral)}function d(L,I,T){let U=L.userData.wheels;if(U)for(let H of U){let N=H.userData.spin||[];for(let k of N)k.rotation.x+=I*T*2.2}}function u(L){return KM(L)}function M(L,I,T){QM(L,I,T)}function v(L){let I=eS(L);I&&(I==="perfect"?(f("PERFECT SHIFT!",1),p(1200,.08)):(f(I==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),p(220,.15)))}function _(L){return tS(L)}function R(L,I){nS(L,l.greenT,I)}function b(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),i.classList.add("hidden"),i.innerHTML="",f("STAGE!"),s.style.width="15%",r.style.left=ml*100+"%",r.style.width=(mp-ml)*100+"%",o&&o.classList.remove("hidden")}function S(){l.phase="green",l.t=0,l.greenT=0,h("g"),f("GO!"),p(880,.4),l.phase="racing"}function A(){l.phase="red",c(),h("r"),f("FALSE START!"),p(180,.6),E("FALSE START \u2014 you jumped the green.")}function E(L){l.phase="done",l.finished=!0;let I=l.player,T=l.ai,U=!!(L&&L.indexOf("FALSE START")===0),H=iS({falseStart:U,pET:I.et,aET:T.finishET,pDist:I.dist,aDist:T.dist}),N=I.et,k=T.finishET,X=I.reaction!=null?I.reaction.toFixed(3)+"s":"\u2014",q=(I.trap*ZM).toFixed(1),te=sS(H,N,k),G=rS(H,U);n.addCash(te),i.innerHTML="<h2>"+G+"</h2>"+(L?"<p>"+L+"</p>":"")+"<p>ET: "+(N==null?"DNF":N.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(k==null?"DNF":k.toFixed(3)+"s")+"</p><p>Trap speed: "+q+" MPH &nbsp;\xB7&nbsp; Reaction: "+X+"</p><p>+$"+te+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',i.classList.remove("hidden"),dn("drag-rematch").onclick=()=>{y()},dn("drag-back").onclick=()=>{D()};try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}}function y(){l.active&&D();let I=n.getPlayer().group;l.origPos=I.position.clone(),l.origRotY=I.rotation.y;let T=n.city.dragStrip,U=Math.hypot(T.dirX,T.dirZ)||1;l.dirX=T.dirX/U,l.dirZ=T.dirZ/U,l.perpX=-l.dirZ,l.perpZ=l.dirX,x(I,2),I.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=u(m());let H=pp(n.CAR_DEFS),N=n.buildCar(Object.assign({},H,{color:pp($M)}));n.scene.add(N),x(N,-2),l.aiGroup=N,l.ai=_(n.effectiveStats(H)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),n.controls.setMode("drag");let k=n.camera;k.position.set(T.startX-l.dirX*12+l.perpX*12,5,T.startZ-l.dirZ*12+l.perpZ*12),k.lookAt(T.startX+l.dirX*8,1,T.startZ+l.dirZ*8),b()}function D(){l.aiGroup&&(n.scene.remove(l.aiGroup),l.aiGroup=null);let L=n.getPlayer();L&&L.group&&l.origPos&&(L.group.position.copy(l.origPos),L.group.rotation.y=l.origRotY),e.classList.add("hidden"),i.classList.add("hidden"),o&&o.classList.add("hidden");try{n.controls.setMode("drive")}catch{}try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function F(L){if(!l.active)return;L=Math.min(L,.05);let I=n.controls.input||{},T=Math.max(0,Math.min(1,I.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&T>.5){A();return}if(l.msgTimer>0&&(l.msgTimer-=L,l.msgTimer<=0&&l.phase==="racing"&&f("GO!")),l.phase==="stage")l.t+=L,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,f("READY\u2026"));else if(l.phase==="tree"){l.t+=L;let H=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<H;)l.ambersLit++,h("a"+l.ambersLit),p(440,.15);l.t>=1.5&&S()}else if(l.phase==="racing"){l.greenT+=L;let H=l.player,N=l.ai;!H.reacted&&T>.5&&(H.reacted=!0,H.reaction=l.greenT),!N.launched&&l.greenT>=N.reactDelay&&(N.launched=!0,N.launchT=l.greenT),M(H,T,L),n.controls.consumeShift&&n.controls.consumeShift()&&v(H),H.rpm>=1&&T>.3?(H.limiterT+=L,H.limiterT>=qM&&(H.speed*=.9,H.limiterT=0,f("LIMITER!",.8),p(160,.2))):H.limiterT=Math.max(0,H.limiterT-L*2),R(N,L),H.et==null&&H.dist>=402&&(H.et=l.greenT,H.trap=H.speed),N.finishET==null&&N.dist>=402&&(N.finishET=l.greenT,N.trap=N.speed);let k=l.greenT>=YM;if(H.et!=null&&N.finishET!=null||k||H.et!=null&&l.greenT>H.et+8||N.finishET!=null&&l.greenT>N.finishET+8){E(k&&H.et==null&&N.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,H.rpm)*100+"%";try{n.audio.engine(H.rpm,T),n.audio.skid(T>.8&&H.speed<8&&H.gear===0)}catch{}}let U=n.getPlayer().group;if(g(U,l.player),l.aiGroup&&g(l.aiGroup,l.ai),d(U,l.player.speed,L),l.aiGroup&&d(l.aiGroup,l.ai.speed,L),l.phase==="racing"||l.phase==="done"){let H=n.camera,N=U.position.x,k=U.position.z,X=N-l.dirX*11+l.perpX*7,q=k-l.dirZ*11+l.perpZ*7;H.position.x+=(X-H.position.x)*Math.min(1,L*4),H.position.y+=(4.5-H.position.y)*Math.min(1,L*4),H.position.z+=(q-H.position.z)*Math.min(1,L*4),H.lookAt(N+l.dirX*12,1.2,k+l.dirZ*12)}}return dn("drag-exit").onclick=()=>D(),{enter:y,exit:D,update:F,get active(){return l.active}}}function _p(){let n=null,e=null,t=null,i=null,s=null,r=null,o=null,a=null,l=!1,c=!1;function h(){if(n)return!0;let f=window.AudioContext||window.webkitAudioContext;if(!f)return!1;n=new f,e=n.createGain(),e.gain.value=.5,e.connect(n.destination),t=n.createOscillator(),t.type="sawtooth",t.frequency.value=70,i=n.createOscillator(),i.type="square",i.frequency.value=38,s=n.createBiquadFilter(),s.type="lowpass",s.frequency.value=400,s.Q.value=2,r=n.createGain(),r.gain.value=0,t.connect(s),i.connect(s),s.connect(r),r.connect(e),t.start(),i.start();let p=n.sampleRate,m=n.createBuffer(1,p,n.sampleRate),x=m.getChannelData(0);for(let u=0;u<p;u++)x[u]=Math.random()*2-1;a=m;let g=n.createBufferSource();g.buffer=m,g.loop=!0;let d=n.createBiquadFilter();return d.type="bandpass",d.frequency.value=900,d.Q.value=1.1,o=n.createGain(),o.gain.value=0,g.connect(d),d.connect(o),o.connect(e),g.start(),!0}return{unlock(){c=!0,h()&&(n.state==="suspended"&&n.resume(),l=!0)},engine(f,p){if(!n||!l)return;let m=Math.max(0,Math.min(1,f)),x=Math.max(0,Math.min(1,p)),g=n.currentTime,d=60+m*220;t.frequency.setTargetAtTime(d,g,.03),i.frequency.setTargetAtTime(d*.5+3,g,.03),s.frequency.setTargetAtTime(300+m*900,g,.05),r.gain.setTargetAtTime(x*.11+m*.04,g,.06)},skid(f){!n||!l||o.gain.setTargetAtTime(f?.12:0,n.currentTime,f?.05:.12)},beep(f=660,p=.08){if(!c||!h())return;n.state==="suspended"&&n.resume();let m=n.currentTime,x=n.createOscillator();x.type="sine",x.frequency.value=f;let g=n.createGain();g.gain.setValueAtTime(1e-4,m),g.gain.exponentialRampToValueAtTime(.25,m+.012),g.gain.exponentialRampToValueAtTime(1e-4,m+p),x.connect(g),g.connect(e),x.start(m),x.stop(m+p+.03)},shot(f="pistol"){if(!c||!h())return;let p=n.currentTime,m={pistol:[2600,.16,.5],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],rifle:[2200,.2,.55]}[f]||[2600,.16,.5],x=n.createBufferSource();x.buffer=a;let g=n.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(m[0],p),g.frequency.exponentialRampToValueAtTime(300,p+m[1]);let d=n.createGain();d.gain.setValueAtTime(m[2],p),d.gain.exponentialRampToValueAtTime(1e-4,p+m[1]),x.connect(g),g.connect(d),d.connect(e),x.start(p,Math.random()*.5),x.stop(p+m[1]+.02);let u=n.createOscillator();u.type="sine",u.frequency.setValueAtTime(140,p),u.frequency.exponentialRampToValueAtTime(40,p+.12);let M=n.createGain();M.gain.setValueAtTime(m[2]*.8,p),M.gain.exponentialRampToValueAtTime(1e-4,p+.14),u.connect(M),M.connect(e),u.start(p),u.stop(p+.16)},click(){this.beep(1800,.03)},shutdown(){if(n)try{n.close()}catch{}n=null,e=null,l=!1,t=i=s=r=o=a=null}}}var yp="citydriver_save_v1";var gl=5,oS=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295];var Mp=["engine","turbo","tires","suspension","nitro"],aS={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},lS={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},Ro=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function ru(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:Ro()},paint:{sport:14100029},wheels:{sport:0}}}function cS(n){let e=Object.assign(ru(),n||{}),t=new Set(Li.map(i=>i.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(i=>t.has(i)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let i of e.owned){if(!e.upgrades[i]||typeof e.upgrades[i]!="object")e.upgrades[i]=Ro();else for(let s of Mp)e.upgrades[i][s]=Math.max(0,Math.min(gl,e.upgrades[i][s]|0));typeof e.paint[i]!="number"&&(e.paint[i]=14100029),e.wheels[i]=Math.max(0,e.wheels[i]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function Sp(){try{let n=localStorage.getItem(yp);return n?cS(JSON.parse(n)):ru()}catch{return ru()}}function fn(n){try{localStorage.setItem(yp,JSON.stringify(n))}catch{}}function vp(n,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+n.price/2e4))}var hS=n=>"#"+n.toString(16).padStart(6,"0");function Ep(n){let e=n.save,t=g=>document.getElementById(g),i=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let g of Li)for(let d in o)o[d]=Math.max(o[d],g[d]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(g,d,u)=>{let M=Math.max(5,Math.round(d/u*100));return`<div class="stat-row"><span>${g}</span><div class="sbar"><i style="width:${M}%"></i></div></div>`};function c(){i.innerHTML=Li.map(g=>{let d=e.owned.includes(g.id),u=e.currentCar===g.id,M;return u?M='<button class="buy-btn" disabled>SELECTED</button>':d?M=`<button class="buy-btn" data-act="select" data-id="${g.id}">SELECT</button>`:M=`<button class="buy-btn" data-act="buy" data-id="${g.id}"${e.cash<g.price?" disabled":""}>$${g.price.toLocaleString()}</button>`,`<div class="car-card${u?" selected":""}"><div class="cinfo"><b>${g.name}</b><small>${g.desc}</small><div class="stat-bars">${l("SPD",g.topSpeed,o.topSpeed)}${l("ACC",g.accel,o.accel)}${l("HDL",g.handling,o.handling)}${l("GRP",g.grip,o.grip)}</div></div>${M}</div>`}).join("")}function h(){let g=n.getDef(e.currentCar);if(!g){s.innerHTML="";return}let d=e.upgrades[g.id]||(e.upgrades[g.id]=Ro());s.innerHTML=`<div class="upg-car-name">${g.name} \u2014 performance</div>`+Mp.map(u=>{let M=d[u]||0,v=M>=gl,_=v?0:vp(g,u,M),R="";for(let S=0;S<gl;S++)R+=`<div class="pip${S<M?" on":""}"></div>`;let b=v?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${u}"${e.cash<_?" disabled":""}>$${_.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${aS[u]}</b><small>${lS[u]}</small><div class="pips">${R}</div></div>${b}</div>`}).join("")}function f(){let g=e.currentCar,d=e.paint[g],u=oS.map(M=>`<button class="swatch${M===d?" sel":""}" data-hex="${M}" style="background:${hS(M)}" aria-label="paint"></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Quick paint \u2014 FREE</b><div class="swatch-row">${u}</div></div><button class="mbtn primary" data-act="editor" style="width:100%">\u{1F3A8} OPEN SKIN EDITOR \u2014 all free</button><p class="store-tip">Any color, rims, stripes, underglow, window tint, and your driver's look.</p>`}function p(){a(),c(),h(),f()}i.addEventListener("click",g=>{let d=g.target.closest("button[data-act]");if(!d||d.disabled)return;let u=n.getDef(d.dataset.id);if(u)if(d.dataset.act==="buy"){if(e.owned.includes(u.id)||e.cash<u.price)return;e.cash-=u.price,e.owned.push(u.id),e.upgrades[u.id]||(e.upgrades[u.id]=Ro()),typeof e.paint[u.id]!="number"&&(e.paint[u.id]=u.color),e.wheels[u.id]===void 0&&(e.wheels[u.id]=0),e.currentCar=u.id,fn(e),n.onSelectCar(u.id),p()}else{if(e.currentCar===u.id)return;e.currentCar=u.id,fn(e),n.onSelectCar(u.id),p()}}),s.addEventListener("click",g=>{let d=g.target.closest("button[data-key]");if(!d||d.disabled)return;let u=n.getDef(e.currentCar);if(!u)return;let M=d.dataset.key,v=e.upgrades[u.id]||(e.upgrades[u.id]=Ro()),_=v[M]||0,R=vp(u,M,_);_>=gl||e.cash<R||(e.cash-=R,v[M]=_+1,fn(e),n.refreshScene(),p())}),r.addEventListener("click",g=>{let d=e.currentCar;if(g.target.closest('button[data-act="editor"]')){n.openEditor&&n.openEditor();return}let u=g.target.closest("button.swatch");if(u){let M=parseInt(u.dataset.hex,10);e.paint[d]!==M&&(e.paint[d]=M,fn(e),n.onPaint(M),p())}});let m=[...document.querySelectorAll("#garage .gtab")],x={cars:i,upgrades:s,style:r};return m.forEach(g=>g.addEventListener("click",()=>{m.forEach(d=>d.classList.toggle("active",d===g));for(let d in x)x[d].classList.toggle("hidden",d!==g.dataset.tab)})),p(),{refresh:p}}var bp=["low","medium","high"];function ou(n){switch(n){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var xl=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,ou(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};Dt();var _l={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.65,stars:1}},au=["day","sunset","night"],uS=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`,dS=`
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
}`;function wp(){let n=new sn(1500,24,16),e={uTop:{value:new Ce(3108822)},uHorizon:{value:new Ce(13625079)},uSunDir:{value:new z(0,1,0)},uSunColor:{value:new Ce(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new Zt({vertexShader:uS,fragmentShader:dS,uniforms:e,side:tn,depthWrite:!1,fog:!1}),i=new ne(n,t);return i.frustumCulled=!1,i.renderOrder=-10,{mesh:i,uniforms:e}}function fS(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new z(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}function Tp(n,e){let t=_l[e]||_l.day,{uniforms:i,sun:s,hemi:r,scene:o,renderer:a}=n;i.uTop.value.setHex(t.top),i.uHorizon.value.setHex(t.horizon),i.uSunColor.value.setHex(t.sunColor),i.uSunI.value=t.sunI,i.uStars.value=t.stars;let l=fS(t.elev,t.azim);return i.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),n.sunElev=t.elev,n.sunAzim=t.azim,n.sunDir=l,t}Dt();function pS(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new on(n);return i.colorSpace=gt,i}var lu=null;function mS(){return lu||(lu=pS()),lu}var Xn=class{constructor(e,t,{color:i=12303291,opacity:s=.5,blending:r=qi,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new rt(1,1),this.mat=new ws({map:mS(),color:i,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new Er(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new z}emit(e,t,i,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,i);let f=h.userData;f.life=a,f.maxLife=a,f.vx=s,f.vy=r,f.vz=o,f.grow=c,f.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let i of this.items){if(!i.visible)continue;let s=i.userData;if(s.life-=e,s.life<=0){i.visible=!1;continue}i.position.x+=s.vx*e,i.position.y+=s.vy*e,i.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;i.scale.set(o,o,1),i.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},vl=class{constructor(e,t=400){this.max=t,this.i=0;let i=new rt(.32,1.4);i.rotateX(-Math.PI/2),this.mesh=new Rt(i,new dt({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new lt;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new lt,this._q=new An,this._p=new z,this._s=new z(1,1,1),this._up=new z(0,1,0)}add(e,t,i){this._q.setFromAxisAngle(this._up,i),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function Co(){return{driftT:0,driftAcc:0}}function Ap(n,e,t,i){if(e&&Math.abs(t)>=8)return n.driftT+=i,n.driftAcc+=i*15,0;let s=0;return n.driftT>=1&&(s=Math.round(n.driftAcc)),n.driftT=0,n.driftAcc=0,s}var Rp=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function Cp(n){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;e=Rp()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),n&&n(t.w,t.h)}async function s(){if(!Rp())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:t,goLandscape:s,refresh:i,get rotated(){return e}}}var ts=[14100029,16735802,16747546,16757504,16765503,13038642,4906624,1483594,1013358,1622208,3718648,2060267,1981066,8141549,11032055,15557798,16723555,7999504,9067034,13211182,16317180,13358561,7041664,1120295],yl=[16109749,15250575,13011554,11037509,8014380,4860954],Ml=[1118481,2759184,5913118,10119738,14266986,15263976,14100029,3718648],Po=["none","center","dual","side"],Io=["clear","dark","limo"],ns=["none","cap","beanie","cowboy","crown","helmet"],Sl={none:"No hat",cap:"Snapback",beanie:"Beanie",cowboy:"Stetson",crown:"Crown",helmet:"Helmet"},Di=n=>Number.isInteger(n)&&n>=0&&n<=16777215,cu=(n,e,t)=>e.includes(n)?n:t;function Pp(){return{rims:12172998,stripes:"none",stripe:16317180,glow:null,tint:"dark"}}function gS(){return{shirt:2845872,pants:2963272,skin:13011554,hair:2759184,hat:"none",hatColor:2237739}}function Ip(n){let e=Pp(),t=n&&typeof n=="object"?n:{};return{rims:Di(t.rims)?t.rims:e.rims,stripes:cu(t.stripes,Po,e.stripes),stripe:Di(t.stripe)?t.stripe:e.stripe,glow:Di(t.glow)?t.glow:null,tint:cu(t.tint,Io,e.tint)}}function El(n){let e=gS(),t=n&&typeof n=="object"?n:{};return{shirt:Di(t.shirt)?t.shirt:e.shirt,pants:Di(t.pants)?t.pants:e.pants,skin:Di(t.skin)?t.skin:e.skin,hair:Di(t.hair)?t.hair:e.hair,hat:cu(t.hat,ns,e.hat),hatColor:Di(t.hatColor)?t.hatColor:e.hatColor}}function hu(n){return String(n??"").replace(/[^\w .\-'!?]/g,"").trim().slice(0,16)}function Lp(n){(!n.carSkin||typeof n.carSkin!="object")&&(n.carSkin={});for(let t of Object.keys(n.carSkin))n.carSkin[t]=Ip(n.carSkin[t]);n.outfit=El(n.outfit),n.hats=ns.slice();let e=hu(n.name);return n.name=e||"Driver"+Math.floor(1e3+Math.random()*9e3),n}function Ls(n,e){return n.carSkin[e]||(n.carSkin[e]=Pp()),n.carSkin[e]}function Dp(n,e){let t=Ls(n,e),i=n.outfit;return{p:n.paint[e]|0,r:t.rims,s:Po.indexOf(t.stripes),sc:t.stripe,g:t.glow==null?-1:t.glow,t:Io.indexOf(t.tint),o:[i.shirt,i.pants,i.skin,i.hair,ns.indexOf(i.hat),i.hatColor]}}function Up(n){n=n||{};let e=Array.isArray(n.o)?n.o:[];return{paint:Di(n.p)?n.p:null,carSkin:Ip({rims:n.r,stripes:Po[n.s],stripe:n.sc,glow:n.g,tint:Io[n.t]}),outfit:El({shirt:e[0],pants:e[1],skin:e[2],hair:e[3],hat:ns[e[4]],hatColor:e[5]})}}var bl=n=>"#"+(n|0).toString(16).padStart(6,"0");var wl=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,dmg:22,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"glock",name:"Glock 19",price:1800,rate:.16,auto:!1,pellets:1,spread:.014,range:85,dmg:20,ammoBox:34,ammoPrice:70,start:34,desc:"Fast-firing 9mm. Tap tap tap."},{id:"deagle",name:"Desert Eagle",price:4200,rate:.55,auto:!1,pellets:1,spread:.01,range:110,dmg:55,ammoBox:14,ammoPrice:110,start:14,desc:"Hand cannon. Huge damage."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,dmg:14,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,dmg:12,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"ak",name:"AK-47",price:7500,rate:.11,auto:!0,pellets:1,spread:.022,range:120,dmg:26,ammoBox:60,ammoPrice:180,start:60,desc:"Hard-hitting full auto."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,dmg:24,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."},{id:"sniper",name:"Longshot .50",price:15e3,rate:1.3,auto:!1,pellets:1,spread:.001,range:260,dmg:120,ammoBox:10,ammoPrice:250,start:10,desc:"One shot, one drop. Huge range."},{id:"minigun",name:"Shredder Minigun",price:4e4,rate:.04,auto:!0,pellets:1,spread:.05,range:100,dmg:14,ammoBox:400,ammoPrice:600,start:400,desc:"Melts everything. Eats ammo."}],Np=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],Lo=0,Tl=ns.map(n=>({id:n,name:Sl[n],price:0})),uu=15,is=n=>wl.find(e=>e.id===n)||null;function Op(n){let e=new Set(wl.map(t=>t.id));Array.isArray(n.weapons)||(n.weapons=[]),n.weapons=n.weapons.filter((t,i,s)=>e.has(t)&&s.indexOf(t)===i),(!n.ammo||typeof n.ammo!="object")&&(n.ammo={});for(let t of Object.keys(n.ammo))e.has(t)||delete n.ammo[t];for(let t of n.weapons)n.ammo[t]=Math.max(0,n.ammo[t]|0);return n.weapons.includes(n.equipped)||(n.equipped=n.weapons[0]||null),n.outfit=El(n.outfit),n.hats=Tl.map(t=>t.id),n}var qn=n=>({ok:!1,msg:n}),Ds=n=>({ok:!0,msg:n});function zp(n,e){let t=is(e);return t?n.weapons.includes(e)?qn("Already owned"):n.cash<t.price?qn("Not enough cash"):(n.cash-=t.price,n.weapons.push(e),n.ammo[e]=(n.ammo[e]|0)+t.start,n.equipped=e,Ds(t.name+" bought")):qn("Unknown weapon")}function Fp(n,e){let t=is(e);return t?n.weapons.includes(e)?n.cash<t.ammoPrice?qn("Not enough cash"):(n.cash-=t.ammoPrice,n.ammo[e]=(n.ammo[e]|0)+t.ammoBox,Ds("+"+t.ammoBox+" rounds")):qn("Buy the gun first"):qn("Unknown weapon")}function Bp(n,e){return e===null?(n.equipped=null,Ds("Holstered")):n.weapons.includes(e)?(n.equipped=e,Ds(is(e).name+" equipped")):qn("Not owned")}function du(n){let e=[...n.weapons,null];if(e.length===1)return null;let t=e.indexOf(n.equipped);return n.equipped=e[(t+1)%e.length],n.equipped}function Hp(n,e){return!Number.isInteger(e)||e<0||e>16777215?qn("Unknown color"):n.outfit.shirt===e?qn("Already wearing it"):n.cash<Lo?qn("Not enough cash"):(n.cash-=Lo,n.outfit.shirt=e,Ds("New shirt"))}function kp(n,e){let t=Tl.find(i=>i.id===e);return t?n.hats.includes(e)?(n.outfit.hat=e,Ds(t.name+" on")):n.cash<t.price?qn("Not enough cash"):(n.cash-=t.price,n.hats.push(e),n.outfit.hat=e,Ds(t.name+" bought")):qn("Unknown hat")}var Al=class{constructor(){this.reset(0,0,0)}reset(e,t,i){this.pos={x:e,z:t},this.heading=i,this.speed=0,this.phase=0}update(e,t,i){t=Math.min(t,.05);let s=Gp(e.moveX||0),r=Gp(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,f=this.pos.z+c*this.speed*t;if(i){let p=i(h,f,.45);h=p.x,f=p.z}return this.pos.x=h,this.pos.z=f,this.phase+=this.speed*t*2.1,this}};function Gp(n){return n<-1?-1:n>1?1:n}function Cr(n,e,t,i){let s=n-t,r=e-i;return Math.sqrt(s*s+r*r)}function fu(n,e,t){let i=Math.cos(t),s=-Math.sin(t);return{x:n-i*1.9,z:e-s*1.9,heading:t}}function Vp(n,e,t,i,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(n<s.minX||n>s.maxX)return 1/0}else{let l=(s.minX-n)/t,c=(s.maxX-n)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(i)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/i,c=(s.maxZ-e)/i;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function pu(n,e,t,i,s,r,o,a){let l=n-s,c=e-r,h=l*t+c*i,f=l*l+c*c-o*o,p=h*h-f;if(p<0)return 1/0;let m=Math.sqrt(p),x=-h-m;return x<0&&(x=-h+m),x>=0&&x<=a?x:1/0}Dt();var xS=()=>new ve({color:13011554,roughness:.75}),_S=()=>new ve({color:2963272,roughness:.85}),vS=()=>new ve({color:1118481,roughness:.6}),yS=()=>new ve({color:2759184,roughness:.9}),MS=()=>new ve({color:1908515,metalness:.7,roughness:.35});function ht(n,e,t,i,s=0){let r=new Ie(n,e,t);r.translate(0,s,0);let o=new ne(r,i);return o.castShadow=!0,o}function SS(n){let e=new ut,t=MS(),i=new ve({color:7031342,roughness:.8});if(n==="pistol")e.add(ht(.06,.08,.24,t,.05).translateZ(-.08)),e.add(ht(.05,.12,.06,t,-.02));else if(n==="shotgun")e.add(ht(.07,.07,.75,t,.05).translateZ(-.28)),e.add(ht(.08,.09,.22,i,0).translateZ(-.38)),e.add(ht(.07,.12,.3,i,0).translateZ(.18));else if(n==="smg")e.add(ht(.07,.11,.42,t,.05).translateZ(-.12)),e.add(ht(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(ht(.04,.04,.12,t,.07).translateZ(-.38));else if(n==="glock"||n==="deagle"){let s=n==="deagle";e.add(ht(s?.07:.06,s?.09:.075,s?.3:.22,t,.05).translateZ(-.08)),e.add(ht(.05,.13,.065,n==="deagle"?i:t,-.03))}else if(n==="sniper")e.add(ht(.06,.1,.95,t,.05).translateZ(-.3)),e.add(ht(.045,.045,.32,t,.14).translateZ(-.12)),e.add(ht(.06,.13,.3,i,0).translateZ(.3));else if(n==="minigun"){for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.add(ht(.03,.03,.8,t,.05+Math.sin(r)*.06).translateX(Math.cos(r)*.06).translateZ(-.35))}e.add(ht(.2,.2,.3,t,.05).translateZ(.05))}else if(n==="ak"){e.add(ht(.07,.11,.72,t,.05).translateZ(-.22));let s=ht(.06,.2,.08,t,-.1).translateZ(-.18);s.rotation.x=.35,e.add(s),e.add(ht(.06,.12,.28,i,.02).translateZ(.26)),e.add(ht(.07,.06,.24,i,0).translateZ(-.38))}else e.add(ht(.07,.11,.7,t,.05).translateZ(-.22)),e.add(ht(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(ht(.06,.13,.26,t,.02).translateZ(.24)),e.add(ht(.05,.05,.2,t,.14).translateZ(-.15));return e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function ES(n,e){if(n==="crown"){let t=new ut,i=new ve({color:16765503,metalness:1,roughness:.25,emissive:3811840}),s=new ne(new St(.16,.16,.09,16,1,!0),i);s.material.side=It,s.position.y=.02,t.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new ne(new wr(.035,.09,4),i);a.position.set(Math.cos(o)*.155,.1,Math.sin(o)*.155),t.add(a);let l=new ne(new sn(.018,6,6),new ve({color:e,emissive:e,emissiveIntensity:.6}));l.position.set(Math.cos(o+.5)*.162,.02,Math.sin(o+.5)*.162),t.add(l)}return t}if(n==="helmet"){let t=new ut,i=new ji({color:e,metalness:.4,roughness:.25,clearcoat:1}),s=new ne(new sn(.2,16,12,0,Math.PI*2,0,Math.PI/1.7),i);s.position.y=-.06,t.add(s);let r=new ne(new sn(.205,16,8,Math.PI*1.2,Math.PI*.6,Math.PI*.35,Math.PI*.25),new ve({color:724762,metalness:.9,roughness:.1}));return r.position.y=-.06,t.add(r),t}if(n==="cap"){let t=new ut,i=new ve({color:e,roughness:.7}),s=new ne(new sn(.155,14,8,0,Math.PI*2,0,Math.PI/2),i);t.add(s);let r=ht(.24,.02,.14,i);return r.position.set(0,.01,-.15),t.add(r),t}if(n==="beanie"){let t=new ve({color:e,roughness:.95});return new ne(new sn(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(n==="cowboy"){let t=new ut,i=new ve({color:e,roughness:.85}),s=new ne(new St(.3,.3,.02,20),i),r=new ne(new St(.12,.15,.17,14),i);return r.position.y=.09,t.add(s,r),t}return null}function Pr(n){let e=new ut,t=xS(),i=_S(),s=vS(),r=yS(),o=new ve({color:n.shirt,roughness:.8}),a=[],l=[];for(let _ of[-1,1]){let R=new ut;R.position.set(_*.12,.92,0),R.add(ht(.17,.84,.2,i,-.42));let b=ht(.17,.09,.3,s,-.88);b.position.z=-.04,R.add(b),e.add(R),a.push(R);let S=new ut;S.position.set(_*.33,1.5,0),S.add(ht(.13,.36,.15,o,-.17)),S.add(ht(.11,.3,.12,t,-.5));let A=ht(.1,.1,.1,t,-.69);S.add(A),e.add(S),l.push(S)}let c=ht(.52,.62,.27,o,1.23);e.add(c);let h=ht(.53,.06,.28,s,.93);e.add(h);let f=ht(.12,.08,.12,t,1.57);e.add(f);let p=new ne(new sn(.15,16,12),t);p.position.y=1.74,p.scale.set(1,1.12,1),p.castShadow=!0,e.add(p);let m=new ne(new sn(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),r);m.position.y=1.76,e.add(m);let x=new ut,g=new ne(new Ie(.3,.62,.1).translate(0,-.31,0),r);g.position.set(0,1.84,.13),g.rotation.x=.12,g.castShadow=!0;let d=new ne(new Ie(.05,.36,.14).translate(0,-.18,0),r);d.position.set(-.15,1.82,.02);let u=d.clone();u.position.x=.15,x.add(g,d,u),x.visible=!1,e.add(x);let M=new ut;M.position.y=1.8,e.add(M);let v=new ut;return v.position.y=-.69,l[1].add(v),e.userData={legs:a,arms:l,shirt:o,skin:t,pants:i,hair:r,longHair:x,hatSlot:M,gunSlot:v,gunId:null,hatId:null,hatColor:null,recoil:0},si(e,n),e}function si(n,e){let t=n.userData;t.shirt.color.setHex(e.shirt),e.pants!=null&&t.pants.color.setHex(e.pants),e.skin!=null&&t.skin.color.setHex(e.skin),e.hair!=null&&t.hair.color.setHex(e.hair);let i=e.hatColor!=null?e.hatColor:e.shirt;if(t.hatId!==e.hat||t.hatColor!==i){t.hatSlot.clear();let s=ES(e.hat,i);s&&t.hatSlot.add(s),t.hatId=e.hat,t.hatColor=i}t.hair.visible=e.hat!=="helmet",t.longHair.visible=!!e.hairLong&&e.hat!=="helmet"}function Do(n,e){let t=n.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let i=SS(e);i.rotation.x=-Math.PI/2,t.gunSlot.add(i)}t.gunId=e}}function Us(n,e,t,i,s){let r=n.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),i?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),n.position.y=Math.abs(Math.cos(e))*o*.05}function Rl(n){n.userData.recoil=1}Dt();var Wp=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],bS=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function Xp(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new on(i);return s.colorSpace=gt,s.anisotropy=4,s}function wS(n,e,t){return Xp(512,128,(i,s,r)=>{i.fillStyle="#0b0f1a",i.fillRect(0,0,s,r),i.strokeStyle=t,i.lineWidth=8,i.strokeRect(6,6,s-12,r-12),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.font="bold 58px sans-serif",i.fillText(n,s/2,52),i.fillStyle="#e2e8f0",i.font="bold 22px sans-serif",i.fillText(e,s/2,100)})}function TS(){return Xp(128,128,(n,e,t)=>{let i=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{n.beginPath(),n.arc(i,s,62-a*10,0,Math.PI*2),n.fillStyle=o,n.fill()})})}function qp(n,e){let t=[],i=[],s=new ve({color:14078925,roughness:.85,envMapIntensity:.4}),r=new ve({color:2961720,roughness:.8}),o=new ve({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of bS){let[f,p]=h.bx,[m,x]=h.bz,g=(f+p)/2,d=(m+x)/2,u=p-f,M=x-m,v=new ne(new Ie(u,h.h,M).translate(0,h.h/2,0),s);v.position.set(g,.03,d),v.castShadow=v.receiveShadow=!0,n.add(v);let _=new ne(new Ie(u+.6,.5,M+.6),r);_.position.set(g,h.h+.25,d),n.add(_);let R=h.face==="-x"?-1:1,b=R<0?f:p,S=new ne(new Ie(1.6,.2,M*.9),new ve({color:h.color,roughness:.6}));S.position.set(b+R*.8,3.3,d),S.rotation.z=R*.18,n.add(S);let A=new ne(new rt(M*.75,2.4),o);A.position.set(b+R*.02,1.5,d),A.rotation.y=R*Math.PI/2,n.add(A);let E=new ve({map:wS(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});E.emissiveMap=E.map,E.emissiveIntensity=.55;let y=new ne(new rt(M*.85,M*.85/4),E);y.position.set(b+R*.05,h.h-1.4,d),y.rotation.y=R*Math.PI/2,n.add(y),e.colliders.push({minX:f,maxX:p,minZ:m,maxZ:x});let D={x:b+R*1.6,z:d},F=new dt({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:It}),L=new ne(new Qi(.9,1.25,32).rotateX(-Math.PI/2),F);L.position.set(D.x,.09,D.z),n.add(L);let I=new dt({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:It,blending:nn}),T=new ne(new St(1.05,1.05,3.2,24,1,!0),I);T.position.set(D.x,1.6,D.z),n.add(T),i.push({ring:L,ringMat:F,beamMat:I}),t.push({id:h.id,type:h.type,name:h.name,door:D,color:h.accent})}let a=AS(n,e),l=0;function c(h){l+=h;let f=.55+Math.sin(l*3)*.25;for(let p of i)p.ringMat.opacity=f+.2,p.beamMat.opacity=f*.3,p.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function AS(n,e){let o=new ne(new rt(54,16).rotateX(-Math.PI/2),new ve({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,n.add(o);let a=new ve({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let d of l){let u=new ne(new Ie(d.maxX-d.minX,d.h,d.maxZ-d.minZ).translate(0,d.h/2,0),a);u.position.set((d.minX+d.maxX)/2,.03,(d.minZ+d.maxZ)/2),u.castShadow=u.receiveShadow=!0,n.add(u),e.colliders.push({minX:d.minX,maxX:d.maxX,minZ:d.minZ,maxZ:d.maxZ})}let c=new ne(new rt(.3,15).rotateX(-Math.PI/2),new dt({color:16765503}));c.position.set(51,.06,156/2),n.add(c);let h=TS(),f=new ve({map:h,roughness:.6,side:It}),p=new ve({color:4144966,roughness:.7}),x=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([d,u])=>{let M=new ut;M.position.set(d,.04,u);let v=new ne(new Ie(.08,1.1,.08).translate(0,.55,0),p),_=new ne(new br(.55,24),f);return _.position.y=1.5,_.rotation.y=-Math.PI/2,_.castShadow=!0,M.add(v,_),n.add(M),{x:d,z:u,r:.6,up:!0,timer:0,fall:0,pivot:M}});function g(d){for(let u of x)u.up?u.fall>0&&(u.fall=Math.max(0,u.fall-d*4)):(u.fall=Math.min(1,u.fall+d*6),u.timer-=d,u.timer<=0&&(u.up=!0)),u.pivot.rotation.z=u.fall*(Math.PI/2-.05),u.pivot.rotation.z*=-1}return{targets:x,update:g,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function Yp(n){return n.up?(n.up=!1,n.timer=3,!0):!1}Dt();var RS=.22,Ns=1.45,CS=85,mu=4.5;function Zp(n){let e=[],t=new ja(.07,.5,2,8).rotateX(Math.PI/2),i=new St(.008,.05,1,6,1,!0).rotateX(Math.PI/2).translate(0,0,.5);for(let d=0;d<48;d++){let u=new ne(t,new dt({color:16774856,transparent:!0,opacity:1,blending:nn,depthWrite:!1}));u.visible=!1,u.frustumCulled=!1;let M=new ne(new sn(.22,8,6),new dt({color:16751150,transparent:!0,opacity:.45,blending:nn,depthWrite:!1}));u.add(M);let v=new ne(i,new dt({color:16757575,transparent:!0,opacity:.75,blending:nn,depthWrite:!1,side:It}));v.visible=!1,v.frustumCulled=!1,n.add(u,v),e.push({slug:u,trail:v,live:!1,x0:0,z0:0,dx:0,dz:0,dist:0,travel:0,hitT:null,onHit:null,wall:!1})}let s=0,r=new Xn(n,8,{color:16762976,opacity:.95,blending:nn}),o=new Xn(n,30,{color:16757575,opacity:.9,blending:nn}),a=new Xn(n,20,{color:12103840,opacity:.5}),l=0;function c(d,u,M,v,_,R,b,S,A){let E=e[s];s=(s+1)%e.length,Object.assign(E,{live:!0,x0:d,z0:u,dx:M,dz:v,dist:Math.max(.5,_),travel:0,hitT:R,wall:b,onHit:S,onArrive:A||null}),E.slug.visible=!0,E.trail.visible=!0,E.slug.rotation.y=Math.atan2(M,v),h(E)}function h(d){let u=Math.min(d.travel,d.dist),M=d.x0+d.dx*u,v=d.z0+d.dz*u;d.slug.position.set(M,Ns,v),f(d,M,v,Math.min(mu,u))}function f(d,u,M,v){d.trail.position.set(u,Ns,M),d.trail.rotation.y=Math.atan2(-d.dx,-d.dz),d.trail.scale.set(1,1,Math.max(.01,v))}function p(d){let u=d.x0+d.dx*d.dist,M=d.z0+d.dz*d.dist;if(d.onArrive){let v=d.onArrive;d.onArrive=null,v();return}if(d.hitT){Yp(d.hitT)&&d.onHit&&d.onHit(d.hitT);for(let v=0;v<5;v++)o.emit(u,Ns,M,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else d.wall&&(o.emit(u-d.dx*.1,Ns,M-d.dz*.1,{vx:-d.dx*2,vy:1.5,vz:-d.dz*2,life:.18,size:.3,grow:.2}),a.emit(u-d.dx*.2,Ns,M-d.dz*.2,{vx:-d.dx,vy:.6,vz:-d.dz,life:.5,size:.4,grow:1.2}))}function m(d){for(let u of e)if(u.live){if(u.travel+=CS*d,u.travel>=u.dist){if(u.slug.visible&&(p(u),u.slug.visible=!1),u.travel-u.dist>=mu){u.live=!1,u.trail.visible=!1;continue}let M=u.x0+u.dx*u.dist,v=u.z0+u.dz*u.dist,_=mu-(u.travel-u.dist);f(u,M,v,Math.min(_,u.dist));continue}h(u)}}function x(d,u,M,v){let _=M-d,R=v-u,b=Math.hypot(_,R);b>.1&&(r.emit(d,Ns,u,{vx:_/b*2,vy:0,vz:R/b*2,life:.06,size:.7,grow:.6}),c(d,u,_/b,R/b,b,null,!0,null))}function g(d,u,M,v){l=Math.max(0,l-d),m(d),r.update(d),o.update(d),a.update(d);let _=u.save.equipped,R=_&&is(_);if(M=M||v,!R||!M||l>0)return{fired:!1};if(!R.auto&&!v)return{fired:!1};if((u.save.ammo[_]|0)<=0)return v&&(u.audio.click&&u.audio.click(),u.toast&&u.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),l=.3,{fired:!1,empty:!0};u.save.ammo[_]--,l=R.rate;let b=u.heading,S=RS;for(let U of u.targets){if(!U.up)continue;let H=U.x-u.pos.x,N=U.z-u.pos.z,k=Math.hypot(H,N);if(k>R.range||k<.5)continue;let X=Math.atan2(-H,-N),q=Math.atan2(Math.sin(X-u.heading),Math.cos(X-u.heading));Math.abs(q)<S&&(S=Math.abs(q),b=X)}if(u.hitables)for(let U of u.hitables)for(let H of U){if(H.ref&&H.ref.kind==="ped")continue;let N=H.x-u.pos.x,k=H.z-u.pos.z,X=Math.hypot(N,k);if(X>R.range||X<.5)continue;let q=Math.atan2(-N,-k),te=Math.abs(Math.atan2(Math.sin(q-u.heading),Math.cos(q-u.heading)));te<S&&(S=te,b=q)}let A=-Math.sin(u.heading),E=-Math.cos(u.heading),y=Math.cos(u.heading),D=-Math.sin(u.heading),F=u.pos.x+A*.95+y*.3,L=u.pos.z+E*.95+D*.3;r.emit(F,Ns,L,{vx:A*2,vy:0,vz:E*2,life:.06,size:R.id==="shotgun"?1.1:.7,grow:.6});let I=0,T=[];for(let U=0;U<R.pellets;U++){let H=b+(Math.random()-.5)*2*R.spread,N=-Math.sin(H),k=-Math.cos(H),X=R.range,q=null;for(let G of u.colliders){let K=Vp(F,L,N,k,G,X);K<X&&(X=K,q=null)}for(let G of u.targets){if(!G.up)continue;let K=pu(F,L,N,k,G.x,G.z,G.r,X);K<X&&(X=K,q=G)}let te=null;if(u.hitables)for(let G of u.hitables)for(let K of G){let me=pu(F,L,N,k,K.x,K.z,K.r,X);me<X&&(X=me,te=K.ref,q=null)}if((q||te)&&I++,te){let G=R.dmg||20,K=N,me=k;c(F,L,N,k,X,null,!1,null,()=>u.onPersonHit&&u.onPersonHit(te,G,K,me))}else c(F,L,N,k,X,q,X<R.range,u.onTargetHit);U<3&&T.push([F,L,F+N*X,L+k*X])}return u.onShot&&u.onShot(T),u.audio.shot&&u.audio.shot(R.id),{fired:!0,hits:I}}return{update:g,remoteShot:x}}var PS=n=>"#"+n.toString(16).padStart(6,"0"),Uo=n=>"$"+n.toLocaleString();function $p(n){let e=c=>document.getElementById(c),t=e("store"),i=e("store-list"),s=null;function r(c){n.toast(c.msg),n.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(n.persist(),n.onChange()),l()}function o(){let c=n.save;i.innerHTML="";for(let f of wl){let p=c.weapons.includes(f.id),m=document.createElement("div");m.className="upg-row store-row"+(c.equipped===f.id?" sel":""),m.innerHTML=`<div class="uinfo"><b>${f.name}</b><small>${f.desc}</small>
        <small class="ammo-line">${p?"Ammo: "+(c.ammo[f.id]|0):Uo(f.price)}</small></div>
        <div class="store-btns"></div>`;let x=m.querySelector(".store-btns");if(p){let g=document.createElement("button");g.className="upg-btn",g.textContent="+"+f.ammoBox+" AMMO "+Uo(f.ammoPrice),g.disabled=c.cash<f.ammoPrice,g.onclick=()=>r(Fp(c,f.id)),x.appendChild(g);let d=document.createElement("button");d.className="buy-btn eq",d.textContent=c.equipped===f.id?"EQUIPPED":"EQUIP",d.disabled=c.equipped===f.id,d.onclick=()=>r(Bp(c,f.id)),x.appendChild(d)}else{let g=document.createElement("button");g.className="buy-btn",g.textContent="BUY "+Uo(f.price),g.disabled=c.cash<f.price,g.onclick=()=>r(zp(c,f.id)),x.appendChild(g)}i.appendChild(m)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",i.appendChild(h)}function a(){let c=n.save;i.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${Lo?Uo(Lo):"FREE"}</b><div class="swatch-row"></div>`;let f=h.querySelector(".swatch-row");for(let g of Np){let d=document.createElement("div");d.className="swatch"+(c.outfit.shirt===g?" sel":""),d.style.background=PS(g),d.onclick=()=>r(Hp(c,g)),f.appendChild(d)}i.appendChild(h);let p=document.createElement("div");p.className="style-sec",p.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let m=p.querySelector(".swatch-row");for(let g of Tl){let d=document.createElement("button"),u=c.hats.includes(g.id);d.className="wheel-opt"+(c.outfit.hat===g.id?" sel":""),d.innerHTML=`${g.name}<small>${c.outfit.hat===g.id?"wearing":u||!g.price?"free":Uo(g.price)}</small>`,d.onclick=()=>r(kp(c,g.id)),m.appendChild(d)}i.appendChild(p);let x=document.createElement("p");x.className="store-tip",x.textContent="Everything here is free. More colors, pants, skin tone & hair in \u{1F3A8} SKIN EDITOR (pause menu).",i.appendChild(x)}function l(){e("store-cash").textContent=n.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var Jp=[];for(let n=0;n<=5;n++)Jp.push((n-5/2)*74);var No=384/2;function Kp(n,e){let t=n.getContext("2d"),i=n.width,r=i/2/130,o=0;function a(l,c,h,f,p){if((o++&3)!==0)return;let m=g=>i/2+(g-l)*r,x=g=>i/2+(g-c)*r;t.clearRect(0,0,i,i),t.save(),t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,40,28,0.82)",t.fillRect(0,0,i,i),t.fillStyle="rgba(120,130,145,0.55)";for(let g=0;g<5;g++)for(let d=0;d<5;d++){let u=(g-2)*74,M=(d-4/2)*74;t.fillRect(m(u-30),x(M-30),60*r,60*r)}t.strokeStyle="#2b2f36",t.lineWidth=14*r,t.beginPath();for(let g of Jp)t.moveTo(m(g),x(-No)),t.lineTo(m(g),x(No)),t.moveTo(m(-No),x(g)),t.lineTo(m(No),x(g));t.moveTo(m(No),x(0)),t.lineTo(m(232),x(0)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(m(232),x(-225)),t.lineTo(m(232),x(225)),t.stroke();for(let g of e)t.fillStyle=g.color,t.beginPath(),t.arc(m(g.door.x),x(g.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();f&&(t.fillStyle="#ffffff",t.fillRect(m(f.x)-3,x(f.z)-3,6,6)),p&&p.each(g=>{g.b>=0||(t.fillStyle="#4ade80",t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.beginPath(),t.arc(m(g.x),x(g.z),4,0,Math.PI*2),t.fill(),t.stroke())}),t.restore(),t.save(),t.translate(i/2,i/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",i/2,11)}return{draw:a}}var IS={none:"None",center:"Center",dual:"Dual",side:"Side"},LS={clear:"Clear",dark:"Dark",limo:"Limo"};function Qp(n){let e=x=>document.getElementById(x),t=e("skin-editor"),i=e("se-body"),s=n.save,r="car",o=!1;function a(x,g,d,u={}){let M=`<div class="swatch-row se-row" data-key="${x}">`;u.off&&(M+=`<button class="swatch off${d==null?" sel":""}" data-v="off" aria-label="off">OFF</button>`);for(let _ of g)M+=`<button class="swatch${_===d?" sel":""}" data-v="${_}" style="background:${bl(_)}" aria-label="color"></button>`;let v=d!=null&&!g.includes(d);return M+=`<label class="swatch custom${v?" sel":""}" style="${v?"background:"+bl(d):""}" title="Any color"><input type="color" data-key="${x}" value="${bl(d??16777215)}">\u{1F3A8}</label>`,M+"</div>"}function l(x,g,d,u){return`<div class="swatch-row se-row" data-key="${x}">`+g.map(M=>`<button class="wheel-opt${M===u?" sel":""}" data-v="${M}"><b>${d[M]}</b></button>`).join("")+"</div>"}let c=(x,g)=>`<div class="style-sec"><b>${x}</b>${g}</div>`;function h(){let x=s.currentCar,g=Ls(s,x),u='<div class="swatch-row se-row" data-key="car">'+n.cars.filter(M=>s.owned.includes(M.id)).map(M=>`<button class="wheel-opt${M.id===x?" sel":""}" data-v="${M.id}"><b>${M.name}</b></button>`).join("")+"</div>";i.innerHTML=c("Car",u)+c("Body paint",a("paint",ts,s.paint[x]))+c("Rims",a("rims",[12172998,1513500,13211182,2287359,14100029,16317180,4906624,11032055],g.rims))+c("Racing stripes",l("stripes",Po,IS,g.stripes))+(g.stripes!=="none"?c("Stripe color",a("stripe",ts,g.stripe)):"")+c("Underglow",a("glow",[2287359,16723555,4906624,11032055,16765503,16317180],g.glow,{off:!0}))+c("Window tint",l("tint",Io,LS,g.tint))}function f(){let x=s.outfit;i.innerHTML=c("Name (shown online)",`<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g,"")}" autocomplete="off" spellcheck="false">`)+c("Shirt",a("shirt",ts,x.shirt))+c("Pants",a("pants",[2963272,1981066,1120295,7041664,9067034,16317180,7999504,1483594],x.pants))+c("Skin tone",a("skin",yl,x.skin))+c("Hair",a("hair",Ml,x.hair))+c("Hat",l("hat",ns,Sl,x.hat))+(x.hat!=="none"?c("Hat color",a("hatColor",ts,x.hatColor)):"");let g=e("se-name");g.addEventListener("input",()=>{let d=hu(g.value);d&&(s.name=d,n.persist(),n.onName())}),g.addEventListener("keydown",d=>d.stopPropagation())}function p(){for(let x of t.querySelectorAll(".setab"))x.classList.toggle("active",x.dataset.tab===r);r==="car"?h():f()}function m(x,g){let d=s.currentCar,u=Ls(s,d),M=s.outfit,v=g==="off"?null:typeof g=="string"&&g[0]==="#"?parseInt(g.slice(1),16):isNaN(+g)?g:+g,_=!1,R=!1;switch(x){case"car":s.owned.includes(g)&&(s.currentCar=g,_=!0);break;case"paint":s.paint[d]=v,_=!0;break;case"rims":u.rims=v,_=!0;break;case"stripes":u.stripes=g,_=!0;break;case"stripe":u.stripe=v,_=!0;break;case"glow":u.glow=v,_=!0;break;case"tint":u.tint=g,_=!0;break;case"shirt":case"pants":case"skin":case"hair":case"hatColor":M[x]=v,R=!0;break;case"hat":M.hat=g,R=!0;break}n.persist(),_&&n.onCar(x==="car"),R&&n.onOutfit(),n.beep(760,.03)}i.addEventListener("click",x=>{let g=x.target.closest("button[data-v]");if(!g)return;let d=g.closest("[data-key]");m(d.dataset.key,g.dataset.v),p()}),i.addEventListener("input",x=>{let g=x.target.closest("input[type=color]");if(!g)return;m(g.dataset.key,g.value);let d=g.closest("label");d&&(d.style.background=g.value)}),i.addEventListener("change",x=>{x.target.closest("input[type=color]")&&p()});for(let x of t.querySelectorAll(".setab"))x.addEventListener("click",()=>{r=x.dataset.tab,n.onTab(r),p()});return{open(x){r=x||"car",o=!0,t.classList.remove("hidden"),n.onTab(r),p()},close(){o=!1,t.classList.add("hidden")},get isOpen(){return o},get tab(){return r},refresh:p}}Dt();var xu=["lobby","apartment","office","diner"],jp={lobby:"LOBBY",apartment:"APARTMENT",office:"OFFICE",diner:"DINER"},Ir=22,Lr=16,Cl=4.6,ci=.3,DS=-1180,em=n=>xu[(n*2654435761>>>0)%xu.length];function US(n){return{x:(xu.indexOf(n)-1.5)*90,z:DS}}function gu(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new on(s);return r.colorSpace=gt,i&&(r.wrapS=r.wrapT=Ri,r.repeat.set(i[0],i[1])),r}var Pl=(n,e={})=>new ve(Object.assign({color:n,roughness:.8,metalness:.05,emissive:n,emissiveIntensity:.18},e)),NS={lobby:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#e9e4da":"#b9b2a5",n.fillRect(t*16,e*16,16,16)},apartment:n=>{for(let e=0;e<8;e++)n.fillStyle=e%2?"#9a6a3e":"#a8754a",n.fillRect(0,e*16,128,16),n.fillStyle="#7a5230",n.fillRect(e*37%128,e*16,2,16)},office:n=>{n.fillStyle="#5b6472",n.fillRect(0,0,128,128),n.fillStyle="#525a67";for(let e=0;e<128;e+=32)n.fillRect(e,0,1,128),n.fillRect(0,e,128,1)},diner:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#f2f2f2":"#1a1a1a",n.fillRect(t*16,e*16,16,16)}},OS={lobby:14209732,apartment:13227715,office:14673388,diner:15909813};function tm(n){let e=new Map;function t(r){if(e.has(r))return e.get(r);let o=US(r),a=new ut;a.position.set(o.x,0,o.z);let l=[],c=Ir/2,h=Lr/2,f=(S,A,E,y)=>l.push({minX:o.x+S,maxX:o.x+A,minZ:o.z+E,maxZ:o.z+y}),p=(S,A,E,y,D,F=0,L=!0)=>{let I=new ne(S,A);return I.position.set(E,y,D),I.rotation.y=F,I.castShadow=L,I.receiveShadow=!0,a.add(I),I},m=(S,A,E,y,D,F,L=0,I=!0)=>{p(new Ie(S,A,E).translate(0,A/2,0),y,D,L,F),I&&f(D-S/2,D+S/2,F-E/2,F+E/2)},x=gu(128,128,NS[r],[Ir/4,Lr/4]);p(new rt(Ir,Lr).rotateX(-Math.PI/2),Pl(16777215,{map:x,emissiveMap:x,emissiveIntensity:.2}),0,.02,0,0,!1),p(new rt(Ir,Lr).rotateX(Math.PI/2),Pl(16053488,{emissiveIntensity:.5}),0,Cl,0,0,!1);let g=Pl(OS[r],{side:It}),d=(S,A,E,y)=>{p(new Ie(S,Cl,A).translate(0,Cl/2,0),g,E,0,y,0,!1),f(E-S/2,E+S/2,y-A/2,y+A/2)};d(Ir+ci*2,ci,0,-h-ci/2),d(Ir+ci*2,ci,0,h+ci/2),d(ci,Lr,-c-ci/2,0),d(ci,Lr,c+ci/2,0);let u=new ve({color:16777215,emissive:16774364,emissiveIntensity:2.2});for(let S of[-6,0,6])for(let A of[-4,4])p(new rt(2.4,.9).rotateX(Math.PI/2),u,S,Cl-.02,A,0,!1);let M=gu(256,64,(S,A,E)=>{let y=S.createLinearGradient(0,0,0,E);y.addColorStop(0,"#7fb2ee"),y.addColorStop(1,"#cfe6f7"),S.fillStyle=y,S.fillRect(0,0,A,E),S.fillStyle="#3b4656";for(let D=0;D<A;D+=64)S.fillRect(D,0,4,E);S.fillRect(0,0,A,4),S.fillRect(0,E-4,A,4)});p(new rt(14,1.6),new dt({map:M}),0,2.6,-h+.01,0,!1);let v=gu(64,96,(S,A,E)=>{S.fillStyle="#20262f",S.fillRect(0,0,A,E),S.fillStyle="#4ade80",S.fillRect(0,0,A,6),S.fillRect(0,0,5,E),S.fillRect(A-5,0,5,E),S.fillStyle="#9fd4ff",S.fillRect(9,12,A-18,E-20),S.fillStyle="#16a34a",S.font="bold 14px sans-serif",S.textAlign="center",S.fillText("EXIT",A/2,40)});p(new rt(2.2,3).translate(0,1.5,0),new ve({map:v,emissive:16777215,emissiveMap:v,emissiveIntensity:.6}),0,0,h-.02,Math.PI,!1);let _=new dt({color:4906624,transparent:!0,opacity:.7,depthWrite:!1,side:It}),R=p(new Qi(.75,1.05,32).rotateX(-Math.PI/2),_,0,.05,h-1.6,0,!1);zS(r,{add:p,boxAt:m,mat:Pl,W2:c,D2:h,group:a,solid:f}),n.add(a);let b={style:r,group:a,colliders:l,pad:R,padMat:_,spawn:{x:o.x,z:o.z+h-3.2,heading:0},exit:{x:o.x,z:o.z+h-1.6},bounds:{minX:o.x-c,maxX:o.x+c,minZ:o.z-h,maxZ:o.z+h}};return e.set(r,b),b}let i=0;function s(r,o){i+=r,o&&(o.padMat.opacity=.5+Math.sin(i*4)*.25,o.pad.rotation.y+=r)}return{get:t,update:s}}function zS(n,e){let{add:t,boxAt:i,mat:s,W2:r,D2:o}=e,a=s(8016432),l=s(2237739),c=s(15921906),h=s(10134445,{metalness:.7,roughness:.35}),f=(x,g)=>{i(.6,.6,.6,s(9067066),x,g),t(new sn(.6,10,8),s(4094516),x,1.15,g)},p=(x,g,d,u)=>{let M=s(u),v=new ut,_=new ne(new Ie(2.6,.45,1).translate(0,.22,0),M),R=new ne(new Ie(2.6,.6,.25).translate(0,.75,.38),M),b=new ne(new Ie(.25,.65,1).translate(-1.3,.32,0),M),S=new ne(new Ie(.25,.65,1).translate(1.3,.32,0),M);return v.add(_,R,b,S),v.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),v.position.set(x,0,g),v.rotation.y=d,e.group.add(v),Math.abs(Math.sin(d))>.5?[x-.6,x+.6,g-1.4,g+1.4]:[x-1.4,x+1.4,g-.6,g+.6]},m=x=>e.solid(x[0],x[1],x[2],x[3]);if(n==="lobby"){i(5,1.1,1.2,a,0,-2.5),i(5.2,.08,1.4,c,0,-2.5,1.1,!1);let x=s(12107462,{metalness:.85,roughness:.25,emissiveIntensity:.1});for(let g of[-6,-2,2,6])t(new rt(2,3).translate(0,1.5,0),x,g,0,-o+.02,0,!1),t(new rt(.4,.2),new dt({color:16747546}),g,3.3,-o+.03,0,!1);m(p(-7,2,Math.PI/2,1981066)),m(p(7,2,-Math.PI/2,1981066)),i(1.4,.4,.8,a,-5,2),i(1.4,.4,.8,a,5,2),f(-r+1,o-1),f(r-1,o-1),f(-r+1,-o+1.5),f(r-1,-o+1.5)}else if(n==="apartment"){m(p(-3,1.5,Math.PI,8141549)),i(1.8,.4,.9,a,-3,-.5),i(3,.5,.4,l,-3,-o+.4),t(new rt(2.6,1.5),new ve({color:1118481,emissive:2781142,emissiveIntensity:.9}),-3,1.6,-o+.45,0,!1),i(6,.95,.8,c,6,-o+.5),i(.9,2,.8,h,r-.6,-o+.5),i(2.2,.75,1.1,a,5,-2);for(let x of[4.2,5.8])for(let g of[-3.1,-.9])i(.45,.5,.45,l,x,g);i(2.2,.55,3,s(15921906),r-1.4,3.5),i(2.2,.25,2.2,s(3718648),r-1.4,3.9,.55,!1),i(2.2,1,.2,a,r-1.4,o-3,0,!1),f(-r+1,o-1)}else if(n==="office"){let x=new ve({color:725536,emissive:3718648,emissiveIntensity:.9});for(let g of[-7,-2.5,2.5,7])for(let d of[-4.5,.5])i(3,.75,1.3,c,g,d),t(new Ie(.9,.55,.06).translate(0,.28,0),x,g,.8,d-.3),i(.55,.5,.55,l,g,d+1.1);i(6,.75,1.6,a,0,4.6),t(new rt(5,2.2),new ve({color:16777215,emissive:16777215,emissiveIntensity:.3}),-r+.02,2,2,Math.PI/2,!1),f(r-1,o-1),f(-r+1,o-1)}else{i(10,1.05,1,s(14100029),2,-o+3),i(10.2,.08,1.2,c,2,-o+3,1.05,!1);for(let g=0;g<6;g++)t(new St(.28,.28,.12,12).translate(0,.75,0),s(14100029),-2+g*1.7,0,-o+4.3),i(.12,.7,.12,h,-2+g*1.7,-o+4.3,0,!1);for(let g of[-1,3])i(2.4,.75,1.1,c,-6.5,g),i(2.4,1.1,.5,s(14100029),-6.5,g-1.1),i(2.4,1.1,.5,s(14100029),-6.5,g+1.1);let x=new ve({color:16723555,emissive:16723555,emissiveIntensity:2.5});t(new Ie(8,.12,.06),x,2,3.4,-o+.05,0,!1),t(new Ie(8,.12,.06),new ve({color:2287359,emissive:2287359,emissiveIntensity:2.5}),2,3.1,-o+.05,0,!1),i(1,1.8,.7,s(2060267),r-.8,2),f(r-1,o-1)}}Dt();var Il=1e5,Os=[{id:"drive",text:"Drive to the green marker",needsTarget:!0},{id:"drift",text:"DRIFT! Hold HB (Space) while steering",needsTarget:!1},{id:"park",text:"Drive to the next marker and stop",needsTarget:!0},{id:"out",text:"Tap GET OUT (E) to leave your car",needsTarget:!1},{id:"enter",text:"Walk to the glowing door and tap ENTER",needsTarget:!0},{id:"exit",text:"Look around, then step on the green EXIT pad",needsTarget:!1}];function FS(n,e){switch(n){case"drive":return!!e.reached;case"drift":return e.driftTime>=1.5;case"park":return!!e.reached&&Math.abs(e.speed||0)<4;case"out":return!!e.onFoot;case"enter":return e.inside>=0;case"exit":return e.inside<0&&!!e.wasInside}return!1}function nm(n,e){let t={x:37,z:-37},i=null,s=1/0;for(let M of e.buildings){let v=Math.hypot(M.door.x-(t.x+30),M.door.z-t.z);v<s&&(s=v,i=M)}let r={drive:{x:37,z:-30,r:8},park:i?{x:i.door.x+i.door.nx*7,z:i.door.z+i.door.nz*7,r:9}:{x:90,z:-37,r:9},enter:i?{x:i.door.x+i.door.nx*.8,z:i.door.z+i.door.nz*.8,r:1.6}:null},o=new dt({color:4906624,transparent:!0,opacity:.85,depthWrite:!1,side:It}),a=new dt({color:4906624,transparent:!0,opacity:.22,depthWrite:!1,side:It,blending:nn}),l=new ut,c=new ne(new Qi(.85,1,40).rotateX(-Math.PI/2),o);c.position.y=.1;let h=new ne(new St(1,1,30,24,1,!0).translate(0,15,0),a);l.add(c,h),l.visible=!1,n.add(l);let f=!1,p=0,m=0,x=!1,g=0;function d(){let M=Os[p];return M&&M.needsTarget?r[M.id]:null}function u(){let M=d();l.visible=!!(f&&M),M&&(l.position.set(M.x,0,M.z),l.scale.set(M.r,1,M.r))}return{building:i,start(){f=!0,p=0,m=0,x=!1,u()},stop(){f=!1,l.visible=!1},get active(){return f},get step(){return p},get total(){return Os.length},get text(){return Os[p]?Os[p].text:""},target:d,update(M,v){if(!f)return null;g+=M,o.opacity=.6+Math.sin(g*4)*.25,l.rotation.y+=M*.6;let _=d(),R=_?Math.hypot(v.pos.x-_.x,v.pos.z-_.z)<_.r:!1;return Os[p].id==="drift"&&v.drifting&&(m+=M),v.inside>=0&&(x=!0),FS(Os[p].id,{reached:R,driftTime:m,onFoot:v.onFoot,inside:v.inside,wasInside:x,speed:v.speed})?(p++,p>=Os.length?(f=!1,l.visible=!1,"done"):(u(),"next")):null},get driftProgress(){return Math.min(1,m/1.5)}}}Dt();function im({url:n,key:e,topic:t,onStatus:i}){let s=new Map,r=null,o="off",a=0,l=null,c=null,h=0,f=!1,p=null,m="realtime:"+t;function x(M){if(o!==M&&(o=M,i))try{i(M)}catch{}}function g(M){if(r&&r.readyState===1)try{return r.send(JSON.stringify(M)),!0}catch{}return!1}function d(){if(f)return;clearTimeout(p),x("connecting");let M=n.replace(/^http/,"ws").replace(/\/$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(e)+"&vsn=1.0.0";try{r=new WebSocket(M)}catch{return u()}r.onopen=()=>{l=String(++a),g({topic:m,event:"phx_join",ref:l,join_ref:l,payload:{config:{broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},access_token:e}}),clearInterval(c),c=setInterval(()=>g({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++a)}),25e3)},r.onmessage=v=>{let _;try{_=JSON.parse(v.data)}catch{return}if(_.topic===m){if(_.event==="phx_reply"&&_.ref===l){if(_.payload&&_.payload.status==="ok")h=0,x("on");else{x("error");try{r.close()}catch{}}return}if(_.event==="phx_error"||_.event==="phx_close"){try{r.close()}catch{}return}if(_.event==="broadcast"&&_.payload){let R=s.get(_.payload.event);if(R)try{R(_.payload.payload||{})}catch(b){console.warn("mp handler",b)}}}},r.onclose=()=>{clearInterval(c),c=null,r=null,f||u()},r.onerror=()=>{}}function u(){x("connecting");let M=Math.min(15e3,1e3*Math.pow(1.7,h++));p=setTimeout(d,M)}return{connect(){f=!1,r||d()},close(){if(f=!0,clearTimeout(p),clearInterval(c),r){g({topic:m,event:"phx_leave",payload:{},ref:String(++a),join_ref:l});try{r.close()}catch{}}r=null,x("off")},on(M,v){s.set(M,v)},send(M,v){return o!=="on"?!1:g({topic:m,event:"broadcast",ref:String(++a),join_ref:l,payload:{type:"broadcast",event:M,payload:v}})},get status(){return o}}}var _u="https://fhbqxujlnqlmzvulrdxt.supabase.co",vu="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w",sm="city-driver-v2";var BS=160,HS=1e3,kS=2500,GS=7e3,VS=16,WS=10,XS=(n,e)=>{let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t};function qS(n,e){let t=String(n||"Driver").slice(0,16),i="700 28px system-ui, -apple-system, sans-serif",s=document.createElement("canvas").getContext("2d");s.font=i;let r=Math.max(70,Math.ceil(s.measureText(t).width)+30),o=44,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d");l.fillStyle="rgba(8,12,22,0.72)",l.beginPath(),l.roundRect?l.roundRect(1,1,r-2,o-2,14):l.rect(1,1,r-2,o-2),l.fill(),l.fillStyle=e==="red"?"#ff3b4e":e==="blue"?"#3b8bff":"#4ade80",l.beginPath(),l.arc(16,o/2,5,0,Math.PI*2),l.fill(),l.font=i,l.fillStyle="#fff",l.textBaseline="middle",l.fillText(t,26,o/2+1);let c=new on(a),h=new Er(new ws({map:c,transparent:!0,depthTest:!1}));return h.scale.set(r/90,o/90,1),h.renderOrder=999,h}function rm(n){let e=Math.random().toString(36).slice(2,10),t=new Map,i=null,s=0,r=0,o="",a="";function l(){return t.size+1}function c(){n.onCount&&n.onCount(l())}function h(S){let A=t.get(S);A&&(A.car&&n.scene.remove(A.car),A.person&&n.scene.remove(A.person),A.tag&&A.tag.parent&&A.tag.parent.remove(A.tag),t.delete(S),c())}function f(S){let A=S.carId+"|"+S.lookSig;if(S.car&&S.carSig===A)return;S.car&&n.scene.remove(S.car);let E=n.CAR_DEFS.find(D=>D.id===S.carId)||n.CAR_DEFS[0],y=n.buildCar(E);S.look&&n.applyCarSkin(y,S.look.paint,S.look.carSkin),y.position.set(S.cx,0,S.cz),y.rotation.y=S.ch,n.scene.add(y),S.car=y,S.carSig=A}function p(S){S.person||(S.person=n.buildCharacter(S.look?S.look.outfit:{shirt:2845872,hat:"none"}),S.person.position.set(S.x,0,S.z),n.scene.add(S.person),S.outfitSig="");let A=S.look?JSON.stringify(S.look.outfit):"";S.look&&A!==S.outfitSig&&(n.setOutfit(S.person,S.look.outfit),S.outfitSig=A),n.setHeldWeapon(S.person,S.weapon||null)}function m(S){if(!S||!S.id||S.id===e)return;let A=t.get(S.id);if(!A){if(t.size>=VS)return;A={id:S.id,name:"",x:+S.x||0,z:+S.z||0,h:+S.h||0,cx:0,cz:0,ch:0,tx:0,tz:0,th:0,mode:"car",carId:"sport",look:null,lookSig:"",car:null,person:null,tag:null,tagName:"",phase:0,speed:0,b:-1,weapon:null,seen:0},t.set(S.id,A),c()}A.seen=performance.now(),A.mode=S.m==="foot"?"foot":"car",A.tx=+S.x||0,A.tz=+S.z||0,A.th=+S.h||0,A.carId=String(S.c||"sport"),A.b=Number.isInteger(S.b)?S.b:-1,A.weapon=S.w||null;let E=S.tm||null;if(E!==A.team&&(A.team=E,A.tagName=""),A.dead=S.hp===0,A.firing=!!S.f,A.mode==="foot"&&Number.isFinite(S.px)&&(A.cx=+S.px,A.cz=+S.pz,A.ch=+S.ph||0),S.L){let y=JSON.stringify(S.L);y!==A.lookSig&&(A.lookSig=y,A.look=n.unpackLook(S.L))}S.n&&(S.n!==A.tagName||!A.tag)&&(A.tag&&A.tag.parent&&A.tag.parent.remove(A.tag),A.tag=qS(S.n,A.team),A.tagName=S.n,A.name=S.n),A.placed||(A.x=A.tx,A.z=A.tz,A.h=A.th,A.mode==="car"&&(A.cx=A.tx,A.cz=A.tz,A.ch=A.th),A.placed=!0)}function x(S){if(!S||S.id===e||!Array.isArray(S.s))return;let A=t.get(S.id);if(A&&(A.recoil=.35),!(A&&n.localBuilding!==void 0&&A.b!==n.localBuilding()))for(let E of S.s.slice(0,3))Array.isArray(E)&&E.length===4&&n.remoteShot(+E[0],+E[1],+E[2],+E[3])}let g=null;function d(){for(let S of[...t.keys()])h(S)}function u(S){if(S===void 0&&(S=sm),!(S===g&&i)){if(M(),g=S,!S||!_u||!vu){n.onStatus&&n.onStatus("off",1);return}i=im({url:_u,key:vu,topic:S,onStatus:A=>{n.onStatus&&n.onStatus(A,l())}}),i.on("st",m),i.on("sh",x),i.on("bye",A=>{A&&A.id&&h(A.id)}),i.on("hit",A=>{A&&A.t===e&&n.onHit&&n.onHit(A,t.get(A.id))}),i.on("kill",A=>{A&&n.onKill&&n.onKill(A)}),i.connect()}}function M(){if(i){try{i.send("bye",{id:e})}catch{}i.close(),i=null}d(),o="",a=""}window.addEventListener("pagehide",()=>{try{i&&i.send("bye",{id:e})}catch{}});function v(S,A,E){if(E=E||performance.now(),i&&i.status==="on"&&A){let F=A.mode+(A.x|0)+","+(A.z|0)+","+(A.h*10|0)+A.b+(A.w||""),L=F!==o||Math.abs(A.speed)>.3;if(E-s>=(L?BS:HS)){s=E,o=F;let I={id:e,n:A.name,m:A.mode,x:+A.x.toFixed(2),z:+A.z.toFixed(2),h:+A.h.toFixed(3),c:A.car,b:A.b,w:A.w||null,tm:A.team||null,hp:A.dead?0:1};A.mode==="foot"&&(I.px=+A.px.toFixed(2),I.pz=+A.pz.toFixed(2),I.ph=+A.ph.toFixed(3));let T=JSON.stringify(A.look);(T!==a||E-r>kS)&&(I.L=A.look,r=E,a=T),i.send("st",I)}}let y=Math.min(1,S*WS),D=A?A.b:-1;for(let[F,L]of t){if(E-L.seen>GS){h(F);continue}let I=L.x,T=L.z;if(L.x+=(L.tx-L.x)*y,L.z+=(L.tz-L.z)*y,L.h+=XS(L.h,L.th)*y,L.speed=S>0?Math.hypot(L.x-I,L.z-T)/S:0,L.mode==="car"&&(L.cx=L.x,L.cz=L.z,L.ch=L.h),f(L),L.car.position.set(L.cx,0,L.cz),L.car.rotation.y=L.ch,L.car.visible=D===-1,L.mode==="foot"?(p(L),L.person.visible=L.b===D,L.person.position.x=L.x,L.person.position.z=L.z,L.person.rotation.y=L.h,L.phase+=L.speed*S*2.1,L.recoil=Math.max(0,(L.recoil||0)-S),L.dead?(L.person.rotation.x=-Math.PI/2+.05,L.person.position.y=.12):(L.person.rotation.x=0,n.animateCharacter(L.person,L.phase,L.speed,!!L.weapon&&L.recoil>0,S))):L.person&&(L.person.visible=!1),L.tag){let U=L.mode==="foot"?L.person:L.car;U&&L.tag.parent!==U&&(L.tag.parent&&L.tag.parent.remove(L.tag),U.add(L.tag),L.tag.position.set(0,L.mode==="foot"?2.35:2.3,0))}}}function _(S){!i||i.status!=="on"||!S||!S.length||i.send("sh",{id:e,s:S.map(A=>A.map(E=>+E.toFixed(2)))})}function R(S){for(let A of t.values())S(A)}function b(S,A){i&&i.status==="on"&&i.send(S,Object.assign({id:e},A))}return{connect:u,disconnect:M,update:v,sendShots:_,send:b,each:R,myId:e,get topic(){return g},get count(){return l()},get status(){return i?i.status:"off"}}}Dt();function YS(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgba(110,0,0,1)";let t=(s,r)=>s+Math.random()*(r-s);e.beginPath(),e.arc(64,64,40,0,Math.PI*2),e.fill();for(let s=0;s<14;s++){let r=t(0,Math.PI*2),o=t(20,50),a=t(6,18);e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,Math.PI*2),e.fill()}let i=new on(n);return i.colorSpace=gt,i}function om(n){let e=new Xn(n,60,{color:10158080,opacity:.95,size:.35}),t=new Xn(n,24,{color:6946816,opacity:.55,size:.8}),i=YS(),s=[];for(let c=0;c<24;c++){let h=new ne(new rt(1,1).rotateX(-Math.PI/2),new ve({map:i,transparent:!0,opacity:.92,roughness:.15,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));h.visible=!1,h.renderOrder=3,n.add(h),s.push({m:h,size:0,max:0,life:0})}let r=0;function o(c,h,f,p=0,m=0,x=1){let g=Math.round(6*x);for(let d=0;d<g;d++)e.emit(c+(Math.random()-.5)*.2,h+(Math.random()-.5)*.3,f+(Math.random()-.5)*.2,{vx:p*(1.5+Math.random()*3)+(Math.random()-.5)*2,vy:Math.random()*2.5-.5,vz:m*(1.5+Math.random()*3)+(Math.random()-.5)*2,life:.35+Math.random()*.3,size:.18,grow:.25});t.emit(c,h,f,{vx:p*1.2,vy:.3,vz:m*1.2,life:.4,size:.5,grow:.9})}function a(c,h,f=2.2){let p=s[r];r=(r+1)%s.length,p.m.position.set(c,.07+r*5e-4,h),p.m.rotation.y=Math.random()*Math.PI*2,p.size=.2,p.max=f,p.life=45,p.m.scale.set(.2,1,.2),p.m.material.opacity=.92,p.m.visible=!0}function l(c){e.update(c),t.update(c);for(let h of s)h.m.visible&&(h.life-=c,h.size<h.max&&(h.size=Math.min(h.max,h.size+c*.5),h.m.scale.set(h.size,1,h.size)),h.life<5&&(h.m.material.opacity=.92*Math.max(0,h.life/5)),h.life<=0&&(h.m.visible=!1))}return{hit:o,pool:a,update:l}}var am=74,Ll=5,ss=28,Ul=ss*8,ZS=1.5,$S=5.2,Dr=(n,e)=>n+Math.random()*(e-n),zs=n=>n[Math.random()*n.length|0];function Dl(){return{shirt:zs(ts),pants:zs([2963272,1981066,1120295,7041664,9067034,13358561]),skin:zs(yl),hair:zs(Ml.slice(0,6)),hat:Math.random()<.25?zs(["cap","beanie","cowboy"]):"none",hatColor:zs(ts),hairLong:Math.random()<.4}}function yu(n,e,t,i){t=(t%Ul+Ul)%Ul;let s=Math.floor(t/(ss*2)),r=t-s*ss*2-ss;return s===0?(i.x=n+r,i.z=e-ss,i.h=-Math.PI/2):s===1?(i.x=n+ss,i.z=e+r,i.h=Math.PI):s===2?(i.x=n-r,i.z=e+ss,i.h=Math.PI/2):(i.x=n-ss,i.z=e-r,i.h=0),i}function lm(n){let e=[],t=[],i=[],s={x:0,z:0,h:0},r=n.count||16;function o(_,R){let b=[];for(let S=0;S<Ll;S++)for(let A=0;A<Ll;A++){let E=(S-(Ll-1)/2)*am,y=(A-(Ll-1)/2)*am;Math.hypot(E-_,y-R)<170&&!(S===0&&A===0)&&b.push({cx:E,cz:y})}return b}function a(_,R,b){let S=o(R,b),A=S.length?zs(S):{cx:0,cz:0};_.cx=A.cx,_.cz=A.cz,_.p=Dr(0,Ul),_.dir=Math.random()<.5?1:-1,_.state="walk",_.hp=40,_.flee=0,_.phase=Dr(0,6),_.deadT=0,si(_.person,Dl()),_.person.rotation.set(0,0,0),_.person.visible=!0,yu(_.cx,_.cz,_.p,s),_.x=s.x,_.z=s.z,_.h=s.h}function l(){let _=Pr(Dl());n.scene.add(_);let R={person:_,x:0,z:0,h:0,cx:0,cz:0,p:0,dir:1,state:"walk",hp:40,flee:0,phase:0,deadT:0,kind:"ped"};return e.push(R),R}function c(_,R=0,b=0,S="shot"){if(_.state==="dead")return;_.state="dead",_.deadT=0,_.hp=0;let A=Math.atan2(R,b);_.person.rotation.set(0,A+Math.PI,0),_.fallDir={x:R,z:b},n.blood.hit(_.x,1,_.z,R,b,S==="car"?2.5:1.5),n.blood.pool(_.x+R*.9,_.z+b*.9,Dr(1.8,2.8)),_.kind==="enemy"&&_.onDeath&&_.onDeath(_),f(_.x,_.z,35)}function h(_,R,b,S){return _.state==="dead"?!1:(_.hp-=R,n.blood.hit(_.x,1.25,_.z,b,S,.8),_.hp<=0?(c(_,b,S),!0):(_.kind==="ped"&&(_.state="flee",_.flee=7),_.kind==="enemy"&&(_.aggro=!0),!1))}function f(_,R,b){for(let S of e){if(S.state==="dead")continue;let A=Math.hypot(S.x-_,S.z-R);if(A<b){S.state="flee",S.flee=6+Math.random()*3,yu(S.cx,S.cz,S.p+1,s);let E=Math.hypot(s.x-_,s.z-R);S.dir=E>A?1:-1}}}function p(_){let R=Pr(_.outfit||Dl());si(R,_.outfit||Dl()),Do(R,_.weapon||"pistol"),n.scene.add(R);let b=Object.assign({kind:"enemy",person:R,x:_.x,z:_.z,h:0,hp:_.hp||60,maxHp:_.hp||60,state:"idle",aggro:!1,cool:Dr(.5,1.5),phase:0,deadT:0,strafe:Math.random()<.5?1:-1,accuracy:.45,dmg:8,rate:.9,range:45},_);return b.person.position.set(b.x,0,b.z),t.push(b),b}function m(){for(let _ of t)n.scene.remove(_.person);t.length=0}function x(_,R,b){if(_.state==="dead"){_.deadT+=R,g(_,R);return}let S=b.x-_.x,A=b.z-_.z,E=Math.hypot(S,A);(E<_.range||_.aggro)&&(_.aggro=!0);let y=0;if(_.aggro&&b.alive&&!b.hidden){_.h=Math.atan2(-S,-A);let D=_.boss?9:13,F=0,L=0;E>D+3?(F=S/E,L=A/E):E<D-3&&(F=-S/E,L=-A/E),F+=-A/E*_.strafe*.6,L+=S/E*_.strafe*.6;let I=Math.hypot(F,L)||1;y=_.boss?4.2:3;let T=n.collide(_.x+F/I*y*R,_.z+L/I*y*R,.45);if(Math.abs(T.x-_.x)<1e-4&&Math.abs(T.z-_.z)<1e-4&&(_.strafe*=-1),_.x=T.x,_.z=T.z,Math.random()<R*.4&&(_.strafe*=-1),_.cool-=R,_.cool<=0&&E<_.range*1.2){_.cool=_.rate*Dr(.8,1.3);let U=Math.max(.08,_.accuracy*(1-E/(_.range*1.6))*(b.inCar?.7:1)),H=Math.random()<U,N=_.x-Math.sin(_.h)*.9,k=_.z-Math.cos(_.h)*.9,X=H?0:Dr(1.2,3)*(Math.random()<.5?-1:1),q=b.x+-A/E*X,te=b.z+S/E*X;n.shoot(N,k,q+(q-N)/E*(H?0:12),te+(te-k)/E*(H?0:12)),Rl(_.person),n.audio&&n.audio.shot&&n.audio.shot(_.weapon==="glock"?"pistol":_.weapon),H&&n.onPlayerHit(_.dmg,_)}}_.phase+=y*R*2.1,_.person.position.set(_.x,0,_.z),_.person.rotation.y=_.h,Us(_.person,_.phase,y,_.aggro,R)}function g(_,R){let b=Math.min(1,_.deadT/.35);if(_.person.rotation.x=-b*(Math.PI/2-.05),_.person.position.y=.12*b,_.deadT>.4){let S=_.person.userData;S.legs[0].rotation.x=.1,S.legs[1].rotation.x=-.15,S.arms[0].rotation.z=.9,S.arms[1].rotation.z=-.9}}function d(_,R){for(;e.length<r;)a(l(),R.x,R.z);for(let b of e){let S=Math.hypot(b.x-R.x,b.z-R.z)>190;if(b.state==="dead"){b.deadT+=_,g(b,_),(b.deadT>30||S&&b.deadT>3)&&a(b,R.x,R.z);continue}if(S){a(b,R.x,R.z);continue}let A=ZS;b.state==="flee"&&(b.flee-=_,A=$S,b.flee<=0&&(b.state="walk")),b.p+=b.dir*A*_,yu(b.cx,b.cz,b.p,s),b.x=s.x,b.z=s.z,b.h=s.h+(b.dir<0?Math.PI:0),b.phase+=A*_*2.1,b.person.position.set(b.x,0,b.z),b.person.rotation.y=b.h,Us(b.person,b.phase,A,!1,_)}for(let b of t)x(b,_,R);i.length=0;for(let b of e)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.42,ref:b});for(let b of t)b.state!=="dead"&&i.push({x:b.x,z:b.z,r:.45,ref:b})}function u(_,R,b,S){if(Math.abs(S)<5)return 0;let A=-Math.sin(b),E=-Math.cos(b),y=0;for(let D of[e,t])for(let F of D)if(F.state!=="dead"&&(Math.hypot(F.x-_-A*1.2,F.z-R-E*1.2)<1.6||Math.hypot(F.x-_,F.z-R)<1.3)){let L=Math.sign(S);F.kind==="enemy"&&(F.hp=0),c(F,A*L,E*L,"car"),y++}return y}function M(_){for(r=_;e.length>_;){let R=e.pop();n.scene.remove(R.person)}}function v(_){for(let R of e)R.person.visible=_;for(let R of t)R.person.visible=_}return{update:d,damage:h,scare:f,spawnEnemy:p,clearEnemies:m,carHits:u,setCount:M,setVisible:v,get hitList(){return i},get enemies(){return t},get peds(){return e}}}Dt();var JS=14,Bs=3.5,Nl=JS/2+2.2,Mu=16;function KS(n,e){let t=(e%Mu+Mu)%Mu;return n==="z"?t<6?"green":t<8?"yellow":"red":t<8?"red":t<14?"green":"yellow"}var QS=(n,e)=>(n+e)%2*4;function Su(n,e,t,i){return n==="z"?{x:e+(t<0?Bs:-Bs),z:i,h:t<0?0:Math.PI}:{x:i,z:e+(t>0?Bs:-Bs),h:t>0?-Math.PI/2:Math.PI/2}}var Fs=new lt,Oo=new An,Ur=new z,Eu=new z(1,1,1),cm=new z(0,1,0),Ol=new Ce(1710618),jS=new Ce(16722458),eE=new Ce(16756768),tE=new Ce(2883434);function hm(n){let e=n.lines.slice().sort((T,U)=>T-U),t=e.length,i=0,s=[];for(let T=0;T<t;T++)for(let U=0;U<t;U++){let H=e[T],N=e[U],k=Nl-.6;s.push({ix:T,iz:U,axis:"z",x:H+k,z:N+k,rot:0}),s.push({ix:T,iz:U,axis:"z",x:H-k,z:N-k,rot:Math.PI}),s.push({ix:T,iz:U,axis:"x",x:H-k,z:N+k,rot:-Math.PI/2}),s.push({ix:T,iz:U,axis:"x",x:H+k,z:N-k,rot:Math.PI/2})}let r=s.length,o=new St(.09,.11,4.2,6).translate(0,2.1,0),a=new ve({color:3093563,metalness:.6,roughness:.5}),l=new Ie(.45,1.25,.32).translate(0,4.6,0),c=new ve({color:1909030,roughness:.6,metalness:.3}),h=new br(.15,12),f=new Rt(o,a,r),p=new Rt(l,c,r),m=new dt({color:16777215,toneMapped:!1}),x=[0,1,2].map(()=>new Rt(h,m,r));p.castShadow=!0,s.forEach((T,U)=>{Oo.setFromAxisAngle(cm,T.rot),Ur.set(T.x,0,T.z),Fs.compose(Ur,Oo,Eu),f.setMatrixAt(U,Fs),p.setMatrixAt(U,Fs);let H=Math.sin(T.rot),N=Math.cos(T.rot);for(let k=0;k<3;k++)Ur.set(T.x+H*.17,5-k*.38,T.z+N*.17),Fs.compose(Ur,Oo,Eu),x[k].setMatrixAt(U,Fs),x[k].setColorAt(U,Ol)});for(let T of[f,p,...x])T.instanceMatrix.needsUpdate=!0,n.scene.add(T);{let T=new rt(Bs*2-.6,.45).rotateX(-Math.PI/2),U=new Rt(T,new ve({color:15922422,roughness:.7}),r);s.forEach((H,N)=>{let k=e[H.ix],X=e[H.iz],q,te,G;if(H.axis==="z"){let K=H.rot===0?1:-1;q=k+K*Bs,te=X+K*Nl,G=0}else{let K=H.rot<0?-1:1;q=k+K*Nl,te=X-K*Bs,G=Math.PI/2}Oo.setFromAxisAngle(cm,G),Ur.set(q,.065,te),Fs.compose(Ur,Oo,Eu),U.setMatrixAt(N,Fs)}),U.instanceMatrix.needsUpdate=!0,n.scene.add(U)}let g=new Array(r).fill("");function d(T,U,H){return KS(H,i+QS(T,U))}function u(){let T=!1;for(let U=0;U<r;U++){let H=s[U],N=d(H.ix,H.iz,H.axis);N!==g[U]&&(g[U]=N,T=!0,x[0].setColorAt(U,N==="red"?jS:Ol),x[1].setColorAt(U,N==="yellow"?eE:Ol),x[2].setColorAt(U,N==="green"?tE:Ol))}if(T)for(let U of x)U.instanceColor.needsUpdate=!0}let M=[],v=12,_=T=>{let U=0,H=1/0;for(let N=0;N<t;N++){let k=Math.abs(e[N]-T);k<H&&(H=k,U=N)}return U};function R(){let T=n.CAR_DEFS,U=T[Math.random()*T.length|0],H=n.buildCar(U),N=U.colors[Math.random()*U.colors.length|0];return n.applyCarSkin(H,N,null),n.scene.add(H),{group:H,def:U,axis:"z",li:0,dir:1,s:0,speed:0,cruise:0,x:0,z:0,h:0,honk:0,wait:0}}function b(T,U,H,N){for(let X=0;X<20;X++){T.axis=Math.random()<.5?"z":"x",T.li=Math.random()*t|0,T.dir=Math.random()<.5?1:-1,T.s=e[0]+Math.random()*(e[t-1]-e[0]);let q=Su(T.axis,e[T.li],T.dir,T.s),te=Math.hypot(q.x-U,q.z-H);if(N?te<150:te>70&&te<170){T.x=q.x,T.z=q.z,T.h=q.h;break}}let k=Su(T.axis,e[T.li],T.dir,T.s);T.x=k.x,T.z=k.z,T.h=k.h,T.cruise=9+Math.random()*5,T.speed=T.cruise*.6,T.group.position.set(T.x,0,T.z),T.group.rotation.y=T.h}function S(T){if(T.dir>0){for(let U=0;U<t;U++)if(e[U]>T.s+.3)return U}else for(let U=t-1;U>=0;U--)if(e[U]<T.s-.3)return U;return-1}function A(T,U){let H=Math.random(),N=T.dir>0&&U===t-1||T.dir<0&&U===0,k=H<.55&&!N?"straight":H<.82?"right":"left",X,q;if(k==="straight")return;T.axis==="z"?(X="x",q=T.dir<0==(k==="right")?1:-1):(X="z",q=T.dir>0==(k==="right")?1:-1);let te=e[T.li],G=U;(q>0&&te>=e[t-1]-1||q<0&&te<=e[0]+1)&&(q=-q),T.axis=X,T.li=G,T.dir=q,T.s=te}function E(T,U,H){for(i+=T,u();M.length<v;){let N=R();b(N,U.x,U.z,M.length<4),M.push(N)}for(let N of M){if(Math.hypot(N.x-U.x,N.z-U.z)>230){b(N,U.x,U.z,!1);continue}let k=N.cruise,X=S(N);if(X>=0){let pe=e[X],Le=(pe-N.s)*N.dir,Fe=Le-Nl,Te=N.axis==="z"?N.li:X,He=N.axis==="z"?X:N.li,B=d(Te,He,N.axis);Fe>-.5&&(B==="red"||B==="yellow"&&Fe>5)&&(k=Math.min(k,Math.max(0,Fe-.3)*1.1)),Le<=.05&&(N.s=pe,A(N,X))}else N.dir=-N.dir;for(let pe of M){if(pe===N||pe.axis!==N.axis||pe.li!==N.li||pe.dir!==N.dir)continue;let Le=(pe.s-N.s)*N.dir;Le>0&&Le<14&&(k=Math.min(k,Math.max(0,(Le-6.5)*1.3)))}if(H){let pe=-Math.sin(N.h),Le=-Math.cos(N.h),Fe=H.x-N.x,Te=H.z-N.z,He=Fe*pe+Te*Le,B=Math.abs(Fe*Le-Te*pe);He>0&&He<13&&B<2.6?(k=Math.min(k,Math.max(0,(He-5.5)*1.3)),N.wait+=T):N.wait=0}let q=k>N.speed?4:9;N.speed+=Math.sign(k-N.speed)*Math.min(Math.abs(k-N.speed),q*T),N.s+=N.dir*N.speed*T;let te=Su(N.axis,e[N.li],N.dir,N.s),G=Math.min(1,T*6);N.x+=(te.x-N.x)*G,N.z+=(te.z-N.z)*G;let K=te.h-N.h;K=Math.atan2(Math.sin(K),Math.cos(K)),N.h+=K*Math.min(1,T*5),N.group.position.set(N.x,0,N.z),N.group.rotation.y=N.h;let me=N.speed*T*2.6;for(let pe of N.group.userData.wheels)pe.rotation.x+=me;let ye=N.group.userData.flashers;if(ye){let pe=(i*6|0)%2;ye[0].emissiveIntensity=pe?4:.25,ye[1].emissiveIntensity=pe?.25:4}}}function y(T,U){let H=null;for(let N of M){let k=-Math.sin(N.h),X=-Math.cos(N.h);for(let q of[-1.3,0,1.3]){let te=N.x+k*q,G=N.z+X*q,K=1+U,me=T.x-te,ye=T.z-G,pe=Math.hypot(me,ye);pe<K&&pe>1e-6&&(T.x=te+me/pe*K,T.z=G+ye/pe*K,H=N)}}return H&&(H.speed*=.3),H}let D=[];function F(){D.length=0;for(let T of M){let U=-Math.sin(T.h),H=-Math.cos(T.h);D.push({x:T.x+U*.9,z:T.z+H*.9,r:1,ref:{kind:"car",car:T}}),D.push({x:T.x-U*.9,z:T.z-H*.9,r:1,ref:{kind:"car",car:T}})}return D}function L(T){for(v=T;M.length>T;){let U=M.pop();n.scene.remove(U.group)}}function I(T){for(let U of M)U.group.visible=T}return{update:E,collide:y,hitList:F,setCount:L,setVisible:I,stateAt:d,get cars(){return M}}}var{CAR_DEFS:hi,buildCar:Wl,effectiveStats:zm,applyCarSkin:Xl}=tu,ue=n=>document.getElementById(n),an,Et,Vt,Mt,wn=null,Yn=null,Go=null,de=null,bt=null,ze=null,Zn=null,Fm=null,Ct=null,Ne=null,Gt="boot",gn=!1,zn=!1,Ql="menu",Ut={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},Hu=null,ot=null,ku=null,tc=null,ls=!1,ql="menu",Fo=.6,Nt=null,Xr=!1,qr=null,fi=null,Ui=null,Em=null,cs=100,ui=!1,Lu=0,Yl=0,os={x:0,z:0,alive:!0,hidden:!1,inCar:!0},nc=Co(),Fn=null,pi=null,Bm=null,Gr=0,Hs=null,Vo=null,jl=null,ri=null,Zl=null,Du=0,Uu=1,In=null,ft=!1,Re=null,et=null,Vr=null,hs=null,Gu=null,$l=null,ks=!1,as=0,ko=0,Br=null,Hr=null,bm="",Tn={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},Gl={x:0,z:0},Bt=new z,Pn=new z,mn=new z,Wr={x:0,z:0},Bo={x:0,z:0,hitX:!1,hitZ:!1},Ft={name:"",mode:"car",x:0,z:0,h:0,speed:0,car:"sport",look:null,px:0,pz:0,ph:0,b:-1,w:null},mi=null,Vl={def:null,stats:null,group:null},Gs=[],Nu=[],Ou=[],gi=62,zu=0,wm=0;function Wt(n,e=2200){let t=ue("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(wm),wm=setTimeout(()=>t.classList.add("hidden"),e)}function Ni(){let n=Ne.cash.toLocaleString();ue("cash-val").textContent=n,ue("garage-cash").textContent=n}function Yr(n){Ne.cash=Math.max(0,Ne.cash+Math.round(n)),fn(Ne),Ni()}function Hm(){Yn=hi.find(n=>n.id===Ne.currentCar)||hi[0],wn&&Et.remove(wn),wn=Wl(Yn),Xl(wn,Ne.paint[Yn.id],Ls(Ne,Yn.id)),Et.add(wn),mi=null,Go=zm(Yn,Ne.upgrades[Yn.id]||{}),Gs=(wn.userData.wheels||[]).slice(),Nu=Gs.filter(n=>n.position.z<0),Ou=wn.userData.brakeMats||[],ue("menu-car-name").textContent=Yn.name}function ic(){let n=de.heading;mn.set(-Math.sin(n),0,-Math.cos(n)),Bt.set(de.pos.x-mn.x*9,4,de.pos.z-mn.z*9),Vt.position.copy(Bt)}function Vu(){let n=Mt.spawn;de.pos.x=n.x,de.pos.z=n.z,de.heading=n.heading||0,nc=Co(),ic(),Wo(0)}function kr(){let n=de.pos.x,e=de.pos.z,t=de.heading;Hm(),de.reset(Go),de.pos.x=n,de.pos.z=e,de.heading=t,Wo(0)}var di=new z;function Wo(n){wn.position.set(de.pos.x,0,de.pos.z),wn.rotation.y=de.heading;let e=wn.userData.flashers;if(e){let s=(performance.now()/170|0)%2;e[0].emissiveIntensity=s?4:.25,e[1].emissiveIntensity=s?.25:4}let t=Ut.speed*n*2.4;for(let s=0;s<Gs.length;s++)Gs[s].rotation.x+=t;for(let s=0;s<Nu.length;s++)Nu[s].rotation.y=Ut.steer*.45;let i=bt&&bt.input.throttle<0;if(wn.userData.setBrake)wn.userData.setBrake(i);else for(let s=0;s<Ou.length;s++)Ou[s].emissiveIntensity=i?4.5:1.8;if(ri){let s=de.heading;di.set(-Math.sin(s),0,-Math.cos(s)),ri.position.set(de.pos.x+di.x*1.8,1.1,de.pos.z+di.z*1.8),Zl.position.set(de.pos.x+di.x*22,.4,de.pos.z+di.z*22)}}var Ho=new z;function oE(n,e){let t=Gs[n];return e.setFromMatrixPosition(t.matrixWorld),e}var Cu=0;function aE(n){if(!Hs||Gt!=="freeroam"||gn||zn)return;wn.updateMatrixWorld();let e=Gs.length;if(Ut.drifting&&Uu>.3)for(let i=0;i<e;i++)Gs[i].position.z<0||(oE(i,Ho),Math.random()<.85*Uu&&Hs.emit(Ho.x+(Math.random()-.5)*.4,.35,Ho.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&jl.add(Ho.x,Ho.z,de.heading));if(Cu+=n,(bt&&bt.input.throttle||0)>.4&&Cu>.09){Cu=0;let i=de.heading;di.set(-Math.sin(i),0,-Math.cos(i));let s=Math.cos(i),r=-Math.sin(i);for(let o of[-.45,.45]){let a=de.pos.x-di.x*2.2+s*o,l=de.pos.z-di.z*2.2+r*o;Vo.emit(a,.32,l,{vx:-di.x*2,vy:.8,vz:-di.z*2,life:.5,size:.55,grow:1.6})}}Hs.update(n),Vo.update(n)}function lE(n,e){let t=Wu(n,e,1.15);if(Ui&&!ot&&Ui.collide(t,1.15)&&de){let s=Math.hypot(de.vel.x,de.vel.z);de.vel.x*=.55,de.vel.z*=.55,s>8&&ze&&ze.beep(90,.08)}return t}function Wu(n,e,t){let i=n,s=e,r=!1,o=!1,a=ku||Mt.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(i+t<c.minX||i-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(i,c.maxX)),f=Math.max(c.minZ,Math.min(s,c.maxZ)),p=i-h,m=s-f,x=p*p+m*m;if(!(x>=t*t))if(x>1e-8){let g=Math.sqrt(x),d=(t-g)/g,u=p*d,M=m*d;i+=u,s+=M,Math.abs(u)>Math.abs(M)?r=!0:o=!0}else{let g=i-c.minX,d=c.maxX-i,u=s-c.minZ,M=c.maxZ-s,v=Math.min(g,d,u,M);v===g?(i=c.minX-t,r=!0):v===d?(i=c.maxX+t,r=!0):v===u?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return Bo.x=i,Bo.z=s,Bo.hitX=r,Bo.hitZ=o,Bo}function Xu(n,e,t){let i=Wu(n,e,t);if(ot)return i;Ui&&Ui.collide(i,t);let s=de.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=de.pos.x+r*a,c=de.pos.z+o*a,h=1+t,f=i.x-l,p=i.z-c,m=Math.hypot(f,p);m<h&&m>1e-6&&(i.x=l+f/m*h,i.z=c+p/m*h)}return i}function Oi(){if(!et)return;si(et,qm()),Do(et,bn().equipped);let n=bn().equipped&&is(bn().equipped);ue("weapon-name").textContent=n?n.name.toUpperCase():"UNARMED";let e=ue("weapon-ammo");e.textContent=n?String(bn().ammo[n.id]|0):bn().weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!n)}function qu(){for(let n of["speedo","gear-hud","nitro-bar"])ue(n).classList.toggle("hidden",ft);ue("weapon-hud").classList.toggle("hidden",!ft)}function Yu(){if(Math.abs(Ut.speed)>4){Wt("Slow down to get out");return}let n=fu(de.pos.x,de.pos.z,de.heading),e=Xu(n.x,n.z,.45);Re.reset(e.x,e.z,de.heading),de.vel.x=0,de.vel.z=0,de.speed=0,Ut.speed=0,Ut.drifting=!1,Ut.nitro=!1,Ut.steer=0,nc=Co(),ft=!0,et.visible=!0,et.position.set(Re.pos.x,0,Re.pos.z),Oi(),bt.setMode("foot"),qu(),ze.engine(0,0),ze.skid(!1),ze.beep(420,.06)}function km(){ft&&(ft=!1,et.visible=!1,as=0,bt&&bt.setMode("drive"),qu(),nc=Co(),ze&&ze.beep(520,.06),ko&&(fn(Ne),ko=0))}function cE(n){let e=Re.heading,t=Re.pos.x,i=Re.pos.z;mn.set(-Math.sin(e),0,-Math.cos(e));let s=as>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;if(Pn.set(t-mn.x*r+a*c,o,i-mn.z*r+l*c),ot){let f=ot.room.bounds,p=.45;Pn.x=Math.max(f.minX+p,Math.min(f.maxX-p,Pn.x)),Pn.z=Math.max(f.minZ+p,Math.min(f.maxZ-p,Pn.z)),Pn.y=Math.min(Pn.y,3.9)}let h=1-Math.exp(-n*7);Bt.x+=(Pn.x-Bt.x)*h,Bt.y+=(Pn.y-Bt.y)*h,Bt.z+=(Pn.z-Bt.z)*h,Vt.position.copy(Bt),Vt.lookAt(t+mn.x*5+a*c,1.45,i+mn.z*5+l*c),Math.abs(60-gi)>.25&&(gi+=(60-gi)*Math.min(1,n*4),Vt.fov=gi,Vt.updateProjectionMatrix())}function hE(n){if(Re.update(bt.input,n,Xu),et.position.x=Re.pos.x,et.position.z=Re.pos.z,et.rotation.y=Re.heading,bt.consumeCycle()){let i=du(bn());fn(Ne),Oi(),bn().weapons.length?Wt(i?is(i).name:"Holstered",1200):Wt("No guns yet \u2014 visit LOCK & LOAD",1600)}Tn.pos.x=Re.pos.x,Tn.pos.z=Re.pos.z,Tn.heading=Re.heading;let e=bt.consumeFireEdge();e&&!bn().equipped&&bn().weapons.length&&(du(bn()),Oi()),Vr.update(n,Tn,bt.input.fire,e).fired&&(fi&&!ot&&fi.scare(Re.pos.x,Re.pos.z,45),Rl(et),as=.9,ko++,ue("weapon-ammo").textContent=String(bn().ammo[bn().equipped]|0)),bt.input.fire&&bn().equipped&&(as=Math.max(as,.3)),as=Math.max(0,as-n),Us(et,Re.phase,Re.speed,as>0&&!!bn().equipped,n),cE(n),ko&&zu%120===0&&(fn(Ne),ko=0)}function pn(n,e,t){if(Br=n,Hr=e,t!==bm){bm=t;let i=ue("btn-action");i.textContent=t||"",i.classList.toggle("hidden",!t)}}function uE(n,e){let t=null,i=1.5;for(let s of Mt.buildings){if(Cr(n,e,s.door.x+s.door.nx*.5,s.door.z+s.door.nz*.5)<2.2)return s;let o=Math.max(s.minX,Math.min(n,s.maxX)),a=Math.max(s.minZ,Math.min(e,s.maxZ)),l=Math.hypot(n-o,e-a);l<i&&(i=l,t=s)}return t}function Zu(){let n=Re.heading;if(mn.set(-Math.sin(n),0,-Math.cos(n)),Bt.set(Re.pos.x-mn.x*4.6,2.6,Re.pos.z-mn.z*4.6),ot){let e=ot.room.bounds,t=.45;Bt.x=Math.max(e.minX+t,Math.min(e.maxX-t,Bt.x)),Bt.z=Math.max(e.minZ+t,Math.min(e.maxZ-t,Bt.z))}Vt.position.copy(Bt)}function Gm(n){let e=Hu.get(em(n.id)),t=Cr(Re.pos.x,Re.pos.z,n.door.x,n.door.z)<2.6,i,s,r,o;if(t)r=n.door.nx,o=n.door.nz,i=n.door.x+r*1.4,s=n.door.z+o*1.4;else{let a=Math.max(n.minX,Math.min(Re.pos.x,n.maxX)),l=Math.max(n.minZ,Math.min(Re.pos.z,n.maxZ)),c=Re.pos.x-a,h=Re.pos.z-l,f=Math.hypot(c,h)||1;r=c/f,o=h/f,i=a+r*1.4,s=l+o*1.4}ot={b:n,room:e,back:{x:i,z:s,heading:Math.atan2(-r,-o)}},ku=e.colliders,Tn.colliders=e.colliders,Tn.targets=[],Re.reset(e.spawn.x,e.spawn.z,e.spawn.heading),et.position.set(Re.pos.x,0,Re.pos.z),Zu(),pn(null,null,""),ze.beep(640,.07),Wt("\u{1F3E2} Inside: "+jp[e.style]+" \u2014 EXIT pad is behind you",2200)}function sc(){if(!ot)return;let n=ot.back;ot=null,ku=null,Tn.colliders=Mt.colliders,Tn.targets=hs.targets;let e=Xu(n.x,n.z,.45);Re.reset(e.x,e.z,n.heading),et.position.set(Re.pos.x,0,Re.pos.z),Zu(),pn(null,null,""),ze.beep(520,.07)}function Tm(){if(ft){if(ot){let i=Cr(Re.pos.x,Re.pos.z,ot.room.exit.x,ot.room.exit.z);if(i<.8){sc();return}return i<2.4?pn("exit",null,"\u{1F6AA} EXIT BUILDING"):pn(null,null,"")}let n=null,e=2.4;for(let i of hs.stores){let s=Cr(Re.pos.x,Re.pos.z,i.door.x,i.door.z);s<e&&(e=s,n=i)}if(n)return pn("shop",n,(n.type==="garage"?"\u{1F527} ":n.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+n.name);if(Cr(Re.pos.x,Re.pos.z,de.pos.x,de.pos.z)<4.2)return pn("in",null,"\u{1F697} GET IN");let t=uE(Re.pos.x,Re.pos.z);return t?pn("enter",t,"\u{1F3E2} ENTER BUILDING"):pn(null,null,"")}if(Math.abs(Ut.speed)<4)return pn("out",null,"\u{1F6AA} GET OUT");pn(null,null,"")}function Am(){Br==="out"?Yu():Br==="in"?km():Br==="enter"&&Hr?Gm(Hr):Br==="exit"?sc():Br==="shop"&&Hr&&(Hr.type==="garage"?ec("play"):dE(Hr))}function dE(n){ks=!0,pn(null,null,""),ze.beep(700,.06),Gu.open(n)}function Vm(){ks=!1,Gu.close(),Oi(),Ni()}var xn="single",fE="city-driver-tdm",Jl=25,Wm={red:14100029,blue:2060267},Ve={team:null,score:{red:0,blue:0},over:0,lastAttacker:null,kills:0,deaths:0},Xm={weapons:["ak","glock","shotgun","sniper"],ammo:{ak:9999,glock:9999,shotgun:9999,sniper:9999},equipped:"ak"},Fu=[];function bn(){return Tn.save||Ne}function qm(){return xn==="tdm"&&Ve.team?Object.assign({},Ne.outfit,{shirt:Wm[Ve.team]}):Ne.outfit}function Pu(n){xn=n,Ct.connect(n==="single"?null:n==="tdm"?fE:void 0),fi.clearEnemies(),fi.setCount(n==="tdm"?0:14),Tn.save=n==="tdm"?Xm:Ne,ue("tdm-hud").classList.toggle("hidden",n!=="tdm"),Kl(),n==="tdm"?(Nt.active&&(Nt.stop(),ue("objective").classList.add("hidden")),Ve.score.red=Ve.score.blue=0,Ve.kills=Ve.deaths=0,Ve.over=0,Ve.team=null,setTimeout(()=>{xn==="tdm"&&(pE(),$u())},1600),Wt("\u2694\uFE0F TEAM DEATHMATCH \u2014 first team to "+Jl+" kills wins",3e3)):(et&&si(et,Ne.outfit),Wt(n==="single"?"\u{1F9CD} Single player \u2014 the city is all yours":"\u{1F310} Online free roam \u2014 "+Ct.count+" in the city",2600))}function pE(){let n=0,e=0;Ct.each(t=>{t.team==="red"?n++:t.team==="blue"&&e++}),Ve.team=n<e?"red":e<n?"blue":Math.random()<.5?"red":"blue",si(et,qm()),mi=null,rc(),Wt("You are on "+Ve.team.toUpperCase()+" team",2200)}function Ym(n){return n==="red"?{x:-176,z:3,heading:-Math.PI/2}:{x:176,z:-3,heading:Math.PI/2}}function $u(){Xo();let n=Ym(Ve.team||"red");de.pos.x=n.x+(Math.random()-.5)*6,de.pos.z=n.z+(Math.random()-.5)*20,de.heading=n.heading,de.vel.x=de.vel.z=0,Ut.speed=0,Wo(0),ic(),Yu(),Xm.equipped="ak",Oi()}function rc(){ue("tdm-red").textContent=Ve.score.red,ue("tdm-blue").textContent=Ve.score.blue;let n=ue("tdm-you");n.textContent=Ve.team?"YOU: "+Ve.team.toUpperCase()+" \xB7 "+Ve.kills+"K / "+Ve.deaths+"D":"joining\u2026",n.className=Ve.team||""}function Zm(n){if(!n||!n.kt||!(n.kt in Ve.score))return;Ve.score[n.kt]++,n.k===Ct.myId&&(Ve.kills++,Yr(150));let e=ue("killfeed"),t=document.createElement("div");for(t.innerHTML=`<b class="${n.kt}">${Rm(n.kn||"?")}</b> \u2620 <b class="${n.kt==="red"?"blue":"red"}">${Rm(n.vn||"?")}</b>`,e.prepend(t);e.children.length>4;)e.lastChild.remove();if(setTimeout(()=>t.remove(),6e3),rc(),!Ve.over&&(Ve.score.red>=Jl||Ve.score.blue>=Jl)){let i=Ve.score.red>=Jl?"red":"blue";Ve.over=8,ue("tdm-win").textContent=(i===Ve.team?"\u{1F3C6} ":"")+i.toUpperCase()+" TEAM WINS!",ue("tdm-win").className=i,i===Ve.team&&(Yr(2500),Wt("+$2,500 for the win!",2500))}}var Rm=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Cm(n,e,t,i){xn!=="tdm"||!Ve.team||(Ct.send("hit",{t:n.id,d:e,tm:Ve.team,n:Ne.name}),qr.hit(n.x,1.25,n.z,t,i,1))}function Pm(){if(xn!=="tdm")return;Ve.deaths++;let n=Ve.lastAttacker,e={k:n?n.id:null,kn:n?n.name:"the street",kt:n?n.team:null,v:Ct.myId,vn:Ne.name};n&&(Ct.send("kill",e),Zm(e)),rc()}function Im(){return xn==="tdm"?Ym(Ve.team||"red"):{x:Mt.spawn.x,z:Mt.spawn.z,heading:Mt.spawn.heading||0}}function mE(){if(Fu.length=0,xn!=="tdm"||!Ve.team)return;let n=ot?ot.b.id:-1;Ct.each(e=>{if(e.team===Ve.team||e.dead||e.b!==n||!e.placed)return;let t={kind:"player",id:e.id,name:e.name,team:e.team,x:e.x,z:e.z};Fu.push({x:e.x,z:e.z,r:e.mode==="car"?1.5:.5,ref:t})})}function Ju(){let n=ue("hp-fill");n&&(n.style.width=Math.max(0,cs)+"%",n.style.background=cs>50?"#4ade80":cs>25?"#fbbf24":"#ef4444")}function Iu(n){ui||Gt!=="freeroam"||(cs-=ft?n:n*.5,Yl=.35,Ju(),ze&&ze.beep(160,.05),cs<=0&&gE())}function gE(){if(ui=!0,Lu=0,cs=0,Ju(),pn(null,null,""),ue("wasted").classList.remove("hidden"),ft&&et&&(et.rotation.x=-Math.PI/2+.05,et.position.y=.12),qr){let n=ft?Re.pos.x:de.pos.x,e=ft?Re.pos.z:de.pos.z;qr.pool(n,e,2.6)}typeof Pm=="function"&&Pm()}function xE(){ui=!1,cs=100,Ju(),ue("wasted").classList.add("hidden"),et&&(et.rotation.x=0,et.position.y=0);let n=xn==="tdm"?0:Math.min(500,Math.round(Ne.cash*.05));if(n>0&&(Ne.cash-=n,fn(Ne),Ni()),Xo(),typeof Im=="function"){let e=Im();de.pos.x=e.x,de.pos.z=e.z,de.heading=e.heading,de.vel.x=de.vel.z=0,ic(),Wo(0)}else Vu();if(xn==="tdm"){Ve.lastAttacker=null,$u();return}Wt(n>0?"\u{1F3E5} Hospital bill: -$"+n:"\u{1F3E5} Back on your feet",2200)}function _E(n){let e=de.heading,t=de.pos.x,i=de.pos.z;mn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(Ut.speed),r=8.5+s*.045,o=3.6+s*.014;Pn.set(t-mn.x*r,o,i-mn.z*r);let a=1-Math.exp(-n*5.5);Bt.x+=(Pn.x-Bt.x)*a,Bt.y+=(Pn.y-Bt.y)*a,Bt.z+=(Pn.z-Bt.z)*a,Vt.position.copy(Bt),Vt.lookAt(t+mn.x*5,1.7,i+mn.z*5);let l=62+Math.min(14,s*.22)+(Ut.nitro?6:0);Math.abs(l-gi)>.25&&(gi+=(l-gi)*Math.min(1,n*4),Vt.fov=gi,Vt.updateProjectionMatrix())}function vE(n){return n<2?"N":n<20?"1":n<40?"2":n<65?"3":n<95?"4":n<125?"5":"6"}function yE(){let n=Math.abs(Ut.speed)*2.2;ue("speed-val").textContent=Math.round(n),ue("gear-hud").textContent=vE(n),ue("nitro-fill").style.width=(Math.max(0,Math.min(1,Ut.nitroFrac))*100).toFixed(1)+"%"}function us(){for(let n of["main-menu","pause-menu","garage"])ue(n).classList.add("hidden")}function ME(){return ls||Xr}function Xo(){ks&&Vm(),ot&&sc(),ft&&km(),pn(null,null,"")}function oc(){Gt="menu",gn=!1,zn=!1,Zn&&Zn.active&&Zn.exit(),Xo(),bt&&(bt.setMode("drive"),bt.detach()),us(),ue("main-menu").classList.remove("hidden"),ue("hud").classList.add("hidden"),ue("touch-controls").classList.add("hidden"),ue("drag-ui").classList.add("hidden"),Nt&&Nt.active&&Nt.stop(),ue("objective").classList.add("hidden"),ue("m-tutorial").classList.toggle("hidden",!!Ne.tutorialDone),Ct&&xn!=="online"&&(xn="online",Ct.connect(void 0)),Tn.save=Ne,ue("tdm-hud").classList.add("hidden"),ue("tdm-win").classList.add("hidden"),Ve.over=0,et&&si(et,Ne.outfit),mi=null,ze.engine(0,0),ze.skid(!1)}function Kl(){Zn&&Zn.active&&Zn.exit(),Xo(),ri&&(ri.intensity=Du),ue("drag-ui").classList.add("hidden"),Gt="freeroam",gn=!1,zn=!1,us(),ue("hud").classList.remove("hidden"),ue("touch-controls").classList.remove("hidden"),bt.attach(),bt.setMode("drive"),Vu(),Ni(),!Ne.tutorialDone&&!Ne.tutorialSkipped?RE():Wt("Free roam \u2014 drift for cash, walk into any building!")}function Lm(){Xo(),Gt="drag",gn=!1,zn=!1,ri&&(ri.intensity=0),us(),ue("hud").classList.add("hidden"),ue("touch-controls").classList.remove("hidden"),bt.attach(),bt.setMode("drag"),ue("drag-ui").classList.remove("hidden"),Zn.enter()}function Dm(){Gt!=="freeroam"&&Gt!=="drag"||zn||ks||ME()||(gn=!0,pn(null,null,""),us(),ue("pause-menu").classList.remove("hidden"))}function SE(){gn=!1,us()}function ec(n){Ql=n,zn=!0,Fm.refresh(),Ni(),us(),ue("garage").classList.remove("hidden")}function EE(){zn=!1,us(),ue("hud").classList.toggle("hidden",Gt!=="freeroam"),et&&Oi(),Ql==="menu"?oc():Ql==="pause"?(gn=!0,ue("pause-menu").classList.remove("hidden")):gn=!1,Ni()}var bE=!1;function Bu(n,e){ql=n,zn&&(zn=!1),Gt==="freeroam"&&(gn=!0),ls=!0,us(),ue("hud").classList.add("hidden"),ue("touch-controls").classList.add("hidden"),pn(null,null,""),bE=et.visible,tc.open(e||"car")}function wE(n){if(!ft)if(n==="driver"){let e=fu(de.pos.x,de.pos.z,de.heading);et.position.set(e.x,0,e.z),et.rotation.y=de.heading,Us(et,0,0,!1,0),et.visible=!0}else et.visible=!1}function TE(){if(ls=!1,tc.close(),et.visible=ft,Oi(),ql==="menu"){oc();return}if(ql==="garage"){ec(Ql);return}(Gt==="freeroam"||Gt==="drag")&&(ue("hud").classList.toggle("hidden",Gt!=="freeroam"),ue("touch-controls").classList.remove("hidden"),ql==="pause"?(gn=!0,ue("pause-menu").classList.remove("hidden")):gn=!1,ft?Zu():ic())}function AE(n){Fo+=n*.35;let e=tc.tab==="driver",t=e?et.position.x:de.pos.x,i=e?et.position.z:de.pos.z,s=e?3.4:7.2,r=e?1.7:2.6,o=e?1.05:.75;Vt.position.set(t+Math.sin(Fo)*s,r,i+Math.cos(Fo)*s);let a=Math.cos(Fo),l=-Math.sin(Fo),c=e?.9:2.2;Vt.lookAt(t+a*c,o,i+l*c),Math.abs(55-gi)>.25&&(gi=55,Vt.fov=55,Vt.updateProjectionMatrix()),Wr.x=t,Wr.z=i,Mt.update(n,Wr)}function RE(){Nt&&(Nt.start(),ue("objective").classList.remove("hidden"),$m(),Wt("\u{1F393} TUTORIAL \u2014 finish it for $"+Il.toLocaleString()+" + a free car!",3200))}function $m(){if(!Nt.active){ue("objective").classList.add("hidden");return}ue("obj-step").textContent="STEP "+(Nt.step+1)+"/"+Nt.total,ue("obj-text").textContent=Nt.text;let n=Nt.target(),e=ft?Re.pos.x:de.pos.x,t=ft?Re.pos.z:de.pos.z,i=ft?Re.heading:de.heading,s=ue("obj-arrow"),r=ue("obj-dist");if(n&&!ot){let o=Math.atan2(-(n.x-e),-(n.z-t)),a=Math.atan2(Math.sin(o-i),Math.cos(o-i));s.style.transform="rotate("+(-a).toFixed(3)+"rad)",s.classList.remove("hidden"),r.textContent=Math.round(Math.hypot(n.x-e,n.z-t))+" m"}else s.classList.add("hidden"),r.textContent=Nt.text.startsWith("DRIFT")?Math.round(Nt.driftProgress*100)+"%":""}function Jm(){Ne.tutorialDone=!0,Yr(Il),fn(Ne),ue("objective").classList.add("hidden"),ze.beep(880,.1),setTimeout(()=>ze.beep(1175,.14),120),CE()}function CE(){Xr=!0,pn(null,null,"");let n={topSpeed:1,accel:1,handling:1,grip:1};for(let t of hi)for(let i in n)n[i]=Math.max(n[i],t.stats[i]);let e=(t,i,s)=>`<div class="stat-row"><span>${t}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(i/s*100))}%"></i></div></div>`;ue("pick-list").innerHTML=hi.map(t=>`<div class="car-card"><div class="cinfo"><b>${t.name}</b><small>${t.desc} \xB7 worth $${t.price.toLocaleString()}</small><div class="stat-bars">${e("SPD",t.stats.topSpeed,n.topSpeed)}${e("ACC",t.stats.accel,n.accel)}${e("HDL",t.stats.handling,n.handling)}${e("GRP",t.stats.grip,n.grip)}</div></div><button class="buy-btn" data-id="${t.id}">PICK FREE</button></div>`).join(""),ue("car-pick").classList.remove("hidden")}function Km(n){let e=hi.find(t=>t.id===n);e&&(Ne.owned.includes(n)||Ne.owned.push(n),Ne.upgrades[n]||(Ne.upgrades[n]={engine:0,turbo:0,tires:0,suspension:0,nitro:0}),typeof Ne.paint[n]!="number"&&(Ne.paint[n]=e.colors[0]),Ne.currentCar=n,fn(Ne),kr(),ue("car-pick").classList.add("hidden"),Xr=!1,Ni(),Wt("\u{1F3C6} "+e.name+" is yours! +$"+Il.toLocaleString()+" in the bank",3200),ze.beep(990,.1))}function Um(n,e){let t=ue("mp-status");t.classList.remove("hidden"),t.className="mp-status "+n,t.textContent=n==="on"?"\u25CF online \xB7 "+e+(e===1?" player":" players"):n==="connecting"?"\u25CF connecting\u2026":"\u25CF offline";let i=ue("online-hud");i.textContent=n==="on"?"\u{1F310} "+e+" online":"\u{1F310} \u2026",i.classList.toggle("dim",n!=="on")}function PE(){return Ft.name=Ne.name,Ft.car=Yn.id,mi||(mi=Dp(Ne,Yn.id),xn==="tdm"&&Ve.team&&(mi.o[0]=Wm[Ve.team])),Ft.team=xn==="tdm"?Ve.team:null,Ft.dead=ui,Ft.look=mi,Ft.b=ot?ot.b.id:-1,ft?(Ft.mode="foot",Ft.x=Re.pos.x,Ft.z=Re.pos.z,Ft.h=Re.heading,Ft.speed=Re.speed,Ft.px=de.pos.x,Ft.pz=de.pos.z,Ft.ph=de.heading,Ft.w=bn().equipped||null):(Ft.mode="car",Ft.x=de.pos.x,Ft.z=de.pos.z,Ft.h=de.heading,Ft.speed=Ut.speed,Ft.w=null),Ft}async function IE(){an=new go({antialias:!1,powerPreference:"high-performance"}),an.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),an.setSize(In.view.w,In.view.h),an.toneMapping=wo,an.toneMappingExposure=1,an.shadowMap.enabled=!0,an.shadowMap.type=ll,ue("game-container").appendChild(an.domElement),Et=new Sr,Vt=new rn(62,In.view.w/In.view.h,.1,3e3),Mt=dp(Et,Wp),hs=qp(Et,Mt);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(dm(),um)),t=new Mr(an);Et.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let n=wp();Et.add(n.mesh),Bm={uniforms:n.uniforms,sun:Mt.sun,hemi:Mt.hemi,scene:Et,renderer:an},Qm("day",!0);try{Fn=(await Promise.resolve().then(()=>(Sm(),Mm))).createPostFX(an,Et,Vt),Fn.setBloomStrength(_l.day.bloom)}catch(e){console.warn("postfx off",e),Fn=null}pi=new xl("auto"),pi.onChange(Nm),Nm(pi.level,ou(pi.level)),Hs=new Xn(Et,70,{color:14211288,opacity:.42}),Vo=new Xn(Et,40,{color:7829367,opacity:.3,size:.9}),jl=new vl(Et,500),ri=new sl(13624575,0,60,.5,.45,1.2),Zl=new kt,Et.add(Zl),ri.target=Zl,Et.add(ri)}function Nm(n,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);an.setPixelRatio(t),Fn&&(Fn.setPixelRatio(Math.min(t,1)),Fn.setSize(In.view.w,In.view.h),Fn.setBloomEnabled(e.bloom));let i=e.shadows;(an.shadowMap.enabled!==i||Mt&&Mt.sun.castShadow!==i)&&(an.shadowMap.enabled=i,Mt&&(Mt.sun.castShadow=i),Et.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),Mt&&Mt.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),Uu=e.particles,jl&&jl.setVisible(e.particles>.3)}function Qm(n,e){let t=au;typeof n=="string"&&(Gr=t.indexOf(n)),Gr<0&&(Gr=0);let i=t[Gr],s=Tp(Bm,i),r=i==="day"?0:i==="sunset"?.45:1;Mt&&Mt.setGlow(r),Fn&&Fn.setBloomStrength(s.bloom),Du=i==="day"?0:i==="sunset"?60:160,ri&&Gt!=="drag"&&(ri.intensity=Du);let o=ue("tod-btn");o&&(o.textContent=i==="day"?"\u2600\uFE0F":i==="sunset"?"\u{1F307}":"\u{1F319}"),e||Wt(s.label+" mode")}function LE(){Gr=(Gr+1)%au.length,Qm()}var Om=performance.now();function jm(n){requestAnimationFrame(jm);let e=(n-Om)/1e3;Om=n,e>0||(e=.016),e>.1&&(e=.1),zu++;let t=Gt==="freeroam"&&!gn&&!zn&&!ks&&!ls&&!Xr&&!ui;if(ls)AE(e);else if(t&&ft)hE(e),Mt.update(e,Re.pos),hs.update(e),Hu.update(e,ot&&ot.room),Hs.update(e),Vo.update(e),pi&&pi.update(e),ze.engine(0,0),ze.skid(!1),Gl.x=de.pos.x,Gl.z=de.pos.z,ot?$l.draw(ot.back.x,ot.back.z,Re.heading,Gl,Ct):$l.draw(Re.pos.x,Re.pos.z,Re.heading,Gl,Ct),Tm(),bt.consumeAction()&&Am();else if(t){Ut=de.update(bt.input,e,lE);let i=Ap(nc,Ut.drifting,Ut.speed,e);i>0&&(Yr(i),Wt("DRIFT +$"+i.toLocaleString())),Wr.x=de.pos.x,Wr.z=de.pos.z,Mt.update(e,Wr),Wo(e),_E(e),yE(),aE(e),hs.update(e),Vr.update(e,Tn,!1,!1),$l.draw(de.pos.x,de.pos.z,de.heading,null,Ct),Tm(),bt.consumeAction()&&Am(),pi&&pi.update(e);let s=Math.min(1,Math.abs(Ut.speed)/(Go.topSpeed*1.15));ze.engine(s,Math.abs(bt.input.throttle||0)),ze.skid(Ut.drifting)}else Gt==="drag"&&!gn&&!zn&&!ls?Zn.active&&Zn.update(e):(ze.engine(0,0),ze.skid(!1));if(Gt==="freeroam"&&!gn&&!zn&&!ls&&(os.x=ft?Re.pos.x:de.pos.x,os.z=ft?Re.pos.z:de.pos.z,os.alive=!ui,os.hidden=!!ot,os.inCar=!ft,!ks&&!Xr&&(fi.update(e,os),Ui.update(e,os,ft?null:os),Ui.hitList(),!ft&&!ui&&fi.carHits(de.pos.x,de.pos.z,de.heading,Ut.speed)&&(ze.beep(70,.12),de.vel.x*=.85,de.vel.z*=.85)),qr.update(e),Yl>0&&(Yl-=e,ue("hurt").style.opacity=String(Math.max(0,Yl/.35)*.75)),ui&&(Lu+=e,Lu>3.2&&xE())),t&&Nt&&Nt.active){let i=Nt.update(e,{pos:ft?Re.pos:de.pos,drifting:!ft&&Ut.drifting,speed:ft?0:Ut.speed,onFoot:ft,inside:ot?ot.b.id:-1});i==="next"?(ze.beep(880,.08),Wt("\u2705 Nice! Next: "+Nt.text,2200)):i==="done"&&Jm(),zu%3===0&&$m()}mE(),Ve.over>0&&(Ve.over-=e,ue("tdm-win").classList.remove("hidden"),Ve.over<=0&&(ue("tdm-win").classList.add("hidden"),Ve.score.red=Ve.score.blue=0,rc(),xn==="tdm"&&!ui&&$u())),Ct&&Ct.update(e,Gt==="freeroam"?PE():null,n),Hs&&(Gt!=="freeroam"||gn||zn||ks)&&(Hs.update(e),Vo.update(e)),Fn?Fn.render():an.render(Et,Vt)}function DE(){ue("m-freeroam").onclick=()=>{ze.unlock(),In.goLandscape(),ze.beep(600,.06),Pu("single")},ue("m-online").onclick=()=>{ze.unlock(),In.goLandscape(),ze.beep(600,.06),Pu("online")},ue("m-tdm").onclick=()=>{ze.unlock(),In.goLandscape(),ze.beep(600,.06),Pu("tdm")},ue("m-drag").onclick=()=>{ze.unlock(),In.goLandscape(),ze.beep(600,.06),Lm()},ue("store-close").onclick=()=>{ze.beep(500,.05),Vm()},ue("m-garage").onclick=()=>{ze.unlock(),ec("menu")},ue("p-resume").onclick=()=>{ze.beep(600,.05),In.goLandscape(),SE()},ue("p-freeroam").onclick=()=>{ze.beep(600,.05),Kl()},ue("p-drag").onclick=()=>{ze.beep(600,.05),Lm()},ue("p-garage").onclick=()=>ec("pause"),ue("p-quit").onclick=()=>oc(),ue("menu-btn").onclick=Dm,ue("garage-close").onclick=EE,ue("drag-exit").onclick=()=>{Zn.active&&Zn.exit(),Kl()},ue("m-editor").onclick=()=>{ze.unlock(),ze.beep(600,.05),Bu("menu","car")},ue("p-editor").onclick=()=>{ze.beep(600,.05),Bu("pause",ft?"driver":"car")},ue("se-done").onclick=()=>{ze.beep(500,.05),TE()},ue("m-tutorial").onclick=()=>{ze.unlock(),In.goLandscape(),ze.beep(600,.06),Ne.tutorialSkipped=!1,fn(Ne),Kl()},ue("obj-skip").onclick=()=>{Nt.stop(),Ne.tutorialSkipped=!0,fn(Ne),ue("objective").classList.add("hidden"),Wt("Tutorial skipped \u2014 replay it from the main menu for $100K",2600)},ue("pick-list").addEventListener("click",n=>{let e=n.target.closest("button[data-id]");e&&Km(e.dataset.id)}),ue("tod-btn")&&(ue("tod-btn").onclick=()=>{ze.beep(600,.05),LE()}),ue("gfx-btn")&&(ue("gfx-btn").onclick=()=>{ze.beep(600,.05);let n=pi.cycleMode();ue("gfx-btn").textContent=n==="auto"?"\u2728":n==="high"?"\u2728+":"\u2728\u2212",Wt("Graphics: "+n.toUpperCase()+" ("+bp[pi.level]+")")}),window.addEventListener("pointerdown",()=>ze.unlock()),window.addEventListener("keydown",()=>ze.unlock()),document.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("gesturestart",n=>n.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(Gt==="freeroam"||Gt==="drag")&&!gn&&Dm()})}function UE(n,e){an&&(Vt.aspect=n/e,Vt.updateProjectionMatrix(),an.setSize(n,e),Fn&&Fn.setSize(n,e))}async function NE(){try{Ne=Lp(Op(Sp())),ze=_p(),In=Cp(UE),await IE(),bt=fp({isRotated:()=>In.rotated}),Re=new Al,et=Pr(Ne.outfit),et.visible=!1,Et.add(et),Vr=Zp(Et),Object.assign(Tn,{save:Ne,colliders:Mt.colliders,targets:hs.targets,audio:ze,toast:Wt,onTargetHit:()=>{Yr(uu),Wt("TARGET +$"+uu,900)},onShot:n=>{Ct&&Ct.sendShots(n)}}),Hu=tm(Et),qr=om(Et),fi=lm({scene:Et,blood:qr,audio:ze,count:14,collide:(n,e,t)=>Wu(n,e,t),shoot:(n,e,t,i)=>Vr.remoteShot(n,e,t,i),onPlayerHit:n=>Iu(n)}),Ui=hm({scene:Et,lines:Mt.roadLines,buildCar:Wl,applyCarSkin:Xl,CAR_DEFS:hi}),Em=Ui.hitList(),Tn.hitables=[fi.hitList,Em,Fu],Tn.onPersonHit=(n,e,t,i)=>{n.kind==="ped"||n.kind==="enemy"?fi.damage(n,e,t,i):typeof Cm=="function"&&n.kind==="player"&&Cm(n,e,t,i)},Nt=nm(Et,Mt),Gu=$p({save:Ne,persist:()=>fn(Ne),toast:n=>Wt(n,1600),beep:(n,e)=>ze.beep(n,e),onChange:()=>{Ni(),Oi()}}),$l=Kp(ue("minimap"),hs.stores),Oi(),qu(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(n,e,t)=>{ft?Re.reset(n,e,t||0):(de.pos.x=n,de.pos.z=e,de.heading=t||0)},save:()=>Ne,stores:()=>hs.stores,buildings:()=>Mt.buildings,inside:()=>ot&&{id:ot.b.id,style:ot.room.style},enter:n=>Gm(n),exit:()=>sc(),getOut:()=>Yu(),tut:()=>Nt&&{active:Nt.active,step:Nt.step},finishTut:()=>Jm(),pick:n=>Km(n),mp:()=>Ct&&{status:Ct.status,count:Ct.count},state:()=>({state:Gt,onFoot:ft,editorOpen:ls,pickOpen:Xr,cash:Ne.cash}),shot:(n,e,t,i)=>Vr.remoteShot(n,e,t,i),people:()=>fi,traffic:()=>Ui,hp:()=>cs,hurt:n=>Iu(n),cam:()=>({c:Vt.position.toArray().map(n=>+n.toFixed(2)),p:et.position.toArray().map(n=>+n.toFixed(2)),pv:et.visible,f:[Re.pos.x,Re.pos.z,Re.heading]})}),Hm(),de=new pl(Go),Vu(),Fm=Ep({save:Ne,getDef:n=>hi.find(e=>e.id===n),onSelectCar:()=>kr(),onPaint:()=>kr(),onWheels:()=>kr(),refreshScene:()=>kr(),openEditor:()=>Bu("garage","car")}),tc=Qp({save:Ne,cars:hi,persist:()=>fn(Ne),beep:(n,e)=>ze.beep(n,e),onCar:n=>{n?kr():Xl(wn,Ne.paint[Yn.id],Ls(Ne,Yn.id)),mi=null},onOutfit:()=>{si(et,Ne.outfit),mi=null},onName:()=>{mi=null},onTab:n=>wE(n)}),Ct=rm({scene:Et,CAR_DEFS:hi,buildCar:Wl,applyCarSkin:Xl,buildCharacter:Pr,setOutfit:si,setHeldWeapon:Do,animateCharacter:Us,unpackLook:Up,remoteShot:(n,e,t,i)=>Vr.remoteShot(n,e,t,i),localBuilding:()=>ot?ot.b.id:-1,onHit:n=>{xn!=="tdm"||!Ve.team||n.tm===Ve.team||ui||(Ve.lastAttacker={id:n.id,name:n.n,team:n.tm},Iu(+n.d||10))},onKill:n=>{xn==="tdm"&&Zm(n)},onStatus:(n,e)=>Um(n==="on"?"on":n==="connecting"?"connecting":"off",e),onCount:n=>{Ct&&Ct.status==="on"&&Um("on",n)}}),Ct.connect(),Zn=xp({scene:Et,camera:Vt,buildCar:Wl,CAR_DEFS:hi,effectiveStats:zm,getPlayer:()=>(Vl.def=Yn,Vl.stats=Go,Vl.group=wn,Vl),controls:bt,audio:ze,addCash:Yr,toast:Wt,city:Mt}),DE(),Ni(),ue("loading").classList.add("hidden"),oc(),requestAnimationFrame(jm)}catch(n){console.error(n),ue("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(n&&n.message||n)+"</p>"}}NE();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
