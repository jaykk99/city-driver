(()=>{var zm=Object.defineProperty;var Rn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var rc=(n,e)=>{for(var t in e)zm(n,t,{get:e[t],enumerable:!0})};function yi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function D0(n,e){return(n%e+e)%e}function pc(n,e,t){return(1-t)*n+t*e}function bd(n){return(n&n-1)===0&&n!==0}function Jc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function Nf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Aa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){let n=Aa("canvas");return n.style.display="block",n}function io(n){n in wd||(wd[n]=!0,console.warn(n))}function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function gc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function xc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ra.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function vc(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){hs.fromArray(n,r);let a=s.x*Math.abs(hs.x)+s.y*Math.abs(hs.y)+s.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Rc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Z0(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ki,a),l===null)return null;sa.copy(a),sa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(sa);return c<t.near||c>t.far?null:{distance:c,point:sa.clone(),object:n}}function ra(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ks),n.getVertexPosition(l,Qs),n.getVertexPosition(c,js);let h=Z0(n,e,t,i,Ks,Qs,js,ia);if(h){s&&(ea.fromBufferAttribute(s,a),ta.fromBufferAttribute(s,l),na.fromBufferAttribute(s,c),h.uv=gs.getInterpolation(ia,Ks,Qs,js,ea,ta,na,new oe)),r&&(ea.fromBufferAttribute(r,a),ta.fromBufferAttribute(r,l),na.fromBufferAttribute(r,c),h.uv1=gs.getInterpolation(ia,Ks,Qs,js,ea,ta,na,new oe),h.uv2=h.uv1),o&&(zd.fromBufferAttribute(o,a),Bd.fromBufferAttribute(o,l),Hd.fromBufferAttribute(o,c),h.normal=gs.getInterpolation(ia,Ks,Qs,js,zd,Bd,Hd,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new N,materialIndex:0};gs.getNormal(Ks,Qs,js,f.normal),h.face=f}return h}function gr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function xn(n){let e={};for(let t=0;t<n.length;t++){let i=gr(n[t]);for(let s in i)e[s]=i[s]}return e}function $0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ff(n){return n.getRenderTarget()===null?n.outputColorSpace:pt.workingColorSpace}function zf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function eg(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let f=c.array,p=c.usage,m=f.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,f,p),c.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,f){let p=h.array,m=h._updateRange,x=h.updateRanges;if(n.bindBuffer(f,c),m.count===-1&&x.length===0&&n.bufferSubData(f,0,p),x.length!==0){for(let g=0,d=x.length;g<d;g++){let u=x[g];t?n.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):n.bufferSubData(f,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(f,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let f=i.get(c);if(f===void 0)i.set(c,s(c,h));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,c,h),f.version=c.version}}return{get:o,remove:a,update:l}}function U_(n,e,t,i,s,r,o){let a=new Pe(0),l=r===!0?0:1,c,h,f=null,p=0,m=null;function x(d,u){let M=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0);let _=n.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===il)?(h===void 0&&(h=new ne(new Ue(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:gr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=pt.getTransfer(v.colorSpace)!==xt,(f!==v||p!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=v,p=v.version,m=n.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ne(new it(2,2),new Wt({name:"BackgroundMaterial",uniforms:gr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=pt.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||p!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,p=v.version,m=n.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function g(d,u){d.getRGB(aa,Ff(n)),i.buffers.color.setClear(aa.r,aa.g,aa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(d,u=1){a.set(d),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,g(a,l)},render:x}}function N_(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=d(null),c=l,h=!1;function f(P,A,D,O,L){let k=!1;if(o){let X=g(O,D,A);c!==X&&(c=X,m(c.object)),k=u(P,O,D,L),k&&M(P,O,D,L)}else{let X=A.wireframe===!0;(c.geometry!==O.id||c.program!==D.id||c.wireframe!==X)&&(c.geometry=O.id,c.program=D.id,c.wireframe=X,k=!0)}L!==null&&t.update(L,n.ELEMENT_ARRAY_BUFFER),(k||h)&&(h=!1,z(P,A,D,O),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(P){return i.isWebGL2?n.bindVertexArray(P):r.bindVertexArrayOES(P)}function x(P){return i.isWebGL2?n.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,A,D){let O=D.wireframe===!0,L=a[P.id];L===void 0&&(L={},a[P.id]=L);let k=L[A.id];k===void 0&&(k={},L[A.id]=k);let X=k[O];return X===void 0&&(X=d(p()),k[O]=X),X}function d(P){let A=[],D=[],O=[];for(let L=0;L<s;L++)A[L]=0,D[L]=0,O[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:D,attributeDivisors:O,object:P,attributes:{},index:null}}function u(P,A,D,O){let L=c.attributes,k=A.attributes,X=0,q=D.getAttributes();for(let te in q)if(q[te].location>=0){let K=L[te],de=k[te];if(de===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),K===void 0||K.attribute!==de||de&&K.data!==de.data)return!0;X++}return c.attributesNum!==X||c.index!==O}function M(P,A,D,O){let L={},k=A.attributes,X=0,q=D.getAttributes();for(let te in q)if(q[te].location>=0){let K=k[te];K===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let de={};de.attribute=K,K&&K.data&&(de.data=K.data),L[te]=de,X++}c.attributes=L,c.attributesNum=X,c.index=O}function v(){let P=c.newAttributes;for(let A=0,D=P.length;A<D;A++)P[A]=0}function _(P){w(P,0)}function w(P,A){let D=c.newAttributes,O=c.enabledAttributes,L=c.attributeDivisors;D[P]=1,O[P]===0&&(n.enableVertexAttribArray(P),O[P]=1),L[P]!==A&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,A),L[P]=A)}function E(){let P=c.newAttributes,A=c.enabledAttributes;for(let D=0,O=A.length;D<O;D++)A[D]!==P[D]&&(n.disableVertexAttribArray(D),A[D]=0)}function T(P,A,D,O,L,k,X){X===!0?n.vertexAttribIPointer(P,A,D,L,k):n.vertexAttribPointer(P,A,D,O,L,k)}function z(P,A,D,O){if(i.isWebGL2===!1&&(P.isInstancedMesh||O.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let L=O.attributes,k=D.getAttributes(),X=A.defaultAttributeValues;for(let q in k){let te=k[q];if(te.location>=0){let G=L[q];if(G===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(G=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(G=P.instanceColor)),G!==void 0){let K=G.normalized,de=G.itemSize,pe=t.get(G);if(pe===void 0)continue;let ge=pe.buffer,De=pe.type,ze=pe.bytesPerElement,be=i.isWebGL2===!0&&(De===n.INT||De===n.UNSIGNED_INT||G.gpuType===wf);if(G.isInterleavedBufferAttribute){let Be=G.data,F=Be.stride,me=G.offset;if(Be.isInstancedInterleavedBuffer){for(let j=0;j<te.locationSize;j++)w(te.location+j,Be.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let j=0;j<te.locationSize;j++)_(te.location+j);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let j=0;j<te.locationSize;j++)T(te.location+j,de/te.locationSize,De,K,F*ze,(me+de/te.locationSize*j)*ze,be)}else{if(G.isInstancedBufferAttribute){for(let Be=0;Be<te.locationSize;Be++)w(te.location+Be,G.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Be=0;Be<te.locationSize;Be++)_(te.location+Be);n.bindBuffer(n.ARRAY_BUFFER,ge);for(let Be=0;Be<te.locationSize;Be++)T(te.location+Be,de/te.locationSize,De,K,de*ze,de/te.locationSize*Be*ze,be)}}else if(X!==void 0){let K=X[q];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(te.location,K);break;case 3:n.vertexAttrib3fv(te.location,K);break;case 4:n.vertexAttrib4fv(te.location,K);break;default:n.vertexAttrib1fv(te.location,K)}}}}E()}function y(){B();for(let P in a){let A=a[P];for(let D in A){let O=A[D];for(let L in O)x(O[L].object),delete O[L];delete A[D]}delete a[P]}}function S(P){if(a[P.id]===void 0)return;let A=a[P.id];for(let D in A){let O=A[D];for(let L in O)x(O[L].object),delete O[L];delete A[D]}delete a[P.id]}function I(P){for(let A in a){let D=a[A];if(D[P.id]===void 0)continue;let O=D[P.id];for(let L in O)x(O[L].object),delete O[L];delete D[P.id]}}function B(){H(),h=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:H,dispose:y,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:_,disableUnusedAttributes:E}}function O_(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,f){n.drawArrays(r,h,f),t.update(f,r,1)}function l(h,f,p){if(p===0)return;let m,x;if(s)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,f,p),t.update(f,r,p)}function c(h,f,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<p;x++)this.render(h[x],f[x]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,p);let x=0;for(let g=0;g<p;g++)x+=f[g];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function F_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,_=o||e.has("OES_texture_float"),w=v&&_,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:d,maxVaryings:u,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:w,maxSamples:E}}function z_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new xi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||i!==0||s;return s=p,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,m){let x=f.clippingPlanes,g=f.clipIntersection,d=f.clipShadows,u=n.get(f);if(!s||x===null||x.length===0||r&&!d)r?h(null):c();else{let M=r?0:i,v=M*4,_=u.clippingState||null;l.value=_,_=h(x,p,v,m);for(let w=0;w!==v;++w)_[w]=t[w];u.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,m,x){let g=f!==null?f.length:0,d=null;if(g!==0){if(d=l.value,x!==!0||d===null){let u=m+g*4,M=p.matrixWorldInverse;a.getNormalMatrix(M),(d===null||d.length<u)&&(d=new Float32Array(u));for(let v=0,_=m;v!==g;++v,_+=4)o.copy(f[v]).applyMatrix4(M,a),o.normal.toArray(d,_),d[_+3]=o.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,d}}function B_(n){let e=new WeakMap;function t(o,a){return a===Xc?o.mapping=fr:a===qc&&(o.mapping=pr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Xc||a===qc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new eh(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function H_(n){let e=[],t=[],i=[],s=n,r=n-lr+1+kd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-lr?l=kd[o-n+lr-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,x=6,g=3,d=2,u=1,M=new Float32Array(g*x*m),v=new Float32Array(d*x*m),_=new Float32Array(u*x*m);for(let E=0;E<m;E++){let T=E%3*2/3-1,z=E>2?0:-1,y=[T,z,0,T+2/3,z,0,T+2/3,z+1,0,T,z,0,T+2/3,z+1,0,T,z+1,0];M.set(y,g*x*E),v.set(p,d*x*E);let S=[E,E,E,E,E,E];_.set(S,u*x*E)}let w=new Vt;w.setAttribute("position",new ln(M,g)),w.setAttribute("uv",new ln(v,d)),w.setAttribute("faceIndex",new ln(_,u)),e.push(w),s>lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Wd(n,e,t){let i=new vn(n,e,t);return i.texture.mapping=il,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function k_(n,e,t){let i=new Float32Array(ms),s=new N(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xd(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function qd(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Vh(){return`

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
	`}function G_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Xc||l===qc,h=l===fr||l===pr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new _r(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(c&&f&&f.height>0||h&&f&&s(f)){t===null&&(t=new _r(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function V_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function W_(n,e,t,i){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let g=p.morphAttributes[x];for(let d=0,u=g.length;d<u;d++)e.remove(g[d])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(f){let p=f.attributes;for(let x in p)e.update(p[x],n.ARRAY_BUFFER);let m=f.morphAttributes;for(let x in m){let g=m[x];for(let d=0,u=g.length;d<u;d++)e.update(g[d],n.ARRAY_BUFFER)}}function c(f){let p=[],m=f.index,x=f.attributes.position,g=0;if(m!==null){let M=m.array;g=m.version;for(let v=0,_=M.length;v<_;v+=3){let w=M[v+0],E=M[v+1],T=M[v+2];p.push(w,E,E,T,T,w)}}else if(x!==void 0){let M=x.array;g=x.version;for(let v=0,_=M.length/3-1;v<_;v+=3){let w=v+0,E=v+1,T=v+2;p.push(w,E,E,T,T,w)}}else return;let d=new(Nf(p)?Na:Ua)(p,1);d.version=g;let u=r.get(f);u&&e.remove(u),r.set(f,d)}function h(f){let p=r.get(f);if(p){let m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function X_(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,x){n.drawElements(r,x,a,m*l),t.update(x,r,1)}function f(m,x,g){if(g===0)return;let d,u;if(s)d=n,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[u](r,x,a,m*l,g),t.update(x,r,g)}function p(m,x,g){if(g===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<g;u++)this.render(m[u]/l,x[u]);else{d.multiDrawElementsWEBGL(r,x,0,a,m,0,g);let u=0;for(let M=0;M<g;M++)u+=x[M];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function q_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Y_(n,e){return n[0]-e[0]}function Z_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function $_(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new wt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,f){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==x){let P=function(){B.dispose(),r.delete(h),h.removeEventListener("dispose",P)};g!==void 0&&g.texture.dispose();let M=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],z=0;M===!0&&(z=1),v===!0&&(z=2),_===!0&&(z=3);let y=h.attributes.position.count*z,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let I=new Float32Array(y*S*4*x),B=new Pa(I,y,S,x);B.type=Fi,B.needsUpdate=!0;let H=z*4;for(let A=0;A<x;A++){let D=w[A],O=E[A],L=T[A],k=y*S*4*A;for(let X=0;X<D.count;X++){let q=X*H;M===!0&&(o.fromBufferAttribute(D,X),I[k+q+0]=o.x,I[k+q+1]=o.y,I[k+q+2]=o.z,I[k+q+3]=0),v===!0&&(o.fromBufferAttribute(O,X),I[k+q+4]=o.x,I[k+q+5]=o.y,I[k+q+6]=o.z,I[k+q+7]=0),_===!0&&(o.fromBufferAttribute(L,X),I[k+q+8]=o.x,I[k+q+9]=o.y,I[k+q+10]=o.z,I[k+q+11]=L.itemSize===4?o.w:1)}}g={count:x,texture:B,size:new oe(y,S)},r.set(h,g),h.addEventListener("dispose",P)}let d=0;for(let M=0;M<p.length;M++)d+=p[M];let u=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",u),f.getUniforms().setValue(n,"morphTargetInfluences",p),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let m=p===void 0?0:p.length,x=i[h.id];if(x===void 0||x.length!==m){x=[];for(let v=0;v<m;v++)x[v]=[v,0];i[h.id]=x}for(let v=0;v<m;v++){let _=x[v];_[0]=v,_[1]=p[v]}x.sort(Z_);for(let v=0;v<8;v++)v<m&&x[v][1]?(a[v][0]=x[v][0],a[v][1]=x[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Y_);let g=h.morphAttributes.position,d=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let _=a[v],w=_[0],E=_[1];w!==Number.MAX_SAFE_INTEGER&&E?(g&&h.getAttribute("morphTarget"+v)!==g[w]&&h.setAttribute("morphTarget"+v,g[w]),d&&h.getAttribute("morphNormal"+v)!==d[w]&&h.setAttribute("morphNormal"+v,d[w]),s[v]=E,u+=E):(g&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),d&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let M=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function J_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function wr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Yd[s];if(r===void 0&&(r=new Float32Array(s),Yd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function rl(n,e){let t=Zd[e];t===void 0&&(t=new Int32Array(e),Zd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function K_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function j_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Yt(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function tv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;Kd.set(i),n.uniformMatrix2fv(this.addr,!1,Kd),Zt(t,i)}}function nv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;Jd.set(i),n.uniformMatrix3fv(this.addr,!1,Jd),Zt(t,i)}}function iv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Yt(t,i))return;$d.set(i),n.uniformMatrix4fv(this.addr,!1,$d),Zt(t,i)}}function sv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function ov(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function lv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Yt(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Yt(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Yt(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function dv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Hf:Bf;t.setTexture2D(e||r,s)}function fv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Gf,s)}function pv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Vf,s)}function mv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kf,s)}function gv(n){switch(n){case 5126:return K_;case 35664:return Q_;case 35665:return j_;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return sv;case 35667:case 35671:return rv;case 35668:case 35672:return ov;case 35669:case 35673:return av;case 5125:return lv;case 36294:return cv;case 36295:return hv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}function xv(n,e){n.uniform1fv(this.addr,e)}function _v(n,e){let t=wr(e,this.size,2);n.uniform2fv(this.addr,t)}function vv(n,e){let t=wr(e,this.size,3);n.uniform3fv(this.addr,t)}function yv(n,e){let t=wr(e,this.size,4);n.uniform4fv(this.addr,t)}function Mv(n,e){let t=wr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sv(n,e){let t=wr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ev(n,e){let t=wr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bv(n,e){n.uniform1iv(this.addr,e)}function wv(n,e){n.uniform2iv(this.addr,e)}function Tv(n,e){n.uniform3iv(this.addr,e)}function Av(n,e){n.uniform4iv(this.addr,e)}function Rv(n,e){n.uniform1uiv(this.addr,e)}function Cv(n,e){n.uniform2uiv(this.addr,e)}function Pv(n,e){n.uniform3uiv(this.addr,e)}function Iv(n,e){n.uniform4uiv(this.addr,e)}function Lv(n,e,t){let i=this.cache,s=e.length,r=rl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Bf,r[o])}function Dv(n,e,t){let i=this.cache,s=e.length,r=rl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Gf,r[o])}function Uv(n,e,t){let i=this.cache,s=e.length,r=rl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vf,r[o])}function Nv(n,e,t){let i=this.cache,s=e.length,r=rl(t,s);Yt(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||kf,r[o])}function Ov(n){switch(n){case 5126:return xv;case 35664:return _v;case 35665:return vv;case 35666:return yv;case 35674:return Mv;case 35675:return Sv;case 35676:return Ev;case 5124:case 35670:return bv;case 35667:case 35671:return wv;case 35668:case 35672:return Tv;case 35669:case 35673:return Av;case 5125:return Rv;case 36294:return Cv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Qd(n,e){n.seq.push(e),n.map[e.id]=e}function Fv(n,e,t){let i=n.name,s=i.length;for(Oc.lastIndex=0;;){let r=Oc.exec(i),o=Oc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Qd(t,c===void 0?new th(a,n,e):new nh(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ih(a),Qd(t,f)),t=f}}}function jd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Hv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function kv(n){let e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(n),i;switch(e===t?i="":e===ba&&t===Ea?i="LinearDisplayP3ToLinearSRGB":e===Ea&&t===ba&&(i="LinearSRGBToLinearDisplayP3"),n){case Si:case sl:return[i,"LinearTransferOETF"];case vt:case Gh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ef(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Hv(n.getShaderSource(e),o)}else return s}function Gv(n,e){let t=kv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vv(n,e){let t;switch(e){case Fh:t="Linear";break;case zh:t="Reinhard";break;case Bh:t="OptimizedCineon";break;case yo:t="ACESFilmic";break;case Hh:t="AgX";break;case f0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Wv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function Xv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(cr).join(`
`)}function qv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Yv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function cr(n){return n!==""}function tf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function sh(n){return n.replace(Zv,Jv)}function Jv(n,e){let t=Qe[e];if(t===void 0){let i=$v.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}function sf(n){return n.replace(Kv,Qv)}function Qv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rf(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===km?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function ey(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ty(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===pr&&(e="ENVMAP_MODE_REFRACTION"),e}function ny(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ef:e="ENVMAP_BLENDING_MULTIPLY";break;case u0:e="ENVMAP_BLENDING_MIX";break;case d0:e="ENVMAP_BLENDING_ADD";break}return e}function iy(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function sy(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=jv(t),c=ey(t),h=ty(t),f=ny(t),p=iy(t),m=t.isWebGL2?"":Wv(t),x=Xv(t),g=qv(r),d=s.createProgram(),u,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),u.length>0&&(u+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),M.length>0&&(M+=`
`)):(u=[rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),M=[m,rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Vv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Gv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=sh(o),o=tf(o,t),o=nf(o,t),a=sh(a),a=tf(a,t),a=nf(a,t),o=sf(o),a=sf(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);let _=v+u+o,w=v+M+a,E=jd(s,s.VERTEX_SHADER,_),T=jd(s,s.FRAGMENT_SHADER,w);s.attachShader(d,E),s.attachShader(d,T),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function z(B){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(d).trim(),P=s.getShaderInfoLog(E).trim(),A=s.getShaderInfoLog(T).trim(),D=!0,O=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(D=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,d,E,T);else{let L=ef(s,E,"vertex"),k=ef(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+L+`
`+k)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(P===""||A==="")&&(O=!1);O&&(B.diagnostics={runnable:D,programLog:H,vertexShader:{log:P,prefix:u},fragmentShader:{log:A,prefix:M}})}s.deleteShader(E),s.deleteShader(T),y=new dr(s,d),S=Yv(s,d)}let y;this.getUniforms=function(){return y===void 0&&z(this),y};let S;this.getAttributes=function(){return S===void 0&&z(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(d,zv)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bv++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=E,this.fragmentShader=T,this}function oy(n,e,t,i,s,r,o){let a=new Da,l=new rh,c=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function d(y,S,I,B,H){let P=B.fog,A=H.geometry,D=y.isMeshStandardMaterial?B.environment:null,O=(y.isMeshStandardMaterial?t:e).get(y.envMap||D),L=O&&O.mapping===il?O.image.height:null,k=x[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let X=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,q=X!==void 0?X.length:0,te=0;A.morphAttributes.position!==void 0&&(te=1),A.morphAttributes.normal!==void 0&&(te=2),A.morphAttributes.color!==void 0&&(te=3);let G,K,de,pe;if(k){let Lt=ni[k];G=Lt.vertexShader,K=Lt.fragmentShader}else G=y.vertexShader,K=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);let ge=n.getRenderTarget(),De=H.isInstancedMesh===!0,ze=H.isBatchedMesh===!0,be=!!y.map,Be=!!y.matcap,F=!!O,me=!!y.aoMap,j=!!y.lightMap,ue=!!y.bumpMap,Q=!!y.normalMap,Le=!!y.displacementMap,Se=!!y.emissiveMap,R=!!y.metalnessMap,b=!!y.roughnessMap,V=y.anisotropy>0,le=y.clearcoat>0,re=y.iridescence>0,se=y.sheen>0,Ie=y.transmission>0,xe=V&&!!y.anisotropyMap,we=le&&!!y.clearcoatMap,Fe=le&&!!y.clearcoatNormalMap,We=le&&!!y.clearcoatRoughnessMap,ce=re&&!!y.iridescenceMap,Je=re&&!!y.iridescenceThicknessMap,Ke=se&&!!y.sheenColorMap,He=se&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,Ae=!!y.specularColorMap,Ye=!!y.specularIntensityMap,rt=Ie&&!!y.transmissionMap,ae=Ie&&!!y.thicknessMap,he=!!y.gradientMap,$=!!y.alphaMap,U=y.alphaTest>0,ee=!!y.alphaHash,ie=!!y.extensions,ye=!!A.attributes.uv1,Ee=!!A.attributes.uv2,Xe=!!A.attributes.uv3,nt=Bi;return y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(nt=n.toneMapping),{isWebGL2:h,shaderID:k,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:K,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:ze,instancing:De,instancingColor:De&&H.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Si,map:be,matcap:Be,envMap:F,envMapMode:F&&O.mapping,envMapCubeUVHeight:L,aoMap:me,lightMap:j,bumpMap:ue,normalMap:Q,displacementMap:p&&Le,emissiveMap:Se,normalMapObjectSpace:Q&&y.normalMapType===w0,normalMapTangentSpace:Q&&y.normalMapType===Df,metalnessMap:R,roughnessMap:b,anisotropy:V,anisotropyMap:xe,clearcoat:le,clearcoatMap:we,clearcoatNormalMap:Fe,clearcoatRoughnessMap:We,iridescence:re,iridescenceMap:ce,iridescenceThicknessMap:Je,sheen:se,sheenColorMap:Ke,sheenRoughnessMap:He,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:Ye,transmission:Ie,transmissionMap:rt,thicknessMap:ae,gradientMap:he,opaque:y.transparent===!1&&y.blending===zi,alphaMap:$,alphaTest:U,alphaHash:ee,combine:y.combine,mapUv:be&&g(y.map.channel),aoMapUv:me&&g(y.aoMap.channel),lightMapUv:j&&g(y.lightMap.channel),bumpMapUv:ue&&g(y.bumpMap.channel),normalMapUv:Q&&g(y.normalMap.channel),displacementMapUv:Le&&g(y.displacementMap.channel),emissiveMapUv:Se&&g(y.emissiveMap.channel),metalnessMapUv:R&&g(y.metalnessMap.channel),roughnessMapUv:b&&g(y.roughnessMap.channel),anisotropyMapUv:xe&&g(y.anisotropyMap.channel),clearcoatMapUv:we&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&g(y.sheenRoughnessMap.channel),specularMapUv:Oe&&g(y.specularMap.channel),specularColorMapUv:Ae&&g(y.specularColorMap.channel),specularIntensityMapUv:Ye&&g(y.specularIntensityMap.channel),transmissionMapUv:rt&&g(y.transmissionMap.channel),thicknessMapUv:ae&&g(y.thicknessMap.channel),alphaMapUv:$&&g(y.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(Q||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:Ee,vertexUv3s:Xe,pointsUvs:H.isPoints===!0&&!!A.attributes.uv&&(be||$),fog:!!P,useFog:y.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:te,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:be&&y.map.isVideoTexture===!0&&pt.getTransfer(y.map.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ct,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ie&&y.extensions.derivatives===!0,extensionFragDepth:ie&&y.extensions.fragDepth===!0,extensionDrawBuffers:ie&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ie&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)S.push(I),S.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(M(S,y),v(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function _(y){let S=x[y.type],I;if(S){let B=ni[S];I=qi.clone(B.uniforms)}else I=y.uniforms;return I}function w(y,S){let I;for(let B=0,H=c.length;B<H;B++){let P=c[B];if(P.cacheKey===S){I=P,++I.usedTimes;break}}return I===void 0&&(I=new sy(n,S,y,r),c.push(I)),I}function E(y){if(--y.usedTimes===0){let S=c.indexOf(y);c[S]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function z(){l.dispose()}return{getParameters:d,getProgramCacheKey:u,getUniforms:_,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:z}}function ay(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function ly(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function of(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function af(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,p,m,x,g,d){let u=n[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:x,renderOrder:f.renderOrder,z:g,group:d},n[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=x,u.renderOrder=f.renderOrder,u.z=g,u.group=d),e++,u}function a(f,p,m,x,g,d){let u=o(f,p,m,x,g,d);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(f,p,m,x,g,d){let u=o(f,p,m,x,g,d);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,p){t.length>1&&t.sort(f||ly),i.length>1&&i.sort(p||of),s.length>1&&s.sort(p||of)}function h(){for(let f=e,p=n.length;f<p;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function cy(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new af,n.set(i,[o])):s>=r.length?(o=new af,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function hy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Pe};break;case"SpotLight":t={position:new N,direction:new N,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function uy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function fy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function py(n,e){let t=new hy,i=uy(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new N);let r=new N,o=new ot,a=new ot;function l(h,f){let p=0,m=0,x=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let g=0,d=0,u=0,M=0,v=0,_=0,w=0,E=0,T=0,z=0,y=0;h.sort(fy);let S=f===!0?Math.PI:1;for(let B=0,H=h.length;B<H;B++){let P=h[B],A=P.color,D=P.intensity,O=P.distance,L=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=A.r*D*S,m+=A.g*D*S,x+=A.b*D*S;else if(P.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(P.sh.coefficients[k],D);y++}else if(P.isDirectionalLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let X=P.shadow,q=i.get(P);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,s.directionalShadow[g]=q,s.directionalShadowMap[g]=L,s.directionalShadowMatrix[g]=P.shadow.matrix,_++}s.directional[g]=k,g++}else if(P.isSpotLight){let k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(A).multiplyScalar(D*S),k.distance=O,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,s.spot[u]=k;let X=P.shadow;if(P.map&&(s.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&z++),s.spotLightMatrix[u]=X.matrix,P.castShadow){let q=i.get(P);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,s.spotShadow[u]=q,s.spotShadowMap[u]=L,E++}u++}else if(P.isRectAreaLight){let k=t.get(P);k.color.copy(A).multiplyScalar(D),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),s.rectArea[M]=k,M++}else if(P.isPointLight){let k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity*S),k.distance=P.distance,k.decay=P.decay,P.castShadow){let X=P.shadow,q=i.get(P);q.shadowBias=X.bias,q.shadowNormalBias=X.normalBias,q.shadowRadius=X.radius,q.shadowMapSize=X.mapSize,q.shadowCameraNear=X.camera.near,q.shadowCameraFar=X.camera.far,s.pointShadow[d]=q,s.pointShadowMap[d]=L,s.pointShadowMatrix[d]=P.shadow.matrix,w++}s.point[d]=k,d++}else if(P.isHemisphereLight){let k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(D*S),k.groundColor.copy(P.groundColor).multiplyScalar(D*S),s.hemi[v]=k,v++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_FLOAT_1,s.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ve.LTC_HALF_1,s.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=x;let I=s.hash;(I.directionalLength!==g||I.pointLength!==d||I.spotLength!==u||I.rectAreaLength!==M||I.hemiLength!==v||I.numDirectionalShadows!==_||I.numPointShadows!==w||I.numSpotShadows!==E||I.numSpotMaps!==T||I.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=M,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=_,s.directionalShadowMap.length=_,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=_,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=E+T-z,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=y,I.directionalLength=g,I.pointLength=d,I.spotLength=u,I.rectAreaLength=M,I.hemiLength=v,I.numDirectionalShadows=_,I.numPointShadows=w,I.numSpotShadows=E,I.numSpotMaps=T,I.numLightProbes=y,s.version=dy++)}function c(h,f){let p=0,m=0,x=0,g=0,d=0,u=f.matrixWorldInverse;for(let M=0,v=h.length;M<v;M++){let _=h[M];if(_.isDirectionalLight){let w=s.directional[p];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(u),p++}else if(_.isSpotLight){let w=s.spot[x];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(u),x++}else if(_.isRectAreaLight){let w=s.rectArea[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),a.identity(),o.copy(_.matrixWorld),o.premultiply(u),a.extractRotation(o),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let w=s.point[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),m++}else if(_.isHemisphereLight){let w=s.hemi[d];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(u),d++}}}return{setup:l,setupView:c,state:s}}function lf(n,e){let t=new py(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function my(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new lf(n,e),t.set(r,[l])):o>=a.length?(l=new lf(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function _y(n,e,t){let i=new co,s=new oe,r=new oe,o=new wt,a=new ah({depthPacking:b0}),l=new lh,c={},h=t.maxTextureSize,f={[ki]:Qt,[Qt]:ki,[Ct]:Ct},p=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:gy,fragmentShader:xy}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new Vt;x.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new ne(x,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let u=this.type;this.render=function(E,T,z){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||E.length===0)return;let y=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(ii),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=u!==gi&&this.type===gi,P=u===gi&&this.type!==gi;for(let A=0,D=E.length;A<D;A++){let O=E[A],L=O.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let k=L.getFrameExtents();if(s.multiply(k),r.copy(L.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/k.x),s.x=r.x*k.x,L.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/k.y),s.y=r.y*k.y,L.mapSize.y=r.y)),L.map===null||H===!0||P===!0){let q=this.type!==gi?{minFilter:_n,magFilter:_n}:{};L.map!==null&&L.map.dispose(),L.map=new vn(s.x,s.y,q),L.map.texture.name=O.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();let X=L.getViewportCount();for(let q=0;q<X;q++){let te=L.getViewport(q);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),B.viewport(o),L.updateMatrices(O,q),i=L.getFrustum(),_(T,z,L.camera,O,this.type)}L.isPointLightShadow!==!0&&this.type===gi&&M(L,z),L.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(y,S,I)};function M(E,T){let z=e.update(g);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new vn(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,z,p,g,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,z,m,g,null)}function v(E,T,z,y){let S=null,I=z.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)S=I;else if(S=z.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=S.uuid,H=T.uuid,P=c[B];P===void 0&&(P={},c[B]=P);let A=P[H];A===void 0&&(A=S.clone(),P[H]=A,T.addEventListener("dispose",w)),S=A}if(S.visible=T.visible,S.wireframe=T.wireframe,y===gi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,z.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let B=n.properties.get(S);B.light=z}return S}function _(E,T,z,y,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===gi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld);let H=e.update(E),P=E.material;if(Array.isArray(P)){let A=H.groups;for(let D=0,O=A.length;D<O;D++){let L=A[D],k=P[L.materialIndex];if(k&&k.visible){let X=v(E,k,y,S);E.onBeforeShadow(n,E,T,z,H,X,L),n.renderBufferDirect(z,null,H,X,E,L),E.onAfterShadow(n,E,T,z,H,X,L)}}}else if(P.visible){let A=v(E,P,y,S);E.onBeforeShadow(n,E,T,z,H,A,null),n.renderBufferDirect(z,null,H,A,E,null),E.onAfterShadow(n,E,T,z,H,A,null)}}let B=E.children;for(let H=0,P=B.length;H<P;H++)_(B[H],T,z,y,S)}function w(E){E.target.removeEventListener("dispose",w);for(let z in c){let y=c[z],S=E.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function vy(n,e,t){let i=t.isWebGL2;function s(){let U=!1,ee=new wt,ie=null,ye=new wt(0,0,0,0);return{setMask:function(Ee){ie!==Ee&&!U&&(n.colorMask(Ee,Ee,Ee,Ee),ie=Ee)},setLocked:function(Ee){U=Ee},setClear:function(Ee,Xe,nt,mt,Lt){Lt===!0&&(Ee*=mt,Xe*=mt,nt*=mt),ee.set(Ee,Xe,nt,mt),ye.equals(ee)===!1&&(n.clearColor(Ee,Xe,nt,mt),ye.copy(ee))},reset:function(){U=!1,ie=null,ye.set(-1,0,0,0)}}}function r(){let U=!1,ee=null,ie=null,ye=null;return{setTest:function(Ee){Ee?ze(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(Ee){ee!==Ee&&!U&&(n.depthMask(Ee),ee=Ee)},setFunc:function(Ee){if(ie!==Ee){switch(Ee){case s0:n.depthFunc(n.NEVER);break;case r0:n.depthFunc(n.ALWAYS);break;case o0:n.depthFunc(n.LESS);break;case va:n.depthFunc(n.LEQUAL);break;case a0:n.depthFunc(n.EQUAL);break;case l0:n.depthFunc(n.GEQUAL);break;case c0:n.depthFunc(n.GREATER);break;case h0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=Ee}},setLocked:function(Ee){U=Ee},setClear:function(Ee){ye!==Ee&&(n.clearDepth(Ee),ye=Ee)},reset:function(){U=!1,ee=null,ie=null,ye=null}}}function o(){let U=!1,ee=null,ie=null,ye=null,Ee=null,Xe=null,nt=null,mt=null,Lt=null;return{setTest:function(qe){U||(qe?ze(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(qe){ee!==qe&&!U&&(n.stencilMask(qe),ee=qe)},setFunc:function(qe,ft,mn){(ie!==qe||ye!==ft||Ee!==mn)&&(n.stencilFunc(qe,ft,mn),ie=qe,ye=ft,Ee=mn)},setOp:function(qe,ft,mn){(Xe!==qe||nt!==ft||mt!==mn)&&(n.stencilOp(qe,ft,mn),Xe=qe,nt=ft,mt=mn)},setLocked:function(qe){U=qe},setClear:function(qe){Lt!==qe&&(n.clearStencil(qe),Lt=qe)},reset:function(){U=!1,ee=null,ie=null,ye=null,Ee=null,Xe=null,nt=null,mt=null,Lt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,f=new WeakMap,p={},m={},x=new WeakMap,g=[],d=null,u=!1,M=null,v=null,_=null,w=null,E=null,T=null,z=null,y=new Pe(0,0,0),S=0,I=!1,B=null,H=null,P=null,A=null,D=null,O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,k=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),L=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),L=k>=2);let q=null,te={},G=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),de=new wt().fromArray(G),pe=new wt().fromArray(K);function ge(U,ee,ie,ye){let Ee=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(U,Xe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ie;nt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ee,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(ee+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return Xe}let De={};De[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),De[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(De[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),De[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ze(n.DEPTH_TEST),l.setFunc(va),Se(!1),R(Gu),ze(n.CULL_FACE),Q(ii);function ze(U){p[U]!==!0&&(n.enable(U),p[U]=!0)}function be(U){p[U]!==!1&&(n.disable(U),p[U]=!1)}function Be(U,ee){return m[U]!==ee?(n.bindFramebuffer(U,ee),m[U]=ee,i&&(U===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ee),U===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ee)),!0):!1}function F(U,ee){let ie=g,ye=!1;if(U)if(ie=x.get(ee),ie===void 0&&(ie=[],x.set(ee,ie)),U.isWebGLMultipleRenderTargets){let Ee=U.texture;if(ie.length!==Ee.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,nt=Ee.length;Xe<nt;Xe++)ie[Xe]=n.COLOR_ATTACHMENT0+Xe;ie.length=Ee.length,ye=!0}}else ie[0]!==n.COLOR_ATTACHMENT0&&(ie[0]=n.COLOR_ATTACHMENT0,ye=!0);else ie[0]!==n.BACK&&(ie[0]=n.BACK,ye=!0);ye&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function me(U){return d!==U?(n.useProgram(U),d=U,!0):!1}let j={[ps]:n.FUNC_ADD,[Vm]:n.FUNC_SUBTRACT,[Wm]:n.FUNC_REVERSE_SUBTRACT};if(i)j[Xu]=n.MIN,j[qu]=n.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(j[Xu]=U.MIN_EXT,j[qu]=U.MAX_EXT)}let ue={[Xm]:n.ZERO,[qm]:n.ONE,[Ym]:n.SRC_COLOR,[Vc]:n.SRC_ALPHA,[jm]:n.SRC_ALPHA_SATURATE,[Km]:n.DST_COLOR,[$m]:n.DST_ALPHA,[Zm]:n.ONE_MINUS_SRC_COLOR,[Wc]:n.ONE_MINUS_SRC_ALPHA,[Qm]:n.ONE_MINUS_DST_COLOR,[Jm]:n.ONE_MINUS_DST_ALPHA,[e0]:n.CONSTANT_COLOR,[t0]:n.ONE_MINUS_CONSTANT_COLOR,[n0]:n.CONSTANT_ALPHA,[i0]:n.ONE_MINUS_CONSTANT_ALPHA};function Q(U,ee,ie,ye,Ee,Xe,nt,mt,Lt,qe){if(U===ii){u===!0&&(be(n.BLEND),u=!1);return}if(u===!1&&(ze(n.BLEND),u=!0),U!==Gm){if(U!==M||qe!==I){if((v!==ps||E!==ps)&&(n.blendEquation(n.FUNC_ADD),v=ps,E=ps),qe)switch(U){case zi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.ONE,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case zi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,w=null,T=null,z=null,y.set(0,0,0),S=0,M=U,I=qe}return}Ee=Ee||ee,Xe=Xe||ie,nt=nt||ye,(ee!==v||Ee!==E)&&(n.blendEquationSeparate(j[ee],j[Ee]),v=ee,E=Ee),(ie!==_||ye!==w||Xe!==T||nt!==z)&&(n.blendFuncSeparate(ue[ie],ue[ye],ue[Xe],ue[nt]),_=ie,w=ye,T=Xe,z=nt),(mt.equals(y)===!1||Lt!==S)&&(n.blendColor(mt.r,mt.g,mt.b,Lt),y.copy(mt),S=Lt),M=U,I=!1}function Le(U,ee){U.side===Ct?be(n.CULL_FACE):ze(n.CULL_FACE);let ie=U.side===Qt;ee&&(ie=!ie),Se(ie),U.blending===zi&&U.transparent===!1?Q(ii):Q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);let ye=U.stencilWrite;c.setTest(ye),ye&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),V(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ze(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function Se(U){B!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),B=U)}function R(U){U!==Bm?(ze(n.CULL_FACE),U!==H&&(U===Gu?n.cullFace(n.BACK):U===Hm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),H=U}function b(U){U!==P&&(L&&n.lineWidth(U),P=U)}function V(U,ee,ie){U?(ze(n.POLYGON_OFFSET_FILL),(A!==ee||D!==ie)&&(n.polygonOffset(ee,ie),A=ee,D=ie)):be(n.POLYGON_OFFSET_FILL)}function le(U){U?ze(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function re(U){U===void 0&&(U=n.TEXTURE0+O-1),q!==U&&(n.activeTexture(U),q=U)}function se(U,ee,ie){ie===void 0&&(q===null?ie=n.TEXTURE0+O-1:ie=q);let ye=te[ie];ye===void 0&&(ye={type:void 0,texture:void 0},te[ie]=ye),(ye.type!==U||ye.texture!==ee)&&(q!==ie&&(n.activeTexture(ie),q=ie),n.bindTexture(U,ee||De[U]),ye.type=U,ye.texture=ee)}function Ie(){let U=te[q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function xe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ye(U){de.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),de.copy(U))}function rt(U){pe.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),pe.copy(U))}function ae(U,ee){let ie=f.get(ee);ie===void 0&&(ie=new WeakMap,f.set(ee,ie));let ye=ie.get(U);ye===void 0&&(ye=n.getUniformBlockIndex(ee,U.name),ie.set(U,ye))}function he(U,ee){let ye=f.get(ee).get(U);h.get(ee)!==ye&&(n.uniformBlockBinding(ee,ye,U.__bindingPointIndex),h.set(ee,ye))}function $(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},q=null,te={},m={},x=new WeakMap,g=[],d=null,u=!1,M=null,v=null,_=null,w=null,E=null,T=null,z=null,y=new Pe(0,0,0),S=0,I=!1,B=null,H=null,P=null,A=null,D=null,de.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ze,disable:be,bindFramebuffer:Be,drawBuffers:F,useProgram:me,setBlending:Q,setMaterial:Le,setFlipSided:Se,setCullFace:R,setLineWidth:b,setPolygonOffset:V,setScissorTest:le,activeTexture:re,bindTexture:se,unbindTexture:Ie,compressedTexImage2D:xe,compressedTexImage3D:we,texImage2D:Oe,texImage3D:Ae,updateUBOMapping:ae,uniformBlockBinding:he,texStorage2D:Ke,texStorage3D:He,texSubImage2D:Fe,texSubImage3D:We,compressedTexSubImage2D:ce,compressedTexSubImage3D:Je,scissor:Ye,viewport:rt,reset:$}}function yy(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,b){return m?new OffscreenCanvas(R,b):Aa("canvas")}function g(R,b,V,le){let re=1;if((R.width>le||R.height>le)&&(re=le/Math.max(R.width,R.height)),re<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let se=b?Jc:Math.floor,Ie=se(re*R.width),xe=se(re*R.height);f===void 0&&(f=x(Ie,xe));let we=V?x(Ie,xe):f;return we.width=Ie,we.height=xe,we.getContext("2d").drawImage(R,0,0,Ie,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Ie+"x"+xe+")."),we}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function d(R){return bd(R.width)&&bd(R.height)}function u(R){return a?!1:R.wrapS!==$n||R.wrapT!==$n||R.minFilter!==_n&&R.minFilter!==On}function M(R,b){return R.generateMipmaps&&b&&R.minFilter!==_n&&R.minFilter!==On}function v(R){n.generateMipmap(R)}function _(R,b,V,le,re=!1){if(a===!1)return b;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=b;if(b===n.RED&&(V===n.FLOAT&&(se=n.R32F),V===n.HALF_FLOAT&&(se=n.R16F),V===n.UNSIGNED_BYTE&&(se=n.R8)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(se=n.R8UI),V===n.UNSIGNED_SHORT&&(se=n.R16UI),V===n.UNSIGNED_INT&&(se=n.R32UI),V===n.BYTE&&(se=n.R8I),V===n.SHORT&&(se=n.R16I),V===n.INT&&(se=n.R32I)),b===n.RG&&(V===n.FLOAT&&(se=n.RG32F),V===n.HALF_FLOAT&&(se=n.RG16F),V===n.UNSIGNED_BYTE&&(se=n.RG8)),b===n.RGBA){let Ie=re?Sa:pt.getTransfer(le);V===n.FLOAT&&(se=n.RGBA32F),V===n.HALF_FLOAT&&(se=n.RGBA16F),V===n.UNSIGNED_BYTE&&(se=Ie===xt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function w(R,b,V){return M(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==On?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function E(R){return R===_n||R===Yu||R===oc?n.NEAREST:n.LINEAR}function T(R){let b=R.target;b.removeEventListener("dispose",T),y(b),b.isVideoTexture&&h.delete(b)}function z(R){let b=R.target;b.removeEventListener("dispose",z),I(b)}function y(R){let b=i.get(R);if(b.__webglInit===void 0)return;let V=R.source,le=p.get(V);if(le){let re=le[b.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(R),Object.keys(le).length===0&&p.delete(V)}i.remove(R)}function S(R){let b=i.get(R);n.deleteTexture(b.__webglTexture);let V=R.source,le=p.get(V);delete le[b.__cacheKey],o.memory.textures--}function I(R){let b=R.texture,V=i.get(R),le=i.get(b);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(V.__webglFramebuffer[re]))for(let se=0;se<V.__webglFramebuffer[re].length;se++)n.deleteFramebuffer(V.__webglFramebuffer[re][se]);else n.deleteFramebuffer(V.__webglFramebuffer[re]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[re])}else{if(Array.isArray(V.__webglFramebuffer))for(let re=0;re<V.__webglFramebuffer.length;re++)n.deleteFramebuffer(V.__webglFramebuffer[re]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let re=0;re<V.__webglColorRenderbuffer.length;re++)V.__webglColorRenderbuffer[re]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[re]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let re=0,se=b.length;re<se;re++){let Ie=i.get(b[re]);Ie.__webglTexture&&(n.deleteTexture(Ie.__webglTexture),o.memory.textures--),i.remove(b[re])}i.remove(b),i.remove(R)}let B=0;function H(){B=0}function P(){let R=B;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),B+=1,R}function A(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function D(R,b){let V=i.get(R);if(R.isVideoTexture&&Le(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){let le=R.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(V,R,b);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function O(R,b){let V=i.get(R);if(R.version>0&&V.__version!==R.version){de(V,R,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function L(R,b){let V=i.get(R);if(R.version>0&&V.__version!==R.version){de(V,R,b);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function k(R,b){let V=i.get(R);if(R.version>0&&V.__version!==R.version){pe(V,R,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}let X={[Mi]:n.REPEAT,[$n]:n.CLAMP_TO_EDGE,[Yc]:n.MIRRORED_REPEAT},q={[_n]:n.NEAREST,[Yu]:n.NEAREST_MIPMAP_NEAREST,[oc]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[p0]:n.LINEAR_MIPMAP_NEAREST,[lo]:n.LINEAR_MIPMAP_LINEAR},te={[T0]:n.NEVER,[L0]:n.ALWAYS,[A0]:n.LESS,[Uf]:n.LEQUAL,[R0]:n.EQUAL,[I0]:n.GEQUAL,[C0]:n.GREATER,[P0]:n.NOTEQUAL};function G(R,b,V){if(V?(n.texParameteri(R,n.TEXTURE_WRAP_S,X[b.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,X[b.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,X[b.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,q[b.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,q[b.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==$n||b.wrapT!==$n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,E(b.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,E(b.minFilter)),b.minFilter!==_n&&b.minFilter!==On&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let le=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===_n||b.minFilter!==oc&&b.minFilter!==lo||b.type===Fi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===Kn&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(R,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function K(R,b){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",T));let le=b.source,re=p.get(le);re===void 0&&(re={},p.set(le,re));let se=A(b);if(se!==R.__cacheKey){re[se]===void 0&&(re[se]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[se].usedTimes++;let Ie=re[R.__cacheKey];Ie!==void 0&&(re[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&S(b)),R.__cacheKey=se,R.__webglTexture=re[se].texture}return V}function de(R,b,V){let le=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(le=n.TEXTURE_3D);let re=K(R,b),se=b.source;t.bindTexture(le,R.__webglTexture,n.TEXTURE0+V);let Ie=i.get(se);if(se.version!==Ie.__version||re===!0){t.activeTexture(n.TEXTURE0+V);let xe=pt.getPrimaries(pt.workingColorSpace),we=b.colorSpace===Fn?null:pt.getPrimaries(b.colorSpace),Fe=b.colorSpace===Fn||xe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let We=u(b)&&d(b.image)===!1,ce=g(b.image,We,!1,s.maxTextureSize);ce=Se(b,ce);let Je=d(ce)||a,Ke=r.convert(b.format,b.colorSpace),He=r.convert(b.type),Oe=_(b.internalFormat,Ke,He,b.colorSpace,b.isVideoTexture);G(le,b,Je);let Ae,Ye=b.mipmaps,rt=a&&b.isVideoTexture!==!0&&Oe!==If,ae=Ie.__version===void 0||re===!0,he=w(b,ce,Je);if(b.isDepthTexture)Oe=n.DEPTH_COMPONENT,a?b.type===Fi?Oe=n.DEPTH_COMPONENT32F:b.type===Oi?Oe=n.DEPTH_COMPONENT24:b.type===xs?Oe=n.DEPTH24_STENCIL8:Oe=n.DEPTH_COMPONENT16:b.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===_s&&Oe===n.DEPTH_COMPONENT&&b.type!==kh&&b.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Oi,He=r.convert(b.type)),b.format===mr&&Oe===n.DEPTH_COMPONENT&&(Oe=n.DEPTH_STENCIL,b.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=xs,He=r.convert(b.type))),ae&&(rt?t.texStorage2D(n.TEXTURE_2D,1,Oe,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ce.width,ce.height,0,Ke,He,null));else if(b.isDataTexture)if(Ye.length>0&&Je){rt&&ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,Ye[0].width,Ye[0].height);for(let $=0,U=Ye.length;$<U;$++)Ae=Ye[$],rt?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Ke,He,Ae.data):t.texImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Ke,He,Ae.data);b.generateMipmaps=!1}else rt?(ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Ke,He,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,ce.width,ce.height,0,Ke,He,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){rt&&ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Oe,Ye[0].width,Ye[0].height,ce.depth);for(let $=0,U=Ye.length;$<U;$++)Ae=Ye[$],b.format!==Jn?Ke!==null?rt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ae.width,Ae.height,ce.depth,Ke,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Oe,Ae.width,Ae.height,ce.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ae.width,Ae.height,ce.depth,Ke,He,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Oe,Ae.width,Ae.height,ce.depth,0,Ke,He,Ae.data)}else{rt&&ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,Ye[0].width,Ye[0].height);for(let $=0,U=Ye.length;$<U;$++)Ae=Ye[$],b.format!==Jn?Ke!==null?rt?t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Ke,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ae.width,Ae.height,Ke,He,Ae.data):t.texImage2D(n.TEXTURE_2D,$,Oe,Ae.width,Ae.height,0,Ke,He,Ae.data)}else if(b.isDataArrayTexture)rt?(ae&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Oe,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ke,He,ce.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ce.width,ce.height,ce.depth,0,Ke,He,ce.data);else if(b.isData3DTexture)rt?(ae&&t.texStorage3D(n.TEXTURE_3D,he,Oe,ce.width,ce.height,ce.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ke,He,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ce.width,ce.height,ce.depth,0,Ke,He,ce.data);else if(b.isFramebufferTexture){if(ae)if(rt)t.texStorage2D(n.TEXTURE_2D,he,Oe,ce.width,ce.height);else{let $=ce.width,U=ce.height;for(let ee=0;ee<he;ee++)t.texImage2D(n.TEXTURE_2D,ee,Oe,$,U,0,Ke,He,null),$>>=1,U>>=1}}else if(Ye.length>0&&Je){rt&&ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,Ye[0].width,Ye[0].height);for(let $=0,U=Ye.length;$<U;$++)Ae=Ye[$],rt?t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ke,He,Ae):t.texImage2D(n.TEXTURE_2D,$,Oe,Ke,He,Ae);b.generateMipmaps=!1}else rt?(ae&&t.texStorage2D(n.TEXTURE_2D,he,Oe,ce.width,ce.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ke,He,ce)):t.texImage2D(n.TEXTURE_2D,0,Oe,Ke,He,ce);M(b,Je)&&v(le),Ie.__version=se.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function pe(R,b,V){if(b.image.length!==6)return;let le=K(R,b),re=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let se=i.get(re);if(re.version!==se.__version||le===!0){t.activeTexture(n.TEXTURE0+V);let Ie=pt.getPrimaries(pt.workingColorSpace),xe=b.colorSpace===Fn?null:pt.getPrimaries(b.colorSpace),we=b.colorSpace===Fn||Ie===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Fe=b.isCompressedTexture||b.image[0].isCompressedTexture,We=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let $=0;$<6;$++)!Fe&&!We?ce[$]=g(b.image[$],!1,!0,s.maxCubemapSize):ce[$]=We?b.image[$].image:b.image[$],ce[$]=Se(b,ce[$]);let Je=ce[0],Ke=d(Je)||a,He=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),Ae=_(b.internalFormat,He,Oe,b.colorSpace),Ye=a&&b.isVideoTexture!==!0,rt=se.__version===void 0||le===!0,ae=w(b,Je,Ke);G(n.TEXTURE_CUBE_MAP,b,Ke);let he;if(Fe){Ye&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ae,Je.width,Je.height);for(let $=0;$<6;$++){he=ce[$].mipmaps;for(let U=0;U<he.length;U++){let ee=he[U];b.format!==Jn?He!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,U,0,0,ee.width,ee.height,He,ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,U,Ae,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,U,0,0,ee.width,ee.height,He,Oe,ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,U,Ae,ee.width,ee.height,0,He,Oe,ee.data)}}}else{he=b.mipmaps,Ye&&rt&&(he.length>0&&ae++,t.texStorage2D(n.TEXTURE_CUBE_MAP,ae,Ae,ce[0].width,ce[0].height));for(let $=0;$<6;$++)if(We){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ce[$].width,ce[$].height,He,Oe,ce[$].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ae,ce[$].width,ce[$].height,0,He,Oe,ce[$].data);for(let U=0;U<he.length;U++){let ie=he[U].image[$].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,U+1,0,0,ie.width,ie.height,He,Oe,ie.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,U+1,Ae,ie.width,ie.height,0,He,Oe,ie.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,He,Oe,ce[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ae,He,Oe,ce[$]);for(let U=0;U<he.length;U++){let ee=he[U];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,U+1,0,0,He,Oe,ee.image[$]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,U+1,Ae,He,Oe,ee.image[$])}}}M(b,Ke)&&v(n.TEXTURE_CUBE_MAP),se.__version=re.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ge(R,b,V,le,re,se){let Ie=r.convert(V.format,V.colorSpace),xe=r.convert(V.type),we=_(V.internalFormat,Ie,xe,V.colorSpace);if(!i.get(b).__hasExternalTextures){let We=Math.max(1,b.width>>se),ce=Math.max(1,b.height>>se);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,se,we,We,ce,b.depth,0,Ie,xe,null):t.texImage2D(re,se,we,We,ce,0,Ie,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Q(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,re,i.get(V).__webglTexture,0,ue(b)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,re,i.get(V).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(R,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let le=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||Q(b)){let re=b.depthTexture;re&&re.isDepthTexture&&(re.type===Fi?le=n.DEPTH_COMPONENT32F:re.type===Oi&&(le=n.DEPTH_COMPONENT24));let se=ue(b);Q(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,le,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,le,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){let le=ue(b);V&&Q(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,b.width,b.height):Q(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{let le=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0;re<le.length;re++){let se=le[re],Ie=r.convert(se.format,se.colorSpace),xe=r.convert(se.type),we=_(se.internalFormat,Ie,xe,se.colorSpace),Fe=ue(b);V&&Q(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,we,b.width,b.height):Q(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,we,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,we,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ze(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),D(b.depthTexture,0);let le=i.get(b.depthTexture).__webglTexture,re=ue(b);if(b.depthTexture.format===_s)Q(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(b.depthTexture.format===mr)Q(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,re):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function be(R){let b=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ze(b.__webglFramebuffer,R)}else if(V){b.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[le]),b.__webglDepthbuffer[le]=n.createRenderbuffer(),De(b.__webglDepthbuffer[le],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),De(b.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(R,b,V){let le=i.get(R);b!==void 0&&ge(le.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&be(R)}function F(R){let b=R.texture,V=i.get(R),le=i.get(b);R.addEventListener("dispose",z),R.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=b.version,o.memory.textures++);let re=R.isWebGLCubeRenderTarget===!0,se=R.isWebGLMultipleRenderTargets===!0,Ie=d(R)||a;if(re){V.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(a&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[xe]=[];for(let we=0;we<b.mipmaps.length;we++)V.__webglFramebuffer[xe][we]=n.createFramebuffer()}else V.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let xe=0;xe<b.mipmaps.length;xe++)V.__webglFramebuffer[xe]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(se)if(s.drawBuffers){let xe=R.texture;for(let we=0,Fe=xe.length;we<Fe;we++){let We=i.get(xe[we]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Q(R)===!1){let xe=se?b:[b];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let we=0;we<xe.length;we++){let Fe=xe[we];V.__webglColorRenderbuffer[we]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[we]);let We=r.convert(Fe.format,Fe.colorSpace),ce=r.convert(Fe.type),Je=_(Fe.internalFormat,We,ce,Fe.colorSpace,R.isXRRenderTarget===!0),Ke=ue(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Je,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,V.__webglColorRenderbuffer[we])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),De(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),G(n.TEXTURE_CUBE_MAP,b,Ie);for(let xe=0;xe<6;xe++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)ge(V.__webglFramebuffer[xe][we],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,we);else ge(V.__webglFramebuffer[xe],R,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);M(b,Ie)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){let xe=R.texture;for(let we=0,Fe=xe.length;we<Fe;we++){let We=xe[we],ce=i.get(We);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),G(n.TEXTURE_2D,We,Ie),ge(V.__webglFramebuffer,R,We,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,0),M(We,Ie)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?xe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(xe,le.__webglTexture),G(xe,b,Ie),a&&b.mipmaps&&b.mipmaps.length>0)for(let we=0;we<b.mipmaps.length;we++)ge(V.__webglFramebuffer[we],R,b,n.COLOR_ATTACHMENT0,xe,we);else ge(V.__webglFramebuffer,R,b,n.COLOR_ATTACHMENT0,xe,0);M(b,Ie)&&v(xe),t.unbindTexture()}R.depthBuffer&&be(R)}function me(R){let b=d(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let le=0,re=V.length;le<re;le++){let se=V[le];if(M(se,b)){let Ie=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xe=i.get(se).__webglTexture;t.bindTexture(Ie,xe),v(Ie),t.unbindTexture()}}}function j(R){if(a&&R.samples>0&&Q(R)===!1){let b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,le=R.height,re=n.COLOR_BUFFER_BIT,se=[],Ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xe=i.get(R),we=R.isWebGLMultipleRenderTargets===!0;if(we)for(let Fe=0;Fe<b.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Fe=0;Fe<b.length;Fe++){se.push(n.COLOR_ATTACHMENT0+Fe),R.depthBuffer&&se.push(Ie);let We=xe.__ignoreDepthValues!==void 0?xe.__ignoreDepthValues:!1;if(We===!1&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),we&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Fe]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ie]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ie])),we){let ce=i.get(b[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,V,le,0,0,V,le,re,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),we)for(let Fe=0;Fe<b.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,xe.__webglColorRenderbuffer[Fe]);let We=i.get(b[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}}function ue(R){return Math.min(s.maxSamples,R.samples)}function Q(R){let b=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Le(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function Se(R,b){let V=R.colorSpace,le=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===$c||V!==Si&&V!==Fn&&(pt.getTransfer(V)===xt?a===!1?e.has("EXT_sRGB")===!0&&le===Jn?(R.format=$c,R.minFilter=On,R.generateMipmaps=!1):b=Ra.sRGBToLinear(b):(le!==Jn||re!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}this.allocateTextureUnit=P,this.resetTextureUnits=H,this.setTexture2D=D,this.setTexture2DArray=O,this.setTexture3D=L,this.setTextureCube=k,this.rebindTextures=Be,this.setupRenderTarget=F,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Q}function My(n,e,t){let i=t.isWebGL2;function s(r,o=Fn){let a,l=pt.getTransfer(o);if(r===Hi)return n.UNSIGNED_BYTE;if(r===Tf)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Af)return n.UNSIGNED_SHORT_5_5_5_1;if(r===m0)return n.BYTE;if(r===g0)return n.SHORT;if(r===kh)return n.UNSIGNED_SHORT;if(r===wf)return n.INT;if(r===Oi)return n.UNSIGNED_INT;if(r===Fi)return n.FLOAT;if(r===Kn)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===x0)return n.ALPHA;if(r===Jn)return n.RGBA;if(r===_0)return n.LUMINANCE;if(r===v0)return n.LUMINANCE_ALPHA;if(r===_s)return n.DEPTH_COMPONENT;if(r===mr)return n.DEPTH_STENCIL;if(r===$c)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===y0)return n.RED;if(r===Rf)return n.RED_INTEGER;if(r===M0)return n.RG;if(r===Cf)return n.RG_INTEGER;if(r===Pf)return n.RGBA_INTEGER;if(r===ac||r===lc||r===cc||r===hc)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ac)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ac)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zu||r===$u||r===Ju||r===Ku)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Zu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$u)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ju)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ku)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===If)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Qu||r===ju)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Qu)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ju)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ed||r===td||r===nd||r===id||r===sd||r===rd||r===od||r===ad||r===ld||r===cd||r===hd||r===ud||r===dd||r===fd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ed)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===td)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===id)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===od)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ad)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ld)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ud)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fd)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc||r===pd||r===md)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===uc)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===md)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===S0||r===gd||r===xd||r===_d)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===gd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_d)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function Ey(n,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,Ff(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function s(d,u,M,v,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(d,u):u.isMeshToonMaterial?(r(d,u),f(d,u)):u.isMeshPhongMaterial?(r(d,u),h(d,u)):u.isMeshStandardMaterial?(r(d,u),p(d,u),u.isMeshPhysicalMaterial&&m(d,u,_)):u.isMeshMatcapMaterial?(r(d,u),x(d,u)):u.isMeshDepthMaterial?r(d,u):u.isMeshDistanceMaterial?(r(d,u),g(d,u)):u.isMeshNormalMaterial?r(d,u):u.isLineBasicMaterial?(o(d,u),u.isLineDashedMaterial&&a(d,u)):u.isPointsMaterial?l(d,u,M,v):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Qt&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Qt&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);let M=e.get(u).envMap;if(M&&(d.envMap.value=M,d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap){d.lightMap.value=u.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=u.lightMapIntensity*v,t(u.lightMap,d.lightMapTransform)}u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function o(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function a(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,M,v){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*M,d.scale.value=v*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function f(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function p(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),e.get(u).envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,M){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&d.clearcoatNormalScale.value.negate())),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,u){u.matcap&&(d.matcap.value=u.matcap)}function g(d,u){let M=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function by(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){let _=v.program;i.uniformBlockBinding(M,_)}function c(M,v){let _=s[M.id];_===void 0&&(x(M),_=h(M),s[M.id]=_,M.addEventListener("dispose",d));let w=v.program;i.updateUBOMapping(M,w);let E=e.render.frame;r[M.id]!==E&&(p(M),r[M.id]=E)}function h(M){let v=f();M.__bindingPointIndex=v;let _=n.createBuffer(),w=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,w,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){let v=s[M.id],_=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,T=_.length;E<T;E++){let z=Array.isArray(_[E])?_[E]:[_[E]];for(let y=0,S=z.length;y<S;y++){let I=z[y];if(m(I,E,y,w)===!0){let B=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],P=0;for(let A=0;A<H.length;A++){let D=H[A],O=g(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,n.bufferSubData(n.UNIFORM_BUFFER,B+P,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,P),P+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,v,_,w){let E=M.value,T=v+"_"+_;if(w[T]===void 0)return typeof E=="number"||typeof E=="boolean"?w[T]=E:w[T]=E.clone(),!0;{let z=w[T];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return w[T]=E,!0}else if(z.equals(E)===!1)return z.copy(E),!0}return!1}function x(M){let v=M.uniforms,_=0,w=16;for(let T=0,z=v.length;T<z;T++){let y=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,I=y.length;S<I;S++){let B=y[S],H=Array.isArray(B.value)?B.value:[B.value];for(let P=0,A=H.length;P<A;P++){let D=H[P],O=g(D),L=_%w;L!==0&&w-L<O.boundary&&(_+=w-L),B.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=O.storage}}}let E=_%w;return E>0&&(_+=w-E),M.__size=_,M.__cache={},this}function g(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function d(M){let v=M.target;v.removeEventListener("dispose",d);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function ua(n,e,t,i,s,r){or.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Qr.x=r*or.x-s*or.y,Qr.y=s*or.x+r*or.y):Qr.copy(or),n.copy(e),n.x+=Qr.x,n.y+=Qr.y,n.applyMatrix4(Wf)}function pf(n,e,t,i,s,r,o){let a=fh.distanceSqToPoint(n);if(a<t){let l=new N;fh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function Wh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+f)+(l-a)/f;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function mf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Ty(n,e){let t=1-n;return t*t*e}function Ay(n,e){return 2*(1-n)*n*e}function Ry(n,e){return n*n*e}function ro(n,e,t,i){return Ty(n,e)+Ay(n,t)+Ry(n,i)}function Cy(n,e){let t=1-n;return t*t*t*e}function Py(n,e){let t=1-n;return 3*t*t*n*e}function Iy(n,e){return 3*(1-n)*n*n*e}function Ly(n,e){return n*n*n*e}function oo(n,e,t,i,s){return Cy(n,e)+Py(n,t)+Iy(n,i)+Ly(n,s)}function Xf(n,e,t,i,s){let r,o;if(s===$y(n,e,t,i)>0)for(r=e;r<t;r+=i)o=gf(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=gf(r,n[r],n[r+1],o);return o&&ol(o,o.next)&&(xo(o),o=o.next),o}function Ss(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ol(t,t.next)||Pt(t.prev,t,t.next)===0)){if(xo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function mo(n,e,t,i,s,r,o){if(!n)return;!o&&r&&Vy(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?Ny(n,i,s,r):Uy(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),xo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Oy(Ss(n),e,t),mo(n,e,t,i,s,r,2)):o===2&&Fy(n,e,t,i,s,r):mo(Ss(n),e,t,i,s,r,1);break}}}function Uy(n){let e=n.prev,t=n,i=n.next;if(Pt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=f&&x.y<=m&&hr(s,a,r,l,o,c,x.x,x.y)&&Pt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Ny(n,e,t,i){let s=n.prev,r=n,o=n.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,x=h<f?h<p?h:p:f<p?f:p,g=a>l?a>c?a:c:l>c?l:c,d=h>f?h>p?h:p:f>p?f:p,u=Sh(m,x,e,t,i),M=Sh(g,d,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=u&&_&&_.z<=M;){if(v.x>=m&&v.x<=g&&v.y>=x&&v.y<=d&&v!==s&&v!==o&&hr(a,h,l,f,c,p,v.x,v.y)&&Pt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=m&&_.x<=g&&_.y>=x&&_.y<=d&&_!==s&&_!==o&&hr(a,h,l,f,c,p,_.x,_.y)&&Pt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=u;){if(v.x>=m&&v.x<=g&&v.y>=x&&v.y<=d&&v!==s&&v!==o&&hr(a,h,l,f,c,p,v.x,v.y)&&Pt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=M;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=d&&_!==s&&_!==o&&hr(a,h,l,f,c,p,_.x,_.y)&&Pt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Oy(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!ol(s,r)&&qf(s,i,i.next,r)&&go(s,r)&&go(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),xo(i),xo(i.next),i=n=r),i=i.next}while(i!==n);return Ss(i)}function Fy(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&qy(o,a)){let l=Yf(o,a);o=Ss(o,o.next),l=Ss(l,l.next),mo(o,e,t,i,s,r,0),mo(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function zy(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Xf(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(Xy(c));for(s.sort(By),r=0;r<s.length;r++)t=Hy(s[r],t);return t}function By(n,e){return n.x-e.x}function Hy(n,e){let t=ky(n,e);if(!t)return e;let i=Yf(t,n);return Ss(i,i.next),Ss(t,t.next)}function ky(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&hr(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),go(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&Gy(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function Gy(n,e){return Pt(n.prev,n,e.prev)<0&&Pt(e.next,n,n.next)<0}function Vy(n,e,t,i){let s=n;do s.z===0&&(s.z=Sh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Wy(s)}function Wy(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Sh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Xy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function hr(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function qy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Yy(n,e)&&(go(n,e)&&go(e,n)&&Zy(n,e)&&(Pt(n.prev,n,e.prev)||Pt(n,e.prev,e))||ol(n,e)&&Pt(n.prev,n,n.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ol(n,e){return n.x===e.x&&n.y===e.y}function qf(n,e,t,i){let s=xa(Pt(n,e,t)),r=xa(Pt(n,e,i)),o=xa(Pt(t,i,n)),a=xa(Pt(t,i,e));return!!(s!==r&&o!==a||s===0&&ga(n,t,e)||r===0&&ga(n,i,e)||o===0&&ga(t,n,i)||a===0&&ga(t,e,i))}function ga(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function xa(n){return n>0?1:n<0?-1:0}function Yy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&qf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function go(n,e){return Pt(n.prev,n,n.next)<0?Pt(n,e,n.next)>=0&&Pt(n,n.prev,e)>=0:Pt(n,e,n.prev)<0||Pt(n,n.next,e)<0}function Zy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Yf(n,e){let t=new Eh(n.i,n.x,n.y),i=new Eh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function gf(n,e,t,i){let s=new Eh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eh(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $y(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function xf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function _f(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function Ky(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function _a(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Qy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Sf(){return(typeof performance>"u"?Date:performance).now()}var Bm,Gu,Hm,nl,km,gi,ki,Qt,Ct,ii,zi,jt,Vu,Wu,Gm,ps,Vm,Wm,Xu,qu,Xm,qm,Ym,Zm,Vc,Wc,$m,Jm,Km,Qm,jm,e0,t0,n0,i0,s0,r0,o0,va,a0,l0,c0,h0,Ef,u0,d0,Bi,Fh,zh,Bh,yo,f0,Hh,bf,fr,pr,Xc,qc,il,Mi,$n,Yc,_n,Yu,oc,On,p0,lo,Hi,m0,g0,kh,wf,Oi,Fi,Kn,Tf,Af,xs,x0,Jn,_0,v0,_s,mr,y0,Rf,M0,Cf,Pf,ac,lc,cc,hc,Zu,$u,Ju,Ku,If,Qu,ju,ed,td,nd,id,sd,rd,od,ad,ld,cd,hd,ud,dd,fd,uc,pd,md,S0,gd,xd,_d,ya,Ma,dc,vd,yd,Md,Lf,vs,E0,b0,Df,w0,Fn,vt,Si,Gh,sl,Sa,xt,Ea,ba,ks,Sd,T0,A0,R0,Uf,C0,P0,I0,L0,Zc,Ed,$c,vi,wa,Gi,on,fc,Ta,oe,tt,mc,wd,Td,Ad,ko,N0,pt,Gs,Ra,O0,Ca,F0,zn,wt,Kc,vn,Pa,Qc,Mn,N,_c,Rd,Ei,ui,qn,Go,Vs,Ws,Xs,Ii,Li,cs,Yr,Vo,Wo,hs,z0,Zr,yc,Vi,di,Mc,Xo,Di,Sc,qo,Ec,Ia,ot,qs,Yn,B0,H0,Ui,Yo,Cn,Cd,Pd,La,Da,k0,Id,Ys,fi,Zo,$r,G0,V0,Ld,Dd,Ud,W0,X0,Ft,Zn,pi,bc,mi,Zs,$s,Nd,wc,Tc,Ac,$o,gs,Of,Ni,Jo,Pe,an,q0,bi,ht,Gt,Ko,ln,Ua,Na,at,Y0,Nn,Cc,Js,Pn,Jr,Jt,Vt,Od,us,Qo,Fd,Ks,Qs,js,Pc,jo,ea,ta,na,zd,Bd,Hd,ia,sa,ne,Ue,qi,J0,K0,Wt,Oa,tn,er,tr,jc,Fa,eh,Ic,Q0,j0,xi,ds,oa,co,it,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,_g,vg,yg,Mg,Sg,Eg,bg,wg,Tg,Ag,Rg,Cg,Pg,Ig,Lg,Dg,Ug,Ng,Og,Fg,zg,Bg,Hg,kg,Gg,Vg,Wg,Xg,qg,Yg,Zg,$g,Jg,Kg,Qg,jg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,_x,vx,yx,Mx,Sx,Ex,bx,wx,Tx,Ax,Rx,Cx,Px,Ix,Lx,Dx,Ux,Nx,Ox,Fx,zx,Bx,Hx,kx,Gx,Vx,Wx,Xx,qx,Yx,Zx,$x,Jx,Kx,Qx,jx,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,d_,f_,p_,m_,g_,x_,__,v_,y_,M_,S_,E_,b_,w_,T_,A_,R_,C_,P_,I_,L_,D_,Qe,ve,ni,aa,xr,lr,kd,ms,Lc,Gd,Dc,Uc,Nc,fs,nr,Vd,_r,za,Bf,Hf,kf,Gf,Vf,Yd,Zd,$d,Jd,Kd,th,nh,ih,Oc,dr,zv,Bv,Zv,$v,Kv,ry,rh,oh,dy,ah,lh,gy,xy,ch,ct,Sy,so,hh,ho,uh,Ba,vr,dh,gn,Ha,ys,ir,Kr,sr,rr,or,Qr,Wf,ca,jr,ha,cf,Fc,hf,yr,ka,ar,uf,da,df,wy,eo,to,Tt,uo,ff,fh,fa,pa,Ga,cn,Bn,fo,ph,ma,zc,Bc,Hc,mh,Va,gh,Wa,xh,Xa,_h,qa,vh,yh,Ms,Mh,Ya,Mr,yt,Sr,po,Dy,ao,Za,Jy,Wi,en,$a,Ja,Me,Xi,Er,bh,wh,Th,Qn,Es,Ah,Rh,Ch,_o,bs,Ph,Ih,jy,Lh,br,Ka,kc,vf,yf,vo,Dh,Qa,Mf,no,Gc,Uh,ja,Nh,el,tl,Xh,eM,qh,tM,nM,iM,sM,rM,oM,aM,Oh,bt,gE,It=Rn(()=>{Bm=0,Gu=1,Hm=2,nl=1,km=2,gi=3,ki=0,Qt=1,Ct=2,ii=0,zi=1,jt=2,Vu=3,Wu=4,Gm=5,ps=100,Vm=101,Wm=102,Xu=103,qu=104,Xm=200,qm=201,Ym=202,Zm=203,Vc=204,Wc=205,$m=206,Jm=207,Km=208,Qm=209,jm=210,e0=211,t0=212,n0=213,i0=214,s0=0,r0=1,o0=2,va=3,a0=4,l0=5,c0=6,h0=7,Ef=0,u0=1,d0=2,Bi=0,Fh=1,zh=2,Bh=3,yo=4,f0=5,Hh=6,bf=300,fr=301,pr=302,Xc=303,qc=304,il=306,Mi=1e3,$n=1001,Yc=1002,_n=1003,Yu=1004,oc=1005,On=1006,p0=1007,lo=1008,Hi=1009,m0=1010,g0=1011,kh=1012,wf=1013,Oi=1014,Fi=1015,Kn=1016,Tf=1017,Af=1018,xs=1020,x0=1021,Jn=1023,_0=1024,v0=1025,_s=1026,mr=1027,y0=1028,Rf=1029,M0=1030,Cf=1031,Pf=1033,ac=33776,lc=33777,cc=33778,hc=33779,Zu=35840,$u=35841,Ju=35842,Ku=35843,If=36196,Qu=37492,ju=37496,ed=37808,td=37809,nd=37810,id=37811,sd=37812,rd=37813,od=37814,ad=37815,ld=37816,cd=37817,hd=37818,ud=37819,dd=37820,fd=37821,uc=36492,pd=36494,md=36495,S0=36283,gd=36284,xd=36285,_d=36286,ya=2300,Ma=2301,dc=2302,vd=2400,yd=2401,Md=2402,Lf=3e3,vs=3001,E0=3200,b0=3201,Df=0,w0=1,Fn="",vt="srgb",Si="srgb-linear",Gh="display-p3",sl="display-p3-linear",Sa="linear",xt="srgb",Ea="rec709",ba="p3",ks=7680,Sd=519,T0=512,A0=513,R0=514,Uf=515,C0=516,P0=517,I0=518,L0=519,Zc=35044,Ed="300 es",$c=1035,vi=2e3,wa=2001,Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,Ta=180/Math.PI;oe=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],p=i[2],m=i[5],x=i[8],g=s[0],d=s[3],u=s[6],M=s[1],v=s[4],_=s[7],w=s[2],E=s[5],T=s[8];return r[0]=o*g+a*M+l*w,r[3]=o*d+a*v+l*E,r[6]=o*u+a*_+l*T,r[1]=c*g+h*M+f*w,r[4]=c*d+h*v+f*E,r[7]=c*u+h*_+f*T,r[2]=p*g+m*M+x*w,r[5]=p*d+m*v+x*E,r[8]=p*u+m*_+x*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,p=a*l-h*r,m=c*r-o*l,x=t*f+i*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=f*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=p*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(mc.makeScale(e,t)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mc=new tt;wd={};Td=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ad=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ko={[Si]:{transfer:Sa,primaries:Ea,toReference:n=>n,fromReference:n=>n},[vt]:{transfer:xt,primaries:Ea,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sl]:{transfer:Sa,primaries:ba,toReference:n=>n.applyMatrix3(Ad),fromReference:n=>n.applyMatrix3(Td)},[Gh]:{transfer:xt,primaries:ba,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ad),fromReference:n=>n.applyMatrix3(Td).convertLinearToSRGB()}},N0=new Set([Si,sl]),pt={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!N0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ko[e].toReference,s=ko[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ko[n].primaries},getTransfer:function(n){return n===Fn?Sa:ko[n].transfer}};Ra=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Aa("canvas")),Gs.width=e.width,Gs.height=e.height;let i=Gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ur(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},O0=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=yi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(xc(s[o].image)):r.push(xc(s[o]))}else r=xc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};F0=0,zn=class n extends Gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=$n,s=$n,r=On,o=lo,a=Jn,l=Hi,c=n.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=yi(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===vs?vt:Fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?vs:Lf}set encoding(e){io("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vs?vt:Fn}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=bf;zn.DEFAULT_ANISOTROPY=1;wt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],m=l[5],x=l[9],g=l[2],d=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-g)<.01&&Math.abs(x-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+g)<.1&&Math.abs(x+d)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(m+1)/2,w=(u+1)/2,E=(h+p)/4,T=(f+g)/4,z=(x+d)/4;return v>_&&v>w?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=T/i):_>w?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=E/s,r=z/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=T/r,s=z/r),this.set(i,s,r,t),this}let M=Math.sqrt((d-x)*(d-x)+(f-g)*(f-g)+(p-h)*(p-h));return Math.abs(M)<.001&&(M=1),this.x=(d-x)/M,this.y=(f-g)/M,this.z=(p-h)/M,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kc=class extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(io("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===vs?vt:Fn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new zn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Kc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Pa=class extends zn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qc=class extends zn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Mn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],p=r[o+0],m=r[o+1],x=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(f!==g||l!==p||c!==m||h!==x){let d=1-a,u=l*p+c*m+h*x+f*g,M=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let w=Math.sqrt(v),E=Math.atan2(w,u*M);d=Math.sin(d*E)/w,a=Math.sin(a*E)/w}let _=a*M;if(l=l*d+p*_,c=c*d+m*_,h=h*d+x*_,f=f*d+g*_,d===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=w,c*=w,h*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+h*f+l*m-c*p,e[t+1]=l*x+h*p+c*f-a*m,e[t+2]=c*x+h*m+a*p-l*f,e[t+3]=h*x-a*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),p=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*f+c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f-p*m*x;break;case"YXZ":this._x=p*h*f+c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f+p*m*x;break;case"ZXY":this._x=p*h*f-c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f-p*m*x;break;case"ZYX":this._x=p*h*f-c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f+p*m*x;break;case"YZX":this._x=p*h*f+c*m*x,this._y=c*m*f+p*h*x,this._z=c*h*x-p*m*f,this._w=c*h*f-p*m*x;break;case"XZY":this._x=p*h*f-c*m*x,this._y=c*m*f-p*h*x,this._z=c*h*x+p*m*f,this._w=c*h*f+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=i+a+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=i*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new N,Rd=new Mn,Ei=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Go.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Go.copy(i.boundingBox)),Go.applyMatrix4(e.matrixWorld),this.union(Go)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Vo.subVectors(this.max,Yr),Vs.subVectors(e.a,Yr),Ws.subVectors(e.b,Yr),Xs.subVectors(e.c,Yr),Ii.subVectors(Ws,Vs),Li.subVectors(Xs,Ws),cs.subVectors(Vs,Xs);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-cs.z,cs.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,cs.z,0,-cs.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-cs.y,cs.x,0];return!vc(t,Vs,Ws,Xs,Vo)||(t=[1,0,0,0,1,0,0,0,1],!vc(t,Vs,Ws,Xs,Vo))?!1:(Wo.crossVectors(Ii,Li),t=[Wo.x,Wo.y,Wo.z],vc(t,Vs,Ws,Xs,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new N,new N,new N,new N,new N,new N,new N,new N],qn=new N,Go=new Ei,Vs=new N,Ws=new N,Xs=new N,Ii=new N,Li=new N,cs=new N,Yr=new N,Vo=new N,Wo=new N,hs=new N;z0=new Ei,Zr=new N,yc=new N,Vi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):z0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);let t=Zr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(yc)),this.expandByPoint(Zr.copy(e.center).sub(yc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new N,Mc=new N,Xo=new N,Di=new N,Sc=new N,qo=new N,Ec=new N,Ia=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Mc.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Mc);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=Di.dot(this.direction),l=-Di.dot(Xo),c=Di.lengthSq(),h=Math.abs(1-o*o),f,p,m,x;if(h>0)if(f=o*l-a,p=o*a-l,x=r*h,f>=0)if(p>=-x)if(p<=x){let g=1/h;f*=g,p*=g,m=f*(f+o*p+2*a)+p*(o*f+p+2*l)+c}else p=r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Mc).addScaledVector(Xo,p),m}intersectSphere(e,t){di.subVectors(e.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){Sc.subVectors(t,e),qo.subVectors(i,e),Ec.crossVectors(Sc,qo);let o=this.direction.dot(Ec),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);let l=a*this.direction.dot(qo.crossVectors(Di,qo));if(l<0)return null;let c=a*this.direction.dot(Sc.cross(Di));if(c<0||l+c>o)return null;let h=-a*Di.dot(Ec);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ot=class n{constructor(e,t,i,s,r,o,a,l,c,h,f,p,m,x,g,d){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,p,m,x,g,d)}set(e,t,i,s,r,o,a,l,c,h,f,p,m,x,g,d){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=f,u[14]=p,u[3]=m,u[7]=x,u[11]=g,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),o=1/qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*f,x=a*h,g=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+x*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*f,x=c*h,g=c*f;t[0]=p+g*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*f,x=c*h,g=c*f;t[0]=p-g*a,t[4]=-o*f,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*f,x=a*h,g=a*f;t[0]=l*h,t[4]=x*c-m,t[8]=p*c+g,t[1]=l*f,t[5]=g*c+p,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-p*f,t[8]=x*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*f+x,t[10]=p-g*f}else if(e.order==="XZY"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+g,t[5]=o*h,t[9]=m*f-x,t[2]=x*f-m,t[6]=a*h,t[10]=g*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B0,e,H0)}lookAt(e,t,i){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ui.crossVectors(i,Cn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ui.crossVectors(i,Cn)),Ui.normalize(),Yo.crossVectors(Cn,Ui),s[0]=Ui.x,s[4]=Yo.x,s[8]=Cn.x,s[1]=Ui.y,s[5]=Yo.y,s[9]=Cn.y,s[2]=Ui.z,s[6]=Yo.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],p=i[9],m=i[13],x=i[2],g=i[6],d=i[10],u=i[14],M=i[3],v=i[7],_=i[11],w=i[15],E=s[0],T=s[4],z=s[8],y=s[12],S=s[1],I=s[5],B=s[9],H=s[13],P=s[2],A=s[6],D=s[10],O=s[14],L=s[3],k=s[7],X=s[11],q=s[15];return r[0]=o*E+a*S+l*P+c*L,r[4]=o*T+a*I+l*A+c*k,r[8]=o*z+a*B+l*D+c*X,r[12]=o*y+a*H+l*O+c*q,r[1]=h*E+f*S+p*P+m*L,r[5]=h*T+f*I+p*A+m*k,r[9]=h*z+f*B+p*D+m*X,r[13]=h*y+f*H+p*O+m*q,r[2]=x*E+g*S+d*P+u*L,r[6]=x*T+g*I+d*A+u*k,r[10]=x*z+g*B+d*D+u*X,r[14]=x*y+g*H+d*O+u*q,r[3]=M*E+v*S+_*P+w*L,r[7]=M*T+v*I+_*A+w*k,r[11]=M*z+v*B+_*D+w*X,r[15]=M*y+v*H+_*O+w*q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],m=e[14],x=e[3],g=e[7],d=e[11],u=e[15];return x*(+r*l*f-s*c*f-r*a*p+i*c*p+s*a*m-i*l*m)+g*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+d*(+t*c*f-t*a*m-r*o*f+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-t*l*f+t*a*p+s*o*f-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],m=e[11],x=e[12],g=e[13],d=e[14],u=e[15],M=f*d*c-g*p*c+g*l*m-a*d*m-f*l*u+a*p*u,v=x*p*c-h*d*c-x*l*m+o*d*m+h*l*u-o*p*u,_=h*g*c-x*f*c+x*a*m-o*g*m-h*a*u+o*f*u,w=x*f*l-h*g*l-x*a*p+o*g*p+h*a*d-o*f*d,E=t*M+i*v+s*_+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return e[0]=M*T,e[1]=(g*p*r-f*d*r-g*s*m+i*d*m+f*s*u-i*p*u)*T,e[2]=(a*d*r-g*l*r+g*s*c-i*d*c-a*s*u+i*l*u)*T,e[3]=(f*l*r-a*p*r-f*s*c+i*p*c+a*s*m-i*l*m)*T,e[4]=v*T,e[5]=(h*d*r-x*p*r+x*s*m-t*d*m-h*s*u+t*p*u)*T,e[6]=(x*l*r-o*d*r-x*s*c+t*d*c+o*s*u-t*l*u)*T,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*T,e[8]=_*T,e[9]=(x*f*r-h*g*r-x*i*m+t*g*m+h*i*u-t*f*u)*T,e[10]=(o*g*r-x*a*r+x*i*c-t*g*c-o*i*u+t*a*u)*T,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*m-t*a*m)*T,e[12]=w*T,e[13]=(h*g*s-x*f*s+x*i*p-t*g*p-h*i*d+t*f*d)*T,e[14]=(x*a*s-o*g*s-x*i*l+t*g*l+o*i*d-t*a*d)*T,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*p+t*a*p)*T,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,p=r*c,m=r*h,x=r*f,g=o*h,d=o*f,u=a*f,M=l*c,v=l*h,_=l*f,w=i.x,E=i.y,T=i.z;return s[0]=(1-(g+u))*w,s[1]=(m+_)*w,s[2]=(x-v)*w,s[3]=0,s[4]=(m-_)*E,s[5]=(1-(p+u))*E,s[6]=(d+M)*E,s[7]=0,s[8]=(x+v)*T,s[9]=(d-M)*T,s[10]=(1-(p+g))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=qs.set(s[0],s[1],s[2]).length(),o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);let c=1/r,h=1/o,f=1/a;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=vi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s),m,x;if(a===vi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===wa)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vi){let l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),p=(t+e)*c,m=(i+s)*h,x,g;if(a===vi)x=(o+r)*f,g=-2*f;else if(a===wa)x=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},qs=new N,Yn=new ot,B0=new N(0,0,0),H0=new N(1,1,1),Ui=new N,Yo=new N,Cn=new N,Cd=new ot,Pd=new Mn,La=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};La.DEFAULT_ORDER="XYZ";Da=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},k0=0,Id=new N,Ys=new Mn,fi=new ot,Zo=new N,$r=new N,G0=new N,V0=new Mn,Ld=new N(1,0,0),Dd=new N(0,1,0),Ud=new N(0,0,1),W0={type:"added"},X0={type:"removed"},Ft=class n extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new N,t=new La,i=new Mn,s=new N(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new tt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Ud,e)}translateOnAxis(e,t){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zo.copy(e):Zo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt($r,Zo,this.up):fi.lookAt(Zo,$r,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(fi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(W0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,V0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new N(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Zn=new N,pi=new N,bc=new N,mi=new N,Zs=new N,$s=new N,Nd=new N,wc=new N,Tc=new N,Ac=new N,$o=!1,gs=class n{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zn.subVectors(s,t),pi.subVectors(i,t),bc.subVectors(e,t);let o=Zn.dot(Zn),a=Zn.dot(pi),l=Zn.dot(bc),c=pi.dot(pi),h=pi.dot(bc),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getUV(e,t,i,s,r,o,a,l){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,t,i,s){return Zn.subVectors(i,t),pi.subVectors(e,t),Zn.cross(pi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Zn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Zs.subVectors(s,i),$s.subVectors(r,i),wc.subVectors(e,i);let l=Zs.dot(wc),c=$s.dot(wc);if(l<=0&&c<=0)return t.copy(i);Tc.subVectors(e,s);let h=Zs.dot(Tc),f=$s.dot(Tc);if(h>=0&&f<=h)return t.copy(s);let p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Zs,o);Ac.subVectors(e,r);let m=Zs.dot(Ac),x=$s.dot(Ac);if(x>=0&&m<=x)return t.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector($s,a);let d=h*x-m*f;if(d<=0&&f-h>=0&&m-x>=0)return Nd.subVectors(r,s),a=(f-h)/(f-h+(m-x)),t.copy(s).addScaledVector(Nd,a);let u=1/(d+g+p);return o=g*u,a=p*u,t.copy(i).addScaledVector(Zs,o).addScaledVector($s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Jo={h:0,s:0,l:0};Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=D0(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Rc(o,r,e+1/3),this.g=Rc(o,r,e),this.b=Rc(o,r,e-1/3)}return pt.toWorkingColorSpace(this,s),this}setStyle(e,t=vt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let i=Of[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=gc(e.r),this.g=gc(e.g),this.b=gc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return pt.fromWorkingColorSpace(an.copy(this),e),Math.round(Kt(an.r*255,0,255))*65536+Math.round(Kt(an.g*255,0,255))*256+Math.round(Kt(an.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(an.copy(this),t);let i=an.r,s=an.g,r=an.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=vt){pt.fromWorkingColorSpace(an.copy(this),e);let t=an.r,i=an.g,s=an.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Jo);let i=pc(Ni.h,Jo.h,t),s=pc(Ni.s,Jo.s,t),r=pc(Ni.l,Jo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Pe;Pe.NAMES=Of;q0=0,bi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=zi,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Wc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vc&&(i.blendSrc=this.blendSrc),this.blendDst!==Wc&&(i.blendDst=this.blendDst),this.blendEquation!==ps&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ht=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gt=new N,Ko=new oe,ln=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ko.fromBufferAttribute(this,t),Ko.applyMatrix3(e),this.setXY(t,Ko.x,Ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_i(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_i(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_i(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zc&&(e.usage=this.usage),e}},Ua=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Na=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}},at=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},Y0=0,Nn=new ot,Cc=new Ft,Js=new N,Pn=new Ei,Jr=new Ei,Jt=new N,Vt=class n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nf(e)?Na:Ua)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){let i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Jr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Pn.min,Jr.min),Pn.expandByPoint(Jt),Jt.addVectors(Pn.max,Jr.max),Pn.expandByPoint(Jt)):(Pn.expandByPoint(Jr.min),Pn.expandByPoint(Jr.max))}Pn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(Js.fromBufferAttribute(e,c),Jt.add(Js)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new N,h[S]=new N;let f=new N,p=new N,m=new N,x=new oe,g=new oe,d=new oe,u=new N,M=new N;function v(S,I,B){f.fromArray(s,S*3),p.fromArray(s,I*3),m.fromArray(s,B*3),x.fromArray(o,S*2),g.fromArray(o,I*2),d.fromArray(o,B*2),p.sub(f),m.sub(f),g.sub(x),d.sub(x);let H=1/(g.x*d.y-d.x*g.y);isFinite(H)&&(u.copy(p).multiplyScalar(d.y).addScaledVector(m,-g.y).multiplyScalar(H),M.copy(m).multiplyScalar(g.x).addScaledVector(p,-d.x).multiplyScalar(H),c[S].add(u),c[I].add(u),c[B].add(u),h[S].add(M),h[I].add(M),h[B].add(M))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let S=0,I=_.length;S<I;++S){let B=_[S],H=B.start,P=B.count;for(let A=H,D=H+P;A<D;A+=3)v(i[A+0],i[A+1],i[A+2])}let w=new N,E=new N,T=new N,z=new N;function y(S){T.fromArray(r,S*3),z.copy(T);let I=c[S];w.copy(I),w.sub(T.multiplyScalar(T.dot(I))).normalize(),E.crossVectors(z,I);let H=E.dot(h[S])<0?-1:1;l[S*4]=w.x,l[S*4+1]=w.y,l[S*4+2]=w.z,l[S*4+3]=H}for(let S=0,I=_.length;S<I;++S){let B=_[S],H=B.start,P=B.count;for(let A=H,D=H+P;A<D;A+=3)y(i[A+0]),y(i[A+1]),y(i[A+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,f=new N;if(e)for(let p=0,m=e.count;p<m;p+=3){let x=e.getX(p+0),g=e.getX(p+1),d=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,d),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,d),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,f=a.normalized,p=new c.constructor(l.length*h),m=0,x=0;for(let g=0,d=l.length;g<d;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let u=0;u<h;u++)p[x++]=c[m++]}return new ln(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Od=new ot,us=new Ia,Qo=new Vi,Fd=new N,Ks=new N,Qs=new N,js=new N,Pc=new N,jo=new N,ea=new oe,ta=new oe,na=new oe,zd=new N,Bd=new N,Hd=new N,ia=new N,sa=new N,ne=class extends Ft{constructor(e=new Vt,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){jo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(Pc.fromBufferAttribute(f,e),o?jo.addScaledVector(Pc,h):jo.addScaledVector(Pc.sub(t),h))}t.add(jo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(Qo.containsPoint(us.origin)===!1&&(us.intersectSphere(Qo,Fd)===null||us.origin.distanceToSquared(Fd)>(e.far-e.near)**2))&&(Od.copy(r).invert(),us.copy(e.ray).applyMatrix4(Od),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let d=p[x],u=o[d.materialIndex],M=Math.max(d.start,m.start),v=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let _=M,w=v;_<w;_+=3){let E=a.getX(_),T=a.getX(_+1),z=a.getX(_+2);s=ra(this,u,e,i,c,h,f,E,T,z),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let d=x,u=g;d<u;d+=3){let M=a.getX(d),v=a.getX(d+1),_=a.getX(d+2);s=ra(this,o,e,i,c,h,f,M,v,_),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let d=p[x],u=o[d.materialIndex],M=Math.max(d.start,m.start),v=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let _=M,w=v;_<w;_+=3){let E=_,T=_+1,z=_+2;s=ra(this,u,e,i,c,h,f,E,T,z),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let d=x,u=g;d<u;d+=3){let M=d,v=d+1,_=d+2;s=ra(this,o,e,i,c,h,f,M,v,_),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}};Ue=class n extends Vt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],p=0,m=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2));function x(g,d,u,M,v,_,w,E,T,z,y){let S=_/T,I=w/z,B=_/2,H=w/2,P=E/2,A=T+1,D=z+1,O=0,L=0,k=new N;for(let X=0;X<D;X++){let q=X*I-H;for(let te=0;te<A;te++){let G=te*S-B;k[g]=G*M,k[d]=q*v,k[u]=P,c.push(k.x,k.y,k.z),k[g]=0,k[d]=0,k[u]=E>0?1:-1,h.push(k.x,k.y,k.z),f.push(te/T),f.push(1-X/z),O+=1}}for(let X=0;X<z;X++)for(let q=0;q<T;q++){let te=p+q+A*X,G=p+q+A*(X+1),K=p+(q+1)+A*(X+1),de=p+(q+1)+A*X;l.push(te,G,de),l.push(G,K,de),L+=6}a.addGroup(m,L,y),m+=L,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};qi={clone:gr,merge:xn},J0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=J0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gr(e.uniforms),this.uniformsGroups=$0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Oa=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=class extends Oa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},er=-90,tr=1,jc=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(er,tr,e,t);s.layers=this.layers,this.add(s);let r=new tn(er,tr,e,t);r.layers=this.layers,this.add(r);let o=new tn(er,tr,e,t);o.layers=this.layers,this.add(o);let a=new tn(er,tr,e,t);a.layers=this.layers,this.add(a);let l=new tn(er,tr,e,t);l.layers=this.layers,this.add(l);let c=new tn(er,tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Fa=class extends zn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},eh=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(io("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vs?vt:Fn),this.texture=new Fa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:On}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ii});r.uniforms.tEquirect.value=t;let o=new ne(s,r),a=t.minFilter;return t.minFilter===lo&&(t.minFilter=On),new jc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},Ic=new N,Q0=new N,j0=new tt,xi=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ic.subVectors(i,t).cross(Q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ic),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||j0.getNormalMatrix(e),s=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ds=new Vi,oa=new N,co=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,o=new xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],p=s[7],m=s[8],x=s[9],g=s[10],d=s[11],u=s[12],M=s[13],v=s[14],_=s[15];if(i[0].setComponents(l-r,p-c,d-m,_-u).normalize(),i[1].setComponents(l+r,p+c,d+m,_+u).normalize(),i[2].setComponents(l+o,p+h,d+x,_+M).normalize(),i[3].setComponents(l-o,p-h,d-x,_-M).normalize(),i[4].setComponents(l-a,p-f,d-g,_-v).normalize(),t===vi)i[5].setComponents(l+a,p+f,d+g,_+v).normalize();else if(t===wa)i[5].setComponents(a,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};it=class n extends Vt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,p=t/l,m=[],x=[],g=[],d=[];for(let u=0;u<h;u++){let M=u*p-o;for(let v=0;v<c;v++){let _=v*f-r;x.push(_,-M,0),g.push(0,0,1),d.push(v/a),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let M=0;M<a;M++){let v=M+c*u,_=M+c*(u+1),w=M+1+c*(u+1),E=M+1+c*u;m.push(v,_,E),m.push(_,w,E)}this.setIndex(m),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},tg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ng=`#ifdef USE_ALPHAHASH
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
#endif`,ig=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
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
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cg=`#ifdef USE_BATCHING
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
#endif`,hg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ug=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pg=`#ifdef USE_IRIDESCENCE
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
#endif`,mg=`#ifdef USE_BUMPMAP
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
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bg=`#define PI 3.141592653589793
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
} // validated`,wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lg=`
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
}`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gg=`#ifdef USE_GRADIENTMAP
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
}`,Vg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yg=`uniform bool receiveShadow;
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
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,$g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
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
#endif`,ex=`struct PhysicalMaterial {
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
}`,tx=`
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ax=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ux=`#if defined( USE_POINTS_UV )
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
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mx=`#ifdef USE_MORPHNORMALS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
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
#endif`,xx=`#ifdef USE_MORPHTARGETS
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
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ex=`#ifdef USE_NORMALMAP
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
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,Hx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
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
#endif`,$x=`#ifdef USE_TRANSMISSION
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,e_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,t_=`uniform sampler2D t2D;
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
}`,n_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o_=`#include <common>
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
}`,a_=`#if DEPTH_PACKING == 3200
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
}`,l_=`#define DISTANCE
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
}`,c_=`#define DISTANCE
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`uniform float scale;
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
}`,f_=`uniform vec3 diffuse;
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
}`,p_=`#include <common>
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
}`,m_=`uniform vec3 diffuse;
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
}`,g_=`#define LAMBERT
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
}`,x_=`#define LAMBERT
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
}`,__=`#define MATCAP
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
}`,v_=`#define MATCAP
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
}`,y_=`#define NORMAL
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
}`,M_=`#define NORMAL
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
}`,S_=`#define PHONG
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
}`,E_=`#define PHONG
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
}`,b_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
}`,T_=`#define TOON
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
}`,A_=`#define TOON
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
}`,R_=`uniform float size;
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
}`,C_=`uniform vec3 diffuse;
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
}`,P_=`#include <common>
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
}`,I_=`uniform vec3 color;
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
}`,L_=`uniform float rotation;
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
}`,D_=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:tg,alphahash_pars_fragment:ng,alphamap_fragment:ig,alphamap_pars_fragment:sg,alphatest_fragment:rg,alphatest_pars_fragment:og,aomap_fragment:ag,aomap_pars_fragment:lg,batching_pars_vertex:cg,batching_vertex:hg,begin_vertex:ug,beginnormal_vertex:dg,bsdfs:fg,iridescence_fragment:pg,bumpmap_pars_fragment:mg,clipping_planes_fragment:gg,clipping_planes_pars_fragment:xg,clipping_planes_pars_vertex:_g,clipping_planes_vertex:vg,color_fragment:yg,color_pars_fragment:Mg,color_pars_vertex:Sg,color_vertex:Eg,common:bg,cube_uv_reflection_fragment:wg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Ag,displacementmap_vertex:Rg,emissivemap_fragment:Cg,emissivemap_pars_fragment:Pg,colorspace_fragment:Ig,colorspace_pars_fragment:Lg,envmap_fragment:Dg,envmap_common_pars_fragment:Ug,envmap_pars_fragment:Ng,envmap_pars_vertex:Og,envmap_physical_pars_fragment:Zg,envmap_vertex:Fg,fog_vertex:zg,fog_pars_vertex:Bg,fog_fragment:Hg,fog_pars_fragment:kg,gradientmap_pars_fragment:Gg,lightmap_fragment:Vg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:qg,lights_pars_begin:Yg,lights_toon_fragment:$g,lights_toon_pars_fragment:Jg,lights_phong_fragment:Kg,lights_phong_pars_fragment:Qg,lights_physical_fragment:jg,lights_physical_pars_fragment:ex,lights_fragment_begin:tx,lights_fragment_maps:nx,lights_fragment_end:ix,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:ax,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:hx,map_particle_pars_fragment:ux,metalnessmap_fragment:dx,metalnessmap_pars_fragment:fx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:xx,normal_fragment_begin:_x,normal_fragment_maps:vx,normal_pars_fragment:yx,normal_pars_vertex:Mx,normal_vertex:Sx,normalmap_pars_fragment:Ex,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Tx,iridescence_pars_fragment:Ax,opaque_fragment:Rx,packing:Cx,premultiplied_alpha_fragment:Px,project_vertex:Ix,dithering_fragment:Lx,dithering_pars_fragment:Dx,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Fx,shadowmap_vertex:zx,shadowmask_pars_fragment:Bx,skinbase_vertex:Hx,skinning_pars_vertex:kx,skinning_vertex:Gx,skinnormal_vertex:Vx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:qx,tonemapping_pars_fragment:Yx,transmission_fragment:Zx,transmission_pars_fragment:$x,uv_pars_fragment:Jx,uv_pars_vertex:Kx,uv_vertex:Qx,worldpos_vertex:jx,background_vert:e_,background_frag:t_,backgroundCube_vert:n_,backgroundCube_frag:i_,cube_vert:s_,cube_frag:r_,depth_vert:o_,depth_frag:a_,distanceRGBA_vert:l_,distanceRGBA_frag:c_,equirect_vert:h_,equirect_frag:u_,linedashed_vert:d_,linedashed_frag:f_,meshbasic_vert:p_,meshbasic_frag:m_,meshlambert_vert:g_,meshlambert_frag:x_,meshmatcap_vert:__,meshmatcap_frag:v_,meshnormal_vert:y_,meshnormal_frag:M_,meshphong_vert:S_,meshphong_frag:E_,meshphysical_vert:b_,meshphysical_frag:w_,meshtoon_vert:T_,meshtoon_frag:A_,points_vert:R_,points_frag:C_,shadow_vert:P_,shadow_frag:I_,sprite_vert:L_,sprite_frag:D_},ve={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ni={basic:{uniforms:xn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:xn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:xn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:xn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:xn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:xn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:xn([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:xn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:xn([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:xn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:xn([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:xn([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:xn([ve.lights,ve.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ni.physical={uniforms:xn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};aa={r:0,b:0,g:0};xr=class extends Oa{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lr=4,kd=[.125,.215,.35,.446,.526,.582],ms=20,Lc=new xr,Gd=new Pe,Dc=null,Uc=0,Nc=0,fs=(1+Math.sqrt(5))/2,nr=1/fs,Vd=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,fs,nr),new N(0,fs,-nr),new N(nr,0,fs),new N(-nr,0,fs),new N(fs,nr,0),new N(-fs,nr,0)],_r=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Uc,Nc),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Kn,format:Jn,colorSpace:Si,depthBuffer:!1},s=Wd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H_(r)),this._blurMaterial=k_(r,e,t)}return s}_compileMaterial(e){let t=new ne(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,i,s){let a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Gd),h.toneMapping=Bi,h.autoClear=!1;let m=new ht({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),x=new ne(new Ue,m),g=!1,d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,g=!0):(m.color.copy(Gd),g=!0);for(let u=0;u<6;u++){let M=u%3;M===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):M===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;la(s,M*v,u>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=d}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===fr||e.mapping===pr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;la(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vd[(s-1)%Vd.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ne(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ms-1),g=r/x,d=isFinite(r)?1+Math.floor(h*g):ms;d>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ms}`);let u=[],M=0;for(let T=0;T<ms;++T){let z=T/g,y=Math.exp(-z*z/2);u.push(y),T===0?M+=y:T<d&&(M+=2*y)}for(let T=0;T<u.length;T++)u[T]=u[T]/M;p.envMap.value=e.texture,p.samples.value=d,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=x,p.mipInt.value=v-i;let _=this._sizeLods[s],w=3*_*(s>v-lr?s-v+lr:0),E=4*(this._cubeSize-_);la(t,w,E,3*_,2*_),l.setRenderTarget(t),l.render(f,Lc)}};za=class extends zn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:_s,h!==_s&&h!==mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===_s&&(i=Oi),i===void 0&&h===mr&&(i=xs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bf=new zn,Hf=new za(1,1);Hf.compareFunction=Uf;kf=new Pa,Gf=new Qc,Vf=new Fa,Yd=[],Zd=[],$d=new Float32Array(16),Jd=new Float32Array(9),Kd=new Float32Array(4);th=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gv(t.type)}},nh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}},ih=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Oc=/(\w+)(\])?(\[|\.)?/g;dr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Fv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};zv=37297,Bv=0;Zv=/^[ \t]*#include +<([\w\d./]+)>/gm;$v=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;ry=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new oh(e),t.set(e,i)),i}},oh=class{constructor(e){this.id=ry++,this.code=e,this.usedTimes=0}};dy=0;ah=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},lh=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xy=`uniform sampler2D shadow_pass;
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
}`;ch=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sy={type:"move"},so=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let d=t.getJointPose(g,i),u=this._getHandJoint(c,g);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},hh=class extends Gi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,p=null,m=null,x=null,g=t.getContextAttributes(),d=null,u=null,M=[],v=[],_=new oe,w=null,E=new tn;E.layers.enable(1),E.viewport=new wt;let T=new tn;T.layers.enable(2),T.viewport=new wt;let z=[E,T],y=new ch;y.layers.enable(1),y.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let K=M[G];return K===void 0&&(K=new so,M[G]=K),K.getTargetRaySpace()},this.getControllerGrip=function(G){let K=M[G];return K===void 0&&(K=new so,M[G]=K),K.getGripSpace()},this.getHand=function(G){let K=M[G];return K===void 0&&(K=new so,M[G]=K),K.getHandSpace()};function B(G){let K=v.indexOf(G.inputSource);if(K===-1)return;let de=M[K];de!==void 0&&(de.update(G.inputSource,G.frame,c||o),de.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",P);for(let G=0;G<M.length;G++){let K=v[G];K!==null&&(v[G]=null,M[G].disconnect(K))}S=null,I=null,e.setRenderTarget(d),m=null,p=null,f=null,s=null,u=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new vn(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:Hi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let K=null,de=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=g.stencil?mr:_s,de=g.stencil?xs:Oi);let ge={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(ge),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new vn(p.textureWidth,p.textureHeight,{format:Jn,type:Hi,depthTexture:new za(p.textureWidth,p.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let De=e.properties.get(u);De.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(G){for(let K=0;K<G.removed.length;K++){let de=G.removed[K],pe=v.indexOf(de);pe>=0&&(v[pe]=null,M[pe].disconnect(de))}for(let K=0;K<G.added.length;K++){let de=G.added[K],pe=v.indexOf(de);if(pe===-1){for(let De=0;De<M.length;De++)if(De>=v.length){v.push(de),pe=De;break}else if(v[De]===null){v[De]=de,pe=De;break}if(pe===-1)break}let ge=M[pe];ge&&ge.connect(de)}}let A=new N,D=new N;function O(G,K,de){A.setFromMatrixPosition(K.matrixWorld),D.setFromMatrixPosition(de.matrixWorld);let pe=A.distanceTo(D),ge=K.projectionMatrix.elements,De=de.projectionMatrix.elements,ze=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),Be=(ge[9]+1)/ge[5],F=(ge[9]-1)/ge[5],me=(ge[8]-1)/ge[0],j=(De[8]+1)/De[0],ue=ze*me,Q=ze*j,Le=pe/(-me+j),Se=Le*-me;K.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Se),G.translateZ(Le),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let R=ze+Le,b=be+Le,V=ue-Se,le=Q+(pe-Se),re=Be*be/b*R,se=F*be/b*R;G.projectionMatrix.makePerspective(V,le,re,se,R,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function L(G,K){K===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(K.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;y.near=T.near=E.near=G.near,y.far=T.far=E.far=G.far,(S!==y.near||I!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,I=y.far);let K=G.parent,de=y.cameras;L(y,K);for(let pe=0;pe<de.length;pe++)L(de[pe],K);de.length===2?O(y,E,T):y.projectionMatrix.copy(E.projectionMatrix),k(G,y,K)};function k(G,K,de){de===null?G.matrix.copy(K.matrixWorld):(G.matrix.copy(de.matrixWorld),G.matrix.invert(),G.matrix.multiply(K.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(K.projectionMatrix),G.projectionMatrixInverse.copy(K.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ta*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let X=null;function q(G,K){if(h=K.getViewerPose(c||o),x=K,h!==null){let de=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let pe=!1;de.length!==y.cameras.length&&(y.cameras.length=0,pe=!0);for(let ge=0;ge<de.length;ge++){let De=de[ge],ze=null;if(m!==null)ze=m.getViewport(De);else{let Be=f.getViewSubImage(p,De);ze=Be.viewport,ge===0&&(e.setRenderTargetTextures(u,Be.colorTexture,p.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(u))}let be=z[ge];be===void 0&&(be=new tn,be.layers.enable(ge),be.viewport=new wt,z[ge]=be),be.matrix.fromArray(De.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(De.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(ze.x,ze.y,ze.width,ze.height),ge===0&&(y.matrix.copy(be.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),pe===!0&&y.cameras.push(be)}}for(let de=0;de<M.length;de++){let pe=v[de],ge=M[de];pe!==null&&ge!==void 0&&ge.update(pe,K,c||o)}X&&X(G,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),x=null}let te=new zf;te.setAnimationLoop(q),this.setAnimationLoop=function(G){X=G},this.dispose=function(){}}};ho=class{constructor(e={}){let{canvas:t=U0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,d=null,u=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=Bi,this.toneMappingExposure=1;let v=this,_=!1,w=0,E=0,T=null,z=-1,y=null,S=new wt,I=new wt,B=null,H=new Pe(0),P=0,A=t.width,D=t.height,O=1,L=null,k=null,X=new wt(0,0,A,D),q=new wt(0,0,A,D),te=!1,G=new co,K=!1,de=!1,pe=null,ge=new ot,De=new oe,ze=new N,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return T===null?O:1}let F=i;function me(C,W){for(let Z=0;Z<C.length;Z++){let J=C[Z],Y=t.getContext(J,W);if(Y!==null)return Y}return null}try{let C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ee,!1),F===null){let W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),F=me(W,C),F===null)throw me(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let j,ue,Q,Le,Se,R,b,V,le,re,se,Ie,xe,we,Fe,We,ce,Je,Ke,He,Oe,Ae,Ye,rt;function ae(){j=new V_(F),ue=new F_(F,j,e),j.init(ue),Ae=new My(F,j,ue),Q=new vy(F,j,ue),Le=new q_(F),Se=new ay,R=new yy(F,j,Q,Se,ue,Ae,Le),b=new B_(v),V=new G_(v),le=new eg(F,ue),Ye=new N_(F,j,le,ue),re=new W_(F,le,Le,Ye),se=new J_(F,re,le,Le),Ke=new $_(F,ue,R),We=new z_(Se),Ie=new oy(v,b,V,j,ue,Ye,We),xe=new Ey(v,Se),we=new cy,Fe=new my(j,ue),Je=new U_(v,b,V,Q,se,p,l),ce=new _y(v,se,ue),rt=new by(F,Le,ue,Q),He=new O_(F,j,Le,ue),Oe=new X_(F,j,Le,ue),Le.programs=Ie.programs,v.capabilities=ue,v.extensions=j,v.properties=Se,v.renderLists=we,v.shadowMap=ce,v.state=Q,v.info=Le}ae();let he=new hh(v,F);this.xr=he,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=j.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=j.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(A,D,!1))},this.getSize=function(C){return C.set(A,D)},this.setSize=function(C,W,Z=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=C,D=W,t.width=Math.floor(C*O),t.height=Math.floor(W*O),Z===!0&&(t.style.width=C+"px",t.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(A*O,D*O).floor()},this.setDrawingBufferSize=function(C,W,Z){A=C,D=W,O=Z,t.width=Math.floor(C*Z),t.height=Math.floor(W*Z),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(X)},this.setViewport=function(C,W,Z,J){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,W,Z,J),Q.viewport(S.copy(X).multiplyScalar(O).floor())},this.getScissor=function(C){return C.copy(q)},this.setScissor=function(C,W,Z,J){C.isVector4?q.set(C.x,C.y,C.z,C.w):q.set(C,W,Z,J),Q.scissor(I.copy(q).multiplyScalar(O).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(C){Q.setScissorTest(te=C)},this.setOpaqueSort=function(C){L=C},this.setTransparentSort=function(C){k=C},this.getClearColor=function(C){return C.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(C=!0,W=!0,Z=!0){let J=0;if(C){let Y=!1;if(T!==null){let Te=T.texture.format;Y=Te===Pf||Te===Cf||Te===Rf}if(Y){let Te=T.texture.type,Ne=Te===Hi||Te===Oi||Te===kh||Te===xs||Te===Tf||Te===Af,Ge=Je.getClearColor(),Ve=Je.getClearAlpha(),je=Ge.r,Ze=Ge.g,$e=Ge.b;Ne?(m[0]=je,m[1]=Ze,m[2]=$e,m[3]=Ve,F.clearBufferuiv(F.COLOR,0,m)):(x[0]=je,x[1]=Ze,x[2]=$e,x[3]=Ve,F.clearBufferiv(F.COLOR,0,x))}else J|=F.COLOR_BUFFER_BIT}W&&(J|=F.DEPTH_BUFFER_BIT),Z&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),we.dispose(),Fe.dispose(),Se.dispose(),b.dispose(),V.dispose(),se.dispose(),Ye.dispose(),rt.dispose(),Ie.dispose(),he.dispose(),he.removeEventListener("sessionstart",Lt),he.removeEventListener("sessionend",qe),pe&&(pe.dispose(),pe=null),ft.stop()};function $(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let C=Le.autoReset,W=ce.enabled,Z=ce.autoUpdate,J=ce.needsUpdate,Y=ce.type;ae(),Le.autoReset=C,ce.enabled=W,ce.autoUpdate=Z,ce.needsUpdate=J,ce.type=Y}function ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ie(C){let W=C.target;W.removeEventListener("dispose",ie),ye(W)}function ye(C){Ee(C),Se.remove(C)}function Ee(C){let W=Se.get(C).programs;W!==void 0&&(W.forEach(function(Z){Ie.releaseProgram(Z)}),C.isShaderMaterial&&Ie.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Z,J,Y,Te){W===null&&(W=be);let Ne=Y.isMesh&&Y.matrixWorld.determinant()<0,Ge=Ho(C,W,Z,J,Y);Q.setMaterial(J,Ne);let Ve=Z.index,je=1;if(J.wireframe===!0){if(Ve=re.getWireframeAttribute(Z),Ve===void 0)return;je=2}let Ze=Z.drawRange,$e=Z.attributes.position,Ot=Ze.start*je,An=(Ze.start+Ze.count)*je;Te!==null&&(Ot=Math.max(Ot,Te.start*je),An=Math.min(An,(Te.start+Te.count)*je)),Ve!==null?(Ot=Math.max(Ot,0),An=Math.min(An,Ve.count)):$e!=null&&(Ot=Math.max(Ot,0),An=Math.min(An,$e.count));let $t=An-Ot;if($t<0||$t===1/0)return;Ye.setup(Y,J,Ge,Z,Ve);let hi,Rt=He;if(Ve!==null&&(hi=le.get(Ve),Rt=Oe,Rt.setIndex(hi)),Y.isMesh)J.wireframe===!0?(Q.setLineWidth(J.wireframeLinewidth*Be()),Rt.setMode(F.LINES)):Rt.setMode(F.TRIANGLES);else if(Y.isLine){let et=J.linewidth;et===void 0&&(et=1),Q.setLineWidth(et*Be()),Y.isLineSegments?Rt.setMode(F.LINES):Y.isLineLoop?Rt.setMode(F.LINE_LOOP):Rt.setMode(F.LINE_STRIP)}else Y.isPoints?Rt.setMode(F.POINTS):Y.isSprite&&Rt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)Rt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Rt.renderInstances(Ot,$t,Y.count);else if(Z.isInstancedBufferGeometry){let et=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,tc=Math.min(Z.instanceCount,et);Rt.renderInstances(Ot,$t,tc)}else Rt.render(Ot,$t)};function Xe(C,W,Z){C.transparent===!0&&C.side===Ct&&C.forceSinglePass===!1?(C.side=Qt,C.needsUpdate=!0,kt(C,W,Z),C.side=ki,C.needsUpdate=!0,kt(C,W,Z),C.side=Ct):kt(C,W,Z)}this.compile=function(C,W,Z=null){Z===null&&(Z=C),d=Fe.get(Z),d.init(),M.push(d),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),C!==Z&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(d.pushLight(Y),Y.castShadow&&d.pushShadow(Y))}),d.setupLights(v._useLegacyLights);let J=new Set;return C.traverse(function(Y){let Te=Y.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){let Ge=Te[Ne];Xe(Ge,Z,Y),J.add(Ge)}else Xe(Te,Z,Y),J.add(Te)}),M.pop(),d=null,J},this.compileAsync=function(C,W,Z=null){let J=this.compile(C,W,Z);return new Promise(Y=>{function Te(){if(J.forEach(function(Ne){Se.get(Ne).currentProgram.isReady()&&J.delete(Ne)}),J.size===0){Y(C);return}setTimeout(Te,10)}j.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let nt=null;function mt(C){nt&&nt(C)}function Lt(){ft.stop()}function qe(){ft.start()}let ft=new zf;ft.setAnimationLoop(mt),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(C){nt=C,he.setAnimationLoop(C),C===null?ft.stop():ft.start()},he.addEventListener("sessionstart",Lt),he.addEventListener("sessionend",qe),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(W),W=he.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,W,T),d=Fe.get(C,M.length),d.init(),M.push(d),ge.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),G.setFromProjectionMatrix(ge),de=this.localClippingEnabled,K=We.init(this.clippingPlanes,de),g=we.get(C,u.length),g.init(),u.push(g),mn(C,W,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(L,k),this.info.render.frame++,K===!0&&We.beginShadows();let Z=d.state.shadowsArray;if(ce.render(Z,C,W),K===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(g,C),d.setupLights(v._useLegacyLights),W.isArrayCamera){let J=W.cameras;for(let Y=0,Te=J.length;Y<Te;Y++){let Ne=J[Y];Ci(g,C,Ne,Ne.viewport)}}else Ci(g,C,W);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,W),Ye.resetDefaultState(),z=-1,y=null,M.pop(),M.length>0?d=M[M.length-1]:d=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function mn(C,W,Z,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)d.pushLight(C),C.castShadow&&d.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||G.intersectsSprite(C)){J&&ze.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);let Ne=se.update(C),Ge=C.material;Ge.visible&&g.push(C,Ne,Ge,Z,ze.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||G.intersectsObject(C))){let Ne=se.update(C),Ge=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ze.copy(C.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ze.copy(Ne.boundingSphere.center)),ze.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(Ge)){let Ve=Ne.groups;for(let je=0,Ze=Ve.length;je<Ze;je++){let $e=Ve[je],Ot=Ge[$e.materialIndex];Ot&&Ot.visible&&g.push(C,Ne,Ot,Z,ze.z,$e)}}else Ge.visible&&g.push(C,Ne,Ge,Z,ze.z,null)}}let Te=C.children;for(let Ne=0,Ge=Te.length;Ne<Ge;Ne++)mn(Te[Ne],W,Z,J)}function Ci(C,W,Z,J){let Y=C.opaque,Te=C.transmissive,Ne=C.transparent;d.setupLightsView(Z),K===!0&&We.setGlobalState(v.clippingPlanes,Z),Te.length>0&&Pi(Y,Te,W,Z),J&&Q.viewport(S.copy(J)),Y.length>0&&gt(Y,W,Z),Te.length>0&&gt(Te,W,Z),Ne.length>0&&gt(Ne,W,Z),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Pi(C,W,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let Te=ue.isWebGL2;pe===null&&(pe=new vn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")?Kn:Hi,minFilter:lo,samples:Te?4:0})),v.getDrawingBufferSize(De),Te?pe.setSize(De.x,De.y):pe.setSize(Jc(De.x),Jc(De.y));let Ne=v.getRenderTarget();v.setRenderTarget(pe),v.getClearColor(H),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();let Ge=v.toneMapping;v.toneMapping=Bi,gt(C,Z,J),R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe);let Ve=!1;for(let je=0,Ze=W.length;je<Ze;je++){let $e=W[je],Ot=$e.object,An=$e.geometry,$t=$e.material,hi=$e.group;if($t.side===Ct&&Ot.layers.test(J.layers)){let Rt=$t.side;$t.side=Qt,$t.needsUpdate=!0,Et(Ot,Z,J,An,$t,hi),$t.side=Rt,$t.needsUpdate=!0,Ve=!0}}Ve===!0&&(R.updateMultisampleRenderTarget(pe),R.updateRenderTargetMipmap(pe)),v.setRenderTarget(Ne),v.setClearColor(H,P),v.toneMapping=Ge}function gt(C,W,Z){let J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Te=C.length;Y<Te;Y++){let Ne=C[Y],Ge=Ne.object,Ve=Ne.geometry,je=J===null?Ne.material:J,Ze=Ne.group;Ge.layers.test(Z.layers)&&Et(Ge,W,Z,Ve,je,Ze)}}function Et(C,W,Z,J,Y,Te){C.onBeforeRender(v,W,Z,J,Y,Te),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,W,Z,J,C,Te),Y.transparent===!0&&Y.side===Ct&&Y.forceSinglePass===!1?(Y.side=Qt,Y.needsUpdate=!0,v.renderBufferDirect(Z,W,J,Y,C,Te),Y.side=ki,Y.needsUpdate=!0,v.renderBufferDirect(Z,W,J,Y,C,Te),Y.side=Ct):v.renderBufferDirect(Z,W,J,Y,C,Te),C.onAfterRender(v,W,Z,J,Y,Te)}function kt(C,W,Z){W.isScene!==!0&&(W=be);let J=Se.get(C),Y=d.state.lights,Te=d.state.shadowsArray,Ne=Y.state.version,Ge=Ie.getParameters(C,Y.state,Te,W,Z),Ve=Ie.getProgramCacheKey(Ge),je=J.programs;J.environment=C.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(C.isMeshStandardMaterial?V:b).get(C.envMap||J.environment),je===void 0&&(C.addEventListener("dispose",ie),je=new Map,J.programs=je);let Ze=je.get(Ve);if(Ze!==void 0){if(J.currentProgram===Ze&&J.lightsStateVersion===Ne)return Vr(C,Ge),Ze}else Ge.uniforms=Ie.getUniforms(C),C.onBuild(Z,Ge,v),C.onBeforeCompile(Ge,v),Ze=Ie.acquireProgram(Ge,Ve),je.set(Ve,Ze),J.uniforms=Ge.uniforms;let $e=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=We.uniform),Vr(C,Ge),J.needsLights=Xr(C),J.lightsStateVersion=Ne,J.needsLights&&($e.ambientLightColor.value=Y.state.ambient,$e.lightProbe.value=Y.state.probe,$e.directionalLights.value=Y.state.directional,$e.directionalLightShadows.value=Y.state.directionalShadow,$e.spotLights.value=Y.state.spot,$e.spotLightShadows.value=Y.state.spotShadow,$e.rectAreaLights.value=Y.state.rectArea,$e.ltc_1.value=Y.state.rectAreaLTC1,$e.ltc_2.value=Y.state.rectAreaLTC2,$e.pointLights.value=Y.state.point,$e.pointLightShadows.value=Y.state.pointShadow,$e.hemisphereLights.value=Y.state.hemi,$e.directionalShadowMap.value=Y.state.directionalShadowMap,$e.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,$e.spotShadowMap.value=Y.state.spotShadowMap,$e.spotLightMatrix.value=Y.state.spotLightMatrix,$e.spotLightMap.value=Y.state.spotLightMap,$e.pointShadowMap.value=Y.state.pointShadowMap,$e.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Ze,J.uniformsList=null,Ze}function Hs(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=dr.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Vr(C,W){let Z=Se.get(C);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Ho(C,W,Z,J,Y){W.isScene!==!0&&(W=be),R.resetTextureUnits();let Te=W.fog,Ne=J.isMeshStandardMaterial?W.environment:null,Ge=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Si,Ve=(J.isMeshStandardMaterial?V:b).get(J.envMap||Ne),je=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ze=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),$e=!!Z.morphAttributes.position,Ot=!!Z.morphAttributes.normal,An=!!Z.morphAttributes.color,$t=Bi;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&($t=v.toneMapping);let hi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Rt=hi!==void 0?hi.length:0,et=Se.get(J),tc=d.state.lights;if(K===!0&&(de===!0||C!==y)){let Un=C===y&&J.id===z;We.setState(J,C,Un)}let Dt=!1;J.version===et.__version?(et.needsLights&&et.lightsStateVersion!==tc.state.version||et.outputColorSpace!==Ge||Y.isBatchedMesh&&et.batching===!1||!Y.isBatchedMesh&&et.batching===!0||Y.isInstancedMesh&&et.instancing===!1||!Y.isInstancedMesh&&et.instancing===!0||Y.isSkinnedMesh&&et.skinning===!1||!Y.isSkinnedMesh&&et.skinning===!0||Y.isInstancedMesh&&et.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&et.instancingColor===!1&&Y.instanceColor!==null||et.envMap!==Ve||J.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==We.numPlanes||et.numIntersection!==We.numIntersection)||et.vertexAlphas!==je||et.vertexTangents!==Ze||et.morphTargets!==$e||et.morphNormals!==Ot||et.morphColors!==An||et.toneMapping!==$t||ue.isWebGL2===!0&&et.morphTargetsCount!==Rt)&&(Dt=!0):(Dt=!0,et.__version=J.version);let as=et.currentProgram;Dt===!0&&(as=kt(J,W,Y));let Hu=!1,qr=!1,nc=!1,rn=as.getUniforms(),ls=et.uniforms;if(Q.useProgram(as.program)&&(Hu=!0,qr=!0,nc=!0),J.id!==z&&(z=J.id,qr=!0),Hu||y!==C){rn.setValue(F,"projectionMatrix",C.projectionMatrix),rn.setValue(F,"viewMatrix",C.matrixWorldInverse);let Un=rn.map.cameraPosition;Un!==void 0&&Un.setValue(F,ze.setFromMatrixPosition(C.matrixWorld)),ue.logarithmicDepthBuffer&&rn.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&rn.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),y!==C&&(y=C,qr=!0,nc=!0)}if(Y.isSkinnedMesh){rn.setOptional(F,Y,"bindMatrix"),rn.setOptional(F,Y,"bindMatrixInverse");let Un=Y.skeleton;Un&&(ue.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),rn.setValue(F,"boneTexture",Un.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(rn.setOptional(F,Y,"batchingTexture"),rn.setValue(F,"batchingTexture",Y._matricesTexture,R));let ic=Z.morphAttributes;if((ic.position!==void 0||ic.normal!==void 0||ic.color!==void 0&&ue.isWebGL2===!0)&&Ke.update(Y,Z,as),(qr||et.receiveShadow!==Y.receiveShadow)&&(et.receiveShadow=Y.receiveShadow,rn.setValue(F,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ls.envMap.value=Ve,ls.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),qr&&(rn.setValue(F,"toneMappingExposure",v.toneMappingExposure),et.needsLights&&Wr(ls,nc),Te&&J.fog===!0&&xe.refreshFogUniforms(ls,Te),xe.refreshMaterialUniforms(ls,J,O,D,pe),dr.upload(F,Hs(et),ls,R)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(dr.upload(F,Hs(et),ls,R),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&rn.setValue(F,"center",Y.center),rn.setValue(F,"modelViewMatrix",Y.modelViewMatrix),rn.setValue(F,"normalMatrix",Y.normalMatrix),rn.setValue(F,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Un=J.uniformsGroups;for(let sc=0,Fm=Un.length;sc<Fm;sc++)if(ue.isWebGL2){let ku=Un[sc];rt.update(ku,as),rt.bind(ku,as)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return as}function Wr(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Xr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,W,Z){Se.get(C.texture).__webglTexture=W,Se.get(C.depthTexture).__webglTexture=Z;let J=Se.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,W){let Z=Se.get(C);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Z=0){T=C,w=W,E=Z;let J=!0,Y=null,Te=!1,Ne=!1;if(C){let Ve=Se.get(C);Ve.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(F.FRAMEBUFFER,null),J=!1):Ve.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ve.__hasExternalTextures&&R.rebindTextures(C,Se.get(C.texture).__webglTexture,Se.get(C.depthTexture).__webglTexture);let je=C.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ne=!0);let Ze=Se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?Y=Ze[W][Z]:Y=Ze[W],Te=!0):ue.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?Y=Se.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?Y=Ze[Z]:Y=Ze,S.copy(C.viewport),I.copy(C.scissor),B=C.scissorTest}else S.copy(X).multiplyScalar(O).floor(),I.copy(q).multiplyScalar(O).floor(),B=te;if(Q.bindFramebuffer(F.FRAMEBUFFER,Y)&&ue.drawBuffers&&J&&Q.drawBuffers(C,Y),Q.viewport(S),Q.scissor(I),Q.setScissorTest(B),Te){let Ve=Se.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ve.__webglTexture,Z)}else if(Ne){let Ve=Se.get(C.texture),je=W||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.__webglTexture,Z||0,je)}z=-1},this.readRenderTargetPixels=function(C,W,Z,J,Y,Te,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ge=Ge[Ne]),Ge){Q.bindFramebuffer(F.FRAMEBUFFER,Ge);try{let Ve=C.texture,je=Ve.format,Ze=Ve.type;if(je!==Jn&&Ae.convert(je)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=Ze===Kn&&(j.has("EXT_color_buffer_half_float")||ue.isWebGL2&&j.has("EXT_color_buffer_float"));if(Ze!==Hi&&Ae.convert(Ze)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Fi&&(ue.isWebGL2||j.has("OES_texture_float")||j.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&Z>=0&&Z<=C.height-Y&&F.readPixels(W,Z,J,Y,Ae.convert(je),Ae.convert(Ze),Te)}finally{let Ve=T!==null?Se.get(T).__webglFramebuffer:null;Q.bindFramebuffer(F.FRAMEBUFFER,Ve)}}},this.copyFramebufferToTexture=function(C,W,Z=0){let J=Math.pow(2,-Z),Y=Math.floor(W.image.width*J),Te=Math.floor(W.image.height*J);R.setTexture2D(W,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,C.x,C.y,Y,Te),Q.unbindTexture()},this.copyTextureToTexture=function(C,W,Z,J=0){let Y=W.image.width,Te=W.image.height,Ne=Ae.convert(Z.format),Ge=Ae.convert(Z.type);R.setTexture2D(Z,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,J,C.x,C.y,Y,Te,Ne,Ge,W.image.data):W.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,J,C.x,C.y,W.mipmaps[0].width,W.mipmaps[0].height,Ne,W.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,J,C.x,C.y,Ne,Ge,W.image),J===0&&Z.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Z,J,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,Ge=C.max.z-C.min.z+1,Ve=Ae.convert(J.format),je=Ae.convert(J.type),Ze;if(J.isData3DTexture)R.setTexture3D(J,0),Ze=F.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)R.setTexture2DArray(J,0),Ze=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,J.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,J.unpackAlignment);let $e=F.getParameter(F.UNPACK_ROW_LENGTH),Ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),An=F.getParameter(F.UNPACK_SKIP_PIXELS),$t=F.getParameter(F.UNPACK_SKIP_ROWS),hi=F.getParameter(F.UNPACK_SKIP_IMAGES),Rt=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Rt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,C.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,C.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?F.texSubImage3D(Ze,Y,W.x,W.y,W.z,Te,Ne,Ge,Ve,je,Rt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ze,Y,W.x,W.y,W.z,Te,Ne,Ge,Ve,Rt.data)):F.texSubImage3D(Ze,Y,W.x,W.y,W.z,Te,Ne,Ge,Ve,je,Rt),F.pixelStorei(F.UNPACK_ROW_LENGTH,$e),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,An),F.pixelStorei(F.UNPACK_SKIP_ROWS,$t),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hi),Y===0&&J.generateMipmaps&&F.generateMipmap(Ze),Q.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Q.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,Q.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Gh?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===sl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?vs:Lf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vs?vt:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},uh=class extends ho{};uh.prototype.isWebGL1Renderer=!0;Ba=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vr=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},dh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Zc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},gn=new N,Ha=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_i(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_i(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_i(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_i(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ys=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kr=new N,sr=new N,rr=new N,or=new oe,Qr=new oe,Wf=new ot,ca=new N,jr=new N,ha=new N,cf=new oe,Fc=new oe,hf=new oe,yr=class extends Ft{constructor(e=new ys){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new Vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dh(t,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new Ha(i,3,0,!1)),ir.setAttribute("uv",new Ha(i,2,3,!1))}this.geometry=ir,this.material=e,this.center=new oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),Wf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ua(ca.set(-.5,-.5,0),rr,o,sr,s,r),ua(jr.set(.5,-.5,0),rr,o,sr,s,r),ua(ha.set(.5,.5,0),rr,o,sr,s,r),cf.set(0,0),Fc.set(1,0),hf.set(1,1);let a=e.ray.intersectTriangle(ca,jr,ha,!1,Kr);if(a===null&&(ua(jr.set(-.5,.5,0),rr,o,sr,s,r),Fc.set(0,1),a=e.ray.intersectTriangle(ca,ha,jr,!1,Kr),a===null))return;let l=e.ray.origin.distanceTo(Kr);l<e.near||l>e.far||t.push({distance:l,point:Kr.clone(),uv:gs.getInterpolation(Kr,ca,jr,ha,cf,Fc,hf,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};ka=class extends ln{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ar=new ot,uf=new ot,da=[],df=new Ei,wy=new ot,eo=new ne,to=new Vi,Tt=class extends ne{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),df.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),to.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(to)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(eo.geometry=this.geometry,eo.material=this.material,eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),to.copy(this.boundingSphere),to.applyMatrix4(i),e.ray.intersectsSphere(to)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),uf.multiplyMatrices(i,ar),eo.matrixWorld=uf,eo.raycast(e,da);for(let o=0,a=da.length;o<a;o++){let l=da[o];l.instanceId=r,l.object=this,t.push(l)}da.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},uo=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ff=new ot,fh=new Ia,fa=new Vi,pa=new N,Ga=class extends Ft{constructor(e=new Vt,t=new uo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fa.copy(i.boundingSphere),fa.applyMatrix4(s),fa.radius+=r,e.ray.intersectsSphere(fa)===!1)return;ff.copy(s).invert(),fh.copy(e.ray).applyMatrix4(ff);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=p,g=m;x<g;x++){let d=c.getX(x);pa.fromBufferAttribute(f,d),pf(pa,d,l,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let x=p,g=m;x<g;x++)pa.fromBufferAttribute(f,x),pf(pa,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};cn=class extends zn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new N,s=[],r=[],o=[],a=new N,l=new ot;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Kt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Kt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fo=class extends Bn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new oe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*f+this.aX,c=p*f+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ph=class extends fo{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};ma=new N,zc=new Wh,Bc=new Wh,Hc=new Wh,mh=class extends Bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new N){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ma.subVectors(s[0],s[1]).add(s[0]),c=ma);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ma.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ma),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);g<1e-4&&(g=1),x<1e-4&&(x=g),d<1e-4&&(d=g),zc.initNonuniformCatmullRom(c.x,f.x,p.x,h.x,x,g,d),Bc.initNonuniformCatmullRom(c.y,f.y,p.y,h.y,x,g,d),Hc.initNonuniformCatmullRom(c.z,f.z,p.z,h.z,x,g,d)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(c.x,f.x,p.x,h.x,this.tension),Bc.initCatmullRom(c.y,f.y,p.y,h.y,this.tension),Hc.initCatmullRom(c.z,f.z,p.z,h.z,this.tension));return i.set(zc.calc(l),Bc.calc(l),Hc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Va=class extends Bn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oo(e,s.x,r.x,o.x,a.x),oo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gh=class extends Bn{constructor(e=new N,t=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(oo(e,s.x,r.x,o.x,a.x),oo(e,s.y,r.y,o.y,a.y),oo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wa=class extends Bn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xh=class extends Bn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Bn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ro(e,s.x,r.x,o.x),ro(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_h=class extends Bn{constructor(e=new N,t=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new N){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ro(e,s.x,r.x,o.x),ro(e,s.y,r.y,o.y),ro(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(mf(a,l.x,c.x,h.x,f.x),mf(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},vh=Object.freeze({__proto__:null,ArcCurve:ph,CatmullRomCurve3:mh,CubicBezierCurve:Va,CubicBezierCurve3:gh,EllipseCurve:fo,LineCurve:Wa,LineCurve3:xh,QuadraticBezierCurve:Xa,QuadraticBezierCurve3:_h,SplineCurve:qa}),yh=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vh[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new vh[s.type]().fromJSON(s))}return this}},Ms=class extends yh{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Wa(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Xa(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Va(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new qa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new fo(e,t,i,s,r,o,a,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mh=class n extends Vt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Kt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,f=new N,p=new oe,m=new N,x=new N,g=new N,d=0,u=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:d=e[M+1].x-e[M].x,u=e[M+1].y-e[M].y,m.x=u*1,m.y=-d,m.z=u*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:d=e[M+1].x-e[M].x,u=e[M+1].y-e[M].y,m.x=u*1,m.y=-d,m.z=u*0,x.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(x)}for(let M=0;M<=t;M++){let v=i+M*h*s,_=Math.sin(v),w=Math.cos(v);for(let E=0;E<=e.length-1;E++){f.x=e[E].x*_,f.y=e[E].y,f.z=e[E].x*w,o.push(f.x,f.y,f.z),p.x=M/t,p.y=E/(e.length-1),a.push(p.x,p.y);let T=l[3*E+0]*_,z=l[3*E+1],y=l[3*E+0]*w;c.push(T,z,y)}}for(let M=0;M<t;M++)for(let v=0;v<e.length-1;v++){let _=v+M*e.length,w=_,E=_+e.length,T=_+e.length+1,z=_+1;r.push(w,E,z),r.push(T,z,E)}this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("uv",new at(a,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ya=class n extends Mh{constructor(e=1,t=1,i=4,s=8){let r=new Ms;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Mr=class n extends Vt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new N,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let m=i+f/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class n extends Vt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],m=[],x=0,g=[],d=i/2,u=0;M(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(p,3)),this.setAttribute("uv",new at(m,2));function M(){let _=new N,w=new N,E=0,T=(t-e)/i;for(let z=0;z<=r;z++){let y=[],S=z/r,I=S*(t-e)+e;for(let B=0;B<=s;B++){let H=B/s,P=H*l+a,A=Math.sin(P),D=Math.cos(P);w.x=I*A,w.y=-S*i+d,w.z=I*D,f.push(w.x,w.y,w.z),_.set(A,T,D).normalize(),p.push(_.x,_.y,_.z),m.push(H,1-S),y.push(x++)}g.push(y)}for(let z=0;z<s;z++)for(let y=0;y<r;y++){let S=g[y][z],I=g[y+1][z],B=g[y+1][z+1],H=g[y][z+1];h.push(S,I,H),h.push(I,B,H),E+=6}c.addGroup(u,E,0),u+=E}function v(_){let w=x,E=new oe,T=new N,z=0,y=_===!0?e:t,S=_===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,d*S,0),p.push(0,S,0),m.push(.5,.5),x++;let I=x;for(let B=0;B<=s;B++){let P=B/s*l+a,A=Math.cos(P),D=Math.sin(P);T.x=y*D,T.y=d*S,T.z=y*A,f.push(T.x,T.y,T.z),p.push(0,S,0),E.x=A*.5+.5,E.y=D*.5*S+.5,m.push(E.x,E.y),x++}for(let B=0;B<s;B++){let H=w+B,P=I+B;_===!0?h.push(P,P+1,H):h.push(P+1,P,H),z+=3}c.addGroup(u,z,_===!0?1:2),u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Sr=class n extends yt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},po=class extends Ms{constructor(e){super(e),this.uuid=yi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ms().fromJSON(s))}return this}},Dy={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Xf(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,p,m;if(i&&(r=zy(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let x=t;x<s;x+=t)f=n[x],p=n[x+1],f<a&&(a=f),p<l&&(l=p),f>c&&(c=f),p>h&&(h=p);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return mo(r,o,t,a,l,m,0),o}};ao=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];xf(e),_f(i,e);let o=e.length;t.forEach(xf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,_f(i,t[l]);let a=Dy.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Za=class n extends Vt{constructor(e=new po([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,d=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:Jy,v,_=!1,w,E,T,z;u&&(v=u.getSpacedPoints(h),_=!0,p=!1,w=u.computeFrenetFrames(h,!1),E=new N,T=new N,z=new N),p||(d=0,m=0,x=0,g=0);let y=a.extractPoints(c),S=y.shape,I=y.holes;if(!ao.isClockWise(S)){S=S.reverse();for(let F=0,me=I.length;F<me;F++){let j=I[F];ao.isClockWise(j)&&(I[F]=j.reverse())}}let H=ao.triangulateShape(S,I),P=S;for(let F=0,me=I.length;F<me;F++){let j=I[F];S=S.concat(j)}function A(F,me,j){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(me,j)}let D=S.length,O=H.length;function L(F,me,j){let ue,Q,Le,Se=F.x-me.x,R=F.y-me.y,b=j.x-F.x,V=j.y-F.y,le=Se*Se+R*R,re=Se*V-R*b;if(Math.abs(re)>Number.EPSILON){let se=Math.sqrt(le),Ie=Math.sqrt(b*b+V*V),xe=me.x-R/se,we=me.y+Se/se,Fe=j.x-V/Ie,We=j.y+b/Ie,ce=((Fe-xe)*V-(We-we)*b)/(Se*V-R*b);ue=xe+Se*ce-F.x,Q=we+R*ce-F.y;let Je=ue*ue+Q*Q;if(Je<=2)return new oe(ue,Q);Le=Math.sqrt(Je/2)}else{let se=!1;Se>Number.EPSILON?b>Number.EPSILON&&(se=!0):Se<-Number.EPSILON?b<-Number.EPSILON&&(se=!0):Math.sign(R)===Math.sign(V)&&(se=!0),se?(ue=-R,Q=Se,Le=Math.sqrt(le)):(ue=Se,Q=R,Le=Math.sqrt(le/2))}return new oe(ue/Le,Q/Le)}let k=[];for(let F=0,me=P.length,j=me-1,ue=F+1;F<me;F++,j++,ue++)j===me&&(j=0),ue===me&&(ue=0),k[F]=L(P[F],P[j],P[ue]);let X=[],q,te=k.concat();for(let F=0,me=I.length;F<me;F++){let j=I[F];q=[];for(let ue=0,Q=j.length,Le=Q-1,Se=ue+1;ue<Q;ue++,Le++,Se++)Le===Q&&(Le=0),Se===Q&&(Se=0),q[ue]=L(j[ue],j[Le],j[Se]);X.push(q),te=te.concat(q)}for(let F=0;F<d;F++){let me=F/d,j=m*Math.cos(me*Math.PI/2),ue=x*Math.sin(me*Math.PI/2)+g;for(let Q=0,Le=P.length;Q<Le;Q++){let Se=A(P[Q],k[Q],ue);ge(Se.x,Se.y,-j)}for(let Q=0,Le=I.length;Q<Le;Q++){let Se=I[Q];q=X[Q];for(let R=0,b=Se.length;R<b;R++){let V=A(Se[R],q[R],ue);ge(V.x,V.y,-j)}}}let G=x+g;for(let F=0;F<D;F++){let me=p?A(S[F],te[F],G):S[F];_?(T.copy(w.normals[0]).multiplyScalar(me.x),E.copy(w.binormals[0]).multiplyScalar(me.y),z.copy(v[0]).add(T).add(E),ge(z.x,z.y,z.z)):ge(me.x,me.y,0)}for(let F=1;F<=h;F++)for(let me=0;me<D;me++){let j=p?A(S[me],te[me],G):S[me];_?(T.copy(w.normals[F]).multiplyScalar(j.x),E.copy(w.binormals[F]).multiplyScalar(j.y),z.copy(v[F]).add(T).add(E),ge(z.x,z.y,z.z)):ge(j.x,j.y,f/h*F)}for(let F=d-1;F>=0;F--){let me=F/d,j=m*Math.cos(me*Math.PI/2),ue=x*Math.sin(me*Math.PI/2)+g;for(let Q=0,Le=P.length;Q<Le;Q++){let Se=A(P[Q],k[Q],ue);ge(Se.x,Se.y,f+j)}for(let Q=0,Le=I.length;Q<Le;Q++){let Se=I[Q];q=X[Q];for(let R=0,b=Se.length;R<b;R++){let V=A(Se[R],q[R],ue);_?ge(V.x,V.y+v[h-1].y,v[h-1].x+j):ge(V.x,V.y,f+j)}}}K(),de();function K(){let F=s.length/3;if(p){let me=0,j=D*me;for(let ue=0;ue<O;ue++){let Q=H[ue];De(Q[2]+j,Q[1]+j,Q[0]+j)}me=h+d*2,j=D*me;for(let ue=0;ue<O;ue++){let Q=H[ue];De(Q[0]+j,Q[1]+j,Q[2]+j)}}else{for(let me=0;me<O;me++){let j=H[me];De(j[2],j[1],j[0])}for(let me=0;me<O;me++){let j=H[me];De(j[0]+D*h,j[1]+D*h,j[2]+D*h)}}i.addGroup(F,s.length/3-F,0)}function de(){let F=s.length/3,me=0;pe(P,me),me+=P.length;for(let j=0,ue=I.length;j<ue;j++){let Q=I[j];pe(Q,me),me+=Q.length}i.addGroup(F,s.length/3-F,1)}function pe(F,me){let j=F.length;for(;--j>=0;){let ue=j,Q=j-1;Q<0&&(Q=F.length-1);for(let Le=0,Se=h+d*2;Le<Se;Le++){let R=D*Le,b=D*(Le+1),V=me+ue+R,le=me+Q+R,re=me+Q+b,se=me+ue+b;ze(V,le,re,se)}}}function ge(F,me,j){l.push(F),l.push(me),l.push(j)}function De(F,me,j){be(F),be(me),be(j);let ue=s.length/3,Q=M.generateTopUV(i,s,ue-3,ue-2,ue-1);Be(Q[0]),Be(Q[1]),Be(Q[2])}function ze(F,me,j,ue){be(F),be(me),be(ue),be(me),be(j),be(ue);let Q=s.length/3,Le=M.generateSideWallUV(i,s,Q-6,Q-3,Q-2,Q-1);Be(Le[0]),Be(Le[1]),Be(Le[3]),Be(Le[1]),Be(Le[2]),Be(Le[3])}function be(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Be(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ky(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new vh[s.type]().fromJSON(s)),new n(i,e.options)}},Jy={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2],g=e[r*3],d=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-f),new oe(p,1-x),new oe(g,1-u)]:[new oe(a,1-l),new oe(h,1-f),new oe(m,1-x),new oe(d,1-u)]}};Wi=class n extends Vt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],f=e,p=(t-e)/s,m=new N,x=new oe;for(let g=0;g<=s;g++){for(let d=0;d<=i;d++){let u=r+d/i*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}f+=p}for(let g=0;g<s;g++){let d=g*(i+1);for(let u=0;u<i;u++){let M=u+d,v=M,_=M+i+1,w=M+i+2,E=M+1;a.push(v,_,E),a.push(_,w,E)}}this.setIndex(a),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},en=class n extends Vt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],f=new N,p=new N,m=[],x=[],g=[],d=[];for(let u=0;u<=i;u++){let M=[],v=u/i,_=0;u===0&&o===0?_=.5/t:u===i&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let E=w/t;f.x=-e*Math.cos(s+E*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+E*r)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),p.copy(f).normalize(),g.push(p.x,p.y,p.z),d.push(E+_,1-v),M.push(c++)}h.push(M)}for(let u=0;u<i;u++)for(let M=0;M<t;M++){let v=h[u][M+1],_=h[u][M],w=h[u+1][M],E=h[u+1][M+1];(u!==0||o>0)&&m.push(v,_,E),(u!==i-1||l<Math.PI)&&m.push(_,w,E)}this.setIndex(m),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(g,3)),this.setAttribute("uv",new at(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},$a=class n extends Vt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new N,f=new N,p=new N;for(let m=0;m<=i;m++)for(let x=0;x<=s;x++){let g=x/s*r,d=m/i*Math.PI*2;f.x=(e+t*Math.cos(d))*Math.cos(g),f.y=(e+t*Math.cos(d))*Math.sin(g),f.z=t*Math.sin(d),a.push(f.x,f.y,f.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(f,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=s;x++){let g=(s+1)*m+x-1,d=(s+1)*(m-1)+x-1,u=(s+1)*(m-1)+x,M=(s+1)*m+x;o.push(g,d,M),o.push(d,u,M)}this.setIndex(o),this.setAttribute("position",new at(a,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ja=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Me=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xi=class extends Me{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};Er=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},bh=class extends Er{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vd,endingEnd:vd}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case yd:r=e,a=2*t-i;break;case Md:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yd:o=e,l=2*i-t;break;case Md:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),g=x*x,d=g*x,u=-p*d+2*p*g-p*x,M=(1+p)*d+(-1.5-2*p)*g+(-.5+p)*x+1,v=(-1-m)*d+(1.5+m)*g+.5*x,_=m*d-m*g;for(let w=0;w!==a;++w)r[w]=u*o[h+w]+M*o[c+w]+v*o[l+w]+_*o[f+w];return r}},wh=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*f+o[l+p]*h;return r}},Th=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Qn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_a(t,this.TimeBufferType),this.values=_a(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_a(e.times,Array),values:_a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Qy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===dc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let f=a*i,p=f-i,m=f+i;for(let x=0;x!==i;++x){let g=t[f+x];if(g!==t[p+x]||g!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let f=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[f+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Ma;Es=class extends Qn{};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=ya;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;Ah=class extends Qn{};Ah.prototype.ValueTypeName="color";Rh=class extends Qn{};Rh.prototype.ValueTypeName="number";Ch=class extends Er{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},_o=class extends Qn{InterpolantFactoryMethodLinear(e){return new Ch(this.times,this.values,this.getValueSize(),e)}};_o.prototype.ValueTypeName="quaternion";_o.prototype.DefaultInterpolation=Ma;_o.prototype.InterpolantFactoryMethodSmooth=void 0;bs=class extends Qn{};bs.prototype.ValueTypeName="string";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=ya;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;Ph=class extends Qn{};Ph.prototype.ValueTypeName="vector";Ih=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],x=c[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},jy=new Ih,Lh=class{constructor(e){this.manager=e!==void 0?e:jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Lh.DEFAULT_MATERIAL_NAME="__DEFAULT";br=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ka=class extends br{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kc=new ot,vf=new N,yf=new N,vo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new co,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(vf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dh=class extends vo{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=Ta*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Qa=class extends br{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Dh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Mf=new ot,no=new N,Gc=new N,Uh=class extends vo{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),i.position.copy(no),Gc.copy(i.position),Gc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Gc),i.updateMatrixWorld(),s.makeTranslation(-no.x,-no.y,-no.z),Mf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}},ja=class extends br{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Nh=class extends vo{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},el=class extends br{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},tl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Sf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Xh="\\[\\]\\.:\\/",eM=new RegExp("["+Xh+"]","g"),qh="[^"+Xh+"]",tM="[^"+Xh.replace("\\.","")+"]",nM=/((?:WC+[\/:])*)/.source.replace("WC",qh),iM=/(WCOD+)?/.source.replace("WCOD",tM),sM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qh),rM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qh),oM=new RegExp("^"+nM+iM+sM+rM+"$"),aM=["material","materials","bones","map"],Oh=class{constructor(e,t,i){let s=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(eM,"")}static parseTrackName(e){let t=oM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);aM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Oh;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];gE=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var tm={};rc(tm,{RoomEnvironment:()=>xu});function Lr(n){let e=new ht;return e.color.setScalar(n),e}var xu,nm=Rn(()=>{It();xu=class extends vr{constructor(e=null){super();let t=new Ue;t.deleteAttribute("uv");let i=new Me({side:Qt}),s=new Me,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new ja(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new ne(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new ne(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new ne(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new ne(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let f=new ne(t,s);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let p=new ne(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let m=new ne(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let x=new ne(t,Lr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let g=new ne(t,Lr(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);let d=new ne(t,Lr(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);let u=new ne(t,Lr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let M=new ne(t,Lr(20));M.position.set(3.235,11.486,-12.541),M.scale.set(2.5,2,.1),this.add(M);let v=new ne(t,Lr(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var Il,_u=Rn(()=>{Il={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var In,zS,vu,BS,Qi,Dr=Rn(()=>{It();In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zS=new xr(-1,1,1,-1,0,1),vu=class extends Vt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},BS=new vu,Qi=class{constructor(e){this._mesh=new ne(BS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var Ur,yu=Rn(()=>{It();Dr();Ur=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qi.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Qi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Lo,Ll,Mu=Rn(()=>{Dr();Lo=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ll=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Dl,im=Rn(()=>{It();_u();yu();Mu();Mu();Dl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new oe);this._width=i.width,this._height=i.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Kn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ur(Il),this.copyPass.material.blending=ii,this.clock=new tl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Lo!==void 0&&(o instanceof Lo?i=!0:o instanceof Ll&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Ul,sm=Rn(()=>{It();Dr();Ul=class extends In{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var rm,om=Rn(()=>{It();rm={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var Nr,am=Rn(()=>{It();Dr();_u();om();Nr=class n extends In{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(r,o,{type:Kn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){let p=new vn(r,o,{type:Kn});p.texture.name="UnrealBloomPass.h"+f,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new vn(r,o,{type:Kn});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=rm;this.highPassUniforms=qi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Il;this.copyUniforms=qi.clone(h.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new ht,this.fsQuad=new Qi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Nr.BlurDirectionX=new oe(1,0);Nr.BlurDirectionY=new oe(0,1)});var lm,cm=Rn(()=>{lm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Nl,hm=Rn(()=>{It();Dr();cm();Nl=class extends In{constructor(){super();let e=lm;this.uniforms=qi.clone(e.uniforms),this.material=new Ja({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var um={};rc(um,{createPostFX:()=>kS});function kS(n,e,t){let i=new Dl(n);i.addPass(new Ul(e,t));let s=new Nr(new oe(window.innerWidth,window.innerHeight),.35,.65,.82);i.addPass(s);let r=new Ur(HS);return i.addPass(r),i.addPass(new Nl),{composer:i,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){i.setSize(o,a)},setPixelRatio(o){i.setPixelRatio(o)},render(){i.render()}}}var HS,dm=Rn(()=>{It();im();sm();am();yu();hm();HS={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});It();var Zh={};rc(Zh,{CAR_DEFS:()=>wi,applyCarSkin:()=>yM,buildCar:()=>gM,carDef:()=>Yh,effectiveStats:()=>vM,extrudeProfile:()=>Mo,glassMat:()=>Qf,paintCar:()=>xM,paintMat:()=>Kf,setWheelStyle:()=>_M});It();var wi=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}}],Yh=n=>wi.find(e=>e.id===n)||wi[0],Kf=n=>new Xi({color:n,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),Qf=()=>new Xi({color:922652,metalness:.9,roughness:.08,envMapIntensity:1.6}),jf=()=>new Me({color:14672872,metalness:1,roughness:.22}),lM=()=>new Me({color:1316378,metalness:.4,roughness:.6}),cM=()=>new Me({color:789775,roughness:.95}),hM=()=>new Me({color:12172998,metalness:1,roughness:.3}),uM=()=>new Me({color:5922404,metalness:.9,roughness:.45}),dM=()=>new Me({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),fM=()=>new Me({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),pM=()=>new Me({color:15263976,roughness:.5}),Zf=(n,e,t)=>({x:n,y:e,r:t}),$f={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function Mo(n,e,t,i,s=.045){let r=new po;r.moveTo(n[0][0],n[0][1]);for(let l=1;l<n.length;l++)r.lineTo(n[l][0],n[l][1]);r.closePath();for(let l of i||[]){let c=new Ms;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new Za(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new ne(o,t);return a.castShadow=!0,a}function mM(n,e,t){let i=new ct,s=new ne(new yt(e,e,.26,22),cM());s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);let r=new ne(new yt(e*.52,e*.52,.27,18),uM());r.rotation.z=Math.PI/2,i.add(r);let o=new ne(new $a(e*.62,e*.1,8,22),t);o.rotation.y=Math.PI/2,i.add(o);let a=new ct;for(let h=0;h<5;h++){let f=new ne(new Ue(.05,e*.6,e*.16),t);f.position.y=e*.3;let p=new ct;p.rotation.x=h/5*Math.PI*2,p.add(f),a.add(p)}let l=a.clone();l.rotation.y=Math.PI,i.add(a),i.add(l);let c=new ne(new yt(e*.14,e*.14,.3,12),jf());return c.rotation.z=Math.PI/2,i.add(c),n==="blackout"?t.color.setHex(1513500):n==="gold"?t.color.setHex(13211182):n==="neon"&&t.color.setHex(2287359),i}function gM(n,e,t="stock"){let i=typeof n=="string"?Yh(n):n||wi[0],s=i.id||"sport";typeof e!="number"&&(e=typeof i.color=="number"?i.color:i.colors[0]);let r=$f[s]||$f.sport,o=new ct,a=Kf(e),l=Qf(),c=jf(),h=lM(),f=[Zf(r.wb,r.wheelR,r.wheelR+.13),Zf(-r.wb,r.wheelR,r.wheelR+.13)];o.add(Mo(r.body,r.W,a,f)),o.add(Mo(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(Mo(r.roof,r.W-.2,a,null,.02));let p=Math.max(...r.body.map(y=>y[0])),m=Math.min(...r.body.map(y=>y[0])),x=-p,g=-m,d=r.W/2,u=[],M=hM();for(let y of[-1,1])for(let S of[-r.wb,r.wb]){let I=mM(t,r.wheelR,M);I.position.set(y*r.track/2,r.wheelR,S),o.add(I),u.push(I)}let v=dM();for(let y of[-1,1]){let S=new ne(new Ue(.34,.16,.1),h);S.position.set(y*(d-.42),.6,x+.02),o.add(S);let I=new ne(new en(.085,12,10),v);I.scale.set(1.6,.75,.7),I.position.set(y*(d-.42),.6,x-.03),o.add(I)}let _=new ne(new Ue(d*1.1,.16,.08),h);if(_.position.set(0,.4,x+.01),o.add(_),r.splitter){let y=new ne(new Ue(r.W*.92,.05,.3),h);y.position.set(0,.16,x+.1),o.add(y)}if(r.hoodScoop){let y=new ne(new Ue(.5,.09,.7),h);y.position.set(0,.86,-(r.wb*.55)),o.add(y)}if(r.canards)for(let y of[-1,1]){let S=new ne(new Ue(.22,.03,.3),h);S.position.set(y*(d-.1),.3,x+.12),S.rotation.z=y*.25,o.add(S)}let w=fM(),E=new ne(new Ue(r.W*.78,.1,.06),w);E.position.set(0,.66,g-.02),o.add(E);for(let y of[-1,1]){let S=new ne(new Ue(.12,.06,.065),new Me({color:14540253,emissive:16777215,emissiveIntensity:.6}));S.position.set(y*.28,.66,g-.02),o.add(S)}let T=new ne(new Ue(r.W*.8,.14,.18),h);T.position.set(0,.24,g-.06),o.add(T);for(let y of[-1,1]){let S=new ne(new yt(.05,.055,.22,12),c);S.rotation.x=Math.PI/2,S.position.set(y*.32,.26,g+.06),o.add(S)}let z=new ne(new Ue(.34,.09,.02),pM());z.position.set(0,.5,g+.005),o.add(z);for(let y of[-1,1]){let S=new ne(new Ue(.1,.03,.05),h);S.position.set(y*(d+.03),1,-(r.wb*.42)),o.add(S);let I=new ne(new Ue(.1,.1,.16),a);I.position.set(y*(d+.09),1.04,-(r.wb*.42)),I.castShadow=!0,o.add(I)}if(r.rails)for(let y of[-1,1]){let S=new ne(new Ue(.06,.05,1.9),h);S.position.set(y*(d-.35),1.72,.1),o.add(S)}if(r.bed){let y=new ne(new Ue(r.W-.5,.06,2),h);y.position.set(0,1.02,m*.55),o.add(y)}if(r.spoiler||r.wing){let y=!!r.wing;for(let I of[-1,1]){let B=new ne(new Ue(.07,y?.3:.16,.24),y?h:a);B.position.set(I*(d-.45),.86+(y?.1:.04),g+.28),o.add(B)}let S=new ne(new Ue(r.W*(y?.92:.8),.045,y?.42:.3),y?h:a);S.position.set(0,y?1.06:.98,g+.28),S.rotation.x=y?-.12:0,S.castShadow=!0,o.add(S)}return o.userData={defId:s,bodyColor:e,wheels:u,frontWheels:u.filter(y=>y.position.z<0),rim:M,glass:l,paint:a,setBrake:y=>{},profile:r,frontZ:x,rearZ:g},o}function xM(n,e){let t=new Pe(e);n.traverse(i=>{i.isMesh&&i.material&&i.material.isMeshPhysicalMaterial&&i.material.color&&Math.abs(i.material.color.getHex()-n.userData.bodyColor)<2&&!i.material.emissiveIntensity&&i.material.color.copy(t)}),n.userData.bodyColor=e}function _M(n,e){let t=n.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function vM(n,e){let i=(typeof n=="string"?Yh(n):n||wi[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:i.topSpeed*(1+.055*r("engine")),accel:i.accel*(1+.09*r("engine")+.12*r("turbo")),handling:i.handling*(1+.06*r("suspension")),grip:i.grip*(1+.07*r("tires")),nitroTime:i.nitroTime+.5*r("nitro"),nitroPower:i.nitroPower*(1+.08*r("nitro"))}}var Jf={clear:4873070,dark:922652,limo:131844};function yM(n,e,t){let i=n.userData;if(typeof e=="number"&&i.paint&&(i.paint.color.setHex(e),i.bodyColor=e),!t)return n;i.rim&&i.rim.color.setHex(t.rims),i.glass&&i.glass.color.setHex(Jf[t.tint]??Jf.dark),i.skinParts&&(n.remove(i.skinParts),i.skinParts.traverse(o=>{o.isMesh&&o.geometry.dispose()}));let s=new ct;i.skinParts=s,n.add(s);let r=i.profile;if(r&&t.stripes!=="none"){let o=new Xi({color:t.stripe,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.1});if(t.stripes==="side"){let a=(i.rearZ-i.frontZ)*.86,l=(i.rearZ+i.frontZ)/2,c=r.wheelR+.22;for(let h of[-1,1]){let f=new ne(new Ue(.02,.09,a),o);f.position.set(h*(r.W/2+.05),c,l),s.add(f)}}else{let a=t.stripes==="dual"?[-.22,.22]:[0],l=t.stripes==="dual"?.16:.34;for(let c of a)for(let h of[r.body,r.roof]){if(!h)continue;let f=Mo(h,l,o,null,.045);f.castShadow=!1,f.scale.set(1,1.012,1.004),f.position.set(c,.006,0),s.add(f)}}}if(t.glow!=null&&r){let o=new ht({color:t.glow,transparent:!0,opacity:.75,blending:jt,depthWrite:!1,map:MM()}),a=i.rearZ-i.frontZ+1.2,l=new ne(new it(r.W+1.4,a).rotateX(-Math.PI/2),o);l.position.set(0,.07,(i.rearZ+i.frontZ)/2),l.renderOrder=2,s.add(l)}return n}var al=null;function MM(){if(al)return al;let n=document.createElement("canvas");n.width=64,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(32,64,4,32,64,62);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,1),e.fillStyle=t,e.fillRect(0,0,64,128),e.restore(),al=new cn(n),al}It();var SM=1337,$h=null,Xt=5,si=60,ei=14,jn=si+ei,Jh=(Xt*jn+ei)/2,ws=232,So=225,Kh=9;function EM(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Ts(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new cn(i);return s.colorSpace=vt,s.anisotropy=4,s}function ep(){return Ts(128,128,(n,e,t)=>{n.fillStyle="#33363b",n.fillRect(0,0,e,t),n.fillStyle="#3a3d42";for(let i=0;i<160;i++)n.fillRect(i*37%e,i*53%t,2,2);n.fillStyle="#cfd3d8",n.fillRect(4,0,4,t),n.fillRect(e-8,0,4,t),n.fillStyle="#e8c33a";for(let i=0;i<t;i+=32)n.fillRect(e/2-3,i,6,16)})}function bM(){return Ts(128,256,(n,e,t)=>{n.fillStyle="#8d97a3",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++){let c=(a*7+l*13)%17===0;n.fillStyle=c?"#ffe08a":"#3b4656",n.fillRect(l*r+3,a*o+4,r-6,o-8),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(l*r+3,a*o+4,r-6,3)}})}function wM(){return Ts(128,256,(n,e,t)=>{n.fillStyle="#000000",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++)(a*7+l*13)%5===0&&(n.fillStyle=(a+l)%3===0?"#ffd9a0":"#fff3d0",n.fillRect(l*r+3,a*o+4,r-6,o-8))})}var En={p:null,q:null,s:null,m:null};function yn(n,e,t,i,s,r,o,a,l){En.p.set(t,i,s),En.q.setFromAxisAngle(En.up,r),En.s.set(o,a,l),En.m.compose(En.p,En.q,En.s),n.setMatrixAt(e,En.m)}function tp(n,e,t,i,s){for(let r of n)if(t>r.minX&&e<r.maxX&&s>r.minZ&&i<r.maxZ)return!0;return!1}function np(n,e=[]){let t=EM(SM);En.p=new N,En.q=new Mn,En.s=new N,En.m=new ot,En.up=new N(0,1,0);let i=[];n.fog=new Ba(13623538,200,750);let s=new Ka(12572927,6978138,.9);n.add(s);let r=new el(16774368,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=10,r.shadow.camera.far=400;let o=110;r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.bias=-8e-4,n.add(r),n.add(r.target);let a=70,l=120,c=45,h=16,f=new it(1400,1400);f.rotateX(-Math.PI/2);let p=new ne(f,new Me({color:6130250,roughness:.95,metalness:0,envMapIntensity:.25}));p.receiveShadow=!0,n.add(p);let m=[];for(let ae=0;ae<=Xt;ae++)m.push((ae-Xt/2)*jn);let x=Xt*jn+ei,g=ep();g.wrapS=g.wrapT=Mi,g.repeat.set(1,x/ei);let d=new it(1,1);d.rotateX(-Math.PI/2);let u=new Me({map:g,roughness:.9,metalness:.05,envMapIntensity:.35}),M=new Tt(d,u,m.length*2);M.receiveShadow=!0;let v=0;for(let ae of m)yn(M,v++,ae,.05,0,0,ei,1,x),yn(M,v++,0,.05,ae,Math.PI/2,ei,1,x);M.instanceMatrix.needsUpdate=!0,n.add(M);let _=new it(1,1);_.rotateX(-Math.PI/2);let w=new Tt(_,new Me({color:10132898,roughness:.9,metalness:.05,envMapIntensity:.3}),Xt*Xt);w.receiveShadow=!0;let E=0;for(let ae=0;ae<Xt;ae++)for(let he=0;he<Xt;he++){let $=(ae-(Xt-1)/2)*jn,U=(he-(Xt-1)/2)*jn;yn(w,E++,$,.03,U,0,si,1,si)}w.instanceMatrix.needsUpdate=!0,n.add(w);let T=bM(),z=new Ue(1,1,1);z.translate(0,.5,0);let y=new Me({map:T,emissiveMap:wM(),emissive:16762995,emissiveIntensity:0,roughness:.85,metalness:.1,envMapIntensity:.4}),S=110,I=new Tt(z,y,S);I.castShadow=!0,I.receiveShadow=!0;let B=new Pe,H=[],P=[],A=0,D=4,O=0,L=0;for(let ae=0;ae<Xt;ae++)for(let he=0;he<Xt;he++){let $=(ae-(Xt-1)/2)*jn,U=(he-(Xt-1)/2)*jn,ee=ae===O&&he===L,ie=Math.abs(ae-2)<=1&&Math.abs(he-2)<=1,ye=t()<.75?4:9,Ee=Math.sqrt(ye),Xe=(si-D*2)/Ee;for(let nt=0;nt<ye&&A<S;nt++){if(ee||t()<.28)continue;let mt=nt%Ee,Lt=Math.floor(nt/Ee),qe=Xe*(.55+t()*.3),ft=Xe*(.55+t()*.3),mn=ie?60:28,Ci=ie?18:10,Pi=Ci+t()*(mn-Ci),gt=$-(si-D*2)/2+Xe*(mt+.5)+(t()-.5)*2,Et=U-(si-D*2)/2+Xe*(Lt+.5)+(t()-.5)*2,kt=.82+t()*.32,Hs=t();if(!tp(e,gt-qe/2,gt+qe/2,Et-ft/2,Et+ft/2)){yn(I,A,gt,.03,Et,0,qe,Pi,ft),Hs<.45?B.setRGB(kt,kt*.97,kt*.95):Hs<.65?B.setRGB(kt,kt*.9,kt*.82):Hs<.82?B.setRGB(kt*.88,kt*.95,kt):B.setRGB(kt,kt*.82,kt*.74),I.setColorAt(A,B),H.push({x:gt,h:Pi,w:qe,d:ft,z:Et});{let Vr=gt-$,Ho=Et-U,Wr=0,Xr=0;Math.abs(Vr)>Math.abs(Ho)?Wr=Vr>=0?1:-1:Xr=Ho>=0?1:-1;let C={x:gt+Wr*(qe/2),z:Et+Xr*(ft/2),nx:Wr,nz:Xr};P.push({id:P.length,minX:gt-qe/2,maxX:gt+qe/2,minZ:Et-ft/2,maxZ:Et+ft/2,h:Pi,door:C})}i.push({minX:gt-qe/2,maxX:gt+qe/2,minZ:Et-ft/2,maxZ:Et+ft/2}),A++}}}I.count=A,I.instanceMatrix.needsUpdate=!0,I.instanceColor&&(I.instanceColor.needsUpdate=!0),n.add(I);{let ae=Ts(64,96,(ee,ie,ye)=>{ee.fillStyle="#20262f",ee.fillRect(0,0,ie,ye),ee.fillStyle="#ffd98a",ee.fillRect(0,0,ie,6),ee.fillRect(0,0,5,ye),ee.fillRect(ie-5,0,5,ye),ee.fillStyle="#6fa8d8",ee.fillRect(9,12,ie/2-12,ye-20),ee.fillRect(ie/2+3,12,ie/2-12,ye-20),ee.fillStyle="#cfd3d8",ee.fillRect(ie/2-6,ye/2,3,10),ee.fillRect(ie/2+3,ye/2,3,10)}),he=new it(2.2,3);he.translate(0,1.5,0);let $=new Me({map:ae,emissive:16762995,emissiveMap:ae,emissiveIntensity:.25,roughness:.4,metalness:.3}),U=new Tt(he,$,Math.max(1,P.length));P.forEach((ee,ie)=>{let ye=ee.door.nx?ee.door.nx>0?Math.PI/2:-Math.PI/2:ee.door.nz>0?0:Math.PI;yn(U,ie,ee.door.x+ee.door.nx*.03,.04,ee.door.z+ee.door.nz*.03,ye,1,1,1)}),U.count=P.length,U.instanceMatrix.needsUpdate=!0,n.add(U),$h=$}{let ae=new Ue(1.6,1.1,1.6);ae.translate(0,.55,0);let he=new Me({color:9146518,roughness:.7,metalness:.4,envMapIntensity:.4}),$=[];for(let ee of H){let ie=1+Math.floor(t()*2);for(let ye=0;ye<ie;ye++)$.push([ee.x+(t()-.5)*ee.w*.5,ee.h+.03,ee.z+(t()-.5)*ee.d*.5,.7+t()*.7])}let U=new Tt(ae,he,Math.max(1,$.length));$.forEach(([ee,ie,ye,Ee],Xe)=>yn(U,Xe,ee,ie,ye,t()*3.14,Ee,1,Ee)),U.count=$.length,U.instanceMatrix.needsUpdate=!0,n.add(U)}{let ae=(O-(Xt-1)/2)*jn,he=(L-(Xt-1)/2)*jn,$=new ne(new it(si,si).rotateX(-Math.PI/2),new Me({color:3356219,roughness:.95,metalness:.02,envMapIntensity:.25}));$.position.set(ae,.045,he),$.receiveShadow=!0,n.add($);let U=new Ue(.14,.02,5.6);U.translate(0,.01,0);let ee=new Me({color:15264492,roughness:.7}),ie=3,ye=[-7.5,7.5],Ee=12,Xe=ae-Ee*ie/2,nt=ye.length*(Ee+1),mt=new Tt(U,ee,nt),Lt=new Ue(1.8,.14,.16);Lt.translate(0,.07,0);let qe=new Me({color:10132898,roughness:.9}),ft=new Tt(Lt,qe,ye.length*Ee),mn=0,Ci=0;for(let gt of ye){for(let Et=0;Et<=Ee;Et++)yn(mt,mn++,Xe+Et*ie,.055,he+gt,0,1,1,1);for(let Et=0;Et<Ee;Et++)yn(ft,Ci++,Xe+Et*ie+ie/2,.055,he+gt+(gt<0?1.9:-1.9),0,1,1,1)}mt.count=mn,mt.instanceMatrix.needsUpdate=!0,ft.count=Ci,ft.instanceMatrix.needsUpdate=!0,n.add(mt,ft);let Pi=new ne(new it(20,5).rotateX(-Math.PI/2),new Me({map:Ts(256,64,(gt,Et,kt)=>{gt.fillStyle="#33363b",gt.fillRect(0,0,Et,kt),gt.fillStyle="#e8c33a",gt.font="bold 40px sans-serif",gt.textAlign="center",gt.textBaseline="middle",gt.fillText("PARKING",Et/2,kt/2)}),roughness:.9,transparent:!1}));Pi.position.set(ae,.055,he),n.add(Pi)}{let ae=new Ue(.7,.02,3.2);ae.translate(0,.01,0);let he=new Me({color:14672614,roughness:.75}),$=[];for(let ee of[2,3])for(let ie of[2,3]){let ye=m[ee],Ee=m[ie],Xe=ei/2+2.6;for(let[nt,mt,Lt]of[[ye,Ee-Xe,0],[ye,Ee+Xe,0],[ye-Xe,Ee,1],[ye+Xe,Ee,1]])for(let qe=-2;qe<=2;qe++)$.push(Lt===0?[nt+qe*2.2,.06,mt,0]:[nt,.06,mt+qe*2.2,Math.PI/2])}let U=new Tt(ae,he,$.length);$.forEach(([ee,ie,ye,Ee],Xe)=>yn(U,Xe,ee,ie,ye,Ee,1,1,1)),U.instanceMatrix.needsUpdate=!0,U.receiveShadow=!0,n.add(U)}let k=new yt(.12,.16,9,6);k.translate(0,4.5,0);let X=new Me({color:3948872,roughness:.6,metalness:.6,envMapIntensity:.6}),q=new Ue(1.6,.25,.5);q.translate(.6,9,0);let te=new Me({color:16773828,emissive:16766842,emissiveIntensity:.35,roughness:.4,metalness:.2}),G=[];for(let ae of m)for(let he=-x/2+25;he<x/2-10;he+=46){let $=Math.round(he/46)%2===0?1:-1;G.push([ae+$*(ei/2+1.5),he,0]),G.push([he,ae+$*(ei/2+1.5),1])}let K=new Tt(k,X,G.length),de=new Tt(q,te,G.length);G.forEach(([ae,he,$],U)=>{yn(K,U,ae,0,he,0,1,1,1),yn(de,U,ae,0,he,$?Math.PI/2:0,1,1,1)}),K.instanceMatrix.needsUpdate=!0,de.instanceMatrix.needsUpdate=!0,n.add(K,de);let pe=[];for(let ae=0;ae<Xt;ae++)for(let he=0;he<Xt;he++){if(ae===O&&he===L)continue;let $=(ae-(Xt-1)/2)*jn,U=(he-(Xt-1)/2)*jn,ee=2+Math.floor(t()*3);for(let ie=0;ie<ee;ie++)pe.push([$+(t()-.5)*(si-8),U+(t()-.5)*(si-8),.8+t()*.5])}let ge=new yt(.18,.28,2.6,6);ge.translate(0,1.3,0);let De=new Sr(1.9,4.6,7);De.translate(0,4.4,0);let ze=new Tt(ge,new Me({color:7031342,roughness:.9,envMapIntensity:.2}),pe.length),be=new Tt(De,new Me({color:4094516,roughness:.85,envMapIntensity:.3}),pe.length);be.castShadow=!0;for(let ae=pe.length-1;ae>=0;ae--){let[he,$]=pe[ae];tp(e,he-2,he+2,$-2,$+2)&&pe.splice(ae,1)}pe.forEach(([ae,he,$],U)=>{yn(ze,U,ae,.03,he,t()*6.28,$,$,$),yn(be,U,ae,.03,he,t()*6.28,$,$*(.9+t()*.3),$)}),ze.instanceMatrix.needsUpdate=!0,be.instanceMatrix.needsUpdate=!0,n.add(ze,be);let Be=Ts(64,64,(ae,he,$)=>{let U=ae.createRadialGradient(32,32,2,32,32,30);U.addColorStop(0,"rgba(255,220,150,1)"),U.addColorStop(.4,"rgba(255,200,120,0.45)"),U.addColorStop(1,"rgba(255,190,110,0)"),ae.fillStyle=U,ae.fillRect(0,0,he,$)}),F=new Vt,me=new Float32Array(G.length*3);G.forEach(([ae,he],$)=>{me[$*3]=ae,me[$*3+1]=8.9,me[$*3+2]=he}),F.setAttribute("position",new ln(me,3));let j=new uo({map:Be,size:14,transparent:!0,opacity:0,blending:jt,depthWrite:!1,sizeAttenuation:!0}),ue=new Ga(F,j);ue.frustumCulled=!1,n.add(ue);let Q=new Ue(1,1,1);Q.translate(0,.5,0);let Le=new ht({color:2767445}),Se=46,R=new Tt(Q,Le,Se);for(let ae=0;ae<Se;ae++){let he=ae/Se*Math.PI*2+t()*.1,$=760+t()*220,U=40+t()*60,ee=60+t()*130,ie=40+t()*60;yn(R,ae,Math.cos(he)*$,0,Math.sin(he)*$,t()*.6,U,ee,ie)}R.instanceMatrix.needsUpdate=!0,n.add(R);let b=So*2,V=Ts(128,128,(ae,he,$)=>{ae.fillStyle="#2e3136",ae.fillRect(0,0,he,$),ae.fillStyle="#cfd3d8",ae.fillRect(2,0,5,$),ae.fillRect(he-7,0,5,$),ae.fillStyle="#e8c33a";for(let U=0;U<$;U+=32)ae.fillRect(he/2-3,U,6,16)});V.wrapS=V.wrapT=Mi,V.repeat.set(1,b/14);let le=new it(1,1);le.rotateX(-Math.PI/2);let re=new ne(le,new Me({map:V,roughness:.9,metalness:.05,envMapIntensity:.35}));re.scale.set(Kh,1,b),re.position.set(ws,.05,0),re.receiveShadow=!0,n.add(re);let se=ep();se.wrapS=se.wrapT=Mi,se.repeat.set(1,(ws-Jh)/ei+2);let Ie=ws-Jh+20,xe=new ne(le,new Me({map:se,roughness:.9,metalness:.05,envMapIntensity:.35}));xe.scale.set(Ie,1,ei),xe.rotation.y=Math.PI/2,xe.position.set((Jh+ws)/2,.05,0),xe.receiveShadow=!0,n.add(xe);let we=new ne(new it(Kh,1.6).rotateX(-Math.PI/2),new Me({color:15922422,roughness:.7}));we.position.set(ws,.07,So-8),n.add(we);let Fe=new Ue(4,1.1,.7);Fe.translate(0,.55,0);let We=new Me({color:16777215,roughness:.6,metalness:.1,envMapIntensity:.4}),ce=Math.floor(b/9)*2,Je=new Tt(Fe,We,ce);Je.castShadow=!0;let Ke=new Pe,He=0;for(let ae=-So+4;ae<=So-4&&He<ce;ae+=9)for(let he of[-1,1])yn(Je,He,ws+he*(Kh/2+1.6),.05,ae,0,1,1,1),Ke.setHex(He%2===0?15229982:15922422),Je.setColorAt(He,Ke),He++;Je.count=He,Je.instanceMatrix.needsUpdate=!0,Je.instanceColor&&(Je.instanceColor.needsUpdate=!0),n.add(Je);let Oe={x:m[3],z:120,heading:0},Ae={startX:ws,startZ:So-8,dirX:0,dirZ:-1,length:b};function Ye(ae){y.emissiveIntensity=ae*1.4,$h&&($h.emissiveIntensity=.25+ae*1.2),te.emissiveIntensity=.35+ae*3,j.opacity=ae*.85,Le.color.setHex(ae>.5?923174:2767445)}function rt(ae,he){let $=Math.round(he.x/h)*h,U=Math.round(he.z/h)*h;r.target.position.set($,0,U),r.position.set($+a,l,U+c),r.target.updateMatrixWorld()}return rt(0,Oe),{colliders:i,buildings:P,spawn:Oe,dragStrip:Ae,update:rt,setGlow:Ye,sun:r,hemi:s,roadLines:m}}var ll=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0}update(e,t,i){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,f=0,p=h?.25:1;e.throttle>0?f=e.throttle*s.accel*c*p*(1-Math.max(0,l)/(s.topSpeed*c)*.72):e.throttle<0&&(f=l>1?e.throttle*s.accel*1.6:e.throttle*s.accel*.5),f-=l*(.028+(h?.06:0))+Math.sign(l)*.6,l+=f*t;let m=s.topSpeed*c,x=-s.topSpeed*.35;l=Math.max(x,Math.min(m,l)),Math.abs(l)<.15&&!e.throttle&&(l=0);let g=Math.abs(l),d=Math.min(1,g/8),u=this.steer*.55*s.handling*d*(1-Math.min(1,g/(s.topSpeed*1.4))*.45);g>.5&&(this.heading-=u*(l/g)*t*(g>1?Math.min(2.2,g*.12+.8):1)*2.2);let M=-Math.sin(this.heading),v=-Math.cos(this.heading),_=this.vel.x*M+this.vel.z*v,w=this.vel.x-M*_,E=this.vel.z-v*_;this.drifting=!!(e.handbrake&&g>6);let T=this.drifting?.983:Math.min(.995,.9+s.grip*.06),z=Math.pow(T,t*60);w*=z,E*=z;let y=_+(l-_)*Math.min(1,t*60);this.vel.x=M*y+w,this.vel.z=v*y+E;let S=this.pos.x+this.vel.x*t,I=this.pos.z+this.vel.z*t;if(i){let B=i(S,I,this.pos.x,this.pos.z);S=B.x,I=B.z,B.hitX&&(this.vel.x*=-.25),B.hitZ&&(this.vel.z*=-.25)}return this.pos.x=S,this.pos.z=I,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer}}};function ip(n={}){let e=n.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1},i={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1},s={x:0,y:0,id:null},r="drive",o=!1,a=!1,l=!1,c=!1,h=!1,f=[],p=S=>document.getElementById(S);function m(){t.steer=(i.right?1:0)-(i.left?1:0),t.throttle=i.gas?1:i.brake?-1:0,t.nitro=i.nitro,t.handbrake=i.handbrake;let S=(i.right?1:0)-(i.left?1:0),I=(i.gas?1:0)-(i.brake?1:0);t.moveX=s.id!==null?s.x:S,t.moveY=s.id!==null?s.y:I,t.run=i.run||i.nitro||s.id!==null&&Math.hypot(s.x,s.y)>.92,t.fire=i.fire}function x(S,I){if(!S)return;let B=44,H=D=>{if(D.pointerId!==s.id)return;let O=S.getBoundingClientRect(),L=D.clientX-(O.left+O.width/2),k=D.clientY-(O.top+O.height/2),X=L,q=k;e()&&(X=k,q=-L);let te=Math.hypot(X,q),G=Math.min(te,B);te>0&&(X=X/te*G,q=q/te*G),I.style.transform=`translate(${X}px, ${q}px)`;let K=.12,de=X/B,pe=-q/B;Math.hypot(de,pe)<K&&(de=0,pe=0),s.x=de,s.y=pe,m()},P=D=>{if(D.preventDefault(),s.id===null){s.id=D.pointerId;try{S.setPointerCapture(D.pointerId)}catch{}H(D)}},A=D=>{D.pointerId===s.id&&(s.id=null,s.x=0,s.y=0,I.style.transform="translate(0px, 0px)",m())};S.addEventListener("pointerdown",P),S.addEventListener("pointermove",H),S.addEventListener("pointerup",A),S.addEventListener("pointercancel",A),f.push(()=>{S.removeEventListener("pointerdown",P),S.removeEventListener("pointermove",H),S.removeEventListener("pointerup",A),S.removeEventListener("pointercancel",A)})}function g(S,I){if(!S)return;let B=P=>{P.preventDefault(),P.stopPropagation(),I(),S.classList.add("pressed")},H=()=>S.classList.remove("pressed");S.addEventListener("pointerdown",B),S.addEventListener("pointerup",H),S.addEventListener("pointerleave",H),f.push(()=>{S.removeEventListener("pointerdown",B),S.removeEventListener("pointerup",H),S.removeEventListener("pointerleave",H)})}function d(S,I){if(!S)return;let B=0,H=D=>{D.preventDefault(),B++,I==="fire"&&!i.fire&&(c=!0),i[I]=!0,m(),S.classList.add("pressed")},P=()=>{B=Math.max(0,B-1),B===0&&(i[I]=!1,m(),S.classList.remove("pressed"))},A=D=>D.preventDefault();S.addEventListener("pointerdown",H),S.addEventListener("pointerup",P),S.addEventListener("pointercancel",P),S.addEventListener("pointerleave",P),S.addEventListener("contextmenu",A),f.push(()=>{S.removeEventListener("pointerdown",H),S.removeEventListener("pointerup",P),S.removeEventListener("pointercancel",P),S.removeEventListener("pointerleave",P),S.removeEventListener("contextmenu",A)})}function u(S){if(!S)return;let I=H=>{H.preventDefault(),o=!0,S.classList.add("pressed")},B=()=>S.classList.remove("pressed");S.addEventListener("pointerdown",I),S.addEventListener("pointerup",B),S.addEventListener("pointercancel",B),S.addEventListener("pointerleave",B),f.push(()=>{S.removeEventListener("pointerdown",I),S.removeEventListener("pointerup",B),S.removeEventListener("pointercancel",B),S.removeEventListener("pointerleave",B)})}let M={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function v(S){let I=S.target;if(I&&(I.tagName==="INPUT"||I.tagName==="TEXTAREA"))return;let B=S.key,H=M[B];if(H){i[H]=!0,m(),S.preventDefault();return}if(B===" "){if(S.preventDefault(),S.repeat)return;r==="drag"?o=!0:r==="foot"?(i.fire||(c=!0),i.fire=!0,m()):(i.handbrake=!0,m());return}if(B==="e"||B==="E"||B==="Enter"){S.repeat||(a=!0);return}if(B==="q"||B==="Q"){S.repeat||(l=!0);return}(B==="Shift"||B==="f"||B==="F")&&(i.nitro=!0,m())}function _(S){let I=S.key,B=M[I];if(B){i[B]=!1,m();return}if(I===" "){i.handbrake=!1,i.fire=!1,m();return}(I==="Shift"||I==="f"||I==="F")&&(i.nitro=!1,m())}function w(S){r=S==="drag"||S==="foot"?S:"drive";let I=(H,P)=>{let A=p(H);A&&(A.style.display=P?"":"none")};I("steer-zone",r==="drive"),I("pedal-zone",r!=="foot"),I("btn-shift",r==="drag"),I("joystick",r==="foot"),I("foot-zone",r==="foot");for(let H in i)i[H]=!1;s.id=null,s.x=0,s.y=0;let B=p("joy-knob");B&&(B.style.transform="translate(0px, 0px)");for(let H of document.querySelectorAll("#touch-controls .pressed"))H.classList.remove("pressed");m()}function E(){if(h)return;h=!0,d(p("btn-left"),"left"),d(p("btn-right"),"right"),d(p("btn-gas"),"gas"),d(p("btn-brake"),"brake"),d(p("btn-nitro"),"nitro"),d(p("btn-handbrake"),"handbrake"),u(p("btn-shift")),d(p("btn-fire"),"fire"),d(p("btn-run"),"run"),x(p("joystick"),p("joy-knob")),g(p("btn-action"),()=>{a=!0}),g(p("btn-weapon"),()=>{l=!0}),window.addEventListener("keydown",v),window.addEventListener("keyup",_),f.push(()=>{window.removeEventListener("keydown",v),window.removeEventListener("keyup",_)});let S=p("touch-controls");S&&(S.style.display="ontouchstart"in window?"":"none"),w(r)}function T(){for(let S of f)S();f.length=0;for(let S in i)i[S]=!1;o=a=l=c=!1,s.id=null,s.x=s.y=0,m(),h=!1}function z(){let S=o;return o=!1,S}let y=S=>()=>{let I;switch(S){case"action":return I=a,a=!1,I;case"cycle":return I=l,l=!1,I;case"fire":return I=c,c=!1,I}};return{input:t,consumeShift:z,consumeAction:y("action"),consumeCycle:y("cycle"),consumeFireEdge:y("fire"),setMode:w,attach:E,detach:T,get mode(){return r}}}var TM=[.3,.47,.64,.81,1],AM=[1.9,1.45,1.15,.95,.8],cl=.8,rp=.97,RM=.8,CM=45,PM=2.2,IM=[16765286,448160,10182117,15817653,48121,16704576,15681391],hn=n=>document.getElementById(n);function op(n,e){return n+Math.random()*(e-n)}function sp(n){return n[Math.random()*n.length|0]}function LM(n){let e=402/(.42*n.topSpeed+.35*n.accel);return Math.min(17,Math.max(8.5,e))*op(.85,1.15)}function DM(n){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,stats:n}}function UM(n,e,t){let i=n.stats.topSpeed,s=TM[n.gear]*i,r=1-Math.min(1,n.speed/(s*1.02)),o=e*n.stats.accel*AM[n.gear]*Math.max(0,r);o*=n.bogMul,o-=n.speed*.028+Math.sign(n.speed)*.6,n.speed=Math.max(0,n.speed+o*t),n.dist+=n.speed*t,n.rpm=Math.min(1.06,n.speed/s),n.bogMul+=(1-n.bogMul)*Math.min(1,t*2.5)}function NM(n){return n>=cl&&n<=rp?"perfect":n<cl?"early":"late"}function OM(n){if(n.gear>=4)return null;let e=NM(n.rpm);return n.gear++,e==="perfect"?n.speed*=1.015:(n.speed*=.93,n.bogMul=.75),n.limiterT=0,e}function FM(n){let e=LM(n),t=1.1,i=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/i,reactDelay:op(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:n}}function zM(n,e,t){if(!n.launched)return;let i=e-n.launchT;i<0||(n.speed=n.top*(1-Math.exp(-n.k*i)),n.dist+=n.speed*t)}function BM({falseStart:n,pET:e,aET:t,pDist:i,aDist:s}){return n?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:i>=s}function HM(n,e,t){if(!n)return 100;let i=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(i*10))}function kM(n,e){return n?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function ap(n){let e=hn("drag-ui"),t=hn("drag-msg"),i=hn("drag-result"),s=hn("rpm-bar"),r=hn("rpm-shiftzone"),o=hn("btn-shift"),a={s1:hn("bulb-s1"),s2:hn("bulb-s2"),a1:hn("bulb-a1"),a2:hn("bulb-a2"),a3:hn("bulb-a3"),g:hn("bulb-g"),r:hn("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let H in a)a[H].classList.remove("lit")}function h(H){a[H].classList.add("lit")}function f(H,P){t.textContent=H,l.msgTimer=P||0}function p(H,P){try{n.audio.beep(H,P)}catch{}}function m(){let H=n.getPlayer();return H&&H.stats?H.stats:n.effectiveStats(H.def,H.upgrades)}function x(H,P){let A=n.city.dragStrip;H.position.set(A.startX+l.perpX*P,0,A.startZ+l.perpZ*P),H.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function g(H,P){let A=n.city.dragStrip;H.position.set(A.startX+l.dirX*P.dist+l.perpX*P.lateral,0,A.startZ+l.dirZ*P.dist+l.perpZ*P.lateral)}function d(H,P,A){let D=H.userData.wheels;if(D)for(let O of D){let L=O.userData.spin||[];for(let k of L)k.rotation.x+=P*A*2.2}}function u(H){return DM(H)}function M(H,P,A){UM(H,P,A)}function v(H){let P=OM(H);P&&(P==="perfect"?(f("PERFECT SHIFT!",1),p(1200,.08)):(f(P==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),p(220,.15)))}function _(H){return FM(H)}function w(H,P){zM(H,l.greenT,P)}function E(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),i.classList.add("hidden"),i.innerHTML="",f("STAGE!"),s.style.width="15%",r.style.left=cl*100+"%",r.style.width=(rp-cl)*100+"%",o&&o.classList.remove("hidden")}function T(){l.phase="green",l.t=0,l.greenT=0,h("g"),f("GO!"),p(880,.4),l.phase="racing"}function z(){l.phase="red",c(),h("r"),f("FALSE START!"),p(180,.6),y("FALSE START \u2014 you jumped the green.")}function y(H){l.phase="done",l.finished=!0;let P=l.player,A=l.ai,D=!!(H&&H.indexOf("FALSE START")===0),O=BM({falseStart:D,pET:P.et,aET:A.finishET,pDist:P.dist,aDist:A.dist}),L=P.et,k=A.finishET,X=P.reaction!=null?P.reaction.toFixed(3)+"s":"\u2014",q=(P.trap*PM).toFixed(1),te=HM(O,L,k),G=kM(O,D);n.addCash(te),i.innerHTML="<h2>"+G+"</h2>"+(H?"<p>"+H+"</p>":"")+"<p>ET: "+(L==null?"DNF":L.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(k==null?"DNF":k.toFixed(3)+"s")+"</p><p>Trap speed: "+q+" MPH &nbsp;\xB7&nbsp; Reaction: "+X+"</p><p>+$"+te+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',i.classList.remove("hidden"),hn("drag-rematch").onclick=()=>{S()},hn("drag-back").onclick=()=>{I()};try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}}function S(){l.active&&I();let P=n.getPlayer().group;l.origPos=P.position.clone(),l.origRotY=P.rotation.y;let A=n.city.dragStrip,D=Math.hypot(A.dirX,A.dirZ)||1;l.dirX=A.dirX/D,l.dirZ=A.dirZ/D,l.perpX=-l.dirZ,l.perpZ=l.dirX,x(P,2),P.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=u(m());let O=sp(n.CAR_DEFS),L=n.buildCar(Object.assign({},O,{color:sp(IM)}));n.scene.add(L),x(L,-2),l.aiGroup=L,l.ai=_(n.effectiveStats(O)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),n.controls.setMode("drag");let k=n.camera;k.position.set(A.startX-l.dirX*12+l.perpX*12,5,A.startZ-l.dirZ*12+l.perpZ*12),k.lookAt(A.startX+l.dirX*8,1,A.startZ+l.dirZ*8),E()}function I(){l.aiGroup&&(n.scene.remove(l.aiGroup),l.aiGroup=null);let H=n.getPlayer();H&&H.group&&l.origPos&&(H.group.position.copy(l.origPos),H.group.rotation.y=l.origRotY),e.classList.add("hidden"),i.classList.add("hidden"),o&&o.classList.add("hidden");try{n.controls.setMode("drive")}catch{}try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function B(H){if(!l.active)return;H=Math.min(H,.05);let P=n.controls.input||{},A=Math.max(0,Math.min(1,P.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&A>.5){z();return}if(l.msgTimer>0&&(l.msgTimer-=H,l.msgTimer<=0&&l.phase==="racing"&&f("GO!")),l.phase==="stage")l.t+=H,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,f("READY\u2026"));else if(l.phase==="tree"){l.t+=H;let O=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<O;)l.ambersLit++,h("a"+l.ambersLit),p(440,.15);l.t>=1.5&&T()}else if(l.phase==="racing"){l.greenT+=H;let O=l.player,L=l.ai;!O.reacted&&A>.5&&(O.reacted=!0,O.reaction=l.greenT),!L.launched&&l.greenT>=L.reactDelay&&(L.launched=!0,L.launchT=l.greenT),M(O,A,H),n.controls.consumeShift&&n.controls.consumeShift()&&v(O),O.rpm>=1&&A>.3?(O.limiterT+=H,O.limiterT>=RM&&(O.speed*=.9,O.limiterT=0,f("LIMITER!",.8),p(160,.2))):O.limiterT=Math.max(0,O.limiterT-H*2),w(L,H),O.et==null&&O.dist>=402&&(O.et=l.greenT,O.trap=O.speed),L.finishET==null&&L.dist>=402&&(L.finishET=l.greenT,L.trap=L.speed);let k=l.greenT>=CM;if(O.et!=null&&L.finishET!=null||k||O.et!=null&&l.greenT>O.et+8||L.finishET!=null&&l.greenT>L.finishET+8){y(k&&O.et==null&&L.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,O.rpm)*100+"%";try{n.audio.engine(O.rpm,A),n.audio.skid(A>.8&&O.speed<8&&O.gear===0)}catch{}}let D=n.getPlayer().group;if(g(D,l.player),l.aiGroup&&g(l.aiGroup,l.ai),d(D,l.player.speed,H),l.aiGroup&&d(l.aiGroup,l.ai.speed,H),l.phase==="racing"||l.phase==="done"){let O=n.camera,L=D.position.x,k=D.position.z,X=L-l.dirX*11+l.perpX*7,q=k-l.dirZ*11+l.perpZ*7;O.position.x+=(X-O.position.x)*Math.min(1,H*4),O.position.y+=(4.5-O.position.y)*Math.min(1,H*4),O.position.z+=(q-O.position.z)*Math.min(1,H*4),O.lookAt(L+l.dirX*12,1.2,k+l.dirZ*12)}}return hn("drag-exit").onclick=()=>I(),{enter:S,exit:I,update:B,get active(){return l.active}}}function lp(){let n=null,e=null,t=null,i=null,s=null,r=null,o=null,a=null,l=!1,c=!1;function h(){if(n)return!0;let f=window.AudioContext||window.webkitAudioContext;if(!f)return!1;n=new f,e=n.createGain(),e.gain.value=.5,e.connect(n.destination),t=n.createOscillator(),t.type="sawtooth",t.frequency.value=70,i=n.createOscillator(),i.type="square",i.frequency.value=38,s=n.createBiquadFilter(),s.type="lowpass",s.frequency.value=400,s.Q.value=2,r=n.createGain(),r.gain.value=0,t.connect(s),i.connect(s),s.connect(r),r.connect(e),t.start(),i.start();let p=n.sampleRate,m=n.createBuffer(1,p,n.sampleRate),x=m.getChannelData(0);for(let u=0;u<p;u++)x[u]=Math.random()*2-1;a=m;let g=n.createBufferSource();g.buffer=m,g.loop=!0;let d=n.createBiquadFilter();return d.type="bandpass",d.frequency.value=900,d.Q.value=1.1,o=n.createGain(),o.gain.value=0,g.connect(d),d.connect(o),o.connect(e),g.start(),!0}return{unlock(){c=!0,h()&&(n.state==="suspended"&&n.resume(),l=!0)},engine(f,p){if(!n||!l)return;let m=Math.max(0,Math.min(1,f)),x=Math.max(0,Math.min(1,p)),g=n.currentTime,d=60+m*220;t.frequency.setTargetAtTime(d,g,.03),i.frequency.setTargetAtTime(d*.5+3,g,.03),s.frequency.setTargetAtTime(300+m*900,g,.05),r.gain.setTargetAtTime(x*.11+m*.04,g,.06)},skid(f){!n||!l||o.gain.setTargetAtTime(f?.12:0,n.currentTime,f?.05:.12)},beep(f=660,p=.08){if(!c||!h())return;n.state==="suspended"&&n.resume();let m=n.currentTime,x=n.createOscillator();x.type="sine",x.frequency.value=f;let g=n.createGain();g.gain.setValueAtTime(1e-4,m),g.gain.exponentialRampToValueAtTime(.25,m+.012),g.gain.exponentialRampToValueAtTime(1e-4,m+p),x.connect(g),g.connect(e),x.start(m),x.stop(m+p+.03)},shot(f="pistol"){if(!c||!h())return;let p=n.currentTime,m={pistol:[2600,.16,.5],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],rifle:[2200,.2,.55]}[f]||[2600,.16,.5],x=n.createBufferSource();x.buffer=a;let g=n.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(m[0],p),g.frequency.exponentialRampToValueAtTime(300,p+m[1]);let d=n.createGain();d.gain.setValueAtTime(m[2],p),d.gain.exponentialRampToValueAtTime(1e-4,p+m[1]),x.connect(g),g.connect(d),d.connect(e),x.start(p,Math.random()*.5),x.stop(p+m[1]+.02);let u=n.createOscillator();u.type="sine",u.frequency.setValueAtTime(140,p),u.frequency.exponentialRampToValueAtTime(40,p+.12);let M=n.createGain();M.gain.setValueAtTime(m[2]*.8,p),M.gain.exponentialRampToValueAtTime(1e-4,p+.14),u.connect(M),M.connect(e),u.start(p),u.stop(p+.16)},click(){this.beep(1800,.03)},shutdown(){if(n)try{n.close()}catch{}n=null,e=null,l=!1,t=i=s=r=o=a=null}}}var hp="citydriver_save_v1";var hl=5,GM=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295];var up=["engine","turbo","tires","suspension","nitro"],VM={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},WM={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},Eo=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function Qh(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:Eo()},paint:{sport:14100029},wheels:{sport:0}}}function XM(n){let e=Object.assign(Qh(),n||{}),t=new Set(wi.map(i=>i.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(i=>t.has(i)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let i of e.owned){if(!e.upgrades[i]||typeof e.upgrades[i]!="object")e.upgrades[i]=Eo();else for(let s of up)e.upgrades[i][s]=Math.max(0,Math.min(hl,e.upgrades[i][s]|0));typeof e.paint[i]!="number"&&(e.paint[i]=14100029),e.wheels[i]=Math.max(0,e.wheels[i]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function dp(){try{let n=localStorage.getItem(hp);return n?XM(JSON.parse(n)):Qh()}catch{return Qh()}}function un(n){try{localStorage.setItem(hp,JSON.stringify(n))}catch{}}function cp(n,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+n.price/2e4))}var qM=n=>"#"+n.toString(16).padStart(6,"0");function fp(n){let e=n.save,t=g=>document.getElementById(g),i=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let g of wi)for(let d in o)o[d]=Math.max(o[d],g[d]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(g,d,u)=>{let M=Math.max(5,Math.round(d/u*100));return`<div class="stat-row"><span>${g}</span><div class="sbar"><i style="width:${M}%"></i></div></div>`};function c(){i.innerHTML=wi.map(g=>{let d=e.owned.includes(g.id),u=e.currentCar===g.id,M;return u?M='<button class="buy-btn" disabled>SELECTED</button>':d?M=`<button class="buy-btn" data-act="select" data-id="${g.id}">SELECT</button>`:M=`<button class="buy-btn" data-act="buy" data-id="${g.id}"${e.cash<g.price?" disabled":""}>$${g.price.toLocaleString()}</button>`,`<div class="car-card${u?" selected":""}"><div class="cinfo"><b>${g.name}</b><small>${g.desc}</small><div class="stat-bars">${l("SPD",g.topSpeed,o.topSpeed)}${l("ACC",g.accel,o.accel)}${l("HDL",g.handling,o.handling)}${l("GRP",g.grip,o.grip)}</div></div>${M}</div>`}).join("")}function h(){let g=n.getDef(e.currentCar);if(!g){s.innerHTML="";return}let d=e.upgrades[g.id]||(e.upgrades[g.id]=Eo());s.innerHTML=`<div class="upg-car-name">${g.name} \u2014 performance</div>`+up.map(u=>{let M=d[u]||0,v=M>=hl,_=v?0:cp(g,u,M),w="";for(let T=0;T<hl;T++)w+=`<div class="pip${T<M?" on":""}"></div>`;let E=v?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${u}"${e.cash<_?" disabled":""}>$${_.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${VM[u]}</b><small>${WM[u]}</small><div class="pips">${w}</div></div>${E}</div>`}).join("")}function f(){let g=e.currentCar,d=e.paint[g],u=GM.map(M=>`<button class="swatch${M===d?" sel":""}" data-hex="${M}" style="background:${qM(M)}" aria-label="paint"></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Quick paint \u2014 FREE</b><div class="swatch-row">${u}</div></div><button class="mbtn primary" data-act="editor" style="width:100%">\u{1F3A8} OPEN SKIN EDITOR \u2014 all free</button><p class="store-tip">Any color, rims, stripes, underglow, window tint, and your driver's look.</p>`}function p(){a(),c(),h(),f()}i.addEventListener("click",g=>{let d=g.target.closest("button[data-act]");if(!d||d.disabled)return;let u=n.getDef(d.dataset.id);if(u)if(d.dataset.act==="buy"){if(e.owned.includes(u.id)||e.cash<u.price)return;e.cash-=u.price,e.owned.push(u.id),e.upgrades[u.id]||(e.upgrades[u.id]=Eo()),typeof e.paint[u.id]!="number"&&(e.paint[u.id]=u.color),e.wheels[u.id]===void 0&&(e.wheels[u.id]=0),e.currentCar=u.id,un(e),n.onSelectCar(u.id),p()}else{if(e.currentCar===u.id)return;e.currentCar=u.id,un(e),n.onSelectCar(u.id),p()}}),s.addEventListener("click",g=>{let d=g.target.closest("button[data-key]");if(!d||d.disabled)return;let u=n.getDef(e.currentCar);if(!u)return;let M=d.dataset.key,v=e.upgrades[u.id]||(e.upgrades[u.id]=Eo()),_=v[M]||0,w=cp(u,M,_);_>=hl||e.cash<w||(e.cash-=w,v[M]=_+1,un(e),n.refreshScene(),p())}),r.addEventListener("click",g=>{let d=e.currentCar;if(g.target.closest('button[data-act="editor"]')){n.openEditor&&n.openEditor();return}let u=g.target.closest("button.swatch");if(u){let M=parseInt(u.dataset.hex,10);e.paint[d]!==M&&(e.paint[d]=M,un(e),n.onPaint(M),p())}});let m=[...document.querySelectorAll("#garage .gtab")],x={cars:i,upgrades:s,style:r};return m.forEach(g=>g.addEventListener("click",()=>{m.forEach(d=>d.classList.toggle("active",d===g));for(let d in x)x[d].classList.toggle("hidden",d!==g.dataset.tab)})),p(),{refresh:p}}var pp=["low","medium","high"];function jh(n){switch(n){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var ul=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,jh(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};It();var dl={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.65,stars:1}},eu=["day","sunset","night"],YM=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`,ZM=`
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
}`;function mp(){let n=new en(1500,24,16),e={uTop:{value:new Pe(3108822)},uHorizon:{value:new Pe(13625079)},uSunDir:{value:new N(0,1,0)},uSunColor:{value:new Pe(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new Wt({vertexShader:YM,fragmentShader:ZM,uniforms:e,side:Qt,depthWrite:!1,fog:!1}),i=new ne(n,t);return i.frustumCulled=!1,i.renderOrder=-10,{mesh:i,uniforms:e}}function $M(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new N(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}function gp(n,e){let t=dl[e]||dl.day,{uniforms:i,sun:s,hemi:r,scene:o,renderer:a}=n;i.uTop.value.setHex(t.top),i.uHorizon.value.setHex(t.horizon),i.uSunColor.value.setHex(t.sunColor),i.uSunI.value=t.sunI,i.uStars.value=t.stars;let l=$M(t.elev,t.azim);return i.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),n.sunElev=t.elev,n.sunAzim=t.azim,n.sunDir=l,t}It();function JM(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new cn(n);return i.colorSpace=vt,i}var tu=null;function KM(){return tu||(tu=JM()),tu}var Hn=class{constructor(e,t,{color:i=12303291,opacity:s=.5,blending:r=zi,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new it(1,1),this.mat=new ys({map:KM(),color:i,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new yr(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new N}emit(e,t,i,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,i);let f=h.userData;f.life=a,f.maxLife=a,f.vx=s,f.vy=r,f.vz=o,f.grow=c,f.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let i of this.items){if(!i.visible)continue;let s=i.userData;if(s.life-=e,s.life<=0){i.visible=!1;continue}i.position.x+=s.vx*e,i.position.y+=s.vy*e,i.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;i.scale.set(o,o,1),i.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},fl=class{constructor(e,t=400){this.max=t,this.i=0;let i=new it(.32,1.4);i.rotateX(-Math.PI/2),this.mesh=new Tt(i,new ht({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new ot;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new ot,this._q=new Mn,this._p=new N,this._s=new N(1,1,1),this._up=new N(0,1,0)}add(e,t,i){this._q.setFromAxisAngle(this._up,i),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function bo(){return{driftT:0,driftAcc:0}}function xp(n,e,t,i){if(e&&Math.abs(t)>=8)return n.driftT+=i,n.driftAcc+=i*15,0;let s=0;return n.driftT>=1&&(s=Math.round(n.driftAcc)),n.driftT=0,n.driftAcc=0,s}var _p=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function vp(n){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;e=_p()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),n&&n(t.w,t.h)}async function s(){if(!_p())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:t,goLandscape:s,refresh:i,get rotated(){return e}}}var Yi=[14100029,16735802,16747546,16757504,16765503,13038642,4906624,1483594,1013358,1622208,3718648,2060267,1981066,8141549,11032055,15557798,16723555,7999504,9067034,13211182,16317180,13358561,7041664,1120295],pl=[16109749,15250575,13011554,11037509,8014380,4860954],ml=[1118481,2759184,5913118,10119738,14266986,15263976,14100029,3718648],wo=["none","center","dual","side"],To=["clear","dark","limo"],Zi=["none","cap","beanie","cowboy","crown","helmet"],gl={none:"No hat",cap:"Snapback",beanie:"Beanie",cowboy:"Stetson",crown:"Crown",helmet:"Helmet"},Ti=n=>Number.isInteger(n)&&n>=0&&n<=16777215,nu=(n,e,t)=>e.includes(n)?n:t;function yp(){return{rims:12172998,stripes:"none",stripe:16317180,glow:null,tint:"dark"}}function QM(){return{shirt:2845872,pants:2963272,skin:13011554,hair:2759184,hat:"none",hatColor:2237739}}function Mp(n){let e=yp(),t=n&&typeof n=="object"?n:{};return{rims:Ti(t.rims)?t.rims:e.rims,stripes:nu(t.stripes,wo,e.stripes),stripe:Ti(t.stripe)?t.stripe:e.stripe,glow:Ti(t.glow)?t.glow:null,tint:nu(t.tint,To,e.tint)}}function xl(n){let e=QM(),t=n&&typeof n=="object"?n:{};return{shirt:Ti(t.shirt)?t.shirt:e.shirt,pants:Ti(t.pants)?t.pants:e.pants,skin:Ti(t.skin)?t.skin:e.skin,hair:Ti(t.hair)?t.hair:e.hair,hat:nu(t.hat,Zi,e.hat),hatColor:Ti(t.hatColor)?t.hatColor:e.hatColor}}function iu(n){return String(n??"").replace(/[^\w .\-'!?]/g,"").trim().slice(0,16)}function Sp(n){(!n.carSkin||typeof n.carSkin!="object")&&(n.carSkin={});for(let t of Object.keys(n.carSkin))n.carSkin[t]=Mp(n.carSkin[t]);n.outfit=xl(n.outfit),n.hats=Zi.slice();let e=iu(n.name);return n.name=e||"Driver"+Math.floor(1e3+Math.random()*9e3),n}function As(n,e){return n.carSkin[e]||(n.carSkin[e]=yp()),n.carSkin[e]}function Ep(n,e){let t=As(n,e),i=n.outfit;return{p:n.paint[e]|0,r:t.rims,s:wo.indexOf(t.stripes),sc:t.stripe,g:t.glow==null?-1:t.glow,t:To.indexOf(t.tint),o:[i.shirt,i.pants,i.skin,i.hair,Zi.indexOf(i.hat),i.hatColor]}}function bp(n){n=n||{};let e=Array.isArray(n.o)?n.o:[];return{paint:Ti(n.p)?n.p:null,carSkin:Mp({rims:n.r,stripes:wo[n.s],stripe:n.sc,glow:n.g,tint:To[n.t]}),outfit:xl({shirt:e[0],pants:e[1],skin:e[2],hair:e[3],hat:Zi[e[4]],hatColor:e[5]})}}var _l=n=>"#"+(n|0).toString(16).padStart(6,"0");var vl=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,dmg:22,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"glock",name:"Glock 19",price:1800,rate:.16,auto:!1,pellets:1,spread:.014,range:85,dmg:20,ammoBox:34,ammoPrice:70,start:34,desc:"Fast-firing 9mm. Tap tap tap."},{id:"deagle",name:"Desert Eagle",price:4200,rate:.55,auto:!1,pellets:1,spread:.01,range:110,dmg:55,ammoBox:14,ammoPrice:110,start:14,desc:"Hand cannon. Huge damage."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,dmg:14,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,dmg:12,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"ak",name:"AK-47",price:7500,rate:.11,auto:!0,pellets:1,spread:.022,range:120,dmg:26,ammoBox:60,ammoPrice:180,start:60,desc:"Hard-hitting full auto."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,dmg:24,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."},{id:"sniper",name:"Longshot .50",price:15e3,rate:1.3,auto:!1,pellets:1,spread:.001,range:260,dmg:120,ammoBox:10,ammoPrice:250,start:10,desc:"One shot, one drop. Huge range."},{id:"minigun",name:"Shredder Minigun",price:4e4,rate:.04,auto:!0,pellets:1,spread:.05,range:100,dmg:14,ammoBox:400,ammoPrice:600,start:400,desc:"Melts everything. Eats ammo."}],wp=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],Ao=0,yl=Zi.map(n=>({id:n,name:gl[n],price:0})),su=15,$i=n=>vl.find(e=>e.id===n)||null;function Tp(n){let e=new Set(vl.map(t=>t.id));Array.isArray(n.weapons)||(n.weapons=[]),n.weapons=n.weapons.filter((t,i,s)=>e.has(t)&&s.indexOf(t)===i),(!n.ammo||typeof n.ammo!="object")&&(n.ammo={});for(let t of Object.keys(n.ammo))e.has(t)||delete n.ammo[t];for(let t of n.weapons)n.ammo[t]=Math.max(0,n.ammo[t]|0);return n.weapons.includes(n.equipped)||(n.equipped=n.weapons[0]||null),n.outfit=xl(n.outfit),n.hats=yl.map(t=>t.id),n}var kn=n=>({ok:!1,msg:n}),Rs=n=>({ok:!0,msg:n});function Ap(n,e){let t=$i(e);return t?n.weapons.includes(e)?kn("Already owned"):n.cash<t.price?kn("Not enough cash"):(n.cash-=t.price,n.weapons.push(e),n.ammo[e]=(n.ammo[e]|0)+t.start,n.equipped=e,Rs(t.name+" bought")):kn("Unknown weapon")}function Rp(n,e){let t=$i(e);return t?n.weapons.includes(e)?n.cash<t.ammoPrice?kn("Not enough cash"):(n.cash-=t.ammoPrice,n.ammo[e]=(n.ammo[e]|0)+t.ammoBox,Rs("+"+t.ammoBox+" rounds")):kn("Buy the gun first"):kn("Unknown weapon")}function Cp(n,e){return e===null?(n.equipped=null,Rs("Holstered")):n.weapons.includes(e)?(n.equipped=e,Rs($i(e).name+" equipped")):kn("Not owned")}function ru(n){let e=[...n.weapons,null];if(e.length===1)return null;let t=e.indexOf(n.equipped);return n.equipped=e[(t+1)%e.length],n.equipped}function Pp(n,e){return!Number.isInteger(e)||e<0||e>16777215?kn("Unknown color"):n.outfit.shirt===e?kn("Already wearing it"):n.cash<Ao?kn("Not enough cash"):(n.cash-=Ao,n.outfit.shirt=e,Rs("New shirt"))}function Ip(n,e){let t=yl.find(i=>i.id===e);return t?n.hats.includes(e)?(n.outfit.hat=e,Rs(t.name+" on")):n.cash<t.price?kn("Not enough cash"):(n.cash-=t.price,n.hats.push(e),n.outfit.hat=e,Rs(t.name+" bought")):kn("Unknown hat")}var Ml=class{constructor(){this.reset(0,0,0)}reset(e,t,i){this.pos={x:e,z:t},this.heading=i,this.speed=0,this.phase=0}update(e,t,i){t=Math.min(t,.05);let s=Lp(e.moveX||0),r=Lp(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,f=this.pos.z+c*this.speed*t;if(i){let p=i(h,f,.45);h=p.x,f=p.z}return this.pos.x=h,this.pos.z=f,this.phase+=this.speed*t*2.1,this}};function Lp(n){return n<-1?-1:n>1?1:n}function Tr(n,e,t,i){let s=n-t,r=e-i;return Math.sqrt(s*s+r*r)}function ou(n,e,t){let i=Math.cos(t),s=-Math.sin(t);return{x:n-i*1.9,z:e-s*1.9,heading:t}}function Dp(n,e,t,i,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(n<s.minX||n>s.maxX)return 1/0}else{let l=(s.minX-n)/t,c=(s.maxX-n)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(i)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/i,c=(s.maxZ-e)/i;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function au(n,e,t,i,s,r,o,a){let l=n-s,c=e-r,h=l*t+c*i,f=l*l+c*c-o*o,p=h*h-f;if(p<0)return 1/0;let m=Math.sqrt(p),x=-h-m;return x<0&&(x=-h+m),x>=0&&x<=a?x:1/0}It();var jM=()=>new Me({color:13011554,roughness:.75}),eS=()=>new Me({color:2963272,roughness:.85}),tS=()=>new Me({color:1118481,roughness:.6}),nS=()=>new Me({color:2759184,roughness:.9}),iS=()=>new Me({color:1908515,metalness:.7,roughness:.35});function lt(n,e,t,i,s=0){let r=new Ue(n,e,t);r.translate(0,s,0);let o=new ne(r,i);return o.castShadow=!0,o}function sS(n){let e=new ct,t=iS(),i=new Me({color:7031342,roughness:.8});if(n==="pistol")e.add(lt(.06,.08,.24,t,.05).translateZ(-.08)),e.add(lt(.05,.12,.06,t,-.02));else if(n==="shotgun")e.add(lt(.07,.07,.75,t,.05).translateZ(-.28)),e.add(lt(.08,.09,.22,i,0).translateZ(-.38)),e.add(lt(.07,.12,.3,i,0).translateZ(.18));else if(n==="smg")e.add(lt(.07,.11,.42,t,.05).translateZ(-.12)),e.add(lt(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(lt(.04,.04,.12,t,.07).translateZ(-.38));else if(n==="glock"||n==="deagle"){let s=n==="deagle";e.add(lt(s?.07:.06,s?.09:.075,s?.3:.22,t,.05).translateZ(-.08)),e.add(lt(.05,.13,.065,n==="deagle"?i:t,-.03))}else if(n==="sniper")e.add(lt(.06,.1,.95,t,.05).translateZ(-.3)),e.add(lt(.045,.045,.32,t,.14).translateZ(-.12)),e.add(lt(.06,.13,.3,i,0).translateZ(.3));else if(n==="minigun"){for(let s=0;s<6;s++){let r=s/6*Math.PI*2;e.add(lt(.03,.03,.8,t,.05+Math.sin(r)*.06).translateX(Math.cos(r)*.06).translateZ(-.35))}e.add(lt(.2,.2,.3,t,.05).translateZ(.05))}else if(n==="ak"){e.add(lt(.07,.11,.72,t,.05).translateZ(-.22));let s=lt(.06,.2,.08,t,-.1).translateZ(-.18);s.rotation.x=.35,e.add(s),e.add(lt(.06,.12,.28,i,.02).translateZ(.26)),e.add(lt(.07,.06,.24,i,0).translateZ(-.38))}else e.add(lt(.07,.11,.7,t,.05).translateZ(-.22)),e.add(lt(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(lt(.06,.13,.26,t,.02).translateZ(.24)),e.add(lt(.05,.05,.2,t,.14).translateZ(-.15));return e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function rS(n,e){if(n==="crown"){let t=new ct,i=new Me({color:16765503,metalness:1,roughness:.25,emissive:3811840}),s=new ne(new yt(.16,.16,.09,16,1,!0),i);s.material.side=Ct,s.position.y=.02,t.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new ne(new Sr(.035,.09,4),i);a.position.set(Math.cos(o)*.155,.1,Math.sin(o)*.155),t.add(a);let l=new ne(new en(.018,6,6),new Me({color:e,emissive:e,emissiveIntensity:.6}));l.position.set(Math.cos(o+.5)*.162,.02,Math.sin(o+.5)*.162),t.add(l)}return t}if(n==="helmet"){let t=new ct,i=new Xi({color:e,metalness:.4,roughness:.25,clearcoat:1}),s=new ne(new en(.2,16,12,0,Math.PI*2,0,Math.PI/1.7),i);s.position.y=-.06,t.add(s);let r=new ne(new en(.205,16,8,Math.PI*1.2,Math.PI*.6,Math.PI*.35,Math.PI*.25),new Me({color:724762,metalness:.9,roughness:.1}));return r.position.y=-.06,t.add(r),t}if(n==="cap"){let t=new ct,i=new Me({color:e,roughness:.7}),s=new ne(new en(.155,14,8,0,Math.PI*2,0,Math.PI/2),i);t.add(s);let r=lt(.24,.02,.14,i);return r.position.set(0,.01,-.15),t.add(r),t}if(n==="beanie"){let t=new Me({color:e,roughness:.95});return new ne(new en(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(n==="cowboy"){let t=new ct,i=new Me({color:e,roughness:.85}),s=new ne(new yt(.3,.3,.02,20),i),r=new ne(new yt(.12,.15,.17,14),i);return r.position.y=.09,t.add(s,r),t}return null}function Ar(n){let e=new ct,t=jM(),i=eS(),s=tS(),r=nS(),o=new Me({color:n.shirt,roughness:.8}),a=[],l=[];for(let _ of[-1,1]){let w=new ct;w.position.set(_*.12,.92,0),w.add(lt(.17,.84,.2,i,-.42));let E=lt(.17,.09,.3,s,-.88);E.position.z=-.04,w.add(E),e.add(w),a.push(w);let T=new ct;T.position.set(_*.33,1.5,0),T.add(lt(.13,.36,.15,o,-.17)),T.add(lt(.11,.3,.12,t,-.5));let z=lt(.1,.1,.1,t,-.69);T.add(z),e.add(T),l.push(T)}let c=lt(.52,.62,.27,o,1.23);e.add(c);let h=lt(.53,.06,.28,s,.93);e.add(h);let f=lt(.12,.08,.12,t,1.57);e.add(f);let p=new ne(new en(.15,16,12),t);p.position.y=1.74,p.scale.set(1,1.12,1),p.castShadow=!0,e.add(p);let m=new ne(new en(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),r);m.position.y=1.76,e.add(m);let x=new ct,g=new ne(new Ue(.3,.62,.1).translate(0,-.31,0),r);g.position.set(0,1.84,.13),g.rotation.x=.12,g.castShadow=!0;let d=new ne(new Ue(.05,.36,.14).translate(0,-.18,0),r);d.position.set(-.15,1.82,.02);let u=d.clone();u.position.x=.15,x.add(g,d,u),x.visible=!1,e.add(x);let M=new ct;M.position.y=1.8,e.add(M);let v=new ct;return v.position.y=-.69,l[1].add(v),e.userData={legs:a,arms:l,shirt:o,skin:t,pants:i,hair:r,longHair:x,hatSlot:M,gunSlot:v,gunId:null,hatId:null,hatColor:null,recoil:0},Ji(e,n),e}function Ji(n,e){let t=n.userData;t.shirt.color.setHex(e.shirt),e.pants!=null&&t.pants.color.setHex(e.pants),e.skin!=null&&t.skin.color.setHex(e.skin),e.hair!=null&&t.hair.color.setHex(e.hair);let i=e.hatColor!=null?e.hatColor:e.shirt;if(t.hatId!==e.hat||t.hatColor!==i){t.hatSlot.clear();let s=rS(e.hat,i);s&&t.hatSlot.add(s),t.hatId=e.hat,t.hatColor=i}t.hair.visible=e.hat!=="helmet",t.longHair.visible=!!e.hairLong&&e.hat!=="helmet"}function Ro(n,e){let t=n.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let i=sS(e);i.rotation.x=-Math.PI/2,t.gunSlot.add(i)}t.gunId=e}}function Cs(n,e,t,i,s){let r=n.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),i?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),n.position.y=Math.abs(Math.cos(e))*o*.05}function Sl(n){n.userData.recoil=1}It();var Up=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],oS=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function Np(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new cn(i);return s.colorSpace=vt,s.anisotropy=4,s}function aS(n,e,t){return Np(512,128,(i,s,r)=>{i.fillStyle="#0b0f1a",i.fillRect(0,0,s,r),i.strokeStyle=t,i.lineWidth=8,i.strokeRect(6,6,s-12,r-12),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.font="bold 58px sans-serif",i.fillText(n,s/2,52),i.fillStyle="#e2e8f0",i.font="bold 22px sans-serif",i.fillText(e,s/2,100)})}function lS(){return Np(128,128,(n,e,t)=>{let i=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{n.beginPath(),n.arc(i,s,62-a*10,0,Math.PI*2),n.fillStyle=o,n.fill()})})}function Op(n,e){let t=[],i=[],s=new Me({color:14078925,roughness:.85,envMapIntensity:.4}),r=new Me({color:2961720,roughness:.8}),o=new Me({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of oS){let[f,p]=h.bx,[m,x]=h.bz,g=(f+p)/2,d=(m+x)/2,u=p-f,M=x-m,v=new ne(new Ue(u,h.h,M).translate(0,h.h/2,0),s);v.position.set(g,.03,d),v.castShadow=v.receiveShadow=!0,n.add(v);let _=new ne(new Ue(u+.6,.5,M+.6),r);_.position.set(g,h.h+.25,d),n.add(_);let w=h.face==="-x"?-1:1,E=w<0?f:p,T=new ne(new Ue(1.6,.2,M*.9),new Me({color:h.color,roughness:.6}));T.position.set(E+w*.8,3.3,d),T.rotation.z=w*.18,n.add(T);let z=new ne(new it(M*.75,2.4),o);z.position.set(E+w*.02,1.5,d),z.rotation.y=w*Math.PI/2,n.add(z);let y=new Me({map:aS(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});y.emissiveMap=y.map,y.emissiveIntensity=.55;let S=new ne(new it(M*.85,M*.85/4),y);S.position.set(E+w*.05,h.h-1.4,d),S.rotation.y=w*Math.PI/2,n.add(S),e.colliders.push({minX:f,maxX:p,minZ:m,maxZ:x});let I={x:E+w*1.6,z:d},B=new ht({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:Ct}),H=new ne(new Wi(.9,1.25,32).rotateX(-Math.PI/2),B);H.position.set(I.x,.09,I.z),n.add(H);let P=new ht({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:Ct,blending:jt}),A=new ne(new yt(1.05,1.05,3.2,24,1,!0),P);A.position.set(I.x,1.6,I.z),n.add(A),i.push({ring:H,ringMat:B,beamMat:P}),t.push({id:h.id,type:h.type,name:h.name,door:I,color:h.accent})}let a=cS(n,e),l=0;function c(h){l+=h;let f=.55+Math.sin(l*3)*.25;for(let p of i)p.ringMat.opacity=f+.2,p.beamMat.opacity=f*.3,p.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function cS(n,e){let o=new ne(new it(54,16).rotateX(-Math.PI/2),new Me({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,n.add(o);let a=new Me({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let d of l){let u=new ne(new Ue(d.maxX-d.minX,d.h,d.maxZ-d.minZ).translate(0,d.h/2,0),a);u.position.set((d.minX+d.maxX)/2,.03,(d.minZ+d.maxZ)/2),u.castShadow=u.receiveShadow=!0,n.add(u),e.colliders.push({minX:d.minX,maxX:d.maxX,minZ:d.minZ,maxZ:d.maxZ})}let c=new ne(new it(.3,15).rotateX(-Math.PI/2),new ht({color:16765503}));c.position.set(51,.06,156/2),n.add(c);let h=lS(),f=new Me({map:h,roughness:.6,side:Ct}),p=new Me({color:4144966,roughness:.7}),x=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([d,u])=>{let M=new ct;M.position.set(d,.04,u);let v=new ne(new Ue(.08,1.1,.08).translate(0,.55,0),p),_=new ne(new Mr(.55,24),f);return _.position.y=1.5,_.rotation.y=-Math.PI/2,_.castShadow=!0,M.add(v,_),n.add(M),{x:d,z:u,r:.6,up:!0,timer:0,fall:0,pivot:M}});function g(d){for(let u of x)u.up?u.fall>0&&(u.fall=Math.max(0,u.fall-d*4)):(u.fall=Math.min(1,u.fall+d*6),u.timer-=d,u.timer<=0&&(u.up=!0)),u.pivot.rotation.z=u.fall*(Math.PI/2-.05),u.pivot.rotation.z*=-1}return{targets:x,update:g,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function Fp(n){return n.up?(n.up=!1,n.timer=3,!0):!1}It();var hS=.22,Ps=1.45,uS=85,lu=4.5;function zp(n){let e=[],t=new Ya(.07,.5,2,8).rotateX(Math.PI/2),i=new yt(.008,.05,1,6,1,!0).rotateX(Math.PI/2).translate(0,0,.5);for(let d=0;d<48;d++){let u=new ne(t,new ht({color:16774856,transparent:!0,opacity:1,blending:jt,depthWrite:!1}));u.visible=!1,u.frustumCulled=!1;let M=new ne(new en(.22,8,6),new ht({color:16751150,transparent:!0,opacity:.45,blending:jt,depthWrite:!1}));u.add(M);let v=new ne(i,new ht({color:16757575,transparent:!0,opacity:.75,blending:jt,depthWrite:!1,side:Ct}));v.visible=!1,v.frustumCulled=!1,n.add(u,v),e.push({slug:u,trail:v,live:!1,x0:0,z0:0,dx:0,dz:0,dist:0,travel:0,hitT:null,onHit:null,wall:!1})}let s=0,r=new Hn(n,8,{color:16762976,opacity:.95,blending:jt}),o=new Hn(n,30,{color:16757575,opacity:.9,blending:jt}),a=new Hn(n,20,{color:12103840,opacity:.5}),l=0;function c(d,u,M,v,_,w,E,T,z){let y=e[s];s=(s+1)%e.length,Object.assign(y,{live:!0,x0:d,z0:u,dx:M,dz:v,dist:Math.max(.5,_),travel:0,hitT:w,wall:E,onHit:T,onArrive:z||null}),y.slug.visible=!0,y.trail.visible=!0,y.slug.rotation.y=Math.atan2(M,v),h(y)}function h(d){let u=Math.min(d.travel,d.dist),M=d.x0+d.dx*u,v=d.z0+d.dz*u;d.slug.position.set(M,Ps,v),f(d,M,v,Math.min(lu,u))}function f(d,u,M,v){d.trail.position.set(u,Ps,M),d.trail.rotation.y=Math.atan2(-d.dx,-d.dz),d.trail.scale.set(1,1,Math.max(.01,v))}function p(d){let u=d.x0+d.dx*d.dist,M=d.z0+d.dz*d.dist;if(d.onArrive){let v=d.onArrive;d.onArrive=null,v();return}if(d.hitT){Fp(d.hitT)&&d.onHit&&d.onHit(d.hitT);for(let v=0;v<5;v++)o.emit(u,Ps,M,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else d.wall&&(o.emit(u-d.dx*.1,Ps,M-d.dz*.1,{vx:-d.dx*2,vy:1.5,vz:-d.dz*2,life:.18,size:.3,grow:.2}),a.emit(u-d.dx*.2,Ps,M-d.dz*.2,{vx:-d.dx,vy:.6,vz:-d.dz,life:.5,size:.4,grow:1.2}))}function m(d){for(let u of e)if(u.live){if(u.travel+=uS*d,u.travel>=u.dist){if(u.slug.visible&&(p(u),u.slug.visible=!1),u.travel-u.dist>=lu){u.live=!1,u.trail.visible=!1;continue}let M=u.x0+u.dx*u.dist,v=u.z0+u.dz*u.dist,_=lu-(u.travel-u.dist);f(u,M,v,Math.min(_,u.dist));continue}h(u)}}function x(d,u,M,v){let _=M-d,w=v-u,E=Math.hypot(_,w);E>.1&&(r.emit(d,Ps,u,{vx:_/E*2,vy:0,vz:w/E*2,life:.06,size:.7,grow:.6}),c(d,u,_/E,w/E,E,null,!0,null))}function g(d,u,M,v){l=Math.max(0,l-d),m(d),r.update(d),o.update(d),a.update(d);let _=u.save.equipped,w=_&&$i(_);if(M=M||v,!w||!M||l>0)return{fired:!1};if(!w.auto&&!v)return{fired:!1};if((u.save.ammo[_]|0)<=0)return v&&(u.audio.click&&u.audio.click(),u.toast&&u.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),l=.3,{fired:!1,empty:!0};u.save.ammo[_]--,l=w.rate;let E=u.heading,T=hS;for(let D of u.targets){if(!D.up)continue;let O=D.x-u.pos.x,L=D.z-u.pos.z,k=Math.hypot(O,L);if(k>w.range||k<.5)continue;let X=Math.atan2(-O,-L),q=Math.atan2(Math.sin(X-u.heading),Math.cos(X-u.heading));Math.abs(q)<T&&(T=Math.abs(q),E=X)}if(u.hitables)for(let D of u.hitables)for(let O of D){if(O.ref&&O.ref.kind==="ped")continue;let L=O.x-u.pos.x,k=O.z-u.pos.z,X=Math.hypot(L,k);if(X>w.range||X<.5)continue;let q=Math.atan2(-L,-k),te=Math.abs(Math.atan2(Math.sin(q-u.heading),Math.cos(q-u.heading)));te<T&&(T=te,E=q)}let z=-Math.sin(u.heading),y=-Math.cos(u.heading),S=Math.cos(u.heading),I=-Math.sin(u.heading),B=u.pos.x+z*.95+S*.3,H=u.pos.z+y*.95+I*.3;r.emit(B,Ps,H,{vx:z*2,vy:0,vz:y*2,life:.06,size:w.id==="shotgun"?1.1:.7,grow:.6});let P=0,A=[];for(let D=0;D<w.pellets;D++){let O=E+(Math.random()-.5)*2*w.spread,L=-Math.sin(O),k=-Math.cos(O),X=w.range,q=null;for(let G of u.colliders){let K=Dp(B,H,L,k,G,X);K<X&&(X=K,q=null)}for(let G of u.targets){if(!G.up)continue;let K=au(B,H,L,k,G.x,G.z,G.r,X);K<X&&(X=K,q=G)}let te=null;if(u.hitables)for(let G of u.hitables)for(let K of G){let de=au(B,H,L,k,K.x,K.z,K.r,X);de<X&&(X=de,te=K.ref,q=null)}if((q||te)&&P++,te){let G=w.dmg||20,K=L,de=k;c(B,H,L,k,X,null,!1,null,()=>u.onPersonHit&&u.onPersonHit(te,G,K,de))}else c(B,H,L,k,X,q,X<w.range,u.onTargetHit);D<3&&A.push([B,H,B+L*X,H+k*X])}return u.onShot&&u.onShot(A),u.audio.shot&&u.audio.shot(w.id),{fired:!0,hits:P}}return{update:g,remoteShot:x}}var dS=n=>"#"+n.toString(16).padStart(6,"0"),Co=n=>"$"+n.toLocaleString();function Bp(n){let e=c=>document.getElementById(c),t=e("store"),i=e("store-list"),s=null;function r(c){n.toast(c.msg),n.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(n.persist(),n.onChange()),l()}function o(){let c=n.save;i.innerHTML="";for(let f of vl){let p=c.weapons.includes(f.id),m=document.createElement("div");m.className="upg-row store-row"+(c.equipped===f.id?" sel":""),m.innerHTML=`<div class="uinfo"><b>${f.name}</b><small>${f.desc}</small>
        <small class="ammo-line">${p?"Ammo: "+(c.ammo[f.id]|0):Co(f.price)}</small></div>
        <div class="store-btns"></div>`;let x=m.querySelector(".store-btns");if(p){let g=document.createElement("button");g.className="upg-btn",g.textContent="+"+f.ammoBox+" AMMO "+Co(f.ammoPrice),g.disabled=c.cash<f.ammoPrice,g.onclick=()=>r(Rp(c,f.id)),x.appendChild(g);let d=document.createElement("button");d.className="buy-btn eq",d.textContent=c.equipped===f.id?"EQUIPPED":"EQUIP",d.disabled=c.equipped===f.id,d.onclick=()=>r(Cp(c,f.id)),x.appendChild(d)}else{let g=document.createElement("button");g.className="buy-btn",g.textContent="BUY "+Co(f.price),g.disabled=c.cash<f.price,g.onclick=()=>r(Ap(c,f.id)),x.appendChild(g)}i.appendChild(m)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",i.appendChild(h)}function a(){let c=n.save;i.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${Ao?Co(Ao):"FREE"}</b><div class="swatch-row"></div>`;let f=h.querySelector(".swatch-row");for(let g of wp){let d=document.createElement("div");d.className="swatch"+(c.outfit.shirt===g?" sel":""),d.style.background=dS(g),d.onclick=()=>r(Pp(c,g)),f.appendChild(d)}i.appendChild(h);let p=document.createElement("div");p.className="style-sec",p.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let m=p.querySelector(".swatch-row");for(let g of yl){let d=document.createElement("button"),u=c.hats.includes(g.id);d.className="wheel-opt"+(c.outfit.hat===g.id?" sel":""),d.innerHTML=`${g.name}<small>${c.outfit.hat===g.id?"wearing":u||!g.price?"free":Co(g.price)}</small>`,d.onclick=()=>r(Ip(c,g.id)),m.appendChild(d)}i.appendChild(p);let x=document.createElement("p");x.className="store-tip",x.textContent="Everything here is free. More colors, pants, skin tone & hair in \u{1F3A8} SKIN EDITOR (pause menu).",i.appendChild(x)}function l(){e("store-cash").textContent=n.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var Hp=[];for(let n=0;n<=5;n++)Hp.push((n-5/2)*74);var Po=384/2;function kp(n,e){let t=n.getContext("2d"),i=n.width,r=i/2/130,o=0;function a(l,c,h,f,p){if((o++&3)!==0)return;let m=g=>i/2+(g-l)*r,x=g=>i/2+(g-c)*r;t.clearRect(0,0,i,i),t.save(),t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,40,28,0.82)",t.fillRect(0,0,i,i),t.fillStyle="rgba(120,130,145,0.55)";for(let g=0;g<5;g++)for(let d=0;d<5;d++){let u=(g-2)*74,M=(d-4/2)*74;t.fillRect(m(u-30),x(M-30),60*r,60*r)}t.strokeStyle="#2b2f36",t.lineWidth=14*r,t.beginPath();for(let g of Hp)t.moveTo(m(g),x(-Po)),t.lineTo(m(g),x(Po)),t.moveTo(m(-Po),x(g)),t.lineTo(m(Po),x(g));t.moveTo(m(Po),x(0)),t.lineTo(m(232),x(0)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(m(232),x(-225)),t.lineTo(m(232),x(225)),t.stroke();for(let g of e)t.fillStyle=g.color,t.beginPath(),t.arc(m(g.door.x),x(g.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();f&&(t.fillStyle="#ffffff",t.fillRect(m(f.x)-3,x(f.z)-3,6,6)),p&&p.each(g=>{g.b>=0||(t.fillStyle="#4ade80",t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.beginPath(),t.arc(m(g.x),x(g.z),4,0,Math.PI*2),t.fill(),t.stroke())}),t.restore(),t.save(),t.translate(i/2,i/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",i/2,11)}return{draw:a}}var fS={none:"None",center:"Center",dual:"Dual",side:"Side"},pS={clear:"Clear",dark:"Dark",limo:"Limo"};function Gp(n){let e=x=>document.getElementById(x),t=e("skin-editor"),i=e("se-body"),s=n.save,r="car",o=!1;function a(x,g,d,u={}){let M=`<div class="swatch-row se-row" data-key="${x}">`;u.off&&(M+=`<button class="swatch off${d==null?" sel":""}" data-v="off" aria-label="off">OFF</button>`);for(let _ of g)M+=`<button class="swatch${_===d?" sel":""}" data-v="${_}" style="background:${_l(_)}" aria-label="color"></button>`;let v=d!=null&&!g.includes(d);return M+=`<label class="swatch custom${v?" sel":""}" style="${v?"background:"+_l(d):""}" title="Any color"><input type="color" data-key="${x}" value="${_l(d??16777215)}">\u{1F3A8}</label>`,M+"</div>"}function l(x,g,d,u){return`<div class="swatch-row se-row" data-key="${x}">`+g.map(M=>`<button class="wheel-opt${M===u?" sel":""}" data-v="${M}"><b>${d[M]}</b></button>`).join("")+"</div>"}let c=(x,g)=>`<div class="style-sec"><b>${x}</b>${g}</div>`;function h(){let x=s.currentCar,g=As(s,x),u='<div class="swatch-row se-row" data-key="car">'+n.cars.filter(M=>s.owned.includes(M.id)).map(M=>`<button class="wheel-opt${M.id===x?" sel":""}" data-v="${M.id}"><b>${M.name}</b></button>`).join("")+"</div>";i.innerHTML=c("Car",u)+c("Body paint",a("paint",Yi,s.paint[x]))+c("Rims",a("rims",[12172998,1513500,13211182,2287359,14100029,16317180,4906624,11032055],g.rims))+c("Racing stripes",l("stripes",wo,fS,g.stripes))+(g.stripes!=="none"?c("Stripe color",a("stripe",Yi,g.stripe)):"")+c("Underglow",a("glow",[2287359,16723555,4906624,11032055,16765503,16317180],g.glow,{off:!0}))+c("Window tint",l("tint",To,pS,g.tint))}function f(){let x=s.outfit;i.innerHTML=c("Name (shown online)",`<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g,"")}" autocomplete="off" spellcheck="false">`)+c("Shirt",a("shirt",Yi,x.shirt))+c("Pants",a("pants",[2963272,1981066,1120295,7041664,9067034,16317180,7999504,1483594],x.pants))+c("Skin tone",a("skin",pl,x.skin))+c("Hair",a("hair",ml,x.hair))+c("Hat",l("hat",Zi,gl,x.hat))+(x.hat!=="none"?c("Hat color",a("hatColor",Yi,x.hatColor)):"");let g=e("se-name");g.addEventListener("input",()=>{let d=iu(g.value);d&&(s.name=d,n.persist(),n.onName())}),g.addEventListener("keydown",d=>d.stopPropagation())}function p(){for(let x of t.querySelectorAll(".setab"))x.classList.toggle("active",x.dataset.tab===r);r==="car"?h():f()}function m(x,g){let d=s.currentCar,u=As(s,d),M=s.outfit,v=g==="off"?null:typeof g=="string"&&g[0]==="#"?parseInt(g.slice(1),16):isNaN(+g)?g:+g,_=!1,w=!1;switch(x){case"car":s.owned.includes(g)&&(s.currentCar=g,_=!0);break;case"paint":s.paint[d]=v,_=!0;break;case"rims":u.rims=v,_=!0;break;case"stripes":u.stripes=g,_=!0;break;case"stripe":u.stripe=v,_=!0;break;case"glow":u.glow=v,_=!0;break;case"tint":u.tint=g,_=!0;break;case"shirt":case"pants":case"skin":case"hair":case"hatColor":M[x]=v,w=!0;break;case"hat":M.hat=g,w=!0;break}n.persist(),_&&n.onCar(x==="car"),w&&n.onOutfit(),n.beep(760,.03)}i.addEventListener("click",x=>{let g=x.target.closest("button[data-v]");if(!g)return;let d=g.closest("[data-key]");m(d.dataset.key,g.dataset.v),p()}),i.addEventListener("input",x=>{let g=x.target.closest("input[type=color]");if(!g)return;m(g.dataset.key,g.value);let d=g.closest("label");d&&(d.style.background=g.value)}),i.addEventListener("change",x=>{x.target.closest("input[type=color]")&&p()});for(let x of t.querySelectorAll(".setab"))x.addEventListener("click",()=>{r=x.dataset.tab,n.onTab(r),p()});return{open(x){r=x||"car",o=!0,t.classList.remove("hidden"),n.onTab(r),p()},close(){o=!1,t.classList.add("hidden")},get isOpen(){return o},get tab(){return r},refresh:p}}It();var hu=["lobby","apartment","office","diner"],Vp={lobby:"LOBBY",apartment:"APARTMENT",office:"OFFICE",diner:"DINER"},Rr=22,Cr=16,El=4.6,ri=.3,mS=-1180,Wp=n=>hu[(n*2654435761>>>0)%hu.length];function gS(n){return{x:(hu.indexOf(n)-1.5)*90,z:mS}}function cu(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new cn(s);return r.colorSpace=vt,i&&(r.wrapS=r.wrapT=Mi,r.repeat.set(i[0],i[1])),r}var bl=(n,e={})=>new Me(Object.assign({color:n,roughness:.8,metalness:.05,emissive:n,emissiveIntensity:.18},e)),xS={lobby:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#e9e4da":"#b9b2a5",n.fillRect(t*16,e*16,16,16)},apartment:n=>{for(let e=0;e<8;e++)n.fillStyle=e%2?"#9a6a3e":"#a8754a",n.fillRect(0,e*16,128,16),n.fillStyle="#7a5230",n.fillRect(e*37%128,e*16,2,16)},office:n=>{n.fillStyle="#5b6472",n.fillRect(0,0,128,128),n.fillStyle="#525a67";for(let e=0;e<128;e+=32)n.fillRect(e,0,1,128),n.fillRect(0,e,128,1)},diner:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#f2f2f2":"#1a1a1a",n.fillRect(t*16,e*16,16,16)}},_S={lobby:14209732,apartment:13227715,office:14673388,diner:15909813};function Xp(n){let e=new Map;function t(r){if(e.has(r))return e.get(r);let o=gS(r),a=new ct;a.position.set(o.x,0,o.z);let l=[],c=Rr/2,h=Cr/2,f=(T,z,y,S)=>l.push({minX:o.x+T,maxX:o.x+z,minZ:o.z+y,maxZ:o.z+S}),p=(T,z,y,S,I,B=0,H=!0)=>{let P=new ne(T,z);return P.position.set(y,S,I),P.rotation.y=B,P.castShadow=H,P.receiveShadow=!0,a.add(P),P},m=(T,z,y,S,I,B,H=0,P=!0)=>{p(new Ue(T,z,y).translate(0,z/2,0),S,I,H,B),P&&f(I-T/2,I+T/2,B-y/2,B+y/2)},x=cu(128,128,xS[r],[Rr/4,Cr/4]);p(new it(Rr,Cr).rotateX(-Math.PI/2),bl(16777215,{map:x,emissiveMap:x,emissiveIntensity:.2}),0,.02,0,0,!1),p(new it(Rr,Cr).rotateX(Math.PI/2),bl(16053488,{emissiveIntensity:.5}),0,El,0,0,!1);let g=bl(_S[r],{side:Ct}),d=(T,z,y,S)=>{p(new Ue(T,El,z).translate(0,El/2,0),g,y,0,S,0,!1),f(y-T/2,y+T/2,S-z/2,S+z/2)};d(Rr+ri*2,ri,0,-h-ri/2),d(Rr+ri*2,ri,0,h+ri/2),d(ri,Cr,-c-ri/2,0),d(ri,Cr,c+ri/2,0);let u=new Me({color:16777215,emissive:16774364,emissiveIntensity:2.2});for(let T of[-6,0,6])for(let z of[-4,4])p(new it(2.4,.9).rotateX(Math.PI/2),u,T,El-.02,z,0,!1);let M=cu(256,64,(T,z,y)=>{let S=T.createLinearGradient(0,0,0,y);S.addColorStop(0,"#7fb2ee"),S.addColorStop(1,"#cfe6f7"),T.fillStyle=S,T.fillRect(0,0,z,y),T.fillStyle="#3b4656";for(let I=0;I<z;I+=64)T.fillRect(I,0,4,y);T.fillRect(0,0,z,4),T.fillRect(0,y-4,z,4)});p(new it(14,1.6),new ht({map:M}),0,2.6,-h+.01,0,!1);let v=cu(64,96,(T,z,y)=>{T.fillStyle="#20262f",T.fillRect(0,0,z,y),T.fillStyle="#4ade80",T.fillRect(0,0,z,6),T.fillRect(0,0,5,y),T.fillRect(z-5,0,5,y),T.fillStyle="#9fd4ff",T.fillRect(9,12,z-18,y-20),T.fillStyle="#16a34a",T.font="bold 14px sans-serif",T.textAlign="center",T.fillText("EXIT",z/2,40)});p(new it(2.2,3).translate(0,1.5,0),new Me({map:v,emissive:16777215,emissiveMap:v,emissiveIntensity:.6}),0,0,h-.02,Math.PI,!1);let _=new ht({color:4906624,transparent:!0,opacity:.7,depthWrite:!1,side:Ct}),w=p(new Wi(.75,1.05,32).rotateX(-Math.PI/2),_,0,.05,h-1.6,0,!1);vS(r,{add:p,boxAt:m,mat:bl,W2:c,D2:h,group:a,solid:f}),n.add(a);let E={style:r,group:a,colliders:l,pad:w,padMat:_,spawn:{x:o.x,z:o.z+h-3.2,heading:0},exit:{x:o.x,z:o.z+h-1.6},bounds:{minX:o.x-c,maxX:o.x+c,minZ:o.z-h,maxZ:o.z+h}};return e.set(r,E),E}let i=0;function s(r,o){i+=r,o&&(o.padMat.opacity=.5+Math.sin(i*4)*.25,o.pad.rotation.y+=r)}return{get:t,update:s}}function vS(n,e){let{add:t,boxAt:i,mat:s,W2:r,D2:o}=e,a=s(8016432),l=s(2237739),c=s(15921906),h=s(10134445,{metalness:.7,roughness:.35}),f=(x,g)=>{i(.6,.6,.6,s(9067066),x,g),t(new en(.6,10,8),s(4094516),x,1.15,g)},p=(x,g,d,u)=>{let M=s(u),v=new ct,_=new ne(new Ue(2.6,.45,1).translate(0,.22,0),M),w=new ne(new Ue(2.6,.6,.25).translate(0,.75,.38),M),E=new ne(new Ue(.25,.65,1).translate(-1.3,.32,0),M),T=new ne(new Ue(.25,.65,1).translate(1.3,.32,0),M);return v.add(_,w,E,T),v.traverse(y=>{y.isMesh&&(y.castShadow=!0,y.receiveShadow=!0)}),v.position.set(x,0,g),v.rotation.y=d,e.group.add(v),Math.abs(Math.sin(d))>.5?[x-.6,x+.6,g-1.4,g+1.4]:[x-1.4,x+1.4,g-.6,g+.6]},m=x=>e.solid(x[0],x[1],x[2],x[3]);if(n==="lobby"){i(5,1.1,1.2,a,0,-2.5),i(5.2,.08,1.4,c,0,-2.5,1.1,!1);let x=s(12107462,{metalness:.85,roughness:.25,emissiveIntensity:.1});for(let g of[-6,-2,2,6])t(new it(2,3).translate(0,1.5,0),x,g,0,-o+.02,0,!1),t(new it(.4,.2),new ht({color:16747546}),g,3.3,-o+.03,0,!1);m(p(-7,2,Math.PI/2,1981066)),m(p(7,2,-Math.PI/2,1981066)),i(1.4,.4,.8,a,-5,2),i(1.4,.4,.8,a,5,2),f(-r+1,o-1),f(r-1,o-1),f(-r+1,-o+1.5),f(r-1,-o+1.5)}else if(n==="apartment"){m(p(-3,1.5,Math.PI,8141549)),i(1.8,.4,.9,a,-3,-.5),i(3,.5,.4,l,-3,-o+.4),t(new it(2.6,1.5),new Me({color:1118481,emissive:2781142,emissiveIntensity:.9}),-3,1.6,-o+.45,0,!1),i(6,.95,.8,c,6,-o+.5),i(.9,2,.8,h,r-.6,-o+.5),i(2.2,.75,1.1,a,5,-2);for(let x of[4.2,5.8])for(let g of[-3.1,-.9])i(.45,.5,.45,l,x,g);i(2.2,.55,3,s(15921906),r-1.4,3.5),i(2.2,.25,2.2,s(3718648),r-1.4,3.9,.55,!1),i(2.2,1,.2,a,r-1.4,o-3,0,!1),f(-r+1,o-1)}else if(n==="office"){let x=new Me({color:725536,emissive:3718648,emissiveIntensity:.9});for(let g of[-7,-2.5,2.5,7])for(let d of[-4.5,.5])i(3,.75,1.3,c,g,d),t(new Ue(.9,.55,.06).translate(0,.28,0),x,g,.8,d-.3),i(.55,.5,.55,l,g,d+1.1);i(6,.75,1.6,a,0,4.6),t(new it(5,2.2),new Me({color:16777215,emissive:16777215,emissiveIntensity:.3}),-r+.02,2,2,Math.PI/2,!1),f(r-1,o-1),f(-r+1,o-1)}else{i(10,1.05,1,s(14100029),2,-o+3),i(10.2,.08,1.2,c,2,-o+3,1.05,!1);for(let g=0;g<6;g++)t(new yt(.28,.28,.12,12).translate(0,.75,0),s(14100029),-2+g*1.7,0,-o+4.3),i(.12,.7,.12,h,-2+g*1.7,-o+4.3,0,!1);for(let g of[-1,3])i(2.4,.75,1.1,c,-6.5,g),i(2.4,1.1,.5,s(14100029),-6.5,g-1.1),i(2.4,1.1,.5,s(14100029),-6.5,g+1.1);let x=new Me({color:16723555,emissive:16723555,emissiveIntensity:2.5});t(new Ue(8,.12,.06),x,2,3.4,-o+.05,0,!1),t(new Ue(8,.12,.06),new Me({color:2287359,emissive:2287359,emissiveIntensity:2.5}),2,3.1,-o+.05,0,!1),i(1,1.8,.7,s(2060267),r-.8,2),f(r-1,o-1)}}It();var wl=1e5,Is=[{id:"drive",text:"Drive to the green marker",needsTarget:!0},{id:"drift",text:"DRIFT! Hold HB (Space) while steering",needsTarget:!1},{id:"park",text:"Drive to the next marker and stop",needsTarget:!0},{id:"out",text:"Tap GET OUT (E) to leave your car",needsTarget:!1},{id:"enter",text:"Walk to the glowing door and tap ENTER",needsTarget:!0},{id:"exit",text:"Look around, then step on the green EXIT pad",needsTarget:!1}];function yS(n,e){switch(n){case"drive":return!!e.reached;case"drift":return e.driftTime>=1.5;case"park":return!!e.reached&&Math.abs(e.speed||0)<4;case"out":return!!e.onFoot;case"enter":return e.inside>=0;case"exit":return e.inside<0&&!!e.wasInside}return!1}function qp(n,e){let t={x:37,z:-37},i=null,s=1/0;for(let M of e.buildings){let v=Math.hypot(M.door.x-(t.x+30),M.door.z-t.z);v<s&&(s=v,i=M)}let r={drive:{x:37,z:-30,r:8},park:i?{x:i.door.x+i.door.nx*7,z:i.door.z+i.door.nz*7,r:9}:{x:90,z:-37,r:9},enter:i?{x:i.door.x+i.door.nx*.8,z:i.door.z+i.door.nz*.8,r:1.6}:null},o=new ht({color:4906624,transparent:!0,opacity:.85,depthWrite:!1,side:Ct}),a=new ht({color:4906624,transparent:!0,opacity:.22,depthWrite:!1,side:Ct,blending:jt}),l=new ct,c=new ne(new Wi(.85,1,40).rotateX(-Math.PI/2),o);c.position.y=.1;let h=new ne(new yt(1,1,30,24,1,!0).translate(0,15,0),a);l.add(c,h),l.visible=!1,n.add(l);let f=!1,p=0,m=0,x=!1,g=0;function d(){let M=Is[p];return M&&M.needsTarget?r[M.id]:null}function u(){let M=d();l.visible=!!(f&&M),M&&(l.position.set(M.x,0,M.z),l.scale.set(M.r,1,M.r))}return{building:i,start(){f=!0,p=0,m=0,x=!1,u()},stop(){f=!1,l.visible=!1},get active(){return f},get step(){return p},get total(){return Is.length},get text(){return Is[p]?Is[p].text:""},target:d,update(M,v){if(!f)return null;g+=M,o.opacity=.6+Math.sin(g*4)*.25,l.rotation.y+=M*.6;let _=d(),w=_?Math.hypot(v.pos.x-_.x,v.pos.z-_.z)<_.r:!1;return Is[p].id==="drift"&&v.drifting&&(m+=M),v.inside>=0&&(x=!0),yS(Is[p].id,{reached:w,driftTime:m,onFoot:v.onFoot,inside:v.inside,wasInside:x,speed:v.speed})?(p++,p>=Is.length?(f=!1,l.visible=!1,"done"):(u(),"next")):null},get driftProgress(){return Math.min(1,m/1.5)}}}It();function Yp({url:n,key:e,topic:t,onStatus:i}){let s=new Map,r=null,o="off",a=0,l=null,c=null,h=0,f=!1,p=null,m="realtime:"+t;function x(M){if(o!==M&&(o=M,i))try{i(M)}catch{}}function g(M){if(r&&r.readyState===1)try{return r.send(JSON.stringify(M)),!0}catch{}return!1}function d(){if(f)return;clearTimeout(p),x("connecting");let M=n.replace(/^http/,"ws").replace(/\/$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(e)+"&vsn=1.0.0";try{r=new WebSocket(M)}catch{return u()}r.onopen=()=>{l=String(++a),g({topic:m,event:"phx_join",ref:l,join_ref:l,payload:{config:{broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},access_token:e}}),clearInterval(c),c=setInterval(()=>g({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++a)}),25e3)},r.onmessage=v=>{let _;try{_=JSON.parse(v.data)}catch{return}if(_.topic===m){if(_.event==="phx_reply"&&_.ref===l){if(_.payload&&_.payload.status==="ok")h=0,x("on");else{x("error");try{r.close()}catch{}}return}if(_.event==="phx_error"||_.event==="phx_close"){try{r.close()}catch{}return}if(_.event==="broadcast"&&_.payload){let w=s.get(_.payload.event);if(w)try{w(_.payload.payload||{})}catch(E){console.warn("mp handler",E)}}}},r.onclose=()=>{clearInterval(c),c=null,r=null,f||u()},r.onerror=()=>{}}function u(){x("connecting");let M=Math.min(15e3,1e3*Math.pow(1.7,h++));p=setTimeout(d,M)}return{connect(){f=!1,r||d()},close(){if(f=!0,clearTimeout(p),clearInterval(c),r){g({topic:m,event:"phx_leave",payload:{},ref:String(++a),join_ref:l});try{r.close()}catch{}}r=null,x("off")},on(M,v){s.set(M,v)},send(M,v){return o!=="on"?!1:g({topic:m,event:"broadcast",ref:String(++a),join_ref:l,payload:{type:"broadcast",event:M,payload:v}})},get status(){return o}}}var uu="https://fhbqxujlnqlmzvulrdxt.supabase.co",du="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w",Zp="city-driver-v2";var MS=160,SS=1e3,ES=2500,bS=7e3,wS=16,TS=10,AS=(n,e)=>{let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t};function RS(n){let e=String(n||"Driver").slice(0,16),t="700 28px system-ui, -apple-system, sans-serif",i=document.createElement("canvas").getContext("2d");i.font=t;let s=Math.max(70,Math.ceil(i.measureText(e).width)+30),r=44,o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d");a.fillStyle="rgba(8,12,22,0.72)",a.beginPath(),a.roundRect?a.roundRect(1,1,s-2,r-2,14):a.rect(1,1,s-2,r-2),a.fill(),a.fillStyle="#4ade80",a.beginPath(),a.arc(16,r/2,5,0,Math.PI*2),a.fill(),a.font=t,a.fillStyle="#fff",a.textBaseline="middle",a.fillText(e,26,r/2+1);let l=new cn(o),c=new yr(new ys({map:l,transparent:!0,depthTest:!1}));return c.scale.set(s/90,r/90,1),c.renderOrder=999,c}function $p(n){let e=Math.random().toString(36).slice(2,10),t=new Map,i=null,s=0,r=0,o="",a="";function l(){return t.size+1}function c(){n.onCount&&n.onCount(l())}function h(v){let _=t.get(v);_&&(_.car&&n.scene.remove(_.car),_.person&&n.scene.remove(_.person),_.tag&&_.tag.parent&&_.tag.parent.remove(_.tag),t.delete(v),c())}function f(v){let _=v.carId+"|"+v.lookSig;if(v.car&&v.carSig===_)return;v.car&&n.scene.remove(v.car);let w=n.CAR_DEFS.find(T=>T.id===v.carId)||n.CAR_DEFS[0],E=n.buildCar(w);v.look&&n.applyCarSkin(E,v.look.paint,v.look.carSkin),E.position.set(v.cx,0,v.cz),E.rotation.y=v.ch,n.scene.add(E),v.car=E,v.carSig=_}function p(v){v.person||(v.person=n.buildCharacter(v.look?v.look.outfit:{shirt:2845872,hat:"none"}),v.person.position.set(v.x,0,v.z),n.scene.add(v.person),v.outfitSig="");let _=v.look?JSON.stringify(v.look.outfit):"";v.look&&_!==v.outfitSig&&(n.setOutfit(v.person,v.look.outfit),v.outfitSig=_),n.setHeldWeapon(v.person,v.weapon||null)}function m(v){if(!v||!v.id||v.id===e)return;let _=t.get(v.id);if(!_){if(t.size>=wS)return;_={id:v.id,name:"",x:+v.x||0,z:+v.z||0,h:+v.h||0,cx:0,cz:0,ch:0,tx:0,tz:0,th:0,mode:"car",carId:"sport",look:null,lookSig:"",car:null,person:null,tag:null,tagName:"",phase:0,speed:0,b:-1,weapon:null,seen:0},t.set(v.id,_),c()}if(_.seen=performance.now(),_.mode=v.m==="foot"?"foot":"car",_.tx=+v.x||0,_.tz=+v.z||0,_.th=+v.h||0,_.carId=String(v.c||"sport"),_.b=Number.isInteger(v.b)?v.b:-1,_.weapon=v.w||null,_.firing=!!v.f,_.mode==="foot"&&Number.isFinite(v.px)&&(_.cx=+v.px,_.cz=+v.pz,_.ch=+v.ph||0),v.L){let w=JSON.stringify(v.L);w!==_.lookSig&&(_.lookSig=w,_.look=n.unpackLook(v.L))}v.n&&v.n!==_.tagName&&(_.tag&&_.tag.parent&&_.tag.parent.remove(_.tag),_.tag=RS(v.n),_.tagName=v.n,_.name=v.n),_.placed||(_.x=_.tx,_.z=_.tz,_.h=_.th,_.mode==="car"&&(_.cx=_.tx,_.cz=_.tz,_.ch=_.th),_.placed=!0)}function x(v){if(!v||v.id===e||!Array.isArray(v.s))return;let _=t.get(v.id);if(_&&(_.recoil=.35),!(_&&n.localBuilding!==void 0&&_.b!==n.localBuilding()))for(let w of v.s.slice(0,3))Array.isArray(w)&&w.length===4&&n.remoteShot(+w[0],+w[1],+w[2],+w[3])}function g(){i||!uu||!du||(i=Yp({url:uu,key:du,topic:Zp,onStatus:v=>{n.onStatus&&n.onStatus(v,l())}}),i.on("st",m),i.on("sh",x),i.on("bye",v=>{v&&v.id&&h(v.id)}),i.connect(),window.addEventListener("pagehide",()=>{try{i.send("bye",{id:e})}catch{}}))}function d(v,_,w){if(w=w||performance.now(),i&&i.status==="on"&&_){let z=_.mode+(_.x|0)+","+(_.z|0)+","+(_.h*10|0)+_.b+(_.w||""),y=z!==o||Math.abs(_.speed)>.3;if(w-s>=(y?MS:SS)){s=w,o=z;let S={id:e,n:_.name,m:_.mode,x:+_.x.toFixed(2),z:+_.z.toFixed(2),h:+_.h.toFixed(3),c:_.car,b:_.b,w:_.w||null};_.mode==="foot"&&(S.px=+_.px.toFixed(2),S.pz=+_.pz.toFixed(2),S.ph=+_.ph.toFixed(3));let I=JSON.stringify(_.look);(I!==a||w-r>ES)&&(S.L=_.look,r=w,a=I),i.send("st",S)}}let E=Math.min(1,v*TS),T=_?_.b:-1;for(let[z,y]of t){if(w-y.seen>bS){h(z);continue}let S=y.x,I=y.z;if(y.x+=(y.tx-y.x)*E,y.z+=(y.tz-y.z)*E,y.h+=AS(y.h,y.th)*E,y.speed=v>0?Math.hypot(y.x-S,y.z-I)/v:0,y.mode==="car"&&(y.cx=y.x,y.cz=y.z,y.ch=y.h),f(y),y.car.position.set(y.cx,0,y.cz),y.car.rotation.y=y.ch,y.car.visible=T===-1,y.mode==="foot"?(p(y),y.person.visible=y.b===T,y.person.position.x=y.x,y.person.position.z=y.z,y.person.rotation.y=y.h,y.phase+=y.speed*v*2.1,y.recoil=Math.max(0,(y.recoil||0)-v),n.animateCharacter(y.person,y.phase,y.speed,!!y.weapon&&y.recoil>0,v)):y.person&&(y.person.visible=!1),y.tag){let B=y.mode==="foot"?y.person:y.car;B&&y.tag.parent!==B&&(y.tag.parent&&y.tag.parent.remove(y.tag),B.add(y.tag),y.tag.position.set(0,y.mode==="foot"?2.35:2.3,0))}}}function u(v){!i||i.status!=="on"||!v||!v.length||i.send("sh",{id:e,s:v.map(_=>_.map(w=>+w.toFixed(2)))})}function M(v){for(let _ of t.values())v(_)}return{connect:g,update:d,sendShots:u,each:M,get count(){return l()},get status(){return i?i.status:"off"}}}It();function CS(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");e.fillStyle="rgba(110,0,0,1)";let t=(s,r)=>s+Math.random()*(r-s);e.beginPath(),e.arc(64,64,40,0,Math.PI*2),e.fill();for(let s=0;s<14;s++){let r=t(0,Math.PI*2),o=t(20,50),a=t(6,18);e.beginPath(),e.arc(64+Math.cos(r)*o,64+Math.sin(r)*o,a,0,Math.PI*2),e.fill()}let i=new cn(n);return i.colorSpace=vt,i}function Jp(n){let e=new Hn(n,60,{color:10158080,opacity:.95,size:.35}),t=new Hn(n,24,{color:6946816,opacity:.55,size:.8}),i=CS(),s=[];for(let c=0;c<24;c++){let h=new ne(new it(1,1).rotateX(-Math.PI/2),new Me({map:i,transparent:!0,opacity:.92,roughness:.15,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));h.visible=!1,h.renderOrder=3,n.add(h),s.push({m:h,size:0,max:0,life:0})}let r=0;function o(c,h,f,p=0,m=0,x=1){let g=Math.round(6*x);for(let d=0;d<g;d++)e.emit(c+(Math.random()-.5)*.2,h+(Math.random()-.5)*.3,f+(Math.random()-.5)*.2,{vx:p*(1.5+Math.random()*3)+(Math.random()-.5)*2,vy:Math.random()*2.5-.5,vz:m*(1.5+Math.random()*3)+(Math.random()-.5)*2,life:.35+Math.random()*.3,size:.18,grow:.25});t.emit(c,h,f,{vx:p*1.2,vy:.3,vz:m*1.2,life:.4,size:.5,grow:.9})}function a(c,h,f=2.2){let p=s[r];r=(r+1)%s.length,p.m.position.set(c,.07+r*5e-4,h),p.m.rotation.y=Math.random()*Math.PI*2,p.size=.2,p.max=f,p.life=45,p.m.scale.set(.2,1,.2),p.m.material.opacity=.92,p.m.visible=!0}function l(c){e.update(c),t.update(c);for(let h of s)h.m.visible&&(h.life-=c,h.size<h.max&&(h.size=Math.min(h.max,h.size+c*.5),h.m.scale.set(h.size,1,h.size)),h.life<5&&(h.m.material.opacity=.92*Math.max(0,h.life/5)),h.life<=0&&(h.m.visible=!1))}return{hit:o,pool:a,update:l}}var Kp=74,Tl=5,Ki=28,Rl=Ki*8,PS=1.5,IS=5.2,Pr=(n,e)=>n+Math.random()*(e-n),Ls=n=>n[Math.random()*n.length|0];function Al(){return{shirt:Ls(Yi),pants:Ls([2963272,1981066,1120295,7041664,9067034,13358561]),skin:Ls(pl),hair:Ls(ml.slice(0,6)),hat:Math.random()<.25?Ls(["cap","beanie","cowboy"]):"none",hatColor:Ls(Yi),hairLong:Math.random()<.4}}function fu(n,e,t,i){t=(t%Rl+Rl)%Rl;let s=Math.floor(t/(Ki*2)),r=t-s*Ki*2-Ki;return s===0?(i.x=n+r,i.z=e-Ki,i.h=-Math.PI/2):s===1?(i.x=n+Ki,i.z=e+r,i.h=Math.PI):s===2?(i.x=n-r,i.z=e+Ki,i.h=Math.PI/2):(i.x=n-Ki,i.z=e-r,i.h=0),i}function Qp(n){let e=[],t=[],i=[],s={x:0,z:0,h:0},r=n.count||16;function o(_,w){let E=[];for(let T=0;T<Tl;T++)for(let z=0;z<Tl;z++){let y=(T-(Tl-1)/2)*Kp,S=(z-(Tl-1)/2)*Kp;Math.hypot(y-_,S-w)<170&&!(T===0&&z===0)&&E.push({cx:y,cz:S})}return E}function a(_,w,E){let T=o(w,E),z=T.length?Ls(T):{cx:0,cz:0};_.cx=z.cx,_.cz=z.cz,_.p=Pr(0,Rl),_.dir=Math.random()<.5?1:-1,_.state="walk",_.hp=40,_.flee=0,_.phase=Pr(0,6),_.deadT=0,Ji(_.person,Al()),_.person.rotation.set(0,0,0),_.person.visible=!0,fu(_.cx,_.cz,_.p,s),_.x=s.x,_.z=s.z,_.h=s.h}function l(){let _=Ar(Al());n.scene.add(_);let w={person:_,x:0,z:0,h:0,cx:0,cz:0,p:0,dir:1,state:"walk",hp:40,flee:0,phase:0,deadT:0,kind:"ped"};return e.push(w),w}function c(_,w=0,E=0,T="shot"){if(_.state==="dead")return;_.state="dead",_.deadT=0,_.hp=0;let z=Math.atan2(w,E);_.person.rotation.set(0,z+Math.PI,0),_.fallDir={x:w,z:E},n.blood.hit(_.x,1,_.z,w,E,T==="car"?2.5:1.5),n.blood.pool(_.x+w*.9,_.z+E*.9,Pr(1.8,2.8)),_.kind==="enemy"&&_.onDeath&&_.onDeath(_),f(_.x,_.z,35)}function h(_,w,E,T){return _.state==="dead"?!1:(_.hp-=w,n.blood.hit(_.x,1.25,_.z,E,T,.8),_.hp<=0?(c(_,E,T),!0):(_.kind==="ped"&&(_.state="flee",_.flee=7),_.kind==="enemy"&&(_.aggro=!0),!1))}function f(_,w,E){for(let T of e){if(T.state==="dead")continue;let z=Math.hypot(T.x-_,T.z-w);if(z<E){T.state="flee",T.flee=6+Math.random()*3,fu(T.cx,T.cz,T.p+1,s);let y=Math.hypot(s.x-_,s.z-w);T.dir=y>z?1:-1}}}function p(_){let w=Ar(_.outfit||Al());Ji(w,_.outfit||Al()),Ro(w,_.weapon||"pistol"),n.scene.add(w);let E=Object.assign({kind:"enemy",person:w,x:_.x,z:_.z,h:0,hp:_.hp||60,maxHp:_.hp||60,state:"idle",aggro:!1,cool:Pr(.5,1.5),phase:0,deadT:0,strafe:Math.random()<.5?1:-1,accuracy:.45,dmg:8,rate:.9,range:45},_);return E.person.position.set(E.x,0,E.z),t.push(E),E}function m(){for(let _ of t)n.scene.remove(_.person);t.length=0}function x(_,w,E){if(_.state==="dead"){_.deadT+=w,g(_,w);return}let T=E.x-_.x,z=E.z-_.z,y=Math.hypot(T,z);(y<_.range||_.aggro)&&(_.aggro=!0);let S=0;if(_.aggro&&E.alive&&!E.hidden){_.h=Math.atan2(-T,-z);let I=_.boss?9:13,B=0,H=0;y>I+3?(B=T/y,H=z/y):y<I-3&&(B=-T/y,H=-z/y),B+=-z/y*_.strafe*.6,H+=T/y*_.strafe*.6;let P=Math.hypot(B,H)||1;S=_.boss?4.2:3;let A=n.collide(_.x+B/P*S*w,_.z+H/P*S*w,.45);if(Math.abs(A.x-_.x)<1e-4&&Math.abs(A.z-_.z)<1e-4&&(_.strafe*=-1),_.x=A.x,_.z=A.z,Math.random()<w*.4&&(_.strafe*=-1),_.cool-=w,_.cool<=0&&y<_.range*1.2){_.cool=_.rate*Pr(.8,1.3);let D=Math.max(.08,_.accuracy*(1-y/(_.range*1.6))*(E.inCar?.7:1)),O=Math.random()<D,L=_.x-Math.sin(_.h)*.9,k=_.z-Math.cos(_.h)*.9,X=O?0:Pr(1.2,3)*(Math.random()<.5?-1:1),q=E.x+-z/y*X,te=E.z+T/y*X;n.shoot(L,k,q+(q-L)/y*(O?0:12),te+(te-k)/y*(O?0:12)),Sl(_.person),n.audio&&n.audio.shot&&n.audio.shot(_.weapon==="glock"?"pistol":_.weapon),O&&n.onPlayerHit(_.dmg,_)}}_.phase+=S*w*2.1,_.person.position.set(_.x,0,_.z),_.person.rotation.y=_.h,Cs(_.person,_.phase,S,_.aggro,w)}function g(_,w){let E=Math.min(1,_.deadT/.35);if(_.person.rotation.x=-E*(Math.PI/2-.05),_.person.position.y=.12*E,_.deadT>.4){let T=_.person.userData;T.legs[0].rotation.x=.1,T.legs[1].rotation.x=-.15,T.arms[0].rotation.z=.9,T.arms[1].rotation.z=-.9}}function d(_,w){for(;e.length<r;)a(l(),w.x,w.z);for(let E of e){let T=Math.hypot(E.x-w.x,E.z-w.z)>190;if(E.state==="dead"){E.deadT+=_,g(E,_),(E.deadT>30||T&&E.deadT>3)&&a(E,w.x,w.z);continue}if(T){a(E,w.x,w.z);continue}let z=PS;E.state==="flee"&&(E.flee-=_,z=IS,E.flee<=0&&(E.state="walk")),E.p+=E.dir*z*_,fu(E.cx,E.cz,E.p,s),E.x=s.x,E.z=s.z,E.h=s.h+(E.dir<0?Math.PI:0),E.phase+=z*_*2.1,E.person.position.set(E.x,0,E.z),E.person.rotation.y=E.h,Cs(E.person,E.phase,z,!1,_)}for(let E of t)x(E,_,w);i.length=0;for(let E of e)E.state!=="dead"&&i.push({x:E.x,z:E.z,r:.42,ref:E});for(let E of t)E.state!=="dead"&&i.push({x:E.x,z:E.z,r:.45,ref:E})}function u(_,w,E,T){if(Math.abs(T)<5)return 0;let z=-Math.sin(E),y=-Math.cos(E),S=0;for(let I of[e,t])for(let B of I)if(B.state!=="dead"&&(Math.hypot(B.x-_-z*1.2,B.z-w-y*1.2)<1.6||Math.hypot(B.x-_,B.z-w)<1.3)){let H=Math.sign(T);B.kind==="enemy"&&(B.hp=0),c(B,z*H,y*H,"car"),S++}return S}function M(_){for(r=_;e.length>_;){let w=e.pop();n.scene.remove(w.person)}}function v(_){for(let w of e)w.person.visible=_;for(let w of t)w.person.visible=_}return{update:d,damage:h,scare:f,spawnEnemy:p,clearEnemies:m,carHits:u,setCount:M,setVisible:v,get hitList(){return i},get enemies(){return t},get peds(){return e}}}It();var LS=14,Us=3.5,Cl=LS/2+2.2,pu=16;function DS(n,e){let t=(e%pu+pu)%pu;return n==="z"?t<6?"green":t<8?"yellow":"red":t<8?"red":t<14?"green":"yellow"}var US=(n,e)=>(n+e)%2*4;function mu(n,e,t,i){return n==="z"?{x:e+(t<0?Us:-Us),z:i,h:t<0?0:Math.PI}:{x:i,z:e+(t>0?Us:-Us),h:t>0?-Math.PI/2:Math.PI/2}}var Ds=new ot,Io=new Mn,Ir=new N,gu=new N(1,1,1),jp=new N(0,1,0),Pl=new Pe(1710618),NS=new Pe(16722458),OS=new Pe(16756768),FS=new Pe(2883434);function em(n){let e=n.lines.slice().sort((A,D)=>A-D),t=e.length,i=0,s=[];for(let A=0;A<t;A++)for(let D=0;D<t;D++){let O=e[A],L=e[D],k=Cl-.6;s.push({ix:A,iz:D,axis:"z",x:O+k,z:L+k,rot:0}),s.push({ix:A,iz:D,axis:"z",x:O-k,z:L-k,rot:Math.PI}),s.push({ix:A,iz:D,axis:"x",x:O-k,z:L+k,rot:-Math.PI/2}),s.push({ix:A,iz:D,axis:"x",x:O+k,z:L-k,rot:Math.PI/2})}let r=s.length,o=new yt(.09,.11,4.2,6).translate(0,2.1,0),a=new Me({color:3093563,metalness:.6,roughness:.5}),l=new Ue(.45,1.25,.32).translate(0,4.6,0),c=new Me({color:1909030,roughness:.6,metalness:.3}),h=new Mr(.15,12),f=new Tt(o,a,r),p=new Tt(l,c,r),m=new ht({color:16777215,toneMapped:!1}),x=[0,1,2].map(()=>new Tt(h,m,r));p.castShadow=!0,s.forEach((A,D)=>{Io.setFromAxisAngle(jp,A.rot),Ir.set(A.x,0,A.z),Ds.compose(Ir,Io,gu),f.setMatrixAt(D,Ds),p.setMatrixAt(D,Ds);let O=Math.sin(A.rot),L=Math.cos(A.rot);for(let k=0;k<3;k++)Ir.set(A.x+O*.17,5-k*.38,A.z+L*.17),Ds.compose(Ir,Io,gu),x[k].setMatrixAt(D,Ds),x[k].setColorAt(D,Pl)});for(let A of[f,p,...x])A.instanceMatrix.needsUpdate=!0,n.scene.add(A);{let A=new it(Us*2-.6,.45).rotateX(-Math.PI/2),D=new Tt(A,new Me({color:15922422,roughness:.7}),r);s.forEach((O,L)=>{let k=e[O.ix],X=e[O.iz],q,te,G;if(O.axis==="z"){let K=O.rot===0?1:-1;q=k+K*Us,te=X+K*Cl,G=0}else{let K=O.rot<0?-1:1;q=k+K*Cl,te=X-K*Us,G=Math.PI/2}Io.setFromAxisAngle(jp,G),Ir.set(q,.065,te),Ds.compose(Ir,Io,gu),D.setMatrixAt(L,Ds)}),D.instanceMatrix.needsUpdate=!0,n.scene.add(D)}let g=new Array(r).fill("");function d(A,D,O){return DS(O,i+US(A,D))}function u(){let A=!1;for(let D=0;D<r;D++){let O=s[D],L=d(O.ix,O.iz,O.axis);L!==g[D]&&(g[D]=L,A=!0,x[0].setColorAt(D,L==="red"?NS:Pl),x[1].setColorAt(D,L==="yellow"?OS:Pl),x[2].setColorAt(D,L==="green"?FS:Pl))}if(A)for(let D of x)D.instanceColor.needsUpdate=!0}let M=[],v=12,_=A=>{let D=0,O=1/0;for(let L=0;L<t;L++){let k=Math.abs(e[L]-A);k<O&&(O=k,D=L)}return D};function w(){let A=n.CAR_DEFS,D=A[Math.random()*A.length|0],O=n.buildCar(D),L=D.colors[Math.random()*D.colors.length|0];return n.applyCarSkin(O,L,null),n.scene.add(O),{group:O,def:D,axis:"z",li:0,dir:1,s:0,speed:0,cruise:0,x:0,z:0,h:0,honk:0,wait:0}}function E(A,D,O,L){for(let X=0;X<20;X++){A.axis=Math.random()<.5?"z":"x",A.li=Math.random()*t|0,A.dir=Math.random()<.5?1:-1,A.s=e[0]+Math.random()*(e[t-1]-e[0]);let q=mu(A.axis,e[A.li],A.dir,A.s),te=Math.hypot(q.x-D,q.z-O);if(L?te<150:te>70&&te<170){A.x=q.x,A.z=q.z,A.h=q.h;break}}let k=mu(A.axis,e[A.li],A.dir,A.s);A.x=k.x,A.z=k.z,A.h=k.h,A.cruise=9+Math.random()*5,A.speed=A.cruise*.6,A.group.position.set(A.x,0,A.z),A.group.rotation.y=A.h}function T(A){if(A.dir>0){for(let D=0;D<t;D++)if(e[D]>A.s+.3)return D}else for(let D=t-1;D>=0;D--)if(e[D]<A.s-.3)return D;return-1}function z(A,D){let O=Math.random(),L=A.dir>0&&D===t-1||A.dir<0&&D===0,k=O<.55&&!L?"straight":O<.82?"right":"left",X,q;if(k==="straight")return;A.axis==="z"?(X="x",q=A.dir<0==(k==="right")?1:-1):(X="z",q=A.dir>0==(k==="right")?1:-1);let te=e[A.li],G=D;(q>0&&te>=e[t-1]-1||q<0&&te<=e[0]+1)&&(q=-q),A.axis=X,A.li=G,A.dir=q,A.s=te}function y(A,D,O){for(i+=A,u();M.length<v;){let L=w();E(L,D.x,D.z,M.length<4),M.push(L)}for(let L of M){if(Math.hypot(L.x-D.x,L.z-D.z)>230){E(L,D.x,D.z,!1);continue}let k=L.cruise,X=T(L);if(X>=0){let pe=e[X],ge=(pe-L.s)*L.dir,De=ge-Cl,ze=L.axis==="z"?L.li:X,be=L.axis==="z"?X:L.li,Be=d(ze,be,L.axis);De>-.5&&(Be==="red"||Be==="yellow"&&De>5)&&(k=Math.min(k,Math.max(0,De-.3)*1.1)),ge<=.05&&(L.s=pe,z(L,X))}else L.dir=-L.dir;for(let pe of M){if(pe===L||pe.axis!==L.axis||pe.li!==L.li||pe.dir!==L.dir)continue;let ge=(pe.s-L.s)*L.dir;ge>0&&ge<14&&(k=Math.min(k,Math.max(0,(ge-6.5)*1.3)))}if(O){let pe=-Math.sin(L.h),ge=-Math.cos(L.h),De=O.x-L.x,ze=O.z-L.z,be=De*pe+ze*ge,Be=Math.abs(De*ge-ze*pe);be>0&&be<13&&Be<2.6?(k=Math.min(k,Math.max(0,(be-5.5)*1.3)),L.wait+=A):L.wait=0}let q=k>L.speed?4:9;L.speed+=Math.sign(k-L.speed)*Math.min(Math.abs(k-L.speed),q*A),L.s+=L.dir*L.speed*A;let te=mu(L.axis,e[L.li],L.dir,L.s),G=Math.min(1,A*6);L.x+=(te.x-L.x)*G,L.z+=(te.z-L.z)*G;let K=te.h-L.h;K=Math.atan2(Math.sin(K),Math.cos(K)),L.h+=K*Math.min(1,A*5),L.group.position.set(L.x,0,L.z),L.group.rotation.y=L.h;let de=L.speed*A*2.6;for(let pe of L.group.userData.wheels)pe.rotation.x+=de}}function S(A,D){let O=null;for(let L of M){let k=-Math.sin(L.h),X=-Math.cos(L.h);for(let q of[-1.3,0,1.3]){let te=L.x+k*q,G=L.z+X*q,K=1+D,de=A.x-te,pe=A.z-G,ge=Math.hypot(de,pe);ge<K&&ge>1e-6&&(A.x=te+de/ge*K,A.z=G+pe/ge*K,O=L)}}return O&&(O.speed*=.3),O}let I=[];function B(){I.length=0;for(let A of M){let D=-Math.sin(A.h),O=-Math.cos(A.h);I.push({x:A.x+D*.9,z:A.z+O*.9,r:1,ref:{kind:"car",car:A}}),I.push({x:A.x-D*.9,z:A.z-O*.9,r:1,ref:{kind:"car",car:A}})}return I}function H(A){for(v=A;M.length>A;){let D=M.pop();n.scene.remove(D.group)}}function P(A){for(let D of M)D.group.visible=A}return{update:y,collide:S,hitList:B,setCount:H,setVisible:P,stateAt:d,get cars(){return M}}}var{CAR_DEFS:oi,buildCar:Bl,effectiveStats:bm,applyCarSkin:Hl}=Zh,_e=n=>document.getElementById(n),nn,Mt,Ht,At,Tn=null,Gn=null,Fo=null,fe=null,St=null,ke=null,Xn=null,wm=null,wn=null,Re=null,Bt="boot",pn=!1,Ln=!1,Xl="menu",Ut={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},Pu=null,dt=null,Iu=null,$l=null,ts=!1,kl="menu",Do=.6,zt=null,Gr=!1,zo=null,ns=null,Ai=null,fm=null,is=100,Ns=!1,Eu=0,Gl=0,ji={x:0,z:0,alive:!0,hidden:!1,inCar:!0},Jl=bo(),Dn=null,li=null,Tm=null,Br=0,Os=null,Bo=null,ql=null,ti=null,Vl=null,bu=0,wu=1,Vn=null,ut=!1,Ce=null,st=null,Hr=null,ss=null,Lu=null,Wl=null,Fs=!1,es=0,Oo=0,Or=null,Fr=null,pm="",Wn={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},Ol={x:0,z:0},Nt=new N,bn=new N,fn=new N,kr={x:0,z:0},Uo={x:0,z:0,hitX:!1,hitZ:!1},qt={name:"",mode:"car",x:0,z:0,h:0,speed:0,car:"sport",look:null,px:0,pz:0,ph:0,b:-1,w:null},zs=null,Fl={def:null,stats:null,group:null},Bs=[],Tu=[],Au=[],ci=62,Ru=0,mm=0;function sn(n,e=2200){let t=_e("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(mm),mm=setTimeout(()=>t.classList.add("hidden"),e)}function Ri(){let n=Re.cash.toLocaleString();_e("cash-val").textContent=n,_e("garage-cash").textContent=n}function Yl(n){Re.cash=Math.max(0,Re.cash+Math.round(n)),un(Re),Ri()}function Am(){Gn=oi.find(n=>n.id===Re.currentCar)||oi[0],Tn&&Mt.remove(Tn),Tn=Bl(Gn),Hl(Tn,Re.paint[Gn.id],As(Re,Gn.id)),Mt.add(Tn),zs=null,Fo=bm(Gn,Re.upgrades[Gn.id]||{}),Bs=(Tn.userData.wheels||[]).slice(),Tu=Bs.filter(n=>n.position.z<0),Au=Tn.userData.brakeMats||[],_e("menu-car-name").textContent=Gn.name}function Du(){let n=fe.heading;fn.set(-Math.sin(n),0,-Math.cos(n)),Nt.set(fe.pos.x-fn.x*9,4,fe.pos.z-fn.z*9),Ht.position.copy(Nt)}function Uu(){let n=At.spawn;fe.pos.x=n.x,fe.pos.z=n.z,fe.heading=n.heading||0,Jl=bo(),Du(),Kl(0)}function zr(){let n=fe.pos.x,e=fe.pos.z,t=fe.heading;Am(),fe.reset(Fo),fe.pos.x=n,fe.pos.z=e,fe.heading=t,Kl(0)}var ai=new N;function Kl(n){Tn.position.set(fe.pos.x,0,fe.pos.z),Tn.rotation.y=fe.heading;let e=Ut.speed*n*2.4;for(let i=0;i<Bs.length;i++)Bs[i].rotation.x+=e;for(let i=0;i<Tu.length;i++)Tu[i].rotation.y=Ut.steer*.45;let t=St&&St.input.throttle<0;if(Tn.userData.setBrake)Tn.userData.setBrake(t);else for(let i=0;i<Au.length;i++)Au[i].emissiveIntensity=t?4.5:1.8;if(ti){let i=fe.heading;ai.set(-Math.sin(i),0,-Math.cos(i)),ti.position.set(fe.pos.x+ai.x*1.8,1.1,fe.pos.z+ai.z*1.8),Vl.position.set(fe.pos.x+ai.x*22,.4,fe.pos.z+ai.z*22)}}var No=new N;function GS(n,e){let t=Bs[n];return e.setFromMatrixPosition(t.matrixWorld),e}var Su=0;function VS(n){if(!Os||Bt!=="freeroam"||pn||Ln)return;Tn.updateMatrixWorld();let e=Bs.length;if(Ut.drifting&&wu>.3)for(let i=0;i<e;i++)Bs[i].position.z<0||(GS(i,No),Math.random()<.85*wu&&Os.emit(No.x+(Math.random()-.5)*.4,.35,No.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&ql.add(No.x,No.z,fe.heading));if(Su+=n,(St&&St.input.throttle||0)>.4&&Su>.09){Su=0;let i=fe.heading;ai.set(-Math.sin(i),0,-Math.cos(i));let s=Math.cos(i),r=-Math.sin(i);for(let o of[-.45,.45]){let a=fe.pos.x-ai.x*2.2+s*o,l=fe.pos.z-ai.z*2.2+r*o;Bo.emit(a,.32,l,{vx:-ai.x*2,vy:.8,vz:-ai.z*2,life:.5,size:.55,grow:1.6})}}Os.update(n),Bo.update(n)}function WS(n,e){let t=Nu(n,e,1.15);if(Ai&&!dt&&Ai.collide(t,1.15)&&fe){let s=Math.hypot(fe.vel.x,fe.vel.z);fe.vel.x*=.55,fe.vel.z*=.55,s>8&&ke&&ke.beep(90,.08)}return t}function Nu(n,e,t){let i=n,s=e,r=!1,o=!1,a=Iu||At.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(i+t<c.minX||i-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(i,c.maxX)),f=Math.max(c.minZ,Math.min(s,c.maxZ)),p=i-h,m=s-f,x=p*p+m*m;if(!(x>=t*t))if(x>1e-8){let g=Math.sqrt(x),d=(t-g)/g,u=p*d,M=m*d;i+=u,s+=M,Math.abs(u)>Math.abs(M)?r=!0:o=!0}else{let g=i-c.minX,d=c.maxX-i,u=s-c.minZ,M=c.maxZ-s,v=Math.min(g,d,u,M);v===g?(i=c.minX-t,r=!0):v===d?(i=c.maxX+t,r=!0):v===u?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return Uo.x=i,Uo.z=s,Uo.hitX=r,Uo.hitZ=o,Uo}function Ou(n,e,t){let i=Nu(n,e,t);if(dt)return i;Ai&&Ai.collide(i,t);let s=fe.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=fe.pos.x+r*a,c=fe.pos.z+o*a,h=1+t,f=i.x-l,p=i.z-c,m=Math.hypot(f,p);m<h&&m>1e-6&&(i.x=l+f/m*h,i.z=c+p/m*h)}return i}function rs(){if(!st)return;Ji(st,Re.outfit),Ro(st,Re.equipped);let n=Re.equipped&&$i(Re.equipped);_e("weapon-name").textContent=n?n.name.toUpperCase():"UNARMED";let e=_e("weapon-ammo");e.textContent=n?String(Re.ammo[n.id]|0):Re.weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!n)}function Fu(){for(let n of["speedo","gear-hud","nitro-bar"])_e(n).classList.toggle("hidden",ut);_e("weapon-hud").classList.toggle("hidden",!ut)}function Rm(){if(Math.abs(Ut.speed)>4){sn("Slow down to get out");return}let n=ou(fe.pos.x,fe.pos.z,fe.heading),e=Ou(n.x,n.z,.45);Ce.reset(e.x,e.z,fe.heading),fe.vel.x=0,fe.vel.z=0,fe.speed=0,Ut.speed=0,Ut.drifting=!1,Ut.nitro=!1,Ut.steer=0,Jl=bo(),ut=!0,st.visible=!0,st.position.set(Ce.pos.x,0,Ce.pos.z),rs(),St.setMode("foot"),Fu(),ke.engine(0,0),ke.skid(!1),ke.beep(420,.06)}function Cm(){ut&&(ut=!1,st.visible=!1,es=0,St&&St.setMode("drive"),Fu(),Jl=bo(),ke&&ke.beep(520,.06),Oo&&(un(Re),Oo=0))}function XS(n){let e=Ce.heading,t=Ce.pos.x,i=Ce.pos.z;fn.set(-Math.sin(e),0,-Math.cos(e));let s=es>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;if(bn.set(t-fn.x*r+a*c,o,i-fn.z*r+l*c),dt){let f=dt.room.bounds,p=.45;bn.x=Math.max(f.minX+p,Math.min(f.maxX-p,bn.x)),bn.z=Math.max(f.minZ+p,Math.min(f.maxZ-p,bn.z)),bn.y=Math.min(bn.y,3.9)}let h=1-Math.exp(-n*7);Nt.x+=(bn.x-Nt.x)*h,Nt.y+=(bn.y-Nt.y)*h,Nt.z+=(bn.z-Nt.z)*h,Ht.position.copy(Nt),Ht.lookAt(t+fn.x*5+a*c,1.45,i+fn.z*5+l*c),Math.abs(60-ci)>.25&&(ci+=(60-ci)*Math.min(1,n*4),Ht.fov=ci,Ht.updateProjectionMatrix())}function qS(n){if(Ce.update(St.input,n,Ou),st.position.x=Ce.pos.x,st.position.z=Ce.pos.z,st.rotation.y=Ce.heading,St.consumeCycle()){let i=ru(Re);un(Re),rs(),Re.weapons.length?sn(i?$i(i).name:"Holstered",1200):sn("No guns yet \u2014 visit LOCK & LOAD",1600)}Wn.pos.x=Ce.pos.x,Wn.pos.z=Ce.pos.z,Wn.heading=Ce.heading;let e=St.consumeFireEdge();e&&!Re.equipped&&Re.weapons.length&&(ru(Re),rs()),Hr.update(n,Wn,St.input.fire,e).fired&&(ns&&!dt&&ns.scare(Ce.pos.x,Ce.pos.z,45),Sl(st),es=.9,Oo++,_e("weapon-ammo").textContent=String(Re.ammo[Re.equipped]|0)),St.input.fire&&Re.equipped&&(es=Math.max(es,.3)),es=Math.max(0,es-n),Cs(st,Ce.phase,Ce.speed,es>0&&!!Re.equipped,n),XS(n),Oo&&Ru%120===0&&(un(Re),Oo=0)}function dn(n,e,t){if(Or=n,Fr=e,t!==pm){pm=t;let i=_e("btn-action");i.textContent=t||"",i.classList.toggle("hidden",!t)}}function YS(n,e){let t=null,i=1.5;for(let s of At.buildings){if(Tr(n,e,s.door.x+s.door.nx*.5,s.door.z+s.door.nz*.5)<2.2)return s;let o=Math.max(s.minX,Math.min(n,s.maxX)),a=Math.max(s.minZ,Math.min(e,s.maxZ)),l=Math.hypot(n-o,e-a);l<i&&(i=l,t=s)}return t}function zu(){let n=Ce.heading;if(fn.set(-Math.sin(n),0,-Math.cos(n)),Nt.set(Ce.pos.x-fn.x*4.6,2.6,Ce.pos.z-fn.z*4.6),dt){let e=dt.room.bounds,t=.45;Nt.x=Math.max(e.minX+t,Math.min(e.maxX-t,Nt.x)),Nt.z=Math.max(e.minZ+t,Math.min(e.maxZ-t,Nt.z))}Ht.position.copy(Nt)}function Pm(n){let e=Pu.get(Wp(n.id)),t=Tr(Ce.pos.x,Ce.pos.z,n.door.x,n.door.z)<2.6,i,s,r,o;if(t)r=n.door.nx,o=n.door.nz,i=n.door.x+r*1.4,s=n.door.z+o*1.4;else{let a=Math.max(n.minX,Math.min(Ce.pos.x,n.maxX)),l=Math.max(n.minZ,Math.min(Ce.pos.z,n.maxZ)),c=Ce.pos.x-a,h=Ce.pos.z-l,f=Math.hypot(c,h)||1;r=c/f,o=h/f,i=a+r*1.4,s=l+o*1.4}dt={b:n,room:e,back:{x:i,z:s,heading:Math.atan2(-r,-o)}},Iu=e.colliders,Wn.colliders=e.colliders,Wn.targets=[],Ce.reset(e.spawn.x,e.spawn.z,e.spawn.heading),st.position.set(Ce.pos.x,0,Ce.pos.z),zu(),dn(null,null,""),ke.beep(640,.07),sn("\u{1F3E2} Inside: "+Vp[e.style]+" \u2014 EXIT pad is behind you",2200)}function Ql(){if(!dt)return;let n=dt.back;dt=null,Iu=null,Wn.colliders=At.colliders,Wn.targets=ss.targets;let e=Ou(n.x,n.z,.45);Ce.reset(e.x,e.z,n.heading),st.position.set(Ce.pos.x,0,Ce.pos.z),zu(),dn(null,null,""),ke.beep(520,.07)}function gm(){if(ut){if(dt){let i=Tr(Ce.pos.x,Ce.pos.z,dt.room.exit.x,dt.room.exit.z);if(i<.8){Ql();return}return i<2.4?dn("exit",null,"\u{1F6AA} EXIT BUILDING"):dn(null,null,"")}let n=null,e=2.4;for(let i of ss.stores){let s=Tr(Ce.pos.x,Ce.pos.z,i.door.x,i.door.z);s<e&&(e=s,n=i)}if(n)return dn("shop",n,(n.type==="garage"?"\u{1F527} ":n.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+n.name);if(Tr(Ce.pos.x,Ce.pos.z,fe.pos.x,fe.pos.z)<4.2)return dn("in",null,"\u{1F697} GET IN");let t=YS(Ce.pos.x,Ce.pos.z);return t?dn("enter",t,"\u{1F3E2} ENTER BUILDING"):dn(null,null,"")}if(Math.abs(Ut.speed)<4)return dn("out",null,"\u{1F6AA} GET OUT");dn(null,null,"")}function xm(){Or==="out"?Rm():Or==="in"?Cm():Or==="enter"&&Fr?Pm(Fr):Or==="exit"?Ql():Or==="shop"&&Fr&&(Fr.type==="garage"?Zl("play"):ZS(Fr))}function ZS(n){Fs=!0,dn(null,null,""),ke.beep(700,.06),Lu.open(n)}function Im(){Fs=!1,Lu.close(),rs(),Ri()}function Bu(){let n=_e("hp-fill");n&&(n.style.width=Math.max(0,is)+"%",n.style.background=is>50?"#4ade80":is>25?"#fbbf24":"#ef4444")}function _m(n){Ns||Bt!=="freeroam"||(is-=ut?n:n*.5,Gl=.35,Bu(),ke&&ke.beep(160,.05),is<=0&&$S())}function $S(){if(Ns=!0,Eu=0,is=0,Bu(),dn(null,null,""),_e("wasted").classList.remove("hidden"),ut&&st&&(st.rotation.x=-Math.PI/2+.05,st.position.y=.12),zo){let n=ut?Ce.pos.x:fe.pos.x,e=ut?Ce.pos.z:fe.pos.z;zo.pool(n,e,2.6)}typeof onPlayerDied=="function"&&onPlayerDied()}function JS(){Ns=!1,is=100,Bu(),_e("wasted").classList.add("hidden"),st&&(st.rotation.x=0,st.position.y=0);let n=Math.min(500,Math.round(Re.cash*.05));if(n>0&&(Re.cash-=n,un(Re),Ri()),jl(),typeof respawnPoint=="function"){let e=respawnPoint();fe.pos.x=e.x,fe.pos.z=e.z,fe.heading=e.heading,fe.vel.x=fe.vel.z=0,Du(),Kl(0)}else Uu();sn(n>0?"\u{1F3E5} Hospital bill: -$"+n:"\u{1F3E5} Back on your feet",2200)}function KS(n){let e=fe.heading,t=fe.pos.x,i=fe.pos.z;fn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(Ut.speed),r=8.5+s*.045,o=3.6+s*.014;bn.set(t-fn.x*r,o,i-fn.z*r);let a=1-Math.exp(-n*5.5);Nt.x+=(bn.x-Nt.x)*a,Nt.y+=(bn.y-Nt.y)*a,Nt.z+=(bn.z-Nt.z)*a,Ht.position.copy(Nt),Ht.lookAt(t+fn.x*5,1.7,i+fn.z*5);let l=62+Math.min(14,s*.22)+(Ut.nitro?6:0);Math.abs(l-ci)>.25&&(ci+=(l-ci)*Math.min(1,n*4),Ht.fov=ci,Ht.updateProjectionMatrix())}function QS(n){return n<2?"N":n<20?"1":n<40?"2":n<65?"3":n<95?"4":n<125?"5":"6"}function jS(){let n=Math.abs(Ut.speed)*2.2;_e("speed-val").textContent=Math.round(n),_e("gear-hud").textContent=QS(n),_e("nitro-fill").style.width=(Math.max(0,Math.min(1,Ut.nitroFrac))*100).toFixed(1)+"%"}function os(){for(let n of["main-menu","pause-menu","garage"])_e(n).classList.add("hidden")}function eE(){return ts||Gr}function jl(){Fs&&Im(),dt&&Ql(),ut&&Cm(),dn(null,null,"")}function ec(){Bt="menu",pn=!1,Ln=!1,Xn&&Xn.active&&Xn.exit(),jl(),St&&(St.setMode("drive"),St.detach()),os(),_e("main-menu").classList.remove("hidden"),_e("hud").classList.add("hidden"),_e("touch-controls").classList.add("hidden"),_e("drag-ui").classList.add("hidden"),zt&&zt.active&&zt.stop(),_e("objective").classList.add("hidden"),_e("m-tutorial").classList.toggle("hidden",!!Re.tutorialDone),ke.engine(0,0),ke.skid(!1)}function zl(){Xn&&Xn.active&&Xn.exit(),jl(),ti&&(ti.intensity=bu),_e("drag-ui").classList.add("hidden"),Bt="freeroam",pn=!1,Ln=!1,os(),_e("hud").classList.remove("hidden"),_e("touch-controls").classList.remove("hidden"),St.attach(),St.setMode("drive"),Uu(),Ri(),!Re.tutorialDone&&!Re.tutorialSkipped?aE():sn("Free roam \u2014 drift for cash, walk into any building!")}function vm(){jl(),Bt="drag",pn=!1,Ln=!1,ti&&(ti.intensity=0),os(),_e("hud").classList.add("hidden"),_e("touch-controls").classList.remove("hidden"),St.attach(),St.setMode("drag"),_e("drag-ui").classList.remove("hidden"),Xn.enter()}function ym(){Bt!=="freeroam"&&Bt!=="drag"||Ln||Fs||eE()||(pn=!0,dn(null,null,""),os(),_e("pause-menu").classList.remove("hidden"))}function tE(){pn=!1,os()}function Zl(n){Xl=n,Ln=!0,wm.refresh(),Ri(),os(),_e("garage").classList.remove("hidden")}function nE(){Ln=!1,os(),_e("hud").classList.toggle("hidden",Bt!=="freeroam"),st&&rs(),Xl==="menu"?ec():Xl==="pause"?(pn=!0,_e("pause-menu").classList.remove("hidden")):pn=!1,Ri()}var iE=!1;function Cu(n,e){kl=n,Ln&&(Ln=!1),Bt==="freeroam"&&(pn=!0),ts=!0,os(),_e("hud").classList.add("hidden"),_e("touch-controls").classList.add("hidden"),dn(null,null,""),iE=st.visible,$l.open(e||"car")}function sE(n){if(!ut)if(n==="driver"){let e=ou(fe.pos.x,fe.pos.z,fe.heading);st.position.set(e.x,0,e.z),st.rotation.y=fe.heading,Cs(st,0,0,!1,0),st.visible=!0}else st.visible=!1}function rE(){if(ts=!1,$l.close(),st.visible=ut,rs(),kl==="menu"){ec();return}if(kl==="garage"){Zl(Xl);return}(Bt==="freeroam"||Bt==="drag")&&(_e("hud").classList.toggle("hidden",Bt!=="freeroam"),_e("touch-controls").classList.remove("hidden"),kl==="pause"?(pn=!0,_e("pause-menu").classList.remove("hidden")):pn=!1,ut?zu():Du())}function oE(n){Do+=n*.35;let e=$l.tab==="driver",t=e?st.position.x:fe.pos.x,i=e?st.position.z:fe.pos.z,s=e?3.4:7.2,r=e?1.7:2.6,o=e?1.05:.75;Ht.position.set(t+Math.sin(Do)*s,r,i+Math.cos(Do)*s);let a=Math.cos(Do),l=-Math.sin(Do),c=e?.9:2.2;Ht.lookAt(t+a*c,o,i+l*c),Math.abs(55-ci)>.25&&(ci=55,Ht.fov=55,Ht.updateProjectionMatrix()),kr.x=t,kr.z=i,At.update(n,kr)}function aE(){zt&&(zt.start(),_e("objective").classList.remove("hidden"),Lm(),sn("\u{1F393} TUTORIAL \u2014 finish it for $"+wl.toLocaleString()+" + a free car!",3200))}function Lm(){if(!zt.active){_e("objective").classList.add("hidden");return}_e("obj-step").textContent="STEP "+(zt.step+1)+"/"+zt.total,_e("obj-text").textContent=zt.text;let n=zt.target(),e=ut?Ce.pos.x:fe.pos.x,t=ut?Ce.pos.z:fe.pos.z,i=ut?Ce.heading:fe.heading,s=_e("obj-arrow"),r=_e("obj-dist");if(n&&!dt){let o=Math.atan2(-(n.x-e),-(n.z-t)),a=Math.atan2(Math.sin(o-i),Math.cos(o-i));s.style.transform="rotate("+(-a).toFixed(3)+"rad)",s.classList.remove("hidden"),r.textContent=Math.round(Math.hypot(n.x-e,n.z-t))+" m"}else s.classList.add("hidden"),r.textContent=zt.text.startsWith("DRIFT")?Math.round(zt.driftProgress*100)+"%":""}function Dm(){Re.tutorialDone=!0,Yl(wl),un(Re),_e("objective").classList.add("hidden"),ke.beep(880,.1),setTimeout(()=>ke.beep(1175,.14),120),lE()}function lE(){Gr=!0,dn(null,null,"");let n={topSpeed:1,accel:1,handling:1,grip:1};for(let t of oi)for(let i in n)n[i]=Math.max(n[i],t.stats[i]);let e=(t,i,s)=>`<div class="stat-row"><span>${t}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(i/s*100))}%"></i></div></div>`;_e("pick-list").innerHTML=oi.map(t=>`<div class="car-card"><div class="cinfo"><b>${t.name}</b><small>${t.desc} \xB7 worth $${t.price.toLocaleString()}</small><div class="stat-bars">${e("SPD",t.stats.topSpeed,n.topSpeed)}${e("ACC",t.stats.accel,n.accel)}${e("HDL",t.stats.handling,n.handling)}${e("GRP",t.stats.grip,n.grip)}</div></div><button class="buy-btn" data-id="${t.id}">PICK FREE</button></div>`).join(""),_e("car-pick").classList.remove("hidden")}function Um(n){let e=oi.find(t=>t.id===n);e&&(Re.owned.includes(n)||Re.owned.push(n),Re.upgrades[n]||(Re.upgrades[n]={engine:0,turbo:0,tires:0,suspension:0,nitro:0}),typeof Re.paint[n]!="number"&&(Re.paint[n]=e.colors[0]),Re.currentCar=n,un(Re),zr(),_e("car-pick").classList.add("hidden"),Gr=!1,Ri(),sn("\u{1F3C6} "+e.name+" is yours! +$"+wl.toLocaleString()+" in the bank",3200),ke.beep(990,.1))}function Mm(n,e){let t=_e("mp-status");t.classList.remove("hidden"),t.className="mp-status "+n,t.textContent=n==="on"?"\u25CF online \xB7 "+e+(e===1?" player":" players"):n==="connecting"?"\u25CF connecting\u2026":"\u25CF offline";let i=_e("online-hud");i.textContent=n==="on"?"\u{1F310} "+e+" online":"\u{1F310} \u2026",i.classList.toggle("dim",n!=="on")}function cE(){return qt.name=Re.name,qt.car=Gn.id,zs||(zs=Ep(Re,Gn.id)),qt.look=zs,qt.b=dt?dt.b.id:-1,ut?(qt.mode="foot",qt.x=Ce.pos.x,qt.z=Ce.pos.z,qt.h=Ce.heading,qt.speed=Ce.speed,qt.px=fe.pos.x,qt.pz=fe.pos.z,qt.ph=fe.heading,qt.w=Re.equipped||null):(qt.mode="car",qt.x=fe.pos.x,qt.z=fe.pos.z,qt.h=fe.heading,qt.speed=Ut.speed,qt.w=null),qt}async function hE(){nn=new ho({antialias:!1,powerPreference:"high-performance"}),nn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),nn.setSize(Vn.view.w,Vn.view.h),nn.toneMapping=yo,nn.toneMappingExposure=1,nn.shadowMap.enabled=!0,nn.shadowMap.type=nl,_e("game-container").appendChild(nn.domElement),Mt=new vr,Ht=new tn(62,Vn.view.w/Vn.view.h,.1,3e3),At=np(Mt,Up),ss=Op(Mt,At);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(nm(),tm)),t=new _r(nn);Mt.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let n=mp();Mt.add(n.mesh),Tm={uniforms:n.uniforms,sun:At.sun,hemi:At.hemi,scene:Mt,renderer:nn},Nm("day",!0);try{Dn=(await Promise.resolve().then(()=>(dm(),um))).createPostFX(nn,Mt,Ht),Dn.setBloomStrength(dl.day.bloom)}catch(e){console.warn("postfx off",e),Dn=null}li=new ul("auto"),li.onChange(Sm),Sm(li.level,jh(li.level)),Os=new Hn(Mt,70,{color:14211288,opacity:.42}),Bo=new Hn(Mt,40,{color:7829367,opacity:.3,size:.9}),ql=new fl(Mt,500),ti=new Qa(13624575,0,60,.5,.45,1.2),Vl=new Ft,Mt.add(Vl),ti.target=Vl,Mt.add(ti)}function Sm(n,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);nn.setPixelRatio(t),Dn&&(Dn.setPixelRatio(Math.min(t,1)),Dn.setSize(Vn.view.w,Vn.view.h),Dn.setBloomEnabled(e.bloom));let i=e.shadows;(nn.shadowMap.enabled!==i||At&&At.sun.castShadow!==i)&&(nn.shadowMap.enabled=i,At&&(At.sun.castShadow=i),Mt.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),At&&At.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),wu=e.particles,ql&&ql.setVisible(e.particles>.3)}function Nm(n,e){let t=eu;typeof n=="string"&&(Br=t.indexOf(n)),Br<0&&(Br=0);let i=t[Br],s=gp(Tm,i),r=i==="day"?0:i==="sunset"?.45:1;At&&At.setGlow(r),Dn&&Dn.setBloomStrength(s.bloom),bu=i==="day"?0:i==="sunset"?60:160,ti&&Bt!=="drag"&&(ti.intensity=bu);let o=_e("tod-btn");o&&(o.textContent=i==="day"?"\u2600\uFE0F":i==="sunset"?"\u{1F307}":"\u{1F319}"),e||sn(s.label+" mode")}function uE(){Br=(Br+1)%eu.length,Nm()}var Em=performance.now();function Om(n){requestAnimationFrame(Om);let e=(n-Em)/1e3;Em=n,e>0||(e=.016),e>.1&&(e=.1),Ru++;let t=Bt==="freeroam"&&!pn&&!Ln&&!Fs&&!ts&&!Gr&&!Ns;if(ts)oE(e);else if(t&&ut)qS(e),At.update(e,Ce.pos),ss.update(e),Pu.update(e,dt&&dt.room),Os.update(e),Bo.update(e),li&&li.update(e),ke.engine(0,0),ke.skid(!1),Ol.x=fe.pos.x,Ol.z=fe.pos.z,dt?Wl.draw(dt.back.x,dt.back.z,Ce.heading,Ol,wn):Wl.draw(Ce.pos.x,Ce.pos.z,Ce.heading,Ol,wn),gm(),St.consumeAction()&&xm();else if(t){Ut=fe.update(St.input,e,WS);let i=xp(Jl,Ut.drifting,Ut.speed,e);i>0&&(Yl(i),sn("DRIFT +$"+i.toLocaleString())),kr.x=fe.pos.x,kr.z=fe.pos.z,At.update(e,kr),Kl(e),KS(e),jS(),VS(e),ss.update(e),Hr.update(e,Wn,!1,!1),Wl.draw(fe.pos.x,fe.pos.z,fe.heading,null,wn),gm(),St.consumeAction()&&xm(),li&&li.update(e);let s=Math.min(1,Math.abs(Ut.speed)/(Fo.topSpeed*1.15));ke.engine(s,Math.abs(St.input.throttle||0)),ke.skid(Ut.drifting)}else Bt==="drag"&&!pn&&!Ln&&!ts?Xn.active&&Xn.update(e):(ke.engine(0,0),ke.skid(!1));if(Bt==="freeroam"&&!pn&&!Ln&&!ts&&(ji.x=ut?Ce.pos.x:fe.pos.x,ji.z=ut?Ce.pos.z:fe.pos.z,ji.alive=!Ns,ji.hidden=!!dt,ji.inCar=!ut,!Fs&&!Gr&&(ns.update(e,ji),Ai.update(e,ji,ut?null:ji),Ai.hitList(),!ut&&!Ns&&ns.carHits(fe.pos.x,fe.pos.z,fe.heading,Ut.speed)&&(ke.beep(70,.12),fe.vel.x*=.85,fe.vel.z*=.85)),zo.update(e),Gl>0&&(Gl-=e,_e("hurt").style.opacity=String(Math.max(0,Gl/.35)*.75)),Ns&&(Eu+=e,Eu>3.2&&JS())),t&&zt&&zt.active){let i=zt.update(e,{pos:ut?Ce.pos:fe.pos,drifting:!ut&&Ut.drifting,speed:ut?0:Ut.speed,onFoot:ut,inside:dt?dt.b.id:-1});i==="next"?(ke.beep(880,.08),sn("\u2705 Nice! Next: "+zt.text,2200)):i==="done"&&Dm(),Ru%3===0&&Lm()}wn&&wn.update(e,Bt==="freeroam"?cE():null,n),Os&&(Bt!=="freeroam"||pn||Ln||Fs)&&(Os.update(e),Bo.update(e)),Dn?Dn.render():nn.render(Mt,Ht)}function dE(){_e("m-freeroam").onclick=()=>{ke.unlock(),Vn.goLandscape(),ke.beep(600,.06),zl()},_e("m-drag").onclick=()=>{ke.unlock(),Vn.goLandscape(),ke.beep(600,.06),vm()},_e("store-close").onclick=()=>{ke.beep(500,.05),Im()},_e("m-garage").onclick=()=>{ke.unlock(),Zl("menu")},_e("p-resume").onclick=()=>{ke.beep(600,.05),Vn.goLandscape(),tE()},_e("p-freeroam").onclick=()=>{ke.beep(600,.05),zl()},_e("p-drag").onclick=()=>{ke.beep(600,.05),vm()},_e("p-garage").onclick=()=>Zl("pause"),_e("p-quit").onclick=()=>ec(),_e("menu-btn").onclick=ym,_e("garage-close").onclick=nE,_e("drag-exit").onclick=()=>{Xn.active&&Xn.exit(),zl()},_e("m-editor").onclick=()=>{ke.unlock(),ke.beep(600,.05),Cu("menu","car")},_e("p-editor").onclick=()=>{ke.beep(600,.05),Cu("pause",ut?"driver":"car")},_e("se-done").onclick=()=>{ke.beep(500,.05),rE()},_e("m-tutorial").onclick=()=>{ke.unlock(),Vn.goLandscape(),ke.beep(600,.06),Re.tutorialSkipped=!1,un(Re),zl()},_e("obj-skip").onclick=()=>{zt.stop(),Re.tutorialSkipped=!0,un(Re),_e("objective").classList.add("hidden"),sn("Tutorial skipped \u2014 replay it from the main menu for $100K",2600)},_e("pick-list").addEventListener("click",n=>{let e=n.target.closest("button[data-id]");e&&Um(e.dataset.id)}),_e("tod-btn")&&(_e("tod-btn").onclick=()=>{ke.beep(600,.05),uE()}),_e("gfx-btn")&&(_e("gfx-btn").onclick=()=>{ke.beep(600,.05);let n=li.cycleMode();_e("gfx-btn").textContent=n==="auto"?"\u2728":n==="high"?"\u2728+":"\u2728\u2212",sn("Graphics: "+n.toUpperCase()+" ("+pp[li.level]+")")}),window.addEventListener("pointerdown",()=>ke.unlock()),window.addEventListener("keydown",()=>ke.unlock()),document.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("gesturestart",n=>n.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(Bt==="freeroam"||Bt==="drag")&&!pn&&ym()})}function fE(n,e){nn&&(Ht.aspect=n/e,Ht.updateProjectionMatrix(),nn.setSize(n,e),Dn&&Dn.setSize(n,e))}async function pE(){try{Re=Sp(Tp(dp())),ke=lp(),Vn=vp(fE),await hE(),St=ip({isRotated:()=>Vn.rotated}),Ce=new Ml,st=Ar(Re.outfit),st.visible=!1,Mt.add(st),Hr=zp(Mt),Object.assign(Wn,{save:Re,colliders:At.colliders,targets:ss.targets,audio:ke,toast:sn,onTargetHit:()=>{Yl(su),sn("TARGET +$"+su,900)},onShot:n=>{wn&&wn.sendShots(n)}}),Pu=Xp(Mt),zo=Jp(Mt),ns=Qp({scene:Mt,blood:zo,audio:ke,count:14,collide:(n,e,t)=>Nu(n,e,t),shoot:(n,e,t,i)=>Hr.remoteShot(n,e,t,i),onPlayerHit:n=>_m(n)}),Ai=em({scene:Mt,lines:At.roadLines,buildCar:Bl,applyCarSkin:Hl,CAR_DEFS:oi}),fm=Ai.hitList(),Wn.hitables=[ns.hitList,fm],Wn.onPersonHit=(n,e,t,i)=>{n.kind==="ped"||n.kind==="enemy"?ns.damage(n,e,t,i):typeof onRemotePlayerHit=="function"&&n.kind==="player"&&onRemotePlayerHit(n,e,t,i)},zt=qp(Mt,At),Lu=Bp({save:Re,persist:()=>un(Re),toast:n=>sn(n,1600),beep:(n,e)=>ke.beep(n,e),onChange:()=>{Ri(),rs()}}),Wl=kp(_e("minimap"),ss.stores),rs(),Fu(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(n,e,t)=>{ut?Ce.reset(n,e,t||0):(fe.pos.x=n,fe.pos.z=e,fe.heading=t||0)},save:()=>Re,stores:()=>ss.stores,buildings:()=>At.buildings,inside:()=>dt&&{id:dt.b.id,style:dt.room.style},enter:n=>Pm(n),exit:()=>Ql(),getOut:()=>Rm(),tut:()=>zt&&{active:zt.active,step:zt.step},finishTut:()=>Dm(),pick:n=>Um(n),mp:()=>wn&&{status:wn.status,count:wn.count},state:()=>({state:Bt,onFoot:ut,editorOpen:ts,pickOpen:Gr,cash:Re.cash}),shot:(n,e,t,i)=>Hr.remoteShot(n,e,t,i),people:()=>ns,traffic:()=>Ai,hp:()=>is,hurt:n=>_m(n),cam:()=>({c:Ht.position.toArray().map(n=>+n.toFixed(2)),p:st.position.toArray().map(n=>+n.toFixed(2)),pv:st.visible,f:[Ce.pos.x,Ce.pos.z,Ce.heading]})}),Am(),fe=new ll(Fo),Uu(),wm=fp({save:Re,getDef:n=>oi.find(e=>e.id===n),onSelectCar:()=>zr(),onPaint:()=>zr(),onWheels:()=>zr(),refreshScene:()=>zr(),openEditor:()=>Cu("garage","car")}),$l=Gp({save:Re,cars:oi,persist:()=>un(Re),beep:(n,e)=>ke.beep(n,e),onCar:n=>{n?zr():Hl(Tn,Re.paint[Gn.id],As(Re,Gn.id)),zs=null},onOutfit:()=>{Ji(st,Re.outfit),zs=null},onName:()=>{zs=null},onTab:n=>sE(n)}),wn=$p({scene:Mt,CAR_DEFS:oi,buildCar:Bl,applyCarSkin:Hl,buildCharacter:Ar,setOutfit:Ji,setHeldWeapon:Ro,animateCharacter:Cs,unpackLook:bp,remoteShot:(n,e,t,i)=>Hr.remoteShot(n,e,t,i),localBuilding:()=>dt?dt.b.id:-1,onStatus:(n,e)=>Mm(n==="on"?"on":n==="connecting"?"connecting":"off",e),onCount:n=>{wn&&wn.status==="on"&&Mm("on",n)}}),wn.connect(),Xn=ap({scene:Mt,camera:Ht,buildCar:Bl,CAR_DEFS:oi,effectiveStats:bm,getPlayer:()=>(Fl.def=Gn,Fl.stats=Fo,Fl.group=Tn,Fl),controls:St,audio:ke,addCash:Yl,toast:sn,city:At}),dE(),Ri(),_e("loading").classList.add("hidden"),ec(),requestAnimationFrame(Om)}catch(n){console.error(n),_e("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(n&&n.message||n)+"</p>"}}pE();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
