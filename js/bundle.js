(()=>{var gp=Object.defineProperty;var jt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var rr=(i,e)=>{for(var t in e)gp(i,t,{get:e[t],enumerable:!0})};function ci(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Gt(i,e,t){return Math.max(e,Math.min(t,i))}function um(i,e){return(i%e+e)%e}function sl(i,e,t){return(1-t)*i+t*e}function hu(i){return(i&i-1)===0&&i!==0}function kl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function bd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dm(){let i=Bo("canvas");return i.style.display="block",i}function gr(i){i in uu||(uu[i]=!0,console.warn(i))}function Ns(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ol(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function cl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function xl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Tm(i,e,t,n,s,r,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ri,a),l===null)return null;po.copy(a),po.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:i}}function mo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ms),i.getVertexPosition(l,Ss),i.getVertexPosition(c,bs);let h=Tm(i,e,t,n,Ms,Ss,bs,fo);if(h){s&&(co.fromBufferAttribute(s,a),ho.fromBufferAttribute(s,l),uo.fromBufferAttribute(s,c),h.uv=Yi.getInterpolation(fo,Ms,Ss,bs,co,ho,uo,new re)),r&&(co.fromBufferAttribute(r,a),ho.fromBufferAttribute(r,l),uo.fromBufferAttribute(r,c),h.uv1=Yi.getInterpolation(fo,Ms,Ss,bs,co,ho,uo,new re),h.uv2=h.uv1),o&&(Eu.fromBufferAttribute(o,a),wu.fromBufferAttribute(o,l),Tu.fromBufferAttribute(o,c),h.normal=Yi.getInterpolation(fo,Ms,Ss,bs,Eu,wu,Tu,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Yi.getNormal(Ms,Ss,bs,u.normal),h.face=u}return h}function Hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=Hs(i[t]);for(let s in n)e[s]=n[s]}return e}function Am(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function wd(i){return i.getRenderTarget()===null?i.outputColorSpace:st.workingColorSpace}function Td(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Im(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let d=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){let f=g[_];t?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}function d_(i,e,t,n,s,r,o){let a=new Re(0),l=r===!0?0:1,c,h,u=null,d=0,m=null;function g(p,f){let S=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,l):x&&x.isColor&&(_(x,1),S=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ga)?(h===void 0&&(h=new fe(new qe(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Hs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=st.getTransfer(x.colorSpace)!==at,(u!==x||d!==x.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new fe(new Pt(2,2),new At({name:"BackgroundMaterial",uniforms:Hs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=st.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,f){p.getRGB(_o,wd(i)),n.buffers.color.setClear(_o.r,_o.g,_o.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function f_(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function u(R,U,B,z,G){let X=!1;if(o){let K=_(z,B,U);c!==K&&(c=K,m(c.object)),X=f(R,z,B,G),X&&S(R,z,B,G)}else{let K=U.wireframe===!0;(c.geometry!==z.id||c.program!==B.id||c.wireframe!==K)&&(c.geometry=z.id,c.program=B.id,c.wireframe=K,X=!0)}G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,F(R,U,B,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?i.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?i.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,U,B){let z=B.wireframe===!0,G=a[R.id];G===void 0&&(G={},a[R.id]=G);let X=G[U.id];X===void 0&&(X={},G[U.id]=X);let K=X[z];return K===void 0&&(K=p(d()),X[z]=K),K}function p(R){let U=[],B=[],z=[];for(let G=0;G<s;G++)U[G]=0,B[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:z,object:R,attributes:{},index:null}}function f(R,U,B,z){let G=c.attributes,X=U.attributes,K=0,Q=B.getAttributes();for(let he in Q)if(Q[he].location>=0){let ee=G[he],de=X[he];if(de===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),ee===void 0||ee.attribute!==de||de&&ee.data!==de.data)return!0;K++}return c.attributesNum!==K||c.index!==z}function S(R,U,B,z){let G={},X=U.attributes,K=0,Q=B.getAttributes();for(let he in Q)if(Q[he].location>=0){let ee=X[he];ee===void 0&&(he==="instanceMatrix"&&R.instanceMatrix&&(ee=R.instanceMatrix),he==="instanceColor"&&R.instanceColor&&(ee=R.instanceColor));let de={};de.attribute=ee,ee&&ee.data&&(de.data=ee.data),G[he]=de,K++}c.attributes=G,c.attributesNum=K,c.index=z}function x(){let R=c.newAttributes;for(let U=0,B=R.length;U<B;U++)R[U]=0}function b(R){A(R,0)}function A(R,U){let B=c.newAttributes,z=c.enabledAttributes,G=c.attributeDivisors;B[R]=1,z[R]===0&&(i.enableVertexAttribArray(R),z[R]=1),G[R]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,U),G[R]=U)}function T(){let R=c.newAttributes,U=c.enabledAttributes;for(let B=0,z=U.length;B<z;B++)U[B]!==R[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function P(R,U,B,z,G,X,K){K===!0?i.vertexAttribIPointer(R,U,B,G,X):i.vertexAttribPointer(R,U,B,z,G,X)}function F(R,U,B,z){if(n.isWebGL2===!1&&(R.isInstancedMesh||z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let G=z.attributes,X=B.getAttributes(),K=U.defaultAttributeValues;for(let Q in X){let he=X[Q];if(he.location>=0){let q=G[Q];if(q===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(q=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(q=R.instanceColor)),q!==void 0){let ee=q.normalized,de=q.itemSize,Ee=t.get(q);if(Ee===void 0)continue;let xe=Ee.buffer,Ne=Ee.type,Fe=Ee.bytesPerElement,Te=n.isWebGL2===!0&&(Ne===i.INT||Ne===i.UNSIGNED_INT||q.gpuType===fd);if(q.isInterleavedBufferAttribute){let Be=q.data,I=Be.stride,ue=q.offset;if(Be.isInstancedInterleavedBuffer){for(let J=0;J<he.locationSize;J++)A(he.location+J,Be.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let J=0;J<he.locationSize;J++)b(he.location+J);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let J=0;J<he.locationSize;J++)P(he.location+J,de/he.locationSize,Ne,ee,I*Fe,(ue+de/he.locationSize*J)*Fe,Te)}else{if(q.isInstancedBufferAttribute){for(let Be=0;Be<he.locationSize;Be++)A(he.location+Be,q.meshPerAttribute);R.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Be=0;Be<he.locationSize;Be++)b(he.location+Be);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Be=0;Be<he.locationSize;Be++)P(he.location+Be,de/he.locationSize,Ne,ee,de*Fe,de/he.locationSize*Be*Fe,Te)}}else if(K!==void 0){let ee=K[Q];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(he.location,ee);break;case 3:i.vertexAttrib3fv(he.location,ee);break;case 4:i.vertexAttrib4fv(he.location,ee);break;default:i.vertexAttrib1fv(he.location,ee)}}}}T()}function y(){O();for(let R in a){let U=a[R];for(let B in U){let z=U[B];for(let G in z)g(z[G].object),delete z[G];delete U[B]}delete a[R]}}function v(R){if(a[R.id]===void 0)return;let U=a[R.id];for(let B in U){let z=U[B];for(let G in z)g(z[G].object),delete z[G];delete U[B]}delete a[R.id]}function C(R){for(let U in a){let B=a[U];if(B[R.id]===void 0)continue;let z=B[R.id];for(let G in z)g(z[G].object),delete z[G];delete B[R.id]}}function O(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:b,disableUnusedAttributes:T}}function p_(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function m_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=o||e.has("OES_texture_float"),A=x&&b,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:A,maxSamples:T}}function g_(i){let e=this,t=null,n=0,s=!1,r=!1,o=new oi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){let g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:n,x=S*4,b=f.clippingState||null;l.value=b,b=h(g,d,x,m);for(let A=0;A!==x;++A)b[A]=t[A];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,g){let _=u!==null?u.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let f=m+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,b=m;x!==_;++x,b+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function __(i){let e=new WeakMap;function t(o,a){return a===Ol?o.mapping=Fs:a===Fl&&(o.mapping=Bs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ol||a===Fl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xl(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function x_(i){let e=[],t=[],n=[],s=i,r=i-Is+1+Au.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Is?l=Au[o-i+Is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,p=2,f=1,S=new Float32Array(_*g*m),x=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let T=0;T<m;T++){let P=T%3*2/3-1,F=T>2?0:-1,y=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];S.set(y,_*g*T),x.set(d,p*g*T);let v=[T,T,T,T,T,T];b.set(v,f*g*T)}let A=new Mt;A.setAttribute("position",new zt(S,_)),A.setAttribute("uv",new zt(x,p)),A.setAttribute("faceIndex",new zt(b,f)),e.push(A),s>Is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(i,e,t){let n=new sn(i,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function v_(i,e,t){let n=new Float32Array(qi),s=new L(0,1,0);return new At({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Lu(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Iu(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function y_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ol||l===Fl,h=l===Fs||l===Bs;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Gs(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Gs(i));let d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function M_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S_(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(u){let d=[],m=u.index,g=u.attributes.position,_=0;if(m!==null){let S=m.array;_=m.version;for(let x=0,b=S.length;x<b;x+=3){let A=S[x+0],T=S[x+1],P=S[x+2];d.push(A,T,T,P,P,A)}}else if(g!==void 0){let S=g.array;_=g.version;for(let x=0,b=S.length/3-1;x<b;x+=3){let A=x+0,T=x+1,P=x+2;d.push(A,T,T,P,P,A)}}else return;let p=new(bd(d)?Xo:Wo)(d,1);p.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){let d=r.get(u);if(d){let m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function b_(i,e,t,n){let s=n.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,a,m*l),t.update(g,r,1)}function u(m,g,_){if(_===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*l,_),t.update(g,r,_)}function d(m,g,_){if(_===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/l,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let f=0;for(let S=0;S<_;S++)f+=g[S];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function E_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function w_(i,e){return i[0]-e[0]}function T_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function A_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new ft,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let R=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();let S=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],P=h.morphAttributes.color||[],F=0;S===!0&&(F=1),x===!0&&(F=2),b===!0&&(F=3);let y=h.attributes.position.count*F,v=1;y>e.maxTextureSize&&(v=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*v*4*g),O=new ko(C,y,v,g);O.type=Ei,O.needsUpdate=!0;let N=F*4;for(let U=0;U<g;U++){let B=A[U],z=T[U],G=P[U],X=y*v*4*U;for(let K=0;K<B.count;K++){let Q=K*N;S===!0&&(o.fromBufferAttribute(B,K),C[X+Q+0]=o.x,C[X+Q+1]=o.y,C[X+Q+2]=o.z,C[X+Q+3]=0),x===!0&&(o.fromBufferAttribute(z,K),C[X+Q+4]=o.x,C[X+Q+5]=o.y,C[X+Q+6]=o.z,C[X+Q+7]=0),b===!0&&(o.fromBufferAttribute(G,K),C[X+Q+8]=o.x,C[X+Q+9]=o.y,C[X+Q+10]=o.z,C[X+Q+11]=G.itemSize===4?o.w:1)}}_={count:g,texture:O,size:new re(y,v)},r.set(h,_),h.addEventListener("dispose",R)}let p=0;for(let S=0;S<d.length;S++)p+=d[S];let f=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let m=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<m;x++){let b=g[x];b[0]=x,b[1]=d[x]}g.sort(T_);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(w_);let _=h.morphAttributes.position,p=h.morphAttributes.normal,f=0;for(let x=0;x<8;x++){let b=a[x],A=b[0],T=b[1];A!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[A]&&h.setAttribute("morphTarget"+x,_[A]),p&&h.getAttribute("morphNormal"+x)!==p[A]&&h.setAttribute("morphNormal"+x,p[A]),s[x]=T,f+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function R_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Zs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Du[s];if(r===void 0&&(r=new Float32Array(s),Du[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xa(i,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function D_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Fu.set(n),i.uniformMatrix2fv(this.addr,!1,Fu),It(t,n)}}function U_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Ou.set(n),i.uniformMatrix3fv(this.addr,!1,Ou),It(t,n)}}function N_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Nu.set(n),i.uniformMatrix4fv(this.addr,!1,Nu),It(t,n)}}function O_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function F_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function B_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function H_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function G_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function W_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Rd:Ad;t.setTexture2D(e||r,s)}function X_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pd,s)}function q_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ld,s)}function Y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cd,s)}function Z_(i){switch(i){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return U_;case 35676:return N_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return H_;case 36294:return k_;case 36295:return G_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function $_(i,e){i.uniform1fv(this.addr,e)}function J_(i,e){let t=Zs(e,this.size,2);i.uniform2fv(this.addr,t)}function K_(i,e){let t=Zs(e,this.size,3);i.uniform3fv(this.addr,t)}function Q_(i,e){let t=Zs(e,this.size,4);i.uniform4fv(this.addr,t)}function j_(i,e){let t=Zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ex(i,e){let t=Zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tx(i,e){let t=Zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nx(i,e){i.uniform1iv(this.addr,e)}function ix(i,e){i.uniform2iv(this.addr,e)}function sx(i,e){i.uniform3iv(this.addr,e)}function rx(i,e){i.uniform4iv(this.addr,e)}function ox(i,e){i.uniform1uiv(this.addr,e)}function ax(i,e){i.uniform2uiv(this.addr,e)}function lx(i,e){i.uniform3uiv(this.addr,e)}function cx(i,e){i.uniform4uiv(this.addr,e)}function hx(i,e,t){let n=this.cache,s=e.length,r=xa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ad,r[o])}function ux(i,e,t){let n=this.cache,s=e.length,r=xa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pd,r[o])}function dx(i,e,t){let n=this.cache,s=e.length,r=xa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ld,r[o])}function fx(i,e,t){let n=this.cache,s=e.length,r=xa(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),It(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cd,r[o])}function px(i){switch(i){case 5126:return $_;case 35664:return J_;case 35665:return K_;case 35666:return Q_;case 35674:return j_;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ox;case 36294:return ax;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function mx(i,e,t){let n=i.name,s=n.length;for(Tl.lastIndex=0;;){let r=Tl.exec(n),o=Tl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Bu(t,c===void 0?new ql(a,i,e):new Yl(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Zl(a),Bu(t,u)),t=u}}}function zu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function xx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function vx(i){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(i),n;switch(e===t?n="":e===No&&t===Uo?n="LinearDisplayP3ToLinearSRGB":e===Uo&&t===No&&(n="LinearSRGBToLinearDisplayP3"),i){case hi:case _a:return[n,"LinearTransferOETF"];case mt:case Ic:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Hu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+xx(i.getShaderSource(e),o)}else return s}function yx(i,e){let t=vx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mx(i,e){let t;switch(e){case Ac:t="Linear";break;case Rc:t="Reinhard";break;case Cc:t="OptimizedCineon";break;case Nr:t="ACESFilmic";break;case Pc:t="AgX";break;case Xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Sx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ds).join(`
`)}function bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ds).join(`
`)}function Ex(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ds(i){return i!==""}function ku(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function $l(i){return i.replace(Tx,Rx)}function Rx(i,e){let t=Ye[e];if(t===void 0){let n=Ax.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $l(t)}function Vu(i){return i.replace(Cx,Px)}function Px(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ma?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ri&&(e="SHADOWMAP_TYPE_VSM"),e}function Ix(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fs:case Bs:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Bs&&(e="ENVMAP_MODE_REFRACTION"),e}function Ux(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ud:e="ENVMAP_BLENDING_MULTIPLY";break;case Vp:e="ENVMAP_BLENDING_MIX";break;case Wp:e="ENVMAP_BLENDING_ADD";break}return e}function Nx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ox(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Lx(t),c=Ix(t),h=Dx(t),u=Ux(t),d=Nx(t),m=t.isWebGL2?"":Sx(t),g=bx(t),_=Ex(r),p=s.createProgram(),f,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ds).join(`
`),S.length>0&&(S+=`
`)):(f=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),S=[m,Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=$l(o),o=ku(o,t),o=Gu(o,t),a=$l(a),a=ku(a,t),a=Gu(a,t),o=Vu(o),a=Vu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let b=x+f+o,A=x+S+a,T=zu(s,s.VERTEX_SHADER,b),P=zu(s,s.FRAGMENT_SHADER,A);s.attachShader(p,T),s.attachShader(p,P),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function F(O){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(p).trim(),R=s.getShaderInfoLog(T).trim(),U=s.getShaderInfoLog(P).trim(),B=!0,z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,T,P);else{let G=Hu(s,T,"vertex"),X=Hu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+X)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(R===""||U==="")&&(z=!1);z&&(O.diagnostics={runnable:B,programLog:N,vertexShader:{log:R,prefix:f},fragmentShader:{log:U,prefix:S}})}s.deleteShader(T),s.deleteShader(P),y=new Os(s,p),v=wx(s,p)}let y;this.getUniforms=function(){return y===void 0&&F(this),y};let v;this.getAttributes=function(){return v===void 0&&F(this),v};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,gx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_x++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=P,this}function Bx(i,e,t,n,s,r,o){let a=new Vo,l=new Jl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,v,C,O,N){let R=O.fog,U=N.geometry,B=y.isMeshStandardMaterial?O.environment:null,z=(y.isMeshStandardMaterial?t:e).get(y.envMap||B),G=z&&z.mapping===ga?z.image.height:null,X=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let K=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Q=K!==void 0?K.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let q,ee,de,Ee;if(X){let ot=Xn[X];q=ot.vertexShader,ee=ot.fragmentShader}else q=y.vertexShader,ee=y.fragmentShader,l.update(y),de=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);let xe=i.getRenderTarget(),Ne=N.isInstancedMesh===!0,Fe=N.isBatchedMesh===!0,Te=!!y.map,Be=!!y.matcap,I=!!z,ue=!!y.aoMap,J=!!y.lightMap,le=!!y.bumpMap,$=!!y.normalMap,Ae=!!y.displacementMap,_e=!!y.emissiveMap,E=!!y.metalnessMap,M=!!y.roughnessMap,H=y.anisotropy>0,ie=y.clearcoat>0,ne=y.iridescence>0,se=y.sheen>0,be=y.transmission>0,me=H&&!!y.anisotropyMap,ve=ie&&!!y.clearcoatMap,Ue=ie&&!!y.clearcoatNormalMap,ke=ie&&!!y.clearcoatRoughnessMap,j=ne&&!!y.iridescenceMap,et=ne&&!!y.iridescenceThicknessMap,Ge=se&&!!y.sheenColorMap,ze=se&&!!y.sheenRoughnessMap,Ie=!!y.specularMap,we=!!y.specularColorMap,Ve=!!y.specularIntensityMap,te=be&&!!y.transmissionMap,ge=be&&!!y.thicknessMap,ce=!!y.gradientMap,Z=!!y.alphaMap,D=y.alphaTest>0,oe=!!y.alphaHash,ae=!!y.extensions,Me=!!U.attributes.uv1,Se=!!U.attributes.uv2,Qe=!!U.attributes.uv3,je=Ti;return y.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(je=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:ee,defines:y.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Fe,instancing:Ne,instancingColor:Ne&&N.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:hi,map:Te,matcap:Be,envMap:I,envMapMode:I&&z.mapping,envMapCubeUVHeight:G,aoMap:ue,lightMap:J,bumpMap:le,normalMap:$,displacementMap:d&&Ae,emissiveMap:_e,normalMapObjectSpace:$&&y.normalMapType===im,normalMapTangentSpace:$&&y.normalMapType===Md,metalnessMap:E,roughnessMap:M,anisotropy:H,anisotropyMap:me,clearcoat:ie,clearcoatMap:ve,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ke,iridescence:ne,iridescenceMap:j,iridescenceThicknessMap:et,sheen:se,sheenColorMap:Ge,sheenRoughnessMap:ze,specularMap:Ie,specularColorMap:we,specularIntensityMap:Ve,transmission:be,transmissionMap:te,thicknessMap:ge,gradientMap:ce,opaque:y.transparent===!1&&y.blending===wi,alphaMap:Z,alphaTest:D,alphaHash:oe,combine:y.combine,mapUv:Te&&_(y.map.channel),aoMapUv:ue&&_(y.aoMap.channel),lightMapUv:J&&_(y.lightMap.channel),bumpMapUv:le&&_(y.bumpMap.channel),normalMapUv:$&&_(y.normalMap.channel),displacementMapUv:Ae&&_(y.displacementMap.channel),emissiveMapUv:_e&&_(y.emissiveMap.channel),metalnessMapUv:E&&_(y.metalnessMap.channel),roughnessMapUv:M&&_(y.roughnessMap.channel),anisotropyMapUv:me&&_(y.anisotropyMap.channel),clearcoatMapUv:ve&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(y.sheenRoughnessMap.channel),specularMapUv:Ie&&_(y.specularMap.channel),specularColorMapUv:we&&_(y.specularColorMap.channel),specularIntensityMapUv:Ve&&_(y.specularIntensityMap.channel),transmissionMapUv:te&&_(y.transmissionMap.channel),thicknessMapUv:ge&&_(y.thicknessMap.channel),alphaMapUv:Z&&_(y.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($||H),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Me,vertexUv2s:Se,vertexUv3s:Qe,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Te||Z),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:he,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===Bt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ae&&y.extensions.derivatives===!0,extensionFragDepth:ae&&y.extensions.fragDepth===!0,extensionDrawBuffers:ae&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)v.push(C),v.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(S(v,y),x(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function x(y,v){a.disableAll(),v.isWebGL2&&a.enable(0),v.supportsVertexTextures&&a.enable(1),v.instancing&&a.enable(2),v.instancingColor&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function b(y){let v=g[y.type],C;if(v){let O=Xn[v];C=Pi.clone(O.uniforms)}else C=y.uniforms;return C}function A(y,v){let C;for(let O=0,N=c.length;O<N;O++){let R=c[O];if(R.cacheKey===v){C=R,++C.usedTimes;break}}return C===void 0&&(C=new Ox(i,v,y,r),c.push(C)),C}function T(y){if(--y.usedTimes===0){let v=c.indexOf(y);c[v]=c[c.length-1],c.pop(),y.destroy()}}function P(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:c,dispose:F}}function zx(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Hx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=p),e++,f}function a(u,d,m,g,_,p){let f=o(u,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,g,_,p){let f=o(u,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Hx),n.length>1&&n.sort(d||Xu),s.length>1&&s.sort(d||Xu)}function h(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function kx(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new qu,i.set(n,[o])):s>=r.length?(o=new qu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Re};break;case"SpotLight":t={position:new L,direction:new L,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Xx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function qx(i,e){let t=new Gx,n=Vx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,o=new nt,a=new nt;function l(h,u){let d=0,m=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let _=0,p=0,f=0,S=0,x=0,b=0,A=0,T=0,P=0,F=0,y=0;h.sort(Xx);let v=u===!0?Math.PI:1;for(let O=0,N=h.length;O<N;O++){let R=h[O],U=R.color,B=R.intensity,z=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=U.r*B*v,m+=U.g*B*v,g+=U.b*B*v;else if(R.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(R.sh.coefficients[X],B);y++}else if(R.isDirectionalLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*v),R.castShadow){let K=R.shadow,Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,s.directionalShadow[_]=Q,s.directionalShadowMap[_]=G,s.directionalShadowMatrix[_]=R.shadow.matrix,b++}s.directional[_]=X,_++}else if(R.isSpotLight){let X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(U).multiplyScalar(B*v),X.distance=z,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,s.spot[f]=X;let K=R.shadow;if(R.map&&(s.spotLightMap[P]=R.map,P++,K.updateMatrices(R),R.castShadow&&F++),s.spotLightMatrix[f]=K.matrix,R.castShadow){let Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,s.spotShadow[f]=Q,s.spotShadowMap[f]=G,T++}f++}else if(R.isRectAreaLight){let X=t.get(R);X.color.copy(U).multiplyScalar(B),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),s.rectArea[S]=X,S++}else if(R.isPointLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*v),X.distance=R.distance,X.decay=R.decay,R.castShadow){let K=R.shadow,Q=n.get(R);Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=G,s.pointShadowMatrix[p]=R.shadow.matrix,A++}s.point[p]=X,p++}else if(R.isHemisphereLight){let X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(B*v),X.groundColor.copy(R.groundColor).multiplyScalar(B*v),s.hemi[x]=X,x++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let C=s.hash;(C.directionalLength!==_||C.pointLength!==p||C.spotLength!==f||C.rectAreaLength!==S||C.hemiLength!==x||C.numDirectionalShadows!==b||C.numPointShadows!==A||C.numSpotShadows!==T||C.numSpotMaps!==P||C.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=S,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=T+P-F,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=y,C.directionalLength=_,C.pointLength=p,C.spotLength=f,C.rectAreaLength=S,C.hemiLength=x,C.numDirectionalShadows=b,C.numPointShadows=A,C.numSpotShadows=T,C.numSpotMaps=P,C.numLightProbes=y,s.version=Wx++)}function c(h,u){let d=0,m=0,g=0,_=0,p=0,f=u.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){let b=h[S];if(b.isDirectionalLight){let A=s.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),d++}else if(b.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(f),g++}else if(b.isRectAreaLight){let A=s.rectArea[_];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),a.identity(),o.copy(b.matrixWorld),o.premultiply(f),a.extractRotation(o),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let A=s.point[m];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(f),m++}else if(b.isHemisphereLight){let A=s.hemi[p];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(f),p++}}}return{setup:l,setupView:c,state:s}}function Yu(i,e){let t=new qx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Yx(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Yu(i,e),t.set(r,[l])):o>=a.length?(l=new Yu(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}function Jx(i,e,t){let n=new br,s=new re,r=new re,o=new ft,a=new Ql({depthPacking:nm}),l=new jl,c={},h=t.maxTextureSize,u={[Ri]:Bt,[Bt]:Ri,[pn]:pn},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Zx,fragmentShader:$x}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fe(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ma;let f=this.type;this.render=function(T,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;let y=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(qn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=f!==ri&&this.type===ri,R=f===ri&&this.type!==ri;for(let U=0,B=T.length;U<B;U++){let z=T[U],G=z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let X=G.getFrameExtents();if(s.multiply(X),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,G.mapSize.y=r.y)),G.map===null||N===!0||R===!0){let Q=this.type!==ri?{minFilter:nn,magFilter:nn}:{};G.map!==null&&G.map.dispose(),G.map=new sn(s.x,s.y,Q),G.map.texture.name=z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let K=G.getViewportCount();for(let Q=0;Q<K;Q++){let he=G.getViewport(Q);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),O.viewport(o),G.updateMatrices(z,Q),n=G.getFrustum(),b(P,F,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===ri&&S(G,F),G.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(y,v,C)};function S(T,P){let F=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new sn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,F,d,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,F,m,_,null)}function x(T,P,F,y){let v=null,C=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)v=C;else if(v=F.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let O=v.uuid,N=P.uuid,R=c[O];R===void 0&&(R={},c[O]=R);let U=R[N];U===void 0&&(U=v.clone(),R[N]=U,P.addEventListener("dispose",A)),v=U}if(v.visible=P.visible,v.wireframe=P.wireframe,y===ri?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:u[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,F.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let O=i.properties.get(v);O.light=F}return v}function b(T,P,F,y,v){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===ri)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let N=e.update(T),R=T.material;if(Array.isArray(R)){let U=N.groups;for(let B=0,z=U.length;B<z;B++){let G=U[B],X=R[G.materialIndex];if(X&&X.visible){let K=x(T,X,y,v);T.onBeforeShadow(i,T,P,F,N,K,G),i.renderBufferDirect(F,null,N,K,T,G),T.onAfterShadow(i,T,P,F,N,K,G)}}}else if(R.visible){let U=x(T,R,y,v);T.onBeforeShadow(i,T,P,F,N,U,null),i.renderBufferDirect(F,null,N,U,T,null),T.onAfterShadow(i,T,P,F,N,U,null)}}let O=T.children;for(let N=0,R=O.length;N<R;N++)b(O[N],P,F,y,v)}function A(T){T.target.removeEventListener("dispose",A);for(let F in c){let y=c[F],v=T.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function Kx(i,e,t){let n=t.isWebGL2;function s(){let D=!1,oe=new ft,ae=null,Me=new ft(0,0,0,0);return{setMask:function(Se){ae!==Se&&!D&&(i.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){D=Se},setClear:function(Se,Qe,je,ct,ot){ot===!0&&(Se*=ct,Qe*=ct,je*=ct),oe.set(Se,Qe,je,ct),Me.equals(oe)===!1&&(i.clearColor(Se,Qe,je,ct),Me.copy(oe))},reset:function(){D=!1,ae=null,Me.set(-1,0,0,0)}}}function r(){let D=!1,oe=null,ae=null,Me=null;return{setTest:function(Se){Se?Fe(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!D&&(i.depthMask(Se),oe=Se)},setFunc:function(Se){if(ae!==Se){switch(Se){case Op:i.depthFunc(i.NEVER);break;case Fp:i.depthFunc(i.ALWAYS);break;case Bp:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case zp:i.depthFunc(i.EQUAL);break;case Hp:i.depthFunc(i.GEQUAL);break;case kp:i.depthFunc(i.GREATER);break;case Gp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=Se}},setLocked:function(Se){D=Se},setClear:function(Se){Me!==Se&&(i.clearDepth(Se),Me=Se)},reset:function(){D=!1,oe=null,ae=null,Me=null}}}function o(){let D=!1,oe=null,ae=null,Me=null,Se=null,Qe=null,je=null,ct=null,ot=null;return{setTest:function($e){D||($e?Fe(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function($e){oe!==$e&&!D&&(i.stencilMask($e),oe=$e)},setFunc:function($e,Et,Xt){(ae!==$e||Me!==Et||Se!==Xt)&&(i.stencilFunc($e,Et,Xt),ae=$e,Me=Et,Se=Xt)},setOp:function($e,Et,Xt){(Qe!==$e||je!==Et||ct!==Xt)&&(i.stencilOp($e,Et,Xt),Qe=$e,je=Et,ct=Xt)},setLocked:function($e){D=$e},setClear:function($e){ot!==$e&&(i.clearStencil($e),ot=$e)},reset:function(){D=!1,oe=null,ae=null,Me=null,Se=null,Qe=null,je=null,ct=null,ot=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,u=new WeakMap,d={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,x=null,b=null,A=null,T=null,P=null,F=null,y=new Re(0,0,0),v=0,C=!1,O=null,N=null,R=null,U=null,B=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,X=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(K)[1]),G=X>=1):K.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),G=X>=2);let Q=null,he={},q=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),de=new ft().fromArray(q),Ee=new ft().fromArray(ee);function xe(D,oe,ae,Me){let Se=new Uint8Array(4),Qe=i.createTexture();i.bindTexture(D,Qe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ae;je++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(oe+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Qe}let Ne={};Ne[i.TEXTURE_2D]=xe(i.TEXTURE_2D,i.TEXTURE_2D,1),Ne[i.TEXTURE_CUBE_MAP]=xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ne[i.TEXTURE_2D_ARRAY]=xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ne[i.TEXTURE_3D]=xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(i.DEPTH_TEST),l.setFunc(Po),_e(!1),E(Rh),Fe(i.CULL_FACE),$(qn);function Fe(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Te(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Be(D,oe){return m[D]!==oe?(i.bindFramebuffer(D,oe),m[D]=oe,n&&(D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function I(D,oe){let ae=_,Me=!1;if(D)if(ae=g.get(oe),ae===void 0&&(ae=[],g.set(oe,ae)),D.isWebGLMultipleRenderTargets){let Se=D.texture;if(ae.length!==Se.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Qe=0,je=Se.length;Qe<je;Qe++)ae[Qe]=i.COLOR_ATTACHMENT0+Qe;ae.length=Se.length,Me=!0}}else ae[0]!==i.COLOR_ATTACHMENT0&&(ae[0]=i.COLOR_ATTACHMENT0,Me=!0);else ae[0]!==i.BACK&&(ae[0]=i.BACK,Me=!0);Me&&(t.isWebGL2?i.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function ue(D){return p!==D?(i.useProgram(D),p=D,!0):!1}let J={[Xi]:i.FUNC_ADD,[Mp]:i.FUNC_SUBTRACT,[Sp]:i.FUNC_REVERSE_SUBTRACT};if(n)J[Lh]=i.MIN,J[Ih]=i.MAX;else{let D=e.get("EXT_blend_minmax");D!==null&&(J[Lh]=D.MIN_EXT,J[Ih]=D.MAX_EXT)}let le={[bp]:i.ZERO,[Ep]:i.ONE,[wp]:i.SRC_COLOR,[Ul]:i.SRC_ALPHA,[Lp]:i.SRC_ALPHA_SATURATE,[Cp]:i.DST_COLOR,[Ap]:i.DST_ALPHA,[Tp]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[Pp]:i.ONE_MINUS_DST_COLOR,[Rp]:i.ONE_MINUS_DST_ALPHA,[Ip]:i.CONSTANT_COLOR,[Dp]:i.ONE_MINUS_CONSTANT_COLOR,[Up]:i.CONSTANT_ALPHA,[Np]:i.ONE_MINUS_CONSTANT_ALPHA};function $(D,oe,ae,Me,Se,Qe,je,ct,ot,$e){if(D===qn){f===!0&&(Te(i.BLEND),f=!1);return}if(f===!1&&(Fe(i.BLEND),f=!0),D!==yp){if(D!==S||$e!==C){if((x!==Xi||T!==Xi)&&(i.blendEquation(i.FUNC_ADD),x=Xi,T=Xi),$e)switch(D){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,A=null,P=null,F=null,y.set(0,0,0),v=0,S=D,C=$e}return}Se=Se||oe,Qe=Qe||ae,je=je||Me,(oe!==x||Se!==T)&&(i.blendEquationSeparate(J[oe],J[Se]),x=oe,T=Se),(ae!==b||Me!==A||Qe!==P||je!==F)&&(i.blendFuncSeparate(le[ae],le[Me],le[Qe],le[je]),b=ae,A=Me,P=Qe,F=je),(ct.equals(y)===!1||ot!==v)&&(i.blendColor(ct.r,ct.g,ct.b,ot),y.copy(ct),v=ot),S=D,C=!1}function Ae(D,oe){D.side===pn?Te(i.CULL_FACE):Fe(i.CULL_FACE);let ae=D.side===Bt;oe&&(ae=!ae),_e(ae),D.blending===wi&&D.transparent===!1?$(qn):$(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);let Me=D.stencilWrite;c.setTest(Me),Me&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),H(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Fe(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function E(D){D!==_p?(Fe(i.CULL_FACE),D!==N&&(D===Rh?i.cullFace(i.BACK):D===xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),N=D}function M(D){D!==R&&(G&&i.lineWidth(D),R=D)}function H(D,oe,ae){D?(Fe(i.POLYGON_OFFSET_FILL),(U!==oe||B!==ae)&&(i.polygonOffset(oe,ae),U=oe,B=ae)):Te(i.POLYGON_OFFSET_FILL)}function ie(D){D?Fe(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function ne(D){D===void 0&&(D=i.TEXTURE0+z-1),Q!==D&&(i.activeTexture(D),Q=D)}function se(D,oe,ae){ae===void 0&&(Q===null?ae=i.TEXTURE0+z-1:ae=Q);let Me=he[ae];Me===void 0&&(Me={type:void 0,texture:void 0},he[ae]=Me),(Me.type!==D||Me.texture!==oe)&&(Q!==ae&&(i.activeTexture(ae),Q=ae),i.bindTexture(D,oe||Ne[D]),Me.type=D,Me.texture=oe)}function be(){let D=he[Q];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ve(D){de.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),de.copy(D))}function te(D){Ee.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ee.copy(D))}function ge(D,oe){let ae=u.get(oe);ae===void 0&&(ae=new WeakMap,u.set(oe,ae));let Me=ae.get(D);Me===void 0&&(Me=i.getUniformBlockIndex(oe,D.name),ae.set(D,Me))}function ce(D,oe){let Me=u.get(oe).get(D);h.get(oe)!==Me&&(i.uniformBlockBinding(oe,Me,D.__bindingPointIndex),h.set(oe,Me))}function Z(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,he={},m={},g=new WeakMap,_=[],p=null,f=!1,S=null,x=null,b=null,A=null,T=null,P=null,F=null,y=new Re(0,0,0),v=0,C=!1,O=null,N=null,R=null,U=null,B=null,de.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Te,bindFramebuffer:Be,drawBuffers:I,useProgram:ue,setBlending:$,setMaterial:Ae,setFlipSided:_e,setCullFace:E,setLineWidth:M,setPolygonOffset:H,setScissorTest:ie,activeTexture:ne,bindTexture:se,unbindTexture:be,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Ie,texImage3D:we,updateUBOMapping:ge,uniformBlockBinding:ce,texStorage2D:Ge,texStorage3D:ze,texSubImage2D:Ue,texSubImage3D:ke,compressedTexSubImage2D:j,compressedTexSubImage3D:et,scissor:Ve,viewport:te,reset:Z}}function Qx(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,M){return m?new OffscreenCanvas(E,M):Bo("canvas")}function _(E,M,H,ie){let ne=1;if((E.width>ie||E.height>ie)&&(ne=ie/Math.max(E.width,E.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let se=M?kl:Math.floor,be=se(ne*E.width),me=se(ne*E.height);u===void 0&&(u=g(be,me));let ve=H?g(be,me):u;return ve.width=be,ve.height=me,ve.getContext("2d").drawImage(E,0,0,be,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+be+"x"+me+")."),ve}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return hu(E.width)&&hu(E.height)}function f(E){return a?!1:E.wrapS!==In||E.wrapT!==In||E.minFilter!==nn&&E.minFilter!==Mn}function S(E,M){return E.generateMipmaps&&M&&E.minFilter!==nn&&E.minFilter!==Mn}function x(E){i.generateMipmap(E)}function b(E,M,H,ie,ne=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=M;if(M===i.RED&&(H===i.FLOAT&&(se=i.R32F),H===i.HALF_FLOAT&&(se=i.R16F),H===i.UNSIGNED_BYTE&&(se=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(se=i.R8UI),H===i.UNSIGNED_SHORT&&(se=i.R16UI),H===i.UNSIGNED_INT&&(se=i.R32UI),H===i.BYTE&&(se=i.R8I),H===i.SHORT&&(se=i.R16I),H===i.INT&&(se=i.R32I)),M===i.RG&&(H===i.FLOAT&&(se=i.RG32F),H===i.HALF_FLOAT&&(se=i.RG16F),H===i.UNSIGNED_BYTE&&(se=i.RG8)),M===i.RGBA){let be=ne?Do:st.getTransfer(ie);H===i.FLOAT&&(se=i.RGBA32F),H===i.HALF_FLOAT&&(se=i.RGBA16F),H===i.UNSIGNED_BYTE&&(se=be===at?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function A(E,M,H){return S(E,H)===!0||E.isFramebufferTexture&&E.minFilter!==nn&&E.minFilter!==Mn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function T(E){return E===nn||E===Dh||E===Ja?i.NEAREST:i.LINEAR}function P(E){let M=E.target;M.removeEventListener("dispose",P),y(M),M.isVideoTexture&&h.delete(M)}function F(E){let M=E.target;M.removeEventListener("dispose",F),C(M)}function y(E){let M=n.get(E);if(M.__webglInit===void 0)return;let H=E.source,ie=d.get(H);if(ie){let ne=ie[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&v(E),Object.keys(ie).length===0&&d.delete(H)}n.remove(E)}function v(E){let M=n.get(E);i.deleteTexture(M.__webglTexture);let H=E.source,ie=d.get(H);delete ie[M.__cacheKey],o.memory.textures--}function C(E){let M=E.texture,H=n.get(E),ie=n.get(M);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(H.__webglFramebuffer[ne]))for(let se=0;se<H.__webglFramebuffer[ne].length;se++)i.deleteFramebuffer(H.__webglFramebuffer[ne][se]);else i.deleteFramebuffer(H.__webglFramebuffer[ne]);H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[ne])}else{if(Array.isArray(H.__webglFramebuffer))for(let ne=0;ne<H.__webglFramebuffer.length;ne++)i.deleteFramebuffer(H.__webglFramebuffer[ne]);else i.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ne=0;ne<H.__webglColorRenderbuffer.length;ne++)H.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[ne]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ne=0,se=M.length;ne<se;ne++){let be=n.get(M[ne]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),o.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(E)}let O=0;function N(){O=0}function R(){let E=O;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),O+=1,E}function U(E){let M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.colorSpace),M.join()}function B(E,M){let H=n.get(E);if(E.isVideoTexture&&Ae(E),E.isRenderTargetTexture===!1&&E.version>0&&H.__version!==E.version){let ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,E,M);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function z(E,M){let H=n.get(E);if(E.version>0&&H.__version!==E.version){de(H,E,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function G(E,M){let H=n.get(E);if(E.version>0&&H.__version!==E.version){de(H,E,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function X(E,M){let H=n.get(E);if(E.version>0&&H.__version!==E.version){Ee(H,E,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let K={[Ki]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},Q={[nn]:i.NEAREST,[Dh]:i.NEAREST_MIPMAP_NEAREST,[Ja]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[qp]:i.LINEAR_MIPMAP_NEAREST,[Mr]:i.LINEAR_MIPMAP_LINEAR},he={[sm]:i.NEVER,[hm]:i.ALWAYS,[rm]:i.LESS,[Sd]:i.LEQUAL,[om]:i.EQUAL,[cm]:i.GEQUAL,[am]:i.GREATER,[lm]:i.NOTEQUAL};function q(E,M,H){if(H?(i.texParameteri(E,i.TEXTURE_WRAP_S,K[M.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,K[M.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,K[M.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,Q[M.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,Q[M.minFilter])):(i.texParameteri(E,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(E,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==In||M.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,i.TEXTURE_MAG_FILTER,T(M.magFilter)),i.texParameteri(E,i.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==nn&&M.minFilter!==Mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,he[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===nn||M.minFilter!==Ja&&M.minFilter!==Mr||M.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Un&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function ee(E,M){let H=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",P));let ie=M.source,ne=d.get(ie);ne===void 0&&(ne={},d.set(ie,ne));let se=U(M);if(se!==E.__cacheKey){ne[se]===void 0&&(ne[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ne[se].usedTimes++;let be=ne[E.__cacheKey];be!==void 0&&(ne[E.__cacheKey].usedTimes--,be.usedTimes===0&&v(M)),E.__cacheKey=se,E.__webglTexture=ne[se].texture}return H}function de(E,M,H){let ie=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=i.TEXTURE_3D);let ne=ee(E,M),se=M.source;t.bindTexture(ie,E.__webglTexture,i.TEXTURE0+H);let be=n.get(se);if(se.version!==be.__version||ne===!0){t.activeTexture(i.TEXTURE0+H);let me=st.getPrimaries(st.workingColorSpace),ve=M.colorSpace===Sn?null:st.getPrimaries(M.colorSpace),Ue=M.colorSpace===Sn||me===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ke=f(M)&&p(M.image)===!1,j=_(M.image,ke,!1,s.maxTextureSize);j=_e(M,j);let et=p(j)||a,Ge=r.convert(M.format,M.colorSpace),ze=r.convert(M.type),Ie=b(M.internalFormat,Ge,ze,M.colorSpace,M.isVideoTexture);q(ie,M,et);let we,Ve=M.mipmaps,te=a&&M.isVideoTexture!==!0&&Ie!==vd,ge=be.__version===void 0||ne===!0,ce=A(M,j,et);if(M.isDepthTexture)Ie=i.DEPTH_COMPONENT,a?M.type===Ei?Ie=i.DEPTH_COMPONENT32F:M.type===bi?Ie=i.DEPTH_COMPONENT24:M.type===Zi?Ie=i.DEPTH24_STENCIL8:Ie=i.DEPTH_COMPONENT16:M.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===$i&&Ie===i.DEPTH_COMPONENT&&M.type!==Lc&&M.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=bi,ze=r.convert(M.type)),M.format===zs&&Ie===i.DEPTH_COMPONENT&&(Ie=i.DEPTH_STENCIL,M.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Zi,ze=r.convert(M.type))),ge&&(te?t.texStorage2D(i.TEXTURE_2D,1,Ie,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,Ie,j.width,j.height,0,Ge,ze,null));else if(M.isDataTexture)if(Ve.length>0&&et){te&&ge&&t.texStorage2D(i.TEXTURE_2D,ce,Ie,Ve[0].width,Ve[0].height);for(let Z=0,D=Ve.length;Z<D;Z++)we=Ve[Z],te?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,we.width,we.height,Ge,ze,we.data):t.texImage2D(i.TEXTURE_2D,Z,Ie,we.width,we.height,0,Ge,ze,we.data);M.generateMipmaps=!1}else te?(ge&&t.texStorage2D(i.TEXTURE_2D,ce,Ie,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,j.width,j.height,Ge,ze,j.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,j.width,j.height,0,Ge,ze,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){te&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Ie,Ve[0].width,Ve[0].height,j.depth);for(let Z=0,D=Ve.length;Z<D;Z++)we=Ve[Z],M.format!==Dn?Ge!==null?te?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,j.depth,Ge,we.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ie,we.width,we.height,j.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,we.width,we.height,j.depth,Ge,ze,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ie,we.width,we.height,j.depth,0,Ge,ze,we.data)}else{te&&ge&&t.texStorage2D(i.TEXTURE_2D,ce,Ie,Ve[0].width,Ve[0].height);for(let Z=0,D=Ve.length;Z<D;Z++)we=Ve[Z],M.format!==Dn?Ge!==null?te?t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,we.width,we.height,Ge,we.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Ie,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,we.width,we.height,Ge,ze,we.data):t.texImage2D(i.TEXTURE_2D,Z,Ie,we.width,we.height,0,Ge,ze,we.data)}else if(M.isDataArrayTexture)te?(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Ie,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,Ge,ze,j.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,j.width,j.height,j.depth,0,Ge,ze,j.data);else if(M.isData3DTexture)te?(ge&&t.texStorage3D(i.TEXTURE_3D,ce,Ie,j.width,j.height,j.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,Ge,ze,j.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,j.width,j.height,j.depth,0,Ge,ze,j.data);else if(M.isFramebufferTexture){if(ge)if(te)t.texStorage2D(i.TEXTURE_2D,ce,Ie,j.width,j.height);else{let Z=j.width,D=j.height;for(let oe=0;oe<ce;oe++)t.texImage2D(i.TEXTURE_2D,oe,Ie,Z,D,0,Ge,ze,null),Z>>=1,D>>=1}}else if(Ve.length>0&&et){te&&ge&&t.texStorage2D(i.TEXTURE_2D,ce,Ie,Ve[0].width,Ve[0].height);for(let Z=0,D=Ve.length;Z<D;Z++)we=Ve[Z],te?t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ge,ze,we):t.texImage2D(i.TEXTURE_2D,Z,Ie,Ge,ze,we);M.generateMipmaps=!1}else te?(ge&&t.texStorage2D(i.TEXTURE_2D,ce,Ie,j.width,j.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,ze,j)):t.texImage2D(i.TEXTURE_2D,0,Ie,Ge,ze,j);S(M,et)&&x(ie),be.__version=se.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Ee(E,M,H){if(M.image.length!==6)return;let ie=ee(E,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+H);let se=n.get(ne);if(ne.version!==se.__version||ie===!0){t.activeTexture(i.TEXTURE0+H);let be=st.getPrimaries(st.workingColorSpace),me=M.colorSpace===Sn?null:st.getPrimaries(M.colorSpace),ve=M.colorSpace===Sn||be===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Ue=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,j=[];for(let Z=0;Z<6;Z++)!Ue&&!ke?j[Z]=_(M.image[Z],!1,!0,s.maxCubemapSize):j[Z]=ke?M.image[Z].image:M.image[Z],j[Z]=_e(M,j[Z]);let et=j[0],Ge=p(et)||a,ze=r.convert(M.format,M.colorSpace),Ie=r.convert(M.type),we=b(M.internalFormat,ze,Ie,M.colorSpace),Ve=a&&M.isVideoTexture!==!0,te=se.__version===void 0||ie===!0,ge=A(M,et,Ge);q(i.TEXTURE_CUBE_MAP,M,Ge);let ce;if(Ue){Ve&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,we,et.width,et.height);for(let Z=0;Z<6;Z++){ce=j[Z].mipmaps;for(let D=0;D<ce.length;D++){let oe=ce[D];M.format!==Dn?ze!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,D,0,0,oe.width,oe.height,ze,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,D,we,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,D,0,0,oe.width,oe.height,ze,Ie,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,D,we,oe.width,oe.height,0,ze,Ie,oe.data)}}}else{ce=M.mipmaps,Ve&&te&&(ce.length>0&&ge++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,we,j[0].width,j[0].height));for(let Z=0;Z<6;Z++)if(ke){Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,j[Z].width,j[Z].height,ze,Ie,j[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,we,j[Z].width,j[Z].height,0,ze,Ie,j[Z].data);for(let D=0;D<ce.length;D++){let ae=ce[D].image[Z].image;Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,D+1,0,0,ae.width,ae.height,ze,Ie,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,D+1,we,ae.width,ae.height,0,ze,Ie,ae.data)}}else{Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ze,Ie,j[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,we,ze,Ie,j[Z]);for(let D=0;D<ce.length;D++){let oe=ce[D];Ve?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,D+1,0,0,ze,Ie,oe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,D+1,we,ze,Ie,oe.image[Z])}}}S(M,Ge)&&x(i.TEXTURE_CUBE_MAP),se.__version=ne.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function xe(E,M,H,ie,ne,se){let be=r.convert(H.format,H.colorSpace),me=r.convert(H.type),ve=b(H.internalFormat,be,me,H.colorSpace);if(!n.get(M).__hasExternalTextures){let ke=Math.max(1,M.width>>se),j=Math.max(1,M.height>>se);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,se,ve,ke,j,M.depth,0,be,me,null):t.texImage2D(ne,se,ve,ke,j,0,be,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),$(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ne,n.get(H).__webglTexture,0,le(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ne,n.get(H).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(E,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,E),M.depthBuffer&&!M.stencilBuffer){let ie=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(H||$(M)){let ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ei?ie=i.DEPTH_COMPONENT32F:ne.type===bi&&(ie=i.DEPTH_COMPONENT24));let se=le(M);$(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,ie,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,ie,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,E)}else if(M.depthBuffer&&M.stencilBuffer){let ie=le(M);H&&$(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):$(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,E)}else{let ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<ie.length;ne++){let se=ie[ne],be=r.convert(se.format,se.colorSpace),me=r.convert(se.type),ve=b(se.internalFormat,be,me,se.colorSpace),Ue=le(M);H&&$(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,ve,M.width,M.height):$(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,ve,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ve,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);let ie=n.get(M.depthTexture).__webglTexture,ne=le(M);if(M.depthTexture.format===$i)$(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(M.depthTexture.format===zs)$(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Te(E){let M=n.get(E),H=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Fe(M.__webglFramebuffer,E)}else if(H){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),Ne(M.__webglDepthbuffer[ie],E,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Ne(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(E,M,H){let ie=n.get(E);M!==void 0&&xe(ie.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Te(E)}function I(E){let M=E.texture,H=n.get(E),ie=n.get(M);E.addEventListener("dispose",F),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++);let ne=E.isWebGLCubeRenderTarget===!0,se=E.isWebGLMultipleRenderTargets===!0,be=p(E)||a;if(ne){H.__webglFramebuffer=[];for(let me=0;me<6;me++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[me]=[];for(let ve=0;ve<M.mipmaps.length;ve++)H.__webglFramebuffer[me][ve]=i.createFramebuffer()}else H.__webglFramebuffer[me]=i.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let me=0;me<M.mipmaps.length;me++)H.__webglFramebuffer[me]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(se)if(s.drawBuffers){let me=E.texture;for(let ve=0,Ue=me.length;ve<Ue;ve++){let ke=n.get(me[ve]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&$(E)===!1){let me=se?M:[M];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ve=0;ve<me.length;ve++){let Ue=me[ve];H.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ve]);let ke=r.convert(Ue.format,Ue.colorSpace),j=r.convert(Ue.type),et=b(Ue.internalFormat,ke,j,Ue.colorSpace,E.isXRRenderTarget===!0),Ge=le(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,et,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,H.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ne(H.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),q(i.TEXTURE_CUBE_MAP,M,be);for(let me=0;me<6;me++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)xe(H.__webglFramebuffer[me][ve],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else xe(H.__webglFramebuffer[me],E,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);S(M,be)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){let me=E.texture;for(let ve=0,Ue=me.length;ve<Ue;ve++){let ke=me[ve],j=n.get(ke);t.bindTexture(i.TEXTURE_2D,j.__webglTexture),q(i.TEXTURE_2D,ke,be),xe(H.__webglFramebuffer,E,ke,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),S(ke,be)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?me=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(me,ie.__webglTexture),q(me,M,be),a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)xe(H.__webglFramebuffer[ve],E,M,i.COLOR_ATTACHMENT0,me,ve);else xe(H.__webglFramebuffer,E,M,i.COLOR_ATTACHMENT0,me,0);S(M,be)&&x(me),t.unbindTexture()}E.depthBuffer&&Te(E)}function ue(E){let M=p(E)||a,H=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,ne=H.length;ie<ne;ie++){let se=H[ie];if(S(se,M)){let be=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,me=n.get(se).__webglTexture;t.bindTexture(be,me),x(be),t.unbindTexture()}}}function J(E){if(a&&E.samples>0&&$(E)===!1){let M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],H=E.width,ie=E.height,ne=i.COLOR_BUFFER_BIT,se=[],be=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(E),ve=E.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ue=0;Ue<M.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){se.push(i.COLOR_ATTACHMENT0+Ue),E.depthBuffer&&se.push(be);let ke=me.__ignoreDepthValues!==void 0?me.__ignoreDepthValues:!1;if(ke===!1&&(E.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ue]),ke===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[be]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[be])),ve){let j=n.get(M[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,H,ie,0,0,H,ie,ne,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Ue=0;Ue<M.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,me.__webglColorRenderbuffer[Ue]);let ke=n.get(M[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}}function le(E){return Math.min(s.maxSamples,E.samples)}function $(E){let M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(E){let M=o.render.frame;h.get(E)!==M&&(h.set(E,M),E.update())}function _e(E,M){let H=E.colorSpace,ie=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Hl||H!==hi&&H!==Sn&&(st.getTransfer(H)===at?a===!1?e.has("EXT_sRGB")===!0&&ie===Dn?(E.format=Hl,E.minFilter=Mn,E.generateMipmaps=!1):M=zo.sRGBToLinear(M):(ie!==Dn||ne!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=R,this.resetTextureUnits=N,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=$}function jx(i,e,t){let n=t.isWebGL2;function s(r,o=Sn){let a,l=st.getTransfer(o);if(r===Ai)return i.UNSIGNED_BYTE;if(r===pd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===md)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Yp)return i.BYTE;if(r===Zp)return i.SHORT;if(r===Lc)return i.UNSIGNED_SHORT;if(r===fd)return i.INT;if(r===bi)return i.UNSIGNED_INT;if(r===Ei)return i.FLOAT;if(r===Un)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===$p)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===Jp)return i.LUMINANCE;if(r===Kp)return i.LUMINANCE_ALPHA;if(r===$i)return i.DEPTH_COMPONENT;if(r===zs)return i.DEPTH_STENCIL;if(r===Hl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Qp)return i.RED;if(r===gd)return i.RED_INTEGER;if(r===jp)return i.RG;if(r===_d)return i.RG_INTEGER;if(r===xd)return i.RGBA_INTEGER;if(r===Ka||r===Qa||r===ja||r===el)if(l===at)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ka)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ka)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ja)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===el)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uh||r===Nh||r===Oh||r===Fh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Uh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Bh||r===zh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Bh)return l===at?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===zh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hh||r===kh||r===Gh||r===Vh||r===Wh||r===Xh||r===qh||r===Yh||r===Zh||r===$h||r===Jh||r===Kh||r===Qh||r===jh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Hh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Zh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$h)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return l===at?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tl||r===eu||r===tu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===tl)return l===at?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===eu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===tu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===em||r===nu||r===iu||r===su)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===tl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===nu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===iu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===su)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}function tv(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,wd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,S,x,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,S,x):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Bt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Bt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,S,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function nv(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){let b=x.program;n.uniformBlockBinding(S,b)}function c(S,x){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",p));let A=x.program;n.updateUBOMapping(S,A);let T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){let x=u();S.__bindingPointIndex=x;let b=i.createBuffer(),A=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let x=s[S.id],b=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,P=b.length;T<P;T++){let F=Array.isArray(b[T])?b[T]:[b[T]];for(let y=0,v=F.length;y<v;y++){let C=F[y];if(m(C,T,y,A)===!0){let O=C.__offset,N=Array.isArray(C.value)?C.value:[C.value],R=0;for(let U=0;U<N.length;U++){let B=N[U],z=_(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,O+R,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):(B.toArray(C.__data,R),R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,x,b,A){let T=S.value,P=x+"_"+b;if(A[P]===void 0)return typeof T=="number"||typeof T=="boolean"?A[P]=T:A[P]=T.clone(),!0;{let F=A[P];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return A[P]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(S){let x=S.uniforms,b=0,A=16;for(let P=0,F=x.length;P<F;P++){let y=Array.isArray(x[P])?x[P]:[x[P]];for(let v=0,C=y.length;v<C;v++){let O=y[v],N=Array.isArray(O.value)?O.value:[O.value];for(let R=0,U=N.length;R<U;R++){let B=N[R],z=_(B),G=b%A;G!==0&&A-G<z.boundary&&(b+=A-G),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=z.storage}}}let T=b%A;return T>0&&(b+=A-T),S.__size=b,S.__cache={},this}function _(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){let x=S.target;x.removeEventListener("dispose",p);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}function Mo(i,e,t,n,s,r){Ps.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ur.x=r*Ps.x-s*Ps.y,ur.y=s*Ps.x+r*Ps.y):ur.copy(Ps),i.copy(e),i.x+=ur.x,i.y+=ur.y,i.applyMatrix4(Id)}function nd(i,e,t,n,s,r,o){let a=sc.distanceSqToPoint(i);if(a<t){let l=new L;sc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function Uc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,m*=h,s(o,a,d,m)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}function id(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function sv(i,e){let t=1-i;return t*t*e}function rv(i,e){return 2*(1-i)*i*e}function ov(i,e){return i*i*e}function xr(i,e,t,n){return sv(i,e)+rv(i,t)+ov(i,n)}function av(i,e){let t=1-i;return t*t*t*e}function lv(i,e){let t=1-i;return 3*t*t*i*e}function cv(i,e){return 3*(1-i)*i*i*e}function hv(i,e){return i*i*i*e}function vr(i,e,t,n,s){return av(i,e)+lv(i,t)+cv(i,n)+hv(i,s)}function Dd(i,e,t,n,s){let r,o;if(s===Av(i,e,t,n)>0)for(r=e;r<t;r+=n)o=sd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=sd(r,i[r],i[r+1],o);return o&&va(o,o.next)&&(Lr(o),o=o.next),o}function ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(va(t,t.next)||gt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Cr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Mv(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?fv(i,n,s,r):dv(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Lr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=pv(ji(i),e,t),Cr(i,e,t,n,s,r,2)):o===2&&mv(i,e,t,n,s,r):Cr(ji(i),e,t,n,s,r,1);break}}}function dv(i){let e=i.prev,t=i,n=i.next;if(gt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=m&&Us(s,a,r,l,o,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(gt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,m=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>d?h:d:u>d?u:d,f=dc(m,g,e,t,n),S=dc(_,p,e,t,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=f&&b&&b.z<=S;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Us(a,h,l,u,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=m&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Us(a,h,l,u,c,d,b.x,b.y)&&gt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=f;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&Us(a,h,l,u,c,d,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=S;){if(b.x>=m&&b.x<=_&&b.y>=g&&b.y<=p&&b!==s&&b!==o&&Us(a,h,l,u,c,d,b.x,b.y)&&gt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function pv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!va(s,r)&&Ud(s,n,n.next,r)&&Pr(s,r)&&Pr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Lr(n),Lr(n.next),n=i=r),n=n.next}while(n!==i);return ji(n)}function mv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ev(o,a)){let l=Nd(o,a);o=ji(o,o.next),l=ji(l,l.next),Cr(o,e,t,n,s,r,0),Cr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function gv(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Dd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(bv(c));for(s.sort(_v),r=0;r<s.length;r++)t=xv(s[r],t);return t}function _v(i,e){return i.x-e.x}function xv(i,e){let t=vv(i,e);if(!t)return e;let n=Nd(t,i);return ji(n,n.next),ji(t,t.next)}function vv(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Us(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Pr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&yv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function yv(i,e){return gt(i.prev,i,e.prev)<0&&gt(e.next,i,i.next)<0}function Mv(i,e,t,n){let s=i;do s.z===0&&(s.z=dc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sv(s)}function Sv(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function dc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function bv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Us(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ev(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!wv(i,e)&&(Pr(i,e)&&Pr(e,i)&&Tv(i,e)&&(gt(i.prev,i,e.prev)||gt(i,e.prev,e))||va(i,e)&&gt(i.prev,i,i.next)>0&&gt(e.prev,e,e.next)>0)}function gt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function va(i,e){return i.x===e.x&&i.y===e.y}function Ud(i,e,t,n){let s=Ro(gt(i,e,t)),r=Ro(gt(i,e,n)),o=Ro(gt(t,n,i)),a=Ro(gt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ao(i,t,e)||r===0&&Ao(i,n,e)||o===0&&Ao(t,i,n)||a===0&&Ao(t,e,n))}function Ao(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ro(i){return i>0?1:i<0?-1:0}function wv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ud(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Pr(i,e){return gt(i.prev,i,i.next)<0?gt(i,e,i.next)>=0&&gt(i,i.prev,e)>=0:gt(i,e,i.prev)<0||gt(i,i.next,e)<0}function Tv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Nd(i,e){let t=new fc(i.i,i.x,i.y),n=new fc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function sd(i,e,t,n){let s=new fc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function fc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Av(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function rd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function od(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}function Cv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Co(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Pv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hd(){return(typeof performance>"u"?Date:performance).now()}var _p,Rh,xp,ma,vp,ri,Ri,Bt,pn,qn,wi,bn,Ch,Ph,yp,Xi,Mp,Sp,Lh,Ih,bp,Ep,wp,Tp,Ul,Nl,Ap,Rp,Cp,Pp,Lp,Ip,Dp,Up,Np,Op,Fp,Bp,Po,zp,Hp,kp,Gp,ud,Vp,Wp,Ti,Ac,Rc,Cc,Nr,Xp,Pc,dd,Fs,Bs,Ol,Fl,ga,Ki,In,Bl,nn,Dh,Ja,Mn,qp,Mr,Ai,Yp,Zp,Lc,fd,bi,Ei,Un,pd,md,Zi,$p,Dn,Jp,Kp,$i,zs,Qp,gd,jp,_d,xd,Ka,Qa,ja,el,Uh,Nh,Oh,Fh,vd,Bh,zh,Hh,kh,Gh,Vh,Wh,Xh,qh,Yh,Zh,$h,Jh,Kh,Qh,jh,tl,eu,tu,em,nu,iu,su,Lo,Io,nl,ru,ou,au,yd,Ji,tm,nm,Md,im,Sn,mt,hi,Ic,_a,Do,at,Uo,No,us,lu,sm,rm,om,Sd,am,lm,cm,hm,zl,cu,Hl,li,Oo,Ci,Yt,il,Fo,re,Ke,rl,uu,du,fu,$r,fm,st,ds,zo,pm,Ho,mm,En,ft,Gl,sn,ko,Vl,wn,L,ll,pu,ui,ei,Cn,Jr,fs,ps,ms,xi,vi,Hi,or,Kr,Qr,ki,gm,ar,hl,di,ti,ul,jr,yi,dl,eo,fl,Sr,nt,gs,Pn,_m,xm,Mi,to,dn,mu,gu,Go,Vo,vm,_u,_s,ni,no,lr,ym,Mm,xu,vu,yu,Sm,bm,yt,Ln,ii,pl,si,xs,vs,Mu,ml,gl,_l,so,Yi,Ed,Si,ro,Re,Zt,Em,Yn,$t,Tt,oo,zt,Wo,Xo,rt,wm,yn,vl,ys,fn,cr,Ft,Mt,Su,Gi,ao,bu,Ms,Ss,bs,yl,lo,co,ho,uo,Eu,wu,Tu,fo,po,fe,qe,Pi,Rm,Cm,At,qo,Vt,Es,ws,Wl,Yo,Xl,Ml,Pm,Lm,oi,Vi,go,br,Pt,Dm,Um,Nm,Om,Fm,Bm,zm,Hm,km,Gm,Vm,Wm,Xm,qm,Ym,Zm,$m,Jm,Km,Qm,jm,e0,t0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,d0,f0,p0,m0,g0,_0,x0,v0,y0,M0,S0,b0,E0,w0,T0,A0,R0,C0,P0,L0,I0,D0,U0,N0,O0,F0,B0,z0,H0,k0,G0,V0,W0,X0,q0,Y0,Z0,$0,J0,K0,Q0,j0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,xg,vg,yg,Mg,Sg,bg,Eg,wg,Tg,Ag,Rg,Cg,Pg,Lg,Ig,Dg,Ug,Ng,Og,Fg,Bg,zg,Hg,kg,Gg,Vg,Wg,Xg,qg,Yg,Zg,$g,Jg,Kg,Qg,jg,e_,t_,n_,i_,s_,r_,o_,a_,l_,c_,h_,u_,Ye,pe,Xn,_o,ks,Is,Au,qi,Sl,Ru,bl,El,wl,Wi,Ts,Cu,Gs,Zo,Ad,Rd,Cd,Pd,Ld,Du,Uu,Nu,Ou,Fu,ql,Yl,Zl,Tl,Os,gx,_x,Tx,Ax,Cx,Fx,Jl,Kl,Wx,Ql,jl,Zx,$x,ec,vt,ev,_r,tc,Er,nc,$o,Vs,ic,en,Jo,Qi,As,hr,Rs,Cs,Ps,ur,Id,vo,dr,yo,Zu,Al,$u,Ws,Ko,Ls,Ju,So,Ku,iv,fr,pr,Ht,wr,Qu,ju,ed,Rl,bo,Qo,Tr,td,sc,Eo,wo,jo,Zn,Tn,Ar,rc,To,Cl,Pl,Ll,oc,ea,ac,ta,lc,na,cc,ia,hc,uc,Xs,sa,Jt,ra,Rr,uv,yr,oa,Rv,aa,Nn,la,ca,Ce,Ir,qs,pc,mc,gc,On,es,_c,xc,vc,Dr,ts,yc,Mc,Lv,Sc,Ys,ha,Il,ad,ld,Ur,bc,ua,cd,mr,Dl,Ec,da,wc,fa,pa,Nc,Iv,Oc,Dv,Uv,Nv,Ov,Fv,Bv,zv,Tc,dt,MM,Dt=jt(()=>{_p=0,Rh=1,xp=2,ma=1,vp=2,ri=3,Ri=0,Bt=1,pn=2,qn=0,wi=1,bn=2,Ch=3,Ph=4,yp=5,Xi=100,Mp=101,Sp=102,Lh=103,Ih=104,bp=200,Ep=201,wp=202,Tp=203,Ul=204,Nl=205,Ap=206,Rp=207,Cp=208,Pp=209,Lp=210,Ip=211,Dp=212,Up=213,Np=214,Op=0,Fp=1,Bp=2,Po=3,zp=4,Hp=5,kp=6,Gp=7,ud=0,Vp=1,Wp=2,Ti=0,Ac=1,Rc=2,Cc=3,Nr=4,Xp=5,Pc=6,dd=300,Fs=301,Bs=302,Ol=303,Fl=304,ga=306,Ki=1e3,In=1001,Bl=1002,nn=1003,Dh=1004,Ja=1005,Mn=1006,qp=1007,Mr=1008,Ai=1009,Yp=1010,Zp=1011,Lc=1012,fd=1013,bi=1014,Ei=1015,Un=1016,pd=1017,md=1018,Zi=1020,$p=1021,Dn=1023,Jp=1024,Kp=1025,$i=1026,zs=1027,Qp=1028,gd=1029,jp=1030,_d=1031,xd=1033,Ka=33776,Qa=33777,ja=33778,el=33779,Uh=35840,Nh=35841,Oh=35842,Fh=35843,vd=36196,Bh=37492,zh=37496,Hh=37808,kh=37809,Gh=37810,Vh=37811,Wh=37812,Xh=37813,qh=37814,Yh=37815,Zh=37816,$h=37817,Jh=37818,Kh=37819,Qh=37820,jh=37821,tl=36492,eu=36494,tu=36495,em=36283,nu=36284,iu=36285,su=36286,Lo=2300,Io=2301,nl=2302,ru=2400,ou=2401,au=2402,yd=3e3,Ji=3001,tm=3200,nm=3201,Md=0,im=1,Sn="",mt="srgb",hi="srgb-linear",Ic="display-p3",_a="display-p3-linear",Do="linear",at="srgb",Uo="rec709",No="p3",us=7680,lu=519,sm=512,rm=513,om=514,Sd=515,am=516,lm=517,cm=518,hm=519,zl=35044,cu="300 es",Hl=1035,li=2e3,Oo=2001,Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],il=Math.PI/180,Fo=180/Math.PI;re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ke=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],S=s[1],x=s[4],b=s[7],A=s[2],T=s[5],P=s[8];return r[0]=o*_+a*S+l*A,r[3]=o*p+a*x+l*T,r[6]=o*f+a*b+l*P,r[1]=c*_+h*S+u*A,r[4]=c*p+h*x+u*T,r[7]=c*f+h*b+u*P,r[2]=d*_+m*S+g*A,r[5]=d*p+m*x+g*T,r[8]=d*f+m*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,m=c*r-o*l,g=t*u+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rl.makeScale(e,t)),this}rotate(e){return this.premultiply(rl.makeRotation(-e)),this}translate(e,t){return this.premultiply(rl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rl=new Ke;uu={};du=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),fu=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$r={[hi]:{transfer:Do,primaries:Uo,toReference:i=>i,fromReference:i=>i},[mt]:{transfer:at,primaries:Uo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_a]:{transfer:Do,primaries:No,toReference:i=>i.applyMatrix3(fu),fromReference:i=>i.applyMatrix3(du)},[Ic]:{transfer:at,primaries:No,toReference:i=>i.convertSRGBToLinear().applyMatrix3(fu),fromReference:i=>i.applyMatrix3(du).convertLinearToSRGB()}},fm=new Set([hi,_a]),st={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!fm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=$r[e].toReference,s=$r[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return $r[i].primaries},getTransfer:function(i){return i===Sn?Do:$r[i].transfer}};zo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=Bo("canvas")),ds.width=e.width,ds.height=e.height;let n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ns(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ns(t[n]/255)*255):t[n]=Ns(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pm=0,Ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);n.url=r}return t||(e.images[this.uuid]=n),n}};mm=0,En=class i extends Ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Mn,o=Mr,a=Dn,l=Ai,c=i.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=ci(),this.name="",this.source=new Ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Ji?mt:Sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ki:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ki:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===mt?Ji:yd}set encoding(e){gr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ji?mt:Sn}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=dd;En.DEFAULT_ANISOTROPY=1;ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,b=(m+1)/2,A=(f+1)/2,T=(h+d)/4,P=(u+_)/4,F=(g+p)/4;return x>b&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=P/n):b>A?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=F/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=P/r,s=F/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gl=class extends Ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(gr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ji?mt:Sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new En(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ho(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends Gl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ko=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vl=class extends En{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==m||h!==g){let p=1-a,f=l*d+c*m+h*g+u*_,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,f*S);p=Math.sin(p*T)/A,a=Math.sin(a*T)/A}let b=a*S;if(l=l*p+d*b,c=c*p+m*b,h=h*p+g*b,u=u*p+_*b,p===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*m-c*d,e[t+1]=l*g+h*d+c*u-a*m,e[t+2]=c*g+h*m+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"YXZ":this._x=d*h*u+c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"ZXY":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u-d*m*g;break;case"ZYX":this._x=d*h*u-c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u+d*m*g;break;case"YZX":this._x=d*h*u+c*m*g,this._y=c*m*u+d*h*g,this._z=c*h*g-d*m*u,this._w=c*h*u-d*m*g;break;case"XZY":this._x=d*h*u-c*m*g,this._y=c*m*u-d*h*g,this._z=c*h*g+d*m*u,this._w=c*h*u+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>u){let m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>u){let m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ll.copy(this).projectOnVector(e),this.sub(ll)}reflect(e){return this.sub(ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ll=new L,pu=new wn,ui=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Cn):Cn.fromBufferAttribute(r,o),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),Kr.subVectors(this.max,or),fs.subVectors(e.a,or),ps.subVectors(e.b,or),ms.subVectors(e.c,or),xi.subVectors(ps,fs),vi.subVectors(ms,ps),Hi.subVectors(fs,ms);let t=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Hi.z,Hi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Hi.z,0,-Hi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Hi.y,Hi.x,0];return!cl(t,fs,ps,ms,Kr)||(t=[1,0,0,0,1,0,0,0,1],!cl(t,fs,ps,ms,Kr))?!1:(Qr.crossVectors(xi,vi),t=[Qr.x,Qr.y,Qr.z],cl(t,fs,ps,ms,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ei=[new L,new L,new L,new L,new L,new L,new L,new L],Cn=new L,Jr=new ui,fs=new L,ps=new L,ms=new L,xi=new L,vi=new L,Hi=new L,or=new L,Kr=new L,Qr=new L,ki=new L;gm=new ui,ar=new L,hl=new L,di=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(hl)),this.expandByPoint(ar.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new L,ul=new L,jr=new L,yi=new L,dl=new L,eo=new L,fl=new L,Sr=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ul.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(ul);let r=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=yi.dot(this.direction),l=-yi.dot(jr),c=yi.lengthSq(),h=Math.abs(1-o*o),u,d,m,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,m=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ul).addScaledVector(jr,d),m}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,s,r){dl.subVectors(t,e),eo.subVectors(n,e),fl.crossVectors(dl,eo);let o=this.direction.dot(fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);let l=a*this.direction.dot(eo.crossVectors(yi,eo));if(l<0)return null;let c=a*this.direction.dot(dl.cross(yi));if(c<0||l+c>o)return null;let h=-a*yi.dot(fl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,m,g,_,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,h,u,d,m,g,_,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,m=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,m=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-m,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+m,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=m*u-g,t[2]=g*u-m,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,xm)}lookAt(e,t,n){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Mi.crossVectors(n,dn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Mi.crossVectors(n,dn)),Mi.normalize(),to.crossVectors(dn,Mi),s[0]=Mi.x,s[4]=to.x,s[8]=dn.x,s[1]=Mi.y,s[5]=to.y,s[9]=dn.y,s[2]=Mi.z,s[6]=to.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],S=n[3],x=n[7],b=n[11],A=n[15],T=s[0],P=s[4],F=s[8],y=s[12],v=s[1],C=s[5],O=s[9],N=s[13],R=s[2],U=s[6],B=s[10],z=s[14],G=s[3],X=s[7],K=s[11],Q=s[15];return r[0]=o*T+a*v+l*R+c*G,r[4]=o*P+a*C+l*U+c*X,r[8]=o*F+a*O+l*B+c*K,r[12]=o*y+a*N+l*z+c*Q,r[1]=h*T+u*v+d*R+m*G,r[5]=h*P+u*C+d*U+m*X,r[9]=h*F+u*O+d*B+m*K,r[13]=h*y+u*N+d*z+m*Q,r[2]=g*T+_*v+p*R+f*G,r[6]=g*P+_*C+p*U+f*X,r[10]=g*F+_*O+p*B+f*K,r[14]=g*y+_*N+p*z+f*Q,r[3]=S*T+x*v+b*R+A*G,r[7]=S*P+x*C+b*U+A*X,r[11]=S*F+x*O+b*B+A*K,r[15]=S*y+x*N+b*z+A*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*m-n*l*m)+_*(+t*l*m-t*c*d+r*o*d-s*o*m+s*c*h-r*l*h)+p*(+t*c*u-t*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],S=u*p*c-_*d*c+_*l*m-a*p*m-u*l*f+a*d*f,x=g*d*c-h*p*c-g*l*m+o*p*m+h*l*f-o*d*f,b=h*_*c-g*u*c+g*a*m-o*_*m-h*a*f+o*u*f,A=g*u*l-h*_*l-g*a*d+o*_*d+h*a*p-o*u*p,T=t*S+n*x+s*b+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=S*P,e[1]=(_*d*r-u*p*r-_*s*m+n*p*m+u*s*f-n*d*f)*P,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*f+n*l*f)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*m-n*l*m)*P,e[4]=x*P,e[5]=(h*p*r-g*d*r+g*s*m-t*p*m-h*s*f+t*d*f)*P,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*f-t*l*f)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*m+t*l*m)*P,e[8]=b*P,e[9]=(g*u*r-h*_*r-g*n*m+t*_*m+h*n*f-t*u*f)*P,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*m-t*a*m)*P,e[12]=A*P,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*p+t*u*p)*P,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,m=r*h,g=r*u,_=o*h,p=o*u,f=a*u,S=l*c,x=l*h,b=l*u,A=n.x,T=n.y,P=n.z;return s[0]=(1-(_+f))*A,s[1]=(m+b)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(m-b)*T,s[5]=(1-(d+f))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(g+x)*P,s[9]=(p-S)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Pn.copy(this);let c=1/r,h=1/o,u=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,t.setFromRotationMatrix(Pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=li){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,g;if(a===li)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Oo)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=li){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,m=(n+s)*h,g,_;if(a===li)g=(o+r)*u,_=-2*u;else if(a===Oo)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gs=new L,Pn=new nt,_m=new L(0,0,0),xm=new L(1,1,1),Mi=new L,to=new L,dn=new L,mu=new nt,gu=new wn,Go=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Go.DEFAULT_ORDER="XYZ";Vo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vm=0,_u=new L,_s=new wn,ni=new nt,no=new L,lr=new L,ym=new L,Mm=new wn,xu=new L(1,0,0),vu=new L(0,1,0),yu=new L(0,0,1),Sm={type:"added"},bm={type:"removed"},yt=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Go,n=new wn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Ke}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return _u.copy(e).applyQuaternion(this.quaternion),this.position.add(_u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?no.copy(e):no.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(lr,no,this.up):ni.lookAt(no,lr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ni),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,ym),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Mm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};yt.DEFAULT_UP=new L(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Ln=new L,ii=new L,pl=new L,si=new L,xs=new L,vs=new L,Mu=new L,ml=new L,gl=new L,_l=new L,so=!1,Yi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ii.subVectors(n,t),pl.subVectors(e,t);let o=Ln.dot(Ln),a=Ln.dot(ii),l=Ln.dot(pl),c=ii.dot(ii),h=ii.dot(pl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,m=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getUV(e,t,n,s,r,o,a,l){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ii.subVectors(e,t),Ln.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Ln.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return so===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),so=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,n),vs.subVectors(r,n),ml.subVectors(e,n);let l=xs.dot(ml),c=vs.dot(ml);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,s);let h=xs.dot(gl),u=vs.dot(gl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(xs,o);_l.subVectors(e,r);let m=xs.dot(_l),g=vs.dot(_l);if(g>=0&&m<=g)return t.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vs,a);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Mu.subVectors(r,s),a=(u-h)/(u-h+(m-g)),t.copy(s).addScaledVector(Mu,a);let f=1/(p+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(xs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ro={h:0,s:0,l:0};Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=um(e,1),t=Gt(t,0,1),n=Gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xl(o,r,e+1/3),this.g=xl(o,r,e),this.b=xl(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=Ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}copyLinearToSRGB(e){return this.r=ol(e.r),this.g=ol(e.g),this.b=ol(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return st.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Gt(Zt.r*255,0,255))*65536+Math.round(Gt(Zt.g*255,0,255))*256+Math.round(Gt(Zt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Zt.copy(this),t);let n=Zt.r,s=Zt.g,r=Zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=mt){st.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,s=Zt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(ro);let n=sl(Si.h,ro.h,t),s=sl(Si.s,ro.s,t),r=sl(Si.l,ro.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Re;Re.NAMES=Ed;Em=0,Yn=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=wi,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ul&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Po&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$t=class extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tt=new L,oo=new re,zt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oo.fromBufferAttribute(this,t),oo.applyMatrix3(e),this.setXY(t,oo.x,oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zl&&(e.usage=this.usage),e}},Wo=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Xo=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},rt=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},wm=0,yn=new nt,vl=new yt,ys=new L,fn=new ui,cr=new ui,Ft=new L,Mt=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?Xo:Wo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(fn.min,cr.min),fn.expandByPoint(Ft),Ft.addVectors(fn.max,cr.max),fn.expandByPoint(Ft)):(fn.expandByPoint(cr.min),fn.expandByPoint(cr.max))}fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ft.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Ft.add(ys)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let v=0;v<a;v++)c[v]=new L,h[v]=new L;let u=new L,d=new L,m=new L,g=new re,_=new re,p=new re,f=new L,S=new L;function x(v,C,O){u.fromArray(s,v*3),d.fromArray(s,C*3),m.fromArray(s,O*3),g.fromArray(o,v*2),_.fromArray(o,C*2),p.fromArray(o,O*2),d.sub(u),m.sub(u),_.sub(g),p.sub(g);let N=1/(_.x*p.y-p.x*_.y);isFinite(N)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(N),S.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(N),c[v].add(f),c[C].add(f),c[O].add(f),h[v].add(S),h[C].add(S),h[O].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let v=0,C=b.length;v<C;++v){let O=b[v],N=O.start,R=O.count;for(let U=N,B=N+R;U<B;U+=3)x(n[U+0],n[U+1],n[U+2])}let A=new L,T=new L,P=new L,F=new L;function y(v){P.fromArray(r,v*3),F.copy(P);let C=c[v];A.copy(C),A.sub(P.multiplyScalar(P.dot(C))).normalize(),T.crossVectors(F,C);let N=T.dot(h[v])<0?-1:1;l[v*4]=A.x,l[v*4+1]=A.y,l[v*4+2]=A.z,l[v*4+3]=N}for(let v=0,C=b.length;v<C;++v){let O=b[v],N=O.start,R=O.count;for(let U=N,B=N+R;U<B;U+=3)y(n[U+0]),y(n[U+1]),y(n[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){let g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[m++]}return new zt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Su=new nt,Gi=new Sr,ao=new di,bu=new L,Ms=new L,Ss=new L,bs=new L,yl=new L,lo=new L,co=new re,ho=new re,uo=new re,Eu=new L,wu=new L,Tu=new L,fo=new L,po=new L,fe=class extends yt{constructor(e=new Mt,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(yl.fromBufferAttribute(u,e),o?lo.addScaledVector(yl,h):lo.addScaledVector(yl.sub(t),h))}t.add(lo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ao.copy(n.boundingSphere),ao.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(ao.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ao,bu)===null||Gi.origin.distanceToSquared(bu)>(e.far-e.near)**2))&&(Su.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Su),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,A=x;b<A;b+=3){let T=a.getX(b),P=a.getX(b+1),F=a.getX(b+2);s=mo(this,f,e,n,c,h,u,T,P,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let S=a.getX(p),x=a.getX(p+1),b=a.getX(p+2);s=mo(this,o,e,n,c,h,u,S,x,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let p=d[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=S,A=x;b<A;b+=3){let T=b,P=b+1,F=b+2;s=mo(this,f,e,n,c,h,u,T,P,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){let S=p,x=p+1,b=p+2;s=mo(this,o,e,n,c,h,u,S,x,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};qe=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function g(_,p,f,S,x,b,A,T,P,F,y){let v=b/P,C=A/F,O=b/2,N=A/2,R=T/2,U=P+1,B=F+1,z=0,G=0,X=new L;for(let K=0;K<B;K++){let Q=K*C-N;for(let he=0;he<U;he++){let q=he*v-O;X[_]=q*S,X[p]=Q*x,X[f]=R,c.push(X.x,X.y,X.z),X[_]=0,X[p]=0,X[f]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(he/P),u.push(1-K/F),z+=1}}for(let K=0;K<F;K++)for(let Q=0;Q<P;Q++){let he=d+Q+U*K,q=d+Q+U*(K+1),ee=d+(Q+1)+U*(K+1),de=d+(Q+1)+U*K;l.push(he,q,de),l.push(q,ee,de),G+=6}a.addGroup(m,G,y),m+=G,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Pi={clone:Hs,merge:tn},Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qo=class extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vt=class extends qo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(il*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=-90,ws=1,Wl=class extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Es,ws,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Es,ws,e,t);r.layers=this.layers,this.add(r);let o=new Vt(Es,ws,e,t);o.layers=this.layers,this.add(o);let a=new Vt(Es,ws,e,t);a.layers=this.layers,this.add(a);let l=new Vt(Es,ws,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Es,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Yo=class extends En{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xl=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(gr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ji?mt:Sn),this.texture=new Yo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qe(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:qn});r.uniforms.tEquirect.value=t;let o=new fe(s,r),a=t.minFilter;return t.minFilter===Mr&&(t.minFilter=Mn),new Wl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ml=new L,Pm=new L,Lm=new Ke,oi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ml.subVectors(n,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ml),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lm.getNormalMatrix(e),s=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new di,go=new L,br=class{constructor(e=new oi,t=new oi,n=new oi,s=new oi,r=new oi,o=new oi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],S=s[13],x=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,p-m,b-f).normalize(),n[1].setComponents(l+r,d+c,p+m,b+f).normalize(),n[2].setComponents(l+o,d+h,p+g,b+S).normalize(),n[3].setComponents(l-o,d-h,p-g,b-S).normalize(),n[4].setComponents(l-a,d-u,p-_,b-x).normalize(),t===li)n[5].setComponents(l+a,d+u,p+_,b+x).normalize();else if(t===Oo)n[5].setComponents(a,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(go.x=s.normal.x>0?e.max.x:e.min.x,go.y=s.normal.y>0?e.max.y:e.min.y,go.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};Pt=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,m=[],g=[],_=[],p=[];for(let f=0;f<h;f++){let S=f*d-o;for(let x=0;x<c;x++){let b=x*u-r;g.push(b,-S,0),_.push(0,0,1),p.push(x/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let x=S+c*f,b=S+c*(f+1),A=S+1+c*(f+1),T=S+1+c*f;m.push(x,b,T),m.push(b,A,T)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Um=`#ifdef USE_ALPHAHASH
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
#endif`,Nm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
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
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,n0=`#define PI 3.141592653589793
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
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s0=`vec3 transformedNormal = objectNormal;
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
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`
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
}`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y0=`#ifdef USE_GRADIENTMAP
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
}`,M0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,S0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w0=`uniform bool receiveShadow;
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
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,L0=`PhysicalMaterial material;
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
#endif`,I0=`struct PhysicalMaterial {
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
}`,D0=`
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
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
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,z0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V0=`#if defined( USE_POINTS_UV )
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
#endif`,W0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y0=`#ifdef USE_MORPHNORMALS
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
#endif`,Z0=`#ifdef USE_MORPHTARGETS
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
#endif`,$0=`#ifdef USE_MORPHTARGETS
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
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tg=`#ifdef USE_NORMALMAP
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
#endif`,ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ig=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_g=`float getShadowMask() {
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
}`,xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mg=`#ifdef USE_SKINNING
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
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tg=`#ifdef USE_TRANSMISSION
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
#endif`,Ag=`#ifdef USE_TRANSMISSION
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dg=`uniform sampler2D t2D;
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
}`,Ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
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
}`,zg=`#if DEPTH_PACKING == 3200
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
}`,Hg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`uniform float scale;
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Zg=`#define LAMBERT
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
}`,$g=`#define LAMBERT
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
}`,Jg=`#define MATCAP
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
}`,Kg=`#define MATCAP
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
}`,Qg=`#define NORMAL
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
}`,jg=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,r_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,u_=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Dm,alphahash_pars_fragment:Um,alphamap_fragment:Nm,alphamap_pars_fragment:Om,alphatest_fragment:Fm,alphatest_pars_fragment:Bm,aomap_fragment:zm,aomap_pars_fragment:Hm,batching_pars_vertex:km,batching_vertex:Gm,begin_vertex:Vm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:$m,clipping_planes_pars_vertex:Jm,clipping_planes_vertex:Km,color_fragment:Qm,color_pars_fragment:jm,color_pars_vertex:e0,color_vertex:t0,common:n0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:s0,displacementmap_pars_vertex:r0,displacementmap_vertex:o0,emissivemap_fragment:a0,emissivemap_pars_fragment:l0,colorspace_fragment:c0,colorspace_pars_fragment:h0,envmap_fragment:u0,envmap_common_pars_fragment:d0,envmap_pars_fragment:f0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:T0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:_0,fog_fragment:x0,fog_pars_fragment:v0,gradientmap_pars_fragment:y0,lightmap_fragment:M0,lightmap_pars_fragment:S0,lights_lambert_fragment:b0,lights_lambert_pars_fragment:E0,lights_pars_begin:w0,lights_toon_fragment:A0,lights_toon_pars_fragment:R0,lights_phong_fragment:C0,lights_phong_pars_fragment:P0,lights_physical_fragment:L0,lights_physical_pars_fragment:I0,lights_fragment_begin:D0,lights_fragment_maps:U0,lights_fragment_end:N0,logdepthbuf_fragment:O0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:z0,map_fragment:H0,map_pars_fragment:k0,map_particle_fragment:G0,map_particle_pars_fragment:V0,metalnessmap_fragment:W0,metalnessmap_pars_fragment:X0,morphcolor_vertex:q0,morphnormal_vertex:Y0,morphtarget_pars_vertex:Z0,morphtarget_vertex:$0,normal_fragment_begin:J0,normal_fragment_maps:K0,normal_pars_fragment:Q0,normal_pars_vertex:j0,normal_vertex:eg,normalmap_pars_fragment:tg,clearcoat_normal_fragment_begin:ng,clearcoat_normal_fragment_maps:ig,clearcoat_pars_fragment:sg,iridescence_pars_fragment:rg,opaque_fragment:og,packing:ag,premultiplied_alpha_fragment:lg,project_vertex:cg,dithering_fragment:hg,dithering_pars_fragment:ug,roughnessmap_fragment:dg,roughnessmap_pars_fragment:fg,shadowmap_pars_fragment:pg,shadowmap_pars_vertex:mg,shadowmap_vertex:gg,shadowmask_pars_fragment:_g,skinbase_vertex:xg,skinning_pars_vertex:vg,skinning_vertex:yg,skinnormal_vertex:Mg,specularmap_fragment:Sg,specularmap_pars_fragment:bg,tonemapping_fragment:Eg,tonemapping_pars_fragment:wg,transmission_fragment:Tg,transmission_pars_fragment:Ag,uv_pars_fragment:Rg,uv_pars_vertex:Cg,uv_vertex:Pg,worldpos_vertex:Lg,background_vert:Ig,background_frag:Dg,backgroundCube_vert:Ug,backgroundCube_frag:Ng,cube_vert:Og,cube_frag:Fg,depth_vert:Bg,depth_frag:zg,distanceRGBA_vert:Hg,distanceRGBA_frag:kg,equirect_vert:Gg,equirect_frag:Vg,linedashed_vert:Wg,linedashed_frag:Xg,meshbasic_vert:qg,meshbasic_frag:Yg,meshlambert_vert:Zg,meshlambert_frag:$g,meshmatcap_vert:Jg,meshmatcap_frag:Kg,meshnormal_vert:Qg,meshnormal_frag:jg,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:l_,shadow_frag:c_,sprite_vert:h_,sprite_frag:u_},pe={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Xn={basic:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:tn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:tn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:tn([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:tn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:tn([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:tn([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:tn([pe.common,pe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:tn([pe.lights,pe.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Xn.physical={uniforms:tn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};_o={r:0,b:0,g:0};ks=class extends qo{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Is=4,Au=[.125,.215,.35,.446,.526,.582],qi=20,Sl=new ks,Ru=new Re,bl=null,El=0,wl=0,Wi=(1+Math.sqrt(5))/2,Ts=1/Wi,Cu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Wi,Ts),new L(0,Wi,-Ts),new L(Ts,0,Wi),new L(-Ts,0,Wi),new L(Wi,Ts,0),new L(-Wi,Ts,0)],Gs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,El,wl),e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),wl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Un,format:Dn,colorSpace:hi,depthBuffer:!1},s=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x_(r)),this._blurMaterial=v_(r,e,t)}return s}_compileMaterial(e){let t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,s){let a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ru),h.toneMapping=Ti,h.autoClear=!1;let m=new $t({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new fe(new qe,m),_=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(Ru),_=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let x=this._cubeSize;xo(s,S*x,f>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Cu[(s-1)%Cu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new fe(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qi-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):qi;p>qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${qi}`);let f=[],S=0;for(let P=0;P<qi;++P){let F=P/_,y=Math.exp(-F*F/2);f.push(y),P===0?S+=y:P<p&&(S+=2*y)}for(let P=0;P<f.length;P++)f[P]=f[P]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let b=this._sizeLods[s],A=3*b*(s>x-Is?s-x+Is:0),T=4*(this._cubeSize-b);xo(t,A,T,3*b,2*b),l.setRenderTarget(t),l.render(u,Sl)}};Zo=class extends En{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:$i,h!==$i&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=bi),n===void 0&&h===zs&&(n=Zi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ad=new En,Rd=new Zo(1,1);Rd.compareFunction=Sd;Cd=new ko,Pd=new Vl,Ld=new Yo,Du=[],Uu=[],Nu=new Float32Array(16),Ou=new Float32Array(9),Fu=new Float32Array(4);ql=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Z_(t.type)}},Yl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=px(t.type)}},Zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Tl=/(\w+)(\])?(\[|\.)?/g;Os=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);mx(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};gx=37297,_x=0;Tx=/^[ \t]*#include +<([\w\d./]+)>/gm;Ax=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Fx=0,Jl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}},Kl=class{constructor(e){this.id=Fx++,this.code=e,this.usedTimes=0}};Wx=0;Ql=class extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jl=class extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$x=`uniform sampler2D shadow_pass;
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
}`;ec=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ev={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ev)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tc=class extends Ci{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,g=null,_=t.getContextAttributes(),p=null,f=null,S=[],x=[],b=new re,A=null,T=new Vt;T.layers.enable(1),T.viewport=new ft;let P=new Vt;P.layers.enable(2),P.viewport=new ft;let F=[T,P],y=new ec;y.layers.enable(1),y.layers.enable(2);let v=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=S[q];return ee===void 0&&(ee=new _r,S[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=S[q];return ee===void 0&&(ee=new _r,S[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=S[q];return ee===void 0&&(ee=new _r,S[q]=ee),ee.getHandSpace()};function O(q){let ee=x.indexOf(q.inputSource);if(ee===-1)return;let de=S[ee];de!==void 0&&(de.update(q.inputSource,q.frame,c||o),de.dispatchEvent({type:q.type,data:q.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",R);for(let q=0;q<S.length;q++){let ee=x[q];ee!==null&&(x[q]=null,S[q].disconnect(ee))}v=null,C=null,e.setRenderTarget(p),m=null,d=null,u=null,s=null,f=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ee={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new sn(m.framebufferWidth,m.framebufferHeight,{format:Dn,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ee=null,de=null,Ee=null;_.depth&&(Ee=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=_.stencil?zs:$i,de=_.stencil?Zi:bi);let xe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new sn(d.textureWidth,d.textureHeight,{format:Dn,type:Ai,depthTexture:new Zo(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ne=e.properties.get(f);Ne.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(q){for(let ee=0;ee<q.removed.length;ee++){let de=q.removed[ee],Ee=x.indexOf(de);Ee>=0&&(x[Ee]=null,S[Ee].disconnect(de))}for(let ee=0;ee<q.added.length;ee++){let de=q.added[ee],Ee=x.indexOf(de);if(Ee===-1){for(let Ne=0;Ne<S.length;Ne++)if(Ne>=x.length){x.push(de),Ee=Ne;break}else if(x[Ne]===null){x[Ne]=de,Ee=Ne;break}if(Ee===-1)break}let xe=S[Ee];xe&&xe.connect(de)}}let U=new L,B=new L;function z(q,ee,de){U.setFromMatrixPosition(ee.matrixWorld),B.setFromMatrixPosition(de.matrixWorld);let Ee=U.distanceTo(B),xe=ee.projectionMatrix.elements,Ne=de.projectionMatrix.elements,Fe=xe[14]/(xe[10]-1),Te=xe[14]/(xe[10]+1),Be=(xe[9]+1)/xe[5],I=(xe[9]-1)/xe[5],ue=(xe[8]-1)/xe[0],J=(Ne[8]+1)/Ne[0],le=Fe*ue,$=Fe*J,Ae=Ee/(-ue+J),_e=Ae*-ue;ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(_e),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let E=Fe+Ae,M=Te+Ae,H=le-_e,ie=$+(Ee-_e),ne=Be*Te/M*E,se=I*Te/M*E;q.projectionMatrix.makePerspective(H,ie,ne,se,E,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function G(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;y.near=P.near=T.near=q.near,y.far=P.far=T.far=q.far,(v!==y.near||C!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),v=y.near,C=y.far);let ee=q.parent,de=y.cameras;G(y,ee);for(let Ee=0;Ee<de.length;Ee++)G(de[Ee],ee);de.length===2?z(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),X(q,y,ee)};function X(q,ee,de){de===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(de.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)};let K=null;function Q(q,ee){if(h=ee.getViewerPose(c||o),g=ee,h!==null){let de=h.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let Ee=!1;de.length!==y.cameras.length&&(y.cameras.length=0,Ee=!0);for(let xe=0;xe<de.length;xe++){let Ne=de[xe],Fe=null;if(m!==null)Fe=m.getViewport(Ne);else{let Be=u.getViewSubImage(d,Ne);Fe=Be.viewport,xe===0&&(e.setRenderTargetTextures(f,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(f))}let Te=F[xe];Te===void 0&&(Te=new Vt,Te.layers.enable(xe),Te.viewport=new ft,F[xe]=Te),Te.matrix.fromArray(Ne.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ne.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),xe===0&&(y.matrix.copy(Te.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ee===!0&&y.cameras.push(Te)}}for(let de=0;de<S.length;de++){let Ee=x[de],xe=S[de];Ee!==null&&xe!==void 0&&xe.update(Ee,ee,c||o)}K&&K(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let he=new Td;he.setAnimationLoop(Q),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}};Er=class{constructor(e={}){let{canvas:t=dm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;let x=this,b=!1,A=0,T=0,P=null,F=-1,y=null,v=new ft,C=new ft,O=null,N=new Re(0),R=0,U=t.width,B=t.height,z=1,G=null,X=null,K=new ft(0,0,U,B),Q=new ft(0,0,U,B),he=!1,q=new br,ee=!1,de=!1,Ee=null,xe=new nt,Ne=new re,Fe=new L,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return P===null?z:1}let I=n;function ue(w,k){for(let W=0;W<w.length;W++){let Y=w[W],V=t.getContext(Y,k);if(V!==null)return V}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){let k=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&k.shift(),I=ue(k,w),I===null)throw ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,le,$,Ae,_e,E,M,H,ie,ne,se,be,me,ve,Ue,ke,j,et,Ge,ze,Ie,we,Ve,te;function ge(){J=new M_(I),le=new m_(I,J,e),J.init(le),we=new jx(I,J,le),$=new Kx(I,J,le),Ae=new E_(I),_e=new zx,E=new Qx(I,J,$,_e,le,we,Ae),M=new __(x),H=new y_(x),ie=new Im(I,le),Ve=new f_(I,J,ie,le),ne=new S_(I,ie,Ae,Ve),se=new R_(I,ne,ie,Ae),Ge=new A_(I,le,E),ke=new g_(_e),be=new Bx(x,M,H,J,le,Ve,ke),me=new tv(x,_e),ve=new kx,Ue=new Yx(J,le),et=new d_(x,M,H,$,se,d,l),j=new Jx(x,se,le),te=new nv(I,Ae,le,$),ze=new p_(I,J,Ae,le),Ie=new b_(I,J,Ae,le),Ae.programs=be.programs,x.capabilities=le,x.extensions=J,x.properties=_e,x.renderLists=ve,x.shadowMap=j,x.state=$,x.info=Ae}ge();let ce=new tc(x,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(U,B,!1))},this.getSize=function(w){return w.set(U,B)},this.setSize=function(w,k,W=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,B=k,t.width=Math.floor(w*z),t.height=Math.floor(k*z),W===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(U*z,B*z).floor()},this.setDrawingBufferSize=function(w,k,W){U=w,B=k,z=W,t.width=Math.floor(w*W),t.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,k,W,Y){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,k,W,Y),$.viewport(v.copy(K).multiplyScalar(z).floor())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,k,W,Y){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,k,W,Y),$.scissor(C.copy(Q).multiplyScalar(z).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(w){$.setScissorTest(he=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(w=!0,k=!0,W=!0){let Y=0;if(w){let V=!1;if(P!==null){let ye=P.texture.format;V=ye===xd||ye===_d||ye===gd}if(V){let ye=P.texture.type,Pe=ye===Ai||ye===bi||ye===Lc||ye===Zi||ye===pd||ye===md,Oe=et.getClearColor(),He=et.getClearAlpha(),Ze=Oe.r,We=Oe.g,Xe=Oe.b;Pe?(m[0]=Ze,m[1]=We,m[2]=Xe,m[3]=He,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ze,g[1]=We,g[2]=Xe,g[3]=He,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}k&&(Y|=I.DEPTH_BUFFER_BIT),W&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),ve.dispose(),Ue.dispose(),_e.dispose(),M.dispose(),H.dispose(),se.dispose(),Ve.dispose(),te.dispose(),be.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",ot),ce.removeEventListener("sessionend",$e),Ee&&(Ee.dispose(),Ee=null),Et.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let w=Ae.autoReset,k=j.enabled,W=j.autoUpdate,Y=j.needsUpdate,V=j.type;ge(),Ae.autoReset=w,j.enabled=k,j.autoUpdate=W,j.needsUpdate=Y,j.type=V}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ae(w){let k=w.target;k.removeEventListener("dispose",ae),Me(k)}function Me(w){Se(w),_e.remove(w)}function Se(w){let k=_e.get(w).programs;k!==void 0&&(k.forEach(function(W){be.releaseProgram(W)}),w.isShaderMaterial&&be.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,Y,V,ye){k===null&&(k=Te);let Pe=V.isMesh&&V.matrixWorld.determinant()<0,Oe=dp(w,k,W,Y,V);$.setMaterial(Y,Pe);let He=W.index,Ze=1;if(Y.wireframe===!0){if(He=ne.getWireframeAttribute(W),He===void 0)return;Ze=2}let We=W.drawRange,Xe=W.attributes.position,St=We.start*Ze,un=(We.start+We.count)*Ze;ye!==null&&(St=Math.max(St,ye.start*Ze),un=Math.min(un,(ye.start+ye.count)*Ze)),He!==null?(St=Math.max(St,0),un=Math.min(un,He.count)):Xe!=null&&(St=Math.max(St,0),un=Math.min(un,Xe.count));let Ot=un-St;if(Ot<0||Ot===1/0)return;Ve.setup(V,Y,Oe,W,He);let jn,pt=ze;if(He!==null&&(jn=ie.get(He),pt=Ie,pt.setIndex(jn)),V.isMesh)Y.wireframe===!0?($.setLineWidth(Y.wireframeLinewidth*Be()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(V.isLine){let Je=Y.linewidth;Je===void 0&&(Je=1),$.setLineWidth(Je*Be()),V.isLineSegments?pt.setMode(I.LINES):V.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else V.isPoints?pt.setMode(I.POINTS):V.isSprite&&pt.setMode(I.TRIANGLES);if(V.isBatchedMesh)pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)pt.renderInstances(St,Ot,V.count);else if(W.isInstancedBufferGeometry){let Je=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,qa=Math.min(W.instanceCount,Je);pt.renderInstances(St,Ot,qa)}else pt.render(St,Ot)};function Qe(w,k,W){w.transparent===!0&&w.side===pn&&w.forceSinglePass===!1?(w.side=Bt,w.needsUpdate=!0,_i(w,k,W),w.side=Ri,w.needsUpdate=!0,_i(w,k,W),w.side=pn):_i(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),p=Ue.get(W),p.init(),S.push(p),W.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==W&&w.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);let Y=new Set;return w.traverse(function(V){let ye=V.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){let Oe=ye[Pe];Qe(Oe,W,V),Y.add(Oe)}else Qe(ye,W,V),Y.add(ye)}),S.pop(),p=null,Y},this.compileAsync=function(w,k,W=null){let Y=this.compile(w,k,W);return new Promise(V=>{function ye(){if(Y.forEach(function(Pe){_e.get(Pe).currentProgram.isReady()&&Y.delete(Pe)}),Y.size===0){V(w);return}setTimeout(ye,10)}J.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let je=null;function ct(w){je&&je(w)}function ot(){Et.stop()}function $e(){Et.start()}let Et=new Td;Et.setAnimationLoop(ct),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(w){je=w,ce.setAnimationLoop(w),w===null?Et.stop():Et.start()},ce.addEventListener("sessionstart",ot),ce.addEventListener("sessionend",$e),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,k,P),p=Ue.get(w,S.length),p.init(),S.push(p),xe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q.setFromProjectionMatrix(xe),de=this.localClippingEnabled,ee=ke.init(this.clippingPlanes,de),_=ve.get(w,f.length),_.init(),f.push(_),Xt(w,k,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,X),this.info.render.frame++,ee===!0&&ke.beginShadows();let W=p.state.shadowsArray;if(j.render(W,w,k),ee===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(_,w),p.setupLights(x._useLegacyLights),k.isArrayCamera){let Y=k.cameras;for(let V=0,ye=Y.length;V<ye;V++){let Pe=Y[V];gi(_,w,Pe,Pe.viewport)}}else gi(_,w,k);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,k),Ve.resetDefaultState(),F=-1,y=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Xt(w,k,W,Y){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){Y&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xe);let Pe=se.update(w),Oe=w.material;Oe.visible&&_.push(w,Pe,Oe,W,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let Pe=se.update(w),Oe=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Fe.copy(Pe.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(xe)),Array.isArray(Oe)){let He=Pe.groups;for(let Ze=0,We=He.length;Ze<We;Ze++){let Xe=He[Ze],St=Oe[Xe.materialIndex];St&&St.visible&&_.push(w,Pe,St,W,Fe.z,Xe)}}else Oe.visible&&_.push(w,Pe,Oe,W,Fe.z,null)}}let ye=w.children;for(let Pe=0,Oe=ye.length;Pe<Oe;Pe++)Xt(ye[Pe],k,W,Y)}function gi(w,k,W,Y){let V=w.opaque,ye=w.transmissive,Pe=w.transparent;p.setupLightsView(W),ee===!0&&ke.setGlobalState(x.clippingPlanes,W),ye.length>0&&wt(V,ye,k,W),Y&&$.viewport(v.copy(Y)),V.length>0&&_t(V,k,W),ye.length>0&&_t(ye,k,W),Pe.length>0&&_t(Pe,k,W),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function wt(w,k,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;let ye=le.isWebGL2;Ee===null&&(Ee=new sn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?Un:Ai,minFilter:Mr,samples:ye?4:0})),x.getDrawingBufferSize(Ne),ye?Ee.setSize(Ne.x,Ne.y):Ee.setSize(kl(Ne.x),kl(Ne.y));let Pe=x.getRenderTarget();x.setRenderTarget(Ee),x.getClearColor(N),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();let Oe=x.toneMapping;x.toneMapping=Ti,_t(w,W,Y),E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee);let He=!1;for(let Ze=0,We=k.length;Ze<We;Ze++){let Xe=k[Ze],St=Xe.object,un=Xe.geometry,Ot=Xe.material,jn=Xe.group;if(Ot.side===pn&&St.layers.test(Y.layers)){let pt=Ot.side;Ot.side=Bt,Ot.needsUpdate=!0,Nt(St,W,Y,un,Ot,jn),Ot.side=pt,Ot.needsUpdate=!0,He=!0}}He===!0&&(E.updateMultisampleRenderTarget(Ee),E.updateRenderTargetMipmap(Ee)),x.setRenderTarget(Pe),x.setClearColor(N,R),x.toneMapping=Oe}function _t(w,k,W){let Y=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ye=w.length;V<ye;V++){let Pe=w[V],Oe=Pe.object,He=Pe.geometry,Ze=Y===null?Pe.material:Y,We=Pe.group;Oe.layers.test(W.layers)&&Nt(Oe,k,W,He,Ze,We)}}function Nt(w,k,W,Y,V,ye){w.onBeforeRender(x,k,W,Y,V,ye),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(x,k,W,Y,w,ye),V.transparent===!0&&V.side===pn&&V.forceSinglePass===!1?(V.side=Bt,V.needsUpdate=!0,x.renderBufferDirect(W,k,Y,V,w,ye),V.side=Ri,V.needsUpdate=!0,x.renderBufferDirect(W,k,Y,V,w,ye),V.side=pn):x.renderBufferDirect(W,k,Y,V,w,ye),w.onAfterRender(x,k,W,Y,V,ye)}function _i(w,k,W){k.isScene!==!0&&(k=Te);let Y=_e.get(w),V=p.state.lights,ye=p.state.shadowsArray,Pe=V.state.version,Oe=be.getParameters(w,V.state,ye,k,W),He=be.getProgramCacheKey(Oe),Ze=Y.programs;Y.environment=w.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||Y.environment),Ze===void 0&&(w.addEventListener("dispose",ae),Ze=new Map,Y.programs=Ze);let We=Ze.get(He);if(We!==void 0){if(Y.currentProgram===We&&Y.lightsStateVersion===Pe)return wh(w,Oe),We}else Oe.uniforms=be.getUniforms(w),w.onBuild(W,Oe,x),w.onBeforeCompile(Oe,x),We=be.acquireProgram(Oe,He),Ze.set(He,We),Y.uniforms=Oe.uniforms;let Xe=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xe.clippingPlanes=ke.uniform),wh(w,Oe),Y.needsLights=pp(w),Y.lightsStateVersion=Pe,Y.needsLights&&(Xe.ambientLightColor.value=V.state.ambient,Xe.lightProbe.value=V.state.probe,Xe.directionalLights.value=V.state.directional,Xe.directionalLightShadows.value=V.state.directionalShadow,Xe.spotLights.value=V.state.spot,Xe.spotLightShadows.value=V.state.spotShadow,Xe.rectAreaLights.value=V.state.rectArea,Xe.ltc_1.value=V.state.rectAreaLTC1,Xe.ltc_2.value=V.state.rectAreaLTC2,Xe.pointLights.value=V.state.point,Xe.pointLightShadows.value=V.state.pointShadow,Xe.hemisphereLights.value=V.state.hemi,Xe.directionalShadowMap.value=V.state.directionalShadowMap,Xe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Xe.spotShadowMap.value=V.state.spotShadowMap,Xe.spotLightMatrix.value=V.state.spotLightMatrix,Xe.spotLightMap.value=V.state.spotLightMap,Xe.pointShadowMap.value=V.state.pointShadowMap,Xe.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=We,Y.uniformsList=null,We}function Eh(w){if(w.uniformsList===null){let k=w.currentProgram.getUniforms();w.uniformsList=Os.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function wh(w,k){let W=_e.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function dp(w,k,W,Y,V){k.isScene!==!0&&(k=Te),E.resetTextureUnits();let ye=k.fog,Pe=Y.isMeshStandardMaterial?k.environment:null,Oe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:hi,He=(Y.isMeshStandardMaterial?H:M).get(Y.envMap||Pe),Ze=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Xe=!!W.morphAttributes.position,St=!!W.morphAttributes.normal,un=!!W.morphAttributes.color,Ot=Ti;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ot=x.toneMapping);let jn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=jn!==void 0?jn.length:0,Je=_e.get(Y),qa=p.state.lights;if(ee===!0&&(de===!0||w!==y)){let vn=w===y&&Y.id===F;ke.setState(Y,w,vn)}let xt=!1;Y.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==qa.state.version||Je.outputColorSpace!==Oe||V.isBatchedMesh&&Je.batching===!1||!V.isBatchedMesh&&Je.batching===!0||V.isInstancedMesh&&Je.instancing===!1||!V.isInstancedMesh&&Je.instancing===!0||V.isSkinnedMesh&&Je.skinning===!1||!V.isSkinnedMesh&&Je.skinning===!0||V.isInstancedMesh&&Je.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Je.instancingColor===!1&&V.instanceColor!==null||Je.envMap!==He||Y.fog===!0&&Je.fog!==ye||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==ke.numPlanes||Je.numIntersection!==ke.numIntersection)||Je.vertexAlphas!==Ze||Je.vertexTangents!==We||Je.morphTargets!==Xe||Je.morphNormals!==St||Je.morphColors!==un||Je.toneMapping!==Ot||le.isWebGL2===!0&&Je.morphTargetsCount!==pt)&&(xt=!0):(xt=!0,Je.__version=Y.version);let Bi=Je.currentProgram;xt===!0&&(Bi=_i(Y,k,V));let Th=!1,sr=!1,Ya=!1,qt=Bi.getUniforms(),zi=Je.uniforms;if($.useProgram(Bi.program)&&(Th=!0,sr=!0,Ya=!0),Y.id!==F&&(F=Y.id,sr=!0),Th||y!==w){qt.setValue(I,"projectionMatrix",w.projectionMatrix),qt.setValue(I,"viewMatrix",w.matrixWorldInverse);let vn=qt.map.cameraPosition;vn!==void 0&&vn.setValue(I,Fe.setFromMatrixPosition(w.matrixWorld)),le.logarithmicDepthBuffer&&qt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&qt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,sr=!0,Ya=!0)}if(V.isSkinnedMesh){qt.setOptional(I,V,"bindMatrix"),qt.setOptional(I,V,"bindMatrixInverse");let vn=V.skeleton;vn&&(le.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),qt.setValue(I,"boneTexture",vn.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(qt.setOptional(I,V,"batchingTexture"),qt.setValue(I,"batchingTexture",V._matricesTexture,E));let Za=W.morphAttributes;if((Za.position!==void 0||Za.normal!==void 0||Za.color!==void 0&&le.isWebGL2===!0)&&Ge.update(V,W,Bi),(sr||Je.receiveShadow!==V.receiveShadow)&&(Je.receiveShadow=V.receiveShadow,qt.setValue(I,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(zi.envMap.value=He,zi.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),sr&&(qt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Je.needsLights&&fp(zi,Ya),ye&&Y.fog===!0&&me.refreshFogUniforms(zi,ye),me.refreshMaterialUniforms(zi,Y,z,B,Ee),Os.upload(I,Eh(Je),zi,E)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Os.upload(I,Eh(Je),zi,E),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&qt.setValue(I,"center",V.center),qt.setValue(I,"modelViewMatrix",V.modelViewMatrix),qt.setValue(I,"normalMatrix",V.normalMatrix),qt.setValue(I,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let vn=Y.uniformsGroups;for(let $a=0,mp=vn.length;$a<mp;$a++)if(le.isWebGL2){let Ah=vn[$a];te.update(Ah,Bi),te.bind(Ah,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function fp(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function pp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,k,W){_e.get(w.texture).__webglTexture=k,_e.get(w.depthTexture).__webglTexture=W;let Y=_e.get(w);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){let W=_e.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,W=0){P=w,A=k,T=W;let Y=!0,V=null,ye=!1,Pe=!1;if(w){let He=_e.get(w);He.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1):He.__webglFramebuffer===void 0?E.setupRenderTarget(w):He.__hasExternalTextures&&E.rebindTextures(w,_e.get(w.texture).__webglTexture,_e.get(w.depthTexture).__webglTexture);let Ze=w.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Pe=!0);let We=_e.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[k])?V=We[k][W]:V=We[k],ye=!0):le.isWebGL2&&w.samples>0&&E.useMultisampledRTT(w)===!1?V=_e.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?V=We[W]:V=We,v.copy(w.viewport),C.copy(w.scissor),O=w.scissorTest}else v.copy(K).multiplyScalar(z).floor(),C.copy(Q).multiplyScalar(z).floor(),O=he;if($.bindFramebuffer(I.FRAMEBUFFER,V)&&le.drawBuffers&&Y&&$.drawBuffers(w,V),$.viewport(v),$.scissor(C),$.setScissorTest(O),ye){let He=_e.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,He.__webglTexture,W)}else if(Pe){let He=_e.get(w.texture),Ze=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,He.__webglTexture,W||0,Ze)}F=-1},this.readRenderTargetPixels=function(w,k,W,Y,V,ye,Pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=_e.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){$.bindFramebuffer(I.FRAMEBUFFER,Oe);try{let He=w.texture,Ze=He.format,We=He.type;if(Ze!==Dn&&we.convert(Ze)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Xe=We===Un&&(J.has("EXT_color_buffer_half_float")||le.isWebGL2&&J.has("EXT_color_buffer_float"));if(We!==Ai&&we.convert(We)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===Ei&&(le.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Y&&W>=0&&W<=w.height-V&&I.readPixels(k,W,Y,V,we.convert(Ze),we.convert(We),ye)}finally{let He=P!==null?_e.get(P).__webglFramebuffer:null;$.bindFramebuffer(I.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(w,k,W=0){let Y=Math.pow(2,-W),V=Math.floor(k.image.width*Y),ye=Math.floor(k.image.height*Y);E.setTexture2D(k,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,w.x,w.y,V,ye),$.unbindTexture()},this.copyTextureToTexture=function(w,k,W,Y=0){let V=k.image.width,ye=k.image.height,Pe=we.convert(W.format),Oe=we.convert(W.type);E.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment),k.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Y,w.x,w.y,V,ye,Pe,Oe,k.image.data):k.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Y,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,Pe,k.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,Y,w.x,w.y,Pe,Oe,k.image),Y===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(w,k,W,Y,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=w.max.x-w.min.x+1,Pe=w.max.y-w.min.y+1,Oe=w.max.z-w.min.z+1,He=we.convert(Y.format),Ze=we.convert(Y.type),We;if(Y.isData3DTexture)E.setTexture3D(Y,0),We=I.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)E.setTexture2DArray(Y,0),We=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Y.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Y.unpackAlignment);let Xe=I.getParameter(I.UNPACK_ROW_LENGTH),St=I.getParameter(I.UNPACK_IMAGE_HEIGHT),un=I.getParameter(I.UNPACK_SKIP_PIXELS),Ot=I.getParameter(I.UNPACK_SKIP_ROWS),jn=I.getParameter(I.UNPACK_SKIP_IMAGES),pt=W.isCompressedTexture?W.mipmaps[V]:W.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,pt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,pt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?I.texSubImage3D(We,V,k.x,k.y,k.z,ye,Pe,Oe,He,Ze,pt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(We,V,k.x,k.y,k.z,ye,Pe,Oe,He,pt.data)):I.texSubImage3D(We,V,k.x,k.y,k.z,ye,Pe,Oe,He,Ze,pt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Xe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St),I.pixelStorei(I.UNPACK_SKIP_PIXELS,un),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ot),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jn),V===0&&Y.generateMipmaps&&I.generateMipmap(We),$.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,$.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ic?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===_a?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===mt?Ji:yd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ji?mt:hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},nc=class extends Er{};nc.prototype.isWebGL1Renderer=!0;$o=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vs=class extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ic=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new L,Jo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qi=class extends Yn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr=new L,Rs=new L,Cs=new L,Ps=new re,ur=new re,Id=new nt,vo=new L,dr=new L,yo=new L,Zu=new re,Al=new re,$u=new re,Ws=class extends yt{constructor(e=new Qi){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ic(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Jo(n,3,0,!1)),As.setAttribute("uv",new Jo(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new re(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),Id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Mo(vo.set(-.5,-.5,0),Cs,o,Rs,s,r),Mo(dr.set(.5,-.5,0),Cs,o,Rs,s,r),Mo(yo.set(.5,.5,0),Cs,o,Rs,s,r),Zu.set(0,0),Al.set(1,0),$u.set(1,1);let a=e.ray.intersectTriangle(vo,dr,yo,!1,hr);if(a===null&&(Mo(dr.set(-.5,.5,0),Cs,o,Rs,s,r),Al.set(0,1),a=e.ray.intersectTriangle(vo,yo,dr,!1,hr),a===null))return;let l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:Yi.getInterpolation(hr,vo,dr,yo,Zu,Al,$u,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};Ko=class extends zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ls=new nt,Ju=new nt,So=[],Ku=new ui,iv=new nt,fr=new fe,pr=new di,Ht=class extends fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ko(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,iv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),Ku.copy(e.boundingBox).applyMatrix4(Ls),this.boundingBox.union(Ku)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ls),pr.copy(e.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),Ju.multiplyMatrices(n,Ls),fr.matrixWorld=Ju,fr.raycast(e,So);for(let o=0,a=So.length;o<a;o++){let l=So[o];l.instanceId=r,l.object=this,t.push(l)}So.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ko(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},wr=class extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qu=new L,ju=new L,ed=new nt,Rl=new Sr,bo=new di,Qo=class extends yt{constructor(e=new Mt,t=new wr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qu.fromBufferAttribute(t,s-1),ju.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qu.distanceTo(ju);e.setAttribute("lineDistance",new rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bo.copy(n.boundingSphere),bo.applyMatrix4(s),bo.radius+=r,e.ray.intersectsSphere(bo)===!1)return;ed.copy(s).invert(),Rl.copy(e.ray).applyMatrix4(ed);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,d=new L,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){let f=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=f,b=S-1;x<b;x+=m){let A=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(p,A),h.fromBufferAttribute(p,T),Rl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(d);F<e.near||F>e.far||t.push({distance:F,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let x=f,b=S-1;x<b;x+=m){if(c.fromBufferAttribute(p,x),h.fromBufferAttribute(p,x+1),Rl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Tr=class extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},td=new nt,sc=new Sr,Eo=new di,wo=new L,jo=class extends yt{constructor(e=new Mt,t=new Tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(s),Eo.radius+=r,e.ray.intersectsSphere(Eo)===!1)return;td.copy(s).invert(),sc.copy(e.ray).applyMatrix4(td);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,_=m;g<_;g++){let p=c.getX(g);wo.fromBufferAttribute(u,p),nd(wo,p,l,s,e,t,this)}}else{let d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=d,_=m;g<_;g++)wo.fromBufferAttribute(u,g),nd(wo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Zn=class extends En{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,m=(o-h)/d;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new re:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],o=[],a=new L,l=new nt;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Gt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Gt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ar=class extends Tn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new re,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*h-m*u+this.aX,c=d*u+m*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rc=class extends Ar{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};To=new L,Cl=new Uc,Pl=new Uc,Ll=new Uc,oc=class extends Tn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(To.subVectors(s[0],s[1]).add(s[0]),c=To);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(To.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=To),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(d),m),p=Math.pow(d.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Cl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,p),Pl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,p),Ll.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Cl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Pl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ll.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Cl.calc(l),Pl.calc(l),Ll.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ea=class extends Tn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(e,s.x,r.x,o.x,a.x),vr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ac=class extends Tn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(e,s.x,r.x,o.x,a.x),vr(e,s.y,r.y,o.y,a.y),vr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ta=class extends Tn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lc=class extends Tn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends Tn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(e,s.x,r.x,o.x),xr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cc=class extends Tn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(xr(e,s.x,r.x,o.x),xr(e,s.y,r.y,o.y),xr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(id(a,l.x,c.x,h.x,u.x),id(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},hc=Object.freeze({__proto__:null,ArcCurve:rc,CatmullRomCurve3:oc,CubicBezierCurve:ea,CubicBezierCurve3:ac,EllipseCurve:Ar,LineCurve:ta,LineCurve3:lc,QuadraticBezierCurve:na,QuadraticBezierCurve3:cc,SplineCurve:ia}),uc=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new hc[s.type]().fromJSON(s))}return this}},Xs=class extends uc{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ta(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new na(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ea(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Ar(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},sa=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let m=n+u/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jt=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],m=[],g=0,_=[],p=n/2,f=0;S(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(m,2));function S(){let b=new L,A=new L,T=0,P=(t-e)/n;for(let F=0;F<=r;F++){let y=[],v=F/r,C=v*(t-e)+e;for(let O=0;O<=s;O++){let N=O/s,R=N*l+a,U=Math.sin(R),B=Math.cos(R);A.x=C*U,A.y=-v*n+p,A.z=C*B,u.push(A.x,A.y,A.z),b.set(U,P,B).normalize(),d.push(b.x,b.y,b.z),m.push(N,1-v),y.push(g++)}_.push(y)}for(let F=0;F<s;F++)for(let y=0;y<r;y++){let v=_[y][F],C=_[y+1][F],O=_[y+1][F+1],N=_[y][F+1];h.push(v,C,N),h.push(C,O,N),T+=6}c.addGroup(f,T,0),f+=T}function x(b){let A=g,T=new re,P=new L,F=0,y=b===!0?e:t,v=b===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,p*v,0),d.push(0,v,0),m.push(.5,.5),g++;let C=g;for(let O=0;O<=s;O++){let R=O/s*l+a,U=Math.cos(R),B=Math.sin(R);P.x=y*B,P.y=p*v,P.z=y*U,u.push(P.x,P.y,P.z),d.push(0,v,0),T.x=U*.5+.5,T.y=B*.5*v+.5,m.push(T.x,T.y),g++}for(let O=0;O<s;O++){let N=A+O,R=C+O;b===!0?h.push(R,R+1,N):h.push(R+1,R,N),F+=3}c.addGroup(f,F,b===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ra=class i extends Jt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rr=class extends Xs{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Xs().fromJSON(s))}return this}},uv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Dd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,m;if(n&&(r=gv(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Cr(r,o,t,a,l,m,0),o}};yr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];rd(e),od(n,e);let o=e.length;t.forEach(rd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,od(n,t[l]);let a=uv.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};oa=class i extends Mt{constructor(e=new Rr([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Rv,x,b=!1,A,T,P,F;f&&(x=f.getSpacedPoints(h),b=!0,d=!1,A=f.computeFrenetFrames(h,!1),T=new L,P=new L,F=new L),d||(p=0,m=0,g=0,_=0);let y=a.extractPoints(c),v=y.shape,C=y.holes;if(!yr.isClockWise(v)){v=v.reverse();for(let I=0,ue=C.length;I<ue;I++){let J=C[I];yr.isClockWise(J)&&(C[I]=J.reverse())}}let N=yr.triangulateShape(v,C),R=v;for(let I=0,ue=C.length;I<ue;I++){let J=C[I];v=v.concat(J)}function U(I,ue,J){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(ue,J)}let B=v.length,z=N.length;function G(I,ue,J){let le,$,Ae,_e=I.x-ue.x,E=I.y-ue.y,M=J.x-I.x,H=J.y-I.y,ie=_e*_e+E*E,ne=_e*H-E*M;if(Math.abs(ne)>Number.EPSILON){let se=Math.sqrt(ie),be=Math.sqrt(M*M+H*H),me=ue.x-E/se,ve=ue.y+_e/se,Ue=J.x-H/be,ke=J.y+M/be,j=((Ue-me)*H-(ke-ve)*M)/(_e*H-E*M);le=me+_e*j-I.x,$=ve+E*j-I.y;let et=le*le+$*$;if(et<=2)return new re(le,$);Ae=Math.sqrt(et/2)}else{let se=!1;_e>Number.EPSILON?M>Number.EPSILON&&(se=!0):_e<-Number.EPSILON?M<-Number.EPSILON&&(se=!0):Math.sign(E)===Math.sign(H)&&(se=!0),se?(le=-E,$=_e,Ae=Math.sqrt(ie)):(le=_e,$=E,Ae=Math.sqrt(ie/2))}return new re(le/Ae,$/Ae)}let X=[];for(let I=0,ue=R.length,J=ue-1,le=I+1;I<ue;I++,J++,le++)J===ue&&(J=0),le===ue&&(le=0),X[I]=G(R[I],R[J],R[le]);let K=[],Q,he=X.concat();for(let I=0,ue=C.length;I<ue;I++){let J=C[I];Q=[];for(let le=0,$=J.length,Ae=$-1,_e=le+1;le<$;le++,Ae++,_e++)Ae===$&&(Ae=0),_e===$&&(_e=0),Q[le]=G(J[le],J[Ae],J[_e]);K.push(Q),he=he.concat(Q)}for(let I=0;I<p;I++){let ue=I/p,J=m*Math.cos(ue*Math.PI/2),le=g*Math.sin(ue*Math.PI/2)+_;for(let $=0,Ae=R.length;$<Ae;$++){let _e=U(R[$],X[$],le);xe(_e.x,_e.y,-J)}for(let $=0,Ae=C.length;$<Ae;$++){let _e=C[$];Q=K[$];for(let E=0,M=_e.length;E<M;E++){let H=U(_e[E],Q[E],le);xe(H.x,H.y,-J)}}}let q=g+_;for(let I=0;I<B;I++){let ue=d?U(v[I],he[I],q):v[I];b?(P.copy(A.normals[0]).multiplyScalar(ue.x),T.copy(A.binormals[0]).multiplyScalar(ue.y),F.copy(x[0]).add(P).add(T),xe(F.x,F.y,F.z)):xe(ue.x,ue.y,0)}for(let I=1;I<=h;I++)for(let ue=0;ue<B;ue++){let J=d?U(v[ue],he[ue],q):v[ue];b?(P.copy(A.normals[I]).multiplyScalar(J.x),T.copy(A.binormals[I]).multiplyScalar(J.y),F.copy(x[I]).add(P).add(T),xe(F.x,F.y,F.z)):xe(J.x,J.y,u/h*I)}for(let I=p-1;I>=0;I--){let ue=I/p,J=m*Math.cos(ue*Math.PI/2),le=g*Math.sin(ue*Math.PI/2)+_;for(let $=0,Ae=R.length;$<Ae;$++){let _e=U(R[$],X[$],le);xe(_e.x,_e.y,u+J)}for(let $=0,Ae=C.length;$<Ae;$++){let _e=C[$];Q=K[$];for(let E=0,M=_e.length;E<M;E++){let H=U(_e[E],Q[E],le);b?xe(H.x,H.y+x[h-1].y,x[h-1].x+J):xe(H.x,H.y,u+J)}}}ee(),de();function ee(){let I=s.length/3;if(d){let ue=0,J=B*ue;for(let le=0;le<z;le++){let $=N[le];Ne($[2]+J,$[1]+J,$[0]+J)}ue=h+p*2,J=B*ue;for(let le=0;le<z;le++){let $=N[le];Ne($[0]+J,$[1]+J,$[2]+J)}}else{for(let ue=0;ue<z;ue++){let J=N[ue];Ne(J[2],J[1],J[0])}for(let ue=0;ue<z;ue++){let J=N[ue];Ne(J[0]+B*h,J[1]+B*h,J[2]+B*h)}}n.addGroup(I,s.length/3-I,0)}function de(){let I=s.length/3,ue=0;Ee(R,ue),ue+=R.length;for(let J=0,le=C.length;J<le;J++){let $=C[J];Ee($,ue),ue+=$.length}n.addGroup(I,s.length/3-I,1)}function Ee(I,ue){let J=I.length;for(;--J>=0;){let le=J,$=J-1;$<0&&($=I.length-1);for(let Ae=0,_e=h+p*2;Ae<_e;Ae++){let E=B*Ae,M=B*(Ae+1),H=ue+le+E,ie=ue+$+E,ne=ue+$+M,se=ue+le+M;Fe(H,ie,ne,se)}}}function xe(I,ue,J){l.push(I),l.push(ue),l.push(J)}function Ne(I,ue,J){Te(I),Te(ue),Te(J);let le=s.length/3,$=S.generateTopUV(n,s,le-3,le-2,le-1);Be($[0]),Be($[1]),Be($[2])}function Fe(I,ue,J,le){Te(I),Te(ue),Te(le),Te(ue),Te(J),Te(le);let $=s.length/3,Ae=S.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);Be(Ae[0]),Be(Ae[1]),Be(Ae[3]),Be(Ae[1]),Be(Ae[2]),Be(Ae[3])}function Te(I){s.push(l[I*3+0]),s.push(l[I*3+1]),s.push(l[I*3+2])}function Be(I){r.push(I.x),r.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hc[s.type]().fromJSON(s)),new i(n,e.options)}},Rv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,o),new re(a,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new re(o,1-l),new re(c,1-u),new re(d,1-g),new re(_,1-f)]:[new re(a,1-l),new re(h,1-u),new re(m,1-g),new re(p,1-f)]}};aa=class i extends Mt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,d=(t-e)/s,m=new L,g=new re;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let f=r+p/n*o;m.x=u*Math.cos(f),m.y=u*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let p=_*(n+1);for(let f=0;f<n;f++){let S=f+p,x=S,b=S+n+1,A=S+n+2,T=S+1;a.push(x,b,T),a.push(b,A,T)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Nn=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,m=[],g=[],_=[],p=[];for(let f=0;f<=n;f++){let S=[],x=f/n,b=0;f===0&&o===0?b=.5/t:f===n&&l===Math.PI&&(b=-.5/t);for(let A=0;A<=t;A++){let T=A/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),p.push(T+b,1-x),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<t;S++){let x=h[f][S+1],b=h[f][S],A=h[f+1][S],T=h[f+1][S+1];(f!==0||o>0)&&m.push(x,b,T),(f!==n-1||l<Math.PI)&&m.push(b,A,T)}this.setIndex(m),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(_,3)),this.setAttribute("uv",new rt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},la=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){let _=g/s*r,p=m/n*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(_),u.y=(e+t*Math.cos(p))*Math.sin(_),u.z=t*Math.sin(p),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,S=(s+1)*m+g;o.push(_,p,S),o.push(p,f,S)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ca=class extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ce=class extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ir=class extends Ce{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};qs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends qs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ou:r=e,a=2*t-n;break;case au:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ou:o=e,l=2*n-t;break;case au:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,f=-d*p+2*d*_-d*g,S=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-m)*p+(1.5+m)*_+.5*g,b=m*p-m*_;for(let A=0;A!==a;++A)r[A]=f*o[h+A]+S*o[c+A]+x*o[l+A]+b*o[u+A];return r}},mc=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},gc=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Co(t,this.TimeBufferType),this.values=Co(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Co(e.times,Array),values:Co(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lo:t=this.InterpolantFactoryMethodDiscrete;break;case Io:t=this.InterpolantFactoryMethodLinear;break;case nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lo;case this.InterpolantFactoryMethodLinear:return Io;case this.InterpolantFactoryMethodSmooth:return nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Pv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===nl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,m=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[u+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Io;es=class extends On{};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=Lo;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;_c=class extends On{};_c.prototype.ValueTypeName="color";xc=class extends On{};xc.prototype.ValueTypeName="number";vc=class extends qs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)wn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Dr=class extends On{InterpolantFactoryMethodLinear(e){return new vc(this.times,this.values,this.getValueSize(),e)}};Dr.prototype.ValueTypeName="quaternion";Dr.prototype.DefaultInterpolation=Io;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;ts=class extends On{};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Lo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;yc=class extends On{};yc.prototype.ValueTypeName="vector";Mc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Lv=new Mc,Sc=class{constructor(e){this.manager=e!==void 0?e:Lv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";Ys=class extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ha=class extends Ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Il=new nt,ad=new L,ld=new L,Ur=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),ld.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ld),t.updateMatrixWorld(),Il.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bc=class extends Ur{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Fo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ua=class extends Ys{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cd=new nt,mr=new L,Dl=new L,Ec=class extends Ur{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(mr),Dl.copy(n.position),Dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dl),n.updateMatrixWorld(),s.makeTranslation(-mr.x,-mr.y,-mr.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd)}},da=class extends Ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wc=class extends Ur{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fa=class extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new wc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},pa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=hd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};Nc="\\[\\]\\.:\\/",Iv=new RegExp("["+Nc+"]","g"),Oc="[^"+Nc+"]",Dv="[^"+Nc.replace("\\.","")+"]",Uv=/((?:WC+[\/:])*)/.source.replace("WC",Oc),Nv=/(WCOD+)?/.source.replace("WCOD",Dv),Ov=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),Fv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),Bv=new RegExp("^"+Uv+Nv+Ov+Fv+"$"),zv=["material","materials","bones","map"],Tc=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Iv,"")}static parseTrackName(e){let t=Bv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);zv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Tc;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];MM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Pf={};rr(Pf,{MP_NAME:()=>Kc,MP_SERVER_URL:()=>Ia});var Ia,Kc,Qc=jt(()=>{Ia="",Kc="Driver"+Math.floor(1e3+Math.random()*9e3)});var Lf={};rr(Lf,{createMultiplayer:()=>$y});function Wy(i,e){let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function Xy(i,e,t,n,s,r){i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function qy(i){let e=String(i||"Driver").slice(0,24),t="600 26px system-ui, -apple-system, sans-serif",n=14,s=42,r=document.createElement("canvas").getContext("2d");r.font=t;let o=Math.max(60,Math.ceil(r.measureText(e).width)+n*2),a=document.createElement("canvas");a.width=o,a.height=s;let l=a.getContext("2d");l.fillStyle="rgba(8,12,22,0.68)",l.beginPath(),Xy(l,1,1,o-2,s-2,12),l.fill(),l.font=t,l.fillStyle="#ffffff",l.textBaseline="middle",l.fillText(e,n,s/2+1);let c=new Zn(a),h=new Ws(new Qi({map:c,transparent:!0,depthTest:!1}));return h.scale.set(o/95,s/95,1),h.position.y=2.15,h.renderOrder=999,h}function Yy(i,e,t){e!==t&&(i.traverse(n=>{n.isMesh&&n.material&&n.material.color&&n.material.color.getHex()===e&&(n.material=n.material.clone(),n.material.color.setHex(t))}),i.userData.bodyColor=t)}function Zy(i,e){try{let t=document.getElementById("mp-status");if(!t)return;let n={off:"\u25CF offline",connecting:"\u25CF connecting\u2026",on:`\u25CF online \xB7 ${e}`};t.textContent=n[i]||"\u25CF offline",t.className="mp-status "+i}catch{}}function $y(i,e){let t="off",n=null,s=null,r=null,o=!1,a=0,l=null,c=new Map,h=[];function u(){Zy(t,c.size+(t==="on"?1:0))}function d(x){let b=c.get(x);b&&(c.delete(x),s&&b.group&&s.remove(b.group))}function m(x){try{let b=(e||[]).find(T=>T.id===x.carId)||e[0],A=i(b);Number.isFinite(x.color)&&x.color!==b.color&&Yy(A,b.color,x.color),A.add(qy(x.name)),A.position.set(0,0,0),A.rotation.y=0,s&&s.add(A),c.set(x.id,{group:A,tx:0,tz:0,theading:0}),u()}catch{}}function g(){let x=l?l.x:0,b=l?l.z:0,A=h.filter(F=>F.id&&F.id!==r);for(let F of[...c.keys()])A.some(y=>y.id===F)||d(F);let T=A.map(F=>{let y=c.get(F.id),v=y?(y.tx-x)*(y.tx-x)+(y.tz-b)*(y.tz-b):1/0;return{p:F,d:v}}).sort((F,y)=>F.d-y.d).slice(0,Gy),P=new Set(T.map(F=>F.p.id));for(let F of[...c.keys()])P.has(F)||d(F);for(let{p:F}of T)c.has(F.id)||m(F)}function _(){if(t="off",u(),n){try{n.close()}catch{}n=null}}function p(x){if(!""||t!=="off"||typeof io>"u")return;s=x,t="connecting",u();let b;try{b=io("",{transports:["websocket","polling"],reconnectionAttempts:8,timeout:9e3})}catch{_();return}n=b,b.on("connect",()=>{o=!1}),b.on("welcome",A=>{r=A&&A.id,t="on",u()}),b.on("players",A=>{Array.isArray(A)&&(h=A,g())}),b.on("join",A=>{A&&A.id&&A.id!==r&&(h.some(T=>T.id===A.id)||h.push(A),g())}),b.on("pos",A=>{if(!A||!A.id||A.id===r)return;let T=c.get(A.id);T&&(T.tx=+A.x||0,T.tz=+A.z||0,T.theading=+A.heading||0)}),b.on("left",A=>{!A||!A.id||(h=h.filter(T=>T.id!==A.id),d(A.id),u())}),b.on("full",()=>_()),b.on("reconnect_failed",()=>{r||_()}),b.on("connect_error",()=>{})}function f(){for(let x of[...c.keys()])d(x);if(h=[],r=null,o=!1,n){try{n.disconnect()}catch{}n=null}s=null,t="off",u()}function S(x,b){b&&(l=b);let A=Math.min(1,Math.max(0,x)*Vy);for(let[,T]of c)T.group.position.x+=(T.tx-T.group.position.x)*A,T.group.position.z+=(T.tz-T.group.position.z)*A,T.group.rotation.y+=Wy(T.group.rotation.y,T.theading)*A;if(n&&t==="on"&&b&&r){let T=typeof performance<"u"?performance.now():Date.now();if(T-a>=ky){a=T;try{o?n.volatile.emit("pos",{x:+(+b.x||0).toFixed(2),z:(+b.z||0).toFixed(2),heading:(+b.heading||0).toFixed(3),speed:(+b.speed||0).toFixed(1)}):(n.emit("hello",{carId:b.carId||"falcon",color:Number.isFinite(b.colorHex)?b.colorHex:null,name:Kc}),o=!0)}catch{}}}}return{get status(){return t},connect:p,disconnect:f,update:S}}var ky,Gy,Vy,If=jt(()=>{Dt();Qc();ky=100,Gy=12,Vy=9});var Df={};rr(Df,{RoomEnvironment:()=>jc});function Ks(i){let e=new $t;return e.color.setScalar(i),e}var jc,Uf=jt(()=>{Dt();jc=class extends Vs{constructor(e=null){super();let t=new qe;t.deleteAttribute("uv");let n=new Ce({side:Bt}),s=new Ce,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new da(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new fe(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new fe(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new fe(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new fe(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new fe(t,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let d=new fe(t,s);d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),this.add(d);let m=new fe(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let g=new fe(t,Ks(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new fe(t,Ks(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let p=new fe(t,Ks(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let f=new fe(t,Ks(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let S=new fe(t,Ks(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);let x=new fe(t,Ks(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var Da,eh=jt(()=>{Da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var mn,Jy,th,Ky,Ii,Qs=jt(()=>{Dt();mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jy=new ks(-1,1,1,-1,0,1),th=class extends Mt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},Ky=new th,Ii=class{constructor(e){this._mesh=new fe(Ky,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var js,nh=jt(()=>{Dt();Qs();js=class extends mn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pi.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ii(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Gr,Ua,ih=jt(()=>{Qs();Gr=class extends mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ua=class extends mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var Na,Nf=jt(()=>{Dt();eh();nh();ih();ih();Na=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new js(Da),this.copyPass.material.blending=qn,this.clock=new pa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gr!==void 0&&(o instanceof Gr?n=!0:o instanceof Ua&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var Oa,Of=jt(()=>{Dt();Qs();Oa=class extends mn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var Ff,Bf=jt(()=>{Dt();Ff={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Re(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var er,zf=jt(()=>{Dt();Qs();eh();Bf();er=class i extends mn{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Re(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,o,{type:Un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new sn(r,o,{type:Un});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let m=new sn(r,o,{type:Un});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=Ff;this.highPassUniforms=Pi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new re(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Da;this.copyUniforms=Pi.clone(h.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:bn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this.basic=new $t,this.fsQuad=new Ii(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new At({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};er.BlurDirectionX=new re(1,0);er.BlurDirectionY=new re(0,1)});var Hf,kf=jt(()=>{Hf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var Fa,Gf=jt(()=>{Dt();Qs();kf();Fa=class extends mn{constructor(){super();let e=Hf;this.uniforms=Pi.clone(e.uniforms),this.material=new ca({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},st.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ac?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Rc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Vf={};rr(Vf,{createPostFX:()=>jy});function jy(i,e,t){let n=new Na(i);n.addPass(new Oa(e,t));let s=new er(new re(window.innerWidth,window.innerHeight),.35,.65,.82);n.addPass(s);let r=new js(Qy);return n.addPass(r),n.addPass(new Fa),{composer:n,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){n.setSize(o,a)},setPixelRatio(o){n.setPixelRatio(o)},render(){n.render()}}}var Qy,Wf=jt(()=>{Dt();Nf();Of();zf();nh();Gf();Qy={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});Dt();var zc={};rr(zc,{CAR_DEFS:()=>fi,buildCar:()=>Zv,carDef:()=>Bc,effectiveStats:()=>Jv,glassMat:()=>zd,paintCar:()=>$v,paintMat:()=>Bd,setWheelStyle:()=>ya});Dt();var fi=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}}],Bc=i=>fi.find(e=>e.id===i)||fi[0],Bd=i=>new Ir({color:i,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),zd=()=>new Ir({color:922652,metalness:.9,roughness:.08,envMapIntensity:1.6}),Hd=()=>new Ce({color:14672872,metalness:1,roughness:.22}),Hv=()=>new Ce({color:1316378,metalness:.4,roughness:.6}),kv=()=>new Ce({color:789775,roughness:.95}),Gv=()=>new Ce({color:12172998,metalness:1,roughness:.3}),Vv=()=>new Ce({color:5922404,metalness:.9,roughness:.45}),Wv=()=>new Ce({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),Xv=()=>new Ce({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),qv=()=>new Ce({color:15263976,roughness:.5}),Od=(i,e,t)=>({x:i,y:e,r:t}),Fd={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function Fc(i,e,t,n,s=.045){let r=new Rr;r.moveTo(i[0][0],i[0][1]);for(let l=1;l<i.length;l++)r.lineTo(i[l][0],i[l][1]);r.closePath();for(let l of n||[]){let c=new Xs;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new oa(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new fe(o,t);return a.castShadow=!0,a}function Yv(i,e,t){let n=new vt,s=new fe(new Jt(e,e,.26,22),kv());s.rotation.z=Math.PI/2,s.castShadow=!0,n.add(s);let r=new fe(new Jt(e*.52,e*.52,.27,18),Vv());r.rotation.z=Math.PI/2,n.add(r);let o=new fe(new la(e*.62,e*.1,8,22),t);o.rotation.y=Math.PI/2,n.add(o);let a=new vt;for(let h=0;h<5;h++){let u=new fe(new qe(.05,e*.6,e*.16),t);u.position.y=e*.3;let d=new vt;d.rotation.x=h/5*Math.PI*2,d.add(u),a.add(d)}let l=a.clone();l.rotation.y=Math.PI,n.add(a),n.add(l);let c=new fe(new Jt(e*.14,e*.14,.3,12),Hd());return c.rotation.z=Math.PI/2,n.add(c),i==="blackout"?t.color.setHex(1513500):i==="gold"?t.color.setHex(13211182):i==="neon"&&t.color.setHex(2287359),n}function Zv(i,e,t="stock"){let n=typeof i=="string"?Bc(i):i||fi[0],s=n.id||"sport";typeof e!="number"&&(e=typeof n.color=="number"?n.color:n.colors[0]);let r=Fd[s]||Fd.sport,o=new vt,a=Bd(e),l=zd(),c=Hd(),h=Hv(),u=[Od(r.wb,r.wheelR,r.wheelR+.13),Od(-r.wb,r.wheelR,r.wheelR+.13)];o.add(Fc(r.body,r.W,a,u)),o.add(Fc(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(Fc(r.roof,r.W-.2,a,null,.02));let d=Math.max(...r.body.map(y=>y[0])),m=Math.min(...r.body.map(y=>y[0])),g=-d,_=-m,p=r.W/2,f=[],S=Gv();for(let y of[-1,1])for(let v of[-r.wb,r.wb]){let C=Yv(t,r.wheelR,S);C.position.set(y*r.track/2,r.wheelR,v),o.add(C),f.push(C)}let x=Wv();for(let y of[-1,1]){let v=new fe(new qe(.34,.16,.1),h);v.position.set(y*(p-.42),.6,g+.02),o.add(v);let C=new fe(new Nn(.085,12,10),x);C.scale.set(1.6,.75,.7),C.position.set(y*(p-.42),.6,g-.03),o.add(C)}let b=new fe(new qe(p*1.1,.16,.08),h);if(b.position.set(0,.4,g+.01),o.add(b),r.splitter){let y=new fe(new qe(r.W*.92,.05,.3),h);y.position.set(0,.16,g+.1),o.add(y)}if(r.hoodScoop){let y=new fe(new qe(.5,.09,.7),h);y.position.set(0,.86,-(r.wb*.55)),o.add(y)}if(r.canards)for(let y of[-1,1]){let v=new fe(new qe(.22,.03,.3),h);v.position.set(y*(p-.1),.3,g+.12),v.rotation.z=y*.25,o.add(v)}let A=Xv(),T=new fe(new qe(r.W*.78,.1,.06),A);T.position.set(0,.66,_-.02),o.add(T);for(let y of[-1,1]){let v=new fe(new qe(.12,.06,.065),new Ce({color:14540253,emissive:16777215,emissiveIntensity:.6}));v.position.set(y*.28,.66,_-.02),o.add(v)}let P=new fe(new qe(r.W*.8,.14,.18),h);P.position.set(0,.24,_-.06),o.add(P);for(let y of[-1,1]){let v=new fe(new Jt(.05,.055,.22,12),c);v.rotation.x=Math.PI/2,v.position.set(y*.32,.26,_+.06),o.add(v)}let F=new fe(new qe(.34,.09,.02),qv());F.position.set(0,.5,_+.005),o.add(F);for(let y of[-1,1]){let v=new fe(new qe(.1,.03,.05),h);v.position.set(y*(p+.03),1,-(r.wb*.42)),o.add(v);let C=new fe(new qe(.1,.1,.16),a);C.position.set(y*(p+.09),1.04,-(r.wb*.42)),C.castShadow=!0,o.add(C)}if(r.rails)for(let y of[-1,1]){let v=new fe(new qe(.06,.05,1.9),h);v.position.set(y*(p-.35),1.72,.1),o.add(v)}if(r.bed){let y=new fe(new qe(r.W-.5,.06,2),h);y.position.set(0,1.02,m*.55),o.add(y)}if(r.spoiler||r.wing){let y=!!r.wing;for(let C of[-1,1]){let O=new fe(new qe(.07,y?.3:.16,.24),y?h:a);O.position.set(C*(p-.45),.86+(y?.1:.04),_+.28),o.add(O)}let v=new fe(new qe(r.W*(y?.92:.8),.045,y?.42:.3),y?h:a);v.position.set(0,y?1.06:.98,_+.28),v.rotation.x=y?-.12:0,v.castShadow=!0,o.add(v)}return o.userData={defId:s,bodyColor:e,wheels:f,frontWheels:f.filter(y=>y.position.z<0),rim:S,setBrake:y=>{}},o}function $v(i,e){let t=new Re(e);i.traverse(n=>{n.isMesh&&n.material&&n.material.isMeshPhysicalMaterial&&n.material.color&&Math.abs(n.material.color.getHex()-i.userData.bodyColor)<2&&!n.material.emissiveIntensity&&n.material.color.copy(t)}),i.userData.bodyColor=e}function ya(i,e){let t=i.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function Jv(i,e){let n=(typeof i=="string"?Bc(i):i||fi[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:n.topSpeed*(1+.055*r("engine")),accel:n.accel*(1+.09*r("engine")+.12*r("turbo")),handling:n.handling*(1+.06*r("suspension")),grip:n.grip*(1+.07*r("tires")),nitroTime:n.nitroTime+.5*r("nitro"),nitroPower:n.nitroPower*(1+.08*r("nitro"))}}Dt();var Kv=1337,Rt=5,Jn=60,Bn=14,Fn=Jn+Bn,Hc=(Rt*Fn+Bn)/2,ns=232,Or=225,kc=9;function Qv(i){return function(){i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function $s(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Zn(n);return s.colorSpace=mt,s.anisotropy=4,s}function kd(){return $s(128,128,(i,e,t)=>{i.fillStyle="#33363b",i.fillRect(0,0,e,t),i.fillStyle="#3a3d42";for(let n=0;n<160;n++)i.fillRect(n*37%e,n*53%t,2,2);i.fillStyle="#cfd3d8",i.fillRect(4,0,4,t),i.fillRect(e-8,0,4,t),i.fillStyle="#e8c33a";for(let n=0;n<t;n+=32)i.fillRect(e/2-3,n,6,16)})}function jv(){return $s(128,256,(i,e,t)=>{i.fillStyle="#8d97a3",i.fillRect(0,0,e,t);let n=5,s=12,r=e/n,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<n;l++){let c=(a*7+l*13)%17===0;i.fillStyle=c?"#ffe08a":"#3b4656",i.fillRect(l*r+3,a*o+4,r-6,o-8),i.fillStyle="rgba(255,255,255,0.25)",i.fillRect(l*r+3,a*o+4,r-6,3)}})}function ey(){return $s(128,256,(i,e,t)=>{i.fillStyle="#000000",i.fillRect(0,0,e,t);let n=5,s=12,r=e/n,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<n;l++)(a*7+l*13)%5===0&&(i.fillStyle=(a+l)%3===0?"#ffd9a0":"#fff3d0",i.fillRect(l*r+3,a*o+4,r-6,o-8))})}var ln={p:null,q:null,s:null,m:null};function an(i,e,t,n,s,r,o,a,l){ln.p.set(t,n,s),ln.q.setFromAxisAngle(ln.up,r),ln.s.set(o,a,l),ln.m.compose(ln.p,ln.q,ln.s),i.setMatrixAt(e,ln.m)}function Gd(i,e,t,n,s){for(let r of i)if(t>r.minX&&e<r.maxX&&s>r.minZ&&n<r.maxZ)return!0;return!1}function Vd(i,e=[]){let t=Qv(Kv);ln.p=new L,ln.q=new wn,ln.s=new L,ln.m=new nt,ln.up=new L(0,1,0);let n=[];i.fog=new $o(13623538,200,750);let s=new ha(12572927,6978138,.9);i.add(s);let r=new fa(16774368,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=10,r.shadow.camera.far=400;let o=110;r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.bias=-8e-4,i.add(r),i.add(r.target);let a=70,l=120,c=45,h=16,u=new Pt(1400,1400);u.rotateX(-Math.PI/2);let d=new fe(u,new Ce({color:6130250,roughness:.95,metalness:0,envMapIntensity:.25}));d.receiveShadow=!0,i.add(d);let m=[];for(let te=0;te<=Rt;te++)m.push((te-Rt/2)*Fn);let g=Rt*Fn+Bn,_=kd();_.wrapS=_.wrapT=Ki,_.repeat.set(1,g/Bn);let p=new Pt(1,1);p.rotateX(-Math.PI/2);let f=new Ce({map:_,roughness:.9,metalness:.05,envMapIntensity:.35}),S=new Ht(p,f,m.length*2);S.receiveShadow=!0;let x=0;for(let te of m)an(S,x++,te,.05,0,0,Bn,1,g),an(S,x++,0,.05,te,Math.PI/2,Bn,1,g);S.instanceMatrix.needsUpdate=!0,i.add(S);let b=new Pt(1,1);b.rotateX(-Math.PI/2);let A=new Ht(b,new Ce({color:10132898,roughness:.9,metalness:.05,envMapIntensity:.3}),Rt*Rt);A.receiveShadow=!0;let T=0;for(let te=0;te<Rt;te++)for(let ge=0;ge<Rt;ge++){let ce=(te-(Rt-1)/2)*Fn,Z=(ge-(Rt-1)/2)*Fn;an(A,T++,ce,.03,Z,0,Jn,1,Jn)}A.instanceMatrix.needsUpdate=!0,i.add(A);let P=jv(),F=new qe(1,1,1);F.translate(0,.5,0);let y=new Ce({map:P,emissiveMap:ey(),emissive:16762995,emissiveIntensity:0,roughness:.85,metalness:.1,envMapIntensity:.4}),v=110,C=new Ht(F,y,v);C.castShadow=!0,C.receiveShadow=!0;let O=new Re,N=[],R=0,U=4,B=0,z=0;for(let te=0;te<Rt;te++)for(let ge=0;ge<Rt;ge++){let ce=(te-(Rt-1)/2)*Fn,Z=(ge-(Rt-1)/2)*Fn,D=te===B&&ge===z,oe=Math.abs(te-2)<=1&&Math.abs(ge-2)<=1,ae=t()<.75?4:9,Me=Math.sqrt(ae),Se=(Jn-U*2)/Me;for(let Qe=0;Qe<ae&&R<v;Qe++){if(D||t()<.28)continue;let je=Qe%Me,ct=Math.floor(Qe/Me),ot=Se*(.55+t()*.3),$e=Se*(.55+t()*.3),Et=oe?60:28,Xt=oe?18:10,gi=Xt+t()*(Et-Xt),wt=ce-(Jn-U*2)/2+Se*(je+.5)+(t()-.5)*2,_t=Z-(Jn-U*2)/2+Se*(ct+.5)+(t()-.5)*2,Nt=.82+t()*.32,_i=t();Gd(e,wt-ot/2,wt+ot/2,_t-$e/2,_t+$e/2)||(an(C,R,wt,.03,_t,0,ot,gi,$e),_i<.45?O.setRGB(Nt,Nt*.97,Nt*.95):_i<.65?O.setRGB(Nt,Nt*.9,Nt*.82):_i<.82?O.setRGB(Nt*.88,Nt*.95,Nt):O.setRGB(Nt,Nt*.82,Nt*.74),C.setColorAt(R,O),N.push({x:wt,h:gi,w:ot,d:$e,z:_t}),n.push({minX:wt-ot/2,maxX:wt+ot/2,minZ:_t-$e/2,maxZ:_t+$e/2}),R++)}}C.count=R,C.instanceMatrix.needsUpdate=!0,C.instanceColor&&(C.instanceColor.needsUpdate=!0),i.add(C);{let te=new qe(1.6,1.1,1.6);te.translate(0,.55,0);let ge=new Ce({color:9146518,roughness:.7,metalness:.4,envMapIntensity:.4}),ce=[];for(let D of N){let oe=1+Math.floor(t()*2);for(let ae=0;ae<oe;ae++)ce.push([D.x+(t()-.5)*D.w*.5,D.h+.03,D.z+(t()-.5)*D.d*.5,.7+t()*.7])}let Z=new Ht(te,ge,Math.max(1,ce.length));ce.forEach(([D,oe,ae,Me],Se)=>an(Z,Se,D,oe,ae,t()*3.14,Me,1,Me)),Z.count=ce.length,Z.instanceMatrix.needsUpdate=!0,i.add(Z)}{let te=(B-(Rt-1)/2)*Fn,ge=(z-(Rt-1)/2)*Fn,ce=new fe(new Pt(Jn,Jn).rotateX(-Math.PI/2),new Ce({color:3356219,roughness:.95,metalness:.02,envMapIntensity:.25}));ce.position.set(te,.045,ge),ce.receiveShadow=!0,i.add(ce);let Z=new qe(.14,.02,5.6);Z.translate(0,.01,0);let D=new Ce({color:15264492,roughness:.7}),oe=3,ae=[-7.5,7.5],Me=12,Se=te-Me*oe/2,Qe=ae.length*(Me+1),je=new Ht(Z,D,Qe),ct=new qe(1.8,.14,.16);ct.translate(0,.07,0);let ot=new Ce({color:10132898,roughness:.9}),$e=new Ht(ct,ot,ae.length*Me),Et=0,Xt=0;for(let wt of ae){for(let _t=0;_t<=Me;_t++)an(je,Et++,Se+_t*oe,.055,ge+wt,0,1,1,1);for(let _t=0;_t<Me;_t++)an($e,Xt++,Se+_t*oe+oe/2,.055,ge+wt+(wt<0?1.9:-1.9),0,1,1,1)}je.count=Et,je.instanceMatrix.needsUpdate=!0,$e.count=Xt,$e.instanceMatrix.needsUpdate=!0,i.add(je,$e);let gi=new fe(new Pt(20,5).rotateX(-Math.PI/2),new Ce({map:$s(256,64,(wt,_t,Nt)=>{wt.fillStyle="#33363b",wt.fillRect(0,0,_t,Nt),wt.fillStyle="#e8c33a",wt.font="bold 40px sans-serif",wt.textAlign="center",wt.textBaseline="middle",wt.fillText("PARKING",_t/2,Nt/2)}),roughness:.9,transparent:!1}));gi.position.set(te,.055,ge),i.add(gi)}{let te=new qe(.7,.02,3.2);te.translate(0,.01,0);let ge=new Ce({color:14672614,roughness:.75}),ce=[];for(let D of[2,3])for(let oe of[2,3]){let ae=m[D],Me=m[oe],Se=Bn/2+2.6;for(let[Qe,je,ct]of[[ae,Me-Se,0],[ae,Me+Se,0],[ae-Se,Me,1],[ae+Se,Me,1]])for(let ot=-2;ot<=2;ot++)ce.push(ct===0?[Qe+ot*2.2,.06,je,0]:[Qe,.06,je+ot*2.2,Math.PI/2])}let Z=new Ht(te,ge,ce.length);ce.forEach(([D,oe,ae,Me],Se)=>an(Z,Se,D,oe,ae,Me,1,1,1)),Z.instanceMatrix.needsUpdate=!0,Z.receiveShadow=!0,i.add(Z)}let G=new Jt(.12,.16,9,6);G.translate(0,4.5,0);let X=new Ce({color:3948872,roughness:.6,metalness:.6,envMapIntensity:.6}),K=new qe(1.6,.25,.5);K.translate(.6,9,0);let Q=new Ce({color:16773828,emissive:16766842,emissiveIntensity:.35,roughness:.4,metalness:.2}),he=[];for(let te of m)for(let ge=-g/2+25;ge<g/2-10;ge+=46){let ce=Math.round(ge/46)%2===0?1:-1;he.push([te+ce*(Bn/2+1.5),ge,0]),he.push([ge,te+ce*(Bn/2+1.5),1])}let q=new Ht(G,X,he.length),ee=new Ht(K,Q,he.length);he.forEach(([te,ge,ce],Z)=>{an(q,Z,te,0,ge,0,1,1,1),an(ee,Z,te,0,ge,ce?Math.PI/2:0,1,1,1)}),q.instanceMatrix.needsUpdate=!0,ee.instanceMatrix.needsUpdate=!0,i.add(q,ee);let de=[];for(let te=0;te<Rt;te++)for(let ge=0;ge<Rt;ge++){if(te===B&&ge===z)continue;let ce=(te-(Rt-1)/2)*Fn,Z=(ge-(Rt-1)/2)*Fn,D=2+Math.floor(t()*3);for(let oe=0;oe<D;oe++)de.push([ce+(t()-.5)*(Jn-8),Z+(t()-.5)*(Jn-8),.8+t()*.5])}let Ee=new Jt(.18,.28,2.6,6);Ee.translate(0,1.3,0);let xe=new ra(1.9,4.6,7);xe.translate(0,4.4,0);let Ne=new Ht(Ee,new Ce({color:7031342,roughness:.9,envMapIntensity:.2}),de.length),Fe=new Ht(xe,new Ce({color:4094516,roughness:.85,envMapIntensity:.3}),de.length);Fe.castShadow=!0;for(let te=de.length-1;te>=0;te--){let[ge,ce]=de[te];Gd(e,ge-2,ge+2,ce-2,ce+2)&&de.splice(te,1)}de.forEach(([te,ge,ce],Z)=>{an(Ne,Z,te,.03,ge,t()*6.28,ce,ce,ce),an(Fe,Z,te,.03,ge,t()*6.28,ce,ce*(.9+t()*.3),ce)}),Ne.instanceMatrix.needsUpdate=!0,Fe.instanceMatrix.needsUpdate=!0,i.add(Ne,Fe);let Te=$s(64,64,(te,ge,ce)=>{let Z=te.createRadialGradient(32,32,2,32,32,30);Z.addColorStop(0,"rgba(255,220,150,1)"),Z.addColorStop(.4,"rgba(255,200,120,0.45)"),Z.addColorStop(1,"rgba(255,190,110,0)"),te.fillStyle=Z,te.fillRect(0,0,ge,ce)}),Be=new Mt,I=new Float32Array(he.length*3);he.forEach(([te,ge],ce)=>{I[ce*3]=te,I[ce*3+1]=8.9,I[ce*3+2]=ge}),Be.setAttribute("position",new zt(I,3));let ue=new Tr({map:Te,size:14,transparent:!0,opacity:0,blending:bn,depthWrite:!1,sizeAttenuation:!0}),J=new jo(Be,ue);J.frustumCulled=!1,i.add(J);let le=new qe(1,1,1);le.translate(0,.5,0);let $=new $t({color:2767445}),Ae=46,_e=new Ht(le,$,Ae);for(let te=0;te<Ae;te++){let ge=te/Ae*Math.PI*2+t()*.1,ce=760+t()*220,Z=40+t()*60,D=60+t()*130,oe=40+t()*60;an(_e,te,Math.cos(ge)*ce,0,Math.sin(ge)*ce,t()*.6,Z,D,oe)}_e.instanceMatrix.needsUpdate=!0,i.add(_e);let E=Or*2,M=$s(128,128,(te,ge,ce)=>{te.fillStyle="#2e3136",te.fillRect(0,0,ge,ce),te.fillStyle="#cfd3d8",te.fillRect(2,0,5,ce),te.fillRect(ge-7,0,5,ce),te.fillStyle="#e8c33a";for(let Z=0;Z<ce;Z+=32)te.fillRect(ge/2-3,Z,6,16)});M.wrapS=M.wrapT=Ki,M.repeat.set(1,E/14);let H=new Pt(1,1);H.rotateX(-Math.PI/2);let ie=new fe(H,new Ce({map:M,roughness:.9,metalness:.05,envMapIntensity:.35}));ie.scale.set(kc,1,E),ie.position.set(ns,.05,0),ie.receiveShadow=!0,i.add(ie);let ne=kd();ne.wrapS=ne.wrapT=Ki,ne.repeat.set(1,(ns-Hc)/Bn+2);let se=ns-Hc+20,be=new fe(H,new Ce({map:ne,roughness:.9,metalness:.05,envMapIntensity:.35}));be.scale.set(se,1,Bn),be.rotation.y=Math.PI/2,be.position.set((Hc+ns)/2,.05,0),be.receiveShadow=!0,i.add(be);let me=new fe(new Pt(kc,1.6).rotateX(-Math.PI/2),new Ce({color:15922422,roughness:.7}));me.position.set(ns,.07,Or-8),i.add(me);let ve=new qe(4,1.1,.7);ve.translate(0,.55,0);let Ue=new Ce({color:16777215,roughness:.6,metalness:.1,envMapIntensity:.4}),ke=Math.floor(E/9)*2,j=new Ht(ve,Ue,ke);j.castShadow=!0;let et=new Re,Ge=0;for(let te=-Or+4;te<=Or-4&&Ge<ke;te+=9)for(let ge of[-1,1])an(j,Ge,ns+ge*(kc/2+1.6),.05,te,0,1,1,1),et.setHex(Ge%2===0?15229982:15922422),j.setColorAt(Ge,et),Ge++;j.count=Ge,j.instanceMatrix.needsUpdate=!0,j.instanceColor&&(j.instanceColor.needsUpdate=!0),i.add(j);let ze={x:m[3],z:120,heading:0},Ie={startX:ns,startZ:Or-8,dirX:0,dirZ:-1,length:E};function we(te){y.emissiveIntensity=te*1.4,Q.emissiveIntensity=.35+te*3,ue.opacity=te*.85,$.color.setHex(te>.5?923174:2767445)}function Ve(te,ge){let ce=Math.round(ge.x/h)*h,Z=Math.round(ge.z/h)*h;r.target.position.set(ce,0,Z),r.position.set(ce+a,l,Z+c),r.target.updateMatrixWorld()}return Ve(0,ze),{colliders:n,spawn:ze,dragStrip:Ie,update:Ve,setGlow:we,sun:r,hemi:s}}var Ma=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0}update(e,t,n){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,u=0,d=h?.25:1;e.throttle>0?u=e.throttle*s.accel*c*d*(1-Math.max(0,l)/(s.topSpeed*c)*.72):e.throttle<0&&(u=l>1?e.throttle*s.accel*1.6:e.throttle*s.accel*.5),u-=l*(.028+(h?.06:0))+Math.sign(l)*.6,l+=u*t;let m=s.topSpeed*c,g=-s.topSpeed*.35;l=Math.max(g,Math.min(m,l)),Math.abs(l)<.15&&!e.throttle&&(l=0);let _=Math.abs(l),p=Math.min(1,_/8),f=this.steer*.55*s.handling*p*(1-Math.min(1,_/(s.topSpeed*1.4))*.45);_>.5&&(this.heading-=f*(l/_)*t*(_>1?Math.min(2.2,_*.12+.8):1)*2.2);let S=-Math.sin(this.heading),x=-Math.cos(this.heading),b=this.vel.x*S+this.vel.z*x,A=this.vel.x-S*b,T=this.vel.z-x*b;this.drifting=!!(e.handbrake&&_>6);let P=this.drifting?.983:Math.min(.995,.9+s.grip*.06),F=Math.pow(P,t*60);A*=F,T*=F;let y=b+(l-b)*Math.min(1,t*60);this.vel.x=S*y+A,this.vel.z=x*y+T;let v=this.pos.x+this.vel.x*t,C=this.pos.z+this.vel.z*t;if(n){let O=n(v,C,this.pos.x,this.pos.z);v=O.x,C=O.z,O.hitX&&(this.vel.x*=-.25),O.hitZ&&(this.vel.z*=-.25)}return this.pos.x=v,this.pos.z=C,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer}}};function Wd(i={}){let e=i.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1},n={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1},s={x:0,y:0,id:null},r="drive",o=!1,a=!1,l=!1,c=!1,h=!1,u=[],d=v=>document.getElementById(v);function m(){t.steer=(n.right?1:0)-(n.left?1:0),t.throttle=n.gas?1:n.brake?-1:0,t.nitro=n.nitro,t.handbrake=n.handbrake;let v=(n.right?1:0)-(n.left?1:0),C=(n.gas?1:0)-(n.brake?1:0);t.moveX=s.id!==null?s.x:v,t.moveY=s.id!==null?s.y:C,t.run=n.run||n.nitro||s.id!==null&&Math.hypot(s.x,s.y)>.92,t.fire=n.fire}function g(v,C){if(!v)return;let O=44,N=B=>{if(B.pointerId!==s.id)return;let z=v.getBoundingClientRect(),G=B.clientX-(z.left+z.width/2),X=B.clientY-(z.top+z.height/2),K=G,Q=X;e()&&(K=X,Q=-G);let he=Math.hypot(K,Q),q=Math.min(he,O);he>0&&(K=K/he*q,Q=Q/he*q),C.style.transform=`translate(${K}px, ${Q}px)`;let ee=.12,de=K/O,Ee=-Q/O;Math.hypot(de,Ee)<ee&&(de=0,Ee=0),s.x=de,s.y=Ee,m()},R=B=>{if(B.preventDefault(),s.id===null){s.id=B.pointerId;try{v.setPointerCapture(B.pointerId)}catch{}N(B)}},U=B=>{B.pointerId===s.id&&(s.id=null,s.x=0,s.y=0,C.style.transform="translate(0px, 0px)",m())};v.addEventListener("pointerdown",R),v.addEventListener("pointermove",N),v.addEventListener("pointerup",U),v.addEventListener("pointercancel",U),u.push(()=>{v.removeEventListener("pointerdown",R),v.removeEventListener("pointermove",N),v.removeEventListener("pointerup",U),v.removeEventListener("pointercancel",U)})}function _(v,C){if(!v)return;let O=R=>{R.preventDefault(),R.stopPropagation(),C(),v.classList.add("pressed")},N=()=>v.classList.remove("pressed");v.addEventListener("pointerdown",O),v.addEventListener("pointerup",N),v.addEventListener("pointerleave",N),u.push(()=>{v.removeEventListener("pointerdown",O),v.removeEventListener("pointerup",N),v.removeEventListener("pointerleave",N)})}function p(v,C){if(!v)return;let O=0,N=B=>{B.preventDefault(),O++,C==="fire"&&!n.fire&&(c=!0),n[C]=!0,m(),v.classList.add("pressed")},R=()=>{O=Math.max(0,O-1),O===0&&(n[C]=!1,m(),v.classList.remove("pressed"))},U=B=>B.preventDefault();v.addEventListener("pointerdown",N),v.addEventListener("pointerup",R),v.addEventListener("pointercancel",R),v.addEventListener("pointerleave",R),v.addEventListener("contextmenu",U),u.push(()=>{v.removeEventListener("pointerdown",N),v.removeEventListener("pointerup",R),v.removeEventListener("pointercancel",R),v.removeEventListener("pointerleave",R),v.removeEventListener("contextmenu",U)})}function f(v){if(!v)return;let C=N=>{N.preventDefault(),o=!0,v.classList.add("pressed")},O=()=>v.classList.remove("pressed");v.addEventListener("pointerdown",C),v.addEventListener("pointerup",O),v.addEventListener("pointercancel",O),v.addEventListener("pointerleave",O),u.push(()=>{v.removeEventListener("pointerdown",C),v.removeEventListener("pointerup",O),v.removeEventListener("pointercancel",O),v.removeEventListener("pointerleave",O)})}let S={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function x(v){let C=v.target;if(C&&(C.tagName==="INPUT"||C.tagName==="TEXTAREA"))return;let O=v.key,N=S[O];if(N){n[N]=!0,m(),v.preventDefault();return}if(O===" "){if(v.preventDefault(),v.repeat)return;r==="drag"?o=!0:r==="foot"?(n.fire||(c=!0),n.fire=!0,m()):(n.handbrake=!0,m());return}if(O==="e"||O==="E"||O==="Enter"){v.repeat||(a=!0);return}if(O==="q"||O==="Q"){v.repeat||(l=!0);return}(O==="Shift"||O==="f"||O==="F")&&(n.nitro=!0,m())}function b(v){let C=v.key,O=S[C];if(O){n[O]=!1,m();return}if(C===" "){n.handbrake=!1,n.fire=!1,m();return}(C==="Shift"||C==="f"||C==="F")&&(n.nitro=!1,m())}function A(v){r=v==="drag"||v==="foot"?v:"drive";let C=(N,R)=>{let U=d(N);U&&(U.style.display=R?"":"none")};C("steer-zone",r==="drive"),C("pedal-zone",r!=="foot"),C("btn-shift",r==="drag"),C("joystick",r==="foot"),C("foot-zone",r==="foot");for(let N in n)n[N]=!1;s.id=null,s.x=0,s.y=0;let O=d("joy-knob");O&&(O.style.transform="translate(0px, 0px)");for(let N of document.querySelectorAll("#touch-controls .pressed"))N.classList.remove("pressed");m()}function T(){if(h)return;h=!0,p(d("btn-left"),"left"),p(d("btn-right"),"right"),p(d("btn-gas"),"gas"),p(d("btn-brake"),"brake"),p(d("btn-nitro"),"nitro"),p(d("btn-handbrake"),"handbrake"),f(d("btn-shift")),p(d("btn-fire"),"fire"),p(d("btn-run"),"run"),g(d("joystick"),d("joy-knob")),_(d("btn-action"),()=>{a=!0}),_(d("btn-weapon"),()=>{l=!0}),window.addEventListener("keydown",x),window.addEventListener("keyup",b),u.push(()=>{window.removeEventListener("keydown",x),window.removeEventListener("keyup",b)});let v=d("touch-controls");v&&(v.style.display="ontouchstart"in window?"":"none"),A(r)}function P(){for(let v of u)v();u.length=0;for(let v in n)n[v]=!1;o=a=l=c=!1,s.id=null,s.x=s.y=0,m(),h=!1}function F(){let v=o;return o=!1,v}let y=v=>()=>{let C;switch(v){case"action":return C=a,a=!1,C;case"cycle":return C=l,l=!1,C;case"fire":return C=c,c=!1,C}};return{input:t,consumeShift:F,consumeAction:y("action"),consumeCycle:y("cycle"),consumeFireEdge:y("fire"),setMode:A,attach:T,detach:P,get mode(){return r}}}var ty=[.3,.47,.64,.81,1],ny=[1.9,1.45,1.15,.95,.8],Sa=.8,qd=.97,iy=.8,sy=45,ry=2.2,oy=[16765286,448160,10182117,15817653,48121,16704576,15681391],Kt=i=>document.getElementById(i);function Yd(i,e){return i+Math.random()*(e-i)}function Xd(i){return i[Math.random()*i.length|0]}function ay(i){let e=402/(.42*i.topSpeed+.35*i.accel);return Math.min(17,Math.max(8.5,e))*Yd(.85,1.15)}function ly(i){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,stats:i}}function cy(i,e,t){let n=i.stats.topSpeed,s=ty[i.gear]*n,r=1-Math.min(1,i.speed/(s*1.02)),o=e*i.stats.accel*ny[i.gear]*Math.max(0,r);o*=i.bogMul,o-=i.speed*.028+Math.sign(i.speed)*.6,i.speed=Math.max(0,i.speed+o*t),i.dist+=i.speed*t,i.rpm=Math.min(1.06,i.speed/s),i.bogMul+=(1-i.bogMul)*Math.min(1,t*2.5)}function hy(i){return i>=Sa&&i<=qd?"perfect":i<Sa?"early":"late"}function uy(i){if(i.gear>=4)return null;let e=hy(i.rpm);return i.gear++,e==="perfect"?i.speed*=1.015:(i.speed*=.93,i.bogMul=.75),i.limiterT=0,e}function dy(i){let e=ay(i),t=1.1,n=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/n,reactDelay:Yd(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:i}}function fy(i,e,t){if(!i.launched)return;let n=e-i.launchT;n<0||(i.speed=i.top*(1-Math.exp(-i.k*n)),i.dist+=i.speed*t)}function py({falseStart:i,pET:e,aET:t,pDist:n,aDist:s}){return i?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:n>=s}function my(i,e,t){if(!i)return 100;let n=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(n*10))}function gy(i,e){return i?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function Zd(i){let e=Kt("drag-ui"),t=Kt("drag-msg"),n=Kt("drag-result"),s=Kt("rpm-bar"),r=Kt("rpm-shiftzone"),o=Kt("btn-shift"),a={s1:Kt("bulb-s1"),s2:Kt("bulb-s2"),a1:Kt("bulb-a1"),a2:Kt("bulb-a2"),a3:Kt("bulb-a3"),g:Kt("bulb-g"),r:Kt("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let N in a)a[N].classList.remove("lit")}function h(N){a[N].classList.add("lit")}function u(N,R){t.textContent=N,l.msgTimer=R||0}function d(N,R){try{i.audio.beep(N,R)}catch{}}function m(){let N=i.getPlayer();return N&&N.stats?N.stats:i.effectiveStats(N.def,N.upgrades)}function g(N,R){let U=i.city.dragStrip;N.position.set(U.startX+l.perpX*R,0,U.startZ+l.perpZ*R),N.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function _(N,R){let U=i.city.dragStrip;N.position.set(U.startX+l.dirX*R.dist+l.perpX*R.lateral,0,U.startZ+l.dirZ*R.dist+l.perpZ*R.lateral)}function p(N,R,U){let B=N.userData.wheels;if(B)for(let z of B){let G=z.userData.spin||[];for(let X of G)X.rotation.x+=R*U*2.2}}function f(N){return ly(N)}function S(N,R,U){cy(N,R,U)}function x(N){let R=uy(N);R&&(R==="perfect"?(u("PERFECT SHIFT!",1),d(1200,.08)):(u(R==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),d(220,.15)))}function b(N){return dy(N)}function A(N,R){fy(N,l.greenT,R)}function T(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),n.classList.add("hidden"),n.innerHTML="",u("STAGE!"),s.style.width="15%",r.style.left=Sa*100+"%",r.style.width=(qd-Sa)*100+"%",o&&o.classList.remove("hidden")}function P(){l.phase="green",l.t=0,l.greenT=0,h("g"),u("GO!"),d(880,.4),l.phase="racing"}function F(){l.phase="red",c(),h("r"),u("FALSE START!"),d(180,.6),y("FALSE START \u2014 you jumped the green.")}function y(N){l.phase="done",l.finished=!0;let R=l.player,U=l.ai,B=!!(N&&N.indexOf("FALSE START")===0),z=py({falseStart:B,pET:R.et,aET:U.finishET,pDist:R.dist,aDist:U.dist}),G=R.et,X=U.finishET,K=R.reaction!=null?R.reaction.toFixed(3)+"s":"\u2014",Q=(R.trap*ry).toFixed(1),he=my(z,G,X),q=gy(z,B);i.addCash(he),n.innerHTML="<h2>"+q+"</h2>"+(N?"<p>"+N+"</p>":"")+"<p>ET: "+(G==null?"DNF":G.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(X==null?"DNF":X.toFixed(3)+"s")+"</p><p>Trap speed: "+Q+" MPH &nbsp;\xB7&nbsp; Reaction: "+K+"</p><p>+$"+he+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',n.classList.remove("hidden"),Kt("drag-rematch").onclick=()=>{v()},Kt("drag-back").onclick=()=>{C()};try{i.audio.engine(0,0),i.audio.skid(!1)}catch{}}function v(){l.active&&C();let R=i.getPlayer().group;l.origPos=R.position.clone(),l.origRotY=R.rotation.y;let U=i.city.dragStrip,B=Math.hypot(U.dirX,U.dirZ)||1;l.dirX=U.dirX/B,l.dirZ=U.dirZ/B,l.perpX=-l.dirZ,l.perpZ=l.dirX,g(R,2),R.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=f(m());let z=Xd(i.CAR_DEFS),G=i.buildCar(Object.assign({},z,{color:Xd(oy)}));i.scene.add(G),g(G,-2),l.aiGroup=G,l.ai=b(i.effectiveStats(z)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),i.controls.setMode("drag");let X=i.camera;X.position.set(U.startX-l.dirX*12+l.perpX*12,5,U.startZ-l.dirZ*12+l.perpZ*12),X.lookAt(U.startX+l.dirX*8,1,U.startZ+l.dirZ*8),T()}function C(){l.aiGroup&&(i.scene.remove(l.aiGroup),l.aiGroup=null);let N=i.getPlayer();N&&N.group&&l.origPos&&(N.group.position.copy(l.origPos),N.group.rotation.y=l.origRotY),e.classList.add("hidden"),n.classList.add("hidden"),o&&o.classList.add("hidden");try{i.controls.setMode("drive")}catch{}try{i.audio.engine(0,0),i.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function O(N){if(!l.active)return;N=Math.min(N,.05);let R=i.controls.input||{},U=Math.max(0,Math.min(1,R.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&U>.5){F();return}if(l.msgTimer>0&&(l.msgTimer-=N,l.msgTimer<=0&&l.phase==="racing"&&u("GO!")),l.phase==="stage")l.t+=N,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,u("READY\u2026"));else if(l.phase==="tree"){l.t+=N;let z=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<z;)l.ambersLit++,h("a"+l.ambersLit),d(440,.15);l.t>=1.5&&P()}else if(l.phase==="racing"){l.greenT+=N;let z=l.player,G=l.ai;!z.reacted&&U>.5&&(z.reacted=!0,z.reaction=l.greenT),!G.launched&&l.greenT>=G.reactDelay&&(G.launched=!0,G.launchT=l.greenT),S(z,U,N),i.controls.consumeShift&&i.controls.consumeShift()&&x(z),z.rpm>=1&&U>.3?(z.limiterT+=N,z.limiterT>=iy&&(z.speed*=.9,z.limiterT=0,u("LIMITER!",.8),d(160,.2))):z.limiterT=Math.max(0,z.limiterT-N*2),A(G,N),z.et==null&&z.dist>=402&&(z.et=l.greenT,z.trap=z.speed),G.finishET==null&&G.dist>=402&&(G.finishET=l.greenT,G.trap=G.speed);let X=l.greenT>=sy;if(z.et!=null&&G.finishET!=null||X||z.et!=null&&l.greenT>z.et+8||G.finishET!=null&&l.greenT>G.finishET+8){y(X&&z.et==null&&G.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,z.rpm)*100+"%";try{i.audio.engine(z.rpm,U),i.audio.skid(U>.8&&z.speed<8&&z.gear===0)}catch{}}let B=i.getPlayer().group;if(_(B,l.player),l.aiGroup&&_(l.aiGroup,l.ai),p(B,l.player.speed,N),l.aiGroup&&p(l.aiGroup,l.ai.speed,N),l.phase==="racing"||l.phase==="done"){let z=i.camera,G=B.position.x,X=B.position.z,K=G-l.dirX*11+l.perpX*7,Q=X-l.dirZ*11+l.perpZ*7;z.position.x+=(K-z.position.x)*Math.min(1,N*4),z.position.y+=(4.5-z.position.y)*Math.min(1,N*4),z.position.z+=(Q-z.position.z)*Math.min(1,N*4),z.lookAt(G+l.dirX*12,1.2,X+l.dirZ*12)}}return Kt("drag-exit").onclick=()=>C(),{enter:v,exit:C,update:O,get active(){return l.active}}}function $d(){let i=null,e=null,t=null,n=null,s=null,r=null,o=null,a=null,l=!1,c=!1;function h(){if(i)return!0;let u=window.AudioContext||window.webkitAudioContext;if(!u)return!1;i=new u,e=i.createGain(),e.gain.value=.5,e.connect(i.destination),t=i.createOscillator(),t.type="sawtooth",t.frequency.value=70,n=i.createOscillator(),n.type="square",n.frequency.value=38,s=i.createBiquadFilter(),s.type="lowpass",s.frequency.value=400,s.Q.value=2,r=i.createGain(),r.gain.value=0,t.connect(s),n.connect(s),s.connect(r),r.connect(e),t.start(),n.start();let d=i.sampleRate,m=i.createBuffer(1,d,i.sampleRate),g=m.getChannelData(0);for(let f=0;f<d;f++)g[f]=Math.random()*2-1;a=m;let _=i.createBufferSource();_.buffer=m,_.loop=!0;let p=i.createBiquadFilter();return p.type="bandpass",p.frequency.value=900,p.Q.value=1.1,o=i.createGain(),o.gain.value=0,_.connect(p),p.connect(o),o.connect(e),_.start(),!0}return{unlock(){c=!0,h()&&(i.state==="suspended"&&i.resume(),l=!0)},engine(u,d){if(!i||!l)return;let m=Math.max(0,Math.min(1,u)),g=Math.max(0,Math.min(1,d)),_=i.currentTime,p=60+m*220;t.frequency.setTargetAtTime(p,_,.03),n.frequency.setTargetAtTime(p*.5+3,_,.03),s.frequency.setTargetAtTime(300+m*900,_,.05),r.gain.setTargetAtTime(g*.11+m*.04,_,.06)},skid(u){!i||!l||o.gain.setTargetAtTime(u?.12:0,i.currentTime,u?.05:.12)},beep(u=660,d=.08){if(!c||!h())return;i.state==="suspended"&&i.resume();let m=i.currentTime,g=i.createOscillator();g.type="sine",g.frequency.value=u;let _=i.createGain();_.gain.setValueAtTime(1e-4,m),_.gain.exponentialRampToValueAtTime(.25,m+.012),_.gain.exponentialRampToValueAtTime(1e-4,m+d),g.connect(_),_.connect(e),g.start(m),g.stop(m+d+.03)},shot(u="pistol"){if(!c||!h())return;let d=i.currentTime,m={pistol:[2600,.16,.5],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],rifle:[2200,.2,.55]}[u]||[2600,.16,.5],g=i.createBufferSource();g.buffer=a;let _=i.createBiquadFilter();_.type="lowpass",_.frequency.setValueAtTime(m[0],d),_.frequency.exponentialRampToValueAtTime(300,d+m[1]);let p=i.createGain();p.gain.setValueAtTime(m[2],d),p.gain.exponentialRampToValueAtTime(1e-4,d+m[1]),g.connect(_),_.connect(p),p.connect(e),g.start(d,Math.random()*.5),g.stop(d+m[1]+.02);let f=i.createOscillator();f.type="sine",f.frequency.setValueAtTime(140,d),f.frequency.exponentialRampToValueAtTime(40,d+.12);let S=i.createGain();S.gain.setValueAtTime(m[2]*.8,d),S.gain.exponentialRampToValueAtTime(1e-4,d+.14),f.connect(S),S.connect(e),f.start(d),f.stop(d+.16)},click(){this.beep(1800,.03)},shutdown(){if(i)try{i.close()}catch{}i=null,e=null,l=!1,t=n=s=r=o=a=null}}}var Kd="citydriver_save_v1",Gc=250,ba=350,Ea=5,_y=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295],xy=["Sport","Chrome","Stealth"],Qd=["engine","turbo","tires","suspension","nitro"],vy={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},yy={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},Fr=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function Vc(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:Fr()},paint:{sport:14100029},wheels:{sport:0}}}function My(i){let e=Object.assign(Vc(),i||{}),t=new Set(fi.map(n=>n.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(n=>t.has(n)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let n of e.owned){if(!e.upgrades[n]||typeof e.upgrades[n]!="object")e.upgrades[n]=Fr();else for(let s of Qd)e.upgrades[n][s]=Math.max(0,Math.min(Ea,e.upgrades[n][s]|0));typeof e.paint[n]!="number"&&(e.paint[n]=14100029),e.wheels[n]=Math.max(0,e.wheels[n]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function jd(){try{let i=localStorage.getItem(Kd);return i?My(JSON.parse(i)):Vc()}catch{return Vc()}}function zn(i){try{localStorage.setItem(Kd,JSON.stringify(i))}catch{}}function Jd(i,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+i.price/2e4))}var Sy=i=>"#"+i.toString(16).padStart(6,"0");function ef(i){let e=i.save,t=_=>document.getElementById(_),n=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let _ of fi)for(let p in o)o[p]=Math.max(o[p],_[p]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(_,p,f)=>{let S=Math.max(5,Math.round(p/f*100));return`<div class="stat-row"><span>${_}</span><div class="sbar"><i style="width:${S}%"></i></div></div>`};function c(){n.innerHTML=fi.map(_=>{let p=e.owned.includes(_.id),f=e.currentCar===_.id,S;return f?S='<button class="buy-btn" disabled>SELECTED</button>':p?S=`<button class="buy-btn" data-act="select" data-id="${_.id}">SELECT</button>`:S=`<button class="buy-btn" data-act="buy" data-id="${_.id}"${e.cash<_.price?" disabled":""}>$${_.price.toLocaleString()}</button>`,`<div class="car-card${f?" selected":""}"><div class="cinfo"><b>${_.name}</b><small>${_.desc}</small><div class="stat-bars">${l("SPD",_.topSpeed,o.topSpeed)}${l("ACC",_.accel,o.accel)}${l("HDL",_.handling,o.handling)}${l("GRP",_.grip,o.grip)}</div></div>${S}</div>`}).join("")}function h(){let _=i.getDef(e.currentCar);if(!_){s.innerHTML="";return}let p=e.upgrades[_.id]||(e.upgrades[_.id]=Fr());s.innerHTML=`<div class="upg-car-name">${_.name} \u2014 performance</div>`+Qd.map(f=>{let S=p[f]||0,x=S>=Ea,b=x?0:Jd(_,f,S),A="";for(let P=0;P<Ea;P++)A+=`<div class="pip${P<S?" on":""}"></div>`;let T=x?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${f}"${e.cash<b?" disabled":""}>$${b.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${vy[f]}</b><small>${yy[f]}</small><div class="pips">${A}</div></div>${T}</div>`}).join("")}function u(){let _=e.currentCar,p=e.paint[_],f=e.wheels[_],S=_y.map(b=>`<button class="swatch${b===p?" sel":""}" data-hex="${b}" style="background:${Sy(b)}" aria-label="paint"></button>`).join(""),x=xy.map((b,A)=>`<button class="wheel-opt${A===f?" sel":""}" data-idx="${A}"><b>${b}</b><small>$${ba}</small></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Paint \u2014 $${Gc} each</b><div class="swatch-row">${S}</div></div><div class="style-sec"><b>Wheels \u2014 $${ba} each</b><div class="swatch-row">${x}</div></div>`}function d(){a(),c(),h(),u()}n.addEventListener("click",_=>{let p=_.target.closest("button[data-act]");if(!p||p.disabled)return;let f=i.getDef(p.dataset.id);if(f)if(p.dataset.act==="buy"){if(e.owned.includes(f.id)||e.cash<f.price)return;e.cash-=f.price,e.owned.push(f.id),e.upgrades[f.id]||(e.upgrades[f.id]=Fr()),typeof e.paint[f.id]!="number"&&(e.paint[f.id]=f.color),e.wheels[f.id]===void 0&&(e.wheels[f.id]=0),e.currentCar=f.id,zn(e),i.onSelectCar(f.id),d()}else{if(e.currentCar===f.id)return;e.currentCar=f.id,zn(e),i.onSelectCar(f.id),d()}}),s.addEventListener("click",_=>{let p=_.target.closest("button[data-key]");if(!p||p.disabled)return;let f=i.getDef(e.currentCar);if(!f)return;let S=p.dataset.key,x=e.upgrades[f.id]||(e.upgrades[f.id]=Fr()),b=x[S]||0,A=Jd(f,S,b);b>=Ea||e.cash<A||(e.cash-=A,x[S]=b+1,zn(e),i.refreshScene(),d())}),r.addEventListener("click",_=>{let p=e.currentCar,f=_.target.closest("button.swatch");if(f){let x=parseInt(f.dataset.hex,10);e.paint[p]!==x&&e.cash>=Gc&&(e.cash-=Gc,e.paint[p]=x,zn(e),i.onPaint(x),d());return}let S=_.target.closest("button.wheel-opt");if(S){let x=parseInt(S.dataset.idx,10);e.wheels[p]!==x&&e.cash>=ba&&(e.cash-=ba,e.wheels[p]=x,zn(e),i.onWheels(x),d())}});let m=[...document.querySelectorAll(".gtab")],g={cars:n,upgrades:s,style:r};return m.forEach(_=>_.addEventListener("click",()=>{m.forEach(p=>p.classList.toggle("active",p===_));for(let p in g)g[p].classList.toggle("hidden",p!==_.dataset.tab)})),d(),{refresh:d}}var tf=["low","medium","high"];function Wc(i){switch(i){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var wa=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,Wc(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};Dt();var Ta={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.65,stars:1}},Xc=["day","sunset","night"],by=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`,Ey=`
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
}`;function nf(){let i=new Nn(1500,24,16),e={uTop:{value:new Re(3108822)},uHorizon:{value:new Re(13625079)},uSunDir:{value:new L(0,1,0)},uSunColor:{value:new Re(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new At({vertexShader:by,fragmentShader:Ey,uniforms:e,side:Bt,depthWrite:!1,fog:!1}),n=new fe(i,t);return n.frustumCulled=!1,n.renderOrder=-10,{mesh:n,uniforms:e}}function wy(i,e){let t=i*Math.PI/180,n=e*Math.PI/180;return new L(Math.cos(t)*Math.sin(n),Math.sin(t),Math.cos(t)*Math.cos(n))}function sf(i,e){let t=Ta[e]||Ta.day,{uniforms:n,sun:s,hemi:r,scene:o,renderer:a}=i;n.uTop.value.setHex(t.top),n.uHorizon.value.setHex(t.horizon),n.uSunColor.value.setHex(t.sunColor),n.uSunI.value=t.sunI,n.uStars.value=t.stars;let l=wy(t.elev,t.azim);return n.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),i.sunElev=t.elev,i.sunAzim=t.azim,i.sunDir=l,t}Dt();function Ty(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new Zn(i);return n.colorSpace=mt,n}var qc=null;function Ay(){return qc||(qc=Ty()),qc}var pi=class{constructor(e,t,{color:n=12303291,opacity:s=.5,blending:r=wi,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new Pt(1,1),this.mat=new Qi({map:Ay(),color:n,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new Ws(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new L}emit(e,t,n,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,n);let u=h.userData;u.life=a,u.maxLife=a,u.vx=s,u.vy=r,u.vz=o,u.grow=c,u.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let n of this.items){if(!n.visible)continue;let s=n.userData;if(s.life-=e,s.life<=0){n.visible=!1;continue}n.position.x+=s.vx*e,n.position.y+=s.vy*e,n.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;n.scale.set(o,o,1),n.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},Aa=class{constructor(e,t=400){this.max=t,this.i=0;let n=new Pt(.32,1.4);n.rotateX(-Math.PI/2),this.mesh=new Ht(n,new $t({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new nt;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new nt,this._q=new wn,this._p=new L,this._s=new L(1,1,1),this._up=new L(0,1,0)}add(e,t,n){this._q.setFromAxisAngle(this._up,n),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function Br(){return{driftT:0,driftAcc:0}}function rf(i,e,t,n){if(e&&Math.abs(t)>=8)return i.driftT+=n,i.driftAcc+=n*15,0;let s=0;return i.driftT>=1&&(s=Math.round(i.driftAcc)),i.driftT=0,i.driftAcc=0,s}var of=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function af(i){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function n(){let r=window.innerWidth,o=window.innerHeight;e=of()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),i&&i(t.w,t.h)}async function s(){if(!of())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}n()}return window.addEventListener("resize",n),window.addEventListener("orientationchange",()=>setTimeout(n,200)),document.addEventListener("fullscreenchange",()=>setTimeout(n,100)),n(),{view:t,goLandscape:s,refresh:n,get rotated(){return e}}}var Ca=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."}],zr=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],Ra=150,Pa=[{id:"none",name:"No hat",price:0},{id:"cap",name:"Snapback",price:200},{id:"beanie",name:"Beanie",price:200},{id:"cowboy",name:"Stetson",price:450}],Yc=15,Li=i=>Ca.find(e=>e.id===i)||null;function lf(i){let e=new Set(Ca.map(n=>n.id));Array.isArray(i.weapons)||(i.weapons=[]),i.weapons=i.weapons.filter((n,s,r)=>e.has(n)&&r.indexOf(n)===s),(!i.ammo||typeof i.ammo!="object")&&(i.ammo={});for(let n of Object.keys(i.ammo))e.has(n)||delete i.ammo[n];for(let n of i.weapons)i.ammo[n]=Math.max(0,i.ammo[n]|0);i.weapons.includes(i.equipped)||(i.equipped=i.weapons[0]||null),(!i.outfit||typeof i.outfit!="object")&&(i.outfit={}),zr.includes(i.outfit.shirt)||(i.outfit.shirt=zr[0]);let t=new Set(Pa.map(n=>n.id));return Array.isArray(i.hats)||(i.hats=["none"]),i.hats=i.hats.filter(n=>t.has(n)),i.hats.includes("none")||i.hats.unshift("none"),i.hats.includes(i.outfit.hat)||(i.outfit.hat="none"),i}var An=i=>({ok:!1,msg:i}),is=i=>({ok:!0,msg:i});function cf(i,e){let t=Li(e);return t?i.weapons.includes(e)?An("Already owned"):i.cash<t.price?An("Not enough cash"):(i.cash-=t.price,i.weapons.push(e),i.ammo[e]=(i.ammo[e]|0)+t.start,i.equipped=e,is(t.name+" bought")):An("Unknown weapon")}function hf(i,e){let t=Li(e);return t?i.weapons.includes(e)?i.cash<t.ammoPrice?An("Not enough cash"):(i.cash-=t.ammoPrice,i.ammo[e]=(i.ammo[e]|0)+t.ammoBox,is("+"+t.ammoBox+" rounds")):An("Buy the gun first"):An("Unknown weapon")}function uf(i,e){return e===null?(i.equipped=null,is("Holstered")):i.weapons.includes(e)?(i.equipped=e,is(Li(e).name+" equipped")):An("Not owned")}function Zc(i){let e=[...i.weapons,null];if(e.length===1)return null;let t=e.indexOf(i.equipped);return i.equipped=e[(t+1)%e.length],i.equipped}function df(i,e){return zr.includes(e)?i.outfit.shirt===e?An("Already wearing it"):i.cash<Ra?An("Not enough cash"):(i.cash-=Ra,i.outfit.shirt=e,is("New shirt")):An("Unknown color")}function ff(i,e){let t=Pa.find(n=>n.id===e);return t?i.hats.includes(e)?(i.outfit.hat=e,is(t.name+" on")):i.cash<t.price?An("Not enough cash"):(i.cash-=t.price,i.hats.push(e),i.outfit.hat=e,is(t.name+" bought")):An("Unknown hat")}var La=class{constructor(){this.reset(0,0,0)}reset(e,t,n){this.pos={x:e,z:t},this.heading=n,this.speed=0,this.phase=0}update(e,t,n){t=Math.min(t,.05);let s=pf(e.moveX||0),r=pf(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,u=this.pos.z+c*this.speed*t;if(n){let d=n(h,u,.45);h=d.x,u=d.z}return this.pos.x=h,this.pos.z=u,this.phase+=this.speed*t*2.1,this}};function pf(i){return i<-1?-1:i>1?1:i}function $c(i,e,t,n){let s=i-t,r=e-n;return Math.sqrt(s*s+r*r)}function mf(i,e,t){let n=Math.cos(t),s=-Math.sin(t);return{x:i-n*1.9,z:e-s*1.9,heading:t}}function gf(i,e,t,n,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(i<s.minX||i>s.maxX)return 1/0}else{let l=(s.minX-i)/t,c=(s.maxX-i)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(n)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/n,c=(s.maxZ-e)/n;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function _f(i,e,t,n,s,r,o,a){let l=i-s,c=e-r,h=l*t+c*n,u=l*l+c*c-o*o,d=h*h-u;if(d<0)return 1/0;let m=Math.sqrt(d),g=-h-m;return g<0&&(g=-h+m),g>=0&&g<=a?g:1/0}Dt();var Ry=()=>new Ce({color:13011554,roughness:.75}),Cy=()=>new Ce({color:2963272,roughness:.85}),Py=()=>new Ce({color:1118481,roughness:.6}),Ly=()=>new Ce({color:2759184,roughness:.9}),Iy=()=>new Ce({color:1908515,metalness:.7,roughness:.35});function bt(i,e,t,n,s=0){let r=new qe(i,e,t);r.translate(0,s,0);let o=new fe(r,n);return o.castShadow=!0,o}function Dy(i){let e=new vt,t=Iy(),n=new Ce({color:7031342,roughness:.8});return i==="pistol"?(e.add(bt(.06,.08,.24,t,.05).translateZ(-.08)),e.add(bt(.05,.12,.06,t,-.02))):i==="shotgun"?(e.add(bt(.07,.07,.75,t,.05).translateZ(-.28)),e.add(bt(.08,.09,.22,n,0).translateZ(-.38)),e.add(bt(.07,.12,.3,n,0).translateZ(.18))):i==="smg"?(e.add(bt(.07,.11,.42,t,.05).translateZ(-.12)),e.add(bt(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(bt(.04,.04,.12,t,.07).translateZ(-.38))):(e.add(bt(.07,.11,.7,t,.05).translateZ(-.22)),e.add(bt(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(bt(.06,.13,.26,t,.02).translateZ(.24)),e.add(bt(.05,.05,.2,t,.14).translateZ(-.15))),e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function Uy(i,e){if(i==="cap"){let t=new vt,n=new Ce({color:e,roughness:.7}),s=new fe(new Nn(.155,14,8,0,Math.PI*2,0,Math.PI/2),n);t.add(s);let r=bt(.24,.02,.14,n);return r.position.set(0,.01,-.15),t.add(r),t}if(i==="beanie"){let t=new Ce({color:2237739,roughness:.95});return new fe(new Nn(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(i==="cowboy"){let t=new vt,n=new Ce({color:9132587,roughness:.85}),s=new fe(new Jt(.3,.3,.02,20),n),r=new fe(new Jt(.12,.15,.17,14),n);return r.position.y=.09,t.add(s,r),t}return null}function xf(i){let e=new vt,t=Ry(),n=Cy(),s=Py(),r=new Ce({color:i.shirt,roughness:.8}),o=[],a=[];for(let _ of[-1,1]){let p=new vt;p.position.set(_*.12,.92,0),p.add(bt(.17,.84,.2,n,-.42));let f=bt(.17,.09,.3,s,-.88);f.position.z=-.04,p.add(f),e.add(p),o.push(p);let S=new vt;S.position.set(_*.33,1.5,0),S.add(bt(.13,.36,.15,r,-.17)),S.add(bt(.11,.3,.12,t,-.5));let x=bt(.1,.1,.1,t,-.69);S.add(x),e.add(S),a.push(S)}let l=bt(.52,.62,.27,r,1.23);e.add(l);let c=bt(.53,.06,.28,s,.93);e.add(c);let h=bt(.12,.08,.12,t,1.57);e.add(h);let u=new fe(new Nn(.15,16,12),t);u.position.y=1.74,u.scale.set(1,1.12,1),u.castShadow=!0,e.add(u);let d=new fe(new Nn(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),Ly());d.position.y=1.76,e.add(d);let m=new vt;m.position.y=1.8,e.add(m);let g=new vt;return g.position.y=-.69,a[1].add(g),e.userData={legs:o,arms:a,shirt:r,hatSlot:m,gunSlot:g,gunId:null,hatId:null,recoil:0},Jc(e,i),e}function Jc(i,e){let t=i.userData;if(t.shirt.color.setHex(e.shirt),t.hatId!==e.hat){t.hatSlot.clear();let n=Uy(e.hat,e.shirt);n&&t.hatSlot.add(n),t.hatId=e.hat}}function vf(i,e){let t=i.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let n=Dy(e);n.rotation.x=-Math.PI/2,t.gunSlot.add(n)}t.gunId=e}}function yf(i,e,t,n,s){let r=i.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),n?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),i.position.y=Math.abs(Math.cos(e))*o*.05}function Mf(i){i.userData.recoil=1}Dt();var Sf=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],Ny=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function bf(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Zn(n);return s.colorSpace=mt,s.anisotropy=4,s}function Oy(i,e,t){return bf(512,128,(n,s,r)=>{n.fillStyle="#0b0f1a",n.fillRect(0,0,s,r),n.strokeStyle=t,n.lineWidth=8,n.strokeRect(6,6,s-12,r-12),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.font="bold 58px sans-serif",n.fillText(i,s/2,52),n.fillStyle="#e2e8f0",n.font="bold 22px sans-serif",n.fillText(e,s/2,100)})}function Fy(){return bf(128,128,(i,e,t)=>{let n=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{i.beginPath(),i.arc(n,s,62-a*10,0,Math.PI*2),i.fillStyle=o,i.fill()})})}function Ef(i,e){let t=[],n=[],s=new Ce({color:14078925,roughness:.85,envMapIntensity:.4}),r=new Ce({color:2961720,roughness:.8}),o=new Ce({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of Ny){let[u,d]=h.bx,[m,g]=h.bz,_=(u+d)/2,p=(m+g)/2,f=d-u,S=g-m,x=new fe(new qe(f,h.h,S).translate(0,h.h/2,0),s);x.position.set(_,.03,p),x.castShadow=x.receiveShadow=!0,i.add(x);let b=new fe(new qe(f+.6,.5,S+.6),r);b.position.set(_,h.h+.25,p),i.add(b);let A=h.face==="-x"?-1:1,T=A<0?u:d,P=new fe(new qe(1.6,.2,S*.9),new Ce({color:h.color,roughness:.6}));P.position.set(T+A*.8,3.3,p),P.rotation.z=A*.18,i.add(P);let F=new fe(new Pt(S*.75,2.4),o);F.position.set(T+A*.02,1.5,p),F.rotation.y=A*Math.PI/2,i.add(F);let y=new Ce({map:Oy(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});y.emissiveMap=y.map,y.emissiveIntensity=.55;let v=new fe(new Pt(S*.85,S*.85/4),y);v.position.set(T+A*.05,h.h-1.4,p),v.rotation.y=A*Math.PI/2,i.add(v),e.colliders.push({minX:u,maxX:d,minZ:m,maxZ:g});let C={x:T+A*1.6,z:p},O=new $t({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:pn}),N=new fe(new aa(.9,1.25,32).rotateX(-Math.PI/2),O);N.position.set(C.x,.09,C.z),i.add(N);let R=new $t({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:pn,blending:bn}),U=new fe(new Jt(1.05,1.05,3.2,24,1,!0),R);U.position.set(C.x,1.6,C.z),i.add(U),n.push({ring:N,ringMat:O,beamMat:R}),t.push({id:h.id,type:h.type,name:h.name,door:C,color:h.accent})}let a=By(i,e),l=0;function c(h){l+=h;let u=.55+Math.sin(l*3)*.25;for(let d of n)d.ringMat.opacity=u+.2,d.beamMat.opacity=u*.3,d.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function By(i,e){let o=new fe(new Pt(54,16).rotateX(-Math.PI/2),new Ce({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,i.add(o);let a=new Ce({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let p of l){let f=new fe(new qe(p.maxX-p.minX,p.h,p.maxZ-p.minZ).translate(0,p.h/2,0),a);f.position.set((p.minX+p.maxX)/2,.03,(p.minZ+p.maxZ)/2),f.castShadow=f.receiveShadow=!0,i.add(f),e.colliders.push({minX:p.minX,maxX:p.maxX,minZ:p.minZ,maxZ:p.maxZ})}let c=new fe(new Pt(.3,15).rotateX(-Math.PI/2),new $t({color:16765503}));c.position.set(51,.06,156/2),i.add(c);let h=Fy(),u=new Ce({map:h,roughness:.6,side:pn}),d=new Ce({color:4144966,roughness:.7}),g=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([p,f])=>{let S=new vt;S.position.set(p,.04,f);let x=new fe(new qe(.08,1.1,.08).translate(0,.55,0),d),b=new fe(new sa(.55,24),u);return b.position.y=1.5,b.rotation.y=-Math.PI/2,b.castShadow=!0,S.add(x,b),i.add(S),{x:p,z:f,r:.6,up:!0,timer:0,fall:0,pivot:S}});function _(p){for(let f of g)f.up?f.fall>0&&(f.fall=Math.max(0,f.fall-p*4)):(f.fall=Math.min(1,f.fall+p*6),f.timer-=p,f.timer<=0&&(f.up=!0)),f.pivot.rotation.z=f.fall*(Math.PI/2-.05),f.pivot.rotation.z*=-1}return{targets:g,update:_,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function wf(i){return i.up?(i.up=!1,i.timer=3,!0):!1}Dt();var zy=.22,Js=1.45;function Tf(i){let e=[];for(let c=0;c<16;c++){let h=new Mt;h.setAttribute("position",new zt(new Float32Array(6),3));let u=new wr({color:16769162,transparent:!0,opacity:0,depthWrite:!1,blending:bn}),d=new Qo(h,u);d.frustumCulled=!1,d.visible=!1,i.add(d),e.push({l:d,life:0})}let t=0,n=new pi(i,8,{color:16762976,opacity:.95,blending:bn}),s=new pi(i,30,{color:16757575,opacity:.9,blending:bn}),r=new pi(i,20,{color:12103840,opacity:.5}),o=0;function a(c,h,u,d){let m=e[t];t=(t+1)%e.length;let g=m.l.geometry.attributes.position.array;g[0]=c,g[1]=Js,g[2]=h,g[3]=u,g[4]=Js-.05,g[5]=d,m.l.geometry.attributes.position.needsUpdate=!0,m.l.visible=!0,m.life=.07,m.l.material.opacity=1}function l(c,h,u,d){o=Math.max(0,o-c);for(let F of e)F.l.visible&&(F.life-=c,F.life<=0?F.l.visible=!1:F.l.material.opacity=F.life/.07);n.update(c),s.update(c),r.update(c);let m=h.save.equipped,g=m&&Li(m);if(u=u||d,!g||!u||o>0)return{fired:!1};if(!g.auto&&!d)return{fired:!1};if((h.save.ammo[m]|0)<=0)return d&&(h.audio.click&&h.audio.click(),h.toast&&h.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),o=.3,{fired:!1,empty:!0};h.save.ammo[m]--,o=g.rate;let _=h.heading,p=zy;for(let F of h.targets){if(!F.up)continue;let y=F.x-h.pos.x,v=F.z-h.pos.z,C=Math.hypot(y,v);if(C>g.range||C<.5)continue;let O=Math.atan2(-y,-v),N=Math.atan2(Math.sin(O-h.heading),Math.cos(O-h.heading));Math.abs(N)<p&&(p=Math.abs(N),_=O)}let f=-Math.sin(h.heading),S=-Math.cos(h.heading),x=Math.cos(h.heading),b=-Math.sin(h.heading),A=h.pos.x+f*.95+x*.3,T=h.pos.z+S*.95+b*.3;n.emit(A,Js,T,{vx:f*2,vy:0,vz:S*2,life:.06,size:g.id==="shotgun"?1.1:.7,grow:.6});let P=0;for(let F=0;F<g.pellets;F++){let y=_+(Math.random()-.5)*2*g.spread,v=-Math.sin(y),C=-Math.cos(y),O=g.range,N=null;for(let B of h.colliders){let z=gf(A,T,v,C,B,O);z<O&&(O=z,N=null)}for(let B of h.targets){if(!B.up)continue;let z=_f(A,T,v,C,B.x,B.z,B.r,O);z<O&&(O=z,N=B)}let R=A+v*O,U=T+C*O;if((F<3||g.pellets===1)&&a(A,T,R,U),N){wf(N)&&(P++,h.onTargetHit&&h.onTargetHit(N));for(let B=0;B<4;B++)s.emit(R,Js,U,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else O<g.range&&(s.emit(R-v*.1,Js,U-C*.1,{vx:-v*2,vy:1.5,vz:-C*2,life:.18,size:.3,grow:.2}),r.emit(R-v*.2,Js,U-C*.2,{vx:-v,vy:.6,vz:-C,life:.5,size:.4,grow:1.2}))}return h.audio.shot&&h.audio.shot(g.id),{fired:!0,hits:P}}return{update:l}}var Hy=i=>"#"+i.toString(16).padStart(6,"0"),Hr=i=>"$"+i.toLocaleString();function Af(i){let e=c=>document.getElementById(c),t=e("store"),n=e("store-list"),s=null;function r(c){i.toast(c.msg),i.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(i.persist(),i.onChange()),l()}function o(){let c=i.save;n.innerHTML="";for(let u of Ca){let d=c.weapons.includes(u.id),m=document.createElement("div");m.className="upg-row store-row"+(c.equipped===u.id?" sel":""),m.innerHTML=`<div class="uinfo"><b>${u.name}</b><small>${u.desc}</small>
        <small class="ammo-line">${d?"Ammo: "+(c.ammo[u.id]|0):Hr(u.price)}</small></div>
        <div class="store-btns"></div>`;let g=m.querySelector(".store-btns");if(d){let _=document.createElement("button");_.className="upg-btn",_.textContent="+"+u.ammoBox+" AMMO "+Hr(u.ammoPrice),_.disabled=c.cash<u.ammoPrice,_.onclick=()=>r(hf(c,u.id)),g.appendChild(_);let p=document.createElement("button");p.className="buy-btn eq",p.textContent=c.equipped===u.id?"EQUIPPED":"EQUIP",p.disabled=c.equipped===u.id,p.onclick=()=>r(uf(c,u.id)),g.appendChild(p)}else{let _=document.createElement("button");_.className="buy-btn",_.textContent="BUY "+Hr(u.price),_.disabled=c.cash<u.price,_.onclick=()=>r(cf(c,u.id)),g.appendChild(_)}n.appendChild(m)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",n.appendChild(h)}function a(){let c=i.save;n.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${Hr(Ra)}</b><div class="swatch-row"></div>`;let u=h.querySelector(".swatch-row");for(let g of zr){let _=document.createElement("div");_.className="swatch"+(c.outfit.shirt===g?" sel":""),_.style.background=Hy(g),_.onclick=()=>r(df(c,g)),u.appendChild(_)}n.appendChild(h);let d=document.createElement("div");d.className="style-sec",d.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let m=d.querySelector(".swatch-row");for(let g of Pa){let _=document.createElement("button"),p=c.hats.includes(g.id);_.className="wheel-opt"+(c.outfit.hat===g.id?" sel":""),_.innerHTML=`${g.name}<small>${p?c.outfit.hat===g.id?"wearing":"owned":Hr(g.price)}</small>`,_.onclick=()=>r(ff(c,g.id)),m.appendChild(_)}n.appendChild(d)}function l(){e("store-cash").textContent=i.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var Rf=[];for(let i=0;i<=5;i++)Rf.push((i-5/2)*74);var kr=384/2;function Cf(i,e){let t=i.getContext("2d"),n=i.width,r=n/2/130,o=0;function a(l,c,h,u){if((o++&3)!==0)return;let d=g=>n/2+(g-l)*r,m=g=>n/2+(g-c)*r;t.clearRect(0,0,n,n),t.save(),t.beginPath(),t.arc(n/2,n/2,n/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,40,28,0.82)",t.fillRect(0,0,n,n),t.fillStyle="rgba(120,130,145,0.55)";for(let g=0;g<5;g++)for(let _=0;_<5;_++){let p=(g-2)*74,f=(_-4/2)*74;t.fillRect(d(p-30),m(f-30),60*r,60*r)}t.strokeStyle="#2b2f36",t.lineWidth=14*r,t.beginPath();for(let g of Rf)t.moveTo(d(g),m(-kr)),t.lineTo(d(g),m(kr)),t.moveTo(d(-kr),m(g)),t.lineTo(d(kr),m(g));t.moveTo(d(kr),m(0)),t.lineTo(d(232),m(0)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(d(232),m(-225)),t.lineTo(d(232),m(225)),t.stroke();for(let g of e)t.fillStyle=g.color,t.beginPath(),t.arc(d(g.door.x),m(g.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();u&&(t.fillStyle="#ffffff",t.fillRect(d(u.x)-3,m(u.z)-3,6,6)),t.restore(),t.save(),t.translate(n/2,n/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(n/2,n/2,n/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",n/2,11)}return{draw:a}}var{CAR_DEFS:qr,buildCar:_h,effectiveStats:tp,paintCar:eM}=zc,Xf=typeof ya=="function"?ya:null,De=i=>document.getElementById(i),Wt,Ct,on,kt,cn=null,Hn=null,Yr=null,Le=null,ut=null,it=null,Rn=null,np=null,Ni=null,tt=null,hn="boot",_n=!1,kn=!1,lh="menu",Ut={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},qf=!1,Xa=Br(),xn=null,Qn=null,ip=null,nr=0,ss=null,Zr=null,Wa=null,Wn=null,Ha=null,ch=0,hh=1,Gn=null,mi=!1,ht=null,rn=null,xh=null,rs=null,vh=null,uh=null,os=!1,Di=0,Xr=0,ka=null,Ga=null,Yf="",ir={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},sh={x:0,z:0},Qt=new L,Oi=new L,gn=new L,rh={x:0,z:0},Vr={x:0,z:0,hitX:!1,hitZ:!1},tr={x:0,z:0,heading:0,speed:0,car:"falcon"},Ba={def:null,stats:null,group:null},as=[],dh=[],fh=[],Fi=62,ph=0,Zf=0;function Vn(i,e=2200){let t=De("toast");t.textContent=i,t.classList.remove("hidden"),clearTimeout(Zf),Zf=setTimeout(()=>t.classList.add("hidden"),e)}function ls(){let i=tt.cash.toLocaleString();De("cash-val").textContent=i,De("garage-cash").textContent=i}function mh(i){tt.cash=Math.max(0,tt.cash+Math.round(i)),zn(tt),ls()}function sp(){Hn=qr.find(e=>e.id===tt.currentCar)||qr[0],cn&&Ct.remove(cn),cn=_h(Hn);let i=tt.paint[Hn.id];typeof i=="number"&&i!==(Hn.colors&&Hn.colors[0])&&eM(cn,i),Xf&&Xf(cn,tt.wheels[Hn.id]||0),Ct.add(cn),Yr=tp(Hn,tt.upgrades[Hn.id]||{}),as=(cn.userData.wheels||[]).slice(),dh=as.filter(e=>e.position.z<0),fh=cn.userData.brakeMats||[],De("menu-car-name").textContent=Hn.name}function tM(){let i=Le.heading;gn.set(-Math.sin(i),0,-Math.cos(i)),Qt.set(Le.pos.x-gn.x*9,4,Le.pos.z-gn.z*9),on.position.copy(Qt)}function rp(){let i=kt.spawn;Le.pos.x=i.x,Le.pos.z=i.z,Le.heading=i.heading||0,Xa=Br(),tM(),yh(0)}function za(){let i=Le.pos.x,e=Le.pos.z,t=Le.heading;sp(),Le.reset(Yr),Le.pos.x=i,Le.pos.z=e,Le.heading=t,yh(0)}var Kn=new L;function yh(i){cn.position.set(Le.pos.x,0,Le.pos.z),cn.rotation.y=Le.heading;let e=Ut.speed*i*2.4;for(let n=0;n<as.length;n++)as[n].rotation.x+=e;for(let n=0;n<dh.length;n++)dh[n].rotation.y=Ut.steer*.45;let t=ut&&ut.input.throttle<0;if(cn.userData.setBrake)cn.userData.setBrake(t);else for(let n=0;n<fh.length;n++)fh[n].emissiveIntensity=t?4.5:1.8;if(Wn){let n=Le.heading;Kn.set(-Math.sin(n),0,-Math.cos(n)),Wn.position.set(Le.pos.x+Kn.x*1.8,1.1,Le.pos.z+Kn.z*1.8),Ha.position.set(Le.pos.x+Kn.x*22,.4,Le.pos.z+Kn.z*22)}}var Wr=new L;function nM(i,e){let t=as[i];return e.setFromMatrixPosition(t.matrixWorld),e}var oh=0;function iM(i){if(!ss||hn!=="freeroam"||_n||kn)return;cn.updateMatrixWorld();let e=as.length;if(Ut.drifting&&hh>.3)for(let n=0;n<e;n++)as[n].position.z<0||(nM(n,Wr),Math.random()<.85*hh&&ss.emit(Wr.x+(Math.random()-.5)*.4,.35,Wr.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&Wa.add(Wr.x,Wr.z,Le.heading));if(oh+=i,(ut&&ut.input.throttle||0)>.4&&oh>.09){oh=0;let n=Le.heading;Kn.set(-Math.sin(n),0,-Math.cos(n));let s=Math.cos(n),r=-Math.sin(n);for(let o of[-.45,.45]){let a=Le.pos.x-Kn.x*2.2+s*o,l=Le.pos.z-Kn.z*2.2+r*o;Zr.emit(a,.32,l,{vx:-Kn.x*2,vy:.8,vz:-Kn.z*2,life:.5,size:.55,grow:1.6})}}ss.update(i),Zr.update(i)}function sM(i,e){return op(i,e,1.15)}function op(i,e,t){let n=i,s=e,r=!1,o=!1,a=kt.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(n+t<c.minX||n-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(n,c.maxX)),u=Math.max(c.minZ,Math.min(s,c.maxZ)),d=n-h,m=s-u,g=d*d+m*m;if(!(g>=t*t))if(g>1e-8){let _=Math.sqrt(g),p=(t-_)/_,f=d*p,S=m*p;n+=f,s+=S,Math.abs(f)>Math.abs(S)?r=!0:o=!0}else{let _=n-c.minX,p=c.maxX-n,f=s-c.minZ,S=c.maxZ-s,x=Math.min(_,p,f,S);x===_?(n=c.minX-t,r=!0):x===p?(n=c.maxX+t,r=!0):x===f?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return Vr.x=n,Vr.z=s,Vr.hitX=r,Vr.hitZ=o,Vr}function ap(i,e,t){let n=op(i,e,t),s=Le.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=Le.pos.x+r*a,c=Le.pos.z+o*a,h=1+t,u=n.x-l,d=n.z-c,m=Math.hypot(u,d);m<h&&m>1e-6&&(n.x=l+u/m*h,n.z=c+d/m*h)}return n}function cs(){if(!rn)return;Jc(rn,tt.outfit),vf(rn,tt.equipped);let i=tt.equipped&&Li(tt.equipped);De("weapon-name").textContent=i?i.name.toUpperCase():"UNARMED";let e=De("weapon-ammo");e.textContent=i?String(tt.ammo[i.id]|0):tt.weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!i)}function Mh(){for(let i of["speedo","gear-hud","nitro-bar"])De(i).classList.toggle("hidden",mi);De("weapon-hud").classList.toggle("hidden",!mi)}function rM(){if(Math.abs(Ut.speed)>4){Vn("Slow down to get out");return}let i=mf(Le.pos.x,Le.pos.z,Le.heading),e=ap(i.x,i.z,.45);ht.reset(e.x,e.z,Le.heading),Le.vel.x=0,Le.vel.z=0,Le.speed=0,Ut.speed=0,Ut.drifting=!1,Ut.nitro=!1,Ut.steer=0,Xa=Br(),mi=!0,rn.visible=!0,rn.position.set(ht.pos.x,0,ht.pos.z),cs(),ut.setMode("foot"),Mh(),it.engine(0,0),it.skid(!1),it.beep(420,.06)}function lp(){mi&&(mi=!1,rn.visible=!1,Di=0,ut&&ut.setMode("drive"),Mh(),Xa=Br(),it&&it.beep(520,.06),Xr&&(zn(tt),Xr=0))}function oM(i){let e=ht.heading,t=ht.pos.x,n=ht.pos.z;gn.set(-Math.sin(e),0,-Math.cos(e));let s=Di>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;Oi.set(t-gn.x*r+a*c,o,n-gn.z*r+l*c);let h=1-Math.exp(-i*7);Qt.x+=(Oi.x-Qt.x)*h,Qt.y+=(Oi.y-Qt.y)*h,Qt.z+=(Oi.z-Qt.z)*h,on.position.copy(Qt),on.lookAt(t+gn.x*5+a*c,1.45,n+gn.z*5+l*c),Math.abs(60-Fi)>.25&&(Fi+=(60-Fi)*Math.min(1,i*4),on.fov=Fi,on.updateProjectionMatrix())}function aM(i){if(ht.update(ut.input,i,ap),rn.position.x=ht.pos.x,rn.position.z=ht.pos.z,rn.rotation.y=ht.heading,ut.consumeCycle()){let n=Zc(tt);zn(tt),cs(),tt.weapons.length?Vn(n?Li(n).name:"Holstered",1200):Vn("No guns yet \u2014 visit LOCK & LOAD",1600)}ir.pos.x=ht.pos.x,ir.pos.z=ht.pos.z,ir.heading=ht.heading;let e=ut.consumeFireEdge();e&&!tt.equipped&&tt.weapons.length&&(Zc(tt),cs()),xh.update(i,ir,ut.input.fire,e).fired&&(Mf(rn),Di=.9,Xr++,De("weapon-ammo").textContent=String(tt.ammo[tt.equipped]|0)),ut.input.fire&&tt.equipped&&(Di=Math.max(Di,.3)),Di=Math.max(0,Di-i),yf(rn,ht.phase,ht.speed,Di>0&&!!tt.equipped,i),oM(i),Xr&&ph%120===0&&(zn(tt),Xr=0)}function Ui(i,e,t){if(ka=i,Ga=e,t!==Yf){Yf=t;let n=De("btn-action");n.textContent=t||"",n.classList.toggle("hidden",!t)}}function $f(){if(mi){let i=null,e=2.4;for(let t of rs.stores){let n=$c(ht.pos.x,ht.pos.z,t.door.x,t.door.z);n<e&&(e=n,i=t)}return i?Ui("shop",i,(i.type==="garage"?"\u{1F527} ":i.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+i.name):$c(ht.pos.x,ht.pos.z,Le.pos.x,Le.pos.z)<4.2?Ui("in",null,"\u{1F697} GET IN"):Ui(null,null,"")}if(Math.abs(Ut.speed)<4)return Ui("out",null,"\u{1F6AA} GET OUT");Ui(null,null,"")}function Jf(){ka==="out"?rM():ka==="in"?lp():ka==="shop"&&Ga&&(Ga.type==="garage"?gh("play"):lM(Ga))}function lM(i){os=!0,Ui(null,null,""),it.beep(700,.06),vh.open(i)}function cp(){os=!1,vh.close(),cs(),ls()}function cM(i){let e=Le.heading,t=Le.pos.x,n=Le.pos.z;gn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(Ut.speed),r=8.5+s*.045,o=3.6+s*.014;Oi.set(t-gn.x*r,o,n-gn.z*r);let a=1-Math.exp(-i*5.5);Qt.x+=(Oi.x-Qt.x)*a,Qt.y+=(Oi.y-Qt.y)*a,Qt.z+=(Oi.z-Qt.z)*a,on.position.copy(Qt),on.lookAt(t+gn.x*5,1.7,n+gn.z*5);let l=62+Math.min(14,s*.22)+(Ut.nitro?6:0);Math.abs(l-Fi)>.25&&(Fi+=(l-Fi)*Math.min(1,i*4),on.fov=Fi,on.updateProjectionMatrix())}function hM(i){return i<2?"N":i<20?"1":i<40?"2":i<65?"3":i<95?"4":i<125?"5":"6"}function uM(){let i=Math.abs(Ut.speed)*2.2;De("speed-val").textContent=Math.round(i),De("gear-hud").textContent=hM(i),De("nitro-fill").style.width=(Math.max(0,Math.min(1,Ut.nitroFrac))*100).toFixed(1)+"%"}function hs(){for(let i of["main-menu","pause-menu","garage"])De(i).classList.add("hidden")}function Sh(){os&&cp(),mi&&lp(),Ui(null,null,"")}function bh(){hn="menu",_n=!1,kn=!1,Rn&&Rn.active&&Rn.exit(),Sh(),ut&&(ut.setMode("drive"),ut.detach()),hs(),De("main-menu").classList.remove("hidden"),De("hud").classList.add("hidden"),De("touch-controls").classList.add("hidden"),De("drag-ui").classList.add("hidden"),it.engine(0,0),it.skid(!1)}function ah(){Rn&&Rn.active&&Rn.exit(),Sh(),Wn&&(Wn.intensity=ch),De("drag-ui").classList.add("hidden"),hn="freeroam",_n=!1,kn=!1,hs(),De("hud").classList.remove("hidden"),De("touch-controls").classList.remove("hidden"),ut.attach(),ut.setMode("drive"),rp(),ls(),pM(),Vn("Free roam \u2014 drift to earn cash, find the drag strip!")}function Kf(){Sh(),hn="drag",_n=!1,kn=!1,Wn&&(Wn.intensity=0),hs(),De("hud").classList.add("hidden"),De("touch-controls").classList.remove("hidden"),ut.attach(),ut.setMode("drag"),De("drag-ui").classList.remove("hidden"),Rn.enter()}function Qf(){hn!=="freeroam"&&hn!=="drag"||kn||os||(_n=!0,Ui(null,null,""),hs(),De("pause-menu").classList.remove("hidden"))}function dM(){_n=!1,hs()}function gh(i){lh=i,kn=!0,np.refresh(),ls(),hs(),De("garage").classList.remove("hidden")}function fM(){kn=!1,hs(),De("hud").classList.toggle("hidden",hn!=="freeroam"),rn&&cs(),lh==="menu"?bh():lh==="pause"?(_n=!0,De("pause-menu").classList.remove("hidden")):_n=!1,ls()}function Va(i,e){let t=De("mp-status");t.className="mp-status "+i,t.textContent="\u25CF "+e}async function pM(){if(Ni||qf)return;qf=!0;let i=null,e="";try{i=await Promise.resolve().then(()=>(If(),Lf))}catch{return}try{e=(await Promise.resolve().then(()=>(Qc(),Pf))).MP_SERVER_URL||""}catch{}if(e){De("mp-status").classList.remove("hidden"),Va("connecting","connecting\u2026");try{Ni=i.createMultiplayer(_h,qr),Ni.connect(Ct),Va("on",Ni.status||"online")}catch{Va("off","error")}}}async function mM(){Wt=new Er({antialias:!1,powerPreference:"high-performance"}),Wt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Wt.setSize(Gn.view.w,Gn.view.h),Wt.toneMapping=Nr,Wt.toneMappingExposure=1,Wt.shadowMap.enabled=!0,Wt.shadowMap.type=ma,De("game-container").appendChild(Wt.domElement),Ct=new Vs,on=new Vt(62,Gn.view.w/Gn.view.h,.1,3e3),kt=Vd(Ct,Sf),rs=Ef(Ct,kt);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(Uf(),Df)),t=new Gs(Wt);Ct.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let i=nf();Ct.add(i.mesh),ip={uniforms:i.uniforms,sun:kt.sun,hemi:kt.hemi,scene:Ct,renderer:Wt},hp("day",!0);try{xn=(await Promise.resolve().then(()=>(Wf(),Vf))).createPostFX(Wt,Ct,on),xn.setBloomStrength(Ta.day.bloom)}catch(e){console.warn("postfx off",e),xn=null}Qn=new wa("auto"),Qn.onChange(jf),jf(Qn.level,Wc(Qn.level)),ss=new pi(Ct,70,{color:14211288,opacity:.42}),Zr=new pi(Ct,40,{color:7829367,opacity:.3,size:.9}),Wa=new Aa(Ct,500),Wn=new ua(13624575,0,60,.5,.45,1.2),Ha=new yt,Ct.add(Ha),Wn.target=Ha,Ct.add(Wn)}function jf(i,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);Wt.setPixelRatio(t),xn&&(xn.setPixelRatio(Math.min(t,1)),xn.setSize(Gn.view.w,Gn.view.h),xn.setBloomEnabled(e.bloom));let n=e.shadows;(Wt.shadowMap.enabled!==n||kt&&kt.sun.castShadow!==n)&&(Wt.shadowMap.enabled=n,kt&&(kt.sun.castShadow=n),Ct.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),kt&&kt.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),hh=e.particles,Wa&&Wa.setVisible(e.particles>.3)}function hp(i,e){let t=Xc;typeof i=="string"&&(nr=t.indexOf(i)),nr<0&&(nr=0);let n=t[nr],s=sf(ip,n),r=n==="day"?0:n==="sunset"?.45:1;kt&&kt.setGlow(r),xn&&xn.setBloomStrength(s.bloom),ch=n==="day"?0:n==="sunset"?60:160,Wn&&hn!=="drag"&&(Wn.intensity=ch);let o=De("tod-btn");o&&(o.textContent=n==="day"?"\u2600\uFE0F":n==="sunset"?"\u{1F307}":"\u{1F319}"),e||Vn(s.label+" mode")}function gM(){nr=(nr+1)%Xc.length,hp()}var ep=performance.now();function up(i){requestAnimationFrame(up);let e=(i-ep)/1e3;if(ep=i,e>0||(e=.016),e>.1&&(e=.1),ph++,hn==="freeroam"&&!_n&&!kn&&!os&&mi)aM(e),kt.update(e,ht.pos),rs.update(e),ss.update(e),Zr.update(e),Qn&&Qn.update(e),it.engine(0,0),it.skid(!1),sh.x=Le.pos.x,sh.z=Le.pos.z,uh.draw(ht.pos.x,ht.pos.z,ht.heading,sh),$f(),ut.consumeAction()&&Jf();else if(hn==="freeroam"&&!_n&&!kn&&!os){Ut=Le.update(ut.input,e,sM);let t=rf(Xa,Ut.drifting,Ut.speed,e);t>0&&(mh(t),Vn("DRIFT +$"+t.toLocaleString())),rh.x=Le.pos.x,rh.z=Le.pos.z,kt.update(e,rh),yh(e),cM(e),uM(),iM(e),rs.update(e),xh.update(e,ir,!1,!1),uh.draw(Le.pos.x,Le.pos.z,Le.heading,null),$f(),ut.consumeAction()&&Jf(),Qn&&Qn.update(e);let n=Math.min(1,Math.abs(Ut.speed)/(Yr.topSpeed*1.15));it.engine(n,Math.abs(ut.input.throttle||0)),it.skid(Ut.drifting),Ni&&(tr.x=Le.pos.x,tr.z=Le.pos.z,tr.heading=Le.heading,tr.speed=Ut.speed,tr.car=Hn.id,Ni.update(e,tr),ph%120===0&&Ni.status&&Va("on",Ni.status))}else hn==="drag"&&!_n&&!kn?Rn.active&&Rn.update(e):(it.engine(0,0),it.skid(!1));ss&&(hn!=="freeroam"||_n||kn||os)&&(ss.update(e),Zr.update(e)),xn?xn.render():Wt.render(Ct,on)}function _M(){De("m-freeroam").onclick=()=>{it.unlock(),Gn.goLandscape(),it.beep(600,.06),ah()},De("m-drag").onclick=()=>{it.unlock(),Gn.goLandscape(),it.beep(600,.06),Kf()},De("store-close").onclick=()=>{it.beep(500,.05),cp()},De("m-garage").onclick=()=>{it.unlock(),gh("menu")},De("p-resume").onclick=()=>{it.beep(600,.05),Gn.goLandscape(),dM()},De("p-freeroam").onclick=()=>{it.beep(600,.05),ah()},De("p-drag").onclick=()=>{it.beep(600,.05),Kf()},De("p-garage").onclick=()=>gh("pause"),De("p-quit").onclick=()=>bh(),De("menu-btn").onclick=Qf,De("garage-close").onclick=fM,De("drag-exit").onclick=()=>{Rn.active&&Rn.exit(),ah()},De("tod-btn")&&(De("tod-btn").onclick=()=>{it.beep(600,.05),gM()}),De("gfx-btn")&&(De("gfx-btn").onclick=()=>{it.beep(600,.05);let i=Qn.cycleMode();De("gfx-btn").textContent=i==="auto"?"\u2728":i==="high"?"\u2728+":"\u2728\u2212",Vn("Graphics: "+i.toUpperCase()+" ("+tf[Qn.level]+")")}),window.addEventListener("pointerdown",()=>it.unlock()),window.addEventListener("keydown",()=>it.unlock()),document.addEventListener("contextmenu",i=>i.preventDefault()),document.addEventListener("gesturestart",i=>i.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(hn==="freeroam"||hn==="drag")&&!_n&&Qf()})}function xM(i,e){Wt&&(on.aspect=i/e,on.updateProjectionMatrix(),Wt.setSize(i,e),xn&&xn.setSize(i,e))}async function vM(){try{tt=lf(jd()),it=$d(),Gn=af(xM),await mM(),ut=Wd({isRotated:()=>Gn.rotated}),ht=new La,rn=xf(tt.outfit),rn.visible=!1,Ct.add(rn),xh=Tf(Ct),Object.assign(ir,{save:tt,colliders:kt.colliders,targets:rs.targets,audio:it,toast:Vn,onTargetHit:()=>{mh(Yc),Vn("TARGET +$"+Yc,900)}}),vh=Af({save:tt,persist:()=>zn(tt),toast:i=>Vn(i,1600),beep:(i,e)=>it.beep(i,e),onChange:()=>{ls(),cs()}}),uh=Cf(De("minimap"),rs.stores),cs(),Mh(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(i,e,t)=>{mi?ht.reset(i,e,t||0):(Le.pos.x=i,Le.pos.z=e,Le.heading=t||0)},save:()=>tt,stores:()=>rs.stores}),sp(),Le=new Ma(Yr),rp(),np=ef({save:tt,getDef:i=>qr.find(e=>e.id===i),onSelectCar:()=>za(),onPaint:()=>za(),onWheels:()=>za(),refreshScene:()=>za()}),Rn=Zd({scene:Ct,camera:on,buildCar:_h,CAR_DEFS:qr,effectiveStats:tp,getPlayer:()=>(Ba.def=Hn,Ba.stats=Yr,Ba.group=cn,Ba),controls:ut,audio:it,addCash:mh,toast:Vn,city:kt}),_M(),ls(),De("loading").classList.add("hidden"),bh(),requestAnimationFrame(up)}catch(i){console.error(i),De("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(i&&i.message||i)+"</p>"}}vM();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
