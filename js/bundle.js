(()=>{var jg=Object.defineProperty;var Jn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var hh=(n,e)=>{for(var t in e)jg(n,t,{get:e[t],enumerable:!0})};function Ji(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function fn(n,e,t){return Math.max(e,Math.min(t,n))}function Zx(n,e){return(n%e+e)%e}function vh(n,e,t){return(1-t)*n+t*e}function jf(n){return(n&n-1)===0&&n!==0}function nu(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function $i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ct(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function fm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Yx(){let n=Sl("canvas");return n.style.display="block",n}function Bo(n){n in Qf||(Qf[n]=!0,console.warn(n))}function Xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Sh(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ws.fromArray(n,r);let a=s.x*Math.abs(Ws.x)+s.y*Math.abs(Ws.y)+s.z*Math.abs(Ws.z),l=e.dot(Ws),c=t.dot(Ws),h=i.dot(Ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Dh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function ly(n,e,t,i,s,r,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ys,a),l===null)return null;el.copy(a),el.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(el);return c<t.near||c>t.far?null:{distance:c,point:el.clone(),object:n}}function tl(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ir),n.getVertexPosition(l,Lr),n.getVertexPosition(c,Dr);let h=ly(n,e,t,i,Ir,Lr,Dr,Qa);if(h){s&&(Ka.fromBufferAttribute(s,a),Ja.fromBufferAttribute(s,l),ja.fromBufferAttribute(s,c),h.uv=Ks.getInterpolation(Qa,Ir,Lr,Dr,Ka,Ja,ja,new de)),r&&(Ka.fromBufferAttribute(r,a),Ja.fromBufferAttribute(r,l),ja.fromBufferAttribute(r,c),h.uv1=Ks.getInterpolation(Qa,Ir,Lr,Dr,Ka,Ja,ja,new de),h.uv2=h.uv1),o&&(dp.fromBufferAttribute(o,a),fp.fromBufferAttribute(o,l),pp.fromBufferAttribute(o,c),h.normal=Ks.getInterpolation(Qa,Ir,Lr,Dr,dp,fp,pp,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new k,materialIndex:0};Ks.getNormal(Ir,Lr,Dr,u.normal),h.face=u}return h}function Kr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Hn(n){let e={};for(let t=0;t<n.length;t++){let i=Kr(n[t]);for(let s in i)e[s]=i[s]}return e}function cy(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function mm(n){return n.getRenderTarget()===null?n.outputColorSpace:St.workingColorSpace}function gm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function py(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,p=c.usage,m=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,p),c.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let p=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),m.count===-1&&g.length===0&&n.bufferSubData(u,0,p),g.length!==0){for(let x=0,d=g.length;x<d;x++){let f=g[x];t?n.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):n.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}function Y_(n,e,t,i,s,r,o){let a=new Oe(0),l=r===!0?0:1,c,h,u=null,p=0,m=null;function g(d,f){let v=!1,y=f.isScene===!0?f.background:null;y&&y.isTexture&&(y=(f.backgroundBlurriness>0?t:e).get(y)),y===null?x(a,l):y&&y.isColor&&(x(y,1),v=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ql)?(h===void 0&&(h=new X(new fe(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Kr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,_,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=St.getTransfer(y.colorSpace)!==Rt,(u!==y||p!==y.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,p=y.version,m=n.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new X(new Ge(2,2),new on({name:"BackgroundMaterial",uniforms:Kr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=St.getTransfer(y.colorSpace)!==Rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||p!==y.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,p=y.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function x(d,f){d.getRGB(il,mm(n)),i.buffers.color.setClear(il.r,il.g,il.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(d,f=1){a.set(d),l=f,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,x(a,l)},render:g}}function $_(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null),c=l,h=!1;function u(L,w,P,R,F){let B=!1;if(o){let I=x(R,P,w);c!==I&&(c=I,m(c.object)),B=f(L,R,P,F),B&&v(L,R,P,F)}else{let I=w.wireframe===!0;(c.geometry!==R.id||c.program!==P.id||c.wireframe!==I)&&(c.geometry=R.id,c.program=P.id,c.wireframe=I,B=!0)}F!==null&&t.update(F,n.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,S(L,w,P,R),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function x(L,w,P){let R=P.wireframe===!0,F=a[L.id];F===void 0&&(F={},a[L.id]=F);let B=F[w.id];B===void 0&&(B={},F[w.id]=B);let I=B[R];return I===void 0&&(I=d(p()),B[R]=I),I}function d(L){let w=[],P=[],R=[];for(let F=0;F<s;F++)w[F]=0,P[F]=0,R[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:P,attributeDivisors:R,object:L,attributes:{},index:null}}function f(L,w,P,R){let F=c.attributes,B=w.attributes,I=0,z=P.getAttributes();for(let Z in z)if(z[Z].location>=0){let q=F[Z],ee=B[Z];if(ee===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),q===void 0||q.attribute!==ee||ee&&q.data!==ee.data)return!0;I++}return c.attributesNum!==I||c.index!==R}function v(L,w,P,R){let F={},B=w.attributes,I=0,z=P.getAttributes();for(let Z in z)if(z[Z].location>=0){let q=B[Z];q===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));let ee={};ee.attribute=q,q&&q.data&&(ee.data=q.data),F[Z]=ee,I++}c.attributes=F,c.attributesNum=I,c.index=R}function y(){let L=c.newAttributes;for(let w=0,P=L.length;w<P;w++)L[w]=0}function T(L){C(L,0)}function C(L,w){let P=c.newAttributes,R=c.enabledAttributes,F=c.attributeDivisors;P[L]=1,R[L]===0&&(n.enableVertexAttribArray(L),R[L]=1),F[L]!==w&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,w),F[L]=w)}function _(){let L=c.newAttributes,w=c.enabledAttributes;for(let P=0,R=w.length;P<R;P++)w[P]!==L[P]&&(n.disableVertexAttribArray(P),w[P]=0)}function M(L,w,P,R,F,B,I){I===!0?n.vertexAttribIPointer(L,w,P,F,B):n.vertexAttribPointer(L,w,P,R,F,B)}function S(L,w,P,R){if(i.isWebGL2===!1&&(L.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();let F=R.attributes,B=P.getAttributes(),I=w.defaultAttributeValues;for(let z in B){let Z=B[z];if(Z.location>=0){let U=F[z];if(U===void 0&&(z==="instanceMatrix"&&L.instanceMatrix&&(U=L.instanceMatrix),z==="instanceColor"&&L.instanceColor&&(U=L.instanceColor)),U!==void 0){let q=U.normalized,ee=U.itemSize,ue=t.get(U);if(ue===void 0)continue;let me=ue.buffer,we=ue.type,Ce=ue.bytesPerElement,Ee=i.isWebGL2===!0&&(we===n.INT||we===n.UNSIGNED_INT||U.gpuType===im);if(U.isInterleavedBufferAttribute){let Ne=U.data,G=Ne.stride,_e=U.offset;if(Ne.isInstancedInterleavedBuffer){for(let re=0;re<Z.locationSize;re++)C(Z.location+re,Ne.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let re=0;re<Z.locationSize;re++)T(Z.location+re);n.bindBuffer(n.ARRAY_BUFFER,me);for(let re=0;re<Z.locationSize;re++)M(Z.location+re,ee/Z.locationSize,we,q,G*Ce,(_e+ee/Z.locationSize*re)*Ce,Ee)}else{if(U.isInstancedBufferAttribute){for(let Ne=0;Ne<Z.locationSize;Ne++)C(Z.location+Ne,U.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Ne=0;Ne<Z.locationSize;Ne++)T(Z.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Ne=0;Ne<Z.locationSize;Ne++)M(Z.location+Ne,ee/Z.locationSize,we,q,ee*Ce,ee/Z.locationSize*Ne*Ce,Ee)}}else if(I!==void 0){let q=I[z];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(Z.location,q);break;case 3:n.vertexAttrib3fv(Z.location,q);break;case 4:n.vertexAttrib4fv(Z.location,q);break;default:n.vertexAttrib1fv(Z.location,q)}}}}_()}function b(){V();for(let L in a){let w=a[L];for(let P in w){let R=w[P];for(let F in R)g(R[F].object),delete R[F];delete w[P]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let w=a[L.id];for(let P in w){let R=w[P];for(let F in R)g(R[F].object),delete R[F];delete w[P]}delete a[L.id]}function H(L){for(let w in a){let P=a[w];if(P[L.id]===void 0)continue;let R=P[L.id];for(let F in R)g(R[F].object),delete R[F];delete P[L.id]}}function V(){A(),h=!0,c!==l&&(c=l,m(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:V,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:y,enableAttribute:T,disableUnusedAttributes:_}}function K_(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,p){if(p===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,p),t.update(u,r,p)}function c(h,u,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let g=0;for(let x=0;x<p;x++)g+=u[x];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function J_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,T=o||e.has("OES_texture_float"),C=y&&T,_=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:_}}function j_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new Yi,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let m=u.length!==0||p||i!==0||s;return s=p,i=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,m){let g=u.clippingPlanes,x=u.clipIntersection,d=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):c();else{let v=r?0:i,y=v*4,T=f.clippingState||null;l.value=T,T=h(g,p,y,m);for(let C=0;C!==y;++C)T[C]=t[C];f.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,p,m,g){let x=u!==null?u.length:0,d=null;if(x!==0){if(d=l.value,g!==!0||d===null){let f=m+x*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(d===null||d.length<f)&&(d=new Float32Array(f));for(let y=0,T=m;y!==x;++y,T+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(d,T),d[T+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,d}}function Q_(n){let e=new WeakMap;function t(o,a){return a===Jh?o.mapping=Zr:a===jh&&(o.mapping=Yr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jh||a===jh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ou(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function eM(n){let e=[],t=[],i=[],s=n,r=n-Gr+1+mp.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Gr?l=mp[o-n+Gr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,d=2,f=1,v=new Float32Array(x*g*m),y=new Float32Array(d*g*m),T=new Float32Array(f*g*m);for(let _=0;_<m;_++){let M=_%3*2/3-1,S=_>2?0:-1,b=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];v.set(b,x*g*_),y.set(p,d*g*_);let E=[_,_,_,_,_,_];T.set(E,f*g*_)}let C=new Ut;C.setAttribute("position",new mn(v,x)),C.setAttribute("uv",new mn(y,d)),C.setAttribute("faceIndex",new mn(T,f)),e.push(C),s>Gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function yp(n,e,t){let i=new Fn(n,e,t);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tM(n,e,t){let i=new Float32Array($s),s=new k(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function vp(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function _p(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function nM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Jh||l===jh,h=l===Zr||l===Yr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new jr(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new jr(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function iM(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sM(n,e,t,i){let s={},r=new WeakMap;function o(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let x=p.morphAttributes[g];for(let d=0,f=x.length;d<f;d++)e.remove(x[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let g in p)e.update(p[g],n.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let d=0,f=x.length;d<f;d++)e.update(x[d],n.ARRAY_BUFFER)}}function c(u){let p=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let v=m.array;x=m.version;for(let y=0,T=v.length;y<T;y+=3){let C=v[y+0],_=v[y+1],M=v[y+2];p.push(C,_,_,M,M,C)}}else if(g!==void 0){let v=g.array;x=g.version;for(let y=0,T=v.length/3-1;y<T;y+=3){let C=y+0,_=y+1,M=y+2;p.push(C,_,_,M,M,C)}}else return;let d=new(fm(p)?Il:Pl)(p,1);d.version=x;let f=r.get(u);f&&e.remove(f),r.set(u,d)}function h(u){let p=r.get(u);if(p){let m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rM(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,x){if(x===0)return;let d,f;if(s)d=n,f="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,g,a,m*l,x),t.update(g,r,x)}function p(m,g,x){if(x===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<x;f++)this.render(m[f]/l,g[f]);else{d.multiDrawElementsWEBGL(r,g,0,a,m,0,x);let f=0;for(let v=0;v<x;v++)f+=g[v];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function oM(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function aM(n,e){return n[0]-e[0]}function lM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function cM(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let L=function(){V.dispose(),r.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],_=h.morphAttributes.normal||[],M=h.morphAttributes.color||[],S=0;v===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let b=h.attributes.position.count*S,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let H=new Float32Array(b*E*4*g),V=new Al(H,b,E,g);V.type=ps,V.needsUpdate=!0;let A=S*4;for(let w=0;w<g;w++){let P=C[w],R=_[w],F=M[w],B=b*E*4*w;for(let I=0;I<P.count;I++){let z=I*A;v===!0&&(o.fromBufferAttribute(P,I),H[B+z+0]=o.x,H[B+z+1]=o.y,H[B+z+2]=o.z,H[B+z+3]=0),y===!0&&(o.fromBufferAttribute(R,I),H[B+z+4]=o.x,H[B+z+5]=o.y,H[B+z+6]=o.z,H[B+z+7]=0),T===!0&&(o.fromBufferAttribute(F,I),H[B+z+8]=o.x,H[B+z+9]=o.y,H[B+z+10]=o.z,H[B+z+11]=F.itemSize===4?o.w:1)}}x={count:g,texture:V,size:new de(b,E)},r.set(h,x),h.addEventListener("dispose",L)}let d=0;for(let v=0;v<p.length;v++)d+=p[v];let f=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",f),u.getUniforms().setValue(n,"morphTargetInfluences",p),u.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{let m=p===void 0?0:p.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];i[h.id]=g}for(let y=0;y<m;y++){let T=g[y];T[0]=y,T[1]=p[y]}g.sort(lM);for(let y=0;y<8;y++)y<m&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(aM);let x=h.morphAttributes.position,d=h.morphAttributes.normal,f=0;for(let y=0;y<8;y++){let T=a[y],C=T[0],_=T[1];C!==Number.MAX_SAFE_INTEGER&&_?(x&&h.getAttribute("morphTarget"+y)!==x[C]&&h.setAttribute("morphTarget"+y,x[C]),d&&h.getAttribute("morphNormal"+y)!==d[C]&&h.setAttribute("morphNormal"+y,d[C]),s[y]=_,f+=_):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),d&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let v=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(n,"morphTargetBaseInfluence",v),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function hM(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function so(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Mp[s];if(r===void 0&&(r=new Float32Array(s),Mp[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tc(n,e){let t=Ep[e];t===void 0&&(t=new Int32Array(e),Ep[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function fM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function pM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function mM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;wp.set(i),n.uniformMatrix2fv(this.addr,!1,wp),ln(t,i)}}function gM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;Sp.set(i),n.uniformMatrix3fv(this.addr,!1,Sp),ln(t,i)}}function xM(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,i))return;bp.set(i),n.uniformMatrix4fv(this.addr,!1,bp),ln(t,i)}}function yM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function _M(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function MM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function EM(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function bM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function SM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function wM(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function TM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?ym:xm;t.setTexture2D(e||r,s)}function AM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_m,s)}function RM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mm,s)}function CM(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||vm,s)}function PM(n){switch(n){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return xM;case 5124:case 35670:return yM;case 35667:case 35671:return vM;case 35668:case 35672:return _M;case 35669:case 35673:return MM;case 5125:return EM;case 36294:return bM;case 36295:return SM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return CM}}function IM(n,e){n.uniform1fv(this.addr,e)}function LM(n,e){let t=so(e,this.size,2);n.uniform2fv(this.addr,t)}function DM(n,e){let t=so(e,this.size,3);n.uniform3fv(this.addr,t)}function UM(n,e){let t=so(e,this.size,4);n.uniform4fv(this.addr,t)}function NM(n,e){let t=so(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HM(n,e){let t=so(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OM(n,e){let t=so(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zM(n,e){n.uniform1iv(this.addr,e)}function FM(n,e){n.uniform2iv(this.addr,e)}function BM(n,e){n.uniform3iv(this.addr,e)}function kM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function VM(n,e){n.uniform2uiv(this.addr,e)}function WM(n,e){n.uniform3uiv(this.addr,e)}function XM(n,e){n.uniform4uiv(this.addr,e)}function qM(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||xm,r[o])}function ZM(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_m,r[o])}function YM(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Mm,r[o])}function $M(n,e,t){let i=this.cache,s=e.length,r=tc(t,s);an(i,r)||(n.uniform1iv(this.addr,r),ln(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vm,r[o])}function KM(n){switch(n){case 5126:return IM;case 35664:return LM;case 35665:return DM;case 35666:return UM;case 35674:return NM;case 35675:return HM;case 35676:return OM;case 5124:case 35670:return zM;case 35667:case 35671:return FM;case 35668:case 35672:return BM;case 35669:case 35673:return kM;case 5125:return GM;case 36294:return VM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return ZM;case 35680:case 36300:case 36308:case 36293:return YM;case 36289:case 36303:case 36311:case 36292:return $M}}function Tp(n,e){n.seq.push(e),n.map[e.id]=e}function JM(n,e,t){let i=n.name,s=i.length;for(kh.lastIndex=0;;){let r=kh.exec(i),o=kh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tp(t,c===void 0?new au(a,n,e):new lu(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new cu(a),Tp(t,u)),t=u}}}function Ap(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function e1(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function t1(n){let e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(n),i;switch(e===t?i="":e===Ml&&t===_l?i="LinearDisplayP3ToLinearSRGB":e===_l&&t===Ml&&(i="LinearSRGBToLinearDisplayP3"),n){case ji:case ec:return[i,"LinearTransferOETF"];case vt:case Yu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+e1(n.getShaderSource(e),o)}else return s}function n1(n,e){let t=t1(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function i1(n,e){let t;switch(e){case Vu:t="Linear";break;case Wu:t="Reinhard";break;case Xu:t="OptimizedCineon";break;case ra:t="ACESFilmic";break;case qu:t="AgX";break;case Ax:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function s1(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vr).join(`
`)}function r1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vr).join(`
`)}function o1(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function a1(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vr(n){return n!==""}function Cp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function hu(n){return n.replace(l1,h1)}function h1(n,e){let t=nt[e];if(t===void 0){let i=c1.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hu(t)}function Ip(n){return n.replace(u1,d1)}function d1(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lp(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tx?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function p1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case Yr:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m1(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Yr&&(e="ENVMAP_MODE_REFRACTION"),e}function g1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tm:e="ENVMAP_BLENDING_MULTIPLY";break;case wx:e="ENVMAP_BLENDING_MIX";break;case Tx:e="ENVMAP_BLENDING_ADD";break}return e}function x1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function y1(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=f1(t),c=p1(t),h=m1(t),u=g1(t),p=x1(t),m=t.isWebGL2?"":s1(t),g=r1(t),x=o1(r),d=s.createProgram(),f,v,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vr).join(`
`),f.length>0&&(f+=`
`),v=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Vr).join(`
`),v.length>0&&(v+=`
`)):(f=[Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),v=[m,Lp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?nt.tonemapping_pars_fragment:"",t.toneMapping!==gs?i1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,n1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vr).join(`
`)),o=hu(o),o=Cp(o,t),o=Pp(o,t),a=hu(a),a=Cp(a,t),a=Pp(a,t),o=Ip(o),a=Ip(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let T=y+f+o,C=y+v+a,_=Ap(s,s.VERTEX_SHADER,T),M=Ap(s,s.FRAGMENT_SHADER,C);s.attachShader(d,_),s.attachShader(d,M),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function S(V){if(n.debug.checkShaderErrors){let A=s.getProgramInfoLog(d).trim(),L=s.getShaderInfoLog(_).trim(),w=s.getShaderInfoLog(M).trim(),P=!0,R=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(P=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,_,M);else{let F=Rp(s,_,"vertex"),B=Rp(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+A+`
`+F+`
`+B)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(L===""||w==="")&&(R=!1);R&&(V.diagnostics={runnable:P,programLog:A,vertexShader:{log:L,prefix:f},fragmentShader:{log:w,prefix:v}})}s.deleteShader(_),s.deleteShader(M),b=new qr(s,d),E=a1(s,d)}let b;this.getUniforms=function(){return b===void 0&&S(this),b};let E;this.getAttributes=function(){return E===void 0&&S(this),E};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(d,jM)),H},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QM++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=_,this.fragmentShader=M,this}function _1(n,e,t,i,s,r,o){let a=new Cl,l=new uu,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function d(b,E,H,V,A){let L=V.fog,w=A.geometry,P=b.isMeshStandardMaterial?V.environment:null,R=(b.isMeshStandardMaterial?t:e).get(b.envMap||P),F=R&&R.mapping===Ql?R.image.height:null,B=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));let I=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,z=I!==void 0?I.length:0,Z=0;w.morphAttributes.position!==void 0&&(Z=1),w.morphAttributes.normal!==void 0&&(Z=2),w.morphAttributes.color!==void 0&&(Z=3);let U,q,ee,ue;if(B){let At=Ti[B];U=At.vertexShader,q=At.fragmentShader}else U=b.vertexShader,q=b.fragmentShader,l.update(b),ee=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);let me=n.getRenderTarget(),we=A.isInstancedMesh===!0,Ce=A.isBatchedMesh===!0,Ee=!!b.map,Ne=!!b.matcap,G=!!R,_e=!!b.aoMap,re=!!b.lightMap,ce=!!b.bumpMap,ie=!!b.normalMap,ze=!!b.displacementMap,Le=!!b.emissiveMap,N=!!b.metalnessMap,D=!!b.roughnessMap,$=b.anisotropy>0,ve=b.clearcoat>0,ge=b.iridescence>0,pe=b.sheen>0,Fe=b.transmission>0,Ae=$&&!!b.anisotropyMap,Ue=ve&&!!b.clearcoatMap,Xe=ve&&!!b.clearcoatNormalMap,Je=ve&&!!b.clearcoatRoughnessMap,ye=ge&&!!b.iridescenceMap,pt=ge&&!!b.iridescenceThicknessMap,ot=pe&&!!b.sheenColorMap,Ye=pe&&!!b.sheenRoughnessMap,We=!!b.specularMap,K=!!b.specularColorMap,oe=!!b.specularIntensityMap,Me=Fe&&!!b.transmissionMap,Pe=Fe&&!!b.thicknessMap,Ie=!!b.gradientMap,se=!!b.alphaMap,W=b.alphaTest>0,te=!!b.alphaHash,he=!!b.extensions,be=!!w.attributes.uv1,xe=!!w.attributes.uv2,je=!!w.attributes.uv3,Qe=gs;return b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Qe=n.toneMapping),{isWebGL2:h,shaderID:B,shaderType:b.type,shaderName:b.name,vertexShader:U,fragmentShader:q,defines:b.defines,customVertexShaderID:ee,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ce,instancing:we,instancingColor:we&&A.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ji,map:Ee,matcap:Ne,envMap:G,envMapMode:G&&R.mapping,envMapCubeUVHeight:F,aoMap:_e,lightMap:re,bumpMap:ce,normalMap:ie,displacementMap:p&&ze,emissiveMap:Le,normalMapObjectSpace:ie&&b.normalMapType===Fx,normalMapTangentSpace:ie&&b.normalMapType===um,metalnessMap:N,roughnessMap:D,anisotropy:$,anisotropyMap:Ae,clearcoat:ve,clearcoatMap:Ue,clearcoatNormalMap:Xe,clearcoatRoughnessMap:Je,iridescence:ge,iridescenceMap:ye,iridescenceThicknessMap:pt,sheen:pe,sheenColorMap:ot,sheenRoughnessMap:Ye,specularMap:We,specularColorMap:K,specularIntensityMap:oe,transmission:Fe,transmissionMap:Me,thicknessMap:Pe,gradientMap:Ie,opaque:b.transparent===!1&&b.blending===ms,alphaMap:se,alphaTest:W,alphaHash:te,combine:b.combine,mapUv:Ee&&x(b.map.channel),aoMapUv:_e&&x(b.aoMap.channel),lightMapUv:re&&x(b.lightMap.channel),bumpMapUv:ce&&x(b.bumpMap.channel),normalMapUv:ie&&x(b.normalMap.channel),displacementMapUv:ze&&x(b.displacementMap.channel),emissiveMapUv:Le&&x(b.emissiveMap.channel),metalnessMapUv:N&&x(b.metalnessMap.channel),roughnessMapUv:D&&x(b.roughnessMap.channel),anisotropyMapUv:Ae&&x(b.anisotropyMap.channel),clearcoatMapUv:Ue&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&x(b.sheenRoughnessMap.channel),specularMapUv:We&&x(b.specularMap.channel),specularColorMapUv:K&&x(b.specularColorMap.channel),specularIntensityMapUv:oe&&x(b.specularIntensityMap.channel),transmissionMapUv:Me&&x(b.transmissionMap.channel),thicknessMapUv:Pe&&x(b.thicknessMap.channel),alphaMapUv:se&&x(b.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(ie||$),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,vertexUv1s:be,vertexUv2s:xe,vertexUv3s:je,pointsUvs:A.isPoints===!0&&!!w.attributes.uv&&(Ee||se),fog:!!L,useFog:b.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:A.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&St.getTransfer(b.map.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wt,flipSided:b.side===pn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:he&&b.extensions.derivatives===!0,extensionFragDepth:he&&b.extensions.fragDepth===!0,extensionDrawBuffers:he&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:he&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:he&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let H in b.defines)E.push(H),E.push(b.defines[H]);return b.isRawShaderMaterial===!1&&(v(E,b),y(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function v(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function T(b){let E=g[b.type],H;if(E){let V=Ti[E];H=Es.clone(V.uniforms)}else H=b.uniforms;return H}function C(b,E){let H;for(let V=0,A=c.length;V<A;V++){let L=c[V];if(L.cacheKey===E){H=L,++H.usedTimes;break}}return H===void 0&&(H=new y1(n,E,b,r),c.push(H)),H}function _(b){if(--b.usedTimes===0){let E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function M(b){l.remove(b)}function S(){l.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:T,acquireProgram:C,releaseProgram:_,releaseShaderCache:M,programs:c,dispose:S}}function M1(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function E1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Dp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Up(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,p,m,g,x,d){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:d},n[e]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=d),e++,f}function a(u,p,m,g,x,d){let f=o(u,p,m,g,x,d);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,p,m,g,x,d){let f=o(u,p,m,g,x,d);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,p){t.length>1&&t.sort(u||E1),i.length>1&&i.sort(p||Dp),s.length>1&&s.sort(p||Dp)}function h(){for(let u=e,p=n.length;u<p;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function b1(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Up,n.set(i,[o])):s>=r.length?(o=new Up,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function S1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Oe};break;case"SpotLight":t={position:new k,direction:new k,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function w1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function A1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function R1(n,e){let t=new S1,i=w1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new k);let r=new k,o=new gt,a=new gt;function l(h,u){let p=0,m=0,g=0;for(let V=0;V<9;V++)s.probe[V].set(0,0,0);let x=0,d=0,f=0,v=0,y=0,T=0,C=0,_=0,M=0,S=0,b=0;h.sort(A1);let E=u===!0?Math.PI:1;for(let V=0,A=h.length;V<A;V++){let L=h[V],w=L.color,P=L.intensity,R=L.distance,F=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=w.r*P*E,m+=w.g*P*E,g+=w.b*P*E;else if(L.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(L.sh.coefficients[B],P);b++}else if(L.isDirectionalLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let I=L.shadow,z=i.get(L);z.shadowBias=I.bias,z.shadowNormalBias=I.normalBias,z.shadowRadius=I.radius,z.shadowMapSize=I.mapSize,s.directionalShadow[x]=z,s.directionalShadowMap[x]=F,s.directionalShadowMatrix[x]=L.shadow.matrix,T++}s.directional[x]=B,x++}else if(L.isSpotLight){let B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(w).multiplyScalar(P*E),B.distance=R,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,s.spot[f]=B;let I=L.shadow;if(L.map&&(s.spotLightMap[M]=L.map,M++,I.updateMatrices(L),L.castShadow&&S++),s.spotLightMatrix[f]=I.matrix,L.castShadow){let z=i.get(L);z.shadowBias=I.bias,z.shadowNormalBias=I.normalBias,z.shadowRadius=I.radius,z.shadowMapSize=I.mapSize,s.spotShadow[f]=z,s.spotShadowMap[f]=F,_++}f++}else if(L.isRectAreaLight){let B=t.get(L);B.color.copy(w).multiplyScalar(P),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),s.rectArea[v]=B,v++}else if(L.isPointLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity*E),B.distance=L.distance,B.decay=L.decay,L.castShadow){let I=L.shadow,z=i.get(L);z.shadowBias=I.bias,z.shadowNormalBias=I.normalBias,z.shadowRadius=I.radius,z.shadowMapSize=I.mapSize,z.shadowCameraNear=I.camera.near,z.shadowCameraFar=I.camera.far,s.pointShadow[d]=z,s.pointShadowMap[d]=F,s.pointShadowMatrix[d]=L.shadow.matrix,C++}s.point[d]=B,d++}else if(L.isHemisphereLight){let B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(P*E),B.groundColor.copy(L.groundColor).multiplyScalar(P*E),s.hemi[y]=B,y++}}v>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_FLOAT_1,s.rectAreaLTC2=Re.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Re.LTC_HALF_1,s.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=g;let H=s.hash;(H.directionalLength!==x||H.pointLength!==d||H.spotLength!==f||H.rectAreaLength!==v||H.hemiLength!==y||H.numDirectionalShadows!==T||H.numPointShadows!==C||H.numSpotShadows!==_||H.numSpotMaps!==M||H.numLightProbes!==b)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=v,s.point.length=d,s.hemi.length=y,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=_,s.spotShadowMap.length=_,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=_+M-S,s.spotLightMap.length=M,s.numSpotLightShadowsWithMaps=S,s.numLightProbes=b,H.directionalLength=x,H.pointLength=d,H.spotLength=f,H.rectAreaLength=v,H.hemiLength=y,H.numDirectionalShadows=T,H.numPointShadows=C,H.numSpotShadows=_,H.numSpotMaps=M,H.numLightProbes=b,s.version=T1++)}function c(h,u){let p=0,m=0,g=0,x=0,d=0,f=u.matrixWorldInverse;for(let v=0,y=h.length;v<y;v++){let T=h[v];if(T.isDirectionalLight){let C=s.directional[p];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),p++}else if(T.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(T.isRectAreaLight){let C=s.rectArea[x];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(T.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(T.isPointLight){let C=s.point[m];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(f),m++}else if(T.isHemisphereLight){let C=s.hemi[d];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(f),d++}}}return{setup:l,setupView:c,state:s}}function Np(n,e){let t=new R1(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(u){i.push(u)}function a(u){s.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function C1(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Np(n,e),t.set(r,[l])):o>=a.length?(l=new Np(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function L1(n,e,t){let i=new Zo,s=new de,r=new de,o=new It,a=new fu({depthPacking:zx}),l=new pu,c={},h=t.maxTextureSize,u={[ys]:pn,[pn]:ys,[wt]:wt},p=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:P1,fragmentShader:I1}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ut;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new X(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let f=this.type;this.render=function(_,M,S){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;let b=n.getRenderTarget(),E=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ai),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let A=f!==Zi&&this.type===Zi,L=f===Zi&&this.type!==Zi;for(let w=0,P=_.length;w<P;w++){let R=_[w],F=R.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let B=F.getFrameExtents();if(s.multiply(B),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/B.x),s.x=r.x*B.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/B.y),s.y=r.y*B.y,F.mapSize.y=r.y)),F.map===null||A===!0||L===!0){let z=this.type!==Zi?{minFilter:On,magFilter:On}:{};F.map!==null&&F.map.dispose(),F.map=new Fn(s.x,s.y,z),F.map.texture.name=R.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let I=F.getViewportCount();for(let z=0;z<I;z++){let Z=F.getViewport(z);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),V.viewport(o),F.updateMatrices(R,z),i=F.getFrustum(),T(M,S,F.camera,R,this.type)}F.isPointLightShadow!==!0&&this.type===Zi&&v(F,S),F.needsUpdate=!1}f=this.type,d.needsUpdate=!1,n.setRenderTarget(b,E,H)};function v(_,M){let S=e.update(x);p.defines.VSM_SAMPLES!==_.blurSamples&&(p.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new Fn(s.x,s.y)),p.uniforms.shadow_pass.value=_.map.texture,p.uniforms.resolution.value=_.mapSize,p.uniforms.radius.value=_.radius,n.setRenderTarget(_.mapPass),n.clear(),n.renderBufferDirect(M,null,S,p,x,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,n.setRenderTarget(_.map),n.clear(),n.renderBufferDirect(M,null,S,m,x,null)}function y(_,M,S,b){let E=null,H=S.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(H!==void 0)E=H;else if(E=S.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){let V=E.uuid,A=M.uuid,L=c[V];L===void 0&&(L={},c[V]=L);let w=L[A];w===void 0&&(w=E.clone(),L[A]=w,M.addEventListener("dispose",C)),E=w}if(E.visible=M.visible,E.wireframe=M.wireframe,b===Zi?E.side=M.shadowSide!==null?M.shadowSide:M.side:E.side=M.shadowSide!==null?M.shadowSide:u[M.side],E.alphaMap=M.alphaMap,E.alphaTest=M.alphaTest,E.map=M.map,E.clipShadows=M.clipShadows,E.clippingPlanes=M.clippingPlanes,E.clipIntersection=M.clipIntersection,E.displacementMap=M.displacementMap,E.displacementScale=M.displacementScale,E.displacementBias=M.displacementBias,E.wireframeLinewidth=M.wireframeLinewidth,E.linewidth=M.linewidth,S.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let V=n.properties.get(E);V.light=S}return E}function T(_,M,S,b,E){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&E===Zi)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,_.matrixWorld);let A=e.update(_),L=_.material;if(Array.isArray(L)){let w=A.groups;for(let P=0,R=w.length;P<R;P++){let F=w[P],B=L[F.materialIndex];if(B&&B.visible){let I=y(_,B,b,E);_.onBeforeShadow(n,_,M,S,A,I,F),n.renderBufferDirect(S,null,A,I,_,F),_.onAfterShadow(n,_,M,S,A,I,F)}}}else if(L.visible){let w=y(_,L,b,E);_.onBeforeShadow(n,_,M,S,A,w,null),n.renderBufferDirect(S,null,A,w,_,null),_.onAfterShadow(n,_,M,S,A,w,null)}}let V=_.children;for(let A=0,L=V.length;A<L;A++)T(V[A],M,S,b,E)}function C(_){_.target.removeEventListener("dispose",C);for(let S in c){let b=c[S],E=_.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function D1(n,e,t){let i=t.isWebGL2;function s(){let W=!1,te=new It,he=null,be=new It(0,0,0,0);return{setMask:function(xe){he!==xe&&!W&&(n.colorMask(xe,xe,xe,xe),he=xe)},setLocked:function(xe){W=xe},setClear:function(xe,je,Qe,bt,At){At===!0&&(xe*=bt,je*=bt,Qe*=bt),te.set(xe,je,Qe,bt),be.equals(te)===!1&&(n.clearColor(xe,je,Qe,bt),be.copy(te))},reset:function(){W=!1,he=null,be.set(-1,0,0,0)}}}function r(){let W=!1,te=null,he=null,be=null;return{setTest:function(xe){xe?Ce(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(xe){te!==xe&&!W&&(n.depthMask(xe),te=xe)},setFunc:function(xe){if(he!==xe){switch(xe){case yx:n.depthFunc(n.NEVER);break;case vx:n.depthFunc(n.ALWAYS);break;case _x:n.depthFunc(n.LESS);break;case gl:n.depthFunc(n.LEQUAL);break;case Mx:n.depthFunc(n.EQUAL);break;case Ex:n.depthFunc(n.GEQUAL);break;case bx:n.depthFunc(n.GREATER);break;case Sx:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=xe}},setLocked:function(xe){W=xe},setClear:function(xe){be!==xe&&(n.clearDepth(xe),be=xe)},reset:function(){W=!1,te=null,he=null,be=null}}}function o(){let W=!1,te=null,he=null,be=null,xe=null,je=null,Qe=null,bt=null,At=null;return{setTest:function(ht){W||(ht?Ce(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(ht){te!==ht&&!W&&(n.stencilMask(ht),te=ht)},setFunc:function(ht,Qt,$n){(he!==ht||be!==Qt||xe!==$n)&&(n.stencilFunc(ht,Qt,$n),he=ht,be=Qt,xe=$n)},setOp:function(ht,Qt,$n){(je!==ht||Qe!==Qt||bt!==$n)&&(n.stencilOp(ht,Qt,$n),je=ht,Qe=Qt,bt=$n)},setLocked:function(ht){W=ht},setClear:function(ht){At!==ht&&(n.clearStencil(ht),At=ht)},reset:function(){W=!1,te=null,he=null,be=null,xe=null,je=null,Qe=null,bt=null,At=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,p={},m={},g=new WeakMap,x=[],d=null,f=!1,v=null,y=null,T=null,C=null,_=null,M=null,S=null,b=new Oe(0,0,0),E=0,H=!1,V=null,A=null,L=null,w=null,P=null,R=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,B=0,I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(I)[1]),F=B>=1):I.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),F=B>=2);let z=null,Z={},U=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ee=new It().fromArray(U),ue=new It().fromArray(q);function me(W,te,he,be){let xe=new Uint8Array(4),je=n.createTexture();n.bindTexture(W,je),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<he;Qe++)i&&(W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY)?n.texImage3D(te,0,n.RGBA,1,1,be,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(te+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return je}let we={};we[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),we[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(we[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),we[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(gl),Le(!1),N(gf),Ce(n.CULL_FACE),ie(Ai);function Ce(W){p[W]!==!0&&(n.enable(W),p[W]=!0)}function Ee(W){p[W]!==!1&&(n.disable(W),p[W]=!1)}function Ne(W,te){return m[W]!==te?(n.bindFramebuffer(W,te),m[W]=te,i&&(W===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=te),W===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=te)),!0):!1}function G(W,te){let he=x,be=!1;if(W)if(he=g.get(te),he===void 0&&(he=[],g.set(te,he)),W.isWebGLMultipleRenderTargets){let xe=W.texture;if(he.length!==xe.length||he[0]!==n.COLOR_ATTACHMENT0){for(let je=0,Qe=xe.length;je<Qe;je++)he[je]=n.COLOR_ATTACHMENT0+je;he.length=xe.length,be=!0}}else he[0]!==n.COLOR_ATTACHMENT0&&(he[0]=n.COLOR_ATTACHMENT0,be=!0);else he[0]!==n.BACK&&(he[0]=n.BACK,be=!0);be&&(t.isWebGL2?n.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function _e(W){return d!==W?(n.useProgram(W),d=W,!0):!1}let re={[Ys]:n.FUNC_ADD,[ix]:n.FUNC_SUBTRACT,[sx]:n.FUNC_REVERSE_SUBTRACT};if(i)re[vf]=n.MIN,re[_f]=n.MAX;else{let W=e.get("EXT_blend_minmax");W!==null&&(re[vf]=W.MIN_EXT,re[_f]=W.MAX_EXT)}let ce={[rx]:n.ZERO,[ox]:n.ONE,[ax]:n.SRC_COLOR,[$h]:n.SRC_ALPHA,[fx]:n.SRC_ALPHA_SATURATE,[ux]:n.DST_COLOR,[cx]:n.DST_ALPHA,[lx]:n.ONE_MINUS_SRC_COLOR,[Kh]:n.ONE_MINUS_SRC_ALPHA,[dx]:n.ONE_MINUS_DST_COLOR,[hx]:n.ONE_MINUS_DST_ALPHA,[px]:n.CONSTANT_COLOR,[mx]:n.ONE_MINUS_CONSTANT_COLOR,[gx]:n.CONSTANT_ALPHA,[xx]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(W,te,he,be,xe,je,Qe,bt,At,ht){if(W===Ai){f===!0&&(Ee(n.BLEND),f=!1);return}if(f===!1&&(Ce(n.BLEND),f=!0),W!==nx){if(W!==v||ht!==H){if((y!==Ys||_!==Ys)&&(n.blendEquation(n.FUNC_ADD),y=Ys,_=Ys),ht)switch(W){case ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $t:n.blendFunc(n.ONE,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $t:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}T=null,C=null,M=null,S=null,b.set(0,0,0),E=0,v=W,H=ht}return}xe=xe||te,je=je||he,Qe=Qe||be,(te!==y||xe!==_)&&(n.blendEquationSeparate(re[te],re[xe]),y=te,_=xe),(he!==T||be!==C||je!==M||Qe!==S)&&(n.blendFuncSeparate(ce[he],ce[be],ce[je],ce[Qe]),T=he,C=be,M=je,S=Qe),(bt.equals(b)===!1||At!==E)&&(n.blendColor(bt.r,bt.g,bt.b,At),b.copy(bt),E=At),v=W,H=!1}function ze(W,te){W.side===wt?Ee(n.CULL_FACE):Ce(n.CULL_FACE);let he=W.side===pn;te&&(he=!he),Le(he),W.blending===ms&&W.transparent===!1?ie(Ai):ie(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),l.setFunc(W.depthFunc),l.setTest(W.depthTest),l.setMask(W.depthWrite),a.setMask(W.colorWrite);let be=W.stencilWrite;c.setTest(be),be&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),$(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(W){V!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),V=W)}function N(W){W!==Qg?(Ce(n.CULL_FACE),W!==A&&(W===gf?n.cullFace(n.BACK):W===ex?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),A=W}function D(W){W!==L&&(F&&n.lineWidth(W),L=W)}function $(W,te,he){W?(Ce(n.POLYGON_OFFSET_FILL),(w!==te||P!==he)&&(n.polygonOffset(te,he),w=te,P=he)):Ee(n.POLYGON_OFFSET_FILL)}function ve(W){W?Ce(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function ge(W){W===void 0&&(W=n.TEXTURE0+R-1),z!==W&&(n.activeTexture(W),z=W)}function pe(W,te,he){he===void 0&&(z===null?he=n.TEXTURE0+R-1:he=z);let be=Z[he];be===void 0&&(be={type:void 0,texture:void 0},Z[he]=be),(be.type!==W||be.texture!==te)&&(z!==he&&(n.activeTexture(he),z=he),n.bindTexture(W,te||we[W]),be.type=W,be.texture=te)}function Fe(){let W=Z[z];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Ae(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Je(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ot(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ye(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function K(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function oe(W){ee.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),ee.copy(W))}function Me(W){ue.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),ue.copy(W))}function Pe(W,te){let he=u.get(te);he===void 0&&(he=new WeakMap,u.set(te,he));let be=he.get(W);be===void 0&&(be=n.getUniformBlockIndex(te,W.name),he.set(W,be))}function Ie(W,te){let be=u.get(te).get(W);h.get(te)!==be&&(n.uniformBlockBinding(te,be,W.__bindingPointIndex),h.set(te,be))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},z=null,Z={},m={},g=new WeakMap,x=[],d=null,f=!1,v=null,y=null,T=null,C=null,_=null,M=null,S=null,b=new Oe(0,0,0),E=0,H=!1,V=null,A=null,L=null,w=null,P=null,ee.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:Ee,bindFramebuffer:Ne,drawBuffers:G,useProgram:_e,setBlending:ie,setMaterial:ze,setFlipSided:Le,setCullFace:N,setLineWidth:D,setPolygonOffset:$,setScissorTest:ve,activeTexture:ge,bindTexture:pe,unbindTexture:Fe,compressedTexImage2D:Ae,compressedTexImage3D:Ue,texImage2D:We,texImage3D:K,updateUBOMapping:Pe,uniformBlockBinding:Ie,texStorage2D:ot,texStorage3D:Ye,texSubImage2D:Xe,texSubImage3D:Je,compressedTexSubImage2D:ye,compressedTexSubImage3D:pt,scissor:oe,viewport:Me,reset:se}}function U1(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,D){return m?new OffscreenCanvas(N,D):Sl("canvas")}function x(N,D,$,ve){let ge=1;if((N.width>ve||N.height>ve)&&(ge=ve/Math.max(N.width,N.height)),ge<1||D===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){let pe=D?nu:Math.floor,Fe=pe(ge*N.width),Ae=pe(ge*N.height);u===void 0&&(u=g(Fe,Ae));let Ue=$?g(Fe,Ae):u;return Ue.width=Fe,Ue.height=Ae,Ue.getContext("2d").drawImage(N,0,0,Fe,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Fe+"x"+Ae+")."),Ue}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function d(N){return jf(N.width)&&jf(N.height)}function f(N){return a?!1:N.wrapS!==xi||N.wrapT!==xi||N.minFilter!==On&&N.minFilter!==oi}function v(N,D){return N.generateMipmaps&&D&&N.minFilter!==On&&N.minFilter!==oi}function y(N){n.generateMipmap(N)}function T(N,D,$,ve,ge=!1){if(a===!1)return D;if(N!==null){if(n[N]!==void 0)return n[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pe=D;if(D===n.RED&&($===n.FLOAT&&(pe=n.R32F),$===n.HALF_FLOAT&&(pe=n.R16F),$===n.UNSIGNED_BYTE&&(pe=n.R8)),D===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(pe=n.R8UI),$===n.UNSIGNED_SHORT&&(pe=n.R16UI),$===n.UNSIGNED_INT&&(pe=n.R32UI),$===n.BYTE&&(pe=n.R8I),$===n.SHORT&&(pe=n.R16I),$===n.INT&&(pe=n.R32I)),D===n.RG&&($===n.FLOAT&&(pe=n.RG32F),$===n.HALF_FLOAT&&(pe=n.RG16F),$===n.UNSIGNED_BYTE&&(pe=n.RG8)),D===n.RGBA){let Fe=ge?vl:St.getTransfer(ve);$===n.FLOAT&&(pe=n.RGBA32F),$===n.HALF_FLOAT&&(pe=n.RGBA16F),$===n.UNSIGNED_BYTE&&(pe=Fe===Rt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(pe=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(pe=n.RGB5_A1)}return(pe===n.R16F||pe===n.R32F||pe===n.RG16F||pe===n.RG32F||pe===n.RGBA16F||pe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function C(N,D,$){return v(N,$)===!0||N.isFramebufferTexture&&N.minFilter!==On&&N.minFilter!==oi?Math.log2(Math.max(D.width,D.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?D.mipmaps.length:1}function _(N){return N===On||N===Mf||N===uh?n.NEAREST:n.LINEAR}function M(N){let D=N.target;D.removeEventListener("dispose",M),b(D),D.isVideoTexture&&h.delete(D)}function S(N){let D=N.target;D.removeEventListener("dispose",S),H(D)}function b(N){let D=i.get(N);if(D.__webglInit===void 0)return;let $=N.source,ve=p.get($);if(ve){let ge=ve[D.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&E(N),Object.keys(ve).length===0&&p.delete($)}i.remove(N)}function E(N){let D=i.get(N);n.deleteTexture(D.__webglTexture);let $=N.source,ve=p.get($);delete ve[D.__cacheKey],o.memory.textures--}function H(N){let D=N.texture,$=i.get(N),ve=i.get(D);if(ve.__webglTexture!==void 0&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray($.__webglFramebuffer[ge]))for(let pe=0;pe<$.__webglFramebuffer[ge].length;pe++)n.deleteFramebuffer($.__webglFramebuffer[ge][pe]);else n.deleteFramebuffer($.__webglFramebuffer[ge]);$.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer[ge])}else{if(Array.isArray($.__webglFramebuffer))for(let ge=0;ge<$.__webglFramebuffer.length;ge++)n.deleteFramebuffer($.__webglFramebuffer[ge]);else n.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&n.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&n.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ge=0;ge<$.__webglColorRenderbuffer.length;ge++)$.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer($.__webglColorRenderbuffer[ge]);$.__webglDepthRenderbuffer&&n.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let ge=0,pe=D.length;ge<pe;ge++){let Fe=i.get(D[ge]);Fe.__webglTexture&&(n.deleteTexture(Fe.__webglTexture),o.memory.textures--),i.remove(D[ge])}i.remove(D),i.remove(N)}let V=0;function A(){V=0}function L(){let N=V;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),V+=1,N}function w(N){let D=[];return D.push(N.wrapS),D.push(N.wrapT),D.push(N.wrapR||0),D.push(N.magFilter),D.push(N.minFilter),D.push(N.anisotropy),D.push(N.internalFormat),D.push(N.format),D.push(N.type),D.push(N.generateMipmaps),D.push(N.premultiplyAlpha),D.push(N.flipY),D.push(N.unpackAlignment),D.push(N.colorSpace),D.join()}function P(N,D){let $=i.get(N);if(N.isVideoTexture&&ze(N),N.isRenderTargetTexture===!1&&N.version>0&&$.__version!==N.version){let ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee($,N,D);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+D)}function R(N,D){let $=i.get(N);if(N.version>0&&$.__version!==N.version){ee($,N,D);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+D)}function F(N,D){let $=i.get(N);if(N.version>0&&$.__version!==N.version){ee($,N,D);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+D)}function B(N,D){let $=i.get(N);if(N.version>0&&$.__version!==N.version){ue($,N,D);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+D)}let I={[zn]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Qh]:n.MIRRORED_REPEAT},z={[On]:n.NEAREST,[Mf]:n.NEAREST_MIPMAP_NEAREST,[uh]:n.NEAREST_MIPMAP_LINEAR,[oi]:n.LINEAR,[Rx]:n.LINEAR_MIPMAP_NEAREST,[Xo]:n.LINEAR_MIPMAP_LINEAR},Z={[Bx]:n.NEVER,[qx]:n.ALWAYS,[kx]:n.LESS,[dm]:n.LEQUAL,[Gx]:n.EQUAL,[Xx]:n.GEQUAL,[Vx]:n.GREATER,[Wx]:n.NOTEQUAL};function U(N,D,$){if($?(n.texParameteri(N,n.TEXTURE_WRAP_S,I[D.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,I[D.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,I[D.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,z[D.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,z[D.minFilter])):(n.texParameteri(N,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(N,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(D.wrapS!==xi||D.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(N,n.TEXTURE_MAG_FILTER,_(D.magFilter)),n.texParameteri(N,n.TEXTURE_MIN_FILTER,_(D.minFilter)),D.minFilter!==On&&D.minFilter!==oi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),D.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Z[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ve=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===On||D.minFilter!==uh&&D.minFilter!==Xo||D.type===ps&&e.has("OES_texture_float_linear")===!1||a===!1&&D.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(n.texParameterf(N,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function q(N,D){let $=!1;N.__webglInit===void 0&&(N.__webglInit=!0,D.addEventListener("dispose",M));let ve=D.source,ge=p.get(ve);ge===void 0&&(ge={},p.set(ve,ge));let pe=w(D);if(pe!==N.__cacheKey){ge[pe]===void 0&&(ge[pe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),ge[pe].usedTimes++;let Fe=ge[N.__cacheKey];Fe!==void 0&&(ge[N.__cacheKey].usedTimes--,Fe.usedTimes===0&&E(D)),N.__cacheKey=pe,N.__webglTexture=ge[pe].texture}return $}function ee(N,D,$){let ve=n.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ve=n.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ve=n.TEXTURE_3D);let ge=q(N,D),pe=D.source;t.bindTexture(ve,N.__webglTexture,n.TEXTURE0+$);let Fe=i.get(pe);if(pe.version!==Fe.__version||ge===!0){t.activeTexture(n.TEXTURE0+$);let Ae=St.getPrimaries(St.workingColorSpace),Ue=D.colorSpace===ai?null:St.getPrimaries(D.colorSpace),Xe=D.colorSpace===ai||Ae===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Je=f(D)&&d(D.image)===!1,ye=x(D.image,Je,!1,s.maxTextureSize);ye=Le(D,ye);let pt=d(ye)||a,ot=r.convert(D.format,D.colorSpace),Ye=r.convert(D.type),We=T(D.internalFormat,ot,Ye,D.colorSpace,D.isVideoTexture);U(ve,D,pt);let K,oe=D.mipmaps,Me=a&&D.isVideoTexture!==!0&&We!==cm,Pe=Fe.__version===void 0||ge===!0,Ie=C(D,ye,pt);if(D.isDepthTexture)We=n.DEPTH_COMPONENT,a?D.type===ps?We=n.DEPTH_COMPONENT32F:D.type===fs?We=n.DEPTH_COMPONENT24:D.type===Js?We=n.DEPTH24_STENCIL8:We=n.DEPTH_COMPONENT16:D.type===ps&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===js&&We===n.DEPTH_COMPONENT&&D.type!==Zu&&D.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=fs,Ye=r.convert(D.type)),D.format===$r&&We===n.DEPTH_COMPONENT&&(We=n.DEPTH_STENCIL,D.type!==Js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=Js,Ye=r.convert(D.type))),Pe&&(Me?t.texStorage2D(n.TEXTURE_2D,1,We,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,We,ye.width,ye.height,0,ot,Ye,null));else if(D.isDataTexture)if(oe.length>0&&pt){Me&&Pe&&t.texStorage2D(n.TEXTURE_2D,Ie,We,oe[0].width,oe[0].height);for(let se=0,W=oe.length;se<W;se++)K=oe[se],Me?t.texSubImage2D(n.TEXTURE_2D,se,0,0,K.width,K.height,ot,Ye,K.data):t.texImage2D(n.TEXTURE_2D,se,We,K.width,K.height,0,ot,Ye,K.data);D.generateMipmaps=!1}else Me?(Pe&&t.texStorage2D(n.TEXTURE_2D,Ie,We,ye.width,ye.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye.width,ye.height,ot,Ye,ye.data)):t.texImage2D(n.TEXTURE_2D,0,We,ye.width,ye.height,0,ot,Ye,ye.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Me&&Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,We,oe[0].width,oe[0].height,ye.depth);for(let se=0,W=oe.length;se<W;se++)K=oe[se],D.format!==yi?ot!==null?Me?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,K.width,K.height,ye.depth,ot,K.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,We,K.width,K.height,ye.depth,0,K.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,K.width,K.height,ye.depth,ot,Ye,K.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,We,K.width,K.height,ye.depth,0,ot,Ye,K.data)}else{Me&&Pe&&t.texStorage2D(n.TEXTURE_2D,Ie,We,oe[0].width,oe[0].height);for(let se=0,W=oe.length;se<W;se++)K=oe[se],D.format!==yi?ot!==null?Me?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,K.width,K.height,ot,K.data):t.compressedTexImage2D(n.TEXTURE_2D,se,We,K.width,K.height,0,K.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?t.texSubImage2D(n.TEXTURE_2D,se,0,0,K.width,K.height,ot,Ye,K.data):t.texImage2D(n.TEXTURE_2D,se,We,K.width,K.height,0,ot,Ye,K.data)}else if(D.isDataArrayTexture)Me?(Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,We,ye.width,ye.height,ye.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ot,Ye,ye.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,ye.width,ye.height,ye.depth,0,ot,Ye,ye.data);else if(D.isData3DTexture)Me?(Pe&&t.texStorage3D(n.TEXTURE_3D,Ie,We,ye.width,ye.height,ye.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ot,Ye,ye.data)):t.texImage3D(n.TEXTURE_3D,0,We,ye.width,ye.height,ye.depth,0,ot,Ye,ye.data);else if(D.isFramebufferTexture){if(Pe)if(Me)t.texStorage2D(n.TEXTURE_2D,Ie,We,ye.width,ye.height);else{let se=ye.width,W=ye.height;for(let te=0;te<Ie;te++)t.texImage2D(n.TEXTURE_2D,te,We,se,W,0,ot,Ye,null),se>>=1,W>>=1}}else if(oe.length>0&&pt){Me&&Pe&&t.texStorage2D(n.TEXTURE_2D,Ie,We,oe[0].width,oe[0].height);for(let se=0,W=oe.length;se<W;se++)K=oe[se],Me?t.texSubImage2D(n.TEXTURE_2D,se,0,0,ot,Ye,K):t.texImage2D(n.TEXTURE_2D,se,We,ot,Ye,K);D.generateMipmaps=!1}else Me?(Pe&&t.texStorage2D(n.TEXTURE_2D,Ie,We,ye.width,ye.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,Ye,ye)):t.texImage2D(n.TEXTURE_2D,0,We,ot,Ye,ye);v(D,pt)&&y(ve),Fe.__version=pe.version,D.onUpdate&&D.onUpdate(D)}N.__version=D.version}function ue(N,D,$){if(D.image.length!==6)return;let ve=q(N,D),ge=D.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+$);let pe=i.get(ge);if(ge.version!==pe.__version||ve===!0){t.activeTexture(n.TEXTURE0+$);let Fe=St.getPrimaries(St.workingColorSpace),Ae=D.colorSpace===ai?null:St.getPrimaries(D.colorSpace),Ue=D.colorSpace===ai||Fe===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,D.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,D.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Xe=D.isCompressedTexture||D.image[0].isCompressedTexture,Je=D.image[0]&&D.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!Xe&&!Je?ye[se]=x(D.image[se],!1,!0,s.maxCubemapSize):ye[se]=Je?D.image[se].image:D.image[se],ye[se]=Le(D,ye[se]);let pt=ye[0],ot=d(pt)||a,Ye=r.convert(D.format,D.colorSpace),We=r.convert(D.type),K=T(D.internalFormat,Ye,We,D.colorSpace),oe=a&&D.isVideoTexture!==!0,Me=pe.__version===void 0||ve===!0,Pe=C(D,pt,ot);U(n.TEXTURE_CUBE_MAP,D,ot);let Ie;if(Xe){oe&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,K,pt.width,pt.height);for(let se=0;se<6;se++){Ie=ye[se].mipmaps;for(let W=0;W<Ie.length;W++){let te=Ie[W];D.format!==yi?Ye!==null?oe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,W,0,0,te.width,te.height,Ye,te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,W,K,te.width,te.height,0,te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,W,0,0,te.width,te.height,Ye,We,te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,W,K,te.width,te.height,0,Ye,We,te.data)}}}else{Ie=D.mipmaps,oe&&Me&&(Ie.length>0&&Pe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,K,ye[0].width,ye[0].height));for(let se=0;se<6;se++)if(Je){oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Ye,We,ye[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,K,ye[se].width,ye[se].height,0,Ye,We,ye[se].data);for(let W=0;W<Ie.length;W++){let he=Ie[W].image[se].image;oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,W+1,0,0,he.width,he.height,Ye,We,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,W+1,K,he.width,he.height,0,Ye,We,he.data)}}else{oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ye,We,ye[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,K,Ye,We,ye[se]);for(let W=0;W<Ie.length;W++){let te=Ie[W];oe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,W+1,0,0,Ye,We,te.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,W+1,K,Ye,We,te.image[se])}}}v(D,ot)&&y(n.TEXTURE_CUBE_MAP),pe.__version=ge.version,D.onUpdate&&D.onUpdate(D)}N.__version=D.version}function me(N,D,$,ve,ge,pe){let Fe=r.convert($.format,$.colorSpace),Ae=r.convert($.type),Ue=T($.internalFormat,Fe,Ae,$.colorSpace);if(!i.get(D).__hasExternalTextures){let Je=Math.max(1,D.width>>pe),ye=Math.max(1,D.height>>pe);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,pe,Ue,Je,ye,D.depth,0,Fe,Ae,null):t.texImage2D(ge,pe,Ue,Je,ye,0,Fe,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),ie(D)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,ge,i.get($).__webglTexture,0,ce(D)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ve,ge,i.get($).__webglTexture,pe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(N,D,$){if(n.bindRenderbuffer(n.RENDERBUFFER,N),D.depthBuffer&&!D.stencilBuffer){let ve=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if($||ie(D)){let ge=D.depthTexture;ge&&ge.isDepthTexture&&(ge.type===ps?ve=n.DEPTH_COMPONENT32F:ge.type===fs&&(ve=n.DEPTH_COMPONENT24));let pe=ce(D);ie(D)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ve,D.width,D.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ve,D.width,D.height)}else n.renderbufferStorage(n.RENDERBUFFER,ve,D.width,D.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,N)}else if(D.depthBuffer&&D.stencilBuffer){let ve=ce(D);$&&ie(D)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,n.DEPTH24_STENCIL8,D.width,D.height):ie(D)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,n.DEPTH24_STENCIL8,D.width,D.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,N)}else{let ve=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let ge=0;ge<ve.length;ge++){let pe=ve[ge],Fe=r.convert(pe.format,pe.colorSpace),Ae=r.convert(pe.type),Ue=T(pe.internalFormat,Fe,Ae,pe.colorSpace),Xe=ce(D);$&&ie(D)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,Ue,D.width,D.height):ie(D)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe,Ue,D.width,D.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,D.width,D.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(N,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),P(D.depthTexture,0);let ve=i.get(D.depthTexture).__webglTexture,ge=ce(D);if(D.depthTexture.format===js)ie(D)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(D.depthTexture.format===$r)ie(D)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ee(N){let D=i.get(N),$=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!D.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ce(D.__webglFramebuffer,N)}else if($){D.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer[ve]),D.__webglDepthbuffer[ve]=n.createRenderbuffer(),we(D.__webglDepthbuffer[ve],N,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer=n.createRenderbuffer(),we(D.__webglDepthbuffer,N,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(N,D,$){let ve=i.get(N);D!==void 0&&me(ve.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ee(N)}function G(N){let D=N.texture,$=i.get(N),ve=i.get(D);N.addEventListener("dispose",S),N.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=D.version,o.memory.textures++);let ge=N.isWebGLCubeRenderTarget===!0,pe=N.isWebGLMultipleRenderTargets===!0,Fe=d(N)||a;if(ge){$.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(a&&D.mipmaps&&D.mipmaps.length>0){$.__webglFramebuffer[Ae]=[];for(let Ue=0;Ue<D.mipmaps.length;Ue++)$.__webglFramebuffer[Ae][Ue]=n.createFramebuffer()}else $.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(a&&D.mipmaps&&D.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ae=0;Ae<D.mipmaps.length;Ae++)$.__webglFramebuffer[Ae]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(pe)if(s.drawBuffers){let Ae=N.texture;for(let Ue=0,Xe=Ae.length;Ue<Xe;Ue++){let Je=i.get(Ae[Ue]);Je.__webglTexture===void 0&&(Je.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&N.samples>0&&ie(N)===!1){let Ae=pe?D:[D];$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ae.length;Ue++){let Xe=Ae[Ue];$.__webglColorRenderbuffer[Ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[Ue]);let Je=r.convert(Xe.format,Xe.colorSpace),ye=r.convert(Xe.type),pt=T(Xe.internalFormat,Je,ye,Xe.colorSpace,N.isXRRenderTarget===!0),ot=ce(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,pt,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,$.__webglColorRenderbuffer[Ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),we($.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),U(n.TEXTURE_CUBE_MAP,D,Fe);for(let Ae=0;Ae<6;Ae++)if(a&&D.mipmaps&&D.mipmaps.length>0)for(let Ue=0;Ue<D.mipmaps.length;Ue++)me($.__webglFramebuffer[Ae][Ue],N,D,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ue);else me($.__webglFramebuffer[Ae],N,D,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);v(D,Fe)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){let Ae=N.texture;for(let Ue=0,Xe=Ae.length;Ue<Xe;Ue++){let Je=Ae[Ue],ye=i.get(Je);t.bindTexture(n.TEXTURE_2D,ye.__webglTexture),U(n.TEXTURE_2D,Je,Fe),me($.__webglFramebuffer,N,Je,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,0),v(Je,Fe)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(a?Ae=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,ve.__webglTexture),U(Ae,D,Fe),a&&D.mipmaps&&D.mipmaps.length>0)for(let Ue=0;Ue<D.mipmaps.length;Ue++)me($.__webglFramebuffer[Ue],N,D,n.COLOR_ATTACHMENT0,Ae,Ue);else me($.__webglFramebuffer,N,D,n.COLOR_ATTACHMENT0,Ae,0);v(D,Fe)&&y(Ae),t.unbindTexture()}N.depthBuffer&&Ee(N)}function _e(N){let D=d(N)||a,$=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ve=0,ge=$.length;ve<ge;ve++){let pe=$[ve];if(v(pe,D)){let Fe=N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(pe).__webglTexture;t.bindTexture(Fe,Ae),y(Fe),t.unbindTexture()}}}function re(N){if(a&&N.samples>0&&ie(N)===!1){let D=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],$=N.width,ve=N.height,ge=n.COLOR_BUFFER_BIT,pe=[],Fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(N),Ue=N.isWebGLMultipleRenderTargets===!0;if(Ue)for(let Xe=0;Xe<D.length;Xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Xe=0;Xe<D.length;Xe++){pe.push(n.COLOR_ATTACHMENT0+Xe),N.depthBuffer&&pe.push(Fe);let Je=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(Je===!1&&(N.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ue&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Xe]),Je===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Fe]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Fe])),Ue){let ye=i.get(D[Xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,$,ve,0,0,$,ve,ge,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ue)for(let Xe=0;Xe<D.length;Xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[Xe]);let Je=i.get(D[Xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Xe,n.TEXTURE_2D,Je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function ce(N){return Math.min(s.maxSamples,N.samples)}function ie(N){let D=i.get(N);return a&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function ze(N){let D=o.render.frame;h.get(N)!==D&&(h.set(N,D),N.update())}function Le(N,D){let $=N.colorSpace,ve=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===tu||$!==ji&&$!==ai&&(St.getTransfer($)===Rt?a===!1?e.has("EXT_sRGB")===!0&&ve===yi?(N.format=tu,N.minFilter=oi,N.generateMipmaps=!1):D=wl.sRGBToLinear(D):(ve!==yi||ge!==xs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),D}this.allocateTextureUnit=L,this.resetTextureUnits=A,this.setTexture2D=P,this.setTexture2DArray=R,this.setTexture3D=F,this.setTextureCube=B,this.rebindTextures=Ne,this.setupRenderTarget=G,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ie}function N1(n,e,t){let i=t.isWebGL2;function s(r,o=ai){let a,l=St.getTransfer(o);if(r===xs)return n.UNSIGNED_BYTE;if(r===sm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===rm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Cx)return n.BYTE;if(r===Px)return n.SHORT;if(r===Zu)return n.UNSIGNED_SHORT;if(r===im)return n.INT;if(r===fs)return n.UNSIGNED_INT;if(r===ps)return n.FLOAT;if(r===vi)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ix)return n.ALPHA;if(r===yi)return n.RGBA;if(r===Lx)return n.LUMINANCE;if(r===Dx)return n.LUMINANCE_ALPHA;if(r===js)return n.DEPTH_COMPONENT;if(r===$r)return n.DEPTH_STENCIL;if(r===tu)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ux)return n.RED;if(r===om)return n.RED_INTEGER;if(r===Nx)return n.RG;if(r===am)return n.RG_INTEGER;if(r===lm)return n.RGBA_INTEGER;if(r===dh||r===fh||r===ph||r===mh)if(l===Rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===dh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ph)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===dh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ph)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ef||r===bf||r===Sf||r===wf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ef)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===bf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===wf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Tf||r===Af)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Tf)return l===Rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Af)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Rf||r===Cf||r===Pf||r===If||r===Lf||r===Df||r===Uf||r===Nf||r===Hf||r===Of||r===zf||r===Ff||r===Bf||r===kf)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Rf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Cf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===If)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Lf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Df)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Of)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ff)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kf)return l===Rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gh||r===Gf||r===Vf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===gh)return l===Rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Gf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hx||r===Wf||r===Xf||r===qf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===gh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Wf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Js?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function O1(n,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function i(d,f){f.color.getRGB(d.fogColor.value,mm(n)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,v,y,T){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,T)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),x(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(o(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?l(d,f,v,y):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===pn&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===pn&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let v=e.get(f).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;let y=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*y,t(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function o(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function l(d,f,v,y){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*v,d.scale.value=y*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),e.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,v){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function x(d,f){let v=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function z1(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,y){let T=y.program;i.uniformBlockBinding(v,T)}function c(v,y){let T=s[v.id];T===void 0&&(g(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",d));let C=y.program;i.updateUBOMapping(v,C);let _=e.render.frame;r[v.id]!==_&&(p(v),r[v.id]=_)}function h(v){let y=u();v.__bindingPointIndex=y;let T=n.createBuffer(),C=v.__size,_=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,C,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,T),T}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){let y=s[v.id],T=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let _=0,M=T.length;_<M;_++){let S=Array.isArray(T[_])?T[_]:[T[_]];for(let b=0,E=S.length;b<E;b++){let H=S[b];if(m(H,_,b,C)===!0){let V=H.__offset,A=Array.isArray(H.value)?H.value:[H.value],L=0;for(let w=0;w<A.length;w++){let P=A[w],R=x(P);typeof P=="number"||typeof P=="boolean"?(H.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,V+L,H.__data)):P.isMatrix3?(H.__data[0]=P.elements[0],H.__data[1]=P.elements[1],H.__data[2]=P.elements[2],H.__data[3]=0,H.__data[4]=P.elements[3],H.__data[5]=P.elements[4],H.__data[6]=P.elements[5],H.__data[7]=0,H.__data[8]=P.elements[6],H.__data[9]=P.elements[7],H.__data[10]=P.elements[8],H.__data[11]=0):(P.toArray(H.__data,L),L+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(v,y,T,C){let _=v.value,M=y+"_"+T;if(C[M]===void 0)return typeof _=="number"||typeof _=="boolean"?C[M]=_:C[M]=_.clone(),!0;{let S=C[M];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return C[M]=_,!0}else if(S.equals(_)===!1)return S.copy(_),!0}return!1}function g(v){let y=v.uniforms,T=0,C=16;for(let M=0,S=y.length;M<S;M++){let b=Array.isArray(y[M])?y[M]:[y[M]];for(let E=0,H=b.length;E<H;E++){let V=b[E],A=Array.isArray(V.value)?V.value:[V.value];for(let L=0,w=A.length;L<w;L++){let P=A[L],R=x(P),F=T%C;F!==0&&C-F<R.boundary&&(T+=C-F),V.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=T,T+=R.storage}}}let _=T%C;return _>0&&(T+=C-_),v.__size=T,v.__cache={},this}function x(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function d(v){let y=v.target;y.removeEventListener("dispose",d);let T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(let v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}function al(n,e,t,i,s,r){Br.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(No.x=r*Br.x-s*Br.y,No.y=s*Br.x+r*Br.y):No.copy(Br),n.copy(e),n.x+=No.x,n.y+=No.y,n.applyMatrix4(Em)}function qp(n,e,t,i,s,r,o){let a=vu.distanceSqToPoint(n);if(a<t){let l=new k;vu.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function Ku(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Zp(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function B1(n,e){let t=1-n;return t*t*e}function k1(n,e){return 2*(1-n)*n*e}function G1(n,e){return n*n*e}function Go(n,e,t,i){return B1(n,e)+k1(n,t)+G1(n,i)}function V1(n,e){let t=1-n;return t*t*t*e}function W1(n,e){let t=1-n;return 3*t*t*n*e}function X1(n,e){return 3*(1-n)*n*n*e}function q1(n,e){return n*n*n*e}function Vo(n,e,t,i,s){return V1(n,e)+W1(n,t)+X1(n,i)+q1(n,s)}function bm(n,e,t,i,s){let r,o;if(s===cE(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Yp(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Yp(r,n[r],n[r+1],o);return o&&nc(o,o.next)&&(na(o),o=o.next),o}function tr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(nc(t,t.next)||Wt(t.prev,t,t.next)===0)){if(na(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ea(n,e,t,i,s,r,o){if(!n)return;!o&&r&&iE(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?$1(n,i,s,r):Y1(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),na(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=K1(tr(n),e,t),ea(n,e,t,i,s,r,2)):o===2&&J1(n,e,t,i,s,r):ea(tr(n),e,t,i,s,r,1);break}}}function Y1(n){let e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=m&&Wr(s,a,r,l,o,c,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $1(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<p?h:p:u<p?u:p,x=a>l?a>c?a:c:l>c?l:c,d=h>u?h>p?h:p:u>p?u:p,f=Ru(m,g,e,t,i),v=Ru(x,d,e,t,i),y=n.prevZ,T=n.nextZ;for(;y&&y.z>=f&&T&&T.z<=v;){if(y.x>=m&&y.x<=x&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&Wr(a,h,l,u,c,p,y.x,y.y)&&Wt(y.prev,y,y.next)>=0||(y=y.prevZ,T.x>=m&&T.x<=x&&T.y>=g&&T.y<=d&&T!==s&&T!==o&&Wr(a,h,l,u,c,p,T.x,T.y)&&Wt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;y&&y.z>=f;){if(y.x>=m&&y.x<=x&&y.y>=g&&y.y<=d&&y!==s&&y!==o&&Wr(a,h,l,u,c,p,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;T&&T.z<=v;){if(T.x>=m&&T.x<=x&&T.y>=g&&T.y<=d&&T!==s&&T!==o&&Wr(a,h,l,u,c,p,T.x,T.y)&&Wt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function K1(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!nc(s,r)&&Sm(s,i,i.next,r)&&ta(s,r)&&ta(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),na(i),na(i.next),i=n=r),i=i.next}while(i!==n);return tr(i)}function J1(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&oE(o,a)){let l=wm(o,a);o=tr(o,o.next),l=tr(l,l.next),ea(o,e,t,i,s,r,0),ea(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function j1(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=bm(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(rE(c));for(s.sort(Q1),r=0;r<s.length;r++)t=eE(s[r],t);return t}function Q1(n,e){return n.x-e.x}function eE(n,e){let t=tE(n,e);if(!t)return e;let i=wm(t,n);return tr(i,i.next),tr(t,t.next)}function tE(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Wr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),ta(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&nE(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function nE(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function iE(n,e,t,i){let s=n;do s.z===0&&(s.z=Ru(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,sE(s)}function sE(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Ru(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function rE(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Wr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function oE(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!aE(n,e)&&(ta(n,e)&&ta(e,n)&&lE(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||nc(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function nc(n,e){return n.x===e.x&&n.y===e.y}function Sm(n,e,t,i){let s=pl(Wt(n,e,t)),r=pl(Wt(n,e,i)),o=pl(Wt(t,i,n)),a=pl(Wt(t,i,e));return!!(s!==r&&o!==a||s===0&&fl(n,t,e)||r===0&&fl(n,i,e)||o===0&&fl(t,n,i)||a===0&&fl(t,e,i))}function fl(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function pl(n){return n>0?1:n<0?-1:0}function aE(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Sm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ta(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function lE(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function wm(n,e){let t=new Cu(n.i,n.x,n.y),i=new Cu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Yp(n,e,t,i){let s=new Cu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function na(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Cu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function cE(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function $p(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function uE(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function ml(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function dE(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function em(){return(typeof performance>"u"?Date:performance).now()}var Qg,gf,ex,jl,tx,Zi,ys,pn,wt,Ai,ms,$t,xf,yf,nx,Ys,ix,sx,vf,_f,rx,ox,ax,lx,$h,Kh,cx,hx,ux,dx,fx,px,mx,gx,xx,yx,vx,_x,gl,Mx,Ex,bx,Sx,tm,wx,Tx,gs,Vu,Wu,Xu,ra,Ax,qu,nm,Zr,Yr,Jh,jh,Ql,zn,xi,Qh,On,Mf,uh,oi,Rx,Xo,xs,Cx,Px,Zu,im,fs,ps,vi,sm,rm,Js,Ix,yi,Lx,Dx,js,$r,Ux,om,Nx,am,lm,dh,fh,ph,mh,Ef,bf,Sf,wf,cm,Tf,Af,Rf,Cf,Pf,If,Lf,Df,Uf,Nf,Hf,Of,zf,Ff,Bf,kf,gh,Gf,Vf,Hx,Wf,Xf,qf,xl,yl,xh,Zf,Yf,$f,hm,Qs,Ox,zx,um,Fx,ai,vt,ji,Yu,ec,vl,Rt,_l,Ml,Mr,Kf,Bx,kx,Gx,dm,Vx,Wx,Xx,qx,eu,Jf,tu,Ki,El,vs,Cn,yh,bl,de,ct,_h,Qf,ep,tp,Oa,$x,St,Er,wl,Kx,Tl,Jx,li,It,iu,Fn,Al,su,Wn,k,bh,np,Qi,Gi,pi,za,br,Sr,wr,ls,cs,Vs,Po,Fa,Ba,Ws,jx,Io,wh,es,Vi,Th,ka,hs,Ah,Ga,Rh,qo,gt,Tr,mi,Qx,ey,us,Va,jn,ip,sp,Rl,Cl,ty,rp,Ar,Wi,Wa,Lo,ny,iy,op,ap,lp,sy,ry,Kt,gi,Xi,Ch,qi,Rr,Cr,cp,Ph,Ih,Lh,Xa,Ks,pm,ds,qa,Oe,Pn,oy,Ri,mt,rn,Za,mn,Pl,Il,st,ay,ri,Uh,Pr,Qn,Do,dn,Ut,hp,Xs,Ya,up,Ir,Lr,Dr,Nh,$a,Ka,Ja,ja,dp,fp,pp,Qa,el,X,fe,Es,hy,uy,on,Ll,_n,Ur,Nr,ru,Dl,ou,Hh,dy,fy,Yi,qs,nl,Zo,Ge,my,gy,xy,yy,vy,_y,My,Ey,by,Sy,wy,Ty,Ay,Ry,Cy,Py,Iy,Ly,Dy,Uy,Ny,Hy,Oy,zy,Fy,By,ky,Gy,Vy,Wy,Xy,qy,Zy,Yy,$y,Ky,Jy,jy,Qy,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,dv,fv,pv,mv,gv,xv,yv,vv,_v,Mv,Ev,bv,Sv,wv,Tv,Av,Rv,Cv,Pv,Iv,Lv,Dv,Uv,Nv,Hv,Ov,zv,Fv,Bv,kv,Gv,Vv,Wv,Xv,qv,Zv,Yv,$v,Kv,Jv,jv,Qv,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,x_,y_,v_,__,M_,E_,b_,S_,w_,T_,A_,R_,C_,P_,I_,L_,D_,U_,N_,H_,O_,z_,F_,B_,k_,G_,V_,W_,X_,q_,Z_,nt,Re,Ti,il,Jr,Gr,mp,$s,Oh,gp,zh,Fh,Bh,Zs,Hr,xp,jr,Ul,xm,ym,vm,_m,Mm,Mp,Ep,bp,Sp,wp,au,lu,cu,kh,qr,jM,QM,l1,c1,u1,v1,uu,du,T1,fu,pu,P1,I1,mu,it,H1,ko,gu,Yo,xu,Nl,Qr,Hl,Nn,$o,er,Or,Uo,zr,Fr,Br,No,Em,rl,Ho,ol,Hp,Gh,Op,eo,Ko,kr,zp,ll,Fp,F1,Oo,zo,_t,Jo,Bp,kp,Gp,Vh,cl,yu,Vp,Wp,Ol,jo,Xp,vu,hl,ul,zl,cn,ci,Qo,_u,dl,Wh,Xh,qh,Mu,Fl,Eu,Bl,bu,kl,Su,Gl,wu,Tu,Ci,Au,Vl,Pi,Be,_s,Wl,Xl,ts,Z1,Wo,Ms,hE,nr,ei,Pt,to,ql,ae,Ii,no,Pu,Iu,Lu,_i,ir,Du,Uu,Nu,ia,sr,Hu,Ou,fE,zu,io,Zl,Zh,Jp,jp,sa,Fu,Yl,Qp,Fo,Yh,Bu,$l,ku,Kl,Jl,Ju,pE,ju,mE,gE,xE,yE,vE,_E,ME,Gu,zt,uw,Nt=Jn(()=>{Qg=0,gf=1,ex=2,jl=1,tx=2,Zi=3,ys=0,pn=1,wt=2,Ai=0,ms=1,$t=2,xf=3,yf=4,nx=5,Ys=100,ix=101,sx=102,vf=103,_f=104,rx=200,ox=201,ax=202,lx=203,$h=204,Kh=205,cx=206,hx=207,ux=208,dx=209,fx=210,px=211,mx=212,gx=213,xx=214,yx=0,vx=1,_x=2,gl=3,Mx=4,Ex=5,bx=6,Sx=7,tm=0,wx=1,Tx=2,gs=0,Vu=1,Wu=2,Xu=3,ra=4,Ax=5,qu=6,nm=300,Zr=301,Yr=302,Jh=303,jh=304,Ql=306,zn=1e3,xi=1001,Qh=1002,On=1003,Mf=1004,uh=1005,oi=1006,Rx=1007,Xo=1008,xs=1009,Cx=1010,Px=1011,Zu=1012,im=1013,fs=1014,ps=1015,vi=1016,sm=1017,rm=1018,Js=1020,Ix=1021,yi=1023,Lx=1024,Dx=1025,js=1026,$r=1027,Ux=1028,om=1029,Nx=1030,am=1031,lm=1033,dh=33776,fh=33777,ph=33778,mh=33779,Ef=35840,bf=35841,Sf=35842,wf=35843,cm=36196,Tf=37492,Af=37496,Rf=37808,Cf=37809,Pf=37810,If=37811,Lf=37812,Df=37813,Uf=37814,Nf=37815,Hf=37816,Of=37817,zf=37818,Ff=37819,Bf=37820,kf=37821,gh=36492,Gf=36494,Vf=36495,Hx=36283,Wf=36284,Xf=36285,qf=36286,xl=2300,yl=2301,xh=2302,Zf=2400,Yf=2401,$f=2402,hm=3e3,Qs=3001,Ox=3200,zx=3201,um=0,Fx=1,ai="",vt="srgb",ji="srgb-linear",Yu="display-p3",ec="display-p3-linear",vl="linear",Rt="srgb",_l="rec709",Ml="p3",Mr=7680,Kf=519,Bx=512,kx=513,Gx=514,dm=515,Vx=516,Wx=517,Xx=518,qx=519,eu=35044,Jf="300 es",tu=1035,Ki=2e3,El=2001,vs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=Math.PI/180,bl=180/Math.PI;de=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],p=i[2],m=i[5],g=i[8],x=s[0],d=s[3],f=s[6],v=s[1],y=s[4],T=s[7],C=s[2],_=s[5],M=s[8];return r[0]=o*x+a*v+l*C,r[3]=o*d+a*y+l*_,r[6]=o*f+a*T+l*M,r[1]=c*x+h*v+u*C,r[4]=c*d+h*y+u*_,r[7]=c*f+h*T+u*M,r[2]=p*x+m*v+g*C,r[5]=p*d+m*y+g*_,r[8]=p*f+m*T+g*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,p=a*l-h*r,m=c*r-o*l,g=t*u+i*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=p*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_h.makeScale(e,t)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,t){return this.premultiply(_h.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_h=new ct;Qf={};ep=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tp=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oa={[ji]:{transfer:vl,primaries:_l,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:Rt,primaries:_l,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ec]:{transfer:vl,primaries:Ml,toReference:n=>n.applyMatrix3(tp),fromReference:n=>n.applyMatrix3(ep)},[Yu]:{transfer:Rt,primaries:Ml,toReference:n=>n.convertSRGBToLinear().applyMatrix3(tp),fromReference:n=>n.applyMatrix3(ep).convertLinearToSRGB()}},$x=new Set([ji,ec]),St={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$x.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=Oa[e].toReference,s=Oa[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Oa[n].primaries},getTransfer:function(n){return n===ai?vl:Oa[n].transfer}};wl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Er===void 0&&(Er=Sl("canvas")),Er.width=e.width,Er.height=e.height;let i=Er.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Er}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xr(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xr(t[i]/255)*255):t[i]=Xr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kx=0,Tl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Ji(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eh(s[o].image)):r.push(Eh(s[o]))}else r=Eh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Jx=0,li=class n extends vs{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=xi,s=xi,r=oi,o=Xo,a=yi,l=xs,c=n.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=Ji(),this.name="",this.source=new Tl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Qs?vt:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Qs:hm}set encoding(e){Bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qs?vt:ai}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=nm;li.DEFAULT_ANISOTROPY=1;It=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],m=l[5],g=l[9],x=l[2],d=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-x)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+x)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,T=(m+1)/2,C=(f+1)/2,_=(h+p)/4,M=(u+x)/4,S=(g+d)/4;return y>T&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=_/i,r=M/i):T>C?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=_/s,r=S/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=M/r,s=S/r),this.set(i,s,r,t),this}let v=Math.sqrt((d-g)*(d-g)+(u-x)*(u-x)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(d-g)/v,this.y=(u-x)/v,this.z=(p-h)/v,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},iu=class extends vs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qs?vt:ai),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new li(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends iu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Al=class extends li{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},su=class extends li{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],p=r[o+0],m=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==p||c!==m||h!==g){let d=1-a,f=l*p+c*m+h*g+u*x,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){let C=Math.sqrt(y),_=Math.atan2(C,f*v);d=Math.sin(d*_)/C,a=Math.sin(a*_)/C}let T=a*v;if(l=l*d+p*T,c=c*d+m*T,h=h*d+g*T,u=u*d+x*T,d===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],p=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*p,e[t+1]=l*g+h*p+c*u-a*m,e[t+2]=c*g+h*m+a*p-l*u,e[t+3]=h*g-a*u-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),p=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u+p*m*g;break;case"YZX":this._x=p*h*u+c*m*g,this._y=c*m*u+p*h*g,this._z=c*h*g-p*m*u,this._w=c*h*u-p*m*g;break;case"XZY":this._x=p*h*u-c*m*g,this._y=c*m*u-p*h*g,this._z=c*h*g+p*m*u,this._w=c*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=i+a+u;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>u){let m=2*Math.sqrt(1+i-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-i-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fn(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*u+this._w*p,this._x=i*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(np.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(np.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bh.copy(this).projectOnVector(e),this.sub(bh)}reflect(e){return this.sub(bh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bh=new k,np=new Wn,Qi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),za.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),za.copy(i.boundingBox)),za.applyMatrix4(e.matrixWorld),this.union(za)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Fa.subVectors(this.max,Po),br.subVectors(e.a,Po),Sr.subVectors(e.b,Po),wr.subVectors(e.c,Po),ls.subVectors(Sr,br),cs.subVectors(wr,Sr),Vs.subVectors(br,wr);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Vs.z,Vs.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Vs.z,0,-Vs.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Vs.y,Vs.x,0];return!Sh(t,br,Sr,wr,Fa)||(t=[1,0,0,0,1,0,0,0,1],!Sh(t,br,Sr,wr,Fa))?!1:(Ba.crossVectors(ls,cs),t=[Ba.x,Ba.y,Ba.z],Sh(t,br,Sr,wr,Fa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Gi=[new k,new k,new k,new k,new k,new k,new k,new k],pi=new k,za=new Qi,br=new k,Sr=new k,wr=new k,ls=new k,cs=new k,Vs=new k,Po=new k,Fa=new k,Ba=new k,Ws=new k;jx=new Qi,Io=new k,wh=new k,es=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):jx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);let t=Io.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Io,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(wh)),this.expandByPoint(Io.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new k,Th=new k,ka=new k,hs=new k,Ah=new k,Ga=new k,Rh=new k,qo=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Th.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(Th);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ka),a=hs.dot(this.direction),l=-hs.dot(ka),c=hs.lengthSq(),h=Math.abs(1-o*o),u,p,m,g;if(h>0)if(u=o*l-a,p=o*a-l,g=r*h,u>=0)if(p>=-g)if(p<=g){let x=1/h;u*=x,p*=x,m=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+p*(p+2*l)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),m=-u*u+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Th).addScaledVector(ka,p),m}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),s=Vi.dot(Vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(a=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,s,r){Ah.subVectors(t,e),Ga.subVectors(i,e),Rh.crossVectors(Ah,Ga);let o=this.direction.dot(Rh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hs.subVectors(this.origin,e);let l=a*this.direction.dot(Ga.crossVectors(hs,Ga));if(l<0)return null;let c=a*this.direction.dot(Ah.cross(hs));if(c<0||l+c>o)return null;let h=-a*hs.dot(Rh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gt=class n{constructor(e,t,i,s,r,o,a,l,c,h,u,p,m,g,x,d){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,p,m,g,x,d)}set(e,t,i,s,r,o,a,l,c,h,u,p,m,g,x,d){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=x,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Tr.setFromMatrixColumn(e,0).length(),r=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=p-x*c,t[9]=-a*l,t[2]=x-p*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*u,g=c*h,x=c*u;t[0]=p+x*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=x+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*u,g=c*h,x=c*u;t[0]=p-x*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=x-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=p*c+x,t[1]=l*u,t[5]=x*c+p,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-p*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=p-x*u}else if(e.order==="XZY"){let p=o*l,m=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+x,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=x*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qx,e,ey)}lookAt(e,t,i){let s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),us.crossVectors(i,jn),us.lengthSq()===0&&(Math.abs(i.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),us.crossVectors(i,jn)),us.normalize(),Va.crossVectors(jn,us),s[0]=us.x,s[4]=Va.x,s[8]=jn.x,s[1]=us.y,s[5]=Va.y,s[9]=jn.y,s[2]=us.z,s[6]=Va.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],p=i[9],m=i[13],g=i[2],x=i[6],d=i[10],f=i[14],v=i[3],y=i[7],T=i[11],C=i[15],_=s[0],M=s[4],S=s[8],b=s[12],E=s[1],H=s[5],V=s[9],A=s[13],L=s[2],w=s[6],P=s[10],R=s[14],F=s[3],B=s[7],I=s[11],z=s[15];return r[0]=o*_+a*E+l*L+c*F,r[4]=o*M+a*H+l*w+c*B,r[8]=o*S+a*V+l*P+c*I,r[12]=o*b+a*A+l*R+c*z,r[1]=h*_+u*E+p*L+m*F,r[5]=h*M+u*H+p*w+m*B,r[9]=h*S+u*V+p*P+m*I,r[13]=h*b+u*A+p*R+m*z,r[2]=g*_+x*E+d*L+f*F,r[6]=g*M+x*H+d*w+f*B,r[10]=g*S+x*V+d*P+f*I,r[14]=g*b+x*A+d*R+f*z,r[3]=v*_+y*E+T*L+C*F,r[7]=v*M+y*H+T*w+C*B,r[11]=v*S+y*V+T*P+C*I,r[15]=v*b+y*A+T*R+C*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],m=e[14],g=e[3],x=e[7],d=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*p+i*c*p+s*a*m-i*l*m)+x*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+d*(+t*c*u-t*a*m-r*o*u+i*o*m+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*p+s*o*u-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],m=e[11],g=e[12],x=e[13],d=e[14],f=e[15],v=u*d*c-x*p*c+x*l*m-a*d*m-u*l*f+a*p*f,y=g*p*c-h*d*c-g*l*m+o*d*m+h*l*f-o*p*f,T=h*x*c-g*u*c+g*a*m-o*x*m-h*a*f+o*u*f,C=g*u*l-h*x*l-g*a*p+o*x*p+h*a*d-o*u*d,_=t*v+i*y+s*T+r*C;if(_===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=v*M,e[1]=(x*p*r-u*d*r-x*s*m+i*d*m+u*s*f-i*p*f)*M,e[2]=(a*d*r-x*l*r+x*s*c-i*d*c-a*s*f+i*l*f)*M,e[3]=(u*l*r-a*p*r-u*s*c+i*p*c+a*s*m-i*l*m)*M,e[4]=y*M,e[5]=(h*d*r-g*p*r+g*s*m-t*d*m-h*s*f+t*p*f)*M,e[6]=(g*l*r-o*d*r-g*s*c+t*d*c+o*s*f-t*l*f)*M,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*M,e[8]=T*M,e[9]=(g*u*r-h*x*r-g*i*m+t*x*m+h*i*f-t*u*f)*M,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*f+t*a*f)*M,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*m-t*a*m)*M,e[12]=C*M,e[13]=(h*x*s-g*u*s+g*i*p-t*x*p-h*i*d+t*u*d)*M,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*d-t*a*d)*M,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*p+t*a*p)*M,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,p=r*c,m=r*h,g=r*u,x=o*h,d=o*u,f=a*u,v=l*c,y=l*h,T=l*u,C=i.x,_=i.y,M=i.z;return s[0]=(1-(x+f))*C,s[1]=(m+T)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(m-T)*_,s[5]=(1-(p+f))*_,s[6]=(d+v)*_,s[7]=0,s[8]=(g+y)*M,s[9]=(d-v)*M,s[10]=(1-(p+x))*M,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Tr.set(s[0],s[1],s[2]).length(),o=Tr.set(s[4],s[5],s[6]).length(),a=Tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);let c=1/r,h=1/o,u=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,t.setFromRotationMatrix(mi),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ki){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),p=(i+s)/(i-s),m,g;if(a===Ki)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===El)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ki){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),p=(t+e)*c,m=(i+s)*h,g,x;if(a===Ki)g=(o+r)*u,x=-2*u;else if(a===El)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Tr=new k,mi=new gt,Qx=new k(0,0,0),ey=new k(1,1,1),us=new k,Va=new k,jn=new k,ip=new gt,sp=new Wn,Rl=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(fn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-fn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ip,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sp.setFromEuler(this),this.setFromQuaternion(sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rl.DEFAULT_ORDER="XYZ";Cl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ty=0,rp=new k,Ar=new Wn,Wi=new gt,Wa=new k,Lo=new k,ny=new k,iy=new Wn,op=new k(1,0,0),ap=new k(0,1,0),lp=new k(0,0,1),sy={type:"added"},ry={type:"removed"},Kt=class n extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Rl,i=new Wn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new ct}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(e,t){return Ar.setFromAxisAngle(e,t),this.quaternion.premultiply(Ar),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(ap,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,t){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(ap,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wa.copy(e):Wa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Lo,Wa,this.up):Wi.lookAt(Wa,Lo,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Ar.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ar.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(sy)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ry)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),p=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Kt.DEFAULT_UP=new k(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;gi=new k,Xi=new k,Ch=new k,qi=new k,Rr=new k,Cr=new k,cp=new k,Ph=new k,Ih=new k,Lh=new k,Xa=!1,Ks=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),gi.subVectors(e,t),s.cross(gi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){gi.subVectors(s,t),Xi.subVectors(i,t),Ch.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(Xi),l=gi.dot(Ch),c=Xi.dot(Xi),h=Xi.dot(Ch),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let p=1/u,m=(c*l-a*h)*p,g=(o*h-a*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getUV(e,t,i,s,r,o,a,l){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static isFrontFacing(e,t,i,s){return gi.subVectors(i,t),Xi.subVectors(e,t),gi.cross(Xi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),gi.cross(Xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Xa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Xa=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Rr.subVectors(s,i),Cr.subVectors(r,i),Ph.subVectors(e,i);let l=Rr.dot(Ph),c=Cr.dot(Ph);if(l<=0&&c<=0)return t.copy(i);Ih.subVectors(e,s);let h=Rr.dot(Ih),u=Cr.dot(Ih);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Rr,o);Lh.subVectors(e,r);let m=Rr.dot(Lh),g=Cr.dot(Lh);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cr,a);let d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return cp.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(cp,a);let f=1/(d+x+p);return o=x*f,a=p*f,t.copy(i).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},qa={h:0,s:0,l:0};Oe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=St.workingColorSpace){return this.r=e,this.g=t,this.b=i,St.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=St.workingColorSpace){if(e=Zx(e,1),t=fn(t,0,1),i=fn(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Dh(o,r,e+1/3),this.g=Dh(o,r,e),this.b=Dh(o,r,e-1/3)}return St.toWorkingColorSpace(this,s),this}setStyle(e,t=vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=pm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Mh(e.r),this.g=Mh(e.g),this.b=Mh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return St.fromWorkingColorSpace(Pn.copy(this),e),Math.round(fn(Pn.r*255,0,255))*65536+Math.round(fn(Pn.g*255,0,255))*256+Math.round(fn(Pn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Pn.copy(this),t);let i=Pn.r,s=Pn.g,r=Pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=vt){St.fromWorkingColorSpace(Pn.copy(this),e);let t=Pn.r,i=Pn.g,s=Pn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(qa);let i=vh(ds.h,qa.h,t),s=vh(ds.s,qa.s,t),r=vh(ds.l,qa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new Oe;Oe.NAMES=pm;oy=0,Ri=class extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=ms,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Kh,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=gl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$h&&(i.blendSrc=this.blendSrc),this.blendDst!==Kh&&(i.blendDst=this.blendDst),this.blendEquation!==Ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends Ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rn=new k,Za=new de,mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=eu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ps,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ct(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eu&&(e.usage=this.usage),e}},Pl=class extends mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Il=class extends mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},st=class extends mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},ay=0,ri=new gt,Uh=new Kt,Pr=new k,Qn=new Qi,Do=new Qi,dn=new k,Ut=class n extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fm(e)?Il:Pl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ct().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,i){return ri.makeTranslation(e,t,i),this.applyMatrix4(ri),this}scale(e,t,i){return ri.makeScale(e,t,i),this.applyMatrix4(ri),this}lookAt(e){return Uh.lookAt(e),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(Qn.min,Do.min),Qn.expandByPoint(dn),dn.addVectors(Qn.max,Do.max),Qn.expandByPoint(dn)):(Qn.expandByPoint(Do.min),Qn.expandByPoint(Do.max))}Qn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(dn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)dn.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(e,c),dn.add(Pr)),s=Math.max(s,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new k,h[E]=new k;let u=new k,p=new k,m=new k,g=new de,x=new de,d=new de,f=new k,v=new k;function y(E,H,V){u.fromArray(s,E*3),p.fromArray(s,H*3),m.fromArray(s,V*3),g.fromArray(o,E*2),x.fromArray(o,H*2),d.fromArray(o,V*2),p.sub(u),m.sub(u),x.sub(g),d.sub(g);let A=1/(x.x*d.y-d.x*x.y);isFinite(A)&&(f.copy(p).multiplyScalar(d.y).addScaledVector(m,-x.y).multiplyScalar(A),v.copy(m).multiplyScalar(x.x).addScaledVector(p,-d.x).multiplyScalar(A),c[E].add(f),c[H].add(f),c[V].add(f),h[E].add(v),h[H].add(v),h[V].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let E=0,H=T.length;E<H;++E){let V=T[E],A=V.start,L=V.count;for(let w=A,P=A+L;w<P;w+=3)y(i[w+0],i[w+1],i[w+2])}let C=new k,_=new k,M=new k,S=new k;function b(E){M.fromArray(r,E*3),S.copy(M);let H=c[E];C.copy(H),C.sub(M.multiplyScalar(M.dot(H))).normalize(),_.crossVectors(S,H);let A=_.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=A}for(let E=0,H=T.length;E<H;++E){let V=T[E],A=V.start,L=V.count;for(let w=A,P=A+L;w<P;w+=3)b(i[w+0]),b(i[w+1]),b(i[w+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),x=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,d),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),m=0,g=0;for(let x=0,d=l.length;x<d;x++){a.isInterleavedBufferAttribute?m=l[x]*a.data.stride+a.offset:m=l[x]*h;for(let f=0;f<h;f++)p[g++]=c[m++]}return new mn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hp=new gt,Xs=new qo,Ya=new es,up=new k,Ir=new k,Lr=new k,Dr=new k,Nh=new k,$a=new k,Ka=new de,Ja=new de,ja=new de,dp=new k,fp=new k,pp=new k,Qa=new k,el=new k,X=class extends Kt{constructor(e=new Ut,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Nh.fromBufferAttribute(u,e),o?$a.addScaledVector(Nh,h):$a.addScaledVector(Nh.sub(t),h))}t.add($a)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(r),Xs.copy(e.ray).recast(e.near),!(Ya.containsPoint(Xs.origin)===!1&&(Xs.intersectSphere(Ya,up)===null||Xs.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(hp.copy(r).invert(),Xs.copy(e.ray).applyMatrix4(hp),!(i.boundingBox!==null&&Xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Xs)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let d=p[g],f=o[d.materialIndex],v=Math.max(d.start,m.start),y=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let T=v,C=y;T<C;T+=3){let _=a.getX(T),M=a.getX(T+1),S=a.getX(T+2);s=tl(this,f,e,i,c,h,u,_,M,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(a.count,m.start+m.count);for(let d=g,f=x;d<f;d+=3){let v=a.getX(d),y=a.getX(d+1),T=a.getX(d+2);s=tl(this,o,e,i,c,h,u,v,y,T),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let d=p[g],f=o[d.materialIndex],v=Math.max(d.start,m.start),y=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let T=v,C=y;T<C;T+=3){let _=T,M=T+1,S=T+2;s=tl(this,f,e,i,c,h,u,_,M,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let d=g,f=x;d<f;d+=3){let v=d,y=d+1,T=d+2;s=tl(this,o,e,i,c,h,u,v,y,T),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};fe=class n extends Ut{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,m=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(x,d,f,v,y,T,C,_,M,S,b){let E=T/M,H=C/S,V=T/2,A=C/2,L=_/2,w=M+1,P=S+1,R=0,F=0,B=new k;for(let I=0;I<P;I++){let z=I*H-A;for(let Z=0;Z<w;Z++){let U=Z*E-V;B[x]=U*v,B[d]=z*y,B[f]=L,c.push(B.x,B.y,B.z),B[x]=0,B[d]=0,B[f]=_>0?1:-1,h.push(B.x,B.y,B.z),u.push(Z/M),u.push(1-I/S),R+=1}}for(let I=0;I<S;I++)for(let z=0;z<M;z++){let Z=p+z+w*I,U=p+z+w*(I+1),q=p+(z+1)+w*(I+1),ee=p+(z+1)+w*I;l.push(Z,U,ee),l.push(U,q,ee),F+=6}a.addGroup(m,F,b),m+=F,p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Es={clone:Kr,merge:Hn},hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hy,this.fragmentShader=uy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ll=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_n=class extends Ll{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(yh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ur=-90,Nr=1,ru=class extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(Ur,Nr,e,t);s.layers=this.layers,this.add(s);let r=new _n(Ur,Nr,e,t);r.layers=this.layers,this.add(r);let o=new _n(Ur,Nr,e,t);o.layers=this.layers,this.add(o);let a=new _n(Ur,Nr,e,t);a.layers=this.layers,this.add(a);let l=new _n(Ur,Nr,e,t);l.layers=this.layers,this.add(l);let c=new _n(Ur,Nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Dl=class extends li{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ou=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qs?vt:ai),this.texture=new Dl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:oi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fe(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ai});r.uniforms.tEquirect.value=t;let o=new X(s,r),a=t.minFilter;return t.minFilter===Xo&&(t.minFilter=oi),new ru(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Hh=new k,dy=new k,fy=new ct,Yi=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Hh.subVectors(i,t).cross(dy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Hh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||fy.getNormalMatrix(e),s=this.coplanarPoint(Hh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new es,nl=new k,Zo=class{constructor(e=new Yi,t=new Yi,i=new Yi,s=new Yi,r=new Yi,o=new Yi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ki){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],g=s[9],x=s[10],d=s[11],f=s[12],v=s[13],y=s[14],T=s[15];if(i[0].setComponents(l-r,p-c,d-m,T-f).normalize(),i[1].setComponents(l+r,p+c,d+m,T+f).normalize(),i[2].setComponents(l+o,p+h,d+g,T+v).normalize(),i[3].setComponents(l-o,p-h,d-g,T-v).normalize(),i[4].setComponents(l-a,p-u,d-x,T-y).normalize(),t===Ki)i[5].setComponents(l+a,p+u,d+x,T+y).normalize();else if(t===El)i[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(nl.x=s.normal.x>0?e.max.x:e.min.x,nl.y=s.normal.y>0?e.max.y:e.min.y,nl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Ge=class n extends Ut{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,p=t/l,m=[],g=[],x=[],d=[];for(let f=0;f<h;f++){let v=f*p-o;for(let y=0;y<c;y++){let T=y*u-r;g.push(T,-v,0),x.push(0,0,1),d.push(y/a),d.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let y=v+c*f,T=v+c*(f+1),C=v+1+c*(f+1),_=v+1+c*f;m.push(y,T,_),m.push(T,C,_)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
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
#endif`,xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,My=`#ifdef USE_AOMAP
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
#endif`,Ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,by=`#ifdef USE_BATCHING
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
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ry=`#ifdef USE_IRIDESCENCE
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
#endif`,Cy=`#ifdef USE_BUMPMAP
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zy=`#define PI 3.141592653589793
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
} // validated`,Fy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xy="gl_FragColor = linearToOutputTexel( gl_FragColor );",qy=`
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
}`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
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
}`,iv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
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
#endif`,lv=`#ifdef USE_ENVMAP
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
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fv=`PhysicalMaterial material;
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
#endif`,pv=`struct PhysicalMaterial {
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
}`,mv=`
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
#endif`,gv=`#if defined( RE_IndirectDiffuse )
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wv=`#if defined( USE_POINTS_UV )
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
#endif`,Tv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cv=`#ifdef USE_MORPHNORMALS
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
#endif`,Pv=`#ifdef USE_MORPHTARGETS
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
#endif`,Iv=`#ifdef USE_MORPHTARGETS
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
#endif`,Lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ov=`#ifdef USE_NORMALMAP
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
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qv=`float getShadowMask() {
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
}`,e_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,n_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#ifdef USE_TRANSMISSION
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m_=`uniform sampler2D t2D;
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
}`,M_=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,A_=`uniform vec3 diffuse;
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
}`,R_=`#include <common>
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
}`,C_=`uniform vec3 diffuse;
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
}`,P_=`#define LAMBERT
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
}`,I_=`#define LAMBERT
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
}`,L_=`#define MATCAP
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
}`,D_=`#define MATCAP
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
}`,U_=`#define NORMAL
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
}`,N_=`#define NORMAL
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
}`,H_=`#define PHONG
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
}`,O_=`#define PHONG
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
}`,z_=`#define STANDARD
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
}`,F_=`#define STANDARD
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
}`,B_=`#define TOON
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
}`,k_=`#define TOON
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
}`,G_=`uniform float size;
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
}`,V_=`uniform vec3 diffuse;
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
}`,W_=`#include <common>
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
}`,X_=`uniform vec3 color;
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
}`,q_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:xy,alphamap_pars_fragment:yy,alphatest_fragment:vy,alphatest_pars_fragment:_y,aomap_fragment:My,aomap_pars_fragment:Ey,batching_pars_vertex:by,batching_vertex:Sy,begin_vertex:wy,beginnormal_vertex:Ty,bsdfs:Ay,iridescence_fragment:Ry,bumpmap_pars_fragment:Cy,clipping_planes_fragment:Py,clipping_planes_pars_fragment:Iy,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Dy,color_fragment:Uy,color_pars_fragment:Ny,color_pars_vertex:Hy,color_vertex:Oy,common:zy,cube_uv_reflection_fragment:Fy,defaultnormal_vertex:By,displacementmap_pars_vertex:ky,displacementmap_vertex:Gy,emissivemap_fragment:Vy,emissivemap_pars_fragment:Wy,colorspace_fragment:Xy,colorspace_pars_fragment:qy,envmap_fragment:Zy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:$y,envmap_pars_vertex:Ky,envmap_physical_pars_fragment:lv,envmap_vertex:Jy,fog_vertex:jy,fog_pars_vertex:Qy,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:nv,lightmap_fragment:iv,lightmap_pars_fragment:sv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:ov,lights_pars_begin:av,lights_toon_fragment:cv,lights_toon_pars_fragment:hv,lights_phong_fragment:uv,lights_phong_pars_fragment:dv,lights_physical_fragment:fv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:gv,lights_fragment_end:xv,logdepthbuf_fragment:yv,logdepthbuf_pars_fragment:vv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:Mv,map_fragment:Ev,map_pars_fragment:bv,map_particle_fragment:Sv,map_particle_pars_fragment:wv,metalnessmap_fragment:Tv,metalnessmap_pars_fragment:Av,morphcolor_vertex:Rv,morphnormal_vertex:Cv,morphtarget_pars_vertex:Pv,morphtarget_vertex:Iv,normal_fragment_begin:Lv,normal_fragment_maps:Dv,normal_pars_fragment:Uv,normal_pars_vertex:Nv,normal_vertex:Hv,normalmap_pars_fragment:Ov,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Bv,iridescence_pars_fragment:kv,opaque_fragment:Gv,packing:Vv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:qv,dithering_pars_fragment:Zv,roughnessmap_fragment:Yv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:Kv,shadowmap_pars_vertex:Jv,shadowmap_vertex:jv,shadowmask_pars_fragment:Qv,skinbase_vertex:e_,skinning_pars_vertex:t_,skinning_vertex:n_,skinnormal_vertex:i_,specularmap_fragment:s_,specularmap_pars_fragment:r_,tonemapping_fragment:o_,tonemapping_pars_fragment:a_,transmission_fragment:l_,transmission_pars_fragment:c_,uv_pars_fragment:h_,uv_pars_vertex:u_,uv_vertex:d_,worldpos_vertex:f_,background_vert:p_,background_frag:m_,backgroundCube_vert:g_,backgroundCube_frag:x_,cube_vert:y_,cube_frag:v_,depth_vert:__,depth_frag:M_,distanceRGBA_vert:E_,distanceRGBA_frag:b_,equirect_vert:S_,equirect_frag:w_,linedashed_vert:T_,linedashed_frag:A_,meshbasic_vert:R_,meshbasic_frag:C_,meshlambert_vert:P_,meshlambert_frag:I_,meshmatcap_vert:L_,meshmatcap_frag:D_,meshnormal_vert:U_,meshnormal_frag:N_,meshphong_vert:H_,meshphong_frag:O_,meshphysical_vert:z_,meshphysical_frag:F_,meshtoon_vert:B_,meshtoon_frag:k_,points_vert:G_,points_frag:V_,shadow_vert:W_,shadow_frag:X_,sprite_vert:q_,sprite_frag:Z_},Re={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Ti={basic:{uniforms:Hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Hn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Hn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Hn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Hn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Hn([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Hn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Hn([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Hn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Hn([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Hn([Re.common,Re.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Hn([Re.lights,Re.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ti.physical={uniforms:Hn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};il={r:0,b:0,g:0};Jr=class extends Ll{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gr=4,mp=[.125,.215,.35,.446,.526,.582],$s=20,Oh=new Jr,gp=new Oe,zh=null,Fh=0,Bh=0,Zs=(1+Math.sqrt(5))/2,Hr=1/Zs,xp=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Zs,Hr),new k(0,Zs,-Hr),new k(Hr,0,Zs),new k(-Hr,0,Zs),new k(Zs,Hr,0),new k(-Zs,Hr,0)],jr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){zh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zh,Fh,Bh),e.scissorTest=!1,sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zh=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:oi,minFilter:oi,generateMipmaps:!1,type:vi,format:yi,colorSpace:ji,depthBuffer:!1},s=yp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eM(r)),this._blurMaterial=tM(r,e,t)}return s}_compileMaterial(e){let t=new X(this._lodPlanes[0],e);this._renderer.compile(t,Oh)}_sceneToCubeUV(e,t,i,s){let a=new _n(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(gp),h.toneMapping=gs,h.autoClear=!1;let m=new mt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),g=new X(new fe,m),x=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,x=!0):(m.color.copy(gp),x=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):v===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let y=this._cubeSize;sl(s,v*y,f>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Zr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new X(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;sl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Oh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xp[(s-1)%xp.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new X(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*$s-1),x=r/g,d=isFinite(r)?1+Math.floor(h*x):$s;d>$s&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${$s}`);let f=[],v=0;for(let M=0;M<$s;++M){let S=M/x,b=Math.exp(-S*S/2);f.push(b),M===0?v+=b:M<d&&(v+=2*b)}for(let M=0;M<f.length;M++)f[M]=f[M]/v;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-i;let T=this._sizeLods[s],C=3*T*(s>y-Gr?s-y+Gr:0),_=4*(this._cubeSize-T);sl(t,C,_,3*T,2*T),l.setRenderTarget(t),l.render(u,Oh)}};Ul=class extends li{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:js,h!==js&&h!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===js&&(i=fs),i===void 0&&h===$r&&(i=Js),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},xm=new li,ym=new Ul(1,1);ym.compareFunction=dm;vm=new Al,_m=new su,Mm=new Dl,Mp=[],Ep=[],bp=new Float32Array(16),Sp=new Float32Array(9),wp=new Float32Array(4);au=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=PM(t.type)}},lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KM(t.type)}},cu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},kh=/(\w+)(\])?(\[|\.)?/g;qr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);JM(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};jM=37297,QM=0;l1=/^[ \t]*#include +<([\w\d./]+)>/gm;c1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;v1=0,uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new du(e),t.set(e,i)),i}},du=class{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}};T1=0;fu=class extends Ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pu=class extends Ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},P1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I1=`uniform sampler2D shadow_pass;
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
}`;mu=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},it=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},H1={type:"move"},ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let d=t.getJointPose(x,i),f=this._getHandJoint(c,x);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H1)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new it;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},gu=class extends vs{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,m=null,g=null,x=t.getContextAttributes(),d=null,f=null,v=[],y=[],T=new de,C=null,_=new _n;_.layers.enable(1),_.viewport=new It;let M=new _n;M.layers.enable(2),M.viewport=new It;let S=[_,M],b=new mu;b.layers.enable(1),b.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let q=v[U];return q===void 0&&(q=new ko,v[U]=q),q.getTargetRaySpace()},this.getControllerGrip=function(U){let q=v[U];return q===void 0&&(q=new ko,v[U]=q),q.getGripSpace()},this.getHand=function(U){let q=v[U];return q===void 0&&(q=new ko,v[U]=q),q.getHandSpace()};function V(U){let q=y.indexOf(U.inputSource);if(q===-1)return;let ee=v[q];ee!==void 0&&(ee.update(U.inputSource,U.frame,c||o),ee.dispatchEvent({type:U.type,data:U.inputSource}))}function A(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",A),s.removeEventListener("inputsourceschange",L);for(let U=0;U<v.length;U++){let q=y[U];q!==null&&(y[U]=null,v[U].disconnect(q))}E=null,H=null,e.setRenderTarget(d),m=null,p=null,u=null,s=null,f=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(U){if(s=U,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",A),s.addEventListener("inputsourceschange",L),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let q={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Fn(m.framebufferWidth,m.framebufferHeight,{format:yi,type:xs,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let q=null,ee=null,ue=null;x.depth&&(ue=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=x.stencil?$r:js,ee=x.stencil?Js:fs);let me={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(me),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new Fn(p.textureWidth,p.textureHeight,{format:yi,type:xs,depthTexture:new Ul(p.textureWidth,p.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});let we=e.properties.get(f);we.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Z.setContext(s),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(U){for(let q=0;q<U.removed.length;q++){let ee=U.removed[q],ue=y.indexOf(ee);ue>=0&&(y[ue]=null,v[ue].disconnect(ee))}for(let q=0;q<U.added.length;q++){let ee=U.added[q],ue=y.indexOf(ee);if(ue===-1){for(let we=0;we<v.length;we++)if(we>=y.length){y.push(ee),ue=we;break}else if(y[we]===null){y[we]=ee,ue=we;break}if(ue===-1)break}let me=v[ue];me&&me.connect(ee)}}let w=new k,P=new k;function R(U,q,ee){w.setFromMatrixPosition(q.matrixWorld),P.setFromMatrixPosition(ee.matrixWorld);let ue=w.distanceTo(P),me=q.projectionMatrix.elements,we=ee.projectionMatrix.elements,Ce=me[14]/(me[10]-1),Ee=me[14]/(me[10]+1),Ne=(me[9]+1)/me[5],G=(me[9]-1)/me[5],_e=(me[8]-1)/me[0],re=(we[8]+1)/we[0],ce=Ce*_e,ie=Ce*re,ze=ue/(-_e+re),Le=ze*-_e;q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Le),U.translateZ(ze),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();let N=Ce+ze,D=Ee+ze,$=ce-Le,ve=ie+(ue-Le),ge=Ne*Ee/D*N,pe=G*Ee/D*N;U.projectionMatrix.makePerspective($,ve,ge,pe,N,D),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function F(U,q){q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(s===null)return;b.near=M.near=_.near=U.near,b.far=M.far=_.far=U.far,(E!==b.near||H!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),E=b.near,H=b.far);let q=U.parent,ee=b.cameras;F(b,q);for(let ue=0;ue<ee.length;ue++)F(ee[ue],q);ee.length===2?R(b,_,M):b.projectionMatrix.copy(_.projectionMatrix),B(U,b,q)};function B(U,q,ee){ee===null?U.matrix.copy(q.matrixWorld):(U.matrix.copy(ee.matrixWorld),U.matrix.invert(),U.matrix.multiply(q.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(q.projectionMatrix),U.projectionMatrixInverse.copy(q.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=bl*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(U){l=U,p!==null&&(p.fixedFoveation=U),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=U)};let I=null;function z(U,q){if(h=q.getViewerPose(c||o),g=q,h!==null){let ee=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ue=!1;ee.length!==b.cameras.length&&(b.cameras.length=0,ue=!0);for(let me=0;me<ee.length;me++){let we=ee[me],Ce=null;if(m!==null)Ce=m.getViewport(we);else{let Ne=u.getViewSubImage(p,we);Ce=Ne.viewport,me===0&&(e.setRenderTargetTextures(f,Ne.colorTexture,p.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(f))}let Ee=S[me];Ee===void 0&&(Ee=new _n,Ee.layers.enable(me),Ee.viewport=new It,S[me]=Ee),Ee.matrix.fromArray(we.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(we.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),me===0&&(b.matrix.copy(Ee.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ue===!0&&b.cameras.push(Ee)}}for(let ee=0;ee<v.length;ee++){let ue=y[ee],me=v[ee];ue!==null&&me!==void 0&&me.update(ue,q,c||o)}I&&I(U,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}let Z=new gm;Z.setAnimationLoop(z),this.setAnimationLoop=function(U){I=U},this.dispose=function(){}}};Yo=class{constructor(e={}){let{canvas:t=Yx(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),g=new Int32Array(4),x=null,d=null,f=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=gs,this.toneMappingExposure=1;let y=this,T=!1,C=0,_=0,M=null,S=-1,b=null,E=new It,H=new It,V=null,A=new Oe(0),L=0,w=t.width,P=t.height,R=1,F=null,B=null,I=new It(0,0,w,P),z=new It(0,0,w,P),Z=!1,U=new Zo,q=!1,ee=!1,ue=null,me=new gt,we=new de,Ce=new k,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return M===null?R:1}let G=i;function _e(O,Y){for(let Q=0;Q<O.length;Q++){let ne=O[Q],J=t.getContext(ne,Y);if(J!==null)return J}return null}try{let O={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",te,!1),G===null){let Y=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&Y.shift(),G=_e(Y,O),G===null)throw _e(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let re,ce,ie,ze,Le,N,D,$,ve,ge,pe,Fe,Ae,Ue,Xe,Je,ye,pt,ot,Ye,We,K,oe,Me;function Pe(){re=new iM(G),ce=new J_(G,re,e),re.init(ce),K=new N1(G,re,ce),ie=new D1(G,re,ce),ze=new oM(G),Le=new M1,N=new U1(G,re,ie,Le,ce,K,ze),D=new Q_(y),$=new nM(y),ve=new py(G,ce),oe=new $_(G,re,ve,ce),ge=new sM(G,ve,ze,oe),pe=new hM(G,ge,ve,ze),ot=new cM(G,ce,N),Je=new j_(Le),Fe=new _1(y,D,$,re,ce,oe,Je),Ae=new O1(y,Le),Ue=new b1,Xe=new C1(re,ce),pt=new Y_(y,D,$,ie,pe,p,l),ye=new L1(y,pe,ce),Me=new z1(G,ze,ce,ie),Ye=new K_(G,re,ze,ce),We=new rM(G,re,ze,ce),ze.programs=Fe.programs,y.capabilities=ce,y.extensions=re,y.properties=Le,y.renderLists=Ue,y.shadowMap=ye,y.state=ie,y.info=ze}Pe();let Ie=new gu(y,G);this.xr=Ie,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let O=re.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=re.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(O){O!==void 0&&(R=O,this.setSize(w,P,!1))},this.getSize=function(O){return O.set(w,P)},this.setSize=function(O,Y,Q=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=O,P=Y,t.width=Math.floor(O*R),t.height=Math.floor(Y*R),Q===!0&&(t.style.width=O+"px",t.style.height=Y+"px"),this.setViewport(0,0,O,Y)},this.getDrawingBufferSize=function(O){return O.set(w*R,P*R).floor()},this.setDrawingBufferSize=function(O,Y,Q){w=O,P=Y,R=Q,t.width=Math.floor(O*Q),t.height=Math.floor(Y*Q),this.setViewport(0,0,O,Y)},this.getCurrentViewport=function(O){return O.copy(E)},this.getViewport=function(O){return O.copy(I)},this.setViewport=function(O,Y,Q,ne){O.isVector4?I.set(O.x,O.y,O.z,O.w):I.set(O,Y,Q,ne),ie.viewport(E.copy(I).multiplyScalar(R).floor())},this.getScissor=function(O){return O.copy(z)},this.setScissor=function(O,Y,Q,ne){O.isVector4?z.set(O.x,O.y,O.z,O.w):z.set(O,Y,Q,ne),ie.scissor(H.copy(z).multiplyScalar(R).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(O){ie.setScissorTest(Z=O)},this.setOpaqueSort=function(O){F=O},this.setTransparentSort=function(O){B=O},this.getClearColor=function(O){return O.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(O=!0,Y=!0,Q=!0){let ne=0;if(O){let J=!1;if(M!==null){let He=M.texture.format;J=He===lm||He===am||He===om}if(J){let He=M.texture.type,Ve=He===xs||He===fs||He===Zu||He===Js||He===sm||He===rm,qe=pt.getClearColor(),$e=pt.getClearAlpha(),at=qe.r,et=qe.g,tt=qe.b;Ve?(m[0]=at,m[1]=et,m[2]=tt,m[3]=$e,G.clearBufferuiv(G.COLOR,0,m)):(g[0]=at,g[1]=et,g[2]=tt,g[3]=$e,G.clearBufferiv(G.COLOR,0,g))}else ne|=G.COLOR_BUFFER_BIT}Y&&(ne|=G.DEPTH_BUFFER_BIT),Q&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ue.dispose(),Xe.dispose(),Le.dispose(),D.dispose(),$.dispose(),pe.dispose(),oe.dispose(),Me.dispose(),Fe.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",At),Ie.removeEventListener("sessionend",ht),ue&&(ue.dispose(),ue=null),Qt.stop()};function se(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let O=ze.autoReset,Y=ye.enabled,Q=ye.autoUpdate,ne=ye.needsUpdate,J=ye.type;Pe(),ze.autoReset=O,ye.enabled=Y,ye.autoUpdate=Q,ye.needsUpdate=ne,ye.type=J}function te(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function he(O){let Y=O.target;Y.removeEventListener("dispose",he),be(Y)}function be(O){xe(O),Le.remove(O)}function xe(O){let Y=Le.get(O).programs;Y!==void 0&&(Y.forEach(function(Q){Fe.releaseProgram(Q)}),O.isShaderMaterial&&Fe.releaseShaderCache(O))}this.renderBufferDirect=function(O,Y,Q,ne,J,He){Y===null&&(Y=Ee);let Ve=J.isMesh&&J.matrixWorld.determinant()<0,qe=Yg(O,Y,Q,ne,J);ie.setMaterial(ne,Ve);let $e=Q.index,at=1;if(ne.wireframe===!0){if($e=ge.getWireframeAttribute(Q),$e===void 0)return;at=2}let et=Q.drawRange,tt=Q.attributes.position,en=et.start*at,Kn=(et.start+et.count)*at;He!==null&&(en=Math.max(en,He.start*at),Kn=Math.min(Kn,(He.start+He.count)*at)),$e!==null?(en=Math.max(en,0),Kn=Math.min(Kn,$e.count)):tt!=null&&(en=Math.max(en,0),Kn=Math.min(Kn,tt.count));let un=Kn-en;if(un<0||un===1/0)return;oe.setup(J,ne,qe,Q,$e);let ki,Vt=Ye;if($e!==null&&(ki=ve.get($e),Vt=We,Vt.setIndex(ki)),J.isMesh)ne.wireframe===!0?(ie.setLineWidth(ne.wireframeLinewidth*Ne()),Vt.setMode(G.LINES)):Vt.setMode(G.TRIANGLES);else if(J.isLine){let lt=ne.linewidth;lt===void 0&&(lt=1),ie.setLineWidth(lt*Ne()),J.isLineSegments?Vt.setMode(G.LINES):J.isLineLoop?Vt.setMode(G.LINE_LOOP):Vt.setMode(G.LINE_STRIP)}else J.isPoints?Vt.setMode(G.POINTS):J.isSprite&&Vt.setMode(G.TRIANGLES);if(J.isBatchedMesh)Vt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Vt.renderInstances(en,un,J.count);else if(Q.isInstancedBufferGeometry){let lt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,oh=Math.min(Q.instanceCount,lt);Vt.renderInstances(en,un,oh)}else Vt.render(en,un)};function je(O,Y,Q){O.transparent===!0&&O.side===wt&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,Ha(O,Y,Q),O.side=ys,O.needsUpdate=!0,Ha(O,Y,Q),O.side=wt):Ha(O,Y,Q)}this.compile=function(O,Y,Q=null){Q===null&&(Q=O),d=Xe.get(Q),d.init(),v.push(d),Q.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),O!==Q&&O.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(d.pushLight(J),J.castShadow&&d.pushShadow(J))}),d.setupLights(y._useLegacyLights);let ne=new Set;return O.traverse(function(J){let He=J.material;if(He)if(Array.isArray(He))for(let Ve=0;Ve<He.length;Ve++){let qe=He[Ve];je(qe,Q,J),ne.add(qe)}else je(He,Q,J),ne.add(He)}),v.pop(),d=null,ne},this.compileAsync=function(O,Y,Q=null){let ne=this.compile(O,Y,Q);return new Promise(J=>{function He(){if(ne.forEach(function(Ve){Le.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){J(O);return}setTimeout(He,10)}re.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Qe=null;function bt(O){Qe&&Qe(O)}function At(){Qt.stop()}function ht(){Qt.start()}let Qt=new gm;Qt.setAnimationLoop(bt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(O){Qe=O,Ie.setAnimationLoop(O),O===null?Qt.stop():Qt.start()},Ie.addEventListener("sessionstart",At),Ie.addEventListener("sessionend",ht),this.render=function(O,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(Y),Y=Ie.getCamera()),O.isScene===!0&&O.onBeforeRender(y,O,Y,M),d=Xe.get(O,v.length),d.init(),v.push(d),me.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),U.setFromProjectionMatrix(me),ee=this.localClippingEnabled,q=Je.init(this.clippingPlanes,ee),x=Ue.get(O,f.length),x.init(),f.push(x),$n(O,Y,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(F,B),this.info.render.frame++,q===!0&&Je.beginShadows();let Q=d.state.shadowsArray;if(ye.render(Q,O,Y),q===!0&&Je.endShadows(),this.info.autoReset===!0&&this.info.reset(),pt.render(x,O),d.setupLights(y._useLegacyLights),Y.isArrayCamera){let ne=Y.cameras;for(let J=0,He=ne.length;J<He;J++){let Ve=ne[J];_r(x,O,Ve,Ve.viewport)}}else _r(x,O,Y);M!==null&&(N.updateMultisampleRenderTarget(M),N.updateRenderTargetMipmap(M)),O.isScene===!0&&O.onAfterRender(y,O,Y),oe.resetDefaultState(),S=-1,b=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function $n(O,Y,Q,ne){if(O.visible===!1)return;if(O.layers.test(Y.layers)){if(O.isGroup)Q=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Y);else if(O.isLight)d.pushLight(O),O.castShadow&&d.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||U.intersectsSprite(O)){ne&&Ce.setFromMatrixPosition(O.matrixWorld).applyMatrix4(me);let Ve=pe.update(O),qe=O.material;qe.visible&&x.push(O,Ve,qe,Q,Ce.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||U.intersectsObject(O))){let Ve=pe.update(O),qe=O.material;if(ne&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Ce.copy(O.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ce.copy(Ve.boundingSphere.center)),Ce.applyMatrix4(O.matrixWorld).applyMatrix4(me)),Array.isArray(qe)){let $e=Ve.groups;for(let at=0,et=$e.length;at<et;at++){let tt=$e[at],en=qe[tt.materialIndex];en&&en.visible&&x.push(O,Ve,en,Q,Ce.z,tt)}}else qe.visible&&x.push(O,Ve,qe,Q,Ce.z,null)}}let He=O.children;for(let Ve=0,qe=He.length;Ve<qe;Ve++)$n(He[Ve],Y,Q,ne)}function _r(O,Y,Q,ne){let J=O.opaque,He=O.transmissive,Ve=O.transparent;d.setupLightsView(Q),q===!0&&Je.setGlobalState(y.clippingPlanes,Q),He.length>0&&Ro(J,He,Y,Q),ne&&ie.viewport(E.copy(ne)),J.length>0&&Na(J,Y,Q),He.length>0&&Na(He,Y,Q),Ve.length>0&&Na(Ve,Y,Q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ro(O,Y,Q,ne){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let He=ce.isWebGL2;ue===null&&(ue=new Fn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")?vi:xs,minFilter:Xo,samples:He?4:0})),y.getDrawingBufferSize(we),He?ue.setSize(we.x,we.y):ue.setSize(nu(we.x),nu(we.y));let Ve=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(A),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let qe=y.toneMapping;y.toneMapping=gs,Na(O,Q,ne),N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue);let $e=!1;for(let at=0,et=Y.length;at<et;at++){let tt=Y[at],en=tt.object,Kn=tt.geometry,un=tt.material,ki=tt.group;if(un.side===wt&&en.layers.test(ne.layers)){let Vt=un.side;un.side=pn,un.needsUpdate=!0,uf(en,Q,ne,Kn,un,ki),un.side=Vt,un.needsUpdate=!0,$e=!0}}$e===!0&&(N.updateMultisampleRenderTarget(ue),N.updateRenderTargetMipmap(ue)),y.setRenderTarget(Ve),y.setClearColor(A,L),y.toneMapping=qe}function Na(O,Y,Q){let ne=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,He=O.length;J<He;J++){let Ve=O[J],qe=Ve.object,$e=Ve.geometry,at=ne===null?Ve.material:ne,et=Ve.group;qe.layers.test(Q.layers)&&uf(qe,Y,Q,$e,at,et)}}function uf(O,Y,Q,ne,J,He){O.onBeforeRender(y,Y,Q,ne,J,He),O.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),J.onBeforeRender(y,Y,Q,ne,O,He),J.transparent===!0&&J.side===wt&&J.forceSinglePass===!1?(J.side=pn,J.needsUpdate=!0,y.renderBufferDirect(Q,Y,ne,J,O,He),J.side=ys,J.needsUpdate=!0,y.renderBufferDirect(Q,Y,ne,J,O,He),J.side=wt):y.renderBufferDirect(Q,Y,ne,J,O,He),O.onAfterRender(y,Y,Q,ne,J,He)}function Ha(O,Y,Q){Y.isScene!==!0&&(Y=Ee);let ne=Le.get(O),J=d.state.lights,He=d.state.shadowsArray,Ve=J.state.version,qe=Fe.getParameters(O,J.state,He,Y,Q),$e=Fe.getProgramCacheKey(qe),at=ne.programs;ne.environment=O.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(O.isMeshStandardMaterial?$:D).get(O.envMap||ne.environment),at===void 0&&(O.addEventListener("dispose",he),at=new Map,ne.programs=at);let et=at.get($e);if(et!==void 0){if(ne.currentProgram===et&&ne.lightsStateVersion===Ve)return ff(O,qe),et}else qe.uniforms=Fe.getUniforms(O),O.onBuild(Q,qe,y),O.onBeforeCompile(qe,y),et=Fe.acquireProgram(qe,$e),at.set($e,et),ne.uniforms=qe.uniforms;let tt=ne.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(tt.clippingPlanes=Je.uniform),ff(O,qe),ne.needsLights=Kg(O),ne.lightsStateVersion=Ve,ne.needsLights&&(tt.ambientLightColor.value=J.state.ambient,tt.lightProbe.value=J.state.probe,tt.directionalLights.value=J.state.directional,tt.directionalLightShadows.value=J.state.directionalShadow,tt.spotLights.value=J.state.spot,tt.spotLightShadows.value=J.state.spotShadow,tt.rectAreaLights.value=J.state.rectArea,tt.ltc_1.value=J.state.rectAreaLTC1,tt.ltc_2.value=J.state.rectAreaLTC2,tt.pointLights.value=J.state.point,tt.pointLightShadows.value=J.state.pointShadow,tt.hemisphereLights.value=J.state.hemi,tt.directionalShadowMap.value=J.state.directionalShadowMap,tt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,tt.spotShadowMap.value=J.state.spotShadowMap,tt.spotLightMatrix.value=J.state.spotLightMatrix,tt.spotLightMap.value=J.state.spotLightMap,tt.pointShadowMap.value=J.state.pointShadowMap,tt.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.currentProgram=et,ne.uniformsList=null,et}function df(O){if(O.uniformsList===null){let Y=O.currentProgram.getUniforms();O.uniformsList=qr.seqWithValue(Y.seq,O.uniforms)}return O.uniformsList}function ff(O,Y){let Q=Le.get(O);Q.outputColorSpace=Y.outputColorSpace,Q.batching=Y.batching,Q.instancing=Y.instancing,Q.instancingColor=Y.instancingColor,Q.skinning=Y.skinning,Q.morphTargets=Y.morphTargets,Q.morphNormals=Y.morphNormals,Q.morphColors=Y.morphColors,Q.morphTargetsCount=Y.morphTargetsCount,Q.numClippingPlanes=Y.numClippingPlanes,Q.numIntersection=Y.numClipIntersection,Q.vertexAlphas=Y.vertexAlphas,Q.vertexTangents=Y.vertexTangents,Q.toneMapping=Y.toneMapping}function Yg(O,Y,Q,ne,J){Y.isScene!==!0&&(Y=Ee),N.resetTextureUnits();let He=Y.fog,Ve=ne.isMeshStandardMaterial?Y.environment:null,qe=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ji,$e=(ne.isMeshStandardMaterial?$:D).get(ne.envMap||Ve),at=ne.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,et=!!Q.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),tt=!!Q.morphAttributes.position,en=!!Q.morphAttributes.normal,Kn=!!Q.morphAttributes.color,un=gs;ne.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(un=y.toneMapping);let ki=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Vt=ki!==void 0?ki.length:0,lt=Le.get(ne),oh=d.state.lights;if(q===!0&&(ee===!0||O!==b)){let si=O===b&&ne.id===S;Je.setState(ne,O,si)}let Yt=!1;ne.version===lt.__version?(lt.needsLights&&lt.lightsStateVersion!==oh.state.version||lt.outputColorSpace!==qe||J.isBatchedMesh&&lt.batching===!1||!J.isBatchedMesh&&lt.batching===!0||J.isInstancedMesh&&lt.instancing===!1||!J.isInstancedMesh&&lt.instancing===!0||J.isSkinnedMesh&&lt.skinning===!1||!J.isSkinnedMesh&&lt.skinning===!0||J.isInstancedMesh&&lt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&lt.instancingColor===!1&&J.instanceColor!==null||lt.envMap!==$e||ne.fog===!0&&lt.fog!==He||lt.numClippingPlanes!==void 0&&(lt.numClippingPlanes!==Je.numPlanes||lt.numIntersection!==Je.numIntersection)||lt.vertexAlphas!==at||lt.vertexTangents!==et||lt.morphTargets!==tt||lt.morphNormals!==en||lt.morphColors!==Kn||lt.toneMapping!==un||ce.isWebGL2===!0&&lt.morphTargetsCount!==Vt)&&(Yt=!0):(Yt=!0,lt.__version=ne.version);let ks=lt.currentProgram;Yt===!0&&(ks=Ha(ne,Y,J));let pf=!1,Co=!1,ah=!1,Rn=ks.getUniforms(),Gs=lt.uniforms;if(ie.useProgram(ks.program)&&(pf=!0,Co=!0,ah=!0),ne.id!==S&&(S=ne.id,Co=!0),pf||b!==O){Rn.setValue(G,"projectionMatrix",O.projectionMatrix),Rn.setValue(G,"viewMatrix",O.matrixWorldInverse);let si=Rn.map.cameraPosition;si!==void 0&&si.setValue(G,Ce.setFromMatrixPosition(O.matrixWorld)),ce.logarithmicDepthBuffer&&Rn.setValue(G,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Rn.setValue(G,"isOrthographic",O.isOrthographicCamera===!0),b!==O&&(b=O,Co=!0,ah=!0)}if(J.isSkinnedMesh){Rn.setOptional(G,J,"bindMatrix"),Rn.setOptional(G,J,"bindMatrixInverse");let si=J.skeleton;si&&(ce.floatVertexTextures?(si.boneTexture===null&&si.computeBoneTexture(),Rn.setValue(G,"boneTexture",si.boneTexture,N)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Rn.setOptional(G,J,"batchingTexture"),Rn.setValue(G,"batchingTexture",J._matricesTexture,N));let lh=Q.morphAttributes;if((lh.position!==void 0||lh.normal!==void 0||lh.color!==void 0&&ce.isWebGL2===!0)&&ot.update(J,Q,ks),(Co||lt.receiveShadow!==J.receiveShadow)&&(lt.receiveShadow=J.receiveShadow,Rn.setValue(G,"receiveShadow",J.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Gs.envMap.value=$e,Gs.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Co&&(Rn.setValue(G,"toneMappingExposure",y.toneMappingExposure),lt.needsLights&&$g(Gs,ah),He&&ne.fog===!0&&Ae.refreshFogUniforms(Gs,He),Ae.refreshMaterialUniforms(Gs,ne,R,P,ue),qr.upload(G,df(lt),Gs,N)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(qr.upload(G,df(lt),Gs,N),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Rn.setValue(G,"center",J.center),Rn.setValue(G,"modelViewMatrix",J.modelViewMatrix),Rn.setValue(G,"normalMatrix",J.normalMatrix),Rn.setValue(G,"modelMatrix",J.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let si=ne.uniformsGroups;for(let ch=0,Jg=si.length;ch<Jg;ch++)if(ce.isWebGL2){let mf=si[ch];Me.update(mf,ks),Me.bind(mf,ks)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ks}function $g(O,Y){O.ambientLightColor.needsUpdate=Y,O.lightProbe.needsUpdate=Y,O.directionalLights.needsUpdate=Y,O.directionalLightShadows.needsUpdate=Y,O.pointLights.needsUpdate=Y,O.pointLightShadows.needsUpdate=Y,O.spotLights.needsUpdate=Y,O.spotLightShadows.needsUpdate=Y,O.rectAreaLights.needsUpdate=Y,O.hemisphereLights.needsUpdate=Y}function Kg(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(O,Y,Q){Le.get(O.texture).__webglTexture=Y,Le.get(O.depthTexture).__webglTexture=Q;let ne=Le.get(O);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=Q===void 0,ne.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(O,Y){let Q=Le.get(O);Q.__webglFramebuffer=Y,Q.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(O,Y=0,Q=0){M=O,C=Y,_=Q;let ne=!0,J=null,He=!1,Ve=!1;if(O){let $e=Le.get(O);$e.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(G.FRAMEBUFFER,null),ne=!1):$e.__webglFramebuffer===void 0?N.setupRenderTarget(O):$e.__hasExternalTextures&&N.rebindTextures(O,Le.get(O.texture).__webglTexture,Le.get(O.depthTexture).__webglTexture);let at=O.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ve=!0);let et=Le.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(et[Y])?J=et[Y][Q]:J=et[Y],He=!0):ce.isWebGL2&&O.samples>0&&N.useMultisampledRTT(O)===!1?J=Le.get(O).__webglMultisampledFramebuffer:Array.isArray(et)?J=et[Q]:J=et,E.copy(O.viewport),H.copy(O.scissor),V=O.scissorTest}else E.copy(I).multiplyScalar(R).floor(),H.copy(z).multiplyScalar(R).floor(),V=Z;if(ie.bindFramebuffer(G.FRAMEBUFFER,J)&&ce.drawBuffers&&ne&&ie.drawBuffers(O,J),ie.viewport(E),ie.scissor(H),ie.setScissorTest(V),He){let $e=Le.get(O.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$e.__webglTexture,Q)}else if(Ve){let $e=Le.get(O.texture),at=Y||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,$e.__webglTexture,Q||0,at)}S=-1},this.readRenderTargetPixels=function(O,Y,Q,ne,J,He,Ve){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Le.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){ie.bindFramebuffer(G.FRAMEBUFFER,qe);try{let $e=O.texture,at=$e.format,et=$e.type;if(at!==yi&&K.convert(at)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let tt=et===vi&&(re.has("EXT_color_buffer_half_float")||ce.isWebGL2&&re.has("EXT_color_buffer_float"));if(et!==xs&&K.convert(et)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(et===ps&&(ce.isWebGL2||re.has("OES_texture_float")||re.has("WEBGL_color_buffer_float")))&&!tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=O.width-ne&&Q>=0&&Q<=O.height-J&&G.readPixels(Y,Q,ne,J,K.convert(at),K.convert(et),He)}finally{let $e=M!==null?Le.get(M).__webglFramebuffer:null;ie.bindFramebuffer(G.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(O,Y,Q=0){let ne=Math.pow(2,-Q),J=Math.floor(Y.image.width*ne),He=Math.floor(Y.image.height*ne);N.setTexture2D(Y,0),G.copyTexSubImage2D(G.TEXTURE_2D,Q,0,0,O.x,O.y,J,He),ie.unbindTexture()},this.copyTextureToTexture=function(O,Y,Q,ne=0){let J=Y.image.width,He=Y.image.height,Ve=K.convert(Q.format),qe=K.convert(Q.type);N.setTexture2D(Q,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment),Y.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ne,O.x,O.y,J,He,Ve,qe,Y.image.data):Y.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ne,O.x,O.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ve,Y.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,ne,O.x,O.y,Ve,qe,Y.image),ne===0&&Q.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(O,Y,Q,ne,J=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let He=O.max.x-O.min.x+1,Ve=O.max.y-O.min.y+1,qe=O.max.z-O.min.z+1,$e=K.convert(ne.format),at=K.convert(ne.type),et;if(ne.isData3DTexture)N.setTexture3D(ne,0),et=G.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)N.setTexture2DArray(ne,0),et=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,ne.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,ne.unpackAlignment);let tt=G.getParameter(G.UNPACK_ROW_LENGTH),en=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Kn=G.getParameter(G.UNPACK_SKIP_PIXELS),un=G.getParameter(G.UNPACK_SKIP_ROWS),ki=G.getParameter(G.UNPACK_SKIP_IMAGES),Vt=Q.isCompressedTexture?Q.mipmaps[J]:Q.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,Vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,O.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,O.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,O.min.z),Q.isDataTexture||Q.isData3DTexture?G.texSubImage3D(et,J,Y.x,Y.y,Y.z,He,Ve,qe,$e,at,Vt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(et,J,Y.x,Y.y,Y.z,He,Ve,qe,$e,Vt.data)):G.texSubImage3D(et,J,Y.x,Y.y,Y.z,He,Ve,qe,$e,at,Vt),G.pixelStorei(G.UNPACK_ROW_LENGTH,tt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,en),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Kn),G.pixelStorei(G.UNPACK_SKIP_ROWS,un),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ki),J===0&&ne.generateMipmaps&&G.generateMipmap(et),ie.unbindTexture()},this.initTexture=function(O){O.isCubeTexture?N.setTextureCube(O,0):O.isData3DTexture?N.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?N.setTexture2DArray(O,0):N.setTexture2D(O,0),ie.unbindTexture()},this.resetState=function(){C=0,_=0,M=null,ie.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Yu?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===ec?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Qs:hm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qs?vt:ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},xu=class extends Yo{};xu.prototype.isWebGL1Renderer=!0;Nl=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Oe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qr=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Hl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Nn=new k,$o=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),i=Ct(i,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},er=class extends Ri{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Uo=new k,zr=new k,Fr=new k,Br=new de,No=new de,Em=new gt,rl=new k,Ho=new k,ol=new k,Hp=new de,Gh=new de,Op=new de,eo=class extends Kt{constructor(e=new er){if(super(),this.isSprite=!0,this.type="Sprite",Or===void 0){Or=new Ut;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hl(t,5);Or.setIndex([0,1,2,0,2,3]),Or.setAttribute("position",new $o(i,3,0,!1)),Or.setAttribute("uv",new $o(i,2,3,!1))}this.geometry=Or,this.material=e,this.center=new de(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zr.setFromMatrixScale(this.matrixWorld),Em.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Fr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zr.multiplyScalar(-Fr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;al(rl.set(-.5,-.5,0),Fr,o,zr,s,r),al(Ho.set(.5,-.5,0),Fr,o,zr,s,r),al(ol.set(.5,.5,0),Fr,o,zr,s,r),Hp.set(0,0),Gh.set(1,0),Op.set(1,1);let a=e.ray.intersectTriangle(rl,Ho,ol,!1,Uo);if(a===null&&(al(Ho.set(-.5,.5,0),Fr,o,zr,s,r),Gh.set(0,1),a=e.ray.intersectTriangle(rl,ol,Ho,!1,Uo),a===null))return;let l=e.ray.origin.distanceTo(Uo);l<e.near||l>e.far||t.push({distance:l,point:Uo.clone(),uv:Ks.getInterpolation(Uo,rl,Ho,ol,Hp,Gh,Op,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ko=class extends mn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},kr=new gt,zp=new gt,ll=[],Fp=new Qi,F1=new gt,Oo=new X,zo=new es,_t=class extends X{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,F1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),Fp.copy(e.boundingBox).applyMatrix4(kr),this.boundingBox.union(Fp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kr),zo.copy(e.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(zo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Oo.geometry=this.geometry,Oo.material=this.material,Oo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zo.copy(this.boundingSphere),zo.applyMatrix4(i),e.ray.intersectsSphere(zo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),zp.multiplyMatrices(i,kr),Oo.matrixWorld=zp,Oo.raycast(e,ll);for(let o=0,a=ll.length;o<a;o++){let l=ll[o];l.instanceId=r,l.object=this,t.push(l)}ll.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Jo=class extends Ri{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bp=new k,kp=new k,Gp=new gt,Vh=new qo,cl=new es,yu=class extends Kt{constructor(e=new Ut,t=new Jo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Bp.fromBufferAttribute(t,s-1),kp.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bp.distanceTo(kp);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(s),cl.radius+=r,e.ray.intersectsSphere(cl)===!1)return;Gp.copy(s).invert(),Vh.copy(e.ray).applyMatrix4(Gp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new k,h=new k,u=new k,p=new k,m=this.isLineSegments?2:1,g=i.index,d=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let y=f,T=v-1;y<T;y+=m){let C=g.getX(y),_=g.getX(y+1);if(c.fromBufferAttribute(d,C),h.fromBufferAttribute(d,_),Vh.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);let S=e.ray.origin.distanceTo(p);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let y=f,T=v-1;y<T;y+=m){if(c.fromBufferAttribute(d,y),h.fromBufferAttribute(d,y+1),Vh.distanceSqToSegment(c,h,p,u)>l)continue;p.applyMatrix4(this.matrixWorld);let _=e.ray.origin.distanceTo(p);_<e.near||_>e.far||t.push({distance:_,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Vp=new k,Wp=new k,Ol=class extends yu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Vp.fromBufferAttribute(t,s),Wp.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Vp.distanceTo(Wp);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},jo=class extends Ri{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xp=new gt,vu=new qo,hl=new es,ul=new k,zl=class extends Kt{constructor(e=new Ut,t=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(s),hl.radius+=r,e.ray.intersectsSphere(hl)===!1)return;Xp.copy(s).invert(),vu.copy(e.ray).applyMatrix4(Xp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=p,x=m;g<x;g++){let d=c.getX(g);ul.fromBufferAttribute(u,d),qp(ul,d,l,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=p,x=m;g<x;g++)ul.fromBufferAttribute(u,g),qp(ul,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};cn=class extends li{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new de:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new k,s=[],r=[],o=[],a=new k,l=new gt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(fn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(fn(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Qo=class extends ci{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new de,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},_u=class extends Qo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};dl=new k,Wh=new Ku,Xh=new Ku,qh=new Ku,Mu=class extends ci{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(dl.subVectors(s[0],s[1]).add(s[0]),c=dl);let u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(dl.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=dl),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),x=Math.pow(u.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);x<1e-4&&(x=1),g<1e-4&&(g=x),d<1e-4&&(d=x),Wh.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,x,d),Xh.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,x,d),qh.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,x,d)}else this.curveType==="catmullrom"&&(Wh.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Xh.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),qh.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return i.set(Wh.calc(l),Xh.calc(l),qh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Fl=class extends ci{constructor(e=new de,t=new de,i=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,s.x,r.x,o.x,a.x),Vo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Eu=class extends ci{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,s.x,r.x,o.x,a.x),Vo(e,s.y,r.y,o.y,a.y),Vo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bl=class extends ci{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bu=class extends ci{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kl=class extends ci{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Go(e,s.x,r.x,o.x),Go(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Su=class extends ci{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Go(e,s.x,r.x,o.x),Go(e,s.y,r.y,o.y),Go(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gl=class extends ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(Zp(a,l.x,c.x,h.x,u.x),Zp(a,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},wu=Object.freeze({__proto__:null,ArcCurve:_u,CatmullRomCurve3:Mu,CubicBezierCurve:Fl,CubicBezierCurve3:Eu,EllipseCurve:Qo,LineCurve:Bl,LineCurve3:bu,QuadraticBezierCurve:kl,QuadraticBezierCurve3:Su,SplineCurve:Gl}),Tu=class extends ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wu[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new wu[s.type]().fromJSON(s))}return this}},Ci=class extends Tu{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Bl(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new kl(this.currentPoint.clone(),new de(e,t),new de(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Fl(this.currentPoint.clone(),new de(e,t),new de(i,s),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Gl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Qo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Au=class n extends Ut{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=fn(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new k,p=new de,m=new k,g=new k,x=new k,d=0,f=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:d=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,m.x=f*1,m.y=-d,m.z=f*0,x.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:d=e[v+1].x-e[v].x,f=e[v+1].y-e[v].y,m.x=f*1,m.y=-d,m.z=f*0,g.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),l.push(m.x,m.y,m.z),x.copy(g)}for(let v=0;v<=t;v++){let y=i+v*h*s,T=Math.sin(y),C=Math.cos(y);for(let _=0;_<=e.length-1;_++){u.x=e[_].x*T,u.y=e[_].y,u.z=e[_].x*C,o.push(u.x,u.y,u.z),p.x=v/t,p.y=_/(e.length-1),a.push(p.x,p.y);let M=l[3*_+0]*T,S=l[3*_+1],b=l[3*_+0]*C;c.push(M,S,b)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let T=y+v*e.length,C=T,_=T+e.length,M=T+e.length+1,S=T+1;r.push(C,_,S),r.push(M,S,_)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Vl=class n extends Au{constructor(e=1,t=1,i=4,s=8){let r=new Ci;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Pi=class n extends Ut{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new k,h=new de;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let m=i+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Be=class n extends Ut{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],m=[],g=0,x=[],d=i/2,f=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(m,2));function v(){let T=new k,C=new k,_=0,M=(t-e)/i;for(let S=0;S<=r;S++){let b=[],E=S/r,H=E*(t-e)+e;for(let V=0;V<=s;V++){let A=V/s,L=A*l+a,w=Math.sin(L),P=Math.cos(L);C.x=H*w,C.y=-E*i+d,C.z=H*P,u.push(C.x,C.y,C.z),T.set(w,M,P).normalize(),p.push(T.x,T.y,T.z),m.push(A,1-E),b.push(g++)}x.push(b)}for(let S=0;S<s;S++)for(let b=0;b<r;b++){let E=x[b][S],H=x[b+1][S],V=x[b+1][S+1],A=x[b][S+1];h.push(E,H,A),h.push(H,V,A),_+=6}c.addGroup(f,_,0),f+=_}function y(T){let C=g,_=new de,M=new k,S=0,b=T===!0?e:t,E=T===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,d*E,0),p.push(0,E,0),m.push(.5,.5),g++;let H=g;for(let V=0;V<=s;V++){let L=V/s*l+a,w=Math.cos(L),P=Math.sin(L);M.x=b*P,M.y=d*E,M.z=b*w,u.push(M.x,M.y,M.z),p.push(0,E,0),_.x=w*.5+.5,_.y=P*.5*E+.5,m.push(_.x,_.y),g++}for(let V=0;V<s;V++){let A=C+V,L=H+V;T===!0?h.push(L,L+1,A):h.push(L+1,L,A),S+=3}c.addGroup(f,S,T===!0?1:2),f+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_s=class n extends Be{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wl=class n extends Ut{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new k,T=new k,C=new k;for(let _=0;_<t.length;_+=3)m(t[_+0],y),m(t[_+1],T),m(t[_+2],C),l(y,T,C,v)}function l(v,y,T,C){let _=C+1,M=[];for(let S=0;S<=_;S++){M[S]=[];let b=v.clone().lerp(T,S/_),E=y.clone().lerp(T,S/_),H=_-S;for(let V=0;V<=H;V++)V===0&&S===_?M[S][V]=b:M[S][V]=b.clone().lerp(E,V/H)}for(let S=0;S<_;S++)for(let b=0;b<2*(_-S)-1;b++){let E=Math.floor(b/2);b%2===0?(p(M[S][E+1]),p(M[S+1][E]),p(M[S][E])):(p(M[S][E+1]),p(M[S+1][E+1]),p(M[S+1][E]))}}function c(v){let y=new k;for(let T=0;T<r.length;T+=3)y.x=r[T+0],y.y=r[T+1],y.z=r[T+2],y.normalize().multiplyScalar(v),r[T+0]=y.x,r[T+1]=y.y,r[T+2]=y.z}function h(){let v=new k;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];let T=d(v)/2/Math.PI+.5,C=f(v)/Math.PI+.5;o.push(T,1-C)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],T=o[v+2],C=o[v+4],_=Math.max(y,T,C),M=Math.min(y,T,C);_>.9&&M<.1&&(y<.2&&(o[v+0]+=1),T<.2&&(o[v+2]+=1),C<.2&&(o[v+4]+=1))}}function p(v){r.push(v.x,v.y,v.z)}function m(v,y){let T=v*3;y.x=e[T+0],y.y=e[T+1],y.z=e[T+2]}function g(){let v=new k,y=new k,T=new k,C=new k,_=new de,M=new de,S=new de;for(let b=0,E=0;b<r.length;b+=9,E+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),T.set(r[b+6],r[b+7],r[b+8]),_.set(o[E+0],o[E+1]),M.set(o[E+2],o[E+3]),S.set(o[E+4],o[E+5]),C.copy(v).add(y).add(T).divideScalar(3);let H=d(C);x(_,E+0,v,H),x(M,E+2,y,H),x(S,E+4,T,H)}}function x(v,y,T,C){C<0&&v.x===1&&(o[y]=v.x-1),T.x===0&&T.z===0&&(o[y]=C/2/Math.PI+.5)}function d(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}},Xl=class n extends Wl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ts=class extends Ci{constructor(e){super(e),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ci().fromJSON(s))}return this}},Z1={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=bm(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,p,m;if(i&&(r=j1(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],p=n[g+1],u<a&&(a=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return ea(r,o,t,a,l,m,0),o}};Wo=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];$p(e),Kp(i,e);let o=e.length;t.forEach($p);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Kp(i,t[l]);let a=Z1.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ms=class n extends Ut{constructor(e=new ts([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:hE,y,T=!1,C,_,M,S;f&&(y=f.getSpacedPoints(h),T=!0,p=!1,C=f.computeFrenetFrames(h,!1),_=new k,M=new k,S=new k),p||(d=0,m=0,g=0,x=0);let b=a.extractPoints(c),E=b.shape,H=b.holes;if(!Wo.isClockWise(E)){E=E.reverse();for(let G=0,_e=H.length;G<_e;G++){let re=H[G];Wo.isClockWise(re)&&(H[G]=re.reverse())}}let A=Wo.triangulateShape(E,H),L=E;for(let G=0,_e=H.length;G<_e;G++){let re=H[G];E=E.concat(re)}function w(G,_e,re){return _e||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(_e,re)}let P=E.length,R=A.length;function F(G,_e,re){let ce,ie,ze,Le=G.x-_e.x,N=G.y-_e.y,D=re.x-G.x,$=re.y-G.y,ve=Le*Le+N*N,ge=Le*$-N*D;if(Math.abs(ge)>Number.EPSILON){let pe=Math.sqrt(ve),Fe=Math.sqrt(D*D+$*$),Ae=_e.x-N/pe,Ue=_e.y+Le/pe,Xe=re.x-$/Fe,Je=re.y+D/Fe,ye=((Xe-Ae)*$-(Je-Ue)*D)/(Le*$-N*D);ce=Ae+Le*ye-G.x,ie=Ue+N*ye-G.y;let pt=ce*ce+ie*ie;if(pt<=2)return new de(ce,ie);ze=Math.sqrt(pt/2)}else{let pe=!1;Le>Number.EPSILON?D>Number.EPSILON&&(pe=!0):Le<-Number.EPSILON?D<-Number.EPSILON&&(pe=!0):Math.sign(N)===Math.sign($)&&(pe=!0),pe?(ce=-N,ie=Le,ze=Math.sqrt(ve)):(ce=Le,ie=N,ze=Math.sqrt(ve/2))}return new de(ce/ze,ie/ze)}let B=[];for(let G=0,_e=L.length,re=_e-1,ce=G+1;G<_e;G++,re++,ce++)re===_e&&(re=0),ce===_e&&(ce=0),B[G]=F(L[G],L[re],L[ce]);let I=[],z,Z=B.concat();for(let G=0,_e=H.length;G<_e;G++){let re=H[G];z=[];for(let ce=0,ie=re.length,ze=ie-1,Le=ce+1;ce<ie;ce++,ze++,Le++)ze===ie&&(ze=0),Le===ie&&(Le=0),z[ce]=F(re[ce],re[ze],re[Le]);I.push(z),Z=Z.concat(z)}for(let G=0;G<d;G++){let _e=G/d,re=m*Math.cos(_e*Math.PI/2),ce=g*Math.sin(_e*Math.PI/2)+x;for(let ie=0,ze=L.length;ie<ze;ie++){let Le=w(L[ie],B[ie],ce);me(Le.x,Le.y,-re)}for(let ie=0,ze=H.length;ie<ze;ie++){let Le=H[ie];z=I[ie];for(let N=0,D=Le.length;N<D;N++){let $=w(Le[N],z[N],ce);me($.x,$.y,-re)}}}let U=g+x;for(let G=0;G<P;G++){let _e=p?w(E[G],Z[G],U):E[G];T?(M.copy(C.normals[0]).multiplyScalar(_e.x),_.copy(C.binormals[0]).multiplyScalar(_e.y),S.copy(y[0]).add(M).add(_),me(S.x,S.y,S.z)):me(_e.x,_e.y,0)}for(let G=1;G<=h;G++)for(let _e=0;_e<P;_e++){let re=p?w(E[_e],Z[_e],U):E[_e];T?(M.copy(C.normals[G]).multiplyScalar(re.x),_.copy(C.binormals[G]).multiplyScalar(re.y),S.copy(y[G]).add(M).add(_),me(S.x,S.y,S.z)):me(re.x,re.y,u/h*G)}for(let G=d-1;G>=0;G--){let _e=G/d,re=m*Math.cos(_e*Math.PI/2),ce=g*Math.sin(_e*Math.PI/2)+x;for(let ie=0,ze=L.length;ie<ze;ie++){let Le=w(L[ie],B[ie],ce);me(Le.x,Le.y,u+re)}for(let ie=0,ze=H.length;ie<ze;ie++){let Le=H[ie];z=I[ie];for(let N=0,D=Le.length;N<D;N++){let $=w(Le[N],z[N],ce);T?me($.x,$.y+y[h-1].y,y[h-1].x+re):me($.x,$.y,u+re)}}}q(),ee();function q(){let G=s.length/3;if(p){let _e=0,re=P*_e;for(let ce=0;ce<R;ce++){let ie=A[ce];we(ie[2]+re,ie[1]+re,ie[0]+re)}_e=h+d*2,re=P*_e;for(let ce=0;ce<R;ce++){let ie=A[ce];we(ie[0]+re,ie[1]+re,ie[2]+re)}}else{for(let _e=0;_e<R;_e++){let re=A[_e];we(re[2],re[1],re[0])}for(let _e=0;_e<R;_e++){let re=A[_e];we(re[0]+P*h,re[1]+P*h,re[2]+P*h)}}i.addGroup(G,s.length/3-G,0)}function ee(){let G=s.length/3,_e=0;ue(L,_e),_e+=L.length;for(let re=0,ce=H.length;re<ce;re++){let ie=H[re];ue(ie,_e),_e+=ie.length}i.addGroup(G,s.length/3-G,1)}function ue(G,_e){let re=G.length;for(;--re>=0;){let ce=re,ie=re-1;ie<0&&(ie=G.length-1);for(let ze=0,Le=h+d*2;ze<Le;ze++){let N=P*ze,D=P*(ze+1),$=_e+ce+N,ve=_e+ie+N,ge=_e+ie+D,pe=_e+ce+D;Ce($,ve,ge,pe)}}}function me(G,_e,re){l.push(G),l.push(_e),l.push(re)}function we(G,_e,re){Ee(G),Ee(_e),Ee(re);let ce=s.length/3,ie=v.generateTopUV(i,s,ce-3,ce-2,ce-1);Ne(ie[0]),Ne(ie[1]),Ne(ie[2])}function Ce(G,_e,re,ce){Ee(G),Ee(_e),Ee(ce),Ee(_e),Ee(re),Ee(ce);let ie=s.length/3,ze=v.generateSideWallUV(i,s,ie-6,ie-3,ie-2,ie-1);Ne(ze[0]),Ne(ze[1]),Ne(ze[3]),Ne(ze[1]),Ne(ze[2]),Ne(ze[3])}function Ee(G){s.push(l[G*3+0]),s.push(l[G*3+1]),s.push(l[G*3+2])}function Ne(G){r.push(G.x),r.push(G.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return uE(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new wu[s.type]().fromJSON(s)),new n(i,e.options)}},hE={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new de(r,o),new de(a,l),new de(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],p=e[s*3],m=e[s*3+1],g=e[s*3+2],x=e[r*3],d=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-u),new de(p,1-g),new de(x,1-f)]:[new de(a,1-l),new de(h,1-u),new de(m,1-g),new de(d,1-f)]}};nr=class n extends Wl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},ei=class n extends Ut{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,p=(t-e)/s,m=new k,g=new de;for(let x=0;x<=s;x++){for(let d=0;d<=i;d++){let f=r+d/i*o;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=p}for(let x=0;x<s;x++){let d=x*(i+1);for(let f=0;f<i;f++){let v=f+d,y=v,T=v+i+1,C=v+i+2,_=v+1;a.push(y,T,_),a.push(T,C,_)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Pt=class n extends Ut{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,p=new k,m=[],g=[],x=[],d=[];for(let f=0;f<=i;f++){let v=[],y=f/i,T=0;f===0&&o===0?T=.5/t:f===i&&l===Math.PI&&(T=-.5/t);for(let C=0;C<=t;C++){let _=C/t;u.x=-e*Math.cos(s+_*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+_*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),x.push(p.x,p.y,p.z),d.push(_+T,1-y),v.push(c++)}h.push(v)}for(let f=0;f<i;f++)for(let v=0;v<t;v++){let y=h[f][v+1],T=h[f][v],C=h[f+1][v],_=h[f+1][v+1];(f!==0||o>0)&&m.push(y,T,_),(f!==i-1||l<Math.PI)&&m.push(T,C,_)}this.setIndex(m),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},to=class n extends Ut{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new k,u=new k,p=new k;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){let x=g/s*r,d=m/i*Math.PI*2;u.x=(e+t*Math.cos(d))*Math.cos(x),u.y=(e+t*Math.cos(d))*Math.sin(x),u.z=t*Math.sin(d),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){let x=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,v=(s+1)*m+g;o.push(x,d,v),o.push(d,f,v)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ql=class extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ae=class extends Ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=um,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ii=class extends ae{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};no=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Pu=class extends no{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zf,endingEnd:Zf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yf:r=e,a=2*t-i;break;case $f:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Yf:o=e,l=2*i-t;break;case $f:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(i-t)/(s-t),x=g*g,d=x*g,f=-p*d+2*p*x-p*g,v=(1+p)*d+(-1.5-2*p)*x+(-.5+p)*g+1,y=(-1-m)*d+(1.5+m)*x+.5*g,T=m*d-m*x;for(let C=0;C!==a;++C)r[C]=f*o[h+C]+v*o[c+C]+y*o[l+C]+T*o[u+C];return r}},Iu=class extends no{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*u+o[l+p]*h;return r}},Lu=class extends no{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},_i=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ml(t,this.TimeBufferType),this.values=ml(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ml(e.times,Array),values:ml(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Pu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xl:t=this.InterpolantFactoryMethodDiscrete;break;case yl:t=this.InterpolantFactoryMethodLinear;break;case xh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xl;case this.InterpolantFactoryMethodLinear:return yl;case this.InterpolantFactoryMethodSmooth:return xh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&dE(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===xh,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*i,p=u-i,m=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[p+g]||x!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=yl;ir=class extends _i{};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=xl;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;Du=class extends _i{};Du.prototype.ValueTypeName="color";Uu=class extends _i{};Uu.prototype.ValueTypeName="number";Nu=class extends no{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ia=class extends _i{InterpolantFactoryMethodLinear(e){return new Nu(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.DefaultInterpolation=yl;ia.prototype.InterpolantFactoryMethodSmooth=void 0;sr=class extends _i{};sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=xl;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;Hu=class extends _i{};Hu.prototype.ValueTypeName="vector";Ou=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},fE=new Ou,zu=class{constructor(e){this.manager=e!==void 0?e:fE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};zu.DEFAULT_MATERIAL_NAME="__DEFAULT";io=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Zl=class extends io{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Zh=new gt,Jp=new k,jp=new k,sa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zo,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),jp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jp),t.updateMatrixWorld(),Zh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Zh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fu=class extends sa{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=bl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Yl=class extends io{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qp=new gt,Fo=new k,Yh=new k,Bu=class extends sa{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Fo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fo),Yh.copy(i.position),Yh.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Yh),i.updateMatrixWorld(),s.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Qp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qp)}},$l=class extends io{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Bu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ku=class extends sa{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kl=class extends io{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new ku}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Jl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=em(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=em();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Ju="\\[\\]\\.:\\/",pE=new RegExp("["+Ju+"]","g"),ju="[^"+Ju+"]",mE="[^"+Ju.replace("\\.","")+"]",gE=/((?:WC+[\/:])*)/.source.replace("WC",ju),xE=/(WCOD+)?/.source.replace("WCOD",mE),yE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),vE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),_E=new RegExp("^"+gE+xE+yE+vE+"$"),ME=["material","materials","bones","map"],Gu=class{constructor(e,t,i){let s=i||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},zt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pE,"")}static parseTrackName(e){let t=_E.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ME.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Gu;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];uw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var ng={};hh(ng,{RoomEnvironment:()=>Nd});function _o(n){let e=new mt;return e.color.setScalar(n),e}var Nd,ig=Jn(()=>{Nt();Nd=class extends Qr{constructor(e=null){super();let t=new fe;t.deleteAttribute("uv");let i=new ae({side:pn}),s=new ae,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new $l(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new X(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new X(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new X(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new X(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new X(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let p=new X(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let m=new X(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let g=new X(t,_o(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new X(t,_o(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let d=new X(t,_o(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let f=new X(t,_o(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let v=new X(t,_o(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);let y=new X(t,_o(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var Dc,Hd=Jn(()=>{Dc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var ni,ES,Od,bS,Ps,Mo=Jn(()=>{Nt();ni=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ES=new Jr(-1,1,1,-1,0,1),Od=class extends Ut{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},bS=new Od,Ps=class{constructor(e){this._mesh=new X(bS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ES)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Eo,zd=Jn(()=>{Nt();Mo();Eo=class extends ni{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Es.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ps(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var wa,Uc,Fd=Jn(()=>{Mo();wa=class extends ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Uc=class extends ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Nc,sg=Jn(()=>{Nt();Hd();zd();Fd();Fd();Nc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new de);this._width=i.width,this._height=i.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Eo(Dc),this.copyPass.material.blending=Ai,this.clock=new Jl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}wa!==void 0&&(o instanceof wa?i=!0:o instanceof Uc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Hc,rg=Jn(()=>{Nt();Mo();Hc=class extends ni{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var og,ag=Jn(()=>{Nt();og={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var bo,lg=Jn(()=>{Nt();Mo();Hd();ag();bo=class n extends ni{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Oe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,o,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new Fn(r,o,{type:vi});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new Fn(r,o,{type:vi});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=og;this.highPassUniforms=Es.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new de(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Dc;this.copyUniforms=Es.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$t,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Oe,this.oldClearAlpha=1,this.basic=new mt,this.fsQuad=new Ps(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};bo.BlurDirectionX=new de(1,0);bo.BlurDirectionY=new de(0,1)});var cg,hg=Jn(()=>{cg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Oc,ug=Jn(()=>{Nt();Mo();hg();Oc=class extends ni{constructor(){super();let e=cg;this.uniforms=Es.clone(e.uniforms),this.material=new ql({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ps(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Rt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qu&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var dg={};hh(dg,{createPostFX:()=>wS});function wS(n,e,t){let i=new Nc(n);i.addPass(new Hc(e,t));let s=new bo(new de(window.innerWidth,window.innerHeight),.35,.65,.82);i.addPass(s);let r=new Eo(SS);return i.addPass(r),i.addPass(new Oc),{composer:i,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){i.setSize(o,a)},setPixelRatio(o){i.setPixelRatio(o)},render(){i.render()}}}var SS,fg=Jn(()=>{Nt();sg();rg();lg();zd();ug();SS={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});Nt();var td={};hh(td,{CAR_DEFS:()=>ns,applyBuildVisual:()=>Lm,applyCarSkin:()=>HE,buildCar:()=>LE,carDef:()=>ed,effectiveStats:()=>NE,extrudeProfile:()=>oa,glassMat:()=>Pm,paintCar:()=>DE,paintMat:()=>Cm,setWheelStyle:()=>UE});Nt();var ns=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}},{id:"sedan",name:"Prairie Sedan",desc:"Comfy daily driver. Easy to handle.",price:6e3,colors:[7041664,1718891,15921906,7999504,1316380],stats:{topSpeed:48,accel:14,handling:1,grip:1,nitroTime:3,nitroPower:1.3}},{id:"taxi",name:"Peg City Cab",desc:"Yellow cab with a roof sign. Nimble.",price:7500,colors:[16761856,16761856,15921906],stats:{topSpeed:49,accel:15,handling:1.05,grip:1,nitroTime:3,nitroPower:1.3},extra:"taxi"},{id:"van",name:"Delivery Van",desc:"Big box on wheels. Slow, heavy, tough.",price:9e3,colors:[15921906,2060267,2976335,12589080],stats:{topSpeed:42,accel:12,handling:.8,grip:1,nitroTime:4,nitroPower:1.3}},{id:"police",name:"Interceptor",desc:"Police-spec V8 with a light bar.",price:28e3,colors:[1316380,15921906,1718891],stats:{topSpeed:60,accel:19,handling:1.1,grip:1.15,nitroTime:3.4,nitroPower:1.4},extra:"police"},{id:"hyper",name:"Aurora Hyper",desc:"The fastest thing in the city. Wings and all.",price:9e4,colors:[16735802,11032055,1622208,15921906,1316380],stats:{topSpeed:76,accel:27,handling:1.3,grip:1.4,nitroTime:3.2,nitroPower:1.55}}],ed=n=>ns.find(e=>e.id===n)||ns[0],Cm=n=>new Ii({color:n,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),Pm=()=>new Ii({color:1779509,metalness:.85,roughness:.05,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.02}),Im=()=>new ae({color:14672872,metalness:1,roughness:.22}),EE=()=>new ae({color:1316378,metalness:.4,roughness:.6}),bE=()=>new ae({color:789775,roughness:.95}),SE=()=>new ae({color:12172998,metalness:1,roughness:.3}),wE=()=>new ae({color:5922404,metalness:.9,roughness:.45}),TE=()=>new ae({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),AE=()=>new ae({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),RE=()=>new ae({color:15263976,roughness:.5}),Tm=(n,e,t)=>({x:n,y:e,r:t}),CE={taxi:"sedan",police:"sedan"},Qu={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},sedan:{W:1.84,wb:1.4,wheelR:.33,track:1.58,body:[[2.3,.3],[2.34,.5],[2.15,.68],[1.25,.78],[.6,.82],[-1.5,.84],[-2.1,.8],[-2.3,.62],[-2.3,.36],[-2,.22],[2,.22]],glass:[[.62,.8],[.25,1.28],[-1.05,1.3],[-1.5,.84]],roof:[[.28,1.24],[-1.08,1.26],[-1.12,1.2],[.24,1.18]],splitter:!1},van:{W:2,wb:1.6,wheelR:.36,track:1.68,body:[[2.45,.3],[2.5,.6],[2.35,.95],[1.6,1.1],[.95,1.1],[.95,2],[-2.45,2],[-2.5,1.85],[-2.5,.35],[-2.2,.24],[2.2,.24]],glass:[[1.62,1.1],[1.05,1.95],[.9,1.95],[.9,1.1]],roof:null,splitter:!1},hyper:{W:2.04,wb:1.4,wheelR:.34,track:1.72,body:[[2.4,.2],[2.45,.38],[2.2,.5],[1.2,.6],[.5,.68],[-1.3,.74],[-2,.72],[-2.35,.6],[-2.4,.38],[-2.3,.2],[-2,.14],[2,.14]],glass:[[.6,.66],[0,1],[-.9,1.02],[-1.4,.74]],roof:[[.04,.97],[-.92,.99],[-.95,.93],[0,.92]],wing:!0,splitter:!0,canards:!0},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function oa(n,e,t,i,s=.045){i&&(n=Am(Am(n)));let r=new ts;r.moveTo(n[0][0],n[0][1]);for(let l=1;l<n.length;l++)r.lineTo(n[l][0],n[l][1]);r.closePath();for(let l of i||[]){let c=new Ci;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new Ms(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new X(o,t);return a.castShadow=!0,a}function Am(n){let e=[];for(let t=0;t<n.length;t++){let i=n[t],s=n[(t+1)%n.length];e.push([i[0]*.75+s[0]*.25,i[1]*.75+s[1]*.25],[i[0]*.25+s[0]*.75,i[1]*.25+s[1]*.75])}return e}var PE=()=>new ae({color:13115434,metalness:.4,roughness:.4});function IE(n,e,t){let i=new it,s=bE(),r=new X(new Be(e,e,.2,26),s);r.rotation.z=Math.PI/2,r.castShadow=!0,i.add(r);for(let p of[-1,1]){let m=new X(new to(e*.86,e*.14,8,26),s);m.rotation.y=Math.PI/2,m.position.x=p*.1,i.add(m)}let o=new X(new Be(e*.5,e*.5,.24,20),wE());o.rotation.z=Math.PI/2,i.add(o);let a=new X(new fe(.1,e*.42,e*.22),PE());a.position.set(0,e*.36,e*.12),i.add(a);let l=new X(new to(e*.66,e*.05,8,26),t);l.rotation.y=Math.PI/2,i.add(l);let c=new it;for(let p=0;p<10;p++){let m=new X(new fe(.04,e*.62,e*.07),t);m.position.y=e*.31;let g=new it;g.rotation.x=p/10*Math.PI*2+(p%2?.08:0),g.add(m),c.add(g)}let h=c.clone();h.rotation.y=Math.PI,i.add(c),i.add(h);let u=new X(new Be(e*.13,e*.13,.27,12),Im());return u.rotation.z=Math.PI/2,i.add(u),n==="blackout"?t.color.setHex(1513500):n==="gold"?t.color.setHex(13211182):n==="neon"&&t.color.setHex(2287359),i}function LE(n,e,t="stock"){let i=typeof n=="string"?ed(n):n||ns[0],s=i.id||"sport";typeof e!="number"&&(e=typeof i.color=="number"?i.color:i.colors[0]);let r=Qu[s]||Qu[CE[s]]||Qu.sport,o=new it,a=Cm(e),l=Pm(),c=Im(),h=EE(),u=[Tm(r.wb,r.wheelR,r.wheelR+.13),Tm(-r.wb,r.wheelR,r.wheelR+.13)];o.add(oa(r.body,r.W,a,u)),o.add(oa(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(oa(r.roof,r.W-.2,a,null,.02));let p=Math.max(...r.body.map(w=>w[0])),m=Math.min(...r.body.map(w=>w[0])),g=-p,x=-m,d=r.W/2,f=[],v=SE();for(let w of[-1,1])for(let P of[-r.wb,r.wb]){let R=IE(t,r.wheelR,v);R.position.set(w*r.track/2,r.wheelR,P),o.add(R),f.push(R)}let y=Math.max(...r.body.filter(w=>w[0]>p-.3).map(w=>w[1])),T=Math.max(...r.body.filter(w=>w[0]<m+.3).map(w=>w[1])),C=Math.max(.45,y-.12),_=Math.max(.5,T-.12),M=TE(),S=new ae({color:16777215,emissive:15398143,emissiveIntensity:2.6}),b=new Be(.045,.05,.05,14).rotateX(Math.PI/2);for(let w of[-1,1]){let P=new X(new fe(.44,.14,.12),h);P.position.set(w*(d-.4),C,g+.04),P.rotation.z=w*.06,o.add(P);for(let F of[0,1]){let B=new X(b,M);B.position.set(w*(d-.48+F*.15),C-.01,g-.03),o.add(B)}let R=new X(new fe(.38,.018,.03),S);R.position.set(w*(d-.4),C+.06,g-.025),R.rotation.z=w*.06,o.add(R)}let E=new X(new fe(d*1.1,.16,.08),h);if(E.position.set(0,.4,g+.01),o.add(E),r.splitter){let w=new X(new fe(r.W*.92,.05,.3),h);w.position.set(0,.16,g+.1),o.add(w)}if(r.hoodScoop){let w=new X(new fe(.5,.09,.7),h);w.position.set(0,.86,-(r.wb*.55)),o.add(w)}if(r.canards)for(let w of[-1,1]){let P=new X(new fe(.22,.03,.3),h);P.position.set(w*(d-.1),.3,g+.12),P.rotation.z=w*.25,o.add(P)}let H=AE();for(let w of[-1,1]){let P=new X(new fe(.42,.13,.07),H);P.position.set(w*(d-.32),_,x-.02),o.add(P);let R=new X(new fe(.3,.03,.075),new ae({color:3342336,emissive:16724016,emissiveIntensity:3.2}));R.position.set(w*(d-.32),_+.03,x-.025),o.add(R);let F=new X(new fe(.1,.05,.075),new ae({color:14540253,emissive:16777215,emissiveIntensity:.5}));F.position.set(w*(d-.32),_-.045,x-.025),o.add(F)}if(r.spoiler||r.wing||s==="hyper"||s==="super"){let w=new X(new fe(r.W*.5,.025,.06),H);w.position.set(0,_+.03,x-.02),o.add(w)}{let w=r.glass.map(ue=>ue[0]),P=r.glass.map(ue=>ue[1]),R=Math.max(...w),F=Math.min(...w),B=Math.min(...P),I=Math.max(...P),z=new ae({color:658189,roughness:.6}),Z=new ae({color:855826,roughness:.35,metalness:.4}),U=["sedan","taxi","police","suv"].includes(s),q=R-.05,ee=U?F+.1:(R+F)/2-.1;for(let ue of[-1,1]){let me=ue*(d+.046),we=new X(new fe(.012,.025,R-F-.15),c);we.position.set(ue*(d-.1),B+.01,-(R+F)/2),o.add(we);let Ce=new X(new fe(.02,I-B-.05,.11),Z);Ce.position.set(ue*(d-.12),(I+B)/2,-((R+F)/2+(U?.15:-.05))),o.add(Ce);for(let G of U?[q,(R+F)/2+.1,ee]:[q,ee]){let _e=new X(new fe(.008,B-.3,.012),z);_e.position.set(me,.3+(B-.3)/2,-G),o.add(_e)}let Ee=new X(new fe(.02,.025,.12),c);Ee.position.set(me,B-.12,-(ee+.18)),o.add(Ee);let Ne=new X(new fe(.06,.08,r.wb*2-r.wheelR*2-.3),h);Ne.position.set(ue*(d+.01),.24,0),o.add(Ne)}}let V=new X(new fe(r.W*.8,.14,.18),h);V.position.set(0,.24,x-.06),o.add(V);for(let w of[-1,1]){let P=new X(new Be(.05,.055,.22,12),c);P.rotation.x=Math.PI/2,P.position.set(w*.32,.26,x+.06),o.add(P)}let A=new X(new fe(.34,.09,.02),RE());A.position.set(0,.5,x+.005),o.add(A);for(let w of[-1,1]){let P=new X(new fe(.1,.03,.05),h);P.position.set(w*(d+.03),1,-(r.wb*.42)),o.add(P);let R=new X(new fe(.1,.1,.16),a);R.position.set(w*(d+.09),1.04,-(r.wb*.42)),R.castShadow=!0,o.add(R)}if(r.rails)for(let w of[-1,1]){let P=new X(new fe(.06,.05,1.9),h);P.position.set(w*(d-.35),1.72,.1),o.add(P)}if(r.bed){let w=new X(new fe(r.W-.5,.06,2),h);w.position.set(0,1.02,m*.55),o.add(w)}if(r.spoiler||r.wing){let w=!!r.wing,P=x-(w?.42:.3),R=Math.max(...r.body.filter(z=>z[0]<m+.75).map(z=>z[1])),F=w?.3:.1,B=R+F;for(let z of[-1,1]){let Z=new X(new fe(.07,F+.04,.2),w?h:a);Z.position.set(z*(d-.45),R+F/2-.02,P),o.add(Z)}let I=new X(new fe(r.W*(w?.92:.82),.045,w?.4:.26),w?h:a);if(I.position.set(0,B,P),I.rotation.x=w?-.12:-.05,I.castShadow=!0,o.add(I),w)for(let z of[-1,1]){let Z=new X(new fe(.03,.2,.44),h);Z.position.set(z*r.W*.46,B-.04,P),o.add(Z)}}let L=null;if(i.extra==="taxi"||i.extra==="police"){let w=Math.max(...(r.roof||r.glass).map(R=>R[1]))+.02,P=(r.roof||r.glass).reduce((R,F)=>R+F[0],0)/(r.roof||r.glass).length;if(i.extra==="taxi"){let R=document.createElement("canvas");R.width=128,R.height=32;let F=R.getContext("2d");F.fillStyle="#ffd23f",F.fillRect(0,0,128,32),F.fillStyle="#111",F.font="bold 22px sans-serif",F.textAlign="center",F.fillText("TAXI",64,24);let B=new cn(R);B.colorSpace=vt;let I=new X(new fe(.62,.2,.26),new ae({map:B,emissive:16777215,emissiveMap:B,emissiveIntensity:.6}));I.position.set(0,w+.1,-P),I.rotation.y=Math.PI/2,o.add(I)}else{let R=new X(new fe(1.1,.1,.28),h);R.position.set(0,w+.05,-P),o.add(R);let F=new ae({color:5570560,emissive:16718362,emissiveIntensity:2.5}),B=new ae({color:85,emissive:1723903,emissiveIntensity:2.5}),I=new X(new fe(.48,.12,.24),F);I.position.set(-.27,w+.14,-P);let z=new X(new fe(.48,.12,.24),B);z.position.set(.27,w+.14,-P),o.add(I,z),L=[F,B]}}return o.userData={flashers:L,defId:s,bodyColor:e,wheels:f,frontWheels:f.filter(w=>w.position.z<0),rim:v,glass:l,paint:a,setBrake:w=>{},profile:r,frontZ:g,rearZ:x},o}function DE(n,e){let t=new Oe(e);n.traverse(i=>{i.isMesh&&i.material&&i.material.isMeshPhysicalMaterial&&i.material.color&&Math.abs(i.material.color.getHex()-n.userData.bodyColor)<2&&!i.material.emissiveIntensity&&i.material.color.copy(t)}),n.userData.bodyColor=e}function UE(n,e){let t=n.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function NE(n,e){let i=(typeof n=="string"?ed(n):n||ns[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:i.topSpeed*(1+.055*r("engine")),accel:i.accel*(1+.09*r("engine")+.12*r("turbo")),handling:i.handling*(1+.06*r("suspension")),grip:i.grip*(1+.07*r("tires")),nitroTime:i.nitroTime+.5*r("nitro"),nitroPower:i.nitroPower*(1+.08*r("nitro"))}}var Rm={clear:5926532,dark:1779509,limo:329482};function HE(n,e,t){let i=n.userData;if(typeof e=="number"&&i.paint&&(i.paint.color.setHex(e),i.bodyColor=e),!t)return n;i.rim&&i.rim.color.setHex(t.rims),i.glass&&i.glass.color.setHex(Rm[t.tint]??Rm.dark),i.skinParts&&(n.remove(i.skinParts),i.skinParts.traverse(o=>{o.isMesh&&o.geometry.dispose()}));let s=new it;i.skinParts=s,n.add(s);let r=i.profile;if(r&&t.stripes!=="none"){let o=new Ii({color:t.stripe,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.1});if(t.stripes==="side"){let a=(i.rearZ-i.frontZ)*.86,l=(i.rearZ+i.frontZ)/2,c=r.wheelR+.22;for(let h of[-1,1]){let u=new X(new fe(.02,.09,a),o);u.position.set(h*(r.W/2+.05),c,l),s.add(u)}}else{let a=t.stripes==="dual"?[-.22,.22]:[0],l=t.stripes==="dual"?.16:.34;for(let c of a)for(let h of[r.body,r.roof]){if(!h)continue;let u=oa(h,l,o,null,.045);u.castShadow=!1,u.scale.set(1,1.012,1.004),u.position.set(c,.006,0),s.add(u)}}}if(t.glow!=null&&r){let o=new mt({color:t.glow,transparent:!0,opacity:.75,blending:$t,depthWrite:!1,map:OE()}),a=i.rearZ-i.frontZ+1.2,l=new X(new Ge(r.W+1.4,a).rotateX(-Math.PI/2),o);l.position.set(0,.07,(i.rearZ+i.frontZ)/2),l.renderOrder=2,s.add(l)}return i.build&&Lm(n,i.build),n}var ic=null;function OE(){if(ic)return ic;let n=document.createElement("canvas");n.width=64,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(32,64,4,32,64,62);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,1),e.fillStyle=t,e.fillRect(0,0,64,128),e.restore(),ic=new cn(n),ic}function Lm(n,e){let t=n.userData,i=t.profile;if(!i)return n;e=e||{};let s=e.tireScale||1,r=e.offset||0,o=(e.rideHeight||0)+(s-1)*i.wheelR;for(let _ of n.children)_!==t.buildParts&&_.userData.p0===void 0&&(_.userData.p0=_.position.clone());for(let _ of n.children){if(_===t.buildParts||!_.userData.p0)continue;let M=_.userData.p0;if(t.wheels.includes(_)){let S=M.z>0;_.scale.set(s*(e.slicks&&S?1.45:1)*(s>1.15?1.15:1),s,s),_.position.set(Math.sign(M.x)*(Math.abs(M.x)+r+(s-1)*.12),i.wheelR*s,M.z)}else _.position.set(M.x,M.y+o,M.z)}t.buildParts&&(n.remove(t.buildParts),t.buildParts.traverse(_=>{_.isMesh&&_.geometry.dispose()}));let a=new it;a.position.y=o,t.buildParts=a,n.add(a);let l=_=>(e.body||[]).includes(_),c=i.W/2,h=t.frontZ,u=t.rearZ,p=-h,m=-u,g=Math.max(...i.body.filter(_=>_[0]>p-1.4&&_[0]<p-.3).map(_=>_[1])),x=i.roof||i.glass,d=Math.max(...x.map(_=>_[1])),f=x.reduce((_,M)=>_+M[0],0)/x.length,v=new ae({color:1842722,metalness:.7,roughness:.45}),y=new ae({color:14672872,metalness:1,roughness:.2}),T=(_,M,S=v)=>new X(new Be(M,M,_,10),S),C=(_,M,S,b,E=0,H=0,V=0)=>(_.position.set(M,S,b),_.rotation.set(E,H,V),_.castShadow=!0,a.add(_),_);if(l("bullbar")){C(T(i.W*.9,.05),0,.42,h-.16,0,0,Math.PI/2),C(T(i.W*.62,.045),0,.82,h-.14,0,0,Math.PI/2);for(let _ of[-1,1])C(T(.45,.045),_*i.W*.3,.62,h-.15);C(new X(new fe(i.W*.95,.2,.16),v),0,.32,h-.06)}if(l("winch")&&(C(new X(new fe(.5,.16,.18),v),0,.36,h-.2),C(T(.36,.06,new ae({color:9071914,roughness:.7})),0,.36,h-.21,0,0,Math.PI/2)),l("snorkel")){let _=c+.05,M=-(p-1.2);C(T(Math.max(.4,d-.55),.055),_,.55+(d-.55)/2,M),C(new X(new fe(.14,.12,.2),v),_,d+.04,M-.06)}if(l("rack")){let _=-f;for(let M of[-1,1])C(T(1.3,.025),M*(c-.25),d+.1,_,Math.PI/2);for(let M of[-.5,0,.5])C(T(i.W-.45,.022),0,d+.1,_+M,0,0,Math.PI/2);for(let M of[-1,1])for(let S of[-.6,.6])C(T(.12,.02),M*(c-.25),d+.05,_+S)}if(l("lightbar")){let _=new ae({color:16777215,emissive:15398655,emissiveIntensity:2.8});C(new X(new fe(i.W*.72,.1,.1),v),0,d+.18,-f-.55),C(new X(new fe(i.W*.68,.06,.03),_),0,d+.18,-f-.61),t.lightbar=!0}else t.lightbar=!1;if(l("flares")){let _=new ae({color:1118740,roughness:.75});for(let M of t.wheels){let S=new X(new to(i.wheelR*s+.1,.06,6,16,Math.PI),_);S.scale.set(1,1,2.2),C(S,M.position.x+Math.sign(M.position.x)*.06,i.wheelR*s-o,M.position.z,0,Math.PI/2,0)}}if(l("skid")&&C(new X(new fe(i.W*.7,.04,1),new ae({color:10134445,metalness:.8,roughness:.35})),0,.12,h+.6),l("wing")){let _=d+.05,M=u-.35;for(let S of[-1,1])C(new X(new fe(.05,_-.6,.3),v),S*(c-.4),.6+(_-.6)/2,M);C(new X(new fe(i.W*1.02,.05,.55),v),0,_,M,-.18);for(let S of[-1,1])C(new X(new fe(.03,.3,.6),v),S*i.W*.51,_-.06,M)}if(l("wheelie")){for(let _ of[-1,1])C(T(1.4,.03,y),_*.35,.3-o*.5,u+.7,Math.PI/2-.12);for(let _ of[-1,1]){let M=C(new X(new Be(.07,.07,.05,12),v),_*.35,.07-o,u+1.38,0,0,Math.PI/2);M.castShadow=!1}}if(e.adder==="roots"||e.adder==="centri"){let _=new ae({color:13225942,metalness:.55,roughness:.3,emissive:2237995,emissiveIntensity:.6}),M=-(p-.95);C(new X(new fe(.42,.22,.6),_),0,g+.12,M);for(let S=0;S<6;S++)C(new X(new fe(.44,.02,.04),_),0,g+.12+(S-2.5)*.03,M-.31);C(new X(new fe(.46,.14,.34),new ae({color:13115434,metalness:.4,roughness:.4})),0,g+.3,M+.05)}else e.adder&&e.adder!=="none"&&C(new X(new fe(i.W*.6,.18,.05),new ae({color:2764083,metalness:.6,roughness:.4})),0,.42,h+.03);return t.build=e,n}Nt();Nt();function Um(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Ut,c=0;for(let h=0;h<n.length;++h){let u=n[h],p=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),p++}if(p!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[m]===void 0&&(o[m]=[]),o[m].push(u.morphAttributes[m])}if(e){let m;if(t)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(t){let h=0,u=[];for(let p=0;p<n.length;++p){let m=n[p].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=n[p].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Dm(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){let m=[];for(let x=0;x<o[h].length;++x)m.push(o[h][x][p]);let g=Dm(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Dm(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<n.length;++c)o.set(n[c].array,a),a+=n[c].array.length;let l=new mn(o,t,i);return s!==void 0&&(l.gpuType=s),l}var dt=n=>(n-4)*74,Tt=Array.from({length:10},(n,e)=>(e-4.5)*74),Nm=["St James St","Arlington St","Sherbrook St","Balmoral St","Kennedy St","Donald St","Fort St","Main St","Waterfront Dr","Gilroy St"],Hm=["Higgins Ave","Logan Ave","Notre Dame Ave","Ellice Ave","Portage Ave","Graham Ave","St Mary Ave","York Ave","Broadway","Assiniboine Ave"],nd=Tt[4],Om=Tt[7],xt={minX:356,maxX:402},gn={minZ:356,maxZ:394},Mn=nd,Li=14/2+1,hi=xt.maxX+50,Di=225,In={parking:[dt(0),dt(0)],arena:[dt(4),dt(3)],legislature:[dt(3),dt(8)],forks:[dt(8),dt(8)],museum:[dt(7),dt(8)],mansion:[dt(0),dt(8)],hospital:[dt(0),dt(2)],park:[dt(2),dt(6)]},sc={x:Tt[1]-3.5,z:dt(2),heading:Math.PI},id={x:In.mansion[0],z:In.mansion[1]};function rr(n,e){for(let t in In){let[i,s]=In[t];if(Math.abs(i-n)<1&&Math.abs(s-e)<1)return t}return null}function zm(n,e){return e<=dt(2)&&n>=dt(3)?"exchange":Math.abs(n-110)<=150&&Math.abs(e)<=120?"downtown":Math.abs(n)>=dt(7)||Math.abs(e)>=dt(7)?"residential":"midtown"}var kn={minX:-680,maxX:-390,minZ:-250,maxZ:250},sd=[[-470,-150,18],[-560,-40,24],[-450,70,16],[-620,140,20],[-520,200,14],[-610,-190,17]],Fm=[[-430,-210,3.2],[-505,-95,4],[-600,-110,3.5],[-480,10,2.8],[-650,30,4.5],[-540,120,3.4],[-420,180,3],[-660,-230,3.8],[-575,225,3.1],[-505,-205,2.6],[-640,205,2.9],[-455,125,2.4]];function Bm(n,e){for(let[t,i,s]of sd)if((n-t)*(n-t)+(e-i)*(e-i)<s*s)return"mud";if(n>=kn.minX&&n<=kn.maxX&&e>=kn.minZ&&e<=kn.maxZ)return"dirt";if(Math.abs(n)<=340&&Math.abs(e)<=340){let t=Math.round(n/74+4),i=Math.round(e/74+8/2),s=t>=0&&t<9&&i>=0&&i<9?rr(dt(t),dt(i)):null;return(s==="park"||s==="legislature"||s==="mansion")&&Math.abs(n-dt(t))<60/2-4&&Math.abs(e-dt(i))<60/2-4?"grass":"road"}return Math.abs(e-Mn)<=14/2+1&&n>0&&n<hi+10||Math.abs(n-hi)<=8&&Math.abs(e)<=Di+10?"road":"grass"}function km(n,e=.5,t=!1){let i=Math.min(1,e);switch(n){case"grass":return{name:n,speed:.55+.45*i,grip:.6+.4*i,drag:.008*(1-i)};case"dirt":return{name:n,speed:.6+.4*i,grip:.55+.45*i,drag:.006*(1-i)};case"mud":return{name:n,speed:Math.min(1,(.2+.62*i)*(t?1.15:1)),grip:.42+.45*i,drag:.05*(1.1-i)};default:return{name:"road",speed:1,grip:1,drag:0}}}var or=n=>Um(n.map(e=>e.index?e.toNonIndexed():e)),zE=20481;function FE(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function bs(n,e,t,i=!0){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new cn(s);return i&&(r.colorSpace=vt),r.anisotropy=8,r}function ro(n,e,t,i,s,r,o=2){n.fillStyle=i,n.fillRect(0,0,e,t);for(let a=0;a<r;a++){let l=(Math.random()-.5)*s;n.fillStyle=l>0?`rgba(255,255,255,${l})`:`rgba(0,0,0,${-l})`,n.fillRect(Math.random()*e,Math.random()*t,o,o)}}function rd(){return bs(256,512,(n,e,t)=>{ro(n,e,t,"#2f3237",.16,9e3,2),n.fillStyle="rgba(0,0,0,0.12)",n.fillRect(e*.18,0,e*.12,t),n.fillRect(e*.7,0,e*.12,t),n.strokeStyle="rgba(15,15,15,0.5)",n.lineWidth=1;for(let i=0;i<6;i++){n.beginPath();let s=Math.random()*e,r=Math.random()*t;n.moveTo(s,r);for(let o=0;o<6;o++)s+=(Math.random()-.5)*30,r+=Math.random()*25,n.lineTo(s,r);n.stroke()}n.fillStyle="rgba(30,30,30,0.5)",n.fillRect(e*.55,t*.3,40,60),n.fillStyle="#d9dcdf",n.fillRect(10,0,5,t),n.fillRect(e-15,0,5,t),n.fillStyle="#e3b62c",n.fillRect(e/2-7,0,4,t),n.fillRect(e/2+3,0,4,t)})}function qm(){return bs(256,256,(n,e,t)=>ro(n,e,t,"#2f3237",.16,7e3,2))}function BE(){return bs(256,256,(n,e,t)=>{ro(n,e,t,"#a3a59f",.12,5e3,2),n.strokeStyle="rgba(60,60,60,0.35)",n.lineWidth=2;for(let i=0;i<=e;i+=32)n.beginPath(),n.moveTo(i,0),n.lineTo(i,t),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(e,i),n.stroke()})}function kE(){return bs(256,256,(n,e,t)=>{ro(n,e,t,"#5a7f45",.22,12e3,2);for(let i=0;i<400;i++)n.fillStyle=`rgba(${90+Math.random()*40},${120+Math.random()*50},60,0.5)`,n.fillRect(Math.random()*e,Math.random()*t,1,3)})}function GE(){return bs(256,256,(n,e,t)=>{n.fillStyle="rgb(128,128,255)",n.fillRect(0,0,e,t);for(let i=0;i<900;i++){let s=Math.random()*e,r=Math.random()*t,o=4+Math.random()*14,a=n.createRadialGradient(s,r,0,s,r,o),l=(Math.random()-.5)*70,c=(Math.random()-.5)*70;a.addColorStop(0,`rgba(${128+l},${128+c},255,0.5)`),a.addColorStop(1,"rgba(128,128,255,0)"),n.fillStyle=a,n.fillRect(s-o,r-o,o*2,o*2)}},!1)}function rc(n){let e=new ae({color:16777215,roughness:n.rough??.85,metalness:n.metal??.05,envMapIntensity:n.env??.6}),t={uBay:{value:new de(n.bay,n.floor)},uWin:{value:new It(...n.win)},uGround:{value:n.ground??4.4},uGlassA:{value:new Oe(n.glassA)},uGlassB:{value:new Oe(n.glassB)},uLit:{value:new Oe(16765066)},uNight:{value:0},uLitFrac:{value:n.lit??.35},uBrick:{value:n.brick?1:0},uBands:{value:n.bands?1:0}};return e.userData.u=t,e.onBeforeCompile=i=>{Object.assign(i.uniforms,t),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFac; varying float vHash;`).replace("#include <project_vertex>",`#include <project_vertex>
        #ifdef USE_INSTANCING
          vec4 fw = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
          vec3 fn = normalize(mat3(modelMatrix * instanceMatrix) * objectNormal);
          vHash = fract(sin(dot(vec2(instanceMatrix[3].x, instanceMatrix[3].z), vec2(12.9898, 78.233))) * 43758.5453);
        #else
          vec4 fw = modelMatrix * vec4(transformed, 1.0);
          vec3 fn = normalize(mat3(modelMatrix) * objectNormal);
          vHash = 0.37;
        #endif
        vFac = vec3(abs(fn.x) > 0.5 ? fw.z : fw.x, fw.y, fn.y > 0.5 ? 1.0 : (fn.y < -0.5 ? 2.0 : 0.0));`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vFac; varying float vHash;
        uniform vec2 uBay; uniform vec4 uWin; uniform float uGround; uniform vec3 uGlassA; uniform vec3 uGlassB;
        uniform vec3 uLit; uniform float uNight; uniform float uLitFrac; uniform float uBrick; uniform float uBands;
        float fHash(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }`).replace("void main() {",`void main() {
 float fWin = 0.0; float fLit = 0.0;`).replace("#include <color_fragment>",`#include <color_fragment>
        if(vFac.z < 0.5){
          float a = vFac.x / uBay.x; float y = vFac.y;
          float fl = floor((y - uGround) / uBay.y);
          vec2 c = vec2(fract(a), fract((y - uGround) / uBay.y));
          float win = step(uWin.x, c.x) * step(c.x, 1.0 - uWin.x) * step(uWin.y, c.y) * step(c.y, 1.0 - uWin.z);
          if(uBands > 0.5) win = step(uWin.y, c.y) * step(c.y, 1.0 - uWin.z) * (0.85 + 0.15 * step(0.04, c.x));
          float h = fHash(vec3(floor(a), fl, vHash * 97.0));
          if(y < uGround){
            float g = y / uGround;
            win = step(0.07, c.x) * step(c.x, 0.93) * step(0.06, g) * step(g, 0.8);
            h = fHash(vec3(floor(a), 7.0, vHash * 31.0));
            diffuseColor.rgb *= 0.78;
          }
          if(uBrick > 0.5){
            float row = floor(y / 0.09);
            float bx = fract((vFac.x + mod(row, 2.0) * 0.12) / 0.24);
            float mortar = max(step(0.86, fract(y / 0.09)), step(0.93, bx));
            diffuseColor.rgb *= 1.0 - 0.22 * mortar + 0.08 * (fHash(vec3(floor(vFac.x / 0.24), row, 3.0)) - 0.5);
          }
          // frame shadow line under each window + floor slab line
          float sill = step(c.y, uWin.y) * step(uWin.y - 0.05, c.y) * step(0.0, y - uGround);
          diffuseColor.rgb *= 1.0 - 0.25 * sill;
          vec3 glass = mix(uGlassA, uGlassB, h);
          diffuseColor.rgb = mix(diffuseColor.rgb, glass, win);
          fWin = win;
          fLit = win * step(1.0 - uLitFrac, fHash(vec3(floor(a) + 3.0, fl, vHash * 13.0))) * (y < uGround ? 1.6 : 1.0);
        } else if(vFac.z > 0.5 && vFac.z < 1.5){
          diffuseColor.rgb = vec3(0.28, 0.29, 0.31) * (0.9 + 0.2 * vHash);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = mix(roughnessFactor, 0.06, fWin);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
 metalnessFactor = mix(metalnessFactor, 0.85, fWin);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += uLit * fLit * uNight * 0.55;`)},e}var Gm=new k,Vm=new Wn,Wm=new k,Xm=new gt,Zm=new k(0,1,0);function Ht(n,e,t,i,s,r,o,a,l){Gm.set(t,i,s),Vm.setFromAxisAngle(Zm,r),Wm.set(o,a,l),Xm.compose(Gm,Vm,Wm),n.setMatrixAt(e,Xm)}function oc(n,e,t,i,s){for(let r of n)if(t>r.minX&&e<r.maxX&&s>r.minZ&&i<r.maxZ)return!0;return!1}function Ym(n,e=[]){let t=FE(zE),i=[],s=[],r=[],o=(K,oe,Me,Pe)=>i.push({minX:K,maxX:oe,minZ:Me,maxZ:Pe});n.fog=new Nl(13623538,260,950);let a=new Zl(12901631,6254154,.85);n.add(a);let l=new Kl(16773596,1.75);l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.camera.near=10,l.shadow.camera.far=480;let c=120;Object.assign(l.shadow.camera,{left:-c,right:c,top:c,bottom:-c}),l.shadow.bias=-6e-4,l.shadow.normalBias=.6,n.add(l,l.target);let h=80,u=140,p=55,m=16,g=kE();g.wrapS=g.wrapT=zn,g.repeat.set(140,140);let x=new X(new Ge(2600,2600).rotateX(-Math.PI/2),new ae({map:g,roughness:.95,envMapIntensity:.2}));x.receiveShadow=!0,n.add(x);let d=680,f=rd();f.wrapS=f.wrapT=zn,f.repeat.set(1,d/28);let v=new ae({map:f,roughness:.88,metalness:.02,envMapIntensity:.35}),y=new Ge(1,1).rotateX(-Math.PI/2),T=new _t(y,v,Tt.length*2),C=0;for(let K of Tt)Ht(T,C++,K,.05,0,0,14,1,d),Ht(T,C++,0,.05,K,Math.PI/2,14,1,d);T.receiveShadow=!0,T.instanceMatrix.needsUpdate=!0,n.add(T);let _=qm();_.wrapS=_.wrapT=zn;let M=new ae({map:_,roughness:.88,envMapIntensity:.35}),S=new _t(y,M,Tt.length*Tt.length),b=0;for(let K of Tt)for(let oe of Tt)Ht(S,b++,K,.055,oe,0,14,1,14);S.receiveShadow=!0,S.instanceMatrix.needsUpdate=!0,n.add(S);{let K=new fe(.6,.02,3.4).translate(0,.01,0),oe=[];for(let Pe of Tt)for(let Ie of Tt){let se=14/2+1.9;for(let[W,te,he]of[[Pe,Ie-se,0],[Pe,Ie+se,0],[Pe-se,Ie,1],[Pe+se,Ie,1]])for(let be=-5;be<=5;be++)oe.push(he===0?[W+be*1.2,te,0]:[W,te+be*1.2,Math.PI/2])}let Me=new _t(K,new ae({color:15132906,roughness:.7}),oe.length);oe.forEach(([Pe,Ie,se],W)=>Ht(Me,W,Pe,.06,Ie,se,1,1,1)),Me.receiveShadow=!0,Me.instanceMatrix.needsUpdate=!0,n.add(Me)}let E=BE();E.wrapS=E.wrapT=zn,E.repeat.set(60/4,60/4);let H=new ae({map:E,roughness:.9,envMapIntensity:.3}),V=new ae({color:9211530,roughness:.8}),A=81,L=new _t(new fe(1,1,1).translate(0,.5,0),H,A),w=new _t(new fe(1,1,1).translate(0,.5,0),V,A*4),P=0,R=0,F=[];for(let K=0;K<9;K++)for(let oe=0;oe<9;oe++){let Me=dt(K),Pe=dt(oe);F.push({bx:K,bz:oe,cx:Me,cz:Pe,special:rr(Me,Pe),district:zm(Me,Pe)}),Ht(L,P++,Me,0,Pe,0,60-.3,.13,60-.3);for(let[Ie,se,W,te]of[[Me,Pe-60/2,60,.3],[Me,Pe+60/2,60,.3],[Me-60/2,Pe,.3,60],[Me+60/2,Pe,.3,60]])Ht(w,R++,Ie,0,se,0,W,.17,te)}L.receiveShadow=!0,w.receiveShadow=!0,L.instanceMatrix.needsUpdate=!0,w.instanceMatrix.needsUpdate=!0,n.add(L,w);let B={glass:rc({bay:1.6,floor:3.7,win:[.04,.08,.06,0],glassA:1915474,glassB:4026255,rough:.4,metal:.4,env:1,lit:.3}),office:rc({bay:3.2,floor:3.6,win:[.12,.22,.14,0],glassA:2767950,glassB:6258582,bands:!0,lit:.35}),brick:rc({bay:3.4,floor:3.9,win:[.24,.24,.16,0],glassA:1778473,glassB:3951186,brick:!0,lit:.3}),apartment:rc({bay:3.6,floor:3.1,win:[.22,.28,.2,0],glassA:2503229,glassB:6322314,lit:.45,ground:3.6})};for(let K in B)r.push(B[K].userData.u);let I=new fe(1,1,1).translate(0,.5,0),z=520,Z={},U={};for(let K in B)Z[K]=new _t(I,B[K],z),Z[K].castShadow=!0,Z[K].receiveShadow=!0,U[K]=0;let q=new Oe,ee=[],ue={glass:[[.55,.6,.66],[.32,.36,.42],[.2,.22,.26],[.62,.62,.6]],office:[[.78,.77,.73],[.66,.65,.62],[.82,.78,.68],[.55,.56,.58]],brick:[[.58,.3,.22],[.5,.26,.2],[.66,.42,.3],[.45,.3,.24],[.7,.58,.44]],apartment:[[.84,.8,.7],[.74,.68,.6],[.6,.66,.7],[.82,.72,.62],[.7,.5,.42]]};function me(K,oe,Me,Pe,Ie,se,W,te=null){let he=Z[K],be=U[K]++;if(Ht(he,be,oe,.13,Me,0,Pe,se,Ie),q.setRGB(W[0],W[1],W[2]),he.setColorAt(be,q),ee.push({x:oe,z:Me,w:Pe,d:Ie,h:se+.13,style:K}),o(oe-Pe/2,oe+Pe/2,Me-Ie/2,Me+Ie/2),!te){let xe=Math.round(oe/74)*74,je=Math.round(Me/74)*74,Qe=oe-xe,bt=Me-je,At=0,ht=0;Math.abs(Qe)>Math.abs(bt)?At=Qe>=0?1:-1:ht=bt>=0?1:-1,te={x:oe+At*(Pe/2),z:Me+ht*(Ie/2),nx:At,nz:ht}}s.push({id:s.length,minX:oe-Pe/2,maxX:oe+Pe/2,minZ:Me-Ie/2,maxZ:Me+Ie/2,h:se,door:te})}let we=[Om,nd],Ce=14/2+3,Ee=[{style:"office",dx:-1,dz:-1,w:26,d:26,h:96,rgb:[.33,.25,.2]},{style:"glass",dx:1,dz:-1,w:28,d:24,h:84,rgb:[.12,.13,.15]},{style:"office",dx:-1,dz:1,w:26,d:24,h:78,rgb:[.8,.75,.62]}],Ne=[];for(let K of Ee){let oe=we[0]+K.dx*(Ce+K.w/2),Me=we[1]+K.dz*(Ce+K.d/2);me(K.style,oe,Me,K.w,K.d,K.h,K.rgb,{x:oe,z:Me-K.dz*(K.d/2),nx:0,nz:-K.dz}),Ne.push({minX:oe-K.w/2-2,maxX:oe+K.w/2+2,minZ:Me-K.d/2-2,maxZ:Me+K.d/2+2})}{let K=we[0]+Ce+13,oe=we[1]+Ce+12;VE(n,K,oe,o,s),Ne.push({minX:K-14,maxX:K+14,minZ:oe-13,maxZ:oe+13})}let G=e.concat(Ne),_e=4;for(let K of F){if(K.special)continue;let oe=K.district,Me=oe==="downtown"?t()<.5?4:9:oe==="residential"?9:t()<.6?4:9,Pe=Math.sqrt(Me),Ie=(60-_e*2)/Pe;for(let se=0;se<Me;se++){let W=t()<(oe==="residential"?.32:.2),te=se%Pe,he=Math.floor(se/Pe),be=Ie*(.62+t()*.3),xe=Ie*(.62+t()*.3),je=K.cx-(60-_e*2)/2+Ie*(te+.5)+(t()-.5)*2,Qe=K.cz-(60-_e*2)/2+Ie*(he+.5)+(t()-.5)*2,bt=t(),At=t();if(W||oc(G,je-be/2,je+be/2,Qe-xe/2,Qe+xe/2))continue;let ht,Qt;oe==="downtown"?(ht=bt<.55?"glass":"office",Qt=28+At*62):oe==="exchange"?(ht="brick",Qt=12+At*16):oe==="residential"?(ht=bt<.75?"apartment":"brick",Qt=7+At*14):(ht=bt<.4?"office":bt<.7?"apartment":bt<.85?"brick":"glass",Qt=14+At*30);let $n=ue[ht],_r=$n[t()*$n.length|0],Ro=.9+t()*.2;me(ht,je,Qe,be,xe,Qt,[_r[0]*Ro,_r[1]*Ro,_r[2]*Ro])}}for(let K in Z)Z[K].count=U[K],Z[K].instanceMatrix.needsUpdate=!0,Z[K].instanceColor&&(Z[K].instanceColor.needsUpdate=!0),n.add(Z[K]);{let K=new fe(1,1,1).translate(0,.5,0),oe=new ae({color:5987680,roughness:.85}),Me=new _t(K,oe,ee.length*4),Pe=0;for(let xe of ee)Ht(Me,Pe++,xe.x,xe.h,xe.z-xe.d/2+.35/2,0,xe.w,.9,.35),Ht(Me,Pe++,xe.x,xe.h,xe.z+xe.d/2-.35/2,0,xe.w,.9,.35),Ht(Me,Pe++,xe.x-xe.w/2+.35/2,xe.h,xe.z,0,.35,.9,xe.d),Ht(Me,Pe++,xe.x+xe.w/2-.35/2,xe.h,xe.z,0,.35,.9,xe.d);Me.count=Pe,Me.instanceMatrix.needsUpdate=!0,Me.castShadow=!0,n.add(Me);let Ie=new fe(1.8,1.2,1.8).translate(0,.6,0),se=new _t(Ie,new ae({color:10133670,roughness:.6,metalness:.5}),ee.length*2),W=0,te=[];for(let xe of ee){let je=1+Math.floor(t()*2);for(let Qe=0;Qe<je;Qe++)Ht(se,W++,xe.x+(t()-.5)*xe.w*.5,xe.h,xe.z+(t()-.5)*xe.d*.5,t()*3,.7+t()*.6,1,.7+t()*.6);xe.style==="brick"&&t()<.45&&te.push(xe)}se.count=W,se.instanceMatrix.needsUpdate=!0,se.castShadow=!0,n.add(se);let he=or([new Be(1.7,1.7,2.8,12).translate(0,4.2,0),new _s(1.9,1.2,12).translate(0,6.2,0),...[[-1,-1],[1,-1],[-1,1],[1,1]].map(([xe,je])=>new Be(.1,.1,2.8,5).translate(xe*1.1,1.4,je*1.1))]),be=new _t(he,new ae({color:7031346,roughness:.9}),Math.max(1,te.length));te.forEach((xe,je)=>Ht(be,je,xe.x+(t()-.5)*xe.w*.3,xe.h,xe.z+(t()-.5)*xe.d*.3,0,1,1,1)),be.count=te.length,be.instanceMatrix.needsUpdate=!0,be.castShadow=!0,n.add(be)}{let K=bs(64,96,(te,he,be)=>{te.fillStyle="#20262f",te.fillRect(0,0,he,be),te.fillStyle="#c9a45a",te.fillRect(0,0,he,6),te.fillRect(0,0,5,be),te.fillRect(he-5,0,5,be),te.fillStyle="#7fb0d8",te.fillRect(9,12,he/2-12,be-20),te.fillRect(he/2+3,12,he/2-12,be-20),te.fillStyle="#d6d6d6",te.fillRect(he/2-6,be/2,3,10),te.fillRect(he/2+3,be/2,3,10)}),oe=new Ge(2.2,3).translate(0,1.5,0),Me=new ae({map:K,emissive:16762995,emissiveMap:K,emissiveIntensity:.2,roughness:.4,metalness:.3}),Pe=new fe(3.2,.12,1.2).translate(0,3.4,.55),Ie=new ae({color:2830134,roughness:.6}),se=new _t(oe,Me,Math.max(1,s.length)),W=new _t(Pe,Ie,Math.max(1,s.length));s.forEach((te,he)=>{let be=te.door.nx?te.door.nx>0?Math.PI/2:-Math.PI/2:te.door.nz>0?0:Math.PI;Ht(se,he,te.door.x+te.door.nx*.03,.13,te.door.z+te.door.nz*.03,be,1,1,1),Ht(W,he,te.door.x,.13,te.door.z,be,1,1,1)}),se.count=W.count=s.length,se.instanceMatrix.needsUpdate=!0,W.instanceMatrix.needsUpdate=!0,W.castShadow=!0,n.add(se,W),r.push({door:Me})}let ce={scene:n,addCol:o,buildingInfo:s,rand:t,makeCanvas:bs,landmarkReserved:[],glowMats:r};WE(ce,...In.arena),XE(ce,...In.legislature),qE(ce,...In.forks),ZE(ce,...In.museum),YE(ce,...In.mansion),$E(ce,...In.hospital),KE(ce,...In.park),JE(ce,...In.parking);let ie=jE(ce);QE(ce);let ze=eb(ce);sb(ce);{let K=[];for(let te of F)if(!(te.special==="parking"||te.special==="forks"))for(let he=0;he<4;he++)for(let be=-60/2+9;be<=60/2-9;be+=10+t()*6){if(t()<.35)continue;let xe=60/2-.9,[je,Qe]=he===0?[te.cx+be,te.cz-xe]:he===1?[te.cx+xe,te.cz+be]:he===2?[te.cx+be,te.cz+xe]:[te.cx-xe,te.cz+be];if(oc(G,je-1.5,je+1.5,Qe-1.5,Qe+1.5))continue;let bt=!1;for(let At of s)if(Math.abs(At.door.x-je)<3.5&&Math.abs(At.door.z-Qe)<3.5){bt=!0;break}bt||K.push([je,Qe,.85+t()*.4])}for(let te=0;te<90;te++){let he=-340+t()*340*2;K.push([344+t()*9,he,.9+t()*.5]),K.push([-346-t()*30,he,.9+t()*.5])}for(let te=0;te<70;te++){let he=-340+t()*(340+xt.minX);K.push([he,344+t()*9,.9+t()*.5]),K.push([he,-346-t()*30,.9+t()*.5])}for(let te of ce.parkTrees||[])K.push(te);let oe=new Be(.2,.32,3.4,6).translate(0,1.7,0),Me=or([new nr(2.4,1).translate(0,5.2,0),new nr(1.8,1).translate(1.5,4.4,.6),new nr(1.7,1).translate(-1.3,4.6,-.7),new nr(1.5,1).translate(.2,6.6,.3)]),Pe=new _t(oe,new ae({color:5980977,roughness:.95}),K.length),Ie=new ae({color:16777215,roughness:.9,flatShading:!0}),se=new _t(Me,Ie,K.length),W=new Oe;K.forEach(([te,he,be],xe)=>{Ht(Pe,xe,te,.12,he,t()*6.28,be,be,be),Ht(se,xe,te,.12,he,t()*6.28,be,be*(.9+t()*.25),be),W.setHSL(.24+t()*.06,.45+t()*.15,.26+t()*.08),se.setColorAt(xe,W)}),Pe.instanceMatrix.needsUpdate=!0,se.instanceMatrix.needsUpdate=!0,se.instanceColor.needsUpdate=!0,se.castShadow=!0,Pe.castShadow=!0,n.add(Pe,se)}let Le=[];for(let K of Tt)for(let oe=-d/2+25;oe<d/2-10;oe+=37){let Me=Math.round(oe/37)%2===0?1:-1;Tt.some(Pe=>Math.abs(Pe-oe)<12)||(Le.push([K+Me*(14/2+1.2),oe,Me,0]),Le.push([oe,K+Me*(14/2+1.2),Me,1]))}let N=or([new Be(.1,.16,8.5,6).translate(0,4.25,0),new Be(.06,.06,2.4,5).rotateZ(Math.PI/2).translate(-1.1,8.4,0)]),D=new ae({color:3093563,roughness:.55,metalness:.6}),$=new fe(.9,.18,.4).translate(-2.2,8.3,0),ve=new ae({color:16774096,emissive:16766352,emissiveIntensity:.3,roughness:.4}),ge=new _t(N,D,Le.length),pe=new _t($,ve,Le.length);Le.forEach(([K,oe,Me,Pe],Ie)=>{let se=Pe?Me>0?-Math.PI/2:Math.PI/2:Me>0?0:Math.PI;Ht(ge,Ie,K,.12,oe,se,1,1,1),Ht(pe,Ie,K,.12,oe,se,1,1,1)}),ge.instanceMatrix.needsUpdate=!0,pe.instanceMatrix.needsUpdate=!0,ge.castShadow=!0,n.add(ge,pe);let Fe=bs(64,64,K=>{let oe=K.createRadialGradient(32,32,2,32,32,30);oe.addColorStop(0,"rgba(255,220,150,1)"),oe.addColorStop(.4,"rgba(255,200,120,0.45)"),oe.addColorStop(1,"rgba(255,190,110,0)"),K.fillStyle=oe,K.fillRect(0,0,64,64)}),Ae=new Float32Array(Le.length*3),Ue=new k;Le.forEach(([K,oe,Me,Pe],Ie)=>{let se=Pe?Me>0?-Math.PI/2:Math.PI/2:Me>0?0:Math.PI;Ue.set(-2.2,8.2,0).applyAxisAngle(Zm,se),Ae[Ie*3]=K+Ue.x,Ae[Ie*3+1]=8.2,Ae[Ie*3+2]=oe+Ue.z});let Xe=new Ut;Xe.setAttribute("position",new mn(Ae,3));let Je=new jo({map:Fe,size:6,transparent:!0,opacity:0,blending:$t,depthWrite:!1}),ye=new zl(Xe,Je);ye.frustumCulled=!1,n.add(ye),tb(ce,G),nb(ce,F,G),ib(ce);{let K=new fe(1,1,1).translate(0,.5,0),oe=new ae({color:8753827,roughness:1,fog:!0}),Me=70,Pe=new _t(K,oe,Me);for(let Ie=0;Ie<Me;Ie++){let se=Ie/Me*Math.PI*2,W=900+t()*260;Ht(Pe,Ie,Math.cos(se)*W,0,Math.sin(se)*W,t(),30+t()*50,12+t()*45,30+t()*50)}Pe.instanceMatrix.needsUpdate=!0,n.add(Pe)}let pt={x:Tt[5]+3.5,z:120,heading:0};function ot(K){for(let oe of r)oe.uNight&&(oe.uNight.value=K),oe.door&&(oe.door.emissiveIntensity=.2+K*1.2),oe.mat&&(oe.mat.emissiveIntensity=oe.base+K*(oe.night??2));ve.emissiveIntensity=.3+K*2.2,Je.opacity=K*.6}let Ye=0;function We(K,oe){Ye+=K;let Me=Math.round(oe.x/m)*m,Pe=Math.round(oe.z/m)*m;l.target.position.set(Me,0,Pe),l.position.set(Me+h,u,Pe+p),l.target.updateMatrixWorld(),ie&&ie.update(K)}return We(0,pt),{colliders:i,buildings:s,spawn:pt,dragStrip:ze,update:We,setGlow:ot,sun:l,hemi:a,roadLines:Tt}}var ke=(n,e={})=>new ae(Object.assign({color:n,roughness:.8},e));function Ot(n,e,t,i,s,r,o,a,l=!0){let c=new X(new fe(e,t,i).translate(0,t/2,0),s);return c.position.set(r,o,a),c.castShadow=l,c.receiveShadow=!0,n.add(c),c}function la(n,e,t,i=512,s=128,r="bold 72px sans-serif"){let o=document.createElement("canvas");o.width=i,o.height=s;let a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,i,s),a.fillStyle=t,a.font=r,a.textAlign="center",a.textBaseline="middle",a.fillText(n,i/2,s/2+4);let l=new cn(o);return l.colorSpace=vt,l}function oo(n,e,t,i,s,r,o){n.buildingInfo.push({id:n.buildingInfo.length,minX:e,maxX:t,minZ:i,maxZ:s,h:r,door:o})}function VE(n,e,t,i,s){let r=ke(14208957,{roughness:.7});Ot(n,26,16,24,r,e,.13,t),Ot(n,27,1.4,25,ke(12892838),e,16.1,t);for(let o=0;o<6;o++){let a=new X(new Be(.55,.62,12,14),r);a.position.set(e-10+o*4,6.2,t-13.3),a.castShadow=!0,n.add(a);let l=a.clone();l.position.set(e-13.3,6.2,t-10+o*4),n.add(l)}Ot(n,26,1.6,2.2,r,e,12.2,t-13.2),i(e-13.5,e+13,t-13.5,t+12),s.push({id:s.length,minX:e-13,maxX:e+13,minZ:t-12,maxZ:t+12,h:16,door:{x:e,z:t-12,nx:0,nz:-1}})}function WE(n,e,t){let{scene:i}=n,s=new X(new Be(1,1,1,48).translate(0,.5,0),ke(2896960,{metalness:.6,roughness:.3,envMapIntensity:1.2}));s.scale.set(26,21,23),s.position.set(e,.13,t),s.castShadow=!0,s.receiveShadow=!0,i.add(s);let r=new X(new Be(1.01,1.01,1,48,1,!0).translate(0,.5,0),ke(6990040,{metalness:.8,roughness:.08,transparent:!0,opacity:.85,emissive:1060938,emissiveIntensity:.5}));r.scale.set(26,9,23),r.position.set(e,.13,t),i.add(r);let o=ke(1118481,{emissive:3890175,emissiveIntensity:1.6}),a=new X(new Be(1.012,1.012,1,48,1,!0).translate(0,.5,0),o);a.scale.set(26,1.4,23),a.position.set(e,15,t),i.add(a),n.glowMats.push({mat:o,base:1.6,night:1.5});let l=new X(new Pt(1,40,12,0,Math.PI*2,0,Math.PI/2),ke(12107976,{metalness:.7,roughness:.35}));l.scale.set(26,5,23),l.position.set(e,21.1,t),l.castShadow=!0,i.add(l);let c=new X(new Ge(22,4),new ae({map:la("ARENA","#0b0f1a","#ffffff"),emissive:16777215,emissiveIntensity:.4}));c.material.emissiveMap=c.material.map,c.position.set(e,11.5,t+23.2),i.add(c),n.addCol(e-25,e+25,t-22,t+22),oo(n,e-25,e+25,t-22,t+22,21,{x:e,z:t+23,nx:0,nz:1})}function XE(n,e,t){let{scene:i}=n,s=ke(14273969,{roughness:.75}),r=new X(new Ge(58,58).rotateX(-Math.PI/2),ke(5209404,{roughness:1}));r.position.set(e,.14,t),r.receiveShadow=!0,i.add(r);let o=t-6;Ot(i,44,15,16,s,e,.13,o),Ot(i,12,15,34,s,e-20,.13,o+4),Ot(i,12,15,34,s,e+20,.13,o+4),Ot(i,45,1.2,17,ke(13221022),e,15.1,o);for(let f=0;f<6;f++){let v=new X(new Be(.6,.7,11,14),s);v.position.set(e-7.5+f*3,5.6,o-9.6),v.castShadow=!0,i.add(v)}Ot(i,19,1.5,3,s,e,11.1,o-9.6);let a=new X(new Be(.01,10.5,4,3,1).rotateZ(Math.PI/2).rotateY(Math.PI/2),s);a.scale.set(1,1,.3),a.position.set(e,14.6,o-9.6),i.add(a);let l=new X(new Be(7,7.4,9,32),s);l.position.set(e,20.6,o),l.castShadow=!0,i.add(l);for(let f=0;f<16;f++){let v=f/16*Math.PI*2,y=new X(new Be(.35,.35,8,8),s);y.position.set(e+Math.cos(v)*7.6,20.6,o+Math.sin(v)*7.6),i.add(y)}let c=new X(new Pt(7.4,32,16,0,Math.PI*2,0,Math.PI/2),ke(9413530,{metalness:.5,roughness:.4}));c.scale.set(1,1.15,1),c.position.set(e,25.1,o),c.castShadow=!0,i.add(c);let h=new X(new Be(1.4,1.6,4,16),s);h.position.set(e,35.6,o),i.add(h);let u=ke(16763210,{metalness:1,roughness:.22,emissive:5913088,emissiveIntensity:.5}),p=new it;p.add(new X(new fe(.7,1.6,.45).translate(0,.8,0),u)),p.add(new X(new Pt(.32,12,10).translate(0,1.95,0),u));let m=new X(new fe(.22,1.3,.22).translate(0,.65,0),u);m.position.set(.45,1.4,0),m.rotation.z=-.3,p.add(m);let g=new X(new _s(.22,.6,8),u);g.position.set(.85,2.9,0),p.add(g);let x=new X(new fe(.25,1.2,.25).translate(0,-.6,0),u);x.position.set(-.15,.1,0),p.add(x);let d=x.clone();d.position.set(.2,.2,0),d.rotation.x=.6,p.add(d),p.position.set(e,38.3,o),p.scale.setScalar(1.4),i.add(p);for(let f of[-1,1]){let v=new X(new Be(.08,.1,12,6),ke(14540253,{metalness:.8}));v.position.set(e+f*16,6.1,t-26),i.add(v);let y=new X(new Ge(2.6,1.5),ke(f<0?14100029:2052031,{side:wt}));y.position.set(e+f*16+1.3,11.2,t-26),i.add(y)}n.addCol(e-22,e+22,o-8,o+8),n.addCol(e-26,e-14,o-13,o+21),n.addCol(e+14,e+26,o-13,o+21),n.addCol(e-9.5,e+9.5,o-10.5,o-8),oo(n,e-22,e+22,o-10.5,o+8,15,{x:e,z:o-10.6,nx:0,nz:-1})}function qE(n,e,t){let{scene:i}=n,s=new X(new Ge(58,58).rotateX(-Math.PI/2),ke(12166540,{roughness:.95}));s.position.set(e,.14,t),s.receiveShadow=!0,i.add(s);let r=ke(9128498,{roughness:.9}),o=ke(3817284,{roughness:.7});for(let[u,p]of[[e-10,t-12],[e-10,t+6]]){Ot(i,30,9,13,r,u,.13,p);let m=new X(new Be(.01,8,30,3,1).rotateZ(Math.PI/2),o);m.scale.set(1,1,.6),m.rotation.x=Math.PI,m.position.set(u,11.4,p),m.castShadow=!0,i.add(m),n.addCol(u-15,u+15,p-6.5,p+6.5)}Ot(i,6,24,6,r,e+10,.13,t-3);let a=new X(new Pi(1.8,24),ke(15921906,{emissive:16777215,emissiveIntensity:.3}));a.position.set(e+10,20,t-6.05),a.rotation.y=Math.PI,i.add(a);let l=new X(new _s(4.6,5,4),o);l.rotation.y=Math.PI/4,l.position.set(e+10,26.7,t-3),i.add(l),n.addCol(e+7,e+13,t-6,t),oo(n,e-25,e+5,t-18.5,t-5.5,9,{x:e-10,z:t-18.6,nx:0,nz:-1});let c="WINNIPEG",h=["#ff2e63","#ff8c1a","#ffd23f","#4ade80","#18c0c0","#1f6feb","#a855f7","#ff5e3a"];for(let u=0;u<c.length;u++){let p=la(c[u],h[u],"#ffffff",128,128,"bold 110px sans-serif"),m=new X(new fe(2.4,3.2,.7),[ke(h[u]),ke(h[u]),ke(h[u]),ke(h[u]),new ae({map:p}),new ae({map:p})]);m.position.set(e+4+u*2.7-9,1.75,t+22),m.castShadow=!0,i.add(m)}n.addCol(e-7,e+15,t+21.4,t+22.6)}function ZE(n,e,t){let{scene:i}=n,s=ke(8153688,{roughness:.9});for(let h=0;h<4;h++){let u=14+h*3,p=new X(new Be(u,u+1.5,6-h,36,1,!1,h*.6,Math.PI*1.1),s);p.position.set(e,.13+(6-h)/2,t),p.castShadow=!0,i.add(p)}let r=ke(12113642,{metalness:.9,roughness:.05,transparent:!0,opacity:.9,envMapIntensity:1.6}),o=new X(new Pt(1,32,18),r);o.scale.set(18,12,13),o.position.set(e-2,12,t),o.castShadow=!0,i.add(o),Ot(i,26,10,22,ke(4869973,{roughness:.6}),e,.13,t);let a=new X(new Be(1.4,3.4,70,12),r);a.position.set(e+8,35,t+2),a.castShadow=!0,i.add(a);let l=ke(16777215,{emissive:16777215,emissiveIntensity:1.2}),c=new X(new Pt(1.5,14,10),l);c.position.set(e+8,70.5,t+2),i.add(c),n.glowMats.push({mat:l,base:1.2,night:3}),n.addCol(e-13,e+13,t-11,t+11),oo(n,e-13,e+13,t-11,t+11,10,{x:e,z:t-11,nx:0,nz:-1})}function YE(n,e,t){let{scene:i}=n,s=new X(new Ge(58,58).rotateX(-Math.PI/2),ke(4160051,{roughness:1}));s.position.set(e,.14,t),s.receiveShadow=!0,i.add(s);let r=ke(15855076,{roughness:.6});Ot(i,30,10,16,r,e,.13,t+6),Ot(i,12,13,18,r,e,.13,t+6);let o=new X(new Be(.01,10,32,4,1).rotateZ(Math.PI/2).rotateY(0),ke(2237739));o.scale.set(1,.5,.9),o.position.set(e,12.6,t+6),o.rotation.x=Math.PI/4,i.add(o);for(let p=0;p<4;p++){let m=new X(new Be(.4,.45,9,12),r);m.position.set(e-4.5+p*3,4.6,t-3.2),m.castShadow=!0,i.add(m)}Ot(i,13,1,3,r,e,9.1,t-3);let a=new X(new Ge(12,6).rotateX(-Math.PI/2),ke(1614040,{roughness:.05,metalness:.2,emissive:670298,emissiveIntensity:.4}));a.position.set(e+16,.16,t-14),i.add(a);let l=new X(new Ge(3,3),new ae({map:la("E","#0f9d58","#ffd23f",128,128,"bold 100px serif"),emissive:1023320,emissiveIntensity:.3}));l.position.set(e,10.5,t-3.05),l.rotation.y=Math.PI,i.add(l);let c=ke(13617336,{roughness:.8}),h=2.6,u=27;Ot(i,54,h,.6,c,e,.13,t+u),n.addCol(e-27,e+27,t+u-.3,t+u+.3),Ot(i,.6,h,54,c,e-u,.13,t),n.addCol(e-u-.3,e-u+.3,t-27,t+27),Ot(i,.6,h,54,c,e+u,.13,t),n.addCol(e+u-.3,e+u+.3,t-27,t+27),Ot(i,21,h,.6,c,e-16.5,.13,t-u),n.addCol(e-27,e-6,t-u-.3,t-u+.3),Ot(i,21,h,.6,c,e+16.5,.13,t-u),n.addCol(e+6,e+27,t-u-.3,t-u+.3),n.addCol(e-15,e+15,t-2,t+14),oo(n,e-15,e+15,t-2,t+14,10,{x:e,z:t-2,nx:0,nz:-1})}function $E(n,e,t){let{scene:i}=n,s=ke(15265007,{roughness:.5});Ot(i,40,26,26,s,e,.13,t),Ot(i,18,8,10,s,e-8,.13,t+18);let r=ke(2902627,{metalness:.6,roughness:.15});for(let a=0;a<6;a++)Ot(i,40.2,1.4,26.2,r,e,3.2+a*3.8,t,!1);let o=la("H","#d7263d","#ffffff",128,128,"bold 110px sans-serif");for(let[a,l,c]of[[e,t-13.05,Math.PI],[e+20.05,t,Math.PI/2]]){let h=new X(new Ge(5,5),new ae({map:o,emissive:16777215,emissiveMap:o,emissiveIntensity:.5}));h.position.set(a,22,l),h.rotation.y=c,i.add(h)}n.addCol(e-20,e+20,t-13,t+13),n.addCol(e-17,e+1,t+13,t+23),oo(n,e-20,e+20,t-13,t+13,26,{x:e+20,z:t,nx:1,nz:0})}function KE(n,e,t){let{scene:i,rand:s}=n,r=new X(new Ge(58,58).rotateX(-Math.PI/2),ke(5212734,{roughness:1}));r.position.set(e,.14,t),r.receiveShadow=!0,i.add(r);let o=ke(13154714,{roughness:1});for(let h of[0,Math.PI/2]){let u=new X(new Ge(58,3).rotateX(-Math.PI/2),o);u.rotation.z=0,u.rotateY(h),u.position.set(e,.15,t),i.add(u)}let a=new X(new Be(5,5.4,1,28),ke(12104876));a.position.set(e,.6,t),i.add(a);let l=new X(new Pi(4.6,28).rotateX(-Math.PI/2),ke(3842248,{roughness:.05,metalness:.3}));l.position.set(e,1.12,t),i.add(l);let c=new X(new Be(.3,.6,3,10),ke(12104876));c.position.set(e,2.5,t),i.add(c),n.addCol(e-5.2,e+5.2,t-5.2,t+5.2),n.parkTrees=[];for(let h=0;h<22;h++){let u=s()*Math.PI*2,p=9+s()*18,m=e+Math.cos(u)*p,g=t+Math.sin(u)*p;Math.abs(m-e)<2.5||Math.abs(g-t)<2.5||n.parkTrees.push([m,g,1+s()*.4])}}function JE(n,e,t){let{scene:i}=n,s=new X(new Ge(60,60).rotateX(-Math.PI/2),ke(3422012,{roughness:.95}));s.position.set(e,.14,t),s.receiveShadow=!0,i.add(s);let r=new fe(.14,.02,5.6),o=ke(15264492),a=new _t(r,o,60),l=0;for(let c of[-12,0,12])for(let h=0;h<=15;h++)l<60&&Ht(a,l++,e-24+h*3.2,.16,t+c,0,1,1,1);a.count=l,a.instanceMatrix.needsUpdate=!0,i.add(a)}function jE(n){let{scene:e}=n,t=GE();t.wrapS=t.wrapT=zn,t.repeat.set(30,30);let i=new ae({color:3496026,roughness:.12,metalness:.35,normalMap:t,normalScale:new de(.7,.7),envMapIntensity:1.4}),s=ke(7035460,{roughness:1}),r=ke(10130828,{roughness:.9}),o=-1400,a=gn.maxZ,l=-1400,c=a-o,h=new X(new Ge(xt.maxX-xt.minX,c).rotateX(-Math.PI/2),i);h.position.set((xt.minX+xt.maxX)/2,.08,(o+a)/2),e.add(h);let u=xt.minX-l,p=new X(new Ge(u,gn.maxZ-gn.minZ).rotateX(-Math.PI/2),i);p.position.set((l+xt.minX)/2,.08,(gn.minZ+gn.maxZ)/2),e.add(p);let m=(v,y,T,C)=>{let _=new X(new Ge(v,y).rotateX(-Math.PI/2),s);_.position.set(T,.07,C),e.add(_)};m(6,c,xt.minX-1,(o+a)/2),m(6,c,xt.maxX+1,(o+a)/2),m(u,6,(l+xt.minX)/2,gn.minZ-1),m(u+80,6,(l+xt.maxX)/2,gn.maxZ+1);let g=new X(new fe(3,.5,c),r);g.position.set(xt.minX-4.5,.25,(o+a)/2),g.receiveShadow=!0,e.add(g);let x=Mn-Li,d=Mn+Li;n.addCol(xt.minX-1,xt.minX,o,x),n.addCol(xt.minX-1,xt.minX,d,gn.minZ),n.addCol(xt.maxX,xt.maxX+1,o,x),n.addCol(xt.maxX,xt.maxX+1,d,a+40),n.addCol(l,xt.minX,gn.minZ-1,gn.minZ),n.addCol(l,xt.maxX+1,gn.maxZ,gn.maxZ+1);let f=0;return{update(v){f+=v,t.offset.set(f*.004,-f*.012)}}}function QE(n){let{scene:e}=n,t=xt.minX-4,i=xt.maxX+4,s=i-t,r=(t+i)/2,o=ke(9409174,{roughness:.7}),a=qm();a.wrapS=a.wrapT=zn,a.repeat.set(s/8,2);let l=new X(new fe(s,.6,Li*2+4),o);l.position.set(r,-.24,Mn),l.receiveShadow=!0,l.castShadow=!0,e.add(l);let c=new X(new Ge(s,14).rotateX(-Math.PI/2),new ae({map:a,roughness:.88}));c.position.set(r,.075,Mn),c.receiveShadow=!0,e.add(c);let h=ke(14278114,{metalness:.8,roughness:.3});for(let V of[-1,1])Ot(e,s,1.1,.25,h,r,.07,Mn+V*(Li+1.5)),n.addCol(t+4,i-4,Mn+V*(Li+1.5)-.2,Mn+V*(Li+1.5)+.2);let u=ke(15659250,{roughness:.4,metalness:.3}),p=new X(new Be(.7,1.3,58,10).translate(0,29,0),u);p.position.set(r,0,Mn-Li-2.4),p.rotation.z=-.08,p.castShadow=!0,e.add(p);let m=new k(r-Math.sin(.08)*57,57,Mn-Li-2.4),g=[];for(let V=1;V<=7;V++)for(let A of[-1,1]){let L=r+A*V*(s/16),w=Mn-Li-1.4;g.push(m.x,m.y-V*2.2,m.z,L,.6,w)}let x=new Ut;x.setAttribute("position",new st(g,3)),e.add(new Ol(x,new Jo({color:14672872})));let d=rd();d.wrapS=d.wrapT=zn;let f=340,v=t,y=i,T=hi;for(let[V,A]of[[f,v],[y,T]]){let L=d.clone();L.needsUpdate=!0,L.repeat.set(1,(A-V)/28);let w=new X(new Ge(14,A-V).rotateX(-Math.PI/2),new ae({map:L,roughness:.88}));w.rotation.y=Math.PI/2,w.position.set((V+A)/2,.05,Mn),w.receiveShadow=!0,e.add(w)}let C=ke(12761251,{roughness:.9}),_=xt.maxX+30,M=Mn+70,S=new ts;S.moveTo(-14,0),S.lineTo(14,0),S.lineTo(14,22),S.lineTo(0,30),S.lineTo(-14,22),S.closePath();let b=new Ci;b.absarc(0,17,6,0,Math.PI*2,!0),S.holes.push(b);let E=new Ci;E.moveTo(-3,.5),E.lineTo(3,.5),E.lineTo(3,7),E.absarc(0,7,3,0,Math.PI,!1),E.lineTo(-3,.5),S.holes.push(E);let H=new X(new Ms(S,{depth:2,bevelEnabled:!1}),C);H.position.set(_,0,M),H.rotation.y=-Math.PI/2,H.castShadow=!0,e.add(H),n.addCol(_-1,_+2.5,M-14,M+14)}function eb(n){let{scene:e}=n,t=Di*2,i=rd();i.wrapS=i.wrapT=zn,i.repeat.set(1,t/18);let s=new X(new Ge(9,t).rotateX(-Math.PI/2),new ae({map:i,roughness:.9}));s.position.set(hi,.05,0),s.receiveShadow=!0,e.add(s);let r=new X(new Ge(9,1.6).rotateX(-Math.PI/2),ke(15922422));r.position.set(hi,.07,Di-8),e.add(r);let o=new fe(4,1.1,.7).translate(0,.55,0),a=Math.floor(t/9)*2,l=new _t(o,ke(16777215,{roughness:.6}),a),c=new Oe,h=0;for(let u=-Di+4;u<=Di-4&&h<a;u+=9)for(let p of[-1,1])Ht(l,h,hi+p*(4.5+1.6),.05,u,0,1,1,1),c.setHex(h%2?15922422:15229982),l.setColorAt(h,c),h++;return l.count=h,l.instanceMatrix.needsUpdate=!0,l.instanceColor.needsUpdate=!0,l.castShadow=!0,e.add(l),{startX:hi,startZ:Di-8,dirX:0,dirZ:-1,length:t}}function tb(n,e){let{scene:t,rand:i}=n,s=new ts,r=[[2.25,.35],[2.28,.62],[1.4,.78],[.6,.82],[-1.5,.84],[-2.2,.76],[-2.28,.4],[-2,.28],[2,.28]];s.moveTo(r[0][0],r[0][1]);for(let T of r.slice(1))s.lineTo(T[0],T[1]);s.closePath();let o=new Ms(s,{depth:1.78,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05,bevelSegments:2});o.translate(0,0,-.89),o.rotateY(Math.PI/2);let a=new ts,l=[[.62,.8],[.25,1.28],[-1.05,1.3],[-1.5,.84]];a.moveTo(l[0][0],l[0][1]);for(let T of l.slice(1))a.lineTo(T[0],T[1]);a.closePath();let c=new Ms(a,{depth:1.56,bevelEnabled:!1});c.translate(0,0,-.78),c.rotateY(Math.PI/2);let h=[];for(let T of[-.82,.82])for(let C of[-1.38,1.38])h.push(new Be(.33,.33,.24,14).rotateZ(Math.PI/2).translate(T,.33,C));let u=or([c,...h]),p=[],m=680;for(let T of Tt)for(let C of[-1,1])for(let _=-m/2+14;_<m/2-14;_+=6.4)Tt.some(M=>Math.abs(M-_)<14)||i()<.62||(i()<.5?p.push([T+C*5.9,_,C>0?Math.PI:0]):p.push([_,T+C*5.9,C>0?-Math.PI/2:Math.PI/2]));let g=p.filter(([T,C])=>!oc(e,T-3,T+3,C-3,C+3)&&!(Math.abs(T-(Tt[5]+3.5))<8&&C>60&&C<200)),x=new Ii({color:16777215,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.1}),d=new _t(o,x,g.length),f=new _t(u,new ae({color:1119256,metalness:.6,roughness:.25}),g.length),v=[12589080,1728464,15921906,1316380,7041664,2976335,13082632,7999504,14277081,862827],y=new Oe;g.forEach(([T,C,_],M)=>{Ht(d,M,T,0,C,_,1,1,1),Ht(f,M,T,0,C,_,1,1,1),y.setHex(v[i()*v.length|0]),d.setColorAt(M,y),Math.abs(Math.sin(_))>.5?n.addCol(T-2.3,T+2.3,C-1,C+1):n.addCol(T-1,T+1,C-2.3,C+2.3)}),d.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,d.instanceColor.needsUpdate=!0,d.castShadow=!0,d.receiveShadow=!0,t.add(d,f)}function nb(n,e,t){let{scene:i,rand:s}=n,r=[],o=[],a=[],l=[];for(let m of e)if(m.special!=="parking")for(let g=0;g<4;g++){let x=60/2-2.6,d=(s()-.5)*30,[f,v,y]=g===0?[m.cx+d,m.cz-x,0]:g===1?[m.cx+x,m.cz+d,Math.PI/2]:g===2?[m.cx+d,m.cz+x,Math.PI]:[m.cx-x,m.cz+d,-Math.PI/2];if(oc(t,f-2,f+2,v-2,v+2))continue;let T=s();T<.18?r.push([f,v,y]):T<.45?o.push([f,v,y]):T<.7&&l.push([f,v,y]),s()<.4&&a.push([m.cx+(g%2?(g===1?1:-1)*(60/2-1):(s()-.5)*40),m.cz+(g%2?(s()-.5)*40:(g===0?-1:1)*(60/2-1)),0])}let c=(m,g,x,d=!0)=>{let f=new _t(m,g,Math.max(1,x.length));x.forEach(([v,y,T],C)=>Ht(f,C,v,.13,y,T,1,1,1)),f.count=x.length,f.instanceMatrix.needsUpdate=!0,f.castShadow=d,i.add(f)},h=or([new fe(3.6,.12,1.6).translate(0,2.5,0),...[[-1.7,-.7],[1.7,-.7],[-1.7,.7],[1.7,.7]].map(([m,g])=>new fe(.08,2.5,.08).translate(m,1.25,g)),new fe(2.6,.08,.4).translate(0,.5,.45)]);c(h,ke(2051999,{metalness:.6,roughness:.4}),r);let u=new ae({color:10471912,transparent:!0,opacity:.35,roughness:.05,metalness:.5});c(new Ge(3.4,2.2).translate(0,1.3,.72),u,r,!1);let p=or([new fe(1.8,.08,.5).translate(0,.48,0),new fe(1.8,.45,.07).translate(0,.8,.24),new fe(.08,.48,.45).translate(-.8,.24,0),new fe(.08,.48,.45).translate(.8,.24,0)]);c(p,ke(7031342),o),c(or([new Be(.17,.2,.75,10).translate(0,.37,0),new Pt(.19,10,6,0,Math.PI*2,0,Math.PI/2).translate(0,.75,0),new Be(.06,.06,.5,6).rotateZ(Math.PI/2).translate(0,.5,0)]),ke(13115434,{roughness:.5}),a),c(new Be(.3,.27,.95,10).translate(0,.47,0),ke(2969402,{roughness:.7}),l)}function ib(n){let{scene:e}=n,t=o=>{let a=document.createElement("canvas");a.width=256,a.height=48;let l=a.getContext("2d");l.fillStyle="#0e6b3a",l.fillRect(0,0,256,48),l.strokeStyle="#fff",l.lineWidth=3,l.strokeRect(3,3,250,42),l.fillStyle="#fff",l.font="bold 28px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(o,128,26);let c=new cn(a);return c.colorSpace=vt,new ae({map:c,side:wt})},i=ke(3817285,{metalness:.6}),s={},r=o=>s[o]||(s[o]=t(o));for(let o=0;o<Tt.length;o++)for(let a=0;a<Tt.length;a++){if(o!==7&&a!==4&&!(o%3===1&&a%3===1))continue;let l=Tt[o]+14/2+1,c=Tt[a]-14/2-1,h=new X(new Be(.05,.05,3.4,6),i);h.position.set(l,1.82,c),e.add(h);let u=new X(new Ge(2.4,.45),r(Nm[o]));u.position.set(l,3.4,c),u.rotation.y=Math.PI/2,e.add(u);let p=new X(new Ge(2.4,.45),r(Hm[a]));p.position.set(l,3,c),e.add(p)}}function sb(n){let{scene:e}=n,t=kn.maxX-kn.minX,i=kn.maxZ-kn.minZ,s=(kn.minX+kn.maxX)/2,r=(kn.minZ+kn.maxZ)/2,o=n.makeCanvas(256,256,(g,x,d)=>{ro(g,x,d,"#7a5b3c",.22,9e3,2),g.strokeStyle="rgba(60,40,22,0.35)",g.lineWidth=3;for(let f=0;f<18;f++){g.beginPath();let v=Math.random()*d;g.moveTo(0,v),g.bezierCurveTo(x*.3,v+20,x*.6,v-20,x,v+6),g.stroke()}});o.wrapS=o.wrapT=zn,o.repeat.set(t/16,i/16);let a=new X(new Ge(t,i).rotateX(-Math.PI/2),ke(16777215,{map:o,roughness:1}));a.position.set(s,.025,r),a.receiveShadow=!0,e.add(a);let l=n.makeCanvas(128,128,(g,x,d)=>ro(g,x,d,"#3d2a1a",.3,3e3,3)),c=new ae({map:l,color:16777215,roughness:.25,metalness:.15,envMapIntensity:.9});for(let[g,x,d]of sd){let f=new X(new Pi(d,28).rotateX(-Math.PI/2),c);f.position.set(g,.035,x),f.receiveShadow=!0,e.add(f);let v=new X(new ei(d,d+1.6,28).rotateX(-Math.PI/2),ke(5914920,{roughness:1}));v.position.set(g,.033,x),e.add(v)}let h=ke(9078140,{roughness:.95,flatShading:!0});for(let[g,x,d]of Fm){let f=new X(new Xl(d,0),h);f.scale.set(1,.65,1.1),f.rotation.set(n.rand()*3,n.rand()*3,n.rand()*3),f.position.set(g,d*.35,x),f.castShadow=f.receiveShadow=!0,e.add(f),n.addCol(g-d*.9,g+d*.9,x-d*.9,x+d*.9)}let u=ke(16747546),p=ke(14267482,{roughness:1});for(let g=0;g<28;g++){let x=g/28*Math.PI*2,d=s+Math.cos(x)*(t*.38),f=r+Math.sin(x)*(i*.4);if(Ot(e,.15,1.2,.15,u,d,0,f,!1),g%4===0){let v=new X(new Be(.75,.75,1.5,14).rotateZ(Math.PI/2),p);v.position.set(d+3,.75,f),v.castShadow=!0,e.add(v),n.addCol(d+2.2,d+3.8,f-.75,f+.75)}}let m=new X(new Ge(14,3.5),new ae({map:la("PRAIRIE OFF-ROAD PARK","#2d1d10","#ffb347",1024,256,"bold 84px sans-serif"),roughness:.6}));m.position.set(kn.maxX+4,5,-37),m.rotation.y=Math.PI/2,e.add(m);for(let g of[-1,1])Ot(e,.4,5,.4,ke(4864554),kn.maxX+4,0,-37+g*6.6)}var rb=[0,.24,.4,.55,.7,.85,1],od=class{constructor(){this.mode="auto",this.shiftTime=.2,this.reset()}reset(){this.gear=1,this.rpm=0,this.shiftT=0,this.limiter=!1,this.reverse=!1,this.lastShift=0}gearTop(e,t=this.gear){return e*rb[t]}rpmFor(e,t,i,s){let r=Math.abs(e),o=this.gearTop(t,i),a=i>1?this.gearTop(t,i-1):0,l=(r-a*.35)/(o-a*.35);i===1&&(l=r/o);let c=Math.max(0,.32*s*(1-r/Math.max(1,o*.5)));return Math.max(0,Math.min(1.04,Math.max(l,c)))}shift(e){let t=Math.max(1,Math.min(6,this.gear+e));return t===this.gear?!1:(this.gear=t,this.shiftT=this.shiftTime,this.lastShift=e,!0)}update(e,t,i,s){this.shiftT=Math.max(0,this.shiftT-s),this.reverse=e<-.5,this.reverse&&(this.gear=1);let r=this.rpmFor(e,i,this.gear,Math.max(0,t));return this.mode==="auto"&&!this.reverse&&this.shiftT<=0&&(r>.93&&this.gear<6&&t>.1?this.shift(1):this.gear>1&&this.rpmFor(e,i,this.gear-1,0)<.72&&(r<.4||t<0)&&this.shift(-1),r=this.rpmFor(e,i,this.gear,Math.max(0,t))),this.limiter=r>=1&&t>0,this.rpm+=(r-this.rpm)*Math.min(1,s*(this.shiftT>0?25:14)),this.shiftT>0?.15:this.limiter?0:(.62+.5*Math.sin(Math.PI*Math.min(1,.18+r*.82)))*(1.22-(this.gear-1)*.07)}},ao=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0,this.boost=0,this.spinning=!1,this.surf||(this.surf={speed:1,grip:1,drag:0,name:"road"}),this.box||(this.box=new od),this.box.shiftTime=e.shiftTime||.2,this.box.reset()}update(e,t,i){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,u=0,p=h?.25:1,m=this.surf,g=s.topSpeed*c*m.speed,x=this.box.update(l,e.throttle||0,s.topSpeed*c,t);if(s.boostGain){let R=Math.max(0,e.throttle||0),F=this.box.rpm,B=0;R>.05&&(s.boostKind==="roots"?B=R*(.7+.3*F):s.boostKind==="centri"?B=R*Math.min(1,F*F*1.15):B=R*Math.max(0,Math.min(1,(F-(s.spoolAt||0))/.22)));let I=B>this.boost?s.spoolRate||3:6;this.boost+=(B-this.boost)*Math.min(1,t*I),this.box.shiftT>0&&s.boostKind==="turbo"&&(this.boost*=Math.pow(.4,t*10))}else this.boost=0;let d=1+(s.boostGain||0)*this.boost;if(e.throttle>0?u=e.throttle*s.accel*d*c*p*x*(1-Math.max(0,l)/Math.max(1,g)*.55):e.throttle<0&&(u=l>1?e.throttle*s.accel*1.6*(s.brake||1):e.throttle*s.accel*.5),this.spinning=!1,u>0&&s.traction&&l<22){let R=s.traction*m.grip*(.75+.25*Math.min(1,l/22));u>R&&(this.spinning=u-R>2.5,u=R+(u-R)*.12)}u-=l*(.028+(h?.06:0)+(m.drag||0))+Math.sign(l)*.6,l+=u*t;let f=this.box.mode==="manual"?this.box.gearTop(s.topSpeed*c)*1.02:1/0,v=g,y=-s.topSpeed*.35;l>f&&(l-=(l-f)*Math.min(1,t*1.8)),l>v&&(l-=(l-v)*Math.min(1,t*(m.speed<1?2.2:60))),l=Math.max(y,l),Math.abs(l)<.15&&!e.throttle&&(l=0);let T=Math.abs(l),C=Math.min(1,T/8),_=this.steer*.55*s.handling*C*(1-Math.min(1,T/(s.topSpeed*1.4))*.45);T>.5&&(this.heading-=_*(l/T)*t*(T>1?Math.min(2.2,T*.12+.8):1)*2.2);let M=-Math.sin(this.heading),S=-Math.cos(this.heading),b=this.vel.x*M+this.vel.z*S,E=this.vel.x-M*b,H=this.vel.z-S*b;this.drifting=!!(e.handbrake&&T>6);let V=this.drifting?.983:Math.min(.995,.9+s.grip*.06*m.grip),A=Math.pow(V,t*60);E*=A,H*=A;let L=b+(l-b)*Math.min(1,t*60);this.vel.x=M*L+E,this.vel.z=S*L+H;let w=this.pos.x+this.vel.x*t,P=this.pos.z+this.vel.z*t;if(i){let R=i(w,P,this.pos.x,this.pos.z);w=R.x,P=R.z,R.hitX&&(this.vel.x*=-.25),R.hitZ&&(this.vel.z*=-.25)}return this.pos.x=w,this.pos.z=P,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer,gear:this.box.gear,rpm:this.box.rpm,shifting:this.box.shiftT>0,limiter:this.box.limiter,reverse:this.box.reverse,boost:this.boost,psi:this.boost*(s.psi||0),spinning:this.spinning,surface:m.name}}};function $m(n={}){let e=n.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1,aim:!1},i={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1,aim:!1},s=!1,r={x:0,y:0,id:null},o="drive",a=!1,l=!1,c=!1,h=!1,u=!1,p=!1,m=!1,g=[],x=w=>document.getElementById(w);function d(){t.steer=(i.right?1:0)-(i.left?1:0),t.throttle=i.gas?1:i.brake?-1:0,t.nitro=i.nitro,t.handbrake=i.handbrake;let w=(i.right?1:0)-(i.left?1:0),P=(i.gas?1:0)-(i.brake?1:0);t.moveX=r.id!==null?r.x:w,t.moveY=r.id!==null?r.y:P,t.run=i.run||i.nitro||r.id!==null&&Math.hypot(r.x,r.y)>.92,t.fire=i.fire,t.aim=i.aim||s||i.fire}function f(w,P){if(!w)return;let R=44,F=z=>{if(z.pointerId!==r.id)return;let Z=w.getBoundingClientRect(),U=z.clientX-(Z.left+Z.width/2),q=z.clientY-(Z.top+Z.height/2),ee=U,ue=q;e()&&(ee=q,ue=-U);let me=Math.hypot(ee,ue),we=Math.min(me,R);me>0&&(ee=ee/me*we,ue=ue/me*we),P.style.transform=`translate(${ee}px, ${ue}px)`;let Ce=.12,Ee=ee/R,Ne=-ue/R;Math.hypot(Ee,Ne)<Ce&&(Ee=0,Ne=0),r.x=Ee,r.y=Ne,d()},B=z=>{if(z.preventDefault(),r.id===null){r.id=z.pointerId;try{w.setPointerCapture(z.pointerId)}catch{}F(z)}},I=z=>{z.pointerId===r.id&&(r.id=null,r.x=0,r.y=0,P.style.transform="translate(0px, 0px)",d())};w.addEventListener("pointerdown",B),w.addEventListener("pointermove",F),w.addEventListener("pointerup",I),w.addEventListener("pointercancel",I),g.push(()=>{w.removeEventListener("pointerdown",B),w.removeEventListener("pointermove",F),w.removeEventListener("pointerup",I),w.removeEventListener("pointercancel",I)})}function v(w,P){if(!w)return;let R=B=>{B.preventDefault(),B.stopPropagation(),P(),w.classList.add("pressed")},F=()=>w.classList.remove("pressed");w.addEventListener("pointerdown",R),w.addEventListener("pointerup",F),w.addEventListener("pointerleave",F),g.push(()=>{w.removeEventListener("pointerdown",R),w.removeEventListener("pointerup",F),w.removeEventListener("pointerleave",F)})}function y(w,P){if(!w)return;let R=0,F=z=>{z.preventDefault(),R++,P==="fire"&&!i.fire&&(h=!0),i[P]=!0,d(),w.classList.add("pressed")},B=()=>{R=Math.max(0,R-1),R===0&&(i[P]=!1,d(),w.classList.remove("pressed"))},I=z=>z.preventDefault();w.addEventListener("pointerdown",F),w.addEventListener("pointerup",B),w.addEventListener("pointercancel",B),w.addEventListener("pointerleave",B),w.addEventListener("contextmenu",I),g.push(()=>{w.removeEventListener("pointerdown",F),w.removeEventListener("pointerup",B),w.removeEventListener("pointercancel",B),w.removeEventListener("pointerleave",B),w.removeEventListener("contextmenu",I)})}function T(w){if(!w)return;let P=F=>{F.preventDefault(),a=!0,w.classList.add("pressed")},R=()=>w.classList.remove("pressed");w.addEventListener("pointerdown",P),w.addEventListener("pointerup",R),w.addEventListener("pointercancel",R),w.addEventListener("pointerleave",R),g.push(()=>{w.removeEventListener("pointerdown",P),w.removeEventListener("pointerup",R),w.removeEventListener("pointercancel",R),w.removeEventListener("pointerleave",R)})}let C={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function _(w){let P=w.target;if(P&&(P.tagName==="INPUT"||P.tagName==="TEXTAREA"))return;let R=w.key,F=C[R];if(F){i[F]=!0,d(),w.preventDefault();return}if(R===" "){if(w.preventDefault(),w.repeat)return;o==="drag"?a=!0:o==="foot"?(i.fire||(h=!0),i.fire=!0,d()):(i.handbrake=!0,d());return}if(R==="e"||R==="E"||R==="Enter"){w.repeat||(l=!0);return}if(R==="q"||R==="Q"){w.repeat||(c=!0);return}if((R==="Shift"||R==="f"||R==="F")&&(i.nitro=!0,d()),(R==="r"||R==="R")&&(i.aim=!0,d()),R==="g"||R==="G"){w.repeat||(u=!0);return}if(R==="b"||R==="B"){w.repeat||(p=!0);return}}function M(w){let P=w.key,R=C[P];if(R){i[R]=!1,d();return}if(P===" "){i.handbrake=!1,i.fire=!1,d();return}(P==="Shift"||P==="f"||P==="F")&&(i.nitro=!1,d()),(P==="r"||P==="R")&&(i.aim=!1,d())}function S(w){w.button===2&&(i.aim=!0,d())}function b(w){w.button===2&&(i.aim=!1,d())}function E(w){o=w==="drag"||w==="foot"?w:"drive";let P=(F,B)=>{let I=x(F);I&&(I.style.display=B?"":"none")};P("steer-zone",o==="drive"),P("pedal-zone",o!=="foot"),P("btn-shift",o==="drag"),P("joystick",o==="foot"),P("foot-zone",o==="foot");for(let F in i)i[F]=!1;s=!1;{let F=x("btn-aim");F&&F.classList.remove("on")}r.id=null,r.x=0,r.y=0;let R=x("joy-knob");R&&(R.style.transform="translate(0px, 0px)");for(let F of document.querySelectorAll("#touch-controls .pressed"))F.classList.remove("pressed");d()}function H(){if(m)return;m=!0,y(x("btn-left"),"left"),y(x("btn-right"),"right"),y(x("btn-gas"),"gas"),y(x("btn-brake"),"brake"),y(x("btn-nitro"),"nitro"),y(x("btn-handbrake"),"handbrake"),T(x("btn-shift")),y(x("btn-fire"),"fire"),y(x("btn-run"),"run"),f(x("joystick"),x("joy-knob")),v(x("btn-action"),()=>{l=!0}),v(x("btn-weapon"),()=>{c=!0}),v(x("btn-aim"),()=>{s=!s;let P=x("btn-aim");P&&P.classList.toggle("on",s),d()}),v(x("btn-gear-up"),()=>{u=!0}),v(x("btn-gear-down"),()=>{p=!0}),window.addEventListener("mousedown",S),window.addEventListener("mouseup",b),g.push(()=>{window.removeEventListener("mousedown",S),window.removeEventListener("mouseup",b)}),window.addEventListener("keydown",_),window.addEventListener("keyup",M),g.push(()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",M)});let w=x("touch-controls");w&&(w.style.display="ontouchstart"in window?"":"none"),E(o)}function V(){for(let w of g)w();g.length=0;for(let w in i)i[w]=!1;a=l=c=h=!1,r.id=null,r.x=r.y=0,d(),m=!1}function A(){let w=a;return a=!1,w}let L=w=>()=>{let P;switch(w){case"action":return P=l,l=!1,P;case"cycle":return P=c,c=!1,P;case"fire":return P=h,h=!1,P;case"gup":return P=u,u=!1,P;case"gdown":return P=p,p=!1,P}};return{input:t,consumeShift:A,consumeAction:L("action"),consumeCycle:L("cycle"),consumeFireEdge:L("fire"),consumeGearUp:L("gup"),consumeGearDown:L("gdown"),setMode:E,attach:H,detach:V,get mode(){return o}}}var ob=[.3,.47,.64,.81,1],ab=[1.9,1.45,1.15,.95,.8],ac=.8,Jm=.97,lb=.8,cb=45,hb=2.2,ub=[16765286,448160,10182117,15817653,48121,16704576,15681391],Ln=n=>document.getElementById(n);function ad(n,e){return n+Math.random()*(e-n)}function Km(n){return n[Math.random()*n.length|0]}function db(n){let e=402/(.42*n.topSpeed+.35*n.accel);return Math.min(17,Math.max(8.5,e))*ad(.85,1.15)}function fb(n){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,sixtyFt:null,eighth:null,nitroLeft:n.nitroTime||0,nitroOn:!1,boost:0,spinning:!1,stats:n}}function pb(n,e){let t=jm(n),i=t.k,s=e-(1-Math.exp(-i*e))/i;return t.et=e,t.top=402/s,t}function mb(n){return n==null?1:Math.max(1,Math.pow(12.8/Math.max(4,n),2.2))}function gb(n,e,t){let i=n.stats.topSpeed,s=ob[n.gear]*i,r=1-Math.min(1,n.speed/(s*1.02)),o=e*n.stats.accel*ab[n.gear]*Math.max(0,r);o*=n.bogMul;let a=n.stats;if(a.boostGain){let l=n.rpm,c=e<=0?0:a.boostKind==="roots"?.7+.3*l:a.boostKind==="centri"?Math.min(1,l*l*1.15):Math.max(0,Math.min(1,(l-(a.spoolAt||0))/.22));n.boost=(n.boost||0)+(c-(n.boost||0))*Math.min(1,t*(a.spoolRate||3)),o*=1+a.boostGain*n.boost}if(n.nitroOn&&(o*=a.nitroPower||1.3),n.spinning=!1,a.traction&&o>0&&n.speed<22){let l=a.traction*(.75+.25*Math.min(1,n.speed/22));o>l&&(n.spinning=o-l>2.5,o=l+(o-l)*.12)}o-=n.speed*.028+Math.sign(n.speed)*.6,n.speed=Math.max(0,n.speed+o*t),n.dist+=n.speed*t,n.rpm=Math.min(1.06,n.speed/s),n.bogMul+=(1-n.bogMul)*Math.min(1,t*2.5)}function xb(n){return n>=ac&&n<=Jm?"perfect":n<ac?"early":"late"}function yb(n){if(n.gear>=4)return null;let e=xb(n.rpm);return n.gear++,e==="perfect"?n.speed*=1.015:(n.speed*=.93,n.bogMul=.75),n.limiterT=0,e}function jm(n){let e=db(n),t=1.1,i=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/i,reactDelay:ad(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:n}}function vb(n,e,t){if(!n.launched)return;let i=e-n.launchT;i<0||(n.speed=n.top*(1-Math.exp(-n.k*i)),n.dist+=n.speed*t)}function _b({falseStart:n,pET:e,aET:t,pDist:i,aDist:s}){return n?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:i>=s}function Mb(n,e,t){if(!n)return 100;let i=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(i*10))}function Eb(n,e){return n?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function Qm(n){let e=Ln("drag-ui"),t=Ln("drag-msg"),i=Ln("drag-result"),s=Ln("rpm-bar"),r=Ln("rpm-shiftzone"),o=Ln("btn-shift"),a={s1:Ln("bulb-s1"),s2:Ln("bulb-s2"),a1:Ln("bulb-a1"),a2:Ln("bulb-a2"),a3:Ln("bulb-a3"),g:Ln("bulb-g"),r:Ln("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let A in a)a[A].classList.remove("lit")}function h(A){a[A].classList.add("lit")}function u(A,L){t.textContent=A,l.msgTimer=L||0}function p(A,L){try{n.audio.beep(A,L)}catch{}}function m(){let A=n.getPlayer();return A&&A.stats?A.stats:n.effectiveStats(A.def,A.upgrades)}function g(A,L){let w=n.city.dragStrip;A.position.set(w.startX+l.perpX*L,0,w.startZ+l.perpZ*L),A.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function x(A,L){let w=n.city.dragStrip;A.position.set(w.startX+l.dirX*L.dist+l.perpX*L.lateral,0,w.startZ+l.dirZ*L.dist+l.perpZ*L.lateral)}function d(A,L,w){let P=A.userData.wheels;if(P)for(let R of P){let F=R.userData.spin||[];for(let B of F)B.rotation.x+=L*w*2.2}}function f(A){return fb(A)}function v(A,L,w){gb(A,L,w)}function y(A){let L=yb(A);L&&(L==="perfect"?(u("PERFECT SHIFT!",1),p(1200,.08)):(u(L==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),p(220,.15)))}function T(A){return jm(A)}function C(A,L){vb(A,l.greenT,L)}function _(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),i.classList.add("hidden"),i.innerHTML="",u("STAGE!"),s.style.width="15%",r.style.left=ac*100+"%",r.style.width=(Jm-ac)*100+"%",o&&o.classList.remove("hidden")}function M(){l.phase="green",l.t=0,l.greenT=0,h("g"),u("GO!"),p(880,.4),l.phase="racing"}function S(){l.phase="red",c(),h("r"),u("FALSE START!"),p(180,.6),b("FALSE START \u2014 you jumped the green.")}function b(A){l.phase="done",l.finished=!0;let L=l.player,w=l.ai,P=!!(A&&A.indexOf("FALSE START")===0),R=_b({falseStart:P,pET:L.et,aET:w.finishET,pDist:L.dist,aDist:w.dist}),F=L.et,B=w.finishET,I=L.reaction!=null?L.reaction.toFixed(3)+"s":"\u2014",z=(L.trap*hb).toFixed(1),Z=Math.round(Mb(R,F,B)*mb(B)),U=Eb(R,P);n.addCash(Z),i.innerHTML="<h2>"+U+"</h2>"+(A?"<p>"+A+"</p>":"")+"<p>ET: "+(F==null?"DNF":F.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(B==null?"DNF":B.toFixed(3)+"s")+"</p><p>Trap speed: "+z+" MPH &nbsp;\xB7&nbsp; Reaction: "+I+'</p><p class="slip">60ft '+(L.sixtyFt!=null?L.sixtyFt.toFixed(3):"\u2014")+" \xB7 1/8 "+(L.eighth!=null?L.eighth.toFixed(3):"\u2014")+" \xB7 1/4 "+(F==null?"\u2014":F.toFixed(3))+"</p><p>+$"+Z+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',i.classList.remove("hidden"),Ln("drag-rematch").onclick=()=>{E()},Ln("drag-back").onclick=()=>{H()};try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}}function E(){l.active&&H();let L=n.getPlayer().group;l.origPos=L.position.clone(),l.origRotY=L.rotation.y;let w=n.city.dragStrip,P=Math.hypot(w.dirX,w.dirZ)||1;l.dirX=w.dirX/P,l.dirZ=w.dirZ/P,l.perpX=-l.dirZ,l.perpZ=l.dirX,g(L,2),L.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=f(m());let R=Km(n.CAR_DEFS),F=n.buildCar(Object.assign({},R,{color:Km(ub)}));n.scene.add(F),g(F,-2),l.aiGroup=F;let B=n.predictET?n.predictET():null;l.ai=B?pb(n.effectiveStats(R),B*ad(.94,1.07)):T(n.effectiveStats(R)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),n.controls.setMode("drag");let I=n.camera;I.position.set(w.startX-l.dirX*12+l.perpX*12,5,w.startZ-l.dirZ*12+l.perpZ*12),I.lookAt(w.startX+l.dirX*8,1,w.startZ+l.dirZ*8),_()}function H(){l.aiGroup&&(n.scene.remove(l.aiGroup),l.aiGroup=null);let A=n.getPlayer();A&&A.group&&l.origPos&&(A.group.position.copy(l.origPos),A.group.rotation.y=l.origRotY),e.classList.add("hidden"),i.classList.add("hidden"),o&&o.classList.add("hidden");try{n.controls.setMode("drive")}catch{}try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function V(A){if(!l.active)return;A=Math.min(A,.05);let L=n.controls.input||{},w=Math.max(0,Math.min(1,L.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&w>.5){S();return}if(l.msgTimer>0&&(l.msgTimer-=A,l.msgTimer<=0&&l.phase==="racing"&&u("GO!")),l.phase==="stage")l.t+=A,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,u("READY\u2026"));else if(l.phase==="tree"){l.t+=A;let R=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<R;)l.ambersLit++,h("a"+l.ambersLit),p(440,.15);l.t>=1.5&&M()}else if(l.phase==="racing"){l.greenT+=A;let R=l.player,F=l.ai;!R.reacted&&w>.5&&(R.reacted=!0,R.reaction=l.greenT),!F.launched&&l.greenT>=F.reactDelay&&(F.launched=!0,F.launchT=l.greenT),R.nitroOn=!!(L.nitro&&R.nitroLeft>0&&R.speed>1),R.nitroOn&&(R.nitroLeft=Math.max(0,R.nitroLeft-A)),v(R,w,A),R.sixtyFt==null&&R.dist>=18.29&&(R.sixtyFt=l.greenT),R.eighth==null&&R.dist>=201&&(R.eighth=l.greenT),n.controls.consumeShift&&n.controls.consumeShift()&&y(R),R.rpm>=1&&w>.3?(R.limiterT+=A,R.limiterT>=lb&&(R.speed*=.9,R.limiterT=0,u("LIMITER!",.8),p(160,.2))):R.limiterT=Math.max(0,R.limiterT-A*2),C(F,A),R.et==null&&R.dist>=402&&(R.et=l.greenT,R.trap=R.speed),F.finishET==null&&F.dist>=402&&(F.finishET=l.greenT,F.trap=F.speed);let B=l.greenT>=cb;if(R.et!=null&&F.finishET!=null||B||R.et!=null&&l.greenT>R.et+8||F.finishET!=null&&l.greenT>F.finishET+8){b(B&&R.et==null&&F.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,R.rpm)*100+"%";try{n.audio.engine(R.rpm,w),n.audio.skid(R.spinning||w>.8&&R.speed<4&&R.gear===0)}catch{}}let P=n.getPlayer().group;if(x(P,l.player),l.aiGroup&&x(l.aiGroup,l.ai),d(P,l.player.speed,A),l.aiGroup&&d(l.aiGroup,l.ai.speed,A),l.phase==="racing"||l.phase==="done"){let R=n.camera,F=P.position.x,B=P.position.z,I=F-l.dirX*11+l.perpX*7,z=B-l.dirZ*11+l.perpZ*7;R.position.x+=(I-R.position.x)*Math.min(1,A*4),R.position.y+=(4.5-R.position.y)*Math.min(1,A*4),R.position.z+=(z-R.position.z)*Math.min(1,A*4),R.lookAt(F+l.dirX*12,1.2,B+l.dirZ*12)}}return Ln("drag-exit").onclick=()=>H(),{enter:E,exit:H,update:V,get active(){return l.active}}}function e0(){let n=null,e=null,t=null,i=null,s=null,r=null,o=null,a=null,l=null,c=null,h=null,u=null,p=null,m=null,g=null,x=0,d=0,f=0,v=8,y=850,T=7e3,C=null,_=null,M=null,S=null,b=null,E=null,H=0,V=!1,A=!1;function L(){if(n)return!0;let P=window.AudioContext||window.webkitAudioContext;if(!P)return!1;n=new P,e=n.createGain(),e.gain.value=.5,e.connect(n.destination);let R=new Float32Array(32),F=new Float32Array(32);for(let Ee=1;Ee<32;Ee++){let Ne=Math.exp(-Math.pow((Ee-6)/2.5,2))*.6;F[Ee]=1/Math.pow(Ee,.9)*(Ee%2?1:.65)+Ne/Ee}l=n.createPeriodicWave(R,F),t=n.createOscillator(),t.setPeriodicWave(l),t.frequency.value=50,i=n.createOscillator(),i.type="sawtooth",i.frequency.value=25,s=n.createOscillator(),s.type="triangle",s.frequency.value=100;let B=n.createGain();B.gain.value=.55;let I=n.createGain();I.gain.value=.35,a=n.createGain(),a.gain.value=.05,c=n.createOscillator(),c.frequency.value=12,h=n.createGain(),h.gain.value=.18;let z=n.createGain();z.gain.value=.82,c.connect(h),h.connect(z.gain),t.connect(B),i.connect(I),s.connect(a),B.connect(z),I.connect(z),a.connect(z),u=n.createWaveShaper();let Z=new Float32Array(1024);for(let Ee=0;Ee<1024;Ee++){let Ne=Ee/512-1;Z[Ee]=Math.tanh(Ne*2.4)}u.curve=Z,u.oversample="2x",p=n.createGain(),p.gain.value=1,z.connect(p),p.connect(u),r=n.createBiquadFilter(),r.type="lowpass",r.frequency.value=600,r.Q.value=1.2;let U=n.createBiquadFilter();U.type="peaking",U.frequency.value=160,U.gain.value=6,U.Q.value=.9,o=n.createGain(),o.gain.value=0,u.connect(r),r.connect(U),U.connect(o),o.connect(e),t.start(),i.start(),s.start(),c.start();let q=n.sampleRate,ee=n.createBuffer(1,q,n.sampleRate),ue=ee.getChannelData(0);for(let Ee=0;Ee<q;Ee++)ue[Ee]=Math.random()*2-1;_=ee;let me=n.createBufferSource();me.buffer=ee,me.loop=!0;let we=n.createBiquadFilter();we.type="bandpass",we.frequency.value=900,we.Q.value=1.1,C=n.createGain(),C.gain.value=0,me.connect(we),we.connect(C),C.connect(e),me.start();let Ce=n.createBufferSource();return Ce.buffer=ee,Ce.loop=!0,m=n.createBiquadFilter(),m.type="bandpass",m.frequency.value=700,m.Q.value=.8,g=n.createGain(),g.gain.value=0,Ce.connect(m),m.connect(g),g.connect(e),Ce.start(0,.37),!0}function w(P){if(!_)return;let R=n.createBufferSource();R.buffer=_;let F=n.createBiquadFilter();F.type="bandpass",F.frequency.value=600+Math.random()*900,F.Q.value=2;let B=n.createGain();B.gain.setValueAtTime(1e-4,P),B.gain.exponentialRampToValueAtTime(.35,P+.004),B.gain.exponentialRampToValueAtTime(1e-4,P+.05),R.connect(F),F.connect(B),B.connect(e),R.start(P,Math.random()*.8),R.stop(P+.07)}return{unlock(){A=!0,L()&&(n.state==="suspended"&&n.resume(),V=!0)},setEngine(P){v=P.cyl||8,y=P.idle||850,T=P.red||7e3},engine(P,R,F){if(!n||!V)return;let B=Math.max(0,Math.min(1.04,P)),I=Math.max(0,Math.min(1,R)),z=n.currentTime;if(B<.001&&I<.001){o.gain.setTargetAtTime(0,z,.08),g.gain.setTargetAtTime(0,z,.08),d=0;return}let U=(y+(T-y)*B)/60*v/2;t.frequency.setTargetAtTime(U,z,.025),i.frequency.setTargetAtTime(U/2,z,.025),s.frequency.setTargetAtTime(U*3.01,z,.025),c.frequency.setTargetAtTime(Math.max(4,U/(v>=8?4:2)),z,.05),h.gain.setTargetAtTime((v>=8?.22:.1)*(1-B*.7),z,.05),p.gain.setTargetAtTime(.8+I*2.2+B*.6,z,.05),r.frequency.setTargetAtTime(380+B*2600*(.45+I*.55),z,.04),a.gain.setTargetAtTime(.03+B*B*.12,z,.05);let q=(.07+I*.08+B*.06)*(F?.45:1);o.gain.setTargetAtTime(q,z,F?.015:.05),m.frequency.setTargetAtTime(500+B*2400,z,.05),g.gain.setTargetAtTime(I*(.015+B*.05),z,.06),f-=1/60,x>.6&&I<.1&&B>.45&&(f=Math.min(f,-.6)),f<-.01&&I<.15&&B>.3&&Math.random()<.18&&w(z),f<-.01?f+=1/60*.5:f=Math.max(f,0),x=I,d=B},shiftBlip(P){if(!n||!V)return;let R=n.currentTime;o.gain.cancelScheduledValues(R),o.gain.setValueAtTime(o.gain.value,R),o.gain.linearRampToValueAtTime(o.gain.value*.35,R+.04),P&&w(R+.05)},skid(P){!n||!V||C.gain.setTargetAtTime(P?.12:0,n.currentTime,P?.05:.12)},beep(P=660,R=.08){if(!A||!L())return;n.state==="suspended"&&n.resume();let F=n.currentTime,B=n.createOscillator();B.type="sine",B.frequency.value=P;let I=n.createGain();I.gain.setValueAtTime(1e-4,F),I.gain.exponentialRampToValueAtTime(.25,F+.012),I.gain.exponentialRampToValueAtTime(1e-4,F+R),B.connect(I),I.connect(e),B.start(F),B.stop(F+R+.03)},shot(P="pistol"){if(!A||!L())return;let R=n.currentTime,F={pistol:[2600,.16,.5],glock:[2900,.14,.48],deagle:[1800,.3,.8],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],ak:[2e3,.22,.62],rifle:[2200,.2,.55],sniper:[1500,.45,.9],minigun:[3200,.06,.3]}[P]||[2600,.16,.5],B=n.createBufferSource();B.buffer=_;let I=n.createBiquadFilter();I.type="lowpass",I.frequency.setValueAtTime(F[0],R),I.frequency.exponentialRampToValueAtTime(300,R+F[1]);let z=n.createGain();z.gain.setValueAtTime(F[2],R),z.gain.exponentialRampToValueAtTime(1e-4,R+F[1]),B.connect(I),I.connect(z),z.connect(e),B.start(R,Math.random()*.5),B.stop(R+F[1]+.02);let Z=n.createOscillator();Z.type="sine",Z.frequency.setValueAtTime(140,R),Z.frequency.exponentialRampToValueAtTime(40,R+.12);let U=n.createGain();U.gain.setValueAtTime(F[2]*.8,R),U.gain.exponentialRampToValueAtTime(1e-4,R+.14),Z.connect(U),U.connect(e),Z.start(R),Z.stop(R+.16)},click(){this.beep(1800,.03)},turbo(P,R,F){if(!n||!V)return;let B=n.currentTime;if(!M){M=n.createOscillator(),M.type="sine",S=n.createOscillator(),S.type="sawtooth";let z=n.createBiquadFilter();z.type="bandpass",z.Q.value=6,z.frequency.value=2400,b=n.createGain(),b.gain.value=0,M.connect(b),S.connect(z),z.connect(b),b.connect(e),M.start(),S.start(),E=z}let I=Math.max(0,Math.min(1,P||0));if(R==="roots"||R==="centri"?(M.frequency.setTargetAtTime(900+I*1600,B,.05),S.frequency.setTargetAtTime(450+I*900,B,.05),E.frequency.setTargetAtTime(1200+I*1800,B,.05),b.gain.setTargetAtTime(R?.012+I*.05:0,B,.06)):(M.frequency.setTargetAtTime(2200+I*4200,B,.08),S.frequency.setTargetAtTime(1100+I*2100,B,.08),E.frequency.setTargetAtTime(3e3+I*3e3,B,.08),b.gain.setTargetAtTime(R?I*I*.045:0,B,.08)),R==="turbo"&&F&&H>.55){let z=n.createBufferSource();z.buffer=_;let Z=n.createBiquadFilter();Z.type="bandpass",Z.Q.value=1.2,Z.frequency.setValueAtTime(3200,B),Z.frequency.exponentialRampToValueAtTime(900,B+.45);let U=n.createGain();U.gain.setValueAtTime(1e-4,B),U.gain.exponentialRampToValueAtTime(.16*H,B+.02),U.gain.exponentialRampToValueAtTime(1e-4,B+.5),z.connect(Z),Z.connect(U),U.connect(e),z.start(B,Math.random()*.5),z.stop(B+.55),H=0}F||(H=I)},shutdown(){if(n)try{n.close()}catch{}n=null,e=null,V=!1,t=i=s=r=o=C=_=null,M=S=b=E=null}}}var n0="citydriver_save_v1";var lc=5,bb=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295];var i0=["engine","turbo","tires","suspension","nitro"],Sb={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},wb={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},ca=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function ld(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:ca()},paint:{sport:14100029},wheels:{sport:0}}}function Tb(n){let e=Object.assign(ld(),n||{}),t=new Set(ns.map(i=>i.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(i=>t.has(i)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let i of e.owned){if(!e.upgrades[i]||typeof e.upgrades[i]!="object")e.upgrades[i]=ca();else for(let s of i0)e.upgrades[i][s]=Math.max(0,Math.min(lc,e.upgrades[i][s]|0));typeof e.paint[i]!="number"&&(e.paint[i]=14100029),e.wheels[i]=Math.max(0,e.wheels[i]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function s0(){try{let n=localStorage.getItem(n0);return n?Tb(JSON.parse(n)):ld()}catch{return ld()}}function hn(n){try{localStorage.setItem(n0,JSON.stringify(n))}catch{}}function t0(n,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+n.price/2e4))}var Ab=n=>"#"+n.toString(16).padStart(6,"0");function r0(n){let e=n.save,t=x=>document.getElementById(x),i=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let x of ns)for(let d in o)o[d]=Math.max(o[d],x[d]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(x,d,f)=>{let v=Math.max(5,Math.round(d/f*100));return`<div class="stat-row"><span>${x}</span><div class="sbar"><i style="width:${v}%"></i></div></div>`};function c(){i.innerHTML=ns.map(x=>{let d=e.owned.includes(x.id),f=e.currentCar===x.id,v;return f?v='<button class="buy-btn" disabled>SELECTED</button>':d?v=`<button class="buy-btn" data-act="select" data-id="${x.id}">SELECT</button>`:v=`<button class="buy-btn" data-act="buy" data-id="${x.id}"${e.cash<x.price?" disabled":""}>$${x.price.toLocaleString()}</button>`,`<div class="car-card${f?" selected":""}"><div class="cinfo"><b>${x.name}</b><small>${x.desc}</small><div class="stat-bars">${l("SPD",x.topSpeed,o.topSpeed)}${l("ACC",x.accel,o.accel)}${l("HDL",x.handling,o.handling)}${l("GRP",x.grip,o.grip)}</div></div>${v}</div>`}).join("")}function h(){let x=n.getDef(e.currentCar);if(!x){s.innerHTML="";return}let d=e.upgrades[x.id]||(e.upgrades[x.id]=ca());s.innerHTML=`<div class="upg-car-name">${x.name} \u2014 performance</div>`+i0.map(f=>{let v=d[f]||0,y=v>=lc,T=y?0:t0(x,f,v),C="";for(let M=0;M<lc;M++)C+=`<div class="pip${M<v?" on":""}"></div>`;let _=y?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${f}"${e.cash<T?" disabled":""}>$${T.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${Sb[f]}</b><small>${wb[f]}</small><div class="pips">${C}</div></div>${_}</div>`}).join("")}function u(){let x=e.currentCar,d=e.paint[x],f=bb.map(v=>`<button class="swatch${v===d?" sel":""}" data-hex="${v}" style="background:${Ab(v)}" aria-label="paint"></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Quick paint \u2014 FREE</b><div class="swatch-row">${f}</div></div><button class="mbtn primary" data-act="editor" style="width:100%">\u{1F3A8} OPEN SKIN EDITOR \u2014 all free</button><p class="store-tip">Any color, rims, stripes, underglow, window tint, and your driver's look.</p>`}function p(){a(),c(),h(),u()}i.addEventListener("click",x=>{let d=x.target.closest("button[data-act]");if(!d||d.disabled)return;let f=n.getDef(d.dataset.id);if(f)if(d.dataset.act==="buy"){if(e.owned.includes(f.id)||e.cash<f.price)return;e.cash-=f.price,e.owned.push(f.id),e.upgrades[f.id]||(e.upgrades[f.id]=ca()),typeof e.paint[f.id]!="number"&&(e.paint[f.id]=f.color),e.wheels[f.id]===void 0&&(e.wheels[f.id]=0),e.currentCar=f.id,hn(e),n.onSelectCar(f.id),p()}else{if(e.currentCar===f.id)return;e.currentCar=f.id,hn(e),n.onSelectCar(f.id),p()}}),s.addEventListener("click",x=>{let d=x.target.closest("button[data-key]");if(!d||d.disabled)return;let f=n.getDef(e.currentCar);if(!f)return;let v=d.dataset.key,y=e.upgrades[f.id]||(e.upgrades[f.id]=ca()),T=y[v]||0,C=t0(f,v,T);T>=lc||e.cash<C||(e.cash-=C,y[v]=T+1,hn(e),n.refreshScene(),p())}),r.addEventListener("click",x=>{let d=e.currentCar;if(x.target.closest('button[data-act="editor"]')){n.openEditor&&n.openEditor();return}let f=x.target.closest("button.swatch");if(f){let v=parseInt(f.dataset.hex,10);e.paint[d]!==v&&(e.paint[d]=v,hn(e),n.onPaint(v),p())}});let m=[...document.querySelectorAll("#garage .gtab")],g={};for(let x of m)g[x.dataset.tab]=t("garage-"+x.dataset.tab);return m.forEach(x=>x.addEventListener("click",()=>{m.forEach(d=>d.classList.toggle("active",d===x));for(let d in g)g[d].classList.toggle("hidden",d!==x.dataset.tab);n.onTab&&n.onTab(x.dataset.tab)})),p(),{refresh:p}}var o0=["low","medium","high"];function cd(n){switch(n){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var cc=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,cd(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};Nt();var hc={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.42,stars:1}},hd=["day","sunset","night"],Rb=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`,Cb=`
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
}`;function a0(){let n=new Pt(1500,24,16),e={uTop:{value:new Oe(3108822)},uHorizon:{value:new Oe(13625079)},uSunDir:{value:new k(0,1,0)},uSunColor:{value:new Oe(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new on({vertexShader:Rb,fragmentShader:Cb,uniforms:e,side:pn,depthWrite:!1,fog:!1}),i=new X(n,t);return i.frustumCulled=!1,i.renderOrder=-10,{mesh:i,uniforms:e}}function Pb(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new k(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}function l0(n,e){let t=hc[e]||hc.day,{uniforms:i,sun:s,hemi:r,scene:o,renderer:a}=n;i.uTop.value.setHex(t.top),i.uHorizon.value.setHex(t.horizon),i.uSunColor.value.setHex(t.sunColor),i.uSunI.value=t.sunI,i.uStars.value=t.stars;let l=Pb(t.elev,t.azim);return i.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),n.sunElev=t.elev,n.sunAzim=t.azim,n.sunDir=l,t}Nt();function Ib(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new cn(n);return i.colorSpace=vt,i}var ud=null;function Lb(){return ud||(ud=Ib()),ud}var ui=class{constructor(e,t,{color:i=12303291,opacity:s=.5,blending:r=ms,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new Ge(1,1),this.mat=new er({map:Lb(),color:i,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new eo(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new k}emit(e,t,i,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,i);let u=h.userData;u.life=a,u.maxLife=a,u.vx=s,u.vy=r,u.vz=o,u.grow=c,u.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let i of this.items){if(!i.visible)continue;let s=i.userData;if(s.life-=e,s.life<=0){i.visible=!1;continue}i.position.x+=s.vx*e,i.position.y+=s.vy*e,i.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;i.scale.set(o,o,1),i.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},uc=class{constructor(e,t=400){this.max=t,this.i=0;let i=new Ge(.32,1.4);i.rotateX(-Math.PI/2),this.mesh=new _t(i,new mt({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new gt;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new gt,this._q=new Wn,this._p=new k,this._s=new k(1,1,1),this._up=new k(0,1,0)}add(e,t,i){this._q.setFromAxisAngle(this._up,i),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function ha(){return{driftT:0,driftAcc:0}}function c0(n,e,t,i){if(e&&Math.abs(t)>=8)return n.driftT+=i,n.driftAcc+=i*15,0;let s=0;return n.driftT>=1&&(s=Math.round(n.driftAcc)),n.driftT=0,n.driftAcc=0,s}var h0=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function u0(n){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;e=h0()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),n&&n(t.w,t.h)}async function s(){if(!h0())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:t,goLandscape:s,refresh:i,get rotated(){return e}}}var Ss=[14100029,16735802,16747546,16757504,16765503,13038642,4906624,1483594,1013358,1622208,3718648,2060267,1981066,8141549,11032055,15557798,16723555,7999504,9067034,13211182,16317180,13358561,7041664,1120295],dc=[16109749,15250575,13011554,11037509,8014380,4860954],fc=[1118481,2759184,5913118,10119738,14266986,15263976,14100029,3718648],ua=["none","center","dual","side"],da=["clear","dark","limo"],ws=["none","cap","beanie","cowboy","crown","helmet"],pc={none:"No hat",cap:"Snapback",beanie:"Beanie",cowboy:"Stetson",crown:"Crown",helmet:"Helmet"},is=n=>Number.isInteger(n)&&n>=0&&n<=16777215,dd=(n,e,t)=>e.includes(n)?n:t;function d0(){return{rims:12172998,stripes:"none",stripe:16317180,glow:null,tint:"dark"}}function Db(){return{shirt:2845872,pants:2963272,skin:13011554,hair:2759184,hat:"none",hatColor:2237739}}function f0(n){let e=d0(),t=n&&typeof n=="object"?n:{};return{rims:is(t.rims)?t.rims:e.rims,stripes:dd(t.stripes,ua,e.stripes),stripe:is(t.stripe)?t.stripe:e.stripe,glow:is(t.glow)?t.glow:null,tint:dd(t.tint,da,e.tint)}}function mc(n){let e=Db(),t=n&&typeof n=="object"?n:{};return{shirt:is(t.shirt)?t.shirt:e.shirt,pants:is(t.pants)?t.pants:e.pants,skin:is(t.skin)?t.skin:e.skin,hair:is(t.hair)?t.hair:e.hair,hat:dd(t.hat,ws,e.hat),hatColor:is(t.hatColor)?t.hatColor:e.hatColor}}function fd(n){return String(n??"").replace(/[^\w .\-'!?]/g,"").trim().slice(0,16)}function p0(n){(!n.carSkin||typeof n.carSkin!="object")&&(n.carSkin={});for(let t of Object.keys(n.carSkin))n.carSkin[t]=f0(n.carSkin[t]);n.outfit=mc(n.outfit),n.hats=ws.slice();let e=fd(n.name);return n.name=e||"Driver"+Math.floor(1e3+Math.random()*9e3),n}function ar(n,e){return n.carSkin[e]||(n.carSkin[e]=d0()),n.carSkin[e]}function m0(n,e){let t=ar(n,e),i=n.outfit;return{p:n.paint[e]|0,r:t.rims,s:ua.indexOf(t.stripes),sc:t.stripe,g:t.glow==null?-1:t.glow,t:da.indexOf(t.tint),o:[i.shirt,i.pants,i.skin,i.hair,ws.indexOf(i.hat),i.hatColor]}}function g0(n){n=n||{};let e=Array.isArray(n.o)?n.o:[];return{paint:is(n.p)?n.p:null,carSkin:f0({rims:n.r,stripes:ua[n.s],stripe:n.sc,glow:n.g,tint:da[n.t]}),outfit:mc({shirt:e[0],pants:e[1],skin:e[2],hair:e[3],hat:ws[e[4]],hatColor:e[5]})}}var gc=n=>"#"+(n|0).toString(16).padStart(6,"0");var xc=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,dmg:22,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"glock",name:"Glock 19",price:1800,rate:.16,auto:!1,pellets:1,spread:.014,range:85,dmg:20,ammoBox:34,ammoPrice:70,start:34,desc:"Fast-firing 9mm. Tap tap tap."},{id:"deagle",name:"Desert Eagle",price:4200,rate:.55,auto:!1,pellets:1,spread:.01,range:110,dmg:55,ammoBox:14,ammoPrice:110,start:14,desc:"Hand cannon. Huge damage."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,dmg:14,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,dmg:12,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"ak",name:"AK-47",price:7500,rate:.11,auto:!0,pellets:1,spread:.022,range:120,dmg:26,ammoBox:60,ammoPrice:180,start:60,desc:"Hard-hitting full auto."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,dmg:24,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."},{id:"sniper",name:"Longshot .50",price:15e3,rate:1.3,auto:!1,pellets:1,spread:.001,range:260,dmg:120,ammoBox:10,ammoPrice:250,start:10,desc:"One shot, one drop. Huge range."},{id:"minigun",name:"Shredder Minigun",price:4e4,rate:.04,auto:!0,pellets:1,spread:.05,range:100,dmg:14,ammoBox:400,ammoPrice:600,start:400,desc:"Melts everything. Eats ammo."}],x0=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],fa=0,yc=ws.map(n=>({id:n,name:pc[n],price:0})),pd=15,ss=n=>xc.find(e=>e.id===n)||null;function y0(n){let e=new Set(xc.map(t=>t.id));Array.isArray(n.weapons)||(n.weapons=[]),n.weapons=n.weapons.filter((t,i,s)=>e.has(t)&&s.indexOf(t)===i),(!n.ammo||typeof n.ammo!="object")&&(n.ammo={});for(let t of Object.keys(n.ammo))e.has(t)||delete n.ammo[t];for(let t of n.weapons)n.ammo[t]=Math.max(0,n.ammo[t]|0);return n.weapons.includes(n.equipped)||(n.equipped=n.weapons[0]||null),n.outfit=mc(n.outfit),n.hats=yc.map(t=>t.id),n}var di=n=>({ok:!1,msg:n}),lr=n=>({ok:!0,msg:n});function v0(n,e){let t=ss(e);return t?n.weapons.includes(e)?di("Already owned"):n.cash<t.price?di("Not enough cash"):(n.cash-=t.price,n.weapons.push(e),n.ammo[e]=(n.ammo[e]|0)+t.start,n.equipped=e,lr(t.name+" bought")):di("Unknown weapon")}function _0(n,e){let t=ss(e);return t?n.weapons.includes(e)?n.cash<t.ammoPrice?di("Not enough cash"):(n.cash-=t.ammoPrice,n.ammo[e]=(n.ammo[e]|0)+t.ammoBox,lr("+"+t.ammoBox+" rounds")):di("Buy the gun first"):di("Unknown weapon")}function M0(n,e){return e===null?(n.equipped=null,lr("Holstered")):n.weapons.includes(e)?(n.equipped=e,lr(ss(e).name+" equipped")):di("Not owned")}function md(n){let e=[...n.weapons,null];if(e.length===1)return null;let t=e.indexOf(n.equipped);return n.equipped=e[(t+1)%e.length],n.equipped}function E0(n,e){return!Number.isInteger(e)||e<0||e>16777215?di("Unknown color"):n.outfit.shirt===e?di("Already wearing it"):n.cash<fa?di("Not enough cash"):(n.cash-=fa,n.outfit.shirt=e,lr("New shirt"))}function b0(n,e){let t=yc.find(i=>i.id===e);return t?n.hats.includes(e)?(n.outfit.hat=e,lr(t.name+" on")):n.cash<t.price?di("Not enough cash"):(n.cash-=t.price,n.hats.push(e),n.outfit.hat=e,lr(t.name+" bought")):di("Unknown hat")}var vc=class{constructor(){this.reset(0,0,0)}reset(e,t,i){this.pos={x:e,z:t},this.heading=i,this.speed=0,this.phase=0}update(e,t,i){t=Math.min(t,.05);let s=S0(e.moveX||0),r=S0(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,u=this.pos.z+c*this.speed*t;if(i){let p=i(h,u,.45);h=p.x,u=p.z}return this.pos.x=h,this.pos.z=u,this.phase+=this.speed*t*2.1,this}};function S0(n){return n<-1?-1:n>1?1:n}function lo(n,e,t,i){let s=n-t,r=e-i;return Math.sqrt(s*s+r*r)}function gd(n,e,t){let i=Math.cos(t),s=-Math.sin(t);return{x:n-i*1.9,z:e-s*1.9,heading:t}}function w0(n,e,t,i,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(n<s.minX||n>s.maxX)return 1/0}else{let l=(s.minX-n)/t,c=(s.maxX-n)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(i)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/i,c=(s.maxZ-e)/i;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function xd(n,e,t,i,s,r,o,a){let l=n-s,c=e-r,h=l*t+c*i,u=l*l+c*c-o*o,p=h*h-u;if(p<0)return 1/0;let m=Math.sqrt(p),g=-h-m;return g<0&&(g=-h+m),g>=0&&g<=a?g:1/0}Nt();var Ub=()=>new ae({color:13011554,roughness:.75}),Nb=()=>new ae({color:2963272,roughness:.85}),Hb=()=>new ae({color:1118481,roughness:.6}),Ob=()=>new ae({color:2759184,roughness:.9}),zb=()=>new ae({color:1908515,metalness:.7,roughness:.35});function yt(n,e,t,i,s=0){let r=new fe(n,e,t);r.translate(0,s,0);let o=new X(r,i);return o.castShadow=!0,o}function Fb(n){let e=new it,t=zb(),i=new ae({color:7031342,roughness:.8});if(n==="pistol")e.add(yt(.06,.08,.24,t,.05).translateZ(-.08)),e.add(yt(.05,.12,.06,t,-.02));else if(n==="shotgun")e.add(yt(.07,.07,.75,t,.05).translateZ(-.28)),e.add(yt(.08,.09,.22,i,0).translateZ(-.38)),e.add(yt(.07,.12,.3,i,0).translateZ(.18));else if(n==="smg")e.add(yt(.07,.11,.42,t,.05).translateZ(-.12)),e.add(yt(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(yt(.04,.04,.12,t,.07).translateZ(-.38));else if(n==="glock"||n==="deagle"){let s=n==="deagle";e.add(yt(s?.07:.06,s?.09:.075,s?.3:.22,t,.05).translateZ(-.08)),e.add(yt(.05,.13,.065,n==="deagle"?i:t,-.03))}else if(n==="sniper")e.add(yt(.06,.1,.95,t,.05).translateZ(-.3)),e.add(yt(.045,.045,.32,t,.14).translateZ(-.12)),e.add(yt(.06,.13,.3,i,0).translateZ(.3));else if(n==="minigun"){for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.add(yt(.03,.03,.8,t,.05+Math.sin(r)*.06).translateX(Math.cos(r)*.06).translateZ(-.35))}e.add(yt(.2,.2,.3,t,.05).translateZ(.05))}else if(n==="ak"){e.add(yt(.07,.11,.72,t,.05).translateZ(-.22));let s=yt(.06,.2,.08,t,-.1).translateZ(-.18);s.rotation.x=.35,e.add(s),e.add(yt(.06,.12,.28,i,.02).translateZ(.26)),e.add(yt(.07,.06,.24,i,0).translateZ(-.38))}else e.add(yt(.07,.11,.7,t,.05).translateZ(-.22)),e.add(yt(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(yt(.06,.13,.26,t,.02).translateZ(.24)),e.add(yt(.05,.05,.2,t,.14).translateZ(-.15));return e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function Bb(n,e){if(n==="crown"){let t=new it,i=new ae({color:16765503,metalness:1,roughness:.25,emissive:3811840}),s=new X(new Be(.16,.16,.09,16,1,!0),i);s.material.side=wt,s.position.y=.02,t.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new X(new _s(.035,.09,4),i);a.position.set(Math.cos(o)*.155,.1,Math.sin(o)*.155),t.add(a);let l=new X(new Pt(.018,6,6),new ae({color:e,emissive:e,emissiveIntensity:.6}));l.position.set(Math.cos(o+.5)*.162,.02,Math.sin(o+.5)*.162),t.add(l)}return t}if(n==="helmet"){let t=new it,i=new Ii({color:e,metalness:.4,roughness:.25,clearcoat:1}),s=new X(new Pt(.2,16,12,0,Math.PI*2,0,Math.PI/1.7),i);s.position.y=-.06,t.add(s);let r=new X(new Pt(.205,16,8,Math.PI*1.2,Math.PI*.6,Math.PI*.35,Math.PI*.25),new ae({color:724762,metalness:.9,roughness:.1}));return r.position.y=-.06,t.add(r),t}if(n==="cap"){let t=new it,i=new ae({color:e,roughness:.7}),s=new X(new Pt(.155,14,8,0,Math.PI*2,0,Math.PI/2),i);t.add(s);let r=yt(.24,.02,.14,i);return r.position.set(0,.01,-.15),t.add(r),t}if(n==="beanie"){let t=new ae({color:e,roughness:.95});return new X(new Pt(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(n==="cowboy"){let t=new it,i=new ae({color:e,roughness:.85}),s=new X(new Be(.3,.3,.02,20),i),r=new X(new Be(.12,.15,.17,14),i);return r.position.y=.09,t.add(s,r),t}return null}function co(n){let e=new it,t=Ub(),i=Nb(),s=Hb(),r=Ob(),o=new ae({color:n.shirt,roughness:.8}),a=[],l=[];for(let T of[-1,1]){let C=new it;C.position.set(T*.12,.92,0),C.add(yt(.17,.84,.2,i,-.42));let _=yt(.17,.09,.3,s,-.88);_.position.z=-.04,C.add(_),e.add(C),a.push(C);let M=new it;M.position.set(T*.33,1.5,0),M.add(yt(.13,.36,.15,o,-.17)),M.add(yt(.11,.3,.12,t,-.5));let S=yt(.1,.1,.1,t,-.69);M.add(S),e.add(M),l.push(M)}let c=yt(.52,.62,.27,o,1.23);e.add(c);let h=yt(.53,.06,.28,s,.93);e.add(h);let u=yt(.12,.08,.12,t,1.57);e.add(u);let p=new X(new Pt(.15,16,12),t);p.position.y=1.74,p.scale.set(1,1.12,1),p.castShadow=!0,e.add(p);let m=new X(new Pt(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),r);m.position.y=1.76,e.add(m);let g=new it,x=new X(new fe(.3,.62,.1).translate(0,-.31,0),r);x.position.set(0,1.84,.13),x.rotation.x=.12,x.castShadow=!0;let d=new X(new fe(.05,.36,.14).translate(0,-.18,0),r);d.position.set(-.15,1.82,.02);let f=d.clone();f.position.x=.15,g.add(x,d,f),g.visible=!1,e.add(g);let v=new it;v.position.y=1.8,e.add(v);let y=new it;return y.position.y=-.69,l[1].add(y),e.userData={legs:a,arms:l,shirt:o,skin:t,pants:i,hair:r,longHair:g,hatSlot:v,gunSlot:y,gunId:null,hatId:null,hatColor:null,recoil:0},Mi(e,n),e}function Mi(n,e){let t=n.userData;t.shirt.color.setHex(e.shirt),e.pants!=null&&t.pants.color.setHex(e.pants),e.skin!=null&&t.skin.color.setHex(e.skin),e.hair!=null&&t.hair.color.setHex(e.hair);let i=e.hatColor!=null?e.hatColor:e.shirt;if(t.hatId!==e.hat||t.hatColor!==i){t.hatSlot.clear();let s=Bb(e.hat,i);s&&t.hatSlot.add(s),t.hatId=e.hat,t.hatColor=i}t.hair.visible=e.hat!=="helmet",t.longHair.visible=!!e.hairLong&&e.hat!=="helmet"}function pa(n,e){let t=n.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let i=Fb(e);i.rotation.x=-Math.PI/2,t.gunSlot.add(i)}t.gunId=e}}function Ts(n,e,t,i,s){let r=n.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),i?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),n.position.y=Math.abs(Math.cos(e))*o*.05}function _c(n){n.userData.recoil=1}Nt();var T0=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],kb=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function A0(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new cn(i);return s.colorSpace=vt,s.anisotropy=4,s}function Gb(n,e,t){return A0(512,128,(i,s,r)=>{i.fillStyle="#0b0f1a",i.fillRect(0,0,s,r),i.strokeStyle=t,i.lineWidth=8,i.strokeRect(6,6,s-12,r-12),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.font="bold 58px sans-serif",i.fillText(n,s/2,52),i.fillStyle="#e2e8f0",i.font="bold 22px sans-serif",i.fillText(e,s/2,100)})}function Vb(){return A0(128,128,(n,e,t)=>{let i=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{n.beginPath(),n.arc(i,s,62-a*10,0,Math.PI*2),n.fillStyle=o,n.fill()})})}function R0(n,e){let t=[],i=[],s=new ae({color:14078925,roughness:.85,envMapIntensity:.4}),r=new ae({color:2961720,roughness:.8}),o=new ae({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of kb){let[u,p]=h.bx,[m,g]=h.bz,x=(u+p)/2,d=(m+g)/2,f=p-u,v=g-m,y=new X(new fe(f,h.h,v).translate(0,h.h/2,0),s);y.position.set(x,.03,d),y.castShadow=y.receiveShadow=!0,n.add(y);let T=new X(new fe(f+.6,.5,v+.6),r);T.position.set(x,h.h+.25,d),n.add(T);let C=h.face==="-x"?-1:1,_=C<0?u:p,M=new X(new fe(1.6,.2,v*.9),new ae({color:h.color,roughness:.6}));M.position.set(_+C*.8,3.3,d),M.rotation.z=C*.18,n.add(M);let S=new X(new Ge(v*.75,2.4),o);S.position.set(_+C*.02,1.5,d),S.rotation.y=C*Math.PI/2,n.add(S);let b=new ae({map:Gb(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});b.emissiveMap=b.map,b.emissiveIntensity=.55;let E=new X(new Ge(v*.85,v*.85/4),b);E.position.set(_+C*.05,h.h-1.4,d),E.rotation.y=C*Math.PI/2,n.add(E),e.colliders.push({minX:u,maxX:p,minZ:m,maxZ:g});let H={x:_+C*1.6,z:d},V=new mt({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:wt}),A=new X(new ei(.9,1.25,32).rotateX(-Math.PI/2),V);A.position.set(H.x,.09,H.z),n.add(A);let L=new mt({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:wt,blending:$t}),w=new X(new Be(1.05,1.05,3.2,24,1,!0),L);w.position.set(H.x,1.6,H.z),n.add(w),i.push({ring:A,ringMat:V,beamMat:L}),t.push({id:h.id,type:h.type,name:h.name,door:H,color:h.accent})}let a=Wb(n,e),l=0;function c(h){l+=h;let u=.55+Math.sin(l*3)*.25;for(let p of i)p.ringMat.opacity=u+.2,p.beamMat.opacity=u*.3,p.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function Wb(n,e){let o=new X(new Ge(54,16).rotateX(-Math.PI/2),new ae({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,n.add(o);let a=new ae({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let d of l){let f=new X(new fe(d.maxX-d.minX,d.h,d.maxZ-d.minZ).translate(0,d.h/2,0),a);f.position.set((d.minX+d.maxX)/2,.03,(d.minZ+d.maxZ)/2),f.castShadow=f.receiveShadow=!0,n.add(f),e.colliders.push({minX:d.minX,maxX:d.maxX,minZ:d.minZ,maxZ:d.maxZ})}let c=new X(new Ge(.3,15).rotateX(-Math.PI/2),new mt({color:16765503}));c.position.set(51,.06,156/2),n.add(c);let h=Vb(),u=new ae({map:h,roughness:.6,side:wt}),p=new ae({color:4144966,roughness:.7}),g=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([d,f])=>{let v=new it;v.position.set(d,.04,f);let y=new X(new fe(.08,1.1,.08).translate(0,.55,0),p),T=new X(new Pi(.55,24),u);return T.position.y=1.5,T.rotation.y=-Math.PI/2,T.castShadow=!0,v.add(y,T),n.add(v),{x:d,z:f,r:.6,up:!0,timer:0,fall:0,pivot:v}});function x(d){for(let f of g)f.up?f.fall>0&&(f.fall=Math.max(0,f.fall-d*4)):(f.fall=Math.min(1,f.fall+d*6),f.timer-=d,f.timer<=0&&(f.up=!0)),f.pivot.rotation.z=f.fall*(Math.PI/2-.05),f.pivot.rotation.z*=-1}return{targets:g,update:x,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function C0(n){return n.up?(n.up=!1,n.timer=3,!0):!1}Nt();var Xb=.22,cr=1.45,qb=85,yd=4.5;function P0(n){let e=[],t=new Vl(.07,.5,2,8).rotateX(Math.PI/2),i=new Be(.008,.05,1,6,1,!0).rotateX(Math.PI/2).translate(0,0,.5);for(let d=0;d<48;d++){let f=new X(t,new mt({color:16774856,transparent:!0,opacity:1,blending:$t,depthWrite:!1}));f.visible=!1,f.frustumCulled=!1;let v=new X(new Pt(.22,8,6),new mt({color:16751150,transparent:!0,opacity:.45,blending:$t,depthWrite:!1}));f.add(v);let y=new X(i,new mt({color:16757575,transparent:!0,opacity:.75,blending:$t,depthWrite:!1,side:wt}));y.visible=!1,y.frustumCulled=!1,n.add(f,y),e.push({slug:f,trail:y,live:!1,x0:0,z0:0,dx:0,dz:0,dist:0,travel:0,hitT:null,onHit:null,wall:!1})}let s=0,r=new ui(n,8,{color:16762976,opacity:.95,blending:$t}),o=new ui(n,30,{color:16757575,opacity:.9,blending:$t}),a=new ui(n,20,{color:12103840,opacity:.5}),l=0;function c(d,f,v,y,T,C,_,M,S){let b=e[s];s=(s+1)%e.length,Object.assign(b,{live:!0,x0:d,z0:f,dx:v,dz:y,dist:Math.max(.5,T),travel:0,hitT:C,wall:_,onHit:M,onArrive:S||null}),b.slug.visible=!0,b.trail.visible=!0,b.slug.rotation.y=Math.atan2(v,y),h(b)}function h(d){let f=Math.min(d.travel,d.dist),v=d.x0+d.dx*f,y=d.z0+d.dz*f;d.slug.position.set(v,cr,y),u(d,v,y,Math.min(yd,f))}function u(d,f,v,y){d.trail.position.set(f,cr,v),d.trail.rotation.y=Math.atan2(-d.dx,-d.dz),d.trail.scale.set(1,1,Math.max(.01,y))}function p(d){let f=d.x0+d.dx*d.dist,v=d.z0+d.dz*d.dist;if(d.onArrive){let y=d.onArrive;d.onArrive=null,y();return}if(d.hitT){C0(d.hitT)&&d.onHit&&d.onHit(d.hitT);for(let y=0;y<5;y++)o.emit(f,cr,v,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else d.wall&&(o.emit(f-d.dx*.1,cr,v-d.dz*.1,{vx:-d.dx*2,vy:1.5,vz:-d.dz*2,life:.18,size:.3,grow:.2}),a.emit(f-d.dx*.2,cr,v-d.dz*.2,{vx:-d.dx,vy:.6,vz:-d.dz,life:.5,size:.4,grow:1.2}))}function m(d){for(let f of e)if(f.live){if(f.travel+=qb*d,f.travel>=f.dist){if(f.slug.visible&&(p(f),f.slug.visible=!1),f.travel-f.dist>=yd){f.live=!1,f.trail.visible=!1;continue}let v=f.x0+f.dx*f.dist,y=f.z0+f.dz*f.dist,T=yd-(f.travel-f.dist);u(f,v,y,Math.min(T,f.dist));continue}h(f)}}function g(d,f,v,y){let T=v-d,C=y-f,_=Math.hypot(T,C);_>.1&&(r.emit(d,cr,f,{vx:T/_*2,vy:0,vz:C/_*2,life:.06,size:.7,grow:.6}),c(d,f,T/_,C/_,_,null,!0,null))}function x(d,f,v,y){l=Math.max(0,l-d),m(d),r.update(d),o.update(d),a.update(d);let T=f.save.equipped,C=T&&ss(T);if(v=v||y,!C||!v||l>0)return{fired:!1};if(!C.auto&&!y)return{fired:!1};if((f.save.ammo[T]|0)<=0)return y&&(f.audio.click&&f.audio.click(),f.toast&&f.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),l=.3,{fired:!1,empty:!0};f.save.ammo[T]--,l=C.rate;let _=f.heading,M=Xb;for(let P of f.targets){if(!P.up)continue;let R=P.x-f.pos.x,F=P.z-f.pos.z,B=Math.hypot(R,F);if(B>C.range||B<.5)continue;let I=Math.atan2(-R,-F),z=Math.atan2(Math.sin(I-f.heading),Math.cos(I-f.heading));Math.abs(z)<M&&(M=Math.abs(z),_=I)}if(f.hitables)for(let P of f.hitables)for(let R of P){if(R.ref&&R.ref.kind==="ped")continue;let F=R.x-f.pos.x,B=R.z-f.pos.z,I=Math.hypot(F,B);if(I>C.range||I<.5)continue;let z=Math.atan2(-F,-B),Z=Math.abs(Math.atan2(Math.sin(z-f.heading),Math.cos(z-f.heading)));Z<M&&(M=Z,_=z)}f.lock&&(_=Math.atan2(-(f.lock.x-f.pos.x),-(f.lock.z-f.pos.z)));let S=-Math.sin(f.heading),b=-Math.cos(f.heading),E=Math.cos(f.heading),H=-Math.sin(f.heading),V=f.pos.x+S*.95+E*.3,A=f.pos.z+b*.95+H*.3;r.emit(V,cr,A,{vx:S*2,vy:0,vz:b*2,life:.06,size:C.id==="shotgun"?1.1:.7,grow:.6});let L=0,w=[];for(let P=0;P<C.pellets;P++){let R=_+(Math.random()-.5)*2*C.spread,F=-Math.sin(R),B=-Math.cos(R),I=C.range,z=null;for(let U of f.colliders){let q=w0(V,A,F,B,U,I);q<I&&(I=q,z=null)}for(let U of f.targets){if(!U.up)continue;let q=xd(V,A,F,B,U.x,U.z,U.r,I);q<I&&(I=q,z=U)}let Z=null;if(f.hitables)for(let U of f.hitables)for(let q of U){let ee=xd(V,A,F,B,q.x,q.z,q.r,I);ee<I&&(I=ee,Z=q.ref,z=null)}if((z||Z)&&L++,Z){let U=C.dmg||20,q=F,ee=B;c(V,A,F,B,I,null,!1,null,()=>f.onPersonHit&&f.onPersonHit(Z,U,q,ee))}else c(V,A,F,B,I,z,I<C.range,f.onTargetHit);P<3&&w.push([V,A,V+F*I,A+B*I])}return f.onShot&&f.onShot(w),f.audio.shot&&f.audio.shot(C.id),{fired:!0,hits:L}}return{update:x,remoteShot:g}}var Zb=n=>"#"+n.toString(16).padStart(6,"0"),ma=n=>"$"+n.toLocaleString();function I0(n){let e=c=>document.getElementById(c),t=e("store"),i=e("store-list"),s=null;function r(c){n.toast(c.msg),n.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(n.persist(),n.onChange()),l()}function o(){let c=n.save;i.innerHTML="";for(let u of xc){let p=c.weapons.includes(u.id),m=document.createElement("div");m.className="upg-row store-row"+(c.equipped===u.id?" sel":""),m.innerHTML=`<div class="uinfo"><b>${u.name}</b><small>${u.desc}</small>
        <small class="ammo-line">${p?"Ammo: "+(c.ammo[u.id]|0):ma(u.price)}</small></div>
        <div class="store-btns"></div>`;let g=m.querySelector(".store-btns");if(p){let x=document.createElement("button");x.className="upg-btn",x.textContent="+"+u.ammoBox+" AMMO "+ma(u.ammoPrice),x.disabled=c.cash<u.ammoPrice,x.onclick=()=>r(_0(c,u.id)),g.appendChild(x);let d=document.createElement("button");d.className="buy-btn eq",d.textContent=c.equipped===u.id?"EQUIPPED":"EQUIP",d.disabled=c.equipped===u.id,d.onclick=()=>r(M0(c,u.id)),g.appendChild(d)}else{let x=document.createElement("button");x.className="buy-btn",x.textContent="BUY "+ma(u.price),x.disabled=c.cash<u.price,x.onclick=()=>r(v0(c,u.id)),g.appendChild(x)}i.appendChild(m)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",i.appendChild(h)}function a(){let c=n.save;i.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${fa?ma(fa):"FREE"}</b><div class="swatch-row"></div>`;let u=h.querySelector(".swatch-row");for(let x of x0){let d=document.createElement("div");d.className="swatch"+(c.outfit.shirt===x?" sel":""),d.style.background=Zb(x),d.onclick=()=>r(E0(c,x)),u.appendChild(d)}i.appendChild(h);let p=document.createElement("div");p.className="style-sec",p.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let m=p.querySelector(".swatch-row");for(let x of yc){let d=document.createElement("button"),f=c.hats.includes(x.id);d.className="wheel-opt"+(c.outfit.hat===x.id?" sel":""),d.innerHTML=`${x.name}<small>${c.outfit.hat===x.id?"wearing":f||!x.price?"free":ma(x.price)}</small>`,d.onclick=()=>r(b0(c,x.id)),m.appendChild(d)}i.appendChild(p);let g=document.createElement("p");g.className="store-tip",g.textContent="Everything here is free. More colors, pants, skin tone & hair in \u{1F3A8} SKIN EDITOR (pause menu).",i.appendChild(g)}function l(){e("store-cash").textContent=n.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var Yb={parking:"#3b3f46",arena:"#4b5bd6",legislature:"#c9b98f",forks:"#b98a5a",museum:"#7fb3d5",mansion:"#0f9d58",hospital:"#e2e8f0",park:"#3f8a3a"};function L0(n,e){let t=n.getContext("2d"),i=n.width,r=i/2/140,o=0;function a(l,c,h,u,p){if((o++&3)!==0)return;let m=x=>i/2+(x-l)*r,g=x=>i/2+(x-c)*r;t.clearRect(0,0,i,i),t.save(),t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(38,62,40,0.88)",t.fillRect(0,0,i,i),t.fillStyle="#2f6f86",t.fillRect(m(xt.minX),g(-1400),(xt.maxX-xt.minX)*r,(1400+gn.maxZ)*r),t.fillRect(m(-1400),g(gn.minZ),(1400+xt.minX)*r,(gn.maxZ-gn.minZ)*r);for(let x=0;x<9;x++)for(let d=0;d<9;d++){let f=dt(x),v=dt(d),y="rgba(128,136,150,0.6)";for(let T in In){let[C,_]=In[T];C===f&&_===v&&(y=Yb[T])}t.fillStyle=y,t.fillRect(m(f-30),g(v-30),60*r,60*r)}t.strokeStyle="#25292f",t.lineWidth=14*r,t.beginPath();for(let x of Tt)t.moveTo(m(x),g(-340)),t.lineTo(m(x),g(340)),t.moveTo(m(-340),g(x)),t.lineTo(m(340),g(x));t.moveTo(m(340),g(Mn)),t.lineTo(m(hi),g(Mn)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(m(hi),g(-Di)),t.lineTo(m(hi),g(Di)),t.stroke();for(let x of e)t.fillStyle=x.color,t.beginPath(),t.arc(m(x.door.x),g(x.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();u&&(t.fillStyle="#ffffff",t.fillRect(m(u.x)-3,g(u.z)-3,6,6)),p&&p.each(x=>{x.b>=0||(t.fillStyle=x.team==="red"?"#ff3b4e":x.team==="blue"?"#3b8bff":"#4ade80",t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.beginPath(),t.arc(m(x.x),g(x.z),4,0,Math.PI*2),t.fill(),t.stroke())}),t.restore(),t.save(),t.translate(i/2,i/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",i/2,11)}return{draw:a}}var $b={none:"None",center:"Center",dual:"Dual",side:"Side"},Kb={clear:"Clear",dark:"Dark",limo:"Limo"};function D0(n){let e=g=>document.getElementById(g),t=e("skin-editor"),i=e("se-body"),s=n.save,r="car",o=!1;function a(g,x,d,f={}){let v=`<div class="swatch-row se-row" data-key="${g}">`;f.off&&(v+=`<button class="swatch off${d==null?" sel":""}" data-v="off" aria-label="off">OFF</button>`);for(let T of x)v+=`<button class="swatch${T===d?" sel":""}" data-v="${T}" style="background:${gc(T)}" aria-label="color"></button>`;let y=d!=null&&!x.includes(d);return v+=`<label class="swatch custom${y?" sel":""}" style="${y?"background:"+gc(d):""}" title="Any color"><input type="color" data-key="${g}" value="${gc(d??16777215)}">\u{1F3A8}</label>`,v+"</div>"}function l(g,x,d,f){return`<div class="swatch-row se-row" data-key="${g}">`+x.map(v=>`<button class="wheel-opt${v===f?" sel":""}" data-v="${v}"><b>${d[v]}</b></button>`).join("")+"</div>"}let c=(g,x)=>`<div class="style-sec"><b>${g}</b>${x}</div>`;function h(){let g=s.currentCar,x=ar(s,g),f='<div class="swatch-row se-row" data-key="car">'+n.cars.filter(v=>s.owned.includes(v.id)).map(v=>`<button class="wheel-opt${v.id===g?" sel":""}" data-v="${v.id}"><b>${v.name}</b></button>`).join("")+"</div>";i.innerHTML=c("Car",f)+c("Body paint",a("paint",Ss,s.paint[g]))+c("Rims",a("rims",[12172998,1513500,13211182,2287359,14100029,16317180,4906624,11032055],x.rims))+c("Racing stripes",l("stripes",ua,$b,x.stripes))+(x.stripes!=="none"?c("Stripe color",a("stripe",Ss,x.stripe)):"")+c("Underglow",a("glow",[2287359,16723555,4906624,11032055,16765503,16317180],x.glow,{off:!0}))+c("Window tint",l("tint",da,Kb,x.tint))}function u(){let g=s.outfit;i.innerHTML=c("Name (shown online)",`<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g,"")}" autocomplete="off" spellcheck="false">`)+c("Shirt",a("shirt",Ss,g.shirt))+c("Pants",a("pants",[2963272,1981066,1120295,7041664,9067034,16317180,7999504,1483594],g.pants))+c("Skin tone",a("skin",dc,g.skin))+c("Hair",a("hair",fc,g.hair))+c("Hat",l("hat",ws,pc,g.hat))+(g.hat!=="none"?c("Hat color",a("hatColor",Ss,g.hatColor)):"");let x=e("se-name");x.addEventListener("input",()=>{let d=fd(x.value);d&&(s.name=d,n.persist(),n.onName())}),x.addEventListener("keydown",d=>d.stopPropagation())}function p(){for(let g of t.querySelectorAll(".setab"))g.classList.toggle("active",g.dataset.tab===r);r==="car"?h():u()}function m(g,x){let d=s.currentCar,f=ar(s,d),v=s.outfit,y=x==="off"?null:typeof x=="string"&&x[0]==="#"?parseInt(x.slice(1),16):isNaN(+x)?x:+x,T=!1,C=!1;switch(g){case"car":s.owned.includes(x)&&(s.currentCar=x,T=!0);break;case"paint":s.paint[d]=y,T=!0;break;case"rims":f.rims=y,T=!0;break;case"stripes":f.stripes=x,T=!0;break;case"stripe":f.stripe=y,T=!0;break;case"glow":f.glow=y,T=!0;break;case"tint":f.tint=x,T=!0;break;case"shirt":case"pants":case"skin":case"hair":case"hatColor":v[g]=y,C=!0;break;case"hat":v.hat=x,C=!0;break}n.persist(),T&&n.onCar(g==="car"),C&&n.onOutfit(),n.beep(760,.03)}i.addEventListener("click",g=>{let x=g.target.closest("button[data-v]");if(!x)return;let d=x.closest("[data-key]");m(d.dataset.key,x.dataset.v),p()}),i.addEventListener("input",g=>{let x=g.target.closest("input[type=color]");if(!x)return;m(x.dataset.key,x.value);let d=x.closest("label");d&&(d.style.background=x.value)}),i.addEventListener("change",g=>{g.target.closest("input[type=color]")&&p()});for(let g of t.querySelectorAll(".setab"))g.addEventListener("click",()=>{r=g.dataset.tab,n.onTab(r),p()});return{open(g){r=g||"car",o=!0,t.classList.remove("hidden"),n.onTab(r),p()},close(){o=!1,t.classList.add("hidden")},get isOpen(){return o},get tab(){return r},refresh:p}}Nt();var _d=["lobby","apartment","office","diner"],U0={lobby:"LOBBY",apartment:"APARTMENT",office:"OFFICE",diner:"DINER"},ho=22,uo=16,Mc=4.6,Ui=.3,Jb=-1750,N0=n=>_d[(n*2654435761>>>0)%_d.length];function jb(n){return{x:(_d.indexOf(n)-1.5)*90,z:Jb}}function vd(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new cn(s);return r.colorSpace=vt,i&&(r.wrapS=r.wrapT=zn,r.repeat.set(i[0],i[1])),r}var Ec=(n,e={})=>new ae(Object.assign({color:n,roughness:.8,metalness:.05,emissive:n,emissiveIntensity:.18},e)),Qb={lobby:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#e9e4da":"#b9b2a5",n.fillRect(t*16,e*16,16,16)},apartment:n=>{for(let e=0;e<8;e++)n.fillStyle=e%2?"#9a6a3e":"#a8754a",n.fillRect(0,e*16,128,16),n.fillStyle="#7a5230",n.fillRect(e*37%128,e*16,2,16)},office:n=>{n.fillStyle="#5b6472",n.fillRect(0,0,128,128),n.fillStyle="#525a67";for(let e=0;e<128;e+=32)n.fillRect(e,0,1,128),n.fillRect(0,e,128,1)},diner:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#f2f2f2":"#1a1a1a",n.fillRect(t*16,e*16,16,16)}},eS={lobby:14209732,apartment:13227715,office:14673388,diner:15909813};function H0(n){let e=new Map;function t(g){if(e.has(g))return e.get(g);let x=jb(g),d=new it;d.position.set(x.x,0,x.z);let f=[],v=ho/2,y=uo/2,T=(P,R,F,B)=>f.push({minX:x.x+P,maxX:x.x+R,minZ:x.z+F,maxZ:x.z+B}),C=(P,R,F,B,I,z=0,Z=!0)=>{let U=new X(P,R);return U.position.set(F,B,I),U.rotation.y=z,U.castShadow=Z,U.receiveShadow=!0,d.add(U),U},_=(P,R,F,B,I,z,Z=0,U=!0)=>{C(new fe(P,R,F).translate(0,R/2,0),B,I,Z,z),U&&T(I-P/2,I+P/2,z-F/2,z+F/2)},M=vd(128,128,Qb[g],[ho/4,uo/4]);C(new Ge(ho,uo).rotateX(-Math.PI/2),Ec(16777215,{map:M,emissiveMap:M,emissiveIntensity:.2}),0,.02,0,0,!1),C(new Ge(ho,uo).rotateX(Math.PI/2),Ec(16053488,{emissiveIntensity:.5}),0,Mc,0,0,!1);let S=Ec(eS[g],{side:wt}),b=(P,R,F,B)=>{C(new fe(P,Mc,R).translate(0,Mc/2,0),S,F,0,B,0,!1),T(F-P/2,F+P/2,B-R/2,B+R/2)};b(ho+Ui*2,Ui,0,-y-Ui/2),b(ho+Ui*2,Ui,0,y+Ui/2),b(Ui,uo,-v-Ui/2,0),b(Ui,uo,v+Ui/2,0);let E=new ae({color:16777215,emissive:16774364,emissiveIntensity:2.2});for(let P of[-6,0,6])for(let R of[-4,4])C(new Ge(2.4,.9).rotateX(Math.PI/2),E,P,Mc-.02,R,0,!1);let H=vd(256,64,(P,R,F)=>{let B=P.createLinearGradient(0,0,0,F);B.addColorStop(0,"#7fb2ee"),B.addColorStop(1,"#cfe6f7"),P.fillStyle=B,P.fillRect(0,0,R,F),P.fillStyle="#3b4656";for(let I=0;I<R;I+=64)P.fillRect(I,0,4,F);P.fillRect(0,0,R,4),P.fillRect(0,F-4,R,4)});C(new Ge(14,1.6),new mt({map:H}),0,2.6,-y+.01,0,!1);let V=vd(64,96,(P,R,F)=>{P.fillStyle="#20262f",P.fillRect(0,0,R,F),P.fillStyle="#4ade80",P.fillRect(0,0,R,6),P.fillRect(0,0,5,F),P.fillRect(R-5,0,5,F),P.fillStyle="#9fd4ff",P.fillRect(9,12,R-18,F-20),P.fillStyle="#16a34a",P.font="bold 14px sans-serif",P.textAlign="center",P.fillText("EXIT",R/2,40)});C(new Ge(2.2,3).translate(0,1.5,0),new ae({map:V,emissive:16777215,emissiveMap:V,emissiveIntensity:.6}),0,0,y-.02,Math.PI,!1);let A=new mt({color:4906624,transparent:!0,opacity:.7,depthWrite:!1,side:wt}),L=C(new ei(.75,1.05,32).rotateX(-Math.PI/2),A,0,.05,y-1.6,0,!1);tS(g,{add:C,boxAt:_,mat:Ec,W2:v,D2:y,group:d,solid:T}),n.add(d);let w={style:g,group:d,colliders:f,pad:L,padMat:A,spawn:{x:x.x,z:x.z+y-3.2,heading:0},exit:{x:x.x,z:x.z+y-1.6},bounds:{minX:x.x-v,maxX:x.x+v,minZ:x.z-y,maxZ:x.z+y}};return e.set(g,w),w}let i=new ae({color:4165434,roughness:.6,emissive:2054682,emissiveIntensity:.6}),s=new ae({color:15919044,roughness:.6}),r=new ae({color:4937059,metalness:.7,roughness:.35}),o=new mt({color:4906624,transparent:!0,opacity:.5,depthWrite:!1,side:wt,blending:$t}),a=[];function l(){for(let g of a)n.remove(g.mesh);a.length=0}function c(g,x){l();for(let d of x){let f=new it;if(d.kind==="safe"){f.add(new X(new fe(.75,.8,.65).translate(0,.4,0),r));let y=new X(new Be(.1,.1,.04,14).rotateX(Math.PI/2),new ae({color:13948120,metalness:1,roughness:.2}));y.position.set(0,.45,.34),f.add(y)}else for(let y=0;y<3;y++){let T=new X(new fe(.34,.09,.17),i);T.position.set((y-1)*.12,.05+y%2*.09,y%2*.05),T.rotation.y=y*.3,f.add(T);let C=new X(new fe(.05,.095,.175),s);C.position.copy(T.position),C.rotation.y=T.rotation.y,f.add(C)}let v=new X(new ei(.5,.62,24).rotateX(-Math.PI/2),o);v.position.y=.04,f.add(v),f.position.set(d.x,.02,d.z),n.add(f),a.push({mesh:f,x:d.x,z:d.z,amount:d.amount,kind:d.kind,got:!1})}}function h(g,x){let d=[],f=g.bounds;for(let v=0;v<200&&d.length<x;v++){let y=f.minX+1.2+Math.random()*(f.maxX-f.minX-2.4),T=f.minZ+1.2+Math.random()*(f.maxZ-f.minZ-2.4);if(Math.hypot(y-g.spawn.x,T-g.spawn.z)<2.5)continue;let C=!0;for(let _ of g.colliders)if(y>_.minX-.7&&y<_.maxX+.7&&T>_.minZ-.7&&T<_.maxZ+.7){C=!1;break}for(let _ of d)Math.hypot(_.x-y,_.z-T)<2&&(C=!1);C&&d.push({x:y,z:T})}return d}let u=0;function p(g,x){u+=g,x&&(x.padMat.opacity=.5+Math.sin(u*4)*.25,x.pad.rotation.y+=g),o.opacity=.35+Math.sin(u*5)*.2;for(let d of a)!d.got&&d.kind!=="safe"&&(d.mesh.rotation.y+=g*1.2)}function m(g,x){for(let d of a)if(!d.got&&Math.hypot(d.x-g,d.z-x)<(d.kind==="safe"?1.4:1))return d.got=!0,n.remove(d.mesh),d;return null}return{get:t,update:p,spawnLoot:c,clearLoot:l,lootSpots:h,grab:m}}function tS(n,e){let{add:t,boxAt:i,mat:s,W2:r,D2:o}=e,a=s(8016432),l=s(2237739),c=s(15921906),h=s(10134445,{metalness:.7,roughness:.35}),u=(g,x)=>{i(.6,.6,.6,s(9067066),g,x),t(new Pt(.6,10,8),s(4094516),g,1.15,x)},p=(g,x,d,f)=>{let v=s(f),y=new it,T=new X(new fe(2.6,.45,1).translate(0,.22,0),v),C=new X(new fe(2.6,.6,.25).translate(0,.75,.38),v),_=new X(new fe(.25,.65,1).translate(-1.3,.32,0),v),M=new X(new fe(.25,.65,1).translate(1.3,.32,0),v);return y.add(T,C,_,M),y.traverse(b=>{b.isMesh&&(b.castShadow=!0,b.receiveShadow=!0)}),y.position.set(g,0,x),y.rotation.y=d,e.group.add(y),Math.abs(Math.sin(d))>.5?[g-.6,g+.6,x-1.4,x+1.4]:[g-1.4,g+1.4,x-.6,x+.6]},m=g=>e.solid(g[0],g[1],g[2],g[3]);if(n==="lobby"){i(5,1.1,1.2,a,0,-2.5),i(5.2,.08,1.4,c,0,-2.5,1.1,!1);let g=s(12107462,{metalness:.85,roughness:.25,emissiveIntensity:.1});for(let x of[-6,-2,2,6])t(new Ge(2,3).translate(0,1.5,0),g,x,0,-o+.02,0,!1),t(new Ge(.4,.2),new mt({color:16747546}),x,3.3,-o+.03,0,!1);m(p(-7,2,Math.PI/2,1981066)),m(p(7,2,-Math.PI/2,1981066)),i(1.4,.4,.8,a,-5,2),i(1.4,.4,.8,a,5,2),u(-r+1,o-1),u(r-1,o-1),u(-r+1,-o+1.5),u(r-1,-o+1.5)}else if(n==="apartment"){m(p(-3,1.5,Math.PI,8141549)),i(1.8,.4,.9,a,-3,-.5),i(3,.5,.4,l,-3,-o+.4),t(new Ge(2.6,1.5),new ae({color:1118481,emissive:2781142,emissiveIntensity:.9}),-3,1.6,-o+.45,0,!1),i(6,.95,.8,c,6,-o+.5),i(.9,2,.8,h,r-.6,-o+.5),i(2.2,.75,1.1,a,5,-2);for(let g of[4.2,5.8])for(let x of[-3.1,-.9])i(.45,.5,.45,l,g,x);i(2.2,.55,3,s(15921906),r-1.4,3.5),i(2.2,.25,2.2,s(3718648),r-1.4,3.9,.55,!1),i(2.2,1,.2,a,r-1.4,o-3,0,!1),u(-r+1,o-1)}else if(n==="office"){let g=new ae({color:725536,emissive:3718648,emissiveIntensity:.9});for(let x of[-7,-2.5,2.5,7])for(let d of[-4.5,.5])i(3,.75,1.3,c,x,d),t(new fe(.9,.55,.06).translate(0,.28,0),g,x,.8,d-.3),i(.55,.5,.55,l,x,d+1.1);i(6,.75,1.6,a,0,4.6),t(new Ge(5,2.2),new ae({color:16777215,emissive:16777215,emissiveIntensity:.3}),-r+.02,2,2,Math.PI/2,!1),u(r-1,o-1),u(-r+1,o-1)}else{i(10,1.05,1,s(14100029),2,-o+3),i(10.2,.08,1.2,c,2,-o+3,1.05,!1);for(let x=0;x<6;x++)t(new Be(.28,.28,.12,12).translate(0,.75,0),s(14100029),-2+x*1.7,0,-o+4.3),i(.12,.7,.12,h,-2+x*1.7,-o+4.3,0,!1);for(let x of[-1,3])i(2.4,.75,1.1,c,-6.5,x),i(2.4,1.1,.5,s(14100029),-6.5,x-1.1),i(2.4,1.1,.5,s(14100029),-6.5,x+1.1);let g=new ae({color:16723555,emissive:16723555,emissiveIntensity:2.5});t(new fe(8,.12,.06),g,2,3.4,-o+.05,0,!1),t(new fe(8,.12,.06),new ae({color:2287359,emissive:2287359,emissiveIntensity:2.5}),2,3.1,-o+.05,0,!1),i(1,1.8,.7,s(2060267),r-.8,2),u(r-1,o-1)}}Nt();var bc=1e5,hr=[{id:"drive",text:"Drive to the green marker",needsTarget:!0},{id:"drift",text:"DRIFT! Hold HB (Space) while steering",needsTarget:!1},{id:"park",text:"Drive to the next marker and stop",needsTarget:!0},{id:"out",text:"Tap GET OUT (E) to leave your car",needsTarget:!1},{id:"enter",text:"Walk to the glowing door and tap ENTER",needsTarget:!0},{id:"exit",text:"Look around, then step on the green EXIT pad",needsTarget:!1}];function nS(n,e){switch(n){case"drive":return!!e.reached;case"drift":return e.driftTime>=1.5;case"park":return!!e.reached&&Math.abs(e.speed||0)<4;case"out":return!!e.onFoot;case"enter":return e.inside>=0;case"exit":return e.inside<0&&!!e.wasInside}return!1}function O0(n,e){let t={x:37,z:-37},i=null,s=1/0;for(let v of e.buildings){let y=Math.hypot(v.door.x-(t.x+30),v.door.z-t.z);y<s&&(s=y,i=v)}let r={drive:{x:37,z:-30,r:8},park:i?{x:i.door.x+i.door.nx*7,z:i.door.z+i.door.nz*7,r:9}:{x:90,z:-37,r:9},enter:i?{x:i.door.x+i.door.nx*.8,z:i.door.z+i.door.nz*.8,r:1.6}:null},o=new mt({color:4906624,transparent:!0,opacity:.85,depthWrite:!1,side:wt}),a=new mt({color:4906624,transparent:!0,opacity:.22,depthWrite:!1,side:wt,blending:$t}),l=new it,c=new X(new ei(.85,1,40).rotateX(-Math.PI/2),o);c.position.y=.1;let h=new X(new Be(1,1,30,24,1,!0).translate(0,15,0),a);l.add(c,h),l.visible=!1,n.add(l);let u=!1,p=0,m=0,g=!1,x=0;function d(){let v=hr[p];return v&&v.needsTarget?r[v.id]:null}function f(){let v=d();l.visible=!!(u&&v),v&&(l.position.set(v.x,0,v.z),l.scale.set(v.r,1,v.r))}return{building:i,start(){u=!0,p=0,m=0,g=!1,f()},stop(){u=!1,l.visible=!1},get active(){return u},get step(){return p},get total(){return hr.length},get text(){return hr[p]?hr[p].text:""},target:d,update(v,y){if(!u)return null;x+=v,o.opacity=.6+Math.sin(x*4)*.25,l.rotation.y+=v*.6;let T=d(),C=T?Math.hypot(y.pos.x-T.x,y.pos.z-T.z)<T.r:!1;return hr[p].id==="drift"&&y.drifting&&(m+=v),y.inside>=0&&(g=!0),nS(hr[p].id,{reached:C,driftTime:m,onFoot:y.onFoot,inside:y.inside,wasInside:g,speed:y.speed})?(p++,p>=hr.length?(u=!1,l.visible=!1,"done"):(f(),"next")):null},get driftProgress(){return Math.min(1,m/1.5)}}}Nt();function z0({url:n,key:e,topic:t,onStatus:i}){let s=new Map,r=null,o="off",a=0,l=null,c=null,h=0,u=!1,p=null,m="realtime:"+t;function g(v){if(o!==v&&(o=v,i))try{i(v)}catch{}}function x(v){if(r&&r.readyState===1)try{return r.send(JSON.stringify(v)),!0}catch{}return!1}function d(){if(u)return;clearTimeout(p),g("connecting");let v=n.replace(/^http/,"ws").replace(/\/$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(e)+"&vsn=1.0.0";try{r=new WebSocket(v)}catch{return f()}r.onopen=()=>{l=String(++a),x({topic:m,event:"phx_join",ref:l,join_ref:l,payload:{config:{broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},access_token:e}}),clearInterval(c),c=setInterval(()=>x({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++a)}),25e3)},r.onmessage=y=>{let T;try{T=JSON.parse(y.data)}catch{return}if(T.topic===m){if(T.event==="phx_reply"&&T.ref===l){if(T.payload&&T.payload.status==="ok")h=0,g("on");else{g("error");try{r.close()}catch{}}return}if(T.event==="phx_error"||T.event==="phx_close"){try{r.close()}catch{}return}if(T.event==="broadcast"&&T.payload){let C=s.get(T.payload.event);if(C)try{C(T.payload.payload||{})}catch(_){console.warn("mp handler",_)}}}},r.onclose=()=>{clearInterval(c),c=null,r=null,u||f()},r.onerror=()=>{}}function f(){g("connecting");let v=Math.min(15e3,1e3*Math.pow(1.7,h++));p=setTimeout(d,v)}return{connect(){u=!1,r||d()},close(){if(u=!0,clearTimeout(p),clearInterval(c),r){x({topic:m,event:"phx_leave",payload:{},ref:String(++a),join_ref:l});try{r.close()}catch{}}r=null,g("off")},on(v,y){s.set(v,y)},send(v,y){return o!=="on"?!1:x({topic:m,event:"broadcast",ref:String(++a),join_ref:l,payload:{type:"broadcast",event:v,payload:y}})},get status(){return o}}}var Md="https://fhbqxujlnqlmzvulrdxt.supabase.co",Ed="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w",F0="city-driver-v2";var iS=160,sS=1e3,rS=2500,oS=7e3,aS=16,lS=10,cS=(n,e)=>{let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t};function hS(n,e){let t=String(n||"Driver").slice(0,16),i="700 28px system-ui, -apple-system, sans-serif",s=document.createElement("canvas").getContext("2d");s.font=i;let r=Math.max(70,Math.ceil(s.measureText(t).width)+30),o=44,a=document.createElement("canvas");a.width=r,a.height=o;let l=a.getContext("2d");l.fillStyle="rgba(8,12,22,0.72)",l.beginPath(),l.roundRect?l.roundRect(1,1,r-2,o-2,14):l.rect(1,1,r-2,o-2),l.fill(),l.fillStyle=e==="red"?"#ff3b4e":e==="blue"?"#3b8bff":"#4ade80",l.beginPath(),l.arc(16,o/2,5,0,Math.PI*2),l.fill(),l.font=i,l.fillStyle="#fff",l.textBaseline="middle",l.fillText(t,26,o/2+1);let c=new cn(a),h=new eo(new er({map:c,transparent:!0,depthTest:!1}));return h.scale.set(r/90,o/90,1),h.renderOrder=999,h}function B0(n){let e=Math.random().toString(36).slice(2,10),t=new Map,i=null,s=0,r=0,o="",a="";function l(){return t.size+1}function c(){n.onCount&&n.onCount(l())}function h(M){let S=t.get(M);S&&(S.car&&n.scene.remove(S.car),S.person&&n.scene.remove(S.person),S.tag&&S.tag.parent&&S.tag.parent.remove(S.tag),t.delete(M),c())}function u(M){let S=M.carId+"|"+M.lookSig;if(M.car&&M.carSig===S)return;M.car&&n.scene.remove(M.car);let b=n.CAR_DEFS.find(H=>H.id===M.carId)||n.CAR_DEFS[0],E=n.buildCar(b);M.look&&n.applyCarSkin(E,M.look.paint,M.look.carSkin),E.position.set(M.cx,0,M.cz),E.rotation.y=M.ch,n.scene.add(E),M.car=E,M.carSig=S}function p(M){M.person||(M.person=n.buildCharacter(M.look?M.look.outfit:{shirt:2845872,hat:"none"}),M.person.position.set(M.x,0,M.z),n.scene.add(M.person),M.outfitSig="");let S=M.look?JSON.stringify(M.look.outfit):"";M.look&&S!==M.outfitSig&&(n.setOutfit(M.person,M.look.outfit),M.outfitSig=S),n.setHeldWeapon(M.person,M.weapon||null)}function m(M){if(!M||!M.id||M.id===e)return;let S=t.get(M.id);if(!S){if(t.size>=aS)return;S={id:M.id,name:"",x:+M.x||0,z:+M.z||0,h:+M.h||0,cx:0,cz:0,ch:0,tx:0,tz:0,th:0,mode:"car",carId:"sport",look:null,lookSig:"",car:null,person:null,tag:null,tagName:"",phase:0,speed:0,b:-1,weapon:null,seen:0},t.set(M.id,S),c()}S.seen=performance.now(),S.mode=M.m==="foot"?"foot":"car",S.tx=+M.x||0,S.tz=+M.z||0,S.th=+M.h||0,S.carId=String(M.c||"sport"),S.b=Number.isInteger(M.b)?M.b:-1,S.weapon=M.w||null;let b=M.tm||null;if(b!==S.team&&(S.team=b,S.tagName=""),S.dead=M.hp===0,S.firing=!!M.f,S.mode==="foot"&&Number.isFinite(M.px)&&(S.cx=+M.px,S.cz=+M.pz,S.ch=+M.ph||0),M.L){let E=JSON.stringify(M.L);E!==S.lookSig&&(S.lookSig=E,S.look=n.unpackLook(M.L))}M.n&&(M.n!==S.tagName||!S.tag)&&(S.tag&&S.tag.parent&&S.tag.parent.remove(S.tag),S.tag=hS(M.n,S.team),S.tagName=M.n,S.name=M.n),S.placed||(S.x=S.tx,S.z=S.tz,S.h=S.th,S.mode==="car"&&(S.cx=S.tx,S.cz=S.tz,S.ch=S.th),S.placed=!0)}function g(M){if(!M||M.id===e||!Array.isArray(M.s))return;let S=t.get(M.id);if(S&&(S.recoil=.35),!(S&&n.localBuilding!==void 0&&S.b!==n.localBuilding()))for(let b of M.s.slice(0,3))Array.isArray(b)&&b.length===4&&n.remoteShot(+b[0],+b[1],+b[2],+b[3])}let x=null;function d(){for(let M of[...t.keys()])h(M)}function f(M){if(M===void 0&&(M=F0),!(M===x&&i)){if(v(),x=M,!M||!Md||!Ed){n.onStatus&&n.onStatus("off",1);return}i=z0({url:Md,key:Ed,topic:M,onStatus:S=>{n.onStatus&&n.onStatus(S,l())}}),i.on("st",m),i.on("sh",g),i.on("bye",S=>{S&&S.id&&h(S.id)}),i.on("hit",S=>{S&&S.t===e&&n.onHit&&n.onHit(S,t.get(S.id))}),i.on("kill",S=>{S&&n.onKill&&n.onKill(S)}),i.connect()}}function v(){if(i){try{i.send("bye",{id:e})}catch{}i.close(),i=null}d(),o="",a=""}window.addEventListener("pagehide",()=>{try{i&&i.send("bye",{id:e})}catch{}});function y(M,S,b){if(b=b||performance.now(),i&&i.status==="on"&&S){let V=S.mode+(S.x|0)+","+(S.z|0)+","+(S.h*10|0)+S.b+(S.w||""),A=V!==o||Math.abs(S.speed)>.3;if(b-s>=(A?iS:sS)){s=b,o=V;let L={id:e,n:S.name,m:S.mode,x:+S.x.toFixed(2),z:+S.z.toFixed(2),h:+S.h.toFixed(3),c:S.car,b:S.b,w:S.w||null,tm:S.team||null,hp:S.dead?0:1};S.mode==="foot"&&(L.px=+S.px.toFixed(2),L.pz=+S.pz.toFixed(2),L.ph=+S.ph.toFixed(3));let w=JSON.stringify(S.look);(w!==a||b-r>rS)&&(L.L=S.look,r=b,a=w),i.send("st",L)}}let E=Math.min(1,M*lS),H=S?S.b:-1;for(let[V,A]of t){if(b-A.seen>oS){h(V);continue}let L=A.x,w=A.z;if(A.x+=(A.tx-A.x)*E,A.z+=(A.tz-A.z)*E,A.h+=cS(A.h,A.th)*E,A.speed=M>0?Math.hypot(A.x-L,A.z-w)/M:0,A.mode==="car"&&(A.cx=A.x,A.cz=A.z,A.ch=A.h),u(A),A.car.position.set(A.cx,0,A.cz),A.car.rotation.y=A.ch,A.car.visible=H===-1,A.mode==="foot"?(p(A),A.person.visible=A.b===H,A.person.position.x=A.x,A.person.position.z=A.z,A.person.rotation.y=A.h,A.phase+=A.speed*M*2.1,A.recoil=Math.max(0,(A.recoil||0)-M),A.dead?(A.person.rotation.x=-Math.PI/2+.05,A.person.position.y=.12):(A.person.rotation.x=0,n.animateCharacter(A.person,A.phase,A.speed,!!A.weapon&&A.recoil>0,M))):A.person&&(A.person.visible=!1),A.tag){let P=A.mode==="foot"?A.person:A.car;P&&A.tag.parent!==P&&(A.tag.parent&&A.tag.parent.remove(A.tag),P.add(A.tag),A.tag.position.set(0,A.mode==="foot"?2.35:2.3,0))}}}function T(M){!i||i.status!=="on"||!M||!M.length||i.send("sh",{id:e,s:M.map(S=>S.map(b=>+b.toFixed(2)))})}function C(M){for(let S of t.values())M(S)}function _(M,S){i&&i.status==="on"&&i.send(M,Object.assign({id:e},S))}return{connect:f,disconnect:v,update:y,sendShots:T,send:_,each:C,myId:e,get topic(){return x},get count(){return l()},get status(){return i?i.status:"off"}}}Nt();function uS(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgba(110,0,0,1)";let t=(s,r)=>s+Math.random()*(r-s);e.beginPath(),e.arc(64,64,40,0,Math.PI*2),e.fill();for(let s=0;s<14;s++){let r=t(0,Math.PI*2),o=t(20,50),a=t(6,18);e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,Math.PI*2),e.fill()}let i=new cn(n);return i.colorSpace=vt,i}function k0(n){let e=new ui(n,60,{color:10158080,opacity:.95,size:.35}),t=new ui(n,24,{color:6946816,opacity:.55,size:.8}),i=uS(),s=[];for(let c=0;c<24;c++){let h=new X(new Ge(1,1).rotateX(-Math.PI/2),new ae({map:i,transparent:!0,opacity:.92,roughness:.15,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));h.visible=!1,h.renderOrder=3,n.add(h),s.push({m:h,size:0,max:0,life:0})}let r=0;function o(c,h,u,p=0,m=0,g=1){let x=Math.round(6*g);for(let d=0;d<x;d++)e.emit(c+(Math.random()-.5)*.2,h+(Math.random()-.5)*.3,u+(Math.random()-.5)*.2,{vx:p*(1.5+Math.random()*3)+(Math.random()-.5)*2,vy:Math.random()*2.5-.5,vz:m*(1.5+Math.random()*3)+(Math.random()-.5)*2,life:.35+Math.random()*.3,size:.18,grow:.25});t.emit(c,h,u,{vx:p*1.2,vy:.3,vz:m*1.2,life:.4,size:.5,grow:.9})}function a(c,h,u=2.2){let p=s[r];r=(r+1)%s.length,p.m.position.set(c,.07+r*5e-4,h),p.m.rotation.y=Math.random()*Math.PI*2,p.size=.2,p.max=u,p.life=45,p.m.scale.set(.2,1,.2),p.m.material.opacity=.92,p.m.visible=!0}function l(c){e.update(c),t.update(c);for(let h of s)h.m.visible&&(h.life-=c,h.size<h.max&&(h.size=Math.min(h.max,h.size+c*.5),h.m.scale.set(h.size,1,h.size)),h.life<5&&(h.m.material.opacity=.92*Math.max(0,h.life/5)),h.life<=0&&(h.m.visible=!1))}return{hit:o,pool:a,update:l}}var qt=28,wc=qt*8,dS=1.5,ga=5.2,fo=(n,e)=>n+Math.random()*(e-n),ur=n=>n[Math.random()*n.length|0];function Sc(){return{shirt:ur(Ss),pants:ur([2963272,1981066,1120295,7041664,9067034,13358561]),skin:ur(dc),hair:ur(fc.slice(0,6)),hat:Math.random()<.25?ur(["cap","beanie","cowboy"]):"none",hatColor:ur(Ss),hairLong:Math.random()<.4}}function bd(n,e,t,i){t=(t%wc+wc)%wc;let s=Math.floor(t/(qt*2)),r=t-s*qt*2-qt;return s===0?(i.x=n+r,i.z=e-qt,i.h=-Math.PI/2):s===1?(i.x=n+qt,i.z=e+r,i.h=Math.PI):s===2?(i.x=n-r,i.z=e+qt,i.h=Math.PI/2):(i.x=n-qt,i.z=e-r,i.h=0),i}function G0(n){let e=[],t=[],i=[],s={x:0,z:0,h:0},r=n.count||16;function o(_,M){let S=[];for(let b=0;b<9;b++)for(let E=0;E<9;E++){let H=(b-8/2)*74,V=(E-8/2)*74;Math.hypot(H-_,V-M)<170&&rr(H,V)!=="parking"&&S.push({cx:H,cz:V})}return S}function a(_,M,S){let b=o(M,S),E=b.length?ur(b):{cx:0,cz:0};_.cx=E.cx,_.cz=E.cz,_.p=fo(0,wc),_.dir=Math.random()<.5?1:-1,_.state="walk",_.hp=40,_.flee=0,_.phase=fo(0,6),_.deadT=0,Mi(_.person,Sc()),_.person.rotation.set(0,0,0),_.person.visible=!0,bd(_.cx,_.cz,_.p,s),_.x=s.x,_.z=s.z,_.h=s.h}function l(){let _=co(Sc());n.scene.add(_);let M={person:_,x:0,z:0,h:0,cx:0,cz:0,p:0,dir:1,state:"walk",hp:40,flee:0,phase:0,deadT:0,kind:"ped"};return e.push(M),M}function c(_,M=0,S=0,b="shot"){if(_.state==="dead")return;_.state="dead",_.deadT=0,_.hp=0;let E=Math.atan2(M,S);_.person.rotation.set(0,E+Math.PI,0),_.fallDir={x:M,z:S},n.blood.hit(_.x,1,_.z,M,S,b==="car"?2.5:1.5),n.blood.pool(_.x+M*.9,_.z+S*.9,fo(1.8,2.8)),_.kind==="enemy"&&_.onDeath&&_.onDeath(_),u(_.x,_.z,35)}function h(_,M,S,b){return _.state==="dead"?!1:(_.hp-=M,n.blood.hit(_.x,1.25,_.z,S,b,.8),_.hp<=0?(c(_,S,b),!0):(_.kind==="ped"&&(_.state="flee",_.flee=7),_.kind==="enemy"&&(_.aggro=!0),!1))}function u(_,M,S){for(let b of e){if(b.state==="dead")continue;let E=Math.hypot(b.x-_,b.z-M);if(E<S){b.state="flee",b.flee=6+Math.random()*3,bd(b.cx,b.cz,b.p+1,s);let H=Math.hypot(s.x-_,s.z-M);b.dir=H>E?1:-1}}}function p(_){let M=co(_.outfit||Sc());Mi(M,_.outfit||Sc()),pa(M,_.weapon||"pistol"),n.scene.add(M);let S=Object.assign({kind:"enemy",person:M,x:_.x,z:_.z,h:0,hp:_.hp||60,maxHp:_.hp||60,state:"idle",aggro:!1,cool:fo(.5,1.5),phase:0,deadT:0,strafe:Math.random()<.5?1:-1,accuracy:.45,dmg:8,rate:.9,range:45},_);return S.person.position.set(S.x,0,S.z),t.push(S),S}function m(){for(let _ of t)n.scene.remove(_.person);t.length=0}function g(_,M,S){if(_.state==="dead"){_.deadT+=M,x(_,M);return}let b=S.x-_.x,E=S.z-_.z,H=Math.hypot(b,E);(H<_.range||_.aggro)&&(_.aggro=!0);let V=0;if(_.aggro&&S.alive&&!S.hidden){_.h=Math.atan2(-b,-E);let A=_.boss?9:13,L=0,w=0;H>A+3?(L=b/H,w=E/H):H<A-3&&(L=-b/H,w=-E/H),L+=-E/H*_.strafe*.6,w+=b/H*_.strafe*.6;let P=Math.hypot(L,w)||1;V=_.boss?4.2:3;let R=n.collide(_.x+L/P*V*M,_.z+w/P*V*M,.45);if(Math.abs(R.x-_.x)<1e-4&&Math.abs(R.z-_.z)<1e-4&&(_.strafe*=-1),_.x=R.x,_.z=R.z,Math.random()<M*.4&&(_.strafe*=-1),_.cool-=M,_.cool<=0&&H<_.range*1.2){_.cool=_.rate*fo(.8,1.3);let F=Math.max(.08,_.accuracy*(1-H/(_.range*1.6))*(S.inCar?.7:1)),B=Math.random()<F,I=_.x-Math.sin(_.h)*.9,z=_.z-Math.cos(_.h)*.9,Z=B?0:fo(1.2,3)*(Math.random()<.5?-1:1),U=S.x+-E/H*Z,q=S.z+b/H*Z;n.shoot(I,z,U+(U-I)/H*(B?0:12),q+(q-z)/H*(B?0:12)),_c(_.person),n.audio&&n.audio.shot&&n.audio.shot(_.weapon==="glock"?"pistol":_.weapon),B&&n.onPlayerHit(_.dmg,_)}}_.phase+=V*M*2.1,_.person.position.set(_.x,0,_.z),_.person.rotation.y=_.h,Ts(_.person,_.phase,V,_.aggro,M)}function x(_,M){let S=Math.min(1,_.deadT/.35);if(_.person.rotation.x=-S*(Math.PI/2-.05),_.person.position.y=.12*S,_.deadT>.4){let b=_.person.userData;b.legs[0].rotation.x=.1,b.legs[1].rotation.x=-.15,b.arms[0].rotation.z=.9,b.arms[1].rotation.z=-.9}}function d(_,M){for(;e.length<r;)a(l(),M.x,M.z);for(let S of e){let b=Math.hypot(S.x-M.x,S.z-M.z)>190;if(S.state==="dead"){S.deadT+=_,x(S,_),(S.deadT>30||b&&S.deadT>3)&&a(S,M.x,M.z);continue}if(b){a(S,M.x,M.z);continue}if(S.state==="escape"){S.flee-=_;let H=n.collide(S.x+S.ex*ga*_,S.z+S.ez*ga*_,.4);S.x=H.x,S.z=H.z,S.phase+=ga*_*2.1,S.person.position.set(S.x,0,S.z),Ts(S.person,S.phase,ga,!1,_),S.flee<=0&&y(S);continue}let E=dS;S.state==="flee"&&(S.flee-=_,E=ga,S.flee<=0&&(S.state="walk")),S.p+=S.dir*E*_,bd(S.cx,S.cz,S.p,s),S.x=s.x,S.z=s.z,S.h=s.h+(S.dir<0?Math.PI:0),S.phase+=E*_*2.1,S.person.position.set(S.x,0,S.z),S.person.rotation.y=S.h,Ts(S.person,S.phase,E,!1,_)}for(let S of t)g(S,_,M);i.length=0;for(let S of e)S.state!=="dead"&&i.push({x:S.x,z:S.z,r:.42,ref:S});for(let S of t)S.state!=="dead"&&i.push({x:S.x,z:S.z,r:.45,ref:S})}function f(_,M,S,b){if(Math.abs(b)<5)return 0;let E=-Math.sin(S),H=-Math.cos(S),V=0;for(let A of[e,t])for(let L of A)if(L.state!=="dead"&&(Math.hypot(L.x-_-E*1.2,L.z-M-H*1.2)<1.6||Math.hypot(L.x-_,L.z-M)<1.3)){let w=Math.sign(b);L.kind==="enemy"&&(L.hp=0),c(L,E*w,H*w,"car"),V++}return V}function v(_,M,S,b){let E=null,H=-1;for(let w of e){let P=Math.hypot(w.x-S,w.z-b);w.state!=="dead"&&P>H&&(H=P,E=w)}if(!E)return;let V=_-S,A=M-b,L=Math.hypot(V,A)||1;Object.assign(E,{state:"escape",x:_,z:M,ex:V/L,ez:A/L,flee:3.5,hp:40}),E.person.rotation.set(0,Math.atan2(-V,-A),0),E.person.position.set(_,0,M)}function y(_){let M=Math.max(0,Math.min(8,Math.round(_.x/74+8/2))),S=Math.max(0,Math.min(8,Math.round(_.z/74+8/2)));_.cx=(M-8/2)*74,_.cz=(S-8/2)*74;let b=Math.max(-qt,Math.min(qt,_.x-_.cx)),E=Math.max(-qt,Math.min(qt,_.z-_.cz)),H=Math.abs(E+qt),V=Math.abs(b-qt),A=Math.abs(E-qt),L=Math.abs(b+qt),w=Math.min(H,V,A,L);_.p=w===H?b+qt:w===V?qt*2+E+qt:w===A?qt*4+(qt-b):qt*6+(qt-E),_.state="flee",_.flee=4}function T(_){for(r=_;e.length>_;){let M=e.pop();n.scene.remove(M.person)}}function C(_){for(let M of e)M.person.visible=_;for(let M of t)M.person.visible=_}return{update:d,damage:h,scare:u,spawnEnemy:p,clearEnemies:m,carHits:f,setCount:T,setVisible:C,eject:v,get hitList(){return i},get enemies(){return t},get peds(){return e}}}Nt();var fS=14,fr=3.5,Tc=fS/2+2.2,Sd=16;function pS(n,e){let t=(e%Sd+Sd)%Sd;return n==="z"?t<6?"green":t<8?"yellow":"red":t<8?"red":t<14?"green":"yellow"}var mS=(n,e)=>(n+e)%2*4;function Ac(n,e,t,i){return n==="z"?{x:e+(t<0?fr:-fr),z:i,h:t<0?0:Math.PI}:{x:i,z:e+(t>0?fr:-fr),h:t>0?-Math.PI/2:Math.PI/2}}var dr=new gt,xa=new Wn,po=new k,wd=new k(1,1,1),V0=new k(0,1,0),Rc=new Oe(1710618),gS=new Oe(16722458),xS=new Oe(16756768),yS=new Oe(2883434);function W0(n){let e=n.lines.slice().sort((I,z)=>I-z),t=e.length,i=0,s=[];for(let I=0;I<t;I++)for(let z=0;z<t;z++){let Z=e[I],U=e[z],q=Tc-.6;s.push({ix:I,iz:z,axis:"z",x:Z+q,z:U+q,rot:0}),s.push({ix:I,iz:z,axis:"z",x:Z-q,z:U-q,rot:Math.PI}),s.push({ix:I,iz:z,axis:"x",x:Z-q,z:U+q,rot:-Math.PI/2}),s.push({ix:I,iz:z,axis:"x",x:Z+q,z:U-q,rot:Math.PI/2})}let r=s.length,o=new Be(.09,.11,4.2,6).translate(0,2.1,0),a=new ae({color:3093563,metalness:.6,roughness:.5}),l=new fe(.45,1.25,.32).translate(0,4.6,0),c=new ae({color:1909030,roughness:.6,metalness:.3}),h=new Pi(.15,12),u=new _t(o,a,r),p=new _t(l,c,r),m=new mt({color:16777215,toneMapped:!1}),g=[0,1,2].map(()=>new _t(h,m,r));p.castShadow=!0,s.forEach((I,z)=>{xa.setFromAxisAngle(V0,I.rot),po.set(I.x,0,I.z),dr.compose(po,xa,wd),u.setMatrixAt(z,dr),p.setMatrixAt(z,dr);let Z=Math.sin(I.rot),U=Math.cos(I.rot);for(let q=0;q<3;q++)po.set(I.x+Z*.17,5-q*.38,I.z+U*.17),dr.compose(po,xa,wd),g[q].setMatrixAt(z,dr),g[q].setColorAt(z,Rc)});for(let I of[u,p,...g])I.instanceMatrix.needsUpdate=!0,n.scene.add(I);{let I=new Ge(fr*2-.6,.45).rotateX(-Math.PI/2),z=new _t(I,new ae({color:15922422,roughness:.7}),r);s.forEach((Z,U)=>{let q=e[Z.ix],ee=e[Z.iz],ue,me,we;if(Z.axis==="z"){let Ce=Z.rot===0?1:-1;ue=q+Ce*fr,me=ee+Ce*Tc,we=0}else{let Ce=Z.rot<0?-1:1;ue=q+Ce*Tc,me=ee-Ce*fr,we=Math.PI/2}xa.setFromAxisAngle(V0,we),po.set(ue,.065,me),dr.compose(po,xa,wd),z.setMatrixAt(U,dr)}),z.instanceMatrix.needsUpdate=!0,n.scene.add(z)}let x=new Array(r).fill("");function d(I,z,Z){return pS(Z,i+mS(I,z))}function f(){let I=!1;for(let z=0;z<r;z++){let Z=s[z],U=d(Z.ix,Z.iz,Z.axis);U!==x[z]&&(x[z]=U,I=!0,g[0].setColorAt(z,U==="red"?gS:Rc),g[1].setColorAt(z,U==="yellow"?xS:Rc),g[2].setColorAt(z,U==="green"?yS:Rc))}if(I)for(let z of g)z.instanceColor.needsUpdate=!0}let v=[],y=12,T=I=>{let z=0,Z=1/0;for(let U=0;U<t;U++){let q=Math.abs(e[U]-I);q<Z&&(Z=q,z=U)}return z},C=[16109749,15250575,13011554,11037509,8014380];function _(I){let z=I.userData.profile,Z=new it,U=new ae({color:Math.random()*16777215|0,roughness:.8}),q=new ae({color:C[Math.random()*C.length|0],roughness:.7}),ee=new X(new fe(.42,.5,.28),U);ee.position.y=.25;let ue=new X(new Pt(.13,10,8),q);ue.position.y=.62,Z.add(ee,ue);let me=z?z.glass:[[.5,.8]],we=Math.min(...me.map(Ee=>Ee[1]))-.15,Ce=me.reduce((Ee,Ne)=>Ee+Ne[0],0)/me.length;Z.position.set(-.38,we,-Ce+.25),I.add(Z),I.userData.driver=Z,I.userData.driverHead=ue}function M(){let I=n.CAR_DEFS.filter(q=>q.id!=="hyper"||Math.random()<.3),z=I[Math.random()*I.length|0],Z=n.buildCar(z),U=z.colors[Math.random()*z.colors.length|0];return n.applyCarSkin(Z,U,null),_(Z),n.scene.add(Z),{group:Z,def:z,color:U,axis:"z",li:0,dir:1,s:0,speed:0,cruise:0,x:0,z:0,h:0,honk:0,wait:0,driverHp:30,panic:0,empty:!1}}function S(I,z,Z,U){for(let me=0;me<20;me++){I.axis=Math.random()<.5?"z":"x",I.li=Math.random()*t|0,I.dir=Math.random()<.5?1:-1,I.s=e[0]+Math.random()*(e[t-1]-e[0]);let we=Ac(I.axis,e[I.li],I.dir,I.s),Ce=Math.hypot(we.x-z,we.z-Z);if(U?Ce<150:Ce>70&&Ce<170){I.x=we.x,I.z=we.z,I.h=we.h;break}}let q=Ac(I.axis,e[I.li],I.dir,I.s);I.x=q.x,I.z=q.z,I.h=q.h,I.cruise=9+Math.random()*5,I.speed=I.cruise*.6,I.driverHp=30,I.panic=0,I.empty=!1;let ee=I.group.userData.driver;ee&&(ee.visible=!0,ee.rotation.set(0,0,0));let ue=I.group.userData.driverHead;ue&&ue.material.color.setHex(C[Math.random()*C.length|0]),I.group.position.set(I.x,0,I.z),I.group.rotation.y=I.h}function b(I){if(I.dir>0){for(let z=0;z<t;z++)if(e[z]>I.s+.3)return z}else for(let z=t-1;z>=0;z--)if(e[z]<I.s-.3)return z;return-1}function E(I,z){let Z=Math.random(),U=I.dir>0&&z===t-1||I.dir<0&&z===0,q=Z<.55&&!U?"straight":Z<.82?"right":"left",ee,ue;if(q==="straight")return;I.axis==="z"?(ee="x",ue=I.dir<0==(q==="right")?1:-1):(ee="z",ue=I.dir>0==(q==="right")?1:-1);let me=e[I.li],we=z;(ue>0&&me>=e[t-1]-1||ue<0&&me<=e[0]+1)&&(ue=-ue),I.axis=ee,I.li=we,I.dir=ue,I.s=me}function H(I,z,Z){for(i+=I,f();v.length<y;){let U=M();S(U,z.x,z.z,v.length<4),v.push(U)}for(let U of v){if(Math.hypot(U.x-z.x,U.z-z.z)>230){S(U,z.x,z.z,!1);continue}if(U.empty&&U.respawnT!==void 0&&(U.respawnT-=I,U.respawnT<=0)){delete U.respawnT,S(U,z.x,z.z,!1);continue}if(U.empty){U.speed=Math.max(0,U.speed-6*I),U.s+=U.dir*U.speed*I;let G=Ac(U.axis,e[U.li],U.dir,U.s);U.x+=(G.x-U.x)*Math.min(1,I*6),U.z+=(G.z-U.z)*Math.min(1,I*6),U.group.position.set(U.x,0,U.z);continue}U.panic>0&&(U.panic-=I);let q=U.panic>0?U.cruise*1.8:U.cruise,ee=b(U);if(ee>=0){let G=e[ee],_e=(G-U.s)*U.dir,re=_e-Tc,ce=U.axis==="z"?U.li:ee,ie=U.axis==="z"?ee:U.li,ze=d(ce,ie,U.axis);re>-.5&&(ze==="red"||ze==="yellow"&&re>5)&&(q=Math.min(q,Math.max(0,re-.3)*1.1)),_e<=.05&&(U.s=G,E(U,ee))}else U.dir=-U.dir;for(let G of v){if(G===U||G.axis!==U.axis||G.li!==U.li||G.dir!==U.dir)continue;let _e=(G.s-U.s)*U.dir;_e>0&&_e<14&&(q=Math.min(q,Math.max(0,(_e-6.5)*1.3)))}if(Z){let G=-Math.sin(U.h),_e=-Math.cos(U.h),re=Z.x-U.x,ce=Z.z-U.z,ie=re*G+ce*_e,ze=Math.abs(re*_e-ce*G);ie>0&&ie<13&&ze<2.6?(q=Math.min(q,Math.max(0,(ie-5.5)*1.3)),U.wait+=I):U.wait=0}let ue=q>U.speed?4:9;U.speed+=Math.sign(q-U.speed)*Math.min(Math.abs(q-U.speed),ue*I),U.s+=U.dir*U.speed*I;let me=Ac(U.axis,e[U.li],U.dir,U.s),we=Math.min(1,I*6);U.x+=(me.x-U.x)*we,U.z+=(me.z-U.z)*we;let Ce=me.h-U.h;Ce=Math.atan2(Math.sin(Ce),Math.cos(Ce)),U.h+=Ce*Math.min(1,I*5),U.group.position.set(U.x,0,U.z),U.group.rotation.y=U.h;let Ee=U.speed*I*2.6;for(let G of U.group.userData.wheels)G.rotation.x+=Ee;let Ne=U.group.userData.flashers;if(Ne){let G=(i*6|0)%2;Ne[0].emissiveIntensity=G?4:.25,Ne[1].emissiveIntensity=G?.25:4}}}function V(I,z){let Z=null;for(let U of v){let q=-Math.sin(U.h),ee=-Math.cos(U.h);for(let ue of[-1.3,0,1.3]){let me=U.x+q*ue,we=U.z+ee*ue,Ce=1+z,Ee=I.x-me,Ne=I.z-we,G=Math.hypot(Ee,Ne);G<Ce&&G>1e-6&&(I.x=me+Ee/G*Ce,I.z=we+Ne/G*Ce,Z=U)}}return Z&&(Z.speed*=.3),Z}let A=[];function L(){A.length=0;for(let I of v){let z=-Math.sin(I.h),Z=-Math.cos(I.h);A.push({x:I.x+z*.9,z:I.z+Z*.9,r:1,ref:{kind:"car",car:I}}),A.push({x:I.x-z*.9,z:I.z-Z*.9,r:1,ref:{kind:"car",car:I}})}return A}function w(I,z,Z,U){if(I.empty)return null;I.panic=6,I.driverHp-=z;let q=I.group.userData.driver,ee=new k;return q&&q.getWorldPosition(ee),I.driverHp<=0?(I.empty=!0,I.respawnT=40,q&&(q.rotation.z=.9,q.rotation.x=.3),I.group.userData.driverHead&&I.group.userData.driverHead.material.color.setHex(7995392),{kind:"killed",x:ee.x,y:ee.y+.6,z:ee.z}):{kind:"hit",x:ee.x,y:ee.y+.6,z:ee.z}}function P(I,z,Z){let U=null,q=Z;for(let ee of v){let ue=Math.hypot(ee.x-I,ee.z-z);ue<q&&(q=ue,U=ee)}return U}function R(I){let z=v.indexOf(I);return z<0?null:(v.splice(z,1),n.scene.remove(I.group),{alive:!I.empty,x:I.x,z:I.z,h:I.h,def:I.def,color:I.color})}function F(I){for(y=I;v.length>I;){let z=v.pop();n.scene.remove(z.group)}}function B(I){for(let z of v)z.group.visible=I}return{update:H,collide:V,hitList:L,setCount:F,setVisible:B,stateAt:d,hitCar:w,nearestCar:P,remove:R,get cars(){return v}}}var va={sport:{hp:260,kg:1400,cyl:6,red:7200},muscle:{hp:420,kg:1650,cyl:8,red:6200,idle:750},super:{hp:560,kg:1450,cyl:10,red:8500},suv:{hp:300,kg:2100,cyl:6,red:6e3},truck:{hp:380,kg:2300,cyl:8,red:5600,idle:700},track:{hp:480,kg:1200,cyl:4,red:8800,idle:1100},sedan:{hp:180,kg:1450,cyl:4,red:6500},taxi:{hp:170,kg:1500,cyl:4,red:6200},van:{hp:210,kg:2200,cyl:6,red:5500,idle:700},police:{hp:400,kg:1800,cyl:8,red:6600,idle:800},hyper:{hp:900,kg:1350,cyl:12,red:9e3,idle:1e3}},vS=n=>va[n]||va.sport,_a=[{id:"stock",name:"Stock engine",price:0},{id:"i4t",name:"2.0L Turbo I4",hp:320,kg:-40,cyl:4,red:7600,idle:900,price:9e3},{id:"v6",name:"3.5L V6",hp:380,kg:0,cyl:6,red:7200,idle:800,price:14e3},{id:"v8",name:"5.7L V8",hp:480,kg:60,cyl:8,red:6600,idle:750,price:22e3},{id:"bb",name:"9.4L Big Block V8",hp:750,kg:120,cyl:8,red:6200,idle:700,price:45e3},{id:"v10",name:"5.2L V10",hp:640,kg:40,cyl:10,red:8700,idle:950,price:6e4},{id:"v12",name:"6.5L V12",hp:820,kg:90,cyl:12,red:9e3,idle:1e3,price:95e3},{id:"promod",name:"10.5L Pro Mod Hemi",hp:1100,kg:150,cyl:8,red:8e3,idle:1100,price:15e4}],Rs=[{id:"none",name:"Naturally aspirated",price:0,maxPsi:0},{id:"turbo_s",name:"Small turbo",kind:"turbo",maxPsi:18,spoolAt:.32,rate:3.2,price:6e3},{id:"turbo_l",name:"Big turbo",kind:"turbo",maxPsi:32,spoolAt:.55,rate:1.3,price:15e3},{id:"twin",name:"Twin turbo",kind:"turbo",maxPsi:36,spoolAt:.4,rate:2.3,price:28e3},{id:"roots",name:"Roots blower",kind:"roots",maxPsi:20,spoolAt:0,rate:20,price:18e3},{id:"centri",name:"Centrifugal supercharger",kind:"centri",maxPsi:28,spoolAt:0,rate:20,price:22e3}],Ma=[0,50,100,150,250,500],Td=[0,2500,4500,7e3,12e3,25e3],Ea=[{id:"s",name:"5 lb",time:0,price:0},{id:"m",name:"10 lb",time:2,price:3e3},{id:"l",name:"15 lb",time:4,price:6e3}],Ad={ecu:[0,2500,6e3,12e3],intake:[0,1200,3e3,6e3],exhaust:[0,1500,3500,7e3],weight:[0,3e3,8e3,18e3],brakes:[0,1500,4e3,9e3]},ba=[{id:"stock",name:"Stock gearbox",shift:.2,price:0},{id:"close",name:"Close-ratio 6-speed",shift:.13,price:8e3},{id:"drag",name:"Drag sequential",shift:.07,price:2e4}],mo=[{id:"street",name:"Street",road:1,launch:1,corner:1,off:.55,price:0},{id:"sport",name:"Sport (R-comp)",road:1.12,launch:1.15,corner:1.1,off:.45,price:3e3},{id:"slicks",name:"Drag slicks",road:.95,launch:1.65,corner:.85,off:.3,price:6e3},{id:"at",name:"All-terrain",road:.95,launch:1.05,corner:.94,off:.85,price:3500},{id:"mud",name:"Mud terrain",road:.86,launch:1,corner:.86,off:1.05,price:5e3}],go=[{id:"low",name:"Lowered",h:-.07,tier:-1,handling:1.08,price:2500},{id:"stock",name:"Stock",h:0,tier:0,handling:1,price:0},{id:"l2",name:'2" lift',h:.12,tier:1,handling:.96,price:3e3},{id:"l4",name:'4" lift',h:.24,tier:2,handling:.91,price:6e3},{id:"l6",name:'6" lift',h:.38,tier:3,handling:.85,price:1e4}],xo=[{id:0,name:"Stock size",scale:1,price:0},{id:1,name:'33"',scale:1.12,price:2e3},{id:2,name:'35"',scale:1.22,price:3500},{id:3,name:'37"',scale:1.32,price:5e3},{id:4,name:'40"',scale:1.45,price:8e3}],Cc=[{id:"awd",name:"4x4 conversion",price:12e3,note:"+traction everywhere, big off-road boost"},{id:"bullbar",name:"Pre-runner bull bar",price:2500,note:"Steel front bar"},{id:"winch",name:"Winch",price:1800,note:"Mounted in the front bumper"},{id:"snorkel",name:"Snorkel",price:1200,note:"Wade through mud pits faster"},{id:"rack",name:"Roof rack",price:1500,note:""},{id:"lightbar",name:"LED light bar",price:2e3,note:"Lights up the trail at night"},{id:"flares",name:"Fender flares",price:1600,note:""},{id:"skid",name:"Skid plates",price:2200,note:"+off-road ability"},{id:"wing",name:"Drag wing",price:3e3,note:"+high-speed stability"},{id:"wheelie",name:"Wheelie bars",price:2400,note:"+launch traction"}],Rd=2.6,Cd=4.8,X0=3.5,Pd=-.05,Id=.3,bn=(n,e)=>n.find(t=>t.id===e)||n[0];function q0(){return{engine:"stock",adder:"none",psi:0,nitrous:0,bottle:"s",ecu:0,intake:0,exhaust:0,weight:0,trans:"stock",fd:X0,tires:"street",brakes:0,lift:"stock",tireSize:0,offset:0,body:[]}}var As=(n,e,t)=>Math.max(e,Math.min(t,n)),ya=n=>As(n|0,0,3);function Cs(n){let e=q0(),t=n&&typeof n=="object"?n:{},i=r=>r.map(o=>o.id),s={engine:i(_a).includes(t.engine)?t.engine:e.engine,adder:i(Rs).includes(t.adder)?t.adder:e.adder,nitrous:Ma.includes(t.nitrous)?t.nitrous:0,bottle:i(Ea).includes(t.bottle)?t.bottle:"s",ecu:ya(t.ecu),intake:ya(t.intake),exhaust:ya(t.exhaust),weight:ya(t.weight),brakes:ya(t.brakes),trans:i(ba).includes(t.trans)?t.trans:e.trans,fd:Number.isFinite(+t.fd)?As(+t.fd,Rd,Cd):e.fd,tires:i(mo).includes(t.tires)?t.tires:e.tires,lift:i(go).includes(t.lift)?t.lift:e.lift,tireSize:As(t.tireSize|0,0,xo.length-1),offset:Number.isFinite(+t.offset)?As(+t.offset,Pd,Id):0,body:Array.isArray(t.body)?[...new Set(t.body.filter(r=>Cc.some(o=>o.id===r)))]:[]};return s.psi=Number.isFinite(+t.psi)?As(Math.round(+t.psi),0,bn(Rs,s.adder).maxPsi):0,s.tireSize=Math.min(s.tireSize,Pc(s.lift)),s}function Pc(n){return As(bn(go,n).tier+1,0,xo.length-1)}function Z0(n){let e=q0();if(!n)return e;let t=n.engine|0,i=n.turbo|0,s=n.tires|0,r=n.nitro|0,o=n.suspension|0;return e.ecu=Math.min(3,Math.ceil(t/2)),e.intake=Math.min(3,Math.floor(t/2)),e.exhaust=Math.min(3,Math.floor(t/2)),i>0&&(e.adder="turbo_s",e.psi=Math.min(18,i*4)),s>=2&&(e.tires="sport"),r>0&&(e.nitrous=Ma[Math.min(5,r)]),o>=3&&(e.lift="low"),e}var Y0=n=>1+Math.max(0,n)/14.7*.7;function rs(n,e){let t=Cs(e),i=n.stats,s=vS(n.id),r=bn(_a,t.engine),o=bn(Rs,t.adder),a=bn(mo,t.tires),l=bn(go,t.lift),c=bn(ba,t.trans),h=R=>t.body.includes(R),u=r.id==="stock"?s.hp:r.hp,p=1+.04*t.ecu+.03*t.intake+.03*t.exhaust,m=u*p,g=o.maxPsi?Y0(t.psi):1,x=m*g,d=s.kg+(r.kg||0)+(h("awd")?90:0)+(h("bullbar")?35:0)+(h("winch")?30:0)+(h("rack")?20:0)+(h("skid")?25:0);d*=1-.05*t.weight;let f=xo[t.tireSize].scale;d+=(f-1)*120;let v=x/d,y=s.hp/s.kg,C=t.fd/X0/f,_=i.accel*Math.pow(v/y,.7)*Math.pow(C,.8),M=Math.pow(g,.7)-1,S=_/(1+M),b=h("wing")?.97:1,E=Math.min(135,i.topSpeed*Math.pow(x/s.hp,.34)*Math.pow(1/C,.45)*b*(l.h>.2?.95:1)),H=h("awd"),V=30*a.launch*(H?1.3:1)*(h("wheelie")?1.12:1),A=As(a.off*(H?1:.82)+Math.max(0,l.tier)*.05+t.tireSize*.04+(h("skid")?.05:0),.25,1.2),L=t.nitrous,w=bn(Ea,t.bottle),P=Math.max(i.nitroPower,1+L*1.1/x);return{topSpeed:E,accel:S,handling:i.handling*l.handling*a.corner*(1+t.offset*.25)*(h("wing")?1.03:1),grip:i.grip*a.road,nitroTime:i.nitroTime+w.time,nitroPower:P,hp:x,naHp:m,kg:d,psi:t.psi,maxPsi:o.maxPsi||0,boostGain:M,boostKind:o.kind||null,spoolAt:o.spoolAt||0,spoolRate:o.rate||0,traction:V,offroad:A,snorkel:h("snorkel"),brake:1+.25*t.brakes,shiftTime:c.shift,engine:{cyl:r.cyl||s.cyl,red:(r.red||s.red)+150*t.ecu,idle:r.idle||s.idle||850},rideHeight:l.h,tireScale:f,offset:t.offset}}function _S(n,e,t,i){return!n||i<=.05?0:n==="roots"?i*(.7+.3*t):n==="centri"?i*Math.min(1,t*t*1.15):i*As((t-e)/.22,0,1)}function $0(n,e=24){let t=[],i=n.engine.red,s=n.engine.idle,r=n.naHp,o=n.maxPsi?Y0(n.psi)-1:0;for(let a=0;a<e;a++){let l=a/(e-1),c=s+(i-s)*l,h=Math.sin(Math.PI/2*Math.min(1,(l+.08)/.93))*(l>.88?1-(l-.88)*.9:1),u=n.boostKind?_S(n.boostKind,n.spoolAt,l,1):0,p=r*h*(1+o*u),m=p*5252/Math.max(c,1);t.push({rpm:Math.round(c),hp:Math.round(p),tq:Math.round(m)})}return t}function Sa(n,{nitro:e=!1,dt:t=1/120}={}){let i=new ao(n);i.box.mode="auto";let s={throttle:1,steer:0,handbrake:!1,nitro:e},r=0,o=null,a=null,l=null;for(;r<40;){let c=i.update(s,t,null);r+=t;let h=-i.pos.z,u=c.speed*2.2;if(o==null&&u>=60&&(o=r),a==null&&h>=18.29&&(a=r),l==null&&h>=201&&(l=r),h>=402)return{et:r,trap:u,zero60:o,sixtyFt:a,eighth:l}}return{et:null,trap:0,zero60:o,sixtyFt:a,eighth:l}}var Ic=n=>n?"$"+n.toLocaleString():"FREE",K0=2.2;function J0(n){let e=E=>document.getElementById(E),t=e("garage-perf"),i=e("garage-offroad"),s=e("garage-tune"),r=e("garage-dyno"),o=n.save,a=0,l=()=>o.currentCar,c=()=>n.getDef(l()),h=()=>o.build[l()]=Cs(o.build[l()]),u=()=>o.parts[l()]=o.parts[l()]||[],p=E=>u().includes(E);function m(E,H,V){if(!p(E)&&H>0){if(o.cash<H)return n.toast("Not enough cash \u2014 need "+Ic(H)),n.beep(220,.12),!1;o.cash-=H,u().push(E),n.beep(880,.08)}else p(E)||u().push(E);return V(h()),o.build[l()]=Cs(o.build[l()]),n.persist(),n.onBuild(),n.syncCash(),b(),!0}let g=(E,H,V="")=>`<div class="tsec"><div class="tsec-h"><b>${E}</b>${V?"<small>"+V+"</small>":""}</div>${H}</div>`;function x(E,H,V,A,L,w=()=>"",P=()=>null){return'<div class="topts">'+H.map(R=>{let F=E+":"+R.id,B=String(R.id)===String(V),I=p(F)||!L(R),z=P(R),Z=B?"INSTALLED":z?"\u{1F512} "+z:I?"OWNED":Ic(L(R));return`<button class="topt${B?" cur":""}${z?" locked":""}" data-cat="${E}" data-id="${R.id}" ${z?"disabled":""}>
        <b>${A(R)}</b>${w(R)?"<i>"+w(R)+"</i>":""}<small class="${!B&&!I&&!z&&o.cash<L(R)?"poor":""}">${Z}</small></button>`}).join("")+"</div>"}function d(E,H,V){let A='<div class="topts">';for(let L=0;L<=3;L++){let w=E+":"+L,P=Ad[E][L],R=L===0||p(w)||u().some(B=>B.startsWith(E+":")&&+B.split(":")[1]>=L),F=L===H;A+=`<button class="topt sm${F?" cur":""}" data-cat="${E}" data-id="${L}"><b>${V[L]}</b><small class="${!F&&!R&&o.cash<P?"poor":""}">${F?"INSTALLED":R?"OWNED":Ic(P)}</small></button>`}return A+"</div>"}function f(E){let H=Sa(E);return`<div class="tstat"><span><b>${Math.round(E.hp)}</b> hp</span><span><b>${Math.round(E.kg)}</b> kg</span>
      <span><b>${H.zero60?H.zero60.toFixed(2):"\u2014"}</b>s 0-60</span><span><b>${H.et?H.et.toFixed(2):"\u2014"}</b>s \xBC mi</span>
      <span><b>${Math.round(E.topSpeed*K0)}</b> mph</span><span>off-road <b>${Math.round(E.offroad*100)}</b></span></div>`}function v(){let E=h(),H=c(),V=va[H.id]||va.sport;t.innerHTML=f(rs(H,E))+g("Engine swap",x("engine",_a,E.engine,A=>A.name,A=>A.price,A=>(A.id==="stock"?V.hp:A.hp)+" hp"))+g("Power adder",x("adder",Rs,E.adder,A=>A.name,A=>A.price,A=>A.maxPsi?"up to "+A.maxPsi+" psi"+(A.kind==="turbo"?" \xB7 lag":" \xB7 instant"):""))+g("Nitrous",x("nitrous",Ma.map((A,L)=>({id:A,i:L})),E.nitrous,A=>A.id?A.id+" shot":"Stock kit",A=>Td[A.i])+x("bottle",Ea,E.bottle,A=>A.name+" bottle",A=>A.price,A=>A.time?"+"+A.time+"s":""),"hold N\u2082O to spray")+g("ECU tune",d("ecu",E.ecu,["Stock","Stage 1","Stage 2","Stage 3"]),"+4% hp & higher redline per stage")+g("Intake",d("intake",E.intake,["Stock","Cold air","Ported","Race"]))+g("Exhaust",d("exhaust",E.exhaust,["Stock","Cat-back","Headers","Straight pipe"]))+g("Weight reduction",d("weight",E.weight,["None","Stage 1","Stage 2","Gutted"]),"-5% weight per stage")+g("Transmission",x("trans",ba,E.trans,A=>A.name,A=>A.price,A=>(A.shift*1e3|0)+" ms shifts"))+g("Tires",x("tires",mo,E.tires,A=>A.name,A=>A.price,A=>"launch \xD7"+A.launch.toFixed(2)))+g("Brakes",d("brakes",E.brakes,["Stock","Sport","Big brake kit","Carbon ceramic"]))}function y(){let E=h(),H=c(),V=Pc(E.lift);i.innerHTML=f(rs(H,E))+g("Suspension",x("lift",go,E.lift,A=>A.name,A=>A.price),"more lift = bigger tires fit")+g("Tire size",x("tireSize",xo,E.tireSize,A=>A.name,A=>A.price,()=>"",A=>A.id>V?"needs "+(['2"','4"','6"'][Math.min(2,A.id-2)]||"more")+" lift":null))+g("Tires",x("tires",mo,E.tires,A=>A.name,A=>A.price,A=>"off-road "+Math.round(A.off*100)))+g("Parts",'<div class="topts">'+Cc.map(A=>{let L=E.body.includes(A.id),w=p("body:"+A.id);return`<button class="topt${L?" cur":""}" data-cat="body" data-id="${A.id}"><b>${A.name}</b>${A.note?"<i>"+A.note+"</i>":""}<small class="${!L&&!w&&o.cash<A.price?"poor":""}">${L?"ON \u2014 tap to remove":w?"OWNED":Ic(A.price)}</small></button>`}).join("")+"</div>")}function T(){let E=h(),H=c(),V=bn(Rs,E.adder),A=rs(H,E);s.innerHTML=f(A)+g("Boost",V.maxPsi?`<div class="tslider"><input type="range" id="tn-psi" min="0" max="${V.maxPsi}" step="1" value="${E.psi}"><span id="tn-psi-v">${E.psi} psi</span></div>`:'<p class="store-tip">Install a turbo or supercharger in PERFORMANCE to tune boost.</p>',V.maxPsi?V.name:"")+g("Final drive",`<div class="tslider"><span>accel</span><input type="range" id="tn-fd" min="${Rd}" max="${Cd}" step="0.05" value="${E.fd}" style="direction:rtl"><span>top speed</span><span id="tn-fd-v">${E.fd.toFixed(2)}</span></div>`,"short gears launch harder, tall gears go faster")+g("Wheel offset",`<div class="tslider"><input type="range" id="tn-off" min="${Pd}" max="${Id}" step="0.01" value="${E.offset}"><span id="tn-off-v">${Math.round(E.offset*100)} cm</span></div>`,"wider stance = more stable")+'<button class="mbtn" id="tn-reset" style="width:100%">RESET TUNE</button>';let L=(w,P,R)=>{let F=e(w);F&&(F.addEventListener("input",()=>{let B=+F.value;h()[P]=B,e(w+"-v").textContent=R(B),o.build[l()]=Cs(h()),n.onBuild(!0),s.querySelector(".tstat").outerHTML=f(rs(H,h()))}),F.addEventListener("change",()=>{n.persist(),n.onBuild()}))};L("tn-psi","psi",w=>w+" psi"),L("tn-fd","fd",w=>w.toFixed(2)),L("tn-off","offset",w=>Math.round(w*100)+" cm"),e("tn-reset").onclick=()=>{let w=h();w.psi=Math.round(bn(Rs,w.adder).maxPsi*.6),w.fd=3.5,w.offset=0,n.persist(),n.onBuild(),T()}}function C(){let E=c(),H=rs(E,h()),V=Sa(H),A=$0(H,40),L=A.reduce((P,R)=>R.hp>P.hp?R:P),w=A.reduce((P,R)=>R.tq>P.tq?R:P);r.innerHTML=`<div class="dyno-wrap"><canvas id="dyno-cv" width="560" height="230"></canvas>
      <div class="dyno-legend"><span class="hpc">\u25A0 HP</span><span class="tqc">\u25A0 TORQUE</span></div></div>
      <div class="dyno-cards">
        <div><small>PEAK POWER</small><b>${L.hp}</b><i>hp @ ${L.rpm} rpm</i></div>
        <div><small>PEAK TORQUE</small><b>${w.tq}</b><i>lb-ft @ ${w.rpm} rpm</i></div>
        <div><small>WEIGHT</small><b>${Math.round(H.kg)}</b><i>kg \xB7 ${(H.hp/H.kg*1e3).toFixed(0)} hp/t</i></div>
        <div><small>0-60</small><b>${V.zero60?V.zero60.toFixed(2):"\u2014"}</b><i>sec</i></div>
        <div><small>60 FT</small><b>${V.sixtyFt?V.sixtyFt.toFixed(3):"\u2014"}</b><i>sec ${H.traction<34&&H.hp>700?"\xB7 needs grip!":""}</i></div>
        <div><small>\xBC MILE</small><b>${V.et?V.et.toFixed(2):"\u2014"}</b><i>sec @ ${Math.round(V.trap)} mph</i></div>
        <div><small>TOP SPEED</small><b>${Math.round(H.topSpeed*K0)}</b><i>mph</i></div>
        <div><small>BOOST</small><b>${H.maxPsi?H.psi:0}</b><i>psi${H.boostKind?" \xB7 "+(H.boostKind==="turbo"?"turbo":"blower"):""}</i></div>
      </div>
      <button class="mbtn primary" id="dyno-run" style="width:100%">\u25B6 RUN DYNO PULL</button>`,_(A,1),e("dyno-run").onclick=()=>M(A,H)}function _(E,H){let V=e("dyno-cv");if(!V)return;let A=V.getContext("2d"),L=V.width,w=V.height,P=34;A.clearRect(0,0,L,w),A.fillStyle="#0b1122",A.fillRect(0,0,L,w);let R=Math.max(...E.map(U=>Math.max(U.hp,U.tq)))*1.12,F=E[0].rpm,B=E[E.length-1].rpm,I=U=>P+(U-F)/(B-F)*(L-P-10),z=U=>w-P+6-U/R*(w-P-10);A.strokeStyle="rgba(255,255,255,.08)",A.lineWidth=1,A.fillStyle="#5b6b8c",A.font="10px sans-serif";for(let U=0;U<=4;U++){let q=R*U/4;A.beginPath(),A.moveTo(P,z(q)),A.lineTo(L-10,z(q)),A.stroke(),A.fillText(Math.round(q),2,z(q)+3)}for(let U=Math.ceil(F/1e3)*1e3;U<=B;U+=1e3)A.fillText(U/1e3+"k",I(U)-6,w-8);let Z=Math.max(2,Math.round(E.length*H));for(let[U,q]of[["tq","#38bdf8"],["hp","#ff5e3a"]]){A.strokeStyle=q,A.lineWidth=3,A.beginPath();for(let ee=0;ee<Z;ee++){let ue=E[ee];ee?A.lineTo(I(ue.rpm),z(ue[U])):A.moveTo(I(ue.rpm),z(ue[U]))}A.stroke()}}function M(E,H){cancelAnimationFrame(a);let V=performance.now(),A=3e3;n.audio&&n.audio.setEngine&&n.audio.setEngine(H.engine);let L=w=>{let P=Math.min(1,(w-V)/A);_(E,P),n.audio&&(n.audio.engine(.05+P*.97,1,!1),n.audio.turbo&&n.audio.turbo(H.boostKind?Math.min(1,P*1.3):0,H.boostKind)),P<1?a=requestAnimationFrame(L):n.audio&&(n.audio.engine(0,0),n.audio.turbo&&n.audio.turbo(0,H.boostKind,!0))};a=requestAnimationFrame(L)}function S(E){let H=E.target.closest("button[data-cat]");if(!H||H.disabled)return;let V=H.dataset.cat,A=H.dataset.id,L=h();switch(V){case"engine":{let w=bn(_a,A);m("engine:"+w.id,w.price,P=>P.engine=w.id);break}case"adder":{let w=bn(Rs,A);m("adder:"+w.id,w.price,P=>{P.adder=w.id,P.psi=Math.round(w.maxPsi*.6)});break}case"nitrous":{let w=+A,P=Ma.indexOf(w);m("nitrous:"+w,Td[P],R=>R.nitrous=w);break}case"bottle":{let w=bn(Ea,A);m("bottle:"+w.id,w.price,P=>P.bottle=w.id);break}case"ecu":case"intake":case"exhaust":case"weight":case"brakes":{let w=+A,P=w===0||u().some(R=>R.startsWith(V+":")&&+R.split(":")[1]>=w);m(V+":"+w,P?0:Ad[V][w],R=>R[V]=w);break}case"trans":{let w=bn(ba,A);m("trans:"+w.id,w.price,P=>P.trans=w.id);break}case"tires":{let w=bn(mo,A);m("tires:"+w.id,w.price,P=>P.tires=w.id);break}case"lift":{let w=bn(go,A);m("lift:"+w.id,w.price,P=>{P.lift=w.id,P.tireSize=Math.min(P.tireSize,Pc(w.id))});break}case"tireSize":{let w=xo[+A];m("tireSize:"+w.id,w.price,P=>P.tireSize=w.id);break}case"body":{let w=Cc.find(P=>P.id===A);L.body.includes(A)?(L.body=L.body.filter(P=>P!==A),n.persist(),n.onBuild(),b()):m("body:"+A,w.price,P=>P.body.push(A));break}}}for(let E of[t,i])E.addEventListener("click",S);function b(){v(),y(),s.classList.contains("hidden")||T(),r.classList.contains("hidden")||C()}return{refresh(){v(),y(),T(),C()},onTab(E){E==="tune"&&T(),E==="dyno"&&C()}}}Nt();var Gn=500,Dd=5e6,vo=328,Lc={name:"EMERALD",outfit:{shirt:1023320,pants:1120295,skin:9263675,hair:1839885,hairLong:!0,hat:"none",hatColor:1023320},weapon:"glock",hp:900};function MS(n){let e=n*2654435761>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function yo(n){let e=n()<.5,t=Tt[n()*Tt.length|0],i=-vo+n()*vo*2,s=n()<.5?1:-1;return e?{x:t+s*3.5,z:i}:{x:i,z:t+s*3.5}}function j0(n){let e=n()*9|0,t=n()*9|0;rr(dt(e),dt(t))==="mansion"&&(e=(e+1)%9);let i=dt(e),s=dt(t),r=-24+n()*48,o=n()*4|0,a=28;return o===0?{x:i+r,z:s-a}:o===1?{x:i+a,z:s+r}:o===2?{x:i-r,z:s+a}:{x:i-a,z:s-r}}var os=(n,e)=>Math.hypot(n.x-e.x,n.z-e.z),Q0=["Main St Kings","Exchange Crew","River Rats","Portage Posse","North End Wolves","Osborne Outlaws","St. Boniface Snakes","Pembina Pirates"],eg=["a mystery briefcase","hot pizzas","a stolen painting","a box of cash","a burner phone","VIP documents","a suspicious duffel bag","concert tickets"];function Ud(n){if(n=Math.max(1,Math.min(Gn,n|0)),n===Gn)return{n,type:"boss",title:"EMERALD",reward:Dd,desc:"Emerald runs the whole city and she's sitting on millions. Fight through her guards at the compound and take her down. Everything she has is yours.",points:[{x:id.x,z:id.z}],guards:10,timeLimit:0};let e=MS(n*7919+13),t=n/Gn,s=["deliver","race","collect","hit"][(n+(e()*4|0))%4];n%50===0&&(s="hit");let r=Q0[e()*Q0.length|0];if(s==="deliver"){let l=yo(e),c=yo(e);for(let u=0;u<8&&os(l,c)<220;u++)c=yo(e);let h=os(l,c);return{n,type:s,title:"Special Delivery",reward:600+n*30,desc:`Pick up ${eg[e()*eg.length|0]} and get it across town before the clock runs out.`,points:[l,c],timeLimit:Math.round(25+h/(11+t*6))}}if(s==="race"){let l=[],c=yo(e);l.push(c);let h=4+Math.min(4,n/80|0),u=0;for(;l.length<h;){let p=yo(e);for(let m=0;m<8&&(os(p,c)<90||os(p,c)>260);m++)p=yo(e);u+=os(p,c),l.push(p),c=p}return{n,type:s,title:"Checkpoint Race",reward:800+n*35,desc:`Hit all ${h} checkpoints in order before time runs out.`,points:l,timeLimit:Math.round(20+u/(13+t*8))}}if(s==="collect"){let l=j0(e),c=[],h=3+Math.min(5,n/70|0);for(let u=0;u<h;u++){let p=e()*Math.PI*2,m=20+e()*60;c.push({x:Math.max(-vo,Math.min(vo,l.x+Math.cos(p)*m)),z:Math.max(-vo,Math.min(vo,l.z+Math.sin(p)*m))})}return{n,type:s,title:"Cash Grab",reward:500+n*30,desc:`The ${r} dropped ${h} bags of cash around town. Grab them all before they come back.`,points:c,timeLimit:Math.round(60+h*18-t*30)}}let o=n%50===0,a=Math.min(9,1+(n/45|0)+(o?2:0));return{n,type:"hit",title:o?"Take Down the Boss":"Gang Hit",reward:(o?5e3:1e3)+n*45,desc:o?`The leader of the ${r} is holed up with his crew. End it.`:`${a} members of the ${r} are causing trouble. Take them out.`,points:[j0(e)],enemies:a,leader:o,timeLimit:0,tier:t}}function Ld(n,e){let t=n/Gn;return{hp:Math.round((45+n*.35)*(e?4:1)),accuracy:Math.min(.62,.22+t*.4),dmg:Math.round(6+t*10),rate:Math.max(.35,1-t*.5),weapon:e?"deagle":["pistol","glock","smg","shotgun","ak"][Math.min(4,n/100|0)]}}function tg(n){let e=new mt({color:16765503,transparent:!0,opacity:.85,depthWrite:!1,side:wt}),t=new mt({color:16765503,transparent:!0,opacity:.2,depthWrite:!1,side:wt,blending:$t}),i=new it;i.add(new X(new ei(.85,1,40).rotateX(-Math.PI/2).translate(0,.1,0),e)),i.add(new X(new Be(1,1,30,24,1,!0).translate(0,15,0),t)),i.visible=!1,n.scene.add(i);let s=new ae({color:4156202,roughness:.8,emissive:2772250,emissiveIntensity:.4}),r=[],o=null,a=0,l=0,c=0,h=[],u=null,p=!1,m=0,g=0;function x(){for(let M of r)n.scene.remove(M);r.length=0}function d(M,S){if(!M){i.visible=!1;return}i.visible=!0,i.position.set(M.x,0,M.z),i.scale.set(S,1,S)}function f(M){if(v(),o=Ud(M),a=0,l=0,c=o.timeLimit,p=!1,m=0,h=[],u=null,o.type==="deliver"||o.type==="race")d(o.points[0],o.type==="race"?7:6);else if(o.type==="collect"){d(null);for(let S of o.points){let b=new it;b.add(new X(new Pt(.45,10,8).scale(1,.8,1).translate(0,.4,0),s));let E=new X(new Ge(.5,.5),new mt({color:4906624,transparent:!0,opacity:.9}));E.position.y=1.3,b.add(E),b.position.set(S.x,0,S.z),b.userData={p:S,got:!1,sign:E},n.scene.add(b),r.push(b)}}else d(o.points[0],o.type==="boss"?12:9);return o}function v(){o=null,d(null),x(),n.people.clearEnemies(),h=[],u=null}function y(){p=!0;let M=o.points[0];if(o.type==="boss"){let b=Ld(480,!1);for(let E=0;E<o.guards;E++){let H=E/o.guards*Math.PI*2;h.push(n.people.spawnEnemy(Object.assign({},b,{x:M.x+Math.cos(H)*18,z:M.z-8+Math.sin(H)*12,weapon:E%2?"ak":"smg",hp:160})))}u=n.people.spawnEnemy({x:M.x,z:M.z-6,outfit:Lc.outfit,weapon:Lc.weapon,hp:Lc.hp,accuracy:.55,dmg:11,rate:.32,range:60,boss:!0,name:Lc.name}),h.push(u),n.toast('\u{1F451} EMERALD: "You came all this way to die?"',3500);return}let S=Ld(o.n,!1);for(let b=0;b<o.enemies;b++){let E=b/o.enemies*Math.PI*2,H=o.leader&&b===0,V=H?Ld(o.n,!0):S;h.push(n.people.spawnEnemy(Object.assign({},V,{x:M.x+Math.cos(E)*6,z:M.z+Math.sin(E)*6,boss:H})))}}function T(M,S){if(!o)return null;g+=M,l+=M,e.opacity=.6+Math.sin(g*4)*.25,i.rotation.y+=M*.6;for(let E of r)E.rotation.y+=M*1.5,E.userData.sign.lookAt(S.cam||i.position);if(o.timeLimit&&(c=o.timeLimit-l,c<=0))return"fail";let b=S.pos;if(o.type==="deliver"){let E=o.points[a];if(os(b,E)<6.5)return a++,n.beep(880,.08),a>=o.points.length?"pass":(d(o.points[a],6),"next")}else if(o.type==="race"){let E=o.points[a];if(os(b,E)<7.5)return a++,n.beep(990,.06),a>=o.points.length?"pass":(d(o.points[a],7),"next")}else if(o.type==="collect"){for(let E of r)if(!E.userData.got&&os(b,E.userData.p)<2.6)return E.userData.got=!0,E.visible=!1,m++,n.beep(1200,.05),m>=r.length?"pass":"next"}else if(!p&&os(b,o.points[0])<75&&y(),p){if(d(null),o.type==="boss"){if(u&&u.state==="dead")return"pass"}else if(h.every(E=>E.state==="dead"))return"pass"}return null}function C(){if(!o)return"";if(o.type==="deliver")return a===0?"Pick up the package":"Deliver the package";if(o.type==="race")return`Checkpoint ${a+1}/${o.points.length}`;if(o.type==="collect")return`Cash bags ${m}/${r.length}`;if(!p)return o.type==="boss"?"Go to Emerald's compound":"Go to the gang hangout";let M=h.filter(S=>S.state!=="dead").length;return o.type==="boss"?u.state==="dead"?"Emerald is down":`Kill Emerald (${M-(u.state==="dead"?0:1)} guards left)`:`Enemies left: ${M}`}function _(M){if(M=M||{x:0,z:0},!o)return null;if(o.type==="deliver"||o.type==="race")return o.points[a]||null;if(o.type==="collect"){let b=null,E=1/0;for(let H of r){if(H.userData.got)continue;let V=Math.hypot(H.position.x-M.x,H.position.z-M.z);V<E&&(E=V,b=H.userData.p)}return b}if(!p)return o.points[0];let S=h.find(b=>b.state!=="dead"&&(o.type!=="boss"||b===u))||h.find(b=>b.state!=="dead");return S?{x:S.x,z:S.z}:null}return{start:f,stop:v,update:T,objective:C,target:_,get mission(){return o},get active(){return!!o},get timeLeft(){return o&&o.timeLimit?Math.max(0,c):null},get boss(){return u}}}var{CAR_DEFS:Ei,buildCar:kc,effectiveStats:TS,applyCarSkin:Ca,applyBuildVisual:Rg}=td,j=n=>document.getElementById(n),Sn,Lt,Gt,kt,tn=null,Tn=null,nn=null,le=null,Mt=null,De=null,fi=null,Wd=null,Bt=null,Se=null,sn="boot",Un=!1,Zn=!1,$c="menu",Ke={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},Us=null,ut=null,jd=null,eh=null,Ns=!1,Gc="menu",Ta=.6,Dt=null,To=!1,mr=null,Hs=null,Vn=null,Yn=null,Xd=null,Os=100,bi=!1,qd=0,Vc=0,Is={x:0,z:0,alive:!0,hidden:!1,inCar:!0},Zt=null,Qd=!1,zc=0,AS={sport:{cyl:6,red:7200},muscle:{cyl:8,red:6200,idle:750},super:{cyl:10,red:8500},suv:{cyl:6,red:6e3},truck:{cyl:8,red:5600,idle:700},track:{cyl:4,red:8800,idle:1100},sedan:{cyl:4,red:6500},taxi:{cyl:4,red:6200},van:{cyl:6,red:5500,idle:700},police:{cyl:8,red:6600,idle:800},hyper:{cyl:12,red:9e3,idle:1e3}};function Cg(){le&&le.box&&(le.box.mode=Se.manual?"manual":"auto");let n=Se.manual?"\u2699\uFE0F GEARBOX: MANUAL":"\u2699\uFE0F GEARBOX: AUTO";for(let t of["m-trans","p-trans"]){let i=j(t);i&&(i.textContent=n)}let e=j("gear-btns");e&&e.classList.toggle("hidden",!Se.manual)}var Hi=null,pg=null,Pg=new Map,Bd=new k,th=ha(),ii=null,zi=null,Ig=null,So=0,gr=null,Da=null,Kc=null,wi=null,Wc=null,Zd=0,Yd=1,qn=null,ft=!1,Te=null,rt=null,Pa=null,zs=null,ef=null,Xc=null,xr=!1,Ni=0,Ia=0,pr=null,Ls=null,mg="",vn={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},Fc={x:0,z:0},jt=new k,Xn=new k,Dn=new k,wo={x:0,z:0},Aa={x:0,z:0,hitX:!1,hitZ:!1},Jt={name:"",mode:"car",x:0,z:0,h:0,speed:0,car:"sport",look:null,px:0,pz:0,ph:0,b:-1,w:null},Si=null,Bc={def:null,stats:null,group:null},yr=[],$d=[],Kd=[],Fi=62,qc=0,gg=0;function Et(n,e=2200){let t=j("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(gg),gg=setTimeout(()=>t.classList.add("hidden"),e)}function Bi(){let n=Se.cash.toLocaleString();j("cash-val").textContent=n,j("garage-cash").textContent=n}function Fs(n){Se.cash=Math.max(0,Se.cash+Math.round(n)),hn(Se),Bi()}function tf(){Tn=Hi?Hi.def:Ei.find(e=>e.id===Se.currentCar)||Ei[0],tn&&Lt.remove(tn),tn=kc(Tn),Hi?Ca(tn,Hi.color,null):Ca(tn,Se.paint[Tn.id],ar(Se,Tn.id)),Lt.add(tn),Si=null;let n=Hi?Cs({}):Lg(Tn.id);nn=rs(Tn,n),Rg(tn,{rideHeight:nn.rideHeight,tireScale:nn.tireScale,offset:nn.offset,slicks:n.tires==="slicks",adder:n.adder,body:n.body}),La=null,De&&De.setEngine&&De.setEngine(nn.engine||AS[Tn.id]||{cyl:6}),yr=(tn.userData.wheels||[]).slice(),$d=yr.filter(e=>e.position.z<0),Kd=tn.userData.brakeMats||[],j("menu-car-name").textContent=Tn.name}function Lg(n){return Se.build||(Se.build={}),Se.parts||(Se.parts={}),Se.build[n]||(Se.build[n]=Z0(Se.upgrades&&Se.upgrades[n])),Se.build[n]=Cs(Se.build[n]),Se.build[n]}var La=null;function RS(){return La==null&&(La=Sa(nn).et||14),La}function CS(){let n=Lg(Tn.id);nn=rs(Tn,n),le.stats=nn,le.box.shiftTime=nn.shiftTime||.2,Rg(tn,{rideHeight:nn.rideHeight,tireScale:nn.tireScale,offset:nn.offset,slicks:n.tires==="slicks",adder:n.adder,body:n.body}),La=null}function Ao(){let n=le.heading;Dn.set(-Math.sin(n),0,-Math.cos(n)),jt.set(le.pos.x-Dn.x*9,4,le.pos.z-Dn.z*9),Gt.position.copy(jt)}function nf(){let n=kt.spawn;le.pos.x=n.x,le.pos.z=n.z,le.heading=n.heading||0,th=ha(),Ao(),vr(0)}function Ds(){let n=le.pos.x,e=le.pos.z,t=le.heading;tf(),le.reset(nn),le.pos.x=n,le.pos.z=e,le.heading=t,vr(0)}var Oi=new k;function vr(n){tn.position.set(le.pos.x,0,le.pos.z),tn.rotation.y=le.heading;let e=tn.userData.flashers;if(e){let s=(performance.now()/170|0)%2;e[0].emissiveIntensity=s?4:.25,e[1].emissiveIntensity=s?.25:4}let t=Ke.speed*n*2.4;for(let s=0;s<yr.length;s++)yr[s].rotation.x+=t;for(let s=0;s<$d.length;s++)$d[s].rotation.y=Ke.steer*.45;let i=Mt&&Mt.input.throttle<0;if(tn.userData.setBrake)tn.userData.setBrake(i);else for(let s=0;s<Kd.length;s++)Kd[s].emissiveIntensity=i?4.5:1.8;if(wi){let s=le.heading;Oi.set(-Math.sin(s),0,-Math.cos(s)),wi.position.set(le.pos.x+Oi.x*1.8,1.1,le.pos.z+Oi.z*1.8),Wc.position.set(le.pos.x+Oi.x*22,.4,le.pos.z+Oi.z*22)}}var Ra=new k;function PS(n,e){let t=yr[n];return e.setFromMatrixPosition(t.matrixWorld),e}var kd=0;function IS(n){if(!gr||sn!=="freeroam"||Un||Zn)return;tn.updateMatrixWorld();let e=yr.length;if((Ke.drifting||Ke.spinning||Ke.surface==="mud"&&Math.abs(Ke.speed)>3)&&Yd>.3)for(let i=0;i<e;i++)yr[i].position.z<0||(PS(i,Ra),Math.random()<.85*Yd&&gr.emit(Ra.x+(Math.random()-.5)*.4,.35,Ra.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&Kc.add(Ra.x,Ra.z,le.heading));if(kd+=n,(Mt&&Mt.input.throttle||0)>.4&&kd>.09){kd=0;let i=le.heading;Oi.set(-Math.sin(i),0,-Math.cos(i));let s=Math.cos(i),r=-Math.sin(i);for(let o of[-.45,.45]){let a=le.pos.x-Oi.x*2.2+s*o,l=le.pos.z-Oi.z*2.2+r*o;Da.emit(a,.32,l,{vx:-Oi.x*2,vy:.8,vz:-Oi.z*2,life:.5,size:.55,grow:1.6})}}gr.update(n),Da.update(n)}function LS(n,e){let t=sf(n,e,1.15);if(Yn&&!ut&&Yn.collide(t,1.15)&&le){let s=Math.hypot(le.vel.x,le.vel.z);le.vel.x*=.55,le.vel.z*=.55,s>8&&De&&De.beep(90,.08)}return t}function sf(n,e,t){let i=n,s=e,r=!1,o=!1,a=jd||kt.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(i+t<c.minX||i-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(i,c.maxX)),u=Math.max(c.minZ,Math.min(s,c.maxZ)),p=i-h,m=s-u,g=p*p+m*m;if(!(g>=t*t))if(g>1e-8){let x=Math.sqrt(g),d=(t-x)/x,f=p*d,v=m*d;i+=f,s+=v,Math.abs(f)>Math.abs(v)?r=!0:o=!0}else{let x=i-c.minX,d=c.maxX-i,f=s-c.minZ,v=c.maxZ-s,y=Math.min(x,d,f,v);y===x?(i=c.minX-t,r=!0):y===d?(i=c.maxX+t,r=!0):y===f?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return Aa.x=i,Aa.z=s,Aa.hitX=r,Aa.hitZ=o,Aa}function rf(n,e,t){let i=sf(n,e,t);if(ut)return i;Yn&&Yn.collide(i,t);let s=le.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=le.pos.x+r*a,c=le.pos.z+o*a,h=1+t,u=i.x-l,p=i.z-c,m=Math.hypot(u,p);m<h&&m>1e-6&&(i.x=l+u/m*h,i.z=c+p/m*h)}return i}function as(){if(!rt)return;Mi(rt,zg()),pa(rt,wn().equipped);let n=wn().equipped&&ss(wn().equipped);j("weapon-name").textContent=n?n.name.toUpperCase():"UNARMED";let e=j("weapon-ammo");e.textContent=n?String(wn().ammo[n.id]|0):wn().weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!n)}function of(){for(let n of["speedo","gear-hud","nitro-bar"])j(n).classList.toggle("hidden",ft);j("weapon-hud").classList.toggle("hidden",!ft)}function af(){if(Math.abs(Ke.speed)>4){Et("Slow down to get out");return}let n=gd(le.pos.x,le.pos.z,le.heading),e=rf(n.x,n.z,.45);Te.reset(e.x,e.z,le.heading),le.vel.x=0,le.vel.z=0,le.speed=0,Ke.speed=0,Ke.drifting=!1,Ke.nitro=!1,Ke.steer=0,th=ha(),ft=!0,rt.visible=!0,rt.position.set(Te.pos.x,0,Te.pos.z),as(),Mt.setMode("foot"),of(),De.engine(0,0),De.skid(!1),De.beep(420,.06)}function lf(){ft&&(ft=!1,rt.visible=!1,Ni=0,Mt&&Mt.setMode("drive"),of(),th=ha(),De&&De.beep(520,.06),Ia&&(hn(Se),Ia=0))}function DS(n){let e=Te.heading,t=Te.pos.x,i=Te.pos.z;Dn.set(-Math.sin(e),0,-Math.cos(e));let s=Ni>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;if(Xn.set(t-Dn.x*r+a*c,o,i-Dn.z*r+l*c),ut){let u=ut.room.bounds,p=.45;Xn.x=Math.max(u.minX+p,Math.min(u.maxX-p,Xn.x)),Xn.z=Math.max(u.minZ+p,Math.min(u.maxZ-p,Xn.z)),Xn.y=Math.min(Xn.y,3.9)}let h=1-Math.exp(-n*7);jt.x+=(Xn.x-jt.x)*h,jt.y+=(Xn.y-jt.y)*h,jt.z+=(Xn.z-jt.z)*h,Gt.position.copy(jt),Gt.lookAt(t+Dn.x*5+a*c,1.45,i+Dn.z*5+l*c),Math.abs(60-Fi)>.25&&(Fi+=(60-Fi)*Math.min(1,n*4),Gt.fov=Fi,Gt.updateProjectionMatrix())}function US(n){let e=j("crosshair");if(!(Mt.input.aim&&!!wn().equipped&&!bi)){pg=null,vn.lock=null,e.classList.add("hidden");return}let i=ss(wn().equipped),s=i?i.range:60,r=null,o=1/0,a=(l,c)=>{let h=l.x-Te.pos.x,u=l.z-Te.pos.z,p=Math.hypot(h,u);if(p>s||p<.8)return;let m=Math.atan2(-h,-u),g=Math.abs(Math.atan2(Math.sin(m-Te.heading),Math.cos(m-Te.heading)));if(g>.75)return;let x=g*2+p/80-c;x<o&&(o=x,r=l)};for(let l of Vn.hitList)a(l,l.ref.kind==="enemy"?.6:0);for(let l of Jc)a(l,.5);if(!ut)for(let l of Xd)l.ref.car.empty||a(l,-.1);if(pg=r,e.classList.remove("hidden"),r){let l=Math.atan2(-(r.x-Te.pos.x),-(r.z-Te.pos.z));Te.heading+=Math.atan2(Math.sin(l-Te.heading),Math.cos(l-Te.heading))*Math.min(1,n*12),vn.lock={x:r.x,z:r.z},Bd.set(r.x,1.3,r.z).project(Gt),e.style.left=((Bd.x+1)/2*100).toFixed(2)+"%",e.style.top=((1-Bd.y)/2*100).toFixed(2)+"%",e.classList.add("lock")}else vn.lock=null,e.style.left="50%",e.style.top="45%",e.classList.remove("lock");Ni=Math.max(Ni,.25)}function NS(n){if(Te.update(Mt.input,n,rf),rt.position.x=Te.pos.x,rt.position.z=Te.pos.z,rt.rotation.y=Te.heading,Mt.consumeCycle()){let i=md(wn());hn(Se),as(),wn().weapons.length?Et(i?ss(i).name:"Holstered",1200):Et("No guns yet \u2014 visit LOCK & LOAD",1600)}US(n),vn.pos.x=Te.pos.x,vn.pos.z=Te.pos.z,vn.heading=Te.heading;let e=Mt.consumeFireEdge();e&&!wn().equipped&&wn().weapons.length&&(md(wn()),as()),Pa.update(n,vn,Mt.input.fire,e).fired&&(Vn&&!ut&&Vn.scare(Te.pos.x,Te.pos.z,45),_c(rt),Ni=.9,Ia++,j("weapon-ammo").textContent=String(wn().ammo[wn().equipped]|0)),Mt.input.fire&&wn().equipped&&(Ni=Math.max(Ni,.3)),Ni=Math.max(0,Ni-n),Ts(rt,Te.phase,Te.speed,Ni>0&&!!wn().equipped,n),DS(n),Ia&&qc%120===0&&(hn(Se),Ia=0)}function yn(n,e,t){if(pr=n,Ls=e,t!==mg){mg=t;let i=j("btn-action");i.textContent=t||"",i.classList.toggle("hidden",!t)}}function HS(n,e){let t=null,i=1.5;for(let s of kt.buildings){if(lo(n,e,s.door.x+s.door.nx*.5,s.door.z+s.door.nz*.5)<2.2)return s;let o=Math.max(s.minX,Math.min(n,s.maxX)),a=Math.max(s.minZ,Math.min(e,s.maxZ)),l=Math.hypot(n-o,e-a);l<i&&(i=l,t=s)}return t}function nh(){let n=Te.heading;if(Dn.set(-Math.sin(n),0,-Math.cos(n)),jt.set(Te.pos.x-Dn.x*4.6,2.6,Te.pos.z-Dn.z*4.6),ut){let e=ut.room.bounds,t=.45;jt.x=Math.max(e.minX+t,Math.min(e.maxX-t,jt.x)),jt.z=Math.max(e.minZ+t,Math.min(e.maxZ-t,jt.z))}Gt.position.copy(jt)}function Dg(n){let e=Yn.remove(n);e&&(e.alive&&(Vn.eject(e.x-Math.cos(e.h)*1.8,e.z+Math.sin(e.h)*1.8,Te.pos.x,Te.pos.z),Vn.scare(e.x,e.z,25)),Hi={def:e.def,color:e.color},tf(),le.reset(nn),le.pos.x=e.x,le.pos.z=e.z,le.heading=e.h,vr(0),Si=null,lf(),Ao(),De.beep(300,.08),Et("\u{1F697} Stolen: "+e.def.name+(e.alive?" \u2014 the driver ran off":""),2400))}function Ug(n){let e=Us.get(N0(n.id)),t=lo(Te.pos.x,Te.pos.z,n.door.x,n.door.z)<2.6,i,s,r,o;if(t)r=n.door.nx,o=n.door.nz,i=n.door.x+r*1.4,s=n.door.z+o*1.4;else{let l=Math.max(n.minX,Math.min(Te.pos.x,n.maxX)),c=Math.max(n.minZ,Math.min(Te.pos.z,n.maxZ)),h=Te.pos.x-l,u=Te.pos.z-c,p=Math.hypot(h,u)||1;r=h/p,o=u/p,i=l+r*1.4,s=c+o*1.4}ut={b:n,room:e,back:{x:i,z:s,heading:Math.atan2(-r,-o)}};let a=Pg.get(n.id);if(a===void 0||performance.now()-a>480*1e3){let l=1+Math.floor(Math.random()*3),c=Us.lootSpots(e,l+1),h=c.slice(0,l).map(u=>({x:u.x,z:u.z,kind:"cash",amount:50+Math.floor(Math.random()*450)}));Math.random()<.12&&c[l]&&h.push({x:c[l].x,z:c[l].z,kind:"safe",amount:2e3+Math.floor(Math.random()*3e3)}),Us.spawnLoot(e,h)}else Us.clearLoot();jd=e.colliders,vn.colliders=e.colliders,vn.targets=[],Te.reset(e.spawn.x,e.spawn.z,e.spawn.heading),rt.position.set(Te.pos.x,0,Te.pos.z),nh(),yn(null,null,""),De.beep(640,.07),Et("\u{1F3E2} Inside: "+U0[e.style]+" \u2014 EXIT pad is behind you",2200)}function ih(){if(!ut)return;let n=ut.back;ut&&Pg.set(ut.b.id,performance.now()),Us.clearLoot(),ut=null,jd=null,vn.colliders=kt.colliders,vn.targets=zs.targets;let e=rf(n.x,n.z,.45);Te.reset(e.x,e.z,n.heading),rt.position.set(Te.pos.x,0,Te.pos.z),nh(),yn(null,null,""),De.beep(520,.07)}function xg(){if(ft){if(ut){let s=Us.grab(Te.pos.x,Te.pos.z);s&&(Fs(s.amount),De.beep(1300,.06),Et((s.kind==="safe"?"\u{1F513} Cracked a safe! +$":"\u{1F4B5} Found cash +$")+s.amount.toLocaleString(),1800));let r=lo(Te.pos.x,Te.pos.z,ut.room.exit.x,ut.room.exit.z);if(r<.8){ih();return}return r<2.4?yn("exit",null,"\u{1F6AA} EXIT BUILDING"):yn(null,null,"")}let n=null,e=2.4;for(let s of zs.stores){let r=lo(Te.pos.x,Te.pos.z,s.door.x,s.door.z);r<e&&(e=r,n=s)}if(n)return yn("shop",n,(n.type==="garage"?"\u{1F527} ":n.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+n.name);if(lo(Te.pos.x,Te.pos.z,le.pos.x,le.pos.z)<4.2)return yn("in",null,"\u{1F697} GET IN");let t=Yn&&Yn.nearestCar(Te.pos.x,Te.pos.z,3.6);if(t)return yn("steal",t,"\u{1F697} STEAL CAR");let i=HS(Te.pos.x,Te.pos.z);return i?yn("enter",i,"\u{1F3E2} ENTER BUILDING"):yn(null,null,"")}if(Math.abs(Ke.speed)<4)return yn("out",null,"\u{1F6AA} GET OUT");yn(null,null,"")}function yg(){pr==="out"?af():pr==="in"?lf():pr==="enter"&&Ls?Ug(Ls):pr==="steal"&&Ls?Dg(Ls):pr==="exit"?ih():pr==="shop"&&Ls&&(Ls.type==="garage"?Qc("play"):OS(Ls))}function OS(n){xr=!0,yn(null,null,""),De.beep(700,.06),ef.open(n)}function Ng(){xr=!1,ef.close(),as(),Bi()}var An="single",zS="city-driver-tdm",Zc=25,Hg={red:14100029,blue:2060267},Ze={team:null,score:{red:0,blue:0},over:0,lastAttacker:null,kills:0,deaths:0},Og={weapons:["ak","glock","shotgun","sniper"],ammo:{ak:9999,glock:9999,shotgun:9999,sniper:9999},equipped:"ak"},Jc=[];function wn(){return vn.save||Se}function zg(){return An==="tdm"&&Ze.team?Object.assign({},Se.outfit,{shirt:Hg[Ze.team]}):Se.outfit}function Gd(n){An=n,Bt.connect(n==="single"?null:n==="tdm"?zS:void 0),Vn.clearEnemies(),Vn.setCount(n==="tdm"?0:14),vn.save=n==="tdm"?Og:Se,j("tdm-hud").classList.toggle("hidden",n!=="tdm"),Yc(),n==="tdm"?(Dt.active&&(Dt.stop(),j("objective").classList.add("hidden")),Ze.score.red=Ze.score.blue=0,Ze.kills=Ze.deaths=0,Ze.over=0,Ze.team=null,setTimeout(()=>{An==="tdm"&&(FS(),cf())},1600),Et("\u2694\uFE0F TEAM DEATHMATCH \u2014 first team to "+Zc+" kills wins",3e3)):(rt&&Mi(rt,Se.outfit),Et(n==="single"?"\u{1F9CD} Single player \u2014 the city is all yours":"\u{1F310} Online free roam \u2014 "+Bt.count+" in the city",2600))}function FS(){let n=0,e=0;Bt.each(t=>{t.team==="red"?n++:t.team==="blue"&&e++}),Ze.team=n<e?"red":e<n?"blue":Math.random()<.5?"red":"blue",Mi(rt,zg()),Si=null,sh(),Et("You are on "+Ze.team.toUpperCase()+" team",2200)}function Fg(n){return n==="red"?{x:-176,z:3,heading:-Math.PI/2}:{x:176,z:-3,heading:Math.PI/2}}function cf(){Ua();let n=Fg(Ze.team||"red");le.pos.x=n.x+(Math.random()-.5)*6,le.pos.z=n.z+(Math.random()-.5)*20,le.heading=n.heading,le.vel.x=le.vel.z=0,Ke.speed=0,vr(0),Ao(),af(),Og.equipped="ak",as()}function sh(){j("tdm-red").textContent=Ze.score.red,j("tdm-blue").textContent=Ze.score.blue;let n=j("tdm-you");n.textContent=Ze.team?"YOU: "+Ze.team.toUpperCase()+" \xB7 "+Ze.kills+"K / "+Ze.deaths+"D":"joining\u2026",n.className=Ze.team||""}function Bg(n){if(!n||!n.kt||!(n.kt in Ze.score))return;Ze.score[n.kt]++,n.k===Bt.myId&&(Ze.kills++,Fs(150));let e=j("killfeed"),t=document.createElement("div");for(t.innerHTML=`<b class="${n.kt}">${vg(n.kn||"?")}</b> \u2620 <b class="${n.kt==="red"?"blue":"red"}">${vg(n.vn||"?")}</b>`,e.prepend(t);e.children.length>4;)e.lastChild.remove();if(setTimeout(()=>t.remove(),6e3),sh(),!Ze.over&&(Ze.score.red>=Zc||Ze.score.blue>=Zc)){let i=Ze.score.red>=Zc?"red":"blue";Ze.over=8,j("tdm-win").textContent=(i===Ze.team?"\u{1F3C6} ":"")+i.toUpperCase()+" TEAM WINS!",j("tdm-win").className=i,i===Ze.team&&(Fs(2500),Et("+$2,500 for the win!",2500))}}var vg=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function _g(n,e,t,i){An!=="tdm"||!Ze.team||(Bt.send("hit",{t:n.id,d:e,tm:Ze.team,n:Se.name}),Hs.hit(n.x,1.25,n.z,t,i,1))}function Mg(){if(Zt&&Zt.active&&Gg("you got wasted"),An!=="tdm")return;Ze.deaths++;let n=Ze.lastAttacker,e={k:n?n.id:null,kn:n?n.name:"the street",kt:n?n.team:null,v:Bt.myId,vn:Se.name};n&&(Bt.send("kill",e),Bg(e)),sh()}function Eg(){return An==="tdm"?Fg(Ze.team||"red"):{x:sc.x,z:sc.z,heading:sc.heading}}function BS(){if(Jc.length=0,An!=="tdm"||!Ze.team)return;let n=ut?ut.b.id:-1;Bt.each(e=>{if(e.team===Ze.team||e.dead||e.b!==n||!e.placed)return;let t={kind:"player",id:e.id,name:e.name,team:e.team,x:e.x,z:e.z};Jc.push({x:e.x,z:e.z,r:e.mode==="car"?1.5:.5,ref:t})})}function kg(){return Math.min(Gn,(Se.missionsDone|0)+1)}function kS(){if(An==="tdm"){Et("Missions are in Single Player / Online Free Roam");return}Qd=!0,yn(null,null,"");let n=Se.missionsDone|0,e=Zt.active,t=e?Zt.mission:Ud(kg());j("mb-num").textContent=n>=Gn?"ALL 500 COMPLETE":"MISSION "+t.n+" / "+Gn,j("mb-title").textContent=t.type==="boss"?"\u{1F451} FINAL BOSS: EMERALD":t.title,j("mb-desc").textContent=n>=Gn?"You beat Emerald and took her millions. Replay any time \u2014 missions keep paying.":t.desc,j("mb-reward").textContent="$"+t.reward.toLocaleString()+(t.timeLimit?" \xB7 \u23F1 "+t.timeLimit+"s":""),j("mb-progress").style.width=(n/Gn*100).toFixed(1)+"%",j("mb-left").textContent=n>=Gn?"Emerald defeated \u{1F480}":Gn-1-Math.min(n,Gn-1)+" missions until Emerald",j("mb-start").textContent=e?"\u2716 ABANDON MISSION":"\u25B6 START",j("mission-board").classList.remove("hidden")}function jc(){Qd=!1,j("mission-board").classList.add("hidden")}function GS(){if(Zt.active){Zt.stop(),j("mission-hud").classList.add("hidden"),j("boss-hud").classList.add("hidden"),jc(),Et("Mission abandoned");return}Dt&&Dt.active&&(Dt.stop(),j("objective").classList.add("hidden"));let n=(Se.missionsDone|0)>=Gn?1+Math.floor(Math.random()*(Gn-1)):kg(),e=Zt.start(n);jc(),j("mission-hud").classList.remove("hidden"),j("mh-title").textContent="#"+e.n+" "+(e.type==="boss"?"EMERALD":e.title.toUpperCase()),De.beep(700,.08),Et("\u{1F4F1} "+e.title+" \u2014 "+e.desc,3500)}function VS(){let n=Zt.mission;Zt.stop(),j("mission-hud").classList.add("hidden"),j("boss-hud").classList.add("hidden"),n.n>(Se.missionsDone|0)&&(Se.missionsDone=n.n),Fs(n.reward),hn(Se),De.beep(880,.1),setTimeout(()=>De.beep(1320,.15),130),n.type==="boss"?(j("victory").classList.remove("hidden"),j("victory-cash").textContent="+$"+Dd.toLocaleString()):Et("\u2705 MISSION PASSED  +$"+n.reward.toLocaleString(),3e3)}function Gg(n){Zt.stop(),j("mission-hud").classList.add("hidden"),j("boss-hud").classList.add("hidden"),De.beep(200,.2),Et("\u274C MISSION FAILED \u2014 "+n+". Try again from \u{1F4F1}",3200)}function WS(){let n=ft?Te.pos.x:le.pos.x,e=ft?Te.pos.z:le.pos.z,t=ft?Te.heading:le.heading;j("mh-obj").textContent=Zt.objective();let i=Zt.timeLeft;j("mh-time").textContent=i!=null?"\u23F1 "+Math.ceil(i)+"s":"",j("mh-time").classList.toggle("low",i!=null&&i<10);let s=Zt.target({x:n,z:e}),r=j("mh-arrow");if(s&&!ut){let a=Math.atan2(-(s.x-n),-(s.z-e)),l=Math.atan2(Math.sin(a-t),Math.cos(a-t));r.style.transform="rotate("+(-l).toFixed(3)+"rad)",r.classList.remove("hidden"),j("mh-dist").textContent=Math.round(Math.hypot(s.x-n,s.z-e))+" m"}else r.classList.add("hidden"),j("mh-dist").textContent="";let o=Zt.boss;o&&o.state!=="dead"?(j("boss-hud").classList.remove("hidden"),j("boss-fill").style.width=Math.max(0,o.hp/o.maxHp*100)+"%"):j("boss-hud").classList.add("hidden")}function hf(){let n=j("hp-fill");n&&(n.style.width=Math.max(0,Os)+"%",n.style.background=Os>50?"#4ade80":Os>25?"#fbbf24":"#ef4444")}function Vd(n){bi||sn!=="freeroam"||(Os-=ft?n:n*.5,Vc=.35,hf(),De&&De.beep(160,.05),Os<=0&&XS())}function XS(){if(bi=!0,qd=0,Os=0,hf(),yn(null,null,""),j("wasted").classList.remove("hidden"),ft&&rt&&(rt.rotation.x=-Math.PI/2+.05,rt.position.y=.12),Hs){let n=ft?Te.pos.x:le.pos.x,e=ft?Te.pos.z:le.pos.z;Hs.pool(n,e,2.6)}typeof Mg=="function"&&Mg()}function qS(){bi=!1,Os=100,hf(),j("wasted").classList.add("hidden"),rt&&(rt.rotation.x=0,rt.position.y=0);let n=An==="tdm"?0:Math.min(500,Math.round(Se.cash*.05));if(n>0&&(Se.cash-=n,hn(Se),Bi()),Ua(),typeof Eg=="function"){let e=Eg();le.pos.x=e.x,le.pos.z=e.z,le.heading=e.heading,le.vel.x=le.vel.z=0,Ao(),vr(0)}else nf();if(An==="tdm"){Ze.lastAttacker=null,cf();return}Et(n>0?"\u{1F3E5} Hospital bill: -$"+n:"\u{1F3E5} Back on your feet",2200)}function ZS(n){let e=le.heading,t=le.pos.x,i=le.pos.z;Dn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(Ke.speed),r=8.5+s*.045,o=3.6+s*.014;Xn.set(t-Dn.x*r,o,i-Dn.z*r);let a=1-Math.exp(-n*5.5);jt.x+=(Xn.x-jt.x)*a,jt.y+=(Xn.y-jt.y)*a,jt.z+=(Xn.z-jt.z)*a,Gt.position.copy(jt),Gt.lookAt(t+Dn.x*5,1.7,i+Dn.z*5);let l=62+Math.min(14,s*.22)+(Ke.nitro?6:0);Math.abs(l-Fi)>.25&&(Fi+=(l-Fi)*Math.min(1,n*4),Gt.fov=Fi,Gt.updateProjectionMatrix())}function YS(){let n=Math.abs(Ke.speed)*2.2;j("speed-val").textContent=Math.round(n),j("gear-hud").textContent=(Ke.reverse?"R":n<1&&!Se.manual?"N":String(Ke.gear||1))+(Se.manual?" M":"");let e=j("tach-fill");e&&(e.style.width=(Math.min(1,Ke.rpm||0)*100).toFixed(1)+"%",e.classList.toggle("red",(Ke.rpm||0)>.9)),j("nitro-fill").style.width=(Math.max(0,Math.min(1,Ke.nitroFrac))*100).toFixed(1)+"%";let t=j("boost-hud");if(t){let s=!!nn.boostKind;t.classList.toggle("hidden",!s),s&&(j("boost-val").textContent=(Ke.psi||0).toFixed(1),j("boost-fill").style.width=(Math.min(1,Ke.boost||0)*100).toFixed(0)+"%")}let i=j("surface-hud");if(i){let s=Ke.surface||"road";i.textContent=s==="road"?"":(s==="mud"?"\u{1F7E4} MUD":s==="dirt"?"\u{1F7EB} DIRT":"\u{1F7E9} GRASS")+(Ke.spinning?" \xB7 WHEELSPIN":""),i.classList.toggle("hidden",s==="road"&&!Ke.spinning),s==="road"&&Ke.spinning&&(i.textContent="\u{1F4A8} WHEELSPIN")}}function Bs(){for(let n of["main-menu","pause-menu","garage"])j(n).classList.add("hidden")}function $S(){return Ns||To}function Ua(){xr&&Ng(),ut&&ih(),ft&&lf(),yn(null,null,"")}function rh(){sn="menu",Un=!1,Zn=!1,fi&&fi.active&&fi.exit(),Ua(),Mt&&(Mt.setMode("drive"),Mt.detach()),Bs(),j("main-menu").classList.remove("hidden"),j("hud").classList.add("hidden"),j("touch-controls").classList.add("hidden"),j("drag-ui").classList.add("hidden"),Dt&&Dt.active&&Dt.stop(),j("objective").classList.add("hidden"),Zt&&Zt.active&&Zt.stop(),j("mission-hud").classList.add("hidden"),j("boss-hud").classList.add("hidden"),jc(),j("m-tutorial").classList.toggle("hidden",!!Se.tutorialDone),Bt&&An!=="online"&&(An="online",Bt.connect(void 0)),vn.save=Se,j("tdm-hud").classList.add("hidden"),j("tdm-win").classList.add("hidden"),Ze.over=0,rt&&Mi(rt,Se.outfit),Si=null,De.engine(0,0),De.skid(!1)}function Yc(){fi&&fi.active&&fi.exit(),Ua(),wi&&(wi.intensity=Zd),j("drag-ui").classList.add("hidden"),sn="freeroam",Un=!1,Zn=!1,Bs(),j("hud").classList.remove("hidden"),j("touch-controls").classList.remove("hidden"),Mt.attach(),Mt.setMode("drive"),nf(),Bi(),!Se.tutorialDone&&!Se.tutorialSkipped?nw():Et("Free roam \u2014 drift for cash, walk into any building!")}function bg(){Ua(),sn="drag",Un=!1,Zn=!1,wi&&(wi.intensity=0),Bs(),j("hud").classList.add("hidden"),j("touch-controls").classList.remove("hidden"),Mt.attach(),Mt.setMode("drag"),j("drag-ui").classList.remove("hidden"),fi.enter()}function Sg(){sn!=="freeroam"&&sn!=="drag"||Zn||xr||$S()||(Un=!0,yn(null,null,""),Bs(),j("pause-menu").classList.remove("hidden"))}function KS(){Un=!1,Bs()}function Qc(n){$c=n,Zn=!0,Wd.refresh(),mr&&mr.refresh(),Bi(),Bs(),j("garage").classList.remove("hidden")}function JS(){Zn=!1,Bs(),j("hud").classList.toggle("hidden",sn!=="freeroam"),rt&&as(),$c==="menu"?rh():$c==="pause"?(Un=!0,j("pause-menu").classList.remove("hidden")):Un=!1,Bi()}var jS=!1;function Jd(n,e){Gc=n,Zn&&(Zn=!1),sn==="freeroam"&&(Un=!0),Ns=!0,Bs(),j("hud").classList.add("hidden"),j("touch-controls").classList.add("hidden"),yn(null,null,""),jS=rt.visible,Hi&&(Hi=null,Ds()),eh.open(e||"car")}function QS(n){if(!ft)if(n==="driver"){let e=gd(le.pos.x,le.pos.z,le.heading);rt.position.set(e.x,0,e.z),rt.rotation.y=le.heading,Ts(rt,0,0,!1,0),rt.visible=!0}else rt.visible=!1}function ew(){if(Ns=!1,eh.close(),rt.visible=ft,as(),Gc==="menu"){rh();return}if(Gc==="garage"){Qc($c);return}(sn==="freeroam"||sn==="drag")&&(j("hud").classList.toggle("hidden",sn!=="freeroam"),j("touch-controls").classList.remove("hidden"),Gc==="pause"?(Un=!0,j("pause-menu").classList.remove("hidden")):Un=!1,ft?nh():Ao())}function tw(n){Ta+=n*.35;let e=eh.tab==="driver",t=e?rt.position.x:le.pos.x,i=e?rt.position.z:le.pos.z,s=e?3.4:7.2,r=e?1.7:2.6,o=e?1.05:.75;Gt.position.set(t+Math.sin(Ta)*s,r,i+Math.cos(Ta)*s);let a=Math.cos(Ta),l=-Math.sin(Ta),c=e?.9:2.2;Gt.lookAt(t+a*c,o,i+l*c),Math.abs(55-Fi)>.25&&(Fi=55,Gt.fov=55,Gt.updateProjectionMatrix()),wo.x=t,wo.z=i,kt.update(n,wo)}function nw(){Dt&&(Dt.start(),j("objective").classList.remove("hidden"),Vg(),Et("\u{1F393} TUTORIAL \u2014 finish it for $"+bc.toLocaleString()+" + a free car!",3200))}function Vg(){if(!Dt.active){j("objective").classList.add("hidden");return}j("obj-step").textContent="STEP "+(Dt.step+1)+"/"+Dt.total,j("obj-text").textContent=Dt.text;let n=Dt.target(),e=ft?Te.pos.x:le.pos.x,t=ft?Te.pos.z:le.pos.z,i=ft?Te.heading:le.heading,s=j("obj-arrow"),r=j("obj-dist");if(n&&!ut){let o=Math.atan2(-(n.x-e),-(n.z-t)),a=Math.atan2(Math.sin(o-i),Math.cos(o-i));s.style.transform="rotate("+(-a).toFixed(3)+"rad)",s.classList.remove("hidden"),r.textContent=Math.round(Math.hypot(n.x-e,n.z-t))+" m"}else s.classList.add("hidden"),r.textContent=Dt.text.startsWith("DRIFT")?Math.round(Dt.driftProgress*100)+"%":""}function Wg(){Se.tutorialDone=!0,Fs(bc),hn(Se),j("objective").classList.add("hidden"),De.beep(880,.1),setTimeout(()=>De.beep(1175,.14),120),iw()}function iw(){To=!0,yn(null,null,"");let n={topSpeed:1,accel:1,handling:1,grip:1};for(let t of Ei)for(let i in n)n[i]=Math.max(n[i],t.stats[i]);let e=(t,i,s)=>`<div class="stat-row"><span>${t}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(i/s*100))}%"></i></div></div>`;j("pick-list").innerHTML=Ei.map(t=>`<div class="car-card"><div class="cinfo"><b>${t.name}</b><small>${t.desc} \xB7 worth $${t.price.toLocaleString()}</small><div class="stat-bars">${e("SPD",t.stats.topSpeed,n.topSpeed)}${e("ACC",t.stats.accel,n.accel)}${e("HDL",t.stats.handling,n.handling)}${e("GRP",t.stats.grip,n.grip)}</div></div><button class="buy-btn" data-id="${t.id}">PICK FREE</button></div>`).join(""),j("car-pick").classList.remove("hidden")}function Xg(n){Hi=null;let e=Ei.find(t=>t.id===n);e&&(Se.owned.includes(n)||Se.owned.push(n),Se.upgrades[n]||(Se.upgrades[n]={engine:0,turbo:0,tires:0,suspension:0,nitro:0}),typeof Se.paint[n]!="number"&&(Se.paint[n]=e.colors[0]),Se.currentCar=n,hn(Se),Ds(),j("car-pick").classList.add("hidden"),To=!1,Bi(),Et("\u{1F3C6} "+e.name+" is yours! +$"+bc.toLocaleString()+" in the bank",3200),De.beep(990,.1))}function wg(n,e){let t=j("mp-status");t.classList.remove("hidden"),t.className="mp-status "+n,t.textContent=n==="on"?"\u25CF online \xB7 "+e+(e===1?" player":" players"):n==="connecting"?"\u25CF connecting\u2026":"\u25CF offline";let i=j("online-hud");i.textContent=n==="on"?"\u{1F310} "+e+" online":"\u{1F310} \u2026",i.classList.toggle("dim",n!=="on")}function sw(){return Jt.name=Se.name,Jt.car=Tn.id,Si||(Si=m0(Se,Tn.id),An==="tdm"&&Ze.team&&(Si.o[0]=Hg[Ze.team])),Jt.team=An==="tdm"?Ze.team:null,Jt.dead=bi,Jt.look=Si,Jt.b=ut?ut.b.id:-1,ft?(Jt.mode="foot",Jt.x=Te.pos.x,Jt.z=Te.pos.z,Jt.h=Te.heading,Jt.speed=Te.speed,Jt.px=le.pos.x,Jt.pz=le.pos.z,Jt.ph=le.heading,Jt.w=wn().equipped||null):(Jt.mode="car",Jt.x=le.pos.x,Jt.z=le.pos.z,Jt.h=le.heading,Jt.speed=Ke.speed,Jt.w=null),Jt}async function rw(){Sn=new Yo({antialias:!1,powerPreference:"high-performance"}),Sn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Sn.setSize(qn.view.w,qn.view.h),Sn.toneMapping=ra,Sn.toneMappingExposure=1,Sn.shadowMap.enabled=!0,Sn.shadowMap.type=jl,j("game-container").appendChild(Sn.domElement),Lt=new Qr,Gt=new _n(62,qn.view.w/qn.view.h,.1,3e3),kt=Ym(Lt,T0),zs=R0(Lt,kt);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(ig(),ng)),t=new jr(Sn);Lt.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let n=a0();Lt.add(n.mesh),Ig={uniforms:n.uniforms,sun:kt.sun,hemi:kt.hemi,scene:Lt,renderer:Sn},qg("day",!0);try{ii=(await Promise.resolve().then(()=>(fg(),dg))).createPostFX(Sn,Lt,Gt),ii.setBloomStrength(hc.day.bloom)}catch(e){console.warn("postfx off",e),ii=null}zi=new cc("auto"),zi.onChange(Tg),Tg(zi.level,cd(zi.level)),gr=new ui(Lt,70,{color:14211288,opacity:.42}),Da=new ui(Lt,40,{color:7829367,opacity:.3,size:.9}),Kc=new uc(Lt,500),wi=new Yl(13624575,0,60,.5,.45,1.2),Wc=new Kt,Lt.add(Wc),wi.target=Wc,Lt.add(wi)}function Tg(n,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);Sn.setPixelRatio(t),ii&&(ii.setPixelRatio(Math.min(t,1)),ii.setSize(qn.view.w,qn.view.h),ii.setBloomEnabled(e.bloom));let i=e.shadows;(Sn.shadowMap.enabled!==i||kt&&kt.sun.castShadow!==i)&&(Sn.shadowMap.enabled=i,kt&&(kt.sun.castShadow=i),Lt.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),kt&&kt.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),Yd=e.particles,Kc&&Kc.setVisible(e.particles>.3)}function qg(n,e){let t=hd;typeof n=="string"&&(So=t.indexOf(n)),So<0&&(So=0);let i=t[So],s=l0(Ig,i),r=i==="day"?0:i==="sunset"?.45:1;kt&&kt.setGlow(r),ii&&ii.setBloomStrength(s.bloom),Zd=i==="day"?0:i==="sunset"?30:70,wi&&sn!=="drag"&&(wi.intensity=Zd);let o=j("tod-btn");o&&(o.textContent=i==="day"?"\u2600\uFE0F":i==="sunset"?"\u{1F307}":"\u{1F319}"),e||Et(s.label+" mode")}function ow(){So=(So+1)%hd.length,qg()}var Ag=performance.now();function Zg(n){requestAnimationFrame(Zg);let e=(n-Ag)/1e3;Ag=n,e>0||(e=.016),e>.1&&(e=.1),qc++;let t=sn==="freeroam"&&!Un&&!Zn&&!xr&&!Ns&&!To&&!bi&&!Qd;if(Ns)tw(e);else if(t&&ft)NS(e),kt.update(e,Te.pos),zs.update(e),Us.update(e,ut&&ut.room),gr.update(e),Da.update(e),zi&&zi.update(e),De.engine(0,0),De.skid(!1),Fc.x=le.pos.x,Fc.z=le.pos.z,ut?Xc.draw(ut.back.x,ut.back.z,Te.heading,Fc,Bt):Xc.draw(Te.pos.x,Te.pos.z,Te.heading,Fc,Bt),xg(),Mt.consumeAction()&&yg();else if(t){le.surf=km(Bm(le.pos.x,le.pos.z),nn.offroad,nn.snorkel),Ke=le.update(Mt.input,e,LS);let i=c0(th,Ke.drifting,Ke.speed,e);i>0&&(Fs(i),Et("DRIFT +$"+i.toLocaleString())),wo.x=le.pos.x,wo.z=le.pos.z,kt.update(e,wo),vr(e),ZS(e),YS(),IS(e),zs.update(e),Pa.update(e,vn,!1,!1),Xc.draw(le.pos.x,le.pos.z,le.heading,null,Bt),xg(),Mt.consumeAction()&&yg(),zi&&zi.update(e);let s=Math.min(1,Math.abs(Ke.speed)/(nn.topSpeed*1.15));De.engine(Ke.rpm,Math.max(0,Mt.input.throttle||0),Ke.shifting),De.turbo&&De.turbo(Ke.boost||0,nn.boostKind,(Mt.input.throttle||0)<.1),Ke.gear!==zc&&(zc&&De.shiftBlip(Ke.gear>zc),zc=Ke.gear),Se.manual?(Mt.consumeGearUp()&&le.box.shift(1),Mt.consumeGearDown()&&le.box.shift(-1)):(Mt.consumeGearUp(),Mt.consumeGearDown()),De.skid(Ke.drifting||Ke.spinning||Ke.surface==="mud"&&Math.abs(Ke.speed)>3)}else sn==="drag"&&!Un&&!Zn&&!Ns?fi.active&&fi.update(e):(De.engine(0,0),De.skid(!1),De.turbo&&!Zn&&De.turbo(0,null));if(sn==="freeroam"&&!Un&&!Zn&&!Ns&&(Is.x=ft?Te.pos.x:le.pos.x,Is.z=ft?Te.pos.z:le.pos.z,Is.alive=!bi,Is.hidden=!!ut,Is.inCar=!ft,!xr&&!To&&(Vn.update(e,Is),Yn.update(e,Is,ft?null:Is),Yn.hitList(),!ft&&!bi&&Vn.carHits(le.pos.x,le.pos.z,le.heading,Ke.speed)&&(De.beep(70,.12),le.vel.x*=.85,le.vel.z*=.85)),Hs.update(e),Vc>0&&(Vc-=e,j("hurt").style.opacity=String(Math.max(0,Vc/.35)*.75)),bi&&(qd+=e,qd>3.2&&qS())),t&&Zt&&Zt.active){let i=Zt.update(e,{pos:ft?Te.pos:le.pos,cam:Gt.position});i==="pass"?VS():i==="fail"&&Gg("out of time"),Zt.active&&qc%3===0&&WS()}if(t&&Dt&&Dt.active){let i=Dt.update(e,{pos:ft?Te.pos:le.pos,drifting:!ft&&Ke.drifting,speed:ft?0:Ke.speed,onFoot:ft,inside:ut?ut.b.id:-1});i==="next"?(De.beep(880,.08),Et("\u2705 Nice! Next: "+Dt.text,2200)):i==="done"&&Wg(),qc%3===0&&Vg()}BS(),Ze.over>0&&(Ze.over-=e,j("tdm-win").classList.remove("hidden"),Ze.over<=0&&(j("tdm-win").classList.add("hidden"),Ze.score.red=Ze.score.blue=0,sh(),An==="tdm"&&!bi&&cf())),Bt&&Bt.update(e,sn==="freeroam"?sw():null,n),gr&&(sn!=="freeroam"||Un||Zn||xr)&&(gr.update(e),Da.update(e)),ii?ii.render():Sn.render(Lt,Gt)}function aw(){j("m-freeroam").onclick=()=>{De.unlock(),qn.goLandscape(),De.beep(600,.06),Gd("single")},j("m-online").onclick=()=>{De.unlock(),qn.goLandscape(),De.beep(600,.06),Gd("online")},j("m-tdm").onclick=()=>{De.unlock(),qn.goLandscape(),De.beep(600,.06),Gd("tdm")},j("m-drag").onclick=()=>{De.unlock(),qn.goLandscape(),De.beep(600,.06),bg()},j("store-close").onclick=()=>{De.beep(500,.05),Ng()},j("m-garage").onclick=()=>{De.unlock(),Qc("menu")},j("p-resume").onclick=()=>{De.beep(600,.05),qn.goLandscape(),KS()},j("p-freeroam").onclick=()=>{De.beep(600,.05),Yc()},j("p-drag").onclick=()=>{De.beep(600,.05),bg()},j("p-garage").onclick=()=>Qc("pause"),j("p-quit").onclick=()=>rh(),j("menu-btn").onclick=Sg,j("garage-close").onclick=JS,j("drag-exit").onclick=()=>{fi.active&&fi.exit(),Yc()},j("m-editor").onclick=()=>{De.unlock(),De.beep(600,.05),Jd("menu","car")},j("p-editor").onclick=()=>{De.beep(600,.05),Jd("pause",ft?"driver":"car")},j("se-done").onclick=()=>{De.beep(500,.05),ew()},j("m-tutorial").onclick=()=>{De.unlock(),qn.goLandscape(),De.beep(600,.06),Se.tutorialSkipped=!1,hn(Se),Yc()},j("obj-skip").onclick=()=>{Dt.stop(),Se.tutorialSkipped=!0,hn(Se),j("objective").classList.add("hidden"),Et("Tutorial skipped \u2014 replay it from the main menu for $100K",2600)};let n=()=>{Se.manual=!Se.manual,hn(Se),Cg(),De.beep(600,.05),Et(Se.manual?"Manual: shift with \u25B2/\u25BC GEAR (G / B keys). Watch the rev bar!":"Automatic gearbox",2600)};j("m-trans").onclick=n,j("p-trans").onclick=n,j("mission-btn").onclick=()=>{De.beep(650,.05),kS()},j("mb-start").onclick=()=>GS(),j("mb-close").onclick=()=>{De.beep(500,.05),jc()},j("victory-ok").onclick=()=>{j("victory").classList.add("hidden")},j("pick-list").addEventListener("click",e=>{let t=e.target.closest("button[data-id]");t&&Xg(t.dataset.id)}),j("tod-btn")&&(j("tod-btn").onclick=()=>{De.beep(600,.05),ow()}),j("gfx-btn")&&(j("gfx-btn").onclick=()=>{De.beep(600,.05);let e=zi.cycleMode();j("gfx-btn").textContent=e==="auto"?"\u2728":e==="high"?"\u2728+":"\u2728\u2212",Et("Graphics: "+e.toUpperCase()+" ("+o0[zi.level]+")")}),window.addEventListener("pointerdown",()=>De.unlock()),window.addEventListener("keydown",()=>De.unlock()),document.addEventListener("contextmenu",e=>e.preventDefault()),document.addEventListener("gesturestart",e=>e.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(sn==="freeroam"||sn==="drag")&&!Un&&Sg()})}function lw(n,e){Sn&&(Gt.aspect=n/e,Gt.updateProjectionMatrix(),Sn.setSize(n,e),ii&&ii.setSize(n,e))}async function cw(){try{Se=p0(y0(s0())),De=e0(),qn=u0(lw),await rw(),Mt=$m({isRotated:()=>qn.rotated}),Te=new vc,rt=co(Se.outfit),rt.visible=!1,Lt.add(rt),Pa=P0(Lt),Object.assign(vn,{save:Se,colliders:kt.colliders,targets:zs.targets,audio:De,toast:Et,onTargetHit:()=>{Fs(pd),Et("TARGET +$"+pd,900)},onShot:n=>{Bt&&Bt.sendShots(n)}}),Us=H0(Lt),Hs=k0(Lt),Vn=G0({scene:Lt,blood:Hs,audio:De,count:14,collide:(n,e,t)=>sf(n,e,t),shoot:(n,e,t,i)=>Pa.remoteShot(n,e,t,i),onPlayerHit:n=>Vd(n)}),Yn=W0({scene:Lt,lines:kt.roadLines,buildCar:kc,applyCarSkin:Ca,CAR_DEFS:Ei}),Xd=Yn.hitList(),Zt=tg({scene:Lt,people:Vn,toast:Et,beep:(n,e)=>De.beep(n,e)}),vn.hitables=[Vn.hitList,Xd,Jc],vn.onPersonHit=(n,e,t,i)=>{if(n.kind==="ped"||n.kind==="enemy")Vn.damage(n,e,t,i);else if(n.kind==="car"){let s=Yn.hitCar(n.car,e,t,i);s&&(Hs.hit(s.x,s.y,s.z,t,i,s.kind==="killed"?1.6:.7),s.kind==="killed"&&(Hs.pool(s.x+t,s.z+i,1.4),Vn.scare(s.x,s.z,30)))}else typeof _g=="function"&&n.kind==="player"&&_g(n,e,t,i)},Dt=O0(Lt,kt),ef=I0({save:Se,persist:()=>hn(Se),toast:n=>Et(n,1600),beep:(n,e)=>De.beep(n,e),onChange:()=>{Bi(),as()}}),Xc=L0(j("minimap"),zs.stores),as(),of(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(n,e,t)=>{ft?(Te.reset(n,e,t||0),nh()):(le.pos.x=n,le.pos.z=e,le.heading=t||0,vr(0),Ao())},save:()=>Se,stores:()=>zs.stores,buildings:()=>kt.buildings,inside:()=>ut&&{id:ut.b.id,style:ut.room.style},enter:n=>Ug(n),exit:()=>ih(),getOut:()=>af(),tut:()=>Dt&&{active:Dt.active,step:Dt.step},finishTut:()=>Wg(),pick:n=>Xg(n),mp:()=>Bt&&{status:Bt.status,count:Bt.count},state:()=>({state:sn,onFoot:ft,editorOpen:Ns,pickOpen:To,cash:Se.cash}),steal:()=>{let n=Yn.cars[0];return Te.reset(n.x+2,n.z,0),Dg(n),Tn.name},physics:()=>le,missions:()=>Zt,setDone:n=>{Se.missionsDone=n},people:()=>Vn,traffic:()=>Yn,hp:()=>Os,hurt:n=>Vd(n),car:()=>({vis:tn.visible,inScene:!!tn.parent,pos:tn.position.toArray().map(n=>+n.toFixed(1)),id:Tn.id,phys:[+le.pos.x.toFixed(1),+le.pos.z.toFixed(1)],cam:Gt.position.toArray().map(n=>+n.toFixed(1))}),cam:()=>({c:Gt.position.toArray().map(n=>+n.toFixed(2)),p:rt.position.toArray().map(n=>+n.toFixed(2)),pv:rt.visible,f:[Te.pos.x,Te.pos.z,Te.heading]})}),tf(),le=new ao(nn),Cg(),nf(),Wd=r0({save:Se,getDef:n=>Ei.find(e=>e.id===n),onSelectCar:()=>{Hi=null,Ds(),mr&&mr.refresh()},onPaint:()=>Ds(),onWheels:()=>Ds(),refreshScene:()=>Ds(),openEditor:()=>Jd("garage","car"),onTab:n=>mr&&mr.onTab(n)}),mr=J0({save:Se,getDef:n=>Ei.find(e=>e.id===n),persist:()=>hn(Se),onBuild:n=>{n?CS():(Ds(),Wd.refresh())},toast:n=>Et(n,1800),beep:(n,e)=>De.beep(n,e),syncCash:Bi,audio:De}),eh=D0({save:Se,cars:Ei,persist:()=>hn(Se),beep:(n,e)=>De.beep(n,e),onCar:n=>{n?Ds():Ca(tn,Se.paint[Tn.id],ar(Se,Tn.id)),Si=null},onOutfit:()=>{Mi(rt,Se.outfit),Si=null},onName:()=>{Si=null},onTab:n=>QS(n)}),Bt=B0({scene:Lt,CAR_DEFS:Ei,buildCar:kc,applyCarSkin:Ca,buildCharacter:co,setOutfit:Mi,setHeldWeapon:pa,animateCharacter:Ts,unpackLook:g0,remoteShot:(n,e,t,i)=>Pa.remoteShot(n,e,t,i),localBuilding:()=>ut?ut.b.id:-1,onHit:n=>{An!=="tdm"||!Ze.team||n.tm===Ze.team||bi||(Ze.lastAttacker={id:n.id,name:n.n,team:n.tm},Vd(+n.d||10))},onKill:n=>{An==="tdm"&&Bg(n)},onStatus:(n,e)=>wg(n==="on"?"on":n==="connecting"?"connecting":"off",e),onCount:n=>{Bt&&Bt.status==="on"&&wg("on",n)}}),Bt.connect(),fi=Qm({scene:Lt,camera:Gt,buildCar:kc,CAR_DEFS:Ei,effectiveStats:TS,getPlayer:()=>(Bc.def=Tn,Bc.stats=nn,Bc.group=tn,Bc),predictET:RS,controls:Mt,audio:De,addCash:Fs,toast:Et,city:kt}),aw(),Bi(),j("loading").classList.add("hidden"),rh(),requestAnimationFrame(Zg)}catch(n){console.error(n),j("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(n&&n.message||n)+"</p>"}}cw();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
