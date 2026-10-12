(()=>{var om=Object.defineProperty;var wn=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var Ll=(n,e)=>{for(var t in e)om(n,t,{get:e[t],enumerable:!0})};function _i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function t0(n,e){return(n%e+e)%e}function Hl(n,e,t){return(1-t)*n+t*e}function qu(n){return(n&n-1)===0&&n!==0}function Sc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function nf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n0(){let n=ha("canvas");return n.style.display="block",n}function Br(n){n in Yu||(Yu[n]=!0,console.warn(n))}function Qs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ua.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Xl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ns.fromArray(n,r);let a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function ec(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function g0(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Bi,a),l===null)return null;ko.copy(a),ko.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:n}}function Go(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,zs),n.getVertexPosition(l,Bs),n.getVertexPosition(c,Hs);let h=g0(n,e,t,i,zs,Bs,Hs,Ho);if(h){s&&(Fo.fromBufferAttribute(s,a),zo.fromBufferAttribute(s,l),Bo.fromBufferAttribute(s,c),h.uv=ls.getInterpolation(Ho,zs,Bs,Hs,Fo,zo,Bo,new se)),r&&(Fo.fromBufferAttribute(r,a),zo.fromBufferAttribute(r,l),Bo.fromBufferAttribute(r,c),h.uv1=ls.getInterpolation(Ho,zs,Bs,Hs,Fo,zo,Bo,new se),h.uv2=h.uv1),o&&(od.fromBufferAttribute(o,a),ad.fromBufferAttribute(o,l),ld.fromBufferAttribute(o,c),h.normal=ls.getInterpolation(Ho,zs,Bs,Hs,od,ad,ld,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};ls.getNormal(zs,Bs,Hs,d.normal),h.face=d}return h}function ir(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=ir(n[t]);for(let s in i)e[s]=i[s]}return e}function x0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rf(n){return n.getRenderTarget()===null?n.outputColorSpace:at.workingColorSpace}function of(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function S0(n,e){let t=e.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,p=c.usage,m=d.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,d,p),c.onUploadCallback();let g;if(d instanceof Float32Array)g=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=n.SHORT;else if(d instanceof Uint32Array)g=n.UNSIGNED_INT;else if(d instanceof Int32Array)g=n.INT;else if(d instanceof Int8Array)g=n.BYTE;else if(d instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let p=h.array,m=h._updateRange,x=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&x.length===0&&n.bufferSubData(d,0,p),x.length!==0){for(let g=0,f=x.length;g<f;g++){let u=x[g];t?n.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):n.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):n.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}function n_(n,e,t,i,s,r,o){let a=new Le(0),l=r===!0?0:1,c,h,d=null,p=0,m=null;function x(f,u){let y=!1,_=u.isScene===!0?u.background:null;_&&_.isTexture&&(_=(u.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),y=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ka)?(h===void 0&&(h=new re(new Oe(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:ir(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=at.getTransfer(_.colorSpace)!==mt,(d!==_||p!==_.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,p=_.version,m=n.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new re(new rt(2,2),new Gt({name:"BackgroundMaterial",uniforms:ir(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=at.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||p!==_.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,p=_.version,m=n.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function g(f,u){f.getRGB(Wo,rf(n)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,g(a,l)},render:x}}function i_(n,e,t,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=f(null),c=l,h=!1;function d(C,U,z,B,G){let W=!1;if(o){let $=g(B,z,U);c!==$&&(c=$,m(c.object)),W=u(C,B,z,G),W&&y(C,B,z,G)}else{let $=U.wireframe===!0;(c.geometry!==B.id||c.program!==z.id||c.wireframe!==$)&&(c.geometry=B.id,c.program=z.id,c.wireframe=$,W=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,F(C,U,z,B),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function p(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(C){return i.isWebGL2?n.bindVertexArray(C):r.bindVertexArrayOES(C)}function x(C){return i.isWebGL2?n.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function g(C,U,z){let B=z.wireframe===!0,G=a[C.id];G===void 0&&(G={},a[C.id]=G);let W=G[U.id];W===void 0&&(W={},G[U.id]=W);let $=W[B];return $===void 0&&($=f(p()),W[B]=$),$}function f(C){let U=[],z=[],B=[];for(let G=0;G<s;G++)U[G]=0,z[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:B,object:C,attributes:{},index:null}}function u(C,U,z,B){let G=c.attributes,W=U.attributes,$=0,J=z.getAttributes();for(let he in J)if(J[he].location>=0){let te=G[he],me=W[he];if(me===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(me=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(me=C.instanceColor)),te===void 0||te.attribute!==me||me&&te.data!==me.data)return!0;$++}return c.attributesNum!==$||c.index!==B}function y(C,U,z,B){let G={},W=U.attributes,$=0,J=z.getAttributes();for(let he in J)if(J[he].location>=0){let te=W[he];te===void 0&&(he==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),he==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));let me={};me.attribute=te,te&&te.data&&(me.data=te.data),G[he]=me,$++}c.attributes=G,c.attributesNum=$,c.index=B}function _(){let C=c.newAttributes;for(let U=0,z=C.length;U<z;U++)C[U]=0}function M(C){A(C,0)}function A(C,U){let z=c.newAttributes,B=c.enabledAttributes,G=c.attributeDivisors;z[C]=1,B[C]===0&&(n.enableVertexAttribArray(C),B[C]=1),G[C]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,U),G[C]=U)}function R(){let C=c.newAttributes,U=c.enabledAttributes;for(let z=0,B=U.length;z<B;z++)U[z]!==C[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function w(C,U,z,B,G,W,$){$===!0?n.vertexAttribIPointer(C,U,z,G,W):n.vertexAttribPointer(C,U,z,B,G,W)}function F(C,U,z,B){if(i.isWebGL2===!1&&(C.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let G=B.attributes,W=z.getAttributes(),$=U.defaultAttributeValues;for(let J in W){let he=W[J];if(he.location>=0){let V=G[J];if(V===void 0&&(J==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),J==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),V!==void 0){let te=V.normalized,me=V.itemSize,Me=t.get(V);if(Me===void 0)continue;let Ee=Me.buffer,ze=Me.type,He=Me.bytesPerElement,Ae=i.isWebGL2===!0&&(ze===n.INT||ze===n.UNSIGNED_INT||V.gpuType===qd);if(V.isInterleavedBufferAttribute){let ke=V.data,D=ke.stride,de=V.offset;if(ke.isInstancedInterleavedBuffer){for(let Q=0;Q<he.locationSize;Q++)A(he.location+Q,ke.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let Q=0;Q<he.locationSize;Q++)M(he.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Q=0;Q<he.locationSize;Q++)w(he.location+Q,me/he.locationSize,ze,te,D*He,(de+me/he.locationSize*Q)*He,Ae)}else{if(V.isInstancedBufferAttribute){for(let ke=0;ke<he.locationSize;ke++)A(he.location+ke,V.meshPerAttribute);C.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ke=0;ke<he.locationSize;ke++)M(he.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let ke=0;ke<he.locationSize;ke++)w(he.location+ke,me/he.locationSize,ze,te,me*He,me/he.locationSize*ke*He,Ae)}}else if($!==void 0){let te=$[J];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(he.location,te);break;case 3:n.vertexAttrib3fv(he.location,te);break;case 4:n.vertexAttrib4fv(he.location,te);break;default:n.vertexAttrib1fv(he.location,te)}}}}R()}function v(){O();for(let C in a){let U=a[C];for(let z in U){let B=U[z];for(let G in B)x(B[G].object),delete B[G];delete U[z]}delete a[C]}}function S(C){if(a[C.id]===void 0)return;let U=a[C.id];for(let z in U){let B=U[z];for(let G in B)x(B[G].object),delete B[G];delete U[z]}delete a[C.id]}function L(C){for(let U in a){let z=a[U];if(z[C.id]===void 0)continue;let B=z[C.id];for(let G in B)x(B[G].object),delete B[G];delete z[C.id]}}function O(){N(),h=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:N,dispose:v,releaseStatesOfGeometry:S,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:M,disableUnusedAttributes:R}}function s_(n,e,t,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,p){if(p===0)return;let m,x;if(s)m=n,x="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[x](r,h,d,p),t.update(d,r,p)}function c(h,d,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<p;x++)this.render(h[x],d[x]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,p);let x=0;for(let g=0;g<p;g++)x+=d[g];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function r_(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),f=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=p>0,M=o||e.has("OES_texture_float"),A=_&&M,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:_,floatFragmentTextures:M,floatVertexTextures:A,maxSamples:R}}function o_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new mi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||i!==0||s;return s=p,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,m){let x=d.clippingPlanes,g=d.clipIntersection,f=d.clipShadows,u=n.get(d);if(!s||x===null||x.length===0||r&&!f)r?h(null):c();else{let y=r?0:i,_=y*4,M=u.clippingState||null;l.value=M,M=h(x,p,_,m);for(let A=0;A!==_;++A)M[A]=t[A];u.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,p,m,x){let g=d!==null?d.length:0,f=null;if(g!==0){if(f=l.value,x!==!0||f===null){let u=m+g*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<u)&&(f=new Float32Array(u));for(let _=0,M=m;_!==g;++_,M+=4)o.copy(d[_]).applyMatrix4(y,a),o.normal.toArray(f,M),f[M+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,f}}function a_(n){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=er:a===_c&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===xc||a===_c)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new wc(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function l_(n){let e=[],t=[],i=[],s=n,r=n-$s+1+cd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-$s?l=cd[o-n+$s-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,x=6,g=3,f=2,u=1,y=new Float32Array(g*x*m),_=new Float32Array(f*x*m),M=new Float32Array(u*x*m);for(let R=0;R<m;R++){let w=R%3*2/3-1,F=R>2?0:-1,v=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];y.set(v,g*x*R),_.set(p,f*x*R);let S=[R,R,R,R,R,R];M.set(S,u*x*R)}let A=new kt;A.setAttribute("position",new an(y,g)),A.setAttribute("uv",new an(_,f)),A.setAttribute("faceIndex",new an(M,u)),e.push(A),s>$s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dd(n,e,t){let i=new mn(n,e,t);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function c_(n,e,t){let i=new Float32Array(as),s=new I(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mh(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function fd(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function pd(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function h_(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===xc||l===_c,h=l===er||l===tr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new rr(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new rr(n));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function u_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function d_(n,e,t,i){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let x in p.attributes)e.remove(p.attributes[x]);for(let x in p.morphAttributes){let g=p.morphAttributes[x];for(let f=0,u=g.length;f<u;f++)e.remove(g[f])}p.removeEventListener("dispose",o),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let x in p)e.update(p[x],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let x in m){let g=m[x];for(let f=0,u=g.length;f<u;f++)e.update(g[f],n.ARRAY_BUFFER)}}function c(d){let p=[],m=d.index,x=d.attributes.position,g=0;if(m!==null){let y=m.array;g=m.version;for(let _=0,M=y.length;_<M;_+=3){let A=y[_+0],R=y[_+1],w=y[_+2];p.push(A,R,R,w,w,A)}}else if(x!==void 0){let y=x.array;g=x.version;for(let _=0,M=y.length/3-1;_<M;_+=3){let A=_+0,R=_+1,w=_+2;p.push(A,R,R,w,w,A)}}else return;let f=new(nf(p)?_a:xa)(p,1);f.version=g;let u=r.get(d);u&&e.remove(u),r.set(d,f)}function h(d){let p=r.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function f_(n,e,t,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,x){n.drawElements(r,x,a,m*l),t.update(x,r,1)}function d(m,x,g){if(g===0)return;let f,u;if(s)f=n,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](r,x,a,m*l,g),t.update(x,r,g)}function p(m,x,g){if(g===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<g;u++)this.render(m[u]/l,x[u]);else{f.multiDrawElementsWEBGL(r,x,0,a,m,0,g);let u=0;for(let y=0;y<g;y++)u+=x[y];t.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function p_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function m_(n,e){return n[0]-e[0]}function g_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function x_(n,e,t){let i={},s=new Float32Array(8),r=new WeakMap,o=new Mt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=m!==void 0?m.length:0,g=r.get(h);if(g===void 0||g.count!==x){let C=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",C)};g!==void 0&&g.texture.dispose();let y=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],F=0;y===!0&&(F=1),_===!0&&(F=2),M===!0&&(F=3);let v=h.attributes.position.count*F,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let L=new Float32Array(v*S*4*x),O=new fa(L,v,S,x);O.type=Ni,O.needsUpdate=!0;let N=F*4;for(let U=0;U<x;U++){let z=A[U],B=R[U],G=w[U],W=v*S*4*U;for(let $=0;$<z.count;$++){let J=$*N;y===!0&&(o.fromBufferAttribute(z,$),L[W+J+0]=o.x,L[W+J+1]=o.y,L[W+J+2]=o.z,L[W+J+3]=0),_===!0&&(o.fromBufferAttribute(B,$),L[W+J+4]=o.x,L[W+J+5]=o.y,L[W+J+6]=o.z,L[W+J+7]=0),M===!0&&(o.fromBufferAttribute(G,$),L[W+J+8]=o.x,L[W+J+9]=o.y,L[W+J+10]=o.z,L[W+J+11]=G.itemSize===4?o.w:1)}}g={count:x,texture:O,size:new se(v,S)},r.set(h,g),h.addEventListener("dispose",C)}let f=0;for(let y=0;y<p.length;y++)f+=p[y];let u=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{let m=p===void 0?0:p.length,x=i[h.id];if(x===void 0||x.length!==m){x=[];for(let _=0;_<m;_++)x[_]=[_,0];i[h.id]=x}for(let _=0;_<m;_++){let M=x[_];M[0]=_,M[1]=p[_]}x.sort(g_);for(let _=0;_<8;_++)_<m&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(m_);let g=h.morphAttributes.position,f=h.morphAttributes.normal,u=0;for(let _=0;_<8;_++){let M=a[_],A=M[0],R=M[1];A!==Number.MAX_SAFE_INTEGER&&R?(g&&h.getAttribute("morphTarget"+_)!==g[A]&&h.setAttribute("morphTarget"+_,g[A]),f&&h.getAttribute("morphNormal"+_)!==f[A]&&h.setAttribute("morphNormal"+_,f[A]),s[_]=R,u+=R):(g&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),f&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function __(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function ur(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Va(n,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function v_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function M_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function S_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function E_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;vd.set(i),n.uniformMatrix2fv(this.addr,!1,vd),qt(t,i)}}function b_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;_d.set(i),n.uniformMatrix3fv(this.addr,!1,_d),qt(t,i)}}function T_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;xd.set(i),n.uniformMatrix4fv(this.addr,!1,xd),qt(t,i)}}function w_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function A_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function R_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function P_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function L_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function D_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function U_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?lf:af;t.setTexture2D(e||r,s)}function N_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||hf,s)}function O_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||uf,s)}function F_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cf,s)}function z_(n){switch(n){case 5126:return v_;case 35664:return y_;case 35665:return M_;case 35666:return S_;case 35674:return E_;case 35675:return b_;case 35676:return T_;case 5124:case 35670:return w_;case 35667:case 35671:return A_;case 35668:case 35672:return R_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return L_;case 36295:return I_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return F_}}function B_(n,e){n.uniform1fv(this.addr,e)}function H_(n,e){let t=ur(e,this.size,2);n.uniform2fv(this.addr,t)}function k_(n,e){let t=ur(e,this.size,3);n.uniform3fv(this.addr,t)}function G_(n,e){let t=ur(e,this.size,4);n.uniform4fv(this.addr,t)}function V_(n,e){let t=ur(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function W_(n,e){let t=ur(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function X_(n,e){let t=ur(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function q_(n,e){n.uniform1iv(this.addr,e)}function Y_(n,e){n.uniform2iv(this.addr,e)}function Z_(n,e){n.uniform3iv(this.addr,e)}function $_(n,e){n.uniform4iv(this.addr,e)}function J_(n,e){n.uniform1uiv(this.addr,e)}function K_(n,e){n.uniform2uiv(this.addr,e)}function Q_(n,e){n.uniform3uiv(this.addr,e)}function j_(n,e){n.uniform4uiv(this.addr,e)}function ev(n,e,t){let i=this.cache,s=e.length,r=Va(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||af,r[o])}function tv(n,e,t){let i=this.cache,s=e.length,r=Va(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hf,r[o])}function nv(n,e,t){let i=this.cache,s=e.length,r=Va(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||uf,r[o])}function iv(n,e,t){let i=this.cache,s=e.length,r=Va(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cf,r[o])}function sv(n){switch(n){case 5126:return B_;case 35664:return H_;case 35665:return k_;case 35666:return G_;case 35674:return V_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return $_;case 5125:return J_;case 36294:return K_;case 36295:return Q_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return nv;case 36289:case 36303:case 36311:case 36292:return iv}}function yd(n,e){n.seq.push(e),n.map[e.id]=e}function rv(n,e,t){let i=n.name,s=i.length;for(lc.lastIndex=0;;){let r=lc.exec(i),o=lc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yd(t,c===void 0?new Ac(a,n,e):new Rc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Cc(a),yd(t,d)),t=d}}}function Md(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function lv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function cv(n){let e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n),i;switch(e===t?i="":e===aa&&t===oa?i="LinearDisplayP3ToLinearSRGB":e===oa&&t===aa&&(i="LinearSRGBToLinearDisplayP3"),n){case yi:case Ga:return[i,"LinearTransferOETF"];case xt:case ph:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Sd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lv(n.getShaderSource(e),o)}else return s}function hv(n,e){let t=cv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uv(n,e){let t;switch(e){case ch:t="Linear";break;case hh:t="Reinhard";break;case uh:t="OptimizedCineon";break;case to:t="ACESFilmic";break;case dh:t="AgX";break;case Nm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Js).join(`
`)}function fv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Js).join(`
`)}function pv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Js(n){return n!==""}function Ed(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Pc(n){return n.replace(gv,_v)}function _v(n,e){let t=Qe[e];if(t===void 0){let i=xv.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pc(t)}function Td(n){return n.replace(vv,yv)}function yv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Mv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ha?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Sv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ev(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===tr&&(e="ENVMAP_MODE_REFRACTION"),e}function bv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wd:e="ENVMAP_BLENDING_MULTIPLY";break;case Dm:e="ENVMAP_BLENDING_MIX";break;case Um:e="ENVMAP_BLENDING_ADD";break}return e}function Tv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Mv(t),c=Sv(t),h=Ev(t),d=bv(t),p=Tv(t),m=t.isWebGL2?"":dv(t),x=fv(t),g=pv(r),f=s.createProgram(),u,y,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),u.length>0&&(u+=`
`),y=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Js).join(`
`),y.length>0&&(y+=`
`)):(u=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),y=[m,wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fi?"#define TONE_MAPPING":"",t.toneMapping!==Fi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Fi?uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,hv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Js).join(`
`)),o=Pc(o),o=Ed(o,t),o=bd(o,t),a=Pc(a),a=Ed(a,t),a=bd(a,t),o=Td(o),a=Td(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let M=_+u+o,A=_+y+a,R=Md(s,s.VERTEX_SHADER,M),w=Md(s,s.FRAGMENT_SHADER,A);s.attachShader(f,R),s.attachShader(f,w),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function F(O){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(f).trim(),C=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(w).trim(),z=!0,B=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,f,R,w);else{let G=Sd(s,R,"vertex"),W=Sd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+N+`
`+G+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(C===""||U==="")&&(B=!1);B&&(O.diagnostics={runnable:z,programLog:N,vertexShader:{log:C,prefix:u},fragmentShader:{log:U,prefix:y}})}s.deleteShader(R),s.deleteShader(w),v=new js(s,f),S=mv(s,f)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let S;this.getAttributes=function(){return S===void 0&&F(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(f,ov)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=av++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=R,this.fragmentShader=w,this}function Rv(n,e,t,i,s,r,o){let a=new ga,l=new Lc,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===0?"uv":`uv${v}`}function f(v,S,L,O,N){let C=O.fog,U=N.geometry,z=v.isMeshStandardMaterial?O.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),G=B&&B.mapping===ka?B.image.height:null,W=x[v.type];v.precision!==null&&(m=s.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));let $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=$!==void 0?$.length:0,he=0;U.morphAttributes.position!==void 0&&(he=1),U.morphAttributes.normal!==void 0&&(he=2),U.morphAttributes.color!==void 0&&(he=3);let V,te,me,Me;if(W){let At=ei[W];V=At.vertexShader,te=At.fragmentShader}else V=v.vertexShader,te=v.fragmentShader,l.update(v),me=l.getVertexShaderID(v),Me=l.getFragmentShaderID(v);let Ee=n.getRenderTarget(),ze=N.isInstancedMesh===!0,He=N.isBatchedMesh===!0,Ae=!!v.map,ke=!!v.matcap,D=!!B,de=!!v.aoMap,Q=!!v.lightMap,ue=!!v.bumpMap,K=!!v.normalMap,Pe=!!v.displacementMap,_e=!!v.emissiveMap,b=!!v.metalnessMap,E=!!v.roughnessMap,H=v.anisotropy>0,ae=v.clearcoat>0,ie=v.iridescence>0,ne=v.sheen>0,Re=v.transmission>0,fe=H&&!!v.anisotropyMap,be=ae&&!!v.clearcoatMap,Ne=ae&&!!v.clearcoatNormalMap,We=ae&&!!v.clearcoatRoughnessMap,le=ie&&!!v.iridescenceMap,Je=ie&&!!v.iridescenceThicknessMap,Ke=ne&&!!v.sheenColorMap,Fe=ne&&!!v.sheenRoughnessMap,Ue=!!v.specularMap,we=!!v.specularColorMap,Ye=!!v.specularIntensityMap,it=Re&&!!v.transmissionMap,oe=Re&&!!v.thicknessMap,ce=!!v.gradientMap,Y=!!v.alphaMap,P=v.alphaTest>0,j=!!v.alphaHash,ee=!!v.extensions,xe=!!U.attributes.uv1,ve=!!U.attributes.uv2,Xe=!!U.attributes.uv3,nt=Fi;return v.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(nt=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:V,fragmentShader:te,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:Me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,batching:He,instancing:ze,instancingColor:ze&&N.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Ee===null?n.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:yi,map:Ae,matcap:ke,envMap:D,envMapMode:D&&B.mapping,envMapCubeUVHeight:G,aoMap:de,lightMap:Q,bumpMap:ue,normalMap:K,displacementMap:p&&Pe,emissiveMap:_e,normalMapObjectSpace:K&&v.normalMapType===Ym,normalMapTangentSpace:K&&v.normalMapType===ef,metalnessMap:b,roughnessMap:E,anisotropy:H,anisotropyMap:fe,clearcoat:ae,clearcoatMap:be,clearcoatNormalMap:Ne,clearcoatRoughnessMap:We,iridescence:ie,iridescenceMap:le,iridescenceThicknessMap:Je,sheen:ne,sheenColorMap:Ke,sheenRoughnessMap:Fe,specularMap:Ue,specularColorMap:we,specularIntensityMap:Ye,transmission:Re,transmissionMap:it,thicknessMap:oe,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Oi,alphaMap:Y,alphaTest:P,alphaHash:j,combine:v.combine,mapUv:Ae&&g(v.map.channel),aoMapUv:de&&g(v.aoMap.channel),lightMapUv:Q&&g(v.lightMap.channel),bumpMapUv:ue&&g(v.bumpMap.channel),normalMapUv:K&&g(v.normalMap.channel),displacementMapUv:Pe&&g(v.displacementMap.channel),emissiveMapUv:_e&&g(v.emissiveMap.channel),metalnessMapUv:b&&g(v.metalnessMap.channel),roughnessMapUv:E&&g(v.roughnessMap.channel),anisotropyMapUv:fe&&g(v.anisotropyMap.channel),clearcoatMapUv:be&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(v.sheenRoughnessMap.channel),specularMapUv:Ue&&g(v.specularMap.channel),specularColorMapUv:we&&g(v.specularColorMap.channel),specularIntensityMapUv:Ye&&g(v.specularIntensityMap.channel),transmissionMapUv:it&&g(v.transmissionMap.channel),thicknessMapUv:oe&&g(v.thicknessMap.channel),alphaMapUv:Y&&g(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(K||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:xe,vertexUv2s:ve,vertexUv3s:Xe,pointsUvs:N.isPoints===!0&&!!U.attributes.uv&&(Ae||Y),fog:!!C,useFog:v.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:he,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ae&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Et,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ee&&v.extensions.derivatives===!0,extensionFragDepth:ee&&v.extensions.fragDepth===!0,extensionDrawBuffers:ee&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ee&&v.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function u(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(y(S,v),_(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function y(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function _(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),v.push(a.mask)}function M(v){let S=x[v.type],L;if(S){let O=ei[S];L=Wi.clone(O.uniforms)}else L=v.uniforms;return L}function A(v,S){let L;for(let O=0,N=c.length;O<N;O++){let C=c[O];if(C.cacheKey===S){L=C,++L.usedTimes;break}}return L===void 0&&(L=new wv(n,S,v,r),c.push(L)),L}function R(v){if(--v.usedTimes===0){let S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function F(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:M,acquireProgram:A,releaseProgram:R,releaseShaderCache:w,programs:c,dispose:F}}function Cv(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function Pv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rd(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,p,m,x,g,f){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:m,groupOrder:x,renderOrder:d.renderOrder,z:g,group:f},n[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=m,u.groupOrder=x,u.renderOrder=d.renderOrder,u.z=g,u.group=f),e++,u}function a(d,p,m,x,g,f){let u=o(d,p,m,x,g,f);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(d,p,m,x,g,f){let u=o(d,p,m,x,g,f);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,p){t.length>1&&t.sort(d||Pv),i.length>1&&i.sort(p||Ad),s.length>1&&s.sort(p||Ad)}function h(){for(let d=e,p=n.length;d<p;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Lv(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Rd,n.set(i,[o])):s>=r.length?(o=new Rd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Iv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Le};break;case"SpotLight":t={position:new I,direction:new I,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Dv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Nv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ov(n,e){let t=new Iv,i=Dv(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new ct,a=new ct;function l(h,d){let p=0,m=0,x=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let g=0,f=0,u=0,y=0,_=0,M=0,A=0,R=0,w=0,F=0,v=0;h.sort(Nv);let S=d===!0?Math.PI:1;for(let O=0,N=h.length;O<N;O++){let C=h[O],U=C.color,z=C.intensity,B=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)p+=U.r*z*S,m+=U.g*z*S,x+=U.b*z*S;else if(C.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(C.sh.coefficients[W],z);v++}else if(C.isDirectionalLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){let $=C.shadow,J=i.get(C);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,s.directionalShadow[g]=J,s.directionalShadowMap[g]=G,s.directionalShadowMatrix[g]=C.shadow.matrix,M++}s.directional[g]=W,g++}else if(C.isSpotLight){let W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(U).multiplyScalar(z*S),W.distance=B,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,s.spot[u]=W;let $=C.shadow;if(C.map&&(s.spotLightMap[w]=C.map,w++,$.updateMatrices(C),C.castShadow&&F++),s.spotLightMatrix[u]=$.matrix,C.castShadow){let J=i.get(C);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,s.spotShadow[u]=J,s.spotShadowMap[u]=G,R++}u++}else if(C.isRectAreaLight){let W=t.get(C);W.color.copy(U).multiplyScalar(z),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),s.rectArea[y]=W,y++}else if(C.isPointLight){let W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*S),W.distance=C.distance,W.decay=C.decay,C.castShadow){let $=C.shadow,J=i.get(C);J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,s.pointShadow[f]=J,s.pointShadowMap[f]=G,s.pointShadowMatrix[f]=C.shadow.matrix,A++}s.point[f]=W,f++}else if(C.isHemisphereLight){let W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(z*S),W.groundColor.copy(C.groundColor).multiplyScalar(z*S),s.hemi[_]=W,_++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=x;let L=s.hash;(L.directionalLength!==g||L.pointLength!==f||L.spotLength!==u||L.rectAreaLength!==y||L.hemiLength!==_||L.numDirectionalShadows!==M||L.numPointShadows!==A||L.numSpotShadows!==R||L.numSpotMaps!==w||L.numLightProbes!==v)&&(s.directional.length=g,s.spot.length=u,s.rectArea.length=y,s.point.length=f,s.hemi.length=_,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=R+w-F,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=v,L.directionalLength=g,L.pointLength=f,L.spotLength=u,L.rectAreaLength=y,L.hemiLength=_,L.numDirectionalShadows=M,L.numPointShadows=A,L.numSpotShadows=R,L.numSpotMaps=w,L.numLightProbes=v,s.version=Uv++)}function c(h,d){let p=0,m=0,x=0,g=0,f=0,u=d.matrixWorldInverse;for(let y=0,_=h.length;y<_;y++){let M=h[y];if(M.isDirectionalLight){let A=s.directional[p];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(u),p++}else if(M.isSpotLight){let A=s.spot[x];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(u),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(u),x++}else if(M.isRectAreaLight){let A=s.rectArea[g];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(u),a.identity(),o.copy(M.matrixWorld),o.premultiply(u),a.extractRotation(o),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let A=s.point[m];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){let A=s.hemi[f];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:s}}function Cd(n,e){let t=new Ov(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Fv(n,e){let t=new WeakMap;function i(r,o=0){let a=t.get(r),l;return a===void 0?(l=new Cd(n,e),t.set(r,[l])):o>=a.length?(l=new Cd(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}function Hv(n,e,t){let i=new Xr,s=new se,r=new se,o=new Mt,a=new Dc({depthPacking:qm}),l=new Uc,c={},h=t.maxTextureSize,d={[Bi]:Qt,[Qt]:Bi,[Et]:Et},p=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:zv,fragmentShader:Bv}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let x=new kt;x.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new re(x,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let u=this.type;this.render=function(R,w,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||R.length===0)return;let v=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(ti),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=u!==pi&&this.type===pi,C=u===pi&&this.type!==pi;for(let U=0,z=R.length;U<z;U++){let B=R[U],G=B.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||N===!0||C===!0){let J=this.type!==pi?{minFilter:pn,magFilter:pn}:{};G.map!==null&&G.map.dispose(),G.map=new mn(s.x,s.y,J),G.map.texture.name=B.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let $=G.getViewportCount();for(let J=0;J<$;J++){let he=G.getViewport(J);o.set(r.x*he.x,r.y*he.y,r.x*he.z,r.y*he.w),O.viewport(o),G.updateMatrices(B,J),i=G.getFrustum(),M(w,F,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===pi&&y(G,F),G.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(v,S,L)};function y(R,w){let F=e.update(g);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new mn(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,F,p,g,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,F,m,g,null)}function _(R,w,F,v){let S=null,L=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=F.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let O=S.uuid,N=w.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let U=C[N];U===void 0&&(U=S.clone(),C[N]=U,w.addEventListener("dispose",A)),S=U}if(S.visible=w.visible,S.wireframe=w.wireframe,v===pi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let O=n.properties.get(S);O.light=F}return S}function M(R,w,F,v,S){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===pi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);let N=e.update(R),C=R.material;if(Array.isArray(C)){let U=N.groups;for(let z=0,B=U.length;z<B;z++){let G=U[z],W=C[G.materialIndex];if(W&&W.visible){let $=_(R,W,v,S);R.onBeforeShadow(n,R,w,F,N,$,G),n.renderBufferDirect(F,null,N,$,R,G),R.onAfterShadow(n,R,w,F,N,$,G)}}}else if(C.visible){let U=_(R,C,v,S);R.onBeforeShadow(n,R,w,F,N,U,null),n.renderBufferDirect(F,null,N,U,R,null),R.onAfterShadow(n,R,w,F,N,U,null)}}let O=R.children;for(let N=0,C=O.length;N<C;N++)M(O[N],w,F,v,S)}function A(R){R.target.removeEventListener("dispose",A);for(let F in c){let v=c[F],S=R.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function kv(n,e,t){let i=t.isWebGL2;function s(){let P=!1,j=new Mt,ee=null,xe=new Mt(0,0,0,0);return{setMask:function(ve){ee!==ve&&!P&&(n.colorMask(ve,ve,ve,ve),ee=ve)},setLocked:function(ve){P=ve},setClear:function(ve,Xe,nt,dt,At){At===!0&&(ve*=dt,Xe*=dt,nt*=dt),j.set(ve,Xe,nt,dt),xe.equals(j)===!1&&(n.clearColor(ve,Xe,nt,dt),xe.copy(j))},reset:function(){P=!1,ee=null,xe.set(-1,0,0,0)}}}function r(){let P=!1,j=null,ee=null,xe=null;return{setTest:function(ve){ve?He(n.DEPTH_TEST):Ae(n.DEPTH_TEST)},setMask:function(ve){j!==ve&&!P&&(n.depthMask(ve),j=ve)},setFunc:function(ve){if(ee!==ve){switch(ve){case wm:n.depthFunc(n.NEVER);break;case Am:n.depthFunc(n.ALWAYS);break;case Rm:n.depthFunc(n.LESS);break;case na:n.depthFunc(n.LEQUAL);break;case Cm:n.depthFunc(n.EQUAL);break;case Pm:n.depthFunc(n.GEQUAL);break;case Lm:n.depthFunc(n.GREATER);break;case Im:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ve}},setLocked:function(ve){P=ve},setClear:function(ve){xe!==ve&&(n.clearDepth(ve),xe=ve)},reset:function(){P=!1,j=null,ee=null,xe=null}}}function o(){let P=!1,j=null,ee=null,xe=null,ve=null,Xe=null,nt=null,dt=null,At=null;return{setTest:function(qe){P||(qe?He(n.STENCIL_TEST):Ae(n.STENCIL_TEST))},setMask:function(qe){j!==qe&&!P&&(n.stencilMask(qe),j=qe)},setFunc:function(qe,ot,un){(ee!==qe||xe!==ot||ve!==un)&&(n.stencilFunc(qe,ot,un),ee=qe,xe=ot,ve=un)},setOp:function(qe,ot,un){(Xe!==qe||nt!==ot||dt!==un)&&(n.stencilOp(qe,ot,un),Xe=qe,nt=ot,dt=un)},setLocked:function(qe){P=qe},setClear:function(qe){At!==qe&&(n.clearStencil(qe),At=qe)},reset:function(){P=!1,j=null,ee=null,xe=null,ve=null,Xe=null,nt=null,dt=null,At=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,p={},m={},x=new WeakMap,g=[],f=null,u=!1,y=null,_=null,M=null,A=null,R=null,w=null,F=null,v=new Le(0,0,0),S=0,L=!1,O=null,N=null,C=null,U=null,z=null,B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec($)[1]),G=W>=1):$.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),G=W>=2);let J=null,he={},V=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),me=new Mt().fromArray(V),Me=new Mt().fromArray(te);function Ee(P,j,ee,xe){let ve=new Uint8Array(4),Xe=n.createTexture();n.bindTexture(P,Xe),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<ee;nt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(j,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(j+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return Xe}let ze={};ze[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ze[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),He(n.DEPTH_TEST),l.setFunc(na),_e(!1),b(hu),He(n.CULL_FACE),K(ti);function He(P){p[P]!==!0&&(n.enable(P),p[P]=!0)}function Ae(P){p[P]!==!1&&(n.disable(P),p[P]=!1)}function ke(P,j){return m[P]!==j?(n.bindFramebuffer(P,j),m[P]=j,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=j),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=j)),!0):!1}function D(P,j){let ee=g,xe=!1;if(P)if(ee=x.get(j),ee===void 0&&(ee=[],x.set(j,ee)),P.isWebGLMultipleRenderTargets){let ve=P.texture;if(ee.length!==ve.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,nt=ve.length;Xe<nt;Xe++)ee[Xe]=n.COLOR_ATTACHMENT0+Xe;ee.length=ve.length,xe=!0}}else ee[0]!==n.COLOR_ATTACHMENT0&&(ee[0]=n.COLOR_ATTACHMENT0,xe=!0);else ee[0]!==n.BACK&&(ee[0]=n.BACK,xe=!0);xe&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function de(P){return f!==P?(n.useProgram(P),f=P,!0):!1}let Q={[os]:n.FUNC_ADD,[um]:n.FUNC_SUBTRACT,[dm]:n.FUNC_REVERSE_SUBTRACT};if(i)Q[fu]=n.MIN,Q[pu]=n.MAX;else{let P=e.get("EXT_blend_minmax");P!==null&&(Q[fu]=P.MIN_EXT,Q[pu]=P.MAX_EXT)}let ue={[fm]:n.ZERO,[pm]:n.ONE,[mm]:n.SRC_COLOR,[mc]:n.SRC_ALPHA,[Mm]:n.SRC_ALPHA_SATURATE,[vm]:n.DST_COLOR,[xm]:n.DST_ALPHA,[gm]:n.ONE_MINUS_SRC_COLOR,[gc]:n.ONE_MINUS_SRC_ALPHA,[ym]:n.ONE_MINUS_DST_COLOR,[_m]:n.ONE_MINUS_DST_ALPHA,[Sm]:n.CONSTANT_COLOR,[Em]:n.ONE_MINUS_CONSTANT_COLOR,[bm]:n.CONSTANT_ALPHA,[Tm]:n.ONE_MINUS_CONSTANT_ALPHA};function K(P,j,ee,xe,ve,Xe,nt,dt,At,qe){if(P===ti){u===!0&&(Ae(n.BLEND),u=!1);return}if(u===!1&&(He(n.BLEND),u=!0),P!==hm){if(P!==y||qe!==L){if((_!==os||R!==os)&&(n.blendEquation(n.FUNC_ADD),_=os,R=os),qe)switch(P){case Oi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.ONE,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case uu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case du:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}M=null,A=null,w=null,F=null,v.set(0,0,0),S=0,y=P,L=qe}return}ve=ve||j,Xe=Xe||ee,nt=nt||xe,(j!==_||ve!==R)&&(n.blendEquationSeparate(Q[j],Q[ve]),_=j,R=ve),(ee!==M||xe!==A||Xe!==w||nt!==F)&&(n.blendFuncSeparate(ue[ee],ue[xe],ue[Xe],ue[nt]),M=ee,A=xe,w=Xe,F=nt),(dt.equals(v)===!1||At!==S)&&(n.blendColor(dt.r,dt.g,dt.b,At),v.copy(dt),S=At),y=P,L=!1}function Pe(P,j){P.side===Et?Ae(n.CULL_FACE):He(n.CULL_FACE);let ee=P.side===Qt;j&&(ee=!ee),_e(ee),P.blending===Oi&&P.transparent===!1?K(ti):K(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);let xe=P.stencilWrite;c.setTest(xe),xe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),H(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?He(n.SAMPLE_ALPHA_TO_COVERAGE):Ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function _e(P){O!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),O=P)}function b(P){P!==am?(He(n.CULL_FACE),P!==N&&(P===hu?n.cullFace(n.BACK):P===lm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ae(n.CULL_FACE),N=P}function E(P){P!==C&&(G&&n.lineWidth(P),C=P)}function H(P,j,ee){P?(He(n.POLYGON_OFFSET_FILL),(U!==j||z!==ee)&&(n.polygonOffset(j,ee),U=j,z=ee)):Ae(n.POLYGON_OFFSET_FILL)}function ae(P){P?He(n.SCISSOR_TEST):Ae(n.SCISSOR_TEST)}function ie(P){P===void 0&&(P=n.TEXTURE0+B-1),J!==P&&(n.activeTexture(P),J=P)}function ne(P,j,ee){ee===void 0&&(J===null?ee=n.TEXTURE0+B-1:ee=J);let xe=he[ee];xe===void 0&&(xe={type:void 0,texture:void 0},he[ee]=xe),(xe.type!==P||xe.texture!==j)&&(J!==ee&&(n.activeTexture(ee),J=ee),n.bindTexture(P,j||ze[P]),xe.type=P,xe.texture=j)}function Re(){let P=he[J];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function fe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function We(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Je(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ye(P){me.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),me.copy(P))}function it(P){Me.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Me.copy(P))}function oe(P,j){let ee=d.get(j);ee===void 0&&(ee=new WeakMap,d.set(j,ee));let xe=ee.get(P);xe===void 0&&(xe=n.getUniformBlockIndex(j,P.name),ee.set(P,xe))}function ce(P,j){let xe=d.get(j).get(P);h.get(j)!==xe&&(n.uniformBlockBinding(j,xe,P.__bindingPointIndex),h.set(j,xe))}function Y(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},J=null,he={},m={},x=new WeakMap,g=[],f=null,u=!1,y=null,_=null,M=null,A=null,R=null,w=null,F=null,v=new Le(0,0,0),S=0,L=!1,O=null,N=null,C=null,U=null,z=null,me.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:He,disable:Ae,bindFramebuffer:ke,drawBuffers:D,useProgram:de,setBlending:K,setMaterial:Pe,setFlipSided:_e,setCullFace:b,setLineWidth:E,setPolygonOffset:H,setScissorTest:ae,activeTexture:ie,bindTexture:ne,unbindTexture:Re,compressedTexImage2D:fe,compressedTexImage3D:be,texImage2D:Ue,texImage3D:we,updateUBOMapping:oe,uniformBlockBinding:ce,texStorage2D:Ke,texStorage3D:Fe,texSubImage2D:Ne,texSubImage3D:We,compressedTexSubImage2D:le,compressedTexSubImage3D:Je,scissor:Ye,viewport:it,reset:Y}}function Gv(n,e,t,i,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,E){return m?new OffscreenCanvas(b,E):ha("canvas")}function g(b,E,H,ae){let ie=1;if((b.width>ae||b.height>ae)&&(ie=ae/Math.max(b.width,b.height)),ie<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let ne=E?Sc:Math.floor,Re=ne(ie*b.width),fe=ne(ie*b.height);d===void 0&&(d=x(Re,fe));let be=H?x(Re,fe):d;return be.width=Re,be.height=fe,be.getContext("2d").drawImage(b,0,0,Re,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Re+"x"+fe+")."),be}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function f(b){return qu(b.width)&&qu(b.height)}function u(b){return a?!1:b.wrapS!==Yn||b.wrapT!==Yn||b.minFilter!==pn&&b.minFilter!==Dn}function y(b,E){return b.generateMipmaps&&E&&b.minFilter!==pn&&b.minFilter!==Dn}function _(b){n.generateMipmap(b)}function M(b,E,H,ae,ie=!1){if(a===!1)return E;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=E;if(E===n.RED&&(H===n.FLOAT&&(ne=n.R32F),H===n.HALF_FLOAT&&(ne=n.R16F),H===n.UNSIGNED_BYTE&&(ne=n.R8)),E===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.R8UI),H===n.UNSIGNED_SHORT&&(ne=n.R16UI),H===n.UNSIGNED_INT&&(ne=n.R32UI),H===n.BYTE&&(ne=n.R8I),H===n.SHORT&&(ne=n.R16I),H===n.INT&&(ne=n.R32I)),E===n.RG&&(H===n.FLOAT&&(ne=n.RG32F),H===n.HALF_FLOAT&&(ne=n.RG16F),H===n.UNSIGNED_BYTE&&(ne=n.RG8)),E===n.RGBA){let Re=ie?ra:at.getTransfer(ae);H===n.FLOAT&&(ne=n.RGBA32F),H===n.HALF_FLOAT&&(ne=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ne=Re===mt?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function A(b,E,H){return y(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==pn&&b.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function R(b){return b===pn||b===mu||b===Il?n.NEAREST:n.LINEAR}function w(b){let E=b.target;E.removeEventListener("dispose",w),v(E),E.isVideoTexture&&h.delete(E)}function F(b){let E=b.target;E.removeEventListener("dispose",F),L(E)}function v(b){let E=i.get(b);if(E.__webglInit===void 0)return;let H=b.source,ae=p.get(H);if(ae){let ie=ae[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(b),Object.keys(ae).length===0&&p.delete(H)}i.remove(b)}function S(b){let E=i.get(b);n.deleteTexture(E.__webglTexture);let H=b.source,ae=p.get(H);delete ae[E.__cacheKey],o.memory.textures--}function L(b){let E=b.texture,H=i.get(b),ae=i.get(E);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(H.__webglFramebuffer[ie]))for(let ne=0;ne<H.__webglFramebuffer[ie].length;ne++)n.deleteFramebuffer(H.__webglFramebuffer[ie][ne]);else n.deleteFramebuffer(H.__webglFramebuffer[ie]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[ie])}else{if(Array.isArray(H.__webglFramebuffer))for(let ie=0;ie<H.__webglFramebuffer.length;ie++)n.deleteFramebuffer(H.__webglFramebuffer[ie]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ie=0;ie<H.__webglColorRenderbuffer.length;ie++)H.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[ie]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ie=0,ne=E.length;ie<ne;ie++){let Re=i.get(E[ie]);Re.__webglTexture&&(n.deleteTexture(Re.__webglTexture),o.memory.textures--),i.remove(E[ie])}i.remove(E),i.remove(b)}let O=0;function N(){O=0}function C(){let b=O;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),O+=1,b}function U(b){let E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function z(b,E){let H=i.get(b);if(b.isVideoTexture&&Pe(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){let ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,b,E);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+E)}function B(b,E){let H=i.get(b);if(b.version>0&&H.__version!==b.version){me(H,b,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+E)}function G(b,E){let H=i.get(b);if(b.version>0&&H.__version!==b.version){me(H,b,E);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+E)}function W(b,E){let H=i.get(b);if(b.version>0&&H.__version!==b.version){Me(H,b,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+E)}let $={[vi]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[vc]:n.MIRRORED_REPEAT},J={[pn]:n.NEAREST,[mu]:n.NEAREST_MIPMAP_NEAREST,[Il]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[Om]:n.LINEAR_MIPMAP_NEAREST,[Wr]:n.LINEAR_MIPMAP_LINEAR},he={[Zm]:n.NEVER,[e0]:n.ALWAYS,[$m]:n.LESS,[tf]:n.LEQUAL,[Jm]:n.EQUAL,[jm]:n.GEQUAL,[Km]:n.GREATER,[Qm]:n.NOTEQUAL};function V(b,E,H){if(H?(n.texParameteri(b,n.TEXTURE_WRAP_S,$[E.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,$[E.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,$[E.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,J[E.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,J[E.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Yn||E.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,R(E.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,R(E.minFilter)),E.minFilter!==pn&&E.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,he[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ae=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===pn||E.minFilter!==Il&&E.minFilter!==Wr||E.type===Ni&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===$n&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function te(b,E){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",w));let ae=E.source,ie=p.get(ae);ie===void 0&&(ie={},p.set(ae,ie));let ne=U(E);if(ne!==b.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ie[ne].usedTimes++;let Re=ie[b.__cacheKey];Re!==void 0&&(ie[b.__cacheKey].usedTimes--,Re.usedTimes===0&&S(E)),b.__cacheKey=ne,b.__webglTexture=ie[ne].texture}return H}function me(b,E,H){let ae=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=n.TEXTURE_3D);let ie=te(b,E),ne=E.source;t.bindTexture(ae,b.__webglTexture,n.TEXTURE0+H);let Re=i.get(ne);if(ne.version!==Re.__version||ie===!0){t.activeTexture(n.TEXTURE0+H);let fe=at.getPrimaries(at.workingColorSpace),be=E.colorSpace===Un?null:at.getPrimaries(E.colorSpace),Ne=E.colorSpace===Un||fe===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let We=u(E)&&f(E.image)===!1,le=g(E.image,We,!1,s.maxTextureSize);le=_e(E,le);let Je=f(le)||a,Ke=r.convert(E.format,E.colorSpace),Fe=r.convert(E.type),Ue=M(E.internalFormat,Ke,Fe,E.colorSpace,E.isVideoTexture);V(ae,E,Je);let we,Ye=E.mipmaps,it=a&&E.isVideoTexture!==!0&&Ue!==Qd,oe=Re.__version===void 0||ie===!0,ce=A(E,le,Je);if(E.isDepthTexture)Ue=n.DEPTH_COMPONENT,a?E.type===Ni?Ue=n.DEPTH_COMPONENT32F:E.type===Ui?Ue=n.DEPTH_COMPONENT24:E.type===cs?Ue=n.DEPTH24_STENCIL8:Ue=n.DEPTH_COMPONENT16:E.type===Ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===hs&&Ue===n.DEPTH_COMPONENT&&E.type!==fh&&E.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ui,Fe=r.convert(E.type)),E.format===nr&&Ue===n.DEPTH_COMPONENT&&(Ue=n.DEPTH_STENCIL,E.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=cs,Fe=r.convert(E.type))),oe&&(it?t.texStorage2D(n.TEXTURE_2D,1,Ue,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Ke,Fe,null));else if(E.isDataTexture)if(Ye.length>0&&Je){it&&oe&&t.texStorage2D(n.TEXTURE_2D,ce,Ue,Ye[0].width,Ye[0].height);for(let Y=0,P=Ye.length;Y<P;Y++)we=Ye[Y],it?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,we.width,we.height,Ke,Fe,we.data):t.texImage2D(n.TEXTURE_2D,Y,Ue,we.width,we.height,0,Ke,Fe,we.data);E.generateMipmaps=!1}else it?(oe&&t.texStorage2D(n.TEXTURE_2D,ce,Ue,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,Ke,Fe,le.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,le.width,le.height,0,Ke,Fe,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ue,Ye[0].width,Ye[0].height,le.depth);for(let Y=0,P=Ye.length;Y<P;Y++)we=Ye[Y],E.format!==Zn?Ke!==null?it?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,we.width,we.height,le.depth,Ke,we.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ue,we.width,we.height,le.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,we.width,we.height,le.depth,Ke,Fe,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ue,we.width,we.height,le.depth,0,Ke,Fe,we.data)}else{it&&oe&&t.texStorage2D(n.TEXTURE_2D,ce,Ue,Ye[0].width,Ye[0].height);for(let Y=0,P=Ye.length;Y<P;Y++)we=Ye[Y],E.format!==Zn?Ke!==null?it?t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,we.width,we.height,Ke,we.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Ue,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,we.width,we.height,Ke,Fe,we.data):t.texImage2D(n.TEXTURE_2D,Y,Ue,we.width,we.height,0,Ke,Fe,we.data)}else if(E.isDataArrayTexture)it?(oe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ce,Ue,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ke,Fe,le.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,le.width,le.height,le.depth,0,Ke,Fe,le.data);else if(E.isData3DTexture)it?(oe&&t.texStorage3D(n.TEXTURE_3D,ce,Ue,le.width,le.height,le.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ke,Fe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,le.width,le.height,le.depth,0,Ke,Fe,le.data);else if(E.isFramebufferTexture){if(oe)if(it)t.texStorage2D(n.TEXTURE_2D,ce,Ue,le.width,le.height);else{let Y=le.width,P=le.height;for(let j=0;j<ce;j++)t.texImage2D(n.TEXTURE_2D,j,Ue,Y,P,0,Ke,Fe,null),Y>>=1,P>>=1}}else if(Ye.length>0&&Je){it&&oe&&t.texStorage2D(n.TEXTURE_2D,ce,Ue,Ye[0].width,Ye[0].height);for(let Y=0,P=Ye.length;Y<P;Y++)we=Ye[Y],it?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ke,Fe,we):t.texImage2D(n.TEXTURE_2D,Y,Ue,Ke,Fe,we);E.generateMipmaps=!1}else it?(oe&&t.texStorage2D(n.TEXTURE_2D,ce,Ue,le.width,le.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ke,Fe,le)):t.texImage2D(n.TEXTURE_2D,0,Ue,Ke,Fe,le);y(E,Je)&&_(ae),Re.__version=ne.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Me(b,E,H){if(E.image.length!==6)return;let ae=te(b,E),ie=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+H);let ne=i.get(ie);if(ie.version!==ne.__version||ae===!0){t.activeTexture(n.TEXTURE0+H);let Re=at.getPrimaries(at.workingColorSpace),fe=E.colorSpace===Un?null:at.getPrimaries(E.colorSpace),be=E.colorSpace===Un||Re===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,We=E.image[0]&&E.image[0].isDataTexture,le=[];for(let Y=0;Y<6;Y++)!Ne&&!We?le[Y]=g(E.image[Y],!1,!0,s.maxCubemapSize):le[Y]=We?E.image[Y].image:E.image[Y],le[Y]=_e(E,le[Y]);let Je=le[0],Ke=f(Je)||a,Fe=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type),we=M(E.internalFormat,Fe,Ue,E.colorSpace),Ye=a&&E.isVideoTexture!==!0,it=ne.__version===void 0||ae===!0,oe=A(E,Je,Ke);V(n.TEXTURE_CUBE_MAP,E,Ke);let ce;if(Ne){Ye&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,we,Je.width,Je.height);for(let Y=0;Y<6;Y++){ce=le[Y].mipmaps;for(let P=0;P<ce.length;P++){let j=ce[P];E.format!==Zn?Fe!==null?Ye?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,P,0,0,j.width,j.height,Fe,j.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,P,we,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,P,0,0,j.width,j.height,Fe,Ue,j.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,P,we,j.width,j.height,0,Fe,Ue,j.data)}}}else{ce=E.mipmaps,Ye&&it&&(ce.length>0&&oe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,we,le[0].width,le[0].height));for(let Y=0;Y<6;Y++)if(We){Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,le[Y].width,le[Y].height,Fe,Ue,le[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,we,le[Y].width,le[Y].height,0,Fe,Ue,le[Y].data);for(let P=0;P<ce.length;P++){let ee=ce[P].image[Y].image;Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,P+1,0,0,ee.width,ee.height,Fe,Ue,ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,P+1,we,ee.width,ee.height,0,Fe,Ue,ee.data)}}else{Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Fe,Ue,le[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,we,Fe,Ue,le[Y]);for(let P=0;P<ce.length;P++){let j=ce[P];Ye?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,P+1,0,0,Fe,Ue,j.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,P+1,we,Fe,Ue,j.image[Y])}}}y(E,Ke)&&_(n.TEXTURE_CUBE_MAP),ne.__version=ie.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ee(b,E,H,ae,ie,ne){let Re=r.convert(H.format,H.colorSpace),fe=r.convert(H.type),be=M(H.internalFormat,Re,fe,H.colorSpace);if(!i.get(E).__hasExternalTextures){let We=Math.max(1,E.width>>ne),le=Math.max(1,E.height>>ne);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ne,be,We,le,E.depth,0,Re,fe,null):t.texImage2D(ie,ne,be,We,le,0,Re,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),K(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,i.get(H).__webglTexture,0,ue(E)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,i.get(H).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(b,E,H){if(n.bindRenderbuffer(n.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let ae=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||K(E)){let ie=E.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Ni?ae=n.DEPTH_COMPONENT32F:ie.type===Ui&&(ae=n.DEPTH_COMPONENT24));let ne=ue(E);K(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,ae,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,ae,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){let ae=ue(E);H&&K(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,E.width,E.height):K(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{let ae=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0;ie<ae.length;ie++){let ne=ae[ie],Re=r.convert(ne.format,ne.colorSpace),fe=r.convert(ne.type),be=M(ne.internalFormat,Re,fe,ne.colorSpace),Ne=ue(E);H&&K(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,be,E.width,E.height):K(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,be,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,be,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function He(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let ae=i.get(E.depthTexture).__webglTexture,ie=ue(E);if(E.depthTexture.format===hs)K(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(E.depthTexture.format===nr)K(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ae(b){let E=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");He(E.__webglFramebuffer,b)}else if(H){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]=n.createRenderbuffer(),ze(E.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),ze(E.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(b,E,H){let ae=i.get(b);E!==void 0&&Ee(ae.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ae(b)}function D(b){let E=b.texture,H=i.get(b),ae=i.get(E);b.addEventListener("dispose",F),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=E.version,o.memory.textures++);let ie=b.isWebGLCubeRenderTarget===!0,ne=b.isWebGLMultipleRenderTargets===!0,Re=f(b)||a;if(ie){H.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[fe]=[];for(let be=0;be<E.mipmaps.length;be++)H.__webglFramebuffer[fe][be]=n.createFramebuffer()}else H.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)H.__webglFramebuffer[fe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ne)if(s.drawBuffers){let fe=b.texture;for(let be=0,Ne=fe.length;be<Ne;be++){let We=i.get(fe[be]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&K(b)===!1){let fe=ne?E:[E];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let be=0;be<fe.length;be++){let Ne=fe[be];H.__webglColorRenderbuffer[be]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[be]);let We=r.convert(Ne.format,Ne.colorSpace),le=r.convert(Ne.type),Je=M(Ne.internalFormat,We,le,Ne.colorSpace,b.isXRRenderTarget===!0),Ke=ue(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,Je,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,H.__webglColorRenderbuffer[be])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ze(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),V(n.TEXTURE_CUBE_MAP,E,Re);for(let fe=0;fe<6;fe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)Ee(H.__webglFramebuffer[fe][be],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be);else Ee(H.__webglFramebuffer[fe],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);y(E,Re)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){let fe=b.texture;for(let be=0,Ne=fe.length;be<Ne;be++){let We=fe[be],le=i.get(We);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),V(n.TEXTURE_2D,We,Re),Ee(H.__webglFramebuffer,b,We,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,0),y(We,Re)&&_(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?fe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ae.__webglTexture),V(fe,E,Re),a&&E.mipmaps&&E.mipmaps.length>0)for(let be=0;be<E.mipmaps.length;be++)Ee(H.__webglFramebuffer[be],b,E,n.COLOR_ATTACHMENT0,fe,be);else Ee(H.__webglFramebuffer,b,E,n.COLOR_ATTACHMENT0,fe,0);y(E,Re)&&_(fe),t.unbindTexture()}b.depthBuffer&&Ae(b)}function de(b){let E=f(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,ie=H.length;ae<ie;ae++){let ne=H[ae];if(y(ne,E)){let Re=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=i.get(ne).__webglTexture;t.bindTexture(Re,fe),_(Re),t.unbindTexture()}}}function Q(b){if(a&&b.samples>0&&K(b)===!1){let E=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ae=b.height,ie=n.COLOR_BUFFER_BIT,ne=[],Re=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(b),be=b.isWebGLMultipleRenderTargets===!0;if(be)for(let Ne=0;Ne<E.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){ne.push(n.COLOR_ATTACHMENT0+Ne),b.depthBuffer&&ne.push(Re);let We=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(We===!1&&(b.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),be&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ne]),We===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),be){let le=i.get(E[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,H,ae,0,0,H,ae,ie,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),be)for(let Ne=0;Ne<E.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,fe.__webglColorRenderbuffer[Ne]);let We=i.get(E[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,We,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function ue(b){return Math.min(s.maxSamples,b.samples)}function K(b){let E=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(b){let E=o.render.frame;h.get(b)!==E&&(h.set(b,E),b.update())}function _e(b,E){let H=b.colorSpace,ae=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Mc||H!==yi&&H!==Un&&(at.getTransfer(H)===mt?a===!1?e.has("EXT_sRGB")===!0&&ae===Zn?(b.format=Mc,b.minFilter=Dn,b.generateMipmaps=!1):E=ua.sRGBToLinear(E):(ae!==Zn||ie!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}this.allocateTextureUnit=C,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=ke,this.setupRenderTarget=D,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=K}function Vv(n,e,t){let i=t.isWebGL2;function s(r,o=Un){let a,l=at.getTransfer(o);if(r===zi)return n.UNSIGNED_BYTE;if(r===Yd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Fm)return n.BYTE;if(r===zm)return n.SHORT;if(r===fh)return n.UNSIGNED_SHORT;if(r===qd)return n.INT;if(r===Ui)return n.UNSIGNED_INT;if(r===Ni)return n.FLOAT;if(r===$n)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Bm)return n.ALPHA;if(r===Zn)return n.RGBA;if(r===Hm)return n.LUMINANCE;if(r===km)return n.LUMINANCE_ALPHA;if(r===hs)return n.DEPTH_COMPONENT;if(r===nr)return n.DEPTH_STENCIL;if(r===Mc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Gm)return n.RED;if(r===$d)return n.RED_INTEGER;if(r===Vm)return n.RG;if(r===Jd)return n.RG_INTEGER;if(r===Kd)return n.RGBA_INTEGER;if(r===Dl||r===Ul||r===Nl||r===Ol)if(l===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Dl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ul)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Nl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Dl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ul)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Nl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gu||r===xu||r===_u||r===vu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===gu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_u)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===yu||r===Mu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===yu)return l===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Mu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Su||r===Eu||r===bu||r===Tu||r===wu||r===Au||r===Ru||r===Cu||r===Pu||r===Lu||r===Iu||r===Du||r===Uu||r===Nu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Su)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Eu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===bu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Tu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Au)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ru)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Pu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Iu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Du)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Nu)return l===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fl||r===Ou||r===Fu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Fl)return l===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ou)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Fu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wm||r===zu||r===Bu||r===Hu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Fl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===zu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Bu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Hu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===cs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}function Xv(n,e){function t(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,rf(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,y,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),d(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u)):u.isMeshStandardMaterial?(r(f,u),p(f,u),u.isMeshPhysicalMaterial&&m(f,u,M)):u.isMeshMatcapMaterial?(r(f,u),x(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),g(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,y,_):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,t(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===Qt&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,t(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===Qt&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,t(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,t(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);let y=e.get(u).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;let _=n._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*_,t(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,y,_){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*y,f.scale.value=_*.5,u.map&&(f.map.value=u.map,t(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,t(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,t(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function d(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function p(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function m(f,u,y){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qt&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,u){u.matcap&&(f.matcap.value=u.matcap)}function g(f,u){let y=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qv(n,e,t,i){let s={},r={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,_){let M=_.program;i.uniformBlockBinding(y,M)}function c(y,_){let M=s[y.id];M===void 0&&(x(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",f));let A=_.program;i.updateUBOMapping(y,A);let R=e.render.frame;r[y.id]!==R&&(p(y),r[y.id]=R)}function h(y){let _=d();y.__bindingPointIndex=_;let M=n.createBuffer(),A=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,M),M}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let _=s[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,w=M.length;R<w;R++){let F=Array.isArray(M[R])?M[R]:[M[R]];for(let v=0,S=F.length;v<S;v++){let L=F[v];if(m(L,R,v,A)===!0){let O=L.__offset,N=Array.isArray(L.value)?L.value:[L.value],C=0;for(let U=0;U<N.length;U++){let z=N[U],B=g(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,O+C,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,C),C+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,_,M,A){let R=y.value,w=_+"_"+M;if(A[w]===void 0)return typeof R=="number"||typeof R=="boolean"?A[w]=R:A[w]=R.clone(),!0;{let F=A[w];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return A[w]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function x(y){let _=y.uniforms,M=0,A=16;for(let w=0,F=_.length;w<F;w++){let v=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,L=v.length;S<L;S++){let O=v[S],N=Array.isArray(O.value)?O.value:[O.value];for(let C=0,U=N.length;C<U;C++){let z=N[C],B=g(z),G=M%A;G!==0&&A-G<B.boundary&&(M+=A-G),O.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=B.storage}}}let R=M%A;return R>0&&(M+=A-R),y.__size=M,y.__cache={},this}function g(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function f(y){let _=y.target;_.removeEventListener("dispose",f);let M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}function Zo(n,e,t,i,s,r){Ys.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Ur.x=r*Ys.x-s*Ys.y,Ur.y=s*Ys.x+r*Ys.y):Ur.copy(Ys),n.copy(e),n.x+=Ur.x,n.y+=Ur.y,n.applyMatrix4(df)}function Nd(n,e,t,i,s,r,o){let a=Bc.distanceSqToPoint(n);if(a<t){let l=new I;Bc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}function gh(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,m=(a-o)/h-(l-o)/(h+d)+(l-a)/d;p*=h,m*=h,s(o,a,p,m)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}function Od(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function Zv(n,e){let t=1-n;return t*t*e}function $v(n,e){return 2*(1-n)*n*e}function Jv(n,e){return n*n*e}function kr(n,e,t,i){return Zv(n,e)+$v(n,t)+Jv(n,i)}function Kv(n,e){let t=1-n;return t*t*t*e}function Qv(n,e){let t=1-n;return 3*t*t*n*e}function jv(n,e){return 3*(1-n)*n*n*e}function ey(n,e){return n*n*n*e}function Gr(n,e,t,i,s){return Kv(n,e)+Qv(n,t)+jv(n,i)+ey(n,s)}function ff(n,e,t,i,s){let r,o;if(s===xy(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Fd(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Fd(r,n[r],n[r+1],o);return o&&Wa(o,o.next)&&(Qr(o),o=o.next),o}function ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Wa(t,t.next)||bt(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Jr(n,e,t,i,s,r,o){if(!n)return;!o&&r&&uy(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?iy(n,i,s,r):ny(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Qr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=sy(ps(n),e,t),Jr(n,e,t,i,s,r,2)):o===2&&ry(n,e,t,i,s,r):Jr(ps(n),e,t,i,s,r,1);break}}}function ny(n){let e=n.prev,t=n,i=n.next;if(bt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c,x=i.next;for(;x!==e;){if(x.x>=h&&x.x<=p&&x.y>=d&&x.y<=m&&Ks(s,a,r,l,o,c,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function iy(n,e,t,i){let s=n.prev,r=n,o=n.next;if(bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,p=o.y,m=a<l?a<c?a:c:l<c?l:c,x=h<d?h<p?h:p:d<p?d:p,g=a>l?a>c?a:c:l>c?l:c,f=h>d?h>p?h:p:d>p?d:p,u=Zc(m,x,e,t,i),y=Zc(g,f,e,t,i),_=n.prevZ,M=n.nextZ;for(;_&&_.z>=u&&M&&M.z<=y;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=f&&_!==s&&_!==o&&Ks(a,h,l,d,c,p,_.x,_.y)&&bt(_.prev,_,_.next)>=0||(_=_.prevZ,M.x>=m&&M.x<=g&&M.y>=x&&M.y<=f&&M!==s&&M!==o&&Ks(a,h,l,d,c,p,M.x,M.y)&&bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;_&&_.z>=u;){if(_.x>=m&&_.x<=g&&_.y>=x&&_.y<=f&&_!==s&&_!==o&&Ks(a,h,l,d,c,p,_.x,_.y)&&bt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=g&&M.y>=x&&M.y<=f&&M!==s&&M!==o&&Ks(a,h,l,d,c,p,M.x,M.y)&&bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function sy(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Wa(s,r)&&pf(s,i,i.next,r)&&Kr(s,r)&&Kr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Qr(i),Qr(i.next),i=n=r),i=i.next}while(i!==n);return ps(i)}function ry(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&py(o,a)){let l=mf(o,a);o=ps(o,o.next),l=ps(l,l.next),Jr(o,e,t,i,s,r,0),Jr(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function oy(n,e,t,i){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ff(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(fy(c));for(s.sort(ay),r=0;r<s.length;r++)t=ly(s[r],t);return t}function ay(n,e){return n.x-e.x}function ly(n,e){let t=cy(n,e);if(!t)return e;let i=mf(t,n);return ps(i,i.next),ps(t,t.next)}function cy(n,e){let t=e,i=-1/0,s,r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>i&&(i=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ks(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),Kr(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&hy(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function hy(n,e){return bt(n.prev,n,e.prev)<0&&bt(e.next,n,n.next)<0}function uy(n,e,t,i){let s=n;do s.z===0&&(s.z=Zc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,dy(s)}function dy(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Zc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function fy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Ks(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function py(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!my(n,e)&&(Kr(n,e)&&Kr(e,n)&&gy(n,e)&&(bt(n.prev,n,e.prev)||bt(n,e.prev,e))||Wa(n,e)&&bt(n.prev,n,n.next)>0&&bt(e.prev,e,e.next)>0)}function bt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Wa(n,e){return n.x===e.x&&n.y===e.y}function pf(n,e,t,i){let s=ea(bt(n,e,t)),r=ea(bt(n,e,i)),o=ea(bt(t,i,n)),a=ea(bt(t,i,e));return!!(s!==r&&o!==a||s===0&&jo(n,t,e)||r===0&&jo(n,i,e)||o===0&&jo(t,n,i)||a===0&&jo(t,e,i))}function jo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ea(n){return n>0?1:n<0?-1:0}function my(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&pf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Kr(n,e){return bt(n.prev,n,n.next)<0?bt(n,e,n.next)>=0&&bt(n,n.prev,e)>=0:bt(n,e,n.prev)<0||bt(n,n.next,e)<0}function gy(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function mf(n,e){let t=new $c(n.i,n.x,n.y),i=new $c(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Fd(n,e,t,i){let s=new $c(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Qr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $c(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xy(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function zd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function vy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function ta(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function yy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vd(){return(typeof performance>"u"?Date:performance).now()}var am,hu,lm,Ha,cm,pi,Bi,Qt,Et,ti,Oi,jt,uu,du,hm,os,um,dm,fu,pu,fm,pm,mm,gm,mc,gc,xm,_m,vm,ym,Mm,Sm,Em,bm,Tm,wm,Am,Rm,na,Cm,Pm,Lm,Im,Wd,Dm,Um,Fi,ch,hh,uh,to,Nm,dh,Xd,er,tr,xc,_c,ka,vi,Yn,vc,pn,mu,Il,Dn,Om,Wr,zi,Fm,zm,fh,qd,Ui,Ni,$n,Yd,Zd,cs,Bm,Zn,Hm,km,hs,nr,Gm,$d,Vm,Jd,Kd,Dl,Ul,Nl,Ol,gu,xu,_u,vu,Qd,yu,Mu,Su,Eu,bu,Tu,wu,Au,Ru,Cu,Pu,Lu,Iu,Du,Uu,Nu,Fl,Ou,Fu,Wm,zu,Bu,Hu,ia,sa,zl,ku,Gu,Vu,jd,us,Xm,qm,ef,Ym,Un,xt,yi,ph,Ga,ra,mt,oa,aa,Rs,Wu,Zm,$m,Jm,tf,Km,Qm,jm,e0,yc,Xu,Mc,xi,la,Hi,rn,Bl,ca,se,tt,kl,Yu,Zu,$u,bo,i0,at,Cs,ua,s0,da,r0,Nn,Mt,Ec,mn,fa,bc,On,I,Wl,Ju,Mi,ci,Wn,To,Ps,Ls,Is,Ci,Pi,ts,Cr,wo,Ao,ns,o0,Pr,ql,ki,hi,Yl,Ro,Li,Zl,Co,$l,pa,ct,Ds,Xn,a0,l0,Ii,Po,An,Ku,Qu,ma,ga,c0,ju,Us,ui,Lo,Lr,h0,u0,ed,td,nd,d0,f0,Dt,qn,di,Jl,fi,Ns,Os,id,Kl,Ql,jl,Io,ls,sf,Di,Do,Le,on,p0,Si,ht,Ht,Uo,an,xa,_a,st,m0,In,tc,Fs,Rn,Ir,Jt,kt,sd,is,No,rd,zs,Bs,Hs,nc,Oo,Fo,zo,Bo,od,ad,ld,Ho,ko,re,Oe,Wi,_0,v0,Gt,va,tn,ks,Gs,Tc,ya,wc,ic,y0,M0,mi,ss,Vo,Xr,rt,E0,b0,T0,w0,A0,R0,C0,P0,L0,I0,D0,U0,N0,O0,F0,z0,B0,H0,k0,G0,V0,W0,X0,q0,Y0,Z0,$0,J0,K0,Q0,j0,eg,tg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,_g,vg,yg,Mg,Sg,Eg,bg,Tg,wg,Ag,Rg,Cg,Pg,Lg,Ig,Dg,Ug,Ng,Og,Fg,zg,Bg,Hg,kg,Gg,Vg,Wg,Xg,qg,Yg,Zg,$g,Jg,Kg,Qg,jg,ex,tx,nx,ix,sx,rx,ox,ax,lx,cx,hx,ux,dx,fx,px,mx,gx,xx,_x,vx,yx,Mx,Sx,Ex,bx,Tx,wx,Ax,Rx,Cx,Px,Lx,Ix,Dx,Ux,Nx,Ox,Fx,zx,Bx,Hx,kx,Gx,Vx,Wx,Xx,qx,Yx,Zx,$x,Jx,Kx,Qx,jx,e_,t_,Qe,pe,ei,Wo,sr,$s,cd,as,sc,hd,rc,oc,ac,rs,Vs,ud,rr,Ma,af,lf,cf,hf,uf,md,gd,xd,_d,vd,Ac,Rc,Cc,lc,js,ov,av,gv,xv,vv,Av,Lc,Ic,Uv,Dc,Uc,zv,Bv,Nc,lt,Wv,Hr,Oc,qr,Fc,Sa,or,zc,dn,Ea,ds,Ws,Dr,Xs,qs,Ys,Ur,df,qo,Nr,Yo,Pd,cc,Ld,ar,ba,Zs,Id,$o,Dd,Yv,Or,Fr,Yt,Yr,Ud,Bc,Jo,Ko,Ta,yn,Fn,Zr,Hc,Qo,hc,uc,dc,kc,wa,Gc,Aa,Vc,Ra,Wc,Ca,Xc,qc,fs,Yc,Pa,La,Tt,lr,$r,ty,Vr,Ia,_y,Gi,en,Da,Ua,ye,Vi,cr,Jc,Kc,Qc,Jn,ms,jc,eh,th,jr,gs,nh,ih,My,sh,hr,Na,fc,Hd,kd,eo,rh,Oa,Gd,zr,pc,oh,Fa,ah,za,Ba,xh,Sy,_h,Ey,by,Ty,wy,Ay,Ry,Cy,lh,yt,AS,Ut=wn(()=>{am=0,hu=1,lm=2,Ha=1,cm=2,pi=3,Bi=0,Qt=1,Et=2,ti=0,Oi=1,jt=2,uu=3,du=4,hm=5,os=100,um=101,dm=102,fu=103,pu=104,fm=200,pm=201,mm=202,gm=203,mc=204,gc=205,xm=206,_m=207,vm=208,ym=209,Mm=210,Sm=211,Em=212,bm=213,Tm=214,wm=0,Am=1,Rm=2,na=3,Cm=4,Pm=5,Lm=6,Im=7,Wd=0,Dm=1,Um=2,Fi=0,ch=1,hh=2,uh=3,to=4,Nm=5,dh=6,Xd=300,er=301,tr=302,xc=303,_c=304,ka=306,vi=1e3,Yn=1001,vc=1002,pn=1003,mu=1004,Il=1005,Dn=1006,Om=1007,Wr=1008,zi=1009,Fm=1010,zm=1011,fh=1012,qd=1013,Ui=1014,Ni=1015,$n=1016,Yd=1017,Zd=1018,cs=1020,Bm=1021,Zn=1023,Hm=1024,km=1025,hs=1026,nr=1027,Gm=1028,$d=1029,Vm=1030,Jd=1031,Kd=1033,Dl=33776,Ul=33777,Nl=33778,Ol=33779,gu=35840,xu=35841,_u=35842,vu=35843,Qd=36196,yu=37492,Mu=37496,Su=37808,Eu=37809,bu=37810,Tu=37811,wu=37812,Au=37813,Ru=37814,Cu=37815,Pu=37816,Lu=37817,Iu=37818,Du=37819,Uu=37820,Nu=37821,Fl=36492,Ou=36494,Fu=36495,Wm=36283,zu=36284,Bu=36285,Hu=36286,ia=2300,sa=2301,zl=2302,ku=2400,Gu=2401,Vu=2402,jd=3e3,us=3001,Xm=3200,qm=3201,ef=0,Ym=1,Un="",xt="srgb",yi="srgb-linear",ph="display-p3",Ga="display-p3-linear",ra="linear",mt="srgb",oa="rec709",aa="p3",Rs=7680,Wu=519,Zm=512,$m=513,Jm=514,tf=515,Km=516,Qm=517,jm=518,e0=519,yc=35044,Xu="300 es",Mc=1035,xi=2e3,la=2001,Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bl=Math.PI/180,ca=180/Math.PI;se=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],p=i[2],m=i[5],x=i[8],g=s[0],f=s[3],u=s[6],y=s[1],_=s[4],M=s[7],A=s[2],R=s[5],w=s[8];return r[0]=o*g+a*y+l*A,r[3]=o*f+a*_+l*R,r[6]=o*u+a*M+l*w,r[1]=c*g+h*y+d*A,r[4]=c*f+h*_+d*R,r[7]=c*u+h*M+d*w,r[2]=p*g+m*y+x*A,r[5]=p*f+m*_+x*R,r[8]=p*u+m*M+x*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,p=a*l-h*r,m=c*r-o*l,x=t*d+i*p+s*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=d*g,e[1]=(s*c-h*i)*g,e[2]=(a*i-s*o)*g,e[3]=p*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kl=new tt;Yu={};Zu=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$u=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bo={[yi]:{transfer:ra,primaries:oa,toReference:n=>n,fromReference:n=>n},[xt]:{transfer:mt,primaries:oa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ga]:{transfer:ra,primaries:aa,toReference:n=>n.applyMatrix3($u),fromReference:n=>n.applyMatrix3(Zu)},[ph]:{transfer:mt,primaries:aa,toReference:n=>n.convertSRGBToLinear().applyMatrix3($u),fromReference:n=>n.applyMatrix3(Zu).convertLinearToSRGB()}},i0=new Set([yi,Ga]),at={enabled:!0,_workingColorSpace:yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!i0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=bo[e].toReference,s=bo[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return bo[n].primaries},getTransfer:function(n){return n===Un?ra:bo[n].transfer}};ua=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=ha("canvas")),Cs.width=e.width,Cs.height=e.height;let i=Cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ha("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qs(t[i]/255)*255):t[i]=Qs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},s0=0,da=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=_i(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Vl(s[o].image)):r.push(Vl(s[o]))}else r=Vl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};r0=0,Nn=class n extends Hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Yn,s=Yn,r=Dn,o=Wr,a=Zn,l=zi,c=n.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=_i(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===us?xt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vi:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vi:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xt?us:jd}set encoding(e){Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===us?xt:Un}};Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Xd;Nn.DEFAULT_ANISOTROPY=1;Mt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],x=l[9],g=l[2],f=l[6],u=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-g)<.01&&Math.abs(x-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+g)<.1&&Math.abs(x+f)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,M=(m+1)/2,A=(u+1)/2,R=(h+p)/4,w=(d+g)/4,F=(x+f)/4;return _>M&&_>A?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=R/i,r=w/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=R/s,r=F/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=w/r,s=F/r),this.set(i,s,r,t),this}let y=Math.sqrt((f-x)*(f-x)+(d-g)*(d-g)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(f-x)/y,this.y=(d-g)/y,this.z=(p-h)/y,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ec=class extends Hi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);let s={width:e,height:t,depth:1};i.encoding!==void 0&&(Br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===us?xt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Ec{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},fa=class extends Nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bc=class extends Nn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},On=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],p=r[o+0],m=r[o+1],x=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=g;return}if(d!==g||l!==p||c!==m||h!==x){let f=1-a,u=l*p+c*m+h*x+d*g,y=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let A=Math.sqrt(_),R=Math.atan2(A,u*y);f=Math.sin(f*R)/A,a=Math.sin(a*R)/A}let M=a*y;if(l=l*f+p*M,c=c*f+m*M,h=h*f+x*M,d=d*f+g*M,f===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],p=r[o+1],m=r[o+2],x=r[o+3];return e[t]=a*x+h*d+l*m-c*p,e[t+1]=l*x+h*p+c*d-a*m,e[t+2]=c*x+h*m+a*p-l*d,e[t+3]=h*x-a*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),p=l(i/2),m=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=p*h*d+c*m*x,this._y=c*m*d-p*h*x,this._z=c*h*x+p*m*d,this._w=c*h*d-p*m*x;break;case"YXZ":this._x=p*h*d+c*m*x,this._y=c*m*d-p*h*x,this._z=c*h*x-p*m*d,this._w=c*h*d+p*m*x;break;case"ZXY":this._x=p*h*d-c*m*x,this._y=c*m*d+p*h*x,this._z=c*h*x+p*m*d,this._w=c*h*d-p*m*x;break;case"ZYX":this._x=p*h*d-c*m*x,this._y=c*m*d+p*h*x,this._z=c*h*x-p*m*d,this._w=c*h*d+p*m*x;break;case"YZX":this._x=p*h*d+c*m*x,this._y=c*m*d+p*h*x,this._z=c*h*x-p*m*d,this._w=c*h*d-p*m*x;break;case"XZY":this._x=p*h*d-c*m*x,this._y=c*m*d-p*h*x,this._z=c*h*x+p*m*d,this._w=c*h*d+p*m*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=i+a+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*d+this._w*p,this._x=i*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ju.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wl=new I,Ju=new On,Mi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),wo.subVectors(this.max,Cr),Ps.subVectors(e.a,Cr),Ls.subVectors(e.b,Cr),Is.subVectors(e.c,Cr),Ci.subVectors(Ls,Ps),Pi.subVectors(Is,Ls),ts.subVectors(Ps,Is);let t=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-ts.z,ts.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,ts.z,0,-ts.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-ts.y,ts.x,0];return!Xl(t,Ps,Ls,Is,wo)||(t=[1,0,0,0,1,0,0,0,1],!Xl(t,Ps,Ls,Is,wo))?!1:(Ao.crossVectors(Ci,Pi),t=[Ao.x,Ao.y,Ao.z],Xl(t,Ps,Ls,Is,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new I,new I,new I,new I,new I,new I,new I,new I],Wn=new I,To=new Mi,Ps=new I,Ls=new I,Is=new I,Ci=new I,Pi=new I,ts=new I,Cr=new I,wo=new I,Ao=new I,ns=new I;o0=new Mi,Pr=new I,ql=new I,ki=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):o0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(ql)),this.expandByPoint(Pr.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new I,Yl=new I,Ro=new I,Li=new I,Zl=new I,Co=new I,$l=new I,pa=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Yl.copy(e).add(t).multiplyScalar(.5),Ro.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(Yl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ro),a=Li.dot(this.direction),l=-Li.dot(Ro),c=Li.lengthSq(),h=Math.abs(1-o*o),d,p,m,x;if(h>0)if(d=o*l-a,p=o*a-l,x=r*h,d>=0)if(p>=-x)if(p<=x){let g=1/h;d*=g,p*=g,m=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;else p<=-x?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=x?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),m=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Yl).addScaledVector(Ro,p),m}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),s=hi.dot(hi)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,s,r){Zl.subVectors(t,e),Co.subVectors(i,e),$l.crossVectors(Zl,Co);let o=this.direction.dot($l),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);let l=a*this.direction.dot(Co.crossVectors(Li,Co));if(l<0)return null;let c=a*this.direction.dot(Zl.cross(Li));if(c<0||l+c>o)return null;let h=-a*Li.dot($l);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ct=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,p,m,x,g,f){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,p,m,x,g,f)}set(e,t,i,s,r,o,a,l,c,h,d,p,m,x,g,f){let u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=p,u[3]=m,u[7]=x,u[11]=g,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*h,m=o*d,x=a*h,g=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=m+x*c,t[5]=p-g*c,t[9]=-a*l,t[2]=g-p*c,t[6]=x+m*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,m=l*d,x=c*h,g=c*d;t[0]=p+g*a,t[4]=x*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-x,t[6]=g+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,m=l*d,x=c*h,g=c*d;t[0]=p-g*a,t[4]=-o*d,t[8]=x+m*a,t[1]=m+x*a,t[5]=o*h,t[9]=g-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,m=o*d,x=a*h,g=a*d;t[0]=l*h,t[4]=x*c-m,t[8]=p*c+g,t[1]=l*d,t[5]=g*c+p,t[9]=m*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=g-p*d,t[8]=x*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=m*d+x,t[10]=p-g*d}else if(e.order==="XZY"){let p=o*l,m=o*c,x=a*l,g=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+g,t[5]=o*h,t[9]=m*d-x,t[2]=x*d-m,t[6]=a*h,t[10]=g*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,l0)}lookAt(e,t,i){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Ii.crossVectors(i,An),Ii.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Ii.crossVectors(i,An)),Ii.normalize(),Po.crossVectors(An,Ii),s[0]=Ii.x,s[4]=Po.x,s[8]=An.x,s[1]=Ii.y,s[5]=Po.y,s[9]=An.y,s[2]=Ii.z,s[6]=Po.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],p=i[9],m=i[13],x=i[2],g=i[6],f=i[10],u=i[14],y=i[3],_=i[7],M=i[11],A=i[15],R=s[0],w=s[4],F=s[8],v=s[12],S=s[1],L=s[5],O=s[9],N=s[13],C=s[2],U=s[6],z=s[10],B=s[14],G=s[3],W=s[7],$=s[11],J=s[15];return r[0]=o*R+a*S+l*C+c*G,r[4]=o*w+a*L+l*U+c*W,r[8]=o*F+a*O+l*z+c*$,r[12]=o*v+a*N+l*B+c*J,r[1]=h*R+d*S+p*C+m*G,r[5]=h*w+d*L+p*U+m*W,r[9]=h*F+d*O+p*z+m*$,r[13]=h*v+d*N+p*B+m*J,r[2]=x*R+g*S+f*C+u*G,r[6]=x*w+g*L+f*U+u*W,r[10]=x*F+g*O+f*z+u*$,r[14]=x*v+g*N+f*B+u*J,r[3]=y*R+_*S+M*C+A*G,r[7]=y*w+_*L+M*U+A*W,r[11]=y*F+_*O+M*z+A*$,r[15]=y*v+_*N+M*B+A*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],m=e[14],x=e[3],g=e[7],f=e[11],u=e[15];return x*(+r*l*d-s*c*d-r*a*p+i*c*p+s*a*m-i*l*m)+g*(+t*l*m-t*c*p+r*o*p-s*o*m+s*c*h-r*l*h)+f*(+t*c*d-t*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-t*l*d+t*a*p+s*o*d-i*o*p+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],m=e[11],x=e[12],g=e[13],f=e[14],u=e[15],y=d*f*c-g*p*c+g*l*m-a*f*m-d*l*u+a*p*u,_=x*p*c-h*f*c-x*l*m+o*f*m+h*l*u-o*p*u,M=h*g*c-x*d*c+x*a*m-o*g*m-h*a*u+o*d*u,A=x*d*l-h*g*l-x*a*p+o*g*p+h*a*f-o*d*f,R=t*y+i*_+s*M+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/R;return e[0]=y*w,e[1]=(g*p*r-d*f*r-g*s*m+i*f*m+d*s*u-i*p*u)*w,e[2]=(a*f*r-g*l*r+g*s*c-i*f*c-a*s*u+i*l*u)*w,e[3]=(d*l*r-a*p*r-d*s*c+i*p*c+a*s*m-i*l*m)*w,e[4]=_*w,e[5]=(h*f*r-x*p*r+x*s*m-t*f*m-h*s*u+t*p*u)*w,e[6]=(x*l*r-o*f*r-x*s*c+t*f*c+o*s*u-t*l*u)*w,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*m+t*l*m)*w,e[8]=M*w,e[9]=(x*d*r-h*g*r-x*i*m+t*g*m+h*i*u-t*d*u)*w,e[10]=(o*g*r-x*a*r+x*i*c-t*g*c-o*i*u+t*a*u)*w,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*m-t*a*m)*w,e[12]=A*w,e[13]=(h*g*s-x*d*s+x*i*p-t*g*p-h*i*f+t*d*f)*w,e[14]=(x*a*s-o*g*s-x*i*l+t*g*l+o*i*f-t*a*f)*w,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*p+t*a*p)*w,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,p=r*c,m=r*h,x=r*d,g=o*h,f=o*d,u=a*d,y=l*c,_=l*h,M=l*d,A=i.x,R=i.y,w=i.z;return s[0]=(1-(g+u))*A,s[1]=(m+M)*A,s[2]=(x-_)*A,s[3]=0,s[4]=(m-M)*R,s[5]=(1-(p+u))*R,s[6]=(f+y)*R,s[7]=0,s[8]=(x+_)*w,s[9]=(f-y)*w,s[10]=(1-(p+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ds.set(s[0],s[1],s[2]).length(),o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let c=1/r,h=1/o,d=1/a;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=d,Xn.elements[9]*=d,Xn.elements[10]*=d,t.setFromRotationMatrix(Xn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=xi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),p=(i+s)/(i-s),m,x;if(a===xi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===la)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=xi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(o-r),p=(t+e)*c,m=(i+s)*h,x,g;if(a===xi)x=(o+r)*d,g=-2*d;else if(a===la)x=r*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ds=new I,Xn=new ct,a0=new I(0,0,0),l0=new I(1,1,1),Ii=new I,Po=new I,An=new I,Ku=new ct,Qu=new On,ma=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ma.DEFAULT_ORDER="XYZ";ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},c0=0,ju=new I,Us=new On,ui=new ct,Lo=new I,Lr=new I,h0=new I,u0=new On,ed=new I(1,0,0),td=new I(0,1,0),nd=new I(0,0,1),d0={type:"added"},f0={type:"removed"},Dt=class n extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ma,i=new On,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new tt}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(ed,e)}rotateY(e){return this.rotateOnAxis(td,e)}rotateZ(e){return this.rotateOnAxis(nd,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ed,e)}translateY(e){return this.translateOnAxis(td,e)}translateZ(e){return this.translateOnAxis(nd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Lo.copy(e):Lo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Lr,Lo,this.up):ui.lookAt(Lo,Lr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(ui),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(d0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,h0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,u0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++){let r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;qn=new I,di=new I,Jl=new I,fi=new I,Ns=new I,Os=new I,id=new I,Kl=new I,Ql=new I,jl=new I,Io=!1,ls=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),di.subVectors(i,t),Jl.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(di),l=qn.dot(Jl),c=di.dot(di),h=di.dot(Jl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(c*l-a*h)*p,x=(o*h-a*l)*p;return r.set(1-m-x,x,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getUV(e,t,i,s,r,o,a,l){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),di.subVectors(e,t),qn.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),qn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return Io===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Io=!0),n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;Ns.subVectors(s,i),Os.subVectors(r,i),Kl.subVectors(e,i);let l=Ns.dot(Kl),c=Os.dot(Kl);if(l<=0&&c<=0)return t.copy(i);Ql.subVectors(e,s);let h=Ns.dot(Ql),d=Os.dot(Ql);if(h>=0&&d<=h)return t.copy(s);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Ns,o);jl.subVectors(e,r);let m=Ns.dot(jl),x=Os.dot(jl);if(x>=0&&m<=x)return t.copy(r);let g=m*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(i).addScaledVector(Os,a);let f=h*x-m*d;if(f<=0&&d-h>=0&&m-x>=0)return id.subVectors(r,s),a=(d-h)/(d-h+(m-x)),t.copy(s).addScaledVector(id,a);let u=1/(f+g+p);return o=g*u,a=p*u,t.copy(i).addScaledVector(Ns,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Do={h:0,s:0,l:0};Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=t0(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ec(o,r,e+1/3),this.g=ec(o,r,e),this.b=ec(o,r,e-1/3)}return at.toWorkingColorSpace(this,s),this}setStyle(e,t=xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let i=sf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=Gl(e.r),this.g=Gl(e.g),this.b=Gl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return at.fromWorkingColorSpace(on.copy(this),e),Math.round(Kt(on.r*255,0,255))*65536+Math.round(Kt(on.g*255,0,255))*256+Math.round(Kt(on.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(on.copy(this),t);let i=on.r,s=on.g,r=on.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=xt){at.fromWorkingColorSpace(on.copy(this),e);let t=on.r,i=on.g,s=on.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Do);let i=Hl(Di.h,Do.h,t),s=Hl(Di.s,Do.s,t),r=Hl(Di.l,Do.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Le;Le.NAMES=sf;p0=0,Si=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Oi,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==Bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mc&&(i.blendSrc=this.blendSrc),this.blendDst!==gc&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==na&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ht=class extends Si{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ht=new I,Uo=new se,an=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Uo.fromBufferAttribute(this,t),Uo.applyMatrix3(e),this.setXY(t,Uo.x,Uo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yc&&(e.usage=this.usage),e}},xa=class extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}},_a=class extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}},st=class extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}},m0=0,In=new ct,tc=new Dt,Fs=new I,Rn=new Mi,Ir=new Mi,Jt=new I,kt=class n extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?_a:xa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Rn.min,Ir.min),Rn.expandByPoint(Jt),Jt.addVectors(Rn.max,Ir.max),Rn.expandByPoint(Jt)):(Rn.expandByPoint(Ir.min),Rn.expandByPoint(Ir.max))}Rn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),Jt.add(Fs)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<a;S++)c[S]=new I,h[S]=new I;let d=new I,p=new I,m=new I,x=new se,g=new se,f=new se,u=new I,y=new I;function _(S,L,O){d.fromArray(s,S*3),p.fromArray(s,L*3),m.fromArray(s,O*3),x.fromArray(o,S*2),g.fromArray(o,L*2),f.fromArray(o,O*2),p.sub(d),m.sub(d),g.sub(x),f.sub(x);let N=1/(g.x*f.y-f.x*g.y);isFinite(N)&&(u.copy(p).multiplyScalar(f.y).addScaledVector(m,-g.y).multiplyScalar(N),y.copy(m).multiplyScalar(g.x).addScaledVector(p,-f.x).multiplyScalar(N),c[S].add(u),c[L].add(u),c[O].add(u),h[S].add(y),h[L].add(y),h[O].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let S=0,L=M.length;S<L;++S){let O=M[S],N=O.start,C=O.count;for(let U=N,z=N+C;U<z;U+=3)_(i[U+0],i[U+1],i[U+2])}let A=new I,R=new I,w=new I,F=new I;function v(S){w.fromArray(r,S*3),F.copy(w);let L=c[S];A.copy(L),A.sub(w.multiplyScalar(w.dot(L))).normalize(),R.crossVectors(F,L);let N=R.dot(h[S])<0?-1:1;l[S*4]=A.x,l[S*4+1]=A.y,l[S*4+2]=A.z,l[S*4+3]=N}for(let S=0,L=M.length;S<L;++S){let O=M[S],N=O.start,C=O.count;for(let U=N,z=N+C;U<z;U+=3)v(i[U+0]),v(i[U+1]),v(i[U+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(e)for(let p=0,m=e.count;p<m;p+=3){let x=e.getX(p+0),g=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,f),a.add(h),l.add(h),c.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h),m=0,x=0;for(let g=0,f=l.length;g<f;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*h;for(let u=0;u<h;u++)p[x++]=c[m++]}return new an(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let p=c[h],m=e(p,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,m=d.length;p<m;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sd=new ct,is=new pa,No=new ki,rd=new I,zs=new I,Bs=new I,Hs=new I,nc=new I,Oo=new I,Fo=new se,zo=new se,Bo=new se,od=new I,ad=new I,ld=new I,Ho=new I,ko=new I,re=class extends Dt{constructor(e=new kt,t=new ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(nc.fromBufferAttribute(d,e),o?Oo.addScaledVector(nc,h):Oo.addScaledVector(nc.sub(t),h))}t.add(Oo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(No.containsPoint(is.origin)===!1&&(is.intersectSphere(No,rd)===null||is.origin.distanceToSquared(rd)>(e.far-e.near)**2))&&(sd.copy(r).invert(),is.copy(e.ray).applyMatrix4(sd),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let f=p[x],u=o[f.materialIndex],y=Math.max(f.start,m.start),_=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let M=y,A=_;M<A;M+=3){let R=a.getX(M),w=a.getX(M+1),F=a.getX(M+2);s=Go(this,u,e,i,c,h,d,R,w,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let f=x,u=g;f<u;f+=3){let y=a.getX(f),_=a.getX(f+1),M=a.getX(f+2);s=Go(this,o,e,i,c,h,d,y,_,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=p.length;x<g;x++){let f=p[x],u=o[f.materialIndex],y=Math.max(f.start,m.start),_=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let M=y,A=_;M<A;M+=3){let R=M,w=M+1,F=M+2;s=Go(this,u,e,i,c,h,d,R,w,F),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{let x=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let f=x,u=g;f<u;f+=3){let y=f,_=f+1,M=f+2;s=Go(this,o,e,i,c,h,d,y,_,M),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}};Oe=class n extends kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],p=0,m=0;x("z","y","x",-1,-1,i,t,e,o,r,0),x("z","y","x",1,-1,i,t,-e,o,r,1),x("x","z","y",1,1,e,i,t,s,o,2),x("x","z","y",1,-1,e,i,-t,s,o,3),x("x","y","z",1,-1,e,t,i,s,r,4),x("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function x(g,f,u,y,_,M,A,R,w,F,v){let S=M/w,L=A/F,O=M/2,N=A/2,C=R/2,U=w+1,z=F+1,B=0,G=0,W=new I;for(let $=0;$<z;$++){let J=$*L-N;for(let he=0;he<U;he++){let V=he*S-O;W[g]=V*y,W[f]=J*_,W[u]=C,c.push(W.x,W.y,W.z),W[g]=0,W[f]=0,W[u]=R>0?1:-1,h.push(W.x,W.y,W.z),d.push(he/w),d.push(1-$/F),B+=1}}for(let $=0;$<F;$++)for(let J=0;J<w;J++){let he=p+J+U*$,V=p+J+U*($+1),te=p+(J+1)+U*($+1),me=p+(J+1)+U*$;l.push(he,V,me),l.push(V,te,me),G+=6}a.addGroup(m,G,v),m+=G,p+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Wi={clone:ir,merge:fn},_0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends Si{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=x0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},va=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},tn=class extends va{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(Bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bl*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Gs=1,Tc=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(ks,Gs,e,t);s.layers=this.layers,this.add(s);let r=new tn(ks,Gs,e,t);r.layers=this.layers,this.add(r);let o=new tn(ks,Gs,e,t);o.layers=this.layers,this.add(o);let a=new tn(ks,Gs,e,t);a.layers=this.layers,this.add(a);let l=new tn(ks,Gs,e,t);l.layers=this.layers,this.add(l);let c=new tn(ks,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,p,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},ya=class extends Nn{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wc=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===us?xt:Un),this.texture=new ya(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oe(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:ti});r.uniforms.tEquirect.value=t;let o=new re(s,r),a=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Dn),new Tc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ic=new I,y0=new I,M0=new tt,mi=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ic.subVectors(i,t).cross(y0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ic),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||M0.getNormalMatrix(e),s=this.coplanarPoint(ic).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ss=new ki,Vo=new I,Xr=class{constructor(e=new mi,t=new mi,i=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){let i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],m=s[8],x=s[9],g=s[10],f=s[11],u=s[12],y=s[13],_=s[14],M=s[15];if(i[0].setComponents(l-r,p-c,f-m,M-u).normalize(),i[1].setComponents(l+r,p+c,f+m,M+u).normalize(),i[2].setComponents(l+o,p+h,f+x,M+y).normalize(),i[3].setComponents(l-o,p-h,f-x,M-y).normalize(),i[4].setComponents(l-a,p-d,f-g,M-_).normalize(),t===xi)i[5].setComponents(l+a,p+d,f+g,M+_).normalize();else if(t===la)i[5].setComponents(a,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Vo.x=s.normal.x>0?e.max.x:e.min.x,Vo.y=s.normal.y>0?e.max.y:e.min.y,Vo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};rt=class n extends kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,p=t/l,m=[],x=[],g=[],f=[];for(let u=0;u<h;u++){let y=u*p-o;for(let _=0;_<c;_++){let M=_*d-r;x.push(M,-y,0),g.push(0,0,1),f.push(_/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let y=0;y<a;y++){let _=y+c*u,M=y+c*(u+1),A=y+1+c*(u+1),R=y+1+c*u;m.push(_,M,R),m.push(M,A,R)}this.setIndex(m),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},E0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b0=`#ifdef USE_ALPHAHASH
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
#endif`,T0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,w0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,R0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C0=`#ifdef USE_AOMAP
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
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L0=`#ifdef USE_BATCHING
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
#endif`,I0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,O0=`#ifdef USE_IRIDESCENCE
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
#endif`,F0=`#ifdef USE_BUMPMAP
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
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,X0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,q0=`#define PI 3.141592653589793
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z0=`vec3 transformedNormal = objectNormal;
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
#endif`,$0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j0="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`
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
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,ug=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mg=`uniform bool receiveShadow;
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
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
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
#endif`,Sg=`struct PhysicalMaterial {
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
}`,Eg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ag=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ug=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Og=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
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
#endif`,zg=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,Hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ax=`float getShadowMask() {
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
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,dx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ex=`uniform sampler2D t2D;
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
}`,bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`#include <common>
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
}`,Cx=`#if DEPTH_PACKING == 3200
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
}`,Px=`#define DISTANCE
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
}`,Lx=`#define DISTANCE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`uniform float scale;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,Fx=`uniform vec3 diffuse;
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
}`,zx=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,Hx=`#define MATCAP
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
}`,kx=`#define MATCAP
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
}`,Gx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define PHONG
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
}`,qx=`#define STANDARD
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
}`,Yx=`#define STANDARD
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
}`,Zx=`#define TOON
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
}`,$x=`#define TOON
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
}`,Jx=`uniform float size;
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
}`,Kx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,jx=`uniform vec3 color;
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
}`,e_=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:E0,alphahash_pars_fragment:b0,alphamap_fragment:T0,alphamap_pars_fragment:w0,alphatest_fragment:A0,alphatest_pars_fragment:R0,aomap_fragment:C0,aomap_pars_fragment:P0,batching_pars_vertex:L0,batching_vertex:I0,begin_vertex:D0,beginnormal_vertex:U0,bsdfs:N0,iridescence_fragment:O0,bumpmap_pars_fragment:F0,clipping_planes_fragment:z0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:H0,clipping_planes_vertex:k0,color_fragment:G0,color_pars_fragment:V0,color_pars_vertex:W0,color_vertex:X0,common:q0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:Z0,displacementmap_pars_vertex:$0,displacementmap_vertex:J0,emissivemap_fragment:K0,emissivemap_pars_fragment:Q0,colorspace_fragment:j0,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:gg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:hg,lightmap_fragment:ug,lightmap_pars_fragment:dg,lights_lambert_fragment:fg,lights_lambert_pars_fragment:pg,lights_pars_begin:mg,lights_toon_fragment:xg,lights_toon_pars_fragment:_g,lights_phong_fragment:vg,lights_phong_pars_fragment:yg,lights_physical_fragment:Mg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Eg,lights_fragment_maps:bg,lights_fragment_end:Tg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Ag,logdepthbuf_pars_vertex:Rg,logdepthbuf_vertex:Cg,map_fragment:Pg,map_pars_fragment:Lg,map_particle_fragment:Ig,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ug,metalnessmap_pars_fragment:Ng,morphcolor_vertex:Og,morphnormal_vertex:Fg,morphtarget_pars_vertex:zg,morphtarget_vertex:Bg,normal_fragment_begin:Hg,normal_fragment_maps:kg,normal_pars_fragment:Gg,normal_pars_vertex:Vg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:$g,opaque_fragment:Jg,packing:Kg,premultiplied_alpha_fragment:Qg,project_vertex:jg,dithering_fragment:ex,dithering_pars_fragment:tx,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:rx,shadowmap_vertex:ox,shadowmask_pars_fragment:ax,skinbase_vertex:lx,skinning_pars_vertex:cx,skinning_vertex:hx,skinnormal_vertex:ux,specularmap_fragment:dx,specularmap_pars_fragment:fx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:gx,transmission_pars_fragment:xx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:yx,worldpos_vertex:Mx,background_vert:Sx,background_frag:Ex,backgroundCube_vert:bx,backgroundCube_frag:Tx,cube_vert:wx,cube_frag:Ax,depth_vert:Rx,depth_frag:Cx,distanceRGBA_vert:Px,distanceRGBA_frag:Lx,equirect_vert:Ix,equirect_frag:Dx,linedashed_vert:Ux,linedashed_frag:Nx,meshbasic_vert:Ox,meshbasic_frag:Fx,meshlambert_vert:zx,meshlambert_frag:Bx,meshmatcap_vert:Hx,meshmatcap_frag:kx,meshnormal_vert:Gx,meshnormal_frag:Vx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:qx,meshphysical_frag:Yx,meshtoon_vert:Zx,meshtoon_frag:$x,points_vert:Jx,points_frag:Kx,shadow_vert:Qx,shadow_frag:jx,sprite_vert:e_,sprite_frag:t_},pe={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ei={basic:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:fn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:fn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:fn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Le(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:fn([pe.points,pe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:fn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:fn([pe.common,pe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:fn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:fn([pe.sprite,pe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:fn([pe.common,pe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:fn([pe.lights,pe.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ei.physical={uniforms:fn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};Wo={r:0,b:0,g:0};sr=class extends va{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$s=4,cd=[.125,.215,.35,.446,.526,.582],as=20,sc=new sr,hd=new Le,rc=null,oc=0,ac=0,rs=(1+Math.sqrt(5))/2,Vs=1/rs,ud=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,rs,Vs),new I(0,rs,-Vs),new I(Vs,0,rs),new I(-Vs,0,rs),new I(rs,Vs,0),new I(-rs,Vs,0)],rr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rc,oc,ac),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:$n,format:Zn,colorSpace:yi,depthBuffer:!1},s=dd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(r)),this._blurMaterial=c_(r,e,t)}return s}_compileMaterial(e){let t=new re(this._lodPlanes[0],e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,i,s){let a=new tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(hd),h.toneMapping=Fi,h.autoClear=!1;let m=new ht({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),x=new re(new Oe,m),g=!1,f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,g=!0):(m.color.copy(hd),g=!0);for(let u=0;u<6;u++){let y=u%3;y===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):y===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let _=this._cubeSize;Xo(s,y*_,u>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=f}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===er||e.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new re(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Xo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,sc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ud[(s-1)%ud.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new re(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*as-1),g=r/x,f=isFinite(r)?1+Math.floor(h*g):as;f>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${as}`);let u=[],y=0;for(let w=0;w<as;++w){let F=w/g,v=Math.exp(-F*F/2);u.push(v),w===0?y+=v:w<f&&(y+=2*v)}for(let w=0;w<u.length;w++)u[w]=u[w]/y;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:_}=this;p.dTheta.value=x,p.mipInt.value=_-i;let M=this._sizeLods[s],A=3*M*(s>_-$s?s-_+$s:0),R=4*(this._cubeSize-M);Xo(t,A,R,3*M,2*M),l.setRenderTarget(t),l.render(d,sc)}};Ma=class extends Nn{constructor(e,t,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:hs,h!==hs&&h!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===hs&&(i=Ui),i===void 0&&h===nr&&(i=cs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},af=new Nn,lf=new Ma(1,1);lf.compareFunction=tf;cf=new fa,hf=new bc,uf=new ya,md=[],gd=[],xd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);Ac=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=z_(t.type)}},Rc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sv(t.type)}},Cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},lc=/(\w+)(\])?(\[|\.)?/g;js=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);rv(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};ov=37297,av=0;gv=/^[ \t]*#include +<([\w\d./]+)>/gm;xv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);vv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Av=0,Lc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ic(e),t.set(e,i)),i}},Ic=class{constructor(e){this.id=Av++,this.code=e,this.usedTimes=0}};Uv=0;Dc=class extends Si{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uc=class extends Si{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
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
}`;Nc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},lt=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wv={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let f=t.getJointPose(g,i),u=this._getHandJoint(c,g);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),m=.02,x=.005;c.inputState.pinching&&p>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new lt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Oc=class extends Hi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,m=null,x=null,g=t.getContextAttributes(),f=null,u=null,y=[],_=[],M=new se,A=null,R=new tn;R.layers.enable(1),R.viewport=new Mt;let w=new tn;w.layers.enable(2),w.viewport=new Mt;let F=[R,w],v=new Nc;v.layers.enable(1),v.layers.enable(2);let S=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let te=y[V];return te===void 0&&(te=new Hr,y[V]=te),te.getTargetRaySpace()},this.getControllerGrip=function(V){let te=y[V];return te===void 0&&(te=new Hr,y[V]=te),te.getGripSpace()},this.getHand=function(V){let te=y[V];return te===void 0&&(te=new Hr,y[V]=te),te.getHandSpace()};function O(V){let te=_.indexOf(V.inputSource);if(te===-1)return;let me=y[te];me!==void 0&&(me.update(V.inputSource,V.frame,c||o),me.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",C);for(let V=0;V<y.length;V++){let te=_[V];te!==null&&(_[V]=null,y[V].disconnect(te))}S=null,L=null,e.setRenderTarget(f),m=null,p=null,d=null,s=null,u=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",N),s.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let te={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new mn(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,me=null,Me=null;g.depth&&(Me=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?nr:hs,me=g.stencil?cs:Ui);let Ee={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(Ee),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new mn(p.textureWidth,p.textureHeight,{format:Zn,type:zi,depthTexture:new Ma(p.textureWidth,p.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});let ze=e.properties.get(u);ze.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),he.setContext(s),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(V){for(let te=0;te<V.removed.length;te++){let me=V.removed[te],Me=_.indexOf(me);Me>=0&&(_[Me]=null,y[Me].disconnect(me))}for(let te=0;te<V.added.length;te++){let me=V.added[te],Me=_.indexOf(me);if(Me===-1){for(let ze=0;ze<y.length;ze++)if(ze>=_.length){_.push(me),Me=ze;break}else if(_[ze]===null){_[ze]=me,Me=ze;break}if(Me===-1)break}let Ee=y[Me];Ee&&Ee.connect(me)}}let U=new I,z=new I;function B(V,te,me){U.setFromMatrixPosition(te.matrixWorld),z.setFromMatrixPosition(me.matrixWorld);let Me=U.distanceTo(z),Ee=te.projectionMatrix.elements,ze=me.projectionMatrix.elements,He=Ee[14]/(Ee[10]-1),Ae=Ee[14]/(Ee[10]+1),ke=(Ee[9]+1)/Ee[5],D=(Ee[9]-1)/Ee[5],de=(Ee[8]-1)/Ee[0],Q=(ze[8]+1)/ze[0],ue=He*de,K=He*Q,Pe=Me/(-de+Q),_e=Pe*-de;te.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(_e),V.translateZ(Pe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();let b=He+Pe,E=Ae+Pe,H=ue-_e,ae=K+(Me-_e),ie=ke*Ae/E*b,ne=D*Ae/E*b;V.projectionMatrix.makePerspective(H,ae,ie,ne,b,E),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function G(V,te){te===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(te.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;v.near=w.near=R.near=V.near,v.far=w.far=R.far=V.far,(S!==v.near||L!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,L=v.far);let te=V.parent,me=v.cameras;G(v,te);for(let Me=0;Me<me.length;Me++)G(me[Me],te);me.length===2?B(v,R,w):v.projectionMatrix.copy(R.projectionMatrix),W(V,v,te)};function W(V,te,me){me===null?V.matrix.copy(te.matrixWorld):(V.matrix.copy(me.matrixWorld),V.matrix.invert(),V.matrix.multiply(te.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(te.projectionMatrix),V.projectionMatrixInverse.copy(te.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ca*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(V){l=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let $=null;function J(V,te){if(h=te.getViewerPose(c||o),x=te,h!==null){let me=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Me=!1;me.length!==v.cameras.length&&(v.cameras.length=0,Me=!0);for(let Ee=0;Ee<me.length;Ee++){let ze=me[Ee],He=null;if(m!==null)He=m.getViewport(ze);else{let ke=d.getViewSubImage(p,ze);He=ke.viewport,Ee===0&&(e.setRenderTargetTextures(u,ke.colorTexture,p.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(u))}let Ae=F[Ee];Ae===void 0&&(Ae=new tn,Ae.layers.enable(Ee),Ae.viewport=new Mt,F[Ee]=Ae),Ae.matrix.fromArray(ze.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(ze.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(He.x,He.y,He.width,He.height),Ee===0&&(v.matrix.copy(Ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Me===!0&&v.cameras.push(Ae)}}for(let me=0;me<y.length;me++){let Me=_[me],Ee=y[me];Me!==null&&Ee!==void 0&&Ee.update(Me,te,c||o)}$&&$(V,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),x=null}let he=new of;he.setAnimationLoop(J),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}};qr=class{constructor(e={}){let{canvas:t=n0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let m=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,u=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this._useLegacyLights=!1,this.toneMapping=Fi,this.toneMappingExposure=1;let _=this,M=!1,A=0,R=0,w=null,F=-1,v=null,S=new Mt,L=new Mt,O=null,N=new Le(0),C=0,U=t.width,z=t.height,B=1,G=null,W=null,$=new Mt(0,0,U,z),J=new Mt(0,0,U,z),he=!1,V=new Xr,te=!1,me=!1,Me=null,Ee=new ct,ze=new se,He=new I,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return w===null?B:1}let D=i;function de(T,k){for(let q=0;q<T.length;q++){let Z=T[q],X=t.getContext(Z,k);if(X!==null)return X}return null}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",j,!1),D===null){let k=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&k.shift(),D=de(k,T),D===null)throw de(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,ue,K,Pe,_e,b,E,H,ae,ie,ne,Re,fe,be,Ne,We,le,Je,Ke,Fe,Ue,we,Ye,it;function oe(){Q=new u_(D),ue=new r_(D,Q,e),Q.init(ue),we=new Vv(D,Q,ue),K=new kv(D,Q,ue),Pe=new p_(D),_e=new Cv,b=new Gv(D,Q,K,_e,ue,we,Pe),E=new a_(_),H=new h_(_),ae=new S0(D,ue),Ye=new i_(D,Q,ae,ue),ie=new d_(D,ae,Pe,Ye),ne=new __(D,ie,ae,Pe),Ke=new x_(D,ue,b),We=new o_(_e),Re=new Rv(_,E,H,Q,ue,Ye,We),fe=new Xv(_,_e),be=new Lv,Ne=new Fv(Q,ue),Je=new n_(_,E,H,K,ne,p,l),le=new Hv(_,ne,ue),it=new qv(D,Pe,ue,K),Fe=new s_(D,Q,Pe,ue),Ue=new f_(D,Q,Pe,ue),Pe.programs=Re.programs,_.capabilities=ue,_.extensions=Q,_.properties=_e,_.renderLists=be,_.shadowMap=le,_.state=K,_.info=Pe}oe();let ce=new Oc(_,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(T){T!==void 0&&(B=T,this.setSize(U,z,!1))},this.getSize=function(T){return T.set(U,z)},this.setSize=function(T,k,q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,z=k,t.width=Math.floor(T*B),t.height=Math.floor(k*B),q===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(U*B,z*B).floor()},this.setDrawingBufferSize=function(T,k,q){U=T,z=k,B=q,t.width=Math.floor(T*q),t.height=Math.floor(k*q),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,k,q,Z){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,k,q,Z),K.viewport(S.copy($).multiplyScalar(B).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,k,q,Z){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,k,q,Z),K.scissor(L.copy(J).multiplyScalar(B).floor())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){K.setScissorTest(he=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(T=!0,k=!0,q=!0){let Z=0;if(T){let X=!1;if(w!==null){let Te=w.texture.format;X=Te===Kd||Te===Jd||Te===$d}if(X){let Te=w.texture.type,De=Te===zi||Te===Ui||Te===fh||Te===cs||Te===Yd||Te===Zd,Be=Je.getClearColor(),Ge=Je.getClearAlpha(),je=Be.r,Ze=Be.g,$e=Be.b;De?(m[0]=je,m[1]=Ze,m[2]=$e,m[3]=Ge,D.clearBufferuiv(D.COLOR,0,m)):(x[0]=je,x[1]=Ze,x[2]=$e,x[3]=Ge,D.clearBufferiv(D.COLOR,0,x))}else Z|=D.COLOR_BUFFER_BIT}k&&(Z|=D.DEPTH_BUFFER_BIT),q&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",j,!1),be.dispose(),Ne.dispose(),_e.dispose(),E.dispose(),H.dispose(),ne.dispose(),Ye.dispose(),it.dispose(),Re.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",At),ce.removeEventListener("sessionend",qe),Me&&(Me.dispose(),Me=null),ot.stop()};function Y(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let T=Pe.autoReset,k=le.enabled,q=le.autoUpdate,Z=le.needsUpdate,X=le.type;oe(),Pe.autoReset=T,le.enabled=k,le.autoUpdate=q,le.needsUpdate=Z,le.type=X}function j(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ee(T){let k=T.target;k.removeEventListener("dispose",ee),xe(k)}function xe(T){ve(T),_e.remove(T)}function ve(T){let k=_e.get(T).programs;k!==void 0&&(k.forEach(function(q){Re.releaseProgram(q)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,q,Z,X,Te){k===null&&(k=Ae);let De=X.isMesh&&X.matrixWorld.determinant()<0,Be=Eo(T,k,q,Z,X);K.setMaterial(Z,De);let Ge=q.index,je=1;if(Z.wireframe===!0){if(Ge=ie.getWireframeAttribute(q),Ge===void 0)return;je=2}let Ze=q.drawRange,$e=q.attributes.position,It=Ze.start*je,Tn=(Ze.start+Ze.count)*je;Te!==null&&(It=Math.max(It,Te.start*je),Tn=Math.min(Tn,(Te.start+Te.count)*je)),Ge!==null?(It=Math.max(It,0),Tn=Math.min(Tn,Ge.count)):$e!=null&&(It=Math.max(It,0),Tn=Math.min(Tn,$e.count));let $t=Tn-It;if($t<0||$t===1/0)return;Ye.setup(X,Z,Be,q,Ge);let li,St=Fe;if(Ge!==null&&(li=ae.get(Ge),St=Ue,St.setIndex(li)),X.isMesh)Z.wireframe===!0?(K.setLineWidth(Z.wireframeLinewidth*ke()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(X.isLine){let et=Z.linewidth;et===void 0&&(et=1),K.setLineWidth(et*ke()),X.isLineSegments?St.setMode(D.LINES):X.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else X.isPoints?St.setMode(D.POINTS):X.isSprite&&St.setMode(D.TRIANGLES);if(X.isBatchedMesh)St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)St.renderInstances(It,$t,X.count);else if(q.isInstancedBufferGeometry){let et=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Al=Math.min(q.instanceCount,et);St.renderInstances(It,$t,Al)}else St.render(It,$t)};function Xe(T,k,q){T.transparent===!0&&T.side===Et&&T.forceSinglePass===!1?(T.side=Qt,T.needsUpdate=!0,Bt(T,k,q),T.side=Bi,T.needsUpdate=!0,Bt(T,k,q),T.side=Et):Bt(T,k,q)}this.compile=function(T,k,q=null){q===null&&(q=T),f=Ne.get(q),f.init(),y.push(f),q.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(f.pushLight(X),X.castShadow&&f.pushShadow(X))}),f.setupLights(_._useLegacyLights);let Z=new Set;return T.traverse(function(X){let Te=X.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){let Be=Te[De];Xe(Be,q,X),Z.add(Be)}else Xe(Te,q,X),Z.add(Te)}),y.pop(),f=null,Z},this.compileAsync=function(T,k,q=null){let Z=this.compile(T,k,q);return new Promise(X=>{function Te(){if(Z.forEach(function(De){_e.get(De).currentProgram.isReady()&&Z.delete(De)}),Z.size===0){X(T);return}setTimeout(Te,10)}Q.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let nt=null;function dt(T){nt&&nt(T)}function At(){ot.stop()}function qe(){ot.start()}let ot=new of;ot.setAnimationLoop(dt),typeof self<"u"&&ot.setContext(self),this.setAnimationLoop=function(T){nt=T,ce.setAnimationLoop(T),T===null?ot.stop():ot.start()},ce.addEventListener("sessionstart",At),ce.addEventListener("sessionend",qe),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,k,w),f=Ne.get(T,y.length),f.init(),y.push(f),Ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),V.setFromProjectionMatrix(Ee),me=this.localClippingEnabled,te=We.init(this.clippingPlanes,me),g=be.get(T,u.length),g.init(),u.push(g),un(T,k,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(G,W),this.info.render.frame++,te===!0&&We.beginShadows();let q=f.state.shadowsArray;if(le.render(q,T,k),te===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),Je.render(g,T),f.setupLights(_._useLegacyLights),k.isArrayCamera){let Z=k.cameras;for(let X=0,Te=Z.length;X<Te;X++){let De=Z[X];Ai(g,T,De,De.viewport)}}else Ai(g,T,k);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,k),Ye.resetDefaultState(),F=-1,v=null,y.pop(),y.length>0?f=y[y.length-1]:f=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function un(T,k,q,Z){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){Z&&He.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);let De=ne.update(T),Be=T.material;Be.visible&&g.push(T,De,Be,q,He.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){let De=ne.update(T),Be=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),He.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),He.copy(De.boundingSphere.center)),He.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(Be)){let Ge=De.groups;for(let je=0,Ze=Ge.length;je<Ze;je++){let $e=Ge[je],It=Be[$e.materialIndex];It&&It.visible&&g.push(T,De,It,q,He.z,$e)}}else Be.visible&&g.push(T,De,Be,q,He.z,null)}}let Te=T.children;for(let De=0,Be=Te.length;De<Be;De++)un(Te[De],k,q,Z)}function Ai(T,k,q,Z){let X=T.opaque,Te=T.transmissive,De=T.transparent;f.setupLightsView(q),te===!0&&We.setGlobalState(_.clippingPlanes,q),Te.length>0&&Ri(X,Te,k,q),Z&&K.viewport(S.copy(Z)),X.length>0&&pt(X,k,q),Te.length>0&&pt(Te,k,q),De.length>0&&pt(De,k,q),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Ri(T,k,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;let Te=ue.isWebGL2;Me===null&&(Me=new mn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?$n:zi,minFilter:Wr,samples:Te?4:0})),_.getDrawingBufferSize(ze),Te?Me.setSize(ze.x,ze.y):Me.setSize(Sc(ze.x),Sc(ze.y));let De=_.getRenderTarget();_.setRenderTarget(Me),_.getClearColor(N),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();let Be=_.toneMapping;_.toneMapping=Fi,pt(T,q,Z),b.updateMultisampleRenderTarget(Me),b.updateRenderTargetMipmap(Me);let Ge=!1;for(let je=0,Ze=k.length;je<Ze;je++){let $e=k[je],It=$e.object,Tn=$e.geometry,$t=$e.material,li=$e.group;if($t.side===Et&&It.layers.test(Z.layers)){let St=$t.side;$t.side=Qt,$t.needsUpdate=!0,vt(It,q,Z,Tn,$t,li),$t.side=St,$t.needsUpdate=!0,Ge=!0}}Ge===!0&&(b.updateMultisampleRenderTarget(Me),b.updateRenderTargetMipmap(Me)),_.setRenderTarget(De),_.setClearColor(N,C),_.toneMapping=Be}function pt(T,k,q){let Z=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Te=T.length;X<Te;X++){let De=T[X],Be=De.object,Ge=De.geometry,je=Z===null?De.material:Z,Ze=De.group;Be.layers.test(q.layers)&&vt(Be,k,q,Ge,je,Ze)}}function vt(T,k,q,Z,X,Te){T.onBeforeRender(_,k,q,Z,X,Te),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(_,k,q,Z,T,Te),X.transparent===!0&&X.side===Et&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,_.renderBufferDirect(q,k,Z,X,T,Te),X.side=Bi,X.needsUpdate=!0,_.renderBufferDirect(q,k,Z,X,T,Te),X.side=Et):_.renderBufferDirect(q,k,Z,X,T,Te),T.onAfterRender(_,k,q,Z,X,Te)}function Bt(T,k,q){k.isScene!==!0&&(k=Ae);let Z=_e.get(T),X=f.state.lights,Te=f.state.shadowsArray,De=X.state.version,Be=Re.getParameters(T,X.state,Te,k,q),Ge=Re.getProgramCacheKey(Be),je=Z.programs;Z.environment=T.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(T.isMeshStandardMaterial?H:E).get(T.envMap||Z.environment),je===void 0&&(T.addEventListener("dispose",ee),je=new Map,Z.programs=je);let Ze=je.get(Ge);if(Ze!==void 0){if(Z.currentProgram===Ze&&Z.lightsStateVersion===De)return Tr(T,Be),Ze}else Be.uniforms=Re.getUniforms(T),T.onBuild(q,Be,_),T.onBeforeCompile(Be,_),Ze=Re.acquireProgram(Be,Ge),je.set(Ge,Ze),Z.uniforms=Be.uniforms;let $e=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=We.uniform),Tr(T,Be),Z.needsLights=Ar(T),Z.lightsStateVersion=De,Z.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),Z.currentProgram=Ze,Z.uniformsList=null,Ze}function As(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=js.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Tr(T,k){let q=_e.get(T);q.outputColorSpace=k.outputColorSpace,q.batching=k.batching,q.instancing=k.instancing,q.instancingColor=k.instancingColor,q.skinning=k.skinning,q.morphTargets=k.morphTargets,q.morphNormals=k.morphNormals,q.morphColors=k.morphColors,q.morphTargetsCount=k.morphTargetsCount,q.numClippingPlanes=k.numClippingPlanes,q.numIntersection=k.numClipIntersection,q.vertexAlphas=k.vertexAlphas,q.vertexTangents=k.vertexTangents,q.toneMapping=k.toneMapping}function Eo(T,k,q,Z,X){k.isScene!==!0&&(k=Ae),b.resetTextureUnits();let Te=k.fog,De=Z.isMeshStandardMaterial?k.environment:null,Be=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:yi,Ge=(Z.isMeshStandardMaterial?H:E).get(Z.envMap||De),je=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ze=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),$e=!!q.morphAttributes.position,It=!!q.morphAttributes.normal,Tn=!!q.morphAttributes.color,$t=Fi;Z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&($t=_.toneMapping);let li=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=li!==void 0?li.length:0,et=_e.get(Z),Al=f.state.lights;if(te===!0&&(me===!0||T!==v)){let Ln=T===v&&Z.id===F;We.setState(Z,T,Ln)}let Rt=!1;Z.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Al.state.version||et.outputColorSpace!==Be||X.isBatchedMesh&&et.batching===!1||!X.isBatchedMesh&&et.batching===!0||X.isInstancedMesh&&et.instancing===!1||!X.isInstancedMesh&&et.instancing===!0||X.isSkinnedMesh&&et.skinning===!1||!X.isSkinnedMesh&&et.skinning===!0||X.isInstancedMesh&&et.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&et.instancingColor===!1&&X.instanceColor!==null||et.envMap!==Ge||Z.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==We.numPlanes||et.numIntersection!==We.numIntersection)||et.vertexAlphas!==je||et.vertexTangents!==Ze||et.morphTargets!==$e||et.morphNormals!==It||et.morphColors!==Tn||et.toneMapping!==$t||ue.isWebGL2===!0&&et.morphTargetsCount!==St)&&(Rt=!0):(Rt=!0,et.__version=Z.version);let ji=et.currentProgram;Rt===!0&&(ji=Bt(Z,k,X));let lu=!1,Rr=!1,Rl=!1,sn=ji.getUniforms(),es=et.uniforms;if(K.useProgram(ji.program)&&(lu=!0,Rr=!0,Rl=!0),Z.id!==F&&(F=Z.id,Rr=!0),lu||v!==T){sn.setValue(D,"projectionMatrix",T.projectionMatrix),sn.setValue(D,"viewMatrix",T.matrixWorldInverse);let Ln=sn.map.cameraPosition;Ln!==void 0&&Ln.setValue(D,He.setFromMatrixPosition(T.matrixWorld)),ue.logarithmicDepthBuffer&&sn.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&sn.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Rr=!0,Rl=!0)}if(X.isSkinnedMesh){sn.setOptional(D,X,"bindMatrix"),sn.setOptional(D,X,"bindMatrixInverse");let Ln=X.skeleton;Ln&&(ue.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),sn.setValue(D,"boneTexture",Ln.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(sn.setOptional(D,X,"batchingTexture"),sn.setValue(D,"batchingTexture",X._matricesTexture,b));let Cl=q.morphAttributes;if((Cl.position!==void 0||Cl.normal!==void 0||Cl.color!==void 0&&ue.isWebGL2===!0)&&Ke.update(X,q,ji),(Rr||et.receiveShadow!==X.receiveShadow)&&(et.receiveShadow=X.receiveShadow,sn.setValue(D,"receiveShadow",X.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(es.envMap.value=Ge,es.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Rr&&(sn.setValue(D,"toneMappingExposure",_.toneMappingExposure),et.needsLights&&wr(es,Rl),Te&&Z.fog===!0&&fe.refreshFogUniforms(es,Te),fe.refreshMaterialUniforms(es,Z,B,z,Me),js.upload(D,As(et),es,b)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(js.upload(D,As(et),es,b),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&sn.setValue(D,"center",X.center),sn.setValue(D,"modelViewMatrix",X.modelViewMatrix),sn.setValue(D,"normalMatrix",X.normalMatrix),sn.setValue(D,"modelMatrix",X.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Ln=Z.uniformsGroups;for(let Pl=0,rm=Ln.length;Pl<rm;Pl++)if(ue.isWebGL2){let cu=Ln[Pl];it.update(cu,ji),it.bind(cu,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function wr(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Ar(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,k,q){_e.get(T.texture).__webglTexture=k,_e.get(T.depthTexture).__webglTexture=q;let Z=_e.get(T);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){let q=_e.get(T);q.__webglFramebuffer=k,q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,q=0){w=T,A=k,R=q;let Z=!0,X=null,Te=!1,De=!1;if(T){let Ge=_e.get(T);Ge.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1):Ge.__webglFramebuffer===void 0?b.setupRenderTarget(T):Ge.__hasExternalTextures&&b.rebindTextures(T,_e.get(T.texture).__webglTexture,_e.get(T.depthTexture).__webglTexture);let je=T.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(De=!0);let Ze=_e.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ze[k])?X=Ze[k][q]:X=Ze[k],Te=!0):ue.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?X=_e.get(T).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[q]:X=Ze,S.copy(T.viewport),L.copy(T.scissor),O=T.scissorTest}else S.copy($).multiplyScalar(B).floor(),L.copy(J).multiplyScalar(B).floor(),O=he;if(K.bindFramebuffer(D.FRAMEBUFFER,X)&&ue.drawBuffers&&Z&&K.drawBuffers(T,X),K.viewport(S),K.scissor(L),K.setScissorTest(O),Te){let Ge=_e.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ge.__webglTexture,q)}else if(De){let Ge=_e.get(T.texture),je=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,q||0,je)}F=-1},this.readRenderTargetPixels=function(T,k,q,Z,X,Te,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=_e.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){K.bindFramebuffer(D.FRAMEBUFFER,Be);try{let Ge=T.texture,je=Ge.format,Ze=Ge.type;if(je!==Zn&&we.convert(je)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $e=Ze===$n&&(Q.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ze!==zi&&we.convert(Ze)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ze===Ni&&(ue.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!$e){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-Z&&q>=0&&q<=T.height-X&&D.readPixels(k,q,Z,X,we.convert(je),we.convert(Ze),Te)}finally{let Ge=w!==null?_e.get(w).__webglFramebuffer:null;K.bindFramebuffer(D.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(T,k,q=0){let Z=Math.pow(2,-q),X=Math.floor(k.image.width*Z),Te=Math.floor(k.image.height*Z);b.setTexture2D(k,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,T.x,T.y,X,Te),K.unbindTexture()},this.copyTextureToTexture=function(T,k,q,Z=0){let X=k.image.width,Te=k.image.height,De=we.convert(q.format),Be=we.convert(q.type);b.setTexture2D(q,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,q.unpackAlignment),k.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Z,T.x,T.y,X,Te,De,Be,k.image.data):k.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Z,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,De,k.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,Z,T.x,T.y,De,Be,k.image),Z===0&&q.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(T,k,q,Z,X=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=T.max.x-T.min.x+1,De=T.max.y-T.min.y+1,Be=T.max.z-T.min.z+1,Ge=we.convert(Z.format),je=we.convert(Z.type),Ze;if(Z.isData3DTexture)b.setTexture3D(Z,0),Ze=D.TEXTURE_3D;else if(Z.isDataArrayTexture||Z.isCompressedArrayTexture)b.setTexture2DArray(Z,0),Ze=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Z.unpackAlignment);let $e=D.getParameter(D.UNPACK_ROW_LENGTH),It=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Tn=D.getParameter(D.UNPACK_SKIP_PIXELS),$t=D.getParameter(D.UNPACK_SKIP_ROWS),li=D.getParameter(D.UNPACK_SKIP_IMAGES),St=q.isCompressedTexture?q.mipmaps[X]:q.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,St.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,T.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,T.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,T.min.z),q.isDataTexture||q.isData3DTexture?D.texSubImage3D(Ze,X,k.x,k.y,k.z,Te,De,Be,Ge,je,St.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Ze,X,k.x,k.y,k.z,Te,De,Be,Ge,St.data)):D.texSubImage3D(Ze,X,k.x,k.y,k.z,Te,De,Be,Ge,je,St),D.pixelStorei(D.UNPACK_ROW_LENGTH,$e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tn),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,li),X===0&&Z.generateMipmaps&&D.generateMipmap(Ze),K.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){A=0,R=0,w=null,K.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ph?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===Ga?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xt?us:jd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===us?xt:yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Fc=class extends qr{};Fc.prototype.isWebGL1Renderer=!0;Sa=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},or=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},zc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=yc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=_i()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_i()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},dn=new I,Ea=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new an(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ds=class extends Si{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dr=new I,Xs=new I,qs=new I,Ys=new se,Ur=new se,df=new ct,qo=new I,Nr=new I,Yo=new I,Pd=new se,cc=new se,Ld=new se,ar=class extends Dt{constructor(e=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zc(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new Ea(i,3,0,!1)),Ws.setAttribute("uv",new Ea(i,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new se(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),df.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-qs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Zo(qo.set(-.5,-.5,0),qs,o,Xs,s,r),Zo(Nr.set(.5,-.5,0),qs,o,Xs,s,r),Zo(Yo.set(.5,.5,0),qs,o,Xs,s,r),Pd.set(0,0),cc.set(1,0),Ld.set(1,1);let a=e.ray.intersectTriangle(qo,Nr,Yo,!1,Dr);if(a===null&&(Zo(Nr.set(-.5,.5,0),qs,o,Xs,s,r),cc.set(0,1),a=e.ray.intersectTriangle(qo,Yo,Nr,!1,Dr),a===null))return;let l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:ls.getInterpolation(Dr,qo,Nr,Yo,Pd,cc,Ld,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};ba=class extends an{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new ct,Id=new ct,$o=[],Dd=new Mi,Yv=new ct,Or=new re,Fr=new ki,Yt=class extends re{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ba(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Yv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),Dd.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Zs),Fr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(i),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),Id.multiplyMatrices(i,Zs),Or.matrixWorld=Id,Or.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let l=$o[o];l.instanceId=r,l.object=this,t.push(l)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ba(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}},Yr=class extends Si{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new ct,Bc=new pa,Jo=new ki,Ko=new I,Ta=class extends Dt{constructor(e=new kt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;Ud.copy(s).invert(),Bc.copy(e.ray).applyMatrix4(Ud);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=p,g=m;x<g;x++){let f=c.getX(x);Ko.fromBufferAttribute(d,f),Nd(Ko,f,l,s,e,t,this)}}else{let p=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=p,g=m;x<g;x++)Ko.fromBufferAttribute(d,x),Nd(Ko,x,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};yn=class extends Nn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],p=i[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new se:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new I,s=[],r=[],o=[],a=new I,l=new ct;for(let m=0;m<=e;m++){let x=m/e;s[m]=this.getTangentAt(x,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Kt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,x))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Kt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],m*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends Fn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let i=t||new se,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*h-m*d+this.aX,c=p*d+m*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hc=class extends Zr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};Qo=new I,hc=new gh,uc=new gh,dc=new gh,kc=class extends Fn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Qo.subVectors(s[0],s[1]).add(s[0]),c=Qo);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(d),m),g=Math.pow(d.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(h),m);g<1e-4&&(g=1),x<1e-4&&(x=g),f<1e-4&&(f=g),hc.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,x,g,f),uc.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,x,g,f),dc.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,x,g,f)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),uc.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),dc.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return i.set(hc.calc(l),uc.calc(l),dc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};wa=class extends Fn{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gr(e,s.x,r.x,o.x,a.x),Gr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gc=class extends Fn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Gr(e,s.x,r.x,o.x,a.x),Gr(e,s.y,r.y,o.y,a.y),Gr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Fn{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends Fn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Fn{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(kr(e,s.x,r.x,o.x),kr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wc=class extends Fn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(kr(e,s.x,r.x,o.x),kr(e,s.y,r.y,o.y),kr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Od(a,l.x,c.x,h.x,d.x),Od(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},Xc=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:kc,CubicBezierCurve:wa,CubicBezierCurve3:Gc,EllipseCurve:Zr,LineCurve:Aa,LineCurve3:Vc,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:Wc,SplineCurve:Ca}),qc=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Xc[s.type]().fromJSON(s))}return this}},fs=class extends qc{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Aa(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Ra(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new wa(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ca(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Zr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Yc=class n extends kt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Kt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new I,p=new se,m=new I,x=new I,g=new I,f=0,u=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:f=e[y+1].x-e[y].x,u=e[y+1].y-e[y].y,m.x=u*1,m.y=-f,m.z=u*0,g.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:f=e[y+1].x-e[y].x,u=e[y+1].y-e[y].y,m.x=u*1,m.y=-f,m.z=u*0,x.copy(m),m.x+=g.x,m.y+=g.y,m.z+=g.z,m.normalize(),l.push(m.x,m.y,m.z),g.copy(x)}for(let y=0;y<=t;y++){let _=i+y*h*s,M=Math.sin(_),A=Math.cos(_);for(let R=0;R<=e.length-1;R++){d.x=e[R].x*M,d.y=e[R].y,d.z=e[R].x*A,o.push(d.x,d.y,d.z),p.x=y/t,p.y=R/(e.length-1),a.push(p.x,p.y);let w=l[3*R+0]*M,F=l[3*R+1],v=l[3*R+0]*A;c.push(w,F,v)}}for(let y=0;y<t;y++)for(let _=0;_<e.length-1;_++){let M=_+y*e.length,A=M,R=M+e.length,w=M+e.length+1,F=M+1;r.push(A,R,F),r.push(w,F,R)}this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Pa=class n extends Yc{constructor(e=1,t=1,i=4,s=8){let r=new fs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},La=class n extends kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){let m=i+d/t*s;c.x=e*Math.cos(m),c.y=e*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Tt=class n extends kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],m=[],x=0,g=[],f=i/2,u=0;y(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(m,2));function y(){let M=new I,A=new I,R=0,w=(t-e)/i;for(let F=0;F<=r;F++){let v=[],S=F/r,L=S*(t-e)+e;for(let O=0;O<=s;O++){let N=O/s,C=N*l+a,U=Math.sin(C),z=Math.cos(C);A.x=L*U,A.y=-S*i+f,A.z=L*z,d.push(A.x,A.y,A.z),M.set(U,w,z).normalize(),p.push(M.x,M.y,M.z),m.push(N,1-S),v.push(x++)}g.push(v)}for(let F=0;F<s;F++)for(let v=0;v<r;v++){let S=g[v][F],L=g[v+1][F],O=g[v+1][F+1],N=g[v][F+1];h.push(S,L,N),h.push(L,O,N),R+=6}c.addGroup(u,R,0),u+=R}function _(M){let A=x,R=new se,w=new I,F=0,v=M===!0?e:t,S=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,f*S,0),p.push(0,S,0),m.push(.5,.5),x++;let L=x;for(let O=0;O<=s;O++){let C=O/s*l+a,U=Math.cos(C),z=Math.sin(C);w.x=v*z,w.y=f*S,w.z=v*U,d.push(w.x,w.y,w.z),p.push(0,S,0),R.x=U*.5+.5,R.y=z*.5*S+.5,m.push(R.x,R.y),x++}for(let O=0;O<s;O++){let N=A+O,C=L+O;M===!0?h.push(C,C+1,N):h.push(C+1,C,N),F+=3}c.addGroup(u,F,M===!0?1:2),u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},lr=class n extends Tt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$r=class extends fs{constructor(e){super(e),this.uuid=_i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new fs().fromJSON(s))}return this}},ty={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ff(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,p,m;if(i&&(r=oy(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let x=t;x<s;x+=t)d=n[x],p=n[x+1],d<a&&(a=d),p<l&&(l=p),d>c&&(c=d),p>h&&(h=p);m=Math.max(c-a,h-l),m=m!==0?32767/m:0}return Jr(r,o,t,a,l,m,0),o}};Vr=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];zd(e),Bd(i,e);let o=e.length;t.forEach(zd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bd(i,t[l]);let a=ty.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};Ia=class n extends kt{constructor(e=new $r([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new st(s,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:m-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:_y,_,M=!1,A,R,w,F;u&&(_=u.getSpacedPoints(h),M=!0,p=!1,A=u.computeFrenetFrames(h,!1),R=new I,w=new I,F=new I),p||(f=0,m=0,x=0,g=0);let v=a.extractPoints(c),S=v.shape,L=v.holes;if(!Vr.isClockWise(S)){S=S.reverse();for(let D=0,de=L.length;D<de;D++){let Q=L[D];Vr.isClockWise(Q)&&(L[D]=Q.reverse())}}let N=Vr.triangulateShape(S,L),C=S;for(let D=0,de=L.length;D<de;D++){let Q=L[D];S=S.concat(Q)}function U(D,de,Q){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(de,Q)}let z=S.length,B=N.length;function G(D,de,Q){let ue,K,Pe,_e=D.x-de.x,b=D.y-de.y,E=Q.x-D.x,H=Q.y-D.y,ae=_e*_e+b*b,ie=_e*H-b*E;if(Math.abs(ie)>Number.EPSILON){let ne=Math.sqrt(ae),Re=Math.sqrt(E*E+H*H),fe=de.x-b/ne,be=de.y+_e/ne,Ne=Q.x-H/Re,We=Q.y+E/Re,le=((Ne-fe)*H-(We-be)*E)/(_e*H-b*E);ue=fe+_e*le-D.x,K=be+b*le-D.y;let Je=ue*ue+K*K;if(Je<=2)return new se(ue,K);Pe=Math.sqrt(Je/2)}else{let ne=!1;_e>Number.EPSILON?E>Number.EPSILON&&(ne=!0):_e<-Number.EPSILON?E<-Number.EPSILON&&(ne=!0):Math.sign(b)===Math.sign(H)&&(ne=!0),ne?(ue=-b,K=_e,Pe=Math.sqrt(ae)):(ue=_e,K=b,Pe=Math.sqrt(ae/2))}return new se(ue/Pe,K/Pe)}let W=[];for(let D=0,de=C.length,Q=de-1,ue=D+1;D<de;D++,Q++,ue++)Q===de&&(Q=0),ue===de&&(ue=0),W[D]=G(C[D],C[Q],C[ue]);let $=[],J,he=W.concat();for(let D=0,de=L.length;D<de;D++){let Q=L[D];J=[];for(let ue=0,K=Q.length,Pe=K-1,_e=ue+1;ue<K;ue++,Pe++,_e++)Pe===K&&(Pe=0),_e===K&&(_e=0),J[ue]=G(Q[ue],Q[Pe],Q[_e]);$.push(J),he=he.concat(J)}for(let D=0;D<f;D++){let de=D/f,Q=m*Math.cos(de*Math.PI/2),ue=x*Math.sin(de*Math.PI/2)+g;for(let K=0,Pe=C.length;K<Pe;K++){let _e=U(C[K],W[K],ue);Ee(_e.x,_e.y,-Q)}for(let K=0,Pe=L.length;K<Pe;K++){let _e=L[K];J=$[K];for(let b=0,E=_e.length;b<E;b++){let H=U(_e[b],J[b],ue);Ee(H.x,H.y,-Q)}}}let V=x+g;for(let D=0;D<z;D++){let de=p?U(S[D],he[D],V):S[D];M?(w.copy(A.normals[0]).multiplyScalar(de.x),R.copy(A.binormals[0]).multiplyScalar(de.y),F.copy(_[0]).add(w).add(R),Ee(F.x,F.y,F.z)):Ee(de.x,de.y,0)}for(let D=1;D<=h;D++)for(let de=0;de<z;de++){let Q=p?U(S[de],he[de],V):S[de];M?(w.copy(A.normals[D]).multiplyScalar(Q.x),R.copy(A.binormals[D]).multiplyScalar(Q.y),F.copy(_[D]).add(w).add(R),Ee(F.x,F.y,F.z)):Ee(Q.x,Q.y,d/h*D)}for(let D=f-1;D>=0;D--){let de=D/f,Q=m*Math.cos(de*Math.PI/2),ue=x*Math.sin(de*Math.PI/2)+g;for(let K=0,Pe=C.length;K<Pe;K++){let _e=U(C[K],W[K],ue);Ee(_e.x,_e.y,d+Q)}for(let K=0,Pe=L.length;K<Pe;K++){let _e=L[K];J=$[K];for(let b=0,E=_e.length;b<E;b++){let H=U(_e[b],J[b],ue);M?Ee(H.x,H.y+_[h-1].y,_[h-1].x+Q):Ee(H.x,H.y,d+Q)}}}te(),me();function te(){let D=s.length/3;if(p){let de=0,Q=z*de;for(let ue=0;ue<B;ue++){let K=N[ue];ze(K[2]+Q,K[1]+Q,K[0]+Q)}de=h+f*2,Q=z*de;for(let ue=0;ue<B;ue++){let K=N[ue];ze(K[0]+Q,K[1]+Q,K[2]+Q)}}else{for(let de=0;de<B;de++){let Q=N[de];ze(Q[2],Q[1],Q[0])}for(let de=0;de<B;de++){let Q=N[de];ze(Q[0]+z*h,Q[1]+z*h,Q[2]+z*h)}}i.addGroup(D,s.length/3-D,0)}function me(){let D=s.length/3,de=0;Me(C,de),de+=C.length;for(let Q=0,ue=L.length;Q<ue;Q++){let K=L[Q];Me(K,de),de+=K.length}i.addGroup(D,s.length/3-D,1)}function Me(D,de){let Q=D.length;for(;--Q>=0;){let ue=Q,K=Q-1;K<0&&(K=D.length-1);for(let Pe=0,_e=h+f*2;Pe<_e;Pe++){let b=z*Pe,E=z*(Pe+1),H=de+ue+b,ae=de+K+b,ie=de+K+E,ne=de+ue+E;He(H,ae,ie,ne)}}}function Ee(D,de,Q){l.push(D),l.push(de),l.push(Q)}function ze(D,de,Q){Ae(D),Ae(de),Ae(Q);let ue=s.length/3,K=y.generateTopUV(i,s,ue-3,ue-2,ue-1);ke(K[0]),ke(K[1]),ke(K[2])}function He(D,de,Q,ue){Ae(D),Ae(de),Ae(ue),Ae(de),Ae(Q),Ae(ue);let K=s.length/3,Pe=y.generateSideWallUV(i,s,K-6,K-3,K-2,K-1);ke(Pe[0]),ke(Pe[1]),ke(Pe[3]),ke(Pe[1]),ke(Pe[2]),ke(Pe[3])}function Ae(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function ke(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return vy(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xc[s.type]().fromJSON(s)),new n(i,e.options)}},_y={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new se(r,o),new se(a,l),new se(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],p=e[s*3],m=e[s*3+1],x=e[s*3+2],g=e[r*3],f=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new se(o,1-l),new se(c,1-d),new se(p,1-x),new se(g,1-u)]:[new se(a,1-l),new se(h,1-d),new se(m,1-x),new se(f,1-u)]}};Gi=class n extends kt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,p=(t-e)/s,m=new I,x=new se;for(let g=0;g<=s;g++){for(let f=0;f<=i;f++){let u=r+f/i*o;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,h.push(x.x,x.y)}d+=p}for(let g=0;g<s;g++){let f=g*(i+1);for(let u=0;u<i;u++){let y=u+f,_=y,M=y+i+1,A=y+i+2,R=y+1;a.push(_,M,R),a.push(M,A,R)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},en=class n extends kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,p=new I,m=[],x=[],g=[],f=[];for(let u=0;u<=i;u++){let y=[],_=u/i,M=0;u===0&&o===0?M=.5/t:u===i&&l===Math.PI&&(M=-.5/t);for(let A=0;A<=t;A++){let R=A/t;d.x=-e*Math.cos(s+R*r)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(s+R*r)*Math.sin(o+_*a),x.push(d.x,d.y,d.z),p.copy(d).normalize(),g.push(p.x,p.y,p.z),f.push(R+M,1-_),y.push(c++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<t;y++){let _=h[u][y+1],M=h[u][y],A=h[u+1][y],R=h[u+1][y+1];(u!==0||o>0)&&m.push(_,M,R),(u!==i-1||l<Math.PI)&&m.push(M,A,R)}this.setIndex(m),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(g,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Da=class n extends kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,p=new I;for(let m=0;m<=i;m++)for(let x=0;x<=s;x++){let g=x/s*r,f=m/i*Math.PI*2;d.x=(e+t*Math.cos(f))*Math.cos(g),d.y=(e+t*Math.cos(f))*Math.sin(g),d.z=t*Math.sin(f),a.push(d.x,d.y,d.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(x/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let x=1;x<=s;x++){let g=(s+1)*m+x-1,f=(s+1)*(m-1)+x-1,u=(s+1)*(m-1)+x,y=(s+1)*m+x;o.push(g,f,y),o.push(f,u,y)}this.setIndex(o),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ua=class extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ye=class extends Si{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vi=class extends ye{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};cr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends cr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gu:r=e,a=2*t-i;break;case Vu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gu:o=e,l=2*i-t;break;case Vu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,x=(i-t)/(s-t),g=x*x,f=g*x,u=-p*f+2*p*g-p*x,y=(1+p)*f+(-1.5-2*p)*g+(-.5+p)*x+1,_=(-1-m)*f+(1.5+m)*g+.5*x,M=m*f-m*g;for(let A=0;A!==a;++A)r[A]=u*o[h+A]+y*o[c+A]+_*o[l+A]+M*o[d+A];return r}},Kc=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*h;return r}},Qc=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case sa:t=this.InterpolantFactoryMethodLinear;break;case zl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&yy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,p=d-i,m=d+i;for(let x=0;x!==i;++x){let g=t[d+x];if(g!==t[p+x]||g!==t[m+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,p=o*i;for(let m=0;m!==i;++m)t[p+m]=t[d+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=sa;ms=class extends Jn{};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=ia;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;jc=class extends Jn{};jc.prototype.ValueTypeName="color";eh=class extends Jn{};eh.prototype.ValueTypeName="number";th=class extends cr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)On.slerpFlat(r,0,o,c-a,o,c,l);return r}},jr=class extends Jn{InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}};jr.prototype.ValueTypeName="quaternion";jr.prototype.DefaultInterpolation=sa;jr.prototype.InterpolantFactoryMethodSmooth=void 0;gs=class extends Jn{};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ia;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;nh=class extends Jn{};nh.prototype.ValueTypeName="vector";ih=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let m=c[d],x=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return x}return null}}},My=new ih,sh=class{constructor(e){this.manager=e!==void 0?e:My,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};sh.DEFAULT_MATERIAL_NAME="__DEFAULT";hr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Na=class extends hr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fc=new ct,Hd=new I,kd=new I,eo=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},rh=class extends eo{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=ca*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oa=class extends hr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new rh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Gd=new ct,zr=new I,pc=new I,oh=class extends eo{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),i.position.copy(zr),pc.copy(i.position),pc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(pc),i.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),Gd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd)}},Fa=class extends hr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new oh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ah=class extends eo{constructor(){super(new sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},za=class extends hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new ah}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ba=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};xh="\\[\\]\\.:\\/",Sy=new RegExp("["+xh+"]","g"),_h="[^"+xh+"]",Ey="[^"+xh.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",_h),Ty=/(WCOD+)?/.source.replace("WCOD",Ey),wy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),Ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),Ry=new RegExp("^"+by+Ty+wy+Ay+"$"),Cy=["material","materials","bones","map"],lh=class{constructor(e,t,i){let s=i||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},yt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sy,"")}static parseTrackName(e){let t=Ry.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Cy.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=lh;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];AS=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160")});var Sp={};Ll(Sp,{RoomEnvironment:()=>Hh});function mr(n){let e=new ht;return e.color.setScalar(n),e}var Hh,Ep=wn(()=>{Ut();Hh=class extends or{constructor(e=null){super();let t=new Oe;t.deleteAttribute("uv");let i=new ye({side:Qt}),s=new ye,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Fa(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new re(t,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new re(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new re(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new re(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new re(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let p=new re(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let m=new re(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let x=new re(t,mr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let g=new re(t,mr(50));g.position.set(-16.109,18.021,-8.207),g.scale.set(.1,2.425,2.751),this.add(g);let f=new re(t,mr(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);let u=new re(t,mr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let y=new re(t,mr(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let _=new re(t,mr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}}});var ll,kh=wn(()=>{ll={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`}});var Cn,KM,Gh,QM,Yi,gr=wn(()=>{Ut();Cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},KM=new sr(-1,1,1,-1,0,1),Gh=class extends kt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},QM=new Gh,Yi=class{constructor(e){this._mesh=new re(QM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,KM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}});var xr,Vh=wn(()=>{Ut();gr();xr=class extends Cn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wi.clone(e.uniforms),this.material=new Gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Yi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var po,cl,Wh=wn(()=>{gr();po=class extends Cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},cl=class extends Cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}});var hl,bp=wn(()=>{Ut();kh();Vh();Wh();Wh();hl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new se);this._width=i.width,this._height=i.height,t=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xr(ll),this.copyPass.material.blending=ti,this.clock=new Ba}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}po!==void 0&&(o instanceof po?i=!0:o instanceof cl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}});var ul,Tp=wn(()=>{Ut();gr();ul=class extends Cn{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}});var wp,Ap=wn(()=>{Ut();wp={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`}});var _r,Rp=wn(()=>{Ut();gr();kh();Ap();_r=class n extends Cn{constructor(e,t,i,s){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,o,{type:$n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){let p=new mn(r,o,{type:$n});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let m=new mn(r,o,{type:$n});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}let a=wp;this.highPassUniforms=Wi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Gt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new se(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ll;this.copyUniforms=Wi.clone(h.uniforms),this.blendMaterial=new Gt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.basic=new ht,this.fsQuad=new Yi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new se(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};_r.BlurDirectionX=new se(1,0);_r.BlurDirectionY=new se(0,1)});var Cp,Pp=wn(()=>{Cp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`}});var dl,Lp=wn(()=>{Ut();gr();Pp();dl=class extends Cn{constructor(){super();let e=Cp;this.uniforms=Wi.clone(e.uniforms),this.material=new Ua({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},at.getTransfer(this._outputColorSpace)===mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ch?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===to?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===dh&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}});var Ip={};Ll(Ip,{createPostFX:()=>eS});function eS(n,e,t){let i=new hl(n);i.addPass(new ul(e,t));let s=new _r(new se(window.innerWidth,window.innerHeight),.35,.65,.82);i.addPass(s);let r=new xr(jM);return i.addPass(r),i.addPass(new dl),{composer:i,bloom:s,vignette:r,setBloomEnabled(o){s.enabled=o},setBloomStrength(o){s.strength=o},setSize(o,a){i.setSize(o,a)},setPixelRatio(o){i.setPixelRatio(o)},render(){i.render()}}}var jM,Dp=wn(()=>{Ut();bp();Tp();Rp();Vh();Lp();jM={uniforms:{tDiffuse:{value:null},uAmount:{value:.28}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.85, 0.35, d);
      c.rgb *= mix(1.0 - uAmount, 1.0, v);
      gl_FragColor = c;
    }`}});Ut();var yh={};Ll(yh,{CAR_DEFS:()=>Ei,applyCarSkin:()=>Gy,buildCar:()=>zy,carDef:()=>vh,effectiveStats:()=>ky,extrudeProfile:()=>no,glassMat:()=>yf,paintCar:()=>By,paintMat:()=>vf,setWheelStyle:()=>Hy});Ut();var Ei=[{id:"sport",name:"Apex S",desc:"Balanced coupe. Great all-rounder.",price:0,colors:[12589080,1728464,15921906,1316380,16747546],stats:{topSpeed:52,accel:16,handling:1,grip:1,nitroTime:3.2,nitroPower:1.35}},{id:"muscle",name:"Brute V8",desc:"Straight-line monster. Loose rear.",price:8500,colors:[7999504,862827,2237998,13082632,4000340],stats:{topSpeed:55,accel:18,handling:.85,grip:.85,nitroTime:3.6,nitroPower:1.45}},{id:"super",name:"Falcon X",desc:"Exotic pace, glued to the road.",price:22e3,colors:[16765471,1622208,12589080,1053464,8003536],stats:{topSpeed:62,accel:20,handling:1.1,grip:1.15,nitroTime:3,nitroPower:1.4}},{id:"suv",name:"Mammoth 4x4",desc:"Heavy, grippy, smashes through.",price:15e3,colors:[2772266,5988456,1053464,9067034,1728464],stats:{topSpeed:47,accel:14,handling:.9,grip:1.25,nitroTime:4,nitroPower:1.3}},{id:"truck",name:"Hauler Dually",desc:"Pickup torque. Slow but unstoppable.",price:12e3,colors:[9050650,1718891,3027512,14211288,1003826],stats:{topSpeed:45,accel:15,handling:.8,grip:1.1,nitroTime:4.2,nitroPower:1.35}},{id:"track",name:"Vortex R",desc:"Track weapon. Max grip, max downforce.",price:35e3,colors:[1622208,12589080,15921906,1316380,16734746],stats:{topSpeed:68,accel:23,handling:1.25,grip:1.35,nitroTime:2.8,nitroPower:1.5}}],vh=n=>Ei.find(e=>e.id===n)||Ei[0],vf=n=>new Vi({color:n,metalness:.55,roughness:.32,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.25}),yf=()=>new Vi({color:922652,metalness:.9,roughness:.08,envMapIntensity:1.6}),Mf=()=>new ye({color:14672872,metalness:1,roughness:.22}),Py=()=>new ye({color:1316378,metalness:.4,roughness:.6}),Ly=()=>new ye({color:789775,roughness:.95}),Iy=()=>new ye({color:12172998,metalness:1,roughness:.3}),Dy=()=>new ye({color:5922404,metalness:.9,roughness:.45}),Uy=()=>new ye({color:15398143,emissive:13625087,emissiveIntensity:2.2,roughness:.15,metalness:.1}),Ny=()=>new ye({color:5570560,emissive:16718362,emissiveIntensity:2,roughness:.2}),Oy=()=>new ye({color:15263976,roughness:.5}),gf=(n,e,t)=>({x:n,y:e,r:t}),xf={sport:{W:1.86,wb:1.35,wheelR:.34,track:1.58,body:[[2.2,.28],[2.27,.5],[2.13,.64],[1.55,.72],[.85,.78],[.45,.82],[-1.05,.84],[-1.7,.8],[-2.1,.7],[-2.21,.5],[-2.17,.3],[-1.9,.2],[1.9,.2]],glass:[[.5,.8],[.28,1.18],[-.6,1.22],[-1.08,.82]],roof:[[.32,1.14],[-.64,1.18],[-.68,1.12],[.28,1.08]],spoiler:!0,splitter:!0},super:{W:1.96,wb:1.38,wheelR:.335,track:1.64,body:[[2.26,.24],[2.33,.44],[2.19,.58],[1.5,.66],[.7,.72],[.4,.76],[-1.2,.78],[-1.85,.74],[-2.2,.62],[-2.29,.44],[-2.25,.26],[-1.95,.18],[1.95,.18]],glass:[[.44,.74],[.08,1.08],[-.8,1.11],[-1.24,.76]],roof:[[.12,1.04],[-.84,1.07],[-.88,1.01],[.08,.98]],spoiler:!0,splitter:!0},muscle:{W:1.92,wb:1.45,wheelR:.36,track:1.6,body:[[2.36,.3],[2.41,.52],[2.23,.68],[1.2,.8],[.3,.86],[-.2,.88],[-1.6,.86],[-2.2,.78],[-2.36,.58],[-2.33,.34],[-2,.22],[2,.22]],glass:[[.28,.86],[-.22,1.26],[-1.06,1.28],[-1.62,.86]],roof:[[-.18,1.22],[-1.1,1.24],[-1.14,1.18],[-.22,1.16]],hoodScoop:!0,splitter:!1},suv:{W:1.96,wb:1.42,wheelR:.385,track:1.64,body:[[2.31,.34],[2.35,.58],[2.16,.8],[1.3,.95],[.6,1],[-1.6,1.02],[-2.1,.95],[-2.29,.72],[-2.31,.48],[-2.25,.32],[-1.95,.24],[1.95,.24]],glass:[[.58,1],[.32,1.64],[-1.43,1.66],[-1.64,1.02]],roof:[[.36,1.6],[-1.47,1.62],[-1.51,1.56],[.32,1.54]],rails:!0,splitter:!1},truck:{W:2,wb:1.58,wheelR:.4,track:1.68,body:[[2.61,.34],[2.65,.58],[2.46,.82],[1.55,.95],[.8,1],[.68,1.05],[-.55,1.08],[-.67,1.02],[-2.3,1],[-2.56,.85],[-2.61,.55],[-2.57,.34],[-2.2,.24],[2.2,.24]],glass:[[.64,1.03],[.48,1.54],[-.42,1.58],[-.62,1.05]],roof:[[.52,1.5],[-.46,1.54],[-.5,1.48],[.48,1.44]],bed:!0,splitter:!1},track:{W:2.02,wb:1.38,wheelR:.335,track:1.7,body:[[2.28,.22],[2.36,.42],[2.22,.56],[1.52,.64],[.72,.7],[.42,.74],[-1.24,.76],[-1.88,.72],[-2.24,.6],[-2.32,.42],[-2.28,.24],[-1.98,.16],[1.98,.16]],glass:[[.46,.72],[.1,1.06],[-.82,1.09],[-1.26,.74]],roof:[[.14,1.02],[-.86,1.05],[-.9,.99],[.1,.96]],wing:!0,splitter:!0,canards:!0}};function no(n,e,t,i,s=.045){let r=new $r;r.moveTo(n[0][0],n[0][1]);for(let l=1;l<n.length;l++)r.lineTo(n[l][0],n[l][1]);r.closePath();for(let l of i||[]){let c=new fs;c.absarc(l.x,l.y,l.r,0,Math.PI*2,!0),r.holes.push(c)}let o=new Ia(r,{depth:e,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:2,steps:1,curveSegments:10});o.translate(0,0,-e/2),o.rotateY(Math.PI/2);let a=new re(o,t);return a.castShadow=!0,a}function Fy(n,e,t){let i=new lt,s=new re(new Tt(e,e,.26,22),Ly());s.rotation.z=Math.PI/2,s.castShadow=!0,i.add(s);let r=new re(new Tt(e*.52,e*.52,.27,18),Dy());r.rotation.z=Math.PI/2,i.add(r);let o=new re(new Da(e*.62,e*.1,8,22),t);o.rotation.y=Math.PI/2,i.add(o);let a=new lt;for(let h=0;h<5;h++){let d=new re(new Oe(.05,e*.6,e*.16),t);d.position.y=e*.3;let p=new lt;p.rotation.x=h/5*Math.PI*2,p.add(d),a.add(p)}let l=a.clone();l.rotation.y=Math.PI,i.add(a),i.add(l);let c=new re(new Tt(e*.14,e*.14,.3,12),Mf());return c.rotation.z=Math.PI/2,i.add(c),n==="blackout"?t.color.setHex(1513500):n==="gold"?t.color.setHex(13211182):n==="neon"&&t.color.setHex(2287359),i}function zy(n,e,t="stock"){let i=typeof n=="string"?vh(n):n||Ei[0],s=i.id||"sport";typeof e!="number"&&(e=typeof i.color=="number"?i.color:i.colors[0]);let r=xf[s]||xf.sport,o=new lt,a=vf(e),l=yf(),c=Mf(),h=Py(),d=[gf(r.wb,r.wheelR,r.wheelR+.13),gf(-r.wb,r.wheelR,r.wheelR+.13)];o.add(no(r.body,r.W,a,d)),o.add(no(r.glass,r.W-.26,l,null,.03)),r.roof&&o.add(no(r.roof,r.W-.2,a,null,.02));let p=Math.max(...r.body.map(v=>v[0])),m=Math.min(...r.body.map(v=>v[0])),x=-p,g=-m,f=r.W/2,u=[],y=Iy();for(let v of[-1,1])for(let S of[-r.wb,r.wb]){let L=Fy(t,r.wheelR,y);L.position.set(v*r.track/2,r.wheelR,S),o.add(L),u.push(L)}let _=Uy();for(let v of[-1,1]){let S=new re(new Oe(.34,.16,.1),h);S.position.set(v*(f-.42),.6,x+.02),o.add(S);let L=new re(new en(.085,12,10),_);L.scale.set(1.6,.75,.7),L.position.set(v*(f-.42),.6,x-.03),o.add(L)}let M=new re(new Oe(f*1.1,.16,.08),h);if(M.position.set(0,.4,x+.01),o.add(M),r.splitter){let v=new re(new Oe(r.W*.92,.05,.3),h);v.position.set(0,.16,x+.1),o.add(v)}if(r.hoodScoop){let v=new re(new Oe(.5,.09,.7),h);v.position.set(0,.86,-(r.wb*.55)),o.add(v)}if(r.canards)for(let v of[-1,1]){let S=new re(new Oe(.22,.03,.3),h);S.position.set(v*(f-.1),.3,x+.12),S.rotation.z=v*.25,o.add(S)}let A=Ny(),R=new re(new Oe(r.W*.78,.1,.06),A);R.position.set(0,.66,g-.02),o.add(R);for(let v of[-1,1]){let S=new re(new Oe(.12,.06,.065),new ye({color:14540253,emissive:16777215,emissiveIntensity:.6}));S.position.set(v*.28,.66,g-.02),o.add(S)}let w=new re(new Oe(r.W*.8,.14,.18),h);w.position.set(0,.24,g-.06),o.add(w);for(let v of[-1,1]){let S=new re(new Tt(.05,.055,.22,12),c);S.rotation.x=Math.PI/2,S.position.set(v*.32,.26,g+.06),o.add(S)}let F=new re(new Oe(.34,.09,.02),Oy());F.position.set(0,.5,g+.005),o.add(F);for(let v of[-1,1]){let S=new re(new Oe(.1,.03,.05),h);S.position.set(v*(f+.03),1,-(r.wb*.42)),o.add(S);let L=new re(new Oe(.1,.1,.16),a);L.position.set(v*(f+.09),1.04,-(r.wb*.42)),L.castShadow=!0,o.add(L)}if(r.rails)for(let v of[-1,1]){let S=new re(new Oe(.06,.05,1.9),h);S.position.set(v*(f-.35),1.72,.1),o.add(S)}if(r.bed){let v=new re(new Oe(r.W-.5,.06,2),h);v.position.set(0,1.02,m*.55),o.add(v)}if(r.spoiler||r.wing){let v=!!r.wing;for(let L of[-1,1]){let O=new re(new Oe(.07,v?.3:.16,.24),v?h:a);O.position.set(L*(f-.45),.86+(v?.1:.04),g+.28),o.add(O)}let S=new re(new Oe(r.W*(v?.92:.8),.045,v?.42:.3),v?h:a);S.position.set(0,v?1.06:.98,g+.28),S.rotation.x=v?-.12:0,S.castShadow=!0,o.add(S)}return o.userData={defId:s,bodyColor:e,wheels:u,frontWheels:u.filter(v=>v.position.z<0),rim:y,glass:l,paint:a,setBrake:v=>{},profile:r,frontZ:x,rearZ:g},o}function By(n,e){let t=new Le(e);n.traverse(i=>{i.isMesh&&i.material&&i.material.isMeshPhysicalMaterial&&i.material.color&&Math.abs(i.material.color.getHex()-n.userData.bodyColor)<2&&!i.material.emissiveIntensity&&i.material.color.copy(t)}),n.userData.bodyColor=e}function Hy(n,e){let t=n.userData.rim;t&&(e==="blackout"?t.color.setHex(1513500):e==="gold"?t.color.setHex(13211182):e==="neon"?t.color.setHex(2287359):t.color.setHex(12172998))}function ky(n,e){let i=(typeof n=="string"?vh(n):n||Ei[0]).stats,s=e||{},r=o=>s[o]||0;return{topSpeed:i.topSpeed*(1+.055*r("engine")),accel:i.accel*(1+.09*r("engine")+.12*r("turbo")),handling:i.handling*(1+.06*r("suspension")),grip:i.grip*(1+.07*r("tires")),nitroTime:i.nitroTime+.5*r("nitro"),nitroPower:i.nitroPower*(1+.08*r("nitro"))}}var _f={clear:4873070,dark:922652,limo:131844};function Gy(n,e,t){let i=n.userData;if(typeof e=="number"&&i.paint&&(i.paint.color.setHex(e),i.bodyColor=e),!t)return n;i.rim&&i.rim.color.setHex(t.rims),i.glass&&i.glass.color.setHex(_f[t.tint]??_f.dark),i.skinParts&&(n.remove(i.skinParts),i.skinParts.traverse(o=>{o.isMesh&&o.geometry.dispose()}));let s=new lt;i.skinParts=s,n.add(s);let r=i.profile;if(r&&t.stripes!=="none"){let o=new Vi({color:t.stripe,metalness:.4,roughness:.35,clearcoat:1,clearcoatRoughness:.1});if(t.stripes==="side"){let a=(i.rearZ-i.frontZ)*.86,l=(i.rearZ+i.frontZ)/2,c=r.wheelR+.22;for(let h of[-1,1]){let d=new re(new Oe(.02,.09,a),o);d.position.set(h*(r.W/2+.05),c,l),s.add(d)}}else{let a=t.stripes==="dual"?[-.22,.22]:[0],l=t.stripes==="dual"?.16:.34;for(let c of a)for(let h of[r.body,r.roof]){if(!h)continue;let d=no(h,l,o,null,.045);d.castShadow=!1,d.scale.set(1,1.012,1.004),d.position.set(c,.006,0),s.add(d)}}}if(t.glow!=null&&r){let o=new ht({color:t.glow,transparent:!0,opacity:.75,blending:jt,depthWrite:!1,map:Vy()}),a=i.rearZ-i.frontZ+1.2,l=new re(new rt(r.W+1.4,a).rotateX(-Math.PI/2),o);l.position.set(0,.07,(i.rearZ+i.frontZ)/2),l.renderOrder=2,s.add(l)}return n}var Xa=null;function Vy(){if(Xa)return Xa;let n=document.createElement("canvas");n.width=64,n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(32,64,4,32,64,62);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.55,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.save(),e.scale(1,1),e.fillStyle=t,e.fillRect(0,0,64,128),e.restore(),Xa=new yn(n),Xa}Ut();var Wy=1337,Mh=null,Vt=5,ni=60,Qn=14,Kn=ni+Qn,Sh=(Vt*Kn+Qn)/2,xs=232,io=225,Eh=9;function Xy(n){return function(){n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function _s(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new yn(i);return s.colorSpace=xt,s.anisotropy=4,s}function Sf(){return _s(128,128,(n,e,t)=>{n.fillStyle="#33363b",n.fillRect(0,0,e,t),n.fillStyle="#3a3d42";for(let i=0;i<160;i++)n.fillRect(i*37%e,i*53%t,2,2);n.fillStyle="#cfd3d8",n.fillRect(4,0,4,t),n.fillRect(e-8,0,4,t),n.fillStyle="#e8c33a";for(let i=0;i<t;i+=32)n.fillRect(e/2-3,i,6,16)})}function qy(){return _s(128,256,(n,e,t)=>{n.fillStyle="#8d97a3",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++){let c=(a*7+l*13)%17===0;n.fillStyle=c?"#ffe08a":"#3b4656",n.fillRect(l*r+3,a*o+4,r-6,o-8),n.fillStyle="rgba(255,255,255,0.25)",n.fillRect(l*r+3,a*o+4,r-6,3)}})}function Yy(){return _s(128,256,(n,e,t)=>{n.fillStyle="#000000",n.fillRect(0,0,e,t);let i=5,s=12,r=e/i,o=t/s;for(let a=0;a<s;a++)for(let l=0;l<i;l++)(a*7+l*13)%5===0&&(n.fillStyle=(a+l)%3===0?"#ffd9a0":"#fff3d0",n.fillRect(l*r+3,a*o+4,r-6,o-8))})}var Mn={p:null,q:null,s:null,m:null};function gn(n,e,t,i,s,r,o,a,l){Mn.p.set(t,i,s),Mn.q.setFromAxisAngle(Mn.up,r),Mn.s.set(o,a,l),Mn.m.compose(Mn.p,Mn.q,Mn.s),n.setMatrixAt(e,Mn.m)}function Ef(n,e,t,i,s){for(let r of n)if(t>r.minX&&e<r.maxX&&s>r.minZ&&i<r.maxZ)return!0;return!1}function bf(n,e=[]){let t=Xy(Wy);Mn.p=new I,Mn.q=new On,Mn.s=new I,Mn.m=new ct,Mn.up=new I(0,1,0);let i=[];n.fog=new Sa(13623538,200,750);let s=new Na(12572927,6978138,.9);n.add(s);let r=new za(16774368,1.6);r.castShadow=!0,r.shadow.mapSize.set(1024,1024),r.shadow.camera.near=10,r.shadow.camera.far=400;let o=110;r.shadow.camera.left=-o,r.shadow.camera.right=o,r.shadow.camera.top=o,r.shadow.camera.bottom=-o,r.shadow.bias=-8e-4,n.add(r),n.add(r.target);let a=70,l=120,c=45,h=16,d=new rt(1400,1400);d.rotateX(-Math.PI/2);let p=new re(d,new ye({color:6130250,roughness:.95,metalness:0,envMapIntensity:.25}));p.receiveShadow=!0,n.add(p);let m=[];for(let oe=0;oe<=Vt;oe++)m.push((oe-Vt/2)*Kn);let x=Vt*Kn+Qn,g=Sf();g.wrapS=g.wrapT=vi,g.repeat.set(1,x/Qn);let f=new rt(1,1);f.rotateX(-Math.PI/2);let u=new ye({map:g,roughness:.9,metalness:.05,envMapIntensity:.35}),y=new Yt(f,u,m.length*2);y.receiveShadow=!0;let _=0;for(let oe of m)gn(y,_++,oe,.05,0,0,Qn,1,x),gn(y,_++,0,.05,oe,Math.PI/2,Qn,1,x);y.instanceMatrix.needsUpdate=!0,n.add(y);let M=new rt(1,1);M.rotateX(-Math.PI/2);let A=new Yt(M,new ye({color:10132898,roughness:.9,metalness:.05,envMapIntensity:.3}),Vt*Vt);A.receiveShadow=!0;let R=0;for(let oe=0;oe<Vt;oe++)for(let ce=0;ce<Vt;ce++){let Y=(oe-(Vt-1)/2)*Kn,P=(ce-(Vt-1)/2)*Kn;gn(A,R++,Y,.03,P,0,ni,1,ni)}A.instanceMatrix.needsUpdate=!0,n.add(A);let w=qy(),F=new Oe(1,1,1);F.translate(0,.5,0);let v=new ye({map:w,emissiveMap:Yy(),emissive:16762995,emissiveIntensity:0,roughness:.85,metalness:.1,envMapIntensity:.4}),S=110,L=new Yt(F,v,S);L.castShadow=!0,L.receiveShadow=!0;let O=new Le,N=[],C=[],U=0,z=4,B=0,G=0;for(let oe=0;oe<Vt;oe++)for(let ce=0;ce<Vt;ce++){let Y=(oe-(Vt-1)/2)*Kn,P=(ce-(Vt-1)/2)*Kn,j=oe===B&&ce===G,ee=Math.abs(oe-2)<=1&&Math.abs(ce-2)<=1,xe=t()<.75?4:9,ve=Math.sqrt(xe),Xe=(ni-z*2)/ve;for(let nt=0;nt<xe&&U<S;nt++){if(j||t()<.28)continue;let dt=nt%ve,At=Math.floor(nt/ve),qe=Xe*(.55+t()*.3),ot=Xe*(.55+t()*.3),un=ee?60:28,Ai=ee?18:10,Ri=Ai+t()*(un-Ai),pt=Y-(ni-z*2)/2+Xe*(dt+.5)+(t()-.5)*2,vt=P-(ni-z*2)/2+Xe*(At+.5)+(t()-.5)*2,Bt=.82+t()*.32,As=t();if(!Ef(e,pt-qe/2,pt+qe/2,vt-ot/2,vt+ot/2)){gn(L,U,pt,.03,vt,0,qe,Ri,ot),As<.45?O.setRGB(Bt,Bt*.97,Bt*.95):As<.65?O.setRGB(Bt,Bt*.9,Bt*.82):As<.82?O.setRGB(Bt*.88,Bt*.95,Bt):O.setRGB(Bt,Bt*.82,Bt*.74),L.setColorAt(U,O),N.push({x:pt,h:Ri,w:qe,d:ot,z:vt});{let Tr=pt-Y,Eo=vt-P,wr=0,Ar=0;Math.abs(Tr)>Math.abs(Eo)?wr=Tr>=0?1:-1:Ar=Eo>=0?1:-1;let T={x:pt+wr*(qe/2),z:vt+Ar*(ot/2),nx:wr,nz:Ar};C.push({id:C.length,minX:pt-qe/2,maxX:pt+qe/2,minZ:vt-ot/2,maxZ:vt+ot/2,h:Ri,door:T})}i.push({minX:pt-qe/2,maxX:pt+qe/2,minZ:vt-ot/2,maxZ:vt+ot/2}),U++}}}L.count=U,L.instanceMatrix.needsUpdate=!0,L.instanceColor&&(L.instanceColor.needsUpdate=!0),n.add(L);{let oe=_s(64,96,(j,ee,xe)=>{j.fillStyle="#20262f",j.fillRect(0,0,ee,xe),j.fillStyle="#ffd98a",j.fillRect(0,0,ee,6),j.fillRect(0,0,5,xe),j.fillRect(ee-5,0,5,xe),j.fillStyle="#6fa8d8",j.fillRect(9,12,ee/2-12,xe-20),j.fillRect(ee/2+3,12,ee/2-12,xe-20),j.fillStyle="#cfd3d8",j.fillRect(ee/2-6,xe/2,3,10),j.fillRect(ee/2+3,xe/2,3,10)}),ce=new rt(2.2,3);ce.translate(0,1.5,0);let Y=new ye({map:oe,emissive:16762995,emissiveMap:oe,emissiveIntensity:.25,roughness:.4,metalness:.3}),P=new Yt(ce,Y,Math.max(1,C.length));C.forEach((j,ee)=>{let xe=j.door.nx?j.door.nx>0?Math.PI/2:-Math.PI/2:j.door.nz>0?0:Math.PI;gn(P,ee,j.door.x+j.door.nx*.03,.04,j.door.z+j.door.nz*.03,xe,1,1,1)}),P.count=C.length,P.instanceMatrix.needsUpdate=!0,n.add(P),Mh=Y}{let oe=new Oe(1.6,1.1,1.6);oe.translate(0,.55,0);let ce=new ye({color:9146518,roughness:.7,metalness:.4,envMapIntensity:.4}),Y=[];for(let j of N){let ee=1+Math.floor(t()*2);for(let xe=0;xe<ee;xe++)Y.push([j.x+(t()-.5)*j.w*.5,j.h+.03,j.z+(t()-.5)*j.d*.5,.7+t()*.7])}let P=new Yt(oe,ce,Math.max(1,Y.length));Y.forEach(([j,ee,xe,ve],Xe)=>gn(P,Xe,j,ee,xe,t()*3.14,ve,1,ve)),P.count=Y.length,P.instanceMatrix.needsUpdate=!0,n.add(P)}{let oe=(B-(Vt-1)/2)*Kn,ce=(G-(Vt-1)/2)*Kn,Y=new re(new rt(ni,ni).rotateX(-Math.PI/2),new ye({color:3356219,roughness:.95,metalness:.02,envMapIntensity:.25}));Y.position.set(oe,.045,ce),Y.receiveShadow=!0,n.add(Y);let P=new Oe(.14,.02,5.6);P.translate(0,.01,0);let j=new ye({color:15264492,roughness:.7}),ee=3,xe=[-7.5,7.5],ve=12,Xe=oe-ve*ee/2,nt=xe.length*(ve+1),dt=new Yt(P,j,nt),At=new Oe(1.8,.14,.16);At.translate(0,.07,0);let qe=new ye({color:10132898,roughness:.9}),ot=new Yt(At,qe,xe.length*ve),un=0,Ai=0;for(let pt of xe){for(let vt=0;vt<=ve;vt++)gn(dt,un++,Xe+vt*ee,.055,ce+pt,0,1,1,1);for(let vt=0;vt<ve;vt++)gn(ot,Ai++,Xe+vt*ee+ee/2,.055,ce+pt+(pt<0?1.9:-1.9),0,1,1,1)}dt.count=un,dt.instanceMatrix.needsUpdate=!0,ot.count=Ai,ot.instanceMatrix.needsUpdate=!0,n.add(dt,ot);let Ri=new re(new rt(20,5).rotateX(-Math.PI/2),new ye({map:_s(256,64,(pt,vt,Bt)=>{pt.fillStyle="#33363b",pt.fillRect(0,0,vt,Bt),pt.fillStyle="#e8c33a",pt.font="bold 40px sans-serif",pt.textAlign="center",pt.textBaseline="middle",pt.fillText("PARKING",vt/2,Bt/2)}),roughness:.9,transparent:!1}));Ri.position.set(oe,.055,ce),n.add(Ri)}{let oe=new Oe(.7,.02,3.2);oe.translate(0,.01,0);let ce=new ye({color:14672614,roughness:.75}),Y=[];for(let j of[2,3])for(let ee of[2,3]){let xe=m[j],ve=m[ee],Xe=Qn/2+2.6;for(let[nt,dt,At]of[[xe,ve-Xe,0],[xe,ve+Xe,0],[xe-Xe,ve,1],[xe+Xe,ve,1]])for(let qe=-2;qe<=2;qe++)Y.push(At===0?[nt+qe*2.2,.06,dt,0]:[nt,.06,dt+qe*2.2,Math.PI/2])}let P=new Yt(oe,ce,Y.length);Y.forEach(([j,ee,xe,ve],Xe)=>gn(P,Xe,j,ee,xe,ve,1,1,1)),P.instanceMatrix.needsUpdate=!0,P.receiveShadow=!0,n.add(P)}let W=new Tt(.12,.16,9,6);W.translate(0,4.5,0);let $=new ye({color:3948872,roughness:.6,metalness:.6,envMapIntensity:.6}),J=new Oe(1.6,.25,.5);J.translate(.6,9,0);let he=new ye({color:16773828,emissive:16766842,emissiveIntensity:.35,roughness:.4,metalness:.2}),V=[];for(let oe of m)for(let ce=-x/2+25;ce<x/2-10;ce+=46){let Y=Math.round(ce/46)%2===0?1:-1;V.push([oe+Y*(Qn/2+1.5),ce,0]),V.push([ce,oe+Y*(Qn/2+1.5),1])}let te=new Yt(W,$,V.length),me=new Yt(J,he,V.length);V.forEach(([oe,ce,Y],P)=>{gn(te,P,oe,0,ce,0,1,1,1),gn(me,P,oe,0,ce,Y?Math.PI/2:0,1,1,1)}),te.instanceMatrix.needsUpdate=!0,me.instanceMatrix.needsUpdate=!0,n.add(te,me);let Me=[];for(let oe=0;oe<Vt;oe++)for(let ce=0;ce<Vt;ce++){if(oe===B&&ce===G)continue;let Y=(oe-(Vt-1)/2)*Kn,P=(ce-(Vt-1)/2)*Kn,j=2+Math.floor(t()*3);for(let ee=0;ee<j;ee++)Me.push([Y+(t()-.5)*(ni-8),P+(t()-.5)*(ni-8),.8+t()*.5])}let Ee=new Tt(.18,.28,2.6,6);Ee.translate(0,1.3,0);let ze=new lr(1.9,4.6,7);ze.translate(0,4.4,0);let He=new Yt(Ee,new ye({color:7031342,roughness:.9,envMapIntensity:.2}),Me.length),Ae=new Yt(ze,new ye({color:4094516,roughness:.85,envMapIntensity:.3}),Me.length);Ae.castShadow=!0;for(let oe=Me.length-1;oe>=0;oe--){let[ce,Y]=Me[oe];Ef(e,ce-2,ce+2,Y-2,Y+2)&&Me.splice(oe,1)}Me.forEach(([oe,ce,Y],P)=>{gn(He,P,oe,.03,ce,t()*6.28,Y,Y,Y),gn(Ae,P,oe,.03,ce,t()*6.28,Y,Y*(.9+t()*.3),Y)}),He.instanceMatrix.needsUpdate=!0,Ae.instanceMatrix.needsUpdate=!0,n.add(He,Ae);let ke=_s(64,64,(oe,ce,Y)=>{let P=oe.createRadialGradient(32,32,2,32,32,30);P.addColorStop(0,"rgba(255,220,150,1)"),P.addColorStop(.4,"rgba(255,200,120,0.45)"),P.addColorStop(1,"rgba(255,190,110,0)"),oe.fillStyle=P,oe.fillRect(0,0,ce,Y)}),D=new kt,de=new Float32Array(V.length*3);V.forEach(([oe,ce],Y)=>{de[Y*3]=oe,de[Y*3+1]=8.9,de[Y*3+2]=ce}),D.setAttribute("position",new an(de,3));let Q=new Yr({map:ke,size:14,transparent:!0,opacity:0,blending:jt,depthWrite:!1,sizeAttenuation:!0}),ue=new Ta(D,Q);ue.frustumCulled=!1,n.add(ue);let K=new Oe(1,1,1);K.translate(0,.5,0);let Pe=new ht({color:2767445}),_e=46,b=new Yt(K,Pe,_e);for(let oe=0;oe<_e;oe++){let ce=oe/_e*Math.PI*2+t()*.1,Y=760+t()*220,P=40+t()*60,j=60+t()*130,ee=40+t()*60;gn(b,oe,Math.cos(ce)*Y,0,Math.sin(ce)*Y,t()*.6,P,j,ee)}b.instanceMatrix.needsUpdate=!0,n.add(b);let E=io*2,H=_s(128,128,(oe,ce,Y)=>{oe.fillStyle="#2e3136",oe.fillRect(0,0,ce,Y),oe.fillStyle="#cfd3d8",oe.fillRect(2,0,5,Y),oe.fillRect(ce-7,0,5,Y),oe.fillStyle="#e8c33a";for(let P=0;P<Y;P+=32)oe.fillRect(ce/2-3,P,6,16)});H.wrapS=H.wrapT=vi,H.repeat.set(1,E/14);let ae=new rt(1,1);ae.rotateX(-Math.PI/2);let ie=new re(ae,new ye({map:H,roughness:.9,metalness:.05,envMapIntensity:.35}));ie.scale.set(Eh,1,E),ie.position.set(xs,.05,0),ie.receiveShadow=!0,n.add(ie);let ne=Sf();ne.wrapS=ne.wrapT=vi,ne.repeat.set(1,(xs-Sh)/Qn+2);let Re=xs-Sh+20,fe=new re(ae,new ye({map:ne,roughness:.9,metalness:.05,envMapIntensity:.35}));fe.scale.set(Re,1,Qn),fe.rotation.y=Math.PI/2,fe.position.set((Sh+xs)/2,.05,0),fe.receiveShadow=!0,n.add(fe);let be=new re(new rt(Eh,1.6).rotateX(-Math.PI/2),new ye({color:15922422,roughness:.7}));be.position.set(xs,.07,io-8),n.add(be);let Ne=new Oe(4,1.1,.7);Ne.translate(0,.55,0);let We=new ye({color:16777215,roughness:.6,metalness:.1,envMapIntensity:.4}),le=Math.floor(E/9)*2,Je=new Yt(Ne,We,le);Je.castShadow=!0;let Ke=new Le,Fe=0;for(let oe=-io+4;oe<=io-4&&Fe<le;oe+=9)for(let ce of[-1,1])gn(Je,Fe,xs+ce*(Eh/2+1.6),.05,oe,0,1,1,1),Ke.setHex(Fe%2===0?15229982:15922422),Je.setColorAt(Fe,Ke),Fe++;Je.count=Fe,Je.instanceMatrix.needsUpdate=!0,Je.instanceColor&&(Je.instanceColor.needsUpdate=!0),n.add(Je);let Ue={x:m[3],z:120,heading:0},we={startX:xs,startZ:io-8,dirX:0,dirZ:-1,length:E};function Ye(oe){v.emissiveIntensity=oe*1.4,Mh&&(Mh.emissiveIntensity=.25+oe*1.2),he.emissiveIntensity=.35+oe*3,Q.opacity=oe*.85,Pe.color.setHex(oe>.5?923174:2767445)}function it(oe,ce){let Y=Math.round(ce.x/h)*h,P=Math.round(ce.z/h)*h;r.target.position.set(Y,0,P),r.position.set(Y+a,l,P+c),r.target.updateMatrixWorld()}return it(0,Ue),{colliders:i,buildings:C,spawn:Ue,dragStrip:we,update:it,setGlow:Ye,sun:r,hemi:s,roadLines:m}}var qa=class{constructor(e){this.reset(e)}reset(e){this.stats=e,this.pos={x:0,z:0},this.heading=0,this.vel={x:0,z:0},this.speed=0,this.steer=0,this.nitroLeft=e.nitroTime,this.nitroActive=!1,this.drifting=!1,this.wheelSpin=0}update(e,t,i){let s=this.stats;t=Math.min(t,.05);let r=e.steer||0;this.steer+=(r-this.steer)*Math.min(1,t*10);let o=-Math.sin(this.heading),a=-Math.cos(this.heading),l=this.vel.x*o+this.vel.z*a;this.nitroActive=!!(e.nitro&&this.nitroLeft>0&&l>1),this.nitroActive?this.nitroLeft=Math.max(0,this.nitroLeft-t):this.nitroLeft=Math.min(s.nitroTime,this.nitroLeft+t*.35);let c=this.nitroActive?s.nitroPower:1,h=!!e.handbrake,d=0,p=h?.25:1;e.throttle>0?d=e.throttle*s.accel*c*p*(1-Math.max(0,l)/(s.topSpeed*c)*.72):e.throttle<0&&(d=l>1?e.throttle*s.accel*1.6:e.throttle*s.accel*.5),d-=l*(.028+(h?.06:0))+Math.sign(l)*.6,l+=d*t;let m=s.topSpeed*c,x=-s.topSpeed*.35;l=Math.max(x,Math.min(m,l)),Math.abs(l)<.15&&!e.throttle&&(l=0);let g=Math.abs(l),f=Math.min(1,g/8),u=this.steer*.55*s.handling*f*(1-Math.min(1,g/(s.topSpeed*1.4))*.45);g>.5&&(this.heading-=u*(l/g)*t*(g>1?Math.min(2.2,g*.12+.8):1)*2.2);let y=-Math.sin(this.heading),_=-Math.cos(this.heading),M=this.vel.x*y+this.vel.z*_,A=this.vel.x-y*M,R=this.vel.z-_*M;this.drifting=!!(e.handbrake&&g>6);let w=this.drifting?.983:Math.min(.995,.9+s.grip*.06),F=Math.pow(w,t*60);A*=F,R*=F;let v=M+(l-M)*Math.min(1,t*60);this.vel.x=y*v+A,this.vel.z=_*v+R;let S=this.pos.x+this.vel.x*t,L=this.pos.z+this.vel.z*t;if(i){let O=i(S,L,this.pos.x,this.pos.z);S=O.x,L=O.z,O.hitX&&(this.vel.x*=-.25),O.hitZ&&(this.vel.z*=-.25)}return this.pos.x=S,this.pos.z=L,this.speed=l,this.wheelSpin+=l*t*2.2,{speed:l,drifting:this.drifting,nitro:this.nitroActive,nitroFrac:this.nitroLeft/s.nitroTime,steer:this.steer}}};function Tf(n={}){let e=n.isRotated||(()=>!1),t={throttle:0,steer:0,handbrake:!1,nitro:!1,moveX:0,moveY:0,run:!1,fire:!1},i={left:!1,right:!1,gas:!1,brake:!1,nitro:!1,handbrake:!1,fire:!1,run:!1},s={x:0,y:0,id:null},r="drive",o=!1,a=!1,l=!1,c=!1,h=!1,d=[],p=S=>document.getElementById(S);function m(){t.steer=(i.right?1:0)-(i.left?1:0),t.throttle=i.gas?1:i.brake?-1:0,t.nitro=i.nitro,t.handbrake=i.handbrake;let S=(i.right?1:0)-(i.left?1:0),L=(i.gas?1:0)-(i.brake?1:0);t.moveX=s.id!==null?s.x:S,t.moveY=s.id!==null?s.y:L,t.run=i.run||i.nitro||s.id!==null&&Math.hypot(s.x,s.y)>.92,t.fire=i.fire}function x(S,L){if(!S)return;let O=44,N=z=>{if(z.pointerId!==s.id)return;let B=S.getBoundingClientRect(),G=z.clientX-(B.left+B.width/2),W=z.clientY-(B.top+B.height/2),$=G,J=W;e()&&($=W,J=-G);let he=Math.hypot($,J),V=Math.min(he,O);he>0&&($=$/he*V,J=J/he*V),L.style.transform=`translate(${$}px, ${J}px)`;let te=.12,me=$/O,Me=-J/O;Math.hypot(me,Me)<te&&(me=0,Me=0),s.x=me,s.y=Me,m()},C=z=>{if(z.preventDefault(),s.id===null){s.id=z.pointerId;try{S.setPointerCapture(z.pointerId)}catch{}N(z)}},U=z=>{z.pointerId===s.id&&(s.id=null,s.x=0,s.y=0,L.style.transform="translate(0px, 0px)",m())};S.addEventListener("pointerdown",C),S.addEventListener("pointermove",N),S.addEventListener("pointerup",U),S.addEventListener("pointercancel",U),d.push(()=>{S.removeEventListener("pointerdown",C),S.removeEventListener("pointermove",N),S.removeEventListener("pointerup",U),S.removeEventListener("pointercancel",U)})}function g(S,L){if(!S)return;let O=C=>{C.preventDefault(),C.stopPropagation(),L(),S.classList.add("pressed")},N=()=>S.classList.remove("pressed");S.addEventListener("pointerdown",O),S.addEventListener("pointerup",N),S.addEventListener("pointerleave",N),d.push(()=>{S.removeEventListener("pointerdown",O),S.removeEventListener("pointerup",N),S.removeEventListener("pointerleave",N)})}function f(S,L){if(!S)return;let O=0,N=z=>{z.preventDefault(),O++,L==="fire"&&!i.fire&&(c=!0),i[L]=!0,m(),S.classList.add("pressed")},C=()=>{O=Math.max(0,O-1),O===0&&(i[L]=!1,m(),S.classList.remove("pressed"))},U=z=>z.preventDefault();S.addEventListener("pointerdown",N),S.addEventListener("pointerup",C),S.addEventListener("pointercancel",C),S.addEventListener("pointerleave",C),S.addEventListener("contextmenu",U),d.push(()=>{S.removeEventListener("pointerdown",N),S.removeEventListener("pointerup",C),S.removeEventListener("pointercancel",C),S.removeEventListener("pointerleave",C),S.removeEventListener("contextmenu",U)})}function u(S){if(!S)return;let L=N=>{N.preventDefault(),o=!0,S.classList.add("pressed")},O=()=>S.classList.remove("pressed");S.addEventListener("pointerdown",L),S.addEventListener("pointerup",O),S.addEventListener("pointercancel",O),S.addEventListener("pointerleave",O),d.push(()=>{S.removeEventListener("pointerdown",L),S.removeEventListener("pointerup",O),S.removeEventListener("pointercancel",O),S.removeEventListener("pointerleave",O)})}let y={ArrowLeft:"left",a:"left",A:"left",ArrowRight:"right",d:"right",D:"right",ArrowUp:"gas",w:"gas",W:"gas",ArrowDown:"brake",s:"brake",S:"brake"};function _(S){let L=S.target;if(L&&(L.tagName==="INPUT"||L.tagName==="TEXTAREA"))return;let O=S.key,N=y[O];if(N){i[N]=!0,m(),S.preventDefault();return}if(O===" "){if(S.preventDefault(),S.repeat)return;r==="drag"?o=!0:r==="foot"?(i.fire||(c=!0),i.fire=!0,m()):(i.handbrake=!0,m());return}if(O==="e"||O==="E"||O==="Enter"){S.repeat||(a=!0);return}if(O==="q"||O==="Q"){S.repeat||(l=!0);return}(O==="Shift"||O==="f"||O==="F")&&(i.nitro=!0,m())}function M(S){let L=S.key,O=y[L];if(O){i[O]=!1,m();return}if(L===" "){i.handbrake=!1,i.fire=!1,m();return}(L==="Shift"||L==="f"||L==="F")&&(i.nitro=!1,m())}function A(S){r=S==="drag"||S==="foot"?S:"drive";let L=(N,C)=>{let U=p(N);U&&(U.style.display=C?"":"none")};L("steer-zone",r==="drive"),L("pedal-zone",r!=="foot"),L("btn-shift",r==="drag"),L("joystick",r==="foot"),L("foot-zone",r==="foot");for(let N in i)i[N]=!1;s.id=null,s.x=0,s.y=0;let O=p("joy-knob");O&&(O.style.transform="translate(0px, 0px)");for(let N of document.querySelectorAll("#touch-controls .pressed"))N.classList.remove("pressed");m()}function R(){if(h)return;h=!0,f(p("btn-left"),"left"),f(p("btn-right"),"right"),f(p("btn-gas"),"gas"),f(p("btn-brake"),"brake"),f(p("btn-nitro"),"nitro"),f(p("btn-handbrake"),"handbrake"),u(p("btn-shift")),f(p("btn-fire"),"fire"),f(p("btn-run"),"run"),x(p("joystick"),p("joy-knob")),g(p("btn-action"),()=>{a=!0}),g(p("btn-weapon"),()=>{l=!0}),window.addEventListener("keydown",_),window.addEventListener("keyup",M),d.push(()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",M)});let S=p("touch-controls");S&&(S.style.display="ontouchstart"in window?"":"none"),A(r)}function w(){for(let S of d)S();d.length=0;for(let S in i)i[S]=!1;o=a=l=c=!1,s.id=null,s.x=s.y=0,m(),h=!1}function F(){let S=o;return o=!1,S}let v=S=>()=>{let L;switch(S){case"action":return L=a,a=!1,L;case"cycle":return L=l,l=!1,L;case"fire":return L=c,c=!1,L}};return{input:t,consumeShift:F,consumeAction:v("action"),consumeCycle:v("cycle"),consumeFireEdge:v("fire"),setMode:A,attach:R,detach:w,get mode(){return r}}}var Zy=[.3,.47,.64,.81,1],$y=[1.9,1.45,1.15,.95,.8],Ya=.8,Af=.97,Jy=.8,Ky=45,Qy=2.2,jy=[16765286,448160,10182117,15817653,48121,16704576,15681391],ln=n=>document.getElementById(n);function Rf(n,e){return n+Math.random()*(e-n)}function wf(n){return n[Math.random()*n.length|0]}function eM(n){let e=402/(.42*n.topSpeed+.35*n.accel);return Math.min(17,Math.max(8.5,e))*Rf(.85,1.15)}function tM(n){return{dist:0,speed:0,lateral:2,gear:0,rpm:.15,limiterT:0,bogMul:1,reacted:!1,reaction:null,et:null,trap:0,stats:n}}function nM(n,e,t){let i=n.stats.topSpeed,s=Zy[n.gear]*i,r=1-Math.min(1,n.speed/(s*1.02)),o=e*n.stats.accel*$y[n.gear]*Math.max(0,r);o*=n.bogMul,o-=n.speed*.028+Math.sign(n.speed)*.6,n.speed=Math.max(0,n.speed+o*t),n.dist+=n.speed*t,n.rpm=Math.min(1.06,n.speed/s),n.bogMul+=(1-n.bogMul)*Math.min(1,t*2.5)}function iM(n){return n>=Ya&&n<=Af?"perfect":n<Ya?"early":"late"}function sM(n){if(n.gear>=4)return null;let e=iM(n.rpm);return n.gear++,e==="perfect"?n.speed*=1.015:(n.speed*=.93,n.bogMul=.75),n.limiterT=0,e}function rM(n){let e=eM(n),t=1.1,i=e-(1-Math.exp(-t*e))/t;return{dist:0,speed:0,lateral:-2,et:e,k:t,top:402/i,reactDelay:Rf(.15,.5),launched:!1,launchT:0,finishET:null,trap:0,stats:n}}function oM(n,e,t){if(!n.launched)return;let i=e-n.launchT;i<0||(n.speed=n.top*(1-Math.exp(-n.k*i)),n.dist+=n.speed*t)}function aM({falseStart:n,pET:e,aET:t,pDist:i,aDist:s}){return n?!1:e!=null&&t!=null?e<=t:e!=null?!0:t!=null?!1:i>=s}function lM(n,e,t){if(!n)return 100;let i=Math.max(0,(t??e)-(e??t));return Math.max(400,400+150*Math.round(i*10))}function cM(n,e){return n?"\u{1F3C6} WIN!":e?"\u{1F6AB} DISQUALIFIED":"\u{1F61E} LOSE"}function Cf(n){let e=ln("drag-ui"),t=ln("drag-msg"),i=ln("drag-result"),s=ln("rpm-bar"),r=ln("rpm-shiftzone"),o=ln("btn-shift"),a={s1:ln("bulb-s1"),s2:ln("bulb-s2"),a1:ln("bulb-a1"),a2:ln("bulb-a2"),a3:ln("bulb-a3"),g:ln("bulb-g"),r:ln("bulb-r")},l={active:!1,phase:"idle",t:0,greenT:0,ambersLit:0,player:null,ai:null,aiGroup:null,origPos:null,origRotY:0,dirX:0,dirZ:-1,perpX:1,perpZ:0,msgTimer:0,finished:!1};function c(){for(let N in a)a[N].classList.remove("lit")}function h(N){a[N].classList.add("lit")}function d(N,C){t.textContent=N,l.msgTimer=C||0}function p(N,C){try{n.audio.beep(N,C)}catch{}}function m(){let N=n.getPlayer();return N&&N.stats?N.stats:n.effectiveStats(N.def,N.upgrades)}function x(N,C){let U=n.city.dragStrip;N.position.set(U.startX+l.perpX*C,0,U.startZ+l.perpZ*C),N.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0)}function g(N,C){let U=n.city.dragStrip;N.position.set(U.startX+l.dirX*C.dist+l.perpX*C.lateral,0,U.startZ+l.dirZ*C.dist+l.perpZ*C.lateral)}function f(N,C,U){let z=N.userData.wheels;if(z)for(let B of z){let G=B.userData.spin||[];for(let W of G)W.rotation.x+=C*U*2.2}}function u(N){return tM(N)}function y(N,C,U){nM(N,C,U)}function _(N){let C=sM(N);C&&(C==="perfect"?(d("PERFECT SHIFT!",1),p(1200,.08)):(d(C==="early"?"TOO EARLY \u2014 BOGGED":"TOO LATE \u2014 BOGGED",1),p(220,.15)))}function M(N){return rM(N)}function A(N,C){oM(N,l.greenT,C)}function R(){l.phase="stage",l.t=0,c(),h("s1"),h("s2"),i.classList.add("hidden"),i.innerHTML="",d("STAGE!"),s.style.width="15%",r.style.left=Ya*100+"%",r.style.width=(Af-Ya)*100+"%",o&&o.classList.remove("hidden")}function w(){l.phase="green",l.t=0,l.greenT=0,h("g"),d("GO!"),p(880,.4),l.phase="racing"}function F(){l.phase="red",c(),h("r"),d("FALSE START!"),p(180,.6),v("FALSE START \u2014 you jumped the green.")}function v(N){l.phase="done",l.finished=!0;let C=l.player,U=l.ai,z=!!(N&&N.indexOf("FALSE START")===0),B=aM({falseStart:z,pET:C.et,aET:U.finishET,pDist:C.dist,aDist:U.dist}),G=C.et,W=U.finishET,$=C.reaction!=null?C.reaction.toFixed(3)+"s":"\u2014",J=(C.trap*Qy).toFixed(1),he=lM(B,G,W),V=cM(B,z);n.addCash(he),i.innerHTML="<h2>"+V+"</h2>"+(N?"<p>"+N+"</p>":"")+"<p>ET: "+(G==null?"DNF":G.toFixed(3)+"s")+" &nbsp;\xB7&nbsp; AI ET: "+(W==null?"DNF":W.toFixed(3)+"s")+"</p><p>Trap speed: "+J+" MPH &nbsp;\xB7&nbsp; Reaction: "+$+"</p><p>+$"+he+' cash</p><button id="drag-rematch" class="mbtn primary">REMATCH</button><button id="drag-back" class="mbtn">EXIT</button>',i.classList.remove("hidden"),ln("drag-rematch").onclick=()=>{S()},ln("drag-back").onclick=()=>{L()};try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}}function S(){l.active&&L();let C=n.getPlayer().group;l.origPos=C.position.clone(),l.origRotY=C.rotation.y;let U=n.city.dragStrip,z=Math.hypot(U.dirX,U.dirZ)||1;l.dirX=U.dirX/z,l.dirZ=U.dirZ/z,l.perpX=-l.dirZ,l.perpZ=l.dirX,x(C,2),C.rotation.set(0,Math.atan2(-l.dirX,-l.dirZ),0),l.player=u(m());let B=wf(n.CAR_DEFS),G=n.buildCar(Object.assign({},B,{color:wf(jy)}));n.scene.add(G),x(G,-2),l.aiGroup=G,l.ai=M(n.effectiveStats(B)),l.active=!0,l.finished=!1,l.t=0,l.ambersLit=0,l.greenT=0,l.msgTimer=0,e.classList.remove("hidden"),n.controls.setMode("drag");let W=n.camera;W.position.set(U.startX-l.dirX*12+l.perpX*12,5,U.startZ-l.dirZ*12+l.perpZ*12),W.lookAt(U.startX+l.dirX*8,1,U.startZ+l.dirZ*8),R()}function L(){l.aiGroup&&(n.scene.remove(l.aiGroup),l.aiGroup=null);let N=n.getPlayer();N&&N.group&&l.origPos&&(N.group.position.copy(l.origPos),N.group.rotation.y=l.origRotY),e.classList.add("hidden"),i.classList.add("hidden"),o&&o.classList.add("hidden");try{n.controls.setMode("drive")}catch{}try{n.audio.engine(0,0),n.audio.skid(!1)}catch{}l.active=!1,l.phase="idle",l.finished=!1,c()}function O(N){if(!l.active)return;N=Math.min(N,.05);let C=n.controls.input||{},U=Math.max(0,Math.min(1,C.throttle||0));if((l.phase==="stage"||l.phase==="tree")&&U>.5){F();return}if(l.msgTimer>0&&(l.msgTimer-=N,l.msgTimer<=0&&l.phase==="racing"&&d("GO!")),l.phase==="stage")l.t+=N,l.t>=1&&(l.phase="tree",l.t=0,l.ambersLit=0,d("READY\u2026"));else if(l.phase==="tree"){l.t+=N;let B=Math.min(3,Math.floor(l.t/.5)+1);for(;l.ambersLit<B;)l.ambersLit++,h("a"+l.ambersLit),p(440,.15);l.t>=1.5&&w()}else if(l.phase==="racing"){l.greenT+=N;let B=l.player,G=l.ai;!B.reacted&&U>.5&&(B.reacted=!0,B.reaction=l.greenT),!G.launched&&l.greenT>=G.reactDelay&&(G.launched=!0,G.launchT=l.greenT),y(B,U,N),n.controls.consumeShift&&n.controls.consumeShift()&&_(B),B.rpm>=1&&U>.3?(B.limiterT+=N,B.limiterT>=Jy&&(B.speed*=.9,B.limiterT=0,d("LIMITER!",.8),p(160,.2))):B.limiterT=Math.max(0,B.limiterT-N*2),A(G,N),B.et==null&&B.dist>=402&&(B.et=l.greenT,B.trap=B.speed),G.finishET==null&&G.dist>=402&&(G.finishET=l.greenT,G.trap=G.speed);let W=l.greenT>=Ky;if(B.et!=null&&G.finishET!=null||W||B.et!=null&&l.greenT>B.et+8||G.finishET!=null&&l.greenT>G.finishET+8){v(W&&B.et==null&&G.finishET==null?"TIMEOUT \u2014 nobody finished.":null);return}s.style.width=Math.min(1,B.rpm)*100+"%";try{n.audio.engine(B.rpm,U),n.audio.skid(U>.8&&B.speed<8&&B.gear===0)}catch{}}let z=n.getPlayer().group;if(g(z,l.player),l.aiGroup&&g(l.aiGroup,l.ai),f(z,l.player.speed,N),l.aiGroup&&f(l.aiGroup,l.ai.speed,N),l.phase==="racing"||l.phase==="done"){let B=n.camera,G=z.position.x,W=z.position.z,$=G-l.dirX*11+l.perpX*7,J=W-l.dirZ*11+l.perpZ*7;B.position.x+=($-B.position.x)*Math.min(1,N*4),B.position.y+=(4.5-B.position.y)*Math.min(1,N*4),B.position.z+=(J-B.position.z)*Math.min(1,N*4),B.lookAt(G+l.dirX*12,1.2,W+l.dirZ*12)}}return ln("drag-exit").onclick=()=>L(),{enter:S,exit:L,update:O,get active(){return l.active}}}function Pf(){let n=null,e=null,t=null,i=null,s=null,r=null,o=null,a=null,l=!1,c=!1;function h(){if(n)return!0;let d=window.AudioContext||window.webkitAudioContext;if(!d)return!1;n=new d,e=n.createGain(),e.gain.value=.5,e.connect(n.destination),t=n.createOscillator(),t.type="sawtooth",t.frequency.value=70,i=n.createOscillator(),i.type="square",i.frequency.value=38,s=n.createBiquadFilter(),s.type="lowpass",s.frequency.value=400,s.Q.value=2,r=n.createGain(),r.gain.value=0,t.connect(s),i.connect(s),s.connect(r),r.connect(e),t.start(),i.start();let p=n.sampleRate,m=n.createBuffer(1,p,n.sampleRate),x=m.getChannelData(0);for(let u=0;u<p;u++)x[u]=Math.random()*2-1;a=m;let g=n.createBufferSource();g.buffer=m,g.loop=!0;let f=n.createBiquadFilter();return f.type="bandpass",f.frequency.value=900,f.Q.value=1.1,o=n.createGain(),o.gain.value=0,g.connect(f),f.connect(o),o.connect(e),g.start(),!0}return{unlock(){c=!0,h()&&(n.state==="suspended"&&n.resume(),l=!0)},engine(d,p){if(!n||!l)return;let m=Math.max(0,Math.min(1,d)),x=Math.max(0,Math.min(1,p)),g=n.currentTime,f=60+m*220;t.frequency.setTargetAtTime(f,g,.03),i.frequency.setTargetAtTime(f*.5+3,g,.03),s.frequency.setTargetAtTime(300+m*900,g,.05),r.gain.setTargetAtTime(x*.11+m*.04,g,.06)},skid(d){!n||!l||o.gain.setTargetAtTime(d?.12:0,n.currentTime,d?.05:.12)},beep(d=660,p=.08){if(!c||!h())return;n.state==="suspended"&&n.resume();let m=n.currentTime,x=n.createOscillator();x.type="sine",x.frequency.value=d;let g=n.createGain();g.gain.setValueAtTime(1e-4,m),g.gain.exponentialRampToValueAtTime(.25,m+.012),g.gain.exponentialRampToValueAtTime(1e-4,m+p),x.connect(g),g.connect(e),x.start(m),x.stop(m+p+.03)},shot(d="pistol"){if(!c||!h())return;let p=n.currentTime,m={pistol:[2600,.16,.5],shotgun:[1400,.32,.75],smg:[3e3,.09,.35],rifle:[2200,.2,.55]}[d]||[2600,.16,.5],x=n.createBufferSource();x.buffer=a;let g=n.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(m[0],p),g.frequency.exponentialRampToValueAtTime(300,p+m[1]);let f=n.createGain();f.gain.setValueAtTime(m[2],p),f.gain.exponentialRampToValueAtTime(1e-4,p+m[1]),x.connect(g),g.connect(f),f.connect(e),x.start(p,Math.random()*.5),x.stop(p+m[1]+.02);let u=n.createOscillator();u.type="sine",u.frequency.setValueAtTime(140,p),u.frequency.exponentialRampToValueAtTime(40,p+.12);let y=n.createGain();y.gain.setValueAtTime(m[2]*.8,p),y.gain.exponentialRampToValueAtTime(1e-4,p+.14),u.connect(y),y.connect(e),u.start(p),u.stop(p+.16)},click(){this.beep(1800,.03)},shutdown(){if(n)try{n.close()}catch{}n=null,e=null,l=!1,t=i=s=r=o=a=null}}}var If="citydriver_save_v1";var Za=5,hM=[14100029,2060267,16757504,2976335,7041664,16317180,8141549,1120295];var Df=["engine","turbo","tires","suspension","nitro"],uM={engine:"Engine",turbo:"Turbo",tires:"Tires",suspension:"Suspension",nitro:"Nitro"},dM={engine:"+6% top speed \xB7 +10% accel / lvl",turbo:"+3% top speed \xB7 +14% accel / lvl",tires:"+7% grip / lvl",suspension:"+5% handling / lvl",nitro:"+25% power \xB7 +0.6s duration / lvl"},so=()=>({engine:0,turbo:0,tires:0,suspension:0,nitro:0});function bh(){return{cash:5e3,currentCar:"sport",owned:["sport"],upgrades:{sport:so()},paint:{sport:14100029},wheels:{sport:0}}}function fM(n){let e=Object.assign(bh(),n||{}),t=new Set(Ei.map(i=>i.id));(!Array.isArray(e.owned)||!e.owned.length)&&(e.owned=["sport"]),e.owned=e.owned.filter(i=>t.has(i)),e.owned.length||(e.owned=["sport"]),e.owned.includes(e.currentCar)||(e.currentCar=e.owned[0]),e.upgrades=Object.assign({},e.upgrades),e.paint=Object.assign({},e.paint),e.wheels=Object.assign({},e.wheels);for(let i of e.owned){if(!e.upgrades[i]||typeof e.upgrades[i]!="object")e.upgrades[i]=so();else for(let s of Df)e.upgrades[i][s]=Math.max(0,Math.min(Za,e.upgrades[i][s]|0));typeof e.paint[i]!="number"&&(e.paint[i]=14100029),e.wheels[i]=Math.max(0,e.wheels[i]|0)}return e.cash=Math.max(0,Math.floor(+e.cash||0)),e}function Uf(){try{let n=localStorage.getItem(If);return n?fM(JSON.parse(n)):bh()}catch{return bh()}}function xn(n){try{localStorage.setItem(If,JSON.stringify(n))}catch{}}function Lf(n,e,t){return Math.round(400*Math.pow(t+1,1.7)*(1+n.price/2e4))}var pM=n=>"#"+n.toString(16).padStart(6,"0");function Nf(n){let e=n.save,t=g=>document.getElementById(g),i=t("garage-cars"),s=t("garage-upgrades"),r=t("garage-style"),o={topSpeed:1,accel:1,handling:1,grip:1};for(let g of Ei)for(let f in o)o[f]=Math.max(o[f],g[f]);function a(){t("garage-cash").textContent=e.cash.toLocaleString()}let l=(g,f,u)=>{let y=Math.max(5,Math.round(f/u*100));return`<div class="stat-row"><span>${g}</span><div class="sbar"><i style="width:${y}%"></i></div></div>`};function c(){i.innerHTML=Ei.map(g=>{let f=e.owned.includes(g.id),u=e.currentCar===g.id,y;return u?y='<button class="buy-btn" disabled>SELECTED</button>':f?y=`<button class="buy-btn" data-act="select" data-id="${g.id}">SELECT</button>`:y=`<button class="buy-btn" data-act="buy" data-id="${g.id}"${e.cash<g.price?" disabled":""}>$${g.price.toLocaleString()}</button>`,`<div class="car-card${u?" selected":""}"><div class="cinfo"><b>${g.name}</b><small>${g.desc}</small><div class="stat-bars">${l("SPD",g.topSpeed,o.topSpeed)}${l("ACC",g.accel,o.accel)}${l("HDL",g.handling,o.handling)}${l("GRP",g.grip,o.grip)}</div></div>${y}</div>`}).join("")}function h(){let g=n.getDef(e.currentCar);if(!g){s.innerHTML="";return}let f=e.upgrades[g.id]||(e.upgrades[g.id]=so());s.innerHTML=`<div class="upg-car-name">${g.name} \u2014 performance</div>`+Df.map(u=>{let y=f[u]||0,_=y>=Za,M=_?0:Lf(g,u,y),A="";for(let w=0;w<Za;w++)A+=`<div class="pip${w<y?" on":""}"></div>`;let R=_?'<button class="upg-btn" disabled>MAX</button>':`<button class="upg-btn" data-key="${u}"${e.cash<M?" disabled":""}>$${M.toLocaleString()}</button>`;return`<div class="upg-row"><div class="uinfo"><b>${uM[u]}</b><small>${dM[u]}</small><div class="pips">${A}</div></div>${R}</div>`}).join("")}function d(){let g=e.currentCar,f=e.paint[g],u=hM.map(y=>`<button class="swatch${y===f?" sel":""}" data-hex="${y}" style="background:${pM(y)}" aria-label="paint"></button>`).join("");r.innerHTML=`<div class="style-sec"><b>Quick paint \u2014 FREE</b><div class="swatch-row">${u}</div></div><button class="mbtn primary" data-act="editor" style="width:100%">\u{1F3A8} OPEN SKIN EDITOR \u2014 all free</button><p class="store-tip">Any color, rims, stripes, underglow, window tint, and your driver's look.</p>`}function p(){a(),c(),h(),d()}i.addEventListener("click",g=>{let f=g.target.closest("button[data-act]");if(!f||f.disabled)return;let u=n.getDef(f.dataset.id);if(u)if(f.dataset.act==="buy"){if(e.owned.includes(u.id)||e.cash<u.price)return;e.cash-=u.price,e.owned.push(u.id),e.upgrades[u.id]||(e.upgrades[u.id]=so()),typeof e.paint[u.id]!="number"&&(e.paint[u.id]=u.color),e.wheels[u.id]===void 0&&(e.wheels[u.id]=0),e.currentCar=u.id,xn(e),n.onSelectCar(u.id),p()}else{if(e.currentCar===u.id)return;e.currentCar=u.id,xn(e),n.onSelectCar(u.id),p()}}),s.addEventListener("click",g=>{let f=g.target.closest("button[data-key]");if(!f||f.disabled)return;let u=n.getDef(e.currentCar);if(!u)return;let y=f.dataset.key,_=e.upgrades[u.id]||(e.upgrades[u.id]=so()),M=_[y]||0,A=Lf(u,y,M);M>=Za||e.cash<A||(e.cash-=A,_[y]=M+1,xn(e),n.refreshScene(),p())}),r.addEventListener("click",g=>{let f=e.currentCar;if(g.target.closest('button[data-act="editor"]')){n.openEditor&&n.openEditor();return}let u=g.target.closest("button.swatch");if(u){let y=parseInt(u.dataset.hex,10);e.paint[f]!==y&&(e.paint[f]=y,xn(e),n.onPaint(y),p())}});let m=[...document.querySelectorAll("#garage .gtab")],x={cars:i,upgrades:s,style:r};return m.forEach(g=>g.addEventListener("click",()=>{m.forEach(f=>f.classList.toggle("active",f===g));for(let f in x)x[f].classList.toggle("hidden",f!==g.dataset.tab)})),p(),{refresh:p}}var Of=["low","medium","high"];function Th(n){switch(n){case 2:return{pixelRatioCap:2,bloom:!0,shadows:!0,shadowSize:1024,particles:1};case 1:return{pixelRatioCap:1.25,bloom:!0,shadows:!0,shadowSize:512,particles:.7};default:return{pixelRatioCap:1,bloom:!1,shadows:!1,shadowSize:512,particles:.4}}}var $a=class{constructor(e="auto"){this.mode=e,this.level=2,this._frames=0,this._time=0,this._lowStreak=0,this._highStreak=0,this._listeners=[],this._cooldown=0}onChange(e){this._listeners.push(e)}_emit(){for(let e of this._listeners)e(this.level,Th(this.level))}setMode(e){this.mode=e;let t=e==="high"?2:e==="low"?0:this.level;t!==this.level&&(this.level=t,this._emit()),this._lowStreak=0,this._highStreak=0}cycleMode(){return this.setMode(this.mode==="auto"?"high":this.mode==="high"?"low":"auto"),this.mode}update(e){if(this.mode!=="auto"||e<=0||(this._cooldown>0&&(this._cooldown-=e),this._frames++,this._time+=e,this._time<2))return!1;let t=this._frames/this._time;if(this._frames=0,this._time=0,this._cooldown>0)return!1;if(t<27&&this.level>0){if(++this._lowStreak>=2)return this.level--,this._lowStreak=0,this._highStreak=0,this._cooldown=4,this._emit(),!0}else if(t>55&&this.level<2){if(++this._highStreak>=5)return this.level++,this._highStreak=0,this._lowStreak=0,this._cooldown=4,this._emit(),!0}else this._lowStreak=0,this._highStreak=0;return!1}};Ut();var Ja={day:{label:"DAY",top:3108822,horizon:13625079,fog:13623538,sunColor:16774368,sunI:2.2,elev:62,azim:35,hemiSky:12572927,hemiGround:6978138,hemiI:.85,exposure:1,lightsOn:!1,windowsGlow:0,bloom:.25,stars:0},sunset:{label:"SUNSET",top:2828910,horizon:16751190,fog:15245418,sunColor:16756838,sunI:2.6,elev:9,azim:68,hemiSky:9072560,hemiGround:4864560,hemiI:.6,exposure:1.1,lightsOn:!0,windowsGlow:.9,bloom:.45,stars:.15},night:{label:"NIGHT",top:330004,horizon:1715018,fog:857638,sunColor:10336488,sunI:.55,elev:38,azim:210,hemiSky:2373210,hemiGround:790292,hemiI:.35,exposure:.95,lightsOn:!0,windowsGlow:1.6,bloom:.65,stars:1}},wh=["day","sunset","night"],mM=`
varying vec3 vDir;
void main(){
  vDir = normalize(position);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
}`,gM=`
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
}`;function Ff(){let n=new en(1500,24,16),e={uTop:{value:new Le(3108822)},uHorizon:{value:new Le(13625079)},uSunDir:{value:new I(0,1,0)},uSunColor:{value:new Le(16774368)},uSunI:{value:2.2},uStars:{value:0}},t=new Gt({vertexShader:mM,fragmentShader:gM,uniforms:e,side:Qt,depthWrite:!1,fog:!1}),i=new re(n,t);return i.frustumCulled=!1,i.renderOrder=-10,{mesh:i,uniforms:e}}function xM(n,e){let t=n*Math.PI/180,i=e*Math.PI/180;return new I(Math.cos(t)*Math.sin(i),Math.sin(t),Math.cos(t)*Math.cos(i))}function zf(n,e){let t=Ja[e]||Ja.day,{uniforms:i,sun:s,hemi:r,scene:o,renderer:a}=n;i.uTop.value.setHex(t.top),i.uHorizon.value.setHex(t.horizon),i.uSunColor.value.setHex(t.sunColor),i.uSunI.value=t.sunI,i.uStars.value=t.stars;let l=xM(t.elev,t.azim);return i.uSunDir.value.copy(l),s.color.setHex(t.sunColor),s.intensity=t.sunI,r.color.setHex(t.hemiSky),r.groundColor.setHex(t.hemiGround),r.intensity=t.hemiI,o.fog.color.setHex(t.fog),a.toneMappingExposure!==void 0&&(a.toneMappingExposure=t.exposure),n.sunElev=t.elev,n.sunAzim=t.azim,n.sunDir=l,t}Ut();function _M(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,4,32,32,30);t.addColorStop(0,"rgba(255,255,255,0.85)"),t.addColorStop(.5,"rgba(255,255,255,0.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let i=new yn(n);return i.colorSpace=xt,i}var Ah=null;function vM(){return Ah||(Ah=_M()),Ah}var bi=class{constructor(e,t,{color:i=12303291,opacity:s=.5,blending:r=Oi,size:o=1.6}={}){this.max=t,this.i=0,this.geo=new rt(1,1),this.mat=new ds({map:vM(),color:i,transparent:!0,opacity:s,blending:r,depthWrite:!1}),this.items=[];for(let a=0;a<t;a++){let l=new ar(this.mat.clone());l.visible=!1,l.userData={life:0,maxLife:1,vx:0,vy:0,vz:0,grow:1,size:o},e.add(l),this.items.push(l)}this._v=new I}emit(e,t,i,{vx:s=0,vy:r=1.2,vz:o=0,life:a=.7,size:l=1.6,grow:c=2.2}={}){let h=this.items[this.i];this.i=(this.i+1)%this.max,h.visible=!0,h.position.set(e,t,i);let d=h.userData;d.life=a,d.maxLife=a,d.vx=s,d.vy=r,d.vz=o,d.grow=c,d.size=l,h.scale.set(l,l,1),h.material.opacity=this.mat.opacity}update(e,t){for(let i of this.items){if(!i.visible)continue;let s=i.userData;if(s.life-=e,s.life<=0){i.visible=!1;continue}i.position.x+=s.vx*e,i.position.y+=s.vy*e,i.position.z+=s.vz*e;let r=1-s.life/s.maxLife,o=s.size+s.grow*r;i.scale.set(o,o,1),i.material.opacity=this.mat.opacity*(1-r)}}setGlobalOpacity(e){this.mat.opacity=e}},Ka=class{constructor(e,t=400){this.max=t,this.i=0;let i=new rt(.32,1.4);i.rotateX(-Math.PI/2),this.mesh=new Yt(i,new ht({color:657930,transparent:!0,opacity:.55,depthWrite:!1}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=2;let s=new ct;s.makeScale(0,0,0);for(let r=0;r<t;r++)this.mesh.setMatrixAt(r,s);this.mesh.instanceMatrix.needsUpdate=!0,e.add(this.mesh),this._m=new ct,this._q=new On,this._p=new I,this._s=new I(1,1,1),this._up=new I(0,1,0)}add(e,t,i){this._q.setFromAxisAngle(this._up,i),this._p.set(e,.06,t),this._m.compose(this._p,this._q,this._s),this.mesh.setMatrixAt(this.i,this._m),this.i=(this.i+1)%this.max,this.mesh.instanceMatrix.needsUpdate=!0}setVisible(e){this.mesh.visible=e}};function ro(){return{driftT:0,driftAcc:0}}function Bf(n,e,t,i){if(e&&Math.abs(t)>=8)return n.driftT+=i,n.driftAcc+=i*15,0;let s=0;return n.driftT>=1&&(s=Math.round(n.driftAcc)),n.driftT=0,n.driftAcc=0,s}var Hf=()=>"ontouchstart"in window||(navigator.maxTouchPoints||0)>0;function kf(n){let e=!1,t={w:window.innerWidth,h:window.innerHeight};function i(){let r=window.innerWidth,o=window.innerHeight;e=Hf()&&o>r,t.w=e?o:r,t.h=e?r:o;let a=document.body,l=document.documentElement.style;a.classList.toggle("force-landscape",e),a.classList.toggle("compact",t.h<=520),l.setProperty("--sw",r+"px"),l.setProperty("--app-w",t.w+"px"),l.setProperty("--app-h",t.h+"px"),n&&n(t.w,t.h)}async function s(){if(!Hf())return;let r=document.documentElement;try{!document.fullscreenElement&&r.requestFullscreen&&await r.requestFullscreen({navigationUI:"hide"})}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}i()}return window.addEventListener("resize",i),window.addEventListener("orientationchange",()=>setTimeout(i,200)),document.addEventListener("fullscreenchange",()=>setTimeout(i,100)),i(),{view:t,goLandscape:s,refresh:i,get rotated(){return e}}}var oo=[14100029,16735802,16747546,16757504,16765503,13038642,4906624,1483594,1013358,1622208,3718648,2060267,1981066,8141549,11032055,15557798,16723555,7999504,9067034,13211182,16317180,13358561,7041664,1120295],Gf=[16109749,15250575,13011554,11037509,8014380,4860954],Vf=[1118481,2759184,5913118,10119738,14266986,15263976,14100029,3718648],ao=["none","center","dual","side"],lo=["clear","dark","limo"],Xi=["none","cap","beanie","cowboy","crown","helmet"],Qa={none:"No hat",cap:"Snapback",beanie:"Beanie",cowboy:"Stetson",crown:"Crown",helmet:"Helmet"},Ti=n=>Number.isInteger(n)&&n>=0&&n<=16777215,Rh=(n,e,t)=>e.includes(n)?n:t;function Wf(){return{rims:12172998,stripes:"none",stripe:16317180,glow:null,tint:"dark"}}function yM(){return{shirt:2845872,pants:2963272,skin:13011554,hair:2759184,hat:"none",hatColor:2237739}}function Xf(n){let e=Wf(),t=n&&typeof n=="object"?n:{};return{rims:Ti(t.rims)?t.rims:e.rims,stripes:Rh(t.stripes,ao,e.stripes),stripe:Ti(t.stripe)?t.stripe:e.stripe,glow:Ti(t.glow)?t.glow:null,tint:Rh(t.tint,lo,e.tint)}}function ja(n){let e=yM(),t=n&&typeof n=="object"?n:{};return{shirt:Ti(t.shirt)?t.shirt:e.shirt,pants:Ti(t.pants)?t.pants:e.pants,skin:Ti(t.skin)?t.skin:e.skin,hair:Ti(t.hair)?t.hair:e.hair,hat:Rh(t.hat,Xi,e.hat),hatColor:Ti(t.hatColor)?t.hatColor:e.hatColor}}function Ch(n){return String(n??"").replace(/[^\w .\-'!?]/g,"").trim().slice(0,16)}function qf(n){(!n.carSkin||typeof n.carSkin!="object")&&(n.carSkin={});for(let t of Object.keys(n.carSkin))n.carSkin[t]=Xf(n.carSkin[t]);n.outfit=ja(n.outfit),n.hats=Xi.slice();let e=Ch(n.name);return n.name=e||"Driver"+Math.floor(1e3+Math.random()*9e3),n}function vs(n,e){return n.carSkin[e]||(n.carSkin[e]=Wf()),n.carSkin[e]}function Yf(n,e){let t=vs(n,e),i=n.outfit;return{p:n.paint[e]|0,r:t.rims,s:ao.indexOf(t.stripes),sc:t.stripe,g:t.glow==null?-1:t.glow,t:lo.indexOf(t.tint),o:[i.shirt,i.pants,i.skin,i.hair,Xi.indexOf(i.hat),i.hatColor]}}function Zf(n){n=n||{};let e=Array.isArray(n.o)?n.o:[];return{paint:Ti(n.p)?n.p:null,carSkin:Xf({rims:n.r,stripes:ao[n.s],stripe:n.sc,glow:n.g,tint:lo[n.t]}),outfit:ja({shirt:e[0],pants:e[1],skin:e[2],hair:e[3],hat:Xi[e[4]],hatColor:e[5]})}}var el=n=>"#"+(n|0).toString(16).padStart(6,"0");var tl=[{id:"pistol",name:"P9 Pistol",price:1200,rate:.28,auto:!1,pellets:1,spread:.012,range:90,ammoBox:30,ammoPrice:60,start:30,desc:"Reliable sidearm. Semi-auto."},{id:"shotgun",name:"Breacher 12",price:3200,rate:.85,auto:!1,pellets:7,spread:.09,range:40,ammoBox:16,ammoPrice:90,start:16,desc:"Pump action. Brutal up close."},{id:"smg",name:"Viper SMG",price:4500,rate:.085,auto:!0,pellets:1,spread:.04,range:70,ammoBox:90,ammoPrice:150,start:90,desc:"Full auto. Sprays fast."},{id:"rifle",name:"Ranger AR",price:9e3,rate:.12,auto:!0,pellets:1,spread:.008,range:140,ammoBox:60,ammoPrice:200,start:60,desc:"Long range, dead accurate."}],$f=[2845872,15023678,3114330,1712172,16251644,14065198,8411861,15557798],co=0,nl=Xi.map(n=>({id:n,name:Qa[n],price:0})),Ph=15,qi=n=>tl.find(e=>e.id===n)||null;function Jf(n){let e=new Set(tl.map(t=>t.id));Array.isArray(n.weapons)||(n.weapons=[]),n.weapons=n.weapons.filter((t,i,s)=>e.has(t)&&s.indexOf(t)===i),(!n.ammo||typeof n.ammo!="object")&&(n.ammo={});for(let t of Object.keys(n.ammo))e.has(t)||delete n.ammo[t];for(let t of n.weapons)n.ammo[t]=Math.max(0,n.ammo[t]|0);return n.weapons.includes(n.equipped)||(n.equipped=n.weapons[0]||null),n.outfit=ja(n.outfit),n.hats=nl.map(t=>t.id),n}var Bn=n=>({ok:!1,msg:n}),ys=n=>({ok:!0,msg:n});function Kf(n,e){let t=qi(e);return t?n.weapons.includes(e)?Bn("Already owned"):n.cash<t.price?Bn("Not enough cash"):(n.cash-=t.price,n.weapons.push(e),n.ammo[e]=(n.ammo[e]|0)+t.start,n.equipped=e,ys(t.name+" bought")):Bn("Unknown weapon")}function Qf(n,e){let t=qi(e);return t?n.weapons.includes(e)?n.cash<t.ammoPrice?Bn("Not enough cash"):(n.cash-=t.ammoPrice,n.ammo[e]=(n.ammo[e]|0)+t.ammoBox,ys("+"+t.ammoBox+" rounds")):Bn("Buy the gun first"):Bn("Unknown weapon")}function jf(n,e){return e===null?(n.equipped=null,ys("Holstered")):n.weapons.includes(e)?(n.equipped=e,ys(qi(e).name+" equipped")):Bn("Not owned")}function Lh(n){let e=[...n.weapons,null];if(e.length===1)return null;let t=e.indexOf(n.equipped);return n.equipped=e[(t+1)%e.length],n.equipped}function ep(n,e){return!Number.isInteger(e)||e<0||e>16777215?Bn("Unknown color"):n.outfit.shirt===e?Bn("Already wearing it"):n.cash<co?Bn("Not enough cash"):(n.cash-=co,n.outfit.shirt=e,ys("New shirt"))}function tp(n,e){let t=nl.find(i=>i.id===e);return t?n.hats.includes(e)?(n.outfit.hat=e,ys(t.name+" on")):n.cash<t.price?Bn("Not enough cash"):(n.cash-=t.price,n.hats.push(e),n.outfit.hat=e,ys(t.name+" bought")):Bn("Unknown hat")}var il=class{constructor(){this.reset(0,0,0)}reset(e,t,i){this.pos={x:e,z:t},this.heading=i,this.speed=0,this.phase=0}update(e,t,i){t=Math.min(t,.05);let s=np(e.moveX||0),r=np(e.moveY||0);this.heading-=s*2.8*t*(r<0?.7:1);let o=r>=0?r*(e.run?7.8:4.2):r*2.6,a=Math.min(1,t*(Math.abs(o)>Math.abs(this.speed)?9:14));this.speed+=(o-this.speed)*a,Math.abs(this.speed)<.02&&!r&&(this.speed=0);let l=-Math.sin(this.heading),c=-Math.cos(this.heading),h=this.pos.x+l*this.speed*t,d=this.pos.z+c*this.speed*t;if(i){let p=i(h,d,.45);h=p.x,d=p.z}return this.pos.x=h,this.pos.z=d,this.phase+=this.speed*t*2.1,this}};function np(n){return n<-1?-1:n>1?1:n}function dr(n,e,t,i){let s=n-t,r=e-i;return Math.sqrt(s*s+r*r)}function Ih(n,e,t){let i=Math.cos(t),s=-Math.sin(t);return{x:n-i*1.9,z:e-s*1.9,heading:t}}function ip(n,e,t,i,s,r){let o=0,a=r;if(Math.abs(t)<1e-9){if(n<s.minX||n>s.maxX)return 1/0}else{let l=(s.minX-n)/t,c=(s.maxX-n)/t;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}if(Math.abs(i)<1e-9){if(e<s.minZ||e>s.maxZ)return 1/0}else{let l=(s.minZ-e)/i,c=(s.maxZ-e)/i;if(l>c){let h=l;l=c,c=h}if(o=Math.max(o,l),a=Math.min(a,c),o>a)return 1/0}return o}function sp(n,e,t,i,s,r,o,a){let l=n-s,c=e-r,h=l*t+c*i,d=l*l+c*c-o*o,p=h*h-d;if(p<0)return 1/0;let m=Math.sqrt(p),x=-h-m;return x<0&&(x=-h+m),x>=0&&x<=a?x:1/0}Ut();var MM=()=>new ye({color:13011554,roughness:.75}),SM=()=>new ye({color:2963272,roughness:.85}),EM=()=>new ye({color:1118481,roughness:.6}),bM=()=>new ye({color:2759184,roughness:.9}),TM=()=>new ye({color:1908515,metalness:.7,roughness:.35});function Nt(n,e,t,i,s=0){let r=new Oe(n,e,t);r.translate(0,s,0);let o=new re(r,i);return o.castShadow=!0,o}function wM(n){let e=new lt,t=TM(),i=new ye({color:7031342,roughness:.8});return n==="pistol"?(e.add(Nt(.06,.08,.24,t,.05).translateZ(-.08)),e.add(Nt(.05,.12,.06,t,-.02))):n==="shotgun"?(e.add(Nt(.07,.07,.75,t,.05).translateZ(-.28)),e.add(Nt(.08,.09,.22,i,0).translateZ(-.38)),e.add(Nt(.07,.12,.3,i,0).translateZ(.18))):n==="smg"?(e.add(Nt(.07,.11,.42,t,.05).translateZ(-.12)),e.add(Nt(.05,.2,.06,t,-.08).translateZ(-.06)),e.add(Nt(.04,.04,.12,t,.07).translateZ(-.38))):(e.add(Nt(.07,.11,.7,t,.05).translateZ(-.22)),e.add(Nt(.05,.18,.07,t,-.07).translateZ(-.12)),e.add(Nt(.06,.13,.26,t,.02).translateZ(.24)),e.add(Nt(.05,.05,.2,t,.14).translateZ(-.15))),e.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),e}function AM(n,e){if(n==="crown"){let t=new lt,i=new ye({color:16765503,metalness:1,roughness:.25,emissive:3811840}),s=new re(new Tt(.16,.16,.09,16,1,!0),i);s.material.side=Et,s.position.y=.02,t.add(s);for(let r=0;r<6;r++){let o=r/6*Math.PI*2,a=new re(new lr(.035,.09,4),i);a.position.set(Math.cos(o)*.155,.1,Math.sin(o)*.155),t.add(a);let l=new re(new en(.018,6,6),new ye({color:e,emissive:e,emissiveIntensity:.6}));l.position.set(Math.cos(o+.5)*.162,.02,Math.sin(o+.5)*.162),t.add(l)}return t}if(n==="helmet"){let t=new lt,i=new Vi({color:e,metalness:.4,roughness:.25,clearcoat:1}),s=new re(new en(.2,16,12,0,Math.PI*2,0,Math.PI/1.7),i);s.position.y=-.06,t.add(s);let r=new re(new en(.205,16,8,Math.PI*1.2,Math.PI*.6,Math.PI*.35,Math.PI*.25),new ye({color:724762,metalness:.9,roughness:.1}));return r.position.y=-.06,t.add(r),t}if(n==="cap"){let t=new lt,i=new ye({color:e,roughness:.7}),s=new re(new en(.155,14,8,0,Math.PI*2,0,Math.PI/2),i);t.add(s);let r=Nt(.24,.02,.14,i);return r.position.set(0,.01,-.15),t.add(r),t}if(n==="beanie"){let t=new ye({color:e,roughness:.95});return new re(new en(.158,14,8,0,Math.PI*2,0,Math.PI/1.8),t)}if(n==="cowboy"){let t=new lt,i=new ye({color:e,roughness:.85}),s=new re(new Tt(.3,.3,.02,20),i),r=new re(new Tt(.12,.15,.17,14),i);return r.position.y=.09,t.add(s,r),t}return null}function Dh(n){let e=new lt,t=MM(),i=SM(),s=EM(),r=bM(),o=new ye({color:n.shirt,roughness:.8}),a=[],l=[];for(let f of[-1,1]){let u=new lt;u.position.set(f*.12,.92,0),u.add(Nt(.17,.84,.2,i,-.42));let y=Nt(.17,.09,.3,s,-.88);y.position.z=-.04,u.add(y),e.add(u),a.push(u);let _=new lt;_.position.set(f*.33,1.5,0),_.add(Nt(.13,.36,.15,o,-.17)),_.add(Nt(.11,.3,.12,t,-.5));let M=Nt(.1,.1,.1,t,-.69);_.add(M),e.add(_),l.push(_)}let c=Nt(.52,.62,.27,o,1.23);e.add(c);let h=Nt(.53,.06,.28,s,.93);e.add(h);let d=Nt(.12,.08,.12,t,1.57);e.add(d);let p=new re(new en(.15,16,12),t);p.position.y=1.74,p.scale.set(1,1.12,1),p.castShadow=!0,e.add(p);let m=new re(new en(.155,14,8,0,Math.PI*2,0,Math.PI/2.2),r);m.position.y=1.76,e.add(m);let x=new lt;x.position.y=1.8,e.add(x);let g=new lt;return g.position.y=-.69,l[1].add(g),e.userData={legs:a,arms:l,shirt:o,skin:t,pants:i,hair:r,hatSlot:x,gunSlot:g,gunId:null,hatId:null,hatColor:null,recoil:0},ho(e,n),e}function ho(n,e){let t=n.userData;t.shirt.color.setHex(e.shirt),e.pants!=null&&t.pants.color.setHex(e.pants),e.skin!=null&&t.skin.color.setHex(e.skin),e.hair!=null&&t.hair.color.setHex(e.hair);let i=e.hatColor!=null?e.hatColor:e.shirt;if(t.hatId!==e.hat||t.hatColor!==i){t.hatSlot.clear();let s=AM(e.hat,i);s&&t.hatSlot.add(s),t.hatId=e.hat,t.hatColor=i}t.hair.visible=e.hat!=="helmet"}function Uh(n,e){let t=n.userData;if(t.gunId!==e){if(t.gunSlot.clear(),e){let i=wM(e);i.rotation.x=-Math.PI/2,t.gunSlot.add(i)}t.gunId=e}}function sl(n,e,t,i,s){let r=n.userData,o=Math.min(1,Math.abs(t)/4)*.75,a=Math.sin(e);r.legs[0].rotation.x=a*o,r.legs[1].rotation.x=-a*o,r.arms[0].rotation.x=-a*o*.8,r.recoil=Math.max(0,r.recoil-s*8),i?(r.arms[1].rotation.x=Math.PI/2-.05+r.recoil*.35,r.arms[1].rotation.z=.12,r.gunId!=="pistol"?(r.arms[0].rotation.x=Math.PI/2-.35,r.arms[0].rotation.z=-.5):r.arms[0].rotation.z=0):(r.arms[1].rotation.x=a*o*.8,r.arms[1].rotation.z=0,r.arms[0].rotation.z=0),n.position.y=Math.abs(Math.cos(e))*o*.05}function rp(n){n.userData.recoil=1}Ut();var op=[{minX:44,maxX:104,minZ:48,maxZ:90},{minX:8,maxX:30,minZ:124,maxZ:146},{minX:44,maxX:66,minZ:146,maxZ:170}],RM=[{id:"guns",type:"guns",name:"LOCK & LOAD",sub:"GUNS \xB7 AMMO",color:12131356,accent:"#ffd23f",bx:[47,59],bz:[52,66],h:7,face:"-x"},{id:"clothes",type:"clothes",name:"THREADZ",sub:"CLOTHING",color:7030465,accent:"#f9a8d4",bx:[14,27],bz:[128,142],h:6,face:"+x"},{id:"garage",type:"garage",name:"AUTO SHOP",sub:"CARS \xB7 TUNING",color:1982639,accent:"#7dd3fc",bx:[47,61],bz:[150,166],h:8,face:"-x"}];function ap(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new yn(i);return s.colorSpace=xt,s.anisotropy=4,s}function CM(n,e,t){return ap(512,128,(i,s,r)=>{i.fillStyle="#0b0f1a",i.fillRect(0,0,s,r),i.strokeStyle=t,i.lineWidth=8,i.strokeRect(6,6,s-12,r-12),i.fillStyle=t,i.textAlign="center",i.textBaseline="middle",i.font="bold 58px sans-serif",i.fillText(n,s/2,52),i.fillStyle="#e2e8f0",i.font="bold 22px sans-serif",i.fillText(e,s/2,100)})}function PM(){return ap(128,128,(n,e,t)=>{let i=e/2,s=t/2;["#f8fafc","#dc2626","#f8fafc","#dc2626","#f8fafc","#dc2626"].forEach((o,a)=>{n.beginPath(),n.arc(i,s,62-a*10,0,Math.PI*2),n.fillStyle=o,n.fill()})})}function lp(n,e){let t=[],i=[],s=new ye({color:14078925,roughness:.85,envMapIntensity:.4}),r=new ye({color:2961720,roughness:.8}),o=new ye({color:10474751,emissive:2775680,emissiveIntensity:.5,roughness:.15,metalness:.6});for(let h of RM){let[d,p]=h.bx,[m,x]=h.bz,g=(d+p)/2,f=(m+x)/2,u=p-d,y=x-m,_=new re(new Oe(u,h.h,y).translate(0,h.h/2,0),s);_.position.set(g,.03,f),_.castShadow=_.receiveShadow=!0,n.add(_);let M=new re(new Oe(u+.6,.5,y+.6),r);M.position.set(g,h.h+.25,f),n.add(M);let A=h.face==="-x"?-1:1,R=A<0?d:p,w=new re(new Oe(1.6,.2,y*.9),new ye({color:h.color,roughness:.6}));w.position.set(R+A*.8,3.3,f),w.rotation.z=A*.18,n.add(w);let F=new re(new rt(y*.75,2.4),o);F.position.set(R+A*.02,1.5,f),F.rotation.y=A*Math.PI/2,n.add(F);let v=new ye({map:CM(h.name,h.sub,h.accent),emissive:16777215,emissiveMap:null,emissiveIntensity:0,roughness:.5});v.emissiveMap=v.map,v.emissiveIntensity=.55;let S=new re(new rt(y*.85,y*.85/4),v);S.position.set(R+A*.05,h.h-1.4,f),S.rotation.y=A*Math.PI/2,n.add(S),e.colliders.push({minX:d,maxX:p,minZ:m,maxZ:x});let L={x:R+A*1.6,z:f},O=new ht({color:h.accent,transparent:!0,opacity:.8,depthWrite:!1,side:Et}),N=new re(new Gi(.9,1.25,32).rotateX(-Math.PI/2),O);N.position.set(L.x,.09,L.z),n.add(N);let C=new ht({color:h.accent,transparent:!0,opacity:.18,depthWrite:!1,side:Et,blending:jt}),U=new re(new Tt(1.05,1.05,3.2,24,1,!0),C);U.position.set(L.x,1.6,L.z),n.add(U),i.push({ring:N,ringMat:O,beamMat:C}),t.push({id:h.id,type:h.type,name:h.name,door:L,color:h.accent})}let a=LM(n,e),l=0;function c(h){l+=h;let d=.55+Math.sin(l*3)*.25;for(let p of i)p.ringMat.opacity=d+.2,p.beamMat.opacity=d*.3,p.ring.rotation.y+=h*.8;a.update(h)}return{stores:t,targets:a.targets,update:c,rangeArea:a.area}}function LM(n,e){let o=new re(new rt(54,16).rotateX(-Math.PI/2),new ye({color:9075298,roughness:.95}));o.position.set(148/2,.04,156/2),o.receiveShadow=!0,n.add(o);let a=new ye({color:7041664,roughness:.9}),l=[{minX:47,maxX:101,minZ:70-.5,maxZ:70,h:2.2},{minX:47,maxX:101,minZ:86,maxZ:86+.5,h:2.2},{minX:101,maxX:101+1.5,minZ:70-.5,maxZ:86+.5,h:5}];for(let f of l){let u=new re(new Oe(f.maxX-f.minX,f.h,f.maxZ-f.minZ).translate(0,f.h/2,0),a);u.position.set((f.minX+f.maxX)/2,.03,(f.minZ+f.maxZ)/2),u.castShadow=u.receiveShadow=!0,n.add(u),e.colliders.push({minX:f.minX,maxX:f.maxX,minZ:f.minZ,maxZ:f.maxZ})}let c=new re(new rt(.3,15).rotateX(-Math.PI/2),new ht({color:16765503}));c.position.set(51,.06,156/2),n.add(c);let h=PM(),d=new ye({map:h,roughness:.6,side:Et}),p=new ye({color:4144966,roughness:.7}),x=[[66,74],[74,82],[83,76.5],[92,81],[97,73.5]].map(([f,u])=>{let y=new lt;y.position.set(f,.04,u);let _=new re(new Oe(.08,1.1,.08).translate(0,.55,0),p),M=new re(new La(.55,24),d);return M.position.y=1.5,M.rotation.y=-Math.PI/2,M.castShadow=!0,y.add(_,M),n.add(y),{x:f,z:u,r:.6,up:!0,timer:0,fall:0,pivot:y}});function g(f){for(let u of x)u.up?u.fall>0&&(u.fall=Math.max(0,u.fall-f*4)):(u.fall=Math.min(1,u.fall+f*6),u.timer-=f,u.timer<=0&&(u.up=!0)),u.pivot.rotation.z=u.fall*(Math.PI/2-.05),u.pivot.rotation.z*=-1}return{targets:x,update:g,area:{minX:47,maxX:101,minZ:70,maxZ:86}}}function cp(n){return n.up?(n.up=!1,n.timer=3,!0):!1}Ut();var IM=.22,Ms=1.45,DM=85,Nh=4.5;function hp(n){let e=[],t=new Pa(.07,.5,2,8).rotateX(Math.PI/2),i=new Tt(.008,.05,1,6,1,!0).rotateX(Math.PI/2).translate(0,0,.5);for(let f=0;f<48;f++){let u=new re(t,new ht({color:16774856,transparent:!0,opacity:1,blending:jt,depthWrite:!1}));u.visible=!1,u.frustumCulled=!1;let y=new re(new en(.22,8,6),new ht({color:16751150,transparent:!0,opacity:.45,blending:jt,depthWrite:!1}));u.add(y);let _=new re(i,new ht({color:16757575,transparent:!0,opacity:.75,blending:jt,depthWrite:!1,side:Et}));_.visible=!1,_.frustumCulled=!1,n.add(u,_),e.push({slug:u,trail:_,live:!1,x0:0,z0:0,dx:0,dz:0,dist:0,travel:0,hitT:null,onHit:null,wall:!1})}let s=0,r=new bi(n,8,{color:16762976,opacity:.95,blending:jt}),o=new bi(n,30,{color:16757575,opacity:.9,blending:jt}),a=new bi(n,20,{color:12103840,opacity:.5}),l=0;function c(f,u,y,_,M,A,R,w){let F=e[s];s=(s+1)%e.length,Object.assign(F,{live:!0,x0:f,z0:u,dx:y,dz:_,dist:Math.max(.5,M),travel:0,hitT:A,wall:R,onHit:w}),F.slug.visible=!0,F.trail.visible=!0,F.slug.rotation.y=Math.atan2(y,_),h(F)}function h(f){let u=Math.min(f.travel,f.dist),y=f.x0+f.dx*u,_=f.z0+f.dz*u;f.slug.position.set(y,Ms,_),d(f,y,_,Math.min(Nh,u))}function d(f,u,y,_){f.trail.position.set(u,Ms,y),f.trail.rotation.y=Math.atan2(-f.dx,-f.dz),f.trail.scale.set(1,1,Math.max(.01,_))}function p(f){let u=f.x0+f.dx*f.dist,y=f.z0+f.dz*f.dist;if(f.hitT){cp(f.hitT)&&f.onHit&&f.onHit(f.hitT);for(let _=0;_<5;_++)o.emit(u,Ms,y,{vx:(Math.random()-.5)*4,vy:Math.random()*3,vz:(Math.random()-.5)*4,life:.25,size:.25,grow:.1})}else f.wall&&(o.emit(u-f.dx*.1,Ms,y-f.dz*.1,{vx:-f.dx*2,vy:1.5,vz:-f.dz*2,life:.18,size:.3,grow:.2}),a.emit(u-f.dx*.2,Ms,y-f.dz*.2,{vx:-f.dx,vy:.6,vz:-f.dz,life:.5,size:.4,grow:1.2}))}function m(f){for(let u of e)if(u.live){if(u.travel+=DM*f,u.travel>=u.dist){if(u.slug.visible&&(p(u),u.slug.visible=!1),u.travel-u.dist>=Nh){u.live=!1,u.trail.visible=!1;continue}let y=u.x0+u.dx*u.dist,_=u.z0+u.dz*u.dist,M=Nh-(u.travel-u.dist);d(u,y,_,Math.min(M,u.dist));continue}h(u)}}function x(f,u,y,_){let M=y-f,A=_-u,R=Math.hypot(M,A);R>.1&&(r.emit(f,Ms,u,{vx:M/R*2,vy:0,vz:A/R*2,life:.06,size:.7,grow:.6}),c(f,u,M/R,A/R,R,null,!0,null))}function g(f,u,y,_){l=Math.max(0,l-f),m(f),r.update(f),o.update(f),a.update(f);let M=u.save.equipped,A=M&&qi(M);if(y=y||_,!A||!y||l>0)return{fired:!1};if(!A.auto&&!_)return{fired:!1};if((u.save.ammo[M]|0)<=0)return _&&(u.audio.click&&u.audio.click(),u.toast&&u.toast("Out of ammo \u2014 buy more at LOCK & LOAD")),l=.3,{fired:!1,empty:!0};u.save.ammo[M]--,l=A.rate;let R=u.heading,w=IM;for(let z of u.targets){if(!z.up)continue;let B=z.x-u.pos.x,G=z.z-u.pos.z,W=Math.hypot(B,G);if(W>A.range||W<.5)continue;let $=Math.atan2(-B,-G),J=Math.atan2(Math.sin($-u.heading),Math.cos($-u.heading));Math.abs(J)<w&&(w=Math.abs(J),R=$)}let F=-Math.sin(u.heading),v=-Math.cos(u.heading),S=Math.cos(u.heading),L=-Math.sin(u.heading),O=u.pos.x+F*.95+S*.3,N=u.pos.z+v*.95+L*.3;r.emit(O,Ms,N,{vx:F*2,vy:0,vz:v*2,life:.06,size:A.id==="shotgun"?1.1:.7,grow:.6});let C=0,U=[];for(let z=0;z<A.pellets;z++){let B=R+(Math.random()-.5)*2*A.spread,G=-Math.sin(B),W=-Math.cos(B),$=A.range,J=null;for(let he of u.colliders){let V=ip(O,N,G,W,he,$);V<$&&($=V,J=null)}for(let he of u.targets){if(!he.up)continue;let V=sp(O,N,G,W,he.x,he.z,he.r,$);V<$&&($=V,J=he)}J&&C++,c(O,N,G,W,$,J,$<A.range,u.onTargetHit),z<3&&U.push([O,N,O+G*$,N+W*$])}return u.onShot&&u.onShot(U),u.audio.shot&&u.audio.shot(A.id),{fired:!0,hits:C}}return{update:g,remoteShot:x}}var UM=n=>"#"+n.toString(16).padStart(6,"0"),uo=n=>"$"+n.toLocaleString();function up(n){let e=c=>document.getElementById(c),t=e("store"),i=e("store-list"),s=null;function r(c){n.toast(c.msg),n.beep(c.ok?880:220,c.ok?.08:.12),c.ok&&(n.persist(),n.onChange()),l()}function o(){let c=n.save;i.innerHTML="";for(let d of tl){let p=c.weapons.includes(d.id),m=document.createElement("div");m.className="upg-row store-row"+(c.equipped===d.id?" sel":""),m.innerHTML=`<div class="uinfo"><b>${d.name}</b><small>${d.desc}</small>
        <small class="ammo-line">${p?"Ammo: "+(c.ammo[d.id]|0):uo(d.price)}</small></div>
        <div class="store-btns"></div>`;let x=m.querySelector(".store-btns");if(p){let g=document.createElement("button");g.className="upg-btn",g.textContent="+"+d.ammoBox+" AMMO "+uo(d.ammoPrice),g.disabled=c.cash<d.ammoPrice,g.onclick=()=>r(Qf(c,d.id)),x.appendChild(g);let f=document.createElement("button");f.className="buy-btn eq",f.textContent=c.equipped===d.id?"EQUIPPED":"EQUIP",f.disabled=c.equipped===d.id,f.onclick=()=>r(jf(c,d.id)),x.appendChild(f)}else{let g=document.createElement("button");g.className="buy-btn",g.textContent="BUY "+uo(d.price),g.disabled=c.cash<d.price,g.onclick=()=>r(Kf(c,d.id)),x.appendChild(g)}i.appendChild(m)}let h=document.createElement("p");h.className="store-tip",h.textContent="Shooting range out back: knock down targets for cash.",i.appendChild(h)}function a(){let c=n.save;i.innerHTML="";let h=document.createElement("div");h.className="style-sec",h.innerHTML=`<b>SHIRT \xB7 ${co?uo(co):"FREE"}</b><div class="swatch-row"></div>`;let d=h.querySelector(".swatch-row");for(let g of $f){let f=document.createElement("div");f.className="swatch"+(c.outfit.shirt===g?" sel":""),f.style.background=UM(g),f.onclick=()=>r(ep(c,g)),d.appendChild(f)}i.appendChild(h);let p=document.createElement("div");p.className="style-sec",p.innerHTML='<b>HATS</b><div class="swatch-row"></div>';let m=p.querySelector(".swatch-row");for(let g of nl){let f=document.createElement("button"),u=c.hats.includes(g.id);f.className="wheel-opt"+(c.outfit.hat===g.id?" sel":""),f.innerHTML=`${g.name}<small>${c.outfit.hat===g.id?"wearing":u||!g.price?"free":uo(g.price)}</small>`,f.onclick=()=>r(tp(c,g.id)),m.appendChild(f)}i.appendChild(p);let x=document.createElement("p");x.className="store-tip",x.textContent="Everything here is free. More colors, pants, skin tone & hair in \u{1F3A8} SKIN EDITOR (pause menu).",i.appendChild(x)}function l(){e("store-cash").textContent=n.save.cash.toLocaleString(),s==="guns"?o():a()}return{open(c){s=c.type,e("store-title").textContent=c.name,t.classList.remove("hidden"),l()},close(){t.classList.add("hidden"),s=null},get isOpen(){return s!==null}}}var dp=[];for(let n=0;n<=5;n++)dp.push((n-5/2)*74);var fo=384/2;function fp(n,e){let t=n.getContext("2d"),i=n.width,r=i/2/130,o=0;function a(l,c,h,d,p){if((o++&3)!==0)return;let m=g=>i/2+(g-l)*r,x=g=>i/2+(g-c)*r;t.clearRect(0,0,i,i),t.save(),t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.clip(),t.fillStyle="rgba(20,40,28,0.82)",t.fillRect(0,0,i,i),t.fillStyle="rgba(120,130,145,0.55)";for(let g=0;g<5;g++)for(let f=0;f<5;f++){let u=(g-2)*74,y=(f-4/2)*74;t.fillRect(m(u-30),x(y-30),60*r,60*r)}t.strokeStyle="#2b2f36",t.lineWidth=14*r,t.beginPath();for(let g of dp)t.moveTo(m(g),x(-fo)),t.lineTo(m(g),x(fo)),t.moveTo(m(-fo),x(g)),t.lineTo(m(fo),x(g));t.moveTo(m(fo),x(0)),t.lineTo(m(232),x(0)),t.stroke(),t.strokeStyle="#3b3f46",t.lineWidth=9*r,t.beginPath(),t.moveTo(m(232),x(-225)),t.lineTo(m(232),x(225)),t.stroke();for(let g of e)t.fillStyle=g.color,t.beginPath(),t.arc(m(g.door.x),x(g.door.z),4.5,0,Math.PI*2),t.fill(),t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.stroke();d&&(t.fillStyle="#ffffff",t.fillRect(m(d.x)-3,x(d.z)-3,6,6)),p&&p.each(g=>{g.b>=0||(t.fillStyle="#4ade80",t.strokeStyle="#0b0f1a",t.lineWidth=1.5,t.beginPath(),t.arc(m(g.x),x(g.z),4,0,Math.PI*2),t.fill(),t.stroke())}),t.restore(),t.save(),t.translate(i/2,i/2),t.rotate(-h),t.fillStyle="#ff5e3a",t.strokeStyle="#fff",t.lineWidth=1.5,t.beginPath(),t.moveTo(0,-8),t.lineTo(5.5,6),t.lineTo(0,3),t.lineTo(-5.5,6),t.closePath(),t.fill(),t.stroke(),t.restore(),t.strokeStyle="rgba(255,255,255,0.35)",t.lineWidth=2,t.beginPath(),t.arc(i/2,i/2,i/2-1,0,Math.PI*2),t.stroke(),t.fillStyle="#e2e8f0",t.font="bold 10px sans-serif",t.textAlign="center",t.fillText("N",i/2,11)}return{draw:a}}var NM={none:"None",center:"Center",dual:"Dual",side:"Side"},OM={clear:"Clear",dark:"Dark",limo:"Limo"};function pp(n){let e=x=>document.getElementById(x),t=e("skin-editor"),i=e("se-body"),s=n.save,r="car",o=!1;function a(x,g,f,u={}){let y=`<div class="swatch-row se-row" data-key="${x}">`;u.off&&(y+=`<button class="swatch off${f==null?" sel":""}" data-v="off" aria-label="off">OFF</button>`);for(let M of g)y+=`<button class="swatch${M===f?" sel":""}" data-v="${M}" style="background:${el(M)}" aria-label="color"></button>`;let _=f!=null&&!g.includes(f);return y+=`<label class="swatch custom${_?" sel":""}" style="${_?"background:"+el(f):""}" title="Any color"><input type="color" data-key="${x}" value="${el(f??16777215)}">\u{1F3A8}</label>`,y+"</div>"}function l(x,g,f,u){return`<div class="swatch-row se-row" data-key="${x}">`+g.map(y=>`<button class="wheel-opt${y===u?" sel":""}" data-v="${y}"><b>${f[y]}</b></button>`).join("")+"</div>"}let c=(x,g)=>`<div class="style-sec"><b>${x}</b>${g}</div>`;function h(){let x=s.currentCar,g=vs(s,x),u='<div class="swatch-row se-row" data-key="car">'+n.cars.filter(y=>s.owned.includes(y.id)).map(y=>`<button class="wheel-opt${y.id===x?" sel":""}" data-v="${y.id}"><b>${y.name}</b></button>`).join("")+"</div>";i.innerHTML=c("Car",u)+c("Body paint",a("paint",oo,s.paint[x]))+c("Rims",a("rims",[12172998,1513500,13211182,2287359,14100029,16317180,4906624,11032055],g.rims))+c("Racing stripes",l("stripes",ao,NM,g.stripes))+(g.stripes!=="none"?c("Stripe color",a("stripe",oo,g.stripe)):"")+c("Underglow",a("glow",[2287359,16723555,4906624,11032055,16765503,16317180],g.glow,{off:!0}))+c("Window tint",l("tint",lo,OM,g.tint))}function d(){let x=s.outfit;i.innerHTML=c("Name (shown online)",`<input id="se-name" class="se-name" maxlength="16" value="${s.name.replace(/"/g,"")}" autocomplete="off" spellcheck="false">`)+c("Shirt",a("shirt",oo,x.shirt))+c("Pants",a("pants",[2963272,1981066,1120295,7041664,9067034,16317180,7999504,1483594],x.pants))+c("Skin tone",a("skin",Gf,x.skin))+c("Hair",a("hair",Vf,x.hair))+c("Hat",l("hat",Xi,Qa,x.hat))+(x.hat!=="none"?c("Hat color",a("hatColor",oo,x.hatColor)):"");let g=e("se-name");g.addEventListener("input",()=>{let f=Ch(g.value);f&&(s.name=f,n.persist(),n.onName())}),g.addEventListener("keydown",f=>f.stopPropagation())}function p(){for(let x of t.querySelectorAll(".setab"))x.classList.toggle("active",x.dataset.tab===r);r==="car"?h():d()}function m(x,g){let f=s.currentCar,u=vs(s,f),y=s.outfit,_=g==="off"?null:typeof g=="string"&&g[0]==="#"?parseInt(g.slice(1),16):isNaN(+g)?g:+g,M=!1,A=!1;switch(x){case"car":s.owned.includes(g)&&(s.currentCar=g,M=!0);break;case"paint":s.paint[f]=_,M=!0;break;case"rims":u.rims=_,M=!0;break;case"stripes":u.stripes=g,M=!0;break;case"stripe":u.stripe=_,M=!0;break;case"glow":u.glow=_,M=!0;break;case"tint":u.tint=g,M=!0;break;case"shirt":case"pants":case"skin":case"hair":case"hatColor":y[x]=_,A=!0;break;case"hat":y.hat=g,A=!0;break}n.persist(),M&&n.onCar(x==="car"),A&&n.onOutfit(),n.beep(760,.03)}i.addEventListener("click",x=>{let g=x.target.closest("button[data-v]");if(!g)return;let f=g.closest("[data-key]");m(f.dataset.key,g.dataset.v),p()}),i.addEventListener("input",x=>{let g=x.target.closest("input[type=color]");if(!g)return;m(g.dataset.key,g.value);let f=g.closest("label");f&&(f.style.background=g.value)}),i.addEventListener("change",x=>{x.target.closest("input[type=color]")&&p()});for(let x of t.querySelectorAll(".setab"))x.addEventListener("click",()=>{r=x.dataset.tab,n.onTab(r),p()});return{open(x){r=x||"car",o=!0,t.classList.remove("hidden"),n.onTab(r),p()},close(){o=!1,t.classList.add("hidden")},get isOpen(){return o},get tab(){return r},refresh:p}}Ut();var Fh=["lobby","apartment","office","diner"],mp={lobby:"LOBBY",apartment:"APARTMENT",office:"OFFICE",diner:"DINER"},fr=22,pr=16,rl=4.6,ii=.3,FM=-1180,gp=n=>Fh[(n*2654435761>>>0)%Fh.length];function zM(n){return{x:(Fh.indexOf(n)-1.5)*90,z:FM}}function Oh(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new yn(s);return r.colorSpace=xt,i&&(r.wrapS=r.wrapT=vi,r.repeat.set(i[0],i[1])),r}var ol=(n,e={})=>new ye(Object.assign({color:n,roughness:.8,metalness:.05,emissive:n,emissiveIntensity:.18},e)),BM={lobby:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#e9e4da":"#b9b2a5",n.fillRect(t*16,e*16,16,16)},apartment:n=>{for(let e=0;e<8;e++)n.fillStyle=e%2?"#9a6a3e":"#a8754a",n.fillRect(0,e*16,128,16),n.fillStyle="#7a5230",n.fillRect(e*37%128,e*16,2,16)},office:n=>{n.fillStyle="#5b6472",n.fillRect(0,0,128,128),n.fillStyle="#525a67";for(let e=0;e<128;e+=32)n.fillRect(e,0,1,128),n.fillRect(0,e,128,1)},diner:n=>{for(let e=0;e<8;e++)for(let t=0;t<8;t++)n.fillStyle=(t+e)%2?"#f2f2f2":"#1a1a1a",n.fillRect(t*16,e*16,16,16)}},HM={lobby:14209732,apartment:13227715,office:14673388,diner:15909813};function xp(n){let e=new Map;function t(r){if(e.has(r))return e.get(r);let o=zM(r),a=new lt;a.position.set(o.x,0,o.z);let l=[],c=fr/2,h=pr/2,d=(w,F,v,S)=>l.push({minX:o.x+w,maxX:o.x+F,minZ:o.z+v,maxZ:o.z+S}),p=(w,F,v,S,L,O=0,N=!0)=>{let C=new re(w,F);return C.position.set(v,S,L),C.rotation.y=O,C.castShadow=N,C.receiveShadow=!0,a.add(C),C},m=(w,F,v,S,L,O,N=0,C=!0)=>{p(new Oe(w,F,v).translate(0,F/2,0),S,L,N,O),C&&d(L-w/2,L+w/2,O-v/2,O+v/2)},x=Oh(128,128,BM[r],[fr/4,pr/4]);p(new rt(fr,pr).rotateX(-Math.PI/2),ol(16777215,{map:x,emissiveMap:x,emissiveIntensity:.2}),0,.02,0,0,!1),p(new rt(fr,pr).rotateX(Math.PI/2),ol(16053488,{emissiveIntensity:.5}),0,rl,0,0,!1);let g=ol(HM[r],{side:Et}),f=(w,F,v,S)=>{p(new Oe(w,rl,F).translate(0,rl/2,0),g,v,0,S,0,!1),d(v-w/2,v+w/2,S-F/2,S+F/2)};f(fr+ii*2,ii,0,-h-ii/2),f(fr+ii*2,ii,0,h+ii/2),f(ii,pr,-c-ii/2,0),f(ii,pr,c+ii/2,0);let u=new ye({color:16777215,emissive:16774364,emissiveIntensity:2.2});for(let w of[-6,0,6])for(let F of[-4,4])p(new rt(2.4,.9).rotateX(Math.PI/2),u,w,rl-.02,F,0,!1);let y=Oh(256,64,(w,F,v)=>{let S=w.createLinearGradient(0,0,0,v);S.addColorStop(0,"#7fb2ee"),S.addColorStop(1,"#cfe6f7"),w.fillStyle=S,w.fillRect(0,0,F,v),w.fillStyle="#3b4656";for(let L=0;L<F;L+=64)w.fillRect(L,0,4,v);w.fillRect(0,0,F,4),w.fillRect(0,v-4,F,4)});p(new rt(14,1.6),new ht({map:y}),0,2.6,-h+.01,0,!1);let _=Oh(64,96,(w,F,v)=>{w.fillStyle="#20262f",w.fillRect(0,0,F,v),w.fillStyle="#4ade80",w.fillRect(0,0,F,6),w.fillRect(0,0,5,v),w.fillRect(F-5,0,5,v),w.fillStyle="#9fd4ff",w.fillRect(9,12,F-18,v-20),w.fillStyle="#16a34a",w.font="bold 14px sans-serif",w.textAlign="center",w.fillText("EXIT",F/2,40)});p(new rt(2.2,3).translate(0,1.5,0),new ye({map:_,emissive:16777215,emissiveMap:_,emissiveIntensity:.6}),0,0,h-.02,Math.PI,!1);let M=new ht({color:4906624,transparent:!0,opacity:.7,depthWrite:!1,side:Et}),A=p(new Gi(.75,1.05,32).rotateX(-Math.PI/2),M,0,.05,h-1.6,0,!1);kM(r,{add:p,boxAt:m,mat:ol,W2:c,D2:h,group:a,solid:d}),n.add(a);let R={style:r,group:a,colliders:l,pad:A,padMat:M,spawn:{x:o.x,z:o.z+h-3.2,heading:0},exit:{x:o.x,z:o.z+h-1.6},bounds:{minX:o.x-c,maxX:o.x+c,minZ:o.z-h,maxZ:o.z+h}};return e.set(r,R),R}let i=0;function s(r,o){i+=r,o&&(o.padMat.opacity=.5+Math.sin(i*4)*.25,o.pad.rotation.y+=r)}return{get:t,update:s}}function kM(n,e){let{add:t,boxAt:i,mat:s,W2:r,D2:o}=e,a=s(8016432),l=s(2237739),c=s(15921906),h=s(10134445,{metalness:.7,roughness:.35}),d=(x,g)=>{i(.6,.6,.6,s(9067066),x,g),t(new en(.6,10,8),s(4094516),x,1.15,g)},p=(x,g,f,u)=>{let y=s(u),_=new lt,M=new re(new Oe(2.6,.45,1).translate(0,.22,0),y),A=new re(new Oe(2.6,.6,.25).translate(0,.75,.38),y),R=new re(new Oe(.25,.65,1).translate(-1.3,.32,0),y),w=new re(new Oe(.25,.65,1).translate(1.3,.32,0),y);return _.add(M,A,R,w),_.traverse(v=>{v.isMesh&&(v.castShadow=!0,v.receiveShadow=!0)}),_.position.set(x,0,g),_.rotation.y=f,e.group.add(_),Math.abs(Math.sin(f))>.5?[x-.6,x+.6,g-1.4,g+1.4]:[x-1.4,x+1.4,g-.6,g+.6]},m=x=>e.solid(x[0],x[1],x[2],x[3]);if(n==="lobby"){i(5,1.1,1.2,a,0,-2.5),i(5.2,.08,1.4,c,0,-2.5,1.1,!1);let x=s(12107462,{metalness:.85,roughness:.25,emissiveIntensity:.1});for(let g of[-6,-2,2,6])t(new rt(2,3).translate(0,1.5,0),x,g,0,-o+.02,0,!1),t(new rt(.4,.2),new ht({color:16747546}),g,3.3,-o+.03,0,!1);m(p(-7,2,Math.PI/2,1981066)),m(p(7,2,-Math.PI/2,1981066)),i(1.4,.4,.8,a,-5,2),i(1.4,.4,.8,a,5,2),d(-r+1,o-1),d(r-1,o-1),d(-r+1,-o+1.5),d(r-1,-o+1.5)}else if(n==="apartment"){m(p(-3,1.5,Math.PI,8141549)),i(1.8,.4,.9,a,-3,-.5),i(3,.5,.4,l,-3,-o+.4),t(new rt(2.6,1.5),new ye({color:1118481,emissive:2781142,emissiveIntensity:.9}),-3,1.6,-o+.45,0,!1),i(6,.95,.8,c,6,-o+.5),i(.9,2,.8,h,r-.6,-o+.5),i(2.2,.75,1.1,a,5,-2);for(let x of[4.2,5.8])for(let g of[-3.1,-.9])i(.45,.5,.45,l,x,g);i(2.2,.55,3,s(15921906),r-1.4,3.5),i(2.2,.25,2.2,s(3718648),r-1.4,3.9,.55,!1),i(2.2,1,.2,a,r-1.4,o-3,0,!1),d(-r+1,o-1)}else if(n==="office"){let x=new ye({color:725536,emissive:3718648,emissiveIntensity:.9});for(let g of[-7,-2.5,2.5,7])for(let f of[-4.5,.5])i(3,.75,1.3,c,g,f),t(new Oe(.9,.55,.06).translate(0,.28,0),x,g,.8,f-.3),i(.55,.5,.55,l,g,f+1.1);i(6,.75,1.6,a,0,4.6),t(new rt(5,2.2),new ye({color:16777215,emissive:16777215,emissiveIntensity:.3}),-r+.02,2,2,Math.PI/2,!1),d(r-1,o-1),d(-r+1,o-1)}else{i(10,1.05,1,s(14100029),2,-o+3),i(10.2,.08,1.2,c,2,-o+3,1.05,!1);for(let g=0;g<6;g++)t(new Tt(.28,.28,.12,12).translate(0,.75,0),s(14100029),-2+g*1.7,0,-o+4.3),i(.12,.7,.12,h,-2+g*1.7,-o+4.3,0,!1);for(let g of[-1,3])i(2.4,.75,1.1,c,-6.5,g),i(2.4,1.1,.5,s(14100029),-6.5,g-1.1),i(2.4,1.1,.5,s(14100029),-6.5,g+1.1);let x=new ye({color:16723555,emissive:16723555,emissiveIntensity:2.5});t(new Oe(8,.12,.06),x,2,3.4,-o+.05,0,!1),t(new Oe(8,.12,.06),new ye({color:2287359,emissive:2287359,emissiveIntensity:2.5}),2,3.1,-o+.05,0,!1),i(1,1.8,.7,s(2060267),r-.8,2),d(r-1,o-1)}}Ut();var al=1e5,Ss=[{id:"drive",text:"Drive to the green marker",needsTarget:!0},{id:"drift",text:"DRIFT! Hold HB (Space) while steering",needsTarget:!1},{id:"park",text:"Drive to the next marker and stop",needsTarget:!0},{id:"out",text:"Tap GET OUT (E) to leave your car",needsTarget:!1},{id:"enter",text:"Walk to the glowing door and tap ENTER",needsTarget:!0},{id:"exit",text:"Look around, then step on the green EXIT pad",needsTarget:!1}];function GM(n,e){switch(n){case"drive":return!!e.reached;case"drift":return e.driftTime>=1.5;case"park":return!!e.reached&&Math.abs(e.speed||0)<4;case"out":return!!e.onFoot;case"enter":return e.inside>=0;case"exit":return e.inside<0&&!!e.wasInside}return!1}function _p(n,e){let t={x:37,z:-37},i=null,s=1/0;for(let y of e.buildings){let _=Math.hypot(y.door.x-(t.x+30),y.door.z-t.z);_<s&&(s=_,i=y)}let r={drive:{x:37,z:-30,r:8},park:i?{x:i.door.x+i.door.nx*7,z:i.door.z+i.door.nz*7,r:9}:{x:90,z:-37,r:9},enter:i?{x:i.door.x+i.door.nx*.8,z:i.door.z+i.door.nz*.8,r:1.6}:null},o=new ht({color:4906624,transparent:!0,opacity:.85,depthWrite:!1,side:Et}),a=new ht({color:4906624,transparent:!0,opacity:.22,depthWrite:!1,side:Et,blending:jt}),l=new lt,c=new re(new Gi(.85,1,40).rotateX(-Math.PI/2),o);c.position.y=.1;let h=new re(new Tt(1,1,30,24,1,!0).translate(0,15,0),a);l.add(c,h),l.visible=!1,n.add(l);let d=!1,p=0,m=0,x=!1,g=0;function f(){let y=Ss[p];return y&&y.needsTarget?r[y.id]:null}function u(){let y=f();l.visible=!!(d&&y),y&&(l.position.set(y.x,0,y.z),l.scale.set(y.r,1,y.r))}return{building:i,start(){d=!0,p=0,m=0,x=!1,u()},stop(){d=!1,l.visible=!1},get active(){return d},get step(){return p},get total(){return Ss.length},get text(){return Ss[p]?Ss[p].text:""},target:f,update(y,_){if(!d)return null;g+=y,o.opacity=.6+Math.sin(g*4)*.25,l.rotation.y+=y*.6;let M=f(),A=M?Math.hypot(_.pos.x-M.x,_.pos.z-M.z)<M.r:!1;return Ss[p].id==="drift"&&_.drifting&&(m+=y),_.inside>=0&&(x=!0),GM(Ss[p].id,{reached:A,driftTime:m,onFoot:_.onFoot,inside:_.inside,wasInside:x,speed:_.speed})?(p++,p>=Ss.length?(d=!1,l.visible=!1,"done"):(u(),"next")):null},get driftProgress(){return Math.min(1,m/1.5)}}}Ut();function vp({url:n,key:e,topic:t,onStatus:i}){let s=new Map,r=null,o="off",a=0,l=null,c=null,h=0,d=!1,p=null,m="realtime:"+t;function x(y){if(o!==y&&(o=y,i))try{i(y)}catch{}}function g(y){if(r&&r.readyState===1)try{return r.send(JSON.stringify(y)),!0}catch{}return!1}function f(){if(d)return;clearTimeout(p),x("connecting");let y=n.replace(/^http/,"ws").replace(/\/$/,"")+"/realtime/v1/websocket?apikey="+encodeURIComponent(e)+"&vsn=1.0.0";try{r=new WebSocket(y)}catch{return u()}r.onopen=()=>{l=String(++a),g({topic:m,event:"phx_join",ref:l,join_ref:l,payload:{config:{broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},access_token:e}}),clearInterval(c),c=setInterval(()=>g({topic:"phoenix",event:"heartbeat",payload:{},ref:String(++a)}),25e3)},r.onmessage=_=>{let M;try{M=JSON.parse(_.data)}catch{return}if(M.topic===m){if(M.event==="phx_reply"&&M.ref===l){if(M.payload&&M.payload.status==="ok")h=0,x("on");else{x("error");try{r.close()}catch{}}return}if(M.event==="phx_error"||M.event==="phx_close"){try{r.close()}catch{}return}if(M.event==="broadcast"&&M.payload){let A=s.get(M.payload.event);if(A)try{A(M.payload.payload||{})}catch(R){console.warn("mp handler",R)}}}},r.onclose=()=>{clearInterval(c),c=null,r=null,d||u()},r.onerror=()=>{}}function u(){x("connecting");let y=Math.min(15e3,1e3*Math.pow(1.7,h++));p=setTimeout(f,y)}return{connect(){d=!1,r||f()},close(){if(d=!0,clearTimeout(p),clearInterval(c),r){g({topic:m,event:"phx_leave",payload:{},ref:String(++a),join_ref:l});try{r.close()}catch{}}r=null,x("off")},on(y,_){s.set(y,_)},send(y,_){return o!=="on"?!1:g({topic:m,event:"broadcast",ref:String(++a),join_ref:l,payload:{type:"broadcast",event:y,payload:_}})},get status(){return o}}}var zh="https://fhbqxujlnqlmzvulrdxt.supabase.co",Bh="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w",yp="city-driver-v2";var VM=160,WM=1e3,XM=2500,qM=7e3,YM=16,ZM=10,$M=(n,e)=>{let t=(e-n)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t};function JM(n){let e=String(n||"Driver").slice(0,16),t="700 28px system-ui, -apple-system, sans-serif",i=document.createElement("canvas").getContext("2d");i.font=t;let s=Math.max(70,Math.ceil(i.measureText(e).width)+30),r=44,o=document.createElement("canvas");o.width=s,o.height=r;let a=o.getContext("2d");a.fillStyle="rgba(8,12,22,0.72)",a.beginPath(),a.roundRect?a.roundRect(1,1,s-2,r-2,14):a.rect(1,1,s-2,r-2),a.fill(),a.fillStyle="#4ade80",a.beginPath(),a.arc(16,r/2,5,0,Math.PI*2),a.fill(),a.font=t,a.fillStyle="#fff",a.textBaseline="middle",a.fillText(e,26,r/2+1);let l=new yn(o),c=new ar(new ds({map:l,transparent:!0,depthTest:!1}));return c.scale.set(s/90,r/90,1),c.renderOrder=999,c}function Mp(n){let e=Math.random().toString(36).slice(2,10),t=new Map,i=null,s=0,r=0,o="",a="";function l(){return t.size+1}function c(){n.onCount&&n.onCount(l())}function h(_){let M=t.get(_);M&&(M.car&&n.scene.remove(M.car),M.person&&n.scene.remove(M.person),M.tag&&M.tag.parent&&M.tag.parent.remove(M.tag),t.delete(_),c())}function d(_){let M=_.carId+"|"+_.lookSig;if(_.car&&_.carSig===M)return;_.car&&n.scene.remove(_.car);let A=n.CAR_DEFS.find(w=>w.id===_.carId)||n.CAR_DEFS[0],R=n.buildCar(A);_.look&&n.applyCarSkin(R,_.look.paint,_.look.carSkin),R.position.set(_.cx,0,_.cz),R.rotation.y=_.ch,n.scene.add(R),_.car=R,_.carSig=M}function p(_){_.person||(_.person=n.buildCharacter(_.look?_.look.outfit:{shirt:2845872,hat:"none"}),_.person.position.set(_.x,0,_.z),n.scene.add(_.person),_.outfitSig="");let M=_.look?JSON.stringify(_.look.outfit):"";_.look&&M!==_.outfitSig&&(n.setOutfit(_.person,_.look.outfit),_.outfitSig=M),n.setHeldWeapon(_.person,_.weapon||null)}function m(_){if(!_||!_.id||_.id===e)return;let M=t.get(_.id);if(!M){if(t.size>=YM)return;M={id:_.id,name:"",x:+_.x||0,z:+_.z||0,h:+_.h||0,cx:0,cz:0,ch:0,tx:0,tz:0,th:0,mode:"car",carId:"sport",look:null,lookSig:"",car:null,person:null,tag:null,tagName:"",phase:0,speed:0,b:-1,weapon:null,seen:0},t.set(_.id,M),c()}if(M.seen=performance.now(),M.mode=_.m==="foot"?"foot":"car",M.tx=+_.x||0,M.tz=+_.z||0,M.th=+_.h||0,M.carId=String(_.c||"sport"),M.b=Number.isInteger(_.b)?_.b:-1,M.weapon=_.w||null,M.firing=!!_.f,M.mode==="foot"&&Number.isFinite(_.px)&&(M.cx=+_.px,M.cz=+_.pz,M.ch=+_.ph||0),_.L){let A=JSON.stringify(_.L);A!==M.lookSig&&(M.lookSig=A,M.look=n.unpackLook(_.L))}_.n&&_.n!==M.tagName&&(M.tag&&M.tag.parent&&M.tag.parent.remove(M.tag),M.tag=JM(_.n),M.tagName=_.n,M.name=_.n),M.placed||(M.x=M.tx,M.z=M.tz,M.h=M.th,M.mode==="car"&&(M.cx=M.tx,M.cz=M.tz,M.ch=M.th),M.placed=!0)}function x(_){if(!_||_.id===e||!Array.isArray(_.s))return;let M=t.get(_.id);if(M&&(M.recoil=.35),!(M&&n.localBuilding!==void 0&&M.b!==n.localBuilding()))for(let A of _.s.slice(0,3))Array.isArray(A)&&A.length===4&&n.remoteShot(+A[0],+A[1],+A[2],+A[3])}function g(){i||!zh||!Bh||(i=vp({url:zh,key:Bh,topic:yp,onStatus:_=>{n.onStatus&&n.onStatus(_,l())}}),i.on("st",m),i.on("sh",x),i.on("bye",_=>{_&&_.id&&h(_.id)}),i.connect(),window.addEventListener("pagehide",()=>{try{i.send("bye",{id:e})}catch{}}))}function f(_,M,A){if(A=A||performance.now(),i&&i.status==="on"&&M){let F=M.mode+(M.x|0)+","+(M.z|0)+","+(M.h*10|0)+M.b+(M.w||""),v=F!==o||Math.abs(M.speed)>.3;if(A-s>=(v?VM:WM)){s=A,o=F;let S={id:e,n:M.name,m:M.mode,x:+M.x.toFixed(2),z:+M.z.toFixed(2),h:+M.h.toFixed(3),c:M.car,b:M.b,w:M.w||null};M.mode==="foot"&&(S.px=+M.px.toFixed(2),S.pz=+M.pz.toFixed(2),S.ph=+M.ph.toFixed(3));let L=JSON.stringify(M.look);(L!==a||A-r>XM)&&(S.L=M.look,r=A,a=L),i.send("st",S)}}let R=Math.min(1,_*ZM),w=M?M.b:-1;for(let[F,v]of t){if(A-v.seen>qM){h(F);continue}let S=v.x,L=v.z;if(v.x+=(v.tx-v.x)*R,v.z+=(v.tz-v.z)*R,v.h+=$M(v.h,v.th)*R,v.speed=_>0?Math.hypot(v.x-S,v.z-L)/_:0,v.mode==="car"&&(v.cx=v.x,v.cz=v.z,v.ch=v.h),d(v),v.car.position.set(v.cx,0,v.cz),v.car.rotation.y=v.ch,v.car.visible=w===-1,v.mode==="foot"?(p(v),v.person.visible=v.b===w,v.person.position.x=v.x,v.person.position.z=v.z,v.person.rotation.y=v.h,v.phase+=v.speed*_*2.1,v.recoil=Math.max(0,(v.recoil||0)-_),n.animateCharacter(v.person,v.phase,v.speed,!!v.weapon&&v.recoil>0,_)):v.person&&(v.person.visible=!1),v.tag){let O=v.mode==="foot"?v.person:v.car;O&&v.tag.parent!==O&&(v.tag.parent&&v.tag.parent.remove(v.tag),O.add(v.tag),v.tag.position.set(0,v.mode==="foot"?2.35:2.3,0))}}}function u(_){!i||i.status!=="on"||!_||!_.length||i.send("sh",{id:e,s:_.map(M=>M.map(A=>+A.toFixed(2)))})}function y(_){for(let M of t.values())_(M)}return{connect:g,update:f,sendShots:u,each:y,get count(){return l()},get status(){return i?i.status:"off"}}}var{CAR_DEFS:wi,buildCar:qh,effectiveStats:Vp,applyCarSkin:Yh}=yh,ge=n=>document.getElementById(n),nn,Ct,zt,wt,bn=null,Hn=null,yo=null,Se=null,_t=null,Ve=null,Gn=null,Wp=null,En=null,Ce=null,Zt="boot",vn=!1,Vn=!1,vl="menu",Ot={speed:0,drifting:!1,nitro:!1,nitroFrac:1,steer:0},eu=null,ft=null,tu=null,El=null,Es=!1,gl="menu",mo=.6,Ft=null,So=!1,bl=ro(),Pn=null,ri=null,Xp=null,Sr=0,bs=null,Mo=null,yl=null,jn=null,xl=null,Zh=0,$h=1,kn=null,Lt=!1,Ie=null,ut=null,_o=null,$i=null,nu=null,_l=null,br=!1,Zi=0,vo=0,vr=null,yr=null,Up="",oi={save:null,pos:{x:0,z:0},heading:0,colliders:null,targets:null,audio:null,toast:null,onTargetHit:null},fl={x:0,z:0},Pt=new I,Sn=new I,cn=new I,Er={x:0,z:0},go={x:0,z:0,hitX:!1,hitZ:!1},Wt={name:"",mode:"car",x:0,z:0,h:0,speed:0,car:"sport",look:null,px:0,pz:0,ph:0,b:-1,w:null},Ts=null,pl={def:null,stats:null,group:null},ws=[],Jh=[],Kh=[],ai=62,Qh=0,Np=0;function hn(n,e=2200){let t=ge("toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(Np),Np=setTimeout(()=>t.classList.add("hidden"),e)}function Ji(){let n=Ce.cash.toLocaleString();ge("cash-val").textContent=n,ge("garage-cash").textContent=n}function Ml(n){Ce.cash=Math.max(0,Ce.cash+Math.round(n)),xn(Ce),Ji()}function qp(){Hn=wi.find(n=>n.id===Ce.currentCar)||wi[0],bn&&Ct.remove(bn),bn=qh(Hn),Yh(bn,Ce.paint[Hn.id],vs(Ce,Hn.id)),Ct.add(bn),Ts=null,yo=Vp(Hn,Ce.upgrades[Hn.id]||{}),ws=(bn.userData.wheels||[]).slice(),Jh=ws.filter(n=>n.position.z<0),Kh=bn.userData.brakeMats||[],ge("menu-car-name").textContent=Hn.name}function Yp(){let n=Se.heading;cn.set(-Math.sin(n),0,-Math.cos(n)),Pt.set(Se.pos.x-cn.x*9,4,Se.pos.z-cn.z*9),zt.position.copy(Pt)}function Zp(){let n=wt.spawn;Se.pos.x=n.x,Se.pos.z=n.z,Se.heading=n.heading||0,bl=ro(),Yp(),iu(0)}function Mr(){let n=Se.pos.x,e=Se.pos.z,t=Se.heading;qp(),Se.reset(yo),Se.pos.x=n,Se.pos.z=e,Se.heading=t,iu(0)}var si=new I;function iu(n){bn.position.set(Se.pos.x,0,Se.pos.z),bn.rotation.y=Se.heading;let e=Ot.speed*n*2.4;for(let i=0;i<ws.length;i++)ws[i].rotation.x+=e;for(let i=0;i<Jh.length;i++)Jh[i].rotation.y=Ot.steer*.45;let t=_t&&_t.input.throttle<0;if(bn.userData.setBrake)bn.userData.setBrake(t);else for(let i=0;i<Kh.length;i++)Kh[i].emissiveIntensity=t?4.5:1.8;if(jn){let i=Se.heading;si.set(-Math.sin(i),0,-Math.cos(i)),jn.position.set(Se.pos.x+si.x*1.8,1.1,Se.pos.z+si.z*1.8),xl.position.set(Se.pos.x+si.x*22,.4,Se.pos.z+si.z*22)}}var xo=new I;function tS(n,e){let t=ws[n];return e.setFromMatrixPosition(t.matrixWorld),e}var Xh=0;function nS(n){if(!bs||Zt!=="freeroam"||vn||Vn)return;bn.updateMatrixWorld();let e=ws.length;if(Ot.drifting&&$h>.3)for(let i=0;i<e;i++)ws[i].position.z<0||(tS(i,xo),Math.random()<.85*$h&&bs.emit(xo.x+(Math.random()-.5)*.4,.35,xo.z+(Math.random()-.5)*.4,{vx:(Math.random()-.5)*1.5,vy:1+Math.random(),vz:(Math.random()-.5)*1.5,life:.6+Math.random()*.4,size:.9,grow:2.6}),Math.random()<.6&&yl.add(xo.x,xo.z,Se.heading));if(Xh+=n,(_t&&_t.input.throttle||0)>.4&&Xh>.09){Xh=0;let i=Se.heading;si.set(-Math.sin(i),0,-Math.cos(i));let s=Math.cos(i),r=-Math.sin(i);for(let o of[-.45,.45]){let a=Se.pos.x-si.x*2.2+s*o,l=Se.pos.z-si.z*2.2+r*o;Mo.emit(a,.32,l,{vx:-si.x*2,vy:.8,vz:-si.z*2,life:.5,size:.55,grow:1.6})}}bs.update(n),Mo.update(n)}function iS(n,e){return $p(n,e,1.15)}function $p(n,e,t){let i=n,s=e,r=!1,o=!1,a=tu||wt.colliders;for(let l=0;l<a.length;l++){let c=a[l];if(i+t<c.minX||i-t>c.maxX||s+t<c.minZ||s-t>c.maxZ)continue;let h=Math.max(c.minX,Math.min(i,c.maxX)),d=Math.max(c.minZ,Math.min(s,c.maxZ)),p=i-h,m=s-d,x=p*p+m*m;if(!(x>=t*t))if(x>1e-8){let g=Math.sqrt(x),f=(t-g)/g,u=p*f,y=m*f;i+=u,s+=y,Math.abs(u)>Math.abs(y)?r=!0:o=!0}else{let g=i-c.minX,f=c.maxX-i,u=s-c.minZ,y=c.maxZ-s,_=Math.min(g,f,u,y);_===g?(i=c.minX-t,r=!0):_===f?(i=c.maxX+t,r=!0):_===u?(s=c.minZ-t,o=!0):(s=c.maxZ+t,o=!0)}}return go.x=i,go.z=s,go.hitX=r,go.hitZ=o,go}function su(n,e,t){let i=$p(n,e,t);if(ft)return i;let s=Se.heading,r=-Math.sin(s),o=-Math.cos(s);for(let a of[-1.25,0,1.25]){let l=Se.pos.x+r*a,c=Se.pos.z+o*a,h=1+t,d=i.x-l,p=i.z-c,m=Math.hypot(d,p);m<h&&m>1e-6&&(i.x=l+d/m*h,i.z=c+p/m*h)}return i}function Ki(){if(!ut)return;ho(ut,Ce.outfit),Uh(ut,Ce.equipped);let n=Ce.equipped&&qi(Ce.equipped);ge("weapon-name").textContent=n?n.name.toUpperCase():"UNARMED";let e=ge("weapon-ammo");e.textContent=n?String(Ce.ammo[n.id]|0):Ce.weapons.length?"tap \u{1F52B} to draw":"guns at LOCK & LOAD",e.classList.toggle("tip",!n)}function ru(){for(let n of["speedo","gear-hud","nitro-bar"])ge(n).classList.toggle("hidden",Lt);ge("weapon-hud").classList.toggle("hidden",!Lt)}function Jp(){if(Math.abs(Ot.speed)>4){hn("Slow down to get out");return}let n=Ih(Se.pos.x,Se.pos.z,Se.heading),e=su(n.x,n.z,.45);Ie.reset(e.x,e.z,Se.heading),Se.vel.x=0,Se.vel.z=0,Se.speed=0,Ot.speed=0,Ot.drifting=!1,Ot.nitro=!1,Ot.steer=0,bl=ro(),Lt=!0,ut.visible=!0,ut.position.set(Ie.pos.x,0,Ie.pos.z),Ki(),_t.setMode("foot"),ru(),Ve.engine(0,0),Ve.skid(!1),Ve.beep(420,.06)}function Kp(){Lt&&(Lt=!1,ut.visible=!1,Zi=0,_t&&_t.setMode("drive"),ru(),bl=ro(),Ve&&Ve.beep(520,.06),vo&&(xn(Ce),vo=0))}function sS(n){let e=Ie.heading,t=Ie.pos.x,i=Ie.pos.z;cn.set(-Math.sin(e),0,-Math.cos(e));let s=Zi>0,r=s?3.6:4.6,o=s?2.2:2.6,a=Math.cos(e),l=-Math.sin(e),c=s?.7:.35;if(Sn.set(t-cn.x*r+a*c,o,i-cn.z*r+l*c),ft){let d=ft.room.bounds,p=.45;Sn.x=Math.max(d.minX+p,Math.min(d.maxX-p,Sn.x)),Sn.z=Math.max(d.minZ+p,Math.min(d.maxZ-p,Sn.z)),Sn.y=Math.min(Sn.y,3.9)}let h=1-Math.exp(-n*7);Pt.x+=(Sn.x-Pt.x)*h,Pt.y+=(Sn.y-Pt.y)*h,Pt.z+=(Sn.z-Pt.z)*h,zt.position.copy(Pt),zt.lookAt(t+cn.x*5+a*c,1.45,i+cn.z*5+l*c),Math.abs(60-ai)>.25&&(ai+=(60-ai)*Math.min(1,n*4),zt.fov=ai,zt.updateProjectionMatrix())}function rS(n){if(Ie.update(_t.input,n,su),ut.position.x=Ie.pos.x,ut.position.z=Ie.pos.z,ut.rotation.y=Ie.heading,_t.consumeCycle()){let i=Lh(Ce);xn(Ce),Ki(),Ce.weapons.length?hn(i?qi(i).name:"Holstered",1200):hn("No guns yet \u2014 visit LOCK & LOAD",1600)}oi.pos.x=Ie.pos.x,oi.pos.z=Ie.pos.z,oi.heading=Ie.heading;let e=_t.consumeFireEdge();e&&!Ce.equipped&&Ce.weapons.length&&(Lh(Ce),Ki()),_o.update(n,oi,_t.input.fire,e).fired&&(rp(ut),Zi=.9,vo++,ge("weapon-ammo").textContent=String(Ce.ammo[Ce.equipped]|0)),_t.input.fire&&Ce.equipped&&(Zi=Math.max(Zi,.3)),Zi=Math.max(0,Zi-n),sl(ut,Ie.phase,Ie.speed,Zi>0&&!!Ce.equipped,n),sS(n),vo&&Qh%120===0&&(xn(Ce),vo=0)}function _n(n,e,t){if(vr=n,yr=e,t!==Up){Up=t;let i=ge("btn-action");i.textContent=t||"",i.classList.toggle("hidden",!t)}}function oS(n,e){let t=null,i=1.5;for(let s of wt.buildings){if(dr(n,e,s.door.x+s.door.nx*.5,s.door.z+s.door.nz*.5)<2.2)return s;let o=Math.max(s.minX,Math.min(n,s.maxX)),a=Math.max(s.minZ,Math.min(e,s.maxZ)),l=Math.hypot(n-o,e-a);l<i&&(i=l,t=s)}return t}function ou(){let n=Ie.heading;if(cn.set(-Math.sin(n),0,-Math.cos(n)),Pt.set(Ie.pos.x-cn.x*4.6,2.6,Ie.pos.z-cn.z*4.6),ft){let e=ft.room.bounds,t=.45;Pt.x=Math.max(e.minX+t,Math.min(e.maxX-t,Pt.x)),Pt.z=Math.max(e.minZ+t,Math.min(e.maxZ-t,Pt.z))}zt.position.copy(Pt)}function Qp(n){let e=eu.get(gp(n.id)),t=dr(Ie.pos.x,Ie.pos.z,n.door.x,n.door.z)<2.6,i,s,r,o;if(t)r=n.door.nx,o=n.door.nz,i=n.door.x+r*1.4,s=n.door.z+o*1.4;else{let a=Math.max(n.minX,Math.min(Ie.pos.x,n.maxX)),l=Math.max(n.minZ,Math.min(Ie.pos.z,n.maxZ)),c=Ie.pos.x-a,h=Ie.pos.z-l,d=Math.hypot(c,h)||1;r=c/d,o=h/d,i=a+r*1.4,s=l+o*1.4}ft={b:n,room:e,back:{x:i,z:s,heading:Math.atan2(-r,-o)}},tu=e.colliders,oi.colliders=e.colliders,oi.targets=[],Ie.reset(e.spawn.x,e.spawn.z,e.spawn.heading),ut.position.set(Ie.pos.x,0,Ie.pos.z),ou(),_n(null,null,""),Ve.beep(640,.07),hn("\u{1F3E2} Inside: "+mp[e.style]+" \u2014 EXIT pad is behind you",2200)}function Tl(){if(!ft)return;let n=ft.back;ft=null,tu=null,oi.colliders=wt.colliders,oi.targets=$i.targets;let e=su(n.x,n.z,.45);Ie.reset(e.x,e.z,n.heading),ut.position.set(Ie.pos.x,0,Ie.pos.z),ou(),_n(null,null,""),Ve.beep(520,.07)}function Op(){if(Lt){if(ft){let i=dr(Ie.pos.x,Ie.pos.z,ft.room.exit.x,ft.room.exit.z);if(i<.8){Tl();return}return i<2.4?_n("exit",null,"\u{1F6AA} EXIT BUILDING"):_n(null,null,"")}let n=null,e=2.4;for(let i of $i.stores){let s=dr(Ie.pos.x,Ie.pos.z,i.door.x,i.door.z);s<e&&(e=s,n=i)}if(n)return _n("shop",n,(n.type==="garage"?"\u{1F527} ":n.type==="guns"?"\u{1F52B} ":"\u{1F455} ")+"ENTER "+n.name);if(dr(Ie.pos.x,Ie.pos.z,Se.pos.x,Se.pos.z)<4.2)return _n("in",null,"\u{1F697} GET IN");let t=oS(Ie.pos.x,Ie.pos.z);return t?_n("enter",t,"\u{1F3E2} ENTER BUILDING"):_n(null,null,"")}if(Math.abs(Ot.speed)<4)return _n("out",null,"\u{1F6AA} GET OUT");_n(null,null,"")}function Fp(){vr==="out"?Jp():vr==="in"?Kp():vr==="enter"&&yr?Qp(yr):vr==="exit"?Tl():vr==="shop"&&yr&&(yr.type==="garage"?Sl("play"):aS(yr))}function aS(n){br=!0,_n(null,null,""),Ve.beep(700,.06),nu.open(n)}function jp(){br=!1,nu.close(),Ki(),Ji()}function lS(n){let e=Se.heading,t=Se.pos.x,i=Se.pos.z;cn.set(-Math.sin(e),0,-Math.cos(e));let s=Math.abs(Ot.speed),r=8.5+s*.045,o=3.6+s*.014;Sn.set(t-cn.x*r,o,i-cn.z*r);let a=1-Math.exp(-n*5.5);Pt.x+=(Sn.x-Pt.x)*a,Pt.y+=(Sn.y-Pt.y)*a,Pt.z+=(Sn.z-Pt.z)*a,zt.position.copy(Pt),zt.lookAt(t+cn.x*5,1.7,i+cn.z*5);let l=62+Math.min(14,s*.22)+(Ot.nitro?6:0);Math.abs(l-ai)>.25&&(ai+=(l-ai)*Math.min(1,n*4),zt.fov=ai,zt.updateProjectionMatrix())}function cS(n){return n<2?"N":n<20?"1":n<40?"2":n<65?"3":n<95?"4":n<125?"5":"6"}function hS(){let n=Math.abs(Ot.speed)*2.2;ge("speed-val").textContent=Math.round(n),ge("gear-hud").textContent=cS(n),ge("nitro-fill").style.width=(Math.max(0,Math.min(1,Ot.nitroFrac))*100).toFixed(1)+"%"}function Qi(){for(let n of["main-menu","pause-menu","garage"])ge(n).classList.add("hidden")}function uS(){return Es||So}function au(){br&&jp(),ft&&Tl(),Lt&&Kp(),_n(null,null,"")}function wl(){Zt="menu",vn=!1,Vn=!1,Gn&&Gn.active&&Gn.exit(),au(),_t&&(_t.setMode("drive"),_t.detach()),Qi(),ge("main-menu").classList.remove("hidden"),ge("hud").classList.add("hidden"),ge("touch-controls").classList.add("hidden"),ge("drag-ui").classList.add("hidden"),Ft&&Ft.active&&Ft.stop(),ge("objective").classList.add("hidden"),ge("m-tutorial").classList.toggle("hidden",!!Ce.tutorialDone),Ve.engine(0,0),Ve.skid(!1)}function ml(){Gn&&Gn.active&&Gn.exit(),au(),jn&&(jn.intensity=Zh),ge("drag-ui").classList.add("hidden"),Zt="freeroam",vn=!1,Vn=!1,Qi(),ge("hud").classList.remove("hidden"),ge("touch-controls").classList.remove("hidden"),_t.attach(),_t.setMode("drive"),Zp(),Ji(),!Ce.tutorialDone&&!Ce.tutorialSkipped?_S():hn("Free roam \u2014 drift for cash, walk into any building!")}function zp(){au(),Zt="drag",vn=!1,Vn=!1,jn&&(jn.intensity=0),Qi(),ge("hud").classList.add("hidden"),ge("touch-controls").classList.remove("hidden"),_t.attach(),_t.setMode("drag"),ge("drag-ui").classList.remove("hidden"),Gn.enter()}function Bp(){Zt!=="freeroam"&&Zt!=="drag"||Vn||br||uS()||(vn=!0,_n(null,null,""),Qi(),ge("pause-menu").classList.remove("hidden"))}function dS(){vn=!1,Qi()}function Sl(n){vl=n,Vn=!0,Wp.refresh(),Ji(),Qi(),ge("garage").classList.remove("hidden")}function fS(){Vn=!1,Qi(),ge("hud").classList.toggle("hidden",Zt!=="freeroam"),ut&&Ki(),vl==="menu"?wl():vl==="pause"?(vn=!0,ge("pause-menu").classList.remove("hidden")):vn=!1,Ji()}var pS=!1;function jh(n,e){gl=n,Vn&&(Vn=!1),Zt==="freeroam"&&(vn=!0),Es=!0,Qi(),ge("hud").classList.add("hidden"),ge("touch-controls").classList.add("hidden"),_n(null,null,""),pS=ut.visible,El.open(e||"car")}function mS(n){if(!Lt)if(n==="driver"){let e=Ih(Se.pos.x,Se.pos.z,Se.heading);ut.position.set(e.x,0,e.z),ut.rotation.y=Se.heading,sl(ut,0,0,!1,0),ut.visible=!0}else ut.visible=!1}function gS(){if(Es=!1,El.close(),ut.visible=Lt,Ki(),gl==="menu"){wl();return}if(gl==="garage"){Sl(vl);return}(Zt==="freeroam"||Zt==="drag")&&(ge("hud").classList.toggle("hidden",Zt!=="freeroam"),ge("touch-controls").classList.remove("hidden"),gl==="pause"?(vn=!0,ge("pause-menu").classList.remove("hidden")):vn=!1,Lt?ou():Yp())}function xS(n){mo+=n*.35;let e=El.tab==="driver",t=e?ut.position.x:Se.pos.x,i=e?ut.position.z:Se.pos.z,s=e?3.4:7.2,r=e?1.7:2.6,o=e?1.05:.75;zt.position.set(t+Math.sin(mo)*s,r,i+Math.cos(mo)*s);let a=Math.cos(mo),l=-Math.sin(mo),c=e?.9:2.2;zt.lookAt(t+a*c,o,i+l*c),Math.abs(55-ai)>.25&&(ai=55,zt.fov=55,zt.updateProjectionMatrix()),Er.x=t,Er.z=i,wt.update(n,Er)}function _S(){Ft&&(Ft.start(),ge("objective").classList.remove("hidden"),em(),hn("\u{1F393} TUTORIAL \u2014 finish it for $"+al.toLocaleString()+" + a free car!",3200))}function em(){if(!Ft.active){ge("objective").classList.add("hidden");return}ge("obj-step").textContent="STEP "+(Ft.step+1)+"/"+Ft.total,ge("obj-text").textContent=Ft.text;let n=Ft.target(),e=Lt?Ie.pos.x:Se.pos.x,t=Lt?Ie.pos.z:Se.pos.z,i=Lt?Ie.heading:Se.heading,s=ge("obj-arrow"),r=ge("obj-dist");if(n&&!ft){let o=Math.atan2(-(n.x-e),-(n.z-t)),a=Math.atan2(Math.sin(o-i),Math.cos(o-i));s.style.transform="rotate("+(-a).toFixed(3)+"rad)",s.classList.remove("hidden"),r.textContent=Math.round(Math.hypot(n.x-e,n.z-t))+" m"}else s.classList.add("hidden"),r.textContent=Ft.text.startsWith("DRIFT")?Math.round(Ft.driftProgress*100)+"%":""}function tm(){Ce.tutorialDone=!0,Ml(al),xn(Ce),ge("objective").classList.add("hidden"),Ve.beep(880,.1),setTimeout(()=>Ve.beep(1175,.14),120),vS()}function vS(){So=!0,_n(null,null,"");let n={topSpeed:1,accel:1,handling:1,grip:1};for(let t of wi)for(let i in n)n[i]=Math.max(n[i],t.stats[i]);let e=(t,i,s)=>`<div class="stat-row"><span>${t}</span><div class="sbar"><i style="width:${Math.max(5,Math.round(i/s*100))}%"></i></div></div>`;ge("pick-list").innerHTML=wi.map(t=>`<div class="car-card"><div class="cinfo"><b>${t.name}</b><small>${t.desc} \xB7 worth $${t.price.toLocaleString()}</small><div class="stat-bars">${e("SPD",t.stats.topSpeed,n.topSpeed)}${e("ACC",t.stats.accel,n.accel)}${e("HDL",t.stats.handling,n.handling)}${e("GRP",t.stats.grip,n.grip)}</div></div><button class="buy-btn" data-id="${t.id}">PICK FREE</button></div>`).join(""),ge("car-pick").classList.remove("hidden")}function nm(n){let e=wi.find(t=>t.id===n);e&&(Ce.owned.includes(n)||Ce.owned.push(n),Ce.upgrades[n]||(Ce.upgrades[n]={engine:0,turbo:0,tires:0,suspension:0,nitro:0}),typeof Ce.paint[n]!="number"&&(Ce.paint[n]=e.colors[0]),Ce.currentCar=n,xn(Ce),Mr(),ge("car-pick").classList.add("hidden"),So=!1,Ji(),hn("\u{1F3C6} "+e.name+" is yours! +$"+al.toLocaleString()+" in the bank",3200),Ve.beep(990,.1))}function Hp(n,e){let t=ge("mp-status");t.classList.remove("hidden"),t.className="mp-status "+n,t.textContent=n==="on"?"\u25CF online \xB7 "+e+(e===1?" player":" players"):n==="connecting"?"\u25CF connecting\u2026":"\u25CF offline";let i=ge("online-hud");i.textContent=n==="on"?"\u{1F310} "+e+" online":"\u{1F310} \u2026",i.classList.toggle("dim",n!=="on")}function yS(){return Wt.name=Ce.name,Wt.car=Hn.id,Ts||(Ts=Yf(Ce,Hn.id)),Wt.look=Ts,Wt.b=ft?ft.b.id:-1,Lt?(Wt.mode="foot",Wt.x=Ie.pos.x,Wt.z=Ie.pos.z,Wt.h=Ie.heading,Wt.speed=Ie.speed,Wt.px=Se.pos.x,Wt.pz=Se.pos.z,Wt.ph=Se.heading,Wt.w=Ce.equipped||null):(Wt.mode="car",Wt.x=Se.pos.x,Wt.z=Se.pos.z,Wt.h=Se.heading,Wt.speed=Ot.speed,Wt.w=null),Wt}async function MS(){nn=new qr({antialias:!1,powerPreference:"high-performance"}),nn.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),nn.setSize(kn.view.w,kn.view.h),nn.toneMapping=to,nn.toneMappingExposure=1,nn.shadowMap.enabled=!0,nn.shadowMap.type=Ha,ge("game-container").appendChild(nn.domElement),Ct=new or,zt=new tn(62,kn.view.w/kn.view.h,.1,3e3),wt=bf(Ct,op),$i=lp(Ct,wt);try{let{RoomEnvironment:e}=await Promise.resolve().then(()=>(Ep(),Sp)),t=new rr(nn);Ct.environment=t.fromScene(new e,.04).texture,t.dispose()}catch(e){console.warn("env map off",e)}let n=Ff();Ct.add(n.mesh),Xp={uniforms:n.uniforms,sun:wt.sun,hemi:wt.hemi,scene:Ct,renderer:nn},im("day",!0);try{Pn=(await Promise.resolve().then(()=>(Dp(),Ip))).createPostFX(nn,Ct,zt),Pn.setBloomStrength(Ja.day.bloom)}catch(e){console.warn("postfx off",e),Pn=null}ri=new $a("auto"),ri.onChange(kp),kp(ri.level,Th(ri.level)),bs=new bi(Ct,70,{color:14211288,opacity:.42}),Mo=new bi(Ct,40,{color:7829367,opacity:.3,size:.9}),yl=new Ka(Ct,500),jn=new Oa(13624575,0,60,.5,.45,1.2),xl=new Dt,Ct.add(xl),jn.target=xl,Ct.add(jn)}function kp(n,e){let t=Math.min(window.devicePixelRatio||1,e.pixelRatioCap);nn.setPixelRatio(t),Pn&&(Pn.setPixelRatio(Math.min(t,1)),Pn.setSize(kn.view.w,kn.view.h),Pn.setBloomEnabled(e.bloom));let i=e.shadows;(nn.shadowMap.enabled!==i||wt&&wt.sun.castShadow!==i)&&(nn.shadowMap.enabled=i,wt&&(wt.sun.castShadow=i),Ct.traverse(s=>{s.material&&(s.material.needsUpdate=!0)})),wt&&wt.sun.shadow.mapSize.set(e.shadowSize,e.shadowSize),$h=e.particles,yl&&yl.setVisible(e.particles>.3)}function im(n,e){let t=wh;typeof n=="string"&&(Sr=t.indexOf(n)),Sr<0&&(Sr=0);let i=t[Sr],s=zf(Xp,i),r=i==="day"?0:i==="sunset"?.45:1;wt&&wt.setGlow(r),Pn&&Pn.setBloomStrength(s.bloom),Zh=i==="day"?0:i==="sunset"?60:160,jn&&Zt!=="drag"&&(jn.intensity=Zh);let o=ge("tod-btn");o&&(o.textContent=i==="day"?"\u2600\uFE0F":i==="sunset"?"\u{1F307}":"\u{1F319}"),e||hn(s.label+" mode")}function SS(){Sr=(Sr+1)%wh.length,im()}var Gp=performance.now();function sm(n){requestAnimationFrame(sm);let e=(n-Gp)/1e3;Gp=n,e>0||(e=.016),e>.1&&(e=.1),Qh++;let t=Zt==="freeroam"&&!vn&&!Vn&&!br&&!Es&&!So;if(Es)xS(e);else if(t&&Lt)rS(e),wt.update(e,Ie.pos),$i.update(e),eu.update(e,ft&&ft.room),bs.update(e),Mo.update(e),ri&&ri.update(e),Ve.engine(0,0),Ve.skid(!1),fl.x=Se.pos.x,fl.z=Se.pos.z,ft?_l.draw(ft.back.x,ft.back.z,Ie.heading,fl,En):_l.draw(Ie.pos.x,Ie.pos.z,Ie.heading,fl,En),Op(),_t.consumeAction()&&Fp();else if(t){Ot=Se.update(_t.input,e,iS);let i=Bf(bl,Ot.drifting,Ot.speed,e);i>0&&(Ml(i),hn("DRIFT +$"+i.toLocaleString())),Er.x=Se.pos.x,Er.z=Se.pos.z,wt.update(e,Er),iu(e),lS(e),hS(),nS(e),$i.update(e),_o.update(e,oi,!1,!1),_l.draw(Se.pos.x,Se.pos.z,Se.heading,null,En),Op(),_t.consumeAction()&&Fp(),ri&&ri.update(e);let s=Math.min(1,Math.abs(Ot.speed)/(yo.topSpeed*1.15));Ve.engine(s,Math.abs(_t.input.throttle||0)),Ve.skid(Ot.drifting)}else Zt==="drag"&&!vn&&!Vn&&!Es?Gn.active&&Gn.update(e):(Ve.engine(0,0),Ve.skid(!1));if(t&&Ft&&Ft.active){let i=Ft.update(e,{pos:Lt?Ie.pos:Se.pos,drifting:!Lt&&Ot.drifting,speed:Lt?0:Ot.speed,onFoot:Lt,inside:ft?ft.b.id:-1});i==="next"?(Ve.beep(880,.08),hn("\u2705 Nice! Next: "+Ft.text,2200)):i==="done"&&tm(),Qh%3===0&&em()}En&&En.update(e,Zt==="freeroam"?yS():null,n),bs&&(Zt!=="freeroam"||vn||Vn||br)&&(bs.update(e),Mo.update(e)),Pn?Pn.render():nn.render(Ct,zt)}function ES(){ge("m-freeroam").onclick=()=>{Ve.unlock(),kn.goLandscape(),Ve.beep(600,.06),ml()},ge("m-drag").onclick=()=>{Ve.unlock(),kn.goLandscape(),Ve.beep(600,.06),zp()},ge("store-close").onclick=()=>{Ve.beep(500,.05),jp()},ge("m-garage").onclick=()=>{Ve.unlock(),Sl("menu")},ge("p-resume").onclick=()=>{Ve.beep(600,.05),kn.goLandscape(),dS()},ge("p-freeroam").onclick=()=>{Ve.beep(600,.05),ml()},ge("p-drag").onclick=()=>{Ve.beep(600,.05),zp()},ge("p-garage").onclick=()=>Sl("pause"),ge("p-quit").onclick=()=>wl(),ge("menu-btn").onclick=Bp,ge("garage-close").onclick=fS,ge("drag-exit").onclick=()=>{Gn.active&&Gn.exit(),ml()},ge("m-editor").onclick=()=>{Ve.unlock(),Ve.beep(600,.05),jh("menu","car")},ge("p-editor").onclick=()=>{Ve.beep(600,.05),jh("pause",Lt?"driver":"car")},ge("se-done").onclick=()=>{Ve.beep(500,.05),gS()},ge("m-tutorial").onclick=()=>{Ve.unlock(),kn.goLandscape(),Ve.beep(600,.06),Ce.tutorialSkipped=!1,xn(Ce),ml()},ge("obj-skip").onclick=()=>{Ft.stop(),Ce.tutorialSkipped=!0,xn(Ce),ge("objective").classList.add("hidden"),hn("Tutorial skipped \u2014 replay it from the main menu for $100K",2600)},ge("pick-list").addEventListener("click",n=>{let e=n.target.closest("button[data-id]");e&&nm(e.dataset.id)}),ge("tod-btn")&&(ge("tod-btn").onclick=()=>{Ve.beep(600,.05),SS()}),ge("gfx-btn")&&(ge("gfx-btn").onclick=()=>{Ve.beep(600,.05);let n=ri.cycleMode();ge("gfx-btn").textContent=n==="auto"?"\u2728":n==="high"?"\u2728+":"\u2728\u2212",hn("Graphics: "+n.toUpperCase()+" ("+Of[ri.level]+")")}),window.addEventListener("pointerdown",()=>Ve.unlock()),window.addEventListener("keydown",()=>Ve.unlock()),document.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("gesturestart",n=>n.preventDefault()),document.addEventListener("visibilitychange",()=>{document.hidden&&(Zt==="freeroam"||Zt==="drag")&&!vn&&Bp()})}function bS(n,e){nn&&(zt.aspect=n/e,zt.updateProjectionMatrix(),nn.setSize(n,e),Pn&&Pn.setSize(n,e))}async function TS(){try{Ce=qf(Jf(Uf())),Ve=Pf(),kn=kf(bS),await MS(),_t=Tf({isRotated:()=>kn.rotated}),Ie=new il,ut=Dh(Ce.outfit),ut.visible=!1,Ct.add(ut),_o=hp(Ct),Object.assign(oi,{save:Ce,colliders:wt.colliders,targets:$i.targets,audio:Ve,toast:hn,onTargetHit:()=>{Ml(Ph),hn("TARGET +$"+Ph,900)},onShot:n=>{En&&En.sendShots(n)}}),eu=xp(Ct),Ft=_p(Ct,wt),nu=up({save:Ce,persist:()=>xn(Ce),toast:n=>hn(n,1600),beep:(n,e)=>Ve.beep(n,e),onChange:()=>{Ji(),Ki()}}),_l=fp(ge("minimap"),$i.stores),Ki(),ru(),/[?&]debug\b/.test(location.search)&&(window.__cd={tp:(n,e,t)=>{Lt?Ie.reset(n,e,t||0):(Se.pos.x=n,Se.pos.z=e,Se.heading=t||0)},save:()=>Ce,stores:()=>$i.stores,buildings:()=>wt.buildings,inside:()=>ft&&{id:ft.b.id,style:ft.room.style},enter:n=>Qp(n),exit:()=>Tl(),getOut:()=>Jp(),tut:()=>Ft&&{active:Ft.active,step:Ft.step},finishTut:()=>tm(),pick:n=>nm(n),mp:()=>En&&{status:En.status,count:En.count},state:()=>({state:Zt,onFoot:Lt,editorOpen:Es,pickOpen:So,cash:Ce.cash}),shot:(n,e,t,i)=>_o.remoteShot(n,e,t,i),cam:()=>({c:zt.position.toArray().map(n=>+n.toFixed(2)),p:ut.position.toArray().map(n=>+n.toFixed(2)),pv:ut.visible,f:[Ie.pos.x,Ie.pos.z,Ie.heading]})}),qp(),Se=new qa(yo),Zp(),Wp=Nf({save:Ce,getDef:n=>wi.find(e=>e.id===n),onSelectCar:()=>Mr(),onPaint:()=>Mr(),onWheels:()=>Mr(),refreshScene:()=>Mr(),openEditor:()=>jh("garage","car")}),El=pp({save:Ce,cars:wi,persist:()=>xn(Ce),beep:(n,e)=>Ve.beep(n,e),onCar:n=>{n?Mr():Yh(bn,Ce.paint[Hn.id],vs(Ce,Hn.id)),Ts=null},onOutfit:()=>{ho(ut,Ce.outfit),Ts=null},onName:()=>{Ts=null},onTab:n=>mS(n)}),En=Mp({scene:Ct,CAR_DEFS:wi,buildCar:qh,applyCarSkin:Yh,buildCharacter:Dh,setOutfit:ho,setHeldWeapon:Uh,animateCharacter:sl,unpackLook:Zf,remoteShot:(n,e,t,i)=>_o.remoteShot(n,e,t,i),localBuilding:()=>ft?ft.b.id:-1,onStatus:(n,e)=>Hp(n==="on"?"on":n==="connecting"?"connecting":"off",e),onCount:n=>{En&&En.status==="on"&&Hp("on",n)}}),En.connect(),Gn=Cf({scene:Ct,camera:zt,buildCar:qh,CAR_DEFS:wi,effectiveStats:Vp,getPlayer:()=>(pl.def=Hn,pl.stats=yo,pl.group=bn,pl),controls:_t,audio:Ve,addCash:Ml,toast:hn,city:wt}),ES(),Ji(),ge("loading").classList.add("hidden"),wl(),requestAnimationFrame(sm)}catch(n){console.error(n),ge("loading").innerHTML='<p style="color:#ff5e3a">Failed to start: '+String(n&&n.message||n)+"</p>"}}TS();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
